---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-19T09:18:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-19T09:18:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=7ac827ad8324fee0f9c26bace7d6c819c7368ef9532e2936c9be9d44dafc8d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=9609c7c9a9849891f1b269bd5e43316a8b7b7b99d9cc652ae1c95576de648151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=4cb47c1a9708369874a508a2021107ecc2c5c0fb457cd04abb3538e9ae895a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=39c3f6303b7975887575fd6bdbb3d20a10ff756df69303b622472789e527bff2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=079ac75eb29806082da9b500578f7d1f7bd46b11b1f2af414d98a3bcbed72809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=9318b5b90a7280ce4d0b152bb6eed368fd0d5966f26444473cd175138472bea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=68902e1f9f3bdf49a22a96c2a5989903d3c9325e2d9942010ac9077520582aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=4a3de99d7dfd4095652e91f61fdc975933cb39354662126f2c1789cd36511a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=aa5eb17292cb639ee120345a772f891ca212fb304feb065f0651ba09876f2cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=403b94f0dda018ba66008567fd0e2f851aa2586eb1efaf701ebbfc5ab03158a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml
<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7IJOH2%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDdFHHIw%2FB7zScj%2FcBWVBty4wNs3P2SODz08B04ZIxtigIgGRJ%2BH5myvHm9W%2FXn3j1eVhZHvMoX1yRFkbbsoxlUK8cqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDNc9ZPU8vMg2JsAiCrcA%2B%2BMukMnVPpEgMHleFgrs%2FhLdvvOsvNGu5Zkpc1hHvai%2FZ%2Bl0teRm7Bpl6GXcK6XR9Itf8z41rdUCE5I0EmxCEEO2thkhelzwKG7lgZ93y8Dhx7NFXobwyxKB350q74E5fakRVY9cyYw%2FJxczOIbMWtuwO2%2FZlOjp5dJm%2BpefFuCB3q199TO4%2BRWQuvMqO98TOMTUaXaFyDowVHMJD%2Bi4vlVLn0c392bjabhlcI65pLDMdCl2GymHLr%2BBaHCCpDzd5EQu4vyJWBW9HCuWcrhji1KjKtH9ysfa9Uzk1Vx4%2F1TvIYpMJZIrMT73f9VSAxsDefJjEwXPTgfFlBkzY59%2BTB583SQiTbnydnLeFJFxcYCJjqtbNUnX9tt3XRp5RtmOYThaLMiMp%2Bajm%2Bx3uqTSDMuWhRpSv5SgEIH6vmkQPcZNP%2FNOi4Z4JBQGPawure1sXy3WLiJGF4pQHwjQmCTkQeA415MFMmRTGA5mcWp0XnhL1kt8hcq5v5fquVYLcwWNFyMkx8p5ndpF5GK55ZjQ6yBu3OVcUzxim%2FQk58gxI%2BPhJk7dd021zLUrTy5bpChVTn%2B%2BoaO0JcWSWjPlMoeG7%2FlW%2BkZNYGuTVreR4KKf9GAiSE%2BI9nyJs%2BZzEaHMIi8xMgGOqUBCL2bw8uKV5ZR5hyBlR25vkQoDlO%2F2KZXqL6eYsQ3x2BkhfIXHhY8%2Fak86Qz1N%2FbuTBXdW%2BhSqW%2FTG1EWEvR0RvMdZA%2FK%2BJzr2rq8hjl%2FuEKl94Grq39h8IDWa1jEmRZQwgS0toT%2FVtkVSrbMDRrEDaSkFzzV8hB4JBiMR44xXmFFb9ByaNWRZSON9%2Bm3%2BDeqK3ujqcfko9TnjYDg5N1CNn7swl7d&X-Amz-Signature=62ed5e4719093eb2a6a11299720c61e10344cab38dba4abda9d0f3b01329cdfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU25CMYU%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDxN3yzhiCmyvhjCBcfJ0qmVGvgDxOCPW2zDax%2B1MEIRQIhAJt%2F%2FxUy%2Fkfkq4iT%2FdtpAAIwPwJltExzwBYtPJOdEKnqKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhlu97C5hp0hLOicIq3ANap3JDua7A2jVomLEnOwjgcYEBI%2FDkQ5fZYTqOLh4Zq5JGxXGlET4BQerXkR3Tc8GGbW%2FZpdHT4e%2BxGkbRmJeeJe5EQcC3iJhG7qkg8fayL%2FbA%2BJvreKJGCDuXjF3XO6Efl5hArpG7jQWNhYUw1%2BaNdM2L7VO5WaSGy8FXFJo9MoEamtSiKBt%2F5eg6CgWhOORwApF5DCHUjn797RdykKD68HpIa6NZUU8LiRaz25IJqzCE8HH70WQOWP7lsEs5hgB6uii5U3QqrifASuNECCzP71GeqaYFh%2BpqY7d40gPCVQRMEGchUoltP%2BMYqio5bKG8X4e9eF1xysyndEkMPz6RJP7Zk7mXmizBwtmevGXf6Voju57C4j6n1g6OrHN4qo1hfSzEmhquptoh17M37c5VsUeiW9hbi7LpjEKGlhBTnx4txRvRaYDsSinAoCQAb8vnmwjCvgSG4ATVDEw5VqrpoGbfyn4wMAHJJjDpfbi0%2BbFZdYpylJtfFXDJN0RknJOz9Jq%2BQvwLUdtHLCZkETPKUxOQ6qkcyXI%2F%2BonNOHNlyAL18YLvOeCDU5iYLx5spA3MX%2B%2Ba0HvJ%2FLGRyQZRPooqWz5%2FCgtmjyhscyFIg020tWucO4wQP8wNZYEvDjDIucTIBjqkAYSikYl5wASwLNFaatplbVvSj508Tn7bidSZNPgxHvAGvfmuC%2FHnVIGXaGrDg2cZ43f2ZqDydOnjAiP12FngEf4prCHk3rhNIwWjx4LUwXEHNI2ywu5jlh11in2bN2BYlGtM4kx7SzBhZVSi28LI03KbN6zZApdPVNzlTSUuFJviNJXmwnjK9IvgBb1gUxtYz7qUDP%2BsqyIwiusJwllXBJTcxEYM&X-Amz-Signature=c7da0a6f6dfd9569270209ceae071613ad71c7e6c1afec0ba60d301640ec599d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
  <summary>{{< markdownify >}}What do the variables represent?{{< /markdownify >}}</summary>
  
