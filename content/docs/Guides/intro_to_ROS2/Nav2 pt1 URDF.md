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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=dcaa5a056357db474b111a274d4c3694fb55e2a0bac505c4d2cb99d2bc9ee3bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=3f4b121db96a6a00f0523f46fb7efd77d52b05f627b4975040143f4249d1bfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=8e126e8144d5332170571238d069c25c07dfe1348ccea7d32ba078538c0a8ee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=7ba07f0f19a33979d941a77d08c4c9078156d55e1c6d9974802d93c9e6480b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=cc6e081118147160459af79d96dc02d9b6b159ce2511e0759feb8db7d68a5039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=68921b27e75b8e934035ceceaeb87c6c9e49caafb981a1c86fa00ae590277805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=b742537c1dec76dbaaf65873710f359ed226b96e18d2e7c9a24f0fd00a9aa478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=d07d2b9a182033f82f2ee9130d0999ace13653f7ac2a48c324a7c24482a14e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=3482fa19260f7daa98cd7cd56a3e60695e3a2c3cf5e69136315ca41240f3d871&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=eff37538f32c75cad2f00e20190d5b211bb126398a57ce54b9a5eaf5a3c03622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCXDKBV5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIAYPO1ih0nzKO70oj66QFA8a%2BGtJwy498TcOGyjvhMLyAiEAoNNbAyEzrwZlgEWMd6vcsrKMWg1cCPrqwXPe85QmCmMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHQ0KqiSxz%2FjXFsfyircA7CQ2yRWXO2ASMu0BfpQu44%2BEk%2BnGx%2FMXZy5Rph6kIclb6TNuWRybq%2BV4D21kEmnqsaWkLeLK970GUXYeWLyBNPBDykwij1h20LImpLCCfJv0XBdl87gbVrMavi7V9CnOrWFDiABPb9yTz38XRWrgwSPvamqaXvHcd8lMsVurk0%2FlG%2B2CBEzDve03nih8%2BpDgDpm93rC7NOuHABBTVMEwMysGcmDh2g%2F9MQbyXk7PpS10TLxhmxQSOdN%2B1gQvYJEp%2FFNklHRMcBr3tlEtSY7%2BNg3c4feFpd%2BIEFsJ9Nk1GLIFEOu%2BVAN2rhHVUaqSVgUMNQrlLAUlNuMrQZuI2EXmqXpbnJ7ofRT1TuTdWbO%2FMm2Yk1nJPW2%2Blk2Jpbs%2B76tiP0NwqZh5ca6mKfc04EbF5eIZbmLwj0xo%2BnFpVHbs%2F4mng7dDdsxaGslUq5TjOL%2B7XfdlHwcwkPMj8%2FXFK6HhpxtM6T0KygsZ6Kzbb114VG8Rbdyfpr5HWn%2BAU0uvtxVXRNvQkSEKJmIrUrJrVpRqu62jjFq4nEHEOl%2Fvt28AOc6Z05Dj7fjw%2BM3d0y5LbSe0yRCgsCPP1DEC0wRgipG6DEE06jyX0qID1GWrvUe%2FJYzDZ7iRTn3JYdwkJo0MNro%2BMQGOqUB9cA3xAV2LkXRFl2OlNn0q5GhNSXIavomV3461U12533gprWVBBnLMsT3uNrHzYcNxR8MYmx1aOQi1DEkop%2FcxWB1Bsdxrnev8oUtk67UEZCfSoyjSchKbFCEwYxVHT68PSBDipSOOtVIJa4gOGuQ9RNwY889iTLo11IAgxz9dzSyn%2B1YE80N3L%2FLNgamvQ6MSTHjFpq7EGkfCIWaaXnPt23vqyAG&X-Amz-Signature=0177f350d058a4dc639cbcc924000a580f662ca5ffd5f914a054b679ae55bda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMLMP6D%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCtfC70RmcVEK2ya4Lbn3ED5rSD0x52jymBiZTXJtt8bgIhAOIXBE6Q0eVyyKXSWRUM02Zqik%2FqgJk58SCQ24nJSK1wKv8DCEwQABoMNjM3NDIzMTgzODA1IgwjQCfA9hYiwfKdP2Eq3AOioLVtHk19mp%2B7fF6gxIeA4Bza87lAdT4h5JnOkfBhhICKeBtpM4aS4aXfdeSKyVt0%2BqS6JXc%2FZFXqklYMUZ%2B1k5tO6DfUq%2Buykp3UrmW%2Brbb0sdIS9mxauyC8AsFSpAvzIzkmY2kKPSIUQD%2BMuNQ8BeyP%2BCI8L6Qa67GBcuP2Ag4CKPX0vX%2F6VXyjwd439mx7I4N2vx9BudCTkC5OkNzh%2FUhoC%2FEiSCM1xgYei65gt%2BG2ElSnjPorrsRGVwSqoVDGXyLfftUljgIDugB5PrSZzCez93TDQ97Zu7nZpDn%2Fun0VqTqzuLAg3LIosPZujucqzxCHwBqHJC0OklIzh173PsfawPtuKd9z4lX6XUIAWSNoFJZjmlfCZxdrtXNN%2B4nRC36Dm%2FIz1V4TuflaZ0FZJ8ufc8Npdrw%2Bx3iFo%2B1f2OTg5vp%2BngDURIDRDnr6MXrSxjfqryECqYDF0Z%2FWIarSHy5dKFpBv1h%2Ff45VNVTPHODDhK45yzAT3sRv2CB2Fbk22m%2BmKpgn31iPkZY62yaiEqr5tGAbsSUnXV8vrF1%2FnlKjhDWuwxPcr%2FdAd1VUi%2BIsEc99OLpnJ4VhKO7I9WPh3zhd28mfEkWgmkKAIjNwtQIS4UDgf3HLzZMeJjC46PjEBjqkAeX4mCZACxxRXHklM9JtqSwtK3TMGWsY%2Fglz3w3AV41%2Bjj9hQwSQC1%2BMvJfR%2BcuybUOUtLlkBwB8KzimDUffLVSRRUk%2FwVFA9gEw615TyurvXaislD6T3hZFktRobwgKQjhM%2BOrU1cwLLVNGYAnL1rarapJAKkyscwfkKXj2sjsf%2B4zcP3GBzLbBplqbPEuGwAHeDj1ee1iUUMPQ6hIE%2Bg2qo56u&X-Amz-Signature=24bb4e1bf0e54df656beea7ae9090aba894655fde93a7b8497acc4512495cdde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG7YXDZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDu7QNFUwJyWvJwbBkGg%2Fe%2B%2FH6iv%2FgmBjJ9gdYfX3pjLAIhAOqx6vqXbMg7tV22H64Y2oBOdjMg3%2B5ZzD%2F6cbfCAIDIKv8DCEwQABoMNjM3NDIzMTgzODA1IgxNCa1bSYTQLhcS1H8q3AP5Tbfbu77JzS8IzF%2F2KEDgNK9o2QG7l%2BXaIa5uytWZUn3EzkVD9FDGcx%2Fa7%2F7kXe9OKpSrcEL3H4ROfhEDz2YrNiNdQQ4kzUap7bWt7dT%2BXIJ2panE4kYOcXZrxnRVvGU69tgh2FQPK6nTQGgC68%2F5%2F59gy4SBjcaY%2F6gIi8Wz4ZCqKzpSSo3Hm%2BlFMcGb8LSZIshmUwaEYBKHD2wNrnNvY7KUgi1WaGm4UqjSEGJQBdayC3hDNOyNm94Fvj4jBlKBc8%2F5k1PXnqt%2FyS0%2BQeDk9a2e1%2FAxnYj83D5rlJlHQI7r8WqecAs6EkbnVZjAf6s1PsTI095MAMMC9HPZuGH9ZzxcjSx9e80o2QavF1ggBEIsSNsnZh6MqAalb5Hc5gAW5i%2BRfKKs3IgrP%2FREugWpKXYXYlMNM2RE5LEeM82W80xosQ9HZXcIJHlAvGFhibYVtKFVPDTWMHD8wIfKfNzlhkB%2BV6P4bakCUePYz6Bk9X5aoAmlyhgJs2G%2FyD9c31cbMEz9Qw4DBU10w2ZbYpzB%2Bs7PoLFyVzFA6GBKTgKEEGB32Rw48acA0StcDPxVsZqqlYBAhPqWDWiHkw6NSQyrFrUf5ddZObKgtz239yxBflb0hIYyOCDpP2ThBDC76PjEBjqkAbZI0MCI%2B6xgt8d1fl3EYUyMOjBTyCRBQ81bDzBJqufsJBiCFCtvzkJX2R654H5nmMh9eQhcbok6rcJUQhOwsb0Kay0nXjKrQGo6oQD0Acw0gFARQjRm0DEqoTce10YYYA1%2FSVE0TqU0KcpDKIjhjpR9rbbo67HFzMqU%2BgCqpAFhyTlWwMjCLTRgE7k1IDwlnnHcZo6ou8D6Mol3Kugp6JKSqlpi&X-Amz-Signature=ee20a769f10fa8c80d15bfaf8c1274a3bba2f59551703632204e6adcb23e7a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=efa2a6dff9fc648c502bdb60ee1a045d5acf6c71cf123ff56124857f4fa91753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643IZT4XZ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCjlx9NMIbhi%2B%2FQCwuNewp6j5YCrTwlTMvoV07eXrJeBAIhAKiDghmoSf2sDfOBZDF0OEDykeNgCbC2nXfInZ779n%2FVKv8DCEwQABoMNjM3NDIzMTgzODA1IgwdVI4r%2FWWi6epUufIq3APxQQMjEmv5VUA4qgnZ3Y03xxUNZX7fAyg6%2BNroNcWCVGB643qDT6d4oGdYWaphRFuyJB1haOGht68zELtsTkcjHuc0mNw6Sgx%2FFsSOgvmFT0kqlxUDQ4C7Q1%2FFmlQTu%2B%2Bjg2pk84H4sZFyD2Ou3R769OQ4VfySPnU4p8HQ4dCjr6UVzbJvf5cgExljE3QdHKLnihlaAlnMy4kPg%2F0br%2FL3%2Bz0l2ftooAIODB06Qy33RkrXGVYbJoLLmo8i0nUL1O6cBQJgvvNyuiq9nijnXIdbKTj1lAo8%2FvLUixwrsMxtvs0XO1YKJto4gORjrpt4QMTGnIXoYpGx8VdsFR36iiMOJZmfyf9kcBWOJ9NFYMyL6umo4C26q1iPd88DOZr6Vvwj7R3JLRjeWkPBoIiFhrF28m44fb6Ax2rftcdfiv%2BsN3LqCD2VyEpAML7IZBxk%2BTakyftgzK3sqLpnR2duC%2BFCIMXJmK0UoLZg39kkLuCfd62uzF2pxHeVmvvJOPu4nIOG41a9Ov0sjAp22NHnwmB1z8chhcWBrd0YG8OUHrf243WGMv5oFfMaNcybFJWTtzfV7h3vut3gdyc4LZnaL%2B%2BeribJErnMttAVF%2BmPaBljjsnA4DSiA3ahi5nahTDs6PjEBjqkARV%2FjCRur0Lx%2FJnf%2FxLZ0Ac0JgU0ZHmLlPKDpMJVz6mHzO14t9NhrBB4rm54wA9KclgXa1PsF86NXo3OlRM6MhtdIUILAMuLubz6uneLMdgQO39XBkYXJ59ucIafzUrHkwc1TIUJy0LKprs9rYZA45%2FAQoIWb5aImVRS67%2FcewMNuPBw92HeOV7wb9K0%2ByRgxFxwqc2gPHAtfD7RFhTpzWrn9RKp&X-Amz-Signature=22043b8181be653db9ae2e8e5751a66975acbf3050f5baf092e1748ad65c8287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=42a94f1c670553fac1a1b58daa836b77548aabf1a7d72db3cc6f100f1b06e898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQTPJUQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCNWyJOGWzf8MPbhE9OPjHqXLdEfxA4nIaqThGTj75C6AIhANwpe7gHExyYcuDIzc2x%2Bp8XXcs5ANrnfW6VRUCs8JDNKv8DCEwQABoMNjM3NDIzMTgzODA1IgwLuGqKCkqNGbTTjDMq3AMIs3Fhf134XpIkPPgPSS5oKSVF2TrBEwNb5iVet%2BBYYwTNarOAGe4AVb7jF37dIyrzz3on5ExVON7Em%2Bk12%2FsV5DZDoE1ZEGmO9ea%2FRIaX4Mi9FyLGNSmyVA5JcUsm38fGzgpb39zvO%2BecCExrMX9yfS48fo9SOkhFh3uNHYM5syEiFQbJiPykuDboadEkz22wcwuRDyYQIpxQKDwpzw3bKPGhCGvFSLkDXRAq0itOu6g0qhxSXbYSFVykEAy1aY4LyZB16eUHrwzDvPAqzpgWwgykHFe35968PYPnkWGpK77b0jjmvveT3AQWYZwb%2B0c9M6MvaxVX%2BvrxPDN4o1AVt%2BPyQ5k4fGiJ5BZn64MNiM8t2TWkw%2BdxLndJZwL8uco17VZ1OWQ9gBvdl1vNsJJXolMZP4OH2wWd88c5knQ8UyRz24xot4zpe9c3PFPrb98J8jbXxdUsQqmTlPJdBa2sfSMkG7ZGFePs5Dn%2FcWs1Y8pXVeM3bc7gBIEYUEQNTbZbuACiHSzg0h4mQmq37m7en0Nj7DPqSGGPwoMS8jO6QJDGKu5FZIdf%2FVBUKt8BvP7Ad5B2E5bjYjyg7cdMMI3tJpjLmQuK7gGXGzxOeuthWCc51QcBbuEriFYQdDCj6fjEBjqkAQCxopTc44rhKP3Gv4TCDnhUnulq99qFO2x4AEUmXPQW6ilbBiCXMOQXi%2FtAQL8Qfj%2BQzzWKjFgS19YHHx1qFl8nyz57iR7%2Fi7YZxM9%2BKxvxL7gaGV94PZr8msx7yYcEzQffAHQFfJ6N1fKFG%2BfszHmvTLxhJPOVLlcgo6m98cnFQhrp4BYBhhpxcwpE9ku9iMAxtNT%2Fww49g1pm9vyJPHxpkggP&X-Amz-Signature=324d0b61921137f7a11a82a7ec5044dfce2dbb95213331d1c6d95a7d1767de1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=aa8a5c2abe796cd5c8d1d25705eb20ee980f7f2b3d7fb71efa0221a26fd1ff0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PNJVH7%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHAhUt%2BbDsUppf3XqG1AGd2%2FVBxAIA2z%2B%2BXfH5fcIE5zAiEA3gdARMM51AXilQyHBXHmmyjc3Ic2E%2Bzcpm12Q%2BVZojAq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHHucwF4Le8TpMYGBCrcA3ubcWkn1PrHAP9G8scxsAjZdxmJMoUZztzj39fp%2FtdlKwxkdF3GWtBukDFNNxxmOO6%2B4sY7yIZCoIPErN5Ys4GcUQt7OD3ozL9Un%2BVYTbSOkvG7qzmW3%2FHh4%2FBd3xCXbvgVOvc00vISsyzOlnbBjg3qMuaLkqv2lrD84whEGgZS%2BgDDbAZuO1ClPhBvXYfIjTc9T%2FHt3qJEPIo8M2D3was2%2BJHkXXgBMTsSpjkphlhoDCMn6ahzCfYCizQ3AM3v3c7xLPSzN53MSw6F3pHtWIfvEgMC5EPKDTnigMFAy5XFo4NTrR%2FKncWNNGAHM8CXaC2UOX1Mu6pbrRFuEFCeL7qcVLf5kRLLtANjgNc1EXGKpQg6Y988%2FCFiwpSn2U80VOF8tCxCSSXMQ2i%2FIfCUg4sIkHUgZptrg2NXvwb2G7lSFyQN4oN5BYvpI2xugDHLPb5HvEYgGullx0r5UFetIV9rAY1mfirKcP72JlJqor68ZVhZkJMQtNiQnWF5lSAk2d3dL8e%2BW9uD7KZqu9Ntp16ELUqdgCUo84k13R3LFI45PbmaUWy7qT3PTVlJSsBfYNXaZ0FNan7lvrJyWW%2BRENYewt345UgY9t1YL7NjEAMeBBizxq2NWFgFF%2FwXMLHo%2BMQGOqUB0a7MMYoLU0T4ePxZr6Elj99hqaLotpQxuVPL87AGFYkzSoQ4O95T6OkOQchWbelwsjBZldcvpAVKMBZqXKtD3wmMl6BidjEkTTPz0kk8fNJXhFHf8Ky8HDMDb6Pc9RLtUoIBQj76A%2FKTBOGnzEDFxm308AWxBA17L5ud5yyJ8KCxqWrKcV8Azt9tnA%2BBJslRkFH%2FH4MDdWAeTZrMRApXfNiWC5sV&X-Amz-Signature=243c4047d2a02ebc9e1a47ebb7234156cbfc96cdb5218f0783ea65676773721c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=fe73de73d0ad658d67e3d5c31c2ce3f169e237df07c328f6ac65c2d0ab8693fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRULTR6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCpAbybld3qOKGXpXjyBQy2Cv9UvDhTmaBM47W9YjNpvgIhAOouPv2K8h38a49Xv9EttL7d%2BvZi%2Bn6Ko%2B5Zbu2ejyyzKv8DCEwQABoMNjM3NDIzMTgzODA1IgxGqkLyDDRMuvsfzp8q3APsIWVB%2Fqls%2FUeDm4APFc4kaWD%2B%2FcLY%2BMrdSoFfX4G1CGIrP3nL7dozcoSoRIeSzSzLorHK9LZ%2FF6Ouixu8IFh8rg6i6BQD5w2icXkrNa%2BeTWgzqZ95bF6%2F%2Ftuh358u1gS4Rp774G0bqmk3B6mPL5KoHTviIv6%2F6njAZRTOLfAP4U7abYphhWIe4D%2Bkbbi4cTa57ANkPTk%2BD9G8%2BlyAT3KF9qkdWFL%2B974p%2BkMx9OG0OUTBwcEM7yxqTqrFLW0ubO1gkkt2Zko%2Bwhen8g9u78okf8Naq3ibgemweyvKgsY93bbQaTOkvnz1edaZ7ABJwKfGtLszEdOjfcwWz3dIku2hGncue6QeRqYzctz3Gc1hjfppncteniYkcoP6NQM5AMiklaWKbFmWdfsHKRm%2FK%2Bjem85PgFKxvqKnA%2Bvsvb%2FfSoXnkAgN%2BPGzwTNRpF6VNdUSlZN6kyHI2uMNa6FPG7%2BSb%2FkHXii2jDC231wbtCwlK%2B0DSy0GldW1GiAy8cB3eyIbmGqsUoYwZTbQ%2FHipBANfk3Sanv9Zx4nWpGJ80muRTyLkOucs7BaDXJoGGRoyreFjztk722yUqrveQh9vXcXbzkCKiR75%2BbLrCqakTu7RtFb8fp7Rll3x04YdJDCq6fjEBjqkAdIGqal8bHIRzSLGjp%2FK9FhWgqppLJen3QjmFOJYC1nAauXBaL0JVonN86nYvtVVD5bi0seaYgvgLb9Ll%2FljmTHnNKK0A2r%2FkYA0GZICPZhm%2FkQfxy1bUE%2FJP6%2BBXEsSEGm8OMJku8ydUBVouNyqOaY1NsAn%2FPSuFSrG56N%2Fesk8l4H9U93WdgS9P739YpBGS69KF4ZKwP1jdhbTTCiBf0GdtPxf&X-Amz-Signature=1da4374919b13e6ca7c9e56bb8d81a6c8ae5489f911b484504b1072a661d30c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEKSERCI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDGRvqcjdgS4vnvcI6CckjKwqQSbWjAPm5qBAKaNVOkHQIgJmQg0JW3NwHvUtrN6RfhgTxUXv7Yq7sxk15QqHN892wq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBGtba0Tgu8EGOv0pCrcA%2F%2FzSt%2F2DKW%2Fav5f19QBSdCwNKjDnUa8MaYOBdvjsh4L38bmKsXrgBELYb%2FHj13xKDhlZ2P%2FJ8SzHe%2Bw5JqKnbl8GAoQd8Cdq5stoehRpk2BV8tLQk%2Bd9GpPqCsL8lcieDFb6t3smKFf%2BV2dfQwMS0c041vqTGh9voGA0siKgT1t9iDfxKYPjn4XVEPTCwdvx1aofAoO7cSM5jU4424Vrodcv%2FUU5voNZsZok1auOEMYiqNoz748twhCKimTW7YpUOSQ1%2BUvp4UQy2gGriUN8dHVyOdipgGUKUP6A%2BrThAk8DUbrz7gxP1HaEccg%2FiBU9gREAS0WrON6ub2WcnrN9NC3YUcd32yI9xE4GTOY96i4agc15B%2ByF8HMgrY5UUFY6Guj07kEj%2F1%2BjoCLI1SXG8sSHcCuTH57VBJJO56rCHep46ucWjPi0APV%2BvHLzCMrXpZlOO4AnBj51Q47mcOPxujP7O0Z4lrQR2kB2ktYIa4R9sbLeJT%2BsXaGzjysi7dgbQklzX%2Bvzwq4uvwjCyyzzlAkDqo02QviN77mshhgQz7LCtJn8x2Kk1AhuU23JJlkF05mbBzL1VTXNdWNNCEIJaUsF2qnP51NeTfHuLEUGEOvTmou9aZVATnl6vjkMMPo%2BMQGOqUBxh8O9F7bAS6xmaWLp%2FnrcpCG7CqoSiuhYaw4jHZaw9gJmpO6QW%2Fddq4oN9Wb2Cwnw%2FMUrMRteK8cQ7zuvBR3zPiMHeB%2BPgNdIHAOf%2BCXGVmElqU4cOMAOaSuUOGIogCKp%2B3oiyBm1xe2wTT0ItN51d4dA8hiPDjLmOPx0acIi1%2FymOxBmF5p8rbJ5tTcJEISUoMiqpT3gEhuolTd5eVdMSPrzqWd&X-Amz-Signature=9c4a975318b8440e129397c486acd78cfe1a7a2ebee47c9b188afda555de9275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676G75ZST%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIC4yrfAd3RBFJcEL2dL8hUFiisS1jDIQTC1Cu1O%2FlgUgAiEA5fgUFhleiIOLS5acygrhcUy4ZTCCjQJmJ6CSZ0MgpU8q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDOv7Xow0JUhJge9m2CrcA54onqasPsTPmufZJQwfxiIWRCH5lhxDvByDWUcscu0DbM%2FCgXW%2BbJXc0X1Fyeqz67FrLyarJoUza5nC3LhCv1RY8mbRSKL9sOgIi0uuKqUnAFpAmvb6%2FnRgP%2BoVgkM5UKMeeQ3zLcWdTsHM%2BFUFbcdKwd3MuBawtw7sI3mHw9IbkIDr52BNlYbO0YxK7F0A6oJcd9Hr7JFDrqMolOI0pMZTIeUmljnuUPL40kEYE93zGYhWDG9LEDocqcigBEKvtEQKh0BB6PoNImtIVEp3tADBbHL3CHmoCFEF2xokHzL4vPFml5MIfgBw%2BlcSDV7vTPRBjyujSbqqL3IBFFL83%2BTtgagnXSi2FLLoBjEq8bzKzuEGTOtLM5oiIwE5gOFcTYLb%2BghKN7EkUeDrdWc0FQ3u9DqFlOE4frETztlXbQY3DLXsR2aagYFgy7f75HCQ7W2HC4S4YnBRXDPrn124DlPtEWoUlCMyz%2BNLnWSdMTowkyZ9Njl0A7W6%2FqLMcEVrP7UDJ5KjX4xuHAnfEoY7r1aans5jdKak4aACqQmDOdQ7Mwg0s%2BXQ3VU5%2FSas1tEDVtLRkzWOXhzH5Mgm%2B4IDOLwlLxHAl%2Bk56PfW%2FKm2BgtuaUIYW2aFctZbMymqMLno%2BMQGOqUBnJtO9icXjqx1Lftmz6beEf8D35qPiTHUc0QwX7685entRLfcpo6ihg3JW5l9z7UFXmvFCUiW0bsL1Sc2QQiyxU7SJRdXkyjRRq4QoMFWSogPcpFS09%2Fbk5As0I2aOJXInTc2EkBgBZ3L83oasEHTtnLyByLDVeNRsQ94q7MRk0K6VinXm%2BkfV3OcNwPivu3oq5yWVx5KU97eWsFJfK%2BQN0Mwf87Y&X-Amz-Signature=f7d88910a7762175475cfa31c9fc3451f9787e4c9906f73ca4118f654b6082f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KVP3UFA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDjgpNuykxE8xSjrfcHorfmxluCFENlbmg2Z745Hgk3%2BQIgdN%2Be3dABdtFJaiHZQg6yGUJXs8TFTmXNjEE8y%2FdXBJsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHf8uCFGjZ7t2OML0yrcA5RgG3Iqd9yw%2FccOZZujuKUlW6oz%2FiVLkivJEv68NrhA7L1GRyN64HR%2FO%2FZWaIJb46meLjsy%2FToW2CWWRAMOtZEI6njNVDCftyqFgl674L8gfJZa9OdBzZ1KNf%2ByS47xxtFoMlh3Ihl7rVmmfuS9%2F%2F6moiuJPd9R%2BtfLr5ung55m%2F%2F0kPQBCIGynBA5vN6lx%2Bw9QexrlxN1sCKxwQqv7QRQCVEdrkIpkr%2B4PU2Kk%2BTL3FQUHobPDD6TJqYXHrcVVHRSVIwT0LYVuDV3j6RxONP8azkuvf8E1uX2bGh2Fahw3loAdaP0xha%2FlKdnnET8g3m8ioUiCdAs5G42ODjjRmeRpPkHcr7AykaqgdGMsZnv5WkC0vXpwkqc4%2FQyG0iJ7PxooJTBuyu1SRETSy4ufLIpzd3CulWD5UiSwgbNUpWP3gI9sKikhnDoplpG03HFmeLbHKbD14dWDFCSfSZGLZMZ%2B4D2v36pRsHSQKEEp7sp4Ej0NzWhlg0Avb3t2dTbB%2BSWpgS2R4lm3kQlpHNI5wXvzSgqaJOiarHWOj9%2F3Fs9mNz%2BY6pksHST9SmS49ARUUuQGL2OXyXVOp0SZDQi8Io0rbIuGFy2wi0oG0tEOGqODebqbJUN6VsYTOnK0MNro%2BMQGOqUBR9C7EbMTAlrmMksHckL%2FQPjmmW4zSotia1LQ5E7Tt%2BYDXA7jF6dMMHCHPASgKTPwbXgPsX6JNBakWcwzCMHozL2Q%2B7pPvFWFn25g0stEPGsgqLXZz4hP6VP5aKQ7XU1jk%2FZ8QMyBbS1mj6U77LGWQ4pbYnW0lZ7lfkSN6jEZWAoFlh9GktNoHi1wKbSv1AZHhsGgycV16csEq%2BYG1HH0wgmP9wUb&X-Amz-Signature=bceffcfc1c074b5cb78611593eb55f3cec11ccbf7977a1d5c8c395f85748e3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKHMYSKH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIHyyONgeD05L%2FAsxtG6x1EPYVoIjMffwOyRkTE1EmAbQAiEAv1qh779U5LYDUcxGCdlTx1O8oUEv7jHISKFJ1yy2lLsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPtFYax9oZc8z7LZrSrcA2e%2FFBdlpxXtLV0teRPkV%2FaHeOJg9gozj3NPWEYed1n5VTOTK5W1Lj9xfuzWoiVWDqEwaH51Uj9eyMIamHEk3Q87XWVk0HIWkOXLVpEMS1jv2G7ss8EvBMzf1u3StCknrdA9v7se%2BjQLxe04OmU9aKHR8XiZB6Jr3L4PT7%2BQnat6C7XpSS5%2FRA8%2F3BbOrcjjaLFnImLZJMxdg%2FA3P4B61EjUk1oGf62akwReZUV%2FBHD8vmt7YodPSRq53h2mUdxGQ2rfrY9uWuEEl4TfjzeirW49B5DACvq7tqJIM6k9MdxI%2FZ6fWHmMb2imMuJyZ2nEbCI51nlOeDJ5yUxrg1c0gRmNCZJuT3517UWMx5n2AdS7zK7vZ3k4lixi%2F53fXvUAVHVl1HYnnsuOpZFpvUKfLJoeDvIwKYbIOhN5JNiwTyy3LDZu2WNoNGhRbzpZP%2Fajo078zK82HFXggmfRAvVeGNRSQavr8ptt3MYAZA4cQhdi1K6%2BZ4FenSYUUmkBVY%2B%2BMXGRB3gmrTyIreCGzwuCJkwfkKfXzzo46eZavtA2yTVQNgV%2FDWGxnBx6x3riy5KaoXNaIBqI%2Bem6yz1zJWLTEkp22CWW0FrSPemqbxOb9fxnrmX1IbxxTNcuvgy1MO%2Fo%2BMQGOqUBVybwSQA2wjG7ad0mjXtqejSCOio6B54186t36nOrADFeLuJQShRq6ADmSw8kpyRfcBtgH1G8G6mjG1phCmhUQf6fglDkket4W0AZ0ISYT7ufK90B9k5oTEjzwHtavcaMv5M1m59zrhJe71cPJN9lZXnFKSLB7RKxUG%2FfKwB9f2pe%2FbcdQyxIM8PFAfAzwXLOr3tfav9%2BT31kW3Bw6hguq0q0mkJH&X-Amz-Signature=5dff66456d4de9efbbf1dbd15d39103a0eddad2047da9d86d1bde4cf7b702433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=22a0c6fdd3755e83ea00875d3c84bfc2e8c1303b778eb960fc013ea3ec78bbd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVVFJB5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIHShPDiIrAjID4M7uL8nPX1ZupbfDleEMIaynUqQNv%2FPAiBrFCGSQm8FWkdDPyRWDxnU2G%2BLH%2FuIwex7Uw8n1y7GXyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMxbYQA9pr2YvYG2fIKtwDBmAISPTM6C1RfKOtc%2Fm1C%2FuKsLpUhY6bzqxtSWsxS9YbMDsU05TN2TQKGO%2F5oUxuIJOI%2BLOKb%2Folus3f1P%2FLXw5oEy84ThCFaa219twqDlhu7d3IAXoLSHCYLtBvMZfKcFqCONVUtIgqgryNeZgRA62nJUdbeucmsakLgQttKgvVBDdNlxdfLwccyTiqqBYCe0a%2FU10di0ayx8aqxxLZDfwh%2FQvNpkuOoU1DN8nItxrnwb9tRG%2BP1lvb%2FBkzUkdyZv0wli3e%2BY8j%2FtEyMuuoLRUWykr2yafkx3173KAcxxalSAIHcPfH1sgwNjpSTag6zaYuOVYFyTltb8oGj4yiO2%2FjTMsxhC%2FRHBYtJmynhkCWbppStKQaAI%2B%2BEvlvsbMxYdMp%2FWbSsVJPdySRtadCiJI1GY0hKXpkBRbH6x09l004rqmFDEnG91BX%2FFYY%2FQ8BdGBvk8vrAg7c7ubKhh7itRsCGTebACtF8K6OldZmFVW6%2B%2BoFiVp6Qaxy8xxUQEQpU7a5WaTah6L5o2N57nUKZhOkzQ1JSQ37cDAxuMXBi5eQ%2BECDsx9AvRTUJ9yGheHXFPB2XlKy6IMlaQGXyI47zOek0PDi4TxHJ%2FPdR6MVHaZQVVxPPRpy6oHQHOww6%2Bj4xAY6pgFaQ5FuCyxCG5zbN8el5%2FRf8Mr4QJSWxdy5GuTJ4FQ6DKzmYhR8sfVSOQPfqYkjVNCo2o648Y4ZulJwHi4eoLkVLOqmdQJidZyHkfH0UX%2F6JnXK4yoAVECNSGGPKgkVYjgv2LN5xagNs8slxm7ZGUuqPW53DAPoblhWBQ%2BaELmxNDpICO7KtPP7oq7IbFcEcwcLzqPpTsSxy%2F9N5iqhuRPlfB26SNjs&X-Amz-Signature=ebfa17a42d7968399681984fd84028e4d98cef495442c13b75b468a83c6ec8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=3839091efe0f2cfa7d8d5c358dc5518da970ecbcc2ec642ddf78f7b2552493c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=1c5c024d9a964dd2d6c08941643d13963562545ee36ebc8d7b9c6ac90985f9de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=d3b8a709a278e4bc827246585b00890a532d02cefe653687814f6ff3fe02de4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=5406b2d0c0fce72a80b6139261fde9912cb7d6e58c6acc2c518f90511a34a643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=1552000d92273104ad0e1d31bbc2b22584055fee51e4c9300f58cf438a8667ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=6783cd411f56f0f17534897c1917658bd04d7f592cf011f4268d218bc33271f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=d3b8a709a278e4bc827246585b00890a532d02cefe653687814f6ff3fe02de4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=ab3ee189d3c2756eabfaa953b70aebbdebaea502af4770b21f35e172bee62834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=3ff9c76324550f2153419f13f568d8c74c9f8d3f4dafe8ac78cfdb72291a5d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTPRRYNW%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T201103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIEcKdSIqAi62HKkc5lkvG%2BU86JfsZaBpC4sOTtYvwyEhAiAF8lsmHEA5V07I%2Foi8BBDPdxsI4d0L6K5RTL28wfPZRCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMbp8uNRvjNAkSYIwdKtwDVojzMbuUspBSoSXCgMAhpmFuPSosdPA2dtwZpOIjbktgHVIbXjW6M2LQKSnN3wy%2B0Usrg2q%2B8Y3BfPV4KfNRcSl5dSWIF4YMlDwMcbONY2u0Y35xIwxt3FDqf9FzTdaYUhUfkFM3hWljvHbUfR9XXAHaAKg7a5vLaV8RnYmsYvJDInll%2B2WbgpHgj1Fw1KU0rGmojDk6UhWTKjz2mODiUmppoFhM6UqQPkn7M6Hi6VNi53bNtdmX%2Fn3Shxrl6zqaIIuXA%2BiK4KJGF3uMtw8s%2FMEcd9Z59n7g3IEc5LB1Foxk4W4YEaXDRW5nm8OnCYJifUZv900bF1q6NZB11lJoffmC%2BK6fdlkkhNOVWwV9eyQxKWHwGK7fll1FjWyINbvorXgxmsWf1JjMy2LZwh5E2ml9i0uxJZtEuHgLA7KzVvHkm8x1QnVPrqoDPzi5fuqfS1vqQMG0V%2F8aumbnbyDvVXS638221HVsAHcFGB%2FznodW80acnzsRn1Ve3BIKrQIJa6D72iZLKNxJpFgj3gNxU59TCKDluuCglp%2FXhtxHn78yNlcKZ0L6CcmgsUiM8KeLXVMAG8BVXtEPbSpOUG%2BpJkGVss1pMxDwEZzzQT1bHkbb4zidQzDBmZb3eUIw4ej4xAY6pgErhoYcuEuOdWaUB3sJhGJmwD0XfXVBrNhC0nVlAAzA2u58pI25CSNjZ17MP4OInPM2P%2FBBJFQu%2Bcwo0RovcecbeGhdGTMopqARQzP1Rs5I%2BHVq%2FMfINj9Fm12qt%2FKvRXxkg3wAGfF2qaY4DKhBsoYdnmZjBm3SRDG5YYJ4VFb%2BfXBaZWfEnFsCd8N30MiW3bqIxhFnyxwsqgd6ZZy5f8SeP9MU4BRP&X-Amz-Signature=86eac40310abcb9a3014b739bef36933755ae63ee83a5f91714b2f97528d87d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
