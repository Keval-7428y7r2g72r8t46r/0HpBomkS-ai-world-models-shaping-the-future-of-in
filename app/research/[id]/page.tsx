import { projectData } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function ResearchSessionPage({ params }: { params: { id: string } }) {
  const session = projectData.researchSessions.find((s) => s.id === params.id);

  if (!session) {
    notFound();
  }

  return (
    <div className="prose dark:prose-invert">
      <h1>{session.topic}</h1>
      <p>Session ID: {session.id}</p>
      {session.tldr && <p>{session.tldr}</p>}
      {session.tables.length > 0 && <p>Tables will be rendered here.</p>}
    </div>
  );
}