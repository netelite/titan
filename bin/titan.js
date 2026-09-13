#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const BOLD = '\x1b[1m';
const DIM = '\x1b[2m';

const CYAN = '\x1b[38;2;14;184;210m';
const CYAN_2 = '\x1b[38;2;20;190;195m';
const TEAL = '\x1b[38;2;35;188;170m';
const GREEN = '\x1b[38;2;65;190;150m';

const WHITE = '\x1b[38;2;235;240;245m';
const GRAY = '\x1b[38;2;150;160;170m';
const SUCCESS = '\x1b[38;2;70;200;140m';
const ERROR = '\x1b[38;2;240;90;90m';

const packageRoot = path.resolve(__dirname, '..');
const targetRoot = process.cwd();

const titanFiles = [
    'AGENTS.md',
    '.github',
    'TITAN_START_HERE.md',
    'TITAN_USER_GUIDE.md',
    'TITAN_VERSION.md',
    '.titan',
    'docs'
];

function printBanner() {
    console.log('');

    console.log(
        CYAN + '████████╗ ' +
        CYAN_2 + '██╗ ' +
        TEAL + '████████╗ ' +
        GREEN + ' █████╗  ███╗   ██╗' +
        RESET
    );

    console.log(
        CYAN + '╚══██╔══╝ ' +
        CYAN_2 + '██║ ' +
        TEAL + '╚══██╔══╝ ' +
        GREEN + '██╔══██╗ ████╗  ██║' +
        RESET
    );

    console.log(
        CYAN + '   ██║    ' +
        CYAN_2 + '██║ ' +
        TEAL + '   ██║    ' +
        GREEN + '███████║ ██╔██╗ ██║' +
        RESET
    );

    console.log(
        CYAN + '   ██║    ' +
        CYAN_2 + '██║ ' +
        TEAL + '   ██║    ' +
        GREEN + '██╔══██║ ██║╚██╗██║' +
        RESET
    );

    console.log(
        CYAN + '   ██║    ' +
        CYAN_2 + '██║ ' +
        TEAL + '   ██║    ' +
        GREEN + '██║  ██║ ██║ ╚████║' +
        RESET
    );

    console.log(
        CYAN + '   ╚═╝    ' +
        CYAN_2 + '╚═╝ ' +
        TEAL + '   ╚═╝    ' +
        GREEN + '╚═╝  ╚═╝ ╚═╝  ╚═══╝' +
        RESET
    );

    console.log('');
    console.log(
        GRAY +
        'Technical Intelligence, Tasking & AI Navigation' +
        RESET
    );

    console.log(
        DIM + GRAY +
        '                 by NETELITE' +
        RESET
    );

    console.log('');
}

printBanner();

const existing = titanFiles.filter((item) =>
    fs.existsSync(path.join(targetRoot, item))
);

if (existing.length > 0) {
    console.log(
        ERROR + BOLD +
        '✕ TITAN initialization stopped' +
        RESET
    );

    console.log('');
    console.log(
        WHITE +
        'The following files or directories already exist:' +
        RESET
    );

    console.log('');

    for (const item of existing) {
        console.log(`  ${GRAY}•${RESET} ${item}`);
    }

    console.log('');
    console.log(
        GRAY +
        'No files were overwritten.' +
        RESET
    );

    console.log('');

    process.exit(1);
}

for (const item of titanFiles) {
    const source = path.join(packageRoot, item);
    const destination = path.join(targetRoot, item);

    fs.cpSync(source, destination, {
        recursive: true
    });
}

console.log(
    SUCCESS + BOLD +
    '✓ TITAN initialized successfully' +
    RESET
);

console.log('');
console.log(BOLD + WHITE + 'Next steps' + RESET);
console.log('');

console.log(`  ${CYAN}1.${RESET} Open this directory in Codex, GitHub Copilot, or another supported AI coding environment`);
console.log(`  ${CYAN_2}2.${RESET} Allow TITAN to determine the initial role from .titan/STATE.md`);
console.log(`  ${TEAL}3.${RESET} Start with:`);
console.log('');

console.log(
    `     ${WHITE}${BOLD}` +
    'Start this project according to the TITAN methodology.' +
    RESET
);

console.log('');
console.log(
    DIM + GRAY +
    'TITAN — Developed by NETELITE' +
    RESET
);

console.log('');
