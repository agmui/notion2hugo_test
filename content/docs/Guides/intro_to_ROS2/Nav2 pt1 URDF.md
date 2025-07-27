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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=3533899daf2e4a7a548eb16cf014e37c7e7571e1ed0eb91c046fa94cc0e7127b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=ec7fc263f759f097e75ed001b2e815e9a28b6d90497011013e914938c84357fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=3b5348acc24aec48c49234ea0f326f6c1a22390ffd6eaa29b1dd8f9f7d6ab517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=cf8e908a36fc58429aead3a7cab5ad5de28892f83ff5f3195d5161800eb251f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=ef30c3d4bf3936220710ebacf50a6b3abb6fe3109ebe91bbc6e8c7e73308e372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=73a35f251359772cadb3562f0d7d3d339aca2b06c43784c401342a65dcf5d1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=e8ea3fd1a6e0123f4bd6b866a34a21612d9662243efaf3a8ae2e5f3b8d20fbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=cdeafafe9a48751f0379604bb1c1bb54538f0f4b00796ff56110846de6ca6c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=e8b86eff6492427ac6837f02a753bf01f4b0960be812da41ddf25bec1de72001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=dd4b6194ece45e8a47dbd0ce03598795c3f1b8780e551088c443c5832967d08d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=b28f0cbdf26038cbb7807e13f6e664d9a84007aeee4a79022342710fdff2f69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=0f9b377b2445195fb2b1c85cd337bb01bec5b0e3776d58d0d9afe6adaf3b0b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=c4944954c61c99d58e4c6c986fba2f5ec2d48850ba4cd42c13ffd2d7e099f1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF5KSAT%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDoxdq2Pvm3jqfGILnvXCexPoKYzO27JLSJrT9f%2Bp%2B3RwIhAMI6fNZugWBwpwBcFeHBzk8b%2BSQUSYtmnxSUX2y3%2FPwjKv8DCHgQABoMNjM3NDIzMTgzODA1IgxIoB0HoKtlxJrjQzUq3APPOclyD%2FSoJyeLePmmbFX7AWGAgTmx%2BMK3XdzEsODATy51%2Fz6KQ9re0FTMa536yLRkOdcEcRTv7d7%2FBt99QDRj1WWzGP2ohJcCU83suicdFXp0NO4qo4amz7TUIHUFxWqL8ugJjDOt9NpB3gO7EQUT%2FzesX30PNZ7Izm9kMjeDLHZ5gqLuEE96erre8PWZpz91AiKE18AeYikPdWugoFQJAie96zah9cwiD1InZF%2B3cv2%2BPtU0ilKET9arWmhAdnsPLy6C4AT7ntB3rTWi4%2F3Go5WqoUF%2FeD6EflmdMsx0H%2FEGD66AWgPe9xjcY%2BdybnGA6DEaJgrVUBN%2FpxbtsqWh%2F9aKJpsaUiKbtAJMIErtJUj9Zb%2BE0IzXa%2BV5vJDMRpEwLIS3e9UuVSWLsLj649epD6UELua5SvDwybGaIi7p4l116cl7B%2BxLKmQmPIFd0oUf6qXEowfqQGyLTaoCRInpnGOrXrNC4sBQSnCcyrdcCEbG%2Bvi5WHKYxUFgWV%2Fq3oDRWMWB8Ko3wBeSjosUUWGM%2BR4xDcMFLGGgf%2BcwT10dDFdEcaxWB2KLhSq42IbL0jP9xwjHgOPYMqcsPIBJT1Ap0G2GFUqqlcwHXVhaQGFetMf7%2FcKzIg39aV3%2FKzCS%2F5jEBjqkAR%2BV%2BDNHaLWlmOHhlMmDC7QvC11U37iKjtlwxT2OjfAygF%2Bbc%2F5vy6PZvBYvDeMWB0FrEepynhuX%2BE7OMtB4rwFeg%2FcuQkwvHNJby8Jpsx0bUiQVvld4WZjUXShxATGwqnL%2BYSCtfZTPAawSi1aw6fwvR3zgvClkTTqWRvL1Vy14yVDHCVGnSExG3x06hFx5eumD0eBeuvxEM4rx3sRSxQrj9osb&X-Amz-Signature=2024a2b661456e90a98c07386288301756ea870c5b830c135e73094b25c74633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=4b9cf9cd76ae4d85e371e07fad32b14e629e3d8d7aeaf3289c8109a597ee87ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=a828fce9762778d8c0cc2b5036f0de1e57fd5e64217ac03518571afff379689b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=d5f4063175dc7f1e16884233e253af9a654fdc9397ab03af174c9bbf7aeff2fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=43f5c43eba95d15e912fd0d28f4093a9b8023f39738dd794b9802ea20eea1089&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=448158e3330f1bc8218f87682c91759528e01096cf55782f25f2f3a739d59ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHIYEOC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQD62lcnt4pThn9UxdFixYep9CljWH2ajnY%2BmMWyicbqSQIgN%2BaK%2FT5joJQHorW4d80yWmHakKrP8tveO5RYuad%2BHLkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF6p94GJ634fDFBtLyrcA2Pqm86SRqzB4vCZ6%2F%2BnYlW9t0Vi6RRZwhHJtmOhEn3a4XAbumrz7ZxEZ85i4Prd1TSgGHYAuG1Ao4ALdZ5G2FlecrXRyBRPI6g6Bq8VmACAV1Qham7UqXVDmEzaGUCwoQnSvQy5HOScZ0u2JAvHltYKvo9OdIHtQl8SBK24YQib1Apn8NCbHwcPXSqiqkYpW1HhgKaoJSHwBXK91HUvI5SsgxLpasv5MmSYp7QFVNXKjYhYbhbgOYqFLluGybYQBQ%2BEM5ho5sF2wLYp5gimka4JyshcxkVDB%2Fk2PcTzfgHH6NLGbjp1wXcvcpWtoGKU3j%2FGO2SSuKweT4R6Vi%2F9QUCgFjQ51pwwUf5hmE7%2B%2Fsn%2F90sMCKQgaUOFQhLl94M%2Fr6Hzot6fYQXZV3oCwUEQyU%2FST2eiDro%2FENsrARZY4G%2B2dX9bcd5r20PtXkP7E2CVrlW6aQT7JGR1qzH9LdzXddU9wuCrjzy8iV2qelwl5z0HdGkPuHew7kv6v6JkxWOMO1XQpW819ddqxHcl93GDM8v%2FVNVSjCNfNy7vfeqnpCecvzwYTeVN2JtgpaJSnLknkzRsdmy8J3Q0jzRJJgNbpyrAKld1b5plG4Q0s%2FHGk%2Bhz%2Bab%2FXlGqwuUWf2HPMN%2F1mMQGOqUBHlFALb7iJGVPKjhmIjrvMP8FQfiVSQlqnS1m4WEOe8xRp4pPGHCClCwnhOBRMTC%2BjixA2Cl5soy7OBXq2aMmmQtu%2Bg2B2vlsl4JIGCyvmJqLTtAaxrVRjlgKnuSnEmy%2F0pxGwOdS0fbWnaplhhYpJ4Kd3Rs1%2FiKJuT67%2B60yPzl3uj4CI6gQfrzsmi1s6cC6X3jhDO1t9GqhhISu0ML4uQE%2F4puq&X-Amz-Signature=72fb381ac9bcaaa28c42d5cf58f608b9df710e4a31cb3342cd0bb3017eb2c51c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
