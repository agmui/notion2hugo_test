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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=7d41e2200afd14db0d47351581366e5447413dc6ae8a73ecd5ae978427e370b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=0259053e2956e9ac26ab73d4df4085e442d29663d9f5daa19305f94f785992cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=879c907134421ee5b94f6f8609e8c761b142c4ddcc796581aae3e135f8c3577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=1e7a4035caf3823e02b103a719d6d6f6f81d7cd3cd5e6df00ed2f8c57a2a131d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=69ae5995b8859c560c5859d76e08d821b9d0081282d73e3c020b39d70733871f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=5b811e12d981eeb279407107a74f6fa2261aa05765931bb445d7c457c5db0a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=bf5c37233308d517bfa30d87a4869f4766a893b1ead3f8aa00378a86f3eba254&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=59676ad55051cbab8a189588a1d01a91ea238a0b8cf439bd69253ac1d3852bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=752a3ea8250c5bff71102051c9ae7e8a0c9f60bb5de4a0d6e7148e46d3cf705f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=1a7b326d00dd4f1931030c3de936f56368f7a3d0eaaee4a1ebe51ab6c728a43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM3HTZYW%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCOdRqFef14jjX9NIy4TjA5Aj9lNHwpFBw%2FzdasFlbjwgIgcbeB05OcEFf%2FEsZ8zwYO9iTY68gC5a7YrYCWMZLSdnAqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF75PfR%2FE0Z8wseq6yrcA0M95Jtfr19DWVj2LpyNKjPsYgiDON8SHYuE1NMTtIM43NUmdSrIcMGuTQJ6GuX%2FNgnxR6aWgfJEVi%2FkIB1du5SjAn8xxAiwO7wAYh4dTT1p%2BirzrEE%2BM85sfZMWdcEzgXvoLi2MubMOt4iW94Dgfpmw8oXeRDbCLgSTmSBduGnOJHxdPJUB9%2B1ZCedurkRkzoAM%2BovijUPXbsqGeGZjkjpbkGbu9QODVloPtONeJzknpFCjlKPG86jbztRMjH8dU4N6SGUG2C7QpSFQhMbFUl3Y8h2f3eDOO1NzDvrtZdAqzmpGv0OOlsS4%2BAAHPUe3rsSVAHPBd0ySrbe1yZWxFp5Qu5Wn2oGQSYwtkSDqv0Jji%2F8iEH59zRXKuHxTb76v0CyZohfcu8Q6Ug2xp58%2FzAokrRSFtTMWi1cFBogbFJw7ZSENS4EilNSnn4J0jECM%2FwnlJJw1eyiK6FoFtNGDF0m6n2FqiqBxpmPLhT%2FKmc6OIejqE2XrkIxHaWX3MRTbwc%2Fj0kP6w8I4zXMnryyuylWcXPg1m2K2dn9X5S8QjInIOQzx1QZH0hWY1AJQM3Ll3eJ2hmFStiuNqe2v%2BEq086Spek%2BKC3P4VFoDP11bIxIQAnkiLfqa5BQ4UX50MJv7m8cGOqUBZj7NEnRFxnv6l3ef6L%2FEQWDvYtnCnolE9Hs2Zr7WC6alE%2ByZ8UIqor1AKzhU9BRPBsVXOP4B7o8vsOf%2FC%2FILbYOzEtIwO8JiM0jV1exzVenyvDKfXz%2BeMUabDNEg9uWq7TlxQ2L2PYf1VCXfrwiqbPnGWnE3beE6a6qPc5iW8t3EI82mdIv%2BSvWjhcLY%2BrUxwh1w1l9gDlnoF95jnK1nd0LOnXlk&X-Amz-Signature=3d1b94b05b9f4352df4c201f68d27d08b33eb8cba1eb31317fa4766d9826d86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGTDK3T%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDp1rI9j8CND3HQYKcD9UfKcOXrnI4Od58ZV3470AD62wIhALRxpTgeteGQxGcPf3%2BEV2GmJqpfOL7cUwHTjMbdsH3kKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZ9DpCdMnyMXIEtUcq3AO1rRqYoRYnR1tShI2rmI0iI6HE%2BDez%2Bobc86SbiU7szsMdtNPf5m7k22NVAriZAmDXPJCEXfrGMuOwYq7Hm4aVflZqfEwkU3tMbC5adlNwfWF4LUIM8H%2BNpGFF4jREnyTXV7444x665CVxy%2FtDY1C93njFY8WhGUFbB9UqnddZtTr88JPmPv6Wok1Ng8GCz0DXIR9LJMi6KyUx95FYt8SxFSIxjZ9yhFWDCTbASbv5qgqTva3cykchJ%2FrbZPCDJKraixWAFTwEez0M9w49HZaC%2B%2BaP%2BGy%2B4AdDDox0IJmnyAuphtrEQ7naP7Qf755IQ5zLY10egAlBbtL%2FQ3Ct3NgktRypn6%2B6ty1gPli39u8Cq%2BRnVYhbFBgqgKlEZN2Dd2vretcOE8RYnO830kw22VkVBKSaUsPwbb9Jptj1eyGLEJT8KMfXxogYDra%2FC%2B27M1knYg4pJdhrSqebAnBPmLeffPglnvOpV%2FyVXy0R8Jy820halGReztj0DHxmG9t%2B4AEgFG6Z6jOmiTp4tUIsy5WLrseiMGliqHVAtdbyQHfc3uf%2BSX0aV3i2wsC1%2Fuoj8tmoQNYinNCScyYgAPdk6k6huU6xr2K8bi52PGp57I78Rn4LdfbZJ0ZlYH3UiTCU%2BpvHBjqkARM6jOl84AQou76kCYFciXh1ub%2BN3n7brbpcg2XFRGpgYcqqbsW014th1RLfTVFkmfA5FUtVnEap0FjYC49WBOGtydxPIK1b%2Bj78Ih8wFLxCCDXSJY1Gx6H0DP7ysGfjJnDQ5SQ%2FeBqNqx3eD5miacA%2BOxum18GSOIsznRIUOxbNS6hpIwhb00twhW26fQGYgJnd74eZCxVUMLyGZS2ssUVlAXRp&X-Amz-Signature=37b21c346264d664e18a2bf6b0ac3eedc4bc9a7fc1d48526c627139bb6b4c8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZXVHKRL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCoksszVYRASL8yqi6X7G%2BnJ%2FWasGn%2Bej7oe8pwszIO6gIgZRQ1Gy9Jha55QCq0wRUykLwgFHIHStYhbyda8NGRxUwqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcB16D9af7WXZBJUCrcA9R9IcpXT6401OaAxrZ3eK%2BxIWE9VkhW9ydpilPTgfIQP85SmgeXNuJxJh7QTBi83uYq3LV8wNHsCCeixOKUnmUskdFf54h0hmI1iej%2FOD3djlb62k%2FwgdLosSqhUPC4h6umutmuLN8TqruP37H05kuYZZ447XF%2F3GfzuMy9CDAwSbIVDmqKoEA8zlzQqF%2FPNeZM0rt7pU9ias5A54VK5DZl7j%2FijFCUiqScZuZqZn%2FWgZ1cUirx6FwP%2Fh5K45eoiuditZ7KDnVrjVZyUGye5S4BGVdBDjC3rr6Xm992u148SsBshOoUYkbgf%2FEBSvExuiWevHb5hRN6VgIxV6FYBFlKbPgrqzJyk7O14R%2F3uxKutPduO%2B9yJtCI1ATLBvhVwisUFHnTPW%2Bth3ElrUnx1hFYau1ZByp%2FCy3vM7NdQ7NV4hUzpjCNvBq5%2BOYhM%2FMpu%2FkFnX6YMr0Uww4LY82xsPIpPFoVPQxLZ%2FeNVZT1xm%2FOj9oRqHWzY8AhRueKbVlqjeLoFd1jO1Z02pnK4h0%2FNX010hfjM0AOq%2B9zIc1mxkBqKx4JSdrr%2BU97wSZoWDM8rm9HvsR8zsQIgTN6T1VB9qUP4B8L1pDPIQDmVtaH5uWB16gSgxND0psNz2IRMIn7m8cGOqUBWwB6VE%2F4upAoh3Yh0%2BLgr1%2BxsNDHtJOrVXIoWHbKa0vxktEzLMf5UWs16XySMyup9TVRFIWCiN%2F0fb8igqVkvQsnDpqCnH0xpNz024NeVWerFnz1y1J5verBPK1yoBs24COIbE41DDVLzJHMslYWe6xiEI6s76926HoRqQcLMmec3geeqa1dJ%2BW1yengBwOOr%2FDVMqYF4kdkCsJztfb6QJL%2BL6di&X-Amz-Signature=9035b3f739ef649bc957a98d842abd3c106ab3543fc0f6da63c4e065aa746494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=b19800ce1eb45c7abce9bcfe77bf0bffc3968e0813ba69fa38fe45c33a3b3c55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FDTVDFL%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIGccHobtHFpNSpnOC%2FYjQlk1iSAdY1qWTBQSDST6e1y%2BAiEAtVa4%2BnZJpftMlJPAYrPYRmxoMan%2B1EHRTMtvkCnTpRUqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBjZh0qIyikwI6IqJyrcA2iO7qvEsZRg78gJXcQFpMLQHLSjzzuJ1K2ItH1W6akZkdENIdrUZCIImxpKHm%2F9nKumsmTuWIFco09Qck9Rn%2FWQirIPCfkaFpRMLwpC9%2F6NEyQSOHYztTatbQvtIQW5%2FXuRjkUoBRHxmoKAkOS8Neft1wFinPBRPDvBpPdYB2nSEgYVZ8QWpkK2PN%2BNOq43BVjV9mivRV6KpDLK8m%2BSDRiC2s8iyNe5vUzI%2B0AtX61K75aI%2FefLiDLITuW0%2BwwnS1ffmna%2FzDh3WuuiRhDLv7eka%2BIM3hmwhbj0f1XVsPGR2VzCWnP%2Bc0Dj%2BEGDeTJh0aIUbvjMmRSJZpcLZrDwCAeBhxcNBKpMmNexxvP6cESBzO69NuNGVubSyQslQ5HTKM%2Fgjt2h0qro%2F0mjm3gi5YLCWNkHdqmiBj8%2BvIIQXqjn8MOe6Qo9EyoLCdkc8w1VQIs05cyJ9jVyaJLXGCZ8Xl4t8C6rJjzLaPeNu6oLioCVlAYMEwrX5y7cjXUcK2boeSUR3k6%2BIy0cfMWgJ0ezD6zMtkwy9WdBRYVCAmA4sNM1uS0%2BdpxMUxcCHKUkIKg2KeKaywYV39jlzssCYSihYL7VtQDKexSZguhjZcOy7B1yqdb%2FQ5CdXPjM5jW%2FMNv6m8cGOqUByI%2FUYw984YJJnKtPwGslYEmuAD1rAGfhf1Xj8buHUc0Fnd6PpQKQ%2FALnGfKpbyU7wnnDgp53hspTskUD%2F1Wz8xVYQ45LM7ZG6%2FfJfYFMSmWceV7Xn9T6DJQiVQtKzGjKFVrZ2vXcx0HgudO1aBW2Y869hxfL5iOSXnyTjBPXfy%2B7lf8CTBgtSX8%2FGMLwpy%2BEUOZPMfepBdyCcHaZ%2B1kX1rNRVR1v&X-Amz-Signature=2ede097df99705553ce094b5583189d762d3a6b9a246a555c5d8bf1a5ea09219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=d3cca3b2fb9b510529ea59786948dde10a5164bfb1229ee5236804b35dca141d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZGVFOPD%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICM7pyS4H0lHW7dV6tP7t2qh7xsEWp8PQlydiKW03PzLAiEAzS%2FRh5hN%2ByqDOfBfQqwa9Mrjd%2BzDg4Qokitf3cagVswqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaUdiWrznlkb0y1RSrcA4zCLZgiKcQ4ncgA9dyLN15KVSaLA0%2FFtsqeDSU8SYsaXMt%2BGbb2q09dgtmjQZzKzUpPhkb6kr1UW%2Bt3Ol6N6UlGnV7V8rBmWb5CeQ8InD6hBc2hZOqVHsG5E7aHKBajBdHj4%2F%2BH5tTaHwU3HCDyyt1Hr8evpeu%2F892P14Yvp2yFqdnPJp4L3iZ3RZbzStqJr4iBZSOxUcphcDk0BCYFx%2BiwTqycvOa6NUMtzgPyW25cC%2Fb9%2BGbGlFNJvAtdADx%2BDr8LtqxXgMO%2BRmfjWLL5%2BpVtiQHHz%2FcL8lcd6IhKg9cbbKdbPZBlLhH2mNd%2B5N%2FQOE%2Blk98jmg57Q5aGbrtz9i%2FelPFay3yg%2FQBQeAK7JuRndosHSbWqJP48sm1OWa%2B3C6Z9C4gaHecMhyiGBzrg9A971tWixT0vwPNhiRkOPUqkamupfXixZVR%2BcHUq%2F7otGXLcwD2gUjOmbYqyDxiUBROvM15GMaLyvosZCy5n%2FrZIe7gmZ37qon07wBWfT1OmgXqwEx00qXq6HhqDRl8adZpkLRb0nXfsa4v3YS6PItTTrBnxS69dLXuMxxNkJRaQnKBBf%2Bbrfh%2Bcy4%2BQhEMnM3B4uqRiL0lN912IsYeZ9RatHBQGu69gv7z1fTWdMI%2F6m8cGOqUB6rIXWBh0Zkhz7mJHp6iwRx29AUtmVQOXwwndmSFjh4Htm7qN0lEspKO4ZrcR2O9VrASnutlZ%2F%2FXYwOO65IHT%2FRhQmc8PKGuUBfWGeqQbNouVgexwUXu2WCOAw%2FYeNqodr0WPNAG4EvqxAoMLcWrddw5Cr4vOce2fvqYOYx7qBvOmAA%2Bos7IF4rv3scqB%2BcvfM8Dt%2FwN2dWaEWhqbN5xxcVLv0o4%2B&X-Amz-Signature=b3a100a69113089b38d6ec5d8862dfe3e8c516bbb468b8691400b57c370a551d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=fdf5ce47cc3fe69642537c334fe1e216937a284a864eabf3a08ab323329e67f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JEJJPZX%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDeV88QfIRCF2maEWjFafUouuyJ48WAYj9%2FCT0j4GKrKwIgU0xTFjFu%2FXw3xn4Wx%2BWuTGiMatwFtwxLd9L6d5VlRh8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtI4fCK87ozH7b56ircA5ct1iNsMb88QgJ4smxbytaDVJOK5biQSWXFybYr6LJHHlScAItRB%2B%2FqNuodO3DEnoENeJ06yDOMx5Q8aXsO%2Fb9LYsMSbly7YlDmZLkR2hLWmOx4QWXkidFhllUGjzE1qBQUkz5jKFaPp4wYKeMEYhia%2BOBsXa6WZwkooHumU7mbhww1tcOk7MFSp7xukO6e3EudsDy695m%2B%2BCyKcLUFeR3LiSVHRBKuLk5PmRWJShq7QWeqX%2BoJqyTY4Wozu0oK4M4goWxIjlwXyBUB%2BoA1ObbiXYfYcAsSGb7JU%2B1eqN3FYX1qdbvlYVAP%2BjRB7j7RQcJHLv9s8vfpD65YNU4yx2o%2FZdhFEyj3maD0fDqZplkPROZXyKTbVaXRSDj%2BkGdagO1mP8zTquepTJjUBXv4L%2FXSUU18cMzdLuYK%2BFrqX%2FqaS1mXkn8pvZ9nm9aJmhLoB4oGESzfuMdO8WQ%2FaXnmHXu9hrB67mtujnjnUAQmFpj6M8EwrFeXxETjEbEjuoZhz457Q26nPFnn%2BSb%2Fvcw3p%2FGIh4THS1MwDApi7S0Xub%2FqCzoLZZ8qzc24eyIp2c7Fq2b2npl1DkcF%2FZW9Tz43wmFWLnSHzcnESc%2BX%2B9NoTMqDimAL3bPFdzYDuJaSMPL5m8cGOqUB8q0M1gVlePlTkwKL5hs22V5xDGrlkbNKBhXkCFeQDrjqNFQCxUGWEFTGMKe6veaNLGPecfEgFphPxr%2FUrDYKtc0s6dvnGEJFxDKWHUUDMa9TIrbPik8wNBBhsiAWtHvHfUZ93Q3tiV46Am7ANOkUKPnB0DJ3k%2FJHylqPL10Jrjm%2F%2FD%2BP7gw2J%2B1pT2cV2foG%2B3gayfyfSCDu8qZc7F6C0tVh4QAG&X-Amz-Signature=c1683fe10b8e3a8fb00c1f9b5dcbedad9161956c3d42dedc895fa430c78f1c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=de5cb331dd6aa9a4903d5e73f9741795804c9c8ad39df38b9d1adef2b00706fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6LJ2NVK%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCN5i9OkKTLftJ0uz%2BiF%2BvQX7TJsZfZPaKkrzb%2FW2vIPgIgf2b7HRuQfylSnfIP3IdQKjLjBm5guaDQq4mPHjdBMaEqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAWWHDaWoOG7tAfvircAz%2BNnMSz3SNAeLU2d%2FVZqeINwiXPhlqod4LvzYDzsEyAciZzY1hDaq1NN5tzOK1p1DshAaKC%2FOO1G72H8100Ek7Oe%2FVjfkc76wQqqpMDwzEOQQ6GgwwVt6LxWi2E1Dm90zxfIMALEFWlLvoM6lY8K0Gv%2BLIflwVT0JG4BmvPWqfiTlm2NJrm83Eqw%2FYYz9QJe4HIVzr42Jes1vVlVGTBUh3imbMfpWMnuROTr9WrWDmi6LUAIhdx4JJnI%2Fps3sEhqrzHnOveWebi5gQdp6AdnRVwlXzCnrXtdU0wDfM4so6qczdoPd35rX%2BXdIhfNRpuSoIjkLuYx5LHPmsEKPHkdiHBkv5KNvKsCt1JBiYdtRevI0bAxqbE%2B233F2fYio%2Feqn575ZH7ZrFjXx0wTy1vwEHXwwnXAP3JNiP79aPL5Z8mhKe9ln1%2FqLiNCVJsYgx8RCLImNaWT%2BKP4063eKow%2FLUfD4MF9xtITAHS0lkscDB7%2FNL3kXIGU%2F2fMp8%2BK7ZdpQGuTewaqoRNGiQ5IWgROHIqdVmt%2BNGe6TMsUnxZAeG%2B5YlRKAp2embfWZaEBYYqeIIGPqoG589bFQdN0QK8nqFQuLuDNHtDu%2BTcfU8dqsofWISwbZA%2FylR0atYzMKv6m8cGOqUBe6R4FP5R3zCPO02TKrnDJg6J3mdp4BcJ6wUv0tICDtplZN9RbAuCQcn%2Bp%2Bc5WAO66Key3VOCou5MNpVl3ySZ2nEdPUG5Xkh7Kjzn2wHCEShcTI17f3tzVqnUW9whRp2M4HiR1f7QjmlQB1z5%2BqrTXiMPMGP2Y%2F4mj6c5l8ale0c81Z0UbKB75d116JT6hyA7Q9FFbLstK86gEG5vAuLsd9QwqRi4&X-Amz-Signature=030200206a78016527c8767bd7941bc501005febaf3a3aaac53f7ed0f7098413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=5efbe2a51e19698fc1c6500f98e465f57d11ac40b448a836a09497902d9d1651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX754ILQ%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCfNXmC7gHBlbLamNHbU9qSNLD4syXnZN3LZWtlN0FgUAIhAKcrV%2FQvG0wQAzTw2oNkjN1Mjpowsik%2Br8pVmumIGjDxKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzegSZxt72CIwApxNEq3AMlFuoWSfIfpVoboMgyOAITFr9lka%2BSxSxyhKzDP7BDaILmEc4dbEyj6ZK%2FoHzIj%2Bgkt2462Kw%2F1g8TYy7ePSQ%2FV90mGl2JWmiPymUZc0Mdlggrze7g9zGzuQZCxrY8Cr1%2BMms5%2FlyNLUM1z%2BZm8j%2B8Sn2i7V6dYwlOw9vYqUG4pp8iqtSvL%2BhGN7gJT829KgaaegPBpjvSoOSuOGeCzu9VhqxFW1rbq%2Fb0uJEsXVa5zuUYRk75Qk%2FSFgme7ae%2BUr0nMx4jIn4x0Ye058m1DwalDJkexb7NZ81bc%2BbdglbZ7gY5ZJIOcpdAz3oOAlURpiFtG2nXnRzNDe6xbaV6sntjHKDNh0yyL411OjwuKtFj3hAZqkJ87Sl%2FQzE1z%2Fb3B5xDlByfGUMx%2FPXhR3i2ECxPqi2GAdnUlMlisKBXmVua7IhXNFccDzdYtgtLVcJWF5sNdXmGc9iAgMmI0AcaJqnFJ7c7SfhWTW%2Bm%2FwQvjBMpLr6Y4RyCFIlkYhw%2Be8STX%2F3PSC2W41lDcvxjnqINr6Yt3sOplFcHWcwB6sEboBBZb8WValXO%2BJ2tFLiAwWXM53rmmBbyFX2gRWR1J6kyI1xckEKe58%2BDmrBzPI7hmpXakZMwEfVQbG9MKHfyNzC9%2BpvHBjqkASh8QzMS%2BJK%2B4UYmYQ1hHXrTuSvUxkeZ4KuHE1BL5BgAaKd3nIhiC3PzR6mOTpTCfp29GyxzKc56BJgKQHQpwb0%2Bxb5Y8bB1LUB6UMi%2Fv83lwfew5LmC3e0bOOq%2FRP9p%2B4sopNAup27ZeZsj3tm5SXM%2BUH4pX%2F2bz2TueEOs7sB4aek8zhMwwK2gGgCOGJtsp8jKJyWSO2kF2iIBYTyAVcoIvvps&X-Amz-Signature=151a54cbf95941de5f2ad1778ede49d7f3b211931f27604a8005fa588ec6de1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643D5ZPG2%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCID%2F%2F9gEeMK4AUQkBmYUvvaY4063%2FDSntXcCjJ%2FzA3pcSAiB1fSkhMEEfYxeKCQL1UixSgfhwuSJEvOC8auHJWXPjBiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhXPe%2FN4HC%2Bkp686HKtwDr41I3Ey0pecHLXy%2BeZ%2BNMSA7QJg8GQ29kIMFyIXkjsww3L%2F55wR08oyddphRCnWVL8JFzzZS1l1Z4cOyx9CbK9HIkoKgFOYoefL8G0uQxFJUeYEwpOjSUJCn%2Bbjp4NozT%2Bj8XhNpl4h%2BKuNUJRnCvU1fLzEpI9Sw0y8eLmwPniQ9HZ1R%2BmJktG4vP23heHMhCzhW8qqCl6%2F63BBhUupfaVF8q9V8h8Eawxubb2G9nJb%2FubMNvmayGH0rG1%2FBtOtvSLRmGHkmuJmhNa9wOitGWn0IQaE0SPFVQeRBIJ72p8qrUlNlueJW%2Fo2Gl17T4QRoBBhHFOggBU%2BRSbiYuwpzmMVZP86Ycnc3H%2FBg9rxqV6gLcC9COAsJwbdf%2BSoNyg5Yy%2BwOg7wrZvvizwRVACbhutt5NE0rPRZFukc8Run%2BKFPFINAyYAMPE929O1ZN%2FtGWe5Idb3WXW6QBWclf7HSvTPxgUKr%2Bo9N6cl02siD%2B48He2wUxlJYz073R%2B4ZRRAgDa9Dk1YOQUNkUx8k1Rdy1nMa%2FB1ehCDDDGI8YvNGc7KLK12Jl7qf0YWdZZxjiNp%2FbilKova0EIdnTmIYAmHUijg42ywVzi0MeilWxdMgGZvvU340ZxACOhoOVFsswgvqbxwY6pgHNgexBTBMwwP50Pw%2FpmWTGn5iYoVUklUlXL2OTXEdWF1EohXZEsiXJA8ShJVotw2QlBrehaEMHZMZ6If5s51aB7Bc5SYBRMwnDqPqONRSi8SMGjWv8IRQD%2FHlKp3obxcd1WQ2IxhfxYLCLOSBpbvk90O6IcTwn97AKG%2B%2B5dk5UHhjW6jMVfg7UuWPtTrt1NqQVsfAnqAoUoW1q%2FekJ%2BOeD1QqDTbcl&X-Amz-Signature=d1f9118ba96b318186d886b7c15bd22de19a7116de4bed4e6e9f4136fe83d505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF7BDZIG%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIDo46Bx5VzW2bf8HCrjk50k%2FVmDZIWr5zqxE2Zu1JD9aAiA78SizLIM0HkUX49mLSPHTVPWubh9ruUkTVrLHBpOMlyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWbDeoud21iegDNdZKtwDAf0rDpLjJM4pNA72Xsun4VcEEa4oOcILfIkLqa7hUBAuPc4wi1Cje8lcBJHsWOPnseWb29%2B07jLFqunWkBLKedPmE0pEtePCLw66yJ8MHbMz4ZJasuhO%2B7zDEvId9bMOvjL6iqU1BAL7iR3GZSO5VJFfGsv%2F%2FPUHO1SVpo3BYbCb0mcnq6gE4M0L98cUK%2BAYk%2FxuxT8Q85sK4zVl0KckW4JVFnDu62EW%2B1LI0yaZ3uFldZ5P0qjsqBGIaXtTyTeuZZaQRoNppCXOQg%2BbhZL3vIONgKzZD96T%2BALZawNCZqqt1DCWUlCARUuAzHGqIBjQ%2FcgmSDjsMFYI3oaSPMEly2QodZ7JUeczL4zhWOEQJ27sLXlz7uuC%2BWqkqgGSP5HqXtgWshxuRKMeZj1cZh65wI%2FbOTd4OGqjyOeqkqnf%2FkVSvcduWIELjwAEF5Dc7QUGWGtBsypCJ4Z8VykwwfXgZi%2BoE5b5fpiiBnEV9vHFdMmfb1DUjTWR6n4ljfaYaiqMGiXrAiC0GQmy4b0cRglsspq6%2FhbrKfEZylGBthpf5t2qajE3VcseA7jJ%2FJ5ZwUQlgsUcucZdYSj2FNo%2Fcv0ldeS0IWAZw4E%2BsEX6QhN6%2F%2FVlNX0W0EKgyIkxGOcwmPqbxwY6pgGordlXhNero%2FNPlHVtKV%2FBW6ql%2BS5A51sRCd4OeeRor51Ch7FIDo8WLv67f%2BA%2BHqKQ7uRL0BvarPE0yqBssyAme4JfCHpdUtlCgAJJRz38SA1gQ6GAyNUiJkvBQ6C4mLgygpr5UCZPeh0CuojkZy5113LbcNmAqf6VBTU%2Fm%2FxJ0U7wJ%2FKFcjqijtQsC1MSnb%2FTOu%2FFt3Jnc6Rm%2FkSkpIqoTR0JaXq1&X-Amz-Signature=edaf548db925b73e2bcd6bc2d45b4e328eb9a7157a10e7cad0a881946c05a5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=6cf52ec0d4a83697e5ee3e9c4c73dd94b83cdd15c54b2630a9231dec76e96382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466637JPQTI%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDBeV8G3E4vtDovMsu729A6CDYRt08QfAu2xA0fJlj0jwIgDnGrmgq7Q5Wi5susGzixtXPvpto65QNWIYf2hZgdceYqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCc5XpI%2BwSIdRM6%2BPCrcAxXWtphZa94vjUL0AeOQnTbTutp4Regq%2Bu1YG%2Fl0wisr0vBy16%2Fym8RKCSTXp4VmK0p50oTp23vG9FTTZsNqrDvZsU5auxwAGzo45HaiOYME7fv8eAAdAhPjCDeMutLm5Uhs8mFA4%2FX4MVstt3Z3fHHV9J%2FKsj%2BjkeQi5jegCc4cUhlTBWNTGFfUjA82OS2e%2BW%2F8mGPYMhxudFfZV5ew23IkMz%2F98yB9w%2FlVpT6HEQbYeCS7tSSO0dZTuJu6f3DmZZ7OGXj7BrCISzjoauKE2ZiS6HLlno%2FUTAaYQHEtZd8yWEBGxKPEZkz%2BzJiGOByqTYwJEW0EldPurHH7GEc9DukrvYe4YXGIEPeTEf1sOC2560d2t8Bt3C96FaTvasID8FsJSTECz75%2BXKtDDh39IeIRAfXms6hE1lAPEHK1rhSUaFhk9ZMOMm4%2FhP80yPEUNJ6oBaMd7vSEn02W3qLRppW7AI6tkDphJAbKPWife0yYogaag%2BG%2FRV7Tx0VUkN%2BVseA4dsrQk7XqzP%2FvXOGK17j5cappXHwZC3Kl0aHGqcFo1MCfV5D%2F96lTrcnWkw%2BJOVgJ0FArtNkr4RaXV48SAeAW%2Bwp7wJ0V1wEx1HDMWcXZgKwTA7J9SeRlDsrGMLf6m8cGOqUBQG963fUlgWfvUE1bRJWSFbd44aotHDs6eQ1etM2pA3HSiAj4mkhiOiu1zfIiV6TwinUNCfXZk%2FHTEI2%2F2stvCW7fyDPhe9AsSdKSIG0gn8axJvZZhDKwCKzHIh7S4N70jJ%2FyedsPIxyTiG3VMH1KutNTg2oHi9RuXPFhwPe0f%2F%2BBPhbC9gjw2e%2FpjGlSW65lQBYVSRP%2FFJIYxR6QyqkB9d3KEnr%2B&X-Amz-Signature=9254f14781c5dce023667f1ff206d6757d314c21b5d9068fbc4b4733f222784f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=b07948dfa8848e91612b0a1fcdbb1893d10cf05d94eb31558cd13c534ec97c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=74670489a464e108a832318d2ddc2fd6f20dd7b2c29dd2d2b1253bcbf0b37e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=8c1359eeaba11d4527eab7f5b7573b750fe589ffe00c0e89cc3cbdb335756258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=d71c1ed9b22b313302e0bcbb6615168b6daf9c9352dc1fe3e4d591ec878c5941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJR26DVY%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFYbp5UE1SkqEcFqzemjO9%2Bl9MgARJE%2BxhdvjvOd7eXAIhAJvOZGDVk3LFxdnhettOLGW7Aqh23%2BSRPgjiWTgbvxhFKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq9KgSqGerrwDmCdsq3AMma06m%2BMpfKyxwNbnWojTvB48lcIir2a13Eo2mMxbrqLrTUI%2FOWpvYmIHJOil495W%2Ff%2BpfBRAbmUkTf%2F7f7tHOLVVLylfFo5n1HZkjJshLU02aMMJaWBEfH7QO7wxViNSSPAKFaXZZTnKYQYyM6As5Dls3eHOcCl2Eh8NPq5pv8qq0cDlGynVgTKxS7uKXJx6G4WiFlCZdYVmFEpOnflANrjnigBNkMVNYefPVYiZwqcV3KPFP7iuA8kXHUSTvJsy%2Fev6G%2Fvs98%2BqylrdBtdq0fezmO5jGWC6lfQEvVyioI62RK2SEd4wgXshK2D2IFRVmA%2FHMZi4tsamjW5jXSTr7ahabfOnWkHPYl8e00NQd0InWAVG7zkDgDJF1PdEPrZK7lRr09Kc2gRANM%2FB4xNeo38EcuA4MvPzxzUswHvw2BKNQp%2BRbyn1jd8vY59Ftq5sGd2PXrYzDouoFsFsp8SW1sRvtRnh7%2FmgPR1lN2Fi5Xp%2B88l2s7KR4x3tDh3%2BiWsZSRvUF1DrIw0pnGfuyu3VXjkXY7%2BJYBxulTfV%2FLrH5daPqxZf0nLxqhwcqvuIgWw8ezpN7gFJKdzAx8VPJk%2B%2BNyT6LFiilOSAD1R4%2Flk164281pWu4%2FWoZJjWs2TD7%2BZvHBjqkAbbMz9eqFNLXuDqx%2Bco83W%2BwAKlv%2Fq6ceHXVmDUphjM%2FauiTI5z9Nj8iXdcdgZYmwyorYPfv8xKj09dOz8zOoEYa%2FBCIbSgYpbujfK8gvz1aZoVhEf7ip%2BMt2cRp9FXub2ggMiUONFUZumX9vnHy3pu77NqpOyNYcTB4y9xdhV%2F1f4n03bGUIo4pHqkbMSeAYRkaJUEIRJ9cjzPgdfbjYokpRAXr&X-Amz-Signature=701cd1599afb6f4396d6bd2b31d81a66702e5330c809b5e0b3dd3a11db2dad09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=61d346d2986fcf0bee7e4bae6ddbeb5c40f34ae91f1f2d0f1434e8fda2349d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=ee1b40dc9581c67245ed322a35c5d881433b9672f0e55c5df56ea6635139f9d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=8c1359eeaba11d4527eab7f5b7573b750fe589ffe00c0e89cc3cbdb335756258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=5c00b1178fbbddc6ea58e7a4793623595e41d73558a89af0c82db255c5b61831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=6773080dbe638164a2bd0e8b0b59fb4f355401d3cea41db89484f3481b23f27d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBBA5PSH%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICiLE8pryYKnfW6yusw9OibYjZdHP3qWX1KYIyRBrUlVAiEAyrxFCmo4VMQhpbNEqq%2BAbYrZQgfd%2BVOmjhvqhU5KNqIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAheqE6POraOkDYUyrcA8jhIikXEIGWGUrmq%2FtvFZ2ct8I3cWotsMkI6T1dhgDuCqY0og%2BfGG7tSRFyDNE%2F0pxBT4Iqgp67Ac0NT9xLiP%2B6BAgRo8FL0Rnjk0vpRoDScUiQii9ksyh1CLWiusFQpV%2FGQVnGgS0b%2F83lyJPvy3NBN4hrwgAWzaMcJL%2BLHbnJs8%2B5Pqa6VN37JWPuBUShlG2swp6iTseSn%2FDl1KIWIIT0AjNSIVO1eS3zeko6cjkmB%2BtvVeZZ5n%2FLwFpCUHdYXakFqm9D%2FQUW7teeTPD3P7uKT8UK7Qb8tukCRDilf9tpnJVvDY%2FGSZFmy4Zc12E1fD9%2BgafW7C8yV0PRcxSTD4djInSCbjGMwsPQfk7XolASPhjOhYv1wDyQpqPNCfpBgUi%2F3M3E1x9IEy68qtmmuubGbrWIMe9jpu%2FQ6gYYcyhCcqhzomfMkc60XgfO2xALqsb%2BMI9YpVXHI5F4k5PeCMLElKUkpW%2B%2B0vmPOP8cTeZuQ8yhKTdw7c%2FyjqzD9N6LghGxRbDqEg7Q62BdKsM3SjkIYYbXKmgue5yzfc7i1KtH6xT%2BPBwdJI1Lae2FKgNjuZxn0Co36aYc0913yJtHksT6buzHBi3EhEpMFPQ6943BB7iPRSyFGxM2X0fhMKH6m8cGOqUBX45fFpMbjZpTkAPZfdjkzqA28dqCKyxmQFWNJnMyzVtZFn7Bi8aphOSXTmmRF39RfL4dMniXG7a4VIEx1wcAeYDk9tDpaJlfAnDOb%2Fb8BbAX5er%2BZPi78fyljaGAgsgWDWG1GSW6nnFPsNd0oAaIvyLhMzimJy8gqrWh3tuSNPoA32t0S5K%2B1LA65aGiskWq5AWUp%2FlA30mGCuTJOVgpecTOcOO6&X-Amz-Signature=9a51cf8baf68deb39262a2fc7e8532cb7a66b193074fafd1af1395d8681a17ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


