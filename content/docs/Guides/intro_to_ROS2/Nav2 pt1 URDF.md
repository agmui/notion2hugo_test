---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=6a57024f30b345d04c4a839fc0a46e322f4d16d1c06287841cc543dffffac705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=291171d1eda2553df1608f022ce98aa00f7b632ca28bebb4999660b392b2ce52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=9cc16289614c497ac713b0c5d055e3e9e1ccd73d74405fd0b70e0d59250200d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=8ed5936cab5bef7c3db4fab5f957555ca2720798c8ee9138f5a2ce45af9a8693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=ce01d2679d4bcf215f81606c8788f4afd18aa0ad4f2500c375b265fd73727a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=f489799de71aba70bb459676f7a4ba085ae4d57b90e7ad73ff86f5e9f13e1510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=d17d7a90abd90493266f84a0c43447eb385d52c2aaa0eabc3b299c992f361807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=cb9af4a25a39541c6d55f3e09dd25ae582954efe2e82384ffdf97e48e3b72a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=8cca460e345a72399db47af70e4f5d6d035fdba3a9d11a42d1d0ff3508332baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=6cd519a6517ed93c58967d028ad507768e9679aba0f6080e425837d8430757c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start add these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7KE46DC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDl8mW%2FQnE2IqPh5b%2Bvn33sF1RCNbjNOY69WIPAHydQZAiBdOOpXqOoH8bI05oitO1X9GgtPnEE9QIZcwaQFMrlocSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMINTNQYAwrORQ%2BnEFKtwDqqOwmh8eh5w%2FFgSSBFc%2BNvQKvt2nAFPv%2FMFksZ1kI13a2uHEo12m%2FrYw%2BAoKQ4Ro6MJ%2BbV8zfRxbrMLTRS6wNp2WljzI0YL5bJvGCX7%2B8NImF12AyTRLyap6AeyOl9ACWRvD3jDA8jvr1oeix3mOOGtrONF153OCp%2BAsXENBrJC0BgryB5neJ5QOei4ltFHRwbO4BaQ2pVy%2Fq5ENKGMNoJ4MtQSd1vl9VOMKr%2FmIGHmK4r2CqVmq7QquuFdxMgp0SORfGEb6uhDOfllvfNOAv2FBQ6s7e6jyxEQLbl7zazKp4T7m75RLX2RtR492c69HXnZf6CzeeB6wzG5kBb6O7FU9hK1m6b4AsBiF3P5Y6fAgpN7GTj15Sb8YBwECKLmMAh3Bt67%2FLzWmki8XyvLaRKuo2i%2FXL4W9w%2B3lpHqJsNnK33zRliTi1WnxWSKce8UnU818macnCr3oKAcMuETXOglS3SlgCiQ6IzdD1%2BRCTqDiQYijCtmZgniheAdQuOaudMmzPwqxL7ccUDuiSoefw%2BIot4nGfuIOu3wXhPAuXijSDjmEDRWbX0tzWKDGkPDcrAYDvnUw5%2BgPvt8yx%2BW1ISoN4ZfwmfUi6rwjyJBlFzxoAKRb4HYq%2Badr7cQw0e77xAY6pgHo2WGjC4nxkAogZ8%2FyHfqVmuD0fRVHqnZu7Q7MT8wQgdteHkMVucn%2BAHS2H%2F1Sn7HsMXk2ZNR5Ixi3bUhSOilti622492hhYKdf9FxJ75k3dWpbYw%2FDY4U9Q3gLg2DPSiVDQnq0Hn7uAiqVTe6EWzAccswNVlaDRM%2Bd0BltsgOLLpl2xzsNoXRheXFU4L8K0U%2BiIrZZjSXmIXAQHhSDqTe2qhFkzob&X-Amz-Signature=6086232e01df99cf82ee304888dbbfe45e78b7b7ffb2a48228326c30ce3f4307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All urdf files must start with these tags to be valid urdf. All of our code will go in between the `<robot>` tags 

