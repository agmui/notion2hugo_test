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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=116c9b812298a21bd317a5cd89ec2dd1e5ea21f3ee4cd2b7c128a4e820417417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=da72cdbbd9e2b872e766a9f1858ba74be35c178208ac62fc073ad034ae5ef209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=c33e5bb943d73a418018ac13d36ae5e017b6e048353312eded069f9f6bc11b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=80ea1faf470cf2463be4a3db8e297ad78142c28343e40efadf00dcab25bdd37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=16aa1398f82e8a4edf05f3e100ded4a59a8fca8c6afd1e2a4ccbb73e0895f9e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=d876a613c24b7799f2cc012aa285defb70f05fae74c28db3c445c17a9df01786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=059a5ff21d3b8dcd41a9fe5441f76700981ea5d9c1016aca305a2a085738d89f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=3f327a7e5a85713c38ac73d2d4ef7e484de48dc8bf52f65de7a14d1e96389f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=1c3bccbc3dd4b4d30a4e336dc6607aa7fa6895a9dd3c5b305f844533778813b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=21f2cf59b3ca0e89a9ade22664215514062c53e5ed3acb864718e375996ff46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNQ6OL5I%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD40t80xAqzUmHn55vh%2FCUHNMEdnysKFNIj%2FWFuMusvjQIgC8gcQDHJsQ54AYEAeHnUvajVaxfR7DPzxWwV1w%2FfcGoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfKSsD2gHPyfAt3VSrcAxmSrL2WDR9naTrz60YdwEvdgnWDCEP09cQnQ6ZMfnH4StOr4m3F%2Fzvoj16hsMTijzuxClBFu0NsLvCs%2Fusw588ZyQ%2B6bQM2g1ccZet5TL%2FQr%2Bw08rZehi%2BUYBh%2BXiBymmdCTABHjmU3FWCd1fQUIaUgnbYeWE12rHCWTgh%2BO1MAwcawTvwHkbE%2BAmgKyrE64ZEAL82ckJmv5ynBmsL8VIUF2Xa2PGE7HwVsrFtnOiYgDsrq8RUPTwL5qQKOJxbaIodPUS%2FnIaT4W2B%2FB%2FAFserHOZ9sqdSJahMC4cURvqO8ZKH1f8JX8kkrcUCZSwCZCyTy4RbvvuCslLkqoGstzw32l18TdYIcmvnNFh8kXSP3QLkAVsKXEVOlqoYN9O4tEYW4%2BipfmdjzC8xdO2Q9JLmS%2FnFRbzozcpQjafKAftp5GSUD78GY2r%2BrgXRvcpx%2Bp%2BVSvqxw1wxy1vsUbZHo22vKoG1uLb2Iixe3lau6v0ukGKxmMehUtNr7F%2Ba1Uw%2BWAHI85DseFe8LmqUn9wG4bBhoKKVTmvTbENzW8LDXUnz3z4PJA7wR6i4Ow%2BqPdBnMfdrIe6uoxyZajYOc8P4kWGNku7kC5pRogKPNL7QEMu2hL0Y5WZ7PpzGtNqSuMNW2tdMGOqUBp2mHnX%2BTxPpIGAjuo6uRzSXQVzECeOg9ZTAtSw%2BHjrmtfrP3z3tWC0vfT4LCI8fK49kHjanbYzeY5FdvHYVVhI9vaLTcaNAEntJF1kILU7BgLsVcMI4Q%2BPdVU%2BW1Jo4pg8lP9A6IZwhDKMM7aiH%2FTrledK6I%2Br9VF7imHE159Vc5bP2aZqt44kWFpEdOGcWmwxKabigLxTkJVRitp44oYGqSBFMX&X-Amz-Signature=78abd30a13088f6cfeb5b617a40e7c1b56f46b79e1972af94e4343b468230d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIXSOPA4%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICM35ykKg0ZqzAXsVySfntUTLdbzBaaakgqj8IZaRal2AiEAilEdrNJAB6eE2%2FL294ONowkLAqSZ3iMOwEmghuGswQkqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARUEHhQSdLacbD9XyrcA8QbD1c6rkriPx5arXtQRL0jgOpDhRpKQNCSN2OYf7GaDOXtW%2BAOq6D1p6t1mR3cUrsP8WhgZzxEv%2B5mPZq5XF623bqXitKSJM%2FBUn74aCQyDWG4JSBk6SRqDayXfnx0rZX297pQpNM4TR2aPfXnpdh5x4RNXUIs6MSUMWEMmWV1EQgyQ54cCFf2c3jRFHWYA5%2Fhwpc6%2Fbzt%2Fv6Dv4f63WSLZAf0ZHVVY%2BOE%2FuocC9nH7NcG02WJD23JJm0ssTK%2FqkY1epvzO9MgHTT69H9tfF%2FvcwWrFwsBNKcoUA4D428peCvsm%2F2RyGPsJ3TzX7b57mqzm85cPgnEVQj1JpocfOu8ehvMBSI8MECzHcOEHy6%2BLSbGvTed5TaoIR78XbK%2B3ZWhuVYbsTC34gzlMgYCnGVawD3Ee1P1ulLpHXYMy5T8FGfpBV%2B9NYkmgrtXtVgtTF7f8G8hKxWHRtBkvg51exWdVe%2FOb77lij%2Blz4kMlGvfOkNGaCbHcZ70XLSO0zPplyjUsYhZK375Nx9YKLLdPCuARl4bAC9T9i16O7JxWdfZVoBMzbYyWwKCxH6qq1RgQvAtvCI3YynoTUZMOUti3ZiqbmdKLJyZgC2v%2B5QW6i086hvWmhmojLWXJay9MPW2tdMGOqUBVzBGGUErqOUocqiS4SaMtP%2FvWj9EIkEiRgO2U2D%2F%2FeX%2BiFzPD9DXWZwlKmRQzgD%2FJU8zLHut%2BDDaniPUwbHkvgUZwqjfCRWVutPyWO0Rs1%2FXQUFdCvSt%2FBQwb0uQFZ2sjRwxtDKZxaVcC0wqIdAGxtoi4RRKWrSrd%2BBNs5q7G2WFUUVrdpIrLBxvFjjeO2WD1yKZ%2BnFu8id4JNrtCZKtFO%2BpSoyv&X-Amz-Signature=79a66f8317a642f9a21831890e89c7f072c0ed96b8a5112fc108a32d80886f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q22UROOR%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvr6XkneZBMBOLC5J4gdF2ywb07sjvUdOBALBONYHjoAiB%2FPjNhc36nXffer8FY3A0EEoeFebGQ0sRcMxPOD7ELGCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9hyk6J%2FItmFmVza6KtwDYYgJxC2um6KifkGt9dU%2B98WOsAzCK9A%2FW82C%2FJUUnk0NunCNM06yC5vnOPkuGfqrpKBYh0acZEvTeNWgra8M9zEbbltN6PjD4JFtvDiaeENOhXmY%2BDCcsPe9nl%2Bu54NC6gSUVaszQMOsaycKrJocYURGhtqP1c21KZnO%2BLMPmZhLM%2F%2BHxKCLRIom3t2NHgBIMYHgO49glWCzL30CRpgc%2FvmN%2BcXCBAlrelpyZB7%2FabWOIUW7yKzQLGm4rKipgC0z7oJ%2B9Xq46IhIJrUu%2BJXw3zh37ArII7QzqwUtdkp6y2tPYzHEhfzoBJE2FALdQoOd8l4HwOipWKaYpxhp3WwgFrrOQFWSgz8d2BnmhUDW%2F625jiFk1fHZY%2BSaL%2FkrnX%2FvEB1fg%2BjD%2B6iFNfT8Qi%2F56RaVdZp%2F35X9%2F1w9RWOmj4Izg6zJ%2BLEqteiHjGnzzHKAvk93dXQoDYA1YwNVi%2FsYCxdvhhzAxUHaB7Kx0ujT12C6%2BiDrMmPtM%2BHaqlziqFshJG4Jz9GqjKKqIEGGq62R2TupdwE85QIssOKul%2BffUqkxw6Y4b2xeC9iY2JgIpdt2Z9ueeYsGD6Uob%2B4UZIFxpt5R%2FCB3Ptpb3FXDKMWwct7xLOH7O8ajgS9Q0Q0wv7a10wY6pgEYW6eUb%2BM9FnK93I88VGxVhSLcMwxV4z3hz4fJQQpLKFYEuLTytczUK4WQRMiVeZAiN%2F%2BLfIvbcqtDV%2Fi5rQPtqp22P7EhPtTDgfH%2Fd75SdRhNTYapw7MMVaQM9bnAhYim3t%2Bo7jqajvn49SS%2F1TjZK1cSqy3WjDb1zW6guowpYmW2Sz6wSqqCDj0B9%2FKD4YnbA6QVe%2Bvr9WZg7TIa%2Bu9H65bts9Bs&X-Amz-Signature=320281a1be3f74c4bead71be28ac9a6a244944f39e560a610b86b5f3e3d1c33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=9650c2339c093575bad7b16131bf2d9acbb6afd3b7958299ce5e0d33ff60c14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQRKTKR%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYSEDsGYv9W4KLeRcUgQ3LxpTEkm%2FUEEUAgGu23ylIFAiBeF14hFZI%2F3mK9pRNV%2F69jEHYkD6OgtpomE%2FUGGahikSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVbhPSu2VH8Wpgtp%2FKtwDbXylG0XvgfctU6O2Slz2RtNhB2cCDU8MyWX7yTg26WFmEv5T0B9k75hYwqKHENDZRvi4L2aWDQmyvH0rvoyWsh3TFtESC22l12ynHVjg6PKYQTpZQKNaSKAtXIpaenlBHe3yyF2mML8Voqc%2B%2BStVYBIgvdSij2exghT1ifuVlGFo%2Bo0V%2BjjVbp3pl3vUyyeNiDGQH%2FLHKkdAghEltyukXFZwfuzz8lrdPuM6Ynb329WSzaYnrOJz15nGP7U4ZIyJVJOuVfReV1bKPGRjhBIgOmAWJAWrj6n2IXl8PGp0f%2BRnzLf9vIuw7bz3njfx2pzakczAH9IcXVYfbyoqJZFI2kmqsQRKC6Tb4%2BlHwcQyKTWT6vr%2FKYaLLTrmtQLpU45DrI%2BJ%2FQL9kGye32KTO82LAHE%2Fp0z4B94XvC7eQjEwnCN5d7v6SA7k7qOqDBmppEgeIVaRSSHYSl%2FtIv0DQb8f4yK7KsEXWUPXzAkJvhvyyKkrre6SmIPRTkVYhuO9HJnF%2FlW2LzwTiz9A4GP9LbZBuqsMb0y4%2FDT5RjTSM568c4%2B3iXJQk%2Bl6ydEQhU%2BHMe3%2Btm%2F3nKm2EyehY0ah6yYMgbP%2FJo%2Bowd9CxOaEKqb3lL57slnjVJI%2F41BQo6Iwpba10wY6pgFyV%2FyGQi4Vr0%2BksYCsrox5Kmvv11m8Euu6Ym5kAPlfbKYfVsXOXQdeb028ZlxJ1XTo8XS4n3UYQvuorNpNCbpPwbq3Kv6DKPA%2BZk9t24jk%2BZStjUmzLF%2FrRkuj92N25yyE%2FOGwcKN3pu7396f%2Fot2d1v%2FqaXyZChIX9ECD8zLxtdRJ9inud%2BoaJ0xkzTK0mR8PoCkMRydAyNPnz5QBi0SNHX1V7giR&X-Amz-Signature=1a769b460b6bab2248225605986c36111901c7ef454996d355dd0332f003d7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=cbde3478c0f19a8a1976af2f3984a03e4b94cc7aac97f1927baed1715baa8bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2IOORQ3%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeXgiirZKO0M67lBN8MORhVgoF2%2Bh0GOaadxVa2N2vFgIgKCrvzXyJJ9POmy4h%2FBvWh%2FhSeAthu%2FB03f%2BKX2nTyj8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKezdvAW30%2Fl9OiECCrcAwQjM7ti0V0iHAuIrsmQyQIiS5219qI3E%2BSpcBL%2F4rO7qeba2B4HS8qNUfo58JgVCsoDB36t92BgzqeCAiyAlooCVkMTu%2FDp4ZAjVo2UqfBbrnJ4Ux6yPqW%2BoUnCTYtg0KKwyLlluFCvjRSxhSOnWvApl7M%2FeGFZRPBkDdNfpSBpZqlmmuhpxKNWT%2F8rbrWkvcTJE%2BTZRp%2FfElbZz%2FUOHKFLrNWLNm%2FWulMRFFoOssSunxOIH6HreB9xglj9cImhB%2FPvc3FxTYRlBKYZ%2BsDaUT4im1%2BEmeW%2BaCIwe73kCaSdGDNfYcvstDeq6JfsZET3HN%2FJw8tQruKnVxaxiwfWPG%2BUP7B7V%2BRl%2Bcke039JGIOOd64vp8g7987SV%2BzAPJKrXCee8PtOJM9%2BSIsXy8r9d%2BY3IAjljWeusiw36J7fPKYbrmDCeyXZ7HrU57r1PQzzi%2FkoLE8p5hHVugcj9S7L7WOr82lcjV%2BDa%2FUBJS8aIJgLl3%2BPW2ccirYq9MEIjMIy0kn0hfG0gV%2BjEKz%2FchKJeHxev%2BWTXHFCx4dI21DS07IhH5Q%2FsFvuE35c8vKEVUoALBBbPaHopIbRg%2ByZdWKRWIst3vEEOuf0Z8rpdTg4IAoeWGolOsDEZSRYmCzEMN%2B2tdMGOqUB8LsqyhpK8sv67RKfmXpTRTcQdhjxMAmcJB2XrFaCKrAXVMjjF%2BLpfP4jYgIDkauwPBIOYGM75pOHIkW5EHiv8AvmnEZtNb5YPAr8AUuQvC5kRV8LyjWAI%2FKCnhidDz4Os3kRWkU5rjd6T8FgIjXPIvfySKF5ZzoqIlZfIGruI0hr9qZUC0bA2VvihDJVgRxGRGu7ZAcWurxbhWr168BYeCZaVDOi&X-Amz-Signature=ed87135d9b0861070e7dcb5907cf70d4592c4fefd771db8c8ce5d503c09f1905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=d0b4d1230bd59270c73167b68eb9d20215ef9fbd494a1d21a25e4f18e0069190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IFIP24W%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFlGZWOPWz3X9QtZGQDf6XqPfanKuXFkfvya7lMQjvAiA8VHtv0kMPWGXkH6nBolMq0vELz2W25Pn40aiJL7UHbyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7%2FYjKa55qLrEvP%2BoKtwDv3vkUHVgk6%2BCTPL%2FL8cFa2icYnmFGf9kJ%2FATgntwVUGzAu44iyGOqOoMXRNb6GefitPIX%2BUETn3cbwlA0gTcnn6O9lSJOMDvPTOUTyg6SRRiG5ELdVr0hMymY1Qb2%2ByY6G%2FrpE3i1oJ96WG23XHHyf7%2Bo%2BVBuF3d3wlGEKtDrAbljPD9ree%2BASEIxDLJpCYbins1f%2FdzcgchBnVmRD9vURMqAo5R9RbHSvFGhYaowVxrhDFXJ7AiFydXIKtySkZFNv%2BrApXcTzmU6iBfCbvogd4l%2Fb8iE3hANafVXrAydF37eYo0Nw7OqIJltqGrMArMZErodTLvYukXDn5%2Fr63nglo34eIqYwuBcS7YPWB9qlZfHzZg4qiOTGvCMcY4vo8VEKDKiDXDJwchfY0SobjeJ%2BWEw%2BZMvQ%2BnE28ljJfFdKw91UPO%2FNhR1ykY4rr66sDedtri5TPT%2BoT8QPUjHJtJ2Mjw5tIoi64xm0uB%2BS1G752ewOi%2FXy7r%2BPtosFpIGMYCdpYa8VvD34t8RgYm37%2FWCu6KMkWCYhI9CyW6gRLzbMLmTpoxw9nvEwTWoEx0LFl4StBPq1JOxjJUzIz86ZxCymDU51EgzNs9X7SDKN%2FM2nR1LnfUISlAz4d7V%2F4wmLi10wY6pgEcShxcnt1uIZycf40XGFHYTYPeTqTK1hJk6qx6OdSHE1qdULxTJVUQf3aEB5frvJPjXSIwVAq5oIOZpDppaQx3dnRjMfpoGVWCKDt9zDJTqle%2BI6QxPjdNafONmYCFepKPR0mu9LeQr7C6GNAnE6yza7jeBkBiUEA6D76FIvwvzGCpk2%2FtLMctcnRXXEPdaj9oN5d3A1PwxHixMNOyWRedueCHJClD&X-Amz-Signature=a3c59f40758243ca5d222debbe4f7f8fe9de351555673d125343ddc1bcae8300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=f2388e5d77e1a16377ae09617ef05593fdb646fae642dcccddd9dc29a1360e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNXO44SN%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj5s3piH64xi836erFOnX9icypYLL%2BrJ8hstXXoGMiWwIgKgo1xPTDPbRJC7Zos7Ul9GsFlZSyM%2B7ANTlqAFtEMb8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwisvFp3nySVXb%2FJSrcA%2BpKhZqpQ9hpbv4ZoMePzHgrAQ%2BWmI8mcmuQ3oRkPQQCjbSFS0Ch1ryHnyBT0QHkyTt5EVfFsGw3c1Ban9asCQ4HCOyPaseIcexvMbleAT9A8QbuJAdTvA0NIfsWjbBvi5D09Lmi%2BWNplFfqrBbblJcSSHm6VVZwZLehRdeXfrNoU2aqYrFjUoRiHEMAviE%2B9EO%2BiV%2BEESzKXguSRmLqA%2FscITJd%2B%2FNPBEie7ZIx2B%2B6yqCnwVA1nGfoNVChC1YovdOUk5IkbZoNAM9CtEn6dEQmHzxd0sG5qM%2FZfLrCgbUgM1G97j1lsjLZ5P86X3pxkGEF5hc53gohoQTLSiGQDMAe4LHSWu6u4idvzE7Hk7oreF9ID2oXskiOEF9Y0xKFnawkTcCvokLHbR8oAbkxU6MkEVvfFv2HtSEXhAUcXzYXSKHwfdleDqpumuUHsaX7dLK8T5Q3%2B%2F9CSKzVq6a5YH0CyLq8wQLuSXFneAWY%2BWl7Immca79GAPe4sNdTd5GAbe88GBFGUVfq8G%2B3rbKe6V7HEGQxj7F4Q5NybSHG%2BRq4pFQeF%2FDSmIB5pI%2FWvGU47RIJnTSXl2bRHs%2BtqyVn1oVI3lTCVQc8%2B%2FYbe08y%2BB8FlnkmHhatnb1ubzIdMPm4tdMGOqUBEngh%2B2xRPzQYzlMA7LOynZ9Gm%2Fc7MWnt4mqNmjJlcvYnwwZU0pmV06xYTDN6GBgp%2Bz2YnlUmyHi%2Bfr6UbihcJ1REkBqhAu3fkkQ186jAvrJNo53BsZvg2k9%2FP1RS4A7T94x9If8sI0SNJIvgMDOEjUYvZcFlPaMppmdDLEh4VhbbkhSpNjMB2P%2BC1O0eDsFcQLgywcGhXgfwekr7WGXnl2kIjNDz&X-Amz-Signature=5b88899db6897186a699e43dbed56fc22a44405ca54822211605d9ad74f4a85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=25263475309532d4b999c934fa8c4718c10f0d7c917d1b5f4534920b038e310e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZDMMOHH%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX5dGxJcQBqcoYYrOn85%2FSuKvyb1hRtojgzVcJUAQDjAiBLsOEM1zJptdRmz%2BIRSHk5jpZSo3OObWmt3QNDYWwNoiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR8iPvhc%2FVfN6hOEiKtwDAVoPrGUJ4%2BLlq9AosKUvU8Tk1k%2FgN66P%2BfRBQoscCECmwg1FfZroCo1avLY2C2nrfEWZ4xkXZe1%2BSHMG538lasz29xEmrr4qwPvnM02kUE%2FbCMIYgRKp62OcRuTu0TaVMJ3SFqef4xTIfZRA9MArPVfkETr7a24VG8dpc3c5n0lKG%2FcCWZU%2BpWOeF9hhGaMqxLWyPsy4xm91EE8T%2FThW11N81Vnfa9R9uZF35CF3eSRdWzJhWQRH1RY1czvQ9UKP%2B2u8eQs0gtQUhpl%2FvceUq1MAY6MC2ThGoTYbi5BQPvtN98PEjKLbwcCZpXplD%2BZtbuZwyYUgGsf15Hmbg6wljDcrAYPJsXcS2CLVrLcQUEAybj5Gs%2FBP0pZNEGTXJ%2FDSY5kDoQn0w9LLqWHXTn4NTGtCc49mDPKvWbm8YXYA6wJXhel7g4jClmjGKFXZt%2B3Al696cFIySu4OYzp2QJqAak4Fwn0sHbN3FsAl9cSufuJEE1KoCsNSscxBhekJd%2BgrB9slW5sGaCdJZQTw2oUzE4y3hspsSDy3SL6Gi1DyUAPoUOkspL7AAWrRx0WUZvyAss5XJzQBJhJ5zkqNQWidNdkRuf5CaoBKnLU%2BJvhANFuDwnPKV5S%2FIaBzq2Awgrm10wY6pgFGuk0rDW5Ol5skCQ2SDE6GEdr43%2F1l6CgsKEUN3CMCbwilASCzwRzlnLZ8BG%2Bz6GjUqDy9DTwXLfSKoTHzltY31DwyF6UhyGl%2BDNc9eECwdMlQiAwtzOrU7W6VcGPbUDr6firtZKuYKlAMPr%2BuuBaoBy%2Bdj43eZ6ljsgEE0A6YhxAqA%2F5u9fOLXksEMijIMXV4i%2BobTrhymYaUXrzruQXxo8eDn5a1&X-Amz-Signature=b0dd5b51e9980fc74d2908d27fa9fb96dcee3e4f81bba0303b2ab14f526db35d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466537VZ3K6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgRwKFODroJe002tsC7eZKBbIU5g3WAkLW%2ByWIKCVd3wIgP1emOTXPqe2k3xNZyB%2BKj22rVoMUjgS2gOcYVujEnCgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx6TEe35MALdrhDWCrcAyWJ6RGKCbjbXoJr2pyecEUkoNfLC9aV%2Fnf77%2BRIJFII9KRvDOzjjiB9ViFtSr4ejsBRmpfyIZMh2La20tiO%2Fs5Oo5hocVHRPdwu1RZelH9xj94wVUEPtvDYTLghFEJ9kk8SN%2FoMu9ZOnev8wdeibTbhZUDu1WPSxfgG5nG1M9ayZaYyFV5m8HMJQqSfFyNpn7lfw1msEiHKa5tjVeXWWCoPn7ibSLEXpWuPZoCe5E1jq2%2FuXH75TtAePwWSsVVl%2FwmmEgCDiPOkNKjryUOo%2FoeCzjE18LdX8bQt24GZB61MqeLSZ5J07GxHPhgkbOhZq%2FCLPpdwpiJkrUev%2ByQCjIM1Yzv0uOcyUu0GYcUGNAuhEFRckS4J29Kdv0KIviCv7tJ4GJI5hjvFVNeO1sQm9cM8xEPnl15zi7ozTN9QlAf9MpwUouYh9oZ0xRc32%2F%2FMGWwJ2XvnIuGjB9GcE0A%2FMgXEfkl2aF3IVBmlnlien2L7PYEVRG9m1okzWNu%2BNw%2FChdgcnwTbC1nP8LJlxGSMy1tAiIDrLwm9A8B8bGAT5wvogYnqhEB1hhMEwZSW3rfr7Wm%2F%2FyPoFBKSoHVdGfU6n%2FBrkjHa2V3C23MayKimMwYImYHQjXigx6UUNy0UMMq2tdMGOqUBTAg9UU9%2F0GVbiuhnuI57KAb0cAbMVBs8sCU6MMv8fyMZHW9nHBhFv32weLzebpcKogW3xc4%2FpBKk61bQQfh8SwV%2BBKpgut%2BdkWB3pV%2F7jnrhUfamr1eAQxOSy0LTZ7Lxtmd9U06VT1IFWTNEG%2BRIrEQlar%2BbjQKdjolvv7A%2Ba5dg5YteiPjg%2B%2FBtymjcUKHW68VuFctaMnrTZpIpcDQV5idBYYQX&X-Amz-Signature=e1ee43492f35a9e3b8f65b97c615851557640c95f3deb312a1ef8e3ae4cf7587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJPMUNY%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwyRipidGea0QKhr4io3qkek5IoGh%2Fup8lVhtHeF4syAiBfQSI%2FdlyD%2BUAunsa5HnhMzr0XbMAfgP%2FZmtVyQ%2FYNeSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu6Mp2QegtrD5WFv2KtwDio4GrQ9ZB0c96l8YrP7ix3QGsaOWaRwSHbbhHX%2FlpXa7G%2FhLArQ%2FXI41LfPm1kbqBC7pQWirXviUOShLky443%2FGQqWq8O5WpG%2B1204h8S0ZX0%2F4hzD65bU8lIx8gjyrJwmwiGj6pXKCJRydsdfFLX0OAHxxzJT5MzYCBhc%2BmY6gtZ1i269ycxFpQtgx7oBYBgPb%2FhXZFAHiy9qBRQC%2BzwqenLQNd%2FgmNN5AxAhp4v5WY9dtNCRa71nGGr1CR0o5Xk1J7PBjzJk2wQPqMhljgt9I9PwmUCCE7HACZTCQ6wJE3Jd9gnI%2BUO%2FXZf1CCMtiYL0i10oHlwgMhWGywTJwxwSNcAC%2FFvAa5bK1%2BxxE5Q%2Be9WeCpDtg%2Bs2JF0mrsjNsuK9mPT9NpbNk01fF1iocu3LFaOA5yruRV2U1vf87VZzNtZGTyZnT2%2BUBZx8ygkuTCqD%2B3AGEzq5S2VG3VvDxapp7V23mERlNuz0zPQFofc7Fy%2BEO3U3yuyR%2BHZLtniqyMw5JTPlPIS4DUjjRHJq1pfLESoxwd9gf%2BBUKU52hcDBT%2BG52QTVsFbwL6YFSDxQWa8dA%2FuoBUeTlHDERjWfM%2BGT80OHYJM%2FS0tCwNlTAdZ9SAaFLcpYt3bnLYbVYw3ba10wY6pgHhNky9kaHzu2Lcl9i0WYwavJNW39MIxshTR9iPY49OdLI%2FL0U8oWctFnZ2sRcOqgyC745QJKr4A30UM%2Fub2ItWtN3HDHfggmEWimlmC1Aw6XMDH9iDz7KkFClR%2FgALAp9p9Gd8HvkUKY2N0kVOaI2aarLLynL2WPgbMHoHkeQk0ScAY6XbpZZFpBueZxHNUrjzyX6rX5ICla6pTBYvkJzZxvEtlgVW&X-Amz-Signature=310ebb725daddffd8ccec17633781840cca9a98f3f6defc1c2916c935599daef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=3cb0232a4bb5cd242dd0443f4f484e87f5ced3022c710889020fee2a72e7c779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7B4NNA%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxSYA3nCTgKJ8sMS2CPVMweG7XKtNuSX9Odjr%2FFnAmqgIgafHS6xagr1QHiXl4Ta4oSLLQO8uth3CB63S7PUpe8RsqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnFud50A%2BZET9QLJyrcA84iS1HSubN1eU97o7kouNya2fJw%2FV7Iltg6FeSMsZcULwi3nUqv3sbUr1YHCncfKpjvh5mKp9NwS8Hx%2BQ7mmr5PhSeauLhWMOuIqdQpfTFxHA7wNf6AL4bhjMbCw8NwUsHCPaFhB6%2BR3mD7ipgkNqpmeylZ4rsrpILMoHDV2iT%2BvkPaslIYltqnJ5harMoYERyYqfk4LJGRYw01CdzOfkPzjO7csA%2BBbrYhmdjWrLfMy3AQ2G336TLMEZA1Z7nedK2uW7wueuWi8V3gAd1hvFIrp6PqghA%2FEX2CwSVD9ESJXd0I0ocV0GEfoG6hKNg0rgCGY4oUsYYOiMAxEd50N%2FMiPT%2BdmWku12KfqwJ0K7WYKunb%2BqsCzRGeIRtyrLQwXo2jiXG4LMY6hClTLZEvdjsfsEW2q4loeeITjFwzwdT5ZI%2F41bOfj9c1IEqAh7TcAS2Gozr%2BF009BlFcdKWfxklowM7Tz1qfPQu9qwuOXTodZg25x1t7O0GMwspuC3t5luRELMB7iTE1cDtbFuProyU4x9MFqIeyI7i9RlrRYC7TO7tnsvuoP9IBbQeWmuB%2FfUpSl%2BADKSrb4u5G0xZKnRqF5RdM%2Ff%2BpX8CiXB7dpwiwL3XZ0%2F4%2FZD1T7Zl%2FMKy5tdMGOqUBwHspS5Liuny0j2nfNoCA2MW16tf0yCCzWLA8uBJlcwmXbiiP3YGRXIshseofkH18KJhy7%2BiT3tJ%2FuwgRoeivy2MjydwzkqxU%2FPN0I1j1d1%2B9Rj6v6OPaVKxDjBw9lu2NnIko245O%2F3NlyWzzl881eqyYb7BKN5Lsws58zLHc2VFt%2FY9v%2B1HTCO6uB3EbIutb0qm1A0EyemadbF0WpWKX8IojiE%2F1&X-Amz-Signature=f9ff836ecc3595bfc5e2dd04358b5a3a8a6ef1e0f4bf0050ad8e4ff6583a6c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=131ad87da4c40e19734aba6aee0949dfb0609a84c19e23cb8a14ca94890d42cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=4cbf43bedb2a53377a2a1c6bbdd160d59cb5c7f109b9b06b9c648251c0deaf5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=4169b8c0daa639ce4bedbfa25e5884fd08a961771c513768978b49ea21688480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=0a74ad51c499a8a34375104fead1b43c9c3dc7348cfdab9aa6de7e6cdaea1897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5ESU6Q6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmDlUA7jOwEAzDuzcUCEQE5hwwQ4jc4kfyCrSB7cxc6AiEAwQXHxNseC1zp7r%2BhA8ri%2BkK%2FgwUqHUKTLmRnBS08wkUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbVXyy6YBXM2bKOJCrcAwSipA21GobCbvYCqLQDCvymNfFRGoLOyZtksR5GQW8zlE%2FAt35ifUg6HJik%2FJKp236fFvsw0a1%2FmMym69KMp1YcKfkQjhBmySAdVWRV3PBbLxWBG3wuDpKzKJ4SY%2FY6rJj8GeLtbRj%2BAdDhpo7S5rcdEoILn1ovJx7ASEBy%2FLoYvimOr%2FXr4qHEmgwhobmz9OIPsE1Bt%2FYzSK0X097ZawG1iXAqSfeAzhRhEKGJ%2BN04FJaRAB0%2Ff0WCSGGksSdu3d0C5dFMtxoRvQsavfOao9BDEc1JtVjE62r%2BfMDLexcjdyqRVZN5AM84vDi%2B548hTod8iXg6I1tdv2CmA7kG09DFCT61EyFOYct1ULUK9bi3bKyUO8yxNthC3ynldnx2xFUbKBCRb49Xlj8XxLWnztl1e0nsIJL9GSoVtWI%2BBZr6FbKkfX5iU%2FE0LXbp%2FEVv1bjCjRv93E7HcKFhHnWemprcoAwH%2BI%2FwEuXJVYp%2BzGtFaiqha0YGCcESGKbSMHqnKaHocEcZi1386nDMu27FQFj8GwDWQ4uhQrzF6SMfW0u4P0Vfe%2BpUSGspKvw3jASJ3k%2BHt2eJ4MkV%2BgdQ2d%2BcWobhejIlruvFDsnCtz6CAuAEBN4aJlvHs1OGO9qgMPa4tdMGOqUBwmDRlbzX8s%2BsNjfWTHULwM5TS%2FJV9yqpdPNBBUjiCTCk1EeEGA%2FhR5Gnl0l2FEAOuDbmYeqN57vMASD2H2BDFiLutR%2B36e2yxM%2F%2BS2sluOd8idVbfc5NQSbiA31viAw0VPCwHpQP1thZTviMCsoFxlDWpFicbNdiCShviCGr9noqw8R%2BXaV3Xc%2Bl5jSe75uheJSTUxg7LzrDEDrg0iI2QK1PJ1bw&X-Amz-Signature=2dacbdb41e6ff8e79daf8ee952fbea7b9f9566e720b9008e0ef35d81404a3d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=d2f3cf4874d72aec62f0426a3093f9602bda9870a6f39e78bf747f4d43114a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=1e416efcb9685abdf91ea9b9205773a186fefc7c8120949639eb9a064a2280db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=4169b8c0daa639ce4bedbfa25e5884fd08a961771c513768978b49ea21688480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=8ea94432fc66ad29faaed0eef0aa39477a594ce1ba69ce325c72a538e66bbdf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=4db92c3c09ac3c6ef2faedf40ac87c2e918b9e97aba2f70cf805d2b20ea1023e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6IFGKO6%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD%2FT24AHJqP7TCUdCM8o%2FGnL1UjYZ8HHblL51E8c2%2FzAiBZW%2BF2iH%2Bs6A1kHEAlw5uAumpuPzmelapgTIRB6gQlwiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiX8eZG5LlvicH38mKtwDZAjV2rDuhZIwsI7qy1CDsdaO%2FHxi53IucM6csEr%2FY%2BzWKpCnDYu3t7%2FHpTm3utt%2F6ra4DMqop0y1c58AwfjFiHbczedAoA0LQybuAIlKPO0UXBXGTn4mR8O6icBcZ2Ef0Z1EUkXXDprbKXynrUOaQBn57%2B%2FUDQE6FPEPnOy3Lp4Oj8nPri6EupqluUazBw5cRMET4NQ5%2F2ayPGWsDYZxcdeG2hxdv6S11OCnezwY%2FWXE%2F6f%2BTOVK4MoFukbi9EbyVqW2zQXcbLbvspxx%2B3UGlOC%2BY%2BFcozjVqsZOc90EAiTocN0ihNrMkNxmvE3JLcgOVwmBtdYGj8xo%2Fx7mC%2B00gaeuP6zvMz98qr%2BSv9nJRGQABqYLq9mgYtm8zMhbacHPaVyr%2FK%2Bk9RpHU4HJYadqjd1BX2AbG6jZ4GEEIH6Y52AMuxEP1LzqR2s8W%2Bf6Lgfo%2BSS%2FgQme6Gem%2FWLrtgsB2Qqyf1NHTbvud9XOPZzZIKHz8xc8pcvVgqlYClvJQe%2Fv%2BAdGDxFXM1aY8ZkiQKbo4qy0VsjUyc6P8zxDolJK%2FnlX9ZYGyUBzw64rXP4TD4lO603vs5L%2Boqtd7pVHfIMacWib6PTwIjdtnvMdTfqYCh1zsjylhHULuR8Kz%2BAw3rm10wY6pgH33XsR97IJ5IavYcU2JDeySYWKUZbC9FmwKgfivLO8K7S3cf2He2fy1WCpA4BYB1mn2T5z5mB%2BUz8Oo%2BSnrQ%2BXWTC9SBYfScO5o8gObt5Oyk9u52q6KQ%2Fd%2Fj4RpJVuPWKNEPbEC2HV9MNG40YNCBr0CuUKPY0OhfaTy7MgIQaMBQDlBXkAdTsV20RKj1CFIyKLL91cvWS0%2BOYVR04NqBhMC9YuC3Sn&X-Amz-Signature=107e41fd8438911d27d94e35269102985b3cf0118ffa614f50d66f7bcba20e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


