---
sys:
  pageId: "89e0a78c-4e2b-4070-b327-d28cb0694742"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2024-09-02T10:38:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS2 Setup.md"
title: "ROS2 Setup"
date: "2024-09-02T10:38:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
toc: false
icon: ""
---

[Install vscode](https://code.visualstudio.com/download) and download **Remote Development** plugin:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/41521b44-fb98-47b4-905f-467d6e588b9a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=d9ff7bcd4ba53b761b8d0be7c73e553b172dc4176582a429fcf5ea24086543f1&X-Amz-SignedHeaders=host&x-id=GetObject)

Create a folder called `ros2_ws` somewhere on your computer and open that folder in vscode

`ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=c1137630f893466242b808703991fc6008c71fb9c3c4230e034bda539a4f62ca&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=0da606591866d23311c8e7a0851722bbd6782c4e598ae513fd1c992421fea5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=a0833bc6459daf340990ef66bf5391b598f0821e7a4c2897ec74317a529b9cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=d946d8f1e389fb2e749afd6490e1a3ecb155647cc6ab203c3f838a67327a0a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=f04083a8acbaaf9690ec9f070eef48983426baeb9c4197ca25701d773c8a6cc2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=0a208ce50522490a0b38a88826fed0523bfe4c042cbd1a8ec30e5138b02e32c3&X-Amz-SignedHeaders=host&x-id=GetObject)

vscode will now install `ROS2` onto your computer so this may take sometime.

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104611Z&X-Amz-Expires=3600&X-Amz-Signature=83af80e6beb8ba8da003f7a2f73727ddf3b616a10917e60037badb449b9da3ca&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104611Z&X-Amz-Expires=3600&X-Amz-Signature=0a34136daf3db915e1d6ea756ded24625e832ca5adc873c702b8a79cd046b908&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

## add to `.bashrc`

In the `Docker` file inside the `.devcontainer` folder add this line at the very bottom: 

```docker
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/humble/" >> ~/.bashrc
RUN sudo apt install -y python3-pip 
```

To test if everything installed correctly open a terminal with `ctrl+`` or pressing `ctrl+shift+p` and typing `toggle terminal`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=7a281eb0f4c3edf3ad3dc8a8ea974e9208dfa264a7878b229cde637262c9c941&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240902T104607Z&X-Amz-Expires=3600&X-Amz-Signature=f0c71f22d8b9741e6c7c6799b9343d77a903704b851adb947909efddd48ad6fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now you should be setup and should move onto the next guide 
