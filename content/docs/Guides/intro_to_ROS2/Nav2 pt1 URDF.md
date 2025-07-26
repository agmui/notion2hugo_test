---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=9f23c80d630bff1100a645778f23bc9b9ddd21ce8e3bacf181eb34660183af19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=39ecc29794e267c70d33570012636ba8806b28b16b2d3520c456a14a24f06c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=e94c6231ba91b86db177ffeca8280130c8bd798c401b53b5a11df7a811e73070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=34c27ca5b5cc73434f060d4a83aa0ce6de1f61fb1b29428bd407f57c7ac763ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=cc6218f7199db64959b6d3d492fcaffa34df50e6a8aca4debcc753541fa0125c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=c7568cdd998d5825aa106f0fed2fee8e39feb77375e36f617ed6bcb2721ff6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=c119959950177dcf894fcf6380b6aa1350af61819ac95ac6dbda0c451567a967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=3ac408094aec1463973e4de114b467894098dc695c558e0d65645f82b92fa78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=65638b6ad4d5208a11d6f4f121abc6ec014463f3d1246942cf02a9dd8e8366d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=1ec61a0f712e37f7fc8b1dd3fe3437af7b424e30d87ec235b749fe904df8007a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=8697bede0fab77129bb8b2eeb85db4b4c1b07c92c6a0595c2b44d972285038cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=a66c7537305afea857a88aafa7b0355934fa0ce7d06ad0526cf460f945bfdea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=6811e27cf541564c49d6464c4fb4bdde77f3ee306bfeea474f3275ede5bd1855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQEDJ7J6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGBPwjDS0dWgI3ac%2Ff790Lkq6%2FgdEqApsVc5Nb%2BWoHaEAiEAphf2aeY0WgFd8DvZXjrA14cm4v9zRLYxvTRWrHMF6gsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDB76HY1OHK5Zs9apbircAzbUkumtvNwfn29FQ3r5tkdsAQEEL520lOnsNh5%2Bc9NfeJqPyaeasdOWCUpFwBBKJxaft50OISfv3wGyup4gX12ki4tN5DxPnGFoa3cQ0hNqfAETMx%2Bwf7ajB2kzoaolK37RehGuSwgmTEFOcs%2FZKsjKP%2BAVbXDOzG6IXuqouyz8mazuoyp%2BT%2BO8OlC93CWIuWpw9w9QL0Xj2E745j1%2F2PdqVxhmpU2X2RX1lQUbbXfgPRCIbZCYj%2BIENAcWtT%2FvmxOTyOYEsjE3C2ddSKCX5qsLJ0RtX72K4fIQ%2FyZCjaboRmQ3ZzEADfUGmNTQ9ax6cxLqQKLntJfG2rmOTN%2Bof7oHhnJkYLKYB7cZv6lFDPFT1fAscxkpoAcEclsmg4vJzakhBPgg9IR%2F%2FMAxIo1%2FNwvchXD0EnmrU2VIb3C9%2B%2FWBvhb%2BFjdbEJK7XoTourrpscrsbDMnd04n531Jyu2DAyh5mldZYvF2NZc7eX1NCVE0jtNl0PhjXtKgB8545nYnyj%2BTlX9DU70LlISZO9soLllgxk73nAJyJiFq3CxZHIpfVr%2FJ6TOzA%2FZBWRWIEwh0Q3tEKYRvIS5RtTXwCgKZX8iINGXgjhCzMz3W9mqxPdSFk8ankQf6Qs%2FuQDOPMI%2FxkMQGOqUBKMLDEj0jK7VWdZBMfyR4f%2BwHqhS6OQvRY1%2BS8QYhIy5cfxnweSR9YVP9jYjhsMDABD%2Bb7kXuNTnZLouvfkbZW9uTPEHUbhG%2FXAwLw2wu%2FOCgfNVlsAFSFg39baRzinq1HRNJ0o420RiwTPDxZQoPdwU5uusG3w7jBoYgwRT%2FB2hZZS1xuyQFTYm6UHAdtZELdqO7jiMHiHLmgvoa2ioYgAIH3BE4&X-Amz-Signature=13433d5479196e8597551853eb85f407b498d2434b649043c734669dceffe26f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=0e8f1e4af854e8cc0d2890d9fa7d09282206c3832db0b311335d4aaa9b1f6d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=e528828bb321025297926b8e0a88ccf302b345565334f8f741a965bec18fffbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=dd99b55a05b9ef87d4b8b36372336ec2d2a63b4e5af48f0961b793a97acadd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=3331d849f0da5cf35a7e5afdd0277340d2f50f3e8616cfb99c472ff41731b83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=dc9534fb1bbe05a915f959425fab9d88ab65b18b6ff1221f2cafb7714fde4a3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYSOS5K%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIAEN00JsBgMWxRIR61uXPHok3LjuDoVcV6iyXZFnBQ4FAiEAk5zQBfNk6oHz%2BuE0EPVFQHnPwN%2B80PkZNrjNs%2F4%2BgXcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDO2Tcp4%2FtpodVjz0lCrcAw2PM9LoCX5mYVQJTQDFrwbjqRcvwOqULXE33qfw2sA9rcV1i23vIBM94L4%2B9nl%2BfVLdKEJFEgPmRlS9%2B30W%2F3PGvZMvFuSSBFLSmioP7cEuA2ALc44PvKD0VYF7xcmyzU8mC7OHMBWlpEW8uTSfGIO0GhyhGVWxDCFsIzMb5wupIrQ7kncE9JSZUzQW0DVNMTI%2BkLJO26Td8bIouN2a1lrWxcMK3qX46xbVZndmxFKbCIFRTYAHBnS1Ir9zG0a4HJEKEAm%2FsUxXLkDWuyBCR9648a2bKsHlw6c8kgLa%2B7VB5sb8rBsm7P1cMGNrhEqgpevM%2B5F8QNmLEyfnlsy%2FhH17jE2UzN34cGwldpbRZD7wCgznTQcpxnvo760KlVWD3gOHX8wnkAM5Fl5BJhjWRLfSBqSd7QQB%2FxSffpDU%2FXoGZyXTxOTo7CHSuFDQjXwwRndMYVrjlzUhVvf0XF5I0Itboai07al2sDMywwb%2Bw3GyBz%2F%2B7u%2FEewhIKrm6L8f1goNU0hIjUm4Ptuk9k9bAHl9RLX94fc8PK%2Fwo46%2FOXTg1OjXSprvgXjAsMBl3dxQnus5lPqsLsHajfs%2BLb9%2FPyVZb29bMBXZLepDdkAMmm6onnwIJJ1PQ1CK1JkQ4MJj3kMQGOqUBtkYmhN1t2oKVUNLW8%2BO2kVXbeyJwqG3S7BuBS1rHJ6wI62oZWChly%2BWaGTCfbIKs6adM4O9LQdsJm%2BTvLEmSqjwjy5kPwdjyOI7ND%2FoB5UcND%2BA2DdlOVgow0OtLsXMUHAlWdviOIJzM6g83rcEjHfOdMlwpuZnsCzkXcNn%2FO4cemVn4qVRCC9OsobIatHcBWiEZQFKaQg6w7XJK2P87S30aCW6K&X-Amz-Signature=d4afa88925a7019c8b21c666192b2745e0bbb457f92dfab41ccaca12697f6c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
