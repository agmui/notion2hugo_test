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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=89a951ec046d2d150c9ffb3b13ab79ebc34b3469cdc6587a19949aa5c2b24e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=c541e3e0cceb8a6c387429e89250781383b08e8f65e43b9a44c5e8b9b32c269a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=2a91cc3952e8b72a67cfe6462b52b9107f297e2fe09bb3db40a87ba5381308e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=63958af5041466223b82cf1f6c6f38652b9386bc4db50369c69ad164a32d36f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=52d3f859ebc8c1f312a271d21585e140112861080545ba6414b8265dd1da2642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=31ac213cbfa9278623df13cf79ce3b30c2a86b2bcb4948cf91921692a6982632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=ceeec3cb6e1bb55c4c2727496c929090cf9d14fd8ad7de981d9c287ce1e2597d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=e99cfab82e3c6c377177df5018313e8c41ad9fcaa71b8c53b6e7beee66018eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=3348b4588f3fc79aef20c631f457d016289bc311b856fe6048d8cb5190ae02d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=5566afbb7da6451975723025a4c06c3a46b279a80ae20eec849918c3dd8518ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKANI2DR%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BQ%2BrRPUi5xFSqIS9nqyGYwLGH9uEeYmRNAr29HMmTUAIhALqNazt%2FEr35Jz%2FoebMWRmWe7S%2B5WsjdM5yiDZZnKdLoKv8DCHsQABoMNjM3NDIzMTgzODA1Igyb7Lag0ugCn%2BQwExsq3AODCd92nb5s4WS2dXUyr9mmYjW8Cf7i3b90TYjAWVroAAWdKN9d36aDU77H4vyX0WVRWm%2FyzMDS6aA7aw2%2BtnIV5QYOntmUuDMQIKji8GPDE%2BzCZ4kAdGyneRe3gelbW2zKb%2F0eleCTsED3vo4UVThxkPgJ83otp9recuaPbRVE6UWyrZNGyFQLu7RfetETCwPF4Svi4T13Di%2BXoDsrKXz9dDTCoeTBx%2FtI%2FK%2BlVe0aUJWeUEdHNBnYF2WHfHThPvYfbFqsmbzKQ%2FVib5xo3y76E%2B9tLzorGJJ1W2BPlbsaQIcAm4d7TiGgro11Vfo0N62w7%2B4Gx%2BqM56dBNJxh9CS33KG%2Bs820XXmtT13pnd9u4KXvbKahneMbZO9w9X50hwSE95LzLn5rkjqyN%2FuOIuykawfPguvjoVvF2b3lfczLaZjTo1Lxghde436n0wR5DP5F6J3vwq2iO%2BtZ4mx2H7spT7Got5YIwrbv6fNEdR2cjmZWBEHFHphUJaTsDpkzg8GIa6buiaG6Vu0g9NhbJY3%2BhRI0NhIv%2BNI1XGFYRaSwCiSSI0Tr11lRiHNanLo8HAmLgTezMDqcllmu2lUXJJd585%2BjThOvkduk47vqVFqdtm6jjwmKbaevliJeKzDL9erLBjqkAQc%2F1B7Rzqqnxufr2ZaCoB3FTE%2F4yCf1nIW9OK3IZoZ9BvFBgtObz%2FhbzuDx5W4VE%2FQf2BYkjmHjjtZ%2Bjat8EiC7bibTCb6bEVqokt5K5MVqWgJ%2Fqyw8YUOfXgdrB%2Fuum0Hkke03N7a30ZMubMn2sXy2wsOb%2BoYZ3wF6dns7HdfHmkBYrtFLBOmYGyVM3xDAdCdMuzyNwR68JTBbxoZehnAwVkaU&X-Amz-Signature=3d9fa1fb6b0ab9cea979236e55d731f81beb4906ce63c591626d2c90c0e55c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OL7Q7HN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLY%2FKxuUwOrTflVmAAJCE95P%2BCRdvk5gEGG9koETjLnAiEAjIjs1jKeddE2Jr7jc%2BIzueDxsE8jNpDlWFQ3Z9rsS1Iq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI0qzrYgzxH%2F6VEAGSrcA%2FSbQzzQBqbYe56ZzUtQjbqgBpfvECh%2FYuQErnaHaUi%2Be2x0yti8qUsV8tKWheBBbBLP2IqHwfqtHrE2WqFwO7WfuYkuAG9AaY9u1fEtw%2FmcQUQad93zGlQl2xuG4DFLMPyJbx9GFsDCrnSOs3ZJ1XgxtP9PwheijqU%2FV5LEdHbbwCFtROC7VooTlkhlPg3ZYfuAp2JRlfSN9uDbRdJBXNrwQGKoxOfK9pn2xpczjvXPWKjiKBf8jQEpXrG67Z2%2FbGkwwQRiOcysYTdwYeJASJagCQaxJ0xEdX9zhP1PUCWXt1YVzwDj9Mtvz1aXxJOW3keCCaq%2ByEvNYcGtc4I6L8HNWKLO4y%2BgIESZLJSAh4BnDnybp93kW%2FBWbr92MdHo4UGBeAnQsPIqs2kwNhMLXZdjqYs58og1YoXm%2BdgVM3wcIhcmUKl6b8ID7OWd6O6gCbZQ2a17FSgrNWLjQXskrIDVC0HmUK%2BYtIbiAyqvCLC%2FwFIbpDbhHsMeMoEI4JoV5zu1B5uyMMu4K2n%2FfC%2F5fCLUk265PoiHyz%2BIFLwYG%2F0VmnpEgnZpB6OrLAxr4nGDGdu9JiMN1c6irn%2F947tH8eq1LpIH4%2BpU9XymrH8DB9IG6Pnk2PWK8%2FLbMHgUMOX26ssGOqUBHO5zd5uWVJDR3wjK18CqUJxUufrf0YB6eFBtoZnmKC5pdUUybrVSOYDv66%2F5sJqCMMmdt3CL6j0wVSNxlfqTju3XreHgmGSdO9D4CKJq7edRJhX1t3bpGaa49fD%2BN%2BPspZdz7%2BwWSyySUbi0DUb%2BRYQEjoP0PdC%2FZmOqtlnTG71cDMBXxBwkGcJ3pkg0hQaso7r092zu2qnfNLBr4E%2FsopaKaV9b&X-Amz-Signature=695e339310f225ddb9d9fd814a3c035aee9190a9adf8e22f82bd222ce1287881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AVEMOMT%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCqR1Cu3oEtP9dzovpbMEtD%2BykGc%2BomIr31b4PNUNtzAIgQbbbhki4OXxGuVxGRWVuQrKcsvN5s%2FPCXIHZWJ7qDtkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB7FKN77deGF5DGKQircA0BooQRBwtmjaclfjWkX85mXEW%2FQ%2Bx4dFTuBfjxI7uJrRxehlC0S7m4Qc9NRLF532R69dZLbFWQLtPQPsbDJ6JQ0DVQKo6pTPSr1LXiQ9fqwpkVuXF0EY38cf%2FETY73dxd8kd1SumoEiU6bZOiEISCyNZi%2Fx1E%2FFuOLI7SN50rEBOoqEAFn8g9jBFuNPuxBBbUe8R4sapmte2Z5vhT0Mipj4zSTt7CMH1hud2pXHNPPSSShoQkUdTx0P6T8iqngHfPGyeO3jJMJe6WodZTd%2FKeE5b81al2Y%2FpySCKVdk8iqXYxV6bpAz7o%2Flfbr8awiiOhZYKgsURsVvAO%2FxhEHloudY8ytZMiIdeFax0Phi7746%2FH4%2BBgsb9gOxqARSvHyFSpOGsqZaZoQqQrxzcksB2D%2FWuXifLc8uJXMp2oLEVGMRLrBYVm3J9Pthzs2vTXlUnpcx1fDqE%2FOX5IsnyJQho79yFIziPzdNBFnIzTz7DCrQy2DnOUprGi4bus2k6J25xj8WSGpMwyx9KtifTNVvADLlk6al%2BxPYnW8Lvrl6ROagn70sYEryvOIblqzyJHv7bLev3lCAjDWfp7Qo2krOY0JC9FHZGxaMzwZ07iiFzym%2FTxx%2F4sren5T2zdhnMLv16ssGOqUBj72kPV5QU8I1dY0cJ1yuqroyFBs9cU7R2P4%2F9TOnjVwx2cZHrgnR8UeMQDysMEXUwDy%2Fisx42sqX4TKvH4oDwe5qt4jgnSi%2FYjJuKTTDEx4m6mZtaCaWxLdBAi2nk9h%2BZjjWmo17uYJCFhQgeEQwYUpublj9%2B15vnqpNnSk40cPOSN4pXQftQYaE5jd4DRsuFdClVZhDZID%2Bm%2BiZuoO2XH5UZZS4&X-Amz-Signature=58348fc05b1725a4a4144306a5a2234914dc267fa104112ecf2de347e0c5933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=79f3e83c9e0e076f244c670aa9479d075ba93937f03aaa2da156e7cbe767b250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636L5DLTE%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjTeoDMe9tel5mjYU8EBA%2BOXLWpvi1%2BDchcT2eDSOu8AiBFdpsaoKHqtf5yxtsLhX0gKRMWIbeB63st7AakJ3DRESr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMWKAtZp3lYh23ezpQKtwDiGhzShjg2zmHjYY2F9F%2FS0VsTU5%2FKPm19pWO1HK4RO4DbyxL1LmXh3ZIIhasYfHpeGQrJ75VOVBEgzy7fMrjxDxLEOhIJH1KyD4em83z9FSDPami74x6wKo1ItnzW4z04j5NoHXNejNBYyXhQZdLDyKmTtyr7fTXvxbPPOrctJ%2F%2BrdFmOnp1QceV6pZne8mVwec2uA%2F6M7J5jCh9sKFayHOR9axhYhUIuQGSyqf%2FvSCKsyT5INqxbc4nkjFECLXWUzmkcSKKsT4LowxbU9nQvF%2BGU5dbZT1%2BUIJMPuvUs8Stpd6goSXmgiWi3psnCAysj7uPF7kpbeS6kp%2F%2F46UzTjyO9be5a%2BLmjMZ73G4tr%2F9U2qHMW8fKJRiQ7a2yoONGj4WcwxZGsbVQmBdV6EVjy8hW8wXd2Qx7TKrpa7M8pOg9M1WP6%2FfomLmY7YPKcH%2Bl0G7mksvY2tm72SpEcosdjY1t0fFPVA%2BkToBTLDKkO0ChYV02Gmri1f%2FR3bKfOa7XVA%2B3Y7jmWjrQNC8BfbWtBzkzeLMgl7AhS9ThZth7cs1Ij3JwublMJ1xCMNAHhY2npYKrT2dIKLxiPmDFaUyfEKjEzlXzqVq6Czw0LTrF4UjcasayjF%2BdAIvYrOUww%2FXqywY6pgGRrznhQxPb01FPfm3PUmU%2BxByrhKgQjmzkapYeERGutB9JiLWstcY7CinKvdwEYxf9Z8lrtXuHXgAyOMNb7S2W9JyRgF6%2F57FAZxn%2FUJosZPXopHYwlS3KqFqfez53vFdIyqArFYNxJTuJMFIEGExnXcbsDjlG6xJyL%2FYHsAanSPtA2EmLQtGLHy1Rm16D4HuoUpGsnfoDdOfH60o1H7cWZIh980mS&X-Amz-Signature=326b2110fa42bbe8ff1058422399146fca4da0f10c97169f201e65909f0a6326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=c3b6ab4ac1e2c773c8ef2acec14dde7b129e9d6f5caf3cdc7994d590fbfe2e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XP47LP6%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCThUPXk4SDK7Qe3d9K6B487fDKexlS3lxNCebI%2B7ynZAIgFifY1qAb2Jlu8VntN8H41p3VNGpH3dbqwdNgQKECW0Qq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDB%2F1At9vc3Ybv3kHGircAw0vd8X0k3NmyVvWtGXOwzgP2TTtOMHshecakJQgobIfPbA4H6yeFbhg%2F8dss6X7zSJkLrJmmbinfCod8c56258q0GLjWzwGdRyPHNWD5hzpQDT5gTqD%2FRqj%2FdQyly%2BZZi2ceE5cgB6a6BQXbSf%2BiBNH8CHndnQhUfHc5SMr8umCiUHD0ExxwdZQ1MyytGvN4p4oHMYF7FFcjipneQ3Auu9xH%2BWhhZJBWsDVRMJJiqaDB4w2xWCqm2YvFHzKTLSdjEVbXYoLzzjU8iyO4aTU7soMEBPM7k8QdkF3mR7cPJmCsTcSy%2BToOUm%2F2VXM2ycnVDYqM%2F8Nwl9RQOFszd7QSel691tm2%2F7gchMJZU6JJ5i3b2gjpfmafl9V6ETTnBqWmI%2FrT2DcqisKTZ9SwBuYIi3jYViR7YBB2tKQ9SrTucbmOzrLDOe%2FR%2FP52KC9xRZRt4ZMtnNI6DQefAiEW22AwPj5PjBqIZ1XnB3SZ3BVedAyMSuxsjrueTPb7%2BjBGcIqpvwa5cNo8nyTQniSgqTYK2fgyVmrT%2B64I1PklN5tauFQZNwJcfW48VnzuleuyGFbymYusxczIN7ITpJUttBnM7FsT1LY212Jh74KvZW6oVjQeToSnwafrLwk6Vd8MML16ssGOqUBTl1yzKmE5n9JKswM%2FiZNL8TiLnJ%2BVV9Nc%2BKwuKZdDAhLoFhdAV095nLTXUW9P%2FI1sTrXsldBDfAtCMatS%2BCM6coBxW114xNApzTfvyuMbAdE%2FG%2ByBw54g0z8rB8z03n1D0KHQV4P6GDO88sjISWgU0NqaWbmXYHlKOfFn%2Bbr8%2Fwy9O%2FijdG4%2BJZdCkj%2FnbZWfScVqIhUoLMtk70xEjz935UBaob%2B&X-Amz-Signature=4cd5706ddf7fcb671edec5297929fe554c18bb712f64cefe9bd368a58fe30fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=90879d9680f88bce9d955dbdb71186da869114cfdb4448243e69ed4c26ccc7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6LSWLP%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP4MSo0U5R0DfJwyBG%2BXhwXceyQcQUHX2QnnM4xNDfTAiEAqXFIa4mECeBdy3LY35rRO%2Bx%2FNnyqlF0zVMv8KwlO9%2Fwq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKd2JlLjgdBOmTSQeyrcA6hyFXMXSJGm12zoZPDuqHxg0ArhYLfSvxa504uLrT%2FVXBr%2FZ2LGBCbTJ3Gaiw5wsWR9PZxjaQl1FdzjzJWzUnN7gRNiplifNXaDcgoerdNlQ9SfdKVKMtcwxPfG1vlInY6UG0eSd9BrZJkKc8mP%2F6jR7k01d%2F%2BbmwZ%2F1Q0WjBm%2FXqh0Lp48ian2D6FYjIaFtIRC0xK%2FQVyLDV2ZYMY5r4xVJSuVrbVain3nXwXNTf2M%2FqbFap%2FvLxtdj4R2wa03j5fSFIELtrBEZJ3ElMfU7rD75JGD0kO8wCgHoTI%2FOkBACPbwhRko6nbL%2B%2BT18MEfCJFcAiFwHXeIlT51IPgIyniL%2FmjxYZokv6vSM1WpcKhop9cmcGJft8Nv5h1HEHScAqsQe47ZO03fPND550jsbSJH26aq1LndDysSfcsMepCDONEnLAzP%2BUnswsZ04CDAdXD%2Fu6QeSES9%2BhwPAX6AZrqlpQ54S2Xzcx0iE7MfpiwZsQCG0GEzN1UmyVb2IJQjDuDn1XD9aoZ9feZLsV9onO%2BDeM9F%2BZNflDDWV9qBblxo4VOUUep7iqZvFnKyAsxwCVaIWnmXec52Isxwe6TkYuOD%2FjoNrAjCHtrhu7CnNP4fXYe38qHQXDDSXIY1MPj16ssGOqUB%2BlJUceZJsk8ilUaog%2BvKnUNNbnuY6TbuNPR2a%2FqAGb%2BGY7tkLhAhScL0fPCNYsMAKuc1HyX408di%2BH3RNwp5Y0rVvH3JM8iIyOIseMb8G1FDNUks3qeB3EB%2FjdcGY7YTHWd%2BxTYESxVqmRIHJOfl5tOOrRlggxHJhfTitKOyuVxqJ0NMle32PHH7WC6nk%2BB%2BG8CCmiEIPB6mH0jKTGSoJ664PIU%2F&X-Amz-Signature=67dc1789c2a244b1e5dd08704393506e8a09205b27ea1606ad22edcff006e45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=5eeea6c7be070168531afc1914eb7abe2d0a7dc71785b4247bf1d1410ee3f448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGVOPCHC%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCs2yPKln328DPFwdCiZHc4nIjT3FttMnF%2BWzco1Qn4TgIgPiVC4UH3cMtPytHnKpvUarZ%2BZIrtkEd%2FxB%2BPSVblnCMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDP9zfgKHdqamN8FZZyrcA5%2FsX7%2Be7xqJ%2B3ICgAiapNUa4wekvKs58CqMKRcKVahhKqa57mulR8AoPDHBUZnpijbLOHEOc%2Bwq1FQ7pUIY2NvBo8sMp2DZ5cTynoyeSgteE%2FFPbZ3Lev6K2goRkZgs636JEScJoHIzlw4ppM9FfEWznXEngEOrHmKxvr6Qvqu37YKbWqYhq%2FOx%2BArIJmPKCKZJyOKQ7AbR6Y5K8DAMzozqttVZIgrk9DzDsJblnoOcu%2FnNcXe%2F3%2BNuC13kNNArHwp9ftRyw%2B%2FtT1lJbQztRKK%2BvsLJYNXP1IdvgL8duNkE5Eg46e6pA6nQgldmBh85tkUQtVdi4sV5Vs0D5q28fdOG6%2BatLEhby2Bx2hJesvuEUyE9Uncb5lq9HaDfWmy4wgSQGzn8VuWTYeMDSi%2BTREjnCPWZkhpMfH%2B9NWB421tQ00IWMNHfTP9%2BHiNlTYHhLuy%2F%2FJfrt%2BOEO9ZXoKenntHqbJAr39lEtqTiYIu0EwHcNhNAf%2BwEFSP5h8oyttHdlAqTO6AsTecUEnTvX5vA34PCtqJnupvNfa9h8Bw4Pd1Zxjns%2FcNR1%2BUM%2Fb%2FDq%2FCfRj8pBG7D%2FQUtwXLFuyu2R9DQvM19NJCrou7p%2F8Y6kZWpt4%2FaawbjpKrHvltJMJv26ssGOqUBdKWLIWMQyUw0TXYMAWjXJ%2F0YDfvibmzqwYnXBF4hL4c5OWH8o%2BjNm67WMwB7A1KATPbJ8aMBBz7%2B%2BmQCDoLx5dUpoxfsXPw%2BTo6am992Hmbdyc46ikAuIVupCgw82JhjpqBUdjzqr9iriLMzr2NKmzjqMy3WeyQuOBsCytWbRVyUJabNP2J7rFojigNO%2B%2B8NHvTLgfYfzll8QzL%2Ft62NblJ4FqVf&X-Amz-Signature=9ea606bb7157fca7e42acabdfa90ec935ca45ad3c45dd12851718195f6ad02ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=211d56d2032adfc9df924d5c86356b67fe3c819571281bc1c6fc31f6e4289eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZUEHZ2B%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICT8OFx2RJCCXfJnW0u7xqVdtVpYMX5%2B5yE8X%2Bx5qPPJAiEAqBWxOGQmPJ7WrJqVhY53kQM%2Bh%2Bf82%2B8raeGwWJlUFKEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPLpkEAWti6mcmeH9CrcA%2FOM4cOEG1xFbPTKw4zcri8FYNKm%2B%2F9mLrtJPrSEUyP7vwxKxRl3boXj7rxmtNVPJzJQhz4PeUIdW3RTWlQh0PFmhsR%2FcZ9yy06%2ByKJCn9l71yCYrjqcnof1nheifsE%2Fq0mSVMeil7i53y3jN%2BwkoezZKutRWCFxaSquopEk15QSEGtb%2BX6pj1uiVbozgJNTR5vJXjdytPdMOaSRv5Ahs19oWnCn37dCRnbzLn6tt%2BSHkXoOA6P4Sso9Dwouejg0r%2Bymn4BzXOaVjrth7QqCfhKlK8HtMGcHDT6NQV21T%2FfiUKQQIQbVzUpfOg9gkYkhHt9KJlXE7UshNj3A1JZbGN%2BLrrkbwpvTM8ZskJflzR5gFSUQS%2FDQdx7MpF%2FvQIoSv6gXOG8Mdq7otXzbWD9cDEFphTgfvrfDPy0k7sAia6pOqaBjUHqo2WG%2B7wa3KEssiZdbrpQSoWKMQzeQ9G3wRieYSAOWVwNvvlrVMy6FxQ14QGLF0RX%2BISzGxOVb%2FFo0Y1PiYdODdK5gb%2Fedt7Vdw7E%2B280L%2F0O34hnSG1qzq5BR3ndn3m%2Fd0rCeF9m0F6V79XOyeVUAL09iRdmZs0nZ2eQXbnNk9loI84zJJm3YxzNv%2FtFcAO3Zy6y5vuHjMMD26ssGOqUB8ISm8A%2BSc52mFdVTbfl43ngfuEno2g5G0kOTTTgrBr4W2SJtTZoJISD9%2FIM3WqyUyiy9%2BLdKySAM5Hti8nar3ZDHJZSNuc%2BdMD9i1gGd7OvoZFe%2F82zNw4K2gjC7R%2FnXidolDPZH%2F9l6IphK9qWMhdkGijCeM5%2FxKXbL8C4r7PUZI%2FzPXP%2B70eFVwBHZz3gb6fUWg6H0awIebKH2LfkUsxpG%2Fkhi&X-Amz-Signature=323b0089bb88d6cee9a1de550c6f2f3ee12367044a2ae9ced86f1fe07f4ab393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJAJERKQ%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7oP779ObFokx2Y%2F4UlrjtIRXDB4vSmpyQD09%2B9omQlgIhAMi7cLJUq6KcdvkYrExQBVkFBcFAG3MhzkxHudz2%2FfsyKv8DCHsQABoMNjM3NDIzMTgzODA1IgzSTDiI79KQX3IHRXcq3AMeVBIAhfQ141uBsfo%2BRwUeJVRm5d4q1TUcFU4ilxtoH2OAMFuaZUfF00ODhsQ7%2BQBnVKwsZBpZ3M0Sp6TO6vz%2B35DOkELhCRjgIVfshkyLhi7N5%2FR0zfrI5Hcz6HDJIzFWcGvEf4X5ne3Y8D1IvO38BfyWhLAAyns9LwOEbjAf%2FABMZJmCTSnyW5NiITh6yPK0dU4QQRjDQ2hoXyHEAGGeMZDdNAE8eM2a6n833Y0kCO39G585sEQs1sudFc3IAN%2FlYyKo7wX294zICcQP5n2GFoblEmgg23eIJ4xvd5MlPhPeXjJc%2BGJbdPImyOARbMg2EYpoD7nSk24ycyMyhmTAd%2F%2BLS7bPVl9wTLbH%2FoE821ipYjYcQSMaF18ss6pOIhAPBVShENxS1KYU68bB6tzQV1ct0Fbl73CAiQR5RsazhJIZKuJhJSbgOyUXizPhr%2FPClyiYnW4dzaSDRDIdOUQLXLutBiJtQ8Parqdyoo29niWzJt5ab4Xhy4hk1MKURpHGiGCWcQyxzV7gjHQSCsm2ZBOrR7grEH0Fd6c%2B24CfY%2Fvpc1SBz8GEapfPBUjcEZdWsKfWKwYKMXNCbAD%2B%2FxVoGxOPyiHgn1x1%2F3FmVvrR%2FQDNOJAOu9RfCXGxRDDP9erLBjqkAb%2BLp8hh%2FJ0bTjKcux%2BdctVkNuwuhH0RDt4HTmWWIseN5pwZIAR%2BCL5dHjOKUbhRMwGpBpUGVNT24k%2BRkkgWAibGQ2gmgbjUuXq3BTDqLuA6EQJ6ceCRppkt%2BkUAmjuCNoVUfLS31pziNBnmpTavg5AM71auVKCPRZdgLiRUuLrFhUGYUrW6ujYyM5Ujj4xdWAyjSVxF0mFUOlyrd9T09vN2F9hJ&X-Amz-Signature=49b82f7fcaab06ab414e60180058c6fcb77581db7c4f6760350ecb6ee846cdd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LR3YPV%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGl6xjTxd%2BXRXhvyTYtHUa9c1SFR%2BD9k%2BLNL6Jpjar2gIhAMGOSwnL%2B5osfUYeR%2BcoKeKXkHJFcRDQj2UFTrJ4J3SqKv8DCHsQABoMNjM3NDIzMTgzODA1IgwKPOYEGM1zPyKI7QUq3AN6a7qa%2FwhOiK8IpO5%2FwKxZAVP9W0l8%2BMRMIpcoJiQUVQjzyFavt8pLPuZLi%2F0u89gbCJskSNhcFfysXMAWtmw4jJFJ0%2F2q4d6uzKsYsRbBo5Y5dPpEEKcf%2F%2B1i5ez0Hz3X2aUNWgV5yGMkisaQ3IlERn74AoEhC7Xg9ANIQGIXT8bQn1VpNGLebfVboVDYwVbp8UFO7WlpUJ%2FcEQcwD4skTQL5AzNOiVRFXBx5bXTHek3EI7bHSRRRAL8HSIF6qutJSDakfYt9cWUwlSCmos0EYyu2R4WiNPSUMIL9yJ3KBV7ozbKvZ7%2FzEYW6LLWFP492XydSn8V%2BSDqK05GwL40VpR8oPAjECwoueTIR4zBMavoe3wIiIZiHBZfPikr8TYjhdBoDudnLIYm2DPRUMWCf0kViFPX1Y5bZht%2FZn2Bv20ugngJXpz94Y2cSS%2BRCeA4S2knGjzQf%2FJ4%2BL2tRJsZCrRn%2FRqO%2FZTByPHTkhkmfTX8wJZp4xixNdAE3%2BDvX9RSZG9Xm3U00S1rOeKE4EaXDQS3l%2FfD3%2BxcPsXX%2BSh6NjGgTPTiyXyFFo1JPs5OTvxfS64mktWyYK%2Bo%2F9wjJehftu1AZkw1BbS6QC%2BTMBd0HJ6ccOIMqzN9m7Fkh2DDS9erLBjqkAcexc6lh9U%2BUWvwUfKLFG4RgGvXgCMV4TzB9j4ntQs3wLMebOmkas7k9qdcxcCltYEd2IEiqqAuPLzyRjWX9UEMWHDvtH0r4mckkvDvk%2BEu9fYLpXeFGkon%2B66T2yYtiQEauAPldn1Eons7k%2BnQAy%2B%2F26jE1%2BtFu3zpFORSK5bbSdUNj7TFe2w%2BUm23pR1BmpUlbN2TV3k7Jtk29vFoDvK9k5mMk&X-Amz-Signature=1ba75189bd978a52a05b6829578b3c732f2a8a80fdac55d877826d63c003a315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=9ab2d81589ab7dd601d47e0b4dea77af7cf42ff070f28a42381abbf1321629f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODKGKCL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDikboh1aOTFKHron3s0TX96xrrdFw3CZgT60KIjqQYzAIhAPYUosCk8aw1VO3pHvCg8h4NoBYmfWG5%2FybXeGT%2F8ehVKv8DCHsQABoMNjM3NDIzMTgzODA1IgzLkavK0HyZthpgHXYq3APpml32g%2Bk3WziTGYS%2Fv9tHfN%2F0wAJyyM%2BiOTdQEoZPtmhJk6VpErcLhfY3HglqXOYl1m9VkLCuRzWqPHmj6cTtcAUnG3xSBW0YJpXlrSIIGyrmDNZ9kgzTiB47Gr48SpifmLEcOazlsRPm83SJckNhTEnnOGXZzTJfBS37YOqcMlQLeqgG7MgpUT8LibPX3FMCNezjCATxTkBxe3FL4adPy1VU28W74f%2B8yswPMP33ihwgnzIHm6wcqC%2B%2Fhjg4eicDrfN2%2F%2FD%2BZIbhnCnBs0seMMVHO4Z8YRdyC%2BJEQbDxLmSfLwPVavS4pDQ8N8VLPzd5U4rTp4YRf3bGEUPx1%2F7YMebBFVoE5JyFZUk3B7VNsPYA%2FRQooVYGDdSR6H0FPD%2BhZIjKCCxx%2BMxsDqJ3BgSzGrUZ0w%2Fa9H7Anj5PCa9pNk8Nz5IbTrHA61MgCtiJtVXGzz5Vdc0A5SlgKhB4gYJ8ikmr5JM3IfFgRtkuy%2BRiIuSKSIhPV2SgB58hpFymkeBE79EmDL36WLDBEKSiGgwrTZCjvCPG65ckIhs2lPvDQv0QE%2B%2FQE9%2Bz7pKdagSaiRe3wsz313eFtOGa1bVy%2BIVbpxAhkb%2BunHcms%2F4RKWG5o%2F1Jwv9iDaevkOFjxjDA9urLBjqkAQR1iQ9BSh3W0ObOzWMqhUgsMliwl%2BEZH%2BSajPJ98YhvGqeWaGR5e9wnhQ4wabEBB6XMQaA7oRFGbOuC9YTsR8AyVm3ncfQVCnZuMZsswX9b34mnBlOyciaaKgCbMtIRHwLX4YdcVKbMmJ2T%2BB857xtEsL2nttmaSj64t3yzFz9Bsp%2BRHslw8JSxqkN9uQgFNaeIcCl4QbOOzrleqENQ63AzWiVp&X-Amz-Signature=cb0606333879fbcbec9dbd51650938d47ebc79df208cc4d2b11dc33671cf97fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=bd25ad7c7eca954a801a120c25f01d104bbea4fae08d9b7fa79b2e8056428100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=40b67a677d2c39ac40a662cf9923646a63f94dd90b8eaa1ac37d7cca55c2e126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=f14a8868fc9ba584045828abc79e58f95ccdfc9ed16315615187d79f9bfbb2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=ae3b09587fd6b1a440c5bf3693d9bc89aab5bc49bbf23e848895c3d05ba91ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STWV6FYL%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwjVI54YMX6NsZMdCijNVjLbqRzpAV34dQ4TjVtjjA2AiEAmv%2FwMq2dxH4EpmMFigbA1D13T1skyaaG0mW%2B%2Bm1Gmngq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDO3lsBuuOYrBNDOhsyrcA0XfuRVZaqAZ2nwBpvSXD2O6KfN55dWHt9BSWURt5Hm%2Bp4z1zmmDAnp3pOMj%2FSGlwBRN7FW%2F4rbeUx%2FeJzJ2CEa8qxD8Dv2FmGVtaOKxhalXTTmYe6lU%2BlzAb7EledL1BVMg7pIH8svd5Pb6zKNycwl%2BRS0T9RcA%2FtCbwqU9PCeAQqOL9DzYZ0Ywut7wSxGeaUpen6cAHkdyo8tOz5HkfsjE2bIk8vK2Ai6cTmARgVu5EZDoRhsb79XTJMLLpLw4pMs3P6GBqiJxngMabmVYC1jq6Aw7t6W%2BnVgz7BjY4iM41vdvpvk0%2FVNyICJbqGdWuby%2B%2Bx2zZ3vZdD09kGhCgOhFofxq%2FLkCXdsdzBmeXaXgjpVATHv39zmglQt787OvYfEEW%2FxBsos8qG2%2FVL1O63u74Bht732tAwqREp2GzFxjUZ8Z2bqJZXIWo%2BsAqcQ149Lxq6%2B0fMHHXCM%2BQ%2F637UdRIcqvRBaBpkV1mGjEn%2BHO7Ii24xhj8qxpX6ceisb4sVBYgwo6BM4McGWxy94gwpff1jPnd3P7LwFqpGQ0n7EwRfEYt0ffQihLwiXGY02wnClsNuW0HXDycB7oJRxm%2F1oSXSG8zFzg83MHUTSsWQulBEf1xNoq0QzLphMpMK726ssGOqUBP8dz6cXKkPvjomUmY%2FkSolVb%2BIQSPL%2BQBBAdrE%2BPbN9COb8we%2F39fMdrAGTvmPVoegzPs%2BODM7ETedmPgm1E5n6cYfL33sK2HYJBBsd8i4IXMUfZbS5U3jN0GBJ1uhUQp1MKYaTSk%2Flrrzw0Vjqw%2BURBtNsJ7EfRaPYLnWsltO%2Bwff3EFo1u3po0exguIA8xqfluEdwG%2BehjMDnXaSOBa134fiqE&X-Amz-Signature=bbc40e03d8f74c67ba0fe6174f2350e727678985b92ae4fc5148d9dcfd22eb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=81d26adf7ae17f0db6a47ccaf8f10e0fcc5c283bf45c2011e1165db08852b670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=39dad90dddcc0deefd9e50d529433b242d178f2511118b3ce49f7cd88a86417e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=f14a8868fc9ba584045828abc79e58f95ccdfc9ed16315615187d79f9bfbb2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=151dca361b7bd5abcdf7947c8161c7401266deca9f2ea4c74537756721cb40aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=72622e2b61c9851e91f583e4220f886ab254d7fa075f2892ca98d2b56003c663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6XTLBYN%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F9syunZul81K8zunYDa9xs0RSgk6xyzf1%2FvmPsPgs5AiAnULLWjk1F5OeQx1BRdmWsrHsGohx%2FSvPGgpHQozBubir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4cv%2FLv5aJ7I5xkrTKtwDQxQzWGvciOg82ge7VAx88NitXHGWRpmTyYBZDAqWIaREIlsryZqieCC1xu8utjBC%2FLMtvyY60I7ElN0ZGpbHE%2Bujg2XYEw8VOiexBcRrlYue0qB7mJ%2BLeNsPrn7ZhFRRJayUdcwA5KOqI0k0nV0st70bBXcbk3jWehyxV87GzqI%2BY4qOW%2BhBYTBV%2FZrSiwAEHPtqV3rOiolkMVs64CVUu5I68U4H7XMjidkhds3eLFL%2FZzO0KyElRIRRDzL7l9%2FImGGZgz5BgBYT0RaLtRMk8w62ogBWZkkeB23uY85y4Pek3bYyD1TS2P8XW6Ds%2BSyUw2GwftYjhxNjgL%2FUzFG4xgzU1sm5nZG8OkgWkqzeCaLZaqYuo5rLo2LaBgn1a2ZR066K157IyWhQ5E2bndwK%2Bl9XXI8DsiIuuDhVYkhsX4AzMeY9JBjETAl5%2FWYtz65sSN%2FJ4ZK1iHV8hEziDqzD1Tg0qv8q9QeIzSXci5hK1lpnEevxuE3Cb6Vm95lvafrzN8CXVtJoc5ASNtr6PVcpcR%2B2ANEMDcydxU9ZH68gzGGtmMKv%2FIrZmTEaIR2033YyU7WbSMa%2FoHBxrHRfoN1Z8JdlCcxXZxDde%2BHqYsgAixchHZ%2B3AAQiBQz73wkwsfXqywY6pgHfXUqw0UaCbpaws%2F11XGk1RIlG0oPz5AWzTGSZgny6cPgfbuIByf%2BOLsusckEIt%2BRBaniCDYeXGi7O2Z3rgHtyoxpL3VwJSOPOP9Nq1dzZH9V8XrMonAUYZ%2BfgaIki5PFwGTT9Z4TTbLz970DquNt7FtfIgMlze23FdvAYWO6yWPPBIly3fWrCbFU4MDq4e2wMHBrSGNPrum2cNdf3PCFUTslyUMq7&X-Amz-Signature=7f3e256448edb4e27001b339d70d0e818398a85e36fc7e40c68109a652f98a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


