import { PROJECT_DATA } from "@/lib/data";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function TasksPage() {
  const columns = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Completed' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Task Board</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {columns.map((col) => (
          <div key={col.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold flex items-center gap-2">
                {col.label}
                <Badge variant="secondary">{PROJECT_DATA.tasks.filter(t => t.status === col.id).length}</Badge>
              </h2>
            </div>
            <div className="space-y-3 min-h-[500px] p-2 bg-muted/20 rounded-xl">
              {PROJECT_DATA.tasks
                .filter((t) => t.status === col.id)
                .map((task) => (
                  <Card key={task.id} className="bg-card">
                    <CardHeader className="p-4">
                      <CardTitle className={cn("text-sm font-medium", task.status === 'done' && "line-through text-muted-foreground")}>
                        {task.title}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}