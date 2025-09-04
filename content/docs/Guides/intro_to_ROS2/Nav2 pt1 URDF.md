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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=67627b18638c91d9568efc65fd69908a2b6377457dc8b234fcd7b6998bc8da5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=61ae30985579180728efd20a28eb91a22006a53303d0fdf7eab618ed994fbadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=16204e8be1731ba715e3a87fa718c7458b92b9ab109677d2c17874a644a5633b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=d7dda42b2843e0eb0ce0734283ffbba3bb3d11700b5667be4f59311e1f6f14ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=845687036b2a16bde8940aec0d71addbe7d39d097809bb29972980c9e81296ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=b40fd369a83db568f0b63950c5b57f3f319ee235b124101b1ab0a99ee812230a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=1767812e109832ec0479cacad3af2ce06f35020d17b1cc35cd18353baa3a03b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=d1098d7633d63ab50eba2cb2537fba999e6e96c6d757564a35412ec8ad658542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=3b979a6756c514f370c934f38e195246a9512a9d690ee4fdcc7d60cb0fcc8f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=da1a9bf18f5e3dfb1aa983a7ddf3fda658560dc5c8f1bca0af5952d5d04a16b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHCECVWZ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0MrEWpLgss2WnD12Ul3KTct%2FCF121pZPCMHI4aI9QoAiEA9ROtFX9dEGNYEynd0mnZabgCHL5qDRx9lPsman6FzA4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDPi2wqpo2ul9l28W8yrcA6RsTqv%2BxcUjfIN7Rgwxdix9kWXt6RsnFT2IFLuOMao1HVtJ4uUy6B0XiuFK5otTeQfwIH69p4WMyVtoOQTNv2JIE8KGL9BPtnl6SmZyM0v9a8vBuWUVe5PFnEQJ7kSKNsO3iEahtUH9R6Pg%2FMlLyPG7FSmcuNRO1KZ7I0v3ya2uCnjn6LXnaSiC50bvJkKI7cZecoR266trc%2F2NYqR5ahnuMJub7Qi7kxj8EqmXrCY6v%2BHTv%2Bkvsr3EH7eXuS25vnKVP5bNgVn0PrwTQm40JakukAYlKNx4Lyu4lJll%2F6DaF1opp1uyfTuXvFhjX03%2FMinKxSm46CN6xWF56NbA4zZugtgrvAybA3DtAIgQkB%2F0UeckUQf2AklD3TQvmR1sMfzY7fxTSkddA%2FN1nEi4CEhjszhzIglW%2FqKpjUjyreLaQQsEFAaKFWfH4lASrAobG6hJ2FWcaqH0uliwTu2EnqhD3fN34kl82CSDWeSM5Fzzua9%2BrZ%2Fa86U0qDBoTuelqC9zNYB8Lvl%2F%2BqY6i5bCn360rkO9U3MfkUHyWGPeEVo%2BWbjzTMr89VP7ScGHCAyT0bFX2HLR5%2B0gLB7UE8%2Fo3mnJetBLgM4bAFhDTICzrBBobUXh5JrUyEX1S%2BmfMLm248UGOqUBcu5FrWpvbT%2FgrH5x4IMiPkuz65ZRCNYicMd%2FfZZHINknPOBJMWNUjZ97X6D6LKtxTFnDNc3y5uUtbdTjv1Hl7ljv%2F6qU552EQrlravtgc%2Bg2ZzSoXVyfGSF0ZtshkccZ%2BOIKmIBL%2BDhNIbexKUO7p%2FSNA8XexR8fn2mbBysq1nLxYT0hZEgbKCvlWszLUEP4OI0YszYPzZvQWuvCH33ejiFzQZFa&X-Amz-Signature=70d85f298002b65615068a23595032b6df49afe637d12db6bbf11e84912aa331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQQF6HQP%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkVR974VSjEpEQoJg23fHvSF%2F04F%2FymOlgdBQ%2BxKr81AIhAJg8sqUAtuxg2PivXuZO4nAFd%2BMWzugHMvoPXWsDgn5UKv8DCFEQABoMNjM3NDIzMTgzODA1IgzAj6UKShtRpshjMXAq3AOP%2BHVCgqPhiNu7E%2BBW7oI%2BBWF7YqqN85h6TqWs9mEHkRdyMjGBHbAH9m9fziAXOmHoaXEuVVarfextdC4o9mKHQ0YlREy62wfCQg%2F34IAr8D8nHDPQaLd2nYHYtkRQCWg9Ah194wj1yXMyLU8W8v2x6XHo33NRTi2cj%2BpJwh2JGFYOxX2bj1SujnBM83%2BMoU5cbYQfKPLzY5F6di83lMOYnZi5sv5dFguapO7uvmZQ40dw1SrA3vy80m94M%2Fb9MRPWhP5Wpc2ALNdFUQqFUSXqlCyrQMr8Z%2BWtFOrp8vgW1FjDxjnn9%2BjJzPlF%2BYLNE4LQKCL1b3R1Xm5HsPM1U2r52To64Mp382Bl%2F%2B316EgrRc%2FBLbgXahuH1VbUObZAA0Zchnjc7iWO%2FsSgMACFN43diDsSRvxtyZnr49XHRxwWcG8UaC0OtdWpEefrtki10Elao%2Bshkj%2FBYFefVyJAlHnGpygAnkWMs7B0i%2BFob2BLkVxA1NuJP3Tyy5oIBHsuH64oaaev1ZFP%2BDwZQ%2BkxQnXxU%2FWdr9Y9irnMczDTBMArmVxoCpDV7KnJCI%2FDh94kbwOlqO4QctivMg5YCSXz9rnvdDDSILusZIHaUuOddl9RUgCGVKAVI6v6OsDM0jCRt%2BPFBjqkAXrcxRSwENQKClChQuuQrKs%2FzHSsj%2F%2BBYhxUjKnXlOAqoWyc7S1PVg6LgOLCsJpwEGIy9EsZc2knWKN6jOBSGZZoDmIUljJ%2BLjzz13wzFEC4JZMj%2FOv5Oi0oBWWBs%2FsKUNEo3bETf9BvL7dkJpNpY4HLFYFFnT9WInkqHlQR%2Fv7SV%2FDW3BpgNF%2BE%2B2rgVKeS0lNQ6I%2FRu7b98D0bUGxaPBz09dRi&X-Amz-Signature=edc139c7ad8c90fb7fa3d2ae1ef791dda339712dda6df6f86654a8073caed4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BJ7RSK%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThLLZ47a6vMr4n6Hur58VFQNrYTEw2%2FGnPrVgsxRESwIgRJR%2B1r4kauaX15SZm9DkQxvUDLgK2Xg6YLA3A3miOVcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNg59fLfm3oopRFIYCrcAy8zEPy6h3vBFLe6A7cAk2DHm6jlWpv4O4o18tcHbhcYD9AtooNm9Q2OtXFagdyzsvqh5b1We5o29Vnfr%2BM6yDqhw6rJmvoZBZ4PcWy3cGwGwdCfjve3W5kVXJijMddF0bxF1wNt9GnxzsylF1Q%2F%2BWE4JTeUz3WhpBdGUng8XZ5G3iCr5OdTo0DwkhC2tC4b4%2BlXCk0h6VIVwSMcOSRLY0pPUFPlNs%2Fr7VyXq9gZ6hdPyXYMLuTORzY0fhGT56l%2BMWtXdOAjn24lvmizRFRoRnb%2Bip%2FprgR1ebmH2un%2FhjfaRfEdpOJmgJx051ju5iKdL%2BJymMJTa5WqwRpltbc%2Fwn2CNHZ0o4AYC%2Fruh4K7ryPoLgLYZDFszAtdAgzKeMSUTULZUdiV%2B1A7AsRGq%2FSbRbg%2FgWn%2BGqgkh6VfB84AVJVajTYVD%2F63jgtmDJeifiamsCg%2BIMM7iAR%2FaARp5dkVTvH7ZCZFazFeVdMlLBVQyA%2BZ18Iu9%2B%2Fa7l1B7CYbhpNpvikctQJ2Vu%2BdORCMYD0cvRr0gVSHr%2BnY98dFPaqu66%2BsW9THovFsFMrX9Mf46A7CxML6gkwMj0FBeRuHYI7IUSu0kik%2FY1gZFB0I3HTZhCtDYo7do%2B9MgjnfU2zGMLa248UGOqUBuFC461F%2Brhc%2FLHfLc1RhO8yOWJWBxIxTPiGMbkcvqAqPRNs7zsbqLexehrJU0vLaVDM2pkoL5FVAHmWV5pefuBzIeQTndxQH1mVjwQ2jhzCKgHAyG7HVx3RC7mql%2BjOG0zWLtipKwBbtmg22P0cvNRThiNP1sMa1txWC37u3LhYJDdxGNbBleHGLNE4HFVYCUC3Dx0ACoLUCV09zqcBK7OV7%2B3PI&X-Amz-Signature=84f43f7008a756c22b5ace6f292078b5a56df8a8a15007294bb76050b40d6020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=28bf7a3c4a99180ee158be57878436af32c8945eeec7b1bb2e1393e2843efba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXJ7EVJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH%2BKo31qmWsO7TKoAEZZ0rxaH4hLajmb7d0cgFSjeVeQIgSf%2F1VxpJyeW80tTsyHUzV5q%2BKjSZqPR6my1o9rZJZ8Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDD8PdSlQ1yIBM3j9zCrcA0Bz8oK9ZD83%2FDf3KZIM0%2BM1itGx4T347oHl%2BQv9vgF8P3SSSWI5S2dgBd58fXhRa%2F8brn9QGQDV5aw4y6k2TFuakBygUy4iTHG5z8M812uyr3dA9Gk2J5qqACHmCme9k4X8mVfekvNj5jIZuSTAW%2BTkfKrkAX%2BnD8gDkY7EZ5%2BMfP3dy4Ygtd3vqm%2BzYRJOu8I2B8HiO8TWhhP%2BShvKOHjJVMzv8KpHwNIDOQmOo5wkNuullaVIPcg8uM8hVZGltdLvH%2BivFLrQ%2BpQEhp300xUv37aetT77BRmOLiORn0Gwsb8mFamNqiEUo4DFx%2FelG%2BNI5zMysiwYKe0luXJ3VMy4SnaRXhbCk5gTXbHv3qJ9i0CnOxrAcys2ei%2Bqie95dSFphBH6cyil2W6C1Pu5uOtOIw%2F9PcYgvJBtIfu%2BAwjccYsWf9rJpfibtiQJZlvEP29WVRs2ggdV%2BS5ugxoUEj%2FzzEaerrMZC9Q0VZpSPGBNwE6jTXs5UNImIAssSE4qmvVRX%2BlHLi%2FfYIGX%2FdG3skeQO086666h%2Fk3yCicgvTYeVt4aXQQZyvUkJRRZPzjA8Qj1K8N%2FrcsHfoJkkTUSfQ7%2B3v3c9%2FkVkJBMa93tOi7qagM4dFlZwJcfdjcMMLO248UGOqUB8eYIahb5cSj1LIIwWNjz%2FZtPoXfLPR0%2FFOgMB2cCt1C0X6IWBQfa1JWEI4Kyj1%2BZBzguByJUUy5bjZKhy4QXJOfUR0w8jmsf7UuWhBcUWzocnebyDUapGvVpiHOCU7WZUNTIMW6%2FrW70iSi7aCv2S%2FMBT0AxRtJO9r86gfZM6RAMRRM2h%2BZ%2BxeUhK7yuFZaWypx%2FwrKGu%2FC10FjCfydblvsKTJUZ&X-Amz-Signature=9fe78a6f26ed0139f24d2bf4229a37980e9488ed426de35f05ca62c101157c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=bd01e7cdd938f98e93606850c0ed8991633dffbfb9446852759134a9ddf8ef7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBWH7PCN%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNMCdYX%2BjO0R2JAkKTEnGXXaMTB9Qu3XBzLK3JbGeyWAiEAlfbSevXD4WL7IedOOMq0U%2B1WTvzBV1sO8UXWj5bFyuEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCOqmvrwbFBSeYxzpircA%2BTkSqc0yPOSLX5EevPaAHSSj3vLuvrSOAAUS21VkwNYYqMXMCxrNBVgILH5KGbWCNEPNdGeIzNUC9gO2mK3n8bPWkXb7qBHETQN%2F0LoaQAaHHIzECVts0fskXsyIdJ17n2SoMnaS2l7TvqIcxhclWRaUXrmtdjPOg%2BmrlUnLredc5NIX%2BBCjhnyspW9SBWWOIG%2Bhpnc8bZEOyD91fhsGKGFiV%2BcWRFpVs9sgVQtV8q7q%2Fjob8YQg%2FNv3Xw%2Fdef75KBe%2FePQwLw1jPmQZUrYPWYIV7rZnVp37hf5Sj8%2Fjjpe8%2BiCPX%2Bl%2BFDEY7BAdndCUzjF8iWKfixJV8ahwMkBmcHk7A8YM0NIJbzuA1de4%2Fg6XO5I8lOFxcc%2FMiN5LoDfaQ%2BvLwR53GMKOfCa%2Fp9m0055Tv%2FW7ZAGxeTKbmZPKdtC%2FMAFANpryVycakX%2F4JvQccewrQ%2B8uvN02XZ3rkBVVHFbAw6nv3mlN%2FLtkO8Le4cByPhs6%2BL5msAGq4uKAy6gL0Jleqy2ZUGGDdDIOXz1m8VnrjcSn7xT3lMb3%2FBrAuF0WCgCxEw1unQ3I73VTSDsCwDAspz%2Fa0tBaD2q39OT%2Bs7oSu9EnqJQJSnnjmK%2FSf3pqbpdltm6UeONhGcyMOi248UGOqUBRwfpFR1V8xwPb5k0PLpOEZg5GBU4cYE%2BIqanYNqdFDKlbEgkBvNGUk7PH%2B2rGCRxcPDxLjsE6JdrOJORqgeHzFZUs%2BbdMbV3tqVqkre0NaGtlKNn08kuz74JAPGY1QLzoVVABStQCsX6S0S3RJQyDqqcrMuoUsqTWn%2FVfi8cW%2B0bNfDY3kOlHbczt8Ydko5%2F0ujDQwUlIKzVoa8lzMnVV8UBQVd7&X-Amz-Signature=edb6009cbfc5040bb4de75864a685b70ff167eb68e022f1c607064cba1554a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=cffcc06db94a2be609df8c85dd3f458c7e87f0e23d29a99b7df70d447477bf5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TK65HKD%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYxlQJK8CnHx15k14BzjxItWJ5T0DQ2wir5Fi7PAzsXAiAuy%2FVoGc7HgPxh5DE40%2BK%2Fqs9rTrxqZ84zM9mGqe6JICr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMd%2FE59ZeE8bGMVLdGKtwDisgWpyFhoKCQhIO%2BelqHNMm%2B%2BO8v8X1eTlrOJgxgPZ4heCkTtoVbRxzLOrdSMPvkYTeLlujADZOECodwAP9kb96gm1uu7AOZFUHEFpLyiaqSiRBhjVGfLnfKnB4ZB9QcRSyZixzDtVSb51sBtUI41NCBYlvxWQzCMqqO68xOjwRAb9LQQfoXMbc2OH1triTH3NyeILKqrOxbFH%2Ft9U%2FsLM70he0JNhpdby0PevoiZgqsLanW5ZPPCkyZjc0ywuYmFtnRbGaYtgau4c38joz5AUwKRXuS3z1k4bHcIVDUbWRMNa%2Fftds%2BRXp%2Bcr1ObMhh6grHhcUN%2FSPB9amtT85%2FEdVSYTnFxTTggew2BKsGRMcmRhL0NFqdEFYBws2KZkCpayw9h0dtU3QwqEZzyVvFa5xvv9e5PJPuGdSTruEcwxLecrEk1Vae6zxcXOoT%2FD6foKI66%2FwKZ3QHb%2BnoZzCC6I%2F6ljh8%2FdjZlWUnZrHebgvx56ajw8CLSxC3gHK5vVgNwFNPXA27f6UMLfch7Bs1NQ1AI5FBGLs0JyOvtGao1TFNnjOfdsBnMYozEaGLPpabC%2BhmUUo1ykmEmMAawOoXpOvLG%2FYH1IQ9EU%2BnBcpbqFPSEUjVJccsNY9IeG0w2rbjxQY6pgGCideYshs%2FW2syNWk9UG8%2FMUODN9fFQDJHk97vUEXt1b%2BlJzjlFJErKXs5tTBRbSWJYayBEeoR%2Fty9kL%2B1PH%2F1ahQI587pCCpOA5rfAislH61wx6PTlJR9%2B2H1hRI%2Bm%2FFdlpiQ8nSA5Wk2aZmePlVD81yKivKUJKyzFWFD5OdpVO2O4dsJ1EQWlQ8WmtKYx1abeW3Q9NmkWnmzr1nyLh%2FQGTuJhy16&X-Amz-Signature=fba46fe408797064437b755b61b5300924c2be57eb8bfcea70f034b73c67a30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=109f16b623734839c86e4e917b42d0ab41d032e3ec3f7e20a3bc9e70a75ea0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657IKD6GH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDr2njV%2BGG8j4MpOD2gL8PjxiWFuqa6GlPTfnNT25dGrwIhAO9U6YWyoNBrsYspJjRJGTohATRWjNHUf0oarMWt5jKqKv8DCFEQABoMNjM3NDIzMTgzODA1IgydXJ%2FqwwA7JNreVP0q3AP9Q3%2FKlr5f66E9ymWnNkVZoRiiF2nJEiGbs3Gm%2FbiyKfYSmd3jR7gafDnCfTr7J6Akv9AQ7KHPdq%2Bb%2FAn9d4EZX6yaFe1WsaZsXYl6A7TPnLvFO6UnnjlNOwKH4b92q%2ByM%2FLGFyQlQeX0zwmWx2aB206s0CVChF%2F9XjPbJGatqFLHG0q3u4SXody7UWMDy8n65r0h%2BDfNp59KGlYVzgOHx3XyDK3%2FjuU%2BUPOcYvDR9fhz%2FbMTJ%2Bl8r9rGFaa1SjWUNOqrLdZrLZg3dSJorzGwmrF9eBsoDtAlaGadwv8zxQDGFoWVr3m1uQk24sdozI2MDLSkN%2FKJhm4MvotXbckSku%2F0c5ikMywZcZkWTq6sZ48L2zBk6rva6pTSrB6R%2Ft7Wg7soDnrkSGxRAsnqz2BzrOOmVMzb3A8oRwXtaVwhVfA2Qx%2FdBjBeidFSX%2FbacnFzW5gpAoZgm9QVj7fBFWDsfShHc4Agg2PkzueG0KlaP%2B8z3ULdcKV%2FTejoSqs1cOhloaIVEjer9%2BHmBKxbe0eQCnj5p792ShWiZTLS1imMcKoxmZhi42ar%2BLKDtJ4F4scl4AP49rBqFAhxG%2BHZrCsYaOFuu9OaGDTBgqDfkAHmNjnQHlgMN%2FaasNwBojDCct%2BPFBjqkAfgzj5qU89ccayVCEQJ9OnJE6WHOQ9l1EykHntqpF%2FA7lfReQgwur4M6NFxDIy6LkjFMZcCfagL0%2FJO7Mk%2Fv1h9g9q2kjtv5nvu%2BmAyNfMlJnintS%2BWnOIDWjwMfvcO1rTesTB0NkhqnqQ%2FilbntyYi7qioa2THM3Fu0JsP1mfQDgCoNzotY%2B1Da6HbAT4vWu9GS89BoUAZ52zbRNg34WcItb5Hc&X-Amz-Signature=89e90293edb4c059bc07a73820e4bdaadaff15319bb072e6635e7bc1821f0224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=282290b18b2ea452de4a9c3833caea9c9105efb55a380123a5e7026480158bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y63FZR7W%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA7RCIUXEvDtF58jUyEXj1M8qUrk703g8UK7O3KXlQD%2BAiB%2BTkPDDZVAx9Jvo1feifnmHbpx1I2XJ%2FtfWt%2BTUzHbCCr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIM0KLAwURWVFIVc7BEKtwDNAUk0YO8YGfx8PrNhBO33NDM048L2I7fU8u%2FqRxpAZn8ZVh5h%2Bw8uomnfFWcjF%2Bjgbmyobg60pN3R1Yt%2Bpl6CIaAAiF0UlU2RaU5p3d0hzCchh1yTTHqvZIeuv6NDTe%2FZFINhRth2%2FYVmiAZkCeyEAq55Qg6sq1jeM%2BtvkHH0BTAL6AOx15kpploGSC8rn0u2Mf2ITgAmFCzSdkMEZQso%2BRPPyZ6x0Ljz2E4AiNSr9L3C%2F7yhhH%2BjxXjpinrMTGpK0jJMqKATifrfdq1aebmXq1tyMo%2Fv1CwMXSjphmynIAbWUcx0D%2BsfqyczNef5%2FHdr3u2bcsTV1aCCIXyGPPbVjyQKWhfcseSn0D1hgC8Y7xtrPHnjwTWf7FnjhrRCCu%2F6rGrQ%2F0vHfpdp8V4%2BsceIDYiOaOx%2B9HEcb8SExN%2Fy0627aFY%2FTgYJYB4z4uy7B4tu5RCKPdJycTWJZtnqFgRQiY6zyXSilXwbM2IKsa1ImBTTtQDrSZ2ZcUdj2JIFY6xWNf5Qmb0yNijrnG80zW21UfkNqqjtHQsorpYu4Q%2Bo%2FSCNyM6qU0SoBQJ8rwxrXctdNE%2Br59bM5xSs5OFdgE%2ByAObt3MhpyVg4nCUn2Lc4H5wPXRWiR5kJ0%2BDutAw0LbjxQY6pgG2QI24JWTymSutKMKv6Jdr7xTL%2FxLYMmNM6wiz6oubbXAM8uPoRfcjNOYaY01DuMLQyhQ9KTjNy8AvfkhhAhcHBOXJcxyv3Bz6hqnZ5H0z6sX4mNnjEgvOghbBstGMsjlqxiNL7U7Doi4ahNNUtKCEJAT7joJhiQ16oYj1pBRX1MkvSFVyyWiaLw6mkZq86UkTP%2FVp%2FJnEASTm0rim1MAbYRTQiOdO&X-Amz-Signature=da772725c95ebcd67b8f5922372d3837dfe12e32eb7b9716fb5d1a274cc54c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657SVHVKK%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeEGZCLwIK5kB87T1ZgtwDMgVRx%2Fsld2YOnDc9JFuIdAiEA525VpBJ1cK6iYXp0ZtM2bsmL7BCsIbbAnfCLYDmfK98q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDKrcZCkYukI24ulacyrcA659wmlPZsNnz2aoYpNJpkLh0TDT4tkzrOXK8Bf4%2FqbBbTScyq8DfOI%2BdWnNCxM5%2BYzFWGtihjH%2FJzyGhFGKk78p9vTVX5aGfdVitlWWGTFQfiyCRKTzh1JI%2BJW8nZ8Z%2FE78cs0euOESEhUdMlnDEDym7JT9iLJYv7IweqNcojkql%2FWLateULvvns4qmMYqCifMthWPC73NIjPBo6A6JkTyTvBIokRZBl2u8VW3nsULoRk2Yk53RMmVr%2Fz5UdmbFXYOEGbntaib3np%2FHmurZy4Qh6stWsN1vLllkCIxVr95i4dRCeoS96TnPElAs2Yj82nNF9HglxqptFGV1S7bktQKznAm%2FHZwP8mJcNqkhmXKDMUVbiD2OA9c0gZnjMv8XO%2B3LFAH4NNgsFshe4kXClV5f0cjIgRLGhmA4k8NhllIgmGNV0jKB1sx0gFDTDYAwgVBsmiQenGib4R21%2FtYlIW9%2BeFN6akmpevQzVKyFaIkaJzyWArXwv%2BqIB2xcSvegtDHuvFluzf1qGdCXrmrcezOqfMrWZ79n%2Bdg88hEuWBFXHWUrtnnvgjx%2BL8BEaCykMqr92sXXTi1tgmjhZJ1lFgLg4fzIaDkHoRDUdf0SQCLef9Vo3dvvAxdgFSJvMPy248UGOqUBnbKnIXT7EUNmcjmtCzzscOlT8gXynzXHOryCNVvCAoHJwzqBBU2bqCxqFx%2FwMaPSuHfKAPgEvBKy3%2BJSmPGBgdjMZhOTZ9MF%2FT4%2FuNmyAZoWt%2BpnkSBWFhmyq7CoYZIMkMkLq0BNIqM8U%2FnmJg91rnie2VjdfH97JJFOV1B0Wfr4zc9DxFV1gb4PjjHTaVZXW0I%2BVN2M4uacp1NcIQMSDmBB9Sbt&X-Amz-Signature=b060c750c9d97f189682968eb9722b4e46d140018a3eda218407f9595f384d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LBWZVU%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw0ZOjDjhVquZUGjYYdZoKEaRlw2hg2tjJRH5mtN0T%2FAIgLyo0aCSUIoZ4cl4wLOsQxWGpvdvOAyBqeweE67Re4uIq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDA7zX9GhXOZO25HP5SrcA0aUXHm4j8OSLLGqkWoO5R2MdHQ0sShgAd6Z6Qv8n5emWSBsI0kJc65kjYgRGT%2BPA4P%2FqK7tDT3Y%2BbtVW4lEZHQyN86cOg3JMhltc6tG6thgLunWequtkYbu1e%2FV%2B15PyHctDGgR6rC2OKTvnQZjwVar6q0AwH45%2FTOnSEagLcDUaMvMs4jFvZuzK%2FYr0mox6AJfxJtzqNy8MH%2FxGrWxS7SKdh1WXbO2jvfquO28Qw%2BQpbddf6GShfdtRaGtyw%2F694ZtbQHqVHKI%2FTZ8UtbE8R%2FIe2xSKjWVmpWbFQUtTqna8J6jEP4B6vZmMc%2FR%2F2XJek8yC2boU8TQdKZLE54enRas2xV2MhhqPcJ2L51YInXVJqk5ENyy4p0Il4nr5iv%2F3GcjnKJuRG8IlmyE%2FK%2B%2Bg8stizFQzpzTvvlroupcIKo%2Fd8hR1KZceZavhOsBtzwUASqrUcefFKbTmWejQgr%2BOvNUd0Fv5AwJ4OKLq9DUWEVdnkGtDPOLAMBgAy1nJL28HIfJAFN%2Bm4i4rYVOdfCQ3hnPnMXjQCYBe6AztZBOE47nOwcFuvMqYw%2Bkbe2zvMXFWpgEkq%2BoJOlIINwKBWAj17k%2FmDvLqTVYKShA1k1pdgaHsz%2F%2Ff8SGX5G%2B8xxJMOi248UGOqUBcjl8RH6xe4ASMNNSutTXBoqUlc585cjgmuWYrFj1LCRHWlzzvQbLUnmUWslM7K0CBVtdOAs4g%2FYI2bWfk99Ucmoh10B4ACAKRpADK87Y0nicByxSNcmudLjbBu5ZSSkgVxDRFd5CzOElBICK%2Fzusz4qFUfKEZbKq1y9JG%2Bza83f%2BEX%2FxyPhoZi1biPdpS5n4dXg2VP%2BSiQS8cgVxKz2mFiDuX%2FxX&X-Amz-Signature=d0aa4c1bc8f5dd2064149d96f9483278681e793ecc9800a8731ca4f7d456a109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=ae41de68704c3b0ba91f65ba370f2611052c04b142e8589ab1a81deee19ea824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG24ZUFH%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxRg7jYANcE1sNlHGdaP4YUD1HCTF%2BM41duNceWBf5IAiA7auvIMFDDL0UIzxb2vX%2BiV5Cjcfkt9jQpb8WSwfRVzir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIML9TDPIIT8cTCphXyKtwDyi12x%2B2qw%2BhaOFrMZR8lTRQ4Wr%2FqQFpeo2WKEI8h%2F6TELjuFJFcDRDD5RkU7MEUXVztahANjD1CoijJ8Vl0jycZe%2Bx35eUJN5ha%2B4%2FnQ3aIWNyMVmetayf1A%2BqfjLGLTZE5FMcXxkjTGKoN9AP6xst9VWI3kx8vebFDYi4wKRFPWbpFvSqxrtdeERHH8yD8ola1wcFYONbYk91tZ9N%2Blwo2teZJKiujzbPsTFDTQEakOjAXO2tbCGGcUjBPNdcTxLMX6DMjbnOM6hECR6gNc7RlKsNxsW6YMXZnf8HeMMtJ0egn%2BuoHZV6g7MLR09j6xnEWtUOknYlZhRaarGk%2BrfATdLJ5tBGmoRlBUh4wRtY%2FofRkxBVbVzeW9k9%2BiD4H7XOBhwRRO191f6nMtFBKGADq7tW90DH4P1G7N8DiKp4%2BSOqqG8E%2BU9wffShiYh5N81cJQJeqpmw7Hz%2BqbxFXIwJA1LzBGNQqJLo2RcHaaE%2BRcNXOXziqlUiugH8zGrmBidnMxJD%2Bl3hvqAyOszinsz1635yY9Hg20FiPdSeL9qIt5oAXf7gsKPiBULb4Zyb3ngR7WYHw0M9okkagbc%2BFKitp95bkNkxMrGj%2B2lYHsIXe%2B9sILOLGX%2Bc8HiW0wurbjxQY6pgERmM14KNpFQoFcBarv0gZgQW5wpqcYENGPIXW3%2Fnt2njurgQdBVmaTq9%2Bvv%2FA%2FEvckP4hOgz71%2FhtQSPrlzvGcFoYwsV%2FBv0a7jnfLHtdh%2B%2F%2BaosazxmHmQ6wjCpS7MjXEgRLLF0QxVW7Zn79dqLTTIsoFAiyStOFTpxpTzH05h2NvB97UUbR%2F2xAF4QH0Y4imjDLBe4L4Gruws2pHDu9NMkGFrlLM&X-Amz-Signature=6d7a33f45f9042a0bb919603b7ec17e501ba6aaed53def9b858d188b6c50011e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=3370d93304375f6ea9db73427452327d6477f21782b67658e239b31174a8145d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=00d50213ceb1bb3633a9a89b8cf39937a286c2d3b82182a116df9958be20fa08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=dc6661f93e9619606caec4368bc4d21b061410daafc2dd5751c2ceb3b412dc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=34955c3ce6c2d21e9af125cc36fb02219d35db4878515ec7f9da5c6356f7bf26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IIHBIJ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBe6cD1NurcocDB76vfIKr9Hxaj2j7JLYx51ZN7qfcXPAiBZKsePqwHnEnkoAGCjyicF%2FOLk4GWoK7RJ05pn3mLGCir%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMgZpVF%2BEqo4ECEKf8KtwDC%2BpGhwZ4kRvh1X2BX0hPAMStPxb2xT02N1Y78oVMXa%2FxEkeBW1TGlssNSk71ZYMAF9Armt2BwcBLsPK6kn2OiiojJV7jVLY7LZPTvFvA920agL3dUgFf5gUr4oD2WS9t4quDSrYd2UWG8mUb6PjYDu81i%2BHkyfLcNRYaQr1rL8H8tTwIhISehBD%2Bm2RCC%2BzTtmIQhyjrxhmrG%2F%2BRowWHp3gOjlTrqP0kMHHXBTXPfu0YhTY69rcFAMu%2BdOycK6XJmC6666FmYLzezJ06MlCnfhtxAUxw%2FmNjdk4BYJMPZk49K4Pb4meZJJFJ2bDuGum0aIVLOuwyYjEX9vP6YvDQ71fuWPe2rAnA85D2qDhjdHZ0UsbJFPq9A3WYaBrXaY6SWTJc8YN0LuJGRz29dF0aDm%2F4QKlxi08wjoOUEXHXwIHreCaAPhc9yby8pbMZq4wgyCBsQFHpewTJmQcbd5R80qjQbZ5dkmqs5NBD%2BOYwYeG3nfGsJUnHZnM2kxm1G5W0WrGtqTad46fhXIlugbrE0KK02RWJoVXdP39fQ8f%2Bi61zDZqr%2FxLVszIkz%2BASBp%2Bqfo%2FCywe9xbKIeEY6WGh%2B0vHuvrw75i41kra8GoW4sBw91Y6%2BJAHIdtPqptowvrbjxQY6pgHXkHUvKx4TiahWcTmA7wniIc6eYs%2FJ79HCYFvyt%2BevA9Zy2zKzQjadZU%2FLAibug0g%2FNqhelJbaHBscHxdxGiTU%2ByQQu3CoBCBQvoetcl%2FLkgnYL%2Buz3Mf0LxsOv%2FoJb8xaFgJab8VTm64%2FishDCyed6ETzC7eVG%2B2M3NqoYMPyOyBxOm3cdwaftWtQIYj4tMdX4%2B8VIda0sPV3QK49n1XryPyK3S5p&X-Amz-Signature=b78db5cc18045d10ac5bd804731156c79a0738fc4176e579ff8770bb4fb242dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=c3e1cf3df01b0aa7dafee7d076589a57db5d0bd9a1ce4835dcdec59636873868&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=5805c833862c40f34b6b460dc1246aa60789dd124964b086b51708a3e95e63d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=dc6661f93e9619606caec4368bc4d21b061410daafc2dd5751c2ceb3b412dc6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=8ebc49a260545dce7999757b3ba76389b692a6bcdcba2783349ba8af5dff838e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=2b1a6c7f712a8d66f7c7d4cfc7f4da4a280c71edd46beb279ea2d2c08f45e258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625EVSUM6%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6z27Jn8JCJgW%2BzImk27IDbZa0qL93DsBjCQznDvQiAIgDKUd2V1jHC3eaGf5OViUMVWme%2BcNROk63MQNUtTy%2Fi4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHFv8T23EDLvvH3nSSrcA8AZQ6DAhPhxAOA7qcb1EG0AnPnGRVmBEJz6ZVBbx7xwkdGoSv96Yv9VGp8jtzjAb07ubVbdbukPfXdcax4IU5pDByLJtzAqAU92qVEBMuvagjVnCurEkQ3QWdESjHzEIP8kSwLwWBhHvLbmy2cDhg72jHQHsn7EnVy2exHuGDFfBGwkQikBOK63stuNJQ6W42uVvAuol5kE8%2BPMiZD2u5IQMA5p%2FSfWox00Zg8fqsAPLOrZeR%2BJf6T9ytNHGNwN0OgRmEwBYKWGcVRrPtO%2FVrX1gH%2BMMIYYQvj5f%2Bf2BbUsGASfOoUEWTNpOnvtpJnc2CKWcMQi8893zOAIbALp1nktAg%2FvivzAtnwrYC6aAIENC5rd31Xc%2B4qMXuN807q6UiQncTeq7Ej9u31ehBOUvs9mYWc4dWdRC5isSZJPe4WbTaIbn9jKqnxYp5DIGcNR8Gng8pHImgC8b1hNRNzxAsw4dfQC0vbl%2B%2BONNu3RlJkxzgXTNNie1Fo6ydNMVvxU3qfQtgSPHOzIjrQpy1Ggi8DpwgctWcG%2FoVNR0hO%2B3V1e3d48rn0%2FU%2Fg2qxDf5MCkoGU%2FQe0fJPaoBxPW2RVujjTgi5mF3jMOlxYYYsKvuDc6IU%2FYGkHyI9de%2BYrSMMi248UGOqUB8l40Blqra7dlpVP0opDXGpbDSIlxaa0MLdr2EkcKO51sRJNQhjH3pBQX0Pj8igBbVso2w1JVnfD3D8low%2BttaIhYWz4a6vQm6Sj9KtiNubwI0b1g5wUj9OBv6P87di1DPI%2B0Dfq0K8pvCwWUj%2B9C%2F6Dghvhlhd%2Fw962yVgIuI3k7RXUYxMwLfosygOdmdr3JBjwdT0O%2FPPa7RtY6bU5z1cIe8s6l&X-Amz-Signature=566c0942ec6022c4c291d5e2929e0cfbef4bd5de5fc5f1332a11d4fc722dbd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


