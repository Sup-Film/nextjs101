export async function GET(request, { params }) {
  console.log('Test')
  return Response.json({ 
    name: 'Supakorn',
    id: params.id
  })
}