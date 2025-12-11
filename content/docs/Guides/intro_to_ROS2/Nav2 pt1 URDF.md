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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=f4a8f55ad8e5172f575bdef93bb0f9205b1da2d2418c45ca275f16cb34f0e753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=571e5401de89aecccb76bba1485e4b2648cca718e745520a2fcdd790647511d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=1a3fa5c3dc9ee5649eb1701ccc150fd6ea43d6900ba7d1388901c1018b544fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=01896cf5c53224c1d5d4849a475c0891ccf23fe0cfb3cbb2f61db254eb0c2139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=e697297439c66bd0babdc9f5cf9fd6aacb45cf5f0ac5f3a64af1e022356803ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=95a31b242cf1f5c334f2d49006aa8a192ea2e9bfb02b3aba6aa2edcd9dc00ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=eafe44e930b9283532a7aca80653d83fedde543041c2fbdbaa23fe4fde3d5cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=0f60a3f91d3c3357c9bd18df6ae512eaaa2dca3ae9387cadb8e3623d9d375795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=eb3342e5eaacd5f9c343c22edd69d711800a281a1f16a4fbd6f564f7e752367d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=8eee4436a54f59432d4ff4caa923e23a9d1781cc7251c2362f32fc9603602387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRULHBX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDVFcy%2BkDwyOdyYSEVP5SzSZjRGfDMf%2FANWVh5CgEkeEgIgBEt22lwslYgWlQKkeIEl3a1ZBfJ9ERH%2B%2B7jZdR3FW2QqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO8F7Q7%2BalFmRvffAircA49AQhCRe21As3%2FUVr2wkiBsDNbsW4%2Fx%2FI646gED%2FFasNzCEQz5wbNnsu%2Fgv3aUQoitu8lkGXzgpEYBvU8Nv2KZsI3hRO9mW68CIjJqXnB72%2F0bVZnh%2FrynHttOJ6gPriZV%2Bs6bW%2BQWhLnuvzUNWoOHT0i%2B3IipSwfGK4J2zaIsAegbSigRE5n6sgaKFEjUHKN5wYqwh%2BlmHwz%2BPgacJZCqBaa5TegW0jY9r6KyTeu38kqAL%2FOlNeTTYexoOoSmxfbRhefIeNI2JlSZcOtplovcGyPxVVSNaUfFrCDsHwkr1A%2BAlRaaF7oubseeDElFK%2F%2BmUJ%2Ft3Qz8YHsZS%2F5bjPXrg5TEvy7hvzYr5p5hggXMxbuVrp66PVg03aO5TuQp8M5r16Hfgvdbwv%2Bo09oBtvJdLnVd%2B%2B%2BrdtEAzCNlR9t58vawy7koexfIwLUc4ZpR2bTt4QUHoGHaq4cwEJyR1euP0WCLG%2Fr%2FIL8WcTjaJyQGECJFGn9QOsVwj6%2FAn0OjIS0tFQMEH785eGMsV5%2FatsEMVxN9v2VMNGBu9picHLOT4x%2BayoX8%2BF4oXDM1D9zY7rQ%2F5Z1vrwtJ7kXfXuhxceMF8%2BqTix5r6knah2qVrEgGHU8i4kgX6YNqim4vWMIe26MkGOqUB2gplsG9prdqe3X%2FV3u7wAlYb8qfuiDOqoIwdaT5z4o9fK8GAYhfwbFNRsXXQOHl1zeAsDFYMIzdFa3mmShghnR7wThbLNsFUFHbz%2FmjG%2FA9GrpZ%2BMDSWKQaB5Z9eBgnWJh5VeaLZoZV%2Fb%2BANIcgy6LlN7LJr1kYjiqgQsgzo3WT50zCSziIAJzhZ50LoEStBCx66ZSlPfd0rZaVk9zGo3LZpZx2I&X-Amz-Signature=ca32511b45a4e2c098337449b396e28a977d10fcc4ed22cc55506e51d4e7865b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWYN6SJ%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC7yC4ef62hq2omkE3YfAY8GNea5vvm3ljxsxRVBJ7ayAiAl4Fy7oExLoCsLbaTb8L0VupQ%2BKSaVNp5EUMWT3%2FFv%2BiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM8r7KetKfxrc9yZqKtwDkzOMUYNBCzfiGl3BcpXIIH6JVuc2%2FuZItzbcGN44%2BiGD0m2OqITJIzblbHIorgIup0m9lRMLtiFWRyy88VEhXp1EwKRqxmeN4x3qMFL%2FpowmvSB4eao%2Bs%2BEYCR7lucaGSSKoOITGmaHY7Kb4X2Ey2Nne5zMDVCrCWQUMNVw4Dryxccfgi2FTURv6eg4RIXkbfF%2FMFJB7hk4%2BJYppjSCddnDeCPgPrWJSPoxWCHPCkjCRCHBXl3v40%2B%2Bvl3PbGlZfMBqZxgg9OoytvM9E%2Bo2mr5l2Cee5meyUkWybhjtvxAEnjWWqK9EoeCqW0093IubAKCcEtGTnch%2F8YyZNT916KtWsaqCT2iYn66fjs2NoYPTHeF84JR8Fbhm11yoX9U8U25o%2FIhGavAk9VLPoI9wCeZsODpCjDCW4hUFCb%2FbGYL%2FcQ1ZJ51knoFTCJLSoatIpLEamgeWb7Im8rugdUnTWt%2FG5zNTocu6XqVtn382JGakdDwsGKSqMwl4wrwQIOrhCAopr6f%2Fx%2FYSjUBkq9nx85NxfI%2B74fhs%2FBehn4hL1E747iyg0fw9Lv%2FO4sTgMclt4qiYQtNhyvwrgecMlC3EU6qiLEpLRdZTnRa1mrLKsnoJLyVorxLMvPk1NfM0wjLXoyQY6pgHyUDSDKFgEPLwD%2BUv64tXUn9TPPab3AzZBxj1c%2FrhBwSUB%2BnLXU%2Fij0O4bvOFP212S0ThJpnFmSU1inCbjdkQIPLR7kFzTU9y%2FvJxOo1M6KrEQdXy9H6ojzaziiuQ6ntWwOpqgTSHfVhUSaYNZpYNGrj9CCSdPvyLyPbrsfeoF4uuBxZANX2dKnzS5Ed5dhabVh5%2F9oqdX19kQL1Ulxvu%2FHJOxeVaa&X-Amz-Signature=08430e75ca74f287a9d6f27fd81108beb0f8bd461921658f92b00275a028fb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWCYA2EZ%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD%2BjTvlJhdcZqMVZFA8wMwzwzJAx6IhweRAr3AxGQzNwwIgIP4VPwGsNPW6NG2ETHfBvpjursKJqPl1P1A5QADAMg0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLsXZQaJZXCwmVjPWCrcA8TwEVvBy7qLk%2B2I9Xnk31in2Dk9AjreZTfMRyGwsSjMsIuHc8auge1w1RygpLQL4Mw7VN2VA651wLPFbkCSt3C%2BFN7%2BOXWdP9KMH%2FtaEqU0vD80%2BfVl0rkG9RYMAvJxT12xBOfKP9IMDgZYytsWnYzcVXYB6w90fUlWHYkMqjB8RpRVILkVuZHK57zibNSRcGmmuWHmuGdcqV7EW8H5A4s2hw9eo4VhJ%2FdhaGdTx7T9fVoqAa7eVn8QU0Dm6MNzYEahq6sXMO90ThCd6jwm7W3zfHBppArl1J3%2FX27zCXPqUmtLxttU0nt2%2BOTI6aGhX1Nrtp9QNeHHY%2FzLUZzY3XPXSXZRsIJ0vTFQzpHocxSVK%2B3Av6QbeFr3i1nIx74ponMlVJRvMc6u7TDI7X0Pqj6VhaX4zX0ODqMgKr5dvhE99twh7Hy0eLe6C32AQqtKpI3mSJxbXtdepyzJ%2FX3em8w59w1fIJcvxr3uYxjhznLSc6lRmvp9wgY8KpBVsebUfBILd9MtNJmg0MfZHdXsmOarWJX%2FT0Gh4PefRo5IQ9gd6W7FtBDc3RL5fWjmESRZHi4%2FV%2FB%2BeEImEBkAewepn%2FumG4NJqu2B1RHIQt%2BJZLc0JX61Az6hf8Fma7s9MMa26MkGOqUBhmziQ2G6jOPf477%2FHG1EXAF7pf2MG3F4ZFyjUpjRK%2BDt3XAyf9fTfYENQuuzRZoyOqsRLU6oAuECj2x36GP5YviVvG8r5AydTL2RzqhaADrLkLC2ta8hNQiOBmhjkEJ2MCqZPgjIRPYN1W79NPOFZzRagOWK2pCiXS4VGmliohOeSDhv35Y%2BiMe3729HepxTmTPTRV0tjfeT5%2FDtMb6AwBu7GxL%2B&X-Amz-Signature=986cc2619260e81818995e87d4a48bc3eef60c76ba054ba7e0bfd10d4e8617e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=b780676c726d3762adbe156440faedf2567565756ac40f7b121d4d949081662a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z76IGXX%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDHZFoCZqveExk6S2U5yAZk6Uu0r8ULLj8eHOATu5olnwIgZMUnX0HRIcDGXtXZy9fIq%2FuW7h6qAXh72O2M31asFlsqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGqG20bIi3fsmN8NCrcA3zaq2jjBOYuz3Tzhh3K7BOTZxMNCntERaD6zDBMK%2BmcBw6eoTVh8qdsVQjonv1eoWSbhCS1%2FgB5CgmyWLyWnFP6TfcQhZakwjtRIe4RLlan7gCDAjGQKjMewlX%2Bpj42nGGxck3ttKEtP76k%2Fpx%2FbmaJrRwzOzT%2Bx0EMyMdRS74%2F%2Fa6s%2BCF3OlExvg7RBGjjBl8K00OkEBQiu6WEFoCg4hvZPl1fI5SWDxf6IaWrnlr5%2ByooYEfnxpWlhNS6fOs6445LbrMX6ueZBhgQL6dcpYj0txSuAr9J3nxOHBj4TK4mIT7ITKnSQRkkfaxsgv6JKoaTx1IqXzk0TH6gLLdwfmdF9qgRYkjo8oGSNy1sYoMiblGvdXMnLpXmAB1uZoY2%2BBCYcgyTm4T1sjuSLTUAzk64dtlabj8KdDDt3LvisicuDPBD0gse67FcnTVmVmNPDR8D8UiaJeZM9Xmj6cK4e82fm7Dnmkm78cfzjm2sEoE39oJ9vJo4zsO775y04jwdzYYpC86nsUULEQmQnDI5qrXTjWOUFoYv7Pg%2BFAj%2FBrrQTdmSp%2BE8bW7i9WFoyngbrqGtizgVqmAppiEepTzPjO8CK6ViTJoaWSy5iYQhqPZcc2yQVSqZ19X8X6mpMKq26MkGOqUB0S8GR1vadq9RWyiXHBNHB2pH5MyiteUs2lFJPWTepzHZsa%2B%2BL8bnJMBYxm8MB%2FW5Nx10xPooQDCg1U3QJS7qIiIAIIo7SrueuDQo5AxvDFzbk%2ByZ3x4Uudoe0cA0yx59UPc1EW7tbcwYZ1XrZ7cGj7DLILMnuLV%2BAQIoAnXLiELh9k2KuenE%2FYWfSxaY9edHIWv%2F%2FE4PRqHyMc6KEJk4cmASq3aq&X-Amz-Signature=c1589d05cdb455c5a9440c04451e324266691188326f309cd8f2c169a589cda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=82b9bb2aa22522fb25e7e610d09a46f50510ad433d9f3c85aa9bb355ad8664e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGX6WAZ%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCDE2Df15k%2BLdZf7n2hY1d0OzA2epegSGrtp272kUbflwIgLCChKkuYpAnn6ZpkvC%2FBh2gcldzwIs8bT4uqQb4VX68qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7K71GBgV7rjh3RXyrcA6USchVm4JcFlFIODW0%2FiTudOaMqwqVrdkjPkw65jkxZ6Zi87ODt7ypu%2FsqNLgNBJCFyBI9LWxPRDSnoCozCMRPEa9VXQULEE9D8s1jjFTHyJaQfsfIMtpPIjqRG0Z2TECLF1ZN3dfz9E1fBQSCyIMaw3Br1utSnkTWFwbLOtJRRWP7d9v8QiuFvTSUhrEvdoWcaXCupvgCz7Op3eFWflsql5m4RG57izA6wZKTp9glMQ5RPe%2F3S4YXVoDDO%2Bt%2BMb%2BQPr1B7%2FjHSy4ZbEeTJiEjfdQr4oFlESYunAEh4roBQGI9FWe9oo58okWJ%2FTTJkDTlNCP9iKqYK3B2XgCivViFmh6G3dGL6q16DMD8UQ7i8KnTVZM%2FvGWepW5JZMJQwiJZwbEPgDvXdGJQwRCOy2YU1Rz93acKGlA%2BBc3yx14zEUohJ6D%2Fu8zoFA6lQbujaQNNHp2%2Fo0%2BRpqvwaywuOmd%2F3XgeJJQcmiU2u%2F2KeZsqChcqpp70nw7CJYexl8xiuQmurpz1V2M5vtiUJKO1IFOck7Bzx20kcauSjSgg3B2Lim3HNue3W9P4J5dcHWqNJJHyzTEqza9O769MbxjNDdksC8%2B7Vw5wnij%2F5grUbyqxn4R0VG0qzLtNXn01dMPW16MkGOqUBu8ZrAxzEC9AT4hnzUyAaGaNt%2BXmJqQPM6cTVqYdGPovuLhpIvXGhdyJ2Qwsr4yx5zCYV9J0uIhN2GO31mZVjc98gTN%2BweCZkgzrvUMquwsd9EiXXX9LqqwfZzX2wwycxGiZ9hQGPFmh6Jw6ggTcb7bqGUGE8wkSAxGDItAc0DnGz22BVixLBlfCHAVBKf7%2BkpRLe9tj7hS5JN4eDTqYfdx%2BoDSh%2F&X-Amz-Signature=d669cfa08ba6228b1e4339b9d0ed5d06fcb11d99983d4955bb2608a0e100bdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=5903a396c8e0cff4145d98050e69ee31defdfcaef3bd4ab22f3c91f437676b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US4IGBI4%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCNYcCBdwx%2FZEkqsQZXEMDN9ADAg%2BqjWqSz6oKIw7ZQYQIhALrZdif2FoPyHTrrlK2fcjUjpOP2G4%2BUm%2Ba5KYvrn6iIKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbA9yaxHipm66lebUq3APJ3N0b77wOIxnXF8ktNK8iCPmOsh%2BewUyKIBFoT9RmmwnaLJy1ZVeQnbeY39C%2BH9Q8FppsI8BXGmSzpbK78gUuVmFrhuZ1IinLQaSi%2F6T%2BuxgvTtisFGEJmMlwGIA%2FhOK73RqKNQxM1eVNNDVrh9M3eQBT2CyTQQl93nAGHupskOeiVHMPBb7t9a9uT8ORAL2iKKPqlJ5rzLW%2F6QtVAzPtGDA5LD3BVDrhbSy64GIs0hr2ar%2FMkZ0WYUE16noeGZrFh%2Bz7qRrCghen2lGdztbrbxgofQFKX3hMuiNIXhcGfVBwEOaj1k0TkYMdDJ9zEQ0J%2B7%2FAvf9N3EZv37JDiTRbpDLhEvFThaxP8D3AUUDMhWTGRWFuUHJdeF0b3TJTjfXy5ipZmp%2FHV7fk2DIEyNkqvoePFc8hYL2h0vitOnqjPJSOpi18bEUXUH5TwU6h4Qn%2FvzhmXZQ73MGjKLECS6eaAXkv7bOdHE7UrlPDFPQnksxLQofy6laINSnWFy8uip99tpzNXUQgE%2BgmAP2FVmn9uTJQbPPvfdEoMDIRrpJgGko%2FZDPzWxsFmGD9%2FdAxEX7D5fkYyTmKHrdnP4cQe%2F0n9JAbku6arD7rxLGNwQhE58T2fEj605JTxH1cKTDltOjJBjqkAeaIwNFCO1lbccscShSQ8P0UIozTqOKd6D2yEtVdNnP1jFi5ts4pMGK4gtoGg662vtwFYr0kqJ2HBj%2FI0%2BKX38i4YAk56oVtcgREMQzVHH%2F6WqO5Dq%2B8TW8B4dU9zjg%2FdEaxAV8OgiYfptmIa4VrfqQUdLefOSsfqhrhfw3wSeMw3VPM8whxId9Ua6wb3B9MgFexp6fsbdAqKnG38DZohuzs9aZB&X-Amz-Signature=2357cd6619a309ab3a0b7b41c9e508d1dc9739fdc8d1d545f133d84faa85804f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=c4096834f4921f47a6723ec31f914190c2a4b72a5223ddfa4e2f9d23be09fe13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663N3KPND5%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIB9wD1fQdcOyCcrk6t07kWFDpaolYuvYGJqdkkEmpWA5AiEA5YZnkP%2F4n1TbXYE1CbEV1uhhsVk2OREGhIa6zzMs0o0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeowDFSXvSsEKUuRCrcAw1pkLwXqzmB8SnHRFt%2FPag5N72LHiDRbG9Ov8ooZJQ%2FS8hLZ%2B%2BiO4AYBOrDMOJPvxnNO6b0%2FzjP53H57rTJKFFZfNbC3iGyo8Zxe1q4%2BR5peonLzXLVvm9t%2FR2uHa9RTFXgstLxtbe1H7MRyJ7o5WU%2FNLL4oZooNNsmRz%2BS0oZtjcwJDZb7RfuTJl4%2BVldLLUPsAlp9HFU6oXvWDEzJwN4mkSXp3JL5LW3Emk1vAAGhnOe2CTDP0giD2HfnzlgVxBiLhynwCCGZX%2FCxBtr0OpjV9Yx69fAFNxxd%2BOJ9tmXI1SXJOTrgNHfY65z%2Bl5qA8L2od%2Bwh6X4%2FI9vcysgR3R72GYMYBqiN3QfiacEPAwFeC9BeIo5TKqtFWxEOlF2IX%2B%2FgB6H2LoOACWLAhlb5SrZJFvBWDH7GbfmaZPmQ0aSSgM6aibl47e3fMxbtmWVxKyvRNXF17K4j9coUn5fuCz1Ids0S5sTeDCC4sNMQK2UIeU9K9yK4CcovIwN0nMwCve8uyGgIeevq9S759g7D47RgRKGJ0XEYOeZAjTqZQurlyu7RzluWwFcos0n9QOPZN%2FzMieWanMn2hTYV9nAKGFhTjnccB6aH5BtQDiT9zGf2%2F1lGbZeRDhqQi7AtML626MkGOqUBzDiWXlup%2FaTDjoR78ag%2BfK4uLz2S06kPm8VAMpGd270lzT07ge4w9CNIi63VPdcd%2BqWSPoSTLuiCZ753skhKVlBHCZISAHKbykU7bZef1fkjRou%2BaNTG7XOUHOdIdZACLmq%2FeX9PqPNXhTE3kYFrAAgPbdSccDad3N5dDgR35fMmO4aVYFssZcsu0YIKhoUmaoVeMxbujJa4TZtiQAR7nRUov1KC&X-Amz-Signature=5e11d66c937814a532b9a7b93197a76fc99c05979fae5871945a6f6ad8fb290c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=1951b07012795152aa06513e96f1040ab718b7fd6f4273f78435c4a7e6edbcba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUAAN2A2%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCr0j4aHWlXZAli4dcAO8CNa8LUHC%2FPyRzEARrWEbcIiAIhAIfqXQoLKhN4d9JsT9C1qhZMB1nlZHGFCpJc%2BIFZ6a%2FmKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX5FR545BXzCo8mtkq3AM3Q9eauVxjLULyImffadVTXi%2F%2B9K%2FJbQhtNlMl1eNwqDn1VHUhcPO7Q7sSMojCvwsrj%2BJcir6trIECudYuWPRgqbr6jYp9A9zoKxFsJ%2FsfD5t6cuGqIUJARkdl7HmMDN8HSORRGijzyd4GQeEn5Gq8rJbeZEJQeMInzH5wyn%2FACCquZYvfEm9oyVVNxUBtJeM%2BG1ovWDq3LVanoQtNOZOT9WsSmqkbsuYS4cViZ1Z5wDuZwVjM8SUmV%2FzkJv0k%2BxHvUEnGyoTvRfOo9mASvJsSjHDDe9YQtV3NAECHkZ8b9cZ6Nxv54HxDOtA%2FIewd1b0LD26A9kbGee3ZLudvsjXo7GrHQFDo6jfiS0kRzoqZn1lN5BUF%2BSE4O0hYnoL%2BrsjEf8kTQ6jE8WF9Ufxl7Kw2LCwve14PWeYLXGafynHAfmnhrdYmHgRgFykTzYO%2BQoydja1l1NNmixRN7PdefDAM%2FQaIUjat2JrdMZcwn9I2CzsAPMUw4%2B2PG1xtEyaPEkL147ZDcuFBnKuYSHIlwfTH%2BQu3Bz7LcNvQmAQCQ6OpzUt0wx0%2BuJfjBQxE8PtiOzBvdmu2PrWpxpJZjXjz2k8n57ckelHTJ7G%2BL7PF47pcbWRtRp3DznZjOqeyCjDHtejJBjqkATxuLTSnmmCMduWANYRenB%2Ft3WhKL3R9ZafEQ6dNQtXTSY%2FjMFwB0l3Qs8LXQqvt1V%2B8eRoEOLx0331tBhG8bVUczIfvo8y6m4RlTa8iqzu9lyUhTkhHFmV0UYsuZlQH4R3KKYRfBRRGGDpfsmyx%2BUamdXBV%2Frpt0W9k9JQSxRI5rbWieZswr6W%2B%2BF%2BW85UyKv0%2BmPo%2BtdbTjnpXxQ8MskMMheRt&X-Amz-Signature=c13decf2a25a430aaf7c7c9b435b6844a3d708d417cbcd2df58cf2b40bfe965e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6XFCLHV%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDZJ5UMMUSt0VIe5BCBXUOKfreEJhcug9DIHHAFyUoTWgIhAK5LPxQ8QOKGAEDS31cn8p2mmZD7rS1rQTuUmyW61%2BJGKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxATOE9BIDk663F4jYq3APEcUuphCSN%2B0nAajYth%2Bua3V1y3OHtcpqcGUPhHbsZrrDvNciv9r%2FHFGZi4tmYNbFTAWT0itStWn8D5OyeRdX0VE0ClZmJgvkR5s4B6ZZ6gs6oZ5JvLqOrBYT2iuwFSntY3aGSIrNHJa%2FpyxrrS5BCdyoeHl0EewX7rQdGmyScmJwoGvwPOfAweiNkFxpIxbNERXUKo9Ba%2FEIfPGu%2BuHlJnHMht8oYURnTr6%2BWsLxbsT7OW28UkWm5bll9%2Fgiqh4iuO1Ftqce97DhRw6KKwzC%2FiKEUsvkUic6gDyTKWDL1GLVoQTvyvd%2BRKmIK%2BU3i3nIn1ecnXHcLKyG%2Fx%2F8RnNY5DRcW9OYcI1zlJxoXHmb5K8BNkpgFKNo8PaQXB%2BHWYXM6dkyPyDrU%2Fhwm56dFP1QlwxABijeyQWdyCImJIP6G3UyNvgAJ%2BbIRWheyiZK6T0lAYxPnWTmKBqqq%2FNn9%2FvPsBIfV1ARruF%2ByQIwwtpq74531yelsjlM3ZlLIWvo84oDCI0%2BrVIsWfZApMs4hqGWiLJ2MaxXFtYvby8R8l0djJNGR2I4688ZKjk5rm1XVtWhJvTz6PHum%2FDOUrMNVkfhFM%2Brx4mpWYq5LElISy06RIDMDF17UZ3NjZdnHWTDTtOjJBjqkAbwp0Jj%2BfdF66YYBQAG3QEhpqW2njU4Pv5MKB%2F3PtFRK%2BKiTjJJEWN1%2BxUqIvAtIPU%2BCXGbtYAKCZq%2FcM8PIyR7y%2FkvR6X9Z4wNUPkKnxYQUygLwiLGxMMIRCeNvcMSPZo3qI1OfjPJxHN7N%2BPayfhDbc06tdqchW9TUzfNjHRTMheEjj9lkfKSHBB%2Bohf7e5%2BC%2F943Bts3n1PPhuDYehwSDiuUf&X-Amz-Signature=fe138bb13dd3f517afee74bd8d4ca9d58b3d5d8dc8e1f833e430bd4726a635ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCPLT5MG%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCER72cmlJU82HOzbgWB2NAimRPplBBnYZzQZUnI6pCFQIhAIPnlQ%2Bu0MESkCnTZ4WlNr6xX68ltFNgZwX%2FSeA50WLtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV3QEe3JwiqqZrsyQq3AOnS8vj3fRwvBpD%2BUsvouRaFp6xXvP4ZQLyLgUl3tPUDY%2FhDvms34jlkoLEM4q%2Fh3EZcMfaaEK5iTTbQxaTepQ3UgkIAmbwEZKlG4vBV8LFW44jAwXYWIsMpimmNe%2FU22BUnK%2B1GejOeis%2FJQs6Jl%2BcZRpj3C%2BPgfici2ppKneA7RSgxX71Ubx%2BV7oLnC3QGE9y5qeaJ1DCuPzguqJ49aLBh1D3AMSFKXCOQk0EVGXnSnZGlNTyeUV4rifi9zDZqg7S8i6%2BP%2FizPvc7eYR5J7s%2FdfnFvSBp4NGSrQMyUXVS8fcMxPlIc21SDwArDNM3%2BEG5NNFW%2BiIV6%2BbMkQUajl0oPcIp3hP4x6wXqcBYfbOQUKdAHOaxaJUNlxQvER7VpLD7TBuNZ5JV0Iz1VPSFOM1wzLSmrVsccJJziWSSbl%2B9%2FHDktkAoDXekyDZzVfJK%2FxZDyvIoXYFI6OoOGaAroyKwraOmsBLP31nXlXo7x9YlMRvd9eyit5NkRcDB4ewrFWWMqjjd24ZQc5R%2FAX4oXUGCJoSz84n2grZ1c5Ckaco%2F%2Fdtjy96kXmcaaeO7KZUX0uQjvLhb3cxBiwNXHyzGXIwzr1Mk5H4aamv9Q8sC6MKRLgSDjgNC8mQJIGIaITDstOjJBjqkARq1HPQCXF5Ba0VVtsAsHbbjl5159j5Yj5MPz0CxVmpKSJofcrxu9AHhEfG3VLijUjfnWpkQ6uF%2FcjtH3vClXRbEquiRl7FZYEv26vy1wHnoRwjUilsJosNv%2FtybSWnfpMzKtdNfXoeRoXgBrjsTRY4gs2TDUOXGXcVo2d9KydoiJA%2FdxvMTNmfJOuv50mg8uny2JKddwNI7qXFl47%2BA7fNwvrAw&X-Amz-Signature=f79b8dc2f40cf1ddbdd32f1ac7560bf930054f5a86edf6d21ee8e960e27ad9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=6013feea999765145a3908ef6f9df1a5a204e93d1b1390d0d2a0aa0f3822dfe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3SAXIGC%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZMcHJ3OnfOwpi0Kd3B04IczV0NXPsmFK6l%2FZJTab3%2BgIgcc9lrOPNbIeUqIHozyT4IICL8T9qxehlpiLsBofWwBwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPnpNwBAZJJEQBzSZircA7Vj2Vr9sSLsW1A%2B0pkzVbmFkEDp6iz1yub%2Bujhi0x2o%2FdetCYFL6ycuqNrqWuA%2F97IdasZwklFjF9jQcYjvXWDvufTM73NmucJ3MHzmF3rfbECa%2F%2BSgAYeJSJUUlpg8dscym1e522BxgcDiBFzbzUfvrA3eV7xGV3d51T0jjpk%2BmyfP6Rw7Wpa0E5HVi%2FjauRHCMRgEdpNxAKVLX5ZLymDpsujqEffC7ecumG%2B%2FPphPVYV2Ugazpu2JZASU66wTLiUUY%2FAUkuevT9vgPged1siS9GQOWE%2Bxz75%2BXWvd8g5RN0teKlDimtOVihAU3vyDgHqz2zeA68U0RJcEIAB6BvxeLjBLEsQyVUkTu7PPIsPz49ZoIizK%2Fgjm05TJ2S47ZjJ6u6uNGiSrEsLBQBELg24nWwfNI81kWW1n28V1k36%2B5C5zfuRwTfGxVkqiVkOtOM5WpfuQL1JWMiFEVBk2OwLHUfXRkySe2736%2BtmdyRMkd8beKry61UdKHUsc7mkB%2FcAteUCs7xVo0FKvpv4VyuzlxwRnmj8jnmpzj8BDTeVgAwMQRz32b2bfBjr450DaBcYQdXNc%2FUNMgrK5U%2FP%2BkRAjeMA4Fp29J%2FZBWursYuRcSz8PLBz30M0LzSwYMKa26MkGOqUBiPrjJvh2NmXb0ZRWWG25h0VFO%2FYlS92cxqxzamLj4PYMZwjD4c7AczTA6QtygmuihX4z5gKxa1GgsnGRLoid9U91rrT%2BsqKawUvgsNzpN6L8YUsfvD13KYsetT9XFJk5OVZ3U%2BioVjeR3hxmyNHcNggpQwu5noXTrwAt6d8gc%2Fq3B9fVCW22dhqTIlENGaooPWm%2FZgWQjURgftbCoOv7SKGNVMC3&X-Amz-Signature=19ff7cc914c10c52be4dbbcf39deacfd747328ece88dc4716e5a0eaaa43ccf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=1a307f3fc2add17b76d43148837e34318dc281bb091195168750840064d0664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=70480317d38a4a51aff898224c061bfa5513b2f7d2846551ec1b71dca39a2989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=10b4f94eb3feaaf663cb45b37e9c7b641199a365fc7fe3893f680be896557680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=5ab76cb68e6254670374b4dc9ad03b80afa294ee92ff38b02aa5a619f2d8fabf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627N657FJ%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGyC5S6EPiK1CvSASkOay9cFOO%2BI%2B5NkXktR4FuvwG31AiEA03FxKxcO2MWNzrdELFw6zlfjMWS%2BsbDnnLDryNXVuY8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcWjflQc%2FTj0iG57SrcA2GU91mwuaU4xcrc2%2B0iB6WwuiIUwp9I1aW1AY%2FshYwgXRfvK%2FWrdTapYw75%2BEp7ofwlcU0M0sQXpnt8kGl0fhXxq7%2BAtC47BmSLVV8pRx0WwmoCmKx%2B%2BC8GBG%2Bj3pUWoy8a8Jne5DM%2BIpnBUQiuLB2ST8QHenwcTB5W3k4YL9c9g%2BdnhriBe00OSnow1SQEErCARI8xW2siwOefTSziX14ekpGb%2BnhprCbid7oj72A%2F6Yf5xOL31uGqQ2oepONPR6qEtbcBCN4k7lCyVRzcwQPx7ujUHOs%2BVCf%2FYSBCb%2F0n9JSPE2bW5URTXptkETbYJWc2PZBya3cYKS3yl9E5AMIzUA5%2BU8cLjBLy95kTNePK4R2y91ilZR%2FdYHRQ5D7%2FjA5mN3oY%2FdqudXhuQa9DLEJcQdLkgDs4U%2FNdYoeRPggUUGsRbuEYTKDZEbW2MVjjSzntCS1MNqzNJRcwB%2Fmzke2zAv4U%2B0jLJC67t6qJFk5hDPNDuylz%2F4UqKQ3SX18eFvexkvMWnIwpKZXiA%2FbpC9W8PFYtv5FLscl%2B0kLL6%2FFBQWZqXxvjhDysVrrZ4qvYqkNb0ws5zmdBFYUpaOvxX7SxVZI0Z0vHxt5QtdARMdvzG%2FSHUSGUAYMYKutRMMG16MkGOqUBEQmh8Mx%2Bdj%2BRl97WzUDFffH5yFs4s7Ud1KU%2FKvub6SfuzPgrdu1BKxkmtfY3OH5Kknwq6FO6%2Ft9Qp3ENWzwMklv83VTUGRAIBBRzLzo61Matm8Ga8vhHKHU3Mf%2B%2FPfNZA9RHNxmTM5qcSOAsRHoePvI00iAyvgPVsdMHJCeyh7p1CQ68C0c8iQ%2BvazmBCGEalDZOsE%2FNSHFmypyr5Qu1e93%2Ftv%2FA&X-Amz-Signature=1778b1fab8cb4a15806d3c3c92fa665adf056585eacca834a4ae732ce4e8faa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=d3b895a2e1e64f0c6a5441b02cd4d155b6fda13312e0e3b06c342952d920786f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=c73c20d703796f58694e07040fca11cdee45f2856a2bda27a7a4c817debaf112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=10b4f94eb3feaaf663cb45b37e9c7b641199a365fc7fe3893f680be896557680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=507ce35c7a2e6faf97eb2905c08f88b4831af917fa78ed7c7508ee0ab097f44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=b03727e6b121427f4b688f2919c453f83508ffb54a157fb5a827b127ba268838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ET6EUKR%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTwKD%2BVMfksyhlUa0G10%2FlveUi7OGeiOn8FaMp217aGgIhALkPGBjAR1lrFNkyCn9xLbQTOrmAt%2B7ac0xPxNhQHeDxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiPFMYiDoBtL%2BBAAIq3AMv9s3F51HKEUe9qi4Z2RHVV8BXU0gwPXyL8KAOAvxMpzc06NciJw%2BOmeUbSXc61xnTjRCT9sPBuYvVWacp1YL8ae1M839TGVjqt6IzgO1PumbMLfx5Gk3ERRER1oQJEBtXDUGbtXGHkffluBycSQIxAOxGsd%2F0ee1GoTyD3Ip5rSIb2iV8GCGmHOgEHPWLRQNv0x0kWRM%2B3TZEKi8Fw28%2BVCZq73fMCcLRnJyRtgHKYUQcv1eUbXdtcWC0stgLafADyn8Qta%2Fi6JgLd2ZxbSTrjQ7GvbDCKVXfhNITBfkA7ee2uz5X8wZs2wqfdarsTIp84naxcopyyFWlzKGZFktDW1GecAM2tJjjOitpPo3RM6tzcGmsDOj1xfdPsFxr0AcTztMrxNL4e%2FDnPqAh8N1L5Q1f4KIXi5wdqN9LTq0StowZ2jybpWJOa%2FI%2BIoHO%2BuflTio50nxFB3pHMPBTWRgpBJA0fsHv2VXYqFRtwYC6ib9JUR6bMgovZgCdTWazi8D9oF5og4jrvXq4%2BblCB7Xl0309ySgBQc3LUE2VGydzjlmuWN63CcOvBkHOpAP7rV4eCwE6B63e%2Bqgp2yghRHc8al4LLc1sOvrVkyqvqx3S%2BZweQQqyzR3YVsjW0DCvtujJBjqkAZo4NgQqaTsr5UNzmKiG955G7CpaYzahW1CW5sY1jLZ0UX6Pyg6XWdxUvfRSC1zWYLwPKOsMdZgbUTkkq0FBpBw3DVowLrUU2ofwBYEibgAZpjBvxw6%2BvsDxJsKsf1PBbaUGQi%2BTFZ91QnPpglCks9Mjlz0Pxi%2B9g1lsPbdLW8rW2VfrfQyMRWDvwZFEggaObGP0pfQla4POJU6e8ZFFY0VG0lk6&X-Amz-Signature=c29de232c96075e96def28b68eec1360e9adf5a42e4404751ac88c4344f214b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


