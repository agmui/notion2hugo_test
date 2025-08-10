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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=df9ddc0bfed45f41d4f82b727bb26096110f3ca12adb68992f68cbd29fd0e428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=e7f7c990d7099e83b2640a2d63043dbef950c3b9f82eb0048223aa3f916c68d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=fbd6926f6393b13f3b0e7d978080306364feb3a52d328baaa551f812656b9c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=a0efbe9e1e1efba6ca3048db3eb9e144e480d6ffff2a69bfcdd9cf3490dde447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=b819c46f290019559c74ec7ccd3d733364f219064e1a69dc61af5e68b856a981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=abd41d6b36c17245eb82141e903f02b8a35b5ed2b49f5fe810ba5d48ffa670d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=8605ed05e90c684607549e00f3f95ec9c10b71a6f957819e9615f4cccd20c655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=7c6f5254074d7ea030138bdcdee0092316df99fa42ef737210e6ad50cdf84aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=2625a6845f31433ac610a6783c09720d06437a7d8413999d9c8d207d69a559a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=5aca2bff0cb482fffd03fddbb2fe1e3e445760f164f3a624c77333fbaef894cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZSMW6XP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdEofsNs9Xr5fVlf%2FhNpLzgLzr6BwdogRga2F7JDPmGAiBILrVwqkgu32XpueSUsCXM5wsH%2Be7ugLbQCzUkZ2zk%2FSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUO%2Bn1dcjAA7tHB8wKtwD38hBt%2Bj%2Bc47QnET8Ob2MYxVCKq9pIGYMh%2BoZuhPJvr%2F%2FkKPCSn45FCO5%2BDZ68hRBG0Ti%2FqWANBD%2FqyCDHw88muLFrQzKpIBUEQXVkFX%2FrPrPlp9arOa%2B04mRd22WdwH1qcTl1Y1CzpJFUHMO2348%2F2hD%2FEiFoK5h2mQQ4J3gIfKoc9OCfl8i5FD0jGjjlWVSs%2FUndJRGu%2BM%2Fwnhbuo1y6vVZ74PXiR9z1H9hw5isCExxiBnruRl34CBhR5KVV05KCSSOhr6zozsLMEteaJ85KxBuCkTJgmEAHFaHlI3XRrUZv9nxZYAZq71UCAj40ufl6ueEHXpEi7O5xOm4Z1KAHUXwoOdrYvdtAI2Y1y252XidKZncJL170i6mQCF8Bjpl7mCqyeMzdOsLLV0VbEx8rXmrw1S6dj1Ucn9SSmczcKo5D8nr%2BFc3fUeCI85qkGajxxNfmev%2BsLtgi4cRb0qTuuKOnQTdiFvgNaYPBjDAlZrCRkiNBxEH7weWfvP7qHB1Eaw3DbuztGFWmds6VuJl6LFm0Up7EEc%2Fg8Wt1p%2FPxX%2B%2FSXFW6QzlFaJ78rSLnkEaJ1Q8vOxXeW5d4PMAv1Wy%2BXW8MBVKCFWtbUc61seG3tV7Hkpvvm0IQqvNWrow3%2FXgxAY6pgGnI%2BTV%2BZhhUj3hMlWgYVbMBcD1IsQDksIzLg0h2W4prQ76qxni5Dm7yp43KRknuTHByAxNZIQrsWKqE56GEl45jHI9dk9SKAHCg598fC69W1DyKaIPUyboq2eS3knEkQO1LrkgWzF4%2FKURqnmLeW0b13olFqPYn7gbBnwUfxRYRqGHBlOtL2ye%2F5H3%2FBpyAvDbuM7VRz0U%2Bq2y5vV2ImuCZURJ2QM7&X-Amz-Signature=92bc92654bf47e976ceb1f0934a480f13e516556676d5ef023e3158773cb280a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTZU2ED%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7uT9xLqcbttDB0KVtQBoVY5mCJa2j%2BKzlkQT5Qb4PJAiEA0VYY8TFSvY8PeK1CZQH2mXEaO2jNaP180xt18M%2BF8bAqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1yZK15ttkYPDDF%2FCrcA9LCIZNohWyHf%2FXI7eJi9hZyq3TTujZfQLO2rqP%2FEGhvavmpmLLH6CJtLQEbqcrRAmKIKteSdZCmVXyejc3p2Chbs0AHZk3tda0cjuhpyxAyeJKqrmkGj9ophFbHNT%2FIscTrxYedldNz9IScd93iR7oLRAPY%2FyUq%2FSBpO2a7vguRLzo3%2BndNrPLPzZAVm%2BMq86CRHgDEQnjjyWseaahlzfXag2T1%2F7yle5IMl%2B29K3tufvNKlLlqGskaT6g7JFWjv5w0Y9ahEF%2FYZdhumuPIFe68TmdyWs0bP1ePpT%2Bh3R%2B3%2BTueeWPE6qsfufq%2BavQ6z%2BeTBZyd2r4quGBgruuwtwvm1JHLeCU172kACHuLJ56gO3sUrpjek1LeEcq87aVtXgy2zUrCNT44D%2BufMb3yjCdHEGYgnhMyvAde7iaG36ckmtTJ%2Fe2lnh1UgNL6pEdWJaUwUnf9YLykT7ufFQ%2F28cqzXQEKE6m7LYG7Y1EhqqDA0r8GqOU4o%2BB5lerYQH4uLkaF06JrRRh83mqRj%2BAhe2D2LUeXeSM%2ByiSaZPRzb7iAVY0Td4HplQ5N945Cz5Er%2BR2iMQYvI05qjA4In0DWm3X9Mor61y6rEjl62Q6MbaQMEixq0oxnOWJDALAZMPP04MQGOqUB3%2BJXtttdV3nD49%2FOq%2BVcBUejReAZg0%2BhOKLs1xqQYEb15cTT5WyMlEJAjfbcfnQTsHx83RZlyx%2B7QROJa5QJh%2FaI%2BHCFvgHRYMtX%2F409BVsAdODIDzKKZ4EnnhwK8timLIysGx70l8z8OKyQ45skLfYuxpcYFNPaEoJMiangIRwMaHG6t02cvAA7PeqA1a1EeZLLgjDb3TIOb%2F1pgRNncAbYDnv0&X-Amz-Signature=bbddc5e264116c9d0f118eeb59dd7f640c7b002c1c5f7c28e78031feb37086f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBYDJLN3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjurykew9QYP60Ts28Y%2FE7PJrSpB9l62maSUcpK8AM3wIgIvUIe8ipgxH7dlIQvCOYfBjdsh3dnA6IHWeFSEdzP7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxSdokRuUefygziJCrcA12vNV2MruMpq5%2FiPPLO2JdK4ERhwyj11QA0Kx4VfoOFeJBz2svFEq8aShNP24pJ%2FK4kKF%2Fx9raaOD7gngSlNo7SX9tosSf%2BsZ71XkjwlB0lqttBrAuQRakfmPbDexs4lHPnJRsD7mC%2BQyU219aRq5jJLTv4%2B%2BfsZT%2Bx9pgcsRg31IilSffD0%2BtUWW4KpLLaDPQXvVSsuDFJ%2FNaCcPzK08gJUkkBSOIO5llts36TFUN6KlG4kIePnGQhJJO%2Bof6RWroAMazyb34OnPCphv88xf%2BFCVtxh8scIOGBTjd0KBTDF0u7KZHMo6SvtMihDLcHVwBNkG7jV8WFiw7E690lhR6UnCGlFr4e2lWF7MY1eCdYO1vMcyQfv8IiSRX9dXPXI0h81Zj9gSUGkS08Rn8iPJs4ppkm5w8klVPT9Qw4aaxQHRI3a2%2BYnM83KvmLavPrpU3lXUTGlwpPImWnq%2BP7a6QTSVaoMwDlEoaZn6r06u5%2Blm9YXkbPYOUkTNGlgFzp1WB6KmJM44oVwEtIs8xdZDaFOvsLsFjvslqScu23Pw5na2YKnzEe6rJkKNj%2BmjfdVxRrX4R1RS0X4fAcFllXbyXuvdNE8ZiVp7fPKxhnaoyff78sF0a%2FhxaivTn%2FMPP04MQGOqUBSnlD147zALRMSfY9EArULM%2FKcFVZuYurmtuK%2F4fdZ%2BEA161WUgXpr3DGcKOf4XbLlPleo%2BEXwjWWWyG7bx9uYbEfTmrAfrDBFWnyOByz1Rxm66hFWpTNoSFDy2%2B0dPltBuFZgMS7a4bo2gfetwT%2FMeqsS0%2BgcUCcxB%2FBM3e1WpqUx8KcUb1AG%2FWGj9B0U3ODNOEmMy1g%2FgUd0wGUoHdxSnx8OcTg&X-Amz-Signature=743155552b324346d44d11fa098c3188937bc857a507eedac717f58bdb5d0263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=6464fb0e27d8c911c2dd13d11ab2fb40347fe2ec3896d15871d3beee7e409817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANO6762%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEJpiLBsRNVhjtRtUaVQLit0BQxTA6mKSjEuvCBeGQCwIhAMnCKGsRS8xyj5SWkMcIuxZkYYFwN0v1PTGxnFMkiwgyKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBLzwxgZcIf9SGmWgq3AN5H6A%2F%2BeDdD3%2B%2FetCihQe1tPwpxydS26zY9E%2Fc3kTqVcefAXWGawWkH5gCVNazl75zInWpMNz%2BAJy39iMgCBf72GhkbyP9%2B9tA8%2FkXQVP%2FvocD4t5oHIuPhdvEDQ%2FkIVd4vulKXRxQLu%2FIjWJHoJ8vOScRTZ0ktIeFTCAcQSGthA0ORoDRp6BEXdk7ALkj%2BMs4Jles%2FnJQziEtZkexk%2FOjbW2UeNTZ9jMxfG%2BxNx2dWpWxiRYOC76NDN7WQe40Ks8ont8r3PP6h3DS8kxZAXltZ6yjS0pS2cIHWESw%2Fq4%2FLJ%2FGcPeP7nQUuGUKoEfjdKi10z8Q69H%2Fqc3KzywfoSLm%2F6j%2FJpegO%2BCc2PNEwWiAilea8E3SsLIqkWT6pyj4no6%2BWUQ%2FKT5WN8PZY9rr4iiGPscJXhWq5UmxJTmruReNRAWxTYEY4e1Uo55YEfLOH1zQs0g1BjaBATpWAvaM%2BCi6ykDghezUvltSI4LYdrGzCydm%2B5k6%2FKGQBUQyicQ0dWid%2BoUiWNRg6aE9BB5DjMYE8QB1Fe3WTOik1bO1GA%2FGg8fRAs5muu0YvjGLXfe2iXZrLhA0PUEAMQY26AxF%2Bw56L7msZiJJxgTDfF1OW0osz2tf0VDs758FAynEKDCc9eDEBjqkATBoir6Te5bi%2BwmMuLvd3Uz73cvWyyp0XxDF2tJk7Jj4n2Q4cHl5e55Y4NfUmr77pF1iLsTaIzuffeFeOg3zTB2YQLVzBYtRy8hS%2FQSxhpwGDs0XvTHlItENN0suE5ctLTWcilfFaJT7skTBmUF2wosc389iHK1eu0SHqrDcULzbZakNmuwFcB4QJ%2BymYi50S72NuH6wxKmLfPxRnvjX0C%2FSI9dS&X-Amz-Signature=d34366e5fa1037c0c6488cdda817a2552e9ddd3483f199fc86065842feb5734c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=be1dce55782a8760611b6b4207ae12bf6e721eeab0250f37e58da4ae07ddf71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAF4FYJV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjw%2FpzUThMHSb3gK%2FKmyKSvAxXeCJU0kWFFZKvUEnODAiBhoMwxoOmXuRzl4hnTFiO0MxTwtuFPqU9CH4okqz5FQyqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1mZec75GpgK8bpCdKtwDzVdRJQc8%2BydAcEzIMxdifhc%2BExXC3kI408sHeSJjH3JEM4jJ4VFzWYaG1PO3ioZuZVFpFA3ocdleirCDUtwW%2F10JnAPiv4qKUiG7PcgP1Rjai674VDpU0Md5mZC4RuNua51rYNSpRGSw6Ukf4VlfEE14wK%2BhYTXTR9nxBoMZbAXPWRNGkXvrC9%2FQJklaOJ7mzQr5ZVR2INZqBvy1KrMy6tjsOAhUQ%2FVXXOEtG%2FktcMhtjFIShxkd%2BUDJ3FfRNVE49%2FYyCeBlRt5uPzOnLj1Sr7X8%2B4deJEaDwAn5iv759%2BqCqqOMisVaIQ4uJ1MXi5DBEClPHrpAg66oc4z0psp3oENAgdgWTtI9MqaEFQVEP0M40bN9GGkLDjlyiD0BgX%2FfcI0JiodblA1jC8WpKn0kHCWpqqSCItiri%2FFW3MB6zPiZ80cP5%2Bi2gjbilsp693M9Bf%2BLpvx2kFajKN4hjriCWmtXpdLALC8wK7S26CK92e0QoDhOEsvzLVB7nBC3zkOEhdiUcYxI0flatoVDXfICq0cjhaN%2FGp9tKesaLq5KwXSoW3TVhUjfcvHxjtZw2DCWmeENTHN6V5FcwC6XEtV0iYTI42YLBGNFp5QLBXl2NDgs0560Q6Ovx2EVvq4w%2FfTgxAY6pgGBHQBHUMA9SPcaCVsnE0FrJqmwH7nAzX7c7R87BaKGw493Jj5BX3JgCiTY%2FgGKMu%2BSXx0GZyVy8gTVyeifeLJ%2F8SDZJMEhdGpCqV1MBqiXrk4vuMmJX2grk8iooqi0TGVE4VLy20tKXQH%2FZd4i2ye%2BsWY51ChhWAGJidShM2umMeYVW4KZ5ca%2BizoFA%2FuiII1z2g8non7KqWSdclHVF%2FlGcY8Mr0%2Bl&X-Amz-Signature=e234f027918c9ee56734dc615e5a94100a11c9afa06d4d6de03ab6d7e9f5c47e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=3b2bff2e7b99fad56bf238918c3c3c303f9aff6ce714639fab5c9e562ff7fca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZV2H6P%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8TEojxtrkIRJkv7y2D5e3U1RyvCfSqDeyUnyekXE6EAiAV%2BgJP7Mq5T7Pai7L%2FR3w%2BMPqumz8viGa4n3UDBjSyOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt3Ln0Ri2V%2BZcyv3xKtwDwIlqLL8iKK5Lml2qHSmKgaOTDXL%2BlqmYGOhX4c0mPGcYY9LIxDX2tydSzdZIDTbCWwVR4uDz5a6LPsK3FklwHU7pDBCaKiWw6dB8m8Pl3G7BPL%2FVBqz%2BOvAHqy6pbFMNenteWWpozVRo4N9lsIfIcdh9IKXMFtifCtmYr8XrdNPvXzUM2O%2FNhHnQiO8CbyCJpkAEW0J5F8HLE%2BO22WXydpI3OzpEU0zU6h7nJ9QS9ItxdDljvvwWZ5ZRzb%2B6gl7VdUtSVSyWzMFUEU9Nzkmx7fCPwQwxdGNES9vmV8lFmS6lg7FAZQUog8B2jeqByD3g8QqqDQVH4wnbxg4L2%2BI4Kcfm5euPMraNqXf%2FfORnd3ts9R%2B5Av9nOIUSJyHzTLT2%2BKAOLrY9eXmI2Eqigl0SjT7i6uDWtUbDf%2FHgCEsntXutq4dmhvn%2F%2Be1rOJmSpIcSd5%2FHf1dH5wSnR7Kp4YUvKQ4M5KfmvhiG8GiRcfbVsydC%2BTjEgievM5qEx%2FKoskBcql2pbAtPTl4YMc01r%2F2KF6v9Ggd%2FBMOzq1qKnrdEwl0Cp6owKr%2BrR%2BFWzQ%2BzTeKZg0aFXwN7cBipkbsSEDB7a9IgtFQnOat2oE792GoYQqXptQBPjN%2BJD%2BAoxcMwk%2FXgxAY6pgEx0SBb7w721K8GjFNMdotVDfRCnkFeszDpVbicFZ9tk7QjgPyaJQIvymAp%2FfXLtJUW7et5B7CP1IMWx%2F9ixAwS6z%2BAKvtHQkZiGEAMnXaaG2iXLM%2FQbrDZ8j6ejShkZvDSfBBM9ynTgMuAfVQQ4Y8CiufLreGVVosd5FtW8jA16EkMoKJBw2By5jyAgzPVv1Hsmaj1jetnCtBF8FsPEjwI8uEJEhJ6&X-Amz-Signature=75716785d30018a301bc9bfdcdf960e8ca8fbdfe17a89e3e82dc47da5669148c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=fa4fed7fb42831081edfe311a2ad1ee590a394d5a89ca8035303d17c8f656762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIQXNJUH%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnMexxFP47gP6SHqEcCWaQOzjKC1iD1NOQKup7eDbURAiAsTXu8gBILRLw%2B7zFhSwlVQYmTkFufbRAHFSjmqdo%2BaiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiaoh4mN1jCEC6MHKtwDCMe%2FfQPnN4Px0qlflrNHzXpKKlcMGMoV4aG5Gb7%2FkiprAkUwG6obMWga%2FT%2FFnq%2BeQwONnedJ0ts0FVNYkdYTeBywYjTQLAk8q7dp%2ByBRttJ2frGULIY89NcxaW4ER2bEz9e9wq%2B0EC1TvLgOP4tJNfEHZ8lljHyHM%2F7yXqQvSCe4MoP2Rk7JsuIUPiMH8aiMD8JBihgnTnaotZYWa3c26DSpZXazZcKaR3gJL1HA63Ouu7NdPfkPgzu5niSh%2FvtBihvjKynKCNJantty9ucmmfJs98cJukPga3rM89EbbeXj1zQIqkaLLH28nuvqyuNfUXvSDrZ3pDJgaDxAk2PLzmuQd3g6N6dkkGyaRGgZV7y8cA1jTORYrYADlBtvSP0R%2BAksjjgzs7y7v8NwENvlyPY21GHsmvkpZ4uA66KuVsuTuK9bu6vO1BQoisVPwkxuKms2euDxQgxzJKCieSiOyLrytaYY3UEHJ6E9fpZeWc4qdPgaRhaubDGgr3YkcT2TPGgeGObzTOV5FJ2d51c0bZ3L%2BhSwG3bz%2FHNa%2FNvnwcNe50k26vXBBk4RnKYE7QXesUSqVA1foUBGlV6zuEY%2Bp6BuXgJ%2F7Gt8FTx88WlFqmGeQeOY%2FufyydropQ4w4fXgxAY6pgFAbfVRPJ7fKS%2BLqaFvu42cNpoYRVOX928M0vPCB%2BrWM62QMdsphp1pJaXeQs3V3QsXuXFML6JEch6xR%2BiWdwZsYXW02ml5sXbcQ0SoRbXsWrctWt5FRmv9jw0vZ5f%2BI26OPsvPQ0fj5jhDEj1%2B0UbqRvjNc%2BOM5iEVuBWTE%2BwmZMPgbS12GK5BP9DtJSuKkEGL%2BGMuj%2FkOiLtqmEb8fRs7%2F6y8HG9w&X-Amz-Signature=2a0318b0ff5bdcb83182363162ea788b7a83caf4e7a1b416f67243e657b8b58c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLHAA57%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjbesEhhFPctwgZc9D4lFVvLqf5s0C8X1ygZW5NN4eYwIhAJ0OxlTTZVSLQM9oIl821oC4CpATaG1iEwZ1WtjHdXWVKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxA7k1TXVDfFSs1xogq3APSTsygVc%2Fokv9xeBxJxlxL2YCvLXbB7cZWBG8WQ54WIwbssQq%2BMWA6WOnZW2Qjj3O%2Blj%2B1Y1Ylxvo%2Fc9zhbD33pMVBjvxAgGw2DodYByxp9xqdczt3RlG9VXmRVjw3wsg8JGw%2B0pRTqTWZlLj96TvrQ1dWsPzQ4KPSV7s%2B6T0%2FEMHhcHNvmfJiPNgrFlOBhY9F7Wyzyb%2BeIOrVK6ZOwLudXstXhoi%2Bny1P8ShvxxXWGWNcyKfJL55GxTcX8OoHC4dDlWeq3r6%2F9B%2FtMneuvUfyaZYfwLIwSz4Wp4UVTS0WEyNVZt5U%2BLL752SQzfYr4jgxaNAfvKAe5zsKgguADl8twYrUA1nhFnDBuFAscFL0VJB%2FRwIWVpgm788eS7Epf3ti%2BlF1Sc4MdqJlu90NRwgDC0q0Ze%2FSwgw%2Fxrycya%2Fkxv3JFOgBLak62xfisaMzWChzv7lK8SRwwElSxClxdLAAkUcx20Qs0AAxfNTBlehp6SinuifEiNFJKhh77S3VO8fgqIs3KK%2Fc4zb2%2FG8LB%2BS5lhWsBlM6GigLnPOb3zZbGHZheHMlU3iFEz7B%2BddmDUHgR5V3vkUhA8upyllJ6EVApfCizLce5xLUlNtH3E30qU3NEpyoMMfUUDtwkDDV9eDEBjqkAZThGz7yiN4oxCoB17wN4LseDdho0iSYOlP%2FhqMziElOFnTxRsafwjG7RkKtgz%2FlQWBRbseW%2Fxe78M%2F1dUL066WiYaBocpk%2BUtrIqbl34a7qBkMlRYyuEvyYpbjAl24%2FjAa8lw4TqZWAzQOhWRxewL8RQHlA4%2BAuioKP1EmCRunEi%2Bo3dg9ig1L7bFZgQmv9Bw8EIHQNJDwQ2s8zzygLCq4y5ANe&X-Amz-Signature=2bec52e3bbae98525302acc7aad2d09d883356f8d376dcdbc99eeb9400d59372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNALCY35%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQOfcjIlIgPKjzMiuAmn4mhRVLOrakMVRR669EFyzMBAiAalivZnn6fLIPdAocbuzlPW7ohDoZtKu96GZ%2B9RGqdsSqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwFgkPWV%2F5oElWL3KKtwDeLdni1QsBzQa3WNZUe0C%2FOVkcrIvoYlweQdpR3udLK0rcAm5Njz9e7gOzuN85WAQta%2FABvVj6YBP5irLkEj3zpVVVC4DcrG9sNBGM5UVILa8dIp5EoV00kMwRCqL4QThFnWEE6Ds53%2BrPGx5RondwwlYuaSAZm4%2BzMaf34%2FVjcbbu3paWsUWbTvUz3D%2F1PQXbqlhnslSeDuNMPRK%2B8yjYtP2IftZ2x8TeNWJ8Ma1Op28wzHbiiDZ8nfLt1Ao4jSF1qNSi7YB%2F1LmyEdrfV49HWbdvxY2qMgoZX4WY6Qp1aVv%2Bge5Q8zxqoAiE5NY7cNrzwBfPS6go5QHExC7JZOx6pOh8DPxB%2BZlQqL2M%2Fitoqfrpbyees4fHWFMdLQB7L3jwrYnsa4fv%2BrhhSv5Dcu9EDa78lEAXimwnWc%2B3SDa5kadEHFfnOzGZKentzzBX%2F8N8Wpv1Nsf72OMEJwCPZYG1G8awbJ4GlHYY5n3x3%2BxlfmtIO%2BaeOYu1Z2oDH8phu3EEsVrksqGouKiUPM0cXVM69pqL8%2FLviA0AhipW4YabwwCGh3iIrHo1PlQuWRI%2B3Bag9hikwSw1yByad%2FB6ZlEE%2BwISonZFWHtReIBm08rx77Tc9%2Bn9CXhQU4Tf9cwnvXgxAY6pgHIeRnEBFMeH5Czchraq2icBRhuqPr8%2F%2BAhznhJYkLqjcw9xpoQ%2F7WWZ528%2FsxMlIqgU4v1yfjJx3gLTK%2FXeY6%2BpDqNYTM%2FELo41tZfRtaapK6lhPNV7gLUaiKKeHZ0TSYYsXYkYqbRM4XbzWEPHIbUfUsyyyZ85hrlfTqJEdVEVpIxhv1dpo%2FxFezIRmy6IV3n%2F%2F2GY7NPI9P8fpGnjFu1bhgTd4h%2F&X-Amz-Signature=05662a813fed1942f4219dfc6f1243aef966aa726c7cb272a3d063ca376c4734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4FZJDJE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3I%2Fnaey4dq2Z1wEyUvbj2xcs1LytL3TpS80QZws7wIAIhAO4wSL%2B%2FocZY6snSclJ3eLm9WMdnJW3MuQuE1cJV2kVDKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1rklqIErZjQinMiwq3AODLphzEOTlFkRglFLTNJXtaZXzl15ATMT6pX1HRWOzM8LoEpEM7CqWlgyCTJIhzjcfaskjvZIVjyxdmkG8EQE2RD6VzrcyBkFoGqBXROOZOQMpfqsKRIDJkKBlAUJnnXtwdXuWub3PtuxkpRm%2B3veVPhAOcr8TkwLLb2S8YXX3cFRUH1O%2BWVbNmT%2BTq7hHJeX%2B3I3CmfPHBW8HlHf%2FqjjyPXaNXTwGDtgqX4YPOXTENX0xbCj1%2FJM7xBWm5SBXRRPca%2B1aWKiyLQT3sMxtE356RoHilIB9p342b8PT8qjGCh3kEIKHdwPjDYUJMBqH3jbV2X%2Bu2QgzNBa4fBmJJfs8LG20ZzdxikIDdIh72%2Fj7pM6qjnbqv%2F98JTdrPsUjoWMmlqieW6RCJZgXwyIkHxmZ8iWjvdZDEitgF34SvDPNMHo2bTZWe8Vi68g3B0sL6lI8hDcROps055IaLx2RzbDwIsqtUhNEgiudrMHJUd9MOqo%2FXpOw2DDKJzX20xWOOUUaUSlgq%2F3CUVNLCLEcpalvXzIl1%2BgmxsRuZ0nc2Tf54lG7eLdFtvgru7yEN6ORtNF3Xw7w17qFSwBLUrd80z03wmEOHy9SsRgL%2FdUb01LLQ2I8ckBVBAcU1RxiyzD69ODEBjqkAVO4Q3vKGS0VCQ%2BW7Ms1SET71RgbC0oGjxUA2V0KISCA5%2BvOsIu786oscqe%2FEzBeDl1wxc1zn7UxqnppF9agqJKgxbBzFFFqlrSK8hFximdU9%2BxR29DG9aS9xPaycHq5OxSGTrZNCzLaKr1uW0PsRWeqNQ1da5G9kmZ5YiWsv9807HXLVeAHBBUXhzEMAMGqnbWn8Z6nKbwCJxHwEwHnyb4h%2Bul2&X-Amz-Signature=4eadd0703a7fafc29ebf272cb1e3c1568e4ea025f551db733e0c04c44dfe58c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OTA3P6B%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T101000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFxRjgR4iATzHZEn8CHTVk%2B42doJ6%2BdaA4tRziQloBVIAiBUzLvyKurraNv1gHmJ1C92M3W%2FIo64gb4mBlQglNtAOiqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5ZmAVi5NshK2PCd2KtwDane8yZv%2F8b8%2FLtVS9HT7VRcJYjXCImhWA3m%2B1v23qa3fUOBN1BC6tVYrcfNxcrxXFv%2F7M7U6bD1oR5zDfvJlzzVSOSnuhh4J5SP5PgRBHaBTzAxg%2FIYNHmTz7bpWBTMvfPNnIY90M8Valu2vAkoV5uR%2B7qp82uJ%2FwlxY%2FEXcdE%2BdJ519UuEAtGflh97z8YsQPSsvC72RGhrG%2BxHUsEnWP6Ix6mgLEEVBPi6ja38LNElbgeF8kglzOgmgrxZx3IBPkIXKZLtu4bRCy27un0YMqijcwlYtOdUduSRKyVCjRJdDOpkETBF8dQSTi9TCrvR7yM0Ha0IB0Ln0WlhIZlwTAP9XSm2pWzojf6obGVCBMnTYMQsVWs4zm%2BaW8HNV82tDyssXDoR8CPIpG57Sfw5W5DLTSxUV0%2F%2FMJ6XW7cKUZunsY4mle0YM5aVbSzAoH5CPzwrx5v1W8wwds5qa1gf4kjOF2iURKFXNuQaHMh9C5FnhP3lBkQP1Seqx9UtqJw5BbzEjuA6OPkj9GB1099aa%2B%2BTlOgPsl%2ByzdynAkxAGI%2B3rXc1omE6W8NsMNTIZzJWcyj%2FZpaccvgQz5VkvcvKP5Db2IW8IocGSpmTRKuLa78iTljn7QKqBVdgWn8gwsPXgxAY6pgFCs1tZq2WtzpszEtAr%2FLdJN4zadXcVTIgsLTfiPxKflwyFx%2Fuv7McFt1gj7woTO9sKwLlNWO%2BJVbVyyX812n0ptEQVc0mjJ7wnJa3dsw5J3gTVRrtfAlWvcZ%2FH8akyPyzDkm004WINUI9xv2qPdxQQY1KU1quhn4k%2FwFSnzBm6wNxrAv0flSBn%2FUIPBrB45nFRP1ElvOjkigqJ6XFW9dR8KoccUo0w&X-Amz-Signature=55dbdb590378cc98645d4d8de13d3bf738340eeca611b2263b78a21ccda93701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=510f4f9a3401c70b85bdddfd93febc11c639dbf06dcc36a70377fe5069138aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZJB4V4A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjyuqDHaY7Cdd0KTovPafNgSiUcpml%2Bzv6jktxZplLFAiEAtLXD4jGR6fwBGyd8RHHGW5B%2Fld9YfkIVoM1gzldFSmUqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeRUfsU7%2BGMvjg6ASrcA5gxSsjOn2sHCpKTaUVsosLCo%2BYPtiSZxgr4HKIYQQy9r%2BrwYSeXIgaylMgEQq%2FG8jmdFpZPb%2B77Km6gGTV9x%2Bi%2F3Ga4QpgZo2kvC%2FrP841Yuusy2wmwemAoNskyz5MZUX0vtWcVileTUWLftF4GnYF09bVR6G4URN2sfMgcvb6cyfMyAWH2xrFzMtxz%2FhRTqarxoLnxDzkest0kSPK7aaKBw%2FsFQhHj%2F8okmC8i%2BHEjVUYpvb7d47Kx2rmTJyHT3CW4QbR0aV2Sa4IRvNOqWm%2F4ShPEl4EWacmcxurIbQ0tOaXcCjil6eXdKcgC8J7LePOHsTS2OgYDioHCWtL5sCoUwTNA6%2B27Q%2BdxxVrd1UTQckcAKGSzHuOJnfysj9mXQsUCYrw7fCM%2FI9dR7zcal2xq7tcnkPKSfMG8ffTLomVVWXxzopoPeuiJlwPXTaG97wE2Opn%2FoF8XdBppeePXNhOWeXTu8C4zz%2Fy%2BmjkhQmN3hjeDkZqQRpXxQe8M1gp6LWn2%2BCkRLfCxnJnZmPQofSuRq7SBGX4hp%2FLL16qKrBeY3j%2B2tNsTEIMDTirlT61368PhXioOUQ2ACAMQnAsmYp7GOQ7rl4Hjx%2FepG14p9R0Pl%2BesbKmjqDwTmC9mMMD14MQGOqUBVDE2GRIKk9cqc%2FVWTuThkOOctlsQ86u0dHZIjWOQUIPcQtqi7xqU0w32N211xp1XW6NZVg2O8UDkgYExeAXnWdJ7lBMuy4qtT2Gpmj6TuQ5r7sTOwyHw%2FdJ38ANbLI2yUGNXEqSYx0E2QZ8CqwG83KSGlKGshU8WvgVIWg1265t1VCTiTHlj%2B9ObukJQRAZMUgqNPnakepE5am7gbPJ4yIvTXC%2FP&X-Amz-Signature=7ad295ec5f0d36664dfe452f2ea810f770cd971ef9f85bb6602fec4d8a471723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=ace09c81b2cd5d729c564ee5c5a1ac2a5de5d671fd7d7392cbf9a94a38cacb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=19a74d3c416a12bab84febef93dd2dff5772dab5c6725f4c3740a27bb710d6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=f79be5ad87e79da4c532c6e09aef75f5f5946ee6c30dea544259bea54f7f59fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=abf708179ba07167164fd44954c7e0d0b5a33697753e53b3249bb1de03961c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=b83fd0621421ec9d8d68b5bb03f9cf554a1d600fcba6b2f982422e782b53fcbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=8852d700dccf652e46a35254f5a2c37321c8d4ebc155fb54017fc34b228a8c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=f79be5ad87e79da4c532c6e09aef75f5f5946ee6c30dea544259bea54f7f59fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=68f27eb8801a60b86ffe0410bb2b8a40ceb5b8e7820fd7fb4b45048015843b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=2a3d38c2dd0e1dca8de7c5aa4e81743f4ef27b222f12db2996eeead52579ced4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AZUFV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmKWaljk3zznL6TRoEA31naZNr1kXJOtz1P7f5wJdd%2BAiBSRPKRAX7Nal1a3NIaUPqe9dpDI%2F%2B4Yh93RcpCVfdx6SqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8gumz%2FZwwGfZCXX8KtwDhrRLflwgaXzjCjhLyaz4zTHG%2BoGHKYgMC3b0v%2B0bOUZM9n7lxBILEG2Fp%2FD35iGDR0QvFZezp782fQ9YGLRQbuAvpK1OrEV%2BR52YwEj3JLJ4E%2BHN59ZQgTtbnsMUGuJR%2FinP5Gg895lbtQNEYhnMquBSjOAyb%2BnztdaKOB%2BLbla61hnCg54m4EzeWxr%2FafMTwaVkHgM7KhMltgd7JoUoTozh0rlVD206sn5J2%2BicQ3yLpye3Ixkvt%2FlA29zc7C18wM1SyQBF6dBpUDLqVV66q%2BCUEvtvVwFiZBxDPyZKYUi0Hc62YrozvNhbpF2MxueXaJVzmXRRRQJeO9tBykFdZ%2ByIabT41A6jxtd6atc9XQl9pQr1mp8MGXH7NowbAbwE5VkAQIykjeCR5Xci%2BJsqPXZWhNJUDW0QPGvMhP8sMA2aWm1IHj%2Fo7rGeHln6fx%2BLC8sdOdSy%2BggeXtnkDFvGhXLMmp9GT5%2B8lnKsCmhDqxqf4PlFMDG4CGsbrPlqV34BCk2RT09iGOt7yB28Ictq5A2GRnZ5IdY5V7fOU%2FsqlUQla%2BXQwNCeqYIXrE7MV7Nr1NpWH%2B529ORMepHyTkhNT%2FQqPOCb%2FFdL9gNM%2F%2FRogWrY4XKDLyC0IGpzEFgwwfXgxAY6pgFQ2De3lVX4EXMbEHYVcvDxpraCv6xxStI1QSolj2K6zIGODV83MFa9SoSIJQnyi46lAeW5bnFr8DohVF8gTBG99o5mn90IVNFAUiRQIUPAPfKgNTcaORj4DNfmqroEgsehIay%2BMxnjfbNhTqFOguYX%2BaZNNIGUWR2oHXn76Cf5rjGEejlQAPXj3GEvntcg6n7c6A2hX8jn0jwZQxUv2rc%2F%2FxB5t3dE&X-Amz-Signature=f31f7ee99d8c34975c3c00336078bb28f35d378d1dc2666a6bba4d2812a75cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
