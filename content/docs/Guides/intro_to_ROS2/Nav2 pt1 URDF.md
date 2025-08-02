---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T07:03:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T07:03:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=8ff57a88ead2e33bb747037834b6e4917f0764b217c414066bf544db2275d420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=969e47abfcb9176b79067ba5275d3ce37a7697946d0b4558be0a442de9bd5264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=4b4228b91d224e893b2e6b22a7aad735f6b277a70ff3f55ed243af9d2c2fb3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=1316a8e72c74afc9df9593a381484da54052ffc6630444f9783126601448fcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=d3c5e20b909da5cf7fddc64b3e2ab79b5cce8471f6556aac59014fdefe905ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=b033532eb037a641582ff12b2a6db831b2b2ac8df064756e860649606dcb9b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=b47a1b3586eb5bfee26c94bee1655f35090d17fe2d0f138aadb621b92f482796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=5d088d76a023ae9614c5c4153e6735750321734cb89e8d9f20860de3c0d96343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=09ec7ea52dd3473d205f8ccf19675255eefc9cfaec9928881649d4869a2787db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=df8e715f664e394f32d292a67ff63a58ac76b10a96ed1f5fc19b0716e585dc40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBH46ET%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHH0fXqGmTcNdLyIbktQ8PjPP%2Fm%2BXPlYhC7k8ZJwqRHAiAaF%2B5%2Fhg9pbwRp6Zvatp1bKrXhhLLvbyJuIkBH%2Fne1qyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMkpvfVlc93K24cFmfKtwDcKcBKWS1z5XyLQLWhCc9NijWmKUMoD9nXrKLJCThVANxLe0aNwK4fjPAam2AVDv70yZTVlKjVqUbt9OyqyEP3PG2D3y%2Bc7PSp7HoOp4oMb6rVWYAg7FcMTSYmThLSTJcXBE8cFJ4r4y9zjfvHIKYPn1DBG%2FtdD4K9V7Z%2BtQqgOWAL%2F394Kvz8JhnXuJrMRk6aafg01xoLvRZ%2Bt9tgmp4WM3MJ46mltQXMFCWa3xjDqtlQ2qNK%2FCc3MbgHZFLpoouQaMussNew4wj%2BfNnza8zKRK2cmqqUTIdjM%2Fwp3frcMumKAFo1KJmgWbGHDb4BpSsieS5vf0rbCdvw%2FRwA39fXS%2Fc9qsyWePnp%2F3tmf2uwJALt51O1I8oU3FBYQ8bBvN0gb%2F%2BNSrPYVY9FaCl7tIxdkyOEOJy9eAFDinrbvUid7eK7SfXn%2FaB%2FJeX%2FozpK4ASQvhqxCPAm4XoVESOTiAF3HjpMVZOJbtkTjT15MLtiwShLsV8RkKUxWwSy%2FcxjISaPqyZ0G80pGc9p179gIhHtQmTGNJntxjs7qy8s6vO8ecf5g%2BnM%2Bhr%2BxZKzjXQi7kFmD18%2BI4EN15Z%2BI%2F2%2Bm1y0r2PONZXMrD6XmG4Nd4b%2B2cI6F38uj9rL1cJiEowwu%2B2xAY6pgGI60gn%2FecjMqZemKs5Z%2Bnva00wik8iEAbQSrAtqS%2BhQ5hKfjqoWioVNsNsIzRjKiCo2apdm7%2FwrUAnAoYV93r9RDTY1s2DcDjdl0ggIVNG56otz0%2BctgmfG42qjZfeeXVyNhxdlpX8%2Bpd2MykKuu1R0dMqJBl0EgIVKlJzzUXcX1U2OoNdsnvS%2F4tkdxt0mVoit79YeXH63wqxn0zdbxZyNukrGJaK&X-Amz-Signature=9d45b444792ec7118b0a4a64a0d5921843eadf73a4044d5aad1125ad6aef25ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QGBOZ6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH1l%2FPV510r6SA2AeFQUr7KZ3%2F7STTjriilS5Iq5dcRgIhAL9TWpD627%2Fx8gtDvG9MElVJsMSrFVXhoQjxdJfuU7J9Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwgHwHHKIhl3AChKjoq3AMhVd%2FgHMM37tNPcO0FR5ddLSp9bnV3wEw9czKZM%2FrZzEYMhanpmCY7zj30W111Y82EcE1bAUZ2vrvSVu%2FCSLl%2FaAz1sqCAqfyDKdWpHeyU4aOGjVAHf65eQy4Jw3X8VyAQv0x3KCaL0QEKITos0M2yxkgJxsRold6vh3vv96jlhfojLHl1U3AEyLaFz7qIm%2FI1usbFY1aJVnmD2OUyweROFGya6qrR8%2FA8uIE%2F%2FpbHUhjeqke2S2uEOCaVTXvLNwIrn2%2FD3U6FuIv7JT%2FWYbv%2BnciZHui5nVtPrgdyunNParkWrP26jOOsl8mOOa%2Bf5aKpkyeqhR9rYzC1BsCcbX2jd7lwAw79ClFY9%2B7406aBXHaLvwiO46%2FHHeYDipWbUZCwHJr3lSi2dFpxnBzFZB9FvUro%2FIkrsPZcSSQeVjo2kU39z7cX1lV8Hm2H0rA0kZ%2F5EuK6vfUbkQbxye8KcNKXgXS6GP%2FBi3SY1dY8j8ceN9sSjmT8dB2dDclNekIiT9lWKrli9yN3ka2Fr7UJXRNpdqHxgmITzv1oWUdSOBtSZrqiOjgbKNPg2VwhRPP7%2FmLNwUmi%2BKYnz2eQc%2F8xALgT69VjmEr3Z1rpmOydhdrcIWbX%2FqjIQ5QYzX5cgjD877bEBjqkAWLXe6bDIlFPZEK1MdXXSKh5NJgKq35MPLYYMeVpC8LQwnIl3HmLQAgF%2FRtwyllPGmkWjwLxShhUJ1RQ8ea0JT%2FNiIiTqZV24pUCgd4I1lGV4FCI%2B5aHKNTTnqSdKi3GYHpItfevCcAPlbfgUWJHsFQ2rYVh92v2z1OeX1488%2FvCM%2BdK2gbQs%2BvMiJY69HUSXZO8jYnZCIkXJXqJ7yHVRcVkSrWh&X-Amz-Signature=6928c1384b8426cda3d3b9df4cdaa30edc815f76ba08ae044b61645492bb4dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AHCXIOA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPuJXGg%2B4e7Uu4QtQi8myQZeeichjsvezH0G%2BG1zn9ZAiEAg0uLkWabnkbTA7ZYY9YzYZzzixK9WhkREpvjvmJt9l0q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOGAHnEWQMBU7u7Q5SrcA56djWoJkHIfzlZX5ExLilPpCony8JBuhgqzhQ3Clvzsk3PcEFsKoLYp51dlRC4CwYPFxmu7xvGPN8lj4%2FEC%2BnqK6ZW8%2Bx2qiQDWj8u8oOm3YR7XEa85p1YhTqPx2tb7%2FbQfX9mB4k%2BGukF7q8oRaJ5Hy%2BSQ6zw6hvBrvssraoNFlBA7biXfkC8w%2B97tGuwUt1JEjbTlUpWVNY7q2z3Wle48dPSmUaMPW02C09gC9CasnhNI0baYPoBtDpaSJU8Ks3tT1XxyyIRSPOaKjEk5NLiBOCcc0T91dwVRSfsKMhasFSs7%2Bz5A7IG1ZvtvPjY%2F8uqlf3DfDbYBrSn2OQNr2x9UR8n6YZY2WLcEweItIHJfs1eqvs9Sd1fSQHu7y0jK0VLZW3z78xpxjSD4Kt%2F8R29otZQLjhlxShOvoIiDhRlXe9CN5GmwSchuenBhyEGZLcsNY%2F8FJ4VoaYwaB2L4OZA1Vbmj18sQ%2BPPk7%2Fe0PPiT%2BUHX7GqirDpebuCLAxUvm1TVlFiTcd4BDMo4W2VA6uhy7fIK1GCYFnHtbKkve%2FA5M%2B09mGsQT63OHXt01uAasl24FCNurPpUmTE4VIe7hZG1chnXvKfEqZTorog9pYps3nXYrkKH%2F%2BjqC807MKXwtsQGOqUBtSPkQsZ%2FTWJgXIL7wOu%2B2ivDVpbwdoV3UvBD2m8CNHYxUV8yRUsljStmcuwxl4q6y60ltXfrXfUQ2n4NE0MdPCllQ9W8S5a2AMfFUNw4q55XD8dRCz0yreezqEPISG%2B21ACox%2ByjEUS1DRXMhxJ27aTZeAdl9CA8wnfIxxn2nXWSL%2FsvAlyETC3DFzrybPeCNNBjM68XkUTy%2Fce95WKBB4T1uzTj&X-Amz-Signature=530fcdb6953c82584cf119cdf036eb72d145d334070e6dea49f5d5e0f2b224fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=d6931018b26ce14f66254cdb021798b092f8a86c13627d33d104257ee8ba67bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYOZD2AE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxqcIGW1NFerEQ1lVnl8x%2Fw1tLm5RIv1%2FT304cU6JFhAIhALVmGY2oBbhAo0fJ4LoVK6nmDWqMv%2FInfSVkeS9KkNeNKv8DCBAQABoMNjM3NDIzMTgzODA1Igz5Z%2BwDlmxGjc9dDnkq3AMhBvx9Pf%2Bf5YJG4lxi5r2lp3MRqUljU9BWTjufJwBnkdCsoz%2F4DXHTsQd%2BHYkbPVRH0wjUnfYbl4PkshygR5S%2Fa0JmZIFhuHauDaKKgGmQnbNbqYvw5%2FIsiJaqQheBC02qvw%2Fv%2BlUMjvXiIHbjx4vFvfbGMnnZUonvok7O4mGSnxqat%2Fn6nL8tx%2B5oFHH68K%2FFjeOUAal40PiJB6nX0E2Txpk7Fr62p981Eqo86OwigvqPkN1yG1%2FfmfhZkS%2BBjtPFZbTscSYvUfy1nSwroG%2BInNwaMmhq46b0SwNPQobOrHnJ0YAVw5tuRTKX1s4YhAB6YmBsR%2BSKNMXOOjYYWMSyOImjW2PceWG2wHclMRVGM%2B%2FA8qQbpr%2BKwuWyYMlcMVkqrdxdIE5IYtmOJzXH9DBMO9GgTBn%2FXhTIbpmSPSkphdnE8t9iOJSnH%2FrRPwcMQW6L8B%2FGSGjop5N4WoAY%2BfUOAeAHpKdgZX5UBgjigswjzHIMDE50mLBdmAsKin4TrItS4s0OooPMHpK1r%2FqMkElwXJqZHXSaysic0gzVF6lghH4RAtbLz9KV%2BnXssKCVQen3Ck%2ByzU8MERck2U2IsLikLjco6BJPHRrrPo9a2uDv6F52a6kDEtZGMXrOVzCl8LbEBjqkAd04B7U5pHU22xp%2BPuC28DD%2BNdR5l5ghfyjLKCaE6kHHsshpglqhp9yYWV8IIVxA2sZ7oyrefeipggyjwtdLsmO1Fl%2FZlwjuxo%2FPzZniaMAv0oBDXBFQ7JqebQiG0qDJMqR3jY95pIYZF7WscIq%2FrJhzxvr0X30gGpbtpKPYkSyWTIvstZEDVxb%2Bfzd33%2BO8Gntr4Aoj2gJkdTd%2BG3kVg%2BbKLDXL&X-Amz-Signature=870b1c8a092743ec33afc7300da084038b0b9613dadec9c09d8a3cc638e470a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=85c54882c70319b9b0fe91d13ee4e01d3456e64f9c884295cfe4d528f07830da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6IBUXL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCeeRieDIZ%2BXsQe12a8OsQQSKmTNE4kyLxxTM%2F2x4MSAIgCSKyrvymSKl%2Fq34gQnGevI%2FVdRh009o%2FSaNLtoUovJkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDK9957lo3buCdOgclircAx3W5BxYekZ87rKIrD3mMOf9sIGZUqD7tc2oxQtkazDH0NWTV%2B2iV8XmArq6GRKx3aO4knFOO%2F1n5djh3bwLdH3l5EG8odR7o7qhTbHThDIFpRjlY4Rz3%2FV4%2B86jWgocsbHhZ81f3bygKbYCDUUMkOMy6Gy5fEW8Yk9EXYxnTFkbTayWxNTk5RkqC5KzsqQAHF%2FeptxVMru149ait2GFCzpnthUbfAhR44lwe0E2ID1mV%2BfLqnyApNAbE7jZiP7NRzb3BBI6yKj43ZXkcPvGN7ymC%2BBUs%2B6dbye9tdDNC5w46MJKyX3vsYZg9mhunWvD2f%2BgJTPrKxKYW3xWJDO0nAAHPNGGN9xw4ELfUF3YwgjOYwtJRDE17V44x2NGkMf7RbNwv1TAGnQqX57dIYYkXYTgBKQFsK63shUgkxB8zcl9ZJMfvbVZYMonF8QaPRcpt3LdNusOmDUxhD0oiPhLiggM7xti3pJ8vrfeP34li7dF%2BlKiMus6X4%2Bn%2FcFgA2gwgg2X6HxAGSZcuFcgMisO0LdnSSX2JkZCOdDJ1mfzUdxuG57lfjOYrUnHhvBiKS%2BxtAprI6vtXJGBlQ%2B%2B5J2zrPsErgyGIJf94YlMxdKpxZiGnyDCY5De7%2F7gV%2FsTMNzvtsQGOqUBqAWiHtcHWydukTTx%2FS7hDqKSlSKFE1CptcYiwsoCW%2F65gAfX06%2FHjgLYAjE6NB0Y3XpUywSoB1LRI22inG4vLszC%2Fv52gfeEY7YMNobnZt%2Ftj52nwlSDHoeXRMbwV7OpBVRuB8GYkQIZUs5ONnBZxvA4PinEMAW9jIodI7gVvpN7YuwP85HV6GXwBahW9wXUH7KvDvy9gm8NP0eHvD60NdZB8dok&X-Amz-Signature=90c6c848b9dfdb5f557f93261dbefd5ec6fd7508a0d4b20437f579abec4b04d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=5d487af78a933051c892d65ba267daf3325ba8ba90cf80a3605a10a0cee379cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBH46ET%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHHH0fXqGmTcNdLyIbktQ8PjPP%2Fm%2BXPlYhC7k8ZJwqRHAiAaF%2B5%2Fhg9pbwRp6Zvatp1bKrXhhLLvbyJuIkBH%2Fne1qyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMkpvfVlc93K24cFmfKtwDcKcBKWS1z5XyLQLWhCc9NijWmKUMoD9nXrKLJCThVANxLe0aNwK4fjPAam2AVDv70yZTVlKjVqUbt9OyqyEP3PG2D3y%2Bc7PSp7HoOp4oMb6rVWYAg7FcMTSYmThLSTJcXBE8cFJ4r4y9zjfvHIKYPn1DBG%2FtdD4K9V7Z%2BtQqgOWAL%2F394Kvz8JhnXuJrMRk6aafg01xoLvRZ%2Bt9tgmp4WM3MJ46mltQXMFCWa3xjDqtlQ2qNK%2FCc3MbgHZFLpoouQaMussNew4wj%2BfNnza8zKRK2cmqqUTIdjM%2Fwp3frcMumKAFo1KJmgWbGHDb4BpSsieS5vf0rbCdvw%2FRwA39fXS%2Fc9qsyWePnp%2F3tmf2uwJALt51O1I8oU3FBYQ8bBvN0gb%2F%2BNSrPYVY9FaCl7tIxdkyOEOJy9eAFDinrbvUid7eK7SfXn%2FaB%2FJeX%2FozpK4ASQvhqxCPAm4XoVESOTiAF3HjpMVZOJbtkTjT15MLtiwShLsV8RkKUxWwSy%2FcxjISaPqyZ0G80pGc9p179gIhHtQmTGNJntxjs7qy8s6vO8ecf5g%2BnM%2Bhr%2BxZKzjXQi7kFmD18%2BI4EN15Z%2BI%2F2%2Bm1y0r2PONZXMrD6XmG4Nd4b%2B2cI6F38uj9rL1cJiEowwu%2B2xAY6pgGI60gn%2FecjMqZemKs5Z%2Bnva00wik8iEAbQSrAtqS%2BhQ5hKfjqoWioVNsNsIzRjKiCo2apdm7%2FwrUAnAoYV93r9RDTY1s2DcDjdl0ggIVNG56otz0%2BctgmfG42qjZfeeXVyNhxdlpX8%2Bpd2MykKuu1R0dMqJBl0EgIVKlJzzUXcX1U2OoNdsnvS%2F4tkdxt0mVoit79YeXH63wqxn0zdbxZyNukrGJaK&X-Amz-Signature=de97ecbe8b01a7d22d2d60fa673e789ce6efd39bd1566ad89b3974b09c3a30bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=1c399c3ab1d1f56c74c880040e45d7e881daadd3910bd7ea437ec8849fb289d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZ64JWZ3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG54qsWWnZj6K78HxWhERrvbdYE6s4nZNTe7Og5nQIrgAiB4EMHKAQKp6fPaz2FqzOgV%2BNP2NUxwdI0wTfujk5lukCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMlkvnjuqOvrvYYgDqKtwDW3KkXbaRIfui74PbjSNMsiQzur%2BggFmQHtTz%2Fu7F7O4JkD3OdefbRuZmTtJGVRMscaQdpefbaiKznA%2Fwew%2Fy1rK0D3LG7qGkuYNNcqbHJF6daAJv7QTEAmY9q9C9DIXVDX7k4jDCPaj18IymeEE0Q1xu%2FlpZ38g5HOlCBuvdjcmsyHf6roJ9oyLTeWISAMfQAOC%2Bk0cPcaXurESI6jKXlfa0qVRx2G%2Fp0C%2BFdTGhhf69ZsfOly8aPbKLCJ%2BI%2B1DZ5TblSgpoQBSVVCG35ui5BUenHXetSECtUML3xpkrxur5MSfMmOGpDPMyu%2FK0SLU8P759wCNopqV3Uh23fvjMGXYgJscpl%2BiCBMaYnAf0H8YStTwCjI3MuJ2WIaE0vxxemiibtUUoxjldImFmBgjCJRf0So7iKsJ0lpMxuRo7yveHj6y%2BwHyaJx%2F0DjMWG2VQQS4WiqC45xK0t3f73jGxuSR3ZctFUGo5liOo2KjIKUTYFBwMJ6i0oPC1flHTMRtZsLrrTDDn38syUZJ81kBhrDYIBqzvKKBCFsqcrvWQM8D4bmkHeWklwJ04%2B0M25GeXZ4ftP4c5MoYHUgjG8rnWT2X7NUGHZPep3worWby0FCSvlp21Pu2kTAbqQKww%2F%2B%2B2xAY6pgGdEzoifBcWf%2FeuLmmcxd1iMx2ma0Cy6HyWfnUj2iR9r%2FOCFFmaohw8DFsNybCtsu5MxKU8chKR9SLhF%2Fpkutf18AaTv6B2JGpR3B%2FjL4abl6E4AxuzQZjBpfFqo9ARTfrwKyljSICs58P5mp2YkOgx0Au1gWiMV%2B7hvb3%2FMJJQUvNKI6e9fVk9T4XQ8a4A1Te9WW6dWf4zMqFmeL4U77HDyAo7djmR&X-Amz-Signature=1c4433638cb006c7d78893a42a118cc3a1b180e4c731dec880c2cce2b3e9a6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KMMPMEE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5rQd2PDTbHvPszBjSt%2Bdhus5NWBLY4Lj%2BcNt2rufhmQIhAP1J38ziR0fxA72oMz4fjf9O5x7K3Y9R0f0iqpJ3rCxdKv8DCBAQABoMNjM3NDIzMTgzODA1IgylOjXPXyYpyT06REkq3AO4jsvWnOlriO1q7RiazzoJTEFnJMYUwytzR9n%2BFfRGpC6%2FqXZRdC%2BO4vVNC4TZ9L88n5LCyObBo7IFzdfgoFt4WLlnH67FsICmJ5E%2FE42zIYxtdGU8x21mo%2BaEkocfbQF7gNg1QtKPKEOrq2szK68gtda2cGmiTZHXWd%2F9W%2FQh8EYorer7CgibfKWnIH6sl7CYwO8AKLhVENZfjOZEjlxHOLFX%2FZLvMz4NJ3uo0AnUw%2FtM%2FUjycRvtG1zbcALLASlb1NZCqjGlgWZIur1W7H5zpNixm5M2AoD0nexFtqgaF%2BtQOcPtk47xIXxPbfNQ9Ip65QFmEF256AAogKxiJ9sly79VRpeLHiLMnLjvZdasSILFaiSnrzNGFpuLJDii6HatUcFFuluMG1vRH3feBhr1Af0B1gPkD26DNCErk8TOaTadEHUeNvUILcgfE6Yx5Xd3QB6j%2FDZCOBkWIGzReOiAM71nSjuaFVjt3v%2FA%2Bwh8AgcfXY5mAkP5%2Fy%2FOjhWhZ2gm2RH2x%2FNK0T1ixd6DeDfA%2BFiSOVkhjtzbFrTkkpJBpnKjtO2XO49UPl02bQKKpvOWyyp1vdGFCxU%2Bs%2BqLgE9EIiprsxbJzJCiIi8e4gBMiXYpS59RhTm2%2Buf56DD577bEBjqkAQE9a1hyyT%2BbwP4CEnxkqmtx%2FbSeawv2JvFtqJUt3Gw7yykH16AsMf%2Fs7SR2nbdM00blueY0xlCHOrfsTG52WUZsXlkRKRghbheXBhrKB2xDfdQlV0AFAXQLENCi3wnzmHkPt4KVcXfXtITZefhdXoyX4pZY6%2BBbwfh1eu6T0NBIyYkJ0oFqTOBklW5lZFKUnJfQAqkE5bPtCxB2n3%2BM5HzNjrwx&X-Amz-Signature=94f3b08f6c29aba65a5b037e9740edd196b32d54acadb2c63ee4e9b18ca40b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO5C6TEH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSwISs8PQQdmVWeOQITBX78lqnJzUfUJGKyLBnGfonJQIgfKV18kEiJygDyR%2B0DSF2Fn4IXvaNewwD4E7I0ZBpx%2Bcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNmpFopgaJcFVsafayrcA3s4FxQnhKZ6baxioXFY8b5s%2BVrtGI6AhWuMUQdq9pElYV%2FPTQINeENbH5Y5eTJ2CwWlyFBsHqb5wQjWo9gswZfVXdo02ZRj1DGLQ5EML%2Fhb9VRVYnuznAlywQB5EWfqeWGlcmC83oABZ4g0GOfnEQK17oO8i%2F0Ky4SMkqChRP8ArUNod3zJ9fTbdWcVoAWqsofr5y7e%2B%2BkGh5ZJeAL%2BOUZjzMf4MwrGRQtyr4uk1%2FuV%2BV8m0CohhiLFKCPZQMBiAXQh%2BwbkeqJOROSdAWSdnuvAOMsJRtyK276BbVUx0XtJsDeGh0RrRzhssyMqRU%2BPMHafWMtRobJ%2FSp1a2iF6Phkrx4n5cm1tMBrkH9kN4BklPNd8VmryWpEGtLrQ1illJ5vV%2Fde9RkgNp80j3NZZLFIthhMhLJrrqRCVuv0tEz0PgItklMtfuoHOpVsF3JvWqZLAnar45G%2FaHcJ%2FSbQhqFtmbFdNHYKaX9LZyPunCmQQX6CATf0vMLFau4J1zRsDqsQOctfAt1W%2BkAJzoLWzro6tKJe%2FibXlmeqKzFWKLKQlUGME57Qa9aivTBJ%2F3um6GjuDp4cIsz0O5qdiYKkfZ%2BBIGTNM5pLSb1hkMqbXxApum1I7Pp6L%2B6WqPOUKMNjvtsQGOqUBjNQPru5pybqUbnd2q07J%2FfbUj8XV0TPAQcuceriq3CCild2KGFtSWEOwVHf7vDjSUN%2FS9R%2B2gCAIjur08jW7zRfNqxlAefq3zvdRuWs8SwjYowoFYIIBlqnFQuvOrzmD1VzvqfN627XeXXBuA8HWgu3zc7GpbhuOlxgbLXGnC2etHNF3R33NVmVmPweDr8ECPi67ZD6RYy3yWxQFGq1m1v0EPlWl&X-Amz-Signature=21856f6a8ea698dde535ce8c3890414312eeb0014b87884991f63f278a5adb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRJN77VF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC81jfvdNTQUNvzcNgTn1APPX7lL0LawiHmH8V%2BOnEbIAiEAhEFmJZW78PS3lzbfJt4yFggVyVBtugy4RfFglxs%2FjdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFH2aPLJ9AI0mJZQQSrcAx2vrJ%2FUpVUMUukLE%2BDh4D7PB2%2Fi65XbfHONDobClR5xPPz%2BL7g%2Bq1Ge3v4mM0jf6Uf%2B3koqashWvmVHDnSqssob4L5ngfu%2F4fj1Zuc0Vf5mlsLxTqcP8PEHZfzzMMt19FrMdGjq09AM0tcvx%2BC59nggcmueeCIMTDHuN25s4ZsSh5AT%2Fzzyps9wkYdzpQ%2BewA5%2FyBslu%2FMVxluH0NogC9pst4j7MtBZovK6R9%2FAYThmvsT1wZ%2FxaubjQCAIADvQK3JfHgKzOehGZsSGVDea6NcwVUovu%2BhqhpNrcs4iqKSclmUx4KabnaFwB0ylfDwoE2FuISZLjCCqxoGfu1dpLozGuSTXOvW1vaxVggwX4CID%2FQgGEdrIZeKYIvc8vqOSiLTUJ3mdGvU1gRegNRZBCkbocUZbB6Zl6nStCEA2TYYdcxBoXXNcZtkcoe%2BW76CJa%2BO%2BvN2bQv1SfXAOWD9jHmP76SMeqbz2Bn2w%2BHfFX7R3UUBlILm1CVIOXor02sCAh%2BrtPXAfcoIl6gtDmRALCVd%2BYw7d%2B5Xlrg7easyW%2F4TZ4KBkARegSctmiHhqjCK16BjBR%2BVuwOjxk4m8FY2oOd9RTVXzmeawfPeAf2BTllOMNxEEQ7urHN9QwOVUMIvwtsQGOqUB8Lu%2BFqM5PKuwRGOgzjez5HwlkONUw6nHem5vygvNYCUvHgqEQLruDytIQ0iW0jdWv604GJg34LYj%2FvbvIq0uzef8D2acHKg0lpNs2dtX%2FioB%2FlHMoHE4MLRkPmua0pXjHv4eutTsSwgPwBHQQBBLh4QOJX6w%2BDx90SGvvtzVEgGYZt26qu%2BXAISaWJpUV%2BddfHtDO5UX1%2FdFUmTpEXLeOjrdTjam&X-Amz-Signature=c373b850fe6d317ec0d562e03debbbcbdcb3636ddbda3ca07ecd3e35cc0d0499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQZCY24A%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2LDRPmuS6mVwJgRvkxMeZ%2BwdlWy9OERnr%2F%2BpCnBJ0nQIgVteoOZrn%2F1cT1ExmGm%2B7R8v4ozR2xUXrOnAHYBvdOX4q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDF%2BXiGnm8TRroJpGrSrcA%2B7gAzNDtXKjtYwmpngl0SipZVsyXW7jZxeOWkXkqaJq1z4f5JyPwQ8ttHYn890reEIAkYRw322thwgQvsgiGMMDPhx%2FY2SUkhi3DqcCbnWMNQ9DmxxvxOHspQaF0swi9kcQDhhKRFEyP66YgWs1cqlZAcKf7hStLRdIimLR0WKQ8qr2iBa0dhz1GsttFOLp42ykMqEa25stjHVJm6wEadJFzCakMpE%2FEmljGrPqAd7S6cEA%2FMxb8t%2Bv%2FvR610OdOAxj%2BB4tH%2BeJKsKXE7YH7rQ%2BVhRO54CZBl5xC8obl3AmYsnW2Hi3hcj1Ph8yzEnNgcMZmosT9gR6ZfZKpj%2Bj8IfLnN2zuFdeCX10Yz2B3tGoRnOge%2BrbYpEfD5HVije%2BjRlgXTV8uUrPb%2FA3rV3PvNDboNAj4WjC7%2FhUOUzGqyFUL2t4xZbj2%2Bq%2FxHQHBkugvzSabbxiLaKZ0%2Ba5K6nUXK85MA7tFmmyAteZSctvgZpeOc9r4Om4Z%2BP1fV7hqMrneFa3%2BQMzvIaVKuwCdwylM3qNkKFmEYrz%2FkugwIlqt7NrzwILuzEIX5xH1GtxhK0ipQDdo3JRSt7DUT%2FNSxvM3KvWZNgL7xVVuyXWI4CAfgsQlO%2FlcSJddSvomW4pMM7vtsQGOqUB3iSaLBFSfEZCrVQBcKyEWm8YAqslVqUz4IgrD7%2BlTrWdHrCHr61aP335WJ1eF5TUfe4lAql5O5Wef1Z%2B%2B0fWd8jw90LtUxx1tdG99ZVVpoRhRdpnx%2BhWCoSf1NS44yB1OYLe7kXZs328E1LHK2upYHqdki0REatURGXxFPSd9HqjwwsSWdPvyzJRArfKBRud2DP09qdsQoOpEG%2Fsut1GRSTzDqcb&X-Amz-Signature=11b1e38babc7cf3cc47d5babb099f6ba929788ef52e8646c488d5cf5eae19204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=2d4ece97625ef6c75f2620394ac7d1c19299c78474c3236e3b5300d3ae35175b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE6PLMO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByhKZiQKfQyTalwkUaboYhWIkbgGMag70haE068IT%2FnAiAkaGjP6RdpFJVJHYICOb85iwM6ruHlZjTzEwYAep%2BqDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMi9cLnmYIAUhC2JzNKtwDtBXyaz4%2FBbBBjSpYPnxCSpQrxfGkf%2Blj5rGkvQbffzNG%2BunZ6VI1TbukNxKbhNLcMHNZvvEh0P1dNUq7ctgUBj%2BSfyJW%2BrYlfQJ05Y4oxcpuY%2B6Pw%2FigrNoWGrlUQJ%2Fj04EuKKmi018C%2FPQ9hjdMsaQhf%2B4fxxb0jhZNZV5fn84AabFQMs2mSlCd3wpMXRN%2Bb1XFm9Vs%2F2qV9aTMh%2F3BFUep6SnFgurfgTG5ZMrkWzAwWCXA5ZpYzVLQZhkScn%2FBFrK53UO3x1ZmKCGttC119%2FGFWcBwg8NRtTOiAXHhbandBZHbKRdsC5XN1i9ca%2FQIz85vu6szl%2BLr%2FRO7k%2FMujErP%2BIUGR4BKaNTkKGFquick2U8sIPdnc1bkQxol8GDPJmh2TxhV25T9MRrDHBkDnjbbI7zYZPbK4xnD09JBHVVyQjZTylWv1upHR3w2rjH%2FY7G2GUUcF8nbsWN8kzXlT5cyijBMyklNflzN7zlIW31pgDM9lf4DyynMGKPoCOFAYSD4kpfRbbUvq2Cx24Ehw6quEctE%2Fzq9LUgswxCuW3qG%2BGP3%2FpHcuKQOEqkJ%2FTOuhCQwHDBqxESVAmB7ontQykdvJoNL5u3YOGkLk1Nrj3KyHm4P3nNilHCvpVQwnvC2xAY6pgFvHVp0csZM3nSVA9qi5juCae%2Fh2czcQC9ApyYcjbfozNGXcAH4O%2BOBIinFDv5%2Bwr7f4JTrt3mXuMW2mHJbt5DChiagkzuwq%2F22xQ0gSbLp2N6ULbddhRytzlMemFfHRzwOUVLxw28YYETcDOahCfB%2BQ9WCjrwd72F321JmlSDrIuU5MCCaYIqU494jyJZ9klY%2FEAXsO9DuLlXBHd0uFI8cxVkEB%2BNl&X-Amz-Signature=704f6175359d96f6b3036bbe3cc476ff3f6fc6fd4cb03e35550655bfd9bea5e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=483d2f138c322fddf2caa9f873f075c3c4496719618b58b16fc7098025b588a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=c01daaa72d54e6663e7b6dba3ec9578883294b5201a0a624a48f1df630b21f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=17755c41eaf8a016d40a0450ee114f3d71146cfc7c7855d49c7b6c246755e8fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=87de99c3cc8dd219d60e7e60f95a48bf1664a8d50598c5647215aeecef8309a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=4a886a4a6c091ddd85b8d8a5dea4f73a45243930bc8a3c7c47da68ae4d8dafbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=0dacf0875f8c15d4cbaf1a8c1226b6c0eee35ffb688e0bee13e2d0c62ba609a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=2184e1c41b30f7d921dd8c2d33a01a3b09f3caf265e5c0901d1386720b3f9535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3O4OR4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhOqrNiwG88WxGqOevS4QnYbUUyWw4wfROt3CCQfoEgIhALJVxPujUbNqr9g2vJamO9meQBuKaRW6eOhjB5c3Oaa8Kv8DCBAQABoMNjM3NDIzMTgzODA1Igzck%2BZwc%2FAP%2FEDZqDUq3AOvXLdyjqxKO77sXNHnwhdTdsELMPHSFP6UFk2owM3it6HMAx4HFNXo44qsr%2FMSGB8y%2BzhUSdOP1j7oZrAHCCiljB3YAKzHV7RvEcpWRUdCSsHt3RF2e93aBrDlNJ7Y3aSRZbdgb6ePmw%2FPKGgM%2FympwgFonqH5RDGjEvKGm5Jk%2BFbC%2BkZY%2FukFgH5QcJmxxZBZRt%2F07wXUKVmSabiS2Jys1ZLcMZnp%2BlZjyGTF5y%2Bb2Vy%2Fmf75TxrQy7SiSu%2Bi98yEYER5IIlQBrzNdYDKUopehOblCMH%2FwVSGXPhppFmG1IDbiT6kcaoSkhtyc6%2F7lsTUhbQb8S%2FCXdC%2FCL0SD6sb%2BYO8maadX01tKac6z543uNUz0rE%2B4rJPXme%2BcUbpQMtTnD8MqV8vqrWZy2vpcjxU%2FSdu0ol%2FTjv5AcJTWXj6d3J8L9TkB8DS2BOXcL9NQhwFYzJTFTCdn%2BVRiMYnoiayUPzQb7sOwQPEqs1uRTMtK7qBrlLmoX7v66tAa1r9aYOqkFxTTIzdCHQXaoLdjAg%2FqHts50tMHCVEQXw3%2BIL%2F8BrpLZdJe1fiTzZb3SGWlS9vVelLbqChrkPfA1CYpTvtVXI7JKhLqtwfSR5ySNbUjYAj%2BVxkKR7SJKciRTCM8LbEBjqkAQFp4WCoYsCUyWoqHPFkr9Umqcz1C1LEYOIOkEVCoLBTPvFK7hjBy%2B1NRxApXzWHYWb5Z2PJnT49HrLlIMD9fppLQQ0YqUzfO44YoMLBGRtIc7%2Bpgc3FVAXzMFTG5DIrMcWmNIgAliSaUMi5EEJvhMYUGNDtXIarFolUAGIFTAdlKjnRBXsRmM%2BK1SiixdSjL5BUZLsbJ5In61p9%2BRHdH0EM7z2J&X-Amz-Signature=3bbd014f7376073e093aecfd8277b703209237e98cb2879fe4c1635169a7a0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
