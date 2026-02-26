import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center py-12 rounded-lg bg-gradient-to-r from-primary to-secondary">
        <h1 className="text-4xl font-bold mb-4 text-background">AI World Models: Shaping the Future of Interactive Entertainment</h1>
        <p className="text-lg text-background opacity-80">This research project will explore the transformative impact of AI world models on the gaming industry. We will investigate how these advanced AI systems are revolutionizing game design, player experiences, and the very nature of virtual environments. The study aims to identify key trends, challenges, and future opportunities at the intersection of AI and gaming.</p>
      </section>

      {/*  Image Gallery Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-4">Generated Images</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder: Replace with actual image display logic */}
          <div className="animate-pulse bg-gray-700 h-48 rounded"></div>
          <div className="animate-pulse bg-gray-700 h-48 rounded"></div>
          <div className="animate-pulse bg-gray-700 h-48 rounded"></div>
        </div>
      </section>

      {/* Video Embeds Section */}
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-4">Generated Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Placeholder: Replace with actual video embed logic */}
          <div className="animate-pulse bg-gray-700 h-64 rounded"></div>
          <div className="animate-pulse bg-gray-700 h-64 rounded"></div>
        </div>
      </section>
    </div>
  )
}