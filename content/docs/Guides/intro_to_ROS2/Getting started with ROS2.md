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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190125Z&X-Amz-Expires=3600&X-Amz-Signature=091a444ab413aa3ff4e1e08f2b6f49ef3cd952f41c257e82658dc99728aa5515&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=567ce69b7a10fa0900cd04be7fe8a317910261e2a885563f688432afcff2cb1a&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=f2e8cc0e9f33d263b19da8f13e00e78d280419c8f70f731fc5af2e50bd066f10&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190125Z&X-Amz-Expires=3600&X-Amz-Signature=6f79bd3ba7af72e825d444739b7d7877b1e7f9dc8e5227c400c763ad9d81283b&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=8345df024e0cde57c36e5ab5ae55398e3599cdac1f6e0710c8766cd4124da5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190125Z&X-Amz-Expires=3600&X-Amz-Signature=c07316c6f0ecc5d703f577ec62be19569091cea1ffa14068afad8d4e2b3c69ec&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190125Z&X-Amz-Expires=3600&X-Amz-Signature=ca9e4b0fe27a1f81e5f02b6326a3ba220ec63be566de37af21e6d5862c95c969&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=8e163afea13b602646bff9c4a157d2b3e89e225c74929cae34a5a1f051288148&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=5d341aae624a7476e48ba32cf0776b204876ae4f6e6d51893d763ec9f8c5d9eb&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=48fa04612553c71216cd81eff3d619a4a0a39ceb434ff6926b811a8a02966d81&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190126Z&X-Amz-Expires=3600&X-Amz-Signature=f69ed28b5c915f75d92d28021238cfedf332f500519458f523c8a0f16c18f6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190127Z&X-Amz-Expires=3600&X-Amz-Signature=6aa44d27184c76b11cbdcd17dfef0eb3b54c0b94d2d99458c9e074241e8319c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=66050acb7170ea521d8b724018bacefc8e9c3fb7b30e58116ed553587cbbc91d&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250125T190124Z&X-Amz-Expires=3600&X-Amz-Signature=e6213da318349dac566e405b421980b23bce492855a058cda6ffc56883083826&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
