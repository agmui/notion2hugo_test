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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=e2455b1ba76a47070c73567169c67ffb3202c99d39bdddeea867e28cc5b8ff86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=c83a0421082a1f704abe6c7441fd6602519849144c40e6bc51dd21433c387440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=ba1a39f62808982a21f20eee732d88dbc3d29eee1ed8e0153aa17355a31bcc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=144db4508a391dfe32ca5c3d83f9ef4d475ae2f7d8dec55fc98a4ead36301b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=ad038d4fcb411d9d75edc0a24509d3dd568f692eeee1eea6cd7c54430b5b4690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=cc2c4bfd70959290d48c2da67ea459cec77827e24b0b7129c811da126d86386e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=73648eb48fb1f406090871858a69b52412705f624070ab368ca87ca7dcd0f2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=60bef00c570ccbbce28dd9e0598ed32f77d72cdd0ebf39698c5f0faaab08fb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=92ed51a23fe49f004641e1e48743e00ad8ae974838317a538bf29da396c1e453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=95b21ec4a372e4ee0e872920c01caa883b1a96d8b36b301db069925ba79932b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=9650dca4928bdcc3e901f6ef6cf1162468832308bc3dc7d8debc5f6696a35ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=0279e1f3f412669a2a63b7066a006d7bdc1515b88968c27138115d7844e62b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=041f0f5b7892624418468a76e78ceca7062ec873dd1cc0a14180e1452b1e695c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667FR7QT5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCXr5m7JAeLhk9AAycKQmnySTRACIC2noAkC93iDrX%2BdwIhAJO%2BTk8IAPNwqMmqU%2F5mhqOqvagYrlBydXSxgobGTzy%2FKv8DCEIQABoMNjM3NDIzMTgzODA1Igw8YZGKpSF%2FIbsy5xIq3AM1vsgO%2BKAyhTr4m5fh1xU2LQGUcxeUtwNreIXoZ6BOjXhwUGTHTT4lzTxWYSqGnLyOfZOqNf%2FJKThF5WzhCQAYTSCruXmOS365tcIXesdBYBNBHdqDbCBNcBj5n53cMko4WlWm%2BOoLNF1o6O4N02FT6WJEnbCAizRgO9WmAFvdM0ZJoLfT%2BFU1d7QMzOQ2HaLDyOhNQaF04TKWovZn7AUPPx92XoPcnn%2F4%2BZ8xVTNnqIwQ%2BS4besGrfsE%2B5rK%2B4ON6y7%2Bmf%2FD5nwly7CO5yK74n%2Bpgub94LHXj%2Bh1aUhk%2BuPNDTzfHPFPR1frO8S8%2BZRLS7xq%2FApsSW9XhLaY6wOLS%2F4pn4ckDD56f2tO%2BHjGm6BoJbo%2FtKMU9m%2B1vqIQcEq92LqjLXiC0moSUaKzQ7D%2BUXCpf8mkGn%2BgDp4Q5XBX%2BJP46gwrbfmLVGGtTi%2BSBNTLPowWEz3TBNvWQ97Wriec5zLB8cb%2FHv7uxI8UjSocamsxu5un79QwH3G7upngRkWH5SGAtV2CF6UubPsgl4pSFGr6FMBlP0wkD%2FwsVaCtZvkmnw%2FAuYkrdebpLJaEtGHw5WUyAGfdCXusZM2R6P2y1vHbE5lyPAIhZMIE6L9%2BQwqGCpfGtgVSKGeL8EDCejY3EBjqkAYutOzfOYEIw3lHRB%2FUWG%2BES55OT7zoDlGgdC9iDjTfvYESTWanuKzQntSWQk5OIpE6jPp4q2G8%2FrmscRUOm85XouKDkYFGKXKRmcYk1PC%2BDSZb0Iaf5W6HZ07HBp5VLNxP8crW6I2eAlnq3v3i%2Bw6jGqrmeKfm0K%2B6zQ%2BH%2BL%2Bhz1KM80pAoTRfrMQbug%2FvkrMzNfXAS%2F%2FflK9IumFA78vQAGU8t&X-Amz-Signature=21d2bb4aef9ae690b9d36d18b6a3630ad5fe66dc553ac3da6dd3ceea6fdba1f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=9d9929ce2562f1b45e2ef88bf4e7dd6aad370c5e984cb8820a502cc0fe99b28c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=fdfcb517c40d396805dba6fdfe401937178d660b2fc707870af5ce799802ff49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=b245c5f12431cb9218107549b6cee6b1ff352f86f98fd1da545e5f3e0fe08229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=bfaf389fc163742c64fd3dc223f5c9dcaf4bb628003997cbc6423f02969d8e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=3dfe4d046604e05c2f7eac8183eb9df35102e6e255040a746a32306ed1719a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSFJWWUZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T091401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCc72jjQSIEE4g7pvfIcCO544IS4%2BTvHEtQ4frUlrobyQIgckDNpvX2nMCqAmha7RYHnMxb%2FcnnFkt27inmr0szT1gq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDE7qWyMNqmpdK56vqircA1DbrdYznrNGnKV0%2BpeYdZeNqUitoWwvN%2BzpipYgkq1rmTNKDAKiPWuqGN8yiTrxiO3zaUpZ6MzBx79S4nmp3TRLAlR2q7WvmqWMy%2BlsJZFGKdTGx2%2FpoTcJ1Sk971HTvtOYEq70v52iaO%2BPtm19c93uySqjCmi2qoD674UG49hlrV77KLI7nkZj22zCl8QAouUCgyFZ1wVMTTvI0hvCKlQ0Y94NrVmODH0zpeCzvbM4FmselvCqIqF8cSPkb3k45GOP53%2BX1iReNSb%2B5jl9SuJjkc0Li4x7otP11uihnf%2FH71Ax4ItpRtHhkqy8zt6E2JBupIS0UsmSJxLZS76DsbGjvjuyUjnF1%2Fj6yj5wKvWJtIVIv%2FGXxeumFC%2BhGXNqche4Q9v6z7AwHwj8Pz79UA6cCP0WO%2BsMTUQ0kN40JYT4VnLI1cWlCLOtAqj31UiUmpSkQby5vrpQxThdNch7yjxgY7qk0NIBhGKsf1tDxz2Bo9SgvvLwT54Zoz92UvRs%2FhiTcc7W6HQS4KivohBVCWJn0NSBwJ6ANorY%2BBvCARXZjWG0sMNL%2FXK4uIPzvG3eTkry7lfvSZbC6BKVvVi6Up2LsEcbVrdRmRLrW6crpI%2BoLfuxXghGVnU%2BQmQmMMaNjcQGOqUBkY3kQEKyN4xJLXhILhvKcw3ZES7g%2Bogt0AnNbW7UEEv%2BE0i570TteiOoKGmEEsgKHdOqrrQ%2F2lniWVj8FhVsg0X1CWHJ9V5tlLdzZ1aVgvsv%2BL7lr2cm3TJ21PnT9FQ9kJ0eXiCNX9Zmw9TUY5w2FeYft%2B2%2BUeFVqfF3DfY3LuScV8GXoTrh6XYseHZHIWbfJ6fEVJSELtK58tK2eEoBcPvrFDtF&X-Amz-Signature=346bf1e90ce1ade24b8386fba5c05734fbc9d52b7a906b42853e9e75fbd35d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
