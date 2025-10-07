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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=f9f3d6c7b8b6aaf729e5063c91b6f0ec444a01e1a5e355aa257aeb900ec80dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=08f1f81d5b1aee9a1747a8ec8acbf5f0d99c47ebf8076982daf5a0423ffef242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=a4d7368713b380e5d14f7403aa0a26507206617f1ffb7143be2b2abe30a62481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=362fccc7b13420c095ba6b0d6da5b11e09143ed577f90d66322988af625f5701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=b5caace29458dc9a4732cb5cb89a290211e1821512fc5eed83120f60192ae73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=2740b39d1831f9a04da17e6bda48484a60c29fb6a972f1bee43589ff8b18d997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=eeb910da88151192769c950f0f91e82e93056979c38057f54f0022cb1a0aa890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=ec067c2acd1c14d59df04621c85c7619f41b6aff9c32b1ff2987508da4c30fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=1c56615a15ade51c139cc32602dad535913de63f8bdffe923c615070e2c69e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=662389b1307848bb362132156f964a4b5e67dd569328926eb1a9410f14130cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QK756H5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCbwt8ijIM%2F4zythL4NOqqYGf4iY3Jt%2Fh0zy85t2nFrzQIgMNMPRAlDwRX6NuP2D%2BgX5U7BCdrhBXHl2FotjEuebWMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG2k0UURBWdO8pt4DyrcAwur513eS4UgQxge%2BXkiqBFv%2BrcrmCCkwRMSgjBqM%2F1nm%2F5RR23y3VB8Hou95XhOoXIz8wRCl0aGsR%2B4hgqQQ1QnA7p1MyFs3wRDkDrHwKb9kFFYnZZUgXAR9cgRmPksgLhII3DloDtdGjfujYTKptSHlPKChXwC2s5%2Bv5NMyAeLxCt418DJv3GoAV7sVe2Oq4cQuKHQNir8eLLa460H4Aay%2FTEUENWy3GWBkY4ESHVySLoFSi%2FpWuoiIt7mqAgQ0%2FBlXUheCxcY%2F4QV5o%2F67suRfb5ptYsbRuIDxanc11sxlwVKeDthsroaIC3t1kpCf9be4bh0q3vEuXp05UtXXQhkYokB8QBE55AX3duOs74u4EGTQiwDEFgXDd1g%2BdVnsPQM2VhF2aSJrZS62IxVHWTdQfxncM8BCah6iJ%2Bafx3iB%2B6rPtsl5OCMY%2F9c2%2F3PYx71GnObuc6G6QYdbrhvaBeJ7cB4rY3OIWeeO8RMDmR3Qdmd%2FILZo071Iw%2FvhhnVwP%2BZg04DLmeNp8qdcEQl8%2FzU7GHdBTiZzp0e97j5UXPmsrrSBgTcoopY6aFU0frOdeCdmyfId8LVC%2F64dzKHQ%2F3UD%2BdzhaP6YmN%2ByLbGvEC8vJ2JMS6UnPeBQSYdMJDKkccGOqUBwA30WYgXi1ZK%2BJb1WOFEzbwkwWyKXJDkWFnUZ5q3d8U3MFK8h9xI0iryvS1ScI8ry1OxRw%2Fdhp6PQ3gw2h43thHlqKxJhBgLmb6k3xu9KKN7RVhAr5f%2FHKY89kbGKEOR4yGifOVnwFGAz9XHnXusDRnHDnkaw22hy%2BYfn3OpesOmBYe9Z3Wbl0xdDbPnW%2Bk99gmGWCSvRtPkC5vyKvKnGzAysZ1x&X-Amz-Signature=4a154257931a792b6e1ae73709ec45dc8ccfdbb1d63dd602b0529bcd22a94c1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGFW7N5%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIAZu89fDUsH4dSB%2FUJDwAgCEVaII2bl2HfA8Kw%2B07xJpAiBBbUbjkUKT9jM%2FAX2NnWGvMDzb2Amxi1zVvRhOzu0jeiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnyi4JcS5JLdkooq%2BKtwD9X4zv7d96i1KH0cQTRnFBUaEVWqfg6G1dXfyosXVtx8nsnn3p1JjxVDcLJCo%2BhnvjYGqZ338QNRlr6fhuYWPEl8l6mYy1OaWIIahaeQKSiQci3b0jM6kbhKl0fkW3Uc5TapAdGUWDHY0XweualstU7msZQPmwb3Z4JM%2F9aZfiFwf1MkN3LggtW2V0jPhxdULo%2B%2FV%2B%2BFMw4kzfiXWhmJNLs0CJI6kaI4YVFH%2BmTwmnNJo3q7qAcEYSWry1WkbaJxjfvwOmPeoSpzSgFPeLamSAvZ%2Bbgn4B1R4Bq%2FYXkLnG%2FZbWGMsSg0ekxT8S5YGtFLAy3OXrrD2r4E2Ntrxe5dO44Bs%2FJS8eWBXnC2IpzPgmSoJV4fx8n5Ahl%2BS%2FUjrkx%2F%2BhFR7pIhUmKOmOqk0qds%2FHZ1ShQ1E2kyyB9V2i2RO3cv3yspVIrHFWyXt8zf%2B1YnVRFZjJHKX4u%2B%2Fnu8rc5HH5OWlp%2FY%2FnmkxGlAp5Lp3pwCQ2aMqn%2BMXlOOWaAvX82BaLc6qB%2FaY6M9pdKI96%2Fj9goYjc%2BGI5P3C1344m36OpXNlr6nkOEujPo1wPK9434424hh9YZ3EevoeXWEfnNHThvmw%2F4zBtMGhVrmpyah9LY0ebNfej1uSCwDXpuww0smRxwY6pgEZpyiLd69TVmLnWbM5pw4hkFvT8SvptkzLTLjk2fOkRo7qCelSb%2FY7OzBHvNnr30E4k9VeHx6eYfkv9XHQ451ab7C7Z4BeGmVP%2F0265CUae9xvYAQv6SaydqpZR4p5i9vE4ueTGfWNHGAfhoyyYiNijDZ0nnNXYB19tYIXg8wlGefzXXY4f%2FfRlDzutslb%2BYh3yvnhVRIHXDMAaOGR%2BPR4lDPK5oCP&X-Amz-Signature=6bf4d990a71cf20e358db932d7e3ec31a966155c7e0b8ca82c7407c95e267de0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJBFJ6Z7%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDW%2BxhulW%2FcmZPeRgtkgujD48jlZD2UO8rQUM07dGBodQIgBruZ%2F8Tx1mXS18%2BNQmvUO%2Byct%2BnuNfYqVIG9ABG2qcgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLLkKHvAnJDmAEqRyrcA4nAT9xgqn6mSPeiCuvYlFgjnseagkc7bbfmilSa%2BidVQ8aelRG7i%2BBlopm021yzhwmO%2Bd6vorPieSckPT75tyjELsENb84oDCMaNlpwcrATryT187cAsxm5hVp0yy4lT8FOUOkV73Gelm%2BWf68yAaKYtAI0bAQqkFSwefVB5nAxtis%2Fva6KJeVfw%2FuC2ybCcZiqzK9f11MtH%2B0YUU5yOK%2FqyOiB4iOUx5rilrQRpUc78D3TorUyyXvjuVGnKnFH%2B6H8kDDBpePjQiM2qdhRmlevm%2BtwHIk%2Fc0koPM1SX3yFxSt1ZLV3j8MxGTD%2B%2FgvQsp6S7CrV7b1PYNJL0Hp%2BwtF%2FU%2FjgMwcDaOmUJAEW6JY9W4SPqNFdzROVeiWp07x9I1%2BPI5SieQpwi8cI5m9jVhtO9xuYXxsQ%2BDDIJHkqvy3h7VESPdOvoflM3QEnqUVFrfMxJNGgxDnqE1NDhyKVUviIYOlx%2B2lwFRDhk5hbwgsP%2BsZwWcE9Tln2RYGmOjF7ZP5K6siUyTvc5CZ4Dk%2F7yKLyAEzxG7NKDypdVkUI5iO1%2BQwFcdM3fIdIXx8ldr4A2Lm1l1kgpqtz1k%2BO0ybW%2BKcbbWCZb686Hs28gvlIRZB71%2F%2Bw1Eeh5TclSrIfMJHKkccGOqUBTx65DaDFSAKoWsG3FGKNcyH2%2F%2BhpHCxsvkJJ6L0Yfkk7ttPTDvYuz1g8OC%2BUwLWAE14mnS51KBSfzdNkcKHCS1OMq2903rEvLHc9SpRQVuLt0Gvf4BDK%2BGrRHKOIz4su5%2BoNKjvVLko%2Fav9AKuUUa1QuNV7Nw7eAIUUqVNVvzegaQRVlJZFtHeusWgWaoSFzXiYtA%2BSxN0DreBY74wOT5vgUEg%2Fx&X-Amz-Signature=347bc9cd67ffb84f66ea4c18b0817432bfd0900212acb335dc310346480bf7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=824c0c4ce1b183c7910dd3ff197d401745e0d89811117fe65a8fc84149e61909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDFI23XT%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICRsjN2cIOLj8UlG8obF1EilzRCmzw6HDuu%2B%2FJhkK9TzAiEAjrS8uJmwwnNlB8qcx%2FxcccCAajXT3O%2Brv%2FCtG%2BptmIEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCQYzJubee8oRttrSrcAwLKsFAywaGtR3ZkqoiAg4Cp3lRCnGudz7HiEdtdZw2B%2FLWih0r%2BMQRglz8A9279Maw9i0XjfNwP5lV6fri581MYwXm7%2BT%2F3D1edWP%2BbrliYSnFGAESRE%2BjWnUo0sV%2Fkcso%2FXiMKdIXhWSXcOeGI1tg%2FFbdQ4wA9fUZ23d%2Fm0hq9BmEhpOuPBX1FSm2h2J2zTthMBd8SyUSpw70DQnscVDxpAF63mu7HvCsAGR%2BERFSEcECbJSA71DOeqNcsPjHv%2F3zQDifK1Usc86XaCTln3UgEm7PjuGm7cjznw0OxXMTCuV1n76LqiAvwhidMsbimbafIAYiTw8T3ln7yoKMFp0Sr3L1Yf%2FarOVx1T8J14cvIwMiTfrIHCA6XZJrOCIjid2UjDFOZtON3DOAH3vk3JOhMolor7VGIuiGZflHwnTV7hP4JJyx2xdnqEhOsggJCVQ7YfrVUeXCudoThsgXiHO%2BmtjDenC2Yq8LsE2KneBWqWDSPj8GXYcvUnCxf1Epm2zZGWn7PQaYcLzwXaPrCQ3qroI5DcdzfGBDSUKcTkF8AY60gYGfTY4%2FVZoDxqxQEjmxuFpVwg9%2BBygw8BwRaOUMjIvNPdIEbEjejvGy52mN93GVOxCjVXeIjI2NcMI3JkccGOqUBLSeKgOo3X7yktK47R3nnnK%2F3zifx6h%2BWo53KjdtwBET3pKYAoLvIPWS7kB7v3nj1V%2Br19PWUb53vZxQ0rlAppC3H7JL34kxN96qdc%2B95ezvBdfpkwlqnkFybVZVXT7dhDGuDlk8TmsCmf4YhzVimoxcyIhyS%2BGBArXBHAaJNBISuBHsfdr7W8XX7dWPjhP8KqCM0%2FlHmUmixm50f5KffJKm0J13y&X-Amz-Signature=6b9249f2dc4421ea6c559c20912daaf9fdd2734b32381444ec09334eefafae5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=4fb0a02de1a4406ac19d8583b0c2efc8cc228777a872223d056966e515d493f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMNZSDJE%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDs4sqpyLFJWZl98qDQYPuoi%2FkDoSnBi4dGNs9dJPsg1AIhAPbQGuDkhgHBpvnB6nWVTsh7BPe9vDZCizCQs0x9ZoB6KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrPV2AZ7QE5sTHQ3Mq3ANIIjN%2BDxZclip2QseOJoPSXHYBwW%2Bdua1%2Fb5lXBIRdOibIs1iMgNCKpFZvWPjIomDmiYFCq1Ai9D%2Fvx6o25Tzmx5PjKjRLi%2BkHjSMoUT%2F5bHC3k7ps7o3KOvrejgGxKyJcHHv5YEjNL2M8LtgvpnpGb%2FQEQ5MuvIbCeNbl%2Fxsf2OwUxZymGebdZ3tNriI%2Fyf2NIQfPiDZIt%2FEA%2BUtoL0S4WCurqXvmhgf7IOYf9NJ6jgpiFYaItMFAB35mqZ2CwMPtxVfaU0CCNudkhaCsY9D3DshxIwHmprWDeLwak4fCHqAyER0wMtOJWzVhl0RAkkIBeYoaPK4933eoGf9P8WT3kkt81Huk3MuIOn45Irv0lKLHKKPsg6bZxS%2Bf4dsjgpIBptQBh%2BsLi%2B4j1qnaJcb4VJSaKM%2FFNPXanUXMfIA7VfK6HDyYkZlYM1nbKoOeQQLZPMRcbImzN4djPn88Twgzm4RDE7%2B2QfLeAZMJAHsZLyKQFgJAeeK54y8ensfN24XhNoJf3YZba2cYjTGjrkJqfvs29YbVPhP%2BP%2Biyv%2BE4QvZAsKZm6jpo%2BQVxJKVzVch357elk1EFJUy5xpjPqH9WLITSvB%2F4NMcJNKIB607nr3t4rXP35lb1fu4LQjC9yZHHBjqkAYRuJ1EPnwA%2B9y%2FGxLhZ6r4Ic6N9BnGT%2FgX4qD1mgiN3Oy%2F%2BkErUjnEGTpO5No3%2B%2BCZifeqS24n9PF9CHTrZoeXv3H7DVWP58qtVqkGuxNn9tOTBHdcuejgcR7TmduEjAczIQCLRJu1IQufy0XWfFLYGSpOeu%2FQGIRh4%2FQJeJocVURs4jvR2V%2Bb2eJaNDCoP3Y8M0g%2FTwGuZtBQcwPXlP1g1VlwK&X-Amz-Signature=b3a2d107fbda2851ffa4264138b6b7aa2ebee7d65df9e5a6dfe01637cef0007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=2f497b0f8743285e2470f558faa1fa0f8ac5dcd23306424faef8be2dfde49c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ4WD4OM%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDbgBq6Ytb8UNn8ARWrCaQFaPoG0nCMA2NpdGDCMlyx%2BgIhALmEoePFitwdj6gbC6l3q9UJnYGva2%2B8D63o55Dz3KirKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYymypS1fXEqkQUygq3AOQLTOFqC5pH5nBHb51dbXK%2B9hoWfkSG6n%2Bb8lfGkuGFDl5blBtOYu8BQQt41ppVJqBtpvjUp%2BpFjZ7xFEv5tzIEelqBx6EwrNXQLlBQOpity1Z5vTHN%2FJ3Oa4qp9j29VXWwid1kaT62AEUeZGUxP0tl8f1KGrg3l%2BP%2F0Y2i87GiE3Zfl2KhP6rbAinuk0S42QK2NUcnFWRpxHHlcZzqdxaittE8oiqUa2z4vMik5D5Smf7GSJZxYyUcq6iq5OnNRkzSzfoG3bOGaLW%2F9G9Y9IkAE82IHN3DsjTevrjSkHkQW9U0Yr3DQksFM3QqM8JBmMkMQ4bnIByrrYnI%2F6ZN1s16k6cfPsKZM8F2%2B7%2FJoPgkkBRuM75d934lShiYfCVsZ3F%2BF5qfPSj4qlmiK8DEfmlOf%2BKvyv5u0pdvG5013zmmHq613oWq6OBl%2B6BmkrYi9qNJI0A9lpWB67TtEpfHPxMo17T0bEv0E6xxPmEAZR%2Fs10%2FyKKBAyUEKZTDFeJopVvhJ7m6zQEPZFpnGTBxcPmVNKlEgrcVRccShdo%2F7oMCIP1GYZCnJgre6J7LrJ4K4%2FunEF9whl6rqyVAmqoCEnFleeX7B8vVSh0%2FAqLjNpMUO%2F6hyiRhlLe0IAXiUDChypHHBjqkAQHNicOAd8PT3Zpeni6mqcOlckqDjDqzxVP1ivt%2B%2Fdh%2Bs1%2B%2F%2FQL7hcAoH3ipz3BFUIOiU%2BdrCGrYRFRd4M6QxaYyWrKejLNbusPpWY49xA%2FG4cT9tVtgVLqbgNq3FzId0jcf%2BaEENrJHaHHQa6%2FkWPopnmBb39yisKpc38s5cKpBcsbHLR3aASFtm2z35SFCQyVK8uCdjfbvvRh5K5sTzBhtAD%2Fl&X-Amz-Signature=a926c65e8c9ee6e6acfba0a2a9b840a8ad2818bc91629726a9b0c447abfec370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=2c244b8e90f7bb460f8ed315ec1cdfb6bb5e691140e1ec7f89481dac08728627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU4SIIY2%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIE3MSN2SR1fmVFo03Fs5NPJR56DvrRZjVoWKnbXAToFVAiAk5yP27mobLKffi1GuWo7iiRBJKNvvrvD8ZGhpTSIjtCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgT5C8QyexNYqJdRaKtwDCaYV5wl9OY7w7jrtLp%2FYrFomRIzJ2bwq5uITGCxV6YIqi4H6FsEoguwyUaFVgWRXSB37hhW4qyQ7ZQgaoTigC8CWqK%2Fp3b3Le0B%2B%2Fj1GKm1Bz1MTJeQeUkV4c95IRr0AmEI5gEE1UnHKWpu%2FOqZoJAA3Gkd734%2BMd53JODbNZhI3I8STc7c1S%2F2RRJu8w7KG0pAceSgzPDCCpF9kA0DrsVAyXRiPzUx7DFu7HA0wkOj4%2FRJsc94mqL73GGv98i9A9iIWSBckBlT%2BI6uOy15s9j4Wpkpm2GL%2BUna%2FivT9jhbsrqUig7N%2BXIAr1K1trWfqeIXoZz6QwnfrMZeQ2xmZ31PuutxjGde0XUBv97bU%2FjIIiSAxzUEh%2Ft7Fdqz%2B2%2BFWl0n7Y6sbRCbg6m8%2F4VAYd7yYC5BVCX3iUooYQcUlGGO9%2F8QhYMWfNmQi0VHccUybRWVuLvdngOVBqWPJrVA5%2FItuFpdTz96Tec1NUf07HxA2%2BRYZQ1xuPbqCxbCuArNmHPFB4S%2FGfcNAsnMpfzeyJqOPfIhKA8cnsrWHTHX0re6I8x3OvXx1HIdSiQuewQU4F8nJledXG%2FWKgQKZzWvg0SyyFESIFHajjzwhxzBrYwRumC8hU5bGilqkHUYwmsmRxwY6pgE%2FQbwVycM6LSojiLfTPmrEaKDIoy7gzodmaKkl1E5DD7jV8iA7TqZDmf4%2B0kP07s2QEgbSxhXoZYOxcEP9ZBujwA2pb%2F%2B%2BTDKf%2BhzxMxIZzZfPIk4hYxHfcjk8x1GXKm14Fgxibf7EI536b7hLC7ZQSwMc2DZAExoYwYvI%2FTQfkKD75y%2FDLG5Zv8HtWCNYVrDpugoXIlU4U7JXj%2BXn%2FMY6ObCBJJJk&X-Amz-Signature=0046c3986fcae51f89928e2b56891f377700637699ab866608c2cf56314821b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=9d18f100bdd77f7c1404f4482487e04bcce773bb78e69d3553fbaee2be13c125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662LDZN75%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQCT0tX1NUney6f7AarsT5eSFlBQdnLEPlizgb0FC%2F8xwgIgfHevJ%2BLOgbkD0KtPa1MCBJyBWgY3ltBJlVCEZqrvL%2B4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Dn9%2FyFn2Ugrhf7SrcAzACpJaM4%2FcvKvL%2Ff25qrCiDJFG4vNyPATuAIq0FM78hmu1HCDPfEOHGEnaE1SN3TGNgPuWZP2rxEnonEDupb3hV065LjZ2WN2vW2JLjCmKaVnpsg%2B6ex9zD4bUaaA%2FOdFszIivL2oAlQKNyRqCx4NxxEmZHjd6M6jqEs%2FFFgFNoDUQehte4GuG%2BjImfC4DwjVchwV2TXYkBemDg%2B40%2Bw%2BXze%2F8AT8AmHDb9gybCmrAIc%2FLBir6CvTPU%2F5VQRrUKYYLscbIIJbafS6t29L0TsEmCaUsc5ewxAGx7WokEYYPZd2JAIjBfDawhG5%2FqqwFlY1%2Fj8%2BNI%2FmLJY1loqMn6b2%2BZ18Mgp3pwp97%2BOBj%2Bz4N%2F5QFexHaTPujnOHDcztQTygcij%2BiG7xjd6vaYPnk4dWCf65NjKV5iN12n25GD35XTFFpGYLPnG5eeKxyXfLDwOMReQRppNpw7ESooGOR%2FbdG9nyE4MLs4rVVc%2F4Qhqdro1V3fq64Bv2jyU5ys2hRMvScv9etbsBisCBSUXl4O1b2vnYvSlOYSwDSFnxOJespM2sioK6enZBZbdR%2FeAPKxVIsBDyut%2BQTHNna3354do78GqZ8D3Rg1TZ0XP884HDFaHCYxAYT9zGJSKoMFMNHJkccGOqUBjh6rYgn0mPCO4hypRDv8TnjOfEYz8O6sOOPTawAsu3ZsUAW74TW0nVoQs8I8%2Fzi9GN5wEPZff5IaaTWjKUEjWJXgT9MUp57hYjJDfkkOJrsotKuqCTlx6C0DY0qx9zjJDfYLnAIWNonGfjuRiJcAq0hxwd0oTv0ARIrEH3yGuzLy%2BWXSqVD8jcyFyxL00E1RZpno4VYZ%2B8PjKco4ELoNRfUBsoSU&X-Amz-Signature=9ba95b244e35d61d19fb7d829356cb416dc6f2c912e22339dd09d428a1b2cda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEF2QVP%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIEapGgl2pI%2Bzg1sLdpOzuEXs9%2FXsWULfaY%2FhzYyKiJWAAiEAocjIHlcFnsdyFPD5a%2FBvXhU6CEnUPcMH5IvqGjPnuykqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOiSGPj1oQXIc1Q36yrcA8c4nLz4NSQMqPNM8KlcPh0khhssFiii9TYHuSrUvkRvV9X4ur%2B93dMfzgwWme4lAG7bF8RHsDonu%2BqPLwdoFcrYuM4OLNakWeKkRGEUXvjB91rW%2F1sEWQSoYy0i7PTGLqsB8OPYwRO7442xw9QaP8Ur%2B1cSjovUFm1U28dUAsepksXuCk2r4qkRspWPq5ikgENgcAX3eoSlZFwr7EEOUFVcdtZ9h0flTE7fSBzG0DbKb2QVXFV3L4yomq0Txtyrk%2BOjBLjKwkFbesjThKJTrbH%2B6%2BD17MmtbvlGOOZcZDJNuwSwKgXraETgyhdv0NUqt2zIbJ4ATLjWovh8xcsGzmaT6S6tiGUy5GJzGe9BNEHUV4a6ur7ZMoNU%2B2giQ4DT%2FxwDbvetRKCioaDGPPah5uQ8juavT45weweUXNlf0zrSZiEmvejwTSpousn1dHLYw9fmCnLjYqdT3IDajkN4r56%2BB%2F2BNhv2Kzmb3xnxrd44bcSkKA8uALFM2t1rM3FWD22JOwPVK4Z0S5cZsCw9Qt7YOnUFoZyoKM2pGmIQWz2HS5NgtqAZh0LjstrQjUUiSK%2BfVflXzg9XahB0HF5Xl57QBP9mZOfDyFCEi66lwbHov51no0UVvi%2Bb8NtFMPPJkccGOqUBVlhrhmvcuk1G76P4upLvCzu5h9qn1k90YLrQnpCr4cQs74Rk2BGwViDtLk0qcGzjnVJYicBtLZ%2FHsy8RUq1g8ec0xF59Q3BoEwBsFqeEOzabNBmj%2B%2Feo8xVmgb8hWARVXBqX3dRBdRf5QzPDqivLbDOgq4ZHLl3pbf0n6vbOfX55mWmu%2FVvJuuBydhm2H1iWAaUWBN5o2vxEv41hMd8C2DUdP%2F1v&X-Amz-Signature=383207a11b5421f0cd6aace0de086a782981d85e05b9709959e9f8cb0c8b7b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q33N5KC%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDVzg1iQCrCuIUadT0Nlx0r%2BdCqVwaUabDFmRUNWhu6eQIhANOcJNRxYVJLeF19WXbbTakIf8G2zrVKZ%2Fm65uhiatvvKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoE6%2FNzqiYu0lJJowq3APq%2B3mlyQfMpQDFrKod%2Fuz3I1E0qG5k4TViIl%2FcPTF9Jc%2Fx1D2aY1K2SVpH1Avoq9SGbMX7EL%2BoEGS7o8mwMQzZrH%2BBaaWK0%2F8A2JxDVHz%2BrU0PH2jFh2iEpdAnTnKFK02BUNrTAJU1W2j8OOc8wFQx6hF0F7g5sGrWsCacRjO9tEBfijvQIKBOPy3iil2G1LOOlaZQsvlFrxqtqO87HpMlsBu9zKx0wnmwJEt4wKjVIkTI6bdltGTcMCmIqTcJjc7Bh8WVtNcV5togA5%2BS%2BKwp1nD%2BaeOvV1kgANCFPPvuEoyWEYbVthYTkmQzi9KfIxZ%2B6qh0iAfwd5JiVGuu8wrbyvip4PEwUIzGt6TpfSATzwZGKwxQ2vuWb21J3pFhBF%2BIhrFHWyHhCTaiCQa1tJ74twK41XiezBH%2FDha2jwwfW5aa%2BCkrQI6KaiQINg0Vh46Wt64gKVxtlQZVy6v3N7VKmXEDsRHumL1xoU0QsD6Tpi2gLo73Y4LfM9a04TPkL9ut3j9ULlmRdBRHxtXlRRMeLxIoF608dV7fG3bfvKHz%2BFl323qCmC9A5I9XBJRB%2Fj0wgiJvMviIean7V83nhn8j5fs%2BbD3ie1ERmRySI3NqB%2BLRwMMuglsMLNNC8DDFyZHHBjqkAQSP2qjvbnyHgoEGyRO2ENM%2F8%2F9P2peo0VTIg47SWAG8tGT%2B6eG%2BH0opUa%2B9M6YTAdtBI6T9cElPKsDqvfl7a6fgMD%2BT9YFc9OwFh75z%2BAJ1Cpz04js04NR5LpyAGeIBpaVT9s8zFka7O5ZScsPy4NvDYSqfkYxBPfHjKGm%2Bn887DhzaunHZ6%2BQ8gr4urC%2FaGjE%2BOlrIEwEVakdCXM93WwXQwX5v&X-Amz-Signature=9804dd86440f6c18e0010c1f2eedab177fd881904184f9a668926c15453e494d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=a98049f6cfd2cd57a8147d46546166fb0023234792fe785661041f18bf7f9c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOWWRA4D%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDOQny0Ci%2F93jYydw7XVCBCucQJXrxqpFK7TSwl11LwCwIhAMwLeiefcrve4BItuha9NAz8BlXqpb6aJZjx%2Bobl45L%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2fJ%2Btk7qzYXOC05gq3AO2L2AGJ41LDE%2FjwpJt2YIKjcPLKcG9Ibxg3NskDVeQ8k1yFHw6ifQJ8X4YjEqoUHCC2GLzhmt79KkDugu8h6DVthyfp0xEwQ57ktR5rLdEdIHkB%2BCenV54IEuXJwar0Be7oreJaSNB7Je2NvIuu6h8rSrIh%2BscZ4uvidEqUY1Qcfa9czsb2ysHOxfiba9uYbt8PBGTLGgFUhHK6YcgrXqdwYe8bD%2BTBVphudJUGFzGFtwl0BF4B%2FFbXJg22HpLc%2FDDnyoXxYVFn4KtlviP7TREhTj9Bhl99oGA23NyuSmMglRXVGbJMO1Zfht7%2FhatuZr6%2BoQDOI%2FuL37oqJuHoSHw2EIGJlQIKUTQafKPWmw%2BOGoVZMDBIgU2GI3MBVauMFrnzCry8D%2FtptvIsq8XhySxfuWnyAK6U9fjn6FYgMtj8ijhvPy1%2BL5XCwKf6MEf76HMeV4NVGtRifOivegysA%2FqKmsiIAzDGjO%2F3x9jDboqfBVBpMNaF7CfO9DHR%2BhvEMfLEk8suYKhNyKjQPhJmyv8huTU%2FW1LzAzRUYSodheYB%2F6%2FqBiYx%2FH3vcmVdO7a0UyqVhi7uXC8StCBOmDCs2hxuWEGCDbm7OhnD8ShlYFWAdj478ZmZM7hH%2BiQlDCeyZHHBjqkAR%2BMwYZeShRkyQzo6LIS1QZmlFGZA0Iwtu9STU9n3%2Bshfa8Te8o2VpMGRh7Mc8z4bdqU83fwws7E91%2FmoSXAnnZZ4I2KjUbIPQlYKwSCr41QibMGS%2BcE6eUK8p1n0KBspmn9ReaJ1DFCynFYX9x0rwwNvSQOEGQkL40I3dPN0KzDJKPr8Igl84mVv2%2Fj3YJ8zMf1%2BP5B6BCOy6jH7t4OypV%2Bczup&X-Amz-Signature=947c459d1c86848bba5adcb09adfb254f0e15646a833951794de35eeb1cee057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=f95d2302be787d22cb1bfe30316be2e5952b7b942a479245cee6a88216fdc232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=ad1c78aa333d892b84cff135a819dcaadc81424986d913e753619658d1dbd7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=d3272f427ab364c9116f116f4ca60792334d6a9f2fdce87ebd540c0b14262a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=22789d2ed8566a012c89b34838ac227fc04fef425b8eaeec0abd08aa1e06d833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LR5USKX%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCPa%2Bm9Rq%2B1%2FS0nqPKKQJn2oTMqFVfvy3SnPcq9YNzXHgIhAMyHrFk%2FeRXiA8rZ6aaegMuVtDOyqWB2j5m%2FT317bJAyKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXu%2Bt7hSYCxiveb4Mq3AMvzLodGexCvWEJ29aQybBJQ3V3p1JARswP1HaqRlWtgetFboPpSg4uMCuf9TwxXE0CVY%2BNg4F1tOu8TkTV3QDXP7QJe1KFKZ64603DtlvFdCYeGruwAZyJ%2BI8dSZ%2B0t%2BhbjBqtmgK1Ym06XNVfYPMkzEltbnIcgmJoBMfNukAi4WpXQeR4gQmeF38uMK%2B65Nvd26SbyN63SXrMX2CsWaiLiamf7dgu33MYcuK1KwBpRnx8w2ZGh1ZfV8mxEvmIl33%2BhBB99MC3d47RbNTdiWfvG1OYspQkINxfT1cEvAVEMacO96VT2%2FkJWqEQJiNtDxO9HM%2FR240Ni7PfCLXogTwCiIVwfGIPrdvYFnBPbSMmwBHKRe1UCJafjfQIDKjhlPuIyw4yBesy8DgY7Nj1ToVSKKGKCk8k9uM8Hjrbex2JKcDo9TZNWuID5Tmrf4cyMPmJ7FUabXwGJSgtWqzvS1GJ8IyRdaB5ihXYFi9acuSu4QZVtkaWnME7YO1Vk7gTWauIOyCQ1JZiHe%2FsPkHFNsv6Ay1D53tst7bqwsicT2PhE5ueWmKoaRmd%2F3IjYEZcfAvnhvHViigZbI2A0sa7ypukA0uH%2BvunozaHjIzEb09sy1B7F3Vp9hT%2FmlR1dTD0yZHHBjqkAf8Og4dEM2T%2BSACC6RKNMyl7hyZ8yZmo9qoAkjf6NVgFYwugVD99BO8q5auOTEmZ%2FM5oyeOxqXXomE13xyUzS9BF0spKYUXHJCGTL7nhi4maws7tTGvOFxev8zYWTRx%2Fh5%2B%2Fiq99EXclZ4s%2FU7KLN4rclSM2FjUgWZi53kvgfhuMWLgYAk%2Bi0Ga95qDrpdxvT1muBQM8yRUHD5H4cHOiwtjvZdth&X-Amz-Signature=13670c8f985a3f627d049d77eadaab5789dae6c1e8b8591235ab0139c5830eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=09f1c06c38336e2da7529e408c2b4e09e46fd2ce9ab52d5c7c261c478008ac60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=df8513afd34912b2ddd020359caf10f5bb2a01b40c6c444f4338c93efff55274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=d3272f427ab364c9116f116f4ca60792334d6a9f2fdce87ebd540c0b14262a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=3a61367e28757a943e2d3baa2d303ef0c96845803b0b0b7daaacca39a817fd26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=83b1fca2a2e4f1f8e23cc07e967921940699b323a18cd663a144493744571ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YIORSUV%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC6rmS3qMoymrKEIYBCx8prW%2FRYqj4hKCYcCOvXU1xVCgIhAICnagJIhxVuLAfv3r2PkEHHSTeGCDrd96UF84cC0mC3KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUkRaOaGgllZpta7Eq3AMpuwYxaSH3qL3kMYgi7CavJ1tgDchoYiKnctNZzm3QW9KSDAVb9mLuI0nI8PZpwZj0u8cKg2nNdswPzjF8qavb3HIX5ZqtRVC1IKRKb6WJgBMPxv9%2BU54nE70TAlk7Eqc0oh5PAHo23885KdkRh%2Fo69eN4RUVCh8D7ZIj93IoWggIK88bturC1btuo9HAuJw1Pg1TqutlvVFRJEGSYh0dQVNkzUgZ5dUjJ4S%2BepbSpo1Ya%2F2tZwT5WdwwDmPGjKcCX1cwUHLEiijjs3%2BK2wNWW821vh60DiOSBuJZ9%2FxHo%2Fv5%2BEMvpF8L4ARbTxjYwhnIr%2FcYcmu5RkGKmP%2BX1xIvRSA%2F22CfcOx1T7SUfsYU75Ht63XDZJtDB8Hsnu%2BrDHc8RG%2Bob7sQgEmlTsM9i%2Bu4tnLtJVBq7o7tiXc3khjSW19dvPapDGu62XMewoTq6fd7dUQW%2Bc%2FOOR4OGci%2BnDtdjwpzKLDZ9gANhGrwClrwv71kSsfl%2B4zV0neijbh2NguUVzJesFHRI7%2FUSaxY3NQxh92Frighh0XlkeNHHuFvasMhM3BZIbkV6wVa87%2BJQlmqsrGusaFls%2BEy%2BGTGdsY2TMEmo4J160oVKRCj0kY%2BEiHkx4wdZ6Lh95n3%2FjjCoyZHHBjqkAWX8q3Cemrysoz85ml8VdKvFoyLyy7CUT3%2Fdw0mioHYzp%2Bjb%2BSWehccAz3lJD%2BijVFAlCpblhIDJkcjA7vsZ4ot4wBdVAhW3Yv%2FRg8accXDj8Sj1KQWlssw7%2B5o%2B1SgypnblVKZQN%2FnOlapYA5%2Fh66gC2G4sQHMnh0Ti9OB1sq0rXZjnYUPGS3GF9BzH0zMETTy8BzgfbSbtePnCcMqGSzhKkTDd&X-Amz-Signature=29d4a17af28c45b34d909516a30b15c6965c693885a085001a1235696b0f40c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


