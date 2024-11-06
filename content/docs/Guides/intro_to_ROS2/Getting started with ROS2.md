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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=ae6750e17b15a01c29fbc4e34eb76252dc5d70035fdc73ce531f23b0dabaf70a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=de2ab098c8c628fbfea2a7fae97ab83165c638e9c02f4cbbc14c846aac50fa9b&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=d0dd334ca9c098b41caf061c7ee0b189115ea2f36e90c850b22f395d10104a76&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=c632f7d07c109b9bf4a81df49e74648d6454bf3e2d3fbf871af3c41acff7d0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=24f9e7d9d1b9bf1dac9347ee98fc9fd80ba652362bec21654561646553ff1588&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=083afe7e5515ba1ab5b0c234e7c9e23119020a96ac8ef92695b10e3b5dfdc423&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=85ec0504b98abdcbc100a28011ec2a27474ff83c8263605296a05001d5624e16&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=ef02e1e162f2f97be5123d7907d961dc37bb8720279484419cdbaaf09770c618&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=b1e19ce1859bb52f585e36a687fb47dc7b2e470f40baeeed3e681d816e4dc83b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=48720b1b7b223442654deaa486ed757689a387af52605a12130ce553189f0729&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121345Z&X-Amz-Expires=3600&X-Amz-Signature=99c4f24e13ee5269f2616ba51e9a2b06abf7bb503d919def5d5185bcdd0e3a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121346Z&X-Amz-Expires=3600&X-Amz-Signature=bd0a428c1cd7db6b4e85074ea1f91d6404804972ccdfa0bcc9086d4f0da2b03b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=1295bd82d273979c176bab98cea281cea711dbfcf7ee7a393c695ba98f076c41&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241106T121342Z&X-Amz-Expires=3600&X-Amz-Signature=095c5cae232b89e3495ab833b97f5848daa6c611b9887837c252b1400ace44a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
