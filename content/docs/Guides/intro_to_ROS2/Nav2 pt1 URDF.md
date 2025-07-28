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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=c6b81d2b1a1c712870eb97c95903135d823f0601e85b758ba5afec5ddfe236f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=2ec2a7203353dd6229b5da1c8a819283004a8c96edf8116b81c75e7d657a4de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=061bf42fd701bb51a0aee22d4617ebc5a26f121ada24418274e30e209d6d1a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=ce628289e499bfe2dbfcb4d5e7e3e3627a58608b82b78fe7748d893d6485169b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=84a09d47b5b7da7f4794ad9df41133e68e3d23a25278d99c72bf5ab30652bc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=95fd7031205141262b2b8b0f2cf96b543f5d67201952840e69177b091011a611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=1fdcda99d8885089d8a8167bcde4ca6d5cb89a3b03af41bebe4c0ef2a466e4bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=f9bf0b10425b2382e4eb672978f801c6d2a0c3ae3c75d3847df62147f1017baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=bc49dd9c05a39fd2cfa55aea7990bc1a791fb0649565127ad86bc561d356953c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=0c47da8756e378777549ad41cce1a205c9852c533915ca0480f5b60952050962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=9df9cb407a14b9d5635802cfeee190ed1f91fadf9b67d39221e5f3975587cd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=c2aa09dd83f60a8df8cb1f2ce306c7698ebb1a6c6976b806b43a2dc5483562a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=a31ed3a23eb602f2db71f78d7a1a603898faf82eb9194aea64fb2d33912599b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSBUNLCO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAqsLpH5dBmX6TD9Wpppwx0b%2FC8nsxEew9QdOL9T4TZCAiEAziVJq8F9giJldPynDTd%2Bz%2BShL3U0NE38APvEolsBi6AqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCEGaJJ3zIGTM%2BIyyrcA4O7LrqBAf6BXPdHIE01i7JyjtaLzVb%2FRKW%2FfQ93ynA5Syo%2FbL5uwgVPxpGKvWliS0SKlz1gKXkSe1QcNA9jc%2BAhJ%2FVUX7A%2Fw1C2qR0HeulYRwBTlduXL2ekbmLNauUI4IzEvNVTdQOS1ZjXbh8loa9290UVyeVWJDQ4%2FMHQslHuOkOY7HefruzSfBx7Pg3s7WNo9X9PtX9nfwHs1N%2FL5GJfMdGq2DsozqtutiIXWVmPJtDmgqOoiYtrgzwvBALCrD1WakHsE6Xfzs39BlKmzB68krhUEb%2BsXoR%2FaBuLnaFCbHuJiQsoODhAYeDKkRnOO0DgnQ4e%2FIDEfc1zgaqABWAo0Newp7ClXH4iS46VMcFIr9GL9Vcd4yPFA%2BPEj7MUn%2BOCULSKuS3b6jCHZ8OdITXOjiXSdbU0fZ7wWnBgCOlv9WalI5tAykTzP5Q5l%2FpxeMH%2F3HRpnuJgHpUm29CiyoK8uF4klMCyMXYZphzv9h0FocVoRWYsytzqYbefGg77j2bAC1LTcNHiSkodV3dzUSGnnE%2F8UOTvvHaJbNg%2F63gdcsTzXdk%2FhBYitwPqwOikTLGP2Ldp3YokpldLKAcLSRmEyp%2Fmz4LCW3p%2FkWecYes8nhs4DSSFS3UXFDnXMNqPnMQGOqUBu1gnDTBw80YHdQ1%2F7k%2B8FwTXgJaQ16wUVs%2FltIrjgG%2FAnzXmpUnR1pPZXeX%2B5FhiQUKIq%2F8%2FXLP7HE76xNk4bBFl48wpf6ZoEQ9SdUP6UjH4T4RkTabMxIAUo83coI60NINjPFiU%2Fvq6sCJvA0rwv30LxPf6Vogk8mzDCStXco%2FPIxxKFNNAw9qdnzO%2BSFtSyW5DmIdohIg0%2BlCMEh9u42EFPz14&X-Amz-Signature=a3ba54e50407a473bb7047b60abe17d5625299884368d31f883fda887cd9bde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=7d10ca37c97e147040da3544157c1aaa02041b0569dd77515594287abaf54b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=61b625747efb87738d9c36255a018bce1539fff33db393c898a3b256b5a403cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=bf1ee733c789ac44c4cc402cfeead083bba953b378ba732b7379e36c5b99a518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=986481a78ae6c28ab40d058e2cee61b8eb08900091e50c8e9699a6bc658798cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=225decdaada63f336fe0047fb0288765f3a06b3c479d5047dec7771853cc8496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIH3EZBF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T071651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDfcSri0xxIfUF%2BETZvTlSg88APGblauNpFh0VUZQdUxAIgUR6LilITdv0SsFlMUzfPpNFlWENp%2Bwj%2BzIeL9xMk3M8qiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOqPUHRNJYM4qdxgiyrcA1fhttOJ7Z3%2BZKp2Vq9AXFMIS9oZgYaMXnTudYg4%2F2TPuC8JTAg5ZV8YfAaRuxNDN3EXght2l0GqOB5SP21qVpBpXB4lEZi4HfwGXb6hqgVIAuhPf9jkqsmsxE%2BDh4nYonzAspiJEMZn3XafTUGHa1j4zJw6x3rC6DnDjbhtOYKtaLPiMKPHY8NoWD6GCEH40g2adDJn3UuVIsi4SIY7TDq2KSWvqQVhuqwQynnk93yx6biFUQzpuh2b%2F9OIgg%2BUCNyRxLC8aXBK7W%2FrwSuk3Nd2gzgKfGYN1tCX21pYa%2FN2jY8a7%2Bsi1aYw2luJ9eRl2mfgQhgq5gHNG3HvakCV%2B876GnQYXZ3P1igdrWr0UAGPbzuyNCFIdb4Rc%2BXRtBMKT9vgMIuj8hzJ6OWa6uXkjlMKJ%2Bg0Uyi2eLrEFMJD9zze1jE%2FK3pgIhsOrowxxrdzFQ2wqBUqHCu89jRWMHx6P88kGop76C9oBOBkWHDAbs0rapG%2FVCEiA0wfBRzKF8edVCK6hDh%2FJPgwhDlzCcdA78raWLTFMRoyixe2gIeomEm8%2BA4vN0vZjSSQl1HXBstOY%2FEtzOhpaWZad0CvLKjsp3FwpEuABCBl69LimfeaoolfSS0mXqEFYgZrGvuSMOHGnMQGOqUBkZID705nBGARDbV%2BMPz4dJK6GeZOxXk%2Fnfv%2F0xaqlgK%2FVjRhOXhyB7FkZDtgUuKGUnHgmqtzOCPSzMt%2FydObOMoynduX%2BWeQ3VxiKoU%2FU%2BpC18zRg0oLlFJjCQ6GP9DhDcqymOHhHfr%2FMQuGdeM5%2BWgQ262z3AYKlFujPVuKY6mB9knHnA0Wr%2BKsVn7J5wsQgg90BCusexKg2KDaxR4ip38pW%2BHP&X-Amz-Signature=85689fb6532d082228724fc3176d43dabfef93a2537a5c88c5bdf7a19f3493d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
