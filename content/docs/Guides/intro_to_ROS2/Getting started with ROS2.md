---
sys:
  pageId: "89e0a78c-4e2b-4070-b327-d28cb0694742"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2024-09-18T19:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Getting started with ROS2.md"
title: "Getting started with ROS2"
date: "2024-09-18T19:18:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 141
toc: false
icon: ""
---

## Step 1:

[Install vscode](https://code.visualstudio.com/download) and download **Remote Development** plugin:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=59216534a778565ea40146e9b97825e3ab91d0f9b71e597d31e31696df73cc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=65680f3df24b8ccb2b995c61093d02e65009ab3d4192a4bd7373c19d56917e19&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=c253a0eadc28f804aa9be33ef9ef3afccb24bda211a1351b4fda6eb4bbe11c35&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=0c8574dfaf1f361c59fe6d6bea21aac235cf224ecdb30e2da134340bc286393e&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=dab092b7216d8a9b7071cc293667796dba32bc9c6878012f5f09bb2d02551eed&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=403c17a8971c6ce560270a9dad640735b979390c9df653fe3b9c87789f00e045&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=455130e8c95fea465d0ee9ba98e5f68c58fc579eb5cd96bf6254560f90db0936&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=8acc8bac8e88ea37ba864f430b57e3df2e7c13b258ce5a08a056865b20d368e7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=bef2ceb4b13353806259a4d00fd9ac7271f6718c5678220f0d1b270cafd9005f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=1f4359f2b0afc08e6284fd64e88b872dc2ee65aa3734e8d2310761dc31bbd92b&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160744Z&X-Amz-Expires=3600&X-Amz-Signature=500921c6944a219f9fdb2dfcf7a89e3d3d5a253dfc2e29d6ed8fdd4c35b56f7e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160745Z&X-Amz-Expires=3600&X-Amz-Signature=65444fffaefaa2167912931dd90426b801f29a69012a59c42076918ef9b654ee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

## Step 4: add to `.bashrc`

In the `Docker` file inside the `.devcontainer` folder add this line at the very bottom: 

```docker
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/humble/" >> ~/.bashrc
RUN sudo apt install -y python3-pip 
```

To test if everything installed correctly open a terminal with `ctrl+`` or pressing `ctrl+shift+p` and typing `toggle terminal`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=ed11cc938a755a1ba830879c74bf7bba40b773fe5a6d34f3fd0241e145ddd682&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241020%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241020T160741Z&X-Amz-Expires=3600&X-Amz-Signature=de1fd1d6e156955a30c212e27b2f87ce4eba3e97332d7d73784476e4e4f66372&X-Amz-SignedHeaders=host&x-id=GetObject)

Now you should be setup and should move onto the next guide 
