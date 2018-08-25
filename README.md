# Documentation

## create "cd-pipeline" on uberspace 

- login to uberspace
- make "bare" git repository
  - ``mkdir ~/myProject.git``
  - ``cd ~/myProject.git``
  - ``git init --bare``
- make directory for the "git content"
  - ``mkdir ~/myProject``
- setup git-hook
  - ``cd ~/myProject.git/hook``
  - create file: ``post-receive`` (see next topic)
  - make that post-receive hook executable: 
  - ``chkmod +x post-receive``

## post-receive git hook
```
#!/bin/sh
read oldrev newrev refname
echo "## uberspace git"
WORK_PATH="/home/relang/myProject"
BRANCH="master"

unset GIT_DIR
cd $WORK_PATH
git reset --hard
git pull --verbose origin $BRANCH || echo "git-pull: returned error code"

# npm install
echo "## npm install"
npm install


# restart service
echo "## restart service ..."
svc -du ~/service/myProject

echo "finished"
````
