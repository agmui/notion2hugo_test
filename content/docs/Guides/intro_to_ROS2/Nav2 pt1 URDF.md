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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=8207eeeb2932af6fdd6dea3ce11827667768fe4c884b3c2c53cfc95e8624ca92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=119cf9edccc0bf7044e84efb22197e4aa9bb557a5d6e8efca6f856f9b4e5a9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=8db62ec504d2b87ee8a53cee6f940efe74b3dd0cff375e5c7b3428f553b71c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=c0891e1df30354573ff1781e0afe3b0e91bd6264bf2afaf61225f67d3f49dc19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=7bc0657bd706e154b9eaad33b5b6b3d3244d2a561295cbc6b10ad7612ebfb73e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=fc0333ece5889f890628ccb21e9b8a9da3f92e799e119da95efb9b121cda0a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=be1b752cc940e687fbf00ea416342c845d958c2994f20fefc412fc12cc044991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=7f7d10becda0aec3c1d53a8a4cd44d58999f7079c8fdd8cd6eba532d5b643dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=3e91ff8ddb61e28a15595c0331903b040746fe1646fd18d1cb3b80e544b05fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=1b3e184a45458d3e7c1ea9132e7ab6339a285129cbb2b7adf1cd928725907cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJXRC7T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCxGyqBPVHMVm9djdFQ5AiioCd7cxvt01xPgZOAYyfOiAIhAJOVfDCksf1h0OQc4rwvD8UPVb6ELBECng%2BLgkZwWOZzKv8DCFUQABoMNjM3NDIzMTgzODA1IgywdCS7G%2FJHjCnPcVYq3AMG%2BZ6QEX8i8gmzWJCgdHp%2BZe8Ix6bTk13rhcm3tNMJGL1dMM2XbFepBKwxRgvOafmQfVJfpDBVaoX2DPN7jJR9aaSlaHqiJtTcrRbheUN%2BQEvuV%2FRclmVZA3I9ukDVAgR0ouZ5XOPBRXQwK%2ByACc4cMWr1%2B%2FvKdkMPVBnJvvS01rngm%2BoTS9wvUECIOo3OXfSEhGzS26yGPNFKAIT0uDHMgjloWeLH1ySpKggX%2FBzKEKdhyHFeWwg%2FmRatU1kzIp%2FbTm3rSxBPuldzLLPLzoieh6ffHI7Sa5TnkWVyTz9k0L2j%2FC5wkxkDOtvIljB3Y8JzNyqQNE%2B%2FhbSUvl71nnD4ofEsc1Xr5vnFI7ReORXB%2Fh84NuaFvo7Jh9AIriUlRcv4no4seEtBegTgWpIlAYK4rQqu4VJrciTrzV1f676%2FbbUwne284XlXfostDBRtiJetYMPvgRj2GrSXjtK6DKq6A21hvVyJi%2FIk9ExoMElhmVpWL92fTHyrDJu2THgC3ZG3%2BFuIw7Htam2YOVnZWFpKpW89IXyFSjHkctu9yGP9nUO0avBuEoc3Xev04qjDWhY4K7TtFC3FQmPHFa%2BDuFSS2kGmTM1tDsUzs8XXdaZiuEaVKMpBmUn8Ymm%2ByjCUjcbEBjqkAVzRh8XA62cZPeeiEK2G5nmFIc0RZKIGpg54Lf5qirAMfhRXuxBY6hTpcwOOqdVX5oACKiYqQvaq9l9Snd4XCPJvDgXOBvYWyKdBbMCCv%2FMZdf0hEfIt5jc67cMdIFnb3tpROKbVvwJZoo%2F16sE8n0ci0MNAhPyI69suUc74No99NzdY5RqhQ4dyWXyhiRi8khFzA%2BeloQyMzRtrB5juUgRiSiAP&X-Amz-Signature=93c3436e4a4122383e871c2eb4a58fe5298d309abd11dc5ac9975e6c3208399d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYHQ7IF5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQD1G65CG%2FuwAEGyUDOhU8osNKLKDplEiBmj4HyozfGaJwIgQFGEXhDOiSof%2B63bD9Yx2%2B7P8jXaxx9H%2FFj8SrYUtaQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDEywP3slrGskdPN2SCrcA0OiBs5W7Izc%2BFe8Yegll83u4FR4wMWfYPZ1dyfleFFj%2BsF%2Fh%2BCz0hDX9%2FqyedKwjC8MX2mOa6VaAYla3U00HpIabkQnYpJx1PYhwc3x45yzGaAF7yj4omRWmwi7y3YRiWBOJtoWKuy2T%2FDWo1LbHimM5MOWMeh7JzmTtUK2IvlwsFp8ThmGiPGVhop%2FYOD521uPar5Ms%2FoAZdqU7QoJuKbc4Ghv8UO%2FxuNzrGU7ZgFJAYqRnCTt63tTf2JCOMfaRRtTIQGRhdWhGqhxXdRW5oeiXD5Dw3%2BfoiGZ5gU%2BKk0ihYpCiQWNMa%2B9YcyeaBvXPVjyzl0ujsgASLNgaeTdsuMc8YVcJnVVGsidhL81h2f9N5rarrJhAzHQ9Ip1EhmK%2BLkm3PS2rMBMvLUbgApcXYJbtfqwjYyM1JH0Q7Q7RMUP%2BS1RgjlPYYTE0mWL1OaOxF%2BLdP8AnBPbhdzbN6inSSBfT5cIjuyIGSMkR75i8San26f2oZCnujnU%2B%2FxnbKgqfpIxwscNjWR%2BrVnpK2xI%2BzqxjuHnNDtEvnVQvVq0F3k%2B8dClZAT7hFRsC9XrwWU3Dq7tqC70RC%2FsvXj%2FObsFwmV5PAD4u1f9TNtoLj249UKDJL%2BGuDuRZbcNfRuKML%2BMxsQGOqUBWEOwvFArZ%2BYOKdu6tT%2BCbZ%2FrnkCdqIZV7Nc%2F2uTBQDAYs1VqmEUqa2YOJCtF5p%2Bs%2F%2FrCtH0yyH6FBBA3qO%2Bjripo8KSjjZ78H%2FZtKzD8bX8SCvKas7f%2Bv9zRWivnLDquadAfaCVbfJG0ai3lRXckjqL1wCYbNlxAZFYKQzLf2unp8o1Os1hZqC5qbKMPL0c6x8vzjOFuQ1O%2B6H%2BEb3TcxRHqJaEZ&X-Amz-Signature=97e279f8a56ee68dfcd36e8069c119a9c8836fc02e13bb169ffd2577b815e403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533AH4RH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEYuEVAAMnqkVttblo87xd5GgbeZYfVolMbtefLJ3YMRAiAj4KT4wk20iLYg5G6AYPPn%2FeddxDciqCKYLci7JRMQuSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM5zLBbDcykct33RulKtwDmHbtyGefcGqiaP2rIQf1Z4gEthWo050ugKqtHEMbuI413pT%2B1I3NAZtqGdYDxJNYfnI3xBAe14t0Yp%2Fw9BTYoZRAC9ATMoOa0LLtz8s8WGGFp1llLQUzqTDy3tPXuUk93rOCL%2FWN72lacyK9Bx6xKR6oiXV%2F8q1T9uzUDA2WJqSyf238wV6qQpzkY7l4tCBWjmIlURW0Uh1BXbQF8avTN4Im6SgsFWQViLNUrkNxmgEcYnj49zNCJ0WetcF3wg9e0cDBizAVo6yxlTc1QqGEYmJT2zpHo1%2FIrEVOPDBSu2FsFypD2NkJCw9KwmoAiMFod%2B44jjsh9dHfc0EYTXnsG6qBUMifyzZZQQ19HNqJqn5B1GsaBduhFcMxZMY%2FYM%2FOsmzfrVgxLDM8X%2ByJ5AmuAKzFb0e8thNmHCsifmJS7frQyaJLuMgkM%2FLMXdS2zV3r9TnQX8%2BGyhKgtypm1TWawTUf1dJemga6cifVpPC3uBpx%2FMNBl1bqFQ9Drao6dN6VyrvNomJ%2BSFTmPOwMk%2FBhOtirouJAWM5FgLqxguL5FZg8Tktj4%2FTwg8uecaWy%2BSbADRVQMbXoS37pSJAcMfikuj2bmj5pnQlE5c8SA2iq2tDAQcuTm160dscr9Wkwy4zGxAY6pgFTzxjVqVrlZrBG6NkCu0QgeXxAzFDm823ovGHihyLtJ5EeeOabFiObGtji2Grl%2FsO21q0FZTBXqBd%2BxoLt0YYsb7CGaj%2FHpVzdp%2BLM31w%2F%2FIXnwqBXiMYJp0XyOnXka0a8aZoYQ9%2FAbbAuoYX10mXb68eXJT5IFLM%2By%2FiRnVXgwCFFVSNWAiFPJ6FWcRHiyP74ojTBeg2ll3wshkiNR67DwPANo5BV&X-Amz-Signature=92d4dea0669f063cb5da47e93a9d78e6a141ac0a537e1e7d66825bb593c112a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=41a58438fd5e2b4089761415a434f9d88b59912186b00a0a99b17a4e1934521a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGGQE4I%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDX5okcpeK3iSfFlCKSW2nxSs52Jl12txnehiDo1g8kZgIgOnCujZn%2B0bS5xJlt4wJTx1mxvKnq6%2F%2BoAuxz8EwgUKEq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBkf1VOnb8xXElNqZCrcAyVLfrDrooGukX7ZYDhoQkOOr5RyZADxvbJSzS9aZbMD8s%2B8%2BwsUMZygcVnWv1e%2BY0Hvtvk69fpylBtTzDA5yp85UY0%2F0mNxqlcSajEetJBdLMTG9Fe6ihp7Z%2FP9wj0qOrpLkhSp7fZ2UN0YUIy1mFoG6Y3QszqIR2jgc0P%2B5q7ElGg7N%2BP702Vg%2FgygIwX8V2RKUO0tI6ZOYH101C7dTr0trnUlIMPrYhwzpBJu%2FEBJXyWwY68GPU6f%2BWeKXbt4dsB1tFhgY%2BvQAWkpbU0GsktZEUdzwNSBT32XxDHh4vUFkz%2F5HDc63QQ%2B1j2ZE%2B1Kc4aNaZi9gkz9XELMWNRdZ8jqWQ7Rta%2By%2BIAceXUTMHzNQUAbb60ioGbyKT3THUivpE%2Fn7ZcoqWj2v8NfMFYrH279BGK6WUXV1K0J6SWtfSUxDQepM%2BQVhBdyj7J46ZHA%2BiKAWGmkjVhK2K%2FIxW990dC4VntjvXlMNFIiqRXrBczjWmvas8tAyBVeG%2Ffw%2B9Y8Jx6Goo53O14ZKfxTOEq0rJZizCS8QPESBg6mTvW5QVmw6lvSA1YEdN2vi8EULwb0Ygk8YUbUvtGo%2BMtg3%2FS6h3KamV7P%2FxdtcalG68pWjY3sBdk76ep6QZNq3jQDMMuMxsQGOqUBdjWPEgLJiMZslN%2FzyawJB2bRDG9%2BZIHOFEC3AJpqXct3JrJtkxrnfUQFrZjqolyNyRsbMyNWC6lU1igYGOz06LerqiFfwF789YW46lXmaKHnADpma5ijimcTnqxk8Yzqtv14tZbdDC%2BNbFOoF5y7rdKjJ9%2Bshi%2FMTcDURacnGPWGaFdEzHviQtOllj71rtac68IXgbnuLVCfZEtmxwL%2Fda%2F0bMQV&X-Amz-Signature=f690b571c56358ace54270f3bb067a42088333a185fd703a416ec72a70ac84d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=73e67bc510e627ce1da3bc3d3e4f00c2dd494641372c06ea43ea9953ee0238f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFSG3MFC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIArBjB1%2FXbJDZ7RHpI0Jd4jD%2B1O9sJEeoQgxYz56wcowAiEAr7HATx9BwaS9lcbXFup76xsOI3DadzqlI8qDCC93Sk4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCGR6XoAIWSrdg5pBCrcA3pFgEtmqeIef0WWt8FZBw33DaNQWyxUQKFYe1T8%2F2d2NHR1xTO8Knc9wEuEA62vJyKV1S5wxoWHFTn1fLvvyRqncZn00Bannzy40%2BCTg5WbW%2BOBtsHFhB719OEEmhntf8MAv34cZSgl7b7Bj3GJKTt9xGyoJvmKlGlE4EnNWd2eH3BruhHbk96chv1d6%2Bxl4h33quGCpJQUYhQefm9ZbnrofOAcfkz6CKgW1MZ0M0FSuI7LCBp%2F7OAmpcDBpA9wClAvHoYTDT1TmWctfJKO%2FJN8twHSnrlzLj3RNMsSi9w4awwTq4ZWYb0ci6xNxZo4NJ006Qkkm6fbsGTofHgj06uo7QghgNU2%2FFnQoFufA3R%2Br89x8bqoZcT%2BEbtCPMsFQauAxdLef3AdpQ7YXxUYP8yXzcOHdXJU2EMHy6LhJdWYvqcqD1hs%2Bc2wiOWPRtX991ivFJUccgZcTdnvnIWFsWsQmvsM%2FBkbBV46nLZKmdhA77GTxhpq0wJeI%2FQ%2Fi96VV59dk8h0hq38yirIdWI45BSV6d088T72mblaLhVyaNFQc0I2MXirl7GYg9ZwwXUByPq5T%2FkKWQSCrcder4UwmSfmCN6DWoHTDSHzQpxxDaKKSOcBLtPd%2F%2BHpCCObMLSMxsQGOqUBdwCHE6FzvX77SONOpzxaK6yLUtem49iEk7XIx8vjqOvJONh%2FY6IBg72UsGS0HpomYGBs9hML2v%2BeFI6rsUq1suueUHNOkzpT23qBVMv7cwCXUcWOmAPb7tm%2FPT2KbWvGSG79l5RZwSG%2BAW9w48wQgRzWITUs%2BoO0BQhQuIebb0xkCfIPwaBq0PtY23vGUefNzb7Z7o4DJVLXa4CqwpohthjVk6Pe&X-Amz-Signature=6e43f4dc604f49508989f06d5153c70b48886163b19be07c13b4bf1bc8706a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=754d57d35d29d0f4303e5b212972d5a4865cfe688b33b06c3d7ab585ee14d062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZMEIJJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCS2HCCd6XgJCLAnrwMrrOsR7q3koN%2Bimm3bhsWou1RQgIgaMpXCYGgsa0EIfyOD1artQDmNV9ntgx%2F6ncgKsVUKYwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFs3BPBujHnO6Bf8WyrcA1yJgOz8pX9UQ2E9J9ZASxuTYxILhusSenTbkHB%2FV99%2Fyc3ejDf%2F2D6CMesjjnFMAuFzIpT8HOfr1WO6%2BBwrHY0lxxnGRfCpHEx96K04AeQQ3hl1QNPboQ%2B6MUzaWk4jyaFCLBb9eIxCXl3sWLpyuIA%2BBBfC0WEvoS1RQVxjROtY4TTdwEAGX9%2B9m3zrEM584CgzIiyf%2FfXr9wPzVW7OiWjeMebChT5H3rEKjxHtfPTfD4cbhm8TmGhtcZzp4TNbCi201ewYwlszkfw%2BnZbpaR3%2FoXIJK7kbZkYUPBhtJGSWI9kbBjhr0krWhFrZ43s%2FXnWidv%2FK0UJeEW5e9WlR3MeT6C%2BJtX9QvyzbKTCoK8nY8zTsMJX2L7Qqt2VMtlqe0ZImd5va6MAiBaLqNn%2FQ6QOitSXWacWR4OX1BPXKBpJtUVAIp7HIYyteXxeKgJUhQKIuqCMnQWG2A%2BIjq25q0yoyt3hdMdZvsAqN1k7ldMmNEk%2BFx980dtPiOOrhaxMJ2GbSq33Dba6EEMEHeaLp9u74Igtu8I%2FGl7SVJtaLKM8f%2BUtHtgTVQTiiIzxoDi50117A4htnXf2Xqj%2Fe37rs9yb8I%2F9CWKdu3qtQUd3dQegORIV0W%2FSYkdtX1XcFMMKMxsQGOqUBg8k%2F4ctLseBq0I%2F3mjSJU9z7EaPhPt7ql8At5h1QpITU9eoE8LzQTJn8k8JrMKK%2B723obLC2BNCtYvmrPbnqhssPQED1vzknmem%2FUdVeIViKvflGIlXXac87PypZA3f9wCoE%2Bx6m4z9VHM96AIRb1KegsLxrmavE52U3j067qqpydGyL9w01kHyh32bgd8D%2BG4WHxkFgdkzuLJ3VhkocUS2Qi6N6&X-Amz-Signature=dd661d47b4752306bbad8d21346045a2911a9fcce2fb72904b07195085a6754e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=5af351cf69597953b2a7c4f1a64e5aaf89d3b6ba39d01327e6cc461d337b7b04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466767HTGKU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDF%2BEhMHsYq7gWx4fUUD0hhVEvNT61l53Rz3bUm%2FD%2FCiwIhAIHkt7gyxbSatOQLjAbflLZv7j%2FeZGTcvZStFxPZGo%2FbKv8DCFUQABoMNjM3NDIzMTgzODA1IgzavhBmq1G6g76j2NQq3AMmB6VfuXdP05kYKbE8WI8NR1SxLXRdvs%2FrzwVQU%2B9BgfgEPeb4ewl0%2BekKeBDyAoCCbdeEeyPjG9LyLe27RYCuxMTTCLI49IYngdxuKv9wgtfP55Rz9lrbZcnzjmvvj4yt0u9uiuqadXKw4xd3DFkgq%2BXMVDVWu36e0jtCqgOoMBDmUd7RUPku1gQrTkFKsTdF606JCA%2F7LP1oaRbrXGpe19yjs%2BOaulbGXKN21yLa5rMAyFkGY3oEMKl9VavYrSCOkuQAwVG0UGhcAqypcUcnUOlPcYogUryfTexdMdK6pBxxZcMXbha8RpqP5sI3ndoQvZtPBFSJGzCiRJCTCJVM5DjXmbPL8HE8AnwJdxpEw9FUZcLE09qfQJCIUheAbqSkZKXwU08GCKcgT3XTPWoh9o0IJNjlKXL4Mh7ADTUDAbps8fVtelQBHIKzdUnJkwNP11JE%2Fqy4sbGDZIzlSxpNkO7pKW0p7ycUdNxZ9hPYXK2soXAPsOixsPBy%2Bfdn8RzLPzcy00hfZUGZsH2YoVSQuY3DYpRF85179OD6w5X22PSjaOH%2FecsHjNUSIg7q5Pgyfe%2FVDUw4iwAZkLR1txtLAeSCF39lNMb1lNa8top9Y%2BbgQyaeDA1OX9QEFDC4jMbEBjqkAZRmVE3m%2FlA5C6G7YvDa0UDR8cncaujBFOjPvhyS3J1IOlc%2BBUWPDvJYKlH%2BQKGqJbuJIGHRohpHtkqQJSUqQqPRfm95T8tHB16h0Sf24hQBhiBOg68r20xIHHWadLeFWjwp3nJP%2B5ZEQoNTh%2FVZ9NRAaNsSMNSE9i3Ej2CWU1EEoahB44GhJNdcB6I2tsRpIoJv4l%2Bk7Py2MkrPtE3FUslOoZDe&X-Amz-Signature=9785420168804b1f2bb41cd89d2917d00c5481ac876684e52d0034a28761d169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULHIZA2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQD%2BPYOBOIAQ7HuiAAQSfHCTxKepFvmwTNA0bAd7ZA289wIhAJfuyHBzLCRjA190wfnj8%2Fo1Irj%2B21dYjNpTP6aQvBUbKv8DCFUQABoMNjM3NDIzMTgzODA1Igzai0UeYkzA3kSjM9Qq3AMKKd918hdEi55AdcDJd7vLXp0AAfaYjvRv%2Bx%2B%2FrJ%2B5DXflsEaptSbkUktzyd0Qv6%2FP0ol6rX0J07t0nKsz%2FrFEGGI3qq6p9Qo7p7h6eAQvLyIA80y8PVHvOA3FksY4yOVac2UWQrpAJbv1rgfciaZgfSyXAufWbqr35pZRnFOPNAnsL2QIGaR4tLddW%2BR0GRjtsTgG3wiZfw7Qf8%2F2%2B0IGP0V0V66kzBrA8s48v6X84yxMIr9LoEcRQ5pZKKX3XMe9XoFVBeqEDE%2BH3e%2F4c8cxVyVKBO6xOA0%2FVj%2BjgvxGnlrzsHCg5HK7h2xheYteNlQMZZktTdiCFxARvKu42zTQsmijEXsVPs3daojkNTwWxxqOhaxljA%2FxwO0q0159SJ52bFKWe7ckGsMGiP%2B9XK53VIhAqjkIh5yM9wtFA67YZ6hAHzagrYqPy4SClUy6%2F%2BYXkyiMh5kRg63ccouxMCgP2E4JjNO93KEe1L6wL%2BpFogo8o5xCWwZcS8MhRpwISLlepPOfileJVFMM4IchfVg7X6lhjkuYkJIJEKiUIiXQxB3yzc3Txr%2FsGYZinvBwXDAa1VMH2lN%2BP%2FHUCehXUcMmmVcPW9pYY%2FSAOpjtv1jgUp8XidesgsTdN653MTD9jMbEBjqkAfVUnYEfmYdTUSvKXdsJ5CSskt1zbKEMuSmyLoDB%2B419ssPkRwJSiInPaP%2BqOsyukH9C5UbKuM3zG300%2Bko4%2BcPTKE1VUFxAadRr7efcy%2FBqfKjfXLJGWllZHiwcL8wQW20oGTnNK3iOFV7NyAmEEHFQ1sXCgXSa6BzkOjc6rA3Y0xiWekd05U%2BiKGk%2BD9hldiKM6C9TLGXS0U7BQFppcZ9zeTAp&X-Amz-Signature=7665dc9efe5a0b870951e0f24b511e9f5511038386325b28ee03b7e24b45054a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627O2LGAU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDggkLvAmH%2FPcH3Rs3FjVaIHtf3cs53WNe%2B0WmyrY0nhQIhAIqURUDOkVPOX0PzxhWxMgsrYS4jhhJtMTDFCmOtUrXoKv8DCFUQABoMNjM3NDIzMTgzODA1IgyHV8GLkhFeh7SqFrQq3AMSucXh0N3g0Yl1%2Fbw%2Fgu1J1A14r8I9UOP1XZsvyxhNg7hC1T0O%2FJIxtdh6fZzI8a6jtmdj%2BkWIKHz8UbXAc64NkqQRROZs6Vqy5LiujiBTwJbRKkAvy5TpVKDybtEuopnLAZXGQPvPKa0bWt8C%2Bwz%2BnfdmZP3UQ9n8ZPBeVN%2Boc%2F9l7kTL1dbplPcX3O%2BsP5U%2BZeve2T%2FdYERZYGJ1ZXKBQiq%2FCd8jXj%2Bd9s6pi0gu1WufZ1pdqQb5suiNilZ3JZ7GBvWEpxoayKvY5sesruKTMP7L%2BSU3UKNS6mJqsujzrPlKd2vVH54W2I1%2FWftf3o%2FK8baNTbZV%2FLjyH1eemJI%2BSVCVVilY7keoDcEQlI8Ds%2B5%2FFzO74NCKss8%2FfFDOa9nat5BJBFaDxA9FOtoKa%2BTupqH5yRMrMYSXr8hvMJbW83eglIVHk6jYzR4qfKXXWWAl3xfwcLpWyUwydklabDeZIiPePF7o5MOSVcscrOaZDIKBeuPJstLYXek7pp9T%2FzgGVkQxWgBsiZ7el6p7JD3OSfH9VxkQtOjR%2F9bEkJXpC2%2FVC6wDXRRdVf6c6MSbxQuNM2bNVIWTKH%2FJEr5IcXus4gZLCtBirYxtw8f3t9GRm8Via2V96leUuzRFMTDejMbEBjqkAW9SXAzWanknGf71SBzxMojzOFtuuj20Y3BYZ%2BiQEGNP7vehxAGvvCK28jxray9yuPygUlaJ7KNYJUZXlvdbu05zaFCc6BQDcRKWHsHXY%2BpoptMSrM3Q0frcC2AISo5mVRixvqyfab5ZRTr3XpjbdL2320mVu9N%2F758nr2H8hpgEVFs%2FIF2tueVbrJm1sO14MZq0DovUcxQs7snF%2FtqGa7fr07Ey&X-Amz-Signature=a258548ca1dfb240b3509cdfa04f31380789cb57c0221d1d7b9b99bcfc8affcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2IFUQ2A%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCICdA%2FGk5yXrmkR7T2hcRTF89d41BpbjSjqHcZZU12naZAiBSu6gnSWbjdckXkLHrvEjfhfcb5HLV0MUmVbEP6AJsxCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCUDw3jNeOH34lepeKtwDfW3Bd%2FeoMI0VJMBmTWlmLN%2FM6C3eQbmPMeaMmUhgRa4TMjSHrv7LQNyTur0fTJZ%2BT%2BdJCOBnATTGCM%2BIJRLYawFl5uYvgZWNZGtZBAjFHG8s8VZ1cBl7aIwUSAuBDiCJn%2Frq2E2My9U50QZfZvDzmRQ7bOaDLmip3sob1QeeezxVEUV4Lvm80Q5nDKmuDzLwpeZxGWMqpxKPOH5tAC472Ow%2Bw8AN9E9S1rIh%2BE9qdGKlN7uJRGrkPFGGBd0nm101HBCilJcak7SbyHAi7EzH40Rzaz6188GkyqcMBoQIq95JEtmOxcjd4iM2f%2FAKNMeVDH6n%2F3V92EW%2FDvMlkvj8Q%2Bs%2BL5hDIYngDUVbGFD5HqwypdCbGLwehaetvxYyrv375nB0omvzQX%2F3tSryg%2Bh%2BOEGemY16XYHs5iBxRG%2Bndp27Ybxl0bsmgsPAVXLB2ImoeDDPqrqnc7s1Ft85JBmp3HILokr6B9mk9obM0hF3P%2BIoJuTpqGauDSIS1xylhf3VDfGhn5wWBpVqmve4CjgYLJnuxDnAGCqYt0VqnRSzVs3Tz4efYQjdOdmJknvwm%2FKTeSdPxTzeBZH0V4AG3zVlzmOet%2Bii5PNeJDSMgthpVfZcVVb%2FzLDgKwBwbUww5ozGxAY6pgFPHO8aEyL6HkCXhnBf%2Bml%2BKNlpQtLzVl2xTSwWfXaLOIlO98A9gl2uzyam%2FxyJUKRX36tHqrFWPD3e0EL4KrSuKo8uxKbST3YzJydfcJNeboCMBbDiiFgoGSLkglThIT6Mk0mZcglGLoo9c97YwpcrrxatTsI7ybU03p%2FGOpecj6SVscApV%2FjOqnHuADfXigHNGPgPEaXarGjOg6om3w4nYo%2FUU5j2&X-Amz-Signature=f781b23b8f88532f839ab0dcf6a072971deed7ad2bdfc506afba5abe471edfaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXY2OE6P%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEq3hRG1MOUBkfus%2FJN%2F1Htd4PFfur947iSN%2BrG3uSY%2BAiBl3vpeuRj1p1VVrNM6Ru0O9%2FPUytQwCjcB0lGOvZH2Nyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMjal3CFHgjbPnGvbxKtwDCoJWvplEcEywfZ%2FhxyPakhT%2FJcrr1Bl6miv%2F1gwZgSCSEEM04eZTm4W9q0YFhihWhQOuVdNY57rZ6DD0%2Bgn8aESdP1vwV96ta5ZgvxczQBF5Wc77ojCEyik6u8AzoaUO9oLT0VbOMf6O5kQKaIDMiaj36UStr5z3uRAIilWxO9VySB4OfG6gsrwNEykAf8xfCnCFbhDPLNyI4hU1HFmBGcpGRQtT%2B3NAAPyUamuCEtTX2TCmyq4yoTFAAC38EQ6P%2FC3eqOs2RHGpkL%2FaqC7gO6buqivtBuUGqwXiTa1Pz3Yh901Gaq%2FdSMtyJEdE0PXC1G6Lr%2FlMpZ8xoFkz56vKmO7vJs2Uwn8%2F8B%2F8uO7frxcSFHzwXPHsar107Ugh%2Bdyj78aN%2FTDxohJ49ZC6iXrrRCJ86l9nuagotH5gvN8rhBiQrVjjvbKhpwBxY0HyDvhnYffOXORrXn9AReJDdGhpPVNdw5wkRI10eEYboINz0jTWu8iZLODgVdXHzJasJwUufJo0LUKZJdRPMYz0ugeYViBQNBVb%2ByQnbKjbq0%2F9IG7mhsE5ahDGfCvNKOImvpmhhXnoVv2h0ipYCddLRyOv1ZZEsEYl1YuMv8RfDfxiFwA5cZtlNj7Vu%2FD%2B%2Fjww3o3GxAY6pgHKyfnq%2FiQGL2X651XAcZqfcOI%2FjKPBU468R937xZZdGhpGEDPJiDwDMaN4cbznRnBlFt7wZm8YyUMLHI9XXjsmb%2BIQ5y%2BqjTTPmRaIOWL%2BAOatZs4tW9jWXOXPd6SyZkwYbtNX8SToNrE%2BV0oAeOZuZZnjuJS7hccGzhp3TwSywLSh%2BxMwXLK7yNYSgqofBXBK5%2BxjZz5Jy8w3qhK3M%2FrUFdjmJbgc&X-Amz-Signature=01350a1caec222684b07a263734a1cb1e676bb44cc6f8a2620ad4fa1a06868ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=9bdb5165371a3622f2263bf1425a7f680de2fe317eadda0cc39caae19dfb8d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3L35X4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIE2TNtkhMUM7iWfInIjURt8WrSW7ky2QfsrX7y9twg7qAiAWz4gYsAEoXWODp4AKIsCO5bllE9XJmfPedJB1KanM6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMuYRb8fT%2BJw78IywGKtwDU%2BpuSZsIWN%2BdAD3vSO0BhOY8gqHPKx5fd30XV6x1TEK3A1dN5mziR5lo3Xk90j1dtF0%2Fg152xfHVS5EC7DaM2C28ZSpDK7ZWqD1Q8v7LKmaRXqDG0Kvooksf8xEOsgZnpQTOQY6AUnUnQHOYzHGMp7918teCSM%2FRlUVO16iz8evCICX%2FpoXUaLTS9hMcJKSbEaSmicTBytlCVywGFpMZsGb33JRv5LHmQQQZz6OYkHYM9%2BOPuMjcBOKcohbLwEO3lujOVKalAg1uLWySeqPmv8B0KfaZcfhsMAPKGyB6NygvVPURJ%2FLmKMwJo1JsglqSZAbShGhdrWDJcOHGzbPv1m%2FfgqeD%2BiFFNKX1gCPS5t9oX1AdRjAkDjOERr6YS1YmwQ5JHy0ThChm5em82NBT2p%2Fjdtsg6jziROq3ZlQRESAedsVk9oUTzgPoo6lx%2BmsIMR0iSSw61nECixWN%2BZBjQymTxQKmH%2FHOvR7yRHiv99YSVxBMfJrtjOqaSDB1M8lrozpe4ylw2oZyrKg4kSMgtAAYzGBn2vCuHdNM5rhkWgXC48gCQg%2BKRdLWtYUFgbwdaEgM3t6ein8NzFCdNka24ObFWpRO9tUwMCYsL7TQc902vpiXPXncdiCWIQQwlo3GxAY6pgFlg287iR7p4uaYzS9tUnrv2Y9oXs6BQAZ88xjtVg77pErIwzQbqj8Qf6Rx0zsKYefCGuXRB3IKgdcGrbQUsvwohgOWht8PxrYFm05XERagOHoonoZ%2B2CK6ZyqOdSlwVvPuQ4EwBoHI%2F%2F03I78DnGBtCE0OtFMDIpWakXGQaMuPmwatyP2PgsFtv0NJE1b7SmvFu5hVusJ4jfAH9jhwrm7idB5FiiNw&X-Amz-Signature=4defe7d9e1197b9382827921386465d2256002e1ad97c64b1d27e94a3537c300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=332b132065bbefd033042921e961f0d071f1c262778c3dc92127f95d7d8e4b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=cbffc3d252b924f5f42ad4be855bcd0ca6059fea10b866a120a5f2b38e388c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=7466d0178067e2c2fc0ccefecf5d40203f9bf7e9efa40a6e99f2d8e215ddd691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=2988584f26f80059b550a977f736882db24ebc2007ec469a74b94abc77c723b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=5166fce794d595cca2ab2bb4716e08a8dd25acd0196d6b970e4f880faec04285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=e32380b67a0f75ad13beec70abfd95e75403eaf479b3417c22e9e04f6401ac98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=7466d0178067e2c2fc0ccefecf5d40203f9bf7e9efa40a6e99f2d8e215ddd691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=8ab4ee2ea99ff9e6886ffeebbfaf580b53b21698a490d5d651ed29bb86fc6104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=e62cbffb47be9ea04f6577a537193d485d043c6425625ee219ac5ac41fc22b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTFKXW3Y%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCCc47%2FWsf4A2%2B1KWnIwh2BsR%2BZP9WwOiKZno579Ac%2FoQIgVjSx3rtIHklWwayGXAWkJB8%2B9Rp%2B5Zb0oPdcR%2FAclHMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDDn3%2Besn5zb6XUEWOyrcAyFa2PrBW4Tq80HsjP94%2BKtH%2FD5sgyYwjc2%2FK%2B9xrj1vcbYw8H7IRarfLf2mxdFw%2F%2BZLtB9I3c5bVOBpE3OBtOwnsX7G5qT83govqv%2BlbvV0ZGeRGSctgD6H%2BIGw2AQsuclGIw0wBmTfNMpLsAdNMxRmwKFpfcYTyy4JtMAihg%2Bd%2BNZ2NOsc%2BgflD59py7lAFm9bMILlBKTaweYOjYRQoxyEJg0cGS4xeF5TkgkWV47L1m%2BGseru2dxymCHRNkV9wBosYy8%2FhmVqYEzatWIKLmfgZYoyUWvRWigc5xmlA8IlkcF0JSM1AR4XNi8Yt9rEgUoKBEmwD%2BEiryX0PT8SvIMMJDMhzvxyDrq3fOxIAZ%2B7lKa%2BDPTbZlDX3rMy76Ms88TNAS0HV5HoCxJI28BQMPEncLmXz21c%2F7vH2srDUtLkZFeGEV2utE9UBJqOORiLr8L15D%2B1yjVsjRX4dzn27H8LA%2B%2Fy0Npm7f6qCnPG8ws2HatvdkU%2FMokwwjnZIn3%2BG8h%2Br%2ByXBzg%2BfVuDV0WYoLZuG6rCWKl5T4jzT86HUdDgZu4yyMwFeXPKGc3fLR7V4d5B%2FdaQPwT6PYUVnhNp1Ufjwj2j7tzU9uidBD5X%2BrgBcgW3aK7m2r934ScrMPGMxsQGOqUBdppu%2FqQLx3bZRX%2F34trksx4ocipYyybMQCMpoSu%2FABHx3YAjATheM4s2wdAnE2hcdmVBV4nFj%2BvUSScKML3We%2B18CHnwG6AfPQq4vBXKtRFqreHT1qsqMsODuxElMYoayJgwnVXHkZchaJ3Ajxz7%2FHyJo9%2FAkRoFuNcK9b6Lp%2BUlap%2BgRLLj3UKXBOlNIOleot5U4gxeNGhY3202jDe0EWsbUsMF&X-Amz-Signature=ac9090b824acaf61eeabff265f69009a3f6d39f8063a3380114909a85540f825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
