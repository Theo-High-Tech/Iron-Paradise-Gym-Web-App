const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>WORKOUT SESSIONS</h1>
        <p>
          Join our Iron Paradise Workout session, designed to elevate your fitness with a blend of high-intensity interval training and strength exercises. Perfect for all levels, this dynamic class guarantees results and boosts your overall endurance.
        </p>
        <img src="/image16.webp" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         Ignite Your Fitness Journey with Our High-Energy Bootcamps 
        </p>
        <div className="bootcamps">
          <div>
            <h4>Ultimate Strength Bootcamp</h4>
            <p>
            Push your limits with our high-intensity strength training bootcamp, designed to build muscle and increase power. Perfect for those looking to maximize their physical potential.
            </p>
          </div>
          <div>
            <h4>Full-Body Fitness Bootcamp</h4>
            <p>
            Engage every muscle group in this comprehensive bootcamp that blends strength, cardio, and flexibility exercises. Great for overall fitness and toning.
            </p>
          </div>
          <div>
            <h4>Core Power Bootcamp</h4>
            <p>
            Strengthen and define your core with targeted exercises that focus on your abs, obliques, and lower back. Enhance your stability and posture in this intense session.
            </p>
          </div>
          <div>
            <h4>Outdoor Adventure Bootcamp</h4>
            <p>
            Take your workout outside with our adventurous bootcamp featuring obstacle courses, trail runs, and bodyweight exercises. Experience the thrill of nature while getting fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;