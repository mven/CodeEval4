function Point(x,y)
{
    this.x = x;
	this.y = y;
}

function sumOfDigits(x)
{
	var holder = x;
    var digits = 0;
    var list = [];
    var sum = 0;
    while(holder !== 0)
    {
         holder/=10;
         holder = parseInt(holder);
        ++digits;
    }
    holder = x;
    list.push(holder % 10);
    digits--;
    
    while(digits > 0)
    {
        holder/=10;
        holder = parseInt(holder);
        list.push(holder % 10);
        digits--;
    }
    
    for(var i = 0; i < list.length; i++)
    {
        sum+=list[i];
    }
    
    return sum;
        
}

function moveMonkey(point)
{
	var que = [];
	var mem = [];
	var access = 0;
	var sums = [];
	var node;

	mem[0] = [];
	mem[0][0] = 1;
    access++;

	que.push(point);

	while(que.length != 0)
	{
		node = que.pop();

		x = node.x;
		y = node.y;
        
        if(x === 0 || y === 0 && !(x===0 && y===0))
		{
			access+=2;
		}
		else
		{
			access+=4;
		}
		
        if(typeof(mem[x]) === "undefined")
        {
            mem[x] = [];
           
        }
        if(typeof(mem[x+1]) === "undefined")
        {
        	 mem[x+1] = [];
        }
		sums[0] = sumOfDigits(Math.abs(x)); 
		sums[1] = sumOfDigits(Math.abs(x+1));
		sums[2] = sumOfDigits(Math.abs(x-1));
		sums[3] = sumOfDigits(Math.abs(y));
		sums[5] = sumOfDigits(Math.abs(y+1));
		sums[6] = sumOfDigits(Math.abs(y-1));

		if(sums[1] + sums[3] <= 19 && typeof(mem[Math.abs(x+1)][Math.abs(y)]) === "undefined") 
		{
			mem[Math.abs(x+1)][Math.abs(y)] = 1;
			que.push(new Point(x+1,y));
		}
		
		if(sums[2] + sums[3] <= 19 && typeof(mem[Math.abs(x-1)][Math.abs(y)]) === "undefined")
		{
		   mem[Math.abs(x-1)][Math.abs(y)] = 1;
			que.push(new Point(x-1,y));
		}
		
		if(sums[0] + sums[5] <= 19 && typeof(mem[Math.abs(x)][Math.abs(y+1)]) === "undefined")
		{
			mem[Math.abs(x)][Math.abs(y+1)] = 1;
			que.push(new Point(x,y+1));
		}
		
		if(sums[0] + sums[6] <= 19 && typeof(mem[Math.abs(x)][Math.abs(y-1)]) === "undefined")
		{
			mem[Math.abs(x)][Math.abs(y-1)] = 1;
			que.push(new Point(x,y-1));
		}

	}

    access-=2;
	return access;
}



var x = moveMonkey(new Point(0,0));
console.log(x);
