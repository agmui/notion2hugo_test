---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=f7ed7f3e2da52109868d10c908db370690bc48e278a169b8a139b993903a8386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=234f833e62cd047a5e5257a03504e09ab392ab7972244c278b7dc4c99aca583b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=cb0e12adcac00c57afbee2f0fa65d8df3da397f5da10ae412a2fb0c65e046ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=eb54531e5c1048b3cbf6017a85fcaa0e0acd85ad48ea13baf66459c7e74656ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=f7b3e3a8bc922028dfc57c61477edd08c47a41c0e752c4450d57e6e508dedfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=4c1e58ff48a0345447ca48aa1ef568f62299bb0c9ab1382c250d43214482d12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=084e0ed3efba0ea3b0c290ecd5fb8219eabb7d121757bc53ee2b78fc7b03c17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=2407758450c2b154a0b0d007f10579b0f2aca35a2f524fba88d774382a2e1c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=a02804543095d0bb02cd642b21d58132ec7ba0cbe13d0fd995e24207ad36a277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=39d1027b18c7f5ccb0d4fb96598577ba7635ccfbc43198708e6afd3f590c23de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=66eff573984833de60565d07d679d880bc6caf373e230638e03a0c723ff76ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=1b324d3ae5ce63faf12f16df5a6ee46c858d3ce64e96a52de5ed34d79727a638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=5bc4b75aea99906117d5700b2fc47f4899d5971415e21a5c0e0a1c740c4a76e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N5VRTI2%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDTcdQPedz7PtWtoV9Rf31Lw7AuEq1ZBsIJtw5NCg4niAIgbAzwm25ubM%2BkrTCXqcLeTTWN3lC9EhXFWDZk0wIYSCoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn0FIIIsWnhyYfxWyrcA4C6fsjMgq5VL1PwuhQZ7rNirN8AAOSCvJHuwRjVweus%2F5%2BpsUIAu%2Bd7h3u5kR4qCfAmXEhabN%2BUdKPtGARPDbjuD0W6eE%2BoQiiByqwg8ilhFadzPCGbwMHoI2XMyeAnnBV9qabgafS5w9Tl3zcaMMNBCO%2BEOF0199d%2FSTjeFAhEvym6YQGVONPMnsM3CQAPjlKlz1ORV5jyo6MFVF%2BPfC1uzbDTdWcUgGvBFKWhSOXHugg%2FaKuzFfOILmIRWo3dM3Uaq%2FuZqWyWBT3H73PfCzcp1zSRBAG3B5Uwhux%2FyuYb1ewCLhDV0ZGgQeAOrVe71nPbBU9sQGq1O3ftzz2ueIUjFhQqk%2F30vPeic4umw3SPnY9EqY7yx8P1R2EGACVwvB%2FshOcY%2B1%2BnYQlCdEqha%2Bg7SMetFp8RJbvS%2Bv8WpaN8SscwlJR2igIOPZxq0V%2B4BKoxA2ELHTM0rmwesEgjGeNMMMC%2FNecjO3LgGjueW6Bvc79LAxlrWAaOsVSYZMOisxGL8H91wrMga9PWf%2F7N0OIFdgT7MnTrWExGOudCXJ207pPFdQqtxk1wyJHcOYgCHpAsrQpXD8ooOvWMOLIYAxdAsUz3EW7rUzSVLjqiO%2B054j3x903D0WxPZZCSMOCDosQGOqUBg1wq3KjUxV8lp40TQa%2Bp3KNYM%2FtmjZaBqkWFu1OUell5yjsG2HSC6cz3vUG3xhJTgXH6Fusk28uZnoIHh4bonbHU1z5EH7Fz7sHKAAVml1MklL5dpLETNdkQUm3fcZqySeNIpcxoL2d4VRieJfRmOiRHlhsUi3RVjVw3w%2FVIBAQLv5vriCJBSm%2FhV13okdXX0DjN%2BOy6bEBo%2B6yfhJilZDgzQpSa&X-Amz-Signature=665975f76a00cee72f5d4469fce343f139686dfb41246db24e021e67765977e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=e637d8317aff479b745980ad0cffda76fd29db0338a03697bc85e0e2068007bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=d15075366a9c7ea71d9de37465fad1879758068e5ee6e403d51f052b3f4471bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=a7d053ad3abdc80596968c7cbd4c82d165863d83af9a077c1701adc428fe3d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=5419992568ecc1c593b100f8ead3a605049f5b1157f4ca84ca72f054bcec275d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=de861c9df1b97ee8164693b0d24998d6f698612dcdeed53187ee774955423fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FAIZF7M%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCICKBqB0dIx8NG9sRNHYLvQVv%2Fm5XQfxosBW3CyaNdofPAiEAlcyXDBRXVqitLIAhPuzdsQCwKgDmilofn8gxQGFdNWkqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH8a4x%2Fuwv%2FxpvLwOSrcA8TWP%2BK2qRrQ9cQzgqDoqN%2B5yce9t5tfwuY3V%2FNwaXiJadJdLAYrIuDuwh8r30nIflOnUi2LsCdvGPLFFaoH6cFvm9x3Ht9NOhAVPaKW6Dq00z%2BnDHoeT16pq8RBT3b%2B0O8rPgdMlYY2D5GAmpREC88t3nSrRGm%2B8GS5mDYrpxPCzS3v%2BYeUjxwWMTMtKAmjJvjuj8oyR13YQsUXnC9Gu3IVnfHJLvl5NpwldHpfCHuNrlVoFqCoS4KV%2F8rQMepaz6GzfQBJ6%2FOPsYGax3LtwMvkN16KbKPJGWstl95eQsmiEPK0vO7ImT1kEB83ZDy7J%2Bg0i86MO32st7TFn2n4UXlQ5Vg3Qej0g9Fk%2Fu%2Fj9jcx7uMPFUnsxoHfCEu1q5QSxA1460cFr25l5rcJ%2FpiPn1aYWI1ktwiIQ6kjENEp5lVTulAvQLU97WUh4%2B7PQu3f9d73iwVDDtkiq7C2KVMj6U5lN8hrS9p0Z1wwFuehIYBfno4wsuRZh9QlMokPES%2F7zl9eS62OH6D8EAGhXUS8X9iM7ttjICrH6Q9IkQeucCMDgiexZbh%2FM3Fbaw%2FWgHBWdehkyQj5x40RFx5C2KkSkc1JGK7T31wmIWeHry0bkD%2BIoVTKoE03RlqqT0CHMOiCosQGOqUBfUBumZNHzM8wGEfckutbZAu2XgDcxjnKiU6k%2FHay0cooHNtCEHaCoSue5yfSReAuDbVZwCPpnbvWqKEmUQPlLEB8MLj84yofRFNnGYkYG9mCpH9r4b8vKVX9nXLOcCW13frSVj6dVzV66H%2FRyWKYnJiyz%2BxFdwLIaq8XvhGU3iZ87HweFdVQP4pBAScIrRYRj%2BeW4q7A%2Fnpu%2FOdye7W9Fwe%2BK66S&X-Amz-Signature=369d6ce05d96c49e995d01661ef3913bf51505a18fc7b9a9e6ff7bd22beb8370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