`base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.

`wheel_radius` and `wheel_width` are the dimensions of the 2 back wheels.

`wheel_ygap` is the gap between the chassis and wheel.

`wheel_zoff` and `wheel_xoff` is the offset between the z-axis and x-axis.

`caster_xoff` is the offset of the caster wheel (the little ball) along the x-axis.

</details>



Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI2WI53W%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDP5SDaRgZS23xzQirA7lpfrICW169Fm%2BPFiEARLYRfIwIhAOuXidLz8%2BmGXmEx73f05iOYkArVlX2csUUmnl5oNM62KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlAzqW4svoM5yO9nEq3AOtLvF7gVmMt9oLUq4ad9blClXz8gXzxbbRRcx7WfA%2BoK1gLbuWwMz6zUQk7lJ2wNpQC84bQ12DkC%2BXbPMhOf%2FK7SbLw2tN9FiFEKk%2F31XhqYu9RKKOo5k4xOKF51IPqnpG8GuhA6E4KWp9A0fEfILKodYHOknm2VUSHL2pQww7nUTsWPtRbo3SXtlYotLQxaLQiD8SQfB3ae5mAFrsjCmRCYWfsbnapigrNIer0tAHvTJ4z5WH9n4Awk95jRxvX%2BqPxkE1WNj%2Ftc%2F70TKcB56tDwdGgzwt58kai0deuWvUt42DsWl2Ea7xetX103wXPbSgpfAe84fOeTRuBqF6hwZsb%2BQzOTa6JJEVBQa1vuu51DFCCduTEOF%2B1KeTBGwl%2B91rs7bS3OvJZmLqQbboGfXfj3C9fJ2gKokhc5pcqcaDXydMmsGwVTzUyw5IjZTc3H9d83wYAf7aKch3qQeUF1LBIh89aaRQuxlGoMrqGj4kW%2Fm4si00j9IMRf4oAhGwQFTrN8JsFC1XVv5hnkg3VZO%2F2oS7ohw1h9CWBTAn3w1Py3YvTZcrz9FqVd5ATWgggsYj5qXCHcOpXUEMFSmXdzFDr%2FiJfKsNqPU91aOT1SuJabipiDA6OnWCsG5cYjCVr8TIBjqkAY4hdzam1bPPUAFmpKnKMHlC%2BHK2cTyJy0728umdjGnRsz5%2F58VGdu7CCLXxKeFfRROJoO9o4sHEGwtXVWcCv%2F5jkhv3So80ATpN%2BaJlhc41ghcuHIoppc4pa%2BXKCQm%2B8%2F8NmgvKWWk1dcacDdBHsJTkFp8IpNqzlKoWsYFFTMSaHX5Y%2BosJv3mAgi78TY0SRjEdM2h3%2FBHJBI%2BNQKZzNBPk0GhD&X-Amz-Signature=547948dbd826bbc8ed0db54af5432cfb4eeb8ecff8332ac1d663e400480ca1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=30fd342ffb39ee53aeb4e8095d73e57f88d4b2f0b90227e90b0edea2ea8f4281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK536NW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCLHgec%2FUBq1n898IYbqGo%2F0L3ioTniDNgt1rvHzWpiQwIgJbBtnIzOMF39fxJwn0y31SXn5F4SrolGlEsBadsi7H0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOjv%2Btvk5d%2F4qkwfCrcA99OCKp%2Bhmmpebo41Vb2O2QM9kQafYSnt0VqTIMROm59UbXsbP1fBY13o7InsaU5rQllNbOBb50qWmVkJ4T555TEMDfAb7yBkgjkFydPeRGi7NNx9Dz7%2Foq8nD2DbatuXb8SaCDmFN2xD4PQKjHuNHv%2BQCy8JO9wj%2Fa9xa0AIDM%2BSise16qVonZ0MnVlDUTMdzYHQB%2Bfis7q%2BiQRuKFSp2Bc2CH1NwGoT7Mv3%2Fbq4JMXTqhF6aRCSZqc31%2F4OxJXkE42o5fKHYdpp0jQpDxGHIJUfVcLBFC%2FQTx%2BMTBgCgM23igc901snBpwOK2sSZYIo0rtUldSMIkvvymhXzKePtTT%2FHLIABU8XiHrjzc1qDY5Kj571sHLPHk5mrR5QXnNdI5lWqMIxqCGEInz44uHNVhw4gVsFTHO90y%2BpziDCsbZBeg399sJ6lzcfXl3%2BQBsis96WivURDKDUZlOMKqr3zWJyeNwONQ6unOkop%2FaoulxlpHVY4lW6VgkY4VJAj361KQIiOhl%2FKppiSBB1OZ97gSAogRUeUnujXdHGl759TefwArkkZOjUzQ4JqWExxBPVFU8eZnXquwEUpqU6Ujty6%2FED4xuQnJbWvko8M6YSHYUE9RNVJJjTg%2BQKthSMJezxMgGOqUBv2lTDsblfcARPW37ztDJ2zm5R5T5XGh1RmP4QvsC58gpFQtG0xKW4mY20doqK1%2Fta07BGjBE1%2FEg72wydsancOV6lg73cSy%2BfPr0fEJUSotAL8z9lASc2lMQTYH1%2FZWKvOrfttyzZ5Q6PaD1jTfT%2BLsPrhql8qQ4wmUIsJfMi%2FPFjF2hxDCL05pMhVA1lqqdXq%2Fzj%2FAYBLR4AmMvHuWYh5sSx5Gj&X-Amz-Signature=e394a50f9cf408d9636256354147d2113a5a320547a3a78c2167e439698629ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=fa682abfef9385a50da164b63c2772e912ccb3917fe8c2a334a8e0ef8557efe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677WUKZK2%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDxM0UoVWJFh4Qh5OPlqi9UG1cv0HxS71huaTOV0mBr8QIgLzmkhN405NwModQRZy7GoXZ84a%2B1weQqS0uKwJpaNYkqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHLXO6mioZlQDwyLPCrcA6%2BUOmZrlGx7vxoIoDLHIA0FueGNrH3%2F2D8X34nYXcXBSuoCma1%2BjIqfdcMEIuf%2F9UqPM1LwXUwoXPU%2FPFuk4MeKJrUjeG%2B1uiil10EybvyTS%2BkC6lu6jz7EoQst7SWdL%2FS%2Bn1DtSl2SoSQN4ZxmvIhtIvf5kToo450JHSTFmF7nJhOSWw%2BOK1vA5vP82HiIF%2BUS62IbsPSrjNeszhJtWJL6xkvsp40wy67BwcIPTRQQoT%2B3QCGODCcY%2FWKXIyrVRRvG0hANl%2FO3%2F6Pu4SBu4oE%2BlNpykswRSg4fIllrbVUxKsnR7sgNq%2FBPQm0s5XSRIrFyX5rlAIdVt5H3eHwetcyhPnTPHqMuaWOVoL2BO7a%2B%2B7XbcesxitZnru8Trn89FTJ9ivK9KO5bbINZ3g5Vy%2FTPjvdqPW0XNfZSI2ACbBXVFzEYk4gwQ25FNINGHlt3GTa5OCTuHTz93Ne6f5A35Meom89Fsrt2kSvBl7YlIO0%2F%2B9TDc7jowItBIsLi0TJAYgshaXLuV44NwZAw9Y9uN9ADzLqUFXUb59y6t5WZM%2BNyA11fS1RxCnCqxRyiEcaMr8WqeFS8aaFWRxZS%2FRY%2FPfcM%2Bcm7fmeovFjIlf9uguCdDydwmr%2F0Caf2RpJcMKu3xMgGOqUByg35x6oSDQENXkq0twjkOKZy9hBiQsR78GPqagFux6OHUlCCcNmCsbcyxARkCGWmKGv0Lrz0Fe4zIesHe8k9QneVAqiS%2B9gEHT0LiFW6MrUQTOGw1sTA9NNGDlZIbySdBsRWbmgE2VU5ZsZ9dFS9np1b%2BN1O8WvkMSL6H8oq5mBPr%2BE5DaC1EUUN%2BH8086sos5v6dJtX%2B3utwW6QJmnGRxMdx7Ef&X-Amz-Signature=8bf32fa66161f90a741b201262d7435544d0cfd4a4b271e7dfdc2ec5df5100db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=6c5f2b92f91d817633e90dfcb4ac87c71417b57748a0a10c457b541aed9340d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSRZWLBJ%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDTekdaafDHVayhPm6XaYWOOKlyQwHJg8NT9gM86K%2BknAIgez1Nj8bWocaJIArbW%2FCBJNfmcqmEMTQi%2F%2BxHN%2FSFEm0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKB%2FPmKCD0x%2FuI7jircA13Gv6Hpwq0WJdkz4O2gDqo5zkhYW4fwI65iSv%2BxdxH%2FWvLsltDYDTPeku%2FR5lwi6NDf3BmTflA9isQARwBsrM0fopd46zPl1mvGBmPgMuhpr5d1JnfmY7gkppknUgy3aFA2VSkEh%2FD1kG%2FnOYHbq64j3iucPyRahEduB8G2vmE6vcPNxmjr9SxX0yHLuMdTbK0yaDA4vVyc105yAUGD6z84fBq8Njea%2BCivh6gqvTgUiNVtYnGM8YkRy5RSsxlbrywM4GW1u6%2F%2FpYPFZqvr6w2bJR193y3Zknjd6uwDQGQckwTGVmL3tPiwyF6Jf%2BCT0XT57s4lBqvVqu47DjYcz5s2x3aRVOQPLoGLtOhVsvsLSlN9ftH7WXrjqJXc2iBOYc8aWXhDrKdU%2Bzvy12pNwtonUTDYzgbKGR7DDXatPdeqQIwhoNajXtPsrvNxpWHqasPFnkYheNqN11CyvIp4SfBTQZAxN2wWJDfcE7I2A3l4iycHleOeDlzZ6%2BX1rjlce8tnli%2BmdLzvIL%2B6GOl7oiu1BcBqrQaR9FKMQur7lI2EF5EDo0zpSq9KHwRz1xN41RJrmUzkMGvwTuIO7soLUr6BM%2FjbKbiWiG4pQzZQtniQCvkvsJUhlsmG7KdMMPW5xMgGOqUBS4k5nTSqP3UGhwi27GZV5Tuzaj8HJoGsjxMGASQj6FbLmCakvWk81dv3ue0LrFiYkmxGQcl72OfLs0tz8rpjH1X8%2FWBH%2Byy1J%2FM%2BHj3RrrxMZWDVw7EnbEUMmKzwp7dPA0OqwBC3csz%2FRWAofS88S0WYyjYp0IboOCoEJfv6V8EuJTVS3993Z3yfVeTeHctU%2Bd7y7HCssLok6AatT11RhFk5Yc5y&X-Amz-Signature=f3ced34b1684af652d3f61d1a002983eb2495b847f51c27a02a03b281a938ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=ce8abaf8682b61e39018672c3980312072795564613d952e3840d400fb82e4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}code up until this point{{< /markdownify >}}</summary>
  
<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZBTUMYW%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIE1GDXkW%2BBa100qmEaPtnxyHAsKyUB%2BZSP5RuBZhqmCZAiBskV%2BsqTO6XCXZ3BdWFMZx6xhaLPhoMvVBpMsoG6G8diqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7UWL0FPbZiaWjrWSKtwDzZMKwAuSghnX50TRE76xu0z9%2FDcUuwliBzk%2BGz3tBZgZcdaoOQ3GrqDcP3%2BE4704Oc9HBFqpLBfjq83keYib0uwW0cIETVavYrsVFZ43W4oILDJVpHbTX5FGZ2vECAvDpdozDsoSjTtnmbmt4by9D1Aqgy9Xw0F88oA%2BGp1WUtHCN%2Fsm2eGqKd2h%2FFEa%2F2dLtWTNuZir4rIuRzAiQd9ZjxmcSENK2wc%2FORLbhdF2F3CU7gtY4HEq4LU24OMnOX%2Bj37fiVyZc0ETogDuq0lbaLHr24FMF9RoRJ4UXRdbLtLK4O6E6vVal3joqVsuwrYK2bTFAfzPT3Tk9BI9doQdQBmMLDdIhcfZ6nYEFyGaz8h8K3v%2FTw%2Fk8K6uQi1lrxtLCoE6UJ1TTB1SKusLaeYTVlIzplj%2B%2BUyS%2FsHv7lFipfB%2F7cMa19R0uy7feIZVh69CjYUsytfDJeSGsSnNlVakaduc7eHs1o2gToeVkE52QKIeZm8iwqwec%2FEmYxGhH259rFzCZLfu2y2khWC0WVqlWBNeUW46e%2B7usKcNCHiYM8OH%2FwSFRUi79VZjmELT%2FhfJMLFkBWoslNKYkoIuQU25yWphZ0D90bcSik5%2BM3TpMW2E929OcmZg%2FWgMQ08AwzbrEyAY6pgHJRm5z5udmmcyVh9O4DgnV5ahyrm%2FCbzLPEeuSkDLfmEw99GcuImhHtp3639qMP5dlIV04Yj4cBL8abSaexyW9XEARmqkeRyhPyNQ5Rwq00xzPVmNpHcvm1kCSSGi0ajzubCn09%2BHduoU8aXZbjyNdtsxOvZcrAXIWFRe4cz3b88Zv7tdKOI1TREPGi85qp4WKGR%2BYaATNCdruGfo6XOmia7C42OBY&X-Amz-Signature=09fc449006010f2ec7dc72083f3cf596134d11fd441cabb5363f2f454751f9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=50ce2c8077c11fbbd9f805d3acbbb4fd2f4f72f68a59368218f114accc2d9311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-16","18-18"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSNUFBP%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCJ9APb1zFdl1M7lkw6odERf09NhBheumT80edPGkj4awIgL0lRQNZu5X9Sca%2F%2FjCByTcHEYAcP1sVgXYmLxbuEgxwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaw0QvjwPEwPervBircA3UUVXkWxa2wWWIsxTif7m22RZ%2FOj8a92Nq1bstXdYlzUh3dQKULFNULdHWCJSGGXOlpIjlpllla4JtOpPoNdoZAmP6sH%2BeV%2FotRnO53UhOyNJMGIbhuIj4zetq4Syw2Gg2HOdU9mMSDg51nrUBVlsSr6jOP18dPL38rouT4jn3X6nAfmyOqCNNFNJaTwsWiVVPapl3lnLAul2elKQSY8ZMhvVUsNIrwqtQTmhlqCOrtFk%2FKqJ3HT4Qk2VqUCP5xzhVHq55nKZzgazIyDuR87xPfqWDLFlf3XaO3PjOjed3BvgFFGdrCTrdfaoMUr5PSmKwLpwum6frYdnDvhNozz0I2YWH1O%2FCkAx204Tfh%2BHHY%2FmqEUArVpcR3QYuu7PILEiDBgwVP4XFRSSoPvkg7hhb0SF55MPFyy2xegqO%2FEmLltR8I75wIDjf4flw7FjBO0q8DODspzybYpJXwfhwylw9dz%2B4Sp3QyofYHvkWjV9Mavr16%2BR8RxcjcDg6FlA05RSA6UyNdV5Bi3MziiUAPwFeCvQnuY%2BjyeKqXGxwWbU7NBdA%2BUTWQSEZdbDK%2BnYQchYur%2F4ajA%2F6Kx7MzaG%2BWQxlARoomjfdWXP10OijdUrWC%2BXbLpZC91tGKmYn9MM26xMgGOqUBZ2zwtNtrALzrRMYjYmgTp%2B0QyMHiIUpc1zq8%2FTvQ0ckp2ZeM1UyBW7OvmZC7gwBxb2lJnFIXUdVJq80QaJ0jY6yZq06ybD%2FF0%2B%2FDiR6LII437MXSekr26nzrAOXPKdUqisSv5vrfib2%2F0jJMv55wsZ5%2BbqgcafbyeRCQ06vD4y89vLul3IdqOlgbluoAEeecPoFjBumKPNzz2K30FWa%2FqigzmR%2Bs&X-Amz-Signature=ac8c05b8aa027800ca2c660a993912ebeecf03a40c41f08e8f816dc04866f249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUCJMCC%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIF5zXFDZQM35zuORtUSyUZQTxO9k%2FXshqBXe%2BU6vJsskAiB80xrXgEr7Y4LHmWb8n38iJWP2X9tqa89sSIcLpqIgbCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOAoNldFAYH%2Bik5O5KtwD6DcJQEcTJ2N1715F6%2BZCZBQcCxLjwTodbk2tDPrVkVHCdGv6U2Q3m0aGGen%2BX5apBFz3IOVSMqti3DWpoKv9re5UpowkqUU4l%2FcTx4a0TMSR8CqUPugsfd%2BdOtVrdrknoDsaRVR6LOpqyBw56blhjM7XIf24zLoTdAeK7NwQQEl6YEXrJreh%2FrluKjHMYSu8XoGMEsLw6FAq7yZF0zEpSe5wqH9XJbZ3yxWcNCL2SYezQdNOTs5F8lRgKOSi%2F5dyS67jn1mrrT6eypnykCzp4mvsyDtmgdGigkF%2B6DbrWQYDeBtX2GIGqYmZROBa2yHBuf35DqUZQfcVYeFx8Eo8Thht4j1EyfJJbBqJuNWhiR7BJGJkPTnqSYly3PvPY7URa74HLqpHmuCkXnxnodRDER8XUw%2Fh6oHuwlB0gaCmSKPBILIyhwlpLiGwJECfVx5qlnY4EHFT3nVWg1GCh0TadzZJboNTX7%2BFFmB3xxq21R%2FxK1sAjgCZOeAKf%2FrrW7528EUYv3PVewqn2HMe3DIUlamxm6U5jzgKbSw2Xc62QW3uWz%2BCwy8Jb3vwaTtGkPvJslJlVm2%2FlxiRA1E9Lkz2FMfbZnid51fo66zFlUYU4TRiddhwme4hGkHua2sw4bbEyAY6pgHlrjEjDZZY8VeytMmLF4RgbwlM9j9DIOmOFHHrd1BqYIVW38erPLR6ZKLF901IogQRsv0zwJ3tLQlGmJiKItegPfwjttvnWfMrlKVjDVwRCpE8YXkVcKgeMNaDeiZJEDtm6b7UMeI6betL3aKK%2FQWN4%2B0h0TSlshnhAGF4t%2FpPtqmjcLaCg4SRIJyZyd1cEN%2FoI1nyTRlboJqqhAFIPDGCZYGPwle5&X-Amz-Signature=da5846c6dc1f1c2f2a08f8f67375790bc9714ae2c3bcab7e7deaca96d33c44fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml "12-19"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROT5L7HR%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIG4ig0tWf%2F0NV9N%2FVfB5t9oiVaQtcgtYNglT%2B4%2BO7Zw3AiEAmN%2BKxn9MizqPBm8iTNZ7o5oMMz%2BJ8BPXQ45ZoGTfjU0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPN8%2BERasYIHFKqu%2BCrcAwXHzEK7QnbTf5ayhEDiSAsW4RHLxAAcLyTja4GUaEixAQpdHtEPxSQvFnVc%2FAbSZ%2F0C7BQuEy1n7WLcI605VLTI6cOkcvEeyyajBKMpjrz66Hn57qn22HIHFF4bcRdWnltW939hz5oeyWICaDdxbCU9g1XbNb1o0g3WquoGMfZSDtUAzPfUegzZ%2Fv0aNm92S6vpbaY%2FAye6Tv4FF5TLlTbh7YgB6oB0UL41ZTl4q4r0NTrkvWIfj3zDpzV3TmJV2CsgKXlpSigal1ymIK7mqVv73WUZoVmeKhIPiPWYefFjFwr5F6d4j0gA640CB0%2BUQtSAXpMZ3BLc%2F5iqz0emLZTo9V7ROJVKHqCyuLd7qt9sFYpFm7d8eQZ66fecWEQFgWsv6vtQa9Jab0Jd1Bw%2FgJNALcEtry%2B7Q9Q20JqjAx6hp4X0XrAj9wzkTX9I0879Sapgy55ZYYbBbajJ3u7NDaxc%2BN4sKfYPLJFNCn4r1YvHTwtqgfRutUqkxRZY0IcpkGMvZuUDsEunYIGBA9CIRJXM8rnLaa7F%2BCOP1gCxhHMSALVtHLyARe5Zy0B7eiDpWCm3ncryLaBQAMeCbiqy%2BUKYxf1K655g5lGZ7xA4voK%2BWYTWbNSSccRJiw4OMIC2xMgGOqUBXVej9j9QcpWy9ZlSMGbTadshb%2BWSc1BKHn0%2Fo7ftJqLElQzmUcm4xQgoQJ6SBuhOdra2gjC55TTnrAwMWqlyHe46Yfr9JioU79s9WTI%2BvGzZvBGiH224iervznX6X4PpmAhHjBJZ5g3eryZvwd13vP%2FGATaPHTI%2Fti4UiZVRw54zLcHhTzwf8A1orq1Cg9%2Bt2EPE9mg19LZALBTHsEm4YYBdz5KW&X-Amz-Signature=acad691b36e5289f2ee1b303ca80660c93b80ab2439e407b2ea89503ba6593fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=5c70d3f3ab5e054b74f2f289dbfa20a6517c6043a61d360d12a3b6ada25e0272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}**final code:**{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CUDI2ON%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIEjxJ539QfNonUYD4lvUDPIVKWfUKuLTM74l3%2BXegOERAiEA5y0Ddn5T7si976rR3HpzU1EKf3C0Jljd1x4y0uoNJXwqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5wVYAlmChkLO%2BNNyrcA%2F5granmus5LABacUsD0Ti0VfIul3v6Ps%2B6Jvdlv7Y6ZJkKrNDNx7ujC8uCVGbbjYY8rRn8M3kVuQNuhsm5jI7ZqYAtwcXYKcpZ%2B1szd10edhLRken0xSnJNwNL7KduToeHYqV%2BE2%2BuVqoUA2iBen0c8IGIaMavgy5zap%2BuS6iU2fR7%2B8hOidNSXU%2BLZseQW%2BV96OS7L%2BJik0ZaRYy2pSPIYcR%2BYN5j6rwtYdRMWGz7xkvJtyLcKzoVbEqCC0IFmPw%2ByRWBcDEIB9oVeBlrFev49CWz0hIO9Cjedisq18j%2B8d%2FQUwd%2Bb8C%2B1uxcAmWDb471DgY5Ry7nkhI448OXNohvCuaUFBBelSRUBCxYAtGQaWb62AovYIr9JFl7z9T%2BE2c3RCDJEPXM%2BfguWvW4HHSdvnaXprxr03RR5LEwxy27P1Z6X5hfnsAELOftEVqCoialkqHEy9NDOeEHK1BduCfbT3cCyhthYIRI2AYPk%2FWOWG5nKwf6u%2BzOBRsyoXriXiGlpWg%2BhtSlE4lOhEvB8%2BvVAOyN9cSFWnYQte49kfdfSI4B%2BYRUbl5rRdxrvWMJ1D7KyDxA%2BATHs1NE%2BSFVHsxZSgpqcgmBVeWWwwtK51xQnmbr6%2BtdTzS19HHecMOmzxMgGOqUB74afN1zACWsMimhwVi%2FEG2CMoDZ53YJCyjq62877k8gUW7lhC6uI6GNdHf7%2F3nmJAC9FS27pTR4m%2FsBcMp80iwNQ9ogHgdUm2uUMslpgMO1yRpoJywSBepAvceQzE%2BvN%2FhET1BxwFN0%2BONZGsPBdyEgZbl%2FdiiHXOVog9TPggCq%2B%2BdaT%2F1QTAzt5f5e8zdWTkb7duzDRsmJsRCe1ukr9cjrqcKx6&X-Amz-Signature=0500a683a0f21d99874201f2933e92a4b18f47c652f03aae445fbd96728e10c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}


#### Outputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/tf`                |          |
| `/robot_description` |          |

