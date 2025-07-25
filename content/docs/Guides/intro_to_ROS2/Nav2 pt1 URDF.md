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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=a8de3a62399fa769d483df344c736f9e55ce2756317eb3d2bfc70531778d8939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=f8d7e0e84f36dba27b1d5b01b1c827ed603ba97fbf22bfe1f929968e4b9e5c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=a0de313705eadfb232f99d1254c72a18bb1706e30b7c6744ebdd78d0efe5accd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=5ea12e8098e563d139b5923d1a86b7cce0428d6f324d3a06b2541b5624224388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=3ca7af498e102d19325708c51d3dd648fd6dfd2305c80a3909088a7675d2b168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=82fe53c87516d66ec21f21223c4d1f360874b145c3141781e6a05d0b23669669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=50368c0c5c27128cfa3e5970fdbffbbbd6ff06a20c8e9522d1dd40bc9a7c767a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=5db7c579f11d0303686932b3e463cf7c965344f3369f762fcd52b011daa45858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=17097da1b3b73a8c4aefb20436811f3fcc7b079d402377181aa9ed00d0fa26d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=279fb58e651bdef53bf69b065a5175785a3801d543f14ce6a2991457e651f494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=f45659c42db9ae08f51a9d71b42f2d2af8aa055178b087ce1af2031ec4426e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=ddb588eeeb93cc9c66e1093191a5645a3bfe322a5c3cbaaf471b3c1889c03c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=ae80bc222cf63bbc1751a753e0bdba6ebaf61cdd443500b36eb2d029de9e7481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7AI2OGP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQC2Fwu5LRfNqf82ByMZKS7hnrgsOvGek5JvVfvGxCqZaAIhAN%2BknR7bjczqpaeFcK%2F96FQl3XvLaiYwDE2a4mkuYs%2BaKv8DCEYQABoMNjM3NDIzMTgzODA1IgwdTOuQNpUDLwFd5x4q3AO9Tit7laePYfY82pEFKIVj%2FbDKsehhQSd8I3NQDZmnU%2FNUt4qtQ5VUgyN2vtwHTqFisvAzAk5CqfLezWr1b66%2Ba5En2zvmWvBuV0ITctkhS6CsUHnOWUSkt6l0mZcjD%2BuovUXWe3OBGxoH4pBqrcgGSGNhzm9pV82%2FO1p6aEReBN3k%2F5LqephW%2B%2FTkjyIjZ9nCyea61y0GzZftFJKrtHxUQk0KIm8b6J9taIp8Yzd80bu0Eu1KXNnm8azHVxDWkZ505Amif2D%2FngQNvoW70vtXDkdMU5uDHSVcDx9FFaU%2FKgayE8qBqr70H1Z6kfFy4256eGRjYk5qFY51DnJP0L%2FEIXFD%2BPm4Eb3jeLnxGeVGrvolyyhF0qEm7KAyY9YUu8%2BQmUKiVgi6pc%2BRG3Gbb%2F60%2FTcv6hqxa4l8SHOP5nC4%2F7phy1S3mmyMK1miOJPWnsYr9El%2BtBQvTx354JYcWVdRKDxELEiYndQbFK1Y65CQQ4uVJ6g%2FBh4L1XNU9kglf6AE%2F2rhY7csOXTUV0YB4thmunAwyZFKHgmqKjq6m9O5C46C18XyYg9GJdq9RHaWZ1GvSbbG0MBafz3vGr%2Bk3ElTZGRvLRu1KJEKw0Y6qm2rWh2X6AIBi27ILAayjjD3ho7EBjqkAcdaQ7ywaq%2FN7lLnH5KqQkuZDukUJQN3pmAkuyI3lep0ee2lf1UH8vTvZQ1vlifR6SZ7hPZK9vNZ7q4EWsJfGxM95qAOsZoSrnz4S%2FUqQ4Er0B5OLhCbMX1z36R839p8N8SwsZ6nhf1kmMDY8VL6Tfq91f%2BL8vs4NL6fuAgE7kggWZ2IeW5fvajMxiIs1Bq2HsTENK%2BULfyzORq5PfQdYI5lh71G&X-Amz-Signature=d3f47d7c924fa215e0876613bacff0a7aee4ff86a344a83dd3e57abb6d8245b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=9953bbaa6f55d1ed0794d2a192b43fa5c93e50a5d971374f62af1673717db3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=0fe8c96d5578cc46ba6d6111fa5f777ee379822deb45d4657ced641bfe2daeb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=2e7db4d7cfb6998b9bce3ab5ee074e37996a65442bc5c785f51266cfbd901948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=81ea7fc741c66a328023a30cfc9fc84d625ccafc6a9639754af0e42eaa2ca8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=b0d8d4213e65aaf6b36307e9a451a8897ac0516a5648ad26c231efa1ca84dc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNKZVOH%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCmbDs7OL2bIXTilrE7GWKfxXKpPNm9ZrzVlixLevAQEAIhAKRXodQbofOHTXAey1BOKF4%2FN16VYRPQr19zNQPYXGhdKv8DCEYQABoMNjM3NDIzMTgzODA1Igw96UJ6mIkX%2FSlzOgwq3ANxfwZyJ5%2BJFZJBgltf2QandDkhn0o%2FddSPggYpnNBdyN%2BHzuKHiBUWw57fCb%2FXeSp5dKh3q6mZLPowKS0lk5dPk64OYGaUnqAxy0pQwf8hYlL8Gcdb8H%2B3QNUCEvm%2F5DdUssqb0FowI3ejK%2B8d6cydhH8cwbbHKRtI68ZTcHoUp5sABHdTtcENXLQL6X7cGKhz9f0g2y82jXrOJS8yC59mfSPbVb1bGna%2F8ynfmS32A1k2TlHINJeIVzdFsYcrcO42PzGTHIhr0p83MjOHC0%2FJsmXTtmgxwNyklrQIf36mSwYhg2l22zk%2F5o%2Bk5oVCogeB%2FjX5oS7iM0EOXnH%2F4fWwlQNq7lNbwAUhqAWdMr44LrgJli%2B8ZI4kYdVAflhm70AcAKkeiv4h41NgQtFp0FfJIL5HQhRmQAw2iAstVTpTVtSabccbqHpwaTkZBnmtbEDHU%2FZZuqxfabqXDzWBwN7l6zh5aCu3Lgr1XpO5LB8A2RbTP76bkZku4%2B3nKLg01TdltblPsdk26AUaosqAQ9oG%2FKM4gY2UkcuRKfypYOC198xLx7h%2Fa5oujQwh5k%2BnEdEwAuwA6%2BOJGsCCULNiJnZot9FYT9FD5rARNAYWqZLR90ZOeq0znizprMJEpTCDh47EBjqkASwjCuG9liKh0h3anM1%2FfAv6EJzCzLvpDhV1b4rBqQ9I0teUFDltT%2Bx3G%2BjHpr8UgyLOSYw1w%2FIEF7BvvqLgGeWXIc1m2r1WMPxM2WczGTleTGGxgKyG%2BhUfkQQ%2FzGht8uszVye2MWpHvedOW%2FlbqhsLjrqxWcQ5rOaD5xjOlyWYif%2BpFSrpcrj%2B%2BkWmDrdzOarqQf05xIWAemCAWQn7Bl50O%2Bpf&X-Amz-Signature=b30c08305cc753509f35a343f2d48f05981951ca41cec0db1ac1da767f8b1e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
