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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=d06f861ec3193e53016f398afcf9cc69d93a4da2e2f5b63aa6175ccbf4fb81e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=19543ebe743088712fd735730919ff5b9e29f41b8f3aba706534e0c6de4a6e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=bae7115acfcdac6ae5eaff6a7312df026170763b427b87194374dafd02cb3894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=dfcfca0ce74941106f7b91b7f2fec90be0415757fdf1ae064d29863606c0def5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=02c07f890fe4e81d8fa540b2af436c184909e881c4f01b9acdecfdb94da4131f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=b3b6529ce9d8a7502fe4a3d5f544dab72399a7e0fd3b6881ad8cdeba1ccb351f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=f13c1c8169e94a9931c5e29402b6dc3b0ccbfefbf4c69aabc3ab40fb910f580a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=2f61e37fa23053b8201bf65953c7f0cb4abc13ef96764a0af03ad31bfc10e2de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=8c638dcf1faaf1939649b2eed6fbee441b8eaf47499f2a893f37899f07222fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=069c1677b46e43bd77701a1597a586a884684e30fa0cc6a7e36e69426d50e3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGAOFRIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4br8D78FR%2FZnG4gj291LyfoTcExRZ8h7rtvd2dxnzLAiEAyWVtu8WN4GJ2ma9WuWNL35RhpG2YFCCcJld2lA6x1Fgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNVfu6PVnhh41i1iWCrcA%2FJYL6mv6cjzmOMgYN4YkRikcvZTwApPbwzTc8H6hvpVazW1uJv50iW7jDYAgPloL9LDp3c1%2BFxneMtWu5JFAlHFm75zjVWKMpFNVUTgI0hn4CfQVyLCDcsn8rK4fruO1iy94HDll4J0GATj8Kgj2MOFw3FcTVru91VEPO0yj%2FBDTC%2F3IPP562a0%2Bul1mv4ZffRKca3gokwHw23mAPRtLoWRZlemf%2Fw3Idg5DW2Cab2E%2FyOMF4XB9v1QXMjC%2B8wfSwQUkOejRckRGHLKof8%2BWPvFLCapFmy8BgEgFFoQJsG%2FN97OTQwkNZE3BtcH0NZM12DPgbcHOv5rmXo7a8NLva8ntaF2pcIozQHfPg%2BSaWsvO8HDs18PoU1HZpxIrD9A2JGGuZq4H5WAdjuPxLldQyXEIP8oVGyZ%2Fof1ydal0P%2BZgXu1PoD0%2BsrMQjNo3IGtpMe08jF774lKZT9Knyudj7e8u4UoqJygUW6sndMdsaR8%2Fx6Euk2sm6QlR3UsvohW2nkBpBsRGM3tGQPUn%2B4vZxY%2B%2Bq82EjdS9eI9wG7LqlMLhVvVhXF3ZSOuAuI4Gp5eMO5gmfHMW0TXTpujbQBVb2TUfwEkQou17Mo6O5SibbOm8Pv%2FDwfzyenCyiWzMJb88sQGOqUBu2w742aQkYhlwGp1evRYsG8VTSpcRzxVgN0FQmaF%2FBfRrhZk0VlpooOYF0XjuP8Bbj3XStLr%2BMwT%2Bq13PW%2Fb3IBJXCzJhKXN9YWwaQGQyp6fZxOZDc0eBr%2Fb1GB1zXodsYV7DMsiZ9fyM3p26pY9pUtAZCKdgMXYVSZGTxHNDxoj2UkUs8%2FcFbkTmZ8N2nzjt7N6Vb1OtVrPWYGAPuqPLX8Z7u0O&X-Amz-Signature=94eae4b78034fed067a5e2e94fe8d9efd00a61f705ba420150ead1866d8770ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBLDQRMV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFi6wySIHkVzBeeDSXTDc5EFHm8igQPE7cQ%2FJb7FPEc4AiEAsR%2BLxHiI%2B2YdMxtGBmOSw2nSfzKpv4Yt4CavaKFsvFcq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKO%2FPXaorvsy2%2FMhDCrcA2994uoDFe%2BvuSUUYsY0ACoAB3BjUmLRr8tt0tpN7B5V%2F1al1fil5hDV336CiqHWDy6MN%2FZdEHa0XwdVMqclWacHz0ZpKJtr7yvdaJPWoMvbMwvQ6qeH9GCJyNB0c%2FhHtJYvZGdE8DoAx0DDuDtVIHNBKFFO%2BwbqaJOCWE%2BpA2FMLrUpa893rxXNp%2F2WviY7PabnlN7IMkVoQghaw1m6YnWiLs0Oo2pnxmOvNuWeyB3st%2FgkPNb129MR5Z2OHjYiB%2FKj9zlQs9cCI%2F1zViFZSMgxcqqxMuKi5BWwyOVXgVoPZ2PF8wyPY8KddcZXARXk9ENI%2FDx8cWkOLAIej%2FLmzVHt%2BpCtDiVJq2H4T9OobWGz3XBFCGHu%2BU3Go2bBcwkq6ILW9ww%2BUmDaaC%2FmJjYgounul83XoTCC%2FgVivaSMYfo7Pc3RMV6GeJDGJrluG3P%2FxiF9BPsEase5X96PKJkmqRA%2FrcceV%2FJ2%2FlBanShPGAETXWOgCAzkltoMhcWHPr6R45oYTOREmnhMJVnbfczTqj50umUyIUZltCf1puKHq5RMF%2FOg4VMg5FpE%2Fz1iRavncNpb9C%2F%2BwjLY6FYV%2BifZWgEbQIXMBeQTOuPoLrn3mcGrk1%2BRWVX9AhSUFak%2FMNn78sQGOqUBV8UamCHJ3Dhjrz2x1Zg3oKkd6iIWgXVPW4fRoWOLUL%2Bp7hYAY3zYsddgLzVxARf142ne0j%2B9XCay5g%2B6R0SY6tt6E9EV8DbTzbz4Ht3Tuznt%2B4PVyJ3Otc0Q21sRqSjsbnjXOEs15%2B04eXjFfVpO%2BMVUaT1NXkSDKh1bENoKTLm1aR39k36iJcHV2fFquBj2i7ib%2F1EsCj5%2FAXLsLKWg4IlLeAsy&X-Amz-Signature=9dce271b1832c3f2e630d64cddcc551e32f383d5efbfe5c888171e488dbb18e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNDMD74%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClc6ahvxdnkrvtrDQe37hCJ9y%2BPz%2FDazxE31HLUFIu0QIhAK1jaJOKZjwhaRrWtBhnk9pc60TQYtp7RsmF7wnTRGKcKv8DCDIQABoMNjM3NDIzMTgzODA1IgwEVK5rCd47tkyWQY8q3AM7I1i4uKHQikNS3QB3SGMGt7JWxwq12hkMFmyRK9qvasBnumDs0fVLDPPhIdhOsDyzNSa4d4WRpW1EtPGSTa9DR9xIkdkQm3F67sphsn%2Byh4irjF4RIGh3WoBeKryFx%2FKb0NxJi%2B72J%2F5eVPnOZQwB1mbP3Z0skJbKnxZXguhJdjUm7fu3QI3fOx9xX8aKwX9HK6JydJ%2Fx5EVH7xMKUUWSn9XxU8%2FsRzX5zDRgXM0ER39Mm8RzoQyaRKJSajkvD0nmwOcYR6xL1qXgQQ2XmQMxiplExv%2Ffpyxm%2FbV86orrrujY5GXuid%2Fj2nmci1ifMID5eQbkRX%2FIxF82QRxj6F%2F1OzquiqzJiRFZrkjnshl3lkx5I2sRpmfREPPnibvP04Z8WgNtFeAMnlyy7CwDbinmaN0%2B0kJs50WW9jVWzMw4fVfe3AXN6GgFFa1Mwz%2BerBBS%2FujGqMM5jL78tNqs6YbjdLytJYvwGm2ltAlSOVKjDkN7G4UTYUkXu%2BmU50vYLS33EZlbchpjNL3DLHy%2BVafDiECPVp5FQPb0CmOQyZYm8pBz8bYJKNE7VJGeC%2BAIxX6qyzvotRQaQw3nCoqTZKEa6sd4hibkyRMxcqd0O3%2BDZvemBbSxv71%2FWk2B8jDz%2B%2FLEBjqkAdNfcrO%2BpaNoSCc6rPCX6nE4oZSEDzSsAJIdfjHnrKsyqjNua7ldWDa5CfaytM3AGP%2FYu72bAht00y%2B1xqmEp9FNZLns2sK5ueOhlJBpbKFQBb26b%2F7QFSuZuJs%2Bys3Jo%2BotHBACLyHvO%2FYkO1roY%2Fl5Il3CnmwMVqAI6RUoXNmn6W6spNAnLiwfGs%2FwxLpaCwzFc%2FKMulhu%2BaqX3O%2Bo5vw09Uqn&X-Amz-Signature=4a6cf544180bada408dfcc735d25ffbe1d9cc3b3342de4ee55f68ab72a4e6882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=ba9b2bd5bf91b35c62a350ecb6ef198c1c176d7170cff9443efc6959f8f8eca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQNS56F%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeFJwZf9QU4N5nh%2BxqIEboue4xP1uBaKDUc35en5YczQIhALMlZLHvTAaIJintLaLnZwkjA%2FPqCySjs15IIR%2BCynp8Kv8DCDIQABoMNjM3NDIzMTgzODA1Igy%2FT4XgJTX9tSPii5cq3AOBWhyTiIzeCLz6vc2KcVDIsDiOKuYR46kr7X6hofMhKCLAvwTWdXPMdf7Cm5eL%2F8ceFjDPbxVY29%2BkJjO6ZCVqWIm53QwYlRvP0Q9HGyObKBqUU3JN6ODrNiJ%2B2Q3sQ%2BTjSfJhBY4bq%2BcOJAS2SYc8uR27oy8PIaeJXa1cAXtPcRJyGHgaVF28jNUbwyKFSTlYqbqESxyMwWiFCkxjJfQ1tqRoalAFcwJT0sHxkRSAAN%2F%2FELe5%2F%2FzhDjVP%2F5Ge7iwH9ngD2HENi4e8chc562ZAI0rOZ7X6iZBLnw7WqtVPkCtnaqmLiDqDJLi6wLNzD04fFAXk%2BwOtB%2FMBhWpda1PUCCGh8vobv59q9UYROTgKkK5vRnP9kwC3y4nvXNK0bIQSlI3kGqiuMMEX85D%2F1GJATYOtgfhjfKgHK4pqi%2FhIOBQObbXUBWdaOC3efy%2FhV0emzxD5bZ5tjoGLZ2lCMU31tUOEKgseBbJZsVrBYQx6N2TBKY0jjGr6M4odqjlVc3EAw9dUbWxJwWM23tD3WdLecwJ8vgDhEuj7DddgqVSHza3vKHvCFevj1cIxHUI7a%2BzSPn8RpaxIRGRBdk%2B4DwRJZaUWiexdfH2eh3h40oPiXMny1CvalLX0iPn8azCc%2B%2FLEBjqkAbCaXd76zdaGfBNBiKcKTA%2BgRK4Fi46m%2F727ebnGz53E1ATYEdU77qjWnAJTJkAXG1J3n0vX9vMFhJ26hL1%2FhWHzbR8IYgOMaaXMEX9%2BwfHvLKcYv8v%2B2RmfEUtrW7hUFMC%2FE9ynplC%2FNwMKh%2Fir4DOlM0qhUkwhmwykO9oIJ3lsRiuz8Pze70ln8oxQXmkshHB8jdamoqB6nhKfUIZsdfmDuhMm&X-Amz-Signature=6a418da01436f428adeaa56d257dfd7e9ad3928cca481c7ef9b03e9f73312592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=694e03eccb3bb474f28e43f9cf3c6f68f0672fcfabeb2e5edfda079e7d038c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636JHG26P%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC%2FkAXU6rC94dCAS2i%2FpYhmKKU7BtdTzzOEHy3Xt7M3gIhAOqIGVxY5NAH7i6JT2PlX2hPm4Bvvh%2B%2BNJYGEMztFR%2FvKv8DCDIQABoMNjM3NDIzMTgzODA1IgwWSimlFfQ04vMYgi0q3AOqnblWY62gleKIaeMxBQ8MW8LH7AMhL%2FOUJWoITX1FS2ALFoJLnkrc1Oo8EvKHJuO%2BtiNxFxwqDA7P5mIm9WwrufUQDvh5OXu3IPwwv8zBM8pvt7dXcesLjb8oT0Vk5YHvDaX4YLjZtTDx8K%2B6dHXrJIpvJWZwoM8wvacQsIMSqer%2BSTPcTiWO8%2BkrCJc5Br48P7upn0syp6B%2BD9sYTP9ZUmZveucET85221kUatBSCp%2Ftg7JlodUqQWGydWUJEXfTj70SF%2FVqp3edd%2F1LwIdb3mee%2Fu31bngERp5qei%2Bc48hw2h83VQhMyTitGmPd7BAsf2jAhZSJf%2FazIZ93HPmsX9O1iRfVlfxI6OnFBtcb6hGqGv6f9pLG4LzAFLyEVJFhUwoqTdm2%2FZMJd3OqKuy6Zb9MJwt7YZMeVE7EWJ6X2nM8J3wYdp8Xph007t7%2BgNPXyBPhVFEUXzF11LTNA01WTIs3lwFrvCV8g7PCCleER7pEkNjYdxVKXHJG6Vo3W45Z4dfxe5K1GX3RBWxOD4U%2B0VyWvZq9kaK5SKl%2Bcy5pPHEwE3Y4P6Vn2aBCVlBClayPhgXWNTUE6x63ubnMQO%2BO09zIUG764XR6T4Y%2BZ4%2FcGcpaFmtGFHyF0SQ0PzCs%2B%2FLEBjqkAQjqr9xP%2FLJBmmLiYWaQ7piI1Ol6DZTX5gPQbgPRi9fZBc2X1ZFJBLZlfa2GKJVoOJ1rcR09S6zkEttQTk%2BxB7uGNYl7i%2FNwr%2FVeq9U2fkvK7G88YxmjgSWCNWJtk%2BfmLZoH4KuZ5ffiMLg7m%2FnkiMDMul11Ayj0VJhepWJ4jX4vrqDDEC4sqPWork5VH27PyPMZwuehe%2FlZUk0VFmoV7%2FBdCS5j&X-Amz-Signature=e132f776ad1ca74b6558581ffd594b8ecca85e513ce1b2e35ee83d0602aec99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=a072c348292c053172f1195598af12ff0c51f419d0eaa6d4c58f04702c021ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCMWG2I%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGuv38TW3LEPF8%2F1MhHkMflK4EoA0zfvXK4gRn2RV1SgIhAJ4l2Tj0ILCTh7xbRz9CV4Lns41ExB2GcAzt%2BTKsdGIlKv8DCDIQABoMNjM3NDIzMTgzODA1IgxpjwTIeu5yioP8SSkq3AP%2BT2rLOIzDfZIJh42Tp7FsX%2BSdgFmtoFqHfcf6tOC%2B%2BRbd2mHrmAZEMizlOqIf%2F%2BZekn3RTPtrtwt0KD2GHQeNVCdmITHMYEM4Mhm70ilzDZV%2Bxa8rNHpUgG8IaLZojWjapMXQIWaNbKiJ72hPhFJs6ZD1LDjCQFXkxxzwx6475FDpWMDuv9EOxOc5ZaZCQRvFcJyBR%2BfKVLFUDe3cW%2B8KQlmfMwbJZqzDcKkxaCYOO%2BQbeRaLuwjXreGErf8ePrV2JeDKHs2nDYGAwvnAWrsjeC6hgzGJVDPhC8IPGUBr6Cg3F6BQnUGaDNqBiH47l1ypy7VvoIgKdFRH9BrMzPynnVKmTz1uFMTlVhSK6%2BEOOP%2FUVCCl5cCR48hK2RoV5doHtuWugLIOX2Q0KN6a2B%2FW4CVqyYcmscATejPScZBWYP9UTq9nQ1uA1sg9GO1aGYnMT%2Bf7yb1BupnlfZiOMp7kqNK2%2FcNM4skDmfz%2FPf5Npa3V%2F8tkwN%2Fpy1WqmaV3mb3dgXXgywsSVAxfNFVEEOub0fnLnLr0d9wIkgxGyA%2FU80SA5ucoqG6vr2jTGHy0T9gxhIuQ%2Fea95TmZzbrWprli%2FEYNAyIi7d1OqIzD9pzZ7gjogge7b49EuGcjlDDX%2FPLEBjqkAahQTlwDwWKFOO179nHL4pAT8g2D4Q9pLQqp0HrLLV5w5QF%2FF7efXyhYW494%2FP%2BPcoycwMhYJQP41hZ5rqgRQD40fXuj38HPiy%2FZebQv20Z5eRdPr0LGIoaWl%2F1vAM7AzC7b6oonu%2FxwtikK5P2XtlVaDhsyO56g1UfPirtsoO9ip%2BNG4y2ruWyTS2rkEL02Zj6wletmdiNKtCoFIduOYcMHr7%2BE&X-Amz-Signature=aa0ba0e1abca471f1f9b8a19deb73012ad08d2dca05b482375408974f6d52d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=af440d9629cf5a528617cd955ec58b77cfd46b460bdbcd5ba34a94213d33cba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW2HSVGH%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcjbEAFbVmtkRjExO7vX1661WBvkQDsUn4x0UUhbjRWAiBwN8%2FFhkAgzIhHoOz5lS0hiXLZpW7R4vV1KiAH%2Fc%2Bp2Cr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMM2HKb3yI1gz%2FSoh8KtwDJr9FOzyMKk1%2FD1uUZqvpzA2ew35LwemFva5bLQikU4ZLGJXWOwGGTi70S6dVHNUcFyZhOZ11YEjSBDqbXajS2TTbct2u2TeldvxJBv8iQVA%2FDECp25BlR%2BcjOGi%2FG7NK%2B0a0HalExb%2Fdgx1%2BB0hfmT5TdEglHtuuVNOv6Z7GXZKl%2Byz8teBxwqUKMu0zebVCgIqQVYxYk6knCes5cLLnipm6bMplI4zcR%2FzmTUb27FbXWU2nhVzX%2BGT6mHu7OXuwgv8uhgRck%2FS3XV8EExvpmvGKA04RJ8nXzcYO%2BoKKmYf3GWxiEGhcy9cCrRq6E%2FYkAT3MZS5goWgAO7gVdP0O6FYLiMBqCIpSgLmPU%2B7JL22vKxbOIAfZi8ABXgJ8iazsEh2HHbiLiDytzhoL5yDPZrlr%2BvHxJrlEflOALwh5k7dhO4Sjwgy%2BTY%2Blx5fiVMw3wRdohETa8D4yaThcmC1DErfpMOl6eRwySvJk0JH4YoDLOPeXEQyB413NKQi2BStEtiD1DGpKb01B0ofQJiBSPYDCdMVXMmiQRYvZL35tmJ4y57TBw0bckz%2BCptEas8f7W%2Farp5yca2ZyU1yogdZMB3RFy4udXXmwqg4mIMytkmgf89uACrCysljcSOwwg%2FzyxAY6pgFO%2BnPx7XgiAFe3L6FDPBEKw6fHS0aMQBffzcdYMKOX7btEQuwkMlt3Wy2aljVNmJwKk042yVc23hFJIUBMiUdVc8pklLV8GFgrOWU5gH%2BhinuOIsNjjdgWUBuSNze13loVHkG0rQMc3oDgGZjM9TdNPNQtk2Xpa%2F2Aalen5W%2B8tRFPf6ys1crSUfR9iA8apJbjfbNG4T0age2Xw7famWzh7JsVKsLz&X-Amz-Signature=41df30e2d5bbf90dc8b4d02ab60ebe379109b801abaca492e104df9dd212464c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCA4EDTT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4vk7FaKAnkJcYH1LBKn2zdqu1AkagTZ5Nex9euLIPYAiAaRGE3C1dlXKAMjupZc%2BdE6zys%2B5qDDSY73pmr1EaWHyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMhq3asO5lvaETFvLIKtwDf7m6N5TcFn22BkgYiSSbH0BdEOjw3kZb8L8WKZN7U%2FtmPzWkg4l1YJJSCVKcofZ94aphuYRnKD0KHfyQtn9JOo4DJmYimD%2FT9INSr4HGL5LfJXFCLmjLZ%2F6yq2VLYDSU05%2BsL6LWjBp56D8UYrr%2F2vOQkaqZ7%2BR6XSGP3sWz9ZtPlCNHwrqvG6aNJzFU5KavJX9ny5VfyVBSvHo69QHanDZ016vyJRDM%2FFLYS1y%2BKS65h01j%2FYG3bZEt%2F%2F4kTNE3bZ8lJtZYUkbmWJg3twTyWUFOlGBQsjhvKw7lMClsE6Rm8YLsh%2BaGAl4BP4G6RbBmmT6t4VVtaNvEosyDwtpLuLzNSOrqgOFeEYQbSFSFo4Q%2FawkHwFIysaMBXDGiG%2BNehAZUG85l539yfpe%2Bt0n0KQEKN8hGrbqQ5fcr9eW36L9fgvnC5oWml9tQ7Q8gr5uS6eB4ZUaCR0f9RlowsW76tjl8eTxPtnuOAd2wB3DXVMJV1MifYtvzfAW75AFKdD6dmxQ2tRDK5QF%2BstVI5Dx1CYwRcRJfUHypOdjb5GaUmWCeq5ve2VSoBjCQLtdmuPihY7SfuKwA5mtdZQBA8d%2B7diugCU1Rm7OTCmOASEJ3FtmDPVK%2FCEAtScs9in8wsvvyxAY6pgF43GzoPz5OOZV99U0lNabEJkaTu493rFpbDqRFziKtA2YMmEfVE2%2Fb45ubab6GldynMG6jl0HjoXkegjnbbM3Sv7BO%2BVOk9mIzPUsPg6yeepJcQfbbhxfhy6UJXKF68DfkXJgfdsJ3EEFDU6bwNzgaqHY9tcabILgpeXpNgwWZB02SwYMpRCVrhTfphpeOTSAY3b4ll3hoRrDwKTaMDKUq0bEP0wEd&X-Amz-Signature=28341bf5b73726987858d1f4104b54813d9e0f0d374535cb81886e0bbc05ae77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3UC4GVQ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCajVwqLEIQnagb6qVa%2Bo5B8lkM%2Bsy8pvUhf0Yisj4bbwIgZeo4rRqIVauEctznSOIhkKhPeFWhyVoulfDe5q1N5zQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIf503rGLhyNXb63kCrcA3QK5jRA8yDCPRvftKMbiS3GnQi11nwZJww1aEO2WTNbnCJlFasx1dyWVHF90A6Mrs3Dl2y%2FosqUGRcaD7Kn5KNupqZkJD3EaoWgpsplqGDRnUBb5sOkf3hE5nd5wb63CMjKlMjVpi6cy6KGefVN26zjh3zYrbFi44Y71EIvaryvLwifAMf2TiOxlj5610Q8FGg5L%2B4hKqKydBHHujQToE4z2wQX3h9WYyq1IdXjWrzSd0ys1XPiJPzzPbRaiIQsjUAH%2FRHBaj6SP1jite083320G1oAAYegCB6a%2BBlky0J6BlE%2B7RT1py1wBZZgEDoDZXz0wFUdhApCCvdtYZyAYLtQxhUs%2BwuEx5twfHrEGmltW%2FS7kO6kAQL0g0AGrB96YL6bUnRA7B08kEuAHvaa2JbX2KdFshP2ky%2FUxB59ceojXGdpE1BdHzqpQZlzXDMYvM3bTaqQcm5tMtAFUPkZe2QSJ2lvGczgMy1s90YYC%2B2Ha%2BW2K8f%2FNfbKs68c1S640bpcm4b3wEcZpKE13fXlQIIq4SVHE%2BsYlyCzTFuWZ74F8kRm%2FDpJkZpQN0CeRDd9lRJFS8yqmoQ7bITPO6tzE3IgZqkUBDvgRtolwnayGibjCx6iiafvpOfuZhDmMPr78sQGOqUBsFh8MEwcTR2jPRXMbeb6UDQKym0SY66Mcup9992SYL%2FKtVQhVMQvFpUsfCUOeyJadS87NoPPWeeSkrWs%2BAy4nxDLlh%2BsWtAPMhtsR0JBHtZ%2FdA71oDdKyJ3PcIKmsUyJMIRHwMhM6VFHZJRgDkoLkt60pq%2FazPDc3GpdysZXis5kGSETW4aMmLRrP3ZtLCw0%2B7x3UrRtkHVIkhiqgt7UFiRGw%2Bfe&X-Amz-Signature=4fb2ef96270b6535a92cc994e436ea81b9c4a6b71f653d078da3063e661c5e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675KCW7KR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5LvSmfYoza%2BEpiqwd5EH4TO5uWCIgNLMjkxC5M6CRZgIgcX8169zpyjkBhuQRlt3jFjMxnBoMbN45yYApi5OOCCsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDF5VME9XVhEB5f%2B4bircA%2BFD2shyxX1y%2Fi2qlUy3REWArShhlaoCmlYXRUbPLVUqhqW6olEUudqYTaYqEq6CcvtNVq0JO6KUr9a%2Bi9fkk5bvc67BJKqB4v4Q87vu8iTTkszIse8fie1Dwc4Vax09HGlr5tL695hCQ9Ym60fclOD6%2FOyfQbc7p72LXbL%2BavESMOmKGpO5dSwzWeuAagSWNZ6m%2F2X75jgmq%2BLmRl4DE3q1nxDFBJGI6hQ04TgCB1Y%2FkE4tIoKcds%2FTbqblbAe7CGBrofT3tUvjMkf14O1KImsDNEGfgZJ5i%2FVQ1PpC17cnqzN6%2BSOjlVYnQLuDl1dCwK0HYVepUqVJ4LdskAxVkoBLczjEltQy5dRBxonsVORf9hevdrrt8M8nSASLLDfuO52UMPeCOO7BXumQciMaZpSHe2qw5V7Tn24iL5GgC4FihMXCsWLQr4Xy75S9t1MNolelKaPZxIGTJ9dTy3nFV%2BXI1pPh1w%2BadJBJ9j34SkKpR%2Bs6WUE0PmWsficBA44dTMDlf0ThWZiqksjOshQPgBFqCvmklt5Cd0vdYrGUwiTd1xLVzAAJQSfvCcfttfKWtHNQFqsl6JvPB8rfRER1z9w25JheZwKmU5V9c4bNzh%2Ffz0B%2BmhT6jlspO0QqMPP78sQGOqUB7ZYR39HewcjzB3Afiz37IZcaby0Y3bW0C7o%2Bmx8wntlVi%2FIc%2FnFpKymJpeFCFXsA3ji%2FWijkdOq37m3n7dMmqRw0Qrb%2Fm1%2F50U0euafyTtlYRyABVJdUjQpn6EnFOjSfn3%2BREND%2FJRWEK84fLDso%2BGnRPcWUw3MAwWxWWmWiEcOudmK1Q9rDd5139XRSrdW7kxrtEr8Zji%2Bl4vP0Z7rrqSZ%2FmKIt&X-Amz-Signature=5d20e0923f413ee5200278aea4e2d7e77d1ca08c91f0af1f3bc6ec41193bf3b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK45P4EV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcFZK9W9uZNPjpRixsgtpBDRh2ZxTOVwc4kNzi2TwgvAIgcmpvC8rWS0w5runhPCD%2B5FfqsatgFi4BvIpqTmRM3EIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOVvk3lcQ8kGGfpIXCrcA6RoibLj8ZvAq9%2BEeokg8a8eDAsMLdeA9TdBJlhMRIpWu1%2BAwe9fdNJOvVWBDIwWg88Mv9AA0Mr37ftLtCC1vXbXmib1dmjhlQO3JwF6nyLYtzKYiLaFJ%2FoCNwILTu60v7oeiaejd4gpIpg%2BMXkJwnnzhS6HWzne957yLNosBZyjNmwyhLNRWGb8solDWq4ShtejLpDCKcM6%2FLXiqga6ut1X0DaU%2FeFvcuEjHi%2By8jRTdMzsJP4NOsl%2BML%2BwpZccRtGS9y1vWKzz%2F3XVo6C%2BaQiA8dZ8U0RoQ5j9OfP8fHdNWrWUiYlGLTJDGlQrj4nCQnbJ9tBopHaTvwmJUnPDBFsjXm0E9Yym8TTXjGQnQCqGP3CQXXMJhjPM0gwYeycN9OsmCa6fyvpRAGWRwD1Ek3W5POCMxvdfTuprgLlRbGkSr54RFIeODm6nIiUgXuzR%2B86Qgap%2B%2B8r1GA0Y%2FKq44auY78QiqgD4yYOW3FZlhTCTjIt07HyyJ9VJprXiqyIDJlm86vkF7HDbvCgre6109rnzukdhpwjBiKoXdELlFgrp6bZBMFN6GTTk%2FEkFKHR0H4TW2DOKeF8%2BtjT7%2Fxp0HJ8cSGFd15JkgzyqOi8GQLMY0BQQ%2BPvuo0zSOHz7MJb88sQGOqUB%2B1DcL8xKeUgxF06vUy1sfoV9LGPNgC2UQr5TH8jECL21sRUk4BZVfaWosivCLtdRDCLr6rpXNO6stcKhecQ%2B6Ti6LuW0thWZhS8xMKCeKZRFfAweZPB48OW5jIvV67oaBR1quXqnuxTypL8b0DBmTDNjW2VrruDr15Zdok%2Bwpq1JkfmtEVGNXc9h6Yw5yph1jMSscmwNMgXnjD9gX3v1IOYUNyQv&X-Amz-Signature=8455913e5e8dda1f645e98e36bd5526f12f461c872fa609f63deea2440735671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=64824c5d72c45eaba4c4eb10b124732f9a6d53dfbf9fa71dbd18ad35050796f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYARRFI2%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FMVOlGyWev%2Bimoj9L7OWfoh4uBu19QaM8QmqMAooTMAiEAs70iJknFKB%2BVZGroFmthJbTaiA2ibGMQUMXG%2BZ2AUXwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOeweDM16IymLWXDoSrcA8DQ9IW4460DAWQtc7hrTaxKZJz6FgEL5UMBvTBPdADwqiX2KSsDWptXkUDiBpI%2FRGIm%2FqnjKiyMWyuCwpevnQIcak5Xw9BTnBLEdXnFYB9Q1Ll1V9LQiBYbGUXQSkT3VcOHgYMoUrmqWCo%2Fa5iGNXKNvMDYowFf4P4DFvEXcmpqfDdHWWpgIxDktq%2BGCMu1EH0Qh1PpTDN406Fx6s8OBqEaVZ7q8%2B5t2nih7C8Ee2Yg939WB1wZ3h2gIDGwObVrpVhDdcwu0022p4V9Nck1CrWs722FGcmWTMVWTN2tjP%2FlB4x5LTdZZwb3wfBdcLGcKMDhFokbe8Gq1iRxvqdwDtCX4kRRISyveFeJM9XvBy3AvkcIJZ%2B849UIcJWRQyc6q6BcWAFPu9L85JkaJOY71ezdyiWnN5tjxUjeyIHe7Zeadf0TwoxutDQq2HHC%2F8koAmJD5DlJkIjl8qQFuXogl9N8Yv6faDuJ9iJTThpnfoYJTrduoLXf6IVpt2SYXWZw0i0tqEIKv3tkhAtgDM4XrPX%2FPq2%2FRKJAV647myL8eZmo%2FyLEW2wkB6qOkRH6HhLu8fFSNGgUzd2eCbwZXlp5NpZb742s0zPgwMktg1IRti%2BOdYviGXjd8KSOZ0l6MJH78sQGOqUB2BxK%2FZxMzRlVa9h7sLzRfeBCDKFGZ3XA%2Bkrn69TvYRcActZMdCHcOz%2Fe59Lx4ZY%2FhfZc8UqHCCXTF3xh3vFC1FD1Ac0lGeHgcudyy%2BZZ%2FCjly%2FY3XDsOEwnnH%2FsgVRkWIWINkZjhILSe4JhSgKeBjJj0bIIaBMymMjcM0aEx%2F%2BvhlN0n60pBBjvHeZZPPEsjljBbp54JjcqNAeJUGaL3mutLOoir&X-Amz-Signature=2e725b59650f9e417bbc078970da22e6290077190f90bdb992392d8538b7d868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=c29cb910544598d38b1d3e71e4ca05c3a87879ca378e578838127f55ec98eda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=6b7f5c7b8838420b06b72e5eee9dc0eb7f35fcc6f02313f2489b4a6abfd3dc62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=07e9c3ae1324a3c682ee2d97b2f651ea0b286bf70ec93d7237bd0849b0b12e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=043b26f863db8e377e04cfdecf0351ea32dbdaaa9ef49382b3e0b147bdd586c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=8c71db64056e57730056b93657408825d4e6c5f59c7804bc228bf19f06ae9f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=2eb3097ab628934608d93f976fa8b5e76d5c2e92afcf3d114172b83bae66e90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=07e9c3ae1324a3c682ee2d97b2f651ea0b286bf70ec93d7237bd0849b0b12e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=48c609c64c8d8fb9351d3aa2ea800d3ce962b2384bc492e58ec6970dbe1f5394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=4a8aae4f85ec73e4c8e40bc8d42c83b1e599bf09e6fe472863e612e1578c456d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAPHUL4E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBm6ErNpph7jjFVTROtf8plyQfXn%2F4tqzZxfU9O0uE4YAiEA%2B1JAvUeiwC9Oi7vYwjDtiSsXmxXodpKlFVJJmhpUB8sq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUwqXv2gAWrPDgAaircA9YW84zpSNxK30aFhco5OtFx4WI%2FGcZBlF3wH0Zm3uUSqrtmpGfLpTDEX4pTxB%2BDfN2%2BQO8TDjQm1WqpAn3FffYMRVQFzeoYPrRGhwCSZQim89NwvKL6%2FwNHCrUBJqK9OFEskPQgxK5E71j1NfBSonbB77dnlvATpyWz%2BAOiK3IplmtAGEIhjOHLaYDYNHzZpx6y2aLGyayDYOB8pGhsF43XjsX0iX62nIGhg7%2BOWFyxX7zS7wjvydEPIh4QRz5znD15oG7eWbj90SqXXl5PeSMzv0g%2B3KAyflOqUgac2LopGfqlQcUCcKSAzO1RdtUqZNXjTIGUARr6ed5bzabgPGFre%2Fj7ZB6LiFK6FdwMPbfZmP2hWHs0Ldn19nUP3ybL1I4DRXVJxa4I6TMUo8HrvKEj13JFSCXKlPJA87oiClxdegqJSjG3oNyzKHg8TxfRZcR%2B2QEBSzIPSRxFPEvQeA7Q9MdYiWEENxhm2iOcqyJtcObIDJeBKdsKi0bBJPeF4vmirprEG%2FnkzIow5V76cc4A8pBF2EvdacATDztSXS%2BFaVqX51RwQQQCJAQSYk2lIZCUH67sOf75oEXRVPOSihZ%2BjcadNvxAZzWDiQkfp%2B0Ow6xIwWIkCoT%2FAJSkMKz78sQGOqUBJmPJa9Ct764WTrwRF3Ato0buh7phuaU7GZzvl%2BB26mSN1NNiEPLrzZe1nfgEfEBZUDIb8s4esHQkMvQMh0RJYsmNOl5wOYjTsbCJXgZS0xh%2FhltV535aGf9fkXw3oij7TUx5Y%2FxV5FiD61CSCowfkyEz0NPdwf2TmalIjo4q6pkUUYq3MJ0D9juZWi0fronozo94GuREi%2BrGnSC%2FZdHTlFdzrio6&X-Amz-Signature=58df4210e5448d5c8e3347ad894aea8ea8696044b982e8643c24279a949ca977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
