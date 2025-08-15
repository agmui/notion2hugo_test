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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=6a9ed8e3f9c648160640ab5357b7e7a720edc13423eea995362afcf19ce194e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=46792588b881d1d9c4183a1cc6cef6de7bcbb14b5d654b7d155d2b7d9c6e9296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=2e8ffe41d530ab05fcd0ec2bb8abf67bf01788d242126a20378b2fe39b0bf518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=8c49c891c843b1d0ce89b02c9cdf6a7e7afa617884cfc1f7bb6b8854b1ddd061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=cfb2cb331010a66cbb7fcdd7d8f08524690657623e7743d46c203e3d388ff5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=1bbce9d6098f071da5b05cc9fd0036bc6a54c696f1b327bfe641f04f48fe0a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=dd9ed880ae3d21dde4292f6c792d976fd9af3ab3ffb16009998de64058869a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=a9111253da79499107a3d169f4b824e90bc87c4565453377f1b9e9b9199edc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=dc2d38f4efd9ce8c8bc3ca54ca0636dd192b428d36c5457a16ec3551eb00e34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=89cb3765bc8e9d4106fb7210f475b22d6942025c262e55127492a295c0394ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UEJ3NQH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCQCLdydGSr6VxsZIp2rF3cGM1ebIlLV0fKV93AGoxRfgIgMPt9U7YtnGfcSymkiEDYTeFMz8HhrEYo6F7WByh0JDYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHURrHlkJZWzrOTlkSrcA744M86rZ%2FG0VYJuGspqXw9OAbBzL1OacVDf7AN2G4dI3aSHulpx3zOETnwK3uAsVrKPeJTvppm2uJqrend8eefCvGSthkFQsSDUrOFWoG50qdexHDxON5ByFtjmxO5U1MMmEMtqoepv2mE0Q3UZVx00apvwad1g9ftGeY9C7TpToM0K7n9mSB6CczxQvkwuE8mSau6tlgVjcDXh1vwADfK8GnIerOAKrmcKhYBxF5YkA6YhjECegvIaupRsNh90Ve5XyAbytVDXeG6PNsYXmHmS7Vj424M%2FMJDMNoId1AHyDNArn5Svj2%2FiKWf9PXCRWs8NncXHS9gl6m%2BNlffq57k4EM3AQE47et3qN2lGl%2FUSuOZj18NVRT%2B4OWDP4Gh%2BGzAoNWpFgOof7ct0xVfpJqJKEJzuJZConcJkFypLQcIYiEFdk5%2BMBQSuaTE28s5NdZuINBseMvzRAuMoIQJOeHigKq%2B0wmPhNmYovuahN7kt7pQ2Yd0KTewWIIRI7rSpHcamUGWEaE6RDcpfUssCEkClhjDWtLywpEa%2BcemjUINB7Qhw4CKfzIVsQbwN6DF%2FJPdsPpVCLkXCagN2hnBihU27j72pKIlw8zwJTLndYaSRMCjP5ekk1CCOJG5fMKCj%2BsQGOqUBJnatsWIjOUJ9EuzTEE8ZOMQYwCeEluFeSi9%2B1ZtE1tmuzfqWGDjpOe0m5M9ao%2BRPcJPGVMBoMr2WeZW5Yu2Ir2V0z%2BVOo6hcvHfEnVYt7fh00v0fvnSiXvDXJJ5kxxZ5DsgXI7bQxDgsFVJgKTW0H4n5M5DqPGNOO4eu%2FYQjrBrFjE04%2BHBEvFykOTqJgYhWUZzejIuzv4TKss%2B4T%2B8GyBoR4LQY&X-Amz-Signature=b4e2e713d0a25d3b299f3792394161afa66af0f91e204d0849c8f25ee89f2d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JDDZAK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCFiMDGiZR65ySNzUKvMRGR386Oj486uDjVc7Wigs5sqwIgIjrznRqO7eebxO5jp38oVSEGcQ1NEc99LsmsKlE2o0Aq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLJbKsCURC5AwsqUDyrcA7FlTCjCVIxUawBH5wU7t7%2FX96dWSq7DqZ%2BAzrn%2FAdeRmCx58Yi8IINVyEeUfv71UvtZRw5BMKEsWx0fVrsiKKz1p%2FdbDOVrNhI1jKjODo4%2BWRhQ0vGJhRs9lXzJRohDvSpzYRhZBx1zRVKu1ek1gzMakcgqU4MufU5LTPQpcKCksDV9NZHqnh7axCpnLHetXevBoOIxLcIzEWk49zmNXTcDzlJmax1ilMSMVanbsT%2F%2BaEWuGI%2FzQVAym8EWxCnQ%2BfINz4Ndkc8a%2Bt%2BFVqmEJWuZc9BtIFS8DKMTSRj2v2QSCYsD6XjzROwVgJ8rW96BtXQ9u8XZ%2FIaasizgQviaoNbMY54yfO5Bj%2FcMafCgGkLO%2BZRJegHj%2FM63cqiltQZQGgyYEC1LjBTtuAMVmp58kuE8smVGHthA1%2FYrRt%2BPcFTZCeIp5aJJ%2B70dIrm%2FzXm1FBkXgpOO1QDwACfya%2BtODOjfxrE1qKBvHb5DW%2FZWTPZZvnl%2FOMUs8vi%2ByEkhXXgOdaEm6sZodFWACAgPUKTG8DFDKUZlrYpxcXSRi3SIHdEeDOA3W%2BPpVCZBvyL3t0MmdmREL0vfHE6ZAPWN46exBh8FiB50bnMqYy2X1b1Fdvz0MZHv8X2lDIl7VYtdMO2i%2BsQGOqUBcM21kO9b%2FUID9c9nySFCdcgoamQ49Aclzr%2FMlJFlc4dacYn9%2BPZL9wzGn5ZdJTSuBl6DhZriNTKm1Zu6ywWde5Mc%2Fu1PiaqU7SDgKCVEg9RD9YHLRRD2MCf5bpqIwdPZ8V%2FYs5GMdkHWxN0HIjunDKg0RU6uPM7QFtLNwaNJ8E%2FvnlwkNgQ39ktY%2F86x1PNJOSIGI8ClFdbybxcBQD5SI%2Fwgn424&X-Amz-Signature=bab74785425ad2bc7b2f31660eeafd9b2c9232415fdce2b6b0ac4e73115db80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RARQTNZH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCsFvQW8QTbyv8AhS6%2BeiLnszS2xQlN2qwgiKHyjaZqnQIhALixP4GXDEjnVa657Go9yNjSAXTwLXFh5m%2F%2BkYpc1oQfKv8DCFMQABoMNjM3NDIzMTgzODA1IgwrjcLPA1zLfJZPigsq3AMCIGMv%2B6Yd%2FiNivhRbqUrFTLIZsG2QPz3yI77QNI92FJu%2FJAWaGdXP0yYUYCBkIQlP2s1T9%2FypZAYBDu0cg8OL2RDL3XKN%2Fw1BQLzznhJ1dBUjvBNE8HfdmH3nQ4FiiJwtHiPFc%2FzX%2BhfqloomBdKj7QMRHBls5caD%2FL8YyfG8wbReP%2FPxcRK3LdxmBseeWfGL759b59g%2BpFpsMbYaepDkuZ5Rx65ahhSEwis%2BbsUofEch%2BlUWCMCJ4A6EVm7kB79o4c6KZ6MZ7YL04KOIeFORDhRaotJ9QV96k6yxErtu08pUKC5%2F2si8gaWzLULb9ZOZOzCgtC2T1yQ8%2FjEzSyMXqe6BFe%2FJ9vhE%2F6XMS%2B61gh7Bb6DD64LRjFjwpFNZnFPLK9WDLn9sc8cJ%2FMTY4HGE90sZx57fOLuBAI3YRgwKAQfhwfz3MD1sgLffi%2BIFl%2FD7Ch3QYeEaODk413nvm%2F35jjk%2BikqUukJdqtx5XNDpUiJQ61vw%2FqspclnV5042%2B35rZdN0Tq0IzUN%2Ffah8ZCkZPhIWnr%2FDRXQ4MiLnHQiOyZT2uJXsuEsYUqIcwT%2BtjU7INSeyYMzDTk4iLUJQ0C4BI28CZV8MHdjhwaDDgbyPISgf755RM%2FiUFe%2FblDCto%2FrEBjqkAQ9VNJQD412WlCqSfXXMJoKUmfE9gpiNYCf%2Bhw6ix8VUQQAxi8wrpOmtiHiBM%2BWVIBVQDfSaM94Nr3syt4YCqYtguLr1z5ahvrNhS3hbAjBFHQalpILUvKzn2gb%2BOvcZ9FBOxFftFPjv0hslSyVL3kgYF4nQLMT1YCRy2Vkp1esSrplPHVQyLUz46D5KtVFeZJMwQb1NZIXPSxi4S21C0lFMmemo&X-Amz-Signature=a29f277b3e3c78a62f2d1d31633b6d003c36089981084624f833d7ece8bbd6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=29ebbb55d155368c31b3b507fcebd7b88970486577f16e06b5ef47d5db1254f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDAAHZM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIA5tkjecM2uCSqnSugSFjbpky0kee7wMYPXZ%2Bb6xeSNaAiA%2FhHXA1udL1fGGrvT1suPYv85l0HHTZSuB3fDWdGTXvyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM83k96ZyHYa9%2FCFwpKtwDE8TLs1XcbhmAdcoG4xCozSjy27RnqmqsZlUAVxsO%2B2YTngz%2Bs4yM4%2BdtjhDiPPGFEbXand0MTO6Z4zsZIqqTrMLolGI1WyTcpTl3GIPc8LEa%2FzI6Jz7ViN8rMN2gqvjZrTdyQsxb3GJDFuQwtZaU0lYZiZlxpvbBs22coXCBKoC5vY3NmHr5oMEyOhF0FducXArXJ5A1BRDBQc6jG3X2wNi58CWMa4XQc7bNjdjUzktQR2NsAfYx6PqMfYxtxrRtO%2By%2FD%2BzIQc5hre3pmAC6usAjehlY%2FZ86ysDZBWZGB2VY%2F%2BLmFznW2ChFPNV6KHN0z%2FIpV7F42KmVbcHvt1lj2R1594kkBsTGw0sdbzdZ1SCluAy9v%2BreDY%2BUMrGD4H8eNeT%2FC4ckW3AEgIqr%2F%2BAiuss5bTy%2F05SI4LIED9rML8DCDM0t8P0DXU3Zs%2BncI0sQoOTU7p2Y3BABkh9hP4kKyvZD0gwHPlIKd7igsM1eX8axJgiajq9ZGSJj%2Bx%2FqFqg5p9Z8KNEU4D3VqOhldzjm0Fld57uHQ4Ce8gSOJZ9ImJafyEH16wP6ZPeK8vNBsDJB0zBOndv7NEdyKl6QuyhSlq%2BthAtq1aAfS94TYIDyfb2ymF%2FO96H0kfigfjAw8KL6xAY6pgHSrCMD6fQNw3zbuxuW%2B4SW6NDRgrkaBvpaNvwzNrFIX9v5n%2BdkxWX3evwleAcq60GYw%2FuytUtgJCLwI7dN6TDFAzy13SknIdzuHANNazIr3R7hArtzc3tifDh%2BYivyHnknbS2g9rfRRwegJ2ktsa%2Fkm2oDOGSwZ9APa7fFJpElWdPiSdLQIZEYEWF3h9ZUq3FLXHvXs0oDk1vFAbpxpLjF9Us%2FPfU0&X-Amz-Signature=3bd0919020864a4e88c73b875d123efb394326a6595923703e60f81cd76479e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=48e1e1016a74378719115f77edb85b7c61c82e9d8ad997bd296fef10756ab1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7734SIC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDVWo%2B48fF032LwDOe1%2BDf3OrGJU6CUh6oZppOzirbcjwIhAL6fbVmu98TVOmfv9odqwEQwO%2FmkdZ8p1QDLBLEcAUBaKv8DCFMQABoMNjM3NDIzMTgzODA1Igx0sqM4eQWV6gs49hsq3AOCwMjBqkwYADXPqwomG4XLg25Wc45aTJxSZUTd3mIqUGiCly9kQkJm4HR9X3z9QbnVJheI%2BW54wS%2FtLPOkD2ii7TZzMmk7TQhY1a8qfK78yN1o4SlZSWcAecdf7i7JnF4mGBOgDcbUHboxVK0qWDzJ5KiMmQ5a0Z%2FFEZpG2N3ioRaQuzqP7w3wVbjNhPuRpNY5TLX8QWpYWWcBLLXSKrew%2BbxTbm0W3IhIzxy3ntfh%2FymILoOwQDjbVoJYTlMWIoKO2MVqLO4HetDcxHZ6OvWYOQFxtSyfiyNPgj2FqXXXQmL6Ni3JuPEFlqoz0bGmfdG3rqLW9w4aYdZJgPq%2B6mlaAE%2FqmHVAqXleUr4kkhSxflZSo8E2LX9zaZZvt%2FeSlWPU7%2BfFDuNPpWlWlvl7gNaHWTREDhnayVjjLY6OJWG5sGaAmfFySVsOwb0C5vxtDWX4S3BIwmYh4a7aHct578lOdjw4xabSanYHn4Tg89w6jg0WYOjiuZZKpL9p%2Fak1bc7SqSsIFwcPUuZC%2FHQr0qdOHFbVXk6dTtKMf6byIb66qrxvd14OocilVmDYKQyXLbfzVNWOGGzLoyIO80jDYKaTKY8bAVAS8UkHWoQ3yaKTOQ5n4bht758izofA5TCMo%2FrEBjqkAUOzBD7uBASg32ObdRjVYGvJ4zXKKLyjNcGke4eYIlIzklCTyknaGHi0OXW4PmLsxNdJdVws3ruXK%2Bxt%2BoSO3DloLah5D8UN%2Bk%2BQWvjQQelIcCdGiUmtuuIDDb5XdYsZptoMfv5Y1i%2FfBMD5VeUJwT4L8pIHQinaZ6rW41TwrTrlv3JLuc0sCtLa%2BXHkZNXIRE27lGDpN5264kTKkwq9w5Aq%2FZ1B&X-Amz-Signature=2aeb2b697a6a3d3c6e57285dfee44c154a3c6fe76fdac1855e638a17451da60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=3c46ebe939821c9160424ce243b275b4fffc487d6afa580e5c6a2808fd9cd846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7YSBSVM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDqLPuSj%2BL1Lq5tu4%2BdnCmsVYxXt0lQHDBeJmpYKv3SfAiAdScNcHW%2BOmN6Q9Djez3m5QOmFryBWp%2FyOn%2BDT4FFOWCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMh5IOS3G6zkAfT37sKtwDuVAQa1W1DHlZo9RXOf9cTiTrf8J3rLYt7fVkCCkTqmZYY11DjsF79xpMHqigz%2BpxMpPKdaxFTBQ9IDEhuKjznKz4PxTixpHpfF7aQwjxNS1ITIRZth4Ba%2BqeChi%2F6IB7lSdb%2FsDMsgj3Qj4BcyJEJpxWQKRNZ9AVOpTFFYGH5lBrz5Ya578ae%2F%2BYM1i64bu5v8t667%2B90tpMQReHaqchj0QtgDu%2FoDqFh6QX%2FLI56gor2CG2khwGXhaYZXNOlogDxrVX5E0MUDpju6t1yX09eQtZeHdf5yxrxUi82WLqHxALAyCWtfWAi%2F3ieJAvQ%2FgmGLl7vN9qWIJaqi4jjrmPS36r2To%2FE2NW13OjgyzJRjxOtQZubTEuB7vCx14eM7%2BA2AqQXZZHlFNs8YdQ%2FVxWhQoyMD7ILOGz7mH84dyevuJhCvgpmx9dSmSG3GdoPfHiDrvDvkMzX6pOkzsNbL4PXUWD2OoPCmmpfyUx%2BT%2Bzmp6SSl1dl9KmE%2FFOA0BH053fKjz5nwIO6sglC3FHO8EKqClS8%2FqCDOi8DWms14X21V5%2B5%2F7LHH8BarAHmkN8%2BRCJaoJAWc0PvR99QJ8mdvCn%2F1umvwz0NZl8gnCGOK0RoyAsSGJAiclAXOFo%2BbIwxqP6xAY6pgG91TyGW%2BcIXdzplUFE6Ze7PtDtivZUQ8kmNWClaBqz3DywGdvCtKMP0xMTr0Kh%2B%2BTpXlY4kJIosH%2BLiiDGEqGTYWIBrDiVnV604U18kpR0UdDrW8dTZVRTHMpWVJbGu7QpR1lf0J1FwSYNss2h6AUpu3MPqt%2FpvT4c19fQzjqbiWg7ff%2FDFcnvr6cA8Causyndroq4LLYz75XjvN2EtOdQYroUjDOA&X-Amz-Signature=23c4576a27395559a34cd2553fc8a985c78b1794c6d61e012257a4c353224f36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=13f9a62c93f27a095d09f08104a68b19371e05bb0f311895289b004bdd378fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7734SIC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDVWo%2B48fF032LwDOe1%2BDf3OrGJU6CUh6oZppOzirbcjwIhAL6fbVmu98TVOmfv9odqwEQwO%2FmkdZ8p1QDLBLEcAUBaKv8DCFMQABoMNjM3NDIzMTgzODA1Igx0sqM4eQWV6gs49hsq3AOCwMjBqkwYADXPqwomG4XLg25Wc45aTJxSZUTd3mIqUGiCly9kQkJm4HR9X3z9QbnVJheI%2BW54wS%2FtLPOkD2ii7TZzMmk7TQhY1a8qfK78yN1o4SlZSWcAecdf7i7JnF4mGBOgDcbUHboxVK0qWDzJ5KiMmQ5a0Z%2FFEZpG2N3ioRaQuzqP7w3wVbjNhPuRpNY5TLX8QWpYWWcBLLXSKrew%2BbxTbm0W3IhIzxy3ntfh%2FymILoOwQDjbVoJYTlMWIoKO2MVqLO4HetDcxHZ6OvWYOQFxtSyfiyNPgj2FqXXXQmL6Ni3JuPEFlqoz0bGmfdG3rqLW9w4aYdZJgPq%2B6mlaAE%2FqmHVAqXleUr4kkhSxflZSo8E2LX9zaZZvt%2FeSlWPU7%2BfFDuNPpWlWlvl7gNaHWTREDhnayVjjLY6OJWG5sGaAmfFySVsOwb0C5vxtDWX4S3BIwmYh4a7aHct578lOdjw4xabSanYHn4Tg89w6jg0WYOjiuZZKpL9p%2Fak1bc7SqSsIFwcPUuZC%2FHQr0qdOHFbVXk6dTtKMf6byIb66qrxvd14OocilVmDYKQyXLbfzVNWOGGzLoyIO80jDYKaTKY8bAVAS8UkHWoQ3yaKTOQ5n4bht758izofA5TCMo%2FrEBjqkAUOzBD7uBASg32ObdRjVYGvJ4zXKKLyjNcGke4eYIlIzklCTyknaGHi0OXW4PmLsxNdJdVws3ruXK%2Bxt%2BoSO3DloLah5D8UN%2Bk%2BQWvjQQelIcCdGiUmtuuIDDb5XdYsZptoMfv5Y1i%2FfBMD5VeUJwT4L8pIHQinaZ6rW41TwrTrlv3JLuc0sCtLa%2BXHkZNXIRE27lGDpN5264kTKkwq9w5Aq%2FZ1B&X-Amz-Signature=dcf584a6eba3e52d77726e9cda1a33a2ea4253dcdab6c11e8b67a41e957209ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJIRFL47%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIGFfvkg%2FhUqfBoiqt%2BbbjEEGpdUaPHP8OGXoNKVpRbfqAiBl8CVpks9Vhw%2Fkg61%2BjesLl7bWVGoRdA1XskCiePgv3yr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMtphF0r3eI0C0z9daKtwDxRdOjZ2hJ0p2CCLFAAVVFsXCa%2BNNqIv1vftqKCTufBeElCdwbACbt%2FmQoT5Y7MhdeAtwynv3UARe2Zlm8LH6YT5NlKO4yAv79BsfOdy9po63K0M3xtlz1F5vmcXnGo2bWweM%2Bpf7%2FN2vDgHyfh%2FPWyN69rY0nkPzH9RG3chS%2F60NoMrgemC07Ru8tAYo0INQaGXDyhXt4rp3fihl72gaqsvlAh8aEHvyMWAaMEgwuQ6G%2B%2FOA31IQrRfr2ay6xVTVYDJcZWktbhMtgljAzJUXGVoKiCnxiyqPLPL9EJx6dxAyz99DeCBtvAT3B0cXy5JNLorNMQq0Y0n6pfYuOkjORJSZFL2OGb4YBGiZ4hi%2BoUjsf2Ec3OMbHc4PEecy03JzusYWT4qQWBmx3OsXPHPCcQrmAAP9NKKJnBgeOV7SB%2BZtCaWOY3ubGrie9Sc37JbEBdLo2o9eln8QwqVbRzEXgx1zY8vORjwDhsMCYzcuK0OudpiqOrakH6oNkAeH0UeXZcv0Ii4jz1m%2BlrtcPqr6gtpCjxusdHhJ64OgfPyGVSWHr6phl8zzmak%2BkGHu4KQdXzAT13aQGx%2FtF3Qzp76EkoHF0qrHfuKI%2FRO4d5Pdz10vRqIFzPm1LrDf0MswrqP6xAY6pgHVu1JuDf8ycOjE1yD2P9ST0SAcJHaLc%2FfpCpaW54Fi4mumzumX%2FtrICBAz6E5zQUyJMSUBaw00st6c9baArqyiqyHpZpDc4bfvxhP%2BlWGMkJQWId8%2Bs6QSnA7SYM9wWiVmbkGezbrXa6H8CoKUY3MAiC58kH9rsL9pr7nqt3pb%2FITe0j0Gr2bVUlXO3WrOQ8vf9TnuMYpvIVdYqWHhPPAhs1Wpe352&X-Amz-Signature=9668a30be5012cd80d1ef22e0ad8cff81042f8d6b129ec6d39cfab4779739036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HVJQDBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQClZlKR3DYg9rYfHGJ7xwe5WZCPUXUd%2Bw3%2FJcUM6o2MzAIgLVFS6yUSpSTBwHnaISF6tOywBXLy16LV3ctAsKEo7Bgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDECSpQlqpzpI8c2JEyrcA0ug4ZVHVe9%2F%2F8Kzox620DJ40D3WfbaOwoOiA8uOiOXbW6g1jbdk0MxEXTZu5vp4fnUlleMCiIPp9D4%2Brqm%2Fev%2Bw8YliivIKujo6Re7xSss%2Fo30Of2UyZIuP%2FM8nv%2B8xzknZAT%2FFwAWUVf5NlpVj7BLHkyDG4kA%2FvKysKRCoI9p%2FAQEx2vnL0rBxqPTQITRcU7ftrkqSP%2BhtlSsL5y%2BmVWWs6SSY%2FmJiAT92XKE3abUcCtfTCHCLUp456oEOvY03u4iwqXF3K3PuNoX7Rh3fKHkeV8PDUJhjODru6ZkRyjjmYjvDggv1lMKiFxOgd6T4%2BsLxDUCTFkqSypatqsp%2Fu4o0ft6IJD1Cn4w2DwZCy6dBWm1QThSyCZbLKWGvjIiWKYdCOOKKTJtWmNCxkUtI8pdaMsu3Y5JamyWFH56l1N%2FUAXYdaD%2Bh4Op%2BD36Felt8GDgcxsRSaI%2Be3Dith9DRClFGuM5FqgzvS37oEFsbs53sHCPdLDePvcYfPISX6KxAHG9Mpk1FpLUES9z0Ea4QRyA%2F3LYPG2UTAiSdJpGUqdSpH4hATHMYemBmgyzdQjHWNJsHvkXiZPHlN2OMDKcdsHAxI6x4yU1MozPbyxWmUCwNbi5YYjvqGXvrB2xfMLuj%2BsQGOqUBZ%2Bf9Fwcb%2FhP54Ho4eZdxv%2F3%2BsFaCAOmk8CDreHRJksy%2FljHEnJ0pjVciv3FRnXKUGMMhIbqcEZyycCck%2B0pFLSx%2Bh830UsWN%2BG8J6LTnbRKtlfVuC6NAEFrXPXBZIaGkIVQLLMOdBZ7PQaE5CR8PBSs8ur89pyENl%2B%2Fa2HoBporDGf6N5hbr6v9BmQcX2ioax555nMv%2FtBHmXc24mAdU1sZfSukQ&X-Amz-Signature=6ca5c7585d703af168d2fc50bd4a4684c572de258dec50eaf4b21a17a07cd1a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPYGDRPM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIFnPEc8SGQ6JHcAR9FgSapnw4SxFOTzY2fw%2BdxNYuBRzAiBLqLvwMc2x44mD8XPzg8LuAgLxcshm4om83t4ldY0Guyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMt6pZGRfLyZYyBbpEKtwDQQVQPZA9grHj8dQdwiGwThJkLZuXwTefcpNKCwWQ3M%2FyTrylgvzngHY65Vi2Yi%2FtT8lzuutxCv5kpJMf1E0mg3KOwDkHuF9vn8GICrizaYCFGslhyaKDJ2hUCmHofq4%2BmT2qs%2B8%2BXrSQ5zSIqOV8brXfxRgPuvxAuL10Cg5LYAv9fBm03g0fsngFUs6IrmqvfMUAvhVOYpRhH5537xbdVmgTxwfEN78Cz6Qe4eK7BvhLP7Rh75JLwIt0y0Rgq9m1FoYrHmHFX1rASTJCo5tjR8hdIjXg5fJjiIHhY72E1aa2sAoo3j5DGhOsUyLny0V%2BlOlrNTaL2bgjbN%2BQt0gm%2BHC7SGmq87d%2Ft%2FpwsPOyXwidB9i%2B%2FAuxsH8CAhEKYXbwQ4oyHCJLduJBYN8N1mJSPpEQ%2FX%2Ba0CHE4tYCICQ0BZp8opNZRAhoOACip74EXx67po6a3c2uK2HCVTKROQXNpaMkkRh%2BUCJ6%2BCnER1hMUIbUnGphR6NdxCBdE2TN6RBcykfT6WdG4y2ptALan75h8HWTA%2Bbr2IKQiQii2N7O%2BR60wMs8QQdFrYVINrn0Ovk0Bew1G6%2BY2HXbKFZAoH45F1v67uoIadjRlKw4ZKkJrHKYA9bC20P7GRzmIdgw96L6xAY6pgFfEnfig0yRr6CoplOeUtduqJ%2BZN%2B4ymW%2F7WEdLAdxM8HQ2ullZ1cTc5%2FH1Hk9jv1HcssjLwII%2BuF7%2BOPQviMFO56oarbANjWOgyzp%2FViSfwexSyhqHJQ9WSVRcfXKmbMAOl2XOFA%2FpzML%2Bu10aLLB7myouWbRojmcZGnOy6uLrpvGZqKAgqdQoEZvuHRzAYTKrKvsZCakxY4eYyg1zeQRBgD7uxfzB&X-Amz-Signature=2f72293ceb47d47fa3a272ea461ef07379fbf44ab403420b162806e0f0f050dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNZUBV2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD2l%2BWzyhgLMzix8vulYoXLOJrfvIbt9aXkrj3%2BWg%2FmcwIgSIXdDUgwYQ2dRf%2FUTOPQVA8tU6U2pn7d%2FGA4SsgUCmsq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDEvdiwEFH7D5urYq1ircAz4w0f1JDBUfMwjc5lcioCONPcSfGWDVnQtqteRSCJ3UjaWi6eIHNc0nYLR%2BVJFc%2BMglAfqF%2BLuE6vb16fZ%2Ftk%2FzLk%2FpBVgF05OkZ2C0CrmL0iZjWFoWf0vVkGJbFDJlDq7fA6K47WyWizTY6dsoxsRAlaMV%2B%2BD57XvM5uhS1YDgoTQ%2BFXY1XBLNKlbXZcd%2F5jcvTQfPmXoBnHA7jPCv8otGqRccNEtgc%2FlS04EgFH6gYXAM3hn9YTghqqFDAFvcT7K6U6yLvkd2KAHD6hUxGhwHYQdJd4FG2IgzYRYqX6TOaH9xRG%2B0AYF4raZ%2Fhb0gyxPHNffSqFqiCkMirCPd6r5ThMm%2Bh0w%2FkFKdKxD5XJTWpLCjwkQAsg%2FnbFuSF2rKkJrGcVfs%2FCBxRPCKReqmdnqjn0HhTNl3FCMF9ObkbcmGhyCX3Dia8gZWHK8AZvIRhm8lWb5bgR3QmWOKg9xasWv8NIPk5xwsBhnm4ZLb2lHKYe7Y3TeYRNkoD8OuoiblgBz8%2F7%2BNFHwcBfkAFTUjEVlmnJ2%2BW6ajd8b6oUx%2FNoM%2FyyJHi4pBu8WKtnDyl2En3vfyL7igr0DCWPS18k%2FIyVZBVNaaf%2BhDwBLb%2FKv1lj8evM%2BOFW0Z6c1YpVzsMIyj%2BsQGOqUBBIQzkynJulMA33mXp2I049QY09YN8DIQ1uJC50Fc3yKtCZ5QEAuZvfo6NjxVmACpBtlsruLQEGQ%2FqWRMTtK8c5bTvBDerwTa8cx4Q%2BIAK6RcEXHPt2a1Rh8C49upnohx7%2BnWrmGcBUjnWK6rKDfWOjIyONWoGQ3iaZFN9kC5n3UdHfWEa5egdlpdo3hamDYLkdFFAKhC5AvWQcpmRcALKIQep1Yh&X-Amz-Signature=b2f8d2a5a41abe51c8e32f61ee5dc6c6c44cf807967154dfa4cba504a9a06f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=61b6b0457d956b67de24fa19e91dbe020608d123794eaf7ad5a93299b00a789b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VG6YXZT%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAssr5e71v2bVc%2Fbz%2FzMxK5p7E7DDGUiA%2FZqj%2BlkP8adAiEAp8W%2FBXh7XduY5S%2BTEP0pXh41tJlouZOG6GAa5j1iUDwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDK9LjMOiAPs%2FYhFU6ircAzZdlECecwtyMWe53SXRlYipOgTCzXOyS7z2D9ShhOwkEn%2FLQaNzLlmIC0Yl%2Br0S1kFj9uZEYWh%2BGs5EW%2B6uWfDYBf3RZ1rX%2F%2BJDi9s0oSGPc5epuCaP1Ej0dSljQJyxmLzqTbhoLqrR6nBF8Q2OIYd505zoajM96cESqBGOmx47yyiEtnVd1RXBF1prdaDYTa2PFhd7HO14HVUskJ8ep3%2BegXTf6Aa6oST%2F3qBC92AF9%2B9PIcHokDenO484Y8P0ED6mS10x%2FTh3PhRfS8Wfy34KwUPOYgV3A6lEtk23LWj66Kq9jPDh%2Ft8PG4uxnMjK9gmOQ4aW7vj%2B85Z8SIvU%2FscJmcmwjbetH6%2F93%2FtaAMM2KJEuzSAiN%2FmpQm%2FNqr842hKlphZgWVy%2BcFsbt65mAXp9HWy31XUV2%2BZHzJ0pgTcqyAuZGW5T%2BJe7ffIiG1qRaFXwq8c4mJbvCovOm4YZ%2BoppBjNmQclnaXNTEPwJq4YNX5wsQu6zxbiB4wOuGKRrRh6LFWnPyF3X5Jgdfey%2BGuoIhXdmYQWrOn0bjyGPy55bB7JFaHfrot0tOhUvc2zNYKZGahmoayz5sGhWpya7HA%2Bq2%2B822j6bQH%2Fs5hEdkFFxkRbEXvizukBn%2Fq%2FRMPai%2BsQGOqUBnUui8t7luhUWT4Vpyi%2BTrPClX18y5tJLm%2F5dPgiedGNY78nXNeP7NJjNKRaheMIUPfU5ilA%2BQcnn58HD6Q6Ir%2FZLu2ff6W05uoskBA12oTdbT9hRP%2FnGbtZ6iPzzg36N1fUp%2BB9mgFYHWuQqdpBmAc6TZPU2CcxoiZgpemco2pDZ9yrSv2G08ut2ZOxux96XID4UbafcHoR7Q05wKXE8yYvMFTss&X-Amz-Signature=f12743d7d83d6a55e618fce60f3d385085f9bf183782eb5fbf2be0a5d1d76882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=5de00a8e32ba4a5837d1a616d01886dd504cf3b6270f66ca38698750e13e3d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=92157d2bc031cd93fb2f8b8d6d043edb9c479dcb8966c587bf86e7c0631e783b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=fb6eb3f7a7196f9ad13d9d4842a7a243ec3bb06f0f91c393556083579b3c90cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=4f6a59d3838667b09d91bdc5928d88f55fb3d0d8487a6dcb8923e5d8b5733db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=5eb9243c0a93e2dad6b1afc0635c9acaf41beb2a903b284ee4b62e4549f7ab79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=70c8f97bb6484a7fe8b868634e7d16d228055cf4c0f5f6676504fefdd34692d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=771b62433f5f98dc4f05956782d95e530c6c0222c1c49c8ebed6ad038f0c1374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=2e5f398e258f8b4bb64248061c0d20b0bac0160bf70dd0cc30f29fe9433e2430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=16f2356d988b090102d81c093abbac2794016d3a72d78981c7205b5596e13e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7UELZ6O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD%2FqoSwobAXCXBObGYtmRNsBTMMojc9TPx1olvQ%2BYivOQIhAJBjfkYYtaWsYOfXQ%2FQVMXT8l1C2FW6k34POzA%2Frg682Kv8DCFMQABoMNjM3NDIzMTgzODA1IgxrHFlK3VLtXAqfzYkq3AMmrg2Oy%2BtWeI1peeELrTOZUlxL1LU%2Bge1AWQHAIWbeNzd4LUvQpy7sofPQv781rCFemGXgMJvu4jxd5%2F0Vcp%2BIuRBlZTWWDLItMo0ZPEiwI0Wd3sEqBhX%2BWTLSrWvK%2B%2ByFaGI5HMiM%2FjNvCf%2FDihgSSVDEZx8N%2BrobU1m0wWomS4xY1wfG7NSbYvOR%2BYomungs7ZHcFlXOMdwZ2EDKtTFwQUkJ3akgoNYwTBBdVCnIsXC6XlcVtPskMcDCCBh6vP76lKpKMvt4p38h2eMQsWsK1EKR2ca%2Bwf42azJqMtg2yPyvGKAThmTjLUJ712Qpc9bEg4UD2sPnGVPIDziKkl8Dyw%2BysowzZXRZOQZhGLvP1i29Kz%2FeR5oh6%2F224m6wNDoZcJPA8J8bKQeFJKDHBFzlipFjrMbjvoZFnkdnCWhnjWdg6zf6jp0PuH2aqt7iqNE9r63H4nG0pcfPWClcIRvRu3c%2FGLSFhzCKYMb6cnaocss3QiP0RIN5TDDaptatl%2FvVsbqcgRDHQe4RFSAa6pKnHxh4gYpAu03JwSaMPcs7SkOqsgWuAPzlF3wlZ1cJW8sN3zllXczW2ncA0XeUEBTcWj7%2FU%2FX%2FfodDd5QBXydcKQ9V5FnR5Hf5lU%2Be7DC7o%2FrEBjqkAW36mTdNatAiRCkdiJqWjete2LyABfDdSsycAHS4V%2FIQkhXY1yxlV9vHV8BQSNnwp%2BWm7yVTI%2B4WqE%2FFYsaOavliLftjOmgnMBdE%2BpKXMr9LbIpDTdXoJKQk4qfozW5q8z8xrW5mjePnUC9X2cscCA7SmROMLlf1hHv3qNLmIlePhJ2J%2FBZPow3b%2B2mApN4LiAcfzr6cSaZqrYXpZAeIzZDJ496y&X-Amz-Signature=908cf9955f8c2b0d369e106fee91bbfae6e6b0cdd9848600e7dc178e054a53f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
