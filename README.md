JavaScript Nodegit Clone From BitBucket with Username/Password Demo
===================================================================

Mac下需要做一些准备工作
-------------

在Linux下（如Ubuntu）不需要，但是在Mac下为了正确安装nodegit，需要做一些额外的准备工作。

1. 使用旧版本的node，比如`v8.11.2`
    1. 可以使用[nvm](https://github.com/creationix/nvm)来管理。
    2. 使用`node -version`检查版本号
1. `brew install libgcrypt`
2. 保证`python2`命令正常工作
    1. `python2 --version`
    2. 可以使用`brew install python2`或者`pyenv`来管理

安装
-----

如果是在Mac下，需要确保node版本是一个经过测试可以正确运行的版本号，比如`v8.11.2`

```
$ nvm use
Found '/Users/freewind/workspace/javascript-nodegit-clone-from-bitbucket-with-username-password-demo/.nvmrc' with version <v8.11.2>
Now using node v8.11.2 (npm v5.6.0)
```

```
npm install
```

运行
---

需要把bitbucket的用户名和密码传进去：

```
rm -rf local-repo
node demo.js myUserName myPassword
```

它将会使用指定的用户名和密码把git repo从bitbucket下下载到`./local-repo`目录下

注意
---

请检查所使用的username/password是正确的，否则由于nodegit底层依赖的bug逻辑，它会陷入死循环。

表现及解决方法可参见另一个Demo