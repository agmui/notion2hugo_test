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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=c9efbc77b147a692f436e285004c57f2e804d3f4e44373df39a455b79aa644ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=95f3032677e4e5357ddff0bd8d7d0a11af84514555f4e627a5faecf42132d7d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=edc05f1e0ab42346033b6bc5a800f64927999018cb42759337720954404f495f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=26b34ef9b101a73a314446ad525bddf01b9baf1248dda7a6a6389475ccf67f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=8baa3b33164e95bc65c1504e17db5fd5416533f3643fd0d4c7191a54e2998cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=c82d56dbbf975b96d8e5388e785552e2dff18d1e1945d5168df9bb1507a1baba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=440df9b4eefbcdca3d2c9eceb8b3c73b7ad59965a8830fb0f6b03c845f76a107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=a0cbe615c25a6c0921efc4e8291ca52736193b559a31795f6a0e4d17aeda698b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=0054f3bdcb9093362f7ddb7691e327987e1e0f9e023e43935aa70ad197942870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=2e0ebbeb68e3ed01a35a0895c6be6d04dd8c1aa554f0f70f80e78b14f351a440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO3ZMDCV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDpYxEUjHszy3YYOSa8qiErMKvFQ6OjPYqU%2Fger%2B5EtAiAbQuqr6WC9f6ABzfknlsPi8MUuwB%2FWf%2BoXi7rqG31gryqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgBNRQobxR1nwAPfVKtwDKF9ysNgQK0%2BGrqMk%2FNL%2FnhPEpzC46vBMjT%2FcwVNsUfFB8n2ewZjDRVS5%2Bvmj9aTDBLrP4DFkJWaitkOJLg0GmjATHFwfG5bvwKnozABrUgre%2Bf0tHpPYj4Um7S%2FgS8HLFJPR5YlAsqBSQNNiHe888I%2FlZaYWum8Hb0VKJmFRkPi3BCUFbCEqYCmYJd%2BStuGVra2TOE47PY56dPSBWlizEzVdBavtbzm%2BGdDE%2FXhwIa7cIs%2Bx3LYicXC3gfeN9bT%2FERIpeXlyEf%2B4kiUzFVj9gM0HhA7Ljb%2F5aJFPkNvxjVs0zN6c0PUhbPXtU018xktHHxSWHJH55f2l87va6UnfLjaJYdA7LR3gfw%2BS9GEaA7ONI0IDqRt0LQvbloe5qKvUMuPFiK2ZIQ3F0KyzC9y8uubdDq4%2BKceMhApzdR9VZ07Otyyjvczal0EHyqF%2B1SGM09GCb6ZSvex2MY58OKcud8NPChMxGSoH6Tb3FbogRg%2BB9h4dFel6cFl2KbpFM8uAsZMnWh1HUHgtSOQMpHwghy1gVBqUeiFrHjNa1Gyp8qbrxdOeXXD3UYpi7ZkF8ITP6vEC7psaUh6OXVm6SNjkMTchdE2eNW85PoN9meKfdlsNwMyLh4JbjQnIDUMwnrrjxAY6pgGE0qoZ0lT7o1sIIwkLJVoxBTFkrmihh4fmXH%2FWBE9FU7ykZDOGhiqg0ZO7n50tVPBJuK2ymq4jtJEQ7wafCYo9kGdnAfqtdR%2BtX4GqK5BxIG%2BgCAqfxO4pOujUPOhqGLJHtYO9SLMW3MAa7htgOxWa2x3ltbeJzgmLOGWCbAQhLllMKwXkPXkQeZKadTl6MBQW6OyQkctOdVWI2%2FpdmvxcPgnEuAOT&X-Amz-Signature=df6fbe9b156e865a2172c52a2cd7f63c3d1aa872cd5bc3f06be9c96eb14f48e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7C3NJG%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdnXydIMc569WRzzPpe8FwzPe0nIAnwnzB%2FdUSb4huTgIhAN7%2FvFelIGV2NpihWQUbDAZy0NES4biuHPCGECYRreHrKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4codWoRFXgx9tEQIq3AMVOf2u68T2FnLFXeo24IFPJ1QdYeRhDPrCuY0OY0tKpGAlk2aOvzFPAuXghMHei4Z9VqKV3ZL1xH8EPUCzxXeNypJsubdMn66eAjSAKcwvmx9RyqnBa69e25MEiG2ptYvl7nO%2BROyqnpj8kJtowr3PNCqW%2FQxfHdsyRJDLfHaAAFEhx%2FY4lKNS7QgjnDLiDitocXDEj%2BxrExgJK%2FsyYfZf68FX0N9RvZSRiGi%2B0ndoSd0QUWb9Xy1lFTPsdfbeWi36kYFowGIpDQz56YQsSgAohxGlTcamx8YtvaEgXlcqJFM3Qhc3W16%2BY0Gmp4lJRfdDIYHYBkGxARm9i0uHLhzLDfzCMwlrh5RAoojHBgPj4u17cYJBnr3EYcWVZUM%2F%2BdwF4KN7ZpL9MFCN5fFK5L38mDkCTLsmPtlBTb8wsQ2jjsaRAwyHlEOZiYQkOjY3WXdKemmUtYNpTAz%2Fm94CdtqpQWROmIngKVFor95Jj%2BUmCNlJ6mVKcQ74uFTPDWwX5qgtmZEf%2FSIB2Cz0xmNC4Iw7hrppMCEeugt%2BATqFyOp5sRkWQjo9ZXHxsDEYnIMBLrfCADwp1G%2FLhhyT3tf4EGYTwvWGsrSZE2RM3RDmxrsfvTtNf4AgseEwJ7IZ8jC7uuPEBjqkARIwu5O32StX3yPb6ev4k%2FxdCukMiyfzIuzz6CjADRjAQYRnlWnWr92gAwMx2xBJ314IH4Mqoc57r9NY%2FXxaeskMuIFrbO8q53LrMK9Q6jGBpc1s507jjG%2BOO%2BUpiXcrA69SX7BNbGPj5Ag4U42vheRbt%2BgDzAIhNDJX%2BJ41m54jNBPDNOGqfcXqem3xT%2FhWc5JakU5wc3PakAJw85oqA7XAD5Wi&X-Amz-Signature=25cd21cb598832c0a49388114e6662055ab903ff1c9946e38b00e471018a5454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42IFI5X%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6kuWnAE30hWV8U%2B%2BhEmOWskEp3iuS0vYCODj9X3R%2B1AIgdbuhYV%2Fg4rNSSfkIsffVejOZSeLSf%2FGQgpaYb6Q3a48qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjsTA37nYIGgJysNCrcA7MO4M7bmy46oeaBrdO%2BtQ5I5z6bsh%2FqJjKP7kwLzMo8Ms2kwxJK67qBapsSj0LZp8dvraXPJpo6Aua3z8rbWPLREVPYEual%2F4KI2Sli%2FmV8CLKm0y13Lr1KmLHTY6TnaRb30W%2F5dsWUj52slbjhS%2B7CN4i8J70BRAQZ8bPzqiC3JFhMgpEnlrH8z8jG%2BnMaIvmrIPOAZSv7E4slLpj6OVcUcZcpz0mgFbfQ8x8WfNkT6W5b%2BPpR7wElVJhSQd1YWieSmoGsyk64k9R%2FwvBnyv%2BA9%2BgnNvdoZOg2q1BG5C7LtUTesDtzMnaT7sx15GRRMxUkEVo1vf9np8bUuaMU1zb2MYhHlZPlAJvaaoRY62YussvdQegCRZXqXwzsjPNXHOfaBem%2FBc%2FKuVBdWs5XdvG6HuOq5WeNJ3nXtXtNHMx6JmSasG6e5LXncKb7qWrwGNHpDl1CFms7wlHJaQoNHUHLeFVgZquIu3%2F9V%2FuuiO3Dmv3wBIZ3WN%2BXrP6sHGs8QhOD8SwM5dOJlVgIQUAErY2g26nE64BReVpTJ9YfRNsjcsneUKC11zXl9mtihgC6aEoUp%2BG6%2FBEdwNEuaOjKHGV2LJnE3M%2FtiNkiEPsI5Dn323v39jr4Pay5vv6tMN2648QGOqUB8QNkgtyBe3M4ROR3%2B3Be6GJflZCYNmiS3qOPwAJb8jKdn3yFAMvBE6UZJpAvuJ68XDghC3S5QAPZDCZFTwaWOZwDzLKZiAAi9Ds6MNnq%2FAUuVSY4A6YDhjIkYmAQoLe3HBZ%2B2TfYHsRhVTdiRQKD%2BrFS%2B3VERlnqVtRGo2GBCaZvK6yImXRZX%2F0YBkDPAahj2zIJDxQKmBfqYa6sV8iB9qwz9P9l&X-Amz-Signature=616db8dcb3b361856317d340e76989058d943723a5a7a35ae3ba5519d41d8449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=52190db562563f4f3c2fe695e43f02aceaadff3e89be9451e10ed344bc922d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNWGUDE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8%2F044DnT6zaBNDSXq2PiGqcfjeVxfZkzS3BlP6HGxswIhAPt%2BzqXcIoIQe%2BR14HnRtw2KWq6UDKssilDEcptxloctKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhHLfNgNyaEylro%2FAq3AO4817XVx1kyFmsXX599OXCGnG4d2ISx3eBR1o3YeZOV%2B5RnP4iKi3555GHpODlACbpWLCWqztVJ3xOLiBv1Y%2FnO8x9wZhXWgPlW58NtA62xL5bHeIsymVoNta73QOKPGu%2BQjywJoiFV441KQ%2FUqaAy8ZVdjXdNqKX%2F6YvvGBV5hTTNI4lh6Z4gk168H4LUX%2By6y885A0ukrtNUHuLZHj2GWw0AlNXsIxEjf18XbQ5cLkppkzy76r9jaanM%2BV8apMNPPPijtIaYsphjOeUdfVVJtJnLIbxHqV2ckp1mpFsrxFiWB%2FdIQSWoBQtO%2BY33jY9TvITz7sQUHqXcCEF5FfWOySCean%2Fq9DJXZx4wPRkGBhti5BbmeheDhXx16%2Fo6s6UzfFx3bMYlHw4V8vngvnuWYOUgaJS7b5gIZtkQ8TQ%2BkPnScMDBv6A1Ku631MAe4D0himyGP41JZYTWpImWNyuoVWLENgia3xLanNLWVCkGh4VqaBAMGjhuqmLll%2BCPdDlGFFflrd%2FtdwWdSfTj3oRCVjD06CCYghbkKHeNXWJiu3M7ECTjLsEugy7w685jUSpQF1saIVis76RHJbr7FXOQh%2FeIbO509AsW6V%2BWb78MTHpdFn2OBnaPspNFEDC9uuPEBjqkAUgHANYzkNJxOHoA8IIbJ7%2BR6osnJCVVqihK7p9OJLSzmgG5oqyHCQxQ7DEWfIn%2BjsNo693OZUzP0P2dMFWCl6VnZxb92vO0xnKWL2GXG1m73hr0pB86Gr36sQoAIVtUDMlOVbV4f1kjNAP7yNp%2Bz3Ox8dtZdTPGdY4O3sTlwRsmXxq54JOfxoX%2BwS8XOQzp4CFjd%2FDCLfghJklOw7uLRitNMtak&X-Amz-Signature=ef1fd0e03381692be5d6bdb10e60138ec13a86e0d2c71ad0a00cb9c19c432a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=71dad1272bcf69eb12ee6fc00a653d85f2067ff5a1070255a292c6e21e45d5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GMQTXFL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL3RPXyQD%2FlXpKFlHoxBxIPhHWO%2Bpa5cZWeCixhQjRAwIhAM2%2B5R9C0mRoEIvHAjP7dJafihC4RIXLMpd5HVUalfGOKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxo7BM1Qz2Gdo4XEjQq3AMh1vt1IVoBnyFVoTNGYW3JncZ3Zlg5xJ6YTkxetWDNI%2BSD2xghxcPG3BWeW3EJXvUy6uB0jDJr2ittpcLnUykFYD6ks%2FhSMkJ2Rp1NbCozmNfy56omPcpSwgpEmXzGYKQUEdV4Ww6BdvfeHrVal6jkBJz5jsYo5M2zTLB%2F6%2FH5G0eYDaOknf4%2FkA6iUaHXkDF6IkaFSnFjMbGz2cej1I9QCM%2B1LBdG8TDPhboBK2Wf7inE3KbnS5RwYqbeklxeJJ3geODiTByDoxGBVURtYrngoWjlnG87oRQ45%2BUm%2FGOgnCQ1Eox0HP%2FWIg%2BPLEnw%2FynPepsdleOfpus89gvWg52xh0CgIOxbeZVsFeYRVk1us1tp4oM51n31ITQu7iRQRyESlD5ChAZnD%2BzuRp9YKXMOc%2FLPZsGCq8ulmkHzKJyMjx7hZ0cMZMj2elVaG28w2f6DpMy01cu3dnfz%2B25R%2BwO6ie6ZDcA%2FiT2j3NauPvascRTX67uxZ%2FBBuGKlCI9tOhxIHIBwrYlsIWvNIrRWEndvsfPBoajGUCu%2BAZ3HCfMP39WZTL7Hq1Oi71h6uSKRBoqnXo9XKSKohFcVoPbQAZiU0AhSNNSekkycGyki8tSoCXD8oaaqutTIvOmmTjC1uuPEBjqkAfjjzvgktU8UYrEyaeW8Kb4riT4cj1v6MttK9EQurq3EfEsKZjysWVbSdUyDdG8FryKxle2r%2BOwzdQCpOG2O6YvWuldRqtP7LJqlaLbGUdxabz2JRqUX8xxMBgcEoTiV7K6kelrqFqAbJP9P2asR1Ws0ks1vtr1BegbPkuD0E4sEgjrMmDPb1%2Fj%2Bm5N7KFSALoJ3L0CRNxwgEhu%2BIa%2Fghj%2ByOJek&X-Amz-Signature=49837c38e31c615101fa09cb9bc4966d6e2962528dc8b068c099b6f39f498404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=dd8392d6950289c256963d643a4c2fb6667b319fe37f62ef08e3f52428212699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOLSJ26K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUEdmwipL7DG0Iv%2FVh6FXiGWIwr5si%2F9qgzKUuKqYN2AiEAygugsQlOerJudALYd3ORU1RYcnrFOqYCU5IAz3i7gEYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHod6HWnN%2Fd8HeeJrSrcAyxABQkFbIBzrBzc24LKpt3ppGHsEYdUa13j3buRqmJeTLqsY8IneJgSx9BVXDZ8zHS9vgjBcXHZmVdujApCFoxX%2Bxjbl5fld8xCU29akILmj58q%2FhuEyKrNNLodv8moUxE1E4X%2B5oGdw2QduvpKxKgMLewnp9yXGexZdW28DTCUPpJhCgOQxVZBbXIitgwFScX2%2FRXEf8rL1ZI9tnHTUK8F4RyGuLvWddWrbLfu%2FOYdV%2F8Lu0hM8W6khT78PLIcrJKKq2MBlJKSFAMOwXPHJ%2BGhTKRs6XAGvl5nlVaQLIawAqOi5HJfNi0XfCKNgDfbsyls6w9E4VZiFOjTmmMJNy78XZ3PMSusf7QLe2Iw4wuWw1um6aFChtdfq8kVE6XcxBkfaYG7rHfWJIb%2BWC8Fhkn6otEVR2TRXF8M%2B3paHyyHKpuECee4c7r7dcIS9omTKBeJfcscwATfVPlTVJ%2BPI2jWSrVoNcmtP1tume1%2BF1i14j6lXsHE7vr%2Fo4cawvNICtEIIriRfOywe2Z4jJpdXp6Hfwy1Y3vL0lRz4CGnSd%2B0ABa849fnKv55dIKKihN6AxjQBmIiO5IbnEImNtDaFhA0OuVm5T8I1Ngs2rKdrBamnx6BK30DT24x%2F910MLG648QGOqUB0sky3uIyNRENrqq7rJqGuK1OtAIgjhCo47STiwPZwICdFMIdXHxqkL6I9MDfXPRqe8IazDtt%2FMDP5hq1u%2FUprunAhfWuYTtscMk%2B7%2FZe7YLOe5GbcN8isoL0UT7XDhA43JS7jUa0MZXpS30OQTV%2FJ1Fzntb2X3GHTSRxR5oscHBBFZwmUZgI9ghauowGbhMKJhY9FdpqiO9bbP9eTGZrYX4NgUsl&X-Amz-Signature=87786284784f309608effcf3814417a3b540299b72e74694b50988799f8f4bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=6db875f8118d6d8338335a6e763cb98ca9f875005ccae4223594d0c186ff9d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH2RIUOT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqOtUicCbNM%2FrgOwu%2Fo4HoKcAxurZkLUxFW4geCabkmQIgQrOfHM4BjQQoWxiTL9pyeoKaM5LmuGM4su0CJBB%2FhtMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrgRAjb0oco6EZjWSrcA4Pz8qIyEcEKZjqE1e8LbT8Bas577MF71tpuFPqBaLnpE0CiCnDrnUKbtfT0ABWpjx8fXdS2DGBr%2B0s%2BkUfvuWk5UAeoxjPcdbwz6rpmiNUxD4scVnsi%2BiUE9drU0b1WHDvO8zxA6H3yrzJjQj%2FgmmmbDtbs9LYwDJhRCgiIGWQhdmWb%2Fx6yhfjuIGFsGu9ZHGT1TrNTX1yTR4eLnOjn50kck8DDEl6U%2Fx1r8JTMDOtf4ZZX86h4AqUUG2x4qLWX9BYO7X0t4z9dFq6vXlZhX4qTatUMFM2Hg9mYeT13UUHS7%2Bl76JPEg8%2BWITuPvAU%2Fqwg%2BrU6lsb8EvFpvlgsEw3tYEDO4q9yn9NC%2BUQ5SOIzq7WCLlB1mOKsW58N6tIk0uAOAxQ%2FPXg7pv7FhqVkv%2F%2FLOqUKyf2xQrieoYyTjCh3ePpRtLEuJiVs1usEET47Vt16CfJIl1YuTQZ1RUnAq8jD8c2FBikp32WjDWsE%2FBHziEhQBD2nS3E0jfHximM8JwN1TG8B0jBNsJchvkrPFqDfXldiuzwVylQyFmRt%2B5xVgpf4K38hTOsWdqHh6W2Fa4c8ht3WryUSCYCccSVrgBfOMMKJ3fQVfSNdp6FcVtJr1pr0jeV4nCtDuTRKDMPG648QGOqUBfQG2716yaMiwwO%2BXY1F5cfaaFjPF5WPYGD%2Bt9vCWHQwkh5Rgd33ELb7UE7jKcXo%2FLDfRigkno98usSrSvW1qVUO8c02r%2BuqbMKaY%2B6O1CX2Qp%2FE%2B1V34MeZNGKq4yOsuO4i21KN0O%2B0oAzhnTpDxnQi%2BxDUIDtaUCMvjZBRQEcCHoZxfc0mNjoMHKNYYlujFhNJVYlgs71ykTcIJ9R33LpM0MkzK&X-Amz-Signature=e2e50de575593046dc330b263be71bf6247a140046519096d16e1332a06e1a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PNC2GJ2%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLKiF7tTa0mR0DW4rZqjsJhND0qf3DMKXIRBPLPQ4rIAiEA18NUx7MLuh2%2BqPMWCGr8x8ZHcMyDLFPUkWuvONcTIC8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGAdZkCkaayGGxdlQSrcA1tQChTN0H%2Flv0hWcV0aqXM5q1tjVQxyfx0n5%2F2fwTTmAheFBhfJUdkI0doZcaPdzmkaegLuIqPe9ZHUmSwAwZK1B%2FuzeydTcKXXXu9mIpEtxZcZTwwyAyqyFZpE%2BQxAvQe19gC10dgmEIejZrN5r9UXgRvyCkSVB3LO3an8KjWSL18c3mClrBdijJ79kS94y91g9Y7nNDQlTpdAaKKqDLPyr6LKOBhxFOPHTLJdCtT4zOW8istm2Qb7ZqlXF5%2BOMMXxAq9T43ZHDHIit%2BnYhrjL%2BGsM90zi%2B7Y1EqrmIIvQYz6TVvhmS1wP4oIhpR2a9bkbpb7AcHB40CRj7d4ieUUUs4G2UtVIAYmUURWNJwJ5zNkSTNG7GkH3blWSd6aUXXZKEwQOjRXWV7G6qvwDNNbaVcd8NWY8HzLd0%2FwRkPjOcUA3%2Bb4rH0BbaQQ6an4CUGag9QyJ0vpboXhx7r56qh6eW2mEnc8T2Tb7OIgFNsbBBXcBlej7OpNMZVoVIDx7vv1uedXqN26gLTr7B%2BxcypINS4uh7fW7MoUp6yxYNkNyKEH8vn3jL6m%2F2H%2FkBgijImiWSNK8QujcI60fBzaGOssTYOxIYVTVqJa5Cz5P4JXzpVFHdk1X4od5JcYeMMa648QGOqUBTtJbCQ2R4%2F0LNp5Q5HbqVjzsCW1D6SX4VKL5kQ7UVbSwWaVZayeeHhEmTZN%2BHVZKFT0Q%2B2ZJFyHLCwfW3FGksZR17c3hSYUV6xmW9%2BCje%2BKK0O6ptLH6d7B5o75nmEnYJUdjrZ9uGeIpZSuEAENhqCAMySgmCqI5Izo0WBKx%2Ff63Q4XWwQRDbtSBbtCsUygTRBVV4qWaYnCEsbBW5uX7Ei532%2Fn6&X-Amz-Signature=f6bbc910cb79e20a4dadf62cd7b2bf4126396e80d0afe2945e61d9372b7b194c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWBABHZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc%2B5fwafOA8gYi6dyURZyTXc65tUnSdp%2FSEwYmnQqFZwIhALIfroLxawOHVhPFo0K8IHE%2FpOkTMAkh0e4OVlxwSK%2B5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUxpj7vUgJg%2F3iEb0q3ANbRNYbQUQATIFrtRBESCsVV3YijP14gF%2B9LMC6e5gXySUGuvO0mIhwTEjmNS2Dmw3txgHiRNP8onpTxPK1D0BtXXjf5LpI%2FkEmU25FLgDk10%2BEAniWLEsoOg%2B0uPXJZcbkXSmTX7dx9L%2BJ5XBJOyZPk42JQLburZwnawPa13GQWWGuYjrGm8xyTIPyUR3Ct3ozaTyVRFLs01onKtqtYqiYeHwFfMPeOfDMpTQHXmcY3TGAvEpJrrJ3hlxY5peK%2FnSqK9cdDYRLhN2JjXGlhweSjA6ncXU%2FOCOGJKhRmYp%2BOoQy30%2Brh1Y5ApZeiFOfpEavanPU9TRfRYcDU4RXpQe1ZuGvU8qNmhz1zWH1ZwgKjOLcd%2ByYeCqXgwS2L0dRoP6U7E0mDDSnsCvBITg0plTiNGwrB4FfpjJrxrapeNtwDg343tOrsP8IJTIJ2rrfRyeaUNy9l2E1aQ3BCQfHmLAVxelmXBcwODVUIGmeHUMiOJjeRcTBk7ryPI9GUUd3AveNv6ozXzuI9MQpatxuCUHU%2B8%2FtukH7GcJvIktCOErqTzHlUI2K5tJvIByK8QyQRdu92CrkiGJIL1wS9f330es3CpPBIHJg6Ia45paf3EOJbB1C7cT38DSewKnOvDCxuuPEBjqkAZ5pyITcyIdgrOZN656Fg0VqfDfnE1qSP%2Fn%2BgwUCQiFt92d54%2FZT3DUiXBs1YqY5yaD%2F5g%2Fss38p2acxAvfITuJrhg0PDrzQUmg%2FYupC9enUlog8eiPtyPHmIcwpvolMW2lHsb%2FTNnVgAYM3N6L5cF2DQko1cENtyBOh%2BzjdUay%2FmzbbRsRBNc43hU0OoBTJ6nG%2F4i8ty9PUQWQVzNf6uxOZuqwI&X-Amz-Signature=6e7ffb3e5840425b0e01ba2fc7923e9f532ebf93b1cdc4a9295fb4ae6e7f6eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSNOVX67%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCV7xPtrNjSqWaME7P5T6jYPbZfK9smhkFRq1ulHev%2FQIgTn3u6h305a4nLYADh8OncWUZhATSPXpKKK%2FmM9OSYSUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHVYfJO9wRWVtXNsyrcAwnB0YXdQ%2BFTR%2B6uU1MMU%2FXbzyY2SKZKmOFWCl38WgApN%2BI%2FSWkdO2d4FJFclNvO0inphhnBtR3L2kOMgJVs2xsy5QRcgByEDmWZob1Ng2nYr5oswpAIt3x9zn9qOnVjBo42EMGtRRWK6nGpauEhfZyXVHcdyVYh87N1jpV%2BqJ6jvP1lWUdXqjxefSgp5JCxn2pHu9H1vu6aG%2BfSzzjxK79gmUQVg%2FEx%2BVR%2BmDGDR%2BIg8qjWVK%2FS00RuK71wSwfss3f4qtZT%2B4nli4ZzBLLsBCJxapI5j3wyjrNCIqW4oe4FpogOBcgXhbd2niNB6HtzAOQXhhTJoWFfSypEMKTsbEShgr6A5BwPPqNtV%2BN8856jg3PoB4msp2M%2FqFa94zy%2BxXnYnMEcMWcyV4DCf0VjegrHdsK0I1MyWgKNCjgaKUs%2BlL1zOj2emD8FDSCT90HhghFpSYgFIEH7YY8mrRPGafvxZHxJPC8tKDIBjDLTm1ZryrE7duYpMpiIOQ%2Fr4Jy15wCc2oBYOHwvMx%2BOxBNazK5TyY8zJ%2F0LNshHpyXHQmAvPrMQUiKmNOPg2WaHy2WKOQutrQZ8aFcQxluc6PgRaa62EiUabYeFHiVW%2FYbGEL4Ch04%2B2Z2fbRsiMWhUML6648QGOqUBte%2BIyIsLfTyQ9XDc6QJhayExPE%2F%2BhmqLie7F5Bn%2F0UCa3n6UK6r9gpZwh4CHj9pHuN6J2kJLxjtYkB%2FklhnbGjz4JYZ9OyhOJN8BDfL6CYmtDZhlOh84n%2F3id0kaDehaU2Dmgag8j41KM23W%2FfEHZ4dQHpQtzfYpRotxAxDCq7qa2YXqErB3AM7eHk3kjUtBgHhXjW6DhxTvtfe9YEGwtt6ehg4m&X-Amz-Signature=1720a2f01130568633f71028d629c77183635ac1f1ab58e8e26ec102dceecff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVECU2D7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAF59t6MGyPH9YS6zMyFYUYFn7xP6SBSIiwSQ7nwweC3AiEArZG4yiCL2Yg5xj%2B0bJwSHl3V%2FxY7t2%2Bf9qplOwWQgR4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2e8AKCJBDGSLCUcyrcAyZ5YxrRJ%2BDZR6wdjG4LYq%2BpDh6HjAimO5iGujneRCXweoHFqlx3KuhaHDdQcDaPvJb2gzyr7c%2F3UEM%2FOPNUShyBpSvLIL63eNHR7cy6syAmRmXfAxDfE3ccHDaxaKLeAs9LXX6IUqCF0TIk9q51V2yAD4Tndx7YSmfW0oQM8sqZxWnK60ntC%2BiAwV34%2F6PLRBvkcX66k0br7QGA6KjZDp6OcIxf89nSu4EgHDxKn%2FPm%2FqlwBgPij8P5ajARL7FhmQACJdm6z9LkNY1BS%2FkQlcy%2B8tpLgcUA%2Fg7oNU%2B1WzYWmF3QO51v9RIV0b3oYHlzP%2F%2BXxIjappXHjMScT2awR4IJvT81Qgw7CB8l8g14IZupYOjotKSwN%2BDbpXxv143QHnR08KAB5eBVzKo2YEr6u1K0uy4aUXoG1qKWt%2BrRUC1VcgS9fyHs77LuXPyBTmNVQcaKIsZ9mj91p8%2BwV45nowDBw8lO%2BOBJQPk6iRK5WV27KMj8kDaRh80%2FIZ14qSEWH8v8wb4NrHbQZ3JwGmnsL5afztZQER2CO3Oyy0Ws1j%2BvAkvzO2E4dkplV0TvoZ8fmKgJ19Fu1Wf6o86WJt6oQGDR9J4t3B22wo8ZOAHCvTDBbKEf3HVzzrF7r8N1MJi748QGOqUBdnwzoKSXzsjOfXROoSouwSxoen0hdcRUa%2BbrsO%2BbSUwfVfw1ojGGZfHy71B%2FH3ksiihFdpv0j8fiQ0zGOEZVs6L5WAguBgEQq3Q%2BLHdmazbCQusLIRShdUlCIgsZQCaZ5dLQ1GB2L5dMkfCRDueSXmQr6%2BdNZcX2T9lCsgfjACo%2Bi4oatLUbvEfxnk25rSoWO7ycD4cgPcovVmvAMSwtfLgRHBzl&X-Amz-Signature=ca0f14a80e8ec3992ac553415b7958ca6ca775d33f5a1d3ba8b52f668010150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=7d3a7518cadd5b00d8bffd9fa4abc671fe29f0f7234fad5db56689f67587561d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZPXIJPO%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCCKKqOQI5sasqUz4Fs3GXGyUupp6%2B1D6vUbxIE0EuUAIhAKdzK2ckwz4PwbwZkAwZBNS5Q6HrnLGc2vQtQl%2F7XJmJKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx74fn2Eg1b7yjoBV8q3ANtanDHSYTzONKPh6ePg0uUcqkL2pXVp5aWPxdRfTVbOef1K%2Bx6ZbscJnDo6QYxPbEHhXPCmbW8npR%2BNjivqFi0KIujUY5O0jxJD9g4V1XU5jXr5veea%2F8q77P2rE21UR5Gloc5fp4%2BSwm83lsL0T%2FCFeaADoQCnxi3XyQ7zcrEMhvXRBWOsPDccrqXfwdLO6AYMsWRH7i0%2FcaRDIJ0i9xh9b07kPYx32uwM%2BUgRueEjESMvyKB38xbk6G344BOpgeQ1sXZBxbNoKR3ktyAi%2FfFg1EBER9QOP93riWizS2czGCKRPiiKa2xWuYmbBTZQ7WtY%2F%2Fgg7l%2FRgawFH%2Fgurs6mCy%2Bl7I%2FFOA%2BrMqNPQE7Xnc%2B3m8JVuHZI49geeBIizGDJOeBRKGlBhoj5%2BdBBLyk2gmQ3qWcguKmH3f%2F0oLPx48j2AAGKmFcis9tYx5VRhK2fNgLLW2HTYVIRtenqHePV%2FCeDfSPrB3tLQ6KAeMtWZbXLhjf0Zurv7cIzliZmUoIR%2F5VY8ZGYNHWOiXpfarrTmQnCSvZVW8ZKoDcbQzBbeqe095g%2BXqoqV%2F2EVoDOoBs049qrHdA6URsMDdFdGyZk9x2CchyAUoYJ3oRg2WyTHWMqYjOmnJa3BhCIDCZuuPEBjqkAQELpxGjDjp889Ytv1gOfS1lcWirxBKn%2Fq6Vz6gUOTkOQLBLe5dwEQP7kIGll8awyKrkgwydxtw6qIlkN1wmRXM926J6xTV3S%2BsAxcvVMWcy2Fr6sEujzYudN2cqJcHm9HQNg1R%2B0kWl9%2BHIBbGkuVJ3nAtH7MHvjIuZUywg1W%2BSVgbtMJUR3A%2B0siLYtDtCS65MvYEozIj3QVYZgtgxmslamo8N&X-Amz-Signature=d89b17684be781d435039a589aca843c337fe27f97a7a683552912b576d6a2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=94b549b42d73ef2ed41d9ee5bbe0820d4977530bcea42d0dec8fbdbff6ac6bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=4b54ed65572cc53ae2e4557936c018dd8204524ade9adcc6acdc2fd02678e3db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=2183bfea018c6fb07a65e0723fafd4b628b2c7f6d6cbafc922385066e7a6e060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=3c0d6d6cdde6cda9f461a58b2d2937d062f905f31a60ea6048dd4c75ac3d16ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=2781eaced20b962cb3ced0424b1f5ab78f79efae91546601db81df7654fea6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=d7eec6839a4b83fcf1ca8f51d41bf5a7389687059dfd4131650e9dca4d282901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=2183bfea018c6fb07a65e0723fafd4b628b2c7f6d6cbafc922385066e7a6e060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=ccfd92fcc037bdafe12fddbf91bbf77f10e92715676bb8deebe3a1e5dd132032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=066385f7237bb83adfa9fc64ca2bf3e504d2600c2002be02173d295c58c9d309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4D3VLGK%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCaodWL5jzvg168nycFBcpYKKHL9ougoxhLQCGb36GDAIgV7nx0VIGyju2ge50V2G1GbRdKHL7FY3xXvG2awHfgZUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF1jsZzA6g1hxKP6ircA5REyguUfMWnrb0SHnKvQw6RQ%2Bhi6L%2BujIy%2FEJozUZj4kwksr3vRniJJBedAut4aD2Dz%2Bf8teF2FU8AyTq0rwJ10%2BdOabuZsHrM%2BVHIcv2aC1qiaQ2NsLicmtDsgJe%2B%2Fb%2BXM56wlF3aNrvIVCvPZpzYshpQlb3ElhsKdyJ0S8TkKn37f7IN1PgQbAEgAP3Ot2WCL6vCJk52i0WiljaVqZsxNrG1KxebBfTzDoxPNohVUrDFT682ST9YXXzBuxtlTpLXE9xv3hmbzzA49lDW%2FIrnHGCDRBbSKgU0QcSrCAo662%2F7uDACVSCJioV3TyIPrX1HXp3sX5IH3pnnMZln5cRos0Geo8SACJDm0jN%2FYM42DxlVjLGa3KEtP022hnADmAdK0ZxcnuNxNuVm0mruoyjlX7BYHVTaBs6nPxyY65iMPYYFuCBE4KTTKOWWZ30%2BNpMQzJU6wkUPYilfsvhkwLoiReHTdSs2IrBgwAf7%2FAB8crlcKWfkk68zVCtoQ9tfOpk263GnvnjAA6wTzONdWg36gWTDQo7q5mxCwGhu6OwwR8Gr2FztyKsw4wxfxdGZOhPG8nkLF89ZneWivXMU7HKe3YARVJl0Ij%2BiZRKePcX4LdaRlm2i1TujI26q1MNK648QGOqUBy2LVUtwXsal3CTMAMfcun%2BW2T6C4RmFK3hw%2FfoUvgM4sdwRo7369K%2BQI3ictslnK6pZNAWL5d8IcR3YpNCqki34O4PsnXQdOulsHoSA%2BbVLVrNMEeAUfNIF6j85RwzdzOOdc%2BAWmKlHf0Lk%2FCo9Ua%2FDtO7EoJrKIa%2BV%2FZXkwWab73tXvY8BRu2HhDQFGb93lwVXxF3zWNOQiY9gSFBdRZxDvf%2BqA&X-Amz-Signature=601e30338f84af5bee68f784521865bf26a3c61d9f29e15edfa310833af1fe29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