Next lets put down some constants we will use later

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QXLPP7G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIEv0Gz1wogjcZ3dCfUmLXGs9dUggHMct5t6pfEgIBGrWAiBb%2Fyd51YEOj%2BQmJvjZfZZO6gHJiPnULBZLVX1kpZCCsyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMTmHDOPdodRdJmx3LKtwDpoYz%2B3Xj9ONLLof9mChPqb04CRsUEG%2F7Dw3o35uJ2o%2B3suwQokYYaFxk%2FYDlzzvBjKE0UqmmEwnXLtvrm0Rq5dcdFxdyxdNaYFW1XhOIygjcLiE9S5%2BflWbizCxeJMpglDokz3jyX4gY9bg36MrT%2FYecwY6UKJBReaZ4sj3r8N5XUGbSsm7S%2BSG5umkJ4Ru1J9P636XSQX%2BwIqYwdX2RzQL%2BHEKrEHtgR%2ByjMbYSmXvL4%2F%2BAgKFpfN%2FSIqgEbhS1VZvFyuOCy00FoVsYD808O%2BuXK%2BYW7Lig0qvrybS%2BEItlnQtT5Zk5QrtoRB%2FmUOvczCiPari2m3wSuj2G1eDQtsEjOsUnwbtaJCG9b91oDHTNRByIGYD7ELE8BzZkW4mOcg1Myhd%2BEJG9FQbXgMVIVI60sgsDPmxnc3o73AXngxzLg255F2c313TETniQMxEse7WC9w2OlXlIU0SWVlyX%2BQm4PH5ocS2xTi2PBXeDgSHlCWdL%2Br0A%2BsP%2F%2FTvmm2Vq7EMWcanC9gSrWUCXPwRMn4TnNjAJ4xSyKuncGP8zeuUviNgW3%2FfAsYkKL%2Fe8BhLMVetdmusKHbOHALo9aFsboSGQ5E4ExNX3uiNdGQvvoRsLpfhErlo9wLI558Iw6u77xAY6pgHDVSXZUeZD7uccjs7CwTxs68jo8NfALaaHHl4SuhFjJjZPNtEuZiQOy342GSWhQkUzbdhOcwXTbXmuez%2FUQHaHLXw9N8pEWMi2GXCysvpK7BxxQU%2BUxqGB7dTPcUXL5sIO24RF4euzC6W8gi7VueFyoTyROwD%2F946fTLKNXMYO2%2FSfxWahSF06s6%2FWOVfdY4ZTcjoF6al%2FbIG3DzMm81npmF%2F9kp9j&X-Amz-Signature=61e5de41964aea78c07d5487f330cc496e95e97694a47aa9b17c606d4f5ea78c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      `base_width`, `base_length`, `base_height` are the dimensions of the main body of the robot.
  </details>

Lets now make a link for the body and call it `base_link` to be the “_root” of our robot._ This is common convention in ROS and is required to be called `base_link` for later parts in this guide

