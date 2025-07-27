---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=e7d33dd425b22230d59893b158e9f71cf0928115014985cb3acddfbde3fda814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=26e98c7183b26a34c8f1663e1b3378f8e95d1ac54ea7a76b0e9481ff7080023b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=ffb698e1ff66270d0c5fd3560470b05eb25e5c564253898b11d48c5601ee637c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=79b882ca416c587df00c6a8b5c21dfb48f25cdd19fd17b074968fe506d572045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=be23f8355050a1e709337dfdf0e915d70ebb913be873d4970111b877e0f0d95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=1877c40f45e68eeb6c7d4fd659fc14dfa0ea141e4ca2bc4c26e402af6ba073f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=1e5cf30aaf681b83d0a990b6359fe1dc616262dd4d77da6337e9b792e1fb63a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=a445994920ca64a4932f7b340f9b603cbf4725c0b58bde8c74b2140d9088878f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=47caa11708ee5819e480a624d226be2ff2ab8c69afd928c5b539c4a86c9faca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=689c401769cddf9da2e8a171af92d7d1b468949ebafec245da9cd3afbf2e4341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=2842cbcc06e12fa1601901e7574b35071e0c00804a4c2dd441891dc313e669d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=6642e55f76d12c32f104ca15f0d305d3f0578390ead41f7988e34a25b7135476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=8969b2a82bafe2700c418bd4e6e24bee022e3645b4b3d5ede76a35133147ab7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E5VADV3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCcQ4osAfsCz7IEHo5IvN3Hea9cuNZ%2BxA4v%2BWSI0qwt%2BQIhAOCDn2Q2B8NFJz%2BHx0x2w0NUJo2oydQHwN1DYU8UIW8VKv8DCHgQABoMNjM3NDIzMTgzODA1IgxgLdua6suutBbQaBIq3ANRV4nAMcSwX0pOoE4PkZMF3PnC8rrAB8qidiuyYswQRNSafCos6tTxzuMYU3xM6lnK6keN6d0QxlBu2ln9qqhGhYWIU%2FuhKFujdCgn1ePeP5bEYNb9ZcR5DMEywEvEddsih50p6dyjZwxeJ86MWc%2FH1I0keNElzFxqIPoIsD8gcGZv9gEQNCOo041Pp0f1OI5xX4vuWEyd7v8GGu5bNG9Z%2BdOMw7WKGjQP%2FdnQKVH4MRn3fc1PvsT5VgbLNvqv6HXBom18A5VTw64Xbzz%2FU8ZoYTkPyGFQSCcWpSBfA1l0t7QfK%2Fl203CZAID%2BNKcQ%2FLc6G2BCMuLUpXCFnH2aSR0RFgWmh9%2F%2Bne50KH84A%2F1hhK%2BewRjOuwPsT94f3B541wDaIECde3qNjYn%2FqGJZMD9j%2F7u8etd5vM7B3g7JS7t4kt6RvFMs6nQmkfgMrL3Am9uVFp2qnaoPiIPRoEXOUzoQ8hVNS3w1ggmGzfnw%2FnGEyhZcVZ7ErTweBBJWeUpjjL5EhH9oBoBH%2FlqNhR3CRn5CKADKu2TF5KoeC5PJa1drh96%2BbapugJAVGY4B8ZXDdYBfRkYC2BiTvD0W308082553eWfdU0fc7bPTgXalwFD237qBgJjtgcpEf4OBjDM%2F5jEBjqkAcmI7fQ2RmlLLji6btA9EyFqfGCSv3rOgf37tXBT8ozSdvHsG%2FvkcU%2F1BLNE2eL%2B9sGbQq6T%2BrZsQXoEdcH9j8COQoE0ADnL%2BF598tvaYvU%2FaOAQupIC2S7DjRl0m6xdaQUenoJe1wMRWnT65iUDikcgwzyoyzc33pct3cjgvK3lIL28o4ErRgjODnReeOQ2L8hRA1lU88P5pSZ0gLr87VFyDkV7&X-Amz-Signature=f25c6e9a3e8597bbb1f23b24a9e80255f923cf13032ee325e2a7199523c9aea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=b605ffbe0948f7c3d0c4d816bcecb8ebf55a768e0cc6ffb80ec8345d71e27181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=48300dbccbefea4bf10d9bf2d5557c7d424bdc2ec66419ff6e1286bf3e431967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=f1b5ee27388de68705b254aa6a63d09e278a15e6e97d14edecf8496c5de68b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=beced48624e736bc383c394e2b824410cc45631446b29bb3f5467ef503093fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=515fd15fd9b9bfe8998171c86a8b8cbb3bed1de9bb83723709bec97aee108309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YYPJKR3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T200956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIE8byt1J3YLqSLVFAxrLkwnOzkEi7WxAXoPTIHJzsTDaAiBdfwkk%2BvFqCy3adpn1Hk3SoGFH6vL0G60cXc0T1OaBlir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM0p2dORjSYIzzHfDDKtwDcOLaNFUvKkynzhNWJvrcD1Kp5JU3tZMjlOnVYw2gGhiJmi%2FIfwqQUArBFWPqzMHNeLgNz1%2FXhPvdfEqFWQQg%2FHJqRg0vcdxkO1g6fAdj6ke%2F6SM8kL56%2FovmDy4%2FWF4T8C61F%2Bmk2hcD6hwoZjdcndBKGDl8uSSAxrIFnoy6GJwgoU1C%2B1lxC%2FmT0zF08JrDImGjx7Qhx7Y3SIXHU%2FvETSR8HNnQnTI7HSL5LllhbQPkR3UNiZ9iyhA7pPUBO9B2jCCVajG6aINroDZ36CGeEsUpOVRGJOcUwWCtDlrOnHa4bqFPv6Au9UsZAza7%2BrjW0BACbnCGF75Mm9QJAg6JSNe44RlzLo1gC%2FkDwmMo9eBuaRIDnbFpSEBUYsttT%2BqSE4tL4z7pF0kgRXl0%2FqZ8rN9uc5fo5y5nHm47FbCEDmgr9xBQCiK7QmHbUQttznaxDvgf%2FgdiUWZJO1U4vf8U0SQVBYyMm11fAA4%2FJlw3ioNKHivs6vnoyh3yAWNMXMq3QhBpvU8S018PHHD9dFljSat%2FuYbALjbVva7Rw0nI8SwjqVTaJz93k53%2F0QACzbvIq3B7%2F06L28t9caf%2B%2F4h2b9bGVxVYTA3VnbR3DqpU4Vins13ds1HVckbc%2Flcw84KZxAY6pgFjwwMR1Oh0ov6VxEudf79ikUYujwAPAcCtwy0lsOBg0N0qM1FIejgn0mCvKCfvjRNLm8NazBze%2FS3WDBAI79RQjrLjJ3LyvXcKtuMDGrLse7z6eTMOQ6OHhg49sv0PL0f8WfPKddcRAb7MFUPyYJkT6wp9XXFmI7RBVIgAMrpBWX%2BJgIlV9fUaVviAIcULHRP4k8QpGPbjZKPeWXAsDuHkCBL5x3Zb&X-Amz-Signature=4c34318933ae44b56806d57763288b349cbb13dfc654154d513d00127b8fd8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
