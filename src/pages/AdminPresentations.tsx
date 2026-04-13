import { useState, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  Plus, MoreHorizontal, Trash2, Eye, Upload, FileText,
  Presentation, Download, Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type FileType = "pptx" | "pdf";

type PresentationFile = {
  id: string;
  name: string;
  fileName: string;
  fileType: FileType;
  fileSize: string;
  course: string;
  status: "draft" | "published";
  uploadedAt: string;
};

const createId = () => Math.random().toString(36).slice(2, 9);

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} o`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`;
};

const courses = [
  "Athletic Performance Fundamentals",
  "Strength & Conditioning Mastery",
  "Yoga for Athletes",
];

const initialFiles: PresentationFile[] = [
  {
    id: "p1",
    name: "Introduction à la Performance Athlétique",
    fileName: "intro-performance.pptx",
    fileType: "pptx",
    fileSize: "4.2 Mo",
    course: "Athletic Performance Fundamentals",
    status: "published",
    uploadedAt: "31 mars 2026",
  },
  {
    id: "p2",
    name: "Guide de Musculation - Module 1",
    fileName: "guide-musculation-m1.pdf",
    fileType: "pdf",
    fileSize: "1.8 Mo",
    course: "Strength & Conditioning Mastery",
    status: "published",
    uploadedAt: "28 mars 2026",
  },
  {
    id: "p3",
    name: "Plan d'entraînement Yoga",
    fileName: "plan-yoga.pptx",
    fileType: "pptx",
    fileSize: "6.1 Mo",
    course: "Yoga for Athletes",
    status: "draft",
    uploadedAt: "25 mars 2026",
  },
];

