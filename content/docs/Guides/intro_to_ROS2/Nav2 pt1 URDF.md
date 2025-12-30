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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=2d28d276d6eeb2f40c5da4d44a9619a2fc9c54f207537d0100a92dff74faa2db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=dbabe0eb8cff836b8be2d939db4abef19a021803bf08fd64311bc0cc46f9ed31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=426376401585b94f396efa889fc23b201551fca6689215befbdc5e0b4a84b59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=4aabc34eff5c8a88ac74730c3d06657dea84226d2570bbb6bf1dc500e141dacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=bfcaf328d677d43012c45a8a3ad50c5d13f067f23d39f9fce3778573012659b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=c58daea4fba66dac71e4279a94dc6f88dc05fab48d27b6cdc417f521a0460ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=f8cc3edd182d5eda901695d1dba403a6babf4092300c7567151d81975124a342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=11516f482c01ee0d22a9fdd5a2914c6bb9b1ee72fd37dc6fb7c7cb7a6e7068fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=b398a827449cf25b6d30b3c9b2e88904deb428bd255bae8ae1683baff2f66fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=1ba531f7395ca454788029ae8c7d35af5ab9033bd35045bd1389a70b07056175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TARVD3CN%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZtcYI1TFdBQu6jM24v4%2BBbv0f0Qpso6kuaa0smHyJfAiBjAhLVz%2B3QEm%2F9fNWYeBXqfaTnuxQnjvad9XHId0GQhiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxsS5mX%2FHA%2FOhJXLsKtwDDKvNmlfZedupHsDmeYW25IB3F2GX%2FwIR%2BitAU51N%2BWRDkF6aqVU78hbT%2FQFZsaUDFLwQohq1QXzPOkXWcaHy6KbbzWZmKtJ9C8nX4vnXwsn%2B1NA0%2B0ZTxy87ahO9xI4CzE11OJ%2Fymah3VPch7Blc9CXwqZigOS1A%2BET6SirsAg%2B9PBq3qNme33YIDtkelnjotaAhhMLiJp3hstcNIYMu0m3Ax%2BWWsG3ns4pioNHUZgZD5sOLKLT7PiIoUykBM0DqneiTxv9By4n4hMPM%2FrDRfLnLO2hMh5mgwVVRdajQ0i6hlmPhDjVST9xfo%2BFxUFdNH1Jzff%2FTy3YQMNsTmHUkXC52dPpxUY1Q%2FBf%2FjMar%2BM1h%2BorNBcHLX1C6NkcpDcd2kfYukS96OcwhgNvHMosPzL25Jo%2F%2Fc00NR0lDXiRzSA%2BhkFG%2BjxSsXiLRegEmtGjXSvme%2F%2BeatSgJa6rfEF9pLQD6tyKDNPcx5q%2F38GbNDL3C0SvPgX%2Bhe0%2FZMKAvhfxN%2FOwjM8pRyydBs3HzSSi%2FisvcuZqPDvschCaqy9v96acRJFonA8620XZgVTRI12N%2Fzo9f63ywWTGHIOdNR3YtMPbEGOXnw97eB%2BTkGD9xVg8nQ27Y09bONW71E6MwktTMygY6pgHbRATA37IBxvO5cFX6%2FnPpbTS4D9LvtUPLZ1n9nqNaaUkt328jjT8PnYxc%2BgkRyjytIUU0gy6qsLomOepdvglhUNUA6lYXCmjguuakiXOXNeSYqz8XrOq4dMy162cUAbAKsor8f1kaxERAl6Q%2BJUI2VRIs01kvZqAVZgz62tn7cgafOuyUmY7biP2Ff%2Bl4VpWIfJf5R8TNcAUStA6yEz%2FHAn8f3GGB&X-Amz-Signature=6ddab06d222afc664198828cd422c8e758fda857bca69d8f818c671b9ef977f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOCSNUA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuOEAHDNfsu6PE3GSCLxMCWEwdKZI89zvuG4BsVm4unAIgSBBFIku9AwCfVe2kKdWSUZ2OBvah9LOaqZqAtO54WOoqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGY643CzverSSvztyrcA9nwD%2BXlUgKj1PsQpRuPo5MY3bTn4yGGTeuE819IscrShJhspSM8rSzPWeSv1Aui43GkKUOo5aln%2BHPRIGGTVeyZ36Mkw%2F6%2BkuriY%2FQK0rA30Ox2QoC6aLROu2tuxOSdUFFc5ysmEc7U6EGekPwiBY%2BbV1hqO3NcfRthMoU%2BWn2fzvV0r2dlhxNCb90EcNTVYNGa0JJR3DLXtd1PTiMyPk%2FQr5uQzkqCpq%2BAkrsjc1KqN%2Fx0cpxllGjaRdrxj7mGJNDYutO5v1Na0kF7lTaOUTnoLUv9GOtsrvJ9GjPtk2hDJBPFrZubHVuUyBkYnrkP%2BLT1d1nCCHMcIODuZire4ZzpuD7GfNlziGdaXUVtTJTKnqPO%2BI9RUGHfnd%2B5Pun9wSi6lG6K10HZXyfLNTjULPzlFwBY43N8YFaQxPKEaj%2FFu0ow9xz843mAVAU2Tj0bTpX525r%2BoHpZ%2F6H%2BtkskcpZKEkGi%2FapPAp4l%2BVN3UdpOD2idDgYYpVNfxOv2b27%2Fzk6Ni1klD1DVpiILioz9ZpcPkMJxpPFsINsIHwsZdmOEsuqUkCxmP4Voh9ZsTexpNtuXODyms9Owx7203tMkzMDl0hjvpLLr8A3RXrc4oXqQ0bpST5aON4jHaU2LMMW9y8oGOqUBQpT6pwvDNX7quegxbuq6YJfYQoPzt5P4xt5G6iwOeJ3p%2FALmnoKN9B%2Fuj83jnx68AMX3hBOBnDO91X6BTjUtZEUuZ3kEUAxsHbA14GjrI1B8W5aFxU1dJUVWF7bCD7TdK9jwe%2FSsWPNSDAAHaQkGzibPLSdYwWCv6oKzN%2FQhlZ5y5yD3Q0wBe%2BBAkVqX4lKrVk3Ks3tuvIzp8wGPHVLP%2FOOky%2BRr&X-Amz-Signature=54500cb86daca14263d44a62a0ed50f2f084da7a132cca49bd92843b0b9a9c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZNPI5Z%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLXcsD%2BrD2XR3rN1vOVVO%2BsGBBkyBZbpF6wijtXFWgdAiEAzq1IwVkjcvzWdV5WX7LGYB93TVcj7z0X8Ps%2FLemLAAMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeLKocMMf4DuuEF%2ByrcA%2BUnA6B9DQatryjmUD2npQEn0CnQEEYmchi9w%2BlR7Lx14v20Sc5pTLm7%2FDxE7jswJbD1XHYI4oeJMspEZH%2FmmFey3jnewyVYoUPxPbJuLJqj9DpB46sLclKUv5zFSMivG%2FIH3SlNk7575DTMGZwVLfFOeup9U6JIAzBQrVOtzXV8pNBm7Jy3Iu7BgvpDe%2FWwvC%2BoBanO6dDEZmHqr99qHS0KjaYEmi4w5KqT9BgbJ5a0Itz1JkrdPPL5d3N7XvRfocDSmjFw94FIFUSpU%2B3TISOY6v48fppKHCYAtiDfFMAT5bmd6kHxYRgbrTMcO8WunoaYfDoFCNS%2B4ZsNrbVSlG%2BSANKIDwTa6UDoDr6z4UTIZeC2rNfFynQiFtknEjYYfwZLXJde1pBfycKXJcickjiqcCgYTkL9tzyK6o8zO%2BSouQnbuex%2FEAwZPVlxXcPQwKgVz3KIL%2FsbLrPVtR5VTnkf5F9lSGKW6VpYNVSpweEOB2cZLIvnnxU86OrDR0LKkEeFJToFGGMEj0N3mAH8ZDay27YMubMlBJTG1GT%2FAgN%2F%2BWBP%2BCBiglq6a2VF1aT5dXulrOxJTkHocca0G3pCwjmuoRGaE9X6qmpm1mRlt%2Fk4Mb7%2Fqb2twZr4RipIMMC7y8oGOqUBwfFD7L6ffnQPVLbySR2pgB5PsbJb3b2fAHy2dKfrFp9uOmevHWELrxWZmnY39O9UX2tBsmDKn1E8GG9CUnahm%2FqplcVm7%2BptCoB3LiYnRMQjQLChdvpd%2BJ0m6wdn6Dq25Q5%2Be8OhQt%2BMiQPRuVTMuQYZ9oOjozFcXmHf7B8y%2FA%2FGqecSa8%2FvpBJcuDcDCZgct%2FDkeWGaEHfKfRFy9V17jvwJDELh&X-Amz-Signature=e3682e62243fa43c446b52b5d44322f724bc2b587374071352dd7da3d99f5380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=be8ff7c72a846d592614c5994e9be24570b71c66c29caa2bd530d99ef490d304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RC2LKBQM%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWMsx5S2BBnUf%2BGUweOHP3uk1hg16CXGqKLXydhaniHAiEA9PM5HwWK8xme9nmrTf6w3iI%2FE3NZi4Jks139TBJ7rIYqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDZ6axFOf%2FaJwQEuyrcA48weGgjQ6qii4XwVQADgJkBIQcgJ%2FVK0PmBRuFVXa7bX2c3fwE8ZUGgdaIIzlp9A%2FrtiEl4InAm2Hqop%2BHzcDnPcjaWAf4XQmikJGoYY3aJj3L4VdwVdVwNahkOwTus2zEY7gU7KGGkbEiYgoci%2Bkbd%2FBrU%2FKDmijJBxSp8q1SOdUxAqplDPupXIDhaf57YK6a9b5rW1R9A6bosFHf5gZHGKyWrQ7OP881EMITDectHzsk%2B%2Fpai%2BM4cPJDLskO3E9DOqmNcYTDW%2FlZR8MXYgjamjyGVhg3iA35UOn2TmRu1C7NZvggqLeJdL%2BKKbxl5pJLCqQ9DUAqkR%2FQ09cjYimLBeospgYAe0VjV8S%2BlRhdNtjGzlwhqEqbSP7PMSNCg2afJ2mDQc7JqFTqEg6LfidlFyKbPlo%2ByuHkuG9Io81vj6RsZytAuh0Q%2FFhBKzUcfrgnFaLq%2B5cuT13RIN0hP%2F9bb4Z9bR97nhUamEF5tP%2BnQrCdugOYynWT%2F%2Fxltd2gk4ViXFHIWToynbIzV%2F6GVhdCTUv4K9703gyPiKsO89wYZ6KDYon5ApaGUUxN1Z4dFwBxywx849N0oxoqwZVrTNG2kiZuQO%2B7X1Nc8nvmu5tv1R9cP4mf%2Be5qz6t32MPG5y8oGOqUBRsjYa0qZ1LI2EeA6H9kUnL3zAER31kIYNGQXRrQ7mjgRCM%2BhNXHnah2fp73hm82GrFkjtluwdjoaW6%2F0ZDPdSfyGJ58a8q5q2j7sUzqVe8AyvuS3qKGnBxunJEenWEmYMYNIwlUNDpQT6Qw9eG%2Bydc68vT2H9R%2BmPLkufMtfmweOyCclWvbOwepnXsXKx8igfeAeD%2BUR1tVXEVsK40rnSKnLkAns&X-Amz-Signature=f1047d7fc081a70da6f40e6203f85a0676fb1b460340c8ba4c18bc9c3d2e2eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=9485387562ea3b2e37b617c06cba89c4d98717cc32148921292f00b1c8acb9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS37Z5VZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElry2Y6a%2BQeQwnF0W7pmum%2BLJB1u3Kwr9E%2BYXAkP2WwAiBKdwCWxFrxkoZ7%2FZizbQxKK6Tix3bcKMafuVvMbmI%2BdiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7WS2k6WlhOovqTbRKtwDrrAhDiarkixuOkhlKdTsHUPZLYnn426MkuurhryZlbTuweIlAPMXuBQDX4lUhWwZ3jqXkcaAlHUw7K%2FtN%2BES1ojKisMfzTILPu%2F1dnIxGzw%2BNn6cPVu%2B3E%2BzOptxZy25T3otabDBFOMyzkOwYfgPYd%2FiBEAoHLcKw0iMbzC0N7dLhpE11YUoxn9JPGs%2BLciWM40DNrK7hfbx7gPyHMTXwq%2BFNnkz0syvkNzMbYH7AxnLf%2BNPSV0URfUb8l4awBzeuUTA7n%2FzTRVDC0oyxfvRX6xMzC9hT2P0EYwzXM54HRnVuQemZBLRSZynZaNvRIV3FAA%2BlT%2BBtppg0Pz93f%2FitquPC4beu3NBBPELufCcOL5HeddzqTT3tFJXGYoan%2Fj2susqZb7rfoRb6eW5npmeEgu5RbnEcxAX5ERo%2BdBgtdgUR8a12vQsQV54LbtGBkdakYT6jPVDJZooTXW0GpYvLQXq6qo2M9JRAvwe%2FprXW8Z5uUOLaJ3c65XEICiURYLAgSQy9Hhh7GpaDxOshYds4B7X49dDZkUK%2Fw5aZpstqwhQ879E%2FATpN0YARcsg4LTtJ%2BhFZTzV4xEUbjsqasBtMo9aemawdC0Yz4qgG5rYjUJa8MEodzDXIR3Ll0Yw2LvLygY6pgH%2BRfsvyZL2IDGkTOMIXADrctD2zKpN8rM36GOmU7DKNTXI5Xoi%2FkQYTSjEZv%2FLhfcR9e16XpON3qNxIadHwfgb5EhtU7PfTl1LkCirea3FEmEDKUf57fDMrxc2z7DWogqsgcEEYyD6%2BT1IORUe6A81urJEy7lKr44jgNbgZf3SB%2Bo4m1VD44AHsX7yLMyc%2Bw%2BSCD0RGJnKKEB20UI2Is2hdgiRsEOv&X-Amz-Signature=4442e6b87fde1ce61a20a0ab10af6e9018194e65f220089164106bbe3e7674b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=f9cc3cdcf216d9940dcd2effae9e3aff847320d10a845d692d96e70418507465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGIU6LIA%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsbq%2FmiBP1N9pyqZP6zGOyGWl5yVrV6DmqVHnZoII3YAiBoUTj%2B%2FXMYrA1Sbfj5%2BRR%2BTdKyFMFZa6Y0PIAjeI1GjCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0j8gJNA%2Fo9fCZD7tKtwDnRPWkX2amecioecCPcRRipf%2FjPNE4%2BfmpkdIsMLVqHQunAU%2BQx04gMyBMQYBuT2kw6%2FuSNbf8tIMwJtjrHN26PpUUhts7YxNrTLvvCO1ChFm%2F8xWS55wOXLF2KCko%2Bs2mrEdHdhjiryhjrQdJDWaGVpaGRzeIGFiprV1aROcLeaginF%2BHhwhkbf8%2FiLfR6O5B%2F%2BIOnqgKQqdd18cNLdGA%2BMV7t7W5lm3fr5ZMxXXgQPVAnsXt6aQRxPxetENPujf06BA4PFYn%2BkxdafrHxFx0mB4LyszIUviSwoobqiDZAZ6ui32xjtmNEPIz%2BiUDrAkzGhI%2BoqUzOpt5fZVOoYuTWbfSwESb%2FUftBCXsZPeJusTOGM5%2FrSdcuO40CqoAW9Xco0qtVqjIgimTWj0EcwtjoQ1foetr1tXEB1z8rgtq9eeuQQiU3m9yFPOQLieCQH67a7AqNH4G5U2biQKVcaxQz64AZFeSoSxB%2FJy0IShWw2EL0FeZh6xbfsWiGto0TGmhS%2FlfceW%2FDu4b7N0NkXBqs%2Fxyn0phC%2FuVw9cPNBSFL%2F4HtJIMK2P2X7ymm%2FibiEGgVk6JrbOSqrTM4ojO2GJ%2FGSP1bOUG2KGscqXllsUdb5fZwhpwB27EWHikZww%2Fb3LygY6pgGm6KFF6drl31UiBIc8q0lcy4Xg2JpYbkutPb10wuXoEXo9eteL0iZ7Mxiebe9E7pE%2B7JS6nANJdlnMEwGl3RrHbA%2BbusyxsJ25pJk69cXbUIr68oMzR%2BP0m0KnhbHIIlwdpwFbOjiUJqqgQnd3QOVEldyqCTE2H1jwVqeiFkER11ggXlcYcQxa7XNskKDSF0fJeui3xjRU%2BGsTOeD9nwlNnBZAPDyh&X-Amz-Signature=3a28c53c5792c5f6650e3a8ce4ed056a35353dfa6cbd2c9d91d8cca9cd0abb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=b675cbc65e37d9f3acb48a11bb144650ba4e4911d7339702124492143e392cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HT63FKB%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAHXyB%2Fwu%2BBPtPeLKLnVVHrbdZkceBMwgOCAJsTiqIgwIhAOpL5WjlJ5oDyqU%2BaxpW%2FSxwSy3c9RW0lWw419iZxUzdKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzN7RnHBHhVFOwun98q3AMWB61bYvgVPedTgNcxi6zTaexJZRsteq6eRRkL7Kw4xqGqg%2BOR9OaURkee%2B4v%2FchlJsbjJ%2F6SzjYaukkHHTF102gK6MvojhK%2F7xiktC0sUxQ%2FhtGw9A8JMIxiCc3m%2F4%2BD9doaPNW%2FLoqU7ohqia9jR4cKUl817FmlbHCQljeKPG2eW19TKfc63%2B8dk8RN94GD9npFrzLlKmYk1KB2MHs0B0IGHulKn5FPHF%2FEQsuNkLx4XVySeh7qZb%2BJUsJsx3%2FWKMRlBVIR7mtRkTgxZKyV%2FFrJd2oTBVqYJy6tUd4CZnMpJ8YW7XrsUeRI6qR1FycZDyEWTOpZPh9skYLiQTRnM90TpQD6Xjyg%2B%2FUh76tgfO%2F1cJR%2FSWhJPgnXPCtT1h3s3ywG3Y%2B0%2Fq6H33NEGvvzYjvQmz9bumpJgMVdgqba7k24AfRPkkycOzP0doGUp40mYgfSNqDnmEarOCy%2Fm12vm8%2FisAEIPGamVEO9mZWAO2WgozF9z4B9awVWCpQZ0tPAaSj9PsGn%2BDqQGVQchCo8R%2BQt6RvHeVclegevppj2Mi%2FnW9wCMcj6RZQPshZQMgnX9DbqaLT6hN7APMiV46NmLTJ6SyIkX1BG5qWS8svs4DwslnZeMYH4xEp0miDCH28zKBjqkAQHUKdUeJKgvG6Ispyoq%2FcTPgRwTPeQqugOr9Lp8MHAU%2BToY%2BiyAedN%2F4%2Fo1AhxorNG6iqvJoHzxl4lP5WJKikES3YjULzv%2BZcJdz%2BXioai39AYQW%2BQxGANRXJaIuc6YUudMZKmzBCEFl7eqetSGfJOuMexWpEOYvV3B6lOU5JtdjwO5OoBMuPBxUsuFEh8g4qKnmbCYhgyKfPCG3Jot1G6bgJp6&X-Amz-Signature=9bf0630a929b10392620467453319490c1b7f88adf0c83174da8f9654872fa03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=d047b61a71eaebfc8ee37da69d70c96cef29e6fdab8c76382cf4f447cbbc8c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXX6LHDL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrS6WoyQOqs%2FByF3bEnuvxXlm%2ByqZn6G%2FFQ4mrAxtRlAIgSE9t2KCpfTDXNHbyg9UVFKzFm2IpsxQltPYloXGKglgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKlidgs%2FFrqq3vJbCrcA5nIrzbXOtVscC9UtiBnMHlbKSwmPel93LVjH8lBzyJaIpk9oPnqGreA3mTbEycIO9OTIYpWADphjzxNGlgzwlCvDWDw0cr4AW538o%2BEGB1mKEXZO4tSrlpDw%2BV8NyESq%2B%2BnxbSuY0P6ne27mlp17dtZ5arZZ0iP2%2FxDiUXveQ%2BWI7LqsZRWa2vaCyW823zXA22uYFBB4AdC%2Fd19nMJ93PHKXTh48ro2%2FiJkiYMGsLRDA0mzIc4ccVRYkzEoncaBgpXFL%2B59CcSKlGsxstxeu7%2B3Pp6GXKszJg76JzRxe6vnNUsyXtUdQlUmWS1S6TfgjoSBjJRZ%2BT%2FtGjitwVTYEAk9nipiXZal6OuOa14xUqeafbZT77BbxG1bS3wtuokflZ%2F2LygdpSaX3gj1xhi%2FY%2BlCH7o%2FucvnVxdY0gMqpEJfYMr1g%2FgUW5na1aTCOhvc3FgYj%2F0FhqiKDY%2B7M7omn7w3MzeOqLjQKvqLD%2BCu3R4bXPtoxIicKUPvmDcjOaRUhBLhUneNMd7uChbJ8AULEmfo%2FJzjD0dhbna3rAIhoN5phIxZ8zarT62rV5LHz9QiIB3j9hgOj2VPNRRrG%2FQSsr8SfG%2FrqgwXCIqy%2FKZ3Z2SNalM6XbSyYxzJNUCBMOm8y8oGOqUBz9SbrM7IfwMdpINvmuoX%2F5ZWhhNDVqSURASJ5PMzAObchE4%2BM5XeouHMozTpgglRW0C19suANwIuOgHLJv7%2FnpRsz9WwX83%2Br72wc4LttZRWNYfNcmMKBmPj9CPpHMIZiI342jTng%2F%2F%2BXAcweH6fPcqdjmJKmxKpV8smlXzEyT1wZVqgqRPBq3GD2HtwqLpZuCma6SkfMJOIsT7VJ9tGFIJ2a5sv&X-Amz-Signature=c85d1ea44d54914fc4b9635d13620a24e997678a53b03f35b22e2e460d1afd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRNZNQRN%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICYjz70TvyI%2BfuT%2F6kdUiAAXWh6FyqtB94XDTPWNFAbkAiBws8KA6Y4rWZR7kGZqS75BtOAefphIhGEooOQ3UntB5CqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMK2QWRoRGzizWxdptKtwD3PMdzE1j%2FiCheWr26lqS2a5AJIKiQALqIGqgXmUr0RTNDymkoxj%2F9CbPQ%2Bf97pxFJNtmRexNNeV4%2BFfPRLRi%2FT874ThKka8c0ekX4sEiXut%2Fvu6X3VwHtquNhExdNROHVwshJfEiaslOYRVN068NRZdBVoPzl6E4oJMWY4mZIL%2F%2B%2F%2FSUcQoKiM7XaO5TbsSmeOlh3%2Fdz2MOfvayZ13ObtoXy8WavXusZ4Fzk4ZXESMB99wUp%2B1Pnyagxuew1AywARM%2F71jhmRstZfTk5ZL9I3N5d2rvc1tuuYniQk4OEF0NHvOasEkDk7F3amDgKRcIj%2FbVvrws06Dgr%2FIXQLHEYF1dXdGpsphnq%2FyPLgxT%2FRyaytgqmL4yE5QDr%2BJ4DMTutXdZQq3IhH9%2BICbc%2FbCPDAwClgBHOy%2Fc725irSstCHzs1AUHY9D8ZAzDoL7fn6DOayVLiLK%2FV%2BV%2F3bLZ1j%2BVT%2FJXjFtjy%2FI5CwdX%2FvTlXBs4lkdJhQRpWA1C7rR5w2yxm%2FRWnRVhG718WS%2FsRexY2%2Bw65oR9Eibepdrdi338Nk49xt7ll3kxH8vB2KtZPJ8FCMnbI7ulJA7s1QDbuCe3VsrehOUPLbmuNQk8%2Bk9OZ9lBf%2FNan6jzwwZ638LMw6tXMygY6pgEDuoVvN39eVWRQnzWAJarxnWqXStPMH1xh0U15hjNmb2%2Be%2BySIoN6jHhZg7TSiRaFIUzFBbx0%2B21DJzI3k%2Bdh9Gj5q1H24yXgitOSwYBYcYz1DPnv87uucBf5OGOiPqczWkZtpv4FK89a3qZ19y55XKyqmOrx7HhrvTk645A6xRevfBr%2Fkxb50R9dWuBik3LpzkgYv5KbOliYRPGuzHFnia7h17bjX&X-Amz-Signature=a3e8b9c1bd39eccc24f209fbf636c9f475895c8ae181a8cbcf97240748874d70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS37Z5VZ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElry2Y6a%2BQeQwnF0W7pmum%2BLJB1u3Kwr9E%2BYXAkP2WwAiBKdwCWxFrxkoZ7%2FZizbQxKK6Tix3bcKMafuVvMbmI%2BdiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7WS2k6WlhOovqTbRKtwDrrAhDiarkixuOkhlKdTsHUPZLYnn426MkuurhryZlbTuweIlAPMXuBQDX4lUhWwZ3jqXkcaAlHUw7K%2FtN%2BES1ojKisMfzTILPu%2F1dnIxGzw%2BNn6cPVu%2B3E%2BzOptxZy25T3otabDBFOMyzkOwYfgPYd%2FiBEAoHLcKw0iMbzC0N7dLhpE11YUoxn9JPGs%2BLciWM40DNrK7hfbx7gPyHMTXwq%2BFNnkz0syvkNzMbYH7AxnLf%2BNPSV0URfUb8l4awBzeuUTA7n%2FzTRVDC0oyxfvRX6xMzC9hT2P0EYwzXM54HRnVuQemZBLRSZynZaNvRIV3FAA%2BlT%2BBtppg0Pz93f%2FitquPC4beu3NBBPELufCcOL5HeddzqTT3tFJXGYoan%2Fj2susqZb7rfoRb6eW5npmeEgu5RbnEcxAX5ERo%2BdBgtdgUR8a12vQsQV54LbtGBkdakYT6jPVDJZooTXW0GpYvLQXq6qo2M9JRAvwe%2FprXW8Z5uUOLaJ3c65XEICiURYLAgSQy9Hhh7GpaDxOshYds4B7X49dDZkUK%2Fw5aZpstqwhQ879E%2FATpN0YARcsg4LTtJ%2BhFZTzV4xEUbjsqasBtMo9aemawdC0Yz4qgG5rYjUJa8MEodzDXIR3Ll0Yw2LvLygY6pgH%2BRfsvyZL2IDGkTOMIXADrctD2zKpN8rM36GOmU7DKNTXI5Xoi%2FkQYTSjEZv%2FLhfcR9e16XpON3qNxIadHwfgb5EhtU7PfTl1LkCirea3FEmEDKUf57fDMrxc2z7DWogqsgcEEYyD6%2BT1IORUe6A81urJEy7lKr44jgNbgZf3SB%2Bo4m1VD44AHsX7yLMyc%2Bw%2BSCD0RGJnKKEB20UI2Is2hdgiRsEOv&X-Amz-Signature=5825e7bd8022c815e9d31c4bd2012379a0aa49c498871be7008ff7313a3a274c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=4ff1416bd95d69a9a380ec265d7280a0d4dabccfe30d61678edcc489de89bc8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECRBRV%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVnGo%2F8jxPc0MPsTzxIGynb%2Fp4Sf6SOwx9WHBzdC%2BuWAiAIbkdXEo7oc%2FL0kQ7wQRU4CZFeSX0MRZ%2B5ZDE10aNMMiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDqnRO1IGsyj5Yv7kKtwDxzqU3B9RZR3h8ZWl0Fu2QjplcZIz0nOeSsE7Kk%2FPwR3YqTBzAiM7IAx1WyjOO5bivYd3MkiGZXt4IJf4N6cXGBfvbrut2aLfoIMJXxPPn2Vb7qEmT1%2BA7yDaLt9f3ZQCKEML023sPfLDj49aKEwisr202G3eRBicVaXkLCWW5iQvlgEfrR8i%2BFD2WSszDSw%2BaMyf8cJY6WmnxSsDRREHQG9MhkfSrRiP%2BxMMR8EQfjq1sj3qLyIs4AcE8pCtLReamdHMOKkowAouZEbvyL%2BZDKr5z6A0qpgLMgD3KIw%2BxysD8ABO2Xqcds85gW%2FHHbzYSlNTgKJby7zxaZxNUtytBGl0mgzNm8bP9%2FmvuNzGNWmZ0szktmGEk%2FgPJOECHO6lEv6A8aiKuXU9VvP5Xic5WB0gNnr6RDScy2i7iA2PwqiYYeTc0%2Fd622KMnABW65AuK%2Fb4yzzltSoRc05eTI8om7NgWPmsqQ3eh4YUiyDyDpV7Re18uF5fVWB1gmIoqFTu4u4g8phhJdMXi0s%2BYWLWv0%2FahCDiPjIAaBdfzOI3Ln1FYIrUZjloBILBCEFTWULM8FU85yInhRO%2FuDxjEXJT4lFDDaI3OGWEX7RzhB%2B0ADbSAWKo5%2BikiY1WNrYw2LvLygY6pgGd0grlyoNtwyAS5ZOoBnRqG02CNm0GmB6Nwp7F73TC3nglfQpAJi%2FTf7tv8xIJRf%2FY6aG4w1wA9JN1UQMRtRtPiX%2BdyDmqGD2%2BRj293HHfAeafkuXpSwUKAUpO4KgM7Iu9tqn8Ij4OHAfMdc3PgTkTD1KCfkImaNvmpku5TM89%2FRzsrBk0TCfbjKpwzgqPedPd7mTyp7Y5PN3Mym5QVOBl73uXkpm%2B&X-Amz-Signature=243ff066ff2cfb4fa36713adc2695f1b373910924c563bc75b6066aff975d6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=9c43d22071ff45df51d4078076f6add8c6c0b1fb9d20c6f7c5ff7a46cda55238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=37b702105e72cc9f08118126d76e407009c7921b61ee3cc22d99dd3481c96b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=cc2a57b2b031ab7dc3ac61eb1be56fc1b0c355f16a9fd6e0565cab395f6eac70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=1d87c024c9d12d379896b2c73f20437e92a1a24dfa5565961eaea32855d76622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A5LLFDJ%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy36ajoqwRAzYaPVK%2F9cv%2FFSH7eTbeHMioW98SzLyDNAiBa1Webu%2FQEqXEib%2FbalOYO59CnlaDQd8qjO2QAgqSXtSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDFoYh%2FWRVV%2F2FwCKtwDQMx3iuNbhAtxtm8UrvRWgBc65XwmLIiegoXLN6f%2FM5BhPUIUHQ8nz4KedhPRtI8XQCc2XIqbUKP2oIKNo7QymfoUyBOyfXqBbRzmzmQTwNchvEvrL0nW6mxkJclhiqnf9Rs5YuV4Ktq9XdWlyCeQkHWMDFnQRH%2BB8a%2Fy%2FutCzrz0f%2B7Tz0zSoEq8QEq3S3AVFOCZ078Le9pBNDJSXzgl%2FHVIAErgv4QmhwZb7AA%2B1QNTQONFQXjXLaAe82qg4qhUSr4ekAN2tIBvERk473CFExX03vOLhr2xdK2zGRDUKhRXBtrSC8jqo68A94mUjDfxCxxJZjZ5VsL%2FMKeJCe%2BtbSeGGh2Oau7EUlG05a0Cr%2BtaL7IvhvkzmH2%2BUGtWZReIPGv6Rd6ZGthX3G5C%2FrvH7j0QZKZ9bonRcTSk%2BnzCEv1Y2UET32QUcZRsilXWrJXNYAq317fpTGtCBmG97Qsp%2Fsx%2F8%2BJGjVBSOexIpeldcuQ%2F%2FQZUwcOdF5w1VNGOBrPH1SH%2FcPkFlyeyo4f%2B5%2B1OH0Ii2U1bjlu1aSZqZWez%2Bs6H0kOhJuqkICT0ryP9Sn1bwjB08d8mFk6rDmKc%2BlxrCdrXEXjbE4x5xR7TlgPUrKDTw4EiUxyr%2B0ozUYww2r3LygY6pgFOvgG4QfM8RwhxVof9iHEBuAn%2Ff2JXUiZsSfkNY4lPWdrU6FFc09MLhfa3eMdqyGJejsf%2FB%2BtWzl5FKWpFLl%2F6Dq6n7BZzBG6hBOgtiFZ0hXEcZsN4P7fE%2BzdRFW4gc9HQDUjPwuLtIN%2BIgNW9PSu%2F70uB6bewoyOJlUe5ZlORJSVtxjFvyubGAuOq8CsYh07cQXF4KTShY%2Bx4vOoMqcBynGzH7gPP&X-Amz-Signature=f729b802851e64d451f3bd732bfd19b83fe41a8d423d3a793d709384c011ebfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=932d5f5c6d4fdb9920ef189f9cbe4a990ccef4720bb0a494971217ecf5bfeba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=0fa7d7d78383bb2c24c9dd761c599735351be1aae9d997ab344bbe9256345d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=cc2a57b2b031ab7dc3ac61eb1be56fc1b0c355f16a9fd6e0565cab395f6eac70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=3af7f64d97cebae1bf40bcf2836ce7b4de87af5072af297f5f09071e51d5ad6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=a1ed0d3dd99f8736f1c32d8da6610b240fa22e4f5b6193e0263646bc44390972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEIV3FFL%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHbFEfA5fySRHnTjvpaRz8PFtti82ez5yNjm3RYFtYrAiEA3jFqCCX68KYkYyFdBXFQpZyMpev%2BGmSkfhTs5Wv%2Fi4QqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKHIrroDyaTQwngHQCrcA8XujecPcebbL88ziDhw66ia70byruGK3zXU6BTYqRVW%2FqGhR4cChqDkkaLlmxlkQV2tRxJY4ZmWYEBrnZN6g7teAKjE3rMlHmxPkYbS42JJSkkVmW%2BOv5wgLjPORUhm3QCQexoNcZmtnLiDaQIKvuzickI2z%2F%2BNB6V0Gqel0tpRQfeuevdz0EGTr3U6SaCZWCeGyha5wAyBg%2F2HITkchM42waDmkhYFPU1qyf0eAZuYh%2BjhWDsu0TS2GPd0%2BRTmGdfvOBKKKT%2FIISuTFB4hiqG7GHkPycdxZMvQMbAqpjftcXMjf1conJ9Igh7TUSBT5cVjfWjtMS%2FN88kfMj25rHRGEFa7BqTY58bXm4Xkr8qwI8uoOAp8AXMCaoEHzt2kDaXh%2BX9bmrJ8VsFsI6ozL11jrwl9T4%2FA%2F6zr1OIMy54vJrFFwzhTmvxuycsTifE12aqJrwFpj1eUH6YrtdOWguuhWwQ3dgbH9NxNGE8vbJaXsYG%2FLIZshNY1S2NmVQ8iWFoC65X00nhbFGXe5CRaZfMyWAjeDcBlx%2FWFMSVpXbnWJFoCvNCa%2FTz16XJDGpzNYcX%2FyDK9eIUHjv%2FN87kiYd%2BSdbFXJH2sTz5oX7i6yf6fJh7UzNWnt0KzxWa%2FMIjTzMoGOqUBHD13a7dbrRG7q6mXnX8q22LedARb7qcv4sCd2%2Brxa9eWcKwpbce8jLsdKQ6rfWpoJv2m0Tmuv4P9laxn5RA52r62nx8RwqLDiSTcuET9j4if8sGqa7EulUm5AEK1q9jtnXOBBXo4ikrSh5arRyKwllcsZhRDKQEtFaEKdIskK1RJEXjuAZLheFxP7myCm52zB7y%2BPXH5b03LlVgM2ZQdadz196Uo&X-Amz-Signature=e5e7e1cac349d5e1674e91f40daef0d878724a3e61da2f5c8c0081ba97964cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


