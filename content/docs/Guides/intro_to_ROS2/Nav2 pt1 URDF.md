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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=7cb74bc39afda0aeeae1511fd2a878a1a6272fe14bddc0bdeec9710bbd355a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=a753b3694575ce541ca4a4c96dc973a15725ab6dd0e990922b700d50d5a76c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=4dace05710be88920b2a5438f51250f28a617d30ae659d0feed82cb3687fbcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=136ef37757d06cc40fbe9c9c0fdaf81226440eabfd15b8c4bf68716a72abe336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=254c7924f02c6ed9534936a9b972ff3bb1457d1d50104119db9434ee9cb3b302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=9554a5eccf48f6b82912fff47ab100fad175b858c6ad752f2e86004b22fb886c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=6569746364c923b05f3ca7160ca4d539058db11a4be84f0cc2cac307b9a404de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=6aa1d594040f767f58f93178dfd5c252321e823e692cdba7615306a428ae46ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=7ca4f958c49198d25fff27bd79f0c91208637a808b2efaec22a096597b8b81cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=7efb91d597fce6ca53c0bfba7dd6fd4f7dc16ee595d9d755cb5ca62e949919df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDLWDMK%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCICXt1X%2BVbZzFmtq9kcsZn92pZEKlz7GgZljWPggFKflOAiAhMqDCHTnwxEoEMPnriSIewQ24JGTihXWi12Fhbq%2Bgair%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVwaU3T4AQHUkODiAKtwDf6Mfar6VlvHju0v9Bnb0aJy1KBZ9HyRTaBeLzSMISGF0XqRyqLoog%2BwWmQ8JtExD%2Fz8IEWBFUyDFU%2BIZ1blZP6h0JwVfLtP8aioKT3YX7UadtbDBE49SI4JKLie8DJNhe%2F2MjNCK6tVeFkUth7FgBtxjPv8V8Acui8dTdAoQWiBWa2%2FS6vWcrZ2UL8rsQKNeBE0Pe9tta0gyWgdYkGlbF6HCbdr%2BlqIhGNXmDJOTLEI%2B5ajEbEBIS2z%2FXZMZl3BVJqqw7x1r%2FSROitl0J%2F7OqQ6YK3Cz7QF%2FRWLET1%2BpH4r6W5wBwaPnVMMaLcq33U%2FuwQwkesBM4r0yQJvC5hjVvmNR%2FRbPpW%2BDRzD5j09rMJV3ljmfKi%2B6VPrc5F4fsoCixVyI4i5ZA9xeZQpZmjZLpzGX4Td0OCCTFUy3QZxJqL9Yi48WikSf3MMLFlmQs0zldDFFs6dbPb8D5s51jbGTiUgqCqbwE6wkAJRKByPEKVhCcRmmCqkl48qjSL9m2BX3Wd3CesddXXgsSoRHPe%2Fc5U%2FUp4%2BAhuvhkwkM%2BUMmsIbSFsAdRn2QXlyCqdB6IYcA%2BwZ7%2BI8KQH30XaL1z7abH5I%2BjfBaceFNAwdP%2FtLv7Ea03PWSEGLVaJDUE%2Fgwz5bMxAY6pgGSdD0SWYhRHY0W%2Fu1sS4sL1687lN1GfH2KxZopQuRI7Csx%2Bs01CpPDEKpNVdy0Sd8fcniXxXRD7JI88c7uz2j8i6gmXzU%2Bw3SDw%2BG3DyTCMgLO0qK%2FTzpa8dNTG9KMbkd6rWCbTPUBFhRdyijhCzzeOeH%2F7SYXaEIuRWFhc7%2BHL1dE2hCkYiFoJP2ADLEoXVLZwbJXKr73ycQYD06v8S4uKrleaCab&X-Amz-Signature=2504f319f27ca7208bca5c738204209aabec1742c2841bd004ac3613b5f2a3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674XTNGMA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCIlEn7RE8%2B3tHjZFQ1Dz1Ecnqnb020R97gQnupGEXuxgIhAMcg6WWOe4ibpFTOFNAgtZgzPvpWHYMmoZiygqQ0qB0KKv8DCHEQABoMNjM3NDIzMTgzODA1IgwKh4%2FRoQQxn9pKx%2Foq3APP6ysDxEcSe%2FBVhieVROxuF4qtMZGn9d5p%2FYDH%2BFFYevJjZ4rvugGVU4CXjoX1h7lFDrKGvjWKlW%2B2n7tRGEeb%2B7zBvHwiqdemLGqWJ2vylZXHLhVECQZKv%2FIo46vFZ6eUz%2BgYzKunS5%2FKuFbMnDbUrzfp3TORx88JYG9aEK8OED7rjKKe6q3BclpvOa5cXv2hybJwglc87SrlDsSsQOGJS8ZxGa4vFUmpOqbC9%2F%2B%2BTXNt%2BaJi5BasqAYI6UiRp2yoIEqIDLMz8atyoumt6G8whTUroycQyDImhp1Ner3b2wI8Ju0T2ITJsemNgckkxb3y2RMXvRqL%2FwcNzSOmCiZxutl2UPjJzsQINr1sDEMiTVp9C2%2FV1qmG4dK1noXQ5LCGOPSev8DoCPvsuybmXIXAeEICv6Q2gPGVlslZm1fn4%2Bms5iFAFTpTbV5sLQFAKJ29w58eYg7M13cwRtG7n4LE%2BodrrVSxtCpfFtFeYcRLTTRJ9qDGFKKj9cmhX%2Fk251VylHOdo%2FOLvpjuu3FyHIVxD1Q%2BKXyqAjlGGz6xGqE7UP%2Bxs3ksPEWSQkLLGn062JwxWOnvpnBUcZ6nFZsH9scjYCZDRubER87OGxpn3yzYenrpYVX9Rtg2rIxNFDC5l8zEBjqkAT%2B7kMhgMZT%2BEJkK88FbdpIxH5Kw%2FuBRbm4eVQsE3ZGNnjcB3y7PyLFtpvMgWifXVBYnmZwUQWNltVE%2FcHa6KETuSUGenr5gfnbuFvg3FDrMjq3ymf3uFLXunPZfiJKLpLejiFAo1RsnUo2Rr0IuZs%2FmPnraTn02qvzUGb5KdYcGopbTUMq5jrQ7GaVIP43ozLGy6llSlwGlBtFEA1662R9lSQ7I&X-Amz-Signature=37a5bad89818b1d6efdbb658a9d3f95c000b0e22252e6653757ff1e2096b4207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZSQ4BB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIFUwn1bMcJL740NZB7CDC4Mq0Dd%2FgvIYemNGaYGHKH%2F6AiEAshCP1aDrmZtrxQgdbCV1GAWi%2B6KFxtz8D3w10rZRxsoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAUajy%2BBcdOcNMLNLSrcAyzObrUmXAFe49nHbaMKKCmT2mcwBpXpx6aCDtUGAp9PyRIUCFVqU2kYaB1O8%2BH8x3QioR9PKBNwr%2BQJNZZnEQeeXvzoJTyhfXKpLQOi08ak%2F3d%2B7lhrksjOWiehyLe6bvozfSwOT8wbDalIGjvJw5m%2FvpQEJQSD6TXnvwPw1rRLzYwreBojVugvYt7xx7A0fW%2Fq4dP7TSe5X%2BEOlWKmRxScFoUGkU1xYngUcyPDfpP8vJivD8iUXZ2GHKxPEIs5MdgvF6HzByAdftrE6%2BQNVbBK8rrwJer9c6p5Gh08BwjNFqlWnKrA8PEEXsFo5A5OiZVt3rZqLte8Fje%2FM6G3Vv19%2BMzh9Q8rXZBT6Ht%2FvjeN%2Ffkvo1reZZtrD8dQ1L9tJboGAtJtIAV%2BZeg4L470bcOaXLbdY2y6OFslZ31Gda3K5tQwF8hBaQ%2FfCmnb4v19SoA2PyIA4SouEgwUDWNI4guqLBA5OFfdbRfXJLY40Q6BWnDU2Mu9vZhBo8lbXJYxfDcKdiqqK1UDG%2F33Z0pB1bGyO18YkkN0VgcaVOBd%2FDXy1z6Ron2TKpdxj3etiJPD4MaPW%2BUeiZaZ%2BSSH6%2FihBwNdwN52BhJp%2BHJNGkUquzkklIHLs8DulcPdZIuDMP2XzMQGOqUB3ZZCK7rc3nsYVzQRgV2EvD0pRVO7YPV9pz9VwNdT1alQDb2%2BCJOSuJ4tZPT2YODJaLMbCAYds4tSSOuwfJ5DsM5zcCSkgHletGziiSlehC8NFCrKmG3W2zX67hSWwwCBwJaMfSpeoMV%2Fb6CaLkhdnoqezOVLP%2FR6Wh0XBN69YK4vJPSwvpF7ZIZW8Q28Vp2uu4vNoCabTwaftdyWdKJv%2Bj2KRMpm&X-Amz-Signature=87819a40718feaafb65b887e65cfdfa6db2856eebb155998a10252a9b2673f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=0f829b96100e06bb59fa3da00537b3b6182274758b52b553c9d9fe3765f1008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRE5Y7TZ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGW4cTIce4nQxArpUEvx66TJarY8gNf%2B%2BryKL7%2Bx9b6CAiBSp%2BcPYrMjQ%2BEGtVJPH8%2F82yfOAYHcIzk8VPA1tx%2FPnCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVGj%2FoC0ZIkHwzIDAKtwDpWt%2BQOzCb6KQC0Cdi9pZ1kK%2Fd4FeSnO1KYdItb6uOSQOOo1bnWexLXjx4ShxhT70ixxxHdmAugztc030irClAjO08lm1rideu0VfgE7K%2FjGUvhVQgq%2F%2FPLdc0awIrsP%2BShxk0zHX1xsT0i6gh1T94f9HcuSBqCEtP2QpWUjEjBYTKRqHXhxa%2B0RXmWi0%2BQN%2BYmCI4Tia4%2Ba%2B58xHOlkHMP5BmWSNTg6t4YqjmephX1u5HDlgE4HQZW%2FQPLj5SDmf7ROM9mlJQBbPXhhIIoLjsd0jRRXvv2WXqHHS0DfbAsjipXFHrITz3DL30J7c74HpavY2ROYBfzLZIcvyjjpG7lozjduqQT4AWRvtIUWevWv3qZZHwGnU4dbIvQr8XIWAGBfCvj0W9kS%2FhXczJ2YUuhvNMd97QptF4VjuVEgXRYYaBGqN4%2BGam1bSN1zc4%2FBERKIvu4tKfsoUb8BjOzjZRVEfDAkA9ENIatGKKz6BPrvv31Zd8kqw1CgvtrpPLOHCTszy9aPb6ztVXUCne3aQ1KOqdfXuDXiN%2FMVgOW%2BxCPBZRHfRGPR87EHm8pCxMz2NUkZBojbMlOHsdIChqBwugJInfuLGD533hy5qXGGPew0s30t7KArG0O5ElCYwppbMxAY6pgHpgMcHuKOEWsk7xWRRa07dHrmqGOm%2Fbx7aPt1mN44x7pkdWlNBT%2F7aJHZ4rEcgrNY5EwwUnkPVDKUIOTykrKijMnIx0SP6EXBqb4QC2yfK6torzZN73qZVP5iX8rWfUDxvUpqH9ocSdajLVOKm6wzRe3CrT0TQ1B4Ycs%2FbPhbfRG9kcgmFzQbD4nG49W%2BcV38raI9desSQKXENY0V3GAZCB68j0%2FMY&X-Amz-Signature=7358186fc63cd202c8e686a61bbe939ff85a4587c865605878e0058e4ac63a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=2c14a0bc25bd2ea7ebefcc4d1ab31d3150bd987c77c66ae9e493552a34bf9020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BRXZC3Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIBC82ByljIANLQPWUh01fDgE7O%2Bl4HfB6NFU9V%2Bv44BdAiANfc2x3kj1cMki5FAPm6AZbtikXWROEAE5Tycq9VNtUyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2Fmh10%2FTHOKMyL74qKtwDSpfv%2FZ71XM39T59yEdyHDk4Lm4jRcrcnRps%2BTGsS%2BU1shKoKUISYKpEidaBs4a3ogr%2BTmlS8yUk6Rfk8KUUQJuptR%2FKXRGkg85HiAUGhAZT1oEDPJRXt%2BoF0v2imzz5Fndj9izmhyAWrP3TA9xmSBpRCBsuct5QBcI3RdyFN4OpFc0jWKSRxweMuD%2BLs6WdUT2soPyk4F1gmfBQKFj5tgIiEHi1jfXzesvJn1JRKqiKuLb6%2FZX7m8mq89QCERQvmhSsYVqI7Z%2BtJB4twYUzieD06An%2F7mS%2BDwYEE3I%2FRmpOfPniRvwi4lNb1hZfNte4jsGeiTHM6h%2FOhHNneqELh2koSQLpZdyyaRp%2B9px%2B6tPgXk5Vtkwrp3V8FG%2Fhz5S7gvANvIERalYZFiqojK8X5VPqR3OX4SKP61LTC8l7TtVsA8mziNwaR%2F6olM3J5uNjEABjL2HGktCTBoa%2BHxtdk0IdtFzddcbND5kRUB0poG13iG%2Bu11VmgVIoG6QRJefFujq6Q%2Bdg26W%2Fb%2FMehYgjV4MvnpmfHVUlUtlUi3FIDzTSFvUbYTzOO3XBKNI8eUpMNMyHzxovdddrE1PlkSaSHx7Zs%2F1PP8XtV%2Fa%2BaGeoTYVnoVKdUcF8rNCxWIAown5bMxAY6pgHCdRAHGvoKW6eQzgC5YCm0VDY%2BcWQDZjhI7YeS5DL0K7vWxxn2dDxRpZAo6JpWwfATZ837c4EOcvTGSz64lEdCPrwaMPWAPidwaHX7mTnA7iSAq2cUMeWXZKUN76UtQX6aDCJz0I6KjoLMLz8mNSeOrXpPAhBpj7dmvWvbqrRvLsJoZYcLzxm%2FB58DPZ4zU8JGRZW%2FqlhgTSziZWgD1qzIjqjTdMdF&X-Amz-Signature=c8598f9f4d23a2da73d7468ee270fd6f6a9d6e5b86bd424780c0460e3672f6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=c3ad4b53d8f8e6621686930225708a7505dcb9700cb6b3614c67a400974bf4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCCZN3A%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD2qLp98w31iRxOmiVAwrDfQvtDGYlw76FpDc6NiHx3pAIgJWaRiufA13nHOynatx9oRaLcf5EEaf%2B4GPnRAAZ2lhsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA23EdWPnVtUxRvb0CrcAyvfz0WL9n%2FnycFOQTxLbEd1GeSrA13l9myETy1lJgUyG0HzQVyZF%2BOemg1lBM1uTh8Ejpy9YPBuQ4TGY%2FocdcuMGGbTtZV8uQJTYzMnFEHHzbZSzZYWWd06tSyJU%2F3t8kkFWq0rrTXSlnEzEoUKWT2xTvmnr3MzbOI2dfT2qrKvaoxYTAWqvJ6LBsCZrO7%2BCtiNEP4aAIC0F%2Fd8FaUSM6Cqo%2BOcHOQxL5LCrUMXpE1jFKwB%2B%2BwBVWwa%2F5UHeqVVmOHn%2BoxUCcAVHfSsweTsEP69sHcYCsK%2FlP5NCLOrhrFm4aUPLf5hUyMGSmgDzTkwyk%2FHzNEnSjbruzBcMdwqLGOou%2FqCIiN6geupQGPHbday4mLj2oT%2FLd72NQ5agwEgigfkNvpHwu211qd%2BcdM4mEtPcWF6VT95jqI0ULJUnDdjL6CtXQYRgqcQbk7xQeKEMC3PJCf8qBQr0nK1N99cwF069trBBHSvwQsLIsoGOz%2BRHuiFhQ13m84ntsxaU8NF9jNt5ZR0hTlcB3JQthuqrXzit%2BCUzzGm1kqyAYO4SlH2H8Y6xVBtpN%2F4wchpaSxjt2%2FpWI6k7VKZEhdJ59ICHH1zjqO8dn5E7yHPxOV5ojEwAMEuXWD%2BC8HsiMW6MLCXzMQGOqUBXO%2FLMC1rqyDfPaS2x%2Bc4rtl%2BEeNDSE3nDZ3pS5vHQmbsa8gCRrLjPojUvTYOdAeps08WqMiRl3oDS%2BkhTkWUSzAfKhmQoeQXrkAxtBZTZcc40L7DCgecJXNgY0bZnnXOqfn0ZBPmv4N7gIPcINZavs3c7TC4JmSZK26l2n1Kq30mCrwz5VBV5SND6OW%2BCPLMCeO9OCE5dIYGRb99vwqI1xrD9dZS&X-Amz-Signature=0806cb3e932e628e599d69d87235c240bb4f00c08288bd2dfbae9033dcdaa896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=d58db2f5e595c57ca27a23ae5646fc1a46caad52fe5010ffc9e31f2539219e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4WOBG27%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQC1fAs%2BpsXcgDmj4EttAB5wc5d30JKBJ%2BOrpUuBQdi9jQIgGOFvHzSDO4nxLs4hus%2F7X%2FFFlpDRGYG9zHi5Q5rmoikq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGeIUY0RuVaaymviIyrcA0zRvMBRGRM9F%2B74HTqJFCY10UzQGCfuFFb97KRmezl4tcYvj2opSv5pFeJnb1kqcIvYZlX8YpCR0P%2F%2FFoRChW8JlSKzg%2BBdfW50HIyWCK7or4VsgXa4Tx4Ue1zfvKi3ByRsblse1fkOF3yeIjYn7OCW6IOwHDB9SyFK%2Fhybpj4tXoSeIPt0zYrMnkZ0Y%2F5bvrPbqn5worgi9jXp2%2B0OPimxbkf71bCB3%2BCcmHS9ZXR%2BPV4Mk3%2FsfcI5wTbjiXyLcKLkGlQvqQA6m7JIazkhugn8dypWwLkwgrVyYBXcA8cwlvRsLh3xuGI0TB4n%2FAeBMIqcd0GVPsOFdD0TL6fEr6qj4nUsTj4ty9O7cpj8cPyN5bqMzMlqfr0qktRVlrWnTuO9g8LWBkRv1rljxoxGeLgAyFCUGr2NDUW%2Fsq71sHPZbNLtzqKKG5QhwHKSUfjCDugkd1p4xXKYt%2BgJSWrAow9oRi7LVoPBfRUgRxFLh0DGs0EJkWxMBkwfwt6%2FEAIc51vM2HAtGMdSVAOVWfddyugQq%2FtBeJabEcf16P5rCfZ1TGnHclRnf6xCt9ktMm2nvl%2B3oAbUfjHxqe%2BJVST2TU%2FnbiuOPzJUbvdk9At78lEJVHO%2FTzOPRCX9seRDMJ6WzMQGOqUBzrLd9V3WII9r3I6Y5kITrv9odum9vh4r0MkclJQnaxMKCtnTI8zBO0Jnur5et49SuCeuAPVpCGN18stC93XdCmOBb6YOB6Zh1yd8rSuqQyNusEnOvrhVslKL0uxckPzLN7MBztMO2sN4OcjalOCdrufDF6WidfP1kSq7%2BvRRTc7ZTqnF8KfBN7Fm6EFWnGo18yqc2iLSeEgbSPjrDN1V6ArMMX%2Bd&X-Amz-Signature=1f6604064465198107c6fd337610bb20a91cf4dc18198fe3f8c9181827faa61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WXKAPLM%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIHedVKWvgaMf9aXx1lZmOQcNgror38%2BAJFdVouFtCRQsAiEAx3Jwt7aOb%2BjDFxVJd5S6touALXa33POZUVTGhelnmgAq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIYbW0T82pA2%2B9SPOyrcAwBb6gYXRDiY2iEPw%2FDUPa4IVRMXxJ9I8sJdsZhGfanHBtph1vCIwe7Nza3iw0yq0Pv6fKMejifakZ0pLkXtvYhL5%2BN5sF9c0WQT%2BtW1tx5FTuK1yVEDnVLtmZFjf%2FPbGkIUg9VR67PW0O7n%2BuycRgFNMMM1L%2BWEguWXO9vZha2CMYGqqtRMKPa7lHzNWZFym7RNr%2FHntvLXGHUPa053ZquVjSKd%2F2ZFxtOXIF263VLCY3BQFqKr%2BACEBJUQMcTM1H%2FjqhGA%2BxcCCxKvYz0NNvotqvUnN2RAYIRNA7huzbOU8yC2JFu9HoHkc9LvhctUHMb2gW774B2%2F7SLVyiAyuMSyeLdGUowi02Q31a9HssYUrTlBgG2%2BKyHEWoBteq3P34LIjyn2mj19GjeLJ7LjDdeQ8kbpGzoVD46G7Kh9zLySHQK6SYyxvIKplRch2L0%2BvC7tODUBieQOJFF5RfYkWrh5uwJH%2Fh1I%2BPE7pUWSmmM9Wt6po2s9iJFfIRmcMxboe5HkeCNEaIkkJ8fxqK9fZ8CtKEK4f1%2Bp9VMdYJqxh38zYOL15rGJMZPQBt5GjOWgmseBiYglE3iRKgvps0fJVCSy2nFCLsggEvpRNldDzawueaRLw0Vh5VRrjxXyMP2XzMQGOqUB218bAY9%2BzFyfTq590%2FY9mvdQW4tM1CccPH9cx1%2FFvqNhCod0wQHhQ06mBRdeJKLhurndTQQkPEnMMuQ%2BLreGKzkgKIFdzh8Cs9%2FNwCEHZ9YFo2ehR1LiIwMlT0k6tiKtgnpqc5A31mrdrr1zgrunC4fcw8MJdpYD%2FQLUlOEAQrlDWjDd3R%2Fogjb91Cm3zWd0%2B3P6a5DbreKb%2BNHneXR60ivFOF3R&X-Amz-Signature=d2562f078245120d82c52dc59de1078ccf2f02772f8b1b6bcd62528222ac9761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5BBKYEY%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQD08S9dnQd7wh9XKOYhvm4N12AmYR5ffqVsZcmQQYcJJgIgNjyvNQgIfKAg4U9VsXIbddCmW%2F0%2B5ZG4ztyWAhlvakwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAkNwTVvMzs7kejs1CrcAyC6ENWfGdD9sqKEcH21gt61uZCSSwQ45%2BHlF0AmLkYzk3EXNVyB1bUaq%2FRNHYGRikGA2KZLf6QIe2pfPHvLlCmQQ2WTdZ0WgblH2%2FPb2tGRyCWGrO%2B91z1kykmTA4BKwetwuno0I6T0vUdx49sOfkXbwdJ1DVlmZWAa9r6lBLQJz%2FiyBpDHpsgC8GCY9STrlvIUWDNeei51Za42g6A9WRdZ%2FZsQ14xTJdgrvMSOJXBXDnkyMBZEoX%2FEYhA%2B%2FU3wNnm3433YgoOYJfyhHXmRL3qcKxpK%2Fqpv%2Fd0Un1LmH47gYgRcBWO1j328kCCFBeZguc8NbkFIaukQgJbuEp3qCEVKUsC0OTkradDXcAhAjQOlxilbL74AWTv5BhcZl5nkOhjI5ESjH%2FDhwg8qKJYU1bnCfZzyeY1sgsloCUiPYtA7Uvi90PqFL61%2B6QV2sOfhSYLTzaAM7VJ5D5aE2zQ5Ycqt%2BID%2BIPvUI3qQTgBJLWbCT1m%2F7WiIxFcokci%2FCDt73vjTIhsSqSig%2BBUgSwg0kvFSKR2%2FJSbZOux%2BGqyjF9CV54%2BJt8GLR4dCkmXQ4ol%2ByBf78XWZouc6uMvxRul5de%2Bfc0AwEMydRfrce4btDf3uoU2cmspmPJto4AnQMKCWzMQGOqUBl5Uy1NqYM5uU16F14Re1dDg9f2JfO5ZwvNUudDz21X5o0iGwXEo5dedWhi08FeSfuVjFmlm%2F8ROCi6bwwjljl7Ec7aqeyNh2ms4XVWfNhjsSwI0Tav4DgCu9j2Ex3JRwD9EcQ0zxyqPZPHhIA4KfZkqbb%2Be%2Fm%2FgQmXwFqL6EcKQK1G0igVkm3wYPq7mRXC0VPm9CrM3CUwLkDoLor%2BjVsannf6Oz&X-Amz-Signature=93c06c62f0e7d2fca7afd01f531497e8c4596cfae3fa6840e9722e746a731b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUXB5R5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFpoyl9YmeISBxs4%2FvKJgDfTiIU3MrzjRu79AEpTq4neAiBFFRRk0zk7jzdDr5cU9KZpdDKpzkCd5tKqrxLznZzBdCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkN%2Bn7nbhCXwEDQfMKtwDB8EX6SkFSoTb%2BopoChVgea6ErV%2BP5YiZ9T7XYZvKWPesBvH9qID0riI8KA%2FslpJ6l5hL6FbefLkfWeOUTlaQ6yMn4uT%2BfKQ9DxmwIyOSycsEYjPvwZiUTLPmkRebVVK7l5jpbbr9UtTzHLDeDftgCM%2Bz9dXga3yeuldkqfgphlnqjAwiIsKl8uywgDr91dweJbHwYG1i7S3gPpn%2FGCFUW0AKXfgdc%2BlEmdnmnqFDAJI%2F%2FEatV9C9FXRttYicRJuuclDp82JUXpPAByjUi0UMow5%2FIHiVqPqIufsi%2F%2B85OpFkmvO%2BfUeLdeI4eNJ0AGHnxHPskfIMOqOROI9ITjdPHYTMpGbkUL01tBD7O0cHO20tbui857ujlOx17qwdLATmqKT0ymTIDSiTxPYMlkGKvV02U8oHy%2Bo3ktSB4hD1W0OhXFRDWSFU9OEYP8wBiPLKhXqeRAI9klsrtE0D1r5YlYjvSNgjMNM0%2Fn6y2Q8oYTm9SUulkHFOlloAcGthkv8cBgVudgGJf0G9aUZq8cm7zQ0SoB5XMZnNb2rvZFVXy4gJ38X8jEoaLyI9c%2FYZbCWzWPq1teFjQv1hDNnVBWjJKUTHCtqAZaU8O6U4QUsLvXYwuNWtPxl2HTbODLcwrpbMxAY6pgE3%2FoCZxYN65z5I71io1RdCBJm2ERV614yAwx2Rf9afHHhmw5jK3NDYA9Mp0gX0YdiAJOUtYNDPsadyHCIIBrFeXsS9fUaBZFODWmWV2CAeM1IRJsBGxSqMrdbH30QL%2FlDYTQE4%2Ftrtan89IgNWHPS4lhHgmICS9hftpb4TPvLUfBnQZadq2scKRv67bdTqdJbhvu5KXe60bd0KRu%2FazzQd9a60HvZw&X-Amz-Signature=804357e217aefe03002bce5df3477091fdb5111917bfa350a1a630f43237977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22AYS67%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIB2YwDXnNnqo%2FX8S4SjzH2wK9%2Fj8OmnMXInd60pe4E1IAiEApuyapU5piYL9KrP%2FuescpHt9eaG%2FntmCHDP7HsflBqMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMmBlPTrFobXyf9JqCrcAysT8MN7JQCR6n7enqTtksyLrwuMy%2BD6uY9AyL9weM%2BcQdEXDV7XdcQj3QoVJDAKMGIUweyqSHz5KnOO6JkSVXML02Wf6QCr2HWzfFjDppjwdYWUCZmj39YUxKgL6oBJ%2FnDyyV8MA2uqLy5CfIlGf6FAxXusWmO57B9yGm346zUwY1DUghRNdq1N%2BOAxIfPua8uesq3c0J9Vj73E1AxXhje1t5ZcVhx%2Bkl08THi4u9zcriblhcVhrgsEqJ%2BHOKKSV%2FeK3HIpiDWnqCo5UfywVJsiHTjjg59zKV2C7l%2FDLbLM1htcb4zJ3S%2BbyauuEL%2FNHFbvICQtMy9W2zyEH%2Bk4Q508XNhM8dlgQ0cm8tKGOi9beODeUC51HR2MIExKHC36bTe4O%2BMykhlpTZT8zTe6NYeO1sR7nKY1zXd5hgTA4%2FN5wT3J4nNafspTaLE4g1N5ub%2BW7eZ43dnwyrSIT3yh%2FIwO3jSUh6t3a2G6t0EUGAYXRmhb0vJqr%2BXa1U9PTjlpj14gNlCIb%2Fi2snRfClVX1CwXpymWbIRH1A8Ye6qmazq%2Fpe1lNbAlE99vgH2djn4zhC%2BDdm2GpzgWQQRRIs4bMPSW31KoBa4Uh6cnLD4squE4RLRrNPSJfD94dz4ZMJ2XzMQGOqUBTW8bXRe0rtWNSViLu6IgSEKrm9xNKI2h0Tt3gwIiouoBrxipzPlCUKpWVwYuC0FPDZEA7AiNFnhaV214zPtuMDlBmve8XWrs%2BSy4m1m2m0ixJtmEuiUGo81Bw2PPp4xgFDcgDDd4BmhKrrMK%2BMn4lIh%2FipMvu%2Bd0NcB%2FvFQLb0GnU4qGWPLFOejEjywySU%2BS13tm0an3CmMlvOBlSgpZgqkWdANc&X-Amz-Signature=f2640da81184c78ab4c316a9bb90da26ba75f09152ccf85aa5de2365a687788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=797d61a64afdaff42c392f852567aa7243c93dbcdd89739ace9a868f02b3edb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEOR7VDJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCH1tEtDTcnAiaO7cXHd8nQmDy1AfMUnWgtE%2BRC5II7uECIQCFRjjrT7WSy9s63LyrQIz8hCjJ4RZYFK4%2FRSV9W2sgqCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMYg3IgCBbW4Wz%2FzWFKtwD6emwbYksYAIBxIkjpDpgXKheGWwZBJP1MkVYvBHKiZhyZh0o%2BfZWVTpmXpuclX9MuuOuM3ig7tNCT37PkY5WMaru%2F3gM0mYIXodhreydDdEqLpRfAE1IxvnJT5VWBs2oKWRKrFTPMCxTFMVo0Eeab%2BHABxt2JK%2BZLNU%2Bilmm8beSVmEU7HOIwThvAa6v9BoaKHpkyoD3h9Z%2BWFXl5huf6LTABoHzF18vkPWC%2B963nkHhbPBLZBCoIghNFhq9uGQwqhXM1%2BaVKKnk1oKO8xo1MawSyn3uxDDJxRl0Q7h1%2FfrGfh3OtSPaThRNFTk2vyR8ds2aJqbrwnic46mQit4XRQwbFnOHodGBJq1%2B%2FO4TRX4gu2m9A1%2F6%2BhircHGuULkNSdo5jhoJODT3bqRAT2Oh2lxYsgd2jCliiL0mpACx%2BPwRpY7xvAauWcwQpGZNoVLRdm04mrloMmVnC6%2BIGLs9tEunC%2BjATJf15lamVZGXavsnLPBNyo67RuXm9ht1VPgXoBYQNoXsp7XpVCw%2FcGqeP4FOiEUKPjooal0z%2BiTq7r8HYgvMHSJVzX%2BHZPGOU5xJwnQ1kZ%2BCyjXfgb16k9G2h6lYQagIVI8Q4D7CxHtxEfZznkosFoi%2FlCVFytYw7ZzMxAY6pgHzuBs9rLamHvx33u4WaCE9HMPJcS%2FJtJxxbimIFpEXiZN8bSi0gSsuRtc0FbeKcoPJ223suzkXgwgmnoMoD13XdAb1eRJgWV4n5QjsY93yfXRIWprDlJv%2FvHzhAZ5kUy8%2FrXRjj2pBCDFai7rXIVtQ9qBCau14Et%2Fm29tRFoUcpATNcLNvkulzsH6zp5b96ExyLh5gNbalJpUQMDMX%2FVGrdv7%2FXUgT&X-Amz-Signature=8bb11340e51be54f49e82913d001f0960c7ffc4e9ea31ab1709764583e2f8945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=4032c3b0c5fbf31a70675cce1f3e92aa73abf59924b9d19160499f165395e354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=835e8bb26b574bc050cee45d252af3e672abb88c3fe3f809f3181c63a2d503ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=1be74450e8d7e9a8911664c72a0aa060697490314ef543c5424c41e4826742a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=e4005198900956b2fcf45a72214bfdd6c50f4db004765a0f3809cb8390e4f934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=2768027572dd77a32ca7715eeba6b786a9d5c619b947eb439dcb6a4186e5d90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=1f6792e6b83399b81d4c4ea03e97964d042c23575480859ad5ae597146afc43e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=1be74450e8d7e9a8911664c72a0aa060697490314ef543c5424c41e4826742a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=1eb10a10032b15d358a0ca650d828a1baa2bef958f2729646ba77045c07eedc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=6ae70ce18c28e7cc0aeb92a563a73c0a65b9fa9a0fe4c100d86815a2794e35da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHNLMCWA%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIFox0egg8i0yplkmH2Wn0nJ%2BCsdEbIZvCDzB0ph59IREAiAbvkDKmmJgSXAiGvHpHBN7d8M0SX93HinpXiM0NHMYuSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMQYHkXuQQgm5o48AMKtwDArZeeUesWPZB2A%2Fdyyte6wIloyCR5Nkf744Bv2NdEiy5c%2F5cpH3tWKDTD9ux8QdwsCh%2BYfeKTcbdQ%2Bz2RFZgCDMpjlYqrUjaIjLg9hU0xavL8kEx%2FqCCxcgul6lHYTlGx2J1kWW2VXbJ1LSbFHT51Qou%2FJE1KV7cerHdjGrjvNsCAS4Kmo88gfh0mcqNkYRwxWWUOh0Ojk%2FpXQZ%2Fyd2KbSxmsir%2F5l4b0WAuHhflax5NrXw9PdmEosTKAJtfWZaTBIb1GxYcjlFCnYi3t%2FWWbVLYx6bdb6aRW5BV9nWJiIhmGMR9uYyMQ8dPZZzfbLlP8%2BYZmGpXsjrSOJeTbeIS3V2C7xGOO0s7QjlVn%2FJq84Imc5hgE%2BRL5Xoav7xF3AmbzLwgncuKAXsTWgI989wOriO6hEs92CUEbbhfAhuxxAYqqJNs8yxL9s%2BcwSq3%2FYbaa35gvDW13XbizJ1EDYzXeIIJgunorQNwF%2B1c%2FRu3tQ8JgE9dW9c%2FMBGtTVOT5A7Ej72b8RfA2SdF5CYZ%2BmfXk7%2FLjU%2FsZlUqamZA%2BjMCA3z5Cp%2FXaOyhjmzljhhaH2KivHx%2BYjX1UGutLUH3fR9yPYnvAWuv7kOsAQ0Go26%2BOZ%2FK1W8xbXk0PNK0bWEwsZfMxAY6pgFQIl9iljaPdXQ1cCqXp0rhI23WFAArXAq7U%2BqGXnXqWmNwOer%2F3M8hl3q7Qarq82RHpiaM87cI3UntRyIELFc3JIyaUrnOG729c1EU7IwaMNpFM9A2Nlo4qrb0Si052PWBx1tCRgRzNx8yVLn68OlbEIC6jd80WgEk6jcsb9pmp%2FlzWGZzJY1zUX2zVWp%2Bc9sUCiH4%2BYsOp6XrX3k04rhVhj8py40M&X-Amz-Signature=9f27679987f9fb90118892627e816c404b0519aea4a1cd4f42564f48041ef760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
