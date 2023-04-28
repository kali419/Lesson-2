let musicians = 1;

if (musicians <= 0) {
    console.log("Not a group");
} else if (musicians === 1) {
    console.log("Solo");
} else if (musicians === 2) {
    console.log("Duet");
} else if (musicians === 3) {
    console.log("Trio");
} else if (musicians === 4) {
    console.log("Quartet");
} else {
    console.log("This is a large group");
}
