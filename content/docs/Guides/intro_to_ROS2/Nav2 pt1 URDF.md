---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T10:15:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T10:15:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=4bf8bdc87abf79b4c7fbe1fe3bf296a06db227a566834dcab95e11f506eed520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=c348fbf472866300e5d0f3be9e1b9ba0b8a0d7dd45d88c78cf07c1c15f0a9634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=ecdf8723852e39242edb1a1fd7cc97f37178faefce21193371add64f18be63b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=d2866969e0e37d6eb4916555fb9aba7d42d9a5fa95d1635152fedf4821f2238b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=29b140519b5b73919414aca6f17c8056f8e14c174eb25633501bb3f171b10b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=8b335695ecd85118a2242cafdf09d127d16952a7634b2ddb9c2dbc8ba02552a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=796a94a96ac3d6969e5c4442434190cb9c88250cc29a5d2daa3cb1501599f0e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=f4387d12326d8e2118fd0fe8e2226dd1e21915b8694a4a085dba06710093f623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=c380901355772e03c7349bda2e0d514cb44990127153efd46095d6fe15ae1e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=2ba8fdca3695a99ff62aad80c6db32d10ea1155287311eba6e109689bfdf7126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=06966b62924fb5a06036bc0efa16ecc9c7c4a09b456ef2c4ec1b7a272ec40410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=4d3f4b7027ecba14ad1dd65e7b1a34fae21b2493fdac4137e9900ea2822ff2ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGSAVD3X%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSq2zdz2%2BUx%2BnEKpx2wSDZYDXliJG9OYVtF2uhVSRcUAIhALxy6fsJ7X1lJ8xiXPhhr2D7quN9ol855j9exTp%2B0Z9bKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXyvgTjEHO%2F47%2F2acq3ANv%2Fye%2B%2Ff7au5cDqoHhJ8bhCqQtCFBGe%2FSGraq7cCz23G13EbWnoUwBDwNzfNF3olFVXPPJ7s6QZNIa4pkKhgr13wjXyyqRB1Ldwq8oMJwR9H3qsE2C1ZDj3zZvA1dULe8KRZh7%2BNKxY%2BaoDmAopR58RqvQ7H%2BqGoxwc6%2FX0zDMdslcdXf6HWZ0MLwa6T4fuY7q4C1%2FkJy6ryM9mxqfgjXUqm9FtSydNWEN0p08ZvgdZDFXIsAz9bB48LMBEQntUTRS177nk%2FPyY4b2orX2C%2Fwizb6oetmJi9YFn8cLczS7gV6DU0%2FbiaPWlVJLYJ8W0POLnFLVrcHhvwlwtHQpYQ47HPIgNYLATvFP0ohwIhIStji8lmlynu3J5o05azvuVU5R33q4AUko6pM55vQbS0%2FH8ZqxTmuKkXwt11ZsR90lt7GSud%2FdpMuHA2fV0PJGmKVn2kpY%2FiR4DqsyfZS%2BDGjSugHG%2BZBhX1BcgR1cSSGiEYNWkM3h2aGqeGoVomERuKvNJGc1oqdz89H7yizQf6CsvSWtayk1gItHMa7bscfN42f5OAq1cwCK1RybedFJCt35OyQs%2BwPg5AoCgq3elkOiESewnn7yUgfp282Ses6mMUPat5tY81QGv%2BfJFTDcianEBjqkAQvrxwGWBH9WqxeVz04hRcCKEEoYTLBCPJld4yvf25%2FFhs2Ed5FGG%2Bd4XMzjBbP6Jq%2B3J7ItKeLZ33%2BeNmADo%2FatxJ4%2FNtd4t%2BGOX6WYSEj3ge4UHximHPQvkVZ6O7aNeP3WiExSz1uP1SKdGLgJZdOKBCiE4vv7itAYIrsVPqhVTPERZ0Kf8nz8taLyjZFOvRiGLVtcu1r5h7AgeIJvgLyJqUoz&X-Amz-Signature=de902cc5bdf64a33117a3ec059e1e15848dd489fc48cc0c8b5f88777ce65e130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=a839cf6a06f01df76e15417538ba295f211da3220b4a76123e597523787139f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=98f4f006122fd8562b9607c3f81a364cf6039bed46693f7b5473c5db90b03919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=5ff32786fe6ad5d3dd2b803cad390e7c79ab19844c2fc187acebf1e4f9166bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=2543b20b3e4ebff72583582a69853cfd2f7d0c90a6c63ce005d23f6ad0808905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=ffb085d897722fa6c1acf8d618f9a9646b9f8dc29fe9e1ac703bbaeaf598fae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=b62277709a8803e242ba4e0cbafd26e79f1bf517feae46aa474906b0bc4cea22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MLK2IO4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKtZ64uTYCfuwMZIiG29iAqn6DBfvhEU8NCryLml0DjAIhAJltjCHsNgyQCD6536AfX4wREuA0IriK3oxRBQa8xDhpKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmMq6SsbHZ64%2Fgdz8q3AMRfE7XtpaY%2BcAk%2FrmV15JKNlYBF1aBBXGGVdFywJvZq6WhiBs%2BCPDNMAijJL2F%2BnqOoepcuujnuJMv6Gm9%2BxNhxDFLswZbSc8miBxYx3BGuquXw5rKCIH1SnGUaGvr00CyFl3K3vFn0uS0rel2mFvY5O75TaW0nCb4YGHf%2FcYk%2BTYBkO59AC8GmZIL8L5V4KDab0XGmskgEX%2FhluuPjOmWn366ktfSzu8OvnCrn4TzaOBE7xML0gAFZEZ05suvpInxl9ECFkjE7LOndNCafyN3LLzfYGXqFwCbQbOBpgGnVqrF7gqTya9BaTBt5pgYJi3nsjsPoGN93ZonVeH6LZjZrW2o8owkP%2FhwCLB56Bhek6GApX6qSOfT2b8FwdKyjtLIHuBMiJYrPSmU%2Bz9eYw08z9s683w%2Bq6TvgMP1lZBLn4FEXtJdoRxTiheaPOf365ZwxL59Lg2S3brtOBkTiRqZ19cW5fXzpIOVFV4y%2F9LMfyYaRb4GIWv4pomBymT5UTU8HpNIX7nr2SbN2DpmKyRD6IdqquaMCv4%2FRgV5iwlUifXSS2mwVm0vbMzGFACUuWlwPfI%2FxxkopCdRmbFjv1UoamTHHS5Hj6Gt3Wk9bn3fidAEL7baIAASurMznjDRh6nEBjqkAZCa8xZgsID1sUXvEnu4q%2Fbtr1Hx8rDGRXCArzvLm3gmPQfdpe69atKrYcRjlFZPqn1oBC9lSeKjBXGBADaDW7ONPzZWzXUvtmANn%2FFhK9bdMyyKqfnDz55dq9yfGHbD6SnNRUPllS7da8PFaioGSnWH2uhQ4JGQW2CHAqJcPXMXfRS3t7olQX7sfhXxFT54G2Z1tcPHnM3U6tOmwRw%2BdRGv5p6I&X-Amz-Signature=0f247ddac82a0ec0ff1c56aeae558d54d6917a0a083e2eceaba05c424329799f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
