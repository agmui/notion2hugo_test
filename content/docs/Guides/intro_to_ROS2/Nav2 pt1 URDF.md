---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=b2b8bde0b6653a82c1e842fe026bd72bb2d701377fa08a9fda0a94b1fb8e3610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=249f0caf2e1b324597555eb1ce77121ba74883444a28773f5fd5315059489873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=a5517c1e93dd5f12c85aa3d476244fe436091bb9b25d7846e5f9d4e3262fe28d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=ee79c501dd6251350cd46ff94ad4d17e881d22b3f60514caeac0823195463b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=bc0d991b67f67155ae5fc2907a441ff187a4732c5ac28a3a0e21e4c8cdc86675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=669a725bd535ce9ece0648a4fc73ac66a546f5c7ff72420cb1618a70defacbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=83a67e234adb1f782857e65ead679428ad58641848b22d63d8335f12ce59c0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=94fde355f93ff6a797a1abfa2d1b2fa007bc4003d15ff40b8a05590f9d05b67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=34b07f142a69cf3742f5810b2cf41b86865992c780f1108f792e985284b4562d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=4ff76a0906ba703add83a031292d7831be84a2c28f0c3d834e5a5b2725098a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=4b7ba0a36beea096dbd7c42d17b465a285db77745f94259051f3ab3c1b363f8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=8f9df58a173b08d16a3ad3777f9d67b527b900bd9d38134a2b1e2c36dcb47063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=c0dcc8d59c8f1d3617b61435c939f791d068799b1edc4c90aac7702dc94cdfe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJHU72U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIGn%2Bps7txGUAdb0IvfnrYavsEUSLz8x%2F7R8qBQl9%2FpqyAiA4J4Hl0AsohSQlWJSEMmQafEyWi%2BVI9bJmsQzpiHEcTCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMdi0aEr1PASiNvssvKtwDIFQWCWx8YLdZTPjCd26kFmke6FgH%2BJ852SSc28YauEjiFX1k68wXOfp%2BreQyayOpBlC%2FQQniB2hEUJFHQUXXz2cB9V710DiybXaOubVJdFG1G2QOhc8EOVJwalukc0rHlVZzwRwYNT8UPaRMgBahboyCHCqmqYOGejNWhvh9tFN7q22pdAIyZA%2FalPj4bWUj8DPXNU8nAqWeIdT%2BsVbLkv2%2FABsJTH4IZYT0TG2tuj41XXC8a5%2Bbkzn0w6BtKnX8GUuWSJX%2BIq1j4SNuVO1KLowGNyW7qSaPR%2BrJCdE%2FLsYi2X9g77%2BKsPMEfDTSCExEpSaLCQI1mHfJLQK6rCkeO9rabcDdpUyG10OzhNEsIxvYkJ42d1L72O3RdFrM77K2%2FSOjZZfWZWvkF60dy1HK7lTMe8YTTDGAIP0gxAyzuOfGqn6apbkJkPI%2F5N%2F7cxb791VIUvXNoKpA6RjyUDYd6Gvy%2BYFCYC4Qzndi30r5eMWjzpMyaad6LbejECL1oFCL0rz30XXmd%2BQIk96HZ6JXeY%2Bagfw7XAvCFDtCSGRJ6W9Tb%2FZNdtuC7cHafw8HXNMKk5J%2Fj9MBRYDdlS5s0I1Mkt31axy1h%2FOnvHhLfzBp9tua%2BwITOxAjc1CEcoQwrdmIxAY6pgG%2B%2Fs48WopWEeCqDa3amtaLOB5h7nlNGztFzZ5QcYDgSL15Vj70T1q1Wv%2FUAlbDL5M5O8weSF2qshPjpxk6m%2Fc641KEauBUNS8mm8lLRdUtpIOIY2FznoP%2B1mQpzVA0%2BROH17Nh8meOj6lqOOnEfgk1eglwEH5WxYiqqLygxMg5RdHvsoTK8ivSJMJcRE92AO8ajrxipRFXp4ALXkaW2IXRFKoIwD9E&X-Amz-Signature=cc627a6e014e23f15d3fc3fabff91c1dda20dfee516ff1f66ecccad65b950833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=13a53cd9a8f3bc6caca80b3846a9e0bdb5e526de4fea7de10604db7cf77b40a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=2ed709750156df13cbf14ad4c5c6d1d2ab19261c699e43d8f149686c77a58bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=4bc69b0b17d8d04cbe8fd92a65af2e89d4c0b23b9a558705e5f0fea3deac1059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=49a15f258aba1652ad00f30764e9b87591fe774eeb7cb364af42ce84be1ac87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=a1d1791870c58b047ea15fefdb8cc019fed401a49e12ad3298d6028a76d7a8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4ZAHGG5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDSpEnvDXOqt7aQ6MwKM%2FG8eOe7fjetTJ1gIzpfz1hHJQIgWBFoZzxNT%2FN0Ox%2BZO9m%2FcY2TAGLwPPDlUrJL4CIEKysq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDB6PmtoTBvl6M%2B45ZircAwk%2FA%2BtUc2hhRkIOlKQp9SkM9zF2i7sQaxFTKV7LCelrImcc%2B8ctYY7SsnsWbraEaOdc7OXJdaxPUEyOmFufssZ8Yb%2FYpfCfGlNEXLR9HHaSdyGMZHVwVGr44U0zK0peoQWcBcaZRsGGctLqhXXzPLpQGrVwPfhtk7aDxCFmxdxKPEYGOwOMaIUAaDHhX4sVkysTyLWfke95sNee%2Bcq2eXKJ3koc4atgmwqewdAuy3ItyRsw%2BXkl2ZIAN9Aq88N%2Foh9NzwEY6wPBGnBgr7uSG9zYJ5PaTqKtIRPKQ5VsKlO60Tz25gijOUkxskOEEpcplg1nh%2FtZoxJj7J3IbwrjPvxtU7jO1oj2breWyRM3opWdsUCX8rWBzmP%2BTbAON%2FBugusAT5D5Rqu%2FVMZSSy%2F2%2FK4H8KpSgk3brIHTrZJkJmXHSOSDB1m5fT5mHBZr4XMqrQB2nj%2FeJeEfCAdgR4iuheZf4t0dxWoVyj7KHwJ1%2Bp7WF6VLm3Cj4YXh3cHh9heEoWWbgUQ14W4IWI8QsJh7PJ0K8NefZOH7juAe1Dew9f1fkA%2FJlpRPP1yEU1%2FX0xPNAYYHzrMTiS2SZE7AqEFH411fRAeJTiMcDaeJXs1FT8w6vcRAPmKHnRL2w%2BzaMPDZiMQGOqUBaLo6Y01IWYW76eQx2tQQJbfRycf7oeyXY3cMKUDMjLGCvxnZF1cEOE%2BeydfBJUuUPYvPlFO9KFe9m2aAH%2FW6Zg5nD1sD6eX%2B0dsArA95IuPKPx2SUsSNkWEISswICiL8qv4L4YljA2TsZWsiBkH3pKi183vKKBnsgXLBPsy51DFmeOViN5DvSoyD7Q77Armqw6b6EBlrgSYyE4VOjdSMZysytVXQ&X-Amz-Signature=28d34452ed733387ee3cb9645c769c5ef4c8653877a4263aefd0821b8dd1b799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
