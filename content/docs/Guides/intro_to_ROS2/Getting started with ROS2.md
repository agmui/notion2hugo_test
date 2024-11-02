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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=fdbb959dd3c70ab9708786cbdf3676ace790432a6e7b8281432d23e0ff5545ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=43139464e2ad759b88a295f731701af3572e5eab0cac3b49a6200a85cbff5af2&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=fc297825a62fe35ba90a6f636cd8fcdcb4c05a14879a925119cd0cbc26f788fe&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=8e541430828004085be1e84bd598b3b03442c830332ca8062105d085ba1a3450&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=9a2f3780e095840cf90622eb91be0cb8e99ac54582756e964ed36b1d81574542&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=03383718954fca0ec2be1c86397d1dd234456862661bad7a2cd21202034fafb2&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=4d705c8cb89c5e0892a3e9713d4487cbf81b60b17e1c30f3ab93bc6e1e4472cf&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=a2032ae6dfb8fe6cb256ff57096489510980cc9b170b7d8a3cc161441acb28cd&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=a0a6dcb18c42d494da5debf8246401bf509183ca64bb044e111bf2b0c8c68402&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=600a35163505290a32fec42355a4e460125bf291dc3bf7097ae0d131ed401b00&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100716Z&X-Amz-Expires=3600&X-Amz-Signature=88bfc0074a6681a72adf926c7da1fc84a185c7afc53a30e9b4b5ddea4a309324&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100716Z&X-Amz-Expires=3600&X-Amz-Signature=fc7cb12a64689f6d793d4a60e47b5fca00cc1d672bca9f5ebb101978f8dce731&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=be613d978a25df690c61f0be61324b026dd766d1d1393a1c0b12992407bb669f&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241102T100714Z&X-Amz-Expires=3600&X-Amz-Signature=8cdc6975d92a9aa230ad07737279ac3731ba2b89611840450e3f57d95928940d&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
