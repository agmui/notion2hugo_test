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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=5f475649ed13ab8065313f691e2737d648b42e30a26676d58952c20650e2cdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=fba7c31fdc78715eba694369e82d9c3982304250ed422bb788066b1d71386169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=a438493e664bbd7e50d5d122b450f023a418b144c9aa1d29febddbc206b4d11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=49dfb9d0a2c8f278d9466b094b696e88ab87d22df2c388a8cc45ae5b4df765f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=0903553b31cd05eda9a96f7e0e7a46362e34892f35ef0e568e5d3b71e83b9a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=4848abdbcd99d7b195870806217cbfb321ede24d553b9626e79da62786be37a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=3ca2cdb8db4adbb9784e1ec56a38327c66c8d1462cc1706b40a0d531c20a894c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=b687c659f8bfc84008d4d4bac1b7ea56c952eef1e682362d1bd1077d267de4ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=5d948aac7755bec7926ea65834b1386cfc926722f9087ee9a10cb2fdbe6bc28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=6cbd28fa2355b987f15274a0930fc3b9209f2f295057ed72261a02379653f35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVMHCQNL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP6dMetJEGA%2Fr0RMa46sxplAGtnFYtJSjZxAevNpByjAIhAPY%2BIrOHyjMHEjv1Xpg2c58ZRFmhnhZfF21%2FzH06wMMHKv8DCEQQABoMNjM3NDIzMTgzODA1Igw96MK60xOn7B10N0oq3ANPmtF9%2F6WEHhIlXDU4FHFe2pGA3KmZ9Kgqub22D8yNceaNKK7bnaEW7iY%2BiNUQNR54lsmBXU0QWLBDvp3uEALwVA8CeiPDUIECkE78hCXNTF5pa0oQWg0zQgNp%2BB06Xh4oQCJyQzIOGCLAE9MehsnbludEFg1y5TPPl1Vv5W5NYaJIJTLU1cfjQSKGnIppH1fKRuTaSLrgyXD6BoedLH1Nn%2FmmDILVyTdmflZljbNyrIonZ%2B9th684MNTKcO%2FkJ%2FAIT99ZZqZ0onssXFIAFoyEBgKZ89hKcrbjjOJdea1NZAdjPtXDmy%2Bri71GKk9F0mNBWOW8KZTp7EyzMUw1bL%2F0XBvYUsY2kAA2QIIrD57yfQKpBxWrFh8EUluOS8Vx1eN2IqVNeAB7iyR0zH5H0UQysaz8wrZXTRs7cfesN%2FdrFAWBjNf9bFiBpqWc%2BrgR%2Bwk4vOwojnMP42q6C9phcB8BYsh3vVClr71VZrWwunJWaXZCGhzMxh5dTvfSzoAQg1GCbodE1EyjAyOpikrr9yhCBwE5dBf%2FfF8zgE13s7QWO1CVx8ipqwIoFtUQUX2bcLVfSNHEF8f%2FgI%2FcQrdwup98PIQL7udqBWPtOMsot2Z%2FiFuKNRXrYTV7RKXV5jCvhvfEBjqkASmkZCNgZ1k7X0xB2UFT0mJ8WufZKsfEPhsgFIUq%2FV4OVKm0PglSdd9kCtkijImvdN%2FJz5N2EqlAHjLhXBp0EIfiwfv7QRkYBAtJu4b4AjnorNCRrn2z%2Fg%2Fm1AVdBrmgOYfT%2FFvzd9W19ioqh%2F31de4iv50Fq6vnsAe1KqJs5hKGjtkhU6stP8bmwY2xgH1VOWjh%2FDz6wvXlbIeO45XdKixpA%2Bpj&X-Amz-Signature=8409dd734ae02d7083fde637fafcb0f9661ea3d857bfa4dd9b00778547458391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GK23U2W%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkhU8cThD7cZwGlWXlKcTZJbLfYCwRrvfYJMBHHdCNsgIhAM1h5xsAhr2%2B0LVA%2Ffgp%2B2We2D1X71yJnLZrnvP5URdBKv8DCEQQABoMNjM3NDIzMTgzODA1IgyhhbnBwaGNoTQoOiEq3AN0ng8xU4ZyJCTRljY9dN6ikbSkGiWvgW%2Bopue1eKsKDUc%2F0UqEBq6V5yQoapkHeI4y3sdGtdMFwZvATfnbpIqlgpydsMiCavqfa98EoDNlVmrwZ0meKx14jyalzC1sYLdjczEDFl4QLPlkTdmnRLqS%2FV3wQTvQd1tbQGtqje4W7rIWY9f2WQ7p5hOO8mFY8hQClONudMhAX869DvYkXyogG9CxTEF%2BPiEdC0iTNOwqUwTYQQVmUUiHtyF1c9NNjqrS9Fj24YIiVKaymjNJv9ccAuLdxFUlpKelx6x5RGvKuslMXJpimiZEeB744BbNDDDhizb2c9DrssfwOtErkLv1eJX08Ntgdf22WGf9%2FN2SS6Snp0GZPNh%2FhCVhy7MO1fmecQ80UQKUlsgv%2Fe%2Fbk50CY9j%2FHb6KiTzQ5cXe55lui1JP7GQapjrC8y9hI148b5IJkzMof0n2H0MKlXzQEO%2FYZyfn76XM1oU6b0qJ0p4bAwqfOHTBdIzC5%2FDGrCi6e55CoHZsKQBsqCp5PKBj1vGmeDOi0cQSWYXpHsRWLHNPGWE%2FEkfumq3H4vIxqzLG3OSGz7e0HL7XwzdEmm%2BZMuU3Ss6%2BNYRL%2BgjGNZXyhsfo4sctBOj%2F6W7atTq7lzCohPfEBjqkAfKvli6YFcjP3arnnHDN232gs08dJAt81pprAKi%2FBrOiLu3%2Fp9cPXOG0WFlZgzhKssBFJSRGKVIRY6e%2FPNacLLPH3AmLKCqvtYukCbODkUgcr7KUQv%2BtwUHJSgfvM9nNoRzaf41SdHRhS8VVzzBsjfMX%2FM9b%2BJplqH%2F0np4paqgQUE6LESngxQsKHFxT6fpIFKOkvE9tnaNZAjOHEpraD%2FXhjXF0&X-Amz-Signature=9be92e91f062cadac658cd423eb2514d4661c36d98ba87cc43cde202b653cbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMV52P2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB7BeBR2%2B0qU744qYec091%2F5xxXWPRBJIgHAmgTZLNVMAiBjBVPKQOGxv9Qn2I8rkeSwJf%2BSi8FSmjsVF90K7rh0Cir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMxCKMTUAVaSslom%2BbKtwDzUUf4E8PgcKv5NTqnMv87nCGKYMuWzoVBaUL%2FI75S5q2rtcpqLRrWHIerpde6VpE4RUnZDDPan%2BkZVDkgz0bZD2ZFwXqLIJSbnli1Xdov%2FZVfHlm0LkQ9tuq9FYNTHlm%2B3pkJlTczTEXswE4znKGWXW123oZhpMxC4Bq5jc4iTjA5QcGHKGDK6%2BIWIoIz8aHaQrQzXZJlIyNBcZ2l0k3XOuRUp41uNmeqaCVcXdb2LAq7iyEyw25WgxTG%2Bw9dp8P29WkuKejtWPJS%2Byoqv5GXfsSnPM0VyAKbHHAx8wKk9T9wctpgqkdGcHlxdEsqQWdq0ngGWaSy1jvBTiCCV%2BNDxCNICW%2BaAD%2F%2BNe7zYKYVBzDEpK1Gc3BP2OdY30mEzFgeC6M81qy3vMJ%2Fsvo0o8r1v2R%2FgYqnWkVIPU3KquBDbHMnjbSRqMmenoprsdn59qxn2sT7KKiPui2GBhaqhNlz0E1GOR95hl3TaRAFGDKkoOCuZBmOUp%2Fgtnoel%2BrtXuPo3TyXzojD7KjV1U%2BykTlExq3g40y%2BwpfUS1L49%2BuSLujue51lguZjYmbNlmYSJN1h0ZCErw7%2FaFFHc%2F%2BkFFoCRpyBRG7CW4EjSVyPIUcnW3QQ64ELuBxiSHRLxQwoYT3xAY6pgF1IvFqLbMd%2F%2BhOOwSNt2NEyslQTZQ9ojMa2YJBGLnrIQpS%2BQavZ6iEdiCz11iBrNzKLVHFNGLhk3P%2BwLRIfXkiILDrj%2F6WeCH88dEWLBy87JOwdxtoTYKP48vFeja1siCPZdTUH0vvw1gEngHPkrWCqIEzj0cCtQTDatFebCSTMhDWONREIg%2FVWooKQOK1chCmwUCtNokX8%2BiOJZAyanQD53K6X47U&X-Amz-Signature=1f71b2a706128d7e24400fc830eb94c3c50bfd45ab4f75f4e4c54fac48078bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=749e00ae84ee39d8173d23dbc107c999684630aa54a99344dbb0aadd8bb482d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBK4IXDM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAMR5k%2B%2BzlVfgwIZo%2BYhCIgCLunv79O%2BxbLEN2DhePgTAiA9Qpa5gFpJkeiVNSTg8udxUjdjVa6wx6u7VcBJzZ8shCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMwZL4LND16L5tm92eKtwDJ8A5mAO%2Bwhd8%2Fstry09JQnPhCNHtzj4L7WWr1%2FSWiRPMyjbmZYd90z1RDaw9KsFCnMon5jSDWA%2FOSfBKpfz1Zz3tYnHH%2FwyNgbzd9rcQG%2FRTW%2F%2FlxrYvKQs06a7tx%2BejuQ%2B5wrIIVzfHd%2BvDGIFXRz17tWG0wbijvMiq43%2B%2Bmp18VDJe4iX9p%2BQWrARkcQwYEI4gHJOFiFlAthPa1CA1pqi2qcLN5Q3Rvn6iDe1DDXBTzXmiADKkpco1o0InmvsaLsNdt5Uu%2BeuRBevXVsuzDEt%2FTE5asHpLVjS1GcYS9c6jYR%2FdYJ6v2LfHSqHdfIGimbUcflkpGm85H1W%2BqJjbTSXuIycAWm00JhvACXphjI5iIr%2BKiW%2BKnloazFFaa0L9kcsnY%2BII573bj0n9j1N2tXiLMZ65ALj4CGJAUoWrfp8zRZ0OUdbpWzn%2FEE2ZBxQCT%2Fw9jVIXoc4lyWqARWttFLtTaW4SvmPJOKMPUEoxtp4hHGeNPTpD7747GyaJE4Y%2FDlkRvNcFr7iBFRrV2%2BELu0y1vQd6huFqauHm98fB59df0y65q7V%2FQQUfvrj96pQT5ZYGmaEhrOaWdLygMc6n5YhK2EIUbiDNcxFB1FZaw2upEzgnujjh5ULRfCswwoT3xAY6pgGLnGdl6MNEPWqfNgNBy8vCeO8d0iFqK00579LCRI083Prli3Gu0OanpCIzw3Zqzfo9LFrgsdfIE3vopauaWe%2FOBnLCB%2FHpqTcM5M0q%2BoBM8RUK4SJRJHu1mz84NQ2yBYgW9fX8pV0LKqBv%2BzA%2FZkyI4oqmG1dPIzVbM3P1o0qa6J1C9nnGrCiMWiCIcbmaotH42vvuMjwym8lmB8S7kHbCfzXqvmdA&X-Amz-Signature=af9f5f7c65098bb9eb89de273b5fb60b37c9f46007df2281582a4eb5dbc05196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=df25033a09e77079811881b43611b96ed2679a8b2c1462b8b042086a87ded9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76HTADY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8CJDCB9Dvk2oi9nVVi2zt%2FivLHu%2BeqnOPefRxdeXbDwIgGUF9jN7ZLEX9DJ%2BD9il2w4CWBzJnNb5nfeaem0ljTEcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNsDBX6CYX5kG4i8XyrcA4RZMYG1Y9O5cAmoD8SVJ0R3WeqQBBXV0Phqa3nxcoLf65XuVqIgxW6ojl6ZQ02fu8QfscoZJ3RKzN4EpAW0CKmqqJvC0dy%2Bhao3s8hfqt%2F4XuTYsJZyY6L5kJ5TXwkRn0%2B9jGpMHjyzvzrV%2BbGp9AhdbK91oGoWccStnyB4EY5hmn4vAgZJKdg1XKLTc6rTnvELCQ4Qaj3xCt5B0JE8H5TUzDjiytR0KDi9Ao9Fh%2FljmLJcJpXSwlipu5qfkyosLzQSIocUJC1BggnYmufhbp2Evf6IHn2HY27BpO%2FSht25aaJzGLxFT%2FjMctAop7O1kiKQcn5sLLNazB5ZtpmltplTG8ZzvBlSRDPzxPwmtpcA60FBuwFTxgEvkU9UER6T1gUU%2FBXnh7LRNfYMnmp4ZU18ljf1g48%2BRRDQFeaFPdO69K0jz9JVSMrLhG6ykvii6xyHu1PtURYN3niVGuMRKSGqHTx2eCN4PFLZ5APdVNV8dfaL1LsNP7SRYEcuJx5PoFbbdyF%2F%2B9eThQdFVp%2B6jRfS9jnnJFK53g3YqT2A5I2O%2BrZS0oPs4Sz94ZYtpA%2BUB%2Bnn5JIoec5dpJbLFcyW5y%2ByLSiLeUeJq1UaD2rLqe91HTNvkAdvoy%2BWDSjhMJ6F98QGOqUBkziXS1ZoIzYhn2VxAlwPganIytewmUJ1fDa41KwKn4lIpPe7kaJq5KxXpWkMRJsHI0aBX99Y7kLrINC8%2F2g6itJFZBYabJNyW6X9GmwBLWDndyCLjytwZvmGxAj%2BmUB232nTSwQNN4qk8%2FKLngig9Q1lnGJoR7PEmjKVv%2BDHyIU%2BW8Gu%2FA34Ir9CFuYa3UJoXmJDtK2rAnpOpVHd7sUuJY4V29IC&X-Amz-Signature=4dd00d8bea7d2766f3efe4f5cfc034c1dbed01bf48264fed2e559a6d0fe2d241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=4d18bdb9086ee1b668b0b68e03614b98845dffd68638ee0220c2d6a9ed9114af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ET2VFHY%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEP3EtC7yX%2BOuPqTWo2O29RyDPktEOQ4Zqr1tLmU9cslAiBkIkV%2BEmB7EFO%2FZffA4yowZIz1XzqoaEP9hPS6CAKAAyr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM2ZTHP%2FbBK%2BSeHwhPKtwD%2F06744OJzIHJTXy3AUNoPZPJT%2FxapJKCZN7T86G45BazfGL52QDnMvcWq4ozope%2BJtUdm50PzPW6HShAdTA2Z4ReyoUUOG8yZrYfTZ9rRmIvUha7NPkX3Eh4QaYjQT2%2FAEimSuB7InVz3lB8eBPzmtnz8a06er%2FAritN00qdgR%2Ffjz6Gn6n9VLnmgbYI2wANQFemo3FmxPltlbaZMnwomlL89wFwZrdeMFrzce69nWPZjxTS73q%2FxORJJ3HjyBCLtZTb%2FjfniqxBXWx%2FJm2cD1dhNuSNl0Oj6L9y6v6Y9P9JS8q2%2B7x9Pl2lKFeKWxRIyDEGEFn0zv91V7r33cAkG%2FpaVAAExwjSZgXAJgWBI0aIxSVqoqKmUpyQqDI8s3RvFx1BuLZdTOZkRfy5PJiBB2qBTiGZA6cQWGRyQQQRSd846%2FDPQrUrWZeG13RQtwkGJZAWxNtDPNaefa0dIwx4xRrCb6rWi0FQOsFl0IVmo%2BVN38eYofFQJGl4nOzKv2ncM9AKVwFWQ4NP33yK7jI4dOxIRsPTPRGWhrQaL0qwq531nrwz861nstv91lznZTdOF2PijKahn%2FkxCHvLDTe95rOu%2BfXm%2Fi0G5kwEq6wIULXQ6l1kPdYNNsZBxF4wh4X3xAY6pgEXaiOsgAADyNqDdrNbC092R2yPbqSUZOPVE8gcIeFXahjBjvOpwxh216JkhqRC%2F23ZzBRhUSaVx3Woalh1xohrvFXi4qChnKY9AnkzsZLQr5UkApJPLR%2FaNlgTIRzMbQGMgEIx3oGE5QMskUcf5bgw9XCeildZX90mT6DkGFLtjRmoRYUK9yXFbjitQUqqUNSQSlT%2BD8XLrvfs1voR6e7pt6Sf5r1E&X-Amz-Signature=14d3960032ee8449f488bd1f60b5c90d0e29f0743210e2adc7c291c5d5db4ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=a90d9aa895fa82e23980131caec69b7c339ab6c10c31489a2d41ad9e5cc1ecd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4C6XQYB%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFxduNEndudB9WPdiJM%2BOAtWX3WjTYk6gcPFvalJx4zlAiEAyyLX0tgC7QWXS9oXiz%2FGSC%2FTyfuWNAmvOLO5L2DxEboq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDNKBaomn2jWd729%2BuSrcAwmb0lO5Yl9u%2BI815CVL3xD4qk0u5l8ViIc3zONeR8QXOQAd7M2y79bSzoS7LlZi0xCRSCK027HTMiGRCftqPTz133ybPI2Pbt47eQxClHsydfVK7h6hKSbeFJDXhYmytFexnHTIVfzvYP8vnKWDqbyCBebWlM17a8Z9uaGQG0nrjlUf3bd%2FgGXN4iXj8UvvYkTfgl4yMHFwYQG8mrjH4%2Bfnr0QC4hd5PCXpzF5JvyqTw%2FH6FV1ejFCVAhxrTAMrhPtDHoaLnT3X2ZuamgumazXKYORt4k3ldEdF29oi80pOT4ATHar48j1cdndknmJQHJPoygmGcjQ8gGHgFmsesXOEX%2FRZdcZHz47%2FRCSPNutVfE%2Btb3Lgm3uy55h05Gl2B6pdQhhauITO27t68XGCijVSnpOBrxUq62MFE66QhLu8JMxSR9VUdI3vmUP4P0BKHM%2BeIqAMidRDdmRSiGQWSvPVr2suo3V8Pk3Z8OJv3qnxEXk8gFdds4kD9V9Q4rgE8yUVHUk3C%2Bo2TJPVrEg7%2Bgn7Sntgrqiek3eqXze67j9PrImvKio7wX74oYK9fbT9GtxndMMJ6EM0bUWW%2BKlxHjvaeIAYQ2sY5%2ByQ8iwbme%2BBucOri4uXJarkQc5pMOmE98QGOqUBrPkXs61jA4Nquv9eCdUbZgjuKKeUjJYiFeKb%2Fo3t6mO2PblCXiAdN4163pyfA%2F2QJjG8k6UTDgfj%2FUyVrSt8%2BmjVFbxDfrjkgqdzMah4Qx%2Fp%2Fy2AI79oEuP2i0kYJmLT7Yklp1We7ktTCPePX7RiTuwhPndVY6tEYyfqZ8f1WpJmMKq1hxQ13J660uIlJRbPxA9DUwV4lO%2BmRyVQUMXAmbOs0Fp5&X-Amz-Signature=58225aaf8c881b5e358d82cdb62b85899705b53f8b0d2429baa9f1d5b38aa520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWWNX3IN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp9tGgUweHiyNUz%2BT%2B66DpHnws2narYPaFHMMc7um1UQIhAP%2Fso39l%2BNASuhLK76jWXgCyJYwX87R0wbx8f88Uns4YKv8DCEQQABoMNjM3NDIzMTgzODA1IgxVJ1bNgVIexJX86HYq3APhgJlukJKlDi5A4jGvQDat8R4dV5ddCBIfa6%2BuOMNRhAlqlk%2BEwhqje0Iykdr%2Bfj%2Fo%2FYXhmkgDLBIg5%2BDi%2BAhyTojPH8gFuAMgxR0OR6UPnl2tiy4O3fTt8%2Fl2TS%2BMUy%2FcfYSfWbv3N5OblQfyUeH8NDZSRjAiaBAqsx1fbIx%2FLXHNVURLz3Bdq5UhaFktyet1mndiHMKOtpbeK7rDkQFn9dUUggCO9kHfkLRPBQJ6UAI4H7%2BvCiFxmMe2sERN%2BM5n91QrjruTM5P9JBd%2BVkd9QJoc0i7sn%2Bc70vRIjfAFIkLquEsOqohUhmgGALWggiDMua1nGrEfpZ4cqD%2Bu0dacpwNfKv4HPExtjy%2BmWIG9HT3ciexF%2BJM%2FiBrw9BXj5vK%2F6mvQovbtQhC0iTzIY709s88Fr8krCsSoWRekJKL4o10buBkMXZYI%2FoYtPhBHKXGib0Oco0ZxKVTjBlGQVhX41KgBXBheTJ%2FCWOUtGyXUqeiYNtq8yxTa4FdZ825%2FvEIjOWtIbvQPhpH%2BeINF9%2BzAQTS%2FbSPKQwAwej%2Fy1%2FcoFrmzt%2Br48HUxZpkf54scAbDFRcFQkMRv%2Bvz3beYvu%2BUI21Y9u695bhQNkkCKhShJicvVtV1adbpX9gr7OTCshPfEBjqkAb8annJOpD3NxHUqaFFpWGP0%2BIn02wXUPc3a%2F4EMeCjzGjpGn%2FYDNRkGzvNGMprGkg8uq0TZEWV0fNnCbh5pkRwvBzknpibeI0BxuS%2FCfplxyD5twL%2BIWhRNlj2FCa90XiZ3KuVcRkODV0U0HkbwuXp5bHMnCh37zZCpGv4WDGPbMI0TftoKXjZ9j8vyh%2BtYlcVW67lo%2BYf8mZb3rEy81HWc8BeA&X-Amz-Signature=0bdee2c1adc42e3aabfce485b5865158e92e94715346d8b8084275d5f700b79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFP34PE%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXCu1cmeFRuqsh527ErYo515yo3ng9vT%2BtEnOfbjPz6gIgQVthYeFbvX%2BpL5F5EzfPpIu9EEZHGCZYbX%2BnAPCMB7Mq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDJm8AzGTPfv%2FJokuICrcAxj95mF%2Bkc4SwTLHeJIE8X9ojGmsn3jwlkRXNkoJmUVqpv6zh9aSByJFunHNYDxvv2i0xC3GNUalFQ0W6JIKIWI0U6cnq%2FHxf7i48skPyYarq4ThNspUZeA1%2BH1LTDPLcXe1GQTBI69K%2BhmJua55CnKV77VfD4AzmCWaXGwsq6RVl3kWqN881fvmmrwEaxYB6mupEWSqALWNGlZ5D3iGB81sLBWIFBSQwHHFviRxJdve8CqQQPfMqz4kgKTkz6Rm106%2FC4h6Ohm68x9lCkwQ%2FHKrawLpIxBcnPyKDy85GkaHobUsCu1f5VD%2FT000lcE9dQkTiV5ql0ca9g6rrNsOuI6D0H7Erk80w4Jlc0pXhyx0He92wdCxq54Ym1NLjZo9nRiRU2e%2BpB19OFnNOpFnFBfJFrh3UiAs7ZfdFFsD5ZNAQM1we1wqdIS%2FB1NWkA5WF%2BE6EQsg40hzLh70Ivmpt0qjLcypIGzUi1u4NVI2e33Xpgvmp4Y6ViWA5JBhvyczP70bISlE5NoTZN0XBzjBVjOcUJTJ3mzRN3iIsB%2F7aY1Ifv57%2FwrGCfKvBxgkmuBjweNRsYkgM0%2FtayzBMuJdQ4RP1BZ6CiSxILKOqhJItvr3YiKmnLBOwR%2FHoO%2BtMLiE98QGOqUB4iMKwyRzALrGd7vv87QbaaStYtqsajvGAuOKYK1Bg5BQR580rTSvyXZK7Rmuo4RMOLGn%2B41ZbhAPkyLTaFhwaXrvAj8WBiMBmQoSICac3pmH6ysGrmS4obTIUtdDqHD0XvFMDboHNYGtpMSfJUtIVJwShO9o6DwBegjWOi1enuettfJS%2FCpL1NuO32Z4YOZ80sSVndfIaLMmgBaL0S4V%2FpwcJmyW&X-Amz-Signature=424245578c26394d869b65a499467fb2c1573720ce03b43df79f18cf996eb01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVB2RHIL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1qLs31rvqhiAYT%2FfeNLYpo2WNzfwt08v0t6XsXEz19wIgXuIGOCD0r6Cshx6nLwm%2FIpgpUvNcUi5SJWUtuH%2FEP6Aq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDGUxfia87vthU8WwTSrcA0XLAvv14KY0rcH3sykTurrIINdg5Gg131%2FVhd%2BPlc%2FInZnyxzgXc75UC4QTDJLQM7Iv%2FAUWtkgPkBKXOR0%2BBOttzdVSKUwRgIHjcOrxv%2BXpdENLiz%2BjjpJfrQ08kTDg5yHO%2BmvAyx3EBTh6EC5yAtItNlhyKy5nGb8l4pcuBk4Qy%2F3LdjPjV3U9tmbydhazPESLwGabobbaTvYaysrdvDqrhrg2yGz3R1HBXAoP3Rze4xQCFlJt0ULXLyc22rm10nwYtEwQgmGippEk%2FfXHxCZw4j%2B6RS8QNS6MBRnBrmEiiNFRdxXkXLWbbTLx0bR6hBDOfATXtg6l3n4H6fGiuZ6sUyHBjxhAg1XiV1wC1vNmnT0WCwWIxV5gwrmoVdtC5eMu1CJ4GwP23iKNTTjSx6Gpe6XF%2FXx6%2BmcfDygR3iC5KxiKTjQp%2FcsslfvAV7zTUG8TBwZ01yEp4Wta0ozknFydDliDWs7Gocj0EIUn5yNW0OzvR41r4VSWW5nSj8Cdx8VZzuIZvdPz0voP9bqZzr27TU9mmm2eQqOt5gRdHaEmpSR%2FOXOEkJEdrL5EL6RMdSd3oojOiwzBXeKAyztPToxd7lYEba7nx%2BBfFmUSst45PqVqzCcOr4exo56WMOmE98QGOqUBq9yRWjCl2A0W%2FLSpQuzBBB%2FcfuDlxnvstnzbBcz%2B9gSfrRCl4Bv5zKWh%2BiipbmPnFdgpteJgj9D2Nhdb68Llj59%2BmMO%2FHSErAJtIFmpnJX8sRZkJbumui5Bt7nCqkvDBEno41D6JE%2FlinSUnMb8tajEeYjVqRCjcIdOUeZDEbHSmkIBwcbFIBhpW82dCsEHpj%2BtXSrlnNkGMjmXWoTl5w%2FZHAmpP&X-Amz-Signature=516e5d1e039f9ae4624a4dfa538372d7c08afd4fb86bbccc24d64a72bf1ad6e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675PF6E54%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqA8wZgW2iy6wp9EZXrixudhD%2BBvDCIGudOoySfSvVHAIhAIpWdOrA8oz4zr%2Fwxd2o%2Ft%2FBoad9CAlPjW7cFxuKNkAFKv8DCEQQABoMNjM3NDIzMTgzODA1Igwi686OspaQ1BSkueEq3APBvCEJneJ%2FPGTp9wr5eBNHmeiWq%2FUqKQ8heRaNNUwnULSEMdiIziAsYjeZjv0Dgd9ejrXlw9%2BpqCRfPjhB5yd8np3X2RyZIMp0xuAV%2FhOjLCVvI4cK7NaR4R0X8LXW7%2Fl508dc4pTumZxpppbYXUa7Z1eWp57sUYvJNdyKdHTabiPxD1rvwxyFwzgZY%2B%2BnSvP06UBgI5dozWbDmjbtuF3xhcx%2FSAVRazkFVYap1O%2Fq1fEyFJdQ6CG%2F2wPjvrbAmfY3TxeJm%2Bz28%2FpxwxXpdyo6efNDBF9Oq2z48TCYkDRUkScwpHzOlysk1geGPcRR8NG7To%2FrN7i7R9zKW2jXm9y3mMoH9HXjlo%2Bj10N7j354vJP8FnPdn2%2B53rQzhRVW06zcrE2g1pisXPBqnnuOGggYAOaJskNGjVnm70bpuENYLL4R2YC2sKMgu8u%2F1vh2Ij%2FZ4h4wYGDKfmEOMOzdvklITKd9jVm8XqPSX3XPu3CuQlL5jORMEnMlssAna9N%2BWNGkuDe2ezd5e7ePix%2FYbBlo3QsORn468rrtUONzrbK0BjNq%2B77nCVdQsEtVpJLcNA6UHdBV3ZvZ4prby0ZbNSWg5q4izuj31Ty2mBRxMu%2B0%2FTqUbn5ZpRS2iiE11jCvhvfEBjqkATg%2FSuAbSOIyHX6gJF9FCKI89DjssqsqOxYKM%2FlPOBpLahcPkfeBt0eW985khDqXV9fSxAHBzKRJ3BIHFylFhnlgvdjbmZHS9LE%2F0u0IAUUXnn77g8Pe8OOaam5HzLtrxy4ofas0v02n8fEJ6%2Bfei3r0CRA9%2FERf%2FrFw2xI%2FpiayHuGYhns1fJ3EmJaPkgqRw6x%2BeVNDhHtbOGqxwTBAggsqNdAa&X-Amz-Signature=5b25cc817950a7975518b85c872d4391ad8b886c955aad91ab857de144fe9e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=959f73af36d55bdb43a6d536024402a4c7e7b5959b5cd1648ea8d5f1ccee4dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNW6OXTR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM4uIwQSnOW5dpxxltSb147JeEMf26J4bKVR%2FLkPFJ7AiAsUEn0K6e%2Bkqgb5EwVWjC%2FSRH0g9FFNVvyvJiC5Dq%2FZir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMWntujy4A6aPzJrGTKtwDDglnxycYu1qXbptQlZRGZlX1ZXV0cr%2BXeMI%2FzO%2FI8v1OqLTq6t%2BhdMJnGVIjqhZrD6LT9oDqiXnpdjUgXDnbpUTVLz%2B4CKEiaL1w8f6NEg8O9ElbceUcZO1SiIWF2FlJY2DjMvX%2BL4g8hICSonLoxzw9Lt6ql6dD62OOJAN1FSY02Rgsk%2FYPWjl3CTI8uF6A%2FcrREe8aq70LW9y2w5uVPBbqdkak4Ac3zXZDR9pCSTdj%2FOxocLgQI9I4L7%2BPRxz1zfxbQXJLb84E%2F8xjsHryqA3x3YBEDugsfmuaqPNpqmZ2OGHzg5OzNjgHcmGaIyVvtBnejtjv%2B5Tjfjy7qjJWOegnJqwwhFZZ13b%2F5wxSI%2BHgKW7vWC8k52i4klbwIvuB%2BGXGxZP4MGCuxQJ8SxagZRGzwCgrbC7nvRcFaKT6aXWJlho3isQPRtWgly8tNJAhWI9ZTBESCW5%2B6XzhgpdTRQTTmaWqbB48Y9X0Vsi1ENt6NrnV8Cf9YFEVjOTkPYET%2FIwvks6%2FxjAzWckhJF2pVSdA%2BimrxNMu5PIUIbQ8PCtHCaRf19TCZp720QEVv7XFhmd1jFTlxVj3nF1UtDaiyWD8%2FrUwTGv3U5Qs4mG%2BBMkrIPsbBusJrYGU3aEwnYX3xAY6pgEAxfCS5hOssP5Nm4JDEOpZPWXdjJYAGiZEeZqI11Sz1CUlevsDet7nSvzITLgt%2FoAmJJWVOj6v8vAde3CjYeRAhTIqNR%2BUohl7jmCAo%2FBYeDIcQAO3rPhkMfKnNngR64wAWPLQzLnfRFVGj0xXHgO8xOt88%2FUqOOy2%2BpYNkfv2hwLFdJCTO%2FjjWUv0xK3wAPPPefhzifYkoZIwDK7JvXR%2B4EhwLcZL&X-Amz-Signature=848712e2d23e0aef02ecab876732fd29b73a891dd5dafa2f0047a1e0afd2ba3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=34184131c840e22a37881d5ca536a44e080fc03f515a821fba2e4ec788199658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=2d06018e44cf2779661e2077cd1e453cf7a601845d9d94e0eff7d54ca293df5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=002deb24ad1b93cfa93155179ba13e26663e8180bfa50b67cc74cafe791b7c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=e7c9d7ff8bf7b1fa1b3a0b1f3b1aa7f51d2b44d85b6a9d7098fcb40127febbd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=63424fdd3d7466c1fc587fb4770a598f8d5cee8c68dc981d3c63b9e9b63240a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=3e39356916080b97a46f32a118c33de709553f9aa67e92120ed2de88f14ad80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=002deb24ad1b93cfa93155179ba13e26663e8180bfa50b67cc74cafe791b7c7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=10d25377d02c281218a51ea4ae737d80d29cdbf133f7ccb4fdb877e59209e45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=9fe14e60043140e2087fa68b9286efb54da3bc50c46ac3797613633f9728dcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCCZAQUL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKEi4Tq28esHqrDHhBX8I1uUU2Df%2F64SB2DYBzaAyX3AiAJfXLLELj04LcsLsjOWhPK7rj2mQ62PLz3UhebzqqneCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMu%2FVT%2BwjN%2BZgzSwc5KtwDmJByyvpJGHK9bunxZbA8W7lc2CD39HNInwHl0GND7YMJc7OXQ4XUrx3oLyMoY6Ko2xRsdSmLer5NWgclB38FQ8TEK325emnGzdsZZl%2BZHcCH13lNuq2r1cmi2b5zYDrMxi%2Bb0D5mxNJrLvdpFFfiIdVaFMDJA8wD2Yh7HpBYCGgVvCA4nAqU2ngp76I8eM7%2FdevnWBgKtoRRG692FyZiHKjLviL07UebF7jxRBXWaycppWkAbBtr3h%2ByFytHLLd5ZkBI93SFeotwl9WyW8rTrlT2CdcTIaFrNXMsWR4MEJ7UWN9HTJw%2FcnS1j%2BnDfWhQx0gDfufevKTLkyGKDK9eTOr8%2BN1g%2BtStfvdcbS8xs2B2m3Txn11UJTTPvh5YLZHWjxpUROhLGggU3NKxbWQOS0Gb7QIKjTVcr7hqNhe8YxqK3dyj9XHsuAVoZFOyH5lEt9E1PZ2hoqeyLezQsb%2FZvCR2kU8LvdMrZQJM27jOBHk9HIwOp4cEvdRbCRjZSDRABpAtELxcMvogn8PxgU5MDVC7K9ZpODKtoEkNUTwkltCM2pCtkXQiPi7h%2F0U18vb1fcjJb2ZwXBXhFkorvmMKgNjxap2JKg69wWn9oKDR2qm2U0cyXnOClagHqvMwz4T3xAY6pgHaXpTAcv4JpcSu44TWuPBeHAbgT3rHSXhnlejdxgnyL4KsLMeeACU1CckU%2BGgjUvJ48xNCxQxWs54voFwPZOJKUHilr74M4iw6GwX661EJ5UxwptS5iCyDkLXXSGWK5Sgj3gs43prn3uYIYr3R%2B%2FfNu1yDdNXq6UWeN%2ByEL%2BtQ6cu3Nbd2cyZptqWYOGfNPFDjiBAZqDL8JH4Q%2FJw0Lal8N0crKBhU&X-Amz-Signature=e995bdcef2d749a9975d6189ab6c6bb5ceeff66b5bfb8fe4015d2eba71726563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
