---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=31dbd3c2c7133597e2ff9f9a79dd7a33c25203b165adf0020c31f4ae1730088c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=155349f5d6745d49dcb6d7684c8f1203dfba1262445085374763d70234e9eaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=43f689e4751a56e6bd8a5dffbe343ab3f81cc2effae332c449085a175e227429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=7e2a13f24fc7cb9d1eac9a45be41af87de10130f8ba2c02ef7508f9856bbccfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=64d363a19a91a7596c8b765e8ea81237181f9527e886f4e3a8cf01517965bce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=dc842d9b74b57c228bb6d33acd55d86c52a043ba4008837170518d532baa84ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=054214de8d4806ff23b011019096c1b1b76ac7b29b3c1bb1371f8471032e30c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=402c490ed2c9e0478a56364a062b932254a33aa4cf63bedab2494ad64f16d389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=670245989a121340e50bf3ddb8242165016e2033029988f991d3237c7c3eb182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=85f102de47d096d45fe2883a1f80ea7b4a20457840486638791d5795468e06ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZFNBS3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE4KfftGsre4kBow7HVcK2PEJH7o6DAyI3aOCpm2MwRwIgPkvlm5PCsOxXzglUjSClV2ulOXrQNtGzQIVHLIv8X1UqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0kJI1p1QjS6lTHBSrcA9u7PEc5eMElV84HIWUhzL7TKYlLzFzLJ4%2BZChgCAHuqlDiuh1U%2BE%2BrOhKwU16xIMA9OdGC6oZJN1g5WEYkTbYqelcM6Q2WGklxdcoCza6BjDqtDQvYFHW0i4%2FYlZikid%2BoDxhHe9Kajquk7ykhgLmyEwSXfbhWBQmccHn10Ye9oyaDgFRCaS413lwKAF%2FeJp6gRWe%2Bvzg4B6Bn%2BfWItFc%2BaI4M58ykOH4%2Fllv2tLxvmQ89yb8SQ94lOxOLIdpxz2jECfI4RYuRTMIwY0vmtO9fC1Gl7SDoh23qVoJy1Eg0rWPDBRKsNBoVcC3NQDm0skm76Mx8o5TNsQMg2ViZxLhArVZLUh6RdojLkO1eHYOFX%2BdNhYw3Gl8ZjP%2FIkO2SaJhXDnuWl%2FGoZQ0XLFUfg7e0%2B09PyTxa9YFf7YoD900X5tKKqs8IvHgrJP1SQrTf4u3TcxJvxWDlxFiZfSLgSEZRKlv5biFd7Scni7BIwE1RsfGbfEX8wUUmrrclfgTdQsTKCRa5hsiZ1%2B1DP7TZKUNMVPpLDt%2FmkFgxcvur52tCXR1UBqu6DDl8pxHvNw8j3WRzt55H73ZW9zYeucgYiwbxOVZtrEiRRrcVxAj13glRU11jHsYM%2FDMr9GjfBMJWe5cQGOqUB%2FeKMu53k7hgwn18jb4e%2BttnJ8%2BbycqYpe1DRVNg%2BuOiDw82sz1KXTSUicaxPbJ2GbLhlKg4tLilwSt1BgFqKMmX%2Bc1%2BlbHUTN7S1vflt6duJz89wnHlwOALVtiYygVtzHKhx%2F%2FwhqLrSL79cNL1Ig4M4CUR8hhiO%2BzvcufpOyj%2FVCj6cGRJ87eaL%2BjPOwO4n%2F9Ws2MsPGCgH7z9Rfw7PXnO48Iwk&X-Amz-Signature=6b3a0646e29093815548132303936926051bbc88b6123aac36f54e42372ad499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

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


