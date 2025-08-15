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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=e09e3196b9a19d396eb21255c828bb34935bec037cbd5f2891ca60a269fba910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=f2ecbade548725ede5cfe1f0991be67f5ac0d242baf45b6c387fe49554607235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=7ed98cf8c1f1955e79ada3c06f68ed21229024586d86dca6118497dbdc2f37cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=0d1ed95311a3c8083ed77ce31cd1c8088a56224b981bd7e54af3970ce58281f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=df947146d744e879a61313aa8280717a92fc1c76183377f01fe945ea2c7c5522&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=753c14fbb4910f6421f1217f155fc3a7c7338a665ccc4d4ee5f2deff937b63d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=53c0dfe5b93639dce3ea975c072ab4ab73cdf1e340aa67de59b7fb96df2eaf18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=a7a2958b59be7a1f611a161750a972bfa709018f27074d6a54a7502625f931a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=402345c1e6787c935bb4fb3fcae0bec1b468f85a562a0e8373e68c8dd9ab3a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=65cb01e7f9875126ed54331591050b4198aa4ff43f397e108272439923d1664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP56YWXO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFJh5jgPYWp4EToH3rGECWEPdFxC8EzX%2FyFDGof7f4aAAiEA5pHbQkTiQ8XUv85hJ%2FF3V2fMIyLZqU3G0ZgA18Ny%2FNsq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAqy2o%2BZfxXbD8YOBCrcA7qIAL1YjmoTwdQi6tbO39ZhUTkSr1Y1%2BaniQRh6nMlErNwYOfV0gLEkGUvo34LBJR6tLUA%2BiLBr%2F59F2NBfVzZG4%2Fb8n%2FozvfIuDagkK29SBNZHDbbfDsXVvoUxxT6Mkl7jD8J1nC88OjUNpEPvoReq5KyXk2PK5lwNvqKCYYWoNFP1ThzGpmzRfgSqemzqtFb9pITsTYIjqBr6bZ2hqiC8x%2FrPU0Kjmj9K%2FUQ7gRqqmu16LtSrbb%2BK3YLflbJYWekPou3oweKLn9jEauX16gFWoTRchsbTyC4d9CGoVQ%2BTmJ%2FQRe%2FRfOWKW1%2BspKtO8IgBZuq%2FGOJ1aym4RsJ6iAZmHf7jGzyObY%2Be13gqBrbPFLiGnRsufosc4WbXUPxLsfLzpsZa9NNg5WcQcpAGvMu5NygDMbQqeD4OaikvUWTurPu6IyqM7cP6DLMreeatpH9SVRw1VejkUVh6TERJ3qI%2FLRi%2FYFDRyykCKMmeT352Ssnm9H3XlTq01Zwq6PgkYDJyaO0FjjoFz3hezDShZ9OEOeIxx2x77MtkSLSgc8tuyrbroD2Y12EgAnSl%2Fem1ILvkyq17ESJ%2BYFU%2BiJ7iVPg4js8Q0V6%2BrpgwDdj%2BM5zfiF2c1BV8sHkKMxNqMLjb%2FcQGOqUB9Fon98BjWXrsTDU4%2Bybhkhm8HINLc2YANquo018Bf6WNXIDwAPZjNOkT02WW6wqd%2BEe85e7XP2rRt9BJBniyQMWDVppP%2FcCC6lXsGaNvweJt41tDaboTuSDGQ%2FyagEAyyDvmfgz3dG73sQt2%2Fp2Q23hWld2IO1lcDnDzYkbyq37cxQVq8a7YIHCh5cztomdkMy2wL6eRi%2Btf4pNrnIMpxACEjCR7&X-Amz-Signature=26d1aa8f74df4544861769d15b52223e69c77ea4f42df41015ce711f56aa62a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VSOWDTA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFbbpPSUHetgWCXVqjrpn1pA4eOXRLOByWiBacqL8QQ3AiEA6ym00kp2XRCNy%2FWBAUzVKI2f99hoZmgx9XY%2BWIvw8J8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCQp6XNMlnDwCM4zGCrcA1hqNv2WgKiJ%2FjnPjRwN0241hwIekEvmJEtdb9BB%2FRFBxWZppWmxQJnMPLZSaAG0SdNXhDBMbkzKvlKFsmDoMkQo5uKXpo0Sb9f9%2BNyddT1biOZYKdVTJ%2BUWH%2FrOGLk8gL8nOBhNNbwFPUKS30ESHxH2BHsEV%2BUpNjGmf%2BmGHqc%2FWOfk3buStBf6zHJB%2F%2FCzYnhTzElnVhQFr4HQ9ssVp4uCnkAVIPeDhvIDYBQyVEr5nq2JDBz3bYyfi0PvTu11h91T7E2BOL%2Bu1KZY%2F9wHxRXj2zrWvosGMTR9%2BI6ZwBEqmp82fckgcYkt1S1svEtE0L5MRoFfDI5AaRsY2rSq0eei%2BTATcptkdklKNY1us0RdiKVD4iJta6Q%2FQI8F4GxWkHYK%2BYt93KWe9f4D%2BOSk4J9s5QSglgC5qITUyoBFJ%2Fxu32YnUnxRJWCvf1JFYoMrTJFk6jLJRAz1N13TYLx%2Bc%2F%2B70LpECZ%2Fe1URWdlo0JBzg2erFZZSIzsigYO5b%2FrlwwIDPIFK8cLcUWWyI2najUL200iQEUe7OYuKHySSpIRb28HABEZ88d%2FwQehgGqSSryA5f3ZO43QUwgpVUGsxtDvRlXEKyZXp%2FyIRygQLIs28PYyOmP8Ptwpsc3cogMMHa%2FcQGOqUBFNVeKry5NGiLhLkqkqOEcKMb2g%2F1nU96Lxk3wwPC7%2FpQIrLqwJ5%2Bw%2BOGGeAGkYy0yNZAX1dwaI6iM6lvyeKXt7wtWnge1EPnrm91xhBW5t95Xis3iXySxcjVwdbnaywYy%2BXvixQV%2BjsqG0ma0l3%2B7XK%2F8cH3pPWuevcbeRGO%2FAwFBzG6meapo5LDu%2B%2BdZcCLb9rm60WnPvaa24lNWaAyCghs9xU%2B&X-Amz-Signature=6082e48b9fba5b7a427181e5a298ca7d473e6c18dde266829c75dd921c36a244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QVD5WHQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDodlghvhNmHiHHF4zLFjxIKDNUYvsMML4ayo3xgKWXawIhAPBPhje5Dip2tSNv1u3rclQ96N0GbUuDSDSQmE9fmAYQKv8DCGMQABoMNjM3NDIzMTgzODA1Igy0YvU1p3JYPSLJLdkq3ANPvlRxsf%2BkH1dEcX4XOHAoAmrdbeI3aFRT73U0Gkqrh0ZDYwWVgnUHYYSoPqpcscr2nz54JP%2B%2Fchprl7%2BaJUijXE3lPc9sh0TGC9ZxenoxwwaGurxvUsJBLhTaCi9p9JJWwxwfuGv4A4VK%2BvY22XOUVzM5ysTdsMM4rsQuHSGbP8MLqVVUD7ZIi7aqP%2Bj5XOOFcdyobPnFIE3jAQ74vd5hrr%2FQBULm%2Fv57yyVboVk5VmTuVn7sjvR%2FWKPRptInPu3ytScWFRidcsr%2BLDeLcnWjvrMDUWwlGxPnNhhcln5FKOAMs84adWmCMCUH4md8o0PG8IbQEWQhFepwnnUdhe5FXLMObrpnlZB3vsTbJxWbgeGXBIe4h4BHbnb7z7G11wiBn9HbOL340KhJ%2BuooR7Xqa8qFZartmDTYbLXO7XQo%2FJ1G4XgsxzuYrcodh7KhCzrGNRwGz8WcjCTLtOn1tGcugzRmoqPfL9W43Upn5b%2BgVtQafCHTiPUGi1OLJYhqFdul6xiV%2FI2XAaU06u1czYtdhia1dEPjaRb9X6sOzlww5nAwknly8c5b5H5xm2jOyCUuIDAKuA7o0Mj%2FZF9BURa3lfsr3dLYDXTGULN9B53Mw9zpx%2FpqxojCIIsdMTCB2%2F3EBjqkAeL4WvadoCbMSIbcXfaeNIUz38kjzoPzIvq%2FGEkZ4DXNIXYDsfeMQ6h0oadSO%2BZXgeX8aOw5xptRa8M4YiGQ1kN2VVS1CBaDWHSivFyC9RkMGOzEe33y2F1EtCPzM%2B0QyxDxdpojAX3obn%2Fav7TNWlLkFq0OPsrl%2BaWVXKRaLseSCl1l3y3rFTuqdBCgBbS59n74OfSiSx%2FH6xm4Pq6j7n5X7qM%2B&X-Amz-Signature=f8fc4736befb7f7bd708720814f76c268cdf10ff951e2a0c168aebced336805c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=812514c3ae75c63cf7a5aa121b3202a8a5dd71924684102ff2128df7d1b621d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPRDLXM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDVQfDTXw0HD2Jrb9L1FUNLVW9esDlyUDivpivSYK5f6gIgUjD6I0FhBxoXZ6UzTfui4IDSiTfC4jcGn1O%2BnNdAZccq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDM9%2FDUiIPg6hh2UIGircA1KTWGtnbAl5pn2UWbMA1H%2FLnOZJKPWvhY9hKsWf9QK5dafbbXpUmSd7%2BRP7XMfAO6IwMmJAEE3YHNF3gRU94A8UAj2pzjbRJs9mgh33e%2BjrVJsH0kCje4AYMzgBI%2FU0DIxE4AL1ea%2FiJbP0meEkhxewf5IhEFqZdkW3U5BcGApn%2Bfjw8kY7H9W3KjMoHRT7gyTzjMUsrx2QcZcRZdOW%2BpFXPUQhMKRRgA%2FbUrPFsYru%2FtvDzWbR4demHZZ%2BP4fwAte9KS4NTM14evNs8GnGE05cuLB0LYOopPpMDeSKZYsNDO3ZNssKrjg1YnI08k3MOnnFI46HMdJAVmqN46QGqlObOcjcoEH%2FhHNnvbquPMwj68aBHf5e%2B15e4O3b4oyO9e2M%2BsBkdsGuNkyaqSGtOaPBpGXnHCxm%2BVnwba1ZLysbU8RntUUNcT%2BvGh6R%2F40sDYECTNN6LmxpF8nM004yLK6BtIqoPQaZhzK09a2fCOb2%2F8U8Ol5bW78xq4G4cMz9aI6SXFLspCPFJqU7WLKVC5QrH0Aid%2Bhn%2F49R86sQN20NPs%2F9a4HNzSOM5ItO1nnLqDQiQ901GPD%2BGVubvPW%2B48OeHaq05rrFQ5bvgZsT3A3zqNApbRWhQNRFOxCMML%2Fa%2FcQGOqUBqDJ5jKU1ZDSew6AMQoWnXVuUR2PqisZ%2Bvd1OxetsDeh206wSNKSBOQyhQ7JJRy0t%2FZDfLWuo3pQjLXXE4RmwSQVYD6QwjgNu9nNF%2F%2BXVVVANb39knD%2FgJEF8suXGMlM7x%2BNjXvYw2fhn6hmY6m288beRD%2F2yPnILD1D6y0ZVjwfyzJmW8oL%2B%2BpTcjsQSJUZlS7so4zhKi1uGtT7C0h55wwJ55gmI&X-Amz-Signature=3fc118b63f487edb8dd2237685b6a3e7ed0f5ea0acc439e107c0885e3c68a721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=5ded4bd0112bead5543a579137eb0782f95f624f5be163cfefb0ebecfe26870a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZWIKKS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIE%2BlK4lrjsSmigtf5qa7ZZfOGumbmTy1xVJ5GQb2iXHnAiEAkqNADr%2BW0Q36aIycfkXCw3qCLvZ%2FTLcSsCZ7El3aR64q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDITlTnwLgwkRuKyP6CrcAz7A26NlJdTw5hOV1AirZnJ4EL2MURfkrNsYDKDw0Lock8zrw4xyLyrrvihbmNn6x3jPWXPL3pNny75AacnLIYJGnQKetbCKldQnB1Pn9dqBqWwQCTP3friWliyy0h7GBiapWqT2AQwOs1uJCxHw5O4QAr4dnMKjNoFdCem9Jck%2FJKh5Sizmqzhp3Atcuhrtei47nhU6TOUCnUNuU7a1SmR3kXeuMKYJA7xI0LvAM49XCLKZriST2ABdlZObOnufdZlUGCpXUiwr%2BJwIeoRbjuZf88xt8UO1X47sJQSJ9Jq7QsBMxT2F4oZaqGeiuvk75fp5rP5n4c9Y1Z7bNVQh7ELRo9DeS1FZnHXMoaf7kQz5pdskMu0E1w3t2NbV%2BDEJSRVtUmUYKsZZs8%2F5RZAwwaz8BygrWoJLjf%2FbTP9dM8x8rfxNX%2FGFenwCFlRhn8n7T50%2FJbiG8inSosSfevTbTFSe%2B4frW5WhYg41yCR7pVYHYO8143H6ikE4B5OjZmaPNNW91Vz3rfRUF6F8RkSkas1UbJXmgeZ%2B3Fmy3H11NO8KAMv8Waxwx4NYmRaGPLYrfHn6qHpyAuQTDructgNjBAdt4li4Y6aWMdTyR1HC21S3pjp%2B3xGeYnRtZI7zMPTa%2FcQGOqUBpBnTlCk9lB0Sd5pPOslPq0kTbjXiUHJwRHJFpad%2BXn6VWXrVbAFKYuZVa75GjFm7cJOILlJQLMiSBeGW%2FX7fYiRd%2FLDLjRt4eoTAkDUeKh9peS76VgRysvUJx5RSX89Q%2FKqKp70rr1TeGCR5rFdNubEH12wiB2vuI2afXloAgesuncv4aMY8%2BFg7KBPfY%2F0L%2BFraTNsSP0ZbvKkHrKV7QolGJSwk&X-Amz-Signature=35c4b182e29f71b82304c218a97fc6b0f6b7855fc68b10a831b28f9e217b5695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=02023c2ee7253264ac28ee01a920f30fee6ac8d29dfceca39fc227083302e99f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEGIW65V%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDcKFXsx6u3bU9jrB8xxRD6wv7sTsyV7NrOPURjLKybVwIhAKz%2Btym0q0ltiPmdI9yVBFOuG3N1PHIqkc16e44u02eXKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwJ8UkonkCurtgGAq3AMiY3AWMSYsgXXkvQJCAIFCsBD8ytcWzu%2B7ujZ%2FQw3Qm76yrkqVukrCBVw9kMYB2aAZWc9gpUfS28gSPzm6JE7zwEqLtdHR77hQUT05B7BBz6ZAWuWl5ECATLU%2F1sq4a50mEqyEIILQfkOeF%2F2vdugcAKnyo5CzOjANvv06rw%2F%2BoXbPlaBjUO%2Bah5XTROje%2FuxgjhlQPKUUvvcZMREqY%2BOyCltls8RZYR9gCxt%2FbR7xUQ59H4ziyDJJSyRj%2FlWOp15B0nRgPy%2FJd%2BbfI6nkpJkjeMRACeYcdHKeWZx9hVRoK%2BErJCZvGjQXH%2Bbr3iJxmfsCZS4sFJqUUsxNwp0xnCxP424G%2FvYF6HZS9zxNdM2y5X9FTfHHR60j1lfF6FGapIURPTPyWd9diLFU11yICBnkrj%2FF5TLMK%2FCHeu2urotzd4GzKIcbC0Akges1ghNomFCxWTVt4wLcDdGj4tPF5M6RoC01yvzCpMvUClp%2FHNcMh5qKtFSR1QLaamacJL1eZjPh%2FZpJ4zQRoGiVnCQxsx1zAN5VU3bMNYtvXjJpPCqvqiJrZzwJgAqQmACvWQsQEist24Ec1Wl7rzi4IoJ9Le24Yx%2FI5qOky3rQSleI65x8xMmBLwyTAuuKSLpC%2FzCm2%2F3EBjqkAexTR1%2FR7Ij6cCSWuOdFF%2BzBfABGpd0c4KkZBo9ZlzkyQeOVElxL1blbJA%2F%2F%2BSGRbp1DlY%2BEldB7UNEfYgYWxhpJSpeujcTQ%2BqbrpBXL1w2M9LNP4iNtLBIAgQWDSWKPHMjNvQf8LUX9cpTPnZlq6ZzTuVQhC5UisSzqsdbw3S39mXd8RB6LqL734Tle8caTwe0QKbNjajHvzFBQBSksKvZWm1Mz&X-Amz-Signature=3666bdb0f1e2707951be9a9962f91268a27ee8ea3f576d2231671d4cded3cf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=1d147196b32eb3afd590c1e595dc79ce3d56fb9ee3e4b96b8105b27cb61e5d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHHEOV2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIDW8ccEQzoCc0ICrTtAw6KbRkmtSiiJG6mCrPQrZGlh9AiAB5qyGQBHrsgBd7CB7At8xwtok45JqX5HZBu6j5PeRnyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMsmVZNold7LGMmMoGKtwDwoX3cQGkTRbmsHmd5ScvnZ%2Fb%2B%2FDOtSREtTliuPmGflQ2Mc1llq0ldZZk1Q%2F6HWHH6PmnGXqOAxHLdT0r4VQT4LpMsdIAwWsbwVDR48VqDhq8IigHZRh74b6Y9BtdBq87n0D7UZS06tNZWbkJiqgyXBxeb5PGNd1%2FqOwKP1kSHOHLIovA5LTKHi6akCU0WFk6M4EkGOiD9cVzRJLLfmWleFaEI0FpnPWd%2B8Xupu3%2FlHdeQ3D7YUtg6z3Lnk4qis%2FRUVloKIdefqO8AldBovCUe0CAfWKnsu9iO3vKEMeFRdiKXA0ywBf8Xjmd9R1cN24dOSrri9YJ782fwhFjRxb3%2BqVDQZDe60NN8m7hjP6emP4ZL8vK4%2BgQR4iG%2BlUFVqgTusyM7MklnP%2B%2FC6dcdIAkEnY6YOY3x1RDA4vkNXOher682AFzhGA368xwE5JU%2FAKNka2sHnXN5JShLcS%2Bquf614Vnye91R7QggC1Nr4tli58%2Fd4qj9r4BjmvESnspy12%2Btxbj%2BQW1TtxyK8hyrX%2FiJaF%2B3jZWVLfb7RsreD6XABUqtAu97cuycg8uDZI1AHUJfUFYIzTQ1ybj%2B6ikB8iBYkWb98bSgpoP0yPMUND8MdXjZfq7ju1fn%2FeSRi0wotv9xAY6pgE4sfGwzWxXbTmABDHGN2YsxY0EKw%2BgRnLnzgbVC%2BWuXsQKttiGafjSehDB1Th8b8w9mvsCnfHIKLq%2F8GZhUnsRfG5pIkEcDP517d9k2sLef5Y4kn9oMMs2UIMAqxVQ0mPD%2FaBwJ8ejsGbEkziPxNoJ%2BovBo0AN9ZY%2BY2XUhjvI2QceFuEBUh%2Bqvx663dY91L6igiJ19KHgOIGcFbo9MirULhlaNIdZ&X-Amz-Signature=ca11747f86aaffcaed1c914bcb08bb54358f67c696d75a70d65c8cf9b3128954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OVKK5NO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCpt8y896fkQI4O6Vzn7vrazJYMbPL3hycmTu%2FjZT%2FbVgIhAMfeAhJ6ZAji9LgYemUOB3xxAC7CXckP4Pfn167eOi0bKv8DCGIQABoMNjM3NDIzMTgzODA1IgyH%2BguNssSuQ%2FGbzYUq3AOsMNMQkYYqe87tY22cNvRn0ZIJBely%2BPq9DxtU5NJN7xk1Zh4ji01U5a2DW5OxlI1pdh8zKLbcRNuHtCYAEMledRWyALXnB8GH4AUcd1NHbjZEM7gzWg7nBGN5TxrJ1uY923HCYVVyJDjoKHj8uCmyiu1cNf0pU1oODH17GoHsYKYptc%2BAI89RTk0h4hAMxFWn6khv9LIOIaj27dVg2Rw3v2FrWShhxu6cKKhUdVa2p6CvMtfM0gqXMeyqA1kOw9ORWGcTctLzL5GEF4xEO2bTH%2BuQRiD1tWvC4l57M25ScpOS9cs9rRPR6Z1PpwaWq06Dth6qvzoE3fqBtul0TY6854dAt8X9lvIPf1%2BtMYQS5UYjJpRz2cv0Bacx5xaeh2615zdLXXfM%2BY%2B%2BYpOPEyJZK9QkRN4z7UZGrAUvhT2qZ%2BHK6w%2FxYdiC6GGFl3BkaSR86b4bLfig3RtbKhXVwLg1u%2Bm8oEHI7vVvFPXFrlSW%2F0TRaH7K5IvkorczlQcbrh4VxU9RLXFI4%2BtZQ09MmfN%2BwGd9bIoWV0FwOwW%2BhTpYQid4qX0VPedbDBuiim1AevCouoxiwTvjUFm1dL3CPMlf%2BqapBSLB413Kp7HvvGX0bbMHonv5%2Bn2RF6k%2BsjCs2v3EBjqkAT5BzMePd%2FTjAHOKDNdlndlOTbX2wqMHw%2BDFoiK%2BHyyZ2i3z1y%2F%2FayrGe2anQvqdr1aX1OOKs5Y%2BIJhsCjxhIRCeZtJupW3EMceC1YZ7fFgF5hipK%2FxFiccAyzwMunZRihCApTeEz5WyM6n5BVyONM6an4PchBgeEreHhA13i5F0MrIVz2dCxrCby8VMQ9x9wVllG9BxhOfQRtGkG%2BEniWXQr5Jb&X-Amz-Signature=22486bd4b4e664d34c63eabec2bbdcd50a2661b37e51b2f5bc7f8dce287b2604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZJ5O74%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCVsQBkOJU4651Cqq753WnmmQelmbodo5yiBW34M%2B0bmQIhAKGjlmR5ZLiSQHb1AU0uScMaw80K84WOToDKYdZw14lPKv8DCGIQABoMNjM3NDIzMTgzODA1IgwUpyfVNjMq1%2F1juvkq3ANzMq0tNvw7GhsjifdwMJ0uF9hVYBCJQkY4x43wwGIn33pNTPUNbQRbeGdGBlRrVtTKVDuwtCMlyB%2BcNDaI7go1ylpBHV3UcCEh5SuQVU0Jcnm9bOq6pBSUeLTwrAFPMdf5pB3UklQADggqmHAcyXikKLmLusWvMqK0eZ%2FNWe3qcWrSA1GWUxhaoPMMOYI0SDLqjw%2BhqppyDVQcifHfKYZctmbTsijtgBIh0jrXtRQljgQSn0MfAZOswSEwSO0pxaFzXrIqEV096geZWAhxq976PjdGMgW03Wz%2BduLaXmdd7DopwJ86FZP%2B7F%2B1YT8u50u1ButAjoO9IjRuuc6vymzzoZmq1yA2GscOXX11AbD2R9GxAYE5tUkwyN58Gnd%2F%2BbUyZ0fhsrQ52yIvOkeIZBHp3QZ8wAzoqiK00gGa65MLTc7YX9UTM3MyK%2FhkmWfcx4tnVErfgtHIpRp4Hen%2BlVgOT7QCzTCTTSBsXhJ3J0w5ZS7cDnl4nR4OPxCOvfPM1eLvThbvEmfMauDmVFoXnYCuNI%2FcENLtua3ZGzNg2W%2FbxxzzYeX1mzz5385pobJf1iQGEmPFvTE7UMWJPERsG4jLfa35RIwK63wS9OwvbJOzSZiCn1uVC9f%2FmasnozC12v3EBjqkAUKL14bcUo%2Bk2HGPuFBRh4E5KUSCU1yjX9as3DNIFdghD7779x%2FazxLXiklitzhlze%2BGY9hUn4%2BS9Ax39LDdsIRcIY2zEqGselR%2BVJsPEDIMZz9Qhv2vbqL%2FoSc%2BkSRM0YF4ep0HWN7pziElap%2FbARpmXro5mDEvbN4LGn1%2BjNrehf9IuEnTy16D2muVXLjT7Vfu%2FupiE%2FAI7jUGji%2FVV08YLZ40&X-Amz-Signature=f6799ca0bb24d2cc24f9ca165ed32829ca5ae30cdd64cfda47c205e2c372ed3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UJAHNG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC1OpdfkU0hL7nnWpjw0sLdfgp1S2bi5U%2BKzMoUF3t%2FyAIgJCwRroJjf0pcXQI3mP1JhRvGqtFbN93fuHInTWrVCtsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDOLNkf7ojlAWRLwiCircA79FEcV6sWTRSWv9hC3%2FqRXQsBltiAd5%2BwWt9FGkGFy39QAtd1uffWgDZc%2BDIxAwXyJ7Xi%2BrGyjvlZ%2BxipqE2daqKWkUoaR3ZpL61dstSMnHbRp%2F7xuq%2Fz4kVimgWcnSLodghuxT4DuvDTgvW9qXCCF7Jq7priwf4IwlXoqY2dt0AqHsEcAJp6sAsHb2v99gF2%2BvfSBZHPsL8bmM56ffUAQW7Fd5g7arU4ncH81Fu2c4GDdRAFQzOiWwh0chse%2BHnMA70ddNGhaVCubn5kgcLkEzO7BAa7Vy0xUKp34jw%2BvLk9cRUGgL8ifFJ017oh9m8gphRnwF8ozTTnLis%2FpcfSHkOmjnGqMsZgYzNVxSKjQr3ndO61dmYDSmHttVBT8f%2BU5YYZwGX%2Fjoqaxc9hh7R%2BwKJXulw6uml3L0TkdZfbWWLWYuq7fxem4d3Tmwf9JUX%2FiiWcvgpa%2F7VCq20sF3sYm%2BLg8xjr9CFfSbUB7ks3Dvwbp%2FigKbXAb0RWdNy1WfR0IajemKHPodf1qcLc3L1WdIq4rqUQ0b%2BDKpHu1Xocddf8s2923E3PkPYAPuVKxtueqlqzHWn7mL%2Fp%2BqYwE%2BMrh6hmFQWl9If3iCREuo1xmORBs1Ik%2BEsPQ2r7UDMKbb%2FcQGOqUBE%2FMLbv%2FZVXJkYZX2aYaHtZ0NWvC379lba1hxJKYU4ZKD0UVv3uVd2jSHKHn%2F%2B1bbDmDj8FU2xjbop2IsapQi25tRbp3lGaHuFtx%2FYJutxdSNCBOlhCjR16OzwVlCv%2BRJrQg6aX4N6N03YB%2FF6N3KJFFkVRvWi08%2B9%2FQ5yuYHsgaHhNaAxyDAnt3caKBiUXKvU0rqV9zJYSiLrp5Q7EKSBFJaO6q3&X-Amz-Signature=5df5c10fbc18606c4ab7bf873404c8214a1c77752ff39c3497982a9df31d3452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VIPBPKZ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHoEbC8bA9pf7rDmyBjcMFECkLDsaUwdB1r7esHLnxiCAiBIIBdDu5hNI8Ir3pAjsXKIun863Ect7eS7NJqf6ZUmACr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMnSXErNr2%2FFpgRnQXKtwDJEn2ahSX7%2F7OWrUeh5oot9uzCKiRp8nTiPGNQdanSCKC%2B6u0BBMvQzQTWaGY%2FxcGxYPhna%2Fj18Mc0f395DXphL3ySWAJHaLvqF%2FvIcZHcIT6WGTB6RuloQC9jTmsdWeNEEp5uYZxkIa4YsX1nToWcC8bZa33%2FOwCKFiKP%2B59%2FdfGdvdInwXNtWFXAUDOg61l%2BO4ykdMLdh2ADJhLJFZRMzgYaDJv56H8Fxz4r%2F4uU3Z5Dy9zyqU3W26Adg7bv4wRpr%2BsiT02T6p0yQv1lBT7fwUx7FB9a5grM%2FUaLHpECu9NUhK6PEXkz5T1cKpuvAaYXKbrR1vTFYTVpxOIKecziDt%2FW66z24gEC2HIIPMw4nCvBKXBSDMdPUmKedBArHFKrw7BLQoQaE6JFEQ%2F%2B5p9eVAXM8rcKGzUqz57aNrWkb893ZZJr1SKbrx8TVs6xONfB2YhPXH%2B2uJGV55zFsDRhmipzDevjYeYF9EjqwO0aBti%2B1y9hrlm0Y0myYY7H8CluYyw7tA7gTu6EqmslAbeSfJXnIFMZQIRB8Fcp9B%2FrG30KKVVxCmOnIRCsMfffrczJ4TG1KMYnmIYzqQGm0D2ZuAlcAAma9OBVw42kc254wZfyuN%2FV7yb52UzLnUwktv9xAY6pgG%2BpIy4ZBfcgCQumYgWcCfKxtTMZOigbHj%2BiFOixwg4Ox5z5MuN2PsPsDrwexsapIq%2BpfXm5rUBMnHGpK1LPSqMHjWyAEtjNOg%2Bm7kOuCn2SE95T82VtHIxXSABpxeY2Xv8kAiKZhG2o8PcM1gqVjYRrLhT45FBd8Sj7jB93DuvvYT6ZWCskDXGtOXBqrL8roh8Sg1eAy%2B92S1qZolwvUbR4AP31abt&X-Amz-Signature=0e9a816e34d279cfcf640227ccf7645d052aa1a95595763e7e23723b4d0e9115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=580b80fa016331122ea0dd8c1d207ff8443ab81444289b9d56800a6a11009041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P7XAGND%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCICztt5mNK4N3bjpiAd6Vr%2BY%2FoCa%2F%2BqwgFuIv4%2F9ZrKjzAiEAm1D5ihpfxELhQnnTGFQ15PkjNFB3Q7SH1Ww4pX3sKeYq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDCx40OfU5w7C6BQ8DircAxBLAtuuCYKfLDLzbkldajE4FS3nItvJhTv55blEil00xhklvyAEYz9D%2Ftgc%2B9EGhWx9OyYbwkYQF4r%2FuENCxbpuOpgg2bk8GYFELv%2BKbYFJhqXtOe5p%2FsOLTaPyaKHq5O5Lo4k7lYu3YfDArhkSD41tnuECCe%2F5bgpPYCcbr9iZS3q1MmSNNmgpvMqpy4Y1PqRfE5vnthjUkVUswUEaVjtONGBpyHkgi2L1iKLQOiBTVeBiUzBUuXLkFQbFwnK0YYQQ2Y6iKQcBGnBdY%2F4C3lQykywHJwIGue%2BWUebkapB%2FtEgHlpvr8C5CdpwATcfnXi8rpT79OWtqD4GXCkrb6SMkoPlo2dNS4v33inrwkGQXsjV1GYOgMCF9lUFUTyUr1e5nFkblKQnXiJdvmowrFrEThEcUEf4%2BZrwgohDt6GhEM0XHanQZOg6UATzO7Ee8ITAMJ6xj4hhtkjEn6tY0eatnh7uIWIaAf%2BMuffcXJnGvz4sMDoRScNHRdChZEWNPXiHUhgxLR%2FXIRX1znr%2BdmqGU2QgX%2FteQNBsjuIVZuNajiyc%2FClHzVe%2FJHv3lMweY7RhqmGscEeqFDPkp3slZy0y9AmNCcATuv5%2BuM%2BwWLvXGXb4B2nfp%2FiJj659LMLjb%2FcQGOqUBsHpQCBwXkF3YUsaoRO%2F%2FXTAHqyGKt5PvmQzsnyN4rsqq9p2p593jl3W85pZSOPJpEmjTUXncGRrAhQ9bDXeJ%2Bbatj9syTb3CMNxGwxhWOOSn5OFhOhF9PxhaKS2etdvDMjU1s98bHEe2sSaDBg2zCa%2Fj22IDbvOBzikxtKiImAFtk%2FnbWOoyOqE6nj7%2BclNrXUIRsrh8Rxf%2BO09ydXpUjXSaj%2Fv4&X-Amz-Signature=18d7964ae14660c7ffd9b2ebb18b25a513bf35cd9a2823a5e2222cdb98ec9839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=6815017b48b46397b38db5bebf56bce3252423729bc522b24ebabe61540d0485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=ea3feb8bc8822e661c30a8ffa7d8cb154dac9bc58d74302e1aa00a43117bd31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=21dcea3dd6c2ce01246c13b5d60707bc4cf2cc7403ec253a8ec47d6bc23b9a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=50c3f6614f27b3d4ce32e4f75bc42861ec235a2b13f853b3be359cae18a58a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=1789991514538d0769bb8f4fb4154362545c724e2618c4c7fd2ab29a9e49ee39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=24fe88787f248ded6cafdcbf41f851b49ec4f3bb045a4057cbea365ebc7148e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=27887253687dbaf7853d28b71525be78e33c3b44c0ea747f5d33d15ead648372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=c99b6409e14a6655c401fd6cf73fa428caf4bdd0da698998987f4f36b2a742ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=5053f461afdcec2ae9a79fa3af9ee38dcd285d88166ae3ec4cc87f1600808738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU6U3VBL%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIHxUbUj91yNuoattuB0MnpRuJYjWy6qz24MLtQtXff9sAiBV7K8FkQHBlH%2FyXIKrbfV9Vn2Pn2TG6zkKnvFxo3EW%2FSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMRS06Pwh9K7vYrzhkKtwDMtFM5l3okD5hq3zHqso7eNGByr%2BysOTHMcAaPmcnW6m7DLy10iTrl1CZS4kqvGeOOifeyVCGgoIfMy1GZKQipvlQul5CCl7lB4f4KRWM7FQ%2F74DyCAxmyVm1lidwDIuV4eqkQ9E6XP029%2Flv9I54A0vi61aE2Ig9n162YVTVQHg9hMveN48%2FhX%2BnS0KDxc6VNoTPF3ZdbA96EsrZF5lbnLIwgbDkTl47SDULJ3f7dw%2Fdw98csswr41HaJvsoPQ9WyEwc39kMwp9%2Bgq5KBdmSh03hQ20YAQ%2BcPWSbkSdynvj1HoXe3HDFCRF6Mb6a5juuWjocKNlV8VkF9kMRUNGQs90VhtQyP94IlHqso5lBO%2B1Jbs2McZjXM8SuargEZmSyHiecIRtZglP1y%2B5jcfGmLOHimDhhydn8ZUp%2F2b%2BqJ40srNMCSXsJdS10vbD3eZYe8fjknrZ4U%2FGRrCHt1KikREHS8d22Z%2BI3Tx8pvc9hicnAnnLftvBup0EFIwzJZqrC3rO43SMPGWDfw4C9i6eKJedf4c58YocvhnijuHbIPeu7UM31KqixM4Dq8q0EQszQLKqNf6M3wbvdJ3zhmF%2FHkt83sb7gYnsgLIw8lZZxTW5mCEEUv8JqS5YlWfIwt9r9xAY6pgHbbHNE4%2F9UtcstqkaYe7B%2BtFI04N05%2FJSUnefAwhdz4PS5J1V%2F3EWr1q4mWDtbx%2Fiavge28PG5InkpNhHYp30oszH87ArKomdHKo0occWMBG71B0swrNWlcW6pYibR8xi5D9N6YcbfoYbbmk32U2uomUXhEk9pAT5GtCNUiMwRtvYu0RBFvGc3nTjqBsc%2FB89XlJwI%2BZRAWSX61UB1cTMp3dgN%2FehB&X-Amz-Signature=b9f214164cf37c7456052ac6b144a08fe18b4274de1980a3dbd1e042b980cf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