#### Params:

| **Name**            | **Type** |
| ------------------- | -------- |
| `robot_description` | file     |
| `use_sim_time`      | bool     |

#### description:

Node that takes in the `urdf` and puts it into ROS

Takes 2 major inputs:

- `urdf` file and publishes all transforms in the `/tf` topic
- `/joint_states` topic that takes in all the states of joints in the `urdf`

{{% /alert %}}

{{% alert icon=”👾” context="success" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=b61c26388409d5dc0f3e8ab6f11141266373724589954ea84e0ea7ad02777e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

| **Name**             | **Type** |
| -------------------- | -------- |
| `/robot_description` |          |

#### Outputs:

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

#### description:

lets you debug your `urdf` to see if all your joints work correctly.

Takes `/robot_description` from `robot_state_publisher` and outputs `/joint_states` with adjustable sliders

designed to be replaced by a physical robot or a simulated robot node

{{% /alert %}}

## Current Node diagram

With the two nodes we are going to make this diagram:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=19893f6df579332f408b0ddd102024d82307bb0568b3eb6e3b7c147fc94280ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=7339243caa30a777bfa4d05d0dd642bc3608d4344c5ce17fe7392a55a6ca2b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=50354125ad6734b941b7dad887b9df9206e7ea8f4155ece83cc57f55199f6812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3X7B7Y%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCKUH72WHYYOTwl6OPAGNTGJ4tU1N8%2F7JvwIgZfOOTjywIhAJdpW7Nn2frie1EKd3ELgzRLUzaheZ3EWJp%2FgCKv%2FXPLKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyfMCI87cWEGM6E0QQq3AMuANwYoI%2BGa4o%2B9IK4RSVqRlhLUMOiCnqpu48MLUFzH6DM5Ta3jiwbwtGGxy6kZk1x8TSolUy1t1NXMCsO5%2BwYsNAnr8FXGfFckAvUK0oFu6eLyDmJMvM6xJmfeYUxL3G9qdPOLz1ajOcC%2BLdldyRqkY7JmXnJhSUFZ9cZP4Zl0kBs%2Bf%2FIZStgbRF7KM%2F4qRM97BGARLZWV8iFgfHn0xGcL67dz9Z%2B2LQgoJUp1hIenfgv1xFtdfe9jQ83MzZLbFO%2F2L6Go%2FxbVoV%2FMmd4fSK2B3%2FbHi2lurjW0TFqWd8lpcBMcRUwkENfhy3KyIBHD8YkfwjKjeIBqdAChyqEZso5motNvPHO0ABZBiKZF1ijn0Id02gntowHRJnmMyUD1oqpXdxypLV8OekzHQu3RZivwwxmt%2BeiOiKXlC0EfrHdhfY4%2BA0sCWYhsyLiPZaGtpgejVs7zQFJYxM3Yo%2FBIZZePlrZJg5JTj45%2B8%2B9a%2FBDcWpHTELVhPzMG9zuTnW7rDo0qr%2FZJgHxkUikW9n5N%2FDWLu4JbcRA68mpiHaPTMHW4WRzW8xopH1U3dd4HTnkfOXU9W8GEgagzJe0QmVU6d9vkr5%2FU79%2Flqe2lV1U9wGYfew28NKMiDceB8a%2B3DCfuMTIBjqkAbcchOQJMo791BwH%2FWSdTqvzR2NcWk8PVSB9haFw1skgpuvp%2BEv%2FQ8FWAAKWxi0WMz9lZc6cf47RyCjVmBfcyEvboKeZR%2BmW5PQlajlX0w7MTIxqWtM5X1nam%2FQOvdCW37qm1SLRaW%2FMTy6tiKx2M56B7yRnYrcwKVzSgg%2BZ3iWFvkPa4b77afQ3jGDmn2C45gpBD1NBhAsc8p0yphm6aKVo9roA&X-Amz-Signature=e5f641f3b20d7eff2123c6ac267093de0bfcfaf79c6fc08554eddb3faa376153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=3840f0c2388c8d99505984a915194f29d7107fa33e2e28f109975c28d0aea8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
  <summary>{{< markdownify >}}What is rviz?{{< /markdownify >}}</summary>
  
TODO: explain rviz better (say how it is like ros2 echo but visual)

</details>



create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=66ec873e92b651e08e984de1bbbc2cc843d7c20c0c9e643c59f206606ce63fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=7339243caa30a777bfa4d05d0dd642bc3608d4344c5ce17fe7392a55a6ca2b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
  <summary>{{< markdownify >}}What is in this launch file?{{< /markdownify >}}</summary>
  
[launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)

Launch files are just a scripted way of running multiple ROS nodes at the same time instead of opining multiple terminals.

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

```python "3-6","6-6","6-13","24-24"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=698c71df9b295499b14ae994be518bbec87b0baa877a35acecd4772a03a34a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=d23dc7df5e45944f5d529dabf70fad1fa1a472538a34fbd42b7a79316cd93d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPCXO2M%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQCxjTrDUYzm6fk2GDTabHbNGTnvwQqhgABDPQdJyBWb2gIgW%2FTAnw6cxADxJxkVhiqymGkkMs9mfjA2zTE7e1mlHu8qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrEm1SDHCaXx1V07SrcA%2FquWJCDn%2BWbIcV9yFex%2FBm%2BsdQesX76hqF7YWlxpSO%2Bf75Hnu%2FqRr5KCC6zdX6KnLKuXSt6jTdc01cFT7wJoLl79JkEi4WnPsbFnjPmNQyZuUg2pAX4oErP5a0Cm9KhVbX7ZoyGLlnFRE%2Fp%2B0iCIUgDeA2RDPdQMLjmRSKPFmx75u3XnqtJOP1TcMQiC7tUdZQQ76UWaULqD%2FXKvG8KIBeEhWG6jIKv538p6LaWY1S%2FaRIvHai3cBsJNfo%2FuMWNJuttWYAH8oGjfb69tPGt%2F0rZuOxan3y5J2si66xKpU8UcLt8QBDfqw75TFlqyoXjI9Rh9iHyCtpXD%2BKJjpZv2tFbeGeQoa1cpoEeALndrOk30cpj0RdfELafnDLuqMqNlSGsqh08dLHQ5VAfHRkWpptNDuonqtswvwFmFkDOGW0nhBFfDY78c19lsR8RmYVu5Of3V55asFrn81%2BQiKNIcVID6eFpSwzxSdVcRKMM2whXA4X2cnJTMQa%2FPa3T%2BS2bRUn0Wlc8HZiVxRr8dhRQs8Lv%2FXFGSRUFwnW48CIO3TgCxBO1H6431H2ym3hzbJB2TeaI8j0ZiPV31hXQOwEzCzF5%2FjpwIFHlveI2tNXxWHny2xB6AEEjLDKcG15wMLS5xMgGOqUB12XcpC4mJGvd29aGMLOh1z0CAhXf3MGNshs7L36WZ5ndxJ1xa4yWLmE8zEvwbPHmDCgpj1OMSDPqYE%2B3CfWJxDztDm1BL3pTfXO7YGDjS4eHQMqNoUXLuBpIMo8fa85oNDSf844Ve3lLe1RGeMont6bS%2FV%2FZomq2AciJkpbufew0q9gfrNZyoACgUN%2BAS8iqSfdkU4fq9IuRrxQxYhLPU0skRgmN&X-Amz-Signature=919fb0a5b005d7eb3c7788882821d11831a118180374b5d23e21d61cc555eeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


