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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=317d0f3b8de03efbcd0fadc66a827670e065cd4034e891a0e3d7d65b725106c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=d81a42d31fce0a0a1243bdea8fb420ec46a633094e1a5e297205f880023b9678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=d66f1853e6aa2e63791bf517a60f490f572819c9cba5fee21089629b7c3ccfa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=8f53233a5bf5875f0c8f6cc6ca9d86b75a5721b3ab93a0bc29b3449370faca76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=e0b6cec5ba65d558e4118f6cbe5f783a7848065b4a87f69ad4d8af7d64daaea6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=fb2a25f0cb84f6c690e0aae41bcf8b9a23e916a5377f301dfcf749106683a5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=5cfbc9a6080c5097bb9182cc0089f3f8accfaaf0c6c4a37e827df1c969f1068f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=a6d604e790ddf3eb36d4c50bfa842a1e7624ead19cbe6371a075c0d6f6b34a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=2459a86358fa52778f373afb7438e9f0ec3e3adc34f142a1281b9e65058b0157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=ca6ebded10c56e14cf7af095434cb2c8ce838f944e53be30287efeb2ba5e9a59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRDIG3AB%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDQIrtDnldGqIygT3suNX6UNgddJ1wwdLV8Mogg8k9tbAIgTEqPTyWTAtCNPN0e%2BsLxbx6WGGWlinJraFyUnJwDTZMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDtwRlrYcmqiYLzPkyrcA8ToFb%2F7oK62m%2BaTZxoA%2Bj0yLatnJidisuGGo1E7CYfNQLNfTbMKDurxttdN%2Ff9rgWw0D1Wv%2BQpJjW3Mij8ANvHGi%2BmIEqDlBGJQ3CtiUGnaLp3UPWyOWv0ffJHNrae4dSVjfBoEPYrIg9tFa5wG%2BN8LoQ27q%2FUFbKmWV%2BonediZNScZIC6Q%2BaTsNMTVEvKISngB92rGfSVwRrwFlMNn2068npp6BBaURcIhY2M6lmhhO3gCjoBvF7UawOzmxTxybG2PdsxeTB5Y08sx6JNiv4G62Syc8%2FP1L06yfwJB2%2BG%2F866fMJebZRyfp2i%2BTMPpp5NHLZHEAIlk%2Ft%2F%2B1gXbgAnHiVttMgwMm9FE%2BWY1kgHbib72A5sMzCwRIEDvk%2Bcu9fKF5YDziqLJeLo0WwpnhNz4OPSPYIPmpW5m%2Bhg6E5jS01mUu%2Bb4u6ag4qVTc0PF846KQsos5HA9EyBxC3XmB3tKvnIEB%2BtOfr0eskcLwCf%2B9MzZr7ly6x32t%2F6XB7CtFj721hIIgO3XWMWciTp90TDAfeUQ6%2BSSHog4OGmN5qnoPS0uXh3DjJCXBR1v5XVd%2Fg4q%2ByM7vtXVxawU0j2zohuG3MysJXQ9LvbcP4nezYA6p%2BRVoiDLepb21vO3MMHb%2FMkGOqUB92lSv7RU8UjGBJWKyShVt4iKK1o2LrH0DB9eYUSTCkZ14zUISNvnDjZOWkF0GX9COZcscHl0MC%2FY6n4Tb7KlI0sCaE99uCHyILmzd2j5R2wibjNxGJCkEtqvmHm2%2BRY3I%2BNx%2BRbKYrDqUho2Rd5JubMzH35mEAcP5Xp7j1cIeIdnztDI6HKjUEptYKi415Xy7b%2FE6A73EOZb1GhO8nNq5mC6jsqe&X-Amz-Signature=5dd679fc817b73290c4e027a21c8c47b4f1726448e10a78539f3d797275fc43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UC2NXEPI%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFhxaoZz5YP8aO5dh2grxZt2tmY2Y7VHnTq9e6IRFN2IAiEA0QmsWFcApq7mGGRXW2kgeBcTCzDHjBcYDJtblXtzbYIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJkvzjId2PfZb6uOgCrcA6z9XyupEiHTMcWNtAGzpgk0ZHzG4%2ByWNW2%2Buepim1edEhutkKHY19hjwCQaftRGFWS7Z5faIbh7CcaWGJf0R1n%2F3LoNPCQY1S7IQJ6ewYiJDAM42zJ8RDll4mW7nBR0h3vjR6gPSnxO%2FBJg1fg7GNMbp3u0%2BanDJTRQwUPREHKXMf6CfSobCb5uD5AXBmTi5a7EM3psw7jVI%2Fhy96%2Bjr%2FGQpuDTRxx6ZPlkS5LEQ10U0yBR5mERkfP3fAQutB1Nk23FmpEBwHvwL%2FWqqDXxGyBLvEezgPVdodT1nVl2h98m2F0itypUz4SiPpNTXVj5Ye566E7SEge8G6RQbCtw5FGsncKjldZVzMUExZaJ2VH5bQL635jDE6rk4AFQp5rL5xB1SCjWuWEgQMHgY7zxY82zcv5W9Hf1M%2B05jAwjM%2B5iQZYVv1UP2Xs8mvte%2BoJatQgeaBk5LJXK2FmEP0Lj4oDiHQopVVlboMJgcXs5bzcbN6Kf%2ByK72QlIqa4gWJy8MIB3cfQHpz%2BAaJqGFYTU1ktjatrMHelo%2BEb88uTHMfIM%2FtgJthy3y35xl4OkCgBOsfs%2BV8LjgA5BXTkSTk2HMmomOe68Czt5WHvXr%2FNIekFRKQMCsZB5e0yV6gEPMPfa%2FMkGOqUBMQSH7FwRJbSoC8rthZSuiX4kysPz6RwYVJojgAsr%2BviDOcnaQ%2BfoKV423gze1owlHHFxAgGtpv7YoFClfEUJP9ReSVNBS3hxqIu4fAOdFbCV5qfL0MAvUZ3VP5UiLushIMt2rtwYgwdDk4%2Bqk4w0lySQ4ZMiekME0041DWRaBPWVuY809Ij72xmpLBL%2FAsE68qQG2F7gU%2Bu3Ws6zuXxlhp6kAoxi&X-Amz-Signature=74aa8633d4ac2efbdb69f3009a70fcaf6c2b8ef5a325adf80d93ca51eb88d7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQTY5AGZ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIBu1aOlbIN5gOe1LO5bSBU3d%2BDmY6JjRdZiQrYpUbH0NAiEA0Fz8sDp09RuHKkpp5L%2BsCMGuilsyR8QKmAepp2fuFRAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOE737KAwCUi7KtNiSrcA7XD1JHxGSDR7WX9jPy5K5o1%2FRKQ3sUvsFhrvQ1ygoSN1uzGspFwTg7ZIRag4%2BEZVfpPcwJ7MpLthjHnrhNjsjl5n6IIDIHiC8sP2pKZyt8Z603rffWvGxzaCi6Jl3oPk4ZofdYL4lKz3gvYXADj4ZUqnDSta4y42qxat08sV6MBv6jOE%2FZcSM93Ea8DEaQNnIecP3AWupZOvAV7bbbVgt55vmm8ZZ4Fv7VTOdek3dxWx2bw9mItFjQYf6vWDuvF7qnlWELP2%2F5j4p4nLfrfr1NJJVeW6zEUStn3t%2FMeimTPxYlpi3e8EgJQYmYdCRMjv2yc7rHiipcQDq70jLi1OzMRUGSvYV54OwMDm6tTpks%2F5OxKGP8SU5SvR10gW%2FDS07aalD%2BMFC1SbR%2BRVsoaggbYzugKjtrIIHqSAx9BuhyNClqw9Q3eV6HOl%2FnZwIFEUq3QYZilcVQFYtpCCjGUkj3h6Du%2FnynIAQsbYAb3%2FW2gPvH4n%2BIfAppLJCFbxbEDx0LCYVf6%2F9oTj6jFXQABZt6ijQUOnCr7a54%2F21zApm2dz3sY1L%2FIy8h6O1IIPkFoV1rRIvm0R3q8u9x41OmLll7HrcQjp9PgcWiOTXVBOVCb9KXivm2Y9mkwIqlrMNHa%2FMkGOqUBpzTGd6c9t5jUiN3tfWb%2FXlxCVrwPct9QflvYy3jqfZSfOwLvuNM5tGhxh%2FYlT9IGsVfpVM8s1y%2BRlcll7xnXD2xwpZdLybbfiHqb%2Fvd5u30rBeF4s7t7oXRcZYa5XauCBigHmG6K5KJzsMw8yk3N%2FLySkNd2zMBBzjtcMB2FXKDcWCDlbP%2FieiW9xPD4KQ7BsZX%2FgGBz%2FmPOpdLbPQ2iynAyOQ22&X-Amz-Signature=15b5d375633235e8a040dab09a3df82c39d853e4b8cc78913a67e7defc5fc902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=45f175c5797c3d55c4c38c88f2c220afc541df379f74255405cb3eafd4de1a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DQ6HC6F%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIFS3tzhs5raf6ftZPB71KDJ29pKqVdrhtyQyAe6aR6D4AiEAlNKFUHxDUxA%2FAANwQhNS7ngCUmS4Fz7dJUpBJ3EpJ8Uq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNp88WkdWmuvh1dy8SrcA0dxUhVddAu5xB2ockZ3T6DR2DupdgKXB%2BBMlTxVRPyWPDhU0dcgOtwI%2FTRMLyGzZWasKp0qLEyMTgEg4LVBwWdzCgM%2Fn1JWmZLuqt7Pnhx8eTQsFEQLHHp6X2rQxvt5RGwJwZVIs3eXtakzOqhQA1111RovUmsc2NhUAOkLQJXSyB6R%2BI7gUqnurbFe%2BY12UYm6FQS%2F9XqxYpw61hu8h4is6EqajC0LZSPfwsx4xmOWgJZLWgeWMGvigFtGUezr%2BBLopfjWd14ETnI5K2sTjR5tkGZT3mAW0hl%2Fz2k4KNE4pG7oe%2FeRUakFP6P5UEAnUiQdcafj%2FitY1JnPGt9XZDOaWPlgP6%2FwR1ZAEgT0ZeZR6UjlWXJ9YUNAYqhyRGcil6KKsjjNCY0bOomKu1L87Nip59SC9KUCRRe99NofFZWtkS%2B68NmPll4boNxIdJMg%2BKGM1CFDeDxUUa6GIeBZsJJnD%2Betcv5a%2FacGPSWNFHlYKn6HB4s91GI7dA%2BlIxKZcd0t%2BTdeuKQTWWVWcGZzGlHvW%2FPOyREAj4jjd1AMUwB73TkIaGj6yzw0WRES4b5nGrOuAQTbXNt7c%2F%2BFfG13K1Zh27v3p3DCC2XQi7Q7Vih5IEOMRzII%2Fx1dOFWyMOja%2FMkGOqUB%2BeX5Us84WR9jSgTni4aV%2F2km4%2BAgfGCt2Fqe4myC52AxuJVZeGAfAR%2BdGfVHcnICiVLUEEkJv84kwovGtYusVmGzUtZMDNe3%2BBTNo%2Fg3pEePvYthgQS9FSeC84L5yaC1DPGEBxSL8G6KgvAwuVCXHNHwTjvVAjvfyBMQwg0UL1pUQbE60%2BviGxJyvyaGqBjRjuLMJpx3hd%2FGQtdNPKYwO9xRxpX5&X-Amz-Signature=0aad4f714243ad8d6b209edd87c2d5094342b2a9113f9718eaecb1010c611171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=efcca47a0a1e41e8279753150a16d54e01975cac292fb07ddf8cca9a2a379cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L56LSZT%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIExywl0k%2BjhLixVAz7zmHzotFtRy22am23%2BYye6XX5W0AiEAzyJlnztoJoTY9bM4AyEDfC8HoyrmZ%2FSpfyM5hVZUym4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDPt%2FQy5ZWhZYYO8WmCrcA8tYq5u9V0nAmusQfaBZc%2BMY1oigYWZXDKbPrhbSazcm%2BdnyPQ%2BvCgaE2z4eSuNzXwnnDJt48LVnTeN2RWkytLKkb%2FXCgYldouWYTgGUq56tJWvnXFrsCSJVj8f4NgXT3PJr3cZ75PBmMagOEtwrM0jBdSQWxWQiRDhgjYJGZcC11EryQk1kk2DUr10X8lBSLrAVRf5wETikX5PHK6PswaK01d1nu1uIAsrvKePTdfTEDq2%2BzGTDwQEM%2Boym8eCICuWavPnEFKJXQbmBy9Tu%2BvcCShBbSj0hHiJG2Osx%2FHaYzVN2OXggJ3E7UqX7IkZsCmPGgEXZ2X7lwFFiyJDyGmrMnMu4zLG4pceB5yPvAeyXZQrhcF0xRclZ0WRnaDE0GVx%2B1HZDuNgG2zRAOTSYLoskn1qAm3EOYqKsN%2BqpdYo0M0kX5c8nucNf3wcHuR83pw4Lpl%2F2ApJgHN27VhqVJ1qQLYcYyr8zsWRNUfN%2B6EMC0fMo0HWKwmE7TuHRWYiZXCf%2FenULLi6jmPlhwsYRWlRDa49CPITHKxWZ5p624ebcAWckpR4o%2FWHItHla3uJFaEtW%2FE%2Fe9mokBL%2B4S%2FxhQZvWfw4gcqMAx9WY2EzUiabyfOmqJ8VKkZ8fpSULMNDa%2FMkGOqUBrskPR0%2BMsMJ2gA%2Bgj2bpAigkospw1EDfU5yKiejLMH7BPYFdKSokuIXQXEGyM9yjRWbMGXMjzdLhCT1jWw%2BOW5eSgWdyrB1GdBgm%2FuaMfrInOPgvkVZYpg15rrS4k%2BDrZ8ZE2bucM%2Ba3Jc%2FAZyV67ofakajNPvjJ3Jt5unrk%2B9roo%2BwAJa2aaCleI6b80sOq2EO3HSRP0Au97il2pGOoyfSzbIgF&X-Amz-Signature=1f5794fdc276ac35967b3d2ebf85fad5ea8bd8ac8caf685e5f8f9995a7fe6e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=35584580fdc0ee83a6a7f873692be329f69d9e82c083db446cde835581ada48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDVYX3MU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDfmiZthlJCTVRcD6e1QdpB0Mjh7gJ05jpifowwE1nvgQIgSZEJ5HqqWVBwXE4up6m9ilDsaL1wBYbYGmnwQz2njhgq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK2B9DADkHMqvDpGMyrcA2yer3GiMSAJhpG1f%2BzrF6k2sW3MUgHORAHBMDaJJKY9xL%2BmFEY%2BJd%2BfdYFQjBcK6yR3bQBgW0HSOsFMBBnIWrTeoa6e0X2ASGCANMqBrssnaz3PlVFEqJ0hq56HxW19hC3cO8pJX5lXv3ZPmTrbKvRM7qxI76Fa3R5x%2BUOzM4esYMsHpVunv8kJHVUL8kvyDo3hxKC5igdc3HO%2FFOXl0QfYsBlPnJd%2BYzjbuyI8wzYE%2FM5Tb56w%2B3xCsASyB%2BDWNAp3VQjabSU%2BcconkS1fWlrNQ%2FntbUJm5VVYCBD8S4G5P%2Ba3OZ9C%2BunAnM%2FdlhUSSn2DPwts9YTwtcmHTXE0mwC3XuNOLTI0kdAUcE6JJ8GFjhzJM6qm87jiNAM5OPaZE%2FhgVFwsZvABTNkafBTzdnPDW%2F%2FmofFJrn7xOJROyORTj9UgHSTIdv64OYuYyfh%2FCnrRVx29UE0ptg2z48lnrubWvGdNtt73NRXbcmgx2jO3sOBFF8zgMmyoEG6eFQmnQyU14c%2BFpiEh6o1HarnopZqjY2aYdu61N%2FADyF0tvfdZoXiZOZM7hzV%2BgsnE6WErl492DfOluHOMHso1PD%2BZHJ3bVSvDn2ZcAfPvw5iNEefDKERcDeH3npRPmv5qMLPa%2FMkGOqUBMSt3ZoKExOCQQsuSgd3mdvrTlXH3QWYldfZtb%2BaYikll%2BTQWAHZL5O%2F6o2AMfbPHHZYJeLcLPUmDk7jA82aMy35sgv%2F638oVzv2pTvi7XQP9Y%2BVKv30IA%2B4tARp3fO7YYAWFMcL2eAYNaYyEYx9rremCzmhUZtnRMPUOzrKSp1dWy44R5JJP%2BAHeBWTnYTgbVZrGUGSuml%2BdIyfVtTpE4K0r7Chl&X-Amz-Signature=07e5fd2b6a8bf65a3f78dd95596dd9278935ff12b06de9dd877a9bbb9929e592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=e48087fa84d8c5252fb6f56a7ac7b756eaaad4d782aec4dc3b47182a805c843f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJRIQACX%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIG5FitBQEaBu830hj79cZc5kHRvucA0cGwR3TSdDrBWqAiEA2g6xovPvA2QMPtprtZh9Y5fLvp8ksp1sjEbr5nJlSeMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMbSDemFgqYXVJcKeCrcAzziSB%2BaxzjeGSoOZfKhKygTxHWt9nc6%2B%2B4JKMMl4qDd6n2XTkxXQkqlb2TL1hlVTErwUX%2FIsukOGYZC4tboXoI1RPQHCwav8Uz8coK03r4YpFVIKaq7sRf5SolTFamTaU%2B5AYEFdX6Kt9%2FKZKcJvVrP0Eh074R2LldNxVzJ%2FnWEUJD%2BrmVYl8i13txRpuwr3CZS9BSB9os1qOCRZhkXRkvAURxPbRT55GcKn2bHcT7RmwgGoDl%2BP9s%2B0E%2BKH9HD9OahaGknuRalr7NLqdP2G9VfyvV3UY2XgyPHLz9LLRg4IHcVVIDu5%2FhKwy9rzJBCzsGubNg2suuwZ%2F1W0GpiY33LsJyrxI8Ud6OTpw%2BAdFNCxRf%2FZTj4RkpQEayVdUior9BeVKO0pnOylW2UjUy9UdQY2XMa%2FkdabvfzQ8xLJnsigSzumGh2hifbvXRd7L21j8Kw5AUNx5FH6fiBASACbEhmKJ7jMiEm6GZlg%2FwIlamVRveY0GHp4GQPyVt208fSMW5czLXLcnzBTPYwcUV4wT3cy8RH0U9bxJsLnEAwxqS0MMpFWRHSxqQ51AbmE0dR6kYOUqBa%2FUilDPFV8NvdJfGCv%2FIaea%2FhI%2By%2FjzFL%2FwGUQ7BAbQZVnybO6xnPMNza%2FMkGOqUBmg193b2uVFM8JxSx%2FakqLHyBiFr%2BELAGTsGK0%2Ftb7jQqOOTvt4knZh7MC0VQIin%2B0njUilFHnCnQ1QFfa2ERHO%2Bvlg7Kn039fcdNPaojsqX9x4fkIcvXYfQXXvaL%2B9uZRAFLNgHmJ4nLu4qLF2DathVuF3ODikz2QMQ8qDx6VTe%2BQymssvPPeAR8bMMLICaovC5iuHiHnwemjMOzAkFrSCuAR%2F4T&X-Amz-Signature=7dce2799fbafa972c41b9993b9534b9f08a3a1ba885065430d890c218abe2ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=175ad11fd37d88d8f127cafe6e952c4e88e5a6466d834b9a2aa8809f8fae79d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHPASQR%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHmYun5wjKpwb70zFbo8c5XKSTU1jk9SidndXSTIgCyyAiBzmIWWXaI%2Fzx95kCLV02LcWpRGfsLHRK%2BLEvLUx8nDqCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMP%2FnP0iYIgb5PIDEVKtwDGuwj3ceVeJkyQP0JUGYbJ94jdBJaGi9Vc4MMpxDMkn7iGs%2FylFhBD400lQv2cSW0jvL9XDsoLZ1wixdzeROTr5PbfXa%2FBgyt1Xo95%2FtkbpdyswTN7FDWSk6SKkF1Yco3kdT99%2FCwpOnIb%2F8wJsyT36z87rYqFBcJYjT0GV%2FwEQ400IYTaSQ%2FsFyHBrFVLf676vjNubc8lpGKvCCGER0FfQlU9BUMSR2AOdqSdnaDDQzexha86Xs%2BIG4MsaL4uHg5SkFlvfXQDaxfrmGwjqRK0yPFgfUWMjJaYTud2NKsHDJIz9E8BaemqmtJM8lq9MZQx4P3LOv4fkKc9SU3HCIsWMICcVr0sZ4Hq%2F3r0JwFbqZ0G%2BvRTT8EzfwJ%2FNv1otnW8aqfWTi3AjajKy6TRX5GVAv%2B3w5MgzLxklok%2BcT8gdubOUJKHMH2NH4eVzcC3Oxc%2BhCOZdoTOJpkJYhQOaIFz1ToOHB7Y4gqb5ud%2FUBivb3AVmr1LA3f2XaEn8uweTZ%2BqdWvOLNXmjH7kHRa4DdFHpgM8rFIgP0Q0WaozuKxGW5Bk5nASNSeAxomnRP%2B%2F9AsOZX9uMVmbZx6hIJ3t8ob0c0APglk2WYtDLSO6F6KsvIDY9O0AUFAxcQv9Ikw7tr8yQY6pgEVF12bZsxkcrilxLJr1FUD2TlKVTH89EhPc5qdXQpGAxUB4BAQzcbFdYBRhc%2FAx9gYx5QTuPBMFbEhB%2FROgz0nt9MQYWCAYahwG%2BaHnAesbWkN0hiD0hXMDxNm8HFjHEpoTd9dkhmNN4dnx41JFa9B3BOtE46OKZcTxpV3DE4m53zbWtvUMYQRhMfoxWrKGs7H1auogDFTqGSvAshuyu%2F3M4pzC0Iu&X-Amz-Signature=c210bbc0e76d2f5a0791a5cdc6ad79f1981e1591c1d4adf58cc12ac29414c087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MNMWP5D%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCsZvK7KQs7zsvPjvV4oy2lcezf%2FjShC%2FFyxk3cVCTxMgIhAKPe9UGktEP%2FSgbz8NijcfIS4JWo4U8Ma5VE%2F11K4x4yKv8DCD8QABoMNjM3NDIzMTgzODA1Igw%2BtrpWlHq1jdl0Gygq3AO%2BK33FLnoSAwLSF4%2BgETIqgLpKZt8JexEun4dClnYKux62wl6e03xdYMWnLwCrj%2F%2FfhTMa5cZQLwjK3GlmBJOZF1pULZ1apcu9I8m196dOFf9MkvZHxvCZFqtQNdA024mYHtGvX5Ln7DAA6hrYFAiJPPXfG6iV00qdZgwH%2FO%2BP9MS2NVojO9zQ2kmwl8V%2B3Sl98fp7Sd8qdfFs7pWC2V7CCuc0pxU8rXWg8fajw%2FQPnZbQHFGmIlaMzRIuK7opaXZgNKeC29qR7p6sNUaXidyB%2B%2BgHQXgOxLUPA9RJJosWCJJ%2BMuK9TRQZKqYbhm7BnDNi4eFqUvJRfNK6L5odsbW5OoNRxA0Faw9UglbGiYr7uJ24%2FZOYQ5mEbjtSCLngGlvXKsro4x%2Be92jU61YxzggxSwFIkmdx0cWbNq2JfFB7iltCMoskHb9oWIgtfspLR1wUbGhUKpMFARLWWC6qdzwWHrMy%2BjH7sLrmwa5PgdZQxaBNiCLmS7DaRO%2B9BCA2IWH8%2FBCtXhdegaN8MPOXX74FPjvBOeDG3mGPjRl5PEc3Q7xy2g1jpaubp8KIOXnskxFAFDhmLpdCdBf1ZGDqwThkQf1EQA2I0hxDjIJ3rYv%2B%2F6LrlI2AgALmSH1%2BCjDY2vzJBjqkAbtZv%2Fo4v605xhzrkrdRqkf81App4AW8iN5YdALR%2BHeuL3aNE8Y79DW%2B%2FiGasOotWXEcIjBf04f3iQahEcTL1V6jsh0fSQG%2BXosi5JH7yEFF%2B98TcHZdykjS8CZ%2BiJHcE5%2B4cthdVBLfLPdsct8d68s6VCo1fDkglKb1tkfmFpjPpKyWKmqBzqtvd2YzAZkz1xuXGnEO0epU%2BC%2BoiXSngYnWmBLg&X-Amz-Signature=6ac6263948b84e4b7d019dc9614f20999b3804b887d50a8791748141e990fb34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LQ2CIX6%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDZS%2FLm0UYDEx5XUCjAtUxsdYgmKc6Q7et6l5JYBRAVCAIgBC1tdVUjMBMmz3P%2Bo9eUvpk0QI%2F%2FtfOPCGIX7NKUCS8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDCq6DUfsQSiEfrKxoCrcAx9Zrjh6qAFu0Vtlc1PQZtHdLONkZC1FOmrD275wO%2Fz52yZBiua7imQcR1tPTK8H6EblXNwXQtn15L6Z15okLAQEjIcu7KrM2Z%2Bn9bPxV8qiUb60XlZ1qppDBSSXR6n%2F4YqrebtqaqeFFTkUVTkcLOUZJ3YyBkdVn4No6y29%2FCgEORHolzvSb7coUkE3%2FTV%2BPAhABdxj67y8IPoJfn1mfA8kKWUdrA0Skj2v6nSRekn3ZzbHf0ttdPtvcuY5lwqLlDENhLhoQhJO29f2xuv1r%2Fumi3eooSZ30ntWDvZJ2%2BSsdMfeNzvCHHWWm2ZpN1C9hT9b%2FVLftP8pK4mAfxyyf2QqCllHXtcV3oPg4W7YN%2BzV2r%2BuRpolgbSoL96Goa3FwGpC4qVR2ag27yotfBDVk8OXNzwiE6moWKFKCP%2B%2BK5zXBIwYbJFh8sHlO4kSAAcjkmtGxRb4QcZj0xhC9%2Ff0z15AfLzQ7%2FZ3qflO%2FkkXuu1%2FFj54Bw%2BCTT89QKtw8LFGIEKmrA6UNoXd7lauKmwxH8MebgM75eahphE8HEl4%2BSirlOXsZv%2F4oxEhe6UDdijigfgtEZnlsrBqNk%2FQPO4uKk26xIdYGOaHU9Lweqf%2FecweqabHPmH6%2B9sr2Jo3MNja%2FMkGOqUBeoBx6PC7d75xw9bWhDXhlzpcvHTQ%2FsW%2FwLXg%2F%2FMh44SJ9zzArXzdPKfwUx15D6KdQYzzhRat5qR3bRe2GNS2DKEGWyc5GMQ0zCuIK2yGzzpaDILHHqXnfln%2FgXXTIIrFg%2B%2FY%2FoiS83RMPmTMbNgwz8GZJwvbULIvaF4UVm%2FfBQz4UEl8yIZniLENM2j8cx8L%2BXPIfpRV4ld%2Bh20nHxzSS9xGAvFD&X-Amz-Signature=82863d84403ea43bcacae8e7c74138037aa55e56bc699b315d1459aedfed449e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=2d143ee68e5f62f4220959dbdb9cdbbc31be4eaebd85b45940b2982745958d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBBYDGP%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCb%2F%2BrX1ZJE%2FkbwAI6H6loGp7S5C%2FDp9FkK8m%2F%2BjUGFUAIhAMV4hX9lv2EWrMJez6QYVZi4abVmY08gW3mD0p%2F%2F7P3xKv8DCD8QABoMNjM3NDIzMTgzODA1IgywrPYAPKMABiEYgbsq3AMqlDOAgRib%2FRzgm2DnE4z1Fk%2F4Z%2BAAP4t5n5ct7PS5YMjqTGFHh2Do0GEfzC4SQq7MZqlzajYdmULK4KbO%2FBbIw9rF8EPhnQAw7Kc9rj%2BZmlZMM6ItPEBfksYNIhYdYHtOmNuSs3EE9nnw2sLuEFYbY88uRzQC7ZUNQCDhIO%2FsV25ggKGuTfYHbx7r2g2P7JLhYxukdTFGfGVNqI8PwCOkuMShOd%2Bzre8e7SY3mduKtE%2BnE1V4k%2FQDJmDz7sGAimQRw9Nx1nKpsqUenrSjzVsGaH72XE0n%2BfR8PbuWYX2%2F3Z2YN5eDW6sEG363D5kCnzJIpE0NoQgUWj8Ea4IYoOyIJ53rIB53%2BZ1PX087D9ePv0l54Dj48dTlxKcrzKEsIh9jy16VoRpCo0X4yRJPYmVy40DXK6F3o77tS9U3qh01p%2FuUO0%2FsMhv2LmyFMXveyCkrcd6icwjj6qyIia7hatdtWTDlZn1q%2FMdC2d%2B0YHNjOhYZ08lFm1oYJPobyu9W1bd1NBDyz4G79s5NCFe0tiYxNyVLKEbkZw8dMRI4Zk%2F27h03L5uWgeG5LyFZGHvuCw16N5shqNjoQLSeIc3smJvQHzPQK8Tb4tIYTPcbgnrdC2OIgQ17m52aUbxyXDDa2vzJBjqkAXUg6wc7lKJYrfiTcgNtTi42cKsuDOTiyakZcX%2FR9mr4BPvrxgMhcBu93zLfa12UDeUw%2BaGmerSrTd%2Fnk8RXiPs199ePuZ0j7SVqzix4ts8M%2B5z4nkEQSfpx4AJrKvoGIfuPkljPGjUCquuz3g%2BwBqgDPTtp4W275HQUctvZ7jxxEm9mts9BXg9Y2KAFodn2iwvSujoKYhRfNijusb1%2B2SAlaAMN&X-Amz-Signature=f71ad46bb832999b696cb662cc36fea08f3e58418a70868617e9f9614f5dfd3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=446d123339918d0551ed5ccb9aaad6f01647fa88385b38a4acd952631a918295&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=9ce96f243140f9c1ba90ddf485cd301ab5392deb92d4a7322f6a01c83b5f39de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=21dfb2172a82d7759fb6240014c09825699d6a9d7a22fea456c0e10ac7d3e3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=16e85bc7a9e07171aebba9afddbe320d7b710b070213f113e706a04eaaf3abe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TOHXQKU%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCuVWrprtFAhjqy3D9dzGFavxD0LGCK4jgNmYXobTLrQAIhAPZ%2B5LU0c8m59mya7R%2BPPdkckGgI8CpHGIAObgBIs77HKv8DCD8QABoMNjM3NDIzMTgzODA1IgyQ9qAjsmQUx8KoQroq3AM1jJgQWsQICbcnFFWOqiLiBaz%2Bgx2gI8kqk0NwV%2FrPIaI%2FhjKVLDfeXGUICDh8EJS1H5TLGPVuPWxM%2BXQWmWp5QShciO9nzUgFI4%2BYjGp1wm2XwuS5VK0itryJ7nhkRqd8dBH%2B3lgqMuC87UMBkwwvBB6bwVup%2B04u3uW9%2FXdQZk4TYVpq%2BoIQQPXKyXtNXzOjMM9j8T5V%2BefwTDMGPYfKYKNfQwFz4GZhpDivC6Es0x3lgZ9cnWDRlRQ78J3w8h7vb3k1lf2icQPuw7zpqxy4IAWOLqZfsrjiQ2TQpui3VbzY%2Fyvq5lE3Haz5adhbzJA%2BoIWLjA2UVgbuLYoq25%2BNpHQC7ACO4bjguPplXYDI4NkZBZpr2dp8gHMXKmtfQ9iNJzXkJxBu4JY0OXZ9qEhZG4QYEi1WCwYk938zpvYfsGfcGCUvRMnz7x1l8auM375fv8vFcuPAu8eGJw8bEC5zrdsV6qAG2Ond%2FbO3sr4DulyCYVS%2BiYiFg40awDWaJaPD1sSz27d3uo1vcwrCwMc06MjkY1ivp0CF5%2B25poaBXLSWDletUbzVKiRtexEzzKHhFmIQeYHUZH3vxsmK1o3S9qCzEQYs%2FdfQroJVggL1vuyfgTEVCT%2BqZ1NmvjC02vzJBjqkATmh1k9syHfmHEP3woxLm%2FPF0m5ojT60uaT4CE6iEFwU10fbEa5yySS2IPWkCirQOdXxV7UWyCHD823KIp2iLyXNgBsc%2BojKUXASCO9EmKg28poU83mDZ382SiylCRoRNCmdOVFF4kpLDowh7tRvZHRhvHbHo5uXbAYrvGDqzdqj4rw5jWtsa6IyW1rYXh%2BjLbOlhNRAeL%2F4iKrEvjKuraORMYZW&X-Amz-Signature=e3ac928b42d6c859f1b1786cc61b53c60f8605840956499819faa56fe5b56b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=bcdbf568250a82bc5e6fb63529aea82953cd276d2510ef29df6ff389ec3c8a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=b4c0518a20810076243cd2282b5711d7ee6d00db71c20fd868e7c2bb908ecdb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=21dfb2172a82d7759fb6240014c09825699d6a9d7a22fea456c0e10ac7d3e3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=be8b0280dbf8dd7860cb950df7f690bcf1de85ec200f01e313f5f66709874592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=83125802eddbc502eae2b01aee7ab30ddbafe2f5e724ee8aa8ed65bda66db242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLXJ2QAF%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCOw0OJQQ0MUSQEYPZSshpgytcVZ1lyN9knThulwr6xFAIhANq5dNYdl%2BQ%2BzNJBrjG8ctGGRaFgvyZrXdP%2FlJgfXhFAKv8DCD8QABoMNjM3NDIzMTgzODA1IgyGyBHdVZSPnIEkudUq3ANIR9A0wHCErKqoAnKfdsKIVw25TPAaUTTX%2BPoY%2BJEA8hJuTUeZoUYfmjjoRZjSOVbJtN8fjVvqk7UoCb8WsCdHbqhttYVqxMG9XldNzz9ITG%2B3nGNQ2c3Uros%2BePn0U7OOUq9psLni9oqlWv%2FibO8lL%2BdccQG7q8eYSCkie98PYXQAEVerxyZnfgnTTGu0cQdVY8EQ4%2FayaOGHrMRmvt8yPcQqic5NMRw9kSytcjWcAYnoHelQlmCzEBTj8ziPlZ3zp4Nhnrm9OYpLyziDYyHeYlvpmquraO%2BCM96qDkxzLVSkph%2BJuLOjwzoLe%2F4HSK%2FQIZfnW49bxRG9jDeq%2FzpZbjMx9yiY9n6u3L57edVG%2Bl3SRRu6QwkyXvxQyJyYSfyhORR3EyyU0VhONl3SmKltnFrocVDDUfcUENCQyMYZ%2Foik1IsiVHGg2NdrJQvwJdFZNz3DPP%2F0zsPzVjrlsIAnIwQMhHrbPQh%2BIMnSE%2BlqWRVptAKm1czO50z5fnszCVvqc%2FfMvphY65h4pFINbUfnGr1kXRo2WmClTtXml0lE9v5wLYJ9a%2BiWCk42O7JD8PVXQs%2B7yVXO%2FffnYuY2qMh94eGOIeaTBl3f7jdIJ7voK3I%2Bk52kA4ZQearO3zCx2vzJBjqkATT9vklzitwZGDSlDxZTTNiLQcP0VO2yGPWpw9ZaViuKMnaixYlbDuOTG%2Fo9oYA90a423ObVuvZaMv0qsTRtc1YwEKoKKT8%2BIqaZ9AfzgiGqIkhBaRfVrZtRvQp2eQWnG1o0z6sh7jXkIrKKWEVfDJrHrdvhndT6E6EFwZzuVbIItYOttX8si0dJbtJvVxwWQCH%2FTtHuSjp6SFFCZs%2Fwuaj6OIuW&X-Amz-Signature=cf1b14fd06d359ff553efc23ac44e8a0bbe4a45d79082e1da349e015d8b396b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


