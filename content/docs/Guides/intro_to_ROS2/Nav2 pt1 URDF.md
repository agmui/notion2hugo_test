---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-01T21:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-01T21:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=096b50d9844257d3d2b92f38f98d0f0aab5c924b274f7dc633f526c0a87f762f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=d791d4d603b024aa63e740bd44791307c219735e48d2a70373fbdf535ebd3320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=d26501834b04ff297df1e643f82ac8cd6511bc0e21fca90837ec219a0d6835e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=d516dc531e6a7518d4613c9a0eaf4760137b4ebe82576895bccab2c2799e0259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=60a50f7b6157509231fc63de4809f8c993fc73dbfbe857bcecbf28237da8d428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=d4f821f5ea151bc4690280a7f3d090d523c4b832bb6881826b779fe2614cd385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=f8fc0f85fc25b7745ef9a7799a5e01c8b169d90ee5d4469c6b749ac7c7361073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=fe3ffa3ef79261df45d527a1e1bfd953dfbca15317e94734d2dcb7c1f457cf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=a77a1b196e15f29b94783538e97ef51bb2f09ed1774ebf53c438899d6c8f3793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

TODO: preview of robot we r going make

urdf can get complex to look at so I will be putting a “_scratch”_ like equivalent next to each example I put down.

To start must all urdf have these tags:

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml
**<?xml version="1.0"?>
<robot name="mbot" xmlns:xacro="http://ros.org/wiki/xacro">



</robot>**
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXLYIJWS%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGFImIEGkMufUydWjJrRhUI%2F3jEpWDTdrixBZJw4n8GzAiEAjLJly5eoId9rO8aGxCL8BkGCxaOjjOZo%2Fdwac6c5K1wqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGa%2FmuZLYOTmAhzMircA15VsyLQ4QbLwyT2L%2BuEUazSxa%2F%2FKmJIbJi4XANBq%2B7nq4w179Bsgt91HFZ%2Fdq26gM8r7eD1GvZjA5FJebQUs77QIfa0eHDkV6L1nr1e7YqRt5y2n1yJl9EFlm8gpfJyaeoaBsiWgocXBZDMtJzmBTa7fRNkKmQDgsDpwtQxumjzvJHHx1FOuTDzIkaFSXPWfygkt3sPJ4m5YWYYC4Zrbl3YPU6hO4QP%2FqHWitGZNMvxJ%2BE0GfwiOKG5O8ugI2LlEmwgFkF3KXAs0SEglQFw0Z%2FnhRmP8YMbJ96H%2F3RfVTxxYPJdUjgLqHgShGK6ZQDwcZp3F2dI%2FdntCNgviy0LM4aZ%2FlkDq1ZKSpRiBB4HxujftWPLLH1gDXNsEekaARXbsjvt42t1UxRdB5RuQw30P5uvo7B%2FA5tBtwFB6ZsN5qu9vObLfCOWJYQHo3y5tAmEpH8fiQ%2FYCp%2BzieL%2B8xG%2FRvmnfjnuvQiRTzYEnuG8m3L4bH7DCdmH7w1a0doHZobGLRaiiIF5g3A6VRR3HUraDlbyUucfYtuvXxM69KO37Z%2BHEbtqBswUbV%2F94ZLQotb5jeA%2BtknrFsKfSBDyGYwOn5pbCi0BTajOM6gktUr%2F5dvAA0rVb7S1CYIDzpVnMIDHtMQGOqUBCY%2BC2BP%2FyVLfsD%2B5RdH7GuYp%2FYZhAQ0shUmOlIKu%2BU69H7X8WM%2BtHqfq8WIQuTt6Ujitx9C4DAt3uZZQuGDP7BzL79qQZKZRIskFN3uDvbJSq%2B%2F4Bs02N6CgkMbd%2BA%2FYpeOSVKPpWut3j8Tto%2FDlWhMfZ6DR9TryV5bTqZ22wZaU0JB5jbUQJlylOQf%2FUC1NNouJgTBbmDmoIVZXaKrBCCM%2FUUeO&X-Amz-Signature=103e2ad4f514162cd59175ed4bd9d91a865c282ec349023302967cff80cdb5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

