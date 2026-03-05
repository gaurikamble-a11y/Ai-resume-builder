export async function POST(req: Request) {
  try {
    const { name, skills, job } = await req.json();

    const fakeResponse = `
${name} is a motivated and detail-oriented professional with strong expertise in ${skills}. 
Passionate about delivering high-quality results, ${name} is seeking a challenging role as a ${job}. 
Brings excellent problem-solving abilities, teamwork skills, and a commitment to continuous learning. 
Ready to contribute effectively and drive impactful outcomes in a growth-focused organization.
    `;

    return Response.json({
      result: fakeResponse,
    });
  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}