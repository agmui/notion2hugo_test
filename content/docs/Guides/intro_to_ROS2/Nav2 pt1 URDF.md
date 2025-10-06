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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=84c5abcfa53adff836c8c19cfd0f21f0f46ee98793c82f3e54fc9b06d8cafd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=1274ce011534348021aba5ad70ec2f85a2047a64dcfa528cfc7c6631be183006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=019a3a2befa7aa11a7b0814365f14c2739ac7d2284f6ff8f0b6bf1f722bcbfc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=4908fa177480b91ce674e9fae2ccaebbac992c540daaafdd1febec78e3cd95bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=ba039e2bb9a12a683f0a05a48c41c531a730b3c60a393a70c995a831eb672d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=41f6a814fa9a3a1927654db89fea7344f6b29bf19cb9b448bd5311d6f179bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=7c1058f809534b838dce4a0e06e6e5d51282b7db183107645730788e2b43b751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=154dc2e16ab72900806e700b62a0e50895e82102747e2a88766fdb9560e069c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=81fda3221f1486ee927a9fbc01d97e27be42490c38d6a15ffaee0e18ce7efc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=cec3f3a925faf3094ae5d4989b874e53a39dbb00a56121113c74d5cc6415bce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSKQ35YF%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqxEiN6mIxwnZG84gC6AuHq0hzS3UIBDKaT7NMlUp%2FJgIgQLinyF3WfQ%2FDlInb6JUJ8ulED4PhJQzN6BA%2FhiI%2BM60qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJttbxPqKpO9NpaixCrcA4mexSxHP6OUkOpHn5L4RPBpIrAng70axDnrpDY8DjFwxZSJrVs3bEJEDqbPGpGTk06kdT05iXv2u4a7b7WwmcKhl6F%2FUOWzkEkj548p09WNs25Ju7nQ0Qgm%2FSZrb7fk7AFMNE4%2FfTRupYMHGfh%2FWkEMvWzFRZOUz3FwrPkHmr83BEhD7Y%2BHzg6y%2BkC9swv81X8%2BSV%2B3vmkl%2BzRs4IAZOd0Daq9QO8dl2DQBscHIFZ%2Bfs2piur%2BRcV02TIhSRvl%2Fpko0j8yemfmMzBybBM%2BmF7dl48wYFYARqJDuLBlM6cxFCl%2BzQ%2BSAMmb52JvhOjo0jSswDJE68ISVNwnLiZtsCJ6ivC6SDh6skfDsuoDke6n%2FwYsH8tEh1DyVY1d1EkXlKzZjPzQ6HfyiWB7NdZd7dMkmV4ZgZ7xetpUR5uv1HBsepSPKTXJuPZCC2FSgFxG05b6Le9rFOj1nTwr3oul%2Fzvi0uQgsHOPtK0GXgUvRbZP0vQ64SQ%2F4ngKepi5ZFmn9XTX4vCvAwg8tntVSqYC8euDEEejc6D3n8TRtjOY560O7GBczhJdp7PDlNwAgru%2FSfebVF0%2F76e72eImunXHk2F4hG3bzQI5un7TgI3vMTMi%2F93aGKfH9TqDTKPjJMISWjMcGOqUB1X2DuTrdAaynBOcfLo4IFj%2B92vuurQj2BoymEB5zhFnRS%2FQ0Sd80oF6ij00DjxnmIz5DU%2B0tBcq5QCArQ4f18LTEohx9SbAldgzdRKC701XOUPohB9DfhKt6rsBjSAthpgJD8AJQZR5OR214bIvvnTbF37fkL%2Fnln63NcPh%2BjONlbB4YCLF3jYWQCpLDdfF3y70jiBZuZZAHV%2FsLNz8y0vcTkRhF&X-Amz-Signature=6cf097191861ea31f3ff4bde708b1ced68c94b7f76a415cf8b4a59857162a1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMQ2ENYG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnYesCVmDAqKg4s990FAnu85lZ37YAsO8%2Bw4Wrg5SO6AiBZXeMyOkcokc2jnbFVLID%2FEHIPmpfxOUtuT%2FyGP3hKTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5SvbqmDZPUOXDou3KtwD%2F2%2FrpCAcBlEUkh%2BhQgknQBJGcOBgFfZN5jC61Q4qWvF%2BTO3gyn%2BtQq91seA3hj6wjY5smPV3kBEqnVPFL46lWiJDoZvXLQRmI%2B8tEIgwOywTfZ2iumuNl7FXup2hGFChl41VUX0InDCUaYcyDimnPnR1IU6NXp1RBq6w8YQaxyee%2FX%2BzilKQW%2BZBG4l6QVMdiCn2iq3%2FJmPVSQ1n9ld6okQtwQsvC6AqYZ98igJ2er7xUxZjqt5IZZAsnE4ROyD7r0aY7iCEkD8tXLKZeSeytF8Va8PkXjvbs161E%2BdjaLQPDVmzWc0Kl93AUv28aWFg0IIE3YJ7tbrzBlavx01E68tntlWNw19tEf5RZiclSbh7CXPS6N%2FwiCq%2BmnB1tCzJvv3Gwlo4SGQMer2a3YeHWphd%2FplgQCxxJXtrJ%2F3WfTdEg3nZD%2FQOeJwF%2BuXMZv2wMR%2BJj58tMKCZpmAY41DFzMJXp3lld6Q9iBt%2FGt5E%2BDEIZYBbCCYW4jXhbLt18iBgsH6mbcTQKVFZEJavcjnqfvOCTjLf2nrG0%2F4eUPOvpwUwrLBQWNu%2BnXsuMOH8sf30oRWJZYpe7M%2FYM88tMXzbOTBeQEXcU%2BV1rQMezoicz92vQCjpolSZg80RnlMwi5eMxwY6pgFFyMLAESt8vcwqxarMrg5ajNuR%2BwTT32IcrSCfrxsjsZ1D3KTcLOw7mpRgW208OaZEfQvVQ%2B7L%2F433Z8lcAZymBxkkU%2F%2F8s%2Fuf57DyLh1WOqsiDOOY1ZxnaDEXy5ujHoxkvoET3vdA8egZnzhprz8WjmQ2%2B%2F%2FZHhymX7gdsU6jasE0BBcOobk3hFNxtxoGGYjqyPNovsFhgJxYY9hePMudVQOmHxHT&X-Amz-Signature=6926d7c0c00171a6e48744a47ce09cb2e69cba1e65cfe053b2f38003b512e791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMEWTHQM%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpyreUKFCyJp3k5uw2sbQaVO2VJe9%2FvgGtnezkL6ADwgIhAKPgBO5670KP5ePcKGRGVa4pEhpVKPAOU%2BJeYjcAJy63KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp7elcv%2BdPHjWKdNkq3AOFwlU2EbxAnVuQAMZx5%2F0jWWsN32cicOHT0hdCWZUtU9OamNH%2BvFl%2BOpcRGkuXQXLM5wYHk25ZbYstqD3MxiK4M0zCRypAY7GsYvcBE9P9%2FfyT0nVDVUDq9eA2xu9U7QeihbvXVm3s40nqVEUuswopF4HH42yBLmoKKkoO6MFhRpdonnu36qd3y%2BypHeKBp2nf4eHS5OZJY6KA19h20U28TBL5WtvrQljXoMqWLHfCvV9TqoXh8zR6srWFfCJY0TN6ZM7OmBfQGWyP6i9WH7tlL8v5XfZLOzUBSFAryXhIU%2BXvFxbvDEaVX2stHCkJV%2Bohr%2Fh8wo%2B7KuDqWLEIoZeEkisIj16H5HJ0LaZZAMWeSNHTwWPLhbl3IlXCPY2yJo8U%2BCDJwanKvFpBAfsBHgopNQvOmUddOwHtH5ONb8xvwbGmD8Pv2BvygcFETD5b2VK4BlH1salz7DNHVA0JpztLEgvByMer8AQS61x7izds49cvsdUVk8pAeKnbVUkCx1n8hceqRmrVG6t3RQ%2BwJLg0SStMfcccTn42hetGZ0Nojdy7oYAIwyKJihpfHSYBUoBgVwLzc7vqkRhUQGOxlGr5uMv6iDq51PKVVzdA8cou1uEy106dhL0kdJIfDDDqlozHBjqkAeVMNGpdNWqi3ze00OqKrs95aZAMLIUBTMpp3Hp2FtErPYyYlzW8tYzrIc1n36oaBTut9ejtELaZCsPjJSIM%2BetGsKfXjVHztoCLIPbGOVAhUhq6HSHd%2BoVdud3z6aZkwkE%2BWkaTbF6wIUxLOi0ZPzI09STuqfhOZnS27pkCVqXfJl4knz%2BkA%2FIuewzM77CwQKmWyGTqGPrqt53aICr3DzK4Ch3g&X-Amz-Signature=5fe67d4aaada97ba4266fea373bb83456cb86891b910878c60fb94d0dc4184af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=6d985acfc839b03558e11c02a6fce8d27e2cda5551f3a5f34c43ff873974b4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEATHYCP%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7yvyLhcMaPN%2Fkd6EU%2Bta3dfGN0o5Kb9z2iRYt7Jof4gIhAPL8%2F%2Bx0Z5HlmwwB0RwaR8%2FeQkNFq77yRPL9C3EwvJC0KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgDFzmU22zYHQnHF0q3ANYSEao5CD%2FpMF%2FkReePLn6TJDolyRCjuqOTv%2BdZnomQeVyNXWqsMgSw%2BINXLq1FYTD5gRPD1wH4x8emaz2GC01NAfGnoYgfLYHESjpvuQLYx9EeIMHv%2FdbpsQpYJb%2F%2BOmjvwNuGnpyHkMvWen15P1DH3m8a16Gjb3VCD9ACqjgHDCRkNw2UgKk64ByofayR2dtYCCLw77hV7HjEF2mU%2B3X06%2FWxrjMYdyG8JYTfukbDNIwxrHY%2FNa%2BWtt9id2ThKkxb1HhiDVMleZKSuSV%2B3SDXUztF5F9mBG0rXsEn5duVCb2yO3H%2BR3p2rO2g4a3XjUH%2BEdpCd%2FPrzE1Qo1NWVCPHGJKMHWg0G37ZX%2F%2BeDLAIcVHH1kkfI2pJ3n2yOw5DcMawmPBv2ZovGRPBhFHWU9sOMe7eaGJyrdTgRv0Z%2BXh87eughqIKVex%2FSpW7hRUIrKhqOThNrJQj1moC9XQe%2Bzvwz5CPUJI2%2BIarTaMKuihlaV3ErfQxACcL1ZXkeJ2NBliyQ%2FjClElEjn7EOSGnB%2BnZfWi5ca8pa4T5P0ntgvN1uRL9lUwnA%2BRrg5eq7OHv8BL9t6s4lM5fXl1DIHPsYW8VHUTHXKtgfuLt1Ir9pbgT2Z4lLW8BpjqaPWoDDCNlozHBjqkAUXA7%2F0iQsAda5tQiGe%2B8ePLFclVC0SjqLXqOO95Tg%2Bb0mbdJ7niOwdJuFF%2BYGVSnejTwS8qjBNif0lciRLTmCytNiNr7RV0GnQasWrWX9TRFTcfgGmgP2rQ2eign7fYNu5Ktly%2BMxVUJm9HtFKdog1ulwseD9l52LnH8Gsr4YSgDh4Gch1ycCNsqJvlnSUiT4W%2B%2FIhT4DHs1n%2Fvr6%2Bd67r%2B8Rlp&X-Amz-Signature=d5d3d4d2cc298cf01d30537a0072dad833d858935ff39dea3645fe2ed1e592a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=f30b9b2f6cc609fd19b6e091772655bba39d83759c915ae5e2a3ea96d6d91549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEBQOIU%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM1tpc1aCNV8VvTpy78gZ2sb%2BtpePKjzITVcNl595hVwIgVxBcFd%2Bmc%2FRkqo99VM3Wb4C0XKytnOsFHJzEtMttnJ8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdXVZjezKjxT1htoircA%2Fy1igNOiNxcWaMiSL%2F9XPGSydjWwqqolVfH4g1ktlfkeq8RKdK1eH2dwPFsKtcG0iyiPoKqbkCc6narTyqoT2hf3HKfAGXgLm9sw892hXL03CfymSmw%2BMkCwLR8A9edOU93oD9PWwd0tEodOjYYHsk7qj%2BS6UMuHmRdtTxu4f%2BisHzG%2F2N4%2FD9msIs5KrMmuPYgpUAjuU3haG35CJ9dY1%2FCq51VX37lxilO8y9BM7mtlWQaRtA5X%2BBgDkAeoxV1jJQINUQYG%2BpYZtZs2CQH5Uk6XwNhDP9M%2FO044Wf%2FTsIkKJ0RPLbVFSsUgb6Wre9JzUV2s%2BYrSxCyFbuZ5sNcdJE1gZ52A1YT6BQfJKPqas2yQQSUfyZu1RZb8QXt3UwPLVTwd%2BsGgqVgARoGKUhCQbGI41zyWO2SvxTsrivxvTQobOOtzOeL9P5ZEe7hduDORbzhhGEK85qJlQeMtRnx6eL2atJj5D6XNUKTYYEPzvhfPdD6aFqmUgtTMUKb6AS69ZRD9kM4aFfGt8MCaviJt1cOrIMuhMVPsNFlNjiYNPEOfJZQCRbWq1cEVRrBJr86I9bmyboPdgaDJeykexfzDJxTV9VPL5qAvMQON5p%2Bd6Ymvo%2Bw2h5YFAxG4A0GMNqVjMcGOqUBE7zoL0d11BFFMSQW8wu2x1ejQpPTN3x89H0GRDyxiaoUuhGXwk2uVz4d7xfAMUdJHOW3g0CI%2FYIIC9b54IWc9KKQ5FXPK5%2FEqF1WcC%2FVf5NLpnUdSu%2B3JkHU2mU4Urongk3DJ6r6y%2FOOQmcXwF%2BWNdqBOfsiUOQ%2BH7PpVObIfVc4KUQ2%2F%2BQx4aNcY8mlcaMVGNXak6p0ZOU8falqijB9fvq1HpX%2B&X-Amz-Signature=de8d90d31078c7473b014ab647c37b31fed9efb605263693b4f8660fdf09b503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=ebfc6de7ae923e5ec31b6afbcee4b9301b87dd12fe417a934e4efe991f43ba31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HPZRUXY%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCs9JeF8d8CKguf17sjtmTqn%2BS39iLoOQlpOWrSTLZlmQIhAM9LXl8at5%2Fdqh4u7sHrvjPTifTckt5wUIFDPbB6GoC7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwm1XPLPOxLLbknNLUq3AOHOCvjKLdgdvAU6xZs6ywKmerQ%2BAW6sUKNil69EZvSyNNlXufg01ncxe0gggTk%2F8vm%2FfscvnAwTsgV%2FxkGSQoTnAfATJV9qxlWtmxZ5DFw5B93ogQRdY8Owj0lTigPbfaDs%2BZM7DQxTNauNB5Ws594uMGDQySfRRMV8za5udKZAXR5AMuaQwhwWtYKZXjnliewHU9E%2B7ezU3L4F75hMKx%2BmtPT2ASaypwF4oZtkvbDfvsdqipfjiRuD0iOYuKbLCCrX2tLGWDNjNKl2tFva7438KAwkiPE1nlg0LK7hZH19eMaArAqXk0bUknirOOIkQ0A0%2BaLP3qGymKx7smSCk%2BtGWUdSydTcft4qO7W7Db%2FAdbT2fQySEGUf4Vq8U1qbQuqO%2BgHe6TggV%2B57XpXg2wPGdyzZCCsxuIV8caJ%2BWZ7htBZG%2F79ndNX%2FJjrp0sGHmZplDIvBmFX2ZN1xPG0OXFiZ22RiLlUzxAe9SSBxlZ5v6ZXHh8NW%2BCBVKPT9rNKsb0yL%2BPckq%2B1sjFs0U6kzEa3WB9LzakDumM9WsCWwfxuWwuFq94iZNuJbXG%2FxgeniyJgSp2GZKU6b%2BG3hA5wjilFOoK4x8b7MPW9mPtxrNgRTlxfsfAJSED1kkupkzD5lYzHBjqkASA%2FoUU%2B4SSBYraXKn3GrCwuoDsYzYV9L5xz5lkcJodf1DGOm5X0vtk1oK%2FXZw2Mcvd%2FFehnSFDLzaoQkzp86rk9u2OmdNVEL0PHNFEkRKiOsx0Mtg1jQ37cvAk%2BHanCjQtg7lCItX%2BPLyAS%2F4%2FV2N%2FV2SVTK29S%2Fukp6HERPi3n3gDS4HaHJ2%2B2ROaXvt1rjffTl23f5DUmDkoDTpKOeUHFGsle&X-Amz-Signature=eaac5703b07dbd3150094cb79d6be15987004cc5c121e39180d69bd1bdb75c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=3495c5a681dd9a0955fd430c0a88a7939f56c2cd2b41103fc741a053e3ae0c02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAB2HQFI%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNW26cabEIkufBTucUZQFFD7yRPebCvE%2F%2FwpGLOTRJEAiAk0HEA9H7fEybPNoaVkSDBSXLO2UR%2FUKw5bjdrWNX29CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeVIIuDZux7JsPnrlKtwDQUR%2Br9iFvGEpCoAiek9JCWuTdPAx3g2RaxKbFadC%2B6yEiel%2BCJhsiKS7Q%2BeyUjC9Ngj0PMCrmc2Lhh9bgBli0u%2B%2BZfp2FsbroyRghIKiPtiMBMUEMRqLYEMvd%2F1kn4%2Bl9YSmOS83G8FtT8xL6oC9qdXEG0Prd8Vq0Ru4DSOEfL7LkmW3b5GTFbYvaBuSRYWpNz3MJpmCUuqWLx97jsQ%2BULwyaYeIcgytkGKpm4e8KZZRAKwCj9pnpnXVOUpt2HQetyAL9P3E15Eexz54v4LmqmnEmxjlOZR01BVAEaaQoKacCmk%2F%2F6Z3wikyYltYPgCmNBEtu%2BaoBmAFjQMt%2BhaM96%2FSbGqWlNU%2FKvPUDBkLXiWYwEFNy3gRT1OmfvfImspRCbm9c%2BHJdjy8GxRyG%2BsNlV1A9Q8BqG884FV0oSwijqXlPPgImGbBHMtzs5aNl%2FFw600mBlsOMX7TMWOTvh9ZudlwkY5xKGCBvb0XF84lqLiGPJKswIHZ9SMezZceNQIQFXMzTenEGiJ8JMCwQAFxCT05oSJEsfYnoKmSgCE25ePHLsuuXoAjs%2FBIdVvFmb5Jhyn400ZM9BJWXoGF8nWPGYFXFFcWHI3f7QpKev6YPUF7SPh5AoRrheWhV%2BIwl5aMxwY6pgF5zCHMGTuA%2FQv4qTtm9cz9nUEc360qThV4AiH8z5SIEIwcui7XaYNUIWR%2FWcPREYeimX5fSKcly4WyVCjxomGzy0dC7Um5uKbnn86so9XmIzTlVVCbE0PTxRBVwQYfnSqe4LgG5beR6cgc50iczRemso2L4cvnRhmdfLuSNE522jRahATBxk9rcvyIyffpaF1Uj27RiM1%2Fb04bIG9wxvO%2BTfjcwXqY&X-Amz-Signature=6a165f2fe805fdd057a7fa85bf22dc624acdd5bd0dd39060cc264375f29ffced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=78c0e8fcf5e24bdc2d2c5a9a4273833c0d8a7f0a0966ba7f6ffcfa1773f41f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NKHAD3H%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGGZM472l2i53%2BflTVJOspmFM8axE%2FFQjPGhCW2LN0mTAiEAo5jQ8WJjG9UEwfysBPZ9agEYbMfNSuZsujGydJqLiygqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4E7vNHdTLGhnCbvyrcA7tNfF%2BAjZTPCMsOQPPLuKhCjcHNue7ltiqpeGyIOl9geDVhOSMZQsqlQ3%2BlPEUsrRT6%2BSLujoFj2eT8UOKZegZDZxyM%2Fihkq%2BQbBywx4sQX3I0Gu%2BdI26GJSXmUYPaXkZ1X88xLF74Qtadrl2wLHzSKDZCZlDU3xl8iox2K55AwX7gRZhKX5ZrlQYERoqzseW8LOHUvUgeA8EEmLZqw8L%2BFgKCcBYqLnw4n%2FA2iezBxN9ZtacDaUSWDnqv60DKorX1vwv3XWV5NYoqrmmgmatMPTF%2BUGKp2SfKf3vgJs07y28V8QQVN6ZNXEGvaKVHxKVaF6gFEidkUcVgEf5OWuqBIBXU8yh7zg6skTtoNNbwMlJcY6Pc%2F55UNET6QManPh1zoAQISeSRDPFKJOzVoSWOSYndWlZuEm6QxxEC5pC8OAXZ02XA1FtPg74QJqzPt9WNURZhtQCh%2Fs%2BQ7RmdKIi47uIUvZdtIqXh5TgHzCnHyBPq%2BVvrJkzM8aQ48pv%2FkCnya3zhauCaQIGnzRE5maqKnXE6rQv1uKxFAz8n8FBU8qfcuvBrZA%2FML0e0B8tNIOEW3dAqsQs0lLpWqH6VyAMv15JaBOzcWcaWoKU4gy3zFanog6vs4FI%2Bg6t7zMOWVjMcGOqUBsKUYZd2ISo%2FXa3KoJW9g676dcwgXC%2FWrTs3fn1VXJx1RquY6OyRwkghEAKeq%2B58JQahiWtTDQ93lASEY%2BHKA0Dyac1t6WtQxDcgMypwbX3TYoymoFjKPjORrtu%2F5FpCHUzB3Bc7RVRPtg4Mo3uwnlczD40HObMQ2ymYRzqHEBPW1sxneaOHddXxFkgLN79AzOgAkbML8nbCNo2OppP0%2Bqrl50LDd&X-Amz-Signature=0a6d5cc65f0466b6da1dc06fbf7b230b6d17da2fd95a71364899733928b9caf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKCYQPT%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZ%2By8cVHd%2FBE1wUbZEmhDIOGDPI4%2FzA5XwRn4%2FYzJ6lAiAX4duBGGEFSFFYVrPiGoCRRYWGacjTTswR7g%2BjUUn7ziqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzasz20qxloFDSW5iKtwDTYZrlYtWTd9Cxh%2BGbPr8TodAw%2F1XYeTvCktDYkU5udAYaEV5ausgq9ZOBeDs94sn3qK5YNCnDtRGg6CiKfbBMOwcrZqTfLs0vQTlJZEGmMkgi0r1wnwAutzDw%2BnJ5fOfJTBLYcKhmZrQKOcS4WUB9kUrGeJx90JR3PemtxZ%2Bs4PC1ZEkvwgudR2zWh9Y4qYZJ96uC5XACZvsHA%2BjzscpdBEqndjiPcU%2F27nHuth40Ux6d9xbt%2FjyhleTvS6h5aBW6iOExlcA0LkXba%2BuoJ5%2BgyAihBhtaduTtge6MWz8W%2Bcwm1NWhRE3Ifd0h%2BSpbLRWUkLeiKPOUI6JisuY%2Fz%2F4FbUYSeEwPSRfvk8JqTWB7EKcjUZS4MsBX%2BcXwDWzQrcqxbj6jBw3um%2B1lBKTmC6eVJ0bIBFs%2BCCdW5RJNKdcDu9wSGjqYdqLwAaNI2FexX2G35%2FfS%2BOIZ6Nf962wc8cxbr1%2Fxu58njoeg%2BPzVoZ1hhaecPKMOKY4ZHtLeaAcQIC9qf%2Bd%2FKy97rLR38KNdZetb%2BtwL4P%2BYeApTJwv3J0vJcNgQN74hX7FuZ92VSMl8LrfBjEhvOGmHunnm%2BkjlcAd7DMKLm0dvQ94dmwLMDCBV%2BO1ZEwslT0PnC%2Bpyh8w4ZWMxwY6pgFqAJsxu5B%2BhBxAAR7%2Fpjueliw1LP6cQHSysHawqMVZ0%2FBqnqSQg6wSKFdbG0%2B0d5C%2FrXdylj%2BNdYQlY4sBHItVGchXzGei7Hp%2BQWlFjWGybIsiX9V1juRVLJpWEKaS3xcrttgj2fXuJC7bTKZ74loC%2BvYyTd1VBm4YJnxIVPwKBKx7VUkerotMm6bERf4kLHKMnQYR5co0XnOroeRAiLpaljDB8jjf&X-Amz-Signature=b71913563e7dc4426c983beb941991fd3ae1025e8e5ac43547f034fe84f84bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX6U4EGW%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDG9irMAcT9y%2FcU0pNPefsKRMVmgn%2BSlOxfUwh68j0aGgIgPm3DdlJX5SI7d2c9j4LdkzsvwatMGFY2euoKuQ5Hyq8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1sVe9krapriAL7vircA2hpZjkFWIbAS2rNyGnpTsadyK9hwYuIgX2JK2Gpy62y93N2AdJ4BLLmrKn3ZE8S%2FqJtkM8v6JQxA6dRvFKgwQmAJIIHpx%2F0djMbf5nzgDedFbeo%2BVvab%2Fe5%2FaL8j0wuK5hPqrVZ6N6r9KuEZswpNGIxj6HSyjCizO0bxc4Z2fGqTDCvUeq4kJrwFrqRsdumuqp0Fz0pYj%2FAI%2Fg5%2BpyGF0wGiqpGlVwJpE1oko5nUNMptVYxGmJImjTtvUrN6yknxwah%2FxlaY8cKJyTHB1towHx3AHL3YT0WveyabU%2FVdb9%2FfHanehNeMQZ4iMVfsmccHNT1%2Fdq8SQUcHBos8SKmLe8bvJMP9HsCPupgKQUzhYsuLvErVbbLyXasddgoOTM6DOY651w%2BVmkvL9Lj9Ynz43euPZG8soZXsIdowBl37R2W3UovXrSxpws4C4ARCZ7F3tFW2pAVQir6k5UdzV0yEwKxbdSx8lz5F9ZBEmdYKlvyLbU092KgmYHfhfEcdn%2B5rlcl5g3wWWAvpX%2FfIq4tjhaDSMSgqLICMv54dB9y8TkQYiq5p9Vg2eZ001l0gWknGep2OXUEChrvU6c7%2Bx0tF2%2Fep2F2Zkbhb0NdKuIP3hVyp14Zvx%2FP9aTOPxGgMO%2BWjMcGOqUBKooa%2FFaDr6vcq82UJx5wzMfW1blZE8g9WDmWRj2DhyNJDUC%2FvCyZB%2BviA%2BdbPXCl4IGiSvwWbfvJ8sSnXXTPcfQ%2B5FMo4E3NEjgETIrFMHo7SMhOdyDeYTTWGcVOlxvtOquS0KJMkjUrCrQ3sGPHdtb125jxsVmIA00DvK3v1NpDa7CsZSplmcRSBOE%2FqG6twHbw3MhQ6Qo0tA19jcCVgQ0UwJ5V&X-Amz-Signature=7a829291bf95064aeec7e6cc98f3920a13c06790dfdfc21e6b85791fea237b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=5a8831d323ce90e2bd0cdd738626f2a773004f812a052d2d7e8bb7306865e4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULC7V3N4%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOvm%2FSPW9X9kUvvGU%2FdVYDnz9EUuZij5VtlzhrHvbpoQIgMnRvUttPf%2BqYy0oliBGxItETsuarrWxe1B3FzmjsIPoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkPS0a9g4V38TSVHyrcA31Dse%2FlWicGuwp%2F%2BGXyCjtAeRsSeOodBTgMMwgn5aKznRvArue9w3R1DNgpsBjcFqdkt6D4ZLNiBX7LwtPknozWOTQPR4h5Qy7sp2CrvESo0N09HdT9vLWioRn9dYGs79wJPltj0CSJzeYNrKKV67vgjj8GIVsV6qcNNZtUXX%2FwsMkPaQMyJ9LVEBStIXJPWIgnqolR4AVSsLaLRNIURcU3tsVSlKMNggqRe6phOX38ZLtBAWQHQKQ82%2FB1K6BGe5YXDDbwo6Jfkt%2BjBFxTA2HDbbL7kMRWSx3D6MVmlG%2FsRYZPT%2BuYcL9W72yDFT83i%2FZwHSFY33K6WzoXV%2BoT5rOK%2B9fGZkI8xMus8g5Jpj9FruC8nNadkQ6Trx2udyQCsuEvcXBpWpAVDPXCuI392crM4quQe1Umxvho6esr5Fp3QZZB01Bb8ZzWWN6KSDbF0Fl1Qrq%2BBIcZbezwU2C%2FTp8%2B6JLypq1mfEV10X5FgS%2FeWqoBpeGTYAhlTPSdK5nTqQKzg3J8UB0kRmB4E9m5S%2F4VRV2dYVP8%2BgFMJdcpw74tnh3L18HF9iOj4ji358d5N5VBP2ArLl0CfwND2ltPCjCK91uX5YPB6fz7N3bWBPEPsm7Xe12pLsWIwS0UMImWjMcGOqUB3G2xecZPplDHQ28iC5qRlvlNIYfaEhsfUfkhYc2zDO9i4IMCnZ0iMV55l%2Fot8P66LRss9Iyw81636rauq3QzGcKAXv%2Bx%2FIeiQRaRDUhhpabPNIW4%2FfOxocxwxoIVPJOyrnd3BkvSyC7YUQUm%2BgUrr6WQaJU%2BpXl2ly1z735A71Rsd0fHbSLU1QIs2cbq9l19boe4EjPKZ77KUv0LV0K7PkbiK%2Fyb&X-Amz-Signature=f2f02e63587f99e1f7ec9a0316ec297e263dc5c3ddbfa7caa26237b0454ef9e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=d0c52da78d1e2bdfa268c5372cf4ed06cf4c8d03e1a8931195d3917623a9cee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=765ef2fc947b8cf3067183ac6fb76ea3713cbec8f5c64d02807a3c6170fab525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=842f90556fd2bcba92649eac8c780692af977e0daba53410377f93688d25cd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=7b82e2d40dc8e73b4a1feada3984bab7e5875bb41211f68df8e997fc198b62fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDY7WUCP%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw90RhJn1DRjERBtaGMZV2Pq4t6OWLoPd274KxbpI1aAiEA48yRC%2F0qRQoHyw3PafMS6UcFjAuP%2B6oZrh9A8o89hK8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOrnNv3%2BkH1hr439kSrcAwiy7CuwmIrejDr3KoCm0rMiY9azIA5Ym1dCO9jrQ2zQyJL32EBzBkeYKnEIapS7BxO1qoFDWFwZR3ZLm4dfjmXZ6Z4OLHB5nI9RYI5pPeh5LwVhAcFrk4i3owg%2F2JMt76MGYrBMnBTB0Hc8rujMVzHlBw8fOLTFPIEKy43u4G8A%2Buc8ZPW22onvHafbSWS0AoK%2BuCoVaZRh%2B%2BajczVvME7JibpfjAjWK9%2F8GXZcCXVO1GdPfmkTjHgTW2tWrXfv9mC0i0C9oOezFwfEvy5ZQkDgEvlU7YV3Db0hTJCAn9fskMfIvlcUNu8Eu6%2BLqKNt%2FwFz39TT48m6fIQCG5a4d5DzRBVwK6eEWDIZU9H9eAVg6s9W8KSZ9RvmiZ9yCUNa04WmjWVPmH1l1je76fGgsrr8tl7O7bYh7utv6aFDDZ2EzS3svZdBAeO0hFLq5Lk0tH%2FiwCPymDfxe7omser8PytLkdJguALdSjvFyYNclyedw%2FgtMjI5zd73XD7xAREM0FzfGT8r5HfG3yQ5XRaAiwv7qUtaVQ83ITnVTpCzrAiNmjihzpAPwGMxRlqKb9xoP%2FjujCkDYVs2Y%2BLAhuCgNbEHKkhGNmgwkvWNwkIW37aPEt%2BaLrrGSoAmVdIHMNyWjMcGOqUB5Bqr5BoGZmxv3YbqWKrKkdpkRpY6VOUgSWkgOD4PfN%2F0QcPAyfbiVzOA4fBP2dRLivNJOkFcTrMHY0qXBgqKXku%2BD1Ta1iQqu6VLKlsDsDgo%2BBGUMu84dKi7WwVPSCCr0n6QL2wtE8%2BSib8U25tfnTwLHcY8ryt3uzFrlw%2Btz%2FqqrcuLLv%2FWx6gZi4KyWL2aNxdFAnN97jSH2G1hPVf8751GsqXR&X-Amz-Signature=c1e1c7a894a5313ab80495c20d7e90fe58d8145af93d986b4b573530a87a2e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=63f843e489a5311e78d017e8be41aafd769025900cfc8920d17025d6a0427697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=1e7b5d1a0ceab139ba16974dee43a18abf053a3c5f9cafa5b2f6fd3c067e2b1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=842f90556fd2bcba92649eac8c780692af977e0daba53410377f93688d25cd3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=aaba45d7a6e65d101f71c7bebdef9a0b27481cc40ad73c4324113a89a7f24e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=4baa2081c53fe526be590e4c0c4b04689224aebf8e80d73fedd4ca44ac46de7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3TSDU7%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWyOiMdEyKT4gEmXypMFi8lV%2Fq3kBAxfkokSfw3%2BYk4AiAXZW74gg0cdS70WduqfLAwsaAmKR%2Fq4tK6KUNhC2RFQiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm9o4n305yFPWgn%2BZKtwDEexw27K4oB7ZjmnZx7KW9JlbVGDcjxro7a862p6EDm3QLWOe8SDefz2Jk3E56hwXpdmo28wzHLnTG01CRPUy6uzZNxORL%2Fhd1vaLuHG%2FKsA%2BgMl%2BbrDJQml8mVY6mp%2FkJaJlRmeCfuZSj2Efpvr2LoR3EyM4S03QyUzDxsyoGAPf%2FkJjFoM%2BqkHlDXDyZ%2Fa7rRXHwqHA5OX%2FZZRrKp63S6mvEfgQQZzciGMdqcU29%2BnBcx6WznCXJdUQ7P1M2o6wNU7NQC%2FzPUuFNFeV0TmumOoXe1pOykZB%2BmOhn0fBZ%2BmI4aE7%2FXU8o%2BMXCpl9YF9gGiRpxrYG3Rs9RKloGJT%2FaKcMiew65urkzTVIvFJYZTw9%2B8ujpW%2FAE%2Bh4lO8XcDy0eUWVa5eX5uMQe5cqsgwUBXHTUku26hOvQqtgN9xPNsZvJJ89PKLammypZLLDUDLnX7awqLZhy%2FS94wISYlOPoJ6B1vg9T6OxZ4uyjCrZrhHYJ5cGW%2BWPDmJQWwlH6zjk375OH6O%2BA5PKaNYeWwtSdpGKipJJet25gnt%2FBd549Gx4SvER90kZoYDdfLlmOQ74rV39y134wux1RJ8VHDU7unMWiR9EaZY%2BK%2F8SnXgyFKnse55myL60cLA8uwYw0pWMxwY6pgHN6FnUY1M%2FvwcYh7NsM4pbqelq%2BjwH5rmcGeyZ13kN9mCQoL9J3Uo1g%2BN%2F9Qe6ccPE0byfvM8uyP%2FNzhx3hRGo8KI6NzM2BBI8%2BB4i%2Fq6fNmfLdf4Pgz7CjEYuMkg3mgX%2FsdsvWERrmPwloGAaGRqzqFqoVf7gQ5VudUBWxZ%2F2oYwRD3cBylXows%2FIfencymOIRGXdTLIo4qeTODZ5rfi92IwpgQBt&X-Amz-Signature=a9a05fc717faffaaf1b8ee1db31d486b6df61921b66dfbd479dd15e5b0f97896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


