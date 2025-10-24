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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=b6c0490e396f36254b6281fa750cce1eafb1ca5792f5cda52dfc51324af2e16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=d7e428818d46ae46d2b6a743c2883060f52fe6b1e401cc1ea4d816bf5e9863e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=d4d8c6ea41e71b98500486a271bf5040e0880174a8afbbcfabf7ad1a7526cfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=4c0d39da6428b6aca2206976d62e27b10ffb475e98557d5284f83c2700d1b22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=b91540c0199c3b235842d03718903b617a77816485420c03b069f01131896120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=44bccfcdabe171da7a829c24cad0a978e29a8ee461289051d99e0a44217f3942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=613e65a10f2b9fd73d6b8f0c3aa7eba6df9b8437242e3ae9acd2bf3446bd2d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=b4a61f5fa387ac73922adfb5963448d13a28ccf10158d8ec563838c423802cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=069dda3b08a787029d6c3de0a90028cc5728e4d63b56cf46b40230b6c7be16de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=35660945d3499c3aacb60ffd866dfd3a76c11fcf01eaf8a293cce8569c93da15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3CDAYZ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHSst37PCrwLvOl5AlvRmgFOREblJnSvgi9j%2BMLA8HvJAiAqjHrd0dwbZEwp%2Fshx50QZeFVUHLOw4VHNHD1uQsKhOyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM4i0QW2VE%2Fka70fmfKtwDK%2Bax4TPfJBcBzKsH9oUUjtczPugZQKfSavVbDlumZVs26kqoLp9RSWBC8uHzZeIFcZMFPYsLrxxVrtQgdK3UcY7utj9j1PX5q7m5nyeTuTd983kxtrMcNi11JyIuZW4X3MhFz13m2BCGNTaKY9B258d7O4xQgGS%2BoKRjZWKuNDZqezrWXBAYGcDbbE7eZ3VSPuQISUKZID7jICB%2FjIooorLRA%2Bw2nQ%2F3bDml%2FRontoqF0UFsDmdl1IlYH12l0BbSMrcSqUCunrKFDXoFSH%2B1PB4TIntLkgzIpxuYJ6AETtXW2Y0rZmiYvdNF5zsQH0pRU5rrgKXTD4AMlLLX35sukPzZ2WtMTXukwzelqLkpCUdZYoEzYLm2gR6ZTUw1tT6CCE%2B09CkrRG%2BX02wNRRdzD7bF%2BXVERbqZ0PWZ7L45fx3%2F4lDE%2FDbbmXOyALRfazwJnBHpQsjMF%2BU%2FocNksNZkH6K%2Bw%2FVUrwOhL341Y%2BXvIYDsGLBtsVV9D7ud%2BVS2ebkr0tBMk8IiZ%2FXrJIIuXXBbrdCA7wBrhxODTLkenMwt7DT2NxpmUHbVBv3Dr2vjovMBCeOSLZiOiUzjjt5cKT32JfS2x9Z%2FcKKiXcYBO41cnfZGc0ibKO%2BqFs6nxeUwt5%2FrxwY6pgEtQTph8EO37EsRbK2RgZ%2BaJU7AwKxfjJ4v1omBLYCQ8hjYJkRjkneKAW2OnC9whj%2FKDqq%2FB6Nu%2FLL%2B2gDk%2BZKf%2FGiRV8%2BeWTJaRjtRUvYbiO7amyQQ1MhmojEJlRAuT%2FhC3eAdcv4RL1cPB5EgtWdaUfRF3%2BM60xfHrFAUEAwD2sWJPhiM%2BXnfSZdlQJt%2BPQFjo1mzjfe2%2Bi2v5Ejapv7MHMWeBa0T&X-Amz-Signature=e97f54127bd8ae58f266bed881acbccf329b8046234b18322d0bb76021846b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAHJSXC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1iZRvUfgOQ3eeQN5v767mFiEV1ot2PQ3W4VwBr1He2AiAaJAadhaOkYrZ3C%2BQ3cm2NpdA8HzYXdJ8vOLteGYogtyr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMjsyE6Hlx1LPi9hTSKtwDsdBIaOjV3G7WzNvAk57jDRFzLB3UC87DS7BMKCQE1BdrPvWjhTojGaMpk3zXNZ7XUg0lcXIjHZPWsSg9pWvTNnIdfYvG3b0vrg6KFdkob%2F2YcQiZtPIsApGlmY19l6SrMJnDUR0%2BPvXnaqq%2FDHVU7LNU43506eNbXAnIEYOsGULAYaM2G4FAXDwLOct9SN06oPubHhXVAjgiYovG4JAXJS6M5rhdyXU730GbpPhOKVeywcwgBzF0%2FaF6s4n4TcEbG1Iu91vKZAE96wEXrIuH%2FXOdtrSGxYWWHkH%2B6fIOxDZFVQi4AWTMrY9qvBiDv7gU5qxQ584xipmjVOQ%2FxiwMKgEfcS3DCpfJbA8EgMX41y9eydVU9IinI6eIPawF8OKR1jEZ6zEdaVXue9oG3ubXaLXY%2BPXfy2DxtaRiH1wkJWDLxUTfvYq6mlRRPQb9%2FB8HCeBqDvQDy5U4EhmF4kapl%2B1z3SOvvL%2BBj64qS2l%2FP2gJoEZmeZ%2FF9%2Fb%2BecofcfCiQfAw42rGDAPwp7gFfGm3sVTuRv%2FVFTVWrhnFQ%2BkSP8A4e8pZZD4wsvqB5boJNt23UoXM9JkQ6u3uWImGBGCkNGsMrA9%2FlSwrnJkIgGLkpQHuOEqZTmkM8WRRYBcwxJ%2FrxwY6pgFGl%2B%2B%2BGm8TBdy657laMQC6dC26GJ6qHBZ2XuyO1OXSvwBiByKTV3b0NcHRAMlKoIU2sNX0MFYINLyZGGQbW%2Fqw0oub5S8mKR%2Ba8l%2B68gMpOoU%2BUlNLDBHzD7O6JhoyQq1VNGmS6VgpBh%2BEZZXtXscYYHEWuMUr4Xh1zsa8DvZD0vfYDxeNQlpIe0vY0MsJ96vvQXmXMBdeHIWfIA250vV%2FDgYY5DSM&X-Amz-Signature=1e604a3ad935451e2c5e31919ca4787fe7b353688a0fd654b297c73da430785e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SXBJGKO%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhfB%2BTI2O6j90ngzWeTWStHzYqjsZNz7Z6PfMKhDlzCQIgEMyXTdvlCZiBUSCHLczn5eyuruAPV40TGYF7LMkBhJYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDE1x0By2U3%2FuWLohayrcA43ICFeBkMZu8CUOADaTnsw%2B1u1Z2x0iATHLiW5hsI5h8A50ddC%2BcmCsdKcaQafC3LBXGriM8aSvBgAnrketrCqWz4f02UOcEqOi71UXyA9fuiPl5OA3TTkMb%2BcK%2BXzLt32kkQ1UXOxLu4qjjgLC%2BcS9KLBEIV%2FMQMGulfWiMfvx3pOh5Um2xi8G%2F3iXzKPbz%2FUH%2B3I6reqUGqXHndp5vcuhGf%2B6TLo4FSWOieMwoGh3ZwKGUQgtCPHzTENkRrSloEu68g2Q5U3GWz%2FwYTmwM%2FJyAhCSNSOKuHaHcFPFQ32NbcilwaEclywvAiFuV%2BZa%2Fm4fN45hSHvABsTxR1kWDOyjzQ27Zg4WRxOu08IIhJU8Y7M1NRSfmwSPcXJSNMUemST23exajToWOMLFG89XVFrL2C0As%2BxDs2UMQqDZJr7kjqqQhrsta3yYshARuvGSEXMK1%2B7oQJ2MC1y0y%2FI4vcyMJMDFq%2FXrz1Fvk1qWVXnY1Qihv2lrIbgQgpdrNFc5FJHipBEVDxgINigAK8%2BT2Se6nBvGj7Lgsn0D9pJYuzg0CE17HbEOW0K7q1PfhJ6mpw%2BvFt1%2Bkh9JYyd%2FVy7M8ZRjKzn5gJoa86gxHF4mpFCj6pKQAtddhM32AGChMIGf68cGOqUByRnE37A7b%2FDxPZJc4oV80V%2F2nrdrShEWqyGllsdC7TYoFJmoY%2FOJu7zTdlYeSvaonkXQtnX1hVCbIAQDDqlm96usKqo%2FarzPI6QX6Qjcs2USL3Q%2BRVh%2F0u1b%2BDE71HgTXWX0bbRAtN5T8WHhTRoOHVyRylaXF%2FWzfRFUgjDaSU7MlvIdO0FYCYVGolNzjYCpeOswuE%2BGJD3KzMXVv6hviJS6j%2F6M&X-Amz-Signature=35b7621e7b145c83d617aa34952c7a412d7d14430c12283a85e349deb578f615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=86968f80d8735a577415ae9f47f1c389673727634fa28b3055be9194de211a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIEM2OLW%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK%2FMB7gG1SKE3cdLWnodbOl%2FeHPjwB2Cmd3wM%2FPAMPrQIgWSpU1qQoI3%2BWw1QJEkD9JWz1JdQBypKKyJTqugXr2HMq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDNKv17%2Br6NYSv5VF2ircA1RwiIkLkyzW8fpKGQUPf%2FKMgZAHEHIUFtu4R%2B1f8G7CEjaFq30s1BR0%2Fo4biSp1lcl1uxcES0pLbk8Rmi0wC9lPBjTxECeFzBn00tkJF53vAl42jXwQkSJ3ZC6gOxH303D6At6N9CcWVg2Ir802%2FvjMohg9X82TTWq9DX8Oz77kPg%2BHLFrU1nCWmzsAL4Wg0CdrSa%2BOKpmF3VN2r5sHqooyXcXZyvD5srlCFqOlv1XZdLNCWF7IBZIKhj5JT7MOr7nWET0%2FZn2LxBLLJ9kqsI%2FzkOTN%2BsGi%2BbSfOPSuk8escXijB2trhk8P2bFa4B7Z8UJ%2F2Q%2Fu6DLPjCb1uwBNJ1%2FW4P7xXXckXrcwc1DJkKUg9IrnjgISrMFVFHTb09FiLvMZytTFbNOQVZD6YEotZT8v7fCQ2Qw4UB2KMuL6d4ZxcSP5HMdldcpDNJiL74YA%2FgGbCPxlb1o2zgCBJFITw8cBoVX%2Fc6uTvQgKX5O2vAZjZNRU68vCttFzbe0Ok7zBdoIu0tqmpZZR0C9ni0nq38LGqaQkIpygCjIWSDDOF1OxxElN%2B1Xt0SFE2Ai1RY1FID%2BSkIo0BSJIVUVEuthanK4hAlWeYIKj9FWyLrK9EAJdr0cae9FLjmdWssz3MOuf68cGOqUBjjwagIqII1ZxFtnwLXdBACS3zZm0gPbib%2Bsx37WAz1EKawkQyBW8RAX6MRbbYE6Iz89datAkZiLvSGfYGvdSo19ZqiF0rWSjTGIP1H2QW9fDvD95bSLRRly3%2Be%2FDR3kb1LxHDfynV%2BoTmn16%2F5xzM9TZu47YqAhmv0zDkV3Iuc%2BYMaggTwcvrSFmVvZDuNYjOCA21w5oiyTl1MwE%2FHhUeaGcYyt6&X-Amz-Signature=0a89ee211970d8ce1444d369200d5dbdb8498a452e092344461e0ea9f7503b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=bef64013f308de5192e0bc33577326dedba8b8b9b74643cadc102a513b790bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SMCLHOA%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpY%2B2qvS64ZJE7xFJg0p33h7QAH3kRc7cPfrra%2BySM5wIhAJ3BEtMchFSSPSYcaATHwsp6PMBTc1rYPUHDYK%2BN74EgKv8DCFIQABoMNjM3NDIzMTgzODA1IgyNTsRzJ1X9A0s5jiMq3AOvOqyBMKGx8p3E3KmRiLRw0xc4I5PLsy%2F9ZKeb9pe5tOGHkeUM561x5scBAFfyluTcraSWM5dvfFxNUh52G7Vupw8W5MCq5K43R7ijYRRhFoOVLHNPq8RIh%2BT6v7QJULmKCbR7GaLHwJM92aPVCzIjhNih8zOTRRij2x1Fijd1zqhpDcu5Iw7w3nSt70eazDHSKbdpuHZiTM2Gq4Jm8TwNznVBd6xRSm0iZ5UjB4Auga84sixX4oH9E%2FfddA1XMUMgGjUHNc2DGKLBvHm3by4hESQ0B%2BDPeUAoDQCssbzfa1Ukq2PkAmtGtn44qKfkX44Mh46rbb%2BmT%2FzXTaRwAiErI185409kwWZoihabQHgrVpGfPXoxaUXg1bhTTDUBS6dyFzu%2Bx74cY5rVybq%2BbWBtm2SAyEIacpX02Xu4NHDj0018iNDUrcfGgPQF9c8kSkPeRhx25OMr5PQ4D5y7dpn7SNCIrCXznrDb6lOrnHawEEYQeVnnTHrdpaf72RmFMoGBy%2FC5aqVTfj87nI1RT6YkJ5aomKHQBGXRu8GitRqaEcTeG%2B8YHdjG6SVx3YfckbWTtHyRKrpkgz4N4MWpyqLYHYr2nxT%2FPsaL%2FKn8XUPEqbwoitcrygREkuriyzCinuvHBjqkAdV4eqVBEpwXRO7ovX%2BqQLmOlMjqKa5VO4%2BZ4R8ae5U%2BptZgTrJkDvNq%2Fm7EvXcON%2B8AGsqe%2F0hc3dNxmGUq3ne5ttnhvCATKgFelIseU05rjFhEZIrLUQMkAYUa%2BixxuTgzYTnUjDPBdAL%2Br9%2FgRW95zwBjvyfLo6ZYQgbaz3tpSPV6R7joiXLYHHD9CAfoW9KjHEuAIrv0BwYL37n%2FiR%2FVZ%2FMv&X-Amz-Signature=2d110cafc7abcb8484f174bf3d05a44cf2dafcf07649b5575d6f8ab9840ea108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=5357c9b478ec32db90296048111bb9ae963c5ad175c90130bb90d4c003ad7b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z3LYQE%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvSwADLiF5r8h2XTPgIgIuISlI9K6Y3vkbFPVcRelqHgIhAPfWw1NUeLbfdFZxyIBJtQNRHOylJCDVro1ZMS6L3krzKv8DCFIQABoMNjM3NDIzMTgzODA1Igy22hC37TL2ADnZmz8q3AMkAiTgneTzcloUiDCpkmfS7DJAJFxtmEgK%2BOAMye0WdguWiNoGB3P2Uzldfi1MVQDPNUQw2nRzSwQamDZmVgWbHSYD67uLiHsB6MjkJPp2frz1JqqY8wo2H6xSdRZjK5jMcc6iqt7PGkn%2Fs72fap9xDEsPoSf9QCcUYisZeQLQlS99yDkPIpqGu0K%2FHLemI5GHtyy04cmhjWI6HTLkgeJgMZPkQBa2SZs2fbHhXXMq4rVAEDePKKm4qhYQo%2FnDxsPxQi5%2FQCKZKmY6MXd26MzXd6iDaVbSEaQZXj2TwZ%2FAEiShWxeFQqhIFcKno%2FVLvtcrWJMny%2FrxRV%2F20wJtV23%2BX%2FR4ILwPOKEz58XL1wgLUe7MPdPf7HPR3zV3wyZjG5RXo3gAS%2F4DvJucHQrfZRNLoXdcqPvFiw8cN3aNGsthI%2Fy061QD6XyeosohXF821M1leqcIuTA2GN3lm%2BWIQMosxew5m0BrPpPjb3sETiWf3nnrOjBZNE8MLMG%2Ftpv9pxjYlG%2BrXr3z8lPhvTEiE%2FVgOTu%2BpLE7AjhjO%2Beh5dKneJWjTBr%2FCT6BD%2F824%2F6LWBpZjqtX5Yhy9t2mCnoPu%2BRS5bvzScQfp7oYSav8zwlNWDk1%2BIgc4kjFTA5LMjDKn%2BvHBjqkAVoD%2FG7GFw21agoS04OQi1SsidFJflBBiwVgvb9LBcXzVaCEmlBWho3xD8rtF2hanPTsq1JBG3wrlgbQwpXe2161Dhs13V8QQO6YPcpsRO6YSz0LhoBIll8mB7QI6YJUPuaJHmXBZyRMSsnLfU7lJnIe57Q75llfSG287DXA%2B7XDnHd%2BWveF0SibJk1omeHVrEoEQn5Zv%2F1XcuK4MSrej87wA3nl&X-Amz-Signature=f066623b8d893b07013a7101eedfc0eb706f2867967e20f3d71284222425dc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=d5c405733c80096b42b332223ca8e8b3fcb9d7408329a3be0d5038d2199a525f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKLAXI2W%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHzQbWzPCI5iQy78bXrNuFPfTdl6QFG58hu6JVyQ4CCAIgHyxjcly%2FWYblrciTyHrsXuqnO3pzHrGNXs2ZL780IjUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIJ%2FWGGZtPmEAXD7wCrcAzmOlvafj7c1mk3Fh8Ml9%2FN8mIH21Ufp%2F8jImWpE%2FGT7MuC6L%2FPuCt%2FkhGsn8uJW%2BbKXNK1U6%2BnHTKU3SFFFAymqF2y0bPJSkyrZvxCjohAtQ10Eg1gfEpBAF8g3LrBJN28wEmdI1asz75qOMQsdkxA7S6SNVoPm4CxXNAT6hQDUWrGKb6%2BzXq2bXmMB9jw6ERYkALjFWAqpSVohqh3n5y76EUCG%2FFlltIHc%2FzPRa3FtMNBcp0gFxGQtNklr9z9WoEEbo4DIDdV8un4h9NOY7WGM1J9xhRqK6c9nUJRZZXgKVgvN6wr5MkWhwsA8sgd%2FefsgR7qDBugcJEVXUp4PJES1QkRvgrc8Wb2et9b0CiQ4fyS%2FJ8u9pOjMr2NIxUpprWdvTCsFZ5gKkVTPPdn4aWnFQVNZIRT5EyCYhYCjyWcn%2BzICtV0oFrwaGTS9Hcc2rIAehK8cVQcCMAcgDHIDz9mW7MXQkcvL3g1GUq2dFomjaGpLDGOI1S31rpMZg1ftutIng7KAHKs01STmvSHdSvLoPDBOC5mkDI4JVTAbslhYGSS0WcnBYRPYip5rq12S%2FPVeAno9OYIVx34qT3jq4Fmamt8KlA%2FJn54Q1d5on%2FxNRpmyqhs4idwfdiPYMKqe68cGOqUBZEKnxCtmsRZp5NYntAMvh8mKBVbMKIiiHW%2FOgRsIEBcMJvOzG7ZnTs9R8PiyK8kT2g9gJEjEDjT9F3iK4fW2a0Su8q7QH0cBH1dt3cWKadOOrIWzQBWim%2B2%2Fp2xYnVb6wZuUdCc8xy7g45ykzcYZKTZCNaOcnExXc9Xi6lhz7itSKf0MrLI9hdwH5JzVey5KgY5dFC9DQ5u8oHLUevIxv95CUfsa&X-Amz-Signature=817ae5f2a86f417bcd38e5017745150851fc14df192cbac2e6129b2425229fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=4f2d1d066bd2f422408d6ffbe0ed5b63ffca8f372f5c31453133c692b13106a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST22VMBG%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaKPBfLyY3k0SSi1s%2BRqXKIi2Wij4rra0MBRCWrIe70AIgJl88VcB9LKC6OdiSM12i6dBxBypMRdErEjz9ak%2Bt39Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDJaymdGXtwQN9xdL4SrcA80xyK8W04FiOCRd5jl7DftH%2BY1vjnXNPbkdiHvviu%2BWPelk8fGBEGE5iGUFdZ0ikkx3qMBKHcYIom%2BuAAHlnt45BP3HS5b4zoJgbRm2sshKBZahK5hgBviIFK1jIurE07kFAfNs1KC0IMtPuMnwpXBfJV2ALd3UMxDYgMprFmDRmcOEd5jnMxW2eOKWmwKBblws7B7o6vn%2BQvF%2FkQiWQlIOTOQlsEJEzzpBPnQ1M09b%2BWGMc5tatijuY%2F7FPK5gLn3zgdAJZfF%2F8zkYQ8swvP1aBF5v4ZZEzn6M6%2BqfO%2FY%2FJneihMVd7f8sbf5FmXZ6r9LMltct7emCL4E6UXADb6Ca3hn9OTub8JeHxsVSPoHBuX2QtZWkEZna82YQ2sFXuUjIDUeZXONgrY7mpD32LcNC24ZQe9IoZ6aFywfCC40gBVGhpp7jsfKudnNkA4pNEE%2FVTQ0e3VRW6dcpg9cVKf7LsDcX%2Bol98sUMZej%2BFRbUNUNfdBHsHjO18J5YASKqOLAZqMzTc6m9sav0566ipMFo6rsEbKNiWVE6ciEADnMXsElgo%2FjZuuN6meljkHc6tNU6PXfIH5JhOZgvg34bXaLqs8ZqtWi9IuNNJcfBpNRLQgDcVYeRUKpsIQedMN2f68cGOqUBG05DpVQWd69H%2F04iuOYSWDhVuF3phZGRT0I0qv13wOUQMbWDA08QVc84s8vx6a0b6G0vsfFqgPck7otXDWMW8eeY1aEp5mawY6OCcC64X6mF7uNVJZhk3dkJ30j70Tom8Sxcm%2B4xEesU50KrtaMr1b3Zi%2Bwo88CcYukwmrqjX1YESBSYZiiOcjqo2N9oxloxALsTMb%2FzpDzOGfodSyjXRnOqd6Ua&X-Amz-Signature=62ef1c1e783effec6286914e272c3e4cbee759767f1ac9725c7b551370b63972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSF4XKYQ%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiJGRFvmsL3vEBQ0I0%2BU0uCVsZclg%2BhVRj6vzbmc%2FEZAIhAKuTq2gJzABDOsdptfmTHUHVUTnkyjmiDIlEeXfqJ9IIKv8DCFIQABoMNjM3NDIzMTgzODA1IgwZ1hGFkYaan8mCDm8q3APqH3vwWe1rA0uxbMc23KPoNEbSQ5MGhTrSM7x2ocAOTaSXn3pfeJPkfVEdqR9pHZsBpcnLQlwe1ngGTO%2BlCDDSzZQt6eeTXo8e6UVohh3pian7CiZyZgT%2FS%2B4glTexRfwIHrQz3iy%2B9KnFDOgdQ0OM8jEo9hJLh2f7qllwb3U3OAYrYRyl6zptuCqMl7an9YCegfeuy3fukhK7vRv8xnbEqKOX9FdX92UX6Xgg858SNqkI9Xag%2FcVHPmqPMW6ECBKbItRVMyowaSC3vUCBzcjmVnXoBN0djoXTEZAq7%2BAiVYrCvyr%2B8mDXyDIycHw9rQ9XqGmgmJXCAoz%2BA5uM47wXsDtd5mf9Bwon0hwlP%2FZ78%2FJ2ygC0v9mq3QvmckQwaF9X3%2B6Esfp0GRPW0X6zPIwFn5nraCtV7v5pC6Ecem7GrSEnY7yACBqap3Bz6lSJA%2BK8H3JXr5ccNs32g7PhwTA%2FzqY8P%2Fzo7%2FHzMHoGcBhzhRe8Bt95mZAMmxrHLau3NwMR%2Fmmqo7h0X9Br5RrjCGpOsTgvxjtvoMaaVg0FN1uoK%2FET0ikboUTrSWC4A6jfo0%2BJBaVl8LP7umpAyqSQIl09QHmvA9vzw72mgs%2BlDkAP%2BTZir%2FvcXI2k3b9qKTDFn%2BvHBjqkAVkfai3bMuOnc%2BEcHhl%2F1bghHs12bpWqEifuI5zXasPgPfeR9%2FDdgWdJNgHTh3tHc%2F1zWlPezfNCqcyx9vIxjy%2B6HpBKJJUH0GaM8%2FN1qr%2B7YP6RkpRX9u2pvY%2BgcA%2B296fJbKBnOFA6jjopNRvzxmRFiaoY9DeKPJCQQoA0sJtPy8CTNtKwitS69Jd4UzGivApl6JoauDmjSu5Oph%2BMbgCI1rB1&X-Amz-Signature=9051521887ee2b89ca7eb92f18b227bd04787afb0aada28ca0c9a173e9bb5f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDU2CXIH%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA7np7YKxNSrL5tL1k%2Fwa%2Flxr%2BVHrOnTrVSBlmdG04sgAiEAkOMPTlrTFHwX%2FA%2BBKAa23mmt%2BOupwKyjSkgJemGLVcAq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDFurETF1SjzrQI%2BV9SrcA0Z4dpgfpw7svA1vK31NTXW3oL88L9P3K9HaxsCaPPJCOFhyJVXsTfspUhCyxkdfdaa3plt9I6xqs1BfKlSLfZvTa98UCxwyHizGCOivH7lxL88zsrhSDw%2B1lSGHYHUfFfo%2BJknjMXFknySKFiuTzW4akZk3LUfWc%2Fj%2BgP0UP3emgrVYSjSHUhUMGnw8Mi2H9mHxyi60F2O5MleKDH%2FFGniyNZE1yyp1rQeP1qtNama9e5LEh55pqz8UVdMsOJlSPc2O2VQv0aAeTOBPTCc%2BnZTBDg2kjgsrgQCA2V7IIDnfzUh%2FwCDZjv9Ne883wRzZXv6I%2Fkew3yW3PyGtg2m8ghjk04UNneh8xJpyhJ3SM5wPoLjT4MX4Yo2BQBeAMPY6KEi%2BD1UqL8NNjCO67EC9kgoMIA14nb%2Fcr2kdwq5kGbv5EWN2Md%2F8TV4Tja1MhX0E9qWnes4wZD4j36agotNZ9WbkQWtfx1UE5WU0ML6j2l0T7j3s4ncVM8FQxbYtUtuyfVaPljGWwLjOAt8kMxjiib9CFZUlteahPCGCQMz1Gj3TK%2FlElfp4yampvQRFVo8K5pIqQuzAW%2B5RjEkLSBK1%2F129UTaht%2BGoQtP2IvOubAWUn8MrzTzkAUfbVyGPMLqf68cGOqUBE6gPoDdbHqNosRdfPH7hoM%2FvPWD2JdB0%2BpOs3blqn77eVXMNa9tyKTT4y%2FJWj5VHzYOcfttG8t5MNkizEPdBgEX%2BMxIuhw4qKTV4dXeiTBIk%2BTr%2BRD8yxb0nTP45QPIWtLCRLTzU9Dl4Qp24C1acblMKR9HAm2xixUCmVBw9z%2B55CgYiGvuLSKF6FIS1TjrCaorW46wMSSqE9s5RWfkPCj4Pwk%2Ba&X-Amz-Signature=a1f0d13254b046c63a4e811417405e797784d4d72f7ab7f580042aeee3c786b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=fec35a507e4d946553f44f223d4b1fd9b86f8a9566d2c2e4d286d0cb13f4b5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ2IACEC%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvI3tsdWHaUkKDYhTcOhEC8DKaEq3zr5oEl93MjkP6VQIgY9w1Q8k02kR%2BpMaGEZ%2FInyqtF1I6rgK0f3WFE3Z00RUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDMq1O2Tfb0mAuRKGJircA8YWvBkDsHeIL00RQq%2B0eJwdpEHshWzVgNq6zSkqwBf07swRzpFFs%2F1vRChHdniIKoBLQHJPVGuRFL3Ms%2F65DcAWLH1bQFe%2FzPUzMxqsq6g6TWgfxsmncrzfjOHfDyX2ypXvnbe7LBKVEFN4p4gy5kj%2FD2vCN29rVeP3d%2B2tfj833nYGtjNa%2BPiPnLyFD0q7CB%2By4Z3kVVu1%2B%2FnYbJeTRDc%2BAF%2F0MElTmGT0VStyVkOfGI2%2F1L6qQxxvao32p8SjTz2orjpZOqYoMbOyyQStQpb7QZ86mu7mIqShbDs4lAOMGh1Nzfamcm%2BgKIk3dQY2tKK4ZKdQbn1Q%2Bab%2BQ%2BdLF2zWzpMIICLVpbrvmnQTeihJOYwzPMwp1tLu1iEN%2FPC%2BTQF3w9kyT7hOLtzI5weVjFH0uQKgTvmuA7a1BsEUYLNTEvbCVlD9reHcCFyUFCF6pPtYrBlnra1koZ2QlY6ELd9isQXFk66TiKZfE9amMZlP2cUULyLob5Jtj2ROrNZZOe0C%2FcMWNKhycwzyl56zwhq826Mc8lCEgW7FGp6wWPkmC8SnP%2BilNG9VBfpyS01XyL6PB0Nr%2B189Jk51HmaYDNSaeFWvLVtd%2FKdkNaVEOuBCr3lyII8uWwk32NaUMIWf68cGOqUB3912JWqVmKyoixgU%2FUxzGnpptDg3FN8f5vXYXgrqbyBCetHhcO3cDaKS44QXOIqVmsNckru%2Fjsj3b1eZflNDYDgsl7k94bw8Yl765YLaoNbDleOtzPyHwd7jk8baPn8UGEzNcVmO0UKHc1oF4iXHOUBay9umcEWCCORObMEgcyDEqNu7ScQfhxVbp3N7I8lU2%2FimzT7dXBKrcsb6%2FKH8ibqzMJG3&X-Amz-Signature=7ccb82bb44f6b057c93263523732282467a93e3e6521d7e0d3a46976d46398f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=82e88505b96407b36a15a26d514eab0eb9d94d18e9823012a0fe71d3505f9578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=e893d5639c59247fc03c4ff30fffd771efc90d604791a2a5ff0fe8e9a8e0043f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=3b5715d022fb592771336e02db1e8a5ef16a6331e98d2258a66b6b57807cf13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=dd1e2e8dfe4682779493795ed3979048bb07ad82894d23f79485b873f13e88fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667B2UB4S%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC56D2pjK%2Bm%2BX9pDnzFnolnxbvjmWZgalkWkqpNH2fK8AiAk9lA%2B4tx30LKiqx%2B7eNEMK3CnmZU2MLVEA4DtZs0AySr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMXPWR8RXRX27ScGFgKtwDuClOwbiY023B3yOUJm2T%2FxNa3oPHCoOQJt3VENaWZenu1MCoXQmptfaXi%2FN2b3RPOIsLubbnwRdaeu4KNjAxav3Jdr9%2FDINNC3yi5xOa5x6WoALiuvnfWcdBeWpdUFiggKG9Z1H3Odj584R4NU4eIeOD8q1dmXC1IdbYKyuSrZvYBYr9kf0CpEimBs00vUuYxPpW357jhfjqEnaUHI4n9vJ%2FsNwGFx3uiTWj5lUkKIp%2FHy8Zn7inKthvzjEAGOfN%2B1ZNjiiBI8Gy8yKsKTRb3YvVJUnNqvnVHOnVBELYs3Hju3HTqpBQtCEujetqi2Tg9sUPPjz2waokJ70uikxip%2Fs%2FiKQKxvSYr8J86SpCVcCAD9nOKwMYQ1wsd3mv52TZntBH9P01I6VlbSZ%2BI1vcZ%2Fcn60m8k%2FFc%2BfZsoiKalMTPt29vC3yfhUMh2haVKr5Gk%2BUvqP9hd%2BjhdW3jguSkgJAKGenJ4Dsww%2ByH0sNiTirHcapm4v2wOmU6nw1sq8YlkyUyYdOBeTpftKrrhDTnk693DqJ6SSNxxb%2BofeKig9WDloGF0%2FvvdVw3yKlMi7npCsqZEvtRv%2FUrscaeEkyQ8FVF6HesAdwJ%2B8fyLKwT4ooYLDOsuk9Y8R%2F3u70wwKHrxwY6pgGOMyg1YroQaiuo4oaSmBd6pHJIo0Y9QFPwEVDn%2FDO3ZoB0NfuOz6STTt3febfhzTk%2Bzew1yzrMyu%2FoZ9gf3u4PsNoFQITOa2P5r1GtpfcJihuNdSzr%2Bk%2FkLcO3%2FmGD4lX1R8%2By5jvoEiT6un910fZMn08z3mmzVJnaBEHEqjV%2FpW6F0Fyr7Cub6Gk%2B1zwgPcft5jHDs294k9HLcdVK3Hb9eSaZ4iCh&X-Amz-Signature=920d7aea6d579bd2854be6b23a088e6092498b3736cf2917bf4b71de2410ce44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=4a931bf0b5bda1308be6737f6099cff5cb437bcce2f35a75392bda7c6f2435ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=bca74f9930a2b9ce4f845ba1bf867dc7f2ffba7cda9ba5cc858c00b97ca1b1ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=3b5715d022fb592771336e02db1e8a5ef16a6331e98d2258a66b6b57807cf13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=696bdbc449e619eb5343219312ee2d6237cf5159ece3dffb809156c71936cd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=73dc895946b9364577b6195d71169729db81976fecb656d929c95461bf63f649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IUWXD7O%2F20251024%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251024T012319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfzNblf1mncZ5L43060lisPmQVLaEcdpSx8600mQ4aIAiEA%2BbRfp0AvKbU%2FZEoUkySQ9Pk0eNjrFA6oZvGJt%2BQZxUQq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDDakwj42OUpL1ywJnyrcAwuYghiX4M7jlf1XCQvT0gaRMk1o48EDgVk9gfd2a5RAiH0oX0VMNywR%2FPzgHY6FhUEB6uemcQIQZieI7xoJ45agtSKEaoMhOz3BpVoaNTknupD5HoNHR7GDrl2%2FUrEC7YQmCTo0yhpy%2BqUB1O8PbfoOOIEuUQNLqR7TI%2F9jdX%2B65At2CNPxXCqoXlZ6cmE3bhTg9nWM2Xvi%2B9a8BjC%2BKD1zLuZ1CANDxqtwmmV85cRwksYNZMel9VRvtPPCwTLBxH0hOg67Dl4aPbfUlP6JQkX06CibOd4NmNxhuLsYqjd9cfduBUh5RVaujQYxgXCS%2FhNZ4OqyW8KPY5Kt5oxxMfIDK2pFfCPyIVO0UwYFdDzTUI0JTHvRm0Bj%2FGLVzv6eB5M3PJ%2F77H%2BAN17dHnV1VZBZ2O524FSb6hvytuFcLSkXuU7zEfzxyCR%2BTL9x3TX6F2jJ1lGmXT3GITJyfAsg%2BmWGKMHt32tqcuzyUWh%2F5pkB7%2FR%2FhAvtnZDfQfd%2Bnm%2Fb7kgrhmVx1Fx%2BFhBwFXzg1K61rKSxqiIfBpV8DXv%2FoDTwDmBB1udDZu6RqBA%2F5%2FYEGVKbC4UyznV4MONJHdnfiEcaMCKq7NcKbVx%2FIP45Fp5UguKKjTezX8Wym4%2BwMLaf68cGOqUBfNUWtAgvJerS8mQ4O2g2jlpeRIzsA%2FbwZk0Fl7Q79VGs7S9VD7ztZwWJ9k5VUZb7O2hrmxlpGiF%2FVp2jZ9yi6W2b%2FAR%2F48WG25NizLIqOUjIqsv7MDt71YRfpP0O8Tqirv8ENTMP9LkkJpTwkiv7pdEZqUi5l8dT4jcLB1VXEQNA%2FVy6W9PSlbxTv0LtksBA5tylUyxLqVlhfiDFmXKJf2RDnsv7&X-Amz-Signature=0509333469fc63a0afca0a12017d4685ddaabc3c85eff06538860f018a8709df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


