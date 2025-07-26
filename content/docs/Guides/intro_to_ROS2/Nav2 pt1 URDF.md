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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=22ae7e623e7619a0a24d68260ceb1aff3f1f4013e1b0c55d5e835eb4903a7c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=f9cb42b78c5071e865fd52df5783799f6fa5c4a2e5b4bd8aca9132554261fa15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=31779a4ba5df399a5682413d3ca03d64e7caf133a3914b0f13b5c0a8b91f5b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=859294d2245b94f383d2f493daf009bc94e85dd7677714529f4f0fcbc6e1aae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=c9d17776b44c06f0447bd88d59ac65e7f5f695eac1b079a6bf0caae1cc1441ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=a9fcaca0870d9c9c3eb901082a293fe18d94ec8265e21df85f2752f4d97ccd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=76302e6553bfe19a6c213a45f711af9c1d2888820d0f2cacd2e8ef6ffed4db5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=132e4c39259bf647e6cd65f2265f92aeaf45c2b67786956e904622ca4b257c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=babc27da6b9d8cfe8143aa53bab8000b4ae4c7a2d7c658736b2a23c5b25101ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=d62daf6b0ddd3297d9a9bdfad03288498a516ae61b9e74a990df143369ff069b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=aacb50ca5105949a1e35c71258f42ab5c97b019f4a9d2c21d3141efff27f3d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=85aa110c33a238a1609a555b295414a65de1f1e2799c08e5c9b28b91ea935f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=d6ec44d7a1ec37b05b9de9d9df1599574da30347a24fc07b21ebc04b6bc3e544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYW55LUF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIC9TSsTH%2By%2BkVesSQgwKlU2qct2lKhDSsNjnzzaA53WDAiEAkJ0WtifBKKHbuc8I%2BRUCf7NBqjT%2FuN0tv21Mn9P%2FF5wq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHCWyNVa9Zbx1xgzrCrcAwLsfFpWq%2BGmmwibe6NKf22XAFuNdVj0iY3FAeC7%2Ffwkx0MUZsyrwEWkB20txwQsng7DagPNvifrbajW%2B06rIn3cGwlUmxfGt9lyUS5Onf%2BK1zUImchhgMcsr06Dn%2FjQy%2FyoowOOdU7ih2RkEXpplX4Q2PqI4%2BCnP0RYs2w888roEulfhSnzzAEW0GlGEwhSf3%2BSnx3HbPJAPK9Bfm9qqaUmDNDmIImT7Rq8PICiOgbCIngpYcn6ITCK2quqGGrGAy9XgCwZwsacaxKaTtCFx4gkazZ1ClPqmBoXqekP0r625ZERG5Qs4hUZKK%2BZnOEd%2BJ92DWYb7PpZkmRBI0ZQ%2BfSeF0Ih3fa%2FESZPXxl%2BC%2Bwb82CvmeSV7K2zd4uL1r7E88P8KXTWcikffkysYr6b4IrKzLU8dk6rmr3DXA7vfhXpvH4RErgOVfvdvXaF2nXD8N81UFE%2F7yqASfwafhAjt%2B7qdpzoUsMwn%2FB%2BziBHvkv5yuazbi0eBZ4hE0DBszIMZEOzJ%2F7VykE8elRQ1kaPSBBJhfd1zN%2FcSKwon%2BT55HyTUDV7HfYdTVpFjhQR8uOTwPUBAj%2BUUh5xvD3cJUIS7HIW77ObnBtSOGpISdZW1QYv5VdopvLoh8lsA18eMJ33kMQGOqUBrwwbIFq8IXssrNijQjLAbedgh3f3dqnAfF%2BXM0Un1AQEidnyrFxEs%2BHDCmxrAF3AQTSUHoTT70dCrquZRnzh1TnV58n7rsFJKlz%2BEgA2ZmS9mGxcmDZo1FfYbEGkO0c0ztsrlFBpRwLXAPXooMXW2p%2BWmcGoQV%2FfzSerwOsUHK5Xhf9QK64e%2BhtvcPR%2FnpHn4vqzZbhEozW4xn1CdL%2FYW4FLOeX%2F&X-Amz-Signature=71dc049ead2cb05c389c0f8871f68253e005fc91bb18faae4d3d154acf87cb56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=308dc0e2f4f60a1fc69db744984243e07588072b622531beff29920e3ffa314a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=2648d1bf700b3b16563ccb34261de644b47091dcf5cccb511fe47b9208ef3697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=fb297ee004d4d51cd980eff10d0dc1f1b52ee389d0514b4cccec4eb590a4fd08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=d84db1431869ea5605df0f768e1435b9e979a84df90636d53f668c5967dca397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=c18b46907b6e877908dc0a1f75b0d49bc48eb699206c07bfe3d6b32456b47c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U2YDUTV%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC76vjzQgN1QpFtREFDD6hymsBXlv2v%2FuuWozUC%2F0O3pQIhAJV5uQJJ7tYkBdph59PLtie%2FRLEiYBcii1hcTtXBylIdKv8DCFMQABoMNjM3NDIzMTgzODA1IgzeYSY3Dh7kYSlsz1Iq3AMmXrX4hrgw1uj2Vuzp0JU%2BAHUI1RFrP4eZY4%2FiZk7qskD4cbwjvvow5Qg2X4CZkM28lytQfRM2aykYCdcI2jyrRutHO%2BdQHtWaDaEFusmpRvskgLivu0tU8%2FY1HgbkXfnmyAMGM8UPt9XC%2BcDtjpH%2F767ekTBsmpwXucF42QaXFWDBzqiYAEZQL2lX%2FjjTu0shTCyrQ4YhUftkL3%2B8PYJSktfuixsOewEU66Cw2PdvdMXr4AJBgSw6hSMKExrFbY9vXmZKJHoKtZEzlA7B8uFqsmvEsN9nLqHfARQL2rzk0d95hSuv%2FRwqMTR70bGuuHqhS1gJfyb63dq3fEVmESfL3iqb1%2FJUoMhLbsqTGLty0VFMfx35xBKL7yY2YhYVfnK0aQsyduakVL8Fg4DMRiQBSalC4TWK3e%2FqIkbTnsaBqh2%2BTHOrYw%2BDnq4P4DAhNeLCljmPaRlZZAVvueDwB%2FcdIDkiVt9%2BePQW29KVu1yQXztdYd2kr5NRqTPXzmLpYv5eGGbKKlk97u6FYmCnBe9swtdDcpcTlnjwXMyi9HpfSt6Xj6jSnaTTDjz%2FUq9WGkluoradP8CQPVi9x2iOVoM9g1GkpTIgkhtpOK2NgvE%2FN3NQin3g8Me2Vv%2F7jjDJ8JDEBjqkAfnNBNQmrrl4HuQ4ZRS23AdH4mNh2YF7jNNRpGinWzxD1biq6OxnvxVLoPFbq7%2B7A9FIpW5amODbxotjlBFLVo%2FQHzoGoC7ox1uH3XalKD3CM5sek%2F5dAKm5AfO%2F%2BNkH99gT18fwCGVeJMsyGwGbG9BNZGmzyFeOotdn9D4s13apZRmVqNKt7Yuxp1Z1%2FZ%2BLSsVV7BJQ%2BWVBDrvYftER9dqD3S2p&X-Amz-Signature=406a7140accda254ea09a8fc33b447a268f379998ee13997a4a4fe0f9061ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
