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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=b53a74f2969a7df5e84265771b75e3ecf38af93439be4b49602290b866300343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=1b36dd746a81842f2d084d68447d2263024d652a4d3b7fdebd7cb69364425d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=9cab3d956110e65d59d439c30cabb2097944e06af8453c7e5c7af7538995b516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=d3470d09771f773741088d41bc1190aa374a8f886d033144dc7d5ee7229b4290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=c6eb30e78eaeb388ac5100e125447490bfc865f03c3e0af038135fcf7e009592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=b5ee572642592efd2fb8a0cbe3fa6cdeb92ad9c5f69f4b7fd50b30c4a64d1469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=ed5f0d6de33bf267af8216b877b92059024ddd610d1af88d5d4557ba0d4e1c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=86a91bae97129fc7455f185d872efbeb294ecac27bfb64d8fe97940f5944c558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=6864cdd0d9dda710474a591fb3931e8bf2c44de1d980e2281e22ba8a81255311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=faed4cb4262550e1d47dee8eddbf671806f216eaa3c0a6b743247c275c160616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=ba8d4bad7e227b6b6c7ea025e5b24b5d337d8d46977f026438f499fb2fe4d7c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=4eb1e30526425255a489201c6892c58ef7ca08701aa275d417c277a97b4d200f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=aa5a1a8c41067a57398b923c0eb343a2e5c8a9e47f81e99a3d1cb5f0d59f395b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRBUN5B%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCICht398hshZPBlcKvH5QzWi4OIQciB9LyHAhYuU0QscyAiEA%2FlzenYuSxA5NZPdRIvlz4paIz1BeqtLCQ9QIFYhv6xEq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDBg%2FUl9k7o%2FoO50BMSrcAw9r4uKoxjmGKZhuhSihARPds7dRYbWQhL1rR7slaIgPTOWwgQLLk6htB%2FgGRt8nR6gevLs2AAfbuWbicmUb0jJqqydHa49SYeN9M0euIMloQDOCFevAGc%2Fez%2FIAaTrnPw720BeZriQW9Jf%2FVLZBd29RCJs5j%2BOn9FTrknlm6sfDI5Gs2SX%2F24Vn2VQ1%2FzA2eeeX2fcf03EiPhIeEI3mupClBCBx4dvgDuydijeV5ueF8n8Sbo77NVIxzco5md8AIDt3WeBUafCecmBqVR3eU7NxIek2WUSosKjcb1apXmVQjFmZ6SL3rcopV%2F%2BqCHlwCG6U4E%2FYBfu4rKbjpnD%2BBee2fnZHtOTUPmo%2FronH05vkhfVwpjcV7CsbeHqWcpR7oDVbQXI3E4v%2BIkcPq2FBWgU5N9cmKdoivyF3%2FqUEU1qaiP0rryScVPcbVNT0FotX%2FmOH3yZlTuKICVhbHaRpFOlRXywFoveHJwedvI3wCgLuKGP%2Bb1DPQw2AgZKnyMAYnpw7SxJ1zgISPE2kqXNi7ON47U91zqes484yTdsBVZCHKs5FViEZOqdOl8o7S49p3kBVJCWKiv5s6I%2FAFCDNb2DbWQhFDyEk7g1BJB4er0NqqfmpY6iMGT%2B0IXjAMNHikcQGOqUBWgzem7VLwXbw0vWKynwgk5ZbYh63nMcEpFVJlt6HaGn0cQ9PqmR8XnlHdzGL4UxCLvA5IGvWdv9Isl10x7TTz6S%2FuqJBKFOgOeI1zqJbA7mXBaMKQoTtoQtO%2FBiEkAimlyoEgArlxIQT01gmDrPdOT8UGFxjgNyVuvbTchR64%2BK18UWa6iE3tnqr1JiSLf66ryNQ%2BmxT3f%2BBCq2npZ%2FNJY1FGefY&X-Amz-Signature=198247c6e368aeeac0e51031761177197bf30fbef19b4bb30dd83cb5f9e2cf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=2a60be4580e75e51a2e5db2f19195e6b8adda2c9a124e732adb7d8fc354cd73c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=eaf582b1a060833d81b9310df67e52901f6224297a95b159d28253a45334e8a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=7fd5234a87762e869cbb98fb03be4b6aac9f191aeb3926a26274af6248a9a883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=9f2eab1a0896e9d6aa0975d432ddb74483e249bcd89edfb8cbc9d35727ec0619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=c5df8abc9800516b8b755a702b3f4a7f5cae69422e00ee6f3148e84fcc495388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S27FL4FF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQD7qedAIxe%2F6TBC%2B1eNAMpPOQMKQIVeHa7irwfgc2l2kQIgDsHix7LwTb9Q7vk97anmHhyaAUP7Rv%2FHFCbpncJgs7Yq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDCT%2Bdy%2FylKckOI4QNircA6kb53f49rOXSujfgiYUdbihKpKi5ZWTlc943c3vbXoAcSJYznnCQfApeZmVxwdgwbTlf80BqldaOXPNmJbVlekumJhzXMd2HcV%2F%2BZqx6W20hkqy4d4Wa8XtXeaCdUOmGCvYwakFwIS3cwHLYynLZ0a1d4xlGv4ZLuiOSEL1ediwQjxOoEowf%2FDKbxJrMVR%2FHyF0kWUEHj04XOPTNaiaNsLXuHGGc%2B9RN0rGcjJ1AgcvCK9lHtmHL8NPw94N8yTfsOxHv27cCsPnEzDXew0E4usZaQMrpF64FPwGFyBPrQk1UWXstFELRLsTPeS6nkHPRKYGALZAJIDNdU2vo6dk9vsYixFW20a%2BBLYAO3DvuN3D8y8nne4aX0%2FdNG57X3UvNVg33jO28AXg2fbGUmj1jvdITKF9PEdOeA4q93dNPHKJHOErsjGCUe1jDJNljxhBDL2Qzr5ef1ZLwXVjaYPda4s9tjcy1YKKsNhdHQEcKsLsFzVRpqq1FnzXp53rYbpWH6zWFBhgE5o5HZ5t1IjZQLnxP2R%2BNFiVHUgGAfnKzV1vdnr%2B4NXZ51Xs%2F8QRJyKRISstzX6AkOpiDL2rb2YmSM%2B5kyk%2BsZQS%2Fi%2FwHMkJvuSdWbslvp2h4a0%2F%2FONWML7ikcQGOqUBDYIVXP20LRSWorBzcycYD43NihtoFnQw%2F2p%2FcFA8aVr2Y1DVgyaoafaoVMZ3o3wzE66WGAp327FkJjIyoyDeDYX5QUXqdwfufjDdbD3Mc0ukOUNi37pWpqAU%2BkQ%2FMueaibxRY3M1JGlwbmkb9PX4M97oLEyOvzEfK2FMHmJ%2B3HEvJqwArh6P0Z%2BbHVzu%2BeBkIIB3OAKcUuSpJ1GVFUpGbn8PCNTm&X-Amz-Signature=d7b422deaea8d57c09f9b38a0670a1c7b37802b84fb6843a13d5364e53b7905d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
