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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=00f4db9c76c6079ab4089f4fbc72b07dbc1ac1e94ac5eb340c9671d62deb4320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=39f2b6f7f3bbaa2afad4b956cf5015765117472efaf14a83cc6ebfbd0a3485b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=dbf551f1bb5cab6d6eabf50ea62a3537be3c88145b24cb9a2ffcd9ea09344674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=1bdcd65814cdfd566854e7eafe1a18796ba2e3a55ee8f25b21a9446919f5e0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=95f7f46c9680e5cc76556f4d52f429a674fd47fe5183e6f573deb2501390d555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=239f5cf01a228ee2e30391692b9a06e801084c37e07d9521f71791c0a7215677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=a1f6242f20ec2799d12103279d05a021f4b4c373c9306e449497f3aa46e88f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=3b9ec11f14d5460d332aa8427deddd89bbabed69325175f0cfde020f780629f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=ac03df8ddf339ebe74ffbb37881879e819d4aaf88848d4dec977aa3bb8b8e4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=f3da2412f8180bcf493cce188c34171ad68ba9a9556524bf339b78ecbc58e7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SMW6F4Y%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtO6mIuOda4AJ77KPdK8tujFohfKgvQsUW%2F0wtMQoNYAiAlUU%2F7FMFYLo1aahwOFHFItEPjDgdi9C%2FiuNDg%2Bs2t3Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMUaucAOBYzMFPWbxaKtwDDirsTCGN8xvJxrFUtzGGU1DiUYsLzErqV81%2BUJ%2B7etyChRnUw2CBTWF0%2Fg8MgTa839TctL5A60IaLSOn64XJbhWYffQGgmkJbNSjhSjWMGLLio4YfZvs7jYxG0f7bziTtuLC4j094sJs8vAavd3RXvmdzABlr9qGs1e1AeDmsMgrSgW%2BwPlvs28x0OzPYQuDBTgAYuODNoIgK412qO7fafcLHR2LiKIg1julFMsvd7Wmw9jKPdiwa%2BW%2B7H89Bq%2FHVbDnPG69UjZGlQW6T1Tys0TNxcBMC27Z1COVCfcOtQ3gqkBQrcGUarceGgGnhVJmJTlV9kJrmIws7jwL8ANRpn%2FtqXDbyEFCTkKTLWUuw%2BSzK15pSSHFZ2w3eM%2FRJUMzNpgMO3a04brSBNk3vJLlGUDUT3LprKV2IPT2IStfPUk2cTmvMxRLMrX3mEMfEOXPdiA1bn2H1ILgqKDNBrLDMxIAAJOyWVAxTnuqv%2FUhKzwAvLaPd9lGPmdhVGmfLt6PJUGhjpnyAnyhPLTAEtOsI9g2QNm9NLoEYx4uyrxVtMbzdZ%2FJyDEyoQj8SBm3IonzVQy%2BM7U0nllKoRWAHerft0EcDT%2Ba9dBYSLH7Ev42%2Brqj1jdknwYXYwkX6pQwip65xAY6pgFaeC1dZ991qhdEVQnVxFIhTPGHUp6UgcPnMkji5ioYeAmabgNvAcyARVeSm%2BAoXrlxtDojRwvvHZ8J8W2%2BKz01DSEctW5JMtxxoMSmxyR6u0QdCVowk3dPoCgQ6F59PIb3f8OqX5LVIWc5kgbz6MtMVj9QDhRiog8%2B0Jraibd2TfDs99P6nrwQVdBbOkWdwFruDkeKe17FwPOZKNOUV67i7MS69EUw&X-Amz-Signature=05912a1ea33d9dcfd220d2ca7aae1b010052e30960ea0268deffb11eeb58d077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635P7V6TO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3qNR%2FbQeP0j468GZvVt%2FVVyaVrMTa3vKs58h1CLc1cwIhAMLtd9y4CoOVLTekZdIHNTyMURLb5N6pFRTD20l6JwgtKv8DCBsQABoMNjM3NDIzMTgzODA1IgznfoI%2B7ZSNBmBiV%2F8q3APb5SJlCB%2BH9%2FmOUW1DCqsnxy7Y0j88A9y9k4FkY%2B2IOV6waMitdBugLbMPDP0k0KiFNzE3cqL5oZ3RW3D%2FnHs%2Bwth96UZWpqeee9acMkKUJ%2BtGCtB09oqK973hhvaprc7NJzUKgPksoZ4y0sJR4sZ21HTp88WNkg9DApHCs6Tc16vzvAXdgw1cZICNPJxC6fI3C5iQN%2B5%2Fm7po8POrp5UvJZ5q3Bw0hqGE0OqmF0t45%2BAD20D0qyPy4G3D9bCCn%2Fphc5nPpnLId2iXBzlGsIMm5I6jQPdpHLOhwtUgDmu734PciL%2BDJR9%2F0gYmDoc15vj0DkhJoJ06i7R3zSCtGhcUF9UiW%2BhlejqNPs6abxxgjQ5p9te%2BeZMzrRJocnyM%2FQOLH%2BvEn1XxNtpohsSGoci9PIVQKVC3kUf5s3yviXUQyb5ergiuJomUYMt%2BFsyQdfb4xhgZZ08t5dOpoYNa6DWZiYxrsChZKtT9M1KDm%2BLCsrU7pLeBrEz97itfToEGmH07rK5X8zODEx5wtQezlwTjjbjC5N1gb9N%2FWtVz3txy9bz77WwTv4vo%2FpBlJMZCCSDeSEMGJTYUsamtcch%2BXLTXSdpaJx1CyaPTJyGCp4z%2FgE1o08bb1sxhMJycAjC8nrnEBjqkAVhHipKdm9r5eZx0Yf6Hn%2BfjHgTJLsqkJsift44IXYEvCc7l1V%2FSIAflQZ5qTX7lwckqe074VWPrYeTUDShfkk7%2BgC4SiS6ZEmgn0kNhu%2Fbx77oeU%2BLu%2FqQ6gOtUZ9KXkbZR%2BzMl94D5fqWucEUw%2Fw5Ur6Nl0PDZKZqQWdPHiksiqDbTcxUnwtS7rCzk5QTwepmFX0TB%2F%2F3DfvMCzNUNOgZhq3da&X-Amz-Signature=e3ee32a949f2ef1614add203c4afe74701c251a5a9dfa789f34893353945b5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GCAWOQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNAuyypzvZg9oCGe%2FcH2aaXxsKaIDfu3S4kblk2O5dwAIhAMW7CSP7YaPWwifdOojOmyxZo98UiYSo1v04iXGMzhPzKv8DCBsQABoMNjM3NDIzMTgzODA1Igzs0e4WS0%2FgPoOQqKIq3APARAgW8gkg3HX5JcTmptzEgjf4gN9purjhIuaMvypBHJgsQ6uTkABlL0wH2YReBSQ1sbdfof3l3XBSeoQom1128%2BxBdw0L%2FryGa9ND0ZCjtageKYzDQ4zr3%2FvWqY4u9qRCsqG%2F9hdis16H7dryHHg4bHOIvnj6ub%2Fp0aweL26y3d24gzn%2BMy89V1s9%2BVDNXcPI9EcRYMkaTI5GMqLuAlqham53S%2Ff8Xaz58h%2Bkz870ZXW4f7iGGrxck%2BIpz8Nh9B4ed5z%2BiEwzET0%2BgPpy9LH4058n1XRFW5z9FfaPJ8LGwmknAkQg3LEtuscZHXe26ge4kV3zT2YTYVHUw9LqKRsUCRo1GM%2FmY5Vvh7wxs1TCPEKRpOeKC6BhWMhB%2FDjn3mGJ9AnEnjaxYRpZ0thwAGYTis%2FK44srC6p5gB8zxy3x%2BPBJCp6weIhFVZfxEz6yrXRDDnav9NhcMiCHQ5B%2BxYmEqtr5wVMvK7WbIA9gTqdkFaGvRIxwYZrhcHX8XyUpJu6Eu7JoXApbpmBPs%2BWytzA9jbtF5oXchAN7PbxEGy9oKgAK2lXoVwLMDTMMFHCuqDKFOJy53qSOvB3NP6b9MLrSY7Z3RzizTPurojCz4odB3rr%2BCgM2giBVc1gd%2FjCWnrnEBjqkAeL0Tm6H7KnxLu5M83iiCEW0XOnIJIf25hdO4J5lEaG4BDhoY9FUiJfFKsHEsnB8%2BaoiBCa4z44ldvSt04Vxjq112nxVUQu6Zsg%2F3uckNpy2aCCfTJLU9NqHfDBuxqgNILJyjvk6RNA0nH%2FVHHb6OUW0x22x%2BdrFONo85GdnbYhhTBRG294EpezBAiYudhXKICXwy0%2FvdzOuroHTko3czQN%2BXnHD&X-Amz-Signature=1ef11cbaaa08f5f265a4fd22965ed0092a628d7219e66b5a963699a7ed17b05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=bd7c38ba1f8bb833deb352d9766a00371b15a18fa26e1f805e2b70326698c0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUF4IKGH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaA9ISQQQ9iPldDwxK5KpIM8XAkmURbELf9Aqqvlxp5wIhAPNdO412B9bjB9Hj70sSe%2Bz%2FOqWTTE4VBknWPnVfPPwXKv8DCBsQABoMNjM3NDIzMTgzODA1IgxxbXn3PfmX8d7Bjv4q3AOQGlDBOBGbqQ%2FDKP%2BGIByqce9%2FS5dZccSmDr%2F2%2BsHc7JPKxERWdVRHrbYByTWos8MYdzF%2BJ84dRl%2BrdCIeVom8ff5PgFH3LAq9hHKMA5%2Bcmnx%2Fn4aSyKVv08zB6JbL570wMfv%2FwhrZtLw%2B7PMbiPKh2F769b9TNrcm0Iv50EM6Kax8EsdPtasDaVHN8iUa4N0K4wW1wvekLpiYlqRXbbFGHK89fgLUX%2BkS2713Z6X9ppQKejGWF0wplOFugi%2Bq8OWtQC8YVj9%2BVMufHLSWjhUwy%2Bnf8GY13ZahOAxBfmjPdX70uTYVhBxm6aWrIsBa%2Fc00CBOaj9ZxJ1ZOKI%2F6qPx14da%2BH9HLOTutI6RMr1%2B4nDyw0xjZ2L5XghcI2IucYgVIfY7GxVutmGYV7A34nZVEYkp3IQKb0JiSx6wU5BeTAfxtn0jU2akAIqCOeSi3BHJEMyDYHmoTnOHkTY%2FIx6VYN0K5qZHKfQrAUanynnFD7NipSreOZAuyvDlkxzS3W41gZOxARNLc%2Bf8FYxGfg1OsnnHRY6ZsDeTyA%2BeemiJQmRd13%2FeUB04b4g37H587Mk6%2BW1tnmvbS4B1awEIAzKlrqVLRr93MAZH6bDuInTcijRRi6xvv17iHvgPX8DCNnrnEBjqkAT%2FLK%2FP%2FV5d4ayZ7YFUJmLjycPaWemf1YpNXYB%2FhM5UjnMR%2FIb5s%2B05XcK9PpXZHEtlRrznS42ZllrIPqlA0wgoa73jqVbabtILmbwCSSsZts6WkYcjZnUJ54IHP8ALg76vpZLgBpF2RZz7imwyv8133EEgYAZAay%2Fc44fMa1oeeU6mNFTHHw8CTvBB8%2F%2Fuop9AyZkTsp9G5C2Z9YZh8YbSihfgL&X-Amz-Signature=81a8ce9b572bdde57c7a36df54ab96d16502b692d75deb631e20fa1d3633204f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=2959ec3a45a4d6dca3c7817f86634e97913a935f4b43a8376adf90b4d317bca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZBNIHH5%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe0Wc50KNHzOp2HpHzxu0JDtjGbSgoAM%2BxLmaKzrBxOAiB5viJvjPG%2Fja7j6mUugQi9UqJnJICIHcdStXtmFvy1iir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMkSskPE%2BqsN0TzEKiKtwD6W4bCSrMG0Q9liPmk6fxxh8T5vsQBaCSifiiqCC1VSZjPbOo2CwBYTD18QoLOd9JW30T52W3vrPSHnKJdhyk3Mr9AJKsryupTdz5pF1TbSs1v6t4j0%2FBQZrElpiptK7EwNnx%2FOxu7qul74XyTTCwh99cIQFZLRpFDhDLzne9%2FxAM2x25COd8Xpowa6Ki7JZ%2BvLxjZPFPuyj1wHXGoZgNRPQ9klxbUZrSsA0Ny9RBXz8D2a09JEdrwD%2F5jr0PIZI6lLE%2Fbh8wvxcADE24n57v9rR0%2BB6zd5Eaqup6Hs3oYChIGdvBIaC%2BXzMFyPvN2jaLlkxHc8uONvJdU2rZUnzYDusY0oogfr%2B6t7sgiDRM5Y90wPrsqA070tP2FFbJuqZ%2BiYGzsXX8nb2fSZAjq9P1ghdQ5qVevE5Se42YsV7udu8blcm9k24%2BaHpwXWuW4ALp%2F0E60MuyOA3QrbZUIKrk36U0TNQlUQ5qFlqxU2ixnkVWOIiSLzi6dgOlZHLV2VOasrMGbZSA%2F0a871oZiUhlSsl5c9zfWXxcPJTjnEMXXvM8t6NiyUoURYjJqf490QPHTUo94HFk150yGikJcqZMza24kTeY8gupdr5xBWZ%2BHyMe2hvLruGIAsYI%2Fb4wu565xAY6pgER7aS67bhZf02ZIaWbBsFzhvZJicFZewQsh3NvEHTdtQhXhOigi%2F4oknhKzSSCDprn%2BTf%2FJYJnPUwo0dAVUFWN5AjsjVopxFrYy6YO3tCohglWl%2FG%2BDoCTATQrVxo9nwZmH%2FB8JUdx1vTG0Aaw5ZNRgnmQto7s0%2Fbe2H3XucKQ4NbYFpLmRZiUkEneZu%2FYd%2BXjJIPN2%2Bc3EDEPp2EHQKGAJuKVJbtL&X-Amz-Signature=639834ca1fba9ac2c4b4ca5507c24272cd142b3fc4dc080568ce06143739a462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=0247003fc0c6359049183e871832379d2b83e80b33175304e9a06cb6839a638a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSZFT3JT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBdijDdwx6CDzACtJfxVdtcLhwhRzqWSyAI%2BekykGXywIhAP8e44tLH%2Fg%2FYBJaG160vekjKnTKtWueY0DRFSi4%2BqdAKv8DCBsQABoMNjM3NDIzMTgzODA1IgzvGEh9LKYwGkJCAtAq3AOVzRAG3yyPjjBl%2F3Wt2VHM6m%2FH1XKOOMaQSryuIXVomXXwNSV2ZZQg6glc%2BAPdfxcp7cSuXiiLBuPjWlAyKl52zJ5CSi5Snx8r8mBd8WVRS7TamZBLAcCXo7%2FwpDpKlYVwgzw9AqtffyLIblNG5sBQLMD0mpmE9WxWGn0vOUFHOLM5IJzb97pvcUXLNZNl6Y2ewSgbmuer70OHULSmY3i2gmW0d51j6rP9gS6YjzILoV2XsOQBjTlUUxZ%2BssSy9fwOkh3J5i%2FD0FQ888ainUQbWxXP4jl2DKZyoNs8jbAJc4kNv0sa8OCi0JuL1d3RXBPZ%2FsA%2BB9880CBH%2FqraJbUwGht1yT94Suk%2BB9Gpp4ZkJjozEabXAihcMVe86c%2FbdY1swdUILWC603Zh%2BYIdTTUZPU75oYx8m9mlbBNkWI3dXlwQC%2FusA7DPoN2fQQG0nvWOWg%2Fq%2BmFSVBF70x4fQnNK8PuYu3taASFlE9YpytYJOzdguogtc2wiB5gkrbg203RiZ2r9jnZKAHy6JVJTQ%2Ffdoa%2FVqW9X%2B6egSWQy2QMMmb2LRuHShQeE5fEYytA5l04f1Z5RkYVvVH0GXw%2BaNrsm9bi4NSUxJY8c7J%2B%2B%2BdiKAlmoK9RK01uE0EKvpDD4nbnEBjqkAZj2IciSudtvi6%2BkD%2FLYt3S3DoQELX4zns80oLW5y%2BsC%2BgluVMguQr6qwvlsIpEs71y99Hw%2FIa2tet7eUuIfgb1Vxnu3mCicGVqQiqMTkSpVUlLzg5G0QFyGNmOZClsqu2fIxOFpwWj4T%2F9V20TExsiTxcU7ih8IYUXHw%2Fd4x5by8azbjj9Gxlb%2F8Z7x7dBfyHbXK7lP13Ck19H8AWGP2TcXDwpU&X-Amz-Signature=d01e52e58459d2c68b5decb24750d882164e59281e88565616fdeaafef36ae40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=bc8ccb5ca668725d0255a4973c5dbcaf68ca959355f0565bc02bd1e460baf9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSIIPLL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMENYnGs0tWGCi1qx6rZv%2BjxUdn0aAueQcVQk9Pr4LQIhALKQYAKmIIgTZKOcaKp9QnZnalwp1p7KhCNSjDjzbRuZKv8DCBsQABoMNjM3NDIzMTgzODA1IgyRsd6WGp0BFwcy18Yq3ANBROV50err5JNARk8FkhG2cfGadrhn6GYXbCbgQZWgxESo1kqzVK8IBsUngVPyNypRVKU8L0JkSN4kJkJ9M%2FKz2zHpF7af3DBnV4oPN1OACuLGhE%2BjvxBVKdWc%2BV9TzVB%2FQ6PhO4lljximdAlfmL6JHJJZLCZeqZYpC09F1JTNy%2F64R6ia%2F3Te0FnIvHxpOwouexMxyrkmYV7Oy7FJhVppim6uSc96H2ZyCrR5AXp%2FK1oPos%2FED401Cn%2Bi1mP1EEsZsgD%2FKPDDIkabIaVcfF%2Fv28eZC7PL5i2YsQN6dHGfPWwqFc6K8gaMBN4uoRN9%2B9bZrsFGAotF0yzBS8%2FU21whJ4NF6oKtHyGuAXDX6PTFCeBKEIaoYnprrgh2JELXZtQtE617nzYrusDYakWSZxQpz0ktG%2BRSb6bOBaLbcMLaeLsXnS3zsYLfYZG3dioVvf9lXcJUuPw%2BZaFz%2FZ3OUVgbrdJTwsxbEamd6PB%2BhM2F77Q%2BKIEe2MqY8bMj50MzRBJjleRRd2zOlavTYS%2FsNjYtJagoIkwcuZfwkyNpRPgMngdzQ5mbm3g9aABzrDDFY6fbuT%2BSZVolZ%2FKM0YlS3Q0XZQ20fZxKJjH8pyuFvjzWW4kvBobz6aDTyT8apzC8nrnEBjqkAebDfEU%2FUAA4J%2FbesGhR%2BUy1dKwXt%2FAf7EtBEtqZTlN6NvL9VaDftIsmFWrLYJ6cEQwE22X20iACHqPXjr2YtsQl%2FqMnNFvX76IfCuZXtLnYV8hQBCnp1x635lwcQSTqIvbC6usO6TA3zfwpxSIBm%2BXwPgCgrS8pmNVTlt%2BUrfJzEuXnZ4JaN4jSo%2B0DRdJ9TcialU9lfMgx0Ixu2zoSTcgXxr2C&X-Amz-Signature=d1526de3d90262b6455b621ded441fa35305d84ed1b0bea204b30b152efc7d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WIMB564%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCt%2B%2FUxDNusiUtWlC4n8iWD2tNXFUlIX5vELyzayS2WVAIhAIAG98tt6PInLhbqEBOCF2gFEmXHSavZSyUy4V2VXdv7Kv8DCBsQABoMNjM3NDIzMTgzODA1IgwK7Gzr2HYA3taIR%2B4q3AMA9vjdW3AoMamcKqaW3%2BCkTkTHhz8Mllkk8QYTRR97Lk0ovrHfW0rAp6qODsOVcsu0SoeoaR4nEA63Y95N4whzQasW875Qs2XVpgGJ%2FYnSnpK%2B%2FNKPisE%2BcTGOC8hpmlaYiPsEFXIfFaAD7%2FQe7p8htvvTIwlw3Kxbx%2FbsAtFw699Nsft2uq8vLQ%2FOFQojh4VqMaf%2Fv8BUIVpGWnwby5WGIiG%2BIKPV7NW68nqy1PveltL5%2BsEcsF5UT7VUcvh85SG4d9chDk3msYKcRAmyYb%2FrvoAIOFyyMJgnbHZ2nteZi2oh7PzJQvYcPHM0sYg3MUOnnYbjXvJf52HkAx5DUaTg8Fj7XFvcfydyk7TDQYH0F7sn%2BYwO%2Fcn1QbX3%2FpuhsWuP5LobfSaoAtGgnFgyBa3Gk68Zzku%2F%2B9XcuyOwoJS8MjDzHCTe%2FvuHKhgHIe4QgrV2M3kAG8UHWxFvGoeUQlDrhOpBuUXL2GnLbBIxxc3vJZ2ppXs5CzdBfy79yeCBXn4F2FquMYHcWhOHB%2B6yuWk4nIowA9Jy%2B0dv7EpebOUmI3cW9zm5hg3rM5Hd6ceFJs%2BTlg6EARyiEHYDEkQgU7I76mufADRvw5TaFRrQOOsMf4dv5sp%2FFfn2eMBqbDD6nbnEBjqkAT%2BOYSle8paqrDvokP6EHQp70Dhd4ctKhUM%2FuPcXKfX9nUjyKZRyUD9p0GMA9G4GL77qYI1N%2BR9T4v40xfIt7c5eiuv4GPA6F%2B%2FBmHNdc9K%2FkVmNT3HGv%2BielkJeR9zD%2Bb5c7NjsTC%2FgK0%2BkUB%2F7ipF1A0765si8gHpdTrR83jv1z4FjtTCtjnbKUUsKrT%2FJc0Tt8kaMQ9Bhii7r2vGcY5MIAhot&X-Amz-Signature=858277589c4ff9caf94b93389d2b95c0ec5bbaee4ed4fd6808c39ffda02f4deb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HX3WZ4R%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfgNzwkMGm3l9agn7bzhsC37GGNBOVUNk76giwZdVgIgIhAN5CmsG8%2Fy9WkAJr60zhcJrkO2NczswT%2BkTEu1idSzubKv8DCBsQABoMNjM3NDIzMTgzODA1IgzUXs%2BPub33fr%2B8ahsq3AMiSLbXI6NFYKfOQKRMEqFchFLP9P63HqV7HhjFVsRmMVUwXiaeSFdXzzPT2%2BPA0RV6GEb9CJljrn7tbb6S%2FbRN8UmYf481buQSyTeoDFU%2FobXahRs90dGmMw%2BKK560KF26yMJkfyh1CMZRgt22nbETxl%2BnYXndHnsIVd13N5rQjFIIdGGq7C4dfFyISANVAWgSrrHYqLlGdpBYdVzcuOM8WBA5wK%2FqGtRXu4%2B9gv8wSEWMF%2Bb5TyJcsqAQl7FFhoGJ%2Fj53z36pJ0JnyJklctSQtFlNuKTxutaaElRePLGgbdObOUmpRzK4EuLwlOzV%2BCkSpRnOMwsKbt5SGP6FOlikAAad%2BpyuFhldaIDyyFTZz0clBp11w8qbm2UjmNbCNWV9w4p2aUwfW0hX7fhZeSqx8U%2BTKo7CQatUCwgO2dsPDmLC378U7LyeppwYlSXkWidJ5TeiExvDSMtD73o%2Fg8XMVcxgrX5dFGuJR%2FSnjYmorXjBilYRMYQHHOet8ze2SNeORzag3rPYgrmbdQ3lZbB1X2PaMcIbkWjS6D9%2BC3MUGpNzWiIfSX0Y5801WsDhcv93l5Vrl6W%2Bz06xxVOj5tuaTVyoMgt0v2b5At0K3vQepXAByDyt3vQdIx%2B57jDQnrnEBjqkARlIOzSgcGJy7BPZq4FVVi309ylekt3K4a9bvOnb22VHjv0wb5aq%2F%2B529p3tGsTRT71Q9LIOARPZ7uDK2idS84RNNcXjiPBTRCSAmbfMGwx2FmLey1tsJxWBnOuhc0YkeHVyYwJUFRBrS%2Buc%2FibNA1EgaEg6dBEjsMG9VFQ%2BC6Xay0sXaneFcKcAs2Y7DFMAZTw9lejq8lICY%2B7u8%2BaLN3Sro9NX&X-Amz-Signature=d0cc9deaf50d497591e3a3240248384dffdc83356fa205044a5362bb1a417944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA62FCLY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFnH8q51nMPHJdQSaD7RSih%2Bt70OUDMq%2BdxkpN%2Bw9jfuAiBIeDtFJTFaiZZzA555VgZS1K%2FR4nzNHMs%2F%2BeYwAvdQ%2Fir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM6KLQ3mLOvoIjPw9LKtwDEi0ZfeGsodu6B3eLxaSHDN78H3ZSWPmr95hiNKCPMuXF9DnxTZFLupghNJCXuJ4u3hYUAsxNlgcb6ouHVei9n%2FMGBbMAkkccCfcOnaYtWFhFf%2BMvKhn8AdLj5n0IP0sNQvPjj2BzUwo8ciV2tvZui1tH4MJLma8OLufiiJRpfcfhGauIY%2Fm8gWaumMSHTuuyc6MHAlSTFpWPAOdwOm6iYqPgX%2BTkg7i7C6uOR9zaSq0LkWYfv9C61RgHzQclFVvQ3p8PDLA29DnSfOJEGEr8QQBPbLunEntMMrSIokM4T6zouv9gQM3KadtKIT2Xe20RCNOdRi0tk%2FxmaolQVMdj4u7tbMuySHfdtY54gCZ9pteK3pAZ8sFMVWvvJAWCvo2XMyywcaM5B%2B3STEvq3MbdOHodYqb%2F3Enrxhw1On9XUgvjRskpTgd8EeH%2BGX4lqtduz8ToGsyiDhno1Jn8THeEWGk7pka%2B%2FFJevCqNzZ%2Behazx7J4dx49vFgE8zX0RjnfgRlZrJL1F%2FAE3fX2naPPEWv6S6IRfBuMiAzU452iZ7iCYHsUssBd6DBC2qhkNAcKmdsgBndpoU43dIc99xyy%2Fm0UGmqEcgZR2kS9Lgf24U4OPoXyPBZ%2B7HSwiMSAw2p65xAY6pgHLdkQNp%2F%2B4B7HcEu1jggbVKg4JvE5PcudGBP%2BpLQ7LvDNWIONeSkE%2BblIjoIWAz0qtOFn7I55XN3AJoFLWMEKURQs736sR%2FtmpT3NvjosvJ77EGIZPE%2Fs06IBmSeiYouabVMqABFL%2B6LQcMaEba2YxYOdhqdXuy0vU4dacmWARcvQs9NilFSzbnu0WCqevkoVPn5Zwsh%2FjUCBtxoiYT1ypDhAmW6He&X-Amz-Signature=7ec70e10a5fe77e37f4dc9b61477813e19dc14c66fa6db8b05f63dc74d692738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCTLMBF7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdj1rmcwobvgAxqRkDppf2w6PAqNROMugJFCMzLHMleAiBckD9j8bPeKNz60B6%2FDGLPeYqCnEOIR4CiZ8rtN4lsKSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMLNrFPGqk2ZzNpVWgKtwDIANkCY3mooxtLhP7zly17wc4jQDIJuAqNi9mwHrDI0v1gGo2m1qiWMNP56XZqohT3%2BoQ34XdV7WJQfoKrOx7XAZsogWShELV%2FTu3AaMHzf2qIx37G3rbTTNxUikikN%2F0jM5xQ7RYWRxvG9anWTtfDsIJWkxwCLzUyHRAe2BpyVWTv%2Fac57qh8wjejKZKvLUgE3z0FL%2FseUjR6VTUGtHz6DFgu82W0%2FVUsHQ%2FX6dV0HZupQqcpPO5NXLU4Lu180B6BVuTZ5NSJ%2FDgX6newOkYxepipY8NZC73ZxUtuhesCBoCjDkgnje5%2BgRAzJnlJzoynidc15EEBka03DVsVrydn%2FDC5800akH3ELeATeLShmPPUiXvy59j5LBhaLJFeY33Hh6RRPx1Idasd9ZQJ6Doo2CN4%2FYR3YDtwiQUMNXOUzxv5Pf0dXJj2bS8fSP2gaTCzAX1QhsXyIPX6BqPpLZ6tGG9HC4dPEbI0dVWjhdHQYN4pAMUrhJuTy55PgJQfpcUzyAM0ubX4hBMqgIfVn14Mt8A6gINugkOS7%2BrO6%2FLRJ5kdywbwhkpkJ0cX4vl7nFa9jTHc3duY1c8y8yRnaBPVDrkLJLxukx53jQYZLUh7jyTkPYNO%2BbvUJ%2FhQNEwqp65xAY6pgGVddLXLp8ZyCdOtf4YfJNXBfCkBPaCMKTlZFIc6j0AfF8Hm%2Fqg8ab3WqLojOwc1%2FJC4b%2BmS%2BDXSQEDt9OYvltLJJAmiw9EMab%2BsOKH3%2B9ZzaaFeG0UcaCk3vFlRwZj05QmosLte3wpkx9iGOI1ZOBV2SPJviGydnNd6eHplN34zwBO1XpixOovYwOjeWnWN8Xiv74yJrcGSr8Prh93mwxO0gg9N7fd&X-Amz-Signature=a6e88be739b13385941fedb1dd3f92b00ef82dd61643071c90a10c783acfdb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=0e77a1ffde8bdf434d7788269299a5fa7e8ddaf088f25d5fb660ee11446efba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REBVZ2O%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FED53YNhEngm8bLxOUPE%2FKGk%2B9Xd%2BOcZV4JxsJpoJQwIhAMTzrKg3L8CLAffNxy4sYeqfT64ttHGg2cZ7aTzx6jgkKv8DCBsQABoMNjM3NDIzMTgzODA1IgwwB8HCXcP%2FbFBLr9wq3AMTKftCnEBsNwow79Xq%2FUcgMIUlzuRkMsKmjlIu%2Faf%2FUCsaFaXW%2FyurpK9649EkJFp752TyUR4jIqLcBP%2BO6FFY%2F8o8NxLDkzg9QyqsCvdjYv%2FHuv3J9ICbIfNl2tMt4IF52cycH%2Bg8MgNDSy3%2BEhB97hl03t2RjVcHsgeorZqmz3jPgZCku%2BPY2YSchs0Hhme3F9ML2WesBBBL3V4d5ojvsWph231CH%2Fr0sbONxw3KB%2F5dsz8t89dBoZ1j%2BQ8E5uQEziM%2BiI5SsIBLLMLpAlvl1VV6CWUv3nu4R3vpGMDmhrnqmZduwnVJh03xRYo2aNjpGXGyYsXf%2FGpfw6cTZ0zGpAr7A6abM%2Bb7lzTWPSsehEncIZN8sYuIxMFMBMm1gVgfqOMZ%2FdYJ80yUoy4UTIqkHwuoC19wBGcJ53IU%2B4ZC83ZvibbQ8zyagBdfjpJbqNPOhI1bmzDC8KsAGzaLBYbZrTG5UhYzW5akFxmFppg7P9Oin10mHAg5krNpfQju%2FJmb2%2Fm%2BRq7GEtorT6SmvlfcCNrFPx1zKrfJcd1tpgQlW%2FyXimLAl4dW7Kd0nCfGwWjusWdXq789YDPHWacOv4d%2B64HLokYa8zezNO%2BbIPNB7gxAPEvRA8raLrjVFTCWnrnEBjqkAQ6TvbhdAgl%2FVcgbmmgLARlfd%2FSMOuspgUMKHcksMXfQeb5SYDDIndRbfOOwZX%2BWuCSEzQTf7rv2b6D9duu6ZrVFT7i8PY6ES33GGRKLv17asKkEvQtP%2ByeF4fcVMjwKXw50W6Txx2jzAb%2BSTvOXSdUM64dr5sIxr1r%2BZxDF%2Fm1ueLnfRa3lwFfs0tOPW%2FuW5t3ZjLsespuZNRU4et5SvgPE8YEr&X-Amz-Signature=769d068025e4519cdf092db6129b1a49c29f9b8a1cd5f182e70a737278d2f593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=3c8b55da2369158465a50500e4d740a02b44ed6cfc0ecdcd98fdf6fcbea07e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=8fc0036c687a8622ef34c941f1011f16618a0d78952748425a43f377a71b3658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=daf5adafa394368b18cdea1d6c9326a1ca9d5b0e632b4d2ea8e8edb678ca594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=13b6a18951ee80e95859a5dc965c26596206db2b4b43d1bfbcba85070cd4f347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=c14b03c773dc577369af72884abc48fcad9bcdb5212596c675fa62bb270cf856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=08b4c829d2eba10a7bc55f173715a69cf5d3e98cc5c5960b75714e8b51cb34ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=daf5adafa394368b18cdea1d6c9326a1ca9d5b0e632b4d2ea8e8edb678ca594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=639f51a68c30690a7e3b5f09189e15ee44bbf723401f3579e3b4669259c906ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=3ba5e645de39206816390fc423a6e5b62142a11ce20e837ace84c93491864d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TURBG4OJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBbLq9WkgNZbiCTKve26QG2OR1rJhy46admGyq1Pwb1mAiABsR%2B5q3w6YouNEyv0iK7lzYv4E5kG0ITKQpV0G82e8ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM%2FKjDxH1JnkWn9%2BbfKtwD5DMB3ZJ1m3b%2BAdIWsEvbo1sed3xmfYkAklD%2FYkxUF66M6%2Bps14td%2BYFmkTbRywgVillatSl3uFXNIMs1REuPF%2BhL0wi8IFZb%2B6ywqlPi2O50pxYS6MzRBRO%2B0KTKBkHxjQLAIOUcpGCc%2Ft3MFX%2BstSjYW2gvFSQtJq7OLoMOndW631RpojllQPjoL3ZosIn6HFHXVevnYV4YSdqvfb4kSRXs6brKIgpoY3oWFUUXmRDAbBYgiIr5tWDEtw%2BMk11vC%2FwG3GR%2BYYHZYWKHJvCuPc%2FY8z1qY5Uc9s4ioY2R7j%2BsOzdM3hMToXHUZ1fb%2Bj20gQj68G8ng0vrEdYi2%2F2KSTyAuWKLBgJeMyGXbKimUYjPYgTeIQVPi1%2BdnuuqYn3XVceEZxQh7huECBbzb2IaVAs%2FHb4OdNbZwMoIdc2dumzV9Q2doX4cB8LD4g4MPE0xvu65r3NGMDxXG%2FsBe%2Fyhpc9Isq0ET9oMEi5uHHlzTbLkGswThRmky1dEyTBlvmw4A9Nj0GSG3cm1oQ6tIc0t%2FJtUqCb7rr6CLw5jp0oWolWV5ht6Q0%2FJ4VuBsq5dYG54fUQsTtBGR8smYD1TOnLlS9FZEmPCXd%2BHN10G3wq5wQ5OYNSXBuiHjr%2FdYVcwwp65xAY6pgFCoqCw8n57ULdOjaDJ5x%2B9yk05AEZd3xhUA2L%2F9KWHtZy3V0OiERvQAPNzKLY0DBqBpNtbFN8x8ZG%2FGDYZUAOtPe6fBMVDCRq0Pp8JCboewyNGQKqsNc6WfzcZFH4PVz%2FMNzmMbGIgDzX4Tm2uelbSALgXQWdKLFG5ROSiQGZx8fwHFOw49uwalsxiKbqDbZhjdwgls66DpZGDC3oWO7CTdeT8r7KW&X-Amz-Signature=a9cb30cddb4105c3a16994aac6d3164c4b30662b080107d5f27d81311a6566dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
