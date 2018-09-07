JavaScript Nodegit Clone From BitBucket with Username/Password Demo
===================================================================

使用Nodegit从BitBucket下clone一个私有库，使用username/password。

```
npm install
```

需要把bitbucket的用户名和密码传进去：

```
rm -rf local-repo
node demo.js myUserName myPassword
```

它将会使用指定的用户名和密码把git repo从bitbucket下下载到`./local-repo`目录下

注意
---

1. Mac下安装nodegit需要多做一些准备工作，参考：<https://github.com/freewind-demos/javascript-nodegit-clone-demo>
2. 请检查所使用的username/password是正确的，否则由于nodegit底层依赖的bug逻辑，它会陷入死循环。
    - 表现及解决方法可参见另一个Demo: <https://github.com/freewind-demos/javascript-nodegit-clone-infinite-retry-fix-demo>