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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=d06e3990dce9652038e389aa9c19b4d65c03792ae03176a2951355316a69823f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=4fdb71953b55c8bf6e62938f89d5d4388e7e430706ef3f5558a3cde8e2cfe585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=0177016306903ff9aa2629d33a25eab9fc38977fa8384c3864a181769ef13b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=240f2c6db1ef9c0d856c127d097d8af84201757099d078a3c6d76e10afe4f7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=4635eb179a116bc3937339bfd735a631af059a96b134d759a5f77a844702bb92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=9e83df692207ad33550ea9e31c7b0c70d1b7954c1605893c704715e90589619b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=f2a3d37e419bfb560984407f1776360694c5087b6eb601e8700b39a99db08c24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=be337f1e13fb261b37bd6d49762bc961a3f0f81f31d5a4568843a835dbfdfa0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=43b3333f73b43a87475448149c99d31e7a084952c1a1dcb1a0e7d76efe67de84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=64bc587fb89febfa56d653f3d9765231f475dca1aa0c929376e88afb600d7174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5UCYKK6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMMS18AbWhv7eO2vG1X%2BEWK3ZiuBiV0QieukFTdzX98AiAqKzWo%2BzPFfPeN9mZQp1YBb6Msif28nwy8RHOEz73T%2FCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgaLWXWlacuNl1xcPKtwDFIeO2blbMJbS5yNpMF3Jp%2BMlKduDsLtnF40J%2FWRrL3jUbO2y9eL73P963Osz6iGtasw21Nutv7QUfSIu1uIMJ3YMQtUSH6gwllIYWmkmwtRuY1nb7jy5KSC6tq0Vo%2BG%2Ftpyl07Mc5XRglRzkAWRg92sOLxRNFuyI1B7OUoW3TDaLD1iycZ1QCKldS3r54gQYUzt7tJAsy8cRe9flDGDDUJ1016XwUjpepNUgdpanqKoYOGJh1cqlmmLtVtqpSOcGJ7EmsZO4qwjQm55mro6TnwC1M7akQYw%2F%2B5GOKMIRarDX3Vla7b%2BIeIpWF0m3o6ACNyfn%2B6dvYA55ghg723Ri4uZrUxkHOFUtZgEFm5rYbmiZtJBI%2B3xNfi9MeVZqgMpQr%2BmDNB%2Brkxb9e4kML8qPh3WM21DuNPoC2d1sBMAE0ioGlw2o1b6TVIXMxzccaQb1%2BNGMdbmQt3W5pKn8cSCZnqkjBzEuh3K1gOD0cBTQ3kJ5mqdqULUpr7e5MmIqIc1qC41wQJK5%2BXEFlvSOmpQ2%2BvJP%2BkzshQXPWu7VZf9L2a57u2mI95BZrvPOwdbdpy64Wsz3A6LJJmFBhNOAU9vjrh0fTxL9jTE1Un7qZzzd4VoMckNzI97TLhf5PgowsIrexAY6pgHCDaROXA4vmKyIUn%2Fp8rlOC%2BW%2FbBH%2FWnGWQDyBrVO%2BPnZjdFjVHhFWrkULSjAHB90KOAAmQfoQo8S3GQxfJb74joljjoG0rLmeYr8ZqRdCKgHezIxsBATRO%2BTOECmKkt8y49en%2F9YS%2FnpzEpArubkHtd8xANH1zVRlVl0LO2zTBrOStr5r8IqUmYx%2F1TRiYtxuU6KmT5ukNPflHUvSp3a4M4Sz93bS&X-Amz-Signature=f43a39d8605620e7c80ac69f13efd8f2162c28e01f45a0bb204e02297f47db34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USVKL6LB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDw9SekCYdrxPkxAu3a76R6Odd4ar%2FFMyesVcUPzJpNawIhAMJpChLzALmhQFLOhZ7SX6E8Xxo5eUUuGLQlX2FD2AvyKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUhldJxEVlPY4ZCjwq3APh3JtvVXNcwmysLAoSWZpnktCgNB8EHonS%2FTYf%2B3I0VqcnLohV4FmasDTjHErWWo8OX13ECjuCKL%2BuUL%2Fg%2F65KatNNgXQ3hM11fwrcjg2P59w6s3daKF9KgGwJw%2F2M%2FwfnYiuGa96JfEeq6AFka6bXlPelZajaORrMLBxL3TdDXHODz%2FW9qRAHRedkYkUA8hurMIkUVD0clQBjyWg%2FSVQ%2FkmZ63BUoajDx4zi0wXIp2Vx9zOZE8DLj6BxP%2BZ9OcGsIdutciy2SC9G82nH5oIhd8mO3eVhWmBU9T5TSlSPGzNy2y9GP1VOqAEUH%2BHr9Kc4CkgMakKxMYoea0Pp9gjFOX7WtG6BMr1Kz0BDiMOY0ZG2LN%2F%2FmhJFjH34Nj9VEw%2F0ewWTf8LVfMOw2slN5WfHPl8SStHsll0IZQvB7YaTBJdeFTj4v0a6ZA0kywPo1UBcqDmgIUFzPizs8OLNesvwbI0X0hsFNHbhNT0kvjM5oYU36n80NHyjBA%2FuRQPfrmlUbZpH3jQ543pCopG7l4hRNeATJvTKMWi7JAnZSbtmTBMKoUcEMcg%2BOTLTdJX3RUJA0dQZ8Ed3Q3dQAnqR1S9q5kF8csv%2FK%2FAId3aqrEmBkhZuRCUJWzb5%2FRMW8lzDKgt7EBjqkAacXNmp%2BszSq3%2BRrNdVIBXeUO87ZQ442q06boGT64%2FCOFPdfmFZFY2YNZ%2FgRfIGZKzRoP6fFE0rutLt6VQweFLN20yPhZJM41LBnEdc%2BEpmvpkSIUDS2MM7cIeMFaZm49T5%2BZ73VqXmY499alAtPUnrlN4%2F%2FREE8cdvtcXb7Ia1gxnc34g2rhO8blBG%2FYTwU7AroBNNLF%2Fsk1%2FpT25H%2BOrDa6OQm&X-Amz-Signature=4d5a55e86b32ee7388bab002cacd2f607e6060e17c510a420fd015cec0fa1411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VRXBQTT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FdpRUkKeBHPc3tYmioORjVTgnjS%2FpJiyahess3QAsMQIhAPh7kx3zojqlkww%2BHeyBNtvNpmaSHr4SiqYmg24JkhymKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyivjq9ESFJ3pgxaXgq3ANjHp%2BZKMMSOhxhgNjLAvVjJaYoy%2BE065HYWIPR0la1zeC%2BhjvXi3QLoMoqYsAe8VACmsq9R8%2FGHPh0hqfJhjwfTZah%2FJEUwPNbTZjFY7xeZw53oUCzITHO0oyOAmX8GfBG%2F9LWf6DRHV3Fp9aPDCuh4ecP4nQSU9ilHHVEuSj3V%2FiKk1uhIGse55GIHOPp5qNAz4lixN8dj0J48P%2BPDEkYbXim%2BulM3x24yYsJIwi4pbG5IFmMjcW%2BWOFVdVjK3x%2F4tyUjBGivccLMK5H434il8Wo7Q%2BvOWDYe2ZihHcsIzxEyn2A1c08k4t%2BUYWQcUd0LSl62oSTJruDDSFlZQF1sUTJuWyosgcl%2Bp6IIc4%2BAgI1G65YITyikCoIAuW%2BrUMl8AE7A5DWoGn7ZiWWYZdiJKVX%2BbhuRuLYFANErOGmDt4UwMtIm2sqjqH0ZR7vSC5KRXLgXRsleIGIpUX0ndqSu1MNvYzL0olsLGLVAmsRuU%2FlGZUdAQCQ6DA0ERPoaZmR13lFTeIalOHaZc%2BdW1uFJjRxP%2BWSHNlPJLYR0sb0f0rIdcg0ZU%2Fdm9Tr8LZaFIT%2Bd7u1FZG7MslH3eGISaLJS1duVrtNxZ4HVTsLgG9j2G5aDUh9r5nFmfdxxLTCPgN7EBjqkAZV4ZXIO5Nz3qIsBIWIrshWLq5WhOh5d5cDQEMzTEKqGkQ33FrsVTV5eneLe%2BPGI2Q4i24Dx12YDkgjUEQQn7%2FbIEuYuJmg5lvAKSqbeU%2Bra97GFrspTlzC8Q3oUo4SCkY1T3l6JUhv%2BAWOakTrsSUc2NZHU%2FwUr6dZo8Rly3gvK%2Fn%2FxVIuaah7iGeYFYtF2bvxF%2B%2F6SNnQw02O8un63%2F1LP2eEV&X-Amz-Signature=cfc624227c2223f12168caa7aed4e2556897a8ccee120f6b67b1726e1313ad7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=e7630f904fe8a7fd3bb10d9153ebf0489138f95ce86171150b1e09673ef8773a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWEGG6L5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5%2FMoBUowN0vLcK%2BpHIoji1YlZzg1CrIFaeXrI45jfKAiEA%2Fzllm1dmcVpAlGfY3teuKA2ASf7CccWLNWHX15aZyh4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMov1vckf27aHGrXSrcAwlfGa%2FMXE8Z9oF%2FVsuF1erYV6fX0dviJollTDbkIvoi4P28rYKt2it%2BlMXgiBQTTIb13RTwEn%2FiBu8OEPfXUcihq1sPcTUua7pyuRcmdm46nuGU5PILsy2E5vOP2eFTAgAARRmynZ3MyVxEkk1EN3EZ7P6PHAyXlnFAile9Fjh01Cm%2BteO6KY%2BPzrCsqC5YWLRippqSOXx%2BjC4Uz6tpqD5kLYxBp9IMolY%2FZdWs0LSHXNwlHccp8n79CZKSj3EoTOeX09mChEHNtnQo%2FlnAvDfzDf3xRZXhww%2FxWlM2K4BVa67PvmMvhmqQW4hk2ssRPQlV4GAjAMDU6NNZ65%2F%2F0e3XMOKAVoTB6cjGEuWutUC%2FfYguxx0C1Shn9D3Qia%2ByHApIZCoI2xqvGHfkBdNhj41ByeiiyYuhFY1OhntpCJv%2FkcIaJgms58BI1P98fFDL9hHvrWDCeWvqme%2B%2FPcd%2BwqBVjkUCP9a8mZFdnbuT5l2ERmM%2F6cdkg0HqZZYXWzxmtuplRVUxo5OhmErT7CAxiDEa4bphdZY%2FWvCHBPT8c9VStu83k0i4fYxbQQFEQLl4%2BEOdjSmCUoS8Ux4M38IVhn1qkx3sPrEQabgxMA4qkRlSU9g7l33UmgrfI5z%2FMMiP3sQGOqUBCjCLGbIkLARrO41QoUvIU9RB2%2BXvl20rPwmmLUxCn1wI9jLtnD1IKC31kvgDcC%2BYNzytfmb0dQismPLEGm6yo0BNRJoc3OlvSQ6qpRVfzSxXpLoPywha9gzfagBxd34E25T%2B0NmDIjlgdqGaK58YZNtJ1QOa%2FuUskgzvSFOjCrEM3Ikb627xXhWlK3V9Uj%2Bz%2BUyNPkFE6wDUtSGUFTPSkg0aO%2Fpo&X-Amz-Signature=26ae7325b72006d905fb5b1581c37c04e8512c315b7d652c0d26ecd62a8cb396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=926697d2a891eb7f36b0e702b6da406f42e03ceb4226cad41d5e85801906c498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULFI7LSV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX7PerQplTvBWZk69QAcNVprJznjyuyVGx588nPnn8bgIhAPeXcChgA01oL0RGWPyPuJ6iEmb6dFmCRQwgSW2DkTgbKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP5GejbBwwFcmJmQ0q3AMeI98YJRGB75xtTCTJaicxcJEsvHfj2EXUYf6uYL0YLjIojHh72vHeB8UiRsyB8Iy0%2Fx%2FA6MPGiwnz7RvUnPZMuS0G5azw6DmVyxj4Of16ldfcROrkrSYXkoyRe6VFpSJnUa1UeUnwEc5GudCkVx0jpJICdtodQA4pzxDSZwrn4xouswSXuSqAqg4vJtbZtxKYEYktaJ1vM9w4SCDRMoxbz%2FSj30LyIt%2FzIxmkg8OnSoa5NjmZR4Nlw8i578%2FzgJsIOS6gGrUjOE1NARw21nO0i2kI5aN2mYc9uUVE38dRLlgBNJtjWlLTkNkNk2EvObtqt5fmQHb%2Fq8DU125%2FjRrolwgo52jLYMAJGaLTEQ%2Fwhb42SQHPyQ5oJYrH%2BMD%2Bw6RvbUeegl8rwuR3ni6NOd7A%2Fke31973xCqrE9D6AWyXftnJUXOdcM4GA%2FTM%2BtW9x0VKlIRm398Zw2pVW8Q2j2fRvgOyPd8v%2BFLg7Di1XcWtZso%2Baolo2PRR1CVgj%2FfNEvVjzHAwdqGdH0s3%2By7QeemlUqX7zH83THlkny9qc%2FHqRhaIlhZoEG7t67y5wiKigepMrMUg%2Fj9tlZMhAmu%2Fq%2Fb6EdxkG6u%2FwIn6DcmZYsjRbgqA%2BTtS63xRXwrsPzDri97EBjqkAU52wE1oVvOztJHu2BnbuwYO5laSTUqsWx1rmXaBDpw1D9ALVcVok5xT0zx%2BYyj2POFEvc8aCl%2FhVYO8ZWNG6w%2B4vJTk7gMr1fSGEdqEuiMlAtM%2FV1sdpbwPL%2FzPQgcDZKy4e5TRfUZc3yyU5iyJq5%2FsWAf34evGzMcFzNPDwX8gz4nlkovxKucFuvyufihGBqofEZXEcAV%2FtT9pJ81RTh3PEz5M&X-Amz-Signature=c8a7d0e6a438a603f5486a24fec1d7e7fc0958054b1504cb780c4dd4898a1257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=189abdbbcf0b5220b611d807148a6655e4715c856a00f84e0315d0ce6f7a0abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QC44BZO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEMpmv9YyQAnSTwtn2AOw5jwgHCELUn617mjyVogCTSPAiEAga7CDjAr%2FF%2FGneXC6qcnJrUNZUlCEHPURwsA4Le0pb0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBNF%2FmBoSosuoEPmdyrcA6tgg08jrC%2FcSCwN%2Bi638HA4%2FjmY%2FGtg%2B7xyLlUSLI4%2B9BGqu9QAEqt1pVLG%2B8fqBzIGiy9%2BE3nu05Qf05aOGmr5LvmxVr26kBQpuk1%2Fst11A2IxvlFHf%2BOXh8Ir4lYgpea7NL2IvWnXKG65Gv9%2FV7IV0dAdNBo4yzVuQAPxVIg9UF48wj7pq1PcghJ1WMm0g%2FgXNORD3FzGubTgc3IL9ythssSGJX5yzwlW%2BNpVdwzihehfx6cFZ2iAPcWkulQXas6t4nTpmjNch0sJxwyyfIBDZTTRNLER2WBn2y21cgxi9HwzEoOqtCPb0zcUwZBxi%2BgIJ2pKt37wd33yEixtHUe0YGBbQDLn1SGl1rczcoqAPgHXhswj7s2DhAiF5qz0bjKjlSA%2FsxO87hHrOa%2FvMQ4Tdj1rq3NKzp%2BgD%2FGz9SuNv7I3XNFl9EEVoQoSe8lB7eJcF%2FTWPJdggX6swOFglVs6mgR6QwCTKcvkG0ahpc3tAmK2yB6LNZuX25kMyoNEKmq03NmWAeXSC4TdnsUvgnJpWLtvqdxXyxO9VZI7%2FC6Lzn7CHwdRLaVpJXfpTD4CWmbq0%2Fa59qqMRsi%2BpyosgJTYlO5i5bTKBazfSDEWcYMF4ugDv77SVZp5K7LgMP%2BL3sQGOqUBsEr1KLY9h7JjbbB1aGIx%2BvS6vNe%2FrI7kVgl9vcdnqg6JNvtS4F0zum6glQfPm9EovqnXEwF1%2BOFHio6nwO2sA4X3K2hEHwuRu%2F0cB14RtGwTzmwg9ZqUS7jBTprOd58ghninfGN7Sm10d5c92xN4jJg7wWmJJjGMxgSReuLE2QbcOqj0DmpJK9GNICFlI1avmUSXB5U6tR87saW%2BN6L2Y4w9%2BQrI&X-Amz-Signature=f00291d736712afe4096ddee1cc273e77a2fddbe4e0787a2d7f3d2d0ca25cde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=394829ee76ebae3a2dffdedea588509a8d4657861f02b94ef84dc484c841c131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPE7U5JN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDRlaQQNkUUv8Z6pig39%2FabxhoQhyYqWzKRv1DKdOBu1AiEAzmbiibc%2Bwu8EQgLxs1q7p%2B5l5uClom0X0Atwu5awRCUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoVfgOsoXld52u6lSrcA44UQtbCeTECWfAgPpOBO3wzhUJEq0W1lrtyN4WEyFfk33UFDUf6azW%2Bmp%2FMuDGsrIq5Fln76Qern3bnzPWtfaSd1tP9aFfcQ2d1tLlN7tu0auV69p62h0Bd03kns3YB9Kmyj1ZJMUg22%2BKCwNIDf%2BIM6hGl8%2F0zpus%2FdKJXQgETpQXAI7ywswd96%2FvHFEht73k7tXSK%2BBzpg750%2FtClSR4XRr0ChZWTv15wlPqTOe3mqe4REWzKGL5%2Bvy%2F3HuIWSTHN3d%2BZ3gtwikJlKuSaZHG0U0vvdvi2FLmaLr%2Fo%2FNPYgUeaoS6YenAHmTkvUrqkFK%2FkS0y1Fski5K1rtWxsjYMbSUlSb0xBmbIGKGER6AAJzNlo1L8pSP5mvruZ10cm1DcAWXt2Z7T2JL5U3iKYPdXpOKkkpsbu1n6LaE5ETzdKK74OO57b6R0icI4QHW4bmxrHUDj2zVXrh82hAoNRrHLD0cJLwuS6jiuCdkAzuHy0S5QTIgYhOtp0yVPZ%2BtGTng1IIo95oVp%2B61DS9alFCU3t6luEzx%2FLDXTvZWSLH3cg7mGmbCfjwze3M2n97fnebFwk%2Byp%2BHdYsBexrl9F1WZtxp8Zhx8aucPDhivyVu4iVDq%2FKWR64bM5EFKIEMMiF3sQGOqUBGunR3mxbbFxejC0kQr%2BQPehmQZEo3h9sj1JenVrocOKWf5a4SfA4yPYTeswyRdUEgb8Wu%2Bf63aX3hEvByP0xjO3gSoC4qQ%2BbcbszBC%2FdbO3rc3ydZHa7IqYh9n5ReDnvzFpPTDKh6JBzlVEU1lKgTmueWuGapujptGyhNk7BZQMxkTHtcaFP31D9A2c1doUYkbmfLaQAMdPTsT5KFEvPk07156FX&X-Amz-Signature=fc5e1db99151b1ea17f3b0e1d73d97b6bc621b00d49c02366b4c8b7021d7d4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMWQUKYY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhvq82lxHWwFsc8YFBJtsyfMqHoNVXLRVsjk0CLat%2BZQIhAI%2BwdnLK2qpESYh3fr0E8cKToOSuBYM8FZZAW6j3Bnc%2FKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZT2GK54FwUCZCWFUq3ANgsfHRqJyqJDMSv%2BbsIfg%2FsPKII%2FeHZTxTcXmhDWm99s%2B8kScVGFb9mSndHDd58JAmpDT1IoBMQz0aEmOFnSTqyyvFUYlGjZQbIpzFElA7Ox23nCvctCHD97%2BS9rAQ2uXel%2FvFRGXwRvfMzfz6cTnV%2F7pUQMOkeGODsHVtTXCrrDipF1F73AIKWyholj3T0mqviAOwptaw8CZ3nw9HW5TPNW9hmzQ4CiXNUkvIhTaVtT3QC0Sxuux3Dwes7ZFXjC0XOrklJDadF%2Fx%2BblELkRuNbi9boC%2F9qi5d4E61niTfSn9TIFyr%2BRb%2BZlTO4g5dLltX3Kun31XHlIfmNE9cM1%2Bu9YZR1C2EXCHNugLBevdmq2I2pmfu4hC1YpoU55vyNeXIuhewltuzUv5bIQ3btP11qY%2FZgVW1%2B%2BJAnBHDHCscnue1DuqNQVw6Jvhrp4jtlowD2T5GGV3xxT21qTSqrwTElkMUeiIdJ4TCvjDtppWUYQZTSQvTWvnfDXZTgeGadwJhSvzBbM0L09wGUUsGhEstoqxNNR%2BP2%2F6bNu4vLWuKjccrgbSlVOKyhCDk3wOuN%2BHL2XIZykS3ZF2u9wAuSO3RpBEfg0UT6P764Ss810QQbop5R%2FTzpvD%2FSWquojDE%2Bt3EBjqkAQgHj40PtQT0TJMdLPxWmQ7I2Pvy93eD8cqe%2FoxDbIyqUWO7%2FQ%2B6jdhRSFIywQYbN%2BOllAy6fvWb%2FXiCu2RSzgII9TY0OmOOqZ0iEFKb7lRhFwCwMOpzcAY7EWOzMZJ222jtcTIbztQfjBH6uODxEZPi%2BA6RXKuQ%2BTNtiS%2FJCe7IWyMYqVljMye7efq2nnFDgLf2QPrCdvUjSUxFLpBYeAqMyK2F&X-Amz-Signature=60092a1dd33eae91ece1cc4de78b5dd089ccda349bf21a10fa4a9c957f89f2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2MPETB4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwdWoksQM9%2FtH9kNUTrUcZg4pPnyfj%2FzQGtAvItm61ZAiEAviSFE48u5ArDsjUh56Z9ZsoufMs6kWg4rQx1mKMIa2gqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNsjsYuU5%2BUQ3jv1ircAxkia5RXrzetLb87x4JKvp%2FPzytdMCcZ0rfk7tw%2FPSk4fuDLipf9dzZpxiDtf5e8n0n%2BK9NERhmIsa6N6E8OVBIaa8PPMy1c9iRUvHxlXXYRvAeNvrk3%2FuidGzJHEYFgWWFYh7DSVurwcy8%2BTBOSHL%2BDZGArmPYLsN0%2F8DPC3hXVmWSWD4bHKXneF9jfI05n800v4AiajD609QyxLEvGPWzkZyScc%2BILqOXjPoFl6zB%2Ftm4Fqqy%2BSMIN8NJn3VJ4zeDd0QZ4ooIjPkDdnabsGkoLfbuJui7xTQ3b25DPd6t58GwpP2G2%2BT2gNeJgnu4xfkCyU1cS2yZNtXDEMzm%2FUHK2WbxZL8i7dlyRwD7fkvZ%2BPJYq9AaXkMhsAqIf9k%2Bd41HozLnGTrMKRxjeyfpDfBaKS%2B3hUldUqGh%2FTwiph2bC9lHHaGbYec4nrgv83xJsH%2FOVBCIliHmc2nUNriQoqmo0VbcLCXFlUqbnA50jD%2F9vG8f2fVd%2BO9o%2FRAjASSUVgpOb3RnhMjBycaUuhFvM2QS5bUW2JJMf2FSohKY8wL%2FGoWkkR9l0sPgFvOPIr3b5JsBo0FSWnXd1VOmnF3siMsf8ufQc0%2BmRLeudx8Im9q2x5dhC3kxxjB%2FGrSwwMID83cQGOqUBxe4lAXhTj%2BzimGD5qyTYO5sY6SBq4DlWa9JnesrzgmtstQaJRR4atBpjkjB%2Bn64GPARw1pML5NtGwVQPgCtxMuvAndM045hltemkYrAt5ZS0xiIzaPRgzDtm25HTYXSYEEk5v9j1SSmB9OSp4kRz7lNkDnypH%2F%2FYpDpgFBUmdzwXQiHG7xz3V8dAoOKQgiYihuUwMUTKDvfww1qeXM2lAWYKRtR%2B&X-Amz-Signature=04728867695d95bcc561fecaa104a9f7f47e30b2ff9a341625a6bce1cc516f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2SASDJ2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FK%2Ba5oNdUa244i2WBAlSP2Yciu%2F3WB9WaenSoc%2BtMcAiAP%2BRWchggqlnnF3nQqCAYy91kCcgbMsskD8pRm2cj28yqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoy9eswggik4cEo%2FOKtwDT%2BfOJlSt7MKNE677DbkF1p6Q%2FjInOD6QQjTnNKq11zu50HLndg4gdJ8sHZmtirQop6QPa18RXQY4d7tmYfkRkc%2FoPlLgQPMPgYufQp%2FIjMtIg8wRuUdv9bT5Bsjlr9sftm1npM%2BFDdS%2F9Yt1gUdcUsgo7pTWXCxK0kqSV4Hx77ffAr0WlC%2FlGWsuoc5Ag0P527edeqsLeYCmeNc6ykIA9u2g32qHEbKIC%2BipV9t9DUKxt%2BL1XofNTHoTdpcaeuPbnqdF%2F4621bzCUzv0xEm4Fv7g6U5siHib%2FN99girBlMS2b2WNmnmA%2FdfEgO8HWVZ6feH743y7Rcm%2FVSCY%2BMCsuSR3AjmwkMTfX8G5x1dk0K9%2F8VcY0DRPGRUpj0g2epK4ZJGBYhncKAh%2FtIz9FJGdtRUgbZ3EJRbM9x0nWeTNK9FTQsd4Ab4Djy2mnt46siPkcelRXfcTqRMKFV6Tr4ferV14GMse8Ml6hquGlpxstj9BNeyWTvoZrM79TFopg7%2BOZpG5hdoVO5zc0z8WJ2oZvMZp8K%2FUt%2F8BZSXR4bU79Oaq2gVvvDdGmeALFr7mBo2SrEqLVM8gfvsd9NcpzzOtWpZhRIqKJ6olCgEhYNWmTxXACLYM9NPbax%2BkgsIwjYnexAY6pgGfjJkh66yJzc7ZXrj8a0uwj37MyFOmHUMipE2b7GbysXy8efj%2BmscLfH8wKzztOQok6rklx1DeK2xp%2F0FIpna570m954B%2B00ZXfcJWajqYMtHPUwTtYLGK6J0OzjQWu1s7eS9tg%2FM%2FJ%2F22ZuUGnBzPCTEsBDkhbNKd%2Bq1yCz9BH8l%2BRaokQqonlHMxDFXTRXxzJDrkLyIm8jM5vHC8%2Binq06NVslRq&X-Amz-Signature=b1a2a6de3eaf704d1dc9cd5427c40b4b466f4f9391db7ef9c43638faf4bb40f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZOXHXI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb1Usn9zWYjBctydEn9ZiOzHNeaXb%2FPX7Rqw6JwX2ScAiABV29fALpaSwFbVyx0HsHqVovOTYuxvnElJbjM94MoMiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpkN60Dxb1TMoUCVWKtwDc7F2GNgQPOxSCHWAbNM53cJA5IQOmIFTlMS4KMJIxDCEKuzOYQYLOaFZFfVTJrJUvG7jrYZoafuzqD%2FSr5iR4efAOTm%2BrURlaeRX07%2Bapl2i1k2yhW3RIMYW7pVjsTlEwVjRqSqt1RP38KiBUQsVsMr1LfttF31opPQogd5ZvuZ5aVrH5b5V585QsLM08p2tDeANpxQi7J2h%2F5YCyaUb2Ke%2F3%2BgjcdA%2Fl%2Fkj%2B84b6rX%2F75iXr5OmARKFcbzBZIpGP7%2BNIOlmRId0aiY7DzvGcR%2FQ7XyZgb6mAwlwKlzS68Y6js%2BfXy9FrQv%2FLlygy3OTtu8VrppF0m482FophWnYGiUPjbskmcWzBKd7Mh6tXM1YuWYLUxsvaUvo7%2FNkNISWVmP3QZcIOniGo5JtrNKboIW7%2BOryXANZjcO0y1XijEoBwjSJoJednopSm7hHSTK4sN%2BIZdUGOFrFJuBA4%2F4JPPquN3XvxjaBsyain6wyCk0H%2BAAHgIF9C60PgRSB3J6ba%2F0izSLqVo%2FVQ9haZWJEEe6EFSd6SGPDguAIz4xQ5uhGIo4%2Bx7nU0W1toAvDJTrs3YaN7OODlBrmfza46rBOseOtASi%2F2pjZ33kdIxs0xJ27hJeEWTBWFaT2N1ww%2FofexAY6pgGZ%2BYOv%2BdMnqibMCNgM0Jb3W4kdnCE0MfBvxhv2jtdvEO6VJE%2FiPsjtjSjsQFautkIvAAj%2Bm3UM%2FH3L6KCNXTPYqFc66i3xXycDpp1hVJzmWdPcF%2Bfzjmp6xGUO3sEFN8SqoHardcrIIN6P5R2xTTtVyCfSG5GWhUjRpwFK46BSDEycjG2bnCIMC2Nwj1R2wt4AI7ZnmcmFDatVgoYE5cVvN%2FOA%2BYN7&X-Amz-Signature=00968f666e6d30b1d572d88f2d780f911a36af0d832486ece1b6112b60418802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=8de1047e7bfb16f2a7b9420c709d152c1c54d3c6576abcb154cbf70a1b47899b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULPMX2ZQ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwwUYS%2B3lVs2jvN46ltVwy5xmZIzYGvfZnkfbRduKSlgIgKHR0Fnu5rd55UGpvk8V9m0b1VsV3cItdDJABLeoNvqIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMYsBFFWuv%2FkUBeLSrcA0zJim%2FCQr2Vb%2FdW%2BqAZKxnWejdjqM0FITWX2JMdnBPsE7go%2BgeXjEeqR%2BYdU8d4XVPIqC8boLOPVomFES%2F1xg6t%2Bt47kaipe13MtfoCCnP6qGm3%2FE9HqqHgwqpulyF7d9Y1UiY8jMq4KzabzYqW2kYZ6OYu%2FpnkHe9hU2MzTiIjFpCDuNg5muJOaZhW3xI0SNOtAsIVBpiOTMXYtxUQfXJ8EboQA516LgYDSWcDh9Ny7cELdvM6yp%2FFSa3VyxazZ%2FArVKWxwx0PuU1CKIWFn3IBohC6s403XOi6DyBn7WG0DXhLT2SI0uylPp9CeFU%2FJoxWVdPxowcELq8nPzuOq6efoHLPg0bFFkf1Xy8%2F8VRAfQIeip9AUF2pdudZwKogkvZWRc5y3McbF6MfjRtRqM%2FL2Z%2BTLYVRbLgklvbJXZIzwhXmsrIfNxpxoNopHY%2BwkTx00xQxswWFZnGRFcoOuyjCxyj4p9MhEBf7aFwHJQ%2BCTr%2FCVE8gEdgbee3UH7gEvBDIzT98Y9bJ4M%2BTXl8SMfNgCEAGLl0itX%2BSja2ifprd4SSnfXKxpoxMRG%2BPggdwQoQPP1OJhO5UBpcdCMdzkHznOI008P4X5JfxxwqkwagA4OrNG54urxdiJlrbMI6L3sQGOqUBoHjMbBvXCnwHTfw172h4xvewxKa%2FgjcLjDhmta%2B2oS%2FHk19eySBQO2Kfgg47FS9uMKbpoh8LM0%2FKAY3XNPRhkGUs4uG4BS9VeNMCtuA5douXKOdgBlw7bZt3vBO74FQMwgI8pUT8m7rahQSX6f4jpHvLZvQOROEIsrDLgmffYErO50vN1Nys9yIjMUfcFaMcx5WcdatbiYefLf%2B%2B96WnQSuOVsQd&X-Amz-Signature=5351cb1d57ed689f330e911410bdd31a7fb2f6de44cbfa6317f7ee01122f6185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=f96d133d7b5a7967818f1750dcbbeff842270a9bcfa05f017d78498be2981b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=4e1bf02dfc902e333bc2b2ed0b59d89bc808ef8d6dc7b23dd0d8834580abda10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=258d2c9fa02bc67042447e7719b4c1300c944cbeb6ab987df6d4bc3248711099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=cbb4372b2675aed2eec1feb4dee214d051fb3fc61c159e2374c7410de065055b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=1725688bf218c16b208a78ec06daf5f9ac639222f5235b5a37be7fa671c09556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=c8c7f5b9b7d3b5d49ec696d710fecf756c9844d6fd9f8f5212893327a28eca86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=d687a21d4a1f88b17a7fd529f6d2868c7894c45dcf7aa2c0c28651f89cd5dd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=52e9eb9abb2d66028e6480d10ed6e6858da62094fe92306989b474b1cb4bf185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=ab700375ca394b924f639f90443f98e22c019453b2960bcf2f3612b12567140b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWZCQ4QZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9R2r9ZlHkifqGnDDfhDUzCHelW6ca3l7c9RwuPMPJAgIgdCIC0ZJaFjvT7l7Jxy3lqw%2FSrFYocPmEO7FbehH8sfEqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooFgsezSMy6%2F1L1ircA%2BwxBgn0J%2Fr65Wg0k4ENWF7bCE%2Fo13jVqH2iCSvd0PFuMrWKyWpUUK6c%2F3rBJYwC4Cfcw7OkjGX9isJomgDIrmvsw5TmBERIr7ZPRrrQbuPGJqlVsr2SWkq6SxLQ7YbY7V4jwWarYH4R202Bn9rFsFWUzqUHeA2nHRhnzTzRnlmvjuaBKuyHrdS93qgw4%2B1pBKzhI0uhKP9OLMWZhyRGOwM3nG%2Bo2qNqko5l8etWNeNAL2XD8xt0oF0jCNZoxhtiPbPCLnG7YWNNWlFMRlo%2FAg8FEWn9DINJIvtpp0d2hbppLpkrruEnPsxipQ%2BPFDsGzKxpb7BpLeVJsdmyxfWE63A12KlXLWuYw5fiII5xEE5wNPbVoTzKnmZnna%2BLmODZyedpANLl5jiOlEPvsMetwZZZ2WiYLOJY75%2B%2BOTiBSlGcNOlmV2vyCCcAAnS11a1P%2B%2Ft%2FPFRadd%2FFtV8biI7yEKLmcQwmd0fZJxCf%2BZJi2q6yUy6egt44wBSM8wdl%2FgooUKglu%2BWBB3ztyhMuz5ywIwJfLU2WVuMELaFI2iPfxm9xcwns2nUGl9%2B8ff0Y9H6nSe8lXV5%2Bl%2BTEAK3um0howZbGCkwp7udDZ5I0Pe%2FQnW7I%2F%2BypqJT3jdO12ZIWMLCK3sQGOqUBlZTt9YuYYX4lJJf%2BcHVndR2MosEkBnAaTt1E6r1b5N03nsIoXRRxg4WCuCor7FiM0bDLOVcsfZbfjC%2Fms%2FhIz3AHUjoahAlPkfWmYbeVf2nvmSFEB31WDGfV0IL%2FvF8lYULorFCuUhcdyntftJRkW4GkkFvsWd6aoXfobMiTetjom9eQrYAQERD%2BDcTiFaHA6jtRiyB8Ng779tZlAo5wjB4LrR4X&X-Amz-Signature=69a0ddf9edfea989aa6db1e9e748336461c07173273ca471c13ea2978b3cb4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
