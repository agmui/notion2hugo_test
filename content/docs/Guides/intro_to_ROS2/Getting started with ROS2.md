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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=63757b97ece714ac508de8249f3d80ad1a9c7603b969ff0678dfbfd866de2e3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=b39aca73c1dcae15e8be202606f34076f31d3765ae6555a3437cff29b8382091&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=00588da7f96d5b49589d0a6c4fbd12d4f3a80f5151b92d2a2047e75a2592047b&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=3b539b9f686f678574dd70882134527a6d24a3843e33f7486f173ca4afe52b91&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=a7fe6a1f07ec76656927a1e0f58b6e7a221baf776a4830be2b203f4bb1c55cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=39bc554424442ed0dd677aba68adab51c5260663261fe627a6cbd0244b504dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=772cc885d37833a4353747e00df0c6ce647db8e45843ebf146ba211a83d2a7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=8f7567690dbec453302ba55181aa09291c0773b705423d088ab35e5adb725469&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=a1b387414f9ea223e08c8480096c6466aa16c413f431654ac80d59053ec74e36&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=c9a86b1d44340cfcfca78da700054de4b6658096b0546b8f18a0bdc8ee996987&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220156Z&X-Amz-Expires=3600&X-Amz-Signature=a36dde4609f1390e43e6caba556a6dfee70b2f0506ebdd2db02fca3f7d361e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220156Z&X-Amz-Expires=3600&X-Amz-Signature=66fbf31a94d39d8728e204760b32b0da5a622518c6201054be491d21befada9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=fcaded976b839e4cb033db843da080028fcf0dd020045a00aab0581823cfef4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20250104%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250104T220154Z&X-Amz-Expires=3600&X-Amz-Signature=1cf5b5ade98be6f3ba3408d45e906fcf09ac744d20f3752dbb0afe0346975ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
