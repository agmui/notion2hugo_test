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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=30e79337e008b7f32f9d4dcf1479ac96b3b9ec6d0647d06e19de96202c8c29d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=c410016d161498e4f6d60c60f56dfbfa0f08984ff3b8cd47ed5574cbcfd9b680&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=bc7c66130d8dd30bfa373b1323c0cf4b719090edc36884cd33a4f8c9e2289834&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210222Z&X-Amz-Expires=3600&X-Amz-Signature=15736aa8c86db52b929591c4088b415e01f17f717c2cfed9ddb439b505c23fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=879182689eb15475f0e407f3de170201bcfcca6f133fbae9e94a38782d0314a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210222Z&X-Amz-Expires=3600&X-Amz-Signature=7df4592e703199149dff2992910b9fff787b7fdbbe0d335867db9ec42671da19&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=9124a52268ad5cd6d50e98b14d3da0424a28e853bd3af033dea8a24d779b6a61&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=24a481e1f5c25ee3072990404cdfc47daa6aad7421330ac4d806af8d4b2f18f4&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=ed20298c0dc179e3b150f21fce0ca1f261c4254876fb4b7871d179338dbc2a02&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=ba8f06b6880264e6321c85df1128f53f37f25b5b1cf25b16c111c3dda60a6417&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210225Z&X-Amz-Expires=3600&X-Amz-Signature=3f983fa883efc67787b5a94c8c0eb50c24c49363b18fdf4b5ca48988535abc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210225Z&X-Amz-Expires=3600&X-Amz-Signature=e284334b89294965f4c11d5d13fde98e09593de1e7a52e9fff242bca5e8ce03e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=4646f7feac2211b24dd40b763ea6c3c25d6ed2cebe795e40f736308b415a0bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250112T210221Z&X-Amz-Expires=3600&X-Amz-Signature=f8d385f814486ab18c5f25483231a1b184ccf0071fd7a17fc5597f56135959ba&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
