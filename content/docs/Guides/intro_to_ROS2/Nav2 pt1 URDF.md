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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=1dc36b6a89eb70967d08f4ab1158c22d68f324bcc32e0a71decb30663627ff3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=6b443b8a8521d15f5f3df4fa53c71910966652fb53e24cb79392a7b2866c677e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=17c5adc07ef63b3f6e27f6b1d17f0bc299293e8e125fed84c0a34baf6854ca52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=45901a06a3be9e70356f04026cc9cbd8fe1d8877712f874028e86527bf8d0631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=eb10ea7d43ce1c6ca3ff1b6161ad9c79ab3a38fb9ddf59fad9a04edfddd06a6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=9728629de250fdfd5f06b750940bb89e151b2fdbba6126643c5860c49750f5df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=c9591dd1efb94f551d2a557182a45a1dfe771a199ae250779b943c9b2361ebbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=03f6301980736fcd671c8782b8619ea86b74c86515e48229c61228b2a0e91974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=c973367401aae005f5965951520f07a5229a6a42e3f040f2530b077f37055476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=6715b8f997543bd49e75293fbdb44cebf0eeadbab6e28c11b805b827354d47fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667256SS6R%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUxfovVDdk4O550zE0LB%2BlGyDknl1vPbB4NyeSvRcXSAiEAkcjwqMlUmlBagTjhEWSDJu3KZzc%2FD8M8yMAUnm7hatgq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDF0FS9ySDyWLhilpCyrcA%2FYD%2BX2%2BAAfN8EvVILG74jLpyfWiimFOyREYp4aZe%2BT%2FzzFooX3IyK6Q5HolxSa4LpYKw6PAbL71vLAFRRm74Qqe8k4j4%2F6vt9FOsfml7t274DSQqjZrfiSBJpIy99La%2FhF8I3aCodMWdqH5MpPaprFIyUX6pLrShlaOnjRT4AzymuxapMfvcqTsqedLGHgF1C3TuoVe4XhYrEpWZv7zWX8guUtsKevGG25qtUSk%2FHSe3RH4Okk5cbKZq9WeMZoyZcxPES58bMidr0OH225yY29oAYRZfT0goXLIL%2FE6jphUm0LMhzqix8e2MtwUm5mtiuDX1vpOdxp5Ne7XBeWi5TYAL8Ke1W0YmuDvyoAKXxn09PjkSqDwoxgrpCSaEX3vKtElY58KzcInT3NKz0btxeH33NEWGltYXPRz5w4IFJdUqVHOB8Gp48UgXShcjnN786%2Bs5EFoK8xQiT2oeNtLighxH7V7uk3oWa3pQgtzzklbm8eL4MXNggZuOIbnvtCeQGhVn9pT%2FAyMQXt1GenBePNrHb9XB6Fp0NQ%2F7FpGMIy1cCA90N6LG38E2via9nKFounxbgX4cNU9xh6czBByKRM305EvJN0oNkXzQ0QJJ%2BSDvyHYUrIMnpjfrxHEMNa69cQGOqUBfvN6zcfKtgPiqtM8UzHMVbERX4jEkxZ3Al3DHDTMSKAc3RlrfXt3Al5rDKQKvNi1I1tddteLkWrBfvYT50oAXzXpQLOl5i2MQEGhCKAczUcb0AkkKAR9VorKK3MHxMx749TawEzb5Q8YrK%2B%2Bv%2FkvBweAHkfFRNYrcShA6wDBZjBLF%2FPW%2B56lzi6VeC9XB1CgwnUdmm1L7fI1dio0VXkuhZTDRCd1&X-Amz-Signature=7e6926eb5ad7d4d452cc356b2b79d6b082bc45fb28a2b011f35fb0f5b105a169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B5KQP4P%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHve6wiY%2F7IvZYMg%2BdhwxT%2FSEoo%2F5hnMCvlzsg%2FORQ6nAiATExO%2B33jZrKGRSKdWB50BXM6vmZbWllGNI%2BJxbMlO5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMWNB2zUIouAFM%2FtlVKtwDD5A5R4HIwEWHj%2BfFljqAwvdi6RmDOLO7ckbkAbwU0U%2FAZ%2F9Mfytp3bmUNf3JNbbXzGt%2BwBW6gyXgdaBkbQuDZXk4%2FAoiEEZQIYJy5MLLL5yGJP1nP7vOUFuKwKNAw1GlhrnXc0hQWnzDfuBi5sSXikny8%2BZ39DfJ79iQuy2tB8eR8Wf2tgwYwAtmSFgnKqqKBtaM70ufX8Li9RNWo3pXmRQmzLDJbc%2Fdm6Dhk0COTMaClr2EvwToHKAjViDC8PbGwJf8xqRrR9B2fSe6Sc1rRWmc%2FW8NAcuqDEuwWiKf4DBHZEVauv1q534T9K35HpsiR0tpntGZGetpshRgkYidburOehEQQxFNGKjZ9EFmebCE4KZRluosWYYRw1HszpTOaS4FXrvSgGx7aVwT%2FaZVmQpgS%2BLpSyjdf62nbHlV9ZdVhYHZlYYEMWEKz4J%2F2fr3LCAMyyC%2BF%2BcbSJ3tPDIHudAKtDqxQT1NNPRQ1kDGPk9Hdo4iN3WF7nGZOh6klqsnMwbwzL9FvIQyKvF%2FGTo%2BfZZOfCitx2R5Qu2ckV4Bp3hYaeXEdZ0RwvxwLU0LcXuxp3Xwb7pKcAI0J%2BSPPviKm5yb%2FNZfCcSmSy3vpy5%2FJPk1nAWP6oHENoL7tokwgcH1xAY6pgGbQx5mEyej46NUypSWjNmXqWHa%2FqzHBrwk1BWtUtMgzNVGtCDEFQh9V22%2FluyzxYY%2F%2Bg3l1EGgINiCXHeV4Jb%2BtoG5%2F1jvxRH46yVS%2FcRAjhBl3ccvu9cSlCvJql55pcFerIqDxeqSkidP5Gr7TJIfXeXlcw1t9sXW2LTmpkypFbysb%2FG82q53eTKg8sC%2ByBH3eRQk3tDpJoxZwOZTPzzS%2FwhqU79V&X-Amz-Signature=870aff13f617e9d0ed56aa481dc2dcfbb36b1327e5759c2d622ec5017a44ca90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPE3U4K2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhBubwBTyjtqkg1F5gnKgS405uYOqK91Q8Ru6w6gsTDAiEAohbKG0RnSII3g4OY6voNN4XdI%2BZSFp%2BpU6kI6IAwgDYq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHBp83bZaRoAVxF%2BcyrcA5fuqZtqLr3r256fdVHd6WFpzDRSWtvMbTeHxI8gK9wMksX7QWaVBxAncKHS7PkKNXObsr5huBmJP7mcmHTkQMx1VRK6nqjkL3eCQsnYSGk5EpyywmAzJJc%2BrIbSog8SNDe0%2FHWxdgH5mnsLjSt%2BUFdiL%2Btm4QD5H7ja%2FxeXBAjLqUMVpRBMcBn1AX7aCmbLfGiszk0PWsUenLcVYQnJup47FfaE%2Fq8T0LpvxwchnZcJ4zp%2F1%2B0u8NEHgqxn5bSU1%2Bh7jqh9PT6VvlX2thcbaCILR4%2FCjFB3JluH1Z5A8bFElEwmjh5t3GHqByvDT5sWWKFGmqYUMS0lL7FuhTB5bjo1BghBBAVVXUA%2FioMIsb0a0348YQEITQbqsAUPfTXUE6AdE9CCV1Jwdu4afMRlZhjYvULCfP%2FP7Jigexk8%2BIojoO%2Bsg%2FIBj3E%2BBTb9meRoa4%2FA2dokylQJKuwyeeq6cMJkcYg%2F5k4qaJ4pbBsfnGlTCFFCy0zd1V5%2BY4CoScznYY2mPN2q6jY76FJwHW5uVzJq7T4ymYJkq3VXWWMbjbVHFlonpJG2rHUwAmn3lwXdvsKPqZ16W28tsdni3AO8diMVUHcR0X0gdREIvmZbcq7jmdX8QEEIN3qVkz6RMJK69cQGOqUBd3UAQShoZ5S07ZlgH94QcT836sHDmwe6D6tiKpnqkDMwaeMscCkKqqkjzd5sLCDhtQBfyYHXiDvUD2hOPW1oMt7LWjVWQP1InNsdyG9GUTuf%2Bx7G93DlmTS6jKbO7%2FQVo5y7m7hXwAF%2FeOoiKVhZHsQcDKuae%2F97RR3h6axKXbjrGj98FWhyTTgtA9eCq6IP%2BlyXwXCgpRL2%2BuoX%2B7DL16u3YaG%2F&X-Amz-Signature=8631ced2c47233f550314bd9d1a688c2986789b7de08524b918b524521cd2306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=01d99df590ae09441fa78004e630fe43bf4512bf2103fc7978ef04fa5c418963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDF52DIK%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDezz9malFMbszj08kI7zy9Aq4bw5%2BbsDfTRRhO7XOJQIhAM8d6LiE1V%2F7%2BDF1MHdP5cpSGnaFCfBKGSPFlvq82WuAKv8DCD0QABoMNjM3NDIzMTgzODA1IgzSBJzSZYYWN1JRnSYq3ANwQnaLVPJD9ZmM%2Fpu66Ew6LBf6Mx2xThODjZKTtz35LxTi8bzBDXs7CgEzZjja4d%2BDkKp02hNUygPRGAy9m77E6%2FjZtY%2FNBb5gZmWtxscqRrBWaCq%2B5rd7OvGDooaMBbuRaExBUY45macylfvWPaydxfS%2FWLamfQSZ84uWywY14EkOQ2%2FR4Zqf6X%2BfM3jO5Tq0ELpvDoGEy4v1s6Xnd1vaIfD6p9lVcrq1KrTQn5C31bQLU80FAfqxRbcM%2BnhgeubxQJ1XYqhIbSBFyemDrY0V%2FhVuWOXxwMi2OUBKWrnmDSud76PlmUl%2F1H7JmcXqWkYrjbrSWpd1hDeUzh71b6Zol1hrUljM9hiN3tkRYkagXGo6P1GDMNUm8mywzGlgwVLnqPXlmk1NeTO8IbbN6s044B5OIKK7vbWh405TS4IBd0gakNW%2BSdTrgPISREtWDX6jxdLOQFnlR6kePGzf4SXM9tKHmWcFhf2CkS%2Fj6mdQF3hfqLSXswF52aqicIxvcpP6RwphOn51MEdA72XvtOoLiSlG8%2FBieYMx8feFYOINiMuTVk7tlhlroAc%2FNM7iS6XsDptDz2FbFl%2BAeN85LYwDA7unnQWtgRA%2BDKRAyFZEFFHGzsTr1NXO83prVTCIu%2FXEBjqkAbrBG4hFHzMlIZiaXPLmSbeHf%2FV5VIGwpCZ4pXC%2F76Yn2RRefkhmPGuFbiSxicfirCTcDjZMznXHuMOr%2BN8m1BzarPc0aqZdB24IGYW0v%2FHYuUOQoBd0VAmmijFKQN5NuOAwYv%2F5FFlzasBFoCtQAfbutvBr4TTkfAU8IfHA29%2FOGKoV51uh9O%2FOBItF3JUEOyMPGthBtZL%2FkT5pJOdlFUcsN9Id&X-Amz-Signature=788ba1bf78c5ab05936bee674346c7f2f239a47c4cb9932e879fe22cbcdf04cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=147a35bbe0f9ca05f2610eb40c58be10d5099f8993e5a7d354c9102c6e525681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LVIDK4Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGIOkXJzxh9VkI7voCq4iXB6M6ty%2BKBfbroJQnP5NlfoAiEA%2FiA9EhTe7IBa%2FHo7xCIsQNWgSkv5uH6KjlMmib2ZMaIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDK6ho83cAwTBLhtnmSrcA%2Fgl%2FX%2BWFCBbpFC9HNE8HdoUiROs728pxKY8fbdkwEKmbiiQJqsOb4wsR0IQwDWKthz0zfxtN03nzmZf%2BgG9ClWZDy5f6EximftQ1NdP0nS8%2FwhKocn2L9DF1vS9dMrwoFwRctW%2FZkm%2FlrXdR%2FkFXZxAo98W0gXuw3DDKzmxGXcVoGz2bQLqH3iunkc5Ils4iso8V4RRaV%2BrPD1nVHA%2B1eqMOA9XHMkK%2FAfrRf%2F0ogoYZJ7rfrQr5%2FFLcLwjsH6u6J2DHqF6I4bh3MvF2w9MPx1TPE%2B0Mmm8Lvo01WWCQRwPFBe1OFRCgQCLcgX%2Biqa9wGkvgf5ICZyZI8r8d0u2dEfmagj%2FfDhZa5F9A9j5RYAbt2wXqhhuOGwmKiwMyYX5fodiE3T00iO%2Bub0p1MF4syEKQeQPZMvGrN%2BPPHHG1aVZSENE4QUjqWyWdAgEx7KXkMBpVlJtqgS9byiRnCJ1V1cbi3UgWNJ1NVyEXprrvY4FXSmHjsLhn9C%2FzRcOzjSqP6Kmv24I%2Fw5REZAHrByIMbGeY4gnz6MK19zeM46nTt1GXmPTXXJuVhdbmjBZ0S%2FumQfs1bNR7VhJzFXRebGN5EmUC0ckGlfUwas7hMdTJbaycv7C0%2BF89H48IP14MIm69cQGOqUBB8zCNxa%2B1yzlL3aFzcHyLTPwhhJwK%2BJOkm0tdIv5rTF2f8C%2BH65POhFSPa%2FJTiiSwFaIf35km%2BMyi2Odm0yNyq%2Bbqahw%2B2kkvfCXvSFHwiZYrji0fCMHsJ39Z1sfH%2FpPC%2F%2FIENg0kluKC%2F25QseIyNZ0QFCnhEwn7awnivM8v5%2BLrr2rFsSDb%2FvvYxDKieHzUWCLQ%2FmsqhRR%2F1Afl2J4%2BIXUjZY7&X-Amz-Signature=64f585fc0758b6b10daa6550b8121d407c1a86335683eecbb70032a9962c8641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=ef23af7febf5c010cdf773d29606f2f1093eca7283b2f833b970fc1d24c02f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X6YDGR2%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8OWRa%2FS5tduSxS%2Bs%2BxmML916e%2BByspADvEDTDwWwPGAiABnkOWFb3MesRnVakZX6MODpfSyuW6tpTcavu30pD%2BpCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMtn9FtwS58mWh5BoRKtwDzka5dHksHcLB0Axe5ebrdAvImJrCa13heHLvbPI2NgqECqyappKCxwm51SoR7LdzxfTiHXIWuMInU2k1zxAySJ7o9coXT7xkT3ixWUjVdWELG60ELMlI2lweYFdV%2F%2BBFioLfJkDCPjVG3C19HZ15Q74t3Ha%2FKYzT%2FDkSvPNk2bbm0yRZgxoEVk5RvTYyHlUzpKi1pl1JprG64v43BnmkEOOcUCs7WALepqSTzW2Q64Oun%2FLU4D9VWEuZp9iYMSVRUgE1KbZvyaf59zR2jYzADoQw3Jgfo9sR9Zm%2BS81u3hDfgVg8FMwXI1eAGLsB5TUiRaYuQlpuy%2BP0efO%2Bu0w7khuGNoYPCxifbKVAV6anmH1mynPjqlrygr5yN4ElPzA0lJvNzQjbMXYe850xiOnTosxX5dxViTr4b2RSzOi%2BnTpsNPB%2FOh9bA7VTTVyHA3L2kUPyOL2FMmmW%2BSDxGsPr5Z4DT5dzOWRNR7UrOLw%2BjlUxJ5KlQfmFnBD8bFaIeeaJHT3jplDLcl4rTkkq7y%2BVywKcwC%2FHUVM9HSJPngUQSD%2FM1bcF8B56WpJ1ai9%2FIRDIItSpB7GlGXI%2BgVMdCPMbyhcRCaBSirI2qyUUwKBN%2BrUYM85Sm%2FnBqbfVs9gwiLr1xAY6pgHhE6O6Nlu88BZoNqE0QtRWhdcMdb9Z5f%2FsEB9vDPwFOoxg4kzdLtOaU3KuvYFoPuhHiL7cqRqSR1MM8jtBtXaRDC1JQGPqj2XCVdqfDQDaO4%2FvztW7bXhgpEoAbng6E%2FeNk2jTxmabWc1N66%2FQK2k00%2F18ehNTFeYXuR1eD0HwrWqbCxejDAnjYhpnxF7WRw4jZLynuMFB2zu2o4axod%2FgZahImv89&X-Amz-Signature=766dbe24291fd02e966fb74cb492f875c695e8d198b31f17771614a08f8dff35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=03dcf8e05800327cd63e1d07e320acf60d54ff2a4a580be3598b0138615155c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EPWDAE6%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7wTZb6TZ4eIT%2FKGBs0aIAtjdk5yAKaVa7i60FBxpiaAiBWF%2FrZwQAY7Upucm6%2BlHhbIr9R1AnjdWCK1%2FaYsX3b9Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMlwY7VtZVHEXZzJQNKtwDoGhcfgQrNYd%2BsHz071fqnuSnFaT%2FiWcZihFuZFqCoOD1p2%2Bw6qnoYlHhwUjaV83NZHOgYRXCOiFyjR57DHzCj8wxn8dSNwxTOwqkdZnwkXJvhZQkdd6Y9PiH4S5IWsfWw7Bjni3Fk6TUp1LqkoPsVPb7LUG98KQ3go1JO%2BHYp1yv%2FP5TD%2FzbV%2FRsawxtCuMFvig6GVBp5%2BG2MPkH41Jal7a8p7BJgugIjeVxWa8lP2u8ErWtVpC8h3CkJlRx1yPEONe9gOef3In5eKYEUfRGf89kLQ0te9kk8kdCkF7kIzA71nRV4rZC8%2BcKnc9YrZwEsApIeCZ0Z6AqVklrhTc%2Fr94CivGX0HaS0yT4XGv8xepsfJIEmLfJJoFeQhag1sBcfVoTfYTZHwBpExZYx1Zqgu0XezdnddOWPLRN99und9ASB0uW2ydhti9Gws%2FnYpfj2B9YoJb2eJgMvJBRw%2FRjEqKZYQesG%2FBlH99yOUsyHsYluu0vj%2BWhsYFGedk1IU7dXO260MkkoUTZzOrdaTUfThfGpVhST%2FMmiXzVYTFRIk3YOR1XGRp4fwBhkppSNG4gfyrY59zUetKClVH1dI6jskTVjqo5AMw9RbC9SSxTh28OLBewnpB92C1%2BH3cw%2Fbr1xAY6pgHQadIQ81xKjI0Xr2u4VKGu8U3uRkq6eJqzP%2FYSvWlLTONia2GdA1csRRqgTbKLIZCI4W2U1eG0auiMImmvjPE3jlyaMWN%2BwzZO3IDdU27RyUL3mDpu5S6wl3cWouSUnt1zFpzzQASLWqc8IZ290c3UxDTnyAbSElFkjUMh2o1ohX7NZQOxvttr%2BLZKKLIOIpXjkO3k0%2F%2F%2BKqwzF2DVe2%2FCyaPWR%2Bp1&X-Amz-Signature=411d0a33ce363db4490ff19a1c7f35e271b841d6533e38f70c1d67b8b4b6429e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHRUIHXO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeJm0wJfKS%2BBGGdE%2Baj%2Bm3OWFMIhg%2B24qADObhIkhkGQIgRUApbCwKVYawH6ElDMA2cjAIbK3B0CNpSXCp35EQK78q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDFA1tegoGxV8brU07CrcA%2F3%2BOprJnw6g0tWS7vKIF6gLxgGhEU7afLQx5yKAm27qjB9Am5Stu6IVjZnO7WgmC%2FXCmJA4tXg4umGDahKYPCISqxcMYdjjuKBARt22aflqCf1MEW6%2BT2cv%2FuX%2FyVMEcZlMpfT22MjfGaOua5vbYUDinVmztQctbXu1%2FgJKhHv6x5l%2Frc%2F2N04XVuNC6zYuu%2Fz6gz%2Bl%2FwWKQ1u8qV4It7U%2F%2Bfkg57Bgi9Wm%2BQr2xKByfSSuibZ51lt6LO5544r%2BmRfyGp52FWAkmluI7GGKcWzgvmZzueqpbiPTGQpWAuHxMv89aNkE%2FSbEcDTqcC6zdZK74f5%2FUCUgrNkWyox2NJA50f8kkqijxhlzZlJdqsUWC7Ni4FRXYbEW0kSRtNpdcIdXC0rTuPU2kVqYrNk1hg3%2Fg8Jnr4JXw%2FYi%2BElq%2BbZAxk0rrL8HYzlglPsKNUZ73mr5vJGTmc3ofXfjr6MHmI5tPcteYBapeGI9jkEc2d92M13xo0DdQTtdlJIhVB7siVsHvVqxvbfRs7jLzQotx9gEBKfdWdPT0bzsOGgWmqtYMq3lTRBYITcjodYSb0IKpwQ6Dqrs7suk3GW46nD%2BmzqRfjGS952QKmuMHE%2B64dxehObM7vJpL%2FPmgYzDMKq79cQGOqUB0EcVtg%2BvZ0hMfqX5sg4Qlbm4mogZm%2BCn8JOlwUBbOMeMpjNI2UX0cjv8WDIA72sBbq6B1cLp1fXy86aE39wVD1FDuTtu3qVrzE8GQrZMd5ZsZuy%2FzpqZE%2F3jWpfjvpx93N%2FpsrJIGX5cEUpY8dufu6uMOekAgrPQQ5UmU2ivlt52323zpJ28FD3oHDul3Y7AI2l%2FJ8LHYypdgYfoLKHL%2FNAKjY6%2B&X-Amz-Signature=0f7e062d3eeb98092d65e061b1b274ca99a1b85ea7b1a1682b00f4380b273057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GWYBG2I%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNBqAbGqtuD7ibfAZNdq%2FOpyssQtLBAuLmrVP13kWEnAiEA57Xj1H%2FNOVdIWeJnJUCyk5pFIrhHKFlhSb2TTCVssUAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGSD%2BMj7BeOgxdOUUircA7OpBrLR24vBFWEVM%2BYmd4D2REQYun0pJMIJI8fzUWNk96vl2Wdqinch85%2F0ON47gXWw%2Bmil2j3phryV8D8r4Hwh%2FFZmUcaS0hsSZ9wagXiXRIA6lTYQqkYilh63z%2FajzUgw3PpcIa%2FrbUt892TlsH8L7GA6KXWz8itUJZgeKNYvXQKnrH062cAN3Mj11LkbvJRZ%2FEOpjRmHnfpU4ftxkrSCNs0KaI92ytg5Y7YT09G%2BE%2FeISX68tGmUp4AQ9SI8kZNuQOdDSaAFqoUPsJ20IlYA1LBZ43aLp3XDUoSXndkq9zQRJlx2gK6XSvo0wfiF2rkgzLhRK%2FWYkPSduUM4nMhdIJ38Bl0AHA3VEgZ7Xu8zTUqhxmPlyougKJF2MNUZogYjqN4DoATsLEKqAOa6i94JsDVT%2BjN5AZpDEwpB66uwQ5J6wPK5%2BtzJr%2FKTkISNOUMULmuIgUVHa7Zffo1%2BZfP3yqEAJQIkTFeIDldepFQFvSVboegpJUyzvptw2VuTqj1n8nfTWcBnW70fA0z2KAsW3QVLQN5b7xXQ%2FMH7LYozTTxC1d8PaGU278d0QgPBQKtYqvdlJWwgkb6KrCmQHgxBdy9RLCKlMaplk4RqFdASByDnbPr5AVgH8yZXMMO69cQGOqUBgS29QGlXlRbpXpgvnK7NtQ3Tbrgpjam%2FqsmaORqJMJndVahNZCwWQpnWURBHO67w03nh0rgqM9Vi4LfF6Teb1%2B6eYFT9MR%2FJ9wARuCmf9xaGplJkvCANvNfnkiYHauj4dcWCftMpAhjY3lBtxBmRlkASyJ%2FA37%2F2oWGV0vTKPFPVvwR8hE2ulsaJ9qKrJUCn8XZEQafrX284UO9iHEEC6XgPQ%2Fqu&X-Amz-Signature=c7d0f383bf92a74ce308b1a0f2b9440cd0275d26a3e4fcec63da28184cf529d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DB3HCSN%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BQkvZOZGNUweI5TZNPjwOiUUhNkZLH72N7uQmS6UBEAIhAMMmaFKH1G2uWKxCkyn06NP3OZzLqL%2BQhbuYpX8n61jXKv8DCD0QABoMNjM3NDIzMTgzODA1IgylrhmLH6sxhM6N5Cwq3AMfzzHyS5nYxmGHp1r8MFIy9zIpae%2BogmAsQMDtalWCheqRLCntNs3DQLEA1N0H%2FJVgjsaH37RksubjbqHVBX0VClhV3GVqYFN7kjLAm8HXp5NkoPNFrcT2i4JwvQELFfucwxDvCfnUT%2BI5CW%2B1GSmWSsZf8xlRRhe6JsL7Kirvcz5wgzvR4jfCsET9%2BG0%2FlQmhKffhU%2BItT2abjpvaMHzLePcmssqWulPeH%2BE8Q%2BLJhIzOTB3BfEQLL%2FmmIRSkCV7kiabhPJ4HzO6l7MFEfThxUsHZel%2BBUdDmOwJ5rzFd%2B%2Fug71g3IwR%2FtNEzgW8ESnl91nt24bV%2BzazsZs4lQ2QjRJ13jNTqW8ACFi6wY35XcvVzufVezat%2FD6gVK2Dhm4Pku8YnL9RJP23fcTdivDD5rh4ZDZeqiJgn15ZReMLymqWM5QoiTgt3GpldxHfPq%2BgVU2qVmZgz8n%2B6valj7jRM2dUD8WKJL1qse7wVUx%2B0EIBlUe6K7Vj4Sl8Zf1LVHYl%2BYCpKIziLhp4T5PBFZWCxQvau8Oah8rAeEkOEwj%2BbDdmFjmKvNVnDUVhedTNBsMS4jrG5sb8EEJCPx3sppoKWe%2FpRigzgpAbm4yOoCNmoClQOOoZzEF0aEMBbYDCmuvXEBjqkAZD3fCTnjuvd0Jl5N4jrvwtpU13X8MVVrvHmz%2BMvvx5vOVAfRINYCV%2FP%2F3yRiqPuzJyk2Q9BNGXDzdu1x4Ct7B7nPM1WhGpGdAlcz8Zvz9TwikxdrkqmTIE5bcrwGk%2FLPHdWWeWFw0U7ChbFofIdTCcGizaruUwUMr%2BSEoAXkqldaopigG5oJQQMWcgR4QtSBat0WrHajNydPr0FdqQC%2FAmzNfh0&X-Amz-Signature=1989655e828b2d5fd0fa60a957f31b9510e76f51e11072b585d0f2c4fca18b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4VLVAF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbAvb%2FlpMiFFj48%2FTBDInkoo9JpdxZ32P9aSY2JUgqYQIgHjZgdCItQucKu0C0mnQ8YhM0xaJLW5FzzAvHsX00QUcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMsoQ%2FDbbCnAzr%2B%2FfSrcAxEn4cK%2BwkPy0QtV11KB%2Fpx1CxMlNjlW51fHwRi6Ldgob93ZEkSiuJtVVGeJdorayGRrm6uERuajcr1v0OTm41BxKvQIcHAJmM%2Bftv6Ssh5835KlsBgKP2CPYxJSoSqBPzCpFqJ78QV1eYIC0rCN00m71w0PiiU0EeA%2F%2FKPqVkx7HMw9LWcqDB7KmpeQpjbKQd0nGzdeB9MLcwzNliffnfW3dGBZR4GhlV%2BTg1B4ps7H%2BzFgsB2XNqPpGkieoJJO4OEeQLhmKY%2BJhUtUFPXFo%2BTGU3KrnWnd64J%2FY4OXqMWjyTTVesful2Zr8Huyl%2FTCO4uDM%2BGMzn8CPZ%2FYS6KCSKCRZE1B8Zr9E2u5dDaQhhL%2BPYCWTAkpfQKxKirewB%2B8LczuvJHIKWWWbqlHDurzifii9MGwTvULyE8qLFswOkoCoA512%2BHhBN6VIh%2BxGLY%2B4U7SWcvP%2FsxzdriOyFc3JBANfRbiBg7lxRWXtnWRkZWZR5jTx8GIOV0jcunev%2BrPVmnt5Z9haM%2FBaqn9coeL8pDKts0hjSfqYQzQGyF7%2B8d811%2FMLZFLJ16qGf2rpXpN%2BdY%2Bdgqq6AguFP1uEm1TX07i%2BeJ9B8Q0n%2FKaypqoFtDsub%2FaAMAewM9poqFhMMe69cQGOqUB6lNRlymQPSF4Y0mnlt8hpr2ZZo9MxC6A0LipNdms8z39vvpdphRv2eSx4cpfjRSPLxybKGMqFwoG8qJunfQ2bzx3HMUY0%2FhRwyvhhb73o%2BE2gvQPnbpJzQBoR8WmJq1JZLRLkDoLSjUgOOFMUAX5fMz%2B%2BhFrnp4cHqTl37MgWdsdgJKBOhvRKZsZNC3GEMt9WxQVJgRsPL4PHttu6CIi%2FJHU%2BC%2F7&X-Amz-Signature=7b593e3a8ca0f73204564ed0f17000087c74138888c07bea12be192e10664277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=4e909c0a1a558edff09d32193b0f0dc298b9f5425e93783bb2115c05e2f8fe34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TJJSBU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARfVI5Lu0buPWXd6rYrkyr8r8d5I6%2B3BQsBK07iFx9yAiAbphF5s%2BLB4LgrdYOpqC%2BsZ%2FYYvybkUKhy0x31uX1nRir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMkq%2BmjniulFWYpGd8KtwD5TtdqNLvZBFEdtl8yo3UKfwZ8eVu6mksUotfDwmpSYBqWK6bLLUiHOk2s8V8%2FSSgAlDp4pUigLLrb3UuRTUjidO3%2BwlmtbepXku8RV2RS5EFWHwQucMS6d4zacBVz23G43nJYc05jG3CVUOcCrJ%2FJUrxsyEti4CovFcLEHR9wTEQPjOLZcDw7pHUBHoKvaQdCh8q%2FyvAPAoBaKnBdaualFbxl8UKaHWlqO6Fa9dvJKPAmTrL6UgAIb6uXs%2BDqP667DVsdlC1qeeu0UIGvXKZUYtfYbO2uE0%2BDgSrzW0KOaVg2v7%2FfTwBI3U21hrq5aUqBzbONUcmeLKq5p1wPIeZ1qYrjZ8bpvGeo2Z45%2FJnIYlgPMTD7GqFNZE6SvgVLbjhyIUggPXPUdIvXz2s%2Fv%2Fv8lNhUjYTrbonellBBEqkeTik8CuxV2hh%2B451pwjcaHw7nYEvIdIXqp3tYQPT6iAij%2Fsl%2FJ6WNCZa0Kz%2BKIIYxIKqOTT5hwIMW4JDpii9sh3mGV7i%2FapCWA0bY9zbC2YiKKX2Wou%2BK7b%2FJEQVWf%2F2uNdOi7%2BZyqZMrmCa1yNgrym8vONyiE81p6kX3ehnPj6FW9i%2Bx1qKnVixICROh6MNGPW1i%2F6GQjN3ALBeeqYwi7v1xAY6pgGDg%2F%2FhQ7MClRty4v1CFy%2BlkXUWQe4v%2FjfRJT1BH8o%2BF1m8bTSHS80cEXgBVB%2Fu%2FE5HxJOVYNB3Iad3cmawM6rECLTwIoxY%2FbzicUxpA4b5bzKBrsoldJOQUGMXia8is%2FfMQxNxxLd9fsd5hRB3XW6pCjfr%2B4F3z4heFMaSQOGUxDVW0h1Gxu4Th2zmFdkMxJadeN3mGhikz2VZuhQ18Xbh%2FUMbBsBB&X-Amz-Signature=a42fa1da357a65cdc108ae43e902f2dada58dcafa1687b4d9237da09ccbf94b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=d796375c2c3e9862f1d42f3306c190f636d37541d29c4c0f709666c7ef15abcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=1cc0e27e3ff9802b37bf93f3c3edc794a2e0624ddc3acd3ba514374bfe01fec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=362fdf50f76aa4dc53989f4ea1ff2389563f59876d086bf6c8e4f93d96003f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=639a099a510a5ab187c7a031d4480920fab62b2cccf0b2e5b9c96801108a9d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=a9a89f4be2430a8f31cad2f95e683e09d3000bd7c82abe01ad06f8fd725da756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=85a52b97a396e7e58281f1863eddf868948a4d2b354b6791b7897b7bc07eb343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=362fdf50f76aa4dc53989f4ea1ff2389563f59876d086bf6c8e4f93d96003f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=1fcc14940799c898acfc06e7589108ed8c8a48442637762e6de668c75d9809e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=c20dbdae4f047a8408faa4fbd28964b4819b4e9f6a4e55a4e039363ccd4b08f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6FP5F2O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKwSPRffzZFEizdxJ3o%2FsnxR3GRl5hRy5lIXv9ufxbiAIhAKuO2ZHKBPULohFYFbeMKedo02MxH7V9lc3sh1gt0nvIKv8DCD0QABoMNjM3NDIzMTgzODA1IgzYU1wPYAu%2F0VjTOa4q3AMqDNzXGXzAvZdCTQNLemqUGE14nexbnPnQQS22HwWIOkOe5ERZ27T83%2FYsYK08FRykn9KSUZ95zzQGqXUoY9WkoT7Wz%2F%2Bm%2BpGc23ps5xYh%2B6S%2F6%2FJUQIn8MJeptyxJLvhVx0vJeIPlLXLBIb19%2Bp7WwHb%2Ftszx3W6lrOok9P%2F2YqebSnbYDhKxfpHIn7khgpqMrMP6c3Il0t7z9ar%2BYPpz2%2BXgwDL1JBpPpidQPuMUXW5UdHAgUjMQBOMRviOVQUM4xWWH%2F8rYpyOH2mqhf5dPkikXPjL7btNhfQl2bv3JyuMAkUqLoE4WTJZRrm08Qx9kQaAclDrDfM%2BfCOz7xP0ClxF77uJVnY5xMhHkLM%2Bj5jbe1tO0ZlvkcT2N3%2BCfCwsEx1Oez9MXIUN%2BpI1WKMs85CDh%2FAExI6OdLITS0MDC5EUX5PqCSFKPfzgiIwFPq92GRoapWQZUkzbZU%2F58ge%2F9JbLzvrb0KKb4GawvpIeCtcN0FLsVO2qPY%2FfzznA9vcCHnn9HwNcsKp4Cu1UYvTF64WXID4xu7vV5amsVJ2aFxyFmSFbBU8SO4PrZU8o%2B4ru2E6vCE5fp2y2GFb2Mp69cQx8orIPq7Km5qgufYLRHKEu2U6DR42WDHYseSDDPuvXEBjqkAc%2FNPmnZprqSimIRuYDut%2Baxfv8kdzRWkMNtmgDwIhmYj%2Ba0nzi%2BTItL0IBuC7IikiKoZFByNbNvbFxKMQxXRk8%2FNZrZBjGitQdSFnEv%2Fufu8xPzaIdIcdJiPGguCUSiPLfSTfU639PPcL6zfKJ7KNkRQyUgzCbMptjBGSUB13NqKctRGMPD0LVRMpbL8EjtoPgHEEMJnk1bMeMfMd%2B%2BEVYd%2BOJk&X-Amz-Signature=3e4aff5e553eb4a568b40375b04e61ddf7b3f778879bc3684d272da8f2baceaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
