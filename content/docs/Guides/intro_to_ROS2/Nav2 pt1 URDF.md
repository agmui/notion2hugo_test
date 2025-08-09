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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=e8219720bb09cb8a54f666a1e4315a4137fc732d0d51edc3550b8abcafb0e78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=f2f250de368300df4d277214d231196d26d4fa0b6bad17b7cc7f4e0a65112817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=9c3c059746c8ee7cfd3aff059e525a31eca4a6a10cfd75f0da7ff49e6f78de46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=58737610d6bb5725882cd7440aadc49b55520541245eef5f8c816145fcdb74c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=686fe97187890f54444beb4b6613ef6b3642af3dc548c979cb215589709b1856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=067105c9db46865126158db6b5a17d7eb2ce2160ddf39bd21999d0870999ca52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=00a556c6a9bd914b03d43aaa4dafbd7dd63f1c33adb1c08352b8a448080c8327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=6bed669bc5ce31faaef7f4160d50cf8e62a38ce6c2c5de0b057a7230cc074def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=45ebb93998df6906d907212a5036d5d9d12c1c86ce1abf4b800b9942782ff03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=ea4d35bf8ea56953188f4a5f9bdb82b1c1d58ade2d4a0c7e9936ea027e031969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKLENCHU%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoaoNuoYelfYw411yXhbnrAEqMetxihDhlz2KJY5EMpgIgHNCLOtMFukvFTvPNVssn9abn4iZQX7gpJbFT%2FenSixMqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1G1NrujI5P0%2FV24CrcA0G5nBYOj%2FVPL1ynxaRbSOAckBaM6fMiE0Df128BXooe6jRfFrWsYMEJlZ3OvB7U2nZgvnpENUsi8wjY3XSm85C%2F6DRzQR%2B1XUkAq4JC8pqhjZhS30rgifmceozIBc%2FVDzTy6L6A%2BhkEr6qPx6S2qJcSWrUycw2AKVKGJOVfbbcZ3brwKpPvtsVGXoMI0PXkm0Q%2B8hrzralmG2PrIQdB3nWmNznz7NhY75Jo3Uc%2B5kp%2FwQutf%2FxBjY708%2FjimPw5kTc9AaTcQfL4o6lPjC5P425LLgqp0ETrRnm5OO4SSE%2FhEJ6aXEsOsuy4ohf%2FuG%2FSGGkYFxLNho2344ye8sYv4VD%2BlnSJesyqN%2FHO%2BQrVAYJxCVmLUq%2FaiC3Hpkc0J7Ot6DAOT6frac1E4NWHmCBaIbmLDTBh%2BZugiuwszyPPi3c6vnvkuiOM7huIV%2FVoZB%2BAo4VBAnd1f0CB8ANBPBbSEh8rZPcQQ50w5rVkYDEW%2FGpemFKObNiQllHuSEPJpcsth8Z8qQVg40WPQECornkSXjtpLJWb1dFL5kYgVt7lyfH3yjn4N8coTULj5P7EiyGy6v84BL8IMFr4YCHvkJzxGcpFplD3GY3t7AxMOocGKlrFOnwXLpxUVWG2nkVtMP3g3MQGOqUBFiiGIxfVYF9TiX3yrj%2FSBe6UTyoJlxlTUEBc7PELnVnGbSMZBNaspMiQXgCcKUHb%2FXuTz8HEwSI4h1P9%2FMtW9%2Fv6dqwbLGvhR2tw9McvH6dnyK201UTI7E5fKZzBXfTSRS7C5%2F45H%2BU1y3k0V4k6NKw56WiDAUCIcv6JfpeXN6ZCjQE2PfjqtulT85ConjsWme4zAa87YtEA9lWHnN4ylyR%2Fgs57&X-Amz-Signature=462fbe1c9760540d348a290496ca138d7fc0f2d033cf65b840c7e964a3ff06ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THX7BYZE%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEdur2wNpPO66CzXl3mIVmsbapqG4NzgXbZDUxiyeS9qAiBKlGL00qsdgzEcggzYEt3b4%2BC4tf8QfcRB21TZhyzWsyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFY4XimzS91z5nqRJKtwDZnHTmjh9xWXnUDBl2QXJg3w3xi7L%2B3Za4Ep%2Bsl8d7q49zl8V9cwglfG5ij2W7%2F%2FMraXWaInT275TNqdmcb1Cin3g%2FnHKrXC7FOZWDPC0sn0%2BE0UMlxOoFfD%2FNBNojE44noE5nrU3UeX6ToUydkHi0nMZ0h6L2QB4WAAOcth1YA3VdPRouaP3Wgf3bj2OtqwfwOx7ADwc7f4L5xlqoxfbZTTbZ9JrtyN4Dx3pF0ymYZhJnPg7o2KA8GK3LDYyKGH1mJcSwH7x9%2FJhGJEcAGu3Sbht%2F8tuOJpLPdenrC%2FUgu%2Bc2BymvlnMnN1zClZPbJkdi7JL3bgtSkG9Yc3PhWkqdiAHAzL6BoAVXbfUkHefF2if5hDfxC1qqZEdlBSNC2c6SH0UpzVVkmys7cOzPRMuPZu%2Bw91NuHB5%2BuwjrM8EadUzjNl%2BPJC5iynPymqrkPDnhw7NunIAk%2Fjm4WCu6jo9XuBA8pO6rWzhjXK27%2B2Rm75qJoOtHNHlyhkhG5pGyq3xZnQ%2Flxr4J0qGQaDPRWUeg0ZsmaUgRBD2srZPXgmJgTCe%2FiJ7VEy%2BtraSWlewnsrmhtCxxkH4pj9DonznAkdOar9SQrqx1262mNaYif58BaJ%2B%2FzdqTsZZTwRIAD8wiOXcxAY6pgEaq9zd7DyZey8krHpHqqgSvTsuaY80%2B4K7JEZgr350Bat3nctVwQX9IJgA2n528KaygjuDCXg8vUP4Hhir3mYiEojXnA6l213xVVnRc6XeFmB1Z6nn%2Fm6rdCD3R3JEfFvu%2Bz2QI5kK0PJCkmou8UR%2FFuBGtES%2F5Fp%2B9DKh9Vusyonb16GyRfRme1XCbinDHRIPrAgLuNml6zi9htHoHAcBRnidKNon&X-Amz-Signature=4cfee7c6629ba462e5474f26ba62841da4cc041a0246ec39f6e17a9bcfc55a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOL3MU7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAEG4SbcQeWvF0Uhjjq6Q6k9xWqd92hxccqz7FXJVjrSAiEAqCJdFyrVVWDCOpNo4d990bronIZICX0Z%2FRNoBawY3HsqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FahEl1hQMJefN4kyrcA2536a6K9aRIN5jpHKKgf7vKIn2XTMl%2FdGXE%2F32y47fPl4B2qHdoTHVO13TNH50XUS9cMR%2Fbmov0DWFXVDXkt%2B1VidUu3WyNZfZgNMxAw9JH3PfRXjPSnfkPByym%2FEomE5MXloG98Dgw%2FJPUUc6e%2BCBEcIfNux1jfCGSNsUXKCJ8bdMshSsThHRCQ0mOup3wNiroWeLjD9jSTtNRZnNFjlKSaBN%2F9GUS3yYrl4DgOpCMYwbyE44W6ZAtEu8erC465gd%2FZp0JyEqTHpFqxt8UzYw7GRd%2Bas2mxFqp%2BXSTrC3V2lC%2F26SsoK%2FZ%2FwZxO0KVJEXYrnjjHw8ZkYGFDlkZT%2F2Z%2FqUrHk6nph6Uar2UN8%2F5U2NQ0BbZzY3k%2FRqyy%2BwYA2vMbeUrdvsYTBEkF9DDu%2B18zh5%2BqH1zuFGB4iEnW%2F4MGHbXC5IjCF1No3W7jDWuwVmH03UwkCrq%2FWCMpvFQIg0RAyuEcfNrFnIAzUpILx7U2XuhULRLkWVXTWjqIm14T9R9bfQ%2FC4v0IU5PfhzizWDRTcCwKKRI8feDW8mBkl2BEdcfoc9ayQDVl0CZ5ajz7JUm8HuHPAEEYqL0b0M2UQe6smeUkeDur1lnSGADZb5iT1BMwdSyCrnROh%2BHMNnn3MQGOqUByCDjcDWoRbNjFa6pa0000RO0lyUkA7mMi0oMY9J7xgWkk9%2FITM36IkOuj%2B1vBzvToiMVfo9EMzUmvVMvojkp6mjHZR48631sVzKRORF4udKSZIylm6C%2FKnUTIh%2F7JxuROyqYPquahdJ0%2BHH8SFJ%2F8RO4gpnI2mWcmiOD6TSzfeT4YyTmMqxp4oCsXtOueMRHCJCE7V%2BT9mqKsQfVz6lOk3b3WlI3&X-Amz-Signature=1a0fd7316207499ca6dcaa7edeebdb69c039a289d3e78a172632404ffde4d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=e189ef9d48624cc89bb62869267bf7d93530abda7ad17b3749dab80c961ce0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4QOVRMP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0jK3rt8uGjR37jRT94YjlYv1%2FP%2FTa1ybMRbJoBk84dAiEAjgx31G5ujU9fYMgneBfFiMPhQMiWTPo7DUZSOREDpY0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXbmlBHt5%2BvTEOiGyrcA8iXdQ6KSfh%2ByOX80ejg7T1%2BSGA3n4hGoPNltcOypRgWtNfczgGGF8sLzOwq22o9ZqMQof3FQgePdy0YJdtmai4IPwhZEtZEO7fC7dlOdoia6EP2tado%2BM8hqtLHJhEL9E0HFao6Z8om0uQ0a3SQB%2BcON9nsJLEeeBj2C2%2B7P0eOt%2BIAbJxNUVVy2CHhThjjcZCT%2FIoMCaO9kbCkKKD9%2BbU8cOhMmCiwo1nkcvDmEsyaYRNUaHKR5bs1ZSQqF1cdT7tnUKN%2B0eIzyKWTWVGDcf%2Br9b1QnOSlhnPoZYQDvjdKqBWol5xOjtaVb8v9%2BR4g6x23vslmBdya8Yyn252Aj4OG3mp0OQw2aOMPUWarTUAJFulS1Z%2FtHh%2FFGftJqdEa%2Bkxy%2BT7RMUqzLLOeCFSOXTGBvrXz46d2RSygxiuqADj3iARG4p7%2FYNAYLHehxfC%2FLcLT%2BYM9AAvoTZCIb8tIEWxKhfQLYZYkMI0q3DJICgkeaOjcVyLL3PRjvypk1H1NDqM4PoqtOcRivP2h0NfoMnz3dJBlilzsKYhKxa7GyiAIk2H1aG7An2Uu3rkBNNXo94z8VMAvPsWhL9fUNMAUUwBzizD9zObwIgNy154uEaYC%2FGHwqzitFIdoZFKMMJjn3MQGOqUBZ%2F9tMNzZf4xaN2XYeUmo7%2FHtUJboqPVkR0hy97t%2FoULPEm%2For%2FodItTJLtAgFQa9%2B4mv3aUzVDrOJ4SkgXdQTLNBo25KLwsQBOFM8OngGw2XMEAJdkLfZUUNAWngkC6YpwtqnpcSdp%2FoIDBINvhosnkUsq4VW%2FpgOOAsyXz6KD9NrmmeVOntB1CxvnIJIWKJx%2FH1YEwm4Bu0G4DqVImXLDy0Yd3B&X-Amz-Signature=ca704ef7764eadb01bc4d41464d63c741199c953ddfa30a205a0c9473042ab97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=a054716cdb2e686e8d7d39dd788709a4fdab4b2cf500a8bf132ab67b0984c80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5AWOX36%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOmvHVaEV03WQeWKeNSrkOKcbYFUGef1Os2qZlZtukPAiEA6UwXfV0tW4kXk9Bb2aK62uHeXkOA6kJKRLw7zuW0iQYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkI5jvJ4akFVsRTrCrcA0aIPzvoAKRrV8jbKA%2BodLFQnu%2FSMd2Mu6MEyBpZTrdV5Bd0GbRnAHg%2FiiBhQkYm9kGqCpb6pmRaqjhoD5L8hBf5XwLiKpuUlSoezb4RjjjVp%2FDMVlULMF%2B5UWhvwZ1f%2FWZFfOdCJ3Uywlei456uUHBZmqRV%2BPtcAt0urG813d3bZhuPg70WDcQF8lR7zw9X1%2F1RWpnqmNRfG7cLbBixhBS%2B6YLln%2BpuD80cu0mMkcHeysVi6fNZgiSKRjArp0gAbhErgsp4ptBE%2BIQz4Eus0Sv3kO3MB%2BYYd7QNV6SvMXgLUAmdMB1I3%2FEbj4ZkmN6jYAG4wjcn%2B99KIUGsgsuVF1Mtrb5vhgfccD3w%2B4K2Kpg1bQ8jxM6k0YsrE%2FTLV86OXCGVaBugBgKke98CXkHCo%2BTmPJ44NAr3r79i0949EOyKn9Fom5V2AC0OSE%2FXPr9%2FDkOoLWXiw2FNntbk54NuhmWCZKTHuOS9TmGblUZ2rO8o1G8gzMof0WoUvjYrsb5XTi9WPWOISiOTX1dC08rCSW4PgglPgv9MbYTm%2Fwjl8TbEZXKgjHWkBDvaFtv5CcwBNzM%2BkpkRUHLxDok15vHnWxcruuLdetaoR8FUgzI08Vjo9SF868%2BFb%2F%2BTS1%2FeMJnp3MQGOqUBcO2zWPnpJTFsJmQZBkChu6hzKFUvWgGY6iK7sEE9DIn8UQ2l831t%2FDs8JGFYMFGedadSWuhpceKckNAy12KUdNW%2BnHFJJsLSI8lXIFeIhIDBCUNStyP72HiyTaU3AABO%2Bmp0bOGvyyXGCiAmt9Dbv2582Rf8%2FT907ACqy56Bb0oCOWDvEkV4h%2FJQmR0v1R8wN%2Fq5keIgh4jKylJBtzfLmHy%2BCIYD&X-Amz-Signature=a2f823a554bbf5491fa6b3d1a11ca993995757f7b0652b0f94ec823dafa97420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=e5994d96b2703fce2b78da56c676b57eb8f89cd92e0362aa7d32a30d057744a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKG4QPI3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB0YXdgabWnRq2Vvx5CehHSABdEiv2e8cU5HAV2AqQ4QIhAP1P1ivlZ6CSy8mCI1Lw24iyCKmNbuvbTiUKNF75Y4c4KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKoKN66Xj2Sg49mogq3ANYJOTEfv2G2y%2BXg%2BHyfNvpsNeHD0uEeFI%2BQtn8xulPvA2Ob0feI4lMrL14lDAQE4L8jP9o9VJltbTtc2bZJgU8eFC1gQxP94%2BaLzYfa%2FrButN1q%2B%2BkOXHU4l33CT0g37R4KiOeLstNeeW8rmAqFGausRQGQZI55aBkisDLfLMBcOTVABYnLw277bPMjqIhd1TEOOt2tsYdUhNmAxOuWbE7yCHo4U%2FTSw2XdkL%2BpgQxSbJ13JEhH4Vw5jafYh5dB8OnZ3s8J%2Fc2CuYsFJKvs1ZvSXBKc1BlbNh%2FLpUuTQAxk592F6NCQbBITX9IPYfGpuHOfAHpkC76n0EY2mtV9PcuUNv6AOVnNqfKADlu8wMiZux%2FcFNXi7cFxWKKmXTKKdF739zimUu9ydxZ%2F7et2iamdHMLqXeckwhj%2BiakhRHrVagveflpzO1FWaHcbZQzywRUr125gMJi8C%2FveYmr23je4KYP33rw%2Bq5SXiMIJdKMd0zZqCGm%2BaJQOW9uQFNiYVScaFH3XliuvdJjEjff7sTiwbDzeFFvgDhzZtnpXhhXT3ESLnM9QZIVf9PHRsPzWPW0423Qkgerz56QW2Vt7ekEd%2FCgovxMl7zTEpzhM25w5ZmUsqWp%2FVZ%2F6RiusTD%2B5tzEBjqkAWdmdG9utNqitE8AN2kCNZkS1wwcwpxxRiWew9MmGuwxkr01BEs28hSAPCBHGWCwWONOHlsGL5bWgHFoWeRJUXoDf1MirAPr3h6EKTg7Pj6%2FfP7rdpaw0kNCXOy2%2BR101W8MC4qfJRDc%2Fc%2BWH52k0q1wh5M7Osct28qsPKNQINO%2Fgyqs9VQP8DILh6v8P0YERqQWonQEavtg1nNXF5P2FrPbsIEH&X-Amz-Signature=c3044c5dd5a73ec1097fa0c318b28c7d7e447c2c7fc68e1d788b252604035f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=7824d09370ef5e6f338b9b4b1f47a5bc7e7d26ab7126d546adb30945887a2f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYVJHNZC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs%2FSdwRRnf9gBagn9KOiw4LlIdJ5GxcGUKjhlEsPji6QIgCmgzkJ8ezQDchs6ReNaJUBh8TQOSWBtDsN1vGOdzHyQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2DbDWhTBIenLJ%2FBCrcA9BZz8RO77spUGXIWpACDvi4Xn5pf12gLir9gNxoaiiX1V4LtK33iXGyWsQ0OyCXnKNYhaCmvx3Ps9ArDEBz%2Bg5KbxwITyPVN2vXz7xGXu0dP4SzY9a7418PwTsHtLPT8HGApmoC%2FE8MDI7P%2FnsEZpbjSm9Ny8YuVzeVEaMvEouejhMkQPc3%2Fbv3DyZvYv1%2FsaT1Qs%2FI1zE8T50TK7LRXJEjwJeoO21VlLx9O%2FHbA2albl2MCwSLaQZ3sZLOUuXlIkV2QoqQIEeT9Vrhu0jX7C%2FfdZyETfo8myoi5Oec9kzg%2BptB%2BJPbaeaXHubU3dnTqJ90gc4ztCM0oqAGogCJ9HWRqnHWosBwqlIz1ScshaGsqTzKNz%2BLj3Nx81lCXBIerrq31mUXoBSNgUsoknsCFg0hkiyVS6sV1lp7L9%2BpfNcnuDqf194fH%2BVkrBIk%2FC5RdNw6viwlFry7teaGwNbrgZpg3LJfriOu6W7a4J3FIoiDSJiT8ATnGYp9yo%2Blgjnb85s%2BDUHRYJ7CZbSLfgJ5MyYvD1Toa1SPG3LFbYZYwUN%2FVG6KlhFPc7cd97G9S0OtPFtriRBhh2sJl2MqB6w1QnKIwzqA0294fjhNaVUSMviotZHQPGFC61bXEkjjMJbq3MQGOqUBJOEjRwWaOkG5RC%2FKPSruJCQMOj4xqXv7h5abCAYo3%2FBXdzC2jqSXw3HddibbbkwYlvr64Mtf%2FxePZojTXGgmY9LgJkzgq9t7ZR0DTpQ9yi7eWih%2BKqQ4huoY%2Bt62ooyZN1XIKRyLkLO0K3P5YAa%2FMP4m5%2FSsJD3HE0KzNRhvmyRmFpFQwAO9uEAJ1nPDES545Ok0CmMZfTpVvx7dut89mrBuAp24&X-Amz-Signature=7b97e7368966d89c3a11a32e18519f05655841a7324be9f3250d17b473315539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNSHK6W%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuniUEgzETlpGmhBgRjhR5LDWPhc7FP38zKyo6qdLKwAIgU4R0QJWmteyH0WJlXZ9kNKvl55xDAHYUUL5T3V9a%2FyQqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMtjYsMNi17er8naSrcA7VQonoVt5fs%2FLGn4fJ5fq7MLee86IBTewvxOUOtty5GRy1hxOeEUk8C5pGf9zpfCeY%2F8q28GH3fGIXI4TE902WyijJnHFXyEAeFtXFB%2B52ePlFfxxtL0qu4nQqUHuDkdDahfR8QbKxKikqePXIC3yGZNr3GpRYSZgV0XkI8MRIbL9kaE%2Bg8iKf9txnFGCCC12pep%2F9qKE74WyJL4MMmBOGXEbqrJMr5CEJjHhBMR963eA81HScKsqTgirP1Qoh8%2BVpCDc6QJ9oMFTQV6z5TR0JmYaUkMhhWhnWixcARz1GN5CYSjPz7aLJI4CstL4P4csCpDfxwWb0CBblrJ51OE6AQfRpI0aOkk7eZTjsKiIenF%2BEUL3ci3KCS6JPwo8B37UVj6HduDlq4Mu%2B7gWbn%2BXKji9gbciWKNKpaQMfX7PCZCRaxksVreyCDBQ6YuKVM69ZA%2B4RTcFSodwvzlvtaI200JrrMpVJnOAgmYdz4Q%2BeyD146rD8UbaUsNR782G96jQ1wGhO2C5s8OZSfG9rvZSewHTBTntYFh4INf%2Bz%2Fb9ZIyG6ATh6wcbBDT8tL%2BZ%2BoLpdK8Ll3zc5d2wxZI%2BgAG%2BIWHu3%2F4rakrmIZNYJDN%2FU%2BtLkQgF6Yco7rVzSLML3l3MQGOqUBlRo0MZINXNwDG2QgMQdEVgQHAVGlYWWS2xpsz76t4gQIT7fTEM0aZ5vDQrVLlYUK5T7jDXhgV0FKUxu4OZ2U5%2Bl1v19wR%2BftPwAGMxb6HoNZoFyAtM5DVeenHB8UmEeMIYPkP3khzo%2FUa%2Bxdt9ec510%2F490cjP%2FzOzazuvOZnYCh0fFxpbTb9juR0hpZK99PHLfZjq3jNp%2BCoGqYPHpWSfKuNuqa&X-Amz-Signature=6bf04434ba0fbe9be2339d7e82b171893bd8dde480ae0107b83bd6c43d249efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2MDSAR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAJvJuExI%2BOuEps8ZHKuLCCUPudTaerzwC8jI4uykQ1jAiEAom8FU0inzAoWetCXDwUHVJgQDzcoTedPMMKlyBXrDZYqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPHzDhUOnGZMJon%2ByrcAzTB%2FeqG2uGslBWPlsrCibctiIaAzkLBmvis7zuz%2B5y0rSBwKXkzUcDTBkaFMUAaRTU4o0WcsOBnf21iBw%2FCsceLOhHbbwy%2FiOazw0rkx09rajl1JAPw7fJLep6zXK55juSo9GdPkEx9RRIf7xOnSjD3NKNd873k3fSedHV%2BrKPxGHHIArKgtnUfnjlhcgZRl1DgYPuKwHehHBcPCXl8zwkuC%2B%2FQf1%2BkNtP6ZSbOTF6Cy7FupY2Gwplp%2BEFUTIUffAv2aXyzwJ71WfX13Khw1t%2FV%2FhyAXYUuvxfPdfhAD%2BL5FrHTjeULxEgWTOWbggPsjHxk%2FugMqO5ijv1SDYRFQetng1%2BOn4UjM1%2FrVeJeyHiLTjCVR%2F0i%2FmyGZ%2BBWhoXvPmz5uhWHzzrRY18oufRIHNyZY7tz3rrZM6v0Ge%2BeFAlH2bMcPjkpmrtZ56Yu2ULJUmeMMhqeu43FrVAwbvBb%2B3gZqCWo79hQ%2BQoIv65hsSgTT4WxYjfqCFengB8iH0%2Bw4z6yVW%2BUauGBFX70wfSewy9u0uWWGQ%2BBcJYQTzyAmqHhoQATc7aXq%2FjSLKVn%2BBAzW31bHRBiamztn%2FRLZNF1lAHkpStugYehb%2B9HpcsVpQQ0Qxvcr%2Fc%2BTRuMJxyiMNzk3MQGOqUBjc1z4nNKRWuM2X67Qt6wPn407xodhjkdEJfkqCiPaj4OLhxTHLoxdGGYw%2Bwht6bodWw7X8RtQqOc5%2F6VljAu%2FOrgsqBOocq9YoT0yCkh%2Begq9ULTug%2B4EZE3YVUiEF8Iooeqj9aIORhuCG7sEp2gkKiWWUO2vl4TAwdM3LF38ATC38Jtvix2PQphprMN1QOsgzrRwP5Xz%2FPr4ntyo%2FRcS%2BiOrY%2BF&X-Amz-Signature=9e3516d9cdaac4f7a7424b9f79cc62dc3c2d7b093388e34bd97fabef9a312b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E3WCD65%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9lCUVflN97JdoYQh9VcMrGxAuctlEK6bHKmZVc9gaSAiASEN0XQrQmaaVNbKsjbq9j%2Fnr7rOTrUFDb9wTTze6VvyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYMINSINQhICxtrkKtwDmLsDnfoe4AzKIen2XLkeq07a5zgQlso4MoiSifl2u8MxhIeBtDh9QMSNK1rFG6vt2mOgMtfIINVhJ220nWoWYPrGv5I955lwobUypsH078HflIyKJyJR79fPCYm%2BZFBGgDTLHZqkIygEDDknRDw6EyR1%2BmOIkEAfk8iWviZyV5KeLKyklqCOe%2B0KW9lh5Zx4aTCT40v8bmsH6R3lLt8HA%2FbFA6gwhY8SnhZwZYWaI5qx0g%2FExPaVnZrJ%2BDQS0NwIn4apTHHNaCBLHm0RH5OpDdCioWYCVQYXL8lob9DkBE7oaf8rYHimMR9NUoTXD6CeCD4RZNQb0UqeJQjs1Pz%2BfWXfFOt0pqTcrbXInbLkrY8s3sb94cg1z6LXrdHXfT0jw46WP7E2%2BQY%2FuL6pJb0PDG6i1WcNMvYb6apN11bGGrqmXVyWLvXnS7eAqqpvBPcE4S8qyYnKD9Y1zk%2BgMEVXTzz41YGJLS2D%2FkdMtUuQ%2Be8PC%2FZyxFr5uyBwjzqUlMgQBAyYlIu0GI7oLYsYLTTump2wAfyHILfLGKRwA4x2RxtObWbQr8tItvLX1eubBEVvLHawB3B7Di2crM3sWL%2FHPe3m09zc%2FSMohkGRjKHYSb2qxiEeZpvNhbV6HC4wpuncxAY6pgEJpuTTE7Wt25WNLSP0Dmh9hNH1hYc0po69LosZmJSMcPfM7ZM2VeUfRpZzqFiU%2F5qBVeVlbPQlCvQHVqwI4%2BjL0F9FIRpDlPGUNqRiUS9cjzJfv%2BFXNg5wEnEK2HqfUGhlUZywmJgwWiRrS84q2AwyPD11wde6opEQ960un33wsbRkf115SwxQVrJC4YZ3VSm2xTAEQA%2FWhZrAiD%2BeUgFQTmL7GeBw&X-Amz-Signature=dfd44cd392c94315371fd2c383a14479cce24ee03d6330dad804bab14d66f95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZFZSSZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5PDlnYydU0m8kbierDgk6JLROu9fjGSgixX3To4nD8gIgJhACUKDKm7Oiu8xRKl2Us%2F6IXRecTfqjF6q6RonAkhUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLHhMDGf0%2FkmPuzwyrcA2k%2FXj1UsfsFAhEFLwUmgnW5Ne%2F%2BEnyOoPl0GPr04XqnV%2B1isdW2l7dHxv0A4NDj%2BmJo0u126SmTpW1GSz%2F%2FqmLA7thpY9J%2BOPPH2bsz203tmkMIPyQ0mac1xw5C3NnekmDotrDoc7RraFI2S00oeqiyFfi9EBvRLY2nTiB%2FAHid%2FbCtzk49HZ25CNto6r4Wq074CtRko0EhLTOAMLz7laQ%2BCdw7hJoM%2B29EXkWvgg632nfBrAOqxI9C8dzc4%2BXkPi0E9TjyzCaBSmQzckSko5%2BaMGzKC0Ol5BYCzy5AhTNSc9NJaXQFrJrklstTC7ZkzipjCgbRVQzgZ3tGzVUJpi%2FgZ%2FAC4huMRMb21OqfwulFHPQdB%2BxDrvAtOQKg5amPdGwf5b6kIw4FF9aboNDUy8lPVtUtzgXB3o5DSvAjohygas2TpIV4LJmaYfW2HppEuRp0dHvU6ry1N7nMX%2Ba2Q5E0ihVm7FV6%2Fb2rWOdCaUiZnNOEHPgRcFW%2Bx%2FXfFSG%2FXXT3pwARz6wl3R6lrynvWL0VvWCnhIWGJDIOV%2Fi1maiEU%2BVHqe578fO8tnqIiSyMbe22fwRaXf3gxJPuV%2Bj94xPOJmNgbJ4eK3alTRw%2BNXMgb88xHCtx6gaef60VMMjl3MQGOqUBFxUEYR7lChSFujGBKyi9oaWF10KNygIHXxykXcFnxDXb8PqVZuRXqLqhuPEhIalL654ErhxY3kdcVtUTJ6%2BeafVXiahIn3fAHz1yhYQ%2FqiRuWD00ISSbThsEWp5G9fURyFBNIzrqJQrmSuRGQLVfdzB0kcHMLxhS8P5ta7wVpgPh9qJVyG4Au2Zr6dXl8gihMBMjVjgOP1zCdon%2BTJBzufwCEafI&X-Amz-Signature=79c5361e1a6f16c52a1862db4259ba3fd4f689003872072e9913cef3f3e8784c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=b9afac8a190284d8ad6e2211707f9ecc9b58caa6dcd168d5ee861371a34c4bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DVUHYZA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDliIjWNggfeIrw660Rnk974qwoyxhyWTUvGsMaZc2YxAiEAwh%2BBcdNy9VsDCYoh8YiqWlaGn7Y5OX2XCWl%2BRKWLSnkqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNniZ7%2BOTmm2NmqT5SrcA%2FhpRgacehw223tLELvrYDn3x1ncrbzxIbQr8nPWA7GWEJiblA1Sct1U5n6SHccvnCfC59xmbncRNymoVpQbHsOr%2Fact%2BjkE136n5eXl5Gv0UAB%2BdHM%2FJ%2FTDhzPLMM%2BYlp8Tj29OkhFWC77gYrzeCvsmuKLxUZOoHQKg99wBR27NfJjAzw7879timkObJdDZ4FkZYf7JZHtoHpYrMUFJrg4JvXOi8nr%2FXAmp1mI%2FcUOIn7gZJkpI8xOmWZx2DTpyVR612Kbr%2F6SPpRooSXk8H30qvQFZ8MzVYd8WNqQzVK5vUWLUSDfkhfYdaCSimyrv7dH3iqv4hGZ%2FXV1uV%2F5v9Oi4Ajl4Onsd9YTbf5qLTtsg3q2ClMT21RjlYN4S0FCY0E1f%2B4CC2IJrLtYwwctuNZir23I96x%2F%2BAN9ElSMb5XTZVQ8iiXva79E4OqplMQWh9zUh2HhlsFChc5Idn4qQ9W22u7uJYp7K5HE%2BOJxeTQ0eMfptnNtufA0PJxWzwytxCddxNUieoOWMIBZ70OfHrlwqeS4lguAGXw%2BTIzy2xTqpt36jQirDdBq7ZI4MGcH8hW8mEh918v4E%2FavRSNg%2FSRqtByf1WsLt1ePAVSW8N4Ycq2Hr59Ao1GnVZAueMMzo3MQGOqUBlP2zcMMAld5PYXps%2BXW%2FnwynrbnoS2h3mfMtI%2BVXSpiPdJQNolaTLG9wzJ9zZwLzD3fHSKJeB%2BfQO2cg8TtVTvZUou%2F%2Fdz0h4aK0HJL894RWmJqQn2gIR9Ql3Xn6OAAcQ%2Bu5mLE6uGxtx3fJUr%2BwdgTCLAkHZGcnTmD3BD7H30PZk%2BnWufoGvG1tqVWmhynwEoQYzIczgtnxyp1qpfeKiYqXy5mJ&X-Amz-Signature=d2fc7daf532cd28aef8bf0994e1c638e884d6bb180192f55c4e19e149dd0ca2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=05bfb552073880869175148e056831af76f1c8db3ce275f8ee102fd123f46f81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=464e83da76444d780b3a3a1404b39793c697f377b944253f9ab14df79b67aa31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=ffac5eb9f76992516ae8c7f8fb27f4c2978bc14422002f256cecb63ddb85b135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=89e295cd576f964d14c8a686e91db97972ec0ba64ace71eae70607e3279182cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=938596f65a7237e7ce1b1c78d303111cc3ed5022f4362b4d031724debc744ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=358a3f499ede7ff21a9369878c924eb6f3d7d129cbf6d5754fe39726070641b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=ffac5eb9f76992516ae8c7f8fb27f4c2978bc14422002f256cecb63ddb85b135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=6bc914e1d4fd98e11ca1433940127463771a6090e90b503a25283bbf5248c33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=94a5c85b69b6d38bb3a6e4083d5b53d41fc17684a5086f27412f4f0baba7548a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632FPPVEK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXySCqAr5FtoesidUbIfseqal%2BB4EBQT6%2FhyWiufPS4QIhAJG6QB5zSsj6h4aUXX%2BNZ9FxNDxoNUEhH%2BICxHWUwRTcKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzInB%2Fu51%2FF6prw7F0q3ANoWStzSo%2Fb%2Bw4o4GoOCC1hlC9ClHPIViqe%2B4gdHW9xE%2FqXTxTI5syLTADf9cHFvywXJSDa5Tsq9tCs%2BMJkCnqwbdjgW%2BzAvIqpsehoCU%2FK7CLHnisZfORy5q2HYrp5OWqL62WaFOBYtkEG%2BI6j2e81xOPjv9v4WyqLNGC8c5J4FCD8M9gVhLurOvuGXqEfi9TjtR8OWO9yM10RIQrnmJCymgNR%2FDQ%2BjadFZ1K7ZkqTOyoTsFwNOsof%2B1rfbsB2dRpjS9mGrFevpUAxRL4hsa6Yj1yoceniNt5jwldKOzPyTm3lfbN%2FK4Aaj9wQ2pWuXphGgKSD0cUOT8R8QVdTWuUSzqe9sqxUVE5fG5g3z7yUikieN%2BbSHUVPESu8u2Kec0xA5%2FcTCV7CUx1H68WVDemK99QBjkZY4kvjMD9EZMyWt1nV4mqjZLZtjUGyhVY%2BqMrPbF6rGVbF4msMF38DtDsaTte2JjsqYPwcsfMaLnb5eIzNVZhvLB0MVGjHddUY5vUF9I8BNoaoqkkLyQRlf3Ozre9OvMoy4zGTe7N7f7al%2BWjIrGwrmjKrrewEXPoyw6fKpOU1ClBIIZiJor2XoFOTi6lDUNopK%2BsKxHjEzO2VZtvWM3%2BiIdkdl7SC0jDI5dzEBjqkAZfd7UfHlrQZaPOsNcS46FDgsW3VP7w3NRBMh%2B5Bn%2BTL1fYNgCxVEWo8x%2Bp3HhxjV8udYitQRNVeQojc3cMNMPW%2FFekJfh0W9e%2BorYIAVviSYQP9dpsLRar%2FzJNBjPLl2JUHRn%2B0dxyVYUr1wDopmN7haoZWULZ23D%2B5Q52rZrnoN3jJUGR3sGfj8p5mPh5hyf6adyHinEm%2BRBNvQgC9QANNtsuw&X-Amz-Signature=d54db537a9948bf7e17738e65347dc74c3b3cb9ade51fee22dd8f8ab0104959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
