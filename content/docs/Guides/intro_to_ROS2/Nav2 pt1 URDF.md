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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=d16d47a2db0f9ef06159552a73e59c624fc53cbceae46828fbecbf5f83dee76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=cf2d5d2aff2ef6dfda4816e027cedf62f68987f4536d94409930c896bb711429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=fc069c66381b6a23de8744878044fcc617d83343c42c16b9f00e002bfed21b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=9e6724ccf245a586c99bbcd0088db876c5e574b1339bce9a8d75fe9edb491b36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=7088412bd4abf569e7c92b4af595c08e910d130151fd0c135dfaadcf86d747e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=82cb542c18e05a0402dc59226dc614cdb6b160325b5380fc6d23c3227bdcbd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=1c86f1f1f0abd405c71d152a1025162e92b3fd136caa4f128bc7de5ff8d78ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=d6bc54c539a230c06c04a55c2572e965f496a7aaacffcc6af9fa922f96341345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=e93875d03860c2b7fbbdc08689b72c9363e397cdde5a7d67b4a0be9c0fa5636c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=bc37f4e0a1d9322057f61360e7eee703c02b63906b709e650dd3213918cc9105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=f7dcc13d747e375a813d08714d35f57f22108ca1a91621c10cea76a4d2de2fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=44a22ad4fa0b223654bfa588d8606f8e2dd8ee929cbedcd933546151fb9f94dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=cbce3e636726d41f6f32a832d716440863cccdb3acc28308f8aba4adce33ef0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJQYL3O%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIAyoxON6IpFCrFHzHtLlQgd3kg3NMXiElYB2dZJ2qtqaAiEAggswJA8VZrpdobeE4cYWOXazuz4TCqliHEdjzx53YAEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDEOEwCtbBXaoqPbJwyrcA8Kbh6CiN8K5pn4AGCjtviXdeliEA2d1mKAHiNwEtR7vGOWmWG6l4T76N0mvGs%2FhDB9Vezt5AaD%2Fmq6weQYayMbRDezQNTRyvKBX%2BEqoLuz%2FaZjFPXy4dZDQF4UP3AFI2SGq7KWTVMUGnv0r9KmKqSuWDSpOBPMRRdIzexAHyv%2Bd6Ep%2B1NKsHIq8piLORFBaw1Sdk9yc%2BYFBXKr2rTZ99LwH5oplnvGEc7C5YBGH%2FfHTM87CQfmcwXDjl2M0d4VO9bPdmjmpafodePdr6q29KpBQ1ccd7CLZBfO37d4AHM%2BAkOAmbUvsLa2RmK6mf9ltpgePFERkF9KkEb7fM%2FLBQ6ZCJJqtLpamcMEuqUkiegA1vEPf4NH8pcstOWuqAN7IsBQ5oUBcnfQeYvli9I6lryt6PsTxPjy%2Ftrsq3Uy5PGAuo9Uvmzs%2BoPJ7Oq6Q3kt0w16EQ0%2Bpkc9fQuIX0MxJFRjlTWf%2FuSmuQTCCSD4AaeLVhaihmMlYeG1asybj2GeyTpRS%2BHtgAVHnUFe5De70oXUY%2BUK2pH1IpMTvWjGwdC0NgrFouATazWZTReGqVrcoLPPYmzbLAEV36v36TpAS9s2DpAypY47N89zuJ2f9pB2GD5ltSZRKXMb%2FJjG%2FMOu8kcQGOqUBGQMXpn8dqmxPl9f3I9czQmnGOeZyGlSsLLDC%2Bn5RYNV4A%2BG7JFeRuTPr0mEbbwYJJSKcwkTVpOg9pKuMAMKqv3QAwKjFFu05Z7n1TauNtPBKprEX4gdNlbvKeP2AhtYO5XRakKgEjanS5sZRdDg9C5vylQ%2B7NDTlUX8N0RoNpBv%2BbW8jEJ0udWnJJob0CDtCkeM%2BgMYC%2BfjWDJf%2FcIuApeqw2zcP&X-Amz-Signature=1d5123839e8ae7b00c37d8a654325b39110137c6322d5770f6b5ea641f22bd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=e57ed1c3a1fec67f609c179734927a6a1a88884e77eb4ab14656794495936ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=93e92e7c5d8f2998ff2de66b30e5769a98beddb30915f97104ba2d5e6e2df952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=24ebca0e0102c0335e7531f337c10c7a5aa86a8242039a349db47a3f27bb9441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=1c060f32fa9872d633018b96b97bdab48df152e2bc707577fb784b351c4b715c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=3cdb4bc4f7aa91ec46517ecfaff20f3e4bafd0c1118df6a9bea6d4a2e21f1e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZO6RAH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQCB6YJhEs5lyJgWSxMpk86Lm70GCdrRpFm7hlpTQUrYlAIgTbgxP3fIqa6PM4hy%2FGj36GiowZajPBeVM5BYBtcjvPEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDN26jpmCj3oTo64nPircA9wbkdU6vvS3nw9Ze2Gtsh%2F7DlTw7wM25vY5fGS0yhHR3Ptmfj9VPdpW47Ck0ItIRPk%2BetbWj4sOikTFb6GrzV7%2FhREpnH1Wna0MwYpvOA0pI06VbcmVDOrIizTaaBgPFYF6YZm3smjat%2B614h%2FctJA1SZTBDKruPW5bnMCPIq6BoVc9km6D%2BJRYLrw6hO5fmvpNNICTy2qgUgqpdU0nY8uKJ8xsLIDkq86Afpwf7UyJ0DJVoSDw9r0cjM7gcI9B6kLyhmSHgdagIkdqHW5jGknkeqT%2BTdoi6C%2BB8LLVsEGQy88sOPy0XYeC6Kc5eGuy7homJdGIN586LDAHkOpwqXN%2B6YlgDWsM9gYnFzjqQW33%2F38ojczW24G8wJUgcwQmLF5%2FOnSSvRmvoTDVGoOBn7MFnYo%2FoStD8E4%2FltuE44iuEQi%2BjucjeLsL6JdKEffB8rg1vr17mUXIZCPk1NpFZrZF8Im3qcpydau8qM4irNNYYZ%2BKt3p4mBfFnN5gs3JIhx%2BmvHyfNpDuFM9dWvXyRiQrgXsTASsPf98npeYwHMHUalHIIaRfHRFjJY4kS9u81N%2FuTmMqjpjP5WOzJ6nL9DsnRwd35GKHuuIPeqtXwcV15%2FK9iEsHhm9Az2gdMKq8kcQGOqUBoogA02NbPUwrPM2%2BqoMOuzWhGDXaxMeG0nsi8zg81jYMvT0E3h4%2BZJh5vlH8nSete7Ge%2Fh%2Four29DZaEdQ6mhrGMffW%2B4xmmG42L48s7Q41ara99HEgTDqtCXkvcMjOls%2FDOGfXsxNsuQHKfLLOmHIgNlu9SawTY3%2BuFdLyOKtz5SdJmDB1Gi7%2BG3I7kFm2UURQEK%2FOqNpgqiWbY9KvSPz4LssUX&X-Amz-Signature=390e1a0b5dffd7530f8b77805247cbb379e0ba374d6901437b3820b69872a63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