const FileIcon = ({ type, className }: { type: FileType; className?: string }) => (
  <div
    className={cn(
      "flex items-center justify-center rounded-lg shrink-0",
      type === "pptx" ? "bg-orange-100 text-orange-600" : "bg-red-100 text-red-600",
      className
    )}
  >
    {type === "pptx" ? <Presentation className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
  </div>
);

const AdminPresentations = () => {
  const [files, setFiles] = useState<PresentationFile[]>(initialFiles);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<"all" | FileType>("all");

  const [newName, setNewName] = useState("");
  const [newCourse, setNewCourse] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (ext !== "pptx" && ext !== "pdf") {
      toast({ title: "Format non supporté", description: "Seuls les fichiers .pptx et .pdf sont acceptés.", variant: "destructive" });
      return;
    }
    setSelectedFile(file);
    if (!newName) setNewName(file.name.replace(/\.[^.]+$/, ""));
  };

  const handleUpload = () => {
    if (!selectedFile || !newName.trim()) return;
    const ext = selectedFile.name.split(".").pop()?.toLowerCase() as FileType;
    const p: PresentationFile = {
      id: createId(),
      name: newName,
      fileName: selectedFile.name,
      fileType: ext,
      fileSize: formatFileSize(selectedFile.size),
      course: newCourse,
      status: "draft",
      uploadedAt: "Aujourd'hui",
    };
    setFiles([p, ...files]);
    setNewName("");
    setNewCourse("");
    setSelectedFile(null);
    setUploadOpen(false);
    toast({ title: "Fichier importé", description: `${p.fileName} a été ajouté avec succès.` });
  };

  const handleDelete = (id: string) => {
    setFiles(files.filter((f) => f.id !== id));
    toast({ title: "Fichier supprimé" });
  };

  const toggleStatus = (id: string) => {
    setFiles(files.map((f) => (f.id === id ? { ...f, status: f.status === "draft" ? "published" : "draft" } : f)));
  };

  const filtered = files.filter((f) => {
    if (filterType !== "all" && f.fileType !== filterType) return false;
    if (search && !f.name.toLowerCase().includes(search.toLowerCase()) && !f.fileName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Admin</Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm font-medium text-foreground">Présentations & Documents</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Présentations & Documents</h1>
            <p className="text-muted-foreground mt-1">Importez vos fichiers PowerPoint et PDF pour les associer à vos cours.</p>
          </div>
          <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
            <DialogTrigger asChild>
              <Button className="shrink-0">
                <Upload className="h-4 w-4 mr-2" /> Importer un fichier
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-display">Importer un fichier</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                {/* Drop zone */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "w-full border-2 border-dashed rounded-xl p-8 text-center transition-colors",
                    selectedFile ? "border-secondary bg-secondary/5" : "border-border hover:border-muted-foreground/40 hover:bg-muted/50"
                  )}
                >
                  {selectedFile ? (
                    <div className="flex flex-col items-center gap-2">
                      <FileIcon type={selectedFile.name.endsWith(".pdf") ? "pdf" : "pptx"} className="h-12 w-12 p-3" />
                      <p className="font-medium text-sm text-foreground">{selectedFile.name}</p>
                      <p className="text-xs text-muted-foreground">{formatFileSize(selectedFile.size)}</p>
                      <p className="text-xs text-secondary">Cliquez pour changer</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="text-sm text-foreground font-medium">Cliquez pour sélectionner un fichier</p>
                      <p className="text-xs text-muted-foreground">Formats acceptés : .pptx, .pdf — Max 50 Mo</p>
                    </div>
                  )}
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pptx,.pdf"
                  className="hidden"
                  onChange={handleFileSelect}
                />

                <div>
                  <Label>Nom du document</Label>
                  <Input
                    placeholder="Ex: Introduction au module 1"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="mt-1.5"
                  />
                </div>
                <div>
                  <Label>Cours associé (optionnel)</Label>
                  <Select value={newCourse} onValueChange={setNewCourse}>
                    <SelectTrigger className="mt-1.5"><SelectValue placeholder="Sélectionner un cours" /></SelectTrigger>
                    <SelectContent>
                      {courses.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <Button className="w-full" onClick={handleUpload} disabled={!selectedFile || !newName.trim()}>
                  <Upload className="h-4 w-4 mr-2" /> Importer
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Rechercher…" value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          <div className="flex gap-2">
            {(["all", "pptx", "pdf"] as const).map((t) => (
              <Button key={t} size="sm" variant={filterType === t ? "default" : "outline"} onClick={() => setFilterType(t)}>
                {t === "all" ? "Tous" : t === "pptx" ? "PowerPoint" : "PDF"}
              </Button>
            ))}
          </div>
        </div>

        {/* File list */}
        {filtered.length === 0 ? (
          <Card className="shadow-card p-12 text-center">
            <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="font-display font-semibold text-foreground">Aucun fichier trouvé</p>
            <p className="text-sm text-muted-foreground mt-1">Importez votre premier fichier pour commencer.</p>
          </Card>
        ) : (
          <div className="space-y-3">
            {filtered.map((f) => (
              <Card key={f.id} className="shadow-card hover:shadow-elevated transition-shadow">
                <CardContent className="p-4 flex items-center gap-4">
                  <FileIcon type={f.fileType} className="h-11 w-11 p-2.5" />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-card-foreground truncate">{f.name}</h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                      <span className="text-xs text-muted-foreground">{f.fileName}</span>
                      <span className="text-xs text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{f.fileSize}</span>
                      {f.course && (
                        <>
                          <span className="text-xs text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{f.course}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant={f.fileType === "pptx" ? "outline" : "secondary"} className="text-[10px] uppercase hidden sm:inline-flex">
                      {f.fileType}
                    </Badge>
                    <Badge variant={f.status === "published" ? "outline" : "secondary"} className="text-[10px]">
                      {f.status === "published" ? "Publié" : "Brouillon"}
                    </Badge>
                    <span className="text-xs text-muted-foreground hidden md:inline">{f.uploadedAt}</span>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" /> Télécharger
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Eye className="h-4 w-4 mr-2" /> Prévisualiser
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleStatus(f.id)}>
                          {f.status === "draft" ? (
                            <><Eye className="h-4 w-4 mr-2" /> Publier</>
                          ) : (
                            <><Eye className="h-4 w-4 mr-2" /> Dépublier</>
                          )}
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(f.id)}>
                          <Trash2 className="h-4 w-4 mr-2" /> Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPresentations;
