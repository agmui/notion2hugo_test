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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=b95a5dbd0c7ec4c537515ed587012483f8a174d985bacb5c3dc1126a2d4ff220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=c4e14fffa903e0b1202d9cdd65b2ddc13dd8d955afb61c4e4ee63a8fc8cbf9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=20cd4cc328fc764c4aeb06faf67d44daa70ec2f015783ac13cd9114e8a05d1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=497d6c51dc7fcb91c9ce4367b8fea76b4bac43bd635c6e5a31c9922478edf094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=26cdf945c0bdbf8f96461495254a5775f784963968dc5d9504beadd8da79498c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=863a795ea562b4f379636b2c038232404d8c5be0643fbdc7159df2033f3d4b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=f4836cdc43b54ac45dd26c2b2d9703587cde2215dfaa8adf0d5cb0283250ef95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=656400109e8226725ebe17b7c96fb4ddf51abf3f02f8052e9896f06c6e503399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=7a2489f070ad10ad2279b5d2df7710876cef6f405249df73035dce9af527d189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=a0bed466a3f96141e144ffa79d65e5ce1a569e9a107ac30e4b3345e3960126b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGPZ3HAV%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjm0nrrw%2FDJKaO34noXK0Wsg7GcC1x99DczR0mE0lxzAiEA0q9WtLnXnc3QXo0aSe2OMaUcCnI2T6PcCk50FCnXhRAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLUs%2B6SvoTM%2FJz1q4ircA2%2FWiGB01UaXNWznRYgtSbK06CDlNjkJKTHdnqJz%2BrewZis25dteaZbl%2BaWaHHuFEZzrUNZ2kT6wNOHclsKCAICjdTDTSnDWc3J1s1ApmZCx1U5L%2ByFo9vUJzQ3rjAmfkOJZwTGIPdQaJRGBnv21Ehca7aGhGkdcSS9sDvD%2BsbTOWgosuJPl3J7FZlDiFsWfRBMS3a4umc7CTX83i1iivNx9szCdhBTYu%2F5m4MfJqnPfKyeq1PF%2F%2BfAurPgWx4bjRbJcFDkEpNu14a0tJUJTxotPnlJbUPEIwD7h9lVhiRipOAKyiGslyd0JAcqar7v7Ab3Ou0eYNge%2BtxYLDzbS155b4FzJYPTo%2BEwi5W10vdeLhBxIdHoFqik73WF00CTPMaIx3eJF%2B0LaZ7OsdRNU7jYSJXsXmd7FXkKVFKTobbn7jW%2F%2BUpIBXW29njUdopZMSebODQgTR9Qj55Q6vKJwDvgQnYlYrtsJlwg5I7rfpLThPnVy2QfoBOCH2Pxw4KcHEjDlQdvpaUSxPZk1jTkJwKECu5IaGEdVn3qsXev%2BFlCms1jNL6lzk%2FYj0Zrnn5rVvf2z4RtcPCDAh29RBm5ZDYq21E04zI36jH0jHEhPkbwoS%2Bwcsb4OsJJ%2FkCl7MLfEwsYGOqUB3kBOjKej8BmHkmjLYcb3lx8GjEbxFMxf%2FrpD%2Fj4wh0GclpytB6aJ4tVJGblsFRbYh%2BoxujeRNY5J5pyxogPKs%2FQ%2Bkh70ybxxQLIfEEPFYeuNoPvt0o8w4hx%2BQJsm9G9yQeeha%2FC3Cq37w%2B21MW%2FSYSxJHjKb0qXaqHhvTfeOa8Lo3zsE%2BLaPZuT6IXClNT%2BY2X4z3mLrCiD9hPbbRxekVRvZgNVl&X-Amz-Signature=7df2b3812be5df2cd23c847a94505e8857c351a536b5822a98e7e2e0489038c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIWZIRZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCREDNdG6VR%2FSNwKuKJtsEDisAjz5DOvbH0Bvx5vZ7ZqAIhAOh2cMarnsXQGTDJLRgLqJ0Wjbx%2Bif31iACcMxN3%2BI0rKv8DCCIQABoMNjM3NDIzMTgzODA1IgzeZm79LkBXKY1qMskq3APZC75Rm9gs1tw2Zr9gHwfQ76yY0amwVW%2B2qTIJ%2F9oLvJE7Js%2B4PFU%2B6L%2Frk7BiQPgX8Ih7RpY3SDYjrue9MO3jbP9jcvkwJ0%2FryL22939KwW5EhW0P6PL5mfTPLFmoYXaU1paeBL95q99pMwn2nQ9hx8jsgmBFndeRO9aqx%2FjNX09x2SkDPmE2Z56ySZeqHHmvcO4gqQeiFdprfBSot6o99D5SUXiPiUk%2BEsgC7oqd6LuWrOLLiaPyM663paAfDp2NGxiNgrtl55cz%2FwAWbb6G%2FNH1u3TRLSWp00k8XIensiyX2hg%2FkRc21YxPElVUNDocUIeYo%2FGG7mEAjdgvfcWi3PsqbeFKe926VTtfz71MwmlPmYHY3aKNygM5Q5BEm2uLhCnRIayev%2BZJXnSohB4s9JvK2gIjkByhKPuKPvPNHV9TwiNtV7TMbf3Vkmh7wYSmfc2OYn8gShPi8tzA8fSO9pTXCcCYV1hnu1O1PudV1JnrWL52zSlb9WgRwuSj%2BxmJ1WOa6CODrHTFqhPIhwdh8nxxElku%2BdBL53or0RyLv3hRQJ38DZpgzWcRJEtfEuHE8bU9l%2FJOEdPmLZIX3fZbzutGgqhyyrxiYiJl70BKb5KUN7fSsp%2BmXwxikDD2xcLGBjqkAcZbP5NDdhE9hLIPp234GrphrCvwxmL72YH3RQUHMPzvdsmvx9mUhQHz6frzdT3zB2JsMd4PnZjYk6oN303ZTsZUrSeG4A9%2FqQVAjUilUIqJZK9%2BwOaVflfpmB%2BsVLeWRtrbv88iWWnNtfQK%2FdItBxm51%2FurlkwI2rewRB5Qp5jT5eUKU%2BoTjrZNthYl338PEjtVuPT9gnnQCvvPiXYMHUVoU6jD&X-Amz-Signature=e0f723547d4838ab5fc81f2763154057a7526e5defb8a4fcbd03929cb2c93e74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKE52LCS%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEck0xTwvcRTyVuQl3ZKUh3B%2BL%2Fv7eZT93m%2FYLlB8VgfAiBVTGi0ojG35l8XkgGeYwRfMH3PtKtMB7w7r4BL%2FaX1gir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMgyRlNqB2yhWGX7XKtwD5hVIk%2FcWi5SSvUcFLMXgCfXNyCDCGGesFjVHz1QDqd9wi634F2u7INScAgNRRCB48CTnHv%2BCKVZviCTisM11vYuAjDYvCka4Vxswvk96Ue8IdBEXkpyKe2bSbc6mNtUd6WNZVTVyK%2BCjBnX1xka0YMGxPE0IjC9eojWG7ph%2BqSdXpz0HLJ4ufe6%2BN22w935nKMOVdIn%2BerY%2B76OTGwOqatauhQFqzL%2Bhx%2F5iLp%2FrNOwZOSTvX4sFwy80L2RRkTtZOSxiFGXSTPu5HIIz5FGLapKmhkcCR5SfUjPrnKXjeKquGROQMBwG9pGgFxHxhrxb9ocHoYmDzpqksJZpKQTpz13PL9RhwFM4RTh71Cv%2FPvWwa%2FOtQP9FbbdCjkECaY55JI2qSqCcGhjtkQTTuzobWjAaYW4MsdBU5uj3NTodZqwv9%2BaDC0536pX5erx12M69DC7J0xmTA2oaPdflMvN09bAzhdea2wiMVt%2FagGJl%2BKlbHB5jZzzQ3D3TBCTgr9IX3gTroxUqG%2FtNfYChXeNmdCsEEuH5NsQbAA7yNq3vvSkHxZBfD42xqTvT1XhQlkC9sI0YXP5Jtz6fRW%2BcRE8BTkmgAQQBB8Omjcl2WjX9qffaoZsXXRAdVL0NrNcwjsXCxgY6pgGM3mMF2o8uJmb%2FbCRjgMoNbv7WMImFAmYOqvnKt6I37eGVlOP5sW2pjFLK5BsdxJoF8JGoPBfyOsfkJMthbmjQ5D1i0vqOR62igktkSURIUQXJzcH4JOFUSek64wt828M6bhc%2BkAdZ5w%2BRvBu0FGavSXKE4cygBizbj8xWew1HTyaUqnQCIunziAzyqkVTt%2BuDyLuQtgkhjwSAPjZhg1Q%2Bs1fULngq&X-Amz-Signature=ab8b5704c4110eb6a243816eb450ddde8a6964f434a5226f2143d478b0026f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=8982da4e0e40d3d3a2176195aa41e6d089dd2b25868e84ecd7e0785fa4390d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYHABEQG%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBs9Q0sjXHJAI8exDLT3c35nhqwOQQJff7W565tlxiOFAiAf9D4U5LMrr6PAr3DtkOQqOjV9kQV5ejl%2BN35Fct4%2BMyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMLHixOLPSQmbuQ3t7KtwDZ9HM3b8%2FWJHy6zHlF5plZ6AC2rurMp39LbA51kWO%2BWl9htDS60MnYZ5G2eq9%2FPtD0sUTbGqbDxeLAtV1VAaBwz8bWmWTbhdl%2B2B%2F61%2B0MDG9Vs06%2B%2BWSCMNpMXDL7QCWi%2Fv4ZB4pwgYYxTK7x%2BLiqK3mU%2FtMweH2sXFr8t9y6TL1QANTJgGn7nN28WXwhV%2FiGomuyZfvWvdAvsschGD9I0D9zCX8wyjTZwfVxXSEKohhY5tBuhOJkvctODL5PIqWqpB2d6zFv5GPMAikX5DQ57DZMwIbMcT7j%2BCObX9XGAn6hkIRNyybw06JkGlyywunIAUbS5rXyaRd3R80riHXqhRWUOxltA27hHMkexpO9q8OhA7n37Pn6TbTKUqciRVfwIN3vjbrvlGSiGleOCeVldaDePgkVAhhljMltERcyBX%2B9qKOBUspSeD7RMpL9uDEKC45%2FW9xEJsJK17tqdrsQwyP4208cn%2Fj7ys%2B04R1nKpArAAtLX2YR4k6Pq5sl199CF7iHsf0JaEIl4onujKDwxRQ%2B6tfCrE5fpy1y3Y76DUVSkEJRs8g9mMDnLtL%2BzrDpHyZuNop34VJqjpsEepMo59Jncmvt7MtokTC%2FPayETnPwOB9azsKhvZmk1owucbCxgY6pgFLJF6jNai1epgp79Q8EWq7L1SpVLAEU13x2H5GaH6%2FgevbBwgCBwzZ5FeHi1axcej2M76MoNor5HYTjyYkzq3gyZnoUMrXg22fYezLMHiFCLeVjeI5%2B%2FIlzACwtK1QFhsQNhwbz6kNoDx7SqFv2U1r2UcJ%2FIGFlX%2FCdIABYMzMy3dLYEDoijlPyAemmeORCfv8VREx40PGv%2FUswagvc6PdINqH9dtx&X-Amz-Signature=237e0d93df83491c30ef301e1639f17af40490e98f19433e5bd0dc8ff1ca798b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=360a1da304ab477cc9e9a9ae96dff558bffffd5ff1242f7eaa2fe4efbd14363f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BK4IJ7O%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9xCrxIJf7NySk8%2Bg%2Fzps32fwP5RONd%2F3xx8LXT8HmOQIhAKVkFb77x4q6VgYA015aII4D%2BOidbCrkf%2FVKw2G9v06mKv8DCCIQABoMNjM3NDIzMTgzODA1Igxnsoh0Z4o4m9TqaV8q3ANPDBYPDpBtioGJvgXzyC58vmg5UQ%2BVjZ76LJzIK9q1yCsOQXpQe1EzsaPMa0OVi5uQRUYQYdPHLMpwFeb3losqIzhbzlGi30vMmNUL9634HD%2BYYQ0kh0pGnOOYkCv99FNXlcsDagXxOh6jKUVr6940mCrD9835LED%2FrkPkXxkrJwziXkA50CgLGsFsVIryCxmoQ5znGESzMLOdhjX799LDDuEog0E7hP38tMlfylWb6ExEGP4opcwCEOkkb3rdggMYEqxlVKz0pl23%2BliGmk5zYBay8q3zUMrXuotS2LFTpl%2FkNLG19u%2BegpBriHD2rGlzhfc1oFYqGuXF66W7KTR6vbFPZYEv2Q39ulyE9EIwjeDC7ozIZDDL0v5B7K49KzCAwtOi20ggFjQw18Es3wYsjdOdytgl9NvuzCgXAkPdOiX1Jm%2F5ota9IIlEVww5k9pGduVDMMpyG6YqL%2FRkoWhzlcGOTNNSps6bM2r%2BUrkTniJHkBi6SKnz9Fni%2Blwp%2BUDDS5iii0tIJSq8SnyjlEJxYG%2BqQe%2BkIV%2ByCuwMl1VzfPKwW1sYLtY7CJb7lp%2FHgSECRtgeCwHn%2F0%2Bixg%2Fal1URQYcDIvbU62XGK77PFPGnRMGeMnn48fIu%2FxF9RzCUxsLGBjqkAZ9cFqRgUedW%2BRpFORM52eKKgQ5IeUh8BjU07s8ebzVEVyb%2Fun7UA9YNIyuT1EbMWP6O7L9KuZT8ferIndj68tu7rppK10a92mACEd3MXfL3KQg5JtEUaqgj0rxgGnLJVwTNuFK4Rlxb7QPKGrlMXOLEYyX5zbJWS0gBuCZZMmiEylGNbNmgcRbPTaD2H4%2BiGUrw%2FHIrmXf5xBNc8RxYUuv52Q6C&X-Amz-Signature=2723e12ce03bfd71e929b2552cac2d25417f4c33f8d32dd00e80b7dfbb7f2c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=70005847e4afd4729b1fe83d8b36cb6d802b2151fe731328450a816b79069fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVP6BMSC%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQwlQo0dY2F6c8SGKOty8rkxTdGK7Ik3TNL6pzRVvtjAiBgoesHtKVsEP7S69yrIPR7I%2Fi6oETerFBQwv1cDdApiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM8TW4fJZHXn3EJnN9KtwDJhd7czTzE3qWI%2FnAv89SzoiGlUeKY1lw4biZQOwLe%2FR%2Bi4HJToeNELdv11bv61nnT9oPYs23IN7mF%2BpEp8EWY5GAr%2FUvjtBYsR%2BO3nMDiFkU%2FJcyiniJIxBohno6gGXpiK40FpcBHZV%2BFcBlQ6R1zoXHgCkSf2FDLoWP0vQNoz8Aa793HHGdF6XsYCxmr4MtIHLpFam1KDoRWeWV5SwSHLi6gYrfGCOu5HyGkDQnGVaawNRUcV2ozlK4V1ux1cndeTiwRJ9EST2OK2N6cu5eQryhCJp4OQGYIeIr5vVhjqyXXIdc4R7MvNClms2o4YmmWlEnjsikm9HwmHMsIkmxnf%2Fv3wJJs3X0WQ%2Fsx5sPGN4X8YV1WADEaxf%2FHLRBQcFtyk63ejwlnw0nUiOsB8xCEZAPIOXsk2dolQcDbWiBa6R%2BnrgXJk32KVBOf3OSP1IFM9uOq1OkqSeVfNxX8oZq%2BqUv5kR1jZLqOh%2FVANoKzInF5nDkQoECk4z3moqb7b6b4%2BYjpdDZyJe6soIde39iKTWFCUJ5OcRPf%2FLiL%2FVIK470Pb6wSx2D%2B08odOWgjrNwnwW%2BWkUq%2Bn%2BxLuBxo77%2FQxhHl9Mzn2aPj8Shnhe3pETdDE0yPddbt5uLcGYw98XCxgY6pgHDaaCcbynOl2YUNIFCh14T0WKeZFIVI06%2Fuzx%2Bc9jWeEHFRC0%2B2JSRXyETDpURp7Z5IFg9U%2BQTMx1CFouD696HfsibQDJQhME3K%2FQZwNjthEXrR0%2F2HKoycbVags4IwWaKnVErE30Uof8cApMvkiFnvkkiVr0deLI%2FfLWWVZSFa1BCoBDR0N2ckJclEDREzYweLw4qBIapCDiZxj6LAzCyjwRH9mCk&X-Amz-Signature=6ef6ef816438fdd6c56af6ff64cf100f381bb578f06870412aa741a860463f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=c29cf2bc7cfa8cda910652397a05cd251df4b4c793eec37d54d2bc75fae52df1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q5XAEWX%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxSurXdG4fWmunJR%2FacMuCEZ7WMiO8XFG3OmA8yBcA0AiBxlDnSEWfJ3HxFotBAGabLWR7h3t3c8W99ylmu2MubuSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM9BoSCM4ErA60f2ZyKtwD8cTvnxakhQeb2ToUr8c%2BL0XXazMNhHa8M5gidCT4sZQhGRRnsEsVZ34sLsj6%2BsFAhdUuZIspK08dJNzrvB7oDZbteEsyGlQkNOx%2FKYiz6DH%2BaYi%2BXVMmGjHBdYiSQQbAAEK40UwcGpmqDXYt30AUG4j3REWgzHcnIGKmFTNlR%2BT62oVFty%2BvpQap8GWpbI04TK8Rt3MRZQvxGK2L9nJqsOHBJfeY2TSHegwkaU2ciOiYbwJCSVHcc95mONKKSfcCUYsWHh8qdQ%2Ft%2BDuaMgXJ7i%2FK6JCu%2FDNZUqi0mVnrRj5HfSnqOclvjdn0XNgH1AWxLqrtyWERFSnHIxigQ%2Bdn1KTu2trD%2BHWRRIzsn1QmIZDAF4PoO5KVRPOpUbgqQNUWoaPhcjPhnPvchUXPLfDdNPQ6%2B06mahmnCnCjzjdHj9KiUg4Df%2FgrWvKsKlVcDh75kFg%2FboffwbxQ2ETrn4SBuae4xHwXpL0aUQRtRJHm69UOO9L1NL%2BdcUwYOkjhj6ovQ7J2SZ8VGhNSyorX3BfscrGlkfFjIAFzbtEHWmBGQOkuoUFks5Hv6N1foQQRjJvgyg%2FweENCT%2F29Y1auiV3pZGPrYjg9aiM%2Ba2qUwE6AanXuFULG%2FNh%2FYbnIjV0ws8XCxgY6pgG5NAx0lZ42rOV2EtV3vj7AfIhIips%2FvdWPVZmmq7GLMF7NZ%2B29sJgNxnhi1Gds51q4e0B3wmflZBa%2Bo0Gi%2F%2Fuw6KHFAK1yA1zaOqU2iM9Bj%2FbbDmLsEIk%2BEvn%2FYvIDcDmWNA5N%2F4Eigvu3dgXQT1Kl0CkRf9rBdbPNgTZezIXzw96un3lkQdjzZO0OEwL5I5he6i%2Fh7vBnjLiVF8vg8mtgL5H%2BjJiB&X-Amz-Signature=b2dcac73e66402c7d35d7ef7d4f9b2fb65a233ee282e87acad114e1b5e55ec2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=c38a37b4131f23f95cc5c20c61e996826399cd17428211bd21541ed79768ef02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5WHXL2%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVaz1VI5zjb9WTeK1%2FHfqwQRD9dPZbRUzahGd3CgFL1AiEArZyKWB2ZTeQvHoXKZRlPoJjKtmwDYq%2B%2BCsldGGbC%2FIYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHXftxOp4RJ9iD09zSrcA0BYy%2BsJbJTE8QbUSYiYDCCkQXSja10%2BKiqjjZHzZ1rch9lbF0eh6MvaaZ0TZR04%2Fc6XGqECtVTPIOf%2BTd7UZQ%2BCVs0%2FmhL35lU7yeUYMzzy9slKFuoLm%2FpdNNltT6PxbkaGH6bCKXhgs0Cr2OUvInAZuNjnfugg8Sxr2dqNw5nhMz3oFiSrI1VsqzsUn%2F1w2fBX8n7LzWGlVMcliT5ocbJq9aBtm85VedCtWTm1yR1t7fvGaqPLD4fR3meHqxs5ge30XIShNxneiFFMTmtmKndibghlypAqd9UFDzkT1TSQZ5wVQ50X9izqwA4AZIVlwzlhRIFLiUu8zE4eqazgwI2JMHrtMio9vpOMZd9SiXvnW5eUNBVkmluXZxO9fZ4PMJBDFJ%2BSPuou06kXxFMOS8vCxoDOyt8rcej1y%2BQoAPnSyK8bWf4tQyWlvHOJl2KdRJaTZmvOpDLjXgd%2Fm8s8%2FIGILlJZOHinK4pb0waU61tZ3lrAIc5%2B8pGZboJkrsxWON3LHFalDak1r%2Bgy2a9A7zP2qBMSdCx%2B3esI%2Boh6Ytq2jNMU85qLeJslzwqAJMWPH2eLySahdhlIYwz49ohxJg6%2Bie9qIrM0dG37kZKWD0x4yppuj8wuzdjogOBoMI%2FHwsYGOqUBwNTv0CE1DL9pXQEKI7%2FdR2wTfEFnBlToY58Lw3mGl73emPt3Hlym4NJWYVUOE1AHbelp%2Bd1LyMjcp2H6HOrCieqBUbGUqQNJo2nbs0uXoEIvor1EmmAZQIZzpW%2BeoLlpWThj0YOsG0kLTDndjx01FO89eFrNI6viee2J1CVEvfi9cZn%2Fpwn575JbyXWsI%2Fbq8WQYUahGAlpFHXPf0KWb2huLQZOu&X-Amz-Signature=851e2ab73cf0c2532d22b69b123e9338992909fc082ab540e0b38d0d588106f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663YWF5IL%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc35M9DgZcU0O0Ulxx2ZypxvTRUWOSz706CbT%2FNLCBRAiEAr0P7Fl25N8IivTpUst4sZhZuUDqXgisGuVuo6pZr2eAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLZhXfV6n3zSsGtkQyrcAxsy4BdMjVOXT9%2F1n8awejaEdxvDQh9msCTmCUOR4e4uTexvXEd%2FOPZG%2FAEAT0EWOFVSnyyMUAvI9BnTN%2BLT046czoXedVMk3CBWsQuRobLVe%2FwkGXtZbkIt9n5izLziz9jS5AvnI%2FzmzbGQi8Cg8CkY571UpJUlYoldlDdClCiUICY4zMos8tq24T917oaP698%2BuRw07dQgrOeZa1PzXQwtRIb1x7i%2F6voB4emdgwH087yFgofj4MM3%2B62AnXG8v6hSbx%2BZy0jc9%2BrJY%2BElJdbwk6jAtmzSh%2BenuitJlENoSOGF%2Bj%2Frgq5UPCArLyqtBVZxyHyVl6kQ1rkj9DuPoF%2FbTZdfbaE9SubfAgGMUkP4Fyl1F4%2BGxFmquBGtcmrBBcBZbNUPzan2eFAraHA1u163vC47stNpq8btY8d08pZ3P3zI4AyFmz%2BVPwIaSfQeZP%2BRM9OeBGGxigDS9moFVKja3bJy%2FbLjuSBzF%2B1xrTnofBWwQBxId9KKE%2FHUZQzaTgzKcbMvckUx1rZ3NhYPHUl2ufZ2BL%2F%2BzEaLwdQ33tUfso9AZ%2B6TlLPtzBIVNKpENcMPKuYZC%2BO9afOPlOCbmxxNncJ%2Bg6Kinc3A5sWxQTfVbvi5QP0%2BXE3g6E9vMJrFwsYGOqUBq5Ccxm6KfFrfcsXD%2FlmbMG9n7u3lDHqj5wObuLuWMc5n3O75Cu%2Bk9%2Bf5xOooTx1frAZbm5aEngrEitcp6rUIqYG24e1Cbt815XmgC%2FTq3i3fPVAfgWCwuuHUBPI9zWJtko7kbqQWfzQ9fJjJzCeWpRNyxQ0yeBMMTDgJA8xIG2Nna804v36R5Auyna2ViikWVkj3drq6TMMMalAMjDl2o6aFslG6&X-Amz-Signature=48cad71dbb754e22dfed3014b32e3b7532346b5f3f782ab9eeb883898f637ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHXTAKHH%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbdSxzY8CMAv0iCY5CLi7lBy%2BI5g4XpmJamxI7llOtZQIhAPBCsUWT3MptvecKFvzisjYIc6FG20AyxiF7f5lzkvuxKv8DCCIQABoMNjM3NDIzMTgzODA1Igybob176XxlxvGrifoq3AP7Pw4uw81GcT%2B0ooVq0xcVjdGO8k6%2FfHSzm64oAwLy2GphZCViFILypJUlZ6T%2FG5P2kahZmVSum%2BKbpUaGKEh0PFxsUDj2dvsZK1vwU38zzGmm9LbRB98tMst%2FMWhpEAR9%2FEGOHTsxTrLe5HdurdjPXV5YworEiHgzIpnQJn2qRetAEk9fK87sK1HYTMVKh7pUKnYlkN8G4oB0X%2BgobQfavf29yF2ej8wOeH5MS813iTt3kQg668Os7HXjnVEtgqip92GjG6P5st3YW4jZpRQG%2BAFVnstfpLiWgTpEwcKFg2wLH2A3nDWd%2F%2FOVLR9UIfTjd%2BPM1izhXijkcX%2BET%2B0MhOFs6w1jv63EyvlqRFax8zvuB%2BgNAmTEuHNvdR%2BdjccPN7I4%2FaTRGoLoUrQddUIQQxB1Ce3HeKOh7g49NJnggL7qXE0aDQmEDKg%2FcgC%2BxKMVOI4ii5nK9uLPRbz4nSehBb7Un5Yd90Iyf1pwm0o3skPdSRfZe87jW41dktnvTpeaIpacNJt1CZ0xVjrU7g8I1OmEcpLTz1tmrbHdqDzWaO50tK57AuC0nvqAfIPC%2F4FpxfFHYwJ7X9bmz1O8aFUUvXAu4TphNdw5FSMSeYHNFd4Ewz5YkT7b8RGD1DDexMLGBjqkAdI4FXgJ4F%2F385w7mYmucaEGPS74ZT2uwoUj4uaMg0gI6XNWqzIFaElNc4OWDI0HM6GF8P0%2FllRnkHW4ZnmsPvHrLCT5h4Uo7BQQzku%2FBibhIXq1CONQmWJkLBB41RnUAWYpiXSr5HJqHTDvQMODWfBlIyOwemLv4Q1Eq05Wh4HDIFrqf0fO4pMDDp1FRPwM%2BkfefyIBIj4mFyl4ysXpMMjTl2T3&X-Amz-Signature=884bceb23c1301eb505877bdf6ef16bf68b107dc931e98eb3fc267feb51440b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=1584c6e269ba69527aa579d56c3099ea26be19c645c4f820e27a55c097a0e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LVTRGNZ%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Mv1C%2BfwP5bXrY2GqrbZo8COG%2BdO0JjjGgCGNJFd0SwIhAN1x7iw7kzKSInFOOeewEA7I4ya12vh6fLNZmNogACm7Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzYij06%2BnBKhO1AoM0q3AO9SAmJ2vS4b2iVIXc%2B1FPImWocA7P%2FM5tAoZXehTb3Wd9AX%2BdTn7M4GPy10GatQlEWh6WjWbxSeAuFWs5GEc3tRclzO%2BxkTWqqtXt%2FOtWTHrpQbnwd%2FcfM790p8l4DL4glD1BERhKSwJoxZSCUTSarVswWax9%2FLLeIGFz%2Fe7ijFEod30WIdQahVl5gZNbucsUpvHzlPXhGPTkEfUtoPHXf0xL6e2ysvtpfXnKDO5%2FNNtRjdoTCcoYzCdRV6niejXIlxbDquTcm1hk5BTm8tzV91D5rezrgqsg2x5w2fW207a3LbSrRA3XRvXkqSFjQqXdxAw7qnowkpNZ7hLo4WNxRMpFlhjTPQY2amiP%2FdRFqrvTHHY6jr7P5Wtt9Hy1jsNWGMcVNP%2FoNSoRJXMGzIt27y8ZKgqWlITaB8e%2FTUtG%2BYkxqwGR8249pdp1zBhRUn4RI0JEQlmBiZNluhC2ZaPs6v4CdwexF5hhDWYfAqXxDCZvpXDX9m2VNnzibLDmLW1VDutZL5G0vtDscnVg8SczWDOV66ITXj3rS5VfIIYgfMHSqMOjkBBOvqI3e5ihbUKvBHt6vf%2FaPt7wew2xMePp9%2FIwhk18ZIKAsAZJhmPl2ChWTADEdES6GMI6z8DCGxsLGBjqkAcXDQlzvdGc%2FS3VdIl0YZDPEnPCAvIT%2BONhFx4k7lDGMQ%2F23cuGRp20%2F0KCOmwfgJDBQ2lvQoFk3WTtNIe5LDsK09Aw6SzmfgseJC5saMcufPqgjg2xBHXy6kj3RkapbQCogSzbviEIREM7d1JaslInddv4rPkTlYx%2Bv8a8m60dANXg4Aaoemyej8CZjGXfjbf19qFSrJPl5SeM0s7dxySu3IHM3&X-Amz-Signature=ae10a772e4dc1390debe16ca7a91da4b6d704c98fbd0c460f573c0af2c6f7590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=6dd84651374d0db9c496d219ef64358933a0c858e3baf548f92d06b23c0227a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=9f0011bc5719e3b0b1d3fc999549fcdfb539fe9d573d2688de417014324900c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=2266329a6b81f19a06cde0d62a7d205870ebf21286731b2eb3522682c2f578d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=78127052384c825997bd9f0e25f433c7999fd61d9e173bdab7012d17a089f722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT54G5H%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRhYBNZNodkadAw90mrYxjVn%2B9dcDh5ADAHp9KiQz28QIgQ1S%2BmUoaPEsYueFwSCVjvqQiCamhRng74qeRVvTzIuEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFzgmvznbTrM7eViQSrcAzac95lppzVtqtm6Tc8tgJkbyM2B6VyxLegsEpCMwvYmMy%2F0mIpRt2fT%2FgAFV5S1O%2FmyFoxUE1GKQq7Gpzet29%2FrWPU%2FFlT8QNm5o3GLz22vaxosCME1ILPYpjK3KONqv4%2BHrg4Fqo6GPGRhd%2FsJihoKpQZFOtxU9l3sfFheb4DgNJjIOKY4HBV%2Blshorq1FTZQkX40IOwy6X2vhKEIVEn0LXZtYKIYxABPZGb%2BMwpig6HZre9fwLqjTuDuBXIxt329StM9iydNPbaST2%2FAbS%2BaPpYsR692glNPbBBYYXNSoCcTlRzugSBw%2FgRFBgOXTySK53TsbAzN6QsuBsi%2F%2B4BlpgPIxGjTAq6Kj636w58I3vm0BvckPpQdcfnyxt4VLP%2FkBPB%2BkEt%2Bi8CL5VKXj8UoffzIGKi2cOPdJXLMolohhe1LDjy7gvXAMuJh478Y%2Fb9WXGqMhFlNLAdPpJDGTVo42RbyCQwSINAOnkzZWLgffe9B6Eoq9lx1acYjgyyTcPeotddXYyypS7Zm%2FAeB%2F56wGyH2ML9D5usOguZr16pXRzyEqHcu5TaAwXcRBV61O%2FfVJ1HA6%2FTRcITBZhxini5SCzkRmDLsJKZWD6N%2BRj1SoBVx9KYHC0DcrFJEVMJLFwsYGOqUBiOBHRmLLvDlBGbDIIFwe6nAjOjspuz7vceGAOz0EdO0ZyA9C6EwaqnQz%2BEdHemLHIG5iZRQj8peOY342GtRK0efc8ymfSevwPHEeb%2FBBfk4t%2Bgy2x4sBgAvqFffrpi9joB1XHtG2TGJrE6VDZfCTpJXCWIhacKvNXb0C%2BUHQW03QAC6Dm%2FcJWPiuKTxF8hD1n97zGa6yZI0KxbVhXKQmZngJLZsZ&X-Amz-Signature=dd6f634a6ab00bf81de33dd8b7317dc26e23ff8658038cadf81e8f4491ce34dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=c9e124d20aa3c7ce75f0d1f5f35b3165874f2b1f751e029957ceba00dac808e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=09b80813c1ff64a732645a7075270cd3865078b5585d64b58b94b6f8a9546372&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=2266329a6b81f19a06cde0d62a7d205870ebf21286731b2eb3522682c2f578d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=52d6ef844977d7fc5529b52d87e312d4b58cae81e1cd2cd8447291637f0638ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=ad8b0f9613070bbabae0ff25f39c98bdd95313e79f8ef052a50d85b9ed812e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWBJCTA%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3UHRsuQrNWlOb60bqEarynSNZ0XM2guUUxrksw4B%2FAiAHc7wMtPfkU%2BN47z3Hnc6e60T7YTx9yaca5SUS9QqlVir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMQHjHmLCOxSXlSwJsKtwDJUdokVqS6Kej492v%2F3uiqNc4OjIti8RnchhF6ft0hssdTqKY2CHCsElGlGNN8EsjSCY78%2BnT9sS1QUV%2Fyzm0YDjesXkSfM%2F8gVOUJnzCogB1h65NwT%2B3esaF8LHkNgf5OJQxYyXXOHIbnLibBCrCfe%2BZ%2FQ03uDSCv5FyZJSG76tSeKfr%2FSWBZUCtCT%2B8XdEs4Gf6iKvpphAXOrQ9LsAEG8Bd92fiUtFuyysd2m5ImgRwx23qrYpUC9QvmGiA42fHiHVGKI4vNPovzk77h2flilcIyiZt4J4NTY%2FFNiY2cfz0hg8%2BmpW3VYNjSiOE%2Fq1MKOfDIjqoHzP%2BRxCnyrsdFr7s8wSIoIElTNAQkqh0TaGjsgXWcbjrV6XzNUk0KH3Qf3leAUH9hDvMmizR9I0K0AYWyNKxOQmXJCEd8M7df32%2BOPRmo%2F82k%2FkSLFRuOtJsNWghNlZF3QC5Is%2BEZ5qDmowUWwER%2FRrgSYtDSqxhcrip9rYRHgE4lZF6dpAi1hsO8JI6Kgra71BXVmPfQ63Dwz3TMAtuOkyVF8HlHgIpFBf3DS3epo2IENYYPF1XROdKrgYJspTe9jO1BUNas3yhOqyaApBd6BUWVJvBpnhMgciXZAYMfivYvYojrhswhMbCxgY6pgFV0SZQnZfjd2Fhq8LwI7YDLChK1JmHmidx5gMrOo3VsRei5ZCmSNZhHTBweITmm%2Flll7hfhkoZ8V%2B7wEqP9cE5FcVGghtPP0BnRytfLImLtF2WXXXi62mKdpT33xNn%2BVinVXTmsT%2Fc3HfNrnLp0IZ4CJjRHWDhiLmxE%2B9xDnCKHRphgEVAjMb710XVBFn5QW3ao5EclfCb8WRiG3a7sglG8vfA%2Fx8e&X-Amz-Signature=f6f61472105a01d69f2ff6c0d5077045f23106526f759f8822d14fabdbcbe388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


