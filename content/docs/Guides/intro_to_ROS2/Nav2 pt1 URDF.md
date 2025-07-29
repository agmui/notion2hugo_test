---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=2a537629e9be1d152def4e978066616fc2ce09a0bb0009c2e45f473020ccb65a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=943ed99613a3b414bc2fc2bc44549ecfa3648b72e60a0a88ef0371c99bb41213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=5c8a3b3df647605d6900eb233f031f4548e1a4b5ee7d59aa99aa96b087cc6c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=838354d21e0da6293a25dfcfa516e24dc9abcaf4c6cfc5aba7bba7a8a5d05f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=9168c89b70502a2fc6caf4d4311438186579a3060ad4f582d7cf5a235f060191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=c8c1a820b4b95fd14412b475c2e88b4a1ca352982511005d27edd1fd5cc22e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=075f82226270af5e648cddd5f414491ee68ff3999c99557b770de3b4411b9350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=71e3c5626f63e1a02e5ddf848babbf0a7016863624cfcd86b1c1595b4c4af457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=22139d4e922738a86c4bdf9faf2b3887c22554e60a0fc0099fb0f0f14b416afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=1d1fe37b8a680f152f646b1ef06b5db0407f7dd9925de4a51e659822997ef2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=1ce828f094e2104525c1332a0c39d406c2f974bafeab63a9f228f02c7f40f462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=fba74cafb48b7650b99ffd885dbc5357e93d2431e582e2b062e29e5e13ac59f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=3de140d6550ed736e0191b201a5ee7934737b70a8f175400c98153933a3e9a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HEZCQWM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGOE15Ijzw1QOUutsSTqeou%2Bx9vOhuakVY3eIKD5uUmXAiAix2pim09Fczf8lZpPMDerHfyEvUTEeFOaE6%2BN6OMwCCqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo2V0m1dZ7uNvTB2FKtwDa%2BBpa13Ex8mZrV4boW%2FK8FIHd3%2Byf627NgWcuiGfiwXVKkV8Gt30MlrWpmx0jPDyhPbPZEZ3pVnT04XsrBtg%2BbDFLe7Sdj%2Fj0xVbDuHKveCqaujK3xQzUAvlJY4DNBtAVFM0IS0NCAT4gmBbuXkcQbaaqaxcxU2VVR9oAtjMgKutZXWLjPKoix0OXHMntfwAq6THybV2EYfbgXVzsnbb5siUwlKDgLNVXjKOvKFBLDO2r1KtiDbtIMXQOow7fl%2BpMQxSzVmV8EiEnrAnTrmkGfHqTMh1yJN0qdODsJyLBVg5Su67wi%2Fiw%2BFTjO%2FjBjlJq9k4AJE0WfJbRGo3%2FxNQ%2FeqQ7%2BcltY2Wq9HBl8I2reTlziCL1oKM6urDqJd1r81KC8ud9g15IkozsMMxz4fLdh1eZYJmMWP9zNyjueyO6OzoUg09Bvm0VuOknxhCH%2BUOuIrJ0dEoUZ1DoDMGEeNPsjiYauvl9GBeSDYgD3KVuIf1RCezzMcy7%2FanvZ0VaGAERfNoHF8B5ZWoaM4l2tkCDhiIwBO%2BlIzCSg5QIxppe%2FpImcQfO%2B784Spqmb2%2FgVBa%2FsdY0AMISYFWIzJ%2B4lE%2BsG6hdHSj83qePAPG2O0E86rZ3IisPLV4rwNDGT8wwrGixAY6pgFNgr0WXxyBR3qrFHU7b2NzDgi6fhCO2IpbdZItsHPwam8gcTLDZRjVqg4Es4rRVORPy2QVZ0lKeddQlQ1hohVnnSWJMbjxNURF9DC3Kx4tavEz8AHSYVtH62r1CRaQfvF4FcHxlW8TVVos%2BWq5zENqelb84xb78LqQU9jVE6m21AjhWoekL3WRMIgN%2FH9Sc6hljWWK52kNIFO5Y1CGLein%2FV4brACn&X-Amz-Signature=751fdd2bf8de1ff4ff7a6d21f2413bb3e39f6e103b98dcd958e45649e86e7542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=e92fa2632d59c38432b0dcf536553e5d3c32b9edb4cce386fa8868c0901afaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=fcf1ee7a4852db45f14d8af9db1412ace699e5f7c3ea1ca79b52b3ee420eba01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=b9e998d8e0f5183f009c7da69c159d08cc69822d1fac38e4bf9f3d4e6d935c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=4bcce9f218551e6426771e6b5782cd046dd4bda1e7855f99f00fc37da85215ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=5dc52b38190ae9a86bd6de74f1a520def3f38588d47bcd7600d569274b0d6905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA47HNAS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIE42rchLUbeuxxW3eZEa8qw9UmZmKL7Za%2FjpYi%2BB7bcgAiEAv8jqY4R%2FKOYuyRT8vdWoYMUh8ov3z5UqUa7UlptmFF4qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaJBvwc2Nt1sYlxKyrcA3CwA38DMeQ5Mm1lkQ6uzEggBXaKCRFb%2BF4lR8umCoo1gXU2RQNAebUgotb1COJ7I7aNRa07RYEU4JcNMsBcYdsUaXvVQVXgOj17B%2BgNOqfFP2NRMOnmRiwkGesnHADtfvZppykkuIEqBRA2DGcO29BBziTw7k2PQnT6k51R4vUlUsan024p%2FQmeqMk%2FGvByvukRBxLgxhivwusZpL285lIdswzuE5YbmnS864LkzAC5y0dNNb8b4MZ%2FvzZuIQpeeqxOaiQr2s5tIxH5xC7cPztBaJevsXyRAUhv7dOsVRpWyeEyJ5w0DDawUV9o64PuLYHzNiVv3NGCTHGAkPaknNmZHygn795sc0FrJX5I96wJwcZbeCqwqjM4R5F%2FZ%2F8a%2F%2FkGXH8QGMSXzhq12Lf1z3W1ibAMXsH29YkNQYgGaQBTLMLBVtk2hQ8pnnb3PgdbKNwzZopKvNbzjgU4DltAzcEsplQeUplv4J40P6qLOfQeJSXNYUZZxdA0y99HYeWOQ754D1yw35puYxGAtsEJ3JhHAIEsgcTVcxUghPXdgMEJ5lcUW5QrWGddUuHq4Y9QeystfdH6OBhDF1WNWjGnBXGRqzDXrfJ5z4FgNukD1hbe3eQM%2BIozJbfD8jRnMOewosQGOqUBStg4Hnm30mfvK2HcQqxj6o82%2Fvr0NCjG2SNNW5Oh%2BKLNOMDt3iZ7lKyMj1ofFZQt5SYHbty1XKJZE0j2SQInnFrbNXla4u6arlvz8gzD2aHUCDJkGFENHXNSIpo0%2B%2FkxpuNoH5Em2fbhLVIzfxuqvdD72lHtc9H%2FCSBawzwNNuq8E12J2yF6ZmsiQmddLXo32TJewdBcyL05kxZ0%2FxYWwTGmTb11&X-Amz-Signature=b673a794844e6560f06071b461ecfb09d180eb96879d6e4ffdc3d18ebbdff6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
