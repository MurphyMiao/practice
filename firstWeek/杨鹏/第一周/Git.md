# Git 协作

常用命令：

```bash
$ git init
$ git status 查看提交的和未提交的
$ git add -A # 或 git add . # 或 git add file-name
$ git commit -m 'flag: message' # flag: chore、feat、fix、refactor、doc、test......
$ git log 查看日志
$ git push origin master
$ git clone repo.git
$ git pull origin master
$ git branch branch-name
$ git checkout branch-name
$ git checkout -b branch-name
$ git checkout -d branch-name 删除分支
$ git branch 查看分支的情况，前面带*号的就是当前分支
$ git rm name 删除文件
$ git reset 版本回退
$ git reset --hard HEAD^ 回退到上一个版本（HEAD代表当前版本，有一个^代表上一个版本，以此类推）
$ git reset --hard d7d5 回退到指定版本(其中d7b5是想回退的指定版本号的前几位)
$ git diff name 比较：如果文件修改了，还没有提交，就可以比较文件修改前后的差异
$ git reflog 查看仓库的历史版本
```

## 团队协作：

### 项目经理：

1. 利用 Vue CLI 创建项目，搭建项目中的基本结构（默认使用 Vue CLI 会初始化一个Git 仓库并提交，如果没有初始化项目，则需要自己手动 `git init` 来初始化）
2. 将搭建好基本结构的代码提交到本地版本库中：

```bash
$ git add -A
$ git commit -m 'chore: xxx'
```

3. 创建远程空白的中央仓库

4. 将本地项目的仓库与远程中央仓库关联

```bash
$ git remote add origin ssh-repo.git
```

5. 将本地仓库推送到远程中央仓库中：

```bash
$ git push origin master
```

6. 在远程中央仓库中管理-添加仓库成员-邀请开发人员

7. 基于 master 分支创建 dev 开发分支，将 dev 分支设置为默认分支，可以将 master 分支修改为受保护的分支

### 开发者：

1. 先将远程中央仓库的代码克隆到本地

```bash
$ git clone repo.git
```

2. 基于 dev 分支创建自己的开发分支，如：

```bash
$ git checkout -b xiaoming
```

3. 在工作空间中实现开发(编码)
4. 在编码完成并通过测试后，提交本地版本库

```bash
$ git add -A
$ git commit -m 'feat: xxx'
```

5. 将本地版本库推送到远程中央仓库自己的分支中，如：

```bash
$ git push origin xiaoming
```

6. 进入远程中央仓库，在自己的分支中提交合并请求（Pull Request，简称 PR），向 dev 分支中请求合并代码，如果看到的是绿色的“可自动合并”，则说明分支间不存在冲突，可合并代码。如果显示的是红色的 “不可自动合并”，则说明分支间存在冲突，需要手动解决冲突问题：

   - 切换回 dev 分支

   ```bash
   $ git checkout dev
   ```

   - 拉取 dev 分支中最新的代码到本地：

   ```bash
   $ git pull
   ```

   - 继续切换回自己的分支中，如：

   ```bash
   $ git checkout xiaohong
   ```

   - 变基（rebase）：

   ```bash
   $ git rebase dev
   ```

   - 查看冲突情况，手动解决冲突问题：

   ```bash
   $ git status
   ```

   - 手动解决冲突完毕后，将修改保存到暂存区：

   ```bash
   $ git add -A
   ```

   - 继续变基：

   ```bash
   $ git rebase --continue
   ```

   - 如果进入 vim 编辑器界面，可按 `I` 键插入修改内容，如果要退出 vim 编辑器界面，按 `Esc` 键，然后输入 `:wq` 后回车，保存并退出。
   - 如果继续变基过程中，又遇到需要手动解决冲突的情况，则返回上述过程，继续解决冲突并完成变基操作。
   - 变基完成后，重新将自己本地仓库的代码推送到远程中央仓库自己的分支中，如：

   ```bash
   $ git push origin xiaohong -f # -f 表示强制将本地分支推送到远程并覆盖远程分支中的内容
   ```

   - 继续完成 PR 的请求合并

