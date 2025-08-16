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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=321b686ece5909b2c7168ad25438b6fbed0acd8fa200eb32112676ea019d6c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=884e9497af23a72ead1868ee2c23e917da39cf92b024c8cd51bff4180871d715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=6e852293d463f75d898c7252fc9a95cc03d632e0e3fd0ab90e61162e90a674bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=000d22e7e67cd9da08152d4961a50993ee5491129c65234f7b0ff56b276562b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=cdbd3d5420b97c2f2707ba575a4b1784240b79174f4ca382c8a0d0c32d7736f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=230854ec994bed3ee3696b41f1b03052863f39c98e6ecbea6d1212aeab1d618c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=82ae5ede15968eb02b50f1292c91175ad25e783e1e0eda14b1cbb409dfd47cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=fe9420b6b26abd7faf6ce0b319efbc124cb0fe83500d9db7a151f084798d0bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=1b1cd1167b31828537c84ae9aab7cfb265d4d45c7caa0ddc1a9a7ca174882cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=49b32599d6619c01dd6a36824b1c29f633852a9afd7228f79d05f99d18d7bba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7B4IYC6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDQItid4zznbSXszqIBXqMFID2mlW%2BDJ2QGLZndYAUq0QIhANot3nrydq5nesZhD1%2BcnGRQkDBwg7MjapPw0cb0norbKv8DCGwQABoMNjM3NDIzMTgzODA1IgzijwrhwFoyDO670MQq3AMCbvf%2FJUwtiTrPVdd%2FnLCmDviSf8b4HpDHKutl59jK9RfeNIwzk6iMZ4Q5k8RUlE%2BMkHA5KTHjyohGFB0a62R6z8JkY%2BxmDSovaaNd92lBA2%2BuxwNKLic5NnfivBMugZdm1YOuDUMojDNP%2BEtgnPWaIR5qyiPItK3NfR4EpLv3ajv%2B4vm%2FT%2B%2BFLkcgu8RJFheOW0lNqjod3WkL3%2BDbMucaHFnU1tdPECkkJJC2KEQqOqjhPJsJiWGH6ATTy9nuLWaQBRcbuemwx40IMrk06pvE82sX6zM48KFUWTeC2q9AlRfPaeYvOtRsDBb3kreHd%2BagZW7HOtHPB8w7hFZZjrL%2BXthkQB2KqgUigZZ4s6mEH7M7sG14RIrGiJ6g8We4B7vzfQF16zOXNVBIXDOvxErL394jTZknkNAqUtXSnceG7rNfhfhnQgk%2FEFyFF3%2BA4JzAz2D7Qnl9BNtnY6WLD82koFHKAbVjPviCzxv7TNZL5BynZEJy861vhr83MJbAuGK3QP%2Bvl3UJFBgm%2BkygYKHlonyrcoGnM3HTvO1THVb4%2FPzl2f3x9HxkX9wSWCw4iiQJnCAk80k7c6w6SgJSzwobonW1P%2BkihPaTFFk234WNK82oOe4pg2oAGKiELjC65P%2FEBjqkAaFtK%2BKa54yYN6nz4WnPJLxfkcq14KyRqwb%2BotN5U6Za9I4NyM3HPxIg1Geb92YspeVsgdeEKNKhWSqqVBNddd%2B4ZQatFAgaTXtU3XerxduiCKa9Miq8HVOkVz9VXo8ixJDvvdbmNNp6O4LD27210jCXQJysHgzAyivPdCZ4QUOfrKcYPcJypMWIcQpa8OlEvSNydl6Z1yVS1EnH%2BGnX1UVAuD%2BC&X-Amz-Signature=1dc9b23fac26baecc7588f6fee8603b02a8837a113209a211247b4c03fd5aeee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS4REQCB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDXq4gxxwa4zhYvxWRB8mtNLP5BfAunlWrVFTzX2ZVibQIhANuwELRipNHK5wmBg0AVsveJP0dOysL8FdU%2Bllyiw5tnKv8DCGwQABoMNjM3NDIzMTgzODA1IgwnZ%2Be4yN%2FNrxY5Xpsq3ANep8LqEOZQ2NIM26S4gh2MvasvTAqpR4eNPO1xugy5UxwJRXPZCACQOJ21eLtPO1f6kBv0pEgc5UjQSJU7ZSlJkgmRudEj43mymPYP1Bm3oFwg5X22%2BoaYIlxbhWKUJCJd%2BFr8aJ1mPvurgqNc13OPBgTo5Hz1VfSd7xgdjfqd2cPihyHuzd5GI%2FbEOvqYLYgoSaHQs7ik3ufb%2B033g7x7CClzL3cxk2zVwc%2BVgsMNqi6TFDpopkX1ob0Tc2jr2%2BOYk%2B%2Fmo6n%2FxBsCGe9zsWKpT2bQEjICF8m4YxYLz3IXm15D4BWXRW%2FZuhVVBImwrzU0ETsrh3GMCqAxdqnTZ%2BAUXs5X4DElbSth%2BmmDNJxBxVrjzSRpjWjs4IbCPdznE9VLuSvKy03lhir7OrO%2BEnqPY33S20hQAgzIlJf9pI50dItvbRB5J2Jljr8uTq8sFteE4gA4PxvMDg1BoZzG%2FStgTqxkhsVqLhEC6YIKxXoW%2FabZ0BOVlyPPrsA7NuGMho2VoXwacSNlNtuM9N3V7yFJ7hQ%2Fg%2BFhIoeHhU%2F6Vvlg03lsToP0n8bsvHg%2FYTI1Rlhbvt2EAGUp%2F7I6VhkWgzO0TSrsVZF%2F%2B5pfeylTKKCXojcqx7O%2FaSJat7qJDDCp5P%2FEBjqkAa%2B2lFsb5FkYEgN7wbvVOccfLNHssHPO2iQSD21r4CG1eRB7LAuprKJe%2BJ5qrrhCZ4RF48gdvOCduToz3uN9f6hzSd0V6POoB12HI6f7twbC5DVn%2BfBtt%2B9CPOGzeRIKJZonfEIb8wQNkgH7YRLp0JDzQZk5j3N1piESN9aVRBeKo03TXaYy%2FV5bQlBq28l%2BKWYmHGdGQnnDA9dCkjMv4wVM%2BCNX&X-Amz-Signature=328792a3929f0fe01c646eb65a19f3cb55077d1271fab99c70d12790637de99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REL62V5Z%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCoMzQqF0hK6pJ9%2FoWJl6ophCoWrMq%2BHmjuAPsfTDeMPgIgQr8RYkUBCTEqbAoZqZoIrmhgApkupilHKg%2BUu%2BlqB7Uq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDIOSJR%2B7cvkMGmBwgCrcA%2BhTdjAMiBdb3XpU5WxoM%2F%2F2SFTMqGMdpg4WfbBUIwxuXuqY7JkW4ATE9zgrRjV3yrTxbh9IIfHy0%2BnHu5xl8U%2FPZiwdcuPsL5x2j56a%2B2ogSSW1QE%2Fzo8eOk%2BZVWGOoE8uo7moeA1rM55VExnJg%2F4T%2FcvDjEBQSKvNp%2BlP4LpaJDUygwlwXvaLB7ZHV%2BFvD1d6a41f5ziacxusAyK3U0vOsp8RBmU9GHiZFUKZrdTh470bYiT7DLuQqe3zGB%2F8w9FVtymZ2CqW%2Fqrz3UebYzhYg1%2B91gv24Kbfr%2F9rhoWv7J68AB9xY%2FRHwqt6wlOKeeKrMgcwsfdeQ9LyogolRcHZFRPi3SREfYWPaa8DS%2BR134fWAeVE1iZyWwSnKtx9dENFd25tMzqt5QMjma%2FFOnKIm%2BJNxxKf3gwbLpvXkSz3K7QzF3Cwy87jm4W9fsPc6mp3BVnJcc4vX7QYRbWapI4ZHwSHYAv4FpQspYk4eczaYQpipJbvycZm3i7jRNnCQh5OHp%2Bl8Z4p0%2B3o7kMKnVsjEYRjgWdfH2rHO914x63sTd6%2FHLvjugkDZAuxfuTmnbEKYMkcshqn2Yrp3IDIRV1c8Wjk9fLNpiDTgJJvMqigetdL0BpnqdmYKN%2FvWMJLk%2F8QGOqUBWSQ6ou5RURtBzTsPdV3IjBvSCUdjeVps%2BUPeRQR9qyNxYB7s4tJzbJWSluWfuL0J5iEcukLrc72QLloT1U37oFEJzYvyXXmwwJxFMF42CjAXXI5pqPqz4bRtWdpAx%2Fe4Ej1IvJptJJrSIzdpo55GJQKfNlWJoJKSUdYvA8Fez%2FkiLGxEpRHvmSJzilcByCHyZdjLulL2%2BnYJeHEtIAyxqZ9f5M9O&X-Amz-Signature=5ef7a679e4e2ecf67ed779f2cff738f772dbc673b064893e0b5802efcf932a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=851e21bc53d83cabb63f0ae47764250e0b0918ce09b995674f9543615fae6b8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQ2A2V3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQD3pKYqSRZUlHIaZLD4C%2F16PyUNcZHSupd9ViJN8id0SwIhALmodS1lX%2BJszNNRD38cxGQi4vA8HfKZAeB7YAPMOmfSKv8DCGwQABoMNjM3NDIzMTgzODA1IgzOTjhVKedd8MibVHAq3AOaNJ6OdDlm%2BWkJ%2BAxYRxkIj7yGIzkASd0X5oB2mH3UFY7JmaJ4tsfF0RBkW2k78FR4Co6zy%2BsFHICA%2BLsUc2CRN%2BPrtXxSajcGlRVoSd1Pvo%2FtUDsk0H8rT1hsPB7RLrXvDugfdm3HN%2F2MU6OYt%2B1i%2BdlaNuoYTQ2W4bNNLBxvPOC%2B2DdNODZf%2FK08q8b7JIZI%2FwXASFrvOh7%2BMIHt044p81lh1%2FtlZA3mYajriD%2FGTNo9PubldOzzxcleGjqB51pNireEf64%2BOT4%2FJbv%2BGtqearhmvYyLhrNNVp%2BwMGaZmGf2UECoGTVIfnxzW6clSNiGNe2W1%2FTwqVQK0oDjxmwrzQfxzFQmBqA3%2BW%2BU49UQx%2BHNsJdIs0No7bXv1evlctoJXBLKHIx2Z2FzXbrXyekkQUwq%2BNci9uvV1ED15ZsD6BaoyqVQRjCF5f0cTCuBTfwX2bEobxRjVuShTCGKtyxETeozjnGpkfXyuk%2BKRB%2B2LXem9e0jp9%2Fo0jfIH2g0JmiylQL%2BcacUpBP9wJ%2F7RFdX6FKyHJYjiKuiSZZUBAeA3DKGGUSWx7m7b7rl1p8ROCguC78f0C4ZdWBwqGCZ8%2BznvkTTi4n9aaFVvbsTlDyQ%2Bl19rJHmvP%2B9f3c5%2FjDq4%2F%2FEBjqkATF6vMBO0b0LUe12y0FiJfsIalM3NFfVia2OAftZQleU%2FQ%2BW37QbxOx5af%2BTBWlXt0TPDQr7vmj5RYVj2ZlDpcSDfegbbusQPKMzXHVFqJlw%2F4zoTesHxBlb6Q2krLiOSTfnok6E3B2e1H%2FN2%2FpXJi3VMAWxOac%2ByMIRObcPMlVJZiPGpTRDsb9Qk7AKrb9QtiXUCMQmrBUdyCp01Kyn8wBTAOtL&X-Amz-Signature=537dac6d137614b3fce5688ea7dd8266a21598ef5b2554f36b6fd904518c67c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=1ab94f477c93080790458833c0577f557ed6a52d592bf8d892ed84489171706d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XETL2EJM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFC%2BqL1gClWZ9zVEN262%2BnsCM46pScrndQOt8RmSoFzTAiEA3Qu4BUVRavkRm%2FNv9sy4tlcPnJiW3kDCfwRzhTC9WIkq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMtJPnM8Etv0QaX%2BvircA2rAoB%2BcXENG8UM0jKDFaYnVKZAVDHn7%2Fn8VvvJmBwc3fBYt6q0qV2%2BthWvryhQJJShjYVVF5uXLBFZREC59M%2F88r8pUdK6EO3Ka5Id5vT2wWBzgEyFSNdAKhmAbHo%2F8ZYqWv6Mx91%2B9%2FBK8npfbdegKW6anrGnzJneDWOZMQ2PKBUuZ0caNAnJhMn5xehcpY1WYnxeH2lvMmBF0Mj06M4zUguhPoTtT7sl6W6NcMMgQwywvIK072hr2Upcj73y1z1dKfe8ZazhGu4GHpDmg1metITuiAyIRlSwjD66pYiA8BMcBy2b%2FuYBQ23JO2jHLxEtiYUJHP0IZIqqjfL38wG9dcO4FXkKaywwZETrDoOznRlLJTP6%2FzEsmS1VlWffoBCyTr4NfLFVhfeYaeS3Y8jJ%2FO1ilwgEVTEdEzgwmmr5NBHV9hpfDFuTQOfBSaFeFwuUZEzquzbOuaNrd7Y%2FkKIzd5hM29Jb4gttE9MSjC4%2BE408d%2BLg06JfEIAsSDdD3qBioAS%2BxZEg8uCzYb%2BGn9OFo%2FZUwz1rbt3r%2BCfg55pSZRaUZ2KwcB1Y6ZFzlsmVy6BRKutF4F7zQLAWQx80YAw1sztuSu9SG%2BZvl07qCPPYH17pKpIRDHu6U2xauMMrj%2F8QGOqUBVXITYoJkW2Rhgjc6i%2FKTSLg6cpZr5EpRPRX9AqpZtjNEpr8aig1rSfAO7Su6Ldcpyt86gVgL5w%2ByiATVP6Yci9bkSJ2sG670dyqC9MPns4%2F5kz9RqKjxiUCc9xg7ToZZz7viYx4CQ6PREk96fUddu%2F5qklCwv%2B21RUhoi3edG%2FVIOFfjHc9vyRwW%2BwB96s0MdTQr1PhPSjCMHJwnLHxhz1bQO1wB&X-Amz-Signature=02b406cbf093fe3be5ad05692bc5ec387ab249149a833eb90f87b1efd91a00a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=9a36c6fd4e919a8964a3377c08dbcb5285ebadd7463aecadb6eb79eb8ab9060a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZN5LJL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHCw%2BHRK9HLfBXwah2n4dsuBV3GX3VDctm3pfyRBxeJEAiAGCwarHsBRKyw%2FY0prFLbXSvsdJJZ%2BDuvlyiUV0agCQCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMrRMYxR%2FtERHJUgmlKtwDrrqtLDU%2BuY2dvObURgXDM0oHiKuiF12xp4vf9BYTRjTv34L1ezVt%2FUIXcMs%2BIKlGxiTQtob4oipedpRN2wl9DYbUjwmZbR%2FY0G%2Bz5pvuuatIbGI60txU7synrkbKrVhLpBksSQ%2BjKsEyV72eFL5y6%2FtMb%2Bv1IIMe1J91Pg17joTexLn7SC2AGIM0u1Bz9qGDaLha1dOAWFXD%2BPwwApd%2FVpL63%2B4GYb%2BlNZXTdsr0tKfSyBEpWJpYjQ1I8NiW9OGAozmIVBE6j0QuDWbC1cRqWIL9Dcauy%2BDhGfLkIOG39u0IsKQNWVqi2qZJQHduzCxDL0LWoPTS0yjIDvfSRMc2LB8aqFR3vQKtJ3vNR81%2F1L94EZ6PpT2GXn08wdEFlxn%2FehM4%2BJxl6JWCPxhOE5kHKYmx31n5xjW0JdLBgUMXMVVK4%2Fn10gRMNioTit1%2FQnA6s8111mpmeHHn65GcxrQNzKaYw4nm2M3mKrpMWP%2F%2BmT6FU3nOkJpudACRcLw72EpPmYyPf2kW5%2B2FJcjlDmNQL4i8sdwK91uaGMeOAcmt1vAoPcvIPDH6sWkLm%2BvJvy3gdCaVITRtbump3xEh%2FSKMmm0iqd%2F0TxQJh8MyPsWUXqiZETae1Xkio7Oguq8w8%2BP%2FxAY6pgEM9U86cAFvRET22F9Teh4xtLrIDSFaEaB9Lg78JdUNyqvWqij5HIgNHzE23FDnZFoX8baw0xaLoFTratjkwCG3dnVtZTNkdxZCbbEVNbvsAwXoX%2FQ%2B5GH036KhhO62L8td9ZVv56n9QOAvB%2FgEmQkOqBYhvOC%2B1HygGqzRW7wI7sykt9SGVSJj%2B%2FLc4p%2BLUo3xvNqfulbjxZhYA7EMbs95iu8xyhO2&X-Amz-Signature=5e8b29679ff9bbe73f3033bdbce52f49401fa4e9b8a98a78ae4b7c6e43ac0e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=f40953f4849c285125462072e8fe5756ab4eb11d135cbd4976b80c1fd6ca0481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VYG7W4L%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDfJUZVifPTxTxeLi3AiqUSGl9x8ZNOmLUeM4bvr3rGmAiAt69f%2B%2FbCbNpsSzPr6GlELSjZce8ea9S5DI362wKrs7Cr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMqJ9bUmb6Jq1UWf8HKtwDToe%2BnvnL0dj1tZ1I%2FZoxDvEceEg%2B45LmDKRzXEWUmMqHLH7x%2FrruiU19STaDtocgZSB%2BIDFnk3I9QUkadcrmLcUZt3Cw7dXl5tRhh7eONJPL6ZjqGWGkDsQYjcvA9nfAIVuNWw5ruDOahqnFXeJBVONZIOVlqhTt8hMOvZEf8uL5mr3zHETlgtKCs1XalfAQ0HLwwHTxgqe6KJXsrtH2TDxshqDZXwIz6NQ76HwZnFv3CC0%2B%2F60LEdIeR7Kiya25TrAabeJUMun%2FZxfQ4Ir%2FWom4cV0wT%2B0%2FPcEWtu6eIrc%2FiIvVGnirLtNWrodWMQRd9QETyURUkQw3YxkmBGrxTABNVTPMDYT6MfaZYPfvrwl3Pl2%2BS8UwQtUQgLKbQv%2BG9b6%2FUi5qUh5AUkSgypIuseARi0G9iNobSQ2VIPu5qxDh1VDlV6%2FvgJHci2NXQ9TGh2I%2F8dJgS0nnhsbWUHGiJHUoQzV%2F2Rv%2BD9yZ44SOV7UMctT4X82KRMIWw70i1VEintBGuErOwXzDsvoWzYDrro%2FJJxDaryNZl8vG2ne7GnSEIKBZiKHJ%2FSUg1rqiDpRREDM0vxEVr5fO93wc6AlJAYrSN37kFCvg%2BITtnwV5iR3iYadBpvCpI4%2FaelYwzOP%2FxAY6pgEGH5hrCLoSTQQlaJKHgkFhMvbYx6wtyAjlONAuxGOVaa0n0G0Un04kzvN9SC7NapYdFYpUFZxTpGCPjjb5W%2Fzn0vHBcUilyOe06VgdyB3LWnwVXU%2FGo3a9F1ey0LJt0hAtd3zi8C1GvwXGtaErr4cWzV%2F%2Bj%2BFIgDTWAfOUst5FrDHZgPbtIHlSn%2FzGKHLJIeWrXB%2BG9ykvamj3HAuJV%2B0DpGauwfkb&X-Amz-Signature=6d4959acffd6517c8b761d26c70855825358b2262e0509e9afa204c58cb53912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47MSIAL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZYOH0%2BNVoFFNxJH35Tztk36SGEqb4HTnvHOeJc3ya5AiEAy4k3gpnBTR1CT8Pz7ChKEFVmS4QLSpJi4hh4rI3glvAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDKoCOzdPV%2FmZRjiRHSrcAxqJar2b%2BPuBIDJMy0ZNXz5Dix19jAEs3cVZwWFSg777gJGIxk17fF5rHaYww5%2FkuF%2B7NcZmzDHYc84Ocfa5VGh47ZbAHEsTVE%2FNeVa1Ejys0rXBJcp%2BUs1mJ%2BMCr8ZtNYWb5CmzzzPzMH7C1zJH1L3%2BOZlQfWHyZuHlQbI40eAhwcy6wnlViDz7O4KG7%2FaOvjVd8MTD3ZzqzulGsC28omL4zgBTEonEaBbPAsBO4KOzUg4XHApcnyb7KAbRwElIdan4N5jztsb6kwEkd6lTykSxsBRH%2FFvZJviLWoBm12VGUaQCtN0cDpLgdOuzZ%2BiYDwS6H1BL56rLaUUtypmnmHaCFZsUrGw6gQF3EI3qJjPNFJhgfHHrJSRbRmrQBxNpEkLexiTJVQqMAUzHcRN8PIKjBnF6hR8vmi3NP3TX%2B0zXTgZzu%2FlCJGEyeGMIfAqubz0AzJd1%2BHm9lvbnLtlrhIS9bKY4fXL%2FiFAvRdyFy%2Fjs4AoyKpV606KImm55N5ceNASqVyIR2CnunpCFpMGVZ0oWldaN4FUi68LV32R3jn1EifTFuvIql%2BYgyqUXi2pUi9LDeZ6oqrWfYrDCbEf6v610pxGyrCvA%2BB10UV%2FFF2YgAxLuMGRqU38X6Mr%2BMJHk%2F8QGOqUB4%2FicNJlYz40f2TsB2hrMeMMjSlsd75y3pEfMDXQHCSKyJG2MYQFNW0OXeyAizf%2Bz0J5UtAyJFpXYUbs2jT9twHlnryPPZAoBNDdPIk6igAWNk5HdIeLK4Z9ffAHqaDFYBD1XQBXWK8s%2BAQatAJI4DZKrUfp9s3ZNKgbGpVlkVnoHCFFkbQ9BbVHrZmuwaq8jGgHD8XyX7ZNUtrxHDS4W%2F%2FjtjRNH&X-Amz-Signature=8cab3d229402bd31ed3a13fb596b0630788e9270c83271532a23a956091730bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A4QOQXU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHVQDyXAaxCUEqWtZ4WBVZKMNSgU7xQtKvxTYpaTwUKZAiAgAyu52iAs1Ur1ropnLxBI%2B8JWontCxMPBIxz61r9miCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMM%2B7CECbEl0H41m9MKtwD7zVJCBXs%2FJwR09Y63Ez1wSIRRFhNu01jaw1dAey3PxIl7pN1FZq9D58AylIcZallgLwBW8Fr8HEo2i1TgCFNFVKtXJi%2Ba5va7eCG2VyTulfJplxot8tGa5BqkkcBg1Tdw0CB5LVVKPcdyeXZ%2BfT847FN4XMObQgfxBOFi6hFLKM%2BM6BTGYS67lpdx2%2FMPets7jefyh%2B4ax4teBpuSAWF9PK%2FASCxwXJc0LMiktEofEaxe098xZgC45DohzyfFcUaZDx%2BDC6q1zZPmDyWNQvjG7Km8idiDMhfTCOCVLlU9mveeGtCKWviN6RIO6KPvqV0SWvoX8YLaLrolcbSdKfW%2BkC4E8VgBvdhTTx6eIv1P05Dtocy1Qt1V9g%2FABTZcaAaj3vOPovE1gJRj9FUv1hy4ogCZgttnwTch1xLNe%2FGZh%2BFTkNDK5Z9WfR93EgzA0BxoxvmbpzgY%2B0FFR3MEFOOUg3G7wyFwa%2BKTYh4ItnbesqRFQNP5Rd56lYi5uy2u7zZYYTr4GDqD1EQLLETU7YhXrfo%2BuEqsIer2h%2BU%2F1hO6arNc7ocqpmfoZCYa7dBq8UD4qtz4XYH5dJpK9r3AvYo1HMkSLljVCmJVSoWooTnn28x9XFG8JhRJD12xrwwkuT%2FxAY6pgH5HrVLeMhcL3PUoBmjuer7YGJ5SYN3y8cdMiLTTjtZAWiLrM3J5TwIAOmVxKs5bb5P4wvMcQC6hQf8OvZaWr%2FT101RAVfVQ5W9GpiuQSWE8yyFpLFwszOMR7FUa1tsx1yOrHszUxGCFsTMyGHIKdNgq90QbGqYOdqxZKhWpIqeGpcUeZmUdNSc4OXMAwLuswqr9XmXCkCVikpD%2FVirGBoDnqEkmyV%2B&X-Amz-Signature=fdbcf56c520b73e0adbcf97d35db085f1c66421ceebd76593172fc53d0b37649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYNH2PNT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC34dI2111HRTUROHXVTc6qevrPd1VUFOOuLE%2BVig5O%2FgIhALeeOGlx5uEKdkdyLLLPEkD1vi04fef%2BvvyermZkS4bQKv8DCGwQABoMNjM3NDIzMTgzODA1Igwh3VYcOC%2F5AY%2BgQ8oq3AP4%2BPEI3zP%2FVBjMEfRRW8XizHWtxeMh8slqsFeb2FoBXMXwiloTbnrcfnUhTId%2BYhLXXk25Xv6P4JKl35BaIdNuNoOcJf2cbP8137RJcptverWLGpGORnl1z6w8OWm8lkg4TM5chiJZ2fEXnv7g%2BGOyN1YIJDAjdHeNi0Nz8de9gfAMjyDdfM4fD4rlzMR98kvjHDFsKsUKtBs0FScD7wUFJ3rH5MimagNXmTKWbBVz6MLS%2FIKcBqfvxfmFvHa6zDo51iVn%2BwYFQJHR64a%2Fqe1aA3YsasUgwPdPW69qJvhrrfHKXr7IB%2BTgCMegZhvITn%2BrYtWNzftpFPTLxGdr1jOt11AzK57zHwpU9wrRPkGbmPTk%2FP9Mfy8qV%2B5l5htCw7ziu57zw63ysZrp%2BBFJjkHU7V5ahZZj%2FBbdqQuqUMEvujqJ0OQfdsJNYsj%2F11bE6GhyihnEhU4yhY6gvOyqKjfuhZY0kdX7viTOq0Ddj4GHBFCwpHUTCuiBZJaklz9jh%2B56c1%2Fmq1mo9dJPE2cpwfy827YVCdPcVV1UkMYFP9HRtRm6MaLVTvlz%2BVPqsn0AmTo%2FYVAvucqLBlOIG%2FSn9%2F7KXex%2BJ63oyEg11AubyK8P%2FFzNFoePan%2FV2NaO3jCU5P%2FEBjqkAQrQw%2Be93cGsrm%2B2baWbl%2BqELIvI8byS2zhGm0YW%2ForokK0xuzMdEcOr73OM%2B5HNrAnqC0usyvx%2BcBicbQY%2BaBoCCo4X4mh%2Fodapw3Y%2FuzLpmy4UQyT8i8Y0p%2FKaupmfQqRLPCAamdGlgFmLJ7cPfAotLxgunqr2y1eGzyaerLliUiWQpSuuzwll2%2B4mWxgwhFhTgJj%2FEC6F45bzT%2FWujgYkrHFy&X-Amz-Signature=94542dec0ec1c44910f650032733ddd514d06a34166f541dd9db675861b25405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRTGNYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T034021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIH0saiXiBZRvfgVGEib8mWdiRBuqelAhEU6hqCuP%2F0NEAiEAq0uEFib7pCK5mzi8akGijW4FPM8xI7gsbbPiC3PLPrQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBhxFhtz8VwCDwt5RircA6JrUTkxFWq3G2HkbsA%2FPNLpo6QlrecApTGM5OL08W9H6ERelqpAHTaJOVNgLN4aLRYdKOVJu%2BEmsDRoXqWDSb6SClrr7MfuQoKtOVR%2Fp1OJ3ggwF1y%2B7wAG%2FV58anNEi1f6bBAxGpKWMiI3j6LIenDvV4GD3JnwgaAveVBKim7m9I6MnPpCna0eUDaMOVBJAIcd20Cgx4zl%2BqnMoSZciU9QmQ2lXvDNz%2F2LA9a44syZ8lFIanEahjri4p3H64iKlUxn0M8Zs8G9ioTh%2B2TryfpkJY5Zc%2BP2uesnvGv6iukEx0dJr%2BI2dD2w6WigZU%2BZNyFtiXPbpu1nR8FzOlfHOxPSxiS5xP%2FH57AvnAvCMpfEqoThdncCBllYlG73DqEK%2B0Jdpncpz%2FhZHEnB5WloVUXoFQEhDuut1G%2BOSONvaFJB%2B3pRr6XWYQ2qJP1WDZYVXekuBuHsyouyV4qPXLsKvGJEhEto442FeyyiUoMLTzIqPoL6XJmqcAemzY%2BIA%2BrNDtWUnlaH99HbbQdDqrVsEbAA%2FTCsFP8UtEj%2Belhv7E%2BGKTQMnI%2Ff%2BZ74W3oszh4sn04wRBdWkHC70zLz7H8nEByr1CYEEp1iQ7gmEhVr38DbDdje3hTky2gMLTy2MNTj%2F8QGOqUB00nnj0KW9eC2B54vDmgOAG1HcMeABdkDuSN2vajESFfQbJ5m8Ki6ZiHERFJI%2BHNT0Ux08%2Fy0Zg6hRhPTuYLYJMsx%2FNuS4kz%2FVtBoDnZV4KqaLp2AfIqf9tBBimZlh%2FxWWcgyLjcwpqeaSX8FRlzNj2vyTgwqK4cjs2S4j%2FE5dZWuxwGKhofGNUqheQe1qJNhShF3O6GEzfFC2YUAeU1yb7yRSoou&X-Amz-Signature=bbd86bf5a1553b680ba3ca48743217d64bad9d759f2454881e82c5a7d6659ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=eef824d74fb194be629439f8a7f123020ca915cd088fa9de017fdcf7e8b5f4b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ESNZZ6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC4QvBsJ3J20LvwDJFcAZhmLF3yZIjlg6Shn1gcc6RYFQIgH7%2FCMaHceU3sVRrKcwvA9wEfxX7WhRB%2Bc8iRLHAeH2cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMMlp1a66cAfl01NQircA6VWRQFEPNXC2CGz8qlC7GayclavuPFQ%2BgxJVBzaIdpWenrBUxiUCRJ0MieS5h2b614WER7sG%2FBXaoAhUMT1dstKKzobf6SpLIHaE2pXw6VHnr6Cyfpn%2BSt31CPyHqzpAmWR9n4wmcw4SCyb%2BfZgkMRur7APAOiw3%2BJhW4yh%2BmkaMo93r5YvNUJSKMNHW1p0hwC%2BX1kT%2BdAxk0dHJr8HFC9%2F1a%2FPAgDhYvrCj%2FTb%2F6gD9roXpoxFMTTkwc9pi5icDNZfLZuV7Uv%2FMaja7ehIjMNryimFLFZC%2BlMi0r7OsC2KBXzpd%2FrZffrXHioVxQRdbmN1ofH2arDBp59aY2FiHu0UsjqBCq3fnMnBiZgt96EWuF4f6ZL5q6gAxRKjjYf32m4KXu3Owt0XEUby0Xn1S6iCWWDSdsXfUF05wbVYx9drW0t3CVbV9WxJRd0ytvIcSiyu7NuWLWUWw0CmWDNIY8HrVrimxXl2j9qGoEWvm%2BC8S6q%2BqfFeBBjbRhINR1nnlJkxHZzOLzTcx7klFoRUQ5JMRjobiyEO0DMMGnGfZDtUZWn3m6fQbz7ZuOD18GP4YIcbbBnvLXuKOCPsexeQLpmIm32C3FohbhAuzAYV24tSyIcNKEqoZgbp6RvKMP7j%2F8QGOqUB9WAaEPX1NCpUG4EQR150dhTsfwWFYC1lS0WC5b573iX%2BX8J3QAxoTeKDbNg%2BchcTSZQul%2FvT0Ez72cUsIJSsuntzy4y2cuMJnI1d339BupHPilfki7Azux9FJxZoSq7kdHGfsum%2B38GIgbvYMzyLjgszI%2FDqYskcN%2BbyjHdkipN1qdUYAApHhhteLyTXiEu6JByx1j%2B9o9idZ4itO8pzVwWsWcWN&X-Amz-Signature=d082a5066e790f87b3ed521bfb8ba37bcb15eb2c61dd2b3b77c0f46be99e3aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=294038e40f88b39e43768d9b6f51793ddc5b870e0f0372f0a9d6f04373fc464f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=3995bb4908ff2a5a9abe53a6afea32c4ec41cf0b985f5b9bbdd5c724d3830d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=b46f313aba73d2d71a564304363461570ca3abc14d11c04c21b4c280743f3353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=663f2853d63d25b1f26e50e086f1f461a0fb26534ed664869a20bf731dfd967d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=cb6659a3a3b28b8686040063740d72997e09cb6f87f6ecc26b76be3bb473c61d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=d43f7627db3292a06fcf63f1707b44111d692b003d6d7ce45fb0712220feb3f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=b46f313aba73d2d71a564304363461570ca3abc14d11c04c21b4c280743f3353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=f69a7eb94a8953af9c0daa1314b7a6a43072ccea351d5095c449ed8c71fd306a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=94eee0f9b843825fe8606efc38ffe32a25b6702ef5524b995724e64c36da4e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4PW5OIQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQDSHE5sSUhNkkLi4mStdFOdRIRBxYnRjHCyo%2BqkGDQv0QIhAIRVBoZnCIT3JEE1a4t%2BQeJTXdd0qE%2FoCWeUGo3HJZ%2BwKv8DCGwQABoMNjM3NDIzMTgzODA1IgzXEnLx4Gfxe%2F9NfR0q3AMLuPL5i88YINN7Xgvsut2JgS5J5AeKZCPLBLqTn2nm5YmGqRya9PHizoRl7ON2ja3j6AxQhB2CGy3ecliqscgBCh5J%2FT%2BBATUgfn8dkIewZ5xSFpO0qP7Lyls5ZabMZe%2FtNqxXYV0Yw%2FZsjnI5vv7LxwKN6aV4cQD%2Bn7PBrhETtJ%2FQdbWvhoQbWMbV%2FFKVulw4E3LxYafhY62aFes3Dd4iWfxcmB3dNJbY6Cfjh9LNBWYIe%2BXIBhREqJSOFguJntQMmBiBy4AzMKc%2B7RpYa%2BMlzZuPB%2BQEguI0Hbm52GZhweEmsYba8G4Qk9KEp%2BEazXhW%2FD9M2kGKcWlFT3PpiP6RQ%2Bf6ociJllqKgs5GYuLzX5bIZGLCMxayu1L7ifwJ4jMbFxA6NNwCC5xJnghhwY3luOdQ0p1%2B76h3sjK94pp21VvpPSKoDfv11ZtX07XDVnGIi5PqBy0wbfKxcPDWtFx3ty2I0%2FCASvzf9DqQ4qHqH%2BPYYPlWjsKzbmnyvlDPBKzOt6qvewA2NEowRpofNHQ5joubWRet%2B0i3d5XdHILQYx8uwHrWufSMZeFiwhaVnkZT%2FAaiGQ8nNAFGWeIt0o1riblAK6Tn8g%2Fcy4zTglGEP9aNt30nE9dxDEeaEzDU4%2F%2FEBjqkAY1eJ%2B5dKu9GZ3cKEFE5JOZObmQPKUSx6pEVAgyfo1MqISURl1OYaiFW6kdQyJkJ7hwSZwk6APo6ki6AwuheWl9zMh%2FPRyoOkDsX3v4H5eIiOb1wD2YYYxcc3tOELtsySO9riVTHoWVdGR8lWyJI%2BpbTulS7Zrbd8%2F8OtoI2twPsfNB9RT%2FDZHbY1AxXgehTsbX%2F4D5Vp4460%2BtLxx0AY1upHHdq&X-Amz-Signature=4f0058ae09d7d9acd2e7a70bea0524e0901d8e09eba4b43de7978b7c34614aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
