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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=91b9057cddb534c8db22bcccec13f6bb0497d938d98ab9e1c733f41a5fca0b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=ddf2b38f2bdcf2a47fca04f2203102bf67ab5e8366d91f89872abf245d5d30cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=c93bb2dc1668f126a70d77a5f4cbf9ec657b9d01528aabd14681a6b30cb992fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=6432f83bfc765689238b90e62f1e74ab5957f547a291618d908a2db2bba9f09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=8e7c754d76a4d92cef669bba0d7ca7f9c6072f85098d9c9f4fc1ade9f578d054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=170e09ec3d95be624363b996e45c223be7c82018ae897c2f3075a99afa3ab182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=a4ae2e8392017fa9281abc782a9ee1c922c1ea1f360968e86ea1e501b64b84a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T013959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=d49ea78832d10538b5cbdab1c63d5d25f0e93adbcaa21fa057cf73e994f8daed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=d670a48afc0ce8f6d7b4f8395ade301341533ff10ea849432ec4905d840124d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=541df277a1ec677afe40c51de13d8d50957e9c7efb245efdd98aaad461e6ceb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TDWUYVK%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBadE355oml2vkmqeBPcMTycXkyjgaiJh2MEI1qEYuTmAiADcRnZ5EbuoBKnSCRX7SDN69poMPRGX3y0vCOsodj%2BhSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHMLEMBeuBBpHYeuxKtwDf4NJDfb3SUGkTPlD6Wxf95%2BGzLW8x00TbfJ1RzUVQcUj9ri%2BjJK3ClyHTJSgRQL2Rfa0jf7YyO3RsJ%2BDpCXg3NO6Bmnx7iEo%2BcX2eXsooqUakDG%2FJ8Xt3dhHCkfUi4EhhirkqAG2OJ%2BBWKBZXT7pvSy7NlwKhT1C2IgyBWZFDBPKJorpRW2ywdJP8xQL4WO2Zx9fBGz%2FGltXnEsbn5F7SQ5gTNH%2FOVxys7XG7oY2rqksQIbr%2FCaxyxZvh3GmRj6qQnkcpkJ3NHx1%2FLwnCCKn7YRuKzdFiehh%2FqGgu3udw70Em9qPRlzbSl2n23diFbP%2FubbyIHAaz7dVoOvP75dUICX3vIL%2Bcth%2BU7k19E3eKQ2sWaUs%2BYEExRM5QQ62xfwTkKoGZWZe%2FANfluUdNzKi1fYo3u5FdK1B%2FM5oXGKMyHVutSZoDVNhASSrSqbnmJO1h%2FyyoItKFnBdXvQ63ouuchgVUyPA3ni7CWQHH8BtCOjHRkL52vddqP3rBKfvTH1QiGJITC31KqMsliRrykYHM9%2Fdth17twJmGzR6vs3Xh2dUDTc6jq9hXIipoBZliBxOwv2Eyp5U12vCbM2YtQdZ46GXeAziMc7JsM3j4vlxoZ33vFANFT7rZc5CdgkwurH1xwY6pgE6GqRPkROHnbVeN4AvXZ9bCmR%2FDOU92rQRklT41Ut8OWXmrPMqOU03d1QdvGuxhEC0LkFt9ubJr8gvamNKI8BUppHVZtpCpij%2BCbdd2o%2FyXB%2BP4uCCio2oS7PI8HX2mTRHczkUg%2BwO6AIstL8qb9J%2BBx2bjWw07mqIv9YKQgAuQGgKmgyWjFrpzYynaTwRBnKzPPglEOWKO0daM5MM8wQtwBwEKqmD&X-Amz-Signature=f53550f438b41a5dd50f0afe29a9a7cff1bdfe0d6d7a9939e09da8c7f769a82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632H5UOMG%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDrFSrWziFW2%2F3MCHy8wbJsMyyfGPzpZ3rS5be2d1OCgIhAPpdjz0nMuNa7TVKG%2B1IV0UpOCFU%2B25dJeunnRBA16GZKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL8DlrwjSw6R6GJokq3AOsjvN0gOulxa00erbQon8R0eEz4R%2BIFWjJ%2Bep8DYQK6ogVtofeMPMzJdlgaYS1FvWPf6XxrsPwVMWFSzNzovrnnJXRsMtnLFEG%2BQfknBkVgPW2WeRR%2FsFp2fCuvutkiLGEH3kEuMV%2B%2FutC5rBubMerLRGCNMW9SPC4pWuYyhv07uEtYr58x1aYq%2BcgYAwMKblfaparuvfmMyfiT5Xvrvz9KSwFjYZ%2FKy1yIIpe3ONcHbfHBwaqPkxVIS4dGSkJwh%2BlY%2Fq66drJotpk8iC1RyuGdxZ%2FodL3aCGZ7EBsP8mnx30cITdtc0SOHP9RqqSM%2BL2ojucxBc3wLkZ%2BW%2BqhzmY%2BMAjFm9uchEwQopjxvfVYpiX6j2o%2F%2BfZQQY%2FPqoYj84rPMzZ8P3p15KJ1JTLUUvbydQSoOP8e4uwVi4TTZdpTnkNy7Ic70s8Vr7rSpZdw5z8XyEFg4v5PdMf%2FL9rWDJBginxC%2Bmn%2B33yBIS2%2BIekFPcAzlj5J7tPPssZe%2BV13XCGw7T%2BKCe7vEu6iso%2BXZXYwqhm0r7NXSmFS1KaxgHi5fRa7cBIciASe0r2YQpy07U%2B3mSkrHPDRRxcjOzTbjBsFjykQoRrF68ZuBw5Zhfey%2BB5dU4jHFXjDNaJSLjD2svXHBjqkARx6wycJlWIgHowkrAtEf3i6Qj6X2N%2Be4WwmXi0MlY0%2BB%2Bcv2clNuMdEEVjrrmggPDdjOcsN%2BBHbfH3QNdSivH8%2FM0XPPdEsijMWLQXtW4%2BQE3HlPABYdenkRPhSAvVna9J4qfPfdg4Vgg1nsD7WEH8W%2Fk83yUht23iCfFYSPfsa9TF%2BBO5WUrfbLgxYCfoJROoRuecvqxdiMhaR4YSALCMtlieT&X-Amz-Signature=2471c4f48d7b6e34008bde4e2ef3399983a997711b2c5c562bd6ed58cfb77898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G7ZLDL3%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqdUnbpFnQLr6rWb3NwOHOOpZEgPnNBIMzrwccR593ZAiBhxhR7tVZeMisXRbkpKYKYr9k21K9vi4sBEPi71%2BtaJyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWYstHd5kLMb7RdslKtwDtfOntNzidjrCeDcN9b9Bfk62MWTbCDMNtg8U95iR49V%2BarBSCQXJohWpk%2BZXEE3ZGODYpjn7M41B0WVdYUig16OTOeRWTHK2aM8PkqfH2W6StfbgO%2BdY3q8hN4x8s9TOrQMehX16PdfOabAiy3OdSDyPJous%2Fi8ty2hw2J%2FQQoFQiZU1a4Mivn%2BwbiPABrJCqy8Lf2D4g9N7Yp4Hwrf2EJqFMrg%2Bq9vjOMDtQ2VnLViZJrvTHbZlFp1JbWylZeJGEfYMtpSFnY7ULP5NtkMQoJe2MpCCdTQT2sJ4x51rNwf7T3U4VdYONF%2FwNq%2B9ixq%2BcBAioEBdJbnyZ3uoIeBCGqE9c6j3zW5si4fWNyRfYC9EFejJpvG8BgmzVSMmaNsZ65GDBhT6TgNvunlmxOm3e0b3parMQgXPyFgRtx4IjgW53uk0ASeuHH9NpAYfeWBz29hXEGRIL%2F8jBZW%2FDgMYeiowncDo9rANHzoYUr5c5CUpyQa038KzTdNBWpcJDQKgFjUiLpHH46GHbD7tZx%2Flok24sU2KN3jbXJHbYdXcWQnvMeq4djZfw5Wxl30qtbYnWtd8lzDJFmHqOm4DGzl8IdH3Xa7l5Fg4qgtJXODyrZvyHgnbf1zn0wxAmwowrrX1xwY6pgFzYcuyyH8DXKvtGDZ%2FooOUKExPe9FGpbu47ARX6s5lOL8h0gA1gd2IpP4JQDeQjTQX1zCKBH9Gzdg4xrESC222HGoC8V9kta%2FYvR3A6WLKD%2B6I6ncgPoyEYmS2XYisc%2FcsJB%2BLpYeQS6nWBvyJNhy3aodUMSS7jtfuqtL%2BTwxZdP%2FjMJaRMhVzLGCLjmrr5wx99hFVlSdqPL4Nj09fiNuVNQILiIhd&X-Amz-Signature=cb87cf02094c0fff07753c3960f51ecce6eef10693e12de4fd8d542c8a857316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=0c599825871acf272d8bdba8dc69871a0d0cacf39f98e5023180a8ddb588357f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUUAEJBW%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYZ4YUnwoe%2FWxohKpEtlfNcVJO6nMLQWCX5eYOylRj7AiB%2FTpsHkU8t9LT3DLc7Lm6xnBoqbPwECtInZj%2FjUrJRsSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEOHxG8JMKE9AAQq5KtwDHy2amVVgm4%2B2FcaJjpZUqpG03670KgaeON%2FSUO0krjjSZqPwk%2F7UMfEHTjt1fV1AitCP8mZRws%2B1Il1xPHv%2BnxXLtF2a4eWFbY78U7A9fbK8QsAp%2F9Cw479wQaFX%2BW9yHRFOYoxk47LClICyGJ7BpJcEl8QPctJxgey1zFxfsSVq%2BlhhjE0LiChmPFJrgsw%2Bv88GhplmP%2F88a6U7X7VB3L%2FrSgc0I9W4hLuhd9qIMWp3bHZm1S6kSXKkVY9oy4oh7kbncDwRikkrDH45BwtISUhlB00%2FB6CGSc6%2BQpTZiLi2ddEGlX9FWRRTYHMYcm6dojrWhHxQfsNptOspclkADk7JvZwdxFklddG8ePNpmAAUUKHYxzxEqWWMXwMO%2FKDNbdbPwOqNlQxx6NewBe%2FobRiza0sA%2Fh0yBWs5LzsO9PV1PaOfkVVRhsaAQZsjp87fGFKhJg5t72dQBnke5g5b%2BHLQmZdzQOY0tRiL5esHSRvH9gCKU0wTu4Yi%2FItaDXcH0I%2BYdotEY5CJRv0tkKAyQSIIwUxifEN5oYXL5689t9wDjCsEeGcg9IEWQCwDzDBJNbilO1oJu92GQhs4Id2T8W8jEglLSaGRGJk5w1vHeVeiP8cgFA4hKKp4Y%2BIwxaT1xwY6pgEf7le1ekne0Pr0K%2Fo8TxF4dNFlyvbRxa%2BsfbIiiSAMjY3YL7XGrEUGvaUPIARZpng909zvS7Almh32KqQuUyZodiJNbeq2xjcqSzWsg3iPyeZLCf%2BwUfPFg0w%2Bs78fYTzYJxfHyRjef6EomaDcl4rGtt4X%2BNN1TRDnSTtUhL6ZNUtLfJ3vk%2FnRODdosp4eEi7qKIVosIH87YC4p6l5iS5GmPKMoimI&X-Amz-Signature=6ba71a665bce5c85fc6c0a1952a0ab6146d720cb84d3f7f8c03c012180ee7bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=efa7e67a28fbd6b013c6fb219699780d36ebca9706714a92ae441b9051a62372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWENBRQ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC1%2Bzg%2FJbdyh8Y7PNaPHzOWuNF%2BU3qYaDd7wcliiWEC%2BAiEA3%2FLk4STXJVuRZtvmUuVRo2JO8HZnmTneNUgaebRElNMqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3vzs1P5EvtuS9i6SrcA%2BDP3j3x98hf3v3QSomQoutxmRvLBx4liDTJyp9OaI31BfnEAOdSuI%2BwR7oVeUoeFD8tsdxYqcAet15cZ%2F%2FsAC29qYE5mE5c9i1BautorgIbjhqYofmlxpB9g3VUKx4w8GU%2F8Z%2FvkolgdSXeFt2kWgZx4RQAyEutEfDzd5hmQ9y8EhYId9Gt8iHSA19sujB%2Flu0SYBOOMWRm%2BXzcPqk%2F105WOP3w7i4A5299ES28Ig5EYni3YwO5zNz%2F%2BGo2jxrxbyErJ%2Fp65bsQQGRXm158kCjQbSJVRDiklqwVeYr2BIok0UHv793QvFegqSioAwmnEXyi%2BnOl77zh7U6zkFMFm%2Bcjg88Pbre3RP5VS%2F8wsWwZRcZvHyd6plDiIiClIZAeSV9eCk18Xs5QcAdpl7UJlo3I%2BxA8Fv9YlSEDuQu9UYNnXRz3c7Cxk6Hv2gmU9AX1NA2qtIlhBWGOsFofv9s1lvf%2Ftx5ht37F%2B4IhkN5dZkso7H%2BAHvOTxelONlZkQab1jodMYEAHBNpQDOacnLhfD%2BYs%2BjLvjAB9BnlCK5YTZyoH3pDCvwVarCnMO3j3yixs4dSXlXjRrenD4ouSo%2Bu3kKRlAqWRKjr9BbjYrOhHiqM%2Fz79Us5Z59Hz0IDevMOmv9ccGOqUBnQYG90SribQ7cV9RzzPwGgTLPQAIXXoTcotzs7Txj%2FtvabLhkMNTCK78Cl%2B2yJC9%2Bf2RK%2BPpo7VYwvEePFNn%2F9F4upBJx85CC4iiQ%2B4A3BIIo5uwEun9HgfZLg4WBARKUKp9DMvEmmL9p8peOcX1asstTqf0srIH34ljqOxUrOweIprA7%2FDWOTephMd%2F%2BaqFLwxh%2BjfLs1X25ySFNSyihr3JgP1%2B&X-Amz-Signature=8d5e1dbd0d90dcb2f8ee7458197d9c7cd123b84801b6fc2178f1315f7b7bef82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=8e038dc19312492bdcb832e44ff6c0331bd2ba5fa7a66dcca5c6ac90e97cbfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THETD2P6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6vd9lhY9zd8J%2FxKhCqAhyEdPUzWYeivTvnDarFGsjhgIhALFnIOp9XCWgxLBcBrciLzKBunZkYCfUu%2BSTwwl37OIBKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzmjtTRKX9KiPvmGYAq3AMb9HvLlMspDjmdYKLnRwgt2LK5YC79p2xoG811crsc7z4bqWdhVQTLD1%2F%2F5BAW1mS2I8fuwkQ%2BhzOTAFktXopJZ34HyWex5xAg6JOjxxMWi0HsFcTkBz3nN4NOWLBn4LkSa9P1oc8q6XDOOyj0XReVmqw4UQAPOBw%2BtaCX9BdlSBj0jgjugxc4nH%2F4Ls7gbENjg%2BbfnPcvgSVSX29BqG7EjoOeETJbE7peuRZyLFGGRFDS%2FzQx5EGLL6AHn89%2BrZk9wGZziRHkbqEYbmAtnrRJKoIXj%2BvY5pxUfaKAqmbzWi0BW5q2wtei%2FefO0Mp0OYSQRYlDmdaNgave%2F8OpoD6E3Jvo4o9qm6CkUgju2OnaK8GaaELDBMXEGVmkQbwW4cqvLI7EIbqrSYY%2BxtDxmL3Y09FPgu8Ts%2BNvTMfoXQo36a9ojrExGK2a0C2LKZCxT02XShR2cjxk%2BjSfL3R6d%2BaBsxzl8LuiMEQc5qNR9K4swD%2BOlZZBlHir%2B5XaQamz5LN4f3p18xs7Iis5ld%2BJ8lti8qZpFoRexvW%2BiTieIKEmzS23McqYYIHMNNb7JSPInQAyitHz%2F%2FqPP8yZQW5iSt69LnwgsbXlp8GFBIJLJCeD3lUTaVcdfoH%2BGmSD6TDqrPXHBjqkAa9DbVksnGqZMpKP213AUeXAvPTSCBqpKP3an%2FZlYzv8NGA%2FvTd7GK30dvtSvQf8V%2BacwEXeuwp7OVDUN%2BVkdPAUBgI0u7eU1UUebi3eyoGiZ2VKfUehgM2ABI5QPyN%2Frn0QtZS2mzBUlTQTgx%2Fl6d%2Bzh1PMDBMWi8QC6l7q%2BRBj1SXw1K2qRKJnva64GzvMeuWtpk%2FZNpqrk8PU%2FSazkkXeWXXC&X-Amz-Signature=2277b01e12a33ee050ee3bd440d6eddd02ba75ed4d37eaaf6b91f1cd36173788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=caba918fab9dde9c0ee5805c987cdbed8c3fd53a52ea1a022a85aa7d864b15a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LE3VJRY%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpauJWK9%2BDk5GXNCyXwLmqcLzswF0WK1ZoHCECnAnoqAIgBLQ7dPSW1ss8IWqZlSlh9jHiRTnxwfOmzdvIIfyODmcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOyAFTC%2FbkkkJdtvsCrcAy92N35NfLBD3fyDjlgJz7kkxKhRUu%2FQOoXg87%2Fl0G%2BkzG1Jh173fmJSMXGoYf6yj0aockyJXXO9wobsX8cBCJA%2B73eL0khftqc8NWACt3onkyt4elA8VuXnWqe6nr%2By0je1gHvXF0aYwB0VI6xSLxeuBhaXFrQfD8t7N4LmlMdlTGqzn0ol8z8hHzMCcmall9tL77Hu9PX3IXVqPynsmWFsHSylj7jN3Czc3MW3wTWQl23o6knFp01rSz5VudYTRW%2FTKW%2FKUZBx5vIOZIbm4mdxzQuSvbEEGTyzbAqXRljc6b%2BEvqRNHJ2YDfa3HdDu02yVHkdv4SKTffL%2B4iQ3gpt7p4XxnaxAvURGqWFXn2LMBzgGDZXXRy4g1NU%2BTfX9eWhIvTpSuyk7WAh%2BPT8LJBlPGZiPpLZ6N%2BuC%2Bc0f94qHwS6H1wMjH7l33%2FleQB2892MXTGtjXWG2S5vHruZWN9GN6XmZYSh%2BNzn03aYJqNfg14oBg25CIbzEwt%2FPBhM9jCJkbQCe6SinNtaunWQQ5pBIk8OIPLNccycBfTXYiMoNlr7rGxBrVnJc%2Bak%2Ff5zR%2FO6YQ5J4OJLVw%2B6qvI1YYv3cXaWz3tlrDd%2BIC%2F4aCRK5swe%2F%2B%2F0ejkzfaPd6MOSu9ccGOqUBKBS5O54uoeN5hWSjMzGSVhXiTbvXPKvyQHHJlTkPsSPJCFteR%2FXMrDavnY1W2eo9uxJBW%2FV4UDJ4t0SCx46oho1%2FggNgsXUGrVq7hJrdeShc%2BrEYK12xBeY70vMfPnEYr%2B%2BjGHvF%2FPhIZKCci9jtbEs0WLUiP022IQqhLoMCf3zp2bUiv%2BP403VN9UvDqB%2BHHW%2B00%2BnTgS%2Fz3aPoZBiso6LI%2B8oS&X-Amz-Signature=28fa7d8793a56638a3c670e54b54db94c05dee9d5544d8a74fed02275191f374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=92b093e3f1c5c24247952408d3b4b3e725d16b0484874870c53ac2c1dd1f6604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZDA42T%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdx97SrJHbe2oF4pN1GmEeGFRJgDbfhZEohIeqrIhnwIhAN9jBJgcuBB%2FXDsagwUXXZg0Xt4m1I%2ByyQpqKbUnMiC%2FKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbLmUUSb1l3t1pjOwq3AO1VRiMq0D27RmBBRXz64PcuIWjSDuJXZt8Vgig3Bn5HRfwN0a8LG9KDMBJwfydgeBaGud1LysRvkvbWZb44GzsqyfhCmqxNgglDJXNOc%2F6Rl37Ymbv1fOyJXvy2WyvrA%2BlUz7EMrZCKR6QMzmvHWETwaEQ13bYIprQ0ApxW2AnFoI5HJtUdY3beIQ3w2OofyLB4Oqciew1WVqKq8qeEwfxX5CJG9hxn2xi%2FgYT3KzLaPBjJuocn5EvnUShhEAfG%2FLuUtiE0yHy%2Fw1777Edf6HLU1cmm%2B6e63YIGXclaGFapOwCrRNZlUUpLb64y5nK4N0u07KytlIT96bsLcm0Occ9qCtowqcJU0nS80yDfdByiKwbcV%2BlIWsk78TawfPYQOzNGEbuKAAv6su%2FUa0%2FTfqjlby0F7rxLvNDgCz4Dp%2F9RbkwqZjTejBpHISFpX%2B5y8LoQD6b%2FFPhUlI%2FXfi0KrNE7Z6OmTgQWVHIHCQJ8VVkzljPg6U%2BPbKzRSAICOGXw9gD%2F178wQmtYmspDViEPOf5H6TNc6lvs%2BAcHDup1SxeMxFIVZydY9FjbdeYHTpfSll2SIIuzhlRtApFP7qfWBa6WwDAmQCw1hEITTSts0eIaHcMKH2Z2oQ77To2MTDtsfXHBjqkAc9PhbOrxwNpszeQuPCiSuQy%2BWB8CgWPAjk8ZHu26C%2FTx8%2FxaT7DQgnfs2aViSnmGsrjnPE8gRNG4420cavVbf6OEbFY4BgTtFcJe0C03EjsF6hFxmvWPOiQBIC6PuusDZPD2D3F7PawuMGlO1Hts4P3IoW1Dc%2BFiB04%2F1bhb%2F0TdjQKHWQvt7cJFZMZ1541UPUdD5W9mHHaDdrQB9R1LAYTl%2FDV&X-Amz-Signature=6b928bda49e18d1d57779db6c937d3e08f7c9f8af76a8dc43843c640c6088784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL5C44UQ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bgw03PmnEt8RxIZ4fMcKEed%2F9xM51SEc7%2F5dq3X96wgIgS6a9sxApO1XoAnUXLW9lRi1kWgiROW%2BC7c1nlhAE0bMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKVB%2BeitK7HhNoJUgircA6j3jUVeD2lpmY1%2BzD5p7RAbHnsEsquiLwZG9oVbC%2BPqXonp9FG3U9SImyWjPfgjwTdaI3%2F7BoO9TM%2BcUr%2BC49K74eqUO3LmmwdJ%2FyiyM7LpnRKMNG7gd5QTAx5hcZWLEecoUiEWMevxXYUf2G5M2U%2BI9RUhx%2Bt2iRs0EnHN1cp1RVkZGpXmpn5Wbl6eT5eJ4BlDKg18ALxr5ZRPFIEAyIknX8njTr206u6tyQx64VsJLH5RKLwqFBjUxT%2B19GXAyUXmwFWaIRmHhJPrLFjOwyPLFnCUAg%2Bd9YvF6PYOJv3wJlElYjvload5VkCEogm1kV4V5Vp0bkzuneRmkNokOD1XFfHiTECTG0OQ37enerc5%2FirhIWaAI6vwJ%2FLFCokMph%2BOKWwS4Q1c%2FRdo%2B8X9qlOP0JiQYi039q4fGoPcSnU%2FMKIdlL07nylkP1DsKLkrf7WNgbaCIxvK%2BUk2dT6aih2T5EYZ0v9wrMdhjSAofgejCHZgtQIRMy5BEnVpSLOr84F32pVXkwjuxpVQAkG6fKfcQn87h9RbWVBKNMc0xZXDzpjsrZEcDpGbnAG%2FeZr72r%2Bks0A4gf7nkrIGgsbAz%2Fc8l%2B9QPq8kkXB6ZpnCW1UZreFC40adfyx8U3TpMLHV9McGOqUBzFjfmjLqVBvKSyhanApWdpdwy3QtJwa2vsJzyeFufR3pU96l5YatWMCzPyMqqvOQk0FUFf9W6uuZLqG7%2Fz83GUxB6PrFAPUPCUG7KPD85WeHH7wXrFczeilcM7MwyvjCQYfvZrBqb2wppgWHty%2BeTbSQD1vVrwB4xzYE3s49q9N9s2SOMYqFL8kZwWmlm9qWyyDjJ0mSaPtYG3Hbz4eZv6mUqRE3&X-Amz-Signature=3b37abe8133baf0c9568c7d522d5bdd66316e4a5324cffd58ea46abda7f48bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TK55KJ6%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChCDGIma03b1SlxIANCuHgrKg7Y0Xz0N0ksOHl7XhpOgIgRcO0sLRiDxs2OWsyMMKCcvwZeA2FoTpBgc6erz9uF%2BcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FR%2FT2hP%2B7ovRzEBSrcA0jf5gksBxTDX%2BIGJn%2BnjY6V2yaBICWfZFf7TZdDTLenIgjjUvLQ4gzGKRqqEP%2FMuYBlIKtocyYRWRWGU6JhTYRfTx6X1YB9%2FKynaTMNhfhRiWPCD3qNs2TPVBymjz4hYbfGHDIXTMLk2y3O4zFPTSVDki%2BOm5jdFY3Im9kid%2FNKASKEmYl4s14fHu67ShSFbhxNtqI8zMQzFV%2B%2B158fH9cCLcCncwi5%2B5mwQg3%2B%2Bd77s5%2B7dQ7g%2BuCVjJxyQgsOM7rVYkKtOTvHjZZ9SsTHz0pCI0mwxLHGx%2FQ3dqQMuB92GeAJAxIE%2Fez8VvvX%2F%2B5qjxWAt%2FkYF0wzAJ7YeoNwfqClQyaDawF3whUHZTmWupP6busp0VPla5Zd9z3Qwh36EADE5Xe7BZXIzfk0cCbwKy%2FXGnQ%2FQDn1PVl0jXd6iCR8WP2OwsIGiooIZ6%2BE%2FDlNPUqpmOt7AmSsEOLcTOvASHMtpW8MDi3Nzb0UhfX957iWjOoP5%2B2lFc%2F7LRWZbAJYiei68LXufyOl9GQ75V%2FJXuDTMLEzmbKw16Wwr7Q%2BCfd4a2E1llc06uEB7vGSKKvH%2F9FbdtjcOj5UgcXR4olEljn5JqH8FKY2pSiTcOXqPw0iCyqFUGFvfzpchRfWMI%2B49ccGOqUB67EtftMJolHeR9FR4hwVs%2B%2B5MQkcQC6iJAxN7dJVowgtOSv4A8DBbs6QJLtEG32LYwRBFlXhdAw%2FjWSAhlPcrUXDe4GC2kjynf47EQ0Ci7pBVv4EsYSD17Br3wQeUB%2Bh3gFt1FBuFI3LNgwiZF%2BYW6LGbL4x5hH0RUfderHtgPz6F1H%2FgehjIqXdxSxgjdc9%2B5FzztKHg6t3nWJjaEtY%2BfftYS%2F9&X-Amz-Signature=f7dcb81e1fbbda64b0be2e01b6a4f0cfaa5b487fe56dea2091d6f8164d023939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=8d8c94aa5060c92e3e612327e2b6eb507567b937ad32a0cb24ef75671fdb008f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTSONZKR%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FAnvzkUCE3%2F%2Fou9FaLUFT%2BSn5EUUoJR%2FdfJvisZegsAiABKZ%2FuTaAphPEQuq2gD7lWqvr8whzQJc2Oc8%2BBbLoL1iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1nudmCHA3jAPRjmHKtwD85k9OGADdQUDGPCJuxo2GrzeM0jOwK3RDzGE67G3P54EQnwf0qtrFzOCfMTwdMw97qJRFZsxkm36NoBU1DddEwj3b0rR6XhWx%2FDD3d3IWsMe6JNGWMn30cDaHZCaigUEgSI0bxYKheJNGe4cuZIggrWvuSDs5De%2FZ%2BzJ9TWENcVRjRCGhvTmGVAIYYTD4L2i3Z6SFm5UM7DM%2FkJarrKAnwykFvs2BhXwIxnTzNp%2Foh7oS3Fge%2FJuOuGEX2ty5v7LW%2BNyVOpOxGwCb5yvaZ%2Byw%2BsbflrT1qj7tm3JCDsyiasaMQLXYLD8tXqf%2BHu%2B2MQPiyOfZ%2BoGejtE%2B2OOv74D3dfdP4VowcFrfIGgs3OMNC0ErF0sbwompETfmKZbwhj7n%2FFSAxMmEwmVZYb5EfXobzNuMKXckc1f%2Ba%2BCV9o6mq3%2BA3y9p%2BkM7i3E7nnseaMYmy1CPAi3ocPKolhrsvsK3XA3DrK%2BLOqHt%2BvzomjDEhbdmqCYiuAbspiKKStii0olMg8v0kHZ93WJA9lJf2MxT0NXPQB%2B14qav6V0ebSmTlzpwygRXbc1N4lUTI1TIv9%2FxXQYC5JkBodlnOIRcNNWqmxenK%2FyWBThTasC7QHb0b1kl%2FwFVUf5IT7Iv54wxq%2F1xwY6pgGguJSZhxGxygjaKy9MEk6bd8UBkyEuWlRPyGeU1IaE4oLiV0STNdQfmk3UL%2FaIUVBJ2AeKcvVvv7oQpa%2Fs4VBrqSgOlIsWYEyW%2F8fgY0ZTb4Adf%2FAOAF3fcvYDPxd5%2B%2BlA4ttEA%2B2pGUYYisnDi%2B0QwG6PFuKwp4nz2wXwyH1zT%2Fi98e%2FsrRflS260kmea3epopb2cLFC4VxK4pnsYZCHQ6CBzAUu5&X-Amz-Signature=5fd0b5ccaed2a306fb2cbe7aac91387e0a2b12c326324430aaba310f164ce6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=954a48fc3c8a509cbaf0b19651defab72dcf0fb7bf03c5ffe90afb3df89bc5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=0c153623944e39113405d04866d7bf65d14fe5d2c2a2ad74b30d401bce02c0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=335fab7f5bb25aa89cae2d5ec71ce9e4d136f49e33eec7882bdb579ae5b506b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=441e2d6a864f504ccb836eacd7dd7afa2274f7ebb915a64d92ae61f34478a5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCRRT5KJ%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYTcX3Q62ddCHpgMgfO6N7qufpPfKDEUQlvuA%2BYzESZwIhAPKOAmeVkLAROwuY1iPpvlCZlRCaV1sfZ%2FDkrh635i%2BiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI53V246LbpXfkhsYq3APv7lDmLk7U0ioIRgZwx711R3ouCQNIz0YSdRFoTotsjGWvVFilsNDzvuOjdLD9wYYYwDUJVs1t8XDRq%2FC%2BCTYsp3MB8YSqgAlvyN%2FD8KnVTbZwW1v0HArbHJom9%2B8uaPRI4vJvjFiYZEXs7GxELn3h2r%2FluQKn61g5GNagHgC58bFchPNEXfGBYUR6foe5U%2Blma3D1OC3DdZYLHwhbuylsyzuE4X9DivO1aE1KBkAgz5x5Vl9o24dP4QzELJ8rdTxa%2Fq7S80hCdlpEXe1yYTdwUFhKD7h7RlylglXaXwpBQKd3kLV6EeDu5L%2FjYnC1mQdI5mu8Cqc41%2FP6ZPjhxexGMvCsI%2Fy62y801%2BNNEZ528Dg8%2BoH6UHXNDwXC5WMhp2Y9C8hMXYqiipa1oVnXd3eD0qRzCJAz2GOvLaqx4XPmws%2BMJoBumJRt%2BoFqcUSTpcb77Kndr%2B97j045TO53sm94vpGraoSgH4Rg4vvmzTfITtm8Jsj%2Fxt4UkpvZ8dk2mkfqOT%2BkRiE%2BMDQvxFt0bQt1HZZqdYiMU6%2BaMkG9aLmPm0L5ouAk9ErmPBDKdHOajbi3dvTqGqtXJ8b2hhZk2k5Ev92wDKw7qwO7OD0cFUAlKKFXS92ww0zVSARm9jC8qfXHBjqkARJchCR0LEpxcB1E7EspLYW9xcHXROXr7LV%2B7m27rlBVP97nmE0BSmsDGtWZxSxdtUxGMdKP44H47OWFQX2SpdRoWCkw1aZEmDJlDrQSl4l%2FDbi2h%2FsdEmOiN%2BQtk8Bh27qPzZ1dcA9V0puci1gdsNZlpCpxs7rWhl8%2BhvB2mJIS8KzD%2BIcX%2FbOzfr49v71lJ%2FWrHl%2B7dBvOqDWVvVBTXa9mWrTx&X-Amz-Signature=f9691422f8801d56e695dbb415625ec1c3b10d185a7505ae98699a3f7a0ff568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=dc557cef61e5f2404ad9bf3886f284b9cda47eff45010a78db9491490fa0a821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=a892a684e119a94a18b7091658116f06d77fc8d00cd8c23857fba87196d49e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=b86eb588b318424fff10d591777fbb65a3e24f312c11003f48b0e8806ef35580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=5c778272b04221559de061dce1df1dc6776657bd6c0d6017b925fd3dca1c4be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=d08ea5173d8dfbb7a6020252beb5859d1d55d6ecd9f48d8e48a17022907a06ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMITQQE%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvRSt0IrKIA6hZomFKV1Rpi3Hg4fAsj%2Fz92yD61M%2FU0AiBWMRaVEgiBf36pJUXPAd%2F%2BAPym8Jg03Ko2%2Fx5gSpKIYCqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPeWvg8V2rqhitm0RKtwDE5PmqhFhvdiQ2hbXwlhjKbFqbx6WXfQY7b9nAFVGqpetcs1BcjSLLipuWEjhAzrQXvJj8z4twiuUrBuEHkHFl1zBneTlrdq78Q0bdWVuz7xSDh%2Fl9KQ%2FESt0ZPZWyoOPX36HBpO%2FNlZSaMX9r%2FC3kwmTvKAo1Sp7HhubbLvWVwnPbgQ5D0Ya%2BwOv0R9HxeYAyKujTsbtFy3R9GfI%2BYhYkeArwI3Gug5ms7GFgxxXMDu%2BEoAdwfNTOMKkcMEiu9JtO04ApR55tBeyV2q4pkat2T3O7b4KErwvfn7KeDtRQ9ncVPMpobU%2FGdmGM2sY2tLEXLJhNKPIATHHra0X%2BlQXE6%2BZlkGvnrQ7Ppnw%2BdZ6ySJpSzZQ1gNe5uNG95AlSMVRj%2BC%2Bai9BBb3TncfD%2FCK7rlZjNLPiEO3Izt1%2B1r%2Fd9ekSjDyBbnP28XmUoHh0Q58%2Fcy%2FeDOBu0IKlp1%2FsmG1IQsRnAfLdac0hJOZ8QcFqW5S5DppMPiLqaV6IRdXRrb1IkWeb4%2BT59Bij2T0%2FqA9ivRcSBojr1ggEyL1xxjvWGV6w5lziSc8Z43rxwXX2ECnlke33qBcHz4PxClbMebLmyFsTkq3kLwhBoFLbHAO8HdqtMDe0FVkcoRL5Ks4wtvP1xwY6pgFlYZoZ%2BfemA0BvI92n1Ml5%2FxI3u7MJGbVHsY0qFlfFS3FWD4IkAT9FZ%2FapjCfCfk%2BnQSEgqTowOrE3CowEUMDPEeFEWwFVYzL4usYgCYrJJdHJ49nxytAsYRYaVAzEUhb29VwUHeINHMFtwJpYGpoGEvdI8mIaOALLh%2FbDnMxiWmntNUbfB6E2ojnO%2B3WT8EzsqnyTrIu3IxqYQ%2BFxtSkJqn6otgQf&X-Amz-Signature=a8c831befd47d3951923c886b6c97f5c96f19c6ea6bc5d28957dd1aa7a4621d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


