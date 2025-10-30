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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=b77ec48760f93e0b84f0077dd49bcab798b013b58e6cfc19213072792d9406a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=09cd275a575588491e536ab98919da9ac3cd7611dbdc828183a63b2df4144bb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=975cc35f8c7977524816561295049d5681bdf68920c0f9929fc72cf2e2f1e6fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=8acb9490a0d539056dd9ff183b0a985c6380a2010570557838ba6f87e303d1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=0ce1838b4dea65dbba280557375addda77f2cdd43e3bb3233ca5c494827bc2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=cbc2c16d0d87e61fc8485dbf757cc55a31347592436cd04369f5355b9195f7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=2ac951392899dc0b3d6a2602c6e231febe65e6ed29f72912b3662f56db0d950b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=d89b732b715e2690840b588c440b26767e8b33c28c82b758559106fccead7b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=82ece59f5470d63a64638ab316f484dcc3ece415e363d204cb989195dd6b4926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=1c3c209c2ce89626e1409fd1b0fa1d3e0ed5207c5cbf8739a4d4dfdaa839ae20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSI5M2E%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIG%2FuATuZx7PXWppxupCmQqnRM9YMMRhuGFZwRvPmL46bAiB7FO2b6Iy9alITq4kZKxiWE5lAxnwpmDUyZv6Tt5kCUCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVySvG2a32paYpYvvKtwDL8v8L32YFYmK66wHns97q%2BtlSqTgTjNBJ4N5q6SdjX40js4bICemTMgSq9nd3cZpXPn5fV5XgYC9gycbJVlRctL1LDFZ6adKjybednSMN32%2BbnM2dDRk0skCmIc1V7v72KV7qfsNhyelR7sxE0RCv6bWR01c7IZrXqtcvhAUG9HoUqdbDpBtUFw7vSGSXftVuRbltEy4pQ8Wj%2BiQSxxmvPk8cow7oeWNCPBU182CkDrfBG1ePxswQakyepETUt8FHA56BfR288%2FsF7JZFugUDzho%2BQugXzEtz%2BBdXMo75vLJ4ukJRfr7C1oo7rZ7ip0xCX95IYXYyCWQ9rqfVohNaymmkp0B3BOzzpc2B1PUwuEgxz1dBbzhAWT6llNRQJIO5BA8wuoXoR78ImH9r2JUYLxpe7FhyD7lyLsOO0%2F2wKXGG%2BapcuaVDMRWbt%2Fup9L0Kn0WgRz9GGEo%2B4xBLqHTzPyIpklMtGq3yGFVZADzgheY71T8c0wpR43TGJXb4q4ks4yslDg6ZaqSTzd689%2BUvoYq6CiCSyRZOh4K2I%2FrFoWHO6jvHIMIZs5PHRRmjjLWYbTxyWN2cyq0n63d637cB8gWPFjead8UQpNVHPGvcXvAr2PEvz5fuHLHWg8wg%2FaKyAY6pgFqUxwBVdmd4d9VQE%2FqA2FwGe2U0peUex7XQfdl1H3zmw8zHkaQ7PodHzptWL%2B48aLzOBqGtHRBj%2Fh7tUQY%2B93jLIYwUYY%2BYAbrb74Dfi6fSNTzi2DoNl8wlvIAby0eGb2Cl8R2ZVkHO66ZMJQUat1VS%2Bxfqe25EyI7tcsFedYWZTvuzC7hdUx9Z5CrvlLoa8LXl0l7YnHZuBvpDQgvlrQshlO41D8X&X-Amz-Signature=85d913a0903bc54ff431e42e6ff65c540536e00b75ce82b8232524c41a04091d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUSJXONC%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHGBip%2Bu7Id8m%2F%2B0cxT2l6Vdh%2FJNxjbT1lfN1KvpGDP0AiAB4bCIwgMNdgtQg4kkD98q%2FyazMNuhyK6oAQVz0OkWKSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAdQi%2FyWq%2FOWuF9zNKtwD0dOM%2BF5ixKgIJIbePmuCkzLtC%2BIS5tCSCiU9USZia8ZSOYNRgmb2jAzIsTXnMayMc8iGrkBtMw7iwtFPpLfah2G023MZBCiMbEl33LRvqC0nEljuX0RWVsyPHwhBCAoB4i0piqUZh%2FfzH0MP%2BhQb0l1LHUvabarZuYHNyTiP%2BFdlXXCKSOJUhSreNC14EqHc6EPLnpz4ZBmAQd%2FefCEVyN5d6bHt5IuzX7TkjVLm7lOHfvLXdqZUh2ON%2FxoYqG78LaqTghK5oSgBFAPBwudmnNB2wQWCetEHvASZB%2BGcHz8vhZ50r6DD9Gr%2Bh48lwlQXo%2FGcDJ6Bj4oRx1j7fB5%2FusRaH2LTb%2F%2B2%2B6Jf0%2BNIlk1EkLwkjU2WhooH%2BhB0tUQntWoPbYBK4l9%2Fj7Z9XlobfEEnNdvM1L2iV34CifId%2FlmLRwSPGTT5wKXKHS817s%2BaS%2BXmhF9fmQ9NpHu5oo5JhvTSLrYCzp2pNdNVUmqB3CQgNmtzNXfF5INXT1W%2ByfHsbRxK9tj0ez7n4LPN%2FDVCbh8Pg8D9YH0iup%2FvnA4r%2BljU8cd0fDqqJRF0Sr8RqGqOYqXZq0zy0i60NBsf%2BzfmuUEMUmCEMMVp1NHfAVLM%2FtA%2B1uAllTE%2BmaQrSuwwnfaKyAY6pgEjNgs6zK9l9ucIhIAE%2BtIfk%2FJ%2F%2BbpCCQ9jlr1L5yxaflrl3H%2Bs5lDJ1SyxhrVvHDLkOBaNG%2B2t0IujbHPppECalEe%2FLrjG6B8fyo7fvsigdqAzBOXfvmWi%2BZMPzgeb6IvyoWhONXrEFpLyI6fiW%2FtXxVUAEL3Lc92kcGSUKoJAF4GDmd7g80esmSaWQltqUjDpLQ8DTQhvuxePSRZQP58ur9ptAw5r&X-Amz-Signature=44afbacfa531aeb540ce06a2c26e621de8a9786d614b5f25a7762157a653569f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4QEO74S%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIDjq5o6ScVL6NIQCo1aO6I6%2BqKQQRVip%2FyHpuSLE9AZfAiAyVchNv3%2BHYqLU524uiHINf72oQdg1HJRAJPxW9lzolSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9DaOxF6kMb5V1S8LKtwDRTMIKIVy%2BwzQO1r3bV11lZiOWseaw6ALmo2LGxRwScQEmwOWwQpuQGLR0HT2Kw3O0NeumhSHMMEmqq9VbRvYLRKXW1i3bY6pGolm79tXyffUOkWmGxhNoD7x7H9ukuHnK9MjfVqpO87opL2TqDqUpI8Tz3BkO5yX29RB%2BHQmapSlQl45IxoDCfeV%2BdCLvlJR35bnAhuRfTYF8uHhMpJ4hUOoOQCrdxFBvzK6L2w%2FefpN5Q%2BhPgBfaT4UHuBfrXcGKuDNaHSfRyguWgzZLPy3AqzJ6dkUZv9isRg30G7SGoXdGJaF9lULCa131lV0ChkjkXaNtjtNAq3JUcabvPAmqGGyq%2FFk3kp%2FjEJWmimMIZPIMXfBjCmiVqy1TV6IZNrCApLQPswLnNHEnwnhcg0HniQcc%2Fbqq99W6ZQZrNA2XggbROtCUMfxCmL8j38%2F5ziLLUDtPoQNf6YtLKr9OsGzhcPY4UhOnMj%2F%2BH81NYV8hR6gD4KpDOYR1%2Fza0p9eUmdTA%2BM5WF7FBhafFJ3ql5qi10TlMX9OYCWPScvbtSUQGIkr%2BbVjtOJWI3K44EiuTpaAsurUcPyoff%2BYuYlmSaQJUv0bcZZM7EcmH8UEO1W4K8G5hn8ARTQmFO7wSBAwr%2FWKyAY6pgE7tCn8Fe6ym%2BnQweZsGzRTse267yvwrdyEcACNReh4%2Bb%2B1akRwgFW3SyhqlRZsgoeHBMwzVSyiRAfANHJm3HQAwMH5IGTe0icwzPxX2FFfzyX%2BLF%2Fj3cCXtpHZdvES%2FmiOl1KaTUpLusF4K%2BJeR1J5Dledcss7cv4iO7RmCBAxeq9Z3SNnPAxtrUxQwE0TNXEuFf8fu38IULYY0yEE%2Bah85Er41inA&X-Amz-Signature=0c7cd4955ced6e28d35a38664e2d266516aa3175fc5ec9b7b0d9e756d5397c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=9af8001df0857ab1b7b0551801ce8b435303b6b96076d89308914a7ad0c01ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HKH3MAI%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAnkFiO%2FmcdqMlQGAi2PTN8JQ%2B2pR6PVoecuaTfDX6OgAiAHjzuQM0Cv%2BTOvASDB3Hh6w37wGYYJMkwgScFmrCxhDSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ohsDf1Ww8b%2BNuxdKtwDu8LAiQCt%2ByAvCEAuHDIbKa3uujn0Gm2mPr6HSjdOad7TSIOvpYxIVzF3lFMrOYrtwaJ1AygjKQRe9LEDoKgk9b%2F9iX%2FGUZUC0BKQ7wk%2B5meEjpqsyIe3Vt3C7SIXW4wgFIZysrt7OsaLzmDtBjLDQ9uDjlCbxKJAjeq0hfzAUz0fmhn2BkhnunuWEvyW4Y0HbspE8cgAWeOASdHaK46ugOY%2BJx%2FXBjQ0QdKS4iZdegHOe7qZzEPofaQOBnqDrj%2BkJOwhBfJBU7mq2TsezilPbVGLXMVDIiH4MiXaVR3BnaMBSRRq0zbK7DtOKE7brSXmdk0iAlsfpEc2X1cK7HcMH0re1%2F9KYQK8dcZ2EO0r9ZsxE%2B6URNAhvUTZDbV5scw7hiR1FBRq%2B5f4GlZKEOMYxVc%2FQJmMMm%2F%2FmVOtzBrX3fZ3Ymz8e5VGAdO3TKDITZVEUeWGOaVCtikQ0wEALPhclc%2Be6vYYFJ0CvAZ1ILIK%2FyCkmBohrtenJMDCS5GcTL7%2B2gXFBxIhggXYAfdZ8ZOQokoVmIWczrdNsCUGtZwGhXqt3LAVKmRsu9YgzSBVXjx1KjfboYRYM9hkRnlS%2FD%2F7X4WbKocse4gKMfcTQ6r%2BgKRJfqv57iXGJtfc078wzPaKyAY6pgFriG14fICWn6L6qq85iSK0SgB9lOift7MI4nFqxZSUuYj1E%2FkVBZ9rn5c98rB6dlU9PWJ8WyRLyikLWsZuLqCyDiQ3XRvFLaC%2BbvN%2BnJzNOtt9nlypJjkxsOL3UjkkQXKULj0LgfS4s1OUGrTb9xQSyzDT8Fs7HDRH7JdVUryoFKmeGfyuTNZThIBbvYJnsdq0WT0s8LRuN5oqdXsRVY%2FM0rtQJUq1&X-Amz-Signature=af6273773c140446304595b4cd89a76be33f10fcf8116018cf3c05867b3e84bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=8a19074a34af6883cf89d125629b83d0ceccd111f3163967bce77417c1f4d1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUNC7JYS%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIEUSSBu3UtV3s9bbgouD1FLcf8iTX4%2FM%2Bu1eDR9o70QwAiEA8vDsDAFJj6atT%2FF8iWonMRkuem%2FvVSJ2DFBIhELxHrsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAxZ%2BnYqWLw1Gvp1mCrcA%2BZC0mzHZJXS6iSzuiZGekgZv2VMWBrg2W0EVmGFdX0xLQU2j8Tn6kAFssT8SDV2pnw7wsj%2BKfRHBpngFYDpfaDiz0%2FBLSr%2BLdGHk%2B2RKrnVwj4Q%2FQvNUOLyULU3xuQAAdE8Y2%2Fplbme3QrDjAivDQf2RhHaaxwd8yD0S9qpMQM3AOrxqxXXPnvQoXg0tehZZVDlGZFUNGjrlOp7w%2FA%2BIelxokJplk%2FqBa%2FM5gVfORvFBhbCuf1acjXkURllRZ79qfm9W%2Bz3iuxirfqI7KZMPprdJ%2B1V93qjwTysQQ6%2FnodaN1PZv8XKe49A0mRKaOWTbmwUAGb3LL7vgxrkNJ2yJ4PmgbL0aGKtCEpmk7vlDjvueKa3XxRiIwCMIALYl1KkPD1aleHga8xbqCiBUVLu9wz55BVizoy%2F4CpN4hL%2BP7guQpTh%2BREM7wntRPXjtG3Y5fea%2BHhE%2BN0BMQMN8KHJw2TUlKPC4cgOPk2Ru2G6YK%2BCXhWKKWq0vkz8PuMrA4%2F7mL0R9e%2BuvPHcmvgRiCCom2hcmJGF9Buvwfcr3OMarb1MVZV30%2BFDeUTckCGkluwSii3TxcxShFj7Bti%2FsZ%2F6RP9IH%2F5TUl0%2BWtKUbKEfzeGSiBDuGnF99qUsj9SZMKj1isgGOqUBrtLg6U%2FMhs91q4fzvnpsX5fQKqv%2Ffoazka%2F232LkK%2FsP%2Bs505XUyd2u5rlgcoGWHBpAExED1%2BePlB7RpObpi1wCcA80qUhJzF0pqav7TO9tjR3zxj9xafxI11rQY9l5MacTwG3GI1ldx3GWX41HdGo8moF7b6Vv%2FnA%2BaAE8SfM36fy3l4vDla%2BcHHXLDp4C1j5lPXugNDDciyl%2BTowQbp%2FAmylHX&X-Amz-Signature=c574c834379cb050987ab78716d96177155299423e3db682beefa13c32f4f8cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=d8cb2fa0b2a78b3c8d1303372216598e32745f0aa922b3bcb86e46961893f577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGB6ZN7%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDtW%2BpfJ%2FOi8KPhW38EpGu5xI7MHQlTYcAlzjWw6KRK2QIgUhwQflOC6oucSERpwyPGzh1bOTw1Dx78xKTe%2B1mmHu8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZfuYcmj3OwIA4DUCrcA3%2FnS4xeE1xixB0Chx7d6cXAqvmuqCwj06Iq9yYNha5tRVV5WdzCoNNdTXRIZ7NN3tqKayQbPckRt3Go5iiXkKw%2BnEeqgVy49mzIGP%2BsgVnaVxJnyu5zGmcwA%2Fi4IKiabvg5GZZrtIHDqoMCxSb%2BFjeaeGkzmBfnCcDUoAGSQU34xM%2FZDkVbPdT8KljJDB0f2JBmcvKD9zjrOv0hEiDirsS9RoiCgnAns6IaRbM1e3w1e2QrDvD3CfUCygjuG5ZgnUTriZyJ2NLyUuuzm4r6AYdJf8mYgKCGRKWAeBaGBJ7Con%2BA69dSCZYcUI1Yhs7giIdN0FYcx35z0%2Bk8PgruybIL8AaT%2BoFm6q6qSY0G07Ncd6q9R04ljU9f25iCNMYhY8VeMZnwlaUDmN2GMasez6nTS8CA5T8%2FKfDseDZq04ZENVZM30Y6EQQITH%2FqpjYrtQprush72KxyNnEXxOciM9ldu7K2GTBaExwyJqzQxjEOpKS0VfnjBQPvxedn%2FBkKZOOuecNgDbLMbzr1L0rQitnY4HOOHDcCgijh13JPmkfPiiZj25OG1XgMKlIOycKL7q3eNh5xj%2B2g8CCJSEguMK9MJznmyb3PYZq%2F9GfKOh99Dr3KKYHrvMW8pjgjMJ%2F1isgGOqUBYlrNAYoEWxr4v%2FQoVsla34LJRsl9k%2FW6GnkU0JRkKzQaXZcML%2FIYc9b1JzIWLaXm1cYM0rBHOkE53cv3Tldn%2FpS6j8DSaantoeNoPlfaNAe8kFl1R4rtJh55p%2BQlz%2Ft4GPxOjDLClwVwCMwph90sQCpMwLL2%2FQe2w2eMFe40dBcEtbTNlA3wea%2Fiq1riWFMd8bxoRJYzLSd9T5doIL1xUPRYHhc3&X-Amz-Signature=02703e8330388f38a40e5946e7acad80c10338c24b38b376ee96e65b35077ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=075ef3162a98fbf20b07a1f3d3550f26953dbf29199988c5a9e10e08e5fb6199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSOIQ6HQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIAPEDrb5cKNHiZ1Gnw2zSMPw%2BztUJLubXHOESyrwCZFqAiEA3qQbtOP2NMIS3XFVn8ale%2FMXFVqOI6VhnuDUwmtp%2F6kqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWyAeFXSPZ5V89hsyrcAxJ513fUh4dorlIED2jFrvDxzoiWBYT6DiJUxWuzC7p4tfexoLZijEJN9jCg01VkVO7jh78h1TR9D531Bck2lXFSGGmiOc%2FK4As%2BRgdVZsCWtgLSsPOHnGA7sjg6PrRPeo%2BA2QIeuDL%2Fs32aQT3wjYNlBvv6DjJsAgAmXKKZlca9RKyFzrrajLwlQE9fOFRKJCRBwEOZwH5LWUlZ%2FxyRUKVsACFFsSqXKxkFIXmZslf6ACrfCb109LpIpBFnDja73xyRJ91HhNmUx54aD89vaWlwnUvTJSXZo7KgRV8FtQrIH%2BGP3nrbuoaAFuhSs9I4D5592Kf2c77VPtQ2DTxeGRJxgj4qbettQl0PZ7gg%2Fpt2UQRZ0VpXAh0zQA8k8sLNHYkWZRswZ%2FMQwEKNxmmyLoA2u4Gra0HV4hImFjnlmxdEplqv6Q4R7srzLiixFyGNfDjnFofJRs40pcfxjf2Rqfpqv4ANVKzWvmNcPHIBJ4oEo5E6%2FWpCXx8%2FLt3NM53fFYZKqJxa2TQeMuj3nGE7OIm6Zhj9LPTpFAekLXcKkfrh3T6RIG0yFPA9OqltE%2BwzNB7yXnlyQVuwuyu%2F%2BFOhdYvloWoSB0gS87c0e5pYLtKPt8AoKDcTU5G0kFKdMIT2isgGOqUBoQHy7PXHQ1LzvNF4tR0Th19nOOwXLU6W%2BVylI1Yr5NmWSPLka2%2Bw267On406%2BOtBxLZJOQ2kSdgSNMnfaf0ttjmH4%2F1qSCWZ4dKUupnxWawoNy5ft73TnTqXSRdRYSLgYl7UOkL8WK6wRH4Km9%2FMLa7yoz6kju5OJlfckG2fcXJIHna0TzhJPvANlZyg86%2BiVN%2BaGeKQ0fZB1E6Qr7Lmd5d9knBH&X-Amz-Signature=d14cafce708c08a8203912086067b683913de6e3be980ba09cd1e3599dcde74a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=e739c255b47c552d5db2217780415878b238a6e13030cb54a88cc05fbec71101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TZBKTKR%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHLi3R5XPwF7M5bq8WyizqQNXnjnwLPWRnIieAmV%2BPAfAiBfgw6X5pC8VarGpLXMmVvFwavGuScP2NRTxb7smhfHpCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyO9CReiBuZDCfYuJKtwDKC%2BXwxS3wwfIAji%2Fsi0%2BDOwWcJOI5s9TZmsglLdLcW8C3siBYzwDwVsVk464MxXKedo5sD02ihBDkBMdOne0yeLDPZmglnnM0UTT5Dh9IPmkPatMmlETOIwKwwR%2Fc3%2BtxOCauLDt8xb9HD9DWJQq9nVcIvhdyTbfzfflmHvYn%2B0pOPqyg3bTCkXu4puUk9sjeDZYNOv6CkLJd7ndsmoHsnHr8MDrlniuziY7hpBRLMRh00NqjoAJbmbZik80zylv%2BA3KzTjs%2BVuM4B2T0pap0oE4NYHttvYMEsAg4YrQlJ3MX%2Brva61QGgldcmXBBjt3Ofrn7%2BIgaPfiDr6PQoBJCqkyilcTqFVTWJ3lWG%2BXzL8PpXZymYh%2FHCAGDW83OLO42a5Q6YKNyX6jcGgtd3HoIkOlZwF9sYQpYjQzPF3O25Vh9uPYWulkAS09GbOxB8ZYMk7vHwC7wyr376uG1HwVEdZK9P7J6KQgATEkikXQt8xKWfxxgqBJULjHcDn8PYRk3sMRRhnEh42YOVzA%2FGbcFy6Gf0eSZqHIbDrwIZ6qJRZA3Iuwtfort3FO3bWfhbXJRIMGaQAF8NMbJaJj0KojmxYldDWephh8%2BQqDpEutnn7gJ0l5B%2BicyxcZSsAwhPaKyAY6pgFxvQzMH7HTI1%2BRN5AHJqaFYjlG%2FnqGFVHhwmi9PWV8zXzfqWAZ%2FSUyzk5qXQcRhVFAec4rkOzlp%2BQ2uM8snpTjQ5HIBBcs6Lzp%2Fnu5Dl4j5VxVZBAxwYsKg3ToiT1c7RAwpTNphCaVX5pX0IQMP2XMo4V3GDYHtYcO%2BawQEKjYT92x6JD%2FpGGRROhG%2F6rOCOwIeFym%2BFROgB421%2F6Rw6VOrg77Ok%2Bm&X-Amz-Signature=8e1a3fff9495b9e359fc74f0f7c7b6d7c5eb12670f6a786e3273c397dc9a1331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKVPVNFB%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHwTEh8AxDD3Sd32DEj4xdCrv47y3a5RRSPDA%2F2lxdJEAiANSEGVa8VuUHXos0RUwBQAgU90SIwkbTZCdVSqN9jc9SqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9H9wov9yJzub32cXKtwDum39tfO3AeNGxcO7TWaprZJLgmAafowCtCzp%2FBmZTyz7t1VY3lKG7wHOQsy8K9IaohXAq45KeMH%2BD4DshynVXtm34CUWgXb6FxbOcskCdt0eSZcwTyYncRxweZSqBD9hfXoVMOyEq65mG6sSlr4mNHoqX3Eur0V4KR612xhY%2FTg%2FOjVcjBDwF4l2U4%2BQwlOHlkLMqM1MjBJdS93X1qhaw4bnJLnG1DwWJvRopa3%2BrJrK0AyW4UkShfFq%2BSpdBJQBb7sEdiIB%2B%2FUCwBMS3x8DPL1TQLZHCpNVxxvmQNWWmeI8uoea%2F9gfmyi7L4m6dObYLcIOvEzMP1OhBkXeXpEnER8T3OopUGE2XB%2BWlf5IjzGerYs4A5j7saGfvmfP1wUPHbdco4w%2FTpZ09ziaUqDieI8BttyMq0BH04MKJubEjpreKn%2FhfIQg%2FFS4%2B1%2F%2FgtJAg1NtSSKZZl58zgXtWjpqwSxUuuJ6oGMmvZH4iBA2IKbAJLGfBcL%2FSeBXSj7%2BcXD5mVl5OU8zu3r8Jql9yk7gkWV9Os5544ePz7VikqEjJLjh%2FXx2IDdqVj9OhryUz8adJvPt5LESKrNycU9tbnn%2B1PMMfxQ4TespDFWrB2q%2FFxU%2FbcaUBTrP66SZPnwwwPWKyAY6pgGb3CGzwTSVhO6Z99I5Znx0urNH3vswymsRWTGCW5C0idPHzOBROLpoeuDMXroZvU0VUp5mQNEbuHD9FRxAZRYUeFdb7enbc%2BRdBQTuZGc4QvOhW1joYWtKUeihtSi7gR0qGkfHFdIfOHip1PaGS%2Fas2v0C87FplJhuvpq%2FEuONbF9WYAgHKnUsnjIt3iwUAstVSr7IiF5lT3qQLi6qFpI4luRID8xO&X-Amz-Signature=008cea4fef0743d7eccae2dc2b2d5b99cc0b95a2b9e67d0b74fc11b8fbbd8f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVKUAKJT%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCmqVhESlpsYJ5l0t96ZIe%2BNDgr3InXpAWuIvholne1BAIgfPhep%2Bk27pJD9V%2B%2FbEUMfLGb3lcUs%2FRQGMy5WHwBTXIqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGwEcQHRIr%2BvEm2CWircA8RFTjefsleh5IAM5uAkgSS1ulviij8CzEgEUuam7v2F%2Bbb6LwxSJIOuBVzhekytbmJ0yxT5Z59s1WnT6fR%2FHby8DYpedkMlI%2FkJv8G51jI3oT6F4ynflTTpo%2Bqwuvb8njZA85LiqZrYPseel1iaD0l8ucvfnayeLEgjoe8XnCSLtseCIcVK7dT%2BOR5bOYtQvvsUeY%2BL%2BnJrqFRsgKpKn0ltwE7vIYwLnyltC5BBJhGY5qpZBT2ChfMnhXTE0EBnUE9uGI4OlnYEBik6goXEU0IK9gw6P5f2Q6XuyEcyQUriBDbeETernpu8x7TmdfNL23W7Kj32aNRMA3bvhVYIxTWqGshrLjAS4JspruOFY%2B%2F1PxEFgtf3CvilMScznnZZPYPL6FGHl8gr%2FKb1JL9rp%2F5ue%2FJcu1AlfubwSryxQi3vsCD9utS88QXTiUQHvXyozeGHV49ay76pjyIIRM2KHGNeHIIpsT3Y20pxeTOsKk4KjHNL%2B%2FP4i473cIQakhx2fGSmg4iOSiW6Xd%2BGupr0yto9Zq%2BTxn5OLoSv62YVMF%2FiuXHbkaYPOCT06jrDzDBdLB60dJ9WQJtE6jop4x%2Fv9oJrWPkDRLa6bKaPeAzieI8WI3GsQEwl4X%2B7%2Bp6NMNn1isgGOqUBYC6ipLGz2TwDl31yEKEXpTKRU0oUm0n%2FszlNGQxwF2p4kqIFUkCBVkT30R4kWgMzpRfleQF4NFzogB1%2BktZuO9bzfnlEv%2BR4VYZO7uSbCBGHOICoDrieJqX0KvmfxoMryKpt0bqgdGId6bFwzUHRiWfga6SbFtdAjiMO5EpxuGz0pTe0paCJUTal%2BMirv%2FyFQE0SGrl0ttGMIE3V5PLxbc0cqnED&X-Amz-Signature=c317d671e8c0dae1715fe6b5dbf96367f55901798b166d0fd98248fd6e42046d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=ec443758bb74c9ec2615f015c38cbde2dcc04f49a4e4612bcc1d078bcd839287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I5BGFMQ%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDOqF%2BQG6mRafoOgIz7PcLTqYe90GEroPh%2Bo83iltdrLQIgXmXrtVMdIiz%2BxPfguQrDjLGIXDdp3uBP6p0moEr8F9QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHihlx2goyhIEOfDGCrcA3%2FAOEmVqrzObd9MmqEPg2OtHKMnh9dZArwGED%2BSt27hKe9ELuMRxVMjycqBKFXWD4gvrd9%2FOAJU4bxWMEfNDFaKbM%2BL7%2BwK6qN0n6F8M%2BP3ayZuAvgsb4gUuj57XYTuvgGrCl9zwTtSsVQeB1x8KdAVDALaAgZkACliAE80XmGiOmKAnxfC9YBXFIh56W4IbCfVc6xLwEhY6YgRqKM5B0vOUP7uxKD4xK4gB8sWQVvVZiyRkJIxj9DvTGoVMIEEP6hmKghtKtuzobM2%2FNcsYpFN7zqV1b%2FnxMSgOGfFgKJAlNqyReBskismbaaHJQ6mRRUdaDkq1HntDdDUFmurx8LNjzZH3Xr%2Fe%2Bpw1BzQKO6yKb78XMaasNT2XcVEsXAYlRXJVF1c53tbRkhTeLmGAUmNX0GoINHXNE8DiDuG9rCg966slgc4zA0l21gNG4Rt2C8X6f6JbYmJ6YQPwLj3YTS2vwVQoNwvpfFcCgGNlTHaaA6M86r48%2FzZiG4H92SxehfKbCrzD8dS%2Bi9czvtzGxRRzzFmaue7roV0AcOlu892JPoiUWQ9P95Q71ttPvGcABePje2UXrUXyt7UU03pqvDPEbY%2FxybFALsGYq9oIgw4Spef4SkpA%2Bn4zQRqMPP1isgGOqUByR14bwckpuEP1w6ISxJzZsW5aFItH5RKp2%2Fk5%2BEK0t40WY%2BmCP1GD0%2Bu8Ktzx%2F36I1L%2BPPrd%2F%2BjLbQRRB%2Bop9PDH4x0jhystx83PKtPcFpZ0Pm7TRKwIMQfkdF7Jj%2BmxhojifDq%2BcBE2j%2FStOKmeyar86yuGU17UH6gv02cXPC9DetX%2BJobdU3tY59PAFMsG1cPo4elgGY%2BtJgLRCZ%2B4sH6bmKg3&X-Amz-Signature=c01d94e0f75bff088417962b0fc10c5a0accb4556969cd698124e15caf1c5f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=572b12c96ec76fbd85614a7d76369248bdd9cae779d100187c995ba711a57da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=5715fd9938b5cf7f339463a3d3d91947b37b92722a481b1ec89b4c3d7176e743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=6aabcc23e33fffb3f6bd8028f5c618651d75011efce141f607dd14abcfca0d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=833d7d554b120bef11517096e0a61f276e3620ed791e495500da95b09d152dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDDOVYG%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBdl6G3Afad9D0W%2BYXdrp15%2FjmPkHCb39UFZuZW60qLtAiEAgZ8DSja6S4nYxmRMtdAofvi2Ud5v0qns0C0Hr0hcJdoqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjrdro1Lni2jP7zwSrcA6MRDi0sKZJ5u6fuUbtDVVBSo5j%2BNlmh9QIHgxgMkhP2sXiYpNovEZgYWMQQ7I5qqGUf8FzMHBAfkExDkRhYLwJ0ph2PyPZKiaxfTS6gYZMIrbCD6gvZeNuJhUDZEb0g0AD0TvtyigYYn8ob3olenoixl6AX4FPY%2FSDqEfjmEo1j9ef0rpgZV7boeFvBGjs3b6cmEpFtVzhao2Ujiyv%2BZIwkWfkITBhTGNoVCN5YU9a35bj%2BtFJg9CcZIQeTFWgHRfe3bbe4pAenE40M73655xqcHnSk%2BTfXOJZ5xHt2gpJiFcw%2FQjim%2FCAFdSPXesvfbAdPVMH4o0ViY2iv5fOi2G0x1rBObVlNRSUDevZwqO%2BDtq2SC7R%2FdWPRYPMHoNYDKxP4HSethI5lD6MUwrQHXdfZysLPfiSy3FLvNka8fmor288gxt33l7Me9Ry5qVOCkOzTrTW5y%2FctPojWhn8EQvtXBLfLBrfDDEhIaM12Gvprm4g5Y6P%2FkPr9VqNB%2Byq7mlr69KOJmWBy%2BNKwvh7P2LfuDa%2BMDyfNWz%2FYjKCouOKKbQDDvofReAa8SMi%2BfIZZf%2BpqwZIIE3df4c7thKqMeo6HQahyO4HqVd131xe9lrQLZPrdbhg5HDQxEesoMKP2isgGOqUBHyhLfOkBpyLihlhHvqyzTY7U%2F3bnxG%2FsIM%2BjLxuKjwfNfexsMQv9yZxtOWoJg9OfkyC4Y8TvIbKL08%2F8CJjmexqTF1pSKxLAV9vTUwi1Ludr0RETz9UhsaRJohqX6OadCceJcKdUiKyvBAwsuIly8n6gUmqXYGmEmhokHEZrKH4WfcVJLobb%2BYwP6dv19HHTG%2BGXzUa6cpeME3ssYzHoaqWIYKjf&X-Amz-Signature=11e75c4c0c0efdf6624ec5fbab90f2fd3a890ab693ba91d91e470fc7c11e3277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=a2b5008774507d246997058b45b60dfd9ce8a689059fee736a6f17db13917983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=df442f0b56b634f51f7583c4fb10821f8bf615433ecfc86fda261d366af4dae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=6aabcc23e33fffb3f6bd8028f5c618651d75011efce141f607dd14abcfca0d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=b1e9ec942a83df6ff145d5b6b5ed8c48e4efa81c4a20a2ef3ba65a4a443f67c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=63cf1160297ab85486302165575da527a076399aec73c66ca206e434acd0e389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVWAMDQA%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDPSnMYbxqELEq6ZYhOTy3mBA9xEsFjx2zP6aLhI%2BWAaAIhAIIb6O4yg6blnS7iEoGoeIEAM0raWQJgSEWO6N4nFsW0KogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxw04T30QGRWk%2Bid60q3AOj3aTBxKRZzEHZv5vwqa%2BQ3HxiBMMq%2BMIp5xaRROLayFyaVJ52qERxQibHWMvFHLzAWj2mnN%2FqzSKv3KAe70MwNCyc4i0fT69Oxk%2BSdr%2BIg7asD9YA0qV55Ys%2B6BokxUtTOWvU%2FPSUE7DBpTMWUBCfQe0NoPLBd0k3W%2F86N%2BFsHvJj6%2BxoYnuWaIOXjjOPHN%2Fj2Le4E2HBTL2LpujGNRYoUKmyu%2FH9YuJKN62FtmyxtLfbI76DFn9AIHSQMUK7P70Vb7szM8v7fxIQuR9IbuEvTyBPdbYidJVQE%2FOfoq0DfnK98IbtnNOoAD8mdKUZBLaoO1JtNNMscADUzCS36F2Q29BclNqTFSCpEVGwVIGoPq72kL48RU3f2O%2FVRRC977SOhotfG%2F%2B6OxoVZAsov1iJGgD1lr%2Fd99D6C7jWGF1IyRlxnyVdEnvL4Iq7UGx0ZHOrJy0AHR3GrCXODPRwcB28vLgyQpQW2IgT7OnFkI4RGTZ5Dherws3uuR%2BgzZdwEIrFUCT0CzfF5XVOjW3lrHfMyunIKXt248ofrSjIrzxjQSCsV%2Fo%2Fpsxlfbl1JvetEWYJqsF7JREnkhao1C0CO5xFqM3kkTy1PLBxnW4oIdywRepfd2MeTnoLfHI3gTCi9YrIBjqkAb9pn2CRM6TbHm95NrwoXhag1oOHqD9Bw%2Bz3D0ofylW0pH33FyMC5utLCqjYN%2BMb%2FNpeeXfnOKlSn%2FSG5gfAdc30AwkdsNQ0f69YyVkohQEKcFgmMIHLkQ8g1f9VEJxDPJNVmUQ9SC1reybpKXg20A2cjv5A5F6FScXEZnAaKoOyooA7LPvXWKxTV6DKednN2KK%2FQNq%2BIgr6d6vKQ1ppWbTVIkhj&X-Amz-Signature=a0372ba0da010105f2d1f73deb303b54550b1f71e542b10819b7636329a6b125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


