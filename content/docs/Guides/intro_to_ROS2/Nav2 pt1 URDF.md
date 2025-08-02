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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=2079a909b6c209a10d42f1845ccd630699c764a15158cc2cc152568795b46aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=02be0399e976ce71d9550b92abcec05367f6fda11d76c4cae85b654e4db45bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=7ac4e47461fed9e2c5799c8a5f23631d08a732ffdbdd2b940f75a7d7a5e314b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=2faec0bf6117b6aff2a922f74231a2f66c9420278da62bdf8ad3e274801a1d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=b259cc15b5acb2dbebc9d577d651022ae8659b0129a81cf21ee6959501eabf42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=24f453e3918edd33f3eff9af5cc204c39e283c3b793e4ac9003216425c227877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=472563d991ba80361da7be4fca239662dbae27b5b7f3047d0e27708778a78da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=61a3db64841823e79b60f79d44daa5e12b13667c6a54c2a88f45b6a05f959434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=caa414ad634edab68da274b3253eab21b258d26f4ec26805d53faa841d17d173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=15bceaccb000f9ba4f6480c6274ed9a317782e82e0b3a25f51dc9a10ce4ae486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIQGUBO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb%2FGu3wdJOPZjBpar9WRct4R%2FhMnoiMOFQyEu%2Bcag4kAiEA1liqZdPvrOcJhmstra4xzTqIOf51R5a9lLMsahAf7AYq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDFi55hkXm15wPNvVSircAxJkpS2qsUsXKXgzaNhWM2OCvpQzfy2aEcyGSjgkNE4hUv34zewfoUFVDNtupamx2%2B1rICrmbUw5vpEdAoTZnxPJHWB1sZR11Ixf1PWdS9dXk1uijCafZ5Wj9EMQVpDoiiE02EC%2FadgZpXvBhH0u3bI4xt6eEnRiTaUkumfW1tYpCWq0eW1gWhe5%2BL6psTYHvaSIg%2FmaNwWX%2FDxkLHeLaCnDp%2Fv9NJ%2FkiTegrARG5IcwrLJM76T5Aw3ZhKGj%2FtKOs8K2ehWki5eykKEbPs7h7M6457CfUmsiwuuwILGgYhK8FsLdLAgjWWFQmyBSzb%2FqygYrsY165%2FoJiwyPVLd0ZkAAYDX9ddRFknQZgRYB32%2BWtiAxTQPwIEw20ckF68Gfs9VhBuYsyAWSxhlT2czJdGpJ5yi27HjTDHb03Q4DaBtm8LdkpV%2F%2BKDQJOBBbavzKzIMM%2F6w64IEvhXEpgDmCEaAH4YePFujm18e2xARGMySCzCXWi2Yudoo4PZQid%2BgUtc%2BKnfZ33RgUDAfdV7H6lPWwqDtSSCF4MhqwTZia1KsOAgKTvlMEvloZ8rwhzb3UQq5mhkLfMSUpIwOvcIZy%2F%2BHgwUTQhqr0shSXWVp34bacAWS8CPe2tvVJVi5AMLueucQGOqUBl1%2F6lbwTDzFv03dbSFMDJRSBxvOXtiPPBDdKG8QF0jk9ihqKmUbam5fN%2FaVzlKzd3xUcV2gpCO%2FDA3vjAnV6VZR4kGASuvNlu9aYsFZ5JQR%2BRVOUJK%2BVBCaGkJ3gq%2B%2BiJh9VolYMbV8XiD5Nii%2BnUfN8Y4UgYMxTct16siwT6dWnRYJFW9Q9TY8YNUa%2F%2FkdPqljzUxf1uhxtYfOlMs%2BPOhv7cutk&X-Amz-Signature=dd7ce39c34ac74929ed2bd140d1e220d667d89e90afbe5d9b53c92604912e5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637OGBYBO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICFBFDJxGgD5zIRHHATi%2FvaJhBucW0VJWoSCtWcqv9KfAiEA%2B4DBqNMOsMEbjjJ%2FyyUOhidRQDF40a4eDaXbFzt%2FTLQq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDI%2FYaTWk8KzqJc%2BzAircA08CNejE3NTrcVUdPjAnUHE8nwlOLn%2FR2Yusz4AOTWj4OUBfCsFCdbqa4Vuh4dN8pEH%2Bjd4FM2HN6aqq6hF%2FJC4RXUp1hBthD13pB0wNaP%2FdCLM1wlng5vuxCfsB4yjJKHFvoOCUyCNNsl976oEsoojmClN91JuG4VmeC%2BFTvLPp2LDw8qu8z8%2BoppowK73dPCL1qSND3p0H5F4WEDRoOQoV5VKrSw0WMDh2WHbOkdwtKbB5KtIg27VWkXq%2Fs26j7S2nSuAAxrYuhLgX5yku1mnmlbpCJEoxv4gSwP8r5riBr%2BkySW1OHcRkYB0gmq%2FaHJ%2F1DNskWzRH%2Bkw2XJt%2FDjpfrPIKCnGv7JMZsV%2Fi4R%2FKlvMcJlFbDurqUqRGubtIfSvB6eRcxtrsUbZJbaLSa%2BAx6PafEEljXQxtwl8sXOljeC6VdEVRwcdZK%2B7AKoeDzvNb7MZmMWdLLDgPD7PuL5O%2B6m97s5zkhHAfEf%2BcLbt4PHDgE1HUtaC23OVe7Wb7VVIlxHXpqZUqSUB6wpYbu31bElC3fJBTgI3VtKZfBwfW7w7Kkj%2FO%2BTtqxM1UQOViMhwgX6LeivMmNFIOLgOjsYKBmtLVzLJVkgCXcX5DFDYw59AsHE2jsRxjnt6CMImeucQGOqUBguFDzleS2%2FZyt8GpKn3CLrN8vKOl%2FlhDXpEb2wJFPvgo%2FbQCMHFGjeLiGUmhAR46H3JSbvQZg4ajXDR4xFzOUFSOv61xkGxCCDl18Kwbe2YH%2F0%2FDqLUpNA785msWJeXrzPDLfruSLs2rh8vMteTshNmbc2xBO9LotkqDleYrfO9VumS5XfaKl7EKzmvbx%2FmxV3%2F1Uc8Z%2BzSH2be%2Fa9mqKs0EGrqW&X-Amz-Signature=ded7d42a00dfa9d07193c9b18ac69e4a2b957ede172991a5dbf787e8ccd4d710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OF3ZUDJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC3vvX14lePPYpJlGfC%2FzIW0yk8LTTxOT5n68K2h2qa1AiEA7SNNiks7pLMyNBaDl8QsDuVnNQYI06C1j5%2BaJAVThRIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDP38xD2vJmxexMIAaCrcAynGjZvcldY4lbUMvolXnZnyJ71BqNrLhyGStN%2FDj%2FhvnFCGkHCv6yfGvSEvG9zpv71rayUFIToVfzU3OYinA1KH%2Fm6RxEe2q2ammAk%2BFInxS2Jp7PIpQ%2FNdZ5pz%2BAjSbTY%2FO%2BIPdqIIo9H7TuJqpn1Y%2B0ArotR6fTLeVLOuz7LQV6c9iANldR7e4mnjucEf1bJxGJ2RApz3yOx7tIx6K5VUZC%2FE1xIw0gTjmOMp%2FpOxiSbsMx6DxEKnhZBk2j0FDtERN5t1owzHf40Z2LozaU2x%2B9OFCTvFH7UaV9cCBtpL1KXF%2Fenn16qscdkKu3mAtTPFsvm9u8zdObZyEQ%2FCtAsqOUCB6%2FGiVtL51IJ8b3QeXP8HXHRjjHFjHMpZxTvZcSDhWuASup%2By5LZas4K%2BH0dk0hC46zbv7P6%2Fv8lqSE2DOfwSVqrvXYyBYmLeZVDe5LA%2FD5Z1XYcl4z8kcDERj8VhdcPrGGHGf15piNhq9PI9k06ie1Hs9IXGB%2FUlkJLp1E5lA4ZSzuLWp8tv9PC06aXbxpaekan9TmEQiJAUeIrAMo4S%2FVRDyADTUVVTCB71awYwMK9n3vz8IqKKSj7xRG7ldLlAZdGfvZ0TqwkZwVBJjB2b1mjFqHMgnggVMJ%2BeucQGOqUByIxzf2kheu2h6mMbgUmOmj89fD4sbC3iL%2FqSVWTxGllZKR1OYpzfCiWhTmbVVu3Mkp1bNRFrpR7Xa131EHTjBf0WiOmmKdw6tJ9J39oau84izXaxa65vxDC%2FnU7C%2F3LTc2%2BzvY%2ByIQPf9dKpMkSEgNtZdCilXrp3akMdH8kwcJpe4NHlHeusOq61w4fltviXpTB2AFjdoURvhkTHtsMIEOKTJP53&X-Amz-Signature=df2b069815ab183ccf08cda05f82bf9867ae16b8bc3da6051c53e99bc7ffbd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=efc7ea2c5700b47c87c9c0480b78163718d3b577f2b19935e6813a4df815e018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMJCEONG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3vY1LrbW67hAKaUNL5oYVEJUhgCPVXxIDDpFsGclGTwIhAI3XOlfdAteCgQs%2FV4l1E0Kf7BnTktLbdm7PZbLMapWjKv8DCBsQABoMNjM3NDIzMTgzODA1Igxvl7X%2FtCW2u97tHcwq3AO%2Fcudgt4CpMj433vrS9IafngACgQ835XIaAhoMAHHxo9rYmT0qGVxPEi3Own%2BqqnGGTh7la%2BLvaF0e%2FjWB1rmYvYFTY9I7MBeUTv%2Bg6C77%2F3zPO%2B5JAqG0RVh9xd84Re%2Bm138Vt618Avej6R73SPpbkIja7w5X5eoCLnYx8gEKrexZXftvk2%2B%2BQmEnn6qC0kGq8l8wTaNtOypiel6ce8KATuQqwA0ttWMnRFhcVThE1SDodbPIwKy1HMhyIdteCn1m9BhRyZ0XTjacD6732sByqeWM2c89koqOzhl2jPdboVgaCZ3uMVnpqqUFdbK7kXj09HK5I9B4LPm1xwah7vzctG6SrZCisyF5PPqexIy5BnRsuM7uy8PDgsm269Y9R8Hd6Jm1wBxixx7h%2FBj4rnaBsInfKHr6lAf69%2BA0df%2BPMUh8kUwtUQJqQXYYFVRlcAxht2NX8T1Nfti6%2FhX0symGIykcXNiUn2oCQx4a7lXHP7dimfx5NO5J3Qwi%2FysAf3%2BnE9FOA8IuGX4pwvn%2BB4DVtM4Va2bBY%2FaFdCZTj%2FxKy02%2BIhi7fPYNv6i%2B5lz%2BqFI4s2fsWKn3Cy9TEpdqJUFVH%2FMlahb4exDNg9Ub38bYYzWKNo9Fp5sZuiJZ%2BTCPnrnEBjqkAXaUpHGXVTLItFbKsvig81lp2cI8%2FMGIrqOfH7%2BRofb%2B4nBaz1VEifayq0OzvP0ywqVoNgN81mx4p9CyR6dr74Zm1dn1tjml4PmUKzU7p3CluVhtc%2FwD9UdNmTEPAwnl7vNwQqZo7WNmjmOPB9FSozy1eq0OWR2uSgurIMACPG5lXUtQ%2FN8b6NMBinyxvNvsZhw2JOsZocyM%2FlNZEJEPZ9ics1zW&X-Amz-Signature=b0ba8dc6aee06ec23ff539f14c07c10f10ccd337042d5cb694d81223bab40107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=14455b9bce2c00eb6cb1089f845102ee2351a367654107b1e5a1a40d3306b523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SICAJLSL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJu0kwwSV7ATyB79mAAUmF8HWLVT%2Fys7C32pN0ODD0XAiEAk28jO87T4Scb7MKMloiPaKMF43br%2FEBT91Cq%2F8baqlcq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDMskqKYto5%2BSerGBSircA%2BxIFJnmo0j%2FMiPhTt99FM10Pw%2B55TQUK5AUW%2FXTRd6qcgYs%2FS8vnx%2BqD63ocdwk%2BesNPA%2FcbocsQcp4bkKh2cBgvPnHiN6YnQ1yvNDI81I1duhLaOYu72cJBxRumhFbUIR1HKNQLg18L50SvzbTJUF2AS%2FxYV8C3lJFTwISkhTOMlKEA6RGF2bhMvW%2B3p51OTZQ5piagcmwdS2Ym%2BT4tiW3ysLni1FAyeMi7vaiOuQv%2BuEPAv3M6Sa%2FEk5GvIXbAieAC%2BqC535tWm0XUo9mSadt9C7WB%2BDa9G5jYtGNS3ylmSqg2SjIdz%2BGVedwzQo7IHmm04%2BKXuqRl3O0o1zzFfo2gQUDiDSKrzLN3jlZaJI%2BB%2BsGB%2F4u7NKdOqkGOjziFPPyvCGpfde%2FKlXrgo9F6VstHxXx4DD2G%2B8oXUxypQS83dae29VCoTJLdNt9wyEGkoS3Wqgn8uDgRMZIi2WsKkls1KJReAC%2FFqGRbi%2BnHzWy9c1eDiilxdda84kXYG7nVn1Gj0GPpkSa2zRUk%2Bh283JJ%2BiDtkIrcE47N1IxymQrGNLQCT%2FCWUDe6CJ2VHLHtdHjyx8bmSBKY5rADVJuyCAsgVswgKW6xA1TeKq4zpleMbiX%2FblJVMGofzWv4MLyeucQGOqUB5Y5MhpIgMfSSj0pYb56aoTx1TFaBfjAi76B7x7bHt%2BuFJCWMZbpjoteSIRP1oAExeYYyXnKWj51%2FC1le9DHwznaP%2BH4a0awWZ4INHfVM5p3yYamCU8cvEPGxMTHHOY1ZTF0Wu5XE3RkrTq2bX7lsULaIpc%2BU7cUxbQsToMMljAbNCf5FljsY3VxojBpiElNXV2kZwJGWCpkvKJGIUkuUedfFw0Zw&X-Amz-Signature=3249b3bf3cf375aa7f51dc4b2c0ed0f5caa391a7703e84fa641729b59051eea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=570a41845ac3500e0728aad0819b7fb54b9567c022d3731bc439eec47e1b6fdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2D3UF6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9edHFeAmccqZ09YhWIXRgkIJ2P%2FrOkpxYunIJWijTJAiEAsI7%2FobH6d8iDHd%2FPvDQYoG6VqCOqZYgkg%2FRoUN0DBo0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDOF9EuNUiLJj1zLjTCrcA71BfV6CPFi9OhZEqt%2B4B1ebFdGvc%2F5mDZkn%2FcRvpqPNWtHiMtQgP%2BXiIxualVnrzqvNTmKQ6AH0sTDs7qUz%2FI3%2BfYakw5lX1E0W3MIPs5Ji%2FKCuD%2B%2BcSB8bTtmGknNwNg9SAawsVAHMRVoqS8oRN%2Bos68Yof%2F3TugfSEBZQa5kHwvuiHTP5wUG%2FVs51nEhfn46N5YdqoRq8kGbvmc3MvZwyhT2MCUQ5MTOh41E%2BiStTFCQ8F5e51IrPhNKAGcZnYtgpe7J0W6icyTS%2FRZ0TMAizv4eppGQVbDdXBFi%2B8FYcaNKJxsKpwQp%2FhPIyWkIi0bTUJb2vyPS1YTMVZDikt9HAst7Hlc3XpTSyNBhJBYSRvzf7sD%2Fow%2FiZFVuEWpf8gGgwIKXIn4rlzdimpDbCQWA4fZ2arX72yYMYkudLUtEKybmLGMP2DX%2FU4wUCYTFIyox7LnUHTL3UeTe4iGUgHPvJv1TeGp1UAqlVuq8oGRzFVJJROdcx7QYNKrViUsymWinWapzSscx7fm3jIOayj46iOf%2BcNrs40RraKJ9lMFo0TZSPP%2Fcro0SGFMyDDRxvM7jzqRj0%2BqcMNBlwqOwjWE3Bixk5oLqxY3EGZp4X53onEjXEbnu%2FoKcM4Xv%2FMOmducQGOqUBCq7tu%2FTgLQxvg%2BeqLlRigsEYML9GRiJTPvHo5Ddh231tO26YU%2FXlgdOgTHrNSktJF9qh%2BBn2qZMD0qb52%2BtHDdWCwu5txwdMYksApb2sr0xDMihfcaRtQYCN9OeYxUcxmJ7OZTKlKOUEYsKqJ2sWmhSOPunXoB4hnv4CKD1y8XmrdhSpuMCpqIxe6wYHhCoyNUCkkyAbX9n8CleEKsVS1mxptY7i&X-Amz-Signature=177f1a15c8d162eed66c2ae294e2a3202e6d2c327f12e9a48428a61e5a79f973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=5c928d2febff6e0c030b2c310ad63a95ba5304372a985d34c1ac8c003e656623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XSNYDZJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbxEYrK9l%2FGwOjhE3mWX%2FS%2BHJBlW1%2FWG7zhcouLiMrwIhAMZF8WvEDd8jXDBq%2FiznQ3KBHo91or1EP3FBTmZr0acAKv8DCBsQABoMNjM3NDIzMTgzODA1Igwt6bE%2BpPQrCs%2BtHLQq3AMqZVqE9Y0JLpaO6e4kfrzCThe6Rqm4Ai4zRiaBnJuoVOc3z7A81kF2tgKDEopNXbjLVlT%2FXyjGTFnlCx5bWWnoqqrmttIqZqrsq%2B46Ny6wy17Kv6Jwmxn0gXngXaL1SUD6LBMqvqj68S7Hv0xNBr2GZuk6uZUUfrN%2BhiKs9FWtnZg0ULzAdxIZCN3BWnTBFDclaZyVmq9uiYbUym3MPIZrqharlf9PCdXxlWvnE2SYJLC7ROhzyB8hCE5xYyNTnYOqUtBZMTJQmSqnjWjZxbSDEb47pFSEAPy0Qaak%2BHDTKviemEjmTqHppCKefizfiakP0pXLw2fOO%2FyyY4jaHkOeGECMXWEI4%2FlXIStO07j79mhUCJV2hYIqyqBwGcfGTZOXzAgxa3XGamnDdTLd6lotiiuHLGmN7n%2BbIODHsxPKN66amNGTtlnbbmT%2Bn%2FFh9tj0ccbfRozDcdwe3TAUUca8WoXmpdYlsY3J2A0%2Be3V5j54yI0rAMAy0O8ksuv4e2pu7TYe1JmtczHvXoVMPJUYpANgBFFgMTzC4uHWewGqSLzqP58le4TMfXwD14JVxDgbkQjJ2SfLCivmpd%2FsHAelrdakW9i6IyZ37RlgBoGgUQdJ8rG9kd113YCBkRDCDnrnEBjqkAY2N1rfmOeDHxLn8DPy%2BIwP1NOeq8ddXqmWXmi9PjJDUFR4qApNn%2BXFtEaQXd9BHOgVX%2FIFMUZ9d0Ph3S%2Ft7AvxveTT7XvpvVCDQcSoYpw4yrmWv0XQksFDqG7tSWaiUgJtLasSsmrvpVx4HPPhHOdL0IVWUwPJwussKjILz%2Fxz4fn9OdKafue4r5iW3%2FO7cwZD449k4%2Fbm98cMU9JjiQGrlfsCv&X-Amz-Signature=2a4daf3961a538f9f1a7172b91771074f03837a74936247583faa109dc3b5986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHKZRWVC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeAOkepV3yU83ppvSQkOFIpgPIJwUiVDTYVqP%2BnN0KtQIhALHf2WlbgDD1lUEk5PP4jws3WcRu8YvN8swcInfeA%2BTYKv8DCBsQABoMNjM3NDIzMTgzODA1IgznwJu5LawtvAnzzigq3AM%2FFG4ZnQF1o4skVfNQ2hpcbbQsQD6I3byUYu7b1vfhTOXn4s2oYurIepR4UpWYoCJ%2BLvfhShlINVMLQzU0kNTr6%2BCf4hKrHFT4uAM2z3nBx0d%2B9y4%2F%2FCYzVhMS1YBncVDpivBXxrJ7lCoLzJIQeanLFQ1vVQ0tIQxCde1nIUcKEnbTSZzxZJpTSP35lND2gjtdocA7Oib5s%2FkNrw8V4zJgsAeolXXhBZ1pDPy5u34KoJFP3A2ZJwPAWtpaBgyLZBymHX89MYlpkt7XWpMgLC8hK72oR5QFj1fZAOdhO8b3QHtLGEGcTodrIIUIDGc9zaujDsWKqIH8ENPLKP9LW5rdyg23UE8DZM%2Bz8bvF%2Ff5qxjpbB4CC%2FABw13inNRAN6lCJDZ1SktlMyScdynjZrZNgL4r5BdI0WDThqCnsJZVW1KZqVgM1md3bNkqvTggF5HssNsJxgTaWFN0RQoz%2FjFpeA3wGFAS60K7OHdc60GtDy61up8sHgl0B7MRy1%2B5%2BDXUGZ6eYtwGplSD8GLo5ZKltXuTzHT5s28JpRYGLtAEOnSxJr7sKzBczWelIUD93k7l10wi98rrFMPxBBemo50i5%2FfaODkGCAX9qlZYUYtfX9o90xjqfJ9vrqN3ReDCDnrnEBjqkAeB1%2FS8cyWcGGTF2GrK0W8X29DwfA7363bCmU4dBJXT0Hgj3DopLHasbLkpRqcEEdI7CIWqB3FTR2k%2FRLg%2BUv58mO3USuiRhiMh2t9yp%2FZJNqCZAvIVdm2y378N0FRME6ezqw0Lm8negGfIJQ3uLqus7iHvtu0csUCxlfE2YnmZxwWVJOhVQT6%2FMkYxm03L2QgTBCfdwP05YujVV2ojycwuhcxgU&X-Amz-Signature=581fd0a1b4a171207cc2f2b5df2b2ce8c86bf2600429a8029d260e311c449185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2ANLWMZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMPW1anemfg3rGMQySI%2FsJw2m5srDU8jFg8dm62Kup9AiAKRWdSov9TB6gAqtHmCZoWvVxA1rBpNtTFhhdeVFaz8Sr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMjOdg9JdiPq90PIIBKtwDqNimDI9GVNKGK8eLi%2BDr2cVlVk%2BfByV3AWgfPSXgverGI5jH45s9tqVs22L34rDEGimcWqettY6dnJbWORG%2Fd02rqJl0mRbDqDpdWPV5fHEG%2Btt7iDrjEoJHmpzcrQKd3Eq2CfP2Ys%2Fgj8O8ik8xuZM7HFPkVJTfJofB2WLwiYHiDlTPx%2FP%2BrqxaFnHiDuUVSpKYsjXg7xNsXXqlNIsNNDDi7oYPsvPLZdxsL3owthIS7%2BJXEJt3tHiv9UjXquzTTAOQmXIcITUgKyYt7l4fsbSEgOyhcfijPK0SJnh3rQpxQ1%2F8yx9qJqd8rKWgtJVSr7BUEjdEjtQo0OIF9bfF6BMvhmRaCvbt6dx76GrE5%2FmETX2dj1ClR%2Bcud%2B0vf%2FvJwmhhW%2BvMnnoMFNoyzKrzpr2UyBkqKj7UKfs5%2B%2BU%2BMoWPruwrou047HDbQ4%2Bew1xWGMuGl56Om8bv0r6W1kmRRQL%2FyvumHY0nkbJ8AsFJ0mhOU5PtD783ozBo%2Fn3RpuXmRdG1WAfTiu1KWsVWOhSCdcvheG2eBhLrj7McPuHXMUq%2FbZb%2FwB1WXyB8ccc%2Bw2WE%2Bn1NWrLFk22JuFuZ4Iz5j%2FdtFfYXS8RyKY4QyCgwMhgfErEUfxYE%2BtWzhlkwmZ65xAY6pgFHd1KGFxKxXHMnwk7%2B%2BUpGvO8ireVXsFNPT8cM5NghrHtOA5ZgOtfXXtt11xeHL638l6T%2Bm3g5BOxB5FmE%2B9dkJXXixMw8seU0n8PQ1%2Fyw2hV9iEyZ7PhqguurrhEFQFAt7KM5vn04ujQ7rfFIXfxPz9LWJTGzbEtDa1pGAOlvK%2B1vVNAqrFFWkGW0pcbCDlOMV2Ri1PAnpgQ5pc%2FRiCRqHd72aFdD&X-Amz-Signature=21480a7c2749fc6549e3f98a86c299fe409fbd352ed9c82454aa03edb12ab447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5T74RUA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwPzER2gWxak44VYVP%2BDIJ%2FtBRefHjufpNhXR8s7cqewIgXTcuz%2F%2FnvjGzN0NkcgVIP7eNAM9U3X1YYhOmfE3I9MAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDG7gzX5YTLyuCNB1UCrcA76TM2u0n6B9RdAgb%2BEiVsyokd5T56oGmzaENBZkdlEoqv0CkQQ%2FvfTi5LfIJGH31w3k26NEaNb33v5xdSksKvxReRmF1urgoh7L%2BaFElupdGoax0I9oBBsb6ahqFrJAv3R%2FNSu%2FkDJJDGsq79VeDmJxmHaBzNvZbKggjxoJwk876ybUL3ZstWUrErfQdGBzprcGpatRMiW4xw6adTkL06PwZk3%2BMUPHnMVv7DCYx%2FZ0pKVc3CJwK1uatV%2FLrjp6DSqNWFlivMVK26hlTyU9E7MP7cDFXG7n0BHjHZoczXqhiPuQ6OvcdfTAK8q8mbRoc82LfP%2BFo9iLcXePxuzH9t1nUAoySl12GdrhyFu4De1CEHN1v38ncj4mZkrfJSTr2arqOYTLXZWUT1yQBlxTXUfw4J3lSg3k60REIsLHbFN59%2Bskms%2F2O348xxzgA5gXSJUrIk0m8hyG0BNaN81OGKOGSWEDgQVgUSsVvNp0mXoSOKrve5JvHCjCctYWzRdQu3ynD%2F8qdH5eSnUy%2BeoUGXRN9ETfTD%2Fb%2BDJyGShkkn7ogL3hEQC6qT4BwxNZ8KtBv09TngqNkUGnchbp5S187lTGBR55eA0868xwtdDFhIQEnRA%2B%2BrjfbmLEOG7xMMrDucQGOqUBN8PrmkCviP1OFw%2FiOzh7CzpsH6KcaicoAFPrO4wBwzpbnd19CyA0kKnoM1JiyeyT7dhRP%2Fd%2FEYEc%2FOxMYqyP5XT6rEm7nrTx%2FoOkm%2BFJvTA0i3m8z4lzp%2B9KoS9xes6jHFbfuHmn%2Bb1p1fbVWMBizqFRsEsj8LDUWA%2B%2FbN0oDxFp5GpWFmn9DN1EQs6c5sW9odVaSkXc1vq81JhH1bOHFr%2B3eFoj&X-Amz-Signature=2736c17d8506ce9979a3c929fa4728d85a15870586c8d817a15aee0407ba1f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653LU5Z3B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJNSYkO%2F%2BZGFhG17O2D%2BJIEUn6UNvm41JCr6MCuIKvgIgZH0N6Gv8f4c07ZIkNbEN%2Bof1vCQGXeRPuIQK4oVifAAq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDN3SF0tpfWOEykthTCrcA44pEuaAcmbCFSrXqZmX6ahFMrEnUnb9tRu61nnZ%2BrdsX4pZzVb6zOpTW1KeKCtpgGrCPIjO4gyrMI%2FyCd%2F2p%2FiANZ%2FonlDuJGqg0aF8mehtkg4y6GFMjlSXTfjihw3yRHjQOw%2Bl0pAXr9Zhhs1iT%2BXLEcx8en%2F7KfI3iL5iGS%2FZfRKo8vRecrhmmHbNDIn6VJjov%2FmjeMj9rUkxfOtIrJ05gSBJp%2F%2BNmbXbHDgj2b%2FprgIMk8BoYDHfiz8xp0jPXLKEMinzomVRfWwAZVp2SubUMYbbK3czneLIc%2FGRowgZL2wjyGK9FkdBiJkOth0HKnFzPvuIy2BOtYGEAcZqJPm%2FYlBJPYnPXisj4aLSGAutp3Myt0dzZL6Ch3rpb4gWX9HXKolAfjhJmjAPwhId%2BBE7rEHfisBAG1Gjgex0um4olNqoxdRY38pNw%2Fu7JsituDRAQ2yDkNsE0wPw1EpCioKyd8beRq2Xt%2FD2Iki4A8m1aAu%2BQ10UR4B%2BOgE5jjPeeT7qYn5Y3wXQGVysWZtc8r382eftwLFEgebmWd6mX5TwDAV8Vn6KesS1E%2Be4roPgfEHah%2B1xeyPIpK9Sbavae0ePDJaOStX6A2VVc8TWhm04ptYLpBssIbzvbSRcMObDucQGOqUBzqFyTncH66FGWyrl%2FnaDiuoy4MBDx7GUw%2Bmc6ZguPJ%2BcD07buFECN5HVX0ylKPvypUxLji4k6hrqJg6WS%2BqiF9KuvfCWN6pxgkT9paArwGsexV%2FmY0B3cHB5i3s6g1889RgEBViQaVIJE9E4JXfahtb7z6dlx%2B7O5FRbBdGw0BsNRelY8VApjvLg%2BbFS6IihzpOEjBq1B9ub6OVMm3UI3Q91P2mw&X-Amz-Signature=6d429713be7b5fac54ef5fd36d2df71f90f106f80fe048eab4b6f8c362766d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=cca0fce21073a909e30fcda31beb10415f942b77e8847c9d62e4ce97239cd70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4RTFJNL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDubzhXM1k1fJavYOYlouSIU0L%2FZvEUQ1RDD93AgDNd6AiEAlO5hEr59zbXDpamlIypjdQJ%2FumTn7L%2Fau%2BbKJxl899oq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLMOmOTnClbFEhXTkCrcA8eIXdymBq6HY3Y9oNtphH93MPMsunFP6qE%2Bkk%2BL%2B6G%2FniZLoAaUvhFHn08HiTdaDUNCNEcCoTIm9krR0AoXPw68ZoIQA4tk9226JYlBiKvm5cWxle%2FYeTXR7QEu54DWDnC9aPShkTidomegsXtWO4UedMynzZmiKAc1BvgcbyKUxkE%2BhI0T78ZmNALS9IW5%2FTkYcykebua4QJ1FhX%2BKN%2BeUeMrl14pTXv0xJ2YDzonJhEe%2BrCwzWBNUql9v7SGUJmYNZlC6KxHPwtRXZfriACPFkFz3DjnVCou%2BkZR0R3uNOZlkPrP7bqWOHPBRHr%2FxDNLm66ImJbCMHZH%2F0UlcGmZtlzDfYV0Vb0%2Be01EncSwNEgp1v4TJYi%2BF7l1XcceNk%2B0awgnu1TxYMdnImp2nEuApV6S%2BfmP5TySiQv6wa7xZg0OlgxsbhhWjlxXZEuDEX3sx2XvLuGNAx5gJUnmqrhEmmT9M%2Bm0E0U8DE62u3yPf5bHOYnubyaniYADBqCBYtCJj1Srf0pozli%2FqqH4AMUqk885yKCOx%2FDgkQ4x2fD3yS5B2aGdQX8zsEODgxvwWUq7g4axz780Zkh0qgwVdi5r7DfmrzazRynMqm6c7a4VmFEvczbhy%2BX6kgg9WMM2eucQGOqUBkJ%2BJ1H5BosBdCL%2Ff1l0%2Bqs3Sdr1TlmbHDJ9gS9biWrTdA%2FBecbeXf7KR9tCiUgj46sI0krXsCUe3JYP8coILVngmXA5%2FmMVFgWBdXeWWMk3Tc%2FSjEO7TgJBLoXWjEAHdTBBXpw%2BhX%2Fr0oEsIRDJ3BlWxl2469m4SqpIv8D3FqZcCLtgkRYyhNbcdeGMkbOsP3lv694EdwZOi2p1cvXW2B%2FqzdWZl&X-Amz-Signature=7517345ade8413fa6d5a7cd9f18daf271a501d8c314dc37b3183b3561fda602b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=d1481fc7bcaa516a187d756f8767ee13fb7c01b85be1e4ea03ae8492e9c676cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=8b6033b25e05452f6e5ddd5e72f66c18805c382956c70e5a6a66ea3845082397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=bf859d68b7b1c89f65642c0dd8f94952bbe5d3fab6762d0fe400d75978f493d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=887b60efa71b5982746841f3909963f9880ad8d8d0bed62cbe87d2367a2467e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=ae8ec3daedbc5696dc56941ea9bc2a8e5e8eb5f45e44540e6b521411f3c93e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=397d90c56de2caaac17df43ceace94eaca6ba75c6ce99fdb6229cad7f7652e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=bf859d68b7b1c89f65642c0dd8f94952bbe5d3fab6762d0fe400d75978f493d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=8e5f7e936430afa2713bbbbc99a2c02c33122965ff40cbc05c5f55944ea39962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=4e5436d75ab2cf9ecaef7dac5bc69586167f969303d510df7709b242f406850d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHXJJ2FG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaGvgligLKjB4gkAhaEyDR8QDwBGypdSw2Z5jbmAKkBAiAbcIPKvEiqbSPsA9yClCoUK3Ou3%2B%2F2eo66%2BlAkLI82kCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMb7WSQjd2rvPR8YG%2BKtwD5xzIQKbc16mSc%2B563alxbY2IRn9ydLH3kU5MoP1QKOCmGVF4A%2FiZdbIXwki0p16GVDOUvv35Bkss7WJ9MKRe2dr%2FV%2Fbv5TuiDcVvToyuO80Q2ePpqSsdIKs1%2FV5X%2FiDgVGXJAZ9zixJmoMMU13Wn2ybjPgVtYQGST4Ph2ds%2Fvj9zdGfxwoujuELeN%2FsrLy3g76e1Y%2FGkbaa23ukdmQgoO47TV%2FjYIYzYTZXM3b0ogtJa0bkpu8PlBg5E2P3KV%2BdDlt3d4yK%2FOdin6s3BFbcZRXrXjcDbqVnCW7A5NXoqpjk888UbVy2gNpAekD%2FMkQRcx1ndOJYtldjMSxQUaPBag8jo%2BPyA%2BmFT4w459daj8oYod8ulvu7%2BWP7bIQg%2FlGOygpiI0yerwQ9cfRgGXQaYD1jl1dbAXCSk7sHi3bLSuQPdDD9MV%2BlOedT%2BhUP4DsVISJYV2BjPOX9fSF4BmHuy0eZ5DwgZti2pVpLXghDyhacoAUciuPAS2vgMGaA5UdTNgGVAp02yQqcY8YTiivRVG5aFcwIkp7JKGOhKNTL5b5KrPIrvu42x3lEPhAYpo41AzyY%2Ba6ogJjLiAK5dLn%2B83AXM3QqQ8XDdQ19iURChgAd3xRlf7AbwougGKHAwz565xAY6pgHAWAc%2FWeR9ju59EzD6sckquq0pvWm6goFw5eM0IN2ZNVif%2BleKakP3rR%2B8By1%2B0%2Bz9WT8Ot4M7ri6Mk%2FN9q6VsMpFervwnQVFJyLk0cdj8qNlbAAt2ls1RkbTAjv3qGoE75oKtf3YRdAgKbWhiT5iXKRoJEA4%2BEHsav%2BqOTrd2Uv500GuvvnzWHCjtUa10nmPnTzsMTQPYeRjqZPubzTXupi1VrIGg&X-Amz-Signature=88f1c69fa3c84d218addf8ffecfa22940ca0b10cc8fc745161d585ce6a35847e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
