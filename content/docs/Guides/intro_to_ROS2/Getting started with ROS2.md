---
sys:
  pageId: "89e0a78c-4e2b-4070-b327-d28cb0694742"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2024-11-01T18:57:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Getting started with ROS2.md"
title: "Getting started with ROS2"
date: "2024-11-01T18:57:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 141
toc: false
icon: ""
---

# TODO: add wsl install

## Step 1:

[Install vscode](https://code.visualstudio.com/download) and download **Remote Development** plugin:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=89f57951202392ed0e286df4c3271b35a5b118a1452190a271df6f37a2f05bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=3b05bbcbe08e8b01f50aa84c1ef44b500694c290f79d547534abde0c031b2a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=20fa5140462bc45d0bb796fd61633c0127f6056fc89560be046addd53488da34&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=eacb351268e484c25f3d4b28d54127cd2c5f0636cfb970234066793fab8fb6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=dc25bcf21806a75d57bc576ccc6fd7f5f83ec6c9ef5fc386b95676cf1ea12558&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=bd58c90fb2a5d78b4b0549bd8e0a99b1d3452230b7a86dd8f49392e7bb7eaea8&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=bd870da966b1898a28e7abf5136313122b2ea862973bbf85bd2aaeea251d6486&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=a9e440c595780196bcf2350fa16f4c8df8cb7875715b7cc6fa1a3c4e70b3250a&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=76c0fda5d4977f1f504a473907ad711a2db7c580e8e78ea652f563b4c9df46b4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=1cead504b48ebe6af961bad352fd2b9dd931708db11ee03781aae3b30ca4bb8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190214Z&X-Amz-Expires=3600&X-Amz-Signature=959bfbf99c595a405aa2a92d21e8883007279022eb9209bad1091f511212f179&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190214Z&X-Amz-Expires=3600&X-Amz-Signature=aa51d25c9fd7b813022383c8dfecfe78b42aa5f958711930abe5c1e2449ce428&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=7cb7ccd8665618d95c0b25052979b78d504968639cb5f2a185fc2b987df4855c&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241114T190210Z&X-Amz-Expires=3600&X-Amz-Signature=4c038eacea0ba4f83d751c3630ee29116005f63d6801a9020fa16010525cd43f&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