For now we are only going to add the visual part of the link to see if our design is correct. Later we will add collision and inertia.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPGILHMX%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC6JHmWOKVVIF4KELiZjCLEEVPpeAIYrFTsyIJj5jHVRAIgFXuD3NMSl9boZT2CYqEUOmAlCfzjG2k0%2FgHHtZMS5qYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDLcEKNyPsVuIz9oxFSrcA4faIGuvPncy%2FQ31Qn%2F2lhEi95P349NX4nhE7anlRjHCHzVmhF%2FcAoMbYd%2BhLUEOHykOlDV3ZYK49T0BcUz0h8ffBzdG2vUSsahWj90%2B%2FkL9C5RoMXPuxCbWu%2FwUIjTDq6md9Yt3JpOVNeijzV6Dz01JMIAcCFwuFDnpaCD%2F2eM0StJmC9HVkTFmHgeZFRchPKa7m3TGHHeBhYNhGSXDx%2FA117sQvrJCycVy5gkRzChmaz0r1GC4Nj9d8hhpMhbT%2F6vKR2tQvqoelKmexLlm3TjAMSfySV9wdenCVShZVCIIl3BNWpuAgdcYd%2F98eguEs5ZHuyV5%2BgD35sTGvaWFPVEwz0ekUP%2F%2FHAo0BPNTNDTwXvz%2ByRzD%2FzQ9bb8VJ6Vufd0IYcYnUu%2BRaB6hZqiwaRcOTESkat1Rtv%2BxzYnoW5rKOxsxpwnVMoV3hKU5IeswAEvewF0Wvb4tLqpz6rrNssWSxFw%2BbBh81F9%2FEbFA82kuJNRRq%2FUgyjUl3jYrwoqwY9Bwn1j7iLiBQQi5rp9Rv83nkX9hc5h4qwvibEEcRHdXEGByZdRy0dwPt5P7SNE4YhfQselzyfCUajeTXayo%2BpvFu0WMjJnVQ2KOCbYq7bwqMG1r53JH3hZtgo7vMIDu%2B8QGOqUBLpUpsY66sxN9xQJ7R7fQ3DW%2FAAWih2MzSyLtScjCNb5W3bdKral3dJj%2BjlZCbQ%2FjCNrpEJTSR0e9xDqWo4GdHmCnvQxV5Xumxp0sbd00Vjtvkg2%2Bw84UbzYp9pqvZCd9nlFwfS5Hs94yG3uK3qUIpA%2FmFC3Giq3m%2BdZhAY4HueN59cYQP%2BW2wl8FM3hG9fIu%2FLDqLEWSaWPmZSxZSRt%2FLxjaQGIg&X-Amz-Signature=136645f81924aa9c075a0a059c5040df1196b1ffef9d4450bb0e04627ecbcfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=9f2ee32ff54f0af437cd92cfd2ffb0363a6e3782bfb85e67f703f9fed138ff14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</link>` lets define a link called `base_footprint`. This link is just used for path finding to know where the robot is on a 2D map.

Later on in this guide we will see how it gets used.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C5LDPML%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFzaIfYp9Jwx1zUabxJpgz%2FczQuYxDql1OCzZ26Nwl3SAiEAq2JpJdV29QbGgrzX%2BijTJ4CeUNH7Va3rRAW3Qjtt30Qq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDPEvEz5gQ%2BIZaoQwCrcAzatR24%2FrTH3Cmwi9x7dbf47BGvQMKnbkSOvU%2Ff3rUbRZ6ran4dxS8JG0DUMBncOxucAsiwZXqj9iPl%2F04j%2Buixplcff%2BrHtPPfMknNWPRHsOQ5fMJtPFmjr%2B3L09zcTPXOem1vnT76P0DEd8KlpvF0u7kvAih6NusrK16wLPBquJazbAoYodlnx%2BMH66lTZa%2BhLNT8%2FOi%2FjZSUGCOPGWRbi4Np3FAUH1wL0zuDPRUNxgWQ7NHtSVh1IJyLnoPndDCtYahYgqhuAGadjf7MHZxbfA3AK3USlmrOgl3O7dyj7cDjDJ8uZAlAGIKkx%2BSVc7Fgtuaw20qFPoixkP1xNAjZ01jNv6X70JsiG9Nn4iIWaPqkH1sO26CpXjK7pWTNkIZAUHJBWEQlqCAe%2BuDk6JbPys92BIljtz%2FI5%2FWO3yTL0vU50Xgd4TmCLa910pW2GytCVoY0n5RQ8Y3KLxx0MTBmdmwrf5C7HR4Y039lrkPjdEjy7leTQ4ta1NLCieC5LqXjgT%2FCZVIDxD%2FwWWN%2FM%2FCmQHujD5%2BxUeUc2XvwuUFXDbz9UTM5RzgH2pSol%2FWYref9zcDU8k1vpJGrJMewlO8PXJvU%2F%2BvDgp%2FqQVhHhXU4dymDaIEL%2FkPHx5x0wMP7t%2B8QGOqUBSKezC7scTTZbrj5NReGIgcnDoyVgqu7WjuY0YTTlkNXGhP9u1Z2El5wSFjEi4MxYkLMXA8FykIIwOohsNM54B1XSpqKG5x9CW57HLU9z89%2BMaHyRx%2FU8znBDo8%2FA4pi8KUpF7bDdjtfboA6v5ulC%2FliOvTPti%2FFQrapzAGstcNDojhro5lF4UVS5pRdt3vhhxfujcvwSoUN0xL1PO%2BmFfyRUkLKu&X-Amz-Signature=026700d12b396acd386cd0448a2b3260265d73ab79a5632c91eb94bb28b8c4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=0cf198faf98e3833a6805bbe6d30ddea83f975b5fee5271f631d5bdcb4edc14d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

under `</joint>` to add wheels lets use a `xacro:macro` (basically a xacro function) to avoid duplicate code. The macro will take 3 functions `prefix`, `x_reflect`, and `y_reflect` so we can flip the wheel on the x or y axis. We also make the joint continuous so the wheel can rotate freely.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRUMR5G%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDguVMgUaYTmo12F6bmvYb4M6O957Aes0z4WU9s0KbRbAIgSZb7X5Pnj%2BiJRvK2eIpj8NTt5MpuqoSZ1p%2BdxtrUCdYq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCbhRxN1jIL1dWSdoyrcAzi%2FS1LgPtXvyRftAVn5ifvKee%2FzBP%2BJL3%2Fcyhz8jr%2Bi4QTmzGXhlpUgD4DCJllBeT50ZoMbrM44RejndpRUkRTxEa7eLPlA4QEBkmMZnXRVQHw5qImWawMsh5oA1tNrYioJMdtdnJRN%2BWOo5U3YadnLbOvt8suIcTgv9r9P%2Btu86DARbBja537mHqjkjorh5G%2BoYpEEFGSEgxPaxLk8ivP4BUk%2BFDJFTHJEzLOyg6BptvgGhAEeJLDNp1Q%2FjNdiFNEIHgzNT5psfpls15aVQXVZcKpeIbC9QDr7nIjxvwd130bFbZPo1CtweOmkqesppsTQQ5FEfuAyey1pkvmr3TlafjKWQBK4woQs46yRZ9%2BSQngQn5YRbvRii9gy8QECaKUe9HaPogl8I8xA6SonQ31mOGaw5on08XWzH3EdrVnE5j%2F2jwv7G2wHEewFSIo3Y1xuFnzgArbsqbdB9EEnVVTJdq5tDruKqYYmzCD%2FnOl%2B4lC7MKJ2bmVWq6uO4f3HlHgl530qX%2FeCeiTs%2FwKyJWaHWKsCJasClAxSLEYlC7DW9tfVtZhD6d9LMgptCKshuIKP9Zeb2FPBWqfYrd2Ci5Fe%2BheFFoxf7mHl4nEQiWf1%2Bstd7is8Fxcv4G1jMInu%2B8QGOqUBNcFllXBdir6FEptVfqqNHPDlJ%2BsrWRnX3pT3Aiezh6N0EHzx%2FNpvC3ZSzT3SUfUD6dehaeEMgM0Ih13SFMTwycK0pJXd1yn4REBssSw4ZXRY2FNyuifbqwfpkwNvabjKA5GLRWPzRDHLWjFxr9GtKbuOU6pW7unV9lNKRLtrqR7urJimvpnUByGbAG2rBX3EBLD%2FW1ScD4ZD5nsu5HLnpNTObrbP&X-Amz-Signature=898ac40cc4ca37a02b7af793c054e5a3da0952a819178ca4c314afdb97b6d51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=acd8be75a3aee7cabb7e0b5a669fc00fcaf28987b41aeaa9d3490e7d3dc1cc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Under `xacro:wheel` lets add the caster wheel at the front of the robot. The robot up until now should look like the image below

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHV62ONB%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCa9%2FzgjpasL44lmA4Y0L7cpgPOeCdQOTCh8c4SVSX3TAIhALyueU%2Fhsjk1J7ytVqkCT9kzxEwrlPTQVhwOMmLX6U8oKv8DCFoQABoMNjM3NDIzMTgzODA1Igx96mhtrBkeWQLTJAoq3APjW68NveQpzU0AAM2%2Fz7UJztA3tTi4ZEZgdo%2F4HxrV5hUihlwY7O9VKZk%2F9n%2F3pg7tm3F%2BC%2FgLr4807N5Zl0g4GFW3pbZ8%2FrbGoDnNvF7Srm5HMaYFnWXy8m%2FFnR5sJGGPo8msBTZCpj%2FL0d6Fx%2FQQmLz19mRmFX4o4RCQSxgxXD%2BCxU7SqULd1b6ZyxmokhtUUDs0KhMJk1dCEc4sJSmAfxDqRyztMQykNRfOSbweTg%2BvOr%2Bn5sRui2XNjXfQyjRyYAKymemA4o%2B1%2BOEF1%2B3ICxx1FnMIkgwmcb4RwGxN7FulJuE0zi%2FUqFKE9gQ0L36OYYcAzoFVZfKUp7qO65M7%2F6HeCDoGiikz5ia9eBEPD0dI8J7OtVxIRXa3TXSRLIoloChPt%2BCbMW9jPznChxhsANn9OiN3axe19EI3S9Ip1M6Lqq%2BoLutVKrDg5Oya4jcaBgs%2Fd%2B8vxNzxgr88A9SEu85tblTwdq2FPg%2BJqLNgZ2NTlcfcF%2FEflikYfWZY5trTsIuuGnTp4HbCX9pgnUSWip2ZlLUFaXif2NIne6UefjBRw1JHorlZltURI0iM9sJgmZfJ9EzPNgPEXQO4TNBKjt9%2Fmpu8mKAN2eUpedbn0s9mjyG6l0YeKP8ybzDI7%2FvEBjqkAZ96zgSD7ARgBN494YU%2BqLpYSnKOnrW1SSF1reV65JDlGQjIabSccyO89lqH8cPn1vNlChUNtorcvp0fflWjdcFg8NWTrocjz2HHkdN4fGJE%2BEe2AMKFwbyfg06HSd40VHXJH5Fjt4PUe2jWEBU0WNP4%2Bz%2BQ2zwI0i4EovqzYxyqaES%2FiQ%2BC1zNaO4hTlLQqb14xTYAdLaIJiv16ZzKDqz3WLRT1&X-Amz-Signature=5ddc9e711e0fec93d5cfa5bff51431892154fee0f9faf771664a58c864087372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=670d96b4ad71438449cc0bb0dee765ed71b5fe8280a277f7d16a3e6a36508011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>code up until this point</summary>
      <div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI74JLL4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDif8jvE%2Fcxakp7GSSC5QDydYEMlAF9FYNe59tll%2BFT2QIhAIdySJL5VP%2FelKc%2FudDwLRu%2BpmSQ2DC00WeGmLUe5z%2BBKv8DCFoQABoMNjM3NDIzMTgzODA1IgyLwYmozGQXxanAX38q3AOrftdiMBaVpZ%2FBuymmi%2FQ5NK08u5s%2BYfovrblgacL6T2awSJkD9QT6cKZ%2BRqlVLMVha9cd%2BjuQpvm%2FhWdfHVy6MY%2BA%2BBVZE5MzGIwKNJLx3I3k2ZswyRXQlF0yg6fnZCxMw6sEZMEUWHS4sYZBf3tbG%2Bxhch1sER7iv0Q1rOisLv2Evhks4pPSAzPg38CNUkgO%2BsRz6nkuQiF1ZyKJMQzvhyBoHBS9uy6fcJuw8BYXBaOd0CKxZ3VAVXmURqykJ3IWrbsJjRuxfGQYerx251DekIRdjgclRO1h2msoVj5%2B64Exl3BkplTAi1WhNxz19TjEojwCEzkMpGG0S7P1x0g%2FPPK1A3RrR2k6CGtws%2BB4Ra6qcnbWANRnUvtzbt%2FvTSGhzlLIPBctPATogFfr2ioXmuuI1veepYvPivAgOP8AXnR01AqSL3SUkgeLWR3MprMFvgJGnrllBdgBf%2F6H9lZPCIe99aY5y%2BNYi70GWntk2lWpmE85lSLLj2v4QkI2piL0g6rmqt0byNt2RLlUvDd8%2B9JssjkMR7sM2RddQWOeMQaK7sytOb0N2Je8JJn8PAyTILb8zcbjQhWFXljhF92%2BOvA8qnPCyi%2B6O5h2lolxbkVAnlxQgesV%2BjhPzDCJ7vvEBjqkAUqo3O3PD%2Bj6V3UejIF%2B1vOj4O6POX0A%2FZheV9%2FPf4DrJlMigDMf09QESQpUYVlHKZIHe6CewBexpx8ANQ5dJRbIgKU97gyS1bV87uPbgzOG9udavD6MRgyFKR2PTGi6jiwCnydDgqv5zvH3vqMC7mqUPR8jI2dET8F%2BBGx0Icqkn5flA1L%2BUQOEdgP6cDzOXXVlwhFEUXeDXmVUJ0itG%2FZGTNIH&X-Amz-Signature=4ce6dcd3cbb29c8f55a309debab84591d343c275f54c1058d7d9a2396e108418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

Next lets add collision and inertia to our robot. These attributes will be used in the robot simulator later in this guide.

To start lets make some `xacro:macro` to avoid repetitive code to make box, cylinder, and sphere inertia.

Place this under the constants section.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

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

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEZGC3GG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCBeF0FCYhWj%2BVzBzyPeYJ4Z2e5NtF2Xd7THlik1irfTAIhAPgF6gYWAj2BevXX%2F124c5QNWSNepk7lSuh8ikN2sQneKv8DCFoQABoMNjM3NDIzMTgzODA1IgxIcNyYGZXZuw9acfwq3AMi8Q2lvBc9LngyGz%2BWfaNI7twXImNI3pJ7QMv0fSJlRjXc8bjk%2BdYznZE8V%2BvoPADJhC%2BrbMsHYtfzsMWTIs8Af0TySoka1ZlQMGFq0XTI05FhsKeqpcmyIjMdUuwLTTKzOYpmTidYl%2FUoMXuho%2BGLJaH1rCIdr%2BefXcdOwbXCzqFdBZA6uojbupLsJ0UgAsqva7u27f5Z%2F%2FbDHn5H0feL3zp2vmjgsJWxVklOBAQW0Wb0Y0Ppp0ld9tC0KoJjPl53LSKPGeioFxGE9saDe510xZN5OS4S%2FH0e3iXCfcoNepMNAT8dIRQDDdFxA9t98fEzG18yfTUsQkw4GjET7bWNsgJ%2BY089xlDTllhFUaEcGIHSGk7NOVksIf2VgPAz7UaaNGp0lxu0wEDFtZtMfVmKwz5vpegqpQBeoBgPU0%2BGgavEXGMqYppfHipGXqPjQ9760aBJ29zZAVAv4xUr3jUNdNElnAH3lr%2BccyxWiXqXse5stR2yxAMWrt015P9a%2FT29IBHTUo24iZ8LqW5dPxSgyuaZJF5O0NTqZlcOOICNBmmZaRtF8v0R%2Bj0cbKoKHNoQ5nqGFyqafsBZ1iTYXhbYk4Ow%2FRcra%2BzbgESkL5Uqigz8fX5KTwWddl0MnDCg7%2FvEBjqkAfztlV5Hv5dUYJ7Ewguf71G1Ydc%2BzDRvHD1n1sWdQOEcFblSnQFMOl8%2B7Z%2BrfnlBv1INg8mTHkQsE1QtZbP4xYX3VrWVe9rywcrIPEBC2y9pUOMZP0rdjz49Vr8PFNqepQEDfVpQVXBUTDI9ot%2BpcAKPRrzBSitNH7hNzXAMyvJIBcC21mr00FKSaFw0cdBHTrudVu8Dy9QeS49p%2BmAuTA%2FySuK7&X-Amz-Signature=5e1766c356f1fbd68f39ca6b5a4eb81a6fc7216b28e44d41fce369b2d77d6b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

Next go into our `base_link` and add the collision and inertia tags.

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNATA3A%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIAj%2Fk4ZEN%2FasvKyqTtpn1eqgsHe2uWQ5bjl3%2Btv69VYdAiEAmQJMZU0%2B8LOD5sluDLT%2FDJmUiApffqG20gbnoRP9gpoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDNRe6Oa8Yf5Pfq7QHSrcA%2Bio67xCEsv9bXKW%2FyhilN9Inpl8mGBg3AAamHQCX0c8EFcQ4r3VokaLWf1sIsb5kWsosT09Zml1Hf1ufre072%2BkMK0eFXx10%2B2lOx2jebjL5%2F8tGeE7s270I9nL9%2FHKdYSxh9Ub3httzFf4s3pWlHSv6JIF3TdbxyU4CKrGKj1KssO0kzRjT0K5PTqS87nvkJ1hSORGOzucnBK20vhVVUguxd9peG6LbAnX%2BYVwMJ%2BA%2Bbafe8WP%2BBUzSjMxfT0qJkc7YZRKfm1dyDDlyAqE%2BvT1s6tKroO7AzMahLovAh1Fe5p1DLdZs99SlNdIgtw6E07uAatdNYugolzYygYR9HPdaJuTJ%2FY9XefOfE4NdMWEWhf%2FmFt4yqsOPdzM%2FvcrxAio%2BpVu%2F8ewl65OMylqQC6b%2Fohji27ix6WfJ9c70wmIUIH%2F7wLGKPGBybacxk0ous8pqeVjfP0HOiZ2ci5cuI1FWxrvmpyFmZd%2BHLiLCEVKt05Q6Mw%2F6gSxid%2Bigl0ZmckFvqE86AswTMd7NfdzFmmUjHsAcew9WgDNiY7NkCqgC9wzDiG9Jtaw1LiSpJMP5Oen823ThRE1tZdGNVZIgOO27OvWdfQxVblvw9tPDiZOUCu7OpMWlMdz0%2B90MNzu%2B8QGOqUB1fZVeyDGspdSnXa%2BhAOjElkqlUtO7XhaR8jkxIyI0IOReuLrFum6r1jTB6KNuJhn2Ro%2Ft0s6mDcdfyNihoISPyd0%2BUQBDwPAcR%2Fxse4zcZiSnrgBUjcrzTZti%2BPY6t%2FCbxp6rN5uFFYG4nbPlpx%2FrnMCCMeurgXc22BSLe6y2FSdZZfRpFeFScO4FhdJwQsIR%2FnTO313feWLG9cHRmXecv7VkOQO&X-Amz-Signature=c30f99bbe3b38838e5c96193c4b380948c8111a620f4038f1907986725f1fda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NYZCH25%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEDeE6Z8UN9lCRohj%2FNLU6EArxHUThyRU5U8uhl2O5ftAiEAroZEkLVsZQfQ51Th541nflmUp8u09%2BxKHIsXgcxCfsQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDCgIXUDxR%2BUqx71oyircA7fPsdu2mxLYIrOyIVOUhhTlK0HmsU2LYPbdkHi%2FkF%2B6G2lxG%2FHscyOQxVNDELHswjGzOP3vocWNSaSRGwFGQznsWVYn6pEcYikoZI0Oyeze7Ja%2FJ7U90005UIVdoNcl6fY%2Fvy6%2BVjapaz92Uu%2FpEsOyhMmI%2FAbVCaEj0164FQj8I6nr2ucFPnI2%2FclhvLfYBXhYmiw%2BbrBJLCOhboeNuJ3FVDxp69%2FZnDdpxAYAqDaNRpSybGO4vRL4vZoVvgd3jFdeg12OQvtAF%2Fs%2FuRto9Uc%2Fm8zEGBiWihwxeWcMmMR39GkCDKWj2bRA3c9K1oYASHLaDWPsMPAO1U1ZMS%2FuHKX0XOBmCg4NIV7DfyJP%2FUDFk86xL4WsDfi7AMxyeru3%2F0SJry5FtJtegEpE2Hd74FSAdnD7vEFTy8RQukyIoMawpKRIRdIpiDvXAcfnO1suvoQBbtmNLst5qxDDDGpLjSvQsTqPBx5QDTusgEzWZEb4cMQ%2FSBV4Cv1nkP%2FH3znqV5fNEYhT7Ho8BUiVcSaJ9BAt0E%2BSyLtLe5UfPopKn9wi1L6D3g0Uwjzo5nREzXBioV6XbwSiGaeHuVPi%2B22v2secAZZrZUB24CJJ13WV0%2F2HEZ0zb30rct8XBb5jMPTu%2B8QGOqUBSKty3OxcM1dqXP40pN8xS7o90QfAkXwWymh9tl93X40BNQwCD0WFrfcm%2FKcUbXbjKDkjunXybf7oqBDXW29bOyzx5FILCw4wuHUIvweakpct60AKssbWu3fX5ebltwkj7NwTH5mQGtrL9bsfuvqRB1U4aKihEXt7IXW%2B8l3OlIhClM4k1q73ib5uUmVYAgZTuFyRt30U%2B1yne1n%2F%2FHvir2YRggWO&X-Amz-Signature=31ee8664d704fa59f855fb440b73d87a4a4c3bfcb9247c90f36f11eb5c7c651e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

and Same for the caster wheel:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NN43FS5%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBPOR97HOkGLOciymLwzYLWiBRRbSs5hGmXgM43xSbKLAiBOTQMJZZwrO1aKYUuXvZTV9FE8qAV64NUkZdlCvNI4vyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMsB07Q6aMoXRHTMtcKtwDoJ1PL7ECe4MErx7RtOdVk%2FJb5FFowGHvCr4eMa3lS45X1WV4sVkhWPpT7fGyFaGWbZCqOJmCCI%2FuqKpKL8sk5LO0ZpXjYKAneZ2MZajZEEyGMmT2LqVebFjGoXBiRTYAe0MWrFVCFOKR7Y2LHQ%2BKeSBn32Rd3nqaBrfM59R3%2FqW6MXG9Oa73PmWzNLARRYodTA5c9RL7INRH1MacVw9uDn%2BDkTgOhv2eY43NUmANKpZfHmalpze5W52vdZa4jw%2FeimIQmc3v2iljU06F2SorupLuwxtA1o4Rnb0ScDzUizSo2t%2FoDhJu%2ByQNUZZxlXFf09o0gT92wZE6AfpgZkknXBXem4OguKelcg8AMxTp%2FW6gbuqVl2GM0as6Gfjz2wFp3epnGakWKgzdLN9G3cUSbrB0ylPnoL%2BRUmTtY%2Ff0EtxgC3Az%2B7dWoSMilQBf%2BLJG6cLqQN7n%2B6COsePogFKL9WzyZmtVi4vGIIrezKuXeboRXWcD7S2%2Fm0jw7KeodJB%2BSth7Z0rwgEgrqwkIEQ9lEvy3ZxL81NlNBcTBon1jEc77K0PN06jBcjv2rJSDrf4lnH2VfLXKQWcogMJmJ%2FZ4S%2FHrf9f1HiRGEQsWiN9aO4kJkTQ2tmfyTIQG7a4wnu%2F7xAY6pgEDvcpogv2FUF0tfDp4OJBQgjL2fxIkLY5Jcv9rAwJt%2BkkAVBLYqxoYzFFPnLCtWb9eI4EOCBbr8NMaNswSF9WQYefDWcpt%2BAvj5xJVf%2BvKROZgvl4mDKPyRKPldWFw3kC5zB5RES9zTeEfBv9nALBoqdv7NOshjY5RG4FEWdLnzb%2BWSzqba2bRvtTSP5xWEuXWwYHnuZe0slkMU0C1shFHkhAIlv5r&X-Amz-Signature=e452613a3ffcbe3e5418027902741df5e12b9167095ef839a89b1cfdb28fe3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=43971cb4b1a1271f29c392dabfde266e3e52b685842ae3eadc52da69b28a2a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>final code:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGTMXNJ4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQC%2FzPpYoLx4ULQ8eky%2BSe%2Bx9L1X7xY2u46VOihLf4u%2ByAIgAXD7SxsKv7yUhNLa2Uta3xAqV7wfQ%2BSTqRE%2BsO%2B%2BCsMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOeUEmJEdNgetEW%2BrircA%2BudDT%2BZkpnN4SX0fgpnibifkkS%2BLO7YzaeRZ70eS3apw24RRBLBfRYraenEIskz5zn%2B4EMqifWb8%2B1xuv8jP%2FhPJA%2Fz%2FfDRpGnNbeDEQ6K0oD2yCZQs8AiT9knXJ9tA7SGMN%2B9oPxvDTLbgebBJuu%2BiTisiBIKF5Dw48D7K%2FM2ndSYEGkoFv2LKJLOrcXtxYgl%2BVB1Uklu4XtFpSTnD2CpIZTwPfzBLmZtsaLwv1dPRwpdPmb6irGjcPkIZgb9C8U85Ti7QTeeZGW%2BAvK4t8DAM4k%2Fhi1FXFFugFYKHFB5FYrpCgFr0ah5BW%2ByZGZsJc5BriHjeP%2BXH2f4%2FvCjxF2IyTWiX%2B3XL1yX7INUdA3fY46F3LPE5%2BLnK65IViKhNUe39Y3fD91BdbfqnL9v%2BKRFwQw4umO%2Bk%2B8uQUoInUAcAC1T0v98%2Bh9KOnzzS9rAGH3N4kNI7BENoADJTv1lQuKV6QDKsNlkFP7FlLircwARnFb7I3X0yGhIbMtyLfu80eA%2FSX53YN%2FDxU2kzf25uuNyMZ%2BSfj7a8n7PmIaTnvf7yzM0O1gcMHA3wbocKJ0k%2FxMMapXqcy4qovlUS5gjJIdP3vC6kLDGoFHLTP8QYB3J0tBqpMfQ40cmSEX3DMJvv%2B8QGOqUBzUPTm7AKxbmJycxSDrFx44obrx3Vu8vlAjFtg7%2BGEsDSsxiEu3oAG05GGFlJLo1uyCpvh0uywjX7JEwaAWUcCeT7DT9J9mFyEvSdWQz%2B3r19I5eI3mRrRBHnKSZWXEIdqvBLZ8Qb83Szew9YzX3yIbtdiURyTxz8yV%2B2bQ2E0ZOHAGd9gdwJBwdbbm2%2BmzXDVmKDJU4UfacHcl%2FmcQBsjhrA9yLx&X-Amz-Signature=b338410f61797b35ccca4cf50b72fdf7abfec4498aa5fa0fa0462d3d08ae03af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=774420da79d0b9fc8c22fa75f6a61c7d98e29c75edc1efab8a34a9de69c6f76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=b8f51517e4edc1892b52dca2184dc2d8f43660ecda156370e6623a2a811498f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=8faa1af8ae361b38c559263c8cd80e115ba43dc7b6655e7f64063bbc624bb1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=b660398f7fd997cd161c31c022f195d9900c7a4c9a9d2160a5f724c9faf62b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=39dd658c3e753907fc983dcb6264777655280b3e24679b3bf764a92912a46ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

<details>
      <summary>What is rviz?</summary>
      TODO: explain rviz better (say how it is like ros2 echo but visual)
  </details>

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=68f71caa716748cf116bc58423499dd5a9bd3d4adde8f304cb01cd1e660f8204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=8faa1af8ae361b38c559263c8cd80e115ba43dc7b6655e7f64063bbc624bb1e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      [launch files guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/launch-files/)
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

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=cb9ff31a8086416af1f87a2811bc72bd264bffe7b151f58a19a9ac2c50f39e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=08a834f9f59f2f25fcb637e533164b462e837862cfa8f424f4d0156ab61b98e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Z2K5LNM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIBsXOhbReOfvM%2F1AFSTq0Z49zt2Lk051%2F2fL%2Fpe6FxEKAiEAwHCouMY2rgPMeSejJLO52gU5AfXrPeTnXu3r31hOgjIq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMvT5FDnhq0OykUA6ircAy5X8jVBhPknxGKYW8s%2BTdkzIKi96hiqwwzsFiDcK6vCkTQpaGR7Q6hjkIzKJ5k%2FRUTnj4vhjFThc%2Bglq6w0RakYf155KKX%2Frroa%2FNFuzeAhmIg2sRbHOfD5Um%2FyVUPQfGrXxGvlA0UiEWd7%2FQ1JMzkMNnOqF9XqXmKNDCpHrTNTPiAGKEvnAZfcLw9aofOVEvlSDlG%2F8J662TB%2Ftu5iYk7mAliXWVs7is8zyWtosZKYSrhJ2fKO6qyKIr9jKOQUh5PnkPfLYLcJnMDvPHBIu81ECtvlIxZgf4bgCPMRfRyi41DM6rl%2F6jW%2BT1BPAgjNH6FiyGRqXcvcs1auFA69Ytg5io2TVGiB%2F%2B6mnrmhkiW%2BrZoSqGQ4kWSHuCNC%2BqDPgavli7RTTZEqfXJgYexGURbW6moxzwIE7HA%2Bz1DEzHbkwjfLhdn02ImKjcPc4oBxGEOooYGsbpEvHaWOHkhfwKSyNSB%2B1mlDp7L3pODir4o6mn6houoDfbD49RddHHuykD2Xs3DvGDUO7oAsUNbMuxmqemIdEJReqfEOKlIwAT1YGokAG%2B6oE7Q%2FS4BHicnL4e8i8JNyUAwTw4TgcxqLLBcBX7pajmNkRaPk49x0p%2BQPLAZUse4wUw4N0raYMJju%2B8QGOqUB0G41HkTM%2BttS1Xd%2FKgmdeATgDkHhrTdE8k5Oe%2Bs7BNb%2FimlWOK0NQDwn60hvbOsChQT5bY8gFuz6GeEjEMVqnnh%2BSRFCIaltSD5EN10%2F4J4bApt4YbKcsqGqgDikY9vvaBt5xGfGwIhKUyIW9pXViS3WNjaBC%2Faq7eWdLyFSsFWxuTww4bstUhhsJj%2Fqjo%2F7bOEjPNXU1qobkF8%2Bp0zkAzOuIv%2Bd&X-Amz-Signature=b0df8c4ccafcaf7b152e56c76bdbafe60bd5903cdad486c89781bed6c13f9f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
