export async function GET(request: any): Promise<Response> {
    const data = {
        name: 'Bob',
        age: 10,
        bio: 'Some info'
    }
    return new Response(JSON.stringify(data));
}


export async function POST(request: any): Promise<Response> {
    return new Response(request.body)
}
