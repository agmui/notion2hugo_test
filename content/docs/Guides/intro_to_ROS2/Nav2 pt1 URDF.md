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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=e913007d6500e64007dc1d19a25c56b4ddf3787ac571732aca67f6fc18a5aedc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=c0d0266fbfe88bd8cca7fda322f749f6d9fcf8acfcb84bc58a6d80199f6dfc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=401313c09723177121e4a3cdd5e906baf3dfac9bdad96fc946e9b39895a6944f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=060c5c83d192e3c5021d5b9893aab3e4a946cf295d48279c16974d80dc2aa4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=83cd89c7058d04ab2f22ead9057357399f1daeb2ffc24a0a39ae9b3a76f26d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=b09846039d8ff58e74f2dbaa439c2434a8e0304027d0278581e34b0fe4ed176b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=68a019f995afe5710c22970ac68152b9685c00bbf54c32728a027badf9c74909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=e6cb2811158dcad80f62e29af3bbf9a6a8b414ab777c39124b5b0f3ec7704dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=27a6132e1026a7f6ef5493da3f755fe6d7d7cbffc11e46b1f39f8afc30073dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=98d7c62d874b75eb4e1affeecedb0b6d40824406f20538164967adf300630dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=fb2b96b46d5c4ed2d50bc1a7010da0a4f8302abc580915c85e3fc84bf6cdf115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=b384781c3cdb606815a86b442c3c945c98e513b2e7b288ef1db96655aa3231b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=ce96a4300a768d66a1928ef3144424b7e5640d889cb59979c5a10bd531f0ad76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NEUW6G%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFnw36kn%2BW8yyGBMP%2FNWUbJ%2FCXSN%2BLEUoPBUqa%2Bd410sAiEA%2BwjW4V9gtyfI454bjCFKwSIQsSALI3brddWsAox0oGkqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6NRntFQj0uIBO0xircA4%2BSvnlQYKsPMSb3miIaTX7oYrbJGHbfQ%2Fnxqg44lXWESBWl16mx0NWoTrJrxDldTxG2mL4X27uCjJgADS3yYFiNG4ctNO4hWJTEuwBHmVffkI3Y198G2iwYuoTI1PU%2Birxk6mtaRU5xIGBoklQlGVTgyF08N1B2Py6xTI6nJxwIb1oOcbh%2FVkrtrVHH%2Fg9G%2FjYMHRqn3K3QtFAWTNEGRV0rgwuYOV%2BJ93b2t96RW7lLI4eZC1%2BCvNGESQVANEDq7G5Izlbja3MicyZ7xe8HqFvo%2Fzxj3b%2FoNL3%2FL%2F6FabXSX6X0A9qDDBRnsEQPrhMM%2FRgArnoyeZiGyF0CwzRx8l9K%2FrvExQLXifDPq8oEqCWHtE8snt0OhSWru5hX45GmDk2L%2BnJa9TmUfV9vaW3lbtoUlHe4VANdDNJpg4A3wCDAcUUy5w%2BbodWjYTOp4jjuuhvRsqCZygf8DtWmm8G49W64mRg3H81YOsAr0RVbdGgdli6aLlYa2qx402Ml2NQLBk2S8ZzfHjzyUoGkbX08742Cn9%2B58QiZ9175Q47zkV55fmto9lmMsjodYJbND6WoW%2FnfxENsDXgDZ77Nysfqx86Ehr4tPhiZi%2BtG%2F84H5mitbjQqbNCnGRBOrysWMNmmnsQGOqUBa4r1WtusiYN%2BeevqR0z7QZtgjzdSU2hzknH2AZag5UH0Dyzx5GXc3gi1%2BtWM3P%2BnHx5S7v4WUf5QdNDAmJDGfJMMu7OcW0i9k17Jof4eFhKpvlAq6LM5dhRWkK8xYprsGf1KEy4fIG1U%2FPTGREsLUNw2WyFRM%2F291YDcnh1%2BiKP0%2Fnr3iqrjwDCyIAkgjY8hvNiY1o9tB9885VeJ9vToiAlviGHv&X-Amz-Signature=0945353ee07e3f56cbfd28cad14bed605c51e7ae4d07fde0a98d2f42a08413d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=d286e0f27ca27f6e08331d1a925e274cf2a6fc09426c485daff5e92f8d4c1f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=14463ca5aeb9b20d73c1d02dc44ebcf77ef61f8da3631352087efbd1d325f3e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=80c0ce6bfcc6f278dacdc34d114bf2be1b97fc554e7186166db8a09ef7c12e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=2579ccc7b65e58b36de470544c6ad959068c194cad7846c7618e315d2a166eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=ef2e153dd5ea6a06b6cf0439e10cc1e5dda0411c8efeba94d70b037268caf00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCQC3QF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCESb%2F%2FxvYz2zexiGca7F7ADvyH5S6nC%2BYSL5JnZrflXAIgDGmdONvsGeTMOiPgjci%2BBfYvKFhpu2YbJhRs0h9GH%2FwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPA0bJof0WFb7OAtbyrcA6yoK1MKLhTYi0kjdqPhRLnY%2BoIsuNGD2Je4Jb4f3hyob2udETA8iJHjlwJDcERdvI3j8gRsVY8XecTHJS%2Be2AlLhZ362Ny%2BU%2BW%2FwF2fHaa4UtTn1JnI2sxrmbLMGukx1Q6xDvF9%2F77q%2FnezN18OkdWxPwRiYpKOiYI50NQaEtsOOu2992Y6y%2FeSRzjSoFTM3kp6xO2otBufvd9rCU0Avm3TxJV7DAfSc7dU7Bq5lL1Vq3ZYgOUUV12Vurc9SaBtX59HGw0eokpoTUwB8L01ZiQrS8ratigSTr%2FigszG2YpTVPDYGbVJIwJyYmwKCjiM876nHncne1qYwH8TQYIE7MaMAPR%2BTWZ%2BfN296EmQy3CmLfCczT8lI5BrvVapS6ymiuCk0IR6hgDOLEdCSpHLiELNFu8tVdx644j7rqOm4QCFnZ%2B65Rd%2F5%2FBZQBgdT0bQcV8rlnT4ZQxQqCcpWF6ZV%2FYPntw0HrtVBNG4Vz3FDYtMY0ZkEVuoJFDt8dSP%2Bd42qL3HyjaMddjiy2ODm6KckwJp9ctYfi5RvsMr4G1aLht3tT03QPUMiPNWxOGfbfDgE2JZHYPZUCosrm11llfH2rrHhVN67FL0XMSsYOrotugutJobTtpNuOsOgnDuMPennsQGOqUBc05IUopKpMrUP1tmgyh6lu5dKQf4ce12UIDBVXTX7dGrJb1%2BcTLNMMj6vQgFfY0msxqgFpPzh%2FDefyKrvj%2FIQRdLfLS1EVALj6MF%2FH7sJo4r2Nmvmu0MyXSpKtPwcDD4yi9FeNUQyVIPhTJptD6%2FK84aoJKDzfgUpMqne3qp4o7fKL8iJo8CQUs6wP%2FCql%2BMUKoIv9PySwBkQo7hfu6N%2FEIIWwdu&X-Amz-Signature=93322ebd69af99eab135bd3c76143175fb03328294140fc7113be9da4d80730b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
