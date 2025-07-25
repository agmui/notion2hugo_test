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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=069ffbd44733863e4ed16450585337b5b2def02c8aaf0d82f58b76418036f441&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=91a14a84c3a3ce8da26f58ff677c988667488f2fd63e31688ac3ce50c165a019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=b1479d6a4f0a2e540872a8d24e4555bc066a51b19a293f2b7300b7c307704672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=bf6bca31a324d1f0383087c315433b1cb10cdc0ed7628d711ccd8b82d7dc15ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=dfad7ad48b20ffaae6b056b6532d81c18c56647d620121d67a6300b857fec91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=f03d4865d1903883563877d4e3835a2b461edf44ec404fa4f166061d7cb4916a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=34d61aadc460432d2dee4498f683f3423cd09bdb0a9bed0e49045638242b85ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=1a21475b5964987cf49d3ed5919b3f4fa10cc24afb1126f57a0883c6f2207330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=aa6cd43980c02e38d4f67099ab156acfe2bda9783b3d222c12ca087bad38d2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=7cbf393254d8d3dfe43e2d7ef94032546fecf0a3adb299ba618833575bc96f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=b9e6946442aa63e1f111643f72e1bc389ade8efafad9f69950bc6e68c851acda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=493f1b4c722448126f7c8bdad3cc640cc1abb4976fb91aab00a0f5d15879ed21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=b899b2426e8d7eb295495d61adfad30f7386cdde9abc44f6389ae2667f045271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VFY4IVA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDspP%2FcY%2F1Vn%2FbA2sC%2BVhLWBU4F4bSQd9hkPIz0%2F1DjYwIgLdJfyOrCSQC64AgLdLH3mDeImGF8qD7TclUhRHAc7KUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDFWHoSVmXBPQWRqXFCrcA0WWmlQMeD6rD7pOWKRvndkwW%2F6IO%2BjQDYpqCtGEw%2F%2BWO11Sy2M1bVI%2FFHOvpf4ry6p1ZC6Lgqgc%2BFbNfM7pUaVEuuMUUJ3j0uLMOmLjILdSS9WvRu9nscemcwTFJx140bFcjMvAux0XpYEqJl2JUc3j4minkkmtUtIEqAe4%2BjqVnBR%2BbSyA8m8Kht6Mi039h24cuMXMyrQmE4z8EQ9fhjViInhhU2EDF95i7UGK6nto2wlW6nfGkfWyl%2F8XGDsYWmWVyI629%2FDdYBi4RM9fcsxMyIWxVz2JrsFpnzWjKVOZyhGYqMEaVwy1NTTKNBujmKaFhBDaGD7sq5GA3KkcXxw2huCc1XCo%2FeEcwGdtA7j%2FqRQDOCJLfrKJrhbwQxoa8dRiKkmYAp%2FCIsFODWCf9VILBYUZACjnjSglPQaKNzpNY32AFHblDPjVP%2F6aEOWRa4ikpOqDtcg5PoqgbtM3E764KHy3%2BoaUTF%2FzvVOXWrHRf0TCB2UY32pQvTfVJO6EDEqz2mS3S8Io6Cwa9qgn9oZvM2TWsTNrt7b4WKDIDKgjD2H9ll8%2BV2X7umLPDLThjDc%2BEMmracqFv8nXEr05yO7UGlh2lTbJ1qBfvUhnyDCigwYedCoCagT7w%2F7nMO%2B8jsQGOqUBHE8E9k9qmWO8FU7p2g5Obdt2%2FkptQeFUFbtO%2FlHTcVfQucZffUxhQDwKOHUhpVZuVcfeXrDwCFXeLPb7UqUYGe0vX%2FEtxxqNdDsMwo0pDMX3STeBYHkpcUd7sPO2gcNwm7h9im5OQgAGV1v7OthVu5cn86FUuSEc7wmx%2F7M9Q79JxpcUyh3C2%2B7zcgYbtw1iKLezbGeqkBlq1vZ9tOskailAg5lR&X-Amz-Signature=96c434937164c9ce003c6268a84bad876886172dd741bc9098d8b36662789909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=575c30e96208c0d21170c36339d12977ff950369d7598afa7a699feebf53dee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=3f654b8826a3f297a5ee7b88bafc906c15f7dc16671d9054fdd799704ad227e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=e64212f3cf16fbd29510764f214136302134b46459958323ebab86f891b98e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=48f45551b69e2be2853bf8a12b8795a43a4344ba38c1e3cb3182ecf910badb44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=48597a72638c7bce182742d65aaa83850121d8958d1b14cc8b04b05ce77f57b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUECPY3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEXw5DcUUNbUcdYHUnPSyT8GlxfIyW5Z5mjlV3FPL23JAiEA0FY7g0mPmXVVePVXWvYY4TPUlazI7dySDjYIa57m1egq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDvH2F4mz4ZpQEWQJCrcA4tMPHDTj0ZvNeYu0oGG8LslJAsooEkW5ShF4TtfOKLwSs1Yc4PdZw93RKXTwWAlUlLXEATUwde2AwWe30KnhKPZ3hBZ6JO4bfZwemdAn7tmwkZzjgNce4eZosvFWm1gONtBHtvRIxdaenEOjUZUfCWrzCzI3sI3A%2BE%2FQIbYS0KZg0eCf6iImEiCjL2QjPZoiZXkUftLhgwkH56W7kp%2F1Ij%2Fg0OzA8XpiKCB9GBWWZAY6qlR5C9bUzRZrBnC8hETyQl3w2XRcQvd4L7AjSClFjxGeYmvttQmpYIN2ny0vuc8K9f54M4cUveVu%2FKdTZvkiwtKoJ0aak3BfBxui6F5KIb9JcJBm6r%2FJ8c7MHUmyrsRW%2B0XTWZJZ8WCHR5707COjDNOm8uwOhll%2FN8W4Qg0mhkoyrxyV2MA0d9xnm8RxOEBclSTe1whmh5maVhWs1z%2FCGIJVEccnACn%2FvKVIDYrVOeU8DlviXUAiKFUK0CDw0dNA9%2BRXkkF%2Bg32ahaNq%2BGzBRkttUoLiHjQdSY0zMeLW9vz1vsskHO9Pvv3iV8s3U4gwuAXG95Js4nULGy4XkFNJ2WS67OHhiIzDwDcGFEQ7XHM1T22U6PNRd%2Ffzs0EDGbWTxF3lDP9Yj2Vn60tML%2B8jsQGOqUBwGqrg8zoy%2Be6FuzvKgS0FZxsYY0DJ5DJ9je0cfJCHJdYgxtfJnFm%2FySs2COxIGUJHVuTPeCIYJ%2F2zz%2FlhZEAhqDw6DXu8Q542k%2BQRCxA%2BIoitFoYqFpAPidkJ8AaJCKvPkTAKeDRqmOX51k64jVLHkRZVBC5bgt7SR%2FxWruWIB95P169nR4U6PrEkwN4JZH%2BN1wPRipYLIjPbse%2BNWJm0mvoj4hd&X-Amz-Signature=e3746cfd86e09ebb5aa72b694dfedebe46ab71683e21d2f3f00719ebaf97297d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
