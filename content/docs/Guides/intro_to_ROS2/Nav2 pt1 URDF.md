---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T13:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T13:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=181ae02cf2a3695a77bd6ba52b5a8a777647cec4462007a0bdcfea63f8443b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=38da1e72da6ac376b0f7a10fdc018b733131f4eb5b5c30d363f0db1fefedb8c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=b7d67485cef28c787d1b732d48219c0545f70526253f6821f5e4c754bf25cbd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=65785eb781fd59c97d0bf4ae895f688e704214bfb766b75b155533887d10794b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=4b69c0273d9cd4a368230f7ad35b68bff8b3d14075e7f9baa6e4dc5eea31975f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=559eeb85d2852762547be8990a57572ffd2aec1821e728b94c846c56f9d590c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=c88a82a4a2e2bb206bbe01cda83a5d81adbc42c85460897478dbb3c7df97df46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=f2e21c3478f6459f349d597316337845a12e71c4ba4ba3e80758c79453d2b1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=7396925e7cbef8ccda45a543c55c4a9d2b158c3b22c61d4498a807a20a709a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=72c171f4bbd4286a9ed0a9cbf829ff2885e74d89fc084d093510184b72723647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZEEXMEP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHnVnk0o2WXaTiUyFUe%2FmGpaU8XHXWcniFUWlSmSPrKJAiEA8vAH2WVuzAZWbQZciNA%2BGSbkeGf02vECfUZwfDvSyMsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJ2U27CunwdMj8y0ySrcA1w1b6%2BdOg0cpFHkiu1TBDxVp2TBnIfOG9lfrmodC7Urmgc%2FloiQkzWH2VVXnDQnfoUkXs6tbtR5Rm%2Frhy%2Bom4FyocsIO8CKKSIkzh0eecDmJz1dF3SyeBLkhl4kZjJsXWipRKcQ2iw1hTtSJep7cBXwBrehtmsd6rMOQGM8eIgw24VkduprmWj5CEV5r5Jb69hAJTjydjbeDwEr6eGA7eWR%2FxQ9zHRbnmo7VB5%2F4%2BL%2BQD5pn8ltIAE3JiRselp08rmKDy6xk%2FNXXLy4v4m11xXrOOPhDHtfsjLRgOJnbyOp4SSmPRKGm6XzPuH6KRq881X5ptWTebItrCU6SOwX1seLTFUZj47d%2F%2FEa%2FnDeQI6YzYA4IwYwlvyRWTB6PWh4oxCdPih1wK%2BKiQAbEJTdq3KdJggKy6JC0vtEsNwVliBtvJKXdauTt7J2BbDwjbXcWLadeyZ07baXO0bxQYMdK7W4Nk9ObUV4a2M0Jv1EYS3qmuhkixJcqbFCON4tSAM8GR4opGHhOskqTpKonl0hkj85yBssc1IivZuW7%2BdSQmqXSkggfeGl9DRtAJRBiN8YqW47X65ridTu4BHJ8EYz8EbtgJqhmTSXb4VerrGgNXfJmQbPgmz4FemwMFYHMOqbgsUGOqUBWvBYns6uKrqJFTwbMcrH2F7SNzuyWayab4YbD9SwgNImNOQ2tgvSiajbppXjuE%2Fg6Wt5L%2BQ%2BE1MyTCrQtCOnrKuvlLdaxs9vS4a6OYHgugkDqAdiErwMslwohHU6jnNyY7CLvZ%2FxjAk7KqvaAbgg0MelB%2FzAoGkjOodI803EXN5TMKszVqyHlnYfnHvYinA129SfUaJBL18XcVfkmHYwjKVzuO3f&X-Amz-Signature=8a812f484774b37a1d19a7c3819b6a6af9ad9eb686cad195b703c931bd74c5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666LGP2GX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQC%2F2VR19sv%2BDcxbAsPVICaClmkHjUIM7uBCe%2BjssuiGqwIhAPZo%2FLN8nWnd5531LhaOk3dB5BrW4T3xnKlezhq%2FBCroKv8DCHcQABoMNjM3NDIzMTgzODA1IgykNuquWe7HAXGwg%2Bgq3AMYVyk6WlnFQyVbfUu1T4xxIWmqETCY22nQbAgRG6%2Fd2ZG4nxlfH3dLFkz8u0lj3sJxe%2B9Gp1M3iVq2DPlTL22GKHBMMfzIo%2B2JqTaSs0QGUHOMzawxYixzRGnHSEdUvutlZzgNyX4N7yIzVl2Gyf3jeOmTAO7k8QiSdsxGxkWuO6Fwm%2BkqkK8WuNUMBPQMFyY%2F4FIw9m%2FKJ%2FeoonlVbTX56fI3APWI9%2Fsvq40PXqpCee6%2BMcLITY4nNoVWAdrVzI3GO1iPQV1Yh33Z3UCYtHdsdn98KVQSmhNYoUeUX%2FzyrzoB16oTCoM4ot5cebmaFJhlxut0R1W9YLR72KaFFAHRcT6YrfBGhP%2BT3%2FOwKGqTVuVJK2lUK8GLipyMFiunIVhniPBF6iCKn3B0SOU6LZGCjFTp54SeBHgX8TFVOEFvM6PMv3pRF93NcTBCy6%2BYkdEJUXSMfqbjrlUZVumgwNM2K%2Fw0AWxYEW%2FOuTX0pf4enZybpZUbHZ8T2y5vO8VGUOn1moCM%2BAP0k0UtBWuk5eN61daRrV0Gq0JqhiplSNWWLfl7H1pZosZDS9Mm0XXK0eI8AuyYiZuvCMIOt2%2FOfvMAOVMEee43%2Bh5l1WVi%2BSQBSSJsuP1CFUpl7mtSYDDvloLFBjqkAdY%2BeMCSdDUkkf%2F%2BXfLlTQykNPSox2n678n9RpPw0Ds97%2BDKow1Gxvzjjc0hrAkisKCf1GLezZDlH%2Bj9SnX6mv7haVPDUJ%2B7wu%2FhLM5XUPBcYi2MRC7wfw86tmP6cd6gBJjapRMfk47NdX%2FmGGT5lNRVvS0oxvI7G3cx%2FQH5jfXLjC%2BY0yUoGYCDCTeTBK7wuwNvCBM8RFWhmNY6RThoCOeA61PY&X-Amz-Signature=e269894173c2ca0815fb53f0fae39bb8c0db87eb8ffef5933916a3a1aeb87987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2JGBBUQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFeYt54EpeAhygrLAxwMpwO3ih2ttMtMskD4AxIenLHVAiB4oR5i6NPi5nMH%2FHjU6nufe%2F6U8M2lxQvRSlTi6IMSKCr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM039dPeR7HbPG7GoiKtwD0ZkIVNYZUcwMWiEKlRtXJ8wBTfo9vogsnU0DJhKKFqhoSkwYvikNfpH60b0JWWzxP1fGNSOT4R%2BKsjtaVrMcO5eaI8SGb99jMKUK%2Frz0ZQsleFVLq7M0UGYOgXcWUo3l2eHwLnUb8mzlOB1RiEac2hR821BHeaoi91hoWlUiXyeQ5JPz0IO3t3ERRiDEsEcK59NrKOGc%2FHiyvI5far7PPdaYZmYzsl5IvSZO69j2Sl8DZ8Kb0Oy6Y9a2psbLpIxOmcpdqWD6Gb5o%2FvehqqxNVEgwssTjOnQSRygXzk2%2BoQakiEcjJo6QehaFH9%2Fq7u%2F%2BeXS9LTm%2FqGobDSpINx19TwLJvSrg4fQxBjT6k3lmBSgUdguOWbkm%2FwLfjX5Ag57G%2Fd01PiCUiqP3y0tOJklJYcbYuYCmuqT1lITtGyD4gOvp3ycnecki6%2B2cqrbDHlGz4JKS%2BRJNb0aKEYWE9NNV2ANJDX2%2FwQAHKCJTKZGm2UK1o6azc8e8utDOiEgmnH4KU3ZwG2BsU5vC33Bflq3joWTEDGe9MgoORD8QUcDm1%2Bo3G3bNUqL%2B2gqv2TkBEVm5KDHwI8WDM%2Ft0CIcdT9hZcmi2B47nBhjnUoLyn8jfpUt0lL4tWhmiWZLc7dgw8ZmCxQY6pgFvNcyiKrsTphvcyw8SW%2BkDjCjNVn35R8fY3HHxLJh3tgKz7e3g47agbAj1%2FyoaSZWZbrxD%2BW31q6Y%2FNTrDOlac%2FBwdkmJOaHyUEB3NCw3Y90M7q8AmorbB4NCX4cYCCEvUYvXljgGV5%2Fl8%2BHWVCNT4L7yovRlnMVlvv1nJmls8hIqM%2Fch24Ru68rAuzJzaMX4DGdnr08m3VnlO1sVbR35dkMZhBYll&X-Amz-Signature=e6684f4b0c825d2aaf9c801c931291fdd1acd45e978ec617eab718f29a119cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=7c0174c42be5357a113981976793e21c304d98b287862db2a6f98ab5bde6b59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6CB3HP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBAvrCWER7qqM%2FQeqGXsJPskm8oo8XxGO2CT42paQK0GAiBFqhPaKurh8tgCEGkQANY1Bi4Mh2TIAdDrLBObTJefASr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMDfF10nILyGa1ylKlKtwDT48uksX9tlSkQIQNAijlFf1F5Rk4bNXWS%2Bv30ekwAscy8YmfvcuCMIGGyt9p9U6M3UH7%2FdYYcr1o%2FAIKL%2BU2BMMfWyZVE%2BbgTaNl%2BlUgwoG3R0L2mIO7VjehYD%2B9LgMY380mvmelV64Zd8oJ65VkvS2QAiP5fynkTyeRiyC0M5SYhEoU6zeyCaNVM6hdyFi3jtF5h0KZPl9Yjve5lu%2FnS0q4yYKSWT7ndQ1wrIPmDU5noY%2BN2mSoDPxjbxOglVLpOxuHDimgSAvXu7Kljxbqa3G%2F3tAHgot0chArbmvnrOsohTyf7yXHEsY0zZXMEgLFzoKnTT0A0ys0sqpHhdK%2BlaWuR1HQIt1u1ptW3ecW5CkL%2Ft2mksc9RxRpa5Dl3SKHpAx1pdqvIm1HUswFBQmXg0%2Fwfx6XhVaE2D%2B5LwxSIZoSkY5h04gEbUxyBz2LLPOitHFOy5kGOJ6ygsnGeS4n5lWmyG3jiJxvGxXUUKGEj%2Ba27gBKjoFLgsFri3eeXrSAUOLatlzBN%2FakT8wuyVXkmThB0ChsRwHhl9lUZodlVUC9QyBEv0i0%2BhmB43diwVpcIPyHUDW1CsUuxA6WF%2BzDSfs6fVQxmsXkp9QMyR%2B05Hpw5mUl5hmbS7W11kQwrpeCxQY6pgGp31KYQaLMenMfGBMYACgqIbBdlqE2xTy1N%2Fbw2fySrKl8j%2FAD1WgwinJIiPXm6v24BtHT7VoqWpJapswIhgARO5v71NmmecIXmv0gvq3cYazjIL2mtjv9Utr87toDvgC3mZUHtASus0MLsBjUGvpSx3RxQPtUp4YxuVA%2B%2BxByJGDXwuM4mftQLn8uBeez0Fh1wHzKf%2BCEXM21TtNmjiOK%2FlvRmdOq&X-Amz-Signature=ee6c37c18d4f94d8bb5712c0a3e1a377232ef9d44da8f89d0e38af23d3bb43cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=7beef159c1abf2cb57f435037cecc254749e6e7f7d7c091a4e1a9e15c517048b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SWYY7ZZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIFQlpB7WhsWyfrmK%2B723nRnprT%2FIKggBZauH4aqxz8XDAiAcf7FMjknrNDcEcQpIbu2%2BCO0aMF1MsfhuzVycjz84BSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMpXT3qw6cnEa%2FRm%2FDKtwDwr7%2FBfeA0uqW0MnwY4mv0a%2F8WRs3tBs42jeHoPRPMgco1IAwnljUkOw0Cw9KsUy%2FHffu0Hcw6vy%2FFNOpEeTbb9qbJ4ipsY%2F7IOoZLOe7jAWkLUUl2LBgjKG7yve3YquC1gCppAOrozVHu8bfz%2FAnQoawjNFvSzHAHZZNaSFZj6Dx1VOK2g6dWc%2FRhMgnP9FkNblGx4v8UQTLnSdamYLwl5alvXFfMRpvaixmQxP1urFsZBPZwoG%2B153oApMKhOqPeUwjwpeb50Fm%2BcY8%2FBaQGzfrONsJYvevM3vQvNpTb8vBf8zWl4eDRbnenGWWst3xmZC8Lmf98OBf43Z72xCYhgOU6Tt8BOc9toj8t10n4QuDyJKZO4yy%2BhlShRgQrrfBayVstjmlQtz8CEpPJUdxdmP8js8tsuoGdix363zv7XgdmFW9OBilwfMZcY%2B3%2BzGSbBcPM8nUnK9wGjWuKhqbu3HCze44iGzv4v9TiZ1L06846wpK6zHyUTiigFUbTrm101OoUkY43PNZX4SU8fa%2BmdmeHSwU2HRvtgv8iPijLlkEdIwij5DmQSS0v1UiqlgwpYiJn7VYaheADXCnGDzLVB%2FDFIdYq0GXvlDzQtYMMZjgsXju5GKt%2FL6fyykwqJ2CxQY6pgEF4%2BChQg%2BbHtlLciqzfMvs%2FspHdnxtAkw2H4NyKxR3MvoWR%2FJYyGgpaQDEzNBrDL2iDqzsFoDzC3Xb%2BsO%2FzNkXcLDG1zraFi7hI51V2Cqvb9lMEuaaoUaGePfEAi%2BLTVP051%2BNhd9VC4cPQON0PTEA4LKLWJ%2FcIvJyGORjTcHyY%2FHbH3iLzTsY66R3Re3nrmMoplZcukRYmzn1r8QQm1tIEW92Izc2&X-Amz-Signature=56319646763d4f8ccfcdcd70ced4f02ea26ff2499d88ac4066f4b2a1e7efe9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=53962751371f2b9d601a9619e02c7ff2fd60221865504d13ac1da197996beca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667ZI2ZXQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCJfdQXIqtec4dXL2EkQA6sLq7baJzwOaqA5JegIulJvQIhANgWNGFmrc3BQ%2FXKsw0vtdrUiNBJj9foj4c%2FfqipqY0rKv8DCHcQABoMNjM3NDIzMTgzODA1IgyZemnu0FXKNBu%2B%2Fwwq3ANyfgh7XN2Ecj94yYBit7GYZtBzpDcA%2FdqJT1FZmY8XdAnedzNTK0%2B5JjZVvPbz2mXbkqfTQkj%2FIUur6QLlcjgqNy7ZrWSgrQuWE7VBgxBvdcXNbhyt%2FfdtpL0X8wTVOPnbiBiur%2FtqIEkRLEZ81K1YrLr13ZMhxCee9YRlPwoLmpKgV9AuJsASliB25UBVA7E573im2Jge3AgP234v72T17JqZakK0eymORXjo7wprvbFdDrYjtYGF4KEmwjYqHQJkabJf7Im18DVYA46GHs1FdpxDEvWlGCb%2BZZmtGkPjhuNh8%2Bmi3GtzrEHtBIa6v74isEYN3nNwAKcMloOZ4ZG7jdKwdboY8S2jcfvRHQgS2L0fzE%2BDgoZv%2BPYcL9JMCadNbTrsU3gT36q7mTuWuF346x%2FMBHcraQg0eYuMsMUf19aj%2F%2F4TqnutXfqzjdtMBlGZJWN51uWSLt1xvh078FhCAeBfLaS%2FjUnF9nMhmM7SXQYzopJ%2Fsy%2BodqpV4ULVTiQn%2Ftwp2Inp%2B1mZlkfqRd9oT0jWCLK4X%2Bjn0RnAXJ1dZPPn%2F%2BfTzBaiHZaGQPNKeVpFJoXd4rP8EVPUwVVS2Oy78GslRsg1PTSmDq3vbogh4VSZGVanIjqshad09DCFnILFBjqkAV6ZTbVttFQzAKzbqakxw%2BFnJvAK%2BVnBy%2BtGFJ9HNCMqFcg5qz6VG6N9ZrW%2B%2B2AgG6nHnNJ%2BZFlgEGS4AeiG9RlqQOTDvMoGyoxVvsJn9VJ%2FL938dq3mXr5v2BfM%2FYpx8c4sJpVhGifQzUfxC04%2FT3HtY%2FJ4%2BQZThYuE0U3l6UoEgINFGevuHeAwimtnpDos%2BP3LMO2Xwnix9qssTXs3mcohNGrg&X-Amz-Signature=1ffd4e049b358d1261ce9a8adadbd9b40ea2458a6af09ee65c26665375d2dc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=7b40dbf2217dae2b1c3a86cf007fe444a78c4cbd96ecb6235422911ddf89e8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622HUARHZ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGXmHmcUvYolQrMoh6aUM2Cr4DYR2CxrVOibYqELlzH5AiEAkXgL%2BHcBS91wq6Qj5Wlx6Z50r5MifWyQtBaRA2JV7GYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDpecHVmG%2FNAUNYGkyrcAxgdbackZWNsGQpB2h1JMf22gw1htifRwUXVDlW3SX8vXYagASzh3bgRCOP7GthcI3nmHT4xVqaKANaH9ECEvo7K4F9v%2B1r3vvV1sLglojh0VqbPbHUDS6JriqAiywKGBbMMy5BJg5suBs9Eb7XKvGus%2BZJEr8st85ngeFLW3kYRjGIvKqhd2cS7SgMbrNgXAPSetI4iSDoUlWPGmRXGTLTYcyQOuEjHh%2BTOORCMjToPNqKwM9pfi2at8HazrC8anxdEEGv5s6UAAZcr7AdUpHVU61SC35GtSZq%2BOBtKvG3neyT8Am8l2DzsPubo5LcTeVYfwIZBAyQkpwiPeyGpm4ZcUIeLaJAVnFwnee1kJeKnu3XZdV21LeSFDFPmBLyXRDDRjE7K5anrCv2ULOJLDmeIDjdkQ4GH8mBfPq3M29GEIM9ShzZy8h0MPeMwx6yXGQ%2BrPYNVy2%2Boe%2FS%2BNxBlnPqhUq3r0e2VdC2xmYFlqbrpncsrSd3ErwC%2B2gSPLFa4Swhz0Ut6KcM0aGlDvKicN3VLRBUMhjAzVYFknmlCybcktu2XjID0iWRC9d%2F5koryaXCnuAUYhhCzVUgOcWw4mQM%2Bp%2BW7Bbp6uAHdgu4g797q9dolgv0EnWvLHS9FMM%2BXgsUGOqUBUrahErYTSByupnk%2FIBSNoV25nG5A72pMeBWf3u9ZLAjYnhVF1cqS7IkerIYNFe%2FlOc5m%2FmvOk6Q%2F4eJJDVN5QX1SBmjKmH96e15d9NTf%2FH5ez7NvFR5bZ03pt3CcH1mLmH57OOeGhhGZT%2BbFHfpDQ8o6A9skIahjsrGPX6iDOEvRvTLIi%2BUY%2BHT0dVQempgUk%2FusmyntDMQ1xxNdjE2iMa8C7O%2FV&X-Amz-Signature=2c9c7e6a698c4061b78f148bc03af43c0d2b4f68e41a7e8d5b614253f0a2018f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

