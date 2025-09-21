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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=6bc97baa9d51b74bb46ca8515ef99dc792257562dee99848f4f5da5ccf5fb892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=5c9d859fdfc5cba8a19924daef8914ec91f10a4c15c51f231fbb2ff30f58f740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=e60cab1dd85cfe5b1be39d79fffec5ea27cc63ef02e2f69e309ab4113f3c7412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=a065844039ae07eb8da2cc7188d7acd58cd3d3e3aa17f37fc7a240815599379f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=b480851b8e7f27d81bfb95881e3fe30176ba7496e5d4510d2e52bad275d12b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=0c18f646fa71b72cc0ee742ba6609833699834be91472288108ece0034795e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=a3f402f180e88cf0aaf3c368d86cca36cecb848eb507ec06c43b897cc6b31c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=659866a3b970274158f10de2619e6cf7d8c374b787af51aea0fe1211908fc7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=dc5b339400df4c81e02b0496146d97eb2d46e3f5dcaf3b3918d5637e79cbb74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=ee4cac373545cb43dae5a5669981cf91252ec24fb7129adb038d19097af981fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625U565FE%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtsWXWo25HSEKhv0aVcu%2Bej1q98dDNsSH5qKaWDxFARgIge4FPmSGKZ75SbpHREDFnY%2BT98ldkGTVNL4eBFLoOSBMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAvIyiOuY1GniadhCircAw7x%2FZQbg8bUe%2FVHESso%2FomDPvglPJYxy%2Bj5ljdRAjdCVAq5Y697%2BEr5xdowNdc1g1iAeS8b5MsdjPSVdRK7AIWEumVhrUkMZTA8CfemfyfmrDwMqtx8wDfEwVkjTvMrWSH356wZWlY%2FEPejpMFvQp8crnoX%2B4XtTwMdHrtHfNkxYN9TCFt9gqYxciOAoevmCAv79xnZeJOPPWvFsjmJljCoB6SwyHLZCP9bOxzxpJqHjg7RAKZx5rB0rvqc5i03G87HYw5NsJm47x4JqFhuieJ4Ms%2F2j5iHZL6yRwaEIrZ4lviCxJumIQhkunBr%2FrtROMfOD1xyCFAO2KSmcPAQh7XTsMDgu90dwr2a4L4pl3gFoPbT6Qsm4BOdToxBDliCXoiiwb86jAJkVivfmKoQgUh463bMtB%2Bsc%2B8tkxdArmCJCtAFlj8EIJxrYkN4ZW999r%2Fk7GovyZMx10nk46PrdxNOu2BxMcvBRM%2BmMQsSgW28G0yNycNMGGgsRPNxSkpoRTvJut5lmZ5kzPci6yFD3HfWYKQG5kA7U1yMyy5b3EmJE9yZtktS6%2BeRf633HiwV1QwwjJmRPezMXIFi%2FtLCPwc%2FXRtC3fM6KAx%2Bf2PCTDVSrV0PGN6%2FE%2FInFQUZMO%2BevcYGOqUB8uSe2UVhNv18pIJWD%2Fj%2FE%2BYFSYOl61ndbma3qp%2BCoVY%2FGBeJclkmFqhOMZra51zZLRNARQ9DAin4p4VES34lL4fdcUlkkFYe9hnM1RK6MrwFz1zX2lDiu4h5kTvtRGJaPeA3mrRseGtdJWMwYacKC%2B46zY9Px4Q9gij251qrqFVVzm3MAtwNA6RbIDDQnvpPKxBxYDhGjlD1dAfQSdXuzS%2BsYUeq&X-Amz-Signature=39c822360f67fa55284d9c1a215080d9f02c226c3afca076d7f2190726dee97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQVKDYEW%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAxASVKI02DIqSzDiu8uWKCjWjMvMdN%2FuOjkZN7MwsDAIhAKmZRteXDHRK9fPxKiXjEZV0805NpMp9CZ6nt14U7ZJsKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz3XUEQAWdGg5U0dTcq3AOVNRI%2FvBANtdp2%2BQkuSu5joT1FpC0PHTkDrYpbzkUSSQLM3fpUDxswMz5LwrTW4b5yfhE5eBqOJjNxmwYsigMTk6zaBv4x3k2b1SFEs%2F6PANAfii4ap36VLoGdzsBMCv7vurRNBt7Yjg0qPTz4TSGsEEuWRKS7W%2B274NnItUHb%2BOr1XtguHGhgf%2Fhde%2F2QQroy9CA5vLgXuJbGnNer48chlRv0aEtvP2o8J%2B%2Bb8IriShSpd82Y7db7PDdy1HzJbAmLPFIDvij0%2FYGZpBMzCy1AxE9sUy2pBghV%2BISw3RNuO2x7GTIO%2FWD8cKZU4J1THZgb8iVWsNoVXi4TQkLkoYqf%2BZ1H45NUcHxyr8BWs0cHKWamvdUeiM14W9ZRkIbwGrvGUfDz213jCBWet73NXLXcd8U2a8uKjqSqr9gYkwwKUfqkeJ09m9ODbEM6XgrkJsAJWy4zlOnxHkMgClhN7rcHXPU9Qxv%2B38FwLKbz5uvf2dbeP5siu%2B90RkuS6FsMuVYwdk1%2Bb8hXH2U9xxuWUGQKsJb91uTGxYR71agOpoVj0yuakvTEhCkQlu2NYijuE4XALaJc6nsj0lQmcYLSydQZlrNvKpggcqVEgYovqcrX3oL9o%2BeW4dr9OsH%2FDzC3nr3GBjqkAYPmdNnCbIE1aLF%2FETMIfozpb87ZXjm0VAk9%2FK69T2OPcVxjULcRunoH9LP0z8ncf08oQjbJzup0Wyj29pSYui6yCxbykhd3qnGrhOk2g6Bz8rtVqPpHMM%2BszgYgHEx9bQEipKBuphAVhdza3ttw034PQSx8cvTwuC%2BRTICxUPLUQ0mcSWBmTOqLmGIJggFwDVkIE5jzgTHEYngu%2BG30JVV7F1oE&X-Amz-Signature=33b563da5f0c9e694fa0c5b73b8fa7a785522d9cf6240cfffcb8a18d02a4104f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMCOQH3%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC92XhMpCv7Pp7wtM%2BhujdTCwD4Nfyhpn%2FnKVl6cBiPwwIhALlLykZOGKVhlM%2F4AZ5QFkEgRee9woI%2F5%2BqbmFlyy%2BVCKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKf1UWdA1NK4Cy4Tsq3APjDNkhiTF%2FvdOcoMpAfnx%2Fk%2BSiJv6LXljMVokbi8yi0WvyOr%2B68BkSCM%2Bvo006hsjcuLLBFiI%2BwiNUte4wehDKaU5cJq26yLfgeqdgxJ7oe7JqUleLi%2Bvlt6hBFD9WNpuBe88BWpAVN2s5qR6Vop1rYINHmA%2FuuRBt%2FfPP7m%2FE0wY7z3ww7EuF6O8BKQx6Rx5Ub9l20v3BOL87H01O0Y9W3O6DP%2F7rYTg7FOGkvT1%2FS6r60X6hcIkn80BZVezDKN28BJL76hTLrNYPbhk5lBwxfLCa4r%2F%2BLNWH%2Bna7%2BuET3pxotSpAeKxSi%2FlpV9QZNd61Z21GK527y%2FOMsaxZ7xX9fVeT5TMEcisI02jIyKFl%2FifQsimWTaaB4%2FrLusNT5EEOhIqCiHsv1SQ5S%2BXgUxVNUsSFkZqjLVcR6pg1FBHgwwy%2FY6QVg821AHDRNcHJl7BlqbIjUzDEpjC4nDL3T96x2YpWSZYNUPfO4uqp%2FVDQyPWvT56gQ%2Bz%2FMvnS2Yca2ip39WyouB%2BiofYP92KaJ0ArP4EVie4hyR1qpeaM5xdXgGdj9YPQCuWjGfgx%2FpgsMZSyesCo4umf3cDUxt5IzQ560U8TlT7vAnwVBRYVRWCnK9QHugZaGGi6l22IQDDknr3GBjqkAS957kt66VFFBjFYLDhXWucN%2BewDo5a7UVflMqWMQ83tqUMkWb5d6a0b4fx40wK73odAHWPZ3nFU5%2BvcPbJyIPLZe4OlVwRsI778pqtW2tqOFUuREnBWAh3fnE8GRwAltvBpPPsD8z7cSvVO%2BKVukBsPSIMnTA%2B43FCjf34daBSXY%2FdJD%2BoMFqI1qBpYbFrUNc0scyFpWsGUqxL9zB0n20UtA%2Fnq&X-Amz-Signature=f0d6c96e961081f5e217dad9c232a8f9739eba1c1817199d31b4358476e245df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=c2dba30521ea5215a6217ffcd641c5ea429942a0f5bd1349c942368485091142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJ2PT4F%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BNxz5WepD7tuS3HbfuRLijDY1C%2FiaLSJp%2B9A9cPZyzQIgP%2FQMCHJrPI1CVJvAiDazdv5yRH%2B4p8K82u4UqlAYH1IqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNGk7gueBp8wV7FSVyrcA7bpr026zZH5Ql%2F7%2FrQ2hTMQ%2BBX3l6MrzceLZgfsKNzi7wf%2BBNSOMLTwHb9tF2xzsotJUklOesD%2BxaCHcWHUcC5q4N7HN5JA4dpzKs5cwFnVdmVm1hb38Qu8I71uE2Ew070Hk25%2FCwf7xIHdtOSOMZXUEMi3CUz%2FDL6%2BtataRSEXiDwqahYFOz5Z1RqdCOnam%2BQOHn0HnXq0lXKFb7QCdWrz%2BXcUDpijDnIvstnApC5dgqc2NzAI33X%2BRStlJB8LluFdNSHqT4R%2BcP7fEn%2Bz6gtxBb%2FIFUBE8GTMEiQsbvpv1fV4Oi2uXJ%2B%2BXpOWgnLbIsbwiUvq0QKncOXRqzkH9zO%2BNH5PsQi8OVjIj8u4J7Y9yp7K5NIeMGgzHU9IjprU%2BvW8w8uDuMdiq5YVOgd72jtAWC5z%2B0HpZnmqe1rvqEY8D2JYUcJBq%2FAJrCuKIcwtWIj0dlrWv6GlnG2WgscbxD%2BSMg5TYB0PHFonC12Yte4%2Bb2bU9VckdxA%2FgKLCQfdqLR8BNaB33pEqUOuuXZVRrg4u724JIM%2BbV%2FYCn4ejKivxFdkbkY5hTtJjReSwQubOzwXIHMrXrwoEcGukWUWx713QniLdkqgMGXO5pOfycSrA03i9ZwtVGPxen4xdMJqevcYGOqUB%2BLZsi7Flmkyd0nQ%2BkAT6bCi0O09I%2BVV7azjQ6O4RW9nTt%2BAgyjazfFECChcX5I99Tc1iNBou%2ByxdBKN1l0vH3SRkgx7PqrV9GoBfPG43hFHYFDi7UpO9OOQd0J3wgQTYFFlKgCQsfcuxLxzOqWiclblKXFb95W4F0QCRpKDZLDNe%2FuJ8%2FQ%2BpAPLRXC8ORHobVUDRdSgV3Rn0NmcT3xeBKWUk9aUw&X-Amz-Signature=1a3db62bb536bf6b3cf3facb669e1bbf76b5aa4c7b0ef05b726df767deb60300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=60d689ebc72a9c79d3b07368872f3eebfea2a94d9cee7010179d6fd80df696a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZS3ROUS%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJj4y7iTFLzJbpwnCXP55aZyeqLr36qTkIYISShDYJbAiEA0IIEvIQfJvcS2n1%2FPJbAG%2F3%2BItII0%2BWL4DVr0HrnB0EqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSbINf2ctrqB5uRMircAybuYF%2B7WW9rMcRriFXe2dds4m2j9heECN11o5LNckspV%2B2SiaNEJWqmn6S%2BQaO5tS8Er%2BoG28GJL%2FePqhgJsNOdw4E6LKl9tNEYwrAGsoG0WlWSTPcUWjsBRrTNEUQUkp%2BTlUUHUEJ9ivFS3Fnnf97nxASDNkV7RZkg9taBRK3wggo%2FnwboG%2FsnvRvSWZ6gK6PyPXhaJklFASuuo2ciXYKxhrm%2Bde5gXzeQgscdUzSPJl9Usy%2Fj5Y2RjaTnQwxEvjxutj1FwDKzzrdn732DkIu%2Bg5QgrQzjEjcrwN3E9uX%2F5XziJnBqbUoQAyJcGQ2X0WcoShzktOE8AFyuENc%2Fw5dYIIouBcIw2geww8HTpzX5M499b0FhMC646c7ArpYVCbRF4JyLEI9hV7%2BWKkei52xGbpV86vnt1fhuuf3THd2MPcXY55e5YnafE8aSiAqVnFYicy6naum7W0TSuwZHYg2UgDa3EpyKu0okGh0H8qHaJRYyi71ZuXdPwhvoHfsLNgt%2Fg%2FZGxidnJNtM3V9IuRvAxFjAhFdqUCa2xWqwcGu2T%2FnSWF0PC%2Bv4lF0IP7SF8FiW2tE5KFIvisatbg4QO7Cz%2F1GortouQNIPjWrJnOv8hlzrdZoNgv7kB8ZoMMOevcYGOqUBX4rsrR%2BNdbQS2cCCKp5Zb3BHu05VjobU6qLMYFk3UNQWGPCaW3aWYqr%2FWb1XMRc0aJXmg4prnmWz1Jl4cVwzskmnrTw81A7ZY8qMO3wIx6fb%2B%2FTV9CYynAu%2BM8JCurnUZuuQVnmRBgBNBQobFmztaUFU%2Bt5N862l7EbGzdHwjrzcWyppgqUzjSrWmgd2mRJ%2Fg2eN4bewwlztz3MjZR5HaCi2jbcS&X-Amz-Signature=ac355fa1bb0cbf9653895df3f808979235b2ce4d065e6e66af4314c5a4e3d599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=67827b80572426a36e62199d873a42cacb94f6939fa92291a85ea46673e27fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HIHUZJ7%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkj%2F%2BCIhQKvjlP0W8t4q5PdlT%2BqZScxK5ocVMf%2BCL%2FMAiAdVYm55t96KLBmYuomuFQZld%2B1IBftQFgKGXHLkfg3eCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8e3tx44lzIAjvQeoKtwDIz6WRcviki2Gk2RyybkcaV8HUaW20DV4XO7Ir%2FPGHxkqHC3oXqEgDsFaE8r2ZHqpK9HFxp6K3OzfGDrR%2FcbuQ2FcV2SsGIif609h%2FhMg99Bnpbt6c9Zs1TiK1HJVQlZv6RrWGavG0fW5npmj7cuBWP1E3eu0PAweOXLzlxKdqnve8UBCqXvlw3vMjbc%2BTxYkqYB8jfaGTqw%2BlkYDAG84K6fsV4ei1Hk2zfeP8PRpyDvWeK%2F3lqH%2FqdzOL%2BJwzATT3EC7Lc7QsvIlcese85oHYkYxNKuozjFax%2Bh7cM8vXBhgJC5Jjrhy2jXAIj%2BtgkhETHMEd1y2BlH7uFG9eiZzU54Ss%2F5edCa2REY7DEydGI14qdE8KP4wAz1O%2BufhjNQQ1QpNpi8KipYNT8eHnqoUS%2BLM%2B4AsdKKCgUzRMIYdus0T5Ze5pghoPADtGRBCgRVt7gFgL%2BZip07VlZxmI%2Fll9BLseCWrBIfx1O3%2FgaMPrJTltOahnshPMEw%2B6Z52Okoaoa1MnlxP7Nv10z4gRjABr0xtGb0p7OjIjyHCQf36kzvY2Cx605Fc5RV64H3fni3gD4QuYVQ8sXGv3Y6JadQ3UR2j8Q1%2B9dKJFpn6gbJzu4v4MPvA5VlbU4G3pa8w%2FJ69xgY6pgEw9w61GK6bmn3FKNDw%2F%2BKC0TYMvEa2i%2FDMiyjd62Y2hrpf2VosCIhd0cFESg%2BjwSb1Tjm5UMBSMoVn9WeCmga3Rla8ETyrJ9%2FEvgl93uXdFN2W%2FB0aegt5SHrGHiBW63I5sFv6iHYdalyvRpR7nCi0iC7f5FgZ%2BZSEq4tm2dn6JYiBOMajk38vrs73WbywJXmdzqGwI0myM3EvduJ59eJEeiiLir5S&X-Amz-Signature=e5bfee43932ae3e36d9e3d0175dddd991a5814ee30e03653c14c21b627d7613e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=d590a0d209e7529ba3cefdf3f0330804d4627f0603cf7bd73d6c47b231b15c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVMKQI77%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX1BmveX53dU3CwRAJfsjbANQT0teYYZ9YzjWJ3tNNxQIhAKqIM6wnLiLR9tDwVtRGP%2FS4cK3rl2cf0smYsvdMW%2By8KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUzVqN6Vw4mTKV76Iq3APvFKLWuClodTMmc61ru77VmMnlOvUOnb%2B1qtMLv%2FCDE60pa%2FLeD4qZ%2B75W0uqDSvinlM9%2Bdo95N1G9V7NpSfVEL76XYTz%2FigX8TlT0hGw0EHTEUNOgZ9PBvL0sYnPpldB3TAGtn0TkcLwQGFC2W6ZosBASDsUq25eNxHHNkD0R1ljqTfxWueOjLN2TFA8ZerwziIQfj8gPYqMFj0%2BPEWmKHQ6rqBUCdyPLBfssf2KT%2FiBsRszi6RiL85PXKu7nElfUGoE25d3baCU7FYATs08cYhBsCcT1I6GdZilh6lu%2B2Xjgro40fR02G4d6Ppxrl85bUzmR9fo1RojQfvh989YMc5lqJ4tWPie3s6LM%2F9ym1LIvmL8WR3iKGVbxbO8d08S2R4SqRnDefC67K7ddgrErsoqHazVL78q6OCVRxz6UiqVD%2Fcprf0Z7QP8lXkipCbrYvJ0UvktqnxDlCSnQAWoS0xAUsJ2P0fUn0Vfdcx1r0x2PWI82%2BBkpZgiYEeg5eiwSzBtpc9eSgxtEVqJnrLRx228gmxnPbV3jkeKnK58T%2BXLqn%2Fl2OztZUWsiIKHihutfAJJPygxQCOizNZcUweRyvZAxBf3aGKZSI1WgNY7xyHFLc21A49vImZC81jD%2Fnr3GBjqkAYhZf3kmk164EzFlQkw8z8gSUa9bP8T5V4j6PKBssNLBGrR5iCU28HJHDxW72VDcwWimAoXFyg%2FlQW%2F8N75vN5XnrzVrMbcwREeMxFAq3mqGghw6Qh2jmuCu2qnaSvuWerpH1CNE%2FlwqZQHPVWqnD%2FcwrC3weGPjZ4txXXmHo5yQDenW24COtBES4hCochuYv%2B%2BrkH3K035p5bAlKt54XQJ8kng0&X-Amz-Signature=ec812532a63edf41a1f6e52c1dc823dc5d88249a1ba1623926460bb46d60ddb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=60a0f4a9203f57d0b863680a9607a7decf3e3f9d6b399d92b5528e5398ae1350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUMMABD6%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDFYVTEm1%2BQOJO3s%2FKRAS6IDyLuwig2xvnlGcHlYjASPAiAKDYS9blskLR8EYK7Exp3%2BhJVBeWmTjGQ0mKvbnOPxeSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPvdGKo7ilhWYucxNKtwDf24dN1DNLiLiRHBFw4mZy1JsJBgQRBv4uiIi9IA3WkjFw3td0nEcWjC0cUgyP7sEZ0VumzLa%2BJEAXG2enIGtYeL0aS%2BpvPOTdWaJepF7WIL3g2jIC7x%2B0mIYxCxsuS9Nbpli8ByQW2TpFnoGNhqKMV4nppAHSXkUuRJJNxYDWi8KXtUOmbmsF%2FBHPdHNZ2FD3td%2BgQASAnuP4OJC9imido5bNmsKEW96tsUEfx88I%2FCLk2kD8y7SFyymJQMKqA8DVYZnL8fQ0xXQd8nczIrIcTeWz%2BQ536blm9neBcX0Uh%2Blz%2F70BrRwvZNB7FS45VlQM5BuK8blPGjqedSoYZBZm9xy2K0UeTJ6BJEP22x46T03%2BCFDbxBszJr3%2FsikmQM2QOZwzGuLvjBhsgfdQpoILxg%2F7FLXqcpm5JSx8jx2NJPh%2BZyBkXwVtq5GcTdYLRSjohRZ3WBFmWjNhdB%2B86eS3kfHtpRcyrYt%2FAUJ1Mm81aolkxcituAKVlFc392hRFvqDFM55ly8CJxgx4WoM9FLr2iDxmV9vnYpo6FObH%2B7Pbr%2Fz3XfvJUcxVuHgqMPVeTjEpLAcxkJXF0nfR2KUik0NhryIRUiI45ca%2FGtmLEO3BLzy69vy9NJqvIMjLcwl569xgY6pgEaeKgb6nzQRt7L%2BF3tCGS8RBB18vtV1MikJmAp7HolPWckzpYwTG%2BGZHL1Mnu63KuI1zpeeuxQcdYwkEzvDKD0z%2BwSKni4qi4v%2BuoyH3GzPj3WyaBwPV%2FtR0c0c3WpQa9S5r59urFuWIXLfyjUxpArbCv4%2Bxqnc1Lw0umGAkRfdp6v5btJS1%2FvHmB%2F5GN5KPmz5CRxxK2ziWTH2rgrGf1Q7uo3X8zF&X-Amz-Signature=038daf1be982fc99e48c0aa183534cc417a8db6759d9dd8804a83c551b9e8e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325PMECF%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJ64k1y3ALnrMwo8nseUNxcXFc%2F4R4C4Kq%2FzdugKSHcAiBrAfMlWvrGc1A%2FMCJkHtaviG4n5CyDdNukNCYB84vVpCqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYnEN9k%2BLInJRRXcgKtwDKLmjXxB%2Be0xKuI8PxV6Zr7gRCaGF0fsZLcc7YEplTrkWdXqWfp8kLZ2w5L4EfqhMHXf8EuaOjr9v2gSI4grkr7gH5V60z%2FsQIFkt%2BkPUKM8x8E8HFrlu784C0rOzvUaq1Z2qam%2BHFvz2UMJx3wKnoP0NxNCkQHPyOUrFvglvfrnoHwe4ZxAGowjadV%2FZ0A1d5ylKfb2NOjnXI4%2F0bnEX5ukWEPvDcsng%2BowJJMH7T%2BWRy0UXNOU46DWm2hyV%2BJbFDSZOG2Z3wsM1j718%2Bp0F1ha6bsE5hOiARf4wkJpIWZWBIpH%2BlfpZ2m2J0aq4bP4FSyW1ULJpvowNmKXecIhJafa36zt0EaIuSp0JQbeOB0jmR8pKMmxV48DdK8s7WTdPPoMoKuCYvr2evbqpr9AKCA2vNN9J%2BVVRY7PTD%2F8l87ToKdIhiOuBeU9ktejU7dMprv7gE2aH7WrYhmT%2BppsleHkgC4dsC1ODOVtndSo9PJBGC9dn7kD3P1a%2F0L48zt74acw3Lp3fr%2FaLSbAcqnb7QEG%2BgqIdZZRDIapin4VPQs7t1ZFZZKnmw8vbL1ZNYVGohgWsIUsmhiGVaPONoDJli2M54OK6GDAIDXHv70y3BUy8k8lSG5ZtweRohkkw1Z69xgY6pgEL78h9LnI7A%2BkqeYY2F79l%2B2D53LrrbpQ4VdwvzyUIAcOUdabiabphdw0NcELRj0R2Jyot5l9LYs0MCggoPpA%2F%2Fp61B%2BbnJjEIdSf30cLC6evke%2Bww6ToqLJiq4KnRQnEnncVZ%2F2m8vpsH5vrRrJE2rhApZfR%2FJGnkj%2FV5K%2FVEyDczOBQ9L3BwZgKA7tlvN1MEVBAH62FSvW6fX5WrBMo%2FF7e8LMWC&X-Amz-Signature=b502d1d293ab1a9ebac0461e58c8bc2313a5ac50a1507a26a1f510d8ed16f5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSNWJ4O2%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAadfHqF8EwDfTPPGDjVFDBt0c45IlYUcz32yXZ%2B5kdKAiANO%2FswwEcWYexB4zoUnSIET4Q6UOlDSZmG%2FHVGg7UP7yqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BdL7a0bzPnbXhaDPKtwDZXDiNWgtjCyuW4eOjPnfP1sp7u0F9TmRmfCGGrH18PydsUIDs3H7oTb9tb%2Fb706Vrgt6QCsAud2REfkxQg8Kf83hao1KG9omf6Vrs0MAGTXAqWk091P3twDTAIKEJRpQs2MO%2BZFk9gTxYmpkJtSwPbkOrsPpLjH%2BdWPKj2SwCqscXm014MWty6SFbJPMjawxR4XqI5qc0%2FM9l1NWs0AWgAWBxmA1wkry%2BfL%2BcG6FzF2DJIEvFPTdaEA%2FRBtTW0FVlabQeYeA3lQ6sfp1Qc5kULxTfc3E2LcXgVFYGiIzeamS%2BjKHidllh2He35C0m4R7loe2YYQO7MQ7qTUfRdRxYx3BOST8phfZ4Zx9gAxsjOAKJACi3RoZdQMzYL2cLWFF0cyZBU7hChH32JsJgrtIi1qIaBqzuU25%2BPCXyB9JIS4X8SxLunJw4SZ3PCR%2Bognt%2FN9rxx5j22dKULfj8q0OA9OTRyWCBcu0cOFN4UHcfY9xTpktv6Zyu4ACq2gNQGcDqISN7Z%2FgZAay0MQkbtlNI0FYZeZDrErMrlcb2pJOjwfUtv6v7Ivq15vlphw25%2BALUjD3cFlTCa4hhwXlXDooCv5IapE3RvbsCaiVM%2BajBlJi8mZv%2FUZV%2FMYjQRMwop69xgY6pgFKXMWRM0ea%2FdgtEqm34ttpF%2B%2FOoDmOlvBCMZ8HjpwNpleknQGWCPtNyGEY%2FHrFGNVCxT4ZyhHgLuKgbiwNhkDs2ycWgdECHPxv3vHf8tlLqpaEh1frR0nMyNU8D9NV6cpI2wvwSsD19jDCORDT8gTgydsgWSeWI3pl3KxzFy5HJPuhpiIeQ8krCWxkde4ttW1otdBv1%2BsB48P8BASyv%2BeQdNtaU%2BcA&X-Amz-Signature=53f2fe95df7e83e0e776985d15f8a59bfc47fd786f47a6aa8bc308df012c764e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=67b9e1325144094a91749cd4c6667f5b4e1462de3ba5f5950035ca8f7da05521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NLCG7U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiUY8rozn182OrQ0DJarLmGoW1ok6MqlFImktikmEIAAIgLLIjTXGiKcG0PZzSxqWFF9MSn08GcuuNGOC%2Buox6QbcqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCScAjn%2BakU7sPnHSrcAxWQQJ4lr9ww0QdnUABudDo0fR%2BTebuJRfaVFOageqiTsIU8ATe6FurLJWqKkrRwWLs5RPest3cU729pJolfQRzu%2F5k%2BC76jBHiFNYkPTT8YJyz0dOYiTTsrJAxa9nyMt7o1J2p8lY295ISyi5GJLoRhD1VYSOfeU5VkB%2FppXKpRGoJde7luqu3QH3F4i0RqoOQOXIC0WY5Q0eGDAokT%2BEyVjp3EJMfB%2B2srgucDH5ZdxD1Xn1%2Bxk8v4pALuDGwv1SOToI5knGjutqVqTQeKoCMaOTBwHDAX2IN2xm9rBcHKS6KB1ebws55R3jZ3a%2FoEp7WKnK8uAdatvKQfNZjpveXKjuM%2FlixSDTxxABOir0Mki7EgyLskZzooPxntnEr41LGWQBC28YrqejfNefzGyF0QqsXv%2FGCEBI%2Fk1FPrjfjgVW46bF8jOSjG2zR0XFiCH%2BmCw9wKRpBv%2Bm0KxyWUXZqspMk%2BtQd9mqH3AXKbQBzuvZ1ffME%2FNvpBRADQVEo46icqOdZ2lMIRuV14nO9FIIG97gYuSW8BM%2BdJhsE9MyLsycif%2F5ManqPw7Vj0qvpLuWe2wEAxls9RA19TmFqdKrBtZNq8KQRGUTedtstQjESnHKYtctpbRbLasKFqMISfvcYGOqUBm9sxmcVJjG%2F6Brg6zPXfClOUTrWQjquCfbD1XcYesuE2AGo5gUvObiuCgyI%2FvDvSl5wCnaDvN7hBdhFd%2BCHVEOR%2FJzoljeF%2B37327%2FzrPhqEvnl04Kw1dCcsHcbCpj99rQqzctmdgH6YVv274C2ZiWBezZ1R8Py%2FglokIMcOWEXJudIEMFWjCPN2BIDEita0yiaBtNF8SlAAw%2FUNoqPZMy%2BoNfyI&X-Amz-Signature=5a29d1914f78052ef8a21f9d124f9df49962b41ad19862739e39afd79b251256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=f2f66995b344bf57a649d092988f39182beda4078b5242171bca6dd8bb765cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=118ce7b414f3213b1c5c826991d9c1ef1213ac94008b59d1bf80a5a3eaf90ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=c6ea3b2bde008ac4ad907d6faadc686009d708ce52dfbf49c5bcf4f5cb305acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=f9ac352531a9fa6a5e120695f91057bd65e6e24b22fb323df1410e5611baa8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NRYESP3%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK%2F8oeQUOPU385XLdwQ73WywWxeLJaKs1WBFPqLdlAOwIhANMgdfmUUgSg1qvpwz%2Fnyh2JRPG1ZVxzXex0nw0pVcnPKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykzsaPm86RYYnx3Y0q3AP1QPJQlIcZF%2BoISmUY%2F61CG9iTDndEmwEtq%2FvMqw3KF4CvaAiG9Cs8O9YswBWyIQ%2F6RMYlanJlCeJS8vFtG440CIPvPYCdOeuhoxsh0oPI1PtUkOykpXvCSWDv8YTcdyb%2BR6h1qeaitme22FglZMnmJAAViU7vosQECSqFUTNBwPAOXagZCnpccBZr4vP3sior4AcadSMOO6qAXT6%2BkCgBMX5clZHtrIxDA48X8ZKEuq7BOavkxItyIQTTtO8AYp8mk%2Betfgi03sOQlX%2F9ePYHJpcCHjOhps02f0mMZ69WyEbUJP%2FJJK4VKZHOy0BNNhY4XF7UNPsNBoil0%2B%2BHHZYLUma5zYZr36YxfQtDQu3GQ5M8eBUp0XHMhxqXqNJGQIKMwVSMdci6VZjMQ8O8RmK64yze%2FJwjgfsvFu1%2FGC6ASwXgwyT8bR2dXVY2LHEWQ6t2qoTYbCo%2Fq9D7IDlQqLCzmLMVWJ12IYEw14L32%2FlhjoWg40QvEjy1wAz3ER6gCA3fqmqqRhxtlumOGZGeNWrSN5pK5pUxmD7ITd6lNxoBlplRKodSliBpeOcSameDFzlV8HTIvsrjwe0%2FUlubKQYamDP%2FjYqVQJ3vHN1geHgXVIjZSOovjSFjJ%2BPI7jD%2Bnr3GBjqkAZ6Z9rncWXYCT%2FAEm7g%2FW6OlZ3rGL3Tq1bv26I4hAkGe%2BE6QDsYEeNq1l1elsUdhpGZwAaaYMR7hWbvxsA6jqsEtcPpoltmRplcu1udF1cUqO5zqqOEPF5AErcBtIkuPmKhFiljKzVrVN1tzOt0t5RrtAr8jvPOMseRgfzkTDI%2FmHPhvntDry6Z8dbkQcJ3kF8pOCLtbJuS2Rwr0wbER3ePzzyvd&X-Amz-Signature=62d15cb18a7387313dc5124c3c56da4c021d5bac558be9894fa522161b4509f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=63c187a8f1e34bd6f13a79dd9b200b0bf3e71ee614207543af8c48d838d4c3a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=d92847098e3666152a93fb875262d58ec85128fb7f041a5f6cb361e95ca3a105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=c6ea3b2bde008ac4ad907d6faadc686009d708ce52dfbf49c5bcf4f5cb305acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=ae5346ecf415a85fc5cd370c81efd25885423bd49475f7f78319bc822c1ac4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=b3819e44950056552195957c917fa80c1f0a99a4f9237a778eab3ad2bc99e467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PI3KMU%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcVmOFJ0JaagDCEZ00qu3cpxbwqnlLl7fQgc%2F%2Ba3QogAiEA820MkJ6Sb%2FY6u5vFqxN40%2FGuM%2Bl8M1WeuxhZX7EixU8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtlAKzC2jjcli%2Bw4SrcAyyjIVi7FIsfikjFQItFpmEmby409ub9B%2BewkHOW5mQJUBa3oYXACjZD%2FLSWKuuBVVPOyI6SQwCRIkWRTxfe%2BUD2XuZ0oSITH3Xua58sJ8N%2FeQvBJ%2FLxV9GTkOvPZnKo2AGDZVmtlmd6Z9YVT7Siqx1ZILh4w8JdMlA3J1z4sKHiwabvRwT3hrcIhaf5B%2F%2Bih3Yj1lDr51jWK1m9qdaRBxED3M5DvVLze45sGjpqcNFPJC4kwADVN005aCKgxTYKsmll3b3%2FL9MN43vLrHeo3r7cWQwIItA1WiRzD87v9rMgqNhAS1q6vl8k2NeVnBZKhVGAz%2FSHnLs9NvSjqYDRdrJFhfdvOxJRwS%2Fn6bbLxdBQDN8FCl%2FYoZsTZ8tQ8B6n6SAK5oiRutTQYX4W8tL6A9rjXtbrniew%2Fxsol5ecynj3iAy6HEngUPxYlm5sVcjwDMIhh9ZPhDoZa%2FcGajd65mYtsSG%2B18Hcn5mpEHuHb8DUB6tmgfIgoah8DWH1xRyTS1LLbRuki%2FPBYAnqiD%2BuNvyNudESsuMC69AP6T1Nrw7TxjrhMZPPsVyE5oBLSWSVt6J%2FCrOMjH9sYNbH0Xff%2FVibmyA2BP5%2B06%2FYLuM50m0ZL2fb6ZhjIkG1vKiRMJSfvcYGOqUBcL3UHORS0CRNIFY4UrhNesCwpKPnfETli%2B1qJS2tXuGLukm5gjM6389naLf%2BBZoF%2FJ1V7fgmBm0lUM2kjFfL3Mj9freAIR8R1MJBi%2FoSCrxDOMF31MUTm1IKdKmJF9vW7jNyLQpOjI58dfde%2Fj6eHd0OgsrS83qy8nGF9w9GADLSZVyiqH5vljWFye6OK96KJkF9bpnQ2BmlKGXKV70Cgg1W3bk0&X-Amz-Signature=9f9c792c0d68f28ac913092b710e202fcff582ba99199dac3f46c8d447edc40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


