---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=c00abed737b7a927fe5f3d71bcd3000323d2150e8b1f82fd3d05add6577a8974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=e0dd846b763e62053bd28037c6f22f5eccdccb06f1d56f03a565777d88e01a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=b1fd6e8769e3477cdb4c9c64a52cd6d19c82268aaa5c2fd2defcd48f5c5f4da1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=0eeb77330edddac818064ec0ec36e6cafb2d40c27045d299e2f79ce835115a01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=cb31282f2ac239e43fcf995c1e8dd50bff3551b959042d1d7063d8ac563596b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=bdf327558de129def9460312a9343fc4c70fe17f0da5b7c95319b18a1b8f3632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=aecd86531652de7bca38aab3e7f2f089b4da311128162d8e2be23de6bfa6cdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=52701d90435faebb7cde00dccb57f3ebbcaec10df01294b23a4d55afc45c601f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=9c6907be71c3fb5e5e14e2e57b3737dd57fe0d0760089c5a03cb78fabc6ecc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=1c6c00b6a4920b0212382396ec113ab6974c97b3cfb24118ba40a3a654270985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=a81e586bbbd27a2becd2236a7c4208a44948331f9d471c31bb6adad2aa90aff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=c3f8f61807e221b1636d3a809d29a3a765f575810c9452ed7eca992878a41ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=a09d26ce1698a83143a8f9c6363881a10305f0db4555f944e860521378b6927a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP7K72B4%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCcV7MyeoEIA%2FE1zyL0MvIeRhafQVCRDbPtk7LSwl38IgIgWcg8aORnkCPVxvOfHFxsY%2BfqqxNxSUNVNF7A5bHVy%2B4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSbnbMpAtSnG9FzjCrcAx0rMw%2Fb8VDTISHZztgt80GH%2FKlOTQ3be%2FHQb7ppe9Ym3kH5I1Ea93my1F83dhdREh3cLTrwA7hnMVdJ0btcLnckyUqasYTXCnj0tmprME6f0uqG%2B7f3InXXCG1sOHhzn74r9rQPJIKI04kq14Ed10YJPsfiRofABFXOn0jN%2FqZPUsFc%2FqyqTxELA%2BWuwFe5epq9I%2Bpcs2dfCvW2nWPocX5OtfIF63%2F9nM7XAmBeGvksjFDU3qaFe%2FTOMsGTD6CQRokhmvEpy7ZvCjDBrHLmB%2B4bQuhvWQ02RuQMYCKbv4aWbA%2B9DMkgIospVoIf3pLe6Di29iRJNctF9BbvFhLCktxXzGxjYSAgrp1JKFDZ1n6ySyKN8znl39vgaaZXwdaz70eHkFyJnZYkP1lEel9hPoR1MA34BnWPzoI3hbjP3ud%2FPU1I97kRNH6Lqra4LlXu3ip7QafUqThsDwSlJGFBlstV%2F%2FvbASrWryKIbkKG7J4E60ZF7L6zlEJCO9CpMrDEMLMuWDZ4De5cujkRrnVpRwERza8ZdhAKeu7S3qyFBbgEPuXF%2BjfKNeC6jMEa%2FD%2BuVq1IKIjxhAZC5OZX%2FQoZ%2F1NHIxCKwasakS7fVyv9ts%2FTPYLb1QYNPzbwZDc%2BMMmfoMQGOqUBO3KEBn8LCx2anWhVZcFL9U7cOguUepqTyxm3VqMM8KaEvV7dV4JhCKtJnx62rCfZ3hPbjK3MBV2Kucga8l45H3SKlmU44%2BgQR1PIqNNpLQV1cqjjaahg4a1xRhXr1SZeZEFegT0%2BjfjzPZtkGOrxqCKkaig%2Bl%2BOOdfxImrtkJDdVQZjOKend4keacMH2Ohq1i8ldiXWIluA%2BpF2amWodmJ57dKVE&X-Amz-Signature=087d1cbe807851aee7a477780720712144d95bc58a047cd342a42c04204b9f77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=ff1a58ea835e12e3b7a6eb444ae9a306ccd0b4ec833f5e91542cf98a78d0b957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=29cd5007c5fa8f0699e5a65e8a215a0fd0a9a3641e543f4039a83840197b4a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=adf0ff3f18390ee109d5fef1ffbb64dd3f07e28cca34c769444fa7af8dfd510b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=0b4c48472421c821d13e2567b8feb1e852155690da1b2c4b6ee45452a08a753c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=8365dff15093cbc45f70e3ca4e775fda9a562c3079783c9feaeb24bb218261d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466527FJWX5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCliUvrEheUKoE3b8Z85z6EVm2ORyXoKLJgIeVZ1sYu9gIhALwv%2B1L%2BH0StQswZATJP1Jo7%2FhrMxIWljg7KfJS8dpMCKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwd0Lbk1so5y0MqjcYq3APInn2460IUJnZZYHOWEb5VgeWD13DkLigJoXRdJYPt3icak0qzyPr72HkhXxJgOP9cp7s%2FLUSEox%2Bgxbox9g7XM9sBgjRMT7hruqjhYthSI5cfL3QYgys7Y%2BW3k06hpqsHHgjtCDTvL8hN7U825T%2BpL3TSlZZtR6daGYTnLDqRIPZSO%2B5kHw%2FVaXPQLlqLS%2FTdIn9aSzH8ioj2L%2BPBdNrZTzrAtZdg%2F%2BOYeADS3wx6bgkg5rXbbnvCunuWeQ3ia6zbyxmZdZn1QSqMxSRLITbdOQ8HMAb41t0QYxz9eM99ftX3bvtyf%2Bniy7p6EI%2Fq0OEk82kNVfVFS%2FFzoFN7NAcgK%2FTsV9cicPe%2BwvgHsoXGY5%2BT6WRd3sZinBMZpMKtV%2Bep2G541bai39j8USOfS1EpssN1tMBjsic8cVgM0aMR3j%2BUb3QxNzCcofBJZFllgb55AOM2sSnbQQMDYFmuktUeyWeuKaViYEHOBhINWgwabSoacquF2Nt%2BArPNKEwmYZppwLDsVuaK52VTg%2BMyWfyi1B0WAdtLMIyVjgUQL%2BOFnoTXbCMNBrVoqh0rm%2FlPyc9lsc5r2v0eABpbWptM4k%2FhpEn5QwSEBoLyrHOC1O4Gb0EKEskN%2FUVo1bUoQzCwn6DEBjqkAVU71s%2F74b%2FFnuY3SevBisGHvtFRQEL5huwLz3gjrRCKCz%2Fm8A61bf2rBkFcVNZA2Qg21yXTDBfhMzfcYrSrNZTeA7sY06TqhJkP%2BUatcQs35eF4MItzEvudqsyZ8nwjKvLbubmq2BumcSjOshQofz%2B%2BceykHVDcd3XqBf81MU%2F%2BmkJ%2BaVv4BG9zIXgAAOzEb1O2m0xxMipe0%2FtL0t18czefSUNo&X-Amz-Signature=5665ce11fe41b5e0716081a7e33702650ca4558c8cd514b74ea64baf87c1561a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
