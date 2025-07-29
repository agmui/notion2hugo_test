---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide: [https://docs.nav2.org/setup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

---

This part of the guide goes over [Nav2](https://docs.nav2.org/index.html) which is a package in ROS that provides autonomous navigation.

In this guide we will build a simple differential drive (tank drive) robot

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=64e639ceb979d5815cf29eb611184e04487b58ef0cc935d3d1bc23dc14fa663f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=bf3c654c623d3c442c087a71768b357a67601868d27a3047d31e7ef3b126d7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=0d7c9eea6b95549c9047413fa038e3045877ea355cb98c634d7ad6df669c1348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## Creating workspace + package

[What are ROS workspaces/packages?](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-packages/)

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node mbot_pkg
```

### Building 

```bash
cd ../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## install pkg

{{< tabs tabTotal="2">}}
{{% tab tabName="Dev container" %}}

If you are doing the Dev container setup put these at the bottom of your `Dockerfile` in `.devcontainer/Dockerfile`

```bash

################################
## ADD ANY CUSTOM SETUP BELOW ##
################################

RUN sudo apt update

# Rosdep update
RUN rosdep update --rosdistro ${ROS_DISTRO}

# Install dependencies
RUN sudo apt-get install -y \
    python3-colcon-common-extensions \
    ros-${ROS_DISTRO}-xacro \
    ros-${ROS_DISTRO}-ament-cmake \
    ros-${ROS_DISTRO}-robot-localization \
    ros-${ROS_DISTRO}-joint-state-publisher-gui \
    ros-${ROS_DISTRO}-slam-toolbox \
    ros-${ROS_DISTRO}-navigation2 \
    ros-${ROS_DISTRO}-nav2-bringup \
    ros-${ROS_DISTRO}-tf-transformations \
    ros-${ROS_DISTRO}-librealsense2* \
    ros-${ROS_DISTRO}-realsense2-* \
    ros-${ROS_DISTRO}-rqt-tf-tree \
    ros-${ROS_DISTRO}-foxglove-bridge \
    ros-${ROS_DISTRO}-ros-gz 

RUN sudo apt-get install -y python3-pip \
    && sudo rm -rf /var/lib/apt/lists/*


# enable extra quality of life plugins
RUN echo "source /usr/share/colcon_argcomplete/hook/colcon-argcomplete.bash" >> ~/.bashrc
RUN echo "source /usr/share/colcon_cd/function/colcon_cd.sh" >> ~/.bashrc
RUN echo "export _colcon_cd_root=/opt/ros/${ROS_DISTRO}/" >> ~/.bashrc
RUN echo "export RCUTILS_COLORIZED_OUTPUT=1" >> ~/.bashrc


# Source the ROS setup file
RUN echo "source /<your root folder>/mbot_ws/install/setup.bash" >> ~/.bashrc
```

**Example:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=68fb6c190a43eb5ef88534601ebd602dcdb62c5a4aaed47a96294151cfe5287c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=185dfe1e390afd71180d69bea75aa7876fb0f48446f04abdb524acf9a7dedc5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=ed1368fd5e70e4b101e3fac39ade401153a23dc9991edeff96ea86ad97f28e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> NOTE: every time you do an `apt install ...` you need to add it to the dev container to make it stay permanently

I also recommend you add these extensions to your dev container in `devcontainer.json`

```json
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "VisualStudioExptTeam.vscodeintellicode",
        "twxs.cmake",
        "zchrissirhcz.cmake-highlight",
        "Ranch-Hand-Robotics.urdf-editor"
      ]
    }
  }
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=f6ca21a824a4cc837637ed346ff11853f5102822c44663def516e9a5b25c65a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% /tab %}}
{{% tab tabName="Linux" %}}

Install these packages (if you are not running the dev container setup)

```bash
sudo apt install ros-$ROS2_DISTRO-joint-state-publisher-gui
sudo apt install ros-$ROS2_DISTRO-xacro
```

{{% /tab %}}
{{< /tabs >}}

---

# Building your robot in URDF

make a folder in `mbot_pkg` called `description` and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=0ff9f7ea5103a5ba787a28c098a61c4fdb3566d24a26942248e7e6e3a4da8bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=a3b330ab9088d22a7e07378f08f2cd917ddee896cd9432d01e74b3560d7c54bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=e81e9540e7a5d220158158c21d4b0d21ae7f43e17509d241ed5eccade6f23fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">

  <!-- Define robot constants -->
  <xacro:property name="base_width" value="0.31"/>
  <xacro:property name="base_length" value="0.42"/>
  <xacro:property name="base_height" value="0.18"/>

  <xacro:property name="wheel_radius" value="0.10"/>
  <xacro:property name="wheel_width" value="0.04"/>
  <xacro:property name="wheel_ygap" value="0.025"/>
  <xacro:property name="wheel_zoff" value="0.05"/>
  <xacro:property name="wheel_xoff" value="0.12"/>

  <xacro:property name="caster_xoff" value="0.14"/>

	<!-- Define inertial property macros  -->
  <xacro:macro name="box_inertia" params="m w h d">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 ${pi/2}"/>
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (h*h + d*d)}" ixy="0.0" ixz="0.0" iyy="${(m/12) * (w*w + d*d)}" iyz="0.0" izz="${(m/12) * (w*w + h*h)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="cylinder_inertia" params="m r h">
    <inertial>
      <origin xyz="0 0 0" rpy="${pi/2} 0 0" />
      <mass value="${m}"/>
      <inertia ixx="${(m/12) * (3*r*r + h*h)}" ixy = "0" ixz = "0" iyy="${(m/12) * (3*r*r + h*h)}" iyz = "0" izz="${(m/2) * (r*r)}"/>
    </inertial>
  </xacro:macro>

  <xacro:macro name="sphere_inertia" params="m r">
    <inertial>
      <mass value="${m}"/>
      <inertia ixx="${(2/5) * m * (r*r)}" ixy="0.0" ixz="0.0" iyy="${(2/5) * m * (r*r)}" iyz="0.0" izz="${(2/5) * m * (r*r)}"/>
    </inertial>
  </xacro:macro>


  <!-- Robot Base -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

    <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>


  <!-- Wheels -->
  <xacro:macro name="wheel" params="prefix x_reflect y_reflect">
    <link name="${prefix}_link">
      <visual>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
            <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
        <material name="Gray">
          <color rgba="0.5 0.5 0.5 1.0"/>
        </material>
      </visual>
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>

      <xacro:cylinder_inertia m="0.5" r="${wheel_radius}" h="${wheel_width}"/>
    </link>

    <joint name="${prefix}_joint" type="continuous">
      <parent link="base_link"/>
      <child link="${prefix}_link"/>
      <origin xyz="${x_reflect*wheel_xoff} ${y_reflect*(base_width/2+wheel_ygap)} ${-wheel_zoff}" rpy="0 0 0"/>
      <axis xyz="0 1 0"/>
    </joint>
  </xacro:macro>

  <xacro:wheel prefix="drivewhl_l" x_reflect="-1" y_reflect="1" />
  <xacro:wheel prefix="drivewhl_r" x_reflect="-1" y_reflect="-1" />

    <!-- Caster Wheel -->
  <link name="front_caster">
    <visual>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
      <material name="Cyan">
        <color rgba="0 1.0 1.0 1.0"/>
      </material>
    </visual>
    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <sphere radius="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
      </geometry>
    </collision>

  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=e3523ca097d7e7296108b6f7ee5ace116cb4c9281ca40c61cc2013bbb8c8935e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

{{< /table >}}

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=7268ab399bc4ddc2cb60da93cff2a3f771f67d4d656ce067ca7cd332f8e5bc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=6094b17c2b780f60ed6041dd8adf5f5b0bd5276d271c7dd3d0faa52b53c40b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CFXKZJL%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR3Xm8%2Fh3dVQNpQP%2Fka%2F6oYh5wX1sr6r9nEQheS4IsFAiB6oek%2Br%2BRgsLz5N%2Ba9ECD62genFbkMi%2B2Z9gnACDP7ByqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR6IvmppzoAdDLSdnKtwDOLSyRiTXKz3ORLAFUyjdBkPNwStN6%2Bl1ppIFF9nhMjUuiZI5FKYwcIO4BJiKoywjbAx%2F0aAV62l5sB3MOwVtYg1HsdNVA4cjrFq9chCqC6cjuMhnGQmMePA85Ly2xfEakLvB2uE2qGIhbe8t%2FubSh4FQbhwDidWiYFgTmINTTdZ877MzZf0LzVvU1Zgev9cg8Me7JVbPZ1eae3yV4KoYaL1yoRVMSLiBvr4rhMLmsmwWXhXeVt%2F7aQXV5nuAbpuLBUmF5Z5BSEiarzneyvkxhNCRhXjySiVBCk4MyFqpodvMfsw7%2FCrbrjQ8zvn%2FZe9TB600nN1j2%2ByPojZsQlttJosgl45y5u1ca9xzCqDzesXH7KAvbXj%2B5OKPOOfJCQWjPV7vUOS29VT5vlQffeV9rRM4%2Fxs%2FBcEiDO4%2BUW7CLxJVzq7FTSFhCo4oXJnh0%2BE7ntlvZOkw%2FLCKPXmqsNrcDJar%2FH0O1GjvyVYZm1P1zsI4q52Kl%2Bu60XJSbCXV811CHrE5vD2Rod0CEMvZmUpx84XtrutiauZ34micWMlAlKOZD7ED7oDISWeY8d4Qd3%2FCd9j%2BsXuRGREXRM4M6B1q9VMDfsh%2BG43mc1SbcNxx2hJpNvYsLcOGtcqj%2B7EwqN2kxAY6pgGXImKvIDMnNr9zALwXzgTu344kDyX7lo%2BmOsxbaY0qFThfoC4pU4RNvr8g3%2BcUI6fKbbalHJ3kaR3XM5rEwJUnV0VFS3Q%2BvHEJx0hcagm3cfuIHTSH4Yxe6UsNNDdF%2FNpUO2KKryufKVfkYbDA5HNUEBov3gOJJudE64Nz%2FTefN0cLnCLpi7eyHpmzi6Fgz3ifNJm72gHbOi7coUDf3cZ1QIavAXAF&X-Amz-Signature=324cd8ec9738f7f55c786acd038efdc896ff6ebc0daded02e22a8d2342daa46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=5e3f4965e545f7ab7020c863c6e616407dc09ae1a1bfe02839fea4964e9bbf11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=1ec5361ff5698a891144846e15675e0c3ffd9b22cd9da6fc729e64a054908b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

```python
import os
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument, ExecuteProcess, IncludeLaunchDescription
from launch.conditions import IfCondition, UnlessCondition
from launch.substitutions import Command, LaunchConfiguration
from launch_ros.actions import Node
from launch.launch_description_sources import PythonLaunchDescriptionSource
from ament_index_python.packages import get_package_share_directory
from ros_gz_bridge.actions import RosGzBridge
from ros_gz_sim.actions import GzServer
from launch_ros.substitutions import FindPackageShare


def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config

    robot_state_publisher_node = Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}]
    )
    joint_state_publisher_gui_node = Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
    )
    rviz_node = Node(
        package='rviz2',
        executable='rviz2',
        output='screen',
        arguments=['-d', default_rviz_config_path],
    )

    return LaunchDescription([
        joint_state_publisher_gui_node, # debugs urdf joints
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node # starts rviz
    ])
