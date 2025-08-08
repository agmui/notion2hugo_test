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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=1568c87343f7de2d3d711522f6bcf9cbe3ed31d92d188625cfaed70a181ab6cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=fe2f628aa17c8e8c4086b557da6454d584759fb0be2984963b74e4584297917e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=c117193ec955d17c995e59a86905aa0cfda3d553268f591d5937d731d7da372e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=1cbb056d43fe2a5207bb1fb088d8a7a272ea1309706ae4b3a1e6c1bc2e989911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=69135abfbcb7a4aea45e0f4590c7afaa95779c3a24e02f5d9476dd94c681e122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=1e9924bba81cef94fa632c6cca94a9f93a46a38e678d7c480328f6c3a4879532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=d799f8a21f616bff928cc54c3bf49f5958d67471f642247702533c91511ba9d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=e7819c827059aef25babfd1c9c0a90672fab52c7a9d19d6eb08fbad234821e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=7f2c74d32ccca1694720c5091337d01a9a9d91011ff7d339f8b139e679baf105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=fde36f867bf1f35087ef94180d9980dca216b3365447f0be3b0353d0cf6b8ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TUCNVDG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBvd6oeGM190k9MfZ5VzhLnitm1CR3ZIA2K3NfVsqJciAiBVL4%2BHbzSLZJSihTeJ5MnUzWcXmh5SQtc0HszntgvjJSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMul6T2mc39ePfEcQcKtwDqfYSoL%2FyQG267JNtnCVC66btSjM4%2FEmRbkCe2VvrMq5PDli%2FxlnhNIdg%2FFmisATJ5I84LtMkcs8h%2FRO5a1QYPXktZdR6DMPtjkZzXBTgNWp3SbylV61soFXbrgikwa6KwLWFfBmeaY3DuD6NmTzIp9mdV45oPBdpsDMgFXGY2X7Im73zvQ09%2BzJ4g74x0bAXyVh2a820lSXurThb6gPJpfkWYOMbE6bVloJ9AVROBL1i8zO8d%2BRRZxQfxikdNGZ%2BDVN5fZ331%2BNLFNAevXuHodUZdpvdSnVTgOxxVHYrMLgzEQkQRdN%2FLZAgO4fm%2FZI3iMZjKW3YYTo7vx%2F8B610XPEHLxJpAawPhCbM4jVav72PUKNe04mfduOwjUmpWZFV7drpHPQkJeKBhZF3OjJtrQHUnG4Pq0rxxKOwqK0wZu1m%2FyNgT%2F0GpQQhl%2FKtZq4izdJJFrHuRAbqlhIKvgPifLw67EwbIa0O0vExHKaMXgOREfo%2BQnLvtVKEwyjQ02upuG9CE3PAUR1uQoWbpa1Saay38y9aSuyQVMPjk6ySvztqr%2F0pNnzOC26Ebby7wCsThXO0044MDZxxtaINrg2xpjkAK8jmgSGlN%2BezaZuuY9vT39jEucC3t7ITtwEwlfrVxAY6pgE3WNxBuaxsRje4TZDNP3Vsa6kiCXaPA4zM6EGM3unCOt9uGHPCdiYw40wOwi4rRhu8GGF00hYAq0yq6%2BU%2BY2zMOVLdxcZvgaTq0LDnb7Yuda37l4DQYycwgNqex9YpTH1k2vLLFVqTdICK%2FygXOaOsxrrfpYHQiJEmIzTdfr%2B4VfwhbnTN2YY9lAJmNIwoc2xEOJoprSt7rf6rzKdSpIo2cTL%2F1Plx&X-Amz-Signature=69e2de84d50623be25e9711dca24a9c54f66f0b617735a19c1b976b58ca93fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627XEM7OQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDbaoTQP7JBTFak44JI6%2B62bE44BPMi4DWhqop%2BP3HcgwIhAMuTPpzBXgcNgl9I6daQVoxnJ5C%2BUrbQpSVS8NRAHmWOKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9lZlPNyf3diV1oxEq3AOatRkR3m7xXXfTF4fss8R9QTj8q4wr7PEh3YqK6yUL5prsz8O%2BiFar%2F%2BSYYigHoojgeFyy1VnUFYPCscIxdLoQlYHLKS6zZ3dNmKMbdo6a8uXrCit3Wz5RnRk5yjBZ43rayVagtDMrqnhK%2FPupZBNKQriYWNpdgallwhMmPf0tZiceK9ZnTyf46S2PpI0om09n7p900Nx%2BHrzX8wXRzyvtyOgqN1ncsT%2BbxsgoCrZqLSbF%2BAlvPaVvRG8ZeEfSCsPaU8qsbyAnnfkz1%2F2aJ9fJG47tNygXpmhMvvRskDNlo7Ypq7Us5Ae%2FRKHV2VmLX8v%2BRmojuVdJpd%2FYVZI%2FulCudU%2BHw%2B2Gz4BivEF5YSaooqkVRz80ageAnwQzW1ybX9EXz3BERybTidQ9lTqsN7Odruc%2Bth326v2nn9T0qjrJBztwW1PzRvQnT0oDxiI8zfRJ1yc5a7T3oW79TtmfdeQn3Ft0q8ImuSEl%2B5rhZl5iIB1VHGR8DkuUxAFLZD0Zvj241TWhD1hD3n17Qerxv4uElhxsc37VuzbN%2Fvnt6A0JHXJSi0QhZgnxxJJjEP40hDgoSZCAm6DBicqaQ7IxnSoWY8sPRO%2BFT6T03zYNduzSVgYQRudEPU%2BHlNe0hjDp%2BtXEBjqkARaWC6i%2BpjrbaNtIR0wlcmxhYjXNcOStNCrdhkUofqpSQHktR6SmM%2BLcQ9IuI5ILvIG4Iz9Y2DnOm%2BRM6eQItEt9YVRLQFsim%2B5fTvdm99VOxqINLLsKk9NHjdeDTIX7jfZIIa6l4GzXaYCEkiAc3sh7T7AiII3rfg4hV%2FiDsmsa2e6EWl5AbXkB%2FKjd2rnM0eggVH9rzj6tbROMx9kAa1SRXh5H&X-Amz-Signature=88f3c74630b0deaa121598ca3f8a53306797360c2138035b1832b9dc3873aa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMH7ETLO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIH%2FwQeJe8FF1nnXUE%2FAy0ZcH%2BOghVS%2B0RnwKU5nHVCmoAiEAyIomXCbB8JY5uOGBgVPVTzAVPvKOGJcD88xz17R2uuYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKpAjzfWdDGJ19PcircA794qoZkJ85k8x0xUzw8OQGaWAJf6eoviu4DhynRywyyXkyyFrlQUWYBynMVytTE4efEKR7cR93AHCQzYL19mRrvOipvpDrnHyZPVBmKNiMUEwQguZYpzI2K4dav6P%2FKPz3JRkhl2Uh6GjxJxt%2FuXOxD2djxlo0yyKHr8a27Srbpvs1LF5cudlcCUrn%2F4lC8LwLF0r84HvaAFjSePmFCTK6m6czvIpVKQ%2B6Ox7IhDhAN%2F0k1e0glkiT5NYChWeNRAm6%2BNUQ45YcaSukrTbddHwOayLHj0XEIvgMI%2B5eNTYdtuzOUHviwP851PVLkcPL0ldayvkXWZS6xDrOZ817%2BmMdtfHOCLf8StI%2FdMPHOX5%2BuylHELDc%2FE4Xs86gT0IEwafSN1OGDdRsIPlxezuRm1PwFQfr7Rhg8O656XobMZOIdwv7gycLzsy7eiMroosZKOTvCb41bKX1kusUTRSp5oucm2K11VvpbRJNw1ey1P44OgqP4fnk4QUuZqYcYaoraPIL%2FPB1DTeLJTII%2Bc54BnDPuLBAHXfLG0Yn%2B9n8hFOLB95ywf%2F9qzG4Xo%2FDZ3vGPRTkRhrTVszJ93PmrHMpkKPYJkEl3YVKqQ3xq5uPS50uZTKQ9UWocXHBPyoLIMJX61cQGOqUB131U6V5V52j%2FptpU67lcAxWZeyz2lmiPU2izPzwM2w6aUkD22MV6gR7M1WGg3DhzfZxGvggM5sqbyX4oy0URy1lqbOdYpq3LygiMVhYUxEZC6QN9sU9E%2B%2B4ZRlgCTzFjLmcxEgb7pRdie3%2BOv%2B%2FiekTagxKc84UUH7XrC726XjLaoSc1iSHCfWHMyP346%2Bj%2FcFe7PaW8LRbeqvsY718jfMIEGbM%2F&X-Amz-Signature=4c5234659148d415dda48633a84b84c62cbba326fe436c653b7843642897cc4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=cf717c61d96351c2d1ea3e2f46592e5f136f252f2ca454d4d0a937e5d0082693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3DEZQA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICP2Tij1BkDr2KXUKJ3dTogd9vvKhXRpunmQ53sfigQbAiEA2VXbkBg46pUc1jABOP1WyQX%2BRW5x6k0pV%2FIJHcN3YUEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOHiGrssDXriA7hrMCrcA%2BJJBTL%2BGzzTIV6S4UzBI0W0wPILcKpfgWrd2HX13%2Bg20F2le0%2Br3cYhILjzWZ5rRvB5T9tqakuxrkRyTulCIayb2HiJu4dZM7RCDNbACJhh051Gb5dzcl%2BMNxJlg9bKUw1Z%2FkAVabWZRhgAmeGBkTBXfZT%2FAASsVvRNeGL56YZwiM4ZJX0ZV64GoESlpNj4OrrMMVaKfgCl0%2F%2BfeL5qv1zye5L5JeL97C%2BF1K%2BAv4d1%2BiCUyOzfTXH7B0bhjc7Duf%2FZzDSxZJUMfVKhOmviIl4Ko4q3%2BwadGII1Wnl8k6kOZdl2Ig4xDF0bX%2BCFUalGZLLRmdiOf%2BPsZrqFSaUVzhbW60uGSqyd8nJV8%2F3j6gjdX5mjiiqKM9rsr20Zy23nbVWkCbGrOXedhBs9JtyiiyyQ6nmh60pCu74E6355%2FMl9VMmCu3fR2b0RKJkgW3LbIQ%2FinjlRMGPHk%2BK2OOJUNyWwGBq1Luuw59ICQq8bGzo57w8BILGvvagzdzDIz0SKW3MibEjzcAIlX9eoeapkw8bkbq4cKdpd9Dx0jQKRsiPV6GGtInnzgi%2Bdt94UVrFlccRTlJGrP%2B54Juk0pCzHdnbKmbUW2ixFx2elgG9hgPNRaqRik87rEStuFGFYMOb61cQGOqUB1bl55EDT33wxooaofibb9hN3w0y6fV5H6QdRa81q%2BAddoFCMycSOT6NAeyDGQKGb0HJyF2WmcZJYwDy0oPNUnAKt1l6LRt4CIO9%2Fbi3WOhp%2FOETY%2BYHUv7Lj6IFA7Jm0M9f34U8gke47oUqVLOV8r3rvum78REYjqWocVSBc0POkXJQ8I8pykWfICUe3Da%2Fr8JIApoewNy2Txir%2F3iLa2%2F6fseNi&X-Amz-Signature=3db079c46f494f3b953caba92ff1276dfdc100e81a2dcd93f5741c79785f02b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=690893a4d796055afb7d4dee0a7f9835dd6c7d8081b6f979cec19f09de866ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPYP4GZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFnDpvO4GOpsCaw0rlyQEpgUpogKImVGVcwCXoVyYn6jAiEAkSfolpK%2FhPOaGXXw0x5chAaa44e51um14zfd0f7%2BNUEqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCmM0WWSX4CgKlzIircA2fnHOKbOJiEctHQXEf3C53ayukldC0wLhZRtmB17%2FxMlYBiK8kEi%2F99H2fvtda4L2UX%2Fyp%2BhxCMpM8WcX8fgoV8Sad73u3bAzhco6JQQsO98qK1DnmDkSAnvGSfN1DHoNBqx9l20hKsWyKQfwdp69DPQviNAnLZs3o%2Fa8CBBVxKiM%2FYsiwiLDC11P%2BU449R9ScMANSU177Fe%2FpBrGWhwXtNIqZprVO2fmWDv0%2BW%2B4K1H9uSB%2FA%2FmDO8g14gZPpT%2FbeSiIFzkUTIAXg4jRsYxWiyxtbmfo72wFaKZlNoPkBkbZANq620j9ra5T3YbAxGXwL2Nuowmh15pCWK0LiYZSjG4pwXd3YU0tbPprRg8NwiwNn0zCQPQdKGAyOtHfOVssCgAeEF6FkU%2F7evk9cojwKR9EWyXAio3gJ9KhtuP9MV6Bwu%2FXqE2O0nj677vcWyGsRByK6Z7o7mG%2FWbViRomZ8vCrpw5yKfU3evaGQTLLz4CfwC605LUgdqgqY%2F%2Bb5vY%2F9t2q3IUSl%2FRtwQZ68YHE90V%2Fu%2B8%2FrnIMQG9RtK5x6BYf0ayghuUZHPpRKgO%2BYqwjJiqaUdABmDIvcO2GpRptIv9m8%2B2TPfIcNEDwOQT9ti0STcHXxCAE9r3TRhMPP61cQGOqUBxXzo1lW5J1A50q4nGYKfOr8Yw1EWkCwD3o2wm9kmWNSVR5K%2F%2B8bvc3B3ZaCc2vdcZH9mAPPOwR59hSl2oLsl8hNtngMqAoQU4eXao6GGPlkHC6H1n%2FiQcjFAiqRrh8gumEjxwbdnwbDTxc9EpooDmjtBi3q4QS5meg83FM4Pn53%2BN05gp2RcDkUgQXDf86nxc6Fm%2FROWa%2B6B65B54Z7INW35SR6D&X-Amz-Signature=c4c0bb96e0f1d952e16252b5c84d2daaa898a3df88da55d6726dbbb0a3b4ccfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=d2e8838ce65adfe9b2cdf59f8110f36be6e7fc315839838e4fac7d883a5f33a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQHJ7TZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICDaWmT9cvGsNPBtEQALoIphEU%2FVNMIc20Q%2FfrAoelbXAiABsBLow%2FKPVlY1xifO77sCw0fYqAOYq67Kv%2BTy3Bz7yCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgDhQvhwZ2x1s%2FPwsKtwDFK4rHIz04wL93zYj1Qzmx4IMK21TuCFiKUluPA%2FC8%2BiXwe1DO4Qbij5yc%2BzTOubIQvsMeOsG1URn9XS1UpsryExxAwyVyyObwN4dzgcKWTmyuXNqTEzFTDP%2FPG5qYqx8EKHpd3QjP%2F9K3I8%2F1N3b%2BwRZYqmn2ORUouQx9YE%2Bbak0QWPakU6go9nY3E%2FfgaZA%2F3O5lCHV1PMBf2V0RbZNbiwgVqhLFuEo82MpmcEPVd%2Fu1Ub6tz9z8qghjFUbCor9zYLoSTE2vDOruEft%2BzPX7Ac%2FP%2B8ICdMrkApTfzrivhw6LidWygGTL3FxdSHwKzAFH0RoYW9x5b%2FhhsYBTKd7zK3%2BcPPmgSVi%2F3XUip5Cuh8%2BdKalZNascUR9mEagb%2FOHz3di6fDytMooEzfllt17S6Z1kxwCVXqF5j7mUj42D%2FzXsTx7p2uHaz6RJiV9Iqsmtq7XKnrr1u%2FIYYvD3sN1BODyvWtOsW8PmDzLtbEMrPELGOzbZ7AZUmgebtBDlA%2Bn27hAxgJVDeuKwvIBecSiSLmhq3ZlHrMxy%2B86Mm8p8dVdyEZgkei9h%2F4R9yAzyzGV4O%2FN1LuCUXHRuoZCLYFE%2FvPYsFQoFKpro8QL02T2PBFFWfUvnQFZn0bDAcUwlPvVxAY6pgGX1gxzRT39IJsjPV7tPfW47QtP1tHZJ7eRR2r8HgsUMFTJHakJE%2F0HknGcyuSMG48pb3ryFQkE%2B2UaVQ2o%2FxywfY2dcT6obPTvO5duDlLO1gSK5Th5J9u%2BDaFv%2FNlVFpqvjij5GD5QcvEiM1Jp6kSkRDXfeWqNiaMPHi%2BVqxq64LmRCiYN%2FKE%2BWDyg6IDZ85XWX7H8JmDXIqCBbcvaYOhiipZnrZ5k&X-Amz-Signature=a1787d0fc792efc30ef4a9a3233b4d7c2cf1021f617bc6a91ccc00d3db40a736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=d413a326e8d1bc18d8d8b82ff233c03074748619a594e457c1214daab1be4c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVDMDAE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBHEm9MCGDZpuV47oiYI1S5ozLUR%2BDnT0RiMkOD2LPOTAiBwm9hxJnzzsgnrIhMDtAuc1%2BblkgZmgKxZe7r2DKvaySqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FnTxU%2F7hX3D%2FL74KKtwDjwYot%2Fm8nuEBnUzHMLpp9Srhvn7WQzwJ%2FpG29k%2BtQ68p2%2F2qMemQWLBLHPo3t0HI6oiE39d02O47I32f%2FcuvIWGwwOoIqCRIw461f%2FwGOifhAYqArpe10BfJxbwD5tLQMNPRXUcU%2FzbUmxZZMfSv1BA7vvQz97tWpwtdyD0X3FOjKHajTbRuVvfusvPvp4BnP08R64AM45dzIjSxDGOOAhITBqm86W8cxKOFCH1GnvE%2FwwIOe0Ou%2FjfyOolBCQDh0V2KrQTP6%2B%2FYItYsmg6PDwyjjA3721xot70AKYMDuP%2FYxhfaLIEU%2FpYUBJRaKyU5nijTNgK2HnSUB8eL4DtJJpqXdm5qoC7jEYDtVrUhucyWod7dXpQ7DR%2FYmsWmlVq9sU7ePRLKGtwhTC78VmPpW7wgfBEnP%2FDTb8jP2EKUWHq%2FmJ9Pc9Tgwp4oGL1eyNwihUGeVnqRokU0y5CMxqdQPN36jmmU3oXijR3IfeI355Fp%2B38THFUZwz85Dh7YQaFA5GDgLnePi5oSBpL3fA3Deh6BVXPeOO4KjfxMtkQztrsiiUSErWTw%2BG%2BdZd6ek4UnVksGeCdCfweS2bNx2pfN5tg12CTlt1wsAzQH6Io1SPjYHp79%2BS3H%2BSnrC3Iw6PrVxAY6pgGfmTVMoQa8djD7IQxVIotZfkFZ8c0RreGfPB6KqSTjoLN%2FqdipTTbvGEMo4J8mAuWfrG%2FCbkken05e52Bm%2FguaV%2BtoYUvo5FYUN3%2FmtteLa5I6r%2BYHnB9Qc%2BsteojQFwPqQt3xgQu2Q1%2F%2BYQwCBUgxSmeRgHKGf20at1poRfyHSNcCuS448CVRCMDGJSSiIBly2t8mmzp8TkhT6igxVDTbg5oqC9Fb&X-Amz-Signature=6f310435026ab6154d9a41d9aa9c9bbfaeb37af25003b59c45e8dac09c1b5aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFXZBUY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDWKEMgtcKZD4IblXTOYwXMySKoxPBBATf7Nuv8NW2qPAiEAz%2BqgLBSHvwwPf53VTB0vkler7u34VlUf2J%2FJX%2FRUnIIqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDITB70BdIhPfLQIYxircA16ozy5rg1v%2B8lpGbbu5oDNjiRUjzY%2F2hoRcNOqEE21I94OCMhaeYgZjM3DP6h3l0LJNcQuju%2F33oGw5fhS0WD2vH8jHG5hQdmNifgsoZDbCP%2F1cjSJWhuaxXFqu5WQWxYR3iTGO4zDQlvb3BPEQ3ggd0siANFhucmkKQJaYTKxdcMnrCuemjtg3Et7POwEM694eAXlKrjyVbDPv2dBxZsGUrPWODqggNyRv2s5m6NmZl6ToaDoRtuafyQX60%2FFx2TMdo8JjfWSNjqcb%2FWQ7k410%2B3JiCGLvEMJ9IMxmlcCdm3iAALKFovzu70F1JwcuzwI0PxNH5BvcZt9ysUzXQO%2FrPmoqzHVxBzAmmreUFeubAtWb4rTr5R%2BfugInvEqBoRs%2BtrkJsLrwHDNpZY5f8peNhJtwe5gYWgV%2B0h2f7%2F53RVrtCVhZPhGaqDoRdjc9Ccc746kbjVwsJX1PCj7hbLSl9V4NSMH92CmB8qyL%2FkM974K%2F1T%2FSNEx0OJsvbwXhN2Fg3edhLt0t7Edq6fxFQ6Xi4SO1MzjcK4C2S29Bo96E%2F6ZPU%2Bdt4Wt63kw1cR2%2FLG9p9THB%2F4%2FLAuIwB1XJ74uTkOTu4oPQSfzqeG8dGFAp%2BhmQwlfK18Msrh2GMPP61cQGOqUBBayJeHcEcLdAtewjWIPu972dD17C7vyMgHE3%2FuwqzWratEAtubbqS7TY4jpbPYcGnAVJim%2F3AcR7kbb4Cb7eAXoBosOB4HQB9sCkpKA1y0sxDiJYQ1C6fEg69tf0kCPNWxwh2PET0l7Bq68xpqPu5miZBhobd%2F%2FWvL9xbo2%2BJg2xc3JLPn2FyeB8M38rnu5JGpLHqdChqagje3D%2F3zwmqEnwxTmW&X-Amz-Signature=dae2d43c47816c2074541e6fde03399de2208ef3dec7cfdb25e26f9618d5d0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R75WIRRA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDGo5oGMLIo7BGzRcwcI6wVexA5RG%2BPs9L5KwgvgFVd5QIhAKG3e0eu4UE6775KZWBJQ%2F6AA38IcEokPAiLDdVgkKB9KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztPmp7GzySz2hWTUEq3APoWAJkftHlgKwto2Tej9Lfd5iZF4Ml0QYZyEe69a%2FEk5lE%2BK26XTRiVUhgXw%2FLURdXoyRGTMRfr0unI35gj%2FiQ6bNFAX%2FMud%2BfDiC%2FQWmahqftc7qstHNMgfxPaYuT54Rv7olhbD23lmgfxpm3gBDvSCFKEgeIsXVHmFsvgbesVxLziOwCHWLI5K5IiQ619xTb96bgvo9N%2FpZbahvizHXQWUT3l52b40y3Z6lQOkizJp64EQp9g5wNfj0%2BbTKG8nYySpz4KgITwpKVDRM1ae24mVir%2BQ1fHuK5e2NlzCaXSwmq9YVAAVjUoLm%2FZqsr40R0hTpJ%2FN%2BDeqnODFqCvUE3JjnT0oDq66%2B2Eg7vn8X8wQ4BpFu15kZ4zTnbVDtZHb0qY4kMlIA553vtPlRefJx%2F0zgl%2FcXNNs%2BXzWaIO71XDIl0P7qSYZqCnqJCAaf%2FIit%2Fz4W8QucxRjUS9S0zVC4xEdtqzbM8eHFgYeKron97GVuNz7%2F399J2WKElv1URI0WkgDDqdJdDBHsB5hRVlFBF9%2BwFrRgpFxL4SgagSXPPs39fTjeJ6CxyYzX8ikJ%2FxcsTOs0hb8xg%2FvHXNRs%2Bdbgyzuvj2VEBAi4DkADOzqP%2FDqas%2FZdsB9%2FFykbRkzCU%2B9XEBjqkAR5HNnJ2R0cJRkmxnGJdDxjtgVl8dHV7EbE4unqs5onyjMxvHACuqqDfkXhvw%2FzOYqRNlDnMwtrfbCC3HjmhyQSrEwRoLmgXla5qv3P2a2RJ5mmch%2FL3Va7X1H%2Bhs%2FBCXZJEzHhCaaMNezWUwdmMH0NpSroh8QA270WK2WuM5oNJSlUFisPt3RFIgeJxLtWgZvIf34OjF7FyaiL1hUhyD%2BWPEeQL&X-Amz-Signature=0e23e3a16dd5e8e3e2c1631400db83d8d28a628697d97f155c4b0b021bc1fbab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYGYCYSM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCBcUmW1%2F2Pdg5DV%2B438joqd8QsHe9cb17uP9GpW1XnhAIhAOIYMv50zF92dyUmk5igFGD%2FEk4XAcdX%2Fg0DEk4hWkU9KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPXyzT7v7lV%2FdsX%2Foq3AOhlfF7dMhDyFIVmBgJTglbbyC7kQNva3hRnm3Ps4kChvuKxa7A72aPfBElwoaA%2FzrEf8zguRP2Cuva%2BIbTgy4g%2B5bUhOe%2BK72RtIWiXanFQtmUINmFlfxGmc4TSylprFRVEDU0zInTAEtZDyARpFOwffDStqdCK8aZjQsVtDrHUD4uUsmBhhO2YuNTM4886v9KmYVJiKsTM9PMgo2y460FxdMdrKalMyVyy%2B%2F5ejQBSDBWAVrOeg1F5Pd1u5%2B3i%2BQ%2BV7uo%2F9VgVJBm6AuyanVu3LpE%2FQVTbiTzAE4aS3AuP69h0AFJXe6Qpk354WJTlVTM6b%2Bsq01Eq3D%2FvX6Y7tdrxbdk04GhD40EU7pytuPTjVyW9uH8fqmjk5ekcO1iJczx9JlELxp%2Fb1mwWfYl0LniKpwTgOYFGJzawzvONYSsqrHxT9FLR4KUKdCubzQ%2F4vAxoLqCrQHzSDYFYIzR3woL51a%2FexQOWQPPVam3xhbN7OB4cDOvyfus5MExJZOkDsF3By82YgjfGVynhak4XbOLISlFovpGGeESG7tejQV4hyhnHEApCi7Vug3fPvO0gzh4aRIXYO07F7ZLuMbUngiVnaNqOdlBm6RPwnozpHHQHtlSQ6HrMcgT5rEThjCT%2B9XEBjqkAYOystqY6qPSrHc5uBF7Mctzgbw75%2FvbHN2t22gPQ5J6ZiRzkjh1n90b759ts4v2eQq%2BhbES%2FlQ5SZU%2F0UXsFeMXwfB%2ByQQNoWohI7Pd5jNe0oA9X17CyZm%2BMTpV7bpiMGlKx19X9t2ViIAf%2FitT%2FoIyxxUuMMIIZCjI1nyTq%2BJ9UY47hFAZT6aw876D1NB82kVYqG%2FF0A1iNUIvJjiHblArFy%2BV&X-Amz-Signature=56f23f9f1520db66f98483711cea2a303b6da7b410c14828cfe101977d67983c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GE6NRWC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCeDBRBqPMB%2F7xMzA7m30BILjPmsXrqix%2B8dPGUrRxa9wIgOlHzxu%2F3V8dMqPVGBKg5jtz4GdbSM5GnHryLe%2FVLVO0qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDSDltvbs1WnJ7I8XyrcA6AFB00XFrKANxqRcrEIGGlZWUfylJ1JSOip8CCnVfDcc1JEy8NGJIC9E6rNG0oAVzvDuyhFZenGe0%2FkfZc875qzEG2Bv24JTe5PqYqWhx%2F06chdT6IoRmDppUsDHhQ93SRVcns0po%2FVMZm47INAIP0wcGrf3DNeGlKY%2FmO1Ci%2B8bC7MxTMfi8yZfPs5Z7UcJwzFqYI9jKRCOwh2JsJeMQ2zk0ZFjUbzymKr1TZzdAmUm5tm29Dzw4AnEjm1dB9UeG04VKkidRjGwpLCGHo5swytJizXZmDzIqLLCtLqQwwHfCim%2F%2BZVxETfal66K8cZMuWj0Ld%2BTifdRE5Ry4xazja8Yiiw4vme0AdwiHTMgYgsGQGM7pEUKvbDjFzJN7kOALXr451xfQR3SBdxfZDJB9N5AOOvRo4fGXN7YPW%2FQ1YkHF7HLsnurPL43e2f5%2F9s9jFchtZM0snGbDbNN%2BSXEfy4llrzo6CIpViD77en15x3NhUQHhfuASXEzQ%2FI%2ByoUJwge7PTA6l7ErdX%2B1lyVImus7C3%2BUH8K2etSmqI2qvLZR25INapReUKro3yYVN%2FlW%2FPxb5HbK8X%2Fys3jTrd6e94Zvp4fa18%2Fbl1v3xlwcLidxH2VhwKhqkDPuvHlMJr71cQGOqUBVdiDpHuWqG6UvjtD9bD2K9uiRTfayvrtSwI9Py29oxl3cuU5K9t5%2BY2JeYQOSyUslI%2FRvBdG4ZfUkukyOkK0IsIO%2B61pqJbsNhFfgh3TnhH1xh9U%2BSlJlmgszI3aTc4rkdkuWXc6UQ3PlLQ60S8Eo0cFKVxMTtZYA8YDb6oXL%2BjkJXBHNOjIYfnUwDaKzGTH6oXepLgRarxxLT6BtgBxeOwRNzZ6&X-Amz-Signature=71c5aa4875cc1b3bf61ca086d2c97c43c6b7272bdd1e909dcbd662af77a81712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=3c1854e9f4f3baf57a15a50a62e3805bfa8e5342bb891d98acd550d25c6c0c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMM37YGU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDAghSdYwXg7kx19wFj1HE03CFflzujsqVgdu1thgbpKAiEA8X634eaSUa6TY2IETrmYoQu%2Fl0TiIbit0X2w%2BpQAy8kqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsf8tjDRP0KKtC4VircA65Rzi25d6mdffaWze5d%2BL3N06XvR12tL4MDGFKE%2BBZUmBXTwf4H6Trr9Woxbl9wt3nZ4PxNy70P4GEbbTigGMnvdwXFY4oQym5Z8pPmiCUK0XDBu2DLwt6dDd3L0tTePiuY0IKBGO%2Fy67rrZNlXfCm21rsb%2BNnyN7A2GNUh9XhNbezLyQp5HLCH%2BWGS%2FcWQMLxOo0emvlCKimPsQFwVO5WkOddTP0YD9VZEblrKsAObj%2BpmRnedRVwujLRr%2FkxnhfzlA%2BGjsp6Irv%2B63Zj3k1TiUXYz%2BMAMS4f9aaaRfVDgQOVbWdf6J4zRjLkgyBt5hmhFlrEArFM6oJGoFv8s4mL0loNVJOUVmJQjqZS6EHZJiP8v8fiHfWOlVZgMIjdLNAbe22u1raxqNMnpyPzqqOEcGL5AGQYFrp2PWbufP1KmLrNO5bpvD32aE9jVqe10t%2Fg0hDt%2BJcLNmnODgFNPwhc2GA8wlwxGfGgPHEt6Vfy1oqZuAT8gOk8SWAJvWoTJ%2Bcoci%2FQHvAELfExOidQjeEXdF%2Fqd%2Bbsnu%2BPM7tYRjWBIOjGDBHTXNfxI3plc9dnSnihB4FpZR%2FjmGHZT4LqHLSpXdtUOU0F50IHiq6IwyXGbowENufVUMmOMZ4v6MNT61cQGOqUBqgLk5yKBuk9LfNqE1MDNw%2F5sLagp25FUzYGDQ58fqIWiIqBwF0bRvH8UHPk%2B0fcgCP3y%2B%2B3hqJMAy8O2YXa4jv%2BTUmbs0GqfUtC%2FXJi9X5%2B9stFmpuTA8pmISXQDzN0%2Bz12aDfMgCMKO8BF0nwmJfI1jiPcjTecIspZPF45ZQ6R41LOABCtbU6tDhF%2F1pP5%2B7kyZ0aF9sTJL5MdS5zLv%2FdXgy3RN&X-Amz-Signature=64f0770f04e46c4a3882a747356a38433e8e033ef3096e0869dbb4523c389a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=08da56a641d31d91edf91c76d928e4bd1780ec19d5ccc7eb559414fc6109d117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=c48fefcb970dc4957c06de7d62a2ddc7a05d8d349212fdf7b8e3278f7299a3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=d066587fbdc6cffded7f8bac50fed6579e880ba8bec11fcc9f0d5cbcf02b1df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=96e504b1f8252e15d121b3bfae272058153a243169ce3bab72017641ae66142a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=43a7136f34560c4c527151b81a4c53acdaddfd5c090985d784f5b9bcf162f384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=d96a0ea66dda3694358d723222090dde575bad66ae42d8fd9c603d0e5b5ab7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=d066587fbdc6cffded7f8bac50fed6579e880ba8bec11fcc9f0d5cbcf02b1df0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=4a7451a01ee0df386875d2ab830d469c3ea8c204033327b6c60cf6d755cbd1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=133567c5de8791317f56f95c969c2310f24e773268fc0b60fd8a7c3f8016bf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC65RUSF%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAzMzUwQoupegRcjcN%2BuEPiIH6YoTWzz58EhVeSjttTDAiAbL3MQGeELRdtP06GC9m60hvewqC6G%2FobKUosnkQXf0CqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBI%2FxIXfQz0SwiH%2FDKtwDuvSDJ4rW%2BOwZ076wtymQ7MQprlc1C5GM4j35Bnvw4FfWs2CnzdUQzzvSJHid5vr3IjCEGKHTYjjCck6Nxmm6yA40TNGmdtDNH7Uhl9GyvmbYQ9d%2FVPLvlFlq2shfhLTRR90LSSMGuh7XcrKIQUU1TkvpNnAYx5hjd2r9GjOyjt0uD%2BveMzE2xIBFexVauHWhNeAlavXsRWOnETDLBRjWukFGoOqjs3aZ99RFnha7VVXZNoxr82PBXf4r1lpEmJdAbXnZqBp%2FC0PNiIYvK%2Fvh31cKW9o6%2F98MSs2irtQ0dy57MUEQsBz23fApHl2Qcn6QVYXePRZQQoCNG14FWuVfdiMuE4xYFvnlN1Glv%2F62dSgRGXG0MZ0RmY3gf8Lf5%2FaeffeF5swg3QVl%2FB%2BjZ6fFPHFKra6rNqiUJijNa%2F8bMhNP%2B4DQ5FMbw7mlhGB4v9K0ric%2BtRJbIDJ11pWfDUeTJmxK6ZVPWhgtiWJ2KiEmJG5ib6KO%2FDjFyJackoWrBpVLiXaLITiLSfCFu00VXZ2xxWEEnkwywmaadd9VHaW0UI1M%2FujOdqScT1NFYqqhFmCAfelV8FGbE7WN2xF3oR1ODnI8EFqrsd6kgBll3US9aorTG3NzfudS6KT7GPkw3frVxAY6pgGhXOZxhQBj8UNn7ootOjHZpaC0c21SRKipOZSdeBOjkCXtYD0wovAFt81oNj0IKyAl8DndlJ2olYW0SMdA5rZQIwaGZ8qowhnK1kLpRtprccSb%2F9JD4W%2B1VmD2MUjqHpmciDFWTuELW1OLGy5jyhsg5aD0bOCZxtfJVHqAX9x3KRL7XrtlYcwSGPomx2Mx%2BOA6iedq7x3T%2F6%2BJ%2BhF3WLh9oPorgQ1D&X-Amz-Signature=3b0c7adf48037312b182440d6d42d763285f2b906ea982fd1eb39af6f6da680a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
