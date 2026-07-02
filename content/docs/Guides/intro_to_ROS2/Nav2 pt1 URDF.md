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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=2036afe60edb172d6908b5adc5657e998e8ff90f89cfe96ac0651688aaf16fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=c37f196631affa38402515626195b301d9622debe7dc3d765f2c21abcef49a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=97a9f908725e8bae2b66f0d927475621219ccce14ab17befecebfbbb09ee79f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=e3d2ce8b0fa365b134c83b10ea5f3d22cb84c247b8dbd0cce1be99ec9dc6805a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=6d1741e29cd536d8964852a001be63abf9137bf9a7ee2a35ad09a6a992435719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=f5c3ddab836f650d312b647ed5dee32116336976afdb9b7648deb03f0d968b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=ecebe429ae25c2df9dbdcea1586917d1d7b977e68fd019e6095a58fb887a212a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=55207104ed36f6c0952f21be027abe5eccba50865ae3db9d53c2c762fac9bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=e745ea92e0967f1412d20a88891faed6a823e02223b5b1427441fdcf5905951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=1694011ba0f21dbfaa8aa9055a29a0b4505fc93044722d8e7f20e8d41e53ab64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCCDOQS5%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDVIaR2%2Br7GYXqD7NHIh4obloRWQiuolP6kGESeQl2HqAiBaZPnHpv%2FmY6AQASdovwpxPqBSMQ1caHz%2BawnVvf23kCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiV4O1yQKbwZESGbpKtwDHJlcd9kd%2FiQug3b3dsmoE8Z%2B43S%2F6xtHlvEPfjuqzNRxdTUXe0YYQ0BcDHxQ4AXV12ptABMjTBjswCJHo%2BM49Z1V9%2FNqH4XcNvlNBISaTf%2FbogMcMYwqfr5wzIj4ofszz4ImJuIGrA2hi81XNlyABWw1vgVAp7lOy%2FZIiFw%2FfRQ%2BFEOFzTUxOsN3ySffcWWKC66n6XASrJ82obf9itEFP1O%2Fs0pMTvvDhV%2BQy7gbcTnc2MSN3gGFomVrOyEa8HuhUS4w2gvigLWJQH%2FXFkMuAFlyL9kt9KC51rc50mb1HtSqyOS9VOUbz%2FQUHn2Y9vaa2rXRbF6YlesEVCJl3rKAyLfRsobOXZAdg7gKcIV7NSOEkdMTCB%2FUK9NjzOVi2l8XcsSyXnZ5COOT5WIcstVKyIO1Wlkx6y%2F9cGK6SYZaro0pUBTGD%2BNm5c50h7Efqp4CTrdqk7zN5aTBMErPY1e2lbLVobOVtBH8VqV0BX2tWPfsxzKsTh96bSa8wm3twrrpUqRfUezuMoXUHMpPFjwIjFBlTk9ogklAlyRzZJcEmAVJeaga9FUhxyki1NP15drP9STdkuS3IolGb2yeBaZF8kWQuFx2lsYbiwP9nNwgcRvMd4gOAWB9f6Mbo78w26OX0gY6pgFR6%2B4Qss5mKvv8qY0A%2BMBER2NFXA02IqszafS%2Fz6lCtL%2F9VUte3DnXu3ekaEZ77l%2FSf5BmT0xT2mzSfvgGcwS0ykB7T3Csc752SDFBO7%2F4uOPClgrRV41nyc6yRv7Oa%2FSBatcIS1GpDhdVQLcx2f57T7BS0oHV7ct9T6pmoioZNYELkolCZt0pMp2f0fOceVdWa6rNE2JqMtoe7VMbYXoiKorq%2F3YQ&X-Amz-Signature=d2976bd9fdfa4bd71efc43d6b263e80bd59459a6a0b88f1f574deee4fd46c685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAEC6BMZ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHoG9ZZd5j1PLojuYuZudPjpnpQzAicJS6A6L9v2XM5lAiEAn7DtobmtIhMlfe9HbedkkuygrUoVNAL0dh370YnfI%2B4qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTk4YXWdortvsMjFircAzOMohb4ktLTZp8MOnbjd2M2UPexO2oI1vC5PQQgJnnpoH4DB%2F%2BnT9F0ZdAgS7h%2FmYiG7GCf5ljL34GMuF6yrNeBgeQ5gbqD%2Fav%2BDPric%2FYL59YXGLE6IDY5YbxxjWp%2BGBlQMKouOJLZvMzCdO%2FPYZrztkdz%2BO6vUDyJou%2BDK2MyVgYlnrJKadk14HE5MUSp9ayyEX92Oqdv5aX%2Frty7lsMZDztowlDAaDLxFx8DYzzHvqhawh30sAysAN9wOqF9wJRoOAd3ADNlNG7DTvGTBWPtiD%2Brs1pu0AYPMislbnRykgFDLZPXl4MCWm3F8kGPCQqTI6Y2GH%2F%2FVVn46zi7YqdsNhuukaMcO7%2F1iPhr1cpwl7ns91t98fS929ROck4wivrYgAuXviC81ZUzTK5ZoQS8wekvQpPFWTE%2BknEIt5gYmioYj%2F37ASRKg9ROSojTRL2pwJoZ2%2F7M%2BOPtrwV%2FT7BmYDc2RCSDhGEh4JTyrS%2Bp05uJJHSXlTzgf4VjUe5VFnG0HgcaX8BF%2B5ymeVLCjCwDrmg0kADG0tWgRbiH9sGLbrX7%2FiR%2BvX%2BBFxwpjp6XFZyvb%2FNftjIGuz6pJYdnVCBkl8zaYOvrzY5Yw5ndClNKMbYqPFXf5DWIHYG0MKKhl9IGOqUBcJrrPIjspCWblIFdgcvC6%2FKOfkN8PUYfoDi7XLktNLluNmrhuI9xuF81D9UMlJZJBJbgRKsscEhNkqCB%2FgsVHWWh59z47YGlRRMdp2rJvH%2BDnqEeN7Rw68oYqSm7vPTWYe0xHLUgDD6NmwqH1Cpo7837MK6ChJBLjavesWfemSq43UtVFCAbo5KocvM2%2FVCyCX40B%2Fc92BURyUsbZ954eHg4mu2b&X-Amz-Signature=9799223d7a4bbc011352d2abc3f89561bd233654222659a52a75b9d934dd4beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFSE5IJJ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIETdnXnQIJODGMloZ3OK8%2BYAI5nVM2fFiPmrguOptry%2BAiARfeJ1R8MEhf75thgCqFoGpm2EGR8Am8vEOyLaqc0%2BwCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJEvODPmOQYotBbyGKtwD6fR%2FxdXTz5qilGmKNqabmBCuga5VrwV1SNBRF1PKGfm%2BUV8tlVtA1iEtOB9QvlXEWLD0rafDVKuD6VdGdBok26Mr0bBFnt5s8hssjDHppVAR2nk0M2gyWtv00pPF9Zkv%2BBjJEDS%2F37EtARd2CzrcwPQRkxii0rMrt%2B5sR3LSxiDnRHO7oCzZlWp%2FLAWFuXL9N6HSuqERRU5f0cMw3w9HJKXJgHs%2F%2Fa%2B0Qmuf%2BWQ1Rue8xc2Z3DOaotbZR%2Fbd%2BNnC6fzjrsrIjhxXdCYosROZTZeWGNHFWKdBc410k7OQt61xcPyIDdN%2FsjhpbCNZfIB7y0seCGilPPn9Ub30HuJ%2FI3qae%2Ffu3QJnDcUCwMp9Tb0d6f%2BxBxMFapG15VbtIo02OPrlXLc9OTnLffN6MBPk4oAmqRFFXvjS178CzvHMHCiErjaOV7AiXbW5yjHqJtJODKuNJSTwXZ3EezR3SinoEU1lCwtrqy6kL9kgvGZppAYnYqJOreoLO7N745nkeMjn1LlS02Vp0AmXEA5HzOjOmr%2BhRaWa2UK9NXqdh0uO8Bybss9w7PCFDFuPgnW1CnvxhAvkgGdwUizREacUFK4Dxi8tDwMC76A%2Bl2Hx8xosBmPUjV6vVu4RSud2rAkwxaKX0gY6pgE1f%2FDGa3%2B%2BaSu8BsVJuk2zO3S8FOLUbZ9jW9c9R%2FOAKCxvBWPDBDpkuy%2FcTVGKQH8wS30SYsUc2Tq%2FaOdBi9ShmZUbNw984mk8MAFJ0BNFOQ4s7ThSkUhqgLl5rF5AkRNgBdBYaHFi3WKfG7jmHn7Y8dphHRlBfjZm6qovynscwt73YBmD9ZuXag7dl9rR3vWTR3T8dsVxBgDn6DNW%2B%2BDUWz0s57na&X-Amz-Signature=027b11bf8faf8618c2cab5da793692397307b68dc086c897e2e54e5a8d57fe35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=8de9c5fd846f47b9f7a21ac8ec60e642f1b6cb54022799b948f20c880ece5fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCK3BNB7%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIAiUyE5ZBuy5MhXVEYp5gag31Wzpk%2FgpwnAU6Bw%2BdmuCAiEA5ClUNviaQjT%2B6HaD8U9hctuxLDf2yc0OJXnZLarog0kqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG48jzdRs5nZfsUi7SrcA02p9U6dmqz%2BxkqbHtiDYwSRqT%2BX%2BZbwd%2FgXwaAZa0Gv7ZtqsrPR%2F02oKqi2qHIShzCuT9y%2B89%2B650fAy%2BAGvwUJqhmjHcP43gIoxsq%2BFtqvZksocrTqWYv1Ge6a2aU7sg3C%2FCAjgePICcHXFor4yy%2BkThlKDXEytWav2GmFysvNNGElKwepkyKo55mXp%2Bu07qzQv2fFQKJDu6S%2B8uJy2%2FlYXA7Paa7xRISmdNY8i3oOYrUS0sdjENMcBqBPO7kx5DeGkxtTyjEZ%2F067sp%2BbXdldkoQ%2BOjiGV9z2hg9aN84ENmSe7vkrFciWT0%2F739HVkteUYPD3JjMIjBJi30Fsoxs6AiC2vSW50vr4z5Zeq2FSHzvA8uEsh82geOggrHG50KYrTHwFeUz5eTc2DVwcWo46uBt4Q1KkMblGLuoNmCyAe1tL5V65cnR0%2FPHcznIDfB5%2FyQtN1%2ByvXhQwmrfiYW5w8aCV2DzDPIEWsXxIpWmLzamkFsmirtPepuu%2Fb%2BhAELg%2FlaFA8haahmYoYYRi0U8Nm7sKYWHTTA9vdHBLOM8NiLmIHpmc9gkeIa63Ytrh62PWVGEGhWusu9ZukHJrBI4o3KQcn5xtp61%2F3MnppIqa3hr35ST1ePAxY9vWMPudl9IGOqUBDVXQEQzAOyinuLh%2Bqm7KR6ZsgP1%2F4T94DHNsZLwqyZ3AUaP12b1XmblNJX26GYkkxf0SVoTK6TNMdFIsLxw1Ta5xSpEjrV027BAH4KNz%2FG8gC9%2BlIcNlY5Pddb%2F5AYxCyFy9N3BCF5KzkoW8CL07QBAKkLb547O5NOXATVPAxpkRK%2FeBYAjnHii5wml3iel6pVQcWsiwv5PJU761btg6%2FP36TVJM&X-Amz-Signature=2513ef20f24a3db911bf85dbc82d8090f1083cbf0245e22f5b94a05f202a62a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=adb4bd82cd36e4d59a59350a02504a303f1f0d799c6d707833e3ec893ad43da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZKU3HGD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCEE9Ui87IfI2ie90tmxiBU0keTIkzrrv67FJw2%2FkL2mQIhAKTOGQHHLtPADoF4jJ6%2FVUbLZsayrHdrp4fgauNsDP8NKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhTo28wUz6TkAPs7Uq3AOAnBorGRhLN7ANt7RAAJpkSEUVOUJkGZWfk4IFokjQXRbD0c2TU0gmAZl%2FaT1beDS5tUBp0QYCficYptlHRJ32CpmcIveBarI8x81wJVhVunBWadmHgjJhxkPDxYrt5AnT27xDIO3iVkT5g4k1ikwf6JWriII0mXivZeKaYQ3FwSDuUESUziqPt9fMQMx4Pv2Icx6Sini3fzsCY5K0wZykfGJa9yg%2BElgr%2BM2A43lvCloJ6SdXxRwfy615G7U26b%2FF%2B45KDTclQlfw0Ai2uVr3bE1q43rso%2Fui%2BNRkHJxgzC4EhSuedwPnskVBcMtOxY2wnQBEJMQqzl81IKpiInKrD0GSBLmMkRMQSESlY7pIFpmVAst4YZh%2F4z2kcsrSMrrpd1HvBAPlPBYfH5wPhPZ2OwxRRSJBupgDVyn%2BXwJIMG78QWAKhUFZMYtDlq9D8D8oPMX8cR55G71uBo4aZqSyjIBPSb7mZs1B1fvxPlFH1aB66AlSpRNx476TygOY8RY%2BTrjW%2FxH5vCLeaQbkxLUcG08Le7XMD24TMl1b143RvLGmDbteJgWO9wZlFKAbptTS%2FvVb0ynXNYCgJKXYw3f61eRYecSt3ebmyK58vAv6ozi88rlzWOBgeq6PmTDOnJfSBjqkAZHg41%2B2Ob2SLarqXUFVDZqIuaBqfPoFooRABbewAUnolRr7VgdrbRWTT6ROF8f2%2BBksNYENrkfcNErWwN%2FG2V8HBr%2Byb%2FgSMJginsw59pqbwpLjq9%2BU584aanmRUbJ4qzy8PemkS95Zr%2Bi%2BnXaQTXZZQSjKkE%2Fyeic4d4fCqnOZmx1AZBEaDMSx6VFXJhu2UmfZu5J1wJBDvMexeOW7i%2FwJ9lcb&X-Amz-Signature=6edd6938332f7570467d068c11e586004410d4a0f48b1118f825a1416c863b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=49d1513e50d14f246b4e907c48d138b3e63c04a2be7cc063c864ced0e42924f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7M62N2%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDst9Hdx8CWGwEyxrMj%2BCW98psK05MCCIBP2Zxsc31YaQIgffW1n6vPRt3r5DIe3QrAEaGE0XrBSrdWIKnUrMztuSUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7UWTvmqhySoZnWWyrcA%2Boc4U8BSr9gV28nhJqtmcgyD3LxMTHaJxvuE7kqkIDdNMHhG7E0plHqr8DMuVD5pbhOigQkO5vEmJtIpvg7KSdM2ttMkYTxvNEeQdtqjiQ%2Brde6I%2FECxYGPbh9DU%2FSZCP70EEb5PsK%2BNLDjFfmsM9Biz1QZL4HLFEsoQDomT08dYjZ7%2B1Y6i7SxoRryblNO0Az849D8ddLpEs%2FX6cY1maWJ6pvJv4PyMq0y1OuzlymIREX3ElJNLqt81ppgKV6MD0kRNnrhcNvcKx2pdEL77LKFx6vSX6JL8D5h1ZSUowNOhyCHTUrdcLnoyCYj8KuQgo1tdcsfnTyDcNI9OY2t7a34Fj%2BES9jwP1ZKXtUV%2FckCSmYJi1oPMkt2hLYPZDAPjQKNDduYeYrktHgV9lG441yWBsRgwsSvaeEdkp4tMGt7iY1vvCypmktjtShX8erKkOSn64e37eGGTv2HHb3DEZiiwr2tS5KUOVbMc6VtlS00W8bNfYI21HpgQHOQcf8ZMAErXV9cHQtCoL1iIO3DPuz%2FA8fYuYrWPrF4zvE1B4zlpv2aJp3foHQa9EVNv1iVLTNXBerm1mlpwJGCctAZZ5GF6lPJys8GkUYYPUgfNgosC2%2B20CtdiM4OPQVxMLKdl9IGOqUB6NAaTeUqWWCUjqcT%2FvlG60TTgvLxs2Ftwx3X9uPSuegtaKWeOIBg6UDtmEfkHMOuD1eUOPpaU9OFJmUcCAZVWe76EbRjpG4raGXmWKKl5A8R31MFJFW4XjkI9GC4q6K9O86MbDrTNnA%2FqwvtCJin1IHs%2FxmMk5unQqw7Yvt3eTcKtYTYuJ%2Bh9EX21e2z40plq6Qh%2FddIAky6ytIO3IWaCePG3FHj&X-Amz-Signature=92e247b23e51e93877b757024b39ba39666a02740405fce81b719ad56e1d167c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=afa2e034169729fc873ba2d11b9b5abcdb45c95581b21db8889637e083b14bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOUMHUXE%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDq90dDGRGgNzXxuRBkgXDivrgsUjTuhOSnC6LsPYV0NAIgAjbDTabIVuEDu1kVTDoHM6itdMGlxJZPzH567i43V1sqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7feF9X6a7fnSojFyrcA4WKhBNBBZOLgCAA5Z2Y3BvXwk5tjxRvx9ULqdqUjQfwsHrWAz6c5iDy3NpkOyVRsDUeICzcMf7rjVY%2B8eN8VIgX7b0PMnjJEomWTRIiSfY0zONpA6sV3wvzDix9pyMXJ1EFNDHHcFRkf4s3qFRUr4W4xHOXW4%2FfRD%2FKIoqWOyQ0usmmD9Jzw1R0ysa2%2FBhkOCao8WdFQjodKBJz705llMxwPYCYJao4%2B75KBS5X6eFx3C4en2FkRLE1TqwISTvtahLDhuh%2BtoO4xm%2Bq56OFNjjCPaOFGj3AqDs0GtGlF8RGVf6iufcbNPvnbPSaQ8Q3nYZi0arflBs%2Be7YfMipZTGWdI27nEZ5Gb%2FIO1q5vTBemI5AMxwJjAPJPIp2GalCdjFtCaj13DLJbhTiRf2JMWicAoeqKrxQUFrJrq8S0G716bTSYnQ243ngUEFM78%2FPTN4aP5fK6T5wBSojKtq9HxcdN3p55X1ai4XZ%2BFiQLEhQuPgWdCF0ezV7%2Bbkk3XiFrJyfSOYC0PfVNF1NwpFlmAn4aqZu2i4bxSliQ6klypGS0VAp5CfehEZ%2FmgeGnjD59mSulC70MU16KyfWie4KPUVC5DtEQrKoI5v425oA31ktYeUqMd659inP0%2FmDGMKKhl9IGOqUBCyYnR1PSVSl%2FVokNMGTH588ujQe7af8G9zwlujpVkf5iyE38sLvOu21mGQ7aEVPDQE%2BpZWc%2FxnXwa6rBtAWgpof9%2FKDreW7bIHja2kntQz4qDBTlruZUxtNpqPHHsC5JKTkzSPJ85CLuAn9mVlsSH7%2FuCmWSQkxMEudKzYCoo%2BitDprBLHPiKpLfGwc%2BNBd7gij5xG1gqxzO%2F3pOnGjoy8VDPgCn&X-Amz-Signature=abf2833624c412781a936d567fd0230dd17b57c4dd87ecf80f16d86a358dd436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=904139f20a15e9802c439bb60bf9061f93fa7020c0a0668bf6968373de9613da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGOA2UOM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIH%2FRUtE4TSCJcEZNuKAr7yd2OecypuLfYE9%2BLn0eYulPAiEA20wOkP9mmQqOVmoWZgNfXVNcggnE31KqCnxVPkTf13wqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBCW3fg%2BGzKUODgkCrcA0Q7a4VKNMGf1RBVu5QQFnw7HDvCt67icblkIqRh4ngUmP1vIg479uhK3YMu6l9LhRprx%2FHruPKaBzvPqMeToQ99VrZR2TaW6QoaLqSlaj%2BG%2BDrG4QK4zlaYIsC0%2BYujsKVYXK2tEtUSUBIdjYj43UFx89142HHhmb0detgs%2BpAUONZ8XroKUA7PB%2FAsubhXq7zpdAksTXu%2BBOS5b7OM7mqFdrGNN%2B3CqMYa0FQSBeKSSzwPTEPoKWkXRNyT%2BkcB%2FpOfRBaaVLluGfHD9PR%2FxY0GXDMTUpD8QlVFuT%2BLmFZS3vLuvwckkMd%2FUdaE6XvohG9OCqGV5RNd%2F9kSeiS0H2zHl5SuUuRaywa7X%2BAax4qlolFyIY6%2FHGhp0a89j1ayzSy7e8cv5VMAH0lfjkXKwLJW3IvuolDGx1K%2FCXYxj7ONRUQ9y0ngudr4ENvqhGKJ%2FKq%2B1UE80shEqclmyRX1kZr6qozQGqFy5R3pq21C4GQ2m9qP8kAZf%2BIGwWSMXG2yV%2BSVKvriscD%2FJDWavbbrCyHKIrvs9ZVNDNETLCEX1SOJHy%2BT6%2FoUODEcVd%2BOxiwZ%2FK5WFrmQXjG8jhUmAyQre53yanlTROk6C2F6dS4hs7lPofV3fmIyFuwFwdCaMIWhl9IGOqUB7JxSHcyjKKKIwnIeKawSS4w1l8S2%2Fy3JKfW6%2BLxIeYooG%2BZPUuUCjeQKZakm4YbR1wsLyAkhc%2FrO61K1HnH7BCBErBRrM%2FNacPMTZ7zgs%2Bpw0VCBkl3MFQPjoHlKRvJ5Q1uD14ti8sbvQbLwQfmPUFtVOvLZI090ZyaKuMu6KPcouBbX3AZFdjk2RBCOCa%2FGmu77oSA4tEULXJKbuHkomaD79%2FO%2F&X-Amz-Signature=636892311c2bceb00e067ec033003874ae5f467730edb486e31f79a0e74a9176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHWF7BR%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQDatWOukyLZqQYbGnDFTP9Neq%2FAfK6IJwz8sqIWIiRYyQIgEZ74XZ4nEkn2v7W9m1oGdNnxEju%2B1u62AM4yOvFw16EqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtgQL0bdjoGB77cYyrcA%2Fw0uzSPhOC3B3QYYa9HQzKITDjIcgDLH%2Bv%2FFIy9DxqmN3nj%2FQFr3bIUidlaxHpThwJXoGvlRrwkWdUUKhFtBFQsrHoBOICV%2FN0pnvsrEVPMAIwZNm1ForaG6WyeHjvZTtQ3MS3BUmpy03J6aZGpAmtvr0z64wTDX%2B3xg6lJCXtY%2F0juL3yspjZAUA1A4i7l7%2BIaoc5uN20BGL%2Ba7ZR5ejb%2BwWtFLrVdUP4dUXnqvM7LXc2RSTGZvTbE%2FcGZlJIRSRqjT%2BbTXLh2wQZd1QlGVZy9ikLKKJPl5xNcUafkAoawQbwPE0yjBSrdbjaLiedrUPSdLrPW%2FxG4C6Pwd3JPerv5ZoYirhE3rnUTkscQyGM5Dl1Bz5G%2BjHoWQNT3lYgOg7b0tG1Jbh%2BIY2YUBZlsmsIXtxTvv8P2qOvtf8lsPHo%2FYJLySBahbAU7SznDGqwL1i0IuvmaExRCVXxeAPGIxiSIBSy4SRtlbugFd4BT5I%2B0mrLAlI%2BHC3LaAlF5aAqYpIwBkVDdzEEVRD6ZaDtFkyxtm9f5gO6hVL98a3TWvNr8U9PGeUclKbebKKPjWqIVrtkbyhi8JDLRsCR39EIzmbSDW96xU50V9eBrqJSSKojCUQZCxeT1oG%2BwEwUnMIahl9IGOqUByMdbHq%2FJopskDunBCMPzuOxdkZ8pvNdrDTWCieVRw%2BSKzQk8uQdF41PWuWUtYqUmEuZCcv7r9HpblOBsTtfiNjBPZO46wkLwQDi8Qk6D7L3pRPrXtZ%2FIUYFgzLBb46euYZdfbuxWhJ42TgQdYQYNVcZt5jj%2Fcx%2Fi2FwZAA%2FDQAyoPXNuq7bcMyk6bcBf%2BTKAQdM4XRtjB8XVVb7X08in%2F0xkmquI&X-Amz-Signature=0b0d241fbd4922d79ce7a72dbb4c14d6bed2615b8d4bbbfb291a6466d106638d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYIKMJC%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHKfdodOXLUt%2F0%2FNDmnq0M02egAdAl%2BP9OOWyrmxT1L0AiBafJxhWuo%2F7%2BzK2r0Mad%2FCvr1HcZEQQfkfKux7AOhnAyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvNqfE7gJvchO6%2BUKtwDZZ1vtGnHxEu4VL7BiElu5uSzoJp2RFLZCmJ5S6P%2FWoTanHKmfL1pn96qAFDbD%2FycC1061VZ6fmu6e83mPb4VBJ%2FQvDAzndSC33lB44qxOkfMEqjD3Li0FUxZjsfbLrIzSbIlDyZXFxpHz7i0O5v%2FdHandEWUrPTouBniEj1ApwydsWFU4N8wx%2Fuah%2Fjo4q3SMpmpa3bGRY3SZ4k3JNrCLxcDvNTA1T90%2BapXPRh4pDLY9r18k5wBO7PyRHKdGdq4IALhCVFgYUIuh1BGcfDIURaZTRuo87xoz%2F1kwEx8Tb9jCz%2BJk8vm7s9TiP2mdtInO0ddM0C83aRVh2ZUsdKlVRQSKTRU3MAtkbo52gAt6q9obORbYFqrmlZpAOEMabIuZ8FQ42XEdbfDPIG3c5JKqNkTPO5%2BIibOKvSSWJjDA5bJkqFS90IGE4t3SJ99VyE9qg%2FhwhHQeBvBRrUgVvYXsLsQ4Ft1bc%2B%2Fm4ElVHye1CXBIEeWoKM1eDMhFmQEh6sFSB3eo%2FeC%2BE3cvqV%2Bs775ER3U5l53261Qnjfqk0vHAGtbe0aGuhREcPzhCyx3%2BRE8dwfl%2BVFXEaTpCIoxf4r0YfAJnWWVlW4YzfcE9arEeXCOWN1coLNBy5S1upwwsqSX0gY6pgFXdHhKCXtcqfqEqGzyiZgKQ2XuKOtX94Mue0msseOuHdsnGixM%2BRgRR2NSEGL0HlKejF1PhaC06lFHGSUTONL%2BAW34qJ85GYVgwvZkGP5xZPQA6aKcNXpqHIGx1B9LWVxHvNbvVaj%2BOB26lv0Rk2TQPRawIfs5Zz3LPFpy9c8a1M52noQIDQXPeTjPRgY%2FnqvNS4MRm1OW2T23UTuo%2BtibtHdj0lOD&X-Amz-Signature=7fdba6502e98104bc4530a11e6d14c28660b527a584095d7c308758c432baaa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=68d46466877f7e136f674cd8043839ea8d4d67e1461329d03f1c532ad52c16f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBOSUBTM%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDko%2FErAoqauGUYWOrSKj7I248VvkeEb9HHfjNxWcDN4AiAw4wIIjoc1OAcW7YLmYk8kiUk8qvExgqFvkrojavxgWCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMjEKuNELkbEKsXCZKtwDeecAp6BOeVTf15fTS3oG%2FFUpkN7xuuaIpy9eOzIfPQcmbczAQDASssoINFICWiVDOCyG3JM%2FVlo28bql5Cauh9G6ZrQFwi%2FTpPbRY4zwenTV12TXNaJWasQRC1fTJnQxfSqIzswRbG0tQErsREvWJ4z4epX6M%2BIL94WQN7MwWQW4YDoNctR4Vgm%2FZnnLN%2Bljcs%2Bx82vcqN9vAanL1YAkgG1ONM5C%2FtQotIplDZefjLeBNhXp6PEHPl7wheaIIqHUiTssW%2BNl4meKjOZAK7h3sTm5ZFIncZJmV79stgEhyIJRMNSKL6BAwikkJaZtPgeM%2Bxwnk37%2BbN8TmEccewCHcK%2FyE7XIAglssy16l1Suxsmo3MfJ8BHVeoRwmZ%2BBLZRos7DCP6B2LuPGetN2uSuGeBWSpMXAVPPN2iQK1j2syXs9qP6X7l7MqyqSgQgC4Ocv4TjVQ8dx0DKRfEaRdCEdfnn%2FaAQGSQJUC1cktl9YKKbKXrxjwY%2Bc9ygN36qBr3RLioUxh7kCQvj92P%2B2Ftm9CJiwYys98yKOGJ8bkTR6fDWbMM3Pj%2BY5S%2BmCcPMbomg2839ITE28tpQ1UZWfpuSbI5pStvubqdZggRlOv%2Fs3x5dI%2BvbKk0MHfjl3%2BsQw956X0gY6pgGRm2dh5%2F%2FFQoBdy69v0izjQaszn9EPgpeBoO70JaPjmFhXLra5VBkQSABrPojae8cCB%2Fgw7opnjGE9GW%2FOztw9NCnbjaRPRJzaM5OwMlIhF%2Bjm84CMqGSsKi%2B3DP41oFtI9rLIh4l%2BgJN%2BhGO0SwINULrQkKOILeQCZ%2FCNDQbZFpM2xyZWfokFTZJ6fgoThlftJZCYjuNyavl7Ey2ppjMGDb1vHGko&X-Amz-Signature=b4985d9a138709b6c76dfaba34106cc643e5d4b48673a6e1ab37b5f6c7f9cb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=ac788f4dc99945b521fe3ab787d6fcaf12d494f132ce75399ef8e5e58dca4d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=4b5f6dbda8001789a03d8cc1f41752d30cbca8e084201e95af66dc6fdca3ffcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=4a7d60c68a7cc3d27af4333166392d5abde4ff885566d90c2e2e4c74dc48560a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=2f7233b0fbcb421277ea9cfb12c9bed483463c6394982aebd2c05f1ceeb62e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q7LH5CD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC%2BijcM0%2B4gxI8ii%2BfYT1JNYoL%2FMP7vgOqPaanExX56TwIgUiYRaaivyKHWn6aD5OddWBfuZY9QZXrKNcn3%2FYF3ZrYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqQoyYJwGqvi7%2FldSrcAy4s0MIWq0B4OwDpZLWG85vGh7QafG38IWEc8amB8AIn81cQo40wZ%2Fh5I2vmazQOLi5C7awyAZYHLdXkVe0Dy9hNu%2BLfdvJNezBsXIyBGGFdOjxiDGTuJXoPahvsWzjdKUc%2BgPPwOOzDQaBfQRbV3PdxMIc4fJ2e82b8h1c1smCHgq6RzVf1LZhE244QZWi0hLDctwdkHHP5sEg7N75Eud%2F3K6M8bTWWP4eoTWE%2BpSPpHFSD2%2FUdWTDuZcPlmfs2Qc6phXOrzfTvRvdtvyHQB9qZyFSnT%2BFnjF7TdAR%2F3b4%2F8oa072RtWI4BLCWP6egaBnQzt%2Fg46xVyaf0Fm5nWzC3Ug%2F3TEoU56%2FZDNAx3x%2F%2BGMcoVae%2FQAgrvIuwREsu%2BECm638TZ821ZMkxRl4%2BHDE3qxQm1Y5Vl4hwU%2FrESV%2FNc4Zbdzs7gk0D6dWkN9VYDg557gSi2HPs2hJsc9oFsyFfdeeo0sIAat8yHCBCEePo2FPowXIE%2F%2F2x5I834Fih5wN59C0tMsNLkTi8eFwdJgLqOdyyUSdvvmkl3cE84ysnbCUpR650kgO2%2Fxl%2Bdp5bkS54MgIUNTRNhUEwD3%2FHmj0BTnhof1lxnLGLQCY7yOfXYCkLFL9RaeSaN3KYkMMqgl9IGOqUBdG0Ib3Ug3jKzn%2F5fzgGplzszlSzIZSF%2FScpotbRQWguVxSbiKWOgUxKYzv%2FWWokljtdrOsIENWdeFdeFt3uOaSNR%2BSS52H8Tyoynp8GUlYsu8iwQnmCtdC15HNsH%2F%2FUqN1ZO7WBv2zLincD2UMbOK3jth5KP%2FsYb6FIJF8dCaNHWrq4QvX9Ww%2F%2FXtZqWBnJMsV%2BQntX3mx69%2FbeaVC7juxiBcOB%2F&X-Amz-Signature=d5fba87b58c52f87955d8abcfe406f42a6589bb34d0bd4d3ece1e9c8ab362033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=5e8f784292daad4743a2c9eb8237faf460028d805de9218b3b34a319fab5bc94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=cd9cc38952ada14b78d9a16a84722570337a63a9acc98d072307a8b1bb1fea69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=4a7d60c68a7cc3d27af4333166392d5abde4ff885566d90c2e2e4c74dc48560a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=50e64ab6adc740360d944a60a5f32bb49b27cb5343853eb663d7c479b5872411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=328601cdeb7dd6bb4503f6ab2486453d01e47c5158ddc7dc07812f3e488cd611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEO23WZN%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDtZJO5pvKHE%2Bf36ufiXFEjm2vt9H1o6PwQE4o6Fx2QqAIhAKIv8ibP2hj7wMLdBy8FyrEe5ArL%2F2PLzFqSkX8Nu20wKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJzUhRvyWRVYEZUIcq3AMEVOZSnXxUFce1yewqDQvL7W55WnoQsvbma5lPL6pTjm9Qbn6yndVs8kJnsQKEIs8WC32BfUkv95NLHudUb%2BVVzbE%2FCN%2Br93uKiFl3edF4ClQoTODbzKqenllxxDKbt0DzNa4%2FDJCGgfchh9VyC1XSy9vQjtssli9lyotD9EkQiwjYs6U%2Bub%2BNYr1U6Ww08Ibkk0vFHq%2BPgsVSASKMgZeIIsz14fEQmzMA9f4OITHsR9XPCJ4EVn49yRBgcyIG6woSzPiaRo2p3tjeLhFs9f90zOVSA5KkZ8tANIAoIlxh%2B9hsJXl67WVXEuvNyBDxoH90f138aEWRqCejPdPM5Ik3mxI0khGj4h15YbpxIuqXwnz%2BAILksqAi4MDlrj5vGnXkmlQ8XZcXDfPGBPHPhYgFjdFdI6q46DtiY8q%2B5jGv2PIvVQMXOgqEO5qFFwaB9wovthAQzB%2BePdAUvdnzaLEsyPGAKjUAp36bmIGnloJgLvr909hhJr9oWEE6%2BcOHRotNJbjRVloBw%2F2R9k1z0rttinBiBXmvMwQdHjpjwBY%2Br8VI7WXLnbMOZJEOGmC3u2XLvCXMBXndXcp2NW8vVt2b0ktaWZ40cXrd595npbpOSAzE9GAr8NOjGkypkTDWtpfSBjqkAUzH9CBs47I5%2B3aDtVtWGNCN5bVWHuDaknTi8fPykO2hu3F0NljvQSukstyoUX4pmbaHbI%2BJuG%2Bsb5rvdfHpfVPEbLKp3E5snd15GJG33Ekjn1giHIeupBccKqYjjCveUpOFQcGvD9y%2FGFvCtIcmdL7cmGDS%2BAPwNpXK4GrLFw8tAZVVlCaJ%2FwYg9SUCdyPkPnEOtN3A%2BV6%2FnqARbWtjMZOY8u8%2B&X-Amz-Signature=d07152e98bc120326189025f1aab2e9692c5eafa754c5c9d12e0f6908a7f588e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


