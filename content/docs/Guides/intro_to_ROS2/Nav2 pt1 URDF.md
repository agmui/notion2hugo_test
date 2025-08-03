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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=64fba92fee67dc42212c842f84250b4cdc830e7197581d846f3fd55199d78339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=22fde9cbd257c49aac6f23f35538b501d41e0e36198bc6950a6910a9700309d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=4889b3b53f832f047ddb27e2b568ce3bbd28efd902e02b138ead355c56f3b662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=8c4f74c0037542a98297eb7284b740e591896d53c02f9796292177df112409a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=d5f1ec537b916aa0d8de080fdd037ac7e4ed10f2bf753a162060e606ad6373ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=09dba8bc502fc4061fc854a7f1bdbeb57c287e97d6fe2eaffc360a2144ee9179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=096b72fba5839eb57855214553fcd7fae0459986ab3134f737fbf28b20c9f7a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=a5ecbc34d71ea112ad23499dc463b264d81fa8441cf3d3c99fcc3f73c30bdd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=1e9d17106d49139ee9fb9ccbd100333b6abde839b570a7599ab13071c3e110a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=ad520b0521046b7175bd70bc4de12e61e0f38967ec394a973e7784cf45093fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OB7RERV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZISc4oEIhdhxvvv0Oeual91xi78zBsPwYuLDRZxT9jAiBZ7OWQPsndCiytVUAWt4hqQr19NjD15PvQTHI92xPa0ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMJimQFS3i6sc3Z1JLKtwDhpbKbzHMzs5kWxZZFKx3xkIbMliW3fTqCnvOhbjORBsV0TCKiy2VohgOI36Of%2Bhz%2By5VXxLvkv4QTWW3YgA0jjV%2B7Q2pYbalD9VODd2g0%2FUPznnco4huG5zks8fqKbBhIXGpQKmX%2FS4y%2BPxmRiDK2N0xbmKbidrb0T17jmay2B8BFC44%2BQEjMwEeKOBR0Ohx2pkfZuKrhfmoZbG9n3XRJ1GGdaUHtRqtGohbDsQR1Lr%2FOyKLGkfOZHj7Y%2F8B%2FI9mvXiHlHQsqbQnpsvBDZGq8J7NLDFbWsV6CfmCdBbtUDK%2FnifOpNko8a%2BIUVmlPCOA3PPYUdMPUNUO6AROoBpNhF41egzgYQjCDcJi089h5XViSYRHuTvJ3pCze07USTzlrHroKxIEchXBndzcU24sXWQ5rvLvzQhafvQu1rGmW1csojpfP4snTnthjBGsB1NE%2BsTk7eHM8r3JK%2FrgWeGOeqX6xqwgPUilGJS%2BFxguxq%2FI%2FFB5arpp4Cu29QWNsksesqWJ90WMFEIgRdcM0T8o3tQn%2BcJJaImSU71U5guURo8S5%2Bvnen88X7yM%2FR8eH2TVH9ijHuaTpgKPRI9LMkhEDpsAOnY8iQLyEWCpwqnE9lo6Gm3xCpJTnw7rQK8w6tm%2BxAY6pgE%2FYCbN8KxTnCwtarKufcXeFwCr6wSG3qwr17NPAGAPd7tNB2a1jYboYD8eAsJnSfSxx%2BuF5lM0YVgLNWA6w4wSY9Md7IztxQHSm%2Fb0C8Yn%2BHI80F2IISLCZCrY%2BG8eCbHmnK66eiAHSVUo8fYJHpqgKnTFSg7ZF3d25Tns1W9x%2BRUSRxWxiehqfabpyXFbv6eMI8MxuqOMIBAgpAI2kxVmcwyWLF%2FO&X-Amz-Signature=2373db26345482de66b67b7bd805747e0134efe00c50941bd964339f253b14e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGGVNO36%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXviuKHjCbsjjEVeN6AgMG%2BeWgqlmyutDuP9e92he7PQIhAOm3JO57IyUessYi5vL4D11U26XiJLUEgz1cHYMFmsufKv8DCDQQABoMNjM3NDIzMTgzODA1IgzvBmgQsXYjORafmT0q3APM0cOeD3bQ%2FiT4D2vPxbjIf9vPtojYGW9luOyf5WFrgwn53a%2BXeSogid7%2FvXCWuXpLZV%2FRMsOKbF2Zj5HaBFoYhjlvYr%2BDGBfFnMHfYKSIevPsJD5unZNzNNbtiuQldzLK6mcWWhL0qfpWJBhgwA5Ywud%2FrbIxTuUnOumR65ndfCT7c6Bs4cOKEx7nYEwAQ58Bmz4AyJPMm4heMnBwVtf6kVFshO95ZsbY%2F27CMVhDsGnkCC%2BAlyDiktyWKGPHjeuQZpsZRD7qNBGm%2FsNBzLjL4lhK3aSvIT7YUFh9UK5YdDoysjIPEHbeCAxrviYWNXj%2F0x7TvXwSX5saGFFJ7YeQn9RKlMMrcSl668nMQIPZ506BxSfkDm%2BKtVSo9gbHjPd%2F8UgFGllBuGcDl69W444iZd%2F1rHp9r8py9fiJRl3Wm98T4UGRRLshNhHGH82ofNsBaAQTPu7C2HNyPhLyWfCYjGKLaNnd%2BIiUw3iQZy1vWWU%2BwsExhCPICcNHLHurrnvJBqOrApeRfy0K4SDm1if7UYPYPOKsCdd%2BH34AEG7lcApPwOZ6wSOeVSFpubnykyAzn4KV0TyR4HdMO5z7iEFr02DT4wXrMXq289bskfBPz8U4g%2FXNHe9w58PaNjDN2b7EBjqkAfermu3%2FIPAoDF53e3LVPVOOFfxZG%2FF93eBqeYTRu7yzpAIeyjphBXnic%2FpmK6EzQFPnngkSqgu9dS2Dl%2BcOu4eJ1696dGOzNbHqJSXIPqDLO%2Faw67r5xI8lFy%2FGybyz%2BMqE2ESomTeNGwAGmLfK5WBgk4ingBiZxKay8PZndSRDdujVvfxXYMibIpXBmzSX3qDkc7WFJQtrKh%2FeGcKv10uAXLwh&X-Amz-Signature=dcc88157c74a81ccd12ee75fc9dedb041fb68fbf79eb6c1b127cee17798c6ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674LQJCNS%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAyrjzXl3L3ywGVIPXsDSUdsjH3FihzwutFIZBEYszGKAiEA9VPU4znWy1SOFLTS9w3YdMEg2W2Sjhv8XcUNiL9dBpoq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDGnPMwz63GiFZJQ3zSrcA66YwW0dsGK6dnoNwjnwNQkIrn%2BOrAZ22Mch3IDuqx5Uf4funPRu3oRllf8fSE0OpBSg7BTUGG0xTvSxHSRWBVwyInh6v59bS4%2FfpIGXYKEMvDxxqazAGXPB%2BPOCTOnDs9lVxDYPeyspVrutVFbQPSNS6ptSj9vueX5IT1%2BQJ0mWfxiGDBNLcw5xSAbeXGtSWGT8Zg64ORAXZA5tRVIEyRTwZ1%2BX6T1yXYeWcCbd1LsKzcotj5rfIZkH2EtRMyr1X0t1ESaVJknTFg22T4uAf2LI6o9z59CzUMG%2BEcmpSRg9gSSS%2Fg15Jw6I4b%2B9nWHERY18BbnbPhXBIRKjxaRTCOj2i7SGEmTAQGYIBJEJ2VVKV%2FlMlRwPmQ7UOJNwzNjYWaIC9Nx8OlnrhhMPx4ILJZ96F808NqYuEKseMQcB80Of2mz1s8S9hQ9KarYCzTJ5SMXWbdJRW%2BmeQGzVodVoetR%2FNjtoN6nkoyDJPM0kPlKQTqP1dWUe%2BDjaHYaZap%2FSSRa52Rv551vrj6eWWf7bKEn3L1gmXY0rAZ1nhpAsP7xGH2PcZU45nHrXLzEGrnNCWAiaG7lm%2BGjBXWvIYuxgamaCqqpobIYgqvnMd9AktS8Cfrm%2BW7S%2FnaxjJh6GMJHZvsQGOqUB7mjhjPyF9I9XYYbFIXibyWFH6H9K%2F7kFyrUYd%2FS%2BIShnjLTsD2mU7rwEJhCFRAyZ98YvIFe%2Bh5EvV3peQIibMyFkyzG9jCvre95%2B6gzIOHCx7qGNQZvWlaUsNX%2BcNoZWuUY4FltqmP9yKU7L1Xqf5ZGvkcyAD1JVk1hoqPXt2%2Fb%2F8q0KNjcISU5uPHX5jRjOTorixmvf3S5N%2FXVjJrKVUN4x19yF&X-Amz-Signature=bd76bf85dfa0f1edb119ccabb89ff005af61b91b736934042fda5cf12d1a8132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=9d3ac1bad08a93667742316926f4902eee36c67906cd3758de08735fcc5e7188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRYBT3G%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLdfcyzj%2FvN%2ByBZ3wOxrlZp7b9RECUr3y5KNJtjb1cOAIhAOVKNCcmpZVxE18W0EMOMOEn%2BrLr5hq7NePi7iLoEMY3Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxueviIpmesNdMdvGAq3AMIKR9zmdDmcmZ3VFTUWEaP5zFLfRtV0DRjmSoLAMHJCDRBN0cGiBbKnXBO%2Fov5Fs6Wzk7nKVFK9ynVglOUoNhg75UlZK4fEdQD%2Bacz2%2BytFnfo1rNc6D9HkOycUzcUnMFztaBqQkD8IZbSSwsZRirEMzxq91JzpBTHoF81ewBlLJutWJGHYcFAYb%2B8hVLSy64ODYImhFFXWGgf6NxGRk586wZO5HGr09Z%2BYITG36FC7RVVzBAyElQ0ml4fSoAJCy%2FS%2FsKfCPOlqBOOaZWypttmuhlKMV3EtIYpI0P4GdS1KOrWYEZH5tdXX3ygnWhCSnf3eo%2BAGQVVN0j9rVH8rVRm9jvZHf86%2BwU9dk1XnYRAbiWcp6Z11m7%2FXIhwjc0NwSB%2BSxVGt1qfGjJA2pciwy4IUxVIwtjNpHZPKQpRVX1svrJjPGA%2Fpt0PfYcapmnPFkXuHQsWMew2uKssfXci%2FAcaGtg%2B%2FRSfPH6MTVIe4Ox3fL4oMHejKW0n9%2BWdhMiA3Ibr%2BM%2Bsde%2FDz8npmSECLw5fuzQNS5jKS3OD1E2oAytvnSBqtnKTGAzgaB%2BNgFGKYUw7ep9Qx1ZVOWbIbre%2B%2FnNwc43n306tpnaJdSdz8%2BaL0Ubj1MUHYBY0z%2F7RyjD82b7EBjqkAWqz2GMR8wr4CQIZkeakJHCDpxt%2Bj1C6BNv99hSO8D1vEbyddO4AFdckVqF4ZTAhSwDnGGBx6rJBpwNxLbDzpsKrICgUsz%2Bh2lwt9n4yJ9uYhiFnyUcJKpN%2Fp7LXLg4qFpnLWnXtwe9xKDkl3FqaKD%2FfZzffdubfuFH4KwXD3RM1yoqbOYJdfMJphDN3cRXVvhDsUnjz3PwncCL3Z%2Bidcuqka%2BFw&X-Amz-Signature=4d6757a4cfa9f2dc0072a46719bb4b845a855b9cebcdd52731c2a35cd9930abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=fad803373ab9876241a4cdd301efba2d24e92589b76210aabb4b601bff20b60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXSZSJZW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEALYtNJq6e4H6Z0rxjx5Y6ypWEGJfLzGinVTPqhAFJwAiAwHOVya3tigPft4Mpnh9ppLWuTVsIvjxPQlBqBfnS64yr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM0T2Bf9jwu6nuhcrUKtwDi8YxLoutqFnCs1M6cRG7RU3A0i6aO04eDVnF%2BX%2BB%2F1LpLuY%2FgSVSRGpnLoDTRetXqtUOn3jTlzMfVm9Sgs7TZSXkwvCJX4oJnvwWJYp0bfRe0NN0AWwq0cKOdl%2B8hKKURPgqE8NajX%2FmoPxMJJn5IT%2BMYSR3zrA7NI1XZpje%2BDWmiNHowBhsvatwLHrH8rm0KoKwkoIpxkcQK1i%2BzM1oYdN8fAnhvp7cl2EcS17B7XBKBoo%2FnHDJFQNkc89dgRoCuoCciia9CZfqS9FNI7nP%2BAUexNa%2Bmq0db9WQFf7bQK10Q8jtB%2B4qBSZNsRAeOyj6D96xMOkBvx0JtNNQSKA%2Bi9UWCjhfvQR2syzcVCD7j%2FtYEGedbJA3ZbPY259NEUx6krHQpC%2BLto6mgDYEAByR0VtOxtc6SnhwXV7CMvNM8mJPEWxj3Q7rRtWYKUNKkN%2BtdAUFbrKMa0A7j6WNm6Apw9UhcexKZUfttKkqZjf0%2Bzuc7Bz282LMScFblJ1YHaM%2FnB4pqM9OVRpQ64GHerxYBBERZlKjx8caZa0c6pnX9uhCdfIDnIWon49CvcXnG46W4nzMJFtMktggpjTsA9TWb7P5pnmyn4JwavICEm4yaDqAi%2BSKvtxNn%2FCfNiEwuNm%2BxAY6pgHKwcNt5Awmi%2BU4rbMKLCi7OwSFlMIEV0PNIdX4mx4xSTjl%2By104R6CEbrn%2Ff1hRme%2Bmq17tNJ2ImD%2FcA%2FHs3lhExIDn158mHDQMmfoTjfOelTAiLuSse4FFFQgBucnYM5G3tpsLxck1aZUiOfj5zvP7gndGpsOq%2FE82X5qEVZrhfhgOPsH5vVGUdbvWeTiyIB27mS9P%2BqKrwDbrtzndwvyGNx3%2FSn8&X-Amz-Signature=2c8d82dc81d2f70f5264033cfe9899613625f9fbe14e47f2109e8bcaf548026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=b181d904d45cebbdf6eba9a138719ca7dfc9592ab9b52191763f4e825832743c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2MZARMC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaL9dmk2kYM31KhEBE7aaU1IYZ7%2FC1LTNbsPdlQRUEbAIgKz8cwu78OJohVZwrJjoZRVNcfnWMLoq3839wUtXGuwsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDK91Y7E4IPtO91JwMircA7gKI67%2BR48Le3YqH0wL70WSXoYwBjjQ1KKaQZlFOLmsK%2BrE6Bb6nflTPLtXf24Ujjx4xHIx9XYvI4eO5%2FpmPJ8zt6JPTNWCXWhP2L1DJBm7XA3Yu37HqID5FHzoKKk4ZVX%2BAGvHWOV7ViUSb3ARq8KlWKp9jYsuQdYjg9tg7LHTCXUQC0m%2BagPbsRzMUdlD9BdU1xmAn%2BJtMwc7x1oHddU0yprsfCPfOAYmWOK4y1TR5tSBs7e3r26X2lx0Z%2BYMhX9mpZF09b5gZGFRiG58AjOo2e7FHDmLFSi4hQ3skEftAQQBJpHmmtSnzCJyC6X%2FqxPHUTugCccdw6U7c%2B%2BHMXCObpFJYOamNhXkymXHMsNKbSd7m9KsKDKTWDcE2Vz4zfkQJfBffcyhwbDm2AHnxxsOpBpCJm%2FAog00gdMgOj3QJ7ZQpo193bJpYwE3CikOZWQyMvnf7cTshdafPq1ikSRPYJT70kFW00L7zOMOC5vwY%2F7lwPNuUBjd4b8ya8RWN58GcrG0FzNAu9Wtt8tlnBUhGOBt5hkf3Gr6ZiHHPgUGo08isoaB0JLNQGDx6821pkF%2FQU%2FKOShBgWz8j2qoGcnk8B3f2xta9UY9EXqGbAnMvgLmfFm0IvoyR2QeMMLZvsQGOqUBWC%2FMxTitXLu%2BCICec4S8Zk3bP%2BnrbUc3c9fAxjFTHcp3JItd3hDuhJ157jsziaXq9JTSYj%2FMlkEY5VaoJaISz0KJsujZ%2BqF7uYP4pPCmLpSo0n4T3%2BSQqnftvWpq1HkGc2ABzWq6uZC0xquhbAnFcZ9eI%2FtkxtsA1C2Lj%2B2v%2FpUP6r9oIdyeB9NBA%2BMMcR%2FeKIIA%2Bpf%2F7bMn10SbaYSl8YigSBiv&X-Amz-Signature=bc569cb5835dc96f04e0b99eb77f4d02f407854dac6c8e9d98aee0a837254145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=c66d97bd238b2c9a938aa0173a689ae3ac6932bbc0d08d44113652617f2e14c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRLTKFUX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQ6RsxJLocelM3H6vqCtdTru8YUTFq%2B2uh2WuhvGnxzAiBxBGDKB60xJj7GpYjO%2BUcbmTcNxDmT0pS6UEkhm9F%2BdCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMAqMQHzyKhh83NtF4KtwD7uJo6BppjWsETq8F2hG%2Bg9k30KipAVGVr7ncNmfE1LcoFswF1qVlJVLRzEQX2BHjOJ11ny7khPjHXJwlMRDsOYHMD6AIwT9Z%2BT9bIGANQhcyxONj6fH0tlsRSTFRVjUXETaUd5q7ZmmMfR2xWXC4%2FxwhU8%2F1Jc2p7xzgzYfdE8FlF0ZyUKVpG4JJXwOsaNBn01ZvBtxPqwZUliP%2F2U2uPLD8x%2BpTax4Aa9PGAecMCTyN1U%2Fb47BpY9byLrXsDPch1qnmsULqVtWhPYDUSG%2FmVDvK6IXiqG7Db8zYCvB9aR4QeS2eJy%2Fp7x4u0JyX0e1mSgXJqzQ7q1QGNDwV5YexBaW2U7dkKA%2BiF%2BfmsAPcr3crkV276yyIDTZ4FPLM7tVZKGyNfaUxKBtiT%2BAZesYE0GcRqSsekrIq5%2Fe6jOam4j%2F1x%2F12cxyGVYp%2Bks22mlS4m1dGiODf%2FVUs%2FTCBCOCrrRAf2E4OoYYUk8O8I6cj1XhZYcwn0nl7RusDMyQD2ZgathWb1PQssttFqvylUKpntAXCI2keZFeR3DJsYUPF%2BS3mzZkH%2Bv8MXC0ZlcTVk%2FZobxQhsEeC1shEyrRbmUCNzVTc5FlONjz5LTgn1MyOGaY1MQ1TdkDkk48pISgwr9m%2BxAY6pgG8iMWIYO%2BP0BXf6elBkdtxkS8i86tqVzusWgR5jTB9S5Z0qhxXpzZbDzDIhcgFwgScOq1NPHynEV2FUMFbGRrSAJdVrxweBqcUob7JxgroWrP2wpxd4wwdn6HskGy0BvWDTolpJrm4zRlahvogAadh5W4x66qPXiG6Bi7yO01tA%2B6h8rPtgFHkDHdJeg05BcY8WFPr8FpqM8i85S3POPmLnC03pT1d&X-Amz-Signature=2a0af439e86f096e3391f32a18d4401b6b10b54227333dc8e9c688ff32cdadeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TILVQWBH%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T231005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNzHQ3gqLPp9B6txsHKEC51t5MFZ9XcyG2gfNGrFSVTwIhANUHQnCdVBwhCVzWPZiPYpOlk7trOqFpBrnU7d3OpEElKv8DCDQQABoMNjM3NDIzMTgzODA1IgxI9LaQlhideAiDUVwq3AN4iTzkT58v4gSKOkc31N5qPm9mJ%2BN6V9sjamb9q58PqvXuUuNd2cq38oidQgzu5711%2BNNv5xxQs2jl9JJPoxHLXa%2Fw8GUI7PtL7%2F9wMiB5mjFzsGbpIe1KCCwwlZwLkehMIQcIHQGNKzbwyCg3shgyun4g5pQViUMAwyQqWjNg5ld7%2Bb2PPf4pMFlylZOvroWrmPfJkJnIijrQFZ6jCWQFJbxV%2Fxy9VGgk2AZhUZqopKLDwbw44MOw0pQB1Q5hck%2FZUhZFZgW0CqGC2XE4emAhrVPzKiDJb4iG3mBbX%2BcN4LWuisnpUlqV8E6DE1fVy7rfukCJrHdr1jp8f679MtoV4OFPlU02nvNh%2Bb7hdF45IilTAndJCSc6RvPzvSGEM2j8TlM%2F0Kg9AzPcPZuWySHoaA2LyyZSznoUdx%2BPy6snJ0SWAxS62XS%2BWsEsw73iSuwyXNKr0oGcxbOkKuSxSxJP5atxpXmA1LeC4nuQciDMdaBT3BptpMInl%2Bf5Nze1YL89T9z7TDlLBJQkvUY5981JXGSEd8UM8yE0ceZ8BupZmTxIqEO6i%2BbfMt5lSK08kFfFRogT6AZD32Ow%2B9xSufIci4uea1LAA%2BDWGxS87zvQLru9EcF64Eg51%2FIkgDDa2b7EBjqkAVAxXGfVuU2g6Ly8r%2Bu8QZfF5BXFwUJ6A%2FXlwn8IClKExFczHM8X3CRj80ntDU5PtS7VsyqGTHz%2FKTVttFD2gZ3r5kZ%2FgAUMR8E%2Bc8%2F%2FCe1P7qUPKnpwUzHlw0BeIxw%2FVTsvY8W8ckXcwbaeNA3rPlJrbmohLFjhSxJbIYRgaFDOtVJbTUYyOdTK9RpUVx5Kr2U8wR0keRC5jqWBrf%2FQM3dl7Ke5&X-Amz-Signature=8feffffb4784a36529a8503fd79e5413da67ef858a076f3748a6ce3ef301e0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOQBUXBC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T231008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF71YTwlybRSS5ZY7hpCMyXlaky7FPgtgpcs5UXTApMhAiEA33Nl4mzL9NUFAkoTAaROsq5IHKrKXGq0J9sTWMsD%2BDQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDH1jKOsySRIcZRwk5SrcAx5AzBy0fMfGL1z%2BFftdZ3%2FJqDveoirIn8gnfAfUdcPu3sin0CqBxCfHJG09CoS%2Fx0KlUd2fAjuYOpHWbQu%2B2hQ9%2BNGanmn0SKAJXx2fqjnQBJKTq0UyxufL3WDPfMmFStSbv2ui3UiUj2xMNr7tBt%2FO2%2Fqp3BtsoTWV1zEfmMgTkNsjqIFNifM7gIGe%2BzG2F7nRkR3XMIjgeHIkUXt3fo8%2FElthnGcwVContoA6UNpq5bubQ91mMMFvXr6kD6%2B9Bv3BDl7Jxi6GAlAgwAz4wSPazt4AUXeqHRktm3rIqbl5BkrlfbLG23hfXERwbnWiaVqtNYo8WbveuQqKqbdSf6iprmFpHnWSEgOK77T12B2%2BMevwAKqsTBiLY%2BQ1gAWWP4R160QONW6IpBqASD8wHtdiKBeVOvpHwylq639y6UdCNV3l7Jn1IJmzcWLJUVYLbg%2F0Oq1YSs2CFGFQ7bSfkV8JvHFYeBX%2BH4%2BjfhqVjyD%2FL6Vo15ShQrDqHcsgCrVxls%2F0fRtvQCycI%2FchMKI%2BvayBbIFHU3Abi3Dxzp5BBaZMIY0u9h%2Bx8T4Q9RWE7C8ZE6fQ1LEGINNEfGxCGE6pjhxlADFgN1BYTJvJMDquSyCx2rPPYcvj4iAc13cMMM7ZvsQGOqUBenCvTjyxraltZjge%2BrAAhNGV6APyDBBnXOhSPE3PUXCvsRxEcCn73ESUtZOkwwmAzAoZIMe6FAa787kOJ7LBPxokiJKApXNmn0BLXzk74c0bbqlgnVMZ0BTsSxkBo3qHhdKXRIRbzmFHxjZBmzgDMtwAsyDAHBNI5of0jowNRehdMEUo88Uh7f%2F%2F9xUti3my6Ah6r88V6q8OSN7whSct20qkfpv6&X-Amz-Signature=cb05944bb8f347ce79a18c5dbd1cb098e98085499fb261f5dc8caca1eab47d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6DSPEWY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T231014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeyCaD0gu66gJ1WcQ1KtVU8V4NhOc%2BLbAK7a7m3CNNRAiBZGhQB5EyCyJJjf%2FJe%2BOCdtt%2BPxUm5RtObH6k3YNcXFCr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMrI%2B8Jhj6oeGxXcekKtwDNHu%2Fn%2FlCd62ni8wJmCsMcvOUePH3QASKJPiqth3TU%2BBYzEAuk0IcbTPANV90U7StI0oOVaOhNHYw1ZzDpfEfr69TGYm147pyrGrEcn6OzvUcThAiUIcFfD2QFoL6YpyCn35%2B6I2f4YAVaA12F1IoV9XGUu%2F%2Fnwznlxj6gvLe5%2F36d%2FM%2FNOIiQfSvd%2FQ8y82lPSj%2BqG%2FkIxCMjGf5%2By2SXTTrow2S9JobQBo5fug%2BebYdnfvuQoeaHrvvpiQTbDFBaf%2FWW6rllSK1nAs%2FKnql4OHHqUSGkw%2FBv8HmDCLefrFmbiD5jpRVYkv8Nb2En%2BXF1hdx3XvFmHtojVSDZMbiaBIrxn1qScHEnoBMc%2Bk%2BmealeG1RRDDQksWKyTM2jklC8FpkPB54vY27FNbFTRxNO4lio4SBppmGyMUW27giTcxGUzqUmZ%2FBmDaVWnq9ZyrNj6fPIrsee0KaNENjQzB4CYW%2BTgJJ45htoFjYGGfC73cPOxzBO7XWh8yp1JRV%2FxoDGdufmOgjpKuwi9spqgyvu%2BFVRlEB5NjLWFp%2FtdZiNM5qe0QD06QWFuzq247uHUPjYOJ4C1k%2BVy%2F7s%2Brm9smMtPmQARG%2B1LujrpQ0JZoXXRvIFjk2bNgtug8rDC8wodm%2BxAY6pgEaNc%2BjyTH50Vg2%2BH4WSSKNfNKhlqdUWK6AhkWE6s3gsvpie1X%2FP34GbZogAX2o4nOvN%2BqB%2FOP%2FSIa1vkqmzVzSCetiK8wGn3WNIzkaJKCsLOJF1R1T%2FVVum%2FAiVp9QyE5awnlg6iismyPwEH4F%2B7h7KvMb8tMaeG%2FH36lcWasoZn6SsIJfIRp7AAAv2h%2BDd%2FIWxU4gUubZdaRvxIIeNO0zoVffXZlv&X-Amz-Signature=132591b3377ce179a5f54b2b035595ef2ac6e33a508700ae1c65539e809a55b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUJDNCT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T231015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYsiXBzHnEbBssPBXz5UZlaqhjRa%2FmsMOA8tB5uxSDSAiB20l23X2JN1riJ%2BwCIFyerFgk%2FTGG9WTI5gyevPf1Lxyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMXqOkyexjJONEGwTjKtwD%2FEwEqfqb1N2EHYVYDMbrxxQtNhNzpMO3jW89del6P%2BbHcxjwWYPtyrbDGHjC4ldNUQmWu18Th%2FHFjIafhwxYIArv10VI19EyoiS0ww1IziOVmuqTYfhUoNfPpgNeOr%2FsMe0D6zNoXQxu6ifKM8LtNrdI2gqjb53bZKrx7pHrhBWvpx6PufU6KOSq%2FqygQNT7pLqPYFaHqggniJAoEs10%2BQ%2BK1JiZajWw1RHAFdm7GG8M71u%2BvowhhXaxnmf9Dbeegmyxz0DgJlkJxabHizydEyu%2BiihuamRpVgaJ4EdD054G9lvtRcsC90MC0fb%2Bn2IjqOKSKGDYMFTHKdbqf%2BJKBjczgANGJM1aZ7N1%2Fa%2BaEAU3ov1r5aIvLzM5DUOUZMow51q%2BUO%2BK%2FxSbMHZC9cXRupO4GU8MJg8t7pavYeuE%2B3kpGkGk%2BhizgwSGeEIO9HiXeVVPUKQxlt%2Fo8h8AxR%2BBjosCTqEYHSmK0GvhFbRqNKgNNvyql4WmN6dF590rauUTjhAynwggq5TNrG89RemSHB3SSN9uNJLRZaE3TDLVHzn8Lrk503mwt5vd2TwSxFH8m%2FfYCaG%2B%2BhPB0JQTf9p3YTfHaXrQlLYlzG5wpdGCXxUnTSzMhWyvox4Cd%2Fgwj9m%2BxAY6pgEEgg%2FcfAqHw8TuBfYOMpeGyD6pzcZP3gsK9LVJ7odFPJ9zNJc2GkmnJHmURpr2gRjVb3SsNfuQCbAOPaEa9tbeazzRIsTsLb6PI%2FN1RKzyjzFJL950TVmm1iYKb%2F9bf%2BBuLiq%2F3hxxR91G9UcNMp4b6jmzI2YGHhb2VgPj6n3qSetAS3sSjrhDlTnh1hdOcLm0hBKpDVr1IyWNzXnMPoP2i5bEb74R&X-Amz-Signature=d1fa7261ad921921674c3e000cf3fb7ca2dd922833ead8108410f2a9a7d08bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=122e023cac4562ccbec20dc17d57e2209f2c1272200fd289a3f0985aec1aac2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZZINJJJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChZzUbhd27oCNxNb6V23UB9dueRG6dwClKsgB6A4mabAiASU4z%2BYYiayXShqEVFMg8Q%2BkgJfRSB7TjNw%2FvcQ0OyXyr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIM%2BodMMyXGWGz%2FebOvKtwD86fXgxzDlzAeq0TD08J12BxgMEn5ju9qdvVmgiBwlfkJMbTgY1qIXkp%2Fy1H%2Ft05QTl5afXm8m6mddhHcePFleQHotqcqwgB3g5XRZyY9rMTyub9MNJt7SFsni%2FdCKChwtPc0dZHXPBhfFUEcQDNufQERLD58SHMm41sXBCbFIEBGjao864gK7bLokSf1gH%2BydGZjHWDsbGaMeBw32deXog%2FMsqpwhDHiRvYgyWfXFWli%2BVFCj6lB1Yj16guMKlndm7ASNbCe0FEx61QwTwyaOxqzp7rJk%2Bcgz7UIIukfVyg%2BcoBybI%2BORH2cP9NiVH%2BFOgTuCbqGwNtYNfVNdKSpEpHrEeGGakpYOTF%2F0%2FDQojwbjRGYEHgLKvtcyndRBI81EqyllNZvJmHzBTa68rE5Zot8UDBaLpEH5tGx37rCWh%2Fjep21LAPS0RUlbRntcPeOIUvO%2BWf%2FMXl8BnWsGgH807OwVtCvHRbfU5ZDBXzN1lVV7CXqFydxQvcfXxPMNyV2yzOogt8fbgNeC0YBEKYEPxD%2F3iahm%2FpwA3lvuZbRDKZH3vr1YaCDYwJWp1lYVZvBR5qSdlznPnIwh9hIF4OLUnpeeyKTNttE9ayRm6t2fzh88llmhjAoLIGwizEw%2Fdm%2BxAY6pgFEXnfGTvrlXK4aC8QLh8eSs%2BCeAfT9fbM1cmkSVMcSFYzVm2n1eeAwwoUKSaKGr06gYIkAYPh7vtmY36Wc4e%2F6exTTVFLgRRiUG6eMcS7dBSi8Uaarjnf00ILpqPS8O4%2BxR1Za2gazen71a6O3ChjTDuFr3kH3v6Bfd6%2BkLV1kvB1Yw56oBTazHj8Es52gBitYaekp4Jt3zkQ%2Fs2daBhokVDbpPjtd&X-Amz-Signature=cc13b2c1572e356e35f4174ef6430449fc4e019699dcce45b6ef68a3fc25fa77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=982b9c523cffd917e7250f0155b5c969be425f6a3430fd2e3e10a44f89b8d986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=89d033107ec11afaaf15b7f464e1b45a683624e16498830df8e4dddfcdd8fdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=826286b45339790a522f679876b2a70460cde874c1c6d65f4025bcdc9c4dcc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=bb2c689b4e10ba72e077d89b271f1ae1f78fb7ba06999135140de935ae233310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=fdc0014552bab06c9208bdcff28e8f41e64b50adb3f7e850c811a20cdf0d9f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=57a782cd2aa0f08c316afa30d0a2b5dcc0621bfe8546413fdea95c77fa89b458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=826286b45339790a522f679876b2a70460cde874c1c6d65f4025bcdc9c4dcc9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=4683926b44f0c17973c82b2493c3702979f3026a9dadd0df8c9febd5488a2b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=66e6924b91b381eb7ad6d1be04f85b2ce78335ec71ce535350981c85cd97bdd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7HYGEA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjayPy2RUhh0c9gy6u%2FFDF1b2ezEptxtizoeSPZwF50gIhANUKB7gcLjjfkBoJoI0Mj%2F7TG0XFnfFA7yiHlRjN9gsDKv8DCDQQABoMNjM3NDIzMTgzODA1Igy5%2F8hN5HCPhSAGeq8q3AOT9ZOF4Rilo6ZzRMRQFtbnGNQlu0h2%2FV1EX9BQF6SBsgCogxjJAuF%2FkOHuEJkcJItX8QKSCZ4HO6Amr4yMElAP%2FAm0BWurqWPUAixzhvUxoA3YIOt5WFFoLOVmCDCUaB8no8jFIvnDuirA3Wgpk9WnFb1rPTbtTam70mxT8MXzohPMPS3%2FcSC6%2FDfKKsmEQd9puj235j2D4suyfJc3Deb5swAgREKptn4KohdbtpHvqjYHHbxccBn1tb9pY8zdfKs9MF1yawvAVIB2tuPMiNduxESL6axjz1MzolJU1Yt6%2Bwtvpr%2FjShwp3h99n0G8XF4i%2FwGnRD1jTlKDCHrjlxoQ5eu16pqQWDQwaaGsQevvoVgiK%2B3snJ0qwULBXORzfmBOEd5hhCx3KUH2IOV4U2Z7N%2FKgx%2F2PgY9bn9eCvFBG%2FM4YObZF1QoeREpDw8lDfLaZHCsvLBeNYIODJo85zJrq5u5T7FACRzhLgDrTPiO%2BWm7gmxORUcRHeW9HSq%2BkG41MpCcsABg0CBit201MY7zoCJe%2BQK41aAzWoy5ji9gyMs1kbkaBidRTRqbakIzNlo8fyjpY7Dhbc2MdwgBb3lUjzOwIcJPq25JyE%2BUGYWJH5Fcc0DpTS2QDAQH4DDCL2b7EBjqkAf90Ibf%2B8x1OI3y%2BUkHHecsq1%2FDdo%2FM0aRi6G1w5sePFuOMtl4%2BeS%2F1hUD1cXMiVTWvde7%2BucLFRG7o21gEIzbEe77UWK%2F6F1%2BigNVuQ0uTWqLtsAiskjL40E248VKKYtPjGApCm3T4fyTsFHa5dtAK%2FmvlhgXwaNJgYoVZneV9NWw0auMEXgEZz82ysmJF3OpBnyWCzJkN1LWIIBuqh3bQ4k3FT&X-Amz-Signature=0c6813599721725dcef59960d7992838cdeb908fc7f7a6e2f0e8face855eba43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
