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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=0927bac02e289496adbf84e661c94189d9a744ae6d1ed4de8f0af4eac9eb62c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=fa841fee93d4de0b5766b2314d145ca986d613055a3aaf94a1e2c9259d0817b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=31a0d208d760689cad3157542c6e5a9f994618da580d1175daa8ca9cf12e46e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=cd9f644d6877e7396a797fe4138f4bb2f82bf8438d25c3ccf2ec3d849d82746f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=31236ed9f133668d3142e15d9042b3ec284ed84d1a4b93fb3b9e286e97750c94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=03c84212eb043a33a2fa36701e0f3bc426ba0e4f0c248cbe308a6e257c3e5e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=476d201ae9a85fc10a5675a80cc8aee47c73254d206b7712e660307dbfa70286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=9cc5833245638154640ca5ec0170550a32efe2cc0ff19bc063118015aca65a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=467678625bfbb8c4cce4cd8976258ce4d09d1295a5cab0d291dc14472b2a0c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=9126b3e80ee3998a3a80994a5ce82706cf326f19673b167de8e2ab60fff8c99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QOCYBN5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC%2BH%2FiOg2%2BoTa2zKkkoWVw7uqZD%2BnvY6XVtb94Gkw3IGQIhAJHUii5sj3XDow7CjzvWSTbyaay9U6mWvlBvQXMgT56CKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp%2FDLANQsa%2B3s3Q3Eq3AM6D1%2BQ6L3xLIr%2FgJTxkjvMWjgggva6BP5s8ALLrYNrt6YyPfvyaNTsigxoTwlVmEpaUwD1NynYbb2Xevx47qBK1f4A1ipoKq%2FX0vHeYky5TE3CcWkANgio3qZ7mFrZi3UYpqsDlVdcCbKvprG5LcmrkDjGk32s028dEcRDJSLWB0SsZo97C7JTofroRP13q%2BdtxyUFIgobBdjUrhwmjjHC5DBg6Yoe7GPJt8RHL1ctYCCfSbAsSzEPsnUvUKQw4EMsWuUsBgcmjtgJTKiNFcjXD0eYnNoDYC7VOF3KPMc4%2FqPgQyoPvCaIOMVfkX36tnj9QkFUTZ2AtBgSffhCz4ms%2BbO2tniOTYdGDvUrL4Csx9TVFfQF%2FGbT9FpzvARtvKw28TazlHDKKEKti2pfOH6cEOOYgGADiSe%2F%2BoeDseQJt6p5H0W8a3yuGr%2BKVRuC%2FPg8A%2Bhu1BSp9WIZttTgWPtwt%2FgKiPhqCYiVdaoaxTWb9Yhmb0sN7SGFIY%2BBaM3k1fOA6vGIFBFNK6W%2FnOjikFQdbmUDZWqgjiWoXE%2BbfldgyEK3qjdwkabeOrQrvSDpNv03Z0JfQYAlQoVtUC3wyT%2F9oKLeIH6DuEapgAP%2Fpu%2Fd2T8usRqnVorbYg%2BidjDvodPEBjqkAaCayPXsekZ5ZuYCXi8PJ03Ol3GTZp%2FWfsVfX%2BDgTDqDaCAmorCbVysos0ZPKpWsrvFuDxWOWxigaJBY%2Bt0VeLBDU71Kv3zKOmFNVh8Jg%2BEUfNEBYQf%2BmU8Vt5ICAgDRBcTMqMr5RsexETJjIl4cm9GaMY24YlkXd3QnVpCyAnu0KHMevmFAKuOC6%2FKLGwyEZdzc%2FKJlPQ25x0VlQP3DVQWHpIDu&X-Amz-Signature=d6a3e711547a1e171c214bfed99892496584c9c1302354501fdfd9edf337acfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGMR56L%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGfFi9GKqBppxCITHjht75jJlypJkkt8E11nHc5OhG5%2BAiEAhoVKRWpHw8GBouy%2B6Qm%2Bym5IW0IRT46owSevTZYn2QIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKZJ5gpvcLGMrkTnyrcA8BihqYegtPwi4LhD2ZoCNxp7fFCxIIR43g3RqNaAlLF8%2Bp23aRax%2BYt2szGBVEkGFgPO1RiyN7H43ktwgAQ0WHKSigcXw9D7gLf%2Fgb2khTt2vh%2BI9sB6AJ%2BAA8xfrDDWy1%2FConvUdkLupapN7x3JQ7K%2BfR8AlH7cxnWDadWdZQC%2B1PJxrFHH6D7NkqZtMXyDYEYZvde5TWi%2F7D0bMAD6q%2BvFZftbjxV%2BYy%2BYDAN%2Bs3f%2B6yySz0tZRu7iOBDe6jOHsMOsWhtkF84ETrMxZUAlJjWTyQIXvFLPvxrYHRV7zzkQQi5Sd%2FTtvL5EXu3R5RzmQx5t6Kbxjm40pb%2FxyqoBqJ0mENGs%2FOuZdSO%2BrsHDGNDwkZNhFP64QXyKmMg0mPCQ1Knj%2FJJQ19nz8UuO95NV7%2BEtaGAAwIt7%2Bex%2FMV7HbubnB7ZRp%2Ba6eONXdRRn8nd2fYDq8awwFgGraPWlQA%2FaPUlQGtNYj0lpMBTojRtY5Wa5GapEs4W7TwAGjCtjNtGZNFlzChkwmSe6FV5zciydroQqZo5Qc8KSunY7EH1U6CsDgWzX%2B5uiXOQ4b0IwSZY8IPGt7WNbdZ%2FOcV2whWWFHBV4J2GEvb25xUmldAsNa%2BbmOLS03l65kx3emAUMKei08QGOqUBNc0JPuerctzwD0M1H0db%2Binl9sTCEJUZOD7LmTjlhL2HHJnzW%2BDDWfF1ZYuWOdaSYL3%2Fm6vG%2BqnLtd7owyTig4C2NVU3ZcUyF%2BboRaiF4%2B%2Fo9C0R1I%2FR0E2kh7SpamjIuQGNS4f%2FYnGfqxouMzKgmZzZrAwl8a0SC8HmXqnZeq50rMIRliIGZfUK1ALSu1Fec%2FkM7IyPMWbzcVdhJTlzJD3MgUai&X-Amz-Signature=da3bb7daaf8c4b848d08eb5a4be364b117af0c36346e21734fb7976deed987b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYARORNT%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDtPtaHhMovXjV3Yeoc0jDhVx9dVqrKHCa5gf2gH9a2NwIgXUbmWAFQKJkDMKnA9HcGS7xOyOEK6BVx36kduuyNDwIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDGg5sAQa4nDqMlf4CrcA6aOjko30VPBwthnY5sT%2BHpB56ydk4l%2FgWKfER6DiVGM4cy7TJwH%2BonRarB03xVxzOXa5zwrqiH267QsETFhfa2w%2F6cZkCEeluQ%2Fh%2Fc5MvVK%2FmJZVLNwO7StH4sK%2BRRkVvQsyqsOB8xJpLB%2FTgr38cwHyTAzNUSOlR7%2B8Jmqj1hQqEoqg1wtdh2w1laUz8ZhFjHn6LPU%2FOgJJuYBCkEMEi5c6kq6%2Fo%2FE%2B8aIe9EotBpAGBCPzV2Ww4BgukhhLs4vqNp9p4CHbM39V7Bpd%2FybczQA6M1EiD8a8V%2BUSsNFUpZWf6akclvp2PCW%2FaZBE%2Bu%2B0hTvdBN2gCHa9fpwSl72%2FzwEbqv46GBvv%2BcDR3viTrxTI%2BRnqWeTzcpFeCSMSuYHPQ%2FlvvP4vUwjN3QVO%2F7DB4P2KejVS%2F%2FT7%2FGz%2FNUmqRc9a7MoHNlw3UhXpEiAc2cWCBFykSt8LiWTTWtPez9Q1sEu9hH2CJRxwDHF0TTgcKogE%2F1ZEvfoLlZ89ilh0zCHBNpNPTb5yolT4xtZsGcs1xNLBCnyB7hSG13vWIfzs40OlOYJcSByKyZgkAEcIOzvHjYxoWymUHvQP2hPc%2BmE7UeRrXRZZwGmbpiPg0M5PB8o6EMvmRriPAm1KmQJMNKh08QGOqUBgItT2bV2wmQ4vIlX8dAtQzB%2BRAENi8%2FdakCCEePqobLUnJmnahp7x8rl1PffgbiBL13jb4QfRDYjFiTRlIAbobA1qgqBAT37jqiZOA7icKQpvSWI9FkwrwcPmcDPCIBVX%2FXJx9qlgSdFWfY8OxWEoK6KVBzgrETk6xJFFDFBgyehUfRsLmqhACcjgFV%2FOJB3vZ%2Fmwsc9T9FHnfZCQMOtNUdbw5v6&X-Amz-Signature=71c8ac6adf3dd0a74936ec0320a9d41f8bc9bc13b97fe1e9c498df95b9301036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=635887b7766586016f855a2f4b62df5f1f315a4e8b2ca60a61fde1200b33ce0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUG7RDL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIA1gt60kdqfc82F%2FD0ntFuZbxqY7NopA9bssOJn1aXxIAiAtpsSYk4S0aE%2BtHKhUHmdWNQI86pcBzm0bApwu0waOFSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlNj3OEOeVqblNDObKtwDsdIMiydZpGGl0ohkL48wfKqQG5Kj16SVDN5qj1jTTWTHHAyCQLFSF22GoQl7dl1hR4xVkRSaD2cG7OY8v8DOnK%2BeSj5X2%2Bp2sf5MCTOMvvjeSSJGpSw6zT86QzOILskWrBuHSbJYX%2F1Gdegrrazv74L7qwZxIywAipNLdk1KRD3SA5MNsYHNdc6jh6yduBOgLZJ8ACjwUrAsMQMgZ70t9QxqsHcsDALlU0pquv8w0ZjQG2FeWatDCPS2ZTXXen1Nc293xny%2FdhhIKcw2Fraba%2FXUA9Iyej2lRdvt19cIpT3ojIQPg6S2gUMkt8HpJK9iu%2BQ1COG%2BJbjy8pHH8%2BlhKtPRBb2A%2BMjQOpk9N25ekOhIc%2BoUPht5m%2FKg1ODH7riXjoqBXn3TolaOQAfZ2r52WerYT5vfIJUDZVL17GXfU4OEWnl7ELtj%2BKT7ulpdft7GflCiWKfzWwV%2BjKZjN9ijJLrpKW8Dj1duV1MzBeFw5Bsuzi4YeMbpy5D6qlTQqlW1BjK8aFkzce2WNI6bvx0HSDHm6AXyjnjVrJEbQ0T2zXtRSmIgSc9ev138GYajbTKqULwnr%2BMWK%2FMmGhsQQSeC9lzGAEC%2FZXO9iX0xrBhvNI6zSNWM%2FqPNmyDoSp0w56HTxAY6pgHcbV7E9CNe0y41iyds4KwY9gHsj70%2BupFc%2B5FYNrycO1wC2Tqy%2FerYJbnRMlPgACMRmrdCbU1OCtiMb8lC8d8ezRPgokBC5ctFjqrj7G60vF%2FjH7Eqm4BoYw7ktZyvL7CW%2FBCKxxCjL9jjmhfxWmnYw2qBUqdLqwRKt%2B6Ppg8v0DMUUjdOHHzNEiwJoxnC2%2B2f1VXlvVjxyYgJZPgeA3Lr%2BDcxqU2l&X-Amz-Signature=0d46f5814eed5d7422424261a2fd7141a5f87b980e5188c12dccbe17d075764b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=fbbaf7574d8fddf1282f7e9c53b1cf94a530efaed9eb30e796cffb5a4cb7f0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43G5SF5%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIBs0k9YGBfDaP%2F%2BXVXvFwZIJZ9uJixm%2BbF18vBECn00rAiA%2BMA%2BDjVyhiWCjvxrtGbO%2FS0vSgUkvyxkcpdN8PG%2FLhSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4r9Q5HpE5eNONgQlKtwDlC0KfZU3GILnqB9PIvXHr7dGCYHk4OMX52lmjk6sQH0xHolfq5ff%2F0NUjxcSGxhZkpQUN%2BItOOjbqcgx9vfEw%2Fx4M33BH2%2BOCbyz4JJxYxBiElneCcvK7zZMlL5UQyNOk47Fo9iX4LACWc9YYhWw%2BCC9AMb9S5dwd6rPEOesSujiGiGBuBN80ASsP3v32CGwgvtbx4dMQKF7cwwA8vwJOkia1FXM%2BWe8XIxU6N0N1zdf8ATDLarBdCxmK1MCltUv0jGsh3b3cWDvttxX0D%2FhixhlzFN0SF7wEhbEMeOINtPmSJRubcgyzjC2D3WavbP69zgAwa8Smp6n0vOuYVlf4oc8p3x2NSiQfgcn%2BMrmYo%2B7H2myhMFpD%2FOR2%2B%2BErRo7XAXzYQeXQGh%2BGRA68QxZc65ifWtTQp1ntMFtQWlCaTD4Z%2FSiBjm8jLW0LkMcP8iHJVh7tagKMUYJ28J8QXTyjDRFi6wmUPAmFfo1raIlHee%2FfBniiSgMUH6YHbZF4LRb703CSAX7oNCJ5LrGYPhc0UlwzWnsEHMBWy076Nv4ghLsKfcOyuZ0MGGYY79g1BWvJljCFE1ZP93wzxfpgkhNdUx2QxrmvrCKFyWvkbGApMRwuQXGckExEGu5YnowvqLTxAY6pgHXmov3%2FY86YQgEa5CLkqADSY2BNIXirnSDbuQKe1%2Fh7XkcY0lZ17Nf0f4BjY0hmFtKyp2a9lRc5fqiesKudP19LBsxge3EikguDOYNM4%2BpccGbo7JxSwSlvvMGMKVsLafZaLldDFz0S0vyNwkuINI2dc4Lmi%2F%2BJJGd5gZhAG2mJI2t%2F3mRMvew4nTdn1w8jIK4ZZzA6IQ50OGg05cOcrdFMWY29qVQ&X-Amz-Signature=8f2773df8f7cea301ae3f8643c3b626b57b7fb3079fe7100f450df04e83f2e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=5b4917f0893ae0d6631f038f5cb9e2b790238990fd0a5431ed5e1faa0ccfbb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZSXKPY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCICGMeAn6ufoHqZrMatXSjIlZ%2FSDQPNTt%2F1BSJ7QmUo4nAiB6lyGTZ4iNZXaPab4EJQKhVrb9RslxsaPyIIvEfbii7iqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvWWmY3ns5p2jQ%2BhKtwDFjBIXxnhadWOnn8C6kG6d%2Fl%2F%2BkqMLxxyyW2SOos8OBmH3jFRXsvsSerBrwMRMiLYV9%2FaA4yeFhtoqGFKu5dgAO5nqgTjQLP%2FTHWPfu8XiPKm80i7U8TruSqXfkS7xNw%2F3jNJiP8sWoGfzWh4uaNRWIx5N%2B6jbHWgjQ2gUeXRVTZWW8Ik9IngZJO9Mds1EOswfYuWgAi6HcXGszq%2BECDUi2c8KwLBYYaOtOwDTbe65jz4mSXlM8qMPolayGzYcUZHmBIJg8At5wPM5NmCX2r0z6ybguzwiMyJP7FJDM0Yc7LsT9CRpbA%2FLswN3yLLJZtkxAb1DYSzjkjp25SeDyvQv89mwLAURC7DUE0k88Zi7pL9NPrw5TlWFJxgKEzeRYvVzEYp5N5g9WI8Xj8AuHqJbNGL2%2BsIxNUHv2VWKMooJqZfk2z2eRtAlRErzxkAs4BU%2BgBgIervXH6PqRV0t6zRAzDjgrTpXg1LLjPuGkLOkHbFkLGoj715gO6fsBCCSjp5RTuR3It3KrwNHd%2FtysnnWiKNHTB5znR%2FRwjPKsXNyc8ipJuHYQYwZo2RIkJeNOYnwuSqG2xX7WbE5RJF8dN91G4knd7s8l2OiLWhKVIa0ef0eFLvB%2BgQwWFz548wqaLTxAY6pgHsHoQ8t93AOaY0hlrTVdagUd197gdiYd99%2Be7goINCFqkx63ejiTPD55waYO5rWUgUKQad2yipwGjs5tkogTjlueziR%2Ft6diQd2lr6XuRy64tbAMyfV9ux6DMxQdzigjvt4Uk462h51HuTpp%2BHbQ2jX2rI3LaLDniHPhIBcAhDPSe30tqurY5T7Aw%2FDs%2BqM6vezqEMGfPxVtxgDp0pKzcbCufvxTkE&X-Amz-Signature=487e84a7b3d418fbd01d77d5a04602869176b9ab3d2ba447b2ce5f6b1aecfda4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=39d43927b47134c569161f1143153dfa18d535c981d4eede91e0acecefca89a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYKSJGDZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIHQG%2FdFAiEoYjVy3QG6CcnU108u7TPdSk4ra8SWrxXglAiBzhJzW%2F9sXIXHbyzuqdWruAH9bbLmOH33x6UgRy5mMLCqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlripNXjVD4XkIRnKKtwDq%2BR8iNcxVEZCmKAQWlWseInOts%2FrUEMXX%2B4DYuxSqkURP6zHb3qmjfJm7ntSyReY3q0k3ujnjjNc8bw5UWUMNh2%2FblKe1ix01n5JnYeS%2BPdXExMUWd1bz4CPw1HdDUzGNRCu%2FiuSTw2WTN2OU%2Bdx9Kj%2BeUak683R8vK6wN8REX4SkQIgLsA1096zRskKllt%2FXH6YH%2Fjzxn3NM9wtDB2cC4jL%2ByieUerAcbYXFEudppeBVeaPKKryRFkDB2ap9MwMcN1e0OdEQTjo5DtOlHQ2Uli6QniLSvJZd%2FpIT%2BTIuRHDTefATcMyr4qx2TNqbn%2BGupJySnKBvYga6hVk5knF5Hk1nFVMaSnoEe5sNkYtLDLSNG49Acht%2BK%2FhAB8XGlEtWPXPiDC3HOK5wb0MXNh1%2B3fPHVQMU%2B2Iafl619xCAauq6KLgKdNT8TBEy%2BU1Amt13%2FD4P2BO91gUKsd23ThQZAAjwUIrKqZGECKZfOH6GEWUDrUoEPDUO2m3RDHyhVqcbWA3yMUg4IOdUoR1MQG%2BR%2BOe8w%2F37TXtQCUeAZobqBmJorTE6NaqNW96StPfhAS9BvAwtRVwk0%2FyVp5RH9okiNdEtDDalJqGwTYzAoXZb8SDfParJgoxqHHX7jQwhKPTxAY6pgHtbFrlEpzkhfNn44Cw0YyGNTAoW8atFzzfFbZG4DT%2BxWf41CdGm1RreSJTtOCp4BzjfJ27mDIKahIV4cBwSYSL1qPj3IWNVrgWRJAYHcnQNL78gpP1BILxlzWhjRp9mPSEVFWaEQSD1lS8Ll9e9YmC7gIhviIugGcYvYzKJZ4ghShNklwmn%2BZuvufOmmzQMHP%2B%2FOB12%2FHbeFoHjmW8u1%2B4icHxvo%2FA&X-Amz-Signature=559ba2247d88bb396a941056842649df15fa15ccdea9db8612a9ca118d7edae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUISBV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD89xz0%2BClL4IrdQSjkSixZduXvNNObvTP%2BPPBvuljfogIhAKWlSREeY2glNccWReaBPuetxHJ0PPnZ11I9fAkXsCSxKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F%2BpV4cTUnUdvBIeYq3AMNqdJuCVua2eaDFEipqPjzMZGBrXvXBbjDNZFdkNf1t6BTRYkQE9iOiiicq%2B5XGbAnapx2tY62nPvKM54O0b27wh6THn3k3drPWB8DbcqCGakSkbboNreW%2BJZYu8gIGFZQckWCaRHTHoLImID%2Bye7f9V2o0KXgG1ItGdTxMiWyoAaSPRoqeoHSqjqzKO8wuju7cNlo3aa8PZYtcxl8VPuOgOjHhPKb9L8YiUl%2FDwCZBCAhif2HMhKO1rz%2FvbNt0YRWY0HC7xsJP5ahWMrwYUvT3jWIoR%2FlMQIK2p5Bwuw60v9iDILaA9Ot51wjlJUObNct0VpTqFN6IBMSe2G94NpZ5GTlxQMRxxPQfK5rZzCA%2FLaH4mXsL%2BjAed5%2BQV7JGjGr%2BUYtzzijQfT1ZCYVma%2BqesSCh6kfE%2B7rPH3%2BhingOMsJeQw6YxkewDkY%2FbObjZvezGh%2FHZ83XvYGKxTbzdsbsQYRNu%2BARQNCB03%2BHlRbDit5dqHr%2Bcr0sfj1mi%2BWMWWJuaZI%2FBok7UPRIY6EYrAxDcXuoASMisGBJp8s1fcrxPI2kYieMYbXolQZz1LKHX7MmlzVd%2FZP0DL6pdd2eKPb0s7ONo%2FgGgXjNht7%2BBTOCZZubovzDLsII6GJSTCgotPEBjqkAbFWtkvStOThF4lQhi8YTdABJfFTX5xnwAAmfey0LB%2Bf%2B4KX%2Ba0cJrp8QFm4ULsinytVLeBRMXvHzEI7JujkHQ8t7f7E0VOV%2BrrMnSfJ3JYsgpZWOLY5kz29ohmrACEtDgiQDsrfphv7oodAZoM3jukDcYbXs45rF3MsofN2Gr3D6BdG7sqHUYZSMl5iZe%2BCUkwlLdj1gCYATaVFw0EA1SnwKpyE&X-Amz-Signature=57c178c600843528aafbfefa25a16775133f61c7493e9178018b41209c331241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAQL6EW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAvExsuUDRZcvcEGACqIxxSt3YxVxIN6fvfB%2BAaGBOBkAiEA6k9n849A7nozehMF%2FFlHuWzHyE6Dlsab2FOd1MPRAQkqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDADLDU%2B92rhRos8JoyrcA5sG5V%2BDp8qCXeNX8a2FAdBFfk%2F5g85JyJ6ONcF%2FbUo2k%2B5ULzEWgA8M4RHVNnbOCFd%2BD0l7F4N2H9n8JP2sCAx9h%2BYSPzstInvJ4kr3cdmwltAe9HmEPyLnKmEggAbfjb1EeY1oWMV4Lk5qCb9rTsu3ZajvMifkPlZcSyeauseR%2FPasnX09qoAklaTD9DCm4k%2BqYrxO8uwHZTfDzU0userWf%2Bc00KiSzBN0iIOq0IBip4jQtPJ%2F%2F3Gt3hdrcl5Q79iN7mffUDuZs%2F%2BNw7XhgUAJVRf%2FC5FHK5Y3Wm5l26pagnMcr5MZNX9vflHL%2BCMPKqzgI9Zl45Etqoz3ILC3O7fMu0DZL3SfDq1BPWgA60iUi5qMbHll42TMitc4G1CpuOPcv0EYG4qgVsNq%2FbOmLsN0Pbz4b4mKI23IbT2fYMsgbIihimi%2BqQ1ilrwDYhzc5bRyL1%2FLbZ6NV0K%2FZbACJer0FyUewf91PDNb6TfMOopg107HRP2Dq7q2loI%2BXKiJpA2GBtw77yzIhJD69JjcyburCoTfYmqsEFhm0y72nk082cFA%2F1oeCiyVuiAN3aFusBwEE5aZ8koN2yeUY1fwrtJhBG5C%2FmY7WhOFTiMfUN1xbH6rKwc%2B2bqwVHd6MMOi08QGOqUBbGduFbRd3NaJu5eE9%2FzYKmGNDtFdzwDkhFe%2FJTdUJHFVhv6w96DcnLTWUkBvyjEzzvzKvsEXf6QpJwmXmeS5HQ6fFkm0H%2Fb9Vf2pQt0RA1y0kfRQpnbqGfcAoeEfW7DsCM1qOLWMLG%2BjA%2FpHPVI7Xj2rRRdrv5Q1FJtLxkzMsxxTcMt4As0qGl1%2FgC5pKHbtRL0b7ZUsK7AKs7AvX6DHeab%2BS3yV&X-Amz-Signature=bd787774eedd3cdb4aba1d3b09f8df51cd39a1ed398f4ccc53c68a8096b6c5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IXXRBB7%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCf0Ww3h0LRIhZAcbS4FHnjdkrnjRSEQHIudNmbFqKgIgIhAPxb7mhECy%2FYS2g2Ycqf43YL%2FJDZBTatWbUmI%2FUQq8zxKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo5wlIfF65u6GMtewq3AP7qAYBHyZDfGGejQWDQ9roZGssrxEhxWAm4sSv5Tcv4GPSrOgbdk2KhHZWQS5ec5YBwEm3T2A9dOQZTyvzHxgvN28NRX2cu5gHXbUCHB6nu2TUzoWy4N9VxiGUqD8oBjekS8re4lCWc54G6I2PPsdVUYeryQkudz0bpaxgHNz5O0%2BFDTYSeKzPm0wCBZfr73%2BrzTEJDljWPFA1xui%2BSquKtv1hxG%2BdRGW2zsl1s3WWuO%2F5NQa3nhUz9qtm6exk5bV%2B%2Fdo8rtItNJynLqa6gat29EGTfPtvHbGtUjQHwyzcTSHms8ItxfR0PMjvfl1ZTy2MobHcbb%2FwCREgNKd%2BIltobdrSI1bzBpARnXkAyyD9DNdjCnv3ZMz8hCn22urSU2stKML0tyw2SBQiP1F6%2B1qIxLV9q4ySNu9lP807ST7PV4s2QfnbrOVGNxMYhl5eZPaPMyH4QhVFhkFb%2FvlJs4yAMUTWgq8%2BkmMGshrDP%2B3%2FrgerHKNU2f2fOM25av6U199rEAr9x8xOlSV2T1DxtV%2FL6Hdytc8QLqxKzt59TZg%2FIPerlE6KDzSEkeWvoi3GSRhOcJXu7ET%2FHjbIrg5NDMVRhmEBF%2BveKwU5f9Bi6jZWDL6AnwT00qS7nVsYxzCNotPEBjqkAUSIDB%2B%2ByMHzE8W1627gMJ274QmnB%2BU7QW5k8YJDjnVuv1WUgcIqOGKFu74Aqgu1fcewg0jejmNDT4gR1EVJZ%2FxU%2B6fkyYGZqewPUFTHmYfr9BpxcV5WZSYaRKhTtlGmc7XFR96ADxvaX7md%2Bnf4jgspQ5WY2sVJXlAvQradmY8uxy2tPlmiSVbR2bnHxmHNB45pJ8Xc7eVfauSZBVRK1Nvp9QWD&X-Amz-Signature=49192c19667f31d4ba5b641bd67c05c537c2099a9060e2fc21132ed7ca4d8097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPMA3K2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDfruIgedIFRmnm0APvhNCIHd%2B1%2F6AVEEbM1RjFH08MnAiEAsiFM%2B%2B9eE0abPcm%2BeniGxcjOOhpB23oWliwYKeQ%2BcwMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrTLtPErFtqCcwGFyrcA86kPqSK7nDFBWISWRPmVo68e14Hzm0ez4aPirJPh%2ByMIzLsmUwdFrFhOi%2FC1boJDfL85zT5munIeG%2BgaunK2zL7Gv2pK%2B2ogJWbn3%2FOiFQ4LG2px5sSki0MsRclk8ZGigKcRTcuT0CkUOx13vqug7RGmdc7xvDnIkvQ1TqEX6p1Yj5jCLIV0ThhrWege66Y4FljQOByLmJLrsyxWYVIC8KhyEpRjqosYr5XC%2FqV23FBw69GdcGgJOWSdMj55yrz6B0BU%2FWlAnjlS3bu3EohyfzpWM4YzfiDvkEnX8VP5QvWlM3TOK6LitegqpuEyFZ4YKng3yM%2BJKKl4uXJ9JojAggtaPTvEUO11LAWV6ZAH4ZZmCt5HRxe4Mxe0UQlHxy5Ypt964FYX8g17J1plImLbGRCPLuIrLr5woAtMAOhvkRrKBulii0IXw%2BhnykQV4MZlCZ315sftQtYSXgX95hvLvS7ejy52QA7KTFvKG0kxdKeyE18ZODWQUlVoYXoHjfIL5uFl8n0w8HQENrFc%2Fs2i4JRSyVFxfjzHV5XCHQXP6JC2Ylcv%2FaQFPImwLDZliRletRRMQIAdMIzO9HoiRMR8WkuWRdhcCF0Rk0tm8BqmpZAOfNCOfOvdM68kayDMPyh08QGOqUBSbtRzJ9sBt4YUSZXq8OMnN4VtUT9vZX%2BBNMQv7XU9F9oIhpgHRzCGjQzLXmMtMLCJ8uKlfXUAHjeubgB1hyPdwmEW5CPTwSTqAcw4%2FxjCphj5b%2FJlDp%2FJpNmvf4nMVI5MfZyQzbfE496Wx0uZLo8BR4O5%2BNRRIiVyvUKvLtQ0Un2mExJOHYzKx8fRAVYVyE0vmXxBBSNcwxm91kZSY7KvDcasfTN&X-Amz-Signature=0a8942e6702387473dded0206463a215798ac64faf2f38dfb8087a625f742073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=96f6f4d774403c6e2dc8a5ba9f52ef61098c8293b0133ebee2972bfd2e9495f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V34LZD6F%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxnD72dyFjgqIM8o0WP9wS91x7HZlTHEwHYg9azOqKfwIhAKyOJTJFNejjGhBuogs6uoZ0T49PrriuJifHzPRp5J2FKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB%2F7YFNDE%2FVMzUI34q3AMsxupmDfBPmILYeTrJERjvHiEKJ%2FFlnI7s49n%2BXFrANDgAG8fEIcmot1wUIhVk9oh0RdNriXCefQ4fxRH%2FGQAbB03tlUXb%2B0kwIjgCJWxyTYWeA7nYO2%2BRIaJ0nggqz6CYP0tCKGw3cdqqseg7yYM%2B7imapGaCD6wRS6C5xm1rm6US1YAUNFuIC1sur1IkOIM9knYTLzJ5BeTvcS0B9RU5%2B2yyHzrm31CurR7xgBKDI96LBXmfnj6tfd3q47NAZarTmJcV6v8U7NaCVGslnLpqjD%2ByVfBiEbvcU6TS0vct01PZemxI007N%2FeNpOLH9TLh1fXtOKtSHIZeogf4LAQ225LLfG2OydQifRRda4ndC3fSi4VzT7%2FXOvTJRRqpUjGmqtYAmjEHPx6Be1CSSH7Q6IVFbm01fUk08wyp73BpjVyGJHnjChm25ipkBR7r5gUf%2Fbjukmh9FBikgYp7N0pP%2FuFcu3mWxDycfe%2FpB9pddCgAyrsH0mxTUa9tl5hW3W3298p0m4YCq564%2BeJ%2BHyZpLw6vmwhN1stczq4%2BMaU2SobkbRRtP%2BUYrxhaXixdwBTVrFXlPrRWDplGl5UMFNMfNLrdIN%2F7cxfgzpQSQ8sLD1zbBcORJpgtST%2B9x0TDaodPEBjqkAYo1lEgC4X9AOhOl0oUwV%2Fx3hpb1NWfmv8y4iETLRosnfP2aR2Jc%2Bm8jMff9TLLv87vS%2BgpLdG0UzNLelbYqyZrNPoZ8O0ukCi332NR22Fn3Agbs5PnQXcVUOst0yAMKMcg%2FzJuRMf%2F8BjU6ppAeFXaEnEjO9v8V0IsYIgvjJHaqBzRp59zQ8mHws3cJQcBwrVnGVaXnzJOWdmKT11OTnib9laU%2B&X-Amz-Signature=dbad056604c80fe3e4af00803d7eea0252663060bea18059869b04293df7f482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=b97030b2dc4e7b34397118eefdf2f0297afe944963e22e0808b9a7a873a5d822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=3c4ef9b06d58ab2421a0212e63ba2e15ec98b8b3019b8a111c5a19f3d5c6ea94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=a4f2de0d26454f57d0e5de8f3ff4b838163116f9d611be7ef2265e05154360af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=1822115ee7d3c1669c81c03ce2d2cf2cf12d1b41ba76c69dd54e829e674465e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=42418c4fe25748f5921af288918b4da53e385a517397d1dcd2252b167714ada8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=a12835b9ed59e4d4d11243030b68b195edd922eee2c05145c5d15c03c26ee061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=a1116dc424b4383ae89cfd47860232bce19a8c066386577e0a29e929db2c3d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=7df079a53cf758a1103e44c6698f8c601c7c25438fbc6ee25f1c32b4eeafb072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=9aa5a5b76107cd292453cca62f2ccbe1a8729baeebba444c114f890ed9fe6b6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZTTL2I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGvRTMdNeG86xoQ2gKzYJHxaTKZ5lt66BX%2FgeoIgtnFiAiEAwLM2Ra5jAop9N6SRFh6NikSfWN9uNpGlvjVi0zD0yvMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ34JI5hzIEgLEqTdircA33vQ8O4oUScGqAPbMKktG1TJODW8VLPGkcAVGnGAxMaVEi6KtXfMnRr670YeZ2OuG4IOkx6%2F9vyTy%2FDFy6TR3J%2BG2CG5aOx7RlH0E69NNCx9GlsON%2BFb4wQnUkNb3VZN%2F%2FTdeGmAu%2FudyB6EW7dU7u4Qs6UVtqVU2Ld7w2LFr9ZUuz0Y8Lpz5cxrrZG8Y%2FqUAKzz2BRfvS%2FvYSwcFJpRpvcICbcdodJNwTSgiT5rXhtSCX5yVA72OuLr04Tq1PLLS53IQXCdxO2EhLPVNPjpwFgXlF%2ByosnIZwZ5z6X29OlnxZyWnAaQp0HLkQ1X%2B8g9P1BxSU41NmmyifzNnvwXY4aiJBtuXKm6ZUTBc0q1JfqsmTY%2Bs0pjqqf3I%2FbqH6qmwJ%2FdBRUkoq5camwKwJpNugMaZ3o9LWT1ZUkVWQS4OrnECvKGvn3bla%2FZXoc7jKJ8W2SJMTsrs%2Fk1EvskFlmFMGUJ8TDl172JiC0vEvmi0Y1Xj2deMrvrEBwQ0b3ABJuHy3ygnKhjnGHj8llQuuSWQnjonywVdXTvLC4SwN33LWhvC5G8t7LrQMZ%2BbAen8C%2BcBoIumn4U1kX9dtaEll7KujHYcLSdicrXYp0H0X962vrIPlT4q%2BsKj0slPX1MPyh08QGOqUB2l%2BxvXD%2BnegqNKd43deB%2FEIyzRlkM1kLrrFTgpwCZIWRAjHdxQkcHa%2BLf0prt801fHdlv2mBdniO7Qc6gOPm6HCbSG%2FNU91zVNJTXmgQ65HU7l96qB3uEROO9fxGlPofvUZu40Irh9Errx4tF0IyhslppA7zayb56Yf6PchGEvURDuE7nhumN2MR3HU3qOTF9XjO4FG8mI%2BHZEPHBn%2FzMWtM%2F2N5&X-Amz-Signature=091a504c7c6e9e606a6190b07e2d261398d3350006552756908fa48769dfbf35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
