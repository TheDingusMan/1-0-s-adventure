controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(2)
mySprite = sprites.create(assets.image`right`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level`)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
characterAnimations.loopFrames(
mySprite,
assets.animation`walkingRight`,
200,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`walkingLeft`,
200,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`jumpLeft`,
200,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`myAnim`,
200,
characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`myAnim0`,
200,
characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`myAnim1`,
200,
characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`myAnim2`,
200,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
)
characterAnimations.loopFrames(
mySprite,
assets.animation`myAnim3`,
200,
characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
)
