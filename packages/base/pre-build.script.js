const fs = require("fs");

// Export path generator
const fileList = {};
function scanPaths(dir) {
  const components = fs.readdirSync(dir);
  components?.map((component) => {
    const componentStat = fs.statSync(`${dir}/${component}`);
    if (component === "index.ts") {
      const componentDir = dir.split("./ui/");
      const componentName = componentDir[1].replace("/index.ts", "");
      fileList[`./${componentName}`] = `${dir}/${component}`;
    } else if (componentStat.isDirectory()) {
      scanPaths(`${dir}/${component}`);
    }
  });
}

// Path to the JSON file
const filePath = "package.json";

// Path to components Dir
const componentsDir = "./ui";

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON
    const jsonData = JSON.parse(data);

    // Generate export paths
    scanPaths(componentsDir);

    // Add exports to JSON
    jsonData.exports = fileList;

    const updatedData = JSON.stringify(jsonData, null, 2);

    fs.writeFile(filePath, updatedData, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Exports updated");
    });
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
