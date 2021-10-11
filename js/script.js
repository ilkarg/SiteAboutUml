for (let i = 1; i < 5; i++) 
{
	document.getElementById(`diagrams-pictures-${i}`).hidden = true;
}

function ShowDiagramsPictures(id) 
{
	if (document.getElementById(`diagrams-pictures-${id}`) != null) 
	{
		if (document.getElementById(`diagrams-pictures-${id}`).hidden) 
		{
			document.getElementById(`diagrams-pictures-${id}`).hidden = false;
		}
		else 
		{
			document.getElementById(`diagrams-pictures-${id}`).hidden = true;
		}
	}
}