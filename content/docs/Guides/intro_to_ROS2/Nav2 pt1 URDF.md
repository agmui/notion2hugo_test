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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=c1006ade7736a7c5096c44cabc176bf3f7637b7e70398eadc59a43906a0da864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=da10a6adfd10b4dc772d95f2cf18e20b0fa367dbf01668059dfa024312506ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=a07d66e8bc5cec3feb20011f26e6c3fa97616ad48c6bf749c3cee31caccdb1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=b63fe2d05f165b2db8c4c05eda1661010369f45343853403699f5a7982be5577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=7b52695ef17632bc9498a18f6ac609ba0530da536365376956a3e40163ccedbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=2b5fe188a56561c85277916f953b63267b3dc76fe948c73252b08191ca861e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=6257c568a9e22eaf959ad3fcde40b55c955e8cf6bcfc9a29c35845b7fc1f8006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=ede288c51a94f9d12bd6d8bef4ecacec8a5ab566de2eff25613ac5846557c00d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=035f15873db99c9fe7bef4cf6f04df2c40b226135637f7f52c6db183793333b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=f394a571302171bb6aecc4c172a7b1d2a03bf5bf027175875429291c8b5a5065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMZQRKTR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ3XpDtnpIsBrtNdEpINu1pxrGoJjlvRfm9%2B4rZqIeswIgEwiVveI%2BkAXLd%2B2L8A1Kd0CUyeC0J8XwhvHcyXjcZ1Aq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBfKHkEkdWaD4VEWqSrcA90WoIXdBroNJ1JcMJMxLuwfZ%2BAvnKbuYH1WWUneKcKGAUie9lcWsqq3CCFk7PUzbBYVNuuPQywQ%2B6soFqPLczRa050dT0DASKyhJ74GNn6kEkjSPjk2ySQEK8r9ltmosfvyG2QbsRllPdNlhsrYyUtHULHxW%2B18zBSEVX%2Fs8I6BN8qsX%2Bhvf1pgAzjw%2BDL19uMMnwj3dzeZDRDGebJpnuZ7%2ByJcWH%2FSJ%2BxlTsleWMjGTiiNtIZcenTGjUVZn0xdwlJGo8GsW3DaQRMb2hubAeI3K1WJ1H%2FoZ2CMI40%2BiU1kYASKQO2sq64mZSGMy1njKxVn3f%2BevYgHC4G9P%2B7uMBq1SQQ%2B3AMEicduUQXeI28IdaX%2ByGNU4vsOWBTDkiM9TwGTP7Tezcq9mL5mOOv5rKsexlWkkZYv8PR5bvW53hGs8KHW0so7kxY07Ws%2FXKUQPetTmyQeDog%2B5dUr2k4VWSS82asgkBPQC0IGZTCmm9SUs%2FbY6SX%2B8BFx4tdow2DI3MmU1VQRZsZKzfxm5RQeZwAzA2kQj%2BJQS%2F1XNKwylsf%2Bt2INWif77Il0ygZk2nK9wF4cLalXXKZXCQE34iw%2FKhdg%2Bejr%2FlwZGVdbOhbM%2F%2BkhGyQwy4czxoz7NR%2FTMIOOuMQGOqUByDdKj9SRag%2BWc9X7rjm9GSWvktlWOzGiuft7HC19bbMkunvjTbmZD5WeFk2ItSPms8zMKky1eqnLQcvnoZrNpsd4Nv1vvz8iWyYnCOn4EMaMadVFve3dF%2BJdN3asLZ93gdSiJ4GrP9wZD4BNMxRN%2B8ol6ySuphPK%2B5PuKN6x2R7eO4HrmPscFlkyvrgOZ%2BLdi78eaXAuV%2BX%2B%2BHuVW%2FxdXKSKlR8U&X-Amz-Signature=07c88c5bc6f336823739ab7e8e127b30f693e205d09492253b1373cfe299e558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHSNU2XQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR7UnjsBprEbM%2F4sCJUmUdLKdiKbSmkqbbu4XXfKOJ6wIhAIAPzE5yecvBP14xc%2BoIkmCUekPmfhhZRk%2F4U5wjkxWdKv8DCBYQABoMNjM3NDIzMTgzODA1Igzx2%2F34bNXb6KBrWecq3APmNEIeLh1kNxWC5FIFCRop%2BVyPTgpvKQs8ZZiHbGu2u3X9GRfQEpTzK9%2FFMkPyhFCxRwqyW7dA6nJGpGET%2BltRg1g0eN9XeOCJh6PayHySHQYmokQ4lbLTxq25ODS7uw446IcTcH7b6wJbWJ6eFqVtydSaXSOiJE6QJ7VZnemRBE%2BTBMMb0Imq1dmA7Ub%2FMc2cMNx4ByrdyaUShCTCvUa5I28nDulW9iaN17yT82057zYQsdTypIzHrH1SbClsl2A%2F9TWZrmxTs8jM%2FAN2eHC4sjN5HsJsuQzM9Z1LQxEhs2BmcLD8eAuSIPfgHfGqerCNEwWhcAd%2B8wwx0O3TEsgVcY77uUXrHBVKu9cBdBnuwvJrHCGS5P2%2FxgZ2GGbwxnKswuYLNxyZqYADA7bWMsFbvC3stGUcsMsTwSXupqeoP%2BtSgMZ5SOwWvy56Z2JK8v902WqiGgl%2Bsweie6pbCLiZTyikViEScw6rHqgv3yEEdfs%2B6Saa23KpXzPrQBLCkZeJwRXFksVWSyiJF%2FwWaJuyMT2%2Bb7AabaoBHtZqzJtK%2FD7SUlX1kSDj0x5OnRUBeRHt%2FdAvz7wymdnTLm%2BUmt9ar4n89xHiQAcvw%2BZks%2BJHPjSQCUbf%2F6H9blZE0zC1kbjEBjqkASYfFsm5%2FWFI7HlbGPYeXkbi5E%2BOYVTvYn1TyYypDg4aFCKG5EOA2y%2BqocZVGG8YIOs104GBa9SEyT08dXhYeFvHkSU8xOKBLXe97bbpo7OkOlqvh%2FTwNTDFVd69WA3iFKrQ0GHL5v27LKvsCqSTfYCzVHQyS0RhuRBdiR%2BAcBbcvOERi5FU4t9Q1Cb2BSbKrrlmqBq1AapIKu3SqSLDv6vBz4cG&X-Amz-Signature=5aa085995540ff24ed2db7501b4f5e1b0eb45bdc2c93eca9fa1a0f97a64def5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVABDCCR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2FA4MGlK%2BmUy001q08m%2Fen5hHwunlLxPrlMztu1e8MsAiBrRvs1kmhJz5fBvPZGCVTgZH3WrKkdK153dFMi3pX9mir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM8Al8hs8AOYmdSzPLKtwDq%2BoUos6Wmy1TvkOjj0obfD0XqXs8NGFcRP%2FLBXAGlWNSOLXdttD3eZh738XGsXf8c3yKM2YIVSc3DR%2B8XEcoC0DUpOc3vJC8NPCEF6NdJJvoBAX3dR9ApKyP3wG%2Fs1fZzf5OhZ5SD92izv1bbsJCjpNZU5%2BFFY4CGEC482tf3dLJ0H3Ds%2FFZC3nmvNUZrpjweEQQSxbMvTnnQl28iS3fhzm5%2FKziyAroU1VXMLdilQqSnatpPMlMsFEVl8dGcWiy2VkkdhAgjlzoDZ447g%2BD9gQwj5TjYxODha6UwJ1JkPi%2FkdeKH9%2Fpwx%2Ft65P2JL37985HxU5LF73ajHP9J1wgMMA3Th%2BA8hZ4BcG7MsEHD7I0pNHxaYb%2BYGFJXvAouXLHqaIXk0Dm3%2FRlp5pMtnAwX42wuq0%2FSDwso5MFr%2BLRrqBORLUxqYvwd3MMKeMuW2eHm57PXRYuCxwJolN1uJ6xK7Df5GrGjynM%2B1XQSzr%2BDW2cNwJLjGHYVG6yZg8jfhnfaSojjvVqbRgFZ56KgdM%2BGIMM9nbB8bJj6u4TGdXBvoRTDYJp3voopTTcClb6%2FIFsmjanZxM26RkzafHPDXZcyqvYEIkihzd%2BTOUZSMMQGvCoj53caIxIPDPGZMswwZK4xAY6pgGirY635M%2BfMmqEkD%2Fag0gWv1yxs%2BSwVlICn6hFCSM0Ax8sb%2FWEcydD78CrS73%2Fw9dzEIcISWG0svcdy%2Ft%2F%2BA%2BPgtGtt1HrspQEgcGifgpsOO195uFWpDuudQICCNdc%2Fxp0XRBDsChcaReOJGR9MLJdhoKJUgUpESwh03%2BpRYZOXasLu%2BJ9lIJ21AnFvWlfTG4gF19qt0SjsMLdnF4cj3Fi4H7Bl1T0&X-Amz-Signature=e6e5e64bbc74c0012489a7e9c7c14e676dd80173c2343c9145900130fe747c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=4b6e5079abac049d38ac8b6ca89489dac4120982adef2dee0419049a80d3ee15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHSJZKQT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DJL7Had1%2FDIcjTJUkz%2FJ5xHP%2F2llYVwHYp23%2BHhsSAiAmB7GnIgEDX4mTY%2FeM3UxScgZWMJkC7yejFprJnIZbpir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMr3uQyOQRgyZ49r1XKtwDEkqjZ8v7atjOuLlHUzbUKni7xncgprtyPFLbqBN7WOtdt21EgE0lkSbRHo2QDp8LhcU2HDPcnY4y25QDQieEtf3mbzkY%2BoC7ECmC9XVZ%2BSqt523qUr5Y%2FEVXIsXtEb6Iyc3I9zpquakmKG6jxuX08uSTiA%2BfYo%2F8U1gx6ntkXv0oBGrEKGrcOfij77kBX0bdShrjTPtO9SETV%2F2SXvkZj33xXJ6i4%2FXeoPj3dRYNiLv2OP20CZ5u6wFzVgzvTd4jrg%2FuP0UOas1Wiq1og9m0Ps4yBzkZk6xgTiGinhqjYd8d0sNScwVTcWfQBGrfJW7e4SaMk5e4Ppxtff6s68S%2F8%2Fxevg7h%2B2ET8TotJIlPn9Mpy2wxZ0yw3KsU1rRUiA1ZVMdtJjgBHGUYy7BExziI2nHcgpwoZL%2F6uckX2a0roHp%2BnKLn1105jobAEqCtBtiq0v4fX8%2Fr0CGPtYG%2Fa5CXueqVyNVZmC5yM%2F%2FYOQ408AxiDjc%2BRVs5y7ge4Aa8Id8GZk%2B0VqSWvKHwEDAeWpT9zlxabBgsfL5k7lVAXFrIKUohi4HDCHkYxO5coQwr%2BlLblgQgf4g0GiLHZklshqKumMsFT09HzfsQ3uzu2sUXjeiHT%2F%2F70veNoDInYiUwmpa4xAY6pgEs197OVKhS5fs7hrrM4hszKg7%2BgZLIbzLuApZPzV7kPBMCNUdedU6FKjnUKL%2FYbUUfl32rWNX9H9akpnRjoSf6qb21SFnEOo%2BcJfXBej65nJmtxklwa8MDF9O9WRtZAOtqTHy6LwmtJwCVIOvOHLRAS6%2Bs9vFD1v9m0aiUXqphpYTGJdM7mDcYtbE5vR81O4iVCSA9rvy5l4NuLS8tMrFQ7q5UGStj&X-Amz-Signature=73f2cc1c4ee7f0972fcae6356eb20ba73496ca956d8081c1d4249548c61e6b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=426205ac2cb1cb41427c5b316fd1a33d38cab41d73396756912268b0cfd3f0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLA3ZO4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSsuqi8HZZHe0I7E4c6R379kX9tpim1YgChSIwtNDu1wIhAJ%2Fat2%2BQOa5t0lfm%2BVRVtTa44cnWqgrvulvlS6jEqkrlKv8DCBYQABoMNjM3NDIzMTgzODA1IgyL%2BqDButfdGeE04uAq3AOxGO4m2EkpHAk061Zp4Dr7F64mSG1UE2gln%2F28NeNk9IcnfrTpeodY3hOJB9xRNnspgDEunyO9fYekmacXfkjgyBd8uSKVCRodsHmocsqYEORkgk2EcnayfSVLO9q05hNTTwB2daGp86m7fpgiJ0ZzhpePKl%2BxbpYH1BfTXXLwjwt%2FBQR%2BaEu07jQb9JJbY%2BJlrsK4p%2BC6V36VTaJdowZZZ58EJVyt7MUR%2F94SltbskwKM%2FtXs%2FHDcRaABOs16Lk%2FG29WJBD%2FwxBWA4mHICMAiMYVoIFkM5LI7faYfa3EjHbxYSw1%2BaowqGhTgIGdk%2FgXtzFgG8tW6y%2F885is%2FCU2pA%2BNenPVq2GOicSBsLW1xmAyOc7JXDVynruWrKhVZjMt%2B8xWSicWnOoliTly%2BIRIEuTQ7PZpq1UMo0G3fM7%2BonqapkFTc8B8mzhcbnHt5MmyfRo6wiTI%2BUE5dgxRjUKgE0DxFn2bAEVVvNh2Mckc7ezwMsOdJ8%2BSab2Uw2L5ImvT6LylgK%2B6lKBBUY5%2FfQv0MefIaaOu4DtnYGQt06iOLqTmZdpEmDOtvPCRFkRycikop0X2TbE7yXdst9eN%2FWFe%2Bz6FOEEbRK4lAlUJ3G0Wgx9xcWDP1qxSQHLsxXjCukrjEBjqkAap%2FqnE0jyAnLUwRg%2BpF1GH5B9%2FnmNdzVwN7BoaaCy%2F5vHuGzsWfaAZf8Y1RHxYpOrFv%2BndX%2F%2FN5ILXe6K%2B%2F08aikVBLLL8pQrpt8xWup1PCj%2FkbLNE%2BywfyJ2vHAoDiPe6m1cnGEtxSpW6Ydp%2FeScWR51RGPXoxv7aMQfsT1OWwv7b4QGEI6mL25srNP8tDpsQdvfmdeRYtDIeV3cBTW2NYzW%2FR&X-Amz-Signature=e0b425eaf0439faea031e01925e48b738a4f55915ab94311a84c742012d0f70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=82a6be1a6e3e4567c6e00b6811ff01d07ac3daba0c25c4f26b14ca10cfc1c659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMEXHWAY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG3W6jDtes1zYtbwGF1JKsXmX7z3gk3fx%2BLWUGy7SoK3AiEA%2BLXmTNFEOOrVN9Ooqghp4qoQ3a3ZZTXiBJappC%2BtLksq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEaHZ8jrJtUJ5QoM5CrcAwQMeqev5CyEZ1OaWqLOKEkvhfCnASYgeQwUqLQYhmV14DRgX6qhLWVIUBXtgx0hbfjcKUd281j8cHuQ3wGwhNRv7SFeRr3mfDe4a%2F55a5kLp3xclsYTAgBV9HAdRCvQeiLYp6W%2BLAa1so1oo8g1FEBXJ9HV7OVaohF%2Fep8Ev3dckoB1RuZlCBpwV3PyXIIp6Iq4jZZCMHuo%2BjN5I0YEB57gQQ2D2KqF2xCyn6E3LbL%2F2OJXhDEAEJ6LJAq5CHyppSpo69eUfmnnscIMCdrkh1BWYYFbcykpaFKMEcx%2Bh1j%2Fq7FjLRdbvjDOK0hbt70QAqU8OUcwwuBYbNfEgsobZJsjbWQBjCw0UJPMUi4uNcVSfMtoXidcMt4sEkhu5aeL1XC08zuvthab7kNOs6IHVYn8Qn6ewIhqX8EiNTHGM9GbBsgRz2h0icJ0cPJmXoOgz1pmgk6DQIeLrZp%2FXwKXErN%2B%2BgFkl9YjDeKvkFJqNTysm0osMmF4rJ9EZKlbK2uv3K0fwLQjGLoCC9kgOaC8eUh6QuYPkfaeGy6LxKF1kCdXy5baFomSjfY34NqRXUugWRLNyAMSdFe%2BV7po32HOZFUI8RG4406L25EuD3gOjuo7TAiMxIthuotlkLj%2FMNmLuMQGOqUBzh1WCsFHIjxptk1ygwiO%2Fb%2B6qujBeU%2BKEkZZU2LjBNM8vchz6H4%2Fi58vw370bjDETsyk4HoX7m2H0JX5I%2BMfEjnHAd9tZSJh0%2Burn6%2FJbU368ZsOGXKckSReNinaLGFAceQILs%2B9Hxv5uysJKQKxjYTP2hXXUznPmDUq0PXGPYbDGVnEuTn3eSEJkMRwOXPPhCXV%2FV4MDeGB2zG1sf6%2BTp%2FWtbzD&X-Amz-Signature=8ac082e7916e06d01c94f886f3273f477542ab911d62ab831dd11dec28e32842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=d04519245c87b1e3e4f2d916c9aa2ba70be2de1e15857c3d59795842981cc6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCO4GVVD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHsXQqDK1az59EU9%2FIG9OiBX8Yt8msoBeTrU%2F6%2B9h7iYAiEA2eQ53KbBaaG2FkFYOQO829DHSxA6%2F54UuYfp1gW6Bj4q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIDYBpQAJ18SUwkv4ircA%2BthEpDmRa81fZnQJvAeGsOaxWSzCiQzCgvB4EsLn%2F5bpPlgBHaZYIH2WZ03PvXbIbBuCHkFgkD%2Bea41r2vX37Rkn0ynQ19wa2UQPxw2pz5h%2FpL87HQ23317ZzLlNN2B1nBCq4xIYrvCXSF0fJvl102g5VLv7zSE6FcEuEA1fA83pxYQBHR1gkXPAOJ53gUu%2B8Nm2gHGZKah9x8hyhL8lv4JXYkXsBHGZt7vrb6gDqTkainUiUvvnKqcoBU2PBYoDnTxUNBQIioU5PhC1wYXnglHcSHKrGBKGTezz421QRsN82j83xYh8JBi2JduF4RyUbg7XhkYo3NKE7EM4u%2BQgD%2F8LpLkgnkT%2B2AvaHVQpuZEqGUAojJ03ZW3LCtYROqG8px%2BYBBjzFQHu6ZR4sUmyTdPrHYAiAcK8iEEsiDe5qxAzOcJ%2BJyjzRUWNKaL91JZxOZbLdK%2B4dVCY0Ddsn%2BXwBY2Z%2BowMPzxShIdeTjA3f8igEkFfhdk15IG2egkBKoondXkUHas7V%2F0y5GhtiV05YLJfuDWH8JCQcuslVDu9hZI3jM8f59b0j28C9gs0SYAyQ7293txQZjLcTSyO3FXVe3GMXiYPRPPxPs%2BZ0sq5ue8ArQDUgtf8km0Bx7iMNaNuMQGOqUBrKF6P3%2FRJCOC2mWVSGiPwPlFzvmA4HDzTlpAckv4GByGZfOCrvC3D6MYRCqo684smHXb7pSYW0ooLyiHK%2BVYkDp2e%2BMBXQvXYMTTwGEPqXdODSTlhX1LGwr%2B4MV0KA25y0cTt1ufPo%2FZn%2BYRfAj9b%2BENFmmZHRbosWSXKj%2ByPIBno9nWFlhriNfVg6%2BQghk7cNUCtKbhCTm2WzmST8PtPLfH%2Fh65&X-Amz-Signature=65ebb206007dee72857e606aa93c64e520ef726d80a17fe7bcb11f2dfb896eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ADB2Q7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Oiy4e5TlQ241wpt9PqmUl3Ew8gN8LPo230ifTb8zmgIgCexNGC2Ef0bwO2TRW9nURpVxxzdB5H8L4X%2BN7qXcggcq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDK1amPDJT%2BvQ3dGEqyrcA%2FJ0JdQn6h8nAif2PakGlo7j3bT3I%2BjzqVULEt%2BRs1etxpWKY5xp9Ifl%2B5FZUo3Dt2zBrFrwlLDjAAIuJk1QyEibOIY5c6xONDrec%2FfG1LWDL%2FwJ6uZVyQBelhkzp21fMXi1AS2OCgsXYNUWZ%2BnAqmTwPwV%2BRnQHDuxBNWDMXb1q14QhiaLrTLQnjRchjQ8Ibifyr41MjZPIfH8NDvvTK%2FyQnUy9uMH5f9rLLVYASoNmMyllyIzUGw8FC8U1PRpbYk11F0hoZbwFeA0BNC4SHBQRX3ngZ6RLpDV1kpar4REiOh8v0HxSvvC3h2IhXlB0TcsoTFWDmQMTdYArBxRnVvUYvkEctM%2Fvw2sHnFxRUIPKtw9F86p817vnlunAPL82tBSSthd1pQBdcI2kM7gutZzZNjt1G8lOE6gS9D5gc5CT4buyLDV6mBkFxtLtzPKMtl8AyIJnFoFFHJxW4OXLknkA4ZhoW%2Buj%2FoatkHDe32l%2FoXhG0VA1iybfTimczxS3hrNMhCBPz0cKe8zPc1AJnajC8hLStpvlK%2B%2FZECe08W9pfNfWMh9NV9LN9pKhtfrLaCJ9bd%2BRhNQmsM15VjYhKPymwL9VWhjMzYT%2BXBe1HwNjfyYAmUJleCloDMD6MImUuMQGOqUBEo3lwdjCoJE2y1SArz%2FgI1H18wmmMc8eTv%2BrqkMG1Q2tDng660w8JyMwzrOgrvcDFvc0VvJ0FsmYHegFw27tWmxDg8SpCeiwwcE2frf8m1riuIaRIHzd88T0ibkmIGOufgMI4J2qOpJBMvNGO5v3GGUIYghs5gZLWtvneK8ihsol5E7AP8Y3g%2Fw4Z52u4jFkAgJZi2vwwAy8xqIQOT%2Fi33Dl7ApH&X-Amz-Signature=e943a687f1f77fb7ab5dead38bf25c41c29a9d1564abb5e99cb727b77e260f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW5JGFDJ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFo8Qlx334QaXPis4%2FlmsYP5pBKrQ8Mq4trBhgxvVJ6AiBA1JvO8PGzriUOpDmO2iR%2BMSLRYGFKHKNpKNK5g2Xx9Sr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMrghSVE4jT6VszgzoKtwDOV8CeTPSdHeS7Njf%2Bt533pXl7tNVdbQTLgbxY%2B510F1y19X4ATcR8CPU%2Binj274lipwpLrpRiz1vG%2F1TjmBVShKCwY16%2BqAlsmzNDNGUqM%2Bx6rr0AIQ5RcKOXCE0oRmHBR3oLf1wZbbwx8foYeaMaV0zio%2F%2FvjYwVX9DC52COMcWs2%2FwIdCjgSAUVLElseEihDkqq%2FFm8rHKytLt1luHB7HLNbXoqi3SXCR5mx09N51WW4eMKfvixNeTE1%2BKfkRX03FHexg5rwb10XlSCIO6R6PIXd8fN5r%2FlI2e6M%2FMEHaVI3Z175uQaXPVT7F02lCXrPogNtcHTaJx8FmFy%2B%2FPhEgf4f611fc1QDpyqmEI%2FtNaZW4wyNlJfopNM1xm66YB2tkwqRAhI7FmyblnJ082F47O614s%2FDaN1li%2BSvqbD3Kk3sf6U5Y4b%2BOBNUUW%2BALt3YwH47K5XD8%2FwYadZrnGzjkhkc4c5ij4TLElT3XnBInAt52nFWg%2FLdD48FzDRL9bxZ2quZLI5xAUskJcaK9qsGa6KPMLLAkEvDJLVzZi07%2FOA1%2FvDN7KOlbKSgDeiT5iYhs9XAmF5dN2P45vZi8yth3u%2BRs9yHvYzVmslbZ7SzOCEZ4S7BT%2Bc%2B0g5GUwwY24xAY6pgExKAA0GqhZZezmIt0zlDMneYzRqNadYkhK9giNK%2BQM4%2Bw7uivaj02H%2F6jlr%2BcIfv250twXBDWjwxOn68kqN7Hd3NMLJet4oJBn2QK%2FNjL4rCzqsVitwiCx9L3AdJxS0CXz94Lw9q6UnefWnbIave6%2BmK8qK%2Bh489b%2FVSKwZAE8sKaDy8JQ%2FsNIKR%2F4%2Fa%2BTw3KHtDv7GyCgoXieFU3J%2FoxdpqJzRxmT&X-Amz-Signature=328aff3fd675246f104fdc936575573c66f85e0db548725e0d407a521dbf23e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3753IPU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICR%2FB76bcU1eM0Oh0CLVgJzwu2XNml%2FLDeUvAE9ybyUSAiBueLD5CdzF7FNbFBc0pxce6IIV7wmuaOzg%2FWYXWDZY%2BCr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM1EoQHuHTj%2FAfWqEsKtwDQyvz6CKLlcLJcoFV83unxuPnMVJX6TAnkRVi4Iy%2FFICmuw48Flb30g1rBYuSrQOQ8Yvrxc9oofXf7r%2B4QJ46AI%2BdZVuEwi1SpjBQ375UAkHtJQfCeWa3p8EQfKK3fIi10rwUkTs0nYyYja6L3AlO4WiOd6ZGhQwTvEiuFxaw0umQK6AYEhr7Cyw9sakRAEcRagfF9%2F4%2BTcgPIOxztdsVD68CfYng%2Fczse%2Fv11F4u3fTlV63TjzwzZk%2BDAbRelF8v%2B0CHZFOrpdyJ%2BTlWlN0KgPkNMHJLie25aiQLRJLtVqrFfs%2FkOzRubVTLyC3sYcg1xzV7FOz8TaAtkHJ2VV4vr9c4AsnDhDUHf1Xt3WW6rgNzoE40vNDy4kP%2F4aENtkKl4I0XAOlaPZYvyTEnLIpuJkxUSfeHb9ktoI2BL22%2F07SQ9Z7EihZ79LFnzKdfonqyqzfjfIfEs89PdLnnxLsfvpYvEK6Qv%2BxfQMmgAU48hOSTG6zxpQda7E6r6NXg4jmqzHogznBFDNYzMH27gcHZ11xVlsA%2BbftEWNPJf2yCrx%2B2IpMArVLGeiJr3lzEN9T6JbrV4E4nivt1WUAhQ6zgRK8MllDqPyZYVjPFISx2VBo88i8X%2FqBLsU4nZT0wvY%2B4xAY6pgHBD%2FqxgHK8a1VVATC%2FqAluciqwMtOcQq20PrzKL%2FYij0OiH%2FhWNLk8eVisXCIJhXlPeX6nQgOfTT5pPnFiBLR6qAG0YZTkIrIMdnF3uyjlWRTkOunGME5N8YapKv0VvSu0RW4JdmXgyyVTeV8d6pPOvehllbad7brg03FkelP8ZDvreqzxJG4OOfa7YPWMCvk%2FNwg2ML26D8Ci4Hcp9ZSUF4UFDsPr&X-Amz-Signature=614f3657acbdb79d54b4e192f158a9043aeb812c00b86156a8afbcdc9cf707e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VDNHHD3%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3SPDXcCZAOL31Voe%2FHhITF1ZftOx62EMBhbTI499LfwIhAOCLxn3Ea0Crb4nxQm%2FSL%2B40rohQ26QfiVb2fF2o5x2DKv8DCBYQABoMNjM3NDIzMTgzODA1IgzsXAbT%2FdPGUpHRZ5Mq3AMYZeZ7%2BnqEgxbw7Kmhsw3KeQ%2BVmF5ie9dqKL8fDfwaGNtN1YKlwyGng%2Br70GHB%2BrYlvvb%2F8d9tSzdkwVOX6duUEE6N9DLg3etd1RzjBSt6%2BhHz0qBa2Aixkf%2Br2QxnZ%2FgTPsK1Yn8RuK6iNJgvwJQzdmJa5yxRBMrPuejLThqdYqxjJXKW%2F0uJ09sWEBkFKv4x6oSYCu%2BwLvaczwnrPYAdtJ6bsUcvyLrWCKIBBgWf82FLQL%2F13NkIWyGcq9IbLbMkiF61UBruDsxp%2B%2FCPRyc7PJUPf59psa1d9JWw8t9w9639W%2B7E5EY10RrvNh0CcLpOvd%2B%2F0u64EK4JR9A%2FipMKYuVmQg9S7q2N6Pp8S5zBfs6pWlRDoynNtbqD9CvMJCm5bhu8HNJq7OSl6HRvTYs4DPNQ0qL75iRHO17Ap9YtU%2FmemB00CGZk0xqRm36iCXThvS9hgGPEeZNKVBSdpcjKmpVktmCMsg0ztRQjxVtsnemvO0Z11TsO5PTPsh9LQoE8dx2dRVkI0I6zT8x6eHD9c7rJxW7DIENYFHuxVSHoHQ%2B4S7ZwQrbiCgEVytXQ1lIsEtqN3u739%2BRLzlJeR2gMIG4RyIsVQEoQjNa7gB46WRo%2BjAnj4LLE6MMHgTD6krjEBjqkAay8IiUUSSwoy8GfjD6gwSHpHKMbT%2F1ghvY0xwLjZQKyVvQFrMLeg8dvh3%2FF7m5lZmY9r%2BPHvFtX4Vyhm0ZxHBdUf8t15yXFI4jHfNIgdXlmIcyakmYTDZ43Ns17os59QNVCLE2FOPIl0Ybpve1%2FLe0BUWm4I2No5YyRlQH5zrDujeIwe4prlt5912lES04AaDIIEUCgkXhUCsdFX7Tu0PuhejE3&X-Amz-Signature=45cc5624d533c5ae960b35668c4d4aa8d22f92d69ba98ac4ee5b09de2819bf4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=91ac6647d36e6d00ea8388dca1df3394f9af08a18406c31fa97bd51661bfede6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7GFSAKI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7MXeuloftKGffhUAvmD6bdLlrdAa3%2FhuUvCSwI1OwHgIhALhrPdteOXlc22BYb%2BUXVtKQjRJdL9LlKLP%2FHuP2N9XPKv8DCBYQABoMNjM3NDIzMTgzODA1IgwoQK1icYFJgWje5uwq3AP%2FXkXZiSWQqs6Fj3kTkK017AqovK28hoYyzSwAyWeQu8EYSZapfyRqVo1mFQIJ3H06851%2BFp9aHIVpQ8a%2BSLnodB4Nc4QJn5KuV1PyVO02U96lwd%2BgGmAsEjE4GM3gXI4ynwIJCe9fZ8O7OWATIxsQTv%2Ff4vUrY%2BWCxyDK65OQCseyxs%2BghL%2BoGdmUAUWAeFeQChkx5skH%2FQdLtP3GWwio1BDnVgSkgDDF7Z0wUw1jZGsM0dkjVLQfY6YWTYzW1nT%2BypLDJx3uNDkNhkYGu%2FObUNMqaZLud4MWb5nv2zoL1oitLHgXs9WX1R%2Bym%2F6Jbgn7O0FtbtGuKT4WqVWqidC2H9Ms2p2ipZtS%2FCaL7DmNkJuBBLtIdJqYqnU27%2FexqyJmYSgkmzgnMtYgvwQZ8zfW2AQtPni9WIRHI28c9wKoCbzaK78yoCmFJaQd8k%2BasjKuslyECqfqsTzwLcXKJMlyX1vBYDGE%2FTvOgXyTfwe0%2BenIyq2rW86e59rBiNIoX5LtGKA81F5g6zinHRZhTjKRib%2BsF56UZ%2BHlCkpZ0fLRUbSeffx%2B2I1OmIm3DtYdaqMQfHHkeJdeUKb9OIZC0pgXrZAe2oS7daPiehdJZ%2BfkvvXSGiEveIH0lBhMODCflbjEBjqkAWe94yqUqpCpxVUZVAYc%2BNNlPBLtRCS040%2B9yKWClth93VjbqMaMY6zO1h7zHkdW6JMWmetsRu6jWsec7phuPNfJmVS97%2F5QS8V5ZRknHaVOXIaPgb4PblgENcqTad88z1AZPy7%2FPq6fpJdJmrW%2BzyASYqexXaVnb3x63IHYSVfiHDHt9JWqwXCDLD%2BXdJykzdbhTBbtJXbmRs9lJzDcCA75z0vw&X-Amz-Signature=1be06211d6906ef9a28cab48de0e18bb7a6ac96875b4ff8631d6632ef0115a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=445115bc12ead0078fd70339bb4730d93fc1e3d45cfc3eb67aca22fef8012acf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=e0049f630fc2deae87ff6e0a74b78210ac35a9af685227e892e684738fbf0e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=8cfb721ca5d00d95f385dd2cb511a8cac2ed7e22f0bf50b99fec17338cbd843c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=524394d5c43a6b6e627f93309625026d1a7e4edc9dc43381154faddfd337b84c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=993e726651a83999cc50c54a080309ab0493f129f20ba592866aedde9373653a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=42c2d1f33ea51d023234a121590b408a46164e306d3a3bc76b354174ce44449e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=8cfb721ca5d00d95f385dd2cb511a8cac2ed7e22f0bf50b99fec17338cbd843c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=9a5ae353f94014b66797f866ab720248fa7d4841d086631fe36f1a2b2254b727&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=de847d3c17ac64d3149ca2aef446022f4fbbd91972ea012c6d9058616a024c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAKR2FZ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T132335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRg2zFh1oLIjbeRkLsl8rq2g4xmk2Z24rVpBs%2FtQ%2F%2BgIhAIvYkVlmpz74f0DpAE5K8%2FzdPlBoQ5u%2BDBP0ZPPMIehVKv8DCBYQABoMNjM3NDIzMTgzODA1IgyZWJRmBbkgwgveyH4q3ANFDGGWSh4tpxS3qXzHaTevlBuufhwnmEk6UMenB3yAEaarNKDx3sBCJSz8MMZL5i8kO86gEhwEOwBNbrC%2FmxTQNQQphByHL5%2BWWCB9tYW6WtDiIl14DWv7dvBd7Je79ohuXvcMr%2B5Izvl0GYtVmKovcPbY8s0%2FWGbfU99pK221I9fYKVQ0669Zr%2Ff66gtR57H1qT9MPS72kHo9jN7JBqR2j06FQ0liVuDMVuO3wda8vF0X7PK0exwxUw9Jz%2BbqCHd%2B6nYkE1UpsHuxO34oo4%2BcjP%2FFbHOVMPQzJo33l03GmTPdMG6gv6DW49oumimxg5t063iR8a5H6rd5tdwAyh1QRXKo4Tz07IfRaoop3lg5ndcfrohrGXjl8oKgaN1VCUAtWHu%2BmN374pDbAVDlsDYchbhUKW4fGW62mG7MrBPmaDrUxIYhoFDrK8Md5kKaAjUL%2BHs5M9wThDryielbO3CMI3VLl%2BOFgrl5pFNmX8QHDeIYnaTxuSaD3xw%2FP%2Bn8BbygVI1tiiLcSpNBVCl2ZEZCmqKdtb%2FTcRyIUgpv%2F%2F1qyx3P%2BkdIlydGhxESdVYN39ONmqb2XqyK6iMgkGwQO4AiuCUbkMQVZGuOVKbmuP7rVH10kqLZewo6YJXH1TCOlLjEBjqkAfphXrD9mGtXd0AmsFndrmAzjl%2FFK6y9mc5X2iW7Who6TmjM2cqGI8259PCgSrd6QMnpEB8fge9fJ%2F624cLvdRgYkhNZhv1K04cERuqpXIcXbBP9abC3bk6aICbXUv5VH49MMFNtig43oj7wfarB%2BF50l3Cd2UbBvX1iDtqC56o6wKTuPcHGgpWRbZ4AG75bp%2BQ9PzpJReoHxi5Y71DbUqNXQ0R9&X-Amz-Signature=7f55bb3cabee3a8395318d098b0787b2c5699bb68f4450bca7f71398eebd9b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
