import { PROJECT_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import ResearchTable from "@/components/research-table";

export default function ResearchPage({ params }: { params: { id: string } }) {
  const session = PROJECT_DATA.researchSessions.find(s => s.id === params.id);

  if (!session) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 space-y-12">
      <header className="space-y-4">
        <Badge variant="secondary">Research Session</Badge>
        <h1 className="text-4xl font-bold leading-tight">{session.topic}</h1>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>{new Date(session.timestamp).toLocaleDateString()}</span>
          <span>•</span>
          <span>{session.slidesCount} slides analyzed</span>
        </div>
      </header>

      <article className="prose prose-invert prose-purple max-w-none">
        <h2>Executive Summary</h2>
        <p>{session.tldr || "Analyzing the integration of neural world models in the context of procedural generation for interactive environments."}</p>
        
        <h3>Methodology</h3>
        <p>
          The investigation focused on latent space manipulation within emergent world models. 
          By assessing latency and fidelity across various model architectures, we identified 
          significant performance gains in neural-based rendering over traditional geometry shaders.
        </p>

        {session.tables.map((table) => (
           <div key={table.id} className="not-prose my-10">
              <h4 className="text-xl font-semibold mb-4">{table.title}</h4>
              <ResearchTable table={table} />
           </div>
        ))}

        <h3>Key Findings</h3>
        <ul>
          <li>Real-time world modeling enables dynamic environment reaction to player actions.</li>
          <li>Consistency in long-term temporal coherence remains a primary challenge for Sora-like architectures.</li>
          <li>Latent state diffusion can reduce GPU overhead compared to high-poly asset streaming.</li>
        </ul>
      </article>
    </div>
  );
}