namespace SpriteKind {
    export const KILLZONE = SpriteKind.create()
    export const GOOMBA1 = SpriteKind.create()
    export const GOOMBA2 = SpriteKind.create()
    export const KZ2 = SpriteKind.create()
    export const g3 = SpriteKind.create()
    export const k3 = SpriteKind.create()
    export const g4 = SpriteKind.create()
    export const k4 = SpriteKind.create()
}
function setupLevel () {
    scene.setBackgroundColor(9)
    tiles.setCurrentTilemap(tilemap`1-1`)
}
function setupGoomba3 () {
    goom3 = sprites.create(assets.image`Goomba Sprite`, SpriteKind.g3)
    kill3 = sprites.create(assets.image`Killzone`, SpriteKind.k3)
    animation.runImageAnimation(
    goom3,
    assets.animation`Goomba Walk Anim`,
    200,
    true
    )
    tiles.placeOnTile(goom3, tiles.getTileLocation(111, 21))
    tiles.placeOnTile(kill3, tiles.getTileLocation(111, 20))
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (MARIO_SPRITE.isHittingTile(CollisionDirection.Top) == true && MARIO_SPRITE.tileKindAt(TileDirection.Top, assets.tile`Question Mark Tile`)) {
        tiles.setTileAt(location, assets.tile`Block Tile`)
        info.changeScoreBy(500)
        music.baDing.play()
    }
    if (MARIO_SPRITE.isHittingTile(CollisionDirection.Top) == true && MARIO_SPRITE.tileKindAt(TileDirection.Top, assets.tile`Brick Tile`)) {
        tiles.setTileAt(location, assets.tile`Brick Tile NO POINTS`)
        info.changeScoreBy(100)
        music.baDing.play()
    }
    if (MARIO_SPRITE.isHittingTile(CollisionDirection.Bottom)) {
        ALLOWED_JUMPS = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.k4, function (sprite, otherSprite) {
    animation.runImageAnimation(
    goom4,
    assets.animation`myAnim`,
    200,
    false
    )
    pause(200)
    goom4.destroy()
    kill4.destroy()
})
function setupGoomba1 () {
    GOOMBA_ONE = sprites.create(assets.image`Goomba Sprite`, SpriteKind.GOOMBA1)
    KILLZONE_ONE = sprites.create(assets.image`Killzone`, SpriteKind.KILLZONE)
    animation.runImageAnimation(
    GOOMBA_ONE,
    assets.animation`Goomba Walk Anim`,
    200,
    true
    )
    tiles.placeOnTile(GOOMBA_ONE, tiles.getTileLocation(18, 21))
    tiles.placeOnTile(KILLZONE_ONE, tiles.getTileLocation(18, 20))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Finish Level Tile`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.k3, function (sprite, otherSprite) {
    animation.runImageAnimation(
    goom3,
    assets.animation`myAnim`,
    200,
    false
    )
    pause(200)
    goom3.destroy()
    kill3.destroy()
})
function setupMario () {
    MARIO_SPRITE = sprites.create(assets.image`Mario Sprite`, SpriteKind.Player)
    MARIO_SPRITE.ay = 500
    scene.cameraFollowSprite(MARIO_SPRITE)
    info.setLife(3)
    tiles.placeOnTile(MARIO_SPRITE, tiles.getTileLocation(10, 21))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ALLOWED_JUMPS == 1) {
        MARIO_SPRITE.vy = -270
        animation.runImageAnimation(
        MARIO_SPRITE,
        assets.animation`Mario Jump Anim`,
        500,
        true
        )
        ALLOWED_JUMPS = 0
    }
})
function setupGoomba4 () {
    goom4 = sprites.create(assets.image`Goomba Sprite`, SpriteKind.g4)
    kill4 = sprites.create(assets.image`Killzone`, SpriteKind.k4)
    animation.runImageAnimation(
    goom4,
    assets.animation`Goomba Walk Anim`,
    200,
    true
    )
    tiles.placeOnTile(goom4, tiles.getTileLocation(174, 21))
    tiles.placeOnTile(kill4, tiles.getTileLocation(174, 20))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Killzone Tile`, function (sprite, location) {
    game.over(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(MARIO_SPRITE, 250, 0)
    animation.runImageAnimation(
    MARIO_SPRITE,
    assets.animation`Mario Run Anim Backward`,
    125,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    MARIO_SPRITE,
    assets.animation`Mario Still Anim`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KILLZONE, function (sprite, otherSprite) {
    animation.runImageAnimation(
    GOOMBA_ONE,
    assets.animation`myAnim`,
    200,
    false
    )
    pause(200)
    GOOMBA_ONE.destroy()
    KILLZONE_ONE.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    MARIO_SPRITE,
    assets.animation`Mario Still Anim`,
    200,
    false
    )
})
info.onCountdownEnd(function () {
    info.setLife(0)
})
function setupGoomba2 () {
    GOOMBA_2 = sprites.create(assets.image`Goomba Sprite`, SpriteKind.GOOMBA2)
    KILLZONE_2 = sprites.create(assets.image`Killzone`, SpriteKind.KZ2)
    animation.runImageAnimation(
    GOOMBA_2,
    assets.animation`Goomba Walk Anim`,
    200,
    true
    )
    tiles.placeOnTile(GOOMBA_2, tiles.getTileLocation(54, 21))
    tiles.placeOnTile(KILLZONE_2, tiles.getTileLocation(54, 20))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Pole Top`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`Pole Points Got`)
    info.changeScoreBy(5000)
    music.powerUp.play()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(MARIO_SPRITE, 250, 0)
    animation.runImageAnimation(
    MARIO_SPRITE,
    assets.animation`Mario Run Anim Forward`,
    125,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    MARIO_SPRITE,
    assets.animation`Mario Still Anim`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.GOOMBA1, function (sprite, otherSprite) {
    pause(500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.KZ2, function (sprite, otherSprite) {
    animation.runImageAnimation(
    GOOMBA_2,
    assets.animation`myAnim`,
    200,
    false
    )
    pause(200)
    GOOMBA_2.destroy()
    KILLZONE_2.destroy()
})
function setupgoombacallcollect () {
    setupGoomba1()
    setupGoomba2()
    setupGoomba3()
    setupGoomba4()
}
let KILLZONE_2: Sprite = null
let GOOMBA_2: Sprite = null
let KILLZONE_ONE: Sprite = null
let GOOMBA_ONE: Sprite = null
let kill4: Sprite = null
let goom4: Sprite = null
let ALLOWED_JUMPS = 0
let MARIO_SPRITE: Sprite = null
let kill3: Sprite = null
let goom3: Sprite = null
setupLevel()
setupMario()
setupgoombacallcollect()
info.startCountdown(120)
forever(function () {
    for (let index = 0; index < 2; index++) {
        goom4.setVelocity(50, 0)
        kill4.setVelocity(50, 0)
        pause(2000)
        goom4.setVelocity(-50, 0)
        kill4.setVelocity(-50, 0)
        pause(2000)
    }
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        goom3.setVelocity(50, 0)
        kill3.setVelocity(50, 0)
        pause(2000)
        goom3.setVelocity(-50, 0)
        kill3.setVelocity(-50, 0)
        pause(2000)
    }
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        GOOMBA_2.setVelocity(50, 0)
        KILLZONE_2.setVelocity(50, 0)
        pause(2000)
        GOOMBA_2.setVelocity(-50, 0)
        KILLZONE_2.setVelocity(-50, 0)
        pause(2000)
    }
})
forever(function () {
    for (let index = 0; index < 2; index++) {
        GOOMBA_ONE.setVelocity(50, 0)
        KILLZONE_ONE.setVelocity(50, 0)
        pause(2000)
        GOOMBA_ONE.setVelocity(-50, 0)
        KILLZONE_ONE.setVelocity(-50, 0)
        pause(2000)
    }
})
