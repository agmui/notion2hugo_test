---
sys:
  pageId: "89e0a78c-4e2b-4070-b327-d28cb0694742"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2024-09-02T13:54:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Getting started with ROS2.md"
title: "Getting started with ROS2"
date: "2024-09-02T13:54:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=f17c541f8372bef64510ac0aa06f5a5970f52102b120e59c8c1c176d29c968d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=de9633c579c2dbb6727f2ad8a226cd8b3a5e43f326205c3187de0ce23ee977eb&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=12cc73296536c764127226c183fcc51ea5b62097022031f0b7ef99e97ba85de4&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=03c51ae6264332956e4ef8564a2f0c231d62910f507f69408aea8ea2cbd7c3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` 

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=ad297ac6e26799f43d0f376187e865c087a8deea1803671d81e5521a9d6c7154&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=b9bfcbedabdee70828575eb9261f15c828795fc44269b4ea35bc060743f846d2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=ace90299226ce77b6508a2e622cbc8f57cf6252c3dcc5b188262cb2b7c55effb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=9c0c48b9c580d68a0c2203623bac947af1485d478b0c6b1a81af5eb1bfd3cf68&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=d94a377940efc4acc6f8b29297e525d76fd36eadd89571c06442ff7966c4ff36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=b7b06e6467aea225406ed5e1eebc3fd94862315ca1b7d398bbd2ab22cc69f100&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160854Z&X-Amz-Expires=3600&X-Amz-Signature=9e2a0af4719d7a36b61af1a27b18e6886ba81a400103701f3f6785a84e8e696d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160854Z&X-Amz-Expires=3600&X-Amz-Signature=221f81a565967cc160f2126fc279e750b7cff4f66375a1c2886b702c27bf3001&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=81ee365c152685d3e0a04e0a85dff19e9dee552b49ae6cab41f48ff3e530ed51&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240918%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240918T160852Z&X-Amz-Expires=3600&X-Amz-Signature=40cffe1a8a3fc90479157867579b73fa67946c17a5d49ce311a9b8d000299d52&X-Amz-SignedHeaders=host&x-id=GetObject)

Now you should be setup and should move onto the next guide 
