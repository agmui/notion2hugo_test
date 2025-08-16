---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T13:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T13:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=0d9255d4099335ff7cfb3f1f25f1a6647b90e309f374a6115644af869e64c3ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=f31be2950c7eacfe854708989f2ad8e46070abe0e1a77ec4bf9842cc4ccc8673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=ac1ed10e8363d92238c44298c345c85af2b6f5fe07f7be40d10ccafcc8e976fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=2fe14dfb1da1fc6f55efdad887696b38ca258cfc870cd7cf65fb9e2a55437c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=38e8777ca3c34372567584a163b8066fb3bb189d1efa87eadd995dc94381020b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=bf6f5ad9f2f5ece249e74a325665e2c92e03fc2520e2a5a8742636bb6c430d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=9b648f09e92a84083f8ece77db7beb8d8191ce01e9199d9a4672b258c762fe40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=4f96b16cf613df9a0304122e1487dfcfb49672c79e0a87f6ba4f848d930f7d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=c0e51b9f0be42ac79b5e31abaf940c0edfd1c19f5254c1df20c5dc1697a533a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=fa3d22c1f308174cb655a514014d4751111eb710f834fa6197f422c0ef27e5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW5AEZKS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDQ1gHP8PJ59B8bOd3cp4KdCyAITiXSeWHb9Bmk0S6noAiEA14gSLm89q3pmEgBz%2FjfmSvbkrs5hfvcvd%2FfrkXyqhTYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDH7FPimifQSXbphL6ircA1N60omGe7foEsPWMDESG%2FaUYVtUfs%2BcnLkQtkk2umwcF2adOrj4rAXwA%2FaFnncAQHGQside3NzRO5KJfzVpoPBpUmHVAhP2yBajt8rS5zdnXUi6J5UCNCiG3AzuuEPzWIz%2BANMb21jfr1%2BjdR%2BG9hLM6rD4iKpjQ1KHI2ggpxjcVe6NLXscjjflYz9cENetD6idTnoqGGPPkmyZyrH5A7tqBlyy%2Fou6ZTAA%2B16pAVk4vUt75eyrGiM8TYyxibUCWHS7xxB%2Buwr1Tc1Cqn78MtpdQrBeOU5I9FROnaJuu7UI8xvfP%2Br5xPJo2JAvFrmnItZUSWX1CQq6P5pGM0A0xR6XKqZ%2FVr7dB2Yx8wX75g7ctxNPIWYjZz7A9Y1YUYrF6JG6k6Hv6fmUOSS6eiXO6JP4DTsBFN6PXc3XAIM8cD8QT2vtpldmLZTQ0i%2BWZDmcF%2BTmN4nQU1%2BUsMMoLLwG%2BS71Sxgc3fQHGDOvxS4UY1x2wtOzaiyZ6eJnNJd103fLAkHoluHz412cozBObK6MZPM66T3fMxrNzz8F9U9JBEe7TAU9sqhq4y%2BC5Y%2Brkr9NwILxxpBAAidUZ4BR%2B8dmtn14ucmYKF3exasc52yqYNcGE%2FY45Bo5mNm9J%2B5bMM%2BZgsUGOqUB%2B9OXnfCNWvH3wOKLip%2FhI0z09Pal%2BuzFP4pxn0yu5OvgXnP0ljgZvbhs9mxWzUz%2BjCy2lACo7k%2FPT%2FqjUKlp8Qu7uZARNlPZs9hlsloJJkFtNWWXmQ54sgH5w8UeAr%2Bb%2Fj5S25SJ75VMkMWlYjXCn1S9KMCZe382fCEqaWolBJGl1%2BXM3uNj6YGylNZ1csY4ModUJxFz0jCYwVkNVpTYBRAz6kWr&X-Amz-Signature=894c9403c9f0569f927374ccd1508a2ff5a797d2a0e210354fbd6db7badbbee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2MNEA56%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHaXJPJIY9ZJY%2Fml2wydXPlvfC0Lq4s00E0TjvIx4N8gAiBEXdKjH%2B0nJECQrbUJjyUmiw2jH0sPxx0C5iw6jtKrSCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM2JZNWkhmdeu%2BKwX2KtwDbZV0NZT2trtoX%2F8FY6FcSPfKbaXv7Xl4SqVevvrOxsrGEc6BJ%2FjTZLawhyEYRTGDHXDwNg6McoNOplczF1bEHlOIzEVa5sAbH%2BS5bH4WQ8tlxGpJOy3Gqbmc5BgNFC8vB623IiexUFj730F1p6b52%2FDFmvQ7IMVT35Es9XoAM0QtipvIgGJW9d3hsX66f37T%2B3vxU0eZarWaDOL91T3gNMBynHxoDDu4%2BVjF%2BzGXzbYcOCcErmZ4XIyG%2Bwtz3Yt4Pu5d8Ii7AsaZ475%2FUVY1eojnVzL0JHai3MIuSegdwbJsOdoMJHpL94dDFDHEuS6Fa2IlsTjW%2BRlfzyU%2F1fd%2FE5CcyqKsWXPYF%2BxiCBkfC0NAPahsE%2BlMFq7HzAXtjnTaT2rdccqj1mT7OPfCUJBTcEB9EMetiUIaWQ%2BAisn30kIZtSaXS5%2FD1GysDX7urk20vzgJey3dGJovPRlzt%2B%2Ba%2BpuvpqQ3ARoH4Mg8rkKM4YoRQQk7Dz%2BztjWdMW5LFnEQzvzd1odv4Wva2J7d8zEdoedn4K1Gl4QyluBtY1gwVyzy7qxjkvpZ95SzNx8hxXiTVAApiiFv03L9SvwFV4bwWvwgXtisg18LDf2LiVlxKC0x%2FHAgRBmg6fxxC5Qw0ZiCxQY6pgHc8WWsk4VarVPUCN9dKFu7BuBYQeq67Y3ZapbFOy6%2B5vclV%2FqOQx%2Fnpp8HEC%2Bn6wdBVX7wmsD1Ajx%2BerItfvfu1IOdibOHg0Iw8CCco3sgkKAUp%2BdcSE1p91aGGgPXHRLENkDg3UwwCreTrztwgybfPtfoZ50uevFcL0%2FbS8cxcb70seLB406ne0hOk2YyLeLvASLfQWWu2Yqoz1Q%2BiczRv1Lunmaj&X-Amz-Signature=62c55077a07348894d459c48799ecf9969c8a4835e577645569f95ab43e73fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVQH4ZK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGv79EuP123RMyq8jPGB6kMhnj%2BRYqA7HIiMV6bybIgGAiAH3LnBJKb8OMvn9i1IU6bkWFTZF2plMeQlOKAvz5ezUCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMqi4coOGGNBzanJl1KtwDtNk4DG38Z3%2BxKvWNkudSj6NoUfs%2BovDeLBFc8lcJ6ZN36tWzKfBjEzqL%2B1UKufh%2F8Wh93G9fpkkVcnSwPjxOWvm1T2fD6uLSCPq2%2BNK0aBtzMb0Q8nkO8D%2FrNqF0VmevQL8UmdnQVybr2jMiq9%2FC4cj4BcK6Q1vaFk1EydJnbUWq%2FKJdDHAESvebNmEjUg0SwzwZ9MoxQfS66yRv1tYz2Me3fU3Z%2FlxZU9Ryb9QADuCeSimzOa7WPQOExXh0Ywuyc5%2FdJQxi2%2BgrlLksFEfupzlAUQLUzUKVVVTmzVSIoQIGjettmvAh93QArQIqK6j0vGiaqw4xK4gdvm0bX8jX8F9fHSwDfxClP8KZf0yXO6k1GNYAIlSUSbGahr%2B0rsoYdgTlUk77Pj2GjeDg19T%2FsE98%2F3pVkak48AUcWDrFD8APx7osOen6oIVUV7eGywaQ%2FDLtv4vHpLqnrDbCnM9VazafLwOLSgevAKATnSsymt3oSVowbtI0W87CWjJOQAZpAedl5A786Z3404e12DUg8KaO1ci%2BOfcwXdCWryZuKDgIeTeVYPDpmDf1vhL6%2BIx%2F%2BZyfdWQl0Hk6I61MpyfCNolUGez7sbPPuqGOg%2Bm9JB0F%2FcEIgwdx8toJF70wzZSCxQY6pgFKjnsGhXdyPq9RgxPiKLiLKKKitYPOGGhTuSk7Z3n4hcuyu%2BQG7R5j9M0RJkwIF9oI%2BhRXX1NYNciCBtfE5UYACLHkMDEKMHM9vIFC3OEie6vV68ECx5LTjU4mRyi4Hge4z7LM7Z9Yzb6UvSYqWyLbs%2F0haOLekEV1GIN2gmQ8zrrr8SWSi9%2B%2Bdsg82hbzldVLHusM3KK9r2EKZg8flOcsV7cd9OQD&X-Amz-Signature=99a46c5f46ba4a514f2089f22e4c67997ee5f8f6b60f4f109b50f6b41644488c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=c4a0bccd7c842a02b5f8b6c1f6bccf11ba83a52bd93c5be0c16198b6116967bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3FCYKM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDN7gZA1bmO47fX1O5NZgZDC4MI1hhdOj%2FKhuT8Kx8T7QIgGpTKZrzUzKyxfaFC%2BLe28oYWREbTE%2Be2VxmhP4P2ftsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDL116gkoTL7FNagZircA7u1VkrY3Q6EGGrMeJauMCX%2FKoBCx%2F3%2BNKPQYzp9Ld2tcyS4slhzw5q77dfgnhgThssHkT%2BU0GswSBQhJ35FLrtLFpsNVwMGbCADYkyrfUeduGuwEnsOUcnU6tRzwqwwXSjVuH%2B%2BLspTnW7STCeAgJfXWSDpp8fcoE7LcNf7MgCy2yTwtfRvERrWzHwux%2FckvHfNpZ7M3zvoBQAuZvaHKOhlSxrxdaSl%2BQNuiXj7sRI%2B332Tgn7RiK1BB%2Bpf0joYyDsFHz101JULS2mrbNIRrhJXnNHS8ZDawcnKKtqO3xim%2B%2FKDGBmxbv5%2F43lwvp8objCnCPG5uxQ1YlrcnJjdAzkoKQwrZoflRa1%2F4Uq8IKSxd0NZPUzM2F4sJztdFw2FCw3GhExI5x9ATDJ9RoA3fCTcmEm5Hdg0oxFl2kiYDFZ4ua%2BdF2ZJy1Zfrtr04LA4eQ3CALZU1EheM6m3LyH3Lkf1InTweBR%2Fl6YzWO5T%2BXy4nI5F1yjM4bwLq9mR0YS7pgtFYDmgeUbbfxYIdAb0DX%2FrLmsWfqYTHhPIVAjrPUT%2FtsYqgbnBzceV4RED4wq660e3fNqpUoJGL%2Buvww4XLDTBGiRvmsbRLz%2BGQEsiWJcz9m1eh81GSd%2FfXUzFMNCRgsUGOqUBPJnOLu65fmV3inNNzG8w4k2CayCLcdtmHEtPYIfWBN7990pVVuO3%2BweCToAoQVGcBIz2izoUABxdzfjG24nPbTmiE%2BnlqoFLTAUe5TdyV%2FujBeObN%2F72qQAX6X9UK337O5K0DbbhaLBHvvcvFIe%2B0l9rVDQsWe3yORiWGv%2FYr%2BasnheM2G5xNC0pCMH7AwlcgEW%2BdKlw4PpEIp7QHac7lS6fq88j&X-Amz-Signature=fc5487dccfd962d06cf2ed69d80c61c501809ff7c2ab8d3b1e467e666fe0c001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=4705f2f436ba2b6ac29a47c8282509f85ce74737b913a175fe2135a3aff425ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJRRTTK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIBJ%2BmiZrNEliv5r7GP%2Fm0d%2BeohumQlLAlY4P%2FY3WJg1oAiEAqdKDR0OG8kObr2PyO8Z3TiykoKXH4amosIU4o24El40q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDP1GPqnMJiQYiDGIZircA25eiMnzMPCMejBC9LwH4gtHL%2BqciD3nr8tlLLosaQ8OxglSJkrP%2F0yKQJhidzwf%2BD1FShprftXniyxDHVZFTAdGXRFYl1f0hAMjrbbAwPxWtcqzmtSBBNn%2BOAoN92grENlNEFfBDPMnFP7GH6LHzetbrSvDO5hsuPwGzwIkhecKkjhwAB0%2BZdGnhxTiWUtY137vOUCrYD54hV9PXfzb3EbUQQyFjlszvTrueSclKzM9vtn1eJ%2FhkSW96Acr1d4WVpG01Hc9LzDwS64AqcDtFTCQGvPvVLF7mlbPvFqiXZ8wwzsTyxal3iM5DSDWmyKPUH%2BO30fi2oTfdzxsH9KG93I55PoKtp33QIJcCXUrgAIFxMO0LK%2FolN7q9%2FZ7Wco5RivbHNvqNGBhAzDaFFzKBnibk%2BclEmaQprw0GgwYDFH4fiM0hfErmzhNxorIoYN%2BssCW1P2Nv6gxzUYur0H3C9cjpGEC9uxOIUKW%2BoQgf1o5Te5lAKR7Rn7DHIoA7PhjjkHo7MOrN%2BsL%2F0ny3MHnOt6ea9THcEc7eu49M2n%2Fd1uZTvQjei%2BcXszrLF6IyUlxf7FBTWP7mlWf%2FCgv9ibFrhH8xgTagclo6G9lXQ6zXdY%2BIHiEScapyijRuryuMLOdgsUGOqUBlvC%2FEGXUjPdQO5TDVgIS2jRHWKBHrvIb0kzvi%2BJ7WbgWnt%2Fm44MyxqfoNHil%2Bkl7%2BbAStZZsBFFo55wC6V1Su0Yr4%2FnENfgApFQGV9AMTCe%2BKKqNzKpGDaSh5WLtAFXlS6mei0WSPqVt1An1gnGssTEGpOUbpbnXmLK%2BXKreAmrK%2Fbyl5vtwXG8CRzB2qe5YtNM5SGOqVwBRttAYEgnjXaCEssyJ&X-Amz-Signature=dc12afcbb022650245c5c4f1a9a95fd07f5711aef76f157eb19466894aa097b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=025c4d711446835838707d3d1d9a93fcd24c9cd793e039ab04ae40b0db64bf95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR4K4AD3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIH6k1fzPbZDh0qvvE0Et9doCw0K7fEmJXA9FAW3ZSbj5AiBYo09pg41nhd4oyHNSiP2u22TetvmjrxJFOwixTfWzayr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7HDNSMGw0Y38Ii4YKtwDVI%2F2xN5Ye8sBfPqMHbYJIfGgYRyrZX46Npj5qHJhxMofBVgxtAabAV2btleNOGXzvdcCvS%2BazAN1g36IfVgs2Ue0WFbq3ODh5DTnqor3aDeSLnOmYwXMszK73n2pYktz1ZE%2FjzUJ8794iWIybFbcKtMtOUtK5wzL%2FDbCaXw9d50URzhJy1GkgmEQKRSN9fwh1VwXZ9DrcbdhrzQXRQQwDW6IlLD2LuRd7EskV42OgzJRHcNEKh396xicEJzSmJN8ZUfpiijGLmOuDUFN38W%2F%2F99nA0lh8UIdT3oYCXuMhHG4AVR0gBg8G8xM07zFmCp4KPs5Drz8uooBI5ug3XwIgY%2B%2B%2F8SsvUMbx3JuyoSkr0%2BTGPXBkgAVBKMfNIInwl7h4bUx31SZjffU7kiOijZ1zuzjvK0Gvu%2BAq2qbpnuCkBwspfRWkU6Tcvz2wReHJw%2B7HTCCOcKZHpFOuUCgCtJ0Z5Kw7eLJRmG%2FtL8xx5p6obzrC7yRacKWFJ%2FLe3%2FTyiCO%2BzuVxZu%2FMYQMBtFtfF%2FmpYaAmIHfiWtM%2FP%2FwF3cZls7zE4vVd1X8pQk9I68zCJ4zDbObjJAeZtlXaGOXIXJdOhJL%2FtOaxJLnJnUqz4tfDxIRSDJd8y8Dp%2BkAOK0wkJ6CxQY6pgH5iuCQGpNS2ERkiHLhBQAbkZRvKs04jlZUbvbwPkCph2A3WXzf0aKPWOyyWlPu%2BIaDo0wb8T0VEMeN%2BGpb%2B7Rjyr2404Aqn8wGOfdf%2FiUiSy8xoIkkOC6W6K1LP4zuMj5T4pZOvddVGYgozjlQo8Up0oJxOPqHrXW5h%2BunYdJOLbzjS3ltVrR0x1ziTHvkPPvpvWMqo%2FTWVVGx0AV%2FWd6a9ID1SgYR&X-Amz-Signature=780b2ae9f5e12fb53b0551820cf88c2cafada2f0f2810cec87aacd5614c0fc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=8500d21ecda67a9ac78d2e9547f3d2d5a999d786024fd63d8d92d1fef4d46b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJWUYIG%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEWuoxQfTwsytpR9jbK2IdU%2BeuWQPkfMmax0Iu%2FxL%2F3YAiEAoOu6Y6VVUo47SMF%2BuXKkR%2BZQkNSR2vY0P4f4kgpDBGYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ9yyjydzES9%2Fn7RnSrcAznZkQhNGPuwN7WehLS0u0c7Ly6J%2BjcbPd%2Begs6gXlmwaqO218nMgfsPy3zW%2Bl0bDCCipVtyYnghdO%2FbRIVi4mSq4WnBq0zrqAeTWLSJeTs%2B8OZvLCGrc0uvx8NbZXoXkaq%2FX0EjsKmH%2F4dB7iFNZ9%2BzGlljzOrWLRLswE4ukqkELs3V6L4m5YpKStngfZMt5RsbR6RxSjb%2BtbHIy%2BYQvQqkJ5eCkP01HvQ0HzlqcxVQfDIwxOAWiAGLHDfbvG8JCICCgZsr7wcWcdU7Kkht7ZHaje7PZ%2BzSmg%2BAhWkMwLtQpMX8HbJzCUAt5h1pT3C2KBwQf7xuVFD%2BWUb8A0bETf%2BLjcahwDzqbwe%2Bgr1gbnnqKdNAq2hdxXSlXFKw0hWM6%2BgcaUU6ClAwf4f54LimdaWLDu43wr%2F0l4cKWfFDu1%2Bs3oozRYWsrPoWr3a4Yp4SEqTSaCnXm%2BRUDmiu1JwppFH8sQfLcuV7jnYn0YZ1ZukWO4m6I6ewUdxZgjDsYlU0eF87cUFDrcGm0%2FAXqnk8b3sRhlm85syE2TCs2ErKG9V8AN2s4z%2Fg5TL3Py0LzdV%2F2dO8DB23OCClQ3msM4Kv6gWcnl845n9FopldRFSpLxueAFS6vCV3xw7faWpiMNyZgsUGOqUBHLbtR6%2FFs79ysbow62wJe7S5FyJAkOiR3PL17pvlLCpOYoUM3BBWmZY0AIqBvEqi7EalQ%2Fj%2FudP%2BHuYzCSDuKPLoaGLkI3mkaNtB9hh84eHgcArykUib8lxLw6vSmsD0GXyQDuHVkfOUuZL1y9vqBfLPEXUUXezeXRMGDBuNFaRDhZ0493lUFp9YC6WKbn5BZtZLM7NEntFi00Mvz%2F7HoOJVqrxn&X-Amz-Signature=5063c724245d11c9a0ca2c637451d2521175398b6251f09f8344ae65485e9470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYPNX2RQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDXe9c%2BqeXAD1JLv0jfZa8vBnjEa5woYEhUJdfGBRDCrAiB6gxzvYlJpWCYjHs1F5UwwacuP5wU4zTNt7AZTceXCXCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMJ%2BXe5LQkT6Nehu4eKtwDG%2Bb0PuaP0VdDYQmjC5aDh1IvuFKDXoZ73F%2F1JQoVTO0hCBN1MqFOmioXtIu1VvBEac%2BqPzno%2BdRLUyJdOThVbpI70YkEHkfcPTJgD6jZCLczEIyAusiquZM9nusHXkQjIVPblb4BiwoHyOWe3fqtqo7TuouMJ0Zx%2BMX0wcy92PNyYrLGqInPMqkSolkdRoG32%2Biim4vRFMNbvNjEYR5g5lBOQwH5zT7JqISC3VYP7DEu%2F%2F7nInq0WCsh0Yss6IWFxcPAzq%2Fd2o7X8M4gVqLNeB5qhdXV418GtuFZ9eHb4hN3B9JtHl3cFfT8j7pRqERnK0DrKi12%2FGVQr3xOy7sO4ZDyS8SVu%2BFxrkHrJiks3J%2BpzfuEa1SWT%2BlK5%2FbQFtRq9SXDbt79SmREiT0nIdMz4ivbr04%2FMilr00CkKfhUEp02OvtT%2FQRLhlhiO0Wj6vuGKR5qKVqWi3QLaeu9FspWc%2BMf7kR2gSDH708PIfbd2Fe%2B%2FFB4aOsg6MViOS6v%2FGThCflDsK7fRkWIZhXzwyd72yYA%2FgrEELKwOZ2LnoxZaovfVpxnfcmNkAMSxOlE4eKaqX88H%2FV%2FoO9605%2Fz3YFDV9NfdrExtsvvtOTD4WUrtdBjLSqmuY%2FTZN3q%2FkAwpJmCxQY6pgF303ZEqsZf6W8jyCoZXR%2FqCk1Awc4Uu8Xmh%2BxcGYgsykOQX12hiFCKvJtg31imwtfocJR2oyXfFzCnUWF24Iret%2B9q1%2BBx%2BJljVxuZwdlHJeNdrQl1H%2BsTcvQuA%2BrfyifzKRmivHcPM9rg2aM988VCJWbNoX1pEFGkCumisFmnLRHWcVMMpW6qoXlP50Up8ZSVPuO3FkgnadYpY62V7ieGS922Wf20&X-Amz-Signature=592d769dcf93e27f89d7c22b4cb85cf18f516b49b0af29659382cab2252d85ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PODW3VR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC1R1DjKLfPEz2EeT60p7NPMzHhLqTsEzGHXk86tvM2bwIhAJgctRfPh91ysEDNF7ysChJFqeFyUc3L6axmZiZ%2BE5PQKv8DCHcQABoMNjM3NDIzMTgzODA1IgyB%2BF9i96x2hCgSdMEq3APQ1cjYZtulKrvXC4sfPrmXqn2RXu7LRzconYwABBhjlyE8KDVKJfH2aOC8n3DorvtIR9%2BozEiyeexK4yb%2Fi0VBBP27UHKrYoDJ9d7iG6bFk%2F0J%2BvNcTXIuuJK%2FKaS4pz8tmZSrxhOuuuok6Cjt%2FLodXDuYexQ2YYVEdSEKmYURgdG%2FrWwtsnkgbUkG1cMkL7O1mg4N88QWZjie3oH9dyE3JsGSeeXTm7eOM1oF1fp7cQy%2BjMd6MWVIQxhM2PKI3YKWhQigNHOJ1Cv84EaP15buK4qc%2BDmWn3Ykt8r%2FjqD0iLbxqCiWfGpRKiaQ7w6cLJiZQevpCbaHKMdw9Zf9Tw3eBy21JbHkOpEGgR0ZRlKG96%2BfD6CCRevof2LUrkzYYcm%2FkaBOHQhMaO1FxfPLOo26A9hXB%2BOfI2Dmdvv54yDavV%2Bk9oY%2BtFHGvapcKEqS5%2F8sTyETJj9V87a2l4TWaXoTEoRllZ2EcZJF48CUcL5CU3fhQOYgAN4bhasaAE0kkAUAL2Iiu9X69%2BYjvMrztk8Qi7GuX4LpQGCy%2FbUuoZXgZlUiMwb%2FwSpn%2FPQfwMswbYYWbKyKZ1vWkfHTYBU%2Bm46DqTAvjSJLMB2OYo7CJCW5k9T8kD59rhsL5DxdXDCMloLFBjqkAQ%2FhiLDP61A36D%2BMaxBR0Ln9J%2F5nSs9z9O6I8%2BEGfZ5naCBnKrUtIWmWg4cmud1qggme7uPjotw4sv8OZQ4zjgYGkdR2UFPglPJgfcrPrCKAPFWeg7bsELUGFC7hdoN8H6gXdc6m9mrylyI0B9otrXbyksRnYBvmMrYfMogMfsmbZGa%2FW3kW2F6SBwnAwpHRNANxsz%2F0Gu3h9PWMYZb64pkfBzoo&X-Amz-Signature=9bc8253e129d87822c597cc6a91dc7088e4a4aabf9c8d374d2936d5b12d5f47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7PUDXR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIHtoW7UXDVyzs2DS%2B6ayCD1eBcIuokR7S%2BUHHv0ZnNB9AiBoZoCR9WT54%2BEp0mNNutLATbBd%2BTAxDrBAadojGon5zCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMgSgBBgGS01TWVt8yKtwDpsOfxaqMm95XILtpv4Um3e35Ub%2Bmg93a85p6UASPqw%2BHHEnPBBMHm8dktd1743O8x%2FdVrFMZdPiLhcA9aBD5Ro1FDOP%2B1peCd2DrAe5cTXzxfFvqLFgP1mfz9y80rrRDUbP9DxX9kClQZIg7F8ji4KXvS4bxD08A%2BqugAlHTixoia2gLfSKRNBbnUvhI1uI9qAhs0SkI44%2FzwquMdfokLsGVcoE%2FZ8Ic%2FGrv%2B%2Fpdoj5li9gJxKkoJHE2QqS0Npx9AM7ydIGo5E8m7B7N828DTPnPuhYytZ4ReEkyavoaA76RS2q4cF7qhP21CY3rgK2DujAL1%2FwSW%2BO1xr0Yb1x%2FZ8av8%2FT8tbScg9sbRROYdYOQk3C36C%2FXMzG6d8hfJjbsooe2zZDzCgjTBr42uyM5LWLxm%2BsfRKnEKVOhan5EgU1GNyxx7AfqeYME6lAU5oihJ%2BH9BJKG2ob5zhvByvC3cLu%2BjGRcyWJ3aqIDzP%2FvfEOZVqkJ8nbzzUQszKPO%2BPhji8KiEvmBvQoFZ6%2B8QG%2FP%2F4wvjQ%2BmbP1ZS0rVWRDFspl4XAlIAALPAfun31BWF933DsAavwC6dQU6J6M6rrcx%2B9sk7SEiJm0pMlG08kE3PQnFLrJJtxMQsafg5jswl5qCxQY6pgHd1kcLSDYmVCt5l%2FovPIjOHJM8Q%2BZoe3lRtEWsXPMssyoIsi6nwdpwK3d2vaOqDRwEcaROYrmXZiZyG7AH9F9GAZnPP5eB8fDRaZE2CjL90oJ7E30%2BTa2PG2uIiCnEw6DHJPJ3NnMsRBqtZmUvosDAqfKHPJXTCvStlyXt6xpm8pb3QMWvqOlR9Wbd7qvyFrla9A3op0JjkokU%2FHfCs1FS2dxNY8a9&X-Amz-Signature=69cf9bd2eedaef01765df79826a669303edbd7458a6941a4d183cf6d4ed3058a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZMGUZLD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDkEv5AxPHv5tYRsi335X6dfELpEiCKKZvIdhjP%2FceGpQIgDhEaowfkSYC76iqRnG00iexAFTxezrlJ1hzA7K46ffMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDHm46ST29rNHXFQa2SrcAyuId0BSGuu3AbRaHOvXBbvr4gqpejEXIwrPZO08HZT6DfMi9Ho%2BKv3xUfAJL7ZUBY5ign4mT5853njV3BFVKY59MTtVbpw9puAgTSEBawy12mA%2FcSVfGeKZufJe1ibWoJTZjg%2FwtPa5OMiVIQ3wmnFKg4lT18Dq4DLE9Q%2Bd1qlwW4z44AujyS8e0Odcs8%2B5dUz8uXGjz9KPo9fZN8dqfyiyLLZ9xg%2BN60%2BV483ZbEBDkR19ntSXlmC%2F2e0WS6xyO1N4qNpv%2F29BaAEI%2BmbnOTgdMgNIlyIP6g7Ti6i%2FSvhSUnUmCsaQk54v7xS%2BELUO%2F4OM%2Bdd1Izk7HXPYo8EhOnPijipYyBgg7d2vxzl%2BDak1Si0eumA%2FuFCbY9sDxUzmRLAsqfeo2c6ptErV8YgEFJUg2GPmNhmBDf2hyxGRg4vMei%2F1vRsooS2A0sPPRI5G%2B7epZgRvRrOoF4WkJNZ2MvbNqqYPhWfYuYvOZ60E0Qu11RG9spKhdh8oUkI11NxIDzRjdlqEq9vCNP1TgmK3E7ET4si7bcW5NomjtekSQ5Q0NqCkf1rBKYVABgnvKYTrFyKMF2vKdRDRaDVXnoRzLjpaMjDJTrO%2Bpm6prJg5Kg6btEAkxzNIzHJ%2Fqp6xMM2UgsUGOqUBI623IjdEwnBOQa23fTBJh40GATHyXy6deXiv7BqMfEzKV35dT%2Fm%2FiNoUNYTnKmCYT0d7PlrAVsC3Me0%2Bg%2F3BhNIwEihwgcpGrtWGYydriMOL0XE3NWaujykMbYTUvHJq%2BMIB4m%2F1DFt%2BoeFbDKK3sZLBsnSGx8FdQOLTX2OQ3Z%2BjWlBcvb77alG4dpqhqHCYgXgZDcD%2Fo%2FiYBBXYTQjFSnsAd2qB&X-Amz-Signature=f46555f587e62601875dd7fd902925aab0592a0c007d01728a8749674fa91826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=1cb474d146ed3c8807b7cbcec3f9c4583e7690e1de6ac17a81054c32f8483443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVCXQA7V%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIGmL64k2nFHcD4xd6wHYDkYUg6wlMbX64IFAGMv0a%2FilAiA0ghnMEJlqgq6feBCvkn3QcfyCVFq059ZSYurw%2Ffmliir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMWg9oetWGGq7wO%2BvUKtwD0RZZLcecwQizyRgf7p7zWb06mb8qIiYU8yzfc6FQ8Xg%2FmdqTeAXkkyFVzyUrsLRuvlzymwGGhsNmENw9EIxdNk7Uweum31ILY8MThK%2F5vjSUp2f0GYXlQ6OAe0vkuvV8Zas9or3rTty%2FSZZf4K3VfLHkHfQwcy6tUwiTs09uT7m3DJ8%2BOomoHGsEcf6MsbCTppODdwZCZmc7s5ryd0rqIZ55vBlSsz%2BYm7EJo40WYOv6KAIRH74mgYLEr7Wh4MG%2BCzA4wtOdm%2B6DipTWdcOXkQtF%2F9e%2BBWZFEQodMDeod4xcE66nfrvKcHtafQZXSwyTY2SxCVPVPQAglO6zhUwsuKvQ56pOCMUUYv19m9EMWuuGn74K0qENDuRzpEnliB231xsO4gZKJGQuaiZsdQto8N8ZOatSlPIdyJf5RefVSq1X2aWUQBBzT3U0GekalI5Zkc42UWkFj15aBBubJCtkSap1YsjF0MFCXl0zjIDv2Jd8xOZn2fNECMv4wQR90F2lAKEP6dLCCI%2BueCGc4nMKFpsHQEpNdWLnE%2FHyzVQr5KgqzL7BNGLt0r4QyAK89RsCWzTGBOUXD0f01oz%2B5lmEVFTOJYChSLZMv2Yhg84dTu4IhrIpN6bqGFhljw0w75aCxQY6pgGlMA8IGgC9uC%2B6tFORCS0nBBnE%2F%2FMHBJZbRed9gL1KkzfN4Zg8Himm8XLHuKhUca%2B1Kb%2FBlagoyAGgX3lOBtt4THzjrDBclMHcXMNHWUB4VvvEEwXegGjPmJ8XQFjFYUiVcxqR4ihtkSOTlqWKKx8aRGzvRBLI9mXqn1kIW65sHinEKC5NQdZwf9ibgZ3Qj684m61kIglZ%2FxADNxqi%2FeFPc0eQh9fK&X-Amz-Signature=21f8819c8af46682712f0823ca84dbcd8e1363223b26296a7479c8974470f884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=436f3b65ffa997d594ffa4fa89dc6d0974e3b016bde7e9429c36c78f85aa3f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=e86cc31a57682b78f2e5c5c6addf24279a88eef3b0b9e6097d819172f4d3a42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=399322297d8419e10938a2680d6fdb43847a931a1c905b370be9840e4dea72f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=d912bc1f99afb3204cb373760310473dd09df7c058e96ca9112cdc6b602dc1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=21576739ef7590c16b024d42f461ddf307beeea82eb11b9e6964b982a7d8ce62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=20d5db5d5a9962274af614d20fddeb7d3fcce93918bbb0cf5e393dd5e47c0737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=399322297d8419e10938a2680d6fdb43847a931a1c905b370be9840e4dea72f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=4ddca3d74fcd257bceb793d70f90605abcb440920bd9dd6d1c82cc1a3f4c87d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=8edb99daea48ebad89cce5a265dd19d95954465f9c0e98cd830d5159eb2bb6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL3IMOKN%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDBAyWAO3Q0V4%2Fe9xNYM3OXIWJdrmFjY%2Bukp1o2brhEugIhAOFaNdWNNpuBuKl2eg9oxyyZyzNyaXlbImoRzVjjOSU0Kv8DCHcQABoMNjM3NDIzMTgzODA1IgwnPMsGKrE0ByZ88A4q3APRbVhLRLcOGLxDnOhYWcrW%2Flahn77dyayAvq9k%2BXPOC6TpNKuOC1d4eUGGhz78Gv57iKC2fgnDt%2B0kS2VT1zoqhzgz6p%2BzTlBicnSlx1KBW%2BzhmdZiWPQeuda7Chi6eXClacu4LDfF06QqA5B7hBloUyHmz98QdR0yXGnK7OyTO0SXzmHXAll1%2BVz0MXc%2F8rn6%2BHMvVtH3NWINX65L%2FX8J9GCi0Bxu%2FMEP%2BbrTkRPLU40aLdhLq2XN%2BpwCpPDQeF6EXoQsXnODA4wfDtzhd9aXqyGt2hiTiQEj541tIC%2FXMBai7g5ILvfCpynZiR8ArpKFaJ%2BtpZXDtoon6hgzo%2BhOjZ0g1vzvsRrbQ9porMvC2L6eo8tjBZcKbswGYmJLrQ%2FiioWYOWvc7ix8rCMejwTHjL%2FdqaMc2CyaykODpBrG0GC1%2B2jOITKWABk3xySCa5A7biNdNHElin7YMkaCmuV7tef%2FjA1laoLL0WWKTUb3l%2BJuY%2BuACwdwn7zhmMN6gzsFH8DyquBw5xTg9twiKSFMQKfAhzpVIFzxozP8oc%2BDVO30WKQPDZEWNsWLQZygzmewtsYCllsG492Kd0sokDKivlp6uinzA4F8IKmHPNLyH1ZgTVXfk5L1OIV48DCMloLFBjqkAZKPvzWAQ2LkGJHd9OWd1cJ2cViItwNWYb%2Fvki1BigOyGMBQtxAUxUrodKYpYZ228DCTjIgJYSGK4Y2myjP83X64DV2Vw164ORwfoqAzyKweigNf7BtFLUkQMnCssHBBjAhG0fKWFSJZFis8Srw4394nzYIQnaq6UEKd3V2%2FRvHJ9RSSevNXHxaswZPN%2F5wsDxRYsMGh3eCIz8r%2Fd8b5PYoTdDAp&X-Amz-Signature=820d3f6ed5015f51eed9a543d4a4b7206920f220f384926eac73a33c3c41e441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
