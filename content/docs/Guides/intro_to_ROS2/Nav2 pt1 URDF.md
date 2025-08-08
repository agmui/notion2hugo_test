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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=4398dca84485af972db2f5e1bb6ecc46cb668330f1b6ba3ac21bc5702b4fa605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=6e4cf6386549d91364c703ae295107f16cf95c0bcaadbc64b9cd0d66feead306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=9282f8b6a757d732ed8de9a4bc4e5d351e4be8183e1e8369aa4aa116a4d98387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=97f85a2b7513b36aeed7482b950e6f28c9c3ace73e6564c0d2c23c371042bd3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=3f8d7a224e2ea0becd81ad8d3121550d9e7e5d4cea97989eb7a31a2e13fb5863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=c12c014268605f22becb445aa9121581cf745a86133e130c80a62e1a35799224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=09a90b59af58d6be25eb2d32d620bbc4b898a2ce4226e43ce9cad5cf522a2593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=00ea3cadf3341d9984484fa2396ea194ef2d9123be09dd6aa16ea76dcc3da99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=0beb4d0f60e054382c113ddb30b292d3361601745a61b4bea19cb277cdde0738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=f590e5f0a70de096bc438b3988f9366cd8286aa67aeef9cb5f672c6f20c737b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7K7LIS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCaB8p%2FaJPsQLuYaMN0HUTYQBZJ43dSKzLx%2B6mXymVoggIgAkziaWxVSWNV%2B3WUm%2BR8FjYh%2B9d7fUVBKBfIK8fznw0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKMeq5atRWbtBUcUQircA4iR2XovLh8EVvFTjF%2FgBQgHpSv%2FNVZd8Bv1hwhxAtBJw%2FA9jxuPf7J6g6bf1Kkgzc7YumHn%2FOfKWuS82uMff6BJZOZ90G4OGrfLoypynfytryl0hxr1Dq0JcGcCYueU78JS3fuXeX2W1iu5hi6xCyrV%2BmEyIb26xDCo86zMN%2BP7q7CyJltdmk6Yix12cNRJdDJlvJo3BFyDibHcrhc7biIo1NjyWgx4u4Z%2BIAz0zxVhX2YMurA%2BuHl3OkPrwd0f%2FPQPS2o96B9Dj7haxu16CEi0JZjsI1bERG1Z47QE%2FlcpOp268xg%2B%2BT1N%2Bnnn%2B0bYbTVDKQyMHrX7413z1MPYhUGq4txWlvJhjpbF29mpVNYuA2tmx174kqtZPMZU9ZGuGIVlOX5VrBCl9c2tSznTneQ7Gwkea9gCVRyZBQUwTZ5JKSX3rsN6S7QA7VEKd3pCrgOUnSVSZqTvcq7btIKMl3lJeqDJciHgVUKuTPuQ54uUlJUR6zCgbkOuKfooko4K58dbsylEIYca8efkIsyV13PPPwpAep3Yo8Xscv8PVCNB6RMNlIbdZOGWBIsql5fC2ljH0uJXgvBT7XAlBN%2BbLACLovk9Y8fHI6JnHYKenqk8IHjMyRbfgz%2F2zUYAMMTf2cQGOqUBvLnwfjlFakn1ujLYgcqT9%2FSbOC7UDQDCkIofHfNOBDNa5vatu%2B9LjKHr%2FPyt24pDna8Zt%2FiKNEUM3G%2B3C7lYAvEWNjkSWIRvVAQ0qZCMcsysguxiwAvAXgfbhYU94PkM%2Fv1yDO6zpbFbz0PNpQ%2Ft29b6qJKpN3gax37IjGTWbh%2FlrEaB%2FU6U29fam2cd4tJko1YeqvJtSg1JFWUFFUGGJR3Bo3HO&X-Amz-Signature=80c89156ca684ea97b982c70402f67f060556ac59ad4e43b3de95e27ff6634cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466277YY32H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAe16aue9wKclWKMqMbfM1dC2W3wZr1rI%2F17BHPJHF7SAiEA9Wu2pWarUT6W%2FOrfKgL3jcepEh%2BD3%2ByDV8sngdpEl0cqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0R27MOy3URxXRfaircA2HPUP0b2rnz3QB94mCw3wDKvqloYgoclJtPiglpSdy5psK5ndyaEFOaVGoY1vt9M94AjFd1VmqqJUlA7VEL9yvixcjf6wP5BthLuQ983V%2F35WH0iOyDu3IRShxuPzpaWt8zkwniQ1gCU9eSkXrbc%2Fd1VP0dH0RjPbBdR7hl1NJOP1vQ5SdpA5oC4zLeusASaM5KvINO0kscVWFz6EfZwhCP47rPtNVf1GetX0bO1Jtz%2FPUAeDAfiqMqmGgg%2FROTmT%2B8l4dX0adSEYUFsBXF78A0cyzkfc3OP4NnEP46TA2O%2FdxRElLWuEYWzGVgr7TeVynFBG9%2BbL2DD%2F5SA6Wl4IHjO6oB9FM9uzpyACLDJAHs6yasgoLlMP%2F1hVu8d3srKLtnO9HEDfUJVbWWCuXI1EiPR7hKpq8GQWBZ9Ku%2BakpG%2FH%2FjD1Knsf8K50S03WZ9VecAo7gACnQorP90Yafokg2MuBuAOPmg0Yggk57VB507Dmjw7vMKiKwKeq0sxG7GCXxrn4Hevf4Ya3hPubtVcspbdfZaggUcr6qSKjmAXIffR2yHhQQQWwyY8qbbPoYHhQkrRVbBOd%2B3922x9693II%2Fezy2AElmzsz%2Bz3%2FMwM5I6QpdPavxquS0PBfwsMObf2cQGOqUBOE2tKFiyHZUY%2Fw0bgrhRrm%2BiT2Jo4x7lZ5D3qmS4yRTTWIA9uanop5nEKGlCn66Ih%2FfLJgfD86VMC1H8nrylBP3Ay8pFypm3y4OKhv96UCDVwL3b20SoOQaeIH7wAOVNX7ScKHXmnhMFkoWbZKK5OKH20aF3747YXqHwUIrw9V9bzLdUixh8RD9GpdUo9S87%2BAddHZWQx%2FmPDC40hcQEh2ipq0B1&X-Amz-Signature=7bc56dfef4453b70b73432acc9a79874ca5b44af164fa9c0af036b8155f2a8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUNU4HSZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDYuxzd%2BpXIK9f8QusEi%2BGD%2F5ZMm549FqgvQuV%2Bnjgm8AIhAJt3tnaTntNZZOJ641ZCuNRBCSKEL2uBFrRxGrZpNxaeKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwP7sFXeDCmATt3CFEq3AO5DmfMTYF%2F12fsyyA48ytU5VEGt0gfWhB3Eghcv%2FAbXoinx6cL5PK1ZLQ4iQ5LbrCF8D5Fcs33k%2FIiHfrDSWf17RDaOEZoomlMNfSH%2FSAFETlMxYXnb3PyjBO6bdKiyp2W96Icwzzyj6atV5YIKyoBU4bG5pkfD7dre%2B4ADzeyxUW1vjACNYxBskjFGKOPV06VMgAAmkrrBUIddr255BbtcaL6%2Bo58TS1hly81VYZrk12VDcqPp5qhvmsPyjoAd1gyU7hKHknNWwSqMbwiNaa6p28nxP89XzGSop9UsTyuyLbHQYiJfetx1pIYR7Vr3ThsXkMaoJOb4qgshJIZVr86XyVvMzY5SqheSXzVj38vSTlqjsNRKGJh2wJmQVdT0r6j%2BCXlYt5ZCa6W9aRu5qQgjrBEvLUdJsVp2Ynb6iXcVJI3l%2B0eVM4s6q%2FnQSC4T6UqcChht4dx5sJahT8unMSBxAU0coo10nEC55NaZyDDshj0QHU9VegtlB7nwoBC1xPemOLksyHpjs0d9mpNBQt%2Br1hxODD%2FnXkycNgOmRnNmkkthYxH6wXB1dPu1iWBrRnpL8tbjv18NXG51xmLGfmKLVwf5SeR3gBj3oG5fW1pJkxiDlzlIfOZOm%2BZhzC239nEBjqkAbaNgcN4wFd3YaG9XkJ5vUnn0fsvW5%2FJhs4unIsGhqUn9LPBv8Fvg0nKu%2BksEb%2F%2BROEC1jesVEQeiurZS21SQN%2BRW8MYpUlk2aADbb0SrG%2BRgqZa%2B0BZ%2FiqpnvVIGAocjDc5OK6nREq5McKaxZjPEALbOr18vicAMUEk540UoNfXFZYZzyKqLUSzf%2FqHStRP%2FDMrtUxJTxkuzFhS19e%2FrfwHCGsH&X-Amz-Signature=cf1ee13dbbf89cb72bab12aebb35c9d809389137c26e079567ef039c8490b9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=4a3cc8739903b54e320558b964edf1f135019284c62a594515cdb9e2ad6c9b06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726IXFEK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDH6yFVQMfBcZe4ezGNQsJ6VI4bqg0dTqHvQbVTE0MU1AiEAqUDxmF2uDVANi7mf2LfBXd4TrItW1chzL2ZuZz%2BaCGIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCJWFYE3ZjqWDwQlKCrcAzaL%2FHqrM1N%2FqKKhhc%2BBz8w7yDZySgaL%2F87sSuzm1rbc4HGl8i1tNJ8EPulUSH2fU3nJET0wL7dZJkUHrPAUcljW0Ns0wgii4UPbN8m1ijTXO4F0snPwVbvbIGmnP%2FRgXrIyhM7FeKu6c%2FcQDZuPdHOhrqDnXwDZP5OrJLo%2FagTg0LQxzh%2B9c%2BLAGXLTzlVB6b90GNg0ItacbVz8ybeg4%2BH98mPFV%2BO%2FoY%2FdQ3V2pSZPx%2BHGXDj8SFtdwa9F3YVctPozA%2FPxJ342pGmB6a1UrJLMqNrITEgOvs1xiyDTCtGt4qV9WZfLJIHiXBc1Pu5fVrrxKTU9zpU%2BYJyheWoxN2XBK1D5irHKEOxMGa8uGpqmUhJDW8Uby5XmfXOJjFwtqfXE0YeDR2O0o3ZzVx2Vv2zHYBDYfKbwdFe55pmqPPC1e1RUueL8zs1a4cc2qUBmrvYIgKwavfvJigkWei%2BVBSpJMoxEW6rxcF30E%2BWFesxTWDehhdOMBGUHII0kwPND7oPC%2BWiiKt%2BV8wOw9pN0iPSveZx1Xdy2Jg2VjgPO3dRtgYlEtAa7H%2FbNAbxaolYtUxcqYvgfIDn002fTNFQ8y67SVccAHz%2FQzCG8YMBKOgDHDOztriY1Mr%2FDEMLVMMbf2cQGOqUB4yICTawf7zaspLYOlNlifuOi8PgYOtTL%2Bj91wwvuMSwJ7X6NcrvIT0nxY4le%2FsDar6z%2F0UTWKTkQ4LScj0WCF0ZPD3%2BR%2BRKqcsVv3rBYJZ7bsGBxGvZihSI18L7Efv54loW3YT3JSFJVKBtXw56hyMrnodhuw4q5AuJbJHRb65fdZlGiHrzEOeGn5G14AGoX9crOj%2BBW6iwMH5BWKNEAUFoibK7g&X-Amz-Signature=946d163cf998d84dc7a1fd1a21565424b7557c32df322efdfe50da1ebd623d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=de8d64b83334f4f22b7b8527cd2d31def168d54478143755f52c1172c5c24920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ3NXKRY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC5fFwJuOlrl3yYn8VSJDimbPKaGr1%2BfOc7AvPbo0FpjwIhALcVhxDemZhexvJlrLYJ0lWphfgNghvTwPLUV60tz9VrKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydxNtlrbQDwuDcxk4q3APhUzFg3R52BjFzBGCJpuGjBUfsGFyGP%2BZkDhJ%2BSpgIufObzkuFsQTCOXDOQjuxmOQCEgwmIlo2AJFi%2BZxbr5YZD7JkzMg82TDpyE1OmhuP4Fsd5CgFkeOK%2FmihDIDMZG4SLn8OmfegoXU94PWbmy0Wz8jsgIAkgmM9Cf6Tz8mhQyFjjt96rq2blTkQA%2Fit5T03uofxb4FaljSwjcjTZAM2J5JKpALre2k1rcsuqNy2x%2FDsUYn9ddxuUSHUj%2FICSvuHz5i7lldF3i%2Fd%2BNMxcGWyGv4Okxoc%2BjaCm9ndPSiDkyXlxgOH4mhmy7Eea%2BgFnZJTRsTRXk6dOpr30k4wfnn6vIPXz696bK98mB2LepwqWecjsDs6KxyuOjUVOu1b4Ujrb4%2BdVPjVxzbYraXwtL3Fv9XqEvuimfQ54MwQO6nrIaXltIONdFkdtj6OpKqahLscXtrLZ5CQW1Oo397WjoZ27h7f%2FKlDwfvaZjrNjolS%2FjsBaMXnKyip6%2FwxCziwdMOARQApChVR5WeMrCbBVBRsGaeEfW6KTja5Cq7ELvt54O%2BMe4mGR%2FFsnMUubFeFWCAHn9b1YT393o9%2BvP%2FkwV5dHK7hfjN0XyFLERQLx16IGM1sR%2FTfNMQKn6tmczD439nEBjqkAZ6nkOwSzD6QZJJ0mYA0hhouvLKli%2BkYRF9v5lQ8RqbB3FiHJCcxSTqxelT3xJ4zIf2KMYK5l19GQq5G9mBfv305iRG02qXeGC15QgReOt947%2Ba%2FHhtVcxjNRrRrSj3tMHQ49AZ8wwTt2DZjMtyZ6v8mkN%2FmT2pvtoIDnUxnUmqCHv52MLxhpfYXgHXyklol%2FbAlnYoYo77I75ITceCBWflqXTCG&X-Amz-Signature=6761aef8d7f3fdd14049008e57daec2452780f825cc067bdf8d2dc22951777cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=ed094e1ffb0776b6ed49a235205e33ec145845e855c21d003e3f1ce7d36ae7dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDOIBJP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDNUfF6WN%2BbfvSVO0VC%2FyIqz2n%2BwUOYJhlRyK7xz0K%2FXQIgFB06wXiqc3z2dfy9yk3dkBbn%2FmOPw72U%2FkbpWvi5CYsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4S5HoW9pUuXhT5%2FyrcA8zoTpB3zXjssE%2FPMz7kDXvQExeiXa7F8cShadD1E24YiUHuPsl5yNczcPZt0YyBnLys1MPvn9iIMhWDF2R6fqf2NElEPWDtcUsOPjCGFalQKcYa9p%2FjD%2FRVKOtLi0cu1eVB0iIbOLKk3WF4%2Bj0YPbqQ5LdbAXQmKGjo8%2FM9WnMB5e5GIp%2Bo9VD1H%2FeZg4%2BmVYVgSkghNKL38eoNRtBH3HXCZ2QxIzvKR%2FkWDsuOz6rzvjGLpo0QgKTET3l3vcVq%2BbNuWh6hzy9Bs5Q2nSw%2FH6XS7XUclVo%2FIyJmSJ9lai0mftOnEbPiwlY2btJ7N2WzSdDcQsjrMmXQqSD3fDaRY75QVGZ5S5kCkuIupbrPo5IwARXhbjEyGrBRfZDv9UPxnZ6RCM0jzX9TEH521d%2FqerPrkCxWIBif6fy9uqjlGCwoCN5WqnzqKPPnQmTfepyoTiFkNz0MGSBFbItV1065%2Fsf63XJy2O80qg2lQsJSzkYNyKoZ6Xuf81cMeV9xvGaSl8HQFrk%2FIEU0%2FvHVSvB6mhLeqmZm3tE9akLeEelsH5cPYSpVRSg9IbEe1naynT0HzC6X7xWy81V9XNRqinugL6H62nOKvaLhp5d42z%2Fd2Gfng7kflRrxK%2FFMVrGzMIbg2cQGOqUBaDb9R5GLniH1DWjkV0ZnnCkHPCjDKd6CO%2BOQkJWjuy4UN39YfHsmVaTi5sJ8RxLPAfLbnzQOdeJYQsNYyheOrGQyNhIxZZtdDm819D2HC3MINGiAGS8Q%2BXS7NssZcQRzRscd92Uxm0ZqtAL0wFxZjtnTprWczPieK1bq4SmJ2DFlb8i8ywrdul5iET%2FWM4Y3Iq9F%2FGAAEBUTZzMeSGqL7FRSr1MO&X-Amz-Signature=e442fd872f83899a8d5fbee74250f761e06ea5f5d7553980b8e327049075f10a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=77e3e318bf37a053fb8b150a96d91bd7ece60d210f5cfc822b18f57fc1bdbbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQRPKEUE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCHsX2NGsYReLmVRNy1AIr4uo0I3hQSUvmb3hv271kFKgIhAI29wQ23tMcQE53JITGxcnDUo5BijFLgpfqQmmqlV%2FkPKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbyVdCL5x3KBeFy2Uq3APWb2DKQR2lF6KPwtmKa%2BwWmn8y9TjXzRSblyOcdukCHA5IfkIM4rm61oyabe007b2xJnGXg1EFs7aqRuJFOF3r2UUxj%2F1qxZnm2T%2BkTpszVOSXrkhZc%2FwYPjNDoQ1ReJJbjuGTQYYZcPyukHgFK7usm34CJWZc7qbj7VcXL%2BrPLLM93eMAv4VJwOYdxtc%2F2OWW3B%2BglnfzgtSS%2FnVIaNR%2BiCEtP3%2BxC0ljbJCv2LR7zdEPcd%2BLr3x7y0zGZN3%2BRAb9mKaH2%2BaSeuvTGDAQB7LwpLKbYNR6zJj5AMypqP0ea4DO%2FIun7S7jQtzIdklmcISMFHixTFB3U4IUtUotK%2Bim4jZI7zC1eccP%2BLbRLuUhoDnBplRad54Z%2FrrlKhYu6VF1C6dBwK65tGCYzl3afdOK14oSrODFdfNFAbshBAgZFQWCzQUhR632U77BRL9kruyfmlE2Rn%2F3IOqfuaiolRWba%2FKWjVuOCqxQAKjD9PEpLHLitfJ0qeE7RKoqrXQHRn0gKgaJM%2BjFQtEAI14%2FV5rl50a4JlGB8YSnkCiedwZlrLucRmpCI%2Fcgc%2FVqhibd5QT8RbuwzVEvFPDQ399BooV9PTnVuUWL658cmm8Zm9h1e5FydqgxqYvGUMaPrDDG39nEBjqkAdEp%2F45A8X22CzAidaSop9JDGppRkJ346qqdh8oBLVLBmnn8H9F3%2FvhSzv1hI5%2BbjJXMKF0%2F%2B6KBXFr6nZNP2DqB1Fs9YtQJU2CpXkjbVORRAaJOoEusfedYTQhannAM9GjgKMqvgyhR4nuzXcKAtarlewU%2FVNGemnO3vqysfcMWN13nck9aHsw6z0VhHUGzak6Uv65OZQzbSnBKspiof68bVxag&X-Amz-Signature=1f6a443e18f4ee8342679f328f5d5999f05cc66c53579f4ec875a1ad2e526254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVCJXLZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD9ddWv5He3I%2BtTdsn8AsxqY3PZTaxBdBziy1I4T3ShagIgXWi08TAzcE%2FZesTCD3WMXBiRdnESiGOgQ%2FcK8T8glaYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGK70bemV65BPuGGsircA8%2BjljfVDwybvfjdRu0MzVJMJNW2Qx81UqqFueTH2ScoFvObPHKvhsVOl9VuUekvjJAYuK4HO10tb2RPRnO5Z70g2gyCsr8%2FdVKXqluvwFOhOHkDZOhHdXUxoHWhlprC5SZc%2Bx%2Frncy7oTSTLgruSF9VVGIBH9HyPDBAHCqJEu%2FYMcGeSQXYdweCbXOlosfdnOyHs3ov8P7Zy51omYxW6qDCpFYS8F3tzahG8xrYlZOOM2T7iBNJiWiu60aBGUwWTGs3rnYRlKM2i%2BAZmmUJfA4ZAty9h7Bibl85rBbe9Y8pBVtaLKY2neOV%2FLIc1lS8CQENZ9kX4Ikel%2BhZVsiujw0oZbu1giLE20LG6miBmBBqd8bVNh0GuC4LLNwgxm9IQrnTcG884jKQbII6aNhLJF89BSCT6VOf3nHs%2BqXoQjXNkTXpKllp6KdX50DMkdur98E9rieIOyuO2f9ApRFb1Xe7O1ixTglaZCk3Ad5KmbPUnodON8i5aag6QR1naY%2F%2FPHi3kYWbzJRMKIlsIsr0qQkNs7rhqBh09G0nap%2Ba0UAKskMhn53%2F%2BkFo7yp5zcbVp2PC5%2FcAPo%2B3xp8prNjkrWnEyQkN9zhQwlawcc2haWvWblF%2FQwkeRAuPmhL6MJ3g2cQGOqUBDLSp3RYPCAWwO%2BCOoLciSitMuuTZKBWrKJyEsOo9oNRymLBu0vqzOJYgEnrJS8YuXIQpR6%2B58m%2FGuD550WeX14cxJeDJvoK9mpvoY6Gh3mZ%2Bt6SyP2rCZ26oKgvcvipNjLhTzHm505QNXUyxYrW2MprWyYA%2B1H5ngqyE8IoYP4PH0JvumvzYp3dPceePjZzP7oyFTajMf3N1vudQUGw%2FiDRk%2B1hQ&X-Amz-Signature=f85a6d6936de863a7be8ed138ec17cda193afbec0915c1441b4f0b3c458d3c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2IBHFAZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICH3rxPf0NtL8TJ1GVGcclQw2spbIZ2kjOsA%2F8bNoIz4AiBUmZ9WWptDjNuKNj4SO%2BF5GEzSWu4afdZTcCMUxEFUYCqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiNdK8ELmfOsS3rr9KtwD5xYlaHUIBB7k7Th4Vk7kW02V3sr%2BbG%2B%2FFdYJuc9P37b%2F%2BR8XjZnXlm5EXIIF4exk%2F8YJjJr3tO%2BQ8ca%2Fzl00QPKFu71qdMglRQ%2BuYWBHdjOkunHxQ%2B%2BhNhPJAiWx14CUlBfbrQTgxI8r%2FBSQApVtmH856U%2FT1gg4US4bePg%2FsPahjf1CRUHZVS3QDxZy9fK4l81HUntM0ZIaCxIXICDVZFnSEdonjcPt0fOY%2Fb87Go%2FszRUDJjvQJYcRVgpC6SXsOqo%2BX3SbVBsKiFHpTif9npQ1YzQPwpQgsSqx9sh9NTuul39Ve8ejkvNFevKtkQp5n%2B%2BEpzVy3vO6pBW3qMxZgRqpuE0Fx6%2BCncsUKzKGAvqqqRXxkyVVon612C2knunwkXv4pdzBV7R6CBVsab2V3usyQSh%2BEvHpbKI9NaZas9ZrUf647LUNYoic72bESSXwEXgytEYYRUZzwxBPEd9kx8brFWEyNRwKHUWRzJvuNM%2B4wU1LrHuEyPiKcJ2Ib9afT78q%2B6GMdI4c5%2B%2BqyLFaIGkSN%2BbsUzmzDnmi5MPannpJOE%2FIP0NiN3R96C%2Fgd%2BZMXj0qLg5cGTbtj5iqNoMtDUoXDOVZ%2Fpd9DYP0fSyiAP6jA6wIfYEH2rPNUh8wg%2BDZxAY6pgGQsFdEYmpKnxg7Q4AubZ40xNRON1ilB4xYmXCXjqO3cPUoY7xzxKyieQjer8dmbJDmwT3SfsKjp4Z1C6%2FLHXVCPK3wEdR5UU6deGLTG6Lub%2FDklgXcOseN15tl2S7CI5NWxQ9XQ6kZrznLkr4ov8RtdgVnyFjmd3cpCCtN2SS334MotR97o0meQzNWjgQDOQt1yTU%2FhoRNvneJmExReUtZjCI9Gs13&X-Amz-Signature=0e066ee7aed742febb0bd4570d3ba06014f4dc1e5fd17ebe5cf96f6eba094826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673W2BHKP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCVR%2FjELaHZ6gKiV2pzyjq9Rt5a1J0ovongFISLT%2BlhbQIhAMD9KZIJ0drNTBdFFrwEn6iEg9ITuPs0yXQ7uPMgKSuQKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUTvYZGFg%2B%2BtIfLYQq3AMW%2B9NgL7pwmKttqAAu%2FmJ0aB4MIJMJgrGb4NNbfGkFeF0fwyIGASjj0hsOooctD00jB99jSAqELXWmM1VqK8P0aKMkvuFYhRf1zHPwbw3mMdy3mGwvMFA8uuU4Y4aw%2Be%2FOOp0uI55tjpEcH5kPAb0DJ5SbYttidDs%2FwpvYxDlRR9C7eRHY27pxOEUqvMOwRrEnvfV%2BQ15fkl6ejLWo8pK2aX6%2BSgOosyA8g5RD4jRvFx03xjYFR51FME1rnezbL%2BTJnNEQu8OIUUx1n7gAMUQHTDMBcafIgPk1yVhdSqRz9L7%2FOvkWWT1wo2Ltd9SHim%2FNJkgh8BlaAylsd%2Bw%2FaJ91ULU65w6F%2BKrTbC1O2u%2B4fbG%2F3c4nJTgdHIh%2FPy0s0y%2B4DSfjaJUO%2B%2FVrjGHvizWNhx99fow1G3AolHZNo8rNtaEHCRQ2eb2zn77cIZg%2FO2cZpkNJinoNowdwc%2FJkVcB%2F5qDW%2F7Rk0I7JMYCyFGVftFj%2B7l48roBB%2BAOEor3MQ8cJ3ED0Y%2F5%2Fvg4mEZjZ1jMJeH1kjS%2B43sBtYW2xUBGiOT5e%2FiK8UYbrVOowpfp0BDWbrags%2BOmTzaWTDz8Sgltt4YehZnWfEcdqF%2FUUTTzYZ5dnNfqQDWM8tu72yDD%2F39nEBjqkAZnla0qoyjUs%2BH%2FAxKLTJUKAV1zL9BHQBGnL8CnsoRWadCRc0CDyvOo9rjb6Nkd4hgkvtcQWNXSuDoH35thiBJtMlXjnSpBfRLrG8JnPDE1nO39M4%2By8uv9hOsdSXXy3fE8KzvjX4y%2BwCQcYee59wKw9XzTmIvyjcjzMG0bZ%2BkloBEgO2PckXgWXByfvlBDrQD8mhCQictBMr98KU%2BQ%2BKx61bLZr&X-Amz-Signature=231bb486142b19349379496330874730cb0464f9afb8725c9e20f3153f068fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEHZWKYU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIGcXPcl6VT3IPWZTqrQ5Atr5Lk6DFEy8P5WpWzSS8ZQaAiEA8y3eF2a7iHe19W02dvT6R8hoc6wpsjjA%2BOdZwPKkyo0qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHklbgicTJPKerPsCrcA8VelJJvLOJ0mcV%2FtBdBYk%2Bi8zADBWGPvQcytqAYrr6mL%2BaO14o5L1zxdu3WJt08t8vVmfaTkNYXbaqA6fUSFHmxSfeimsMSMPSCz8wSPWix5qBc0j%2FxbSfXu1dpGlJhJZqTo4m0R9ELywrXoq6UOpdvAQiUISVKGeVZjOjhbrKY%2FbwFJ%2FBU1geaepM8UIOxHHm4iYofA7ieEFqogdZUBFcgi88jiTYZHjgFCxD6vdhmi4PTDMWLEnextyelJ4L6m%2Fp6MH7mznf3Z4%2FEXNJnD%2F9kdCKNcSaDRzSpmrVEXj6jolbp0nsFUlPbyaYdwyaeQlW%2BzQ8uFUApc4FosdUxO%2B674XPGabZxCDL%2BqC2Ajd14V37oGa7Wtm4yrf7TA219R%2Fn9bPWlzZXwaBOCazAXHXUEOrH%2BSEvIJ7Cvvb4CCOfgF998yut1lhRcfWdFyDHeUf2YqbqaUR8ZfqNMZw3ym41qSmeNmKW%2FefdhVcqkEvOOq0AlqifnWzLgeBFJLvV2QgWat%2FYJGYL1W3lpLSixsgKa40CdxqLPL1tDdJMAedFODmHH9WHlkEf3Wp37DjCvvBOnp6ucSLpR9ExaO0pvpCxrXoS7jb06HqkDFPTEkgFVw9hPk7I%2Bb624I8DiMKrg2cQGOqUB%2FiaRDa7X7p0W%2B0rqi9xRIpgNW%2FU6BoOG9JEEjc3nAva3aR2sHld2gMtKSFVsz8LThqd50jhJHuB3cXR%2FiH0msqxDkigRJ5o0tvycDdDz%2B89gbJ8GFLn8xnmxbAtl1JahnAeKrkh5wEZMCgPwFqchwNxPomSUY9NNfRPIKUhYBI7GAfK0bsD0HiBK7fWQJoIBvzwihdzGyKk2vfd7vZIg2MocdZ8M&X-Amz-Signature=9f4722fb7955e2e9f1545e6538926698741fe40b0df5ce2559ab2dbe60e29607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=1685fba2ff4394a533a2e471ad3601286484be9dfd9a227a398ee824153e4304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X37PPB%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDyuEekbXD97cUVZeE7sssSNpek3Ro4cZuzpPAqWFcYTwIhAMoWOJ8VHV313%2FrHoWHsIOIiL29kEPxx3UMNu7qgu%2FpoKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwH1dWTHT8JFZJkGywq3ANqvTcZ6cobJ0wx4stTF3i5lCCxR6TljlXeIgxTdFNWTQUPrrcBVejmWpCzIrr%2B3dZdt%2FCDLw8TXe5jECM78vIeQA2EXuW03NoeljWV798P5dTvLIQonHdxOMYyaUq5jJ02N15WCqs1Eh%2FuZgRyKHC8IrTfr5UeOGw9T0iJt%2FGJandgPEXgDCfxu3DFO7Z0MYhcC1IG77BMQMah%2BccKLvxY3B%2FZZKcVmKHMjE6u%2F%2B7wmuCuXuz3n8pxyy5nRwUZH1VOEQV%2BVcDf25tX6GgfIP9SLCafWhrOJ17NdK9gk1E6BMOxXV4m7J2cTnZ6O5OD4dsSeKrHoa01fUfpJ%2Ba64YqOo7Ptr1dnc7GVjwZBflSxCScK0Upgu6%2FSM6BNgy9ZcMvG6YvMFW0RiumWeDTxMCZjlylHwAxPAV0E6XzrsWJA%2F4h3w0kVtSXS%2FSqszULIjUaKC%2Fp5xOqfNmR%2F7%2BJNKLTPHWiNylss%2FAvjDzEY%2BGfZmLoXxpHjKU8o4ctjgI5vQdHS7axscnP3vjiaWEKHP9HlO%2BlTOwmhfS1a5%2FxVALH9uHnmb7VckbtWDSaIRpyuROW49PaNzYDZg%2BB0FNaufVeFUC6ImfJUVz7bJmXjUJ9HQUlXzTEhtkiIeh1vozD639nEBjqkAVuUQ%2B0p87ze1ns4OQaw%2BjKgGuGm%2FdvG1V0f7sr73a%2FWbvFq8bXG%2Fkt1Z6%2B3T8U3ySeLPA5iz2IjPsXMe1bjMC%2BcNZxSCBT%2FzgVVhh8AJ%2Fre88kGbtFt60JwlDX40M9MijMHeImEqZ0guti9WY042lSxs4AU8y8qxtjjuTmsY7ofeW1WktevWoV%2BRISvg3quU93RipKuIi8ZCACdnS27ZTqmUhAT&X-Amz-Signature=362725e35d6ef7dbe05e6d07dbd2fcbc390a7bc511acb8f41ad99e76a070d461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=fc23287d5a9f24068c12e310e752f6f592d7cb46bb77b666e316f314e1a0a820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=a672a269006f60c6ab4096fe11dad887f3b77fef2714ee06c0e3a185e85c70eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=b6cf4557ae649fa34bfba40e737b4a7dfc234ab20ea7fb4e8d71e128ad48bc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=fa7c8fc1348a699efcbee044561520b777c66263ae3a7c2334033533fe2a4205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=fc1b0e67806f13d97bdaf56295ffdb148af70d04ab4b96cfb68532fb9eeb04a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=c90e373023fb9039fe38023bfd959748b7641e6f9194963bc21f3b4e350da202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=b6cf4557ae649fa34bfba40e737b4a7dfc234ab20ea7fb4e8d71e128ad48bc13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=06ac1e382a391f8252896629f7a4fd74836c3cb07107ede7d25d0daf87b1e25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=5eaf2e8f5d88b98e497c0bc563b3057730b037c512a1fed5520c711c816386e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTHJJVU6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGCalZsdPLbfDan9hSMvWkY1aDim59I%2BF7hJ7Pjsn1pgAiA31DNgzf%2FjMSf7oNv%2FbeO32Wg%2FuNQeYn%2BylfEC6AYmtyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQVGlw5LWidKncFOOKtwDM9tlSCVwlz3XXBijXYgY7pTNttiGjWR5GRPPBX4E9fylg%2FbY38AmfgS60szwX4NSgIOU4Huzy9n7RhLVrQNFlCAKffXPsBZgu4GJeqLD91t6jHH9%2F6%2BvAM7KAtztGD5ZBHz8hmdOX94HbvLEIjdhqylUQkney0VrpNFVr0sqh8oD9lM5Dh%2B%2FEOpOYPtfq2viEwOI9JqjwAf%2FQlDLHf8eCuX3n%2Fs21JirjW9pV1tZuYrfcqlbZ%2Fvh88ZgUZGDS228Aha9acfZynRXkrcgr%2F1UEulgObBK29o%2BFUCkJxC62x1FavY3DHcl8TkedAbGCm0eR6XOMh7f8d50HBGUo8az8rXEmf4%2FrBKOo2mduBqVRFcskewTUnuTEVKC9mQGcMr%2FkyizLTzpGeLQamc83ag4jwrhdjdxAsaq6D8FQgVp%2FGcevkYGWVvmeT7%2Fm0D2WSvFeFSGOFu6S3WoJ2n3vdVXJFAxAGg%2FCEf%2BuJimx%2F%2FO3dUWALPmgZH6KlbAH9oj6Vsmxl43fG7OOxsyfaJw5FIlD3iH21%2Bf19ydyiWCg2nGLSZmePQfwzMJrTx%2F3rDcbJsxeKWU2iCNdhd0Hwt7TCeYNTqEKm9eQMzDawxG%2BW%2Bi3uhIvxzmHs%2FXJIudwm0w5d%2FZxAY6pgGVZmDPLVt96P9hJ7JmYrfJU5TP2pMUmWCmtPq1KlulYXrf%2FJc77AcjjRGa3yomdnDCkYqZ%2BlCuabiOrodT4P%2BYy5qj0yjq%2FIA5YNw3Xn2kDUREBP2Hq9DlFS%2Fbea4Uv1wmaFB%2BbCrdA4NnuuOZiI7nxQBTg8yoc%2BvaPE1NZ9Icv%2FOivgm50xC%2B8wSI5YqTTidpj380659cX5jNqNfV4Xb%2FPzudsVFo&X-Amz-Signature=714d46c25c7e837908ced8784264c5f19b7ab78c72ec8d4c7fa94580c4a2a03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
