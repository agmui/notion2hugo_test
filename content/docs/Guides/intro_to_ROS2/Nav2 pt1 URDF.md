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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=92f74491dba7a47d46d42c402c25af2127953aed0922310184fdd519419610bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=ffb18bdf58be3b1753a176597f76d4a8de5282e5b95798f94afe42a9c461e7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=f20bcd409cd29aa929231fccdc7c57ea05b083df6283004a79d41b5fcdbfc4c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=cba3569cfdbc8e56b991792790dc5bbd30e767d260d8cd2826e38c94dfc58649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=99486d759c4a7f73965de9beb09df6e9f0015001b8e1e6ccedb69d267cc01203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=6fd7933f33f95a8079e2465d80ab9fdba86d304a6cff4d91b0afb40ba2db7e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=c1ec4c45a9ff69f1fc900dcdd9e19c155819da7cb0577399eb887149b9c32946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=075f6fadcb38875f2edc10888ee00b958b6979be87b926737f274e6f827820a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=972ad5f0d696159a3d4a34931f7aea74d5d1e16bf7ff8fc3050ff8fb3da301d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=64ccf93fd5354203ae6f824ffd03cb652021c46f133437bee525c82f1b329343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675L6FVLS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdT0AcjpAD%2FZo%2FLkESdjLDEYC0ZGUmtIOHk62AyUlqswIgL57GB8pquFdKQwIoCfmYf%2FNlkbyuJn6YjaGeWZdCOjAq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOoBFt0f4dmMXAvh%2BCrcA4Ai1jkQvXrn1LS0Hlz5iukjGXiUviTlPpT6xVOZG6whRoLCW8b6w91qT5Q3lsK5A7f%2BDSkG9jUhhYLDPZ6CwqEAO3d%2Ffe6AQIxY%2F59dIU%2BAIL6W97aP8KrKzeaiD9kDZXIzoC4SlQvbHsY8Ot%2Bis2Td1b5xUFx7eOyL3wn%2Ba%2Fai%2BFegUHGweCl6SHk69GeVRiIWlAR2XTeXVXX9lM37hHF2W1osM2zx9DB6g8Xfo%2Fu0iWhgHrn%2Bw2ZKLDufohGBhES9zMmMf0Ibc6FrIhKQe1JeshkHe6snFBrOjYvHRbcclS6ppdq6gyVeXwvTYEuGoaMZXH6q2o6GDaQHJaSMPM2i7mr2VIWn0kescoGr%2FDJsYiFZg4tpWkZlT%2FoNOfJOAcvOGCDgIHSFEfRWtQSpihtz4uX%2FwnVkGC7T5Ox%2FyTfnHN2OPqh2JribXI7RK4czEXVHwa53VqF0u%2BYuD%2FBNO0DlQmKBCiGfcK%2FAz5g4K%2BDyrsypanbzvvBRxei74KW9BW9CqFQFq%2FIXhSg9rNPm9KaxlzeyTrBreUEmckqpwailYBblkD9cAtUlhdovX%2FnziN6NzAnhbfwFtX4urd%2FJ3K%2FfLXZbDvBzVcjM4qCJ2sl3xUM0TFw3zOCQiWKkMKWH8MQGOqUBv63ZZE1IT5tX6fx8L0oGrd9TeGAvyCxx7FxPMZ8ZCWBg9kXouK1WGXI3YWvW1OzUbykCpJGrxGS%2Fj8c8TvHq%2BAzbVcngZtdH6vB8uWQqzLbobiMiEMlNvxwAp55HlWVcNt0fIHS7HvkX3iG2ZeCOzhPa81jY3bGs3zIX9Dy%2FHIH3IExH4ef0%2BQN35p6iFD8EckKtX88EkRUB0eFKOJUszwg%2F%2BQzq&X-Amz-Signature=90b2a94b768263c97b104f5e411c8a562b1461bb32ac920d7f251f8c3d83cf91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBX4BZTV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSuBkRYhlbkcz%2BxCLX3aj8IxBxF0atNR2AXXw%2FyE22EQIhAIu62NRiSJA3WikRDhoyU8PcO3uh7nVhifuS0eV3%2BYbHKv8DCCQQABoMNjM3NDIzMTgzODA1Igz37iIwrTj8OegONs0q3AOTkcLRWprF%2BHPL6cwPrPQ%2FqkU5M0kS74uF5322PO2yiQmheGlTs3LYIsToRyTVtEoml6sDVPKg%2FjjfrMLS418pp2D4hAa%2FfCspCPxmADiNCv%2FcNRIUZbVM%2BK1DEGIwOrZaQIJ0nDceu3x6kNejVrfMDkwtE7uxBSrF2Qd6gBqNIx7nphkr9f0RvyS3nN9mIdVmgpG1uHCtXQww5uWThmKEG99wVboZSXlT4MBJTxVxRRQSAADvvCghfcnW5SLncYTkpOTklc7DUeVtRXYvFGP3peGmJHQBhlr8lZ4lfKEKQ1uAJXwUuGcdTpUytEQDFO47p3lWG0ggo0o9gR0TamoHMXIJgXhEngVnPy252Eg4QaniezhwaDcgFrUBOOQWof0zPe7mTofFTnE9pzJ6dJY7IIBvvBDxdgI2URaRFyrS5SQllkGqVloDM6neWOtq7qBt%2BA2fQtCDhYIWbqzEErxSXH2FL%2BEEjnJZ%2B%2FEyWFC77wQqGuJ1CtlfFBtFFewigHU2xK1CVEKJjr7OdrHoFJdqdinHZODAfsIx%2BwR4Oi2YfLFWndoz9G1JodQ%2FkV7USTLcIdVn2%2F7dzgn%2F5DBcTlb65AaNbAfnGzGyRdpiEQqdowYOZCiKsra%2B6%2FhDkzCCh%2FDEBjqkAdZ2Bio2btxfipKRU0YX4Iql%2F3SLwKIz8Ba5FESH%2BrGVCk0rnnR2lrhu8Ig0Mwqo1EWUbgbx60qbjRClcsADZ8GgsQjyCOJnZLwA%2BzUsV0s9lbAO8%2BcHI8gFfxQX2mK4Hh9fnFVjJT%2F0gtjMSlhz4r45du7vXnU%2B2zqluSuIxh4%2Bf3RJOIukl7mpRpRXTvfSp2Tojrq9K0EczG3okeRTfNzjrJn%2F&X-Amz-Signature=d827f7c59d0d83151bb270c9f68955ba003fd6b5446bccf928f24fa2f9bed801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIQRFBZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlIydGA1BkRBdW5Q6Ool6Eelcqv3VboOqC9CTHEpmp2AiAyKT%2B%2FFaOSchxppiTjm17d1VIpWdAuqE1G%2Fmji2Jn0SSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMeMwV80flPw%2F1QRXIKtwDQSx33bcePNoFprzCSSerDZuaOVEQhi1ZVGceY7SQq9uKrNSdJ4AIncwwGQEe0kBjaW3kGa4UPNzYKUVXSf7Cq8Twzxo723lvnJy58RrycbJRaybYNTsPeEyfrh2E1v92gF8%2B1EIO362gja7MsX%2B92gaqwzomY3agsUrMUEfE%2FCOXM%2FTthLoRMo2wxPnGaIMXWpoAwWhsJNKwT0%2FCzUu%2FEpL4c598wAGfjMNa8wcIjBXAvrlelD56VKZ4ODsWuaTmRWyYvvMrEQRQfwcdTo90MwwKBj90h%2B3sk0xDvf93VVK1sHsk7u6egDoYKkSGxvFmiCs4FoPPIG%2Fy4EOGk1RwVmwMrBynVVuvbdPkBxPbBzR8znaDynTAZcJljKe3%2FrM%2F6VVHAIgeTQsLqb5SEQmT%2BXOsfDItKvej1G2S8vJP6y%2F4Zr02uAWFTOYEspaknEsOitesaIBK2BSAbM9M6bBVJRGd857YJCT7XVzXkrI9oQg0zSbAthX2SMPK1axwRW%2BWeWRwZDIVtmgTmxNCxUfQACSp0TnOwEomJji0vJvK1gv%2Bz8I4dV54T4TLbWuD%2B9qy5iN3FfWdEV2733LO0ijnaVAxKg9xXwrUggOhTIvOIbJ4XPleTYLpZXeZc6gwz4bwxAY6pgEArMyvSYTmO4s9WbW2T%2Ftrxex2QVvJlHblM%2F6Odw9moU0Qo40at46d67vjx594eKyWMK6iItphLpS1IIpK70OFVBaPvwm7xo52MxJp0NggV8ITYrbUewIyVkuZadpo5D5kZDllpQOJr06gw7sHAnsqbSpZM0JJDjMXzV9hhUsHI7Kg9WBKJkF6U4f%2FJIEKDTr%2ByGrppzWKheHIdZfRw0guky%2F%2B77f9&X-Amz-Signature=679b906d2de3b31581a32d6ce13c0bd22d3b7fbb3bf360602b8b847c17f0b4ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=1ac98890ce0f6bcdb7e0e933e63bcd7abb2b5c403cedb719d104dd58419d69c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7C6OUVR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3MB1iVNh9CRmVau8XHDq55jgd2V4fMyVgLaz4GWEnqAiAtSQfVjxo5gtHVMjZtGhUnua51eo5Wee0fEiIlZZ5lkyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMoYQm%2FRtlGv%2FBG014KtwDKwxmaCTsfXqhp99fsH3yYrySukTokTfZqtbKljhaOJLyIyHBgg%2FJJ4BG9X3vNAN%2F3ZAf%2FNKt5aXeUATRn17J9rOKzNGAhQOtywYo3tu7KskGw8Utbh7hJXcUNRdvHjvlMohvm0fOny0HDhMYdaXhZA24lLEMMRl32tnibQ5wgQmxJjNgHBPJKSxd3nd6r3tkuFq902P1zpnwMGRAoDo0YMkySrWrWkITyEANBMfJSG2nY3iXXoDLcN%2FrZQ5CnLK9iVcwHUSIXU%2BOteJFtNYJm6s5yL8%2BLGQE0fY0VI1ZYEhFWu8mQYbFEoYUyZ4Xu8HFNKFlRLTPJ%2F9TM%2Fhu0js1ghvCa42hg7G%2Fwvzvn%2BkFAkWK7rxrq55zIUMfADuYPKiSgRD3NNwfxPkePnD8jm3YOgDVQbEpq3v8T9TzCRY8jCPOt%2FtKVSgOuxrbZLNCbdgsM5Tai9Go3PZA598NE1bXyW0tnGEr15wkTBwsnrBTC3qmfo2VnYkpSybV72CA%2FjGDGfLs2PxnU3wlIOqj119FUrdDXhHuR2zTqctXsPjW%2FPP0PRZCYTFk%2BIaFiLuG%2FsrjyKZSDHbnkzhOq5rn1z%2FaCF6J4dxmupsj851UKUT%2BLk6d5KXy1WAcz9f6Ikww74XwxAY6pgHj%2BtFfxvhVPteX0MOSlIckMOWDCwp%2FKeM62xFn7DJUavupHyb7nHY9sRhouqD6cPAeKxNbrC7diPZwQ%2FvCpbp9xYiU86RfxgxHMrdwN1EeksQSTIxcmFI%2FmIhDGBDnAwuLb7ZcH%2FzMpei%2FlxyetbCGuDdTtOLQvOKojcj2MWkM6KjSTxrmaAXeHCT%2FR39Zl0G4TehdyWxsz0y964mAIYnCOdsiK4qy&X-Amz-Signature=e01d67d3f82157a1e26e16d7aee9764d9d6824b5575ccf70feb2679a764d59d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=88dc9530f7c70ada40a5b6482b4bc93ce9908e58f2335667e025d6f132982715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH74TWF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqZBu1%2Fj5YGSeP6FXRbPXHFzaWDOA%2FVr9shDBF2ZyuYAIhAJ3GEg8QG4kJRhQ0zfbyHx%2BHzBEArgHZr28zUT1sFtRBKv8DCCQQABoMNjM3NDIzMTgzODA1IgyS2pfzDu4eQ4HKeSYq3ANPTYpz0WBF21SROaGOHysjnODwCUlGeRVeJAQM3Y9WgbYj6Ja5l7hxcjx73kZkeyKemmbl7YviuEhWlWnhyQKqtE2dWhp7VZQjJJsZWii5%2BAvPu0osqvcHsUN5XAU6H%2BLB79Xpate3BtRmTO%2B4S9XGWvR4gpXuDYFtF2RE%2FDdLEMP7zwQFhLqXhpZj36th8fpLrW9lljgOjCEE%2FNaamT1gFsycfCiIig8TukGQl8oi4kjWEXCGbyZf6o8kaOAw6Ox%2FcFvbHMMnTZJGP6JKu585X8GFaCCqchrzat7iJqV4bPfEf7G%2FAkX%2BxJibBKAla9U19V0O8qkspKH%2BEt69gbSnrCbgA4O6R97nbSrhN9NKGYKEjaiwbfAFkCqRtgWVUbfu%2B3DlDj8thvDe2dCrR0Mx7wbOLbZ%2BPaxYxXpTx3Yzrqug0Sd6%2FCkZ%2BLCliW3lSetn3qopLBbqsT%2FtVb%2BALj3FTB4RLWmkC96Cr%2B2SC59%2BZjXfpOPQcP2B4cadNFE6Crg6s9kLxC8cqtdeMtX1EL0iH%2F6OZA0EAMkjcS56IH%2FtJ7SL0LeJHTLUBRDtSHg7wXUwsqtVk0aVWCw625ucBDkWFDWGouoY6O5cXn90qzcohMWTj54uAeJMzeaLdjDThfDEBjqkASbbB1yhSV023NxyGsbBrUkwGsnuzY%2F5qlJfvJUcDT9iBtP%2BtAeA2ivxQxY6VJ%2BOTk9WWLRt7L6LUOGx7inmLcMIWKU21iv891DhWilIrwoUGdvMXum%2BRfWY%2FpW9%2BuJIqsQ8wqCXbmqB812ACZEfQO4v65QVKOKFcyXl5ef0Ppw0W0h%2BFUfGZoZKPrpXh5oFqwfiCMRbFW4zn6mlDPEWmJyDU%2BtP&X-Amz-Signature=ae9fdf2fdd362fc335483644048037f06457bea63c43ad4bc010ca77de05f0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=8e5a1231376d2cfdd2b472650fca9de678b1ce506c955c9bbf454948978857a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGBPBOF5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ99JeY9ZnXpYtvD3pLEz%2BrsCqmavHGdFaiYuDTPlHVwIgTzk9PJ3pfx%2BL91dOL6gSnrKveLa2A8j8x4DIHq0QdlUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDD2tzFCgxPH8OIk2XCrcAxKrQUYFGVFl1aex28jZypHV2r7i7qQTs1HX3GGuAuUo7sbCDe8UfzmksF0OLj4f6uf%2FGKBrJcGvxnChlCX46aRel26juhjQa82qs3%2BNfMY5qqGCyIvX5zif8NQyOjc8IjS%2FCkJNN5HDuGMNMa2XtpXUyI%2FfmgNcDQ3%2F%2FlENrhMdVe5npfnEjiy%2BcetaHplZZE6XqdYEpO39bmJ8hSfeu041c%2Bh44XK7wVvs97MhQ5YRvQ1KG9Dhbz0kJBfrdYakPUhQSHtxMHiPF0Gf5z%2BShCgB7wCyOdD7Z%2Fw98mce%2FoFkCQvtfmrwKVxWF3BpNLcLvHp935dZ4lELW4xZ9Ofhqrs19rlxGq0JMmdZ%2BgwdweEeeP5e0KHKs2YRihehazXckY5ujeEw2NKyUBC4g8JZ%2Bg8bUW%2BOxLZ61INcODk7cSzRVIPD5F59IYnhWqNUuOQnnOgIqAdGY24Y%2BLoyD%2FcDPMMAGuyNNhk0ytd5OfrnNPi56%2FfTxb1gjy5Vv9wQ%2FqkoV9yWDHh6B7rO3G3%2FDsYZ6fsp2lgMbHYwQvyLGglEUJO9ey3CIdor4DkUPOCKMVnXCiJxspjIyz7w01ullOAZzR2FZq6GCIUY1EdfkJ69Iuq6x6iAw8ZkwgJMhcn3MO6F8MQGOqUB0D6nF1ICKDd7pKB2P5sBlbuHEF9ZC7IPH7vw7nJPcaQNZ3JePwjDmsKxzDrwfehXS5P6P3iFC2BcHrIJhaXGYYj%2FHYzvXh0HpIs6mUHxeRk43%2BBA06n3YvTjpcID2ZFghBvsCo0sMSGfCUG1TmmS%2BHIaNPWDzzs7w%2BoIc6O%2FvMcX%2BoxmFst52WBugLwwy2QEFuw4ZCpbje7zsAwEKaanist0VSZh&X-Amz-Signature=87fcd0a42620581e7e3226c6a9017a014b621268ab4acb3f4a5d12e7a104308a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=6690d99c62f03fdcc9b79990210a2112611dbd123c33778c35224b957f7fe6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SJY3EWK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F1E3vGwrvPYsl3lK14HL5ld6%2F7QlH8nzs6sYzzcqbpgIhAI6CS2EBSy9VrLjQo78w2O%2B106CeZIQgTxbfsKdtfV8pKv8DCCQQABoMNjM3NDIzMTgzODA1IgzMS4V4221f2hSKFIkq3ANIoy4mCGoxP8rqvmQ2NVreYGlhu3KJG9nda1Ip%2Bn898FbSNwhjdDVLt4KRjfi3H4xKiT8yLBaG8rUFPa8anjWylZQ2%2FMaAJ16jk4%2F2gqraXLA5DMzbq%2B7uYaw%2BmIe6RZClC5udAS0%2BiYvO0unup8tNgR4BG%2FB5lAm99%2B8dkF%2FKUsK0BkpXa%2B%2Fkkf6WwJeCHsjktYFvAZKlN5%2FCYcNYmYItBH9e6wAuQV0i2Mk1tpoOAbEdBG3ofIuKzGyzndtpyMbul%2FqLtwjA4me3LTP9okzKaSZVfbSQY4%2FS3qztHmt4lHKl4riTuRc4CNQdncZkpFAP5D%2BqoX2to1yM%2FL8lqTnKow2d7uqnJY8PzZT3kPWVVXTxQ8hC4X5H%2BJSLIsPV5AYyosiGMgg8Mix2dy8XnUNhcpDOu7%2Bg7Sw4eDOpluy3DYInpyVLWYvH28Sqj4PltqcMa7xNuiPYOdQNjA0qjSx7e6aWsuNT15ErnZ5zdnsO%2FVZXeKLjLTSQSzcFnSJfH7HBZ32TxmqNnxQwCyL0y6yzQ2%2BAUDD%2FygcJBgUCp2zIaBiHDbp89IzzPqwR4cR0xOa1BSp5c9xaPQuh5hz9FcmC%2FPIFgHIwJiDCDje%2Fn3kB2dGXhAE8nbGogPGshDCmh%2FDEBjqkARs0uTaM7Mdu5QP5InYcbGbp8rRKr1T49LZKY%2BOXwSf0QWFOM%2Fcmw8POWoSrblm0QfaMmtZIM4rfJIJ0vC6OdkYHf39f45HqRvm6TghSdvdvWB3D415N8IlKpZ%2FSveXJbILTXgP%2FF2xpYFx6KiIb9ba5%2BA2MCyA8pLurh7aG8vayfR%2FgjsIBlJedEWAuvPi%2F0zHhYEm%2F1EIVyqapI1IjlFXGdzxN&X-Amz-Signature=a2da4019ce8df2c7df68a2cb6a6cdd28c32e9102860c3685f0d18b3de715cf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN7V64JE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2%2ByYBsOo3Zpr%2FKIQQZZo2DgwwpHa6RkBjJXVyjcDjogIhAPKtJmhGADqLlYPOE%2BHs%2BHEKWVbcUPdcVhzjxgpISFJdKv8DCCQQABoMNjM3NDIzMTgzODA1Igz%2Ft9Ge702rEUom%2Ficq3AO32cJb4AHGb1SajXBIYl1ugxmWhqgSgjcJTTw1d7V5baYnp1qwEFi2BEiJtyih8BdSb2HTDYMLnC%2Fbt9iGPvmpkgXZhGlxIwZvVe%2Bzrr5LpYK1CT5tl%2B5nvfJm3k9sM9O%2FJ%2FIwD4wMQCwtr8jk2%2Fphn1yQRESxcI0a75040VK8upnRX7l0wQXCFtkaXdiNng86ULtY2vakW82raNP0hWD0f%2BA6AkxflaBn1Zrpi9DBEdMEkvxRm%2F4Ruz2LU%2FUZ6FGqL5droJVlN46o7cVO5hdK3CUQLS%2FmVhpxgj5EK8c%2FlouX%2F0Nti76p6OPkSUnI12FbIwUqDdmvn4AJy1wStKr7QspttRPPWG8CsrWAByl4RLrNrt9bDTY2oraRXByTZNxGbWsZ3PW6ZRyCjCc0FnlN1xLUpCUwe8ZwHQLZmdq8CUGkaU%2BPmrZKYzgOxR5aJ0E1FLEkzJGMV4ECoNIHImez2KcB25Z0OVjIMRLa07OZ24kC7wNlaoXfhbdo0PRzE2YpCnUVxKCnoZO8jXG5F5ie2LuuRa0zLmN%2BD%2BkYWF5vSY1rAuQ0opnKJXBAssPEuimNU99A48pJ%2FpKyPjQDqkaCSLTk5sn4j%2FjNBw02DK%2Fbf2x6b7X4J5%2BME48W1DDshfDEBjqkAZtkwvpOYmctAfUpjmsDW1AfRC9wkRsh77fzyx3yw4QTwWDcnNY3DEOwCvDUDonJFyjBprZHWjKOsLbs0CA42S3b3J6x2%2FBUV%2FDRn3%2B901PN%2Br4uLcUqySTMh4krZYDBRuTKof8XYZsrjEUfbz5hgp6BHZG6XZupGbClfO%2FnyoAFc2%2FJ%2F63gNnlgZBXYWBo4gq7OP62NR8hcrg9T3%2FfzXisqkO%2B3&X-Amz-Signature=021b4883970f55c9944315fdbda54381827f4c65d145f6480e8898504331afee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OBADVOL%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOULeVFMcpcmXrWMLU%2FopcVwGam%2F6pEr8U5wWIYLQJ4AiEAvtv2e6%2BwP2d0EVPb9HIkUBKbU49M%2Fey1hfOA6mPoeEYq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDH2ded1dhuNCc2niPCrcAwjUfIqWaUx58Yj4XYNBxd3NQl0pCUsq3Q%2BftHOp9vxKGmmW8gFNYkUdhyE7CVxeBbehtf4xozW3zXwWck8IDdFCZZ6zNbNjvlS0bckq8wzvm%2BSv4Yk%2Bn%2FJvGnQjUZWTarkNskW5V39gVGJiXIurO8cmRsLnRNJ%2B8YOSaqywbs%2Bx1Ky%2FEnArVBBUJMIEGLvBqyXcVtD7i%2BE%2FwTIH7V%2BeXzt4I1NBT1ndW%2B%2B%2FHgKBabSonqId6xMXbhq33Mj3BS1pvsiO2%2F5EUqLY9bVPFtDYn4j9mfuzuqFBgNt6ODTT39xvzqtAZ8IOUlJOvZ5m2lIck9mwtr3TnZe7BYzcekzs7qqCUXq%2BrLBWg39WJXZ4W9Gpyq1j5T7VtlX51TGykC7wyU5oclMpqZ26sBm0gTvyc4zgqzr2n79gjMJTPumH2Zz1kv1W08%2F9RvansY9bVkE2n4I1TeQ9dgREsVZWMFmuknADTxo3dNvna%2BWONoglDnC9aVUQPdIFtZCu%2BzxSm0aFrVGsGVN6e3qqYgHI3y6u75fpvPhwo2O2rgGdIDRyMlwBVDQqwzZIIBJB9DfJE3flyhJ9jKXCnQheJpM2RUZ8IU%2BiNn6bk4n75EhZxqRMu2vkk5TvBTMYdP7Lfj8RML6G8MQGOqUBJwS2APhKbELJyaE4mP01PsZRCrhVyIHeWu%2FFrt92pnZWoyEas5WJyGJ0q547%2FSrz3z9p8tJRxkwtlVA6yUp59mcq0cqRE3jDxqdZUGIZtpyXUys62f57SkUuKiEmtTb5L9F6NpJaD5a4pUyDWlkk2KixdID31eQMyeD%2BNMggZ9ryJSC56bWZ86nW%2F%2B29dCuWM5OOhLXVien8arnoLhxlvdn4iLUk&X-Amz-Signature=cba860dfb2f20a6c591c95ee02a5a58acbab84d429ead5ea0f9d3a6924258b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPNJ6JA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxw0w41xRk2Lh3MhgvMGtGALfLK6PuRE6ovUHtSh31lAiBr0rDKjp%2BxbGlojI1fuf69vodL9aj2COSrhbsjRH%2FWwCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMWg3K3DkFxglFzYp0KtwDAPZyg00iYB7akK8H28lDud3qYjAvO7c%2FKSHij0BwCp%2FiXxyl%2FdYDtGGxrcf4ew3T8PHMscyLozZdrwGHlLuge3ujrMksgyMQ%2BM9%2BBUNWOsjFcC5dR598vhmUA6UoyWfuKSPGGAHVxD4RhbyhFpLJaNRJLGy4HqnDSw6ykEjJx9HYnvyzG3H9fVRFXzTKkGdFPb%2FFMaGFvzkOWTZ8nJxk4o8ZwykwxEtLDqE50mEwcMh%2BA5oM0kyaOVlf6TFZA7q%2FMpC18K6dM2I%2BCFRhEi0i0B1yxy6L%2Fy6YHsFYQK7H3El4U2uyAHaP4ODrwpLea1shY6rdL0jR9bT3SYgrOzsPQc3lpDeXbXSenUSVtq%2BcdeyTkhGdMawclq8Lkia3pSSkuSIBc%2BtYMsYtlbpDJZxI439Bl5IqlcYIpMTDYGRy8G%2Bt3zeptee9lErap%2BDym9jqwzzfEMYyCObzz5oqTfqlJwiidy7cdNH%2FUKUmNWszIOnz83pHDpVYmF%2BA7hOgP9NMLT1r9IJu1DqIg7yriNwQmHTBrtO3ZK5igRYmNQs2RssEoEV8jd2MDVkJWOkHc%2Ft1iy5aZI3X4DHCclHRkC9spSmB8%2FHpyNFSBrJc3cd0eMXlnyxZTgs4DUGd0EQwmYfwxAY6pgEHrfi%2Buj2yJUy3WREv9BnKHpsUXRPk3uCTFKUwucejUrYQ3T8PO3sENhdTPBS0HaWkeOA%2F1tNH017m5D5YrMJSV61KANPq1FRLzxPFPbXC3kq8JAvO7uxP8wSEOPaqaRdCDa7nQo18YhI5%2BMO1zyJEgIIAE0R7vb3ruEYa386yfLSCMew26IqN75zTQGlicvSJFFeWSEol7Q9F0OM%2BCBJpTPwLZ%2BQ%2F&X-Amz-Signature=ae64bcee431df6c2af4bd15ebc9245ee3082588083237dfbc9f662dcfdf158eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUL4P4BT%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDkaBojDj6ijzv3sg8OjBWgucnv%2FCzcpr8QSvh%2BJYiXEAiEAoFrdVDcq9vMyI3trmM0mT9lmKFgAgGPMjpydaDG6OwUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4Tp0opJ1IaY3RDtyrcAyZhswrM%2BtTW5bCfseBa234kbDqHxSq1E9Uqkr9ZmAudBK1keInkdtFCZspgIO65uCfPUjgKvOJnkqYv%2BSxRFTVeS%2Bc6qVLrBMEOlzkJUvI%2B%2BlPn8VFhnc8jzZs2q4l2wwsIRA1Em0HdwQ69XmjFJrKKoDRp9BdW%2BLmi%2BT9AonFyZ%2FETjz1T6o8SnZWSHN9mrUvwR7nDnmS%2BGxYoBPBG%2FKxfMACb3X%2BeiWv80WecnvTc4L9AfWI%2FxfHym45q3fq24d42B1k1Z9xvH7zDlTjZQINrlvy1PXMce9%2FnP2cerdhxh6KRa%2B%2BsTDbk6fYbSvFjLamaKi347biMtpgNYnVunFmQlV%2BTPVLA9P7yKqdzwk5TVrbgqclf9YbnB52usysKSNC3cnwE%2FSp6SeUoMpRg8YrRZLHgtTmnEoiXvp1HGRPc%2FnBf55W94O2dXLA77BTsvwjNW0YmmC%2Bhgq7qf2zOg%2Bc45IgMERPUKCX3HuVRkZivrjX5xVTualkmDPYvfLVob7XBJwgLDPYrRuanYUmqbx1bEXF6%2BdONNUm7hSnHkTqDGSaRXxUW9%2FXnHerpkk1ANeebfsUFxA7XyzsmbaDRWtEkiUzvY2Exlc9lKmUuEltCZFtdg68NHOLpmatdMJeH8MQGOqUBnetA%2BLJo2j6LmZ4nlzjOrKYy13hTc5AZOSOb%2FXcJVXdZ%2BIswhusR3PYtbtbInTSmyylhobVm19JN5p503hS%2BSx9xKWl3J1yU7OdXPfBQu%2Br4mds61l%2BdA8ojx5FCTg5vZLL4j65qRZ8PCSxC4GBZFug5JSztdDixAaa6IcL%2BF34Q45LMXzkAQYOJeGoastV09AAQkcp9O1GqqU9y%2F3imGNUjrB74&X-Amz-Signature=8fa52ef8e3c5b0458de6caef2c50b0b41ba0247dc266b009e991be3deea4d64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=8aa969b9efb42d4d0cc8877ec74642890d7e81072557356f2abc8ee7e9e0b583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGESSXV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDworHsf4txGXzo6Sz71lq3KPDkLzKg33wccmZPE9fHcQIhALVuJsjzqBhljML8rjOUq1z98iZW8eONuT3oRHT2n60QKv8DCCQQABoMNjM3NDIzMTgzODA1IgzFRwAceRmBM%2B5qLWkq3AN9mdHKz8ixoiMKZgqH1PwX2t3DO3SOMIS%2BIETDKALKSSoFjejfVdhiMpRe9VELGEzNW7hjnaaZtc26kiDl0n3bwAK3LLZ7d8VuVP6NQpcf%2F8tHiXKgEHcIxEMr0vDnB3Dm3yAnsEhwWEURiqgladFmb6v8mr4Z3W0d%2F9IzSG12WFrx0ibvtNFNEhDAmYTtZ8GOtawz95e6gnd2nFXaVYhj5gR6JN5V%2BGq1O0A1tUSVmDM%2F0%2FFroEwLJBJS9M8VWeu8vTQS%2FAc9iQGdGnppfNpaF3sXvUWw8Hpis6UyUftpmSXmyWDiOujdiqRvsO46W7zTiPp%2F4dkxPdhSCf%2FxDn1Kl4R6br9iYvVjqM8ewRXlo2rcAllVxXUJDUhiuT3Fdi3RF6BZkWRC205V28iyeRdaOaobvmAQ6Gb79xX%2FltYGpaY6lCG33cg3IncFPMmEQzs1yhmS932uDOiw%2F3fX4lUDdDGslfnAFMPj9NjXs%2Bd7mXtQ6FVQX51AkaZM%2FucsFWBIXmXyLIhheM4%2FaGy%2B1QUdYM5tTklF45sZ7c5%2FVwLTiu3tUyLaekXQ6RRo3gYsuAoD7ZtaFZMeAuWrBt%2FGtcmtyYiKC9fdmgUf57nQHQMg2q%2B%2BBBPBzM1V5IeXMTCKh%2FDEBjqkAdQq3GL1Jetn5K2eFq0bWtu0HECEnZ7GHuvNOUx%2BvFzZUb5QusRL1kFGXvBaqAWdULRZbny2M7kO1CqONOuRJVDc2FF7tuDGNuTzpnZxA0UiCC0HHbWi4%2F2tRI%2BtXZn12GOxYcXBr%2FkiMmBUDa2dcPTaatxKpfwmQVr7H%2FN3i5%2FIYY9uzgFTmvJPM9cgWsC5%2B1i6cxwCn8Ec%2FA9jjhF%2FuaA0xxGb&X-Amz-Signature=d26c483483f0851d3de67fd77c6fd8426dcd43dbabebc3144377c0601b7449f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=128e7d388c8cb66d9ecfe2f9078c337a1bb89ca8fdd61d7be13349fa227feb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=989912c1b392920a94d245f2dd40d1b43272a32761e8381c2bdf0554934f5cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=608d0fd137bfc6090d85ed6ca74240ae977db768bcc0a0d9a4416150212028a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=f32e7ea1c825b164ed3dc644dc692c019f3f61da54a890ffb3e2509dcd3fc26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=4b26a2fc10952e39e386c4e5d746737945e8688ef7c06449139be4fd548b32ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=0a30b4d9fcf2cc3ed20f0a52199fbe0fa66782002aebaa5fc9f92e46cdbce407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=608d0fd137bfc6090d85ed6ca74240ae977db768bcc0a0d9a4416150212028a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=aeff267c171602392430763504b4447882a761b07a882bf38460fac4fac75809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=d65753b0f4d514c3973ed2963badaa384ebdeef177d2433933687e2f1916fcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNCYHZ5Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwD%2FFhvMQyXM2nZHmlumuecz9g0DVZTZZQ8ar5QjBW4wIgQ1U5whzduJmv76Yu5V5FoENqhyEbXIKXGv%2B78yDqUHwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDGkUGvlIEjGZDLkyoCrcA1IdquV%2FHAuXGcm3eKESQU%2Fn%2BKQHwbAS31siBS5rAIp6pMu%2FjTEi77b5OSswxwAbW5kcnPtVsTgzxrRPPfPza17aiwJIRx1zdfWQoInCwlk9SuVcD9kol%2BlvQfxlBNuI6UCTLjXBBeMM74Eknj5AWA7AacmoX4Gj6pAjHRMeq2WVsO9O42CewdJ8u7%2FoU3WmCl3w%2BzFNX%2BnR4lGJ7O%2BxDHXXhwM4Bd%2B6NH6IcZwcTNxLwuDuQT39V8f4mh8uzn8H7H7AiUI%2BATN12iXhyu%2Bn%2BV5IQNqv8lOdL5WjUMgtxu5BnvaTilCDcFvC3UlgOydGTlTxQyD4XZQCCcC5YE9YCzQ4tW7Zs67xJzaNNBfs8yfyPLdlIWwZ0lR6%2B%2FuVeX4Z6L3TJE9yjHtA%2BkRlfyG0aYDkgXPH5Y953%2BuCF9rORW4nED7JxSF1HT53xrXXLjV%2FybAB5GoNtLbVDYHYUk0JviL%2Bkix9gfGS8QXy%2FXg51BB2ZnSdDqFtowjYJIgtLYzWG9erGLZXmLrdIKptyMxs%2BQ44OuMZfvGHO2NfXdyKxl4veghi90IpaNO0gbCrlwaSlZFUpRznAtz8%2FISWVbnuZ8iaSn0a%2Fnp0CoeVkCI0mRUQGKlN2W8W2leqvqFwMIGH8MQGOqUBNf486%2BZJs%2Bg0iA6SsHPAPbZBQutAYI3UQP23HdgU2wo6YXJ%2BzEcQozci%2Fb%2BNYng0RWIH7HT5Nojx4vyhG9RmwouwIsVaz289jbdVZk9AjALz4%2BxuHHPIf4%2F5WECgUn9wpYeKkM0Sd8zw49YBCFkyVYMh5xssLZ6Uec%2FNJOek3%2Fg7vExqcDGarZ1k%2B1pumu1Z%2F3MWgu03i1g0Gjf8mDoBkLFdy7OE&X-Amz-Signature=af1a4bf88f13c491bac4c4f3a1c699caf3af7ecbfd02a9ca23f0ce829ca87457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
