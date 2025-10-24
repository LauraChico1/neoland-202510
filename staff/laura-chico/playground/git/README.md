![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

Initialize a repo in a folder.

```sh
$ git init
Initialized empty Git repository in C:/Users/laura/workspace/neoland-202510/.git/
```

## git remote add origin repo-address

Connects the local repository to its origin GitHub.

```sh
$ git remote add origin https://github.com/LauraChico1/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository.
```sh
$ git pull
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> master
```

## git branch -a

Shows all the branches in the repository.

```sh
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch main

Changes the branch to the given one.

```sh
$ git switch main
branch 'main' set up to track 'origin/main'.
Switched to a new branch 'main'
```

## git branch

Show the local branches

```sh
$ git branch
* main
```

## git status

Show the status of files in local repository.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/
    nothing added to commit but untracked files present (use "git add" to track) 
```

## git add

Add content to stating.

```sh
$ git add staff
``` 
## git config setting
Configures settings in local git.

```sh
$ git config user.email "laurachicogarcia@gmail.com"
$ git config user.name "LauraChico1"
```

## git commit -m message

Consolidates the changes in local repository.

```sh
$ git commit -m "add bash and git docs"
```

## git push

Pushes the changes from local to remote repository (origin).

```sh
$  git push
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 10 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 2.05 KiB | 2.05 MiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/manuelbarzi/neoland-202510
c0018b0..b123f3d  main -> main
   ```

## git log

Show commits history ordered descending by time.

```sh
$ git log
commit c0d044040c37445af4f71cf0eaf4bcc8d3727325 (HEAD -> main, origin/main, origin/HEAD)
Author: LauraChico1 <laurachicogarcia@gmail.com>
Date:   Fri Oct 24 19:33:39 2025 +0200

    add new commands to git doc

commit 658c27c74dbcbbd529f3b8957b42409815e97f20
Author: LauraChico1 <laurachicogarcia@gmail.com>
Date:   Thu Oct 23 21:52:40 2025 +0200

    add bash and git docs

commit c0018b0a7fcd2974422226e792bbc4c080df6e91
Author: manuelbarzi <manuelbarzi@gmail.com>
Date:   Thu Oct 23 20:10:57 2025 +0200

    Initial commit
```



