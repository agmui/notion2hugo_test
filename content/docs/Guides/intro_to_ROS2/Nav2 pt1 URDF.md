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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=277230a144767d1242fe53e7cd0b4b09aa9f7927fdc539a9616e91ae853982e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=5bbf10ab6328550fbdbccf509ceb48684382843f5c6abd273497fd1ec5abe5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=d0477f9220481d6930f0199a6aba3563dda2e2a73c7e1fa20a0d24a2e31b09e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=8c017415b75da2d421c43377ef5dc3c9526f2d9d48ecf8672add867dbf6b0cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=9f8edaeb2a7f1214b5c37106860bb54110fdf4d02fc9ad47e70d0706f7ff7dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=6e06994b980d2fbb7fa4152b7f56c5b85304690f0bf5745a38e9222508dfbb2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=8ab0e9f3dfcd550fc5eb189a0f633c6427c44f7c5ef6ca841788bed8d4aaa6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=84bfd4035586ba30fc1f58feb6c268c517531c335e085ff55d334393a6254784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=9ab58d744374534c3e63be5b3ba5e7b09e9b115d5855ff97c0fb795d163a7b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=8866eb87fd9748484d8c1d15bca224bc8276974a6797c6e663a1dec0bdbc803e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=c29afe01d3270f87f4a6da8b57d065243ddbff62307d4a0fcf6b8e009ddba754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=3b51fb0fe17d2033dc3b04db7f23db58dc3f321727985e5ace1c074fff3aa5cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=1ab3912cd39a48d01bd5103b57059c3c1df909aabff1e8073540e3e0f95358cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX4VTTLH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCWSE%2FFMKGjM%2BTE1zVuEw2hdx041oc00655Yd2DqrZFLwIhALUgg6s5HpIRVCAQd4vijpDt3npgl8d%2Bd5x%2BXjv0KX9dKv8DCEgQABoMNjM3NDIzMTgzODA1Igzk1AE4YkPSB31ATbcq3APoU2o4ixqKJ58BFQ9gosbe8QOrLPQI0k%2FmYSR8iLR1J22pl5CXlKE1egIXA01tjNj652MqQ4GTs9GKBKMT5L8AbyLel%2F%2BUNt3YBnAIdXAw2HBRE%2BLN9oJRX5bk8WC8PbUDmJBO%2FAhLdpDh5EZohIKz4fnqUFVTlhYfZrXYOz1DySh%2B%2FM1clvDCQO%2FLaSDwlp3vrJjAJjOvH1lJKTZ35yPPSpLo%2BvYUKu4UeKlw8iw0ULRHQ6Orw9r%2Bem2tbWA8ikoSEGMjM8%2BJCWy%2BRaKJaP4YZaK02xJ5EvEzqiXiuSdZ%2FLyivegqOW%2BfqGdipkKfHIr38nLBUhPM%2Fw3pkoeYje2%2BeSgfLzZeP8EqkCRwwQc1Dv0qkRx7HyVKC9rqw%2BWPuVYa1mllPAX0WOr8WdXFLG2MXXgaPvEX4uw7Xf3APK8lW9o2KUGrzcmD2z4%2FmnbvR%2Fc46P5BdVs1dJuM6q%2F3VO6zs4QePa2fil2CqxWdTWgD9NLhoLir7Rv3%2B1obRB6xr4BPpUGwHCZd3u%2BI0la99hFrkBdfKxciDYCtg7GqozjIvKIoE%2BEjHBL80AdHHB9D6%2FqPJWXD3Mxymgze4nrW9CWMtWrQbIpfzYC0QTnt0C0tlB14dd44EpPxAGJrFjDuvI7EBjqkAVAVO%2FcsXzgYULxxzx370IpzLh8lPu2uWQT60TKZhcPHiznzuWlgFWOL6olF7ljMKBqG90zO9KDjTP%2FZWF6KWvaiku%2F3Jjk9W5pfjT0XzU56OBDuvXaiWfQ2%2FtLHlCRIMsV72noWk0VmBhqw%2F%2FYZYZDNUHcxnMXbSMfqyfkM8gws5%2B7BWyi%2BwdZa7X25axf8T2MsOyN6tmr%2FJTQKHk6NL1YYb1z2&X-Amz-Signature=adb70178c26dd7fd63e02d597e8b58b96eb8f0203e4f001027854a6b441847c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=19ead7d109ddc79a20bbbeac765d38640f353170dfba623a260ebd66cbdbf881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=1ad760280d8198a0da72eebfd5382a3b16c602d586e7f2c8fc251a14ffe09968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=655fb9c2f927211aeecbe8697722b286265a6e47cfc61f8168e3129e2e460cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=7085822d008860a1142451d1bbf626223c48067e3f39f47ac168d2d42085b3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=3d3eac31c944b0304b3146077e2a60a7233001642bf5277b6824e7e08da815c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WOTOQR6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCICzPNh1fAjoUgUpzAv9g7GgyxQ%2Fzu1G9B2CaF7h3QxeHAiACMIBxxc%2BOrqgs7ME%2FNTRUizbNoIN6njYsKxX5G52YLir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZF%2Fv1bCinuyFkgFVKtwD4mspgK5E9NspGwQ391k7%2BPtHGQH72yfbKhST7pz6gCQwy1hEjUQsC0uVtNROVUfzCN8Sn800ouvCOLaEsIvgdsoH0z9j%2BZwW2D02NaUV1AUiPLUG7MyL17SHyNTB0%2F%2BIq5%2BvXKw1n9evuZsh15S6njUOxOShuRKjzaiHws0O5LVmBnNC25z1uNtRMh37Iq8M%2BnjAIw%2F39NRyCOwSrbdyrZezPe4p2NNOmX262%2FgeHYxFRoi4xIzPnYKffpYIDvS93PWUntD4BoRLCfX19P4fdSel%2FpGwopOdziDHXVSCwReil26MKGbNTW5quN43Akiaumj5IJDsTTX1aRymGNjrIZS8PQ%2BkoI0mPSmcJ7Op2b7IOfWHtzRkgUMhREAljpqvTK1H2sQrzB7sWisBYGWs%2B38DauEVtbP2V2qKe%2FWnD741haZYDkKdMrH%2BvnPiKEpP0INSpze2fqcdZS3V9V0ozlEhyLcbBmb756ALL4btl0FvKfpMybqJZ2WwwMpVEvdCP6gkj6Utnhh%2Fp78ksMkf2oPD4hZqL43SypqUFRX2NfAddvNm2BunyzTjGJWh7tiOGSp%2BoGXRc9imxC%2FNKqyt6D0zo%2FV6GFqIhvX1bwBXj12Rmj4kPEDPzmWzLVEw5ryOxAY6pgEa%2F0doGvVfd1YixfdJyGlZ8IjeBKeNx0c6mbeb0RxPmkanuU%2FYRfa9zQxYpouxmkFw8LEKc7Jdf3VVv1eCrrio5pdZSDO9f4D%2Bb9JuK0JLwtlA6dnMyiMsOkUIP5M8r5vP5yRdZR6VmTcMyAQNxVQR1PduaTWOcFystWVqHtwAtybS9EEHFRs8GQWIZVgZNqrcg1sp6ZN7LCPQleUKaFtgnBa9Ws3M&X-Amz-Signature=871d718927a4d0627aeb23290b506f32d9e255ba4bb7fdd74505d4d2ff83831a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
