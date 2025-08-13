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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=9b50db197350fe5a0a8a617913ce8d2ea54422eb41eeffd02ad175777d53fef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=f344b56971068045cbd0dad463d5e47deb11ecd05201e2836e324120fb0f29da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=9d08780bdb001f318c9d1eb9ea90139a3c669e8c777ac8793d47b0d1ce885edd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=0aecd1f9edf9f9dda462681a194e0d843a6a61412148ef967bf6ba0b1bab833f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=ef2485786ba0048551a3a9604c931798c3dad18075f26fce23fa0015203a422a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=ddeff336bc5492765fafd3935e1406a3d27d30e2cb3bedb4bbcd142e1b2cf180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=3b0d944390114ef6eaf0ae9020899f96d8ef4c9f8cb8aac0fa7a6fb24315e14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=88fbc33da4b31215770b8bd2d57283fcfad1a19f85a5ba855d2f11d2ecbeac45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=1e305dc32f232cdc3ac419f0fd2d253b9065748f76906234abd057177b11a4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=fb4897b2895cd3a3d94c9dfbb2588f4f44bf8c8caaa2e1138e34f830525ce99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISWOO6R%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHseqgu%2FzlDicQaIDxiJ7RRjwFPUdbjaGep35OCTu%2BzeAiEAzL8ONTqvRW2XvmaPnN8VRaTmpuBLGH4j84bUQy%2BVKjAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFWsJaZmj4WrNjF55ircA5NU8bcfy1MzY3qaOpPb54FyEp0GQ2GYaNPCoUGS6udxuA2CQuIlcI6MsRa7%2B%2BRkqIhVQu%2FR615rql3YUSPCBqkXUv%2BvAm19eXuaETJoEDghhQ%2F626bWt26S%2BhrA3hYULaI3i69b1g8tnu7vPSnq5dgNUf6D60i1XhvpYof7dUdar01Plz862NT4PPy2vU8aFHoefScfjyqJhgsvCm%2FMFZuAC3YE13Q8ZqV4CKc35bEPBMnze7sdQfUCbJZ2Vx78tEue%2FvMXUs5zsab5bsv6rp3ivKOYabZT%2FVvaVv8XxKVFh5ATBhdO625wwSZhtK3imjQSbUnc9coo%2FuDz3c2arqSqAQwRew8vZcgM9p%2Bz186Zd%2BPdbLio5up3mO919YYIp0%2FV2tU8Y0KaiX0fYxBVb%2FoDlztY6EJko3bHUkxUPnv0Y9tQxBx%2BMlAPyZQVd4TJL3phqiv5vEOrVOR6V78x3CMxx8bvP9WbzE6964kNKbwbIMLyYE456xiCL1dsfNYYuwXRezTsIJYfY1vB2%2FI0BN46xoJj2SBgJOvH4d%2Feu1dIJVN7Fr5XmVEhVZxIX%2BBhaFZZxHjQAJ4VqalzBmBGIV6nwIQ7XJ0BE7z3%2FAw%2BYy8gYpXOfBmk5qC7K18HMLvq88QGOqUBKkHsfhA04G2UkBHi8bTplT%2FZ1p3OCgEUhaXFHkQA7bTQX3wAomsDsock1dQZGSyM36gB4VtIFLhF98x46kFeqeOKEUNWJfv1mrjSWZX6IpGksBOKq5FIybi159geBGoatyh343Yyow6lsPt5f9rqZO8nnqmx%2FZBGYUJLeQcmqHpCA5lBnrSn8INC5m82peb3AxmpcQtg7qr%2F1GU0rDo%2FFSQCwdFq&X-Amz-Signature=60528cb2211c6f0c1b44cc415813a3640ffbaca366445a94d12bb013955dff03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVT4GGMK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAB6aVRNyy4sp2vubXMFCLGy8Qf2I7Hp9io4%2B6Xw0wvAiEApO4P6D7VmZA9Dd5vU6tTx94XTcfBDZRj3bQWolZDoSQq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJW499pbWBLlu7Q8vyrcA2AfiEpbN7%2FCn7q%2FaWGhpfYQJGWoTGlOmItg4AbBJELL7eRk%2FOCBRPSVlQ%2Bg8xGlHPnNQjmVj972uymS6P12A1f6rHtOCJ9dlzVbMQfo2aeD4wKuwInhtKAuK%2Bcw1GjD6Xr%2FArKdkLw0AHl%2B%2F8O2kEOG6GIzr79clgFEmz28ZlN2JIMvW3ixuQePQYOHIwABq%2BdH4cnzDjZ8xpZ%2BrtkkzxLp2YF4yT%2Fzg%2FSqGZGpxXHc3%2FHdZhMfO62%2F4bManqH6KXdrKZQnm%2FKFSDnqqk%2Fqxs1ptjum9WNX1yi8uAfWHC1BLGIdL8j0CxDyhSTPy1krTp7%2FqMIDwShOXPNfjlFFAiYRQp9oe%2Bx9GyyFbbjqSzKcTbMw7TlyECaNj%2FWqrCF4iWmdIVuSyfbjy3%2Fdj5U7b4fkBPWoc%2FxAwptSjK0Cn19GmT9tJalLftEBQOwhn0g3qsKZplAIp4vBuCN2O6XEzZoy51IVZW6yiux6Hq9I25kOJe1Gqu%2Fq0e9IK9bMvY7lp%2FlOAOO80%2FOnxCPJxY6Qgn9P5uF9AvHKtdbDTjBJiplEO2xDjCdh6pozuUVg%2FHOCxzstI6h33ApZNLS0PvqfU%2B6wAgEzemDrraYyAdveko58aisDW7ONncrV%2FOmhMMXq88QGOqUBXet7jQfmdwpstB5z3eN51icpPnIpvwtg0A%2Fl1lWWNmtaOpwN%2BkuEy8y09ZmGzbTO%2BXb84BrJIYvPabjiGMWB6bMTryI35BXXR9GZinHKokwJ7khKCThUw5%2BoAnPJ3JItXfMgBT8AbcyGC894Sm486Tgl2iOdu%2BUbNQOaWgK9EhxjRe8nJdqUqXpjMtFFxydFqnB%2FkdgMjR%2FG%2BhvtGrK7W139gWaH&X-Amz-Signature=a849be3722ded549623278ebe689ca8b6c55627b0a9ee44c874013a8a3c547a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSTWCZM%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUdHw7VuwedFs20ahdjXOQbXG2ubtyIn%2BNu5zOvC34HAiEA2hnTtK2dDytZmf7sjNRTZH8IlgsmmemW9t1%2FM7vINBMq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL4gSez3bh4IiueGOyrcA3HqCqngqtjPwlDnbrluvvw3zbzqWZATaDp0bvKJdacroxRBiSZzEktP6PxlnQUtrYz%2FPFNRb%2F1G2WJD4kzqdQCdNzACIRGepcggdyx%2BEmp0%2FCeCqFvuQag3XMgB78ocl5u5U0QzBV5K80VGNuDU2JwkdS4aecc6%2F7%2F0uSCmCIqF2WqDTfMSNO0lbo5WMlmlE3pZY4se1klmJUPKraRlOxHDThxO%2BIs5464MMxBQAqADC7d9bDFaFU2M7oP%2FC2M3tFk2bUidP1DAFa8%2BsmjYh0yD5V5PRQzoVwKnvVAKREkyNGF3z64F6By1DHasWk4Dgke8gWBdlG99n%2FKM2cY5fY47DSzlb0sIA3XVRvh0Wn56hSMJDDPpm7HoemWxpKP7HlK7cYwpT3gem4gDIrT8TmW%2BSbrK%2BCROd3mXoIoIDejxZHXweH%2BReGrZHaZfffRofxHFoT5Ivju0ebroSaRPkS2lz3JtHoMn7LxsFiegPlJhsJv9vXujuSiWAt3jtqDLm4kvSdVT5MCrKmmLevUrxpOiDt8JugHnvMaiG8Xq1bZPUgkBhrkN9HzhKyk3A%2FNMGw3ws3u%2BKxrxwNQUKJlxiYtaVq2PU0xWiCh7icuzY5j5bMBiHTv3bJFEbdw8MKbr88QGOqUBODBnXGeBLN7IY1c0F9YRcuEvXDiUBrdiOyPZggcJuSv%2F%2F0Nv%2F4UV0yu5eMLZJ5wwYsATFzeZIK8oGSZVeKVcXsIpkqGS2poXXMjnk7LAEFdgaUagPTDYj9qd7KlHChzTcs3w2fxqwoBhbVrMlMgtU2JkieelPD8KNafhS76fA7kB1W1v13Q43Jz9PQCPpvUGyH0uhk0iMn0qQkaBLMMcdFM1dkhF&X-Amz-Signature=fb1c129827bfb92b18e47302ac909676b97202741b6d15b1f8d66a81a8468158&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=72d31c726200f4a936b4e6d5247501106f8febcdc76ef4f9f6c6dc80c4e71698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5P4PZVG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChBWGNNvdxG9rnULIwEkRLxdTj14TVX%2FmdXpgzBGiWVgIgTuQTKyUeIcq81plFP0u0gdswOCpcFdZXmSIyXlIyN8wq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJGWtezfdnKgUGt7nyrcAxvwLenTMeZWW1gay4nM7vuh8y502IwscZbti4%2BiXnQ5hcgCOsR9fjYoD9rnk2dtM4Yp4A3FnO0Vj2kUQScfh7St%2FfPaKttIDXOxokV%2FVyuMilKFlK3xqkjk%2BHZI1fMyri1LVnQ%2Fmd3e%2Bf04NpSBj%2BC67tVM2uqSapQxlyuLgHKEXTcjlcpLP%2F%2BcfOY%2BxG778gV0EiHWZDqEn%2B55DHBNSekyYbmADQXg7U995q0xkhbrhjuGEzbOXd%2BXXDgCyOBATANCmFz%2F5MXER9eZHs4jds3TRvOAVyf1ZAgijzf2cSSwleP6wcNBOrJWPG1CsYYv5lgOHEIu75ZxO0eMsRblmuZDxKdOcg%2F24KO%2BLt4O7OSYyc%2BkyOVkgUGxbn61dlA2I6ivhWj29rAJOxOo9mBlpne9nI5RYSqm3uqbn2KtcivltWGMNQ2symhkmmLVSKM1LKavVPqtCbhG508pSzXBgmvkmvsdbbbgM5RzigTt47wVrhK4gSKl0OshSb9XxzTiYjJwf8GkkKcfQEFyAR1hcPPnLmX6R%2F4xTQW5O84HXyvu5LqmA3DgrHYidNP79BTT8j0lW3KmKVvpm5ThOd8e1C19VmqidrgpK16XKFAa3XnY5aCM2Hx%2FMYhhggrzMNPq88QGOqUBS4vt8uvfiM4UgVEH1bxOKGZj50IZrtYlS6Zru8EZtyyJzPgC%2FLt%2BkcUPMYavVAo1x6d%2BJndvzfmiDqg0%2BOzIlqk%2FHX0edQGi5PwdP0nh%2FwhFL%2FG2dKKz8oQJ6hn8JMA%2FkLmwiYpBFnWVNNQG6aDSbHDvqx5mC0TNDA7BsGO7MArPnGbzvZ0%2BI%2BWWK5BSc9wJrSsSxcnzk73BEeIcC%2FwqBXIBI4xQ&X-Amz-Signature=9c2c1216760e803ac225bbd5890c0bb004fed937f607c64cbea35c3ba86239df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=fd809f8fa394c95284c9f8d5a6d01a05c3ba67ad8989c5085b555ed5e8400b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663HVIUMK%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVd7at0XNgZV5N7korfmGNNLB5D%2BKIQBNtQADr9BekQAiEAoLr9vsHaCvAZFJwEMXU%2FwxCC7jGCOmH0ZIwHp4o%2Bu5Aq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDWsbQx98HnepiSffircAzD3NzQNyiA3oJnESF%2B7mo0V2%2FB5Hi4VAT02zv7XiIDiOqbv0N6fnSE832%2FBIim5DasAUll0wADZzsh8tfuyxLRlExW1xqip2OcjKVOLc1ZWVC%2BvinFdNH8%2FbY5eTuZ4aiOmSoZVq7YbCAoRNJwFzb49cztyTOmF1Wn7w5RIrw9gZ5mMWll7kG5VGpHxjPXDTtQd5JDA%2B3RTh%2Bob679SbSFNODigUOqF2l4WLv0iyDPO0UZxg6Y0EzV215Clg8pd%2FedCpSKKEZX7mwq7koKOHvEYZe6jfsXNqnuuQq1OPElFCmd7SBvrPuHVWQ4xthDMkbs0n6ZbXmnXrOVrMFnCUB33EhN2uGJayAsZDCQ%2FrFK%2FpT2st1BXTDYzF9otgWa2Ooe%2BRpJCQAceAKDtkRvrfdoBMpChiz%2BpP4iy%2B4ExuezYSZpmfFYk0iMnFeLXhwRZAKKlU10sgobZ63OLHd6FskEG6BM1dhx8gFbEj%2FJyv5Mx2fzIjUfb1UnZNun%2FsWcBx0s07kx6LzH%2BFJZPFnsK%2FkaOjw0fCmtZto%2Fndr75raHZleyb8JpbPSpI1cdIoNiPaDk6xY4jj9uFCWU3HT0uw4ynwQGF0qxa4Bp7CxBnvr5fgcGXoh%2FprsEpwDx5MPvq88QGOqUBUMLrJaCciUrcnZTyP0x7fTtfuqKO0Z1EKMwdamoCjumHi7K9wG9BSdHMQmpWL1gN8NwbBi5zGOhgSkrrrWET8lFGId405XfTKaUQbn%2B5TT%2BHmlg4ubtuKNSB5L7pmocrdq3gyC4NanWPGQQyFw7HvHAfdh21UQ%2FgPWLUJVG4RcvzubGuu0ZA%2FGkrp2Ri0GHy3l4gAjO6KLHSrwoCX6nXX8wCJUYO&X-Amz-Signature=891dd48228bb46b6f0ea9279687e693252ced8392664a96d6c620d681ee81b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=dcda78877cf3fb2079f3bd7a46d70bd13cec3986f00bf06a04be3554e2b7d4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WM54CVPJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDDFd103Us51puBV1zfFp6TC%2BHJGTDgp5oNiEoeXKc5gAiEA4Ky%2BZJm4m%2FZ36tvjXvxYpqou6nKw61dPOZpe2lwEf1Eq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDB%2BAfY10EKKeZEnpeyrcA2mm%2FzSg92ZiB1PferKPVcbqWT%2BNM%2FiV0zluH%2Bd7jp%2FA4avLOmh9CRbCP9OSXPYQ%2F8zgVEfAt4nDQZg2Aauz5BqZaMWAu822C6rE%2Frh1%2F21%2F4zg%2FTfL5O2qTDwaCxMUhoHJeld3vU24gV1Af7TxKjqvRjX8h4fw1LOhxvBO8Am0UihwLX0x43UuoJ%2BUkLwUIlqXSWcf9GnVBrV02kjWZWYoX19h2L5WKyo0e9tubc%2FitgBDmObGW0YshsNgd%2Fptw9p2nLhwTWH9yhNXOf9W%2F0AFDTTi8W9YuGT9cWdPV3kBaCUktM%2F6LLUlLpekxlT0nw1WOwI8xaI1cOmVNnkG8%2F9MdBoK94vQyBgUwoiZwGDoKi6bTkqebmpD01jBz%2BfmKdd9ttQGKIVgD0irM67xLvyaSBTjL2Evr7eendjeAuz1YJt7rgJ8KnhRM3b%2FSqOBSyejqj%2FGuulRhLqABuXWIpFnqlRNKymaSC%2F78pfFbZkSElkHeS%2FUGYUnpPdai7uXsiqW0I8%2FUk%2BFbBj6DtxJvF9u1xWWYkbsIS30p8%2BmbcUuIblWE8wbYTsEU1R7hUvMzTEtq5m%2B9suuyEDfMiQVahYXamEj4LjUXpkCz4QJW9CAGIlZM%2Fa3tdmz5%2FgWlMJLq88QGOqUBigYEQoU8JNuzGeHJNXQij11c8m47cdpqEHcSPnyKJDVEd5nhK8yZ3mlY1ZDHdlKBJQSTKJV3TlgraTHhcGrHgXgARFhQa4aPu9XOTKJUrNZ6IhUEATBC5bsi7uT6QvVMq9G5wctFDWlGxQcKOHC49Pg4m0pGoT69dV3gFUaI1Avp15FCoQCrzs8NJr7bruUUG8Mhxq1bnda59gEnMRdUlyakcYTk&X-Amz-Signature=37687014280486b487011306f14620735a318e94cce42855ba4980d4b76a988b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=481cf56064026f3faea7dd7665afbd318f553948183f07306f3c96c27eeefbe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W6IRPIU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaeeacLkBQxg5CvJhAP1t6eAFRysF2jPa5zt2AMXITQIhAL8NaZ%2FluHGqfZrmFQjJTR%2BMlD2gPGdlC6WQYX8pCXP0Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwbgtbrnWFunL33LPsq3AOG6hMd%2BQrvGbdQ3f4TQyv18pllK%2FK6ATQPJeryvRM2KkeJSg%2Bw%2F4JS%2BLdcw2WtDJqYMlaT771KbP9Oocpkb0kepnAc5teTReA0QY8lqG2O%2BBr5fQ0j6F8txQV8v8yTWRi0jaWL8%2BvtCqfY%2FBAMABMxB8SgpXFst1REZF13qDjSv2jW%2FgSWkGsSyHemqS6%2F5AgtkxWnfBFkuanPN%2BgTWHofAps84Ona9WnvGCPTzw65KzmDs%2FcFRx03XmdL5%2BPIkAzhapJwUafX%2BdSo4tFKmmasvtt2Ldv9i49Dx2c9ADVKJWNNW1S9Q7A9LEl9tLTMNbuIBZ0pP4oNkynC%2FCaiHv94fuzGAx1ZAkHfkZybeQA3Sg5BcsXgAoOCgmd6F08QPWICTuXkdbbkp8iwHI4oahpg5TreDFQIT%2BbtpqZS1XMc%2BH3u7NmuSqOGtUf0qCxwWLGRxrg%2B0gNmQlirhsZWJPPCJpvpyLmPvkQKDviOLdQpHNon3vdZVv3bJoKTBn%2BZV7ZaBeiwTuA5JCM9g870m2n6OdUMm1txWAHDih92Nt5GzT8qRYRXCuV9uo16GaLltn9BsZ5FEsEQ7yTduoxcvEhk22nimKKl2OuHxGMl159OsagaWSZqzuiALcq6RzDF6vPEBjqkAX9BgDtbBYECWDMjbEhPsl4GMuAT3x1FvtZbcVJLytBwhjZUiKAz9Y0oOmpM4b1fWZh6EBS6eZOuH2N3Ix0iPY4wqUqgEU6EP5qLBImKOq0Ah75jfmAjL95Y4zddeiKX95%2FybExKde3aw7rUDaRKmc2IIwroon3fRF62VdH5xCZo01bKE2vmr%2Flv3n1XmL22golNPaDiGB%2FJQbsHTHet9ly9jzXx&X-Amz-Signature=9a5fc270afdf69ec1fd054e606f035172589053a8c5cca8924f4e436e6d89232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6QZQUL3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4518UQSRwKmFzzc3tyjPrbiFQb5q4sOKJV8yJdQWgPAiEAnPqfQFj%2FpfhTQa9I%2FQ1Ye2uJ%2FuM0NO4%2BRIG83TN%2F4Fwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDGlZvrlQvvTnrbNRkyrcAxhsWxNY8XqSq%2FfUVyvJgyAjDIxUpfmtuUbH6P34T%2FD%2B52BdqJ92ffq%2B7Q9bI6fGa2A7AmiDULeA597sWy%2Fycv9D1Xuaug2c3MO4CfVn4t%2BEwUkoV3X%2FLV%2FMMX8V1SW7pBmZRkXDCVkFz9aWmPavIJMnNHMZCr6VO96JwPqbzmmOt8WsH%2ByQnvwPclTggasBSKYKUY6cQ76Ivnv4EkXh0KEO%2BiSHbRLw072%2Fj5%2FgHrXkGKWnrJe%2FtJv%2BRqxTdUo%2FkqmgPMIkqpDe%2B5CDBgDEEB4AXashrcbIRzaeM9QnY1sNdz18%2B1iOVx4MNe34CqHrQsEdvatyr%2Bg0AYcw45FNOpdpC8O6ceUzUDFvYCnw3ZsJvF%2Bg3hzYxQ%2B7GztLel7uOfIfff2DRXbKFY00sqSVFaNfB9uoMJvqpPD916UjtuPlC%2BsVtH%2B6B1cVrSZskavxp3oQ%2Fa9zsO5Ls8iXdbvtxX6RP4YX%2FuOfmDGQ28ZZz%2BXEbt5NTMpZi93Kt1XEahJ7YPVtqzRjT%2FiICi9LJ6uIQZHg3exthvRz9NeFFhMgmibu4jWnH%2BA3Q3h3lVNtaVmkmWe9hguLfUnNvIXnpDd%2FKj%2FNJCg%2BGoMAVXySIN%2Fn6x6jM2sKyFSVrYEktPv8MJbq88QGOqUB4c%2FPMLmmYY52Vwzv0GSytqizMH7ClIeowgdRSgjqJSgt3Bc%2BANIVvxJBeQRLwo4qPt6P4mqGhUyOq2%2Fs8VKYNEK1AJl1vfCWmpTUQmhgyzhc%2BtjiYoyikyDQLmkOVso2DnYsUD448EZiHhAGaFxwPs3fV9iKyG9GuczBAsOiq%2BALfumpMvDh6EtSFF4KigBHVnspUDvF5GHBgpGNNQAMnrfKp3c7&X-Amz-Signature=3a6bc4dc602c102e2a19a2033d1295eff5bb021ea8e05e5e872f3ce881bb49a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA2YNNLP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VPDFZLcHEt2UwY%2Bur%2BlIsRGbP3tCFQNSDS6wFtQ1CAiB2X1KSAsCxxNi8%2BjMDonyDfkavk1XewGzuAlc1zZ15%2BSr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMlsfbeIVto4Tq2RUAKtwDa2Ov%2Biu2eVOwNFEn0blii9nQ8GW0McsFOjf1aaBqXvJz8WusSesD0ERY9l8j4j1LQor2ZccvWUOf6QdYiZpqv%2B4pBE5HQBbeh3lF7zLyRC6A%2B8OcWM7EkoF%2BM8gBr%2BWeXY0SZkog%2B64a6K2la6Lp8NJ%2FcQX4RfQc3Nx%2FRGklCGw7mb5WYlr%2B6KBUalS6o%2FMRQcoQRQy2asgvNayjfxGyajDlPpDnx4TTzdLuh1utDaLsTHsCw%2BdpBkWdbfzUaoZGbR3l9UbXwfHsZeEveFGYr5lJ9Mk8cm6gSG3MDq3kaYoY1yrL%2BIe7TudX%2Bp8BPRoGn2grcS6HZuu8skx3xUh2VhP0Zxm1TKiKH%2FxmEQTEwp1SKDPKE0nLx2Z%2Fxbqq%2B8wpwN7JR3MUvQ1HzsrVWeTJ6jUMi7tkclVI0PgBJvB8Vwi%2BFzfoXz5CU%2FPc77eCJFAmxLNSqjqZbj%2FyymY9e%2Bgr7v%2B20RoCUQWQ2JomYztoCLIQiFGU9DrR8LGiE7RKgEv0u6qPV%2FRkaKpHbQpG3%2BMebjpD4wsiCPWFPwzkLj2sLZ5eKReB9XXgvZeW5n78z7eBk8mkamzOXU2AzuyfRAcrvDM%2FedDjDnUZ5Ounxf9gzByyV1p3qmqLx7yVWMgw6%2BrzxAY6pgE1aRx9GpkCXoMy5mueEin8Py1fJGiZp2nTaNJ7y3Qm4LY%2FCAAmTTpSjjPCVArGFNZKv2xlqLPz9Gjx28TC6U5hqfqqVbh1gyfB2saT3nDYNNhgrz0jx4zmSIA%2FvKY2cGL19LsZYhF%2FvdRaEqIHRfhPNqHtYUSRO5QGyWN8sqM4vMSYId0ICyV5BaJVUXiGhNiNkX6qQGDa4hVNBZ0ASQn3obdA8U2R&X-Amz-Signature=7613113bdfff0d7f167ea0bae39d012a885115275bef79782be8036f382b5f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663IMWJE3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArorsAPSfsYYpjleVDLZ%2BE6n9RNyt9x957HIHQZuOPLAiEA9jVjDrVOD73ZKLXVsSJ8S4VgRMakVQAS7JacyXqWtt4q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDNhpPCJD1fj8yKGauCrcA5c3hpB20Gt8bBPPxMcxEEs17Z5SjlrtkV8wrtvCULpCmytH3bR5BePCMz7TylzXrC5iGySNJ%2B2Ar1ZWmpyKkNIRr9FtYsL78FmYog1tmB%2BojQAlhboNM19wNt%2Bzys9iy4G%2FduJYOc4EOgd5hlvUsYD7%2FNPPxSKUAH7cDlJ62sDIJ5MYxkewtyI1P6%2BT%2Bqxy0ESXxqg2bkHrNiCZKyNCpK7g%2FCMD%2B0E64TXNm6AhTE3U6iD7j15XoKXgLSzntqpCgFjZ%2BHz4ep8tkFOR3Aee6E7EtmO5eblXiMyT5U440rB9Ww7jy1NZiJPf2tec%2Fk4vayGwrAP%2FXX1bQ7%2BtA4DElDL%2FnFSO0Lpd9t3uLTwOWllEej54%2Bv05AEqG0ay652iunlHp2PNrhy9rn6ot17zCtmvLkQFuwwnrd%2FdB8oRr44TTr2tL4TMsZ47Klz7nQ2S5IvG6r3%2FxPilLnIj8EGkQ9SVbfooluvgfKCu7aGTSNJtQQ4ifEJ2RcZM731ySsznL7VsrMmIhAMPb1%2F2Bp54bQdB8jjpKW4iEfWlN6M1UozuOo7N%2FXw9d7I6%2BQ73WKa4kX2T2U26r8CTvMVdOeJZuqoB8RWhutP4hPiqwtcIAGBnqauLnQUb7k04f8YvPMPvq88QGOqUBKKs5rmROSDkPorBCI%2B5cNe8Et7o%2Fq7AAfhNOh6qIcPz%2BD48j04MNjusqt%2FuSXu2bvTn%2B7IUjYRqgY3V3bwytgkrr%2BvBYjZntMujgEbw%2FV72o5qJE5jdqQGiCDkWkgcpCBzP37%2BzZ9KnwLtS%2FtoAwjxHCDfdL5cHFT3EGIAJ04%2F4JT69E6vjJO7nQjZqdJG8YcBGm6j3F%2B9ewOHOqUOTFNyvyVaWl&X-Amz-Signature=4f81f9024883d912af0bd43bf8747cbdba67d4bef04d80720c6e33643703cd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDZ5LHDP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSSB2HS3gocGiInQ5ulrgusVXrUgasCAYpDK%2Br9e3diwIhAKdhssLpqpH8TQqoL0ujjvQoOXJyPgzsj0yTeyjIh7JXKv8DCDYQABoMNjM3NDIzMTgzODA1IgzvckwfSz2tU0prchQq3APvzceHqrFV0Lunnru8XpFXBv%2BICtn2qVLov9OEQU9PN4wKxT2wXNQbO9MtkanYXvS%2BV9u7BXOXd5GjtG0H%2BjdKdBwJjSCwpt%2BobRhLOY5lEN08CM9O%2FkihDhYWbs0YrF5iSXfCh26gTiPCcyDFBhGMvJ02wZu5HirUwO016vDhWTIYnplZxaUMUzWmV56wlta99qmZIU8NIe%2BuHSxTLCQ4MYCFtHS1hqGNpJSlxe9oUy1UsUDPgR3GsI0PTbEo3OV8QWFHPa5GyzsJym6xFzvWPVXvNgkeLcgOQoMVp3oGEMc%2BqaRqyd%2FcSbEn7%2FS2Fd%2Fdcyx5VpwUBbGKEsFekJz3jQCC0otTJQ9jLyRjt3uyk6po1sNSqSj28oceQEg6rSA8Q2vQCg53gNEuDVKNk3xAhCwMulU%2FQc9u1m8CD9dSDgBf3kQtsc44agW8khuTIJIbz4V7igJ3dFPGjJMEdn%2BM6I%2BTxQu4CUsOq%2F%2BkzU%2BSIIeOE2H9lpqesUhWG5wjHjV7GJrdeblMIZHaNm5F0MT6RAyAjqR%2FpF91c8oUH%2BgJhfjM2rtkPrq92jT8Sfm192X4Lp7MJKYrXTvXgVYj8jrVKRvQWzDRx3YVrluO5zIDe0r3J1ap%2FCwf%2FMeofTCW6vPEBjqkAXwbBAiVu6tRbar%2FQcQ%2FosKJjiqlx2t1RUDI8DlSHrgOu4skIf%2FOfZt5WxJ%2F%2FYp7UA0bZMtI%2Fs1jWLf6XaQoUQGgGDHki%2BVQzjobuwfdFZqe2ulhWE%2Bf27QZLLu1MGU2ZD%2FJkd24bxKanCOwHpMQ1DA2L4EUd4ch1e6RqRMfOzV2n%2F%2B3OHHf8vvxGYgDf2bK9Xe2D%2BXahEziUhrZEl1OoirrCFcX&X-Amz-Signature=a0eb957d91a24b446f8fd563aeee9f52f9a6b4e4d0c28cd493109ec9f3444589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=2bfd8840cdbdaa66f4d1d362e922923f15a9e877f0f3b1fc486f5978c0d7a208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXDRZUP%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1qeLBSouMFXyvjEsHInLWfetr8ZRLTkV8Ntr0KJW6gAiBR1fiQ2IfVzI2kiZMVVvlk9fHRwQuD843X4aIzl9SYsir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMdZRTAEMrejD77uF%2FKtwD4oq0K0vbgOLJDtZa6dwT3byvSeHe0Qqdv5GkW3ohIvwexo4g9trcTcze5l0whGai%2F0je7owlN0uVX7HAgKEVcR4MbHRV3nO7xvY5gNYaah5sZ5J7sSIL4HsuNMzrpD2YpQfcheJ%2F%2BX6Q%2BJ%2B%2FYlo8LfPkQm6nqgICM6m0ViyS1PzHwE1TntZACYRgvwrLKI3S4p2bh0D%2Ff0pzcTYsxpx4x5jl%2FrlFwzDFi2Y%2B%2F1yvkUZ1UWrtnlQNl%2B1QbNyT%2BAHxjjZ3xNLQoELdCvFFQY42clcm1oBFGF78apJ7gmqQuOq3%2F7gaC2VtCuV1Pd2%2F0vot7%2FVfvIR64FecRaLyFLOsv3%2FQsFQfknZVTFjBeBV1pr%2B6XPdfx8yL4MdNmbFPmO09ZEyFmwKksHZAAcqQkZuZX89Nul6ch0KJr1PU6BBzLWNoEWnb4gasb71cEeFBJ7LWhXYXj3GZcR6WS8VWULSXsWgtua9mDFIDj%2Bs5pdBM3NrEoOoLZXlKm4HWqHr4FUZ7cdnwuUFPw3VZWVK3GMBw8CXkScyei6T20pZNHGYNNPFMj89%2Bm9a8mmZEeS4u2V1RPrfvq5S8LmvAD85I3BxBTH04z1zRM8mD8bKnZrp5TOyhHrPCbpxZffQRo3Mw9%2BnzxAY6pgGNlmuTCWr%2BoLVCwSgpCxjSTiU6VFmWnERRA9VX9CtUip5kUs7IR8AKo7HPa2b60TocwCUndWjUYlgfMrYg0B3xot7IeePCd7xMiGTu%2FrXc5Jz%2BjtsDWFcoxtjWHlOBlAxZBKETQ5tABALpT6%2FH0UztZnxP5QTwXqwKSupXiwb1L4UBLILe0%2BModjZ6YQf2lnReASD%2B%2B5GWGBDuWHNqiptrSAlCm31S&X-Amz-Signature=086dd98cf065fc49a7c0120aae8b84ce3ef4aca47de96f41f47c2eb637313ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=f00bbb8b9682776dcc309c9b3701ca6f2afc13e0e0bee7b2b1325a0bd9552114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=86386e543d79e9e17a68cf55e87c1f9975ed229378613ef0c2da68cde2ef526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=511c80944a4729e9f8fa8b3f05c2821695ed6a1e75eaa0956da8f25f403a71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=724e2cf4b84f543760f7e380eb2cd3f258d6087905402fefbda81c237ac8411c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=56e86c7d0c6468e6dabb4976d2bd86e866cf3dcc2e7edc1d2d6ccf4297f52b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=dfeea472e8bb160c5f4929d197db8ca54aec17f184d5dc7d45a01c85fd4feaa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=511c80944a4729e9f8fa8b3f05c2821695ed6a1e75eaa0956da8f25f403a71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=900237a1e133a183c3036f8937abf43e57b8a986a1b5586b7358b1a089d1964c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=d01473f1da1625e5bd8b744f9e35513ad6d14b7770190e9ab5089ef6ab6b7f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVHTRYMC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T210839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmhsh8tCJctORVPCjZtUh4%2BJARhzIekzQ55Fq8Byq3QQIhAJQX1AHfPDD4KIkMkzLa1%2Fzl%2BQVQ5rOvt%2BFj7IEAFUfaKv8DCDYQABoMNjM3NDIzMTgzODA1IgwloQuQRimZMHnfQBUq3AOMQ6u%2FgnE0GaOOiXtX70Z%2B0nOPssu0S2ld30TmFtc7UKyZ%2FurgGSJEcRivzL1zqnSp2bWquSHRnPuoR6nHtDLnfDTFcUrWFGftV0sVYHUP7sEuYnvB6OdXw6PUJ3A9nPZ0uglPwkVbghZah52gthWk0A1Yy%2BWvfzvITwssV8HU%2BfFZAgDlWmpBjtHvKvtIosl%2FI%2B8X3nSF%2BToletZZM9409Owfx%2FUwWTBF5HblSrQa7OHmBzS6zX3oj9IsvzZczug1qsIbozOAQiZxPsXQMRsxQSIyTviqkX0gZGpTo41SFJMd0Tr211okrBJULPECm3Xa7oDnaCX5Jcj11v9JdShFSoob9XQ%2FveLJ%2B8FSh%2F125bEU3WT6ECdwBoJRsFXK3SvWBVoE5nJ5Nq2gx8IA3A1RlQPIQwbSJLzQa2sZY4tW97sI%2BLWo0TwyYXiik%2BPirWGA4eVQaBnfJMxxXzumIkJbuAMl3hG57ENbUTHdxmPsuonU9Po8eic28yer5jdxIQyIuTgwAu25E1ilkbKEGp9rnXxGOwdg7HsyeWJlzgnUo0DzKURGwGCQg6HrDMahif4XZzdaYH2hL9U4n6r006UYalVofHKqpgF24Hk%2FTZHYNXawPSLbN4BUHNaFBjCp6%2FPEBjqkAcnigQCRnFSJ0pGVFJVn65C%2BAu56tkY6AEVwXjCApOvBl5QyaLJC8%2Fs9l9USvylI9sktSvuXfXmo5gyfADqLlgZt2JOh%2FWF1p1LtVNNp8Oknu%2BSnfCh6pKOW2Cn7PfnLgkc%2BleL6SQSUzVA8MjjLmhNxY8oLqgcaNbSJvLQn19aiP5GPdJ8x0XuTyQz3rmLaE2YDk1kmXK8NOOde4wY%2FHGxE2KTK&X-Amz-Signature=17778b87692ca5172b4304e3c18a58daa6762b1fd65bceb5cbcd9496ff6b4298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
