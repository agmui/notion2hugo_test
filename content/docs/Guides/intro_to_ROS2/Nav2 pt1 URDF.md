---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-28T21:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-28T21:43:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=3cd15ac5d668b5f5fcb99f38d18ced41e516b081e9fca537e815058ff1c4ee1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=32d0e50b17218991400419b43528d16238fd2cdae6f6b01b93045278822ad4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=f4d915befb469d3c5d29890611e09e2e688c33571d1de94b334d9b40406e694b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=29d1c1c048602a94ceadda9f26d754ec5c9dac4d2f9b9e4030c896fdc830745c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=d93f3661ea7c49e1b1437c971de8e17bb445de64440c6d57633955302f96580f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=bb70510ce7a16723fa136cfecac500d871b07ce882c066aa867a74fb8ddc4d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=c8f8492943958016389e1aba7a17bf70b3d23389bca17257e3b84854ffb17731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=1ae8407777efd268753e94a5d882a65859e0b5e5b5d688d879c1e0071b93a8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=e10886fdde8e11ce5695a2e69003cc9430ba93cd5aba92a6298683074106de52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=cdb479d2d1b8e3616813ecb730a55647808b240569b6446da6d4d6f6b37e8831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
   
    <collision>
      <geometry>
        <box size="${base_length} ${base_width} ${base_height}"/>
      </geometry>
    </collision>

    <xacro:box_inertia m="15" w="${base_width}" d="${base_length}" h="${base_height}"/>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=674ea463d0d1170856d224d812e327040842fd0cd283b8aa0e1bc984afeb522c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=6b85c32374e2ceb4ac85b05088384c989d58a1e8321b5b79dde58cc68909b2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=340e3de75dbc818db6ade7514ef0ffdd4fff79c3ce0691c49fc08fce0d099156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TC5SM7L%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDQZjmuZivS1UR73kT5uDQSjYfKpaJLjm%2BnPI3xra8DEQIhAMEQpqKHW%2FtgeMLuvoqeDNHHWRVyAChycMs1sGVQ%2Fj3cKogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMNDQod%2FixGh2De9kq3ANP%2Fr%2FGqk1lyuMmxmDqcqboygX3VH0oCVqdFoAsKKUXkRXq88DL8NqIR8dlsCQKmyLNP3ywVJlgNrcfZPDL4joceSjSyWTGmkmlBCZoPhNYyVevhBVagpmejbidGMIkgDnZcrd%2FOWzEwWIf%2BEEqBIzMVLou9MlWsy3MvWt5QryAJZm3n5HDtnB1CHKN3KVqBlO8TC%2FxKrdWhdzDTqZiM8d6pkPvlsVQN3H0xWhhUTUBwnAM%2BT8FMm7J9%2B%2FVVYwUWzGRRUx01tunUi7ZltvnCCETQI%2FyHx4JWAHoC1Tqd%2Bc0C5xGcuRaFJOeYXYLOfIRXpNVzWRXWYyC8jVCWXVSzBTkLr%2FYc9KAKJgrjF1lqC7pH5VxGn6OJC3fl4L%2FMbgbyX%2FaQOZNOpMd%2BEBf54EF11dtNhwllHQAFgqi6F2bc6KYGDvHq2tiUYpmSdMOvuU9ZliUHr3gIhaDkst2fsJnLiJ19skvecTWRgwmPdG%2Bgf5hpXQbnNAZLLRGXMsVnQKh7fYnp292rHQsz0aQbGyRRXAF7PmfSY5LXfiIg8wNagkuShORYsYVOW69qadepEqOmc1NelQYBj4EoIygGwUTZKcyYg4xQuST64nem1rYGqTmiFeTV7jcnzakPwCchDCP8p%2FEBjqkAfWcIZCmyh%2FCGMz14QUP7sK0L1gCTdC1JbOleAJn63D4UO83c24YVhfwOR6n21EuZ9uPYxAffqaS1LNsIu%2BtDcYpMKwodicm9ToK3AciXzpfaFolsmiwPuAKFA8OyH%2Fcp5hTb9qGwWme2aylLHY4zOTwLDUylSDhV48oHkjtPcoJQ23yex3cMWEnqidmVQkr%2BDjlM0BWNshk0F1pGZSZD0KiTKMl&X-Amz-Signature=44f8573a6bd4fcb2354cc9d166231a62faafb3889b7d96e3a78835e2adeffd89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=ca0fb4120d3cc38a8ed7b7b7961728cce28cc7211ccc4d795a75b69809198196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=ca93982f92e27d4149e23278603922a2d773e00b7a96f524ec9455ccd4ce96b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=03bfa17d4376f97884bfc45d93c0b84f9600bfed781a997e48ab0afc23fdab3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=ea53300f53a5075f5d3762f65da10b875081abc6312a04b5c1d63ca75bca176e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=e660a8372e036285ab47d14b14b5d2017fc5c63cd78e3d8b99771ed26fd60bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMIMKHN2%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCSPNVrjFgOcIDOQdnZ2%2BK%2FA8wJQGweOVa1vLxP42j3NwIgSfl1I3ZZuwhYOSLn1tPS9UyzGvr9tu%2FCqEVcsBiahRcqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWM1eBTRGi7EeAf5CrcA6eCKRR%2FTFlrpoYGIbrBaf3PPv1sD9hyEVd%2BB%2BgR%2F3HBwN8ePiGeW3TSjuC%2BQOdbelzXgfsBaf4EMETzyJRdbxaN1S3R9k13%2B2dQNWNrm9nxsv1ugi2bdyv4AOfa0QDwo7ETPfz5EBUMw1yyhbJXsjGJ%2B9yTMDzCX5XzmUxY5FtCFy5cwPIx%2BzSxysVMWeIgdmlUSsuSI%2FGA7dvAu23xK8%2BZ6kZR4uM5v0Zmjy%2BNl6PqEp12jdeIqOnOZkQyUD80GsLvRrRqzz66HEwlJ6Dse%2FIYmhXJ2%2BTFOz8cad2reeaHAtfVARUNPW0PVnaXtzKYVupRwrtVUBjzMWzYOIYA4DLI%2F8edhiFGkkHgeq8MgQ9vdOxtVBV1xX%2BoI4R9D%2B02Vdb48drdi4XET0CTHhRwS5xoNjHLcZBMKdY7CN%2FSXVv1R%2F%2BaDSJASMBK7R0rPDYouVJQKNI%2BaOLqcMRoRuPQu%2FNbnibyPPq%2BxeCF3prImsM4Xv%2Bt1k1NJP4thyWdY5Y65JPA1ckH8xjVINVz6ghJY3CSytTlJBNYMYv5rjhvNTckVOy8tjjtMuATME37Ua8yf81gJUb9Txe3MHOWUaFlDFuzKZ%2BDloBFGrNBRkSXNfJUKjc1I2UKNFly9lYVMM%2Fxn8QGOqUBMZ1zJxTxlKMQX79S0ahbaL6MQl8qhyje61fGilZFWFtz%2F2wU7JwLCbnJvj3hABcSKjvqkGW7FwEMwDJzBWtt%2BNksIm%2FLtLQGUIEJHeJkbjoZ9lmuGghGF69vjVysPfIdUSLRfZWsd5ABVdwbU8jkjrX3%2F7RSZnBsJvm0RxZ3nzA7vHkWqJLYuGaZpXpCAR0cTMv94FwqBSEDLjMIbZpIKW7twUCv&X-Amz-Signature=0f741ce88c23ef2fef9d6bebee90bae6633f3c41506bde50333c7349876f5c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
