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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=6896d11e8a4a244ead0ee89338c6fb114d9e61a47311b83414598a11bd372fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=d74d6bff5632c81a2dd938fe23070872e7a70cb88ad3d8ca8544b1f2b32bb0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=25b46505e8ee611e78635e3da24abdf7818ba5e159adc3398786872ccbe5fcfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=6cdc586e043258f0df62d84f05091696f2c797fef250e5f6a4bd3b0d6e339ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=3022b3630dbdc33693f9ec76c3980956797f78da4b49cedc15da015995cfcc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=3c1dd42c627bae98447db401ee9278364713e338b81aa7ae9b4692c8a601d330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=353805f96049a86202b6d03bba1f67654b7e2bf178169a9f4bcadfc3a07faf73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=72a6780571cc753ddbcff4bec4220f74a7437cedf21c54ff9174e6df9ca0a853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=84136a6ad17ba36579dab07abb6d944c29854e6ff59d9a3b7756dcc57044b572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=103cb93376935fec29c1cf9e24eaa4c6bdb9b7eb177ee7969c86fc13330ae5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RON3RT3%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCD7ZaJPPapah4kgM1XIO6vEn6f0gxAqy37LFzihBn5KwIgUZp3tRhpzRKiA1tQayDFZZEAHGjS5EucpxUltmaZuQYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFa61VKlJXzCoJ1BJCrcA2S2%2FLbLWIQj8ZJOvGvSEbOXBz20n0M08kOSGEYUEgnBv1lzL3lo4SWK2l02wxqadRiAoIfvmE%2Bm3QfQLVZr1oAuadcKjC9LWFEAooaASNcmVUUYW1x%2FWrzPe%2BrNCqE52tuVIA2Z2Z%2ByZ9Gx3Uuvp2SU8ns0q%2Bo8fGtkwXWF3SeaRHO6eu3YREM%2BEudBWNYQzOy5zcqlNhgsvWQP1s36mVhgXqAU0rBnoL%2B7swqVtYZHyO0PI0QFQdWdHwD7tk%2FP%2Bu0jGRq8UU5op3SbT00JTMAXRJoJsNrSargdVIKlt9PvObBQPZh7j%2FqHBpdRwerJlfYnhpHrk1FC39CalyEXwk5sdAZG3GHUFNs%2FQQYJkKa5bJ63pn2R6OGygdkbGZehE3nnKDEB%2FIDrh%2Fps%2BRLSrUrOmCWZTyuYaDqKLdIVMopI9a99uzgk0dSb8fcPnagq7Nl3Mf3%2FvhvCY4FpcG1lrsDaA34DcnAOB%2FX8o6yKamF6eyrV2yN1U3NZQg3dfkzGqTxjBAiHxVnlSApB4Q9ZPsamzk3Ommkiaq%2FVn5pN3wTbCBjzvFwfrNCn9%2FaNtm0FFFPm7oRx2O%2F3wh5bJU1rKqXIHor8FIJx9s2L1Ad2XFbexny0Kxl%2BLzDYf8uBMKrYpscGOqUBBCdgzMEyTIyZRsq3XqOhr5UJnTrvJ4AOtNvsayRSMcyRrppvADPS2X0wmJ%2F2wLxWC%2FpwGzanbulVjAQm8Zst8HUiWOTeU4MuS9rjmMwxUeHpErW4frq30gvjNhp8RiD2mdkiF2NN99nzAqiUeLVyWuBm8BxY5r7oQmb6EzTaSiait%2FvlgN4yWU0TKprtxt6x%2F5XR7Ih77FP6cSSld1q%2B%2FI3w1Tcd&X-Amz-Signature=5b3a5a56592a54a0c3d2ecd27507e96952950f096b8ff74bd2db2cdd1856d674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XCNI6BY%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIEbrJvAaX35UEuEZ1R6FnFSnaOjDFGB3aeoAepKjXCLTAiB0LnleV8oRG2T6bt7f9Te5a6pmDl8q4dLOTSzsVUt3SiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMECI9xrH15t%2By3Z23KtwDyO9U%2FiK9C%2BjLmYX8Gmnrf7ws22Hra7FyBkdOxuuvpHVQBW1e8jG5Y%2BKLP5vIk%2FQY%2F1vCWagFZjRFZdH%2FZtPftVAm2jtf04uuNPrX%2FOpryaUUI1t1TH%2B%2FzP6GCoku2KgnJ5yXzez6pDAePiykfcmQel0f1BjxfIIRn%2Bg7ChOdpVqdfzg9Oj4hA8ukhxgeUQzL6Xvaq8nQVyg%2FGbKXr7%2FQoIAAHhnvWMrf%2BouyTaXllNLfn%2B1L7tgNAop1oT1BKT%2B2ruiAWigFjAc4fJUTpHwJDNujbMUeV2%2BLOuQb2wqFSg%2BleVoUpQvcKdyt5xNxWgR1IHFpqAfjx5MazHdK0%2B3hjruHOXYDuRe69XNIcaoPJ%2F0mzbfh4uMr0H%2BD1KBnCcxG0Zb%2B%2BHWVv858F6gw%2FuwkH5Ko4ClqQ4rbQWYmH4h%2BLHC3GRCWl8tp8jDTTvx64OeexqflJu6W3bucy9eRbao1JLbmPz7ZIsL7bU75C%2BEwhuXKgAAktstkw4KrudwXZoI%2Bh9NxdbMEPwJuAD70QuixvjuXkzVOAlQa5lMyfNJdbdj8RptM4HXG70fx6Kx9Yjxb1bKmq8kf9czzcZ%2BRc4wnPnlU7DJ19upQgf0oZxS3ng71j%2BW8KlCA7WBi6D4ws9imxwY6pgHCvak4THnhNAXTjFQd62h6nakiYWH5aT%2BSp%2FUCDNjQ7amTwZd815vTOvaUH7QGHhXfeU8BI9QcVSvZSIybOeKtO9cZMArcZcCnQvDTmlhV2ggSTwfYni7ITikn0FvbuydSDz%2FxwzxH1GJWYiXw%2FVjpVjVIbHmq%2BYfdDBJad%2FDiXZICv1FlqYXKOPCicf9dnKcyl67KSIKgQGjfP6MsdvxEgVjox07q&X-Amz-Signature=3de9df4977fc701ab31551a73254c7bd3b6270057402f76f50b9a69cbbe61549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632S4GMM6%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC6SLNDdEGxXD9HN5qVVSvC0%2FFN%2Bw8zmOc57%2FwEvPNEawIhAJSdGZrwWwScGxrsOjTCIE1%2BFc9Uv8hjS7FX%2BMeG0dxhKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyd9AOWw2E%2FTyh%2Bzgcq3AMiIYrAeoV1lRrIvU%2FrHWXYtfLCNPX7oJi7yuARvSvSdCIlNK8PnevAl6TDYJxCuSXa%2B2HDa2njyJe4Ax4OredeOFBon7d1ooBzi0OPSbBkg9%2Fqx9siqZZ4Q7k2J2Kn%2FDZ4ehpvGoENe3jiHsJX4duXnvRkvMJ%2BbtVSPoyrrPAnaeSmpRD9M%2FHciVCOF2vx3YtLqh%2BWDQmMuuZP7IwISamAunahri1ABKNKiGKKqnCfg4szif1rffEWhnwYNf%2B3WcEwuvcYr%2BgsGCQNFEZfMEBtNybuej5ce9h20Hch4SrkvXHeeqLduRUIW50J5xRG0%2FrrjUDQgrJY41%2FWo6lnTKXfPwM9YCiKSP92rzKeBXgiIB21MwrYRLHAXiNpvKZPVL7JYnuCVmuYBGB7AldlHlMeXoY3IvqbhJgwJkn%2BmRIRht%2FO%2BRLtueoTBgfwtGwg9AC3nntOmdHf48dQE9i3VRNnoS29%2Fy9Yhk2PTtQtCm0Qpus4qMU6lZm24XdcQtzHnrmnCpHZlD3iFP0cLIIWAOqm7p2gqzvpXiQ5fCoEsfUUVNskVpsAlxVCCBvfBz4UFr9QnuU2bEYcu3%2FSAg9X0f5S%2Bws1SisSej1H3Dih0IRh8pML7XuKhD1ysREXVTC716bHBjqkAXTTOZ1BLs4DZoiJVDaPsQ6u9Pf5H4Vvteq52B%2BPjU%2F3cEA5zal0S7f%2Fn4ClcMDT4uPP6%2BuVRx1kUCFDmpijev9OEk8QAorCcwjUKOBb9vCxHa88RXXG6nzm7Hw9eJnZ0rSP4ve%2FEfblkqM66kro6dN6AzPoiwJbex16n0029dWzYUNFo1cuIx5QlKBcklcUT7P7QB7o6Ry4sPKYEoK%2FbMbOlJzB&X-Amz-Signature=fd60616acd8ef8a2779c96722e24878f03662a709fefb05b1e31e1c920c2de3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=071e55ab8337d171c021943169cb0d2d06d6e4fef29794b96fc66fb0d95452d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HP2EGG%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDyfO4ACAW92xZa13nO94ni9bFmuFUKmfDgZicUcjKa9AIhAKVfJV0deXk5RNF9CnzDk6NZKOSWnz1ltICIMtC6LcM7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysfGqMC%2FjSV1%2FaNm8q3AOPJmjmB699bF0p%2BoFhASBkSOiQhWD5X%2B%2FSlXjH%2F4VNV73ykwlFOCGyUbgxUTxeY%2BdgspIaEgkJNPx6ARf0u922rhOAeySEf%2BnRMFraGk766w1OlEy4HiutAPU8Cpljr8pcyvL5CVpq0RcRU9lGiiBYm0xqjKKgLnkngtpMmy90BxqHqX7aD9pjB2CFh49O4vQAKlPkNJv0lLQonyh1ZhLYrE8YOR1ZbOm4sihDSOS9llutVPaxzJQrSVRuGM3OW4RHLw%2BZTgzkUCQywOl1ck4eRNxXDoo0Cxik%2Fj0pxYUQpx6Bxr8KIolELnt0blCfOP%2FxEdK7RNkPKQe%2FEBygcGPHBa3q9CFCFgeiCQHJYf%2FlmAPV1ePBrhqpMXvEep9LEaQdmYgaG9elRU%2FV9cAxf5cwSuRPH5M%2B%2BieLwLXHhM3KDWZqZmZxnntaQ2P1nmXFL80tG2i%2Bas2y71IUM%2F2L3jy%2FmucpKLVVpqpPhqUHlym5uPFdvCD7XkmvAWwhdeNz1SZ1Oc0lgTBuXeA7WAmK6bRCMtgifXBSirC6x%2FVOgnpnjIOqUhnW16uF5TR21Q35n2krmEVNkRjawqIkR%2Fnsiwm9FpCoURsPLP%2BW4jUZNyExzENv8wqQxqc6%2FDlC%2BzCG2KbHBjqkAWB24%2FzEzfDnjQ5gh5HHRtAfQtWB%2FtrhyUEA1feBvbHCxARPJ8oeP%2FyekeWM0nt82THF5QyTVfnLBZZBJ0YjTa0viXNvE2W5zi%2FVTxn8FAATFsU3hAA3x3v0%2Bj5Zi3G3j8Dh8Si3kUEBZCGBbBMIjoz1ND0v1z7zCi9t2Xdc%2BpLemW%2FDiOvij3eyO5Znon2wWRTJT%2Fu9lHCyjI%2BvRee9sptbqFO%2F&X-Amz-Signature=cd9f98c7fbfd04015556afc569e624d1d9b744d6c93f49f785a1a5afe2903b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=f74de37289c273723c97408349369316f3ab76d577d1f5e5a28f9d2a4dbe3f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY54BEW3%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIFK7r1RSNK6w6AkED%2FwyrMDTwpdP1AKxkiHeK%2BIyeMhqAiEAkDNj%2FxddRkMZ6ZCG0iPJcYrTqRQCSOjAWA8xj%2B0xP%2F4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZKyfGy8g1kPrcHjircAwN2MwcQsIbjrfyAVmynlcCeLRL3RLENRzUIrjNcXbLtpTsx9BVc1gjrtBeYQV3Uz3llJdwi8CHoV%2FKlT7yi%2FylB1Tw1N0ktKfr76Q2njNNv1hLQqbjfFqprVFudkCqgO0UD%2Fp7CXsXdPsuZElgASWD39d9ad4P5KUYRH9kfmrkeWyoX5yx6uyO3oRfROuxqYjB2lqGWcAHU3v8BlYDQvSCZWY6LdzyIPoqDr%2FKdB8eMNEr4I7iPBfzw%2BnZnRnxu5O%2BBgSXThTLp03NvybaCx9M3MIoPtZyFlSgH8M4q9rwLs0bUaHa3wkfFi9B%2FMEeMv6ARKx3dx3IezREUDEZmrlP43FF0NYxr9S1OrFYRATb0UDkQUQ7MohPzzsYEwAkwq0tXgacm5DrDYsb9iYXAxeS4UmqLj1IIy657DAggb9xi0DVuE8THYR2hrdJcuAyuubqfwsRcgYh%2FfQWVWSVnfCtT9wBjX8MUv2v%2FMRBXRIW5ReM8aBh%2FwTz75aX1ER%2BWD5VvJIXd2agPaCv7DaFJwVpSBAk%2BPLV5kx0PrsW41RAZflbcA3ol7Fc8B2ejC8ZfCoAdoDk4S9HXCEvS9qHkdv2rYTzXLt9HpEe5WJ1wfD5jipcvWDhACXRohnBOMLHYpscGOqUBRY%2FP6KeAmnZWjK2hqJLIAzLLlD5o1%2F%2FdkJ5gdzu77%2FD%2Fu%2BfxlrXho%2FvoFS5frDftqJNT5FBPXm%2BrpCFcXOHvDwM3c%2B1nEpULxpHt167jtNc80fe1A1bEIVlyFGwg12mDsolnGwJ54iCZyAXmeEGcOhdN0Xmj7qOn%2FGKrlt9FpHoLoOskCP%2BLOrVcGMr2Qn%2BYgI8j4ogTE7%2FZiUnMs3ulUCsEINNh&X-Amz-Signature=7872cd22a0cfb858ed5cbc48ac7ea7644a664843d436c5c833ded5084a4d75bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=38e407f269f5022e7753fab35dc67718fffc9b77b8c97ac7ab4193d8abe8098b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARKV473%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIDqO1ETrEVHlTw6jlwiYYN7yQT1mVwUajOwi%2B8j76b8sAiEAnUegRHiSStUIzTCcGsUcPQdisA%2BG0H4AGFRdtB84exEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbVJNBCeX%2FmrAE0rSrcA4n%2FhO2ITkoOY5bfH1Dp75%2FKbbbIk0o10jlMhnoW5aBOCfa7WQAgNC95wZ6weFwbgjYeyst11Y5D5eX2IDUzzf0zNPMMUpMDhSsHGXpumfIYmOQxb9CCN0sK9PK4ty4h4zsa6qWhAnRHyYwKYn2FH%2FI94I49ukvdy30vx5L4F6eBgFTc%2BgtCYY7DwteqbfZVxIE7mDiXIETFjMm%2FanCcUFF3H8axKJXZDKFmDSI6OJG3NfA4YvkFeBPbjNwdHyjfoCQcNSfNgdXtXIilIlzaEqas5z9YilwaWbMxW9GI%2FY21XFVqFTL3GevW9b7w20gOvK%2B9uRsQvhCUzS2SlnzSGciy9gxEhVyU1i3tb0oxz1gPigdRII%2FCCpFrUeZ21Lga%2FguLkloSP0%2ByRhQVStwRwPTw0voMljX4%2FFtwqrCNVKCUjNNa1Xr5xsgF%2FEJQDmpF6Wdsa8RJfQpfB4Scij%2FgZ8yppuHCqF%2BNXyRx8IgqPeJzBg3%2BxFdJVr0DLsleFPAUlUxCJ404PuJ%2FcDDJDzhiL4KtyPdbKQq8qrC%2FMRchxKXh3B%2B%2BnCPQr%2FEL9dXYBNN9X%2FE%2FcUkfGv9Yl6ZsnrLeFIRm%2F9CJ%2FoQmtEhVPG2erytPzX0P5rIxRgyJM9RTMMHYpscGOqUBY4AAJMxfpx215VewURznz8oYPoJpLkfxDd%2BZFoHvXBW4JFRd7PR09IHtYanXnHdczW3SHXxm6Jcu1bZLYhUny7FAMA7zG9k8nxqBJrf9WiZfiAfn1kGGB4acd0kz2K7QKoDE1u0vO6%2BmyFNru879sUBxImbuwaT%2BpDm8gn%2FXiwNzADcYBmLUI85l9if59usWkbxUlLwe3IJws3mGV3eSZps2A0Ah&X-Amz-Signature=e13fdb4c5909c0288696664adfa29d18e6224d7b1262198098fd3ee399824851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=763327009429605331eebee664efe628800be3d9f6da430edf06678a9f24252c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2OK4H3G%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDh%2BXJygZ%2FnsDceDe6Bbw1JD3Qz%2B5p17sQgQhQM4lA6fwIgfaiKAGgOUUIBnXp%2FeeB7%2F9KAQ2LY6TK0hCyhjLZF8k0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjZ1rAPYEbNSeogJCrcA9W6QZ200lYrvrt48Np%2BXeHMPmQE0CvFNlEnmyrjUvBdxLWwsTbsfeGfqoqQIDj2mnn%2BEsLVvRaAx2X3pEymH2tny2yVnh2fUEx91G4HqU0t3uHwda4dfUagK6f0efR3D3DGngWYtyGR7iEGH3par8%2FVRlkxp0KEB9hnWdisONcxpeiHlE2KKGkBIqc4BxbiAgTqe2XBTqHqiC%2BDv3CwkxsP1B27gXq10yNm5SAJ%2FBJfKnPDkMUMOyJ2JCAq4zv6LRxkuK3HaOG5e%2B4Hi8k9HtocouI71fJ7Hna023RTFvdA8f7i34BVDk%2FHrFRjNQ3rddtcUS8RQzih1qi0BljLpFszCCu7LoXZlrqtD8xNT73esx7d4d9kGHYiV0QGfxDYHY%2B3Jw0Xfr3WY69nGYcafrNSYM69rtyyUQhwp3VH5q0g2n6PLDWjhwD3of8K3iAAX%2Bo3lY76%2B1hl7UxBQZUc71HPE%2BJslFvvk2AvTo81Nh0kq2rPhklp37laZyGYWa9n1Uld%2Foxck4%2FPGSlUrXyXehr84bKUgqZvmafq%2BkWooxg03ly6AeOL27gVMkLFdsBzZDvaKqiU9PqNFlKLlMk3aWuRWRCn%2FMz1U%2FQJYydUTC%2BmkdIJ4UWoEvjBR6WuMMPYpscGOqUB8bHcrjkVt6OZpis1nl6w8AMHnJNSDWjpNTLUA%2BcbV8XvOHSAmWbMvlHghEZd5b%2BiZtUIMxI4PR5zVlbd16yXZmilMlkiOR2SrBY2fBZbcNnIJ9vc5Fevr0v%2FKGfhClEd%2Bbd0bLA6d1%2FdUbrXXwzNi6kn44TEYlOnOr%2BslNFiz2jEICDc9vVqJ3mmxL8i5qfwI9k4iJLzc%2B%2BD%2FRmlVGumb%2FYlxgr6&X-Amz-Signature=ddf272e43cf6a9c2a15dacd0b49ff8169f0632e5429d6728aac9ba56cf9c378c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=031ca4fa0051081d9fc696e8354e8b76a836ccbed26a0474da5f0d9c71dd7dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JWRXPW3%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIHdimVfAQYdns2jxbAlnYVsDGN5Tdc617VZnJEtQOdO0AiEArY6SgaeUmYI9OzeMDNwLk2ksWEYyxLt1t%2BtBlTMVTLoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOeyrVHuVafyJKExmyrcA10TlyyxyBDngoCrVSiVgGWXnbAnFEC%2BnbPThM0WF2O9uoINd%2B3piJ%2Be%2BppuYYjeQHVWd7dC4GMd7vKpTFLTrobtYlV38OhqZHBCpDZ4kvWT1vYnhyU%2FKnH5C32NHkJUTkACGGHNFnYDANrF1dcHcYVCLMWcmnhhSH4LYlHV2XZyccZGyArag%2BvYWRzeeUgiUOqoaDn4WtkW3I8XpQpwKQulBE3eZqNa%2BXrJ6PJq6fwa2oLyGyXpmILGfRYedPx3LJ79HeEhEuZrrN8RjbqW%2Fvtwm90hQEYcRoM3pMdxPj5Fute4RvIdprjSaKf%2Bnp5sZ7Cu%2FEkaSRQoE07nxU5BUto7mOAG8v5GgHR8xWPqTqvW9e%2BryVXpccngfa8rA2TtHeaoboQhY9ghJWuTIO6k9BVFs4lWDyn7%2BLMwgieiMjtrPsXYF4pwl7xDeejZ13ejzyHDqLmfxLAJOnCWbJBvhwzk8boSPQo%2F0%2Fhrx6mptSwH4EQOdi5ORekfVA4PknPpk2UvLN6Isq3jW%2BHc%2FJjspZjMXIuGyOKsjn67MeSM6FkpJbwrPF%2FcSBRGa82bdldlaP4lYNNWIs%2BEu8KCmarcMnPeCT78oaPDxuYMIGnRKC15BE%2BhRVr6ALnVSYQnMKvYpscGOqUBF27LbOBDZSEE3CvahycJjGk3egkXGAd2VP6JYXW3pHo%2BMiMjIWCvTLwHRmL%2F3A50bPW2elANqA2RGVhMaeLnctLVXRP6sbyld3%2FNo6Ro6Zsnp5nNXdJChoBKjp9qUukC%2BomHJUwRkTH9WMVDo3jsYjQMNTYIVqi%2BaGPZpkuhLLrSHRLL5ZM7nA%2B9OdXtSc%2FqGEuZK7%2BAc4xp8jqQ3jZMLT%2B1E4C4&X-Amz-Signature=3c866dcfec6954b12229fa66f8d30b4999cec406c95950c8636377097e287810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRTSCZS%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiwevIxEcKB%2BHp55SxnFO2hKuRaLBSt%2BkHF82HLxHBsQIgBgI3Hk594WDvZ%2BuMzbApBTCPUrA%2BXrwc%2F%2BIS90snL2YqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2B%2FpIJ%2FP1BzRh9foSrcA4xKP0oXqmaRtnD1NNs6dmAiDN%2B6sWV3Wqd7NohQD2CPJazd0Y2N59DYo3V%2BrSdXMU67z5QIYJ28f4ShAuM2d934H2%2FgqXtGfxS44qkCPm1ovdSv7oeX2KeiE1HNpEE%2BPqwRDFEX044YMvzsMVfGqa08yJqKpJUAi2D3Jlitp8GBbFuM4Orh35XDb7UeQ4kB85ub4p9rdgxvpGG9mzcKuzsk01LrXyPb4xTIhJ0h4tJSWG0NJl1A39ey0Z%2BwrDbuYacwXbVx6PRMvNtlrK1lM7yKQOclAm29G6cZ8kxloKL%2F%2BRBn09HL35q43Gl6%2BmWomUCCY0spTLBJGMzO9m7e3fEqkmGiaIL5PAvFoGi6N2S6C7sfzxyj5IfBMma7NGmumjFlnVg6k1V6Pphrwblz5eecmx7n%2FgPT3nqvTPibHeswCpupa6WAfK88%2B9M5BGxYW7O2Avym0%2BI%2BHZmb6Ncp2pISRJJpZ47rYqKz2krnKEF%2BknALoLqcJqEZUVcinRZqowvf311%2BggPag0O61RTybLVReMiU8AyKrxma1dQjXVpGVZ07WSY4NxQf9AgOzNrMrs%2BtvTXfuUvECHwblzdxaWiPVq12tWMc5ZZvzdK%2BWsHUMCXK6kD6AcUuATkiMLzYpscGOqUBc4w0BWcp31TTMd47r6Zjn8bsF0f8vpkECmyEjmZhhIa31Z3fLpAFglobtGyEwoTBZxl3TQEEuIQMkdkYRx70x%2BCFGjc4akPH%2BRyN%2BatwzcK5UrKQJQZIZDt9OtSvuPf%2BwMyUv2glmy%2BKPB%2BQINYym7ZHk25zcQHpQkxUVFKHxCHsk%2BlLcsjO%2FH%2Bjabxy5xbv%2F9wDeZYFJqevUiRJz6OJJ1ukYE3g&X-Amz-Signature=787836fed81ae6f04c049c75827aa93bff1c6c013dbea8dddb46420e1ca6d13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEAM7J2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCBZGWZWb4qyNhAI8czEmYcwZ3ijb6h26xH6MebzJj72QIhAOlAh7k%2BHMhwWeD5fERfQyzrjM0obUmslrOE7e9minwXKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzc8DIUs7zAwXEkz6wq3ANbJh65KTZ3m0Afxy4JueZT18gxjhwB%2BT99KVBB3PBdpB1yBkyT2oI3cvZQ6gtUkULDPsvXFYUhS7JCcpkmLxYefQo7g2vrhp%2BGFg5APEcHlys6HV4GQE4sIg%2F0HHfwfce7b6K0mq6bzffR0SY1C4%2BnOF0frbvfqbPWjgYFQzbbLA%2FkuC3QSqmegEC68OBxDZ4fEsdnEmBKHIse%2FKM2GHap0uba2JD8bcGz%2Bj5xYzM9FZCmK2C%2BPtQ8BHlWIE%2BSNDavCerO7W7uqjOApuw7wraexElaiP3hZULoEgdcfOAc51RTxmi%2BubM6RRDHqypmpZbJoExCRBPObftn%2FIZPqrMh1BwtxGJSpnhe515AkaBXZgMwm0334n75djg2rG6lziut4wo1OeVXgFkSFgV4oA2RCNDSId8CUXuYzvOSAibl53DlnMY9qCf%2FGaw3TKnQI0GS4SH%2B7ht5grnIthVgPwg4TgBOVeBqcsAU1oV4cL8H2zkc9AlfSrfOKUWf%2B4MceXCc9CaowUuSLftcFYBa27XRBGXPopBkd9CBCds0yK%2BKlXplK%2B2LBcNjj0IrL%2FhLFvOuYTb29nVr8HIR20RV%2BloSVX1VesrWizET9WkgPnR3mcg10D9ZGuTKPN6B5zCr2KbHBjqkAcKPz63Olzh9v3D8P%2ByHteZrJR4zqp4LkUd65nYZaWxSDkmdfelEwYPsO24VkXNNUgjeXLxX4hv2H8qQLY9FMjZzLxna%2BZzsTDon0CGJpPGDSaoAyGBsEwM5b%2BUPdQW5%2F4abhQXdTJJMubqbukqXPc0VE719F89%2BwC89j9lEdvnIH5GDjx1jD1OvvBRMM4WCLqb%2FbVdX%2BU1hkMEb0mgRCgJ6%2BsCt&X-Amz-Signature=dde5fded499b34abe8e49f5e216d50230401ede882fbed0843c36e59577152eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=a76bd4fef43a691cd527a2c06c3acdde8fa291293bcb952dece30dcb702b332d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYKW2RZ%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCw%2BS09A4QhTDNYB7%2FcKl6CuVsFq22O5TXK%2FttqKrlFrwIhAJpPIJqnqpP1%2B4Y%2FxJWDwKFhfWGeDGl%2B4poWf0pUDYp4KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMIRmpL4lvDcZpld0q3APml1fPT6NLs8EoO4DTLbEDdUlyo%2FZ1vcQrlv4lihoaMBhs6jSIEG1dgxX3QxvQQP0yVc6kGmW%2BcPHg4ia7vUXwpPKufR3tkn2z7pashtCcmjgN5U3dBLHzWbMelHiL%2F5ACgmcED5S7jCMKBuT9Fo5mS5Jk9kv9T8pK%2F38JVF3fMjD19NyDOpWfLLYbBYGyxaqX5uzy%2BH%2BT4FgW1gMmgLz%2BUW%2FQMlUfaqGZiKI8nMClGxuxc5xWtTv9VKek7WzKKKXLl2NKecQUA7J%2Bc6ew2aPVCsBhtJyoyQCPtwMSwLu66wRcXyvkWrJTREdMrUOeY1ap17Id8dN5W%2B5QRhsqCQacLg576T8CKpX3ie9%2FM0STcC7u526N3wzPecREBBxFkk%2BDXUqo54Hp4QbJQJ0%2FN%2BrnmO46UmPjnprIJtEISERt9PEztGLIx1TjaD2qhKzWFOosC6Gmj8RQR%2BFiAaJb%2BAMpqVElP0oTWv9qL70v3AVI6KPNg6Jz6m9tm6Wbw8kO9ZOAgVsabgM%2BWJIoIWBMVWyaAiShfruCO4C7C7cDkXaOJGriuW1TVWOnJfij4IqX0jjih4Qk92mcHb6TuKVA36HqluaX%2Fnm5nNUVYStCnBhReD4cSdF4EOVmfkfNUDDy16bHBjqkAaQeRJRstWWLTbJsc24TBtbkrJMPW7njaAhSc9plPdDqyNCUOI8hMfDifgsIzNQ6Ifh6jk%2BorKWcyD3bhjXBpMoiYAwOUw5%2FoE6zPi7LMolPZ1sXQBzws6CH7fv4bPhlK6Q58EdpQJMM73UZUqCQsnqOXj9biYGJE3EM3Xug%2BZFTSLyhve8GnHPwkHdXB3ENz1FBwQbmyoGy7c3W5t6887b24qvY&X-Amz-Signature=d635156614de121a7f403c6160939069e9f06be4da2375519e43359fc6085d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=42a1e37628c992b8081405db950c269cd7e97465a42d627d1b884656b33dcb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=398b844459108cd659a21dd2ab3c8a62c60872901706b004171c39fd093ef9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=ac7e4a899d396f450c1afeb51afe4fce4bafee7a6ac691bb1daab85ce7ccced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=fb4a2fde01b7c5ebb063f3b49e40afd43e7ccf532867bf22e55d0eef04612a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NELYN7H%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCmyKFBFvO66W47GBbOYdMTIckFZN1zBaD8jA1PBvAqgwIgBoBHMepFZvTmYrW0cjt8fmR4d3FhzpZxrdOa7xayha4qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqAVgg2Bbb4MCyaAyrcAy6OA41ndob6rsOCS3q00rEP2uqP5748wTYkwXidB9tzVN77AGDLVStw45Cc8Nn9kR6qdoWv1eqw3UjCaxipDDIh0tD1wNNcO5c%2F3udFoU8rSnh%2BdvJBpUv4XkndUB74VedRxjXL1SfDCZuAwtXMcN%2F8ME5%2B8SHnSPVoidZMvFareTGgiPsv9iGpYkkYPkTyRklhOs4TwjLTjx8UgsRCXg4AWyZk7gC3ZFv61QRXlEwH3lMyCg3Pw4Cs34HhhpD5e3Y3fCtedzhYhpCOgH2AuG2qKePbWcsmn9LBD1QT62chLu9TlsKliArq%2BU46VW59zzrqQwqv%2B7Oivkrq9cHeQPY3ltLP1FOHHOZB9RWRb7G5pZLsl%2BLlJLNpwOeffErgTLb%2BRjALbxknZhev5J%2FOALvjhgedvkMn3Hlyw5ny9EouKOQIBQ0k%2FCAlAq0CAv%2FpAlemHovYAxaVibzYumdvvfPAV17Y%2F6uAnTOS3E7zyeh7nYObJJkz9eBD3dKTZEuGnqjesyNGglickwmvAUcVKDz1vEZrl3wZ50%2BTXU%2FdT3hsbmTlUEeCN8LFxHTRx9SQ5t9ezYLmxep8NBKs59BI2KvwspKdobmWuMROLvhXr6K6y%2FmPWO%2BAdfbyGscfMMrXpscGOqUB4Zk2wsYWlAsehwIpOMD0cUkOBxpqJhCwmtSFVj%2BE5NOVbGm4DXYy%2BK66IL%2B3lEvt96Sfv8lWon9dRuQj8XCx2wq1e24ijoYyltBgpb4185aWhN34x4vOuCYNwLm19agD%2F8MSOs%2BiGMQx%2BUaAUaQYwqLxOZyn7Xos0wl0072Ae1luXvDhhM3J7OEE9TnbcM6gxdUCGArijjZV28g65BJNOZ5h8%2BCs&X-Amz-Signature=9203a438ed47ced53c9f5ec6826f97418aeffdf4763d0a23490a12bca1bc57aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=35ebd49e7cb4fbc6f283324f141dd29066862215a50b0a8160750d1ab6983971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=e75d1c2e3a7888a08dd1095be82ed5ae79855052bbb8f3f54cb629978adcc5c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=ac7e4a899d396f450c1afeb51afe4fce4bafee7a6ac691bb1daab85ce7ccced2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=8ac2b851058ca992ba07f191c71440d0c6afeba395ca74a392f4d16a197b58a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=00ca31d43ad5be77acf03b18488bec8af063539e6e6c9c42def4cf44d850e6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNS24PA4%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDruWflao03KadRfX1ljJvz58uysH1%2BM4vbn3X%2BLkB1IQIhAIvLGCRQvFJUFKx1g5j1HG5oXuDFMhwS98kN12Gu3xjvKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHJAfZOWPpI323VSUq3ANkWki4E5E6GU%2BRIjKKciE9JF9Jkm8XqAh6sl74TJHalzR45iVifmZQqyF5HSWPnanmI%2FC2rvAZb1s5qvj3zE32%2F%2BQUIzNVKlL1HNik%2BDLfsUUQSZqX8ZgJQ%2FBsRuGGBI9sy%2F5S%2Bhqp%2Bsgh3SUWuvLppyTWxNCiyX1cA5hTG4bprUJcbqH254QlqIRv56EhivRkxjtzOp29PH0ePzU8lAzvk3qfIyt6SMRgfXyQXS6EK2j%2FQzgJdY%2BzYTHNFL9YRqeaw6PSYZzz7YX5pPekOSfXq%2FcVlQpbuVqt9V1T24aNnNePRxiEJVemnem0G37e7QwqLy31wL3n35K%2FRC4ibyDFzmZ57%2F1L2D%2BhDLmAo0rYNH7wJmLB93MzaUM3FvLXSIT108gW3A9k16maT%2Beeo2QGGIMlZfKw3LthwXroJe002sTkzCifFws82EbCP5OHsB4Uu13DSUVqvlTMzql9TS%2BFBsAKTk0rExZsMsOYKuzFx19Oac%2F4zfVhsKpdxh0Gi712t%2B2GpMhTyAzsZ4KYt4FfeUlmKktTPYpkvbpc6DvTEYk25G2lfY1CLBosDuB7SEuv4D6sVW9almjV%2B8ygnO3WSwbLqDpnS1h361oy6AmCIYmg9mzIRV3oQVYqRTC616bHBjqkASM5w%2F2qZr7H%2BZqQyoFGLTT9H%2BGjtiiiiQDKH209aQANYppegPD%2BJx6Y0fI7ovWF3JL%2B7TvmoBHO%2F74MLydyi5Lp0fFHzMIgb1ZVsXS4fnfe1qX0Ply5TB3AJ0OHVpbXcc42DquYntRyf5vb0SqQFoQkkrYzDYxuuqjhUZOP7WxBomVChL6517Uz%2BB7SY8KyfODio0q7F4IFmTya6KgYVOHSdjfU&X-Amz-Signature=f9a203551cbb2d0b600efe43d1c0744d0d7ed2c04092ff313a141f56e5ae541a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


