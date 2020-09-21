// build.js
var fs = require("fs");
var path = require("path");
const { exec } = require("child_process");

var filePath = path.resolve("src/components");
fileDisplay(filePath);

function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function(err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function(filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function(eror, stats) {
          if (eror) {
            console.warn("获取文件stats失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              var ext = path.extname(filename);
              if (ext == ".vue") {
                console.info("Complate file: " + filedir);
                var basename = path.basename(filename, ext);

                let cmd =
                  "webpack " +
                  filedir +
                  " -p --output-filename " +
                  filename +
                  ".js --output-library " +
                  basename;
                console.info(cmd);
                exec(cmd, {}, (err, stdout, stderr) => {
                  if (err) {
                    console.log(err);
                    return;
                  }
                  console.log(`stdout: ${stdout}`);
                });
              }
            }
            if (isDir) {
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}
