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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=67726ab558e8dd2035edeca399ec82aa816b4614d196eade40cc3007c6e580b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=0649123641d0f6050f336251a0db767addff828c541bf1bbc80826581686942c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=83b216452fd9f7b33fee5254398a4c1923dc9cb86ff37382a33871d913d8cad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=b2c6c055cdb41562d31d63e4cfd8d922a8e2b88c258b52c459b896e9c353c3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=41c35f6be06de4aed37b0c301cb67bf1334da06a66b51de8fdc7b2b583fff55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=81dcd9c9818ce08963eac270ec774755355b8f8d9b13f2c0ececd0f0ad5e795b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=e264b7c9685d2fd57cec4d42091ae39a8aa26a6cf666ba0730225ca80f67ca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=5fa0ec54409f8dc80e83499fcb8e52ecec91c7c271787cb2522af5050e75b7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=ff043e8684aa2156618a7fcd04876befd7233670c621363f6f6d420812abc934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=7899aa93d01e5f1b685027b1c4b13f4b5aa8f7f9a47d4c8dd49647d6f2c0c1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2LYMTU%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCwgZ8dwYGKfbTMoh1tlKI4uvSIN%2FEGILIC3glk3xkxtQIgBtXqs1Yhb02BpeUqmy0I8PVfJqQnVBMUVs1uZtacPXsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOEl9pQSaRhqmTiPICrcA4aXIQ196aWIcg3jqeKoWr19AIt9YGAKzX4p3Bbb35ZRxVmO4c0k3baSX15HEz1cT5v81F9qhXGpyWkadIUnAe5F8Zvyyuyp33BhKNzmpkRpwZQDrA7WfpjbpVGZj3v1%2FUdE7UYkAesVC9h6PGgK26VTu5jQkXyR45xoeoIU5qJOl1laPKXmk%2Bsty0nTqq7phV%2F6%2BpDcwpQs2h0RDf%2BG130PL9gxFr%2FLqvZO2YoLt3%2BY384iaymB61b9rP8ohdqgPXMe15dSkKR8fRwEE7JfdG8u%2FrMogjTgSx%2FL1Bm0fesB3zObDPOhVTvcuIe5iCe0%2B12MXnBIqs%2BI%2FIRNZFpruBlmSmI7LZHecSpqNL6ZWPU4Jq52qhU2xFp%2FkTDPmivwyi7nXFxu8MhZGRBlGrgEtrFw%2FwVn%2Fcjb5Lsp7FMKYTjU5XdZ1lS5169BbLl63sPpDri9%2BxajW4288iqCzUQSQK8nakVYH3V3kG890CMh9aTK3kBRzMxqoSIW68iVJGhG80bXIz1ai27kaHw%2FMBnowrvDF9v0yRLgLpEMPnNvyg1ISV0pi52a58W3ESSzsQ1V6%2BY3LhU%2Byr0x9kgtXrh5303EdRe5ym6i2%2BfqLRUnlK7d58CNiZhDZrUmwzA1MOPpldMGOqUBA8FDyYk9IbOrX%2F6aNe07z5xlELJTrstZDn9WUaYttOXyn3T9hC57a1UztA626TS76m%2By2Kprz7nutec%2BhX2u9ESzanJPOz0satKFxKlOnPB6xi7c5W74oLYoJyF%2FWmaqbZXXmJYJ3q9o5K%2FBlj18A8dseKWgyPnNYdz%2BELrKqCxNvDAERcPx8%2F9hl5sLdqAb9hgwFw%2FA7fr6nhHy1aKoqN60%2B74q&X-Amz-Signature=613fd6edbab5c086f08f407fd53cce5987c906ca13896827445629880533f4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY6ZUSMX%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD8KxfUlfDm8MO10F340uz%2Ftn6JGDZLM1CG70QKRIKLMwIgY5H61nRDYtHwyVLE15s4QlSet%2F%2BXuiFr%2BGlU0MJb8V8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDP2QGaOoZLJ4WJZBQircA8F7RjQguBrf8XNuEi1bRITjTh4AjBWrIBm0QLmO7hTscomVpiUO8l329ULBj7GaNsSIJD8%2FhzAWQwQiT%2BX7z42Kd7JB6UCMiVh1bKVyILsdpEGgm6Ig8tUUvvvpOPZtnQqvJ9YfBO6eqlxb8a4EensPO6O4apFrmhLIQB01G06F9XnTDouzT%2BwLWMZaoz7ORZP%2BcSa51uMliLqIDO560CwaqtMh5UsjQe0fScE5aFb9e82n8Wedsnq7TgvStLcG3t%2BfeEx9toNQHNoyo548%2BOZSX98TirPSGVq7zox2i0F%2BT9yhmI1Y3C3oO5Xh5ypu2sib7g%2FbOoKKq7yoG67CuJco5qEDbk82lb217wgbe85Jv7L%2B0BqzOLo8V%2BbF%2FWj2iJZNMoID7ULOkdORBGbOLwFYZwJX9mFxyvGGx8cfK8C538G5mcQbovTB8UVnrCsJIXTDxryB%2B6jXcrwA1kLpyRHN3l1OywS%2FOpYvKWNiG8Uu2MufRFFHMjkGMW3FQgZ417VWdvtHkkiV1MOE99lLGjFJ5X%2BO8JlcpFvMWv%2F5mP0AjWD9lTqc1gCQF4Dgr2jnBL9TR7AZ5RvJ0qGUWqVofMP6LdZDSYAkw186c5CJJmbmaOFW9K%2FRD1HhXVRzMLDoldMGOqUBRD2W1%2Fzjr29CERlL6m15mi6WF18m2Ysi69pwtYt%2FwY6%2BxRxOVfvJQN6avAQEbEpeZK0z4siWHqJMDu3t4oFTl0yMKU80LVec4PjENSE0MHUObtyH7VBNBjk6mNejYm946Iyu%2Fi9Y32vPVl92HeN%2BxFoG9Y4PbqCwDarpLhtktS0o3%2BlCmGWB5aW0MQUPk%2FSnoRlnFhpWjlcZFFf4whg%2FbdWZ2Ut2&X-Amz-Signature=8e36115c6d6bc06a6511924593df0f63b14dd0ca9c1af6b4910b002a961fcdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2JIKMH%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDCNZwEOq%2BW7YoB2BYvsOZ4V7B9xfbZosheJoUUmo3NpgIgZDQW5z3Yr590pBPMJb70AIlNjLd58ZqywzVfEcunngMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDNmVuv82RHPdsF7HlyrcA%2BSHYmbf5U0cxP2H7KJJdHqk1bOlC8Fo4vQQqtdOsYaAs7ewqpnOFPdt6TNDOMfYKK6OVNXLziKfnNBAd%2B787OwISYsQd7vS4KNQMHUAL8NdfQy4MsbkIORS93984%2FI8FoV5GtjYgKYFI3VYtCchjDJObDSlzLccdkshQ0qooucU7ZBDy2FNSgwqC0FotbRfULI%2FsktNFluqCtn%2BZfHn5JXe2cWa4rAqVmped0GiXk18JfadKlbvrCPpIJ3BnAmrQoX6Uxx2q7Kp%2BDMoh%2BKC6tG9Zgt2zQsEJ%2FIPLHsltjUsfSEMoyEIHGoBQSToNbXIw184L691QpTuFnMEPkD7QRDZqmfpBTWgtgz6sW0Ja1yU2sxqPaeFjtazbCXQzPd5aU%2FMV1XlDM77XwOv%2FBS7ykgcR2neRHR2m%2FeD7iaicp3AQwEqkZYyEnIZhQ6qgDHd0C0qY36uOcnvY%2F973zEG9Fl5EcxH6LAP3ZiPfwYh6ogyK7jXe6G%2BB2Kvv%2FV6d46XZXhrftQ9mOT597uuZwmmhwqtsBtSg0WMUrToS5lTJrbK1n%2FaG1ZaAIGfAh6mdeeGRlNmmeVaU3M7eNGFX%2F7W1atEQmbrmMAAKICaMbYX7XrM48A%2BoOp2ZVePf8lxMJ%2FnldMGOqUBwtyCM6mFLoXK2PL8mXAcP9eIQ7Uc%2FN0Nt7ltT6LgpVHqVHYRSoP6M83pmwSAjOiOf4Vyxae2rF8UTrmEVSYNq2yf1LVDW6ofWE7psx20PbwKVGaZ4P86VjWai5aqFpBIBfml3u3Fo2A6%2FN1ys5IDI4KG%2BY23G9eCSZk8sRyfpaDJq7bcMjGiq9NYfQVr9Kg9ruQfXk8LpNhrfissjz3CCnL7Z7OL&X-Amz-Signature=c60dec9ba51422157f5de425f2b4efb496b28ccf166a080e0105880687fc2dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=57ebbef4f80d5506271239b3cca1192b833bef7f00a8514a8af270f967112f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSD2LGSD%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEJD%2BULTwSwDqwirRTwRLQ90PdkHdgsxDQ3XfHSZOvT1AiB9XBmJ8VHRhbVKER0%2BpyXLzTOcV9GiRAmcPsFVkaGY4Cr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6ntvgEkUwFkk5QPvKtwDAeXnKnyXK77I3ngWRLoDUFRWLmFwEp3pYCiQyLKFeYATd0b8b9WRHATMUGcBuLPomRHptSBRaogLQ4uKCC3AW9bihvuXQEI%2F%2Fgy8X8An9Fzw%2FDf7W8UFYsNMjxMJcMh3WDC4XY1ODyyoCaBXcQ3toYhx1kUzMStZXRfglgEL56gB1bU2wPk8NcoPqjH5JMIvFYTZ%2BL7DpkPUU3IeE0EqgLz4p4Fl8YWZHdPImx7RviKKyxxyIabdQH%2BeZafMLo7Xfd%2FnQWSG8XHzVVKnbEdrPVh2WKevalnPYmdqzRYfbBHWm8t3umm7wNTRi7rNefEOMA4NSdLLBGfJEKVblvJZftpDpEd0hb53pXnUgK8mOXLA4pMGmgLHNSgfmYJL4wfEBPoxbsuTBG7C%2Bm%2FmMKYkq%2FP%2BwqhYK5INoGGXDfkW0PAZJFyxZ9bYr8fYqJMmkOYJuIStgCSlgqXx8uRBhYgR34B1mMAK0RgMxi5PuDFw0kjAXiJPVliSJuqnKJzngQJdPcpr5R6m8bk2gTCgq0Q0BDdxx3iUXNJubCrSVDhEoNShS5gbmyC4NvNx6xk43zm09ZTDk5hbigqELFiuE2e%2FN9J5Vl1H%2F8K1YY1qVdxaDVp0zbIDMDuDxcPCU2sw0OaV0wY6pgHcVD9MQO6ZW9U5Bej72xshXgso9yB4GiAnhsxTwQuMEbctldlIeHtaVpqjq9Ya%2ByZfuJofJdgjgXZl0zIu5PLztZfaR7DFQTSmkF%2FgayJTxEa%2B%2BYmBcr4vDmdQGGAavoStKbIJ22wd1yGgC1VQCjt6YsrlaOkV5TPm1WNYKis1H951Oz9osmgeh9O1BTXnX7xIxGAFf8OqPvts4rTXWbCjPN4NR02d&X-Amz-Signature=ce141d0b8f8385feb40156366aa08559b52e089f16b4eb66d0e914a4d1d19c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=6ddab8c74ca0e6e5195384f73869c0e5b3c6042642e8d1b52be79f589926959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VSLUQC6%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDr7Rk8EYPCTdx7oY2Gg7WlRsbRxlB28mmkGn8BaAzvEQIhAKluZa15ETq0kZ%2FEAx2SnMzJQi7jVN1MXVIjr4xpd7FLKv8DCCwQABoMNjM3NDIzMTgzODA1IgzR9pmA1x8diuFySVsq3APHByPGRjqMH0VkIyRJpRhsDCjfr1Rrr5rvC%2FaM%2Fa3PUs1Oe9CLNAeMMwYgcLevxYZNFN9pBQfim0uINDAuRiCAD0BnkbSNUW04MpAnkwUYxqG4SRQXG%2FQ%2FQ00uoDNLNw8dJJL34bo0lnIw%2F%2FEJNZCuHMKmuD9HU6d2cCR8f0Jy02Am5EbDt8RuK2ir%2BqEvotDUAvpmfa5vCak7TMt5xbXhF%2FKAGouRgQnr2Umm7SrdwSvl5vS%2FVRH2BmIFeEBp9HzeLfgmb6u3jmHv8GyIrBKdOFTGltHEOVOOTrG6RzbGMmxBBVvjAGyLrOfeiNrK5IP%2FUDbxF4qeHkbiGHWFOcr34hvejbOEFay%2B79Ww8raSw7XDU%2Bz7fuxI5IPZhPaHnYIBKPCuY1t%2FED%2FBb2Rq2ZF9sQB3OYC%2B92ddyigO8q%2BjRqQ54tE4ctIpLz6xnbhukMuwR0K1HVp5Pieik61uPbQ1Yl8i1x9qz4xKwQJbodcwfLi11z5AxOqOj%2BitI1zrc3HSiKlIkDgZBV9zI3PX6REmEcnLJcb0%2BYUaU8T9sYb4fPb0N5DScR6VJxk4QmTPvOylkLayjM5rdNdthKYzDcKuOhs9u2pUuwmFieq0YRCgjzGanIdYT7T7NuY%2FmzDl5pXTBjqkAZZs7DhTau8IRoNGzob%2F%2FFAWza%2FzQUMsN7Se3yewgIIBTDPaEH0k5QarMe0657mH8tL5ktCeXI6ij1TRLUY7CdUh9d6nI4lTVrRpXFFxQX8vyW17xlaYbkXOiDO4BOTNK96tl99qO2p7diTAjCT1wecicyY%2FCpvd6mx4BUqO%2FPAOp%2BDQubu25YnsvsjI7LM%2FXcrsaz8C94GkMY60kiS9w15tf2T4&X-Amz-Signature=4ef0a70b634a4e25252264343658b20cf064511fd54285b70060e6e7d8350311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=ca2c918e916f962a865ce631d7944e6964aeae7c9be3dd6efe95bc7af5587ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666746GVXE%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICujrz4ntQjx%2BNPz38N2Ka2iQMSRlNOW6RoJiPWIjWvyAiEAnnJ%2Fd8BfcBXrgeQwWUhC42GXiesOLen0cmdWia54Ifsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDF%2F9zsehqlxPkQuzTCrcA7KWybqURMDtIHyiYINdLXlKa10QWa6lED9m76J%2FAF7Oqf1DTJjX7gZvwvZ36in9fFcyR3PrRMYgN9eopaxys4Ze5kPWmhozKMv4FRQS0M5LTEW4cDVdeWGvBD4Ty0v3XHSLZCg0aYgu%2FeEmQzv5h0zPvqA5QZbSx9GBs9AJ1uwc6OCMCQlmwELbDxxR9BZjVByUE8Bu1t73HYO2T0v4qHmn2PUk6IrJJeAWUz9mPs0JkkTejAjZtkKi6T4vmK5EjV%2B7%2B%2BvDfqxDLU4PKqCQdG0fAPDmbHm7Oabfbg8bixi428JcRj9ROVHeNbhYZ4aadT%2Fg31XcahZpD2Gx4FFrqgKCWx3kOT28rWAEEe6uV82bHKVirGHDYvPh1sqZkicf72MQipgaBegciMTjfwCi5LcJNKciXT8GXnnl0IKa5%2FMXbXsY2UF0YYo84tUVjPy41j8uFI3zD4E5phKnfuekpfQILffMWunYobKq0dQwi1vYvLgaDp1Swwaht6a7VGSiWHmxSUVcdEs7K%2By9EWyxW%2Ba%2BEcHcp9MJ%2F1Z2A0ziJMoqqZlgK7kT6Izl9YWQD7gwQhJh12gykl8dVESWKcWcqoSeVsTqmpB2INoviUbXLgsA0bKV9UKMOa5uVp5%2FMPTmldMGOqUBOBoINNWduuTCorVTUEx9bM4gmSj1AZOHMhDndEPS8dvyksm74RK%2F1OIqEtMvO0Lc7KT50UkDwjOnmnPXmp72couRh3c17wnEaoTnXZOXtS%2BJcekbXrOoOd4dcYQaBMzw7xAJQ56XnZ2GClUnYDsE8LyM9kY79%2BSr093UYILVMg8%2FTKf05AFYVg6INBQQ%2FqoycsQt86KNuJWe0rNjBZT7D0fl8TYD&X-Amz-Signature=e8813aa6ca32dda11f01ae1fb736bf55e16936331516b1f2fd444186cd623b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=431ef1d8213246f9606183cad22d1dda9652814f6a09dad5c4526284c14dfaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7Y6YF3A%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGIIxnHWgYFxFnT9qLjpUT3OGqRB3%2FTRunbdT4LeX7cmAiEA5W2zlNBtYHATIS9BXWLZZChGj3NVotbLeKRz2lZhdSoq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDjpUwkYbBirAatrkircA%2Bob0bOPJOsU%2F4%2BK59cK%2FvJfaCVygFIBIMXFRwLhZud59tAGs%2BcLxIrcz3q2cjBK3jXHTmQ0vghguYkX0veQJWC3cKIAPXuYSQellV53pKHmMds5bIzLS%2BK28ijB%2FgSaGGppWvD%2BcA0S8UYaHeRZSEQCa1nXwD2EZf7ky1SPWJKY4wsLrQilfjTassmTAlfF8WH4lvufemG8HBtKCyczY34wJu8VSgo19S1erSwfpRQbu6ZMrsPOW6M%2F4P%2BNFQXdqYHwupwB9p51SUkxLRC8WbUES8m4y7TqwPndbIqdLKYqud77oeJd1FOkekAQVmwMmKaiTo5s4qlEVyR6MMu35QKbK4XK2uvrn%2BycWiEq2v4%2FF7W8ENVygTQItY3UIvJV1wgBykCLW%2B2XTviVJ3DFqUgXSvDNC%2BbkQAT6r9zOemmU5Cz8OfcoXLW6uP0wfaHhEYc0creKkt7kXWGY0hfGPnSC0fMZL31FsG%2FwiUnGL4JRiZuTi275pJf7xY4USsbGATT%2Fmlh8QNwzny9yrY8nsgCzFgxTJ84clmk45%2BRMn8eSEAsoQv67n8acKyOCqIas3%2B8ajJl4pBBvzm2FNuXalQWmM8MyXmZMEwcxELxNj1zSjyllRPImzovicC0xMNzmldMGOqUBbfLACO2lDN8zBR4LijzTjYxyelIYkpTXi6g9olreg0MNF2AnLd4LJ%2FLG2WGEVnmq1VCVEDhqzn%2Fr10K%2Fv5JEjgD2tLgEht6c1J58U56pVgEirAKrS9P7ZQaQDrosfWkovuF4%2FPevZzV8zeMc6zbDDM%2FNPOqyl0lOBDl2s7nIo6u%2Be4WEN8VW7kjodoYZG8zUFcQGaj2v9wJyHtExYAsGgX5db5h7&X-Amz-Signature=8fcf0c1c014ca69f367e69fd763951e922c8fbfa8d9a1cfcc029cba5b854296e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=b0c27e47f2edf8509cc6a2e956f8b04828721b57606c064e54f0f86d9f893fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEO5S2W4%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCMQa1ipATBCT87KhF87jmR8gBzh4fBXuL0pwOg8Win7AIgOjaCGhH4K5bxgKOTsiRQxVIFdHodNM%2FtqwgWWuveLk4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOx398WGozRG%2F%2FoMQCrcA%2B9E%2F46x0230liNrQ%2BvZfEEgYxoNKozZoYi3kZq%2Far9sXUv8%2BiJ%2FstRWkYQaj9BjQ6k22HSOlhJLJ6wJFFWMYCgzOhAoyPn9FB75ZzskezaohyjxkD9z%2Bvc98AvBlD09FwpXE%2BgtWHnXXrMlsLJ%2Bv73SLpu90vS0sqWw8D8uxpb%2BH4t6B4XSLBh8tV271bQL%2B6ObjTG09Lpn4Ttn603gKRgHSRw9Te3BwyfSmhbHL4617GQ4puK2WXtKZ0xop3MKjPmBGz1m6HA35mZSJfuM%2B08GD6xPnvfxPjpOgo9B7xT%2BPsVue%2FcsXEgiBCTPaFUyqjfiDBVmnpTApyCOOvRKJGTSUkZJ4KejVLJJ0FrFp4Fuuxlqx23Ieiw%2FEQb4ncXA%2FRlclQQ%2F5989lA5Ds55U2UpLf52rLPJBWiGJOwkhy4OzA1%2BgT1AjOxPrualJaMmVj4BirQ2a9Dbj%2BxThMEsqRKsPZzs%2Bd78bt9pkvutLzQ%2B5khFYEXMND8PHpJktCYYLkH8%2B4yFW4EFeNd99cweok8N15Ng6arzHR53ALF8AUjn6dNDawNphcXmfPDowsYE%2BsQLRsALoA2I%2BUHU%2BaaYCOLjrBogRTi4gJybc328nzGgxiULUjP1uaMSQg9ZJMJPnldMGOqUBzbOgURN%2F83AD%2BasDwvmuUDz8r%2F06HZBBQuvsdKvzfz85OnVsE6T8Hk52BjwlV7D7DNMtUhA4w0S2pDc91bsWItVqMRMNyzGObuSysUEc0WCMNM4Gl3bgdsy00iBt6KeUR6GtTup9cLva24pbdvL2tUK7GEyK30oILoZ0YYN6oemFnVJiOnrWQ8crh2xolMZ68n1jdXl3TF1947L9%2FaqOeWrGJQHY&X-Amz-Signature=e4117e76f389b3019691b5f3ba387de27caea9dceb2720f25874c04010ce5f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBQA6FHN%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGE3rJlROXIXugTzpY95W1w0NGlBv8Exaaqeu%2FZXZvM5AiEAibXhoIax2b9nFMKlidHPh9dmGwC3%2Fe9We2oOtdjsXqAq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLlVh3xAchVvk%2BRgGyrcA1iGjGs9bRTrodmF%2BdS2xOOgzE7SZaiipQYvKVzDcar4nqFvjaQrkIgoofqx2J8XFinjKx3DQ3h%2B%2B8ssUoQW8FacTARyyUJbCHlW9Ppa8iwkUuGm8PRr8EFejDNa0qmrsLAIueXcrD1PTt%2FFZiwnmqlvyWhYDGQr8YJiQId5gAjlx6TOfbD9I7MHPfykZVazSv1Ys4%2BueCe3B6udy3C3B0guFOt%2BtJW87Un7MyIJ1Yd6jvgXrAy3TGONejau3Pyz%2B2exy9xU8Qnkyp3mATuFgBVUzugU1rZnzjxloiK7K4F8Ct1guZ28eubtqImAxKVOEqlo9V82jmkTLg2vQVWLtxAtSNXyGxATMrzYBc09FoOeUvduyAzdqhk3FYj7Pz4tSkbcu2aBWtcexDlCw7HBzbLqGlb9vpsLl2lsxjUs0bFyUd8K4Xf0SbRNAHPi1HSEfpHXtw28Btb1uyfOrdY5JHQ6iKGX4tD003FnXkgHMUzK1vGB2hwEgewHmze60wvAL98e00QRq9%2F0gLqZpEP%2FVARODho6polRmr%2FsPerkCrqCfwPwngtu%2B3kf0hFRZRXDhcpFJn5meOdmujkmzOziMnbv51HzCAKntVLsegy6B%2Bq7lva%2BIhwpK99xMSlCMPrmldMGOqUBBckHTFLzoOGmaKOgf%2FmvKIX8WOJkX0kjnJ4smqjlNEwPst5Akd4DNDEDSOz3VzY%2FF50PhY74t7XXIP3rcUAF291IjljFEtvyiwgrwSWg6CPAku29VGz8FNQ51r2LITqWO2y95JfyUqiwDvOZGRhq2Zj94OEzSPmARU7Nz4MI%2Bv42yIrKkf%2BQbrS8linJmJx1IiTyMsPafl5D3zpa5qSBdN4mmCNP&X-Amz-Signature=daf9163a19c8f705da4da30c484621bde24a41b5c9c4e3a8cb87859acce61d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V2XOMFF%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDujR%2FJICi5T6Y4aOfBpIH5DsoUBVvxOagcVlk84Aba%2BwIgdZY4buPrb4npJdOsIxXhQpWwapW5qgxA1zovI%2BHOtTMq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFszvwTo8IlHjFIqRyrcAxHTbpn9dCUHfbaFnw4zRlziYKuhJMwKNB9gYG0rnE7hwPPqMVaTC2aKQaaa71jl28xRhYj9oDLjYlXfXsYn0x7bVp7hdYHf5XIwgfZUYlecYIlyntc92jPUrF1N77wlo34fZ%2BIqxiZ9Pml1AxL8Rx5Z3JpmRYadIAH3P9vfPSMU58yeHLn5RMHdG0S%2B0vfTKJup1pW5fCtPvZufFotRmDhXg6AXOBlOgU47pY%2B5VK5HzJKm9XjhdWamN1g7WcgUFjlMvCYlcjZ3sd5ymCY5czi8rTtXzRbXO9ryjcuE58UYRYMMQ8i%2BFrHPTYGHbQftLjmBADjMjxF8JYWnopXKHG%2BSWCbQLWjtJo8HO4H1hXXU5JjJ9iiCfLzbJlssbhVvoARCuypxHUtu6q7ag2UqE8MWyR1OUc3%2F6bgu9GDBgCr%2Fc3mmi3bfLcH1GKPsBz%2BGamTUmDqueDFOtSvSffjRetSWdA0Z3x8aUA4A4JNOuANiLrwPhcqXNz%2FLKKV6ajFlHvDI5zxbwMHQZXI3GCzAQjWa5ZGnKfDAzI4wtWfEkRmiF518LThr%2BM%2BLc4VUCG6Q8wQOHELtz0kb8eSbnPgQ1MD2z3dh07I3WypUPmnOeJa9FU66YaLws8Dl1o7lMLDoldMGOqUBIiYpLRkY5K33Vovb7BN2qRMma7eqsOmAhSlGjOo1HYcfaAawQOzG6R%2F2ip6uWMkARCvYgvMUASHMqykBzd%2BXmnQ8xVJleOU537Gw3%2Fdvdfgu%2FF5BBV7nyIi32PoYEVwtCr%2FY1ULFzhWFhbiq%2BnJg%2FDgdqW9mTb1kOvh8P%2BD8QU0DaxliYcD3MQ5%2BWbxfJP2vSr0T1o%2FPz6rRI21WtBO7qEgh6au8&X-Amz-Signature=89a942a458c5ecdd26818d9851b8d5f92df3f5c915e8f193f408c8744be8495d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=93e25c7b0d2f201ac9c68940afce4c0aa676ef1b92c8f8cbe762a4adc05f162b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRTLQ5Z%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDcIQENjCgAoQVZLCDvO%2BMb5nXH2nC%2BTa0HtcmE3FiDoAiA0a8VqDRZCM5%2FR6onG9B5HWdqEumKtpIXlhFEvgihvDyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMvuRPJqt3ELno2QLhKtwD2RrJ44pHhBW5MR%2F14UCgvBjgnYKskx9kenXblZUxWoW1R4kVQDGjGr49V9GXMGSZ7CAa4m646uMGoKd1tLYhMQauitduKnULvkYPzy3DhpAJJzH8OJYGVj0t6Tpt9fseVJBl959%2Fxs%2BkkgHyfzHfcNeIheWOnM1AKaaQAjZfbU9%2BaOD%2FOsJ7L%2FzvoVdbYotysMtksqq9Ajg2h9IFOALNbM8G%2B1MOjKtgMVIu%2BA5cuV3bUshM%2Be4%2BfUGy%2BlzpoBqD%2FNdQFePQbPqiJgl5SlQl5802aUvgAsVxqJqw7oMp%2BAkNy5JCNTcVfIdELPe1QC6fLyksvwdAJp4OD%2B7iQjJ9a7z1ammL4Kq5iyYoEIExjNw9I1ZtoVU1HyIZofMK%2FkAuBBPMKqUjg6Ypxyhbx6TW7M2Yxp1M4ptUlggtuJarcmEVnN3ZUNhLUZzVNB9QdyqL1SM4QODnUeBpFAE%2BSYYF6P00hm62P9JNrCSisU54T4D83CTMQuekO7JtVQpeVHp4ljOW9%2B9rxMjM0NBAFI%2FOUNI%2B%2FmKMO6nhJxlPeyuC2WLTx8O1MvDvmDaeu7kGLOlrLlLMI3iWPR5ZgiYiDBwGV4JSL07uehFltwLDHN7oN9GqYp1qTF9cwMgVpXAwoOmV0wY6pgHgnsmMbLYaF9CvSBVilHUw51uC%2BARa56%2F6%2FQHVWiL54rmjAU6SwUz%2FzicIJZG0BgIxAvbQ7%2BqvjAWY6i0INYh78d3b41ZB1JdiMheWuOj9eQgZKA0AZq8mBVBdoBJ3tCduS8mhFVam4WR9wvWSMvPFJHJl%2F4J7XAspjoVxvpU7a4QaZ8Em2e2vfRwJBPGeVB5qk8TjrbLWpBr3S7v%2FoEmvEnlbLn7Y&X-Amz-Signature=7781293b9f5cb1228095cb437967df868b1b1a13598765b316b22c68a84abeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=12a97cc2f23e6e366e0ad68803255157d92096208695cc50f4e96ab5bacc3273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=177282423af3657735da098e9a907f92a9537277c72cd972930a90b11e3dde3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=0b34663320cff42c4e0a0462b8ef2b7e92ef89bd0de96164ebb43aa507eda029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=22cca6ca271d983307e95fbfcaf84a00ee06840ce61dcabc9a408d0d7d3884fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLBCUCBS%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIEPlWbMjcuGxo6qXZTYd4D%2FOiErnMlYBP7WK42N%2BK4%2FEAiAaSXEC%2Fc0%2Bwp7EhGMjxGWATtq1BZ1x51O3PWixG%2FZmmyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMyKYUf2I%2BhHBhr%2B6uKtwDuZ9ZfZDFnbrfG48RjPNUNzuwNN4xlHq7pTrz9yF11fxbPIRRGpko2DDyN3OipEAYDPgWk7YmcTY2OdBQgL%2Bf3bo9b7Ghd%2FV3oGhsvMnAOfsiZia9bzxrnLm1RYIzs7vifIv9ILrXTGH%2F1ONlskuv4S%2BTB7fXhLyNppuNdx12tzJlH4iBbP%2FGxfwmp49uhytQSQL3crxq2ZllhUnmIXCJ5uVSvekqkyOKVsBfCxM%2FZLi%2Fl6TDgDRNCYXuOlIJQVJuqOi%2BBICRCdHRFQjiowAkWcQP2WCl7pgwctgXZUOXSo5QSAiot0hDBKuKRazjiOgqSez9GRfKzKx7cMorwpkn8KH5R7xDRtqqKeLLuj18P4%2BBif2NXeE54eOXEDB7tF5x6KcqVDmUCIajVc3uhE%2FH48iKpC8zaGfSuVSTxNOnuHkO8NeCNEh%2Fag8D5I%2Fza9oCBWEWZPLZHaG7jrWISk5NLO8iJHAfhzug%2F%2BCBKz00RKPZ%2BWxdvIVXW5t36E19UupO8977Vlr8Oh%2FVAnHuxN3hh94oNJP9UZMPWABAl4%2BbhZQTEzlOUnlJ6slUj472zU9JbYEav8ATVIAOPOKZJ7hgJ0EMTBjuK5MoIp%2BvbBuNi%2BK1ICIMqX1RdkXLHFcwoOmV0wY6pgGrRw5HV%2F0AwTKi%2Ftko2mSYPwh7xWCsSOqrAahRleLtHssvZqYrALZB7DSkmM3Prx4qQm4Jv6ZwJk6KC8GGRdWL4KQiQkwFEPvJTrA6bLO7rJzvxaXPuwe8M90OYmAH6hovK45C5UDTKQkShoxdUTWuSh7jNkiaTqWfrHwWCtKZcwUUWf0r7%2BTq44knRbZx%2FDhOMvSMtLQ2Q%2ByBy0j4Iq8OCxVllaxz&X-Amz-Signature=ace84ce0c4fc80fc984aad17a98cfbe9c8b3859ccd4b27c004c167d0d0a9bba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=b7eae1ba3d23a5c927df672cc0db9ac528782532c077dd8ed8be21ab2a773a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=e35d7459b2a7addc5466102d1cce7cf254084ef63531e0751d269a6178003d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=0b34663320cff42c4e0a0462b8ef2b7e92ef89bd0de96164ebb43aa507eda029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=9e7910f6713db754ce92b698bf108ea6715f9a234dd2780e4fad0f43c464e9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=3e6b6c816f7514c9285f80a74528ea8c73efc19dbd8f308b55ad14809928b90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT77L6P7%2F20260726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260726T024733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDrE7kXakDt6aUI64KQxmSInYTwEfTjtWqtKZGXSKBs9wIgdLuEjTsLgpYptUiFerxhDgKzEE%2BHJovwyK8eaksI1B4q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDHUVw3XLDWIsEexy2ircA7qZPPtA%2BeX7smqkqA5AJM4FnsDR0UyippD1rZG86g8b9zpC5%2FdxbEA%2FMeMXG88ShmBZfj5BzC%2BP%2FVoO29jsJ0MtG3KLUc2KrGDG8g9VTmzNtJ0qlVQbLkR2l9bKgza1nB5MECNJfr3fgyNLozDP%2FY2SkBTGiL6Y1QIrkeA0z1jEXFdcgyuBE7xLN2XIjSFuVwru2oYL%2FUSu10ju0CIO5qlpTIEM4bgS7JTAcLzD9ASsVcwvWsYVgIs7%2BRzwehdUp%2FleDrBKBrDdAZXelgiqYy%2FkorVGFwFLcMaEBWdWGazrI%2B2ao7ouODOO8DyWhu6HfldivFxE327ucmVxq3bOU4VOThVdBOtaZtTGZFq2CTD5u6pX%2BFXePeqZ%2BY51WuM%2B%2F91pz%2BMdfvIksqbQG9XR3K32Rn9g5RPSa8fy14wn%2F%2FAOTf7Myzt9rM1wWqXzCs7CtzcLgE8RQJkxoDBcMUj8D%2B73m6o3dt6Hqjvq%2BdfG3nvWs3lw8BNbjfHzE99QYip%2Fg6gDqeTotIjCw76%2FwcBdcx%2B6WTGVMLaMPunhBPsVa4KOd5i6jd1HgBwa82R48cM9ODdrmmafkH2yZnXkgBx6CWfd2Iz8ylVdo7KSpSjCsWOQc18XT%2FRoDM%2FkwLdUMJ7pldMGOqUBEkUJLEuygpEOTumDzwg5R8QuptBGGzv0TutGk8dkDW0Yy2SCeLG5fcvU8%2BnxBFUqfCmVQRwmfN3oh59sv8Eq7Cq814RZGRSPAPd2Tu3w4wetAZM0duhIH264aWbmQBdaZURKhfP3OPvW8q2Nn4NEVR6XbQCBG%2Bo1B5an8CzQbP7P2q4b%2FZ7TPlmj%2F%2Fo1KHQ07y1OjDhEdTE5vhTI3e2eB%2FkD2Qf7&X-Amz-Signature=7f3fe198ae15edb06bf93bd662eb8c31ac589741f991634b1812c2221dd83069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


