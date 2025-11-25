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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=559faefd0f799b2982349fadcebb62d8c8c99c499c8d223404d49a30142f552e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=32ca8eb5be67a67a9581d6bf1898a66ed640c46238dff5939475a1029a28d1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=a8975a9536fef2506009ff42bb0ac8a132b37d6d58b2d19d8bc8a5ff83affd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=a79d6d160a782880b01a59c03dbf8186ce8804d86cde26323609b8a89ffa42c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=74851e754b34a814e3204fe63cae36cfee7f16895f63e7f101d06c086712e31f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=40eed277e88f8eafad27d91fec95256e87566fe4481e9fc9c8c97ac84a696a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=1933294890572eeb30f77ff265337349936c13bf2e937c6c9c79b0015c57a058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=6662c6e9d8e4e425e019a552a0d5171d51d68cbfa3d3116089927575051a70cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=2a868e0ce60b3a2e4ea44184e93893b6e0f2456aa8327b6bf9f6514a4a568b7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=7a05a48375b620e18574ba1b0441f96347db0b50829094bc8ae6dce72fe0ddde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T6YAWIJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVzanmTITEWqDpg4aDVuX%2F%2Flc1dsNl6mJ63VOwO%2BD3nAiBCNgO13uFUX9hqBUWLOFzFTIzmOCc8YA4E300%2BXWxgkSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMiEybvQGn%2F2cVsZuvKtwD4Vq4kIiW2Mx%2F0Auw88QrJSZJjTupvafEmwH7fFe%2Fn6kPUGWp1ZJ0aUfrHcV%2Bdk2uuunaFmPoaOf00i76Wb7goKB45kfEhlQHUcqVSpTiN2WApYbNTan9%2BOWNYy37hjhVnJ%2FOTu4%2BydthLwEtU6o2VQOJGWKw7v0krKs8KqOg3e38iX7S98TKH4M6369BnoqJmiFpqIZuiAXCuFr53H7k1MKRA6fl23fxqqBpqWMLmn%2BcAac2JxOid6ax%2FRE6klOUzXY%2FVXzY7FJfKQSgnGgkPap1yIf6E7zSrlOTSOqneAdFFQ57zmIn85DUPH%2BUMtFfk9QcNMsNYb7CNe%2FmKwcX%2F4U6JnIE772Gl%2BUOESZUx5v0obM5ZS7Ods0omSUJqhqVh3VCH%2FF%2BNiHKzo2j8d8URo8OH4OEZRGt%2F2gcDT%2F4KZeM09CblNYmP%2Bhy3jfRru%2B44qG8AB4j%2FWPgfbYBTlc17Q7i6TA0rvPssDXteb7lKDPhawavQ%2F3o1nO1K0XR6vJsVJ1An72gDo39DD99a11BKNG1qf5uqRWwnLzO%2BjDViHqlJrcsYauFwDmcFSec2ES5orn5zIDBfX7E%2B%2FVlwZyt0ZCghHqNJxpgd%2BvIkxmJtZWakkmiue4nDc5JjKowusqTyQY6pgFj%2Bvav69MppoWkhcmB7lEmmFcFcL%2Btt2L9vm8v%2F5Q7vlLgH7dwEZjI3f9towTjy2WqcneCcttZFgXw%2Fs27jGY25fCeGyZskkwMBCLm0QN4qq30Duuvz3MNLZ8hnLOxJmWph6RGeKJ5Kzi5FeIRWCkjPGGY4Kg5D9GesxPmn6N1J0YRpIID42DWm0UGNq7LjnfWO0lzwxV03kg4fbAUwi8oUVJHgNTP&X-Amz-Signature=b1307913f79d56eecc1570a3c132fb1b1197e4260b092aa29a5df8c6a2d30efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRPPUWZ3%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkYFOBWrMChHkjS%2F%2FTkgLRcWoLLoIVo8Tm48uOwOpXegIhAMAhXsKWXoWuDj9hhP1twyBdEqVg1Gw3fcMKaGJ4ayAeKv8DCGAQABoMNjM3NDIzMTgzODA1IgzJ9YWqP4zG5biqxa0q3ANY%2FZGpY8seeJgWMCNH15PEa25XgiyOOCKp4dsMdhvU0ioQo0p3llTQxmcA8fzm0B%2B%2B%2Frzv0Tfap5K%2Bn0rbALOK%2F7s5p0IFSui%2B2eInFizfyuyxk2MGgygBU0%2FboVTNKN6VXVwcx6w%2BZ%2BmJ1n%2BN4RyOXs3PiV%2BV6sJ1KUs1nvUlyRoUXRfLkmH4HoMuPOA2TgGcocQ5odftNM2IPANLt4vaqGLC2p2bnfPAPNtFL7M9dj1Jh6ObD9O7ZUFH0sv8Y8UEslpQRDu7KERy7rRsuKcZRBVJh2vuS3xIPP9NejGOePPZmAa2rxhx4z2SMYwN8RR05KxlxaYiNhRYxbVLud12ZnQn2aKUbbdxQuQD1eORwnfdepivo3J2%2FaAZadZViE0XemJBWhJmawnEhStME2Ks%2BCqZnR9HXWu2Dxu16Kg7QxlfoadrN7B%2FYdqpuJCsEIV4iE8r3Eq3xZ0KcE%2FDBbb0JL9TBufOd%2BOm%2BYYCJ8ZNLg%2FYUNJDAfd0khUs%2F8lGWgenRkmeN0oXd7TvULKg6LlnaaIKqvrojxJgQ%2B7lBR3rgoqI3JtAG6gh2CbVVx12aMPn8bqtAZ%2FLla77otYjuInuq8tCjF5gdgDbglIefjKHQ%2BPJglEhrQHcfrGEKTC6y5PJBjqkAap374kF44pp%2FI9DHw7lFwUVXWwZyqIgya%2BV9%2BaCcafgjNnU%2FELVI1GRAE2Y6zeWW2nLZl4GaMkciPS9DTCcpazQPWvzuVtnqPHccawnkVnQBUgcX%2BigLJnXTcDxzwzlNVt5GlmiMgv9480UKx%2BMa6yKGPLTRSgEw3P5XOwHsuKSOSXe4YlStSvLhF6VjoJDVDlkpLjIVkFDYTIZhMe%2BloAG215a&X-Amz-Signature=568e8217af5edf49f3c068412641c65e1ad8ae8b4139d389a1d0d9d589394984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMM7G4QV%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8TPeA2n83Q0DZ%2F%2FrIFL7R6d42LwrvHGLT1XPNBCyCqAiAQ9aLbvco7OE%2FYovSF1r%2FXXf%2FAiM%2BkyslD6pEbxV9hkir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM0aHio%2F%2Fy1h9tIENlKtwDk6TvEBoDOr1E0LKW57EFX7oKBciZnaz5Dm6rMTIDec2RhZn6Ew%2BuyR9cxeJWEUoASARAa8sMWDuLQDHGX0ysoaSzUtAfQk0LrV2JX6b3liKrXY%2BdlZBSHXxMJGYJlz6FWGYIm%2BlwK5SNKKgtH%2BtiUzTnXjmQYr8aBxNMP8JXmnWTY4Km2s%2FWveJLGDd%2FSPpXHery776uz008GHku8pxNdtdk5Gb1OsJXw9d1drDzMCmzIzyDziVaALk8irgkd%2FN41vB9PkfyCdUDmzpFXDmwx3WG7%2FaemK6M6PSbSJhWbvjDtgxjHr4YyMI4Wjmf9Boxw1%2B4jV8WGc812xea%2BPi5ciiibo%2BDrLKlTTUeZD2nsKbppaI%2FQr2Eazf61vXwOnsW4alr%2FPEyOd8xmrjE0eX%2Bbg4291EMBiZrmU2%2FaLBF2GseXpS0tY4%2BKquwjNpLxQwqw%2B2vIvffkVEFdZiJk2YYHBsW8rVVlPo11FSGoZI3hlClIToek%2FnFdBn8GAZv%2F%2B1JnXg%2F3Hx%2BKWrMxTlJgwMCX15ANWBWnDe3glVtnx%2FtqDFNNiVg5HV%2BpxoRBQAwfFt38Ziugsf86f7MtJZofae3Iicsj1s7i8PZl%2Fc4cIY0JELWpx37Lhuuh5%2BfQgowm8uTyQY6pgG72MDPcClXMr3afs62aYmQ9A%2Fby%2BVvCWv13vS2pxt6gG6LF%2FhpX6vBzcgzK04d29j44SPZreM0ZRQKiY1%2Fq5bfodT2Q7tSW%2FEQWA%2F1LMQyReD7vNlDyVP5z2Z9FFXRBm2UIbb7PkBnM19IAz9h1TbumZVvuK457S46JmrCcQIhP0Bj9AUAaDI0R5%2FQSv6wjnhndaN3r5pN8PQdeogKz4hnWLGrNqSV&X-Amz-Signature=80a8eaf0a11048c3ae59a1e3f18f2573dd5b5ad3043c9f4d955553e88c318f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=275e1513911817dbaa036eb69b46a0c166efe0a32b9f7e281b4bfae6134ffe5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F4NL65R%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaSho%2FZ5l470nxTZjXzH7nCx%2BAxQgaQE6eKOYLZMSC6AiEAvrTI7JeJXDmvw8IfIrxqbYdi87Whs6RYT0GNcN4pJ1oq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMr29DKUQh01zGTH2CrcA11h%2B57wfIwc1Y%2FXwVqzcezEJRfB5SMvBHwZBxV1rq%2FNNeVr7iubJmavaapDl%2FZIdYYebF7X2mdg5t4iYHAkRB6%2Fw3WNRU0eLWqtnhAD293TCtlX4le5AGo9ywGUZ%2B%2Ftu0XB5x2N7MRUw5xMw4tMj%2BwddQqIGb%2BCWTHGVFdB34SE70E%2FGlttDWinrW1ViOX4Dsfy3iVu19GfNPc8UAOQWX5UR2ocn1qOGDZRHvsnN88Kex12XmldbelnQaJNNdIUmAH%2FV3XaXSEIqz3rehE33bhh9Zx07P4Xxq%2Bt6X76T%2Bt6vQQMrQHW%2BlZJ7TXGzF2uscx4kkcCD8bJsd4A5aJNPknr1A4zk%2BmM7FsI%2F%2B%2F4PG%2FzRj%2BPFYOo6M7VYxISH8nqzqEmCzyKDsYoJT7Gh7uqFkLAr%2B1Wk0Whw2ZEE8GSPpxO9irPNSd0B83dEq3fBea3H%2Bp5Wm%2FIymQUFom5X546OVt6Bb7yjnKBnd4qzDSikuULbUDxWPJZyDISUrJxXybvT0pC5TeNchj7emGyceOPqHQFnaihJv7Zhi%2BJ8yrGW9pVMj7hGVOnG7WPtHMpQ%2FP4WvkMWoUhg0VSPcXDm1ldMtEVeqg2kDS95JfeJGEsLpZCStYCb7pNvD%2FuQn7SMOfKk8kGOqUBX7E%2FKXCkhrnJiDWqkGti4tblR6jZ%2B0%2BKiKTgNhdBILPenBGYSFR5wfsxxygqVJbBQJozd2rrCAlEjW%2BvFJmkPiP%2FONG%2BxzixWh%2B4wPC48ovOL%2FLezalcZado9NbMiB8cBLRNhFlfgEyPkkICAA3ob%2FgQsl%2Fz8PdIyyIMAl51KnvlADD3IXAkEwtNwe72HXlaIkhNXvLM%2FOnVoyBeCwp9rm3qG1iV&X-Amz-Signature=c5b3ff9bae6060286f051d64143112b4a4e5635a94467154b245458acc287d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=1713b2acde025572f8406c200305b65a5774a5feeaf0c769e1f17660d3758c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBI6VRY%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6MLiyQUNzlne6bK4Rw1cMLvHg19PUVOYpW5rXz7DxzwIhAJQkePKv%2Bb76GA%2FGFoskxp3hLm%2F5PcNYEhULCiw60LgGKv8DCGAQABoMNjM3NDIzMTgzODA1Igys8P0KOCls6UB3Rvkq3AOHkNkppEU2HbLABxcvcibiEVlSTXJszC2wDiMOHBb6OFBS9eydYDQXjqaeTA8irA1idSjaLyS6JHAWP9NHW3rsnOP1U05%2B0JHv8U8tvb8%2F0zTLijf6SqVsGD0Z69%2Bh%2B0NvW0E%2B8ZIV9OjMiHJYZFkl7d0L9A7Fjt%2B1%2FpWSwg2obm1rQHZGfdsndylhi90%2FN6g9TIG07HWOFjFmQC3gg636OU3t6KJDuTzXwpKSWap482l8o%2BwnO%2FUK%2BgZS92k9%2Bf66tASj1L57np4UAbwmCHriRRs4S3oXWfJtpJ3vK3FjXFTGilfPGb5XD3FZ%2B40dHZsMnCioeFs5ydfKIaDk09Qi%2BiIsV9NvblCsbLw6BrpCSIR4a%2BG2q8Ymloy9GfTzLpzfUNLD7OaROQfErqmbuzfB0kXfAIzuTWiLd62qztWfXRbF1BVpfBY5WsXn9D2fXxPgNKPuY4NNOkFR81RmAHkvQ42JQf9vQmnmyKG58Xge%2FH7htINw0LJ6cdZj0T7Q2%2BnQdqPwZbfwYCCLoAVhym6foNXl8FTRJKH4h%2BxctTameJvSfRfP7In8FmBVFE9hPM63%2FTGmFct5WJRniMMY1eW0RWPkkPdBw2vqUVGFhVkG8OvmGQEBzn6oRDJQRTDmypPJBjqkAfZes6zyFJ4eA9iei4RIWAU8IF5En%2B0belh5YH%2FwXPpK39vO2dRtv6j%2Bh9Dc%2Faqz13zmyGmaDmObcnVgvxfkN4rOPihfrA8LAZxLOOdNo9remBmrUCeg7nnoiz%2BeMhJf8ExN3rwQy61gOBrHT8oDF2BQPePDULiS8qZYWt%2B01b0Amx6ZWIjLuqwEYdlvOEL1DH2ROuDg50o1d25i%2FFJmA0lBkVOd&X-Amz-Signature=4672b9119ada5e1ed80f04e13ca408712be0993c0e60d951f574d3e711e41a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=449ea16f3b668bcae590249e96eceeb7c33fac0eff16488769d31136bd77fc24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663OR4GIU%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwlet%2BQjwxy0PFxyAaTDVgUKG%2BL%2BfYLRsR2fjQ%2Bu16SAiAHtE%2BPCM0RzwWOpiz15xDuZ3sEmJ%2BzP%2Bhzy8%2FGXoUHHir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMK3pObrxw%2Bu9plKpIKtwD9QWg6VudCzljFI3E3xvOwNdN%2FFjJq0jF9KaSeIATEJY92TbWNo4GXYUlBGffoS%2BGsxHy1IBv%2BjtuEacn%2BDxQz9WHC5hZfEmGdVOqBl6SE9JNvU8nHA6Js8dKbGev5UtJtFlwgo0K1Pfa%2FlR9XV6%2BZFDGczf7qoBOSh3Tds%2F%2BY48SPY57UJu03dKNr0ezYuw2u0PW8rvn0UrhjlsZO%2FnpB77t1eLz1aVOQ26XuHJI%2B7QpIY1aZvgij4aIJtLLFOuuTSDSWnzmlCzySTN37a%2FETM0q7YH0fabJICVBzrLuZsJQupR23K5eriyip6BniGD3H4SExcLiyecxPq39SIOVnHCN9vpikdkyfEh8BGKctweQp%2BtgX4qVYrQYB1NN%2FiQgyZzrVHPpPBWRcd%2FHbNkgdqWajwpzTidM3%2ByKl2Hpl9hRUR3Z3Y5ZiAR2B0ni3qnEvJnfoELIQgnV%2FJ9L%2F2If3AJ2LSpDizMorV9i80uFNZnq92v55OgYslwCs6SFGIeh8nrCFEgdKD21tsRx%2BUMlDMG4UbkpIHaDRc6Q%2F%2BAfJn2M5DKwt1dMQfj0MuFKYuk2ThpQOK4cmMLR%2BCJRjGDRCueryzppkHotnO0JWKsqv2xkGXqDjR%2FRtrrjK3wwg8uTyQY6pgH61sjNNlPHISTN%2FogJRjZ%2FyV8eu7wi0GgOX7xsfBnc05Xo6ud%2BxljBB0cr2x2DZWyTnJW8COYXSAouUhnTsuIMmp6q6W%2FAWLnO8PTRXqkQDtMk1kN3Dvxmi3kdVeNbbBqIPjHpjurQ1VJLxrdmnDPLCvzuI34OUQ2s5bQoxlOxpXeTqsjH%2BJZrPVDgPutrkSHUFhr3K5CUxRGYjo%2BMQUVEjlWNTSjF&X-Amz-Signature=5c8526aa24d2ff40ea355e82d3e10246113aa3d1e26afe2d4d79de2944830af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=feac13d209252e1f6b9fdb3a1b3ca2db3a06fccc2df1061c2cf992531f18508a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPZDX6H%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYgiHW%2B%2FMOaCyKiy%2BVSad55cPqggsBb8co3WKkxYtrIQIgep7%2BAvCTNtNyA%2FpVPwO2CgZD7p0qzmyOpj0b%2BowQyo4q%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDAxErlPbiJtigfsD%2BircA%2FLtsSftBf3o5%2FB90RbLkwpO%2BrHnhWTPeX6FX0KfdT%2BTCjhGuJnQecENKYootWd5MtlvPpySaIXBetR3cvQRRzf6sTws0bHBV7oSivxAjAAMViAzmSfeLFvqMtWrFYfH21MR4hB%2FQWYfRLWZLxjjvOvwqmbuf36e1Db4Avv16AJiHVAMp9nJ30Zrxd42PgkI875x3mlqXrqC2kqZF6uNJRPYa6Lim8fv0tGDpVXw0ZcrHWAaK4hMCxMUPfE8SUEHYsEQN%2BZEP05xnlsQX2TdFJwW7%2FRr3GuzEa%2Bk7eco7NIn0DZrxmJ6y0zTpzTUCRSvzed12S20hnxbQOnENC1worM8YXuAHJDouV54RUA9KsKvdVdHoFN4Dec3RzPV0w3a2bPHsLtnXYa0u5mZ7Z5UK%2F4EeP2uGQGiP0nUa5YgdHTRZiyIWyzDfNayutMh0m0l2WVHupUu3xgaLtmjZGY%2FR0T0y9sQg09I6kVCyGbSCzn%2FWhjIeJVtX6nghdZ2RzU8S1t9WEySJSjMhDYqrHl3gy0dUl%2Fva9%2B1y9xbmigHn6exl%2FQrAnDyCBX%2BzcPLOzsBi1ZhX9DoGj4cHPSxZoyAOYA%2BVOWK7bwWk8uaSdJaDwE%2Fw7bfOcaskFC1r35gMN%2BBlMkGOqUBMUqb3U%2BpRG%2BmEX21IZSDIk1zD1e9UFET5ZFEbV2vavlj28lG07%2BnlRD%2BHCl63OcmW3OabsMVhEPOA%2B5mxaShhC1CCEbulVpx6oBXpFrHy0g6ZclWsr7VbHuEZTKvsB2SAWv5oNZw4UCGz6XpLQD3WHbGMaVTxeHKkyuhuIElff67RN5mJayJKGQCCq0LL0Why6ompvizd4h6OoxBe2QZLRN5gjvd&X-Amz-Signature=849adec72e8d4715b17b0d4aa3b8745c798daf43ed19cea20be3551b7d03ee93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=a1900f6f1f140ce4de7277814b813b3147e89fab370d7947858934c82e964734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPBAKHJ3%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T014000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQzcTUmNRTrwAWv6kQcQO10lrr6nNMX4KRLR2TNSmUZAiBR%2BHp77YRQAnACmew7Mcf6pmNzuRDZ9ONMeAMsE%2F8m8yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMcFvaPD4Wo4og15LtKtwDel4fxo9T5l5V03Onr22fvzaAz4flfVQwIEKCovxUG6hb4MjVlKC0c2T6wQAnVdjGGlXJSuRYhl7rF47X49keRF%2ByZicjjzCDMb8jus33t8v742qKE0AoZpQYrmtRMrRX4Z4XvJ8ugSrZMJh9QMbH6gn4NzEZNAW3iVSQtKL9D3p8%2FsHCndeXNV6DVS2AGEjpZPJuzRrDOSkSCIUerBw0RnZjZICnMPtxEEpiDnT8MvRR3yGu2vdXP0NxnqzPRJg9MMbabLWPlOcx2cxg%2Bc%2FqcYHeEJrfSn5OXWX8bXBlY02EK7ppN3vxq9eT%2FsM7hCvc7fqgeYHqXcYMDjYrXDtdmxBxAzLBTAjE28atu0YJbZnG8KMX0H7CtQH0eOS97aCsU5yf6WK8%2FREQoGXHc2IHvwJNAhWzGAv2sEmKzsBCvkokj59gnthq0H1SVfPwEOuriMVJWk%2FEXRmr%2FvsBEgD%2F2frQXbzTp5fw6oMThY2hv2SLEiLwAAfNjFnprnZrU7EcCOr9WBoQ6Y4liW1YaMPco81GhMN1wc7uZJoru88O33tnJfexrSr3kYdgBA2niFEHYpMgVCR0ifwUYlZto1W7uSAawXWZnPzKqma%2FupAd%2B0R63VRu8aLH4wIUeYgwu8uTyQY6pgEgQjw9ezKfvGXoW0WcG81ju%2BF4%2BGUpg8sSrIUKruBChp0L9pT7I8MOyeRQIviTs%2BRzF0Eqr2YJLXheSzq5U8u83WeO3FN8tpx7F1jLKxlS7NGcIfp5gsCbMSgjNkG63qwQmURXB4u59yaeIW7%2B2DOeJnLuC9vLX2lAKx9W43n2149OQ6ifFBn55Afy61%2BsDaR4XZg7Mq4yVUXvDMiKZrfDyCy7xSNR&X-Amz-Signature=f6d073b1f7572fc694ad9ac18fb97dfa37f743238e7824370d63f78ac1229718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7K3WJL2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T014004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAoCBdXDvnWp7bdsJjiiSSqeBzo7FfhTfY09GFz4GC9AIhAJEXYKjY2qItJT5pAbsRt8DLf0PISivfTB00Z%2BoKAw2ZKv8DCGAQABoMNjM3NDIzMTgzODA1Igz8IdZY2wp%2FqUdHO9Mq3ANHC1nwyBMQu8ntJmbyjeuYHDl%2FaOopa6xNWZLDd%2Fyn28GW6ZPuh1YVwC%2F0kKjXC6zO0lGYCI48MWk%2BmgRvpu9YmnbirkgmEqLnfQgri8ZTGs6YBvawNKfoHjEkk3iyeowGB87%2Fa3NjOB%2BPJsIcexxB2bTkbZ5dA2JTZpvEk1jfgDhsys6Gf8lrO60o4weFfEWF33NXyC154Fl8x9CXN%2FFekiqLWuKho6IFKPa%2FkhJ%2FN%2F3lMDBzShaZi0PvHBdUiwXnc%2BvUE%2Fy3YtlvNNt5sPfrFdX%2ByyRf9uHY4CF9DCMUxr2fF9H1znkDpl4CzbO7oHaDSLF9v%2F3HrFc2LbgrgAYnQmQc1ZvAunN5QdLJwrV5%2BtSmJMPUxzlk6CFxYLvgK%2Bf5zuK70MRLomLHx7Xor%2FGOq3RyEz7%2FB0M4Zksnnoasb0rzJ4EYmT6b0dEzafVdeg6yC%2FUirUbi1ZSULPE1GFsw9ZA4omTSwOs7nEjxwp9Tn%2FMi3uzeaPblMEmvBNXyZZcL2yriEJU0XxKWIaNA1bZMdS5HYJaSvs74tV1BaKFZlVYQdQv11xwYqARt2iy5gExgHzJSaH2rKW7lDTXC7J%2FPgMpsW%2Bpi78E4mMJGifQNsQszRaHGxoALYTLY8TCxy5PJBjqkAUmd814tCZ229QgZZGr09KzxKY4%2FWcCOFZRT5XEsPySyr21SGZrpHAsn86t7Xy2XAo%2BJHkXq7AXQowdjtOHf%2B5dygxajYgoV0DMo0LtWlmrnMJdvLfgBViWZxcw6lTqo2Kvb0lsSJl%2F3CUgGK8DC54DHMo0%2Bbg%2F4EyIwEna9NQQ%2BmiD1KbmVDywQ96D2Wh9TrXSUypOMb3vwDs1t6RBdysmv%2FZqC&X-Amz-Signature=0aadf247e2035a303e916b36087be03fe9da090925da6939775384874ffd8c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WI4MSDW%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFo7kQ9aRlhep9Mz9Av%2BcPXtwl6bzc8P0rfJF%2BsupirxAiBtD58BWxP%2FMHPFPUr0G0FNuIUa46%2B1vPDoyLPlFMeDNSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMbZdSYnhUVX0X4ANgKtwDwy6dB1NHUX%2Fw%2FaoJ90%2FHUC%2B4hGnQC%2BGvp64VuvmP7ZRHGcKVUvZtGcqbleqOAwZhaQhf7UZdcO0hKz5BYfRFkY4O4zx1K4tU2pjRaZvIkjhsDSDN7XT7LAN1mPT059UCVz3q5NIp6GJHd4QVulTUebeLkWTw2wFSaW4C5DODSrtowVNOb43ItcCdhcTRytJbMgbyOo%2F1z7k5beqFRMCtBGflDIH%2BYlBwVZwxlmBT%2FJi3VL2KHZ7uZd%2FxFtJgjtBS%2BkLDHQZbXWbs9nrMMGkLliyQ6v0X3XLKPkhap2hIbN%2FCFXnVr04WVGA8K1R7qgVzq9IjQZhLzuhaTxF4svkOx80bf9CJWiJzpaYQwllh%2BB3DM%2Bhh0TcTTTUQ%2FDgWw5Gm5DNcAXFJqI1dyXhpvFWZPCGeClj6GAFI7BcuxhK4YrlpyHPymb5PpOLQALT9AneNLc5LMxSElfcDbXz7H9p9uFD1O4nU9CuOiHoTQwMG3%2FEfKBqglKI7knGGss7GhyWI1WQL%2Fg2aZ%2F1kQeOmiK8i%2B9w2SXdn5qHayNjVsT1epMuPVSxcmj9JK1EAbcm3r%2BujEWzZGhBGKpRGJ9tU0zOE5eB93C%2FW5RfpMnp87uJJu2c%2BsvxRKOnQBbqQ8U4w4YGUyQY6pgFFyscn8IWGF4gOlwm%2BzzmQvaZi71vfmmsYsnpYzeCgPRLotnq2h%2Bs2iRw%2FStT9ceNXNp11N7zwYzFoArHYB%2B9EWGVac4xvaKb353rn6csM7oS6jOJKusMYrvxZ1vET783fNTJlYABuS%2F19Iue%2FGMLaPRAF%2Fso23hJ4ZM9g0Z8wkNVxTdxt32kqWQUlYRUxgEHKhmUCiku1WiOLnrq1c%2B2eZnR7IZ6a&X-Amz-Signature=13846d13dfe94414c7c67b2f3ab50fc830091160677b232613eef311aa55a83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=5c24594c50e83b076b71e803c46adda741134357a1e063cddb8e9c526e591987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466245RLXZ2%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYVdI9hJjcrZwuI8Fxuf3%2FVLNcgNp5BuhxWm608Fc4dgIhAPBIQIpP2SF3kYkuj6FXvufWzp3Ysnm9KAQd20EBmaxhKv8DCGAQABoMNjM3NDIzMTgzODA1IgwEQTtayJWOzhYbvgwq3AOGRIvDOexxFN0Om85ss0XUW4sP0GPzsPcdXNA%2FKzKt5gKlSMS3c3Dvjt0UexQXdVBTKkmxNbnS%2FFyoqbaTmI1h6GqyX0r46sB22D%2F%2Fw40zD4ek5H%2FJMiTLdeO4aJXH59E2q%2Bw48uJQ2%2FWvbyEBzQIFqbpoEEMAni%2BHARiAG9doV30JX4z7u1opEZzajbk4%2BnKCD8Vr2c%2Fniy4z0B340tJe6nfxZkZ2egHtgMScfBACiOksbTAz%2Bka27PSoSzMzPTyxQ4v1rQw6k9QareqFT%2FKcSlEv8J7HRVPGxl8jzMKCm2UmKp0462TGe3PQkkZ%2BD0BvflQAJIcJNIJSbHWFwN4CXn%2FmW54mdPmXWa3vdqzYbJSwLcFIrhcB2gtFmQZTnXHIXiDnCnlgeG8PUK%2BteZGpi0yidO%2BhI9YFFtL26RUrCbzs7lQewTsXV%2BqtrfkTBy2QQwfiqW99vcbMBn%2F2beq%2FbzDGEHLd95RpcfyDU70oCtbxhq2e%2FTJvrG593xJebi1KkB8gnbtaek1%2FtMj2hT6uW9ti87v%2F7sl%2FcYqg2CJRyO0Eu9%2BfsiIkfKa3r%2B2c9v%2FAzVsr1Fpn%2BjcBvn1Ut%2BjOADVy6umKk71%2FGky5hLEQg9G%2BWMu2dOUR4aiDFzCEy5PJBjqkAdcOFm5dCVtA4EdqRLNmo2JmkHDLrAgB0nySDeIzkerVNFZeZTTYzQ6ythXGbitsV0pYOF4RxPSilXCwk42XUM1Icv6LlqMPFHpV%2FlzEeLYMWEJ0V%2B1YGQKf7WPQw41MjDDtz5WD4LcsN8PlwjS3ohsos9N9%2BXHYrFn01B5hC%2FC%2BVljOUPMwNoeTvF4q75uld7Mr4EYF6Glx10i5HGVckmrlHJOi&X-Amz-Signature=4cc10552be4bd709a833ed55376f888379da892d3e57845bc6c03ff45aea4fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=87dbe295d8285ec5b2bc8fca92dd575ac90dd1a14bb2d38e2ac9b49cccbf1879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=9c7435b17bf569cc5ca67dd4bea147832fcce24b0aaaa09dfdc81309e7f5cbc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=ae6dcd92ee88c299922e229da489392ef5e04fe12c205c017c0ca2421d0cca1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=9a7788710d2cd53db3043a707a169549741baec5fa16cd2d9cf3d15a9c900c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPYAYZPC%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T014021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVaGlyzb7efDkEFj1kv5byTVUzOYggMCYRl3%2Bi0BtHogIhAIeqdLZ2FO6stNZcILLVzSZh0%2BdyzTgVPmQjhgS455n1Kv8DCGAQABoMNjM3NDIzMTgzODA1IgxxZ3sTz0tq6%2BwQquAq3AMhw6IrN3LO6hnPHim%2FJlO78AOdaJTfkpYYEpuwYMTPpLG2qgX1m2hOUw%2FRMaNZJhz48QJEENL59cKfL4rXzeAC6mwOYH2pocScILBCaI%2Byh2%2FWh9G2lhwUS931LILuBFAcqjzr39E5hvIb8NiMezb8CiKex1fOFO9ARRPelPEuXqeku8UkfmklObSV9OPnMUB05kFeoQt7btNCzDP6mlor3eS3Ut15eFSC08Zzsil1JktxZHVKFM7DOfW9Cth1cg%2FwhSqGgLHX5bJEInHlYOmcJ3%2BVeX29Rwir01P5aivwa9vMSS9LtxhRfxo61b1N%2Fl3yQtcp5T9q3T1wet5oVBbzgnmHNJVn5ROVgmhmJ%2FMKiUBJMRGK%2B3NWF4Q2ectmzKmEZu5dcqzGtRDwvV4JCwN%2BXNyRvHKDapDJGtvUPln2iJPCHpBclX7c6hGHxPV%2Ba9jAKpVjb9v2ACOznW9RsFONRvy6i1cL%2FieP2HasXRWeXLjG2%2F54tnWdH%2Fzz9ouoI5xg%2F6Wmx23FBKQK4xSFWxDXCr9XdKlzmcy%2F6TNnpasZQUh3n6v1S%2Fhfoi5znNtU1LkOf8V9bCQCW44ndYI5A6LuGpvXVXCob%2F5J6P30tUCfq2G023Hkdo%2Fb4BTZJDDRypPJBjqkAesS48HEyUCk4elXcTukfNBVXc%2F%2BslYrFic4kCe4k1%2FM2y1BXf2uCzIA29Yd3iwlN%2FNVNd3Or7qgjTqpDQy%2BbI6aDef3jZYtd0242BZHLgdQwGD8DldP1K%2F50tT26vndIeKbNwv0muKiQdU2z79Ox%2BogL22FgKVzAzgZZ1BOu89efgLevfpL0K64R%2FPGfSO2hoV%2BqLYLlpNh7MmTjzJWtcQQcPeq&X-Amz-Signature=12dbdcf4e3e301522ac1573f6ff9d0d0eea34d90037c813ab473a3c614f0f409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=9a3b124cbf5c8870879d63aaee5df08bf7e59870052530541dbf5fb43668bc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=5a8e8d8a1373e7277cd75a08448b3f14a882c65c6f98819713d9d30fc83a060e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=ae6dcd92ee88c299922e229da489392ef5e04fe12c205c017c0ca2421d0cca1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=5e5f125349dc540b596ddd8e8bb7274e5103fcb0e9d78e80daa0cb756af42993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=13fbf44a3a05d54fa5788781cd98e9131b510c566bc7bf107caca8ee663c6e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ALNQD6N%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDe2tz8EejDnxgZwR37Ql%2FjNYJfFtuE0EKwRkmtv14LYAiBs35KFDTg5fLl76EQRFSRv4n%2Fz16i6M%2BYFdbyJQEeM1yr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM%2BEEU9SvZhjwFBh8aKtwDMkTAMIP0uqvlPCdzpfWkPqnK3LQCLGHc9ai9zKJcD3OjwhFlcgDDD7NISDRXog6%2By8eEaY888QA%2Fu5FdLYNouukrBTIP%2F%2FscFN5YpL9CK5Icw%2FYc7Gwk3BtaB1Y%2BlA4lPxrsuNTGM%2FSIXzlDjlRin3tAXkMoo1fVz4J29THWZFhfZ%2FOryuCuxeOMeBWiGK0r8GPAf2TmOQby0DiQRJP%2BuDGBnIe%2BTnFn%2Bqy9rX%2B4hH3%2F%2BNhnnaWudV4VcpHIVhEKYD%2Bw%2B3huCbaBEzB8pZ5OpgBuux9Iz8iQAj5Iox3F0Hfc%2BuGIz0I3N8ptpZcnEEG5t1wsNSI63Pdx%2Fq2yr7kv1scZ3TwRDRlayuzC6zMsOkHCo5VfRWUMyHDCzdc730Y5vnGvqHzXuG5aING6c7ylSc6sFN4raDPgjECzVLMp57SlJJKMA4oAQInRz8BshBtsPLh6m%2Bj41YKxlo3Twq%2FGybJJ061%2FyC26b%2FvYeB1Ulu9mhnYiKVraXNHhuDRBBVFI4NxQ1eF%2FhdatQ1d0Qf92eGWFZO5eCyuoAgzCb7o5oZ0zah86QN7VBt6m99tB75OFtsla6%2Bt%2FwGf9iWeDGAxs5u3d8jdVmwa6hohbCQEhAOu0SF4Q1U6NpnZnH2Ewz8qTyQY6pgGkgZ96zigORRlvZ4WCj93%2Bx4n8WRmJVoGK1c8DNT9jz61c1QuNjEBHos7MRVSa4t6PMR9uUE7t9nTJAQxU1d%2FwPl86PEnumj2eIy7pSgkHfb4sLPHPeXkMJy4PXRi9ZYomUMP7f60mPOltmjgdcp4fydYVc1%2BFe2qpszItsUO3lzvVaHAK2FJQGGWKJPuOIc0ZwSLHTW1jagHRy7XDMnMRlS7V%2FJAK&X-Amz-Signature=a20c2270d678362ea6c545b6a2ec6ebda50f8046c34ca4ee04b6ed9ec09e660e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


