export default function Skills() {
  const skills = [
    ["React", "95%"],
    ["Next.js", "90%"],
    ["Node.js", "85%"],
    ["Tailwind", "96%"],
  ];

  return (
    <section className="px-5 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">My Skills</h2>
            <p className="mt-3 max-w-2xl text-gray-400 sm:text-lg">
              Strong technical skills combined with clean design and best practices for every device.
            </p>
          </div>
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm text-cyan-300">
            Focused on responsive & modern UI
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="mb-4 flex items-center justify-between text-lg font-semibold text-white">
                <span>{skill[0]}</span>
                <span>{skill[1]}</span>
              </div>

              <div className="h-4 overflow-hidden rounded-full bg-white/10">
                <div
                  style={{ width: skill[1] }}
                  className="h-full rounded-full bg-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}