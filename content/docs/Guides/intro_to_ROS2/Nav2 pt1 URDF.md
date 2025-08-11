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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=523b82ad634aeb772f938282bc1d830e196e630954c7e03d65e288c8342902cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=ef97725e03d6bc1da9b32802016c13616e455a43bd8012afadbbf89d227a10fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=a46b7b5de8a86754316e07eac3a7274624973f9a80546ede4cb61711cecebb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=5f45d62654df4d5684893f536b15e07315d53a3033d82ede54f305860668526f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=9b19b97f841c2f25cda68da22695be45cd035190ac5f8ac00964b82b5740af62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=f3829a1380067d5443f8d1d83378664d513875c2e334380cc84a487734f71b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=aa12a45bd5db6ceb3ffbabfc36914cbd6e020c0283b47e271eb0a6080f1b190b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=b01566c4d2202b1f160b355210af8e1fac79242939fe6526354fdce7f6421913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=2c59266830a2022fdaaed0290886e79316248ef913d36567aa999ef18ab49b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=19c35ea2313af9d9a7524bde49a3f2b3bbb3cfbda304093805789b4f025308c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRJI3VV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCexcdglR%2BAVmqzqDK9fICeE1MA37vkK1oR8wNSVPbkNgIga1rLfr6O8a7lN6bpjzpmpnZCuRDuLGJ89K8Vomr0U2sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbROpvQDTa%2FvJrXDCrcAx6J5GA2UzW28Aj6%2BqEaUL%2FJznS0r2lh0Zr63POdrO5SLVlHVCqSF7idi0mmvRK%2BYE%2BQzJGVtf6GHQlJmYokz5Xbe%2B77q%2B56pV6IgH5I1vr217AOYHxH%2BDnYOACcgRG9HRl59sot18cOxkvXY3TLEodN8sv4omGsGoFbnxHwX4jV5wZkXNpdyd4SGnl%2BbDgmNGTFhjHwwat%2FUvN8qZremtiuuiEzvu%2FCGgK%2Be6qcjkTPZ%2BqAzykmKMSI1%2FBnwSJS9IQrCCUnWP0j%2FIl6CZj30UX7%2BzFUcngK8cPdjPT4RuL4fUYaX9fL2jtwKIkpErmilTJK4aTlwS5r9CY2FZoIQ1s4RaDLlR9EcmCbsRH8UZDho%2BFJo3TPaIpQ%2FhBcojpGXiiqBa8Ofwt%2B6vtt2n4hFW79W73nE9SREXa%2FFyxceEPq07qOH2EzMch88%2FdfSE%2BSYwJY23MxwkRbla3fQltqQvk77sgB95Q9aUyB%2BFdH%2FBoUngDXgvBD%2BKIa%2BWYNPHEQeJoNK96Dz%2F9EwtJZRgabq6kaII9HEl8JwNicBgtxcjC4P4xbBUj7Ib5ur5Q%2BbgKARmODrA3TKkvzm%2FUAYgc2RG2w9rnl8zUQVLY5uaaom98vS0h0MhXf3apl2w3XMK6r5sQGOqUBfDPhwCVImeHQZhw%2BfL%2FeK4xV9KgHXcypkgKsFyJn0vNA9sL3beZBcaloP4ZMGnvyPAZMWyeq8nEEi%2B%2FZjuC%2FixtQ49uPBoHvIWNmS0MBp2aPrIb%2FGRFb4x7faGib7une51w9ZZTNFPZ229BhcgnLgKiq53GHiwUDcY9ZVWk6JcRLaaaWbbCs6BOuxs9suxFZ4WhH9JrKIPWXvz6spTrUZPyoe2Yf&X-Amz-Signature=348c41c1f12ad50a381c02e91bd2162dbbc5620011fd041424fdb2e7dc7971b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OMHSLWG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7HNcM7kfArFIelmC8cnE1DHcZu1gp8P%2BUCzR7t2RNBAiEA6Yz6hFfeFbpmNWjlMLucFXjTQ0KKOEOd%2B3d%2BeY4nacMqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInLUrLRZtyoXOB9UyrcA9ElE7ubwHriPvhJHpjRjX%2FkhVoToroABgO2cv5SoCn3r2AAch1gzOe%2BGApWgnRcAPgqBxVkrextikRWgGa73tQVW8uZHr5fhkbw6oDdcdi9lNJpPSVAjBFD%2B0DdFL4DSmn%2BJZa3pn%2BFsjkCi9dC8GNTDdLRWNo8nnlKpSOStFVgjU5%2FhI3IF0yM0%2Fp%2BnPNHSEOD6pUr9BmLlaX4ZEZHFs2ef83xnhR%2BoEQgBx57It8LUmeQiyEkLM062mDsXkh%2Bfmu2CeZa3K877hctIlHmed1HflX0nhYIBEHss2UMizZcvbJX43x%2FuyW4uvB6nyyqMBx%2F5PNZs7qMvvMi59i8LXNAoHrkGrFd7ZS3qVFCbGkaa8tWW7kp2d3A0Hlf3jhFYf8fbYPwHpD%2BGBKrBnuc4VTtC9nnGbjn8%2Fg5A2Sv3urTiKI3SHYqi5owXHwp8pvz0U83qqbho7kdzEEo3gkG%2BDi2gOJZu%2F2s%2F0PSXnOjLlvhG%2BEZzVXmU1XvYYSTy8JdPHpMIU7ZqmGokrtNtgRLScilFvIItRGpbY7CS1Chg2UOnKcvmgjT0RovHRXEvESXZeX80EQXWrmCC%2BQp18xzTt2AwKb3v8boPl3y%2Bw3%2F43%2FlKtRI2aUp6MNcwHVPMPiq5sQGOqUBFr4Hymx2A7yBsSBPhwt0%2FLL6AwJvs%2Bq6%2BnHjMv7A2lADUgfNz2QL6ga68WdlcOg7cf4J%2BFxgDzuZlbvOmSLQVs7XXGGs%2FqjdrHFerEjzoncgTWMnYQ10El27j8aEqnXegJJt5ATfMPKBj8u7pbkSkF42ZmcGNyd7dlAhPUFnuUMDUNj2GaBhb5%2Bb6v6EqHihOPN7CjJ63ClgSqOawUYmn9NxMpSP&X-Amz-Signature=cabb8ac7ba50a248e658e1021eb343ed58fda2f8dfe933f90c5d53817bf33dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFHNQTAV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKxTD34Hq4xK6881HS7EiFBs2XC84PNaUjBXn2vnK0mAiEAyBtS8brLBW3F%2Fs59x5qQ03lUNnNR7WLcqCf15kwYMnIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1rCppi8KBMdcGmoSrcAzzykU2AM9DHdi9IyPjKkbYjnWOBnN33yETPKebHaKvuSVZLQmUGBz5zw7jliRYETQWeAKbQi%2F14MMleK4XtS6f7SvwkwiqbR1GOAILWN8DmfKhzyGcIRH%2BQ%2Fz%2BpGSmJyAYLkYjyjFYImKQdAfdDKG5NoufEhMwO37nsa48rJDtVdsP2DjOaOvo1Q6gyobpssvL%2BGISPi5psz05RUh1qDlzBsv%2FrGbXh72d6GqKebw0y3h0hXYh1eRaE9xBCd7gEoOC0lOq1wCh2Typ43AxaOcjJ4sqLhmT4Sdb7zB6fTXrBrZ5IN1EhTXTnNPtcyALBXrTQI%2B%2F6rz%2F7jLzh9bwQpnP9Pw9sSIuuBp2OrnTIVPpVsq%2Fgms8JHiCUlH%2FegfMT%2Fyj4EiGDiw6nMdzAooAyPEPYq5ap8oHrNI8ZmrdvAnNGaI3udGJQFUDrUFD4ra4IFy4%2BKWol16MGnRjGlcSn8eZY27jDomJkmqR05xBDa%2BnAg8blyi4Hxu7rRA8ggq%2BF7EyWOuk%2FpGOXfth1rhOUiTkEagAGQFIIWjDXlj53IfgKGbs2KLmW2JogfILmhsekFyg5A7r8FXHC60NXM0SzhldFmkAQNIAyX87asYIdJR6p1bCDYNaChI5cIcUlMP2r5sQGOqUBh8l4bLitGzofRB0v5wuobarJuylrmwZJ9Lx2%2B049%2Bjbq8BSJpuSClDCwfFXe%2F90UmzzA%2FQ10EsA%2B4uD%2FJ9G%2FpCBNFuOeudzosarM%2BFE1lNHK6h7u7M7oaH2xaNOZ6mtQBziGwstrRCGPJ0yhD6t9k8f1wM8ox04LfnegDaBihNXqyFacCULjCl0CVpSWMhNZXFEWFHCuSnK0HB4ZqhH9oESPyPmw&X-Amz-Signature=46bf6ae451d02e71962a600cf827b8cc5358942e3d8771ba7d86c8d1a7d1da23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=6fc321af0f0bebbc2756b9a5003c0a769636b38f16d052f9dca1b31c3c657a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PYKSDN2%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHESwTHeB4o0AWdzDJhCky5GT4aBRJePKDiosxE1hi1rAiBvetr2%2FK1Y5qqOarbZSEssmz5IrabKoecAYOABhluL3yqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NSikSVIe%2BPR%2Fw7dKtwDOawJZGRBRrEv9ZZ1%2FCj%2FNIe3scMj1O5cnvvFQNheX7Jf8RjWINPwymSal4IyJsvRGw%2FMazG0OOOGkXh34i4AObBMPUvf2G2LB4lXxZUPcPWFPYETovMrjFDYTV%2FYmlA5LXjRkk%2Fl%2BEsdWjeG7o%2BuZFvIuNTxZXQHOWoiM4jPj9EbrF%2Bi9dpcaddTgues2mnGDRsM0mA%2B%2BA7uYuP0humyKn6IdkZThvKH%2B9ff3J50Msl6VV2Yvb%2BdZPjXN5XeiBrtiJ9kFdm9DNSl8S4dMHMbS6bmUSiS2YJoGCun%2BJR8rgxbd%2Bd9o05pG6JPyPNPzoiygvB3EuEm0Vs3qftqYIr0MJnzrCHbHa5gRQX%2FQ8UikuBunvx3n8thNpDCbHuuLLlFCpGZGMpJ%2BL6Zy5N9NGmiN6csB4hdn%2BcvgoNMHX3Q%2BFCj1%2BCYHemGkS45Do7oZUTFRZItRzNeAY8idaA5EKMUqF%2FVv28aycaMY9CNPszKnzUo33SnxOLH4BZthifqr7EqAzh1Ce58db29YhoK%2Bs8MJzzDAZmrqk0FDj%2FHofgf5ydXqm6QI1ANkWWrDwQI6WFW9qzQEpdzrR%2FmjkNZcitSlw%2FU%2FakzYMkrPDPHgD54G%2Fj7yr%2FTYlITTcSlTUAwzazmxAY6pgFrO%2BHYWdHAm3JP4j6TAUwqmvKCTeXlcUECVIOjMa3uUx7HXRYGwxxkU0sGdS9tESyR3SxsEUt0dupeQ3%2BZvXRXtzBwf2%2B2Bnfj9jt%2BzvqhKOjOVStQp9l0SQ91vNHrSCQgGixzetX4JABemkgbiGZThP1R%2FLRDiq%2Fickr1%2FJjRYDnaKcHbqfySa0vqYd4%2FaoaDB0dTEEC81pB49bMRzvV7%2Bzx1Nnbk&X-Amz-Signature=00c9f24af1e059b56b5f17e0b56ada80f1efd6cd1e2d16b24c6bba781aef6023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=af2d03a81393ca5a1d3d21e04821c30dc180deadee00323a96f845607994fb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIBYNC7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACRDlg%2Bc8i6zNP65o5%2BoGyaUDgRSo%2Fz0gcbpW2vWxViAiEA1sUAeYQHbfPdu1ruVU1y4R7Oat6qN9uER3U6eHwwbLkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN7ohAt1CNpWbffAIircAwc5Tm6%2F7ALvm79Zxmn0oqEOJ5oQ6%2F%2BgHfIm%2FNKA3byK7dJ0G70fS87NzKZo9B6T5ZUh5eFxu%2F79B4pqujMy%2B%2Fc6g2sXaUPbL0ll5PwG8JAx3WtkkYwAowqHIi9mj15Nwcy%2FipC54qurN5VLoYPdhGAiceZ%2FmxJWVlohE7vMFyqXHUPRMX2vEa%2BhUsAoe7xrt0s22pMQmWupGZwyUN1wfg%2B%2BPjnK8l%2F0sFG2R1zVpASyE4SiYaI%2FldM6giMocR%2BU%2BBRi4h0U0vYJG6Qax92jyZhOj1iY6N7haJ%2BPaZYPsegbt5YZ0deGp6KZTGkqnv3A6JN%2F6aIzJamw0BKKEfgcOeMumZd9XlMSifSYMQw6vCpTynU3w1v%2FZW2mOrdY9D7lsFZ3r9drwNLACjgDmFWZzLqZR1RY7F%2FN5tHSlErc8HKiTjdUnixKTUl%2FDDfZ3m8GlXJHI3zzmENlFpiYbKobO8JwUN9q5f522Kqt7x5TTj7MQXPknu7x9nCeE1mrkC97TWiq%2FpNxDzI9Ak7syqHIgvEOY3sEzsyl9hOZa4qfA7p%2B3SBIWrsouw3xZgruIXV5t%2FLsFl7yOenfFMu4qu%2BmzhOUQh7eIbLvEic0opBBL3868Dl%2B4nB5a4uS0XBpMMCr5sQGOqUBcJOlR9J2pYsFMvxbTGMD3gClG4FhMttl%2F9w6X%2Bmv4mnOa2URpkY1IyBo0z3EJeJHwcZam4NdVFuaGJ%2BEv2VXIn2uRzFGxr7uIk4jfeIpn%2B6oM08DiA9uyMj6ZuOC%2FWV9RbP8BD9%2FqPXXg209fkcKeDlYjQsmTbRQsgS93wgyQtDL%2BXE00iIC%2B%2FJGiphmJez42oPQD6CqwVrYIlWLQOkpQpDqHHQy&X-Amz-Signature=bbdcecdad82cf6f2013667304588b1c98a7d7a42ef2cc1942741e9448402831e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=70da59317e2a1741e1b6fdb8007ae001d010107f00211d0cf2d6e56c1e0c5ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676MDB4PX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZzYGuId%2FKf2k9yQMAGEbJExacWyyfhC8FEwFBipY9%2FAIhAK05b62v%2FUXMlaR0Wqi8A2i3NBDSLLLT%2BtTIHuavnhgOKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbRS9uI0j44TJ9BW8q3AN2SiynJuxxO9Y89LFfbM6KKV5N%2BQa9W92g4TL2CG%2BgO%2FUNJqjYFulK9mxYrqHrWn%2BA3zc00w2lYr4A%2FKtSWy7oN2hWtPQ1XNdqcK%2BTY4%2BoE1Uh3wBUQvuQTDQUk7QnghfVqX8LgI09Nxm2%2FyOHjS%2BlOq%2FUiPGZzeV%2BdlD27Ghwj0ElISk57gx2SzqYDCbY%2BpmoA4kTDKPkjENd1Cks%2FMRo%2Fq%2BSsyH8Nq0Rp6h%2BYTGom6gXNyLxK2IFiGs%2FrO6%2BkXBLSAp5%2FqEKaAYyCbbjrWHNcSGEQDBZVQSTInDQYq%2FCeJNlm%2BWzqEkHF5Y4qt%2Bcno668cvUoh3bU9aOS2kVZ8PUZw1DGSY2Y2GyRqlZGQ7V5ob4yvZZU3My5DX2gr9B0SuPBsd5ZOdvAouA5yfuBrMPAkKPVeQNQYv6MGFThqyh3q%2FA5QxP7dBRUQmeo4NI5AA9HSzNWZ2%2FdC9aLaLJTA1Ww74aEliix20Q84OVZ39z5oPHW3w0cUHwCFCWK4H5JRerWC2R1ICBxu2ZbjuwAWGXETJmAFqgAzNNKAZRHaKyrzhNc3%2B1XRfsCY3CUzB9V2W3m3E5%2FTop8A73cW9VFF2UPtU7nmjXcDxX5edvPG%2BdA6MFnkby2c5EyAar%2FTD6qubEBjqkAWprJuY5vP5R%2BlfJi7ihapERd%2BbjSbN%2F%2BVWeLepyAPIO6mARPaAUbwOVuM%2FWZVjH9jEyKto%2F%2FUNzYj%2BPBiMWk85Bj7x93CXF7NTBvLRhw0hHkE2ib9htFIlM7gvURjG3lXAitCpAqacZkLADFbMqXI4mZDMjVr9iWmFSNYrfOi9%2FS90OPIMnexKiTwXAXyFiKn5fbW8jGDbOMIXB9BcOTLtYUIY5&X-Amz-Signature=08730425dc8b918850cab1f1267de9d66b9240a62d72d5373492feb25ffa0e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=5985c058cd2466f52cee22bf8249fa5b9ccf9ef73a12f7374b417789b0f5e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KWKLQY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICsp1oZfZD9%2FycGtAYn9vhKepPhjpxgAGtRx5bUdXPZ4AiEAhf%2BGYxWRICOXyzKAp%2FqNdp2ku3KcA%2F7iJMNQmTh%2BbnIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxi7VpS5HjQmNk2tSrcA%2B6f2PF6rQy3MoQNUk4YQ0FwTnNpSj%2Ba%2BQRmZem62xk2hGiEa6McXyYPXZc9743A9kH0iltMcQo9JN4cgbLysW%2BNdh7Q2SSd9y%2BisoKjHWTCGZPgTtSgyK0oNFcuisQmxa2oWMPK%2FAwxXai2rNNTY94IxfnIPqwLEKjF9e8AJRoFMwONAFrqb79LC5spqYPFEIu0GLQYZzT27%2FjstyrfmzypWslJ03CsvgQtXpsZwHp85ArD%2F8DETbz5Qu8Fx%2Bl0c5NozlxuGIZpcpD374EUXVMiNS4HEwxM1WK30bPXsG%2Fv1JWmoi5RFw9IjoyvMrRKNcqRqf0ZCftWInoVN4HYT9zGVqcMsSAhWZ2SyGuI8%2Bg4rzWdLAnNHveVZtlFHOthL5Q1ef8ZiDJsp61%2Bds6bj7IcHJmfhOSdU%2FYUCgzP8%2Fft6MQzSS67eTM0M62cxjGTHYD%2FVbhsuhjz%2F2hLXXg8Audpmtr2vNlpqQiFx%2BvXbYCbSLcU9OldWtN8tgNDhGA5k%2BOmiA%2FdpHjzuY0x1O8XAY%2F95oFc7YP8MZOBzzRoJZ1u4V8nzK%2FC3qzjbzxHJ2PKzVFBWhrBHDqPPmHZ8e06W5iE9LGvoxuOXimKjb0ONicnnuWSnrPzOzGaROQ7MO6s5sQGOqUByayBZdMrAdTwv60cLQhV4dwEgc0LMDE1VC2DG6C0qy1CzWqnw1GG3PMSwNm0D5bKti8%2F7N%2Fta6aHGJlWnz3z90UDHaSFw4T2SVU0l2yhQnD80AI%2BvIIMSJMImMuthp67Mk%2B4rnFKU%2BDrVUziMEXB4ydKfriveZW20qLoqzOta%2FaXEvV1T%2BwTqv%2FZjmvU7H9UgFMMVso3o7e8%2FhSe%2Bi9Dci4VCIPG&X-Amz-Signature=481a0c6fc21fb461f76e5a8b506f9327ae920cd39ab96feac44b90e4475d9e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM75LTJ7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBxMTfbYcorVNy45Ugt4pULzFt5QDHBgRpBMnsiy7JtAiBqCoFDk341qME88X9PQYJpaEUHgUi6HuNNIJnJj4aFFiqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsdTnDARuuZ5vZ2U2KtwDtAttD%2BU%2FVmjIsL6ATIpKG%2Fbry0dzgCai0AlKkrexSVZtPxdU6aLTbtF47Z4zgsww8IJSMocqA1bfZ2mZ24ZBbjTZ%2FwlQXwjM2cNI5QM7Ag8HuuOrlIAiDrxEdmxZp6gTW5bygL%2BZBNJFmOs9sCOZF2Y8Cd07OqAMtGShAqXRSI5RjgDZg2Kj9iuojDpHvnKk2HLK9NzcQgb%2B0ifGHp46czk5OmuRCxG1q9HbTt5lgQ%2BgTx8CVb%2BFq5ci9bIR3Imilq%2FoqPKGIzTy%2BFHAEz4%2F5ynO3d3QuLqt9NvkKhUTZyM%2FuikWBnzGGHouJPLH%2FNK9BqL35xmpixMNo7WCul8nLavj6LvFFEJIvV0yOQwG1vSwH8N85D76qJ0VWmRmfJ3mNseiiUPI6CGzYBlz6zC8PIIXLeurKySS35c6wi%2FWGvxzSt1277EkP5zN75XeVn7e3ViBmWZR%2BGjp65L2Ll%2FQv5e0wxtDYgOep6nu3Jx32EfG%2FGZ%2F93F9Yg0KjfVpxkV%2BMdrvcFKrNhSXECJ37ikMyrC91b5%2B039Axk1MMRQNkHHzU1TQ%2BTxxzyGc%2FbKIbXsxhGnxuhWjlFVk%2Fqe33KBD%2Fjle1UfzhEt9O4VQQPZClL4JXDv5nPIcJZ46YJQwoavmxAY6pgH5CIbFg%2F7WtvtRP4aqGNu5oMoabra1JxIQZFv6Fw7U%2F%2Fk59%2Fx%2FxSp4pGuk4hV2QIcyPiAzoIEbDjrJVddgKGsMWfB1n%2BkvoK4HEPFZcBtQf%2FIlC6o2lPydDLjKQMvHEfGeo0UQCo3bERKRnG357rI7%2FFLQ8HUHc2%2FC2uA4kXj94vZJw02jbdyOy4HeCuCvJ%2BHFx%2FcWRGgKIY4RDtH%2BRMwBUMPwHgqw&X-Amz-Signature=37263865b90e76308bdcaec7a203068477690666fa12a8dc98dd3680fd8cd39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C22XB5A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3Dc%2BrXPv%2FtB9iUu5ULrWq2zdcYwMRloNGtVFKhZT1TAIgdxvRMdt7cN%2FsoxTbjeX9alYi9M03yAhXKhVRH8EAPosqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVtakB%2Fg4qEHML4FCrcA4rTIJIcDC0JTnK1p7m0TqHQgsl%2BopWnoi45ZVR1uwX30Oy%2BwQE1DEbcgNKelH9%2BDUt6fgoyrY8m3zjdy0yD5rPBKduye%2FoZRYVi%2BP6YK8bZnsFlT8%2FTPXcqC5sUkCxkAyHbkicpTRGn9xpZo4TafmjyEOrfW%2FJUt5eythNwF8vy6s6ehmp%2FXrLoe%2BgEksjLI%2F%2FJ3BU383o1Yrg0BwBXAoSrQ8SMtiNYfGqIec1BOgC7Ms%2F5mSWfnDhJmgxOB4hDjEfFliIDlwS%2BsC18KNZyrlwJGl3aiNUnmswVQJx1o5Xz1yKZU60DXUbbKdd7qvERf2XakR7nyDp9rdOwO3wsrc4l39B5vT7ws%2FdlNKVaoICNSFDB3v9rRLs%2BQBBNIe%2BNNUg4Uht4LhVCF8OEy%2BQ6FwAXw5b3kJXpLiD2mIOK3Cqw6zCHPL66mjgCKwYU7DmSQ7HJ5hp4quxy6BIQd9ukp64cY4yv8H6TpUNVeyGbFkhQ2aG916faJ7qYWk6tZRBEgQJGHnoMrA2y8ggOKEGX9nRh%2BEbBzEk3nlgAddu1rzhDZNGHtuv4LAPPTUHwYGcGAjL4vd%2FLzMQSRo0X1DOW1g7hHArtP6NcNpBfbFVDODQLHeQew2fWsS8VOPIsMMmr5sQGOqUB13gOjhcbh7lrC7dM42Lz4kogXJDMCYHkCPt1FnYCXrmv8cdaoJRUeJJcoxb6Af0wm2MeiUdrjNPO7XPBpv1cKEhvPIyMG8mJXBlCxzBvGEG2S6%2BcZLPFYySyi7YJpe8X5ml9n7b45paQhCBHnS4QMVtc6hb%2ByQ2vcbUWOe7%2F77dTvV8QJfweRgdE7xEsXTuBkbcJ0L%2Fm506ihe%2BH67I1rA0ctzXa&X-Amz-Signature=8076bd491af8275c373ca16e6d7d25a71c1a42ea467c666636f87fc62de8721c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRO5SO42%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEi36p2wuQUt3GW5XKHjFGEBkudF8aI01TgEbWBjvTyOAiEA%2BNU2q%2BaGH460NuLtS3zUsk6TUhx03DBQCeWRQxuIdxYqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO86sXvas8IkHBa1JSrcA6KA5PvMzUKQqu%2B00O9tb7LsvTeJf8qVulV8eE1vNFDZDzcr0KH4kGm9%2BWwdq5CsLSAexcZfELKSaN5wrt5RmV%2F77MNJ2rFqQW90RnUMVOJ7wZv7qJG68x2mohhaNitlqRx0Sx31A%2Bl24PQdzJ6tebcVHxfOhtr9rfpmnQgBmPaEF7L6l36XXrHH3Y5rfqjYCs1bVBE%2BuK1Fd%2BZeXV%2FyVwyZJ6S8JRX7fZy9VsEG3q%2FFgTqwOtV3RwFN9i6QBK04zEpU4Kret49pFCaMud%2Fge77u3knHE69fNFKTA3m06ZPyw2lwUiTI3OKGwSSR2ajfxpUej2VPJ2A28LxiHwieBrTm%2FBThl881aR%2FadDXlad1aBwjI%2F%2FzFaBkWFWi%2BUV7OhJ9TMoUBRmGQa6CpfdCLWYsVILliuDjR5Su%2BP1QvxeHp9EG4VsHG6wLq7HIacmtFNgFiqkshAGQvFhEMbZtmoH9sCIdwPpZXwLKdqP%2F3SDL4EdlWKkp0o08bUw9vvjgudPItxGuWBqmfaPsdQsj%2F3G2K0Oua9Mkrm9bMh1s8TzEENOEW%2FcHdB9MuZq4ihGXMtvkgw68pEjUHalElyhervhj95bUx7VGgjf7wzOXYe6wTuviNj7%2FO4tFvAU3DMLms5sQGOqUBEM5nFN%2BPqnLauoRyVu8%2BVlJs3lCU0030ShNCRSqjF0YIzSMf4lxoZ8HG4Eiswikb%2BQXzeMy%2FNsTnVlfdb4T%2BT3K45YPNp8KgB%2FpGsxzwPpAZNu%2FIe18W0GyyZiMXHVLVJwAZh%2BNoOiwe53bJATSXPARqr%2FA2lXPHFY3Tl%2BuBKyul5Mbb5zLJFge4%2Bamfp2XFYHviCf6QqZtrk6Wnj0Iknhs5G8qg&X-Amz-Signature=13c6f0d395b047cd7191a9d50b48d7d1702837cd513bd1ff19ce4bf9ef33bb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIU5VS7R%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVw00hOSlZXwpAdZVYXLCgtBJTTBQX%2B5XYEAjdREhDFwIgCE9wu0SGx%2FKBb%2FDD9qm9rjc0d9qagdQO8qcLPWPg93EqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzSfD%2FbHCtIXAGThyrcAyN7uEXkOYkYdQaPdMM%2FYMl889l1xkrtWO%2BecZPRR9jpm3zX4I2xlvmDKsT5DuKsGYzY2HXipjz6odrD3fG6JMyT0x8Fdxf9M%2FQA58wi2td4TMgWXCaIfw%2FLQKtdlF6PPRqWrT271SwetNe0RryGc31GG2yOiwotNBQ8j838CnjFiaGqGds%2BWQwdFrA98%2FX8VLPrOz1Gl2TX2wB%2F20JQVtc4aX%2B9nmoW2%2BLc0AsNs8t0GaNbgZ9KCXszkxev5%2FcJ9mzBCE24UsnXoCabiPsbCUvv4ZqyAzi%2Bb6CdKUxhRUUbxSnvPL9oQ0Sm7Scz4VzLCbPStvGHnrQ2XZ0OR%2FI4e41GBImy7pRjncb8VA8V2U%2BuszM%2BjtOrINmZ9vCNzi7MIkZKz61z5DzBsT3UgBmRl1m25uBRcOv%2BhlDCfVCIPatiPyZ5bN%2BFvHmQ%2B7gHLZXE%2FRQ6AqVBkFE8CR3VTEQ%2BUqYSseI6SUBhoLitV2CrS5tFxL4klNIO8aIBIWXP2RhssMscNrhMKhRed5ENXJtfGZfWhhKyqeAE6OvvgFeV0uYHQ9otAPsVwy54W4nRiT%2FmQ6c4%2BH1JuxaD1a%2Bh5FmQ9Ng6x9K%2BFiuWj0Tzgs55MTs7G65aZ9vePc0CERV8MMGr5sQGOqUB12YfwCMu00dYVWlgS%2B2uSZQFid0nvhiLaAJmKsJV%2FerALBqUgTEKpKgkWxvULfOfEHBCNRtyBBjerm82cSNBNX3RNNKC5Rw8%2BgapBcV7dyD2OWsm1OJ8%2B1%2FJVTtBFUJVqLjLPu8SeJhwVTIOqn46QUfXpLoGEeYH7iK4awYbPyt3AEqiEH9LT04cD3k6NZLAjqUpYac9HWCDi0hVRVRbTa6HRmWQ&X-Amz-Signature=d57aa41f967f9955085272bb622a8a50bd18e524ad9408bb63930b78fc9266f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=4f23d62e0070cb20a2dc433b78075242fd726174efb03bb26118df535e17e1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TENN6HBZ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBWaqR49mLwn9kHDSO%2B2VHOtAVtmhlL%2FZ9oLAdCVamkAiBRaYBbGU5Ok288CfrPDjQuRD7mRJMvq6HSt%2FmHUtF0uCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl9uMXjcvM%2FYkcwmfKtwDG9SfFQev5hsaCA%2BxPJqt4oa%2FpvBqKtVVIBrYJxocW402peUC9EL%2BWTsZ4U5PotfC1SJZ3miKFPAM6yW35DMSudud4IfG6IX67BRQbhamMLrRG0lBBFj0yysAshw2ZVeAC6N0PNe6DL64alXu3tAafZIE55eNfzetdDf1tMQWyMo3mbllzg0%2BEvrjpYxLYNwBoZsGgvxLMYPFx7U9goSHv3H2xBCKTcVtagx0lc9k0t7TiZx44hcTVuWcfcOpISWdTuP4JbASyYVGRs4eFvUHTF%2FvJk2JUIU5Fld7mikHUAUEuaB7RXyXU7y0xgcieXTaEhAvVr91ftyeLwhUaDszrVahD0YPAicd42CPZz8PAMObf1R5FRxYvs%2BaUsvmkqhOGSj%2B08LK%2Fy5XlmRZqVTMXcV8DvCJMeK8%2FKGfD0emLNfFM3Bvx7IerJTeSjWP4ewmH7LspVKASqz9JaG5NW2Gw8fHGDiuhYM9l1er87egGT2CIBcAdYJLgnPJXQZP9ORsa224GHQaVkCtvSSKFkCQdvLs6etKfTWTRt4yJUV9XMroaa0%2BHwMncKT%2FYY0F%2FfEyBvG9%2B8j5XCTP51B%2BMzqhJ3460%2BIhYdInFXgDiI0mcFqB4tXmPhKsRxa9vAYw%2FqvmxAY6pgF7FRerl7SRs21h5tLznvNTl%2F2JyR1%2B5xSbhjFHjUY1BoJU3MeKXwCyWSDTAFHaut6DhNa42HK7GELrTDbTt1wcfL62SHz94dw9z%2FQ4zT1kKmhgkxVBkOKd6rQ0sZpFF1XT4MhK1Zo5LsU1GFraMd6%2B32sLStH3G%2BqL9Ki0tG%2BauUHZ1O9QReuT32UUQ8Ve9uwfEV39jVnZylWbpSGSdickfJScXCBk&X-Amz-Signature=01aa76ff492077f510e3af8effb5ef74f1bebd2b360abde0fe50ec4a9ce4d010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=c01c152fbc0f671d68d1c06d423e88b1e631af705ed018b0b4082e624db689bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=b94b09accf50034d42b765f23bd610410c35083929479f1a2d09e0440489ba57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=f68ede903f23f3cefee2a1d43b9715fc6a5ebf3b34d1d2154188b35abf1ab7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=856064870beeb8ea917b420f52eebde1c3d5efa1a61216b620c4b16287bcf53c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=5198c57eb35809f14c5f89d8adf624b7773cff6e203c5e1fae6ed4b3c5afe006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=6435c22ae148f8294fb52db480906697b1ab85bb47b10fd77a08361a49785fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=ae2f21d2945e74d775fdfea0664689a7ebede741a664732a7299fa1b29ccd805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=49d3192e52b5fa09300d87fcab77d61ddbf51f0297c846c44b5fab6f39ab1eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=64c70c9297d5dbb51c186eab4050a61bff600401b6fab3086663e15caedf15b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMQDADUM%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIWL0J1lkEHB7YPcSnpRbZjTTxWe7M1b1%2FtHKNQ%2BjRSAiEA5nAE1MTVLija6fk0QVIULoA%2ByK4n98h4LgmmP52j4qkqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9gcsokXlYuCd0gyrcA63BslXRvWwVHUtfFZYpgHQWhWhjixqC7q2U%2Bw8xJL81pwdpg8TAkX0Ywcncbe0auw40%2BPvuBIdnLNX%2Bynznbp8FCRc%2Fy%2Fl4hu46ssmsNL2ur%2FtosHoiahkwPt8MRE%2F9IEPwrShQbn%2Fx8dcnMI79OI%2Fkajbm3M%2Flm%2B866K86liemw1%2B%2FV21ETjcs6O%2FG%2BsZ8X4goURPKZ8M%2Bm1VELeDZYLOoArfR7C91EKpWx1JvIFNP%2FH2vXUF2%2Fw7W6IJKGrIzaMlV5PhnlP5i4pBOL4ObgI4EsqI3iXW1IwY5cGVTxmxU3myQgwLvth1arB0ntVlWemofqHXcgMIpaw5l83ee3kJ4EoVlH%2Fa55F6LLYJEbM%2BYNq9c1Zus6fx39x5WdZ%2B1TBVd7209AKPQQ5vxRgUfJtTW4fHBk%2Bfr2QWcR6FhKaU%2F0GEjzmZDn6ekLDc%2FiWdPlIBnB36nKNbn2uA62uYZGeTPL5PcPfhcD43vzDflchOIpMkHx0qD69JhnKpWlYpukiiJ%2FyhHzamy0JjiG5AeCS%2BUOffWnqgH0dxra%2BR2nH6zVCkGEjaB1DWac2L%2FvYnydqCb1GisBfGzDJluWcY4zRN7JWhnDCG575j4OZthaFQT6yx5kXMbk0MXgDfTMKGr5sQGOqUBpxwLRMUohhAaUscBKuj%2BRbwyDMS0XOeesKQ53ZPjOEOD0B%2BU2hOmmgwYh8IKnf%2FtyvKXHF5sHkyGALT%2FvlBUaD62F%2BcACSP5woiPxP2zuyCj39McJYahvX3OcogSYGqbkqHh%2BM17Bto4MjO9j7P8fSiUfWG2CQroIxsrFZ%2BmAxw3C3O52vbwMgdvkd0hxaUgQbjJ%2FNQ%2FnCzGqEwhLkviY0KKYM9%2F&X-Amz-Signature=a6ab2503b0c2993475d7f99508368f6d60ecca7d40523e6d8a517406bf5be2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
