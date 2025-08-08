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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=2e31b927547f739f7e87a524d7043c89d5894cb09bd542d7e91fd677402a8ccb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=2c67ebf32638193c03e437bc0733361b1030c807ec86b2b51114efcab5c10600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=d5f42dbca0d0d948fae03c7363f78d93f453f9390927a38b5079c16746019806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=dea3015b42fbf445f42435a341a1a305b8cb303133420f5dc2e9d043e4191dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=58ce322b9b954306f91197b2f2fd9c0387a399dc112f2a6c5d35959eeabeb4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=36cb8eae1d8385aaadb79947189b134746529a04eb33e065a4940c1fc0720413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=30678a80fa488a9f4e96cde1eeb6458f451727084eb8707fd593ca044ff01faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=6b4ac1e6df0f18bfa12c20ae2aad465d16d8ba27b08c291e3e8b600ef6fa94df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=46b80c5b6b8250355ab5c86b1ac9d0cfa6fbe9b08bd759da746be21328da9b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=2ae07acf816ed55f0e76026c3f7dbf798d0cd035a2e4877830124714d0f56a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ESQMB7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCMNJrug2SkSOJr7I3vOtUHiGP5we6W1tWxfIN5TUdx7AIgN1GeT7d2DzJZ6nunJUlb7eB9neQN%2Fxi8spNnPxT7A4UqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLGpEtb2U1oJyDLtircA%2BT9o9t0XpUgN09jhqVfAEXe0hITZmr5c7vOehK%2FoWU2HbL8ooTW4QALa5pAh17BFnLvHOz%2Ff5iwSZkpnVV6lbPK%2FkjUGOmb5ja0fez%2FmKVyK9X8tJZbW7GC8ye2vvxV4nppw%2Btc9o5RkRqogwlsHs%2BHxgIN4r%2B3UX%2BFx75gAJnXZAGWp5E4StLRDa6iNMvEOrxUoLuPQWjgC3Kio%2BoXdD1QvfR18qOWqmgxEI328KP5UXL873OcV8CQunJsA5l0HF4gGWQ65WTtmDyQFAbuilwjSkrsF86BNJDfvdFfMf454VmGNpgJeLYIh2GaXvxW0GH2004glRl7IUrvp%2FYSTfwpK4x%2Bu0EqNaDkBuQrA9HI8sYSlbLP8oo4SXpa7idsVXfu2r%2BF9PTdkDdwibr6ERfiTbQOEH9%2Fdbh9vybewGsRWKDPbKyzdvSV7LE69eCrL5COZplP8%2Bk7JwGLsgnaLHwmLWtlFXtc7HdAx%2BWbIXoh8LJpnBjX19dC7onoR%2FBUeTxi%2B4ZKZLKHRsccwR8H03QqkXrmKIXIVloejFA9oO2qWKjS1c7OUhw%2FIexcBZN8jXLekGSeoGRKYLbe2PqhcQK8oFwh95xkQT6%2FYNsdFPJ%2BAJ3xXg2P3TEuxUzhMM%2BS2cQGOqUB10h0rAtULeOzJDci6Eh9U1FIDyCWIouR3FUnyscS6c96CkvDYxJ8oeRln1lQ5fj3arcH6HeueO6oNUE9ovMVU2cOIfOfR2kYaQ6K4eV4sK5mLfRl%2BkJBScnro9tOznXiL6G%2FHDMU%2Fhbhk%2FpWHsIDdjx87Bzd0D3lH43fwsLwMbYGyOFaqmA3TPwFcVt4v5ArSHPliRQBM5jlH8pTu6JMvAA8oZzb&X-Amz-Signature=fa1a54b1528d2bc1ff7b32638a37e45aa8fe22ae44f6469e8acec0ee62f910bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDOVDN4D%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDw6d0q7OpFAhbkgNNu8l4j8CxqPUaiPIj3UgM%2BkiTEIgIgdBgOs7K%2B5ykzheh2KZjLDXc5N6e%2FCwB1imKWqsRLqhMqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAa%2ByAj5%2FJjIOhFFOircA2lzTMIVRoHz8ienJp%2BF2bnMVeutsxb3ysRRwkFbgTLu1dIG8PtXh008eGU6oAgRL%2FyFmG46viL5O16w8Gc2HOsQWXk4Beoob4wVd3zKgGVtaf%2Bxz0v3MZcCCvbafw9pLwy8D56as%2FoAALKtalvPZ%2BQp6g8N6uRpR0Hq08g%2FRV%2B3%2B%2FHEOjodfstgGtyxufn8G8hTsYROB6DimWjd5wJ0FbYqH5gry5gTSlWeUwMbnHZwIUiKpxwgWKFcr8QxBcmDTppU58theKqj20U7VY%2BYIwY0s5pYsYw%2BsrHWTLYBB6M8Riunw3%2BIHfqscuwpVuYzHnctDoV8dSwWXwryJBiy1WeK10J8ijMR03Od5Uwo1UXTICOXWf1ioooeXUozWzrDg3IQQUiDEP0a5ddznr0aSj3M7nWlrs3bIR6Y83rWm12jCvlPkuRpjYWxKMEhj%2FbtCVsvmYsPjeP6el0xbiTpYrmJRLgRGSjiHWDjnCDKOye1MUkz8OlxVq%2FK3ku9IDFWdB17OF6tW1Ovl2oEuEuZrJlqTQr4Tx6dUujh77%2ByPwDPCEommJjEHDrODTcWfUN67ZtKFiqIwi14OsiV%2FAuFxemIelN2Je%2FOiNHv9rRatbv8qrLFhqW1uw9YSTSPMNyS2cQGOqUB%2FNhKBC%2B0ktQr%2FJBIcpZOyUqoA1BlAXO3m58o%2Fqy73nhZcg0GARkiSZpglTAYiReadmSI2oJNoAdT547IyH%2BGEe1P8U8RycDb8X7hUMJmzy4tY4dHqYV5h9XatSsIOsdQAkafg0SWgmC52lDj53egPGnvThhTICwf671gbN%2FCh9TJ003nqlEHyX%2F7IKK%2BtQ8nxyow0JPkQp70WttkiSw6R2G9AtyT&X-Amz-Signature=9c14729248600d70c3c93499f1ce2766b2049b302d77454cf79d66acbcc4774c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632KSCYEH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDhI3SUGN%2FDwNkh4fivCqmnO9Jdt9mWvFyEUKX3ikoShwIgC8zGJJhul5COIPo%2Fy7JYrPKQo2cW3ID7ED3vMxEG0UAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyYvhKXGb1EiyhoHircA8qNq1omW6uVq8cYC7Et2SoZccj8QTjd%2BL9YpVGOcDX1%2Bp%2BXUHSjwEFhHXvmmwYdCbKfsdb9oNZmjBTvGxP62B7ff9xPYZ2F7OLpoykU8eHGrNOCi1jYg9u7m9Sf0N5wqenmNuyj0zHeFwRttevujkqVdwDu84ob6CJD8xsiJS5s7kNymfu6p7FDzgpy%2FwVz3Tng3HaLfovSBXQgFWYP%2B0iaT7Wg%2BDHDz7BGIi0JAVwvR0xxCJqZJbd%2B0UumZY%2Bz4QmOpIrpQ%2BUTjrFh96jlq7dalOaUCpA0besNnrn7x9rxDW4pisV5hvQ%2F2bxRW37hxShRHDXm0zYkGCDi1YJEaU7Ap1yQ04uSIfeAFbgbV1jcnsmqJjWzyKCl8tOpKfIHsHpVWW3%2F9bvOGFNwkW0QWr%2FZCkvoOD1220K9JmPZ1fPbZ3%2FXCRuBzpbmtt9VEw6zOLw4Isjam8Rg145gRbHfC52DTAMxRHtGYvEy%2FL0CuQpUNBdeBYvpb%2FMpgnRQqsxzJhh%2FtPYRYw5Wn81escGivU1TRac%2FaVhdLlDk7yXsSW1DY469UJ%2By6boSS7MlHTkSqLt6DtcOGTLGlANncgMlXrpdU7hQQ8JSY%2Bz9IeLkIlz8nTXIQx9FG20%2FPchdMIKT2cQGOqUBImzrn4CqLUbjnZS3LZI1uBtuOyLqyYTQvwLLiAYrnVyaUBUM0EJU4gJFYlnBTZg2YzYrGCw1Jrdfnh68E4yq%2BEwjq%2BFkM1nXLYUhuOb4rZ7C9izjCLOgkm%2Fk8Jm7UILtkTjKZvm9aQ6sz5eZdmc6n3Py8X08JPW5U7VYqKgZQcfxu4DB%2FtFmvR6ja2GlyX%2FTacU65cQULI0P8Fn4oK8dtjCVfCCQ&X-Amz-Signature=2792a2062a4e8e93b3cb08189fe757f753f1f435ac834abebe74f5bfda283fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=ff3dec1e6cf428e3542d657052c6da410c210dc48fca494e0179256f77b0f5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMXN3BA%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIC0nGax0%2Fg3MBIAEsxxfvFwEle%2FriuCIBBFt2qYg5RtNAiAQGmhDnfqhzPrDlbv4cz9zyOBfK6%2BBGVr7SbWnePZtLyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy0RTVVoj9GOdxg6PKtwDrRdqNV0DU5Ovf3iq9jnmZLqK9XhY0sTKsz1%2BNOXXjPVm%2BfTQ6Ekvz2QtR7svqL%2FOl%2FTpbDDwTiC2VyuVSQqaz76G4oj%2BCuQ8YSPDDgU%2FS9FDdrvCmWvj9No5Ed1WKQXq8eb7UhLV2teUMQt81d2%2FXllVrZa1Ml42Gk%2FHKIC6ZNexmI%2FpyZ%2Fy54Kvz0i3In13XTOwYieEzSn2g7g33mz%2FAarl5b4ibfR9Z2tLRflFm0XV7WdSRWUR43EsYw7KOlXiegzbIB6cJQkWipXeJNytrofAhzEyJZIWmybgXhS%2FMdA9FsIxHGdbxo%2B1FJC%2FKxlQb%2BwgzOc%2BRgxdJ%2Bgf4nPRYoEb5uhtjpB97upQz9PJHNAfwv6Hu2rcUlq4y%2FPXq39UWE8bZyw6zo%2B3DJuDZPGlhGRzyIDDG50nIccO1%2BZTaO30q3AiDwWBMilBr1L65tLlDU%2BL%2BpQ1abAFTAPpu5QRrLdRpZhTMI0awpUHuhl7%2B91PbgxsNS24ZGPfW%2Beyi2XvklAq1d2EAhvIPZPiKYjshXcf1NtVW1y2yIw6tta3UBty5EvxF2m7ZObziD729O5ERjSpIl0b8DIO2cBLuYHBa5DUI%2B81uUEmlYYmX9EZtZbWIcZLuTdNwKmm8uIw2pLZxAY6pgHx%2Fmfx58fSpMOjue3PnxkVSc16zYRaXnQd9sbrUsk0YAmx4hlhb8fBQqKBzau%2FJSmaVN2XDyB1%2Bhh7Cg9xizzrVabVTTcJ0AkVmK9txJqjuDmVR32Sfq0oVUmdI%2BT%2B2VDwSGLbc4xzClMQFJBDvhqkB2Ps%2B4OZ63ATwA8z%2BjOevctQlCNyb%2BrECwZD2d%2FFKBnzTXlteDdxDAbeBuThtV%2FksWAKEojb&X-Amz-Signature=6a4ea772e8a2a683bae90447a08920a808f37c44e159dd0b9f946dd5f2882139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=baf85a95cf49754305762a9d91b01035b0690b0af7fe84e172eca8bab2c611c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666373ZRG2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCSPvKn9mt%2FfIAQYtdE84RTj52kwSsx67JbIJhH%2BkCQpwIhAMjtmZX7PQOrfqrBDU4cVNT3px%2Fb%2FxxeJFyhCgh9kCeNKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJlJFi5sj9AO92ziIq3APV3Op8hnWB5AmvP3lrDQ3Vi8EX1%2FWv8lIqvyc7clEywHR80QXEPVlioMAbpsU1IFpdTPdR3LTC6nvAyqITnpCpvdnVY12re9ltNOAQjLOY00PKqm6uhcja7Td5z9JHz4tdqK3aj3K7Bf07B4V2fhXBPzciGUz%2B%2FsEJrJJoqNGHVTt%2BouQmueddXlhKXMtVbcvFrSrlyGIKfjKaNHpLonA1l8iiYoBThnrPZ3TnWBzvtPmMjlS%2Fds5kPI6r67GWvm648zSLGPhtHdeL%2BPdpLNtQdM%2F4t6JrfD6Dj5QAoCm1y75d6DLiAyz5JCWH0QTKAS5nwplumaB5bfTCA0XC87NZejIT3dM%2FWcJoRdNMccuRwISn3IPYiv6rmYHwXLyr13%2FBw30frkd3sUaou3ux1WSJjpqjklZwkp2FXoyR1XuLgyxe6QK2xK8zOedIEFjXjFE1HHP5IeF5x9XOdq%2Bjs2Z6x3Mg5A6ZApPaNAXq72V17g6qV9%2B9zP1%2FYW8LlAZI8Hm0UOHQiz26nM8IZQo83W6B0OMI8F%2BeY2%2F3r8c1KHgW5NTTN6KepjqkkYllJf8TywFnqz7NN4YwFenLPjpY4xhvYsze8k2ahMM0Mj2RHVMRyEGcfcfO2YepcSa%2BvDDbktnEBjqkAYnh5frLrzAymJMdDXyTS8BV%2Fyp63QUbA07%2FKynMbCoVQGP%2B1Z9Gj4kfX4XUk65JUUU2GmcKmEHHa7SZlzqDIaRyIQieqvAVwrmPc9sBntVuwKDHNCKygZp%2BZAFp95kKKw4gH2JzV2NnvBPC9GeW2yH05CXw4zgF9uiHj%2FCsTMyZj0gzaWSkTZ8CmnkwawuGAxBESoiEg5O15zNjyNcAo4ftVzDa&X-Amz-Signature=19de2a1c7d44e7a0e373382f1eaddb727d2026f23ee158810f53da45fb68df0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=9eda936d17b29d42fca3181abe60a112fc8cc74a363e1838c3ffe6e63fab8969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDAK7AOJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDZIBhJcnLR7PKfrq%2Bdiw2QFbhWsGdvxkdMBAvLW83QgwIgSa8KcmIJrNvsbuNSrg4nExc0%2Bkz4hKyUNv%2BcBAz8V%2FkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCCIA0xg5jbDsxlRyrcAznaZLSLThbpJeVfJ59hG9%2Bjga%2FHmy2BxcgM129WxcMPC4ULgZegdCt%2B%2B3o1703biifv%2BCgjcYrfa7YNa9uDB1sYeWvpB6kES6uCPZBIYKpCVJJe9F0QMdV0U48n%2FbZaPWnsdcl55NIvynpJsu4I2NDxgLvHbSS03sh2HTz3occ5gvC49RKdl2WQ%2Fz%2BUc%2B%2BwQEW9bU0c3twc%2BrPWDmSDRjJwhGn%2FXlA9mqm2ZQFNHjAD4dU2zIYYsApGVOOKi0vou1ZLVy%2FkcszgIdvRq8J6VxY%2BIRR6yVn9kt1eMA0ioUsTG7iixOKGWpaLZfvyc9VrfEOawOctE8gMM0687C1yW6QrzcwdHbkBL8WErCsfbMnpQ56GSO%2BDPIxbXlY5ciM%2FWUefNhYCCA7W0tdxiFGQXk0y4tXmJ3aZs1la2PfzQk4A5rrVjfgMdlBJSZvJLRbqZCUuDRY1NLseOShBB3LEdh3Dzxvb9EUlBttd8%2FmKT07umC9ghfEzJibGtSrw8bmODlRS2cmgugvpgTH99CGWG1fDRk4UG8Xmo9NGMdWng8SKkLsHYUWZzqVfpiWTPr03h7WoLDYT6i1ECLtYLIi2hQP8t9wg73WjIXM%2FXucz66hjZ7JP9rMgPzikyKd1ML2S2cQGOqUBrJ9ozIK5acZtGbs07t9zKs5aEV2qbNZRZlUtDnDUjA869jjOTYbNS%2BkkhUxxwt2ShRNqOqaIpWpxub5P7ONUmtBtVhFVhc%2FTydkKAhCF6PWdiHzEChl%2B3rMJX63EMWMrfbkAFRjtY7Q2TFPtcZBTI53aZ%2BrFlU8OKwclbsB1VgUIu7XK3g%2BOQsP7TlX2yhOwF0NcPO5KNwzti1R%2F%2BOJMRlGn9uwm&X-Amz-Signature=ab6f049f41076c74facfc1963ba1ebf94398927b341729dd90128ecb0a3b9045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=a88c56fafb91630f5a98ea9566f11cb329c6e416aabfed989dafcc80ab7a9317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IK7S3MI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGobmqlEX8cnAcaR8jm8hjWCDFuRmf7XOSiLjoOV9%2Bi8AiAHv0LhfQirXukvIe%2FF%2Faw8qcFARQupLi5sJJPvM1H32yqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIyvV2wnO5e707PNiKtwDM5ai007KvqZjRivuIcbl%2FkpFjEPTjvt4k4WfKkTMtaRNKrmJtiSYsQuB%2BzHLaCa%2F9IJPEZDJx6ewa7Fkf2h%2Fc8vfvlHj38oNk7LbP%2BbDbzBfLH0EfnHSnf1opu%2B5MKDsdJREeIz48ZyZk5SQjTjswd%2BNVhZTy0MSTY%2F6xawRCJwEFGt%2Fn5uAHoMA8WP%2BdyD0lmreQXxGVpacs73siG5JBnFYEfJR%2Btvq3i17NhCVyJ%2BIwO42X%2FrYND7lap62EBH6%2F5Jc6zws0FKQcv2id%2F6EFslaAjoU%2BMIyM4%2BzICg2808SwlMoNX2qSdBkYtjBrtMI1cuQygicf11qKJ1%2FQ6XykNC0UwgeTJfFKF5KO%2BlIDRWKcNlvL4v25NGi1ARwo4rUAqs9axy5LJHfE8e8cbF8DJwHI%2FRBmF5M5TKDx6hLPsNeH5pQF6KCDC%2FVYxXkQZFbxcoab4wczXogWJIz9Pge%2FHw5McUK2yeH98nCUM78ImoHMQK5E1vKyy7L0wMHNUJQElvuPY0wM0I3iAUiBSwduOnRnYPdwam66OxWqTuzU8lolmbj1oCnnfI5DZ31si9P7FNE9vLC8og9G4Iy8c0zZzrdHb%2FuVblUZHPd6WXWJ%2BIH3GNgC6dQiZr5q48w%2FpLZxAY6pgEUbXxXOjGlt%2BJBysjTXSH%2FKIHud9Q2YK8OaBRuPP9P6tgItK%2FSOJUmGARVFs9SEHruX5MAkiuSMAMpKUQiekZBRePj%2F3kF5aKVqAzoP7fR8U0UBodsPe4J5UfvztoMMQRKGPEBpO7C4IhN5r8BIcIVrRbiKkOfKxy4ziWNaSrZD7RvytqBIkYyRCdoMWro%2FgbiyoNcLzp7wbGb1eVQgZ7sVyy4Z9Va&X-Amz-Signature=af68eeb6a6376a4602789351d87dc4b17ad7cf0ba5ef1554acb6a80b9a2502b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNDXYD5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCICQbgKOtSWMNmOjyrAmeOX4koJQFtovmKGYlofASkcFTAiARWXgDwy8TjLE56HHUP1DUdgiO0Mfdm%2B76HDci1wzOtiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WzvLt6RapnxsNELKtwDhc9wQKwMdOH8lxkpQxpZUV%2Bz1%2BYQFNQwDfO%2BO5OAxEPbjhRhHbbxzyuqiVVMIIoMeBGGHn%2BluVCLCygcDnkZUo1rF9KSZHgREbQB2VBU3zyjANKRZxlSHd%2FRsPWpcBvFU5QL9FLFwYF%2B0gdnJEqiCMD3roTpyrxZtPv7m8dwpgPdq%2Bct%2B5NH9NiJgCMKKkuoys11oUcuXwijw25jRzWmUalcuxFMpw6Gq0IDi%2FP3UHPZxB8G3VwIsb97eUeDrC7dgL7iktDOw2fIKxy5iB23D77jjY73qDVk0uF9j%2Fgk%2BspUi0ui30Ozc%2BuG%2Bm8ZLh5FAro4vaT3Dlsg206Dv3bEFsHci%2FEYvhMA3lNh1ou%2BRgCETBG8V%2Bsuop5EeebfARzPNxKL57grwQJHZ%2FO9eUpPRS8I2uNRG1mdLXEb4gPHbbwP7I8D8JmiUvDrHoY5iUw42qT1Y%2F%2BmXjNzw1vCHc2C3joxi7eGkxV9LozfQmcpnfLRXK3%2B51W9PoZt37eCELcBkh%2Fj5xRuCr%2BsEr1s%2BTtBshiVr%2Bs3ey6EOPpNuHQErTWRS8bo9K%2BnfwQydSxiN1SU6olSDAFYOTrvyd%2FO0g5isBURsaqP0azk05jpCZBo4AIVDRYgxFyVoOj%2BOeAwz5LZxAY6pgE6bg5DIPFi6xpj6JEQpqo5Z3UO%2FXqJTZdMwj4j6g4pS0Y784FR6KijORXPKlH8iqUr7LbrFSoQboDNL79pHhBRG4etLLazqYtlDFt%2F93jbaDYCNafDnduHGrH6xSj4xaAtsrHXv9PgK95PYXvqPmza8yqXQ8byrp%2B7w9ELgArwdg4eVJmhq3B%2FR73eQl93EdscYghHREBScy%2F7vGU2Ooex2ZOXNk9A&X-Amz-Signature=cd7e394b6d015d1f40fdf59d40307d4a46e7ef5bbc5277f6d4a416ab470083af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFTOI7VR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCMGm8%2BbKMtLoefaucI0ah%2B1nM0spW4xbzMyYDlgXFaCwIhAJAWfqFxi1pugk2Y%2BQZmRtZt9SFf%2BGpZOZgo4R6Qf06xKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyS1ORnAKQc%2FEBJduEq3AOoJrHL%2Fs2Jxrou%2BgYPy2ZzNwmkcmEg8lMPP1oepxvOHbynf7Jw4bNqQg6TR0SoHwrv7LSSqpAU%2FvfK%2F%2Fcj%2BHbRUf70gthmTTwbIMXLXHL5alWkUSzRe9MZaB5PeQKfQdaMMiFPP5VuByW6EUl5Zp5B6cZYudz5bkWISZ%2Bq2wiPvCRCgqAWk%2F1AfHuezkPMHmkAue6GiYnaHsfy9mZgIlUof%2FJdrovkXbLq%2FGfdjmLoWFHVDBSK2l5asdoMA1siIP0THOsZ%2FfYhrOuulB%2F9oPbN3g5AWERlh0G0qnNB29eCd8tAP3Bczf2LStU%2FtQECmEsVowkSo8%2FQENTz2tP8sHlgXWSh1ovOVT6%2FSI88rAqAAPO9OZUl9K%2FEbyAgD%2BaBfv841zHWhJ09OHeZ2Ps42vXuW5IpYwcGEY5idNxWtVspR2CEl%2FG2oraqQqozsxgr3EPjutNjiO8bypmn8sWRp68%2BYA%2BdgJ37HjO%2FMKO4h6hIjT97hz2sT6im6kQlsof91btdpQBysYR%2B%2FoXcaAwzJCUTFM7sefjc1iHM94DEUNE1HZFLMcWcUIdkAhB%2BcXS9ZKX7XeeZJSeZQOLyg1PVIWAbMNTXCgdc7MXpvRk1mzj6POuSsOoyyjWGHps8JTCcktnEBjqkAZYMsnFpPLzYYmqXdWdmYw0O9qVGCcMGUrOwfDw4fQgDEk%2FmL746U%2Bv0O4LePfltFDLMDbK9l7tstkSrzHwIs0unKHQV1P4mlJWFb%2BscDNeqn0RJAcCsBHRt2cS9fZQgjeJOjSslgMO9bhUq41V3vVC%2BScRCRk4msvyXvzCptrbt8kHci%2FbF%2F1f6KqCA49V8zMcGI58Z2WVNLNU06Zp0sJ4sztC6&X-Amz-Signature=cf1e4fb0558a67f9e179edf46dffc5b766382f0e9280ae59cb7be0f354b2ba0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UDEPSZ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCDtl7VTg%2BireHu6MbsaMuVbn%2Bh7ctC%2FWYkPWtjpll%2FgQIhAMokvM%2FLbiAW4SAnP56ralRvVap19v37u7ZqkTUQyjWaKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytVlczxb1bZAxKkTEq3APwqaWHJo0y6F9iAPLKO9Drds7piYLLhnT6ZLu3TWEmtYrtlNIMxA0BZpgZhJc1kDYTlQcrwzzSw1Jn1u3uC6xe703P%2FvcrNacbML%2BuflH1u0Wc9K2UO91WXZOPjTP6%2BXVJ3Z1YyeF86ls4xdJnqECXKbog1581O%2FijulkZ5xXb%2B9Flpx2zzMDE44%2Bi8jwsb1acvjF3F%2BniZN%2BEaNrwC4sIGsR%2FnFGH9X2LuYFmHZm4pLxNIlOrtQuqgmE8qZpFHTC7qAZLLNOet6BJ%2BZu9tbHmrvmYg58HxCWjdmQg6Pnk%2BL76p4Npwrv771pU%2BlVwReaqO4joxKGTyFwdbOAE1jxtUIlB2tbpZAEudjmxtdA8aMrKnshNfQ52R2yYGITCPqxAPkaeZPnMYiOwA35QAwiMCFfIU8gmFlFHy9bTB1fcQH75Qr2UbteAUYDceKOztGRsX2Bg180HdGlf5tQuHEMZn1yd47i01zxxq8jISgh9TY%2BAxzft3YQV8x6YireaXRWMSEO2Yx4AL9KPUsoTGFTSLFbLlSLz0GATOlpTc0IEqVLpyp8KmO5OQnh8dZbvb4qsYCXPZVooR4PPv4xXcHU1RRpZJM5TBQt%2BZklc4RDlLeZ6fcEUt5hVYzc1JDDzktnEBjqkAV1q4w7S0BCzqmvwQDq%2FsATzL8yEwnTds2RGY%2B%2FELSvfshGU1R8nf4K3YGpFEW02G3pPAET%2Fc3d2UpfMxQTvclXvgYQgvVzaTa9rqC3xNq4WXdvjbymeCE2wzLlB0oKFJhmZk7GtkYKEIbRD0LDID%2FdkB%2F%2BYiOUIksqs4klCDfKSBD3ONcOvkhOOeRSlQzGzdJubkDcV668ORGbVtEv8fzwBe8lH&X-Amz-Signature=cb22e48b4b96554107a9adc371ff5777900a512762370d6202b2fce51b2d1305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZXOAWKU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDyVZMWSe5fJsSU8m%2FY730llk8ggr35P9f7qnWEzHw3MQIgHk1IDoXmc4R%2Fzh9SFLYLV55%2BY1jPisbpckpJrHEzAUkqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwx78q5uwu%2F%2BdoSgCrcAzKMVbSZillhSa3mK%2BRqsH%2BdJbGjPrCbEoQEUa26MJyde%2FWnuVu1rSQoxJOLMrdFaWCclCQkHU%2FtS8QlRLecq7CKMLA85FwSxtEGYnzpkIF9GpKHi0UgcIywapkBwdEzsDynKTJBRIMlLCy8qbP4nFNBGlHlr4fFcpSVza4Hu6ejMVZ8E59aknxlMR%2B21dA0hhqolaTUGKPlX2%2B3zEJEtMzsKO9h4%2FOecTbGcv3z6JAaQkwI0uQ7BIrKGNhETjjEqymZC5HJd%2F%2FXqlnVP04wzjeJzWtDWg9TkERCMSpFQChXnQyGvdJkOX811VOdgs0wbtzSoRviQtg0d7gJHJINLRqAsnsJSGh2Ch8DLDv2kgSBDNXxYT9bskyRH%2BYex%2BrwdYj9UIQqEjJL6XJLa2WKC5Zwz%2BPdnCPY4I3yfovcNoMl2hvXUUtEq8bZ%2BxRtpnSmDTNVR6bNKxMFNn6iMa5JTSvyc8d7bS2bFKyrqSsX7SRoVFrqT6gDVnUQFNwyBG6JcPiZEiZKFDB9bWflZJ5VCHT1Iy2RqeAokMVhAmrMACJnq5pNjWhs4kYfJpT6dWZLQ1PJGIldALPToVWWbj0OJIRAIZjaNABfIFCFM7BYCEkHUpHTjeUjSSoYbGQdMLeS2cQGOqUB%2BJ%2BOtjbv5knYNnBIbUfeWoXreK1CV%2FHb%2BG%2B4QmOGn%2FsoAFyCuzjdblBr0X7eBP3d5nw6etCMvOXQ2elOvyCji74fSQZccXf3bLRAt6cuko23rUC7Rf5AISQT4t5dQJ0hTtFMZXN5IV%2FB60ZGXP2D7z8vYnqb86IjHdxn66MzpvrA9nziTMGKSiJCor72Mhl3kLdGgfem3NB5Xf9J40wmJINezWMb&X-Amz-Signature=d6731e4235a473c4456f3380daffcba9ebddae6c8d1e7e704a7120baade3b189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=3cc40376358e90b320855edb5e86bec5a9ec826d79a4ed22d82278e79fc9ffcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUMSPGO5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGpBdMBjNVvs0pF9msa9rCQyZfJUL8G%2FCcNYzKk%2BcNNwAiB8MyIj2iZZuftbgVCC9Ipl1r3KRgx7pGbg1u8EWzkwySqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnD1s08%2Fkzc8POOT6KtwDg0sM%2FA2Hj9fAOSFVM7W%2BTpTxwwoK7fQlbkT9MXlGwa91lcxQZoxIAC3gZHPw2S5adSmSRjKtKYwmjEy6aX4V4OiUP3UcIRzbpPJpDdXNHG%2FTq25Yx4d2BJjKjbqV%2FocL%2FOkTQP8iP5SV1bLKK9CvC9WkTAQxQMmgC7BP7IkyJKa5s0noa3EafbSUk9VK34v7G4PktUc3FROotXtRNOybTvNItgydVDyaNppphoBQXVyJVK3R5bMWdUf1UfJjjLC%2FtBJIpa2Gqi0fispKNJQR6isVLk%2BLpYk2HvgnTpC8gGrT%2Ft%2FRxwcKKGHYwXQ48xnWvh2P96jGqd4IIuGAIFWdic7DAg3ZaITlRTO7Dp0hAC4YbLfKqR3Wk8Q4hPfPtSkjx6r8dAY5MzSoHJ4%2FpkkDjIyexSv%2FiTCoksaCvHqdvZ9IASTnhM7E5rZ17gT4De%2BK8agr8iiZcKk%2F%2FgUR3yvMocWxfvwNuppM0aVAAhjVMQL6U9Q%2FYfXBRudjLVpykhyPAFvbv2J1acxUSPpjbU19u4sjlhsOWw68shpK3syCEQsU27b%2Bm7YFiiS8bYlW6I7abT5NEleRSGCuIo%2FACror%2Byg12m99X1iE2azUHHRXePpfpGLoUl7BZScHtbUw6JLZxAY6pgFpnT4j6pFpmXekr8y5hjnx5FXFwlhPjTMFOVZxtZUyU6c5OwKv3UXZmjOQBx6eqPEz37woEtXU4pPMpXde3W2QzchiQYGwc6I02buQIJpD0sHnmFnBthutO22YExzT%2BKz7NGvdDo%2FEAbH4ptCMW%2FwK31mujCDjIkicTJDu9tBCMvO7rbOntdS7opbUHIIr2p2cPiYn7tI4rB%2FLmkzwl96bGSwFEr7o&X-Amz-Signature=a937fc52685b24589c1e482d99327a68341a87293d6ef4b3b90ba86564e904b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=975c170c3c01df42d385a1cd1c3110b71754e61dfb86f0b3e51346544465834e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=f63493e5e41ed1da747ebcd934c893da670f6933b7a6d8d4cb5cda243ac5730a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=f44837ae9fed83efa462282dda5ee092c985cb0cdc31843c82b600dafd609ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=4a675c57e5cfafc4c6a02407c2715939b01b1544e36c623641b893c0d55ebd11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=e1d6754a17b05f8c488a39f9c9f8e9e7e5fec80439ee0a2537f27dea2e2b5294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=bee56e9e1d05cdb7bcd786965205348b811214aa1cca3041e4506a385615374b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=f44837ae9fed83efa462282dda5ee092c985cb0cdc31843c82b600dafd609ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=5413a8ef4ee5be47aa7c3845467729a37742c962da9886bdcbf19fc1184b546b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=1f800a139ce9c648a7c0e89a9ca5ffe81a50b738d5a8e47a6f2631ce576f87ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIU3N5H%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBh9qj8cuu7I2KCGkXdtTwz6Q0BLWVBP2ZSr8KcX8I0ZAiAWF4dj9dKb9Sw4A2OJ%2BBVc9wpmV36ox0kKPBhUs45iCiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IwLZlcB833ejCC9KtwDGDaFSwaAbIlsxj5Y%2BaIzdZRHIyFSxGrGXVw%2FWR6GyhmM2%2BX8ELq8cCGoQPrsyjkBOd5vRVY1vFZbDJclvBxxK9g3MazpG6dwWZhRtLHLk%2FK8Esb84GKv5unHLBXPy8SubFii%2FCUs8qk40ZkrQsm%2Bv0FdpathMJiRMkNEoGc3TBcKbabjgPJzzFKuSXgLAFG2xwVaq5WQfMg%2FSxK3jCUC9%2FXwg8NLGDaOWoUOjZ8Ai0N7DctkfRUzDNqnhM5DtwF9sNwhpTqIoXDjOY%2B7g4m8s78Ck7NlaYzOJaipqh8mVsoDqvOdImLjFT7UkQmztq1JldTUNixfE9zASIidXZKpFvXJouk9uHmRWVTX6bcdsGYB0yy45oCSp7C892rwuAfXSs%2B4Mta36DH0VkJ1nW7QwY8fe1%2BTlP2%2BnaUqO3%2Fnusb0EFbm5tSASJOLYT3OCmjMs0YsyCYXodDf%2FI%2BQT9o5oJE%2B09uWcEv19MzmDnpZOsDeGy1%2FO9M54V%2BdOQegPcGWUNh7QHgH83EOiGg%2BUBw0zBWcfC4qB7afN%2FGV76IVZKjPYsaAr3QL6grBmFnDKiBiE3PRbYbFsxhwO5rXWgXGAJSzG4WFWUXvzu%2FgKo%2B2%2BlC05urraNHC%2FlDiIhMwyJLZxAY6pgFF253uyJDnU%2BfO6aBjDJGN2sWfRJdLX3IpP2PKzeli%2Ftp6%2F86aZ9OOyv2uQqEmOJDtM2KivYd49HEJC%2BIha3vqZOetSgdA70KTf%2B4jvkxTYDCHw7QL6PqUxYllLXIJtaGTCiHg2ryiF%2F8uk4fTIBUS%2FYkmgCK8IN7bnwgDZO96Q%2FhvNs7pyKPxBncKEbtfZ4jaylwsHMLDdex9UEifEgR2%2FM2ELVeg&X-Amz-Signature=1db328685a8efa232435c5dd76b5062b10679c288f7d6e1b4968a0023d0171c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
