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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/efb52993-1881-4a40-b95e-6f020334f022/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=fe3dac9a6d7fa42d0564a883f5141342737591c5cc706a95dcb4b48b87cc5d16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Step 2:

Create a folder called `ros2_ws` somewhere on your computer and open that folder in `vscode` by going to File → open folder 

`ctrl+shift+p` and type: **Install Docker**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2269dc0e-1cd5-47ff-bceb-c04ad9b2eab0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=4465764be7d73603132a5881b72f8e9d55eb1535d8731131f1de73fe54f7d462&X-Amz-SignedHeaders=host&x-id=GetObject)

The `Docker` install will take sometime and at the end it will ask you to restart

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ed233f78-be33-4b1f-b89c-9c346c0e961e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=c38fbcad07c6c7a61c5a56fb3ddbfd9f3e6543acedf9a2588415966d773b57bc&X-Amz-SignedHeaders=host&x-id=GetObject)

Once you restart open `Docker` and finish the installation

It will ask you to make an account but you can just press skip on the top right

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/21010ad9-1659-4fd9-9f59-9932a09b2a3d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=e5fc41ec032e1679f106206756acfed5bd90e465dc1e2fd8a1c6845e4cd6ef8c&X-Amz-SignedHeaders=host&x-id=GetObject)

Then reopen `vscode` and open the `ros2_ws` folder you just made

press `ctrl+shift+p` and type: **reopen in container**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4e93b8c2-41ad-488c-8095-c74205196118/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=47a22ef9397162a8db94c82ac5a36d724e025e2e4ca578c2e2fdda7e4aa3ad9d&X-Amz-SignedHeaders=host&x-id=GetObject)

Choose “Add configuration to workspace”

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9560b282-5060-4989-ba37-97e7b2c22476/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=4d0aaaf90e73565d7947430ffc8f808e7f3e4ebd1b11bf34499f53a7f064989c&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ee63f81-886b-48e8-a553-dc6e5eac99e4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=85a86657f7b96acf2eca76067ec8486306035ec53863fdbb0e1fa4ccbfaa289b&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae1580b2-b048-407e-aed9-b584224a7a04/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=f9aeb6595e10705c144a512f104d96da42e3b0177b4f40141bbdd1446fcc98c0&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/53255b28-f75e-430f-b9e3-c0ac8577e42b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=b7e1786e2d55cb9401880d900bd0dc5098afb9b66c8f48123ddf023790332a55&X-Amz-SignedHeaders=host&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7c562767-5af9-4ffb-97d1-327bcdf4ee00/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=088bd072ccb324b7479a564d027bb330ea713a3a69c4decae502af3fbb9b9808&X-Amz-SignedHeaders=host&x-id=GetObject)

`vscode` will now install `ROS2` onto your computer so this may take some time.

## Step 3:

Once `ROS2` has installed inside your `dev-container` I recommend you install these two plugins:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3fc3d550-5a54-4ba1-ba6b-faa01cdb7369/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100754Z&X-Amz-Expires=3600&X-Amz-Signature=eafb92b145b1a103890f61378463c8d42e0cab9705a7103c476d9229a5056b43&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d994cc66-13c2-4093-a5a3-f84cf4601a82/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100755Z&X-Amz-Expires=3600&X-Amz-Signature=22b88ca1106afff7b5829b435f8aa0d8baeb8a1a9b29496e78fd9ecf78ae3055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6a4943d8-b04e-4c02-9a58-775f3384d1a5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=d167734251ea86f11a93289e9a802468362af575c5a544ef9ec06799b089d65c&X-Amz-SignedHeaders=host&x-id=GetObject)

then 

Then type `lsb_release -a` and `echo $ROS_DISTRO` in the command prompt and you should get similar responses:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e635dec-a805-4e85-8b9e-d000e5b71a4e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241026T100752Z&X-Amz-Expires=3600&X-Amz-Signature=670535c62602c93baf440942fbef1b8ec5ff2a40d1479036a738c36fb1f10347&X-Amz-SignedHeaders=host&x-id=GetObject)

Now you should be setup and should move onto the next guide 