</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYARFQ2M%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUmCJw8LNyJ4FWunq4VCS7pJXwcMKWXftaclYqYGBUQAiEArT%2FG711S9ISKgTzXdiww3hcq%2F6CSBeliSIK3hyWEUtoqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdcVmGcomp1oEtHcCrcA9%2B76FHBPHi1gYX%2FxPj%2FY4RgtuSJKHz2DdgW8tkcGWRa42VH0nNk8PtVjdVsstadqaaDAQuBoQb4QvhHFp4hVmfwsdRitSJvNkQc%2FVfFy5DfxsEWHRcw0AttrldHTAH6UY0NfUebdEuVDy9H55tIIB5V%2BF2GKaLjLcifeb%2Fp2CP9Y4aLGfFU2BRDRQt3lKoV6B0GvOj3HYtBNFLi1Fujp9m19R2fwIrugWDRG2Gx96INrtl2m28DGDOPXx8RdNyJTSoA%2F%2FpRLYrvmM4a513oMuHuw6fUCNwFyPwCUrLXbzkdlOH8umbIlLT9ufTfEuDB8VcbJGaP8fWvvN1ak4w0yebKJuD8D9ggl32WeGo%2B4GUM5SqVVOsi0YTtVHdaUVXIT%2BzNahnEmq1byH08x62HsyrTwzb8MPkmdeQAUwE6VvKKjy0XUlV0yd3HCb%2BGwxBm9LdQ74oPEejFgrfxoA25AuDkW6zev8ohOnYy7I8pqU30iCgnHi6mLtdPLh3k8QMQuCvipeQwiXOLxww0urOvrVWUjIbCa9mdlKNGYuBQJkJPuEdJqoSnG%2Bpe2Zo9Fv7WEqs1Y99ofrCknyxeX9NIa1lS5%2BKxDl34Lvr8v%2F7CQiThYbB%2Fz2wntroyLnJ7MMqd5cQGOqUBVx7rsy5o2AF2JJ67ThT%2Fy%2FXSqOqPRuiY2VsZbrTGOQltG5rBBCEu4GFY7J%2FmqSHzisi8%2B0WPbZpVy6wU37%2BJ%2B3yevlrCFK0IUDQtF788o45qSQ3fPVmZZCv2xGtQYXLqGG2PgRAxoi3fXFyRKgM3Bn3Vi1JAONQRkfmgbsNTZr8yY5zPYddlUTYBX%2BjxdPNcqIUK2nZwDaZXsHIVA9keqVIKTMyw&X-Amz-Signature=78a35b8b881b83216eed5da57376e50a6d8ac6402c78074b0a08e94a0a6e5770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
    
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NJXO2EH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWDHLkFEmNu35UfoQ7cHf%2FsrOX7V8htEi8PbDXSLh6OAIgRG4SgBvi4g1Y%2Fd5%2BeRau77ysq1T2aAhfZWj50RdS9loqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMCVDRW3Y9DOBw7q6CrcAzZD5spIIeuVPjAn3xQoAir98ValYlIL6jrWn0ARdtHWhmHu6osBgRzOqvocr3rLtDqG5OgjI1P9ZzNvFs948WUVAk6l0YKmOxlQBzfmV%2BQN1batp7p%2Fstin32zmp%2BMeLH7r8667jZ4Lvzg01UlZqpVzGsz012YRql9vc085ZWV0W4mheb%2BaGhX6qH%2Bca%2F1M0XR0CPso9EH6WOCCaMvnCfuUWwCHWfvWgcS4GGn0zYFmSEZ%2FQcJDRbFJ%2FU6L2XlYi7ix5MHwUvk4oVS4yu8uAknhI7EbKk8U9TeADUNrtYrGlmKp8HtQRZ5Ilg9Pu5O6kMhpxqBy0QZX4Jh6n%2FJ2erochD2H%2F67zi0vlMUjkRwzEoafAutCmCZ7s5yoNbUk2CaPCM7tDhObW%2BkcKA23RprzO4k9Vva0%2FUDP31Si1kBuHjUKyhtWW0FDD2q3CGW%2BGmpty8DGiDnuKczJbdhbI8050jQOVv81wn2iuGe%2F79mEqjKeVEln2YBbrxNrWAcF1n38WIxdUc4nOUyPkpviN%2FGbGsqp%2FmEzbSxIFOum5OWxKJ04ED4SVIesWFFfgNoECp3LvjqG24Laq4gtfcEafKC%2FXuADecEQVgKX%2FlLi%2BfcKxNFscgsfXHYT6WvFzMKOd5cQGOqUBTu7%2BxGmsXxGMHql3whYEUf7PXRz0hT%2FBaGw9v4MFeEgxJ37C6YTiQS4EcNvLuWaaBsiv8a%2BwG4mHK5Uk8tNXqg31E4x1QzHqHl3i2ljiTnXR5rk9lBsO0tzLfdpPJ%2F%2BCx9aDdb0lVAjxEx0u%2BriduiGw01Ik%2BLYDK1OtgNzkYBPyPI%2FEwAWqg6ORwjyehYFWjV6GIinyLFOXk0A0hzd25ptQ2ROq&X-Amz-Signature=98a3f327a0d43928c1020c7d45446e590a830ec84b135709c9a7cf2621c1e7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=fddf01dc15f97e3c3a434b7eb344ba9fef80361177ccb783ed856a7165561c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
  <!-- Robot Footprint -->
  <link name="base_footprint"/>

  <joint name="base_joint" type="fixed">
    <parent link="base_link"/>
    <child link="base_footprint"/>
    <origin xyz="0.0 0.0 ${-(wheel_radius+wheel_zoff)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCTHPWHG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG92F7FN%2FvMcary9nT7qokHwXzPly64%2B1Egx1cDP7UoDAiAoPb2inuzbomX4NLuHjX4tD90sJo%2B2d5b%2Fh0qv9HU61CqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTy3bpHrdmHyZZiHgKtwDRmr9oJ1jT5y7EJ7LNWP4Jl1wcIbfJqj3q1GaTZdw954Tgt8X75MQjbdT6T7xrHGGtizJDSDg9ux1yjl%2Bs8I6ord8Bwp7AC02%2BkkDqiv4VDN8S9dttpW6oqxIMSHBm%2FWaxzsKi2qcAMo9Tyqj6RlKbhDNAokqcv3krF3Y5MGCcTVBaxMrSoYGYCjNRtzoehPrDTgai4oFaM%2BjLgSt5x%2FeZLwJTrB%2FVEcQW9e9Fq8pWghbrwK%2FqGV1y%2B%2FBZIkqAkT%2FVwdN52vc9xkHrgg7%2FrQp2rljvYhrHYTY3Cdh03AZFQ29zB8AeBrLRSSlo%2FrqjHO0RprjBWLnjPvRQ2MZRZQ4NlyhcOUEp%2Bc3p%2B0rH%2Fx7AXBA%2FX%2BFlK8CdQibXVr719KqmnSuYxq0xgieVpmaFKRFLNXuTyWl38sp%2FfrvUTL40qnu2mMx5alktzlHdxRB%2BMtsX0numJr9nZ0Vj4%2FlYFza3KevUrn9LgQEdZM3QUpBVe9t9HN3mneDDx5UlnWKqFYCPT1cv2pEM6%2Fe5mzVRtkp1OpnsO4ZFfzHwXtQ3a1CfVQ%2FHa29YnGx3jRFmVyYjGrMeN8bJm40Lw%2BYteX5iYQ7LT3lu5nKvjwKCh6hEGpTnjSpy%2FOrLjy9Jc5sWGswr57lxAY6pgH6L31D1kPRTiCzz3VDX9neVptRr9vzXkj6sskIDAz68LvzST%2FPDSqzIeu3uqxZaSvm6xEdc2SRrqp%2BpiiGYYKTyaox7tHZ334%2Fh6AnsL9Xtk9UkgX98KwU4MSBMMd1vkMqm6wKUFvgw5XpdZNKmoYm08czJJH9kp%2B2x5VZ%2FUslYkKKjI4j%2FbJfD%2BRRmUMsrDDOE5y7IsasjEIwf68dbb1sCZTPpF58&X-Amz-Signature=007596eddbdfb28e1cbcce28bd201336791edf3f4aa170dd52d3c8a4f46b74f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=b6277e360a56781f41a9d88bee360110b529e6ea2e144a3f86e98bccc7d2360f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663DTK5WW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWpF27qG7lQUj3WofzOIiq0LL9vMh6TjXjtfOVkvCBcAiEAoIyT5PWOUeZpR%2F5pJbTTSLwfIpz%2B9z5h8Eg74OBgZNsqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSslar6gscvKEPUHircAzZBRCo2ZzQnj6FazFKe32LtT7vlp183cT%2FXmM1V4BO0fohHXM0L%2BDaJPfDgiL%2BzbDterhotBzPHx8Rwg%2B9yM8Z45oQt23pIAhXNFGkxSK%2BAOSDNdMerZu72HBgtd9yECOgGXP9PLPhIGLfNTGBvefCQrxrN%2Fdo4WJWAaNpwgugPqEoRKXw9jKtp5kGv43jkY%2BTo4rYiULhe7je3PV%2BOjEJJEZm2bqRTiPivrQpXoJwblz6epduqf9%2BYkE9Q5W5jl%2FOjdfxA%2BU1Xmc%2FEbt7itdv1%2FgjwbHvnakrSGCHGZHxK4wbFQoP3vquoJUZjg9576vv4F%2FL%2FRacUz5kOr0ZH2czYs4DBBpyeySLB66A88HpcilG%2BgJ4%2BhwlWbNkEFXE4mN4kdYnXYpQNPjkTCi%2B9AwfjYPPX1TAgbIegzb1DSaAEVb4Hn%2BNYGyJUE2FXXJNzKkNnJP0Jc3JCZlOD16ngn9C%2BmwvpFJc3Z5JAGu7s7sPUvUc3S%2F7%2FpQ9NvAhoWE%2BogldXjW30r3ZWDEqRbox48hiuYBqCfTTh%2BlMB%2F4GKa2vrYT2urU7WkNGiQAEMEWXI2HUGgU9YnfNK2A98q15k8Oy8ID0snv1Fi7Cf3M%2Bt2G%2Fn4TsmvWNcXoSoKFroMK2e5cQGOqUBk5EM%2Bu%2BDO2Ha39ANChwXWQjbVEZz5U0QMR3vhU5YGBQ2ruI3NrGaLWeqoQrbdAXKy7sjDd5OxgINJ0KOTnVci59CiHrbVW0uzSSGX5M7LdCfHD2PSctkK3sF4aYDTwTe5DiVaR22R3uYU66GF3hz8W72wqbbb6WlWdUvg19eGWCFe8VORnvD1ecDzl1LYILwBqNbAqlsW3dw%2BjJ6T95oJbkUjYl4&X-Amz-Signature=e0bfa1c0fe2854369ccc782dc425e86cf17a0c0eaf24327f3fde866893342b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=cb2e483fcbcec7aa9915d1940c61353d96103199de1c2c0f2527b7292bb24ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEETKCB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAPYhEeJkIvW7AaqTV5xDZRlVTczilkwLsfOrlqvuTSkAiBGqc0yWXd8QGdK8gZM%2FV5bwDX6OTtdxSY8zALhgcRCeCqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ33e67SPkt5ktCwSKtwD%2BWPIPAiI%2FK7Ps6w5VAsWLDPyYghuDOCikk7rA9%2B7NWL8Nisxi0R87e7P2vaYInD5SkB6CVI55XbWhxi53UX87j3%2BmP7m%2FlJCG2FovIE5pWiy8A9SXsJrMm3wukxGcJnE7Mo699jxqUjCVLxti5aPu6sdULQu30D23hkLg31veitAscTp8Zby3knHS4JQkAACnuh9LfQUaPYLTMTQLrUSVyU%2BtEL6syJBiApGrWZ3unyl0CjmOb5RjNgYCcCEqWoO%2B%2BscnX8BIm1wynpjoql5QSlyXdNXJS%2Bs7wwqDRolJV%2BtCo6lbGPAKdD2AeGigeyREjb%2FYHfq4yJtg8Ku3ouy1c9ErFStAF29CiVUpMVZVIXP3GdXI7MT0FAEigHrJzVbB0VpvcLegdbkhHBUw5Rpz3z%2FnSCNh77zocZEnYLrIdaSQug6Ml9sA2lmPYi1GFUJYZiuLRI3Qew25KbPSBeNlaKePhaWJ11p32iuo9yb0K841Po1%2FY2MkUw87rPyZ4HepxUqGEm36AgqeIDrdLA2I6sv2EuoRFmhMpA7oD9oIOm%2BOylg2%2BmbsfbFPAp2UrtlzM%2BLCg3zWAOxWDO3mos7lm7UIQY0AbX%2FnLBARCetz9%2BkZ5NVCbdyY1VjNGAwsZ3lxAY6pgEosBkIz9lN%2BGXBhfvRZVtR3A1RHQj44MGlXeCv9qxWw1IgOQoN72KrNbgl%2FWS2qW7DOBFRYg5wembaaG%2B2jshJYa1nnkmIESRSIHsHk%2FpV8UGZ52uOhSJ63DGy3OGbjn%2BxZl00zHr8fn0H%2FJNiqDkhG7jf0%2FS%2BvSqTe3VjdtzPhkK3IW3Xg8vrCN3KiCbUilbsC7ioPb1hpI1MqLPzjCCXTuou%2BtIN&X-Amz-Signature=9a6a2a544b1b52f1c41cdf3045ea813734b4874d101a2dfc11d1efde5f19d918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=7d1a45d0b0c74a956692678941c5bb3190ef996b60f6e47c3de72b8cafe8e4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

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
  </link>

  <joint name="caster_joint" type="fixed">
    <parent link="base_link"/>
    <child link="front_caster"/>
    <origin xyz="${caster_xoff} 0.0 ${-(base_height/2)}" rpy="0 0 0"/>
  </joint>

