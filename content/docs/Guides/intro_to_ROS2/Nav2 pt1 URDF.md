---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T07:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T07:27:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=c89ba3b23f3365e08232e6074851740e404c3bd4518d5142fb7f97c4a3ed1559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=2ec3653034524c029d78719c4c0b35e9d5f1c49fb3d5328859f922bdd9c99c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=a735706aac9f6c60f35f9b43fe7554716c67e91d61ae89ee6e3bb34464df8120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=f4fa6e9c5b6c5095a976ead7a88ecd66dcd07fb882c3c2a0f6d0c6784889a491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=0a70552d07eb8afabd3ec356f6f94d5e95066b53d9006d6e40233a8fa68821a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=1c94d92972cca5f2e505a0d42d106fa986e363cd0936593b76d9929c4cb294a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=5e3460ebf5627b953fd5ff1e54b27e8b0781eb5da7979cec6c7968f8e7b6877a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=a01b57f6af66b321070a8f9bffd0f77018453d0f4d114c7409c613ada0e9b0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=ee16c9aea56a93f757da25c628840ce034f904b174076d41bf01d6353e4b0fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=182fa63e5d97ebb92a4f612ab8ab972d0abe7cd89ccd54c64a46ec393fb24c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGPLAPAQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6Jz39nwW0RIXh83%2BDm48N7hSjKNXMJ59I%2BQ7t8AWASAiAp5pd%2FmhgXLCxpMYCw9%2BxSlI%2FuqQ2FkcK5xDnSQZEyBCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMdNqX0dMQFU9Vpw47KtwDzAYhdP9u0DwNjLZVMN8UfDn6%2FXSFLt%2BsLyD2tBX4wmzm2iOkXZu%2BZ%2BOQkxQEeDceQLljX%2BIPlPFVC2oYo8dVat%2FwEXi8%2FAzHEKlylK1%2BbC%2F0m4QNkOUp2R1OPZhdNym2Y3pF7uBlG5JZ1NpLTomlH0jCnJCIbcV73R9Y7Qkue5dewmmiBWHdcEk2EugKkebkpF2ZzCADOs8GjgXDZEmoxPMH2dd6GS%2BzC1xx0HhQEonmHmVvmXSEp33qzCz2wQzNE3qFmkUdImUWEbMAUPlJsS7%2FJVw514CBFvmYAsTM54QiFjwY44kmOGAZBemTr3B%2FQONF5%2F5XtBl7w43p5nFzAnFph3ZLe6laUFjx8olOR30tGnR%2Bm3Zb8iynRIGX1ldkmxs%2FIKMWAt5UT%2FhtuZydR%2F5blSKFmpdL2T1GGFeUswEEGqDhXRoAQARHiM379BSDNHNyTOlSnwjN7%2FMyZOvHcaqFEcB00SQEP6qvBRF88iL9qg1r2%2FJXEl9pdQzYiEYj%2FaatyGAeYBRbhvbm60s5Ac4p%2BUsjEwx9d1ugAfsaGT8RFKe6Om%2B1X9eThyt1CkaQH8U6ksWpVX%2FvWnHE7W%2BFDY1odUTuZELUGyEIc%2BQC2gh8iBWJMxFPyQC9I%2BIw8%2B%2B2xAY6pgEbxAukAenHofgDgdf%2FMEhFdv8D5aMCXxKM57CB2EUafihOPAth2cFXG2Vk2S%2B8StRp%2FlKOOWdtPgFFu2un1iDBJiCcznXBc1AFG%2BZOW0DlBEDLxRQkubnpdIRrRpVl4nfohZZ0Mqz0kvqzp2Z%2BeOWG7YVlDjoydwFBFguHYA2AxwMiuBs%2BmfIyk9AMNH01RxyoOi5l2rka5VwV%2BWPXk1Zioh8C2t6p&X-Amz-Signature=77056eea4fbec022f1d8cb61bfe413a8ad95a505b3530492fdede9d4418bc3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B6S45BO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvDjasVparcwTdwQbCbdnKS3td%2B7T5oOvSvGS3VBXHSAiB4RDqT1lR%2FBsIcJDA%2Bd1Rtcrql03UBcg7tjfQ6wlfh1yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMPUsKeNI95ecDlffAKtwDUua1uWaa%2Fgub2F4BPMt%2BHBp7M1a0pVFHhJmj4aKtK%2FNjlH6Yq8o5fBqqdwyYY5P3SknUVR2mQ2%2Fl67I%2BRERvtWkKBED%2FyoPRolo8I1YHETrQMc4jYHPjxKIPOWZf1iG5vnnq419nvqipecHIE1MrgpzJMmnWt1N5hbQl5tT0KFO9R4MPIKK4M%2BGZio3vm74f1IWpCtgIR07B6rt4d%2Bz0jz4Qt6u7v%2BmE%2BSHwLqcTZvtCapAjCSSGSSmw9ILVNxEuq04BP%2FZWcjysb5wLZv93TappuLupa%2FYRMifsAsgEm5m1n%2FgslVBnQVvcKIkEmbk0zaL8ZvQlLehVUIf5L%2FGe3wfwnN1yzIDtmL9BY9gvr5DInCQEAxKdwc4gXiq1YZ2Huejck0wclxaei3dqFKNseewSDmcXuA9k%2F8HV8Xap1LliwVEj14aKEVjBdnDOUSgLfNjD%2FfKIXg8339ofPE0oUOGABVFvHgyT0qIBTeWBBYOdtj6kFA0Vf6ivZN%2F%2FrzTq2yZaYAOb4OnXv76BzaDNPtIfMkutOspgTG2pWXIkLn%2Fvidy0tz9nhv9gt9btC7ad2rSN9z2ovVMw190a8Hxi1Fct%2Fzk174KeiVE4Aj7%2BfoytJyOs2RusR9avlQcwkvC2xAY6pgGwHE1K%2BOPzMMRhxh1p1Qn8O3TNKMPirGlvVbOnLVqR3I89aLWRe3DmkOenhmBKJyuAkuzSk4zsHvxWwRqNH7XJ8iNMkfru9El47zMkkeEurZdG7hmgxAUYAkSVfbtDy7RQmpQRdewEAjzdG9G4T68wWwx%2F%2FbKftay26h13ofesR53AlSiI7yK%2FOyb2kNbQJFC4lSKR%2FuQRp1nxzrJxJZcXexOZtRMK&X-Amz-Signature=0edefc2901dcaebd499532a9eb6bdea6988b3b8dbec6235319cfc2af6b3d547c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZH775QH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs9VqbCpL0FhUPmKjZKrJa1oztsIuR%2BVpYQ3Ldeo6l0QIhAIf4EPX2Khl1eEgAt6UJoGLc9EPF9u%2Fx81BdWmK%2FMx3pKv8DCBAQABoMNjM3NDIzMTgzODA1Igx7lRoG2C0Wx9wswsEq3ANOHQfgTrE8ZnuRR3U97vc8oOb3tVRlE8Tfl3IQoiTo0SkXee3Qk0xVm8fAJdSh3IH%2BRvkqv7EfSbJsESm9Xmwhhsv%2FMGQsjzacypYgA1Yu75hd%2BeKGpyZ6PdTQUvtl%2FQXBpJ%2FFqmd3n4KNRCIHUz%2Bppu2P74eGtusyh35oXqnoBGJbRVn6RJp8s6GDgf925u0I8izZVMo7n2Cwq%2BiQK1WEGvHkszK7BxwEC85fUEGciq4%2BiiloRVY3HYLJEjwBciGTA5Y%2FzofQdzX71m2pkr3sUCxJs66L3RLr1Maiss8mBuSXlhoE%2BjDXi%2BULs6oZkMnXoleUshfTryjo2AcyV%2FTkCeHUcsF%2FPCORXFu%2BEZb1Py5SBUMvvduZp6igNvQrOWEwL8ladqI%2F2JtpeClEUOttqBtDHei1vJD6HhhOs6%2FeFSHKXbclbRD91tMFvTQMzq5f9Dr4f6E1uIAWoapTXRmGjLMcAP2F5uAwjhSV1rQe50LVVlMcea0aGO8VYPZ%2FCJhiU6hlV05ZlqXmviSPR6ifmEvCUXa3Yw%2BAW6Pjy9qpgsqwty14lKekyTKm547YmyttaWqaPEpmgBUudl00MQFClK%2F1qxvrIjnkWyx9yFvNPbbMJfOvTQQiMdVdlTD577bEBjqkAV4wTEp9AvNwfGYQBFTGLNMP%2FtysBX144jXUPEwS0tZr2rsHz0UfGwKMwVVt%2Fg6HcYM7OKpXjpaz2eExBBPe5wB6gF4c8YlbFC6a%2FYB0zz2yrrC8AktSZCFA%2Bs0oRobRSBghpNYrgIB%2FIAWyZc2THNoGCfopJmPlx9afudgab93ib%2F4bcoxcYmRs%2F6fxDjox0e1wyquBk6w7hE%2FNLux4tOn9Rwxz&X-Amz-Signature=e3d61f41d8fc3cb9043e1a63d2ef47e1a866438063387cad63abfbd9445d3213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=b010f86ed4eddba9a7531722b34f13dcca2ba8720d72ef857c161b1956bc0ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSYNL2AG%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2pH%2Fo586fgfoGEy%2B9DNxRPgeOV1YnjPKGeV%2Bx%2BVbrEQIhAIpjz3PJrLKasF9jF1881sriqCoxNMmtViY8niZbC0S7Kv8DCBAQABoMNjM3NDIzMTgzODA1IgwbZSJqzNt1vUFok3Eq3AMTlOEMBgbhQVG6SU1E2t4iF5x9zENU3%2BqkqWSc5EzgqfSdvffIRxizSEZtD3SbC2n4sPk3H9AUwyojQ6Jq7ePph9ZXMTMW0yctHuQFUH17n8S%2F8DiiKaST5eIL7ZzzU%2FapIin0xehVNg6aivNSwhwIw7pYE9wEoGOUHZ%2FKmK4Y31ehIqK6bVLMqFtwaprfjEAJ5SLQdJlCINYo9qdQE2gHbSJY67KyzaPmSTftBy14r1if9MGfgnQ9%2FnJUJEXGHaYxPMM%2FXfRYOPEOiSKmrPiMsM3%2FLZO7NHfMi4UQE0g6dUY%2FIEvKvnjA2ZycMwjCK3PjTVSrK4lxHQdGIY8pLQ6I1ao%2FYFx947b3eoq8XKEHLrkqLI6RmkuHpwu7Sd7nEPo1W4mIzjOc7EwO4tDJVz1N9i%2BeKqfTQFdOD2rV9polIk74hwCql5U2nZbO1e9Fc%2Fx%2BaH%2Ff12Cxk3z%2FU5C0w955mW0MOgOMz6iKDlTu%2BUgOOFZQ0obIT%2Fxei12PivwTcMv6qCRJPmiSEv9gzqtCqr5y83HWjqh6Tdjio9%2FgBVbcMfYMj6tZEnOUIusflfAngUu6QOdGzNNRnp5tQE%2BpmpGNt%2B5QZXT4MTfBjOTyQHd11tYksFAWbZsIDp9UYDCL8LbEBjqkAdeGCjTqT4GeRsM4%2BPHe445dDsVnrT2hLhbedCDeyBG8mH2FT2HKGEFl%2BFKZztDPOUWUjrkTBZ0ibfQQhwt6Ethgy05wcISDqKgf0r9U5wXMQr6snasy35CN6V6KhdIE9a05DXqAcUAWU6B9gZ3W4tTxi4V8Qp1GAcAymtI0BkvYb20peIT1yWa1fpZL3rAfgJ6Wr5cVsCWcQ6%2Bicw3rENq%2F%2F38G&X-Amz-Signature=4a57f3391005df5baf3be239268c1040170734fa01b2ec26da9b948e36ece8e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=66383252eff1ac3e3c64010c2495a555cb18fe167962a0d5aca5e905b288c53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGHWJFW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2excKW4naAg82po4NVje37wlaqBEwPhwvHdx9pPTjMAiEA8sqdh%2FtieOkc4ubWd7f5eavuOg3TlKc65FTUh0gfQNAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDOUR8DsB75h7C7YG%2ByrcA8wqR%2FY64UImQPBBcQ3KA8f4KksP%2BYUg3Cv9yP9yxAiiXvWwhgPujI92HkofHGS4XcOjPjo3D83e2MvaW3Rw3Xd85YJZH0SgmmmlzY%2FnhhHRMNT7IdbUirL%2FlMCi0kxuykJlzTEnCq7XMpRC79khU%2BbHkjnYSiuXf8MLPb5TrOGTYVsokOqR94XNS%2F7Fp2aZ94RtpXf3yZ3xoO%2BOQvYCv%2FuQx7YH8%2BDxN%2BV%2FrjGcNvbFlrmq%2BJ1QcNnwXTPA59Ak9I5UErzlHWzV8X1W3PFRyTGS7vhZoPuyyzxsio9hAVwhRhX2jyIXdieF%2FQiW0U3yUGHCY77uUeEvDSdQXIAjJWGQZJL%2FTy8I7Z1jZqs2K2kwH%2FiFJmg4BNCll%2BIDfMMSl8o8xgObFwfLxl%2Ff9Qk0ZpTFRcn5FdKW3CCmF1%2BzbWO9%2Bh3hleUzxPKtA8P3vtWJH%2FUijoqIXT46hd9U2GMh7dtSGmlC6g%2Fel2hUYpPYjE5ukXvqNuqTnwW%2F1a%2Fy8oUyL%2BGO1xr%2B19I5TIRaPADLYCED4QMNNse5UvW9qmdzy6QJzPZHiQXzZJwXpBcegZ1%2BUgr9JdXPjSj4K%2BoVci23Zgwv9wzaSq1w8BeztOygN27aBBCdFGqBWaydienyMLrwtsQGOqUB6qYRp29ZoeM4nhKYh7aiWNctGgZS44iqMEyLQ5mUBXHT9rxJbZK5wJdvoYuvjxU3hDlDc6ILrUQUTWPNcnM24EZKRX9MgLyH%2Bhekf8%2BVRXa39BiThL%2F5lqAXfXykH0o%2Bh2OMsDjKEuWLu2ETcfDlekftztU%2Bx91oQF8px3q7Q7UteeGGvY%2FjnQBm39TnXo8Ai%2B3%2BSXpEuQ5USss6bpnd0INLoK8x&X-Amz-Signature=f2c45658c64739df5a347c7a194edb217093fb4805abc308c18bdde2f34c0892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=294f5a1520d7a2ce4bbe2f5213af34306ac417f83d02316fc61dd6536acc872d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SCS37DS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHDSRzWnQgJYT9qvPUgeF5fVuLodPRdBCfXonhLUIdd6AiBa5j9bRl%2FwIrrKYt73%2FJni%2FStvfiCuiy7vQsCHbkp1pir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMuse4TL6q3No70WFoKtwDOip6TSEhQxK7SV8W3WlBfDQM3HAmvvJ09aZDekshgTxiXcDyCita1TcsBL94HTT35KJMhjH16IYEsywURc0OGOsYua5%2FCh8aGvSrtzp76ngGo0hLRiH31MQLVHpTKgS%2FmJ1tvWu5kdJAmwIelJKJ043zOOj%2F9td8nyXFIPC3cj6PkrSEJ57cE%2BY7h37AD%2BYIPYK92h%2BSQNU2AQHP%2Bh%2FkX0nPOCyIsvEbP8feSw0qZzQR4QZwFmciPElclgugL3x1J4mrKKaFaID7ByxVAq7pyNblkuVU6%2FfvErSixj6O5Lhy9k7ilS2X6X39zBM%2FNqU%2FLg05zRpVYkwMTKi5t%2Bk7kaZO9uoiRE5VKOA%2F%2FPKiN0BsPVCA3LjI8VWaHSNoZvQV6kWq%2FjrQgEAY%2BNtwhpRV8B3OtmO1iy6zai2NHRCFtuHQMO1DsfnIaX0ANoO9tNo%2FaKNl7gDag34HZXAOtlZY532vuqLkGKG0Q4wS2tLkhn2EgMIpxgFKiwvmkIFFOV8Ht9Lqu%2BmUse%2BDsZGw29vmwQ5DLS7Oh%2Bmxw5k1NM0YbBPjVxPmdQRHkVI%2BbBS5J4OtdPPgllRKdGbU2YaXCTcLdu57p7I1oCtZjus8svDf9N7ALz8%2FJBAUzeHk7Hwwh%2FC2xAY6pgH0MGQuvMgLAKBZAR%2BUMmBMsPENgxJFq2sJZJ8L%2BwGQBVIvHGIi1YhkI4RE97hQyxAfFqDeZDCnHbDUdJyi4JctrvEXfS5kaNAEeDaylan6902PF0IkY7jBZZ0aDe1S4JtWC6cpjkWgmAFt7SrbVUFrO30ZOjrLjI9PQII0SBFci0wO8DYiqFu%2Bt%2BDveifcUCjjIi7wCdHJmtZ8hNUVe5r9kmu5o67k&X-Amz-Signature=8511face6e57698dcaf25091fcf20f39383b810a794b9301b5738ca0ab1d447b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=c071da8e2b5fc878a5bc64fa95371c44e273be03d4d767420e1f263eb1c045d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFVMSCA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpWdnuYCLFxJMqkldgENJihSzN3K09%2BJLzoD1DuBBMgwIhAMTlbhCUzdXVE%2BgW4UUI2wVhuAo6%2F1koYw%2B5HtEM%2F802Kv8DCBAQABoMNjM3NDIzMTgzODA1Igx1yB2LELA0fC7jWnwq3APdz3UiyYvznRCcCtaUm3XXIEKWOQl7J9agwrgABglXpYK7Sz2RFEjPixqzBmu9HBo5MFMwyLMtrQjzkbpRQwpragC9bOsXICfootOLXbxZ8fW2Zq5d4jIjZOqWMCd19lJSCQpy4FiBXUw7sVX3HxckoxXW3FqDNXk1m6QRXkkiN%2BaaGAcBZA8aRytTzjaxPmuICZkueHqQHd1pWaW4PlOEYPyM2WNudv2oB%2BGyHzGVKYsFcCvF1B%2F1hHZlpWxMdf%2FvXoNELW7gS7xmLixF%2FiIu10I65J%2F0PAt%2FlOOge11MTOxXs2cqtQwrimFSCQ%2Bl7LcnAl82vMNxIRIIgqrpe%2Fc9qR1kOUvmAbX2Ppu89lWtVcyQnLLE27%2FRETYHmqZK6AKMDPTrTedz%2BVkwmMgdKZHtvvkfaZN4MivKURX60rXX0YKngR5Nj9LJMOT3usEoGj2glJE0AhDf2zsyKA%2FgNyJcWfCk9L4mGWSP2b1e1rUH48C9EIXEenjnDEUzb%2B4UrtJEA5Kych32AkJKxFPtgqkXBphIMkT3HuJhLnifktF4KUjv4pPng7PDULrj4F%2BDMZixSeYUtVr3jVtBrjdj2ob%2Bc0Ta209v1fCrOlD278d8clo2uZBjhnucga9Q%2BDCQ8LbEBjqkAa%2Bcarko%2BqX2zEVGj0Jj2DeeXIyF%2Fh5maOzO5h29bLkpIL89Y3P2%2B7dmZBJz3KrBs88eJY8UQ4uRiYkGChP%2FtuYxJ%2Brm9dgBkLbJvXgiH0XPaYhIi4zUqkgiESOZ%2BbjomM2a2QA9RUhEQqj9PNFSbjFi2gIDk41EdMRrvegpjPKtwEe9hRYkqwhtJWHzGYrwJh0pv5VmbUuJAk0qzxK7ZU7fnu1G&X-Amz-Signature=ccb72243b59bfe24c7fc99f038aae37f258c236c95f05ca121199b461d06cbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW4GCBT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu1f1sBV7A9zRrZkQppXob8U8TDB%2FhZ9d%2BzYbd8vb5TAiEAmcGkeJtusIHA%2BVOXxBbaZYH%2BloqhOUeXuTHPWypIy10q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFpMZcKjzFLxUvLoyCrcA9Ndi9xJxwsKbUbRBAA88YvNuZxNzVLD5%2Fm23NEkI4IuGEetKtJdaC%2FcIrsynbldp6t6et1ImKjU5FikfXPE6psOjKwyjPHBp4ARyrBd4zSyra8zZg7ZemTBTcpblH2JbL2y%2FZ35VU0jmOoJE%2B%2F4BlMfQxlr1cFIbi%2B0WhC85oaGv5nkZqZ1bNnH%2F3U0Y%2BWnCfSF0VYAZSDrUe740eMT6v7BbXmfHNLrXmbyKrWgzBT%2FA0dQkBrS63Z%2BQr7FkWO8DOrtfQbr7lpWoW30MoG%2BYpyGwfifyeLje%2Bw8MVLzT%2FFEqTEp%2BXXCISHvCgzX5R7ONziqbXRUVoPrri2OCDadGrJmtp4oN3KZPJIacJkC4fn0q0Va2nN%2F%2FUZL0hq9DW2VHtsgciJUCzFVlx7QbAq7N7K4EFJ4ZnS3etgwt14Y8MHOoWBF58rFPyjVGGMqKcTPL3xos77hDUB%2Fy1Q%2BEdSZhQX9skik1SaV4IKbhQY10QbwswfNZEpAK6SlcdJYQO8w5nrAOkoLzK5u%2F%2BnRKXLkae8esZOfClXYYclO7Kxt8GzgFRqEM8YmWOukoC%2FKc4KRw2dSw8ztJ6KfyDGH2c4upMEnw%2BwrwyESkjHIePaTGJGcLKxMYU5ZrYJSP%2FzzMMbvtsQGOqUBp9y4ZgBxyLppkdZ2Zzv0UgtTtX%2FveiCp3UXDWhL9elzI4P%2B6mv9qsCjyQ3ahZdl3OEAogFpP%2FETKnD3rBtuO7PIeMVCsrQeI5Rs89L0JZwqO14MpnaMJrsxQ6Iml0Sp9N9HVuJPDmOBx2YnnNnPZyeTE2Pvcn1OyJ8VBFle6EU7hQpDlxCfz2NMaMwsRXGl9R1KVv3QJ0GKGjkbTQFBEi96O2t1H&X-Amz-Signature=db5a44d10ed1c101aa8ac21a778f6495317d7cfc6a3fba699c400dfe69f38b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDUZ6THA%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJia4bCbVFr9AhI%2FMBnCgG9B06BgxHQ8QfVhGjpEFQQIgJhzhL61DLgY0QIFiOYUMaty5SrvCcNkWDGMK7eM1T3Yq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAijy%2BJ9ePPEGhFqrircAxz2WRKk1EIkV9iCijNFjTDUXBnOXW%2FANuIANGXnKDen3rODghgVYHfFu2KQEDiXnvGrmv03B%2Bst%2ByHu9GappPVbuQ849lorgaUTTWNt8h%2FTDF%2FuhKSxAtkDhmurvKjOraT2rzgtiyVysz7XzclIA3aRf3WSYmUNJBKHGSHfu6RpQmK0uUOQ5mRu5NXCj9ILhNHc0xkA2ldtl1dEpMTagXoyDr4Ln25zq0IZEs8sCZ8WVKAPCGzeLOEwlsnS1HrBV2Yuj%2FIDMhOI8zeE1eXXq5XLJ9gu5CgnV4strdoFkw6bOxY2Xu9Rpt1wF2Gt2yEfus8I5q0rdxXKSUYl0IBojxBFFkrUchISGjyEhYkNF22ZE4jpVs62UWjDq9wnCKsLO%2FxGg5YEVnvrvzrXmnmUPC2qt7ZoIWlj9atBHlDolExV0gWjrB%2BQJ7c76kciqPWm%2Fh1gLZCybNJF%2FfqAmD%2B1OEy3Oas1hyIzOhBAJwHRad3j4PAbOWFSP%2B9I6tNCxX5CZaCaOBh8bYcEbc5%2BQlSsChjyRLTLkEuUFF47ZHe9XbWKJd%2BIDKQJbuqUW%2BBSxqyzRmd4Jn2Oe4MTnL1tzBpcLKeZS2T0MAo4gihWTZgYOj2QajCj3zay9S50KMsPMJ7wtsQGOqUBORcQCwSbAU%2FtuBjyZ2hADAXpyNUFv0BxHNsF6Z%2Ff4ZvvmHl%2FkKNe42XO7DFpcRR5wR00fC6h1Ka0ayrH5ojpCb3krbAWNyhpHdaTcYAFbHgaf5xczvanlF5FIZfyM82nFM5ktLntcfd3aBosVddxQ2fEnZaKNQbukMSYunrzJeaNa6E9TNq4x%2B2AlABw8WrO2pyeOPtngEOLz0Q11mYBlts4K7%2F1&X-Amz-Signature=18084377a714b96bb7823d6b31537fa2c642658cf5bda4433e9750c48b39b704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVWA4M2U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0niuxFg7W78q98CHuKSbU6UiJWBYLmq%2Bx0QrEMuIEkAIgKCZhawGEhNOG8Ae3fqvbatTPIv1adBPYg1Aec7HgQ4Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDE%2F8LUd1UUPPT4CASircA%2F9IBTJsWsOk6vVu1eBGACXD%2F%2BRg%2F6mAj8Qh3q2F66tvStu6T66IQtcBEmxi0dI4kbb%2FuVxA5CT6bE7RgGreCbUYdx1hLixSulIJ1vmjB1a9A3TPdXQCCW1D%2F08fCtjUK810OCZIqqnMfjyysQtjAoDHpZYkSK5LLM1NKvinDDgJwKEjTGBTyYuYfN%2FoypRc2ebQ4wM8VaHIYokjLmXa7ddfHVldeoX28fRax3WaXNl6FVI4li9B%2FM0FLvM6jtMYesw%2BR2%2F%2F9XGU0ri%2FWknVdu42Z%2FVqHdemTAduyoBNlP0Yb5%2FIxOyaePRaQsW7AmkoS80byD%2FVLn8ewKkQJlPnhD%2BCVIkHBfeWewCtcJia9DVE6XVoA5TDENCQd61FsPeuaZ6iHRlsD8ABQcaQV6ojuMMDcJ2OairvAoeLfCfH67GHFmvtMwilm%2FRUUB9z9Qvf1QoPCMauiYi0%2FFTrbvXYbqKpC01LIu0W3X3xa6dnESiVS5xvLym695zJtaqW0QVYyeuSLlf0PFo1wp4hUXPnqEsNqMj7ue6ElALdkU3MGsxczi8Y6%2FWEcDJ8Nvew7KuDGVCQUUDZHYJqSpLQ4u4R4UeXtqqiyraQJBJglrYLLRqq23wjjX4efU0DEXq2MKTwtsQGOqUBVqKKeb4oYomFUMNoMrtcm2oogp0%2Fa%2FRgWGWIJuqe0k9RFZAGUwYFGIaWFmZDIloe0y%2B6kmuO6AAPIga8NgbVrvAX0TY11WAA9fZsA2VAO4G41Zbt8D5Psw916MsgXI%2Fxj7EV3igzmnQ%2BuMvax7R64Y%2BIfHNmG62y56Xjlk%2BipvhvZAmX3oXWq8F2%2B3SLL3ZM2acS9QA%2BnVwTFdIm%2FmPhBV2wCkM7&X-Amz-Signature=565289bc68790f32bd53623fc37eb78bd364b9fdde7eef20800c5de095ff388f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB76A6LF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlnb%2B86o0ut9IUudrvHDgxM0OtneFnaUo1ER%2FXt0WcCAiA1WbJ6Gb940ncMUwGV5Lp0lLzE5nsGJuJdkkmJtM4%2FUyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMulj%2BC4mmuixoKZzfKtwDklVzNSbRHouPzuB4rhTHAWuquZk%2FoawE%2BjWCreI5Vg9ZQguMb4aZGIG2xmUqr20mmaDmjAp2v%2Fk1ziwgDzFLC6A2ReZ2%2FKM4CwfFNU2z5USfzmHMFg%2BYg%2Bdw%2FOANvNmFQx28%2B%2B4WS65ZYx0WaW7EKBFStAC%2FA24qLTLjOtnYSYwiQVOO7OUALdEi6N6twrTtvgLz4kpGKvbr%2Bemhi5Li5E5wz9HJDe6UmncmK7LuN5vpF5rlIzrQEHj%2FczjZ%2F7mI7i2peMQHJ3aEmqumUJ4acrZ9nQ1P2GhtooHAPH6a1KHEUy45ZW1FrC0uGjOmx36Pkq3Xt5XUNPIi4Jxv9eTTmBudVbEb6185QC%2BZA1gAEmTAEwz06ylaxHKpBnuB5Gtq%2FflybAwFdnMunq5zcADuEzK2SrIY5uJxjPlCP2GzNp4h%2BW%2BfWAuZRn7LvaoZn6TrNkkbuKIW%2FqHkZH%2BSZjVHMRlDB0LyzSLUFzFpWTH%2Bdb%2FMRsDua6YQ5OccD04w%2BEPP2rMDSuE0MEUE%2Fnr2v0XgdyUfIjCYJ%2FFvWsITmBL5G8uvzmJlKmAf1blADDbZyGNo09rKaaHnDhn2LCREQpw%2F4xQZ9B49eU13aBhEg6F8GvcA1lZxlQJ9oDai2gowk%2FC2xAY6pgG7ovTsIZfRAXpcQVJ4bbbdz1GDYt1LXdk9y0wHXYpFn8BfowpH1jBXAWN6AYBTprOaUqE288Smc0C7WLL6K4lvAKK8N8lS7WMqdl0aQ05VeD5Rfa39d%2BSAjAr5IWAD93AgRH7raJrMvbe5s%2B1q0piRHfdkoCRxDF39%2FYvNUHnD2xqtoGL%2BxpZ2PyzWIGbCUbKG0VpYOM6FRIUUcWioZGdfi3nAU2Df&X-Amz-Signature=38cec7f0a4da98300baa31847590a37835356e3734e587d98ffbec24f7b74676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=a78244cc0a342be9c9ba6c6b7b9b599f9fb73dbad16429f4ebed1bc581736625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466433ZA6GR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGHF%2FE%2BcfNv%2BFjWQUf5%2F6MPmc40ftaqpbfmBosUt6DdQIgUndh4WTiN5d6kkv8d2INApXy7bRHAYWoD5lVigBoYrEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCm5ofjM%2BtAWzDFdAyrcA7ZiRSkjY7FrQTVMOdrXfR8b5kPageAeRBJLGGNsBHggQmZ646U4ADiCpfhxpWA4LWUmpszjPOyxyLYkUDTn%2F9XCrkn1mGAZGxItQ4RM4wyygUEdA6o4LVW7jtivc5gbIthVuE5EFwxb2VTHNREmoQgrijz5eCSVwqBDP%2BsGhNF6QK2Ep0Jbw5b3tajO4jqH8FQzl7xd9ZzYKQNjJu%2FqLEa%2Fye%2BQS%2FHHLr5csYBmYlnC490ecX0sSSLHZZdXbf1G8aYNOMpLRBUKUMTmRCaNkl9uDdKIRiO%2FtJivMedqA7L1yVj%2F9l%2B4ecOGTWHDL4CnPVu4Q2%2B4AbE9rPeX%2BiVaJzv%2FING2ydVOofKJaINGO1%2BzV%2Bsmnn0hSIpjzFtG6M11MqQPF4x%2FXv%2B48TCHri7zkbMu4nPr8YfF866qxdwXJPx3yJZ1MnYtUl8rBLO3Mf6wvU%2F%2FIGGHSdLgSoNT7lI3R0sf6d2%2BcOwZfGC9hZ9Ufx3TPmIQT6bOemduQUW6tYB3z7yaIXnwP5IgdCaPvf9OmbcNCo8l0aygT9%2F%2FTskZaWf%2FVEzTAToMiLAc97QkKUIgLZirr5BMqIEkVoXhlC9acx52vcKwV98Y21Jfbd0ITKNZoj8vuH%2FCgZ7r3UEWMMzvtsQGOqUBGDLh2KfwuTlwjjls2CfKBHX6AiDP8B7anW2COayzM6DwwWopx63wkW4mUfn6slnJ0SvtSP2WRrFRekkYXvm8uZub46H5tecipjEhU0SjEyNPENR2sFDtLZBucMLcUNTxiuHPFpQ%2FstFkHMpkijRXGOJ7UrQKiXsGj%2FhM%2B8VfQXnEZtsEPlD5fVApmcH9C4HNQMo6HlqZIY0nlPgjmEtCR%2B2wSEjB&X-Amz-Signature=215a45cc9e6ba7c107882af3c6fada413a1d58897e5014e55f5569da5ed4d616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=24e4d4dd4b14266cf8f911ec8b36de1cf9fe84d0c55986889cc95f939ca15e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=344ff485599cab29a540f1b80a90b6c508a4093d7e5d0b6d0f9a39a78fa08481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=0f1006b458c1e420839093bcc8207f9638296c6c2f7008ca467a4928f663716b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=2b578124ca8b8f76ae783f1fb79f711cadf1be892478a0a036bf6b98dd6ab60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=5e95e106bd7c8c63d051422e8f3e0c7c2553276335b78d2784985a6fd5448db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=bb556747ce80a57861f87cd46acb2e9d5a618269c119e2e3afa1daeaa6439d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=1a27c863ebdeaae6cab5cf3b62db56a7806882bf44a676943605fa91076d6d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=0507b84c159a33accc44528266f8eb1f6d37c9342af38073019d4ad108d1da1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=5727da4724f0dae92c1b9b7f04341f6266fbb04bf635d53e94b2684f27cce6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZOF7AH%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIefnakNsX9twS3Ru%2FrEtopLEkb65mxsr8oMKdmQQzDQIhAOfhUk48pXb3fKrQr48TR9oCOGCv0uoTaiJ62a3rzSDyKv8DCBAQABoMNjM3NDIzMTgzODA1Igxl4plY1bivgFZcxIEq3ANufR1dsIu4kbr3hGe11cufTzltYQvZOl0sQvZcOBQXf8K3VPL4PWSp6mYVcba8pzlqi%2F9Dt8pedUAbH0TLJEZhWiylh6ae%2B%2B%2B2JFvigit2v34PQjL%2FcGpFSRXjZ3gsOlrmHIpSt24NEYOTZj3fnURl9MjIzNI5aZ313TPCqKLLNj8hm1%2BiOG5KzjHx9XWMaPABSqOPYijwUDN%2B9sW%2FsjbLzXfnm8VKWMszFb4c3yHs8Jn1YfdYqIS9kg7MWQTBHmtLQJ4jGI4Qji1mrbfcYSnzryv2%2BlZ84Mp9zvFnqNMYn7wtFd%2FfTIfIoDrv1CxsHDkCe9JdCPXhfzRgsVPG2RDJGEsenb5YR%2F7e61ZgSh7XrUKaLU2rGzSTG1hc4YUCBQ%2BsnvV52qA9vYgyHvVT6796smR9BQKUPYUvTyKaGIe1jCzmw30NYWhX3iEBKPZjhqe76iBg%2FYtPYQ6xkW0jwdMgbjs9uI8sjXcCoG9DA0xFu9sTZsRTb42rrHVuPtyEGNbfyxeWRVSEy3TmNnRqdPlVv78QADS%2BYN%2BdrV4tSwC8Nn0LcgEWBmC%2FUxYwarmWtFu8ECliBQLkekw%2BJ%2BQjZ%2Be0tLfaS8jAx2eh0xGbCEY0xK0KMMZA93tSjhh9zjC28LbEBjqkAXQ6gpjN6rlyRPGLXa6O%2FqznrQHPGZyOJR1lw9x6nf%2FDhT8jOVg1ii15Cz3kZcY%2FJYS6e2aRJKoqkESSq1YoA0vwaEmfQvpJ51hnfqMEr2fP%2Fq8UpN6b62%2F3EZoPOfsVbCIeV3LM2cVfyxwXhFHDdzS7i5VL7iZRGKA2KPXS9DXpHvUVjSB5TXGCWMkKDo%2BCeW5720VtgtiKR3K65Zjq%2FzoDpvV8&X-Amz-Signature=0db8899987553077a4e9c7de6f4b0e0209680d403b0ae2954e43c65659d797df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
