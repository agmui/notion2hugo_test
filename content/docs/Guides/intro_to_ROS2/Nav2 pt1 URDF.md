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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=6504f94f02be2c4801b00c4c488a0c9c1611d69f6468cee0219109a596cfc6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=946603a950c2ec861e1844a24dee995fd449abd83b9ee2b89640e366485c121a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=181e36cd67259145aa1888579b225a445264e0c9f0b0a33e02f872c371ca978a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=684d6f0bec8b81a5490694112bc8cea4a751da2dfacc110aca371f693e60fc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=80d7885581849b518a89e04bde3c1a40f11e59d065159953e00ca07957151a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=0f2c4abe5a72f4f8441f9475b6bb2bf74dc658d015e0460c8faeed76e1f5953d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=4535390cf788eb2996d21571a6001c5004b1815623811fa45a473510cdbaa37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=cec6087919c1876cb2000eebb1c3be254ce14b26742644108b667903cf19e9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=26e884168ddd545bfa39dc831fd8d5a5b8bf2596f4b7057f6b3fc362d22add32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=31a404a31491a079833b65e1bfa4121b7d45f3577ec22f6a6cb942ea34e249b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXFITL5V%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD6Q8gE%2BvY5GSsN8qKv1fTDGnvPJ6LBhemLs2lhywjzYAIgOEZIcVNPlHMWkY2Yr7UQjnSHGBo8lEjj9PIPDKyvbtQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAepKuWkt7xN8dLyNSrcA5HbBfrfS2ZgJQ6Ag9lYtj0LFAuCQYjgf7cYWKnmyvY0NU2tyybfkw4b5CUV2EDvazUaeGNEv33SPt8jItWwMipXdUFvJnLTh0xbxlCnNzzm4HirlFiMPgbrCnYHsOt0%2FK70ZuIDrwy%2F5w3BiYMGi7R184OPzX%2Fqj4r0INKlpy6kR6o3rTqb%2FmHWsYY7IDAqtyaR3ATD%2FXZzH%2FTkqLXdRt2SH4GMYsB3HB2dbRAhAl%2F3Bv5rFT%2BbvKunSa%2Bv3R75kw%2BdQGCz8NG0KjxvJwGMYkXN%2FGGuZzgCSw%2FcmWwy%2Fo8clWnTBYqAz0D3Jsv9e3BiNoS%2BKfP1Gxwj80XnPO3qVKTV4LeD2Mfg8G8w33i2n9CfG%2Bxz2pSlch9hkBnuAm9Q7IsmceFgf1jJnjsUjGh02SP9di9ge4q0c0F3ulni5iz%2BpIxQdDGf2Zm82UV5P%2BFM%2F%2Bew4Bl4IDtLHZngtO0RGuzac6qO53aR3dKU4cYlUWWvqfsjYBBRkRfxsu9Lux52ci74B69UjXz6Bl3BPg70MIS1Rxs3w12V6nRiUmrF6%2BQNelJtOkTV%2B30A3IbzwODUgM%2FbO%2FGG5uReKsyctAALxRapnoxKNL8ip%2BlGHpGAcWpILJ9OQU0fvEqiHU%2BcMOG5q8cGOqUBQIVCf%2B0WoizshwDiEy%2FUrOrjgX%2Bb6hJ06zOa8Z7Pf2vVXWVcY1N8ZQrfMKxdBCbPVm8w5IPGaYx16H0avboW9cew7try5DUqhsMjY0BRDKj9XBz9EuFVgvIFqhTuUAUyAB4vx2aJ%2BkUdJJN7Z%2BiZ8877kOE4%2FHfQqnbAm02OQecRsN0JDvt%2FYj6XK7E8cnUmZW6UHmAon%2BgZsyjO1e9N2VdRUR3p&X-Amz-Signature=7441e103b4d1dfbee330459429c2c19bcdd960531c18bece97f710c86274c88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VCYOCEM%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD9KbBnYO%2BEQbeKlc9Vv1TDVGRvp3B6UjcAlUMGloFz%2FgIgfRMAkkrGZS7cXc5Cm55thaLobJcDdQd6CX3RhBm1B7Yq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOCRM%2FI16F6wl3MvGyrcA7hkKOskjsszRtqaMedPmjDxVJOQ42VGC5sg0yJdTdMXw6r8hjWKWhOlDuGX5vojE7snefBSIUKPg6kryu7STYE0aERFe0Dnjmu03wAY4C7fKEO3JmK1qlPtxfH9UStAKp2v5OBflNkiLTKEksEj1G2mR7JRW3fXqFOEdJSILJxbuuq%2Bthq5p1MiXlCTIL3UqL72KYBsgZrbsYbVXEqmj2JMdk69LHhSG6EGMVTTrI4IdnyGo%2Bm%2Bmgb5Z2xUQmQuzOWpfHQjcthFaiu9vU2Kb72MePIB%2BAyP5SU%2FjYns6WfBz3GBIAmGkQpaV84%2BRbo734uOwCM0k7nz8%2FLq2C6dnkkIfg4yGymI7fFcfyhW8epcEd2gwKbVJRO6LSBun4k3YIBxwD8oODHzMpMpb2sygicK8oKboSpuWebBqkoVj8Z9CWOa4EmKcko3t12B7JpRRSEpY3W2psQ%2Fk5BTp3UD6nf%2FKFpv8TWtcqmh4h1%2FrD%2BsvnLcVg40tqvqf1C9GrsrFh3XZtbTvj%2BbiQWqA1wNFG3nAeU1NZvUSq55iw%2BxfIKME%2BHN6g%2FG3zdDruGAwsuWWiqnDcx1zIxX0yZfPp5wkLsGLlxQzlAWWgF5Nw6bDkuJVfg4iYExjEencMFcMKO5q8cGOqUBiHiunoL7OhebNvhr13nsDMRn2ELVr64BvnoFqsXu11sTb5CJeZUbPQ%2FFXQMoj7%2FFcijuqsg8GUH7JsNdOorK%2FGkf3NySTnyW81Y%2FJicOcwt1jQXxHeaQWnk7O75VyHy0RnlwFQeXKtTpAN63brF17fE8j%2FvlxuNZ9D8pDShAukfSP%2FA%2FX5gNFEMIy2yT2102oCR8gC7KREKhKXmSdR%2B22Vjruu3i&X-Amz-Signature=7c50db90160db1509db5070ef0b649da3899da36b5154f594ce3ce3f3979f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPD6IDX%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCICwagDeg4j1%2BRFmOQBp6MfPM6zZvTw0q2jJCyHbvbnZjAiB%2B8Su6EooCW6QLDeTFT%2BMC7qJlrC1y5BXwei4lqbcLkCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMY9pHN1yC08F8ouoXKtwDOPfj%2BWBdEKHuiLQGxsoHwPZfcJCnsiwb2zlN12CoQxBoCjEybEkkkt3HGvU7zP0XB%2FRj3DsFEHiRl18TQncVnfIohE85VxXz7sfi5FXy4noTtM7ng3DJyYKQBlcOkDgBL%2BxtQLe8LmUyRh2UtJ5InsOT6I1HglLR5YmroBXdnRONevW6ENpN81zMYbo5s2JMhkeeDIaNpFdRgnwctT%2B5P1Zbb9m8MGcgJ2WP%2Fqp1JTiB8venMCgMYdKraPK4ETW5HsDnCFSXaULjiduUWbB0fUr5tzRXMB8Sqv5FdUm6yQi%2BMLvcMQnaa4%2FfWtbvJuDWu7je2nJKmQdEH55FhI6sfmELL41MZKj2yedXRYW0S4hDgUeOOnCHNTsK1Y8A2KyR7ngmRuXSRHtnp4ZrBdrc69uOVbwdOXyTk9g2%2FjxL9qh%2B%2FmKPJ1dHDvCRJROpSzxSLN7wqqs%2FQ2uyufCem%2Fk4LtBxZt7M%2BzFdk6M%2FkEyu2Zq3ClSZePTADT6Kq7X3ytsBCSxK8%2FGtms%2BDXzrpUbv7jV0ziGtQtFTl%2B9EiS957zesHTR3eRg5KmGGwQIwWAKJVfA4QaxjExRP%2BH55UW%2BL7VkdYd%2BsKLTcgan2JIZaW45bfQvAk5O2uXHb%2Bt1QwnLmrxwY6pgH%2B1NJJHLKZpLGSNcyuUVBEeMtLIg2MiOnqJ9Mcypx7iMgAEX582gmJI648CJ0ov4drAXz9LiTB7kCGB50Wxcfjjy4wlyRcClwJ%2BaDiWhMruhWivuDRu6YnJdSLVqsHrgS25Ke42aOCvzzr95FAmfUYEqxfAosuuLBBRA8bdgG0Fzn8zkB3CcIfLbVpjaO%2FzM0b53iJfD0KBMJsdhrmpsXLE5qM2JKy&X-Amz-Signature=1fd8b8e6e26c1fb8f245710b86ec85d93660640b8c2218cdc1b3678908b131e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=ee7d31af4d81a0a564b0b2665fe9e5fcbb3d58272597c7172df62f2dc2fa5986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKLMRFFX%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHNAksrEmptM8%2Bg%2Brm3HMAyvKgEG0WCQciBnyMoRGPkoAiEArFFuUjkHZFcJHBVw4ZlGp2U0d9D3MSVLObQz0WhFmEMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDEhnVbcyUPbUZcGRFircA6xnbJCk%2B4f6eHUqG%2FtuWjnT3YWdcPrIogTV1G6nTmfjglRWbc2Kb2gk2T86DKs7RJI6iDQc9XnbZzCL3Fa5%2Bs0%2B6dvAQamUYEmQnal2hO2hEYdiyNtEvRJhpzIHJ%2BPCiyFAoqC6Bp%2Fa4mSwIBLsS0jOmqE%2BKEyYGKjhFl3a7e74RVAFfspmRUx0i2wH%2BEPPP45A8AOTWHmLO%2FhiTSaNsg%2FNraT%2B86jkt24jQTUIa4je%2FE04JpgBS9JRJRvm70JP0jJVTBZrZI%2BXaQyi%2BsHovdkE5RAn4UtBoSGMJ0EK4mtZj2FDdyC4nZlNDpOI1vURUYnEvtJeI6mzc6k6hUlZPy0egk39P3DTViaQjjNvv4%2BYfvbzFjf7Z3yMRRicnvm77uwmew4%2Ba3NzJJQVPvzqXUXzw4e3q%2Fhx44W5KeZIDsUT7oWNdkLW2Jj26LqYJEoyqHI267gn%2FIZNCCgHrATJLbzGLlKRsGYA8TtuLdNf5xuvHj%2F%2B1LzxweAx3D4ac5tveUi7NF%2FcjfK7w7KqCDJiLlVxCo2sdElLObD8ccxJh%2FV4By4YJnfVjCvC0fsQEwRDMB2Da0kQYtXKmlaLwL9wIhcX%2BsWml2Wo2VmP0uQSHpeBmeC%2F%2B3e4LxUVPL9OMJq5q8cGOqUBlFGmoQVBs2ZsM52%2Buxa5%2Fk7R5qAui%2BjSb5TYvIEzJRrzKJuQFoh7cM%2FVsvgWIW2CLM57UMBWwvhYo7FWljNvefvfdrMoQNxp38m6BGCLxtnRmWvVLnhavbYX5BAZkMNJOcVIW7NnuJF6W9JS8%2FTicO6xrJh%2B2gv1yyuySi%2Fx9OOEspueGfMLlydr5vy16kB3ioPoAkdfO250zh8k%2FFd2%2FNCtc8J4&X-Amz-Signature=3ee2d01ef4e8f40259b6857122357703f7851cd9e81992280050f3df17024c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=6044c14f1bf461c9cdce6f8a1ea5e9fe53e9d6d80410cbdfeaca13fad6ac1e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SFBTMY3%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIER8IPr9q4foUxqtMI7PBWhyQD9zR8E%2FitwxePinIS5iAiEA9lwzZ%2BVn%2Foh85Nzj0qeVO9CS2SQn1gLAaqDV%2BV%2BTLWkq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDOydScY91rDofnYc5SrcAxeKHzj6te%2BEmdtpWRWMLRbhrzhYwwTLvulQDrlc743t9wBn9mx2n2oaMcdXyLI48t380unMmRi7tBlryHmsg69qjVZ%2BokuGpWYtn%2Fu7ueut5k8GRheAxCIrWI1YfxZajHfenSJZdth6ST8cu4EYrRbxpoxyN%2BmLJHfaLhozFF34eBQoNFA6tZrGOPJEsCCFca0ivh0VCZZUyRziiz7bZ6EP1rqZYR1RC181b3mkAlCnKx2JRxwetGz1pqmtaqzh%2Bolv%2FTEXX%2FDmKhbGcUP7wIV8fyt3XrcoYYLj1SoE6trLd2W1lk5GrzmbJzwc76Ax7%2FKNvu%2F02qhbmzzZ39cb6dW7rdbTRo1bl3nhAgrWurQec6f%2FqwIJ23wGDcft36jbChyFI08AqEN78s2Kuenob3XEtpcYjy4fG8p9UT9Yplx0mQjN1qk1PMGtmvuYyd%2B5mLDduY2muT7wLlJ6kiRmKr10ENL89FwgY%2BviHZNvVsTYeNJxV6s%2FrGF%2BOMAGS1aZYniJ8gX6i%2BSejXUN3LKGJTXGNDTqXzl8fzoUosi2yzOLvLcyy8f1YOT3lwkDgYwmT55W1VNL%2B1XDj1HU3Sr9DyUx9nZa7Z6P0fV5dTgvvEdPnNW5moGsDK%2F25Kr%2BML24q8cGOqUBaxQPSFEZvTpE6TgxpvA8kqAisnoyHRuEj5wplCMp6s1%2FtWh9utSl%2FlZbXGUUlesKFRsGVfDbLxa3TxOS%2BYveRXDwYrjd1ZK32ThuXL0Raump92ZrkpxEcGLmOJKQ72XLlTxHTtoU34rs0kfdtyuiSmc87peA1oH85VZULdyKj5HUzBTeEzbxvBs4piWCXZVpphyqTrWEwjQCLrVgLMj06heLJXEA&X-Amz-Signature=30fb2dc2e9cb4dee6c0d4537b76450ac9f75d5c347dfbfc1adcdff7817e990c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=384e98c0b716566586541b4854e70aaa0511c4e14f43951077856c10069f7448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIXM7YS%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGinxvtIMBjJuObQrOzw3MeE%2B995CtLo93oyxzWtJ6xyAiEAh0fGnyJ%2B2GpmsY1r5Q3velWOTO4kp2uhUgHvuYpGcBQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJGI8ezqnzGf7r68iyrcAysVMGkPdgCoVvMmUPwOwb4UHIQZTrRPC2AM44QZwDpopcTA7bgqOWWB9m7PHcRXSrvHru47PJyxPhlJ1wU5fZdd80WGf3D5vohQraHxZ0TjSUFOlaJpcbyGdeQ1c6zSm%2B219m2fiIi1fcbfAGrrQHL8s09diQYg5dXTX2UrVLxILMUSCkNtMBCbdpSjpSmvBle0SlyxlXzQoQO6KOxXzZ4dgXRkpPkfmxCea9lTjFRiar%2BdMfOuVX%2FXnQMdWZYVz%2BFzP9Erjon9n0PK6DfsDERj7PsIHGHpoUQ%2FeFBAXcaClY6VlDMokB59eniBYLdrHUeia3sEId8HzrijfU23%2FJpx%2BJ2evYHmUmjfyJhs%2BLhu4ood5H8aIvb3v5wske4Exqso1fKXmSlDpJ%2F8rEJn9Ct89NnBFs61uHkYqrVn9QwItzNZNHSgLNVfkpjGnhV1nzcMMOS7TIhjjOmvVqeFL6gC60hcD%2BuTmHfeX8v%2BuHT%2BX6lxEIBNSx87qoPiP6RAlNP7pfVE%2FVnExf25D81IBAwh%2BVDDCsBxtDsAr03s4meQCUximbGhTus1CYHsVxY%2FMhBSfKMbI%2BYjm5c6D2vSQ1RvfqP5KVGM6wYkbCBi%2FvYGJ7CfVKWRD0BjYrpNMIa5q8cGOqUBuYXVL3DePd%2FJzhGvTTFJRbUkLiYgqevbNMpRPr96cYsCiO3CElX3d%2Bvqb635LSEHnNM1sr6h5FPZGN3dCvc3pjJ34Do1f8slkmgEqtDgkeB%2FK0XzsL9nKszHCp0wBhb2jPmGC3dxzTWaYM7cfGQzAnKepxxUuzc3yIIUwVSHFgqpQ%2B84pYkTU70GLxmGeWO%2Fxdj8xtg6hRzrdY8lzoNsFNOjQOG9&X-Amz-Signature=e5f49703d951570941a06dcf970b094f7c680b9b0fbff248b1bed43e1b251ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=71e999c8a1b3539e853acb31d7b8e290e6e055cb24fd5c8a5ea667e7fbb7c917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKDP3WK%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBA60Nd%2BnTrz1uR24rAew1sJGloowP0qG6BW3JCJG%2Bw7AiB4O9VrbrAjvWQ%2B15vL7M4X%2FmyCb3pmNFjyhIyOzBMQKSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM4qBiqrLgbY8WZNN7KtwD6HF8nATytJBs3BNEPBqvQybMd3PUBbQjAhOLs2OI9d9z4LW2qOCC4aXMdeKMQqRocqCMUJZrL8xfjEuNpk78NQSeZDNHt5e7Q%2FeSy32WS9zcNDtvo62N0XzC8tYLoNexXL2GlvbPA4rbpmPuEchlCY9IIM9fvc%2F2TV554NkVno3DruJqEda2gSU1UfsTs9NsuhBE6AKkcs%2Fl6wl3MLhTNyB8143DlJS9%2FwE4FoSGPJXhCWoffc92AmHDYQoyxdeUmWRicOgxXrdIPr8aPplANRIKbOAEg7%2FUTOYiEcK3gypZou1%2FDgdnVsI9WRndhFis%2FtDNHwObzdlj0hLoaNOLRfgfIublNk3GZx2%2BOhfJGJLqEoeOBqdhct4xYx5oJD%2BH74dSaiesqPcbrgmeYsQN5arjc3S90WjinUbJ6CtAfFe1XjSDaCwrax%2BrL5xzcZlL9LShce3nwfv84eGysL3e5FxSAeVkuvRH9J4VCDho6jO91D1JcNA4in1bpdhjVmO4jYeRIeWFjaMiWiijzBY1i64XptdKSKhf5BjQ3Pzse1A6cZojTvUhevM%2BOvKo%2FuAoAXV8SgZu2awDakEee0qORhB0buGJTdjZC5enro2J1rMMvEivRurp471vsLEwxrirxwY6pgFj%2Fjh8klWkiDeX9bZ7v5MMNuwjpzIo9%2FG0G2UCKn5%2BmsMPNHN%2B4WS%2F9xa%2F25xn5cRXK6EaDxP0XmKYgoj0R4kfjcFrY8UQU1gh3GjISzVjOgO99JLDtSJhN8H%2BQWD8vK%2BPY0EbAaBo1%2BU8T2jwjfoZ3prmm95CfxWPurv9qEqeBYhBoRph9rbonPbeQXvuqHSLDmneQoemaa9B3bgsbFCTrRbdH4L4&X-Amz-Signature=59f8267e5f9f3a48421e2366c10418ebe72d0dc6b4d81c03554884735d677fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=2bd12d7e58a9cd14c257b830528bedbcfcadd3e6118d6eec39bef4d9d63f634a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ7BUA2H%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEFi%2FVT0ls1vn%2BdVeg6cGre1O7X%2FKPjjgVwlhMaQmWe2AiAWDRripqQkOYwd1%2BadSiqL37%2BD0p91xZLbaJypdAGZDCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMnvKPTMeBVIp31SRBKtwDNPa0FdzuX5Pw1Qs9Jfo9xXL1iB2w9xW5fRzrRREbMaf6x7EUOkx40TlpMuzJoAIGayh26na5UvtIlH4HCN22Zy8SHmadMtEyj7F7U56lJRdpVejPyBkxU8SfwxRbbdsEQcRXVU55xdOzEyJ9PlYampSEBPsigeo7KV6DEDg6U8acxzx31njexswzw%2ByVNaVCt0fhNDSjGpqTuNM1OE02rcbE1YCF6mdKssEAGZUWEEcpEH3CM97TSsjlyKExTNs4TosRBYcoFA6M1ykV3e6ngROVKOYQa69dvCSBAHYwPzG3qmEMJYD0jNb%2FOoxYevOtEmrtK%2B9v8sqSravQRDHJ4P0KsQbeBtfjvOYDQ%2BOnrhrAdIsOwh%2BCajNHdUW0kY0gkDYgY1HOF465WjZ%2Fm4Zbm1TGNMo5MbQ%2Fjw6EmSw%2Ft8ADaEbTPbVb3DyWeQe2LfeJEAS3Ue2zsZrbqny4PSZhEIyBZkatsufkIro9pNR0vL%2BBW2Q9D1yGeBg2o%2FoY3lHRRVETIYAE%2BBZdhgR2PP1ItqlfXzJeRiIaB4eDEsFlfIJ%2Fux%2BsA5Ba4EUq23%2FJe9LynP23M9Bv986zeOMbbxsfyEsies0qA8VaM208GfDTybJg0tzSspwsVNFNcp8wvbmrxwY6pgHIaOs3%2Bo7m0Ei986nmXMXRi13KhRkzQ0AY012xm%2F85Y8LshI4aVxJm0uI6AWafl6ZDwRTEeLsKmxltMKmD7xix94miU4LB2ryNT46xlf8adCZZomERjwWvjLVIq5WKsUgpBRtLYtUiKKhnuOXqJQve7O8sb2vIWmkktpIT3OXoy7jRo5BJdUulL7%2Bn8BFJbDrh01dde9nqYmo19%2FCIHRpiSaDuBWqW&X-Amz-Signature=a7ab5a2f5dfe0db4db2fde3f1924aeed8b8601c432ba03269835cd6906ddc4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BSDQWTN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIBdAWyTtEAtgEdWlGox80h85gEi1vA%2BtRGQcepqy%2BRblAiBGuHGSrWhZlkxTjrmU0ghQCCKIAQu%2BoFZ3Be1CVDb1Air%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM5ktE1BUdn6o35ytXKtwD0TyK6nYbW47heWFuLbb9uP1cTM7U0OaBrfmKGwjOC3iCjw3lUk8Gd5esus0AZPG6bE%2BJEk1T8ZVsuav5fANpnOrArZPe2SaSWstuyXR7WCR2HkVx%2FqWji0hDyUNyKLFLNwOZeaMcYWdpAxxZ35KrzZKnKBAxzUmiLG565xBOeQLpPCZZXG%2BhGW6nLhj%2BuAoSVi%2FQVPlLoV9Zd9dbugoF7faHBoHXbK%2BypmS4Z%2FDgi%2BrAWrSdTfk6hb%2FR3dJq2hHDfj1yKwE0x8OTYywxwWm%2B%2FRWYJdvdw4ns4Yv%2BI0aaLt1Vl4Ooubyoyt4nTjIJfn%2BzlyrnZBTK7qu1EjO4qg3%2FDs2lIMTdQM7F2ZaC2Ek96ZKxLFh8H3ThB6NZhV7DYLKSa0glwGdL9VXuuJOMtwMi3bZrBNTECUTz5n9mOMqYwwHY82qBG%2FpMZ%2BoEqcroSf1Br60r2bMJEq1lGnJX5YzFHnawCIzxas4QY2nRh5dTYle0e9AkpPs%2BQWKqT18o3jnLbDrzPpSBmwPNeCEFP1zdvsoSXsisk%2FWy8VboMnPoqAVtDZwytgGqSbi3PACZOhBloHdqoIqmKRO10eHBpfnnUTxaRdk37eFGolm6%2F07sMGQickch45wBI16enL0wkbmrxwY6pgFmx8KOpVF8cK93X9LZ3i5qenDzF%2FPKV2xsi63Sq1%2FUF1AIB2lSzMWy2Jjq3lvOTIUk3zvPQhxSfYq4vc9Ec2%2Fz4DfWrPnxOkqW3MMw2zZ0XhHJnGqCaPn4bQmfJ4MHf3SKRze30azmw%2BAxkOlxC7JOw36QgexnIfufJmA%2BUFuWXVAZr%2BIoBs7tsHMB41N7hzx9Ay4lGeaa%2Fo%2FaA6yppLSWlIVJR3dr&X-Amz-Signature=a238ae7f4a8a087d1f6a3640c8af2c8a5e497c27eaf1eeb3c12380fe66751adc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKOX6GHK%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAIWJ09GCfAGh649Zeg4DhWYWJ%2F83u%2Bq8QVV44OWMwF4AiEAjOJIzGXFT1eZySQLwVLdODHqgbDXKuZ78RRv7BnJW%2FQq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDHE1s2makXF7QKlRgyrcAw8w87Mp8L0PMFgiktS8csB72L94Ncvma0GABK9Wd8AvQy0sEWpJwAjWtd4n%2BnWzNZ6Wt793nv0yu5ZF2LFRj%2F40Z0DU%2Bs%2FtkTTU1nHcFT0QWuTQJEHRRT4p8LwJBAhMw40EcdK3VsHWuYtzAgYPbjCRvZ6wGp6CmkK8WyOiFfO4Vu%2F5zrwQ9jpfpwoD6eOnp%2F4gFl33IDASEMJdQhjy5Fe28cEBZ83m%2B2srcEdWoandR9nqd%2F44V2zsOM0RkDveagCXQenCwcppB%2FoMi%2FQqxyNLXoJt8GN5mT38TlBn46dAmDlTKU4boued4ScdIfsx2UetzbiSlhiRKB1LJpHWCGGJ0Dv4L0SR9fpCDx6WaXQGIGf6Iq17xQSR8eNc9abBHRafRCMaYeIgIx547mog9CXRn1%2FdLSJQF%2FG26%2B26GKAlIKHtTgWIISDMcdaPMFGwbdsaGLyzERCkkoC4aq3rjQB21tBfGwzJLmdnEgsEq2C3Frk3kRwAQzNznib8%2Fi940MG1N7N%2B5n%2FX41HqqN1ZHkSA%2FpaYgspSHYTe7f1wqbEuWOKk2a%2BbdZ%2BfKA8MjbvzH8zZLOqElMDdb3E3Ks3VqHOXdmvq%2F9%2BHnIFlgxw7VAafwGhkG%2BmHk2DNSQP7MKO5q8cGOqUBoPeuKhYRM2hv6KLMpgIfktNzNApk7K1e28efqFmewZDg608S7aJ83LI2q%2FbQkOdBN9gBliKenMSLnPrFAlhRfg1A2gs8C6h3vPJ5cgsEhabiKu%2F4ETR6NWZ%2Fj0ZA9M5In%2BMDwBSk78uB2oluYesjWS368OzlDQcFmAxru8ic3ziMHnSI%2FTNVIOYErIrUukBLWWdiX24GBw9gNcc%2F5NljYtSoCOPw&X-Amz-Signature=c1eca0a64d944cbbb6a68a7e3da341ad1603eba0ae5e2fe5bc07cd6dcc179e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=ff3ef33285d46bfe0e9ecce0a9820996693e56dae0b9d660e49f4282a4f5385e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632HK6XPJ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCICt7vtxWRJSsoslN31KEC6B5YcaPvINeeGuWmhxBzKsNAiEAuTCG5DD8tiKBPhgRz0terw042JavDDf3WqUrlSJXhcgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDI0P1SqFD5vt2xjJaCrcA5qkoL4K4UjTEBnx6af5WhSE9Tw26fRsHdD1Q1H77Y1rJ%2BAFJFoEAhEBYSZkjOQmRg4i0IH3B%2BMOOdPBBytwOCHIWa35aNTTZ9e%2BuXPm6X4j7tbUTumBWg%2FW3nkpApvHJrKKB18rgXSVgw4wAdf6UV55eO3QnZ3SlSHBsZn%2FL5OyOf1MJ6f%2FiE6tpuGp2PbKYqtV6nzWNPi69o%2FNIRarhM1aZCDkPeSRDtqv6c9%2BBR2NYcGlWCXGm%2BLHqsj8Xjg%2F1rv5CyMFo6m%2Bb3mk4wvVfD87Oqkz2hj72uRdPaTqy5zPI7esvLsX%2B9c85zMY9q2ALuEdh9JgQ0I0Ejq0J5jn7fgpk1Eh3wPUyStHmZJIV2v6draFsK3i6uEZky0rEfRV%2FSupn6lQsM69bZPHwycHhOOpIvKmlner0MQOVwtNp3D%2FhJrYytgARKTXeIr%2FZVtmpFNVpvQJjekXQcVcBG3YZo1XweAdodDZg3rIb6qRZOEAXBnPwQfy0%2B2B%2BStLQpKTTkr6%2BEmsoAcvh%2FbYL9xEBVM5ad4HxwqSqJY2Ab05q0JpYAg3P0RIQyIj%2FnAP1f%2B2KRoe47eIfNTylL3exEQQtymhSyWtALwm3M3k2Da8Md699zndON2rOZdv%2B90WMMS4q8cGOqUBgMuANBgrHV9x8EiAlI1%2Fu7gROws7ylii%2FUOU6ybI952UPFqwveHoY2bt3rnYWhiOmsyqH1APSvOlnbD%2Bcjs0SoNi1g7OkfpMMg9O9Dhf6ArwrKiF4w9B7jpnbK9c0Suogkg0kbtpqRypMQdNPPPy%2FSpqK1nnI2ifGOwKrbHghstWs8E2y6Bce%2BL2nEJ4jNMoN5O%2BYowdfH0yxLFnTgNvzTO3uk1M&X-Amz-Signature=9876d206e41cff525006b237b3d6d0a4e308ebc68ca5d0056fa5962351e3b2f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=21f4c66eb8af329541711d303701432189b1e42d56b41a5a5e8c47a2e42b4817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=88fbd4f8ff92d71c0aa6c992b2a62dd5a0b476461e8de252b32fa08b1c9c97cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=4c68a641208e9f43fdd75132ebe859e052fcca54ca20e4b6683765e7801e3e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=007f96f460b182784d5a385cc7e6e36e413c12ee19f7c4b059fdc66730ad67f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZLAI476%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEGdtSpOzDJSQwQ9q6Esg7NRFPtRHYXY8Ym70EmxcVa1AiBcj0HSEPblgboA%2FQJFeT6y5acengQIb9QdDPUHzK01cCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMJv3dlM%2BlPXTFiUC%2FKtwDPlZW65lAHv%2FRa9BbJ%2FxqMTn1avrewX%2F9LooD%2B%2BFWINWug3ZmFHWYHQacHaWT4AsQAnxbAcPZzlR792SxX7QfI8QkGjsqUEY96DHo3yStT5Bb3%2BB7P0NuBdBGrjZ9aI%2FkMa%2FDoL9NS2uFzJjHOhnjlEOgW39dptyeXf6akewbcsF0AnTTrQ2XF%2BiuPBhx32V00sMuBRjgTvoF93xpLiSu5cMVlQHLxy8w5RYOty0sFs6%2FBWZ6%2FRxDvKdlZApX6KeOnS76TahU7MaRP83ZaF9ReFTn%2FbhrEPPt5JgwRwVDa9JUrjkumjkftgPiL68fT5PsVdK2VmTgrayYMft9dOYumEx0nxTzFTJ24T3%2BZNbH%2BIkLUo1kg2MwrLgeHDL80Byu9CWjK8yEaYvBJjhP9wgFz3HsOiSZN56grE67JGdXbC6grf7%2Ba89lYsjsx0uqvA27zmxgMcWSnnXuZENl26HDKfErrE3YpOsA7njGWnslI%2BVxQ0MpJ1KEEbAvFQ88k0%2BwiofoZJVQCyLKX8PHsPr5WsYYYAbnKvd9VpZwsnJNNkTinOQkBD4H31j6JRWeUONP4boMQBbuTHkpoZVtF%2BK%2Fz%2FWMG0XfyKBX2k49W5EMwksi%2Fcjx3cNgo%2F72YHMwvbirxwY6pgHHh3AifYXz%2FgkpiNXWEaPbDBiFLTGmdkxrXTaR%2Bkl9Wv1HxMT9vvxo0BeCHvXUc76%2BCQryqp38Au%2BeZGQyBiLZ0CbWD82llfsFYKwklMYVqK6hQrxnr%2BLhtu9LvpFK%2Fy5ql%2B8uMP0udqZirN1lyaPVfw2hhEOX3JyGU6qOlbpgDD5a3lsI8t1M7IrxgLp1eC3R7HXoeyeOXrFwQzLoYjJEm9zYQnsB&X-Amz-Signature=5a651fda5176d364d69e4f43df64fb18e0a34dd82f3035cb767626bfb7c8690e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=fee98bf4d2c2829c1834c9ac2109aa26c0c1dd0280c56b555c4cd54bafb210ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=d6f1a2c0d35d8ec42118c74dd00475a3fab594e6381069e3dfeb2473c6c8d605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=438a4d1c861e8baf35b2e0d6f14af04d1268adfba821569073d4caeb5291925a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=4a3561a74ae0b3c019665477c483cdd4523bb80c640e4bf6e838133247982499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=4f6f7e2ac6408a8bda62aff0f5ab8ecfe456f4424a696134c0791744e517c722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VBU65XN%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCGcRjI%2FESB8gW%2B4menzqc1z35FZygmdYZ7v7Iuor34SwIgLNaTai7hssJCgNtz5Ub%2FFdP2LXRGxid7k0kTUrd4vFsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDKGt3QRAme4UGxqnrSrcAxLRu6AJgjmV%2BLXbl5t1ZCxvtNdSkd4%2BW3YzK7ZnVgM1lmbNYM3frJKElW%2FNcNYXoIgMhVqVC%2FKAfiTfB8xBrrkiC9gsGATntETSuizi%2B%2F8RnRcb%2Bspq5pQaq8I%2Bfl6l7AoGJoBwHlMiS%2B3qJiF%2BT6kkfz4j7UkaoqLiZubCo%2FWrzP5opcvb09nOOa4d%2FhoHYNBj7Kd6mc1R83W6xZX7XK25rf1QCv428aTMw2AOwZTog%2BcNj3ajdBIUhXIEzLM7M0r0Fv1mA4aZAB%2FJthwk7Mmovizc8wM7DSNkbyd6YlnlJwinYdxNLzjZTaeMurVVXqTNwn3KLDhnZhlnG5Ulv6h9bgvf%2FTT4mR%2BA6ITYcj5D4JmH18fRWAyR4M9YaZdeUFjbw%2FypTpqd%2Br561BHDckbhY9nkrq2awL7qGgj0yVZH8gmRTNfaRMJ%2BXZhSwL9zHot19H2gIZubM0qEoNZHvFSIZ%2F4GtfAs6QZruXnhMdYdWKc%2FXhhq3uIF3LItPsIlHpVW2ViBeSk9pVwOB4v7mLMtq0mRN5AMaOuDLxkdckjd0MgQplE1Ag3UST%2F7W4XNkEfPu%2Bb85rNaJc9qUlH5EJi2B6CcDOfGd7OQwYVOc6tWzz1p46k4YqDxS2TgMJm5q8cGOqUBu5lBep1MGt08zufQvDFjQra62bdXrVdckmwmXmmkn5jYRwNoDRGUz4bLMeQ1PKACs1%2BNdi9qJFipVY%2FmNGdypUZ51fHwYYxjmwPkuLWQXLZ9WhvyCNbdZL4A8or6I8Rz%2FhEoKQ5Sbdc%2B9ymdrEegu4zuUKJB8zTv%2BvT94SVoY3BFuHkoJAUMiZTKz1FldCDBOeUFpwwOS%2BjeoBHgGz0OhdKDi3%2BC&X-Amz-Signature=e157d0c2610e7fdcfbdb7af65fae5d8796256e878031f4cb749e1c14d0c873d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