All of our code will go in between the `<robot>` tags 

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO4PEZ6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIaeyHw%2BT2p0Ic0FGbPfkrJk03yRlE2YIO%2FB5%2F9lQ9xQIhAN2PjAqXcUuR3tKAcotsdkjUKjMXxY4tpnl0CYMPaA0UKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxapsa%2BPvotKjRUuKAq3AMSx%2BL0LOLMFa6kKHBLLQCU1uj34GpwbIqOuHqKcMBZyBcTGR0ugRhf%2FRGKbRcSfwBG0mFChJcdnuPz4b58j8VzFlIuziWVWsx5oZUTXRH103naoXt10q4%2F9bFP0MtRJtJhFFSrYApCi5Ui9RHNRsOz1%2B511g%2Bze3%2Bca4MQ8NlLa6i5YUSZQhM8XSMx6q26hbl77LCYOR9YbJUvniZO9x9eYmH3v7tS7xZOUM8%2F2GhwISfbLW4A%2B8zF7gMTODwmsGaGcM6OoqwgmbU%2B5urnjZmqCqn98qYSv536JKNVJOgx4SH9YvSpD%2FCmIdd47VkmmYdnPdl449qadsjjd2P%2B2walZQRJ7XRKNmga4bHzLRlJE8PimC2lpCYodrJIs5Rwd%2FUvEB412tKmtePrIgfm5SlY%2F1XexyNp5xn23jzO%2BkU%2FYcP5UGmJOsYz6Q%2FF3uWDETNJsYhRiDyZxitgKkxPfKhyvrID0dm%2BgTD8sc3Ip%2F%2FW2yU88yuEa%2FCBZ3lEvBXFtrleJs35CJFhGAQYOyjvD1oTnXNN0jsNXYICJ9LU2K5sJ4o1hQBSYO%2Bebln1YUJbuz6hyaoybFcOV%2FbJj9%2FoI8XZMXiKrMWkuAhX9lAFvHVmrcyy0HwZajj3SXsIcjD3xrTEBjqkAX8jlErNXpiusPzi%2BGJlBQ1t%2BoE3T%2FMVQXsaV5dwNoccEHmTfm%2FKOPBzzW%2BEgkEWJSrGAlAAN82fwbjk5PN%2Ff94UiuA16IoVVxRM4xh1Q0BJvmDcjTWP40zXZtrMTo6%2FlwuUlmU7yPZNPnK%2FmL7YMsciTFcKFyQIkn%2Bp97We2q2rjVzEoXJ1BBNI%2BsDCPj5viCI8CGA%2BpawHoAb5fJp18STSfnju&X-Amz-Signature=e658ec5392cc57030bd0b4ccacb91c10f550bd5e1a34ab8aed03c739c11de94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

You can think of these as **variables** but in the xacro language

<details>
      <summary>What do the variables represent?</summary>
      TODO:
  </details>

