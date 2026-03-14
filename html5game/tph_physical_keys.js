var gm_physical_keys = Object.create(null);
var gm_physical_keys_pressed = Object.create(null);
var gm_physical_keys_started = false;

function kb_html5_init() {
    if (gm_physical_keys_started) return 0;
    gm_physical_keys_started = true;

    window.addEventListener("keydown", function (e) {
        if (!gm_physical_keys[e.code] && !e.repeat) {
            gm_physical_keys_pressed[e.code] = true;
        }

        gm_physical_keys[e.code] = true;
    });

    window.addEventListener("keyup", function (e) {
        gm_physical_keys[e.code] = false;
    });

    return 1;
}

function kb_code_check(code) {
    return gm_physical_keys[code] ? 1 : 0;
}

function kb_code_check_pressed(code) {
    if (gm_physical_keys_pressed[code]) {
        gm_physical_keys_pressed[code] = false;
        return 1;
    }

    return 0;
}