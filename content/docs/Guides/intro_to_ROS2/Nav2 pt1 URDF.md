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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=ccaeab35a2a90fed8332a5631d42bc153960445650bdbeeb1ce8126288939da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=4c54612995b60c8030ae74a4a33877b672e9eb15605eef27f79b8136c446c4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=5c042358ddf5a51c1d73b17b4f21a17cd5d508c25dd70aa326d4179f43502489&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=d1f0abf6c8982a5dd778516372b36574b85b00c35a50e7f37c4fcf42eee38932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=43ef03e51804692260ecb9c08e43a95dfcc80db21b97c51244952aa0ceb69cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=b87e63beaad85bee96b7c67e0d7f5ee371cd1b76fb6bde4cfa787febf5a60065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=744a942c0a7b16216ee22e3358cdf4f7105498e4ba5660371f1bcfe26aabca2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=67f9ee9c906c912368a155088a8413651dcf7508a02e4e3000dcd2aefd031bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=03d2307ca2c77de5f8a2be7cba07a54bd0d00de031600a833cb9014c9e88450b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=3f704bca3e63d3c408de5943d2630fe3060dc1e774e70f2cc7c45ec79c6fcb54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=5a6e7d8ccb87b77ace83ba639233430e78ead54cf309d763a018ede3cc6ec8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=a94a9a0cc65ebbe2461208b88d292670c3944e0975c89d8ace4a064274f77e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=9f2f442fa2b20770a2e6c1ca47bb02038486f9e7a9ccb27d22d99dfb30457bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYNRHVI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIFN6bMqBFmLi18iynbga8ZHoh2f2o6UbXWcEiQ2%2BiFMHAiEA%2BaEwn7GQit9aKLHmQCW%2FAvwrrL%2FV%2FLMjU3V8V3Zagjcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDK%2F5m9gUm6ARaEMGcyrcA5mo7HNH6of2egMAbuL6qAN0f352OfoeciL%2Fw37ztxaZQ0%2B59ka67pSxDxIVnMeGlH5coL8Zr4h4drs%2FK3e9OP1gUAq7d2KgYciW5qsCoqPEnMLOmc0Uvj879y4SlVjUgGD0TMRq7tkwD2GiOSLXgGJ1Fa0qFEJ8S1HkdBmG466Rkt%2BX3%2FeJNBUssAFc7EUrdkT1zoOZU6sOjG4qxrtrUzDxF4y9uBgnMPLbpJkgLgTL43MGKh2UCB68p1jvzjZgf6jbQWU8ZWL8ZkKRsf4lb%2BnRXTJqnfUnrUKSV%2FQw4tHwLqfJTIgUeyPG%2BbBkmeaVQQkIdVunynVEVKbNuwLiZhu0nFtz5eQvea4e%2BtnjkCZ1vwBMjxLL9S%2BevsuBQsk7HcY3aEm9eKKuYWW2stBNXTR87m07kJMtbJKrrE%2BYHdBcGMupxx%2FqnnHMQOURJROHqGu5ZVV6M%2B8jNzqPzhZBJhtztesXG5H%2B27S2VOuKotI%2FJIwCsyQVfjRos2f8OXQLswMalad6ZpCHUC2ciKOcCbBODptEpJdoUAdUun6wcR%2FBbVEqej%2BMCL37TA7rCGqCkzEqVKStXJ2FZY8OVqPhqzn4wrtWVjvVNozJNvwG9KofdOxtuHXX5kVvdJ9aMMP%2FlMQGOqUBWsgIyFyxU3cOawz4sLKgaOtxyr02zQUn%2FHa68u7CLEsqylG36te5apYje3J5XKblDB4ypgXlb8lK0bkVmY3MrXJq4uB41DqW3FV%2FFcyF1eltxtYsmzsluZOaaTYVFXc7WNkh%2FvzM%2Fe8xdJ4hDEEiEbDS6Xz8g0wceah1t7%2F1rGC3ebcBRIgtvC5I%2BX2ek4em83PcJmcmzzbuQyyB2yb7ihZaOjFp&X-Amz-Signature=4e556d00f744174cc6bfb51dd04c9935f18448b47e9c18ec24d9f647e363b93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=6ae9d72e1c1ce6085196fc9c22446d24e5951884fe26c128a6b98c870322d66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=6fc2956924d0b3b4d72d9fee502883e1b39d918a0ff3772f4a0b342427c5edbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=d79a62c571826d507a817513d27489fc61dcfc28e2d5b854486145263891c719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=af6ae5f48217a8aae5c09b3f155dea6e862d482f08ac95b07330a5b43edfb343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=b3a775927f985d76ba3aecc08ffb0624edb878c7fa2410398e376bd494c7f248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOODUK6L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC2RYBr5eTWTbNKYhWJ3uj2nFuA8ZSUVyP5q4G4me1wtAiEA4OFG6AcyBWe0tfOg4kH%2BnY4Etc1P7QzPZQRwMJP%2BjE8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJ6GJRo83FtYNU2l6CrcA9%2Bo2u6wIEtV%2FzvyRy1PQNZ7cvzK7Ms5dP42vLH9R7YiV%2Byj%2BRkymIsL41phssIChCLpaSqhhHJ64kK21qFG0XnlYpT8bueJ1rjdAxjt9kzZfcvtqHpCJpq15VwvpKxo2Yy3DObR%2BRcSDaDZmQJNFT%2BIJDpwdL%2BYnA94IM6D5xqdvYUgrN0c8ILQnesoFK2a7vwKpCebPDn3tZiQz1HKW5DjQQwP15eI29IrKwC4pS54oXFRywilq%2BLgW0E1yipdvJDMOyA4drlQLDQQTuHXlR5SMrxYZ09ChdM2YsJ3%2BEjwjs1bcxH4LpfnfinVZbqiyfOPNdx8Mdu5%2FhbtaLjCED0%2BB3xeOo0FqsNxfD15xlKtz7MXv6GCalI2ZLF9BNnPAWMW78H7c940Khkml3lvvR4mMGpf4FQYxWclzDi1r3QNIDDo0JTLplqEHt26bZwQgsNYtxdznzydU4bssd0kopPK8Qyfw3wABRXZVDnRJPkc2TyJeL8scVv4HqjGRR%2FPsGzlv%2BccdZIJvU5OgZclim%2Bl93u0EZ0qin9OisOwasGhXTeyJcF8SnhN5uImQqcXCfmROdLIhWLbzCtEahOTkvNVdzz6SPZQXC%2FEFyS9BgzmUbLZV1reAgrliFGmMKz%2FlMQGOqUBQ5cL1KgUyPLrFs4N5c8DdP2bPGAL9PhEvEjc2%2FtyynpFT%2Bf%2BEkxEHmNUIcudQrHIdMwhC1Jf9zcomdOcM%2B7RIC%2FKS1yt7I0cDAj3ni%2BVg01QUZEI6j0hcEAitsO87HbeMsTiivEPzERomhasyGSTUQWGroB8nsZ03iK5n4Jj3DErsJGPQuNG%2Flxv4oif%2BX07Y4a9nth2H9ZZYmKMv95dNH4pV1my&X-Amz-Signature=c4d09564ed84b8886af9341dae4d36747a0bdefa38afb6c8ec2ebe6f19bc7d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