Lets now make a link for the body of the robot

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTCEASF6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF70nd6JZ5%2Bb1oRxUlIfoxdU4Zp7dqGiEUpW78Zd2YygAiEAwy1YBDNsB3FKPGY71wJROx7yXWh%2FUPGcdZybFZ0aCkIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJReoa2ltR8HrU0yrcAxeWNPI9JLqOIgc7HrB%2F3E9%2Fga8gYFsnEDEFVBCpJzxrVifIloZTsAR7o26q5mn7Wyl9TaF0Rou4uJBHz7J1SF3OUm5WTdTY%2FV2bG%2BjwWADsVf7b3yq0ACCmE8kjkzzVJDIv7AC5W7Ned%2BJDA2j4q%2FKNwAQiKwm5du8QAqKCyEc2nkNnx8xHkHeLT7%2FCoqcOTnKWzJ%2FWcX%2FDVq7pEm4MDomvsANP4S2Vu3ONXXEetmsdCHmNdfSjSjZbzvceHB82PP%2BSlFUGcxCWvkRo4gN36TIjjXEdCjaWDkl85tcmxR8FcAtYZGbzGjbDQnz%2FXgKM%2BFE1kE4NwIJS%2BAyrd8L1u8tcDWfjFuhiDx7dRl53K2rA6D3NQL4p9iQzEQr%2BUC5fxrLhgH7Om2d6DzbJN81KoizHoCckwmKZBI9m9ymXpU1Pj4c6dUOe7c3kSutDNMh8kg2dQIrx1PQcMt%2BuUvF5P4PkzTK7ImOfTcFCUj9u9fIqJeJCmLSoPhGJqX9J1k1ZyBUe5Wu59Hqm6H9Nic7Az3EWJ%2BZgKAkawNk8Ed9gF7hOc1EGC9I%2BoZNmcPvEQ1oG02jCJdXPiLjpzVcLhRFR6kNNJkQqIUr7mrAamzeStaGr2CGokx9lyPg7TfwGMPfGtMQGOqUB48bgWe0FtJhXPnpEsCWQUwSDfc4XN3%2BtSncWwak6hGd0VzRZZeQ0nH4W7l86zd3E%2F%2BuIpytL%2FQssC2g5CfaUvXwFc4IVFzVecTC6AD0qT75SsRYvdDXZsNo7bx%2Bp7%2BkU6C1onSkN4ZDHICZ%2BTvAkEZLEu%2Fd1bZ8NSM7vvBfI0dYufLQ48jfrAtV%2FVcBSPJyKL5u8TmwURRwSFSyq0BRsVatZhcqY&X-Amz-Signature=f0625a839bbf9aadadec1bbe57a1dfeba49197c87ae755e4d779273042ba430f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=be7df3a2208d3b7cae120838d5fdaae1d79071f47734b4e407ae0cbaee6b3d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM7JFO5K%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSN%2BgJPY7NjlcMMBWaPJIeNT2KOa4kFzoeqXdBTqb8YAiEAiD3XWUN56R5%2FjWaAW2So4l5D2bawTwxGwQqZh3ZKfGoqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlLSl9rpGfkyKSDiircAxSkpAbKp3Ae3tYIyzuD%2FlsniqjyKdLtPTTS1WI0ktcRdkfhi7CbGgHmpKZY0ULw4D1mqVLFZ8dKoj8KYN6w5AeIhaKrx4OTFvvVvchxu4kdNS1jxPPe%2BcCykuVPkOUHZzWn4Z8Rg7pMmY0mgFCwqMB9ZFNYOPs0K0IMnjT%2F5F7NF86A5almB2yro0Xm%2BFjKE1smZIYXwRQ%2FIkWvCCN8uVucd7IwhSZZZnWo5j2raen2xlUORchLlDN%2FR5kiY65BD%2BArXLGwnDCI87kaHJLAKT%2Bt38MZGDgSYcMZ9B%2FWGRWwtvXpX7hpzm34ngyP%2FuZrlS1rb%2BpfoRaXrgtdiufQJLEHCVEbiFcWL4yRIxq09iCyg5lQ1t8mG6zUP5r0EkFYSLzssqAwrmQ2Bg4TNbPUyK%2BCIp676%2Fk2G1Mb46Eg11jM%2F3%2BL%2FmFTzeq9JAFDCx0oCvXF8b%2B2MU2FzEJKa4LMAlQO1JelGQw1YmvFMwTmwiYwQk4gdDNBkt243qcTq7ayfELG%2FNdeh7RiVf1jr%2BtHJzRrxwACA1Q8JdO%2Bwbqta%2B54dltboNKRDwbqFAsPkK6%2BUbM1Yf2SOGu2JXCGgs8cKO99mRHFd%2BkJLivzf2OJrIvcFhQOT3x%2BXDm2OheXMIjHtMQGOqUBsBMEwgOb7gmmhWVUHXJXhW8%2FPTwboL1hV%2FYZnpbn%2Fe%2F5%2B9xAvWH%2FbKlZQ2tj%2BQzyzLZLGbLOv%2Fh2Q2nNzrTnwnDguNHKYdxAS312S36a52KTDwJMp6%2FE2UbQp7Wv6LN1x%2FI574FU5vhFYE8dV7xe3lH9KvqDdswd0l7iqsnStDNMnssO3ZCyVjwW4%2FGZGA1ZxymtP6ChKIh5UuAujAwFpV4X2bKq&X-Amz-Signature=b1817fdde19189acc255079adc95af6a32fc6ec0d831b525aed95c0552476e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=4be405489eeb38d137488de858c88ae7f522e5a179c2137421b9ce808751dffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VXBPEGW%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBo0u4MEEv7zUVux5OQd1OjqBul0RWDkzcgsKD7tW%2F5bAiBeV8WhyBpoaNGJldT7E5778PC1al%2BTPN6mx0koqdxC4iqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdUKSynJPCmVXssYaKtwDtjsvYUcjnyU4Xx7yHJYxXBW%2BMFy6ugSIQBZcVm6FpMDE55uYvXLZ0fP7SkvS%2FoGMFe9M3wDsmBKN9ivB5j3Auh6flGdPBEdljAbhrcHE%2BrKYO3u3F3fTOXVsfjl0GNagmH4ESTLY6HS3dlNG3sdn%2FPvtn%2F7LInFs0rW8EuuhSXXW1r8aUPq17hxCtjlueNNuZ9mCzQ2iDTRztwUEcVe6Lqx2xVm1YALO5KOftkY%2FxwSXfDZZd%2FOssc2VI1YOoM84Mpl%2FzzfPUjgTQ7PzAwMOk%2FVrEnI9O0X%2Bz9gTIRmpD6dyMHyjAg3C%2FCzYHocR7yKJ%2BGvYRu5bazY7A2NOoRBWUCIwi8semMpNoT%2FqcNP%2BqmyRtH0iD%2Bv47moLccJyu9Xv92iujpgU9o23kSl2AEzcvqkMYMT%2BBTMmMJAQxbIbUwA8gYkRH9gM6EVIalSnLEJPVdg1%2FYW7rslkOShnb3MphXw4LRcO9Xu3zq%2BZ00VtVAVvaHnyt%2BJFbZ8kCL2HPTu0PtTb5hQPSBdJIAhayHaytnwgYHrDbjHOMMZS1fxFk%2FA39VLPiXt3G5FuaTtXEoEl1wM5kY2V4lxfxsob9HoQB8x4ll6jXJljgn5gvodCbhJlPYkz3mF1r445I18w88a0xAY6pgGpvOVfmKvl2laDZCa5jN7q9cYzEd1mhlBDMJzMsCTlFL4hT3qQkBVbogSipb0xtcz402L2NnJvAEH4NiAplvl2cefMd1Udvzv%2FbYG7vj%2FEPE%2B6uBaiTSx6oUnh6nRuNMmskxZXe7z%2FTneehA8VfpTnsjZ9O9TG2pBoRVPbXJJN7VXkAOCdAl9fbN5kcnBO3tHhCoLoFxdR34Bxh1YpueRScIQaVnLH&X-Amz-Signature=2de1fcc0d9f355992652e2654a3434063254ea8115204298565bc8310ccaebba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=1eb5b4c06d9bfe9e880b1b236500a93c4069e4cf4a76fdf0dd71dfa6d68cda2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ORKEJDH%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrhw5nFmrTQTheFkqnXQOuoGhi7P24MUwHemc%2BBpowEwIhALm8YUfZGJ557LdxxVXWj2oGF16ojkPKxEQVUrAkoRXOKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FZx%2FdQS%2FelT%2BZakYq3AN7zcWRsj4bTDHlWmKpdfS8RZ%2B6bi3B0HETYzQ29tcjeXeJzp7ZHExoHFFWqW5otMIK9yHZrIG1aEBQykOWv3RQkczw7P4CIM4dZeVpbpd%2FKTJMJnMUAn%2Fi64vraIinz7JsPW7f8nmFJn2tiOp7ajKFrPmD6DbuRPyeIKx39AqBtteztEor4%2BpzjR94GiDuHG6KHGDjUxitYFbZIFRb0leUytWP7f6RuXTP6HqPElEaTGFTBNrB3Nq50ZBfzYNWOdmiB4MfSqA7L%2FtNESvzVV%2B%2FzCaZtL7IQ7z%2FzU3QFwBY6KOvTsbEiQzorTJdK9hHy8Zcgcqm6Qaq7W1FU0eL8XxLW%2FFNPplEIdG9vCJgt8RWWu7x0TjPkQkIjmWTaW7og9dme39F1iB04n7xoO0tLh9UigeU3KBOKEhAZvmx9UAJjhL%2F4P6KVb%2FGr7NzaWpJSiHB%2B0vvVoq8SPtzY4FXDaSIUbLuRzzcmXT0xK8fAEwCHZg7yakx%2FRS8dfbpNqtYPSOIUpqxetR2yaWKov4J8zxFQ3rroYtPkQsVaCQRrmkVp5CmtfQz8asH9hPqF1Xjrmju3e0q08YzBFAC6ELF7j5cnDqY8hX3%2F1RAFTxoCDxxi0wwa1DW7mOwfCOhqjDrxrTEBjqkARcwV%2F%2FKfYBvXd9sNzViIalbjZE8kkl9KJ4fvbdG6bl10xSw%2FQHVX04a491RQB%2BxmBBgcEORTNy6V2pzV%2BA7FG5r1CwvreJDt7R0r8BRx%2FvNI0D%2FM2C7eoSp%2FiQMyGUzBBFJEK%2FPCVuiW6ozfcjLA6SOlEhvzFau%2BxBTtvxU00SMCqcZSWO9cldPaUwiicNSIj3BcgkM%2FXU4NFA2zwR2YRApceBf&X-Amz-Signature=75a599483f7e192548adc98d98c4dfd3e5cc1036519239996361605b2876197b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=650323de2f094980dcd5cba623bb276ddde1b06f10191a8aa34afbdbfce93e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667XPCDVQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD85jKhYjPXU2Vn0goHVtWnjKfpb5yVKiTjSwpcLpJ%2FWAIhAPSketzyzVpWsBCig8XXKLCyVBPkEa0opkyokeDkdwQSKogECPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8sRTzSSHPPqIWuAEq3APQsfqjZHK0CZozWM5m9Uztk6HWalzWqKAkB%2BHDXBj%2B3vflSJg0FckmcrRdc4jG4GOoPsTEozxa4YRxzzXGDN2ADWfFBRPLMHqAZMCUOnOO%2FLaR9sBQjjhWCr8GADn0chg8fB%2BWZTzwNiIoGE%2BrzqkUnAKkhQt%2Ft2dX7CWFNREejfnCpxbu3aIWXNMGBpXu1Wq%2B198TZSPWpLzQfPMjhE54CCGZ9dzbgn%2BtJzHLkFVl67hSngV9yPlQxfqF5mvxdnQxSDTc4K7CrWhSWvOp5PwYoKd7JeDE4IAtiQWf1dIV09zMiAiu56aEY%2Bel7aZ0g0w6mMBjKq%2Bd8ApBCFKMR30S99GUbFvdY%2FOqpEZkI5%2Bvp2Xj5Vc4jK10j5pwD2Zou2CwLMhbjn0nkX0E0fMVKdxQz%2BUAu1xsu2XVO3OgnL3S8UMdPAgsBlFXf8jHzsBMXbhfdsT0WSXCLTsf9ht86Fv%2BaEPQDHnIMdk%2Ft0FH0vpmlEevKY1W6cz8It8RdMo7ZuyZ%2Beje49xpYUmaDIRUkSpBfopnl2tNXfTXSoImTU5sEaky3V5WOm5aj5C0gADWqdPF9YAYMnSSMYE2C6Mv9ZNlDwd3mc1S%2FFDIX%2F9ktuXnLIxZMYr%2FqJXWAfJMADCxxrTEBjqkARf6ygDdMn5z9djHFRuQaJAgDGXzwUFqgBXnct1Jmn0PnPBEfc7Falsip2r3sSSDxRle0UE2vt%2B4wuvpWsZb6LI3X2EpEMIUYQVbKUPxjM3hVK6epDdfUKHhxGXJtnd5BbDdTqzh%2B6ciPvT%2F2h4Jgm1voSa1S2nGHDkyKU3b%2BFQegksRWIGSpC609qUnqGoFGabMSlXPxk8rM3Z2yA%2FU3fAqRPCJ&X-Amz-Signature=d315abefa99725043c5d1d0b74805c266c13d0098fa1ecd188c82139956093b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>
  </details>

