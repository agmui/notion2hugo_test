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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=1036ab2511a353fc4a1f974ef90777ee0365cd9aa5dd2119ab921c1b67c9dfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=79c2a1a2514e851ab2090e958fd32174e1c9ab2c0917e43f4d842e3f6a6807c0&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=79198d42cffc6c964ba0288f1abc9077231495d177fed1549841dbd4443c031a&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=272952c3a01402b2b742c9de87ce97a24e16ef165ac7cb539b121b8a5f0acdda&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=46721402e19856636f0936d24e334149c2cbe83011d044f7856c814cf22075b9&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131705Z&X-Amz-Expires=3600&X-Amz-Signature=f07d55b0d93fe749df3822ca798191cca5d4b094262a390473464a401e7c8fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131705Z&X-Amz-Expires=3600&X-Amz-Signature=8f118266d961d83dd2f0a738447682432aa1e10c80529567a1d0c8ac77c4137f&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=850f508a07b73723a7dd85c24ac4681bee071fb555e20636c25761f3e33ba6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=605796be4204617decf2fc9a2c00f465dd62270b337909d94349514ac26fce92&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=8938e853ea2a0ed97304b5ca983e695e0a128c0d06b9d03d2c3c6f4c3765be0b&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131707Z&X-Amz-Expires=3600&X-Amz-Signature=ae850e4a0d3671335a8ab3013a242e96f6c1002653af3b9ac071c211719606b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131708Z&X-Amz-Expires=3600&X-Amz-Signature=0798e1178fc265ea6a083899d9ddee85a85b3613a7be08974a74ec72618f9cce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=6e39c06b6cf5567b9a23e55ad62fe9bbe42568b1e651791fc7c6376b023e0217&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20241017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241017T131704Z&X-Amz-Expires=3600&X-Amz-Signature=275a06d9e5844ee0e93c3f850e3ea6cac237eb53e8c94d574cc9faa2bc712193&X-Amz-SignedHeaders=host&x-id=GetObject)

Now you should be setup and should move onto the next guide 
