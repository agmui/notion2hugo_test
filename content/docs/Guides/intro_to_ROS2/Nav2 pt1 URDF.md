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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=48a2f14c74c6bea3a0194f83870d84a5799fbac88b4911ba1ab72dc1c6623b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=1e2cde0b1a9a7e2750f85a7efada1afcb4fcc13e2c7df0f1ee41ec82763c9c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=89a5b283146b0e09350cb9657ec05af7f4c8d66d026a6318c8b18649ed451574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=921578e3b9cbbc341bfb7a71e5d45f6e9dc34db3b4a3ad374d1d9702e0315996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=37d8ebc57892ea4b70286390fe20f563f7cd6d66967df0e1e5da98dae51a856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=12d47ca1a87125ed50fd32efb6ff9de183ba1441081ca46ff5a19316faa563df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=7547145ea884550fc214b03adffb4bc608f9c544e9adb258214428454bb2ea14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=d93af08ef7d31cd31e846b83704554d85cb4e6a3da0ea6c52d14c80dee078f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=a208c9423ec8abca19f6e509f995cc460df9b5fe6cd0dcfe3082b6a35941a4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=edf242e2867beb218ceb31da51b681bb9be1aa31f48cb0e1f3d08fddf1976da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYC4MZ44%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCFrRmh6MfswuFM7huG0bvRFrSR4JokYsCYX1jtYBr0KQIgHvNKbl4Wu1dcop6fiOUHqibIpwkXTT4oYNzvcraXKj0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBMWkVbNme0%2BQadA3CrcA9G9hh%2BRHc%2FTqGm298KPaIUgv9mMoh9edPoiHYo1wUkhPfleLzaDXjlYhnkdl816a648x8CcXc4fNIYSdQpLRymuSIfPDY0fwOQ0WvUfzgtNsXCP15D3aspL7Sx4o4RI4lXFclPKrUYYonNs2FowKh6Xd2EPDwxW4DJSTkXHpeyAb59EdoM7DNwWxHaLJmShzJXC4HUj7wkPJpaKcXQaHaisrh1UFUZd3CE8QQ8kB%2BHGIO89ZL4EdBfLf%2BfGOr77Y5radcNK3X2Q%2B196p6FzzXuKAIB79NHuuvU%2B9VNAvrgjF1kGNvXGb52AaBiMorrzXdU0WFiwEVHMAW2K3HiYa3MF6mTM%2Bg%2BpyqMkqDpzZXvjf1fJ7fGWEfQGHsyUOmLmUfnjVsb%2F%2FwpWAkeJNDQGw%2Fac%2FGyisCzefetixxoDRegXpz8OjIHw22juHZi6dUOr%2FLdLnlcXSpyO5Oyw9pLryA00UNOOHlIMstN2BwIXevOYQ130hRkbFn%2BUO%2BiTgspxAGz1kq%2FkbFAQ2lT%2Bb%2F5tpZ6q32Dn9pHkiFlVchoOJHO7WtzMBWVMhFwWkEBwyeQtLbvD%2FHIdx%2FIf%2Fy58I0m5LmytxGSfFIuG53pbno01k0nvIGu%2FcT8EnSNZSTYDMImridQGOqUB9CKpb6gZQSG9Ola%2Fg2kC9MQxYsS%2Br26auHUre5DkYbWHrU%2FRswBtQt1xYzNEHhNiAgZlvGPjzKY%2F5SQXV8hnJuG4Axxdf%2BnxqACpThD%2F2p0DCGcmVBeg1lWOhGJmdZX%2F1mpkLRIUvRAfLJE4xUAEY9q9uuPzEtbB5MXz6PtuS5gFY4wg03TJMeJ%2FHaIVYflwqgnyBx%2Fy6zM75S5GDyaRm5C5kzi%2B&X-Amz-Signature=813dfb06a41f17e966a75bbdd8c2a209ba70295a0a805d9b5261af0651f346af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZB5PUH42%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDew8WGa0CLtJpW71UEOp7tlKP3zCxa04iaVgHrzYeXqwIgEa5U5081IQCsG9cON%2B5L197PnTzxHjYDtFT7bw2rPfoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLXXqfocyjkz4psunircA0nZBfilgtyZQz0FPS73JcMT%2F8dlLVZzlwO7A5yWViQjgYYYY8Q3Y1HP%2FStojLkRA%2BgvsEKX5zH2UltU8Wke67ZVCK1F3h4YyyOnGJlxl0Xe14g7EVOYtvs39%2BIuKG6p2qDGH1ZBR0UINLwbx8aiQUK1QCDzZ3hUA83P2K3jYVYd7kFt5CuSaqPQIlkoR8fb5%2F1xfo2C0%2Fooyld8xlTg604pVyRbvhVEO9wDnIf2g15AMXTJtfbTgI1XzK1JJ%2FDwCB0dVAhJh%2FpSw7Ypn%2FfpvFUOozXsJQaRsDajTm3rYUsfGEu8nzAzkRpzCukLiMjadyRaZgWc2mAMEa5qpqVbYO3PtwVnnDe78Y5nbU9Y3d526NGVnN%2B5qJvrI0Dd3LjM7WLQdjU9KXfxfeXIHRQoqdhSmFJSKUbC4eLAGwpN4plagu2XxQFjrg48ETawiS5VfQMdKzk2tEFcZ6sBShRXli9HLdvk%2F2qEZ6fpNeXNca2wiotLX1IuNZ2JneC4Dc9W8erbtx08r7Q8Q01jC0Zf9KBqA%2BVU3kNPo%2FLFzwZH6nO5ZS6sBGotcnXmiCMZ89%2FwNZwrOZ3jo3wFjqo8KoilXFs5K5nZdV5lpeX8VnmOb7tQTUBVWsfheaciPdSZMIiridQGOqUBZbgO1A2XJFaynHXmGYITBxItfILqQLth9vvcvy4Glgy0O94c6X%2BvXD2ITC7aDimlL98xg%2FwHVw%2BQ3fAn7MvjuzcHkaq6brYgx0OsFTRPIGVP8js2n1c2q4POLPNA0EUHo4PoMbuvD7%2Bg19SMpl8iFgV%2Fnrdatq0aso6D5mY98kGZCYEl0dJm%2F%2FoAp9cgiC5c8mZsiXtrsXvS5DIeYZEZbradVQyo&X-Amz-Signature=f1be0a486ff6b5027cee30ef76c7ab74fe374e874a800b27a088995f45c9f52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JV7MYKD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDTIU07WdTRmZnCzZ7WGc0YNddkYnjeJtzWiu4mXSCg%2BAIhALv2r2hDiFzsJGyVoTbUkY7HpEeA%2BGis3Hb7iaajOu3NKv8DCDoQABoMNjM3NDIzMTgzODA1IgzkNW%2FGtUT%2FEDigAPQq3AOw0Hk6cK0tmrYOsUaw%2FK4Ptz7UcRXHbTf%2FTvc4sjOetU4u2cKTJDyBTK9vRloNeAgiv8q1QVeC9nOS9EyWHcNvvu2xKSNKQ234ftqBZ%2FSTgylF0xBKJayKYfctvAV792IbF3UHvdSoNmLmNHlJpaG7qOPVi%2BHQ0nU4pHocYdhL%2BBCNjgooc4WAReS%2BBuhst%2FXs7dh7KAV8dYrFse3cGwRq76gsz0PXIGyAlHyWt2eegCjMnHc7yPuzf%2FzmTsafh0ovxR6Zfv4HewHTlgIYTePmXpMpuHElBDtfoaIW1MR1Z2ckmCmovCBLwAtADhN5rwWeB9Kg63gthetXB3tG27O%2FH9GNs%2BDjFAHByw91fmwms0lLgzXSdzFYHP2Xsv0Sk4xUMmEMVIJFokgdEPiuYZop61XPq7AUnAJd62aKxlvoyVyLqIgry7S6lPSi9HEQFk%2BK2VgMT1pTpQXuP%2F7dUtTYSmPmZ%2B4hU2ifwXyrz6YaYnLv3vGRmIOIahSRlCU0x4q2fYH44uiXIkr763s6n1g1MDSxQOqmSyHDbt%2FgF%2FeQ5qf0%2BhGuTbfN%2FiZOj%2FXuKeuDzXh3OYzrJPU8I7RDXk8rXn6e7DGn3t9iHI2u%2BrgoPw6AubKGEO3xED5rkTCcrYnUBjqkAWPZflo%2BqiYfaSvinj9U03x%2FUUuIbo0oYR7ERXy5UIz1aM6JnFO4IwANe%2BWvsW5LwRLGVyoHiM5tTsFGMUoX14rUpZy14QRb2pWB8tJgxG80nEqb%2FMI9Ted%2F%2Biw18CaCis4pNv8aANewnR53Tbln2nV1Kfk7%2BFS5NaqHx0V6rPIjw%2Bs8NYBrAevwUTxwbyfhpqh9HWUZie1BMrHpazcbZU2eVv8u&X-Amz-Signature=143fe17b9550caecf32f4a59850e6802ee0ba42ea3b910d0ca7fdc3a546653d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=11f7d43ceca7ded96f4eb2f1a699fc925d47b8745e1e62b8dc58f3e45700dab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPNEOW7%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIA167VGxqT27odDqWdi4seET6axF%2Bva7wVA3E4Vqgj%2FxAiEAlFjrg9wfM5ViDGygtrj5WAeyjXUieOWOxBPgFvGoOo0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNhR%2BW5vg5Zh63BobyrcAzRiKWNonybUnViEt4%2BbceKEa7P3D6wkEXpVBgYxk%2Bq1vIdZhlaJy9NO4MVQED4ay7qymAWaMaOPXp%2Bobk70QtxytF9gYYN5IwoEJyrEA%2F9eNQFRb6woZOYyrbjN32StfLcPB%2FbuB%2FY1Qsh7AnggTgSEsBdgyoqUZxMVbI6%2BLqN%2FbPTkRvEWHZ%2FiyutBR9A3EfNkOr9fGmB91LlL1x6fFp0FsTh%2BmdPnWBlzQrncGUlm2ZiDycsNcBdPe9D20vfOKMgoaCvo%2FuXhekS7EP3oZ3zrzxZPwgv7cPUsCNpoJSJBZ6wYyHZ0H7EzwQacIVGD9sgThiDqnJLD7VeCtnOaex5k5uKkEMnZKj4QXf7ajzN%2FtZyaN2WKhSvBdd1eqHndEPz6ydyyT9BJHIRziQ79%2BprqZUQf2rSzUs7bFb65dOUfGAoAvUBCXlpn%2BlO1znV9hz0FVQztSvlAQsnHiuia4P5jawu8go%2BEfIx9BH6Ch4%2BcxN6rp0M5iNrPMAh60v3FKWfIT5eqmxyZvUdrGKbVLXam7hZW91jWsCkM8%2BzDt7KT9SGQfVxFE7CbX0m%2BAEO8ijX%2F%2BVJspcUZAsrbpjrXKFP5dwR5TJjzvgMzsAxuGIX1guG1VXRWTeuJ0p5lMNeridQGOqUBtWvqaPfzsJbrBoUtk3mAu%2B8zSUSAA%2ByZtML1RNKUYvlrocaHPC3A9nLtuAzqcOq5e8L0nF7ERUbhDiQu3XskWpbMUqMJcvhbYAMp8zRfVSXGgfwgipuE0aCsOXgoyZhJKCkoM%2FKKrtoiSbVC%2B35%2F9ODEsw30cf5lmH2CZI58oTRYiYPtcBWW1ui6TkHE%2FOe70OQNnkWRnB7VjZRFeOKa%2Bovol3Pb&X-Amz-Signature=41f793eb2cf010ba1114a19fd8e8bb9a5c35ecfe756031138f0f4b26dcfb86a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=b3876326a618a08389243423c31857aa23eea3a93c506cc88d800ddba4cc4517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UK5SSP5%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGY%2B7NyX1P5KFFfBeqFNZA1A4HCEWeInhY43lr%2B1muVHAiEA6k9UG5wpccI0rPmAwpy4V6RzdBkmm6CG4%2BBSjWlprjsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKjxmVfRfAzuEsxf0yrcA1olXavL4fmVavVB5b5OUt3T2%2BpOquE%2FJgUntseQkkxLBpfJDJmZNJICLi5Rj0jYiDTTzAma8VNRv7vHJOloi1xdgjLbSiPsi4jeWwiBaHUdPfKQ3a%2BlHHyqMZpMVK9OyOLhdiEeCE%2FewwYNiZS1nrAa49MdiHeVrxZ4MSV4QkncYxRGjreUewgIUsQFgamf0dAKoYIYPRMj6oOwHMzGWFybn2UtXJ05CDX8gKXJs77E5QRrCMuo0tmq5eSY9vrAoZjx8ZZWhSp6EN7b29yuqobNdb1u407zLR6dHrgHCDr%2B19E2p8e%2FaeH12EdkltxZ3oD42TrgOWuFr8LeBR5yeo6T5JJ1yz%2BU2432Lh29MmjK56f5JG7LPlrbZZ7tbck8KGE6aaHje338R2ktAF7eKpsWb21V7MT5xXcv%2Fij0VSukFijnnktYqmqHhWOL4HBr7C7jUOyS1ZpTQofBG57eFOgCyFBUFPbwhdnL175pPF%2FpQY0s26MumTWV0kYmAaCArIPkq1emGEBAWBGBZQY4fGVCy%2FH7QL8EnEOCmnkv5teoZ4G1aMAFCYKKuSQRjB2WcYn0KlKHmrLVkYMwJFpnO%2BXIw%2F%2F1JfXIby3WTr%2FikZXWdf8gWmKA0XyIeZ7dMNCtidQGOqUBWhZ3iYqSSJyvS2Fd80X5l7jZnpBadckEL4qKK1XKBo1XCDkz9BipQVL3sF9AstNeoBiU5D2dlDEd104064zdWt6z9dsW48Z3ZdQ8ilMvOCvtB4BRKmFIB9BS%2FOO%2Bo2jLX7O7gf6mZjwf5jkruXYZNOTvQca8%2BjropHtWcktGhrLXTfUrQlJAsBIUXtYuOyieTXJQiYGZX7IWhAInDdig4HRN3Qkw&X-Amz-Signature=3304efe6d7e5a8af0362c4c4afa67db8d2148e9c67df7ab3d4e348b072e16a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=4400e0560af384f9b33fcd7b7e85b6adf5ec400cbba6ace57744e69a782b1b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XISTWGDH%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCXx6Iju1TZGbSmRWY%2FEvKVfoJki5pF%2FHNTzG%2BzqBxLVgIgOs5Uy3h4I7g3hdpG6lf6hXTw52cv%2FBct9lVf3IGsHmkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPKf4UC2wMLNM%2B0J%2FyrcA3p4HssnrBHip6XCOrzqxuvn2EPpH%2Ftq5sUIoTK4pQ%2BSW0%2FbBqyuiBVTJ3z1Bp7yNZm%2Ba3nj78zqImldndgwTxGjpAVh2S%2Bq03HubvDKZ60MGZobxk11W3fU%2FP7NBFEJppaaEFzH80tRMBNCt4lnKMXYRpSBurByyTmTcLcz09dHZLaqwCjkifJvu%2F9lvC6II5oSAe%2BFze3NnrPTaBgA%2Fpg1DVGFQNm1LjL2yeA7FtEwc%2BnKZpvN1ai%2FClvyKfBsdt9myDlm8nvUjj1SkesTwX5cckgemuTkONOoTdt%2Bu2xUUDR4FvnGrvr8TbgHlLKTH8rlwXkRbCU%2F27aJMLJokkNEur71A7Lca%2FLFv%2FMmqyUdxknMN98Nu%2BaJq%2FnUaDg0kW00k7%2B0%2Bcw7KLWk9J%2FH2d%2BjKY3oYhzNxyhWZ7fwppmxresSBkLDUd5BwOL5FppTe7Tf7w46ooHHtC4uDC7X3MOkLU6Bs0ENTUM0cb6wdV%2B30fX75CIe14Qb771bt39%2Bok9RPd8jeKXSyQfjWc2%2BxzyKlPBhL8RaTVlcks56kIbDu5jp0sLkkiepTeg%2FkHd7g6b5X9pMD9qXostfGEMJaEgt5cZE6osTcR1iGHJF5RofDrbbHxiin6tIDn5JMIOridQGOqUB6eAUHb4DVJCUfgTb6126jOwuzGfEMLubL89khxl5R1IGp8JiHUAIpDt1ATOwVMVcMkIxUwRMpS%2FxOV1NctgdpBwAjfgkjZh1qJcBwOT0P%2FGTym7px24h%2B48Q6z5gNIRnvui%2FU9eycoeLEpgXUMBp%2FGvsIyGoFewZ7lNl%2FejEOJKdog1DX5Tnkfy4SH0nPFYdU1Ze3LJsxgBpWxjv8ONcgoq4r4sv&X-Amz-Signature=a856bd475de4ba9d1a67a565ca0402dc49a86ef9af422751761e39c3377a37cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=6ecf56f25f38b95db9aec57e00b66c0a4e846bd7c39b3c0cb765f72a876cad38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4DCWQDS%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIAFLhOY2oBDCuKREqMELz0Rnf9hAOXbGYYu2fTtcMacvAiEAylkWNZa2r65H6AHmT7DkYhqvlpCiKay07BsHJlzloywq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDO%2BGfWUIG5OGeINukCrcA%2B6qzJ4VXyIk%2FwmHYInMfmFZAUopy7Pw%2B9bkwbk9PGLgxLEASXMKanzpfHFRBq8P8R%2Bhc%2Bc%2Fp2DWODNj1F72vsBoj0l%2BwRtByzEVUd5RjAwNJEoS64TFRQvXN0Qw7zDkip68cEsBpdr1q4eFcrQdh83exPsduSN0MCicOLCieXHc33FGXczNQgwP1Qxa3AgY%2FeJRqGYnP6lXbRPrPO6Vny9235H9SE8dUe%2BU%2FiDH0OHYGgvb80DRKht1Jz2D%2B1OGSiKXf4inYQT9Lq0m648yfi0fjJkitPUYLuZpQNRjRUuZ%2FlGvaTOmED97bj4oKeECxJ3rQ86aFVKjMUmhi%2BvPhR7rEZL3Ybvh6BsZ2G30tciRKt1K1WSmvRdVvBYI1P2AXq0ieimDIMC0vQAwO4ybXHuUfQ01IqA1j7WHfxazPQa1hym4sM3WjCbcdXmGVozpcwPOccFOWZnIZD%2BLOKXRey1gD4lkv8TYT4zCqiSWm63tUyfKaEgyYdq42Ds9LBhmi5GL%2FG%2BHWHLC3%2FwVk7le4EdcvI4qSSY2NrRyVIguBF3iSfceICVHdZjB463np0L7P7KhrQMfJ7ULPJtppHfZCOcsyoiN%2BHJOTNV4sSnsXRO1jijnnxCYYA87rP4gMPqtidQGOqUBSw41%2Bu0TOGGRPdLGQIabWw1ewgd55hgl%2BGDARDXt0MrnwydAB%2BEpCOQ9Ie8HCxJV5wdZGs13IX8r9wghA6XZTZQMxa6bmg%2BJm%2BBO3kZbeLlnQNaSB%2BpWEEQ%2F0fF57AHT%2FUCvd%2FBREHV39ZC4JuMvY9Nut4dDfwXTQKKVdqQ0AOMttVJO8lldyNo4sUpRPqaO3rno7jgz6QDOTpBLs%2BdF7g30pcVG&X-Amz-Signature=1580b4bb8dbd14a75c53574e7894640aac8239223bd874ac2ea9608e0c36fe03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=d1e8aaf03b848b28806fa44b835a74d3ee3ba574d74874040cc6da2fbd9d239c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK43LDUF%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCJ2%2FA%2Bh%2FbIuEg1IhXNr26X0F5RzN0lA6rNiL41vqcRiwIgfn7two%2BMHmHJJWRz%2BNYbx6Qz0r4mhTAG8u8x3AvVKmMq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDArWg2mD7i268gtqZSrcAyCrYigNpeXdTV0Z6Ib%2BpC9%2FQfxnbqqwnOE5ixjyAbeF7r4pddNkzn%2BZLCAW3VPl4Q0qQcBLQxicI7qjlAcAzDeoCQZIXBlnMzMDlazuV0LkL9XsFmfTtIZYiBN%2BMmdREygHFg4Anrm0Ns9V5aFlEGDF8UgYPfFSei0cYEKhQB245zN3CzpAWovvPxLBAINDsgMBE2CdQJWFnGQezFk6JMABH8KKBBIfrPSeV7ziLEmFZjPS9EK1FmGzcmvhrgKmkA5igOyjg0ix91hzy3Xa1rwh2a81oGYYWBn5QsPHhRlBqGc%2FWC1mtzqbl7f7V%2BvhnzfR053lgoQabmN3Flpw2KET4dqsoOiU%2FG%2FdnhEgz9YUVDsshrxaQE1wdunHeC4ZfrQJeesD1yGC3GjZ6fL6idhxM45Ki4cdwiNT%2B26f%2BaaTiY95nZew6He2W0UQbflQI0lOaPz02q39o7HxLWYoWrmfI4b1E1Y0NxEyRhPnrI%2FAHOiCWIJNLOBn3MJkf1FDPn%2B2APCDBWoUDVQ2YJS%2FpqfGxtAJDYBHxS48poCUT96G4ww%2BGBAkJ9z3zFJWbeRBVjTjNIufsXoNsel2rZdTxpC2o4l7sye65X2DrLW9p2B29XZgx%2BcVP3nUDB%2FUMMSridQGOqUBBcT3800Vu6muLPItH%2BrzD%2Bw7fbR7zts2Uk78nna7%2F%2FC1CtpILuQjnhXhk3oJOgNW7xfaU9skkmx0t83C6O7v6KjNF5KLXCtDR%2FB%2BC8xceIxok%2BXVBmROrMm4OpgrKnKEwZcxACTLjTX%2BZAixL37%2Fq9xjsMXpL3ryYVTjhx3K8XZNP0oJ2Fp4lFd%2BP5UErWuEkL1%2BYQQN17U%2FdsEEq1j1dl3Lk0cb&X-Amz-Signature=272358090fc4cb244cb147604cfb6efcad64fa2bc0cf7bd9c9352043dab06d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q4JV5SH%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICt86Z7MzruLUiJtvLny55ZeABF9iXQbRmPMzlZC%2BuUqAiEAkUG58B%2FZprd8ogUex1UUNWw%2FIz26HOv1l1wPSYOWcCkq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDDnQ4ZJdu988Oi8CryrcAyXrymwde0q0ngEQgMfQa%2BqM2uuBv2fNpSQNb1%2BeQ9v%2FBs4dNy1uaKoxdPrMR%2F9qhVsDfySno4zhLOx6WWQ3qGU%2FMEFjHvgVUfen7ASJbsWNvEHZGeNF%2F9BuXMrxVv3NIvbedtISRJpFHi6L1ym98N9AtArQ8sPgl3MnMCjd%2FQV1JH3MLiiR080ZH8NU09Ms9JS5SBUGYd8KDoaTMTtmFLOKJyVZlZytdBv12IMz2gq9Yjkp4A9ll43CP0OtPUtXVHdY6qpi6RqBIOzV04fw%2ByE%2Be44P0NQYWt0p98ZibUIbNnidntIMghyT0H9jVV8k6o8EzMnfz3REj13FblMtvP78kIAJezRq3CyFrgqpzok2bK%2FSnk6LKZ70H6ws2zNkJIoXt2m1n2LuLy%2FtP6tLAVOfQQbDrbWTy1oBCJkZgHUPBuU1%2BoifGlNP3ksPkWclLaO5fNPI4KI%2FPOEot4jJi3vNQmRbawBNT9n2jID82ECP%2BkTtT3Q117X%2BGuvWK5%2FKDtQ4VXqYU6JWXRMy6iSDk9mzK51epyRfiwCXcWMS1nHvLWkJQsSuSNr%2BBaoh8XDPwUJyuhfzN5VqSH4u3L8jm9vmObz6VI5%2B8LjdI%2FysiqFcZMoUCS9oUvi13klOMICsidQGOqUBTatIwzqz49tcgdFXsJwDe7c%2FyHopBe0Pct7uR6IBRCBjtd1do6ZqZb3vUz4WBs2hIP28jbTNPcawuT365wOYA6aqk1cTm6XGdOBlX9uCSlwj4y%2Fu3bJr0auHkm3fCMOljS5%2FME7MlWfGEnBWvZJFIZmI8n5fIMak%2BEFBMGQKBDVp4iU560psM9S%2Fh69hw1%2FhDSDGNRj4ld7fPXSRZ%2BDgK2aghVTW&X-Amz-Signature=2445abc23b72518356eeabba723085689735c0da12fc452b837fbe8b9d9755dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=d8d133485e45b243ff16fbc010ccb4027ffd1a4db462b7e570353b167e9d78b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=c6bd2638d2e3a7c003ce9b25fb2c5c8cf158a23c8b6521cc8a160f762ef81cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZSMK7EE%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIBFvcL1tbwG9JZs%2FXtZGHP%2BVGiydE9OVWEQWAfaShEyXAiEAn2FVrShaG6c2%2FQb3kyJP1IDVcW4AXO7MWZF8bzKBhhcq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLkHTYuhP8esXKDxjircA%2Bd2iQKZeMKvWQkOCWlylyrL%2F1pPIzWOaxxUFl6a6zuPsTs8iMajoXCdlr4o8IDnpGEMwbhP9W1eesLMF%2FsleXklUp5wukvR%2F6V3T9RvWNw%2B16%2BsKJLUx88AX7TrEONiZzgwMu15HbCV4cSRxyHDJu5TwAyiDZLkSdqCeea6zk2OBA%2BGQOcgFZ%2FzoFZ4ujkkE%2BJa33NANJTmHKCHmR%2FmHQOrqVg1CzdvKwAvyAUgRg7eQpqcXYJWcWhLGIjgneB9KqqWAkqsocRUgT%2FXgTJqf43uJkeWpHNUqGCyf7xO3zC1uRuEpPY9tdFprvipEoYZKZ3OhcuxtuQHKeTuZKcyqNZARPBnFVE4%2FtyeMsf8IkUubkbqnpwWASVdlMITSsN12kcPZM%2F0I%2FR4XlJMQ6PnjLjqH3r6iXBqrKXeRQ%2BSMguLHP2rBvdM30x92IAhoFYVomu6spi74neqpzmTeQbJgs072Flb3m6uWD36gc%2FBOv%2Fs9vrF5CI7%2BzD8W4RyR1LVF9mv2SK7ggxxGkKvip%2Fi%2BfMUbXGRtS1hbMuhO00b%2B%2BpE0UbgOknSpRXBqqZgXNaKwT%2FydeGWJk2jUGILBoh%2BdAazGwnUlm8RaTvLE3c7unNjYKO1kfj4GX%2B6Va0jMLOridQGOqUBTI8Lg%2FklRo6Py1RElubJFn0U%2F0YP2hM8mm9tshiloF%2FPdlbSKvt6o2kQvSFn%2FbaFjPaMaehbSsV8enPCeRPZGBqvclIiadMcLDCWcADBNnwRoGt7GsMwFSANjF5LWD6de7ytL5FSlfHnInj4%2FgzX6bquX7DwxT94QD7yMzUbtLlYj8dBTfHjx9ZG1f%2FYQquTW85ZiH9MhX318XzE2S0xSb0ydBT9&X-Amz-Signature=f5d724a3fbad3690281b201e2e05af42d1bb3ae004f03c15f7e55485d3603156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=9e24220b1177525d599df02e146a11911fa63dc79b32076dfe0418d427e49245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=a779422c4d08974cc054f9e64435656fe713c2d396b30b6f126c8127e15f54f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=5f891c1a543295b0d717c454f32901f1d15a5c139218512739eab36f898eefbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=a182ac6bde88f74762de45f8273181887ddacd3cdc70e7ed299fdce4c5ed919c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UJOP3N%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDEbik6CiGu1HWGINhprDrQJoJJGz7KTXKEE72YraiR9QIhANnZW8VKaxt45zvZQV0BwyBHHDnjEX1CoH0ugkwut8iIKv8DCDoQABoMNjM3NDIzMTgzODA1IgxQEbiBXgDEgMTHeJ4q3AMS%2BjMIq9AviOvDxgsEXzUSSsuLdGacfUudiutlbyNWzUwtsAixpgI5YJ3mUgn%2B6NxQ4NygHyPQItwAtUXq582BndNbZb7wHtxBFvN7RSsAY7ZsIjEGWYgjaWGtQEamDf5zRGdJydxvfXrasAwU74QQfjeVVMFFPZNWjWlh7g1DEeUTWu%2Fysuo4Ma2lOcN%2BgWm%2FGuaQPUeSmbbx2exf7gtq%2BqP7IpWJ6f15Z8z5eisxSCEqH5efZ%2BDIG3%2B1ei%2BTnSb0fbNZi5Xvu0uU%2F%2FxOtp%2B%2BDaPQUWu2vso%2BznYZ7aGGabvEmYciYBHnuP4w0dpsEQqbvgTKMBqxNgIEIsU9nb73irsa%2BChKMCKNU0MyaCA7qd3DJeyFIzCrq%2FA9nRqVxLvJpfe4oy10A2Rgs5xSXcg%2B5ONUfGvtVqL1L%2B7f%2FZ6ztolp%2FIcJcFCVMjNnMfWZ1oJRqZkLZqtnlm2u%2FMlUgwhXVp864gvkIfQw8pBab7nicDZo578u5ODeitvOr4uH3wFagyJqZ%2B%2FYPqKapWyyFMl1I%2BeVD0M7DbkS663twEm7DoF6w64L3s3pSjYKQDlgn9b3H7TSh0A1%2BFtirLArl%2FQK7eIQx5%2BPiwWyqYGcLYmIhEgdbbCN6J5oVFmJljC8ronUBjqkAVVqtv%2FXbE%2FSV825Wr4PKdd3JiEIG8rgHdZvqb17Iz0XiNOJ8Sf18LVKnYp2dLqWzyGz6X6%2FQU6JbQfXUp%2FuFPLU7AT0%2FGbVkqINV%2BbA4idghALFnmwNA9%2Bvp7GQ1saMtJJ4%2BPnlrxEugGhqNzrFdfkwC%2BQVlriF6pWcSWqXMu9jpm3BANv7%2FZW7ik2iE1PfG%2Bww3eKW8n68GLRPCf34ziP2GSd4&X-Amz-Signature=122c1e01be4cf49f9ac17c215638c9272dd641fe2472797b792845ccbb6a46d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=60088c39443dc01b814b748a5c68dde8ce0191b83158367a13b855aeee9a1472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=8c64f90f4dc9b417c0f9054d87aaf665e525598591aedb4a514494f89b2231a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=e9b68c96c2d3257b55da6c7bafbe4e99e28506c1247eff7f46860c82830ec795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=4dfd1a39537fa43266c398387f68808d1ea1fb0d7574d31b858f72d6f338a9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=1dc1b42b81673b4a211f4e3984338f19dfcac6ee84bd8c1173d4374aa96237c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JHKUHD%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDqxBsFEQ6xaadDF%2Fiyp4Tc0I6PdTEfDvX92kMFUG%2F3bAIhAMmorzFPwlreSztWh5wNe5ePjZgOvdCxmqzraDSKCLSlKv8DCDoQABoMNjM3NDIzMTgzODA1Igxa9279I4UG1Z9%2BMUgq3AOjJYnlyn85z6d26H8O9hXJsBHp0RBhc%2BmG8RJsWxC8LgOy7X7hSxvuERv%2FFCzK%2BNF0eMzUGw40RkJXP31AAISiOBrUbnfLffuBCw9yd6ajuAajYNTEL6OgB3MWj4bLdkNzISRVzWsW9VKlkWFOoEFcPiBZZeaIdG8OQsw7vMzNkiy%2BeXlzKkAggsqdbjNI45wVYo57zKUE%2BbSwHr9lCjl25pOaC6DOx942NmS89w7YnDZZKHKXUkzPsRedRl7f5Px%2B9kQq4IN%2BUXIYEssAprMshFmTDe3%2BHZy0XFmq%2BJlNAGrGpxcLC1NguN%2F9IQnU3CFdg24fVDzFFotfZl8nz%2Ff%2BxJsMq8IqCGklfbJ31S5X7gG36JQwkUZueg6vetVK6xNILL43jehgiIX4nXVn1nx2zNdtJEoSkDyArEjT8P%2Fib%2Fk4OFlWoYbF5wT15YOGkcDCxc0JkwyIB01H2Ay0517Hf7e1JP8UITI7AHxFq%2FEBDUEydTke2m5CXTsecn8C7QG0BDteN5XJogVGQi%2Fs1Ud1RKh%2Fbm8iOPvHmubG1982I1zW0G3bonkpOsUOmvfLC02KWHBXzGvqSmOQTxtYUDXO41kEpwUejgAjwYGsTxLGITT7ZpQuxrZAh1dr2TCbrYnUBjqkAWQGCqUyGBFliHhtxXg8DoIs8zljshqDTBGneOi30Yz1TvXiaKADbJm2OlqgYuwmROSv6eWSYRM%2FdpJS%2Bv1DdGGiZE7tqXTN7ySisa76PSvLMIxa3X0ZpXESRBQDD7PIIsQ5SDzB6EdPARNANIZQ72OeS%2FsB2YpO0gMtpC4ub45l5jxPyGnLaoVWBI3kU%2BvVl6KZOtJ477Xft%2BEDtEdJ6cEcvqOX&X-Amz-Signature=416905e4bbb2d33fb9437f99478995010935a59d4567a5bddea53075a80c52b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


