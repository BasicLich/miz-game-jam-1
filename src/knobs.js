export var knobs = {
    state: "loading",
    frameRate: 25, // 40 fps
    difficulty: 0,
    health: 6,
    score: 0,
    iframe: 1000,
    powerUpLimit: 800,
    invulnerable: false,
    gotPickup: false,
    gameStartTime: 0,
    playerAnimFrame: 1,
    guiHearts: [],
    startPageGui: [],
    particles: undefined,
    maxWaveSize: 10,
    difficutyRampSpeed: 7,
    explosion: {
        radius: 8,
        strength: 20,
        duration: 50,
        timeout: 1500,
        enabled: 1,
    },
    playerControls: {
        playerMoveSpeed: 0.03,
        rayLength: 0.075,  
    },
    enemyAi: {
        slowMoveSpeed: 0.005,
        rayLength: 0.075,
    },
    worldSize: {
        worldx: 100,
        worldz: 100,
    },
    ents:{
        totalEnts: 0,
        maxTotalEnts: 40,
        entArr: [],
        powerUpArr: [],
        removedEnts:[],
        killPlane: -5,
        dropHeight: 30,
    },
    etc: {
        waveLimit: true,
    }
};
