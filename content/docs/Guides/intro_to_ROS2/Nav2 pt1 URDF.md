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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=f78d7f1398fff6c24baaaadb83744d37c0b1f98eb4dc80c54e7b91de8fff395b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=b64fd9bc0783db14911a0d411675fd863a92e2f6994ccaa0cb7ebfd1f7958c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=14200620d5a39e25bdc4a1c0cfb71e86e7c5c6b9e75119db11ce2d0f6e6f7b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=63b3506706a004661792febd1e574f597b16782d01ec12c3c1cc5dd60dbf2d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=2c6b963bd203860d532ccccd5b073b1af2ac2bb40fd7ae5226f77745a95a79c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=9e1c713c03ffabf297362e7a430caca9625aa4c918ea44ca7c7e6f57515dbc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=f8538b7e1d10693a5e533413b16e1209d136d73e880b2822d52fdea10c60605e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=0d0326b54fc9d2a358d3dbf31133fcba8d4a02e33dbdd7af9ddb1e8bb77bad98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=084e12fd6512aa75806b3d066ec9052ed557a3e18177366f4edbda99113a0af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=33ed665ead417b5e4a7b8e000400d01619f522ef9f196bd37dc1573b3c9957a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=ac5c455b90fd1b66bf51c41fa3b041274542ae0e3ee70eb6737a6e25f082b54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=b8659802d58b5f75be661922e6ec4bab86d035ee6e1a9e5a637cb39d6a7f3410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=a5ba76aeafecfec09952d7aa2d92f1ffdf88e7dd0a4e3494121370cf293f46c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XA6UMZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCyRwr5%2BBcdLP3agRXN4pIKQe5rLGYTPKVhv0J%2BG%2F7asQIhAObv3KrWWMn9DcIVaFpzrYJ1y3NfM0Ogko0v8VFgQPIlKv8DCD8QABoMNjM3NDIzMTgzODA1IgymyrS5aM8INglXRWMq3APWM1FW54gYcLJ7EHwomYgR%2Fgy8UtoBgE8RLxCA4RMQLqYrdd1ukeaXSQuAE29%2FAJ3hVItMvvydKH2QSMBBOtYSJGpF3KLZr2XifQIRRO%2F%2FtE4WJ4K9FZy7ulO3jE7BQKJvZn68M0oUiKhO97guumslZ%2BTn2yepoyBOLtJjJptVphRgaWy60kvMx3voFlNJLt%2BDz7iJ6cX%2FyctHbf5DJnLE1wZEHakoTiXWSB2vDB3LoC8GNuRFbq%2FVxWoS9xRugyw5%2BYedfVXp60er8RGpUMyoae00Ag0rdAhKWyNmKWXlJ5o4pl4CdtQPV0Kxso7x0dkVYWLaeLgy81UZ1N%2FUsZO92RQEVwHgCByhIVhjhqqK%2BTTu7QRjcUHGTDMFGIBQYfhVHdH8FBhfarqnWf0fw2fpGxMiGBEUdBfNv4pycrvFxyZHGoAJHr%2Fcd%2F83pkP4bPxUmH6w6GlGUjey90rDh9b%2FytN5W6FVRTSrFvfDjaH4SmQwaZ5VNVdUcyoMhmeZhZND1HzSjlPaVT1xiqIsqvn%2BfH%2FBprHiwwXyTT9jq9JQ9c63T5Q8AI%2F5%2Fob9THCNpiwxrFjgLq68ggijlXFl5rMUeXiMLmAXdt3qis2cfhGi4A5lY63ns4KUGyX3LTCRwYzEBjqkAScsUILEBDKaSJT4JvQRfG7v9piD5C%2BaZ6M%2F6KQWBZWb7jD8hNOq0brrX4KzWrJgAuy1TBjdbXk94v%2BehdPcN8j%2F6GFQ1S4IQwXhPpdZCHvXACK%2BezvAzqYEYcmt2ao1pfB6qNl3Q6otGozZHvFIKb3HyvX3%2BY50geD7S%2F49coNja7%2BL64IrWFXE8OZM%2BRXDCJJZPmecVX1qTlIrk5vRsO3VW397&X-Amz-Signature=07eaeff5fa58e5558ab22d6453afdcf49db67c35e4785a9fe6dbac018b88a295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=70e97cfb15fc82ff95faec41173528c2a21d0b678406abb62c5c04d2195c8ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=654f8bd101f1f47800e32727ffef929ef5a301dcf13c5fd40bd9a7ac2cf8f41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=29d44a3579ad103a34e791185e7610c0bc49ef97f90c9332ef9d103b3f5d78a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=f2fef5f16f0c00702594a17a1263e339126ada01dde113fc0cab282c21499be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=50881a8c6bc0f4bf5272e18861282b75bf071e03b1fd00b091f2d374f35da88f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VBX3Y5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGITJASMxRB3jX7SIC%2BEnsAwCMMpj3n4FGt518VCkw45AiAWAx8gLcQWYMoQM7J%2FnnBX9IHusPM3DOqhWEUFT7Mj3yr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMpkMs7nXnauBU1bFYKtwDJS7XBkqS%2B%2BeFHbrDXWeeZiZjQP7qXTwYyooCzELfYSlwZRj7qQQwUKUAS6TUigvW8bNdYnDx%2BVHIFB1qfjpO59tGGVE5PZWeCl6CaddUD1nA0NhTm%2BE0Hb8Mrf1NdnCu6TlKbauT8tBvTUYlIKK3gywCPRUiutFUzd3CE9XT3u2UJ7njKfTFsWFN6lwuQVyBXJnQ2UnQz0y7NWCJjTkowEstiEg9jJWMRmLECWR%2Fp5ol4lLZfr6uu56EzzEDJ%2FmeeuymZMeiQ0Zxivp0%2FocRV0UQd3wE8Uhj7kYDbB8eKWooonQMqTk%2B0gIAjC%2FW5L8pzv6J9%2BD%2BrxZlJ%2B%2B9A02yDFIa%2Bm0C46cK%2F2welVbkS5rgolSLs6DeaWBFW5Kwl4FrXNgv%2BdvKO5wFH1MDacv4T0benbqriR0h66pKVQRpEpHz7DffMg1WmFN7j%2Fc7MtenfjERiAuuPQp%2FzKIukeer0BRlg6SHfDe2wxLg%2B%2FW1Kr5TqTd9RHWC2YR06YSikNFMu5%2F6M4qggAEdaydTr8pD1yXcr7d1CPqNqjD9ziemiHoj26%2FkBfKfctwNAi96DZqWXvI8nbDvWU42pgzz4k1Bz0UgwvNdltetFneg874NmKcvE586K6pfX6UStiswz8CMxAY6pgHANofPPWiylC7rt261Pk3xH4RsBZ16Hgcim0eY36MISE7nrxu4OmtDyE%2B9f%2BmmNP0DVV7qYVI3jM4MeOsjY9rEXj97B6qtLdN54nFKcBtjhqy8vbDvmcApeIE4STB9cAUz3lOXF1BnSu8oth%2Bs3vxTUx4uSxkwRwfPTEBTeLaXXgiQINCFpsyJkzmcWeY0CJR0wGSJtzNgDJV4CfDhhAeKKpAMee3C&X-Amz-Signature=cb17e3a352513c1b08efe0d518f8a08a1fd5566fd2152cd1a8c78e84b44ecac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
