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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=c23d529c5b56d83a0dd8f18a84db30464d24a0485f1bc6e648c8c50499255feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=6ce305c198b08eb2142e57fc9c49d1894348d18358712747a6527e2228563ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=28a29e48d2f6c61ac97a4ff9c800a9d79c7b037a472e0093650342e0bdc5c4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=40c729587dbcc97929ce350f786f023fe64e7f3212e38f982d8b13d39d1bd9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=0b2d9db9ae2761733ca1c4338736f7f7e4d7b876ecf445d7206a078f0d1fb9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=51397f3679127435703533455667f5ae4a6a238c505ac0920e0ecfe3d50f6b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=d9d80d1e72f9deff4a5615d523a8b8e419af5934acafc6a98cd06e424cab4938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=dc076de4a60e38b4101c57c068f06b84aa7ebc4fb57f0ab80c44b1d50574f6cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=d0de1a78775e0d86f3517a6c7aa9898156e32d04ab7f2cb3529ae6aa3a14aca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=c7462974a97af0576d70a7ae208d3995c1595997a68b55a843bfe6547ea434a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPFXTMDX%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIQ%2FURVN4y%2F1r8hw5FRmSlyVJ%2BuzRngqi1q%2BTe7%2FfpqwIgSXKmb8yUW4BVvPkrMjXK7laXQKKsCpPHaTHrNPoM6swq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNcm8wkyPKKJfWrKyyrcAwGpogb4DAnMsafmlzrsW3jCaqEt5LuMl18rMyJj1Wo%2FRgFS9HWNW8oyAb5tJWh7IazSa3ZHJxaYKshKVvI4hADlweOhp66eQi26qVsCr2gcE4trLcC9O9oI7Vb3S1SMSr4OpvrwJqBdzRkXrcWu4iolqF%2FZ6chb%2BQLchUY8dQVZA34G8ucvutTmguKIIGcmj%2FpwjKfrt832OQJCCFGVu22PekEJHO%2FuxgRmN00%2FvctMEyYSHqvfzBUmDkTXFrIx%2Bhe4jOnXhJmfjlzAhukF8J23%2FFAYYIir83KSCg9G6iG3rpF4dn7fPme4juIoyxdYGImZKuSB%2Bj4bm0l7QIc6t74C7%2BKTP7yO2t7WtxJVtgsvsAkUmeC1ykwBDHqsNChfUGAaJlkskwI7gWQMQiruxp6E1yn85ylatwhK6aUI9Jnb4XzrD5LTR%2FgC4%2BW0tvldSpETX6WPKGzcegfkde5QGWsdesVLW%2BBpZNWyAbvpB%2Fg9HEW66YIexct0ml1Exi9bKc6ukqdTtFDpbx%2Bb5FLB2R4UXBgpyhX78MX41mOKBkqp%2B9ynSRRvgmqeljs3PkLq%2BPHgpzXgMwSHXR7WpHalpGXhlJKEePWj59k1lcPOw8JDuRTXKnqVisPsRWInMKGmq88GOqUBUTgZ2AMKUdag11rg7BWuUlm6lku4nHBYJhZHgaxnmJfYNFjYDNzt2QMwgpFZFrP3udIPzobVWZHQYR8BuY%2Boz38PsJmlb9zvTuQCjtFz%2BRRDg3msbmt9MG2YEhQjBjOSNGJ0KYaBIRX5HLQaiyU3cms8qgIXVar4ugqzhMZAfhclkWPEwBJoQxX53hwjGQMmgRs3HKhYWyJR%2FFzGyadsMUyOMwWN&X-Amz-Signature=705bac2e7876cc3dc9d2a0c5b03fe2c7ec8ab828900a82599922d1168f4ce0da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HDCV4QP%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQX%2FEZCtP2iVrP5FsIvWnjoNutGzpkT%2FSlMDg50iyGjwIhAPdLMATwMa7PyOU6T2vo9o4Xq4Yvy86NnqaeV6JzzjLHKv8DCHQQABoMNjM3NDIzMTgzODA1IgwdxB3gAL4jxoLSZPoq3ANMLBU7kANZlU7qzldCfnlQ6qDK9AyJ%2B6I%2Fz8ObSnIKm5nufODXu%2FBVxgHWn4lqiVFWrUmAGwudefDdtnUfFO1rYDj9twi2QExlNXuomHnECothlLlYgqEqeyHSrw%2FrgdHjrXkQH5iXaEE7sXUjHpAEMwhd5hmWMiLivVcMlJtXEIAkCoIpGe6TXp9dDsBkKFH5%2Fh9lfcvG%2FYhBd8KLCyoo1yTci1NP6buCWVDwjwxq8AoE5ri2xPWvTajEG36f4JSoSmI1iUl2UFAh8zMA63UOcEMmvfWw9n6RCL9TWc368o2DUsCMnIm%2BjeK2leQBjmXZtFC34%2F%2FMCsD0%2F6XFJ4PYvHPvluCYcqa8tl%2FtQnm8baV%2BrWoozBuiz77jdkFF22rE2ieIrhUiz86bCK5hzib5eEjESlAfJ57hA8b7qWIysVLiPr9HFn8SxfWGe%2BIQOARFTFQwy9q2NbWta0zCNKdi0iNOqXDVN2WBIdLrkwCzgZKOw0FZHnAnFBsbfl7kZXvYBq4zHnwny7i01NMibiHK9pQcouw6Mt3QRWHTsIRJdLeZGVRELir1vhSg6csehNdjdVrntQWSKUZyugXR1x%2BC9dnN4Iz8SQPLx40hK%2BeSz2rNyiovDZYH3VOWADCAsKvPBjqkAf7Z9LQrKVmkRgbmfwKQQT2NTYPDavS5EtN3YY%2FAsdF1ig9mHhDi1I9Y7WL8kP0mZGKmoscAQLN2VOnZ%2B0K8ojYV72d6m1WB3Nm4icD048%2BRQk2S8lVacS%2FlLs73K%2FuOHdd8I1rJz05it6%2BAe0qPP8u0GBOpA96KK9CPmIlv0V2rLiOM3WEyzhLS8RPwgHBE7oA%2BgsLcAnjlwhPjL1NkPmZ9TSuB&X-Amz-Signature=79594ec79ac1c2f6818bdf60e2a3041973a81de983a50fa523e8bc3bba06c405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DWR7RIS%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BfbxSiZNNvQK4jFIQm2U78q0PnU0fi73BeZqO%2Fa1sVAiEA1JFZXUisPMfxIng6ZIH34BgsKneqJ5UuKwSFjz%2B0%2Fq4q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHqsvX67SPB57nf6ISrcAx6fpLXitWdqRwGOLDWwcpP0AwquTNWiF0Qs%2FIlTIvkTok%2B3xgF5THEdjNj1RbleyCgn9jJyLA4s8jDQvIeLTBAHdR3XUdSRTG%2FdjyYWTZPycRrLxYX%2BdvBSi7acszzZ%2FWtB2FtvEj7jlWREXaAmtbW0xkNiUD1kmmq3KxF7a%2BiSrn9CNWbLjjDeQqtxjH9oqU04yaXZ8ueBPAX%2FO%2BhPjPqYRnQJdSFOC9%2BTbTgQXPSDkONLkMLvnick7TiLj%2BGB7c95cuf8FTJAHpc4TOH9hc0NpUpkQJvQ4AxLy50s82wg5gs8l%2FGxXMdBhSvS%2Fhf6agaJpD8arSIdLedGDBWjguZiVnQxsP8l%2FC9QOuTnCSDi%2B2rbOvO%2Fw0nVUl7FHozGuitq33yRiH13ckwf%2Bryk07QRUuuGwhNAZzxsETvD9FFzT0v%2F6sZUMlnQmYRst55Tg07Teug0TRt0N%2B%2BlkECaji%2Bb8WzD1mmkBUAA%2B10tnQP93OOzwq4FSb4jwuLz0OnVJHOcXyvjIl3zJqtHxVzo8Yi%2Fdkvlg2ZXMkmNG5l39yFzk59FDVZJUnKzzQHWEOg7duKIw4jKWXkug5jQ0229eJxdXEkBAJbcSetdbLj2J0eJhSZTea%2FQHh3pBapNMPyKqs8GOqUB8qykRtCIoYD5SHpa8lN1UuMw2pulLJnq9r9crOmrBdUF5wWBmJc77CuqJCWxiVc1QLtpkgMoLA9sxVJ4QzZRYel2Z3AG8m5yMQNw%2BCsk5RCAvvV1UJU1vgxje9lumMLJbyuzPpY%2Fldz%2BkvTgWkkGK5nFPUtHKSmWfxBKDfLZkuDfsxVdPxglj1O7mZlGuVprej%2F0DyA3exOeb84ddJi0kshOaxAV&X-Amz-Signature=81969a26f3a52a99cbcab93cec6da5504a4edae8e5aafd30cc0b1bbafc443653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=b6433fd41116f3b4a5fca85fdf105f43572a0b28e620904d982e858d10e2927c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSH7D3ET%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICewS6pPtjL1hErGeJTxsYjZ8glmnG42nrmVKgn6GCnyAiEAlFLeFoyKZSdXLW0HLSCD5JtnkojfhVfXzAMPP2Q5froq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDLfJYchRmKEeR3JjgircA%2FOmXZBK0i9qNCgBQqeRkpiEwHoUZBVtOdehbW0Lp2PhIMtyYC8PShyRjtkG%2BEldBCaLSa2%2Bu4A8ICnyLs%2BICo6lEzeqB0EHSV3CIXchpaDGE7fKgXu71pyd6EWtx7TzT5n%2FWEi%2BhmEKPMnA0WO0nmNzvl4T2V2JWg9DBN4yVpoeGkRg1S%2BPRGoUNKrqJradDt%2Fo0jnDdLhW%2BdblGNRI6NhSD4WVTsJx0F6MtMKQvpXu1uzWfJETMcgt4ZAym5ZCiGgnuFtC2yadcf%2BOaE8E0jm%2Bwc4Bf3wzvtcA0MSu1mYNbW1quIpY6WH0g27dZzaMsH0merTbD3TMyFfxfz7GznheAv%2FTuM9%2FrIFwAIZDbOoDG8CVzU%2BGjT5oor4yq3KhSRBXwFK6rOdzfNmeqOpbHjOwxzjQ9eUddkbH1IelNjddBGey%2BiXbIOzO5K3QkCPCPzt1A4oR5ciASm6iSz5B7LQOj7o06FvmlAB19d%2BuKcjYtqzUOlvWrat5qUhBN4236owfqKc3C7RV1aq6K3VUccXStrQW5SAqoDOWEW5%2BSAVfwxAz2f0mCcU%2BpHQjpeyoeOzoVugho4jP0FkLghqdAYxNpbh7sojAnICMxxHe23L%2BOaKvGYe6CFgI%2FcxOMImwq88GOqUBU04jNgf40dGu0TBvQuQflS%2BJ21anE2tvFqcQ6tDxa56PfgYS%2B39o00v89QF5kS5YrWRoyAD8%2F5mfWJlzhjbOzyshcTNf4HZrk8fM%2FQdZZVe9zig6RvrsJsAAXhZ6JoKN7JSdS%2BmllTXUJ9YwSgsAfZ%2FptYysdH4O1Mp%2FELwlPakpMo4LjwRw31vfjHkIley4XXZ6Az9DshYABvA4GgIG67aljtzN&X-Amz-Signature=6f8365704cc3d49517795dffe7b9ac120cc1ad563a100bf1e65b7de7d5a95d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=d754fe95e10f5b3151a7d56ef34467c13074f243ac57a12e00bd7eb58fad1310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUBNFPEJ%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF0UTL0MAnls2h2ymyAd62u3VmRR38sllrAOjIb6phtwIgINOYH4vAxv%2Bk%2Ba5%2FeMn1Vfl1M%2BdRITms1P438dSa5wkq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDE0eRSqPBFnIZDX%2BXircA6PrMY5MR9aMFnExvWhHLvLEuUKHx1CHUjkp9s4I4JHahj1nr8ktmUHuvxqaNt7mv%2FuEsajlTB6LNzJ6mNvq8nBYXAmuTFRPhdHPOA0T9D8XRZs1%2B5UPHBSm1gaVxCHqRAlpvCo44uCs0ulSUN83%2FEJscpw6mmBJ5SkBsl5A0iHBp%2FBl4l1o8d87Xb7nxHctKEkcYouV2uZvA%2FXnhXqfj5O1%2FT%2FuqOq%2FxdSJEoS2RIe2mLhWpU%2F9cRMPJ450UqTS8iZV2eBCGJjz%2FS8PyqzqPPI%2FSGtUt5ad%2FGrf0cFdd8Z%2FnEimSzgehb2MFXXQkokahMC1VXqOmAfvGzUqNpZjfYeOzfTj2uX%2Bt%2BF1ig1yM4MXxTWtQf%2BuNyJdJsXte2bUe%2FyAHNjVxIKe8tXaxTc3c33IsT5%2BdKh6SkrAW4prT0DphAZzQiDcQJ%2FZNHzHDhqqd7JpisyUOmsJDTjoi3QkxFd8BkZt%2BV70HDZED2hQZVJUTxxFVpS83w6xeJh23p1paiqspKTcyRkVNiTwXC3c7VqPTT88by4d114PkbLplxHmwXcr6f56VUQmdHyk4G0g36DDEJ0%2FSImzLtZmtvYvhQazJEvDU7ClJH3eNrDrK0WfgMUHpz6DMUx1TbbDMLKLqs8GOqUB8f%2BOdm8ADEnKi2n6JLqVKHizZJcEkvkV6y3VIqo40sOVQktTfNO15xyrc1E%2F4AedMwHYzvwEkqOQLgojD%2F6kZDMhi2gKBMv88fdH8Ur0yLWf27t1f4IwBAJdWI8NcSRBQr3mG9RM2Wxaj%2F2F6ltD9Lun%2BL7XsqdEC%2FYARlfGMxYNB5rjjVfKrgLWoFxMqyB9zlH%2FvTDLKPzWkbXLzjuy%2FsbZ2bWW&X-Amz-Signature=81b0ec8415038d0220d59023543209fecb91729eae77d749c39b819cb9db7ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=6a4162508b80287e6accfff26967d4885dd70f0760a031ace59b3306c82471f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3PKPJBN%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOqDx7pSNd%2BlphLaarAmx8krM3pmG6aG2XDKcdmpihQAiEAqYyDl6n%2F0O%2FSFAXEjTDOqZfWWd0pKpswkVAD%2F%2FMOYQUq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDLVW1e4Xd2BgVoVcoircAxf4w66T2LdMDwKTZoxvVgrxj7hnVqQ7g4UK6VrSRGboufyc9Osn6yxtIi3G3bgsLflIAh9Jfmt38HWuB1Iwjvn4JPDilf2YoghcIDHz6xtK%2FXVvqCIV6YGWJbBWoAZsrhKl0dop7u5WFdDq5Xgg8nZqBvRvZHZhBXMLOltf6tqsXkViRHM%2B%2BSUNADQ%2FSG%2BMxsjNNtl%2FHLcG3Gjdtoh5CEEs42S%2ByBCO%2F6lKOnWp5Pphh4pWgdxyz%2FEfv0vYCFMjZdSIEq5XycUjSCs4UiIzWwKLQG%2FWMvlrIrwxaH1jmoKx7p%2BXa%2Fq1jeXlz7EV7c1VbYaa1ZBTno13W9z%2FE43vp2nf%2F0UPtuSpLvbJ7TPVGvmyg4vaRuBc1r0nv%2BKCRx4%2F5hs74OvsEEIY6Bp74qLU0fBBMkuuRWUHJi%2BfyCr4Hq9s2mSUwWdCAAL4QkT7PrLtvZ0Znh6F3kWHZuPOWSWlLIeWaNhvkTtkUm2%2Bf8%2FhcstGcsTS7q0ChNFrN8eeAvq9vACdNfcSpZOvIM6zn%2BynvASZkj80MnretgvZiti84iB500S1RQvK2aquZCPN33X7nqhLrCGSzYym5ZQHC9qmohtBYD2%2BPtNT40vMNCR1LlTYV874uC4VOHYYAUeDMJKMqs8GOqUB%2FW%2FU0WaW2yADwdhBDmPXHS%2FGl9DjwQUHcB%2BuWxLOdMoZqHv%2BbDTbYFs9S897jAaMY0ke9149a8kggvfl5ha4SdVbsxl4BjlstXYOP7ut8YG2kTL57cOMNxMLQ8YindGucyfS7qhWwApcCtgedLPtO%2BQ3qNDSCsutaX%2BEXMdourcGhs1%2BnTLqcE1Kh0dmhzbLx95oueYnjz63wxX0gmvrE%2BeDWc7W&X-Amz-Signature=fc19f19bdd2af74e9efdc80be881f4b7546554518e8ab7361a9a82d878ec0de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=a575865007731ddb76dbc3ecee39826443419f6e91beb2188266719fdd256315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAQBWSK%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEE8gbniOBzHzsMW2htzgCpEaS0CQLtI%2FzLiydSvEGq8AiEA9elLXazGMVW8ht3FHvP9xFaL7Jfu3rCHprPh1BhRUfoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKLfa5ShMYuUg%2F%2B1KircA9RyeqeXENXkzgE3z6y8o6NUYcxu%2BDbx8%2F0hfsFvsUHk4IRra6SU%2FE7ENxEZREx6A6hIcQIPPRQJfKmDoP%2Ft24mpefGbrHk3OI0OvBUlEKkfDDAFWfArMni9HZwWssAEK56S7OMvZPeg2ciA6ueesy%2BOtFmRzLX6g%2FbkcmoQXI6S9Alr8vlmTjF%2FI7v4c%2Bz5AcHB4bQr5HpiXUlMXrRP%2FKSGPzvuEXhjve5KFAIFrl7tdL3lV%2FqC%2FHwyFpsZOSDOpKNpIE4do2zwkaFeoZsdXK%2BE4q1KfM8%2BrJKPkWsUr4vBizQx%2FPyBYEP4obbOfuRzXpnPZxcLGIWKCcmneIZ3LQzcDXPZoty5wQxuDLlfSNSugKfsrt%2BxnTUXyFvYKUAgnE%2FzFIGWLzggouVi63ODGeU7ym%2BGnr1gzZ8XO%2FLyrBOtQamVOwsEzX1K7irVUEp1VTqgwnYluKPTIBJ%2BOa%2BIzUzzwmD3SUN0AAhF%2BhUKmE8k7Z1pKuFjLBB3KJLISr%2BRIHyJsKQQphDoq%2B2o6IEe8QzegfAC%2FTgYrE4lVN9%2F5jQ2u3RuteqIsJIxhsQQuCPir2VhPeQJM3J%2FjXvFHUC2c6f88bkl8Olz89cX%2FDH0%2BV4aNp%2Fkih1OkEY4aVPKMLKLqs8GOqUBvi%2BnX1X77xJOfMED0nncDo%2FDdmY5EMh4RyrxJMWPHSzuYBy3fosYHvn6Sm0%2BITl1gkIc1r0ee5oMr2jwL5xLVWxnjMAiA8jlc7yIWYtq%2B0gJ8tH0Hud3F6HKALLcGzmE1uyl5GatAfBfb3arXunsI%2FVcz6cQX70LPqYbIyjNkahcElaQaUm3zIq7WayYDXwrYmsmLsZ5xbSNDyBM6FnpPo%2Bo76sk&X-Amz-Signature=3be20acdc342d7035bc6b8f04c778d306a7b70e1b2aa583266450bda997dc3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=2d515d44db8c5e680d30631ae958046840a892e52cf8e601ebbcf085e57e1d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VR62SRV%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwtTtu3T7fsIzG46MIiPKlQzDHb%2FnUhPKQ3W7ySF9oVQIgSHV9HCTGtjQR7Q%2FxsJ%2FCTP6VsWHw2dYlMqBitfVeC1kq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNjFdEl2YpbdHwjQwCrcA%2BNTFxuI2bq1txi2eXftPP7w9m6Ldrs5te2Nxz0DNf6Rl9Ya2pm0YBvw%2BVyjgXruU9aL%2Ble040xrVD8FCLYxgv6%2FdW%2BSDAphSVV%2BUIET4bKMwVGkrWPi2NkNot8OUkthu5xtoDO24IHmMsR0S41AEw%2BLy2VCb3yJTmd8I5lDKPqwlMphXKheeZaJElb3JstG5XU2jAayzjsk%2BAL%2FnxMoIBqvKl7GLqu8eQ6E9SGAapDZiOBlfnaMcSe5Kx1cpZITg2WnrE4YziLy%2FJNr%2BuZT%2BLyp6uFQ1iDF4T4WVvp%2F0Nmmo%2Fcv2lop5ywDCmqfpQ08ScoUJdDf6Qy9O2VA4Yw5T9McbGoeAXsRia6oJNrkmeC%2BOIny1ocVXKyIW1LRHNoofFOhgTmtSx89x8qMg%2B%2F5IIbnww%2FrNPcAdDQC%2F7K44NaZppr0yZAMW2kJ6wv7KgaOHJ%2Bf1iaIXdyhCYJbK8IYySj%2FwCIVrqMG%2F6RHfDV3xsM67vkHVwVKD7VV1y%2FKEXOFjlRDSlC8ayhYECZHSbT9%2B18nTQfSBcaFQYe2T8GHwhwzwevDcrmo6eAD41w%2F19L2s8zMStFbxckLDfb7eEbY41RhTm1BtRVcB8JB8YI7ycFb9O%2B7JsdyxaxIkU5cMLutq88GOqUBxYdStgmcmiAQeLSP8qgqK6DUN8jAwdvvidvGuMXs%2FW2laewVRuWDnUJ1Ql4naX1holPJ6JbV4K6kA%2FfWG1CX8cDUdJ63UgHsDd6RmfM9mrChD5AmwdLDDxQ173%2FmTe1Id7M9TVoLfW8zXhB6AIbEklqMHbzmRsd3aENFbrH58CvbQHynUIKsPlTFqgWUAK91y4dQFIfmHJconu25wrK56lXqAcxq&X-Amz-Signature=851f5ec6bd512c0ca2101fd764aff36f1d26f6be005f99988d707bce9684de5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC2P65MY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC62qZcoAaKVPH6eX3wuSi079AhqrUC6McSvo7RIx54BgIhAKIg3Ll4VrrWWJlDMBxEC3sGmPzh4DjzSZmGNrRfjY6RKv8DCHQQABoMNjM3NDIzMTgzODA1IgxwfBapyuIawDvWERIq3AOopjWOof%2BGHxzJxbEkAXLUjCaRhZATLdBT0SaxqHUGPSKfHE0SL7KJ00DrOFETAEYv2SNnBs17zUSO3V6CSt2e9kKMurCLPU8Lv0euGegg%2B6wIixWiFdgySbp%2FHTI%2FU7vaTP7zl0FNbyoF2hX9iD9VZYlKQV%2B3ecfh5UdnqrAMVwKsez54YiD9xNLkQQ0rdrO7ssD5v0y0Xd8In41NdUxPJQtCkDMhcybCrmyxQKTnODyCG9rkdCjbzPU60hGO8JKiphsq7PZOQuKmekMKPMup6v4zz1rXaRdvknmM%2Bm3dPauDged0p2WQSq0tYj1YV0VslgbXD0pR6uTSz5rNpuH3YQ3F%2FqyeJNSDoCxJxkcn2ZycpdLBLrVUx4aJSDNaeXS8wfmFgaqpf%2FE8GbXhKvnA8ogRA2q6XpVv%2BFQ7SJh6hYSmKseGgMd2ItHzS9jq%2F%2B8%2B%2Bgze0MEu82l5X8O33p1mh6qdRvVUfchip4MyDCStDAyxJMIaL%2FwGuGWwm033NPnlsoJXPOjedcOQNRaxGUSD4%2FLnFOfV3enZraE%2FXxNBo1OAr6BF9kDUoM0%2BLNG9oqWU63DC9A3h7RdMpLcYiV8QYAOvARS4prtcPGn90vLRqsbPcmsdeoMc3kXKFDCarKvPBjqkAZLqdZ2MT%2FaNKtMuELdizHJ5hNZ8YIdH1%2FvhU7u1yItnVPKUhKSng5LDB6XK5ybWvjfyVXDaJy2oYSzVNfaPgZkV35oG3INWKk75kBo84W73zpllI7zLI9a6h2l6mtXubrHhft08hEzFn%2F7Jn7lJgVUBuw0dNHJIfJtPGvD%2BhcvXIliDzp2pQJRs%2FEf%2BFnZ1uEIpDR0nR5E34CuJGE4yoyShZemh&X-Amz-Signature=91bcd468b6f557b380f9584d1239dfa61463fed7fec7d55054f0f0386fbd75a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7NQF5O%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAr7VFBsCyn2wl3EpOEHN7D9alOtC%2BE%2FtbHdZTc9InGXAiBS1MUtI%2BQypYQdzNTCQ7CFPaeqa2UZKnVFa%2BVV7BToVSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMfTpzOC692HnXIlSgKtwDUjkfAEwZlLyLVRGqixik25Fg%2F7Iz8R4izP6j7gL9EHmy8d179IdI53v5Pw3uwVLAL6KPZ12rQbxBG3%2F83kCJrUeHCsgrjHvGrngkqgF%2Fra%2FU9Nt5Gn%2FwU1kJaNtXakf8C3SY4IITxzKdxjHJXyiGzgzdyOe9sMGg6anHzYBvRJQ11g6VlZ%2FddatqXnLh4TRnE%2BpSGomWlrkEBhoU22LojGCrJsDkrz4OsAD7pucryrTKJNcY%2BHtLXJvMJezOm3QoFDRMHYd5QSsG2gRwaaddu5svXsmZUzY6VPEBZol2fiFUX6X87x6qZ8kshEcNGIlNQ7IbWxt%2BM2BiRhG4Q1bgVHuINFoMAt2L2A9j4mDy0YizHb5PDTxy%2Bxygph1G5WtJ%2FeT10%2FpYA8jijxL0xQBcl6IurmMTJiqtYHE5IkMLXzRGrXAvUhfxSgmP%2Bd%2Bi4FfcvIOnDs1blanulFLx0PyZOjFlLJhStbkWKW%2B3OocIsKslUC5ajpaG7%2F0PPGpptjTjK9vX%2BjTmcPr3qByo%2FLZ8XTNQgunu%2FPv%2F%2FkNjJOgXBuHDxsbT6ksEe3xJ4E1y0b8upciPfKs%2FvIz2hmycDO2kxIzuLA%2BxQXxQrFJWM4HtV3lnQ75bI68RmCOxmscwneWqzwY6pgGbU3QA8izrJ8qjjyvaSgq4mUpQGmBc2rIHIVjYPMevmYRhzrXdtVfo%2Bom5cGqS3rGK5Qea%2ByrvIRSvuLaeJRvbSwzobMF8%2BvMJ4On1h4AY9n9UWvAYLfyrellHuhfvlB8i7EStMaeoBm0n4HeXJnmAoWfnjAFHPUDoCTA9Ds5xH2EUdbyDNjQvq8tHmzrrDyid%2FEci20HzHn22SLWfC%2BuXElGpA1N%2F&X-Amz-Signature=c2938388a5cef00db392ac46cc60eeb5879891f6074f4cbb67d09e03ba8af0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=7be7ab54c912054e3e82ee2569ca8857572a538688eef8e840cc27fa4e09a684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTOWI2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg4l%2BrlIBllc%2BSmBlYwQdFTyKXnd1EfyTgZiFGYYatPwIhAJgcOnsjWHRmrBaEgvOWITkxrAkRyrOaJbe2Fsq5MkNgKv8DCG4QABoMNjM3NDIzMTgzODA1IgzSFK4S1GfVuYbHCgUq3ANOl%2Fi0F6AUQscvlW5rG9cGsCKmpw%2F9U%2FnIyhmRERMrCP6woUW9GYJLlf9lHnw1YSvruFessuAJ4IxiqAXxqAa5n%2FtUfrBu5CxkIW%2Fw%2B%2FQpD3ZwizEM6cvWi1j8eJ3hA5rTwX5tgFin2QTuVaM%2BQ4UAgKuaiz0%2FFs8nZEZGygZi237SC6UaPva9vGUue4M3r6lGCe3WXA67KTss4jUGb2IJlqE8er2kjDxH5pbwAhBxvSemLSk5AyzdWiZQ5ft%2BBrhBgVeToHFdkzwvLiylzZ3sXAINC0dxnUvw7UDN6%2B%2Bm%2BE5Dxizcf%2F0dEa316v3DKMJWqhX7DMwDaTPmGlzxrhufyZaRvh3nYHERnNR%2BRkYwXeUgzIiAYss4LPI0CV8vBwtNd%2FC%2BeFs5kQxrHP%2FyLNk7XdWRWipaGJ6%2FqmtH6rVibkkKDFBJTrYD9dr3B%2BmnrxzvvdstA%2BodAickItlrzIc3HAgEorWNu5F%2BzxJTjtRh7dsgKH9ERHPYvppwqfuzkJH8e1EVNmcUfSno%2FyhkPnPi6XEj1Cm9%2B4uFfUEpTDhCTTQefEmUiSv55Df8fKVIOmxHBPH4xJYhE%2Bda%2FA4DXsA%2BFa6C0KpdDx7DGN4nVNyJGmvGI7QNqvDFjoXgpzCsi6rPBjqkAbKGmxZOXyMa1S%2FSY%2Fje6n23Y6BVLMN2znnNWgfX9w%2BLe91FTZYR8XyMURs8cjs8z6NTlgRAdRSQ1nunOZ6K2Qxh2oJMJsRjr7xEMxQ%2BptyIktiaECncy5mgdnkjS7HB3wjGFh3b17sIm%2BIE%2BN4wjPfj%2Fr5GMDnRiQ%2FDo1Ykv8r%2Be6p5oxypmG%2Fs17hzWxaowsWlPXTAJL2AFyaHxU7m%2F45S69Kw&X-Amz-Signature=55d578984003e154e6ca6ff25e40413b2083ccd05d088cfadcf08be000578420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=d6751c90489bfcc1619faec10010beea252f4d6a6382d2d2391a311ce05c2259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=dca95458d16f2c1020dc14e685a609364412726d4b043b3ddd5f07d7fb6733af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=9deb2e63e8601b432dab90ce0d34a3f0a96d0824f4c4b7a8b0d86f3a6238ad31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=9a2aab2f00de0e5ca2651dcc812ec1db2eb934a01bd6fe810d72078ab925b79a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEZZWHO%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrnhUiUrSfiHwSAAD2fg45ZQAZ3Zu1azaT9dWo%2B5sXzQIhANiUDQwP0YvU4NtO9kKIM7gTW51mJsLVIRqmxCR74yqvKv8DCG4QABoMNjM3NDIzMTgzODA1IgynzbK%2FmDcrujNyeNMq3APEr1KZEKZiqG%2Fem69FUS2QhaNlW85%2Fnr%2FMTt3F8vMBVz%2FvZSt9VnxPvylTP8IvdihLFKSXnKTX%2FMEu4fja%2Bpo7ZV9tCy4JhfzeUIFR5FRE7ksJoRsGUhKt9IXEbjAzqA6lP4f3jz%2FqPgbKGAE%2BRmL2LsH%2BMHfmt9zTpr5tS%2BZiOCatD5KtKV9h3jCIRgddhMZaJ9%2Bn5IBrWs%2FucwngTzsHA2rm0frFwqobaMryfv6MMsrexAWDf2NyzfMFFN4i36sE9KzHcU77%2BLc1p14qhUVe8QLRfpl0qGXMPJ6eGFMsc7Uf%2FUnhGsOOkB4d1nLqX9ApdXwxz4HZKKjhAtRq6r5fov8mkBpOn5UdPkMwwY8wtjC1s8FS4b5QTvnqTZkdwugl8yqs9TP%2B8vsstNR1POspMq8YcAO6%2FztMRMLi9ZsMX6xCtNJc2bkgVqbg3Tl2dctv0RR925y%2FEDnRpE1hgfcEi3a1BcQNPLH826Y0MGe9mxgKVnAaw463h2%2BAJjYivwujGE25a2Vki8HAEHm1uuDmd0pdylgFqC%2FGJhLLz9710mPGvFsAFYN9z2PzVO9DA%2FatrHNnAI0UhV6Y%2BRf6jNCpQ%2Fp7F%2FcmHXMCtzVUstl2W6jJfSALfboLgCq%2B4TDbiqrPBjqkAa1DH7TsRoaQL6vL9K5FNxTyUWD2ijy7KAd4yLGJoR34C9x1MPHkhhOKeF5ScADDoQnfspCZXUvy%2F29iscnRcrvV%2BGzQTg0VDBKom3gl57F2vgJjtr7iDcgLyzCiRDKOoimcKNqJ6PDHXBtLjd%2BW52RSpeK05LnvCSO3VQLmeziP%2F1K3lpPRxTNYq258070H67zXtSUqs5AznOAXH7AHkWL0UqKl&X-Amz-Signature=cabebde51afb4e23daef0b78df018ad06be2ac52c3590da704596e7e14040197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=4ad5c4ff5107e26fe892c76305d4ca94545778153e1bc8af3a86fe740c3dd1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=2771ad85a346b65bd35b7f91590138312277439460b93b3a8bdf9b410e895f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=9deb2e63e8601b432dab90ce0d34a3f0a96d0824f4c4b7a8b0d86f3a6238ad31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=2fe05316c9b4e5e4d8a7ce55ed5427c4a5bf040f626741461f010e6f42009bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=0eac38067e35b78fdc8ead92356ffb75e59ccf6e622e23471729b164ea3a47a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XAUJD2G%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNLWEibPDRh3xTVwPSM3LQ176eOujz3Svpp3LIohRPgIhAMfLOCWULXoLgOP5atD%2BcCQW5vC8qRYBFi9vVUltjfKbKv8DCG4QABoMNjM3NDIzMTgzODA1Igz8xt%2B339KXaj6Yg7gq3AMa4KH5RjM7xgmU9NKIu3EJ%2BKKSkappYdtT%2BGqALU91Hmpt5u387xSW9gzUpW8ELrs9xlAalC%2F94Tj0Pzw7dgSMSDVTSsIfGf87ylbJRW1k7E6OGwGFlmDeDw2NX0nF6FvFbIp7GcZ1P25M28Wn1aaDdSp3JgA%2FVPosB2U28YeEAdlA50n%2FNzXibpW7SJV%2B2SELJfxIcdDM1VvE8SCLv6uzfQl6jdkaG6B5jwY9Y9%2FIqkkG6G6bNJ52boxL5kUD77vUelN07FQkGtMrpAPHN87ulRCLLIHHRg9nponzjaG7IXgIava%2FbLH4GOpkr%2FlOeqxeXAeB24YDfQ3a7Re3VHfbCXtxn6PTCqTld0llE9WHjF8RbNGi4%2BKMjDp7lr39RPhGMy6%2FIsUzYCWRAEDT9adKrfF%2FVET4RMk%2BbFEeNiLABjIU3aRqjlWSNdm3%2BQhq4UHPecS0I24gk9RssNZuwSffgqSpiDeeUwKulyjq1FzcZzw14owism2PUVgpLZKflayeUxO3EGd3bnSQH8yfyuinb%2BSzxons9Sc%2B3lPDgXgZf6WeXB7Q9G3%2F8UBwOiWRN9jCoXTat9m%2FMq27ZyDOIUixj65X0K4M4RrOWcYsdkKsQJnzM111U4RJ9PKZaTDuiqrPBjqkAdkM1vP%2FyvIvM9e2CK8qld4lrnVIapT%2FqUlBsS3eS%2BrdNUft0OBD8JcLBjJBDDK9d0oe9aPJwvmgo74W3FiCJYc7NBeaQulXFhJMM3wq3n0IUdQ2PgsBouOF1KNgzmwzlj%2BCTzfywMi1v3BtPVOJ0lmNvY71KhE0%2Fx6J%2BTZjJM6YyW5yV5OY%2Bac8QaTs3%2Ffc6XwkITwI4%2FKIGtuFQptJbtoVMkwg&X-Amz-Signature=a3ab10061c4491c6bf8727dfb5fb04c7333918ef7450b6c1cdd7af2df5b53d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


