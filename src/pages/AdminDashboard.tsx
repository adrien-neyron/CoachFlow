import Navbar from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, DollarSign, TrendingUp, MoreHorizontal, Presentation } from "lucide-react";
import { Link } from "react-router-dom";

const adminStats = [
  { label: "Total Users", value: "2,450", icon: Users, change: "+12%" },
  { label: "Active Courses", value: "48", icon: BookOpen, change: "+5" },
  { label: "Revenue", value: "$18,420", icon: DollarSign, change: "+22%" },
  { label: "Completion Rate", value: "72%", icon: TrendingUp, change: "+3%" },
];

const recentUsers = [
  { id: "1", name: "Emma Wilson", email: "emma@example.com", role: "student", joined: "Mar 10, 2026", status: "active" },
  { id: "2", name: "Marcus Rivera", email: "marcus@example.com", role: "trainer", joined: "Mar 8, 2026", status: "active" },
  { id: "3", name: "Sarah Chen", email: "sarah@example.com", role: "trainer", joined: "Mar 5, 2026", status: "active" },
  { id: "4", name: "Jake Thompson", email: "jake@example.com", role: "student", joined: "Mar 3, 2026", status: "suspended" },
];

const recentCourses = [
  { id: "1", title: "Athletic Performance Fundamentals", trainer: "Marcus Rivera", students: 1240, revenue: "$6,200", status: "published" },
  { id: "2", title: "Strength & Conditioning Mastery", trainer: "Sarah Chen", students: 890, revenue: "$4,450", status: "published" },
  { id: "3", title: "Yoga for Athletes", trainer: "Maria Santos", students: 0, revenue: "$0", status: "draft" },
];

const roleBadgeVariant = (role: string) => {
  switch (role) {
    case "trainer": return "default";
    case "admin": return "destructive";
    default: return "secondary";
  }
};

const AdminDashboard = () => (
  <div className="min-h-screen bg-muted/30">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">Manage your platform, users, and content.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {adminStats.map((s) => (
          <Card key={s.label} className="shadow-card">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <s.icon className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs font-medium text-success">{s.change}</span>
              </div>
              <p className="text-2xl font-bold font-display text-card-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-8">
        <Link to="/admin/presentations">
          <Card className="shadow-card hover:shadow-elevated transition-shadow cursor-pointer inline-flex items-center gap-3 p-4 pr-6">
            <div className="h-10 w-10 rounded-lg bg-secondary/15 flex items-center justify-center">
              <Presentation className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="font-display font-semibold text-card-foreground text-sm">Présentations</p>
              <p className="text-xs text-muted-foreground">Gérer les slides de cours</p>
            </div>
          </Card>
        </Link>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="users">
        <TabsList className="mb-6">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-display">Recent Users</CardTitle>
              <Button size="sm">Add User</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((u) => (
                    <TableRow key={u.id}>
                      <TableCell className="font-medium">{u.name}</TableCell>
                      <TableCell className="text-muted-foreground">{u.email}</TableCell>
                      <TableCell><Badge variant={roleBadgeVariant(u.role)}>{u.role}</Badge></TableCell>
                      <TableCell className="text-muted-foreground">{u.joined}</TableCell>
                      <TableCell>
                        <Badge variant={u.status === "active" ? "outline" : "destructive"}>
                          {u.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="courses">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="font-display">All Courses</CardTitle>
              <Button size="sm">Create Course</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Trainer</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-10"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCourses.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="font-medium">{c.title}</TableCell>
                      <TableCell className="text-muted-foreground">{c.trainer}</TableCell>
                      <TableCell>{c.students.toLocaleString()}</TableCell>
                      <TableCell>{c.revenue}</TableCell>
                      <TableCell>
                        <Badge variant={c.status === "published" ? "outline" : "secondary"}>
                          {c.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  </div>
);

export default AdminDashboard;
