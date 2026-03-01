import { PROJECT_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FileIcon, FileText, Database, Code } from "lucide-react";

export default function LibraryPage() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf': return <FileText className="w-8 h-8 text-red-400" />;
      case 'csv': return <Database className="w-8 h-8 text-blue-400" />;
      default: return <FileIcon className="w-8 h-8 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Knowledge Base</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PROJECT_DATA.knowledgeBase.map((file) => (
          <Card key={file.name} className="hover:border-primary/50 transition-colors cursor-pointer">
            <CardContent className="flex items-center gap-4 p-6">
              {getIcon(file.type)}
              <div className="flex-1">
                <p className="font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">{file.size} • {file.type.toUpperCase()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {PROJECT_DATA.knowledgeBase.length === 0 && (
        <div className="py-20 text-center border-2 border-dashed rounded-xl">
          <p className="text-muted-foreground">No assets in the library yet.</p>
        </div>
      )}
    </div>
  );
}