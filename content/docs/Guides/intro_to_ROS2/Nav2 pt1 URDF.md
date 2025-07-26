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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=5c94fabc8abbee20f950a1fb0322ae3559aaf0742d419204d31374a42021c688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=60e438833279058637b6d48310aa40434251f6342080a95df4622a447a21a97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=b233440f335caaf8179c72bec670fad0f70d9fe4e41cc1d66c6d729c3b0c449c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=f3cc706eb2ab68286c6df7ec7241bde7ef31bbc9ae2fbeb21699b6bcd08f7d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=fc0c359b5e7a5742e41c83496ba6bbe2d870e7a69f5f1687e28848bf30d5cbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=3537e1d56f47d1d791db8ce087fbccf121e3dc505414825404f2fff36e685cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=ebc231cdc7092416d55e08bd399f2c4704390f73db25b3b696e12b323c9f6447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=8d9642937147694035755df01d25aa67710d0fc33cb9ba4f2b222dba3f876cc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=0565ac655b4e3adc86dcaf01b55febe2dfc2b433e3e92f3e53b648268c077d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=8081ffef69f0eaded256f6e272492ce4df9d9745d8e12ccf207a1097b806827f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=67c101d74f885cce32bb2af8e6176dcecb74db6194e771a73f1577e54870a427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=73f74f591ae5b8f1b212ec3253cc77d533f0d6ae6f9e7f4a7b77df31ecd2f11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=d4eca88412d6471746db8da13877eaa2e9afd0b1f7f1887182922ca5bb3df376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK5TZDOV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQDLh0Ks%2Bn28HNBzdTjERDv6KfKmXQmsK%2FOcD4d%2FGp0sTAIhAKXfn%2FjzklWiCxsD8RwAu3uxHIRt%2Fy7OD07dgf0VZeN%2BKv8DCF0QABoMNjM3NDIzMTgzODA1IgxPkpadHG7FsJM6bGMq3ANNRTFuMjqjkPAbv%2BK1ErZHwddPu4vaO4ck8P6yFw8n50y63jf3Z0ZUENLqf%2BOIY5kTnvGV2QkZsgv3iqMqMYfV15xfQVlGZqlRtNj5xW7PGeBrpie0Aq864Fmv1OUsF0R0L2PZHzrdjV%2BUSKnmAGLKy727g1hcDjV0VyX8IyfZ4dNaeEfWBwqyBc30Fk7qhW9mu8NxUlit5MKCRB%2FBr8TMftMy010W4F5f6D6oSZuSH12sldd1Wwd2eNMH1n6umTrzGwPcN4l%2FJshN7lkrlwtTe3KoVXUOAQoRjxR1uz%2FN9qe8lx7nCY9pigmytCiEEDMOuRxQBRXvhtF6Z5G9Dy%2Frxi8puKvMOY32%2BJ52eTN5%2BIH0vcFSxazReAKhOS7Iyea2AiQWoaXdVUIROUX7ixLeVmBWSghXt5W8uuy0mVqcoxrf7YuBaB4idN1Cg%2BumdzvE6N0n1WTMNg4gnoe7mwtNqYyIhxoOGq03CwGNgO1nzaC2XYbrymzraC1vqpwuno8du2IWjlU0ynED9tn7kVoYGxpf6fNjYeKdMydTZGgssNpTSW6ONLVI6PJWvIsijsxUfb%2F%2BRix%2F%2FaPyXK%2BhnvzIi6kx%2Bnn2Eijux4t881S8vZHZA8i0%2Fkw%2B%2BRazTjCj%2BpLEBjqkAY1tnqgW1umc4SUwu8osPR2xI%2Fu8a%2B5nN3b3KDz6XhV2gaymPoVUGqkn8rwCTT4%2FvzTk5Mrb2giRhC8ThfAOGxgANxMHWVkOE9TyqSWBuAeZ3SHjPck5s%2BFYpwp9xtoFEpzJUnXRtVa%2BkWt7NauzULJbtsxXFrIuu0l6zdj2HtcZiFGR8uk4g6ZwkmlbV7gOguetL%2FpLBeeek5i6vY%2F0dSqcIPxf&X-Amz-Signature=4e0c281da19436de969c5538524fe9505a5a14acaf67163ee0cee72e987c6599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=c590c2cbb5574937f56e398e0222f8da212145d0aed7c16d0662ecc6df0f9fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=f94b14fdceec2cd5f83186bc3469e8f4d1509ec714dcde2fa3a1d94dee915417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=654dc36f1dffb11eeea16e7fd8b9bd69a8d762f8e9cb19b54fa8cccbf5a618f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=2f32ed4b876a5b727bc2926f5d1d3305ad4abf221159390b5035328ae50b7cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=d5210cc6fe5336ef93069f239c5dad6cae43226df725ab79db030dfea99593b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUD6LAIM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCICEKUrleUu7%2BY0Ok1ABam1zyj%2FTy3SndGVtimTfn9xbNAiAOTlQgyVF3PvggZxdB%2F2J9HrsZcbCCAVwlBRCZBFK4dSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMXYheTNt9UFLK%2FaHdKtwDxaYN%2BNk5qaa%2FpG72p47Xt0EBW1RC9x%2BmS%2Fstbw9TF46T5DjYPhOT8ty0jWIV13tGCt10I24wjXXPQtu3EKw44Jj3l71SxkqYp5kBN%2F7GkYLQhee1ka6SJuZTmaIxUTQlZbh7q3LivT9M%2F4yJYaYfE3vSag4JiW8eE926w5Z9ghRcRK8ZkvofhuWPonatqa3nrKW8xqI3JCAKpIdhXeYvOXGz2fUfB2xOvjvKJDKQEOrHdY8j5B7R9SxKl1HjbHUBeEqkpoXDq5mf4Y8Iu5IxzUtRqNOuh52qtts67FFmIwjkDWh%2BnlBNJ6J%2F5T%2FkJ7pzFRIxv5Rr1Mmy%2BMxPcRuW0iT7KVUo4F5orNZO00sTB35Qv%2FLLpr0I4ZM%2F%2FJMA0%2FpW8Oe7l0KQI5hYBBz9nCiQ5tGyPD78aHNNUlV%2FMwIlC8tB70Px9UZK%2FkwiB%2FBJ82iO1Y6wwWe9nj1%2F4RB%2BBa61vC%2BHvlLewoKskg%2FNHKe7gqbe3Ib6TqsjsZyTpo3eAcxgjCwrd8NDz1yrWNNL8Lts3eVKvp1CL0Ph9ECKWssPgAOooehcVA%2BqvQzk6wUETyOSx4f9wnrDux%2BQk3uUtgRxAFPPmLoO3dFj3H7GLz8foLWN9curw0W3yKBDZzIwofqSxAY6pgFbXWht9SRozpViJdybuvGWaxsv4rvANLoklmP5%2Bo9ciGC%2FYoM4b07BX5FQderjoFiOMKLmGNx9yl37yKY7AFQxjzuh4MeGSzlc0EySIgYDmREqF%2FsvR1GBvt88lXiAaJlreyYfLpgYXDFBBuTTXLTLawgp6pR0ArnKHsTyy%2FgeSNZClqRNW9V1wgcOyIAlsefgCdoPyc6Z%2BsEvjOcuo3TK1BzTw41K&X-Amz-Signature=d0fd55b6b0aee0bf21fac8165218afaaab024dcfcbd8d5729876832320ae6873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
