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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=1b76af949e1872ba173ce6628dc425538b2fe788168529d12680535b88466532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=096e08c5e6b27ff28531f47d02246d45dfa08abab69be9ad9a3ad2de2b163f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=37b431387d4646e292ba009d381f9dc5112608bc8a78821793cdabd332ca7a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=e7a753371043a674673feb15ea228ebe6a13afdb2e7220afc75d9c1f00c184c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=d5df816abee38359d0fc7c8dd2881361b2fec35a3703a5725cde5225acfd362a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=1e6c470bdc27b5ebd9e928d5d6fabb3c999f48a08db18ca044a93c9cb523c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=c6a13cefafbc4eac6885449b556c54f5d61dd4ba2ba1aa0ddcbe9c35a465a499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=337b3af1a4093d5b893357d6d22c6f3db198a0eb4ce41b4b8a2440339e901a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=4f035e93faeba1539f11f51e5e27aea0c9b803c2a21194240c429078c781d18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=619d08dd71e30b2b2ffff91704b54f756d0dc493dca7973624e9bafa94664e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QFYNCLI%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDXuAIOWFQ18H3cw7bHMcODy10Ka%2FwBCbeZjQumDhH%2FggIgQ3sJq%2F9MLd1dxKBF8s%2FYqe9czFjKc20TPv%2Fw4UucYrsqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMxUB6GbmyPUcbIiNSrcA%2FAYKQsrXSDTlD%2B9%2BCUcVIbcdHNYLZ%2FTtLg0LkrWIW6pqSWhZqPMsNY9NqA9Fgihu4PMNsd%2BFLkEDJMMYX7NtBpwEo7Ah1Mr2uW%2FfSb%2FtjWooQybTgiq%2BtFDWpshgHvdzPmr8iOgWuQSjeneiaOdZGUjkEuSB9VbybU9Tt0bEFfBMxotYoHKfkCSgcB%2BRMG%2Fc6SZQXLvJemR%2F79KDB02dCkoyXJhApbrjYaswpUsestH8luWc8nSf%2FwAA1VScUb26vbEyLDfuX6X46L0TQ6nnx9Gro9RurQlt1EngAFI41mDeJOv6pJHYDQMpm9%2FXqkxBHtoLErhrLvCi%2FoA2Ci4xnmDCq6IRHOpieKBsPLK5JJGhOSa4ZWweV016Vm3uaakvZ9cJ0c2jhTbtcH%2F8abG3WIiBKCXzh7P14KkLly2CG18wGV%2Fq9YAhV%2FSRfjwN3IzibhE6nUBQJ2w2ktWelPwwADKdxBGaNadRt7E25lABgEQd9Lg7cK9sW4ZVwN1JN4k8VBNpD1Igzd6HoD9BPyiH06vbygRj4baZjDIcwuJ2FQFbYwyna5MP8zJvLU6wsQTDIo0Lnqw56LwD3WDhmM9yW9SYHaOa3Ik3G7ZzlT43fPmkze%2BBwJxNOD0Yxg6MLDyls4GOqUBHXfSJfWUAmQWbcybOVd81b2wWIffbFj5%2Bw38tMXO3MmpUfF0ROXFXfKZB0nci9KLIHpJtfebEzvKANWy6jnP6tcGXviu7YnA5dfO%2Bhyuy3mecwQiQHi65aotubupNE66A1gyQEkrT4towQVQijX%2B52cjhgK%2FiiKXxWxnHwewJEwalsjR5iKYXQ6fYbCLknUggMYCL%2BZPIbjvwBd4zZSL1l7vZ2yZ&X-Amz-Signature=1bb5c758fe4e0c3c051d22b30702c18aa109e51dc1384271164fe868fbc42b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USGQ5KB2%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCNAglRQlagaUJAvXJFPBm0bZgSoZ05GAxvjtkM%2BCAgqwIhAKPTSDryooWT%2F5YVPOxbycNWZda%2FvZCxx6QmdO6tLduGKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqmGhqVB6hDFj4eMgq3AN5P6EG1bN7A8bBcJCb16MuTTIoTyjJ8%2FgiLhiD4E%2BxpUFgTmy2A1y8AIY%2BBFs4JBYuI8yE3aDasEVm9Bh3hVp81sb8mSpnPyo0qyWZYkcQnbt6SrcWbzrau1oj2SOI6LhiDPN%2FMo%2FeISENSZSM25Y6ozzpQO7RFdNoRifv25hpV56gN7NoDYsSgxG4j6ERUC92QT5pk5gvM562il64ffpaqfKN5coYt2XOQLFJnUl0txIXSrCCAvGvfdyBGWxjC7kkr2XvhFf42RAJiTJ0IKo1tEy6dC%2BNc%2FuGc7JKMGB3QD1cFJMUYXNM6y4HsT8FyzqDkBLSbeJVD66FU981WlVJwitkNyxu8GDG0Ovg0gD6C2skThFsclvesJIvb3BvfptSce%2F2mAsm3kaWECakjOQE1OJCTbwMSvYnGr429lIYEzA6jow0Hcw94fZORU6wSH2TCKGPi1GPG8eGhfW3qIF%2F61p1scjo9fDTtGCW6wGu6%2BFvDKhcSFQ%2BiStlROxXLsulP%2BimCHi5vdJ1EGGkPE8RC0YCwzuSxkT9w1JMbB4Ifil%2BLkGYdRqENvgFO4p3wTLGzA7KZE22Ka8zTFxQTlHKfos9zpCrLhhUBFYr9vkmqNa2xezsW1X06qCG9jDZ85bOBjqkAV3eTIZKu80v65seh9e16XNsRdERwfMhay71VMAWi0eDWSeMKq06XDapVeCO7qeV%2F%2Bgc2NTWOBb7XcZH%2Fu%2FGAT3IK%2BSxUrd4HIInR28N299HUP1KYv9Woi1UESekDK33kJdKgrU0HJb0v0YjeUcEeWIPL4H5R7lgTMNNp8igOnCxaBTQFbk0tTKpQabdEW8tDHtpZauRnJNHudkKVsmLbSVNFiSQ&X-Amz-Signature=cd1a5f0831f5e32c96fa6d669aaaf8aa1cba832d7a333fda9fee5b21d1d733ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWZXXSC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIA7B6NacTGSr3Jhk5KWcN1%2Fn5s2MUyMvaOs4lHrNXhonAiEAk%2FFXqmKHm3jSPQ1umx9iG6duF0EI%2Fad1IRhPCRrRIBIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl2jGZsIoE4fxCm2yrcA73qB0FlulAPT5MlrQwjr2xHZdfJCLKGfPwpiJu1TvKrBEjnsJpbOUWKyJkE2zAWBPhF%2FtUKfo9kjdX344R%2BjOe3P%2FydDvhjrlzddWSO%2BhfQoPXEZRBUwrxktGqtNU5fgsCIWhl0mfh0OdLb6Frueu9TFjlqG8yxj4ipCZMpxyrYD4AoG04FH2JbGxufmLASHG4IPLvhOcp%2B6JRPmLf0bOt0zo1UE7vceGez7oCp8h4VxWZQzKeMZxUHPgjoT5%2FP0DNYNIeFx%2FEiSH0rD7302zUP91I3SH%2BQUutnG8gC%2F1leYrLgiPPxCquh%2BoeUPA%2BRSAzD6LCugzZcxio60Vh6d0XoDaOAVLAEN0DneE9PwrjQ%2BokSTLzjDa31FaONTE6u%2BCyuHikh2ptw1wZreWPVfuwi27gUyBJT9GU%2BUv9CuVhCo%2BMLYTeY9cN61z1cAi2ilQUWSz%2BjNZ9KRW816wvWo%2BqiK89m9T5%2FXY8kUwjpvIxcDVoyDGBv6gAuawC72qTwvxhtivcx%2BVIh%2FLP3%2BMo4%2FzQJ5vDzPZFCnBxA5dV0jaKYYJ2%2BepX3bGT5P2Zg%2BJxnfVbKOiOWkK67COqwL%2BbK2B2Dabr0%2FV6kqGh0U5s7oEvtRPqn06BZzpZ3q10FMI3uls4GOqUB9rG3sNwJsTTV7NN%2F6kDWR8cUWlOMOVC27YhdoPXCMyIKcaOI5yAgcr0ZuckWekVXoDiVHw2bmNovlH9qKS%2BWxGPKbfG4xzeBw5i3jk4TTsGJNQVWa9rRWyE38Rt39DIFX1lOKPbpKYiqr%2FWFcPw91sZdW2pueOSRT8IAE6ANSibWuRZHVz0OcSw2BRKjdjV%2Fuxy3hIkHDo3oZLjRZ2aqcNA9EuE0&X-Amz-Signature=467069a909ed2021151a85f74e45543479a59e5c0bca2c54e5b430ecbcf3db73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=869079b1915108d4f8a30a88cf36ab86b3944b8750759d83a5c6af0d73762489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSKHQDD%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQDjpoMx6WY0UI4ov8f65JK%2B9cjmKDi12I%2Fh%2F58z2%2FYVugIhAMwRBoapHg%2BB3MiAiACWTri%2Frys5ppXFkTJFJyapO6IjKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3hzUu6uxCg%2B1HKswq3APfuAb7C%2B3K7jLe3nU8yE3Hq21fwecQVVaeSrPtyE%2BPP390tBwr9u2dbKzq6DjogiI1Z3Npk20%2Fl2GQfy9awA3MK5A8%2BUUdwtUGMZwKwbuVCIWB62J8HwNp%2Fl7aOwgChVccGd8dNigOvBDyOnCQfi9LpIGoNSrmu8CLoF8GW5hdzWPMT84p3iX%2B3%2F5MHnwA%2FYH1tYAV%2B4%2B9nGSFYtZlt7EaLiLa6olVx0mUkNjRJU1qAR63hvpAmQt8aWGyXt7ZoJgLcpCEGVRDI1%2FWYuD%2Bt1KLglR%2BY2py0wXRjDszG7anJnOyv866oCgHJdMLuQme1MScrWKpTEuTSbENLXqN91b7jZa4D71%2FrZq5yG8ckmAQEtYjLDycFQpsJz2gLQuvrGId2xcJF0NO4U6xzLEM%2FWDenxzUnLXTd%2BDVr3072Y%2FIc5Gh3GfMLYv9K4QrCA387RXat79YRjwzEZ3zSqufD6wbPfPEtIy0Ln0rWGlAN5eGYCbxRUFdAyHUmihcJyT7Kjr299yWipRfgmurXAKzw1qTv2kSuoM2QzQE%2BkfmuuzUdXidGkp9uRD71wyib8EtPkpTiD6%2F7ZELq3GqQWIuhHbqbJNRaMAt8UsKmEFjhLwwzHbJ7NXbEFnvAClKvzDY8pbOBjqkAUL0ljd%2B5piXvy5LXOKWllia32kZrd3BGtIYfeRAoA%2BEAoXK%2FzcomH1GU7svh4qF8km7jbJucr8KIt8ky1h1jj4T%2FhMiULLrGqiYAkOEbjPdr9VtCkyoFDV3e77JzuGTwBtbOezULxQafa7nWjAtbpX0t5H6NvWa8zsbifl2OTUvfZ7%2Fb5e%2FOTEdeuPki0dWp%2BxlZbmaMF4WKhfEH2qF06oxAyg2&X-Amz-Signature=26ca43f83253b095408ac61c1b05b23ee75c1765ef6f708f47ef88f1663dbdac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=4518fe194cc2126e3aa708d8a5d078db80b1dc5cf3ff7a1ca8a3d79dfb413cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623M2PT6P%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEpMW9zS8JtVX102wX7O9RvZDkbsENfsz7wPLEcdZt3NAiEA2mXrAk78Mnze4F1l%2FmEZYXPrR%2BAP1uuGMPzMifPTPHYqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNB4tA%2B2bO%2FMMz15cCrcA7viHvyiJGYyyYm7T4D7amhMlxN4OHNXUtmbh7zUFXLLOos3nWdbQaPrNDyduyoYZJIc6whNZBXjejf%2FseWM%2F5z7dWSkk0iZdDmsOPu%2FAbnqQV54hLIbI6PIDGg9%2FFrjhys%2BukDDkB5Q4EndGllazZrva2mIvYVDOs7FQH91ZSJuFZN8aWVognQ%2BA%2FR0Xxb%2ByI9PK50iqTUebv0iA7xnIhgQpw%2B3Akn3hEfKLbr6SgjdlS82cc3L0kcEL21VOT1zFJ8CALY28tU%2FUVIXo%2B95%2BZ9Uo8BWliwHnA6WVxhj%2BomnU%2BXWktvxymYe2Mi3ukr2gS6KbmL9UNgkUVIU37%2BjCQuWsvicwbMDzmBWlW%2FOWiLv6ZYaZQ%2F7NEZGy9nuhgZOS7T63D014gph89BTh%2BKkJ1Vek9Ut8HuBdnRh6UKWvaErf9rKZAz%2B2Cl1eQoA%2BAWt8k4ACJer4J8taRjyOEkTzO9QFkgg9v3TXKoKrE5P8H05MpGhXXYP%2B8NDC0yEdxS2sqNLU2NslTYAvOh9BBr3wT6C4aW7jBYI%2BVeMQ9QUQU62eLOxMUjN2DMiYwMIHjOWg3fD5%2B%2Fg9HrZ%2FIdZwUeyy9n%2BPjrQ3sFe0WN69KkYzKDtvmLqbHpRnlf%2BYL83MJzdls4GOqUBsGY%2F2MrYw4R%2BY1OdoWiGdPQ7voD4ZQfDBAB94EtRgkpHPq%2F7bAu8Llf1fpn4HNNsJ1EXF4HsBSsg%2FExXvrgtgsk72CHT3o3fXnvcuRpZzUla7norCVISPAEaqv9Bg8zmruGDD9bm9tIeMdX4UvPhnzLiGOqad%2Fnpqt10Ju8WpRX69LgALQOIvuKkRKtKfAYHKsjhqO%2BtWlSa4qvUmsBm74PhLOa%2F&X-Amz-Signature=a957f6eb37f3d2d8ca320801ba3bbaee90732ff72c093f1ccddbbb3b919eb2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=627231d285bc0fd1407b239b24488bf93e6fc8f360d987997fa46ca14ac0036d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ETE6JQ%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDeg8mIyQeLxIsIzXf1sICm06tokuAQZfj6McICtfwSwwIgJl%2BHB8Y%2Btns1zPMKwgeRfwiP5tgUmAKiA4cL18TGSJQqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvCzp6GL5i9LNNevircA0h46tUMniL3RcJ5ABApnpRkoC7%2BqjgNrYaqYsEwdCz9mUAdJ4YZ1EAbURksqCFRuX8Ei34uqB59ODb%2F6jzMl1T7mmI42iHGEXqM%2FlpAkTQZOAtjdKNoyHC6ZIUFS7S5HzvI0jPXMLmqwppngTjGBzA4VeuXP1N%2B2f3K9cQVYOo8B5K%2B6sHqJ%2Bx%2BqMPzyjKRqriJhLon8AyN%2F4R58UfGMHi%2FILcEPDfI4qhiBNHiG%2F7L8w4sVrQm%2F1Qg3u2M8F7dPckQ7%2FeO19KZcKKHyabAbEctapa%2Baos84alm5ddT2zPjvUBpEUOOQsWkqTeEgsG6s2AT4wSVVFHMB%2FnvXKFqQQr0%2FHR02cknUbURbeOKMsYVcqJLltPQJAlkz6L3iyrgTN9zX6JXIRZBz8nATeUnhuPyTvh1keY1QUsdwHu%2Bb6KIAZVddaf0GpJcfs%2Bh5YgSqkX01stxEFP4GwIPRNImp8kFiwJk3KgiRY8W0knBFU9kA0Bc8k9lasXOrdHafzmWgT7G%2FiT83zBqLXhHiObpHPRgngxOpQjbmjJCc4tJ%2FwCjDUWVt1fGaFLroZK4aAxqm3Vexc6UE8jNGtjTOVOdJcqj036G0sW2f6jxz%2BvjIQNgyJgrb3uT04iMaaVzMP7lls4GOqUBW4y3hItgP7CD4gMdYtyj46VMXayFtdlo9Y7oigy6cBaqT4V%2BfvMn0m3DX8tjy2BQ%2FdNqFrCd61h%2FHSsZ7ovThZ6hpa9bswzpVpF5mphPtlN8sxr54EAHEjtXtXKNjptf5I5FPVWeXNepafQjHPUyeYZQ3t7f0LhFVaxbNOqqMdtl0jqsFeDuUJahsOXRDoX7ASMq67W6iCjIuRzcEIlGnZpv1UMs&X-Amz-Signature=60b3d80faaba66474daa45d7a81f687b83c9cab58e4f6f67cbd24e4831364204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=4b085283e6c40420ae93672693031c6eb5f8972facbc306e1736eb12ba212898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5A2IA3F%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD3zafmPsroCFRMdaWtO5aqhnXvag77UYOlktaD8KvePQIhAMwhfWE09D8sxV9oyJPpOBiT4idFmv3ML3isEUKeauBEKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7%2Bi3Kd27IPuHGYWIq3AMehFVct4NuNJZm%2FhIZrZ1TO%2BmVu9zIkaI8CYk1Sdfb60TVkJ1dwsNueuXKIDfDyJM9V6SGVwmvj40mUNDyZdv9Ps5olld4ZrXF78euVfkZtKooavwr3JRtj7yho821laFBL7ldSYo5LL8HSatoQOtu5AAuTTkmEn6aPEfxF94G2eAu359xHK5Ve3aCJCK55DqykZHFahWirehFaZ0j3EjkvT0UsNfq%2FeBaUBsxzxZVdWeBC1RVUuR5qgSVU5bc5j%2B0TDDMjyGn4BI3GfkiD%2BrYfc9fzW4gsgwuc1ICVjvVYLAm0qzVw8dulR1ImrHLWIo6Q8h9uo5%2FSzIMElqsl2JKir5gCRiR4AyY0GAfTRFbx1Bzd0IBCw%2FsM%2BtnhsWcFJu3J3u3EdqbJl%2FioePBK9Q%2BybTYeAVHMDXiucAyvI8T%2FquQzlCjwk6Tp6S4BRaIlXGM6fmf2Vb%2FXdu6SiJ4H7SXqvv7OqQn4Ee7Lz2J%2F9urYWoSoxyuhASRW%2F8zbinX2VzI4vXTPkF%2Bg0UvMlFDRhOiuJ6D0o6Gu2pxMMIhG0AC7c1ETBlYWIRp8Omkxb7Q6SIZHriZne%2FivmUXtAvYoUz4c8vk1CrSppLRR%2BmSY0LQ7SaxNfBpi7ZnoRkkpzCB7pbOBjqkAfRUKJoJxe6opqXIzsf3PMPadxkJqdG3S%2FopHQKulA4lXhDYkvxKKFeK9ADrpXWgZA0j8ADTKTiTicikrBU5V6IjR55crTbhl6RDrstiFO4IFLhJoqsDx7Z5GB6gtC2YNL5GLYGI6Xm%2BBHjSjeZxzEQ0u4s8jnfuhRAqFDjfzrsvTI65GrNCqs5WV72D3MfpwoklNqGqYmopTs0CPRAs1MUDE78k&X-Amz-Signature=5d0c8bf935884f24c8ef06ebe73ee4d44659ee709132d56b39b41e65a6261517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=4b6a93ef38c7ad37e2e35a040ece8e4d991fd9778e8ecdea37047350ecfcdd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXSDSG5D%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQD9vq3hciOAhv%2FJvYkyqkC5KANongG499Vz8O%2Fu8GlsFQIhAIBrCkENRfoiwipFqLRi%2BRI%2BNNYWRmqI%2F0RtQDXRt0OcKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyU5lUFnjtZSXb7oQq3ANY2YICCTV9Opr5%2F7i%2Bk8ejPoO%2F7Yt%2B8bpp%2FrCawHl9kyCpAI8rHxHOL22tVL2SGAVSIL8NL3Q0wCN1vSNt%2FkkeauV4VT11CrrDmYU1LL%2FsXykiEJMoHTeUV7axZLfqnHidWQMhqZxOWHo1Sisr8Fbvnl5b3gkEqZqvX%2BFvg9XLEYPkDCuGEWjWTNJjSYZwp8eKjt7ja5VGxNu3quZv4dyBR%2BeSCC7DQgzGxDuuJioSXmkys%2Fmh8ttMsoLbCCZu4c%2Bft1ro9gPWkhtfHNDa%2F%2FUhU7u4Y3nQrvdneS88uWJ%2FIOLnRCdy7Q7A%2BqwudBQ7bUG90rb3zxYpCWvl5jWB%2FEDmyTQDJNb4ionh6k%2FsR0%2BNFmzXdLnZh3ZilG3Ikg7USTRZw6hVD%2BTFGv48qWDZog701%2BjAVvQGxnoslBBOJWxJaPJXliopdW1TiGgWHjFWjmfA%2FQYvSpj1qoTqPCKRvwcI5nh3vec5uaikEcH0ysaA7flTaSIAi%2B6hBxJxXjzaAwMzcs0W69lLkKk6TKbhePk0MaPJPV7RszUh%2F5EP7urLDGVf8we%2FMyWGHMiUV43siqLo%2BdoLRHZEaXXSErmXeXoKBldrrWVYtFIqo6b625Ie72ck1tYsy%2F857p5p9zC065bOBjqkAXucuZ2NSfZvoQqRbd5wxv5AulnxmjTftleIJIENYnmgcDoAxgYE4vwTFZko4kKDT4QkrNPkYst0vCstaH%2BIwtZm0t6umzXub2vKJ0ybxr4HDxurMrq4FZZp7niz7SYvxBivaJu0Sn6i71YKRUk2IfF98lEGpdfkzNs9QQLOrJTlv7gCwuo7HA8xRpW6ymJ7XBlb06ojMoj%2B2oGyHEFnSOEW7Fq5&X-Amz-Signature=a83e131578c21f5c373ee3082d0c6086869460073dfe40fb923dc4f815221617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILYLKBY%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQDXfRMW%2BA3iR4g7SyuvEjrtPye3BGK0dH2Tds8x6ZuX1QIgWxevG6n5PsJANW6x3Q7LT1UWcp9uXVJ7K2Ob%2FzPoqCIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7JoMOrNIsUFKrg%2BCrcA%2B45om7JEB6j%2F7CpUWpDPgHU4OyYXIvM4D6jKkFeCQroyHEMyj2PiDeMbLzWlElzdbJCL%2F7E84Xj%2B9aPemgxGM7aMV0pqQYfFEOJFsCJOD5lzZ6o%2FOHR71jwLIIhfjm0ujmewyhlBkmEn6gozDabELC8Cdu7c7bMWwGGsTTZC4qHuDJVbBRLfFcN%2FxGI9uf9wrG03caXcqca2IagaMqcCa7roX1EL0CDibwjh1pp116MHq2mGLE3GNtSPpZnYs55HjaHK8bySUZaJl2Ht%2BwA7fFbT1%2F9bIh60iV7eR3Puw%2FZbSpYJxpQ6npMhpLRGSWtEckylJJWkHdAwOwT55P%2F8D%2FysM%2B5poaIwYD571ConuApjdjH1g7CAV3QFeNGigr3ulMEVe5u8PV6gwoZhM2Jv%2B3p3Qg3pmgNUr1CgwIsfuHSXGC9KehZM%2B7nqet2XdYLvb6BD8faJKIhU52Ck5dOOwBZGtOMKi9KbEiqjPjOzpCkmXbNG1Qimyp78Q7sA6yF%2FquYlA3%2F0qNfwyfoKgp8hhm4AOWVg%2FHpCKQ0xMOFtp25%2FAydjsj6PPD9ARLhp83Obr1Zr7kwNXQXy7fudOBojlwlxH%2BTbUgFlBLNBRaFFf90FPhognPQm2YpiwyvMILxls4GOqUB%2FQ4Bev1Ouc%2FPlllWmdHZdlYUGW5SdIvBua4l5VSPx2tr4TuJcKmmmVYYPcP%2BrZIIkv5DYhFX0uLR2FEQftKNkDKdM2pq7WzDVy6hejHWfRjuClNAdjVBs8FVYOPaQM4SXrWD4juqnaGbQY5H6V3my3kOXlpx1yj8MZyMOn5ULAmfKEq%2B6ryYDGGE9RKPN9ynWKFwzRkML0RPp69ZVFRjE998NHDu&X-Amz-Signature=f4f8c636f46721a668019c64069e46fa81311d0eaa5c19df881d2e3def63ab9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN2GGDLJ%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIDefZO7XETAJxGtWS9ZpCMSt0G%2FhbLHsfxj0T62awSVeAiEAgrMP4UHPt%2BO11OduDtq40CeARx%2B0Xg%2Flg7U0SGUk9VkqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMypak%2BcFTsI4MFLyyrcAwkwrUVEo0ky6uGHChRFAS0C0noeFUwGiMVpiXU8zUYCTZAE%2FuMtcqfRIOq%2F8Maeiw1T7WTPqImkEbfY72UR1h1VPyi7teGWyr625WKfs28mzz4PTCSsjC0jyYZ44Ag81BUyqBK9nvG4lWRuV2724GPjj189aenG2DeLRcUesTxY7VHIdgBJmK3rHdzhAe3lrIpILtkvbYCXh5cmLCiM%2FW%2FBN4ZsEtOiTFR6KOFrKhHR2r%2BUN5eR%2FQNzxpqcnfwTvaz9SRA7ubML6POdtVp9Le%2B9DC1v6RkFcuRGwedC6lyYsDnaaWf0iwhjcgLg9lWpCH1sTtPxpNFG9NWZOYw6f8N66kHgD%2Fa5FhjyvvL7dCNJbStg5DTQyB5aK8KWVKjBZNMcNYJ4D6xoIcvYg1CEr8u1R6Z5VUMSKt%2FJRg1Ek1ekY6AENJafvoncC3FLbfbEReMOsMI5kX4e8hWefjLUEe3lFaKlBamKLtA0AjQHyEGOw9fficaclf%2FAE%2FtFvCjtR4ZWN1A0sUziaRWXOYt2EMx1VkxQpo48WaOjkdGwr9j28kURSj%2BgDaipSj71QGXDKXb6HBn4NRpGlkW78aM78OWBdXsVem2xzqweQSX952rME46GMtOsKapmeMWbMIPrls4GOqUBH5tmVM9loB1gFhaOICcgpMFuOZVjUNETbCTkJAL%2Bf1%2FjPrWUf0%2Frc5DUxzg68topZOSVywPu9rBj4q97h%2BJ8VwzskPgrCoDB5smndCL1PvwwJw4vi8YeyBvr0vogDax7dgmQEKCURckZA1VKW3%2FByKOvtAQEvNlXkW%2FQdHpJUtQwW8rpZ%2FV2EtQazgCI1k9MdhD%2F%2B6aaLrOMKCfsamLg0nKMfP27&X-Amz-Signature=bb8b9fc24cb70afcc362196f86c1249fe68ae6660fa4a61686efb37d662a725d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=4c4517a01e308525c91c0782ef0aead2fb305e4b2674c36225cada23ea192a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJS5DZBV%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQC9Kof5E32SJnCIAwuSacD3WR1WtDGtMgk49Q3dtFGTAAIgedhRHvXkdFc29P99TOOOYd%2F2l8JZkvfbpZv4v0mSrL4qiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWP3ghKDKSKe43OZyrcAzZdJeDWwDlT4vqW3BPHB1QeZn%2FqThLPgwq%2Bb0ruStJQE%2BGAWabgDrpIRojEQXixsQAvBupVTHjWq%2FG7fDVc7aWv3iCWBcExL5ekUC0rjE%2B7MRw1NIbDyxd6oHIApGHHIMF6nLWVPoTSRV7LauALdQZnL8Jcbfu8aDWAoLyREWicqAH8rtiACIqtwYM%2FKJ29qMMGWG07Hp0cMK5QckjAvKTkrvkQIAGwx8xZOyA2skybOqiy0Sgpaem99f5Zjh5yymCMxz9cCkkm1aSrQviIHhCDlwA%2FuGm6DPxVz3wtgxZ7qEjgs41DqnWqoYqYRZxKr%2FaFUGrhPlLu7knpYu7Qnim2ExtKcjuuPzV92ERGO%2BRx7kfrJiYa8K%2FHjhClUcVlMpBXMRVlUZEIMZSaLBjcAJV4vyeaRLSd6epPjfO9AYsyZ83y9GnkSxLz9wdZ33hUD8vDGvNswDwgY%2BYKEsJ69eMpQK4Ps5B%2Fd7QTqfSRPP%2FEUa9AXFXvDC%2FGqQJ6pcIW74GsJqKWdgGOsljW6MxRhjR6klyI%2FBkg%2FaOAzOnwk8wwA8EHnqtX8VkMk1zXR55q5Uw2GYuuyvdwrL7PmG0ewjMdjlQV0fC2yaM97B7i73QqkRMl5l1cherQhfkmMMDsls4GOqUB2q%2BuoxuRBY7cN5GUkyPeDvObHklY93%2B6X1xmYWFWF729BqmxJ7iSHsV4A6hm%2FAxHexqEdw316QC109k16b%2FHCZftvk1Z3%2Bbsy29v4VDOwBYPpBsnF3sja8n2dkfkxfMkT1GapAYbKhLH2RtS4sSF6yby%2FIU9lBS4fIEN9CzvMnc3TC9nY2nKrGH39vTB3C9iInl2EuogYSi44kNzj2aiWP4B%2BV5s&X-Amz-Signature=de63dc4e4a32687d7429c75276dba4d0c6ea94487594f26b140caea8d711c586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=0a8de15122bde283b524a21fb534efa985c729e470c5a0cc1512334660525a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=8c5757613e9cb4c9e99726e323710c7aa5e555563b99dc553f4e690a4f86f4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=248d1a644f892d91e7118fa396aeef00da93bcc0bbece261ffed86ac4758a339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=a9146e20daba7e8db62465cc6e1eb5d3d6fa0af4cec946393318a0b76aeff55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633USZ3EU%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFPYwcCyN9elj4Pes4Mi8i2DHUmk0nLwFh0oNN684J3IAiAKUDsAYsFR%2FXIWBWSkTG%2Bj2jzR%2Bb1ZpniqNZaWQ6dRuCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEFbYOSYj49CubhFcKtwDkExMnBXCz90wgfS%2F92nMPgRXrf05UoWPIQ%2FAsSA6prHYuuWrre8S46N6gpQjElkUbVjeMtzOMVUJTu2MMDJEvk8fUvLlZ%2BDoEA62nnIvMFrE835wJayE6d2%2FaJpUO0NwY%2BIehx1lT2zOPZ4N4JuvfulAE4kSf8WuJKKCgdKHW9ctthIE%2F0YOTQsN9gVHqdr6fzrLYs9c0uGNCtxHZww5aL8yi7ipjOs1Wou1R0i5tFo2JnGlX7yt%2BSnEP0b2rwJckkGTrbwrLINLRrNMLBEIJw4QFLsgd%2FTSb1nTJ0M6lpZ%2B%2B7TgEs%2BcIhTXHQmPxQZ6JXx2rp1wXn9m09iMs21dMDsHcixOe9LRmiFOvJm7kyaSKO4MtiLCC8khQE%2Bclu3KnkNNDUw7O%2Bi6xT9aZHpL4yRA0uhy6qK8CpqMGLZq5F9sE%2FFcMwptGvTOmsGYBq12%2BZtbxJaJGE%2FGl3%2BrY6Y7Cj73vCk5FfG2AU6GI2Neti0QaJ1WjkHrnFCxsrktAhj7NdAxUlJH1Sxl1KiboewboOu3BJjpXXcogBjwiV7uEJ0mFDsV99ega3ZU5QMyAMw2saiJZgwA9%2FohY7Q0bGE1Vr88ZmgU0V3AezpYuTREDl4O2xlGYWk3321xExEw5eeWzgY6pgEz%2FlzJEA1ssT46qqSDZCxiNJNQrAbbLTZuCzpS9Nz%2FQ1MeNicV7%2BGLnj9Oi8cqOx2F5XyMDFyJwRklV%2F4Rc8yQu5CfL%2FgO5T%2BKwERSL03whrNXVb3YOqg73ODjudd8PHsXOM32sREpC949zUu18jRzJcy6WgpIlGvrGFLKzxDFbtqCRYlRYcUm5MaOeyyTJhN5bILMTHwQc3XFVkBfzFttP1L%2FP1JE&X-Amz-Signature=11eb7bbe033176dd69733c774a85c9ccd707bce69fce3a97bb4384e6f800e269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=c8eb8e8e803a56bf940a794fcf60a6292d833be9ff4dbc45daaa425647cda2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=3e60aaa3351e6dde159dd13391f9d366b3a28f85c28db6349d1f8cacd8840e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=248d1a644f892d91e7118fa396aeef00da93bcc0bbece261ffed86ac4758a339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=bd1192e9039df8dd648a21b2c823c529821918a35c7013631cfefa78f269788a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=41704b62bc28d373fffac72ea339af0b5d2d6e5c5cb65385ed8a933b2808a332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ3QM3DC%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIFRULgiTwVQDCJuVNUHfu5xSxzXX6g45lE4A4QsgSzUWAiBD6vuM%2FvkqWLxYzwV5F5%2BIYoL1gotM2yhOg2ATEFykDiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcIO8vahYimbKngBrKtwDs9VbxwqBkkJMksFUrP0AfmtRNw%2Bh8ebHsWDCKQ%2FnFKtYthl42ftLZFAS0dOXHfds9%2F49foOjDXymiVN5g0LL%2BpyrCAYg%2BIADyeCz6zJzm2Pa9vkWXBvO81kX30Oswk2q32KQ%2FgAbySsZ9srHB4KFrMf8GS1%2BrNV8DRf0e1WCX%2BE3ydtcbuFXcPvt8CMekpzZ%2FQaDY5%2BJPTBEyXDVHNJhlW3kutj%2Bkh11Zw0wZLj6x2%2BP7nA%2BkAXLacWtZRD5Zk6iGCUHylKkcfEIUgd1Xh4X8%2FJCJt9FK3Fzez01%2FDSfo3ePZKGyoVukLXkhOWq1pLA3fuyR8QHMlGKQkmHEcWvwzkujJX35OM7LwyAH8rIKoY2i5YD349kMV8veuW92VJT72o5iizhHV02BAyIpYb9Gs7lK5ZHbUpHDXZOEeqiWKR15FnL9BrQfzj0ls1LcyJvuv1GXS07C4o1A1NMPdhNqxuf7QWhl7nLiSSXfnamnB%2BlryIQB2i%2BciVI%2FiWU0EYilG6g21dlrxs%2FtERrEzY%2Fiigc042Lg3RxvEjHtaF9uFHEqQqA3eaZQ0k7tNVRtwbPLwQOH6tpszL8g1zcdyJIJIXt1vbpcgKQzcsvfVUid41ZZTF8VQiLKkWmxC7wws%2ByWzgY6pgFzzar8lU7NwlKJDciNp7vQr%2FuEOTHFrDDSOtZjK3R%2FHccd3c2ORbHsvfiRhdcVRznA5bnlZkuJ95ZCvuupF9TyH0oI6sCaZeMl9dnD0nid1mjOL%2B%2B0ICG2njG2fR0CJKH6ZLfct8K5x1oC%2BR%2BKUMwPQRBgNeN3gpYprvf%2FwMYUi1b%2FyI8L0vvPfZHYPOJrBhiv65HgBfmA0HfZg0asrxz64CxG2hKP&X-Amz-Signature=2c5f05b50e0804c103a5e13df196788c6135fbd32e67eea2801ca9260dfd4b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


