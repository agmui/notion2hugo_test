---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T16:17:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T16:17:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=04d35651392d5be491be1884539b7cbcd59610884d66ef1cbd76be037ed19b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=19f8caf73cfb758e5236c19d9fce5545f9488b0ac02ccbdfdd9218169381258b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=109d36513b902a054c561dec31634837f2a6adfc889985cabfca6dfb4822fa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=22f06dfa84df68651469bc0ef8cfa56a395642e7fae2c718231688023b156dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=7393a0c5212a14a1d0aa21c8ac0ff31195569d70db0f5d32035e97e0baa426f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=08a35ebf3614169524b5c9f5a8585c5a30ab4a8079006207b151752fd8d4e427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=6a0726fdd7f46b6f3456eb67a3b91e65247591a71c953a166a8eb7e85d400d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=135052e29cd1b4f37e78553afb53323b5956f973fd295ff7c802c99761aff4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=3eae4851cc65a2bc63013abc2b130a4964aca3777b37d0436e496e50a1103309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=bc909382ec6ba31f1d15d49b519164f4e32053d502f09e6a2a161a425e98e301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=59e622538f079cc1c9c2b46bbb1819b1c6576771fdb1cdb6e341c6883e62fcdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=ce6c2387bbfa03f16084dc055a37ffe4ef9c25412e40fc756e3a6050185fb6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SRGBEH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrW5nLyKunYUZT5%2BU%2F7%2BvPIGaqNh5YziYUU2dJ%2BklXagIhAKjlwDuscNwuqvOHLVhdE%2BVJ3oxF94yuoQh8V4Sce5D7KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0Dw%2FLwO47cWYWchAq3AOZps69KdRpsUMKpQBwvGeCfnZzfl0y5AZPYE0JXmwEXh8ESYYflz32p32GNdaBl4IBUpL%2BqdIopzYhXTsr6yHvYmRvg9%2F0h5twNAMFh3vacCX9ODPKfzFJQR11x3qjo6MYM3FFwknzPgwHzYBLnI%2BXJbMopYyQO6Avobahjssx4BLXtmu0t2CDHHRJwuoCakeW%2Bo72dHsO261D%2Fz%2F61TyotByi9R5Fgh3Cvp0YSdo%2FCmOUiAqZmEyDJaCos38iFjHM49qHzBm0vnhT5Ziga%2FwOz1uhRSBvKHBKU916%2BYiNbnlNG20X%2BE%2BHQTEyTka7ggDQo%2FaHewjkZn8Sv32snZT%2BS2T9M7owXJtUH9GZ7IL0Zbp%2BsN3me5d6gswiqa2NhgwzR%2Fl88HdveH9pbRzUBw4fV4nSkgkMyeUYpLmOQin3e6Lyt1MDW8bxHeK3vzGgYDBSAoxP1R3%2B0pELU%2F1wBIjzgCXbesmUwmuFubpvXMnWwz%2Bwtlh6dmUVqzybFCatDxi%2FFGNhTZN5xzAq4bbEbcXZb5qcPxgGpMXPDVVeWSinrIxfzU3LRSBLvGjsaoIfvckT6gm%2FrubtmXJA0xL13%2FrTXt9jaGTsrO2aanWnZYVG6nnMU%2FKvOS1u8xHpYzDx1LPEBjqkAZi1YZZsrA864WjNPxGY6gF1oczsQ3JwuthZCbnqsAP4m%2F3NzFYD%2FPhFn206XsGnTfMwWuGf4YPc7nTES3SFEYiRL%2Fh1HAS5GeMS6BrTbB4D8Rr4veFcRfR44OtExeL79Fd5rBYB3RkqbZKSN1P11WtgWEQDyT6W1CNzy1jaMxxsy3Gu4JrTQV6%2BXCWQZClG7AaNnF6tNrcqHCFt5ls2e0dAc6bb&X-Amz-Signature=2587c64507ac45b8542c42cf2ddad633577c8abb10a6f8bdc4000985e7f473ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=4dea32f44e8e85f30da9b715767db5cea5e0325dac325cf89fe8b4a50d7a9583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=2f6b279b7ec5b87c2ab9e771ea6c01846cce50786cc4d3d4236ef6b7eb0d2201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=5593a80ee5e80d4e25f69cb82763dab6e9280a8c6384e847826b821d1ca5da2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=fdcde5fbd8dd6acab0c457e984b8eb4fb8e39148cf509eeb3eea131e2a4a3eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=b82ff541b8b4303ed4ab5ccc55f43e5b90047c157a7349a1d061159799f56df2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=b9a84a933e6dff8b6e5241811accc2ea33732e873e3709bd3a35649e983960f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCT2YOJ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T171323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDG5X7yCWjMrKH1jiUMgjfLJom0rOgK7gPUYRHgy9n%2BwIgTuMgfMOsSgE8HxOHMIxHyE%2FKTTqQaakvNzRy9IgGd2kqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2%2BQOwYV5oeGmpi4CrcA4gTApJMyj%2ByQP5hlfOslcMxvUvQLOLppSYdMlBRp5MpiKmuXZL5kxfKSm7YGL3VZWSPQpamMQ%2FDOGI4XzO8GAGZftjcWJOtg4Ar1%2BSjhGzAeYCJgznkvj%2FSkOdp2v8VPzCancQVfyo8fwnFNey5qRlwY86fGDLU8ibxPPKs1RhR5tyHOJ6ij1hEaL7pR7YcXHFH0RdbPwEghaQi1B3GozFJuQkTqZm3UoxDq0MafB0Sfph2UgXmmFZmQpbzsIhCFkFsYf%2FM5R4i5QfBRHR3%2BrlnvlnOBLukLbpn328kKEYenBdHM2v60%2BjdkCUoXOjzIYU%2Bnk1s8HujkUpDV794wlZ7%2F3pg9SW5zSRiWlWLIedbZKUN9WD794vJvXgyALMnt%2FHhdJp5ycpziEPZvmLq%2FASkNysG1xHdTBvygDeDIPpZhr2gC2UrvwyDfxEp%2BPRet%2FbUJC3nfICBBVNCaXrO2LY1jVUGrfnauVvhojIp%2BAzeVX5vq37mhadSTDrOKLgJnTsAPIQTMhQtqrHcXpphefRoXKUEDACYqIDsNne0NOQbC7oy6rdn%2FMqbETXET6GeiePXssN2HaearGoPMMpz%2FqmQIeHlY0R0Fz5JF%2Fow%2B1AhV%2BQi9HwWkQEVNCJBMLvVs8QGOqUBAvNcemnaSwcBNDrM4H6wtuRmF39zNuYo9PI%2FIaCkLgAsILnbqwCY5ljIw3RZAE%2B5OAq9ISPJ9kZycSELhq0fE%2F8ChYfycVx25h8CIMUqp3isREGP1Ymq7COOnAlvfTtS%2BdCcdAK%2FYvM2HvoD9MLgNxAh95XgPs1TadFuDWtncryGXlPBZ9Tl6TdGTpV7LKVk3nCYiqGhBSBSW71DayYGfnOGCAyI&X-Amz-Signature=dd72902f540b2bb7919aef5cb2f84b061830cd461ad9e2c6f2db064a7d22b725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