</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T2LFTBH%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxPH6vaAUMt1HWWG7ii1V6grk9vaqsYBIfeBeBp8z3wgIhAK%2BolcVo16T6v%2FY%2F9QlDDomjiWFPJsF5OaPQ8A0%2Be4GtKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSjhyrRUP0xAIJs3sq3ANhPxhJaVCRZn3AIgFfgzXKhk8HN4u%2BxGB1l7iGrZD84pV9%2FYl4JA6zmdn129PD8UOrTyB0VdrhucdLQOb59gmxZq6aii8HDsnvTy53hgRyxx2SsFmh%2FsoXOa9TN5IoBZhafqWh3r25lGO2ACy7P9vQR6mNKPVdxHLB6ngR0J6JZyjeFULIrruLvZICYlIH5DKKrPBt7OnRkeZYYwiONCs7k4hknfs8Nu9fJaO9o%2Byk4mkrM59ZJdRO8Oyx%2Fco5kLDUikLUGxepFnUddwWka2M657Av%2BYK5k1ifUvwEfIPaSWkhnsn87MYiDQIbgzYX8viC90xjR9HZl8g7IUh1cJXg0%2Bq9S2u82ETdSzG2nfe3yYlzec5u01lkJ8nAnZ4e2q1NvmaAOywLKkos3eZFobuOzC0RfUkbcPnxv14JA6Z9dZGSXGjRo8ITHYwRvjh8lZwNJuBCjo3snIEJT2RVnMtjNgW810aTy7oFoTgWnJD0POHn1YxhqEGzJVRB2MxDHOXJ58qu0%2FvB3qArn23bxh9x0Sxf7uW21NhdUcHwf3cUkCHQBwtzYxQRBs4ZKsAk4nGxXX9i%2Fmz%2BcE%2FFoJCou8QWM2h3OCc6ZlTA9lK8mvacNbF1DsGYWYWmaNP7IzD7neXEBjqkAUxzGV%2BZW3UvwCOvbHlsJq9oIx1fbFYs7%2BvBcGsXdecQ8GPXrZM8RM6D7z26XoLXVDes6hM4CpSzVcuPGBmNd7vP6jKKMb5yo2LDlAsnE60cFTV1P1xGAwNYVwueQa3Xw6gXuXYi2Ye1g2F8IyeFfZtIol0g%2BLtm2OLnyZQO7EetuEDXb1xtMxNMN8xdHXxGBc1aUZyJoAoJqnaVT4BLmMNp7JAl&X-Amz-Signature=6d3ee740f19a29338bbfd152acfe2087de54d2cfa5ac478cbf482e0b37027bd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5FRTWL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpyQmWjSXnv%2BK64mgHDAyK9VIR2du8ThX6%2BqcnTssTGwIgJ3Xq0XJY4F4zcaonytwhkFsW9foGzQEWShAr87luWukqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEjoxNQiyrH5JzFIzircA2pofonnPxqNFaD2F7jh%2F7RCEqlrVMuMEay%2BShCnrDErYigq%2FK6HHJ%2B4QCokQ9BDVscY7YOlc1VnSNBaaVRssJEISWTWvwUXId30OxD2tWWrw%2FMn240FgJWalpb7O03%2BrI%2Fa%2FwyrkZorJtEzI9f%2BY7da3y3zdXYvLLVtH0wwpiYrnfjePKPjDhHrKMr4iEbK%2BchWQt1JvwlxbQQxrOGIFqPzIW8e9YVH9cWpT7ofEYJvCBX%2BFp4aE5vkNCj1N%2B98QAZwVKOMFCc%2B5lx4JAbb4nBWs%2BN9XnVGAmnxamARzwHc0w7ZRk%2B%2FZbwxpQm1vThBfl6fTVsCX0BKKtQNYW5OTCV7QgG2scZ7n57fnpBJzmepc%2B2umc%2F2DIyH5Pyjy2uKxCO8KBj849C0ccRQEIt3weK0Vr06bEFMdFQdSRTBD2esxGCs9Dix%2F7acXeqDZgIEaPxa9sgzxS4rbIjN7sSzvVh9%2BKYfhYcw9ZAiM%2Bdu%2Fe9B3MM2uE8Ux2BxUwE7h5Mw0cE5YyBW%2FTxuHAqLHXEaFX9XaYjVpDgwXRzIWzEAMkMzfOef39Hv%2FAUoh%2BJKeRNV62tBr3vIQgFY%2BD4s1jDYG9%2FHmph1ffygNrM%2BKx2xQ4sevsU0zEFINdAMYE2bMIqe5cQGOqUBAe6O93ss9UROQJQ6M2XswDD%2FPdM57RgPbdnZoV3HKObPkfliyUURUVorFrfgGp1xtXayaivyPF06fAnmTYDK7gcHTuDw1II9blmDQO1ioL6E8ksagOOz0SZ%2FrNcIPaM59jkuiVaboXhRN42MSNQhge90Qtmf4gb1hpod0nYDBLMiy0KGSF6PAC08pOd5Cq4otRrHXZXY31YBbBookCfwnAlPoi9Y&X-Amz-Signature=c666e1199996650ba8e5dc2ed4e4789aa2df5e784b84535067f64f5b15f1ab0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
```

Same for our wheels:

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLDCQJFB%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxx98XYdZxa0weL%2BSQqaFBoWAcBbh0C1%2FHJZDzV93CBAiEAw07lDUaj%2Fb81z5EyB1gRWKBAW1QwKwn3SPYYhx0QeRwqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLL9b7HU72AdXqSjmCrcA8F0oJI52LPzcSboxPKHFZZj4ysSBFL6rJv1%2BORQhYgk3wnaokcQ2YPbPXPedaqnmfQYlTyUSJNgWIoRguKLHlRy6IhWrF5L7SRcHBLuuhE51aZ%2FEyBaQZPif23%2FSEVWwQog5gL5aBDIimo%2FHNoWjwqzUCUy5redg2ks4zfgf74Rq%2FlpEmfRf1chbOyztdbkctopNWdy3Jw9E7Ta4kOxXSg6pGrZzuO7FZx3vnfmdU3cmevPNtpzELz61m5yiNzs%2BoZbmtalXAnIE9NNqn9FLmzl8bp1zsD513t7SuM4LywIvCmkwGG2DkFmis5oyHPsGsz3F5RB%2FysgNdQsv6OCje8IAYEN22aIiXQfnBWFlidJgXQUpgeJcTm%2Fc1zW3eztl6oWYTeP3BD6hCJE7OCq%2BV4eJrfNFQ2rhQp20Z7Ra8rqK1J04Ff8l%2B4C5nENDG7ohv3euZE35nuSLAnPdQnS7RSN78jmwLeIqbmQ9xakZwTewIrJVoC5Y7QdD6PhzpWwm%2B8rFoRx7lI8oGT6h0LORch%2F9QR33sr6OobtQFDka2hF1ZJYeG1ZMbms%2Bjlg2yatgQnlEWFA8DYVoINW5aj%2FHqXU3lg6DhNp0RtCjkDgx8dOYbiwq3YW5VKVTyqaMIqe5cQGOqUBtuONoIfokk51%2BRc%2FNKnQNtlBksvyFEqqZ1KIdPvArsR9cdVLfkz0zOn77%2BsCkdClugYpnqHBCoBFK1l5MsFD1zXDpDTTU%2FaGlWBqRk2aIJUq05n0JH3UcJYLDAYR6gvBGXkCnZGC00dREEgRpcMtni2nAIhl8R39A3HMVF%2F1YwczNOjFRiqDzqa0bsktDc0s%2F1%2BOhoBbfOQXPMIjiZvY2FsPSsQs&X-Amz-Signature=ca41ac784a4072ee675c44d03bcb27466f44fd175ddf3c137056ed937543eca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CI6YUBX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDAoJZaQmkZp62bbD1uDUG7gJZ8xLqD6Mxpnl7GDMBGaQIfXXV6VLFimRVbBZmJbFfEfD2VLWFxZJA%2BQaTR%2FeR25SqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU3ZQeSr4RK0swiwcKtwDz4yusO8R2np%2FQpJRIGm1jaIBoSJkokMpfY3DvJe9NX5XggDu%2BXkXJV15EARA1kIrrAHGSsVc7AXWGHJmGQjVgpgYrow6Wv4E15hUfL0l%2FsjMEmcPFGXUzGe%2BuO5NCaTVbuRYFlo3AJKB3%2F8cQs9%2ByUF0MSD4DxbJieBvgrudR86Zkl%2FF8O4xCmuy09TrTb01KoMt3huXFBpAgc0CPr9uCeOQmzUQ%2BJ7seJdM6mNA3QxrcEGzhG7%2BWvKgrf2a1c%2F04gw%2B%2Bu%2BU7rE2B8RAF6sRrcsjx6k9itoBZPkFJR4GsNGGaMebTis64dFn3EVfTeQfJHZsKHWGCHBudFsAezVlIlaHhbttcGg%2Bpg3JRhTO3q1SNwk%2F%2FhWXU6ad%2FJOuC07EbmrcDkJTP310juX5Mbn7GUMM9WwpbvTm1mNst198E0nNHu7Vc7EIz3%2BvBjIk0xAw3eSj4L96ojOs%2BkjJuXBur459RGbVhNo7umwxGj65ftWt3eKPcZBeebvgtmqNxci9MCqyHi0MFC3MjFYOMAFKXAlRjfdEefZXr72G1h%2FpMxgCJVYAcVwN7xzp1J9IEo8JkRXSb2ugBfQm1ePZWNH99Wh8%2Bg12UmQ4X6nn%2B95GnPCu6k6TdWOPzuMQ4TAwhp3lxAY6pgELMQNQPjVY4JXbLXWc%2F3jBUSPGRTQsNrOOlHF7ZGQET8iTnMwxOK2GlV1MEq%2FAgwzjVm4S8f7U6I6JnxnePENVJhKa3b0d4dYMl6iHsF1rTCnj84l395JDLAyl5xLmm6H8aJdWBYKslWG95SBjrH%2B%2Bd4%2BYsAeE2m8aKfrUw1bIPhrWX%2FzCRZ%2B8MkemYNWgA20Iw3PVVjS24dpvy%2Fj%2FmHBYQ85Pv9ml&X-Amz-Signature=4e07772ba0fb1ca8f8bb8ca8369794d61c00a3296f33a2505055e9ed8a310a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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

    <xacro:sphere_inertia m="0.5" r="${(wheel_radius+wheel_zoff-(base_height/2))}"/>
  </link>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2BDDPM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMUYrCNKCSBVtOftwBwO7GPCZKVwyarFAlbq9v1Um%2BAAIgGNvstBo9UKlqdcJ%2FJ48vm9nxGCU03j8i6o10%2BsZnFwcqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFieekK2ZSmkQBzzTSrcA8FZ0lsaCHyYeaCFDI1EBV9y%2BfHR%2BbukfOygxS2Jq2vLpayiWj%2Fg%2BpJocmCBnDXfDPfKqjmGp5TnrZ7Ps1H0dK3VAh%2FxNPsmLXoNs4KhjTSfa0c9hCSnll0WcfNf0cJ8YHZTJYEdx6uZv819RAUbUwM5zqj%2BlhPxzZQqftBZVr3xVNV2pTOYsc6HvFOhrurBVTUO%2BpK7ADye2ZYTiumIeBu4BcdzNmM1oTJ4ws%2FOoqs5zNg4GB7kVWfsfrum52LmB4Z0J5XY6iM3tDnuyc3Ae8pTkTjr2tBxEAj3XhMmvxFal3yIE%2FY7BslSsTkxMiuCXx%2B7XRHoHCnnrnQBMU0OS8JZXEcax31F0GuQUZjh2t%2BeVIW8bedpbTgVzmt6%2BEcOTthXFvsCJ%2BY2aobxMgei9sYeEXDiXuEBNMb8GtNhZd9f72rjUsA2frLqWR9yzpibWZW9qeO2Jb8yGqVVvVvrAtsKjZCkAkNLJoYhyPX5uwGcWALO81K6iInd4dEb59VrSWwj5diOXl2y6CSTqAiOuM1lOZ5ihfQAVcFuqQfW5P3rDTc8hrwQ29FcbDSI5b%2BoYdy1A0FTvHddmIgRYoKtF2xD2bfJ6DnZ6rNholpniS%2B%2FE6ateseSaj1if0aLMKye5cQGOqUBbNG9iNqgAjBbdGd1unKJxNnwa41nyffXqzYxauw23hHwWd9SblHUgijrqBusu%2Bp%2BwDDURbc0CN4hYR881JFa4zvdSBMwCThgRM06rwwvA0VU4IXdhbYUXLZEHQ%2F%2FgV39mS%2BCbc1LlHYeN%2BV4DZP7t4Wg4xLC34xOCVcRIAyVX0v1dr4rgwgYEMsGdHqRidFYU7K8uJc9yZ2jUCZoMbo0oW9qugKW&X-Amz-Signature=eada309c1154bd5b2cf6e3d7f2752e42e9533788a63f56700de6fc868a3d9641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=258c45e3eb25605455c93fab8f2954846badc70a294586c3a50b63d62f4d8bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
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
  <link name="base_footprint">
    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
  </link>

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
  </details>

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKCDVOL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGlSTJ7yo4N62mDyEXNXD8eIZf2Y9JaEOQrwJiJEAK3tAiBAYoSDbwAZ1dNbdU%2BxM5cARLbK3mll%2BGJfevFBPEpTzyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSKPc%2FwJNgOz384Q6KtwDXtgAVdMPYnISEU9dPlUrVS2ETG4lT%2FBfSnYtO0uVdqVhZOsplJjj3aojAAXGQlYw6qNRosYBoSHU554lJVqJj3evlBEqdmRj%2F33QPPVchiXP4kEB4o9WC7SR8%2BIhNNqcWeaVK%2FGw2yyS3V6XG8rz2w56ZqbpGpIU0ccRhtGFW%2F%2F%2F7SjUUIdmVvGeI%2BFMip9qEuBapGFzcZYl12%2BRYbjk8I6lsq%2BUmK7G6kprN8OehR3lVALBt8tAYGFO6%2Btr17ZO1rpyXgt71ty1Ze3IjqLAK7T99aXaXq2ay%2B%2Byn%2FOXH5Gq5eTfEXU1rTN%2Fw4yVMdZCoGvqcoZKoP5oOKWe%2Fua5srDOAu5c1kNpYXSOkZXJViwN1AlL1WtJtxSVv0fN%2BF02S8NaxwYQRz7mOViIAMwihN0YRtmYO0EcokQgKbN0LJy3k7os6eiWA6mTipxx30Cq0t%2B7sozuQRhu0xhIGOYV3iOr10D5wMOtWdkNR2yL4jDNiQ8QFZ8USNoDOevPVk%2B2u6g62PUW6mhN%2FGoZQfEr46m4F94QAUVZkxz7POKiGQX88N6pWoIrEjZ5HYwiwpJM9TsfIy%2FDIsemR30PlsLdbUvfyPQYjPc7XrZilUEfsG%2FbdyCgW1kb2LnLM78wzZ3lxAY6pgGw66v7WrEL%2FQjR59bubODV8%2FfZ2pQrRdbVNr%2BAuGRTALIwQOk5%2FIaTQ4PfZLBENL0zGMULxlYkZvERy0cvpRYQuy3iwNINOVvUzW4NAS65VHgEEjGBSs9huxFB126t1bRMJiPizHIZ3tu%2BVRulhiIpLcnkOZ2KE4m8TNjursy59yUKXBgy0tKQ8QRq4vGdLbUAGYPKqZZvnsP24bjt7bGJfK1QJQ5x&X-Amz-Signature=1c1bb82f184669836b40bb58ee3c68faed42a83821afaa04e537c9daa76359df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=268c92056528da55880681918b384e0dc5592693ffa71c321b5d5af3467e69b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=c91d75f4e678360046f8d21fc5423a6a2cf96edc376c0a15744ea99d86c2d0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=e79e0f648a5bba31d093ca89baf6597924ac3bda508e613b994377920c54b2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=89f4b6c4eb1adf4fb4411199323d8e81d2b4f2c78ee9fd4d838332c55fe06c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=2e242953b7ae63388396a6cc6016682529935b36eb4eca8e49a1b2daf0c947e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=ba175aea96e4fc59a5d617f22559eab0e5e1264c8f8dc3b8fb5558ec223628e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=e79e0f648a5bba31d093ca89baf6597924ac3bda508e613b994377920c54b2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
  </details>

This should do the same thing as running the three terminals from above

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

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=8b9f87988e9195863e6dc8558a8a63061fd82a78858c2f6c28c4c2ae45169c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=b96b0139e31b582140cc559dd6306ed86182a42cbdc073625f7db678e03e12a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QHHAQP%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRoYPHQNjTAQvIT7MLsEhkMSGcZOJIpdtQTNXQ8QRkbwIgWbkJA9qiQbg8uFl%2FuQPEQ%2BGE5f3yUy0Rc1fw%2BG96ocMqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPitrVELYm1kLfiruyrcA6ieHRZbuGGXZkmEDgQ1T0vnM1Ljt%2FmG8tAM8fmul%2BAO7qR7YnF1xy%2F9IodUFs5cKsgNDqqFHV35W2xs4raeuxT1wD64kA8vlfE7ZJCQ2o8d0rPkX8xSQSb8nf0SlXcmQPbEEnMcLaKyFHf5NwEh9YRJ98RUc0xbgce10jnsMI9lW0hX94qEOgoDS%2FUQm%2BN4vYbhURuo4Xht%2FNbjkXQG8zVVaDrZpON5oj5u1ev8frutL2QE8L6PE2czTL%2FrA7xZIFhdJXusp99tNCsTTDN0gz51unr7FE%2B8%2FO%2FIrtuck6n8kXomITWARq0cLpeW0cpb%2BjdmdJC0dBYTr%2BN4oG3rXcERtjBXGub0%2BgNChKU2WNdBCp26mb1f3PF%2BPn0jse%2BvPv1q5qrjxA89I8beCMb%2Fu%2BaAMOBydg%2B4AA56NNjvenmFQx%2BmIAy6EKrAVFqSmKlXrqQX1EWvZGhOtp7PWyKMiGqTOQnUpgWzf4s9rWck11Mtst%2B%2FEA9QlHRML9TBONiwrygbZuZYrcfEBwbafWHpESZhwqH9GB%2Bi7K422BF7j2erb73BrwnMzUWAd8aTqP0IQq%2FUMwr4YT9dHvc6hhGe126AXqCCULNZ0oimXFl7ch4CIHPhLuhhn6NvZGWGMIed5cQGOqUBvBqTiSNPic5o1Sk2TS1NW2Edm5y3fF7nGx80z%2FOq0kHWMvXufpLqBjGjeuqNPabgCMoVHmzxBf%2F0ueZdaQ0NbERNkN7yMudEnQpCIcZ56UNtogjMfiCej1Sl6kIf9Q7q%2F2U7Sb2MezahKqq43bby%2FPIAwXk0fjKLuJzFQ63KQuxpIbd9gFei1orYOSz0d3CUdOSRxz%2FET2e%2FW%2B9Q0EeGIQUs3LkG&X-Amz-Signature=b7ee1647a249ec3747b41ba387ab62c65f2302f57df2251ddb9776128ce85e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
