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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=2d333be2d6b998f1bb14415dddf3a508e517761ce9ece6676a2a6dd005c1b247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=ed0d7544ab593c3a00ff8904a12b621f61e28e248810fc44eef170f53409821a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=b92609a7829cb922b9761cdd795fb0be01294e5cfc2b21822eb17e89c8e390b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=0578ab80a06ad21015c1ecd9e0b98f18776259d0cab669932559a1ea29bb070c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=a3844de4be971d271d951dbd9642271fa3432ce81dfc0e71e0445907b53c5594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=6f84cb3b420ad7b142a1d6ca35787e76e793b1d8ea61f2b6c16d58c608ade4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=608037a3135aa6325570afb050fed7df37e6fa2deb6a178d3703f696e418ca22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=62c6c0379a3af670798a36a8efe8eed4a49ed238a410bec8e34ca83cb2660cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=0df8b4ca2492bfbf253174e26ba1c92d2b37ed332ddd66f9d8bcc86435ffe4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=214592dab5edba29b56050722b3baa9cd306022f938600d127e643a1ce29fe79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMHPYBP%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIBm1MYClzhR3SkUWGPFNAWxdwVBlwLtzQFZHErD8AcfOAiBpyjL1cFeN6P4UaWdxmlDOD2r0tZqhN6StlFh%2F%2FpGQpir%2FAwgGEAAaDDYzNzQyMzE4MzgwNSIMgStnDswb0%2BptzynvKtwDc3MGfhllaVLweBy%2FGUFVPFOW8tdnltznf5lQ7ZNhWqUhMjGcZkgJJ%2B%2FNEPeBByX0ciJ8Lpx3sh%2Fsu3AhihDV75kmYjtIJK%2FG3WxnErMGCr6iCtdIX2wfHvJ0eoNjLqK%2BlWwEWD%2FdnxYxXQfi1K6PZE%2FRJaCcyo9MCj9XyvGVIJYVTWJLbGO5EITEaDnPwE0tYly69N9esprDannk1emkqrzLFavXWW1Jd6A7rI%2B3yB3hoYcfjBEOMH9XTqd25bNos4QZCKtfA0g%2Bolxr8mqVkeUnsYcSgJC%2F%2BXnDntGcHDV2LouFnL2vUHZp36LIbZpFep472wgFj4whJLKZaz4wb%2BQMDEuDfq1iJjbKlVY2T6T50kEdeHOHcC7Llt2%2FVq6DZLQFsnlJ7oMHqhPN%2F5i5s3i%2BU3OhjlvkpkFoiT6z8FgN93TMz6HVOXrvzo%2BWIYdI2tpBK3H%2FAHwwaKlPS0hs2m5MmDHV%2Fs97Lg%2F%2F1wCHrV0ArBEgZKnukc3x0UV6PDNDRu7G8CmnhJ6TxIlIrI5ueqTQy1QEsUt78sE46XbWpu1A3AWWMrRzcXigXcWJfAzOl%2BPiOCV%2FXEzMCNBhZyLVH78Xn%2BxtyX5NTOXvsUgnnas32WZnPXFG9sPoFzEwu9TgygY6pgHfOP2jvJEHzA0FlH%2FuRT%2B%2FcspedsrhVyX4jBboN%2Bgrjea9g%2Bujqo2mCQMPNpe9X%2FqsxsQ4ZCBI5UbN24jhk53lrzvBcUowZHC%2BT4LNCCm1SrJKD1V2A4%2BYdUxezfcZ9Ovh3ox%2FdeSL9YacWMqqZV%2BMVmHQLc%2BUyoiHt9zu4ksRGhVAJ%2FZR2zFA%2BHserg7Hyc9TPGdJoLTXgnStB9LRbqEf7MYagsfj&X-Amz-Signature=534c8d184123b21e962663dfe4c556cb8140dfb578a6ced890161552d7ebc272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG2VFHWW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHnroj9t2ZNpnBqaXUOU3fBnPjYhVUSu7wmuB7UH%2BA3wAiEAv%2B69CrBVNtXAAqqRdWdfjsoA3UWURI5JjIhHGngEIGQq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDHq4Vl7m6RkVml1VaCrcA1adLGR9CgbTqyg56l1cMXUTtAyz1xTQ0O1HNSzIPNAhfIet7FXmO4wvM6jYIgPiQyPnVIEVMO7zUA8HUHZVy%2BR%2Fm7gCj%2F6KaoYmAwTSld6dZrR2N7x7X%2F1LfwkUP6ftdPcdQViY1SeXxczsMtWxZIUL0qxvL5qiGGDskchIWaObXNQveWRvYD%2BPsZn1KKyv3AgnjfXHbR9VaCmTHLRaK0V6Fs6NqZUNAj0eQjg4UYUwzznvN7Rvar0%2Brh5wrW1RJcJ1GlXU7gIv8dLCPqEG8NOppnf8MrJQKwCMdZNxDyQrEY6l08ks00fCOuEptX1SWFgym9ffuvTmxBisEbGmBxFHQUrhE%2FurZiqoz4%2FznabpEdWww%2Br%2BwHJr48MJhL7tsukkBihs2hhrcfYV20ckS8gFZOkS5pJj6LqbqbOdmxr0Cs%2BGwTJPaD4l3yaxD2aLKXDxQZLPqV%2Bggr8vLgjnkKnVPTl8d0v0AnZeXUW%2BPYjVjkLOVBeU72ygMe5ZKOFrDYb3rsFPyHChdIuFHOecuftkZUG9jny7hqTOkw%2FZ0E5ZCXR%2BcOkfTykrfyePGOm6%2BQuOqqN5qqeq%2F%2BnS4DLIH9Ggdikztd9OZQqGQNQJVIUc5mHGzq%2F%2BBKA9Gc%2BdMPPL4MoGOqUBp5cXXWGm1F7ELGoOdT5d4HMZJ36B%2Fif9%2F%2BXRg6X7SY31Fdny9IZJUx73qtel2TMCtfoUyT07Zxh6z7iAchFwPV5%2Fvn9tmES5XZuT6PQGKKYBleMZWclkx5WiZO9hSjx7zd7zvzc2bqAfen0ZEfwLSBr2u0MwYKpJTCRUDTsmPnl6RJTHTf4ahL9OrMbbmhSSYCeQ943VGTfVu0jdYkXdmuByr8Zd&X-Amz-Signature=c2c2257d9b2e92c9a7f1a165764f014d876c447c20febc8e12dde83d32dae815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7NVBFV%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIH1mQC%2BFrw3u3nhjOPKsSkgfbNklWS%2FZZgpVV23Q1KPYAiEAvDp1AwKqDIdQ4KjXl7mwnBMTei0G%2BHw52mYrMfOVy6wq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDBquJzqghjN7aXTnZircA3MiHemlzWzaDRHg47sUQlN8dgwslUZEsipTXsDOBc4V2GGYAri6TD5qOXHgCRExUpqKPDRgRXtLMZPQMju5CyeS59J7US8r6Sv48gHToBOilA%2Bhf4sXr%2BGbRRfpAAlHGWkP7xye9b%2BGRMrPe4W7mA%2Bqi8GVLsb49PMGy7SyZ%2B6dtec5eRBHVjnnYdCaayw2bz7AOJQI11shp0%2FNR1gTMWGoPCoenza%2BCwSk%2BPGIY9PaE7Fr5Rxu7aNKXb4%2B0IedVeyvknAxhcMzQgF6cUOtxPujVF%2BFJDl%2BJ2raNqG%2FxUVCy8VCNd8TxeGHz150SqVbiodhOTicU4t2tvKd8%2B417BsUsR4WhQTCykwq3r213aNH1iuCj6bJCOYsISU2x%2FfT0Dtsu9yOK7DzdvxPBkE%2Fz0KWFtXaUnycJTxpUDjFtH9t1maDaGjmvcBEyxq8kmIUkkGtRPx6wCQgH3X7tDqJ1RvgQgJVzqy3D1%2FLE6j%2FzqrzNSIDTx8VOb56cBJ0aLmDYG10zLS%2F4lf1WV2%2BNSHyJj%2FvNMtCQs0gXi8OV0kY07XCRKj2LB5AN%2FTVOasbtFzt%2B3jklJD0RN5%2Fnl96vXbN2u67q1kwqz7fjbfrXALYKEnJBwkRUBJCoYsHVPKCMPPM4MoGOqUBKlizdhzSa5FWXdAsVbGy42ZN%2FzGmge6Optk0IDSoEyXfYS4w%2F1sDhp5uZj1qmQShHYH4%2BMmY7Ky3D6ACiRZzDndUFL5C7rcuaLqeq349kQYN91djWMMt9RGBUuOLk6OgJmJUobyBXwVDKcviR9I3820eusbv1uM6mBDU1PQzfWZHW9Iv%2FMSUkhcmPDfLFs7MPESjnUatyV1XwGRS6lpJmh%2Bxakge&X-Amz-Signature=0de2bafc89a53311f99f7034001466fec5d7ef60020bfacbb8c26f2ace4f2459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=bcf55015f37ceb0d2058831635793c7aaab763ae1685222a0616bcc44e5aa0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHIDKOGW%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIArg%2FeXZwfXxBEkTpJWZEaIrSPNCqFmCopV%2F9HfQlhwLAiBMjflukBMcv3LTde75tMFSD5vtSeRmLYrSbtFKkLixXir%2FAwgFEAAaDDYzNzQyMzE4MzgwNSIMYmwTSMARhaqUt7jdKtwDuAFCQ3r6OuKFqf%2FyKSIqkJSF%2FLkwbXv6M7UdHvJ2IDlLQIo0wcK77vS548RtZxVOVhcTdAe7LN247I6PVkPxFHP2HiIff08XUN%2FFOzexCZoWPx2Y3lVAqc6mqg8zN1ug7GTSii8w7yGSMrN0JGmk0dDDY7bfhsQLfxLKk0Ba1iGek2dijI%2FZRpBMBLiWxdq%2BsiG9SQdk0y00Cs%2B4ZDHnIal6vR%2Fhvy%2B0MbQRaTzg856E3ArPcgHYjBCPly52gjKpk8s%2BVg44%2FcFlGhpWpI7FucJ15Sdg7hHoS4h4abI%2FZNDRLaVGfEy9%2B5dgtC2lzm7%2BFtD5WVijgTqCQ6K%2B02kX9SZ%2BP557aGxsUWbooENTmMBY1f0Y11FQNwL%2FHkdCziQ2ltx2yqYl05gsDyCcRwSs273NNVLMq21Bc0Yj7L8t%2FwXwS5aKYDY5ZF9wIphA8IPWiHxvmJiMOcrR88AdfLk56NdepezaXnagJ1NJ8JxUuOduESTnVr3xS6YtUJs0irluludO9HqZZz%2B8wTqqm9fKjv%2F%2FS%2Bo98XXsFb8jCgQsS0v6J35fM%2BUjkDEnzMHtqs4y%2F2Eiz0IgWU0ypEuFVU1gTBcRCngOPnCcPll75VOOON2LzjSvgU4cR7Mst%2B4w5sbgygY6pgG4OB7S7lNwmhf%2BqS4mM6CNR%2FH3a9Z6WetUa4Q%2BacypdM3ebcfzTK6nILxWoDQkxSd1dYOB8vdHJd0%2Fkzym7KGswQY9DBgpuz1sQtE0v%2FgO%2FdMMvh325ZtCZ2QbM2wmtNMB2C6xccduZUxp6NL6OBiHmDdyGVITxc7olGRimSvgkP0rcydEzES%2FoDeHrUumLKAt0x%2FYNoPVbzH8aTaRbCQkPZ%2FrvC3E&X-Amz-Signature=6df888fbc989184d3e9202294398a0554007165432215632d515fa5febd407b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=e6ad84b379eb26d9111a4a734f4fd676d6a6130c3d42880d9c1b318ccae862df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6L655ME%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCsVvCMXoBRBUDBtAcXd8TgKdhlx%2FAGHIZwlFHk%2FuyZvQIhAOsS311XzjtVUlE7UghEbDadDKRs0UjxkmbfOZHEHtEdKv8DCAYQABoMNjM3NDIzMTgzODA1Igx5W8kK%2BF2hPuWxl78q3ANwOBVs%2BGoAQwsi2KCiMwxNqSGSbeySgfdfFCRgQgtEsh4gYilW8I8hJh4RnMTFVx5QpFhFMGXp%2F9GVmP6aHh0Kxt8jzZQurpzVAbjarC4ItEAaeJYGaNoFejfpVyFXAmWSkCOlCTtFa0O7Riz%2B%2FZnUXQhCyJMP%2FQj8FbLwRCpGXrqA0DYYfh6BG9tth0sZpl5r3r2Q7LRN5LS1jDEfDZYR6Q6SfIYzjydLVrST%2F3516a5pz1eZJ%2FdqE7TY1MklVTTuQ7eCK14QF8QtCsySnKg5mZ%2FzIWctyFZ%2BYqVugb9dypZGnIcHQr33%2FwxRlJM9awMdZJ9gzM5Qpc4QfF%2FuGT8yPm77Jy76JooVUTEGCarO5Z3TPwo5Ka%2Fe7dEwlER5VF4S6VHrvAc04Gk1iDinV0UHaFg6UjyjA20q7T6neKXTDsoEWxdY2XhMVQtCSkhkQCeaJviBm27Xi%2B8TWpNk%2BxC%2FBiVnl3ae81ZYuzhbVw6A1Mqxpqn6As2cxDqSVKiUJkk%2F3Mui3XXulvbk8X92MkSSXTA23g%2FqtTm3t%2BMIeNIvkROsnj5GVMpABUIHZNIddDugzvCawhfXtPwP8gMv9hoo1GwiWlldSpHvMGeBc%2FVRss5gp25sTy03sCmSjjCJ0uDKBjqkARU5UzQfTdLWvRVuwNS%2FBQz9bZNkb6oONaS%2F4fDolWfXNTNq%2FzeqhlFUcoY22uainyozBT9A5OOoVG72MMOBGM2dZaMzSU%2Fkv%2Ft6V2bSN30GTQ8zr%2FWfLh2itMw0KmPs5MvvpV6SBUiYa9bt4Y6DXX3w6BoJS3jMK2xfXlgfdWChFPjE5%2BdrId%2BsocRx2DW8gdfO6ewSrr80ffWMSVds7z9fO5HA&X-Amz-Signature=9452a747bddc9b57b38d98279dce585c69d63ec1f319bd613e54bebebfd957dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=c92df3c71f89c56adeaf7b7a97330060a3842ae566b34e97b7a7a219d1410a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7NEBA4%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDIAAbWRtujyr%2FUumEToV744KdUhUCkrgg39rST250tDAIgbZJGFo0PX%2FQfRVhH5yKKmSFNik4GG%2FWiPz7gLOw%2BEWgq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDOBncEhmZ9zsROGILCrcA5YLKHprCdPjShdYTIf9uMdRuhhy7eQIHwk8QgWz02qc1loCXgkL%2Bqb8w8pfY84ulpmc5afP%2BtdrzbxZPjU4k8QchE4xP6qk2%2BPk8LwucKk9MDsBnzS%2F1dEgGYsG1KNq9jPdR%2BzxAvLqniUgdPpYjzZKGup8dHb1FKpkXRxgF9ifZTgxM%2BeL7la0fOHWE2Q5pLM336kqqrvHD4gyQNcI1H8UvIesF%2B2pczDGVEiH2LwR0qFJ1RJt1NP5k%2BFzgXaxCYY1TojdHXSPLw6S6po2b5L1CmLbUvyPEGIZTABCDJy4IE0amjYYRr%2FwuZwyINVGefU%2Biy2dQbtaqdDU14WA1V0nLbYZQfYthyKcEkw9c6Oqnqke6o9RY90CG2jciQFhGpyE6G6ZbK862TrpI%2F0kWmIYze2hB4gJCHUkgdInSBeow%2FrM1GFiPYOzLyKd2fhseF8xFTnyBrBJhJ3WX3r5lTbh0QnUm%2BafkJcl2BiaH0wTluCLrvYpCgWQQCV20ThwIhSPX6sJU1T4sewNCAbGPEeNqyp9v4UBqcEVrTsVOLSkTODx0pUV1Z%2Bpu%2F0V2f7bUUU6utnjW47YVt%2FVKhNLTd1PDUv4Tyc%2FbJ%2B9kZJDAlJn2qqAXft%2BMVyfGKYXMLys4coGOqUBGBhrat4OeeuIzrDuBFG2%2BjYP3ditzQZU8TIp0RvvUjaU2mYUHIAScxSL%2F4rwK3W6%2FuB9uSz8vsd7PlqFT1%2FB9lRKgUcjKvZ2zenvcmv%2BVrHyeZYMjP5OYBkfZS7%2B1pToMzxXbpxudWVrTgvOiupBWPjr%2BewfgmOpUNf3qXLvGR%2BbtI8cOmSHC9KFUVykmFY1HLNT5K2YWF7APE9T0z3o%2FFQxBunC&X-Amz-Signature=936449bb4501130bf96d17246a89df8f0cb8a30fa44cf90f4f0ccc466167a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=a93dd78e14ae7ddcccd8a0ad9151b293755ca7f39db38d99299db61cab5ef8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOOO6E6%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCQb57xo4B2Qv2kzLKPVklY%2BBbUsGdaX1fqZLQq9dbX9gIhAIK5usBkgOWMrdpusZHmKdglXWwxv0wVVp%2F8dMmsf8GpKv8DCAUQABoMNjM3NDIzMTgzODA1Igza8MPS6olB%2BFQPqisq3AO0ZSYFeS1ktDNQkje3dhAGNLicXoiSwjKQz1QnaeObtz3z1wz3FTPeq0%2F3NHpzsfMRf%2FE16D5PEzeNxkmYlSudmoODiirTWejhUA474%2FRcLatzDClCTKepmequsB9ige4Irq%2BZnGv71tCH0VsjwaiA3%2BdesQ4kNC8j0oJ1v8OfhQgMblp4R1IpUBfEfKMAL%2BKTF6842hUOiAQHG%2BlG5awVsMrzO%2F7TOS5aVUfUR4uNDzg7ebEqFjgDT2u52J03angm6%2FQPJTpFVxTG13KGrIPfwUYUVu0HJP%2BWI4%2FiImkgCspuQz6%2Fudq9H7x%2BifLeJ4Y%2BdlvKMAYUjNKH5nXz0ARB72Nc4sdZbuXQ6rnRaXdg5UHliTrKT1MTti9AFt%2F9B0LmBSpVEKIXIy%2BGH54kQn5gS4xds39ctyjzyjGZbLOAfIhQsX8BTe5%2FVh8XWpJCO%2Fl06yKkkUW3DxsCO72GSwUMkTby%2FKfUWz5gsdxR3lBJThODrKVbRWO8KRfqyNKenD7cDM8Y9wnfFn%2FC1SJSb09UUiu77RaIQZEAkgIAPkewZEaft8MwNJ5BhHs1sq0813RoKlmo%2BCXA76yHpLmvfm1tl0MPDu6MqHY572uotn2mj5%2FpyGupHmlM5RBoSzDmzeDKBjqkAbCADraWjfk6hbexjLdo01tqDtcQWbzZRo4FWW2Gk2OIGUc4%2B%2BvlUzOB9P0ZtkqzFwvJ2xvGteLu6HBZKXbD8%2BuWn7BGf51RmN0oMDKDnvhnLMORIMyP7XT05kU0Pv054qeaS9A3PRT66Fxwa%2BgHWnkCDXE7LOFRS85%2B1501%2BSSeDu27ka3t3cGjbqltazpSNro%2FbEhBxGnNhDKs9dE8dEBDqMn9&X-Amz-Signature=516397b42ab5130f38ee0af681605381959ba93a29291083418fff2d4995f97c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=a58b8a9d891f9ae31fee43d906065c416bc4428af7d21d602b920a2d7218522e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGBVY24Z%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIDELIkQktyj%2BkcbhDgi3ASE2SX%2BoqzdeJI0XGdyYyyjiAiBi7lpaedz09GXBFx%2F0X%2B3d8Sz%2Fq4ChleW3SeeIftGBoyr%2FAwgHEAAaDDYzNzQyMzE4MzgwNSIMZtqimpDd9%2ByjdqueKtwDBftO8miV%2FU9SbPdtnayEmRuIaxX4Z48lDGSvvF1OVlT4%2FxbBh%2Fpin79TN8UipBCFLQOoGBHm%2BfeG%2F2qDt%2Fnd%2FdapcizMx3HhJyF8bcFbk39Q4eP%2Fh4XHIVh46MSIGdUINWv5E0zM1kJfLv2xpF2jnQg6wNtochBt%2FrhQV6OMrl2DxZufizQX1%2FKNhjZZGvEebRIOf7YMurSDVbKKuQT5MMj%2BGtW3jwoGwBkgVMLrZXsdcPMhoSlfQr%2F5oiUkr2HBl8aD4ueCqJrdlZxMI3FYAXMdjRcvsHsn4QF0BU%2F%2BZzbR3q79wO8b8OzI5bYkhUeEQmjJHn43NTiacXVstWcABQArPs6vKF3KoPhqd%2BtkI2T5exgBuyDGlXg70pGxF6%2F2v6k619YlQrv40iI8ejxNeugGoR8gQb7kWZm3A1oPBMRV39VjW9Mfg1H5l2nOTL%2BJ%2BbhR3fOeKf6pSfgX2yuLYWoaOdr%2BM4ziJRY7uS0Bt6wjySn%2FDiOqxd3YWnCWRMPHvAL9Umy1KlOICUdInQ99CxjuxHgKVRET2rd98kr3dzmDkzS0ZxN%2FOtkScLpBHhmlp5KCL9DBntddBZjpkLqCtdfvPzTRDSmpgl2lnuzCuBtmiwKBKmvpyrtzMyUw8%2B%2FgygY6pgECWcid2XHYWkbzPGanrxVPTdNTozlegvV5f9kjUX3geP4%2BrvxC1ZMO63ZzxQKz2cmTzXhrsnZ%2BpnEPoFzJ0TImQrSviaERbBJ%2FxKX1K93fDfLI7bQacZV0c9QRgrs%2BgsFEq9ye%2BJUJnzAJbpaS%2F0CsDZPy0HIkyI8Uu5yDRx81FDRTraOtboNjRVkAmicSDmHrOLsZ0vwc0Hkz2Qn08xHbAWbOB52f&X-Amz-Signature=8d6180c9e7f20e218a341ed724689f12638a3636eaa3272c5b8ab7e7964c08d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWCOJD7%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIBPkJNqZE%2BZdtmuzitgZ7WjL0HIV2fUOLmmPj%2FiHlG10AiEAldV8oEt81wwfUX%2FriQoi7OINt0ydcrOFA6MFzlkKGasq%2FwMICBAAGgw2Mzc0MjMxODM4MDUiDKvHDvugBxm4Y%2FWFMyrcA5eBpC2wb7XIv64pqAKB%2FFzQf55oaBGKHtKNVW6yo3Pv28825rO5859jmCOpCdyxBGKNPS7UJ5RaTqjFzOn%2BH53l%2FA6fdgioQjmiTlHLmSpxR58cx3FSqq1csVxFUiV8NG7NiZ8b5kY4kY6y9nAq7d6835QNeR42fURDyVmlfabJ6W%2FJtgdOfaLalA4oPXd%2BErDGCRh8FkgpJZzKIRs5bIwxnPSiQkwkhS%2F1m7hu%2F8OgWvLmihkesuHsUQ5qTfvYVufdq59VJoKmNtXs2QJw2UbZE0puXJ1yzMbQWKVwbF0da7FpngJYvjdvFeAQN82D84wwIdtW%2FUHjxX8fqtSN6eJOfh%2Fib7lpnOMElFyJOxFi5dIhuKhngPY2xRRv0gEAurobaSms5OZ7Gbc7kEWLSCShqlEr%2BSsSSD1ksUOGiPVbGYgLjeH8Rn0dg8ASDGVoXrMdUY787RGIPQlSnd2Hajx893kIrwjBLbm00Y6fvHTKxC%2FuXrCotEC4l6TKbRq0srSUq99AHp%2FqyKC7NtN4tXqqyNxIfkFi3t0w2lD31yXzB69Ps05GVvrHb%2BplNpDM5dmiaXPeLvOyzTpwH4GZWZDF3fbsZJIckDictJ5K9gUhWX8zIf4ytjOoJLUPMJ2e4coGOqUBNbwUrOqjz1FEKGd7NYWEBxoGpOj52ao0U9KLhktQEmg5cjSPwMTr9xEEfYkpAi8EnOkw%2BLGUmnlRbUlRf7U22GFyNSa5NPBc3SjNOFsYi5LDzoft4Y47AE7hHEYEE7lvF2YbWQ1bz9W2cyGk4dUoGSVHv6g1pJ%2FLrUJxCeq6928sEK%2FiBjcjvTCgMKqkCAoboKK4lXpQMZeNi8hnDTGsBaM7mGRh&X-Amz-Signature=a92d2c2fae1800dfb51aee7baf1970dc835a6eb222c947a7139a82577ec0043f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CK4ME2V%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChDN2XOltZNo99%2F4%2F1a3wlnuT9J4Kz58oFTyZ8%2BrqiiQIgOT74VOAgeAwM3ajw432dXVvXDfscGplR1VbU%2BQmL5Dsq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDNNgtSAQT5RcO3xZcSrcA1o1LAtJzWF7BYTYQBxhsmzBJQVizcaU2uINCLcpJKdlp8Nbh8pAchsLjvqP7eRqyfdzXw5dcw%2BhfMB5MKnNCvCH6y9b90uLjcT4ZZGsblM1lCgmBHnclZIBLkCJwQtcEV4g2F1JXqvqr6IjoQstZQBbNH6z8INzyN4uwavS1bsbbXi9xAdxV61oqaRkB72OXIpocYTLIMk0VPSnaK2g810cuzYje%2F9r0p%2B9qj1O6Rkgt8NHCaEjaa%2FFOaCCzzz9LCCVOPg5FKacj7YbpAbq67ii75GbNmTTbKZD6O9TE8%2Ff%2FOV%2FBNzeXLbhvGxtwxQlkMHw%2Bj1t3f0jfVqm9xA0cg7HZxRbxSYHM1oCp%2F0Db8OjWtAlEM19D1IMROsCM6F3axX2K%2BYCDJpmrPhXpPLfr4dMyjQh1mE0gEE5oU6rDvZu9cD8uT56dx1JXN4GXH%2BpX7P36cB2hck7usQdXGblh%2FssbQgnagsr2Uy3XkbSgkqBgMLOtzxPRy2T%2FmWkfTRMnxM8ko%2BR%2Fg1fFnk4Cbd7SHECz1FnlW%2FnsfVl%2FpIiC7KRa9enaXDDUL6BkLnEnc9kxJhQkDejm6Xhe26eqTaHz5OY0fmJGKq6vcCMVslDb20Se6Bryhnz7NbqWqUMMPnP4MoGOqUB%2Fe2O0CmUUDqr2Hr9PE8As5VAuosI8QSxTayaQZqaAAf5m0G83XFuTkFpFbjWHXkUhi8ucwJmsSHfukGFqgtnyfWOJTIxpAhwUs%2FmrB4aLQu83jnoJTBW5dh0oKn6i%2FV4llbs%2F%2F%2FAaUMRe9wUz2wbOrs4WuwxOeIQR44KryXRz0wAN7O9e3zTc26jS3XejGecTvTa%2BqTPpTrbAhFY8Z7d9qvN6UJ8&X-Amz-Signature=cc891d45ef10aa2666591cac011b4b8eb97c0900b89e922b7f8d9a4548b0bbcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=438a7a400bea1d3729956eae12c27a373b336fbe1b8c92680409aaf59f05bc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QUD53VJ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDdyBeLDevSk8Q67DmGB0d7C4lBhrxEVhXcxNROcHi4hAIgAe9AXvLZG15lA7yJXO%2Bh1w2%2FblcSIBSxBoOLCxWO83cq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDPygmeCXGb3JwtpwUSrcA5I8QRV%2FjhmhX6rsI9JmxGaJzzqjIPuhPUoxZSLx4g1GJioF57zz2gO3VnH6g0mxMZ7Z4dOBCQ6B88SFvz2O%2F4lI6yFbqYZl8APOXLGgnKUTf18zjZHOex7%2BHpIK3vTGzYbDZNJq7SUvl52qKxRZqoGasUDmlrfattmbPoxnbMKb9Qhbj2Yd8vfuV%2FDMzzLZzuE1JdMTSo14i7UOgsyLkaBULQyLpeaDtzxhJVuAfOwgbadw1r87cI57oO8ZtJ%2FHexzc6y8auVVZXjH6tFVDL92cvjdyZHPbZ1mzyfOCXzFxUH53PELhBrA9oKHNW3WHy6o1uxLhwSCk9O2KxE4SBMHJ3rp0KxuHcH%2Fp9JxTUWoLijl2UqOE%2B0sTWOgfUh0x5hdTeqS43LwlEMxJ83qqaHd7uuh7RFstAdYTC79Ia2kqySuX88qRNzf8o54LAk2Vhp4HTUk1ufRKF5902jQkP%2BcW%2Bh7mQtK3eiXlCBf0s7VV6OJ6TmUHs040x5pWqOGCaIVknxt3ZdPXAt3B5mn9u7HUc5Z3lWQMDJ42FQcvczRAFo3Mek4u6mh7YGJN6Zhl0cZfaskxSASsM%2FMoDL3EoOV3bb2iFjSumNhJetz%2FGPPpozoJe2wWwXCkUSe2MJzG4MoGOqUBHWsfBFKXhVW6Lojx2XbPGV6Xhy4DC8O%2FzDpXa9SHddvwgTSAmfZSKokdCOkaPL2seFULKeZURENMiGEq1%2BOn2sfbiGMqfz9LQaJQEBgy5X9poiOABLlMvJw8QQ2HNJJMRwRynJayq1i5ANBgRehxVDpceGpl84tW9bOT9R1h%2BYnEgawkAn1bYTWjahFpDESEM7i%2BkXmbckxGtFH2wN3OE3r%2Bc%2BqO&X-Amz-Signature=212544c09fae48e536b1c3f5d08a6ea1043e64faf019a5ec33b9042f35b4bd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=d26a830421ef77a31a0cd432e372474ebad46f63bffeb2b8881c46f14a6cc66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=038cae08743f64aaf5d57fd86d9271803d4144c6a6293a0e2b3ec00fbb2a50b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=e16e97f1b94b16f3b7f27fa08fdbbc603a0df31fbd22fc6e550bfd91c2a89f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=26ef692ff31f0d54470ba29d2800111494378a5460a26269d15a6f93a44d14cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE72UOV3%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDAsUutDM7ZUFccJZYHR1aDSVrFMsng5axg%2FhGKd6Z0tQIgCo3%2FdRKHPq4TM11N%2FAozTKvKSajd9uailOXAxOTDr3gq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDOU7WKIt2AXnFxyByircA43ZfYUHoGDX7wMwBD%2FCbXk3h7TyrK0qzEnhLZvqbPXfvsqFOZ9VnhI44St829lLda6IzvHR9ZEX1LEDhxkDvEyPCHyTkn7%2F%2FCaI7PfjEFavtajk%2FfQ6J2i3wMpJZ1rt%2Fjnsyqei3eEEJVCsF%2B2VK1ifTzzge2WhpIEyGZcW3bMUtCHipYsIx%2BdxBjOPfXuHKC2IU7N8ZKrtnRQ%2FFArvfg%2FxLpgfc6HBJfds4lStbyiLO3d3t5aVipVn81UtkzopPsTwTP9mGwBg%2BmsVgtYnznhls1Qhc%2FjPr55OgDPN16aqPrXLJ1PlXrF%2FJKz4lalglki2Gd56ln%2BlV0w5wNmDgcYGKtsGb52d%2FX%2F6HaJfHq9lVvKBQIrg6E%2BaQ9vyBD9fuKiy%2BJRs4u1f9Akwz6sH1sey%2F%2BExDSu1wB1%2B%2FSZ0MuaRgd%2BYUfUeV0APSxNI8mxnmMKXesHtmRdzBG3kreaQlLqTQoQANs82pyUNEWXEpBjNslz1TvUfuGPdDK5I6FNYjpRFRrbBTLbw7J055hpuHiTWUBiVennW08gLNw5I%2BlIuZvrdknQJwvRgKITlS0DyrJmUUThljDGFpR6D%2FPP5ZyhHp2hjIyCdgTe3gnOntZeAbGfDxXnTIKzEQKv2MOTP4MoGOqUBF4iIcWkmhmPooHETOY81%2FgXAx3yGAg4%2BKcT75%2FSH6wmRV0I%2BRf8eqnXv1cl1PhX1INGLYDP9tcYvnwFC8JfmAZHsya4uTu4oMFcAVjn10gzHKY5rUCzOxZSByTNpCLOhbwBmvWnPhhrDAw1%2Bxd90JB1Sg73dqbzZl4reCkb4h5PHGq%2F0kFDPjk9s1NprQM%2FR7YrPLumY0aiHd%2FYfkcbrbgAQn1l1&X-Amz-Signature=60d582f4e3509eb0241eb60e40bf77cbf3bb5b8137f93567d6745939a7e6aa54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=4bf313e78318ac28f0f8c0f4b36d3bc0ac2cda8f04ea73354e359fac0693054c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=319963f657a0368465b74eb7e2c22a251ed1910287268e5cc4002e333a5d341c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=e16e97f1b94b16f3b7f27fa08fdbbc603a0df31fbd22fc6e550bfd91c2a89f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=f9a49e5d95f8ba02cd5b0344c0fc0b7f3a021580f473bb341ab6ed106165c79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=ab2031baa7b01630c3e3be2e51669b74d2d9064040fb9936b0eeb53d82c1ee2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K2TGSJZ%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIF7iSv3ueNH%2FleOsCOeFZmRzGZ%2Ffu8xyWbVeAf0W4qMLAiA6zre71sJmoTi4tGPq6PgxnrfEpBlWdhawjRpoB6al%2FCr%2FAwgLEAAaDDYzNzQyMzE4MzgwNSIMKI79dpSdNQKYGiscKtwD9if%2B9MPstb3Gwvq%2BeaaKjdSiy4RWXPa58ujeJYwXiyF%2BkK324IDUj%2FcMGe5JkOlWEvTVZ0g8DMXNmeAAzLqzhIbtvZpTI6%2FFm1IfVAPqz%2B88FC4JbHvTrQ0gWN3ufK2fTlAjPzdPpgYI91j6EpXdfUgFSPr2S2E7gb%2FEScBaLWAk2USc0quraq4vl8qFSdhXRs%2B9Z74QFzdZXVqrVSQ4eYOtOMm66Kv8w5WXGm2iVKQ5nRZXbMpN0FDXLPXh%2F9KMv0UhPZNVb2OeymaWCLsCH2Dw5%2FWt25TK8aqO6GxnScnGKf47dYBffCwapHzmOl1OcjHnkWhdbqcD%2F0mn9Xog6AsIvkpsU%2Bimqj%2FanBwkNDXboM%2BZw%2BDtJ4JSks8DogameFaF%2Bu3zKpCi7V9vbApIiO5dzNYDrArz5QHZWYBP0AwZOnUuBKo4O%2FuLas%2FVf2UN72yIUnHOdT4eQN26LfM%2FmcbNq5Y1YOzagoNlM9ngSduLpEXmCEW%2B6vfiq2a1O%2B9JtVf%2B4X1t5f5R7dhcJ6Qf%2BL8RGDRZeaNtnKva86QMok8AYKBuXihOibMnIHmf%2B0RvSbiFDMjHGMQr%2B9z0EDoaP1SVWNQdD8gV9QwSE3YLnuEDfBMaIV9xmr3iz%2FMwmeThygY6pgExfRYyNQUn%2FbPY8USJrE5%2BfCu%2FuxnpCrEXJppCKaqN3aehvKGYWqHQkS8fBIslwi64EBr0h%2BQNIMJCUPpRIj7BWwg5%2B%2Bj09yHgOmCLfEgenlCUeBmEKNWtE2BwVs1%2BNz6oaN7B2QaLbbCpHQq3QkjRWvDePSc8KRfV1%2FVRFWHZszcHuM%2BHhgfVgm0aIn1LyiWu%2FI%2FA0YJSsnycYODOakHxcEnaAtZa&X-Amz-Signature=cf73123dc058ea9245b1fb013c2ee682eaed73f63141663688d8ad1df7c7f43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


