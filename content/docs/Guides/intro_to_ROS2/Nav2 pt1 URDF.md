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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=2aa9c9de6edd9db23cdc655cd2e292c8fb19e1d2179fc0315ecdcfa463d0f542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=93ec3d820e3b5d851ea1c14b6ef49ca38049cd26713bddb1022e4733bcf1a71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=fddad7107e0d2923ccfdb5eea02349813510e7e7c643aaa2889b801c4701e5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=9369518a36c30c7dd5aa3f20b907f92cd28e0880dc7ebbcc0e1aa05d9ccbefa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=9087bb6c8b48a6cd1bc9d98c03aa9521beee0a1feaf2cc9fed9828bf10beb6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=2189bf6b7eb4b7717aa58811f601fea41bec8859e3eb9ed07c597301098be52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=411acc7dfbe1627a3885917a6549f6e89bbfc298398af9e5fac37bd9234bd17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=b328c7da19cd1233e1e2db56efd0879cf560741c9db8ebfb317cfbaf9dce5603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=ce4f75b00b61616b211da494903f330ccfc8d2aef506aedea1a804e8157d5ae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=69f9d882c0bd67df9d32c0ed67f9ac1be53c453d047747159c9f7667beb9b432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3QPLRUC%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvA9FkZajQnByFfd%2FYqZFilnKDnEIv2WriyQXmZWcchAIgTyGnhMacAuOkbJ4%2Fv2nPl49NC2qo%2FjWBygYKKPUGIZUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2Bns%2BkB0Zzi%2BE0MnircA2ir23945ZOm1AXz3G7l7MxOpy93wn2cDSaRbOVSSR%2FrQ%2BWO8vEbB4E4gova2%2Ba0wzyl7HfuhRkc9Pf%2BIAWgf%2BMPAECe%2F4sbf5IkOGFYQ8%2F6TVJoPOqP3zHq1j%2FRnNK08GtLGQFtkpezIH7ToQvEXzGmkJCHRBNynonF1zpWtXDLA7AoqCdiNwdQkzxKkiNd6Ro21PECD1Jw%2F%2BHqE7lWQpYGmWaNE%2FmWbqEwgrVC48CUq%2FiMF6u8LwQmRjAMB6HlAb0uzuW5kP1saOLPRX0Apxi4mKjYybfLSy%2BjKK%2FcMGxw38kgYLXrfktEnujtmTQ%2FAqrMOJWlP8TWlq1lrvFNbWN3DSnMC4Y48u53%2FZv7v1d6M4cKFfw7bby%2FHx93nr9d%2BfsGQJeMfgOdMbW33ne9gHpAAvABMQX3HDozd5oAkmm86yWa%2B9JnflQmM9wQZBzrjwEkY%2FQkMBL6fVAL%2F2XuMz%2BwR3Ow%2FPNGOOOVHeTFiUz2689%2FS6yTdSv4fhvHvib6b2%2BBBOJ0DDW%2BlcveqgApGuHU%2BJa2%2FkyRCPwSZDx6RivfiVOw3%2BhAsPT5kvU4ouo21LmJsXYSJc8liW4fwSggBTkod5GPA3nA5vBgtPqhuWcTi1U94X26l%2BJ%2BgMbWMK2XtcgGOqUBDPAqOpzqXDvpcC6by8v%2FoSSV0LU0LLq9Q6FruKZZZD%2FaS1m0RaXgijiOaVg7HTsrbBvF76tyi0ywpuMLh7yVpWJNqQxF1dx8IilJrJC0t5kwKuPc1ib5%2BWRzPl%2BKfUP3eh5GX8yp0071xEMnF2I3UfYGe2Uo3kxmT7OCTyszDaCs%2FM06cilU%2BXILSWGLO0bA4HeAYjVDldjLbJyKba8wVrAOPwhS&X-Amz-Signature=3dea4d97250801edc825e9838f6ef3a42bce1607c7d33b545f481b5e256b1021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNV5XUHY%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuIUOS8HlQwCG87ZX5SpVMwyP2XARZ83wucoYfocbOjAIhAPTPBxyikitPxgZI671VJr5fG97zLhyBsDMUjn2o4gFaKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwq%2FdBcTD4iUoETqqsq3AMkcBZpSXSUoumPyqlJNmCxkWjUZkK6crhcge9hw%2FCTiru5%2FBJz2utawYJncrBtiyas63R%2BWe0OL54Sk9CIbc6ZctvCLeNzRfS1m%2BSw7NOoEG2iYs2vR%2BSlsTeBpFxvqANfR2Y5wZFT2nq2f%2FKQb4cC8k2Ue0bFi2%2FRvuOQib3mJWQHPYjbTo5wXW8QPctddna4GvtgqM4GaT87Ta26d3fiFkeh%2B06yWrMnAvG7ANZAhvGm4ugDVMI29XpCtXyLoulFH4oYQmxLsRvMRE4rJpo%2FFiWvGKsGYrup9VBuy1baFxF4p3I5EVmTN%2FqdAsohEGYwySi89VldY1q%2BNt7k3egNwU2M3K7v379s3BatxF3%2FG7gGewo1iJ%2BTIK5uEXmSoIMJ6RNnWHMkMGRi2wFCLv2%2B%2Fpn%2Ff9eBrqq6WoAhR3cB78C2u28HV1KEJdpnNjYT8lslYvC%2BgxkmWsjJEl9qyqBOGxDDcJJVettnBdLRx1a7FEiUu6zDXtns6yKvYcNZSUACwRFMjxjOTPQIx%2FkSLRL2nTmeOz36mgbRx2AMuwKQWs%2BDHHmVOFq5%2FRL4ceqzUFfX31sYwGsxX%2FmB6CK2LSOXvmlnTM%2BQS8kurDU3kHSgv6hWuaLYieouSrtQFTCUl7XIBjqkAfaN2AamlJzkKlQYlRcNG2EQBoFCVsMVpF1WCuxvS6WVNx1kep0EpwzB5vwVHFuZGLHbmxILjFJSvYNy3rAeYpKhm2psJ1dZFLeZKOOEpkA0K3mKLfCgZVf99sSOOffcQQzT43TBC%2BOs900MCP%2FAqPFa%2B8JsE%2FEGLq3fhpiYTbhxUUvSrTckMedWE%2FRf1M%2Fpz3mKUnowrGnHuWwo6fnYmzGlCqCd&X-Amz-Signature=69fed5f75029aa90a5f414387e39b5a102663cd2b323b055c6973878b3eaf1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXR42FU%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1887b2lDyXobenrPKqLDaLVBa8xv3lz1vs7qjadkImAIhAOWrrJ0%2FRh59Oq5ZUB3ETzvsy9MdiYjj0vfS6w%2B6b5pMKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B%2BtjSpN0YKo99y4q3AOtOCA9HObm5Ccj6bG6SAlQCE3EeOnRNdwsYgxuEwMNCL%2FIQ0Q3fF2f%2BqC1AdS75HjhEGZP2rzjiLPAeMakGCXUqaTo1D%2Bh7mJ3i5wyBKwaWy2iPt0tfpZBmuBM9zyi1IuqF37e6GYgXu1n%2FHwXvjxSA071j0oxtjTGGK8mYTEAsnKSpDd0zJYQLTQOvxUjd0St4IMn4qJQibPMTOeUCFtmGp8N7%2F2bla6SZBVt7isjZIEVIjiGNgtSJ%2BCz11firIj4ni%2BqLSXJkyvx0JsBJ5seLt6lnY7%2BkP3b94%2BbIFWr6JcZEvX7ekZJGrnuRXIos7wJBXPQ8YXuT4CddxmBGtVp%2Fb6SuHRbf8taglAU407iTAF19hMbOk4lb5Pv9rt%2FyqHhoxzeoR1sNrQKLD%2B16Wm2nZZgapYLNjdDbMArTSOziTaKR5p7zjbvDzoQoOborKgVb71nQoBKdo2C858yTtPi88zu%2Buw4K9i6BeRTv3PrBtoXGvctm0swbzazO9WH%2FQiQl51vlDDvbFn%2FCFDiBN5RnSBlcWxnpTOQEMgY3OabKz8ifJ4naqPzg5whX7cwfyiqHzTE8P4ktPdTXIdq6NBG%2BHXZIsZZ5GXSS3lGRdOuA%2FSOD360TLyRsZ6nHTCfl7XIBjqkATwRkLx%2Fnbv56OVKP3s%2F1SOahYdp6P4TjkliycczKH27AcfWyWs2jZ5JOZPNCCziBSRiWYub4RyOvpnJa3Hrus4ATAtI89uNPebUPgiLNiWsazwQR%2F0ij9ilASeBTmx6fiUSP8r7Y30%2BtqKcXWgzOUzm5iuv5ZYFMGg6r2mEqjrAPazWKp1exWn2IQyHH3FT2yuMME%2BKZ26SaZZJGx5WGg6KjbOt&X-Amz-Signature=eeaf24288973a3999f5a1bf288f8317e27c63c2d1f8ffaf16fd554741d59dd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=c5069fc26dac49d28565d55a5463e84aee981187109806b024d8acb51dd0e014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCHUTUXU%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvd6m9ICoymwPFZipTEnjOq2YWpfSZC9WhCo6UWaUebAiBhNZdsWNpkObnR3Nyje5Ypb6CPgPcCrincdedhwb8Y0CqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6lGnntSRmXgOgZYOKtwDh7NPQA%2BDXuwBsXJj70hZL9wCOcbEUKH6ckZe%2BTtz5RmlCkEW1taKMNeyrFtm4ylk7KsAO178wBE7rBpUHiBRASlUk%2FPv8tc7utn3oRQvKAjckt1Ph%2FFq0lHPd%2BkydnOw9IfN3Xf9dDU3FyIywH%2BmZNIphNLzTudUNEB7sBaSco9c6QY6BaIouuLGgsnXC3LqKMfG14NKkxuyDHg3zNWdyd9Z2jSs6Tcyp9YwCYa%2FofBV%2BTxuq5636%2BYMd87XIoKs5TOLx1ZZjWG%2Bovzn0w2DiZopnKHdo7qnFza9fmjaLIwEjqRoW2cR7hYRtRzPpC1%2Fi7fP3QAaaSiZJKiGvdpSdaDUXrfLWdXP0CxemcvFX%2FbQmP00eAo0tyPZFO1VE146hCc8m3FwNhDYoOKAlSVWj%2FkaX2oVCjaB2hHe%2BMjxfI0FY%2Bs6ZAiGM5r%2BBwfE%2BIACWk1hdyurIJr%2BwRXDTb9iOEQ4%2BE631ULv9WcEBZeIMlc9QRvKk6EBvISVICpuSFy7vqs6FJTECM8L0uSVVpO%2B01ixan%2F7iR1q74Hij1IZZncPquLyOWeIoz6XBftLOJ4%2F%2B6iuazKIAGK1Eqr7XM1yCOUVFT6f6u%2FEzu26vuRJTAjN3vH4cz4%2FiPQPZxkw75a1yAY6pgFlI5bj7cDGT97Hk1tSZhA7gsHvbwzqxcCeGbni0SvIiXGZcoS9fCIyU%2BVP%2FAx49mf03%2BUNVtKJrutQzJok06nijHwvPF4R4N6XWwV4wazRqBKxam3GAjuQTT3yAMWhjsrFzLtt7kjK7reIhvBKSQJTGEftLb0uZIIvnk396frjZSZZEY7pSnu6iS1HuKrEnA5gxovzuU5R8%2Fgf%2FYfxu3gu2p%2FoHTsL&X-Amz-Signature=8c772af79557ea16f88a5ecd80aadde699096596f18d578ad6333fb5c47c20df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=b645111db1b87746a9d0020850f4fda9b46fccf2832e3f7e08c3bd1d47b7a970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6HKYDDZ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaCjbDA3raOzYNdnLMeS8lbvIVj31kCKbwQ8ba1QAkIAiBuc99Bn%2BFFQ487xL4tfVUcAIC8er%2Fzi5jH9dB%2BZhYOViqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWQFkybixk%2BJfxM23KtwDf4doPsHMA6UYtacg%2ByvXj610AvaVN9HF2BQYA0ZZaZl0MuXOvIBpa8JQeZtaqXC1HLRW3tA1Zkkf%2Bo9dImHAA0FOrLfOHUsa42JGlEQedWEcvBq5Vp9zf0tG5SR%2B0UAR%2BH6Fgdr92OjIib5u1s1V6PjwFyfACkxIdncvNtjaWvvJE3irUcEA32s2W5nU%2Bn6egx1r5DZW2Do%2F5XjzTKzBdBCZVuetJxXVnbiEGuPpsA7If5p3qyUa7%2BOIcJJ%2BM0XCjmZxaguqeUr15SFYmRktF6adu09NJRr7w1tIc0zm9yh7qgR%2BTVrE5uGz86jRj9AHvTUuMdHuo7MOSrsWj3ZRulBSx2kCLB4R7BNKmZ%2BWwzXtNQjQMSaItQmivUeMrRKoQf%2BIRknlVFFx40LGW07OVVKDlKeh9pHrKl4w3JxnJbrdRrzFilcNvnEuSNhlo2AGMdv5fF%2B6m8VNBXRyVmGf1T22p2JN2czuOWG4L9WggNMOd0bcr3ZOjH5t%2FlpMtH%2Fz0B6UspQ5rhmZtxC%2FhjBL80D49TYI67B7gOymj%2BXEfdFcX9yrouH68GTJ%2BOJnFT8GsEHgz6rFOFPIqe1xv022am5e2LcuN2tPLll4Txk4Ha%2B5PUl34XGDUrq2L68w5Ja1yAY6pgFBQog3t5FBDdQRkb4hrvO5KCyD1KvUxAEpSI78gUFrvXOmUOX62JezJV3mnXcJDsrR4oeHGxtuRvJDZxGugdycdyWNNH62nA5vBtrGDzpuKJVdqLAz%2FLvgx%2Bk67ViLYFh8HJ%2FnHVTNE0sp9qEN8lhxF8mCaTGf5FzfGpRVmehO18I%2Bgdd98azcJeCxpI31PaPXfB9ib0jm6u4K5CWAb768gAFHbcSj&X-Amz-Signature=ade81022365870b2d0f25814ab587c8fcb73f2cc4022d298600d8369340914f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=3ecf93912a773f198b02db6b7ae350ff54b4b84259fa95f18cc39cc6a4d4cef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJIEMLG4%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD96LbqgpwxH1t7DzXGh8v3RFKTq4OyN%2BFuhiHCzFy2SgIhAKJNaPE5leyS56Byuh2ciWRHYNKQ7bm2b3gaXLbufPedKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQKVZaMtlXWKcaEVsq3AMjrNglvcdNXaMXDVgXv1MFAmMoR0%2BKlqkmWw8HSNxQRT8RJrVxBqd1bInSC7UpMic1uIWEtQFkTXgzf34CIleXPS1yNtNTTz1OhvVEIpU9FNcJALkNGuLGh4hFVAKkm5V19rtUHxLzNAYXxB%2Fc7pHKHO%2FPPQ7kyqZdHROks8Vx%2FPFSEp0%2FsnXh%2FuFR07T8%2BJwsnzgrkNdTMdVFXKp8M%2B7BFHqj%2FYa49inuD35hiBQgnhCG1gNlI%2Fn5OERNP%2FcNk2EwXorOEPqb7Y6cQfbicWuRt7zDal65ZEk%2FhCTaYsneDvwNtowMf59McRYt3ozCuVxVVLscnV1JxSKTXmOnXgx74P%2FO5%2B%2F5UkVAAvIeLGF8Yrvjk1cvgJOvyIE0lxGZnH%2BNCpkn0Tl3ZDazUPC512iEsC%2Bl0Hi0ELoQdWhhxM%2FfbxuAEYi6AU2eKvNxu%2BUvGZyBH48cKUig%2BL1%2Bem8%2Fjd%2FsV07KabbcqvW%2F0HXtyU%2FzF3KH3nO8X6dZhw8O7%2FpH9MSSDbAGHHWn63pUXxT%2F4AYuhGTm3PMfET0drXwOEsFiKBNDtRMj0cyF1d8TMfKxRfijhfqYLwpaxKKeJjQMxMYTkxNXwM%2FQOaLpQ4z68RDpXW5P4elAz2Di0YoKGjD3lrXIBjqkARTbKnKCXBycDHc7DQj0xtoYGFcJNInSG2SqK%2BXyuMLly%2B7%2F2tovT9HJRVTXy%2B0rZQMlM3WCFfbwrfVpW4DxFAvaKGAKsKNHVRXmYffRH0PURFCBciuNeP%2Flf843JCPzAftyP2DFGAjjA3rW0syMe551VoU0JJOXFVQ2Ys6MmPY0VvSlRLYL4hGimIikTW3lzhLDYaoOAEIJkxWnnJFJDUavGVZZ&X-Amz-Signature=46b8e9dd7241769b6508e3f6e5de59f3266041daf97f18fc52656ef3bb8486cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=b41937fe898bf61c8aeaffbf8056090ade960b18f18ee8f631b28d9375d5e39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZYCHVM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgz5JXTDxy81EM%2BaT%2BI%2B0jz4hpzKlke91NnZtLzy9k9AIhAILCxCZVbE3rMNUMYKJWqb0u5l%2BK22YisOR8oYACFjEiKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxgx%2Bnt4ocqyG9UZSkq3ANJJ7YoOxNKsInw8xmxxeSz2ciQWbVXmw8aQPztaaN7Ifus343q2alr7HTxIzU23OjI8aGStsHiXsad651hY94TWzJ5BqgtUei%2B53BLkUK5%2BtUQ%2BBOTWckiilz4YoRrTVMz6NJQW4oDRhwXHI5TehS701Z8pgpwzlsrY2byz7ze81EZ5ME6reK6n3mCAmcc9fVbEDQMlmEyY0MCkJQ6zQw%2BerHLLRedh4oZn%2BQyZKty4lpANEgeQbOaZIrzFnfiEmvXslHaXXeFF8EGFYB9lpxpLxg37yyux8%2F1WUAu7SmilBdwuzOtj0TxqYhXzzPnK2sJK4Rq3g2vwKLuHqIyRpGsKUFcpwUZ2maZtgIzbTA6NS5U76N4YDDSeBNrIJtWihHpXNq6uhfpgBTusPSHEzU4Io0OqzszCX1ZfWDD2P2gcU36a7ZOirt1R3tM19w7Iky6MiVlUHrNtDPGwouRKK28lzYTYlJHGfttWFtkrX%2FdWYx853MLA9akTr3%2BG6QIH8iL%2FGVnxfzpH2n74vcTO2imHKs3XBtil%2ByXdTazEMKME6uJNsJuPngajsB%2B14ujEGq%2BCS%2FPrl%2FQl8rZ5Xstdc46c2ZDozsCh60paeIyBeVlucAbITegYHViqVrzazDilrXIBjqkAYu4eYx8F89Vh4whN3AqqUYAtga2T5j3TDaa2ESqlUAGQkMy%2FEF4Otsx4YXM79%2B5PzLVLrd%2BDvDuq4fq9RpdKe%2BIUn5UQgmE2vWrObH7IWVvAEMMwLjNgv9WbZaaRfA0OkmMtbo%2FkYhsx0Ull3M05RDEaHbNFsZPl0zKjfF4RGoKbbKibUAyBDxWAVa%2BpuYhlZP%2FMCygYUQuxXGU11v2dFXtHHVO&X-Amz-Signature=b34d0f661be534e04aeb13d3890b6d11204fb372e847112305ee0328500681ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=62e2f5afc5d25d3e5de6a54cdca8efd804996c2cac18b0d9fbf300369093bc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MMMOTFR%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfvEJ9UOGz%2FiG2zTHCxd7daDTvfRtODp0wFyQ6EB9x9wIgRPlei%2BBELEd7GFUp%2FsM7vjlTq7dblLUIY28stoxZ%2BFwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw0I7cpWFqrcdaYMCrcAypoBzpLo1%2BC8nicWgFU5RiLPewM9W6%2BD8o%2FcGlHB63Sh%2BotA2j%2FyNdIfveY3KSG97R6FneD5O%2BUU9Gya83QOVXRM%2FqhLppVLlSvL1t68Ic0caHdzRC4ZnKhuBWHILVBu1tio94lpknK8Y%2BqS76RJEaRNemPAyOVdRYVCvU1vGLgoq6G8JkeYLf5n6IVgCf0DGScnMwNL9D28AV5%2BdNkppiYR4tKX3zUHkJFIVk9reM%2BHFmYECZfwLpyzAX7C3%2B3wu6ACqzPsMZpSE9CzRC8fYUBuT7or%2Fsu8Xpovc75UMvM%2B1qc4nIUBGNcw9C4tVIsL8WR7OW8qK%2FC8q63SXtLv%2BIDNlQbnGJR0WXfAn3QmuQ2Mcw9I0OAh9ZTCONncSo4ruUevXKV%2BjyUd%2FtmHGcC62JbkoYFzvZr5PqMcgaLsNHXEZwc%2BSCJJwTxNBgqVAYma46a45OWr0yL9JOaPB9ZYEiaK9KywVyygSasa21UDb5p4Az%2FCDKsaFon1l8JppKfRPadSKdKwxo7a6pfnRXVIcacmb20VG70WSyVENG6Vt5znsSNH%2BCCiwVrOm5OlRnzMTl7K12BuXhAn8K1z3%2BqkGDvHMocIsnqxHC5koWiYICQ5v%2B1y7JLtEjYC4NEMPeWtcgGOqUBdBuUPr4WaFzhWbV0ncH8MfOT7mTmKd74hj49wG%2F9OKNdto4UCYJPxTJjJuBNTd6eNdO2RJXD%2BdPPBFK07wRQTfHDVjhvjneR6WhAJobUvRlG5%2Fj%2BaN6GilC8K1GWbWREcTdb2h1punumLKU4YdkA3WfIx4Men1uSj9LGayGacVbfyXyUYFNTr%2B6TcQY0mUKnruv89lM9ppqaoVuzSZ6JSm%2BPfudK&X-Amz-Signature=ab6b63b8cb72403664e85c2e78a54b036fc5afe36cd0c137167ead7ff975a157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ETW7NX%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEQ9OExtjB2yhHNQSIypCaEBbHQXknsVpefEmiG4tL8AiBaxNtJ6cpXqs%2FzhKyYYG7gokqFSsxPDPYPMbfk5dzw7iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmYfw9cgqEGVK4teKtwDwBqO9J99q8C6XqEjFS0zrLOLwdcTwI%2B%2FZXM%2FRL2562Pqa3veVxgrR%2FSl%2Bde82t9dGzmpIHmuQTHLoj%2FvAFiC5oOsQzjJtqRYOEeMGkn6xbmlk0KSrG9hsHr5WeNxYoeB5td6Q1arbXsSpDIrxSi9cPCA3ZbOECT8VeKQeQEUTBv%2FXfaG5pP6YvnAMZXCV2mXlx995TgPV5HVs5Z2nJqgiZl5q59CpFAtfZNeCVEgX9sKGZUeSv%2BM%2FAqb%2FpjISl0KS0Stu0fneahNDol4Gtn1YS3GZDEEKpSmZdexX1pwkGGOwLaAd%2BRMEdqSwPN03vOlm%2FrjLPUP4JIi7L62c7m9%2BEBL9G7ja%2BWIJiWe7VNg%2BgZ6WK6SMjoHrGRXZ6VUk%2BYJRHChlF6Ygy%2FzRS3ugfc16rALrPkONe1PBZkljBi7kF1P6ALzse%2B4deMtflitjRApJAv%2BIZypOz%2Fwodi0aLP2gMXeWXNFa%2FMo77oB2QonWPAW8ixduK9Fg2xP%2FOgBbi8lU9NsmTHdigoVaj8h4NrH11%2FQLp%2BTpejTgrtEY60leWYzmtiBXHBzHwwLP27lM4L7a9kWsV0hp0lZJtl74Cs%2BWWTOcGt2dOoP4EMx0qubB4WiFaMPss2DrfCS5kwwppe1yAY6pgHkpoYhuzxM9HpDWdF3YtCPiIZ7lqvk6laFZvoVux6RpAiMPro8Xf0Nxs6o6dzF2QmvL5itaOExgW2gqXnmkUCULG7BJdnyW%2F5kxQvt5i2v%2Fr%2FED6jmwNOiV2blOzntwjGI9ZhBKHo%2Bbv0WLxxLGWnJFgPiJRFNcrbV6ImHdS7MXJYuxN4yA9bzi6l0AX8LswMERYCNHUAOpq6XHIBMv7Ph%2FnvEEq5P&X-Amz-Signature=d859a79383d7da5e3681ba545a3425a956aece51845c33c3ee0e2be2b6e1f294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WACWYA7%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnKyN8yR%2FRjRn9FFt40n1NeQQbo1COtbGSePDDqElr6AiEA1v0Xj9KGX5ETpAHk0tvfh3rMIfhIvr2KIZnPP86r7cIqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFecR3InWd4ms2eQvyrcA2y8ckjAw3NuecgEDxEWVLzmfa4zFUiUqbyqb25CERVjKgVCZQQW%2Fqtb1arXqrHHgZlq84jaACIoOXZRcddoXwBBThbfDH5JbEvNmEN0CziANspobwjYAx7ZpdC3tqwKCC6mmpH%2BlRqmSleb%2FbFkYGoXcWEjhz5mgLSV6XNLAqTxzTZ19Ei29Q3d3hck%2BRetEk3XU7IniAVYtdTZjjtNLO1qxKRnhsRwhRVJxGr87nyMhPNTOtKcgM8pE%2B6fGSCJj8ByZ2IBpZFSqxvW6NtYiJBNA20CcRW5oDpJqwiuGKIhsIkpBp%2Bzqn1pa5Q9GyWtF1GzQncfz0Vj1rZUFnnr7usNt4RaAidRjy%2FTdUh8noCmKl7o%2FvYnPk82y2Edq1RAbr1IjsL351lluolxCJ2TOCollhkbMzcdyOxnaiSQ9U5uzPJThR1IwMg%2FOBCmOEIPwpQd56OCF0p0hpkCoRTAzZFovmakmP%2FEqfiNu%2FpIqSj5Ssfjv7qbgMJRbTcX67gjg0avD1X2NmAKYaX1gC5GNUfbf2hI4%2BRG8YR0VvVpcCWXUXoQz8FXxUtiRM90ms%2Fjk79qIPg4MuplJ6zIGOLEwVikrNmtGujlvHYzzeOrAw5d0CddHnqgIMBSNRE3MPCXtcgGOqUBTVfZqw4du0d33dpdBYWVTts5M3xNq54%2FCY6XsjU%2FNuFJGuUu01w30G3qVQGSUlNfgr0Zwy0G6l3vXS%2BOsVDLCl5VaTRLGAGFQ0vLoxuMlktzyArV8vttYnUIrwhZH7hJsb%2F3hCCdJndjVjToHVPWi23NdphpE8ioTaE6JD39sZVqzqH2X4dLTvjC%2BnJGnGH6hjgCMl7sIkHXNqG23FmTyQxhprPh&X-Amz-Signature=c10976df00387921af64361c651434a9a84e26136340134bbcf7a48d6ba1231a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=acd43ae28c5dab122bcea2eaba2ec0aab3e3781c5c66d228319aa44238dab911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7BM67MN%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHw7VXVAwE%2BZeAN3INAvnl%2BQewI%2BdZ1Uoi2PcP7nuI%2FDAiAi11vBjXBTwbS85r8yGM6v0MoQYtEFqiBNFMNSRVibiyqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bxarbav4GgF2Sv1AKtwD7rM%2BovvAnzotfnrhCBtsMnpxVDR%2FmpOiaFJQn4SL8rg0wMVqD5pe6r00poPonNqAkXP84HoTk2mcABZX6J%2FgoowDCpjEJFmt%2F6wDvtOrgJBcFAv1ZQRRJCs5ER9mV4IUoPtakw5DmU8QDvqTaJulY93UO89DoYZii%2BuTujGPRHJ4uPQmIBWxJ4GWnVWw4kKSC141QTUKyWiU7aZNbfECXfK7b2o9tCTMxd4V7paSFizjj384FNyuC20lDL4hoY3W0ajMpWpZf2hxuivqz%2FSFtIAXf8xPDQNYcQpCWLFO%2F1RPishZ2Rt7LmU3J4IwzkQPcKYY0dJn5dY%2BaLDDqwS6ou%2FLQRno32mJRrs0pfGbXX1M6v4RTGeCMI0MQ1Xm0%2Fg8blPX85ASIZrWdoNty1whhAaVfoqV%2BXiEesjsE3dTj7FywT7L8V3IReZumXKI7lz7hz7FS%2FtJ4Qvt%2BtGLviwan24p0ieQb%2Bb0xocTJnu7uHe76WrgD8TK1HtpHdWPJWAwj41D5qbKnG9CCfyTnjp469ULbiKWZHqCn04loPMrBPOzkIffWt%2BaDL1Eb5dLEaVADWEZ9cvs0awRd5DWlz2jFg2NOT%2FFvrcnAZLys99u8aOEDVp6t0LVr2gXivgw55a1yAY6pgGK4SrakJRJ4qR0ZFsnAV3X2txVbfe8AG6PJtXMQwC3U1tFNN9SCkCBunzbLPfP5%2BBJQ6yHMX8Mom%2FRIAbZsXhPndR6kwI2dreFMVa5LyMDUwIdM%2BrUwztffbbh%2BwCH3w%2BJFIqHAXwrn00buZHnZ5fUbs%2F1A8KztwkTW6GvvIvDmrO5e1gy9k1not6SehD6ZWdyaSnQKUExI5czA3RBArZyVQPKQkAL&X-Amz-Signature=a12e064a36390e77cc467df78421016cc14813401ee06a46919662263c2675c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=081ab095907e1768293923b9eca11abb83423c229dca93166469b42dc4b0aa23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=d27a9d721bee72e747a9613ec70f5219c24bfddc220f4b23caadcf67e5f39f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=38511c2812fc9b23ebf0d555f1eee618e49069c4f49b91d1fc2738ebbc44ed22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=803c8a9a440f3bdf47e06da3c3fffaa303e8d26a09dfcadec5c7e5f23d08feb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THHBUCDM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqRYBx4jBP%2BzxMttKMmnvoB%2FlnbEpD69%2BtNbethtiLxAiBYudAwqb47%2FMn6iRVj2L5kAOO4aSGh1vtTXcLhnpWeGCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7fxdzNeLuVmCCBQgKtwD7L13GQZ6iatCSraKrSusJ%2FE7UECEmybRgIlXSJ%2B8tPq3wvWJD3jUHF16yywUNNN4k2miD99PlFcyq4jIW0fnRdCHVH%2BE9UQz%2FALQTcbK0VLcn3BVhb6JxlEzUYXQZnaXz67M%2FmYszND%2BgVaTuAsLncU2ymKeg5g%2B4%2FMlHDiQYAfQOsb5BK%2BEWjZefmKpXvCaZ2yV1i8%2Bli9WtR%2FGwEy7WX5zvv2IZn2hhscALMK5mF2Bbgnd4sBofNp2TM32zPj97Yfh%2F9wfC22%2FIbOCB2ew42rcJhA%2FLAuUBpds2xCD%2BQCxkjhnCBN%2BUY4wv6Ck5qyFC3z2bTHBvj9oNfC1knjhXpvpXmcfZXkOct4GviCroL4bo05%2FUkdAQlUQSghna3E4peawYO0FxXefuVHhaQUDh0KS8qiW0M9B0AmoFVHizEyhwG9RnDpi2IFU8wktRAx50YNLLYXeAk77ZKVA%2F%2FfgTE%2FOf1XcCojcdCCyDS%2B45XEs%2BndXXlwPI4a5sk2D7fPLGw8e2TuVk1OfGBnfH%2FZPHt1wcipECR53GFs5u7iDITGYF4ELUlACnwH2GZfuyvwITnbarFxlopQ3GPUN%2BMVFlKpr0tgMxeHQXPex5HxovhRPS1%2FxE3ADCQfTraYw1pe1yAY6pgHLoDpSysKrHkMKA1DxsOIgqdpgmNfhd2mqJ3f52gUoRvAhDMMAtWV3%2B9sBrFQklg23pqzPHAh9tBU7JbZWWLlk5IirVdoFXZ0V9aGCsjXqdrZ%2Fxm8pjRgdSBDNNWDt5NdiPN%2FLaHLOdSe8hgZMGxf9Ry9gvSSdpiqa9RxGJWb5QpMKYKojfmkutXv4UYjG9o19lRiPhs0EtyBXrahtDh7b2096uu4K&X-Amz-Signature=669096b9d164b4e6496962015d153cb4b862ae44d48bf97c721918e06b6bbb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=621d7490e3447987ebd39a9ceb9a4617ddbc9de3f284fdcb9a0f08479cd8a313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=2a22924f8833a5d102d45125613089aeb945dccf49ac959b036c35c9c44cc72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=38511c2812fc9b23ebf0d555f1eee618e49069c4f49b91d1fc2738ebbc44ed22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=8e5aaff51615b82ebaf6213e6b03e0317d895c506b75cca8c5f9ee55986579c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=2631d81f70b384ae553f6b9326eb74ee05f0bcb590eff45e4a350a99e44b8b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYV6F5TM%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEEJHgTo766D1cG2VIpiLEi3dzIlWOenSfwGXJmVIiuwIhANa7tfR1TX%2FCMBfq5fFpB9A7PSWPVzOn3gNc4GAEjjhFKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyqzHs38utmQGeDKeIq3ANjgLDQjHT2rrW0ZXxMt5jJ%2BphmPVYOIWc8yBDG2xC9AuH8vZ92p9ftEj3QUSlOws1ANDA4BrhuwR7ZPz%2Fnkfa8vXA9LR6jcKawYym2Y4ZuaoaAi%2B%2BLA8YwulmISj5BuM6zM3Z2OnDxP%2FHFpRK851aEQfjO05FbM1Mad%2BDp35%2F6%2FJ4CuXXkPTZMAeelmz1ANjTLFgIa7NBAro%2FiWpHPK0ZKJU5yyLz0Hynbck2PIvhwJun3b5u7P5ECXNQyk%2BnMh0CYzE3wLATqEN%2Fp3i2aebo%2BPmEDZemrVRWITA03WogvYbVMSzMP76DDthxRbyKdqRlNxw56J0uKQhD98ov1F7fDhgWnjrqnWbiAEwSiLxVsgCZ1Z%2Fcn2zZW5wbOzFqnG9wnoPNT%2BbyRzvYtT6nYz%2BWQ%2B26rw6c1d%2BfWKG96NFeyYWkPShLxBFCIVXYkqeYw9ZJP1kG4hHPVCPqpZufS7qLfOc4%2BELR1diX125KG5bKCd5TD40OtVnzyJO3a3vOskqkGrb2uaoNxJBD6wpGpToOpv8RZKao70Z8kOrqFAeGNNgS%2FU4gOCOHt9Jx%2BJSVvoImrFU9TtDfo3x5j7ESWaRIWQwjbuEDPVFIRcP5Moq9U96yVt6ZmhZvzuFWF6DD5lrXIBjqkAUvUvZRMtKsuhvdEQXYp3815H98U6Rr8%2B6CI8L4TvBp4T%2F%2FpaUesykVWVYASsMOw5qD7XTq%2F9z0ZHIynLsRIjudHT1%2FR7YFX0ox%2F6V7QuWc3MYe2J7odvbRTILUZKLnRPOM%2FCZ8R%2BXUew24u%2FaarKoErFkiIqqIfIuf7y2QDR3szmHs7lCyEIN5%2F9VTM7B8Cv9Iv%2F1QbL18wOa6Zzp%2Bdm4R%2F%2FHM6&X-Amz-Signature=37ca928c7dfa91cc3e65b35e7921d3054e2d1fc0cded108bd021bd43c3106e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