</details>



### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FVXXMRS%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIAsku7uMBmlvFaAB6ulg%2BjTJF2f8yQYn%2BfIRK9djOoLtAiAWOVFoLl6jReOIj60FI7iJbBBk5Lvl9SY6leWgkpoI9yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMLU9gy74dDvzTwIyAKtwDyuF%2F6pweGVgbFrKf2wO3iWn6AuG7X%2BNBtPW0vGh5vwat5uCw23vMQixYlAxm%2FvRrllXYw0MoLpIvinZWGifqeCvuuY9a5zpH9SQQbRi2EfnNgEXQAr89q%2BY5EOl9jwtAYolN4xSN%2Bk29Lv7H1UtZsb2BbP0lhfnZkjSUEUX5NQrAtJSzJ%2FNQv2hmU7Sy83qPc924hMo%2BKZL%2BxIn3C1EIXqr%2FnJscRm2v5acUXdDeYlXwrVFuoMJNqMMQOinpUXnnnZ0pXmYog6isvykulGOujbBFFe%2BE1oWIMj4%2B8x1eP3p02%2B%2BzBAU%2FEyx0aSPEVxgEWdhFUwhMTYOijqjXXqlcwmcZNDirBeBnqgJXNw2lQLB5NlbIbzDov25YRuannp%2BaMC7msFJ%2BakOpyOWB4ipFbplMgLkq8KqjB5sfE5ISAsP%2FY%2BG4Qk4NcBppXmupi7dlrvPkfjXWq1QdHlJsVhXr8lWEDBV19takZwfD6n712fBKvcZEWwK%2Br8gIgXXKKESKbXY8PSyM2JybiJ%2Be4oI9%2FLfSYjU7rUTJiATC%2FKg2i2rU5x4f8DpQ0aFrtZV9W7agx3grhDyfeoFmyfHMk%2Bd1FV8SYVKDdCCNQCH6qVRvcomA%2FgaKI0Z0NElNDD0wzpOCxQY6pgHUpx9OE%2FhocZim3p0pOgOBFNaWwHKS4tb2TA%2BU%2B8fnG%2B4ixbgnBJkLWAGCiFz1IdjwZ9pG9iyhQuNFMLRDTPoBZPas3BSODaG5%2BD7ZiOatczzSPQWLR1yGXG1itN4Jlo01urV%2FinE2eNYmhwFajhCyrUp%2B4zHA%2Bu1mTXz%2Fn7eCkXoQ3RU919fgEh8gKW8AHfvB1kTxHNOp68ppWtZxCURNVEM8fWWE&X-Amz-Signature=846c0cc6d1e5ceb4fa1e73a05f197fedd2fb74ccb42214e1f95075bead7fdacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNPZDQ2%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCLJwG5jzfxE6vAsl%2FhxNtYj2qRlDqgSttC7OyKuylW4gIgSXzi7IbEGAY8oXHr6zr3nU13ogwdzgU1kQuQ%2FJBClrsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDI9W9qTIjHxdArGoDCrcA6JuWM%2BrAYlibp9kJEZl04DKckq62%2FfF1KsnrOvJbmB3Rx94fIX8Vf1enofvsbUA9HAtJltBDxdcxNU0vb%2F1pyMpjjzTmKSfIaHT9NN%2BkaYNQeH8tXOxjfexXeDf0LBox6Sv7yeCdBe5bmzhAkzzdv8rqPFDmAMtm%2FDG89JUoz6EBlbj%2B537N9JLYxeeCQbZz534VbXhiJhpIHft34MZs8G1jfmMhMAFFm4JYtXIuQ3o6G4CTPGGyAuVCPdoHsGccUHvVaV3NDfIU31hfUY60tw59k7K1MKBNfwZXBWYk0uWZT7YzveZ4F6TvLbWH5SUSQkPcZZLgzbd7I7DTtRT2F9CFIMwJ888TCj0XtDZk%2BXuzzIahTmQ6HOBikaiNMHHfHPym1mVFvOkg25bcouGSnBf6ldiv%2F3Wu6liVfr%2BauUkXCKcJzTQsi21Ca2T0ulf5H6l2jMq8E%2BrophFd7snBIcZy9KlQdaq6XOASnpsRtEWV4iK2DH5degj3PyhGH7tRcfpBaQVWMvzNZv1gfD4A3JfiTF3Z3KL2kL8EwWa0wacpFj8LsBPzOG3LMYtXk5MdWsSPDmlS9CwoEZggwZP3YESnHXFsoefM6J0gheq%2FBsARR6O75%2BML6tdveuNMOGcgsUGOqUBIR8j26Lf%2BELsJFNF55gQDGHbLBE7B6zhZz1sylkBxmUsIJubfJhzk4VYjLTihxfOF0Oi9WakxMqpARUo9O1rBwco15%2FSALjXd6%2F2HGoscNWrl1t0WoBGMQ8JA5lwjVIzyLGKzFW0RIAxDjA3QWtk6RQAq0HiRTVIDJGX0Vwy6vXhFGuWLwQ3ZrViF1sLL35D5Fj3PNM%2FQP5O7CpSmM%2B0G0e5e8WD&X-Amz-Signature=1b606a4c3ca0b01a6046d8e14ea9bd5d5c1c6e0eebea4e4de7615f98a8c8fbad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3FCYKM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDN7gZA1bmO47fX1O5NZgZDC4MI1hhdOj%2FKhuT8Kx8T7QIgGpTKZrzUzKyxfaFC%2BLe28oYWREbTE%2Be2VxmhP4P2ftsq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDL116gkoTL7FNagZircA7u1VkrY3Q6EGGrMeJauMCX%2FKoBCx%2F3%2BNKPQYzp9Ld2tcyS4slhzw5q77dfgnhgThssHkT%2BU0GswSBQhJ35FLrtLFpsNVwMGbCADYkyrfUeduGuwEnsOUcnU6tRzwqwwXSjVuH%2B%2BLspTnW7STCeAgJfXWSDpp8fcoE7LcNf7MgCy2yTwtfRvERrWzHwux%2FckvHfNpZ7M3zvoBQAuZvaHKOhlSxrxdaSl%2BQNuiXj7sRI%2B332Tgn7RiK1BB%2Bpf0joYyDsFHz101JULS2mrbNIRrhJXnNHS8ZDawcnKKtqO3xim%2B%2FKDGBmxbv5%2F43lwvp8objCnCPG5uxQ1YlrcnJjdAzkoKQwrZoflRa1%2F4Uq8IKSxd0NZPUzM2F4sJztdFw2FCw3GhExI5x9ATDJ9RoA3fCTcmEm5Hdg0oxFl2kiYDFZ4ua%2BdF2ZJy1Zfrtr04LA4eQ3CALZU1EheM6m3LyH3Lkf1InTweBR%2Fl6YzWO5T%2BXy4nI5F1yjM4bwLq9mR0YS7pgtFYDmgeUbbfxYIdAb0DX%2FrLmsWfqYTHhPIVAjrPUT%2FtsYqgbnBzceV4RED4wq660e3fNqpUoJGL%2Buvww4XLDTBGiRvmsbRLz%2BGQEsiWJcz9m1eh81GSd%2FfXUzFMNCRgsUGOqUBPJnOLu65fmV3inNNzG8w4k2CayCLcdtmHEtPYIfWBN7990pVVuO3%2BweCToAoQVGcBIz2izoUABxdzfjG24nPbTmiE%2BnlqoFLTAUe5TdyV%2FujBeObN%2F72qQAX6X9UK337O5K0DbbhaLBHvvcvFIe%2B0l9rVDQsWe3yORiWGv%2FYr%2BasnheM2G5xNC0pCMH7AwlcgEW%2BdKlw4PpEIp7QHac7lS6fq88j&X-Amz-Signature=d2b5187948bfb365f8fefc62318321fc4763dd71d1275fa405a548c24a8b1904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHAHTYD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIHIkD1n70CKs4Q1gIcq5Dk7GTzPArOV3B72hGLOIQL1%2BAiEAtj3Fgl9h7mWpaaZR5GGCCcBRXwmBonAMwBioz4uTWcIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDJuVvBJ6wS0YhUnLSSrcA6l7hDTyWweYlOrfznMRyvYs%2BpoyKhynR81WQgoidR%2BD18aqOiREttoPymQmYafcjiKZMbpm5fQSiZ1ZlpQutb7mgz6W05y0s57jpBReHHvj8mU0CVnIJdhWDX%2BWMJFVbygHONwp%2FrmERBhtwT%2BWNqUUCvNPzFY7wLegixSzYHcPJ6Vve55m5hsx6w0Gta4%2F49H9efRq9VBDDKurHETGLTvCSIqD7%2BE1%2FD%2BlQWNkkaoztnIRtQAKw2UlowxnjM3rt9DZcv0MUWH3j340RVxgwykRJxZuValy%2F%2FkCqwt60BPtlPOvEZjTZ7UddOsBfgt5cYRe6eTqgiZcrCu13agv5MSYRwreMZxK%2BdrKYbrWW%2BW13jS6vcYvDJMTS9fQ2NZJYm09HY7%2BFWRJhThMMhjUjNFeBoKvsm2a0wJCrnlzXwUGh6rrQONG7r%2B3Aj5R%2Bnme%2BHqUSnNC3VSx%2FE6F2cxYbEUG1Jlue%2F%2FFLrcF747oO1TTkFFrwj1l7oAmWNsK47Ai%2FbUqgkqXPW7Pyr7B7%2BPfR4s%2BNs%2B05TGqwz6p1PY3nJbIOEMJmRwMbDLNC47WqwvoSrA%2Bqqw0U6bE3eDmuDyK%2FuB3FAoFEDSsLR2MJYNO6KcQhvMWAkERkDDxn2Q3MLeSgsUGOqUBHedNx8Cu9eO7gmd0g1zKnkLlhbkyQ%2FhtSI35qKnlrZmoVMuAQIBUtZMX7qqD1eN4oNM5EkL6pIcTDRXmMLRkqTK3%2Farrmac5EkplAB2frb08QFms2sNJh186o9supJjb1fLP9uKYfAjqlfK75s90tEj6xUXCcO%2F4nYxEmwGSeqA9%2F4qrq8TtZHQxRBI0B3QOgEigmiaPyZY0Ok9u6i4GsAzL7NYk&X-Amz-Signature=c06cac74023f78857059375cba0960b95f5aef2b32bf5f60c3bd964729671223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=78dbd66eb8224ab04bc789cb8ee961a61047cead2088645e3caf1c26e17ede9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDKFLG4%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIEiOI8UDBKH3xE2HsZjzWslyuOYjEDsIXUtQtorfd%2FqJAiEAxziByPwoISuu6mKRiGS55ImSJeeqREWbdusXYBQSvwgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDDsW1ofyZTprRwyeVSrcA4YF5ydV7rCSe9c3uWtCg9OTvIGb3yUP%2BTZEFRhYxdIlwkPqsSyPKuA7a1pX%2FJxxZ3HMcam6fQiuC3daQB2yZjXExYSmDLMsFsh%2FrbxGUBQqeoL8pDI3XlcrokEkCslwD%2BVa89o678v7xjwM6UcE4QW8hHazTkVPU0e3Wq6FEQ4PsuJF2TzcH35axg%2F1KX7nTIHmtFtQSaQTD%2BGmmujpiBvwrwBZuh01I1MwIcZG3RnaEZlVsny%2BNJEvEW9m9PsQlNPYnX8E3zdsZgCNUt4g%2FlnICdauf8uss%2BwkPkm%2BGJDBxpZMwc3xjpRtmckJJzkIo8u9dKwsSX7ug0iPmyPAJKpNJ9dzdh1BuaTtk30U39So5kzqsPMvXsk34HG0wyhlNaBIeAUe36w%2Bo2FlC73%2Flg7VuLsccGYcXwPvIzxCTlZjt8dm82496d10Zwzypo3Q27sebi%2BLZa4vCL1UMlIS9XSv4nHKQitU%2BagV77jG1uXq3JohH4B2%2Bl%2FXvTjC%2FUHAcBk4CXTInatLD513vDP3Oe%2FPq5MO2X9W47VWjY%2F%2F27TAXZsZw3OxMuvOiE6UganSugGhXK2GbdiJnHp9WtcINStQF%2FipkK56qv3lJvBE8o1qvDpXfaWMRcMa7BPGMMyTgsUGOqUBAu3jAElLN6ZYPSiTfkUi5o6kfv16BaTkMzwyC1QVZupU%2FfboaqOZjCo%2FRqg9ScCbND0jR34loAXwBfmC%2B9vg8lg53xEqJDzhxzTJ3%2FWjASrZwcmsK3UGvHn0mcuUqgwpLhUEs1qgQLY%2Fr%2FtzWn1k%2FaBiFIfJh5QnPOx3aJPYnz8818jMruvxBv6F1r4nTGDLFm2EAfpFqUu92r7RGisS6NWzGVmE&X-Amz-Signature=fe25518b68e2eaf66268696a33b4e1f2800a373ae8e967f939078e3859e829e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=f7feb1041258a269c3f15974cd2c86259bdd0907afd251285a6a5bbe154c39f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=172379b9012a47148f8b59a844cd7b53efe66555cfbca355f10e37c97b6a2dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=019773eb02be57b4f6004f52ed56e9d18ed7c89b1a14aa043552649a0c9348b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=da59584658916e0f92f268260e41b26eb571c00663a507be5d3c7f313cdc34ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXJ6KMFI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDu8M1Raw8FJ2jddHwHZrHvq%2BH4cPYQabqjncvWAYF%2B6QIgaMUNmcZvJ4nO7KZGflAFehRMezFBg1sejIP56yHe7wgq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLZrfa9MwTBXo7jL3yrcA3CTEZ0%2B7I3gzchJNUfyUDfbGy8pPeeFUSPtVPcBjQ005X5RPcenbMrPtybqTpdy43OqU5DfZIqYIR7SMRN6NeYYzSu99O%2B1qOL0BAAD5fOqi5TO8J2TAMQQ7bex%2FDKueKkVEAABYYrqQhK5OGjgPYSGBF4sddd3T1%2ByGArpuMuolOUUbDdZSgNmNKZBcinVGMhaso1wZGn%2BV0s7TkvAvZREnR98J17SuPXWQMygwh1HjidVil7SnBcqKOm%2BbsbJvR5%2F8MG2ErKFwVTalTg4PeOZ16Qcs2fuipYveBP%2FdvAsYVNX4YVLjmnZJuIwsN%2Bbt%2FXBgqbP%2Fj%2FxvsK7KpZ7U05zxFYEuYg1qQTYVwrrCdZNH2fnTc6zpigugd9V%2FAAdnRPpkNHOXUEH8wp%2FxOTQmC0aeG%2BRNA7Zfw6xfunk3FUn2V62ZuKlKukET4IRXNJTWMFbU%2FXFSg7IOBmGeDL4OpvNumIUjdGAjSedCfcOlbbes4XyJrFyxmMlsOUVQvKuRIj4%2Bdvtwc0kZtjcMeVX5%2F2TX%2FHXpCfmVyzVzwAtf1%2FQKITcYOB25NJOTUIEwzVJP5GZnOnVZrQjpLr%2B5DD5iInJzgCwMtGpVCTQhNxD1FyF0jPuKATQpPhHJFgWMMiUgsUGOqUBxp0uJeM07Lkeyl5ZH3KjkKFVMXuwYMTj9C%2FXYUIso0H8vO3rdn0Itiyb5PzgYHQrR2h0mkDKGHZFyhdkKSCEDDBFgoNippMjI79M7zcLwuTCyvlnNlw0Q1QFp6zEmvm2kwExyjBiZRie2PgN%2BCykAA%2Bbl9Gl6iD4Wcan0g4yIwKEVAbAK%2FaqzJCLAUnvl1qLI%2F6NWbtx0hQWprazbvMYWPOjcPjr&X-Amz-Signature=ae644ac52424c0c50e0dd4952215e4f3b65457615b6bc82f6bdb54ced1576db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=f2cd1c26a04b3ccd302d063444a9a6bac4c101e5ade01f71846f8590a0d530a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=3bb2573c28934a81722affc9b9840af3c20f87f59157aaf597f16f32c065b67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=019773eb02be57b4f6004f52ed56e9d18ed7c89b1a14aa043552649a0c9348b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=4a951658355d0223b2e3705b0852e0b6b7bafd4266c156ef9cd3a5f5b8b50393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=81af007aa48fffa5b26962bc70b800365654a53ac8f9f16cb3f241327d4b50ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3N24YND%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBe2QT7y3FDo2mkVd3GyBVnkKQNrM%2B1gWttWDDWTBdXdAiAddzs%2BRA0htooN0lPj1yX83IfLUfZ9CuKHuX0fvm5s1yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMzAYr2de2Ivzs%2BwE8KtwDPYYx7XDk4RQV3LXKTMrMrhseB76HX%2B2cwSeCb9Rc6mxNKdgI%2B38JPcHPp%2B588GoidFZmpIZjG02HrcCKIZFgXJkm1JBtmr90Y9%2F6huTDEbOg8QHpSiG4MAs8PuJI5VKw5CJPahV2uVabC4RpUphdSIEi6EEaHnL%2BMnweVZzUTRJa4y7CGTp%2BvL58BkwX0IJfe9W0ZNe%2FrRyTL4uiFGtu%2F7SUOb6dvjRLQW%2BpdlJLDbdaWrx68GQimmiyTk4LcDBe5nSTfkfgYDkkoDAUuIAykvoMTqnjDWrtIMBbMDw5jyp6Pzq3zaY7%2Fe1OMBH78Ydix7hVY%2BGlTqg8rxIcSNO%2BBkcASVHsMBK3FzyufrFQnUpf26lnsXl%2Fz5EyWz7zXIpePsru0uo7uwlq4mCtwg5pUh%2BtItgfDz6VTNszAYsEyO4nlFczTMDpg52Qxd9qElwiucBL%2BQlmqhWFO9gMaIAwH6OKbTQySbnJfkiCJBzCDYaoUwzIVFGDDVk%2BOeNnABniRyI%2F8v%2F0yVNKZ%2BPznZHYK%2FnkFM5KQEBXBLa8EjTpi6jaJQeGKZX%2B%2Bpni62%2F2wTWuAhTBv5C7%2F7LN8TWumLJlWv5qQIjBeXXR1iWjVFnPoQfqvVs08ook3HHUT00w7ZuCxQY6pgEGCXJRDiCzZ1TLxRF8kv8xDBRjD%2FOzymr0EhC4uXZk7x1KIHva8BeZI5OXNndCSPffvX1vjFRnOxoUnKekmYtGeju9nfHkOtWDYUwwUVJOauK%2Bg3Zvo8wbge5ACSPykLsToMlMYZZCgNta08jefO241IZN6PkySrwaoYTWPwKCCKVsb8oxqDcf0C3uGNbqVFxpuU6OAt0GZ5N5BwXvb%2F8EQA8TpP2I&X-Amz-Signature=e2d31964dab8cdc3202cad7fe789050262fe1e1feee04404698ceab95247f99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


