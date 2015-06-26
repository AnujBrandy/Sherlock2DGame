
#pragma strict



var deathAnim:GameObject;
//here is the hearth that might drop on death
var heartDrop:GameObject;
var health:int = 3;

//here are some private variables that we use to help animate the enemy
private var counter:float = 0.0;
private var colorCounter:float = 0.0;
private var target:GameObject;
private var direction = false;
private var touched = true;
private var distance:float = 0.0;
private var ydistance:float = 0.0;
private var playerDist:float = 0.0;




function Start () {
//here we set the player as the target to help give the jumper behaviors. Pretty much simple AI.
target = GameObject.Find("player");
//here it makes it ignore other enemy colliders so they can't get caught on each other.
var enemies = GameObject.FindGameObjectsWithTag("Innocent");
for (var en : GameObject in enemies)  {
if (en.collider != collider) {
Physics.IgnoreCollision(collider, en.collider);
}
}
}

function Update () {

}

//here we manage health of the enemy when a bullet hits it. if its health is 0 it will spawn the death animation, possibly spawn a heart, then destroy itself.
function OnTriggerEnter (other : Collider){
if(other.tag == "bullet"){

var killPlayer : playerhealth = gameObject.GetComponent(playerhealth);

Destroy(target.gameObject);

killPlayer.checkHealth();
}
}
