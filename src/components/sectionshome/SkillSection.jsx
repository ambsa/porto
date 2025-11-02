const SkillSection = () => {
  const skills = [
    { name: "React", level: 65, color: "from-cyan-500 to-blue-600" },
    { name: "JavaScript", level: 75, color: "from-yellow-400 to-yellow-600" },
    { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-600" },
    { name: "Bootstrap", level: 95, color: "from-purple-500 to-indigo-600" },
    { name: "Node.js", level: 65, color: "from-green-500 to-emerald-600" },
    { name: "PHP", level: 75, color: "from-indigo-600 to-purple-700" },
    { name: "Laravel", level: 75, color: "from-red-500 to-rose-600" },
    { name: "CodeIgniter 4", level: 75, color: "from-blue-600 to-sky-700" },
  ];

  return (
    <section id="skills" className="min-h-screen lg:py-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I use to create amazing web experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900">{skill.name}</span>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {skill.level}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;