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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121240Z&X-Amz-Expires=3600&X-Amz-Signature=c8be9a9073efb4203fb61712dd9005d931a3f2dad044b3e31ed8319f564693a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=b2e679d23bf6f5b147de88ee8cd6635f319e237ef322e0e312d6894b9d6e4c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=539803c6aaabd8954a2c13292d9f32719aff9d409c89979e0d2994b44bd6c23b&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121240Z&X-Amz-Expires=3600&X-Amz-Signature=16ee71f0a1d08a2af4b60c7366ad2a9834ca0d2946e5fd98c844293bcceb03b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=b5721aad6af19ce9480c5b2466ca670dc470beb1ab3f44982b68b3315bfd3031&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=dd7bef50ac48e25365b2027851e698d2723fb079c9e23bca47ce8c4cab75805e&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121240Z&X-Amz-Expires=3600&X-Amz-Signature=6cbf6ab7112fd74dbacfe574e99fee7a90a31a143e3a4c9f55c02ce0cb040299&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=136b295bcef616f36eb0edd7c941eb28a0c00cc9da08896faf70c4433b48a3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=74c098692390a85bc30bbb6897d2fbf004897cefa23a529e7f2b0fbce2424e41&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=baf95ba6345b3dfd55888599522f9e440c71c45780bc77a7493ed6294930d78a&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121243Z&X-Amz-Expires=3600&X-Amz-Signature=3e8aa795dc562669bb86fef8a4b9728262ef1fc783a377227dddaa6eb015413e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121243Z&X-Amz-Expires=3600&X-Amz-Signature=5632ceaef212d388adbc5fc9c881fd0ca8195ce14e0bbff5842b128c79916c53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=3cdf05622064e4921915371866a9bff0bd8441e469e378d66b36f56735ee16b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241116%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241116T121239Z&X-Amz-Expires=3600&X-Amz-Signature=b98a4eef2b043d91b56d012b6473eb0e3a86bc5c8e0ee37e279a89ef85923a79&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
