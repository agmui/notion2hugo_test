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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=6f7bdf7ae7e20501fb346b32b180069e3073196b681fc83e6dff9152142d7ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=f9d6074153d3f4fc5cf639cb5c7cecc0d3385048325aff0b466de16c3e4be4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=8130f937d8ddd85c70a323785b21e33eaf5ae6c8b448e615602977dd2ed2d983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=daa71b0b112e5b3acabf22061ac14542d07e897ee819b6faea3b9d5043c7f22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=3f25d203785adcfb55bac9395e3ba796d3b3e99e77fd5468c3fde93d73463796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=cf31efbede73323d520960a3a82e7b07f46dd35b7752ce8bf2a4db78e61f122d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=940c8a68c0c4e9c9109004c02e37feb4c727f374e4f3a6a218a0e399b3e29299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=0db087492208e2a520736dfd35fa9c90063dfa5787e925acaefb5490b925817a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=dae9143edcfe1e47d12795210eb6f5519583e08116ff2b446908c60d1f9d8928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=2447f2c277645d5acc15984e8c8a47226313d13a73a178184260724fd7350be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IXO6FZB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtY9dxuRT8Kd1957tdorC8Uht0cWZfOUzlrVL4%2BGyBNQIhAMv6Nyzh6rEmU9EEROqCyTwg1tJbvBSNJtKs4XM11iRYKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx0E%2FI9FpdlNC%2BP3DIq3AOxzoD9js%2F3%2BdjEpwRbQDCmjuvpYxXzPGit0PujyExwkaHQ%2BWo5IYv15MyMVQOkYMQt%2FW7DwAyLFpN4YRZcuxVoTKOuIAaH%2Bwpu92z51Y5NBqDwmxIcTUIG1girMoqX90MBqsAObLIWnlit9wJbKppWKlzfRjIdshkz%2FkvX7KrBmEdEz5S83YIPJiMdifScL%2BNRct0%2B9Pzpjzq7n%2F0vJSNc5MBIQPqtOz3sckg3sEGtpamcOWHubvgoQszqrzpVC2FydyU1N4K%2FYv1RdgfBWfLdgNMnUwOClvS%2FCngnKwQmhirLV8A0OPmeGZcMEAgpZlezVzXJuMtQlbPtUXjj8bJ5YUY%2FGfu8IVg8nDrjxm9gVNCkeNb5jbii51NIjZsJ7eQZE1PRXwO6LkdCSOmELbLM5mKS5YBZSPuvtvO7011SoZbkMoJffaNffmIB5lEBP6EHSeglZ7fN6MjxgH2IywvwrcX6fxQNHustxGp2jxynj%2FoyXAW02mENIswdEKq3XJDaGAouDP6WvoVEdMrMdtl0BabxpiqERRliw%2B%2FAtp0%2BPWEdF7fnMD9q5cFFCUmqNydWyNA7PZT66acmm5XX2odXOvx0kXxlJ468tvyZIQxcjVcC2drUuOLT7P6gkzCXlePEBjqkAbkBdeN3qo%2Fo5FBPxE5vTzKdzaRP5%2FI4x6JyQik3Umn51b4A7r9xEfanr%2FT%2FX%2FtXZmE6dQRIk1et9EX2NVyfDPr23SCkadviltmwVHE2Lxb0uSeTO794P36f83nXra1tT%2FqRNuiluYr%2BdztJqYbDQteS9gxp2j0r3H%2BtWVyZEpE5Eh%2FsECWvAxWM%2Bkp%2F0ZrQTViQAhWJduxyirIgfQHKWk8KwSxE&X-Amz-Signature=7568eab905c9ccc3651923ad6b8b0bf3feb3fb40c769d897c01aeb180785b37c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2BCBDV5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdj6XCAu31c8RHy5oEQ1cPBB6x1w%2Fbu5zGtrScvb%2BzUQIgAluCOVOMcT7Y8Iyjz%2FZnw6Vbm%2F709x88Qu3xyRCisbIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAQEbtZMXrL0FtL8ircAx9yb3PyJxQ%2FuMeJzniwjTzdTj17QM3b73yZg9wLn2ETP4DsXRZd6r7AerZx%2BKaun%2BsseYzNqT0LXwVkwLB4LS1Lnw74xRxCJ9Tqu1cu5Y5Jdfh7LeXFpC68g3fgVS%2B%2B3HVHN732%2BZaV%2FEIHIn1YS59U1t%2B6lJpNJxjMhxYnmAf8%2FWLzQQ6UUNOidUiGOEOMKQbyc3OgIaOr0aca0HqbaG4sP19H%2FUijbPai7IEWd%2Bbe%2BfBqNXHv%2BEvFcV08BcJuczCaiZLxTyjrTJOFVujngJfECl4NLqdM%2F3QfbdkMSGF2L4d6mQqlYAvv548cf0z0%2BV6Aa7Z1MlX1PheoNAWELS5R%2FyUeyOFZRZl74KUPBhud4z4liBYUMxouq40OQcX8timYFrGe5TFjZGMfyXhDtwtGWu6twZS%2FbtvGmjGomOfjdkzg%2FJcyAo%2FwZIlbsT5ok0UsjyWrxkxgYqahXwfqNxptSE8X%2FXPex%2BpO%2BH2tG1eoCOoLg8GwV1aQMmtm2Fw9cThc962T2SLWDmnN6bxdEc7ALesXtG4rvIvi6myGZ0x%2B73WxtQz3vSkYfjFwBm6HdefSdNqofkqvVWOlq%2FuCPkEn%2FrWsRS3Ggs%2BQrcPE84bNiv%2FWcFCWV4oBXQ1RMJWW48QGOqUBjrISdVx94ntLIwthrUqYflcZIFUnxSubPQzhbaB85AqpxikcQi%2Frd31EQ9ooryRVA%2Bd4LAviJmYBn69fxjL3LurZO5ua%2FxbdOpEobgvN%2Bx7TvP86583aNbO94FLwSvXnUT2DURTX8NA5cuGvnb1aFjojfK6Rwp9B7zcXSLWfebPWHODJAzKb7WIpEvvkY7R0i4vA1ND2antPUUnjhM8NFo9nWVPH&X-Amz-Signature=26db5b0a3cd573a3cbc088bbdef7e666c907c5c6e9992a55dedf5a04dccf98d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QOHW5WW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxWc%2B8xLSuv0IFEqYqoGqGt1NHK%2BIvC0IHaTGhEOwODgIgD8iKbB%2FrfFTld5aVXRF%2BqXNU9QKeLbRNHIe88Xkxg68qiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAErtypYP6F9FUk%2BNircA9HDx5S0GMWlnmE8YgRuCPqfiEwVyLyAAGi6oQkVCNHka%2Ff4cff9stcBJUsomcoCZk3PZAcB5dW2B%2B1e6Bjyi97sJl8EXjH59QeQQyJ4Z3J6GdK%2Fg6uT0Y3rdf7tb2Ow8HZ5rK54FPfjybebFaEk9MBnpM2AOiCovrtzcydxgqZqvJ30jbT2pO%2FlKBXyUta4OrJAN8G8WdG%2F30b%2F5Sil7pt5Bdhn%2BoDouVHD%2F2Oghx5i9p75Ig4hT9z5zsNpaIhB1fEyAVmyxq1AnnBlj1HnyJmRRP0EpgOVVC3Q0SCW4QMW5v9WTpPzb%2FUNjIvJ05thJIOyv%2BNPDlJM2cAnSmIRv5loxHRLJJktuxpbgPiup4qyXIdI%2FaUyiJ%2Fje5gAZ26AbES3TESQqIU1v72h3aTeIvbQ%2F7V0mq7LQHAkna9D%2FqWH05q%2F0F%2BDMcDfZSjxsx8b7Uod91pVQTeNJ9CAhDDWfSVGgXwLP6RrRwOu3DDZqFuoJ1mY2MOLv7CwJZjahaEAXWarf%2Fssbjj2E7MGz5q19sEJR28CVyAQ4x1M5TVh7swTJXrajaOqHLY5Wyte3r%2FLdBSuPlKuI7diPm2R3hMPJ%2F7Rly21W9Hl3yOmjR4Us0eH8YQ6qk%2BwmMZ32DXCMJuW48QGOqUBoo3%2FJ9is3U0uAobnvYfeedsJZEnt%2B2ZYr5X3EmseGboDl6EUleuXkLCnN0ENGoSd3oDqQFbJNfjpIJIl3ZP%2B%2FTZJ%2FShBshhlouCqGKk45E0wPcoN8meZTtpCplgfuLoM7Hh0WdnoXZR2vdqp6ysuLR5sXohI55p8EI9GHeS%2F7nI%2Bm6chhETtxydH3SwIThKig1U8gfg3J7JqSGF0iCFwZnH5MJey&X-Amz-Signature=6849b314c3833aa0f9241c60838a6826615c9da063721e7be1942cd42c7c01f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=742263727e12b5061a81e82727922dd48375a15271444a17c56894c43bfeeb2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JMHPQNU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA3ntLBZItq%2BOZ%2FLWjqwiqrcshlf4C2c6N8Fs8hphdAiAZR16HbKIcJvLwiPqyuFSLZ54PQtxGpsfNO6RH0w1CBCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwXlUkwqmKpmNnoFvKtwDjZ7DMSTLEHrKUHQDo%2Fvv4qerWZ%2BnblzD9cwCvXqwaMbG63j9v9VUguBrIlfqmjhTA2IdaPvy7IbZhNnn7tPwKigKZ0vL8TLmxKJSRfSiCPHtpEeMOpjI5K8P1fIm6fj%2Fmogc1hekmOfQ9UHERy9giGvtZJMdArNj2dHcPikDwLM5XaMcwtXjNkob7xCL%2B0VW%2BG%2FuNvMa50Rbhln3wzpPmc4AL9LGOtlAGlZDfDrGxPUMxmJlvjH42MB5nJ4AjE5zj%2F7VrxoGFHBqCLnETClWbDcFc3FhRX5NaU845Et6zckOT0Re5tQg%2Bz2bNVavO33fUdhpd3sgXu25Sq7GbryA1PUKfQjpKQhMUCwsFYOWOQc0lycJucdfFQ6B0i932Ah9TBSjcVTLRhmYjmFg2JAFLDNVax%2BRf%2FJM9jQBaF9Ewf%2FS5HGFGkhQ4PjH0wZHafjeWdre8VfeTUUxhHkgwrpx4DrqscFcU3Stj8Edu%2B0cYuuqwq2P7UypWW%2BoUDCs4bTRjbKmTMlDUknLeTrc42vcbp9wy8ZhuUjA72MhRxiYuxHSs0l7%2FKNwcAPIfv0CfhS3XOpyu5Cxm0wy5GkD0w%2BiRWKLX3%2F37KJPzIB77a0cZCyuRcmHAeTRVbL8WC8whZbjxAY6pgHWEP4Pi2e7yr%2B81vQNI499n6Nc3l%2BEhuXmbiCyvQ47Xjxj0SHNU6eI5GJVLdDaEDuRFqP8S7TR%2FUhNyPaIsnV82CKFztFLtkT7iqV45GhvT6pyGUl4GytOvTF6HV3LgkugOb0zKUxxow0AoP1BpbZtONR3%2BBPwScvPunEgUFP3XSYIkS4Ihs5wmqor3W0%2BrdY3%2FDjKvxM1afowS%2Beq43kWFVuNzHv8&X-Amz-Signature=b4a6e066ccc6996299336a5440da085bd6808dc43d939af1ff752b41f37b2f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=5ea812d4920ecabba3ed91a6df2caf136d930912875af2351d2bc88d4366a150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPRFLROE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDP3WbdkExH5jSuNG80M6zOkxnmbislCjH0dj28FuIV9AiA95hqSsejOGyruJeNASWemEYWPXsE3%2FnRBDtb5szEbLCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFmAFDsS9AXJZbCbUKtwDhigw1wwKkYNLe%2F31RoGlukLZqipTB3Ik8PoXWqKTCGCNxo8X0WItmYTf6w7kQzflUVz831yviU08%2FzNL9h2A0kIaZV%2FKZCTjRRb5gLaWXzYM8MVHIkU6pZelNSi91sQ9yx5hZEJqLKJGUdwR6TZlgVPe7FIhtYSIB7qKnxpHylDdDse%2Fy4gosNgmymEpKS4Ao74ByD2vDu%2FeB2vddLgzSMOyN5YI58tbjlEK18KP8BDfZtYZG6AHMpib9TmNjYYvDZKD3BmaTV5xCVVtv5VdnNdQfSIyihLd6G2bbnn13xTTSw0uGt92cOzc3bS97oCWcW3x6g4oPzsy08bJLqmoUK0WBPheo85yIY4vpV%2B22NAQnrtu1yheqzgfgnwnTk6oUPjOAZJWokUzqHaowwGePvHECAd36j9kndn3cB45z87cJLDn%2BJ2lNeKDgI%2FmwqO0Qy8BjeTQ57t5AnFIDYru79Pap66sEw%2BCzwwauWqALH94vkjni8kYrbzCsdIjE2Fjv9uI9%2FElaIC%2BZ50R1BFx%2FOb6tV%2FjJ%2FK%2F0KFG8D%2BE9jbU2Lso9wbZ43OZddWuU5%2Bgk%2Fwq8mKDUty0L6QIQBaltn611AlGH4GGW9qCKbwgpswPeL3eZ6ADfgqELsUwmZbjxAY6pgG1YFSrH1ufmRnaU2qgbpBio46hyOEy5Dx9Aq39MGSeKYA0HsvEoaacCveuLevJVuN42iwRQQaC7%2F7RZG61k9FK1CVd7ds%2BMUp29B6MPqQH2A8xq9hDisUlhpjs5P5ddW0BizzHji3BDs9bfZWkSQfN0OP6YqMwlL9HXwk0jdmnba0soPvp8qzK9zrV585MVSBze40E467W9dLiDzFRGkNGLIew2xlz&X-Amz-Signature=da4742606a7e51bcb83b74606a3513d7217917643f7338a915711c67b09b2ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=22580a154ba98cea9ecccb0fc773860ce362d49184f9f724930c205022d90e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY245ZHT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG7gf2E5ciUOFbaBkqadSSaR%2BuqHUVvWxFal9R%2B%2FkcXAiA333ZGMA8q2V5a83Nxu9pjXueegbX8yamYOk99q2fZGSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxNOIrWCnV%2FRV8GKrKtwD16cHLFtwjWLXWrh4Zs3o98Vph5ZJBpcpUneh%2BVEiNLKP%2FE7QE1VFkQ1hLJ2XTCab0mMJ48dMpHxoxZYV%2FdAgfrI%2FIlhJMvN7zTAPM11uawTQPoChTFMzyXD50RMufpBrRm5KFRPAltEOsuqN5kwyKp%2B3ChOQ4XOww4fl5FI4qw4ASC3LEHsqiPJf3EKwlFRmshlR%2FoQS9C8W8t1otTueDp%2FoTyGUjDYJ5mV7Ztae4og4gRfDGTCwUpEIJntuvnu3%2F%2FcxYcruU7gPEoqGDDCGstSmIJSFQ6CsfTqVUSiUMbskpob86VhDrIZ7rmbz8aJM9D64JEYVsW98bt3%2Fa1vG%2BsCR6jHI0HTGbGJCrseuQtI%2FeQvhEAuoxgzTzhBWfSM8K3IS4TWN%2FJenDuG1itHBk%2FlnThstU7cbVeZyP9eJe95NzskpVy82iHcpIU7XD5WV5F%2BK5zOfF5ERmcbv7aFuvYXv1AS9yX3aXBMNjRhbIDpSDMRgQ1cySwAPzhewLbbza704DCeit9TtPktIbdz9eATHaVcvubSOQ0s08v35IA4ShyCF6aIcXXQKWQUv%2BopDUCmFFeZX2%2Bxnzj3%2FhRUL9qxXNMFVdDmK8qWk0FeicwSpkAO1MiHVcgdEvCcwnpXjxAY6pgG0hzl9MB7fW48VuVD07syUBDdQ3I%2BIgn1GLiDTZp9U0%2F%2Bf232E%2BVcl3wUKb6QzBXQCOel1is41uUN34bAhoqOpd%2BDrUa%2FGdVvGVXAi3tJFCrpsf4303Kk2gUoo653tQv%2F2GKjZFJ2NmnwZxhXU7UqNPrMkL8sIdEEyVkt3EwYUXRdsjJPWS9wfTnu7zwzuLj0%2FAGgDqvYBG1CxoX5PTjDav%2ByEG2iA&X-Amz-Signature=4ddba6798524e8489017b8d4694964f81e9957e8b2e1c059a4836749230fd0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=30e5dec5356f7e99f3854b37c4c78ec8e4aacff51eaf9cb350e0a2202334679e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMKTGGO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADnIIoDBFqCRtD1SMD23Kjicxc34aTjrXOcwl4lfvSqAiBykNi7%2BjguOKc4bJ4L5Sr%2FOrzvT8ZN7I0qCOvBlhiyuyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIske%2FzcQglFe9a%2BXKtwDsoEi3W7txtV5iUSiuTAhEs9YVmnf1U6Sdjuq5Wcljk2rmwrbjRbj1Pw3G35UROEemmSkPfxALh8zud8UL98vvybME5zRKfEALpV7b0Fh9KCh6HLLnWNzpLPOrb%2F3Da2FMFXwc1vioGfrnAh0ydSyvERbVMSb0%2B2ASWfICPnLRAcpaH9fNHv5VA8pCTFKkHWE%2Frrn4NqNzfPgpxtaWbrzGAhHn80hs9BWEiqVYjbQhKeEI8vnVk2sRVX%2FkA%2BCDEkevU6uXKzKkcIB2vvhmxsL0v08poY6XiB6qEM6gantg4BGUa6E61PbdtkJq1KDOqeUGCnXLS0vN6xylaz6fyqtD9v8YO1AqLFvltoUuDgwlZO0i3DcO9QY4B1nKXV3Ngi9b%2Fkxa8gs%2F%2FRZYIDqaaHSteBzJfvZ%2Byvr938VoEsPH%2FSYFHkUXy%2BBUcOE2zU%2FfDznyj4I8uu9OmHToKGsl9psfj%2FU3wMKC8veWSf6viurTQMXWWcrHErCqhYykDFOJ2k08hQlFXpKrIRYyHCy1YopmkFhivEJ9kbAHEd%2F9VHdraQbck%2B74XJpHJkcLNv2mj1KaSadIBN5I11%2B9FW%2F6q7wFJR%2BPIvVYgseyqAOpgFJ6g1NQXbqKs3VOHLFQzMw3ZXjxAY6pgG6EBqdV4kZjoYs12KEQE4JogeH3fuyt69wIME3P3pmfP91YqPiSsQwuMTrmnaWeX59S0rk8obdam22kMNWiZJQbdVwKbcitAVci5w%2BcF5E1CQNbNh6CSESaRTR9HhExeXWtHmKL6B4g5sMmh6FakJOXBxrOA0eV0lllhtZxJtk5h6piS%2BRMMgz7wL1JOpGUBFaWyHaNtlTp1GLoTep5dFyICimPv4l&X-Amz-Signature=da5eede47d14498d4ec1f91ce4ede47379749047748c35c1928beb46e4398c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QDNA63%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2WTiMptWwIciBZ01mwdsXgpCLNPSOvqZYKfunQD%2BDwIhANZ8gqKqDgriz7dzfq0x2ihXXNygFNcgecSGiWp4qb7rKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxTuTdA2oKBLHSSM%2Fgq3ANo85zjEaIYFBmdEryA7XL9r9HVgZ7UpwRmaGqv3xwFO%2BbjmiMM%2FqEfX9NczXDO7jP6WmJGF1t%2BgeM0scc%2BZtKIlZPU1%2B91rb0kG0nJf093BVb%2BbDZdAyfxo3cwu9z7llfMLCf0CG9NmcBSx6xLnPwN0tQcc7Uc1ohM8%2F8BCXHYalmyXilPgnhc4eVemmOgNyEvXyBDTlwSLswwk4LQD%2BE%2B%2BWYTTqGeXbnu%2BBmPVadxQ3NDg4%2F9S08IqAJVb7nUm3pts0QAgARybLochFKfJh4cH600Rip0dVPsdDt4oCjLL3JFqGf5N%2BAjIX76hsKpByNRXvomS%2FsddklMr56TIsVyDNcf31JCb8R8nyp5DAMZleQAxnK7IyCJlLLKuVqwUFDpjwi4%2F07oMI73nejuA5rXlB%2B2qb0BcXxPRxLkyXHqO%2BtuNhNCdazapDCTgU3IHouQ6uUr5QE%2FqhSR%2F%2FJiDB1PnJudDkDiwXiYT0VZxkppvtcXO7YdorzLco7sZ6t8M4%2BEG1plpmRihC8Z275mKOAAHsJQV%2FvwEgJwUioVqcVp4%2FQCR4I36lP6np8MZnm8vlJqssojpUOt7hqmMKk3nl8Mxg%2Fn6EK1R%2BvEHo%2B9RmYrXQod4UxrpK5jrhX69zDclePEBjqkAUAxhWj81FolB%2FdSDEaxORA0btNi4evh8W%2F2nfFQGfuUMwuybD%2BntNWNtROBeNhOOPmdnbZ3XlPXLupi9AhCD4PxPzRNMwrGkF8UuHIy5TMJVZ%2Fh94OxEcPKlXqxcNrpay%2BOhfiiZB9sZ6wBKGxOM6qXpqdA8JKanHt62JRzz9iJvTkyJYhFYFgF%2BR42MgC0PH4EH8tNTwVTLWSfUvPrX1%2BVKkT7&X-Amz-Signature=840f985894c9ccf5dbe4ee387df9a7c2b14c48af62db6231ed7ea62bc8b6376e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQA2UXKT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYZ8hshrHEMAQ0j8YBwUcFP%2B5LXYn1JB7SRoGTASOwTQIhAMPKkwPXbABXWEo2UxOgf8VHSeg3OClwLra7v%2FRs6esNKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH0I9ul3E7no1xmaQq3AMW1taA8HT1qkoN0A5G9Jhe799Y%2FE%2B9LZBXXn0dVrbc%2Fpw6tfSd9Rav58fDizzJzuaXw1IEjXeZ4FBEDEISOmp9CO6s9zzrlPpYtbHux11gBjPP1wQqwQLXg2RmnoA0HAV9%2FrYia6WpJQd4QorbWTFEFCPx59tucz3Yn5ZVpqm1dwHXAxkE9WLbRFowYz2SkaiOQBWfSiM0MJJT%2F9qSYlUlNR9xN7xZ3Z%2BUr%2F7tm4pvN9aPtNLZ6C5gSca9%2Bq5RH588oN3IgI6ksifXHBuDsGx2ibVFWISmMI1YEF0OvaEFtvA8y8HmwqHR6uW1YyQ0Uu3aDFR9lv4beIrLji8dAU2azx1N7%2F6Ze2vz8E26vPfLrZDcCgRBctxBQhzB%2B2VQEWzUJEKKwnZfPp53qyXjWWZX5cV5S09EYm74JC9SwG%2BfimIWNPirB%2FppvIroh7NGqAfVeRtX3JCR3joD%2FaTj4X8wypl72lKu8L5Q0AVWUJ5E6awe%2BlUE1JBr1KSTjYHcG5TQKVNFuDl2AQhczumVRakcESXs9MU3Zl%2FfWcKjecYwReXrKDmHO%2FD6fh%2BJmcUnAB1b5xH6cTgae%2BTsAXN%2FoDvzMI7JAtFcjQS0ssXXCI3BC8rPD%2Bi%2F3F2tyxp6lTCNluPEBjqkAdl66ARjr897%2Fjnx6PAjcQNAH65GO%2BVICVtKQJexry0GobDi4mhdTpxhQ3XHpsxSuAiQvrTCbXnCtsl3jeqZkDiXRl6Vx0Yk0%2FRfciCMGlCZ%2BmiAJnsEo9Z1mpE6%2Fi%2BJZ%2FmzxnKI%2B5ZL63IA1MIYYJET%2FR4OHVJQhzUaWTSkBCCAqf1B8Z%2FURwE4p3vWSSwAgYz72di3mKdUEaLio%2B9XhVF69Mz2&X-Amz-Signature=ef8d7750018e5dc8f782d0b1e5f42fbfbba598cd6a832b36f505c12db83c3a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466776E2VNJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxXtjnxc4XNdmPzHJ2slrxuBqkZsb7NVvYXy53wbv88gIgYT8MyTeRNVQJh5vvhcpSsud87mmQu%2BzJZoVfhCTil9UqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7BQaJ5%2FFYAUlBZrircA%2FLiKzTAPHMOgA%2FnDXdd%2FjwnX9ByiLnTYIKwF5GYrMpgmqPgnKjeJSST1DMH4hfiuAfTkAVe1KRSux0wqhKB7Gu981C06RnUd19gSABCXY0CE2kZhW%2BhT8hEfiwpgGinPIDGvqfwE%2BHkZkUU4LWhudSWBEF6Nb21%2FdHxF%2BVFH39V93IvzzXJ9Yp%2BUpNaoZjpWwmFzSMRtysrRh2Z8%2FmTUMjTPtqkBcBNSoD99VnNXxh4lcmgCzuR%2BwdYxrLGaHUZgkv%2BTRoXA1hTrVy4tFQ%2BraZ9vBUEuGXL6OOYSUZeKVthRNpSfCeN0xmHLSN0dVB7rNyfO7hLoK02QXRTcL4pkfDhZhnunloLJOBMuW%2FhVp85shEkh00jzonntAxdnFdXokHSTE%2BniL%2BG%2BB33SiapzHCBJz0drWVl2Nn3cdiLZ8S99AHAs2WGfJmMnjGTajdv%2F1gmulgjiIgMR%2F53EfkssM04nlN0sYehzmfQLnyErXlTe%2Bv5knhYUw0hkN1SkL9sZ4cbdb4qe68TgJrftsgLwx45xNHl4XkW3o%2BaSXpnF83xsNra2LXVRM1mlVi6cZKQ3%2BggWZnzev5aRNy2GPdMI%2Fp7NZ21W6grvu0eS%2FkCmJGJZytXlvDe9MpIQLGAMPaV48QGOqUBm22MooXvshOePYfScyz8kF6iKkzlFIFHrrDRY7eopHdkPTU65Cm3agGvhQ9ZAVtERPS%2FtcQ9PUAEMilWBolp5lcfU5lGoNUX3hPZTbgyozS%2BiJbwG2idktH1zzqXs9zZzbqj5D36s3paonI%2BkC2XaHbJ6DWu8MwrV0FAG%2Bdtx46bwbZlexxOXyua6a1WLfWMEw5gWbtH6Y9VLgOahkBNFjp%2FCmKe&X-Amz-Signature=ecf4d534582c48c5a15d90293b53a4bc275690103547027519def4845df929dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVKWYLVF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHudjg1apwozjNjkMLoBolfyRKUR%2BuoVoaHDgQ565tpyAiBrc%2F0B0jc9DXOFffpOv%2F5ZOU0mfRkehR9TqokUMsLgdyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEnGgUQyHHdAuOPf9KtwDiR9yW6tlXWMO1AFbUBJNjuzERwafjTetSYkdnGOVSRVj92QFpLj0tVu5PXVS2wa0t4ivYMvLU6gcubBWlPWQ7UnKX0WD%2Fo%2BpjYjnYzZHrdx9W3aca67RDkn9VLQ4K5wEwOJlzmo%2BvlZyVxVrMWdI6NRUB404Ntcymp9feSImzguX4egYrgpJxkGeS2QSY7w5eIXvVdLh1MT97Nf%2BVb66yvQqSrJiPJZ3GQrhE%2Bi%2BfpSh7gfUgKWG46HQGnGoVErqB0cqpu3w1jzRNPvyL9MoVF%2Bl3XlPr%2FKHGiePNC7qNnx%2BTDrcAVvt%2FRwKLOusB26Wu%2FsXRuf5ubtGAHdzPFvZ3SZICDzW3Mc3dyWwx9244HeILuoMWA2Q0Rc6YJnSRy25xwc70rQhnqVXFMbiO%2BeXWWQ%2FQDZxM2iw4MspreUACN8OBjdiOiWB9KcAJwaxG06n2Fm3R1Vlm%2F2d%2FFrcdUh%2F1N4TbySTUk98UfsG8jt8x3dmsgKDXvNi96p8yI7uG1BQfviRrSL2YxcOcgHXwNxWAuaFixwAxiYtHkHkpguLjlneseOwINL5sxcRCdpmhEEHKDG%2B5HuWW%2FMjoPbZjWK8D0Md4CRkLoyHWKskCjNzxn3vCg7IOluNUKzrIRgw6ZXjxAY6pgH%2BR3qbjgYnr7nX4fpLIrTOSiMo2dzbexJcNxWKIAEJuCOBV7ZqHYrwDbMnKYM6EsuPIeStA2udd4KiiZiegYSFOAChq5dm7dZT5vDwYR6d4bhg45f6Jbvm3ei3%2BDGlX1eGYJnFTt9F4swWTbpMSL4n1ZQNM%2Fg%2FtfchgzzqD8bxnpDETGcWhg%2Bz9bzbY%2BlIjnQj7q1w5%2B69OBcwtGUQGNXFdraDy6kQ&X-Amz-Signature=c77e45c1a3b1d2edc25bdc9b1829188670d2eedbf37acea63dd9fcaf229745aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=899de8cd6a16585a052b7c903357767488880d3b7253cbf25c28f0729a8a5cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIQP6CO5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzdYfeSCyYmF99n4QLF%2BFyGHmRyPddTD2fju4t1YZkMAiBMFl8qjyylnGkZpF1pZKMGCZWr4yZZTJHKgp5eVmH%2FhCqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9NFEQyTl6%2FVgABoLKtwDVl4WYqWSve7GLtX1DY7iMEIF0D1fBUeLNJuXBiScYQ8%2FpFemNEduwUxUshGoQ8X4z%2FKKVdpGyREEZv0by6TCJl12Hfgyo0chtjz%2FknnBjIIU5QWXG%2B6Y6JyDJGSd43hS%2FWFpE0Y9bjxTQi2XcK84MN4O0sRxF4IA9lTCYy4l8itaXoSs9fgzigSGt4Oyq%2BM5IGJEgNWrZqhpegrUijUqbhrfpepjgqJhXEtLa10BLhhEjHIbOBZU5vYF6joJcN5gE2%2F5k5T%2FjY3%2FmNU8fFPNq4qSbkzwDLop2In5yP77Bpo5CK%2B3kej3BkpRZnorqonrioWI3QxOIMWAnqMNL4eB9K%2FY1XWAQxIKRPwO3z%2BoKbLzz19lQGVP%2FfDOS4nEe2DbINvfErQ8bUI9i6moNo5UGh0fTCRTGZnxqIiFFNyzhUoLaEgZocfoSwyfMMh38gAOuqkQ5%2BIHg%2BdxqwiZNFqvM4J36enju73PNOiew6PPQmvkzMVW1G6wNFE%2BMPOMpeTFye%2B4C1AfVpbQhy8M7dwiIkOYzrdJEvw04RQDP6TYKRYOURwMv1tI%2F%2BzRlwQTQlI3yeUwvhJCBcFZ6Wksmgm41GGh%2BynvIn2HMBL9SwbdzpQS%2BHD%2F7SoigJgopaIw9pXjxAY6pgHWXNQ%2BGoGfOSS930z6GCrhyXdkQ%2FA0DOJtEzbUs4cMWGlUf%2BwvyNi%2FI2Fgr5JlbvRXIN2dxwUgasbHqyJhmAWaY5ojsTkKJeJMsS930bUj1ibguuwYOUXjWGWvsbXPJuAhQi3eGSAzoXv%2FSrbt61TrAhUxULHUYSnjhP7%2Fefq43Id7q45%2FZiAcGZcXZSjXViivMiUzCMGEn14lHmZn4%2BmJeiF4yayj&X-Amz-Signature=cfe1e2f5d5bff5060e0d75d0769a522fa7d122ecbeac2be41c2ba2ac6c617258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=17243f15f8f302dba6fac1bacf710dc019679591470b8280219292a0d9e00efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=1965fc7147e415c664938ac499891dafee6e8d32c28839db31537ac2d9ad5123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=e1df7398aa475a7c09dff7b722e0055b7ffe48ff34af50b57e7f48e1cbeeca63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=32bfe97baa5698a24b5f85311c4d328471843498eed310db93642b20b9b89b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=71c58a63126c0805b71b3c4f2e8072580c993bee79b45a0266a7c9a3ed43bcc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=a20cad58bda5e1debe86124af856ba847966b873a53f2eacc1179d5531bbe099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=e1df7398aa475a7c09dff7b722e0055b7ffe48ff34af50b57e7f48e1cbeeca63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=ff1ea60d86ce6ca43f904fbdc0c1f6b2ef3f94b554b7aa0a5e109dea3d1581c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=9c3959fce34f5d89ab93710f71aa6bb959d61206473c0f1320a2e692831f093c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPOMOTN5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnJedzTYd42fbmf6%2FpWVXm2BTQWkEHua6sctJPIl%2FeCAIgbtR4gYqjgXJ5YJ%2BWvqvMM1%2FJ0SdBdP4rFInFX2IUN7cqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAalHfy1S9z80A8%2BGSrcA2r%2FNJ%2BeDhf%2Fmj8M%2FLR1rZJxXIMGsy%2BMOKrX%2BHf59QejBJqJhNZ30qRm26%2BA85km57uE32URkoe%2FZBXjBtn51OMdV%2FvyoPl2UKf%2FNxF8TzRQmXLkVcnKEJs8D08funY69BF%2BvhwgNCIpaWjXw9cdRmBezD396UQ5e86c2mYCRc7NvvRX1ar046NeurTwBdyVerAv87Z%2BY%2B%2Bvg4adTt5f5rWaRv4CGt2ebtK8XFYzkNQwLjrYc72cvfVRs7iQ6MPABq%2BA4I10ROLjlwbn79A3rpX5tQWpO4yQdyjri6pt4%2BYaMjpJO5vIwkYJ1Hcy3HFfvWuvuTmZ7ELgmQWAa%2FNkrAvQIC3K4Mm0bJhrSNARuMLjtyH8dv6cn3YojeyfWntJlgdykOIj3jmdbmHlD3%2BqkSRYvnhkpdlNsrdWBeg%2BJqXmHqKSvTDNe64gqv8lZqlgOx8mjVeY6uULVY9im3EXW423NGQ9EWLIFTNxV%2Fm1upwlBvY3V%2BcnFhGHMdlyWyybhmmUyMsMWB33l4GsaFAhiXr%2BKJRhqwq7Lbit8qhyYTG%2B7%2FVth99bnZGtX2xnwMdBknq4pbDVNqX7ic8cVsnqRim%2F6gYQHrXfnj2mYAvnaIZFjWqTG7LmQG2Va6M0MJmW48QGOqUBZKUC37McAW479yo%2B2W5iTVClZEq80QTT1pYR3HEutmQrrSfm7Fc%2BHVC524MY9UL3FViTLaKRTU%2BT6vft35UIVkSksBg5FqZ1cQTCdJQPQsIN%2FkcYLnkCcq33mpKK3t3YvcUEoLEv1OOqKzT9mFGNUGuUpjUlj3863sYQ8CwQs8q4JaxTuZwlggr3VX4BWv4gaDF5fH%2FJS6cooVsEi1%2FiUkKeJwTV&X-Amz-Signature=83ee778b49483b06d6f5be5c27fe8d4578bdd4fd325c9fe1b483375e5425a193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
