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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=cd5fa010ab9748cb8e73e3bd474db4252a39961bb9348db90b5688515c387be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=8739dee436c96c3c2e82054fc261c82310c24e71e3fb14489e08f8121d5c0fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=678a3b24ac07c7101d1708ed79bbb51b9d36cafce686133989801cb95f8e682b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=b47bd2358af773ce9972a537d13d0a1ccafdc7c35904304dad667da4773a74c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=b366a1941007a74bbb1f1ebba6675670ddd2633707ff9dbba644dede3f5ec568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=de47a77454f7c6ce6b1bbadef101ff648179d0fe0e363c86e94a1c6267e773e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=f80dee822d5b01c1b6cb9e8246dfaa0badcbce7f3862a34c902da46da5171008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=b35487cc55fd6dd568d196ec5cbdf6bad6d1c41814c88c40b00e00b406bc6258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=11c7f8aec0604afff23f45ac4ee40f8ef3736769ce561f9ee6f9b05f005244aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=2258e0bd23f9bceffd7aa6d1ae37d06e65ea453f63a1b195978bd0c9f86acf28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE55H3C3%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpL%2BtnTHK2UtmXgXNYLd34%2B8dIOAwbcYmvBsda%2FPsqZAIhAM6KjT4HUMqjyajmucYOih6g85slAbmGPG46ujDR%2F%2BykKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylhenO%2Br6ZiLhFxGoq3ANmU6X1YH8%2B1gyI9OJYphf4Qh5izdmjKbCmlzxpf8cVX1lmr5XajpPCIyy7gljWrkaTDwFqA2vhMTB3FXbooBNFWX2zS1beLnMGbL6r0xcEyezB%2FDEy4RDpIDrB16zAUzNW5BvBk8l1wuPtEv8FbhUKyZ5v%2FRyDp6ZF2pk4bboQT5DhShrt35G0w5cMZgmQRCUC1Q%2F8Nml6JtLD32eXUqP15A669XvOkfOhn4kv%2F%2BDNE%2Bjr5PcPYWNgCZdvUXWN2dymaDrkDCus%2By7xTLiirXI0vTwNhE8cgR%2FhsRbvAgvPsGlcWYhe8t6kX13GtT0s4MF%2FvP%2B0Q74FQxvu3UqBhibkNh%2BDlGY3q%2FGG9ipoUcdJ4Of0AlVRFvBrgO6VX83XwLWJzrO15GNtbgIxJL%2FRXV4%2FQVocVNJAkRSuP2dFsQvkSZFoSDKPr%2BAG3RldqUUr%2FviGhMCFcoEQKjIqEEiRknBUviZlVTo7TfqTGUrBfNlH%2FDhNIkFcbANaE8%2BAbuoFEQ%2BKFjXhJ8crLjV4MNXqlAUMLol7W26g7W6yU7kMO%2FXrmTqz5ebddvoOxtyl46kPISBFMOHcHBUYv5lNWHxbuQTPYW6x6SqcNF0CEB0yDzUmMV9IzVu5XjhXtdYXgzCx4OnIBjqkAYSz3Ud5TmudQZk6AVIwu%2BQrGJFx0ZNrdly3m%2F6e7%2BFOGnIl8GTelyD%2B0MWcnJEC7sbcv2RjJdsz4gxhAbr6s31Ul1BawFGHfrP%2FYDukzUw1N9SkGZXOatvezSEJ3WPLPhPm4vEp9CCtkjJXHOi9N2AfvbXsqbASKlNHJMw%2FY2yKeEAS%2FskyowKR6t60%2FACTMwiNKiqzmts37zSIKdQE2%2B4%2FiKUf&X-Amz-Signature=f35a9e53875646e4036540dd5a51510318a8e85077a1c20d6d763355137915ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMILLCPY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDP4T3i%2BhWQ%2BWKV3HwP7KKrZb2I8qokzf94%2Bl9OCyZtzAiEA7bay%2BY0Hr8gsZrS1grczDCgIflwWh1NFB8Nri7AbBlsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFKauzGHv7lHKxMJEyrcAzFCh3Wn5L1ZnHr2NvLrkjME5OBZFZ9Ze7FPDrYLXtgssFab1SJYE9XK7q%2FrjP96qY7wMoIfHjBVW7szt5KxZS%2FrRS7E%2BcR5U649Dy8NNY2A3Z8oLNPqM71hBBThlIhvZo47DlsS0KXK8H40brvAAQSEljySk%2FL0IImWnrJPy4H8aS8pwr%2BlejmbUJIpuXGpFiPMJP82FXSy2RpQEjiSgGn6K3KEW70wlNK51ol%2BARW5WrE1210dKSf%2F8P6kwE5vzFo2hSLNSldRmH5n%2FlUXIE1Xb7xqxcEaafTyW%2BvoHIHMXPsDK9Kfz3jLUF45%2B3g6amVh%2FjhUQ7tJw1TK%2Bts0qdimjEHQBZFAyn5bmdoXsWj%2FJEIH%2F9lSCLLvvXbo4hkdz7w%2BaXvHGi8lEhC6g1SBtEID4blEOIPhgDlmsmvAFMgN3n9upe68lCCiVuBK21vTfKS409FbblCe8M%2FQ7QKZIfpM3P3k%2FnC6RCPdgMsBUQDRfGWhBQxTpjYD5jpeWESap4dTOKgWZQRAMnE6Lh4L9bMAt1nUhEiJjBP9Te44t5JZayvVKTahFhvrBdOqPTHdnTacRxGewjTTvsd72IZyReB9qGXLQJ4brypOA3R7jMpic0Z2Z9aEvgCPY143MMPg6cgGOqUBfSPV9hA3OIoG1fQXmR90b049d3tH1oBRMkDEbC73wmyN4svPKg%2F9x4CPY2NW2aHlmQSmSdGtwNbIvhCiBzOixYyVBjW3kxzkwbkKjYRrBC5ys8xTMVCuKm5DyVWVrc%2F4mJgEnqTuzo6NFR3Y17aq61UpOIYFZoTVk0QJVmEgKr%2F8hkHe02UlZV1IyQdOcOuvSD7AyoZOdQKidvDfQzqXE4a%2B81l5&X-Amz-Signature=07284852fe12999ff333cfd912a2de58e3a15f8ecab73d0b295a94bba716b2e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643SMVPYX%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF1mQlqp7lOe8G2BzNPnkRkICuRflo5PzvSmLEXjjv1LAiBR5GUQERqmt%2BbVdr4KFd9F5pHT1fbtzOFckbixh77rhyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2BUkEGT2a7AYXnfMKtwDHqS5vUMtY3h3JQ4kt6lrMF8nuO%2FFIlvMFkERWp0BGu5a%2FOYIQEM0PDSnEMh3khlSy5vZG9ZkryziZje8p4moilr9R0XaAptzm4lOYdSfknXNJ9DqtTbyi%2FGJdFby0vqJ5WTRExy0GQ4WAM6DLhtQeQ8bYIcMOujuO8Nwwq45quu5sgRjaJqyUwRrPehtl5CyciFMHDRDM%2Bfp7xXyoI1Z1v6IQrQlhQT6i1MLXDNnkM0cxUMA0GYpAAZvhnKcfJokcSi6PVAmTAB0eichH7YXIVAAY0ljaRoKAxMr%2BTtU1KDQnvDvQGlMuvpbq40dTJfc66ThhNgxO8EJe8ujWRvYmT0QVjrG2udyVoRaJwoe2LkTnGgTVPYp25IBSqeEFyukaiyLjeeUoCRMM%2FVntwin8PdKgcDD8hpyiWDZAB2LmecD49jfKpCoQ%2BtWbO8YVJXbu6xxEbk5vutk41By6fIBD9zsuV9tiDg6KWGFHBkRnt15ALXHwqInYV9sZyeWCXnbd1assSUunmMm8wi0nVcRqSun6YoEfCxATtk9WQ7GIjhc1mgIRRlBDuDeKvqvCByFRHnJGGAYGCS%2BpApROXYtEkBVli8N6jy65sdC1ClRhnGRquRk4rC5G6yafegwzN%2FpyAY6pgGkYtkWt5kpBlXJzTYiO6AfOC401YzTyvak97WaspnrBFgiRUtHj2l2U1H5pK5C8pZ2YO3Iv5JC2T9E3c81F0VudQyH9cEZNNFKC8zNO4DLs%2FUeoASA4ngaCPiltxvSozdPK3X0uuxTBT0CZyoLofA7%2FQQc5IbOs5BMwiKiCo%2BAybpW0iXANjlNEFjpoVL4Y1kknQsEexw4RuR%2F3ySsbW2D6%2BErohCf&X-Amz-Signature=71228339b00531d171b30edf75a7933d92cd6f82f44873e1a7900160c5f115df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=4c421672bad5c364d1c6718b5e262b68523b0adf23fda42f13651d358278e569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632GVJO6H%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsx6K0zuZzr7QsfQmQ9LruNyv7Db7UB6q7LLJdG3su2AiBX182nCKlrdiHmkiN9lVZFDF0hbmCdp4uzG7z8FHTOpSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBENXdXvXrEPlniJJKtwDBY%2FobSgUBGQijwVcxlQ5rXapAjcCCGRgt5VaFuomdixSUXfVqu6HFPKZ%2FYgmywwGoZh6uP%2BvqxaDk5SZr%2BXX7d7pBrHtWPukZjXLAubrSweLpQPZpYhsa389EMwBH5aP5LWt1Tq%2FGatX1bZqzGqCu%2Fkah4med8GWM7dx%2B4N6jJ0woUBsV1A9IB%2BPOwInmk%2FwErWTN3uJafiBFjMrWbiC1JkTss%2B%2FFDybVLAffmnRWcFxdAuqSdG66ZSP2nyL78iy62lSFsYKF0e7p6EMS5sdHJE4A6ZTsN5pVYlWMUhQGOs194mGq3q0EwcOETWxVGSPknF67BPy03uaxBSGXCPF%2B2fqFqPNxMTeqGjnUjG%2B5yExIW45DZcEnCP7%2Ftgljc2KOfI0o1IsgqwmVZneRezclIlMFYZKnDBvB9bK8A1JkjxDnugCJon%2Bh%2BpqLTPYIoCKFjK1lM5m5Njqeui62CEZK8%2FvM%2F719YjzfOorJrsWq5OKL%2BJQCK6GOJlOjOW4Es2ePvMfhPxmcpaaxbsAWOpHTFzQvlsi13Q5wtpIDNBaKGf6%2BFfLEZ7vXa4oP0MVkW%2FyJBvj0YyQAHDdY0QF4LjcDcChaqlyP1%2BYZSZxVc55KRC8Hk%2B1H3Dta28ckIAwoODpyAY6pgHwo0T9mKaNS4IvUengOkW26wxu2eGfvTSgH%2BjKzhekG6ZJoQ7bCXPqm3c16jzM26G%2BR7FIdlb5iItrGGVU%2FJmbHsYC4GL7XfNB1aG2y1GgpcZx5GMpivOm%2BGmekoj6jvVv1vPaEd2iOE4sH%2BrIEOUvdWkHKA0w4hVEWK1s2WXIYEm%2FoGwK4qbl%2Bn53c3bIsLQ8WR%2FJxBYQoGnPRa%2BrlU31eSWGnTw8&X-Amz-Signature=e7752d4e4f412d4b5d96c006fe6d7bda8aece2abf363708c9fcb72eb91c080b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=397d3dd4a60ec92369d93f4bfc94143af13c8c0c298f0d1a7c63a5b98ee7d4ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGNUQEPX%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMEBMfjV9Ty8wr7hAOB%2B1jVkf6Rg%2Bj40mqSInHS0EA6QIgMmd9%2BN9z3Rpv03EeFdH2O1i1h0CxVe%2B0jrCBchjrvTQqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgV%2BlHByKUNOu4CBircA%2BXWIiKy%2BKajklaT4KLFoSmMEIXWQ29dqdtSu4iSVtT7tYRUFskd8e17CzftYDfci8YuVxHtBaLgQlghmcxfnQkRD429dUEtdNbyi74SQUrNXsqlIejgCHgk%2FkUi2Ftm9YfxqX77iIBtkATMzYNDFBZjSPzdk82Ck6siuReRAGvorXXaAobKXhiOBbXf9rkPuuRpt8dipReJyLS9I50xjKwMRn2XaHZrBZX7J4liuThTv96tjdaotwiNnazMm0C7d7Vq3b8kJFvkaCm%2BWdmUJHL9JwkLvBX%2FfFN8YgAefS6%2Bg0PLk9eWBCf%2F2JOQiufP60%2F15s4W94VYZ4MlnKF%2BaKJM1RAsPfE5ZQ%2F316z%2FH%2BbKQdMVB7rqEGAnWvjO6YkxkpfHNIWS%2BdwssaDGBJfwj64CkiR13W7FFimcNkibVOQuY0htpU7Hu9K%2F%2FY%2FADJDMWn75sIKOwSAfdiAoQGnA5hGSh0Md%2B96asyCE9Jt0erm159ZQ%2FLMcNsh1GElbBebqQrZG0XeRfxb69P5Th%2Fc6jpR3DJUcqqhnA%2BwDOoKPlyTUPndhbXK8fIuhkneVaRsliG6deb74AqizLsG%2F5iCb9se8z7MFYLQvrK%2BNNv2o%2FQCXy6w%2FijBtoSr1XYUkMOPg6cgGOqUBdOMbu65CAlXivwwdazjZb15QQtZZ4ZUNUComkQvLdN7Vd2gNN900MyaT%2FCMEFQ8%2BTAPq0R%2FRXuEcjVOoSJ58JWJ9%2FbDpaojAYzZtBn2fCtemn%2FkxCaIdoNs%2FtELA7aMqw9bhasSriQ6%2FLRWUSuohphMZICVpqrvEmEgRvy25ayvJlyg8MLsMatxGqALYE3U2ev97pJQzJQL2yNLO1WK67JTM6tYP&X-Amz-Signature=0ca4710d10111dcd91491103fcc18ff16407efd4f25324e6b69afd70c4ea963d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=19e5f98bcd9cfc0d28e8e57c83ac5405f1ed2a1e5ff439483367f6e8bca52307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBVY6CIU%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxZQ7IyNr0fmhHtrupFoajr29b3O06aO%2Fc89up7tMTkAiEAqh5SJNF8bJx6iikw7dwWlQVfdhhxXlVTEoFWK0dBB%2BEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqc6X5HtBAj2s%2FjoCrcA6duRZ38qHRmksLUoaIUL4H0K1y1e%2BbWfr9FeMMBDZ0AXYGxlcfHfNIHK7gqoIKdGwCAobeGQo%2BxETNcTvmu%2Ffa8FgCa8hLi1%2BVsbHTQaGPS8odPVXdqS5lD9gxaq1tHVlw%2FtBQZmttZD1vbegUH4MPK7Mu%2BeBjH79GsixRsq781p6PJf8kC7MTQVJPCZpw5K6mRVAbDjSuc%2Fj8p3F6Kfs8x11V5U6lYrEgT2ZRlp6WtGNv55m6r3QNaX11Dm3Vuk9S6YsQZ%2Bzb2RskbxaCp0LPrI%2FDmQlMyiBRIv%2Bs1%2FB44ZIjaTbyOEaeAh7b0ORByBzLvZU6oIlpSXamAspfwrkfReTaN1x4wW%2FcJH3tj0Gpky1ivnRHt7%2FesH47bgvrCqXBwNEGLo6wvhWthers75G6FE0Klhx%2BP7DsviidkXDoguK3sbXxxnIKV%2FKXsMx4Zpbd1mt9Q91f0AGsIjj9nzPq5spFXFIxyB9mBOy4zBcD13WsQY1MSoz3TZtslq%2B8sul82BRsoX4EE%2BuNy3DirAvxRjNMvQEUoA4lC3puc%2FNbhGLw4q3CfjJBoOaQ83NxL0kLstwS0D2ApV1we0G4qm8Hxz7dSkA1hTReeIqo%2FKqjUDhz5EUfWAtWDHXrsMKDg6cgGOqUBjApcyzpn1Suk%2F2FXOEHsJ03kRg4qIiuaE%2FWXlU%2B8wRY75y7fkDwGdCQ7dL2PERdgAVVWbyViTGdSbFCNnf%2F3pu1Efd22UW9X9ywiiQIxpXRXKYSeYXwQ7F2%2BuZuxxDZrCj4e91IzfQ4FlW%2FTc6HpcACGS9JoBTMfDs23rmphZsvViuKZgee6cpPziBTfjg0n%2FCAw2eTieKd7R9FO8D6y10m5jOeC&X-Amz-Signature=3cd1e4513ab730fbb60ff85771c25023d74e00b0dee294b67a8fe8921003e392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=90be4872f090e5c8367bdd4c1fc3f310786c9229efc99629156bf030489e09a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EKYVGK%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC5Ufvo4NdkmO9G3bqZRlQ%2FuZSYDq9BMzQKqquxexOxAiAMLtLtiXLr7otqMVPJDz%2BBsO5c0Ofs2L%2BcbGN5uCl9fiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm%2B1wDeEyfjpXEHd8KtwDh23aQ5L6UOpmhMxTQ%2FPifS6H462ATpp1d6WxtLGfrB%2BrfVbHRVMcqV7KigVMtzheRdF9psOrXpyM8PinfW10Bkq2468Mokr1KWoaQ%2FDJyAPjQKTTpcF2rFx%2BxEfU0DH5t9ebsDboffHZVWxdDBcViU7tECujMWlor3mp7PbRuPd46POd%2BR1W0zYcJTM4OVyGp89jDuV9mMwWDGk%2Be0jhMAbXOQ8xtBvs1FR4A8W3nU6I1AlBvo2wlevdMKh5oTwZJL6%2BlBd%2B8nsT%2BJONwtAtDzS4AWehMA47NwpO64atVtXUhXCL%2B1sp0t26b5XHbslzAc4NXorNmx5BNqa7Ke%2BmjPKkBBLrFygzrU12Vts1RKqjXp%2BoHL6hSVQVU9i6YcPWzrPCG4iwJLvO7ZOtyHnzihPs2ZTs7md000Ltwu8dqqkzQHi1Bkz%2F3ceuIUVTSUmbK7pGNzR8eljP%2BWVFs7%2BZWQFuvJL9htghEdqWU6thL0FzuQD1mf7P1OEjbX46j%2BT4FQAWUBmt5i%2Fusj5xJOfGwt3euL%2FAGkT7RhAXBcXvoWGLCpR%2FrAz2o6DqYyL9WVBVJpmvBzwJcuqQQ0JETjeVStLsXyZrYMnHvl6ezpu%2Fmt9vcreVRsSDJSh9xngw3ODpyAY6pgFKIomjtt1ptp8hCOZI1td%2FfdSPJFsP83v4oYGQe1UG7nBEELAupGVAMWn6bQ4gAcMNt5lD7PxCb6b9ev5Bxg8%2FgHyo7HECfpHn9a6%2FBjRMWdh7Lnu3d4XHZ%2BRAn5qAQM%2BhBVNggVRMFidO%2B%2B3lasqMoBOAOQCIy37IMjg%2Fi8XTqmSg0%2BB6sGFoLkKASPQ%2F%2FEOb2DJVv76qjIc8cSeDyNYxMmFxOVBP&X-Amz-Signature=450f099d846ae8d75f4c2bb45af62b9a2fed2fa54b629af8a45e26e04f768a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=da79e739371586fe1580c41b0ec3e747374aa813e3a88432b483c88f8c24dc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHPC73D%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA35ysLrkYHROkFsKRN2ZZh5wfD5weFe%2BHDltGUPk%2FWyAiEA1H15znq%2BKK7gtsBoa%2FYDXDRWTJTuBZx8aRbikLNXBZMqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHNIXHbIrcxjE3fNSrcA6ZxbXC%2BRd49hThHcoEGkmdbEGfklU2yGmlcUWqQftrPi8Emzeb7k4qGly%2Fa%2Fa34n0T1gdft2RYDmF%2Bbz%2BwiHBEV%2FDFn88aYFIvOw4XfFKwSCNNK0qWF7CVJaIhT1BigqE4KPI9tR0Y4pP%2BnQYalW99px294oVVzEBZpP19SGlLG%2Bx0y8uXvs%2FtEe276sBK%2BFqj4SumxOxMcNhL64cDTvZgNxdLYcZ3nhMgV9q5szP4g7iz3hbGHbfXNpSC7vHn7gPZopGcJUo0x6bTS0KOKzfE7PAiE3PInkWGrybjPTZwhArhVVZVw%2FgP3LcRK8fLwhMVbMNpVKoavWCjGm86whOw1ATXbvfeF%2F0G%2BW3cUWam5%2BswPgnkpUFsUZE0FHebM3qmV%2FzQEJyuuQxfjwo06FqXTi20zGMbDQR5vZVqZH3ZN47yFj5lQ15m61z4h980GUN3od0bPynrNxKoSzSDCgH4PK88VZ%2FWZm1Yopbmf7xm3UrorK7j%2B3b4t2jBXz4DIQvDS4U1tJrBY%2FWd9emYTA15sYUEbAKg37WUgHfTSw4bklEMLCZ%2BpCLdHBvxNZ%2BO31E869GHj1%2BaulXNSiSTm3D72yqZS1nglZE9HDXBsENzUO4FD1nI8t9o9NCaaMNvg6cgGOqUBwkec5DrAuJwZ54ptw9vpROUgKF5FNJ8MzJ3QRx%2B8Mj1MlcEBn08B0I6rdLs2pzmno4YjPRPZEnG9kmqHycWF2fVh%2FTOS8yC5Au%2Bxif6nc5NoI0hmEsdtssSL7nd57DQ%2FZnHnCLYZdoz72TROvPTJwYEv0L3RA7%2BcDxyuLSZx3ljq7W2IKQ%2FDTH5HIzUkJoHDChWYW97deULR52jD8ky9c%2BLfw63s&X-Amz-Signature=a398d884d4d0b0d332c3d42f94ce5358009b123add43505d10fd6c510948936b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQ5RRG2%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDSZqxghYsRRByCU8GhICobxSpNMytlTAu%2FkvXpwdyNAiB1AUi35gmncBpvNeBz1mM%2Bm6SDQEdLG87RDXtgE0QaUiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuaq%2BRZ7%2FDG8OtTFlKtwD8DpB%2Fj2UJvWxtH7BfDlNU%2FU64JB8dQIFn5ewz1yuvJspoORUE%2BNC6g%2FNSK6X7%2Be1wen%2FchWO65MnOPQFG0QsYzjMQH8JRqeSaHrkfcxKGZ38nMj9uVAwcNGGgbV9gWywC4GqypNMwrMlCGzo76obMsKG3ziCTrjH1fSJTgXfvW5lFwYFoCew5gT1rzk5KH6Ey2cOdqLDT9vIcvsGIIbhtyQ6pNBI7EKO79x3N%2Fyz7GvwrwdoR%2BVMIybRHNl7M2hjbzgynv9%2Fj7Mlt66u9LSf7bCNKzZIF81h9SytJalrEGxJ84bZtPZdNpK3J%2Bg3b5wz1zQ6e6Do5v8nNcw8cqRN06AKqi0Ei8gD5NeT0su%2FxT47BnSbB8yp3lOCK19cd04e%2FZCvB4y73tWcIDdTXi0v9k%2BivfffgXKWwcQaIaXjcIsugq%2FqPZ1ynR7wl0MuqRzu2Cb%2FHGKeCFP3T3MTl85YXka2AD7nRfHBNRE5W%2FtzJ%2BBCk%2FDqzXsTjhvPPFJLXggsZL%2BhsjYW43Z8TdyiWL6pO%2BE4%2BWCMepuK4hVZvY6%2FzzDwDXUdfvpXk31u5jPCeRdxrLmTuFN9LmC7ivfpu3n9f7hC9tRVau6OeE6WmigF59xKP45lOf%2BsjkdcMCswoODpyAY6pgEK3swhAf3OIkdyMshq8RnSkvWL3c%2BFUaP4Sb1%2BJsZDjrLVJ6UtgOckXGg%2F4NWS%2Fmq3aHQTF7iz8hBIC9wpACuiiV7MwBILjrYt7fCaI04US2j9y%2BKbo4BUv%2FUqfybVp95Dzq8y2YfPl98i9DPG%2B1DUWRGSHff3fiYXfafosBYqgVsZQLzTWUuCAChYRa6BoEXSpDa%2FQ8sOA0nIWAXcbaqgNU8d1Jfb&X-Amz-Signature=6bbf209787babca3382e9b4e8819cd0019a495b3c879bb6c7228a4f5bdc8da78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM4GV4TX%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9Ag6zAtn3fVkwyAmj8oGD7ANHGOJSahloCI5gzAqbNAIgE7j8WKdUcOkawH3aMVzHQ8wTkIfLWROOtj%2FqomWtSg4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqp8UbGJsC6RISZnCrcAxb2mwJdfeKI3mqV2HFUsoi5W7HqVnnTIZR16BpkXomUbvFrx%2FlEt%2FB6U1cdKvAOp5%2BG%2B4eE3ivPzN86uTi%2BUqdRhxVUDRPN%2FTzAt36HEs2qT7BiABAWbZl07A1pktoL48WtfGTobaKrg1Oc7hSx%2FymSjxt%2FyHpl957se0R5Rw6vqlMfQ17JTY%2B8XLDKtCMvyhEYBkICtlSSqQJslgWySarjgb2bEq9jnPl%2B%2FaTc9Sn7%2BB8Zt0C7FCGOJyTmqefjHoEZmvXVjLGlag3J%2B%2FEzycJk3oBuPQUpFfAyaIVKFCTg3CGxfKr%2FSUxjDfwslizy3Y7BQJIPIGmaNDnV7BBi8DuerCuetrUTEsrUw%2BH0oPAGDwi22DKgovGvN%2B0OUJmJORSKf964C1BlX2Q7%2FaYzOTVCRLtosLmnKxlcs13jGfS2kTHqcncardvvA3ScGJpTBCWeFIeqjKUx1zPSRwPE3KOUlV4q5qpHU8EqsxQrxCEyIR5CGhZgKFzigykFUYgKPe6F5QXNBbCgodZkTESUEOfNflOZ%2BRmG0Hj%2BDk9d%2Fx5g0U3a0AV1oBMA3%2F3gjXkDrRq2KpUpeRr5q9CIZV%2BCERBcJc3vkSuVyaC6LpbZatewkW8sVnVh6%2FE5z9FeMKHg6cgGOqUBvB0zMKsRe2jZRWmAA39aOZWbreSwrJqkiA%2BfRxlv%2BDehzipqww3B9GKjTWRV%2BPdtVbIfK6lNZWHr8dMt0dur4TQumCnacssN%2Bo9%2BTQ4fpowww3FCGdiu%2F2JlF6yKC%2BcehsM3b7BUTR%2Bd75DqkFT%2B8dJdqqHIxzo6C1bNLYZ852CQJ0cdp%2FJYab8MDOb9p4oZnUN3KdGK9T3CdDtGWwb%2BvcXemour&X-Amz-Signature=b1912062a835397d6bef096ea3d021339298da0eb3db395555fdef3066d9b74c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=f2abf321564d68e2aadb5965868dce6c6ce3c77b48f16f0adf19b64c42afe97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DIFUEC%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGkKPQzSnvmkDl%2BuIgPBJULwMTobnnOu2qOm6ZoGs%2BxRAiEAxUFf907GwgcZn56x3dl%2B40oEg%2FyYM3q5RYalh9GX62YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHWXP%2BCivVDa9v5QoyrcAy9yxPDuOP1yZx3tcqSkpoSKEk4YnzyYakQoddT4loOFDEFgQHwipoYx4AX4zxzHDSfb%2Bz3diIvlEphcHPyGVQ8h%2FKvGid0PSiTr4ZIN8sg9OqyDW6v7skkHuOBuK32%2Fru%2FZp9ge%2FSQLhLB4EJO0tkv3i%2Bl4rheNzj2PQ6ZAeqC5xnyX2NO%2FNniYvvEDh1Rli0DN727eHAjtONrq94kaKz7ciDHu5MSmRM51ewMKLxS7dpP2zCZfACLEb0e3iWH78GfJKT0ZpXGoxsb%2FEeW8%2F7OgodId2PPjLMKqwNHzsXdJDP%2BAO2EZDiYvjalJQXQ5v4Rh8Oobk2ixPbXLdC%2BgpJnuHOnyhFyuVIhnIVmnATcsU5YHytC10aJxDulDfVoggQNL4JPV7CEYQjLncluEi6K26Q%2F0VJZZ3Qny9VMBaWmsP8WpEb34LROBluA5mH32B0usfuHYMqofhK%2B%2FU%2FUkMxNSXEOzQ5vqx2wwvMuM1ju9B5hSUkWAR3u5uTqbVF6XhlyUJLvOyT6EHq2LFtQmGoQix5jWCvkDHsDug32lb%2BerDNhtXcEk%2FscYREdX1PQRxPuRqxTIax0jlMm74JPSXIqG93HaEAPl0X04Zs8p9w%2FGpsQlGaDQoxFMEv9fMKvg6cgGOqUBz9W0JC%2BF4WYW5aA%2FkeJi5cs9THONXI0bJ7iJwQVCrFyye5mWmfJwx%2Fc3qOhv%2BxnPnPelNDbqXz7v2BBZd%2Fdlo%2BXINoY3n5qow3M20%2BulqYrPAunYGZrPEJQ16rjAsnwlfIbpfR7ZhwKMc%2BE5yIeC0n0TtSJJSgwJy2NxVvWX5J%2FI4KKetgezAdcOzQiZh3rXG9bYeQxZYFkZ7PVhqLu8NxALwYo0&X-Amz-Signature=67c37bd811643b2f3d0df37e2c3bf0d2f856a57e83e29d16cf920c72eb3f0e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=4cb3fc51ba8534946e9a30d000356f47254a0972a6832242312c0e78edf21fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=211f6f1b1a1ca13bcb368b30f0e9d8bd80f3434780f5015e4a500c66689e3160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=266a95ed230629f3a9ce9ada386b4353c4d87c7689fce1f669267fea1836d699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=77a4f7f11c414531979fc1449ca41baad99d49c6919662cf684ed50e7f6bf6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY6LBELX%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN8O5gg4xf5aFEBaK7gr6uuAnDwfHmjL%2B9d9%2BXM4scbwIgUixXe0YxPLygPWbe2Spu3K2IkU2vLwAaCUSKz9PePK8qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsmiGENwNd7IuYfFCrcA9gguwPdRE310bxj8SVPlu5XJmRG5VjwF1HA81B2QPq3JwShusxDqCtPhNAaHX7GI2CqQqECx3CI1sTZvXkAz6JzMMHbtWBicyIQV23fQUEJqvlTbGOSiPSEUEHe31uvskMmKRseD6pSTZxQmOdawBCM5dnDxWBO%2FrGgFUES9yWhhp%2BFXBtvt4etop77s%2F6NtFiuId787IXOtXBgReOQ%2FCRF%2Fh5qb9ihZj89j5IAJ6%2FCWLihMlxsKl5FSM%2BNM64CIuftXo38res3XXrt1Qqg%2FhbkR8Ww1c5d8U9TkKRv9ddY4%2BkA2UiAtTgzx3Zqa9CB7Y64V2AKkoj%2FyTT4l4hbl%2BEUHVRpM%2F0cUpHydVbJVHqlZWAvz0T3N397eNHiVTwTGhVZ5ituF4CPZ9ZiGX5Kw1s0CvB%2FLA3RBVdzD3fZAp4t%2FfIWCaFX3UUQ8NtmK0tqFgkUhkaTNr4I73v9J3J7aaSJzAX0gl8bsZNzHWQ8RzMi8twghyMSHnvl5uuy%2B9WAsfMPhuLdjO%2Fc01JGa059NiPQ8vx%2FDkXPKCBJYqKw6iSOxBjCHo3oxtE7xuT3gTm%2BJ%2B4lYJKD0YPq4OWEc4DZQqEN5PkUBQFk2T1RlsiuuSJJOQ2ANdAVAg4Ef5khMNjg6cgGOqUBIaZdWCFeJV2ByS1eH%2Bt%2FnBjq7mrDx%2B%2FN%2FNpKjkmz8uKae9hZmLo77%2FjnQV5r3C8DCTUNS9Oq4wULsOOWylu611TgAu8QXNnmrMNfaUwNTifNLBVOMmRg5Xks%2Bi1U9oScT%2FBHUw%2Bh%2B5pIXm3pl7eG%2Bf%2FGvsn9xdZcD5D%2BCykqP7i331RVFZ1xKE1DAqCx7udegH9nAfX1yivNPhnDEikDCR7n3i%2Bp&X-Amz-Signature=18e5ade8f15ab6729504359a27c672d826e8313b393bf3c5f601c2e6168a6f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=01c64b14a3877ec043866262388ae0516b1f07c91c2454a1b33f521576cd237e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=42bd981953a88a772ec9792471f159274903959a3aae01e4c5cf7d9ecc1295a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=266a95ed230629f3a9ce9ada386b4353c4d87c7689fce1f669267fea1836d699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=88534fc031b6e031751740830112b4353d29d663a52bdc5f206d93e94385f24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=5023e9468af524e3ca8e4a96f8bf8c2cb22cb376ad1d8d2511e2dbb763285df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBS72FCD%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYzz7Q8L%2BjAl%2BqR1wEikjZ5VFrM1KVa%2BLqXTFyyMnxQIgb1rCRqj5Q8ruFuX%2BqLhXDf6oEDaARhvNRwQwzVWUzRoqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYPCP9fB9hc9vxs3CrcA%2F8hdB0%2BlTxHrC4bpVV3UWEKu0yeSmiAf4GTnCSdP%2FEHKQeN%2F%2Bh1fhaHn7gNJryPjmT1sMJZl86Q3Sxf%2BPZYATv3ft3hZamyJfJGNn%2BgTOqP3pmrHHTdNNq12BQMhwm%2B1N48Mm5Lzcs3tBbcV07qdg3oFP6Gu8zl5vSOHIREDbIhTu9DILkXxf164qn%2B99MhpbKi6uP45pdmP3CHcKTEpIb%2BOGU9hD8ubKaEWRd25EAF2bggXEHEgoIUhspq19sJJ7m%2BjwWbXlFSG3TNGUiqqE201rw%2FBbx4yDheSR2oDCKoAmcCyryUVskA4SqV1H4k1gDW6K3xt4x9XnzzcY4u%2FepptudxF8v1L6Hva%2FNvKL30QkV768rMv0P%2B8grguz%2FBIDj6Kmv98z7ivjR%2Flq5%2BbmfEpwjkXqONTBymPzKWEZt3CCBZE8BpJX%2FQfSd0SNSPnMt%2FsdAD0GxoRe4B5otxn2WNDpOI%2BHMdad392N%2FCCYhYG7BRPwEsMekfpAS8URpMTFENZAY9IUOzEY2ntkAPsPYhdWbz08bF80v1SfsBkDIP%2FZdVg9e%2FfZqYGExerwEgV4cnl5z3FiVSAYZanzKepXvsaID3tv%2FURYZBAmhfYWVGFE%2F2hqcJGI0zVhJ2MP%2Fg6cgGOqUBGjYsL%2BI94op0XYIkmmXydYc%2FbxNmcpj7RmYgVgWxqX%2BtP812XVS2W6bSdWxAtBxHio7moDfK2SlQD9eAFggz%2BNJroBEV1hhj4rYqBkHHGaZA1IDJPxmSYrScTRxBbkcYKLKUU1oQk4C7nIs7vtMXB4PjVcFHs%2BoKtN6dF2FxsBHEvpq4P9TEepji7McQdNe3iIcmqBqXTqreaXyWWG54RYpoqz1Q&X-Amz-Signature=282fc36ab4a9fe681d0ab182a992b48821defe60d02145823cc89d9b61ec65ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


