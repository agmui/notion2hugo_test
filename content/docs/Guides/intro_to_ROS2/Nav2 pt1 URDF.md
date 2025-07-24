---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=79721d83645d66bfbb70bcb555869594fed977be1e0157afe1871da2b37470ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=5a7521ebc0b1d8577eb39842f8bc79861a77edf72b1a5815bf2e154e73b1758b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=e5651b9b997ffc119a157f2fca7112df4295b174dd8e0cc336ea3598f0b6e694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=944a68f3ce2696c696711631bd4d820c65286666b00482c873644519e2ec64a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=74719d753a244d364893556c1e0e42dc0da525db14099e6b074ff2827d4a7132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=f89e98e3deb56d0671706cf66dcfd9397508c8451f5b5fd2514c83918f49ff78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=d4a832d51c9af842f12ead18f6d23ac6d1562a1f9174faea99121904da805367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=67b7de2d822d21a7e8f3d6aa8dcb56420e847c58f3fb8c37feabbd7989dbe486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=218a4f5160f0c89ec354df8eb845414c801857edadf889d52b0544378947c5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=cb17961f0e017cde892d70581f9b73add017cd74a7e0aaae74c06fafc7f18c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=08eed674ae7755873884529b50ba45be99cd0fedca57e4cba8ab8ee56c4058c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=c1697eec98831188d0edc487f4a37bb8f8cafebb364e83b91f2fe8818bc1b526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=fe8898bf5ea01308381c3b18ea1e963a5416a99d9829e8717754e689aa3270c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663MMEO6B%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE29%2FkHsdmiXGQLnccucpTXbLtTfWfVmJyBaM4nqVnyzAiEAzcGLnK5augyMTzPpapHHJcS1J2cLb3PrGbBmx9o5XE8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDLw%2B98NGm%2FEsUc8KCrcA4uYXTwFFUrz0Tk7qrSXlOjz8paiQEeTmaAYqRBn74YIEmPiDvGqCffU3FF5zYi8r0GNFrToax37ClKThoZGk2uQg%2Bs8NYuvk9k3GSaO6%2FNckrxxD7jNfHJTLEARAPeFs6SeTwQ%2Fsk0%2FOr390FAPExkyNiqRz4lDQgESbDLgC4CHdyoJJNOYk%2Bkcr0P7fevQNXW7kV72w%2FsY8HGBixuNzZP0tgCB2UHW0YNsywSd0Nun3UrwdNd1AMHePDIPbmqS9V%2BEfdIYTwDRJrG8yptGXLg%2FX%2FcT8GahuwgNVpVeNgWruW1zeFX7eW91azfVsdjD8wAEly58%2BPMd8SgqAUKsDCMSMYtLRt%2BUPFfABcTs0vpcP5Z3Pe2FoBY1euBHDHfspc8LGeltJFz2T6Ldlrnh7afGilJZWWuwilAdIUg6tHSgA2NzZCbGSo13t7G5ycrvKmdKrRXVshM0wD14r0Em5IScGcqafboXgPyUQ%2BRbqFNyNIvsdP69DtNGbFMHRZRN0fF8xdCnusO0ymbMZbGUtY5g0aCvXsMcQYxPnISsTSeNUmaHNP84sgBLtc%2B7iLPReLb37Mr3G5HfQrUIjg%2BReG2TEr9EIxxCDvpF%2FcLh0lso5aBsEer9RkcX4EA9MLGxicQGOqUBRfPRRRoyXBoYrouhanIiAG0C9hQTvqLq8qdo7xjQ8b0dQOhvGFO9ksuMCj%2FsAmBirHxByq030%2FfBqVyvqTtFT722YFfYjicyABrn8qW%2Fru%2BEjJtGSLyhPN24GhefpFWk0nIqW%2F55L50Xfjikuf2qYLRFIROcbyQNe4TYk%2BDIpugFO%2Fk8I4iY9VRGBmFRC8W5zQ%2F58JQHTifKVp7FwGS9EtuWj06K&X-Amz-Signature=e71034dc421251abe7a9c9e48caf54471b4f492d2dfc3c84a895123f50411fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=9de91850d9898c9b048a326e6005d9ecc9b03eef951a256ebdb8c41ee957a1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=af1407c19a1c747e4a7193b3c9adec3e43d736a2da4022080968f30304225a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=d664aa3d6bca49928ffdbfed48fb10f59b0492644c43b66259bf43a6b84c6c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=c8f09babc949d940258ad78788cca76fe824e6e000a5475a49acf710f3b4b554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=32ca76be252becf89fbbb480414b479b4edb83dfb914e32d2d560921a6e888c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437DMXJG%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDA0zY7rE3AJpDX6l6jF%2FkJjSP6BK5BHPTiQjTLJJQFxQIgCxQWKuWIQawrupFC%2B5IGWlXixD%2BKzT9HWww5EutKO3kq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMzXxJsaNP70GzNNEyrcA2wr9n3CL19Mk%2FHsMBBXbnzaNa3PWfJxF4v4JBEbjsby5%2F0jS6PTPMM0zffl4BqgHSkUCIYOappnlzm0f%2FkfD0p7lso%2BbvnQeTyoKLWMenFXPieceRsiOpQ8vrNovDCTKeojE2uSQwCHnQ8WRCikNpud%2F4EZepegLaL3VIMMcR8aG8T6evAi0vT985CErAX0lRH9lD18XF1mQaQSEUa1ej41qq0WtlboHotWE%2FhATM90eulz9tOu%2BMB7I%2FYIn1mXLx4Ap%2Fv7DcdT%2BW8a3%2F2sP3rr8M9Yfi5%2BF1zxmSubBchj7e4bum3kdiXAFP9ExK%2BJZjc5xQ041rf07XEFXRV1zbRUbaHi6nzw2kWHgbHr0LBjmr6hRDk3D6ZQc1%2BdCdwUHqaJmijB%2FU6weJaBF5ny%2FeyYXMxG%2BI%2BeFT%2F1Uvf4V9djXaOEZEuD7k78Wy65SB755dkGOthnuqLFKObtQBO34v7CjK2N5PZVxjBeaA43OzoIvoOr50GukdAM4pk4QGR9rtAXcv%2FqnVs%2F6cv9qVIWMVAlNMTo%2BzACGNfFwdOPKSdIg8okDfwD93oq4V9WJ%2Bqfpv1R%2FMxERZD1H07qUH9zQCc6XBKAFrOfeEZOqucuM6mdXKpc9TcQKKVN9ea8MJCyicQGOqUBZjBjriXw4aGGzI48NXOu5TaX5OpALOp%2F0bq3tW7i%2BY5Op%2BPQnXjZI7m60zIYXNSwgbhBqZfbBv3xABpRUMoCM%2F7e2cnFq7St1WJ%2Fn4vbSmfso0C7Ub7CbuwjjUYahqrAgKy%2FHMvVVK7KtjMM6lAa1tMm9YKnAKEgcmNYS7Fv2I%2BxICdlUbgDE%2FcsTeC3oF5RSyS47a4HvMwBVN03A%2FEc%2Bsg2p0vV&X-Amz-Signature=7f9bc7541be9d4e1c3700e40cf1eaa2ed1245641e8b96b2cfebdb648cf212601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
