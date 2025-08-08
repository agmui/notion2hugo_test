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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=a458d38a21fbc85246ef8a0a43b1cbdcc920eff289241cf6a39e61f2891c322c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=6c3f0147c87ce86e4f17995b01cb02bd393c2ce77c16e1421e1a8024995207e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=18977ddf07e3e7cc52729bd0b51a01c250603d3a4306379ad6aee0e28036e490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=b3d24c04020437604c7c82dbde3f578693be9aecb1014335e0c8e82ac42bfb11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=8fb6f258ccf0f4d3414149e79d5edaff939279c02783a10fd88072980fc8b573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=187253f6b405419c54ccedab8c6de6e6ea09d932d4f253229675fe9bb832378d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=687bbd2b59a184d2c39447020fd47d9ecbfe281c4a309b4cc5381250881d90e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=49fce746b543832f321d5ccbdfc7b20d131778a69c2aea12687bec153fd9a3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=f5cd66274e83e9020af9841d724c9d08033fe20fc44974d92365d5593a7577ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=2fa729679770d7ed400f9606e72f6c5dc9fe87a9c190a33f47d4062873091a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQXDQPN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDNzx%2FiM1cANDS5Zs3%2Fs7d2T0OC3ubYuqVA0eBIFVSRSgIhAIJmtUND9XcJTwj1gP74oMSryhF3EE8lmxPiY4py%2FyLgKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz6tZOH0CMvERWRuYq3APm6%2FoPEcywAG1w%2F6pgqEgqfpt3tphCbiBp9hepvh1z%2Bct37oKDoURBw155jyukpif%2FbZYadq2SbEqKoPYwzuWUAwsNr0wOX6TvwO8dXLXBInlHAKoTxW%2FfvF8%2FYrwr8r2GW7%2BfKELsTzcf4L%2Fz1PrlkJibR1tVGlwyI%2B6FzzRGhEfoEw50znHKrQwjwimWOOvKjIPIlRtITUs9UYduQxsHSfgH85XShaJEwNVXvhul4y8TCDaP%2FeibSV1%2BX8DP8n7iV8fuNmcx%2BjCorQtvImAkTiWALFnCr4vjwoPI9kpMPD37LczhwquRqHbSM6zGYIXRIfnuXcdbJICicysenoc5WWaWMV%2FowEnUYIhs3Nq0NN5jGVMU4lL8eV1MzKYt%2B%2BYgaGEEJR5Xm4uiZvrXjf4EMMxIKQPxDDRjXjsNfi4K4i7l60NYpH15m3SNRz9%2FoylnXfCCCjHutLYZ%2BzXRR2vXj2A3i79%2BSO9r%2FaKSL6vKU5a7hbyATCTPrB6EfL%2BaM%2Fm%2B7EJxEH84D7Yu%2FZONOMLt3bWvBZ1UVj4jfA67fE2DPcjhPJ1fbvK1aXuXlzbuZwwkBg63ClK2TK6QFbKx4Dfse%2BKQ2yZrnmaqEy1HQPAqZwtyyTUkXS20hSFbojDV6tjEBjqkASTWXNcpqmb%2BIOfFz7%2BTzGK%2Fkg%2F%2FP%2FQkj9Xqo0X4C9T3GZV5Zf4NZygV8%2BUobf8ZfYQXI3uC2mJtW8bdnfc2Jx2jBYsq2GUzvSQ4ogcvji%2FSHT1tArjOPQoLSk2WQng2ZMTtlQ06dGFItVsV5Sn3ChXb37fRtmMSRq%2Bc0iBGhoTqbZwATjOWCR9F4Ptn3%2Fq87JGKgEBVV4%2BvO2q7WACMd0p4o6%2Ba&X-Amz-Signature=bf58d05b631504f84b91db7b2da23a521fc0a68dec8c0f164c82a9e9a3f6ab4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V52RXOWI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC2pyc6T2ua%2BegZ1ScQVyXfXcn8i%2BA%2BB1cnD2btcR%2Bj%2BQIhAPioF7dXgFXTaw%2Fyv6aCvlmq%2BwXdUR%2FbJNcPPT%2BsKIibKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvmOqGoIqxWabg0d8q3APPu%2BuPZunaoxzvJUZAsSVH66TBuKz698tc7QxNxI5P%2B7JNUc%2BmSwR%2B5VobkVu64QJkwYmWtkpYLTXDQeenxaHkXUgSZq8seJcDySLZowsu4JNb9eZ3pXIy6dPaj5M%2Bw3ATmqXLPwZujApfYDuZA7rHRpKk3IfIZ4Fs3sMlhAdx%2FWXWW4W87Xz1iWQoLnV7uw3yFCdgj0s1Uul7dAdsPmTT6xFyIhxHtOJhxopr87mq9g9n%2BgAYddqM4K35FdIqGXObp%2Fg0wQSjpI0ZxHCTg%2Bh5XXcAy8FrfGYnjfVMKn0tRzGbtUaQxoOJikzmYook5lSHmIrkFIN3mGv7pGOrAcLL%2Fg9MzMZq5cvAwHw3TtVE%2F257fyTvSCbfx5pbhunQzqB8GSugmCuOXYD6RbhmTuellkov%2FIRfO%2FIDriw82UpmNHIFWNC65y5lLj8xLPzIO93Ak7JndeGcqcAdMDoCBf5swmxa1nbWMuC57l3GFDg2%2FJRDnaGRNk1g0mKnItQxcfDj7S010lUo1d7%2FsjIuo9WA6v6Q47f4zSiJ2QoRzF02V7UWH2mfl%2FcpQk1dLx3HSVj%2BgI3vFb761QADcy95wLGU3OIofMirHdxKoppGVB7GL7EmhHhJ4tiFGErINzDk6tjEBjqkASh%2FzdmEgQpcGE8tB8ZclMvch2%2F6uOboc4LtnX1SEuHLlSI295PA%2FXPAqadyXplrwDIObeHKtIRXz1PsNsQC0ZETKpCeqmPDzZoUAi4spu4NKD9mPjZBYr7IQ7qTnRXE274aXoPCXjBWl%2FjUnRSUsON8GJEY6gQkvL8zypYNF3wMnmLXhweZz8%2F2JXGtD%2FWym6DaeV9RvQ%2FJ8Gp4cpFGBi7uKKKj&X-Amz-Signature=7aac8746f051541abd79cd9722da991770f2cc6e05702820040294111bc412c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ37FMAQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIAK6NAaU7zJtIFi1O7dv%2Br4gecQ4iSqw6XuQSJ53MC7kAiEA1PuLTyeBZs0beb4%2FLU3K2YMu6pd%2FPNVT3YcDlkfrGrEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfCtEZD41OL5WWAPyrcA5cHxL6aruejG9pf5j6%2FxrunAPVg2kWljNfJ6pUQg%2F0HdKMMQ%2By1m6ndSdMmlgK6FKKwSMNH%2FYkKXMWAfLECcZDNT8b1TOBz%2B8tLa1r7KO9C7BizAA%2BVv%2F98DNLlWDjzgwkuU5R6VliLxj2wvaqx9gfj%2FMULq7F5TsKri7u9Y0kuQwSAWAp7Pt2%2F%2BczfT1ZuVxT1Q9DWW96v48rywDDuqVjgInw0ud2tk7UeIllzif2tQzv2MELZn0Q9S5KHe56%2B8pTohfW1wUl01qMG5a0lxCMlwd5eXsYDZ9cf99cBS9f%2BsvaoKq%2BuRDzziD9zGLZbPqST0A4bkWxv8XCzDd2%2F6x3uePQnR%2FnOEuc%2F7KWxqEV6YHOaUXtAWsuV9kbPdO88hzVerSotWjo4%2FMnkRvGISVKaodH2vAz4g9sgTZtuzjtRMo7tLTSkKLydBEsh4xZbwNr8OjpxWyFfHtfUu3vEFvdbkktT33A4Ypy60IUxVTVFCFO7CQq%2B3lAf7EqlMM13%2FqwPWgqKJtt26uGBklJ86qsEfNtSiYZgF6sXWa4YfKrx3gLvLPk36CjkStOFVMG4SQgIxpzlKwOb74I2bAfTAAKTCukQKKsxeC0RdlGHnAw8LSYpEPw239f%2FaXuVMOXq2MQGOqUBrXxa4F7hWR7OWmzsSl8vSCHY7YsVOJ4BnagmJLaOBmIFNU0WJeE8t9U9CDQht5TtWoSgVueedVxPpOVANLIdqWkpw%2BPN7sU64BLnyKus9nHWwszsshDlwkrIOvTxxUD%2FqgJO2t5ef%2BKnIaZrQ%2FTF8tJs%2BFH48K8uKj%2F7MnJwDG4XlnuWmjMAS2Elt%2FlnnDS4FDjDadIMPMSQdtNk09mf%2BK66%2FFwx&X-Amz-Signature=840c9fb1ddfab15b64ee10d6043c1b4218e66e929a8581f275e1c9b5db4a808a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=afdbf8a06f6ebe4abee7f9be8afe5f7746c2997f481b38a9e1f23a52e9cdeeb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H3DQRES%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIApbI8raJ8VUfUlwnz8L6%2F4JWHp8OpOneBarMnVWQEaPAiEA9HiVRrpibASo3lrHxPl%2FESLKM5rH%2BpknOU6M5P9qoVoqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFo%2FSUCDa%2BgCOSy7ircAwSm1iw0TtWeB2qK2VrG5dIZGCA%2FidhCqv2Tek680Z%2B2VzlFlxmMrGCe%2B9N3Wdw5vmtjMyx9oCl3m0LDqu5qmc1A%2FBXsN3cAuBRMEjUeCicSnSokyWK21yRNIUfWUvhCutUjlRzL%2FmVKQjI8sJSTxEQR%2BzRRK5QFjWo7INLzPj9TIlwTP2Ltjc5MsejaXF%2ForAYUh%2Ftj%2BfKjUGcdp4JPlWl1BwzTTs9PW9iXlSnBdKcfet1N9BpH4pIuHGMKbh8JcEMkSdTtOR8ZQS39bJeX4cg0kQhT4kd%2FjAQ35Usyk3wthsTvI0u%2B9JQJ67u4URGIOArT%2BIF6YyI%2F92%2FOTuugwVE7pQvrhnIJoxLlaACCFlM2jkOlEmfOSc8I7FqR%2FEWE7QHqQfhriZHzxv6kqew7z3Z3mP74Kh1cBiu5jxZKl3lhfYYJw8wpJUvCkm7gH523TStpApu%2FJSsa%2BVg965etzVcXPyX9ISU4Pvt0csMPp9nvJRHcOvlE0IBOE8KtT%2F%2BI0DJqJnNTWDg1r0NP3BOggOjsNGlEUMjC1GrIyK8Lzes4t9QGvq7Gu1MgdtlH4u%2Fn4PiAHI0SGe%2FF4N%2FNoKeG4RG74W%2Bq%2Fr8s8J%2FY6O0s6T8i7yfcltGYxIqqAFfaMP7q2MQGOqUBwra0qlRsULnONr2oTtjVlMhLVhfZAfII%2F4PNeneJHXYpnm6UXH6hOVgWG2JLYHSgqocawPQ89d97Ze0lpE%2BYrM9YhugUuf1tKqPoob0LmfJfTgcwfkekPNng9pCrUEYLS9nl9Wzmiq%2BvLvMDeGPEbgRTTfDuLVX2aiW3D%2FPEtbjQOqRRspIlombyUY3qfzb8v6SSdgYsk6zA3NMb%2BrURG3WcjLvl&X-Amz-Signature=7cd4660dad4a7239e1cae9788d76186e4c7fb329b5a2bf49611b0506a313865a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=19cb83e8483a119abb4f54aa19f19411966066e68da96592070545cffe63b6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672FXHFQM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEp2Qe74R6WnveJDn91DVM5Fn7fU0yV6%2Bz%2B9szfa26inAiA9fVIq33mldqMHjEKvhh3R2P4Kde7g%2BHQFO%2BSZyp4DRyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2FZDH9Cxed6aS4YwKtwDjb7swVd80sJ2CQe4WaiXIxr88Lx59S22zujWOE3%2BDbIE5GsBI1joMxs4cacq39IVmB%2BsLwpP3wMgwVrVcl13gejV1agrWinI26L%2BnhSs%2Fw5nOc7dfq5r5w6FpW%2FCn9Xa9g8EEOP%2FD%2F9SxUZA3MlXb3Bth26n6HN7%2FTHVwRDz%2FKRU2TMAcuYhNJ1wECuxO4cpSbMAW24%2FOMKeehnDvnXYhWWMzf7ZqDd2ywYaEAvLVOKBXVYVPIodTCcl0AJanE2FPnaH9me%2FTN%2Bdopv0vtjEdDnfFT0ZpZyLsXWwBEuTM9EYUCHrj5oFHwzMWLmCrp6C2zJNHE4wAcsDKWTqre6%2Fkk05sr4%2FUocqwJHbvLydL3C4ikwf4kkTm6H4OOpWj93Nqu8JAteJ3eh4cplKd3CWSJ6Izd1nCEaRzSkyWlo7f8ze12Y14Ti1YiHYoRFDaYxQmpFGXTMa6HTGfw7QioBklpgeXvXwBKBuCvgyHvknVqxDen%2FWlM3lfXZjTwt5Hi7l8X%2Bn495Mj%2BncZoeAvJxXOrEamkHhRvfTFKj21zHK20tHEA8HzrbY6z6YNFJLL16sSIwj3fkKOzPMj30Y6WJK20jv6%2B1qIaefXtM8B3x9G8FlSizEcRa8TDBGhV8w7OrYxAY6pgGk38AysecMHtUi7mbCJuNAayg15zxr3bJ1LSyTRr6ArHPNuyQLf%2F6jnIHru6tA9elt%2FbIqLcHF%2BMJK6iwP4Otcb5EezAdrKleotBTkaRZsA2nwdnU06sWUZTih%2BJ0R8Q%2BfPT3e3AesXfTsNfaa5IF4p1QtYu5saPexwIqXTulvLZZ%2BKrukD7q4V2BxJ2oBOl6qhP6cXwm2DdFwGbY90J4yFvIlCBib&X-Amz-Signature=7417c8c5fd72065bbd9e0156470d65760e1ce17a506c7d7ae0807532558dc7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=fec85f3f5a91318beecce159e2729f26ca585d936022d24ae5b0f3da144400c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URD6J46K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCKoaaNJsEcTIK%2B1l0riKM9vLHMJDWqRQvX9u%2FIYwLxmQIhALVIvsbfaILdl0QnwYsF7kD4kJLIg6%2F9ZkN2UPUJ6FyCKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYh3W0aO3zfdCwoWIq3ANyr2PoWgBqqwi%2BiKZ%2B5bKT71juKxHKLFhfOzlC8omV8LimP%2BnixFJaCvX7lwl%2FBI4TQLp%2BfPEKs7XK%2B6MKBK80zBX%2BLAiW2ZXGAiX9gAAUNRLH353Hhk1JIUSUEmUj%2FgRPnUx9FygsZbZfkjtr6bdNGmZajJMbwJi0yTTS3RdLDYj4V4MU%2FmWUOOwCEd1%2F56EZ6tTw%2Bf8ob0uD58twU9j7PR7QU5qXn7v6GS287bme2NLj%2FaCdMZCTlggC9ZmjaI%2B%2FdP%2B9HUScwlnUzsfDfHTdY1fCPtNLB8n9KAlyMhjMhUDswatm5I1VaCUYTOLXMW3lIebWabNu0UNTtcFDmT4xR3yCRnMaQqAvbee6LrnfD8Xxicy7Y3jfv8F4A5o7hFlV42RiXsRwO8M2tylclWoG%2FgFD53SvTvYFZCCViPht0Sr7Brgf0NVFbp2HdiMBYCVDlYz80ZgU9F5ReMS757Q6KAS26dPw8E%2BBiMd9uJ7%2BAFmUbPqkgKR%2Fp3E5uPhlsytFbm9puroJM06qDKOXgCcHCKd2YshNkn8WASuzk9dDFMvMfmNIzPTDF86get%2Bq3%2FYOSgPYSwA2SZ1BqjF3ujUcZXFKHJbloBNqPJusXtY6XXvV8CUbgtxJMp6DLTD26tjEBjqkAQobeBwfE3VxU3OZGPINKhzbQmaVEU0cIsKLV9ZK5r3UDC9wihYIFCmKCcJuz8gBzhe1XNMXc43CvrukfChMlffwmospx7WHayMOpG1fEAsNW5kgmTzaiFYSRAztKJoVJyYjB%2FSRQB8R5AQQI3NYQi4zaJYCprq%2BN%2FulfKuAYIh8abqcoSZSa2ghUTGkYcBEn2p1upjw6dOvZX8mrsaEXfwKfDxR&X-Amz-Signature=780e768e23a671bda8fe3081a56171f5dd865e55238e7427f68642291835a6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=9f31d0a019f2c8b613c44ae4123c73b1a6b5775770b3aff391bc47e13eac5116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHYQCTNN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHrzV7L%2BLqnr4B1ze3vo6x6yJFMQdHN11%2BFrxS5YEnF3AiBzKWM46xsz1Gh0QhMoh0e%2FPDPn2nqllgME6pEKwYKfpyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5zatU93BPRSjYZjlKtwDEfENQwE1Zvwa0lDuCh6%2Bi3UvR7embaKY9IHMDGa28PpspTUP68Y6V5nZgVRBs%2BEyeb6ERa6W4MfhmdRKKRhfg8OdQS%2BFNmySU8ASDOBCK9ooD%2FAOR9KystumRzKb7S%2F4XKh9sVpUErFBoTwkp7vl6XbeHzzxHeNLv5AYa7CeqD8AswSRzsPRIAhRjaJyN0AJK1Gg0iMJRK86KSBJt8d0VS59CGKyFcaZPYRcOm%2FDwIiJQoyfwUSBfvYhVQcGKsi47xQ5B7FiYwrU%2FrIDacPB%2FqiOjHxoCSETCFHeqD%2BuV2teuATlGu7vykVsnZbSZZphOIXIfNi8d4FucWt7FHW82DOAzU%2B%2BZZHOZLv%2BHGQMz6MTR9VURDW59NitdVFtMdNJMSvecv%2FnO1hd%2F19zlRZv5YbJvoa8pv6zKyka8CmBOb7yYmgXXFVvbDkfaUbWbvFWXcGjtKHxpv7KhxLSwjG7mLNnN2fPSoOnHCUQAJ7SdDzYktp6eOBWQjcohTjZYDmxxgZwxZjqPFOzUjCupTAFocK8BVkdtP41MZmMSH2tAixxielDX7GzZf1OssscIjVPYRqVnJw7zjeYL2l3GZo9chU8zKSssE6mxGXO01HJsUk8ccwk73GP5LRNjsMw1erYxAY6pgHOfYLGJeKzfZKwiqsgvwDikHHRqaXtJwacCxbwZnENzcjVEfZlWM5RAcv0Aq83Je2mFCg4B%2FEx%2B%2B%2BxpJtc4vgYAerQ10lQ9qmKULnK6rtbazJ8QXMTaQtgSAmB7l8PbOYRf4mUW%2Fkrj6fvAutfqCfLocT5wHyK0%2BlaAvrSkit26TBTC4hyPxAlHIa4aOwVeRP7khztT%2Bft3xO7SYHgNMXpB9%2B04aLp&X-Amz-Signature=1aa61bdd8fdb3e1115ec5d2c8d0b6a39090ab9da4ea5ebfe28948d2839f956a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5OHGBR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC9Ej7%2BtCScxWxgHqtID6p5EOWDpx1A59gjzIwTZvn4WAIgFX20XGXvj94eHHeQ%2BUHass6wQlRCC7dRN05f0cmn%2B7QqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrdsFqEuJEV6i45hCrcA3tBcEObgUrMASh752Oy96v3DkYnBLvNZ7phf6s7sNAt89%2BELV5GIHiE1YP4qzGbdMvqdSjcwObHhJwdpgKtRepGZCenUq95WMQ8VX5C%2FEwE0tkK3P%2Fz1rrAaJ%2FZebLArs0947C7auSKVpeyKQnHbHbcp2O4CfwJ5pAm2Ntuf3s7YY0ziozUJWNt58TtwjXPLlzE5pPqZ3CXpIvtBz7ICeJeY8zPPZtGSgrnPTewoUYF8U%2B5jwgvd1elPA6yrVay91v%2B7T7XV78cHxkFkKasCoflHIOgTBtkEsQCsOeI%2F5XFWtonrU9xgJl6hCEckyJYpBnHFmZCZBaLsV78yPUn729OQbGJvVM1AXvsL%2FpbOgAeMAA4%2B%2BSsK6b77OsTrtEreOITlBmsZNSwlrbyprATqAMBEZ7NucdAfWkW7jqzF2%2BNr6vzWW0WqrNLOcW7dMB4ezO7uLwbZQlsZjwkINjoN3sJH84M%2FDImcxZW%2BSuB8UeIu0TitekIqHnaK0IcTkNAPQPVmmAqI9KWsZMiK0AvTnxrJB%2BiwnzJ4pY6cw8QSOHSXViBDlqlqvADX8GNqRqaVhgMi1djSSCsOj9%2BRV1ptxqkXh%2FRhTGD8j6GyEQylQajeQqmuGTAT3zOA3ZuMN7q2MQGOqUBuymaqEjpTOv%2Fmkc7Ulfj7GWIeWHoOWnGXp1CTWS77SzErxS5lBSy4Ff9Ohe6lIqpiuf2JWxuMc77afb1AurGObOKM2IAt7ymTOkYSdLzDGksl9nKvWb%2BMYnzRES%2B5KBwtF%2FgxjhC%2F58iJEVmp5I3FkrYCL6xqY5O6kXsapZjA5dv%2Fp9h7HEyNt%2FrtSOFFVONF8%2BDuyhSXOKbzBUXFjxt88rsq1gQ&X-Amz-Signature=14ca60107a127f7faa12ca3ad6b4747bb819d9f079ea902001710bfc59e8c6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S5JHQFS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDDBhRdKaTTg2C20Zfa3lmvP75wC2ivS1mHJIEVBDeHzQIhALb2veU79UbnPVXpiRxAxhn2CpxsXloBxuuuCZbwrOU0KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2VewcQ6HUi4p3IAQq3AP35sulSWTMDMgq0PPWOodsnO3JLRw%2FvcdAu%2FxpBBD2FwhAWDmX2LYa%2B7EJrypqeSpjDKhzeI55ovNrSFaJL3OkSJx9390lmWS8nA0%2BGm%2B%2FbCgg7ZI0muI0TpOxMVtWbNjv97%2F5NDzhjcaTs9UeLj8M1OzSg5Ph%2FVQLkkblYP%2FSAKTFQFVnw6zlGd4CL%2FCpGt6CyBJ746bj8po8Q8bkvddD9e5FP9BJfzl%2FSM6HIik8YKkyM6NOJxkgLtypAE%2BLoJbbAM%2B9zv570hkdiyUjlBdP9w6DMI0Iy1II%2FwemrbNRk6apOY6%2F63BA7nyHFBj0ih409%2BjwgUtwqJIu4M9wOA9CR0NaTuqLpOqUlOqyDEVKgoFTEDkh6kPdzJ1y7GyoXMrV%2FewHC6rzRYYwuTrBMct8ARdsZlEd%2Bv5tA%2FEOXjXMhMTmu9MvpdHseueh1SQB%2BsG1%2FFBWAH4hvmZ6aAX3P7oQ2j49krcSH24d1012Ax37hEO%2FwdoAvsyXi%2F7zcRtIj%2FK2hfbcK%2BUqYwWsUsnsT%2B7m14Ns2sFMcxi0nkw80wG1ObShX9sA%2FctlPFe6gAjtpHFjhjJe0mxYCw%2Fy2YxCEIpVxsbjbO1VyHxpeyhxCgYjW9bX5qFc0m0Eo3p4PjCk69jEBjqkAdqR9njR%2FrAVq0Lhj0FAB9zS0kPlw%2BKErEmMgulnjl43kkS6fDP%2F%2BGcq%2BUenF03By2%2F7jMg3ai3ONtRz9L3lIcJDGLj7fSaGahw4ftDeFtU%2B6yRDthLZxrwwbb21ERoIYXxukJnnrCI5iG4wztzUVc0pFQMue3EPsrgEYd%2BjSsYwVMlmq8YBia5IcYIhOdGPxaGPvI7DIqFvh94ocAJrbnKXQfip&X-Amz-Signature=5261100ecf8135e029ff3346f2c509e8a44336b2f0a2dd20ce8a7581bbf090ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW3L5JDD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEy2pEGJOJrwP%2BcXB0sargIEbIYCMbjndzb9krRaZdlQAiBTnVuKQuxmQFrWriPwYO%2F9igznlXu5ZGZArcW0LfMbkCqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp9uIvAy2IiftpiWXKtwDTQmcQOq%2B94mg6daZdYxX9VRc0z8kIp32PLdoAksdro4z43xTRnsJ%2FoHolgkNTOce25FcqkU8DKUXZZv9BKhCl33e0N666tXlOZACqkytLDGpXL6kTr2lcVwf8P%2FFPPF%2Bwtwfk%2BUjaF4LQW33BvRuG75aWWt7w2vk8MY3Er6U43UbphZS5vAUORaplpc1oBavOBCkgf9ReTsbSAGjqb%2FGkZwu2BN9%2FeY1AP%2FT89qKhCDLeSCoJGwBrF9FrfH2dXUEeAZz7BxYa8WzPBe%2F8RojDubWdw%2BwkUuCmXZkwIMX9fFH%2BqKT9zaF9dejWv4ViLvlYtIKOZJYts8mb1vl%2F57xLHScB7a9gCZ7HlWnt7g6R%2Fuc6dCgDzKobYQ8f09YC6jAGqnTD26vt7o9Oky1RPCEUv1sOKY7tq0VZxJ1YD5PyCkPi84E2T38Tqel2H73pg%2B%2BtfFIh6OSxDyLh1ksJalpD1zkSxAYUqwvHfrzHT0P5iyYSFKPdqP8ztS45TexXaqixC5YI0sSP4rQ0CDs4ygOY4LHzhcCBx4CfM0C%2FKyUQegNfG1Jzm%2FpvVAnN%2FYoHk9KK8ONQ0b9xxY%2BHM2sin70SlmEvGS7n9sNkgJIWZwXijJL2A2saPS49AiWzcwwzOrYxAY6pgGvxZt%2FSVo1tL6nrlZtvALvUIrPE1bzt1dRkYJ2JEicWVsHBw%2BZXOWLh3vJiMvEDOsXmcWa%2BVFHln6iljRvHoket2XcFWRnyoYdy%2Bv4uvqxEbcsBdfKrSQ%2BNEtlShYBjjDlUwI0kxRrRxWvP7lJMVuwM3JfBTfXN0T3Agekn0NDjvUJ6I08%2FKixdpqfcj%2F3Oa1OCMeE56djJpgy9md6WrZDLTo61Wk%2B&X-Amz-Signature=313c2bda0738e72307d001f83cbd2aceaae8f1ac0947c45d627d9bb84f881781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CF4YHJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDwBV5rXKsD2G0hreQ3HykHHTT9lUCIDg7WxlWe07gC5wIgT9eZgmPV7GeWDw3Xh6fYnwkPtM0VvgUr0tf6vyePRaYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL45HriJU%2FPUcIAySrcA79THfkw0IVo9wLvlBN8hQT2KeJsNaJlblBVsW2UPf1IPJX5urqPSDuxbe8ip%2Fse9CwSWRevYs1GeU7BqdwvDa81kyDpUHUhvwwT59DxFvvhdydn4x8xUIAjxR5RngHCQQmqyjx9Qfn8vFIhA58%2FZeZwOcshWcD3JCTASYy2ND0hbEK%2B%2Bqna3DC%2BAvgd2Xj8hwyV%2FBFq8aUEHVng1XvVzprxdo0DaKuSoYEM7jstp1lD3Z1g9%2FduC7ZDxleSh2jK3xL7HaHnkBnmBod%2ButHU9OqkXD91dXL1PiIrh8H2c1R6SWmVNfqa4vKPBufboMSfEoX6DIWgH%2B8bUhhQ5L4AppFZP4qmc3%2B89%2B3J70jaz%2FJF49O2WVLLrId3VOdWyRnWBw7GiE59Ut%2FjOEcEpPQtVY1qfc4kn289ffzcjv1KhKBogmvaNoxSVQE2OoWPSWCvt%2FIqg6jQzdIIWy1l3LQ8S2ZXn4p57tSSKkdbbVeE8f%2BwEemxiKwWkXFgyk9XhSnISL6KKUdg1SHAph%2BS%2FRgVYsm5A2VVsKlvUhnGxqWTT%2FOTo2x8RzKzP2%2BgVYaM6lNEqtMExE3gL8Um%2FPQW%2BX%2Fw%2FiwebslRL5puzIUqTovwfamSYQQl%2F2%2BcPisU4AGRMMLq2MQGOqUBLDGOEcZ9u0RsxjtXLkc35pQk56tYetpu%2FaDpseDShVnA6Wt3eenS6hCcl4dLHe1dkaJBKqFfWhx7zHRnDCRf6Q5bGJQGFG%2BxkNIEJhi8wZZxmPmW4UVNNNQQti8KaDJ5KUfnVGCVt8lfigJX0YXTD3P3AuWsVtQ04OjiW%2FTbqLY4zVgWixpJVNlx3hlw4VO9QiiWE%2BjmnWFKxQum%2BJq08SY1oTrs&X-Amz-Signature=3f191c800fb6875de377b4ea6332c0eb02be8c80803f22407fefb37dfe25bdf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=c5177e5cad7c553bb795a3dc0546488d1710b05ec977152abf8521c0cb248689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVBTEG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFCrELlRJLwHzOgxwvKJ9HNZFpuVevTs2ZW23iq2UCtTAiEA4J1NfjEk0C3gPc6xQg0a%2FHiRIZyRW0pY6XQ6RYf7VswqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDXcgs2RPjOj1n9HircA%2B%2FTLWwvd1K3D9arkmNOjS7UUex%2FgRK7OLcIeKWq2S%2F8BLCiRbgGsUc7s8%2FgVjqhCcFk5Yxsn%2F6hLb5HSYTbqs7TiMDq%2FvXKzcWOlzL4nY9LIRgtLrE%2F2Fcaw4ySIKEocEdXjxjFKW5TDQewfQ4XZ%2F1U3kje6wwIXQ2Ph%2Fr%2Fw4n6BJb4GIzPXEn6WnKY%2FlnC5QAJQehkiS722M%2B0Y1fYEVqUP1ee0wl0X01KFb6xqKrO4SQerqqotNDVC5rOZGURH8DEbQBW4QhpTzpq9KBTBd%2Bb%2BMNGlZZIxUcfOYmP0xys6mngzIWlxP6B%2ByOC0MM%2BRbJV0SFNVT3c%2FfXIm%2FcFtUNXyeXSMys4EXu50YGNR5sbKGQfasLreNivyiTFts28thOfO0Kan2Slur4%2F%2B8ZuUVY3%2FmsVF8uRFju6nc6srHBhBNRcgsXjyI%2F1ZWTBIPTzb0SsYcePsWWYzVg%2FjaSng4UJO8VpVAomlLzt1xdaTYuw6NvbXFMN5xNYxp5P0F5ekTvu103epq2%2F%2B2vTULCi6WMb%2BMS7v0m3g%2BWKI9AoxClJX4GB6zxvsZHNlvi4hUGoiyk%2BpB1JiN0c5AQTqmQTM6KH4ETGQCavF5mc0iOlQEhjoC85Z8EphFl9mfE5MMXq2MQGOqUBGQxmJcV6dWn3czWBLTkpeRuKY73A458KSxcGTp%2FphFs9Z0Y64aW9LnsJEgvQa13yUCvv%2BSH8WpA31Eof55OWFzjB4QHzZg5iGNcG4YeipH5rW9uO1dDIp1ydK9ezHWXWj4fCNpKaaXtZLdgWm7pnAkX53NL5F1rBb6z1fE9lFyXur50LoUF23xHfovTRZ748Sal5Fn0ASq3IFAwsUII%2Fr5DYUyQL&X-Amz-Signature=505efdec1207fd6658dfce4b09ebae7c976e42dd0b51a9dda48bb4738783b904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=8d331845b5d00bc2167df7b2beff034a8b81125c27c0bd04ca12e04d75ce3303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=c606fd5ba061a24959fcef19c16a01ea0246557848f2732a4a0d215510899891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=1af67edf8f0b6bfa0045c1b6c742e780e03daa1ced7c3fa6a9c8c6cebc805d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=ae7a4c1c79d6e634f2176edc1b3fa9706ee4a981d4bbaa90489300e37bdf6771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=e2c05c16b8a91239c5b114dca55f5ff6668a28116e1807753361d0be84f024c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=01e2a917b63cf1c97dcd58ec5117611cd19558e72e88e35241e6f80fb42daf59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=53e1f57392b215f85a65773dc117d1d2e8245e484036616331c3e50cf22bb53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=5af36c73ff2b79ee581080a2c430f27bb0a046d3f7321a6f99cecafe06ed249e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=3c3f5c17321e7094aee2e20828cf9b00639fc3afba4d989f0d9f3350df9f194a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTHEBI62%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBTxiBMMYeer9%2FupdN3H5vVb%2BmCqTL3RRUIqmhef%2BVNOAiEA8yTkfo4VqVf26qVQcZeByLqgZ7uuQLuwOMptU5jQXbAqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1XovW3aAlJxCjsoircA%2FgEt%2BoJOYGbUGiXdTyboSqHRc5TiNAw77bQuBRBf7Og5bphc3sgEuNBvh%2BKn6zl08vUkQ3Yrk5bepcit7HLxaSWMJ4nsUYGZc0oAwsByg5Df%2B4ItdZIvDmy0z50vKUs6tZJEz7iRAhDhHzYMsg8iV%2BSGZ14wzV0P4bbGuOROt3J3bW5CmTgT1qHkgvcpSoKxx8Sm3FFJIN0qUkI98ZXc%2FZAaj7Lj0Ns9yLv1%2BfI4GfGgbCY8iIF%2BId3QAN30Q2MHPTV5GEwwjgKglpxEao%2F4xKsP6L3BYdUvUFAtBg15wGbEsXptx1UrHHUYY%2BVVz0KWK%2FxMulYLwr3zh0C1vxm9P6e9ual%2FjivVMJkmtcLQ1P8v3OD0GqkdYQAyMhy6rCIVvWP%2BWGdvgoAoCcOpFMfGneuoS5D5feBH9%2FT76PJh5kjmE%2FKqJrCvS1scRN6WJTd6V%2FfZlW%2FLC8cw%2BH3jn2hbqQ4WjMvgENIw%2FmiSC6KdCtn4s19B%2BlwoAaz7%2Bu4xz6tLM1SYdGpnAquEEJj45GCTvnvdV%2FKRKGu7vH4NfJwnUdHQ4AtZNsv2qSj14a0i3zPTPxvAvnW%2F3jCytpnwcn5RDMEgv96RImICyVBCnKQg7F6J3mnsLlA6BnW8ydDMPzq2MQGOqUBBhN7930Sjj04353Zd%2FaTUNv6rRIV8pB5DYgwlFOZZWwzRHelBLH5fPW57IqZuHPx8%2BC%2FBSQB5oNY%2Bln%2BOYlS%2FSMve2cBlkHKZVGDSBHte4%2FePSbF3GgRKEVvEjRkqkRKT1iJA8zGF%2BZIDI1ydPS8GWZD3Y4I1SHVigb3OMOjDFPlNbt%2Fq3N8adaKx1gQMckGjrQkSjo8cd5nNNmNrJJRzx8ZRbaO&X-Amz-Signature=8d8022f36bcdc3894038cd15250bbb8a3fcf24dc902742c0057f80c594e38bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