```

## Add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

package_name = 'mbot_pkg'

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)


setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
    ] + files,


...

```

**Build:**

{{% alert context="danger" %}}

## MAKE SURE YOUR RUN `colcon build` in `mbot_ws` folder!

```bash
colcon build --symlink-install
```

{{% /alert %}}

## Running

To run the code we just need to do:

```bash
ros2 launch mbot_pkg display.launch.py
```

{{% alert context="warning" %}}

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=5207579b305c67f445fe853df1cbd60957b7bd079a417c6e71ed4f86c069ea82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=9dc7d63f12808f522430aa756ca4cb95de3b4e0c03ae7a071cfa1d0a464302df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=dca94baf0ba647afe9a87bae3c6f187f77d3ea49e149bd95c52618551fa86f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS6TWSED%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd%2BTrXOA6yiSSbZnr0z9FW7KsHEaqrOZeV67fJJSIiLQIgVI2vYpgv3KvC1Nd3zc4ahCwa0VlIT%2BdWmTF73CIBMI0qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqA%2FKXi0Pkx2xo7ZyrcA13I1htF37GtzrlqWhmoeyrEEK1klushWpIP47YkF3yHflLgWG9glV0Vo7774vo1cZSHYEFXnV49xdj4ViXBVzY10YvWo7FM3oBIA3i5z2TLt%2B72l9N2w72q6fc5X0yrY8%2Bl7F3DAvthy1pXNykFAdRmojh8zj5y0yZqwL496X4DGjZxyd%2BjNnM4R7ardnKeYRipzxIzM8hFrMi18ElGa%2FvvejSBIXk6M%2FYzAbSRTmCA76o1HrodQA9kW3zhwmCE7BfjSN1CQ5LNOBvzH2qCaFMrh3FVBudVL2M8lHzESkhtBvskspJ9hUnLKIdQeVE24gqlVO8upk6RHnjB3HsJBA6QTXavBK7Ck93O8CJEF20eoHfa7ZK9Bb0yIyEF5KF5H1udIJX5J1mLIaQHKWGF2gjodxBQAdffscwtNfcAlitc8xS6UGV7FZeup4GaCXFc9OUKqUlAktpBkXOyjIefDTQbJkls8k1cmSqxSu9ZPKudxBDi%2FRvn8c9s%2FW%2F4ra4%2F3HiYGaaCoyPnId6Myr5r7YaQDs%2FmWwUh5xHf68o%2F8jFKyt5lM5uMFwohFcQvnPJkDBWAUAIYJ%2FULcFhAy5PnOtzZSeJrkit7cypP4BQQHyQObBX1ajW2CvHOEb2bMKrdpMQGOqUBxKQ1UyC3pgV%2Fn7HhkuirGZMMwHXO18TOs5SDalBIbFeQEhhGYBAZQjX4gwzuC0N3fjyVAbfVkDBL5aTqkrwzN9Tv2Cj12l%2BxqrrT8d4Qu5%2BKmkZib8cyHXBsauYU95W0%2FLzRZJO%2BvL3Q9Fx%2Bfd15mDRQVDbmxaY%2FpdGwXq77uhUAJtYKQr%2Fanmqgz8s1SnyEHplinZrs%2Fdrfyb6gskOMxeEIXDZT&X-Amz-Signature=25d245b2d433b466078d48c7cd0d35b7b1d707aa825ed489c2aee6a99ecb2468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
