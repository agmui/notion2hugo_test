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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=61277ee7971490ee313ba01779a88f0b4adadda3bdb7b3853bcc676f5f62ed4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=2d3d8b582a965fc37560ac6d71400d5893f6177e9913da1cb0106bf316f6841d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=01827c42ebf220fe88d3d079d7e6b0514fa87114c348718d53764e1fe1920a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=7171d83d1a57793d254d72d47a8782187a33604084f3b7c4209938e22489c93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=4b8d9611eacc7809bc56711e9b6c31f57dcc5628d61a42a5157791f13ca8b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=ff0a1c14476b0c86f9713a8e386cbe770ca4af9faac1ae1963dfd7efba9da15e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=06d4c220b982215441ea02b93ce51a3d623e7cb3529de2eac89cd5ef7bc2194e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=09d268f117bbab5689ef0f5ed420618d64ac55148bbd01a2b1e54dc3123a3662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=d4b6c1e4ecd03b4761c40ffad47d73180a05f1d9ad7057bb2f31f9ecf28b3833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=1a3d56fa40b525a55529c49db5df4b73a79e70c4d802aafa301f2fde38012c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNAHIRF5%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEjXxl%2BeDD57KiEHVgYtwaykXofzbdo7mDGghu72jC4KAiBxMAD60%2FJNk3DOeBtNo3dhPDU2GjwQWObipKnX0iJ3Jir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7HU437uAHvdG1Kv7KtwDiGjWog4vYNo2vf4bOK18M%2B0Gc7e4RqU0u0NMf7RgEs8VwiIpmVwmnkux8mI05zawJg76CMcreXRvvzPMEkHdEC32LewJKXNjH%2FQnAypo7AfStLWi8fgrmf6vHPVF7DwMmYvIRaDpHg0U7C9h0KS9CZhgYNxcArIPdhaEkbGKsAorUqAbTxAM0PQtbtTletEjXe%2BYboiv8IjWBvbJBwK%2F6Z9vIGuGjluX1x8cT4lGl2Pc4Lo84SgIabe57QkgoehTGm5GndAawGpZunbJ6OlMXmCrQTm8Va1YMdD9cIU%2Bcd3KEzp3oQLYNJNz3m8GPjdcvIHxSBYlmhwqrbQkunrw4Wj2A86GT6rCGmhNl2Cpj6UuTbwx19DEC8OWKAk9ZvTP%2FujtehZoY%2BmaGbpQyAZW6tFQ7hsPBSB4V6l1kuA8WSq68uAPLZV2QKrBpcH7iRQ%2FTt6jr4iVUcOWWQaVyPE0e6lni1dEMxFCHShw4hmjEM9oshd0SckMEaiGeM46%2FkSoJItElFYdVIYlN3rP0jEpA9%2BtQloOyUq1xmrG31V6fQSncuPDuFphkC6HQcuMjKilX193c8IUC9zBUSfqCGpvJmm7sd61HH5ObHHiUXY55cUAtW7gq0zETi5ul2gwl92OyQY6pgEMcS3OEuoGWPFVheuUKWyN25RZLxmTbQW2PRHPcpxlisZfsh0ONt9jE38RogOnLMq9AaNXWm4VizIBVG4vcehr7GGFacu8PV3Aiurt7NilYj2wqueF6F%2FxJjjRDqh9HvOiQe7ZOG%2BZ5G68PyGYLp78ID4%2Bg3RH8HT8CV%2FJ5ETjFpHFw3%2BG0X%2FL3WoTCj%2Beq%2FdZea5I16SXob1eszg7uO7GP9G%2B0W%2FN&X-Amz-Signature=6843ffe2a4f7c4854148411ddb0beb76e31ac0526c1b6a572129d8d173c2e5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C3K7E2A%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4jd%2Bas1gSJmWnDcZI3%2BVwMpwlVeP2B2EX%2BkMdNUGlCQIgdFlO%2F860lpZI%2FrmRkPe47kpmgbhtLu6wZg795YALUToq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHQXHYZoPvx%2F0i3bPyrcA1L%2B1W00w2I2ck4llr9JKMPOCYxU35VKnhEt1Tx6PGrQRMPIP4pLqHtqHBZ0tElmjptECM55RQc17WTnj2HOnN0VhM1J7LqfLcakCVEQU6WA%2FodIHs9xBX0qw3Eq87tcbJ%2FhDMqKdOUbSbiAiI5nKjZe0jKLoNVQ9G%2FQR%2FXN0o3GZx9tclP7wzKzcAyQZWO9XkODDsBnOi4GJqH58Cb0TTzqNxydBHID8cw65s6P%2Fv3lpRZ8BfeFDION06l36M%2BKbKIl%2FmlwCHE4jjfgQySMnLCQ7CRcLdGUaN%2BIoQAmfTPOMuTA2ikb2qTKPTAOlnKwb5814bl0mDJh7RWwPaoppPiMdk1DEgrQcnJAQ6Rj%2ByAzihs6e0qncEH649XZdTQxZ3D685MQF3sDeashk9NdtEElTD68yLloNKcxJ2wl65KnGYU%2Fp5253Y1g3%2Bg1CdW1vbsPDjbSXH3kcjhY9Juph4%2FS%2Brwj6nf3YaBOy8dKbELZm%2BZ5nL7MjfUBOdUPlZeJI374SkGLzW7YhyFAZCT6gdRvgJwOzD33laRkD42zj6t%2Fagsg8PVU1A9SclSR6qFne9fr4hfH2syno7klXewx1brMfMhXa7P2EpXn1jTK8EUNsOq%2FLQ983gaLIT8tMObcjskGOqUBnHwWZB3MzZQCI5cxSqDegffFDIjOh4XlzNE9wHxc%2B3gu1AQmBi%2BDsheOpAqySWQlXPhMt92uqgEdde8C4Y1Z6cwsEIMCWL%2FbJAxKTcMJCtvGTdIHKaDAH1PqGOpBYeKnjITw%2FNtqxNcrE9FCdt5TGWYgnWbBRAHoQsy4ybOc2QbyG67pBNhr5TbLQUnJ6CK1hC4amFTScK0M6RV%2FBgwfJnV1UTzN&X-Amz-Signature=f490e5670296b05bf39b70cd9901151498a289738dfc5dafeadde946dce26f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P32BURJ%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEanPmUFVA%2BBTdhIRXygStAh904aSxc5mjbjigIdt9iQIgN5IFXNJ5%2Bn8gi0irrNQ1jgIpHk63P01zhdekXDU2LS4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLNuTxz65br8L2p9jircA2vTWSUNZjqpgRy5ECpJH3yiZjqYdgs3Sm3huzCU0GyFtxj5syAMILYUXOsm66hkL93lqfpjNDVc2g%2FqZ12CTaRvEXZpBRv%2BX7FbzBDreXkVvMa7tRGnX2%2FQb55hZRvza56tBxWYAZMbWTJOxka5yqUN213FlU9jbj4VrJ4%2BPz8SzGqhdwbt2ubPPXgPKrDr4DsiD6ntDH62GrKZxnGKV1vZTXni0UqpkjC68ul2d%2Fya6AonP%2BEA%2BJGN1JrijkaCcwcCYptGVN0tnAHRhi3SlmLWVaRc%2BUfuOLU3AhvCato5ld7dwj11VRTjzk4rtBp22AmPmuKbz1YR4oi4nQqF7xohthVUE6CIljvQd3ikcaBkw3YBwQePHwwiHkWG7QZ7em2W99%2FpmNY6AFZCFKc3re8JZEycK%2Bka6QVIgqN6orIHqJbkYX8LQNxDZVFzdvgP%2FGa7qP5fSDnZTibh%2FUevT%2BeNvXDGgsqUR4vFm71mmZ6Y9Hq51Q2OYNSCMbc1nLKwrI0RMsFMfqA%2BgLxKWLfq%2FVra7AJwoSYGaXo5K7BlacwRc%2FxyTfZSIRwQM2MSLFjsytLmlGzRvCaJGiF5ADSeyiwwm85h4V2NQNBuX8uNups6r%2FlIGMf8celG2A4JMJXcjskGOqUBtskivEyhZIVnxWxwVT5CpOAhz3C9xX1lt30T1o%2F9OcNamJQ8LEQ1c3H5trN6Dk2mqcCgCpB6O4qF9X%2FuZX8ptX%2FyS34eYdK8mrYKZ1j0gYTitiQfL69b%2FsrmZdqpOXU2ZU%2F2J2vJRyoMk5MisJtTQAfuzKr1sCL33cnSojsX5rqsNwfQZhCZcofoBLIE3hUi70Lih%2Fe7JeBSmsZhnHIVdoz4RlaM&X-Amz-Signature=bb8d2c10243be55a55443d7532311a9bbe5bbd3f0eb91f81a56d9d6a19475067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=03bbc5fa2a545b92882433e7880ab7de5777977a0f8782ba7cde4206881fd028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIDLUSC%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt81WwAkD9lhEGRP4meD4Hqq8BYcShs4rImPMjjyDOsgIgEJwdmaDsyE5ggQYYyDYUsIXWaC0Y%2BXooqcaE9kXJKzYq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDK65tfCLAIOGc7c1ACrcA5MtkSslQsoyvuw60%2FZ50jBuDMQyEcGY34wAo9ZJjy3Anm2LD7taKjK4juCEMNhceS8oVMQsZ7Joxjvvv8v6ZCK3mlat1qfe5VeyDSLn%2BWVdqHtdJiTh8%2BzzWjJs1YItrRanNB8LazuNlwwqAE%2FqFjS4rqRuwRKoKhNxl%2BGDE6VeyGS4oU5AHNxKFHN77lj39mCq70bTMb1syLjbu%2FNJvcGBrDIfreb%2Fcwuay%2BP95uFuvKYydNdVRwknIL5hLSQcmQdUhVjL08TbccbuQAxrGX3F0lk9AOPrG%2BFqgNUlJZ5MjawTC5L2BRAn1vIyruB0OvXOjS5eYuaPlVY%2FZvUV7JVfXZc%2By%2FXN4n0WMTli9xE%2BztPKZ%2BWcGshzY7zWhf0gywZQKAKOH3Hmh3pbBG%2FIaTTZTPwec%2Fs60%2B4ngnLxEvai4GCHnOT8gbkUQR2gdCwdyLMM2irfWmayBi69Rm71%2BjYV6W7U%2Fk985tLOaSuU%2Fex%2FkYjRs7aYFC7tsVJ4%2BNr6KrGrfUjYPfVGLpbEVeOuLdTzabTNQv3BEMYtJTmhQsZ56U%2Fs5z0D5cgg6acfUkT7NRzpZu55MKCfDdLAPflqj7kTrxZEFz%2F6oQZA6LVn8zyLF70NZAuGCv%2FfqNpTMMfcjskGOqUBBYiei8oktM1tMEaj83vvojXoafefsDMbBNU5iWw9f%2FwQOdGqTCaGqoXkX9197KTxtKNIBw9S3vzEcmWCUqWYDQwN9u7R%2Fobggmxij1uc4S06rfouKIJIAgzcFKlqTEo2DlKnv%2FPO8nvfTRBQI6CMR55Gj3O4ttQyvFo3BFX0b%2BZA8p24Q1MBm75gilhRy0Rr92oWAnlsiDnmY8wNWWEhqqUJPo7D&X-Amz-Signature=4e9535f49e18a2fcd4fe814d261b6863ffeb23d4926db45c52d68eb8e829981d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=fede97c6a7b35c247cfb5dea0dc1927995cdd979e4873086abdf915c84a3991a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJMLM6OY%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHNpDV%2F8irLM2U9818zooLtGIv%2FltMBWVYOORHW8EAbAiAWMUlMfDc7Yha8zLpnGcEp6hk1r642qrEyfCmwY5D2NCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMCyiBkkItBlTRuy5FKtwDD4h3c%2FnKg534TGuJbIXJU2vZtSC9vQIQxX0X2zOrNCML2mjwvCQsGYxsilRQCJnnaHcSCiDQlY8iJxP4NigVow95kv%2FsmtnudSiqFq7vm2sKeiF8g4wDFhQhST9C33iVBBTyLGCNW43qLyhchJCaTsTQV1%2FGTPlT372%2F6LC6UtGupSN1Ty4BOSUV4OEchZwLZPBObJI9cf5EMAqNq7b4tg5ozhJrTUEb3c87EKao6niLrFm0l%2BMcLqDBK5vRplAcF3ow02YTsFnfEu3lNNNltsSRB4K5xTSz1COG%2FN9nklAXrMbLTpArhbKINAhrkqQbNFOEcvDM0%2BHQ1gNMi4lFHGEaZqJrIIKJnNNWKc3X9iHp6kjBQg6jMPcXRlLlf%2Bigz3VPMcwFHfJ2D77irnN2vGHK5oa%2FnAU62%2BzSQkCU3%2FYY%2FQbiUgvB%2Fx%2FnzRjvVZs8UD6GODEWlHHr6OkmpEfTWWiU4fN7ilB80wVUlA3tfYnM1dGC9ijxH7pDf5cpG7SLgUufuISvWWbdzj8WMSsjn02I%2FMAX1K%2BgJ2NVBC9aDoSCJbVe1%2BoWHHzHb4HFfini5lfRL0ZRg9JgQBBEGu8vTMQtuw6bjp52U82VcYFQ1c%2FLcIWhGyaO798k1yswmt2OyQY6pgE%2FsSc1QK0OOqpzJrXeK8DGPeA6Bo8yq6ruZ%2BQ%2Bi8T3wFGvMQ%2FIfYCSvEjX6aCWhDOctQSNkYxerdzaY1p2sQCBMTia81Qyc%2BgmIpD6Wzy%2FYoDCbV7sBgOlBADhK%2FhkTPLhj8JNP4aMvJOPEviDraWNxxHFfCZdACGJ0TLFY%2BkY%2FjagRZBmhZTKOG%2Fv%2F4Wa9tP4BlQHgHIeUBUde8dQME8NdyDRAFyT&X-Amz-Signature=a21801abff2e72c1cae16b9f4929cc3c6114ccc6d45bab3a433cc84064b053a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=15ec51fc207a6ce305f6c9a1d884c9897b4e06193e036d53eec8d06bd5b4fbcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHUIYOE2%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNIqTATBy0EWQ7pUNPK5BM1X0GdUv1nVQQrbQELQo4sAiB%2BDYXiLph3%2BhtBv75ey9MPDlpuLOo0DbYZb47YcIiowir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM9EsdXIAJYx9xyxoXKtwDKheI2KGN7wgKTmb%2BcaYFpaX0SBNkkqFKbFbn8rocoZw%2Fr7%2FNfrcEeGHZV%2F3ZgGXjoEhQGIw24E9hDv0pMz1j41g%2F5EBNT50NzX8EX9AHnRGyZ8RxJqI8YAhDW3PT8MxWoyEh%2FzAqL3Ud4TodKewHqvC6WNnTyMMveb%2F1WhpTEyKZi4cg%2Be9%2FklbpN1Wnfa86zktR3Bbdd34lD7rKb77NclIffgUfqrqMBs6ytY28Pssfjy8pX3pk9mmZETIykinblZ%2FuJ%2Bxp2nlZp7mDAd955gMtrR4JEG%2FOb8UbWRElf4MXgfEe0bbcAjoVwuORtcHtwzkxA6boFaB8lMYC58txK64%2BLny%2FKHGIejS9Gz5lry9H3ebNu%2FyPc9iY8RlcZ6DfnKVNsZ3GSeZ288o6HpMJCAQZRBItgiWKKm34YKHT73TwR7ddkKtbgXvd0po%2FLtysse%2FgSXvp%2BVY%2F7FNpxS8Xwq8oLUAfnip%2FPQZGhq%2BLYJbLIgUD4QWH1WPnzuF%2BsFKvjnxEEYWYLV2Sz8oDOCZznszPh7fRDi6peGWRgNnojoqQYC7x567QCcH%2BDJg01rtslYC8eHH0wKUYD%2BEZ%2B%2FFkTzWeuClSPlVGcujPfbBFtd6e3gqhUGpO8SsLg1Uw%2B9yOyQY6pgFCwsCU90ronMvyjvalccIlEpDEtwja%2BGSdk%2Ftwe56oGn%2BHisctWdIjhXuD%2FgPVutS1ACJ1AEcsZc7T1oe3IwmR2CHfwHsDe97%2F%2BBcGjHEXSXp7zcOlkjVBw%2Fz009ApcSCHSTH1ZwaJHpG2D945Nigxxp9hTjtBUxMwlSgxM7BA%2BtWpcaD5d8s5%2BVOLM22PZS0kOb9m2QPMEX8hGpozDpWeD6OvFNRG&X-Amz-Signature=d2da52cf629ad20507817dc859d81fad93419208d46d245482c0f5828c5776cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=44eb11d70b34cf7606d423e7288638558a18d5a1c93f5f5ce808456e3f4057ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLW3NLI5%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpPrnpFOng8x%2FSBQaGA%2FZksSR2KvAFAChxBEuuS%2B46iwIgSV7SnaqLUQCEHmbArcxGQpPzmnPr%2ByGdDQ6NvwYz%2FGwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJzIgTcjyGc2SODF%2BircA2ACUHrlS5YG3dSTpquRH5l2d5ktIYwh8o7zSD%2BpJV0jby%2Fi5Fy9DF%2F9t0Fvfw7OCIwCNqwcScLyTZcGreigpGJcDdE7vTfV2cZj7zdLZtPCHtsmu1fnAHqKG%2B95kxPHiTy3cjywISlswhvOW7UidhKyKhg%2B9wu8KNP544Kay3K4qt5mX314Tfz8Q4397AI%2FcBYMyf5kfpPKmrt5%2FnBguEWIBvrgUqdHcWBAYRwzJy5TgBUBaQyP%2FeEPxBlXiWm7SGmdvJ8Bp0r0WVu2TBRiqgCIjCNaipZM3VTnj1zF3up3zIN7SmmdH5iLkeIa815Pyc4rzXCgxnTAStzEi1gZwRpPYr1%2BlAKFFABCTkaBwXw2qBAHdLnKQFEtbTkpZMglYCDsPRmUn0e%2BkbdHf34p9NMYSKdKxDYieoxJy0gv1vSDd2Nt%2BKUN4UC8uNonO0mjp3UzwXTgyIEzBzxl1ZUJZorXONPyOpfh4Q7YW3N%2FF4cKJ5dQtXwsZv7XWDZCixrDfk0H%2FY%2B6mCOfimWqGXXcXDZZXEywc90jZHk%2Fl4PMfVjYS7KCLrVk2rWixv6rlGoYDaYxGUGz1F3y2iq9efUYneXytmOWwGH1fzuDXOLlXvSgkn1ZxWuLc78yCSw6MILdjskGOqUBBa%2BnryEk9U8AQGStBi%2B7d6wKUmu5Vow0Fqo9JzYiRYAnmIFSJO8xl1qXHZj8gy%2FYkdXxZeeo3%2FXuIqb9I4n1%2FcZiJtkjHqEcqV59SW04zWAgb8KOqy%2BW3FnN55sdgNjMXm9dBSKCipyVCs4H124qlRTxB4hqWGR7lCajBrIzHoUCOcmsc6iAEL3YnzShQae465ad3GVtQdpAt%2Bt1dOsNIaL8dgmp&X-Amz-Signature=ed3fe41d4197bbe83271b5e5dba51c039e925fb2deae8012def7700c52d700e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=41986dd09ce3a1bd608be4c77e8e2e4eccad1cf944866ae1c7b631f74146a706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNUVV55M%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEptXZYOBmNN2fqG%2Bp3f5rAkVrp6T2m6vSTnBrrqOFJJAiAXKP68qolCH%2Fiwu7yT29VkM1lmj0TQOCjjlzVo94i%2FqCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMd88PyzLz%2BK32i0HUKtwD9hIZwxlyMai3P%2FQwYRPLekXkyq1Tabp2T%2FHnKrx1F2yl2iHPT59RKzGsEDHeezL98lwsrZm3thNl%2FkmltpJ6YZtImRgaemMN3dG9mfsSgBa3tZfrGAZXB6UnjKiiZDLWRMcNQQxtqwfrZWegBnqAdNz6SNldyPiXsilopJz7QqkkGDqexEDG7mzQF70bOSIpgWWYPbdaevxBLIBg7XTMTQMeUo6SwVrV%2BsJnULTJupUUNmh0Pp%2BrLiiCidSeAzIUOS80qe2OA9%2FzsvcqAg6xQ0YdRSM9GaFqurW5%2FtbOU7%2BHhkYdNCcv3yC673oT51AVFL58LOsxfKZLRbmgpcOxNVFdsZfSPBp%2BYr259vOlS0UNGpAL8%2BqdkH6NyHwt6fXH6eYexosmGLEBDSIZxZs51y829w2zXM5WtWw3heOgBrFDlOpQbgTuy%2FMvuwlyLF4HUg4sMEvveE6KRzTKts%2BEfLkUu8xpPyrgp15tMYYH9lAwDBl4LyKKdI8ffak496xkn8GlEz5GpiVvob%2FZRw33%2BQQjG17BPXBRWdugWwR9CrrWsBVyNlK3CjHzboLcT56%2BZlZ4Ybva5ZZTObYlihJPyDdPOxjLfzZvi2JyObP%2BPquLzScyAXy66pBlnaQwu92OyQY6pgGBNemgDeofdd3X7A1H12FYMFVsW9XYrcJXVWC9zORQP5IB0d5RAcNtrGosEGLcrx%2FosfkrO3GlKHZW5LTBjMCw7yO9t3eO1JWLzCGew1RE6xcR8C4y18Lq0k76hNODVFtVBWXMJEsq48elC8jAnolaGNART0qU10%2Bvs%2FYlb1uKi0GfWEhdQsR1W5kIG4Tb9Vq7MtphO2unXJGkMdv4%2F8Q4cisV0tmS&X-Amz-Signature=7789cff1759b93037c1bce6c2ad8633add9a1241789935c9cf04601e2b236e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCP4EJV%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1dmMJUNHMduLitHk8zcFdYGJK2cCBr2IuB8p%2BzWqilAIhAPoMm9VXFZtij5AStmMXjrqnTdcgK6bJunaFsDAWeCUKKv8DCEoQABoMNjM3NDIzMTgzODA1IgznlLXs2%2BBzvq1owskq3AMxNtJkTkKjWOOTrtc8LlbsmjZ0JGL1Dl3OshZvcUo7q%2Ffgm0wXGdFEtswyUjUA4S778GfttvssoGbvOJ2AysX93yVphpda0KQ%2FfwhcyDWEzshFmTHOLRjew9rjuIPhdRvUI1W5C6gxUsQC9FJxND5W8k792h3I4aXyZ2hhSYUZmCB24wp5vH3nL4vbKe5uW7qJW%2FyBmnkwrE8Q4dAXLvVVerRXa5sgz6W52JPpBLwY4wYSLBc%2BvTZhkRetxZFzQoAPRPHaNmSZsxbKUIcLW6YrOR1%2Frk1s9CwfdztLoKjpiijsFg49cCycf388JkZmZOciBbPNQD5urxHi6ni0YAKA9b4GKYxHbnD51HVMYhijC2CfIiZE1KYe8si5Rp3dvt2fXWXMhSMu5UE84ZRel6ksdjqFKqAVUdZLek%2FBz5XxYUhRRWcyTI2EJXieLKbCGh0ZnT7CfmvHwsyFgKmqV2zFysUT5BFm7wJDouzKoHXjckABSlPQgc6hCUDzzaigXuX6T5KvATb3Kng5za5FsfxihrE25oBMD9l%2B4vLj052cButQ82Sf0Byp7IA6Jy%2B7NPDyXxcj%2BLN8NlDXr90kWF44YtEapGoJCHJ7uVcgtfREIMldTpCoTy6Ka3RHDTC83Y7JBjqkAVZWresPloy5mWVBea2v7%2BJMp02AJ5eTZt9iD00MuhXJ5xnzzy%2FavT0nTg%2FMdG3vvOU1qvn26p1kYpcetMZ%2Bcv7CgdDU3KyZN82EBuS4RJjkAeI2Zsm75zVIc43sck7BtyKvFZcQyL3WiLUMPtfUa2etRSvyOMKOJPtLYnwAKj2UoKtGXyjgqjObYOfYB%2BNuQzBmfVXmxPCmkA1KjCzU4FLQP4mv&X-Amz-Signature=b281debfd226e2d1a426187fcd67c69554e779df7855ee62be7b526dc6396f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5Y2LJP%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNOvn%2F7du5chSi4tKw3tRE2eJu1YHFx2bTtWdR2H3B5QIgOdCiYvJVeNOE3lCqTxbjKTsaninisHaSqPNbfWjCipUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOVU1jPrpNXzufJELircA3m%2BxFKNRnFsxaXLsNaiNrQ%2BdQrHD5dzd%2BK%2FBUzDk05zZm1lY7km8wV0y0GZWxvn2Wh674XYHR8seK50ir1Vdodk4am3EBWsNJBKj%2FbUGHIpP4DmzONlLZA3E8baFTDtRMuPazS8AP%2FGTN%2F1D7dhLpo4w0enxGB%2BuuvHL%2FoKlafbxWGwmpCWYEVFjpGoxzOh2Iwic9IbxdTa2RXi%2F25PNAvz%2BV1tfl4XHKQD%2FfR8PRWGqsKgfh%2B7BEok2qlZUVzsDROYk36H5l6jrO%2FjRWxSxnueUHbNZCpaNEcBk%2Bv0ez9QwNgV%2BQaQV9CBDFcUT3P9I8W5HIcaUxKN%2BThTahKTz%2BkkIm4aHDF%2FD3A04DKKGLsaDhoqBgOZqFdxfjiAYrMnzJRP9jnOZ9vu2hYsJzLJno68WDTZbGNquqIXKsLhS8Ky3RltSnoUpK%2BuZvLkE0314AgvS%2BsvQfKbdrzsAMEhvMPMzrSOTJmk8L21tWIFIoCXgCLH%2Folk9dNpDX5OaTOG43q8uB6k7zSVT4vWiMOqC7IcK9kwS2un84ojDtPtfH29dDIzut%2BDlAXpWXKtytUdeCuai3lk2BdD4Fu9Lf7BLs2l%2BOCGbcw7QWgA%2B9%2FkPph1%2BRWSNvWgWUOR7VPYMJTdjskGOqUBLiUMhtqYpZqq4RQn7Aa%2B22R5VputCk5DqwMSLV%2BNN1DMYU9P01eDAj9yHqaGK%2FR%2BGvCZ4WGLX9gELbtwpMyZfDgAXa%2BjUe6SJgLmLU9jj9dqzITysUiKlbXr47wAOgxS8Vx8OiEQiNAD2vXjlReiYhh5%2BB4veqCMntJLUVBTG1x20RMsGjpcASSmSUhABoZWlhabDlvCxhnbQEKJ57fnNa%2FJpcQF&X-Amz-Signature=bebe3f332f1ead0e8611dd9bcda5073c9a5a6d272c14a9685e824eabe7802948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=170a55642c1514ce9ef12c56e6d53aa9b6b4cf5cf154c93e13058e2b04376e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2CZRU5B%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBei%2F2WwZLIr72rLyesv3SqpEr784gvoD%2BfS80sBp5UgAiEA%2FUC63yPBOg0BO1dM6yfVeGV%2BHWq8Xgmnm9B2ytgEstAq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLiKeIJ5XtMdvDn3IircA%2Bl2tX21KYX3%2Fk25lNzcXjMN3UA8NE4MpoiIurwNHHhYTUrFjNBa2IOGJ4TpcIB6Hh6AC76QMGv4dqkryoId8XFGpGN8N8ozEcKX3RaRspv95Vj7OPdKFTQDzqlyMN1GMLyZMUXW%2B9e2HAZDM%2FlTu0Du4O%2BvoggoSfNYqx0I9te8ap%2Bp%2F1tQlvZoyQ7GcMOGyYq7d2u3oNddat7KVzcufy%2BAYAgWnB8uEUnKTVC%2BYtIDpphQadOqpIG2nivJFqqQlbu9X7VQIB1xN5zgVXbn6DM5OAZOQq%2BFDgGVEkXQsnyaMEEw%2FS%2BdP2MUHGVP8SXZW6Rt4PJH1YuhgB%2Bb8sqdEffWqL%2B2sQI0tSVUu4xV0M5p4%2FspNRTYJphfN7PABO0OptNSUOTrty0aEo4EnnLt%2B3sNkEn%2FDC9RKyVHt6GHXvgXv7XjI25SINR7I6eHvIej56dE8Go305HFgNN2YOLSZPkdpM6e4q7iqgqAoFOldw6zpAr%2FSSufA3YTGeMzrKjGV7FZSFwEF4ebE248nA0PU8UtmZ8p2jLBfgXHCPOrBsdL%2BkMZcJI97h8kVsL0LjJQkf%2F%2BGydqmayLrLQZq5qLTWan1k9MAYTiZ26sR51TqeznKI%2FPm7TKBblLlbQ9MO7bjskGOqUBVKUswAeWxfWHn7oTyUxnk1yKTgEPXvD1j%2BzGyta7MuIhDnpQMVMqw%2F78WRMDCtEaDQ5swyynYifzu1spkWZdxdzU%2BLsTKv6y639w2AowelaaW%2BSMCpCce4K%2BZUfoYhryAMPBLN4c7RDfsB72bV37NTfGR%2BxvX8of1tfr8vC09shg32ztmAi%2FYwuFAEBlMq5Ph8gBUZKs5cEWx%2B8fhREQr2vD%2BCj1&X-Amz-Signature=289a07cc3bc8c5e4abe2ac38c2f7c73b0192fc5ce0bfb2b9b1efce22352f809c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=cd3483f14165c5344b82a710fb7713541b15bf9f52e24d9ec3e78fa4f38d7449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=3af7da3c590374c16753b54de44f8600c500717375cb5ffdcb45b19881b9adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=560aadb21041b2018eec3bf88b95d447dca21c6986b4599624406f6c9b45a998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=49d16eeded9ecaa921118a288a581f11c3b84063fe781baa9f2db5d4b3b03417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWYE7WY6%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdwp2EuW3s5POtaZxd%2BvmJ8aYO3dmioYIPbNu4AIthrQIhALjQEdehuXHtJNJNQlvLhOeHN2u%2Fg%2B7ha6%2Bn0C1tnRUMKv8DCEoQABoMNjM3NDIzMTgzODA1Igw0RDz1lB8dcUyQPeQq3APg8VSS7vPwx5RVgepnYHpFZ%2BuHRq5omaZbDJzZfQ0vXXGjeh0cT%2Baao7eXMHBM9NA1i%2F2Qu4OEhlqUMv%2FSHIMyXtrnJedIfOx%2FQWnKwZWfoV0VFbXo7Y4spMlGg4%2BjrCy97IUbxqCgmnLYjpyxeARwcv6nYxCp6wphyeIAeR3O7dleTlJQcEt6XuUw99ULb5gNSg783lhAhlGNAWhami4L7Srs0husx0714lvB6ixQVfxH9fukVPpF9I00bLek9Q%2FvE3w0kRqvdZCQjM97lDlqagHEzPqSkXhkNHMX%2FQKaHeDKQIoRy0wRtVx%2FktkMyEEjdVRjLI8uLUug9LEZDvv9v0c%2FKINSkxnXZQwT71jLJ%2B0tks%2FhMViPsXNyf6N21Ntz9%2BDfeCl%2B8e6leoAd8kn%2FYhEb1CeCdlBXhBqFgMvLM%2FOeaz2OID%2Bb0UPH2luH6YswT5b05NV%2BZHVJ%2F7X6tHf82EdRQ1k83p2UG2bTlc%2BAUn1XEXnv7DFOWjdq354NP%2B6xznZsmQMZKDyPy3y6V5rP0y9TAB%2BgbSW%2FnV9Uy7J6BJPWET826a6MM0hKpFtA9vtzjVd42LMObrZZ%2FeRzzL4%2FAkAVJDVzlrMDLPlQqgOglOg7eDWBK3NTkwM8kjCF3I7JBjqkAcG9mmX%2B%2F8ZciROaJXGJ83sdDX2ZDNhh1LxbSOzK8mJ7iBa7dZ0rH4TD8tWAqC43k%2FyI7lNxhOGKNUhArXDSiQ846iqmbuuf%2F126OO%2B49ZdfcFI6By1F5pUtpzkDJKQPDZ0AMz6%2B5xyiZpPcRBKGh1SJSowMQo4%2FWFRkM%2Fl7ffnYO%2F%2BP0lpVq%2FuuX%2F4JOn0rjGqFV%2Bye49TYaO%2Bkm9twTjzZFgnS&X-Amz-Signature=ddba11935c8148b4f6c9256a262631010daafb004a8f7bbca2410577b1c19426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=9fe55873cfac8a627168e6a7b48d1e1da68695482db3aa6b39cfc2980f53771e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=dde7d6f9bca5f3d2769218cf6324974a1af94bea606c0420ed4d02821af94395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=560aadb21041b2018eec3bf88b95d447dca21c6986b4599624406f6c9b45a998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=943680f062fdae28e207fcf7571feccbbfe8f22b3cefe4790aab7e8f6975b00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=a1fc8cfd5162c609114f8fa9b37050c0596e5f3d859585ec190dc7c74b6300b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSV4N6P%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1YITc1CKQKR7GBZgr11fzTSCRngxe6JV%2Fw%2Bl145bVDAiEA3pB%2FNiM%2BVttnJva5aJFyTHp7jj1ehcxTYngx%2BPSEyx0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJh8He9lKR8scaI7cCrcA7lwDvas1Cc9kcvdtAAp61PVP2J3rL3RDnHxEDRjkSH9oBdVUfQxLISJD209iANMboNHWM7Q4U2KxR5B%2F36oW7yGhMwF2nVdHE7aN8A2D5zJyXcLC1DwWNMfQjsGMBvl%2B09lRd4TvF5%2FPXsuNx%2FNKYBIKHJY8x7draZiI1tEF70QiMA%2B8AAsZboAI5Pu8bNHuYT7ZDUpZy8MznOtuMnqWNZsRL3jPzDj%2BGKvZxvVaHJW2aOXLXEhzc4RbmkS0hRpin%2FyFMJiYzh5CvfSVpYndSnaequVW7RNclgozm0f5y21VTwDGVBCGZmg1yO%2FryCGOsP0TVpFgNOjvacHFkRN9iPJCo0Jpc%2FZhQJeHG2X33dHRu%2Fz6OzhB5accPB0R6uUxqXa8fmp19ssMDZA1v%2Fn%2Bdrrs4xHeF2hf%2B6k46OR6mM35wP4%2FAqxHbKvuMcLeY%2BpreSPMM77tg6EfOkDv50KZscXyaWU1lklEJJ1fgq5yA2T8A%2Bd30jQfKCKTsryKyFpUGIoSYsYNREXdUYk7BFDegF3JDPgN258ntea4wTSEVdWv9r9VKM3JnERO0F%2Fjb6o9sFJoCTyjwPvcKuk%2FPj873UZImpQ%2F%2BTE2cR1CKqAv%2BcpHjHgSVd5E6Oc4pivMMfcjskGOqUBO%2B%2FjEq33wHLY66xoQJV%2F4S2dKgXB%2Fa0JcEo6gLRV7%2F5B6hqKjEuxYKBLYqgDdbCZAJ6jwQmdlTNBO6lmz9rwwJJU5fXFMNNCC0s6vzMpDWtO8erdVv%2Bw6vwMYD%2BvFvb1N3ydOxsN3xPPsDsJ9Sn3oFVhSbZcjoJAE5sQlKGDtjRiY39NE1PuryAgTSaLx9LwCF1ljKDY4j8A6lz7%2FZcBkV3nP7ss&X-Amz-Signature=8b714edbaf1897155627a2c043605c89034bd11940888ddbe89241187570701c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


