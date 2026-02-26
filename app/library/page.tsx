import { projectData } from '@/lib/data';
import { File, ImageIcon, VideoIcon } from 'lucide-react';

export default function LibraryPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Knowledge Base</h1>

      {projectData.knowledgeBase.length === 0 ? (
        <p>No files in the knowledge base yet.</p>
      ) : (
        <ul>
          {projectData.knowledgeBase.map((file) => (
            <li key={file.name} className="flex items-center py-2 border-b border-accent">
              <File className="mr-2" />
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}