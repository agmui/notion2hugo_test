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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=1986e5a8aa2b1b11c2e08f4590819053d4e4372586eea2aa248914480602e95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=769718483535dc4cdd860225492fb31847731e71f820cc8d1935de1545a90f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=b88c14757b474daa874196186eb26de3634c1f397584e13d6edf0e8f54f4c2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=473d4cb6c8227c51b60acabf4fadf30573b006d8336fcaf81c576ea189853107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=7af94f97e20a21ca7f4dcfc6b0f9a97ed2ea2cb54ab5e8fedf7f15ca1b2a4c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=0284829aae65eab65d8aeb4b569ed86ea35caf4f57520e0227cf8f8c0680e44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=3c24bcda9d9eb7b8637498ad1ca835f08110b9f11d95d8b3208367e478510fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=5badacc020304d71d5293afcc1e87148ce77744f8b9b0a97dfc32d61bba905c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=59239b02795d1c71de04b8254af6da443aa3807f0584b3523f4a230fc795f151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=c4bad333ea911803f4abce7fb41d1496fead8e0b5ebaab225810a11e28742b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DZ3VBDA%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDgdwcufEMqaQUI9fhsPc3xoGN6jK6tudEhvmqiD%2FjVtAiEAjM1ZdtL7s%2BH9xzNRj8OJz4TjDoiJ5mMVfvKFKFcKHzoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FX%2B3FiarlkOfwjZyrcA33YqKxPn2eu6I6aU4Dn3gWWKyJhaDqbkAqQdwilsxPbVT2IAIzRac%2BqyliKo0X8vDq593ED4IhxTBi4WhjSGj4eU%2Ba3RcYhsXcryCKWvQ5h76i9QiqnpF5o7hQ4SIwHr6v%2F%2BzxFaOz%2F3odKx9LXSWFftYObRYhXCjoY4kSjUZvyWWknm2cTIfzpJh5Lsa359UNzFYWzWZjY1HwG3nSwem4pyKT3ZjeZis4uMOIZ7I%2BeRWm4JZtBsTaWjoqiJ%2FTdXv2CHQN76yQsh7pkNPxYTHuKEJglPPCOXAaMohRQoUBVbuDkgBmTn0Da8kSFKzmPJlQWRa7mG01SXIoDmqme71a5nc5VJqz%2BLYf2XdKjL9XMaNstqApDm%2BrX8VtAlmdqeTDDgEvOaLDVSIHTvxF56CiKjUtifQh%2B9vKvR4hnMLrfaM7n7jo%2F160HUC7WJZwigvYAeGmJC5ca0VmgurAVnfZQAA20rYED%2B0nNanHAOVv%2FynTYnW1%2FXa%2BeS62Jq3j%2ByoV9AT0C5aj0pTwXiJRmqhcRdtpAQX3MJYcTWGGlLS%2FqqmZRA%2Fwj%2BC75sr69rY0dWVCHvHux5TYOqB3snzufKUeHWVwUiKM1R03Bt1HAVTejgnJ27%2F1Pt%2BSGVcEZMIWtjcoGOqUBlUYqrWba6mKpky%2FTD3zSH9sAzG9MCNbx%2BmmT3Bxz9fYeLYe9UxKA1q6rNQGLcB9%2BCtbWuRvymeeWklvMuFClqzoZajmrQTvpL7RLaKKxM5slwtqwroU5eBuAFZJiupTvyOrkVZaIZWP1P%2BLzRN94bMmEaEq78uRP0I4LQcVg%2FRrnwS8csJx2AbvqR9WU4BzAH3ozzXQQ3lxtN035NAvZZUjMv7hM&X-Amz-Signature=fd58f6ae66a893966a817d9b5e7fe3a91ac68ce327f9809d5c3e0a0ecafbeacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKFRNDN%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoTvLpfLWzW%2FNaFnQxK9jErUacs%2BpjOrtMb6aOEkUZUwIgBW64K4qvtd6jeXbfbXsCHq07zPZs%2BoJQqGPwJLp7pNQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSQ2zYWo1hG6RjVuyrcA3NxBnc4U6GEbRKbr3AFUAgun11NDEO%2BgkHJ6IbcM7nfWOrQtZjeWY41wxPu1PYlDdVo7jBHynxnARuJkE4hnSWZ2lX%2B9aHioPST3RGmEZpA4zHQsptUp8VWztHjI7sPjVzQOdJljR2BM3n6pCOp0dL0crtVqezbLEPlUgF5VCic%2BPnnYeqmGoVAvFLK2znXmL%2BPTaJYpB6AQJuQGmagkMy4ER5Bf1zbacPc86XcUeqFcMQg6q5tLQsxaxP9Yy5cMFiTsZL4LwScYFEv%2Bb3FPgFhjRECoQgUGlhwvo%2BLFMN9YNx9ALsbvEy2tkGWLbpYChYTgvXdIxQHqzQPCeSF1t0q5KbEqCY9ctQgDSIl681CpoFykyNyy8FSHRYU1ChUrFlW1l6l%2B%2FjeM78WCucWCvFb%2BbowMlAFE7iGwi8Hh0fXGH%2F%2Bnc%2BvsPp5h90s0%2BCKt206YsefM995%2FcrNgYchqNRKyXYwZbjDkrJkS9%2Bj7nAa2lDGrYJd6mXdH4d%2Bihi0UK6taRKmc%2BUawxtA56LWKsGoaysBRU%2BOFmNS92%2F%2FllFEXUwtq8MBrinjoLzCcO0dIZCjJkdd7rvvML%2BpcZwLsV2sRD1sRpqE09DuBLdnVKZh4v%2FcziT5TwF44kqIMLCtjcoGOqUBVr5Y9jwZI85syz2TtF2UJOLtogWbFBSXEKl9ArfpXtdFYQWSdz2ciWtiBUAS%2BjnZI4citH%2F9htz5fhndmZaYanT9TLzlAhPI%2BDLZ0DR0J3GA8scVWxB0V1ct9%2BGUNcKWh4Xz4sraIRzs%2B1vr1dKuEImQaTejBi9XhlLjIPvbqjqnh3h3yfbd2QxupAtnc1Wlpwj9qYsvuqxMIqVCsxidjuSSftEz&X-Amz-Signature=0c50199010d758733205f5b2a9c3286d5e3ca67f1cd0b24223a2dd65c18b02e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466465JHC5D%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg%2BQdQea2yBpgbl6NxsUuQPWDTm4sxdLEQc0bDoFpylAiByDX%2FO4X8nEowYV%2Fs30fy1045xqM9n04Aq4cBiO%2FGW6SqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgaCGB952I1MYZRfMKtwDkmq31Buwv67oNnuf%2FPL1eyKT0evDlpzpTD5juLXidOtcWeSO%2BZ3urw%2FeH1Xs%2BKgi6A6rAepddN%2BGjTszVo7VEFqpivJjGEoqWcrCKI3%2BbyXrCdMi5%2F%2Fk%2FBa2bFMXRlEIHZN5MKAgiwqrF5F0iu8H04QKJfXtzZIxYgzkgWdgNgAMy3Yfj4Fx48q84DfDSwJjsQzufIqvqGrpx5GqLoyCVs4SvwA63Rc4cL46JMiD%2FLyPhqdG7Et%2BRGkgNJePjdgG%2Bt4AwemwIlbi16oIVH4LnrV6fnZOlI0oANpjsU9JmqrHBTYwjThmAlJsf8CNKlP7FZu8CYes%2BbJTcJxf5p7xSZKDVaBfb6EoQVdoPMQlRkmfZ1hr8cTmiz3DX5ItDRmkP0P0dI6Wg01p2MWnhLfkNZLaJhQCsMLPl4f3Sx0PoYkBFpByWnp3poj9JeBh9HKCI7GZpg1%2FXq6i%2BNpVqK8gJJtoAmEbjuB0wg57ovuLrgxEgaHnraDf6ZVkfypo87%2Fq6XYVuKtpXcw5yAl7TUS%2FcFyg%2B%2FgasO2zOcS%2BOR0oYVjDmHURZiyFKMsmgfUG3ykit3%2BHXkkXF3bE1Q%2FoN2NQwt2x3OMxEk8qBTgsxfl0Ul1yuTaPbNMHERf9yjYwvq2NygY6pgGlvdFBH8gD4s%2BoSbOO5KYQFCOohQb0DKqPdRm%2Bg4ZOp5FOxzcBrDCt79gr7Zfc%2BOLVnDlWZkN%2FD1tApxvB8Sl%2BZpD%2FFqdIGW5tt9brIF1VQimm6DZ8CvKTapyyEkGDqGzbSaT%2Fp5DSnCF%2BTXmur6jyvzkRtuYPW%2BWt%2F9cAvXF1QfYJ3VohIg3EPbOyeIgDvrEIE%2B%2FvQk5j4t%2FCZ2M%2BK3npAzQfKFin&X-Amz-Signature=91a6200c01d771a17ee414b37710e4e44f79b113def9c62d02bf965b3b635bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=bca0e4505b09faf82220a414d07a91b4eea142e491fa36d18e79d0aeda56a327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRKKLZYX%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy6D6gpgEC8F8I4rqq0cuJ8yNCTLMSknNwoZk4gdBx9gIgZOXBhFiayXfmKbInnn5U8s4W6SP8yEHvAlAcM0wa33YqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6z35ddBPLLstikQCrcAxkgAgExqJAt%2BDY3qYay1CT4r0emUTsDJa8S8w8Qbl1mLmCDLseiwiHi90SyX8DRGWZ%2FzyHluFs5ctY2Z58YGEf9rleNXxLg2X9Tp3S8F%2FN1iRvp7KI%2FkmNnZnKuT4fSfm2z8YVxPOrDX%2B%2FwkKpFQ%2FzxpY9HQWitWw%2FjQABvlGVVRExhK8NB5CyLxZPRaFJjB9w51u9dBlvdRwiVru%2F43aFaZX6rMBMSVkx%2BZCoun6G8tG1SBfiHU0uzzqNYNB6yI9s4oSb7mEZEPEZmO2b5qV4TJOQDPPuhg9gK7JZvHFpOPyrY4jvq1IYqS473%2FBDWkvTjkegH45pKUicBLz2VOSJIO0zXvZqqrED3kZ%2FTLih9fIyz2GNIeeWl6xuDVSp6LYL1eaHE222X%2FqTbKiqmeuGjpN%2FRPNte4XEPpi%2B3B4O2AwWj7RYAZVW93HL7aM8Snx%2BoeYdoryKChdiHdPos8R7K3AsIwP6zriw5NYaOHzi%2BgcJSP01x96sAhQxzHEpXuICGf7q0H5%2Fgtp0jKsm1nN%2FIqCirTLMSXjDt0G80vf3sQ06UPZh2A2ag5sPQeI%2FZP3lfLj9pZLftXMqQjHemUW1Kpqi03C%2FBTilNl0H%2FKIFg%2BAaM%2BMTsYJa0K7dbMPetjcoGOqUBmrmtpphcWsYThnSRfbxqIIXCaXFKqO6WliXo3EpIPD8gM%2FUPyKw9xkbKc%2Fy5zzqyk6tdGYamaiCZjWOPFQ64qLOP%2Bno8P%2FtpJzBbXv%2F3XP%2BVhFhA%2BIUtL0I4IupdEZkR41%2F42Rg8zIEqbFPvAWYcxkNc5rKWb2hyuw3YUKbxqJDqgJrbIjocoaexTqDYFC11ofy1ywrXPmKuoQPLUCe6eiNYfLav&X-Amz-Signature=7e8a247afa069b3c314dc9d98faf8eac937a1701409bb25244a7ea9647b36102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=b97a031e8b24e639a68df36986510b4f6025dcbcf2a5b994489e3871ab9d50cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNQRM7R%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoFOSgx7TIWwXtjuL6tiR90BAygsAy7239cjwVP7f7AAiAu%2F6TPX1DEntkQScLOWkeZJn1VVjv8V9a3tPbDmdHhaCqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWqo3cqBvkzANc7LKtwD7psE%2FsDgcuvOVpUEiMSFV9rUGokvghMPAcQM84otcptqtEB667DzEXjrSTfZy1LNW5yGv5BgPuCGRfTsgFkkh2%2FW1G580c615JL1cXKEoP%2F9iJoWwdTcI8PAeFsJ9SAFSlr7BTK8GpPJCFmQuELZqetlXL7wEf3C%2F1ZqWV4gR4ctHjAofZzso5UkeV0AXR1W0ma23WbCn50xT161129VxZlvUPilfMFgIB8UAisUQsxR%2Fo9WbDeA6WySF3Q1IBzr8mcKvgdr8xH3cdiAOTFMvJ2mkDaS4aVlUpDgui3LptfIEVtguXQoDMp6X6V0SA0Ak5tvnI1rTtsSKFbgldYed66SrgbR2YBHbLjtatAK2ge8CL4vO2Nrdya7JL0g%2FEPV8AR0MPBheu46O6Sz0gIjLrI3qaIzZvLWCya%2BcPBqVdKMmPrmYTjH9cxOQCfuYm3FJOVNISo66zOr35IMggPfXtyF8mWLkJDSRzuVpvUP8LIoZj1Tfl4OTZVHlAjMcm7NrbTWD8yr6qmm2ZxpFkk3nt%2FLsHfi35Y7BY1Gkup%2FTKfKo0Bdw6DXVikqLs5dPkDQ7mxCylPgDmHJVXj9NmmiWGe%2BjOgaT5weqpHntIJPbm8VowTMjrOBxiMkm38wga2NygY6pgEFr4AdHS%2FQAUb7uoBIQp1nnzvWAjPlcFKv0NuOXlUV0mt9hzNq8C7TQKcFk5fYA9tVuxQF565MrMQdAK5S8otSPJKOOpqIWmSAmDjz8bRW%2BV%2F1GQxtkRorA4wqbUBMZlVxDjIlq8ClnLul5FPM6otICULLiv7ad11YtV1YiGZtscgRZwenStmuPePYIY25yQIIGDJyZqIssPvdHAvQ%2F7k9Bg0Gl239&X-Amz-Signature=922cdd8ed931cc95f54a0e85cb3cd945cba1111b780f3b6024468858f8e225d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=07f9aca1b0d10f7bdb80011fb7b4e1decea569aa323744525adbe845165a8722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EGOM5Y6%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCA%2Bpaja3u2xrzoChdj6CLssd6GgTxeA1mwAXK4JIuigIgAMaomJFnzIkC%2BE3EUCwaHHBktfh6bNbVLyK5YzA7O4cqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHXO2mrbgpnxJHzseircAxtu8gRSUpqcP8Ug5slIP%2FMnKn%2BFk2WG3CW9HkXblApcQYv%2BZKFbPVDRDLq%2BJg069kMm5EbdxwkZoxNVTeN5jV7By7y8AC8Qz7FbmB%2B%2FmyWhQwzjWR%2FxBO%2F70YwZtCewWkh%2Fptx5PthkdSxX%2BAke14nyZDqShRJV3qwfkbzFIKEzpmvrKmGxaVsRzx32niTVHfKbnnxI%2BmVcvKvx%2Bplvi8Okk8dus3fYTs7GJKPw%2BIMogoTMNAJuUjoW3psqvkPoeaKd0qGziqveEsyEukg5YyS7YtWBKHBbQa69hk%2FBQqC%2FPEGOJwl3A5vEM8bfBYJdldJnHJngq9HBoeipLaf1qGcBYh3eqN78wVgCas9B1mH%2FH8a8VCJIcNOkjclVJwjLvlYJMMTrrIqHNFGF05mAhVnGOJpYnzd5X6HyWrfUyzhsPhZyxnE6mZa0iJTgKCf%2F3gmHzCcGUgypHUn28%2FXslD53gekmV7ejA7FtW%2BYS1abHMsTKhadEQ1HFvsCF6YLPIIiWsWqYtOCtpFSlhEVoVgWB4AxhyBb4NW3HaNGV7x0WW4CC%2BLNFZ2had4UxZjFCL1HvHeYB7x6wto7ZzZbtzL5Kx5iqicmj5viY%2FxaSZpqBDhvqN4VHqN2rJpmXMKOujcoGOqUBCkpM3baFV37ZS2BP9iH9SM47CGhbLAJGGGcJqC7zbaNOFZOV4WLgtTX480J%2BCygJrMsBSJ6qQro2AYwxUZPuuivo5qLoRX5W%2BGXrCslNzZOQVpdmA51rBxnQfjgRfDWbINy%2FYBKLjn2zp48WuXi7o21t6FcLO53SRCALafb1EMDnSY%2BW6nEKPqLKKt%2BQzwoqC4jId6u2wvTTlHqhPE2XzshCYWfX&X-Amz-Signature=391c90e25211433e16647305283cec3e5bd4812014414b66900dfb8c1b3822a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=b920ae1d3b526bcfc116df89cfb4e3aa45118ba930a1a29fb849242776029a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUGEBOJ%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrwzlIUQ4GHNvG6CynpyJmA%2BOxdJuAe%2FzP0nLpuiwirQIhALaE3uLwXIdRIz8WKPEReSaUISE53pZXvtgOJYo2%2FjGtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtt1HBOmTnJDweFeYq3APs%2Bp7zUe16cKHYk%2FFukxqNgvRF47mdT1AZAEsJUtqU1S1bmLPgi2ZpObUQ7ZZEU7GRisF2%2FsKaEAkLSLvjLzv2dxSUemZ9h2mZx1g7sBEszM2zHq2gfBxmWIm3SfA9KYhnacnqoOelW5Jwg55kZ0WFhkhvMAP9r9FgrTyAeuIHUE5WYUxCUE%2Fw%2F5Qhvn1LrjQh9in6Fwg%2FkHqWp94WnSpSqbCZ6SjD6qG9bT1nXfRnmmTqS98yK9t2K0OiEnvWugh%2BZ2ZpYgaZcDACn1yB7JgYLyY7ae%2BbPKmsGUdJl0mEau9GWjF3mW7bBVw6%2BU7Qct7Mqwru5l%2B9FZdA4huI7sOkl0nmAxyFBEwqdaLp3DFC0V%2B%2BzWdx%2B%2FktKL4aFmL%2BspT9Xv8Y44BCJPohHmjB6Run2syzSiVNAak3Cc7JbUhXcfni7fb44bf71CBMn34Vn5iQSZjhrmpZztw0oH3SgaNotecM7PtOP67%2FqoXMhqIFMAviwYFbvYswvuX8BhrlUCN8dkZg4hhJvG2E%2Bgc0b%2Ba7YqELXeN47nHqaj5ihhr6WUHIfUdsN0tgxH%2FwLsx73GQJ7rdkjo1bIenXz6TbCT6nxBIFYzR5%2B5OLUAyKTBFk10uCgt%2Fx6wXTuSqrxDCTr43KBjqkAdnPTBDx57J7%2B0XO01M6fNpXpOYr%2BsLXmDa0MhrYi%2Bcco0YUY%2FiZ%2BYU89TqMq0eGqy9uJSm16fwRq5GaNxDMOODv38IVUtd6kid5H7E7lXzDYVfvifgiOza1FHiQ7znOdTgm13R2nsr%2BhTqo0Rma6rG2X6vsiEfbk%2FyY0Flm3Dn2rnu7T%2BEKbKD2vTfQjfKlkN6HmguxgYBRSqQ4g2qBlYwwfclT&X-Amz-Signature=9b3791351482b01b11d58c096b75d8ccc0934a34bf1845f7e685d1a12e9b9275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=fd3463a4c9ade92d1794d64ad9ac8c2f96a677ed432f88e4ca7f590657d8d7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKX6E6T4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2FYHNYs%2F5ad4CgWUf81O2RtYP28ZpiP3qtyP%2FBGQ5fcAiBNOaTPaeEsE7KaPmYfv3nGTpilBrbsUjCeKyeZ4Ob5rSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLa98L2dXQ69y0onjKtwDe79fhjqy1hmOl3x2yzVjT2%2FryXd2pUWlkmk6fB7mL1R6UooaQ5zM0ZWHvhKjVFx%2BWplCs2zwEFoclxX87annpDKWlbAM5stIsrKS5uj%2BKoo0eSn7xnwXdnPs%2Fn22nxZvYjR3V1J4KaZgEs7mLGdmtObIvoErcld0qVq%2F33ejI9U8FX3H6es%2B5Mt73UlUAaFyHLSCzz2WXMJn3xRN6%2Fjw%2BZacvyGW01yGs%2F3N6bKbvY%2FQESvE406w9HJoODBhPAUgyibqi8IhGqNZKilDJhh05xhxomM7oZRSxLYKqVm7GotkfyO08g1d%2FW%2BH5CqWprrEOhiAxPeG3mnDPNbUCOJcmggJmszMf%2BOcoPiP0PUH6%2FpiQgIgifOtIMuSYETqCwiqOdIid7RldltenTWHALwqfB1WbhdKMULMxy1CK6KkIrQ8DaTObpuwbkIe0Njm3mGS%2FnGdYDXkngOW4QH7RvAw8fI7BlhSsM92yhUZkcWmHjiaWkF3HnBMXEs2WTyD8RSCwvkgQVKmuw4D%2Fc2D%2F15kjfSZSDZxIBymrSydEalU%2Bnyd0TehFOXWoBhn2j0tmzM7Bxk9MFDPhqF%2B9lxS3VDowlvsfC57DsLS92QGYkYX7tujTW4YnIdxp555Okgwjq%2BNygY6pgFtI1csuXlpPUSlsgEbz9ee10XTY4cjMyCgE7iR7aABlPn0sKKjg%2BXdAtpwFTS%2BtvFOflBB8yGXGqODPdYVpa68Vd1Vt1vnTjy27bE%2BsF%2BwFlOEc0cx6CwaKww2tXp3ks7sU0EZgY2Ps5OsdMY0HzHkxOukCgA8kWT6xFdIuj2EluIpLG%2BQ8BzKozF8J%2Bg6GhFq60shfqv8Jlt8TI5NPPSs%2FLPYBXq%2B&X-Amz-Signature=dba796f91a396bde34541f6dc9e0732153b7c0f9a1fef84ee01455677afadb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVXNHJA%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaNb0L6LJheW96OEPtEOIJ18PoXe1wNKrxgq0viddqVAiEAzwNP3CtqaM%2BHFludD00nAtmI%2FdaJ7TVmsry5ffIQ9%2FEqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbR8lJxRaw%2FSP954yrcA2AySVkGp1iaP3d0oNAMqf228Mh5Nn2161vapqhPJyPAQODJQ5NhA%2B9zEPt5SdcOHX8f6UR%2Bkfsr7v0nIskVhz57TVTcKYUtba1LXEzCdsBh1Ub7ZwBVqB3BfqiEkUUtT8lLdAvLD3Ujov8H3lFBYdWkxs%2BMgBeWd6AmmSVujxPEvq%2Bef7RsdhWwfLAu1%2F980RtiiiBtkuPECxlPgOFn%2FMtGl1wVd%2FJe1QipjgsXUHCUZGBEVU9DDmB%2BWjkrOTuB8pzjOGjR56bp43ufs3nxNCdTxvRc7YenefGWzVT71DRtKp4331G1nuM3ei9xlPEYkn7YsdRdb85pUHGAmeQISVRE9lDOPgfgmudJyAOZye8d%2FtJ39q6SeHbOyqb%2B3HsKLv36oC23fvZlPiZR%2BZ%2BdSusIeLIC8vF9O6N2mmBrZ69mwQoJyi1ooRb%2BRDMtMF3gIwaesQIf4asutNE3jvSAgxe0Utljr1TfrLmx7M9szIkwm1KEYtMLShQkjGoFACfipDstc28f0%2BM5bEVdEl%2FWs%2Bzk%2F%2Bx2u0%2FuN6iC9NZZmPOy8SCHoMrqNnX0zhcG96QeyFqD27%2FViIFTb1xPHeV4rMfD8LD%2FHORHLJBYLL9AJuX%2BpHkJsw4YXwV5Av%2FFMJWvjcoGOqUBJh8sEqO3d4m8QubK3LUgX%2Bm7DoQfpGn%2FXtB%2FSu8XL4%2FylGJWA8auNdWaSnk5TkJhK7h4JP7BIAw%2FzrO8%2BxT8JGKExulDYrk3gp%2BzhfZJ0Yc9drFqoVRtSoB4bAUw0UNOSRowOkClYF9kbOQ%2Bp5G3AecE0Uo0Q3AgQ3h30GSyEjXJM1U%2BAPhKYI6fah58Q%2ByUnE0wwGBAAWXQ2z66bK3gqJUXvR9y&X-Amz-Signature=8ce17f3952523fe417bae5cf56f89342b8c628a29d10506e911c147b90c05d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663STV5O5B%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCamxLI1kIDyCtaqPaeLHDnsNFN3ntgZD2fvoJbMiGjXAIgS1dSYitt%2BQapH8WJEUGTfT9qIQ0pr62zEeVhJ0Xj%2BBQqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyGOpXHsVQO0BH7RyrcA2NR49%2FI%2BRADq%2F4MGsVWcImWatBJklSSfjpmAolktAmsjd5FegjhwrFTOZsI2GqjbELD7kzS%2FAGIs4hQfJIMqUWhKv49TArOCTeMbHR9yg1s17EydqUtv0PUu7ZQGSZdyZGp6V1k5dDIb%2BIYGhrkciWp%2FE4mIQBSrCAwcvAT5ds0x0zGYt4%2BsV7yqq%2Bz1mGseueExZ1k8I%2B735bJ%2FxVoj1iF2WxTpcMmquQEaftHDkNMIWCDz2VsBMKTmFyOjIRYosbUU%2Bigk8jNzeo84taWHjZby4gMQIDXAQRNhi7g7NlbrqJ5wdwgKoA4wXwH93MeVrqBCm5L3YoYf6DftvsUXzngTKcSL8ekgfCHkEUgzx57g94kMl7i%2BIpJ1%2B7On3nocC8pw6MMVWKi22URsn0TyZW9pgEp9iDrEdWHdyaIgN7UVK885KTmCBGk8oK2zxKee0oaksG%2BTV5xgKu3VbSyFCYa3rlKLSFfYD15FT8OZjgVRrXxNr4Ww8JZd6Q7htfEElA1WfiLx1evIFEyP26ygy616vz%2Fs1kqSD%2F%2FUuxS1kuIIxvzMCn81mbRIC30oElZnZuFifyQXdfSH6YKs2MdgTfBDsXTuCDHgkGV2%2FzD3Qt5gannuVz9jyEXGy4OMMKtjcoGOqUBjmG0wjAJz9J66YHYsbVnPpddM2uDFCUbrmW1l6R29TOqa7Qj8zPk2kJozQBo5SZQkUZjV0klrDRE3pA9brjCwjxt2LQ85vB8119qC0djuotTu5IpvDIqU%2BIb1zLiPxgLPflTsze00PX8Qj0cBual7ZquN0O%2B6a7HE%2Fv2tgrAMnsN7xZOgP%2BAD5sUKyGwRZ09AHctXSk%2BqpACWyU%2BoOgmm4t9vujk&X-Amz-Signature=0436d0662e6dde6a870fb6498ac44c497796a3380c054a32292a19710ec37b15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=e4f330a0af12188b0d01e05e327af14e35714165356e64dc6ac3129035aeee4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEAKA3G%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIACkWMpu4hu5KwdyL9hKE2VhjstNXBsLg1AQbD%2BaoxtiAiAYZUfMdmDiWrM%2B32nJ39gsW38nEtuYEbOU0%2FpZryZpViqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnJHNEaLJzYboblLkKtwDIikJLpi79nAim6TawMTnxC5dA8pDuYlFm8RcHttRXxPNU%2BdkrOgm1m0K3vozGKHZHVbuwcqnD2Vu8BkdOmE%2BccQ4CfV7LxE9NrTrNGztc3HzcnxktuPOVQbLuaQvDB7eW%2BSlU0%2Fhrc5%2FkZtIridGQxJMryHSHRjPsFWYicRaEMQ1KKWTK4SkIdBRdN72%2FxoYxqdWXNzUDALlfbFu%2BBtBUqSt2eDL4Fb8jzVT0M2%2Bb%2FAjaH37soz6se32pnW%2FAnk0ZkDog4wNtbbBxMav2ceAHSW7Q99U49lBYWECj%2BJh3Md14Hh6PpoDVJpAUownnFzw%2FXgEQsaLAeBVQdvzDxM55AMdW1KrSsoV6OXjXxCfWTBMUqtlv%2F50LJ8KRQqeVonG6em23w6nu1r50ZBRNCJtYdGvTQCteYciM3BL8x91z5fWUmKXn1f6jlU0%2BrQ2Zw6oUDyR%2FZnOcndKYnmhXIkhlrtM0ajI7p4Q%2F1kLMJ4hudA2oFz9ES6E4rVx5NCuTmGmUrl53hJU9b6Rz89g090bSe5RW9quTAm7a7mNc%2FcLdRU59SlN%2BIN6CkwBQj8Bcz2GF8WG%2FOoE5w629dVNApZzDjc76TC3kVUliseKZdRqxQcOIIq5L6mG2p%2B4UhEwvayNygY6pgE1yFTrJiZZiPjMP1YdHQ0EMbo5ADiHRDb0x9T74DOgJwH%2FDL9jdMFWVHp6Ejzn2XerOORMdkU%2BPb9k%2FjNFDTaZ8fUfC2tyVO2XH7C1spEuJzliaKzY3zVvnSIm6BewIkMNQYG6u8TMz2AE9mYULJineHju9LWyu9UJcXIwHt7h5bu32xERN66XaPHcSsEKV5KLfLoIpcXdfLzn5391K4MwSSMaArhm&X-Amz-Signature=040120d3e1c8a8f78bc454c63a00ff5bd45105348a8828a889d267e8a9abb0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=7efa9a4c0055455a1c4ae5d3f49af6a84f817bdc5b166a214d5fe804e3d09c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=55193e18815f2a3f781a6dc931891778cce4a651301753ed26c1bd705b0afb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=33bc003f9420e999c2de74475c85028ceaabf4d15e2b1c3c029b39722bc509a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=13b7bdd753809c5f0e2e23d2315e178cd0602954d57d1c1650fcde0fbc70035f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBHG4K4%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKRq04ltjVrUwHAks4So7Bww6AHJLCq2vN3xHlV1SmAiB%2FejUmQJ%2FhkcF3UyLlTSvGASy1X%2B%2BV6dn9J1wmm5DvFSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYGxAanXi69dzUUa%2BKtwDjtgTV1%2FIAs9QQYqzSjF9FSvFW02WQMgIb5NtNQmA2TU3Czitgsq9HTNTHKfUhxKwab%2B%2BtXUoYqZFob2NL9A5A0jdPwLvbFcr0AYwZIw5sVqKuLTwSsdQJBdXNfETH4OTSG12GuPSwKbq3oqCL4OdMuKci38Ep7O6XLodv3Z0jCjIF4DYIvT1VDn5wwENBm0YL67Pq3S2aBHHa%2BKm3pH9SDuDzrz0Rl2GXuN0dgjL56yuSNg3RRMbSFUlue8pC0ilvKtoFolcVMVHp1Jv8Mb7oZaXCyr4uhdN4SHqsDylOQX%2BbKY6QBpiP3de77jNsdD3DazJNNtqcmZtzGtCIT75i%2Fvq4VaeuxLpYYJnNrUo1Ynu3I6EexR1VB21m3EJL3CB71ht7KXPt6O1dvGZbTp9fMa7%2BCJxrSzJcpZNTkQAFP30NXuiwNq6eF%2BLEXXy5LQ%2BWtXl5HTYuytWDhV3LAoo5iJoSu%2BQdH4wxTyFWhh9JUDVC5joRavCwGhymAIquuLmEk7IWhwNUIkgZMf%2Fm%2BoK%2FWsZQdXFxPdYziCE2yDm716HVo7ev9BLoz8PQ1Diu2WI1vKzEFHJ7lcVef1%2BANqiG9Hit1sfilO0Q2VVps6YVaBupqJb9TOp6vc%2FA5swo66NygY6pgF1KeGvi8vN1JltQmxRS%2BRymimkTl%2BGpA2K6cakpgN8qwlv4nUwzUoqaGQZthngvIAoLktRpaeBj7j3DUA23Q6XBDimvm6UdQ8imibQLcojLVFPtNr0zRbUKo%2Brf9jsfF6%2F80%2BBxxTHLH1W%2BAH8wI%2BVSDinA4iusFkvNn4QIzJwOYJYFx9XjOqv5pmBR9%2Bduw4Vr%2FHLFIzmznM9PtoaH0WjocoYtg1D&X-Amz-Signature=889adf695b9b98eafda48588660d7954a61d15a3652f92688ae70e1263c0be6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=a93003d1919fa81a91a8cf8d56188f516a906c9b6608110ce328dba08db15088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=5d8756c7842f81b42588f666513eab2525a47b297384f497c059e8146e63f3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=33bc003f9420e999c2de74475c85028ceaabf4d15e2b1c3c029b39722bc509a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=a19f193b9a862920c0a21f8fc63698ede7b9b6e03e8b75861d459d924891e5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=6472b34df1431d40f9a402da9f04ae7328461d058bcc1c5d0c1a65784bf83e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVO3ERTU%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKMHuWL5sMqZoCooQUWmiDOzsZICJem1FviL1taMLNjAiEA0%2FDNoIjkadAX6BhGOSKYjzJl9bM6tGAgY7qIutnKu7gqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJsho9DiRHOtP5xvyrcAxJ2X2qI2hv2pstlxN6nCIbvVXQ5XJnuQepsl9BgOr8lDntv1784DPPvjsKGDnpV1u7uK6hV3HFBO5FCPfM%2FBnLG6OJtQEebCMIYA2uuV6fKvaOyaCHI%2FsBd1WTyR2ZhpZx3StvFfpTbQDb9yPOpKBDqukxnWrJhNnhklKN%2FgNw0P5jgUYfIqMGy2ob5Hn2VUi1EIjfJ2g1gt6Ql%2FK3AHF38Fv61a92qW20zmpNpKapVnpMpuJ41bJBQgPMLvG7ZfhPcLacKWHzEBmqx4XHgGtDEwDPH4qRFd19GCGcN%2FYkPv3XWlVDd99LnaQwHKNLYNwgNShTPmlZWWZgUeYqt4%2FoAVuKZbHoBOZVfVzIiyYFoNtGBX3WB4EM66Y%2BpWgHENULAqF5Yui0ZuQ5MohM8LfKOwA3b6tCZnmKsyL7I1FnHFlwfLJGC1BR7LlR3E6Q55WNtOq6KckorQ8VYv0pMdLyp10f%2Bn3IGxmwo0Ho7u7wPjr2Tg4FOdAZxcgNdpmfmal%2FAh0Xk3%2Fthzs1ncE2nyOKbnaDWTpdYFsqX1ghafgmn7RlbE%2B8akjdZInDNMvBuc3CZAwACuCxJ2niWXYzMmmFMv0G27ZzIZXkm20jAElw9J%2B2Te10M1qCvKLQVMNOsjcoGOqUBbzBb8n%2ByxqpbMQhDjxYfCBjs1uxGdzQ%2F0K9WamFEGlCvUT9WGHVsdhccmAxcNAnWzTYbPstWxylsU3SYdvOVGqxoMdLIL0jHhO4XgzXrAvfDlwE1olYmS1kar2NJshhBfUUub76zuz0b3JLIO9r4VOFtsq7lm07BKNqIrA%2FYYBmN6%2F9BnUsvtKQbyIqGLtCubg1RgJvDkb0opBCYnCMpJmA8ykZ5&X-Amz-Signature=0d0d117c3e43279753416c112b46fa625144bd1b677cd3dec3f25add672f70d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


