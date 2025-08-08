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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=05f6a292c3d11feef4a08188d0f44b0f94a6d13372d2374a5b246e5b18b40260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=bda120f299074298148f02176e4f5392bad7e6c9503b346abc56e8fb5144a730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=f80bb49f3c6d4ee1a64bdd43c70b764674acfcb353587d15062fc10fc9e1a455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=26a5a25be117871af379cda27529278349b5a6f1ce3bc66eadbb9edb9e464b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=ac5ced60682fc3f4454750b72427fcaec0b26a6a7f86da34210a5fa1cd8a784c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=3e4c6369cdf12bdbec1b2b8bf1820b375c3f225daf90f03eb5ff0ac7378e3a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=514e7d019a3cb29ecc839faa47fdd59420ee8c0d3d10ab07d1dac8276ba636ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=98144f404a35744971342f1ff676bebc3f98ada2f568157bf6120b288741ea37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=7af3109a721166597b52c6ee0c52d272b744cd4db0177de993200b117f27288f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=c5fc63cba5ce8898a173ae6f1c1cd81b20f874d5cdcb52ba7f7a1cddb01df02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E2JOHW4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDFtcu%2BNDof3sWkdtrgoS%2BFOGrt1OiGdJfXsrs1SwxjUAiEAyas4YgrKfyFMRaH9kyejEfGTe9ewgFZ3HPEKyuEzBUkqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJbXjq3HCRQJm98RhyrcA8NKtPN7Yj7LMRxqs18m0ivOgnKrD%2B7beWb8mzO%2BxwAaHdIgJX5B0uvIxBG7cDZZDXMnfF8Nv8%2B8u02Gkc86LptPF37bwI9%2B%2FcTILLtOjzJVFe2DwKKqFa3UFzLM7r0uE1OHkW9SvmaS%2BCGS2CR8Vniey%2FfQiACC%2BoBBsj1JQYM1dxKEi8vrEJyJLP68b03zYz1wO9WSvjEYM8JOFUkWgUettxXz4yinRo488NhtvJQHc%2BaV%2BhBkASs7LAlhHpZeKtMuRd0EX73w2URJ21GGaW3g%2BjXPcCJ9M2OmpXZMxIi3lcUc9NjLHrdA4z749T%2FmRG2wRGi4NbmcZwkcvO7fHqA%2B9CHih2Z3wBvX%2Bj8rPY%2BZgr7RJ9JZQgAPxHfsbJzapegj4jCwPhJoDULYi%2FgWTOtrqvsMFBG%2Fn%2BQmHg05BuQmPsnzanpJ%2FT%2BwroGHr9yU%2BmaUJBMSJEmZzKFSqzZ7uEfDqf0UTdgIigfS44xmiIbvloxY4zVx3lnBSQa%2Bl1T6D6w554URNFcrgvs8Brn4vsvsVCCVEaRLVvRdVl95HEl%2FnHMraUJbZrb5mGh5M48HnDRIrpbMkMRES2Hbq48YBy68%2F40XVTuRffmXsjFwZlvMB0ebCIbGS3kcMQQWMO%2Fb18QGOqUBLeQMkMIcHM%2BgvgURECjXRvOsikCV0O3c8EgjMLMBsCMGzDQFF7jIdoxg7k6FoUB7IRpCsNlI%2F9A9Kx8%2FMoFJbo9ORKPhA%2BCGwYB8SIFBoZ4wNsCgCEaIWhwepBPhzVtbiZK84SIPCeNfBsMdCXc8184TUXgXXB5S9ETK5h8MMsc9XI2CGZc%2Fg10RUzG7wchW5lQtvDbwNXDXUcZeo1rzkELhkkog&X-Amz-Signature=93d93490c6787414e1176f19f62ded6973cc89066eceba6b53255da85799da62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGSC2XLG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCcrSqj3rRvaV1YaaaqCwok2DqqWwbnYJCMEPPcwUqZewIgS%2BkfGYwIWgKN%2B8%2FGRkG2sTnWgWLTN961PjC0B1aN6N4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYD5eb2EftzNdLi2yrcAzLCeqRGo9se5LD7qlUvTsAuDAwBdN1qa0oFQztgJSxpB7BJZf4aiAwUJHyTjysVSU3yQaEFuaqrmn5d7XBhRIDzGvXesMUV1ckzZDIVjqEpHBjQOycngz%2BVfqWjI3twhw39IdaWeo%2B3eLRy%2FqQ%2B6TwhmVTJyUIr%2For9UPpmXXX%2FBCZOXCMBTrP8xK6gFZ23%2Bpd5peADf79JNXLB6%2B0JfxTKiz3xy37nFG%2BIBB6iiNRZumU6l8os8LdvzjPXbeCNGDsP0Xa800u6c4xc4LQMd0qggdj5ITddYOHYMSHoiHq2N300pj033SCJRxoOBOV5YtS3hki6lmnDmbt59FqzdSQfEUh1bRfKU2Kkq6i5sU8eAu7Abw0XsBM3ha2sYQz75dWierLFU3kw%2FDqn4T3YTN5IVYUd1jEiCyVw0UXf1NUiTWMgtz7hicfWcdshOTmrQaEvsZhZFUIYkyBA2GLCG71FzZPvWsTK1ne1yn%2BGsSESkytJtfNLFNVjmVej3dIHGW0cMaj1pKhfS6VYifu4h6EvUV%2F0%2BTkpW5uhdg85hz9U1uNHuxyj%2Bf7jJuB6JF3z06tRs9Gnc0oJNHu0t8gaUYg53A7BFcoCqeuqaVMLowcGmYlQYrTR0dF8F5KZMM%2Fb18QGOqUBEyUJHPLRxJ24fhN3N9uiJQ8Y%2FRCdMvrrVNoz6%2F7H2htymfY8VO6FTp72Cu%2BKVZKAw40MfOjb3QdppCsPsoHr4xGfsydrUA9ylik%2BCrkHtZaA96Ve3fQ8x1caXC6xm%2F9JVBsXUrRdPycponlyGvyVekcHnJuNvjpV2BegoYYUXKp6m8KlcHh%2BgBvPD4mi4D6jGtnQztNWhK0XB1ZHC8803Za8X4fR&X-Amz-Signature=67f6e23b0dd8e6eac39d4a61641c9053761e418476e9686bfa635bf581fd39d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MWTIUM2%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCO7lhsIm3uscsCYK5KeanU8InMZzyQUWN6ss3pxKACXAIgWpkiDQsJ9N8RN93J1CtAMJXSA77egOIbk5k6FmJRdfEqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFMCToDY1gxIZv87UyrcA2GqFrRaFpVjMUiVW43VWICciYEBD7XLxkFAWqcgAiTtO7f2d58InS07lK%2Fy3UCMWgZIiMYCXJUIC16cjdbxd0NfsuIiVTUyJ5%2FKdlXiS3m4kIn3ZUgOO%2Baqt%2BX6GV%2FL7dkpVCiQOsJlPAYoFVn8oeDwnnHFB9Poxyra0g3y8ki%2FbfdC1sXhYd9ABXhSH07SVvWxBj6l6k5gaiF84zkyqQ%2FLg1jCG3ZmPfsPLz7q%2F8lNu0LXvt%2BkrLOAiyXXJIgoe8XvL%2FGFoYS5BPS9wp1UZjmIUE4pZYnuZ0rx4BSIAFiGSdvoUyv3SA6F7%2Fa2aDEL8Ajm6YpkGQui1yp4ABnD6%2BzfRoRGrtVkodTevifHlYNs20N6dUpSAICswXTReCBeXMqcFvhSf8H2awcOIxXPhTXgudHmkEKdyDsuUOOFMrGqFgFFe51eAzI8FyZVzAoCUI3AMtd2aAEidcaU2gJ2g2ftBUNQ%2FrSrRPmhNs5Gja5KnafhU7C6sxMmiapjskXFp3KBjahB6gASR8WdDzTu7IpwdTGBX09%2BL0sMUqPPqKa3oJy9nsnharvQevLbSpRPVYF2yeTrB5p89sIwO75d2l0Xd%2FyD73%2FViIeANv6hXodiiqEAGPzXxKYOCuA%2FMJrb18QGOqUBK341Czh6pekkKxP7U7nzUSyzsr7bpNdlbfp%2F3UN5kzN8jX2UNCojaZDB37tcLnPFmIs0jY%2FDWN7m2gcXIrK6%2FD9hzIt0%2F0Sn9f4Qs78Dw86O10MuiWowl0XHrPyoCmosee30tR%2F482PfCMLJNSpxsCsMQ4cji03NNW4JsvBfD0fDPUJqBwaX9D%2B4YC%2FUNbslE%2FeYbVdIau5VV3dEcpH%2FKEd2xpRn&X-Amz-Signature=09b8d673f42bdbb106991034fad1cdb6a57230306c405b72ed6c7a037f36dd4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=639f997691b8a06cdb27e8e4054bc388898130dff8b6af8bd162fc836125ae3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUHTDGSG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDRh%2BeOnmyfM0PTjkfhUpZU4yUQladGU0NwKsx8DqJCCQIhALbJoQtQArIGGQpLIrQ7I%2BbEiLjzFf03psT9mTMn8qf0KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0CuAamuwrMM8VnVUq3APel4Q53BhKHsfo1ydDXExM0PjHlOFFW32W12M0PQOmC5Eh%2BOdk2SjkiCgCfeVGClid8hqdH0WgvUoVgefhM53kiEWfyv%2FT1tCXP7GojsIUDcSR%2BkZI60H3Q4Z0BYWy1Dv9REm%2BR1kKFCIkewyzItOEsTYAVlt%2BB0DwXRDvwVMkyi%2FsoAsJxBDWFEa5904gd3IZs2uMppmLVJuNCROL23ahQV7Oi6yV7CkYnvOEebCuz3NfpcavpLZDMwm4BUd5lt4hzkGpPzh%2BizroMjyqrr3%2FHGDRE28AEHTAT5aPM1yN5QGEj%2Bn%2BJoJ%2F16%2FExMOvm75%2BbRY1%2BABRXD3FWeyW8NXsWWVkExki%2F4mrMw%2B9q0U0nhMXxD9OAigZnJ3S%2FxUZk6Q7Vyvh1mquiarPmuvoZuTJoYwLdYlN%2BWvfZaHd5P2aSmlj%2Fr5%2BHk84JNwtI6bmTNjJpRfH5XKqsp77OgFjWJe24JfrRf3d5bAHsVEhaj49T%2F8KG04eHph4otLkf3kvpqkbfGh00dMptxHNE2qXdySnI3uQA56hBxXk1UVgvHvo0NRH7zLw9gUpl%2FoL0cY%2FQ9CodHr543XsAzsOqae4%2FLlI83dFNZx7c6iolj5539x50vTnDcCfWn3Sk11jajD12tfEBjqkAXT5WdNFGnbgaKt9bwpm5U8pLWYwA3JTgbTYMLNKgVn0rkFmHG1fyql82MEJ48FjI%2FvQC4PI5cdgd0RoVKHmhAA3XGnzygwJ%2BWGCfhxZ19BiFEX0SOBFQpnC3j2Ndm1dfv21tCEKZYA3Cm4PBcoAoQ%2BnBGOungdS8jQXyzUCM7uTui14usjPXwwqfBBHw4ouqgFWZ9QKWfZBY9SxgJZPCvx9ywjl&X-Amz-Signature=c83cd10d2b86a1ce904554c4544e0db0d065615c2c6791bc38d43d4a2f1e4b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=cfbeacc6e92863d003b0791c33c1b002552a8866632184d8c8fa7e3150c4f48b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645FCPIH7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFkC2bE8RubqzqB2CXlxVZW46K2flJrNc1Zky%2BGkkH%2BMAiBfZlXNoj5t6ZWklewH8gOVW9XGWX1Zdk22hZQVV%2B9C4yqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ITq3J0LZd%2Bpi6PGKtwDhOXEneVjYujM31v29YMwgy2cmbyrNc8G%2Bpk087M7FA32L4nfgkwPyLGWbuWjgQ8PH1%2FcS8lCasxy%2FD%2BMOkmvIulOwCAK06YOarby8V8ZoqjBo8phEVwg2gu7OCT4mJhLNvMPIZW1JU978rij8CFG8YLwYlGcWvPQ%2BiOPnIjiGP97J1i0%2BbHyFD6P7P5QkTo9xOl1Zxa9UAGBYImIbBMSfrD2aaW%2B1g3rmoVPeT8dcn4%2FIfCZso%2FWS7NxLd4BJTeNmjTgDfu%2BnWFPbBPuvIH0qI3%2F93vYI3KAFY0WHfqrIn0Kx1k8D7%2B3XeftV1AFyuYUcomTgNC16NHRfljJlvZY2RXsQthWm6zt9YWHZ0218rtNjlgwzyocPe7rZq6zJ%2BjgbcnW8CH8Udju8fTlqgFeuZKrGX2iCHDIt9p1EA0U8l7k9HUb2vmMghIiIVVcJJYfxFCTlR3VZOGvzmtAWxEqyxtcMtXYTs8K%2FLouORuYUrHjkqWiR157pEBkBdwYnI32KdsP8H4ywWaAgDXb05iXJDXQheoIKNknmqE2glnRoVftanL7MuPyoNAtfKCCTuyOZ4DIn8fwrlUzYUNxQMZ1FsyZI0DINEg%2BHDZeBrsVrnuelOVm6QFJEGUy5fcw%2FtrXxAY6pgH%2B3tG475TyRfsA3t9HXmdL4GVYuTz%2BFKQMwrcRqVJSfA3jCuz12TjYIVmmPMywhalsHaSS0d%2F%2BSNR6S6xMfU3MJbnXokUWC%2BPbKaSnZH3SLC8lq4sp5Sov%2BeqwfZlHaXD2pU%2B3t42dYNC5gX6qCXNrIfIrmoJTu%2F6GqC7Qb9n0ijvsvKMW0jKSQ1uHsh0pkQliEpN7UswHmV%2Byyn%2B17aHeMm949Cdt&X-Amz-Signature=681cae7f7514b9ff91f1380ce438a51fa24ed890221d898e03c75ea0dfb91a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=5bbfa193f59561b3ef409d524a549208531a5d8c48049ad63a5e88876ba99fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AJINXH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDeEo02BMRILPvyRJoSAlnGs7grwoG8lieTxoNlaZVnNgIgaYv%2B21p0NMWtJRdUV1%2BCPIFrbwAm3AvrRwzF%2BpWwDwUqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDML3bzoaSNPt4nblwyrcAz6IUtZK4eyEbWtnzA1rA73xMQ9GVtaLIdiBZRwijuNXi%2FLjp4lgBMtFwvMOEwpiKd5DRTULZxEYzpF2N72vrE7ofsDA7D0Q9t5JedZKIlaq3RQwPk7YARWDI4Fz2NQIt%2F1WVvBjMQrhc34mq9q%2FUYiEIf%2BGcl2%2BqayUwFY0quJlNsOIboPHyWKn1etsNr4moAjyQbp42oUM1WyMqAN9zrmQnEX%2B2HyPe%2FXbwKVRAz0X7fTO06nL1T0rcomcuNyC25z66VjVXUu84sAJAqovn%2BlvtJ1u0hrwoV1kdFa1D%2BugnL9%2F6nFDZRv%2F1YEsFtoTKhS6OejyCZ0RrrmJN5abVoxWwzJ9yaltewtSpXIfeTlQwlAk5aiRPyMNmAQZF7BppVyfVUJ62wXrAgxfo7f9HD3CwtXVn2a5QAtjMHP0N4cfgDaw8pcCPzkEXMhHtJnT9gfy9or8U5yYO1GvSFAW5QG6RU3avJtcoULC0fWK0a1T94dfKBNokZuQaI8fb%2BgTr%2FxGHTH6rRap4i07X%2FR3%2BrjphWoojdUIAJ49go71at9AjiyCfuE3TQSxfCQ9Xww%2B0bFN%2F1nFnZLy8KrfPKGXDfWPbOz5qXI%2FLSWbhx0oUH7JCvAUNEm1%2FfGxIn01MKLb18QGOqUB8fPiKesmTQKpU9gdLyRNyGE%2BqYSPCO9QxocyjprqNMA%2FoC8ETilpK8i2CSrFs16BVDeXdvYaSVZAJDbqYay%2Fecwuu%2FpEL5dMmBHydPj9UbPAanEMJGqAVnb4%2FHgR7E653%2FvBCh1tL40LQvBVv4RjZpd2K8w4tW6dwCi1JSbV9Gb9P3%2Bx7wHpfcQq1H%2B0I8qrx9Y7y1bdlfXB4OhkC0%2BiuHane%2B9b&X-Amz-Signature=14e80dcb3bdbad3df8cd4e5d7855db0551d120ea010a09b9156738b01e3b6e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=80240c79760faffc2c01401010315131b61990d225d9102075fc3a422875e3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZTXEG6U%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIEZcEPISlH6DOvYwI8OOvMWT02XpoIZeMcLUs56VYg7pAiEA9DhxADFcsG4gZ5QfCC7QpaiI6N06hboQiubVS%2B9cv7QqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnp%2FDdYfue9PiMoNyrcA0Srhe1LqR1dMJIYNB2oRjlRIvNmbOAUBpAk7nG9X%2BCBvdOBGBmU4cx2sSD5gQixqzjwUV6qKOoXsO9cg1wxkb%2F4oJ4BVelxEyi%2FzXyNaLI5LXSbCgLGV39ihKqSTsw0dq%2FjpzdDy6JxBCj2OipbLPeBRdJdVLv%2Fom8fDRjwhEeTOW7CKowfnGqVAncW18Rii4TVev3vF2OSDOcocRs47KacyD0xHZIaHxJkUDaYJArJbDlntLrvSy%2FAOESJxTHloUs0bQmOdjIYdPOossaUTqUuzT3XusCQdGug2%2F6yr154eto46HLWSDhxqN5FxAq6Kt5PHTp0S%2Bt6XMLsvTRCVue0XgWLksGiCbSpTfJh%2BSpdC7Wlyq5uVuPdw%2BBjXSrtTPrHA9ITFBeK54yewsLREXeMyWCJGU6tjg1rExyzYgQH4iazMqfGKuAHxTwselevyLZc5ZhmB2cY43A%2FISjYw%2Fc9mF0mQHUY9WIcF%2BA9sAjkLszQborIGri3t%2FEoF%2F4bNqfOmDTRSrlbUuwA%2BSqF8alAaOPlqhn7WlXxEm0DnY6nw1MZXxAPCBT%2B76oBrt%2BA8RXr0ZKgALB%2BBlAxxeozbqGefa%2BHZvUCvpkj1DpD9GT0Z%2BnBccnlnFnOKimDMJHb18QGOqUBqWSRr%2B9RYG2%2B7vAWDb6uHyamh9V44LnrCPrYWX0yARgimc%2FNXYmmQbPfA3KQgE2yxM8yIhOkyuuhYKe04LKTOJYVcJFeX%2F34OjWbxc%2Fj5oNPpL6AScLHvUOIXQPHE9C2BPyg69%2BrWr4qD8IuoH3XfYBSOAHmdJ73yOlR%2FBXf8%2FY1Q%2Fg%2BlWfm5zb290znITKiwFwbTfYeCnQzb1KA1HKDc9nqj92d&X-Amz-Signature=c8efd6106cfdf058eed71c49b008f0028411552d22ec7eb111342cdbf3373fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH5KRCTJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC8AfQtxKAfBWuzWqtRHOjzUh2B1uF6wQ3ARcOmZLp7WwIgCH68RQuX2Ue0i6SjNhsnlftJt7Fe50VWarST6btXtHwqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkl8cMNyaScfJ%2BVkCrcA4kESfHt9sWYqANcK0fKSohOGqOAQbK7lbl3b%2FaDwpB6mxAi82dvF5yzgx5SPf3W7qzytyi%2Fg3SINhkz8GkRIuYcNtiRRdVAPq0aDj7k5JSgf3CU08OT12%2BGWWITMtxtCF%2BCgx%2FMiZ4bTKWedPQnwyO9%2FLpwpBv7bjkdl0Oqfx8PzYjpp%2F3tO0ta40VbR3Cig0wH5s%2BwAOxPFmLwLxok7XxXq2%2Fb2LXsNDzWbR9RjSW23d7pxk0%2FARA5zetg8H0P%2BdUc1chIxcabXtwFFis7KNwpocX046rrq1BDBuFAHfU6xNXFLsxeX5fkViHBaH7LnvOLTyAVJl%2BOqHZtS6ZWobvUCRt0fO1rqZurTlniZxfDr%2BGB%2BT1yT%2FhIdxt8RjvKxikFQ%2Bpcd7uG%2BTvldJ%2FXdyITVguYPXBlsPsOuqWwSETIUYNf0w6sF7Mayn1sxWutpM9%2FWC4WX4uXfIgUoV5uHfgCGkA2clUfA%2B2KvC3cKLmynNHzKL9Qp15CMq1zkznyc6m7FapCdTP69AmZdeGvWlWNS7d%2BJK0eqVFLlLbgxY6MSkt6fGRzUdhgrVO9KDgkE72LkS0nKkrB1x7jAQEz7XRdbhhbAG0Gtn6A5LotGlEFoq%2FpBMcC%2B8JXIDdXMIHb18QGOqUBRDrdNTlqpGu8%2F6hFvaFcRphZrOjGjs%2FpVPcns4KXO9MelSVL1ObB8Q5DuegwvQdQeW8oE4u5EkLwcaAw%2BWjrxwk4xLtXvjfG2seJgrd8%2FApyfSywaXQKW9lk4b%2BIW628Wv4OlysP7BZzyOQS4jiwfVYl8IrtxwCxvX0DD3epPxRQ2%2FmageVZQEI5kxZFGDslhZMKZ8%2B6oSkygZ6SUauxgRwfTLof&X-Amz-Signature=da151bf7d3e3525e3bed93ba89435efeebafd7b389a8f81ad621a5443fbd5959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZSIO7YG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIDho1coJgTGEyvnr9lV6vaAmRxBFk14t58c4sjH%2FT6sGAiA1VsoDLite0dFzlcL5Dk1J7MI47wAs76hnVjiV%2B8GuniqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwcjL3OsReLEVom%2B0KtwDSKgy%2Fu18PNd9aBhlulBgYB86MXT0o%2Ft6o8M%2FjMmxLodcaj3tCJ8%2BTVPttTJxBi1N35hfF4Jv0I02jY9Zv5qfQmkt3TovCUFfxBRleYIxHtHMkS3JMJmFvkn42WkUANSWjhLZwkKFMg0jTqLE4jVAKoqiL5RMkKYH2T%2FveqU8utLA4YviZqz5OmzjBrFdcyNNS3sI2XvZgF%2BvfoKra38j94JyWdzcBe9%2BOVAE5r28ju8OJ2k%2BsVUsf2MN02M%2FVOq1eUuPnUSapbjhb%2Bi8eAL7ksTGkt9dd4sPvQYhU7Q1MZosRdC73khMhCfO9%2BW%2Fla5JtpQMAYqD5YE5Mg4i9BB1PlV3KMT3LN12e5kVy7DCq8zP6SO%2FKtcX%2BvUwYhyNIy2J3Kc24x0FXu1x9BfGtniZ0ZtjlJzP6OyJW7U28A%2B3dk4TDNQ0HnAH4L%2B%2BDJdjARipFOxJB%2BqnN4Gq9xHCmbxfXFp2ACqh3IqHqujI2qQMkXJ4k%2FMzU%2FHQ7k%2BiwFt05uOvXAB9HZsQP%2FxiwVJkJrNYdl%2Fic%2Fi7hWeSVYoLGKuc%2BD%2BTZTiTYYJAOH9W9QxSHq3P76w4qtbbnfB1sLmFUQozbIa6a7D36IpcJEbITLqdxjVcmOBwWSUxoSPn6qcw59rXxAY6pgF2Ismk57NEWOtRt8S3PG%2FLBbcIBrvjmIFptUbAKInfirVr6sp8j0b34GIH49UnuZYKQDPrs1XEzKg0co%2BK0zF8mNdKizrjTf9iJx9bP9aRWL%2FWG%2B0hRg3SX%2BB6VP5pmsXVWuVw%2Fqr6rtK0juEakTe%2F0vCw1OEHd%2BXA76q1Ri2H3xUBsYS8zYsKYIUqZZYkznDF6BTw6v29GnUKkEw4YLTBsKLJ6N8a&X-Amz-Signature=21c75560fb25cfb267dadce7820b00fd57d5057e458625eb0dc0be18711e658c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZLXP7O7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIELEAB%2Fyoa9HDlakI8oOPftb%2Ff%2F5msdJsUabRZqEwAHqAiEAgs85e5ygCrsC%2FSKMEatv%2FsnNGAUcVr1%2B4p8KG1owQdMqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAIIJZxgJdnWHLRXDircA4B86qUh0xOMdPWPkS9kw8ma9wM2j4qiZRzsL4qQEVjZcgSJv3YiOUlnHaxBF6WOdN8T2VRZ2DDHryvu7SmxTYR6HbARq3g6KirDmycFgLDRNJG3omNObE3m6nQkyvw5wBahGk8HWW8oYn7JTu5mZz6JOp%2BieMYB4uXe5BBpERXg6kAj4MXkEKH%2BXgWrdYF0qgzvMoOddLgUb1F4lQNkhYZJFpI7%2F3dwCxGVF0WnT65uEQRLYSxyywTbOx1YTLUgMLznkZIhfd1u6ErIA%2FUK0XT39NASAw9PZqRvyRd4IJJRAEQiqOd%2FEemJjGDNaIhS6sN1Lv%2FrzwU0X3NrI3JAz0Xu7v%2FJrP%2BDm4278BkTAsnHHQeG8p3p5mdv6H37dbkeKazQLe5CGnQ%2FHJCzR0wy500j8U7sPhPN7m8VMTjRBbeAWERoyh7EkTmJADO1QZGUy1d8JV8s83pnDQiWKOCDKhdGuMw2hRwy4PdrjurhQpQtXjXAbOwRPFZXWA7Ku9P0NYvLpDFoKhDJSTK9OBSeHHTc3HnbZ119biXA0VXOYSf8%2FOvX1xaePAjt5cGtva2M2u9GcSOYTKi84X8OikxPNOSEvjKP7gsYaSrB2AnS0zxk3tH%2FAQmPlG06O4sTMOza18QGOqUBTFkXENP5%2BzlkBlE4kzab7D4MPYl0OHmasbZRpaN7KYcwFBP3mJR70Zouwa3RKgMSNJ5dHFEK5fAJKRqnMZ7YFdmiwz75kkj9vaPQ6IXleasxS2yxB%2B%2FlUJczoeI0CNbLUx9Pams0MOQNiZxHI9KlAapKMfqWve83uypGcvDPZkmxRr6cDWYRA5XGEHgYPN6GRvUulxgV7RxH%2BC8hX550FS4yhJkK&X-Amz-Signature=f43cb17af92d06eb81e10ca61d91d7cafc5260485e8581db34702781901e2482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CISRVU3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCCZww%2FVxr3fbFytd0UTrCkcvNSCjTNEBph1ZDEgrd4XQIhAKPV94SEfFQWpf9dd2%2BuinLH4%2BZbVVo4uVkecM4OwY%2BFKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy0DpvwVCLTrcmctsIq3AMjy7YgM7PnuXDfNLPmyNIPx3qdO3BY6fofzdlbaZgo4rLubcibc6xbJY1VTdO4%2B9rPP%2FgQfhytfsGRRwiTM0MuRJoHqG1337ZJIA2cmp7FHQN1mOscGX1JVBNiKB7vHET%2B2du6Za2d80augN8M3hU5NLGTvmmKQ6JXAdPf%2F3%2BdGNWsYWeVlHTlyJsQ0uYKQslRevMXh6n3eIqwzcBx9DuXHWnb8IIBsThFv9VAhpeYneKwXPW2tGW5rI3fYwoWjg2kNT%2FCpovsMD2TXGu%2FJ71gkiwQFdoCdx8psG1C5sNMjXlmZwYpSfiuClLtPdXxRGVC1YYMpSv7psjE7ylfbhWBWGs8You1RGBEd%2B%2BZ3CspYdpojFwtSg6YdYrB45JLjn1tK44BpIqwVpSvlV7R4x%2BzdvHLrbCBp2D55VJhKvpn4%2BUJY9PaeMuxjfjA9oizY%2Bx6wUrYl0HHaKeJMisP1C3RlSgwafGt70O2rwYFCZy5mfPxVl342wTZGryzQTLJg95OqlxDreBWCJKmyUNQGPOApuxMM%2BnfP1MXqJz7DdR%2FB%2Fc4b8vL4sHVlSOL%2FPOwFI4dFfbI%2BjKPELeI%2BRdI6i3J9jR4sPTkxVVkAILkPJUjCQS1MoUIrQ2tOphnHDCr29fEBjqkAe%2FSBdLQakPp0zhW0vKU87F%2BuIAdto0I4kdghmYgnvdt9zY3nwlkBMQPrPq9lpYm8d4EeyuWaDC%2BoPW5lPykwJlNwdUUpp6ezhhZ%2FWl%2FyYGlzQnBdSzsysjWKJLBBgeUO4TeVsnvBFU6wW2E%2FHgSO3X4bEl7A9APdHZfLkLZ7LL%2Bw2lJnA9HNy%2FrLNaGWYjUIH1Am%2FMB8dSOgMO1rshhG0%2F53pw2&X-Amz-Signature=a748988d36bf6881e308ba1729514ab21c2b272baf009ec2e14ef44096936fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=b2164417a1bf76b7492b2b46c0242e286c18bb2c891413d9bc0055911b1dc9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HD2SWIJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCA7Jf72PKzUPYoGtN3bFnXoETIc4UYlcPYo0UQovEWUwIgCKaT1%2FVkRt8leUccTB2Z1oqtEKiUYLG7KjTcVqycOogqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAlveeo0Erevq9bCrcA2MoCRlD1e3yGfz9W7S8RaH8pOC1erx6clHNkJtGjRnQ1rimYXDa95h3%2FL8FqtsryC1i9VLuvwTeFHlvTM6Gm%2F7CSMM3qQJyWa33q0W%2Fw6EwNqkKZtQDcelWSv5EJgt08Ps1%2FkvRKnEC1UGLjsrwo%2FD4FO87o9bAT5uhRsT4EKa2CWiIu6uI60gWi2my55AHnV2NGN9pf86Ry5%2BkfXNZs4A8l8mjdaH2AOoDefkXCsOKfw5dQM4eBL2KMW2wXTGyrPCfBmP3NR2RKNBtaACnzrDtVafJHY2GbtjREv6CYRtr2zA6Zo%2FxnRPiD1z6nDuSAWgGR8VgZP5LiK8k1Fbk%2Foler54Ktap6rW29Yk2RbdAWbXtHhwn74TMubEtMk8GFcGobkodtvszneSe03fkt1GdsbYJo8%2FuvCe4ByqWyQtjimkmfPEto%2BARiG4N8l3e2cZPJ9q7sftrDibEdwbVtKo43jBxVnJFSzhe9Meb2MXpkeJoINaED%2BY7hToMvu1xNvmlTql5dsf5aiZiZCwfm2gaZuz%2FxBoAFN1hVhB4ZHk9ohmNowgTkLP%2FyzFP9uRIhanaIrcoyb8tw8cnc1S95JPUwl7f08E9HKLrasM2A7EJbjCT7PKn1hp%2B9TTtQMP%2Fa18QGOqUBBb1Lq1ViGtciWBYpTIi%2F%2BtGqVkfU4bpXsrL42ZIcy1KRpau4NxEyOd5aXym6PnI2AQixpqVabPp7WfUIHi3DIzbHFgBNRWdyCksKQNs%2BTXMvI3BGnKdzvSwYh6Mm2YU3EKPU72x4nE3bwMvM2zWTQtk8R5XQR4HT6bODpsFaAWEu6Fw90%2FTgzbwf02N1lqfqy%2B03oYRaSxm1v%2Bj7UbXMzKKAQI1%2B&X-Amz-Signature=fa132e528311eaf099b08d54a324d908015fff701898de950b1dc6fea863847f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=bac7783106560adb0cf7b32e4a579bdba3363458a21209e46a219728362cc6b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=878d6bb7d0bc9d31c3fe9be4065bfa7145097efc9ed10cec2d70856aaab18669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=8e949f401c3e5707e321dc5777f4ad73ce31421545e59dfd14318f316835da85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=251b227cf1d7ba15b12f354e7451a7b5b07782eb3e907e91d1c2fcbd1eafc706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=d9b21af03d3dbf288f40d4ccc44a1b2b736160bd429e5610e1f49c390aca61df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=93f433b2a08c4db4b707f3e647dda8afeac14f45d6f9ec091333f42139c96578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=8e949f401c3e5707e321dc5777f4ad73ce31421545e59dfd14318f316835da85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=6a6e26c2e85b52703042e4a299847a6ae1db3f119d4e3e2e1e9afc7407fb594e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=ae9b0b7e0bc300e10614e59ee6a89fd9e10d44dec7666a5dfc694fc043832bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DVSMEY%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDlYflC4v3eIG5F7120zdQ0z4XdL7m0xZ2%2Fp0UdbcrQAwIgGsRtOZMmSrbBUNmee1e5e4g%2F2R0erMkSZ3b9GrucF%2B4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2jYBvKYmD6nJJYMyrcA5rBjOlOnSpYfDF6RlV7Mvlv2jWgqUuFq0buAdN6N%2FKOPF7IosoYs70yuIpRNjYwvKQgzKePHb845AdUNco8k9b1NhRIpf6jENlM%2Fr3fDDp7OVLFZ4oOF3bDQWmpPy1whE7lxmTpF%2Fc5Py4YfCktuzFay2R03TiJtIlBjjvIrNuXTB3dlwU0d02jKBLwbz35FJd2mC263%2Fr0QaP4HwcZj2X9FM1KuQsEGq6I9TL0CJictmcsfEzRM3YygBhIcW1i4rfji3XN3rV5AdrnCIFNQo3j8CtqqWkR%2BYZefGj411BizcLeSnDqwq7dP62Czs5eZdP6WA5fwykLWGEJE%2FpiPocT%2FjHycpbA674M3xQZlrwPh6Ie7X2ucmC7InwL6JoP%2F4YnNvnmwy8zNnZtt%2BMtcpDWyBOQAnYNkSyw6it0uCFMa350TDrwcy1i4RvtgHYiwV3JC7aW7yzUGwKWKyR0nkyJZdqAuL0RwFuB4NL61SOy4UGuVKZAKucEhGdxyYaCR6Un7RmEcs5%2FHGNFRV4AIA%2BsxSRyweWxk4yACgeEW%2Fe9GchB%2BY5wVDQG%2BGUfzrkl1yN7LuKTV1WKeYZPB%2FYvtFq6zAdKrjTGBkRJO6Uz%2FQ%2FXWRnqFYYQfyRh5vnXMPXa18QGOqUBDbMV0q61vEQ9vnip5wmdqRgkYkQxkUOfFsBrw6oI0lHl%2B1bGr78%2F2Ok5x1eQq7sBThRmg8ZYcjLs%2FHN2pneDyCtE%2FvqYRp6uL%2BlnXJzYHd8H5m4Mg8%2BkBGetIfyYSStTh3lFPKwAMW9Xktkido66fd3lPFCsJH71mf%2B1KyagcGaNtc2Tm5hwHX9FlpPErfXXuAypJMs3ofl9I2fRRbnX7ORErp94&X-Amz-Signature=656ebc36d527f6cac250b59ecd5f88c9cf1b574687136d7e6407db69d29371dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
