class MediaManager {
    constructor(config) {
        this.scene = config.scene
        console.log("ddddd")
        emitter.on(G.PLAY_SOUND, this.playSound, this)
        emitter.on(G.MUSIC_CHANGED, this.musicChanged, this)
    }

    musicChanged()
    {
        if (this.background)
        {
            this.background.stop()
        }
    }

    playSound(key)
    {
        console.log("hello")
        if(model.soundOn == true)
        {
        var sound = this.scene.sound.add(key)
        sound.play()
        }
    }
    setBackgroundMusic(key)
    {
        if (model.musicOn == true)
        {
        this.background = this.scene.sound.add(key, {volume: .5, loop: true}) 
        this.background.play()
        }
    }
}