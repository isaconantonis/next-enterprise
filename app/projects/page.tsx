import { getProjects } from "../actions"

export default async function Projects() {
  const projects = await getProjects()

  return (
    <section>
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl"
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}