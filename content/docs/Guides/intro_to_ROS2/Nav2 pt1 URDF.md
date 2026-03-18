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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=b20e97501efd4ec78b4fd4f7b9e8b58481e7a3dfc65a7ee3b70bc37b1dcab07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=b3d4a431f44d96719d2e5f179abccf7dcf1dacadbe63ddc13d0f631fa032f52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=3e1c9cff68164caddb0bd2ea36b6d26de001ad33cd3de8c7c75e0fdbc85a7fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=10800c89e44551d78e960d7002a1f53c929062fd58984b7dae9dfc4f2e02eae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=02ed3bac8dc3d4420e5cd7c763e69635a6de4652371373f355039ad2e46de6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=e33082b2e698ce22c3549680751e3475e7b3386d23df19f6b494ae3cfe7c804f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=d45aecd577fa1cfa5798b0b4e85f8aa8cef0c3d1a83b06b9ac3694599d7b3f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=8ed5afbcedc1d558912e467ffcc655c72c2ac2f090ae7f338a43df7de2b8c193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=8e70558c54118813a4bad581194d84bd376ef8dfc3d2a542468800cb12f03ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=0f0d32ae13081364e5b4aa61b93ea1daf618301e7464f2b1b487d470ff848594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PPZX55N%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCCO8wTMHvXQiDuutFXyRx2X87zOtjbotx2q4lJ%2BlZ%2FDQIhAN0NlG3UQ0QuM%2FJNUsI%2FO%2BK3aluG%2BzzRKhHfHnfO8DCgKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwothF4s%2FpG%2FFZvlwQq3APQcURmLu%2FESFVcokaA7C%2FBr6%2BXM%2FwDxQK5CHnLMUGwPm0xtQCfA32UvyzhVrW4gN3YAfmCxVxLnjjcpFAkUTVvfmhcwGYg%2Bb8KcyB%2F6TPXuzBtsAUTo3XsPTlbkn0Dk1I2LLnENocv%2Fh5x%2FxGR%2B3KFycn5brIIoqfr4H85BYMm%2B%2Bm4nttrxIzgnlS461TX%2BzvDyKskB4mtnkSSbobb208M%2F%2BicGNovrj%2B8OHmjq%2BJINUQndhQC8xzLp3ntVeLK1dFPZFjM%2BakU6P0yRgLVcplJTzwG%2B5J%2FQzqY368xx5CvkJDjGI1AwalruXQaSjdp6a7CcIx4oHM%2BY53AoOPtgemrdewvRfdvFIe%2Bf%2BoC5S4saFV%2F0U72XiCJd%2Fbmhssnj8aOFMy8mYzFUlprb5e9fpoJBND5AYvCCD%2B14iB6CqJJ0TqtgTech2c1opW11RJTVWP662d9FLdAsKMix7MQzmBljX6QaxUugZel95WiJJkC9vt%2BmVg43P8TCvlLFsSVMSFeLlkOvRlGDnLWRi%2BfJBNYE5mjL8WLp6czWoT4vLQXeQwPQxPPmH%2FeaLfle%2Fv1uOL0j6knM8CTWUTuGZqeTu7OxOcSgVID3F2tE9M28Wg4J2hC2u9bJi5hWVDFIzCD6ufNBjqkAYRMHcyYyiKHhhQFrhgw1aCYUGppDUDfaIWVl%2Ffz%2FvoTyyBvUoJYHCaenzDll8HhnM0izbmVF%2Fy57ZHzpajv1GPhd61ueO1jkyNYX17XWroDt4dmIVOwcLTPT8L5V6quENL7Dz2Gi6aVsqWWCDjrQH5xSeiHt%2Bp7aSPxC7Hw0OmJx4Onxcqv%2F5gTKN2J5PFM5tOzK%2F8NgYNZ6xo%2Ftyj1%2BjvKg3KX&X-Amz-Signature=429ffb49986fa67709c4a2248fc3487de4cb27c20259c2106adaa3a3608cab6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRPNWUN7%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDWy481Goyb0Gtx5i5pnkHaGTpe49xewMRwx05gzTdfDgIgRcj%2Bbre5OV1RxfaxyC1a%2FEugPbWuVSLn96S6GJomAQYqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDtS3ch5vzZfzsiiICrcAyGP1O%2BItRpgbSG0bPMpQokOC%2BAP6aqlajfOOqWEhbjLHIfashRb7kyJb1sjSwWWOXTjLuRt0DRvTr%2F5h5sH7SXNxHfD%2FIQTsg%2F3Zoq1g7Muhfx4l9LUo%2BToUY7CQwSagu%2FHMXMVGmrZ%2BTUWyo4uubxlBKQqarUG7As9ypDjXAy0ElTJ2gVs7qovRj3HSB1kGkUgJTdHEXuBHoWMiVAhntHENaOxR2ziejDWSJd6IjtGoH6gsZ%2B%2FtZP0gQFiKd32EVtPW0SNQKzKTxZuoEdEDFcGZgAjkHUk28eBeDNxqZoZSW89pJG9WG%2B4dPSFltS3thWgXAyz43Nl3uB11F7mTLCqWj3HOo%2FxLyjgJfeAwpjd1fUsPLv5P013AbvmNE%2FI1wKigOsfYhTUmeAnJj7TUDRJYKV2tub6GjSJ%2FxqyYD6JVgISbEU0KUFpVMzlP0CzZgE3j96RZOhdBiYxnQFJkBu1LdC0MXElqspq0r%2B7nYyrJ8ZefK3xLkw52VEfgZdlt9RGk%2FEErFk24zB83%2F3FEuK2Vh2kTgVp5WY0HeeHqSdvsGMiqr0VmnnUIFoNbytdum1LyRzjXTft1lBbI%2Frq5ytlI2HR7dZwA%2FZB9ULt4zMHXoBdVabrQVsvj98nMNjp580GOqUBWIzAlyzWW%2F8RNboPpm4FAdF3VWOdB4tlg3zumTAN6pYWbDd407Y8fvVQhfJskM0uIw%2B0uw2uUId5cK7CtCkYNW2svHPYgyGoQIC34ljVXktLnMrAl%2BwuP0TST2QGCvBgZattKqk6HAXTgjsetqIqcUz0kE5SdKmt2q2pOKmk6F%2FRNryVhu1oL6%2F2yC0jeAZkw2ceGElXsF%2FWlconreoePxKmi9Ec&X-Amz-Signature=f604117fb43e708197ee62239fd625aeb309079765833f2e9e532e8bb52c061d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGCXETKJ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIDBsBLg25Zj7Ldn8Av90n29y5sVZuaSJEUFt%2BluAOw0XAiEAlcta%2ByWx6AK49RM9PeKcTU6j1qpV1Z2O2igMiDMxLaIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhOuAUZ0Ykk%2FQgJEircA%2Fiq8BR%2BIQNFEClq2ppoNnQJoJGs12mux22SqM8g3qmgjIECIBKzlGSt2vIWoJNF6GNp7GmTn91C8zsP21UP3SBkMy%2FJXZdJNeJU2BNuJwI4UfjLsAscZUXF%2BZAdiU6IGnA44Rtnl0G9R5l9t0Q%2FiOM7SCWgF0Z%2FdOvg4iCiTdldrRXmYhn1GEuiYLk0NznM7C9ZEaql1mgo1jbYwp5R%2F0ILyzyVA4x3j5F%2FfrkjzuSI%2Fp%2B5R3q8QHbkXLGPrIcV1t4vWObsC8AXuPQF7bTCLr0Q066NnIjU8rYBGXhy9o3I6x7hD%2FQJEQoTJa28uR8142a7kdZok1YewiWtLOBHHDWicyRCvK%2FOO1Y%2FyD1yQX%2FLLIJ2%2FA%2F%2FUYE5BE6kQohPHMsPv6JkpuAvt80ne13J%2FHm3PAJXG%2BVpmHr9yavd2ASXjOq15TQm%2FmJPAPr5m9TuGSL1bzlu9ac2Y45i2kM%2FHSfT8CYMmqzRAuqS9Fpu5g2YuTk%2Bi31tjJWHc8%2FAA2uEwO8pKbuBvGKyro8Y3bYdR7jlUIc2G%2Fxj96hOruR893Qbv%2B8hwdyP2KYFJIuRaP46nHPAeTi76apsIhJNOcnaZ5gt4xeBRDElXMozFbWHlAw5Efwu1x4Y2XMbcljiMO%2Fp580GOqUBqYdw904RTvBbFvfZm%2B8k1j8JaWjPYjLYXWuBxKrWnx8zUDcA0WR0RAFMorqHC0YelTlEN4jzuxiCFghOBalQMRn%2BUDFe5fB98Tdd5VnXf1S%2B%2FxTmR2cmklBsnAMT3QhIp1f3OcyxCVvN1x3Eka3xPRCoT47djBuoj9LwiXAhacmlKvQ7c0r07Qt0UcroZfRXvoX1tmdtk6zp71mQcy4P837BND6e&X-Amz-Signature=9866dc21e5ea88825433054d64cd24ed771fb2a82a117de3a7d34266e1713abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=5bd9843149dc815d9d17e5c14c098bfdea57d882455e7c963abecaaaa23f4d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSRFXRD5%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIQCHRho06DVmB95TctgQz%2BLFhqQUAe8rFimJFxomZyhNtgIfcDooL7K4PVHHCjXyvgajQWULwCV4RqHX1WN82HcvsyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnW1qD30qPD4Ax%2F0fKtwDfVX2mGulAtJ7rRLVikDFHbnUcvsoCv0S9B1e%2FYhHuykVIhVoOnieAvamGVnIcN4YqmxoQlTWQritQtqAHGVAWMmI8nOe4aubtmxOin9%2B0ykKy24Tic%2Bix%2FhdaoC5NAXQuBaHyR9BKaBi%2FvTyN0y1e3uhNCWZ09vtk4mKY7HWNxuetAJ%2BUpcQgpuUKWJZYEKKAAuF2L%2B%2FmCOc4gnJqArWI33Z5DaC%2BhpgP9FlxQrRoFrng4NroFp8q%2BEWD4s8xz1vFPi4qVsyFBvGZ2ImLQxO2edObJsXfKOWoChBycNC4vkGMzNwNjMFYwPG%2BUKEJVojgmXa1NLRogcQa5RT6ieB3YH93g5Q5LGdwuJBCIA01Tb7H5CCxNIZ51VBE6YbRRlTSxFPhf6EF5dD1MNoW1bRa6yjFCf0Pvj0Mu3Bge3HFG9ciwlXUsA7DLex29IfiT9WCU29guzGo4ER08G%2FOHYe3MnJs96zBWoGibTs%2FjK6rulZ09InN9IOTEZCYQ1wzwlr8fWmdGI1BBeasCMp8j2yxn5SlPBvocMdr8mjzzkVU6VIBoGd4YB0MVOYDyD8ZHEttkOH6HFjs%2BjjUh6DHyachgJpxgyOFiKA7xsqvRACf1dmXn%2FcBSGAuBX90DgwsennzQY6pgF3inWhSDLfK0BrgS1b%2FbvXadiQBObPG2DP%2BcZhaGdWzH6MOBYC7XtQcV6B2QwzQVETtZh8FYQOATsieCuHEx1Qq9IV%2F3W4jtmKKmMXhc7%2Fn92AOYOCBY5FOuSnae%2B3snraFm%2BKhDJ%2B4gSDCIDl3Tmu5ePWZD9fwGmhCOht%2BPWCV6S6SjEmfHE7NXDBW4gGwc2ktvNti4QQX5D1ku1xZpQPr%2FuMfhMS&X-Amz-Signature=38807ff85c35dabb097ca21ae48d55c875f9fa5752e5fcafbe92e254a636ae2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=f7221d054cf24020ff87c19721fdae108a46bd754520a92d19aedf76110b1b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BRLZFB%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIC%2F7eWEau144rdG8jrlumReIMlK5aaoySL%2F4czI55yl7AiB%2BEBY4YqCOIcuIyu6AcjKgQrA%2FBvPv3NnjBAj13O677SqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEt24XJqBh%2FgsRBRbKtwDMxhkOLDVGEgewsVQrOi%2FRycfYqp4XGOO%2FOieWTrFrOKQyHdAfiaRyjVho1VOwM4FlB2xbIcjU2DFrTDVvoQGEzrRo0T%2FYZ%2BGy1Hys9Rvk%2FtzNnhGJeNsiQoaZ3ZUJ6fAxzk4ezjyKlRLpGSSgr7arYm0f0GpKvsXBiGye%2FqDq%2FS%2FymY1IyJHO6RuraN0NFtbmx99vmTemle3lDk1qcwqDWcm23A8D%2FsLfJNOZ8gF3BTBxtiaqgiqa7oF0KjquxenvDWLshsY%2BOZOTSc26O5DehLnd5pIx4ioh0fhGqOG8OcA56FfPkhlnbrh7E8WTyzDRYJfFVf1kYpOXoeGSwAqCLCRLk7PiRdEtzxPi3YHwwXxl05NzG8XWJPPyHwl6Gi1BBS8xW2T5BBYa7hOB7nwyW9rATE7XqzEFZb%2FzDQEynTeFWQnKE%2FMwVgHKW4TgObx4OGTm%2F7gp9j8Wuuom5ESlnK39FwXqHopN1HHh6RZPGKjKZTbcDmTy8j5O86f%2FjC9bQHyuLOlemYfFrGXkTmJyZRoBCXffolWJF1jvQvZtdO97OhySOFsprhB8w4Mzkqhfp5mXZJs0WegJBr5nZfYYDXDn2u3a7uqn4sbg9AfyxNjwxwoyfYAS9OWdYYwxennzQY6pgHtNI6lKE0JkVBQLCakOdXCnqHcVi3GRxOnUaChAMAC9yKmHARwssoPRe6Os3yUhIb2Qh1uJ4Z6DHfGN4Ts8FELtFHUeFFmuqE1DIzcpyojJ79hUiwfj9igmA9mzy8BzGMsC8G3e9Iw1srepgw8q90cH52EGfqFW6NrFrQbpyYR0LiPegNibCFogPdb8xNu21RBLocyTNIO2Cnwcp6Ic0Iyk46MFuve&X-Amz-Signature=a36dd74c41c7f3af5b20d5d5c48061755a8a1f7782996b955283b0c4495b18ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=e594b7a3991f8ffbaa64f24d4cc8d0f0885e47ae1fd5f5dbd388aeaa82eb4044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LSAZPXU%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCgpcuI0LCvrtijZm3yi85l8d7RmNnp%2Bdp8XMUBUZ8oSgIgf4Y0%2Bkdd%2BVwgqWFM11Vht%2BoFGk68eTU%2BlVzA1Z3bHhgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDCpUIXqJERHRiDKrircAwtHeiNabE7%2FmiBvJpmZg%2FKlm0fJyzdZb0XI6geEjlhY8FWfdJrcl3eePPeSoA3gB6IkKW%2FUtx90Y071qvpBS%2FD%2BYl2koq5r%2FiY5gLUrToGjU0onoFiaiWfoIKyoPqB6peU0x6TCA%2Fw84h%2FVonl1CYK6S0Rsp9E3XLnXslGljIWgAvrnEdRu4WN8Ca1wMebIS9KXehA6GAGkd6u0f0mRXhGo8JZWJdBiB3Rqu95wW3OfRy13DXjP20Af5ffkVbOUng9Gk3VzJeqaJ%2BIMmeOm5LcpWmi7xGYD3Dp1z9jBpO9vGs0fa%2FFsSfa6RKxqtj7UkxJqlNQaeuMUwmKgTN1uZDs%2Fb0JcEXKDypbStt5AsP81QySK0r%2BnCUFIB8K1CddTPwbJYZHPVqj9Bmv%2BZa6kCq4v%2BXZtuLMr0fgBfhruDuN1ufTwh15saomOIN3I6EnuMDWLCE5infB5tjH4bhDVGSZm8UF5RTlQF2hDZH4%2Fq5lk%2BT6OJ%2B5bktWTpPnuJwgvQ%2FsDyfc7GTc4QyToiKB1t4KGJfLsOOADfGJezer4wZi7%2FuOMoEOYcT5lsUdoSBY8kzsHOBIbMKFjbSOjDT67M%2FYMQf57HGPfpjx8sQMgHCwDYjClvfuO62SYVOOvMOjo580GOqUB1aP4sk868Em%2FvV4iQ9YAyoRyr%2BL2zRSj5EsElpawoAKzm%2F1RB1YpBgNxSOZHemwzQl88diReYllqleKjXmMiwPxSSMN1NVPhXbCvlCKl4TojrwkLYd9IIf52zCgsQU9IUvsOXCoC%2FbzqkW2q6h8AaZ1JymPxtKYMGqqr3vaRjwh8UJCxmeES6q9Ij1B0mI9rDPfrXW3M7kki3aDubN3Ov3uStGWw&X-Amz-Signature=66b3a7010c8d5c6fef0db0248ae860545852888cd50b3ae82429304378f3fc43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=655f628e1671bc13109c21df7c9c99116b015336b9e4c054caa801ed91c5629b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGLD2SWV%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDQTkVKgzibMQz1dV5zsJD72sj1o2Y9RS4WS1rXYypfBgIhAJmFa%2BS9mc4mWORbYplUsju3weHpil0GsI0tvVtmp546KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5Chh3%2F6e5FEItkmYq3AMGRzYztYQIfnb%2BDjNVGS0OMB%2FbBkWDfBYqNXIppyLFqqRtzaMKEqYzxmWz4u55EqKKC%2F%2BX7pqf8fSZVgLm%2Fhf80lyCYHw%2F2oSaFXH8nkIWohEjgUXlCdn%2B%2FKXivsrscLnsH9RCM5nz7lNaeJrE5NCIr53rhIWZwPHTR2%2FEQOSkrtmXSrwh8K%2FFvdeV25KYFO3XtBHHZnBupARW4Z6XR%2BgimXoFI%2FSERPl9BIsUQz55S3Whxq8fOjB%2Ba%2B9fOGH17J9B84%2BcV%2BgSrIo0L7tSHyDwsqElj2ngrASeKXZOoXD8B3vDWevPWjkk7%2BDcXpHm6R9zyxXVO6RPHznmKYtLzgYfSw9s2rkou9s1l5Lc%2F%2FqL3M7WMS9NsQHDMytMfGMQJwBPool5PUIpHM3XTdqiF94nKpio%2Bbv7yp2oNTE1vNlzQNHkRsvWdZWB6MQnJgWQLOg05eXF2XKEh1BESvTe0Gtlu7N%2FMJ4ohr5VR%2BaE6Ea8wyh9itTkA%2BLk12JPzbe4N7whUcj%2FpRbEgALBkhZpzfhfHhjNaPjR6mKMW%2Bbe4tPlAl8wjj39zqTMCujNgxY6gvmGGmJt3GcTgqIdnVTU5y1x4%2BFQoamEI4wzPi3MvP1vO52fGY1Zuv0RH0hySDDT6efNBjqkAe1Euhf0LcP8%2BhUb8B%2FUGCKnQmOIE8IY%2BCDXgZt8ElhJKgANnM%2BjbfRI63Y2o%2Fk1QUuId%2Bb10ltK0B190jhx2A5WwTM%2B7reP4e7Z4ZBTx9D2bQsBPYclH7qCSfupyI7TH%2FmRHz%2FHdwttDO3ROD%2Bwtsi6OJTFnejOtR9r4QrHbGNgErHe2QxLJA9vqhT98%2F59bvFD2GJOQhbNKNy9yULCtZ7XFO7P&X-Amz-Signature=30ab00d6b2a1dfbc9ace8bf8ee5f765dbb378019ce7a85612054b2e5094fdfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=298e8ebb5743b2aa6db0a7d1fc0362a7c2a9f20d090bebb114e5bec68835321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLG2MB6%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDfjaMg5zX2X3r3eC2oBtFWQxG3z5AJRiWpbJRhBswmnAIhALqou6426c2R9i2DF2bcLadFZjw5%2BJW0yEpXF9is0gYGKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzqf6THHdKl%2B%2FzWJRwq3AOEKropismP3DM8qjSgOekhS5q1dRYm%2FyVi1gzVBRnkfCVSEPY%2Bzf1N3LsE1oE5twT3P0ls3qtY0%2F%2BFGFo6aJTOMXClyPfGtnJJYHTf9eWkpLaiyUafqX3b9apvDcPQ2mvDDgNYrhMw6hXec6l0rzKDjBar5JltLDr3kxoUMavDMFBbbBcxByIIVWVmE8Nof4azlZXI330Vh7lcYQXnMi6DLpftnnZgnSCxTLuUN1BrzuDl3ogGYWGIgqxpU7QEP3kyg9Tp7tYjR51lZhWEgjP1UI0byrO5oGydSirH1NV3ZoW17x%2BHxU%2FLjzuR33pzgE0NEcL9CaTdVV0Y7LH%2FRwrhINxlO1JkesYnR6%2BySRRcYwuV26LrnXTm3MetyPIpau7GOJcIG9F%2BHZNimDFqepLo5wdukeiV%2Ffha25rQz%2BHsp4vAwVCVyoacFVhU71vCEMHYz3nmXBfW5tdNrg6bKsG%2B23ffBqwyBWOztbK0s58cgi0oaxm8yNOgps6l2PKEgGgHE7T9Kb%2F2tnGVJz2QrpxDAYL08jdPjLkj2AQeX5fKMPtcCmhHsXItz0YgtVsuOaemqmfFjVCnPlQxtcWRcgEFjfQAc7rXeqYnQ%2BpZi4lKuAwG05rChqYrffeCbjD06efNBjqkAWBaJ937leQQ7zE4TsmhHMRvsGL9vQVW59vnQ46xruti9PiCjV9WWTk3GLVPtdm5eN%2FtUrnM5xokDkyDahx8AWBOTIzubos4GpxhZ9v896TzynoMensF7xp6oSQpuPpnVkl07V8sgq%2Fz%2FMKa%2F%2FiplXLk1surCB28fZGkAGaAJnlFoG8kxPKRcjHjJBz46R8iBEihAFD78nfOLiAJmvD5ICAOkctb&X-Amz-Signature=435e0208a5a6cf0f8bbf88cd0c47259aa4102b2bfb78775803e1d9d1f813b547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYQT3QLS%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBIqh7XXEBkNtqBDaa66Wp6pWerO4UsyGXuopxO9iX%2BnAiEA6vv7Ut5BsAVlf6vABtBMgsoUvPwk8S8fJF0%2BLfmlq7AqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDXfobkmF2QJwNxpKircAxg9ZiQbWshCQFLBOlNNq93YQR3QRu%2BBxAI4LvPFOFR5cMLoQ9pXaYlAvp2kkDAMiaxMUmeOSuvXkwSA7LQM264ZYHTkMXILdZLpqfjs0MYbd4Mpm6gDscWCEvpy52HGn3CXyLXRneIz5pGmvXW%2BDxZy5LOGyTLypLNxJc5N0IIabxHarZAf9rCqpb6xN8MoRXMdxexua1%2BWaoGSi%2BKbZ7uj3KOHa3OVzcLUjU59QqCpwsQN0kM%2Bp%2FkVYS6zZ8I2T6b2KhJHe7gMCrKEfErj4V%2Bqqm7lDheSHwoDjlnB6fZJZf2H%2FYk6Fdo6xWEdriPJOkuv18RM%2ByOd13%2B0IZlrCeuaCTXcN8MCYVd3O%2FghtA%2FTO2xpbAjQuGtn2tSgk2YtRVlZOacokWS%2FuNsyDD4xrbufj8qJ99K%2FWQGreGOwAui2OczJ3kTddQ%2FuR%2BUnUSBpLY3GE7VsN6%2FWvkoiGjvdyf3yWXCP5m2fnmWujwN6K16nxVNSDkoLJGAUScs0afUlFc4DAJedcxipgVD90kn9N%2B03b6l8RVIN1oz5Ktnfaup%2FND2APjXyr7%2BHzatz%2B8HwloA9jdcnqjoXfCWeygA7GaxyqjbAMvRG3ECvoRiy%2BEZSIx%2Bh%2BMAqXOyRCLROMP%2Fp580GOqUB84uYNHo4bGKBHGOVsCIqSCxGeYt1YUeW1SNx928dKa1exFmr6KipZLAxdz%2FwHmIiL0xCG1dWEB2PPS9%2Bon87fxz349Yz%2BjjSYMQbVE%2Fp3X2U652S7PaDM%2F8cOKqX1%2FKGNWzHe9yEVW9e0LyGA1MPBynbMrtinQvUyWJEl6zm%2FhxFI22iT2Y9NvZerBW8rq7vu030%2Fhp6ya0YuZJLu2q0CapJNd6S&X-Amz-Signature=7a270d6917710ab9cc9df8474b3ce605c2c41123a5dd3411f808d07f64be5cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DCKZKK7%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIAX9LISN0epJDCqgCpnMzXrKrLoZiHm6xwNUD4s2iPeXAiAclJlH7e4QNBfDRNv7qDFUqMJZ%2BZ64ffxWEWLkb8j8MSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDeBHJMBUD35zvWf5KtwDZtG7avCHgMZrEXes5ho%2FPiSD64jKbNPNnVEphnEjiudf9VuYebF4cuM3qfNSrm0oq8TakcG%2Bk7MNHHQURQJb34Cbq6W4mt4oQo0Cibqdr%2FCwrPDFoFQnZaBaItElIOaAG19FdofL2OMvlEDqIziuPcQs1EOq3XCs2LPGRb3C5qe%2Fd6RYfmhILjnWmdFG6PSQztwyuSkfemDO1BhHnvht5UmYlzoXbD8A1b8abaG38tqTPUwizAPl3if9ZJPHS3pUMomIQui04YPBVupML3dQEGZwCR44K8AHmNUIfgS%2FbQ4OzFOkc2T4aJXyqULb8EOn5KZdzvl0obeFhBTupy%2Fm7SFXdVK%2B9pGcn3b4n%2FrhH1i7tWx38NGKetGns%2FwP6eMhtmt5srMkcZA7fuW3nqNkDYHbg5FIjusdqyw1Q2%2F9sRPGgeHLnvyvtdbOrE5od4O6ya9qwvY60bMT6p5M5Wh7PlDNuSiX3eQA81RqOz4QO1gp0v0MKmHQqIYpt6QHJzHkDbrBe3Pxrvh69x2K%2BT2CcAS7HfQ9WCMz8GNlCnLJxZ5CZTupqRpyTZnQQ%2FJZST%2F8kziOLlYyc5eSY3jo89V%2B%2BB2CQOciQy3uAqWMAQ3buOmXBsMxlANkYyPoiLMwg%2BnnzQY6pgEVzg5ADjPtBPxKVPu%2FFyVpdLHgYdltTgVWD6CkKAHnI%2FApmyMUAkpcLZcl767f1PC3FpZ3JVRm0ts91s%2BdxZJcq%2BOtWc5seUHvRxRwcAMawGeU370GlalHltVRPWzFrhDDUcyNsNpkkOiksuCo4f4b%2FOP86LeJ2rPFSOTPqoa9V%2BCAmCMIJzMtsa1EWXFYkaFyx8nGOWv2Dy0xbBaBWQLfA0dFtjbu&X-Amz-Signature=fcbd2406d244803065c75cd94ca9614404d7456f0bee5a93eea5305281719c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=a11509bbb6c2e12cb6b03e36460e4fb5aeafe58b5cf41ccc04c262cf15a1426d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZUAC6L2%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD4bw%2FHNfLfVnSweXSkECpB%2Fymhu1pjzWtVGzpS8%2FNm7wIhAJM0ffD9%2FjNk1ZcAarkMU%2BnxgTu0tRC1jkJyBZK2rQzxKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyPDk6RxQdZlFkx3Iq3AMgRPl6In0Aqb%2FOHkTVEu%2BM%2BhUMcmvwqdZR%2BToN35kzrmkZcuN6T8ot0PrFWRsCaPeNaWnem8p2AEeov5XHNM92uZ7BvSYC4TniJkYUbxz16BHt2dc6QkVR5vAP44rqPWwZD53Ac7P0aHwk6s1yZMmbB3w4%2BWK7jXNte7zRs%2BWiUeLCElJUTqzaFTvHSD6KocfZa3Ni9KlJ2mt%2B7C0BnbQZ8npuKdQTuKJdaGCmM3on6m3ApHcCZWdjFS%2BmLzLfF%2F1i39fRGwsJEvscx8gEhC3x2Oz2AxGVSBXdXyT1P9IEOiiC%2F86IuUWgzLb6wz%2FCYs0hB0zT%2FPY3ncgYK8znruu2x0Fvb5dVbuk%2Fph%2FFAh5LfPesPoaKHQhV4ktmkE29hVm79glO8rtURzvHlJgJbkahQO6OdIcRkDbXgBspFA8RyoNWMB1SexWD%2B73p%2FOSTfzPOam%2Fcqe9tf8sQhBu%2Fo0UqE94brLMH5LJTzgRZr1QQ5EHLwCh7iJi0%2B1UdM777Ct3AcM0hGny1cTfbrxdUEfUN3%2FS2UI4%2B6ytBY7Fd8O9P4R6IMuf5klBmt8tUgGasCzWIvdr0icxSK85ZOWIz4LiHOZhPng%2Brc%2F9XHQA6R6nqfRd3%2B28FJcyEJVOv%2FDCj6ufNBjqkAV75LnbyYfKvqjW2B6BqbKacSknQfs6l2uhLnnSSNyT4FArma4cZY6faOw2iDjqdBv7%2Bar26g35zkG6js%2FS4C5FtY77Jpjz%2FoDgQIFtgURLOnWRwNDMBUpX5BYTN80JuDvAhXV9emWXSGCc9hkAzP0XbFFrkhP5qDUGo%2FT50YxQjLWlWS4dk3DOJJg%2F1%2Bycj%2B1HY4M61ZxhIgTyQ%2FIAt0kIp5NFp&X-Amz-Signature=a3a4f2d7ac222b3f5ab1ccad69fc45d2da55ae9326a76cbf2839a4851088e436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=76c64c40d94d829920ad61c5204d3f1ee93e11bf95110152f0ccd5afabcd1a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=469f18eca04f07e3224909082ef722ab459d963c9ff8746d66aa605178f5403a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=9012882167a0a2b011f64e3c17d2c950278c55ef0838e2f6aedb8e8c4042677f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=d5e17e3af4c8aa03f6db3eaeb26f1b88fc11fa99d808f06f28103ebd4c780912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666F4VFFSM%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIGEI%2FcknGXQyhVMcZkW0Vy5qtC6%2FCyIjN0m0q5F9%2BxIUAiEAoWSn9qVQKWzFg4LJZ5dyp60tkbM%2BNI3QXBzn0dyh4mkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK67rUx64xE7Km3IZCrcAzkzSUUHes4dQM3ehTNJ6X9wpDDH6vl6w1ajiDVN6Dzv1VVsWoO8rQ4lFUxntzM0PxF7MZdJQQFFiB6IFDrTCOnrfYzp2IzzfgCV6qGIgIpspVUvSPbQ8SFQ7U%2F%2BVg9YxCHWsqjTFuFIfSYErPdURNV0nxKmDYtwE6QbolahE0X%2BuTqG2xQnCWYZWiuXBnqgOA4f8uC82pnTetKq%2ByH7R13%2F3xyp7uUfhzx%2BqCHqVFJ9jze9i2MET682gVTqWGfBqaivV6Ns%2BXRqZFSc510XAG%2Fz15Y8B56gsro0tiQ92vfIvM1CV8siDZC4QQ%2FGVDxl9IIteGg4dnurFwWz9Bt%2FdCyeGaEjJMp0jQsFYui5QXFIP%2Fbjv1zKrlbaxHBUZUxZIxSOdMw4yH%2B9bua7koixmLqXkXczimyZdxVa8jAF5nZKth2hKO4RWya38v%2BbH99FLMTy%2BKy%2FapkozJROIOyqPYzP6yGdXwLeTSzwRv2b9aFG6mx34jjJli8Q5M4J3VRUZXmm8YGLn%2B%2B3Sv474H2MA32Spoy305IuN6H%2FyH1tUwn4Hmyp%2BZp%2FyKSsqWd6IAzrKmvBvzpAoj21aug1hjA2pdwce2a%2Bh6iwx6GIXUSVEaQlIE%2B5HlQgJqWLyNDMMNTp580GOqUBT%2FaDhdbpABih9lwkRsKaLFnvksVUkeI%2B2KbHsKXRJ60VJV9o09GudnCvoPS9VIFcz922WxnHgdZNVGcp61ISkuwmc3dmAoj1IM1E%2Fp8AWVo6ZAsYaJrA0fZl99mOYGZh%2FvN3tD4u5XE6N5oSKasNspW%2FOgPz66%2FzP1FmGVQPWqGxbSGDTRTAq7iWoiwJwgWPCeA2AmqnVZWtLtwV4Eq7hnifzBH%2F&X-Amz-Signature=b7528052ecc9fd4c96666f3d7046a0020309b07b0175b3138add2a549734e2a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=e1a423aea62d4e9523cde4dfb31fd95fde02834e774f9c288131c51e6acfd7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=da53df09030cb265b9f7265a031cfedd001bc422b6d1f293aca66ca0408e9f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=9012882167a0a2b011f64e3c17d2c950278c55ef0838e2f6aedb8e8c4042677f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=16c3a583257108a0d1b82629ace3cfffc0a07e99c15dc59a959c46469c2f9e55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=04016eb74e82b58d7ca0d569ce3437126f4c48c0b3b5bfced577be5641b3add6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RA4JHPA%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDTCmVdSSXoLLC4joZXwEREt%2FARRofe5MHXn%2FadqyWn1AIgNpApkqRooVeBxwKUyZi8U9EqbfFgE1SDwWrHuFZ7JycqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvTv11JQeGymMJGsSrcAyVmubY4nMUWPfHCpRWkKT0zV8fV9UF%2BFUXRM9VLNjATGrPnePRykik341UH2jP4e5mWQ34SXWI7AytOJgjLkrbVfJSnVRJ0q1GHQUkRiiJ9vBQptTfA65neaW8AyHesRWX%2FkgHHKCP552XJehQoHHMlMxIsyrrZ6WRwKgwm1laj8%2FOLTx%2BITmoZu0utRPOKvG5g4Q3X0rWECKw7wypUOwRnlDLnLS%2BpnOzf5VvFkIZt0tAMKs6i5mK3z5W30%2F89KsHW%2BaSeKrcJSe%2FaAKGcpkXFs6vIWGMQ%2F5M%2BuzjSD4HbuQU5qbtW7Udtl9zcTZz1wqWhlwBu0AeUQaglzLeqWXhozV0230LJhJzBk%2FV4jAcyJqrqeeM%2FXUkZ%2FNqqUJmSELRXnc%2BQs2dUX6OrkUc10kbsN2Hjy61dtitf3XS1yWtduzB%2BqWxZraevAQI%2FLChtC2NBX1i6aeMMNrrsVINj3cXqmgpqsOOoMP1fE0n5%2FgPaHek2Rt1wN%2BWSoWjLXP%2B%2FFGlXBw83s5AFK1XCWjqouF%2FlbccPizr7jyLhpq8OY%2Fa1zh6IdKz5SUjWr1hqW8IDo3XUyqlpHST%2B18Y8u0lwXJgUaGRkDVywzhkUiH0LvpVagkV3Bfr5uUJjeNaGMN3p580GOqUBmFJNy6a8vt3S4n%2FzvNSG2HlVeQ8%2F8FML50kq75CQxw6hJHSHXPWkx9PdpIHaAAEGBxWJKD92pgU1Fjz757GpA1Cnsvpzm6eAtmPPpi0OFGO%2FwAh7mHJjDx7Jg%2Fr%2FytMjlmpqQhNn8Aw1QzaK6Jo%2FuGOitV4yxEkyrOXt80aJg%2FD3ox6R3t2KKMAQ6A4ThIkUZvvC1Ob93ADBZ1BY2%2FgGPJ%2FMv%2BnA&X-Amz-Signature=e7cb6005688c795d8e81b009b459dacda2358f44520bfc659508eee5c8a051af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


