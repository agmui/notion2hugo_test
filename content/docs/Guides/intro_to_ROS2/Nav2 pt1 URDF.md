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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=33282c343acd4c3371846cc5d8610bbf2da239b61b49c936e0fd93f78be1cff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=23dd7ac0f4eeda99776bcbb9991c36c9afcc85de2d2b3bd6f0c0aadd6842f148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=c7059856d4b2be198933a4f3d890273eda49c02b04c149b7ea2385e5d002500a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=4f4a77897d220add03199a04b7609dbc1f369f964ab21e03bedce39a593382fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=1f570b587b5c71042ddb39dfdba91e14a95654c69ad3373353307bbaa58abf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=50ba1063e5bef31b6503e3a6d1a1cf7e5330552e5671e346295d2a4d82318771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=8f035fccc9f8b0d0610c1cccd587a28898b5f532954baa0edd086af35a524d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=37e82004a0d45a457c9cfc11d96ff7e09621ce8710b1dc26863a0708130f6400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=0e5c63befe2f1e384e0e060ba645189c4a74bc89c336d350b846d060b2c95edc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=5ba567f0df4b799848d5f80a3168687dc6856c47ed8f8eee998499c085bbd4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=7f45dd51d1695dbd2c3ca33d1f5fbc71efcb17beebe5f950dae3360e736f94c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=ee00a7fbfffad26da65fab54e91de11f8bb8fa48b9cead9531fad41097b981e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=01d906581c0a0fd264e3a535b3551c4c2b4be76cf9607a8e537ad00b7d7f9b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY4HUCAD%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQClB3CTD3Qd6N1jMtpSghtZCWTFxw0zqfkx1GnmcWSDhgIgINEe6AwribcyrjxB6LxjtEh2gmrHo13efK1KGA8eKSUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDDDUy%2Fyq0wO9pVJLvSrcAzh1qtjbaMdkZAznCnT70wq5MJuPxGNRN9BJwJi4Q2Hr0pEnpmXeYEdwTNCWtEWi1uh6c7idk2gypRPonKyp0xOVjaE1RSTn4hyRvfFLv2svBNP%2FZ69E1XIb1W47A9Rew7SarU0Ws1%2B%2BArFa0smM02s3%2Fd9ExYe7NZirUsygjjjiqwZ5ZOylx0zbljYk960iH4uxhgsjZ%2FIHKOxln6Yv7V%2BTvWOYYa5gFRb9yZ%2B4%2F0KIGhrW%2FkNCIFp9TPekOD%2BpT203sFBUlviwE159L5%2FDj6%2BTSNEyr%2BoKLWAkUzjbYGfsqN53IAKROv0LePsX6LbUyh8I1D8Zb19PPVMf4nwgR4wNogbkxWIq%2FNKTb4Aq0fLK4srrQmGWWvkVYasGMuUGY1uspPc73NGMgmgAUpxcpCjceL0Ku%2B2KyOgKtdHQyWDd6pxvmqmXa85zy5uJHMN23EMKI56lF2Pn9wCwXRaUpYMVjuLwcQYyaEvvdbLDWg18wo%2F1vRgKiak8Y3K4sd0LQ2xJI2tQFy967fzpgNM%2FXKVIcw0xLVyJuiaB81u4Qog8Pu6TdwEjGVUU5RQaR1Zoz2eWWpOah2KFfaukaAbsWBvFY6OdEbPZMXQl%2F75qYkJMRRVONWKMmHFfzdDVMJrgl8QGOqUB4nzRrqug0p06hxkGrzstSW2zF7Xa05IhNLvFFgDCLB5U15pjAnwvGQRekw8HR5QRBBi04mlMvu9WF2UXm35NPFHmnK8v0hjxytkMSekP5RJjG7sQIzuhRBu3ROItQ3dyYe1LK1Kj70rrbV1TXx%2BWo3HPQvSKUQOwDsmYmgsV1FefqdIWIHDKiM1ZcUuHbIl9Ti%2BXPPRdjKL6rkLjv%2FItG1KmMGEd&X-Amz-Signature=ee1d32a01b49a74aa5f0ef39056b913fc00d0e115672edc0a715fcda36f577a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=f9e6c6a7e4fe4573aecc72577228541e26da52e82f7fb5c8fef3530770a6fb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=dc8a8925a26de7da8b366f8113fac6132a3e3d148578ba8118fed2b1589241d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=b48e7f99c69e7a4cd226c29c45ee5f845b2e5a515295ce2fc0e0137c066f2b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=9c1e9c41fd1885a850bd43312b6ffbe88427d4490775664de75474d12350fcf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=c6d12c7c119ae9cf6f9ea155b1218a5b87d33fb425261ed802c72df76889d7be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2VVHQS%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQD4hARScdiOCV%2BLlnfRDYqNT%2BUAqJDl34pKxj7MqcmcBgIhAIXJxvx7LfZSJIh0XDWlx8iA78JlUyt5Nnfd7G%2BGy98iKv8DCHMQABoMNjM3NDIzMTgzODA1IgynfKF60znclCkJw6Mq3AMmS2zceDk0UXHpK1j0WHk0LTRMsII9NORUd41wodSMeIFGqDoWm3OlFl958heJ76cDFP4l7%2FZ1X00xxsKFe0d6ffElXgb0Sc0n8LQ7McpLnn%2Ft1lsdVGTbBqQKkLCvr1DxaodqXtkCPT38tLLynoVpShuXQ7WfKsbPDVtc8IsTlvrrQ98mzDGLBwRgNlNROqYlDLc0Iv33EGzWAz9aN0NvzAIiW6OomENpH%2Fu67Xj0HQjLOZQgbVyQVRcX175Rf3gcfTeOe52FAMSrXm8Te2QQqpFjnCx5F3kEndJVAuBfGQ333VAD9qcqe8UHvmYMsEaAnECvGl3cJ63Zn4%2BZJkkD%2F8LLNgHkvSpoCSKrjxs0BJ0JkCVCV10pAuBeUB0TZ0MxJs6IFcZsT8GDPvdUnH6y%2FkUYO9vpjSmSHCMeKN%2BlOjCI%2FA%2BMjiwtp5c9sUU17eI%2F9KxSwTfhMgePByhI1e8Bo6GZ93fdJcbqaNNlZPONXTruayC%2By9rT8559Nfaq7LdULaUgwWJK%2FZKgoeilfJw1LNmoq5HaVqVXzu%2BBxfGpVA2i7aBO3v3CtmwLTf%2BvtNDSt46WRODtL1dhu6O3mnYfeJgs3BAa5Ogs%2B8BU8vb%2BWpfI6Q4CyvWXa0X%2BljDa4JfEBjqkAbk5Z1ITVgeB%2BCU0T7Cv9SOJmisNVtPMRXLjRVoORT6XGDyA9h%2FaJYFH7DtG7dQzpNjcGpELkTueodg7%2BP9FXg1Nu1ANUbD%2FW1ACCGLXZ6z9E8%2FSdtEJMHYcJkIHiHBhCJ51PFiLrr5ycpxsdVb2qd0KmLAwom2mQmfgZMCrB6sUn2dWQZ8uhmNqWwI%2Bo2zbax8aaqmBLZ0zRbBlXILIhazml39l&X-Amz-Signature=c3c88c65d9e2c0f2217b0dca8432563d5463c08fb123f5a770292b128916b3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
