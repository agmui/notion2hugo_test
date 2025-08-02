---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-02T07:27:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-02T07:27:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=784d10f4f92517a79e00d7f57939b037755e3a2648ca345d81682bd27c2c4068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=96640ad037d8382384582d444bcf1fb92237302dfb04aba3932227cf114db3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=1b9ab2893b811131577007cf61e045d421397d53ad5449d65aff4e1423b33d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=08d616d656fdfbd7e8c32ebfa75c8d4e4ff94645d392b3064a91a3724cbbb68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=7a6a6eefd6e76934b7856a65d35897b96c106ba2165194599f51751ad3885f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=84647203241ea79318f74a7dd1cfde159ecaa3b469a06362436b6c7ae82aa698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=1f435bcb28f7101902a0cfdc97f9e633edf8c04cd8b6862d8aefabb0280f0e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=46559a3bf781772889459f332c3cb47e9f6621a9dd7193b4a1b947d7d7604ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=b0129b6508ad4f2c32ac924c68591d96a50fbe75ffe5ff90eb4618880618ccb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=f7f0c7a2d922f5abbb49822d50ffe6e0a274e87490bf09f31b2836b773a730b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YNWTYW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0PH4sqKOzW%2FT4yYSXRcFpsOigp3rZJ9q9nAxv78r2NAiAbQWYtLkjndHyGUZk7zDsvaChaCqxLXuWhlW2Me49aVCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMFmH7M5aTwS2h8yyiKtwD1qzK6c0hOtfd4Ck%2FqMy7myAwvgVTE%2Bh0cOGZExFfIyC1EJ%2BOzuLCX24NPjz19PnRaxqa2vWdSjNK%2FeIkFSzojoM2S5aevmACFTKgeLRvnmmn6fZfWXWd5XUJaWzuKgt8B82XCMnCVl5Gqo1jorisj2bZJoqAinhJCxKdWY9B5%2FLy3K31BFBzuL3LCdyPLp9EVZNGK4M5%2FYRKw%2FZyf84pERrdkXDmEObG5y6HlUAdUYPIdSNiKBhSwjB%2BmRtSER6M0Y%2FftBEHo69LoYLcf9SWBPRBc4aBRyffpL1GGNI7AcS2iA4ly3jTsckUOJI8Ffk8fGrTTC1%2BkqJH1aFFt5GCxW6K7cAylOTxQYr9wYJEHDpmasGTFhjvU47ADHcM1wmGrjViDPXgFyszL0QtunEDLu76Aolm6GifpmTDbjfdqAEIUODeFhRV0L6Jc9Zzj154MOYcFv4Vfcoo3YcqpGJPpDDSFCe8njiQNSyJEJRO0eFPnADgHqH8XLEplMzYixmKKiVEBYb72g1%2FTmW2LnGkHccx35qZS54oPIWpjKMbHXZHqoNT4IMwewWqQNUO25mduKGMB2EUBlGieKF9ySNhA4QsiScTKs%2FDQedGVCExSgr9klJ7S9KGaqfnS4Aw5u%2B2xAY6pgHl14hKghsEKXreEj71jhkaNd7w5RzODQwisf%2FyTm4qVBY7bkOXTRHpJGm66QWWBBXR%2FMOqjX61Y5UGouwHtn8%2BBkcrtIAqlIWDdk8YpyebiauUiqAGDNzdFd0RupLzaPDBG0htv6P3qvUG9XzgTX059yvOyWrJjWPn%2FtglZUubQFum8qmmS0buFHMa6yvcAJvi8p18Y0rXyh8cFTCiiVhq4xp1VqgN&X-Amz-Signature=47c91db2b4d281a5f3b79deedc8ab7adfd9511a9c7a6cb48d36700bcfb44e80a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGQFVFGC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2iHyayZDPc3ILMa%2F4Ws1UZ%2F22FsS3F3st4jbB4fwdoAiBJS1ZK2VCf9bdR4PP2%2BxVmlEVcFpg19uBZBbC%2BjDulTCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMTCDErwGG5JOhWWBjKtwDVU6avAmQELdjdH%2FhHcVX6L0JR815LTyD8eIlHHuKSvxHODmC4uPrhfpr5SHZPJldUg5LUBxCjbzTr9DxcwUE2lDml1jE4qcdk%2Bb3mnqAmZ2dzYoEyX3AwsRU8cIG6UnGsHpgR5hsPLPtzMf81uG3rR5A%2FdPTHpoTfcBf1CL5eVfjNc0S4Uf1dFU%2FIXhAHjcAkmLMDO4pkum06PEUZHhKN9mxaYOTMb6vvlvKyeOAXOeIm8Lj5nJ2P6Eu3i3IAOqTPiPKne3X7mRgcB3XDUSYt0wky6slP%2BxCgplHAwavX7wACPeCsCFbthZLexzANcBAiPl39E2re61pKke7lihklJu8I4Eg9u5lBKslPGeHKClDVqwUiOSa%2FXxFplZS3BrJwGqN5glgP8Cu6ulZnmZCqMAVPkiVNLAGF23WaTHrHYBtjEvWmcej%2FmnXjE3raBj71q4wZ6d5J6kF0YU7SXa%2Fh8KQxNtHXNynp6PyI5ewkko1BjQ9UO3%2FsCc7bV36LOaIv2SHHfs6A5U6inknUIKqxQASAd%2BwQVHxysKcS%2FQPnwZt34pH1E9b26y8t6lTc31nszYUInLLqWqkyKfOK%2BJ%2B7UZHjIrl3grfLc8EIjHcqKW8UyVdHZ%2FdgnRTQPwwhfC2xAY6pgGcp3E4r5ae08Dq8H6BUtJ5TtfOeXf4bGr7J5%2FqWV8gqm7SoQekocnemSGgz9uUkTP98X26AqL2yVQpdXhWxSixEhlpSp7Ss5Tr6sckmyaFMYKU72h8g5eLoRutgmSc7qYSbt2w4laZE9oTHuXQG9KV72x%2BL%2FLUBqmp2MXpOwZPam7cRAGzBNUaVvzPIbwdhq5%2BMBrcNaSZpgawpX6Y9uYS1Mr%2BrQGW&X-Amz-Signature=de8931d1100f778ee5c7cd251867116c35b9f4b8b0df7f7b0644e05c4a22bb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466252XQDGF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDESfe4vkaVAqK3gJl5Bjvdt6nRZdPGzN1e7nwMEZewjgIhAIiAFIg4OX6yPu6IhAcRJRNRTmXubCSTuEScwgVGkjlBKv8DCBAQABoMNjM3NDIzMTgzODA1IgwbImxnI24UsouWg9Eq3AN2uTXBtifs4AtHl7TzApXBh4DhuCPjx%2FVwJR9OFOsdcmOqwBlJE7SWKleNWdLqLJt%2BDLAs2iJHFPFZE%2F9c4%2FL9n%2FToDvpL3iqHyB2OtS4U9G9RaW2%2B6qTJhpbr6RZ3iZFbeOFTQFsT55y2glxIwaEKe5saHL1PkJvBSFwhQxPpKnSLm9AKxULzAbtrd6WEN%2BxrqIc0VSYQz4fI59azkyO7IY4w4kJ6sgMDtHpUB8oCqczONGRZdf%2FN4QQMEeUz3l0CmO8hPGguYmxHCm3J7g%2B1gshzeeJK2QrJRCts%2BDFMj7oKdjeauNn2yrOUB57e4efblW0bDSbmv93J8XJD48SXOQ3lkUdoLuT8jXOC5pJSLVestUXodDnLc1%2Fk9oYB4bTt8vOycg168Nt3uPdjm1lyLV3odEUHqyXVAEXwN89D5TDgdqQes1qDtXcUczu14Jb0euwSBy4lVZ1XETOcUk8ukn6fWVWOraC11t0Qm12Q5QwfznGrnOrzbd8IoVxbLytDfCWREgbp1hTwke%2F4vXi8%2FOVgSbQZ1Ru08mVImmgPmdQn9z%2FN1acWgi30mudq1jPXx8WuEjUMaie5M%2BbNRErNcTdPJlcMaZ7LS6fJhrhuNDEe0zMZ6BIf2Or5lzDB77bEBjqkAT4%2B5gCi6Jvzo1uhMcfvP3LIFsAOBPXFxTcOgPf9UbQqYiwdTjjpoeNpWV6BXPPkJu%2BJHuFcgcLW8ul9vyenw8x9zBAZH5BXiGc74CzICAnta7Nd%2FxorGWjz8HIIIcI%2FLbT1vw1pQtdwfF%2F86%2FNtb3r1FUEzlOjRrdd2%2BhNPitkR92DS%2F73yjBcflV0eilo7%2BjpiQQmpybsaNQsE1467TazLinVX&X-Amz-Signature=dfc9cd5db98a9bf06d0fa791f790f6772f5fc5175df09559caffcf0f2b0103c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=3b46ac1ba6d1ec719a98fcb1689a14c4907461abe184bcbea4291ee869b0aeed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=8424dbb245d1859e951b17674874ed5fad3fef7038f737feac63b0ef298203a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=06bdf25454a3f294b2d0eada5e81b13727d76b5991ea95d6220cd6fbef4f5d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q5XKGJT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWZWObo2uGoLVCN%2F%2BdJE8hgIMo0FjOTI4l%2BanP80h6BgIgIdIEZYAgr0Ivw2IBU8a%2Bu3hJJcGTwXSVkg%2FJN8Hq9pYq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDI%2F4GOZ2J9elbiDHoSrcA8MxxXsYNwM%2BTj4uKIyAkPLlU5%2FMbI03jn3qADbp3ZJLw1uXWRvB0b%2FRC1vJqKN3eM40eUVn%2FoXnLxGwf8%2BAIbsVM9%2Bti8nVcmX5IwdD2wNnU5JxXt0ISnLNrZDTqv0ECRaznpJUdOh9mfh8JtJfUNDKjvie%2FRm0JPTjowpAS5CucR4ck51bh%2Bh%2FWK%2FZzrie%2FaZRO%2F87FlpNb5Jalyaf6dQEPsLInF%2BvV5PiYFwTHSLy9V1iqYyGNWkRs0ijjFKw1qQIL0%2FSlAYXWP5jAcDBMzVH4lUBIs3WcAc3c3qa9pBWFQFF4k5LN28k7RsaYNhLOz3lVMCny1Vz1F4Aof5kBD8qi48TP1QFe2OzslI26l%2BjRt6JKbhGApfKLCDvWuxPjzoS46VAK0tp69ZH%2FL%2FFj1l%2FQ19R%2FQzNAfVq9Qdlt0zllJutRyhLL4FwITjCy333NGlT0z8vaSANp0IdPR5zoYn8DDlsogM1o3tKdt7Tgf6TPWzJYWUD9U7tFoQ%2FiDvaiaM8bHkWXiW9SL9ZQz2sBeIGWx1sep%2FYPbghIOwV%2BmXBvz11Gn8H%2F7i9%2BW0pre%2FwYJsFP92TMl2JyVbrQh%2FGatooN3hWnc7Uu94RIDjbVBD36qt1Odm50aRCC78MMMfvtsQGOqUB316rQHqJKlLlOjryW7LT7YZmAFmdOD6VT4ijFsF1zVKjgWc2QKx7IaviO6YR0eiudCVRrkumZCpaJJRLwmka6FA4xR%2BNXEZOY2PZZPwmAeeJqUHFDYL9M461efMdKMkDUNT3uipK5YD1xqnO319D5b0tbTfsXC1mo2hH1W3pzkZ0KV7cKZdSpRwq8pe71bLjs%2BHTP2ef6lkVDcd6WqMrMgVtFGvS&X-Amz-Signature=f2216c16bce311d81ee6f08095d0184aeea377cd29658111366953bbd3f7248b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=679dc9eb34d65cef5b5b0b8050069ca49c2c21b6efcaad320c4718f74bc8e6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPFL4ZOU%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaIUY86g9%2F6Sb5BVA7%2Bt4hl9EbRynGEcls7Rr0GCnKbAIhAMMc%2Fru6bErz4lUrFGB3L6n561NfbX17EQDXndLZ9G2yKv8DCBAQABoMNjM3NDIzMTgzODA1Igwp6Ih94ktwS4Lqg2sq3ANoGAUybWBbo9iWxjBRBzRYz5vBb%2B1Ickq6I%2FhvwFskYOD%2F7fnRWN3p4cm9e%2B8uHUM1wWK6OdgOUkiXro8%2FVkAKRvW1jKhdp1eCsqSkNCfWVyPH5O9R9TPLXjcluXazGghOavL5UMHftVyD6HP1cQj%2Ff7IHOysvKfwDpdORTwD0yw7G%2BZ08NYXl63kxilTtHOVDsSFYjhhvMuPlJ5S%2BP%2BFGQrKHqIyJA59kL7ENsaLiTopcDjq5LmZR%2BsjM12CEtNUCUSijbkCcZlFCHcnCt9C3jNvEZZnf8QxCm68nQfD0mmNndi21DalTC62ElRDPgcnmWLq4TyJPNdhC%2BBsiFZYrnmCn6%2Baoc0nmVFwUxj7dIEgtcjxgxekqel%2BFx2LGkib2QjPkhRBmkqt8ddw2y6TVVKthU%2BCXJxXRT3RMr8FssgXdWuyGoA1ogRh%2BdQIbdsEa%2Fv3U%2BDmsm5w9GP4V5FReEeuGhadC9ydfbAOCmjwznl%2BxM1YjcffkF5UjYHM%2BYWn9Zy0jyhROVHcSq20OTVv1%2Bq%2Fj5L7oL%2FgaL2D0ASLQd1WYZX3PKgi5iSKiyXX9iJSXC9rVM76%2Bcd2QdMol4scj5P8OPStSFHP35p%2BW2fLRK%2FlgRsarAL5YAIkC8DCL8LbEBjqkARkPiiLCXB7GWSLE4%2Frog7zSPk%2FLFg%2B3pvwLgEIX4N6%2F3T2GrypqhyJuq8TU%2F8%2BlI3wpIwc7wABlXOiPHsRTZeG%2BhgXCKtqQ5GZrQtp1HwRmOFulW5pYQf1MgZ%2BxSHIMR7vguzKf7wZF38Ix2BdkRD1fSEkBblL%2Fs%2FJFc8u3qfJX5jR546OY9cX1SpZgZGbVCCfnSW2vLVO65jF%2FHDfOjWabgEtl&X-Amz-Signature=e2256a676b2517ddfd205769874fd46b67acccb90c9feab13b778f04a3340a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=142f457fb44d59841db7d634754c15a4691c3115589e41da9dfe1a9473f1e1da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LFJ3KQT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPSLwHXPjQocuq%2FFS0NSXRXhytKVTNltjUrp8hdiVtqAiEA9OwlA9bzTV3h%2FT34h38aiv3Oh3RWyd7ZmcmRKl1Dt30q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLVC0blVl5RqpMkjTircAw3E%2BD8O39WKJY4zWHjv3xmPOdGdduB3yARXtpSyTHDhObW5qBRwFws6P5tiv0oC9J3G17t8tt56F1IRBpptnxVcu0uCz5cL%2B58rYJIANJO2JMBNSW5C9wvbcetDnzedr2uqP4uusWelwDEupnkAoOXdE5mSMUP7%2FCCoUQesOYPg2EenRydekN5ueoJqoowaJKCxWIAraa8xhPe5l0qlgkYIhya0fmM9STG5eOBIDWowE4ALh6%2FCEZe5sZXW9oG5r8dOTGBKlNqpS1S6OLb9cIpe6jxJrsahIiGr6rCrkw7fscwPtuqPhJDF84P2b5q156q3wbx6gykB4T8M2In4sTtJmlVf%2FEa6oDkDvApC7fCEsBmj9LTIQ0mwc%2BbadB58sjx5me%2B6Llx30kZXxrrOE91KCy%2BA%2BDg%2BNnDUi%2F0DPkuePpTzC2GtpZYT4SHz2w%2BY9KsJUcMM%2FtbkHD4BiZOT1UKkRfRhZMFV18kaIl9VX459bgOjh%2B4%2FcqsjjH2DdKloaPqFJuvXKysj1ydQ5w5M31vOuddfzecH%2FFwzHqreG9fAJYBM0xuWSjHWbgf3E9e5zZHs5vJBZpmfHd0BFkD1uEzouATMJb%2FywmHPUavQ6n0a135eZwIDWQl5XEY4MOfvtsQGOqUBTwFgtCXde6IYiHGm0DbsTDb27kUBvZ4SU0rGYUJP7jXCiV9bOeTpqvZgmb%2FPpbBcwScGSI%2BLyyLRrskhDp0sM3aKnbnyU5r28wnNF9w0Qg6%2BEgsx4%2BfCOVTf7M%2BUEiu4kW4GFZ8guUR67sl1cRLxUEfI5LCH22l5eMDQaBG3TSbIlN7OreYDV7sWveNKLl3kXgciKZd6zjdjOEjfoKN86CMqjVTM&X-Amz-Signature=a6b9586e997499e9684bc24d89c742c7f66ff76eb987008b45cf9046e72164a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MO5HU7B%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5Za9Kab74iFAfQlQ4Utcp9W76XcqDgsXgRAgRiaScSAiAqsXjpClLI%2BjdKn3YH7curFzPzyuESAN6Vik8tbcsa5yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMRhlyCsQK%2FYzKarhQKtwDdeVCSXla4h8epoVjK07AiIAazYgBL5jCVYB%2BqPXrOriVX85u5b3ARoYPWhMUTjGLeuTTgR2M2XyfPJJ6pNIKSbxAWS1BgVKYbRdt8dIwu6LQDAAj0r5u3c1hTF1BJKAUNWo1d8GvsnBj4k0rj%2BiRaFJSs3eRWAPyObT8uC6QCXvy1cHY9xWNmcY%2BZudk7f9UTGOOBLRkzwKNMblzwmiShJDoJQ94QAzmIAmug%2FALzrji6VF4B6zmwlChQUsEy81j5jkvwXk2uOp%2FEDYpZiD4kb3rmoMLs1ZEClyCmVg31zvZTaSTVkef5JmF9Dw2uXE28Jl4u2Zm33iBwidtxRPSqL63AbWTJ0syEvzRzuTCZ75nmBobZkeJhDEZ%2FzhzYQJr2j2arRdMOaCv3UborBoHTDfNdm9nh2jjzomfNLAZfZo5FXiKzIV5nGV8KMBAdAh3zR9PEBO8h6%2BPWq7TQOgZS6HbRCka1%2BaRSYzjzc6DX%2FgX%2BjnmgCpkWKqUiehLI0IRkieKVl8ZQZa0GkcBtClXz9gb2mJ9%2FsBVS8ZjwNrEx8VLfdhQCq4oy223HRMTjgDfpk8BUE1G9OWrpyg3WReiXT8WYAk6SlbfWzbmj%2FJg3OIghi6knhPEhh2ljuswpfC2xAY6pgFkURK%2BLjBmnozVDoasuWvV%2BqKHVZeebVWpeAdceevQZFtuHj1FuAJe6Dfs4PSsyzssl8wdTv8Raz0vtMKvsruzjzJ4GqxcqNxRHCjQhsorQcDfXkjXSWUQj%2BaP3kbg2xr60MFrLeAv7apTrjhylgQDk5JOO4msJjyAL6JPNY7yxACxuq6Q2MY6DmXEimzBsLStx3BXlDbzLX18QW%2F88Uzpv8ghy0QF&X-Amz-Signature=dd8870103d882c5262af198274547e30f78a9c374c02b71ea741f1edf5293059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6WL6LB%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXyUYTumbk91iEruspwi9m8qhsmlGvbr4clMm2wr6B9AiB9p4k%2Favb2hx8EoAiWAerTUsbpu3Zm%2FHvtRg%2BKMtQVMSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMjAGkP3D4oJZsyFUhKtwDnNrn3wSyXgHKB4tRw8g%2Blv5zrf%2BIpcCiKv1LUDVIP509EwyTvqTLbHqy36NBUd%2FL8HZTejZc%2FKND9KO2UaEj%2F7tHmZpd0D9Ksfy5In6idJNzaFQk%2F142lYHQhc31CBSAgOGtoPS4%2BsxrgTKJ44qItvbiPT468IZIdrfUnVj0G3JMBxsWdnYHPip7MZVIS4e%2FB5c%2F1civ8A47KzpJuQjruXoN4mIgYjUOSAAgShgC%2F0AXADmXGPQAOS3hJYL9fOlXjiQWcP5ktGye1L7jUDhh6SHuPyRQDtZiR7J0LygEeQcbTSVGWGFLEH%2FsWrUygZyynvoQyhfnvkHTkZMHtiqE4VexmDHHhqNp51J7USVdX5%2BumTnk5L6etLtlrCFNgisICwMYJ6qAHFbHi8NSFJYrIVtcsvbAmFU4wQTOQgOqMhEpraD2L0vcEJ8%2B2gGps6QI2krtSCxUs2YWgL1iep7vk7Ge%2BFexvKkwuKChiT6Fm6KMpf%2BhxGx4o6uMYaPwqbKFS9PrPGaf3C04tcULX2HUtWbr1D6VW2%2Bxzhjdwz%2FwkD9R6YdMfhKn%2BuwxLc0BhnVNpqBT7JdRha7VKhIUQcfqNKD602OTy3nGatPsovvK9nWzgtMfWXs74sqxFbYwkPC2xAY6pgGIb9OjVKgd5gTg5vSZ7WFdRCDzFY7%2FsViHNz2JDPaGPkcJb%2BM0t1eP2WqiywoaiP4sXpms1rYDnen9KILVbePQSlTdpvK6O3OBl%2FXEtKjEGV58tR6HkW9vn1NQmiacGWY47WggOUqgVCpX8Kq3ZOoCdPbLiQx5%2BSlagqWuC%2BevuOdyafw79eDCnIa8U8WSAqDLTPj2XC4R80lwEXJEMigKaT65%2FAvy&X-Amz-Signature=ebabd6b40c6521bd02ce309f8411b7faf7c0fed0673ca5be3050db007f8c06d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B33U7SS%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7gHT6N7UxKEoFk%2FZ3DHQEKhFt1Gh9p91Sqlfk7Ch78AiEAgbQyMaC7MiY7WqABE3rMx%2FF32d75W%2BzlVGAX2OAyGfUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPLbqvvWwAv2EkYMJCrcA6Unjy4oP5TdeS1HsNHk1ksU%2FeB6FFhPGMnahhxxsjsO1l52ZQgkE%2FXye7%2F5C1k1gmBGATNX7SR8XDoSE1IjNJ3o%2FjYGKRfKlEoT18xS4jHoelo%2F2s2N21hW7ohe%2Ff8KAbNHLu9LGq2Br%2Bk86Kk2BT46ODFn5ruhHDhsLLBGZlz2A6kcGnJPWrHqs0ZdZW2mdoU4d8oqc%2FDmyFAcBkSisVnB1RvSi%2Bze66dXXNR5Y5f69t7pbzDyGVchttO%2FPndmFw8X6vNSsZWtTXGQv1hwZQ%2BWwkRfWxLCdouqcjf8RvnKe4GWq6Y0%2BaDuTwCGFclPg5dMVl98zu4%2Ft5U8Oo0y5%2F0xQLvzximPCcNVKQcOHJytxVqztUOlvoRmv0ZZAllQdwTtsN4SwL5vJ2Pb3gKUw0SoE3eO8vNWT1UiP4ir%2BBsfdEHsq3oQa9BKxUD3mJwA%2FYW1JYpwDQr6u4W0htXgJ%2FfW%2F2P8nYfkjBPVriHtH4xt8rJrW6q0AzaUTthBMxQy882lGAyEQAs84LFN7MGjDdaFy26UhXTwaMlhVSAF8qzPnOJc43kejXrDZfuZEL9w6vQ%2B%2B5%2BqUYqgJSHHv3hOxyWcT0l2oJ3pNcJopDQ7fBra1tnDJmAglBOf4NpsMLnwtsQGOqUBrnG2owSyVQX4tgSdKLsgJajGFvS6MvyGMDCtPl7IRWyI5AJG5j99Q8sa%2Br%2FAuwYfzo4VpCKzmS6tAL4NYns%2FufKzo7bKM9TFjdoV%2BdewSrq6R3IeGlGXE10ttDz8yLpK%2BMGMD5YJclLCls2Q6R5xMAUTve05nWwDSViLjb553Q6M5aIKHx%2Bp1S0sDXdf8mwo%2BOWZBWmO6UOtumJYRFB8424fxbcK&X-Amz-Signature=12e756399fdae39da1d73217073c1be8bce239018d969da0ec7eac9711a72202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIOUWTO6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4tjA1zXhDb0CEqAhI02c0v7wWIybyibitAjrhiwLoEAiEAuLjA0j7mV5YWnO0x8kKoKndcSW4SFs73R%2BvVWL5w810q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDH%2FQDCkI5Lu3AEy%2F0CrcA%2BQjB8JBrjjpkkp7VzT9Ws2xtBYIpZugvCljZu8%2FzRHMq8f6xhOySfoeiRQoAB3142GVH8pCL%2FP2NSgwXBO%2FRBFKMiKykCCbOmwJWy%2FiCjoonA9eYSKzxl%2BeXd%2Frzs%2BVh1rKV5FVjMBqYrXBopvFe%2FEQoWotDoRWSiBkOTxoaVB4tT7szVbqAimxdtJmCHvuDmvfD%2FVPSQbwpY%2BXD29MF%2BxPYFMV0%2FHye%2FOOQ%2F0UVi%2Bauib4rMmK73R%2FvWeviuHpN1g4qMHo8WjsNFE871CJdfyNq2qnkRM95vNgr7isEvBOwSKlG8Kg9q%2FxoycyejWoKC09afo1mjVrBEAP4Clv8vt1Np1no61SSE%2FbfHj8yQma9thDMnJtG3iqqS9YR%2B%2BRnMYeVNIoVmlcqTOsDaLybZ%2FTFg56kb1mVUbhAeN9vfo76OHB8FF7nGriosRgaekFUdMFAE%2FkJvniPFFkYjNxYiSyXLcgjyZETka1AL8BmOXj3cPDJ%2B4IcQZRkwjiGKRPDzhiiewq61ANqKJNDQGlx%2BWeL8w0JiOCEeRtWCs%2BNzQV0rYiJFxmkRel2YIwTNM3c5hQORzQtFGYhDw%2FyPudwx7cJfZUC5XFE%2FE9b2bjj5TctY%2BN7WlNfGLBy%2F3CMJ3wtsQGOqUBM2Ct%2BdtKUjqua%2BOGbtF64%2BjHSBloymtM9AWi9szrDaccF2v1Q3xsd3rf5IaB7GP7m3CMK1o4vBbh3Vf0hzT3Ca1Xt20d1MNZ%2BmyXzzftI4CTn5IZbVO61eREL6m3WK%2FF4VokGmT1HgZFmmaup3XEGQA8z9lbb2QZ%2BlMuiOFN7S0G6rbJX36zPEJzrEqyoaAGYMixo6FtBPAOZqG%2FY3bkXeJLnQ5a&X-Amz-Signature=9053535db5353c12c5331d6572edd1a546fd048d8c0775c35f0f8df276c81e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=bf73450772727e91ae7fc31386a4aab60a4d71734db996adf381ffb62c9ed1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FIJS5RP%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgcT%2Fcu8tPW5qUI6MsNSHOuxuKTNrOfOitV434I5OGagIhAO2e34jijt%2BnNVBhJZf28ILLYHLTHOLOpjYQxpDdJStmKv8DCBAQABoMNjM3NDIzMTgzODA1IgxdKq0qLY5daao%2FKvwq3AOh1f2w4c08ENbxt5xa2e74tD7O6pzyBxrcSEZHvYzjLNxY1UWbQhGSvszOKj7e6kVHF7kArAUFHi7y7VCJ5200WwZttAEgnPMZb1WYlX1wso3MLulgI1bewvvITazeJMZ78NkCLKc0FF8w5tRJXC3UeVsFdrLEaIfxVopOON7r3pvYe%2FDWji2NcQRzYb0k%2FCRIOFc9nWlAnpLILO5DZiqovX9JRrPff7eb0%2FbJO0VqkwATzjrH5FCFAyQz7IGoBsjxrvggCxW7H3PkEFc5ZOnmVETPhyRXJcsBPBovMXLQBbA67ZPTDWNiI8YqFG53YeR8JEpAW%2B%2Fpaj6LhjsYiZ7Dz3IwaexBfPT2RowgaRR5WBUVidKNBntuL7Lu5HFSL%2Fdq1OTnOHCLCnfCLuOYki7TzpviK45x3wBaC%2F0qBNcMBLKvjfORDnVb4fM7Kzp%2F7PzmGhJOn8b8KrrY840hplpv5r0dtl501MgDdBPGTlAnNmD1Nb8freANZFMt4Btxq4OJrWtzufi52vpveBhEkXYQ%2FvJxSd6W6zN2PUavjsB2yIWu3ukOQTO%2BnKQ%2FJHU68YVXtUqowCA69e%2B6vKsbIOMNEMEgCsZzpsh880phHymCrD13Hdw863PGyA%2FZ0DD677bEBjqkAelngMvwkUbHuUKj%2FPxbaanhlJBdfPb5Gsreof4XJRrgk%2ByfuSvJi8CwaC3uydSNjUdFp9xmXQlMlWfbIIf7KndlAz%2BQyOeFhF03EU3qql0lMEEL%2Fz%2BMgMrbPX7EiHaLt8St2dwS%2BvgdQ3ATn12%2F2vQO8wGdmhf3y6eJrzsIX9zBxV9WD3%2Fgy8XLYru9xCrcuyqmPzXNwxNHdUFCFjp5%2Bk8gWB3Z&X-Amz-Signature=0d0e8c65ef7fbf523bfc09700209bc8aaf923be8d23951ff68603dbcf6b819ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=672ee5a384244442f2b74fed69254ef5e664cf66ed3e1690b238066522609187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=3e5d5cdd6be9db03e4aee29f24c1586d9c56854097facaab2a2f222bbbe85d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=4a315be8345b435d0876ce323d8135c591a5c02c3c265e36b94e9b73215f900f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=58e2aca58483db3bbb21c87865a455067a78245e16dfa0f7ca735062814a7398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=d13ccd3e6c213821af90f0c27802c1e91655177e78ad9d2009d5288426dbf7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Move config.rviz

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and move the `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=416ad3553f4925682897bd29a73e6cb4304a736ab8e3d4dd442efcd11c1a469f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=9c4ddc7ead237dee2d9c0957c12e9fde2ab8dfe84f166922b15e81447ddb8a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=3ee1e84a01cb85e4954ab1af6e8a92316b6b01ccfaffae36b9e1dab7b75dbc2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=8400844443a76d0baf0100e6864cbb20f494bfe66097101ae32ade4d1d228ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGKAGMDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Bf%2B7DaDes3KE1rXhOOZ%2FKxgW4Fs%2BZmX1PsJPpVxk%2BgIhAKyJtf0fdYFFf8jhvpky%2B1seQgnnq5seqFrHm2jXCL9QKv8DCBAQABoMNjM3NDIzMTgzODA1Igwv%2Fqatarig2R82hqYq3AMrS9WefwHLmpiVIPWj4XEyf7GmEkOq0c8uT9FILQR27BIOs6VzKeljkd95k5lcQr7CILIlXzJH7KZjDEsISxGbwnlEraMDSdWZ9hDr5HWDmJCHlKKfs2DM4OdA0jylwjsbFcqDGNhJUWEmWLONNdUnTPwGS4TTtNigYYfD9kfF9xUWp6rOKl0BhVIYRMSLBwDUzzLDR4ieLEbF0dU7%2BVpt93uKx1drgFYq6p6TEbq8Se7Mz0rJm6HsnD2%2Ff1yLpBaRIaAxnNmozBMipCxDl2LtgOSSfw6uAM%2BsqKqBtpKfKWarCx17XNK6gk3UvIvRHnfg1NpMZRervnONaVs6HO7WVTJdgOAyV6ga4qzVVpc5HZkBKjId6qwc863t77cy6FWgjXUeMUkMBa%2BpHYO5bu50LK2YbTDEV08vhvuJcLRx8UwpWx5fUNF1jQVpg7bdgx5QTP%2F7JZboWAEYQUIB%2FU%2FUb9ekSXPBpOGJ0MJLtyJf8KWtetgmlQVUFlATYSRbGBHY%2FhE9eiHTGPkTWq%2B%2F%2Fa8N8gXjpsU6rCqfjBTSaqu1uHwGdWVyEgqC7BvR18ssDiXAYo19%2BvwW4SlvV%2FvZYiXqr2Mr92FHruOOLiZCPFi9w%2B16bX6pL1nVtRiLKjCf8LbEBjqkAUXNk%2BZRhqhr%2F%2Fk8VVbrJP8WUPRwgBxJS1C7CtnBfoTLbv3BVYPZSssKtzhLrkIzI1nLGW03vt618nmhwNwuHC7WTqGs1CmfHwxPl2pAYcT442%2Bf6thHjZCX6tibMCra6tc2KY90GCPWbxMK%2FypcUgeJeCB%2BpHo8cgN68NS1qMkmXER6mPCVN9jCb%2FM1iplVAzHrgncd%2Be9UIZ%2Ft%2BxQ7WbejxWP1&X-Amz-Signature=86373131c2760997ddf3608984ce3d15cafb71bf4ebb1532ad4205a8b08aea40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
