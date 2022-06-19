# github

github账号

**`zly-zZ`**



fork项目仓库地址

git@github.com:zly-zZ/practice.git

https://github.com/zly-zZ/practice.git



# [Git](https://www.liaoxuefeng.com/wiki/896043488029600/897013573512192)

1. 安装Git

   [Git官网](https://git-scm.com/downloads)，直接下载安装（windows）

   安装完成后，在开始菜单里找到“Git”->“Git Bash”，蹦出一个类似命令行窗口的东西，就说明Git安装成功

   安装完成后，还需要最后一步设置，在命令行输入：

   ```bash
   $ git config --global user.name "Your Name"
   $ git config --global user.email "email@example.com"
   ```

   

2. 创建版本库

   选择一个合适的地方，创建一个空目录：

   ```bash
   $ mkdir learngit  # 建立一个本地文件夹,把想要上传的文件代码放在这里
   $ cd learngit  # 进入该文件夹
   $ pwd # 这个命令是展示当前位置
   
   $ git init # 初始化空白版本仓库，会在工作空间中创建 .git 的隐藏目录
   $ git add <file-name> # 将文件添加到暂存区
   $ git commit -m 'message' # 提交本地版本库
   ```

   **提交修改**和提交新文件是一样的两步 git add <file-name>, git commit -m 'message'

   **注**：添加某个文件时，该文件必须在当前目录下存在

​	 

3. 时光机穿梭

   ```bash
   $ git status # 查看版本库状态
   $ git diff # 查看difference
   $ git log # 显示从最近到最远的提交日志
   ```

   a. 版本回退 

   ```bash
   $ git reset --hard HEAD^ # git回退到上个版本
   $ git reset --hard HEAD~3 # 回退到前3次提交之前，以此类推，回退到n次提交之前
   $ git reflog # 记录你的每一次命令,可以查看你未来版本的commit id
   $ git reset --hard commit_id # 回退到某个版本
   ```

   - `HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
   - 穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
   - 要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。

   

   b. 工作区和暂存区

   + 工作区：就是你在电脑里能看到的目录

   + 版本库：工作区有一个隐藏目录`.git`，这个不算工作区，而是Git的版本库，Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的**暂存区**，还有Git为我们自动创建的第一个分支`master`，以及指向`master`的一个指针叫`HEAD`。

     `git add`把文件添加进去，实际上就是把文件修改添加到暂存区；

     `git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支

   

   c. 管理修改

   每次修改，如果不用`git add`到暂存区，那就不会加入到`commit`中

   

   d. 撤销修改

   + 当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令`git checkout -- file`，一定要有 `-- `，否则就是切换分支

     ```bash
     $ git checkout -- file # 丢弃修改，恢复到最新版本
     ```

   + 当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令`git reset HEAD <file>`，就回到了场景1，第二步按场景1操作。

     ```bash
     $ git  reset HEAD <file> # 把暂存区的修改撤销掉（unstage），重新放回工作区
     ```

   + 已经提交了不合适的修改到版本库时，想要撤销本次提交，使用版本回退 git reset --hard commit_id

     

   f. 删除文件

   ```bash
   $ git rm file # 删除文件 
   ```

   误删后恢复到最新版本`git checkout -- file`,只能恢复文件到最新版本，你会丢失**最近一次提交后你修改的内容**。

   

4. 远程仓库

   创建SSH Key：打开Shell（Windows下打开Git Bash）

   ```bash
   $ ssh-keygen -t rsa -C "youremail@example.com"
   ```

   创建完成后，在c盘-->用户名-->.ssh文件中有`id_rsa`和`id_rsa.pub`两个文件，这两个就是SSH Key的秘钥对，`id_rsa`是私钥，`id_rsa.pub`是公钥

   

   a. 添加/删除远程库

   ```bash
   $ git remote add origin <仓库地址> # 关联一个远程库
   关联一个远程库时必须给远程库指定一个名字，origin是默认习惯命名
   
   $ git push -u origin master # 第一次推送 master 分支内容，-u指定origin为默认主机
   
   $ git push origin master # 推送master分支
   
   $ git remote rm <name> # 删除远程库(此处的“删除”其实是解除了本地和远程的绑定关系)
   
   $ git remote -v # 查看远程库信息
   ```

   

   b. 从远程库克隆

   ```bash
   $ git clone <仓库地址> # 把远程仓库克隆到本地库
   ```

   

5. 分支管理

   a. 创建与合并，删除分支

   ```bash
   $ git checkout -b <name>  或 $ git switch -c <name> # 创建并切换分支
   $ git checkout <name> 或 $ git switch <name> # 切换分支
   $ git merge <name> # 合并某分支到当前分支
   $ git branch # 查看分支
   $ git branch -d <name> # 删除分支
   ```

   

   b. 解决冲突

   当Git无法自动合并分支时，就必须首先解决冲突。解决冲突后，再提交，合并完成。
   
   解决冲突就是把Git合并失败的文件手动编辑为我们希望的内容，再提交
   
   
   
   c. 分支管理策略
   
   合并分支时，如果可能，Git会用`Fast forward`模式，但这种模式下，删除分支后，会丢掉分支信息
   
   ```bash
   $ git merge --no-ff -m "merge with no-ff" <name> # 将目标分支合并到当前分支
   # --no-ff参数，表示禁用Fast forward
   # 因为本次合并要创建一个新的commit，所以加上-m参数，把commit描述写进去。
   ```
   
   合并分支时，加上`--no-ff`参数就可以用普通模式合并，合并后的历史有分支（git log查看历史分支），能看出来曾经做过合并，而`fast forward`合并就看不出来曾经做过合并。
   
   
   
   d. Bug分支
   
   修复bug时，我们会通过创建新的bug分支进行修复，然后合并，最后删除；
   
   当手头工作没有完成时，先把工作现场`git stash`一下，然后去修复bug，修复后，再`git stash pop`，回到工作现场；
   
   在master分支上修复的bug，想要合并到当前dev分支，可以用`git cherry-pick <commit>`命令，把bug提交的修改“复制”到当前分支，避免重复劳动。
   
   ```bash
   $ git stash # 保存工作现场
   $ git stash pop # 恢复工作现场并删除stash内容
   $ git stash list # 查看保存的工作现场列表
   $ git stash apply stash@{0} # 恢复制定stash,  用git stash list 查看要恢复的工作现场
   $ git cherry-pick <commit-id> # 复制一个特定的提交到当前分支
   ```
   
   **注**：要先stash保存后，才能切换分支
   
   
   
   e. Feature分支
   
   开发一个新feature，最好新建一个分支；
   
   如果要丢弃一个没有被合并过的分支，可以通过`git branch -D <name>`强行删除。
   
   ```bash
   $ git branch -D <name> # 强行删除分支
   ```
   
   
   
   f. 多人协作
   
   ```bash
   $ git remote # 查看远程库信息
   $ git remote -v # 查看远程库详细信息 
   $ git push origin branch-name # 将本地分支推送到远程库
   $ git checkout -b branch-name origin/branch-name # 在本地创建和远程分支对应的分支，本地和远程分支的名称最好一致
   $ git clone <被克隆仓库地址> # 克隆仓库
   $ git pull # 将远程中央仓库中的最新版本库拉取到本地
   
   $ git branch --set-upstream-to=origin/remote_branch your_branch # 本地关联远程分支
   # 其中，origin/remote_branch是你本地分支对应的远程分支；your_branch是你当前的本地分支。
   ```
   
   
   
   g. Rebase
   
   ```bash
   $ git rebase # 把本地未push的分叉提交历史整理成直线
   # rebase的目的是使得我们在查看历史提交的变化时更容易，因为分叉的提交需要三方对比。
   ```



6. 标签管理

   a. 创建标签

   ```bash
   $ git tag <tagname> # 用于新建一个标签，默认为HEAD，也可以指定一个commit id
   $ git tag <tagname> <commit-id> #给某个提交版本新建标签
   $ git tag -a <tagname> -m "message" <commit-id> # 给某个提交版本新建标签,并且写上提示信息
   $ git tag # 查看所有标签
   $ git show <tagname> # 查看标签信息
   ```

   

   b. 操作标签

   ```bash
   $ git push origin <tagname> # 推送标签到远程
   $ git push origin --tags # 推送全部未推送过的本地标签
   $ git tag -d <tagname> # 删除本地标签
   $ git push origin :refs/tags/<tagname> # 删除一个远程标签
   ```

   

# Cesium

[官网](https://cesium.com/platform/cesiumjs/)

小詹的cesium token

```bash
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMmQ4YmEyYi1lY2I3LTQ4YmItOGJiZi00Y2QxMzQ5NDc4NjYiLCJpZCI6OTY3NDYsImlhdCI6MTY1NDY3NDIyN30.ox4Yh2s0v5KsqhTQFkM1hnWKuhPHdZ-2KfN9LmyDwlI
```



## 第一个地球

**下载**Cesium包，我们只需要 `Build` 文件夹下面的 `Cesium` 这个文件夹，它是编译后 Cesium 包的正式版本，开发的话只需要这个

```html
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入 cesium.js，该文件定义了 Cesium 对象，它包含了我们需要的一切 -->
    <script src="./Cesium/Cesium.js"></script>
    <style>
      /* 引入 widgets.css，为了能使用Cesium 各个可视化控件 */
      @import url(./Cesium/Widgets/widgets.css);
      html,body,#cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
      <!-- 在 HTML 的 body 中创建一个 div，用来作为三维地球的容器 -->
      <div id="cesiumContainer"></div>
      <script>
        window.onload = function(){
          /* 在 JS 中初始化 CesiumViewer 实例 */
          let viewer = new Cesium.Viewer("cesiumContainer")
        }
      </script>
  </body>
</html>
```

**运行**：使用live-server





## 相机

1. **Cesium相机简介**
   (1) 在二维GIS中进行空间漫游，只需要确定视点位置即可，不存在视线方向的问题。但在三维GIS中不仅需要确定视点的位置，还需要确定视线方向，如果目标物和视线方向相反，那么在视域中则看不到目标物。
   (2)Cesium通过相机来控制场景中的视域，旋转、缩放、平移等操作都可控制相机移动。Cesium具有默认的鼠标和触摸事件处理程序和摄像头交互，默认的相机操作是这样的：
   左键单击并拖动——移动整个地图
   右键单击并拖动——放大和缩小相机
   中轮滚动——放大和缩小相机
   中键点击并拖动——围绕地球表面的点旋转相机

   

2. 相机的方向和位置

   (1) Cesium中的相机位置通过position来确定，position指的是相机位置的三维1坐标（可以用经纬度和大地高表达）

   (2) Cesium通过Orientation来确定相机的方向，其设定原理和右手笛卡尔坐标系原理相同，主要包括以下三个参数：

   - heading: 偏航角，默认方向为正北（0°），正角度为向东旋转，即左右摇头。

   - pitch: 俯仰角，默认角度为-90°，即朝向地面，0°为平视，正角度为仰视，负角度为俯视，即抬头低头。

   - roll: 翻转角，默认角度为0°，正角度向右旋转，负角度向左旋转，即左右歪头。

   ```html
   <div id="cesiumContainer"></div>
     <script>
       Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMmQ4YmEyYi1lY2I3LTQ4YmItOGJiZi00Y2QxMzQ5NDc4NjYiLCJpZCI6OTY3NDYsImlhdCI6MTY1NDY3NDIyN30.ox4Yh2s0v5KsqhTQFkM1hnWKuhPHdZ-2KfN9LmyDwlI';
       /* 在 JS 中初始化 CesiumViewer 实例 */
       const viewer = new Cesium.Viewer('cesiumContainer', {
         // infoBox: false,
         terrainProvider: Cesium.createWorldTerrain()
       });
       //设定位置为珠穆朗玛峰
       var position = Cesium.Cartesian3.fromDegrees(86.889, 27.991, 4000);
       //相机飞到珠穆朗玛峰 setView 没有飞行过程 ,flyTo 有飞行过程
       viewer.camera.flyTo({
           destination: position,
           orientation:{
               heading:Cesium.Math.toRadians(0.0), //正北
               pitch:Cesium.Math.toDegrees(0.0), //平视
               roll: 0.0 // 不歪头，正视
           }
     })
    </script>
   ```

   

   

3. 相机系统分类与用法

   针对不同的场景和开发需求，Cesium设定多种操作相机的方法

   **(1)、setView**
   setView通过定义相机飞行目的点的三维坐标（经纬度和大地高）和视线方向，将视角直接切换到所设定的视域范围内，**没有空中飞行的过程，适合快速切换视角**

   **(2)、flyTo**
   setView是快速切换视角，而**flyTo则是有相机空中飞行的过程**。可以设置飞行时间

   **(3)、lookAt**
   lookAt函数是将视角固定在所设置的目的点上，用户可以通过鼠标任意旋转视角方向，但不会改变其位置。

   ```html
   <div id="cesiumContainer"></div>
     <script>
       Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMmQ4YmEyYi1lY2I3LTQ4YmItOGJiZi00Y2QxMzQ5NDc4NjYiLCJpZCI6OTY3NDYsImlhdCI6MTY1NDY3NDIyN30.ox4Yh2s0v5KsqhTQFkM1hnWKuhPHdZ-2KfN9LmyDwlI';
       /* 在 JS 中初始化 CesiumViewer 实例 */
       const viewer = new Cesium.Viewer('cesiumContainer', {
         // infoBox: false,
         terrainProvider: Cesium.createWorldTerrain()
       });
       //设定位置为珠穆朗玛峰
       var position = Cesium.Cartesian3.fromDegrees(86.889, 27.991, 10000); 
       var heading =  Cesium.Math.toRadians(50.0);
       var pitch = Cesium.Math.toRadians(-90.0);
       var range = 50.0;
       viewer.camera.lookAt(position,new Cesium.HeadingPitchRange(heading,pitch,range));
     </script>
   ```

   

## Entity  实体

[entity中文文档](http://cesium.xin/cesium/cn/Documentation1.62/Entity.html?classFilter=entity)

实体实例将多种形式的可视化聚集到单个高级对象中。可以手动创建它们并将其添加到 [`Viewer＃entities `](http://cesium.xin/cesium/cn/Documentation1.62/Viewer.html#entities)或由数据源

```bash
// 红色带轮廓的圆
   /* viewer.entities.add({
        position:Cesium.Cartesian3.fromDegrees(103.0, 40.0),
        name:'Red ellipse on surface with outline',
        ellipse:{
            semiMinorAxis:300000.0,
            semiMajorAxis:300000.0,
            // 距地球表面高度
            height:200000.0,
            // 填充满，默认true
            fill:true,
            material:Cesium.Color.RED.withAlpha(0.5),
            // 轮廓
            outline:true, //必须设置height，否则ouline无法显示
            // 轮廓颜色
            outlineColor:Cesium.Color.BLUE.withAlpha(0.5),
            // 轮廓边框
            outlineWidth:1//不能设置，固定为1
        }
    }); */
```



## 模型

在var viewer = ... 下面增加scene变量,然后，通过Cesium.[Model](https://so.csdn.net/so/search?q=Model&spm=1001.2101.3001.7020).fromGltf来加载模型

```bash
var scene = viewer.scene;  
var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(  
    Cesium.Cartesian3.fromDegrees(-75.62898254394531, 40.02804946899414, 0.0));  
var model = scene.primitives.add(Cesium.Model.fromGltf({  
    url : url,  
    modelMatrix : modelMatrix,  
    scale : 200.0  
}));  
```







