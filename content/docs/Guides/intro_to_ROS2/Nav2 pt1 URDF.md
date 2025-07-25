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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=8142e0ac70521560f9db3f737107537280df3199f142a96d6182e01b9713cf45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=11c38aea00a4d9e98394c20a7659ac0d88dc3eca20506553590f5016cb0e7c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=d039dfd89e1e2b40b98bebaa8468443afdd9178afb5e7e579723ad00c7791777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=5830b7ce9a9bec1599e5e2624ff45f7da625328f8fa9b577dc6edb419b32c2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=76bb93746a2e3a1bc370fac6e8391fd6c3c4a104dfbbcbaf83b8f3bef211adc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=a52b914f7553bdc5b38e2cbcbad516843721c69189b9458d92e6b3b45255f645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=8f047558e68e51c92438885c768d6744377a4e613f4c20f47351d36cb0ccfe10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=5dc8c93e90325b3d89912ed6a35df0146f2995a2595ffc962c17a5803d9ee498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=18f6bc7cfab58fe701a26ecef63d6e117f9390d6c089f9a8c8f0d0c02398f15c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=031f6e284a5c195a32e68511e7eb7cf805e9c8168916e418e861eaacb59b252b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=6519e6687206bb158c0369cff2b4429f261daec43545f733074c3912c92f7ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=6c480d434cc2d5c1e1a1e8dd040931cb2846acea226fe47d15951c8e35ed5f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=26681d4c0c5b841c3ec8ac6f6ec943bd12d2069ceaf38f926704b1d568933430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX3FVOXM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBQJejenvEt8TFY9z5S6WoCrmok3p43hqouM98llBQ9EAiEA5KDdDdlA%2FFQqSQW6bWxME1KxaiKjBsivnvGpIDnNsKEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDLFoHUkd8uZGgqNl0SrcA1g1hEZS67PukJJu1I8CeCwIjewHAp9mHUpvSmki7FmHiH1cyvdIZToClwnX%2Fufme7i1av4Ra7X8MJSlH2RdFjGuS69YRA56NZBe4fkiu%2F9hKsBKM%2F9TSG1MqLA1hgekjfjzmUzTEqRlo8kTrdIkouZcchR8BcvDSTJ5lg6kyydSP%2FrHMU9iOakZxCArln7SX8Jv62NahuxcHY4%2Bk2TxPx%2B4EfMCNwDm4dyQo3%2FB7JayXx66uB%2Fo%2FA1SbBBeeUKChUKWgTYYEVgwGoCK2wAEbslQOPl11k3zjVkj7JhUAeCS9%2BSFyf3zyUjFHgqtNiClZ%2BYMHjaAPDWHif1QYkbt6Bx2Nh0UxXla%2BwEUPscRdQxZkNe3p8C4ZKVMK%2BdPn5J0lZs3QEXfFh6q2v6TwfXWd6xrWN1hOnKik8JWiiBDd2wu4Uza%2FMprjxCi5tdhgVV3eFKhiByP3YZR5WJKMau%2Fxi41dhhREfupb0ONPlcIUcbXKTZ8mhjhp8BuXb6FbvzarpcdA80cWr2JPgDhwG%2BFGFvw%2FirW9XrVX1FUMWQdKWuCM%2BueMCL8yU32ewlVnf2ZrxSEkYU2RxRN3OZdvJnGldgeVPH3Q%2FCrW%2FZKT0Lys%2BKhTHVFrCA2%2BKMxFcX9MISNjcQGOqUB2HzPtPNAvIO7ReCrfDpXIkPzZLgkCyGj1HAkcDkhdgmIaFk%2BGgK8NPyFwNTtEjvPNoCa3Rtrvk1la0BegqJJn3iwVuNCqG7Yl1R3Qzr5eSTRwfL2X7Em3EGyHebk%2Bki%2BHguw3xlY2SupfxKguLT%2BdGCD5dftBEhRdkhUT%2Bd3RWQEhpg%2BOQJeZazgCzv74TkbaYMXNTObQQsQm0BgtCkjd1B0613S&X-Amz-Signature=00b9662f0c3f2108a3901388de5a3714f70ea08ec7ae7182a53b72d3279a5628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=3710bd278b1ca7f2f8677fca9781f53f5e679375f36932fabb9164846c148fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=0e1fe5fb75a8c416d939aca567290ced06a5c69cf616e1577df8d87156cd91e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=0c5ef0760fc798b85cc300f95ba1c4049a11e1038c4deb75c938844aedb4c454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=5a5123c490b19c46ceda5b032420406f1aea8d476c838ae54eff9357806635b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=2272b0f49854d72b4026c04c20f09c15eaf8cffcd307fcfba195ea8a27a4e910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDEOX536%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBAJw9DuavHE8pqwSeYWLz1Y1obfmT2MxK5rWcLBnGxKAiEAybPDdQ%2BMSZ7nRbFEzIqJWh6496sR7rTtOmnkOAtp8yEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDAdlGvPKQwmsGeAqyrcA5g4YqZ%2BsqubdgpOrulPu9Wq3IvUPDcga9VjeYZ3v25u5fmFSI1oGJmCMn%2FA024bskp0cEYawm0Bj3vlcMYysWEWj5oMo6IqKAutWosiSzKyO3c5E8yfktNDYtjTlexkT5j7gnTNbAax3aLp10nPUIAi%2Bm6OYgQ%2FHQ8dHZ5pED%2BA%2Batw7c5IoJedziyK%2BMT8OGDnE2Q3JegZpyAhkUa2g8IW0wYuZEeqc9VoOJxCHJxYYINo8%2FSp6g1RVW9wt9J8VMoTax27%2BqmkixWoloLkLaekrmRBqQCb5H912aC0v4frXIJ5AT4O%2FZ8CVaZ6wsugvUz7Pz%2Fn8FGkmbxVYhuP%2FaoQ3xScsJpXRQqPLsxTl7%2F%2FBKvpe78N0HocWemMR0OpP8xQd3CD7SGf2I7vh%2FjgiNF%2BirvdeZrFi6joPsU2yXyaeEQzNMffsaXKsMg70tpn%2Bqvg6Lbqx0sgLG8ujJO1ZCeB5KdfSLC7wl8ZucjTb%2BY18N7JHL2b%2BNrEhb%2FvRS0vh%2FLPCZla29uHnBO%2FplKVuzd5L3PCgKTR8KY%2BWI4JO7ACtxba6aS9xrJw8vesFw7bC5N5AH04b7tM2SJZwA1uHFrfBqkDr4a1TGnuBj%2BJ1s4jYgJj6N4lnIc8piIaMJKNjcQGOqUBujqFnTnLQnn%2Bnsr2Qcm7YMESsS6aM5XW7rsz8Nkg3hGVMQNN414OsaZdTtm0468YuO%2FcX%2B73mJmPU0kCTPCA43IqnVLss7OWJA6%2B7%2Faz1r5LwE%2BU9EDXaczyJFwDrP4kWVUo%2BeC7PF9R2mVqFT1XzWW3Ek%2FNYOlOlWfRkjRmd%2BlYCaW0FEQRG9lmX1Wa%2FjucK5xkPthSViJANOlh47OyYqjFs7jN&X-Amz-Signature=da35b6b0d21586eb865afcb7a198a82f61053d1f9a5e161000418b8a9398ae4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
