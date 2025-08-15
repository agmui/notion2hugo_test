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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=1de2b843308ccaf16dc2f43b0211592f5990675b9418f46a53437dca3f7ba736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=1db1d03f3d520b5df6f8fc562fb7f1d043dad4aed068c936a6f6fd59cd93797c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=1521b7501cdb31b23e0201f8756db31c382d20b14e4c0441c7e9d62e47754f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=7c92b65ae0e180cbb617dbd09c915eccbcea68ef1bfeb48c4a68216bb2a3c734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=7a57053a85e0739eedcb8ec2da75dbcd2d37edc4d49bdf54c930e044bbd85c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=409c054bf09774ba90e3d4553e2102a1c62255a14e91e6693b47d57c56892e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=adec7e5677af1547e3e8a33e21c31cdad7d1c63f6559fc69a40bd336f06b8a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=628e2e9dc52e39c363a4439d915508a761430d03b94b7e4213915c32fd62fdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=fbe7e9db3472d551f1ea3483bc5897b8da57953c150e9d0cc538757d4c3fe331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=9e73698567e4c8373e0cbec6b119d55b2b8c51ffcd70c9dc810d949cf5559ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRY5ZFQK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCGJqb1e2HU%2FKhw03PzjivjNDoOjxJlGnwn3WISfcCRgQIhAIns41Bwta4TbUNBvhrBnWfR6MgKp9rbxY6%2F4KFGNAGPKv8DCGIQABoMNjM3NDIzMTgzODA1IgwwlRbsnPvC5Xo8Ji8q3AOvXY4tozEP7HHezXd31LdSWMO5nnVv7P%2F%2BBY0GqPQpMOeQT25iMLZds0FbtoHZyr%2FoYVdwdUb7w9UWByFYSLmpKKWPGvUJ5EmyBQomzLouj6YaP5x1AA3v3Ifxl4%2FYDizExX0HgBGhLYfq2BT1GfbUsBm7Bvsb7F4u7hM2oSrcMgwiE%2FVlS%2F2mpysbmIPKi9JbewWtH24yaIN8smAA%2BEBE7iZ3PonxYs1nfUXc%2BdfTDSDnw2FipmWDCGZASaFr2zNh1LE4%2FdHn%2F82Uz24S9GSZgvJijRGXcbB25HFBHymZvvz1VKzc%2FabPnr%2FNY9kAuqRJ9ERXVU15LR2gYAwef5Xoh%2BcVKRH4alm0pfbz6RO3r00iyNjSWT%2BYCdW5N1q%2B6siV9BQf0m3AM2pun%2Fl%2BSFwpg1beEDwupNd6lgQMaHtNPR4EWBrUW6Zjj6aAcVJbO2raRICJEdmX7t7WeUvY8Qi60aL%2Fa9UHf04ngLTRx1P6p9nzggrvR2B4%2FC0JqHe6p3yBTyHNJC6BhfreRFwC4koCIyNIQgD%2Fxf7J5GFyAyevhVHHXAIusd40oXriLj1UbR4ETQziSE82qlDbGGtFpzghKL09ozos13aERR3kiw1fWUOoA3o1kuybaHmjbjC32v3EBjqkAT2nclZwYS2ozNoTiUOAAjW7MeWrULTdOKfl9GuOngmdhofkd0FERS2UfKPTBVFt5zzsn14lfb6E4Av%2B%2B3njAmqeQ3Gxu7vL1yeZm7M7%2ByM4MKuaHe6AugyI7%2BIlnwchnlJ%2FKlUbBdDv7PlT7aWV1BTHegMWjt3R0%2FXoofRtyiqWhfUafi%2Fed1hWMDU4fNwLwokVHQhHTrN081z%2F%2FMgzCzWrchhV&X-Amz-Signature=c362ab1f0401e1b0ceac20e7fb67e344a9bbfe762a8a11c1948c4457de81a605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKSEJKLM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC2PWDlhJQMPSNmrtj9V0amzDpPr7opHGtWBfSkEGoRNwIhALio9pD07sKcb%2F7znrhhsTyva9M3SoIjtBMb7ognLnv%2FKv8DCGMQABoMNjM3NDIzMTgzODA1IgzYRfPNUFml6vy3JbUq3APqTGcbCXB1nYgr6aBXHrAWE1ZHZz5gAZm%2BcYtq9sqUAFKe8ovYVE1LLaEK1Onx8y2Qzrt7veR5N%2BX9QGjW9lIRnV20Uh5RpVCPwda46EMjXD717ORIaQF0RffnK6bzU%2Fm2P8PxfLmboX%2BplIbsyQQhocchFacuWUPx14oJi5D9XtUJ%2F8mnuV998WqVKC9MwocObTnHZeUJYKvXs5FkzT5x1eL3fAeUsPdEFaT2q%2BNUV%2BTwuXFqzUi7HnKIq5RIlwd8oasWy11tG6NyB%2B2IM0wxABW%2BEdJGFYTMlWu32Inht6VbL1zsbt%2F0nCJRVhmk24GR%2BeEZQvBEovFH114F82P%2BE63k0a64h9HPco754CCkVsT1fkUAJgQZF80f5qGeptvej8bSsj8Kr8%2FJV6FMI9wow3YSOGQ9mJ9BzPz5LAKSJiqrq9yH3dclHX%2BYl35FqMRDJFZxzxp7VVagdhrgy34Zr5HkN29GutbzEqvlAHV%2BR0TmVnZsCSYxLaCfh7lt719XLoEIh%2FhT%2BLJz6UzJCRwAJflHR%2F4NvHR3TeRvlKbEQg4rfmfEPFZ2HizqYXhLDpduG1qZeIp7VmSXvrGikftmlnMPv2WiNBhmoco61ZZWiOuibJ%2BMJtv7gN1qnzDT2v3EBjqkAbplTaZw8rMMW8CS3sliVxuwaCuhffIjhmyySKjfcb7F%2FXA9Iiz8DTPa4fPt%2FaATT711cb1%2BIS1Yp6%2F%2BxlbHeLTc%2BWs5BfHfVOVoFYoQK3GYQIYq6jJSV5Ur6YjQ7Tz4Ax%2Bw35sKwZzCBMIbmPWsRa%2BRnPZNr6TynHu36RvpRXI1oSnO0xOD%2FeG%2FchhbHuItxPVJmNdfy7fL6acaa84twdkD8yY8&X-Amz-Signature=1f46500c7c9b6da9b2d88a1170beb49fc5387a1422875ffae5dfae145c27c4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZVKL6GK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIEesh2ZBVJ5DTfQErcWrJRvPZGh9Q9Os8ebJKolesdLpAiBkeiHa9RX0jza8Faalf2%2BEiEUA%2FOymH%2BIYq4hhxU6VqCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMIY2kYP9PSEz8irDOKtwDtLLRsnRp52H8vlNNPTNwIVrQifH8YEZGgMlKN4Z7Rw%2FworpydavsXSCRVOBUPkJO%2BGkVPcvJy3cUH2aEb7iJRSRWym4eKz9zsHLkBygPhvnCRSENSZj4bvP6TrTt6It5ECyuhZvIZRr6vdfHibvI37PgCI6roOfk50JGq0Z708CbyAZr6FZq0re19Zl%2BbLFNkmyA6h5lT84KZs6xVIDHcTKJVicY%2FN1%2FYqgbgngZ%2F1L1RkKs46zRDOcCCi23IHBbGKFe1CPUjb6XDo5nX%2B%2FWlfXBIVPe%2BVa0%2F%2BbZoUxVMKGcfciDbVhQdXwlaPA63LlMRq2LBSl6Uwr39NLFyfGg4WBdZc%2FFV%2Bu7xeuxn%2BKlHKR1rOy%2FNnotgLcQPNCuu%2BQUwvjbFdgjsS2EfLR1sz3866VH9sjJavkInXU%2BHHaVYOf5dqgAWKzfvGcljemCt90ExQJgY0VRgck8wL9ozQhY9yUwX0o%2BrJlqTY9nux%2FQ7BdrqMDslX%2BRkHBS6%2FLS%2BT6T9loMxeXj7ViTYoZCwiiaDvZpWaz0%2FckUaj6t0ExCJuQHC06%2FQJKxOqFgb3qhADw3Jc9rDqBpwac6UuyLrteIgufOeej%2F9X6x9BYRMQXIQuTzJV9rmGxHxPB8Be8wt9v9xAY6pgFuw%2B5H4edeb9b%2BKsY77gksfdklPVchQM3RtaaTAIfCx5IDJPG78UbqcjTv8Nx9VW6z5KcqKGH7zo%2FH1g05B%2BTSmkGIQ1%2FYhdMHw4UJwVxmzB%2FO79EtZWrQMmAGv93lQSP2AKI2pUAOJJyOw4li0s5%2B%2FLYeV0o5dSOFhVPg7FqMZLsFpUtlkEJJ7oUdgOlojroSFEX07JoqKH63eCSE8Yqzq51vpvVT&X-Amz-Signature=db93aebb1cb44257f389b28c1cd5f9d7ad278488f8acadccb55a5cf6ab432b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=169ba2d4698faa2b788266839759595aff73fb510bcbd25e4e1b1b2457e6acaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BRIHAKF%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQDsu3wjhw2vFSdiwngVYQyNqolEFAiPuVHj63Ei%2Bua%2FyQIgA9cYbcWpiCTxnEVuE9fC52OVjtJGl0OKu5mETNHVTFEq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDKnnyqAFcOEoLs3YuyrcA1oqZfZAzhnw3BP294ewwoRmhUU5aIsGPSNYzaehBIJ2JZm7XNycyEWorrsu70r2GJ0JbqD%2BuZ9%2Ba4DzZWGAU56t0M4xnNYxkSeUKk9NV1WZjLzZDE1yvETSGCtPzBa7lmvL1FIjcYTRlZXjSnHeJ9a2CicEF%2B%2FRlU5w1CQZYy7XY%2FnmgfU1Alk1pOiw30ifOR3sC%2FmWEBDaJtbuHYs6a4U75%2BuNcJxrcpq%2Bl5GqxyTe4B2vxLlECSKMVHl3CRUeG4v2ugOfjtIdcgXT7glLXm9CsWZDXTHhJnABt%2BNISncDh1lLegxWT7t42osS6MK2F8AKD0FpLh%2BqZtUK0A9jVCF2DhEXGtcf9ZH8UBAYft%2B4P8Zdc5TPTxeGTjS44H9cLpcZqbuy9Y5svgEkBT68j74O6cn%2FPdvWDKCMd1mpjcilcvHJm98YnO%2FqDWk3WZDfmz2Yijm3%2FJqWRTeupDaK%2BvGrWkmKYqFqUCNfEA6MEk8zRiw9HExw2Mt2y7neXcNTEdRo2sZ1aGI1vxuP9rFhBWgvEuGM7eTs6Zdo05tMJG8l0pA6Tb7B7HSWF4WlrNH%2BR1kZHsKfuCxHaZ0eyFtyrePiveJQJqEkAEOXHDsSuZhrSknyTv9NQkZ7seffMOra%2FcQGOqUB80hHIaVk4pQ68CCfaeAeHFsABVidtJnlp4CgY3VsNh6MzYElckejF9QPGiugWF6Lt8UTCfc0LkVqBKZpmZ6Cr6LPXBEFz9HNv7v4Pfh1c2bkPCwoG1Lwluxl8dXhKDLsKvBybcirRbRbjZbsKi0dokuCGzvRLQjL3RMEQLGuYj14vbUD5Wpc%2BAYPc0KGN5wTWIcrlandiHZsaLiyo6tcwIROCySM&X-Amz-Signature=e686082212640b7abb23a66279e890aef2d53ff080a1e01eb91e61db69c7129e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=d9e971864a954f04c167049cda088c617d0b22b8d82a27652041628d8d94a063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LNLVKJ2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIB0w7rw6%2BM4upaC3a0QQgGuBAV%2FuJ9tPUNH4Hs8h7B0eAiA7GlEEi3Bos9YkrIhHbmFKpHFTaVK2cTNCAvlb%2B0NpUSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMkfLXg0uTf7q1RWfFKtwDMDOFeCU3zhNAGLvMS3vnL4D%2BeIonZdm9stZELocLf%2F6Vt3%2BXA4tRomTWD8k4IVGoqF8sHlqH6xvP%2FbULv1xF46sjHh%2FxULbsT12HvCleFsX%2FLSqWn5SMnhISVsWJp11ztBQ9qJBrzLsgNmOnkLWiBiDBhUy8E9iko8991%2FJpAUhicI%2FmoMAqvxlJ7g43iuVxsE3NWhANMP4Z4KFdHGRQ3c80aRVBLMXBKSah2NVWrTp5fWS0Gk8EvAn%2FXt4chge3zj6k2cHPGjEKUMG6i7Skqg5pQ%2BblEgXaCW9ITL0rck8uyyid%2Fgtic5TYVY14%2FUpcT2%2Br922zV2uf%2BtvaQKKzoDY5rhatLrHb8YL93vZsmeECABk49PR0dHPNwzPBi33qbreEWykA3tDefKH%2BYRuySKGeRol7%2FHB1yXrIG4MCEZ0fCLV%2FTmFOC2Glbke22Eoyj8H5YRRsaulLj9uA1q6hDseVu9PAQw7tJpEtuTTqQPO6CQTKNC4w%2Fgmq%2BhOuN4c%2FjDntGq9u1pHzPuwpOpHLEQV3mSARwo7pTmGXX7JqaQS41yc9VXk4V7qi3uQorh%2FNa0Xt87SDr9r8Jsr58zXIFM7zjOiSPFQipCl8knYGbtOnMjr%2FC%2FIlzTrktu8w4Nr9xAY6pgG4Qano0QiV%2FpuCuHiUGk83ImIZRh4snvrUrXWj8e0v85gkm9Tzwi1yBEczA6R5uKF9LWlz%2FAIjQfCVewg5lz1yNNExpxjYyL21SF0htI78aKIEcwF4VIkPOhHSZILTRb0Xy02W1o5DfF7J348iwwFs5a25DT5APiwBXIUX7Yxmvxlr%2FSwx8eMwpKdBomVWdotZZ0lTjb7Ybcs2VmzEmqqJ%2F8hjs1cs&X-Amz-Signature=b69fd2a6dd23e58c5b8cc36b1a699867dcd3a068bbf44f01d3da4297d9c67527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=5ced93efb404ab275c7894c0bac7dcb49948d62a5cce6344281cc7cbe0eb0ab8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZMPWYD2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCxEJunS58x%2F%2BlQLxHMzi%2BKNYrPDLiciP4YQjAuge788QIhAIVqFn%2FpNLAPgCfCk9i8Av4VgSRQFNqoJ87jDqjuZW1eKv8DCGIQABoMNjM3NDIzMTgzODA1IgxIxIpdqXy62aoQgewq3ANEZ4da9zOxTaJhuISJtYxk1TikhXhFwTWAmXq2qAe3W1Z8GBjNSaYIQNQn2r3PUhBBkDd0vW%2FkFzOdkU9x6yes1axc5OtMKR9RmWZyIBrpTJjIOJrVlbPllIv%2Fb8nfz%2BIaAxHhrnG84WL5FfduKxl6j9UpFCQy%2FuYW4oCeY5iCxQr%2F6oajtAfFKj4HR9BIZmF%2BNC%2BgQcTNKYtmmqcwdcxAHQLmQeI%2FRPc2%2BvA9zPQMI7Kbuu5%2F1yrlW15xAvGNyJVZhnGWAZkebZEMYUVOZpwBFJr%2FTAifG4QjnQ9T8NB7%2BfdRMLUUfnkqJvq7DILkGi4QZZs8lMB9%2FF588aQ%2F3nTJpchcpiYWTdD92jN5zGAwpFS%2BtMINoXWCFtRfJCQSxp7QfNT3VWsNL2%2F1%2ByTZ%2BhA9rh6PAXgeCTLc7vM5pDLzYNBungtrrNrUCoksNnoTb4qVvWdB7UEueEhLlLjZ7a8ubaMxRJai%2F1HbVu2lrXPil%2FXzurb4DU0RiHuTr7eK51qybLhDx0JNn34h6ks2gIp6Gm6RDay%2B868i%2Bcpc9w9knEqcAmdPJbtnpgvHRZmTkv2Ih0y%2FaiSom4VcE71pdw84NFey%2BvAK7zqCNiQHp3R75fHgP%2Fp8tx3RncDKujDn2%2F3EBjqkAXYwHKIN8pnFkOBidhuJycI47uEbcawfz4wGULcmpRdscDUXpWUA%2FA6ps5yvAFNqrhW3X9pWNFSWngs2j8bne%2B9LxEYURuZULkAIg59%2FhmUp0j%2BlK1Js4J5Xjwl%2F3qjVZ2uBmJAN9MPLPq0xCMBW28FHOXzVis88MtcpYg8TaVfNudPpjqbs8FSk7ejYfz%2BBaZmPigdBvrY%2FCJaUfY1De1%2Bt%2B%2BKI&X-Amz-Signature=4f1c86abbb5c902047abc05f719d038675b91f35fbaf83ed67191355dc530fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=0de24d68f8884d6440697609eeb17fda3ca62693d2074945bbc227e1400676af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNBL5D4T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCIzwugoHQy62uqbxsRz2u63hZ5h5%2FA3SYSByOqHYYNiAIgSPqSfzjGlK12dk7VmbqR%2BvyK5314v5%2B3vPKy3eg238oq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDN9DgiaaxWf0lRlTqSrcA9Wvpf9pm%2FoMwmpsgnTUe1oxlvCBCAJYd58bx2WK4GaHNd4SbTdKAyrBYZbP49byIMRvvUOR7fwJGW33DJeqcNwFryOEuS1BeOk4ukfEPoQsLAWr8noBINpMsvtNQgRwhdjXSPluERiBmLgJI1iwxWgkUE0t9H5bReSlKABVN8Ock5pyjDkd7znSVGWviiNTFCC3O8DhSiKWOg%2BnaxAO9g1Pbzf5Hw4AyrqbpKALIrQCmAjpBrHrGwmtu0GHfD%2FsMdFiYvOwBpX9XrxKvuCHfkpCbgLgaB7PKcK63CfE0rIOth%2FECQFLamyvUz1COV4INzaWZYMJYke2wqrkkHzIeWbVmYdk%2F0c6Rsxj02hXltK8NxyLReW1zNzUaCwT41VbX9bkNFZlVIc8LY%2BYmdLVGJ3HqcOh%2F1m0TDVyPUREsEnjTaflT78RmG2ZyWVDc%2BZ1aS1yhwrYS7L81fViWFnNQUxat%2Ft%2Bqdi%2BCTuKgeU2X76R49Cdu7hIiMm37dfVT5BkEktTzojUK7Sb4Nt4Dl%2FQ6ENCm9IIpQhP9hJolHreqyQiMIVezvBW9%2Bn9I5qKkHLoE05CldV1cJXfFdUtEGhXV%2FuMqEY5WRmIELKI5IOhWOZZlROdRzC6DJ5GLK7RMMza%2FcQGOqUBNegt%2BWBMo%2BBNgCB8vDo%2FVrg5aCUikd0NOXViQgPjevaOU2TBYWX7tkKPSnRJ2l6j1BPt10PmMfu4M1a%2Fdk%2Ft7MQMPqWSl1hs40zITFMILK9heb%2Fgq6we2WY8a0YhK23BjQkZ18sy3hi7ZW%2Bjmnoi5R%2B%2BUdet4JkogvOvc%2F5NCzwFk2fbqyy4B5598fehPtl%2BxGwvsFam8zjSn7JtgK08%2F49GnuwV&X-Amz-Signature=35af00bd017a29ca4e324778a5e8830a9464838e6b9cbfd7620dffcb584ad38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVQT7OC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDt2PBH%2FHD%2BIdm%2FEHPYrfIr%2BGI7spci4KE9JzxpTbdaEwIhAPs0Pq24m%2FcQX2Rx%2FbzyIGiN%2FcMnhKmYWM97nVprfgoPKv8DCGIQABoMNjM3NDIzMTgzODA1IgxhPpjpB3ZicMtyFSsq3AOJ0fU0GFQUelx9U%2BwEYbFwLVD6KlOz0ulOlLNfcWiCV0myG%2BeyQmneDFJpFxGv5E58IwgGX7%2B8lyDnF77yV9v%2BHdrbqFWItzzUU7PojEEbov30Jvg%2F%2B%2B%2FJIP6oTFkaGW9e%2BOnGEZ%2Bd23Iu2F2affk5xobXoXevY355nCmtf7fCynFGp1xaSwQfgJrAVtE7mCgmIrQyQZg8CF9uM8rh%2FXVIg1rtMVscauchhxRZWq37VNJdcSizj3RRM%2BfhAeZC6%2FmlYwCv3eXZzTCCz41QdpIfK6y5Yj9FnuTXb21gufg%2F0tlD7aq4RtndfZfROIzr4wJE1ogRs5snq%2F70Qw2yCm63L7pMWuoBWu3JzjxsBXPgaK24c5vCR7mETULyJMg5ljfMulhyaJMmXOvEGBme4l5GnStr87CGIDfn9ULnB9pfu8pZwPZVzKJ0wanJUlFEY2keyNyp3VBVnXi2zfg4e3HqzwHqN4o826Km26wuU23Qjj6OaFksWWJtdu9W3LlId91yfsST5M71VIreSNuRDube8AYIoAQ3HX8gOwW66xHs7anew9t9FidQylUqxgUmftRYxqySsy7BD7s8%2F%2F%2Fj9OsyNA60ce5IL0XVDsk%2B4uhhnyAy6ass8jr0eMR%2FLTDu2v3EBjqkAdysnJvPPXD39QR%2FeJiDbkwpVjUUi3MHXz9sfe8d%2FCFNflMdmTFBU4mOvRdnJWMTR%2B3ZXHAfjNIE8Au4bbkVZCdzmZ4cHjKaTgZezKHjw21ZomFFGoYD46LeRIbSdTS3sQtuv7CX7u3QqjSLgDG0F5MsDm%2BJ8%2F60ZBiT4w0kqGKV11k0HWbf3DDeAToWyy%2FBdPv4pnajwzga2Eqb7ETpCR689wVT&X-Amz-Signature=a340e750364e8b34e818a38bb30645a32ddc3067342b89bb7d08c3de5578c311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW6MHE6%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCnfH3A780JB%2BylrV6JVg63qQ9Goy3iTWb%2BPYtU3kePGwIgPPlmOXYi5Vk5r1FFpvFi9dIQFq%2FudKkW7wmKv9DCXpUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGd3WzNjXQZH3FTkjircA5cy2zcGEXSTidi3R4y80Tn6AhdpBckN1gVv5x9y%2BSofOQbPqFLwDmtbzSYbin8luYwQS2KmmOhrxhpSU2%2BSaF7%2BK4YXAk5QIYwgR0oWf6o7tPY6Mm3dZH46UBbuJ0y7BEGQdWMnMMAssLss%2BLdboCPqCrhD3E9NCYBJV1sjElhtbCCBP3iBx%2B9ShzrBWREOH89ebBkOTZiYujvELDG4Yt62y6esIYY2mMZ4XAD0Cg%2Fy%2BAOvdYmxkjS19VYSb3xSs1nhCFpe2kYWeboN2lxc6iliN2mdqZfvczevWNpLmD%2Fihlt9nS42wiPK0kGY5nXfMbBAn0GfqW4GzJrLWuExF%2Fd3mgJQ7NnBd7NMf5O%2Fe3Y2p%2B3ibeCrlGASK8WZgV6molCAHTah%2BC2O21lyrVIFAQ2RXrtaTZ29lnvZ5GMWaKLTztv8XeOik2tSMfPTCExuBArEWk1Dml5ppSamxoppWCBeqtqGXMGr%2BYTxzpn59UrU1eId%2Bbg2pfp2Jyl%2FwUvtX%2F5hzDOWpVRgTOBBLMHxJwi%2B2cNn6H%2FcFjCDRcIkbGLacM%2BHDkM%2F7km0bbOnVedDYu%2FuuPHSYZ9hgRFIbLjxEZz7zNw5%2BF3xzqgRHM25BCwFTNjj%2F%2BT2T3a5nKrxMKLb%2FcQGOqUBnJO8klWKKAV%2BkNi7acLQG9SNOUPTOhjdm5%2F%2B6XlCSDSC%2BZopRQAJBT2jsxu3iF8hXdBcNxJMw7YiqMkE%2BMJI%2BmMnHVWc6OC%2B%2F0KGY%2B8rboJjP2r%2FHcKwaW8zb06efZT7JTNxf9k8nMKhOY20%2FzfIDIUTueOJbQIUslgLF%2BpAhAu%2BOJWiOMWJzRryAmguE%2BbQ97W%2FpEomEGP8eL67OrxyykoCZPDf&X-Amz-Signature=480f3b08550a2948e011f44fa5342e69fbbe92cf43e9947acf8cb42903a9cc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TKZSWGH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCc3gAaIRW5mEev09U5%2BknM92L3lPNT8LpMT2G539qsRgIhAMBXwMaxbMJEXcrCRMIOPzDtXVPJO4n8ugmSZe3i98cQKv8DCGIQABoMNjM3NDIzMTgzODA1Igy3CyuGygMwRNYJlI0q3ANfBCA5zU7nE3P%2B%2Fm154foNjC%2B6aI3vRXnmYlKp5IIWJfMOpfC8gpxgyPVMmVw6eak6yhRxAKiqnyPfnkNHMp5t1oIk5AswTCR%2FgKta7RZZR5fB%2BADrlufben4mX6ovX3Ux86j%2FRdU7aRQ2x%2BfNGo%2BnL6iMHbGqU%2FAlsFlBnK7Jwqw2O8eESlAAUiqy9mB%2BvxwbmqhOUQH%2FzZ0O8FdkY3Vw9y0chO0yltXHLTl6%2B2Is6tLWkLaC%2FXRH03u0A2usCGnJdGfTMQVnsUFtpUf%2F27KBN%2B%2BMaoRDxvON2I4l934kfS2QPF6AT0YPSZvat3OUl3z%2BneZ7AyGu4iYZarWttowP48WiKyHEO5BCoAyUI9EDQc4vaMX6ELumkQQXAGel26sqpHnvgku9Txkwu9nOKO99%2BNwG%2BikcVn4urni8pxyoQ4bkldouySH4qKBUSbzS20JJ%2B5zXj1le02hWp6du%2BERE51Byki89%2BkvdK8hix%2BdO7GUuA3upGKdjcMaqt5tYG3xv65P292dZGgFKefalw%2B1NsqX317C74qHf01RCSpKuuCZ80Kk4aclKC6gBavpU09ZNc5etWSwzlHKk%2B7O6Nqf9lpkiIcqjXCTlphZTVMbbuSoTrYHITdSdfyi%2BVDDM2v3EBjqkAXTNxGoOTE88hBn3hcPhiuc%2Fav7WePOPJTiootw07SutY%2FpuCwCnvrLTAEtwjgiPQZZOKj24dN57c0vXhTc7JOrUYrrgu99KxktsINdsg%2Fqr%2BDB0Kr5HMvPV8gB%2BXKR6%2FYoxAwzlwIXyTi4lqCGpgtce3uA%2FSQEYIpenCoZI2MsPq1aZ86ArOWd8Q9dMw%2BVC0TJ85mHkIEEdWMG57aL3IlpSc4Hz&X-Amz-Signature=edfe20fd9b041800d9546131581d9659e5bc91b47b8f85cd7b6efde67cfb09a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNFQI6B5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIBifdbw8G%2BkdrIGuRwiG1bwN0jq63pqVCR39x3oVb6kRAiEAhn9hVNhE50Om5%2B7N5VzwD2DOtZTQbyoLBW15blUlqH4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDP4mi0h52hA%2BSOUDLircA%2BWWIXRWck9OUxtdMVMogOKdnwouF1lk7bCMmEBgNtFuPeoXVrNRa2DRLFljRXYVnSwAJUxwdkfu0Qo%2FPyVSliPvZGXqmsD%2FhFqrNV57U2u%2FYU%2FAKAPFcTjJE9EPlf5CJsBufCti5hsBb%2Bon%2FPLX5Olb6OajYeCIlfAuFqst%2Bn4fPZgvbfvo0JbNtxIEIYtO4So5WVe1Qe6Cm%2Fa1edRA6RiDSaXg4JTtqtXFDE8JKaXu1YbT5iTy6dj3b9c5EBpNNpNLPu6r3WiXhfHyfrDnaFntIa6iaVUYTafzMOJRThLSnzK1e%2BTmktmspNl9Rro8GM37voYrC%2BHTya%2F3GdgIjhUIwykutDrEeeMVjdrMROOYomN3g1fb20KB%2FIU%2Bhl6xCTwS6G%2BtvfkGti6JG%2BfXOEGuNyqW7SEfPujhQwfCZZAxV%2F%2Fy7YlIu6KCi1gWOOX7Vt0uW27yIydHCYmIVdlBdFR11zV5J99R0nLG4P7YRVE4hdjVJh8QxogDDLgW8e4ecbuHACGFC9ruP6uq5YkgCP3oXikIAsKpRTWQ84cf8ev52Bg86Dp9UjFiCqvvt9H65OK%2BEyU044f4XGPPQHKEBNHIHNBLPkOgG%2BoW4esLNc1%2FZGzmpDjduCsQut2eMKva%2FcQGOqUB%2Ba3AZwIh0V3hFg3ISeA5ljtYOxgRAEVnPa%2F1zKktwNQW5grdR6LAKdvG2gnVUWLWuJ5RY%2BV9pClmsE1jiKDplpP06NE6p%2FbQvdAGQsnKqy5sULdly13IIGf1lbfRg6uUJACJ6zfjHS2119UpX%2FZsYediaBoHxZnNmxPUKFTX0fMPaM3Hd1hgoMSXCbw22KnuvEhQXqvomOThibcrmTG%2FbeNtzsND&X-Amz-Signature=3e808a27785c7570b84eae433b553cd0e08cab0ad27be15c7c6f73fadd178815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=219b911f444f512d39dbb923fed5ab604d30486387434654ff35a45f6c0e187d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLELDKTV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQC6TTKUhrW7wlMKrE6RfBOVELKv4upbcEPAeIFHpNuZVgIgZdHLlURZbF553P3zYZ%2FsTKNVoS84a4%2Bm6PhN%2B6%2FpxKsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDPrezfDff3ZZigiLSircA5yLQM4R8KMmerzozbApP9EVGtzgZzCd5JXh1ZWmjIhWoWzLX%2Fn61ppWumoGvjih0c%2F6EozH4j%2Fx0gBasNBWPT5km8Jfgu2UXcfcQ1icTcRO33msYuYj77azq8cwHlOhbOaCOXSOvfknYf3VhnrOt3G7hvvXR6rMBQo6DiO2kFF7MTCpYocoen7pVIO2M98PK2qY6TNeeJiM6A%2BqqB3TKa1h5ZHh8KOk0tWQp37QGsPE7K0hohNG%2BM7JaRcyhII0QFaHGFWbTuNKWo9x0pMxEGrYPjPHymGFlg8cH6HsTG%2BKsGS61Z34dI7XJHFyCFRrIaccnkXVXqyxfpPQxq7D41BTTQBlIMuPmkJM5jB0S7jzpHIxm8XRGTRKV7%2FzsgRxkuWYw4KwIiix4t1AFmvUjiDfsEqp60Eyw8ZTtxesf9be6S64j1IJLBYKnDAfAxlK8ZaWwCOuNATCGSlkAlRUIdU3T2DbZXvzzc9ObZ5oAxB4bJ1TTED73%2FQi1inP7hID0I6XaQFmCyTBHA23IXP2%2Fpb9bc%2FDfiKSAXxHH8Dtd7IVWfuebL414BZ%2B9xlKwHsupvKum7UpijkyJiW%2FzJEl5bkTlqgYLC1QT%2FKqcerYlaLqg0vVTieMikinD4baMMHa%2FcQGOqUBQJMefhRrYYOPE2ZoP%2FVSw8TbmRUCuzk8ZSwdXnJJNw7jiU6byzvJuTxi2TsHgcyhjpx%2FkdGYd6p8fqDrJc9VnXgEwcKQvsxl8W%2Fc7vn0DoquiC3JRmqhcBZDcBsw3m8jLo8vLCTGu2Nvn7SqfpH7xfYoDS4kjCnt%2BfyTCzH%2Fb2TlImmgeS7yp4WGZfzi9YQ9tTZMwUgU51dkPcC0h4Lp03i%2B7wkR&X-Amz-Signature=6d88e3527ee79bd6037c7e8d0212bcda7222a0b00dbfa62bab6c0b2cdf5da541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=fae80a54ac55a6a08dce3a9760d7aa951b35866c46053fb718fc925b0162a5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=0641ef4ba35b8030998861983e699dad32b2d132ed65610fe5c01b6e0e980d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=c3c93c7b99727a62a9956090c292ec19fbc354c184c4745ca3131331533dbe17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=59ae58bf43b68adf00dc9218c58e7188fd54d713f600346ff37af3e82ed87230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=3ed6193ee2c528e9cbe32597b33f68b621a2724823535631819c4da6ca89d100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=4270e3997e332d060a7189a7208da6b2c3658e86918d964469b1033996a095f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=c191fc9c3eee323835d75b5a4860c42ec0a28b60536784f5560bd172bcb12c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=7397e44ad66cf0b2473b0ff0ad0a3fc11eb8f951145a8056db7f78f4b3437127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=146f7395dea4becfd42fd726bacbc8b4a0ae86d40ad83da7fad3c5a6bb51de02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGZGO4EU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIBYtgIoOI5k1HO2Vac3c8UQxZuJU19bHOr%2FI%2F%2Fw0QAXkAiAvyvAIXY5MzWdgvQrRGN5WfIfksJmdxSMP9Gu1TDu8Cyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMncU1h4zlk2EQh4UpKtwDSq7GESKSsMoc8I%2B7wTOqDp%2BAlVM7DvtETj6PCP587bZhugRD8ntKlWdOjW%2F0yA0dk2XQLazS1IG2IYFNNCwR%2BV4JTPqZd0OHVOmyOpNGkQnd%2F1mBdMqub4xkslIFXRrpfbaTzeBZ%2B5fTt5d0etkDUOMXwamxvyvLQ2vcHJ7C7zK1dvlj2Hyp1TkF9qvccJHTsH%2B39l7FHO9%2FQyM1kwE8PkRNIjt5PllxmM2YGLXAwpq85KounpxdL%2BNv5yKxKaXm6cfkCej8cPe1AEKHifB7SDRW%2F5dBdA84MnAw91%2FcfnvGMrjLC8BpGp6Ensmi2cCiaYBPVqQfVDgJp5OhkJafvRzCAqvJt%2FH0SdBXXnN5XTfh72VOs5W34nStL3u8ZIddGPBmoBnnRy8dL9yalrORmtRcm9T%2F35h2%2FVYcxdT7TgXXIZDJwo44VF0u5dnvrc9rjlVR8%2BTuOnpxyisQpMvBaWTNUykDkCZjGCSXcR8vJWqQ%2BNsMRGzs1Q%2F5Z7UcQmIs44IQyEAzkMYILi1eyJ7I5SJX0KZJNNozRcimjPPMZA2Fk2FbcrSdI7mikvnCsRKFMc9ubaoRcWM6qVCabSChQIluk7XcAfJ95HdTRBAyot8y7EbVPelSetgRkmgwzNr9xAY6pgFVA6asYnPTv3ULGf9hkx1gQusnPEO9lahsgYMywaDlXzALFVgZ1bvF3dAsC8CbbxVD8VUBbk%2FFftMShwItqM9SY4i8p9KtlLXn04JwO3F53urlb0RbuerXn5%2F9NhDNwSKjXkskU0i1pp9u1GbC19F70SUVQo17jk1ts3yLHBmf3TUJZcstaDPqyZ0i0fxd68rTYQ13W4bD%2BRzWN61PVE1iK1HzwHUO&X-Amz-Signature=8531abaa475902d87d12b9816e61be90c78ab9189319609cc23a9295fe9d841c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
