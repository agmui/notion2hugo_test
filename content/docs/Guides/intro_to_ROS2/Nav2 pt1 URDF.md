---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T02:02:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T02:02:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=4ff67f121f492a055804fb3727e0022adc3e2a622c266fc287873c0653d904bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=821ca765a004b1385feebb4a947a2345bf0d147ce276d515d03d6e44e1aff303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=1e797b85df62a428fe0ae64e3bd67a6abe52cb5bda766ef6a9552c8f149fd43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=0b514f424235442d09b34aebdbdc91a8cd9fdd8665a48b14fca1110ab3b2d265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=a60f1a79942d0e4957358297e2ff54a9239517065ccee0d7a51a16ae8d59d8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=1d732263098970affeeac4ac2d2dcb3c6c523a41ffb0ab0b930f4ceb43f42ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=e3ab28f276ab0cac43b0c35e5c8f9338a8df28d5af6f591b328c10a308299eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=0ae6ed3aae4c16d8beba80103872daf97d4649c018a47cf3a28047a01ee87289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=8ffdc0e418226e2c658e191e45cad9295451f400b4695a841b75ca8adf2a13e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=4f50164717db86e1b216c008759edf37ee6c50001c6c744d9de0080f0fc5240a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
- xacro:wheel

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=ca30d0fb1f0e114b7ce79f0dca0d7dda06e9980c046bb980ac2c6a3602beeeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=e6ac105f14de9b2087a0deda2ce01503dce882b8eebc661d19d020eedc023764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZOGY5V%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDraxtdjzyArsCnC0ZefJ0fQdEqtO9DhSTF4BBDp6zNxAIgNM6c24p6ZCVOgvX8yNmXuJ7pNPnEWPbe8ZfTb8TGh4gqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2BmWEeaXCKu7ZssircAxyAmCeujsMz8ogpz9uJ3meP4JveJSDpNPEj2kW6ECTEtwXd4DTEiCpn0%2F0id4qDzaCiiOPvbBb37blc0T%2Fk%2BP7cPDYwAc8jriXgRvj43XSeU%2FnBf5UkXFzCQhxkqGVFmnXhQ8mM36tVr%2FbPtmWw%2BppVpvZX9vQDrKVXwsePzapiIOnd%2Fr4pFaHSVLPlTCe0WKgQCPvTTdzyxtob%2FQ1OUjmU8DwJKyBcKAKONYg5s6qFXI4u80sUx6UH3v54IRnvweHb1u7PESnWYPM83664qSgvKdOksBd9%2FrVaFSsj5oYCjthytpu4ypaa82cEVFm1CR5ZR1AS0%2FdUs50%2B0%2BM0Mw9iWB%2FXm%2Ft72Hp%2BSf6N5so%2FOFJaD1fVqCWG75XCRRXz%2Bzi2z%2BS3qna6rwzixrX%2BBeQ9hMJtsxqlhkBNry3cOi83lOQ0D58rgUUHhdrUOtCmOEjffRlJaW3hoqrPvVh6qcNwsEJ4C%2BBBg%2BKOeqWo6jaRn1n7E44D%2FM1ElzKyAOYPdu2qKq0IjvhxG5F0G5SN0I6Nc2alBTnuOdjRfjCP%2Fi6UugetqnCVFvZWNvDhhZ46lLGv1cscpTbWXiLDoDnudaNCYxytyj05QvB1ZiTaz3WN2uiqjPGJeioHKUG3MLDjssQGOqUBwF47n4gyqpGaWhhez1u3WDJQFDvNcszQkf0OJq6i4S5WDW412raQMPc2vOd7559kKpHaG0CTVHhq33SAn0xTtK%2FnXY5idwH3Ro2L7nZAxbxoDCZdy3K6WV4%2FpD6v3OD9uejfWE%2FiTxyK89cIB2OUYcDI440Sl7nzRmXit85QU91Hz22Nm378aXEMFzExRMPb%2F3gAx92PfASQBfP2UgzarXlGESQj&X-Amz-Signature=2525bf22150a71619ebaea62d40156edf1b7620be53c7ca093ec9d23e767a617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=77275a38be49fb87645fc3287039f0d3053c908eaedfb1ae7ba0905d5e378a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=33eda29db95cec177053c679c3dc52bc06d5358b548f7adc2f9c733c33df27c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=872adf723834c00155e0b7bd7ecb59672bbf20ff2a83181e033d702706197e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=ca2c4b1f154d09b663e0790a88ecc3a7c192b384fd4b41f86c1f8575e1ce65e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=444577e32bfbb24b8b86118acb3ecaa633d11bea74a45b2e38baed32919a95d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=a5dc6d2a15c69026a308dd64df6f57eda039f0ea452095abb54b3aebba34394a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWFLHL45%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T133058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJGYaEhM4AJ3W0vS3hNf1zTLZX4y7aH1kYxrmeBdFzIAiEAmgcfjARnhcMsWrRmbZXtM1rW0jeGgmRW5h5YkBobPL4qiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYgSb0F0ekj0hK3AircA6pf%2FuWrnsVWjiFAoZTCTFf%2BQ6BUXJo2V6%2BaMP2zJn9d3dw%2FKcn55En6k2yujvAWWAPdpTYotsFKXrQNhlHeqo0hGhvee2jt95zQHyEiDBIq92VQHoVY6ea7YTV7A2t11zAq9psvSAvOBdCsc%2BeJ9WIlHwYp%2BZoJ3ry4wD65L3QtCLPzLBhCz3yZAtLQTMXSy%2Fndgc%2BknAHmNWLStQ44WoK7ojLhGasCJxWSxfM32gUUGKFPXpp1mFfi9YTd4F9PVn%2BLBqOEEgMPp0kJeQmIhuRDn%2FCG7%2B1%2BJ5SLsoowJ12afGFDgs25R5dcMRbF2vmWOn8aXEze%2B5grAO8TXH4VmHO6PdhQKx5ixCdXNlYMX7%2Bn828avsbkeYBhNfJuAbkdsh23FXSs9wymcufsUNtXwwFC1cKTJJOsv%2BxONbHrY0b8%2FAsq%2BNWuEteJDyxN7YAEVlCy6AZhq4n3ENFHev8fWyn2hAAVHtvZh4rBkKlwWXnJ41cgwDgyslJNgDHy6RTlOXlhHcFKENc8m20L5uvDSbeareHooKmkXb6TFKS3L0FxUFnESpGOabfOTDeXq7WaAeHquoYTBLNl%2BYNn11tXp0pgkMgX4vuGWci%2BVdnElqB%2FQ4u%2Bdo7%2B2HVus5iMMMfjssQGOqUBGsaC3pfY%2Fedgwb6ArKwnVnPYQw3kyPuFt%2F%2F7O7qbMaIPJRmH8L4OuYEuy7N%2BKDW%2FstcriiW2ZLzb%2BqqTTnXqhxuqWr8VbVBzKEY2FyaQKzNUzmF26kfDcAEuJI0GaAtgoMVyyS5SKCG8kS9jenLQk6LJl1vAGeB4vZIzpb6PxMdiPCc57xAXHfbXqTgAWxSlEvVZhHg0xHFw70LiR1YrZ0P685m%2F&X-Amz-Signature=ef8c0a601132fc3309e78d83a2ff6f05d7a64af6ee60aa490c575d5ba4a7ff74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