### Adding Collision and Inertia

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
	- inertial
		- origin
		- mass
		- inertia
- link:
	- visual
		- geometry
			- box
			- cylinder
			- sphere
		- material
			- color
	- collision
		- ~~origin~~
		- geometry
		- friction
	- xacro:box_inertia
	- xacro:cylinder_inertia
	- xacro:sphere_inertia
- joint:
	- parent
	- child
	- ~~origin~~
	- axis
- xacro:wheel

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4CCRCT%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5NyhqzkuULnW5N9QyuwM6IHG1VypFJn3p5c06F7EbHAiBV%2FGwsCqaOI1dU2QTNWyX4GRHZTUWaClZkmmcWa2Z%2BiCqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1NDjWnAreGDVJWKEKtwD46MM1t55Ws8bagWvK1PvSQndi9E1LvD5jkogwF%2FVS3yoYqZOeMk5w26EhU88vnSbOGrlSNcnPcVDURWDrKs%2BnkYCw6FUBAEQ3f0fdGkWc9ZZVg4okDl4AtEc%2BQHojlWoSAjMpbtjTtHKe5hUyIGlQ4FFA7bYgKx44qfOkOp7X2HP%2B1GB%2Bw9jKu%2BOtS6KibxmrerNdkZ5M%2FgtlbL8LAJOvHR8P6Mps1%2FtzPJpPKn3mXvHDueAtevBItBxGU8hXPV1MuROX1ddu3bHt2v7OUzT8VzAvWXfd56FKTDVXdgK2XPlWxZAVSH9qcGwBoRu%2Bcol5SZCh2%2FP7sj2Nb7GEUk0MmisN3OaiGvnonxtsP1G75CY7ScSsT0M3hQo3R2aZeAoVLwl2FALYp5m2h6wcjU9Gd3sp6LWjKzNQwKfMMakqMi3A5eQYNOYVQNum1a5qqC3Z03fx7UfWBhzmNPA9h%2FnJ4cQq1KR1oS6BQXLlgCHmpALBdkRJHpFrKUj%2FSXUlfKQkisAMcT0%2BnS4d8ZkRBG9hyUkkhYdHq8ypct4kHEEmnpdnf6TcoyspSRVNWgekqNBmtcX3FGdrrhwwaS99u%2BNe9DyfYj3uDisw9%2FGbrSVeDkOMZ4b5l3lj%2F5MWNcw%2Fsa0xAY6pgEHIfkhsDf6JGulcQm%2FsSjnfD7zHvEfziVw56qFvso8QHSBB5rnVBGh4629Xkt%2FI8UpAl4otU4B%2FRDH9xIJq58Z0kaaNF2mdlJdebqdD0oz4ngA%2BDhxMUk3lAnmX9M5JJskw3goErfai20vxirBDjeSzFR%2BaddJfEH1WEJhKCKFbB1S6%2BNpzXWX5Iop1yIrRrUpF%2BPkWkYq435MldM8fha%2BrOqMKpMc&X-Amz-Signature=b0e04d508e8dc15dfc2d60e8ef69b0c16d9daa34e6365effd7a40d9dd0541807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=d35d91e80faeccd6fb9b21eba41dbe5a1e7878175b7e9e9f8fd2673bbc512c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=468ce8f85cc7d4254d6e38476bb7c8aefa3f99b9b00b690735849874b1436821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=a693b34cdb275cfbde2c52998a503131a8fd00523cf054f9e2803e3414a5b4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=f59a51333a3517f56f128834893fcd23e7e931e985cab337390d45af49e0321b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=856dbac9b6ee5b8f8e33e69178acaca2588dd7998b49a739f39d49c54575518d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=45f61477c8da330ce45f290e248922ef9a629d330690067f79bb7a6008ebe519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=ff9508ce72d84ceb1fb28243c46b8ddbebe83fa968bbc4869e5f2fd7b2d20fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=094ef211c3168f61e33936063b22a831a9842c27c88772927d25aaa9d5a13385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSRHXQ%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYFiZjblJRtxm2Rb2%2Fzb64ceVnHL2Qu1KnvPyQr%2Fa1IwIgEqTBzmV0j4MeHESGrsjgLSThIu99XqwcpEGWaV9mkWQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMaAg9s5oQlxIFdaRSrcA4%2FCBAPCK%2FE%2BGXedMSoJEH84A%2FVvo1ZpVEXa9rHxLJMRm8vRPOcHpwJ3y8RzfSF3qEhwDvl3O64OgZurJLYSEm%2Fhm8IUGHWyBArF5Hp1y4%2FedEBdTvT%2B4rix3e%2Bd4YMDe5d0QLFfWSGqIsBj7FdiNeK8fRZT66JRIsj3sUI%2B9WCHOeDoL1Z6n2Zbx0FyXQ8F3x7ar5EliNFmul2CSuYaPiJE8D7oQI4z1y8puBpFkhssM8XDEkMYcK35NDnuAoo7CdGhtC%2B3mYEdTq99kT%2B1GtHGy78qYk%2FaPmYwyEskxXDPtVZZo%2BvKVgPVzdTpsuRpCz%2BJ4nY%2FJ%2F98D%2Ft9BAkGMmY%2B6YW31hGPrKuaoBVuaJ5JGjEaQTwMhtrh7WRCn91xEWsjBudO%2BKF%2B383fBWX%2FelN1lIuzLlhBkWKKWq%2B6BbpHdOZR8i1HFvpOBBLDcXfSOYHGOWarsfJiW7ckZoj3rLXBGELitTICu08orNcly7mSi%2B1JwJQuk%2BKkQe7oNqVoe1vSAEnykTIk2vKwASCMeyngA6Qv8R8Z1b%2B3zeIK%2BgT8ACvN%2FOER0RRo6THpEtmfL9WujXvGeLHBSxoaNo%2FtYY6FfdwB3NbimbVdJT3H7EZTl%2BpHYJv3QUCdr0C%2BMIzHtMQGOqUBWR4QtR3a4iVzZqoWciYSHXOdJRr8Wf66jyaqsBDkib52l6jRlFoSeYiibj3LdTR1FczscpSWEEC0qtFF7mPeiOfj0vmhO3TXL7b82UgZ6dY5rJX0VDI%2FsbINuECB7XdGt%2B5BHsDDKEnXk8qFdEGDYVggzZSUm6HtnnRZcBeyTRdDN%2BuPzu9zj7YD%2BLU3PNW66SkojkyPM%2BZ20KPC5Q1ducDKfFJ3&X-Amz-Signature=2b8b89ee958b234c609141833ceadedd63b869720b7f10c03bac32675f45bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
