// tech-icons.tsx
import { SiReact, SiNodedotjs, SiFlutter, SiGraphql, SiDocker, } from 'react-icons/si'
import { Badge } from './utils/badge'
import { Card } from './utils/card'

const techs = [
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'GraphQL', icon: SiGraphql },
  { name : 'Docker', icon : SiDocker},
]

export function TechnologiesUsedSection() {
  return (
    <section id="technologies" className="py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-tech-primary border-tech-primary/20">
            Technologies Used
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use the latest and greatest technologies to deliver robust, scalable, and innovative solutions.
          </p>
        </div>
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
          <div className="relative w-full h-24 flex items-center">
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
              <div className="flex animate-marquee space-x-16 min-w-max" style={{ minWidth: '1200px' }}>
                {[...techs, ...techs, ...techs].map((tech, i) => (
                  <div key={i} className="flex flex-col items-center min-w-[100px]">
                    <tech.icon className="h-12 w-12 mb-2 text-tech-primary" />
                    <span className="text-xs text-muted-foreground font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  )
} 