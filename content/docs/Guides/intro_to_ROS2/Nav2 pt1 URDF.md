---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T01:13:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T01:13:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=b4a299f5f5d4872d2a3072c6cf962ac66268a1f75d88548915df819e19990ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=4fec57c60d4592c565d7754963f54665108b97146479f6a060ca28219175461c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=01a7ec195aa680e0d1b616a6a307ee346c57d3a4dd0495ae5459c93f8323fd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=75b1987dc6c785ca3d35caa36f2f765fa7bc7b1c0d389ac3be2199283dc3e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=d6bab845d0646009e9eaec8259d1e8cd27cb1cd99bb8cef201a2f330cc879155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=9e29eb77617f19b3ab92198b0d827037b5f93e5a663f5c705fe1fbfe0201b63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=dd2acfed28299e860a55af2e8ba94101544c1926a88795153f74871c8f65bcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=b592c52d008f7dc5700501104084e0b0a099b99ac99bbf30cb38b67051efd0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=08447765c4ae83ced906f651d217a47809020bbcaaa832bfd8180f202709845d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=027b61cbb5a2ca0939e04ccea1ed3b409743f1bd1c12741c331114d099dcf63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCWST6F%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FwOaGmagaSPth8%2BA3UhGC3yC%2FV7DTxlHhcYktMgN8BQIhANtfUkThsXL9wKDu0fZgimG7EWo5IdUHqI2pdY85iTnjKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw1bhTc5FgP15ZbQg8q3AOwBtLzzSfb2FdtYHehGEYsLg2KqtTh8KUCMsV2KB6ZpRxuS1y4707UxONagqcbph44FH%2F5Vgnyl14AlF%2BCPyJerKYbi9C1onI7aybw9TNZxrW3uzhu6umRgHIfmsFDdveE%2BJJl%2FLDTmdGhLa9qJL1AAWv%2FNDhHRyLkhJQoCuVhUuhUjMelcVAhOXkbQcwRyk60WkxF8qbMEIFdafJOxaYJ5CCjgD3iW5GjlYKSpnSa6gkOgVN8eUPRNwWHJDy7xwnuU0HyHIBtY8xalckucEHjV%2FAA4FYH63%2FpeVXnVRt8lf6TPI%2BMpN%2F6Jd3VVibsB8AQxi9zhdDl3Y3hoOZUaCVb8f4KtSe9e7BlBShlV3zOeTv0vlQo5g%2BDXLvBQmnoPYb9rINeK%2B%2BSbWK1gC4ZxOibDL8omIo7z%2FrVUhiAtz2BzovhYw5zzO7LtOhGLCDbhjPEFjBSocDNxjkGHN9tBr4UBjUtnFW%2BTcqGhYPNEZIhra5pngtXSsAgfsnAlbliPb8ggtZV5WSN3Pw3BRpMQ3h0nbBRyzkzjcW8g0N3r94uXsK2A%2F1lBhR0zbQHvhc1dNtm13CwioX0IG83h8OdPobsyfMSbFELNVaeLpiVH8dx3xF793f%2B6Tn69COSyzCBnbbEBjqkAWoDoajTO9XUKi09AiejIlRsMWBMiyPx1esYcJ4QrrNNWReQJM6gGV5oMBpx8kVgkEqCyoJ63T5OGfbPHqewiMR%2FykjCTd9GF4LEV4PxzYxq2gzIl6rcepwIA3P5EZJTOB01RAl4yUlyIkEs4IuFbrQGvAThYfkNqLUjKHtow5UFBrmEuu%2FMbhKEsC2a46F%2B2T%2FgC8ac%2BDxNfyF1SZucqYg7djMz&X-Amz-Signature=fdc365975b3f6df619645337c5be453fa779bde75cfaa3e223e6037602d96be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OGZA2NC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F%2FmBJMFsyIIDcZvi1DdmfjElYaX1ZNFdrd2KPBEgblwIhAMIbd0yVAOaF64u2Ez5O1NohiSO0AF6EgP27O5wEL%2F%2B1KogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww6gTw5RyF%2FQoAiPcq3AOAZarnSTxy51JqtIqVgMEv2VKtH%2Bnkh0R%2BazrN6Xrjp1%2Ba9C1r8CpZjxf%2FC9Q8%2BuucJeTSkX9C2VgtdOCmitcpmPI4RckkitKJGxBOv%2BLyxE1S117sLjubl5wCwlhKZxi%2BWSIsa4EH8KKwGeIN8UgEaOBimutqUjva3CrlzROCzn5w0sWms%2Fs7mfY4phqjXrs120qR4hNIYUihyCH5ddqWyEGwr3u9Ai%2BxZqTZuS35TMmY8WspKOdN28T%2FG0G70QnesvrKkmX2CS533op5esJsejvh5ZVA1DIZRIkmBgwsVt1%2Bb22VSRhrHFarpmHdZ7mLFkgi3gJyqRyej9Cnie8X4YSek5mtwZluqFxnkobDGABDn9IL5zm9CSRqe7j3Ix33tW74FcTb2ubBe5Ix6tpvCC8j%2BvmEqlj9m3dozbwq7FByrTUZBiIntzsp8OwysSLpTbo5h81%2B17iN5YVXn2yB3p8DBHqEFbOMYlWdKfSWFYOB3Ka4MiABoIiB5y2oZ3Yba7A3z38EHA77gMUE4CV1Tugom0hUiGysdaPWGO6e62yQGqBNH94bK%2FtVUU6vLuCGyyToRs63DwTx4RbQFDWruQqHqSXjwZUPwH4bSuQ5stJ3HdGm9%2Bq0qn9zEzCNnbbEBjqkAdrH7djuZw05ND%2Fb12qyqX3qpCwxMJxB0BMos5%2ByIZIU2oMqaqAPyAUtjv2FyCIdeUUWEj7AY1cz0X%2BDEJzX9EjA30OwwmZWePqnoBTmhaamHc72kYg%2BX3sfEqef2LR74FM9xF9Uw1X1dV8BnKygxBOvuS7xILHSEBK%2F32p3RFpotkmea9kRoFDRGL8HyQbBrfOGQwf87tUSPYCxQYBeNA6zMdI1&X-Amz-Signature=9a6228e60a61eeb20bfca179ab2b94f30931921022c6ab3cdd422546886561a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646CD2AI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSCICE%2B8ogcnZegcx9EqcsONqNed4ujpu6PHa9raao3wIhAJZ7s1eFR05FAwBc%2FnICleBV1I%2B%2Bt83oivLqXOwdV9yhKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTtrlVGjI%2FDUc6DZwq3ANFu805G06cZLMmfN2REJh7KYgyOwTf5FU9Y2U7%2BoEYKZJ0o1%2B6255uTAMaQ3%2BALZnCWAkS1AwnB8AMkFThyucOrnjpBQ9akhJVnliK31lsqeE8SHhjb08iAM4r1emLys7dgVFQ%2BLPVHxg0icRHHm7%2B9UnfNzHPJLX%2FfDr4uPWVeYmnavS8AEQa7LNsRMZxq%2FPJj7xpqN0Pdt%2B3VAHI4mmkeCrUosjAy7nQo7JvkSXbYxrxAEi2dQPHCvkK3Rfnzro03JOwIvtAOmtTfoHGoE3hTYfSUlCM%2BzeEbXsbnLCH6n9%2BNYu48Ht2vyTwMVzf8Shq81vvQJASjHyqybhg3D8x9BvyrsZDGdmclBN6R8AlAHQT%2FVKMJWX%2FlC%2F8WjVZGuo5WOTm041f33sCUhqYKcGluQgSmGpnGKi0rQoraLvve8Mx%2BX8I9NG6%2FwPSBmJDt3n0EsHjaZwQILAdDhdypehreNfdwhuMd5wWqYs9yWMOcOzOjTbgPeY95WBIsfo%2BJ%2FTWIz4mA%2FTMUJ6aLLuDZ7gJ4R1QyC9ON95WPP53Soc0%2BBpEPvTuNqxA3A%2F60p7BAjBmZygYMUu9UOBy0z2V2m%2F%2B2ta88ibPPUFNbf%2Bwqp7%2Fnu6oLM%2FYLEPoInbmbDDtnLbEBjqkAR6AA75DHNbdWfdCmXQxWIEJ6nC3yGnd58XmyAQeX%2FZv%2BR%2BSGHgOl0JYlZpS%2BdtW0lpKPypE%2BNbHvvFwtFl9e9lkl9Mpi3CyAc9y0tb8Eii%2BPzKo0YD4KWDWuo5cIFwGkkAeKlEoR2JD61gkn3OzBQy3eJi1CB5MokMfzAL3vTriNoCK1ieiOop4eSgm1Ifx%2Fw5xsN6%2FpR6u8m%2BYyRkWPrDT8UsG&X-Amz-Signature=ca3fee8329596c659c2fd4abdcba6bfbfa258a4a4427930f83abc03c3d7b9b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=507483899321ef4c4d14643d6e7c22edb6e57ea8ab83b800c631e069bc1256eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JVZHVZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVkYdALgwiPTumTxXqzg2vIgGtUNo0CrWOsoZs%2Bt7G%2FAIgPNwx9jRPntdr41klMy%2BcP17jA67u5qj9zDMFfkLSbaIqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKrkYbfwyKAFEi6FEyrcA%2B2fg%2FYi%2B%2BOGRnSyTHXj92jxEvUB6GbqrjX3Yue6glTvMKt1hudhiwzMreyh4q%2BmDl5IaSv0SwCyrXcHotmFq6hzHhAOIZJ%2BM51ACvn9BprQvxQysgTL5kCeRM9nn00SekGqzL7z6y3YVK%2BKxG6AS359r%2F%2FrLqe6DvQKEkszmvXXWi2E%2BAFsml4REI9Z2AhCzA7SPKULRVTQdrUwbWOJBcgVSN7L9%2FHU8vHtaGlE0GQccI5nBDT7HprIEqQaqKV8zh0%2BrJMR%2FeEUgYvIuN8k3qcPtCFO%2BXYJaN%2FhP1Bu08HPq0wB2jWyHugiODn9B8ha8faHfBtABLBwxCY3EmsF2pVvPKtpcjE8r%2Fp8Vt2FHVXBlf9am6dDPl6J%2BBZlGDt61FSHmbjpoHOG2aWiSpHl012KkGBGSZ1ADcu6oP0Woo%2FOkIepWwooYwLFp99fDGxCOPnlUG4oyFZ%2Bc78x91rgUW1wC6J8LrycpPv6bqkWLES2baOLRkRzz%2B11AKIdtqL7eyHcv%2FkH2NIAs8RMPjVnhScHqe5ipvJZRjf%2FjCmYbjqKp7i%2FKzGwXwNKHZ%2Fnxum7wTw69WbgV7LmGrMM%2FSDwG3%2FROtf5LDoA4ocjWd2W9mT6crzn4tuh%2B2hNPlHIMMGctsQGOqUBzsYbQiDi%2FHwzs4rP67%2FLW4uhyAFuc%2FOg5KMvxVpFhR96JPzJEXVIWY0leLwiNYJrda7cf2t2DD1Sr6A3u%2Fz6Tancjt2CF5Mfs%2Fjm%2F5PoYxgi53zJnwI2xbhVUvgdiR%2B1iio4vjWBAe5fZPGdYSXNVqsjG4l%2FkBfuJT09d8qUnUTmO8P13xJVvKYbu9cXbsoJmS%2FEPZz0x%2FgUIgt%2BdPa83Ht9vxj7&X-Amz-Signature=c89b0d0d0f6b6441fad62d00de190a747398ac3a8a42deb915fceb6e5fd38d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=da7b6414d26ee0d03b216a003e3e2a5e3fe22a96d9953b7a9cf2b12b91e45b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKZXBFXH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2iCfgRorf%2BOioyX5XwuCp4tJ0lRNjv1sm3377ywYvQAiAEEXLh1Sqw0LW66VkFExbGx3T2jH3A%2By53FKom663w1iqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdzeu6VjG5DxI3KXvKtwDwCPm9ErmWLBQ0%2FUPzRz633HdRptNTMBzA9YK%2FpOsngO70Yh%2BCxSwgtde8fNH%2BModwmKIVKAMq7VTonSfyQ4LgHZqBfNmuBbkbWZXF8%2BbHaSjiwc0cDS07eqoZhUmkvCdmZYj7XKdQ7yX7FxJwNBl9lnZ66rOEpsHM7%2Ft%2BoiLag8eVLZroCXrylK%2FNRw8P%2B5aW2QsCALmWzHEPahlUDdWOVqrqx8bvlaPv7ZTBz50AaKZ0jUEn%2FpY%2BzvAs1x%2B7LgsroxRLHxs0VaBm66gehNAWT6a5kbDHQ0dxngcnhVFayrYdRS9gO9doRqodOdIv4vtLO9zbIqX%2FMbO0xsq4IsBrcSQLs0Klkp2hnEV7iz8O0%2FMkks6sOkPTMNywU5imL6mAg5bRcKjmWKrINvXtsFzN25YU3cnYTvAT0I%2Fq%2BJtFWQ4r2uXYnmZeneK7GghnhwlJ4H8UYXwoDjQAR2NTzXohV8Wdl2e%2F1dUevVddWDD31OcEMV%2BsmhjtVqTeBDK9CSM7LSRDim88YNedO0EdE80l4QjMCtYKpBDo6jqc6QR4eH9e6I4q19qLZUYlirRAzQv3uujeWB%2BcDKBc0aE3VaWqd7Yciy%2BWcCyzP4vgMGyafZQfdOYg4YA5FHvTqUwyZy2xAY6pgENCDr%2FExc9IGWJrb1T%2Bqh71XyfSodmpI6ZUUMKQH%2BG5tgyRNTyOMdvQza9C7tusxzfAAnq2Lfz2EhGuQubZWVZXvgcaqYUfzoBnah30Q7CPb1aeXR%2FZjhTS%2FOL88fjH9EnDk2fjr0hWjfd95lemcHkS6iqkSmfbHO%2F5e%2FKJune%2BGevy6r%2Fm%2FmO96EbBRnFDuCuYAv6D8XJqrxWg2QaPCkDCrv5saNR&X-Amz-Signature=bdb2b5e90fa82e879a00410b9542cec10807484fd8f19aebaa8ec1eeb974a6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=48836ff6e776c5d6fad11f44c18bb92e32633f02772b481b29d5af7c8348ab68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUDFNL5J%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7aIpafFXYRSd8%2BjtTqauExM1yihePtTuKKNUXAtK0TgIhAPOVGoBmBA%2FimN8fnhqajsMEDOQ4Xk3laYhTVPyT0q6BKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsav4gSAcPebJ9Gncq3AOtDYI4mf0yKgV6u9%2BzvJsMN9sInQW4Zh654i19fGtq%2BKLN0QP2sQ42ziD3UCRR%2FJF9qGn7t02AVAH%2BorcW0%2B10XqKVuXZkSPA73O0zuuCE10psiqdJXqR5K8DSAxKYMunW0pn4dzqiTFN%2BuKSNVFHbi3hxegyrC%2BOskeoiZ8yAF1pFlPIJ4AJwe4WYBfWxWRKPI5Dbtxl%2FVEzIxXpIKyB0Z%2BOFCwSZUaglUfkCveNaESvbd8tJ49ck3mIAmePiZNV7xXG3cc9chhmbwQ7ilzG1Ias80gbA3XK4hekoHphcG0%2Bes8MEL3sTgL8Xr%2BuJTj27kqCGnT0W%2BlS178ut9eGnTZxvDpCxsmFGlGn9vnJSYq0lxmYGbL4AIIW18zMj7A%2FHM9%2BcWvs3yrOWYTW%2F3b%2FOiPs0bic02TXfTs%2FsS%2BSzUThFmTNAyyeWJ4vVZm3FGLeFLgtN80B9DjiQHhQrPV%2FnNGpXHXUiyVRgEbsO2h7fT2fo6SyEASGYOipw93OrjIJxKsdM7ynpbsd2JOLJlSR1b%2BGvpipYk8tkd17M6favSUpsUqxrOEnISRED6Mt5WPL%2BlpxqBEMoCy8pDx5h8mAXYbf0aBViYWT%2Bv%2BOvBJLQDxk%2BVjAq8FISZHApUTCMnbbEBjqkAbeJ%2FwDard6ZWDV1aXZ6v0x7jTEGaDd5iAOJwh9z7jGUoHzIMZU%2FV0UGJmg57gdXlmcY%2BfF1Ds9C6YLWnLgnrMF6hh9Vm%2FjXhuJRDB%2BjPFshjIpIniR4m0oiGLo5%2BA%2BXbQ6iCHX%2BTHg1juJAn%2BWTtRVUYDbP1MkU9dOe1ktsBzMvcdPBw9nAUG7hTrPRdsBaPm%2B%2Fdq155dRPQ7AM1Ny5kd%2BGRv7W&X-Amz-Signature=ad8a86da6862a0161fed6eb3b1a999b893c9dcb5523c755db1daef9b443ebba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=05e58117a29e4be1a3daa00280bb6c6ea445c81a0db15da65f1b2862fbb70edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5VV4L7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD39ssOF0z%2FKbE2CktrZPzTr9kNsFnpV0CX88x82soT6gIgOrAeoIKkyT0y26mLSlM%2BjacV0VAO0FR8s6occ3SjiPsqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPQFOSD4fTWJgrfQoyrcA57WEIE2Hx1v2CUTh5iKjfsjimOPsmxm8t7xvjyyfkvopbk7mZdlFxeLSSXyA5%2F9alGWZXRpID9WgpGUjWddXi2l8tPgp5wnwDQg29oEENpz2oxuV8HWPyKIZ%2Fb9ED%2FnM%2BWHiFZCvkHtlNYgWZbw7WuWrexae5yJdFr4vtKmGtIsxzfGgtE0dNiStxhDXTstAht8dQfkKgsZDqcdULpO%2FQ6FOMH132wtCH%2FpbbNlLdV9NCKJmSS8y1UI%2Bu67fPTSdiu5LZLDteC8Ef20I3uV%2FHKZJhDaTZPAn7fxLqxv%2BgNwsoQguavtstTu9EERHYq7213Bd8nvObIJi9TDyP1KWkC4KakYZ76lUrKFcTXu8kiGYa7tagnn09eZ13DIRDVWHmZ7uCvTrRnQBcUTq6OjIcKMhza9%2BJ81LY9%2BBvrSiRwJmfHmj8l5wyTSyjaOqSEwuKhcHcfBmuo426aJRuev7grTUwwv8WI99NptPYbk2HAktw1lw9JCw4AfLIJ1v2V2LncXJiyLFANHpSwRu0jg2Wa2i%2BN2lZh0CtEMDTW2DVr79djFuvercfZ1bYj%2FXrA%2BYGaqrbYgJoxDTXoX%2Fnhpq4NU7Hwyw3TlXTUyTMvpOGvRUMEBOmh82IKd1ALRMM2ctsQGOqUBRHw%2FLbRp1gCxdK8ZHwvLF68c7KfqPXctr7j1%2FPbstIHwQ8G%2FhNGmNL9oqmQVW60nexmIS8MFuaNjZF732bfBOKQTsiS%2BiSQYXKPi2Gqx62D2mkOGu5TxNC0joBIIom7nUqu1CLwuiOHvmSzF23JxyQqfmFTLw0pJS5b%2BIT5ZmgNJAIRju%2BuNZusDnHjQn%2Fb4XHBORDKY4T7Tv89TyDf0ibfxVJRt&X-Amz-Signature=025ad7b9b808a6ad3eee15f1dbda5fa1c7b58610036f1c5ff628069504407f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2EUZLWV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdLr5GLVAChv1iZsW5GEu8TyLKynHVy9F0CK8qhJvFXAiEA0fhLHqsyfIMriHd0SoPA%2BKLtYOnePZoz%2FJaPQ32m8PgqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSQWvH%2B%2FnZiIF19AircA4M7y4eM40b8%2FxEkrc%2FdFBFUfNqQhB8iLVKtmjixvGwvXlDTJKyeLZFscuZUlPnEV5P0meB57mCuD1SRfokH%2BioZ011hptybbeatz5dc5wRtxCV7tUKF4cWYZw4LQ2FqDQjOSzF%2Fgrg12We11ueCRakBTSsMWGIFi3kPv82VfKfQRhzx4%2FPtHfuEo7GqpjCLoaLqIawym7gNm8o0w6szVWnWIp%2B8mVgyIRi49IGRps5V6FaTP4r2uonceiR64v%2BhWHYaDTeci6uj51kFfU4kD69MJq49BLD4XNkkgSZHtRpwoI9V5sFCiZ3bWWgoKzJFz3E6%2BFS33HXG1gyiHkcyrinOBhgvHjyWgrWINs%2BeLLCOpKF0dDvnJcB5SSvGz%2FgFDvcDNYl0i3s2GuulKUxKY%2FxgEt9w7iDg9BAvrMFObWgWtQapP5KFefkqTmpqjx9P0ORZhlzIZDmHlY%2BToVbGlKe7U46I8zwU%2B5ybTNl3HZ6khnsbcJYuvGty3Fm3Pi3I8hAHHLFCAR2tY1zm789M3MquonhiBCM%2Fir4WUE0oOaEBazq1CDhMvYvyp4l1T9dQ58qFQUE6pf0lZz6cocq%2B3n27nLe8pg%2FMUH%2FhhGcMYfyUA3Q89NDaAXBGuYBfMKmdtsQGOqUBu5RaLUIAeRE%2B%2FdKoa9c86rIYfzgGYYvvoxM0rNoendxErHZSkeQ9HfrbQaWf%2BpnQXlByf8WkE6apWgtwcjeDpcwuMllJ1fkvr1wdh8Ud95FhNwSCpahh5%2Bt2efzacgtXd0lLIenQc4%2FOBClp4Ub2wgpEzU9PnPjgkmtBEe4PTZuqZjGAhi%2F8De%2B4D09MCbBfztZL7Hibc2IyhpWIMXl%2F3Si5n%2FK6&X-Amz-Signature=94d08de292e1f2ccca8bcf2abbf524f6fca14c4adefa65d2f6bd8058d4861f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5LABVH2%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqYqUOYqxHQEzGglUaPfiwXBsY3zI2tnlOECs%2FjQDDkAiEArkmOAFhfE8AfGfy6jW4CQUALNvllMO1Nl2QBx%2BksXNAqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzS0OGXC9cb0j5yNSrcA7FpH2nVkH5y5wrPDoa6e8H5eZLiujacTqRTkb8MQM9WjcLQL2qUxP%2BxRRNhHwOKT2ILFeBLEKMMUaQBBjthZYjuUh85%2BZ3m80nWkCjo776urg9h80zupl2r378%2FDuAUEBfjJH5wl%2Bs3fy8bXA%2BOy7uPEJ7Q0ZgcUkkK1rgt9aq9OP%2F0GzIlUQ4OlURxNMwJp0Atg7GiFFlqfDtr3Ym1QijpUG7%2BG6RqfOM88F7j5T20NBrgRGpMwsTOw2ugdVcdjAogKdqQ71P%2BABqqwMQTEg3iAjYqjscPcYgH6KGcPsMjHbKiB%2BIy1vqEphGqL9NZiP0YSSetVO2nORtG5SL%2F3HmpJYurd04eEjNTrnunX3gvZURLgR%2Fsn05H%2FfMS7rlM8R8mFhLgCPc0wAvxcnQkImhRjNu6hQN0D8d9uwWiqXvM%2BxxE4bGooq1KYCh7hEdvI9YqUqBI9xMypaqdLcWy4%2B4ZI5q%2FystkbZkYwoEzVfTi%2BE0JeWbgIWovhZG7YG34cpsOtUne1JzejDOXq6UF5BvGCFM5U0%2B%2FxEZdNqglZqwkOwSUxxtjjGs7mLkfZecmhZl%2BtqLBfodc1%2BgsKmbuBVbU9523dsIXyeFFELzOZfWhMmelSr557TzQxeH%2FMO2ctsQGOqUBdwWCVkJhvRGmshWaEfJxV6o2drtMKorksVslRpM7EW718B4%2BRTcMdHc8cGIVkVtytVS%2B%2FYP8UWssQ41NWXXW9YEQoMgBtWG2T8H0y8bwCyZWCxUD4K7PQsIIFy96IsksTmJSsiZceljrh4%2FccQAeFx9aGNFZrItRzb%2BPz1kLfQPkXN%2B5HA8mNQBD66FDWZNii5uQjudZz3vZ1w%2BxpGfzfwqYOGSh&X-Amz-Signature=01805c64c170c3fd3b041e7b02145efc6bc833f353a7815a8cc621b6ec5d4388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ALZ7TYG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVp4%2FCRkauzvAqG5hc6%2BUwme1nblUkXcfTC0RmMBXxOQIhAJLObEWM2zSSa2gVWaBbjPGcNwYkqlglfMRXKwTqmQCCKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGYI0uVej46beMjxQq3APf5GsdEiSI6pF8%2BbkcXwWvbrnTq%2FeEoO79036qqFhLkTztqikH%2BoDKuh7VzmQ%2Ff8vC%2BoAzHWrhtJcVvn0aBytp7tA4Md%2FzMq4LICtIsKmaY6i3XEFWJhDWiF7pzAIKY35IKMd3Iiieg53f1N%2Bj18ysrlRGMKQCYrjJRgAqOsA%2B0hpd8LpCGGrYwZDVah9di%2F70B9Z7TnQcPEvi8YahCTTCA%2BQiWaEm7uh5%2B5kX4L5rEe5%2B51WUP4%2BLO9CdGjqzy%2BjZp1OxbOZvTtlM56suf%2BF16dGGJZsSPmUqA7j5sdhG5OuhW9IJ22wqnnklVqHTjXHV4hWA8u%2F7TCdCBdkxKPxGPvaG29fqDK2Vj3P5koPDOAxycsVd8FDaZqihtywxtoYjGIjMaXQ3w%2Bkby0y%2F0up%2Fl3iGL1Kl%2FMDdE%2B6jzNG7%2BsFEzJXDx8A028TT3W25jsDI9wuiVV0xgPBJO0L%2FndyWf8NSWcaIuJTeEPYnw5JnwWmC6xHN9tUb%2F5ZEIF1Yrk8LwsZeyJyeu2zVywJckxehRNFEMAmsK6cNrbE8SbhZVSX%2BstvKLWTnd666elZ5X2fon6imIspIW2LH6WrpVNCV3DqZ7INEQ0yX0gpndR2qeuw2yPD2xnD2qBiTfzCenbbEBjqkAQVo%2BdT9PGlHe7ag9XZT6YC%2FN0uL3obJdgt1McG1uGzJAZbolCG%2Fz78WU1SzXQiOwIoQodf2eGL6luR0el8SkgjRJSYum9qoaCvolWhohy388A79NduDwv0jEU692EtDOK9gIDO%2BEiUksAT%2FuMEzCaeBTbq6ZzTYdJmsA0%2BXvt7%2B8cdWBwWUOsQOLnPxxtOk3iHjFyV2bvgbsH5w1KQ9jeyDi1QN&X-Amz-Signature=3225e3109396f64298b9f0ab37c08e49a9b33337c91369939b87df22e4a3ac76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE436IDT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq8yAD%2F2c2XAOag%2BNGZkrC6rh6xwo5v3FY4ujdR5bq4wIgds%2FLnUeLzvuVhYJfhQGxQYeZh6%2F1nPZwnTZu9BhQR5YqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsODCBJIe%2BXFt9oCSrcA0hJzfCZHCN0Gw1Gua%2BZo9yerqoCkOJ9TePZYavDSjdI6UypjLwIKPeF28q7YotJ%2Bw6WR7Gfq9iqeESsnVWrE899bXK75D21r2bTBFVgW8OHP4qE8q9Kcq4406rJFhpep65ha1G5e3e0aDSMpiamgykjWvkeaAmNZTg32MBp%2FDwTCWjw5Lis6g3LJgSWcxKPypz%2BtA6asVkY3aTbcPqanFywVg85yl0ZrjMiEc6ry28At5WTuPUFqk9K%2BeDxvraY0C5goZBrYO19hAlCMraYV4m2KGFPDTpOJK%2BfPNqZpHNyAaRJfzEb7oi93E01H7SalAQQkuED5L49GnYV%2Fd96nUPiurBgeWuIt0Ct8u61X3JEDv5ikvTRvka3GWjHXUXyU8mI1Ae%2FRfsxoL1BZB%2FHcusRq8sMMC0eYR4N59WuICZM43e5FWMIvggCTC9778SMQlGcz1ovua9Wq1F%2BwhMhQUAhDitPtw8fIFbmU4a883V99h9v4KUchUSQ0QGgnjSEIUedd9Wg2O8nnCAJD8Gm9OOqSBLhwtrjmQufMdkaw0KcoDtG645bG9RCWXeBXNKVbNqw%2FAFDCajImtkT9yJcWa3RLyJnrm3VJI1RRixFhew78Wi0RZHFKvS%2BT8zZMPCctsQGOqUBEYEoB9BLdy3Ch9wTOg7yBvsS3zlIJ9BlYKd%2BtUsi%2BjZkyDKq%2Bkbqs1BFF2LVI4BMEr4ZcDVTX6q5HmZluaBLC0qcRkJJ6%2Fd3Sd%2B%2BSfXGGhNjidGul%2FZD8KU8enQLmmlrDgUXgYLOm%2Bt3tmvussZ%2BIUMhCjLm7YRLn95djDmYQwNGgFa9honR9OB2IAVddtNsl1GKdJaTy2vwb8IPwG2eCN6bB77x&X-Amz-Signature=69b713d544c2102cb488ea5647d5d0a8a182d78c14e5075780c9c4ecb274a28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAI6EEIV%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV5VIsrsjVz9FCAQQjRQFG3z1%2BXJMWeER6z2NN0vItaQIhALp8GxBFgtc7QaUO8IbHlk65ZBh9H0Qfj5xXoehaGNIuKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7QwIdDyNL68XmAxQq3APxLMPxa1BZACrWWSI4v09XCJoYsm1nEerYiBclCoLEG8wVmhzuP%2FBeAYsqdR4ZUNo%2FKPP3EUV5kKg7FBDWx3AI82ViO5%2FWfsYhJYZAT7GC7E4GmshR7EkCW5FYb23pRA7UGaNFT4T1Gri%2FAZLdXEHNlKgvca%2BfCIjNZwXanmVinl%2BXNdxtHqLEhND%2FlzZZmF1Oc0TKwU82QKlZQadV40WeuJ0nAvNeiRh4RUXUWC8IUOFXT1GFY35cMcjfybKINLOtD95uYs5FXyDikmeAoKvwfale%2FNb%2FAKV5EjcBQp5xiaB8n%2Bi5PZ%2F%2FZ%2FM%2BMNIeDAV13zdX%2FZ%2B3kN8Ulg7ZC83gtYAwSV%2F%2BIyLulEoFQrmh3U2KG3MbPA76ejXnzYcRhN2hJUYtn0jM7xL83FFBH2WIWWEJX1gtvGsX8LQe8rD4Do7cXUuI7EUcaD07bc7DCfpJ4dLGqDMWN2YtSwmY40SU%2FrBssU6QLAtHknrhXOlMoImjWftuLSG%2BFZOUheMjqWtPyM6sSvBFhsBo1hEVN0VLY4UGoW%2Bm4em1lwoiPrJoBd8WKiZq%2BKZkNCneA9250u%2FW4MXOIW1A%2FPZOL0MiDq1%2BCXOu7ASPpPXjUezAV25l1NIKFOlb40GCM05N%2FTC%2BnLbEBjqkAchVjoWc6WLoqVmrl%2BibZSAxVnTfuApgLJTbBwZyViHt3Qz6hU6w4kmyZFlxHO0Ooi4P%2BadgLDY%2B2twjB6MrLun62KZ07yxPRa2k8%2BsFH2kRXeWWYcic1Zoau5dQ6YrKVQFcfSfe6JN2E%2BiUReGQQXxiM%2Fgy242j3aFONwlletz83ecJ1HK28FWItEdq40l%2B8nB1z%2B0i6o2Ax2kDDN9n0aTmpqal&X-Amz-Signature=ec044f88e6b1a1426e4bd7f5d86a11d6110fdc84d6ff95bd495c21bd68405a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=2e5720df9cfdb2d9b24886305f61bcc90f9740a661d3051c1944f350a1df2dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=456df3368613b6c546ec230098ac4e2e0fd61b331b69490c46a722a57e7d1841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=a3a203e4efd2dfa9e6c99cd4b13f90456e763ac6087d956bff142614b0cbd1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=681320a03e4fb580a1419171074830a07bd296dff76a636bb017c93c35efacb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=5038ee467122fb2af529ad0571fd44169809a421f8e7d4f5b74cec5b85dde4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=a3b727ffe0f76a4930c52e57ef75bd8915833f254e047573307d21bb2c0b48fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=9a7ca25e9646b4ba53c93fa5bb668c7d365b004ed7bdd9a13c60399d03769652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=c944a6954a1d4a3b8fcb33dd62ee956403563c2d3964309819d3508085a731cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=840850a14d852f92c3a450d89e472ead88095053934ca77a3a0a4f0d3d4dd5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KZ4PJOT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T051433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHAIZgZvWH8JiaLi2nDeg39MMbFDSjU05dP2PU%2Byrkg3AiEA9gQdfIHZcoKMEzeiAVn5JmVEqmSl65wn6rST85jiq%2BUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsLFOO%2F1Nq5V8rJjSrcA%2BrYi4KnJLgo3vdttYsN0om2s5t36a28Ozi8idjpuU2yiqgtLqKGo7tEonvcEXQi9d3AASl%2BCTyIm1sLLfGhiI%2BZHskpT0Y9OfJmFRYTHmgs7EWQuY%2Fq%2BsaVHyH1bzDcgvJldHZDUcsDhq4hsDL2wQO%2FPW1%2FKfNZIJ0MC1OgSW08VTotYta7oey4KbBe8JER4UZrd2dQCzZhAp79g6Ncsv5KhdXNFMHuxjcy4LlXfsYkPpm%2BDYZg0n5uJevQ%2FEc4UW5foYWYuJh8MPjDrGFH%2FOxASnelSYAFaRHzMmH7x6JP3qheCqyc5ex%2F%2BLPf6Csm78xxupPvFTu0XQ8PKtzKvw50kMCNVhNv%2F9CHLczT70Ya01yZQiznT3be33q1HFhjSsvt3R8U7jEV34K21P24ihaKDpfJ4CSISMLPyMf%2Fa3RtdU0L14gjHaY3lXunMQEDFkiQHwhxX7%2FAnMMQC28Ullbl5ZLz4bu%2FvzI9%2F2%2F1TByMSJ%2BM9fpXpD5pMU5PBnOnMw3nt29CCwQm5DcGNbP5LTlygVTU7yHvS5twAX7if%2FGoFVLscB89GNUcMpkn%2BWp4dTDr9%2FQNFf8fkrhLASWGYXPKj096IMWrQHx6bqY8xIOoom8mi4ToeqD7tM3PMKqdtsQGOqUBUrLCp7yl0kFqFujLJ%2Fn4FVEJx37KQlPzaRFpfPTw4RFQJQEbqQ1tef6Lx8qaFIbW3Gssr1bWoKK%2Fo%2FHmWLxj2CJ8k9p2QZi%2BPKHVnl2C13VZaM2FQHS3ijk2OMOCdxuBnBuIGZLqIspM6ob8VFdBFqAylsBt7CIiQDcZ4fYqwlup3qTOfPcZ1pW4g3GOEasuonG5bSN6L7yw5%2FhquoCRfobDTquA&X-Amz-Signature=3c7f024b8244b6086637b840dc1c7578f16bcedadd25c5c9ab8f25c577eda571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
