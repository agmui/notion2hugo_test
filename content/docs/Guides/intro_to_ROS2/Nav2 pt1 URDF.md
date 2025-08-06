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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=9c25e9f7dafbda7660058c7a9e714473ee00284ca93b710cf513ed02448cd7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=a76e63fbb3d0b355c00b6f2f8e4a0aefcb76577d79d41583bbd6f9877e776a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=e04fe94c979bc5a76125baca1dd260e923a2a790b9dee7ab0debe9759c4f8351&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=591d312749466edb69edddbf2d353125eb9fb66708a29fee5f39e18c13ba374a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=320252da6b1c587e6e79a876939e6f2c3daf2a5ab1b8d2057e085796063d2cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=b29c2887c2c0bf51314abaec8654f4fdd1c3ae7e6d0e5766a8077c699fcd5add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=ec33e53bd15f82b34bd0d24ae96df39e291a645ca61bcac7b0f98dad7c9380f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=9af0c7eb204ab788213eee0a1d012362d7b25544599d2436c690bf6804b7f8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=fc97c1f1c5694f1e8c368e16dcb3aac56074b67c8818796a3c586c07f12cd6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=5f283229839a0e7499383c3cdc76a016164f841992825a2938ec1e7f35a88db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MOWOIXG%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCID6RVn6vEmwjXahyvOV6exvHsASbOohI5lkwkYnj2FHuAiEAoaSIj%2F84fLJ9BMcBIPfXvSOPPxoAv7RrzBESOsVB9IgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2OolAboPyAiQr0hCrcAxxyOK%2BV7H0t61vZHkO2MuI%2FtMR5Docy7MTRUWUjIG5tg%2F%2ByFJGRuNDUla%2BoA4U%2FZh25lOlne6WqWkwC8o8xlRoNHDb21WoINw0mnjeVbI5NRIklEob2J444qVkKhbj6jO4haZq%2FaHN9M3qMx7MkLpOaDXoPmLneeZx7yevQUyBVwpe7%2BU120LGsOP%2BdWrhTYLKoSBuOxHcuK6afCzdeA8EG7GWlOFElm1c5vsSzJf3tmd1kEtqfSZSzv62mnorlpmU%2BcQ9JLCP4WkbWEQL%2Bw29i1b7itzvuSt1QcCydr3pAGXps4YVwARKAWlJvzZ73wCFFzgXhlsyGSCSAp5xdquIZZ3eH4yFn4HsI0NKHIzxVrr5PNTFPUCB%2BHXwy6loBAnP0E1%2BxdJ5hKzHS54T8k48e5BYu5IqoOYlYiJR87eeCKgsNPykqtwrQ2WDO8rXpiAy3br4QcKQzf%2F0ON6OFoG8pI9WJ8ikMaX6DDnC0yxXUbBQall0XRcK7NnXa95Ufy%2F1QpjpWeuGVQMrCWpNMVea1D%2BZKzSxKVb4dpEjDtpjhxSeqIqwtWhh7nh2SxQB6acz0A7%2FZz%2B4g4YBZV8YBM9zEQ6ztxyDEHvZ7pF6Ozt%2Fwh5bDdYYRXP6MQli8MJizz8QGOqUB98p65w8NyAY%2FK662b%2BuMSANNAtQYl8L6o7%2F0L9DgZELf8dKD1z5do8gzaHXyhdql139BchqkuoKe%2FDS6XBWGbpswjjcgm3YX3H4TeyXIknTSDoWRsMBSqnqogn2%2Bl6PA0aP8pAR98lir5BKcj5UH494%2B55lgmkCaNJWnVb5%2BqnNKD8iG60hoMcAOqYre%2Fj1VcdP0HMr0YWFat2xzeiUEZ0Ze%2FrKn&X-Amz-Signature=687d477726f0d0ac1c614bfd026d23ebdcce545484ecd17568a6f5de6df8d8b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIW3DA4J%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIFkNLzwPyVqRUqHIywIBwQ68pABniTHUAlVKR%2BNHLm14AiEA9nvrdEmeupyzEzlmP10VRsuULzMalX3NDCZwM3pybwkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZxTIxZJ8wQaf8POyrcA8j%2BANXwQ2dXJnFcQT4CkTDUM59fM43Qd3E%2B%2FN2W1wpDWuhk3Km1qA39yWr9cjNKH6FcVrNWYBjz1vAeWZQwvomI3iVabS3rGxeN%2FwTCqSUn%2BNybQpb5S0duF9tu3CQIJDPX7%2FFdq14A5QYn1DHNAT8EYdpZ9B7Ppd0Ny3NHxBnyA%2BglTYNajPs0nH1aqt1pzJ80YFr4NCFJbFTHD3ce%2BnbSSZwUHAMnz5vJ9IAn3Yqja4D20Vy9%2FXXspi5RJdI%2Bs6xMERA4XW2pMX%2Bwpylx9ijNTJ1UTU6%2F8OELuDcFhOkRzapVmCrO4wDWa49jdPBtWlLA1XnmRYLizEtDdvVl0ifWohgySWAEbelgNIutfdNQAqCrNY7xhA0mKZGrUFDHeGteLb6cg5KqE4chmtK7CCMo1ctOrXQfRCpkzL4Kq3bfakTWVTaTd1zDANK%2BCsfQARvRdX%2BlEUvoq83cOsg3HzSWVRIPMvzHYaAZb1ffsl5OhzEk3%2Bl%2FAw%2FO5Wv78venT%2B3sZZxwnidCd91Ny0wkB2PRPh0tRNpneUUNDfQCGxzRl0jzuRNtGIidhzVEGvVHquuSr%2FTgHuvU3Z6mzlnyIXIS8F%2BNC4r%2F64eE8Hl4HUQATaU1vzGS6d94zkYAMLazz8QGOqUBPMLIY%2BDuzqoY5h9MEJ%2BkwveLcF%2F2roZuiYaluRPU9KNQT8J6drWo3iWCfZuOQiBR%2B5wxaid3U6JzQlyL87IStb82JCqOg7l9u3u0O2w0Gsp9Ziu%2BSb1epvrTkCqV7RMdvYYATihFsh4YOlQAVwDVBhGtPdvThXKt0Bt%2BWD7NWE1uK5eJUQRoPwSbjQNuQJ7%2Fqb%2FXhPxP6LYBD8yPQlVlCYISBn%2B%2F&X-Amz-Signature=027024ee21831e258ce87aec8eae48a087b6c745ee9a233b37571e8a1c82f8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KMOCDXQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDCaeo986%2Fjm4Lvh7MGyIGug9NZK%2FVj4KvBvznbUUWDUAiBwhgEsOw69BbXrpXZ%2FvCpUfwRZh0etekDw6HTwljOU%2FCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd9HhoTglvYO%2Fqz0SKtwDQPzWoT2Aif9gCYHbuxrCuQ%2Bn8Ig%2FI83oUysSWVTNM%2Bta%2FbjRTYNQ0OmiQlIHKXS6QrIUD%2BIZjmMnAaNFhfNXUGuRqpeJXszLk%2Fi46BbSKZqPMe1cIfcj0HD5MqoWzVt%2B1xpIWfEtimQI6UYDQpmey5HUouo4whS9rZNwG3FQpirZ0tdWtkU6iSpDDojsVSuhlJYVUnlV1B4YiRXJw6OhNUjHj%2FKB8DDQKFOnnZHPVzvipwjK2Zip06FJmYKpZr6we%2BFEZ60Sl01vvnguQW2YJ9wf5dZ9bMG08SFqDa%2FqKqNUQn%2BRIRuYpr9CqhdlO6PT1JTMeFfMqL%2FsoIdDcNvSj1S4Y2pvCSxsAbpC7VyT%2FHhoy%2FZKqlWzlP5DXVEMwbcMuZFOgm5pfSJQ6fc%2BThr72qtgVdZcAUZDJSN%2FHFvTen70pf9uD9hYbtwv1swxpqF62jWnljVHai2v5uTaLoLBo7mWoOtJTeOBvBgOE%2F1qXDKF6nWIwFSXh7XLS48r%2Ff%2FO%2BedCI2fdWh8B%2B3fQyTLWEQ9zz89qbG%2F7JXr8YzsSxLe9THXWHJdoMCHAAPdw%2B9g%2ByPIkXfgZiGfzzweDftzNDH9sTdmBZn0MC2b2lZCqjUN7Ikas2y2bPzX%2FDCIwl7PPxAY6pgHsjlld2jA98rI6IhfTeTvuJNJCGChU9DhaYkWXuXfs22kzN%2Buknysytawb0O%2Ffc4so7OlcOqkTJje8GPEFyjHH30t2z6H72WzQmJBMK4vcBzKQ7A%2Bet9r3L1LbXl4mmYtbMbO8bzOgnIDE6DOYRE26LqcAi0SJQSVY51FZcmNZ8FSEJf86Y3x34CyxbUPG5ZLZGjiPBIZQUhAbf%2FsNxaZk0DnVE6wY&X-Amz-Signature=a5bed0fccce6108364c2dc9b3da7db11ab402fc831c39f11fee35a20b9b13622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=2da85cbbcf3c6d7d920fb5e58083e8feda802aeb54210e1d64c0880ccef1ec9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHCWRE7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIEVxV6G8uZ1yzWiyYLk12ZkLDk6s7ZjpF3P2WmyKpbgyAiEArsv1BcivnHq3ZY%2FQqWN6bjjMrzs9fCYvAU%2FVle7MawEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzhDDCDM9UcctTIUyrcAyLLK1kX9xNfbm1aygDArXYWH74mKxq3HJK79zNXKNfuo%2FtkB1ld67DswYkPk9KjqIkMB8BMsy6xcR1HpBr5cfHJnba8xDLpMQFgfc7fLD1kZwxnDV4kf%2BE8w2QPFsYwxgSlJkkuriAUDowkumKBNqAChI%2Fx%2FM3JIU5p%2BGsVMTTT5Zt2JRxZUsJg%2BYlaZjYwkIX54dYrd6B6FTBDkiDhPeJyRPYzQbu895GJq6E9RRQrGIq3lfjl8IKAFAWVPr7Ax8nGcuzYnnfEvLkOcDqqy58idhEQ1zbYL%2BopDFgCGdQBeDl2G9qiuiN5fp7wiiv7MrYvQf2AvlbhQS1v%2F24nN9d6dgnEtmbSuNm0joplVzi%2FGpXce9T3dg7aUCK5qMJoZZYM17MedZRhr45fP0gre6Kq2U07p0mXQyDWW85ibnT7BS%2F3m1gLGcZpgbR8zs6F2A%2FBSeGCVbAFfW%2F3y0hWFKGfM4UFTK%2F5ZlOfzwJjQZCpa5WscEhBA5fnVOyoYnvrTBC9x9SHZxVil7QAerlJ38AiGKQ9t2rLuJ%2FlWatfserb724MFqfGW4z2JATi7VUaZuerhzyem6p4fjwWNi5FCMZGY0ddKC6kk3%2F2SZ7yFHUir1qXUDcjq9ImAlVJMPezz8QGOqUBE0mEzP0%2F1dhE%2FPz53RVfkkhFDzr1lhau%2FuTtJpZfEck96fOuncoyHS18wvKKfMsTMSEi%2FTPmV%2FFKtzkdNTZXxXW%2Br2ydTA4l4s9bciuAbZ%2FiIoq5NNAlXFfly8lqbRd6ibc6TjPZvZGbUE77j81u%2BUz3vs4A6oZZUGFUnpHNMGQ2FzOEuAFD%2FJ22%2Bao0JQg6z0nf1KiUNbjoz%2FaddmWrYe6lnSFP&X-Amz-Signature=2bc367f42935649f8f25d3a0898da9be01d2867296395394ef86445cb950c5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=a108dc29c3f42f9b45f3cdf4fb4ca2f75fd3ea628a6dd8362df0c558412fb9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HFDD6Q%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDtnq8Gd54xansu2bqfhCsd%2BC7ivsZpeJy67O4SB41YHQIgZ7Rej1tiv9mz7FACp15mJcNffTs66%2F7y7v71FkzCUTMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYvlGGIlJ1D3HQ2sircA50SN2O1TfsDNuQE%2BpCr4tEVG%2BvOoexFDmO%2B70Dt9mGiSXfn6k%2FXZBpLcr2LAXIz2rDA2J%2FJP8k7j1E6NQ6ZnG5aukzl%2BaqZX%2F6Wk5Tdeki1QdH%2FQyDSWDAd%2FnYSCGKC1bXiEGIcz5bVzyAEddd9twm10WzvRkp6NVWLTX7x5hgLKSTdnRVy7qewnWH6ilGx9VDrWDxpOkpIF1QlpHMBdk5SG%2FkpcCdLu7x8zNOXliCtp1xuYnwyo0hCJFm70EQXL5gBSbStudWMLyBj3Dv2WFY34nB3Tpnk4W%2Fj1Ywz0XJ%2BuYA0A8a2BjJeFARCe8pT2ptX%2F8w1bABdrVIm4ZOjClqEOBtWjRyJsOmD44NNUU3StNoDBBxthHRPCEGlltg4RrmR71KjbvzpsPBQHRd65erX%2BDuK25sZyTQXw67%2BS7ZsKJb1MBjbkmBGh0%2FE%2Fhp2yZ0n59YEYvFtoSiV7ZyKyEPbIWyfeczInOI7aKX4IG%2Fgz472MrikLJ5u%2F2Z%2FkLZZdOhHl0is%2F29jYErmiJrPb2v0Kx3R8Rszj2wtUecdWLiDfoFtfqi7g45YEFFBTSDDj6a5E39H2MYPR5M2Qf6PQjikRWZPFdO0wBuFMqCJvyusWtg3ZsKELBecp7SpMK6zz8QGOqUBr8AjY6YXA%2FYgeBQ1B2SAY8G29md%2Bo5a5Bk%2FgbrhfeJMznLd3Tiw67aiGvbWF7ltvcWkzcihQCcduUQYVIQ2nYSYZfhCTw4jhjfSoIqvZYag1R7v94dlkl1dltukvPv4ZHBqJ58X2oIQdfZCSQV02y5o5a1Kf9p335IK58eLR7%2Bfyn2AMz%2Fef8HbKoqwtOTneCgUTlI7LKil8hjDUR4KlPatQ7q90&X-Amz-Signature=f479fc065206e7245cf683226e3baa5c18f60da7cdbac959915c4340c346597b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=75a742df722e9970284ad43eb8679bb1907d4539292d73aef1fad06f368667cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K2AHYAW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIH7VscLfU7JPi7o7amF2pVb4BfgczSZNbgzI9%2FvbCG4kAiAVuuL26rky8IDR2sR7r%2Fx%2FsBMzjeNKBjOVeN5xpgkv%2BSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM61F4zlhKaF3NTdwsKtwDZx73pG65%2FUctXgr5DMXG%2FghWF2xxp9zqDdq25aWM8p9HMZpFxBPT6wgBgja%2B5M8qjdW2iK%2FxxGm0JbyzEW2C7RHfld9xDDLasmGelKr2gHwjMjoqLVXjf72Irerow0RLSNwDeohuEhhloS2Enp%2F6TKFNQisMvKLjs3HLqpkqJmqh0zEmafUfi%2BRfdIxk5B65roA1YD4pXQmLyCqB%2F7k3f%2BvVeGptiN5nyl%2BSE63ujYcffvFa0qms9ViXjvqnFuwAgarY205qOGmhojtqobTgpxCeBoxm%2FMBbzPPXiFS215snS9K76BnTPkcsfnUz8Sj4fS1rQPl2jDoWrr%2FGFLFex%2Fo75BhIiLBDyqB89sASnIseqxv46r%2BaZk0cS4E8jFHLR68wnhzhpojktGaXeIX%2F9o%2FHKpVI%2FMaKNkzaMKGRZexzTXGPadAIa%2FQv6mpqKdFhcd5%2FKie7doeh%2F4nhvTXPznsmMsDfcGeUxMJEXei7wEYRICF%2FkdWxT6GtpdzxTiahUnLJiHsiwYrWITfszL5cgGTDQxaf0YaoT2ssCs8hfS61wGSeIwxu0441mk%2FEXetsfKwMLhPFYwnSI4o0Y%2B2GyqJTWfyM0i1LwCuVozUTU9TWIA4g5Z8xOm5HbsIwhrTPxAY6pgFujs1ma9PJ3BIGsx5PoH%2BsNSsSYIAzQ0v7myDCPtxM4QEBRQJXVm5Puim2y2A1OHNtJ3sfE06B17uY0Eo0FwTdtISD4eEkBEDCmolOt6QAu6bN%2FIhUV4ouEG8R3rqE%2F8D4uL%2FuxDr4y8BEEDDDh%2F64c%2F9UBSGY5J9ndfqQ0ixR6BDV9rRSq7tcjDuqi3faCIvI0Dhhxpm8NkPjS3Q1p%2Bv4uBqCGxeg&X-Amz-Signature=1b3d70bcf256f5c8a4e4080a610a75db6625272d20418326224abfdc2954abfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=de24b05e81908132c01ccbd250f3f2fb892d2d64d1a7b29824266e07eacb16e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S25QXX2B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBPOVg%2Bk8x6j2w92NG5C2FaHvRr%2BoThsiHboYp2dne9gAiEAmbTX5teE2lILW13V3NuL2qg39u1KiTlUY9fiDQnfqp8qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXFUzskWLjUItG%2BXCrcAwxsNIOLj2qmmDqIz2xRG0kiRjmL8B24t6PmSfB1MomCmFnszV4l97uGx%2Fi45CffCENhLLGDxGnYA%2F3S144RGB6crvMeXid%2BUcGK5xguk6QUQVr28fUgPXNmQeK%2FAZSDyNcjv66u3Jf3nnL0irkKCYRIEp4TO7DsnLc%2B8RwpBYavlYGbgLfNRsQ8q4Wbne9LkGsB2qIhylFyifZfAL74vOuwh3Hy0AJpiL%2BIK%2FYx7r5Jv2vIHMMc%2FNKifE2fvYCMfM6U8qTjmC%2B14jVZJ90zNhtw9QXC7l6fuO02mT40%2BIfZP94KbwUuG3DCLJGXTrMkq9FTDEUmAGy6DGiioeVmpF%2BH2mEMLEiYkjEfkSOHPWMXP8t8e27TSqD%2BtA%2Bmq7H4buLIst99lzvyPsU2tJ1ORwANTfIW4URYtV5Y5PPY0OoyXU%2BOJCvW6WCDc7NUkT1EwzgVaclA%2FIskSQiiRf%2Bl2fr2LE7XwdUCGqwKyODts%2BBjVrBKLO%2FKeaN30sWsQdLLdeN0x7PH1ualwMijUekaOxUGkPxF4LqfDZiAgGK0C583B9Q4mz3V3u3L2pJf2VM7uWNPrQx22%2F%2Bf%2BBfS7%2BBzXFpz4Y9b47TzbCFNRiCyTuFKu8alCWRVyTQ5RwzkMJOzz8QGOqUBCNWP8LkAfMrqi1Q9S8OiBuA6dL0LVaf8h%2BYtRLigd%2BTjZ44drEsl%2BGbNiXfw5lhYPOtfuP%2BhSg%2FyHUzrfR5GXbdKxg%2FgrOcIBTRMI7AXgYn8OPkJmgtFsszze6ZGXG46wgt3AFdXMkvI6UhOehaEtZQACKJIUDPszwufae%2BaSbUEcsHT7v6cCtzOPScwVZGOgAHk8wPktDnXo%2Fs7jMMP%2F4VJl7Ol&X-Amz-Signature=eaacfc56c8e8b1a9caecefec9f4f04430cbcfc66f09a9b09d23458b0d36e64a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRW5IMP3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQChgpeWBuhaWSPwGKFwaphd0zTOlqBMgHWj%2FatCLQHeIQIgQaZlT4v1UdR8DkCheqcjm4KGsh8%2BR3r%2FIB1V0AOXXlYqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsUDDE9svyxGPKbGSrcA%2BUQG%2BNYQTewnE4YO%2B2u3YDgavb3BVZk2kFsZy0PWksc6QnzPJJh7GbkVUKZr5rTHgBnAuEwm9VPISUuEEyPlYSL9G8i6%2FIdnjzGKXRQFvopgMkThwGBH8grQUR4bL9grAexQ5PBV5is5v7roN448hQ69krvEfwhSq2bGO34Tg6soOQAXTA%2BASRLSFkxF0tL8h0DDwOtGqTOgr9TJj3z67OohztNp1ZEPCL%2F1LWR1wkjOnNyhSkrOI56En8ToUQTlZ%2BBeD%2FYSkuA%2B%2FcwU9EhMq%2BPQqrVsXYL9E%2BGIgct6jzPFYBL1u%2FGo6iXwWF2HA9Jd28ln1Wp%2FbChS4WO3n2Byw2ZsABtrJYde5oUg2nE4lRDewmzXsFVw72%2BMlra7eiTBprOhLSFscsP04SJ%2BkCPzesWho3j8Jtc8HweNsn1QY47O1dZ2XeR0Q40AhuhLRLOCKcYAvOP5gQI32aq1f73SU0IiOweTb%2FoHKSx1XHdmFnK2L5TJtN626TeSA%2FM2CTLuUaMJ58Q9ASI8CBDAAe4TVgONQsVEDtb9zO%2B9x%2FxHHOAE9naoB70jxXCyioKrZUa4tWYoFeQ4bm9MXVMhPhFd5L8NA6yLHg9ShazA1j7PFYRvhw5lIvFvxcAVi%2FpMNWzz8QGOqUBCev2LTgFumXAtYXyV6B2m6sAEGzi2hHeiLGA7D1H5rlkRhVngMKraQE2ibuMesGKVu3Eu%2B%2BkDK4LZfvOrAPIqrCQz%2F6PObLXv0YOmndTioXn080yM6fRTsvSSmi4lBrAB4wBFQAwnjRYfueE1Q45EySMmJRVHW7ocY%2F0O6TO%2FphrZzE2nuZowIlWWprU5bwQiJ8WKDigF7hvRDOLPEvK9MRfP4EZ&X-Amz-Signature=f47a0720390218fe5e3996117725992673bc495cb64d35889ce704ff54f1ec8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGJY2H6C%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQD7Dsu%2Fz0GGDjesS7aHqmtGbQJyxdWBp4qIFYEm7KPyOgIgCU1SqkwAmW0E5SSfE%2BdxJOn02DQaBO40o8ixK8RcQpkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfA8cQn7qbE8TvKqSrcA071Y82OIgIQdqH7k5tEEhxlFj9jrgExGgrCCHOViKFjuOxYAYaqkjdjnCM6laK%2BbnLbOniT2iLnY%2FCbW8Nfqh8nG4IitHftLLEvQj%2BZXY%2FYYVfOw24ukHuA8gi3iCFLxa0bnNtYjYxPAIUlzI4ie97PCKz4jgHXnGBeD0MbAebrrucFCG4urxyf490iS8ItA%2BM2s4eT447hmt6hYs9eupjE3dxWM7bLPsKiJs%2FSqoXcwyC2ryQUxXEBBEBM6Ikcq11u5Vnod0agSq%2Bwi%2B6dn2TitEZZoFWyXCyipCjWJF%2FVOYEEVm13DMSPvPfNkuJYRQAbjoyTpGYhMwIl4oA49T%2BRQEH3lavnS5HMB5yvqsLafZo833hv5NUt4VD0CqegBulaswKwHX9McgHBwJkDqEu8h%2FaKjmPketzoQGEXoDs1X2Epu9UFjfurin%2Bk0%2F4O9ICebX9qfwaDunKfqRKCLyPEe%2FSAeMKfNWJiyqouHUaEOCMtCg%2BBqFI67L5vKd1Vl8Yauf7WSmuc7mAqOEh20oW5c65DibA8BOTRykpt%2BpS53kXScmC1kZyY3WgBszZEw8PkfJTCKTG4WylDU%2BVSOJWitMHTHEWbx%2BOHIJar%2BYczbFpEvyjUiPcj3MStMPOzz8QGOqUBhBF%2BR%2BEoph0X%2B8zdIdc1JRZgrMLFKcWq26wZmI10tF8tZGBl7C71u5X%2F9Tt8yHLRzpr4w0BlrA6BO4lQJt36cSaJDlOCdEVs3JPNihBpQweHnMWIimF466qVVaAYsF8lcfESwDFF%2FVdU6Ijk2SnwCksmupFaa5TVFThtHCx0viDw28OmBswgilw%2FFz78jUpZbJCziIOOAnGbn9%2BHE8VoDIeTmhKm&X-Amz-Signature=11145752d3acc654b14ac5f5daf99653abfd98256102f33436afb2bc6997e505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTEFRPO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDXjXSsU1d3SKAkggzcMtXOYVgkLiyy1l9aXTFFLKORrgIgMHDTc0RXiYMQ%2FuXCaYidokpauycpkoESOIJQwKr1eZEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGmy73s%2BTI4Orpk18CrcA6SkHs%2BsSm3VZblY2x3Cq76YCs%2Fohz1ZonIDNnXkc%2FFPfXXmy0W6PZLfXPnLzXJB7xJuWH6Z3Ij3eGQZvo%2BEMfF2kj0JIQLmlyxPd9OHrMormEGdqocVI6Hy1zG%2B90t0C4Ywdio0d1LdWFbXjG%2B1LL1mJslZ%2BmtoQXv6aXPZausEkL7thsvOhDHE81c0QL3ShX730mWy3S%2Bk4OySDXuhMG6YRkdcSEkJ18YFbOXiUSXBzjHRckYjYqr9lTVJ8XiBpxYE%2F8NmshZBRko9X%2FGg7tigwWVYYvXMb7%2FWldxaVKXY2t5p87iO0349pcGoaAneXU4cToyRAbsDI8zzOIuiMW3L%2BPysmTcz6SQ3R6bzEzO5Bi1P1bkWBhDY7kmSfKLt24Nb%2F%2BNvMCCfPQK2AuQi7qU0kvup4yR68G9S4c%2Fszx%2Flv9bm88BSLPrhBFCyGdImxbMBvv%2BB3YYUDvM4km40B9HsQihGcuYDW0I3l1p%2FC2h8VcIEEuDNGM1wXDrKR8KoDBBIP5L40hmjIxHOsqze8xCtisFRG2%2FYSISmHVOS4gH4SNt9F6TYjYdclfTCuet5G8XM2Zrk%2FVBgX%2FTNXGFgOqKDAsRgdHy5d%2FGe%2FxuneuJbJAL30%2F6mlWu5OEc6MNGzz8QGOqUBbnKFWkg9eB4uVpEEDAht7Y9pUUCuN4tGkPDDBGea4D6DtAbAHMIWqQGvQ6gZfdY69ijyrvT0pChFOgX%2F54u7hf%2FPwiSig6Q2Twbg6DDUkbWVb26AnUTgtuLMe1W5btMrWUu1FujgxM8lf4MeXA5CjxRbmfjrsuJpRmVuIhojFVj7te%2BLAvu7J%2FSJd3tEWXQmXU0jE3HEysXaAopQ1G5%2BmSdMdn6Q&X-Amz-Signature=cd696ebb5169c3589a3494a38d38e3710849ed68b687a11b53b63a87a194efc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQHCHH5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T231056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDE%2BqHLNMM6LYmNWKX66X3uJduwyLAk0NTYEEm%2BlKyq2wIgO7zXNXc%2FNqb7OZS5GmwX%2Bsix%2BCXmbyF0YYIOk8He9lgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ%2FLyj2IS0X7uaIayrcA%2FXWhnudB6khdnCwZAPdI4XCHEOdJza6Ny4pMu0mzxILV5CicK0hTXc2TvD8LI%2F0lH%2FCAzJmYSMedAoWT3tJA8dByCQsklBsaE5fcD5aCd3B4JKkN4iSKrVOWUfmOJ8cVIgV6OCiYcB979t9W%2F5SxgVbGbXnSifZA9jD8msE%2BMOSqno2Gc0Zfxpq61dmw5FMyAAqbXE2%2F%2B04Wq7FxEY0Xyy00gNXV8%2FAjkkmtUC6dMEjmWPHIM2NA4I6cD94%2F80Xc3oxUeaN08Hs2lWEjLRAtym9%2B4Ev7OcWvNI1OgAgM4HKF96JWJUSVpcAwo0FIz2HgeqYp8dmUzwy0SWfKlavwUdpq6rsBMjbJwdo7E9Es%2FKE0aUtNkwpbC5AlszLrF%2FgY0bMxlFmSzs%2BQeQ3VaKn4828cz%2FToHX%2F6IfyzmYUU0yfOD%2FWSMnsR8YEp0S6WbgpyjmYW%2Fd91C9czOZs5ae%2F6Sdsv%2Fg8nXYVi9sTn1giHOGLKm6t8BLIOCo7MLp7LVOuB6dt01mSd93nJlr73N7etOkVf2WIMTdQCwQx9BDfdJkuko9BlVTlgKOfVqrGnUvB5PM67CfA3vsMhtPT27H4jdzn5JDdcVGPpvMeHyy9CPZtLo%2BRnw89AJMVO0YnMN2zz8QGOqUBmMfM1%2B7QC1AYYUz3dqfLCZVNj%2Bbi5mYMK4hFuQQlsIQSbP9GF9BsCfQL0xS5rAtkusM9exSp1aMJ56CYl4PlYqT4ZAzo8fTJD6oU%2FkbaAxatM2YNbYAFsnSryTg33FdbpBEmoaoh9K8ZK%2FxFsufmjmL%2B7OCebFL16UJQRIs0MptZnZ%2B6uzeivrZdeX9zdTypBzJnkijqoT0eqN8iCukxamngl8Wx&X-Amz-Signature=077c630e77b52cd1426c444ea32f5e14246b4cb5f6c8e5b9ab6f34f54276f0fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=7e1cea1b2607b1492013b6dbcd949ac9bd25057bb4bc5aa1d928c643cc7f0777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFYS2C2Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCICu94h6a5P4pmrNiJSmqUwAibsdIbBcMgwh%2FdhajZRwwAiEAkU5DoBygmUlisM0BuPHUy7t6KroKJkRN4mRuZ9Z%2BevgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDswAf8Zz%2FkoPI7AiCrcA3ker4btDK49%2FJgn5zmo77%2FS%2BF0vHf%2FzF1k3xmrxjd9Na5XQ7iL1MbzY6%2BHFxXWCyPMiTQaJ0SwCNcX5dd3MFISvYkfUcup0fH%2BXdD8NiGQ4FfEk9R7t2fTsdr9DrbDxNS%2F5%2BZifz4SMzaAqLLNdzyoscyTtexQSgPUUOoWRFU6W2Ilsis1tdak2pTk3350bt%2FTlOGJSQmXYEVTC0FbXBBSNwkj6ZVP06OMmZF8FMPrDsUwjXHUfY26CsO3fPHr3YtSEadygGvNugfkyuW9xYzsvmYPimGm%2Fd6AmzySVr0ptuXyB%2F2D12vIbObaqiIkVisd1hkEMWrVJH7gNWg6vNukbLnItQMJ38iNNsHl8nhiJKKNrvOpzZ0jvNT4hk%2B2q%2FCr0bKX%2BHGjPDCcu9EQePp8pVXdZ2fXUxq2DPEJAgWmkfoSqM7xnbI1Ia1WIHVRvMvOMLt07O4RFL3IyxwRms2XupKH4%2BInnKDW0zf48njSlcscs%2Fgb6PtUp8%2FvlCs6Gz0QAwFIuyX5PO76UwIs7hv4NSExA6T8WREKsOyQaL6NZ6cdBCdPLUoRvq%2FxuCye%2BzGyi2EWTk3OvDOB7CAzpt7HKt1I6Ouvbx3qlVmZ94NK7QoOe%2FItfWaS%2Fax5wMNKzz8QGOqUB11%2F34R83j1HqWMe1L4QcF5o2yRF5W3fayQ2SMNPOfK7ToJJZwJ%2F3IDRok%2BdR58ImUn2JnyL2VZvkX2iMAnuNTGEMpFpbttuHKTS8UTU%2FSMR1l%2BJCZX8ivArlJq3tifwfMwR0fteHF%2FsRXluT3VzF5D7dNcFcxEXXREnp1k9lqHTP1vsNelS2RhTTGXu%2FtHC2dk7Q9oVR16nPQ8ILSacbYOFpoS6x&X-Amz-Signature=2a847aad24e1764343e6118cfa7d51cfb183953571f54d4c5784864e95ba0ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=c54a65d0139fd897b0ba255e10dcd28f355d340e63d797a2f7d1b11b1cd0e195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=f5bdf872be3ec1f327aff72ea45e5592296c84288307ab36e429bdb19bb262c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=6667389ab5d91fd3ecaccc522b1ed435035a686635884f6e669e36bf3a7050be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=d46d5c48f438d206c8a901051c6fa72d40c70fff895664350cd16b7d8dcb7872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=b9e995209cd663a189e0bb29db0540c28141608d0041c4bf2e3d29d410d6ca26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=406a39fe49b2c53a7185ccb384b8e134ba71f9f6165c08f98eb35a2f9fdf93b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=6667389ab5d91fd3ecaccc522b1ed435035a686635884f6e669e36bf3a7050be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=bea07b4eacc8e0d7aaff2e29502b574ddf8bfa406cf1c883550df56de860c7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=96fe30a7755b7210818159095c1b2099414e6fba5c005bc9ceecd78f5a2fd2e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOEYWQDE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJIMEYCIQC97v5f7%2BL3HGtn7NDrJNzi9qrHQ4TpxZFHPr4WIz8dXAIhAPQiPdavet1LwcLclO5K3oieCzpbQEJhiq84ldSZtTONKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM94IjhSXjb2Y%2ByEAq3AMmTR4UbnIelh6z796HWQLL0cEOnlSlfAjLO%2B2eR1cJBq8c1bpjj4IJhDoCYQrVgsrLeIEFPCX9DYLYwcZ8CWtAMXMW1pSnyP721Eur43YWA3hNg7masD9mrk9YZHJK%2FihO%2BMuwPp34%2B7hyaoI9dzNgdGmrBhxohJKtgcitXUzksJyIWm5qPNZfK9Z7K4t5ug7bSxUg8hWqlg3Beuf1qWHwPmBgJMKBFNUIjWeSYXAg2E2l%2FH4Ow50J6UUf3veVlo%2BpCWSeeAJ05%2BoE0i4hnjSbOY9YVR81pHwnqEt45AXxlgnscWBB9bKWMe2BhrRbUeDR2Zn40z8O9Q1lSNKDKbP3bWghgDYBavMdfcYfl6nRSmAw2O3VrZqHHKFm3%2F1GHU4%2BTxRfyxSJVZu0auuLCFrv3y27yW60%2B1e%2BQIpEKMyPC6NNmLlWvtVOEKC0bTy31CTVF%2FuO2zZq4NPfPQ91cv7jOOblODO8%2BFrDuvyfS4tkoxCNKtBS9caNTAQ0oWsR%2BABvj3vgHzhExXgQcUG2Few3NKSOe%2Fibu1h3QKxe4tHq7plMTC43aafXNF2BKxSGbg2nH2uoF2NAucP17a899BB2%2Bl%2FzqxKJGYtKxtDpPbgLTnfYLVJK8ASEc4q4ZzCCtM%2FEBjqkAXGuDf2oC6LXTypjdSOetwXi%2BE4LJok5BxL9XC2yuvYFlFU0TGfnHWeEwOGCZgyzW%2Fs8a7bfZY2CBRnJa2WRiShpm25tL53F0fWrodbkqFb7cWHYkwu%2B%2Ba6PgC7lmDy8%2FMfBlHBI3LqD8P85HbBdls3vmpta4C2yCv4F6SWxrbC%2F41IkpGHKgAf9LMhvLnO3yFPwFIpDpc3W0KlgeTfKwlX3%2F8Fk&X-Amz-Signature=0f574ac4e123dd73a31dea176cc54805b75c6c4fda979b21dc8f3c5946f8180d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
