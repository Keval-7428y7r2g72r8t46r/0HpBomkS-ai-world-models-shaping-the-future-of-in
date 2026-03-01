import { PROJECT_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Beaker, CheckCircle2, FileText, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <header className="relative py-20 px-10 rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background border border-primary/20" />
        <div className="relative z-10 max-w-3xl space-y-6">
          <Badge variant="outline" className="border-primary/50 text-primary">Research Hub</Badge>
          <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
            {PROJECT_DATA.name}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {PROJECT_DATA.description}
          </p>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Research Sessions</CardTitle>
            <Beaker className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PROJECT_DATA.researchSessions.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Library Assets</CardTitle>
            <FileText className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PROJECT_DATA.knowledgeBase.length}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Tasks Done</CardTitle>
            <CheckCircle2 className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PROJECT_DATA.tasks.filter(t => t.status === 'done').length}</div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 backdrop-blur border-primary/10">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Generated Media</CardTitle>
            <ImageIcon className="w-4 h-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{PROJECT_DATA.generatedImages.length + PROJECT_DATA.generatedVideos.length}</div>
          </CardContent>
        </Card>
      </section>

      {PROJECT_DATA.generatedImages.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Visual Concept Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_DATA.generatedImages.map((img) => (
              <div key={img.id} className="group relative aspect-video rounded-xl overflow-hidden border">
                <img src={img.url} alt={img.prompt} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <p className="text-xs text-white">{img.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}