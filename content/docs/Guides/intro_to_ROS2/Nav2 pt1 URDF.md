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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=74cfa19aae023df359d24653c1d788c1d47b7c55c2c5346ca3a22a5b56366d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=a3c12c5efa0ea4f2fe98bc1c268ac08764982d5fad59679efa4e90bbe6425310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=aa27b645da6b0a46ac71e764afb595184dd05d1b48f907a2b7fcfc934e416a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=c4ee1addcb79b6be49c467aeb133cce9a0e9546a20ef4e7386acab4ab8c0cd66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=44ab51beba5045adc4236eb114169e08533c76428eb1ef7e5bea5a1c3817f518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=3d7bf1c7a33792c13d844d20b1c3766d0e17c9f983f1db29a3c642797f628ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=1c9a7d9de24a79d24966bd6744d117e9c6883d18b7a32168aa4042c1d890be1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=9af631c187202def1083f9a30eae3c1c2b103a99b87e8ac0d643dee09c067733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=040fcf93e050f50d0d8fac01fce0b0dff755091496914f11d37f9cec033f5be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=2b3bf96c8cf7983b510de68ce49f97f122ed38dca6442877d629e1c9424d7159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7X6OOLF%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIGBzDfDcUWdKiyCSOqEzqo676FuS4GZ2AAKsXfkHEpXgAiEAjeYp39Z2yIBUrvvu0%2FwhsAkhAvJ7OUcqCh2zL5pEHx8q%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDGa6Apj9pog41qAADSrcA48yBLIabZD80yBZC773krbWz%2FfY%2BVRxCY0x1IpKuEErdMtrMDvqn58IvsdVh7XfbknjdMDXLKZJF0eJv6aIuBMANbLxdH64S%2FmQztuDbkTfHnYPEjCoExfh%2BIcW6YVwRz05WrEM380ORWHiX3SL8qRJZiJcyuyuurehsv67dqT4UFPC7y1IDp5xC2YIcNwVSm2rEN8OW5KC3YMgtiieRBrvN9%2Bk7FMIbGX3KvdZAJBYCe13g4I6C%2BstkHcRoIlKjmnerqBbZEQQWBduHLRJPeObpj9yAFStIblJtPMmhZ6EjvDhCtVqdi2Z58WmrOn27JQ%2BLIMVQjrA4veFi4hT9tWIroP5McLjZ6Z2h%2Fmxw1S%2BIkXhm2Zschg7LLBeCmwDobBbiNGdBWQZDd%2BXCi8adTMQXCp68caFBNszOy%2BdkeBQwLaARWOUm3YvV1Ea%2F9pACV0RWg9q2Hud7O4BVcWedR4VGQO82%2Bjv9KjPeCbCLINSPo%2FYvb2%2BmDpxIivMQCGkDYp79XBjulll8xGrOgijYHbQVJUq%2BYz%2FssTCo0DuNYaQV2hX3W84vdLhfN2gsoNxoNKIA%2FLb9Uz4TbQfM9Of4nN1uRgF88f%2FtKmPOr2sewpGPh2wRRPn1OJX8I4YMK3hp8oGOqUBi5nd6h3YMat5I%2FozJvaTLcEYY7eTSTbvr0%2FryDCx1xGsQn62xQhbj1n09RIcwTDZmCAEFey4vDCIaznOD4SlctPNyKt4Mhgq2X%2F1c5t9QHuL5ye%2FpUQXgKeYd4MzcfcEJ4fIPmiFt987CKyyZE4EIQf0ZziUHxEqvdzakVP9H8LisU311Qy3M2z1jFy5vD7ET8ND4oFbQB9TWjqNgzNsN8BoNFyV&X-Amz-Signature=6eb589e6173cf5d1dd6b1714ba4417372237f1685426ae82b6fc2b8f2fb817c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZT7Z27P%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQD%2F4I9iZQokAngt4%2Bdzt9y0tspG61nWfrCCc%2BamiDuHegIhAK2P%2BO%2FRGcj%2BFwAOM4m6k91lcHYFK%2BOUIKCPu8fQ55QYKv8DCAMQABoMNjM3NDIzMTgzODA1IgwSeFhlQ4M0vN1yF6Uq3APn5PBZ7lsM%2FOyMH%2B7m3arcztUeb31k4z%2B9aKnYrgznwUjoZYtiBclu3AvNEv4juFHdeiEnkL%2Ff6S0EjIbEsvJLC36SbK%2FF7XzC4k3t4CtiedKB2ppvh6wA3sE3jiiOGH9g3C38cMCCBwAGVYjRZA%2BfhDWtmaNO4HJikTwjyd12jcQcCc7tqS5vFHcQ8ErVJllfZznwiSUvkDm4AjkVVBN6nBxt%2F%2FwdOIpuJORxOOQNlaIdezbg%2Bz3bfqcGfzR39BpABj71aEeAUtNwrKXd0535yKVUHdxNmXb7lM7NroP1QopQQyVEW5mX7ZAbfBD6ZN5yghH4xjPxBROYkGAA1FI4WGixK9iPtRBbFBkZZcaasnGghNV1UthGD1rgbyFABt74AUQPvaZoi2M1ZEEDtf0NKYZy5aUc3TO7LFEBYK2E6jaCwBr7VuBiiSxwfDFzdSRNVUmf2Lwzi08HngzRcpWSv5fYWEyNsm%2Fvm9PYzto8C%2BqXJzeSsUOPr63FwfZAFidN1nfHjKLUuVZ4MtTKjegUdqK9szeFLylEr4Xex5DGoTDzRhU32kLv0sbQaagBYEaIeHS%2FxgLe%2FiUMPbVYVgTuHIVQJyEFJojADVVnd9QtoE09FMkiOeBizmYQHzCg4KfKBjqkAa7Oxd8KEEeVjfQFgbIRZsWCDHFx0IqWIQgR5xISa4Moy%2BViRJXZqON2BBhawoCEnGm3w1x0PBDGyeuKk8KP2Bnsm33WkR%2Bb78s80zmdIXB2yni%2BuA7rrXZ%2B%2FEq9kw1OhXVDIKg8x7tLj4hVxFIil8w4bJfndXGy00Pb2Ea5mLBg1Hp15ma1SEHLF62rExEAyBkC1g2NSMebsIVIpN%2F9wS3ZJwA%2B&X-Amz-Signature=d06921e53c84644c58009f5f7fc97b6787ca333177928156992b207cac2aa38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FCG464B%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE8eviNcZYLZKSIUaORdyWTUlfttynCUJ3bSdUk1vwf2AiA12URjHqv%2FLwEmpxl2ZsnHDJYKk4VkWf5D07M6yd%2F86ir%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMz6eOEtwaBGSgTmFYKtwDjwlOlFTK1C0Z8D7QW9%2FiPyKSq3Ddtm33LwuAqa6CCrsFRw%2BHjcdR%2F8Fgozkm1RJJh%2BDi1n5tEpbwPwDYtQc5pGTlZMXeyJGnjdKVfblcmhnaWz1p5cPwxi4FTU47ghtN705N3qpLkkzzOHbQL4DW5EHn6EswRMuntLWFsrrsNpLMOzZHfJuHEb4kfL3dpnGt6acZjulnebS3enBWL3Rco5oE6dzc6jjF%2BOn0%2FYqbJdLdjhErBURNG6xvjXPTnkx8GJjDsKFBlpjUrA8q9gAnQ5AYlSZgAegP0oqm3deZfwjzZ4%2BbW6XyY12FfZQnvQLabX%2B422i4QOnMebrTJMoaWMrV6RzwK51AZ5r0f29lnA4oPAKKyRwCad6WfxH23EDYebuJgaBAEc58pmo00rlgVyt4pEGop%2FzcNgR61veIys3sGDJ9YIhouaSaeYHbVBf3uRF%2FcpKysbGz2H2LLCrNR%2FeyjUV%2FiypscsyuXsslxIj%2FDWmHe0RoJ3So2sO8sWCSmvrFBo2UJLslWX02uXsIvLaYTF1xCQo9erGcCEszUDlrrOKDD3YT2e8LxcO3D5uwnvfHkC0phd3GbUJ0WfPjzHRIwDoGRuHmPnlpILkOJK9wZnj3DEGKGMilO0swteGnygY6pgHMhTbLdinF7Q1l1cnz2qMA5gjLPBbeo%2BsP9jR%2F68JHjWKnX%2B2DvyWiJRYR2sVss%2FbYOnVf8yrwExWt9cdATy06CxKakTlGE28bquqtqkmc5EijmZmUrxhlQdYLWe9QadLY3Y7tWOVnfLEseeBnYAeV03XpV8XynQlFoqAea1ZnwbouphoSn65PwacMDZR9Gsdhmzec4CNWS6PzVh3j9gu1pv5DTmwO&X-Amz-Signature=2bead0f80d6fc76533c82424d6c6997684b4030e0dce2c2e5dca31f6aa65f417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=e990b17727405b69432a1303d5ca132503a042f4580af6aef09d5854adc68f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5NBL2QB%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIHvtHirz%2FtlIdt29vXv3WZhJtTzHZ8JLTxYvaPYmNDWnAiEA21o%2FKn9bS%2FjzBhi8cTRBZX9r6CDYhODE%2FV2GCxPfV2Yq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDA36o79HRxZb7tTVRSrcA77%2BSLf6t8WWe9yB66dK5OGmwfb3z2oEcrgJjxCGUChYhhtDogxbvkG3ohfLMxbA9u6UNHaFUSkdZMsjbcXVHFK90Y2Bo%2BkzCofSX97VGuqy20Qy9CkWtpDyvELQdhRJamVb99e9M0QpRG%2Fk3DmerOhbM%2Fa%2Bh4WdiLo47FjlTdS5bn9k4Eu%2FpqcfLMkkDhCP4wiWLRbNm3Yd2y1nz6gNk7zM6vm7H5Wo1mxc4y0dyjNy46pbnVbh9dfRtDhhXXQBwK2G4YBu8Gm1qv9QkJMLJXdTi%2B6spEsYtQPz5ZGqx%2Fb9K37Nstg9yEy3jfF0pc9J1Pw3crKOPzRZl2gsgcjakLa1kIRY4m3rkv7q%2BNaEWC9uhsuXkqwjq4MjMeQ6axDcnb1wMLUZmG0UMp0iHpyt%2B14pX9hpbTXtk%2BL5HXSxdDGHKow%2BxZc5A0eV9gQz%2BCIKrtU%2B3Lby8QBbDwrLTfxb1fsC4aEQWgqOQ00WVCyZ%2Bez68UeLDQDsHhPZIsHskHbfZXyPcsAmWTLPHFi0xRyDh54mM7QMl3%2B9rrRYPRS5r%2FzV6MDAz52RFIANs4I5pU9ZBnyZTsciOupHqI0fSTDgeSNMsrDCYyrHlsepPA%2BrSndTb5dp7FCjttbBIlb0MLPhp8oGOqUBljFet5v1d36hKG7FfEwU2YEeiR4KUlvCjkQBnjxVkxtJpcWvijg1%2BUlhOABd4%2FjiEH1Oj%2Bs4fUDOdPw7nfDLN5iovRBsJscZ3wQB8igEBbUSuTBdILijJSNF3lVg83x7HX6x%2FBaizTC5Eczf%2FyOuJEBn4gaDhuPXTOtu0PX1I0%2BFM%2BC8vwMN30hW95OIdmxs%2B4PWyZpjbzPzjgqN4my53osp1NFI&X-Amz-Signature=25d86fb3b9b8f2daa13554928c8106af0dbf2d350dd5b4a148eb145e9974e5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=742c2c0dd83b413d2fd9a8b67c539d3ed1790085a8c22c25c63ab9505f56a89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ISBEOD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIE8Q7qzrD7hQSpS0cn8cg8MhPG0B5RaK6AOVRPbZsyu7AiBGuiuGOYC4JvM%2FeM%2BSWht2PHqOX4jw8M0ljltHIatLPCr%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMI%2BEoqdHp3QHK6Bi8KtwDSRmxTNX%2BonQ01ADF3H%2BkmAtavA2zH8zyAGH0PUZOgBoaP8agqTUWy7lYFsBRwaQ91J%2F%2Fds3J3dCySVjcI2jybSIGKG7fV9jdNjNSEmGUJzzPDqBDmTj8kleSJgz8QuW301xRilHoCOChbH%2FagKoFheqYJZ5IIregp4T4IhZut%2B%2BNaHxhzGeDv3nHnCYsVchrQeoy2%2BwcMks3WKzDCwsOGWiV4bMQUR3qI%2Fz8qdnOjnS54jFtnYCASVbulR%2BTBwLxs8AQDhtQbsT2OOWj%2ByFi%2FqEI9k69dC94BojtmC4qNHPIHqAq1%2F8fmcq3YOQHBUnl3%2BZSnZd%2Baeljn7vg2jGpUIUkwH9pLSXGK%2BGl903JoCHZPzC%2BJEAdl8q7urTX%2BD56sy1vORb2wqniaKqBuSh6Y8GB965boh6WgfYTfhE5tOhMuj633A5HhxmPXZiDUe1l%2FCtTSXkZsK6WN%2BPYC4KJig%2BEUGkWUSmsMI%2BQy4rdYad78CP32nmLCDO5CcS1JH9c3vsvmx0ZkXKP7IemoUuHMDjgHnsgl9FRMswjDrLGoUz9M0h%2FXUgmizTE%2FYZ%2F0O80knRzI6%2FLfSOAYMrjvG1Bhe%2BscZNdVcJ7t%2BSFhnD81YcciTqCqCsuIpjs5xkwg%2BCnygY6pgGIFwYFY9XJY1ErUsNA2XINglkpeWUm6vKHpiM537ljlPUU%2BhUZ3c9y2vqOZTW59TQ9KE%2FQylkZgVbL82OtN4n8FJqRJBrVc%2BbN24rajniTL5S3e3nzxx6O0ES%2BqFpuEPMdyq2WeZpDpGLRD7GyqIljn5QyozBwqShC%2FfIh88eRjM0PZQZJChi4J5pW%2BfnQmzZjAtooz7tkMoMXFQQ4D0mGmvipBDTr&X-Amz-Signature=290dc8fe27e423b93bec0835702a22ccc7cd11ef1f636b90fe144e51742f90b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=2da84cca1dcf35963a8506b3ea49f074a95d483bdad19da32e16139c9999f3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WGQ64P%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIAZLICueFTPgA1rAlEjg457cg%2BVyKqWlV0owvSXDaf%2FkAiEAi2U%2FlfIoVRctITKOv2Emtuo0ELP%2FkxKGIaiuBxr0Nlkq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDF6lwL2ttns1NusupCrcAxZ%2BPLmdrLZ7BZmn5utnjmlhTbUAw8FOQLNo5jCKu2KHHsM6xjxhjlSPvA0%2B8cyI8aVb40mnBpw%2FSNSyXo9%2FziA007aqa60TC8PrXdSmdLfibcYcZ%2BgZJpAKZtKtY57beeyIaodz6bVDxusTO6NA22r8Sdz2MeYXAOADPDD8Me5MljIyO8A%2BhnYMF6t0aqq1hTEJEJO28b1UxWgdM1v2wpjqcuAf5vMD8%2B2j7th2a3p7d1eYDkFyIRgzbNRUsIUx3h73yF31JnLv33kF79FIduKq%2Fjhq7UfuHn8JCe2eeyBBoXulbwWMr7vscx%2FAMuGgltN3ezgGAFRMf4h5hRitfR9Jq%2FYf%2F4fDyZ1xjAfiYFWGEwz%2B1rLKOwFjok%2FxzAvEEf0v310NcKtMp5R0bcTJIdbo7XdjhkV6tBKROHQV%2BrxWfb%2F%2FIUI8ub89arkLZDO2OtLcr9PZKpqLRW242MPeOYr%2BG2RVJFGJvdk9OVg6LRAoB3LWqtqqg%2FsU93ceNLfhmAK5oSy4xb5sQ76qjMTXIaNRXlnVwPkxzyL6tczf7QucuBHumUdKCr0zVCBkjurAgANZ4P7gaZ6C6vI5eSfBIq2ixfaLZLJ6%2F%2Fgpj0cvSoVzU4anh358enruaSgQMKzhp8oGOqUBYUJypY0DYGYBdpF7%2FsZEIJ6lb2MbuUlbXyQ6mNe1ghq8fKtmVLWzUOOgYGXqcSK9I8GMeSrrM%2BB5jgONVtdbD26JrcFAlsPryZ3SxM5H1VBdlDTxgNyDOoi2mCWP55jLKz4z%2FlT47c5PMKkqHortpETUtq5yoI4rYJQynwHBtUW9qFudo0NzkSjFrnrJEKY7XVQnN1dPsBq1ig0bAU6AavAcMcug&X-Amz-Signature=d8a94d6a14a683e763b355cead952ed5880d2af49a1c283e563ba06164717612&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=7b58926cab26e4a196ec3241c26691b3b3d61e1109c0a90a8d2bb17aa3e75324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QKM6VEX%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFj0p1QrhZ0v2RBaAgc0lVFiAx7ZW8WjVTRk0R2glPvMAiA8y6mApq5JVmsBZ2S%2FqVYlpkc%2BKhEJhXLxnilMPy4fUyr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMG%2B6NQu5qQqunRTRkKtwDmBtssAef0uEMH1IQfgClVVFlNZ6UQfq2pMu6gcOzVqdRBzprcEQikC6MwYIjoexBmPPiC6sdCdBu89N2RN7xPjXXBwav7ADjHVQ7PGVF69CF72p1wCLrhSq4xhXLLWBU6qJ%2FtA3THdkrmr2ym%2BgjECciy8NhASKIA%2B7jH%2BhS5CAauxM%2B3P0KExuwi3V3czdwIUGOYTkgCR41dmP2tnSGeRRJsAhEkjxjJ2n6TZnLH7MQ8tzcWj0hMrI1ktbBwopJRhvkKZ12TuNoGPEuEqb8WB8r1QKjMoI%2BTj6JZaoxCBluGeM37k69TS%2FlRc93VS3OprLoyT%2BkUuc%2Ba9KmcwUwgPwhuQz1r2TUbQ1CoDyYE5vnVjjVPtR24XUzPgVecT17l8%2Bb%2BnObdCXpPdKP6jq4hCuT0whUPI72FT%2F7Cmd77yVrbeV8U9tm4GoZluu4PqhA3tON602L2heKejhGP%2FpTtGFIwZhz5YmuHs9eVuCe7XKNvnwNRzd1Xo%2FZRoXi1C5v5PY81DMdyF%2FbJDNcmEYgXRojIlqIYrNs7BrPwLQNOhSfqV79zq9xYdiO1XNBBKNqGZ2IM0yK16TM0XqkD%2FhGhOnnx1NpIc3Y3MxT%2BjaaKa5XRcLgwE4Fqur%2F0wcw%2FOKnygY6pgGtDLsRc3YvlMTQtTH0%2FhvcjpSieIGjd7TGwEGAgEk7HcTa73QRA%2B0cBgIYRV5SPr98SkJsSDfi78a%2Bu%2B5LqY87BOnCA834mBXqBrM%2BedOD6OuxE7kWUG98X0%2BVZ9kJU9T3ktfCoQgyXwQ6UekxwxTXVnTFq1gszyqlX%2FjLAjJHc2m%2FcLrrNILP2kURfycx3SUHtIxiwM9rwHY0hpENwagOHpstN54L&X-Amz-Signature=d67009153cfdc50d7464155669a44d5ded520b2479334c523991626be8158c25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=3f5b26437ebd2601135b5bed73a4c9fc9904353ffbb5c9e694ebae3735f54966&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQWZB36G%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCsBZ60ZzLWcKGn9nZtWKe3Djhi2tS7n58ozE4MfOQJ0AIhAIvvGiG%2FDIvhvs9UP9htK7Wf%2FnRUB3KfngI0KntjFEyhKv8DCAMQABoMNjM3NDIzMTgzODA1IgzW7%2FuUdxe31ast9loq3AMyzd%2BMtLY%2FA8UBkooPoCTqtf9WJHADm1%2BT3FCycUbh0R%2Fc3kpRm7LFtX3jel9s4vEBclV%2B2LHoQBdb7b8bc5Kv9hV6%2B1ZnRIk58%2BcSAwXmWP%2BJezDCzqThWH6Ns666ygKuGTH4zMyB4lK9cjHqoYm137hC24%2FNzBSU7elR0LNE2cAoJX1BrPzOBi%2Ft%2Fx%2Btqv3HwiJj6NHN%2FPlygR0klLd0F1lg39ZgbXqhn5HH0VV%2Fqetzc955IDMT0cj6ONdA6ftJm5zhsbWa5gw8KA8dpDLy510ZByVRpJrWv39XvpoeX2jmBdRXZK2jlz9DkV3rBetwvxMieq2nwFNk0fhw1JeaXc8PWYnwc8o10n6%2FCv0eIRZXgsZpxshDizBeL5DV58lL2%2FcAWxRWsTg%2By8ChwmN%2ByGQIhrrva1KBWXu9ltAv0brpR25%2Byqoi9kYjJjeaP0w537zhUuVz4xHEY4ZFCY%2BosuFQiz%2FyRdzXXW8O9geveoLINQHd4Gm7YXdx6bdE0WHMQJ1LJs4s3sZu69ZFy4cXe8OOPqJuCxCEDKj9ukdAE%2FXwBNS%2F8EDci0Cd1VcxFr3u2Z47e%2F31g1Z67JonzQs%2BMposyEaH8CvjX8HZp44xSnbW4m%2FzwFV3GYtyJDC%2F4afKBjqkAcL0XfKDMOp365iB%2Biys%2BYHK40B%2BPQ3lgIYyFcNXmn4s7GYwVaBpH8uXd0%2BmRYxN1cpAuqTB%2BOT%2F14YagukJ2NUFlAW8jp8C79hn0Sc4MBbd1mb0IYu0fapTFILZf9vP6z98J6PwjXTsnoRT6fqO13eSOC1kTrk6X8tOLQEqNfY8iTDSLFmlyZjZ1h4%2BZvObBnCgPw9C5WZ%2BXE1iEy2bPom9FCuB&X-Amz-Signature=55f17540d9d4f2d19ffa3ef49a6befb09ba342322dffc8071548a31aa3af2680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XYJKAD2%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIFinbs0tWrXXReBbsqPdK%2FY6Eq%2BRpjdaceFj5A8WireQAiB7K7bRxuDdidwJKB8d746PbeVJEu6Xf0WGojX6yuVmpCr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMsoJRmuuecFUWrcpBKtwDk%2BmZvoEMIpFKOTo%2BuHzyYS1zHSg%2BKWAVTY1s%2BFjZC6VnMDvodEtwDcJK%2FOeDDWHiO9GIQUv58e1EKjFnETGMBc7NaCVaWXjKc16vvlYyauexf82IH34bKEKyd%2BO5EGpZUFR3DJ0JIK%2F7WyprYgqztuqp%2FmV5On0XJR0gkVhMRj0AntT9Gmi%2BoF%2F9gRshpd53w795UIxbw6%2FN1z7xwn4Zo%2FxziowNQqeW5S7l9vdYfW8lr%2B3aYpkAhHj%2Fv%2FrL9X548fHzblpJyYQB70V6mZ29ov9iDyK7p%2BNtHx%2FGnOoZavs2gQFpZ0opsNPYgUjEnnsdb7v%2FUT%2Ft0%2B60BN%2FfmvTTlM2W6GmN7l5kdlYne2M8C1kHAnco5QjwS04c%2B75Gbj%2FIhSVgNJSu6g6iOMXhDY%2FZ9jQMcHXeFgPi2V8RmRzfTbBSi5CrIWodoPzlEW3VtGUJp2ia%2BJ6j39Ac9TQvk%2FgFQse1tZ8%2Bvu7NsPTjhiVIK8dn66%2FUTUvqbdiE%2B0GaTMLpO8rnxqbpXo5ZFpI0iF45LwhV1Ij96QrsZTdPhNrtVye9zQHt1hF6wvyhhQS97sOqZwfwO7W8f3meVoEbwsJUnuIP4JZpUX7ptk71d5aQnrwioTzRBnN2ziTYHhcw%2F9%2BnygY6pgGrb%2B6z68vaWwpHxOkO4ms9aXOO8lA0mF22tVWWN%2F6LJF7lVOIekMvgIW6uy0IdOnOPeLvHNtqplqnnAw%2FwoQZUXPbHMUXjA%2FwVzJeHkL331%2FRMslCeTspmrJbUgYWwb9cKmq893UFonmJadTp3%2Fw3%2BAgosYKeMTUcTW%2Bcq8Vw1AdS%2FluZmCKpempOI0pJb60no75fu6nbSYDeQHskgEsxAmurAlask&X-Amz-Signature=6ebf083e58232f16bc7ba3ac0b789ad9a6287d14d4418e0581c44ec142751f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCACJDGV%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIEr2TSrLhOxSndNq%2B8IQ%2FKvW04ejbzVgrrAiMEvlWC4cAiEAm6pgqjo3uj1k8bYsP9YyYY6Co3vzyjWSKpiXvSnefQYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDDud%2ByJk9pspvwzaQyrcA3aV9YULpCub53fZUNEeKBlLJFvdQKDJUqiIBP%2BidDPg7eeM5CgqUcnHUICnscozLopzZec7wKCEkk1%2BVyWJABqaT9c1gbiBIDGuUtjJNAfN5GGvTGigIrjY491NmdJb2cbacZeaxoS83Kvax0KtJdf9OOnfUxJRBK8w9UbXFtx52sU%2B8R%2BtSI0h7EHsDpAUCOyJsppZd%2Bv3AYjuJQCtpLglCiJy7b1M06Iq43%2BWpfdNUBz9r8EqhNC5m0P%2Fl6LNJ%2BgJAuwbO5FDczyDNxUT7FEpCl24%2BLcAH2ZteYJOvz5NY9D43jAAviMDnqhkaoRneHVFZxuArl7bijVYvDEJttMsnP%2F1JtBg9icGEeVcSb2eW7Bg2MXDeJeEFR1UkMv5cKVqqa8JGmmJxZv8Wlv6FdhKzjrO0f0FvBQDdzIknYuh6RVyGA8HTZvKXp6U6Gr4RjaHkZx%2FLXWWFA0IuxKxcfOpRsGVspreye8BUsEzCdcBMDlJv53juuc1STrW0QYiun6Av7yCTT6wUNIE2jDXLfObg2s3x%2BzJE33WMfqVcq%2FuhOWp24EXSubpf0wgg05%2BMjEB23sie9uK%2F4qEI1%2FRe%2BcIK0k8BiWqmRKnjJMWGDs3okwC6MRjv7csWbjhMLzgp8oGOqUB9g8g1Q1eAlMccnLDK0%2FxmDQBQqVRfEVXfQHI3b7M020i42bdkxo%2FwSJrhWPrCXZMbpx5VEfLMeNG8XGuM1bp2qMBYT9JVScql%2BqIbQZICNvaj%2B3RF7rKRrylsu4N2SsMpWkiPQC9a3QTJY866QQ6G4bUPkK09%2FgDPPFtRZIajNewUaxlrq18kJcN7wGXlno8udvZmX1oTzO9d8dbjfzBm7EfLm6N&X-Amz-Signature=a009b1a4393618a8d2451bd0c49e220b26aeee4f3f44cd848c8b3eba5339a0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=f37dae8a99d8d26f50ed53a6b066c65bbc3efd69316add44e887e773ea1dbc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ2CPRMD%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIH%2BwfMqch7t7r99cnk6O7zeOFpI7%2BK%2FS4FS83REdskgVAiEA1CJeYALvYEhb1VmjarfbwORmhJUdLj0lbxG3B2bMzyAq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOsPoXP1gE2AafRWLircAzPVRzS8XevL8ZyM2RO9SKz0dDNQ3m%2B38pceC3GLSPUTtcqZojsQu6fqQy1LqZ7dttr386aC8J%2Bja9LUEfR%2FEHNSWWyTx3XCQ6Ockek29ZcywIKHNjezROl2%2B3eumRhqFMaStjqcfeesXWCXawhO%2FDs1XfGQlT7vm0sC8b4ES%2F6RjU8qe25hP9DDgoM89k8B%2FToptOQqQdOB2hLFrMHjO1SKMsFysppadY0Xw1kIG7OTUiraoQ8T5vEa2fhAuHafkC5in0Tsx5PptpsgNcZT2k3UO9%2BzmdDR%2FBNtuJ0YXUhCg8nrBitAROzRiKm%2FoLXaxKwEExXF9npGmjSgRqaeBsPJfuACWvz%2FeNaXPY9W1WHrl4KbLYd7nVhwCgeHwDA%2Ft3VxauUuYP8nRiIgLLb%2FlfIhsXSedNuELIKWTg22ZiTREY4EoeRn08s0jnWhiG7HwE8tN0iRMvXwTXBtZoA%2FZ9Yhv0VtyzNrijb1D6o%2BAObhQltu3YKctDoVtGGCKKYXBNiq6lMLzW2MypYASp7NYxGMFBnB%2FJ42rU%2B41kgep6UZofb2XecSkNZQ3bHKQcc8xd%2FkLAOre0J%2BRfQOg5BkV6LKMQQ2CQNbtokRCEofaFSfgf1wPDVy7CBFJYEBMILhp8oGOqUBRQAxr63ZWwMQhWwBXHC0hdXMgqYUmCKoDlwdgt8eXFFUX487pFLa4hMArqD%2Bo2AebJIyGGkFHbr81iVqwpCZNTNKI1CghMSQt2CEOTMOiLRZhgl9gA%2FpXAOFxVYilIobKyS8f%2FsoCI8edVJxjSia%2BdnJbOlTjCypdwlYtfcwpkxUw7SBsOCmRIeg6Bcd%2FrNPE42fmwHKcfZmCv9mQ6yuZks4kcRi&X-Amz-Signature=e166030fe75f6fc35a52b7f80e563d98e0b5fe293776b8e43b0fc6890e3746ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=bf36459941ef26f83ac209f066069799a81d72b0bc0df13b1bc44f8744beaae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=2cfbf836cdbb137a2b5ffb1f52e34d9e5686e671dd634767e0a330b33e762755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=4c7d52ff507fece9dde03de12fd4f219928749a68e47f8e8688960f4468a9b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=9b3af92d536d739b5965f6e8f431c37070c1acb7f59fd5eb8e5631e0f60e646e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LQEYW2%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDptL7d%2BOg6JVrwk2A1EAzy0rmWJG2iP8XxknFs%2FS5mOgIgZe9amra5qzsNifSZdUS5vZd0Viu56qSQsM8kWd0S0zcq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHMS9juxMuOE21xlsSrcAwM0AgSHl6hm3yyrad3cM9pDkkDjxuUjdiHU%2BaqWJbnJv%2B05bVYRKM5x31ko2caeWI%2FbPrpr7jF7lTLABUIAlAct2EFZ%2BDHjs2Vuu9d%2BG6wYvfpib2pzmVmcVkTn7zzocr3xbhBzA%2Br%2F9rNj5DTwqbtRZvBITQqskBflTiVRn0q5DBQeEDzdzh8I7qGGQmTlPHszyzb2qUgi8FF6dh53DivyrcbsEZfxvjGRTULs5GLxf4ooUxr2p9AKcS9RVarnt4yyMas6%2BibwGYzLoH%2BXVXftgoR6%2B4teBCdj%2FPV1agemX88zUiO%2BioF6jUTZ3l%2B%2BUpAJJltUjf1pvXCtGo9kQCJlJwX%2BFj3nmz3ODIfsCaJA6rmUJb2C35X0saXIUCFXcjrnmjniqHnQxjRhhNKXSZIFvwzNC2Z1aRE5MQOz%2FCorvpCc2VxBznpGIpRTMqsjZcv38LI49JjcLjRxXhdDkiw2PgIABocRTH6X4hi8ndLUPusPb0dTi4mA4ZLB3%2Bsu6y9%2FVSUs%2BXL6FS4D5mcTb26lIG%2Fyd8Kh3OGOSdZQlrgG3vmrOUEa3e%2FGJ9A91L9lxPdaxrqVdHo2mq6aJFNz%2BMbrl%2BC9BUpvbyAynZSNKirHqflGOoBeZkAdA%2FcQMJbhp8oGOqUBnaJsG8yrw7StoVibCjsPX9fppohj3SFrx9F1%2BI1fLQokdrVW6vvoyKDOaTPvUXqKOpANbtrvIGww6tkULhrlta991wP18yxntgj8b91FuFI3hvI2QY%2Fwe%2FGhn21Aq8RfgggPH70fDLCn17GbJnQSAQgOLGranf%2BxLVsY5FkAgmMoxWgrqy31Uwpew9OdJXhlRPdJLwzwOEApLJbk%2BLEyhu5wXX2H&X-Amz-Signature=18ab0fca0faa9ea46b9f3e34a5a893367aeb55c58dcce3cc0c1fc8ff20a84ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=5b773a51008c0b64b23474a9f0d9031f60fd6f9e27e26fd73d0ad545bec65b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=e8f7165eb975631075f5747c83a5e4905e9b7c540c5cf31cf8a1b67fef250c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=4c7d52ff507fece9dde03de12fd4f219928749a68e47f8e8688960f4468a9b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=55692c8088a32c3da80c3c11415a855a0a77fabb18779e0aa9c2f1a026792ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=01eeeb30300fc8faae74d8b19eb54f5c9a0ce595613074bbc4e1b5b65ca81cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MDEK66M%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICcZddSzkrauoI%2Fu%2B0dSQ7NbhQsf%2Fdj4tu7TVvfsG3t%2BAiEAvEJ0JlGMlMw6FvAjqZsiEre00dipvbt66oz7YjHstLsq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDE%2BLPQbV7U%2FLXQKOyCrcA5bA0US6LJwQBtqmOn%2Fjzn5qDVZRmRgBddMbRVmxf7QERS667jRDarsN3Iak2kQeXkQc1Fs2ZTSyl6ZqYWavtxqJn%2Bw0MAvOKTPPkvo3map3KoWJnqa2zEuwKfMR7%2FlMTh3DZRrCMB6u4yOsK%2BXivBsqxa769IAYTzMfd%2BuxmKOuIsowU7sDc9rI2btia0A1DGEXnqrrnR7NleRT%2F5TkY6QFkq5kMF2tI70UjfC7Onx6g3xfdObfhhvsRxEbxV7PBewzbjDkmVIvhtrQ0tiW4nZSJWUQbyZPTSgP4%2BfuV%2BNROA7EYsEVXkZwr2%2B4eedqWoHr4XhLjSHwgwYCH2eEg%2BJ6cgpdJ%2FEotZLIkjyHGiGsxQBwnKBVseeC9DzsUViTFz%2F4HRO8SQ7cQYkjvYRpSZ0IvDmPpZvV74C9q2CZTZYvEwW7LJAu8uHkVQ7b3%2FJrjO9sZ%2FRkVgO1tbPX52uc%2BIAI0HfCrG4MDSDyAXNsuuLpl%2Bk4PkTaGx0lRnWBc8%2F5l%2BYQ%2Fzu5%2FY%2FpZAEMiD59dnVGa4r6y20Kq0zDWC%2BZ2UWrWKlH%2BkUsr9mcUBRuJ2hawIbM913mBIl2%2BTRz29muCebMWHQaRmtoGQmSEuBWrcmL%2FhfccFF9yGQfCQtRMPzip8oGOqUB43KhbQsxA3mcpPXlb89V%2BjxP3H1GILKFl3Te8bgNu3vmcX%2BrSs85O4stLo22w8%2BJGBD%2BUXKiNXJmBkh%2Bfm%2FvfM6kqFG0TL0hdPg7XAsgNv2to8HFBTmgw74iblCD4TZ86%2FC9q5WpoQPxTDCa4JKKudcBXsYPzW7Rx6LBPB5Rv2xhFegSk6AAmG0nbV0uios2dUaKB6LJvslHpGimzDVC4P4loexL&X-Amz-Signature=53e6dc050c72da76e16574a230368429db8dd66c403c7941456a634c8256b8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


