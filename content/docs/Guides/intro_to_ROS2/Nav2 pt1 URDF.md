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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=cd5a57df387fa54692bd377db61e2a8e4f4ad8079279a4ac815cdc9b047da528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=a693b0c7e4d3818e1bdb9cce81adb83ba98aa12e972bbc891952fcc4a82f7e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=5f8f77de0c40fede00cbf047c93e67d40c70c2d7951e1a2932c9847008c25764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=b559467b77e5a9d185db8cb38e8c969da2c4315c5443fc68910ee55f5362100f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=8dfc570ed51ec82e60628cb9df5da5918c28ca23b269888f6dee05182dfeab8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=6f0104833890a83b0ef43a196adba3c3c22733792fdf034388854a6479d6a1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=5587f89e09de823240364c72446353ca4bd52acf7f01a6a8e5f93e6a721b9819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=0654ce75a85ff8a3ada02bc2b7c35dc29894ee34a229937f0c8585a5cd20717e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=26c49453dc8c823e99559bb4aa6c3f3d8fcb844a34579f79d203ca71bb068ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=eec7a395ac100a6777e8b0185fa9003de84e30eb6429d41e601e8d0546330b4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2W44I5J%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFO1Iigrd95J54kvZLxc5aT5iKlqly6ozyVRC91sezu1AiEAsGNzqo%2FKaj03DfMObNfBO%2BNFenCzwp1oRhQ2L9Cz884q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFvrAK5ia%2BlQMsNmayrcA3VDQ1TdRt0zbj0FFeSqRX%2BLFbJU53pbamn91Bx6mOEWp74vKW6LINUrtyprl85m5C5qve0A7V7%2BFGHFYFINxy83lUj%2FJgDWymFXdgExbUn3nYYgPgAQfe5RndrqPtYg1sTMl638abhXFptjfbRuPDBAWfLkdfLRpWhFB2xY%2BDrCGTQeG3uHMfmUeZ1ZFdL1SBs2RSeQdD0JEUqlB8Zh7a1cPC3NpV3tZlvPGjx0BR9DPEsE3mf5HgXX4M1ORnpCok%2Fvan9%2BXi7RG6xuvxI%2Fo2yjW0N%2Bka66gGdtyM1lSRD7bZIaYev6HDrNGC3HGfyvDW1D2ltTOygCO6WY1MdyXSIC8Gj%2BxbbIDQ4Ysa04YxDDMfwlGJKsrlZ%2FIfB%2B1BxGfpbwyDJO6vRPieMh0wsobvR8hAIiuy%2B7rCs9bg1ZwlxFNzTkNuuC8g1oR3d7Cey3Mkxphsl3mKXDM1zHN6ydY83T3RyOGPVpEiDvC%2FqXue9RV%2FpKGrBhDPtGfK%2FXdl1U6Og3ddBr7CzhbY0LzHj2GVCw4FRn2p8o0UJuSfxfEVsW3VQ%2B9b5rfEx0dZ3dYXzO6lElha62IhX7YcPhow1cAsR5R84Vl7wHQ9aF6R42J79HZiWxpexTiLOx9BeHMKDH8cQGOqUBPs4Aa9jmeVRV2NzvU%2BtkcPPC14JLk%2FHjCW4NtVyq%2F%2BWhSzJhNv1Eti84Qh2oEGw7jm9ZlQBc6Diby5%2FEZkFu3%2B%2BSJkYyxBG9K3mXrVa8PGGNJN8oXRGa7Ri%2FcGHRip2CabuQedf2zoiINjQ1K7LEs8oq05vu7caaONnDjUXdyG%2FAeqkaWDzNtdQqGt72Ji2e8hsBJLiprCPAlgg7mK%2B14Pr6F%2B9t&X-Amz-Signature=4ed163b9022da3fb197ca438d170feabe9a73fe63906d4dd523b574ca2796abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLWYG4MV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYGzoYvNfxdXO2dO6XVt7NP87fJe5NHafgvgsHw5yhLAiEAhcHkEXmgpCFHPq963k0zVR0KEV932KwWCIOzJ4xuP7oq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJB8Jagy3%2B9JubhRNSrcA7s0y0KFtciYl4Nklbhwv7kqaIELWDeNauNxsU6bgorK2n2jjFK%2FDpOKBLHupiFy2xQCR9RgmClUBM09r2yazokoLIqXl0f8EQLXXe2p4F%2FWtUgxM64566C%2FR22qzHTgOR8k4oIYVd3lqcvlGwMmmxP8F%2Bvi7CykXiYHBHiRjV3VtKAr6PMZxFB5z0iFJTbgsuwWOEur2aXrXVz7hSvVOdci7rlyxe16FM8geZvWTqAslllu9QhJgLOpKoKqBXpo0dC7eLlnOtujOJkYBDi53TyXWXcJr0AwHzqjEUWb8YzFqP5wkMT%2F7%2BkqOiKF%2F5sjpiMYQeCCobcC%2Fsd6wL9xQMvIDs7A6R3SOlF5zYwDO4ikR9yAVH2bIxYZ%2F2IbuKzCAE5DXJjFcT%2BoQdiw9yzm4pQbRSx5487SR8SMwoLP4NOlRzL1sQcSXc2eRD9qtWaHns7%2Bd4ylUuAnGg16kpyPvzIflmVPW82CFDKmJ0sQTxKa%2FPnQS%2F5b8x4m2LnCZF%2BLkJScDu0g3d1gD3F5g3DdXqEmGNSYE84ZwQwiL8Gb37OAC44w%2BvcKWz3BCJRuknS7aN%2FTgsEIRtOeSMFSWS6QgcoGLn9Giyb1YU4Zq%2Ff7dQA4ZmBQ9zGmCD7EtOdeMP7F8cQGOqUBbMVBOAR1c7cU83mIPIpXXCC9Rb%2BEJ8zmpqxgUZnOqz0NlG102LWPt12TqkDlsSD0EM2uGchYrBUmJAsxjRJPp3BIEhSZDaZUTSs8TKU%2FrOE2BuIposx9GuMyqCHsLdjV4DoGbA7L6R7FXPV8OlVQ%2BDU%2Bmy6%2FIiirCA23JLrsLt9QI5kGXiu76%2BrMzgWLx1qBbw4daK2byexupnJHy%2FK3jR3SxVpR&X-Amz-Signature=bb40c77c7f340b1e143b4c86c446036f4ec92a1c376adecd4bf4bda32a7226f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2IAMSAP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpk9XoeUGVEiM9ZxOAEWRRr79szbsujRh62m7pOE8aPAiB7isUX%2BlsEhOrQYtC0zvTuz8qjGecnaHCv3YkQo%2BZSzyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4vb57a576jupAoNKKtwD21kwUSCGHXiIND8SXfvjhTywCJzIW28Djp3XVWuP8pOBzOTxVndltXtAubEVbAyFp378zgZgFe5vLSUwFmM6yNfMW56QxW1VZNlTLYG2e4uYUeQCtnYoDLNvXI1ptifigqxmzPNf06OLnPKhFbsOhhV8PJXY%2BiODJo11kQEswdlKRjm9U2DE3spZ17iIIq10AbuIxYtOygQ5DiRpG9kHcYXvaHXetfW7CGC0COBYHjV9W%2Fx%2BzKRkp3JY7zZWDFd%2BbTZan4ojSlLUlB9W4DlFlHNRWfIIFn6HlEQzj7W1fMEVfsueYuykKCy%2F6xONjvK0pt5ssKarVTgv2V%2Bko7MH6y35GzG1kPOouJE7BEIgWKdgGaOblzL%2BxQzBUQQ8FJpO1JrgAJhjVKPixVVi1v%2FZzeK81B6x8ZXS0LhnTQjGkJPqePJc0nhbmEayezZqqR1QX3ZiSVICT0a6JyW3l%2FktkQEAk2xhuQlqvLH5tdJXkF8nKuExVJ4KtTKOQOqOQG87QJTwjo%2BVewpzxFPye1oEFcmA9J80KrgeTjAYoMJKN1fJT8sRFTS%2BwhBZdlL2H6euneYa3DexS48KkhHWFKpGQgV69GsyRhpmBPrq27tKikOwom0%2B4GeM82qmjBYwjMbxxAY6pgFsf4uEKhWWl8KL2hne%2B1kwoWQOlFM4wWcHnJOR9DfEly9ZnbrapRXfZkZS0uLM9vLTxlNV5yv2hm8zHfC%2BOndDsgT8%2BrSZKFgNYaE%2FCbNmaO8QVUAYZVlkZU5ki55PlH92tZRinCjhrAa8nBOa%2BUQIgN26I2t4yiUpCoTeuNjKnsa6hSuJX5CU0BhDPxEA0cQPLu2lm9TRGXzfYLxZrnNgn1J8RGrQ&X-Amz-Signature=d469a01c8d7d833e33413b2a70acdd99b83913525dd37ac37a424173cb5d5550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=064d127cfa8b91f77170cc9494321f6562566ebf08281f3f929ed828f66e5100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB43WFCG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFD70QgiFlq4fLH4kSI8D%2BhsCQtex4dPV04222HBamJhAiBxKUJpLJsdd0oCkvIIf7kRtb32eoj4Gg3owJhm%2F%2BIMqyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMwunLRGKn3jOWe503KtwD7cG3mdbct05Azbj1nGV5FoMYEUcdX2VWpQtoU%2BTJo1RC%2FDwhirAPYSyIAkSWHVGXWuJJRwdWkRenoAC4Fw0EQk%2BX%2F7rdMgXARNTnOzAajfvqMSSqLKBiKxyoQVkWPyz1N0YryRFJnbeg49r40P58dlYBGsNVLB6o8zmP2j%2BMoNdinhiuaNEMn6vUrKCbXbRJIGuS5uSpzPdnRSpMS3Ppfm%2BOBA0xFM8Td6whUkMQohUA2xGN1f6vEsLXn1h5RrJBZTxjcbkcOREDEOvvYf4eV0QseKuj6PHbu76p0LKNGmG%2Bf9XDFWohQl2BNzZz6M9m%2Fg9YWYS4DPe%2BzHi7XdZAni2fZUFUYw6A4oAGhj8%2FoywrZDRLVtXi6iGBYUHhzVEE%2FLbDf%2F0mf50Nb0KFXB2yvhdYMdgW4S0MHtPjjH2%2FkQZ%2BEmq7E1ykxvjVd0xtN%2B5Dul5hrx4ULjlyOMin6Yp9ZZI1a4NQUTgxkLNPUC7cV5RpVzes4hxPlFLIAOC2IH9QY%2ByUgAfpTEM0djqEpd4muN4K%2BRtTf3G%2FXpr85TPa2NOTThF6PsvHqrngvOpAn9Nr60yHlDD2RuK7dkUEBY0uEmqQxQadv6zNbDaV81whF56z3g5AhZKgz0G8tjcw18bxxAY6pgF2voQ%2BRwFrpgdSQ9tfKMfH0%2BrMw35qFZHWspTI5up69CMOZ98vpwdA4K%2Ba6CaSp%2B1a5o86TO4dC7K1u2ENnZftLhznlPyXgm6Ftvzz2LVIZxQf7dR5MOUCdRRCX8fw8AKQ9HphdDrNYwxl6t29NPjrAqoKsA%2BdlO6SVCBXXs4yA4xQNjLFCfvbVT1l%2B2uO4WdHpSMxc9LC%2FGaLJuMbzNcUzXz5ESs%2F&X-Amz-Signature=dc397ddf599e5e5968883fc7486ce76c8650d0359daf184d528c91ebce2cf6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=1712b8182fa51c545671a1ed1a240457380954bd44406ee4a53821614b81416f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLLHNUAZ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOTrP2C3jCGMxaVISYW7I1SpM2DUEtlN8Pj3QH00kBaAiBk9FQ2DN7uhbf%2FJuBiNCwUoakJasOtFIc%2FWgJhdIM6vSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMZuAfJQlgd2h3YKCDKtwDX4d%2BT0OC%2F%2FgkiVsxkZlB9T2D3mEuU7lErEopKwZl4PylyIuItX0HvdVYpBgSBQRmJh3wUx9Dz0k%2Bba5hxEWzvcWCSQGgutODahzCMhhUjhhZOB%2Bj8XmDzPvctVXh8iDWq3edg6uNuwlQfa%2B8difCKou45XtOTa%2FzXaj%2F%2B4hRbzD05NG3iXuYbMgHIEC0%2BiE7IEFxxFmUo0W1zv4gdAk7E1uuvGz91HiqQwFDcSRb82vROKAGU4%2BG15wTza1Y98tsBUF8T87kaOm8x1zTSGQ25jXPkoni5Ih583r2x9oPgDeWKsMYBc3rY4g5wgpXKKs%2BampIFgX%2FGKUocq%2B3mnFxtTiR4nBJEIg0TiLaOKTavZw2BdZJ7uyn8TKV%2FisNcUrvPyIPCCNDYuhLu%2BSJSPpSkdG3OjHWywlpMYTSClT2lwgjRytrbj8LITrII2%2F9xGlf2dnmozayHOnBuafqvWw3mjwxWR5rkGRqoR%2FVrAEgGe2u0WcZH%2BV2ztdma7huqYVYU3wuwsEggnwMz0aQY63lboV%2FvnsjjiT0odxtoEfP7nan36tW%2BhEYQk2G5ZaQ5%2FHplliLJ6EUUgoDaaUBNRYvwHgRC6kvSu%2B36Qo%2Fwxvp26uhtLXAovy21FOSIRgwwsbxxAY6pgEvKjjbbnFCoqXyp%2BtQM5KojXnXOKKcziKTVlF8ag0jfW63E1RNEKGEXxlfBcE8a2TfpxMZhoGjwib4QeGF2P0zz3o6dbcCfchJ2ML%2BFILb0SsaQD4kJXknmmvfxQjsg7sZYL%2FioIGTPnH0HfJCvTSvJFirA8Sittp%2BwcYFAfvlhAl%2FJuOFbMo18rk%2F8Kr1nnAGXDz%2FH9Iw0XHE0IuttIgeI19lEdOC&X-Amz-Signature=a324b4681bfab91f423c75844dd24dbb784ca7ac5e2bb1c5680a1faa5cb77faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=af5764e6f7d1b91edf40fb20ca322e5b9fc9bde5027149324a8e9859bba260fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4JHX4AR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FCEzdvODWMjNEn40VCm4tCuAzqf2MT%2F0xwnxErq4uJwIgfk63XuLp%2F9o%2F%2Bm8UrWgy8uIiOHtwi1nGes0SLqdtSJMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLkq7WHODxlapNI4JircA0jyysSgJud1wuxS8n2S5bgGV%2FIRX0yOvlS8gBHYBYMSDdahu7bmTiZiqW6U9g8mYvBXITkHZoRbQEwlK2S9Mfo4Mr0mcAouCFX9GNL3jHWRGrjg6bwU1cmf9VXhJU5GJP32YKWgSZs8iYflY6tJmok4%2B%2FXB7PQxyrdvnPHlnrwKqYb764PwTEhGDhpelcYI81C2E7aVd1J84%2FHhVjBnBU0PO6r93Yvw%2FIA2uiuib3hzm3f2hT9PeO%2FmrL%2BreAdf%2FTfQLVi1UzcwIXPg%2FUT66dQt1MuYdMIUEa02SWZSbSJPpUPiuCaRDFgSous6J4o1E0w8dvHNaC7SkrYn580YM4EGisL661wcVfESb%2BBtvbgezT5xSIqYYFkaCK7uqMS58hVeHQoE87R%2BoHlYMp6y5TJ0gkeSrnJ31GJqELvbTeP2GqbwZKBDM3YBlGGJnHqt8iu2BfrDemMlCbxbQnS7dEQ%2BavP%2FmWvv0Tw1D%2FK5s9fBU7hEeDFfQgGfafEbndl3U0JCFdqzW875mAcQB7KLAruzyW%2FVyWBFOzjnXkS5qoGQqKZxqHcgJ2wbI0dDfEJiSTCf4VEL0nzE5BwLArnHjr9fWAxEqDsoAJWNXl4PatTbIJ2kiLcdMDgipXsWMIjH8cQGOqUBtLu%2Fy9HwPUAVSc6iL%2BpxhU0Ck0mHqG%2Fz3LUT0fx5njrotYtVu%2FG6DHBqI9krBcKnZB0mWudDUH%2Fk0hLOU%2FfJk%2Bpj0%2BYgxZAolz6tRlRikJJaf7SjyVs5TZulS%2B7nI90fiD91NljZtUn8qxDH5WGlB5Y5%2F90z5LVhJ6gvGf41majX7YGuN3Iow1MTDt53%2BkYEo7ZdWTGeT7rSeZCV%2ByXVY4nDSVkc&X-Amz-Signature=ba9f267db1ece934f7efced0380992347c97d7dadcbf26a6578c56d94e68a2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=ab891de853567b46f4cceb05824d5b8955985a952cbafda09e594b820843522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVMYDIPS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9eIM68rhD%2BWfqUXbjzq5wrqt%2BXI75RsKB%2B1Xs0eKRtQIhAKTGOz0h62ROLRxAJUNeukhYngUcBkGSbGs4QQiFt11JKv8DCCsQABoMNjM3NDIzMTgzODA1Igx8JvsRULGt0ngJVucq3AOkrHx7jHpSPyU2kF5SxlnGfaVIaZ0lxzgpoSy0Jxxb73RJqWKC1Z%2BC1SHbvbykYdKH1nbcfY2J4FC4djHE%2B2sPUKhxPCP0SAJmrPPdCuQHDhdBTtadjnSsUi27r%2B2MmGc5QP8d%2Fx1k4GjjwYGvuNyb%2Fcz4N1SOK1xeZnTmnNMmDM%2B71Yqq3yCsk0reIetgrlWwneCuBx6mxpv8Z4t7mL39Z45QgjsXD1FCOA5iNFoptLmTF9bL6g9UpVbNiiRR4ZDIkWRBE9xIBONi1Ov%2FlxQzo3g6%2FqljrFD1%2BZPmr5475L3UT%2BqKp68DSFEb9iY2AGGbCz4G4zKWDSJ5YPrYh7hqIGFcm1TWEspsQoAW7kX%2BNYbjSPF4yjLBskcddoTcxVVYilhIhNn1Tdu%2FsOaNsKcXtI6vQ85jS4R3sWRvwpu2KoPrTD7YJwcblQtAssAJMYTWPTjKLoa4sMnH5y%2Bnqgwdk8I1SmN%2FCMXC5g6Tq%2FEtofrOFw4CY4IeF%2B9tOxibWpWlZOitP%2ByHQ5MUncb4x6P%2FbK50oGM2xtj2HGFA7nnRVCmMr55ETJ5vJsiKB10pgUJJBeKrgZjvO98q3YwpvOlAHem0E3r8pwmRdNEfU1Vjw%2BU0vLU9pcQAuv5yYzCaxvHEBjqkATax1VJDUfM%2FuyUiyxp9ujwf1SFHOJLpvpORPFeI1QA0pL4lvUl3%2Fbs4j7GrXccYRnL11R0RNzZQgW8HDRyvxEfuJnYjc07CB1RZBSheoDGBFaH1kf%2FSf28Grc4ayRV4WL181WHDhAV1DAH5wRodho23lH24bElhEcfCJ9ZEDzvdqiZ1io11NVh%2BX0JxDQoQpBXbLZaX6xZPqfzu3YhknfDytGTP&X-Amz-Signature=05e33e676bb7f20651bbcec6de719d2895db634f7a819c01a08a7b347e45d846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEJ2RFZ4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLYnzTg0J4i6kBWms7bdPtrVXAj%2FDJBAjl0R6%2B8saUlwIhAKDoMHeeejE2oDB0RKR9AucD4bm522eHx33vSD3ytxPwKv8DCCsQABoMNjM3NDIzMTgzODA1IgzfjoD2ByiOe%2FF9irkq3AOV%2BlW%2BaDO7VBSitGUNf%2FBG6JYlZbp0iXyry9nrIlsba58Ot%2B%2B7Ax5CXxhF7QeWpKP37h2PRaDW3iD58dZHvs3PZ2qoEwA7mMhu%2FIJMdsLrK6RFZcWQ1Fvuulue9j7zcw6YBDNqdlEjvlvyPuxaWmwhf97GQJmflQA40b09yIed4Rm0JM1e%2FLXjVkhWsjbVwJIjYbUdQD7nnOQVSNlbWS8hnX%2B5wM%2FF4DJp6Rlt5w4OyIq29%2BxJ%2BY9y4qtECEvgVgOV5m9%2FzwPA2qxDsebmiE5JPke23ntdA8nqa0jcGB4k%2FU0%2B0K3e1ZMofAyQexBJn5L1KmFpsUNluQcvQ3ou62KRNy%2BCrSG7FaP03O%2FpMVKuc6DAS545%2BJHmewaZ%2FaonCvBajDBTiTet62YmZh2u8HAxEg%2BpGPY5rvw9T1YnLioMjBovIzBu6Beo6arrX1zGsCo3jHFRKwiwHkv3hd1ALc6bDEWjPHlbQMUaCZuSPDyGAx8wz0HLrb19SlJlnuK0G6pcnMwImPqfJUuqoNtVG7LOBMV4rGdieosGGJRluIZDSpP8qo%2Bb8AGTp5Vdcs7a%2B3dShNNXl8OX705errtt40L6NUCHMH%2BJvEe5zOeFvOu4tNZNZeQIH0SzHDuoTTCzxvHEBjqkAZi6oOkD4O6XyPkEmqA8bHMdbXHymDzbC4smJBeJyAWrnb69uuLe19O0w0QRv11b7%2BA4Vy33QJzbOc8kvl2CDI6Bo6neIf2CeQmIY%2BZFvZ5b08WHgRZ7KbdWyzoVYWZWRXV6MprJtr4CjIadnswzygj7tMXqr3p7kGEvRO9If2vAFOQ4Ny%2BdCOadl2vUQF5KI5hFwDw7jy7bVc5ft1uAdrDcxX%2B3&X-Amz-Signature=06d44e0d78750e1d6aecfd5e269ee72837e28757f0baf8f8bec3dba9f92c87c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUPTCIRC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjL7vzUvVXjuL6OH2QqFxUkbCbs3rndwv7vnRv12JojAiB0bbL3MqOwpFWDgta0z3p7Jw9b6Y82KbaPlf%2BBJo7%2Fcyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMg3lrfe9W6KYDe6NhKtwDAgGRI1eialWLjdUdpwq6J9gEV485f2JH3AwqiCEbhQBsDzhkWcrom%2Fu8aLovDvF%2FENIFv9upMN1rPR8CI7jI7c4pmb24khW0rH%2BYFF1vj3Ocvg791Dh47YaSTcNkDbXLf%2Br0c5nKooD5LVZVklDCelBNMRwloMPFV2f%2FfHXCXOu%2FZfMEFvlqXRsELJ1H3Jdz4O7bmb7QNBq0WoQRMOiX1xbNw4vSadXPL1ykSjIZixNXQRNbG7lwKTZnwdsVlryLb2wpX6GcafredfW%2FScixzuxJpSEeCMw1dNFDgIlUc3sl4QepfD1qX4EHr9isRtBNdBIIE1ZmE6wM3GCCIprGwiLNEZbC%2BbT1mDutSBKwi5x0RXpq%2FLEHLoYRrRV99jKddZEvtWYWlBU%2Fw28bkLcmef%2BneFjXnKZc8O3yCNgfJomOBfZv3XwSv8xAkBgHQ6omqWydb0X1UiMbYQ7YawMq7DWvtCOlPC1C0a6xhtWbnQnN3eKgKdSbyLk7puV55MNRbCULzEjBVW7zCuiWGarOEGLUkh6Q6EA4Xp3u4r%2FS7mpBlikGxPAnNGR2zyBOABhS3gbdRYbRDPzWOe6zoGEEuH5%2FldgH4SN4iKSiWJ2EOctvXyCR0k%2Fvpp5mtR0whsfxxAY6pgGXOq6fHszbjq6uVMgbnGWyPVTUclKC%2BEHLbz9K1EkdMGFpukWv7I485tgjbTmus2VF3e14ITPSQlktL4m7UQM6ErgERt27N3pYBDGwrMgJxx0bD9LSFxD5611n0g0Bl7Y2W5r2w0t3ctHjTyvNp45Zf74mPviDph67izeLxpqnXgEc0qqFE20pJcVgY%2BJDFDxRfwys%2BqbvM9MCgg8TU9g8O2VnK9Lx&X-Amz-Signature=81b4d5c499b56683567cea434b4a092650141601ae9bf025921361d57d001324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSDFWV36%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUcMco5PrIlHWc%2Fkw5qNtTva2xF46jt4ezpwjn%2Ff49PAiAE4O6UduQT%2FrFLbLt57pmLoJZHa8Z3TBpvZRrBzlcRqir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM%2FelKZnl4TzqXUxjRKtwDaQHw92Zv8ciBDq2ip6tVptyOP4Kk3LnYx109lmP6Q2mMod%2FrwOvtRbhiRGYLqorqhbKL%2FGMW6G402A9Ie0fnKKtcOXiF6%2Bay%2FHs%2F%2F6ivXGCdwYePJTrPif0MOD34JbScFSMyDhxwkH2knmGa2dUITPsKkkExzDlCeVd7dny119EFp27HX6mqmdjB0iEiHOrYF8PomEHGuuRfs0S6L2cUSBCAQGbTY%2Fc%2B%2BrforCy63EDmPAAS9K4OBpCX6WH%2FAQbgTEkriEKExIgyAxWV%2Fi%2FGcptoZdU25UxygCwpKV7IWSNSFXdHu53MLGKX%2Fdz1UfOS%2FZB6J75r2aUaRSvAF3jn9wqmTtsBPXb71%2F8plRhPmPX3lb7jfhWAF25seUV3u9hl%2FRimOuqHlzvE2SrT6kyUO967N3TpB%2BGu7RWs0dnJsFToyKQbejWkZQ%2FsunXVrNR4tpUvuB2Di%2BB35CM%2FIp5L4MGsEhZvieON%2FT2o4Sm%2B0vHIgll1QRZp8IUQUO4OslwuQ4iXiuMWyPbXx1Q0DcouLF9boQXQPgVuW8aqIzzUODCTmd6X09airuHAC3JbqTAlfRMctO5F10ntjyCBblT7rzPxIQ2oAy8fwz1mM0xIuvRZTDDoOLv0OxwsiZow8MbxxAY6pgEaZveKBeSFLoQ6JFaaRy1zuoGLNwKx24%2BmcfhbWGgMlUUeGzbRlogtA3JxQM6wfzJhXtMZZxRBys9Q44KKEBF9jyxi0Lp1GoYNgp9Qr6B7CPOMel429JVbq68sLU05YtdIDrbYPu2JFlt8f8VXfqLJ0%2FuDVlSyuyrZJymdAbxLlVflVV8QmZQ4qoQ%2Fgc%2Buxb%2Ft20aQwkNpfmmP%2BWgBhRPrUBf%2BUx3w&X-Amz-Signature=12bc852db5256ca49712dae2dd031b4795019b518917f0d7c0100031ce3a0641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CT5CPWR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTclaxhLonf6Mf28clu%2BDFEuLn9I3qtWt4UJug7XPBsAiEAgHGnz0Y1IeVbBnferfo%2BFuL855qGRbOy5af94YWJzcsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDFugb22J3Kl7OnPkSyrcA7Wds2TuqOTUqpyIcbtsJ9WgVbccpZs%2Fs8JZ9Vdbh5LL6LufjJiSObCx2rDegMJFMrz3zjrJMniXEFRCgbKtLdLkQa8MJih3o9HtKtz5%2BQG9d2YxAyiXTHp0LfrmMiy0knOrKybI1%2BvIMC3a3yGLOxEiFubjBtAdB2j2dkfagsBeCD%2BI301DpdSRAQmtkcSzrNd%2BWVJCNphk4r8hwrWLNXY%2Bq%2Fw50VhiDnrgOG6WXDXglq7PAbS5j3Rx%2BKqG8wiFr7TMwAM6m50w042uTnBVzphZJGVx3%2FvENeZ5Lk%2BPBPJapv5l%2BZo5lCtoIsl2sZ34bJL9GVvV7tXF89Zb0T50ZJdUpyjLpH%2B%2BusvE0cYtyQBxb9hIRtcX0m9fcopjvuH2MRw%2BsOW5PidAp7OzmTwAKiYJVoZBq8HI%2FeVDIHGzjKxorYQC3pVD4oXojVDC26bjlZKUvLZ%2B9sZZnvRcQj%2FayfVhQG0RTs7zAHIBJI6meIlOosBoZ%2BN4%2FWzO4Yjz8U1wU0WUQbHFqSWlM%2B%2BO09wjh38ue8w%2FPIbHzAYdWShO2GbwDesy3ukueedgsjR%2BBVdO9cqzllE1WlHGhaj%2FQCxWJuuzMVfEL81IZxlsFmvCTKLspioWRdClZ1bQRxaMMIbH8cQGOqUBy4CsdxiDju%2FronDsg%2FtaW6dDBSfMRuK9uAULElrjOcbzH9xT6k%2BznT1uhxjmeUVPZAlYXr0KkaXAyRLoHEoyguY8AP%2BZInX%2FEx501DDVYDFNW4a6RGPozmhtAl9sl%2Fy9MIuTNawlHxB5SjpeInMC724SnuQguw2yFQighNqmTzUwsE8TKLp6rx89E0D1hE8hUUAbJAXhMgLGAhd%2FnDvhE23o6Kh1&X-Amz-Signature=c3e19905c668a759d8a5984076b9269c110a0a0ff19e6c1e5b8343a8cabc4d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=c33ff0187d907bad054950b9522f529397dae1cb0eb62ca019b263b45bdf3da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MWAHK2G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Db3VOMvLZGmJ%2FjvJR9nU%2FtScHfixMYjV9T6BVqRYvAIgFHV4jZKaCGD4mQ7pcXQSL0r83AVFuuH%2F5M%2B9GKI8negq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG7oyhuOc9d8OhhhryrcA07g%2BdN1PyiK%2BFKIf%2BnH%2F7D%2BmLoGnZ%2Bqcqkq6deMNB%2BI44OtkueOUrnJxg%2FJgEtFY2cCwahv9S11TYxB6kxzYzLXI7rylfvRXHmC9tyYwbqxrmAjfgYCoafVn1FnSaMhkaK%2F8QoRlJtGWh0Xds%2F%2BsQqpICPQo4eohSnYuxEwyu7lQlYTt0cwfS%2FeWUo6reuqr7sXkw%2Fa7wnDhuARUmNdAHtevUeU7VVVp54qP82XFWWdzl33yJRyenoWIs%2BaFkRwfZtXIYSnr9V3vdt%2F35Fj%2FgdanWgxLARJpAtN%2BBWzkv1zTIKM2Pdzpj5DZQgS4%2FuATQXOvIPstOBfpL4LRceTdwuAK6cCyno1da5KoZ73Ng8cEyseJg9XU9rbAAvnFwvfuRHaO6s2z2lzsu1qt7jqrDaEinM%2BF3SMFzXk0hEm%2B8fe%2BODFpD8xG5uyufOXgohQMkOCCjk9T96yXdPkHz0Fo7N84U1m2kQzqpnuCuFVvfekyWjtXHC8x8Q09FwFrUAPyR4M5B0ceZJtkAFpGH%2BqyaWr6stXJ3MbcJtAPBwxDgIF0gBjOBgUsxo9ZgjqW%2FCURWYTRI9u0np83YGyTtDo%2F5LyUem52ktpxEI7MYuMImtzv0pBsn9Hu7NJ%2BeVDMLvG8cQGOqUBKTeVXNf5TtmsScYN2iflPbsgXAUct6rsvgKcNIqMdCXl%2F0RYns%2B8NlLPTAJH8GgqGvhKtasV3DXREbK77uTcMk%2B9evEFpE%2BE9LyRtewjniwuEu99SGJ2V%2FujDbe8OC34rlzacAcuqGWyM5bCU%2F0mvXOaeFBqTCOH6h23YmdQNkeVpNU8m0DrIWGipBrhC8daT0ZQnDP0XL630mKHaeOysAaEO6zA&X-Amz-Signature=03ebbb8de7117a05640cee9fb5754d848c10aba4d42f5ef7038b2bddb93ebc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=f62af460b169968ee7327f7ff287fcf946e7d1851fad94dc56cf46781e634400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=4b46d32bc6aebaf55f1c12e3c0e2b62294c045fd00a43b23a590163fd7b124e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=36fc5a88119942957d45e2fd1c0ffb50d80b500f890bd416f3bfdeb4f5430572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=6773269060126f82ea8d760911e95b7b7422983759297f6dc1f61d193551284b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=92c97ca0e8a4090efa5e43cd7c66f256dbebc444154d3128432517d0b3b3b00e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=3192340364b5ef4c5dae1e747c64b6f902eda2d5f2ab29bcc15543c95125651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=36fc5a88119942957d45e2fd1c0ffb50d80b500f890bd416f3bfdeb4f5430572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=4c3d4a82242bd5392c806eae54386cc9cb19aaead4a2ea4184a003bae1323553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=009568a34063726001dee8d6267574b8d20601775a1ad94a881e3c52f254d90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IHSFQSU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T110852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDuauZmM96Suvfu0Ip1%2FiHNLd1e2kkXLGu16zn6VIp48AiEAhx8Dfa7A0WcFTIMg%2FvjEQu2v1dZc4NBgQBkLhzG6ZYIq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJqzoUlMzMRKE4m7vSrcA3bnWYutz9QLUBgxX5CvSaLRRYVG5H%2B3Pa0krUXlzx65CCpTX0L0xeu5oofOE4kXg9X%2Bn6YdpuO92PMrzEn8TXgrBeKul9EeZj6TGwhB2%2F4k6Q0JLl0qsCaS2kEuoNiKid5ddaoQOlizv88Vh8cW9Rv7yXa27blxRLpTVLrEpLNBW6oOJELFBdQUlS1%2BHwq7c7X31rzQ%2BbXicC4EwsHaMfX0Pu%2FT2uZV80dMxXCqomv2zDhKlM5dD65y6XnzeW7DV3f75Vnw%2FPwjt1szl5RlyBT%2BNIuqh8TKflIVrXS%2By5tWyC1JaI67uRoKgFz8akq2ARrucoggejE3%2FT4DF5PeTXZksDZUYcg%2FVnxopLD8n7pgYIt02dtFm%2BYlLuHZF5nHoQTvXkNj40ULdvtv8Q6%2F11fCyog1drdKCbK16CvTd2DaVE8k6YGxjDcV55OB%2BMvIwfbqb8s0XAJlu3PMyG1czEMKgF4kvMfw36iWYxN6n9Zc46ACbPohzpqVcQeEnOJUzcA0rr%2FikE%2BucY7ABmuDpmj09CS6%2FrAii5Le%2BmDfFuFlwC83BvNrTcRUVBojrq3ZeiI88QKWRZqupZe8E%2Bid9LVGrKBPQ%2FfIgOFH8Jn51CTxy%2FLu2nHnilUWBOY%2FMIPH8cQGOqUBjUB4EwB5EPwH9k5aU41fIMXAQsbwKoTLPponBQ4m3A1KCKkyuVv5Js0Rq%2FKf2HXhSSUt3sm3j84TaSxXwRXiEEXHprWG6OgZhmrsVTIptJQVjF3cq%2Bzw%2BRX1iIICpd05Poqa%2BqCxeb172%2FU4Am9FAyrX0Y06%2F6%2FRJzmJBacrPv8GruJZz4dVwVw57sC%2BiRpMlY%2BMOQhgyiadbUSbAg2z7gzSmzjC&X-Amz-Signature=0fd6dbd84110638274c6c66ffe9a6b6f4292a2f5c6a0cb137b00fef2613aa07b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
