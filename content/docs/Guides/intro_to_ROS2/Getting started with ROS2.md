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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=611cdb5f00dd369cf5ba41d5e7345a72edfdb60ae0dc0b7bced85fabfa4dab09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=8b7000e071d09a31643d5cce6f989ced8a5caa1598d169ab103ae986d86115ef&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=70f9e979416a4353cc66425dc3e2cf035a9037f2093e86dcd814b82a6e42c057&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=23ff0729709d4fd31c443ab221e854fb6728709990262ade8c4e97a6ac021d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=3ede0dc1a3218cc6e8ae1a4da3e2a50cebef78c26510bbd3320b458a220e80e7&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=6c696c3fb841740cbb3793d46143242434fbbc27e003a735bd62199dc8edd7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=c850ad3feb9ca099750e71b654f64146654eeef94470589cc58fe7165cca8ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=636cc1fbd9ef5a63a9e3f87568ff1237b6acb7d6437af40178a0a058deb14cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=b90f4a22217022763488e6d0a0dd342dee50f622f468911ae549ae96951791c3&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131433Z&X-Amz-Expires=3600&X-Amz-Signature=41a47fe3cd67cfe47b2957d45acfb398e5a0252b0adf0a2dfecaa8c18cf7add9&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131438Z&X-Amz-Expires=3600&X-Amz-Signature=8966b2cb6639a0894b02ba7adb36f2e3c0f5ce8a560255dca9486dc001782871&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131439Z&X-Amz-Expires=3600&X-Amz-Signature=d67305202988c8ac566a1405038d72aad007213fe9f9f9dc000868dc462d0c26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131434Z&X-Amz-Expires=3600&X-Amz-Signature=16761498047534b97c2c8e85253446d0ec59a69119354408c2757499b68d58c2&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45FSPPWI6X%2F20241123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241123T131434Z&X-Amz-Expires=3600&X-Amz-Signature=5ea173862b629fd626d0b04d0435ab7c6a0750f19af4d26f50f3f579724d820e&X-Amz-SignedHeaders=host&x-id=GetObject)

Install:  to get windows to pass over

```bash
 sudo apt install xcb
```

Now you should be setup and should move onto the next guide 

[https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s](https://www.youtube.com/watch?v=dihfA7Ol6Mw&t=650s)

```python
xhost +local:
```
