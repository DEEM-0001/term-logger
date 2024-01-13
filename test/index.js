const { BgColors, BrightColors, Logger, TextColors, TextStyles } = require("../dist"); // require('term-logger');

console.log("---------------------- LOGGER ----------------------");
Logger.cluster("CLUSTER logger output test");
Logger.command("COMMAND logger output test");
Logger.complete("COMPLETE logger output test");
Logger.critical("CRITICAL logger output test");
Logger.database("DATABASE logger output test");
Logger.debug("DEBUG logger output test");
Logger.error("ERROR logger output test");
Logger.event("EVENT logger output test");
Logger.fatal("FATAL logger output test");
Logger.info("INFO logger output test");
Logger.note("NOTE logger output test");
Logger.pending("PENDING logger output test");
Logger.ready("READY logger output test");
Logger.shard("SHARD logger output test");
Logger.start("START logger output test");
Logger.success("SUCCESS logger output test");
Logger.waiting("WAITING logger output test");
Logger.warn("WARN logger output test");
Logger.watch("WATCH logger output test");

console.log("---------------------- TEXT STYLES ----------------------");
TextStyles.bold("BOLD");
TextStyles.dim("DIM");
TextStyles.hidden("HIDDEN");
TextStyles.inverse("INVERSE");
TextStyles.italic("ITALIC");
TextStyles.strikethrough("STRIKETHROUGH");
TextStyles.underline("UNDERLINE");
TextStyles.visible("VISIBLE");

console.log("---------------------- TEXT COLORS ----------------------");
TextColors.blue("BLUE");
TextColors.cyan("CYAN");
TextColors.gray("GRAY");
TextColors.green("GREEN");
TextColors.purple("PURPLE");
TextColors.red("RED");
TextColors.white("WHITE");
TextColors.yellow("YELLOW");

console.log("---------------------- BRIGHT COLORS ----------------------");
BrightColors.blue("BLUE");
BrightColors.cyan("CYAN");
BrightColors.green("GREEN");
BrightColors.purple("PURPLE");
BrightColors.red("RED");
BrightColors.white("WHITE");
BrightColors.yellow("YELLOW");

console.log("---------------------- BACKGROUND COLORS ----------------------");
BgColors.blue("BLUE");
BgColors.cyan("CYAN");
BgColors.gray("GRAY");
BgColors.green("GREEN");
BgColors.purple("PURPLE");
BgColors.red("RED");
BgColors.white("WHITE");
BgColors.yellow("YELLOW");
