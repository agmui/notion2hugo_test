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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=b1c55c08eb871510cea4c42f63c523ca58b31c3dc0ad47e25f517efbe9d6919a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=97294e426f5ad0ffbd4d7c41ea19de0452bddeffbeb19b8a051011a030f3bb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=54c459e3db88c5ff529510e3f790c5b651bea955fa576597322d4f7f6d427f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=c6d2151bad16e1b0ba63ba86c30d1c5c82140a1ba69e7d10a94fe0a6e894afba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=edbec9c45ec5d63c1735a62bb4b314ac61b51bbe690e248f08fdaad39c428a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=855baad8f176352546e951655471c4e3ec95f969141959c46da330793e7203e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=1f7cd12d6834b0c6ebf12c10ff9383f67c08c8d1dd56ae2600d09e6204eeccd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=48355f795bbe542c30d69d603bd82605d645dc5573b210ec9dbd36c7124b4da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=9e01932c5551a57fb1fd2fd419661ac0abad99cc7d2a2ac2060d3eab5d54b50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=ec86bdf362d7b925f21831f9a0cad52f2d14e51c945b0f549d4e7fa929e284e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZCEGWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDZpFPj0aWpM5PA2MtmYRth8XicxYPTUqP6pNdL6YFPAAIgCf%2FNvGoEwqjliOetTlDF8RTtiQ6njUbpW47xdkTQE%2BAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPGlHL4lySUjOv8c2yrcA2vCeN%2BY5Ixy9wUyXEVr%2F%2FCQA9qseW0GBoQT3vTDo3M1NP7CJNAC%2FU6uWPZQyMtspVel0dNCdV0CPiN6qRlqUqaCyGfE9LI852LtIrZUgP5v4mN6hiC4rkjAaIEyTFe%2BsyX2YhbdFY67C67FKgMvgexTRrDPB6PSpXt%2FDphWIhVYMnIs8GpiEmQD03fWACxFLH37BbPTeO7AdcsZf05HLvzJ%2F1AjxiVSdbQsNXW9dXD5CrpHomsnMta%2FkurcYC7OGokxFcalTuG4VIv9SX%2BDC%2F5J8%2FpWVMqb%2F9ksFyGB0QGYfTmG%2FHSTt2i7iY1ZWIQEqgf1uh362XjaTMd0oAM%2BMigf9EaioYQd9S9pCf3a1yIMrz%2B%2FhbrcxtcFvLlDzuQdkqZkeXU0UY59MPq88R%2FjwmSmX60uvxqM0VOUs0IO9ZQ4WD6j8V8DxnQNrD0LC7jxd3WhfEBSP7P2uIyJ3sYzXywAgx24HEP0A5MANIE6upc9DHfF5%2B%2Bgqp%2BJKy8ol1mb%2F%2FV1C2pejN1lXmPckHicf2XxrLCte4z4QZKXMD8V%2BcL0OD%2BgvkBRw8X9t2nlKa3w3j8XndMZzUKpw%2BN0pldcW%2BuAsr7RT%2FFmjcX0FFxjj70Fm8lG5Xfw%2FAzi3VksMJKDyMQGOqUBQ%2B3m6X1%2BJNC38gLRhlKt0QyPx5PVmWPNm9q732YGiSYOjhwcwhAZulOwfeK7B0UaUzZyUQFUk7S6avr7KVluNNNVDw%2FmiOup%2FKlWqSvAjFJ5tmmdpy%2Bo4UFNYV5etNbARFBdNp2U3Vr4bw%2B1bTA2WgcP%2FDzNi43j%2F1wmBYsPmq9CRVDAMrbZcVGzjd3UWO28ONiPDrbn8D%2FYwzjSVm%2B%2FzVbyPZy4&X-Amz-Signature=3404ee5fb15100f37e808fd6860b98721c30aaec22ca6cfe4b2ea601b14f9d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEZCEGWM%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDZpFPj0aWpM5PA2MtmYRth8XicxYPTUqP6pNdL6YFPAAIgCf%2FNvGoEwqjliOetTlDF8RTtiQ6njUbpW47xdkTQE%2BAq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPGlHL4lySUjOv8c2yrcA2vCeN%2BY5Ixy9wUyXEVr%2F%2FCQA9qseW0GBoQT3vTDo3M1NP7CJNAC%2FU6uWPZQyMtspVel0dNCdV0CPiN6qRlqUqaCyGfE9LI852LtIrZUgP5v4mN6hiC4rkjAaIEyTFe%2BsyX2YhbdFY67C67FKgMvgexTRrDPB6PSpXt%2FDphWIhVYMnIs8GpiEmQD03fWACxFLH37BbPTeO7AdcsZf05HLvzJ%2F1AjxiVSdbQsNXW9dXD5CrpHomsnMta%2FkurcYC7OGokxFcalTuG4VIv9SX%2BDC%2F5J8%2FpWVMqb%2F9ksFyGB0QGYfTmG%2FHSTt2i7iY1ZWIQEqgf1uh362XjaTMd0oAM%2BMigf9EaioYQd9S9pCf3a1yIMrz%2B%2FhbrcxtcFvLlDzuQdkqZkeXU0UY59MPq88R%2FjwmSmX60uvxqM0VOUs0IO9ZQ4WD6j8V8DxnQNrD0LC7jxd3WhfEBSP7P2uIyJ3sYzXywAgx24HEP0A5MANIE6upc9DHfF5%2B%2Bgqp%2BJKy8ol1mb%2F%2FV1C2pejN1lXmPckHicf2XxrLCte4z4QZKXMD8V%2BcL0OD%2BgvkBRw8X9t2nlKa3w3j8XndMZzUKpw%2BN0pldcW%2BuAsr7RT%2FFmjcX0FFxjj70Fm8lG5Xfw%2FAzi3VksMJKDyMQGOqUBQ%2B3m6X1%2BJNC38gLRhlKt0QyPx5PVmWPNm9q732YGiSYOjhwcwhAZulOwfeK7B0UaUzZyUQFUk7S6avr7KVluNNNVDw%2FmiOup%2FKlWqSvAjFJ5tmmdpy%2Bo4UFNYV5etNbARFBdNp2U3Vr4bw%2B1bTA2WgcP%2FDzNi43j%2F1wmBYsPmq9CRVDAMrbZcVGzjd3UWO28ONiPDrbn8D%2FYwzjSVm%2B%2FzVbyPZy4&X-Amz-Signature=8e4c56ac193492a32cba7ca61b7155f4246275487b200cdff719198d7c5b643e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFLXVDF2%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC3uumGriTif%2F6L4q7sgp%2FEdxPrSJrQUeSUDNs%2F0TTotAIhANOxeZQz24Yy6L6l4Jw%2BS65R4wfvhDvAT%2Bq6sSKjqjEXKv8DCF4QABoMNjM3NDIzMTgzODA1IgyIS1cGRn9cWizULzYq3AOqQ8eIAjGQCoefLjbHK%2B5sw5p0MrZbD%2BPidlxLxKJihEK4SriPhot8MkoEowId3HQbf%2BpsYlFHdKjHRg%2FqALxoV58LAnVhC8cs6iQ8lOpcmk4kEZhQuHAJsFX7d4syOS1SBD2cP1xYnVlCSd1dF45D6kEw6YQJJ5CxjUnoTQCn4KocpTkY2pKNmPp7OY0S5oQwRfhLOp9U1D4urXeJQW%2BiEF%2FLsAP38%2F%2B5d79ar4XEUp%2B5ujJJtAkf2yjJwCPvvFnLsvvRiadId5UQc6lxBzF%2BHKslHzeNMeDH6VzIWuM4QC5iRXJ7D7hRT6h6OdeHH2vvyorsqcW7PK%2FgQx0UWgJ4Bn4CS0JvBsCWbVIV8cez49BXEMBWB1zdqjdZs7u1013RQRQih%2B9gMNxUQKN96MwKOKkkh4wqnJclkyeHMM37Mk%2BaXQgtEV1PZ%2BoEAE%2FLpnmMX0a7BJNSuqiBxZI8fYekHDEgbXiqE9uq%2F4EiCIeQK9mVpLJ%2B4L%2BRGYbyl9NtwdIxp6XkBvCxSZ8yX9fZqF67wzLjsF6BAV%2FJ%2BUofLQEzv%2F%2BHtQ0z%2BkmLg3qYGG1Iqxk2Arz3Db2pum1bUqjoneNby%2FfHIDN9z%2FeKefasUR3VZS2O9qXsMCojzR96iDDJhMjEBjqkAbz48bqUnN%2F3IrCDNed%2FgekeLv2IyfHoudKkHrOMvomCjnh%2B4tKlRPdsOAkr001kXxCJU6jin4dVzET2zA8XxPnabrPn1MfWYcBLZdTsypgR6GBlrT2kfeU0jYxb5DsZgNN1jRJE%2FR40ZVhXQs%2FYX0OJhs%2FpFn4np1s1oTHqnms9p4SdhPUBtSsuXl64aXLW%2B7OysTdi2xTfX3d%2Fluvq2fHtCPrQ&X-Amz-Signature=4ea11650bf8c759b18cced4c0be8950fda5e4bd2b6fa55ba136b86e291fd7014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=0d0c8a818a35424b6fdfb00f1dffa88eb0dd7a2c85a2d56f1753765ba0217a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSUFYEU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBCSfp8Qc0zkUJU797KMSN2yks1w1ok%2B5oAlBkXnUx%2B6AiB4o18o9ysrgRf3L0P0Hb6m%2F2W7un%2BW0djQH156HSKwcir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMEc1oYFmN6kPb2qgTKtwDpxBQ2rzZiY7ryWKYPWhpEouap1e5YkRBWi5tDd3F7usDR4aCft7bxPIXGYbVF%2B7Tu6nczv2Imf2mAv6EPT%2Fvvkow6m1x3ddBi1pfvv4sEheTxBxwOT1LtaK4sP3dzW3acT6XDdknle7hZJy20O%2Bjz1OvMLw7qxcK3PFO3n6SsgwE%2BaSdNfk9b3CG6XuaEe0P%2BaTq%2Bmo8UvJGcDgnAv9%2BZ9x0e0rrFG7u1FuKl1rzrhjSUs2fkZsO4obD%2F%2Fm0jZKcQ%2FaV1ZkowUn9PbKKTdn1cK95gnA0nTMy%2BnoaKOXqCcAydUHKdDV54mSDeoGxUwmVBXKBXmpduynqU8P0po2uqq9G4q57ZmwivHmdrHuO4I6TAg2cy%2BUybZ7Zx0gUxgJeMvGATL6vSgm2Ey2rY5O%2BVilATkBXQYyeGKGakfRH40NEd7ySEVSqEKhL%2Fxk0MblMXYLQuhw5L6TKdgNa09OqzMqng9RHL98iO6kode5NBb2uGv48di3qfL9aUgPZDFXzNKbpB4CiB%2Fhn8TSd8%2BRJGRPHs%2FjHoN8RE%2FxMO3vLkfDuFWIJoWtzvJNaJY2KhAi3z9PTJbOM7%2BgrrrqgpJEjI4VanQQQrR2e7d9twFO23QcF7%2BtfqDK%2BSRmrlS8wt4TIxAY6pgEgZUHUu6e4eTxwxMrUI8We6%2FNyL80V3QlBBZ3qG4lI5%2FEInljQ698IGdi4VcOV52CuazDBSUSuxkZXIvxwSBb7lIB0DQxp89ze%2BMm9XzGeKyfhlBDvjStGF4AyNCr%2F8GQ8VVoVGlNk3Vhw1aSyRfc50YQKWLGJrCEKM1PeamyCvHSdAcfBozmtoemTmJ9dLsKBiDJ0QZMU%2FmvzlsWoEbrCrarplLq0&X-Amz-Signature=e539b18a6541bc75a1eaad3ecc15ec663eb82925a03c37c35eb256bbb2c973fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=cd2d969ea43acbd1466a5bf306686c2b8edb0f857d33b3c84e898213918674ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAFLZZHL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBs5GZ8d6mE1v%2FnQ8V6r0olfyyEYPo2sIbCQV3i2hb6IAiEAhOmjBnjFPI%2FB4NmNNPZtvz9Q8iyYnjRIfUAbyGB3s9Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDDq5scTR39vf6HIa%2BCrcA5ZTBi%2B9onV2nykaUcg8Rb%2BKN4N4uCuzVol3JFp%2BWlsne7k2wJsxaDXZr6uwI%2B7Au4VvU5HEbMxaGtk49zw2boN0gGIPaYd%2FqXskcKSW%2BZAVbJkjWsPXWxX7k3oc0cA5ZlR8EF3ngsxSqacpWd8EBATAW6exAEWzPutlXN6BmsBwY0AXOU923nNMPGoaLo3oI9%2Fgmx6ufjvOjpVG8W8RBwuaRc2hY8pO3hz%2FEBp1GS5162I%2Blf248VgE%2B1Uz3XClQvt4WDbQ9yN%2FFvuGoHYJOlnZnG928BduWctlBhCSTMagv2qH%2B%2FmTmWXO6oPrnU061nIFiAoPjice9MOLRNIobC4%2F1lNCccxHtTeaHHlnaDftygA0iZDUL2ya5YuNRdijCOZ3VcOCguYmReyHs3ujvnMxr4BeRbOT6ksfLlvOagD7uZw2%2BKGWu0LlEPxe%2B01TcaGoK8EUPn351PHWZzbcGZISwIiQ0bmJPwyIriL0FNYUDpvod0nwShXI2roR2InEs4YC96ViUqPY9ykbb2QArZbW%2BGFBCnSusGv210QdLUT9H4RHxYBzRH7vKDia4ZcYqWSs5JVMUgq6ssAkzxtjN%2FV4GfpOFIP0i%2FciUfmL1DRnf2WYBYKD%2BMt6ZPcBMOyEyMQGOqUBSiiQP46XiJlH9VP7QGcpW7Qjei3QjuAMdT39qXinjAI9HMGwtMhKalR048kCUgrZR9xLVMWd9Y8gL3GTdh50cz9nVtVafGlX6DWoezbGfrKyCXn5Y%2BUst8N4vnIvVNjEgc1Fs3bkWLs8fFAlvil3373bUhakdZIGS8RhUdykn4odBDgq%2FfMwMCgXUYA7yJeoUnYzGGEw4OxkNrAucZbJBdPukPl%2F&X-Amz-Signature=302768485d30e2ea29f8bd7a14c0c380c413886f711f42c5b931cee3e8bd22e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=f1b81e0341eb2e81b70de5cfbb6ccfb39cb58429d263712a7d7dcd71b8e5bb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4Z2LX4%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDvtK8yjHfP2v0Qqkk4oJaWGIl%2FBAwJppsbjf50vl%2BoUQIhAJthmC8b5R3eTUzKqd8uqIo8%2BsyPGYYotdqBIa6P00%2FAKv8DCF4QABoMNjM3NDIzMTgzODA1IgwAXg9Gd4kEgEXK%2FYQq3AMjXXNYWZAemSEZjKFmecNSyA1NNURE2DHiOLFkGyLjitzIDwvNkxv2HTBnYZclv95nY4QpjA25MqRyI7zCAGPaprOhsxnwoDqp%2FBwS16zGp9GPs3mdIlfE%2Bt1Ec%2FGIWF4w9z5%2BPbH%2BaZAa%2BtmQNZbc5tS20p6ERz5cyXMYu%2F7rOvaz8cxrlI0Y%2FqyQGZ3MGO%2BMohPseztC5FLdeItSHPUcyn8M2g07K%2FSdVOdSYlvOEbE%2BO7UNPUWPiYKapMjwN8wkSxxubBaJPufWxHWrm31ND2bOCKnKwoLmOlQLrfcB1Sg8xWjoE8zSuJ7PLZRAGYmvAMIj6sFYWxabFxXAFw97cQNWG3tWvO8IWqPxXJ0xrfOuMtzNIJT3Y7MJMFfGJGjYszQT7wwTSK4JtKDN5k0sGqh6MXc3c9HvmBORDd3jqyhD9lEl1hB05LAwZA1SSKiiXyepV%2BA%2BwuaaDWDM2C0wiWWYLOkVGtQoy1AOldviXRrmXO1%2FjgPcd%2BjT4zMOdE1OnMvhlqm%2FpaTxfWDXaepnySayY8XvPor5Y619B%2Bu1wuC8HuklB%2BWUP9GbIRDofGtE9Vl4ChtgEJe4kb3oC0GtoJ0QvRGAfqlUEqL67LLw4rPZXfEyj9D0qvj83TDGhMjEBjqkAR5uUfBrJCf9rR7GWCllHS1m7U94hCVuz%2BAW3rl7HVstocUCcyQyP4tpqjjCjJ0B%2F%2F8vBj0vH7KdRpZRO8jwfoENakmsAdiQZ7ziqWEwEN%2Fy2sa3HOFzkKzlPLa1h2yTUlxznIlPjdM1WQAv%2BrokZYPt86ChodPg9LreSLf9aFF9gW8wM6hoHo1oYB1Ow7UIESjLGxlyLrYExaQ7pkfn4xXDxvJS&X-Amz-Signature=d3d063ee1df42e65541d1feb2cb568bd5152e963cf562760a3e739ea9d574773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=812543a8da3a7fd8c0ad1503fbeecdc938a9b1849966704d2ae198bbeedf0a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMO7WQNU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC36oiTTBrXtPBaEnD%2BwOSMQaO3sKkeqam6W7wW9E687AIgIYA7gH%2FgeKLCo0nfok7j4HGAqd3jwMt6QSQr61kWx64q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDOH6nx8NxF2w%2BspxlSrcA6JvckGPbvzJ21FeN4WOkiAjH%2BghnNuCdIyr5soL9XOXxDFvJh4kBeUfCI7Ym%2BZDWps%2FD%2FVU7t5L5WJnpDTSSKgHjfwPsFqv6FPFnY6eQ2bmlt3im6C2MtGeBnwMevT2LbupEc20Qm5kyLbWSfzqT4dhpOlA8H5vR%2B2OE136SxmIzT%2BWgrtGqH%2FAm4gSJIA0YhX2st5K27hoHRmo4ZxCRiZ7Ma138kPTvTcFG23KY3i%2F%2F5NY9X0vKcd5Nfpo0W769jYbtR1%2BjkonXw9kbBoC4XTMip%2BUHw3CCaSzvBh2tgCPAfCC%2BRly1hOqBo9sfXRnMC89X7ddBXe%2BPnu5SMKoHLs3QKRhrNlFdE01BinXrJOz0BqeMxy4nwj6Q3iSLkTBr8%2Bj793gJHCe%2B%2Fei91BAatnO%2BEowf2r%2FJUz7zn9w%2B7xEnO%2Bw%2FqdS%2FGjZ2tnbQ%2FWYEEnYsgpBYJnMoCwZD3EWsv2J73XTPn9hmDKL8fsD4jh%2FedL3hjWMlwDAIbdOzH0otSB4F1KmTbCEZ%2FdIsIWUCXU1lkWrOHLlfOtpUVntQGaptfBs3uWBzZyIBwHqsGcjzJPo2OxVO55rPFmILBPz25HmRNyizDIjT59af3oeqVlCalQD5bFX%2FerwTuBmMO2DyMQGOqUBb9NMjZ4RKz%2BofP2lGWAGJuUwMIXONI1B8XWrw%2BzJKaXp9f%2FbAnLPnRgKTZ15CIwdjpeh5pk%2B4JpoYQlEGXM29OZT4H%2FZogF8Tl%2FbL%2Fcyc0RhoWg4zJWcIW8cwF6jlrd4lH7lDm%2FRvNolEiUNGMs%2B9inaTAozyyNZqSj9e9KBLIFDzdtWjYmP6Bg9xuebwul8HOUoDzej5t5QDyoGpdOJ4SPGTTGZ&X-Amz-Signature=0c10b56c3f6c7aafb271f96847159a8c1fafcb3fde3667c842af392841f9f994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYAP6KP6%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBrPaYsulk%2Bh8G9bwTIHLml9k2imeL7OVjs%2B6xsdhljrAiEAnQvpfWIdaL9FbWVaaVEqL9Wzzfvhk0D%2F83UxHyfr4c8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBuYbGjTJTR%2Bb%2BJaBCrcA5TaDIeyKeAZ%2BOXa6GoJrC6cUL5mle2C5sSPc%2BKsD6DvEPej4S3Ic7V5kYGDyBK9eWXNTTcT8xq%2F4tnhItNYbrBmaSidt5Rfv6uDDOlguzj2puvpFZuQ%2BdjSr1hMySFgzSVsBQPWG7MltvCcoubnRRNiaCRsWE9l2LJFAWXX47yyTVCMPpMOp2OonrsZxGnGLJ83J0I6aBpxGmn3TxqBkv0wU%2BtFWzzChYE0D%2FMlDi5Igr%2FzvYXw9MhrLzdOqVdDOVdJYxXINZgHRb7ERWe0AtLHWiOa21WJV0%2BECe%2BF1bZIpwrIiVhOw1dq2aSlEES%2Bn7hXD1vF8qPcBY8JunL%2F935eRit15L04T7xhZs5fk5G5QxtPtMd5xIdq8OOQy5MiomjiNG%2F3qDAatf077oL%2FAaGO80eHET4zH7BDCLRWonUuX5J7jf5nurMqLP4QteVh9i%2BTh%2FnmMyCncc8snrwmzWe88A6imsL0UsoWqNd5GkmwM9lRBeoYTlXZzCqMw1ekdXF46%2Fu%2BCBZ1vFaBmS8EsleZPvSV7HRBEejq7WivzUv9RCJ0zEzqUhKTz5awg9CFOuPMJNgO9AvAATyB3Dyse8GP9fbEzRQXtPOIJtoLLOlTdisX9oM3c6UGpC%2FFMNSEyMQGOqUB2yxZ6Q%2BCC3VBg7QWWtVIc95tMz6yrerPWjVK36GfEPxq%2B%2FGb7znNxr9l6USIMZ1i1af07EYw1AeS2lUNFGzh2bKt%2FXRffOKEQNUDMVjZzLoa%2FyQY3%2Bx31D41mTtct6mkMZPqLwp6Oz1puBzDmhkZVLjKfO9xZFG3jHW2Kp9XC9BMIzOdC6YBSdzqtGvBY8dV%2FXEqjoTZTj2U4RRrf%2FKKoA0EmzsQ&X-Amz-Signature=2901d277d273935bec59ce1bcbf8e4056c61cc6bb219abb291e2bc5c9a8296bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAXFSX4M%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDFrFqzDzwirywlTOC7Y5ec%2BzzuT63omtbZB%2FtZ5VKyRwIgCj9dlHxxDmPqk9IhpD%2FWMbJTytVMsfofg%2F%2B1E99vJLwq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDKv3I7OQaFnnReqAnircA4oa2pLTvxb4bbriTn8lDlijSqPYQxGDnAjGzhrkCqZTy3ZnKt4b4KA%2FZpXh4V%2BtmPm3hZ6P38Q9V%2FVa4TGkO2%2Bz2a6X%2BA6I%2Fhgm2JDGdO0aV78zVz%2Fh4YQAdlyQnQYUwaWuVf8thyCPUGvLsycGnNskZAgcp80ol2cSvs3Z2OFYelWVAlAxhwOYbqoivWgPD1SqHtHXtIhM50nV2oNZ1I%2Fxv6cNB4A%2BvN0ND10nse92mGcQYLUX%2FJUuOzZBvm9lFaGmepOlXTNgEzbupu3WYpErpg0eQSdVNhJg8yKoDOpRg%2Bud8SgOxoGBwNH6BOM7uIzFkEnwKFhWAVIQNLJ1SO7Ygdk%2BxIq%2B3RxAvy2FGloa95kLQD7I7zocGgAuMCm1YVd8FMlzMrxFysTD1ZiAxlJ35UNb1dcPJQ7yVlS6NDhBufP9r8MzSp7a%2FQMeLGJXHJ2sYXtl1sQgxAFgDcx%2F107BRCyLhEeJ1a7kWioU0%2BQ0RWWyAAn%2BE2dLeGUj5KqfXPYRPWgt%2ByhbUj9tt3Rw6aUOZrh8Q9YWPOpHB7V7IoENsT006fayYhPZbUYmPkBFFtNiEh6D7n9IU5DF%2FXntnr3dXTR3FOxkkyH6kf6YwLE7w0qYpCEiDs3VF4BjMK6EyMQGOqUBD%2FluR4j%2Bw2I4%2FfbqXtxh5pZJvn5%2Fm3IY7FlPl7yigfsFHN8sObGTNl20Uj%2Bm94uASDDZOs1rJLi3EdVmqgdNb9H0AhI7XsUngREYshpFVQvlFMCxK%2BYw1s8TgIGv0szfE%2ByZZlRkubGFE1NkJA5FQDHgCYqw4bMXxJu0GGwh7vwglKcsrr6vx73LAY8e9RhoqRAjeTDslGFZo678HqTz4CpBdu47&X-Amz-Signature=9afd5a2a98c346e9b0cbfd974b133b4cd249239eed7eea78f5ca86ecb1e3d904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4WAUNTQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCSfInFV48Vy22BdJYiDDgAmiNTe%2FAUe9Frc9kgD04Z6AIhAK6%2FG%2FVtlhGvlfDnmYeiN8hoyf%2FgOqXVGOtaq23tFRacKv8DCF4QABoMNjM3NDIzMTgzODA1Igxpw%2BnMpotJIsVWXk0q3AP8PJ1d4fiumYHpKc9wLICBnhHqPmIuvorzsYn6mpxTMyYZ4zU5sSJJkCpl08ObpLlD4EWARWsWf0IZHX9LVXLoxZnShsX%2F1HtB06VYwCTsYu6wqZ4O%2Bgtv2igkbk0yc0WjQ4eA8ttltOON9ZtjI4pl%2FMGtUX93F22oqufxWu4CDEljKHksIvqy3VaYwE23j4dvWC3uL4fMHgZfLS7G5v%2BpeZC%2FQldtcP%2BrUsRxZfP1BwZTHia0edjPeJT4xfF6YyrYAlZy0L6Tn4OnAQu8naauGfAXb9PZ%2BtMY3X4Qpx4ZRvlr7jwR740cAZIFbHs5Ij8sdEIn%2FXKZ0c5Y%2BDhWT5vkj7AqWPrK6%2Fp3tgK9WmMtedNqcJcUDgiQ8T9Z3i8IBI2tSCRdvCvrt7%2B%2BcDrpORKThDUSm1ycHam62oUx0QYptvGAAuE8lBILD21KsXpidzIi7xc4AM49ThyRCxm%2FzLyLn8Y5wxV3oN71S5AOGRVB5HTawK%2Fecz1oT5dZOG3ajUPDoCaJ7a0bIulDE2cas7PwYVJ%2B0y3nXm21mqCnYXfDwLz%2B4gDVOrqzVRLdDaLNZE2mPQNRcgP9DX%2FMBDkM8IfLUITr%2BQxeJgK23aWOOAy7TkV0L5mpkasIuFTHjTCfhMjEBjqkAWJBQvc5aoe3%2F14kV3YzOQo8fvHxuIIRTJHDAMXv6NZBgbT7ji9A0diSYtvY1WkwN9M7Cwt0coOf10AMAfBVCaaCWomeJIAAtROE02GNtjdPUxi1POOf4Qx6o7XgUWiOD18eXk6mvVnDwhNUtPBoXBEEfH4L%2BucGni4bvqlHe7d3Z%2FB7u37dLD5dInEbgD9SG9Jb60%2BDybWlqC5jolWexqFEyyrM&X-Amz-Signature=bfb2a2174b29c84de518b2d16741a24c597b197448c490ca5616051820ccf040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCYILAD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIGfuCG%2FwsTp0o8tY60vRxpIsiXu7aZawQik98uzY2IjgAiEA9QN2c1KjK963NGpw9%2B1MqbRqbj595viO28KNcop8Zf4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIfLDlSiuMm%2F%2BFI2DyrcA5NSTz1Fx1Sb0g3XJ73HOjMATusn0j42JQKrP1hdNZJ%2Fv4Ax5wzEJ1MHpoAtpu22QHgAMp%2BBcybC%2F%2FwTgoZBzy63tw2JQjb9WEtDe5pD2Ht4zBSl6wGfR6mYsTl7dluq1U0TQDOwMYGcPLlM%2FCqgJBKxMG1w88zLFaBta%2B1Y%2Bp7Ze1DDkPQAVDuM1cp5rS1ZTMUIuRM6l31ffhr%2FdBb1qOhECY4uhmwSK3uoq4ePaj4hdMTrTRMiTnRPpheYPy0NsbaEH%2BdRd7IJnWsh8JoYtMDGfC6fCNXnJV4879EmA0ZDiX2esRNp0dvPdyWIy48FwoTI8aoKCAX8CfpMYfzPNiBBhjt0Dxn%2FJcAAr%2FOkzeNGZ%2Fo3khvqv%2BimmNJxPLowpVIaNLSgxrnXWzZCWlGKL7OrIwgoG962axU630ipSKykv39ATk1W9KWYU6vOLH4bnYc4ihYAVMODzxVYmzIfpGuebzwTRlThLW9oizhRhNVuGRKnBsKj57wSgVISw3lR9izSUZqBTjR76n1BJ1CZeRloguWFpyknrssGBYNZJlhs6gtp1cS1Z664leH63DGow6gB26iihnTMzDpCE3kv2PI739GJDPJAOEKgaoEaUrK%2BnnprI53xZkpfU4pWMKyEyMQGOqUBosyIfJkZFgQ36PmkZELRKB7FcLT9YEBtmOjAZPOt8MqWucJ2%2BmDP64kagwCodBuh%2BDxLUok%2BcyUZMGn1FzRs9yVXIj2eIQhfJ1tJvnAcfCHxu1f7hAicDxAbnvAGSbQVqd5jAHtElKyJbWe%2B39YvfTaqoXnxtLNAKmIID83VsvsRCFxwtTT7IVQ%2FPUBiYouDnMEPw6Z7LGmEICKvS7mJ2TibJG22&X-Amz-Signature=4def745f75411b5fab33943347f2309ed4cfb74dd78842018d000e47905c7c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=3e4f153fcdf87255da34553f23c56b1ab43aa081e4d82c046e31670c09b403ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAUZRTPN%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBOroUg2rPyQXrx%2FuPbxWoVOH2riJr1WfFzYddjt0rv9AiEA1sjqTbgqaTXLQBg557%2FqVBeRlHmyD%2BxJY9eISeE6k%2Fkq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHZCxArJh6BNhzrk8yrcAzAs1OU3FbSOqcxP2G1o3boFMWPtd5h3EbNabIZ7koHlcUccqwJavIsM9V9IMgRa8jDwrj%2BMBxAvQX7uW%2FMap%2FcNymzCPC0JjX9kPkGkejO6vpC1vRjhEFElMqnW2M6XIMOjutBqZLG3DUL6%2Bc5YcAFRuKwfAAiVaYAbAm%2FJwG5XUuGNyB66wYF0gJdiT8c0VvOdrU9HE1ocLyojZhf4ffJMQwm8iJDNKsBDSQQbrN9lAtqf0NxgHxBt4unSPYMzGurL5zAylBqp%2FCIAIP9LuDgkzcTFq2BXj6jD%2FO%2FbAoXVmDFM48Py1zgcsCs3dG5Lq07uGjLFk8uuKWuBOP1WZ5ygHybUfobwVT1Ov6FJP4oZUKBovfzqdBwbdLYLIhS4b48PGl5%2FyA9%2B5Xn1SSFT1UZOTgFx1W7MYdhfZaR69ZprxKVyg6Y3sn8JH6mMgkmIld1VN1h9o1hyCxAXbgBN1qpvHECykk5zrX2zEmMNx9BwgAvNLpLOjCaUkl%2FjbDWnZM6CsJKxcT9Oj2aSKCkKA5SV%2FsQhL5W%2FxNWFArVO3dPd1sjsqpnmeZ0XNlkEYKwOEjDeVBa1h91VdNQZRUxrPcrxsk45PXQSLYPkErSIVPKBsZNdRHlODrHNya%2FiMJ2EyMQGOqUBbKEppZmhTaLbINA4tFmod9eb7AAMXqFkLB4K6vA0kDUPuQ%2FgBdwkVLAy6zi6527qugMXj74osBJkS8d9nCpzgLj4QWKj26s0pncEHYcgghZAldxO0munhcggrArH5plmKkAh2GRzP2LCcAejhud48VDji3c9KmYBhryJWcWOpFQ2CVjOCUiKCeNwycPmDkslU6zrQn2F03vZI%2BvDzwLn4qOV5mWz&X-Amz-Signature=bc3472428a803b190c41799369279bb4bbf24b1263585a78b2785038b7ff51fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=14cde3275bf72d7949fe2b66ae86a5186111953d2e4f5f381c72e6055ba3cbe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=35e09b2fd6bd495bb77bbd6bb786df6f2aa5a5e812c2b3b8d1ca9bd70782200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=87ed1a6c5ec15d6af1edaa09aaa4ba14e8b3bfcbe936f1cd6e705c223d7698a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=b5d3b283b298c4117a88da1205f2b52e87910106425caaac8e48598f3a7cf6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=abbecdaff8f07b13d1ed8beadb0698dc9189435529b4505bfa17782b53dda848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=e28e16c8ef443c00daefc6dbc34c69541aecf9fa0600ecbdabe60be87ff98074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=87ed1a6c5ec15d6af1edaa09aaa4ba14e8b3bfcbe936f1cd6e705c223d7698a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=4667b507190675b7dcdea34d2c343583969ef044f37aee7703b495779c8d1374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=280991d77e92e5d74311bd3d1aa79199e998f947b0c61e2f2be32aae259ee914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAALUCOD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIH7zKtC4vbqZNQ33vJjvWwqJharuYAnDeFfuQCgb5EzTAiEA5mFtXPFAda4pZ4azrV6%2F5YI2kW3T8FyU4Q1Uau8RC3Qq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDHYPfZARjVvq8kZ0myrcA6WquY0s9ohVZ%2FZPK9%2FVS6lPm88757A4HnrrkM7EX2P1Lb01A%2BI3jJYhWLAZnZ%2BD1UplkvxskXvUYHLRWfzgboudcE6etOyjptdlerOktAEwt1T1ujrOiRobk2jQAgC9P8xIs9FgN8reQcY1LdCAvfZUOzUgyuK3ZHs6N%2FyRMaESz7gyZf1bDFzowzE8pE7w17f2yRuYHoWC6HrGUe8%2BqOnHrRNVrYxh%2B0vVR%2Bx8U7%2FsELmUt9myb0Ecs3xLRAraTosV9ToFnVV9%2BcK4kXItYE6sa7abKF0h%2F9S9rzWJIFp4aBLoHSGiqnHspRkyIuPKn1lkL6KhB%2FFIlKZcDZCx1aYj5RMqz8qr7i2pcVXQ9n0FsTKk4xaPjslRYnnMfo8vnCq0PGplRR805%2BnzKAx6ZxHAsqQqLDVPX1OQIGE6Sm2wVguK%2Bc6U3p9DMKHz6pnCqok1uolbIYe6JwSau3%2BWiGEohbLiCaxybNS4BNBlxQRDuZCtcBUps7hz22xT%2B86APP0gj74qXlQu7MDCZDf7mwNexJg0FmJh8S5V2Fxe8szw8%2FI0uUKtaePSkqIRBAFU1QeVhsq8iRo9r7DdV7H2AjyDWa7nBn84ofU9YLQ2rlq59Rizgae0J0jylHd8MKSDyMQGOqUBReM8dZo3UwkmXtcC2Y4A98zihYI44FBfUveicWppV3yD2mYNTQ3%2B4ocIZpRiNvUh6NkYEA9iBMFmh%2B0%2BKusV0RMoAa%2BuFYlnb9D2c6CrNhrvxOTJQ4D7oNh47lV8ysexD7dOIEruh85%2B%2FxrvHTSNFKlnOf627Cmc%2F99qEI71XDC8K8LuiCc6LekQkp0pztITzEjwYhwN2agkVVe0vZ4XPloPH%2B2Z&X-Amz-Signature=871e073f640305d1648bb5f8ac8cb246c06ef4b748cc7ce4d4174cdb94ba318b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
