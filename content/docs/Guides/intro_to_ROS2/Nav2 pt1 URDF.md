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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=2b336df242fa60a960499543b50b8a8ef3bb4c65ec5c2b702e446d2998bbcb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=0e0cdc47f4e1b056555eeb9e3fabae292ce037f71ac074f7b0466162b17f0255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=bd954551e02d7f76bca058a4d0e2fc2ed815464ccd0ec881a2b95614985908ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=947c2af1c609e6feb960ad94f2829f0f0f4e5906e9d8b752b028d7625fceb89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=1ac91f3413a006840a221dc9f37470594e73ed2d0db311aacabbbcf50be000e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=617c57d6f2f718ddfb72fde84a0d75cd5b21a17c81b94c8ab36cea7428f37e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=901face4dd3d001b6382e6e10fd7f7970138b10e9d2de24a31cae13d3ed3ffb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=b0bbb06f543c72c8a22c71548de8d2ae1efe21ca4092cfc842f15b2256ff75aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=1195bed0f76c0f697db8970aca970d16b0600ea1132d1ac72dc78fec49529846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=e3cfb2af8f5d8e9f1bbcf1691923a606c24680bcb56047bb690cb91ce29d8478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO6FWOUI%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCpGztVRWXRf0APlnVQpEzB2jGIn9H0Kb%2Bz5X6nRW5QywIhANE3dG1wmaoQ8gAyHzX1FsUuhEhcJM81Wk6oIL0wWGGWKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFlHuGSLqvrRe%2FtXAq3AMgWoNXxV%2BND2SDeVKfEnxuahx2EDHMJ0v66hS6YsPBgF%2B%2BNkkIGebiMicsp0LNrMl5YTGCRSwlWd4I9BOBNTh02VBOBN9SNdWANunsZQHkH%2FqI%2BeTlT%2FV0XSk5LZiHIC5U%2FRDmtr8nIuMnNcpClm0crkfdEpj2mTZwxK1kD4hSHJl90l0PJytLwNdsGHGkutuHBxMj7yBdAfxPwbKK0VeQPgnp3aclKIu88FlQGstSBNSBkLAMYFhTjR7uQqg9yjKWFFcZw7UyTDu0jeTzk%2FAjgp5IfPTtF4UOU1oTlCT11S3duQY4aEMCqg1sEYUd9rpkiJej%2FW7y9%2B%2FV07R4k34YznsbNRYhqARka6Ap1cGdbqEZRAgbnagHT6f7Drie8puFrpMFhX8ZACCB3Da2NVPESCRP4W2rDu3BGwbwo8T23xFaKb%2BD9n0pJGGcMhqcn6eFS2EW0OmKx2%2FFBDnWauovBvuFt4LXxO%2Fn8oIuAsjQTxcym%2FNypx76ltW0xUI0xEAZhdyUv%2FzqPBSqjk5i6p4ctKHTh0xHQ%2BLjTlp95b%2FU1YbidpmYqI%2FOQE9gQy2r5kfVlEUFzzC0%2F5HZIgczxsGVe8XTH3lnxFR7tSm2WhUS%2FNMkD%2FmAyMKkCpXBCjDW8KfGBjqkAUSH8pjSQ4QJotjh%2BxcKkQbz2jQABzbM8DX6GayD2MNpMOH9cofnIKsd2MilDye6KlobfRMTF5I0SOIzq42teMiM6EuL0CnQ8UDnSAb0zaBRe%2BsN%2B32s8HDWPM%2FSZaLnWdTLJt5edLx%2BMMKyt%2BvXDmlVZd19vp7KoQ%2FULsFzZrfC3YotSu0CqjruZSz4wUYjqRwQtAPGvoApifcXD1s9n%2FIUU9Aq&X-Amz-Signature=8eade92755fb04d424753a755d899ed252f5ab9c2c3c8cdc4c09d30962a8cb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RW23LL2N%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGax3nYlc3fZKvBUBgs3M60mlkSK6Obj9VVaT2DJpEZ2AiEAvek8Ii8zNFlFDC4QLYCux%2F40P5g6lZAw7Fz4UwLw3hsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUNhU9eLSRmx68k0yrcAwSh2PPmxE1e3rYd00sU%2BkIVnsdNkz1FICvNsn8DyhfbLpsznNXZCjiI%2FfVAPzU057noldqqh6XZy27EqeH9R8Eb%2BxGVpQUrcsPxSAHun6rk%2BCsywoselnySJSchpecCYpnoRQ%2FtBDwi%2BcpzOUiy1YRvwBqVnqAbTdqnBI0H3%2B0O55uJof8U8Y0oVu2L9LZ%2BiumJAAhhA22X3IC4X3X6v%2BTP9cUrnQsnK78jlE6pTby95xdqF%2BkqJsi9W24S0nPL%2FvDF5EoZ1RHTVj%2BQDdduAgqcRkczzpBcnB%2BZWH4Mbh5c2qIg75%2Bq6c3v7TvHdZnlzktJSiCF2oJxu%2BFtNkNV8SGqmPQv8EO6izlHwnB1I9wpEIjmogknaNkjOJZO6n0ZB%2Fx4QFdT1BGhQTmC51OmSc7MyCBzhM1smH4F9LVQettj502I0eQ7Be4ks%2FQJcIvoHM%2BVU5K6ZNd8eib54cJ6jIrMqwKjme%2BXmq8aBTDmXMmZibJyWovohp9e%2FPbZ3v%2BXH%2FF2%2B%2FKB4NY4b2bYp3uqo6ByXg4kOVOha5Ss0HCBycEb8ph%2F1d%2BRORJk7pInbrbM4sW%2FbRSPyoLiluQ5TqHRhcNZTKxTWXJnD6xDzgPsVJ1HtaZQPJzDadJpt%2F%2F6MOfvp8YGOqUBD2UDDqpr8aujGnkOyO%2Fqugndo9%2F%2BWSYTXc4RC5hhUU%2FhfXUV%2FXdQ0gfSHRmnA4YdsMS6XGWyG4XAy%2B5O%2BXMGQzHNbmMIB0423%2FsbKO5j%2F25%2FUSbIFqYNOdcIV2MZpABb0EehrpEgZzOo6k%2FQTG%2B1LdB4U6gi8lXQBIBSJilU33iOYlvQVjqAfA9GzdGg56mFB3DXdYmXh8GylY36nUYSt3cN%2BP79&X-Amz-Signature=67a01ac8a322f459d689f30c38875acc71c2728c04fd1fb6e37073f41cecc16e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQU47IJT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCICdJ%2FUBMCcpsMdRXEjBp0g7bG%2F8PVwTK1zwnyw9x49hHAiEAuMatqfPp2pXbdW3ZUpMGznXd78o6BYWQEZcelBWfnroqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBLRUeZRfC9338MmJircA8Bs9vr8cpdZBw8XDXpzGxCQuFLFYxw96%2BouEbxIEDUDFhQT%2Fc65xUaFgMPODFPPWVhYDteF2vUavXdaP1DJWwHCrRON3RdvJOVr14%2FefQXmatyOugQtht%2FVilMUjLN0MSt1L1AWUXD89plLYzjpVf5Q0xf0LcqDFedzblxvTVfk6U3DJcOzOxToZN3YnQoNdZo%2BotVSRQmlO9qSqAU427h3C2Z2%2B0U8YdvwfXEP2x3%2F%2FiKJoJWqu8iqtjKDrl3H%2FSWTsn%2FXsPfQ9ZJ6HZ67uD0JFKZxhI62WYLgOmG6Q7KyQe34ybz8qi9Zka%2BJRbsUC0k%2FwShZVDoyn5Oc%2BMfzgvPuku5eHWH6dmFBS%2FHIJqrWa7%2BMlMLgHyEO0TKF761OnkfbmlgwVJW74edPIlNw%2FKqZWx1i6chtr8hDR%2FqGDgg6rigSUsDBFVgXoq85Ks6ifVY4Y3Wj3T7z6m%2BBCu3%2FQE2FxxFe17hPotl5C2iOz49af9fWs4PCnLnHInJI6cO5%2BvgbqKXuAZSziSJidRVW75ck4HuqYHqlYTcW2o6s9i1cmjo50HFe35codiuyS5NYccjL%2Bq%2B5KApZ7chQn2kVSqc%2F5QjWMJxlp3RF6C53almS9rrqNoBcI7d9GmtxMJjxp8YGOqUBM3j1V3HL74wfVVJLKv6eeKF%2BfnR5Nfp%2BWCFqk6Ry%2BZR2Wsa1oIsHOXcAO6GlanUCPysakjplqqz2TDfw44Qxczeoj0poebuqleKBnipmCkI5%2BMW45THPyEJm5VzwYMRHeEg1HzMgm3BtHEm4Shw5HVdZU1nKTcjupBa1iwyuTfLsoDuZIirmVyxUbmP3DtLxkYHNXauz5weqOGH2RzO2m8r7%2BgH2&X-Amz-Signature=d15e29d76bdb2d0cd4bd4d711c1069253d008b0c4ffdc90e497188073623658f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=99e4cf246af311da9235e5b14938515cd2e4563f97ed74926a71e6d1ffec2898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YF7HD7U%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDpyAxjA72GdZEmXb3ip9NzB6gXwAx0kngdo%2FqzznmcRQIgSN8vXEa9D091v0V700sHG0eMUEZB9s%2BZkP8kd%2FwGFG0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMU23VYtlrvbZaS1BSrcA8osUhnC1nBzB3V0bmlPdLXhDXjA5YYrDNmIlhif62U6kIVywHD%2FqjSYyLfBye8Ezn8GFpZow5urpHUvJh18DBj6dkbRtTUNg5jEzhfUQC3g%2B5%2Fhofh%2FSFoqloo1zOP6ch0vlNEG5MVP79R5un%2FlT5%2BTjG%2FIwmBVybVWI39%2F5aebbHrCzMFNNrKxiYJiqDnXdnnlG%2FQN%2BCrG9bRVkG5SF1rnbi2%2BJT714zN%2Fih0E4SKmzIrCaVfn6Mikph%2FrSeXKGjRha%2Fd4LYvOgAOS5rUX44Qd5fPYLOEngidYyi3FOhEiFQ9AA34qu1QOi8nUp%2Fp%2Fxraq9uEoT%2FoP7ggwuKRKAcUUeysNStvUC5oOvHcy8dOIoXYJMZZC6od4Ku0OzzYzHL7aR7qliA7jukEf9PSs0AHnPiO%2B46wPbIjXTqtXY0ZTqB2%2BRmgwiI7L2usPprN0emfuxFDjW009C3VujwOwsTPa6cnZMH8aSN4CNTU5HyGEQ33A45IAS1SpeWYtaRBIACQhU2iL%2BSHPKxseD9ls3yygOCdq1H5xQ9lWXB0VEt2sHa5A3RBCAaGyjt8jImf1A94eG5rFWi0HREQwijAunUEHMttXBPe1w1VSCDaCjLYjTu%2BUdtosBHGxqxJLMOzwp8YGOqUB2blrkGtvX%2BV0M6BYMhtjtuO50EKNm2AIG1CGb2lLI70pEbC35tdHDedFbICWcy0cfR5Gm5O9YKBjvvpufQJ0aiKnWqtw7w%2FFWxO04FWARnHhWTB69VkOuhzNmuIJrghamexCMmV3nfGj%2FnRGliViI%2BerdrM2GSXcDs6ep925sUcBSkfVl9VHxPOK9Yg4123QwCGIi5uGi%2F3Yp4S7Kt9CwdjgBIuZ&X-Amz-Signature=72d3d35cc485098c1ef534b39d710074fffec80f8e402f4e65e46975ce52cd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=4fa89a4fcf41b2a5f519e6b978e7bf1770e5ccf31de69a4c5f721fd56cbde275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EBVEVTT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEUjhjWLoMW5ceQk4RjCIFAxY%2BzoZ5lPwRj0dNuspTntAiEA%2Bwa885voxmbJjh%2BtuihPgKKZ3s2N3CyMAWufeJz7alAqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKK66Dd83b8XW0qEQCrcA0zq5%2BPYuD6r5vjpOiLzVROd4sGtsEze8oHbxOzMgVZqe1z4%2FuJe1no%2FBKpAIMaR%2BjCraD%2F3d3soUICDFPIgoeg8WMmgrcKcluCd9vidCTPO5HPso4xNa2hWCQMM6DLYPk40eMOV%2FCGgNJxSARoXlQ18VoKuZsEPngMjgRRU5bAi5AAWqsd6A2rVmXhaU8Q%2BGKhuY2I0HDi9Sg%2B5cZimcsoeWQ9XfEKB75sv58PjfdLqst25P5JIGZIdx7qN42zSOK1To7Az27aL97qSXzLid6ye1fd7K%2FIr5EKzqfMlMWW5NOkc5jGA9hqpYPiJokiW5cSQNSPvY%2BseML4pt2OiXf1IltSfYumrRNTim41urbq4GTPQxW5%2F2dmBLkJRHZ9GgFiRhTA%2BCx55u7vel23tQ0cZUSjIQv1JE%2BVFr2EKp9Dx4iqBWnt%2Fy4guxKQqKCoSSE4X9F2iXcmi8E8G3bNYr3v5G8Nzq4TD48FOiRa1leaiyhxwi9ydlbJGQnoFmfLdQYL40xIpmPjyQiiSk8P%2BFRELJ0KPQ7HsKrEDqSn3jnnl8CcQ7NfBXYdDT2hwbZEysYLeymtAoCqmI5ahcVCBhBCCvjMhCthi%2BQIeb3GCcx3bdQkXsg6EFM7avb8bMKLwp8YGOqUBeLU8T%2F86NzBwgWeUFfINeqbUaIAMY0EQ%2B%2BxNqN%2FuMvDpjuHU7wieGju8DBMS%2ByiFZG%2F2BU7CuBj85EotTfAqlnTC2PugdgL%2Fxh3jAqKpcvc7i1Ej5tpUtYw8MAfoVoFH7w1YvU98ZqsK9XweuthNSN%2F3GXvwP8gUIy6tQV3fe1PPlKnWUOj8Ri1tYsDuKP0CF3TD60l74fCrKmwUcAl6vXrcRK1W&X-Amz-Signature=c752c652619fba7b8877e24cffa980f82f02cb722f34867c4ab7b8005487f4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=89df376324d60a12dcb895af23094b5c320e427c2b0698280ea9551b7a6c1e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SLGJBRT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIGcgL8l3LHUDUiYSfH5w2fHYZjekQYYsed3810zq5QD5AiEAjabElt7IO9msaWlZnNZhhb8rc01aBow616w6aX7Kh04qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJqWig0o43a%2FtLsByrcAyXKp8eyKx1xb7o%2FAOrcB1KqSzcuLqqBllZvL7%2FlP3qwCE4L0w4ACH6M7H4%2F3S02pvW4QnqzBaR5IJKqabAjBIAyJFFb%2B%2BI0smaUk%2B%2F6HS1jVN22b7UOILwXMH06xJGboQBE4sXZoYzQzTDlen5wJeFz18iR%2BjS2dJZ2USRa7Jmt0om%2B7jLfjPFX7Y42qM9bOJjvOiULp%2BDockOUmeP2uTOTR9FnPsBJ17zVnF9DHcTeGarxWuRjWbWSsW%2BRVGQQ%2BO8MhzTU8oGxqNV3raVFUHinigw1M%2BK7A3nPqJU0Ks1ElckN7cMLccEnVVHiccGJmG%2FFlvWqShCh6SBMwWqeGcoP6Bo9NPVO0TbPKEnAESRjuwOCLuBEeUmnnc%2FTvoZ2ZB1t6dhr9T%2BSF2etfb1gUbfEVS25y56TSd5Xq9HipgCf7QTPfbavhxD28UnkL%2BXDzG%2F0ItfmfazRk0QL2Eee7d7BLvDEFfRf6HQtegS964xlVkbfW5EzvbswxIn0FdX6zc9s2gRnBYGjN1PenHQzZm26%2Fh9fUqaKJpRSeUjjtmccd3pcRtDA65SrMkZZ8nzPNeK3%2FmCppqwzm198nxgOJ05apyFeA4kUnocS7sBcWlFvKrV7jjmnKUIA8xyJMP3vp8YGOqUBhvFN2aq50ocQmQKHzOXJf3aae8f9rYs2i7Bzk4jM2jVfUCQ2V99TKURgeQZ93OwQ1QUWyXl8oawoxw%2BSZ1ryjnGyoRF%2FRbuV3WvfT6lS%2F9LaG%2BR4g77yShDrgfElosTb8u4xzPfm4V%2Bzd7%2BW%2BzsxMtl%2F7G1XA1SjFkui2s2EuIGky%2FsiAPdVX0dDKJeYQ8dNto%2FqAaGK0bNZ4SEqncT6ZYFvw1BQ&X-Amz-Signature=39b7c0c7efdca06e5e9f8f9ee99c9ab88059d72dd0dae051f6fd5235dc109e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=c4bcf17884963e1a0caee5b9bf2f80953f7faee4f55d7f295828deb6ababbba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZEVCSUC%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDPFQq80uMgOG%2FP4mWBBUPRJ7EUgtLVfm14aBFab36zFAIhAOMSG9lf8I1AV4qLYpn%2BAMwoms6rZGXuSIQQwG%2FEf%2BoiKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypJHRyJY9swHFLXYkq3AOFX%2BPHiPQW3T6vw%2B1u2L12mSyfQSK0%2FgxCgDrtJIvXpGbDMQv8Cm8o9gQEulY6y4ece4wdUCg%2FrbGmmpCuWVYgGXwekHx0HDs%2FyiMUbSVnrzYOpg75yJqUV2f2Wd2Bi569REvGdujV4%2Bxhp54PWL%2FlGTx72UFkx5vOet64ltLCn6rWv9CPHEFwUAc5XA1FjVB2M%2By3ZicCc18gNZObigX5DRdsDNzUApRNIp8u7Y3GQavT6tQ17VbbUzZfc76wO3JW7jGiYmmZzQqjcqWXCmwqJlfZVPPlxekWLzYJO4AY3p%2BgQiCsUkch49FepawbAuHYSdgXG6Q%2BXNDTHguJznocEBhEhcM94L%2F%2FxXWxpvn8x1uCbpGLH%2BosuWeJQWhYa3tZobZbCBbzAu8gVAITmp4QpqJGoCPQokhZjkJMSwY80jvSy2O%2BbQCJcRYyFNtVUyDPfirxc11y%2FFXMLus6Lft75drIuGTDp01I7d6N8kbt96S99luJw697UGg%2B%2B6SMC7GpaMxb9B7ghKDkyTJn7aMLQKPspe4GfhHRPMmM4B7zImCwb359%2B0F4xD1BZGrsg%2BM99AHH6sQ5%2BusY4aezd%2BPpjkgntJOgnvv9%2BUgLlff%2Bk%2BcG%2FfElLTDJN0bArjDv8KfGBjqkAVz04QUpsDM8cMwZcLkxWay5wuYqr4Ym2qgToiZlCVYN2lyO4AXLd%2BC5FQFrgPBAHQu8RbjNJHvucLziPi0y5jkei3g8SEbO6rr7rXI8yz2U3WqDDs8mp7M9u7sxAL%2B4%2F%2BjxCmiNZ8QQb0qIVD73y%2FEM2PUJi2NZ3M%2BFUIRFRSnS4TX4tzMDrZBh2O340XFyBcuAAbFKXGy3BeSvoB2ZVUQXay%2BC&X-Amz-Signature=f83b6dedd1c87ebf3e8fcdabb69d353ec4b506dd8ce2211e854e8dee584a0c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=3f97e229d6c9d4ffeefa46a4b26108a2f4b8a22e2e1bf2252e5e5f8e77cc63e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YCMUA3D%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDpKUUq9YcOOVo4Kz936bOrC%2BXx%2FF3p20VY4Gg8xW8TRAiEA6V97wJK7WFw9RV8svnCirhgXSaewssTjzcicIgmxZaIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD54SyyavHy9oENu5CrcA6zzeplcEJlI%2FOuUhXlPDLGLutJqNWFaoXKQlRg%2F3ZgQ7Kw%2BjmdFsBINhAkHW46g7lovUGiIXDUSvpHGk6MYIi4GPGhYE421GXFVD8nZZvR0HN41CUTTh6zdroF3TJFdYEJLeiBK9XFy%2BMQhphySgEs4gbRavfT%2FNyKL0HEdjyusY24bPV3bYXV%2FXUG7VIems8vWiSYMUu1oLKoSJgDKnJLbtTgjO1TRWC4qtBgIn43cxDIq0NCmUF3T%2F6aPaPeA7ZILS%2BV%2F3uc8eXc9FcCQN6qqm2DWsJ9bPLbPHHY5BBsFxIubOtPU%2BuTA0ijeew0d1EtpbrHfzV1SKy8Mecp1ZYT9g8z4s3xp0%2BhthUHqyAN1dqtTHkBt5nxVXsN%2Fu%2BBOt70DylV5oPUsSsRTtPRhShlDQXtWymOQX4POi135PT9XHlRs8D6v66kEO028urVCndQlhrvMh%2FgA0L4cHeTqFalp61RM%2B0KlIhfW9fRHmugk75RuDcI23EUdqOUlEfjmN4i7eZbFhlmfzXYZlsH%2FXZfIrADlY6zMQtM4tK4Ei6ZpohGWiOqJ5tFEXNX3rbEm0OSBjL7ZdzBr5fBVlplsckkuA7FMFo7GxDoRS8HrB964MQRMU1z7V4Wb1YqMMKPwp8YGOqUBVobDQ8l6uMMomu3UoiZtM%2FztQkOHuSeweoiKU1sSQofK4iB6PK9fosMCLDrY1FmqOf6DraWuD%2BYfSVL%2F%2BtR3aWo5ObQkAqDwQUPjEmcHTjwRIwY5U3Yvj%2FdqP43%2BgFOFO%2F0790%2F2JJEygL779dP3WGFeAQPDaouoB1Fl2WcTC8jHbSoxfMBY8o0XyacGbOq6QvxQFENSXy%2FmWjQoBw5joeFgOGTJ&X-Amz-Signature=9de9a8b2ef9dea128dbf051ab1af4e9c3c81868db060a6609aa472499a0b7bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J2UMBO6%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCcQi97ctkDU0KsM%2FLuxZC4N3SUmCzHWBb%2Btk%2FodqOh7AIgRMY%2FYTzgX1zzEiCsejBTtuMePcrPfZ6RodnOiPZlQzUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6Ax0TFB4NDyiO6mSrcA69jON7FCOGcdWgEr%2Fc5K6z0OM%2F8nCIuhAU8Prd33nZMaRDOx73yedF3kQIyE541Zva6Jq4X7fzXioCOX2Ksv%2FvPOwEHb%2Fh0ztqqC2ChCJwEckRKwn%2FbYB21MSGXKPykKpMwu2zmuISgcu9O4usNZ7RGTYdPQKrWWYuMM%2FcKG1MdNkH0QILU4azmVDMLU1f9%2BX6yqypMY7GYiQ54jv%2F0ig89Qi2JW4zYaGkN7zmuz0g93LGBsJjeYrZEKYnPLHz0Ykwo8DmWarNXPn3OEePCPhL216518AxdUNZY9C6fmBtdATxL%2FDyxPlIqcn6YqKXU8m6d5pk5ew0ep%2FOnYwfuUhTeesFV31RGHC31HG5y%2BQhMnF9NVlH6d2mVXFSB0vj43%2Fe0aN94HASbD2mRIZ1X3c5q2UPSyHAjnPc%2BswEawT62gVJtXY7z1qoeV8WQsYUUDxa0659lsffS0nr3bBaUypcLsmMe6D56%2FgXvmdykgXTpEjbnsLU8smciAmXgHINglzR2v7WIteIVb%2FMLv10VizGkRZWF%2Bo20WVG4apbNbkQoAIi0G55HFZb17J896PID6EtOsMBPgTTTTXqOxHgAeQEoAa%2BMcy5RmenpCYhTSSyw2%2B7lCwthwaT22dKAMNLwp8YGOqUBJypEqaGSyxD%2Bjj4EdovnR9UUsyHJIia6MxE82FCA%2Fyh0oWbGPisfPpx%2BJfynbcNSrexs6pEwl7W4ig6hFBGlyAsn49HIq9S0kkUrmV1RBIiuDdV8Ue2V1M8mC0FdbpIqc3kxvr2RqPbBRMWIBwbumlnUk074cLW1H%2BxlP5YR%2BywGuNje1wWJ6SQKzTOczWOIRFh39lffSElp%2FiJICrS%2B4rwTHbpL&X-Amz-Signature=c43e4443405792790436f60194f08307643403b4c08139a0c753584d5e4ca656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2J7ZZJD%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD6wVZDkSAFguFxviCgZ3BmFLfcnWkqJNSGsvmSUqYLHwIhAJc5p0mizByz4Iw6PXOWttuWzFCJ6QLlGbm%2BzVRGhU7iKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDHTyj8Nb4PblP1rsq3AMA138%2BcVnj1jePJ54OQbS0cl9Q6GxZV2Rlg0OuPRDoIlzME5BjsD0ePkQiRMgxtBWSbLL6zlDio1qQcvRQGhbL7J54YSp4bfoLIcEnvc4DeF074%2FGzEg58UMlU3B0L9H4LwCxkJiRkVouVyRJqREJlPX%2BSkL0ffimys3ShNE23D9GCwLcSJ5xmh2NsJ9m0oSw9E8u63uLeCR8x4U9TeNUMcd9ynmGGm4X6VZezMr4wb4uRvYyxMI6U9Vo9JFDNr3b656u5Vzmw0ypIVGQwwkbecrUeKtNgtkuJqyUD62xopc%2FTjVE2cZ7zZeu0GXiyezGuXVn%2F2FAAj8LyDP%2BvORx2TivRSz3pLPS1SLfzWfkHa1EhDZe2pkfPP8MA4%2F4%2BDNaeCkp0IE6E3%2B%2FPG1r%2F%2FCR0gY4etIoz2TzJJPOOmC7LannHL098DDIi7Xs4fxFFDHVBGGr2SAy4uMm8ZEsqqqvjGnlKMZYbhNBZhBGwoism%2FqZBcrqeGTyq7QX6%2B8A4rIlFAlrkjdJP9KG8ifIv3mK2d6O8RQWaQecU3N6fM%2BCaaBj3k5nliR%2FdI4fJggWZ5gL3fBELvS8lKU4Vvjj3L3hNoIrtNtzSzF1fIlx5XAUTTOK78pJx9o%2FbbXTrszDz76fGBjqkAQZonK%2BBxBk3TOwm5IejJfriRsty%2BnFKWO3NvLI%2FIDDg6DdFIWzlvL7l%2Bvc57iDDbHxkuM06ywSOW%2BuesbQ47wq54%2Fyu%2FKgZJssEbqQaL%2BOd2%2FPU1sURLpA2bTj9eFwGRjMC%2BfjsdjyZBATOHy%2Fej3J%2FqJbh7gxqCjECkHrug%2F1MPKffV6Md1ksKrZfUH1E%2FVt4CpL%2BmoZly0aGpbwkwuMbsIy6w&X-Amz-Signature=7a34d3a4b1173d79ba31ec42f61cf9894c51845c409c04ee4a0893f2c9a10567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=f4341ce875224626e81f4ce90cc546b27a98542f80824c74d8803360bffe8ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SIO257O%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDWGmD6ITxm%2BraprKlReNTb0w3xxb3xjKNG9py25Rvf8gIhAJm%2FbwRAmv0YBKlK3vr5G8z20BIq%2FPUSuhh%2FzoVD2%2B1FKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFWy3fpdUFbTQl1NQq3AO8F1u6bbgfzeJtxqxUeNTOB2RSxRdaKeV1kvLt0%2BlreLBahrIaMKXEFC%2Bs6ddLG78MDyzRWeAu9weygMnWUXwUQpPAhnh%2BFIssX9sd928kIAkjUmKUlc4ZE0paz3g1N2TeNipnY0UXG7nEgE7TTCfLLrSQhR%2B2zt0Ic01RwfgICyYySK%2Beq%2B6FfyvU02gZSmZ2g1C6UJPaMwZuNHhv0Sq4UTq6MOcHs16uDDVl1weVHMZz746zlyfIQFhksN5hiOizIGrjZzgPkMOvaE%2FXbF%2BS84OHtoQaMSiNjA8QSAPBbzCbW4a532WCmfhfOQWhgDq1P%2FFTBfqaZMRi6zt%2FblKBmJeZ8c7xfy8BOZiJFa7s287Gsa12Ejx8w7U8O59GgUBh%2B2X8FiIc7TyWTjfJrRHx3k2ZcSn%2BPCa2GywN2irouOvtzyUfMMqp13to%2BDMPURWELt89%2BvH7q%2FwXdLCtcKPi5cGHhKX%2B%2BJ%2FZll6ApwDGsQGyOImRI%2BKlPHMAJ2j079xtRATc%2BKjXAkShJOgHvwXs7nYpJkPAhLvDTL07dIDR8%2BLsOZiOdl6LK%2BaYeWEpgXa3umQwODOTafH6BED3L5jwj5OczHSygrL8zYDattH%2Baig6XXmFkrbF0j%2Fi4zDd76fGBjqkATBYzVDaKwj7uP4NhAHPg0XjbuvS5uzVWu5orFCHIcfwIfSKFTwC%2FRu5nV0AJ%2BuYKGniiSHL99d64Cn8rbY42H%2FMCDZpE8Grmm6CA7qXzwFJpXZMYt%2BNYf5BlVt5ImWA%2BIDn9nY1bYGy2N%2FLUtyWCW3cuTi3Q4ey6Y6f7%2Fkhjj05%2BwiYbFojeAq0Q6rwXrb2gE%2Fn0%2BWK%2BGYRkTAhQpo1Wf2X4Stz&X-Amz-Signature=83fabacf8b64eeacf915182a38d16fdf4835384e867da0180cf5355e77e1451b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=3b9e95047ec3bb3690b6dfdce1a614772dcf0175cbe114630988592da1d759f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=1a10613bcd94785929374bca210fca22d50d1fe6fec292b933f6513b759f32a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=707a15ab2092aaa5356aa4613e9a076321c0490ffc7de9e5bf6340e5421f9b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=ef752e7d911c54a8ec9b0f042a02638daaf67e369df099d9124bb13ceb702d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGBKWZGZ%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIDgGCB9KtlU2NJQC16RQX4p%2FJcZyqMgIjyvfPlIS7W2rAiEAhG7GUfaaXL573CzGrKQ6kHqZxwP9bt%2BRm%2F2MxganiCUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZ721fWMjV0fo%2F4QircAwXN0OfrqSXBGeAlgQ4%2FSSqhBTCV%2F8mNypxGBzOJvlCFNqW2UdvQWSXxa9X1KLHPJBIvVRl3u%2BcfphLCmDPRY3uNUzhM3%2Bvxa21ZBVMLqkALs4WGBai%2FKw6zkjjvKM7yE4r2Jhu6eM97kaGDpmGxSlkOd0ept5fsKcKeWpXO0u47jhV5aHPOvYYtlZ19haVU6PyFhhhN11%2FCA8JqSkQeFmH%2Fk0iQKOAhBbqQgQ6oyKnLJHfgNstUSi7N0tTa2sVNs%2F9z6kYocYs1mMDYwDvHzAYk5%2FHRmN9V8XCs5AEEhYakOOeMoBOHrfsyJttJufb0B2jBHxcT2k2Sk2F17AFDPGQfWQbVbD2QDiX0qcWD2gLC3r2xmyDx1GSBW4iU%2FbVQtdPp25n%2Bbpp8O0QF%2BodT937wNCM4ObemKpk8uaeSnzisKEXvoX1mAMsFk4Tjw3Y8R5auppiPt9ZT6noxIQYT%2FuRD5iI%2FPCRrGl67BgdkE8dIkTs9NkQbLN95VCzMNPJl8IDw54eKgdY%2FlWMyrw1EBp5r4PFgiXvDDO%2BMFYv0P5tGsISCYd3uAx%2F6bYhh9OVRDbzbo0KaBNJQ2K7V4%2FRD%2BSTqsDVVLYcxly9jUy7Caxo3kGKGMyr1%2FLqdvZqgMNvvp8YGOqUBshVyrjmrp7jyDjQecjddM9WcAb2j37BKrfNAu1nZusOuz9kdDTAjAiG2TC6yCfVa%2FXThcfe%2BOyfhPINmrnXAuRFlhBQvvwPtvm5ScB4iJXYMmtggUfZTkNr9r64MYbpS47w0u4%2BiR8G45RtT%2BXKW9clitX20LteJiIxhjT6ZYzJnjKH77mRnjHfKzlkJPULy%2FEIoyvCiIUBlhUxMjZ%2F6FGlYD0sg&X-Amz-Signature=53d8776f36a2889f70588be419a335308486758a0a3f133cda5f8a0b5c84b3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=dd36a0ad015569db6b6878fac7675cb7b443351967792e4f4f549bab67c79160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=57942a0d110058f456800f9ef5499668a5142c3a45c333b58391f73467dba119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=707a15ab2092aaa5356aa4613e9a076321c0490ffc7de9e5bf6340e5421f9b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=f80af5e068a97b69014c9ca40c383bcbfe44dc552a6de09a36c289e4b15a517c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=7359b9945e355c8b85ae8cf3f1bfaa16b4b70ad8f26985d495bc71128b3bfbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSBO55TY%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAprtRmt%2BoYrtr5Q7hAWHXW%2BiSbQjmwghCpfNvKMId7bAiAG6Vrl%2FYE7GRhOdnrGYQERnzh2XOKA4wzRTnt4IZrjyyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3fjBLy3GQ78rL2jGKtwD1nOC5ost89adCHzQ1uoiepSETaEsecTJh4GvNAs7f8oC87sTyWsc6ZSf7zMyRLSKI8%2FaZ6hpyp3tbzreA4C6fBJdrMlTHz1qutiC827DcedMt5%2BBa05SvPLsFzS8VR6CWDqR2DZko0hWlDaW0kIAqbsroTIlc4nCL43%2FRPQACt%2FGJrE2dpf72yWg4AH0PJGdJ7upvkCyExasSLd3%2BJdPWtRlUjkRKzI9CZKhg0VtcwXmnFNOYPr8vn%2BkgTmgaqBJJ2sVu4Pxx6ewltVQrBNKc6WTmo6g2nFAiUWck28O39cY1%2BQ0QMUFhQDyyYeIKY84zI3rZg5SIVsXGIp%2FJFeyg%2BtKt8NMXok%2FOKjGRH8DbcK5Uzxyes2RFh5oSLkrp7i7B8eC4ftV5RREmVq8sYwua%2FYXVsTm%2B%2FbnGUb4hqQL%2BEaG8Yd%2BnV5dpvzni2qSGMWWLa82ZoD7CMpaZHfi6%2FnegTh83KQdlEKyMLskgmzYpz0hA2sYrBPoHhusQ1ZYU9ADChzTPp5B2UZDKly1qchI7g5aY6Psj65aUb%2BMxC31I0AQPi4%2FNkpgDX1tcwOW5qSbkePy9ikh2D3pmQ3AT9OCukLF%2FViDXWXOLpZQoTt9OekdizZ601eqfiuDnVIw5%2FanxgY6pgHIrvMTQv7MPEZf9UbqkfJvRTaISORlrtoMHoHeMMQAxQxYP%2FnU5Y8xgvPkCP9hVDovTyNso4iucupF2pFcYWH7Q0WJEOWm8eSz0Xir%2B3BKMWdO52xjB2du0zyiBKVEt9s1gAKYjy%2BDB803yu2rwezY98ZXJiJIx%2FvVkcoMPzSBvChmvrRigTPG%2B5%2BYUg7CvREKlBsDcdiEdvBzEuKJXWd5ZJgydwsr&X-Amz-Signature=d9ce54135def2cf8b5cc80368b31814d61012698cdedd1dae6351a88c87f14da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


