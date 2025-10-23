![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

inicializa una carpeta en el repositorio.

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

´´´sh
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


