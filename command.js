const commands = [];

/**
 * Register a command with pattern and function
 * @param {Object} info - Command metadata
 * @param {Function} func - Command handler function
 */
function cmd(info, func) {
    commands.push({
        pattern: info.pattern,
        alias: info.alias || [],
        use: info.use || '',
        desc: info.desc || '',
        category: info.category || 'general',
        react: info.react || '',
        filename: info.filename || '',
        function: func
    });
}

module.exports = {
    commands,
    cmd
};
