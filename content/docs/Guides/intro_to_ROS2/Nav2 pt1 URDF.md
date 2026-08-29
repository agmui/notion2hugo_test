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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=21a1613efa253798462314cd7b074e1c966afa0d0d4a77bfcf5c14b16e67c29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=5fd0392810861427da0c14cc073219c4953c12b1b957a55980f5aa20a0c2e70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=c942c620a985821a8fa9f240946bb98e9749a7b2d58f9e1b20fb7686a184d6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=f9b747d265ee8f4c45c0a38ade8aa530a63e50060de41c5987b958ae57490533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=9986e97966c8191723a5141ec3a4f246d5b51a704a7e18c25958f2b2f0ae9840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=3a755e9333d5c4d2e076d604371de4a5c1d55c31540bc036e91108e28358c3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=45adeaceaa47c588215aa7377a0c119452ca18820c7ec99eba3eab3871c09be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=6863d6d186791343a31ea35cb4900b484ce589638320d11fe051cf215fb8b390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=2db7400927423a9ae2fbd4f22cb4f7d3252d008a32a00e4dd1075bbae65625bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=ea0c254f403969078842b2dc61fe0246b75857b87b4201559058e9763e917d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCWEBYTZ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2yyN1KIJ4jrHcf%2FWAOOyCFfHUzBmxEfZMFSRuWISXBAiAJUEAa%2BotPsPJ7i5I3RqQzg0GHSaMO66ZSp9yEeVLa9ir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMAD2nGvNfO5pFWBQBKtwD6LQOjeqShgrd70HMORTB%2Ff%2FbOlUR77jFsZBmfQF6ayExy6TQyyOdSudG1d%2FJ7Ma4BSm4f4daS0GbgcyhO9qXyV0aHOpvBozyoFowd%2Fx4EvLVtmjcUecApS83XSaVqNexMzGgx5Gt%2FarRyuoggRMCBul5o11Z2umQ9Q4FpUMrFhjF0LNpJQww1hPcx50%2FYuRACTsfQKoUAXjPKK4wGrfe4lG%2BfForghpbc8%2FnFeUSzcvYCq%2Fnl6WnDQs6B%2BSB9fnvBMD4s%2BxeNVo5FNQ8Tj1c%2F1DoZtF%2FlaaMz5hc6kouOkRZJGZElkbKSErL4x03gtXWBYbznfAzWuUmAFIhDk6nkwNW39pIP3cfhKyGf38D1CBlStr4p95HkF5CRt%2FcHMhQO%2BI76IpWl6tLYbM7NCO5C0kyjmf%2BiILA2f%2Bviwjf32QNZTROvx4fo03UCPuOTaij6IspcmcWMWHqUvxj%2FPh2%2B87mFFtQZ3%2BVyiCc%2FCL%2FMYdi13nBIDr7hwgmLnKxXPX4lMmurbzbw4FLbRFSx0LZFWunRbq6I%2F%2FQElFAk7XMAi%2Ftq9Qde4tLtVAxfcbuF%2Fb6ddfZgiZTod1EtR5IxIwuKxP%2BumGfw0m34u27kxYhbAcrD08YssNhJYuuPVcw1M%2FJ1AY6pgE3z8QD%2FFw%2FKbc7vSUWFOv%2FXRtX7ZNlD4hxQJZYxcXxbkYnUeLmd6UhSM1oWx8wyehH%2BJS8O4XPbNsHXWVNourU0klVGWxBDkCklieRpPCdnpxHEuCfIxdz8tMCmSNp8uC%2FPUOtzqOqYyZ1nMIEriU75B%2FfipRR1Yt7oF0TcIuDyfZOtkxUkPAg%2FyKztAEIlNSt14Kd3YD5zCgn0Zvrnmj6CJdtY0xA&X-Amz-Signature=8b3dd4f00232d31676c252ad4fe6ce645342fc4861ba33489833c10f16265fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KRA6QTZ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZKoiKFM7%2FX%2FWjj9xT9%2Bjv63wbX%2Blu7ev%2Fp%2B0UrTmO9AiEAkAaRVVHnbM0q9e%2B2ilBqrOtP1%2BzdaDmsys7UEC7rnswq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDPdDYCrvrcjfWhylQCrcA2uGPHtAbKPKXi7O6o5sMCEL6IIAm%2FbsqGhEz0xWVh3jwwM7%2FvRIC%2BzDHM8JbWtQX1rMeCqS42eMhvqYGjxyj%2Bq6V%2FIJ4NVXdZSA4LNvx77hR5kvr333H0xPaib2%2B4%2FHrKVeiV5Q8pOfG7wz8d1lpxdEpd8FOcg46PnNfclNd44t0Et9DcQPw6%2BvqYVH530Z4KuU%2BrVV0iZ0q%2FxmPp2b3fRB8xqNpNNXdH75Hb%2FZlAQpkqy6h335puVC2NFEEtetjgIO5awMxaOgGL4mo0Y46ZSSKW%2BSsw30482yYlXZPRQCPXdQP1QvL%2FUnm9UjHBYpveJifqfkK7Gi%2FLvinGipyZW%2BSoBiOIT6tNrzQzepL4FjMqni4pB931rh%2BJyCcd3muntEENxfHLqU2CPF9c%2FOcSfzNB1vnzUSGzy0CnW5eMkkM87SJ8c72vrJKIewEfwDjbpAyE6y749FNJS9QL64XUTc4zHnAuOhC85hEU5sokyDhqvOKJut%2BtIhoVjLW4%2BAyh4qJFTVzHqhJqUu63kuHK%2BvsQa3y6pPav2Nd6A1rjYkT46FPJI2FSDwK67GBdD51dDz0BbQyxC415YJ6SJawyevpBwdcpXCSAfazK7qrn8kZw83Drf7SLcBwkOBMJDQydQGOqUBEuQMeIXB2t7JhXY0%2BljEVaaHJqA%2BboEAUHJktlcnUTLQU48W%2B5K%2FfyNqXWtg53O%2BttJVqXyaDH9taobuT%2BNfzOPM1P%2FjRXMYOMSpnIOBvbRg6xLUIc09ai0yToBZ8awRi6tdkT6LEpCwuchMPoD7lo%2FL%2B2HSiIVrAxdt6urTZQS0lrBM4A8q1Wziwu0mFQoJCglVJ%2Fomznr4lz47TqEU9hOIztQL&X-Amz-Signature=08ac52f90497ac633bc4e2515b4682c4f75bf9a83f99075f7567ccaebd606a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6UMMMYF%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHURJxvPCTja71Th%2BRjaQBX62RLz4iap37i7LodIPCDBAiEA0f9ykBLhsViWArdcmPNrVhaGOuQeIF0rCcyX2aE15S4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA641dUGbZdJzpCphircA%2B333%2BvxRqrj78RhOxb6A6tAjaeldgtwqpgud9Y5XcFJCIgj8DCYg96EQykgW9X%2BCmFwQj1q4n1KtO2l37t6MzPDFoiStpom2jvdAsAubUyB84WU07cfeWCh8AOBriaAVjvRKHStjGxcUBYGytSwfLE13Tj5O7%2FGw21j%2BDxZXRaqh%2Blxdz7YQEW7HlAdPgW8HIThpcc0fsVb%2FzlylvB0wUWOY7Gyyo2qYaLieoRqOZno8EFQQeqjR2AVJOyahFt4dQLBPVyYQC1QZCiWjMTSr8g2NZPKbuD5W3AewGGjBhH7%2BjnAXqlqec0fxrLi6mwPgBSWtt5ZDa7G00R%2B7XKas6AOG7AkcfsrRCTc%2BIt2T5Q4ZdwvP%2B2UtfflTkTzKBO51HYGxypi8d4Dru1uprx%2Fqm5Uh2VdN56ZCOe3XMY4LQbTPkZiu2DSdRQVBoSxeD38OmQ786vy2Vnls1%2B7%2FF6ceqVqqGH1O7n1c2k2bEIkodLdCYlj0UDU3DLYSp%2ByuY7QxiEJ2oE%2B9lt6PA%2FrtDU2G1PCsCXF6CqVaxVigy%2Bcmwf4V2Z42b08zymga9Vt7SHT1mR2RsGLllXeM1jTo08nqouNLNEjxy3shhu0lA8clWpZCzpNBRSxgQw4He73MOXPydQGOqUBC2xFXpLd0o%2FmzsDiX%2BRKzeOdXE7XNj9ckjKfxStWFc5R%2FmRlUXamA%2FRf1%2FkuxhAR4NYQRXF354MmE9YFj%2BPIe6d5lGd8Nwa6k4Tx2nOalsj4lArQjAfBQMdHuZIs9BJenAKTbsi%2B4ecc1HEAcaIi%2B%2B9PFhJfanTF%2BPtOUtdRD0WIet4y%2BrW3YEMYmPrTJQcx0GcmRnRjFtmypbho87Ov6q40B8q0&X-Amz-Signature=e8fd6bc2872496fe88653bcaf6487a361e2b2d0009eab15d2037cdf35474a583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=1394ec5c943e0a8febb8729a89d8432b1328f0d422f8aa59396d2555c018a4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RB5RKIV%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEZ%2FDvK61U%2Fj6lNSB3cB8n6%2BpaK90sgZ%2BAmRx76kD5lJAiEAsmtGNw7kUHcAu%2FJOURVxyoTQkvQI0isNxcaoX2lY0Ywq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDA2Qt4jHQUy4%2BI%2FvFyrcA28KdxRChsF%2F9KhYE8KQZcDAzieNJOG6l77YBEVsJ9N8IlD0oR7hqiOuMywFsdBUPvptb%2FjOJpCDRqfIuSxKB8WIB1i6sWAU1AxmWya6y54geQjK%2BKWD466f55Civpqz2%2FM4K%2Fofnyf56jB0%2Fk%2Fwyb2KWsViCU6zXvlXUa5Ea1ZA0sjJZOP1nzDl7lJcLHBTN8w%2F41qZ%2BwgxEtMwCFVxc4CUSf8aNCcKx%2BuVx42jSBALKJYu76kpwifwyPAliaXK5kkjPBXhGKc9IpSkCB7a%2FwlrexUti0hmjFXG9qY9myIKSHj5gjKexxBWRjm8VOkYIuk32KpuY3TGbyFkpql0xSHjElS4mZAKlMKjEkp6w0qBJ7gAan32MGN8fbai%2FHylXHBCNGHdbE1b7uk7Xxp1LpVaZ2neIpoVZU6UTwHEdTfWaXMaKOA5anjonEihJaVR9mszzRsZRmzNCDx1GRE5WnmPtCwLdjMEPfEMqW%2BQf24fmFhpgiOhJhASZCFSBropzfF25hFvPEswZ1twRhm0MQKNOaOUEdS%2F%2FgTtM5GemNc6QYdOVJ5QjvovIt2FKyqGuohgog5KvwJ8WA200iQhdGfj3%2BKANI%2FAVu8rz0ryn16xTSXqqPhaLNNilQj9MLPSydQGOqUBVn3Axj2F1I3%2BzZuQDGmxEeh%2FnmRSGTVlXh%2FRbt7HPrkA3DV1nwT7ldSzH%2BY%2BsoSbIn%2BCVugYe3owU%2BBYCUUU20OCwdpXHVSpkQ5dDIFKVPzmpf993n3AdN2Lf1pvPU%2FkOj%2Fx%2FeTqNJdkqcMZURd%2FvuHgnwAKZnZiIco7DWOWA5bTmiI0H7St15hAQZDiObcNOFqZ2zy744VhGuN55DgerAtw8ziM&X-Amz-Signature=bb066e58968e692b90da233b4734e29aa3297fbfabb26931a5f0c5abea52a41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=77a3947298a048024253cb6b4a5fa45c1e14809d9a066e564e5a1609464b68fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CXWLGL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSmTF5GHfFnTtWOXoHsiMWkcpFqnQ8es%2B7RNW%2BtyVGZQIhANYjrsp17ANynY%2BRwmVxmDC%2FK7Gl5i7kg2uz%2BOoQqRNgKv8DCF4QABoMNjM3NDIzMTgzODA1Igy6Flj%2FXO63xA8zhJoq3AM%2B3r7fF3JSlc5HtLmcHGvJXzR9KEOpiMrGYbum9XjUK9saS%2B%2BvSsldqpw3opKnML2F%2FpWgaaVFpn8NXY56gqFNLMfDBihfd2BF6f4uuyQvnjUaPXyjv3QPx7i6tM3GD%2FA51%2BAapUE%2B9WoT4neCzpZZsxv0PqhP4YEBPaSca5Dv4mmlnpokIAuKSArb1QkDAIX7fviEQSkeS9r1qQGt3kz%2F2fvT%2FjnT1tm0XmoDKFgJoLa2OTRAatTm9sbYIqyWoYrIK2821f%2BfXvbRf7IUkJ0u4brlB1fVGGrQhAahsXygJr5ZrUkSHd8n3TcxS6GIA11YyEkAaDs8YuXiiHebnnkToA0lt0nGEPKOzjTAleHv%2BtK4FV4SodAf829xYIFW2YuNx8MDqHDG3svGqMtclB76r715lsFRVV8KTgibMqfS%2Bwtrlma5F2zc6hONi40hmSmlxn0n4eGfCkbuaPmxpvjbTLbdRvluNVVrvbTjdxwPcBGBkyx7XDe11RkU%2BBgEO8Zz7E%2BX5nzdrwq3NsgEog%2BOtpgPt1Lp5dEPTmxo7kVYJmcN4rwV5ugV3vQI9OIHSSWOQYrKtKUDo1miX47yfOcl%2BYUeKWRGzsK6CBxftoKC7GDGa1YClmDe%2Bny%2FejCa0snUBjqkAawiUeUgsHw5EyjxMwhzKoVfIQwbObHAYA61ZsXQvXeJl1fY60rrHhyUFd7JQvvh6ow9wQp%2Be7TWhW%2Bt9X2yN7lF7ZSXCKwZlmyZZJ4NJg9PNYS%2F%2BQDsSdUCqOge8jJ1H49JNm0G2RN0Dd%2F2Bafh%2FIzh4%2B%2FzpB6BbGptMEXDRWAcdcCX5TB5Rmt9YzLRfuBu%2FV5ylx89u620R1iJotW1yD4oMWBa&X-Amz-Signature=5245fae8e36c1bb936a64a745abf22bf60539bdb9c25e6511b80c68dcfa8557b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=852684c9c6405cc27bbad3b7e0ec0be87b676c8dad65dcad7b07760a4d5adfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTKT7VD%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrJL5KhtR3Yg%2FgkzACmfsEUK2oIc3LX%2FOe0%2FOdcroLFAiEAlMTjzr4QyFqv2Yz0G%2BDC0PKY%2FLfxT%2BluftyJi8C7aNYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJJnVCcMi5UMG3%2FMoircAzbkUKaX%2B24UWLHm4yI5g9Pyjs0N10SRMqrqsUBdVi3x52uc6MLOEOGemtIQJuzMqm6u5NZ%2FYmzD3BO9OKoy5E89YXtNIMNnKrvUoFxnQzgDtj7eOqd2kR%2B0eo5QSb39A8LYGvJV7twk1%2FrdyudSblCr01eEGAYCST7g2BDRaDLONlrnV2REU654Ga7iCMAh%2Bu9G1%2BrS4C9R9cCv%2FHTGwcJb3UsnDwsslHOyXhBFBgUW9fqYytm9ouHalebu06IugBYf6OV30lZI8m%2BmDllY68FGOS34Gp8%2BGy2Oz7l%2F2LPUBkp%2F0RiJRFPJdYIP5pQXqF5TY9znMhodyrisP5cyEZmnOuUdXhtIHxITVMkfZhQ3pJ9JDLITWCXwzaEKLapEdcmN8nwQN6NNGjaCAzs%2BWuq%2FC%2FkPG0ZjMJK3EPyZuI64lpK1D3kiLH0M2GS2m2%2FDoewXxyxtuYNhFeYUHt8v%2Fms6aSukUssyijI0YLgohqSLKdhv7zO00Og0oUCIckWue6h%2FpVMKnGo3WZZHXD8pwUToKJuPmMef%2BNHSMjIuLoQkE8a3O2IYQxp68unguXPzXT0RpFEMMQgidpHJMv7HA4Rk01lzcvIeOSKQ3OwxLJsgYtYwaGod3hHkWqDuMPLPydQGOqUBLsqyxZbX6g1ca6eYqQ%2FngA%2F9r9aQHNV4H8S8CscZjnRrWbhMQ3uMfAHSCbD8GaFmtk5ttb%2B93ZbFj36CWFXh1yFz06OEoBVoIg4y6t%2BCUdtSBburImxO0nz6CEk%2Fnlw6XqaK1rEtamAQpjSbh0MFCgY3FrBernVg2cALkIXd4Rk8BiwhTA2NeSzfVLfdqYvIFvFcpo8C2VUh%2Bixe%2FbKmgaAehvKM&X-Amz-Signature=532c66e9b925463c24da9df676d243606883e118e12014519a9061de7d7fbabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=b871a94095d9bc8d59598487fab3eb812b1cf5354a80d766bbf6e814d98f86a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TK2SUPZ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWXLS1M2EVam6lT3TB77CW3BLn64dCQME7jXq7t9csVgIhANNfLm8R26EPQL37oj%2FBeCeD32ex19QqUIdOHqX7U9aBKv8DCF4QABoMNjM3NDIzMTgzODA1IgzhOwhHYCMKJIP6dwQq3AOhWUx2mdKKVhcJPY3v1C%2FK4FGLIKNwAjtfa6Ft9S%2BBE0nMW58S0Sa%2FxRqECCRqncXWrhlWAW0JnSzBG8CHvGIBuzcCsOGR1McJTelnxjlJv0MrpmKBY5oBd8BtATTrRMbzDOxjX06Ooa6fcNHlBrE5RYgU7WLuriXuRTzRFV5Y8%2FgVeDmJA6mgGu%2FPP2jAllXGiHukmuYJEs2GRKTsuddPaU9vsR3%2FmKR6dNwrJ2jKkGPhijrXsFe6jMIZ8esngFbWxRazbl42FXGma6yL73VtUtaMLE2NMEpJMLrqtAGLYVQq08domO4Dez9XXTTBUMyTgGIE%2FDQI3uTZCRk6WOHaNZJNAmvDx67CMcyWHKHnuAh9FkAEpPGDgHAj%2Fb%2B4OKK%2BOg6NI7K5OISh0qJ5xWmc7k6qP3S8wMm1TPW77OiYvQ6RegGgJZUBjV68X%2FddHlc5HnIXR9lxxj55gyUJlGQZlSZHUwmhV0BcsQS0UNtPyQbMfxcMR4g%2Fb4cy8LwAwQncrX%2F8Gv%2FQ%2Fl3JsSLXV6LRoepR1qER5UQWFXi%2BRVEsCZ1YtfNdFLTIFXvwGrLgFnxUPtyTEECIY8HbmzTwxXFFpuie%2BXzUXfWOTAJfXuCOqWeclcr%2FeOGqmNG%2FnTCJ0snUBjqkAYJqkk%2FLD1xEyMTQnTE%2BvZ%2F6l4yxkHGZAtehojfIfqHmqjOjk9bFhmNA9TAPQkdFB2cTjU4V5PCM7UD7DOSL0mye2wNccpQBKjXDIV4ZjsGRE9fzkVNnWYufo2mQCbD1jQGeRQ1HC5UlGWGeoRynZ9RJ3uINgajRctl4gEt7%2FZWpuFg%2BLRwIlfhcvqtXzTOFqqvZt3QNwkwM6%2BJ9N0sK055NRtLL&X-Amz-Signature=bf4a2b57c7aab0c9520111ac04d573e3888791993420e6b0d33bd39993df7cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=cc0474eacf45dfbaf7809534355d8162e7958205fb7f6e2a8439d65ef35257e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGMBQTJL%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86siPjSpTwrP6l9zkb7SPcdhQ49m0y0nNiBlk9hEcPAiEAkrwGJDPIEqB0xHvolg6D4%2F2LRrWDkpZZLxXxiHfcrC8q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDJaZ0Hiq0yB9NXhj5yrcA0UvARgwsC%2BBtO%2FuIvOF2l1z9UM5QUBJQoRwY4flMyxuGKXvsFVfqut3rYQY9RgWrZpqVjCWHto%2F%2F9W5pOl1B1tAsD%2BLadYmLWPj%2BP%2FP8dya0sRkSPAr5N%2BRvy3wsv%2BMjCkfLv8ErmfBP9E6wrmjwnmdFqhq4AhvHeavMSyCsWbxzMTuo%2BSHDKRaWlCop%2B4tYeGs6FBLSnUPJ7KeSQsyyjKFtZCIyk1g4YFbq%2BZbJ7Ytd%2BggH0fs0Aw1XHlm76kqI5O%2FBcQLB358ED%2BC4voCzfPHdLhFa0K5%2Bp%2BKp4SDyTFhvf8ddSwkmqCZ0hvSD1V3Asjnz3E2BAf67ZYq0XRjU90JPRm%2F0ZdHetNrdV8i3aDkWTJq%2FkS%2BO14gP6lPy0mxGZiKN%2BKgNZSW1KOH6Sbujz9pUP1UXATLeiR5EJUf6rPgb%2FIiBmKpMiOFHUO53f5RBrlz0DcOiz3PNYWlG%2BZoX904BJlwiktP2fKBT74BstShRQykL5IObN9gZSJB33jcJEdOkyM7hpWO1FF1DoxKdqEKkWNbzG6RRwqHi9PuuEGTSV7dxhIZ9OmLCG40rA96eN08sSQqkbRN5rJOyFlgX9v5ceNIwqGHms3lOf35ssn4aLFTJoWHXO8sbokKMJTQydQGOqUBPsdRSt4qYTyK4F8YLXfG6WTxgf8FQxlVHS%2FsRsRoCxlAqu2a5X0nzCiH03ccM0ANo5gSqXdVuq1T37BGm0h9%2BR%2BXdDaK%2FoIIFAB00xArLS0Pd%2BndokFJYxf50ufLHfwi71SqKc5rOcLujBiBCqP%2Befds3tHbiNqQHKy4D9rQ6swbYX5m4%2BXdzD6huqei9x%2FWyH%2B9qi2FesZ88%2FwW9JTORzvn9cCx&X-Amz-Signature=03a488581d9e24df7a08dd6b380e81456277a4cc05174dd24cdbe50e111511d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42SSN7P%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRZN7AeGWhf%2BKsipHoRneUNiki9inFLGn3%2FP4ATIAqLAIgM%2FVfGjm578aJaySBDF6AQiSgpsA5MP9hQ1W3T2nAPq4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDCr2A%2Bh%2FxpatW3A55CrcA7qIu7QHHOXa31NqugBBvr%2B4%2FXEwR88rOK2JKBx%2Fx1gYWi4ySXqRLUzPFbI2ZKe7sJX9auMJuXgYEhFB84TLv%2BL0MRnzgkkPQHVuI7Jfw%2Bge%2BcKUe1BEBGh5X25wx7M4ArGf%2BsQckHfCprUUKgt11TrQNTseBBxKp%2F6J5HXu%2FmtU0MPcQGvmm4ZUSo4BZhcGyH9oeDPWHkqufW%2FOcFqg7LAz0ivk8Tl86dt71Qlc8tQPoYIL7pmgBQxHlw1mxdE6cFZE6YrGV3JioejLAScZld3D226gSoJ2WUo7AoLY%2F%2F1c%2B7t1aVHdIKOOJUQuSezw8yqJ3r3cfHk%2FEXK%2FNTgdER0rvQZBrnlBKFRRJsSt%2BkGBnoIPw9qGlv0nrijkEgmYaiVYIxrrjSK9Ih9njfINaa951o6jjYMvWc20SasJOzkpKW5BIOQYwk8fadgD%2B2%2FdOibrxlPX38Wstu9nq3h3SCgnujP3ZCrqooA17rbum%2Fl19HmuD6hNd%2BMbAz6eLoWZIjSmZCbTFqLiZn17Z8KgZeZfsnd9qFqG7I%2F1%2FW%2BvTw39uoPsR7YDOJZF91Msze%2FL9EpcI7ezfwjILSlATnEAk2jE06orX2qklZh5Yw9u5lTNy1XjI5qrUL1HRNV9MO%2FRydQGOqUBiJ0k5aRjwD0DNC4%2FRkR7QV2477IFYOmTz9%2BkDF8MfTNCHWZceoVVGGoCDVAP%2BF4lCk%2FmhFEiJjwEk2lnir0unRJr%2BmMiTNsAs3bSzpj3PGvfOp%2B9SJl9y151Gd8QZF%2BPCbwP3u7LQKrP48y19bQscuhRJk47FpsmSqp9WL5Kw%2BSzDQHF6eYKHF2B7uZdMpBlFFU2n%2BwQliZ3XWnNTQTw9euEEC%2BU&X-Amz-Signature=b5b29853669ebb29354bf5c1c2a5f58abe1ee93b6cdc63f4cf2b19e08c4c780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KUJIXX2%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMNB727EdrxIS0bvvDaDX85WlG7P7HhmrTlfQswMCkRgIgRWLDa28OShWMtYaejt7bg0nKQ4ZSb11jV92at6LD3Swq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDI5cUotCTw4eJJsJDSrcA3ZWn2LXbt%2Bz7TsgksNAaekfovtPYh6If29JwPxVOsfqiqFVXzTeXFZuHcxkSK40fjl5m7jVVVVKaiIWMFLmeqstX4ObGZn3BwWCiBhjPEQuUT8GPFP84wq1T5e5jI4xJO6dRY7FphPUz0ylV6xCcCLZco59ChP9nHXepHTlFE0WVYzAcF9QOwtrdR9AmEXyBhm2YPPh6LMEttR95oO8qpA0fLYAttWAAZ8S7C8zlq%2Fb4KzPRBXgm2VWv0qGjGl49cKG%2F4LLICh8rfWkpKbRboVI3aY2k2wRh%2BZJQjZzlOBpofAwXYg8t5Gu24PlElgNnWZVRShAx9zy5iLSRQDvbNG6pPnCy8NZMN7%2FZtW2%2F9E6y0VcXGBoYKQGgRKxsJ4h78Tl9hQZ6MbagbVI7G44Qumi4Nserz4npJamb7bSJUYftlL%2FAWYRCis9PLy47y0N9P%2BDCo%2BvyWIVgrP8%2FeKrtyvx5po6Iz886rbJmasLumpWDNJpUZhLuocMvwLHAsfs3zu4zGNHjxRzXPAeIYfYp%2FSRU7CZAGhFr3DjIe2%2Fd%2FLYM0%2B8PGr2IKRzRHuePQobRqFqrJ3lzL0wt%2BUT8jzezl%2BK%2BWKr23cWobtuCMEB60PnhA%2BB5WorB1kZTTUGMOXPydQGOqUB0v3arATEAOWeSINpefF%2FfEHXHcOPz62nQVhVh%2BF843ECrT%2FdyFhpX%2F1bJx5K4%2BnECyqXH9lXKJt%2F9kpzoyU87DvJTwXDZgDWIC1AA0%2FKZ%2FL3ufbYYfO62iZeGPCCMEWdBvCZAbf7i1j2VmBfFIS8ylQrcSOpg9%2BdRwJxwHukk8sBpiI%2BvjzYBn4C3OgciACFSYj2sV2q%2BJgLwBifeHaMPvQFWS%2BV&X-Amz-Signature=8a2a7b80d71ad9225d4ae36821b9c13dd87ef03a1b58c4545740235e87b00df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=c7503110000df3afa15d2a89b8d9dbd491af129c3be503b87ac12c4a4117ef5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEYWZ4K%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATu2ozUF4eryz8jtrVMP7eMb8c00K8uyzvMX23ZEkTNAiBJ%2BuwcTu5Txm9KmppFZxEQyzhlJMK9%2FHAJ6HzfUcC1MSr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMs52adK%2FafjbuNyCZKtwD1oVjyHCdMVoQPs1eVCdipi7q2ErKbY6xoSWL6CYTU0dxwEt3hZa767H89tKSSq1grwjMAInE%2FWkGVlZq5%2Fq1u6piFoARPD3Lft5Yqqhc6ZEeK3LSQB2FFrYxK97w0n4KNezykfj%2FY4lSSx8KDIMbMcnSQwUNNUe5TX41L8ghoTdzEnykcFSGtd71cXa6BD2%2BlwtAeacOoAKRrhuAS%2BcCZKe4oDUI5hBHJAT4Vg18UizajFbqBNlV1YW6UPoa8I0qPV977of5I314Enmpj8TkF%2F5icdp1XLS8oQ5awxI17DXEXRRB9OfWVsQavqeH6cbOQeIDyVE%2BapXzAzW2pKORgxzF4ijiwN0ntQ7YBbfl704MFAnWsM4zvjHqyacHYvc6tqYL135EO9Ea%2BMO1yDkoalRswHt2lRCgB6pYIkE6gqV5LT4cueoFENnZBdQBMUaJAruMBMbZLGM%2B0%2FfYaturmCCK0YnEr1qOjl9DIOnicWHjECM8rNavJiy2uGAz5gPdQx7jEDdYD74f9Ts8IqR1u1T0G6m3Uq%2FjiT8iN%2FR36vxWQXmWtp6IrWaUONnO3SIV%2BHWq0MtoDhSTPdhxriwMyacCEbe0r4sArGpBmDIyzKFelBAlBs9eIcc3fPww89HJ1AY6pgENBu7m9QnwW2nC4rganGptQ9jxsaC6c753MRkoMzST1TT46ilcfa5Toji6c1JeCyG1lAM14EPWL1E13MdS7T2RNxPmVpd24W5l%2FGRMtuGgcfkpsDiElJx2NOnn34sB%2BTB4jr9OLEM8sD0cfixfbg%2Bi6aBbhghiaVjKJKjt39XIAL4y8CRZPbd%2BXwgxLc%2B5u0%2FjjzwnTulWJwm5Nvda0um3JGWz%2Bd8b&X-Amz-Signature=3229caf6a20e19e7d27218649984eb1fee089eedd4cfdbe488f6dbc4861977bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=1db014c0c12b4a02545a8c326f98bc605044c1875446c4a69b82174aaf8fc3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=e67f5d170933e38f664bb9a2608383dc960e3181c44844e412639f673614d8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=9159e34f83fa197d8b48f7242f5faa90630f792a4713a72ce9a24ddbfb2dca7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=e5e59116884d89f24e446f37c3088eec7e88718edb51c0c9a9284bde9d1f307e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKBPKLC7%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA661ijq%2B9Nau49MeFhoEoCt427bznzgw25D9600dh94AiBzRR0814t%2FfAZC5MaXwb7kJu977p1hK7hHGPSiI4NmoCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMfDawUJVCdh6zN5khKtwDO%2FMsfgsc%2FwiVG%2FbVMr1NDtxa%2BkFDqRmdMGP6gzAdUUCSSi5J1K5tVkZLBFzgj9Qn4pBVW559nclOgwxxfkVdUTR%2BjnPNiH%2BN9880SP8CKX%2BFbS202vpW93dUpi7Jw9ZXCKLeU%2FGwRcROoyas9kQS%2BeujHeHYQYZN1YUwsw0%2BvEUSlES10g9j%2BSt1ymv4JGe%2BlZd8cqDGCr9PhWktFr4yZOZY2nXRGYAp4MXRx04xTlSi%2FwyCAPa1Sv2ewJUtAR6XFeMD0YF3I22r1HdTj6Paz10R%2BB1Biyrz0%2Fh9%2FV%2BiIdqp9QSuYt6yn4g2HmacJbWl81D16zhpnHp7IzfTkv8munCI1INzP1JTzCG5kBj1JBhW%2B7dZTzKesd63yBfR%2FbjzeMmdYH5hXDFP%2FYiybs6ejWI05hVNh2B9xtodWnwDqUX1RlTrblngsIkm32IAQaIokqfFeTYgQ0O4hUbgqTK1n2Ed5kvDL0lTVITG91t7h%2BNto9Te6cH79OJ2FYsUglcwdZeWFLFin4rVHOP2P4a9Dn2VOiryeQZtamG60a9WdqKv568fDYMzby5LYGCMAGKLKTIJ3VBfIVVXOQIfNh1tYy%2BP5xaUuDIenxTM%2FoKw6evsZP0L%2BCmoycrPISkw%2B8%2FJ1AY6pgF%2Fs5EDNLVQZbsipSqMRbm0yFcABIu2rguY%2FNUTpby4F8n%2Bg2QNyZTU0D5Z61m6kdFdkze%2FYOCGsbm%2FEG0PA4imar%2F2gXjhiQxYkuDjblTKJzKt7ZNdrRRJaBP6uFn9xphMKNCRvJseGMYzab9%2BowOxXxBPVRWN83fl0drQ70x%2Faob1Mj4MvxvFuhy7ixqEdOzto2NnyOnVNvfnqi2WVjBidpKymZJK&X-Amz-Signature=49c50a57cd0ba9defbb69def2cf628e231380ce3dc94c1ac6bcbc73db58e866e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=01851d1ffa3415963486a71a77aa1946c893a1b3a1b3ceb8887d96bb6065364e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=8752c0d034fa09911656492c2870fce4f055d4e9f8a5a1f3c08bcb3fe0f33467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=9159e34f83fa197d8b48f7242f5faa90630f792a4713a72ce9a24ddbfb2dca7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=f4cd1f37bb36e68e1b675a7378d6558d9cbcd3cabaff6095f376fa51ec6ecc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=e276e8835cd32770b6b2f649d71533fc84974722ed93fd69fbef55d6d4538e7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLTXGVUQ%2F20260829%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260829T055423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIHTdir86xDKd2vli%2BCDe0zB4f25Fq5IlKn4XKJFm6wIhAN82Dnz%2BHuxL2ilUm0l5xzAEEKEzIug%2Fy7jsH8dsEIogKv8DCF4QABoMNjM3NDIzMTgzODA1Igyjzxr%2B5oaBGovh%2FzEq3AM11tK3Cbv0QZYrOx4gX8lwoqbecDN11dkIDWZAUnm1mXHryvBh6AkUzLfCHTfujfhzrsuXylXZL5EjLD89bx8ngNdzoJ1V%2B4Tr53TgGUBNF3AtQ1SeUQY9HSVHdxqjL6MG1hWOskknMoYjAs19%2FUDQK7EhkKLoHgY9KEh3LKbmGJrsIqKb8%2BWYhWCWG4kQU5VTTyNbxNMynnkAOdqKv3gNPRYlgy1I2uxZ5%2FhprOnHqymsU1mt6I%2FQQeFp76ashUEtgKKc2UgsYB5I18f1q1NceSyuaYd%2BHrH%2FbZ%2FOiqrEX1%2B%2Bxep0jrkFe5%2BFVLaxrRynAP26Nj%2FZDoydQfaVkhyyh7819ZraiU5XbCtq2RYmR2rExJ%2BSYZ%2B2C6SrMyfxc5qyDg5kD6fumk0XTjkDPskbyIC0aPrzOyf6uTBBRimW3FO7LssoTAIn%2B3uO7XGwQmEdvNN7sIXogAkTfqTMew1K0keKhts655QYItmvi2os9YUCP%2BQFF64rLni6VxkdcYustIP2ynW6BFhiyA1MbNkv357q%2BSoX4Yq1hpOK4IwPk%2BzsVOov58TZ6liJIhisyrbRfI6q8AXnYHyaiH2Di0RJ8EZAmSK450pOjkzmya3Fm3KlDkeqKiHF7H5cUTDfz8nUBjqkAXlNy5KjzxWlMs6NoOQTaJWSAOhdyxNnSlIoROU7mJW58UgMhas%2FppbptMNab6shBFsIL5dgoQb65KT3toQtEE7Y2qNecZk%2FKNgLrUshp6jEnLZuOIC4bo%2F8iaAWfI75ozyKNU5O9YjFTH3Es20NoVbMzmiX1RBrfC7HqtStjoby%2BhTq1ArUu7MUROD7BRjGW19j7OdbfYk2TU%2BQ4D3HdJhoIo7e&X-Amz-Signature=4c73a7206d7e3f6435126f0e7bea43f62cdfddb478f889343dc51fa504d60f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


