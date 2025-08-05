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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=77926637eb495ebcb30bd3445db316459811d8491d86b3ef416fbaa168b5aa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=f6168162fdda4a31ba40d66d824cff1d95ea3a938250b668f622f687e68fb0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=f96a3f0e4c18c18d685685709b0e07eccd7f11997d4e65f219de80acdab43ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=528e16c814de67b7079a0076e97c56e4786051dfb68320643787997e99e8c6f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=c844a8daecacf7768f4d77316dbd896e9ed34fa02b839dd3d29c1071e3b059cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=f904da70cd7c479b1f7e92492dd7cc5be0f9b75fe62e98cb0b7acbe4f28cb504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=a3c09f05751a577701eb76d1a286e51f7103f2904d35065f3963f1c582291a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=dbbf1fe5f93fc5bb0d94f301a2795ba5cba755741b300e2eee7d7b855a528128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=b5b33dd0d0eae8f6e861b90e81a403dcf07e61b488df70f6f1c63cde7810f77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=49b24d78dc47f403afbbc8f4529121bc8e472d2b593a71970ed4ee756d93354a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFTJWGMD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIFw65nazFXE6RYSVzkF4Vdybpjrq079ypRLYsUUp0QJ%2FAiB2UtxfLuXuc0rbxEqGiTPGjUpw5yb48vPthJT0i%2B3ijir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM1aJ%2FqOkQdZkSdt9bKtwDPtuUohDDVcmTKUs0vhOYgd%2BILoyPuAXj%2BgKsH5eev2VUPhVI7iM4%2FN0WJOsxckFMXOTVKYS5%2BH0FG%2F5mPeGVDYQMN%2Fpalz3%2BA%2Bxv75IPlR8nDqdkyurTUNK7mXHNJGqoq27TpRZ7mR7bJJHoOfavwYh%2Fv3BeZJZX%2FuoIBgR75QSPdcQ5eLyDGOat2i9P67cCRQqu1WM7P5uxEe3ZB6a2595M62MktjAQfByFuLuzEDEKt4roxAizcB%2Bz3RN9VZ%2BmNCuXzKsOT2J3M9EZ4D76duKB4D8SiG3227l3%2FXiaqjBHrK5cQmSHeKjiXVyr5X41kYq%2BLhHzWk5zVs%2FVHOY1rPRG55UqKa6QK%2FLThd4eNcjtM0Pkw0Pvb5bDjac7noOd2NDXnUeWqjW0gk0d837bEvTz69esocUOZrQ2KlMxNf1o4TSJ%2FtLnnqAAl7cQbN2s6gWNBVDAByUIgTTS6%2B4dWiB%2FN%2FkBC1LfJpWpU3HoFeDp%2FBfDB5hvktxNC9NAUDPQXtyj8NbceESjuZVA9YazvD5X0SYNN%2Fay%2BdhMzRJgj3lADwsMgPLovXoDo5tpijmAO6ThBpXNFXF15iH8odQPXWgufpUrafk7l4mUuz60E0p1CJ1qD1lWUApPg6QwirzJxAY6pgE5eQWG%2BjmzaPx29PSVDjkicw1ypN%2FFsMEIVUdeDaLPmzJBtDT41f03FELhZNQzUNEWsj1ig4hXVS6rCTGQ%2F%2BtvveDoUskwGvNL4KQgjruakYxE627NUE7ys6obCGytEcXvtlRx%2F8A9ZQjQ46ruPBdrRsQYnMTSNjdyGYYCq%2Bz2UU28FkLrOSeO%2BiMIFTCBYIcHllGi1ZHXy7QK9LBQklIPFViX2ShA&X-Amz-Signature=efea2e3147504284cc494b3fa835445355065aba6d0dd00231f8348c8b71ef36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7AWNNH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCpHVPPsD9%2FawGSsx2QDSE5JR0oBMvbmFSLFIpQcCcZOAIgd9srGUpnSP8vCbLyBPd6af9mKJDSjzHvdnI9NHk8oEIq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDOg%2FDopO%2BPIJ2jMjcSrcA7yKKntyEtrmxB2U74EaC7OtafOqF6ZzNt%2FWzL5kNWabDrRU2HD60w52CfqmvrC5%2BBeSHz5JlXQZZC770psbyMRxr%2Bh8VdoCjqttnOCqA6MH2dshtogyHggOLMEknJMixaR9mxnBc6fL4e%2B1319zA3J1HdsOtrYVn%2BpFPN5L0EYIZTeF4IR1%2BiW0N80mWpTPR54IDe9FIM6mhP%2BP897uuGvOQtSEnDUFgAyr6y8hkA8vgTVNVjsaF8%2BNvCn%2Byq5u6j7T5%2BtqPBXMkh9v4kTSj6SBfhAiif0fRY9prRHFB1V9YTFeRv0f58m2yVSrgY2ds9ZUSYuNM9EJ0uZJkwx08Ny3Zcu9YzJntlDQMKkmLmsv88kFuFgkDIeC%2Bzb33X57QJZFg9EhH8q%2B3kNfypwK%2BGJRB5bAE7NCj2UGCK0j%2FcQTsUP3I80fr8eMNMQiP4Glods8E4lkUCpTl0BOtEb13EReX2jmeQ%2FZOev%2BzeQGidQzfAObX0qhS8NSby%2Fk%2BHo5LR3P97xGBH8vxDPv3e%2BDCPWm%2F%2BDfZowbbroCfliWC0XiLWHuF8qXeoSnTxWcx09re%2Fkon%2FiDVV0uSxo7eP1g%2BL5tKUAw%2BhSZA020s9%2B8gpn6mb1yJ%2F0nogjZ%2BXKWMLe8ycQGOqUBeaIr9xY7u1n9jSj6oQYMIvv8CxG%2BK503OJ4SZIv8s2h7vCtMI%2B927Q15YsMZ%2BFuDYbK%2ByFLoh%2B49qbV%2FMX%2B%2BefSCXSnt8ReyroYrmQ59mEYeBAMIVTDAtHVV6BjtBKWIHoG3TQN%2Fe%2BJOzmTV%2Bk98aZCp26EWTyQqiK0uBRvxLo2JvIonXQRqAC2hr%2B4sQXVcNFhy9o7FZnmLta%2BcgGHohdfrOuD6&X-Amz-Signature=f28f89f3533ac5edba1a40ae3c06039e1b9966d0f6d63e7647905ea6bd02883a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFKYHSV%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDP%2FP8UDzQpE7yHsI6vnBS14NZzmjy3TAXI2jJcfBgDTwIhANutJ1i2GxKeHvCTWRY0StrgibAV4FK7a8Ei6BkXj3POKv8DCGUQABoMNjM3NDIzMTgzODA1IgxDF%2FiUpQbo8Tswxicq3AMHyZUZIagl%2F9KwemSoPYuzFiTseTwNYEBPlpTmXw537zoX%2BlEoBdhC3FUyjeKd%2FGlxhxCJ6zngsYb4J4lcdfUJqAP9XvTPQbvsOZMyI%2F0luYx20QptEPSBvD%2B5ywZcbGKZA%2FxibYkmOAwp7EUd2zMJpEab32hAN2MOPZEIdN0NRflAuYk5vy71GTTaJ8Enx8AzxBtJI%2FFdPzKvu%2FVyvwrHs1JbmuVRTsVB4gJBOV6psv%2BNCwSjy%2BEc9g82pCiTqB9L%2BI10vxK2GNXOBHtxmPzYNK5y2lBSW9dWS5hUznbyudmmpdG8qmFALIeVzC5enMHT98K43DDIbljJf3lC7CFg98MxbcGZW30Mip9Ge5rJHG%2F%2F9D5vq8%2Foek57kpF3nOXI%2FDXFVIJXDEpCggXKFjtWqkxBKA7F%2BRcF2%2BtlTqdO6k0vtMLaNyNKFYr%2F3FuhjiU1kCRO6hTrzwSjh86P3ENW%2FDXqmitgdO4sqD9ff53kcRpXOG%2FCXHXC13PnWE9tUkQ75yODI86paCsSrPkf%2BMuT3MNJ9Lv1iOYOCL%2B%2BfRgX6rBuVIqpn4IG%2BRozvlYm%2B3tVsnYLr%2Fs8FD1cHHBoTy02SbQOYkmB4jk444%2Fpq39881Rd2xWR2%2BD6CswmwTCjvMnEBjqkASiADd%2FyA2a74Bn2nC9LAF%2BHxCUzQNhU1akjP%2FYhLiHMwMXlpEVua66eCrfbT6HekZWe0ptN63%2FsMAYGr8aFsnV3kJltfg5BDmlGWdI7lMm0AUz%2F06taOE%2FzEgeOqEp%2BLQg7uxB5SWQgp%2BfSwvZvyAYCePKXCEyknsDajjBRQzdEYOaPCbdQZjQxWPmRPs6HsilXRUGciTmhg6BnD8QIswCLcF81&X-Amz-Signature=d22c27526602d6f780dea9b014e2ebf4f1afee9cf8dbe44893ca9870a805783b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=4ef4e2e2f82514d97894dd6f13a57862a150728b404c0ab5bc4177f03dbe3a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7PC76HX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDNMfqKZwM5oQmBbOF5T0owT4Tm%2BnBRz3M%2BESnErAIT8AiEApZCyccQEhUlgn4uFxdGjkVPzJznpdFjGqW423lYsLTMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKVLQNl7j%2FZlbyEQtyrcA%2FO5LYRTy6NWDOyVx6FIibbqrewLYvPUPvbdY7tdOxmfyue%2BXOob5DAEVlYnRuMmTt6Gix2OG1gRR3VPaOtSVv1OH%2FdsPxRwV3GpUTDY0Qe98DmRtNx2fPtbsBh81legwBelRd8A7IfpS2qLPJ7XXHtL2apyrY4BiRv2e%2FalwrQ7OBdzMFqkbphCgDyNtLLmcJn%2FZQzmZSZKcxeFpJehA%2BtFp6Osg6pf9Sov217Ro4%2BgcgfGIqW87HANE6VxGNOR3pGR7BsVM5eD9in0TPz5yCZNTFVK7aACUHWRXjo8Yau%2Fe3au%2F8oQf5F9swD7hWyMT3iP8bNpMS46WXGBFPGZKjPs0PiBmDP7glq83Xhxx9c4%2B1eCPbUNfck7wt7aJijxmd%2B5sItVUhUks50DKLnEsMo%2FeZptmMjbahq4VyuSeE6LisOIDAR%2Fw9XTPwifAL%2FxTyvTmivpzWMGwt0fp%2BpoC9f3jDkeLzn%2FLEIqT%2BrAq8gr8DY1GpAWdz9mdehLBv8xMlughsB2RMWluu2JL21Oml8GqUAtwvuxHAaBs0moIXQWqs2sH45gt3bi3YxZh0T8YKxDQNt7olLpRo%2BoMDm05QiGGbvisi2XWzicUGVuptdzhHHRVoIZ0FS0wjQ5MOe7ycQGOqUBhvMS1QsQ3T4lQFCYCRBrMOIqxIWuav7cqsb3jyWAYgn4f43XIuYxk5UyYXUOphdqTXAT6eb8HmVZBJ%2F21CZOxqnmdTMp%2FkYtNsOoQnfnm219id8tB%2BMoiBxYumh%2FvpaDQKPYUWfFKC3SPDvbo05r6XJbL9aQvECsfoYqBM71Znh77G01DC2AipDcKz8fwJKUALQLC2ogrWnELQhV1aXDLN7lVj67&X-Amz-Signature=4832f00dc5acbad2abccb8eba8b0f48fb706685f4656ab084556ce1e931eec1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=7549fe24d6f674f18b85f4da316fd854e4de13e8e0f233d20b979277b8b3c65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754LCKKO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCd54DClYZRMswuxdnrJzIEOk16jaoB5zDKFcTXBPamNQIgM%2B5Ms3s%2F7HJc8jvimu5yc0SU%2Fi0j4UE8fnZzv1gkBpAq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFkoZSx2nnx9kylOTCrcA%2FVSdhaoKhe1B5ZH39ZHSVaCEaetB%2F5Gn7OwPQNUK9bWCmsfkHip5mdxFGS0NXVo3TyuAKjVkXyVsX4eklB6gMTbBWSj%2BuVT0pblyKGJPkC05mSVajltiOkaWLawTfAVu0uAyPeBpltBKbfGWp84SqCFgtjtInCZDKuTDRuQHzAMaDs7f%2FzR2GSYo17z1FvCH%2FwwA9HqjnjkAlTMsA619dnmSWfEw85NfY10h%2B7yY1KlVjZaiGVztiFB3yRs1%2FJEwQiq9gDae4teos0Y73MmkyZ2MyJqG09PStZSPVfosNJPKo8rpioYF73JFvMNnqUzYJ2PVvoJvX57ta8vx3XKtRdUnGlu9Sb5WJgOw5U%2FHnfw7uQZHKVVOVyNQ3tk%2BBbTv0ClmGYw2BsVGVKcCtRIjm7gs8V7zrZAz8SO%2Fu2AvmlmZxPXLaNBetkUBDFOT9XtwrTXT%2B8DSRvNab9ydQKh4v3Du7toThcHM4fn7nMG6Eq3dG3W%2BB%2B0QG%2B4%2BivrGSL1TWh8lNLz7qPy8A2YjKCIYXErQsFIVp2yhP6zYqclkUU3cjKV1PtRX7qXnFjVK6xsXjtyk7fIVZD%2Flw130tL%2FB0FAo1RI8AejtgwdimL57K3az7SWG4IBEpsu%2FbkIMI28ycQGOqUBiivAV%2FiVqvFt7HT4m8XTY1DkDROlBW0Tjy8obDDyZfEwrga9yPk%2B%2FsPzlkQpQWhLWQLyqb2L3NtpfkuIWsyv91geGjzugCCnGS1PKXshejOPS0sZMHh%2FJhJo88ha%2BlwwHKa1flzPw15ta1gUYR1VXF4cL6k8db2owVXFH9togb0MpfbmW1Fp168oKcwSVlY2K4Ypu8PMf07Vn0PTHeSmDQuiKwGI&X-Amz-Signature=46c3fbe693d35a0f2020ac930048100514ce70d848fe43099d8dbfd494572c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=501b4bf5183ecd5ee2f70cf26ca905f3d011a528f0bc8cfdb31c6f0492758b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4NBWJBW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAxT0Ntf%2F%2BGe95P9xVg8Bhy5CMk2hi9maqVjy850Ap2oAiAKhurW9MdpIaBBhU3zunA96KBrkrnvUPV%2FNuL50BLxSyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMXMvkZ63AwD8%2FyXrpKtwDrL6XskDRxmsiU%2B95VV4VtXzVwjHe9FcAjLGyEiq7n0ptz30MbIVO8o1yo5dXxj%2BKOap1mL1XVbdBpUwdENTbKzzYur1WbIMHvIHIdfQqDWaTAjEFY0N8J%2F18SpdtWnHDoPgHbVAsW%2FoapRTYadTGACXnEny7HYYW3Uu3j8c7s09HE4Kr4OwsxkeN15q1lX2HlCqcURsDfNI%2BBd6PAFZPyhz9wrpToJJSWFWlppCLYZYfSeY6hgNElTAseZAfU72x4Hg0b41CmJ0qRcmah8JvxIph5w2%2FnfHrwRX32i%2FC6zr4Z1wl0J17zueSiVW8Em%2BuCKDUOr%2Bmgr7Ayi3ejQgESbRW4g41oUnnyCSdLmKRCMY5MwEW1qTLZCYIYV6g6JmhfQwXNEjw9RpVQV0Dol39aVkKbJgkuaANp9itD1TH405aFEZaYCExMkWL3lZah3OlfV2i%2BbyncvslRrtecacOU4C5kWuFrlyVr7zDUwylCD12tkccnPGtuMtT2lr3MZ6VxGkRaqkX25GTL%2FDgcXG%2FFu1O2EQoBRthSmq7WXsdE0MzGZizhM5HMDWM4Unw1Zi8wp%2FuJjCBzN%2FO0e4eJAwxek8Ox%2FelZNGDkLZL6r8xuNErZoIdXqpaFpRbhCUw57vJxAY6pgFk9YNF%2FI45apyfI3XA3eCTW1Pq%2BYIExoPCbyoGbg2yupJnjXCg0MZ%2BNOxAcDQJuRYLsDyZMZ5IEs2MEYMec7xILUM73WcRQDPL0I7LZwkNKC0LhRYamsrpjMlrtS%2Boh819duwRlJusrmJdS1R38QU4aUbN3Xd45QAc%2BDKcFdeYOGrufi4UuPpIzbyOo1rXY8gIFqPBFC1bgrjqRSMBoXYKZo%2F0Jbge&X-Amz-Signature=7d49e3baab946e1ad21630cdf3128f25363a24c51c85ced19b42385fee545285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=73339bf47f2555eca4c94362aaeb31430ad5b24aa621bc9f79e10263654569e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OXU3HG4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQD286i%2BOCtmakDaGwBG9tT%2BhmSPsrlsPfvRkwLFURSD%2FwIhAOSu4M2ii94oUzBZYVTMKWlRkiKuEvLUk%2BNKj7uEQyx0Kv8DCGUQABoMNjM3NDIzMTgzODA1Igx43VSedIVlPVxKjBgq3AOlEYP1JqRpH7%2FCCixSWBxFIlnADthThmWsPDYIBN%2BHEw82S%2FPEh28D06mGGs39U0z7HAxd3BgKGiZKsx%2F2CGE0LRhW3eJg11qBjxAT%2FBYfh44mITZNnkOoXxdeTdTk1gOLpWXV3C8hIF1spd4%2BQEZG4OwOGjZof0YHeL0pJMjSRX4raX5oUzatExR16FI53dWORcHXM5nZuPZ3FQSOiUEjCSIeQ9Ccx6MgOTMai6Mx%2BIc41lSUc1gghvPYPPw681D6QX6lvYTbYhWrdmj259XpVvcc7a2t5PlnqyA8H3dtivToVctUAm40HmhtK2o2n%2F%2Bc4cgTNMZNfrit7HP3ZybTERo49qPShMVMNhI27E75HO7OtPT8HWkftAed5au6EaLhPTfY24ao5PbzML7EQG06VOW4EyM9vsQMCvwQsKWvafQ78wztv8OOHKGslx3C%2BUEGe62yYJhDokxmn5ljpZiTrZ7K92aOe2IXfGZe%2FXPFIGEi3HDeNu1eyQZth36N5cEZ0vHf1pdyJnWT1f0e0KE35%2Ff1%2F69dIg3uPemfAtj2cypetU2ar66dyNpXSV8ycE0yXp2jB8b2sd2L4M8ybV5eL%2B7H%2FSgMEdHm%2F6qLFOLj8vg%2BxwNsxeETfpIKrzDfvMnEBjqkAcnsfXC7dq4D1kcz%2FG6EzSfQd09N4W4gJYpYPKlfwbYyYv6FI49td70dkj522cH5jVCLFb07AG9Sb8IRYzh%2Fw6serXx5SUJrZwx3Tw7QzOJvMrUc6fR9m8cbwDeJxQsV8Dmkkpt85h0ubEuBUpoWqbnXDGVTCxclNip7uY9gcjLT8wQP04M3q0RpBPGibcfWQ6saje2f%2ByUIvynHslHSYdd6DgvN&X-Amz-Signature=d7bef527dd557a6b88bf3c92c2b645ac0ff337f43a6266d5e35e4fed634c8442&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RBSF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIAo%2FdjjHPxWlH1DlZqiaK3qxw8rVf0enxeEj%2BBhVX8qcAiB5exWz6ajy6U2xstwzSZtuR4nGPp7xC5cNsDXMxfAX9yr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMspl7uxEOhvWAfyyUKtwDC9DlV%2F6BnV0pKYxGGhaADWpSRpLNLO1q58eqAaH2SahKPB6BlQtP8m9fmVRyYga9GTEBEj1HjRqGn7kbgiaBGtlpa00f%2Fs%2BjQBQYuPkHoZ7NYW8x1oTCbFWa%2BxDpKG1dB0k0MVmz0rO%2FRnvve51VrnTrW7DuLIBNa24FdXjfctyvbbwlAeERlaJPpFxRjlHFXPIdvab7E2KVNhARYEU%2BFGmvDsk%2B%2FsdzUJDjcUDRD1f9qNLOnRSgM7yFyaq3mmeI5jDbk%2Fm0x9UX%2FjA2zAxN1FaVyFTmcVDjWYXeVY7OCf7HdJVkmf1Gm%2BpLHChwOYMIWzCQI1CNr9wWEMe75mfAK9TaYZ1s%2BAKvI7NRBPMXmEhgSuHU1krWNePn92QYreZinNiufvv%2FVmvNgvWPUwJYzf3d2oUqwtxdWJ9pz7whfpLrw0tAbTiNN%2BlI%2FFeF6TGeeBx3AdfBRssWZQUq3qVRRYW3eEYtzt25Z25J57nFVIRAKqqTJLiqYOMD5KvXaEY95sPPIFDCjpRgkfMYdjyvkHMZLoWRP1k%2BCNfJFVWEFLqGciVrMZ05p8lF8RR66kvHq0vHl1F0xX%2BxLbCz7mgoumf8VSbbsHDe7A47Uwbsw7Je19VcrqN7yPPrf6owhrzJxAY6pgFr7QOAu7p%2B1kkVTO8Md0kZop94zEbq5uQfU99sc0VXHvfCmh8OEvr0cwEap1jlo4sZnR0McfQpVWrePdYBFjM6WT%2FovCDvbHHd0FPR0JNeRgXjSN2VEtQJZsWNJ%2Fy20nG1pk44gv6d%2FPHrOHPgeNG8eAhAkcwZ8YRL%2F39QCtkgRmhW782ZibcQpPljkTgxgrcVwAAXszZo64i2EbGfVYIs9o5Vr3gD&X-Amz-Signature=189e38f7b024559168805dce2e73d4e5c239efb95766763ddb62c5fd24109fa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUSU4QBP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCID9fZg4Lgqxoe1DdNepWIxWKV2kLQmR8w72ciFDRdZXVAiB7QAQIDAZCJ%2FqMAEOndnUTTOhnZeKvQuaAMBhpAwgw8Sr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMDhUuk0nJDF9%2Fj9zJKtwDii6dallVIJOYEN11piniB4%2BlfyYRcAqckyJ8A1u36HWteJWSsLNzAfu%2BVIHyQ8j3s5%2Fvv4MmzlnK9UfCSV5K1LZV3cpcOeaTinyOpWhxxOfIlfGK7OOXOaphubPOI575Uo9TrQ5GzKpqrhINtWJlR2gaZNJDcTsxs2GCFRH9pJX6qb7AR36ctIqkDhFdAK8Ev62Gpc2PgAr7xudX7q8l3Y8qykQagQx1Q55zMvSlPF4Qcy4y5MGorfge5VF%2F0gcL%2FHdmwfTxNexZzPAMCeEdMaUfkLcoYIEXTKqIUzCxKHUo61twv4wsnyKI2GfovbT8fmQP0iejQAgLRenrAbhVVGx41ve3Qc6m58BW3gq3nDxAkYYHyoKu%2BouyOuLPYZh8XxYvHr34sV3Qlv8FO6V43SssIPEIWgEdwIh3o3n8poOYXDF11lAOnPbuOTSScSeIVdmPryWpZDf1Bf8Ly4EuYEp9zg886TZMSRNJNxZj%2FYgrWrwJuh7LLyy%2FKo8kPDlKzEz%2BwTPbdz1MQHknQpKrW0ZsRzE8pOdLGbpKMkwPoSAyuDNc3G9dFgUXKcFBXRXlE2JDgZhADSED9vmBryHmF9WfLu%2BB%2FWVV9zdsd%2BQg51ty%2BySyj4Ai1A6rGnMw3rzJxAY6pgHG%2B5mc%2FHfqkG%2B47jF3gN9QXrasH43zBcf5md8wKOgW7cS%2FoMfFHOQ%2BegpxlldrsUZKA1alREbcPFmaA%2F%2BNHycj5x3TUn4vwNED66OoiqS0fEdomShDky3J8%2B1XXmMi%2FqDvyXIGToCwnzJkbVjUv8tsiCmc0fmE91mgg1jsfxMIOXC0hv7C267s44yYZsiVSrttXwyZiHM3QnPVbzHl4NDcb3turARp&X-Amz-Signature=378cba0c35bac48d7a5808aa9897f3f28b345abdcd1ed0aa7a9b28db3f05ce30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INQB6Y7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCSUKLHpyaBYqGtknhLaPDjoUDwvZWb8RuWCu0swmC0JQIhAJm8ulm%2BoSDd7cuIdFJ%2BmDBauwKhOehLD9YzllRcbyy2Kv8DCGUQABoMNjM3NDIzMTgzODA1IgxAQu1bSuELVOYvhrcq3AOKvDjVsLIhGh8wh3heuCemi496vqELdqOyS1UeSH4eFY%2BT8rKEwa%2F8MHvY%2BqjnfWFeKJ8BW2I7gVZi1ovnS8v%2F0FGVwipkMTeeR%2BY7NQV5ct7hKGGdnOvVnymyqX75cI%2FAoVyp8lW%2B7L0gnFkeYr1NVlgCb6cxpPsGv0KhebkiEZ1h1BuAv0JkEj%2BYtMEwYi%2FowKmw2KfDe3bYYQ6wtPJNy9TwYhHxgB7aGchvNkdYmYaki3YNgAsEe7a9%2Fi6etNgj%2BAqgZA%2BeIbSPodQoWNVTY0s1i2I6mtjpn0yAatDndjZTdNJ2%2F27MbuDNapTt3es4hHM7Uw6O9BzHcuos6ImIRuNvjtWAJqwgG3X6Q69aJtiwyWnLJNzr%2BMcVslSBOcWE%2BqDm9DOISZ3KyuuWSImAXjD4e8UIgoTmLvPg83qOAequ8N7r%2ByBa30s0TskIAGCyg9YFFUx4k9h8%2Fd9wS0KR%2BuYD7tCc%2BMF5iyPiZ7wETkVywELhjKq6al94I5Z4voXcyd6yz%2BJcCFnKISzWIpKrsbY3dnmD1ydJ2Z%2F1w9NJiVxU3GPsAxcFBDjAm6wLCpXYLqwzfkqy6jACZezd0a5bHgfnY4ncyDTKw75WItZYpWtP3v5m7pAweqrZbDDcvMnEBjqkATFytMTTtS6110vZRuCzF%2BQW7pyhiv2cFabX4sYJE6he%2BqkBmTrAEAXZr4qkmf0rgfrfp3sswAbsPzihSief6VXvib5F4s2EVg1D0ORzjtdNLDYkGQWPD4NOxAVl4ONhIfS3m4lKMisA%2BATCM2IyoX9%2FdqJ8AO7sgYLcFyIlotMV9S5XHyufwpIBblIxsvALMdI8RXyAJ2RtCCip974vHXMV7PW6&X-Amz-Signature=0d4b4d6c77aab60f88d320f92a68a981b744dc6f737749ac9e221411217c253d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAK5A7P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCQ2UoR9Y8nUhKPZPCbccxZIpEEY7%2FzU8VXv%2FTpMxXcJAIhALuIdJIyK4Mge94u9EqyNr0Vrw6WhGWJ5Gk2P98AH1oLKv8DCGUQABoMNjM3NDIzMTgzODA1IgzYVg9sLHV2I4VWZzQq3ANCIkFYfQpuWo8tKFTuJ5ndX1k6WwK7aE%2FaVODggzv7DtRK6cUcWOa0kq0a%2FbvwwTKx20f5J59n7GyRfwU5bJhq6Dd6o%2FBDBOHg6NV10ahAKhPZJpy8HBp55NIWGlOctlmh8h1Az0egcdLNXMMepdNontdBhGcRR6Bjp9S71SMh5p6tvoD5vF5kRhec8sZC03ybLE%2FiXPKupbfeYJ52Z0poXilKByiGBKtBL4ip1ftJnFcMLywgKqfq2RRAIwa9ZnNcjoTsTI63flvtvjebkjzkcW%2BRN8TdTWkTf6UZUZqOxCMAKNBGsLHdkAmIolrlsI7nXThRy6lvDIxSZipsflsenXF1cQzGPfJdCRdI%2FdE4RrskmHvB4qAyv4dPsxEr5SNZVc4moGd%2FWQKNPMMsgus9Cx0kMHpjqHaQH3tv1WRnaJwRGazOwoEYTLfXecCTUcrAg9Y6lpVy%2B9%2BWh%2FAz0AqfKc2Cknfz%2F7gAPQHmlv7%2BRi9j6iLkQ3Yp5Gyiw5sQtVuU1Sjon8XARpR5mJcibE8r3OpqA9JcrQVJMOL5n9Dt9n5%2BKrNo%2F54xj7WH5UT5HMpJVMz23CF9wkamfCGEDmlV%2Bei6nITHe2iHvhPAq6OWUzqloRQlSAMRciv6FzD8vMnEBjqkASZ4KxemwvjNE1vOIabJ7GQaWg4vCtCkzwa9oiDtj8p0AEFFgTk5lV4qIsjwIGOrEznu1DttaEDOL47q1T16jWpi%2FKuQZ3yIJSVcB22%2BcCZUaj6pJPzbxpydDUovbYpMHiA5euou4i2miGEBL2j4JBMR63KTkqOE3D9qzGb4bgC1LgWaXPeFRd%2BvzuezCphqYm7u5Hc2kkjxWQzLqchz4%2Fr0IjBs&X-Amz-Signature=ccecd721e2b5e55470c75eb3f0c622c9aac518dea004a9774c76adea24416fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=c83e780ab7330bff3a648aec3dd779a40967ac3774292f760b28d6045c5718a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYUBLT6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCuZQTvxLdYcVUPbgyKX1LJVXJB1kC7Pi10sBdC%2F2BBagIhAPWUyrepXOivHcdWpUAvwjU5NImHcTzrOPbj4aYnBDizKv8DCGUQABoMNjM3NDIzMTgzODA1Igxa4W2G9HwRV07DMNoq3APQIN2Vokrsf6OdcJ%2FA84UFaDg912Rvg79yzkVGMJnswPXE3Xu4ECKPVf6lDmNGlBmk%2BXRKuQjhbWQiI7MzN%2BFYx7uR0ViRe8o4HE%2B9p%2BEB%2BVjb4SU30yx%2FgR1zujlqJ8D%2BaGuJCGItTNvSDCbWbF%2FGXA1IFJcYGqymfLsk8HVTG3fnUAET1kB7om0ZSKAhnEQhtK0YIr7zcfXRA4DZhxrwQHx0BOaNE8pPNlP%2B5YPi59DuEhbJCDfffG5MNjYjPqNZrHptIwOS8vIk%2Bp%2BOQdiN6Uvu3iesASIoMQAg0McRpby6LpMdE0MgCx6HNz85d9vuFCLpStcKOeWgCSczXUwo0kovdnmNE5j0BYXDR37u1vtFapmJAnkQDBWf0GpnZhstJMPXvwUYDj2vVHDCpg2coui2XCmxROs8nQiPWorKmjJTio%2FvRNrbNMRb6XXJp8P8bgtLtiBPuzYqxa5QCEAimig9X%2F8HiQEfiXoKmujCwquBwdsr0Wqy6JadGcmRnp8gvlU3cqb5CxKarK3SxOTz1JrLJfiRCQN55vTrs2umcvkI1Oa6tQzQahqHV1Zhv6%2FGmNibnQ0gBwGwiRBMZSgtJ2sq3K%2FQtk1MFmEFcATOxt2XLa7NHAwksgY5njCEvMnEBjqkAbf8JSJiK54wWOrVIr2hEALhkCPR3iRRn%2FXPaS0%2FmLOq1UZUA9AspowZjaoebhKan4ABJ7iMuKjW7TKnLikIk7lRE1m6CQr7aJNTncWqP0zHatrWwTHPSz2iJVM2Q0gitbmuCai1WKmMA9lHNiLhw4oaa%2F7qkNb2XEsu6nNyA6gYxqEnS7jif%2B5eYt4h7gExKSkiV6rAXFC8d8stFOlKrPRl%2F2Ua&X-Amz-Signature=cdc1115397d39ccefbdafef4d27bcff7ddb83c1e0f4b136129b0a010a1184b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=7ab878453fccfb6c02bdbcd6829df263d93084b12b6713c23fe5956deb1d55a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=1e012cb0d9caeddf7f1579a1a44c5629b3a3dfcb326b3fb5ee95161dd03532d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=5a938323b610e8a388320f60ce581d1cd447bd856780a663a0d2a364abdca300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=bffa0b66f9991caaa662955a01cff87f66480a8ffa29d57119d08d9accfffba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=11ca3cffa220f331ebf9449d62b15b74269c7a753feb1ea8bbc70d0a1760e692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=90e794fd3033e50920c4a4618ddfd12451e78cde6624e7f62c8ec19f9f8747ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=5a938323b610e8a388320f60ce581d1cd447bd856780a663a0d2a364abdca300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=8c46613970cc5af80e089079e26706190af9555cb1927f5fd682377aa4ab8d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=ed87b1b3eb670601e29651678d4efa90e0711a84c3a7c98829844e93cbdd8ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VSFV3I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQCUKk2sHG4RIdWSIEx3LQFcTizHGS7sv%2Bcy1jaR1AlXrgIhAOkRittPM22TIrN1Aq57bzkHGbOWj0gOH3Cid5HCl0IuKv8DCGUQABoMNjM3NDIzMTgzODA1Igz48J9S%2Bg%2BYmLVaVj0q3AMxHqbG90xcv9%2F%2BpuGGgwa7VYLwkI40Qn8NXfxIfo%2FqIS7yEG7pO8AfOUrIi2fCWt6lpBgnFJf5D%2Be0lSU%2F5c%2FZlBhuKnQG06kD3NhhWYmziAuQ8sDBKGaWuRwwo1VpIvX1%2BpcnJwT9AL%2FOrifsRchQYqMpAw%2BLu02prYJ%2FoLEdlmCiTWHLV0oQJlM8VNQ4Flb2tOcunFa3rIJT5IDE4a2oK49wuoQua2LmidtxmMU1EQeht%2F82hQN8HopDZogB98UZd9tsAo2IwOlat9hxjl8N5bvqczI3%2FvK8ucx8NQ7Y3JqPNk8ijXpghMk%2Foy3%2FwwzpmUO%2B6ZkeB6x4yu9R6TiM6DU7OHS3ap%2FokBLMJuNx1NExwkuuxiVpAz2E21ei%2FkoQGOKlYXTF9b3675PyYwcv3Mw5nG7h2B9nYUDGhC6FJEu9a%2FX6G4fAzRH5cgwrTdXktJ5VYP%2FgEPflCN0%2BiPOpIqlG3ZmE3uet3HOOmuxwQEIdRs4fvM1aUadMAJrcy9Bn7wwdbG9Y1Q0721clVtzLjudEi12YZ7ACzzYScbeVDar2%2FamPTbLX2qM0mpgq%2BecroAN1E6ghuwL99mvt%2FFvTkMIBQe9KUxbrt36NYEAmNZVN%2Brpc1%2FigxhnDyDDevMnEBjqkAWT%2Fc5UXtQYFsWWbVD4huJ7B6RMl5XMhvNtPOch2OZOs3pu3G0OC3IOHc3IH%2F%2FNPZr26UVpE8m5PSMwvilY7DZG4wtjdKmNlEuk8FhAYCD9%2BcPcbF7ZCrOnmsZa11bEnkU5K767AaV1GrvPp1XfrBqZGEcBV%2FsKenOKrrkPsg5oBFkfAhvpK8dsY1YbrnWeGKNIbR0msw8jVnQ6q7IwRPcmIMhCW&X-Amz-Signature=d4d981256754d4c3ee66d25827565d4ebc1ee2572e3e64d297b5af6352ae2047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
