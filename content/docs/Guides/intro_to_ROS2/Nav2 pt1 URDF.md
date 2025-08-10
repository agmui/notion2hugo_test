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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=4a9db6085d15625187bb98530ba0495b94e0f8e84e418690c80f1be860433600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=da414349409d3cd3eeb1342a2e17c5891b11cfc3ef752a8d10beadc1921d5e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=234e2a8028127e5dff8ba2b347682464af99fd6f2002eb04557e1486a38e4432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=e2557d01cbe4a919b187c34b1012a04f278143220b3d72558aa8b718dc28c9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=5cbfc6e0563d390d9639b9b567390d07949e31e121ed186553e347341fa0b0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=0a398ef091b04368b225f5fe90dc8b848d25ebc7075c8c716cfd5f944621e58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=25045c3894ef85b81efcf08bfa9df226022f6971dd844003da4d359a485fdaa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=d698cf70ef72486f7688a29b4c491ba54a9f3d6a42c50198b07adea08f3a1f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=4dbfa6cecdd86f91dbd8fbb226b26c90742dc4cff961fe4914df922069f9370a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=dcd2c0edc428f8b184f5aee06d538c8df23af5a8ff67b6753fca5f1df8538a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664L2A3XXZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7kvYkLt52xyNG9mTF0SitT%2Fq5HE1YzJQgFSDFLSxsBAiEAjGwgnWuk0k56LWQhNE%2Bt6%2B2obdjFnIJLMrhIOBWCxPIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6NCOkOift6is93cSrcA%2FmGPfTMclJUevq3Nj6HMq4f4vN5c5B4neCNqLcZfKg92dnhxqdhSTRWL0KvOQffTxZDJQCIVr%2B5kdDUZHCaNviu%2Bp2XE8Ac3p%2BjJgp38ZL4Ni7L57pfVAPnhDHYkbgQXpnS2F3HMwLZWf1GxCq2ABstSJvFDIQ8J0TSfBBFmH7wFiFxLDAMTEyn9iG4eWJQ%2B6G0JXiqko2AXNQLr6fXViAi%2FeMm5PowlPNuTZY%2BmgMLhIpOAZUx02wdEUNzpllvgi9DDX7J6JIuIZGsUvq%2Foi2uZG8OhpBZdsPLdiNZoB1nxjstd5AYn89DYpCX1AKt4ISJwhi2wrE1gpVfvs%2BRWpOOlXPQvQ2SccyD68MBBaTbTzN2cZEO1NHDocfGn%2B25%2Fdk1IZpc2iamNC8oAJYOT1IISuKh1VO9ydYzBinFEYkFCIZBrfhrt%2B%2BkE2e3u1Crl3UFDFY94GqBd6i5NvkVx399kQRwDiSrGyOO0%2B%2FCKycGSPNqTrso4lrjGuHQL8CDmJ3eKmQ06F28RpV0Oq4qnF6T7PfY%2FATMeUruKuS9kDNSUD8CBzqp1SA7XqkiYhF1OTQOaGCx33XgblMN6FkYpE2smNZDNUtLjLjeukNdQRA%2B%2BT7ClwQ0nCF5UZ2NMP6Y4sQGOqUBswJebi05X1aCabE7vxTJkddkTvok%2BQNyDOnq3cz807kmrYd7a0onkPqTMDsj5BCMd4SoDsLsPSDvh2zhcClwZFWSB3LiXKstPC83RcOBzbsVk9X4%2FKd5WKCYei3J%2BMrQhOVJrB%2FMRzWu7T1QG1BGOEzpSgs%2BD03fu59TXjbx6QxoGkUHhzN33KArC%2Fd%2BPvsy4m9qYX4TMhp9AkRFtzPI%2B6pKdjos&X-Amz-Signature=61ced192626674c4e496176d23f5c6109be01f886efabb9ab2c7151544d8fc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIIFLCXD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzSq8DnftI%2BGejObLdrXU7Cq7qGL92B55mAEq4u5WdrAiATU6B7uYqg0M9lV7FpoSl8JeEyQoQaGKM7Ua5ntcCnByqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMobJfpqRVPaAkNivMKtwDFOGxC3m35HEqVuyhB3N149Tg8rcFyO0G%2BdNntms%2FxdrGlzNF3%2B%2Bw0Wq7%2BjNxWg6Ir5%2BbGYRlmr30U6b6yhXjkJJoWbO6rE8RGGOtPNEmw3t1el6wz6AkRrag9KHxdsfyn8tP9TnyafhCbCCH7qF%2FK%2B7DTI30vswyFx%2BQP6sTioZLd%2F2GhWHRKlvUvOwBplE7eQ526hOKZYJqsINlPbjjVuJI2IGsDVIOcVSP3TtV3IzdH54QiD1gV5%2FTVlCIBa0IMbRQ6mzhgQN41V56Cb6ZQMXLoDKl5t8VEFoprleKCQ%2Fzg9qFrBMIb8PoxZ5ucsQtaeyOXrZstbPj4JjWtVoArP1TuylTqS3yQFSxodFKYsnJryybK2kRLyEPVuH5IeqqrZc7TrSXKBmOSK5zYKacGaoKeW5leS4nolrM8J%2F7O2qwb%2Brfx11qCnRfHq3dNUO%2FIageHRCKSvT8eBThhTLISWqXfVqfAFyeIDzZu6f7M8gKLAihFN8P1sm%2F3oR9EZkfw5Y0sHJ%2BvfnYvvJpfDtffKhgdIL62dPeSQlpun%2FLtFsAtvHmugqOqZ0vBTuTVakcrp7qVoHv2nHeXYHYow%2F42QdFhu3cEcIXkfaFQE7mZYQGoua9L3OrsB7wpfEwjpnixAY6pgHue5e%2BbDv3Hjp5GoijV6dezlrqjDqsNQVo%2BmxUR5UXzvkizMHnnjPc1F2hW6kYZT1bazytTmtC0Rx3uu%2Fx%2BkvPCyRYcLxJUHN42tgpCpB%2BmDRfFj0R2N67LsiPzxjd6o8wqIb0ACxOR8ZmyghoQXVj4CgwL%2BH8hrdha2wA071BEOAi3dW%2F9UEBz60JDKzp2KU9kOdy1Nszhr9liedBOLdGYy2fPz%2B8&X-Amz-Signature=d26d725d67856ca595791d1dc60dda1a929b4dad9224aca60f73ed2b71711f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETOXYZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExX9vykig23wFDJfsAkeSK3afadlz8kCtowx1XINH6XAiBrDFTFLz6r2PljNVHGVbyTO54JlzimDfo%2FBlYKbfMysSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMblhnDdLak0z0QivLKtwDePfw6nOGEDowVfaMyf8Ax2MukGUeY7RMm7Cl3HlznM%2F3pNC7%2BKvBg12MOONs%2FYAVQtRq9UY7290X5wd8fy94ngexJUy8nxtajhvQgWpXICMfDsp6pKSoUbQ7MFVyJbnGNFrl305Lt1m%2BqWVN17d%2Fj0UUXFRhm%2BOFGsermH0CtwyM1sBxYbqnUZZ6fTG8g9rQYutWIiG%2Fv1R2HehQafpoUlAIV2PmmQEIF47vOUc30NMqpeGWr3eq9WTfqN2Cz6QIhXo2zfP3oMSaGa7QUSdysNQ46leguT4toOfPQN29Bkaqd8Zq%2FN0aUSAQxt9Hk8Xmpy863cpDcvlWswOqzoBnnPIFkntuWXXnNq6njICYEZZbsNlrgae4iL5VxJfFtnpcGZIvePkPIJVGdEiqxvYlB0LcL414XJK0pbJTIKXZ2I7Pxe1qlxt6eW%2BuIL%2FYBjU89JyUXUxAIlH9nZNHdBQ1iwQeOqvOLfsG8DwZgvyD5OCtoa9NCCl84AjaBUYj%2B0ki5euy%2BXeRgfZamWt0OCsNknaWvyRAJp8tkrBaCY4HvkQihkqG4LZeTQVQt9i5%2FnZR2iiB4sx53Dq%2FIOROstR2YKiox2OIUkRYpSa%2BFesnaR18ipm7YeyQoComE0QwrJjixAY6pgHnRpXVBFbTbI%2Fs734%2FMA5FrKgKSpibDzpNSZyU0lra9MmAv79reOOBjAVx8bUMdPUtQTky7Il9gHnX143ZzzuuLQP82PLQ9qB8Mq3Mm7ByF%2B7Tu1kmgg08PW9fCT%2FCZ9P4HhSZc%2BHOqzbSGh31LxcdrkzgHte9R78Ln5Nru14iKZNhVo04Xz1eRiwf8E7vkQyA2a0ZXq4Cu26X8sG%2FueM5ZvJai8Mk&X-Amz-Signature=a7ba7035f9a498f41f16e100e9fe92be5f1f5bc5da6696c47ce5d4b9e9db4383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=177e196a7f12eb5433213ab2cd3387cf935a591b4eac52d6b08fbdcde211ba7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHW6K3Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYV2F5txS6KKqb14GlSpS%2BBnKc7DKG%2BoJail4%2Bcn7LXAiAOzTFK%2FfyI6yXmssLMMTZY6G%2BdKu9p3fC2hUBiAiE%2BPyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQqxHc53%2Be2VlqXBrKtwDAE22T08VjJmlc3Rb9XspgoHfPly2Hbw%2BnmL%2BJcpRXfkDlHODKz4i1RGRmk1%2BknS2fkwDzCBiunYvtcOhA53NzrARx%2B7N8QuCyC2qQzQY1CW%2FQiQqjs83MO7R8T%2FUEOi%2Ftj%2B%2F2w4SGhZZNI%2Fe5vo7H8TDCTdU6lBAFDhCb6TxEsej295BvEwsO6a%2BGlaKw3jHNmM2Q0q9xlmESVp560um9jNILJZ53IrGZlSJApl6M3Yshh0NEPmwAk6Dr8v%2BUxaVWib%2BHdMqZOyGkUgScnb8S4E8Wcta8j39hyRxYhntRjWki6ZrwnziLWxjCYQSCD8N0ECIYFLJM97rX%2F7ggkOZgCcpmMXVeri33JeVxavsNtqBd4Qdq0Fyr1ZEeWeq8JKk%2F%2FBgfUK2WmG2AImiHCyfqA%2BZjM76uAZKjgM1WJKqMo12A9Sn9AUrTkbPKSIyqraOHtx4KBejuyfzrkBRBiy9dKDoJ9jNi5zqa7CwfUcz49Obz9vYLCQz5U0fY82%2BrqGULVifzhRvw4v9CTCuN5Im5kx8A8ifHAB9E6UlG8TIWUcZBl3jnATGseOAiztvheEisoofz%2Fnq%2BfzMzZ08JZZ24P7v9YtYaUOGUsJjVLpaBchrFzm%2BvXPjut2%2BkFEwj5nixAY6pgG1x4nxNnRZzmInXNvUYbCX%2B4L2kTsoIv94mEXSbMMClxX9dxN8sDQWNe3gC3BHp5MeU4QMh80zWrUCIRYNP4hhH8qAn6VicSu4P0Xityu%2B2QH%2Bz1W%2FSR04AgI5eL0IYs7tUIXUpVCeaxsU2GCEHdRVECc9%2FBuQDkF6HEEuQjvPpCa4C2KGSp73fvPWENXhuk42B7YoDSh21nfmT0LDrh7ZxwkvI8WP&X-Amz-Signature=6c50fd676d26886481f82fbc5c519e7876b9a538179a41c2b86908e58214fea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=f3c7d30f502eaab0c9e9d1211efce2bd317361d8dccb3e9861ddd817370ec539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDLD3OE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ8KRAINkLCjSs0hcnsdtcyKyt2xhlJyzB%2BSeOZUU%2BQIhAIk5B87M3pDpxXeus2NmtYRXlj0lZ89oqxafLhUWkpM8KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlJ0WD0RjnnfZyHW4q3AOQr%2Fyb2sTHERxM1qc2hMOLhG%2Fi1CleGpDgzXpYksNvkmQe250yqOPkchkAo%2Fm4whU6eKDzpVqMn7%2BiXkACuynZCNfPcVeuVzn4qxVRd5vB9ErsOWO1jrfq3BKdOsW9YMiw6uPib9ov3Stu6drWSsVJEeFnC%2FEjup8w8%2F6QSFV8n8clu7bxhx34sPmD1HdXrzb838PYtaywtbOtWuvXj9tHk99UIa2lZ3VHH2M4OQwDiNGKfrlX%2BnCSbLoG14LoDciEMp2yW0WYFI1E%2FI3idyYNvpNodRrvtEokHyOiBHjr1ZLvkd0Fu%2FTdSpOMeWd2z7PhH44sIJF9bono2%2Fk6gngaOae6rgrLy85YAiaUDix2eXF5eI8yrEbz0mExp5b5S8wzRkyu%2BrDEPJXS7ldGcFsdKx3nwAZWavi2XAMU2KVOv6Ea%2Bplm57ILGBRjvCZHNqHzUdGeskKmppJYBLLBnNCzTLAi7uCGGvNg0NE%2F3ELZ5FM5mQKuL3V9yDvgk5h4Oi%2FgsOhmkb9FkPgfftdHgC5EPvEdKt3GpB%2BjZDWpv2pDb80vhxZiVIxJnhS1pfPEm%2Boj1%2BXDjy%2BxfruqhIqJ%2BUIt7DcYzcKvQXtYQqv9HfSDt6ookhEBYJ8%2B1ZPInTCSmOLEBjqkAY8z1fz%2BWEMIMzbezprc6rb6ScsJHX7J2glVnYNasm9pMJnTrmolckhl4%2F9SOgGNW6qvVpoC%2F3nSy74gws4Dl0xZbJ9pTlAWBX7Vgu10yWlseD%2BQ4mxNw%2BuhlZBCzmIweVa%2F70mrniSbGjuvfkh%2F4v9JhASWOy7RYfO%2FpXMiGGiBFFO5cS9VMzcTpsR3vxDu%2BD18q0ctsbrVrvtoWBcsvQ1EzbaP&X-Amz-Signature=1121d0dda189523fa63182c9e873a7ed9deb5325edbfe0040af81a79433b1081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=84b35c661352a0ec50083691c6b76a538b4105fc45e554ff6ec7363fd6f80df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4JTDWTX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsIuWwpDDW42zk6%2F4Oq%2FYa8Tc3uJyuD0lZOcllBJLuSAIgUrUGuwPncmV4y%2BzjgKiLMmOjwZoppOhT41oaray3f8gqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdOiPmq4y9nxAkX3yrcA9pb3xBLuPoRzxQ5Qi9aY6jb8s1rqVXwAwZ%2B7rpziX1R%2BW7krWF7AXD19XvZHyb%2FDgcdYv6QBSVGDG9IuCM8Jbw4q%2FnUaVYaKddFbYmVT43FN9EAmzoSIFrPA9dmbVC%2BcPT%2FDpuwL0GFxlLocNOwcc%2BqXljHbcC5hzCTsuGyMpOB2TGubSj0WpHdy9AQfpuaQYzS0utknF0Ur5mgNRF8fYxIiSb8rPvMuL8AQUuL6%2FETUfMubkvDnstD%2B14%2BU6FD9MQp0%2BJkuYMO1i9SKUopp1XopASz8foCV9XlUSmEGjkiEu2u3FcDLndDUzDM0FpgAuARXP9Ex9%2FpPf9ByqRXmA7AXg9btbXVT8bdQGS6ychOMeVkX%2FBf6Fv95OLaKMoFfTlm1v6uZJMeHyEbXPQvzw552H%2FsJXbNk1ZoV0MktKx0vSUth16eWHdF81uGHWQA75b5iqS6KeVvaxRvUmpD36fJHFtDWIEUIj3WOGCt4aS3JEJfjX0CTTJaE4jiHlYP4%2Fb8%2BukBgS4Vu%2B2bTRx3WZKUY9GE9XenG9fTCAu%2BKNzgz4dBtzehO%2F2bDlbqzAADhTmQBx7B6bB8ljJSTqG3Hbv7YhzyfitklbEhOyoy0nhdSWT72%2BhObi4HYkV4MKSY4sQGOqUBziS1l2mFr8FgMKIDaHXjSqBOXLjRkboWFdeizCSD8wnvNgHy0aqHT1oyXnBEFY%2FxMgsz0fjCQejOOuys7g%2FKpEu%2FQmfqVWx6EzLznaLkZgXBu2kcpjnKepgORCHuhRtHSf%2F3MyHoowfxzwKU3K3WYYYmwod5eojDpo9sGKXCVPw0qIXoD24HRqAdOIsHdhzZKc2cwfdlIwRO4NBiXwwbFwoN%2FeJw&X-Amz-Signature=becc6911d03d54f28c21ab8feaaea7289c498e33696b1abfcdd9948e05611d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=291b70310cbc3c9f62527dbfbbe29207cd357a0b50750826f14ee9aab6d61fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAA6TPCQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIi%2BqR9aRr48P%2BMa%2B75USlZSIAgRtPHKgpPum98rhbdAiEAg%2FGyBrHiwAkXeheUHz17jI5LXNh%2FpBEhVrRti2GEX3kqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTwKci6MqUIfVIp0CrcA0lREPzSAra2G9GJZ2qpUrflSIHdWxZfnViSS9ieUEE3h7XlYeFb4XR5UOzILb2bZn%2BtwNCbFBLJB1pMOGVC7hBKnKwjaF1xNtsbXPxl0RYH04w3bm6QOxWbb50NUwDVuCly6be1x%2FGhn4FXNRSXMy%2FPWvlmo6WfpsDxTvDzac%2FXm%2F7XVLixcnU9b%2BVORmKUgBPBaB5312KXvtkUVH7JKBOAta08gdtUg8J8JAxSFw9eu%2FrZtvl4JC91m0TCnUa06BXWfSSIbWWmns%2FOrB9veVB%2B7gYfuwEgp6HosmeL7%2F6TaJ3sb9ISdkzXJfX42pqUqAAlzE%2BSrSRqR676YJaQLVuPRyfVi8rmAImSZea953nl%2BLoT72%2BOIqA7BsF98dpUgQLN2LTRo2FWXCODNa%2FjLLyGJdgvORIeCIApOt14jfyBzdhsbhzF6Pytu7tmXtVzoaWZYTjN8N5AeieeOzlYRjVCxpVwgsKh3b2hX%2BsvJxvY%2FRmmug9glLv0sXYLCHHNWCoNRIgcGlVCZylF26kuEacpQ%2Bu5LhYJmHOkvXrcAc0w44TVsnro1pCXqCIWYxRHvIBXsz146prrBv5dazl8bDB96tmrySTwjXhv4htwJW027D5FRVQTWdcztZLoMK2Z4sQGOqUBZ21OJWszXj9ByON8IIkAIaBNejPX6vmcNid7VsFvxtspF4zJ2%2BGGD9bxPro%2Fnhg6F6AqO9iPB6Pzt74EAckhflbXsnINQu7SL0NeKPDG8cTuoSBwUMgi00m1TzA%2BDyEW4hSPh%2BmAsy48K7Yc%2FVsivoQ4hC9urU3dZmXUtDt2pnVY55vxQeUgwy6%2FbCGfMT29tJDZT6hro7LOLTw8%2Fw%2Fp6aizhNCt&X-Amz-Signature=04eacfba492f66b2bdfaeecdcbbd5c2916cc9c6752d45c6171a56aaf5032fa82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLAP6VE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBn%2FdL0ah%2FcCQnmCCO6WZRjfRDyPpXK17YYrQj85FblgIgTFI4%2FE9lb1hXNBPdjQzb%2Bb4%2BgjeAozbslQfvDBTRJagqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFcRRKmm1%2Brm7lIwmCrcAyKtOj55VMfl8fe8pkuTy1lo0%2FQj9HJVNJSJUfU8PRqlyLlXJx38wsMRG5ZlwHAhxMZNrrPliCWFS3tmPEDppJhf%2B2KRO65jvMHnYQRswK%2BOYf8xMuFv2h3FxTyd43QTzhZtkzBzwnxdrFCU8bl5YM0q%2FqimcgXXXD3%2F4aQduCjdlCbbmqWGMyTXnPpxuT3QMX6fed24d%2FJZmqaAII297XoA%2F%2BU3%2B33cliBoMtf4G9FnTxEP%2B67vdhxDDkmtRIWudUkRhizs3c6WZAJ6bS1K1d6obQdfQxt03upae%2B0zK0GheyS3yuqLYYtiyUJgsibB7kYV%2B0njQ3oBLthZwxm%2B3EFZaywAEssRONO%2B2Dqpxa66IL%2BY%2FlFZHY4vv7udGlJkbXJEf%2BHbMmiQ6%2BK8%2F8SshOXs78KnaC1QmEd1bb2lUScCDXMe2iYNuS6zUQUW6c42bnRV2UoYj3KPNV6cgJ1sdhpF27dWKef7Ac0i%2BYuPUuIc5Y4wX7AfFShqfoMGTH6RBdC3SjpNGyVQQgBF8LoEL8T9mKav27JLRvFmzutufugWFRXEqdzu4AAZKBRvKMaR%2F9fviC7Go4VzhoCKB01EQMkEKiYNZqodc7e4K7aNKZff8rDiTYAVJlMh%2BsmXMLiY4sQGOqUBK6IOJqEN%2BmSWmPssmqdZv1E2csRjBGUsYXsdjZ72Lb9SDRyTjiKC9WZRjWvKwlSai5C4Os%2FyoNHegAHsRcZ9XX68rSj2MvXFe0v470F60k58Fn33vjPLxF8MWbcJ90SZttXhpAtkmL2G7iP%2Bo6QBHNSmXfuYMyh0CTtPIPlyvCO6ZT0NzKO%2BgDQVO0IC1ol%2BZ175uSR0pZtR5ZMWBEKYq5xZAtO0&X-Amz-Signature=944d7f067aebfdaaa39a12d64f6608d8ca5b807c72a62e2751764fce173f00c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO22BW7Z%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECUsxKjmPW8kqUow7bDwo5NKVfY9BBZpE3JQHzesHVAiEA5g62WQrOPjwQyTEZh8DasysT3gX9RkcInyTVmAdQldIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPbkZxQxgirQbGc5yrcA%2FrYbSM5O7jNQqQOBi%2FYhjodcCfDuCAoCoP%2BdJsD0d3hj0hxZ8bM1TsPsUqhUREumrvrawn%2BCC%2FVYfroYWyoB4qiNOos5%2FkktHa04PbIAKixlTIyvAEmZ9vahLGw1YqkcZ5rgd4LVj%2Bx05agxt5vVgaCdZi4ShXnk2YrPU%2FpsHZasFgMJIXyinCaYQ91ApWfCpjKlIjOE46QRjUo51Psu4a2qczCVyDD0lSKXLDkzlov5tqsoAqI57hX19Q2cfXckffZwXpZJzXd9M5qAt82kHb4%2B2ek%2BalX0ZxkAVGvCZpISxAPtIHMbHCd%2FdvoQ6Bafmd%2FmZp9QPoIUifG00aKW7Yd56mcFcsnhPYJbBibtUyikwq8PP0xdDOpnbMtxJUYmURBNfvS3bSpgBTFy8K8LfhYxkC%2BcmzeXS9u8KFr8HCqdbV1LhGo%2FedEtWOOjNXEBl7Clw2AYz2QvFPE3%2BAIVaHC5Gbk6cjkAOQ6cMnymVYH0Jm5DQt2p54PXNxPBOsuE9qnCJqqyaEY%2BctBzrdRP2tdRkJT1jOPQBDuj2050OmtShT1UaT6xkwm%2Bf88SbPp7OLmveEv655nrUUO89fvfUntRvDrWqgF%2F28vrV4FLXqS2JnTF3aauuv4kGPzMP6Y4sQGOqUB1rpGFv2Hwz%2FNJhcZ1aGi8rAJY5XzwNONK62p%2Fw6jLU2w%2BTciBcxzav57stuWPnqLnmKiWZx9Z5v19s0%2Fp4g%2F6Z2zDyYif7Ir3eJW5y9unw0OeKEEM64VSX8cgRmh%2BMHkIF2b2L9LXrkUnAMcvQc5YQtI1nmmEMnQ1hL68f4lBHQ3HNARcUOgldrlCB%2FKgT9Np6qGRlMoqUPOlZb%2B4ytQVZjFXERw&X-Amz-Signature=96c21e4fcc02138ec5bb6b45a12e952b0ce9ee4c313c9964d31084f36c9a4324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GIJCAI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqBJNZ7SWw%2BVGoxw%2FOGS4ApQrE7%2F2Rw3s%2FPKjtmdqleAiAw2nChqF%2BPFXSTlBSUSx%2BRkOhYQzQG6y0FjrLlxLrdnSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzL3vhVS2eVOKQP6OKtwDhwGXACcRpuroRa7rznmpoFleRzs2Ae7poMXTkNwcMZd7TbNvjLvDOlB9sAySuuD70ZPc9FrDys4rSNurolMv1t86auJKTPc8PtGxyKzepW30My5%2FJ7owx6eKIZVHZKFXwT4h791Jd0hiN2WPDQCt8NPFDqFsXW8%2FQuqVy7UajTRTKhAuXUE0pXkDpGQn8nQ3RoqEDte3V2lw8AhoyUIqkTRViSYR%2BgS6r%2FT3cnc%2FBnK4BD3iM67wU4yklNyxP3ruS0qHZQGJPvalrGkoEC%2F9HPjtwVGSNMp6FnkNL9%2FgJ35W86m8Qd7bM9PcGbcXltVpV%2Bs7P83875DzE05R7hFbxibCTweWQfHhXqFF4Zvd6iCfk6R3pwjMHdeykmX3sYSYv3jTmENLoUCsBszLW%2FA4tVZ5TcN0v4zMJtUPDNz%2BKfr5w%2Fo3yTv3AgWl2u7auPdajNcZlz1LuVKy8nKcmlCq64XEMRzChfhh%2BTbBIOB5iOBOGVSRhH%2B%2BceIFa90n%2B0RYmoHRhLUDkCeaRMZfrnCo4DCi7GJ50XCy2tOahTLxGLRlcyCNSxIs%2Fc%2F%2BFtU4QhHkjtj0hX1Z5MlNo7CnwjLQwljEPIOC%2FTUf5lgnaEUyknBvUwA7uBRhlT0dM78wmJjixAY6pgE8ooPYC4ZbhtbuVfnpTcHjSM3ZCzK7Azern77w1beZRuK6DNxwszeQUujYI8ksLtq3VXKfBPh7o098KKRYIUcMNdfCTGfVMn5oIcmqt8P6QRZ7Q7lF8HUzoI60ioRjFL4xA9y%2BvWVViG8tLNCPkXf1ni5b%2FTkNekps5fVM6bzG8HEAlzl43s%2FrUFE4B9XGwSh%2FwlT5Q5jJURsv%2FoOd59zEGtnSY%2FiL&X-Amz-Signature=9eb1f68cfc414ecd4ee2688aa0f7119227f3f150303a89b3974701c72b6bd1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEBSOCM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUk%2BlhWbvIkXtXFe%2FDEc13dIAn60EGa2orVBoE4KEZFAiBGnXyKZJFuy6SigvWyoYCCNBGXOeT%2BLXvIFF3S1ptEayqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjQTgshFXYMdh6J9sKtwDh1QvPyZS%2BwQ%2B%2FbPdgGjbxQjmWB9RWEKjnmYstWlNQk8bUxr20PYFvPdlaBnCZZs7%2Fv05bmemYplX9MOOZOSBuDbpdBTHuNb0sg0FIZ1hzmjCJi0EKMh8XZQR9bA3IJABeVAko0ybQDucXzvMR9vpdUObPcbqrqcHdv39W6ITrdSgtL8lrjQkFGSj3tbEhuTJqsxW4%2FvAPBPqlIMsmox8BF%2BP0p4obWBq31Th3dH1fq2uBtQnyZJJd5Yhyaf5%2Bf6FcxdEMq%2FhADxPPhgPfTixxXqrYQingVBs0pVqRHX2t67ccKlfhFYNQdUXfquTcx8wAPlFAYNOgBdParwnGQ2nk80s8N6HTPz1wQaCEiRUoESGNFn8DpJb0qmx3kxoFAsc4OSIDB0J3xr6KqDpucFy2JiiaxN5nqwYvcdFQGFXwdN%2Bn5Zoazlh6aVT70bjujIWe0FM6rsuopsjGavGFqyalwqc33LAVKBpHzZtahMdzx5J%2BkJw448BOY18WJTfJuz1oza787pmfRpMn%2Bix1wmmWKZuO9taP%2F9Be1yU8ktcHpHM2J0E%2B132SFcFfjPgy6It61epUY8cEFpP1WhAZQkBtJrwTn8CqZu2sPNS8pVcaj2xI0xWsL7nAqwP91wwjJnixAY6pgH1v0UjLlVjl%2Bi7oR5gfgCJd%2F3Qkt%2BBJSdQIDxd8cAjdbwxdvEGIVqv6GQYAn1vo7731iJ2CjkcWb%2B7qGUVZMZslriRn1aPW9aWCVfricUZoC6EfSPSBvTtzjqQ9rHUTjDerFM1fnQ7bPaJoMZLKRqFGdWPM6fQvnmGCPlXf9%2FouIPh6EVnQaUP0C2DMNLDR9tad90sYzmrw72qig5xk2MHSPOSg3sM&X-Amz-Signature=324397e03634981660070ff9c0bd5f4567b658d811fb06fcafdbf9449b5fda95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=11da51224b56d2f39bb1501fcf4fb57d273d67ad92443949921ee2d227d10bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=1ff6580e671891677a6f67281048cb55815dc9de70c094f4527999889cb43f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=5c2080cbc3df583f1f4ed2716a22de92bdf1e227924d3c576888e2aa7237b720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=7a7c9a1a293e26a472a1dcc48e82c9e9efa14f37b383586a77b2d38a3d6a0569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=ce9a53d1b408df2cfd3b470986b0a6816911132bd09251361e16cb7dcb0c4cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=ff128401af1a3e5992b9e2d9a25dc13ef0741528382feb813176815d246ac37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=7b5e7dd19fe3c18e4ee7575d91a3229bef1105569b92cf274663de6e8f49e22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=305ae7194b860c91f8aaa58d6d48d7f51d14cfb0686e38e163f4c4a1c97e0f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=ce9a53d1b408df2cfd3b470986b0a6816911132bd09251361e16cb7dcb0c4cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=103abad22fff7cda92835cbd19ae361805a8ddfeea63ce44a3e7af301b985731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=80189087eef3c67a6889ed6ced9c6343ab447aad26a9f8d686454f36f7fd21c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTZQ65ZE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZr93AZMokJZkzpX%2FD6vD7JWqVR0RfR2NAldZDg1FgQIhALDs0JeU2hRwPBr5CGpXi5IQXHKjhxLBm6DSMUEqQ0ILKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwnhgNfvqV9EhYE%2Fmwq3APgJcnwtl3WT5vmCHod7GAfjEaO7SQ0QWX42wV4Gc00lfcejK%2BeFANghYuvgoBhgPO4MSNEDK1JJ5JZ53Ptt3U9kzYeFbYI4dWsQIfKzCsOn06W9A7TiYhthcr5rnoPwMObwGDdjCfYAyVVpXRe94LgY904Iiy3tOXUmDpcmRR3CHgQhCgMgvC%2Bizep87RFR9PUA8Yvp%2F9jXHlf%2Byrd9na%2FycTYwbkh5us1KFcZmHg7ESwIhCQyKnlPqu7q7ccv8bJZd5sqPX1DmiukuWUm%2B8c36qhCgE8TLqWlYMldQUjd%2F1yEM9YOI5paaPLJhMUvoGbOK%2Bf4Gq%2Fa5%2BJmsvwf%2FoGmv0s%2FVwnQ6OPxDhxBZMfFShzSisI3olC%2FWXTVfQyQX%2FOf2BRBLT45b9hWHKHdFH4F1OTq8LSvFmJEr3rj8o9Lky6PgYQ8UR8yPtpMZR6t0%2F3WaIxu%2BCWNjkj51aWxOw3KP2lYkljsaTS1YoDebc8S5Tl5AKhkuc4Ryfs8NyAgWSwLmqVg33%2B%2FtXeEe9fH1iyYv%2FGOi0RddEqfWavEvXHB5HLa9zDxMOCKYpovMiZ6voiurQDdgUK5vCWZrFkedXkP8gpchV8eEGduldRhzWXFvP9BNcR75svm%2FvYcgzDfmOLEBjqkAdmJiJVXOrRStDTuv%2FkUUTcDDTBbPQJRwOMs5M3lovJWyGWXKErpBegEwh76xwJdU45dJMtzi4xfipVzRycfGrWEI1WCkNFoJfaSGHPQuAAy2VN6UcA8WlUdjB%2Fjzqu41YlgSedbT010g4HXJfbDfMKieP%2FSSua4%2BUClSHk85hYgR81vOJssava5wxoQ7OSAqk2ty5Q3pEdZD1xdi4QHe7GjBq6A&X-Amz-Signature=3690becf2dc9734437f926625631245a08e53e8c54423985b9dc83dfcb4e924e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
