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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=ef59f26e812bb7ecb75aa70c22b56b1e9a8ff9012af13efcd6b99cbc897fa7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=4001104f83f9166719cb7427b576da32f981e835f2b4c065b5f03ad4af3d6a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=7e3106faf41d8a9af9ace290d009824b969f1d2334b7270fef7d0de4ee37a890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=204d2c751902973fa3ffb73bf98cc8f151893fedf532b6dd919118d7a42a0af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=e4d740fa2136902198d4fd7c0330b87cc3eb74305f73c5c62fde8670cddf2e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=da7fd2b121dca1deaf41a9df974b5776d8faffce8c9e61376bf86fcad4e379c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=14417509c62c81320df96763e46783849d581c845c4e2db724e8a3d18d0b2cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=1cc8c4ba239298f6f76c796415591e0ee62eaadf68e0f99a35723a75f4dfa70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=6fb2ca9f2bede4782a5aa7a2ea4a61610964866ff6f6824423d51e0aa9b5117b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=995de028ac247e22e71b0772f76dc8f0fa99755f4dc2844ddf83e03d60c1088f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=6ac1d0f51e1ba650de9b42b6a3a9679de92e2b70024ceafcab9157a4b43fde2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=73b9728681134441c2301812ca4eab92654ad901e18bd2ef8ec3efe611484bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=2f757332c38ef8c424d32b0a7cec62ffed2ad1f2a60f87ea9383ca2c818d46a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNO2VCAH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCNRgg6nsC0d%2B31ZrKQPkDbxDHaraNNf3Jgl9deWsd43gIhAP0QRsUUXWZLZJdsI%2FpR5%2FE0rEstghTpma76tlDUxVFiKv8DCG0QABoMNjM3NDIzMTgzODA1Igz14K1dXiUTNhztXckq3AOw1beqeafYMBIMgt%2F2Ce0hzRy1016IFeQl9Z%2FcxLWNgkZwVYvPC80Osi9BVsHa5cZI%2BEpcAXjtuzJiU%2B3xVvJqVTGZpJdxaIUFeWlT3TV2%2BTUv63EkNwIUZ3Tk6fK4Rry1wigzHXliDrbw5ncvRzw00YMio2hoeDI0AFD%2BwOUx3NksVxJ6OIqotq%2BJQXY%2BgdaaM7n6kmfFD7s6Mb35lRAKCfewFpvykJhS%2BN4OIlgBADWTD%2B1MeZM3JThuH8vbjD7IUfhqNnik2y0DKrIyw7GyOzRAUfcY%2Fv33ZQEyr0f3W%2F3Hkc3do8dSfeHwmJ5KpRBZki9Fti5JaY9uQqTGTren31jk0Q71ZYz6%2Fco3zsPzYDDWX4zHqZmL%2FptkA1HouxOTNrFH0tnH%2FZ0B18Qibz4VoYWwWnl4bQTE5S5KrhV51PsCyY0tdt3sje%2BwUnqfyaw5twiHhuAo25RJcniNdWid1vY56o4%2BgtRt7LEUtkA4ZSDvpnElepTmvUDG%2BA6c2qSfJzewJXlEbkiwoCeC43hC2ZOqvMbiM8D3ALy7NEqiNVtnXa1CxLldcd%2Fx37nzHLvvThDYVTh%2BoVhP%2Bo7cL90KDNFspC9S5bsNkLZDNGA%2FJr2foPF%2BZ0qfZTKGsjCGu5bEBjqkAc24R2VjnwEkk%2Bf082kZhbEmlQHNwYHDTQxEJQk47b%2B%2BjtsW6K5HrtnDKywM2DknAd3s71NBDdu5FDh5DZnnOESTjCML%2Fn6NgsNeqNTrU3VjjxkSp8MowokvQpbkEmvl9VFFAK61EIVtJbOOjPJ1RVLqO2%2BAgYLxHsmfsh2yTpO9KkQjKlB%2FUAdxE6usUo%2BkHOAWIxhWfVmPl%2Fu%2B%2FMqR0tf2puwh&X-Amz-Signature=9d5ab45c9492149f32e8563522a0e4df98706046264f109d570cd99f4e229bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=d0753ece2bb5b3d82e9842de92f85fe5a231348de5426601b59df296f8156096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=4e96ae6aacabcdf24642a3ea81cd611760900ddb753a0244214e51bd097714a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=8936190904e16d92363eb6badf093e9e32c0fa05deda4b62538d630fb31bcd71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=0e928d063f4af67a9c304dd0e4ca77db6b2518e109d72b18faf8004bce69d686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=28d2e8a1855a2e3a43d5a2a79f568c737fa0249701054e2e93bb1552b488a7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDBNFF4H%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEdFq%2Fv2hWXLQqP6p%2F2YE44Qa9LcGThfsRVaZq%2BdmWjqAiAjOFNydD6gUtRGV6qqm2mAta0pb04v7iOqpMdlQzB%2B6Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMFWvJfbLkywPpdP1yKtwDYd0%2BWPHeZwMhiVhokZ5blsya%2BDfO1wt0hwprYWRcRam7umnokQyAYba7%2BeHX6Avx4f2Eo%2BTGTKhqvxo9iq1pJqm4xaE1afIMHvEA0F4WNkHFOJ%2BdBJV4T5KqgkBcDKp0hU%2Fv1w65Z4P8NO0zmyrpF3dv0SOVmi7Wx2aIN8%2FtdfRbWJfc2r8ageGLygIEcOxvr515soutnlUEo%2BZVZ%2Bm0QAsHLlTNQQKS4ePRkCq86mjvBYMdRuY10RUDP6SgYyCI6LrR6voRJE7rFg4rXkvr1IpfHvIrIEQsOr6tmsa0WVlcOfkDPXHyJwvEKSgVfnV7ZIxPgR%2BNe02WZyvbgEqC4nABRTFP%2F9Wq60w7R9yjXMrG%2BY3FAPxWc0FdakrRZFQx5LliuycwnK1qd2Ox1j05lMsb%2FX9DwTw4D9afvrmy3WVwf5ihNHBtKTpFnPvYK3sJoZyXiW7fnTwQcXSdccgLlp5ZISywTNgiF2h75hxg6zfw0BkoDFFu1WGMJ%2FSSyCDt40yle5OgW34mNjaNdrIqNax%2Bsl0rfYpl75uSMDuh3%2B%2FsoV3s%2Fmy2FlnIQjiXZjpwuJXCOi5k90GwzBFMewHrtb6OKxQBwpxkH4DyPl%2BJ0M7Sg1dKbs5%2FdxqmJtUwz7qWxAY6pgG%2BOv98R5XXWi023Qp741i4Szh2vkEJTxRs9v5Npg64oxR0XEyALeyyTJ4pAAC8OOAtSr3ZQUmW%2Fh%2F8Pqga2PYJOpnWydWsRafL%2FFtLBn4tmGClc6R1ZXrAspgForqRbRV%2F%2Bu5vnTr7LkKxKPsNzpUDOIP5HNwDdfNAPUlS8GD5EURx8BNHtJLHI%2BEEEKDg08bzrg9fpo%2F11SzyBq2Qg4EyjLWWPDjw&X-Amz-Signature=6453878c2fa761dae8f48e4c0ba84173d2d1c9c4c19119632796c444b6980e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
