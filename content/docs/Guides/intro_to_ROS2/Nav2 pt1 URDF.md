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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=f77d8035b80d27b0df402a4fb826f16b749661d01241725e3e9b68a9b8c9273b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=7ab2ad87dba2405a00c871f3deac798dfb06c7da86287097e6cd5df4510e9b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=2a29854f9c828290a7a8a83df2bcdbb61ee2c10a518f778daa8321d099229aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=ae8f8ae682a51a75387df2d9cb7ee4c61bea751ee5f0cfe86f2334487b92e31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=138ace84542559abac13743ec09cb8adf7b28a5dab52312a78fda872ce0c75d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=82c249e41842c9d41d27dcf70c21e31a64ac2aac47f2d59419b66b675b4af64d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=7224d45778b5e12b0dfc892bcea00a0bb9de296cf2cc895a5e8fbf6ba6c588f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=f713f4d2791d3399ec9e239671f587ea3e09e0ec773973638077db3a740bc302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=b9e9bb6eaebb14e95ea155a39b1b2e07ad25f118e76dd7c56a1b6fb3846319f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=ba27fc65f4ec22c3cc6f03f7f18a2067fc3757367872a7436f88ddae4e61123f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=e77a3cd115557bf5bea2ccea29e8bc32646a562bfec07b98a53d6c89e891525c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=a6fc3e897656c0fa7397cb84bd750427c39422a9cc35d834743a0fcac4b9c6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=8153367948eb3a429a93741133df6dc238b5bf6d6717cd3f47d115733714470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJZ4YJRQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIEMidyz5EGGrDpMiC0Kr9B9MgvxTriE5nKK0ZNl26%2FMVAiAm3j6zb%2F4TgazhahDQdrfCFo%2BQkOfS3m6IvwR3V9ijWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMpQdlEHCPF%2BXJL3HRKtwD%2BjeyDAQoV%2FIbeVUIownJ6qO9pcRmGZhWoIPY82poGEqX7txcnbjrdPGTcMGgO2XVAI%2FK5umkddh6mH%2BmP1Re%2FL%2BOgwMqMgPtZlhDw%2FYLHd%2B0g854%2FCo2LUafgGronrs51LfvjqP3J23YTxz3Hz6Fzz5G5Y13PTGDgdR8i7MeuboSuOmDkI3l4Z4E58MpDMmeE8EcYss%2FMhXQetY6wqQln%2FVS7pPrxwwOSYpqGcBkFErwktZ%2FgbhpPorADHOUaNJ3QT76IQcXAiWoG6mO6VbEYSfDx7BaaUW2vWRqVkLXWvJ3HXYYOXyONomSweUO8nJ76AQpSF8Zoj%2FRyIpnSJGBx4jBCok5xNlV4lT1QxIRw2oa5j5zalGPNsULefKbu%2B4WygyZJDxPLaX0Xb22mzxtsszr4Ny%2F4fX7sNWLTRA22V1v3q6CCKkGgK0Ok%2FLCi%2BT382OnFZEcUYqgdVypssoVpjHAOpIU9Rus7WYBvDHqxK87bO7ORsgW%2FMtRfWfT7NC3HWoqQ2RX07H92luglUZFDXHpXgY3w9Hhiv8XtzE1Gc7TuX3Y58LwZt6jz51Wo%2FDgj8k4FWGxVF6nv8qUbtuS2cA1BwBOLxpYvRbPjpozvNIXUjcutd2Tu9YRsRYw%2F9OLxAY6pgEIgpxBWxdxYkYy1LfIGE2GNQRYZTg1bWUsbSYflp7E2QLicLyWRIKhYLua%2FUdcTbtPlzwpuXFOLCrZUWfm302uQjtxVKoINnD%2FdvMc8RJ7GbbeaVOjPktmog%2FQEYDzsbbW6Mx%2BmGsoB9so%2B7bTyjqi45hn8HcZkJys63FPoX3Z65fwwADRpFOQu3%2B2bp9%2FHOE%2FLSMurVKdH8M5KYTP13pZQpKgpPpX&X-Amz-Signature=aae0e28a533c7f56d2dc583f5988bd29bbcd855e33bf32abd04bf0728c043db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=f401a26f8721741fafe1a0aa3e4c0a831bc812833ffbcb5ee7dc4cb842d9eed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=176a84176de2ed23fffd4a07d863dcb4342d731ef4a03bf1c3628ae53f7f36ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=cee8c83600a01b93986bede1b9913db2029e948d6873f614bd450ad41de2054f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=dd80356abb9f1e861af3935239ac4a092a8f50c6e65893b571bc8640a174d5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=26777d44cd002c710debc0dc3774cfe6d1ee97bcd2ac9ea980e67e3298ce61a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DUIT4T%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCZn1PBEuDP3vsh2h6euTEs%2FAAZCgAgXyeh4%2BhnLEwhoQIgPiVZUlxNKPA71IrlyzAiXmwArERUMDPy2EknxoelnDkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLP9wmgY%2BA81bfU9HyrcA6RBVL%2FfHMTa%2FOe3DnEE9W%2BvTPogfvskcDaVhu6z9QuPjFMzClQv8jmaJcGjEo3kthVvkQ%2BLAnW3MKvEq0qIrhgPIfFQbDcW9xDUrBp8BhidUOgsi61R%2FicCYrC6OmIVng9atID%2Flmi6M8smYd5Qq60T9poEbWXwFFgBBgVF7MPAnlR3xPS2FMWzgsCiAnj1J2pBursPr5yTFIzxQoox81S9ztbAEgQHO3ek0RFh9W7H9EQ1oOgdH%2B61ubQn3ZHK%2BAzWwr2MOCcmE9JyZDZCc22zCd4a1aYHHkob6tJNbBUfE%2BrL9GlAa5N2S5aCcEBA3P1Hv8O9hN%2FW9i3XAz99OS11eu%2FuIx0oQN8IJkTlzxu2hhyRniwPTgo%2Fq5qpJz0DOL8ria4Y%2F%2FlRATSBKhjz48nzZ2ModzlMNXSxyl7wShjNh%2F1AwQWVHCAAyHWv9js7GBASR5inHwLaQzItL4DUeS8bpqSuId02LJZWDAwfDzi1%2BJaa2aqynpy0T2h0KD83TZ5nkpt9HLPznJi%2FopB%2FCGc%2FQT6sOTv1opYBB%2BUMkG3AGFwlbKq4ACO42h7gUamhe3kcQ4ti2gX5bDsEyRA1axVgnBJCWnr2REHwDEIRKKmh%2F9vTJDSRtOxIggAgMP%2FTi8QGOqUBJWBZYamn2P4%2FeIejqhCKbcFDdmT4EHbDMoG4luRE4TVT3UKBLcoXqMGPKiI7RfQZqciJy8e2Vn9e8uM4Iwy7VVbBbtKk7Q9SgSWkAbSAh7Cyj825IDT8JdDDL%2FCTp3RQuwhwGcyWn2NP3St4cOMrkuDTHX1BVTNe1fybDCSw%2Fg3PiFfQ7iz95gre8BERFDBJGWo8AJy6ghYB71cUFyoCnjgBP4wJ&X-Amz-Signature=6590a525595023f9c3f6d066f5fc5c8a9b1716ca9c652bc8f40fc3eae7c1b49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
