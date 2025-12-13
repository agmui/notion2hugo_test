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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=06344c71f762076dc924b2b44e5e5baa80b88ea4e859b511501dd236730866f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=80e90cd34070b871410592553c7e2db1a6f6a2e3ba729f540718f0a81f24db20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=92003ee0089dafd891d8bcb919f82a1c479e8710d5560ed9d646b743e9642667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=e5caf75904272b6d8e79a58fadb070f9f2acd013d5288f7fff72336837a5d377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=511788d9a21009082bbe677abedfcdf67c1361e3aeea32dba1788b4bf982ab11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=96a13187d98a658d76e7ad201bede4f0b4a1095e20e851f00d624609986d19a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=139dfc68d70adb5b95831f4a0e9d9bc513c0853cb888288141e56819fda0fe83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=707310fa23f1038e549c6802babc4fb8954051b11e2a29adda62f3b196e8b31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=6009c0b5dd5c0b743ed892e7c99b32241d0ddace0aa50fe67fdef1b658545588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=6dc3d2939987b7e63cacc754d9c45630466a35a21d725df209ae1a9f6b59d13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXYH7RN%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIHw58HAR4tRN7giNK56OtGXBCUwKGjQkmx9di3MEIJeyAiACb%2B37itL0VI%2Bpn6Wx98s4817lkXAmi9LAQMhM%2B%2F%2FxACr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMFkiYa5ILy2LqSeWTKtwDlc0ovLWHuGPKksTOgZjvUcWQlWWgPrCVQmnM0oTYkaJOapuD%2B42iO9acnUSrEr9cVLhap0eZJzFiuCzXyPCog3oY5nd4tFnPDWQDY0fAUsdBcjFtmgfEE%2Bla9ufXv0e7odKHm9I0%2Bgek9LK9mNtIHDY8N2xPjmslNhNuSspF2309CzwF1mAAczKVvUQbl8%2Bu1DciuLgUsmpAYA9Ng67IUJ2%2BRM1GZauORUit0EalaIBUunAyQvhhXzQprWppLWtIPvXJPSftqGxIihkzoEdRRUuBOfpQm5vK2Buat1XYqm0ka%2F4NwB81AbEqA%2FVQqLJHCuh7M6Vq6OOFYQlfgD%2BNNaUtAMgtDCuSf%2BSkxczXsPkjZJGcWcJevZ1RFQqKJInj3cCebfrUga3ok5IICpGERaaOYzn8GYvoBvhnFVEiVEferzFCqEyAWAyqPj19V6KwkDm91ZvLJW8LF28HYzYbKw5yKPrqrO9eRz0zYBrTeQlolUhe%2FdXm1JQjx9l5chfwvoQWsiPbE0cLVpCrzGBLd0KF0HGeNTDRBoDP31QNZFKqfCm9R3yZr%2BCA6w9U6Apb7iWNKNEo8wqwY4UXyomYzCV%2Ffv5RmInMnvu9aLSKek7T3FYYZUBRviuyJoMwx%2FPyyQY6pgGii45JM0Qz6JaEX58%2FOntbkr97f%2FiXoNXpuQw2XzZoGltPtbLZlHhOdOlTffdVLySiLiDI1tf4hb8x37rwNn0aTyH0j9BY3XTyvB2WCaCgVPKdYpWBuVOyvqrbrN68i2asbaUEB90Ti3pPAwZi5NpNSak5fOpE%2FoseJkS3j88t%2FybI5aoX6GtkK25SurmIyIPf3TCpNPo711A6iqMTt8NDP3%2B0iAJI&X-Amz-Signature=c7b9e8369b7070237db6671a339423c331a70547c693dd4dac2f7653f7f0faab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSZ7GRJH%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICwChdwWOGT0fNQagPmZ6u4fDAuty5bidtKBe6y%2FePz2AiBq6FnfEZ3KrQtRheF0eAQMU5K4SqDBokpsC7itRdmuFir%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMgPdUSmEgiNI2sCL8KtwDtroU8%2BY9J363p0NaueWHEH%2BowTEb9AhwKjt%2F3yz6VBwKGgtMGIhhI0eY2%2FpWPyxSMg2n9BCJSSpxQnw3dqocqHkpfASbi3SY8oCpTUYZ6ozyV%2FCxScc7e19oZSP27KQmPdp6L47WNPq2y6Mek5ynePJtiQIQcEPryVbAK2cttRGmGdW5semYMwRJjPlwx9sADOJbRCf%2FsU9x5ujkO9DN1HjI4gATN2j8UTeeDulVT5Zzk3jJiWYDEfF%2BxJTOdJEbHB4N3WpVn9ROrqMernMrm4ovhA2AQt3hPbAT%2BibZyhTQAr5R19nZytarEloI8udDotDGzBTu3Otfy3ckRqvQ2wVSaBJ4N8osqDoSdPwaAJauPO2D7GhaXzw4HlOaF1eXmkyC%2FxWKLeM8fl%2Bs2vjSifnUYbsxkcM%2BUcjcreaOf1y1AK%2BLQYlJZL8zWPL%2FxLzqAwb8tiQ1CzRcO4BCzqP9iLfOrFKXO4GPtTKF7IH8vzwR4NbwazAOsMWkYZJNXrZUDRrYwTly%2BPLbzKpm9hIDVJQoeEVLYCpwUMsEua643yYGoKwpRu2XCvc6ZhYNCEhHC899lzYjUm9vNm0SNDw%2BEwDGgRJcXZqYv4UF%2FSXMVDyQHn%2BYBe%2B5E%2BXcGLIwmfTyyQY6pgGvf60UCaoo6t%2F3Ay%2FiZyDcmE7TsZ3ZAQgJWzu6M%2F4WauJSLSdwmBGHJJbl2i2HoYsQsP1hhiO0NhegkKZkeHKd2igO9dsYT5f3klGsnvoRtixgPY1K0EvkmMdFA5fWKsUrTxEu01AOdYaKqduwu0BTY8rIQ%2Fv96j0F2llWMax7abbJWYvDCH3qW0BVABsPDMgcUlIVNTsSLw7LYJ6cRvyW7Wge3Fje&X-Amz-Signature=2ce211c70a47b1813068e3d0eb0b1cea96067e1f6a63f5fa7036dbdb02aae339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7P6UYO%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDU3Ev0MXufKr1%2FGvQtGEXoXeEPHa7BfmMWlMcxESp4MgIgXr6BNfqlptHIS0mHtRlPl5UfqeWcSK%2FUS6Lehc3t3vgq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDFEOHzW6EIUIDYBxEyrcA5oKj0aE6rP38X7AR10R%2B1WX72W1YhSW3%2BpOQsQtfoQRzUfPSJoGl7%2Bp7AiMuPdUWLb4r0cDKCTASkaC3RvPGlZqZp3dEYcmVtDF0T956MzkqwSfGU7owf3QcClj%2BEY1ehGRaGB5ZtkTImhvi840mH8X8DrRsM3E0923bndqLizocKjmcGUHkyPIk52wHN6dgNsrLXFpOBoLCx9OyaZBb261lcExY6i5kA39rJY1a3UFn1EvoQ090u9023l5niSbdGnNVuXMK%2BB6XPQ2iKImuokQCChmNfQ5ztDnsX2mhffnP2YdMIvhsVbH2frSbpxXG7%2Ft6O5fIyTpgMCtbE5y4i6%2F9W%2FIbJS8axIVSCgHjMzAq3fohr6xl5kT9b1ohlTvmJyHyj0nKel7lnF0%2BeTR8ZDiyhUshFAWZichFQU64y7VQP5ApsJlPCKgTFe5NsBEdzbQoEU%2BPrrv00zjf2R5hvGUjAei76an3%2FCO3jDBhuZ%2BNyvLOY2InQkrmp%2BGRi1UjAGNIr15D8QoyxOHlvo38WlhzVbVAnszEbAG7oExnIt3l8HSzT1JRU4C7uvVBzwTgj1HCk2fIb%2Bf8dT4MJ7W7RMAPXAB0kAyI31lHRJGNGdXx%2FZhIIavrWM5bmymMIH08skGOqUBWjWaRyTedNmjl1tUnqQZeZbYV2PY9vGKAcbOSyLKlVVDoSUzp0p1%2FY3Sgf6hyzwyMXv%2BvE6HDWhBLoB2z4Civy3r0N6kSnvOVfFb1G55ce0Sb9hlEaUwwwcj4Lv3wwbyHADsBr2lWp3X7qKt8Ojee14Htz%2F9zSQZpbhqcEV7M7w12s6I7AGfwUEQVnQP%2BAmYCo8zwmN4LmwELXM3IJQacpRjEChJ&X-Amz-Signature=435e2013bda2725505112b9f094e727a5b2be91e833f60d3c588ba0ca18dcccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=60bb27b114a0cfc9b799d6ee7ae4a59a21b5ddfe46b85188687c30bcf16a265e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6UIN73E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDPGl8fQyVGja4gjjcg4aNFSsXCqcB4xlGj2EjADfYfVgIgXdBF8AXWGP0I4GkGUPtdAU19omAgLSBIXTJkHR9TA%2Fkq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDE%2Bikia0SJYWDPHl0ircA2TAaEr4Gibz2R9hJLbmqwEdU1wIfw9yAcamfhrdMeYgyMN5ENbkc%2BmA036xLryj43lB54LHmDT3GEyoq02UTqtC4lNVQNDtxiyzKH%2B2eK1jL440VMSVv%2FsX7og%2FN2v4eFivO4EKMt0skuSHfUb6Z6qPYdMcZfy7ouQrLFXZ%2FcP5wie47HadnCtlquWUkyIa1jk7slMMUhG5K6C75a5bI4bGXkTHEi4Im0UQNs8MXYbjIKinZ5qyMyko20KlXw3wzD46kz0xkbi8NzhrZosxCIghAhsNpt5Oa3IjgiwfPuPJ73FbGPEBP9YuNt1TM1wPkNBuSjo41QP3UCdkMda9NPX0PfOEBXXB1cJvekGPCRl%2Bh0TEpoUbngZlkGkBP6zKzC0vByGXuMfOoeIxlV4GqCvNkhr6lq%2FLzXCtjnbm0a4vlpInmZ3CSmQfYmUmkU6g68F22HCOL5hILEBIpDx7p%2FWQh61H1ZivrAq%2Fl3gJdeU0EEnR5hvddbmuYx3d%2BWuwNruuhUfv61qnTCkdFq1tkKiYLBOhpikEk%2BGzFOhaaFIk52t1jh3xqIVtHQTqyjRHD7a7pV4c7B1dxh%2F6XPI2sLd9i2JD78lErFOw5Kti%2BpgnVcCa3BTkRE%2FzhvAgMK708skGOqUBJLzPoLpp9KwwMlcd5iaX%2BI8d6tHnltMhcj9rjCpMfJuPvf4h%2FVDSczh%2FaeU7oabFh11gEthzobNHR%2BF9WzOcV90odoYC46WlpnqBwdrWO5YiShNPGKOYM3u2L3cZf3dQfSW%2BVRARgjZZhqJegpIAS1GhHej7azpY8QwP3SWtFzFzYy67No%2FTLmElGgceHJC9f2oH9qRvYAOmrgm3BZ04a2ZlXpcD&X-Amz-Signature=6645ea855b2e905aaeea8d11169301ca1379da521c675c104b462e6df011d99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=65f084cce4db59f456eecbcff4f07e75b9ba5f0144974d12ec4bb745bd6be58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVG53WJ%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCoeatJbWFFnH3FM1kA5ai1CX%2BUbd4HRZXpVeloMNnBwwIhAN9C6gG4flfg2RBRxXIoicLYz0FK9x3%2Bgu5DPVDcDDkLKv8DCBIQABoMNjM3NDIzMTgzODA1IgxXE5z0m5Qi2lj7nCwq3APGSOP%2BpASLIHhfeLP%2BmW3DICSF%2Bajvo87RFyl4M4nPhxD9mNp5Yv1VASigto0ILsGI0nJ4v%2FLgQNb23hEiYJ0gDtfwEz17N0gIAD00i18Iom2zhl3%2F1PqkrHAkKZujPu2KJebCqZ5DZuTg1WbvuZ0L9neZBn5qSophBibTFSoJVoQ6AAMaQ55AOZvWm7f%2F5P%2B%2B3%2B%2BOnO2aDlVPOC0GjNDt%2FvkoMclO72mHO51uB3fJnGXyiAA%2FXLfo1dZVjNTQJDdUdP73q6JiKjcaP4VxSbV40emSmiYJE4FwOtUZkQhfF%2Ba6mdGk79R%2F06gISiFmvEJTyYpUiPwVnSJMaKJ8DTSdxWcvOlzALI4VJUZ624k0DJLk7gXO641O2y%2FGTo08Eu5KmmmCugKTnhvmZybiPU2CkNG1sQxhA898Ny8CwMzcTEPSBPeM4Tgx%2BB0QNOnEEQ8Eo4b8n3ITkq4A%2F1kS5F1xmuswrUwnsG7nB0BYnymWn5DxqPBBpyyztD2nCtb7DO%2BcfZtMjMzA0%2FZ3oLFz6bG2sBJbIrFutFlr4TGQzumSw4Ub5imTT33u6uVd%2BEYwMZdO1VFAXtrZ6ErAqAcnTdkPvdKIiKzFwpBx%2FOjlKKzSZdrrwkl%2FpQd4%2FXfdkTCz8%2FLJBjqkAQp39xK4HChdJihuPz%2F1rkwrR6yhPn5pg2ET7MFmxQ6KHTjgUL4FP0BZHtIHpHMyQrf7UHIb1xIUi5jzkdcV9w6r7E%2BfJnnU1VT19Fob7twth92QBnMGVn54vCT0ckL%2Bkwfl%2B%2BClV4R2woclyhsOu2WJbqmDie7OiaRoH69I%2BYvrK%2BB%2BEqo1kyQ0SKK334B3w0scDB9DaijN4yRRzKCfAfBtTb16&X-Amz-Signature=de57ea853e7b5b0abf71624d80d14c4cacc8faec77edcb9d057dff9af521ba08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=7680c46e76aa8ace3b5d5e8e392dd690b836adb90a93d2e5a71885194a0289ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCPSMOX%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCYzu9L9aQvDsndUH3Db1spXn%2BHdegytzhgHuAlNAhqiwIhAMVYiv1gk38ozsJnjekt7Wo3abKdDmjgB%2FIRLbzdJUvlKv8DCBIQABoMNjM3NDIzMTgzODA1IgyYnxPJMFMmEkgpO4wq3AOTNHMxTM0Ze6G6WbsBDG6CWnlPKvwUYvPcQ4fCHFwwUuXv3cpj6Ug3Kat28jQc8e6s3nROMxLnhxAoi4zW7XFqAa%2BIR13tP23QbJ3c4%2Bk%2BYUhV8PahiJkFH4A03WLnOS%2FtCMjUEMSRiSblbZljHKkaJlBlnoLc7h3R2APJ%2BcY5hp5yp4uwAhqLdXBIgg2IQcNfDF80IBX8oys43%2FAayD%2F8a2WeyAyT8XUWskt%2Bab9KuBO%2BFcXC%2Fjo65U5EVAHfUYHIifU%2BIRj4FtcwuIc5wX9clhuVH47VKsqrjGQj7l2ainlYUb%2Ft9MFHHRrIkyVdJ3bmzGl6lFXZTV7gAH8AUJbo45zOGS3mftUJPEmoKLUV3IecxZlKZnIy9mORT9alR%2Fzj4I7PZvbJS8167xlXdndeCXCct%2Bw1syGZ%2FvnGwOa0gU%2F9SOzD0nEu2Y4y2jip1p7XxVeOPjmn5TT9Nnb1Q1LWux2P20d6UuzOUrvbh3AUoHIZ6gwVm91B2HiLqqEjdKr8hqRg4GSd%2Bz1cL88Cfsv4oaWtlhzscfHbvbucOGLjc5wlhg%2BIooIq4%2BD1Iw4Zj6C3Wpev0%2FtIxptIq6g93wr0C03dnYoFmhgl2XRlb4gp2oJ3FZORbc4dSAmEujCL9PLJBjqkAcun9yrLauSVFW6p9QawNcmcj5wbl%2BwT4M7nC6wruYn2GjeXZHt5JFWxvF4ZulUxcy0w1mjHI7fronSUp1cYN7ibkrhT2y%2BOCvUPxGGh7NgKPaBcfWz6p03ye%2FV%2FHWTlBYHvYgF%2BCsSxfg9pifMTfePAUEa2LfvYwF0dfOzm66fti%2BwyJx5Pv2YUu8%2ByilZ4NXRS21bS7RpE%2BBQx9qaFT9eI0iHX&X-Amz-Signature=31f5fcf53ec7de4fe2d510cd55958835a1b4959a58f6c6a3d41ec31e5127051a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=b8e497d854fa3d0110641964242223ec996913daecfaae4650e485fbd7104cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCQEFQI3%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHIuEE%2FAxwNlFYfqiqOwcZu8Z%2BM2d7%2FH21kxYy6pmk4zAiEA83VvHw%2BYkzbOZlgL6moDdUXFYUZUnphRnFEmvEBsyREq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDH9oAtBfbGraPvNhpyrcA%2BFjc%2FfziA%2BQel%2F3XdBcRZv6ihJptbOt0zyI3FBBDCY%2Bp167ycWq72Xu48gkfK4zq5PZmMqdYXHtFIG1KkrS6ALa7YZ83QBmzYs7PcOIRfjs5WntOCZBwu5hs4Tf0CSGBfrp%2FzU%2BKs0RSXibwgSab5WVWS8BI%2BDMO7lqoua1wnjPxOuh2WLIkXRMyvCi3%2B1FQp6KECZ8Z5B8zQIN%2FomRyiWBWaT7mgBH%2FG3ogM3cwze1b6LTep5mfWjToixVCspdWRQ8q29jjjcrzT0WazMTziIgvCkeakXqNWBEXDgdYLmEgEQI4YU%2Bw0LQP2x2d4Sluoeo1iK7xzyMlyv9NJG6q5rrE9NtoykQDamAWqCavFpnPwdnU1t3GYtdBo6kyjNbd9mwEDtrI6t9hhAG7I0JX5wYlNK37F0EM5gwzZFKcYpd%2FUG085aToS4LrdV6%2Fa33O8ahElUqFiy3gzJObsGjXrPeqNHN0Wxm8SmPz0Rxa0XEwdklzq1lFIfh1R1E1kflIAApeaYsNvuuN7Qg9c1395mZRqpoEbEDO2Z08LZFBAPr7u9ED9mMxROZl2iZ4%2F%2FG6yRCK4OHS8u5tpCSl7uxggDPGxlUkshpQOQDTluGIxGIHOuVfX1m8Z5UysEbMLTz8skGOqUBnd9%2FV8t0rBpp%2FffbHnfVnVWf1KxWrLmW57LLfuXTnro3nOrrB%2BG5jO8Kv78UaUPOmq58qXa1GtygiR6oO4Vr31GuC%2FyvubkmyykUWe43cU5OqirDVOatxSiJwl6JWLm5HmgdVUTDYRnRwe7I9ssoETxUOvEB15cbol8joLr7XcqZvgD%2F%2FmDlwSOUEcenLyDBSbPWuqEyI8SpR28yTBa6OibMvTDQ&X-Amz-Signature=10adc2e15fc4bbea961d088ae6016eb4c40f21ca3e33dd2bc6a7177b893cfb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=2cf1b8f93e4186c64ac3146321ae0f40fe95360c9dcd8caf2fe74c95a42681cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAPPUB2%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIHfWPU1RPqyBuIRG2fGcM65YWHxFOGKxlPdcUgX1TVZQAiEA%2Brrr4plXCNv%2B2DHRTZjrtMUmwbFHTwnXoNcVBIxKLP4q%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOF0ajKneg8Tp9%2FRfSrcA5WqPOPeTebsetxTVQHv1Ixor4XDSSF777en%2BN1%2B5Wz7xks94axRYxeUq1GCnYZYsc2l8%2Fd4Q1BRGtV2dZMZl50l%2BzeAQC%2Fo9oG0mW4YQa45dUtNGfYDHO1kUk9hI4sd%2FilYW2w4KKoDvQYfl4LVvpk4AcHPkt0icn8ZUjohoCkKFi%2FfOq%2FoeYMp%2BZeWwpBR4cyvI0xsUQ4jqjd7sJnWUZAXVi%2BbjQozYNsy2QPtCT8dOIYSNRN5bVCUduufkdgPl6z0NXqTdjn9lQkln8TVOMvjhf%2BPTqnnOs3IXYBLmM%2By8k7vUnOlQDU403oXCizS4DzubAAiOZZMhmHPacY%2FiEaWaz0%2FuElpC3JDfoOmV5JzJsfqjp%2FWhtgMQA8UFIdrRHIrYBiIAUa08GWzqA6vdLnLezDdNL8diefDHRH9i6kEF9ouECur6snsgcfuPywT9mWo6%2FozYjBYLcYOWNATonJsCYl4NKUEa7919c4BH3ERgKuX8u2wYhJQt7j6BS4HQEBzw27VdxWJTR6t%2B9VfjbUe2v8KEKxDi4uIKW45I4tgdUNiU0xntlxA0%2Bn5dBOvbp62LhIAbkHWAI6H3N4QyUyFnlRI%2B6bj%2B0%2B%2FCXkEeUi0J3W0DOR6YVAdTVHpMK708skGOqUB4XAo%2F1Kir3hv1tnJAnjAB0jVNlmCl3YNinx5%2FPJtQi0XDKg%2FanvnN205O9v91ch6%2FJUIpJ2ospMv2T%2Fu4rNn6nei%2FngtZB%2F3wIdhiI7lBCN%2FoYsK%2BGM%2B%2FS3bvjmseik2QqSvnedXIV34hHtfa8vZP2mhfZMpwUrVvHvAcWEh5ZdRXTJMnIPpDjk8PQN%2FpSXj8gOSvBgUXLwK3vfZaj%2BcXMKG1zxk&X-Amz-Signature=c7b39f350fd91890e996bc016ebcbd170de78f8de345b0847d08b89f5b69bae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IVCMUM3%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICEE86RJWy%2BN6bMP%2BMhScpCgDP1z09KQ54weXKLbUV2vAiEAsTADd%2BsY5eqBdeQTXNFBHbQuhohQNZFOSvUJOYsRklwq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDPNQrZyVkOvMm7HcircA%2BaIW2R10UcngBW9C0USKF6a0a4G476pQJSxvfIFV9nZ9k1SDVrp3rlCj20bsUr8C1M3GtnY5NtGc87DUxlf3w0WJEU%2BXATSIMtMSRBhR%2FbdpNOCoQWxyGE9mQsAbFT2X%2BwCP1dvSJ86y7BoQVg4UUHdjz1guUS9niH%2Foo%2BMnDzYTcAzqxbuDBwA%2BKGu4pw4%2BD9oQHqF26Q0zpa%2BcsCm47Mm5rbTONIOOLrF7hbY7coEfKUeVdCobxlB88uG2uf8PLUitf3xSnfvOFtQuvGKFh0lZb%2FMGV%2BAolA5yB8k3acoL6ZGfNPZOV7v8peRHDxR4Hg3oSiYJrwRSLacxr3F7a0c9TkqsW8QRIz5%2B8JlpeHyHZ5Ey%2FXFY3BzjNiUf%2FxFRbYic3xApWu91qv5SLbTrXzvBsS%2FW1H4KmSUy77FWhEkUEyxWR%2BA%2Fu%2BeDHjG1IZ4D72RDKlrsUjk6Up0DrPplUb8NyCigQgtbuJrwgMiJbioQbW2iVbXa%2BNb1eZWWK5o7wlEi9kWPZDpZ1PwjH59TNxJ6NmwPEIsGFiBa94uoFFRskitQNsDr7gfTH6Kbhk2zNu9DFl%2Bd4tXyHIaDWPOVntpdVVgGuQ60hecgOpHNSGkiEmoP7Ap5BV1EGQ1MOfz8skGOqUB%2FV6LWAh6ss6pX1ibVg66y6uVugASUOZemYvZ1eA3f62n2Ge7UzTlUUaZgLuVMRWT612GXZna8JtyWnAX4u5Q7TcnhMwL0yVr8UGrQSCtCUyHVV7WzHMB%2F5f0m611huqz4W6SbDM9GVW4CN7oAIDIY1avq4rJl0H9iJzzsfX3SMFHxovSjHO5rMnKmySCElDPE6Y4EuxE5Mwl6sNjf%2B5P9NcmpmvF&X-Amz-Signature=d24dc3244279d225ba2fb59e4ff7d0baf736fe89298593c07c47624002133d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WQSTHV%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCICt55tAdcKTEApi8yfaBGE0Wi4plHKaPHilCqxTIOB79AiEAzMgIq0ClVeAaZTPySk2Me7K0Qc0i5oLMuGiUtgYL5uMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDNySuByGOjt5BQ28ECrcA8uTqfudVCWmXK9uYwEY8l4PNMtGQRiox5ACxKnRX01bH40mZxcxWrOGU%2B41iSwA2PHKRwTkgQslQ5KPFp7b1GfCt8%2BAnUOrDMdbF5T3K%2B74Tx7%2FDpVkkRMN7Ef%2F5xc7Kpx1yRHaheEa30wCMS%2B%2F307yryUrskJWAY406O3ttCcFjgdv%2F87oDpI2L86E%2FeVc%2FXmC1eQejBerX62s74zkGrZRFucOSdG6IlJ22qKLxiuC7D7dDOhQQflF0C43D10EtVu%2FSPKfPbtAB%2F9FCWeEShCmvEVkaVwE%2Fq%2BlbGYweD39KAwnwzifeuXcfNW2vRqri%2FBO8pWlXGVFkJvPZtU3rQ9m4q4VisCCrNSC7IYNbnF769da2JFTfc03LM4s05H%2FT%2BsaOktrXJW54P3w5TuuJfLWTOI6OekdYINSnp8fY6Pumm%2BYUBEBXiTmSBkicWOPXwSCLCHc405lMd5ByJAt2ixxW%2FPJh3tv1l2DgCg4MC%2BXs7b7CtCZB78%2BVZARdgh8Aw1eASObCW7X9CvNNVPr13ycPOTOt%2BWkSsqoubDrFgBtJ2S9T%2BHBF6Iq3xrxfz8qHY9tx2%2FZA3FQ3xYF1RHfQfNu39m97Lm%2BbJZgfdj1DK3RPBr%2BvXwtdFr3iL%2FOMLXz8skGOqUBJ9SsyvB8%2FlrXXb6dSsOpHp06G3E9ZbdbdYmn8Q%2FQn4IbWsfbODlAvIHKXU25YXT5SxqixW6XRRojeT0vLnhgjkib61SqRIgGNBlRDW8mwPtz9qCcvMkdv%2FCL3agTx%2BAWjMeG8nUJC349dni%2FLSSFE3VqYROb5Gk%2BywEt91jO3QPvJr8gvxjjIATg5zGMY7E73gzY%2BYkPLY4Osn2zhGBFs0HSP2NA&X-Amz-Signature=2478cebc59976ce45b4797af66e26edb0802a9e8439892d36993907f278f0ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=8fe92a71bf29419f8e4394ac78cc8fc43fbdff7e1b1ddd6b7b1047003abf4abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXDDEC2J%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIAx9YUCif48Um1TwT%2Bjv8sV0gxrsCpvE2f4dFPHEsMOBAiBLNx6IW2FiDV6Lt1MBtW5u73miooyIFxIHDOgBqtAAWyr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMmIILDCNJvCjirpK0KtwDHnOeIT51VFA6U7BqOkQrescLqgkP1172INjEq%2B0ZWMRTHlp7jTldGEJ2tSDYNaU7p7hXiD%2B5b7MISglrFidFbk7VY5HIR4xXQbdfqhcCvd0pvSmFZ%2FY9ig51OkP4WfiSN4K66p5yasZtJITP4rryajkpAMxksmYhK%2BuLPGbtQlMIJnVZAM6jHCa6PjwZVPyShI24fK8Vb6CRyjRzB8EB02AC%2B1Bm4rXxeNBapPBRsRk9IQOgioCCIZV%2BIZ16ciW1eyCVJazaYGLCGNvV%2F6MAhxzJx99KRGmTGgc2NwCkdNni4PsvRTES6raGIUdFJRUGXqk6mT2nmNXtuF9Nmw3R5tnxkeJCIlEhw7II%2FGtB7SNmPaOkNYOkhIN6BXLJhW2BC4lwbSzXlyKx%2Bt7EVB1Mjv%2B3PFJhBfgfbOaEx3QHc48eOkimZwIefy%2FFitOBs5rNJo%2F6lYznOEXrHS22A0WwUs4xE4sLvFjV9yHUL%2FJfNcYa5Qzcxv5wLYa9JrGPjLiCN8oIsfSpW947caTJvxc%2FFpGyNeZwgrxTHK8TGi31rQzPkeAMtjfkC1Sya8NHgDa%2BZxZ42XcAhDiewbFcXeaKDLaMcbX7TO6xIsxjxXcH0QI08hgfimqhlJ2w%2Bs4wifTyyQY6pgF%2FW%2BLIn7%2FF8JjbgQ37OBKC%2FA8KysGWtVi81v%2FhusmG1FM%2BhVrGRZ0LKxibuP9025QknnKH8gbg2Um%2BJ0Tja9ILxp0pbxmrgHMfHJrqFyEzA2Rg%2BlL89C%2BIoJnGtGc0y9DGRxpnw76M3n4Ox0h2EnRblU37TJeWeAE9v9zDxCvsfG49Nw%2F0AnKf%2FGxCpvUUI95AUY4ke32ceQTku2jVadf7yhCIEGDq&X-Amz-Signature=d735e0b4636518eec7e77295c272fbb5704c07288a673900429069a6a51e3555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=146e19ab170c399e27d1e0448d2e789b07d88f3db3949c38f50f13c72ddf4af7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=1b2681dfcd159efbf7ce3403326f2b6e9c0cbe33fd2070106b178cec51280d5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=85e25c83a2e2caff6c98f8401f0a9642973bd19268bf342ce5ebbe4ecdb3e37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=1a9f4ef55b3344b2e354a71ce1bb1aec105fd09637f6a5291f801b2140588384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWI23GQY%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGCNaTfoV5kjpM8YSvMlI1jmgimLfRzYqW3laOZL4dhSAiAk4A99VHkhAAi0lI5MSAAeE%2BUBH0xo4E1stnTeom2JoSr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMEIB3r6Pt0RrYl%2B6%2BKtwDHOOkDoqmgVMlC%2B7RI830fNMvCQTeYSjV%2Fr8rqn7UyHqTC2D9rOvXCGVRu9vxlSmbTZ2S31Gf%2BeJajUdwOzPs61NkL6mqSwEa47CgvbW1XBicqjEOwbVl8CWdCRbXciS09Q%2BwdIgveyNJ7VQGg2SQR8qQK54ZpqRiVGvM5n6EitKvraYpvFUlRxUQSN59Umuu2pd0FQQMOR1H0dOjqE2qubqNMVlLaGS%2FIDdV3ZIflhVgF4ksUlZfkEoTUkzVMuTnOjButGb5X231PYuzJqjJBn9R6hrNSaaX1fcUGSD%2B3TJp5SyHkVN4NrZoxEREGXqYbu4ahEBg3mExH4IyVMagOhDFymE1bXxaimax8Cjx4KmbPkZP3yeawia2dSHsNjIpIjtCdrxwQ5MkJrnJsFClYhXr7yABKZMeiIioF7mKmUwe%2BCXlLsMy2NAwRda0lbEx75S2jB7koYDwocGJnYU4ho3noGavz8e50d2sTETKm2npluj1ERLUAHG%2B%2F%2Fpww0fmRvPEIfbe76FLr1w4VcUrB27J%2B0azxYlMrMH7iw4Zs98kLGiE1OwQv6rVl%2BxKFJWBB7LVTpDKU0R8yGSejBJHhWEPUuSYiMpiNwDd0wIhAYzXdQ%2FMaU6RPUgOCtww6fPyyQY6pgEU2lQjaboOY5a2ukdm%2FYcaWUDxLukbKDbgp0e5C2cQJovbsJC9fzv3JZW4YE6dFPOwsN44sxzRgu0DawZZ9ynteU3JqM%2FM%2FXUXpAh0zxdz3QaGFr4dd%2BMBsT15iVEegfyxcZCIkwBAeUTuH9urCOyAP2Pfy0DcF8zFyRkB1yFLnBqYTtkKXW3d%2B5A9duHpY09gI7N2ydIR1o10bTStkNVo0vf11%2Buz&X-Amz-Signature=28873160f325e1564e56a1dba9702c845c16399d4594397e91da079f712411db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=8309a7bd9b5d7cb1d0b839e4e4874cafdc7e79ba2e279d63993b760f89d708a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=9a21c65de554c42b83af4ca8bab8dc1896f9ceb5c828c62d978c64f82364eeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=85e25c83a2e2caff6c98f8401f0a9642973bd19268bf342ce5ebbe4ecdb3e37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=b4c35cb735980711a99cddf00ec07c92c8058fe8353fe96bf41b3d6869222201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=53799931e19c4a2a296d9b7877a9ff77c9bda1b55ccc4f390a14a7f93b433262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4JB6J7E%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCx%2B6IzaMdu5f4j%2B64Vbcf700RxO8gmKdq7y8nn115aswIhAMV37aa%2B61LXniVubZ5z2nI9XSuc%2BrOMYs5SV7BI7Et0Kv8DCBIQABoMNjM3NDIzMTgzODA1IgzpnYUT7kvVLSMJBQAq3ANrAejZgwsQuXSZEcwr2VVvbx7SvmZtcvnKOiBk8WFvo%2FpdZFpu4Q5JoIUV1CCrApcoVbghrApuUzBTn3ZUdcljx3vZGJ%2BRMptkWnIVNdg660mpfvtpsnSO8ps67Lv2JrC1PTgPYAiXyj5%2Bf9OxzoqLn%2F4eKIpStRU73y7JvzOAg%2BRna151sFJ823r5D6GPU6FI9dtTAzArJqDZSywvOinzSj4eTgGbnIm8CfPVTL0M0I61xKO57denCtWJ4WQdsvB1pABSxNMJIXePWEV7I6WqEeH60lNh0yUrX4I3ZWcPEN5Q6vwejs4BUKqi3Dvy1ZytV6YdQXqdbWH2fFQ2fSErfh0oY5%2BfTQiOm2FQfMJwCkXc2d5dc%2BS48BQ7Se96hF4cNeNdS3hTenjYEtUpQX5mEYyUETb3f7RwuHNugsn5pR852jyOZ2CC9govw%2F%2Bwp%2FXIWrp6pMR7CZBXXff6zZ0N96LoOZbUG2K7AZ9avoCNXnhpFTwu%2B7dNU3zXRSc4T9MmkZPEvXOjqfRGZ%2FOAa4n93hQyFRYVnF%2Flj47eijaQpPIE5YaXpofxDrCj2kTEo64Ywgo6arGjVCTzZn%2F%2By4%2BLx5xoTHRtXcC2Yu6rRjm1FluPVyTyneJBp%2FFJ4zC18%2FLJBjqkAevh4bMaJqufxKor0emc%2Fv%2BWNgaSFtTmlYFka06biHwkJsS%2Bd9P5aLFvfSRF4nJdXWfpJT4%2BkW2f5e8DGcLroBX2oiAi9n3K7gR9OpipLiM8XVBg1qXqAGnSNQMGJIN72ZEgiON4g547m50l349Q7Kf2R%2BuOV%2FQFjz0xViM3apKorAgtqyzHfLHJg04wC522SRkrp%2F0ZqGm8i3mY66jXQiI1f5gS&X-Amz-Signature=8705bf50b084a8b22908a220618290dd4cb734a7be2111505f775e3697ada07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


