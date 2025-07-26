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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=be5f61eebe6854344c793f16c3e02162f95f600021082329dcd4b51aa0c8cdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=a86b25193bdfd559d4a5fcac7d1caebd5e700ac820d259e08e1d607feabf8152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=8fd35330c2dd1fe9a80d965b6b6a6f5ab294be3680240747db9acd866780c5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=f28a531f3f2f38aef97799715a13618e5557aff86c1da69c6580799e7e9e0044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=1dbf56741fdb5f1ddadf6b4bbd4f65d17e3377464ce091d6461c2957a2ec7bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=6ac25ebb32f510b5027eecbbd0c75f76d37f0e50e1ba29d6b09f8baeb0a2e10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=68b983d04ec31195322d2bad35ed98778c1a946f2a13ad5cab3fcb8c3232b8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=f6cc7601cf41167e28258d14de01f78b14841381496a453aafcbc0fabb98c20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=3c7195f9264a5054878b408020c00a97fcffa79acc59027a86047c5cc66ff3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=a8aae1e8124f9693ab924f48aaccc709e6eae67ace6c6483834e1a3d6592e5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=158f7c0a6cf06879b029f1d25462edc1b796820d41c9a5a1ef12803ce58a6932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=cc70e6b18ed6e6d952538428cee93054d7de89c0994d3f6d294e7104cf59b19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=e41730ae89498325b7f007e885829038bea7fd32630d3d1270fd89216a359148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX5AZD4G%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIDXAFzZRJt%2BlH479SS4L%2Bh16uZoPW4kUyqV9QB3sAaTVAiEAiK5X%2Foe2lZTkSqyppgWtfLsJrcuOm4i3LJIIcb75wrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBV8q8A5NHkSr4jvFSrcA%2B%2FRugGOM6pdkd0WZ1bKLD3MGPAxggAuMaci2aH%2FX3qTa0WFt1AAy0%2BWks0dWHRy37Hl%2F2ssZ7zYCDo7NQvxlsx71ud893V4lM%2FF%2F19mgRIZnABy8Q0Yd2cMKrgVlYXHwJ2XvugvKIIIqx5MdnUsqALKt5Zm2VGjy5RkX2%2Bo13LS5JhpMNIpS0Ht8gvsCJYQrlT%2FZvVHMlR4uvGn7kaf%2BHlKW5Vx2guko5gHiLsVh7RZjpF2v8eJxHgILAcV6xETqEPnDr2DUGgOPmso%2FXYtK3%2FyqfGb0A3VTGPLHEqbQtA94fYzwzPDNlwgAhM7yiBGR2n%2FoaisWvpcPmvNX%2FnA0UEHlI4eaz6yruVaq0ZN%2FULPnSb%2BAjg%2BWC%2BPifnN2y88ooTxTen8UezEvwRvDYZ9M65XOGlZJTpf5e4kPN3WXZ6C7zkZ7M0ZAF9RRpg2hVrZKSX4VvI8IVmiLpblInrYH69G1CtKWxg73R7W2XHj8kc4jUIDTfsIBM0oZ8qSp3JuVMlfWvr6VlimAvA%2B1OVAVMUCeZhlkEgtYjLLmeJ009%2FB1FcalzDI01GhFly5rBrUYesTpTuhQkdK45iPpmNVh0jVyWIN63NjuC3gglztSTfwVjSpPyQMjGs2KazZMMvBk8QGOqUB5liROu3hBUS7zwpHBL1K6SlC%2BDjrSltaQ6WaSq%2BJEK93KuUHsu6harDqfi54mBmwTMvp4JukSByNEwkRMAyjIXXw4V1adVgNBMi1go3ygLHVCdWNS91u%2BHiaOijmxQSMzwnzadf%2FLzuKKw2tqHn6FSktZYQwQPnRqT3cDnls2vzi3Z2wn%2BPnI%2BVSzNHXXuMcE8U%2FTXp1TdbrZhTqIAfc4jv04iPy&X-Amz-Signature=5eedc546e7f6e8c39c113122e0912b2327d052867141a8bed142189368799792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=55f9f456aee051d133307ac9e1e951ac11bee823910bd9da385aa76d6104eef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=1cb1766f87c6074ad6dfcfeda2dd1796f8ef9679456503fe27aa430f9fcbd9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=81c89e81ad3d806ee8e0630ab0aa9c16d942de6e25083115f58e7df0361904b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=f532e7b2e7fa7d0d78bcc27c9e86d3e6dd608a68900891de7068dcaad4958115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=36e81f38138db1371ed4066f08ba0488cf954259e1cfe2d3d5bcbe2f564f7048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDHKHPSM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIFx%2BfPdnaIWeR9OyKgMr1QmjPq0IWjoURSarMiTaydvfAiEAkRAbm7RjTLUEzsWfQm3to0FVIEQcXBOqwGZBvWt1N3kq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMHJ%2FyEQ8WhoyQJ8EyrcAz9rI6VX3g8A2ouh%2FDHiK8Gso1DbqpLNispMHUjjrrg2MY5veD3qsmJqN6kjpLhGMijR2CwTbfV8oAGopizHcg9WoSjBLkpUU%2F9tMlX0LknjztGRVTyaiYALFTnQ%2B1vAuK%2FSZjCOTSWLk8BcFaabeI8L4sJKFnrvMK90gWgLxdDPpJtc6a2lRXl64SD%2FVunelzqMzfTNE7j0326wL1H0CHrLmMV39x6dTNYsEaiKlV1Q3jevsSTabtjsUS3qk32pHCCVOWyE%2F9sERIc%2BskfGwjaxc86NpzrsUqzrVHym94H%2FaR8VfI6ihrjY56zmF5M3sB38aB%2F73Y%2FtlKwxzKyzxQD6WhFqV53XVZ%2FMy8AAoJdvu3%2BLj%2BiiC607qXA4JHc%2FIQuvCVbODP7vljDYgfjZUKinkPVtJrvhnL2M%2BeTZAquOfjT9ekgHA15hfZYgVTFofK9HSClxBCEIsP7UK9qUBY%2BfgCPm05MRE%2BQA7ydAekGwhoG7oLvurz4zZWEmyiz4SHsek1D94YXd7ZpvW4KNwzckl9n6mb%2BYOs9XxRz9uV2EIKbU9Ulq6M8347P0FTR51GIunx6Udx%2Fra5LMqDc%2BZVEZOcxe3fE%2BPAaJ3XZK4lmMeqIf9eLKmEdYPmdHMLXBk8QGOqUBkgpqXc75%2F92dKJsm0AZBqZ78rk6arint4NYR8kzGKcFJClUVjf84rPNfGhobRbqQIstnzw3MYwSZAhK6inEy5yAGzKJcp8hjTWGNBlZIfKXHmZhHmXcQikW8tRVxJ7m7N7u9eOyr0C%2FzvzMDd9DTuT9fWo7EHDJEv7fjS54X%2FgDHclsH2fod0sbTrfG%2BcJXOXPT%2BJFPWbgHok2inmuYnUzcqkhUO&X-Amz-Signature=6dad330521d3a7aac7c448438c5c0ab24653a0f251d27119484e52bf3442aa14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
