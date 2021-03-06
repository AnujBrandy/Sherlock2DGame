#pragma strict

var bullet1:GameObject;
var bulletSpeed:float = 20;
var bulletSound:AudioClip;

//private variables used to control shooting bullets
private var bulletCounter:float = 0.0;
private var bulletPos:float = 0.0;
private var direction = true;
private var weaponSet:float = 0.0;
private var currentBullet:GameObject;
private var fireRate:float = 0.25;

function Start () {
currentBullet = bullet1;
}

function Update () {
//keep track of time so we know when a bullet can fire
bulletCounter += Time.deltaTime;

//check to see what direction the player is going so the bullet goes the right direction
if(Input.GetKey("d") || Input.GetKey("right")){
direction = true;
}
if(Input.GetKey("a") || Input.GetKey("left")){
direction = false;
}

//once we know the direction, we use bulletPos to move the starting position when the bullet is spawned.
if(direction == true && bulletPos != 0.5){
bulletPos = 0.5;
}
if(direction == false && bulletPos != -0.5){
bulletPos = -0.5;
}

//controls for shooting bullets for web versions of the game. These are the same as standalone, but are only compiled if its web
#if UNITY_WEBPLAYER
if(Input.GetKey(KeyCode.LeftShift)){
	if(bulletCounter > fireRate){
	var bulletPrefab = Instantiate(currentBullet, transform.position + Vector3(bulletPos,-0.25,0.01), Quaternion.Euler(0,180,0));
	audio.PlayOneShot(bulletSound);
	if(direction == true){
	bulletPrefab.transform.rigidbody.velocity.x = bulletSpeed;
	}else{
	bulletPrefab.transform.rigidbody.velocity.x = -bulletSpeed;
	}
	bulletCounter = 0.0;
	}
}
#endif

//controls for shooting bullets for desktop versions of the game. These are the same as web, but are only compiled if its standalone
#if UNITY_STANDALONE
if(Input.GetKey(KeyCode.LeftShift)){
	if(bulletCounter > fireRate){
	var bulletPrefab = Instantiate(currentBullet, transform.position + Vector3(bulletPos,-0.25,0.01), Quaternion.Euler(0,180,0));
	audio.PlayOneShot(bulletSound);
	if(direction == true){
	bulletPrefab.transform.rigidbody.velocity.x = bulletSpeed;
	}else{
	bulletPrefab.transform.rigidbody.velocity.x = -bulletSpeed;
	}
	bulletCounter = 0.0;
	}
}
#endif

//controls for shooting bullets for android versions of the game. These are the same as ios, but are only compiled if its android
#if UNITY_ANDROID
if(Input.touchCount > 0){
for(var touch1 : Touch in Input.touches) { 
//2nd touch for jump button
	if(touch1.position.x > Screen.width/2 && touch1.position.x < Screen.width/4*3 && touch1.position.y < Screen.height/3){
	if(bulletCounter > fireRate){
	var bulletPrefab = Instantiate(currentBullet, transform.position + Vector3(bulletPos,-0.25,0.01), Quaternion.Euler(0,180,0));
	audio.PlayOneShot(bulletSound);
	if(direction == true){
	bulletPrefab.transform.rigidbody.velocity.x = bulletSpeed;
	}else{
	bulletPrefab.transform.rigidbody.velocity.x = -bulletSpeed;
	}
	bulletCounter = 0.0;
	}	
	}
}
}
#endif

//controls for shooting bullets for ios versions of the game. These are the same as android, but are only compiled if its ios
#if UNITY_IOS
if(Input.touchCount > 0){
for(var touch1 : Touch in Input.touches) { 
//2nd touch for jump button
	if(touch1.position.x > Screen.width/2 && touch1.position.x < Screen.width/4*3 && touch1.position.y < Screen.height/3){
	if(bulletCounter > fireRate){
	var bulletPrefab = Instantiate(currentBullet, transform.position + Vector3(bulletPos,-0.25,0.01), Quaternion.Euler(0,180,0));
	audio.PlayOneShot(bulletSound);
	if(direction == true){
	bulletPrefab.transform.rigidbody.velocity.x = bulletSpeed;
	}else{
	bulletPrefab.transform.rigidbody.velocity.x = -bulletSpeed;
	}
	bulletCounter = 0.0;
	}	
	}
}
}
#endif

//end of function update
}