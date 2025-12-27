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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=d4e702ff520821a2940bf1fc913ecc654d046ec320988adae1616b868f7bbce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=f4b046dfbfbf40ee1dc21c78cca303d646be15553d98a3bf8b3cf181fd829888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=912c1b39eb1731dd8fec692ae62b8754aa048481b657532a166b2d7d08942fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=246c491394a6fe3f7ef6b0391fc135f395b35861f2f68bfdec8ec72f56c7ef10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=da0f50cfa655b63a4dd8b6f6a0f415e4e3eb882f470a8e01dc7b2de955f9d15a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=c8387538acefb5fbc04b6c6e87761674de7619c284da5692e47cbc6a62d33714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=61ffe237395d4a5c9e2edfc1c53f82c247a22ba74ce2886e7cc23577e4255832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=60542b245249e5c990edfa2392b3bb1e27d098862cf37e8d0a395cb869283de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=5a5350e3df6ca7dc18e393a21745c59ae0c6db697930857ff231c3765d3dd77a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=46050a4e813433dc046ba4933bbd22256b9d7471e2a6d45129421f4bc645fb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGJNPL6P%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEd4PR4ratDFO7gvUaoD%2FJNBnUMLm%2FUD9JHiUQ7CbSC5Ah950h0grYvUNDMBXI9wBQjDpgawUGhfLt5S7lEnNuM3Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwhowSBiU%2FRIE0iqEgq3AM232Z2AppAVGnPs24FvyP9qsGcAlC9SKO9akMLWYkV51IYwY6MBHBDhTM%2BPwYUMcmZZLSCY4dtpqf0DJFGS9EpBng4M8OTJam70PZR0yfy7EVsIwPbywoFISjUFxjufKDEPIB3yGVO5l0u49tVJd5HGwsIHsSyyntbTW6bTUNpQhbaoqPeTIbffGNvPZGgZF71iHFGOFTDqN0NXS5cIIq48krmxxigXgOLlCLebxMABaeqW3%2BTAW0HGJaJ0MhB2EQsJP7muwa9KrzGlp5QLJ%2F9hb0OsRniPCufxjVM4s2WZ6HR%2Fa95AyZMzcpMo5nldqUQ5aCSqrCP%2BrvxAcgPg%2B%2FVnATbTcf%2Fi2oWFEMg2jL7zFJGfOTOkZLUY6lipaGsxOSCvd3SmEYCTjA3PJ49zeSAFJsx0SbWxVNSOvT5CGXRFBRy3T2pJndP5En0w%2FOc1tJLIEpX%2FF9ikXSTo9lqPjm%2FJL1XEwcwR7xTSkL%2FRcf1lBmsvAmfjDKCU13%2Bm062qyuQi8povwVN1%2FlfPq8Hmk8eemyIu89MxRzg2B1%2FqRcJZPbOrS0R%2BBuN26UFSEFAxdBYp4kGPXinC0plDz2Po1yy0u0hkhsbiDks6j%2Fc%2F5FElag%2F1%2BJ%2BxzlTX46K9DD%2F6bzKBjqnAfmS1y4JTtIoxYMFAUkuW%2FFpaeNdNtA%2FwFiAwTzRj9zKKQScG5q396yxl%2FFTOyKcxQsb2bomHtDiIoM1rW8waiuqtVctqMm1JNxbXwZhp9KQOw4i5WiKukuw69ghNEaQDFgBZ5lvZrcUHWwo%2F2S2ayjPj8Z%2BkqYEguuRkPp24d7aHTopFJ3KjwMUriqfGrCGdUapJ8Z8dU6Jeqi7AAKPNknFPAktmqyM&X-Amz-Signature=a60bd0d5d3dfe0523b9f51c0ca1fff39daf8ce9254520a061d748d18c3903c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UYTN73X%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICD2T9wwOagyw8nPr7%2Fgg4TniO5wBM00vELn34hvv7NSAiEAr5UAYxYqXZwgH5tdnTk3TN%2B6kRzXZFZtl7%2BKboOThbcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDF%2BOWRP%2BDFBI0krMxircA4rebrdiHTQHcNluA8BRgPa%2ByUyi7Q3oHO%2F9Ts0raUCspHroI5YpsXJjqXm8DzOS5wSJVhhyVr1E9plNFiwdO8Zn310zjum2S7B43hJQ53iAsQnf3CiVWQJF8%2BEiaWWIhwaNOdUoqZPSu1KUAruSna8GvORv%2BS9w%2FlZKmJFtBC8XUYZ6FYUcJ5CF0pw84Jk14xZ8o6vER2t22OnWS%2BIM0ivECmnvdaOenYu6RGVflobDVWFSSNiqtRK0kgo2rO%2Bebkl4I%2FaHkyXBrrIzITTi10uV8TIsqNW7JC6PsN07CN3KRhtGTNFzqdmPOErF64KXEkYM6o9xdVoHZRwCBvr5PFakCTkVgk1e0xRRMaErUTVI2V55N6BCa46ByK%2FxvsUHgDgTD7cm2mSbQ8TlBr0QhG%2BhWHbv8DmyHuhtNyrO%2FhSoEVLxqIKt7cJd%2FtC%2FdNAtYza4bRkutmqrFC3aKrOTD%2FqshiAExSvA7eq1VMnZ48Z6j8VDLKneFTNIMl4Pnf0Qx%2B%2FEtTBKF4G6t%2BH69cstbAYhXY%2BJi9M6yNOCtXjRLz7TzKD5Mj6D0tAvhl4yFFXOm%2F5rxocjNp2rJFJWaHYyTOzq%2FdMD47LUtx3hZ31%2BjytW23PBXcmRWFBOvqROMO3vvMoGOqUBFH96BFVUc5iFsd45RPYBpfqr7lrMHaIybE8KCTRuKMO0HOTp%2BgJvBQa2GM6u1JJOL9TOJNivV%2Br7yr8GXVO5WIeKetLKqDhD4hCOAlKJbSaAAyD1v3%2B8SIoizPF4Du031nDJKlTqGwe5awn%2BwFAiOYsu3Gg20IrCfgWymL4oPlwVtsLEevHJKjrSpKBeIRohyKcnKtn0n0Bx1%2Bgk825gp9iFGsy4&X-Amz-Signature=25f5d298d137fddb473a45ee9bca410edd6b00613ab209e27d1898ca9630763a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YQUKOW%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2BOXzVHu2I6Op8i1GEPWiWoNUSjEAeqS%2BzPR%2Bbe1bglAiEA0HsHg8Pg7vjmn6drjfRT%2Bn25qcYBUa6j0yNV5Upg7FEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDOCSlryLD86nrVN2tircA549ToPgwU8qp5nU%2BcX8HikBWbD5tS6cdTfvrH86PFXKSFEspuikdGWu5RNtFrfvHXTXDi3dfK1YLH3SoicB1EWBs%2FKPMN%2FXOUW9uq5mDFIjFfTNjKMcgINf1ZHz4H2dFBt42Jk41p6L9oCzWkpYuRa8PvWKNB7PMT6f0BT4kmgyVFEVEMOfYffHdQM52nIiOcEK9O0P%2FCsm4%2BKhlzulOyVWvrDJ1sW5qIgSJRqEs2ZM9xz7%2Fvf7Xmav%2BI8A%2B9H1YHyBTG1kedVpvyjw4YKK48BOvLFe90zAZ512A0pXo26vV28ErXcNsrEEYdP9BB%2FKyYrVwoea9a2jls2M96hjbWl8%2FzPxRYT2A7G97A3n%2BWvv0JoOdm9SyyPyzgfH0dbBFX2lmJRKJuu47HFtnfKzxgRnbCHxy1Q%2FDvrBmxtfk5RWy5x7JKXt0U18n3mbfkCjRxTvndbFTdcHqlDN7yJagI3aBwzJJG%2FklRrjtFJZcl9wR5UAKYMTvbjKZrvIsTW8ZcdzlUadXCHonLO2M6V248qH%2BKYUJ8K3X9Ii%2BmFTlyojXiDYvnnv1sQVGefw164ObejkZzc7qrGDu4Sb98A5vIg3lc5tz6xInlNS0fpvoulAbqikQL3edfBzBg%2BXMKvgvMoGOqUBBJDJQPbfIyGis7G1X8%2BptASmhRdp6jzUFlId42f4bXSrBop33DeOKu1IrMzghGp%2BGELe8RcHwuMCghBh4BYVZ3SLJTMQ%2FgQF2djBHpVqmWkTAaHoiAwmdMLw8AAAaPq4nS1neDtqlCD8WcGrc9f63kU8FzURq9ZEuvtmoep%2B9ougVUoIuq51h6gka7caWyu0ETDWwOmA4ehFaO0wjHqVCa%2BF6fiI&X-Amz-Signature=bf314f96faf08f4fa330d8785077efb89d478c1c369a07db21ef022d55856353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=d73b74361db11cb980f4a9a715abb82d2cc520f934ba09324ad348897c2e9cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJYNMV23%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7P4Tn5r6GftNQcAu3VxR2fr0npZlkDgfGNaTM1XYBvwIgXFzOWLKrD1UWpq%2B42gCybGG7Uq57Sg0eq5x445XU%2FH8q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBD81GoUJ9pFwRK2GyrcA3pkz8L%2FqE6S41uOt2eIwpc0s9aDv9aiSHZFkgOKlC6VhS1zpKrc6s1upn7ZbJ3633kfHXCSGJA3dwNGvTVcHaLfjKwzm%2FoV8gWz%2FMko%2B1r9nYETqYW9Tb3hRc8MhUeQ2imn6cNczAPI%2Bflza%2FlvAukiDOP44jJkB1A5F8m1VlvXcZgqQCA7xMiK3QvL63og6xrCF1jdGfc%2Fh23ATYPVDf91vUzCsvuGvn6Wh8fnhzxWfMBkb0Y7lZE6TbOn10eNg4SofPHpr%2FliFmlwICic45CWfr2yN38Pw61nWsrtnQzHeS5OXDA37sd0KB%2BSv72m2Rzt2CupL9nDMIZHwNPwwFI3AOmSVkU%2Fvbb%2BW%2BmNkzbWw2F%2FVOKm701nOnFS%2BDabi4b0AdlR4ep1hK5l1nAnQrF%2FZbaNekCZpO2gW2TXS%2By47XR1vX2JT62ZBDz34V8c28mdJAPqG8HONx13oEALbcORZwiSDwxNhuabs02pQKqQwuVfE%2Fw6uaJmsmvmOEgtdAo%2BAF6VIPErs3dnUx7HsDFdbZi%2FHkvE4CnW9fSZx5hPbNXtbrWU4qYYNWBLVmT429CpD1p%2BrMX7130DAN0i89xuKjPZbOOyPduENnuFyEVKWfG14XEj3Rnb%2F9UbMITivMoGOqUBsfQau4YY%2BvLOKroZEt8KyVihQIAd6kTi0BYsV3SHPulqY5N%2FstrtTB66Vr%2Bj0HrMGYNptGVN0h8tHeSoZmGAzaEmySdiX3HtlkvbAm%2FYlM2yg6Fm20ZCZaYS06GKPGYHJy6S3Rp3F1DY53hUAQe6Wmp4sFbcbZC1zMiOwVburrHJuxq%2B9kXv48Qcqv4Y8Onlh%2FTDOFVsji4eKb2KkPBfV%2B1EHl98&X-Amz-Signature=51a9da3296743ed575b00b8838983f6bcb141b4a2dc90888af88e5fbed7f73bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=5fa46b719eab29325eff078d646bf608977d79ecfed3594836acd32aa8cda68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJFPXPW%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkF2EkIN0PItMU%2B%2FzcJ3ez3x22VOWNgDwgBry%2Fwc0xvwIgSPUN%2B5j1TjQmC%2Bo4AMboSQcTuZP3WyRYRC4Bz5GT2BUq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDDrQQF5dfnX3SFUKmyrcAx2ak5VhqM793dDDw8FQNfLvGCTzcmOLSEAaX6p3%2FlC%2F4zNQoALA7occlgi0PQ9NnakKje4OULXBvJH6daO8uodVDFGVkPlaGzsImV0PGLM5Mgt4X3q0s8BPuCRcRGD3359qdRVh1L5Fib9rQ4oRWFHOnbp9GyYcVdPDGjDdSp9ZY9rBrA2UqBUA%2BOsOJeasKjI5tKrbU7lZbbLga8dHl4FO4yh7QdyS6cEhok7mSJX%2BApZmdirsuf63G1r0FPNKRkx817ZVcA%2FEx%2FaC5NqAgVUdkijZuPXO8uC407G0oCzGza%2BPX5i0sEm8li41%2Be7WjO1QYC3x3%2BQ6DxFaHSre09kmUrsWVRnU9%2F4wYYtgWKUT1zeWRFsx1u64UboFBLncPQPZGL6Te%2BqrK1fzWLLZf6VBdM5AaBoHo7Y%2FnM00zKlv0McQMsC9rHlX5HWC34RAvu7Ni6nUtyjy%2FP5Z0FRIuLQUBrQnj%2B9QssCAQWMhR8TT3jcshdZMtyEvLZJB6wt8ohnGG9n1yGXUIEFZ%2ByR5uT0uTlXgDT2yTLeSrbcDcI4yIN5zSLfAy%2BgzwGb6aF8ip5n9%2Fq2x15Xrdf6wOlmtF863SA9iEVfemaT%2FV%2BGguvRg79pt8UHGaswDE%2BL8MLbivMoGOqUBCVSTrRdresXZorOG94uGsCbGojuqIWcU8sD7nB44VPYxspHa1C0F1uUQ1SCWFO1PbAtwAvtiXUplXG3yFtTemqcRIwsFmcf7WRtnctuqxYt9vYLmSyJUASb4U0LDckMWz1it41wwoBRs7g0m7bd7jvFwLr8NDSFq2JJlQ0J4C8U74uaKPh2b6EgY0UEeeytEVAriXo8hkMAW21p3ItTnDnPuuXoZ&X-Amz-Signature=49b4974514224e2cdadb657fd44a58d08d32e6afd783f21b0360942a9de00fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=1e96a8a0c8307d46e274602a93ad7151efdf26ececc2e1bfe84b6f569e7b4cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H3CRZAC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDICJ7OfE891TGtoXtLpf4PC6A17sEIIdQhQr%2FGBENPYAiBsUaet%2Fa45WCi2WdsmtgSRIJlJLGOFGj5bQUx6oCvUkir%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMtY0Xf4yif%2BV2XO0YKtwDenv2ADDJ2m18TmhQi0BLrKvQXfX5lhw92XwAIa1O0aYod9FTzhZNC%2FEyunvUjSiuCmzTG7WKrKKrold5IZymSHaiRl%2FVgRdvfRr4DIDraIGiLVw9icESVupPlvkT2Kt6BDR5hKagR7JVrp7hM%2B4NKPsfEUARuhE7pH13A%2F806CADsZZKEgS6jvo0NNOIR1PiIcswTKQ4CbELO9LrskUP6p9X4WDm2QJVuDq24zxluDwLdOE1KLmsXAGdjbAezIKYT3%2BRZizQU5y7Gy6AHp2%2FhY%2BFLT5qgVe65rAvK7Zafikiz2LTPe7IHrft7y%2F5BGKGMyXSaCCFozzUAPealIimdK0pVCkeOjrmbsk1as14Ty8puvfM3cFxKsXvsDHXSCqj8vfXikwri5ye6ZZH3sBdKsgt8aMJa8DsAKFYB6IWXY%2F7DPBnMEhUoi2o48HvkdcAXtyEL5vAmsam3EMTp0CpfG70EeIE7S7dgZGJK3aojzv4IeVn2xnNGFKavST%2F7ir%2BEUQlujLwDxuPU8FWOC5Y%2Bl53mq5OoWdycSl2oUx2vIJtpjNtPAZR7%2FlzOjARU8dnLLvvTj0txGM%2BVRDJo5F6qBlXaIDlfwbsbOeoCi4Vornc2PeFLegIxcbV4oAwnO28ygY6pgHgfvz3667Hi92PDzz6J%2BD5O3RSJHYF5cexmEEy9d8NXpiZbPXJbjopIg8RkSm1ss3Pw98Ipy55lsAOd8eqX0ervLp1MWvZBaqxoV0H0Y%2B1Z%2Bn830UJacOxCqgQ5WHIGsksF2yowILnEXzIVBtShFggykJ2bqZjDmNHVxzFxTrV6VNlUJxvKEOvhGw%2FRFfDZMgQ2%2FBAorwKXOShOtnQetH6uFhFROch&X-Amz-Signature=e0fa21e31c3ca4179dcaeb8f0d42549d74e65d5c5bbc0bc31e161117bac39d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=88d059bb5e7fc27ad937c2189a57127e01f2f200b0442c9791d8b3ea44db3a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HIGAPTO%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB27hyFGt4DmQjAEfkCzZQ54N2mZ%2FYUlgrziAu89MB77AiEAwuFTMUrpLLa5ox0%2Fj%2BEvQWxFMprpofuo8YVclFtXnd0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMBXK4P3AzHr1Dnm%2BircA97Nvo3lhGzDves7edfiUt8hfpjMScgQ3KP%2BspFIM548nyh%2B6E28QXGpRJB08sBHpsHfOCc%2B1Y9OjUwbJZVLYmNPW2wUV7%2B4cdYy91D8G1mgC%2BLuAdY%2BCz7rrU9lSTerYvuT0NkOYi3hIPPfYC6cexM54HqYZdTOzHMdPiTjKwnddt93eTZW4QaHM9OqqHc512HsmVG3P7jKNWxJh8LLM%2BAx3oxRii4f5rg40s%2BaDpOCRkGpkjfsblQO%2Fdg3xFghB67shbaBVbxXpMPG9am2lcePtnU%2BxNjGoGLCFG7L8NC5FVntwAo0%2F%2BXmUvuZdMsf5Tgho9ZMR7DgX3Z3ITHAbCczuwaC3vi%2BVSQ5GX4nfqOKUuvT0Zy3tNwwrrwZbbpD4r%2BagAJPFJmAXGolINtpmIqSkK%2BsmwWFxeaO2u9mk65qZSZ4uhdyNJLSNOLYUq0zXUupasrV564cTjYNio6qWaTA9O1YCGZ0xd0T9ga7IvY7gXMvlAlhgrLUhsOZDFIJ7UP1Y81vt7WYXbhxmXCGf53ndecI2662EMq1%2BCLTiAJpTpGxRI5q4aISGeM%2F82qK%2FJSKZZx9ZPbbXP76MjO%2F5UkogE%2F4wuGrvyddNuMGm%2BQcFfQXct6l5hlTV0mTMNzvvMoGOqUB%2F2dwfesnXKIHzt40EVFwx9sd%2FQqcqJXgoA%2FfUBMTbMXswNeSnjgvAQFaTeHQqVljPN6hfqiL6c6MSqQBizelsvdpB8UGHekAoCCHAwCALZJa%2F%2B7B0EfuiGncVcQ%2FZDgvfP9RCLMH5h1fq2j%2FeusyoB%2ByVz25MDwpS9ntYx3P0gHdADKl2VtVl05lSjKshTmRahzeaTlKk%2Bp5ZVGtRC92Qr5oaxAg&X-Amz-Signature=439a0dda1a156639a3445e69f9fb9ea7946ddaf46cc51aceb1345e1361523c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=d8da8093a77f642d9a885d2565091c5f72e5899ad99a641e89ef7109a948a874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662A3EE6NN%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG%2BxNXH1wgGhD9X7RNMxIA%2Bi%2F89Jtk2Bnu1Qc01823XAiEA4PljUYWp3AWHR885TTx4UX7B4F0seViQd046TID%2BLFkq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDEOa%2Fa3TLngskzf8ayrcA2Cz5P7Xx056SJBLbcrArLvHWPia1bbjnvLCHB3cgfjyVsPeI2SiQPw8doMu06dj%2Bomvri1k93MZMhREqaIMggZYKhaurAQiUvEh8SyThQsr9qITWn1XT7dYl5Rhc4PF%2BfHyDO6Dh17eVsN0rdKpUS%2FYjD8Tc9mdUKNGoEgOBi8Kk%2FJhbNpYVgp6em62SL%2B3xT%2FQUaWtVswIilP4B52GWhG0ZDRZNoT62XdxmxNyNISWA19usk5CEnQUYe86LizrEdlKHiwo%2ByS%2F%2F07P8Sidt5521nDpqwYEdcXImLMkPG7MGO3g4TSFR3OoOf3gv6pMYg3jzgE309EVv9h%2Bak0dLaPR5rswikS0Nvu7nmlNK4JL%2BTX8WIEHTjth7J2mftG48hHcgZZFvFUWiB0DZWm14qNeLioEH5o23rMmb9Rcah%2FYDF4k65GpAaoLdp5Tydxu23%2F3f0lEAgZ0XqMu3JEy88NOraH4%2F4PzwfaiGpeO5xA8yG3I08sy%2BiWJnWJs1OzzLsxcK7peLfAJawu%2B6sn8g9qGZQcQDMnYXMJw1n0VFn%2BKwwRV7ABrlSQjYkYoaB0IJE5VFOdICVWboXNb3X3CxVo7lNYCpxfAiG0cIS9G4CBTMDXnqydybtiGOwS5MMfnvMoGOqUBUY3WbKnZYk6HjTrIhEH%2Fjw7VUPhUnwUlhT%2F%2F3F4v1OrUVWYRWgNCX5j5k7rSPgOeDRWdZHZdEzkpGpmRzXFC38llhc7YK1JaS4Q4JIM7y%2BB9M%2BMU61U8f792KFWH%2BXiThAo%2Bzkm4gqg35ubyXRphF8o2P9Phs69mscyghnxcCjkdzQ10aKaR8syUS4m7hQsC2z8XK2vFMjbV9pdZZwD2RyHWY0VA&X-Amz-Signature=6857a611d3c68e7639a4c6c3bfa276a6f15e00ea030660b15d63f47526a8ee19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDUZSIAH%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGp6mjkD9bjXtB1W9OYreQTD2gr0zZN7JELP3htgIseLAiEAwRwL15Xwcgs2jGNVSnPbouOq5r81hNi0z%2FVvfUFgFSMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNpjm%2BJomjR48imKLyrcA2gGdEcIu3Pc4b3GZRKq8ooZu%2BTOyfCZx929AznQrDh9WhRqP9xlB1aTrfJhFbbZGznfZc6hDrY1MMVLIxlGtX1QADoBMEzbCy3zTk0USw%2FUGlK0X0rUf%2Fe498k4V9bASispKjWz%2FNQ7BWkGYN9Wi2TupTXBCIgASoZ3fD5myAtUBqolTqgb7PWpb0Y8NbvJsDFBNJLjff02WgO%2BPjGs5GgLx7J7zfHcRVA1TzQcGm2ee6E8qlm6eZ8AEqXCvHgth9NTMI4%2BEmdVyNh3XqMMEnE5sEvOzyh16LwTUEdN%2FzwwdlM%2B6I1%2BhrsaFehK6WAx%2BmAEYYrYt4bk%2BAKmScS0cHlmJujx5ynUUWaVAqPIy6WjpJpP6crBe1yieoiQAZOUqM4t5cmtV8bERKZGLo47KdTneuezrC0%2BfnH2laIl%2BD%2FZXFF6GVzfZUgOENNT%2B%2BsBgpKgnbGZrMcWBuGZvPi7GJ5b8gQ9XUUDTQxSjSpqmrvmnFxKX52TtVgu0o%2FZXDryqd7yUqtao6VESVu2T38RdkTHsU1OwJw0%2BIRY%2F3fgmBLUmqMG7rxee0UAS7mBP4qA%2BI%2FG9a7gyr2n4Py1mDyrHxZhY30p9MMLi50Qk%2BeVWq2XdIWjLvwA5GAgY7FIMKfnvMoGOqUB8Le8ddGSvLy0NrLPkpoDAM9VC51kQdztPSN8wpnnuSQLzr1UzKFrJhSYO7j0GErnnxVUuPLngcZUf8He77vighJbPRLN8VWPpTl4PBT9KveM2EmHBt2EhHmFGpXBK6kktCoeRSwADFkx0H0nMAkcAcb6bGpFk4i7dodgllwJHkyZP74sJi3oQihbvSb6ErUyD4VZn6PRBF%2B%2FmlWgRC0GZPIHwjHY&X-Amz-Signature=2ecf7cad50917339948c5061cf4a08218c669d8ae0bd207bb78a5ec2ed21c4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPH2HI36%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVjsrQnTEGJZKWP4wZEIYqORFPxr20luorwnCUjfrThAIhAL1mscRnCuWl28TzlFhA4l%2FbeIdS3UBNF4afbLd0%2FARlKv8DCGIQABoMNjM3NDIzMTgzODA1IgwHyz2FKYk0vibTztMq3APN4lgudx%2BNzXoK8DA7Q5wwu%2BsIvn0QFqUHWJkV5SidPe9SzL1KNf9azarSQaZlBwPb3o1QWthV8X1kVpgVLoklR7jmjZPxiGyW5gLIBMI6Tb61ssWrWYMmoAOnmlb0D%2BqI4j7qGT9FFCIXYnxuK0dpjShqzEGAfc1UCJevy2Yg6VD4QRwgiv5rUZaZS6fmA8QNDwEBmZ92LybeNIxpMa8UVvVhQa5b9evY1pZFS9m0EHcY2VS8Jok56xWT5LtDxXd%2FJ6oAxP9RAndSzfKyvfiCDIUJESPaxSLpbALsV%2FcyAfhDmo5zP0qLBVoUyCeLUj9GjNJ9%2FoVLAItMb46bv25TKlFFvbdA%2B45RmZc3Yp%2FaSGay%2BMOKQIwzw%2Fb0NqPaBqhsmDe8gOkd7ziX%2B21KDo0BqZbS5dwpOMn91u7jejMz4Qrzkt13XDqOTBn3VcOFUKi1CJ6KZBUZtuXNE0TEYOlTYoKXvpyqhEZJVR02e%2FAqLKBFBI85E4eetx7QeysEUIvmRJjs0%2FVbR%2FkEn7mjAD7KoOKCuONalP2P20F3h%2BlJ8fOweycFfLHyluAyCJj4InOUr1yD8qGeAeutDTYFq0NhMWPUkm6mUERWJbWEYEVmVFTws%2BN3DzlHiwDuMDDi4LzKBjqkAXQXWfShzQyYK%2Bk30L%2Flyg9Ix0dqXmBM%2FgusDbshSCiMxsU7okX0FvD%2F2GPdVZE27%2BaM3gmVprjiyExSIpooKC1txXXc5D%2FrwJSeJPUY0jPKiQM3qXk%2BuNFwG6mdtz%2Fd63p0l1DIt9IM%2Fl4YULhwyBCW7XYqp3V1ucd06aAoOkHW5Du4r808aeVAkYbE7%2BpOUzZR3Rud8CwanKvxgAy93k%2BwsdiP&X-Amz-Signature=804069aa325c62760090492ccd40f7e6a859eda95d2838a89c8f6547f79c2260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=b7f712885b7a1f0c25ed3d730d9e185e362c69b81f1239543f008c41636f1aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFMBMBFB%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIELquG2xw07nAytzG6sQcSnq%2FbzWDbcov3Nhs2fY17DFAiBzV308AAghlH%2Fs1XPt4Y3V4%2Bn1oaZI8t%2BO3xUJ5W6AAyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMckcVaCQ2lKPtPUxyKtwD6Hjb37BzGqpPGviZf4kSHIIOW%2BbTLnIZiTzraXnK0EoV%2FapdfoAmXEoIk8%2FKCN2lBBF59e4RSlF1el%2Be39OnfoXJzr5njJ%2FvZzxjomUexX%2F6N8VZ%2F6442TtcEZsY74TvGWbrma8wvvjXI5yvkBGnrwGD%2BimUa3F%2FkQTq6XMSxOp%2BTx9BB6UizSEXY8L07JLzZ27RXGYPxyONnQfkWAerCx%2F2uVV5pK6hovU9ZtVm5V6t6Cdwhic%2FJcnfH2XO0HtI1RCzPRX9IiI2Zj%2Fz8gutWPUpZxIz6L1LPzMCssl5F3A%2F%2BJkhLAqkons%2FZV7ymnbLkRKlOQMeolP%2FX87O5puIKASRZzbyis4qNXHU0oxIx%2F1%2BIToQ6D%2ByqERWsf28lt4%2B7Y9JrR3K%2FVZWC4zxABv1029iFMtallGkwBlZ%2Bn5wLXbcGJEq9YytaDEyqcxxEQfwJoA3UPuOiPlApSN%2FmXE%2F25oL3w5sOrXkXFKEqSW3jRpd1ivuPq07xLj0N0Pq8Vcej%2FNME%2BEWYqmG2%2Fz35Xn%2BcMsz1f4hdBKbT2vyejGJWgH8pDkFZhFntSBpaAJq%2F5OSoH6jkKPSrdRzCrD8E1cDaMrc%2BkZ804SrIfid5B87G9CxIYVdh7WgU7jNNUYwge68ygY6pgGWns7vlXbjwdFTihJEynAX8foSyH9FYQk3QlLTvr7RoF5zVa8ETXQVSclkyi6tiUc5ahy%2BmAzINuo4v3TXl7ozWhII8Rmj%2BCeVo%2FRg7qUFTNMEnW%2FKfOrDyHELhLUxNfpPWOLtG2fsTHk8dke%2BCNkhYeJ4kfEolMfvTjukDwFZMSSP7J5V%2B9GKEUxr4o0igC1h43RG1hf3Q0i6X0YZ7gBJnCc%2Fkr%2BK&X-Amz-Signature=51aec60311dd4029c5baeeef132f7cd49e294a5d5da5741cfdbb20a0174c0551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=2455702f283e0ffea40a6803ac96b103834c1c6a341e36161097878bcb7d63dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=62db893c645b9764f1fc422acb4551d10c309260f26029e8d8029443d6e76464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=e2dcbf1d333ed050dbbe353defbef4a1da4a6369cddd569b8fc96ed32ebb6b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=5fa1243dbf87f3087723c2985dc818c6293909a0b2c2bc7d32871e004f29d718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RVFWPMA%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkHP5VXPv8S2b9821yg0EVLt2Zj9UFtyvOmTqr790RFwIhANUJVA3FO3wi3tdzbWXacoesMyzbYwucJ5A0Ick8s5GDKv8DCGIQABoMNjM3NDIzMTgzODA1IgwCG%2BiE4yCOzVXKcHcq3AMpjaQWtshf2%2Bs0t3bn3rI4lZ09MdMEg205joa7C6XZzxwEANxKa1kycL5rY8UKjuKsTHgS60BguzJYHFlFoxybZnLSi2791OJ7hdK239QEf73qKTZPuqgefNP5GwC09YGbquY7LTRunF4KGYUzZE3DrOYL2bOhUMM6avsEfZNQWMsT6jDJTz0i8nVXAVaNL71MDZjBqGcrkuz14rhNTHTOKt9lsJDwsoJYvIfPnJqEi0gYhjVr5mgCUzn9pVvefi99SGb2VB0h7zInOXoeUpWINweAN5eGRmHqu6tMY25xnCgrdD9%2F1cC6%2FUCvb345%2FoxuspN5SUALAIRkcIiW%2FJmifjc%2F5%2BJL%2BbpJBx80PaUFyVbS%2Fodudx%2BKMIliy38oan%2B%2BxtOd8%2BOq9jeOdYUISOPIgcA%2BSO9QK8ENtN%2Bw%2FnQxFI3swEuDGn6RuMTiFSa95gX1RiM8m5uEIH0sHYJQVV4ReZGJrjHpesfI2cTpvS%2FIaMEt%2FvlVCpcxqNttCo%2F7gUTabPeJcqIGmcgMIl6VWNRqHdF5psIMM%2B3lvusJWuN7VeR4cXq30ntvHZ%2FCoVo5gcDWC%2BByO1qOhuNypvTpezwqpJTNZ3MmXzCE7OwRky%2B2l4cfu86AI8bb4z1TWTDT6LzKBjqkAR4xND%2BhFJBUvGElMX6Xw%2BYjwbje8MUjoUFeaBZHlYFRgaOCke%2FsBrwpPptLGYTbk6aXtJbERA5T%2FxRR88kcDuVe7s8c6b93kjMxRTEgvB%2BKFyPH4EutYHzCElFX%2BM7DUET8xPEwLeOcJHM%2FkMMbrDXBmfJOCD%2BlZni1lq8e%2FvRce2ZPZnoncIe1iWITcqLfMfjWLra%2FqAtONwX92sX922%2FedtXU&X-Amz-Signature=cbc4f77667d93060285b3c13141f37990dd23124501d3c24d1d7b1359d266747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=b8d25ae39ca47a78f77dd09e646ed72399fff136de448f96ea4998dccc903dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=b39ac667e22fe41a7d56832c56f89a8e70bc9c93562f7b293cfe37915fa63081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=e2dcbf1d333ed050dbbe353defbef4a1da4a6369cddd569b8fc96ed32ebb6b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=dbbb5dfa4b6f7e455ed984093aaebf0f6d80f0ef7e65f9363fca9b6b15cf9400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=722fdcd4c1c5627fe3868bc1abdfb52e1270d506945b25a9832c80c6d7af5e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNJR4ZOX%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC43yc7mJogC1FhelXw8cuwzuq3FdqtaJtkBSKZAqRongIhANJK4MzeRYHf%2BpJ7ucc2vmUztCioACPHHIf7I2QYcRbqKv8DCGIQABoMNjM3NDIzMTgzODA1Igzb81vZoZglKi7JR44q3AOAFF14iZH4Pndz7KYAeAYHOXPeJXhwxigTIQqda4Q9m4s4JoEase6BroNLC53Tmfc9XMt6QD13ycSwpsa2OIe2lqzqpPCntGtWlqmSLKVV9U9I8oAniXMXBMIw4LoSI9xeqV%2BYXRc8e8ogVp5kpBUbfDF4wIujnZkDv6FhKeSfVFxfECaP3Ug3Vc7CPFw3oKBFpA9wHn3D5bk9MTx9JgmPTx8%2ByHKEafBB0VE6dY4ChwrxiS8M9iPlAScWYW1pkQ0WHCWD9lRh7qB7WgoKk86Nmedf6n1eiOMSkOBG%2FOsvZcvUYF1qOoSptZsc9dsIH5rNC%2FyHKCOn6aAksIfQ6HzepvAON%2BlHtQK08O4rn7zbLB%2BSAGoJOmNj3Yac47kT5zPLJZmqoPp9UK5qjkU5twL%2Fccg7vak7Pfi0imDuRkft3rqKwlSecDPXeOu79udH%2FLzEuzk0OiqnhL92Mg7WXsErvkl7Mef%2FZWQLljUj3AmwwQ%2BPeMthI%2BEHB6k%2FfP1ItBvhkR0iVm8GPI%2FAUeB6jmXjZ0k1x0TF9jUsP%2FP7BpjL9%2BVZJs1bvmpBUow%2FVKyCBSgRYkGZsNGoV5kA%2FdszLKXV6vQEJZHtkfgtYV%2FsSaEd4d4VMOO4ssGhHCoAADCY4LzKBjqkAQK3kV5KVRlX36A0n7IqvNVHg4d4a7u3OV0y6DKOLaixA2NnjCImTZDp2xO6CDZUGyzzubL3NfYnyuXPPsoDHSVH9FM44g1qKY%2FlY0NZuXhzYgW%2B4zjtlJa%2BVr1gY1TwX3tWb1qAPTDFTrvFvkdfayaYLq9L4%2FikdUzEQOUIufC0z%2FT2vYJ1xwr9rDVtwQbr%2FdIaIxo3xDz%2BVqT03UXGABmdpvNa&X-Amz-Signature=4dcd989ff1dde7865431428a948dca7353c7881ac7c35785f545bf7df6862cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


