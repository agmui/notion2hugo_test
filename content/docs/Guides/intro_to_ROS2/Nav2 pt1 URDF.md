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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=db27b9534bc8f81c6c47d87cd0ad7bc22a8a1fe98b6d1b9bff15f8e380b2e1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=8b7bb3e0c636799d4ee693b1d878ef903b04ce785ae1b844f5fa7d5d44827894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=f2f47e0fff839230765c38f996946a72e19966ff1667a2e2ac2d7f2c79183ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=b2842e0eacabc2f220a796aeb0a35c5dc26ff3b452f9fb6515e5548ba275ab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=6c2fdc35987faeab9452bcb7a2ae976e586acd5f8546b5a75733c9f83d785778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=fbf4f6aa88eba053d5212b61fdd1c69f7ee66fa3c0d0da9531828d723458696b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=552f4e5660b8cda379b58167481e842d5bbb2a53478149d26589932274b6bac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=53b28d44de6dc5ebca029b28ba78080568996dbbe2161e688b61f576edcccdfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=7a08b698d83f534f47a18f42d1c827d510731676e22013077a8cb7e8325ddd8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=8fd6b0041588ebf95b95070b88a55027a5570b0031362c8949acb19f85ac31b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIYKJWL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCBHwP%2FymhobfVFk%2FHfYwFkq9TS1OMc%2FKecXECEtZTG%2BAIhALe%2BzmPy1OCrBg7vrRu0m58eq5WBbzasqgTAN%2BGYAwmrKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwjC7NpYzC88WePhCwq3AMp2WZuWcBqb7wzMVJbq368KHWhHXSEXbotvEjciJUCGdgr5UrMQdzBIWqDlYHj25nteFm03lloGa6y6OpZ0WykLxiNFoWTwFt4UMuFlII%2FHhp78kMfGe%2FkheY%2BnraVSRXBspJg%2Ff9R2cAaKWfgYahI1aaA7w%2FUT8gSgLjUkffRScnAiBZNy1bBBMdzVMqzGj%2FzqxRbTUqiHGYfrr%2BiKGt1mZo4eLJsRmrje5X7vFp2pat0EGq8sgW4rpQMHDrd%2FhU%2FxaHF%2B4lDPG6s1yNjlnaSZW096e%2FioQFL%2BEbQfcKtgbKMOn1RbKMlQaDAN71qT0JYDGawSQ%2BpcgvdRLayqgTB9hzMj0RyNHj0w8KcxcRiQg0cwnOHKFqJbQy03JxP7HQwB4SMxH1jcQiQBxnGmXpGLif%2Fssx2grFu7bY1P0FwL%2Brb5dWJ%2FsT2qkcgaGMPkorxVny1cekRY7%2Bjp860tzG3an%2BdGsxU3KoH%2FRFK4X9Cuam8ciniARH3PfqXt55%2F70dreAIl3PB81sHUJvyf3TrhDHyno1SStlLZQSNj9askzWuGkGpxd0ScPJm6X%2FIH9tj4EYFFtAJY6LJ43qEtUhXFKg5%2FZNWTvpKUF2StvV2jNSK4zD3ZDHHHAQk%2BZzCKrNvHBjqkAUBoBGFlwRiBDDHp4AHIs6HTC7uamNhhLLXibSkOzIyP3iFbYpYCV87%2BtRGkjUhK9ubWttw2jW5z%2FeuTlv5Ioj0EnxyaFSDlSA%2B3fVrJGh9iZTCNd3V37DmO26v5KM5NEZYVajD0Jul2HoV9xE0UYyYktffGaIDi%2FZBvP5%2BusFdw0ldZhMIQFV2Mnaffw7JDjGMX0UAvZ79ad%2FgajlDXyscsMCWC&X-Amz-Signature=8c5f8878588a3bbfee677cfebe969035fcaf5a834cbdd16baae2dbb91753d042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVHUGSFM%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDg9%2FKOpbohFkyZELhA9dkX%2Fqfmnh9iYeTGDEApFYxzfwIgIWY7J2AW3UklJrQaNkwWC4Y435v5mx4dF%2FjiWuQLZlMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0r2ti%2F61FF6Wwt6SrcAwH29Pl%2BhK6T%2B2cp9UxsbbgDny5Kl%2FxHY2JWuaZb0qmgkxJdkHRqtYZpa6Fs5xMN1ojEueVUxKuAGVOYM2ceb8hkMhE7G%2F8k0qN4V%2FIx0hfuY5OsuLqwGei6OYCkhsuzOKmu6BWNKGPHD8cAhy7FLBIWzksffOUHJMldePDqtNBruWRiIGPI0iKQdfqs%2BMIawv3dUksl6XTeC05nXvmvEBbGNcFwMIDbCOvBX56HxmSNzgsWWExeMZTWB8wHTSWtB08LI56mZ7cy7YWTte8ThS0uC1gB1dAoKCEZXJ%2BSmGB9y81nMEuX7fv5Fmzrqe%2FhiAVI5M0%2FsfmbiK9Z3%2B1HnuXIR70P7KOBgB6%2FnlLBHJoj9B8SCFpLGWKooCTdXsKiIyZsFb%2BDMqZlRXRjwNpTlTFmqVrD4tEJTX20ohOKcGwdYNlbD4%2Bt4FnmeTf0ZR0ZH42saQfsDeSjLi%2B5z7oIXqbFE4KvsWUmUUOrN%2BpI583vbdiynYLmsnM7F4t7hmUMI6OWARvLJHcOC7J%2FWqcTkPib97QecE3UT1IHK6%2FWByJ5Ww7gadvMTUMLJolQDh3Ou6jgYtHfdNbztL93v99%2BIvS0fI%2B9tzgR6LqkLgeemDcjPUMlamPid81M1YUyML2t28cGOqUBWmN1maC3SH9IypcVWUkWvl7W%2BGjcdP75OLd%2FmFusU68EuJ0SVfxgbELAhbGKb9%2BdxH4aMH7fIOwwIXbwW5UO8Sg1gBjRQnoSofwMwTgXOLOcyXYH%2BFlAoPOPAyq33tWU5eKBIvcPmX4EqWbth4fNU%2Fk%2B%2FbglIcer40QKSCfInYsGPjqnnb%2Bd3nRC%2BDOsnsaUgwbY4ztOeNV5%2FuPBIhEz%2BgNRCdOX&X-Amz-Signature=e1e0660887e244f85402d14a58709d29c41e25ab872528f9bff8a714d97160f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOUMZARZ%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDQOxpk9sM%2B7xG9Qe7BzYFMNtJBazx29My301U8eAoICQIgCC87QhqzBnr0sk4wyb6x5Rj3j35%2BbOdXtD%2FKfusa1tMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0rcm1ZBAV1MCFBRyrcA9zUM%2B4TLfhLxvDVdhM7eMwwb88rHpn9jqeeFtEPDgouB8r70y8KQ%2B1k5%2Fx7DuAxseQVAvChhnQSbmUhXS309RWl0QSf4M4OQOlARH6b152iU1yPtwj8wSZ9vwL%2BWjEJ9sxy6gPidoqlK6pw3VnkXVP5LC%2BmO2sixiD7B%2FT6Bog9jpl8XdlJ0QA%2BFZVWye%2BRueD13cnHr%2FcWHt7soNHcq%2BwQxuB87V1VOQa19gbrQw%2Fgc9g0oJkBLWkfrOLGMBV3IO%2FG5dLxN9yEgqaSHquR80JBQfZNwoajgOz6Q5XEVgJkOwIVv4ttrOlRbCYCKOGY0O8W5xxZbe7bwfGd5lYYTp%2F72Eo8ltFheCArDrQec1FuRUBiUdLiWEagsLiZ9d98LustzOI%2F63n5tSRJ3m92ooP1TEl%2Fp1OYmE9%2B7gDtM9Q%2FJ8oSAF1NFmci7u%2FW1v5aUkui0AV8JLWDrYyw7gBly%2Bs7TKqP%2BhLn7gAzlUtZ74fEMuiwFemq4z9%2Fue2q3s3MA01vmwEE%2Bu%2B4oPyitTGY1IX3GLbb3%2BdWbBICpAE3MbRMLUNGlNUjZOMdkH7peeL0J3Z0XRGd58q3CKhcxQ6Ye6xpRz48B4sWO8Hbxc%2B7AogIWR5L2kMYQnsSD3DMMKOt28cGOqUB32H0qwCdlpfi34TawG2v5igxvTSLZgMfh8tQR02YXoTA8LOfOePVHuLHTXqz%2FC5kAp8Zv%2F5q6KJfLjywBv%2FWbT5FfRCjPQIIQ9B4Y2Vby5F19VDwOQC6JE5Rc04oYqM8McEQyPrMoENyzZgxtECm3io91Ou6TVHuLSJc1k49GMPic5uAAVCiN0XaO%2FjRrN%2BkFssU%2BlgKswL01tH2uh6yJ9tgd2vx&X-Amz-Signature=9c62279ea6f97049d3006d5f47bec7dfea4b5ced01a34d48e43f5ae70760f214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=23501f086d4f65ad685e6224d78b4fe0621a63d7dde2f127cd887d1efa6a8ebe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6VUZSD%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCKHJ613lr%2Bvb846PLoDTmyQm%2FY9DKTWI9eBcYSDlNWsgIhAJnTPM2CRNLLr3MRE%2BJ3neF81TVwKaS8XMgW2VGmZM%2FXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz3Jgn3pKOPZMg8VAq3AMFgENA0%2B1j5CUCwanKA14qE0NpuPFtJ5b8NCxmiAhM0iZvuPbg2HX4%2Fgr9bsWiQz2bHtXdaPiE7JOismHbw8jGMHgSPiCP6lZp23im3LYt4hkjkpWgFZveBYUKCM1TJFpynC7iZA5dGZTzPnTPKJZq5vyh8K7p7vXmOgUhiC6awQu2jCf08OaiiQFcrNniKdXTf2R2ioTvVqkzLfxsVF94ooDZep7X7kKtTcapqEBRMwsaZk5XMMoD5N5PrGDTESqtGZI%2BhJjD6cy5UoBdJ1z%2B9LfCQk19lHBXuf5ehXSzagxNbjedP7leizewI52IbLshogk%2BRmkTwknJJBXYZUWCJaT7LJI8xVRN4XLNQ5sOIdakPQPbDtuY1hojtQ%2F8JWL42Tc6ffuYBUSSritSirpg2zDqKPHD0YlklAn6DpCpS1rOYWeIOD8WHzWidegQlD6zW3lzebVVazmo9AifFNGjb426R%2FUMwO%2B%2FnrOXVxgkY6FPVhpCxodXkEJAx0InrjO%2Be7q9swxrBtCKhqEab%2FbcSBa1C9j%2Fk3mV9m%2B3rzLC6d1r8SE0ruc5M2wQ5O3idhPg3YOHcVu6UxMt%2FRtggqMxhK6hd%2Ba7KR6GElNqody%2FZ9I6fWUG89S2oiNrBDC%2FrdvHBjqkAeGXOJvysc8iYduYEYFuKEmC4psoEP15dgid%2F9YYPypioes2aoOMfQrt0z3P1F4Am7o4rgNu9QQx%2FroHvPOiD1z%2FCxIogHwym9%2BOKa02nfTWz7vtlDK4AtDYHKOMrhSKs19k%2BqI9GhREoMeNpS6iLDQQDnkqK876ZCHoENp3ybOFnfVY0H4bXLcmHtTdLcIcO4ndkeoGttMEzMoyyVXxxpEpLGQF&X-Amz-Signature=796c5fe984aaee2de6b57a0e43383b9888443acfb57f19b27bbf2656232040d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=9a18fafe7d27f551c7165537587b372008308fe3fd54d9d039bc9d7a711f0557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZUMFJF3%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFMWx7L3G3pgiBjcsdorIPENRMistdzNTU4u9Myb%2FZ4gIhAJszcCFeWFTFbWoQuBElRN0xIqGDPTeiu5Qu3FSKqmvXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx86XzviVHebPq4fdsq3AN7ckdDn3pCuFEEwEqNf0Bm%2FgJlSKXGildFkMloc4%2BdIUfQ5DvhL5fBSPDGo0uI7TPv28ruQfqRKciJGm3TvRBZTjs0ERMSIBK80eGdZ%2FANzib6JcFHgeYa1CM3g0OEp4IY9BSNTAHXoznk%2F3bci4LRG6WYbJBpyoZTlLSJDuCs1w0t5Yz5mcPkcAwv7Et2C3Ma3XMDkVOu4rUnqWC%2B%2FmrTFq3vshBFqHtqaNABr3vu6Lrm2vmnI4p5B02Hf8d0GSli0e%2F2EWSFtNFjXwWrtcGZrCCkpnLZyOETqJiCAIebb0EDfKiaoS25wXNRQcN6S5r20GYo3%2Bj7G%2FApw3ccE%2BfMkKR7MPLc1HGOEC0l5yuTfGyJA5QCY9GCT33DO70MHaJvyM0yOITErGy%2BwwR1C9BRKIcZruPe4PV8J1zjdFdRk%2FbwhXsy%2FtcbE62PKbSJv0LKAXFrAjvWySnT0m2uFoCe1cxx7JY9ewdsRhFnmbEYZ4lNFVOUvLoGZg4%2FFjj4C8vQhV4nanKbs%2BZ0iL2aoESlbTN4mrAt0ZbbCKtccQR%2F%2Fcw2PwAxNc%2BfXSO1FT2uyzV6qrr4T%2BJEvFZhpbvqytc2%2FAF59T%2Fk5alofYqsowctURgqqdwZTq7OpeEB7DCMrNvHBjqkAZF7No1WE4JY47K3E2XRSFEt8uyy2OTjRUpgsCTA6XaqKbmm%2FjZNXSrQeiy7gEDKvyZCMAzIhg0QNwuwKTS%2FelHAGOvYnITp32smodv4rxxkHrutZPx0YFPCAJmkFxJOhXrE%2BAmeVLxMKYTsmX5TXMPSza%2FLKzXr68W9mWLPcXagBdJDLZNGazjMbWwfXwKl52d9eAyZE7%2BVMH9aAdho0ZoR1ePh&X-Amz-Signature=5992b431eb364283be0f5aabf900896cd3656325e33c9a8a37b75ec2e832704a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=75df8cd45f61c0079ee7e6af2950c85a807455d71be2d963c9f43b1b8e5acf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSFEYNP%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDjStAR6A%2BjbAcuXOFGhFuRDi7N%2B2ZWzc%2FkncOOUd2%2FpQIhAIBjRnUL5qda8aQJBk2ZW%2FWjtRUpHZFRPpXAgbAmS3kJKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6LSDA4rHzWUfptKUq3AOHrBzY34OdLFKQ65UUV4TfHOLAAIHxIisrkCE5xGL47T2srpPLdhPAUzRUDwGrrQREjz0NPHWgZ99INf3Lz1vCygs5qGXNv1RfS71n8p9eIVai%2B2KuEf44L4zMyknJxkROngAv03lG1ia5BakgYz%2Bv5XK5fk8wiCTanREgzgw2gOzKoawxm2RLr78qlCQgpr88CK3CG7PGZosyyTAVVVBtDSKT%2BEZC1TpwOPN69sAMcKCGTfsSsvbIMyYmMURKA4%2FpcJ0HFfmrdkujTCRFqV8ZGasV2FTCNStvCNhmPHYoegegjIls2xmWZAbEOCqgDrnjQ4C5xyThioJGYXy%2FqEBk9OFtsc6s8C8jVQUClSjkGL%2Bmtcz%2FiW3UT1p2I7xeD9qXUgD3tunTH%2BmM4CyIHJoNiO2v9EpmR1d5sROtquu948CTzAmqiKHL4RzHH8o2mBmFfQkeXQS09ZP5Luhy26z7z4lQ8S5uOLQzwiDUIlSHoaZPx%2Fh8EpfKuPIB%2BAVeWsf447%2FB0RDLOgn626kkVfwPRhOKxdpCJpvoWcNmohS4KrR26ZIVky%2BqPv9ONMCOwhHLr8GJSI1IosGe41CjPKb4YdEHZG8YB21%2BJb%2B1OWvkxQG8qqFhBtu%2BKuPmfzCErNvHBjqkAZRLyUyYiGDX2Ty%2BAKCPxXk3M%2F7CYEr%2BRcgNdocoUB%2FKPt8Xv45F10I4tgPcYvikvfrCmTPKTBrwNVPC1m8eZg%2F370yamHNhidrDVEFWx5kunPNNn9ySrnDlNw37DeYPMoidPiRL7twTJItChAMjjcwyZMScLNrVUrIXTf3ZmFYNdkfiUpgEhTOoRFqNlp6MFcDeXapLolNp3QIJ7ci0eXLeR%2FNw&X-Amz-Signature=ef222baef1a23d6d6afe8d59518410e69074d41a4ded44ab804a3d1d18f6f4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=83f77ce808e33619a9e26f00ac16fa3697533af8b757b44e00cb4bb335d2fc90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDOXX7XZ%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIB4D3Max8Y6gkUuOm45Ltl7MmfGSG32WZb6pyqcqweDYAiEAkfrv2w8tVI4GOa%2FRjw3bDG37%2BYTsg7f02ECKRZdF%2F8wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC85uiEr5SgW8WuBhSrcA%2F9m3Yymk2FLNu5cqHWC30xDcnXwdw2rc%2FiiTJ46DICOiaDwRNXouooah9RSE93MTGTUmHEdI%2FcNQ5M6CKNZ2MhvBieVUUGVJArlAqxRjJ%2F%2Fcx1TwSFbbsFlpqjx5Cw2PhYf1Z0Bf7vQELhejk7P6%2FA4gSgwlNqG6X%2FznXYCzxNSCl8%2B45uhsoGKA6%2Fv04XCE1r12iUEvFQne9ZRXBEdGu2oOpuQTFDoi5wZQQA3hMlBtA%2BMxcqy3HUm9U%2BulyH4Sv7Qz8c7ujWJhuNBbNMgBMTx2W9d5k3Q8Evmqb%2FAGUimOo%2FengSP0pwv%2B90C2bn9R1z%2Fx%2FBGVLip2tDkXla8fh3OqYAwLxznNACPTc6IcIAnBJcpNeBEzKdUF1%2B1hluBFAyULETiE%2F%2Fqg0xQOirYEsGzxMts9MxiTugakznFPCe9aVskijdcefvkwXQzLC71M%2BzLq3pbmFIf67E3fYt4YKvKwPXqSg1yj21vz%2BRlBAWACIasGxKmTYR7RKM6B0sSoz9VjUfzt7s%2BLO7aLeg9fcirIhkruDust88B9uG%2B3G15X%2FNuO1KNsH%2B%2BHtDSmGfZuZ%2BuXkY4jWBIUST8Lso0sAgqSugJe0zELsntObza6M3qaoCrDqBOHU8F46RhMPOs28cGOqUB62EXq6alYpphggnLWGx611UsAO4ACrlRaZQ1L3DQGSq6k%2B%2BiiIl1BvhP1ebY4PS4YMZ1AUUCbWlgGcVzmz2zOIpatSlV78cjDpNlU%2FXeN0zdu%2BTOoKwdkY6eP7vTCN3g0WdEShr5eAbduKQo80xWv8lFiooNJm81Yx%2F1WrAUIKr5Qr1fVUvxXF2fwH56O83neZn%2FS2cQagZzMuYgbwCqmJGLkRvc&X-Amz-Signature=d6f0254c7de22986a56b55c5da4d560b5a7717cd5b71ddaecdd705e85fdef2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=2f4cc4ce146dd613a16baac43cff7944d358bfb836a33e694e83128b5aab2824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MMWD5W%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQCvvVhb716RCh6W77btYLjRxTor%2FZvx1hcGjUusdpZZxwIgZdsHhBjXVqtE0NPig9zPhWi2E1EG%2FVxZYMz9kmT6jggqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2By6jrjCePbZtFg0ircA2hywxpgKwK3sfi%2BCF6cDPpLpLEoxQlcP12weaenbgjT95hnZhi%2BMtQd%2BUhrIt30CBWy%2F%2FWF5bd3lDvGD2CATDqHFVSiUFMnisNQBnbNPOuyl1Ipz5uZQeWJWaUFjWFOxLjOA6tjBOgoLUN2JMFYXeZUORcYXh2vPxq4q5chrVAPoZdggFLp2n0bNo98fsbNKBN%2FfPBj8C4vd5TbsaOF9fNr%2Bz2AUBTFJdwp6EHTmAAKMFXVtxS4aIaloRTSsG9lJXcPT3wfIl4EppqwDVsVOHYPRZiHVi0lxuZzfYTFUGNKJrrHRKGN4MIpTc8aU5BaKuyR9RppvAROfFhkwhB%2BxZGBr%2BLjaXYV%2BoPOBOyrnDMkz%2FqsdIk5WumHnIyIVyRd3O5rG0OdzkRib143MJXoa%2BJwHFnBeWIB3uhVbB9d91281DuYgWaCwS%2BPCTSnCpb5C9Yf6eL%2Fvv0lNIvFzqBFwZ%2BM3OqR3UeHyh4UBayZFYRaPjrfGZSiDN02seJwpxGMe5xAlxn90b3y2DR6tpJngDajkM3QS9ptwijc1wG2Fft1V54q7jRUgU8%2BWjpZdY701fHqklxBXiTZNVtqDRHpKdvDtf9mH%2FlhfTcvJ7Uf8rltLIvkdlH8a0u7chjaMLut28cGOqUBWnBu9H6hWrE%2F22AMXbXkNGEqYtwz9%2BbnAqw8PtDz8R8Dy3JT113dMTZDbgyP91VHraC2FXHEkYIrMwpb%2B0OrvQ437AGfu3ANBP%2FJtyGX0LCKtnHy6dGNKwzdTkuMRdmFBz2eQf243AKGF2UqqlbyntjLE6AU5sQcKVmi4S%2FIJOYwHVcw6PY4WIRgfiNkzTzyByywHZC5tI5%2FT6hZ7LQ1J9W8Irqv&X-Amz-Signature=7562584dd3b41c8e0cd2f1424436129a54d487deee7453a0cc43bcd32182d7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EE7FYL6%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEd0mVdcBaJENJ76MXiKZDrOFxT%2FCWvhGTcPVu%2BDaiMIAiEAm4mHhNy9669O7qXTj15dTBOxgpRtKisAil25FZVg1JsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJfu2JA56pAW42WWYSrcA8yEWHKDzdnaCXsUuHjTqEUptIDBh7f3%2B00Mk0eqysLwuvvg9jnyyn3W6OXhCduyUPirhlS4iCAi594i%2FHnti%2Bx1wkBH9iEQA2Ul45kisAhzJDc1doc%2Bv0r0ysTeMFCZiyrQV1sEuGEtcA%2Bml%2BxELRiKJ3y%2FOwkzRdUUd%2Bs44c6rae03FCYDonFnUs1Gv3sa6xP6bvCQutRHVTnrXtyUCj8TbWqIzgAc3qeKeebX1eg%2BwfRxHJyO1LAa4tXpcwFwMOTV86xLopCTCjD1C8ZQxBBDX5a3pCDu7Oi9hm6ZicfaPcHZ2%2FHithBQm52QY1lROGmfAArsZXtvhcXci%2F1ckoejIuOyeCVslKBATfBNGbCrqm6WzZ%2FOTJYXrICrKWxDQYkbRQupw5Rs%2BjpsiZA59NT2UCRj2P1b8FP%2BPMUT33ZcIm4AbSeK5qkCIN3Y1Xiqg%2FtviuChfP9Rwb4cX94sQY%2FHMyQJCvlg%2Bw6pfoWEuCIKbhaDTpiWiozGD%2B5YT0D3q4Bl3Lce0zggQmdk4lUrd%2F8oRFTyLetNFSQP%2FdFWxRcpPJ%2BdhTb61JfQjsb%2BRoj3QW2yBHKsssEYOrYKviT%2FCZ1Zc7WHYRtyHH2wiXo6ynrmpCQbCp04NQANok84MP2s28cGOqUB6AA2GjTZK5qaqfcGYe51KEut6g%2BO%2Fwwd6JjLm%2BR0KmB3ey2%2FsYrNcLH0KPeH%2FOGRVbaO%2BWKppmyWGqXZBiTpJ41k3bV6tlAD9a205sAAR%2BUrmmZkRHIbuMOOT%2BlPC%2BpazBH5yR53FgjmzJ3wSwgBIqq495weIHUvnkzV4YpvbImvE6S7N0YG8AV8Vn34ILyEgsD96I1BUt28yqcIr0yD9E8oruQB&X-Amz-Signature=a96c72077e56d9065478da4386cada974eb6d9a5b454080d55c4d526e95c86a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU46NLRR%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIFi8KY%2BkwIBxDDo1NiShil7fAtMyenWQwm6A9WnXHeE8AiA6aiTy1EzYuNCYgsAx8addbdGKw9wpg1vnvIuTRKZr7yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2BGU9chAHWEzSNGjKtwDp8fzsLKEXnS9MKCp4YA0qrMyWM6Oym%2FRWKBXNpLVVsg4uvUVYmuMLWdc7A%2Bal2vwOVAZB4CxCqJPk%2FXcLfBgTrm%2Fv8bS4q3348SlBYltycOxBvSmwG%2BQ1xCYwlzA02AkB7dMaeCG6gocKI4dV7PwM2ZBk3tutZID%2FuoIuj0GtFri9wvSrBVtqLf%2BHer4fgMNaEd%2BH4xH8d5HpJhUoiBebK4mMrgWXz0eFy%2FYoK4xDkafssV0kPY%2B9O5bQn0YYcA3yQki4fU5F1k47n0WuPyX7D%2F5Z5r4QVzi8ONQVELiWj6GOfmWYUSz3wf50C0NrzN%2FXFSizBFkPs5eQG9sSsPFpQ4bFHx91PrMlyGn%2FnsNbWDajysjr1WttY%2FYkO1n8U3ybLXJnFZFseYGN9HjXEgoGVKJGtoqUt4737Vk%2BmsT%2F05sLXFNvkwtGVP0I0xqsXnPNN7%2F8Wa89JPsVTlzhdI%2F3FaDDskiX3%2Bwav%2Fa9%2Fkfbj0G%2Fzgn3boMuuL8PYFIhi6FbOVayXjfNFnLXbcxViF88c%2BZ8ceD1X%2FVHvLevroNYEjZBdAD6O3m%2BQEyGmR%2FHTVaIiZu9d%2B%2FfxjAWjg7TRwU1YaODJ9OEpNYgoMZnt%2F52zHvnTZ14%2Bqy5It%2BMY8w463bxwY6pgE7nJ1oA18Y7%2Fye1GGUWxldIgCvWC2dzqw5kIau8WT5dyKuzxH1y2P8vBgtblbPyet7zcXnJvbZW6XogeHZ0cSU1DNLPzoQT%2BFW9y7UXnnG4j0z6Dq5G5SEUzlY1n3xf%2B%2FW6S5Ejd%2F0yprcpoQfiVp5emWMG35lahSCm2yqv7xATo2cO%2FjLq3FzXo6AnUzyKJk6SMyDXXNezqqyZd1uxQ1jSS4qjnJ%2B&X-Amz-Signature=367c82d553803e96b6e740b0b1a94708bb9169021952fb5acf2c808b89246f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=4e85ab6b8dc8bf96c1806d3bfa5b65a3a81f9fdcfcfff6e7a3dbc79a2ae0bc4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665K5HZZVT%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDFSIJgBpZGuCeF6mkkMAgnDWoHNJP8ugtDOByo1aR1jAIhAPrRC9wqQUqLIJDMjFocTtTw7mXR%2Boa86XwO0XgiyMN9KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzfHyYevZKn0BorbGQq3AP%2FF%2FaAzBg63ISA6I4QE3hgqy0V%2FSsp%2FubTe6%2B6tpzJeeF3Ejo%2BjP1HdEAb51K%2BO2O5%2B88PxejQWJ%2BIqT4CLbGKB4G%2BR9R%2BSU8DfJMgSl3OeqHET7A%2FN4gH8aFSNuey3N7krtsE%2F99n1cu0lGQiYL4A21rw%2Fpiop63QauhAocmDjnIAG15owp6kplmRVHlwBaW5LToXGxgi95rV%2BR4%2FAF%2BfmjNR1aVZ8leX4Y8Oz1VNKK4mCwGjKDAuTwcnYC2kEAoxeBGwklQTWeqvGucxD65%2F99BJLfc7h1otXr75lGLCeN9BqpfhQQFZoLFaxSmPn2sAI2DIXmVk9cCgwlxCfJvLAE3zEi%2BjzWbI2OrYotF51lM9hZ8I6pg%2FZdU7SoaimG7jSHtmLDrYNh%2B0DdTY%2BgnyGAOXAViz2Uj%2FSzNwhE9NguX3wWZfOI%2FANIFlYrIX7seraGEt2c8bYGa7Q1wNB%2Bs9jLs2ddcTuLM2oirt%2BntKwUfIZ5rQ3AfUEzzGYMORiJU7AwarFil09A5pItxjFZGau7da7FwwQUKrJ2DYeXSgWvXgsEtW8710xbohUJa2vgv2ndCIQq%2F0ufPTi8qRbCo46D0xkP%2BMDYl3obfZAPTQZtADvIsixxtn%2F1nxljCorNvHBjqkAT812lxQunemTBz340HU1%2F21YXaVF9jQp5cBTyLzoe7wjUezdjPhAgziAfZ7qxIi6nbxT0%2FPDf5NXvRJGbRKN0e3lk19QMNsp0Nt7q7%2BfZ721tPD0EnaklDTgmquhHeDWLPGKk3KKXKoy6NHFEEDNhrZb7DD4nxW4ao91ERjhPIofp2pHhFrsvynaain8YrxgWzgs0RlZXdrPQLSFvWpYdkpi3iw&X-Amz-Signature=40da35936938026322eff91f21988a44db8488145c85ca8e2504d3aaec7644e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=9921a29cd185badbdaf67f04bdcb9afd93dce4f839feddbc52ee631027e27a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=66c50927e69ea62400f639c21f8b2364d6fcb7901bd45b5ef8c1a6fdea860057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=a3e2b80c0e3b3cc77a3c79bfc4b76964747608bc85efbe6c94957fb3c7a08662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=d54baba1b2070920f426b67aa5a730f16d3707cb44cbc458af5aa01dd9a4a461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF7AMPCL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDauoVanadkefRXuT8lfI3KVmVPtTn2ZEn7giwXsYKtPAIhAPY07QUgYqMIYJqaDMbUhUMiMe%2FdW%2FY9Dosh5ut1bqIGKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRN2FEAQAOhudeC3wq3AMN28QCLmRtroYfjpBizeXGMjpWkOm%2BcrGivygGVv5Md%2FMf9uIL0%2FhPD9KTw8geNSFk6iMKgz8UI8FtS4PAo34REejzN11yn0bp81gANlVym3G%2BCKOX8xt%2Bpjtm0TSRZ0hOohGLhg%2FfsECH%2Bcz3TBT%2Bb4LJ6CzjUO2mE5l2vbsbtHzhztjnTmGh3tEbnDDLHfPOK6RWrf6qLwAiqtuYG6GEufmzVW5LICXoCCgU26%2Fcwh%2BOI8q4Jnc70PN4rsXlc5k61%2BBrINBjV0fCOU4XZSOVXGGse0Hxl3KsNB%2Fe3Gdh%2BJAg3cOJ8p6MonEr4Kd%2BUHrpq658lb78TKfxVs%2FFqWfXEwcYU2KbWzgmYrfk6EiQZoVvI%2FQegZdCCcpGYvhiwNoL5kL5gboPG0CvE1DLRRB9APITOnHIEJQEpQri6MxWbBn5BCmltmdbbOOmIHE03c0Hv%2BIm6eyriac7x5a5d4WTEe8AxP7ZRiK2tSVDHQS%2Bt1Y0RhISvYEIAEOb3T5WWr5VJoMpZTUrFSKTdpXqOf8SmMP1MU1hm%2BCAfem3LCzxfajVM2N0GaouWRfLyHaQxR5daTGGlt%2FbjKK8Fidlsu%2FubuVnTQ2kyKcHPpvBpprDiEijdb%2FIf%2FKu33oyLjCerdvHBjqkAQIfDCFWAuSmxPQboN4tURu9p48TEbgJlF8plGSkQBgCGM2tdXqFiDkZiiEzTu7DqeHHoPha1x6vJdXoBRn7oykKWKCirURGatpi9EsN%2BhT1LXqwRh8S10OOoOTNH3wh9TMMyMQ3ZlJakiBjFOMpjQcNbDUDmF%2BD%2ByA6AXNj%2BTlnuiRFR%2B99%2BmjDlky8h%2FkQA6vZcIStdH3DW%2Bgd3CHpmZHkJSG3&X-Amz-Signature=eecc7775cd49d8a8c84586746259fc50a95ce37c54755dd706057d07d0cc00bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=2b5fe36e37048c79a49a42698200c9ed4f5efc5411af8d254e17d0831635d123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=dd839f7a6e452f84d242557358b2a05178329082cab777ddc7c346b2e5ed3e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=a3e2b80c0e3b3cc77a3c79bfc4b76964747608bc85efbe6c94957fb3c7a08662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=90eace36cd769a65bec1cc0a24d854e2715b06ce7f96d9250798f806e274969c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=5b9edeeb9c2da108b2970edb17943a9aa9de9d83613c1812eb7891ca30e03bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JFCMTXL%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIAFq4LpK8p7P1VTrvHEfxudQ9nwf%2BWIRy3%2BBySeJqowBAiA1ynrALsHx4C2ePuUohOdh%2Fl2rJdhn%2FNSxyjQDN4g%2BMyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi5yOHkiUbnDtEwFiKtwDcjgAA0t30oIosyPOeshJH5EiL2dfGJA8JreNNAxbZFNjesnRT7oi3KGaUq4%2BVgdFdVpnF6tz20L5gEYmmYwxLHaLwIkaR5qidM0L2OefsHqlJiE6dpmVp0gsIzff9bJRZgwCx2tscxGn9%2BX869nzeLZqkx6GNF%2FBd7DSCuRN1wMQSkO1tbO0wQ3EcSTC0rvdHNktLgcAhvw67AWnfP8Qlvrpa4OblISamJei8A9gdOO4pv8UAPaAHOv4lWkR3%2BZ7KLWC3yIp8YKOrvTM9EDuy13XSJST9tg9BMGkxuI7wEwK1Y4ZYtCruqjOOqeWCC57cyWzmG8sbD1wq5P78ZBJLyvu6iMTt2GPLzQWFrwrfpqD7Ct7uNb%2BS9cCgRlrnT6AtncBCrMtaS0tmwGdYlZejXtImBIwFV2R02BmtYK2tXQdB%2FxIENQCGjzFdUOXobplIoiL2CdhJn17nxVwe%2FV9gyCCp%2FLWPWSMNaRQcNO3UcN%2Bk4TqKeQvXEIq4voGuSYfTzJEXbPvfpuY0CEfC7hWpLhMNreqEwkvCMuOy4k14GbusJ9OH4Hpav7ij3fpnWj8d1XPLan3%2B2%2BvXFppMlIVoGgLn19dLczccqxg96STBTr1dgfYrZa0CaTGKP4wlqzbxwY6pgHx0IlUGkORZZIc4sMc4ZkVGA%2F9MvLpIoe0KsHRqAwWZVslPwhqhrbYy6rhXNUIOYLRieuo1LP8RJV%2FWowug761yWFSyc%2BZ9PTf9OelPFwmnxjxnd02xgOTt8pQqzA%2FnMm6Q6VQ0lh6mn6GbSm2s%2BX%2BMiRTZTJNnCZPh6fnCeebO%2ByGWF%2BOyM%2Fc5dpoA%2FpucSdojQEtIgOeRIXM2ZJ3NsfF5jzCXyBv&X-Amz-Signature=5a4b58cf2fe988a258777ea834e7775dfb59bda94a32422cda3b83615b8dfcfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


