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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=450b8f24a80ade262b0bce3601a1dc683e822d7f3e50ae583161d283cf46410d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=eab9da16fc704ed9065011857bcc44243907d20e4e9e7295c7d49501d9341d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=7f0abc9621ead1503a10bd567159cef46187ef2936834fb169056b9a7a8d2d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=a52592739e604edf7a40353a4dec4efb7b847aab9f7a9c3139c8a5e9715cdd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=acced2997529d12aefc1f95b14e52572bf4087803e0a839023c14bb3e9c752b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=e707c428b475e35721a6b7c566db35b10d1f4acdd1a4bedbc72ebf275ac8730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=f13fa8fff7ebcdb4afc09bc16d87250774b50364181b973339edc3335475def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=30785d76c329e3427d250a11987c1bf8d439129c18910318af0c5ff100c56eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=4c8ec2de35bb1fd163b78999b7fd79b307926651c064d16d55c2dbe04ec83686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=e1a85d30ea0ea048252470d773f854c8ad4ef30dffea9b42af5c97c441ddc8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=18f56cba0bc5b191fecd68491eddb72f02820023ed998896038f3eaaf70a8b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=b7d37ac0cb22e70f288a768b0cead1d0d2ed4975a3aa9695dc7fb8d55e877e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=6171fdc0d3eaeac60c3587bbc0795750609accc4028206091be706c7a82602f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVNLUJLA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDb4VdBokndGFG1E63TkPETG4%2Bt6CYRObCeq0JiW5kgCgIgUKyFS32Lkv%2ByYiImvjpVT2bNQeUJBjKxwlzcJrZmOfoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLzLzIPe49XXc5F0hSrcA9oMyCcPGQ6l2xvcKCS2WEoX0Y3X0NU0XGaGgFT9Or0j%2BOy%2FWrs01ZJXJPR3ctZwKqS0MvGTvme8vzMvXX1Ip9Ohp6JUAPe7MizE8QXLKZ%2BWuRgXIPBCYHuTWQBlIHEwzJ0%2F7%2BkS8xCYst%2BTNGbLIkxEeYIadu016I5BE2CbmYoOM43g13pKMQwkbx06iRYc%2BkT%2BCMY%2FeNzusdkNPp64FOBQuWcxNR3qyhsuMqgZ%2BdFoOVp2KpRX3mmSTJ0wLO%2F6iWpS2iah4%2FZCLwH1Wo31zMGX88%2F4trVJE%2FRRHWrHAi%2Bl1KFt4iU1Etz7Nd1%2BoBgfoMfI%2FKrcH%2BDjjE4PQQoH%2B2RRlhVBohFlg7NLBk0pN1rNWBWfxWWcKcDwZCutODRe8w4vIg%2BhcxZBKECE%2BbHmDiTLW1XaxdZwLljtr4%2FT%2FN971sKPuQDjqZyg5H2awQkz3DyYYX%2BKzPnYuCRqrupF4s9p4ELrMU6vu42aDsz0uHvjDedpQ%2BMYRs2MGHlTF8zllcMxCqSi0Ew9FTiGPxFo%2BN28kjpmE6F4hQFtxxZ4dj67Ud1jimR0dThcQenQEstAk2ulqcC3vX572ry%2BoV9ZyzFHMzLyi4T683d6D4ECMxnv2%2BlNej1w1eZ1EVngMM78mMQGOqUBsm2zzNRP8s%2FowG9hB%2F%2Bq40ATrYeoOsHeOXUlKkesj8vu7h%2F0yrbR3ZOM3DJTm3a%2B1QXkOlAj3UsEjEQU7wrqg2miv28rgijvbWxR%2BtUcFgDY9O3Iv8CFNukmoS4krP2Td4rEysVqRpIwmVA7Nx6JSY83TZpGR1tiLhCTl%2FdGlBPWbRVPMBrAadsQw69dwCXvkboEVqu0B%2FIi18MhFAz3YTIib5VG&X-Amz-Signature=b1318c2dca24efaf8169cf5a3cbdf13373803a7a98f39b12df1ea0326625600b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=32ab675f8a9980028964e52a1b5835d47152d68005229de4cafcadf536bd665c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=84ea487f0bd8b62f0bff6d02dd783f7a6d574d41002e8aef2083bf922820ebb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=a6b082caae63dbe13b67b301c6ae8bac7111f38162f15c5486376f508a97bb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=c28e6e96c4a9c5506866305c6e1ddc7d3dc58983a3a9d48870ff84671082b0dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=32d0cf3486284191e1c059eba3a4a48274fe0bd5c1f8a052c17a097476dd0284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6F6EP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDVJtww3Q3sH80H5lqqKmMHgWQQo4ftv0uV7DQaNpBJFQIhAPIc3FoXdb%2F4h0W5LKU9dpmINAITX%2BynpN9oSLvZ3sdOKv8DCHgQABoMNjM3NDIzMTgzODA1IgxYM7vKp63%2BLO5LIScq3APDmwP9dMnXZXBIcbZguJAAmgB%2FHTZ6duYld4R1IVGLZU10%2Fat0mwQsI9BTMS5vun3wi7Nh9ln1XUbzMB0J5JXXa1R4b1j5TPM7GravEgatBTtvCnyppOB24iJSdhXS%2BlMitIV030%2B0DnhrHrQ3y5YiSvx%2Fm%2BDv40qXc70JxUwCHpKUoafIpS7OQJQHzeFuPZe24smWWmNIU9UKt8H4VYDBAoZnMr6yFNF%2FTybjdpfJPZBzD7%2BMN%2BuJKZRjBRctyySx%2BIBLfX1P1ldyz7BWpGttI8UI18HYolQ%2BDT%2FfuRgkFwdSmiapKtDALpa4McyNKihEiIYSWDEnWLUHDjR8S0TIXcp3BmXOp5dZ3xdjh9vXbfxMP4U7mOP5GyxHV5q2Y7ET%2F5prXnPRzImW7LaL8UCq87q47yL0aI2oa9O3%2Fz8%2BhyuYB9EZdgBVk2hDJVZatemhaeTWPNRlLb0FtbZB6TuY%2BmPjrnevz8BNJ5t4S7%2FfQUeMp%2Bwu84PgieK8WoRW0CpawD9Hk8wLwAGPLU5EJqpUaJLgEazGFY6BuPCMqZF60mhw7V6CDtPiNPD3yXG1RUSq8lO7wJnsZEUNHMru%2BbjcpWJooN1jYmdIHtQB5epZEdBvmjL5XPvTX9Y%2FsDCf9ZjEBjqkAXz5zbJSR7g4dQYJw9Xs1XtB8sTK0C7l9IKA%2F96muAVGL2qcGwhLOmDB3lYedineRP1mQNdh8pMsnU4YU%2BTo2V3CO04Op0lC%2BYtdPaVXVlVcf0XeN68Uu0L9%2FZRFRvMBUHEcHHci3tUuR7RTXqQGvqMtf1u%2BEqoF4pHSNg3ZLMN7ihqrqNxKz9t4xr5POFO49IEzUC9OFBGjQ5egoQMphz7ecUK5&X-Amz-Signature=9d5c3247466eb28fb399d8843a74c76e49b44be299b85794c560e721dd98afa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
