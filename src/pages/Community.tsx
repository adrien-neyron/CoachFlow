import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Users, Trophy, Calendar, Heart, ArrowRight, Flame } from "lucide-react";
import { motion } from "framer-motion";

const discussions = [
  { id: 1, author: "Marie L.", initials: "ML", topic: "Comment gérer un client qui ne suit pas le programme ?", replies: 12, likes: 8, time: "il y a 2h", tag: "Terrain" },
  { id: 2, author: "Thomas K.", initials: "TK", topic: "Retour d'expérience : mon premier mois en tant que coach", replies: 24, likes: 31, time: "il y a 5h", tag: "Témoignage" },
  { id: 3, author: "Sophie R.", initials: "SR", topic: "Quel outil pour créer des programmes d'entraînement ?", replies: 18, likes: 15, time: "il y a 1j", tag: "Outils" },
  { id: 4, author: "Alexandre D.", initials: "AD", topic: "Fixer ses tarifs en tant que coach débutant", replies: 32, likes: 45, time: "il y a 1j", tag: "Business" },
  { id: 5, author: "Clara M.", initials: "CM", topic: "Exercices de mobilité pour les coureurs : ma routine", replies: 9, likes: 22, time: "il y a 2j", tag: "Technique" },
];

const challenges = [
  { id: 1, title: "Défi Programme Express", description: "Créez un programme 4 semaines pour un débutant en 48h", participants: 89, deadline: "12 avril", xp: 100, active: true },
  { id: 2, title: "Challenge Contenu Coach", description: "Publiez 3 posts éducatifs sur Instagram cette semaine", participants: 156, deadline: "14 avril", xp: 75, active: true },
  { id: 3, title: "Peer Review Sprint", description: "Évaluez le bilan client de 2 autres apprenants", participants: 45, deadline: "10 avril", xp: 50, active: false },
];

const leaderboard = [
  { rank: 1, name: "Sarah B.", xp: 2450, streak: 34, level: "Coach Confirmé" },
  { rank: 2, name: "Marc T.", xp: 2280, streak: 28, level: "Coach Confirmé" },
  { rank: 3, name: "Julie P.", xp: 2100, streak: 21, level: "Coach Confirmé" },
  { rank: 4, name: "Antoine L.", xp: 1950, streak: 18, level: "Praticien Terrain" },
  { rank: 5, name: "Emma D.", xp: 1800, streak: 15, level: "Praticien Terrain" },
];

const upcomingEvents = [
  { id: 1, title: "Coaching de groupe : Créer son offre premium", date: "10 avril à 19h", host: "Coach Julien", spots: 8 },
  { id: 2, title: "Masterclass : Instagram pour les coachs", date: "15 avril à 18h30", host: "Marie Social", spots: 15 },
  { id: 3, title: "Session Q&A : Premiers clients", date: "18 avril à 20h", host: "Thomas Business", spots: 20 },
];

const Community = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="container mx-auto px-4 pt-24 pb-16">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-foreground mb-3">Communauté</h1>
        <p className="text-muted-foreground text-lg">Échangez, collaborez et progressez ensemble.</p>
      </div>

      <Tabs defaultValue="discussions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="discussions" className="gap-1.5"><MessageSquare className="h-4 w-4" /> Discussions</TabsTrigger>
          <TabsTrigger value="challenges" className="gap-1.5"><Trophy className="h-4 w-4" /> Challenges</TabsTrigger>
          <TabsTrigger value="leaderboard" className="gap-1.5"><Flame className="h-4 w-4" /> Classement</TabsTrigger>
          <TabsTrigger value="events" className="gap-1.5"><Calendar className="h-4 w-4" /> Événements</TabsTrigger>
        </TabsList>

        {/* Discussions */}
        <TabsContent value="discussions" className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">{discussions.length} discussions récentes</p>
            <Button size="sm">Nouvelle discussion</Button>
          </div>
          {discussions.map((d, i) => (
            <motion.div key={d.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="shadow-card hover:shadow-card-hover transition-all cursor-pointer">
                <CardContent className="p-4 flex items-start gap-4">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">{d.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-card-foreground text-sm">{d.topic}</p>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                      <span>{d.author}</span>
                      <span>·</span>
                      <span>{d.time}</span>
                      <Badge variant="outline" className="text-[10px]">{d.tag}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {d.replies}</span>
                    <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5" /> {d.likes}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Challenges */}
        <TabsContent value="challenges" className="space-y-4">
          {challenges.map((c, i) => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className={`shadow-card ${c.active ? "" : "opacity-60"}`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-semibold text-card-foreground">{c.title}</h3>
                        {c.active ? (
                          <Badge className="bg-success text-success-foreground text-[10px]">Actif</Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px]">Terminé</Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{c.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.participants} participants</span>
                        <span>Jusqu'au {c.deadline}</span>
                        <Badge variant="outline">+{c.xp} XP</Badge>
                      </div>
                    </div>
                    {c.active && (
                      <Button size="sm" variant="default">
                        Participer <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>

        {/* Leaderboard */}
        <TabsContent value="leaderboard">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="font-display">Classement de la promotion</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((u, i) => (
                <div key={u.rank} className={`flex items-center gap-4 p-3 rounded-lg ${i < 3 ? "bg-secondary/5" : ""}`}>
                  <span className={`font-display font-bold text-lg w-8 text-center ${i === 0 ? "text-secondary" : "text-muted-foreground"}`}>
                    {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${u.rank}`}
                  </span>
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">{u.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-card-foreground">{u.name}</p>
                    <p className="text-xs text-muted-foreground">{u.level}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display font-bold text-sm text-card-foreground">{u.xp.toLocaleString()} XP</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1 justify-end"><Flame className="h-3 w-3 text-destructive" /> {u.streak}j</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Events */}
        <TabsContent value="events" className="space-y-4">
          {upcomingEvents.map((e, i) => (
            <motion.div key={e.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card className="shadow-card">
                <CardContent className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-info/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-6 w-6 text-info" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-card-foreground">{e.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{e.date} • Animé par {e.host}</p>
                      <p className="text-xs text-muted-foreground">{e.spots} places restantes</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">S'inscrire</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </main>
    <Footer />
  </div>
);

export default Community;
