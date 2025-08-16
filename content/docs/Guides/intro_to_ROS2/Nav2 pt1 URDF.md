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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=4365744e482ef3888247a94828144834bec3e3a1142770a1b3eaa901802256fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=ed3eea422d72a8f0662ed78098c7686f67adcc874d68ddc470ce50b795b62e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=4a8b6e9e8c953cf6de79720cfd4a4a83c8633cd2a1f04363386269b5c36b5ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=658d913737dc0d08c6730b100886a930f099b29f2d62f9c8cd8f24f086a4720a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=353b55a4dcadf1e1c867834878e8e2352569006d620ca184f0abbfca17bc0386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=df7ac4dc0e9f6f2e8db64b4145115ebf4108c0fd681f07f3df21892f7c06ab26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=90e31b90c110023494b8ad752197c5095b3b923f5650dde70b29c5c4d13a59de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=025ed9a63ddaf1e91e1eb4c43f8820bf99cf91ec037ab1770dbc903ac3bb449a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=18f483d1aab73e8e7228b45a1d2ee1df27654f0a9260efb54f642ab9c702fbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=99f05184e5f4700f99409222ea46279eb411c1fa5bbb778e004eb13d9e49bb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRRQXKGI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDoPHMcp%2FZMA1T6Sz7g8w28vXYXzNZRAk3OWJzKOrXYCQIhANEgerBLHKAj4aG1hRs%2BSq4ZlmRnc%2BJAhX%2FFuQVj4M%2F2Kv8DCHEQABoMNjM3NDIzMTgzODA1IgwXwpLeVRq122SQkvgq3AOYXqqZxFKSUd%2BOz%2FvTUjNwnruyM4SXwEX0kZ8YFc4SONLqbya43q8CPi4dHOfvW7zBLDGSMglvVnjlk%2BsGdJfLME%2FyPiS1U7EQxshnu8zGel6iSM50x1%2F4MtGE%2BROvcRigSdWgeUHE8UpYj1IK0UDy45EvUio2cfeyZb0%2FcyzOr5QAfLgS6sKQ4CkK5dPNxwv2gAHVuAc2J5LmUEmq%2FbzMcbaPOAH9U0rgSBlTtcQlLZkh4awnIGUMGL3ERVPJ3Xuj2A%2FJIvjNWHWHiuz3i4SgPK7OQJKCQ7jzen7YJrfILIsPekBNcJFC5fg%2BzX1Ppedjw5h2W30m4QHPQAVegT8sTITGSVCq0kVD1xTEaMz5sRF9tJfpVEN9FNYtCztkTskRtZCOz5Xv%2BsQQOEkO3Yqd8kG3g1ci3mnYrAlHV0%2B0fMWq9hsZo27aYxQLrk%2BcHYBdDMooASdOGKRhknVN5ioB6llSrMH4zCojlEwLlp3ZOW6%2Bt9Flupq2lMpZVmezhKVH6LYAQfm6OOHlb%2BTxUL69h8NpykiuuB7Re1waCc6GvS3ZVJYuohCcJsZkUQ1XWhsNDNZsx3BmslKPvTcthgqWJ%2BjnRYchfsk%2FoVl0aCn0ngKy%2BxTl71ADsPB9EDDF94DFBjqkAUWfeGPD%2FtxN6gCxLtz%2Fhh5slSwiN7efFecoFvRyqCGxZyzFJ08VUkYQ4%2BY0vd39y96ToKu5nDI7lK4RGEMiB2ICbZ1V7cP8YaXEpyNIgEoBCTlckKA9VSF0Vi8ZJB1FqLkKZBr4qvtPumv2%2F8oFvu8lf2Z0XmKh062gnXQJ6YWBlhdU7Kt%2BWwGnRKSwyFJ191Hnz8ZtIBroJZYCOCUReGzHXABi&X-Amz-Signature=f604f0362a1890e6e54671db6b0a45bab092bd143c7ed95fab3104e9cb1dbdd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMH5OCEJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEN9JAgjxIEHU03csn1WnUZAV0KbtJe6LKICKUVVeOdCAiEA%2Bs0GHqDD0SQXY4MWCPhW4DNAFCjh1A6yq%2FAa87j7rUgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNK1BkIjZi6UeQ4a6yrcA0L0rVmI%2FHvubaY64uxuA1IZWbzrhx5qKpy8VC6HM8K8gUD1PCE%2F0JqdaPml5f8tBGrKQbk%2B%2FIKj2MVR7YzyyCWi0yXbqQGXb7UuazptaNWgp%2FYDx2oulDSdK2A35AO18tHy3%2BpZuDCsR2gIBHHkfKse9PJxIS3FdMHWBxwA%2FQBnpqG4VwhhOfx5AiO1SvsSh5Eswl27jIkVVdwfEh5oq6R%2FFzQDvPfsRYD4k%2BrDqr0U%2B7m5ItGE9l8nW%2BOjTG0lV8tvCQxo%2BArffpygvXyCy2wgs901YP2IhD6F1IvMJ9cFzoltLD5sQun4xd%2FkSzWvIjKkNY7fWklCazRRvn9HoDBnAtiZtjpmhBsRO6o5osmJpeRiTy8PBKNqiLjSzj6Xd246RfLMSnbsSj7ZXX6fKGBGac7orey%2FxptSdJrgTKAtASVTcFGOHDljbOIlL4roBN2CHa1kcPMx2q0qJHFVDghEM4VkXkpgNMxiXzg8SXo1m8zeoL0j7bHVL7LyyFxfCUI0c1wYfu5LqddfRTMIxRjWV6PacvhyutKyIUVZQsMcy7jAH6t05i%2FZWZai%2BxzEbDO47yNs7WvAMhcacIqI1xWOgmW29whSrgmWeVvaqwLt7eE4P56hbsVcJVuBMMv3gMUGOqUB6bnDoUe%2BTazPX%2BxgjNc4XdJHp03S77qrDato2m0UORc5x0s6NJ82jZmzJZFc2sClmxMZMJbxzyurAqvwgOJINvLCHqZc4rg%2B8r7AoFCeQ6kbN6CBrtt8ZdSQxpPcqJG0omzAh5NtjGNbRhpV2JC2sViM%2F0mdQuMmOVZWglW7E0WDlAHcm86U7JnKlD0lFrhYkU4Hcq2PReITxs2DwJxSPpjBmh2k&X-Amz-Signature=5a17199f9bf6d1882fe8ca9037c7f7ca5fba6fa6bfe16c3ce19aee326bd15100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6CZZ2Y6%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEAUXwU2Wz32NuMODEnx0rG0%2F6PZOCZN21KX5pKnNBOPAiA8pDHVq%2FTrW25GnZyIaveP7FUBT5qn%2BmHdyNzKzEvHtCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM%2FNw7D5gzLp4Hzn%2BjKtwDHe8klgZtwwx%2BShpxO6rsdgOkFMh%2BemQkhYj2dXI84gMOm1g41almxT%2FRJliiVFcT9d903L%2B9sEwKBfIjypr4nb3CZcIQpFapJl7tSAgtaKi0xzWou4cvPVGBaxxomXsd7hewEJNgGa6aY2xpiN0681uVQteAPpG5sTpSmdiv3v7iVhQwJnlUqO0YXAUsqCNxelq2b5J80WTTCrZqaj4xyT3GnB%2BTVIl%2FwmTfZGxKOgL%2F3QZyWF4sj4P%2BAQJvFFUilrNU1XoQO41dB1UMBWEENnsdIGpHespzWev4MCSa0qZkTjVhIWwKidnbTiYHX006BXR6uR37N2wHRqEUEHQ3grHYn18k2XoWf0lFNe4EolsW51GwpIF9d7ZuZyEXj9j8tLWgSurh87Olsi5ZCTACHdIONrrHHRcavZK7GXgZJktL81Bprp2b5lSNPF%2FevZZpkEOibGcei6gS%2FlUCiuCQVRgnMeXBuWkY162kercD1vxdsNAzwf%2F5AsXfVRCBN%2BNgM47iQt1jJYZYNhGOG3MO%2F6oKD3F3H4errgaOlEij%2B3m3Ryn9DVg7FAmUovWbLesxblSWxi3QiCa7f7qfRVxU%2FHcMZNDJMm90xjRcHjODz%2F%2FC9GOh4sC9NC5iFqQwiPiAxQY6pgFml97yQjFsa2%2F8WskDCsKaPHpRUJBoD4QIPneM%2B%2FgB%2FiuAReXT89KkOnK6ILs%2FqHTed1SBOPNPcwPDJ7Ql%2BywZWmfwio6o6ZBSvhoAMmNxkA%2BZNWvSKgSVHfU4bf7NRDfH4wgWY7fi16lNiM7YoqSFMN2ykHkkDlDTFzxiplLJ7dTLxuIKHk%2BhVqCBUnVnDIPvE0%2BJSb%2Fln3RSw8e3zydK0CUHcNDK&X-Amz-Signature=36df385a73e34a445aa86ed7474f067993e93839fe0f45dc718da9478e2e3590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=acdd381903599c6300ae1c161718ca598080ef693eb2c32301b4c078cac26ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNHAQV54%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFT1FTEuoFRvsatJQ%2FFSaw%2BG7YmzrF5eeG247X5cm4zPAiAEsRnc7R6QnS%2FmPU6vpeE0MGzvx3H2y%2F9M3ES333hiZCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM99p7n2g8z0Uv5WJLKtwDd6LYsGzVPUUYEbRynI3KwMV3kl3OSW5WwbPzgcdmyE%2BRW5nYjMMiFxtKK826R6DwQ3y1aNvgeRH8bqplxdg85GgpRd5M%2F2FR6bljMA%2FoB3v7pdmbWq%2BCTbqnPUsGCvsBjB9EIZVcWeRnz4S7H8KRe5rv21lFSDiSyirAFdTXU7CtVcK81483luPtgoOyE0AIbXFrUoxX52v7WbXdujZLVI308czVj0RZgxG%2BYjo9XoWJYwqAbDXsuaGZ7TvEJ%2FtSEpKjKoLT5n8cP6IaWigpEt9Jq8PPOxLS8UwhOwv%2FfGfQbR3OaboKBf0s1uPLnznOtZdEhmkPOefXRlNEcRrHj6cL35EXqzjrQY4E8JPAb52ZLQOPppAJ%2FLQY9fl6zSFGOPkbRPypy5ZOef%2F93%2FQAzFFGTmnjQViRodtTUqIRx2n%2FbQDMuMtQHVWY87rVVGqc1OeH8op5HDN%2FjtP3S9QUPTNNqESq%2BRbxoZa26N%2BBuMsKHIh24iWh10Bs1mofLvMHv7a9QhQArORNp4pWi7kWHXH%2F3tb4UUaSw2EV1E2CWt46WhI%2BVJ%2F5N%2BstgSyeP%2Fgmw4LZg%2FIRNua3CF9%2F0aZ9LXPksIe5YPG%2BONnaN6CPW7TALIEdONPn6WLQsZwwkfiAxQY6pgFZvw8uczDFfsjSk02TCWwQTNmUpl0Au1y9Zkq6%2BklHvSIuB5YTHaWdylWXMCXOmvmsI0%2FN897WNJiHDXcskwIrQ64etbw%2BK4HRI2OY0CmDnodSoQZck4b67gceGB9dHbRO5yiDgPi4SG3EaSISwMamXqU%2FqPG11dinU8Vzgx5hmfbG0hEvSCDmyQ0jh0fCSxbulDUVoqxGeG8EFdb%2BllRBcnOlKb%2FN&X-Amz-Signature=61662a0684e3261ca683f490df6894f6673d9f3338a7c9c1ad2a3d4418c3c1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=0dacdd7c1a6ce8ae515771f1289c7057ca53e2e2ad48a3493875186b1df8a65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T65ZH6GQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD2NBCn7S3jfTt7avvB4BSgGVAuhvmzMqiH426E4rFtmwIgIlxz18SjsPIY%2FCvaG3R81i574Fk3zTKY3Th9otJCimoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE4H2RL9vohemj0M1yrcAxtedc2DqrUSjYh1FerYYDT4Rj2rb5SwmomnYOa3LpgOOcy%2BlXPS5tCao8WjewIV6LsGpK%2BapHGJeXTCoeVTTUjnJXo5IMu8xyB9YB2aAhWDndmzHWzGgaDx%2B2ahvCbleT5K5%2BedHO2FeHCeXuUfPUTkNVTzG71ZPT%2BOyMmX7v83c2gw8NekDKIiSgpDhNsR9ltQIk0AiE%2B9Vu0WnxaNJ39TVMSQQnUDskpNA2keHKYoGtDllSPmkfBgtW9%2BurTlnwior1l2KJi%2BmhC5Mh%2B0WiYS81X3XAKrZOl18PmZwscwThiOnFnE7SsM%2Bv3D2L80XQiHQD3GfBL9E%2B8LXMXCyYCWiCiX6JzAaA%2FYvMtv%2F65FuaG%2FRS5POeeEjoBoik097%2FE2RlP4HSIPkiP1IQnl0ch1vXLPxTpLTJuf%2ByyJNAReXG8L0x5KQXZiNYgmTU4Xo8qtiSHpG1rnvI86QliBFHKoIddTyVhfbNybz6RQtZ7TjorkdfFr0z2Bv7VgEeIiQwj5D1XVDM7zSIw%2BSptY9jF55yXn21dtvWy8sB1Pok4M3sf9Y4u%2Bh%2FAeh23xbVALN9LZho1JLB9CqTgBjPxvK215rLbQYOBU9FHEBxxPfOOCpxw1oyHexeD5%2B2a8MLv4gMUGOqUB%2FVXWIWL9TFHNMI%2FENYRf3Ua%2BJ%2BPatCYsI0XFL7DMLWyApKItEsjplX%2BN2SaKp8gEZPzn9fOml%2BO3glICjBf1IxMb4pzwVHkpXQ%2FtlV8h9Gp3ats3k3CUE5DodibYeqGstsJTzYlHpVoyhueyoO3grq0FVYY4u60XsxT03XaPoiEao%2Fjkq4Nieo%2F7aSNDedR1VotWQD9cyZQ37yUY6%2Fg8HlLl3jnN&X-Amz-Signature=3a50428c64ddaf15fde342ce49a4705cbcc9629157d84b947eaf40a144b235cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=6606a842e8d0d639096af2d2cfe595e2e0d350f538fd702cb6358e8580a049df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFYAJVTT%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQFq7WGbOCCY42tCA6H9Y1%2B0MkkrvCDxXBNTauqru7%2FgIhAI4S7acCxQ0zGh8dSV7XSsg6IfKe8VJa9EVJnx6aQU94Kv8DCHEQABoMNjM3NDIzMTgzODA1IgzUSqfCdVkd58cAoU4q3APoFxnXQ057SeVdi8ryp4k2AJ3%2FzJTXlbwdukNHn%2BxxVTTL6s9OuJw4hyWliYPuQBkeLGLbFx3DtcUC%2FzYpiLzSzYtDapPohgegIA9DrZgeird%2FvPDgbI7He20Ac0kfa5BXvrK3I2LYFgF3kqu4kKlDJsBts6He%2BBgrIlkJlB8M9Qi%2B8ayC%2Fi49rhy93ftXTKnt8wPfdO%2FPDG3MpuQw4JcpgAr%2BltGDqS5YpLKzBzfes0Dxs5ykYan6Zq%2FQUexOfSvRekdyzTKh%2FIJYsfSbXPCpr%2FzVfM%2F3trFZzvPyfwTSTxLvgZxR75vDFInGimrAUiAp0JO1RbQvhAMuJOVuak%2FAHA%2FwnCKFNQzigXwMjG8eYPgJ%2FkOEhcpTdTl6NNGwU7aSpnWz%2BmFxiuOwxwH1tREFsuVMnnZzZ8HzOuPx1ZxuIcK9mKCtd3l%2BgTmx4VpSuKOkSA5LDdsV16jIxAjjwTAlCBiVi%2BSJ78SuYY%2Fz4h4lGtVlvdWRVVM4wNHPes40fzjsGO7sSpN3obI6aNRupNlzH115S5zLyLtcc%2Fti0gvqVdqtcrCCxoTcMTakUuBk56LnuJc3qpT%2BUtEgFuHVygSg2Fkvj8T0RX5fW2znD6P%2BrYIULxkXtpc1IzSYYzCd%2BIDFBjqkAf3qj2ec%2FO0GeWojxNfLWxUNiOORWcTfMauNWmTad2H%2FabuEE8ZVymB%2FHFOjokwDKe5z5x4lgRfT%2FoVMpNlYCZhtcII4Z16g8FUM1ig%2BYSZ4FoE5BYQN2t0%2Fm5OIJIzMxaDGQvauQmkDFSguANMd9ueqE5SCRqAT8GgB1Xi9S0SIIQMi3Nzm%2FUp45fqHgWd0SBi40jlsa0h1uxAaVj1NA%2BfxWuHX&X-Amz-Signature=6d634252ffc10098f9ce0f327077d706d5ce4024065b5aeef4baaab983a65910&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=12beedb2fe1b8cc27db75733986f36559618e8e72329d05d932420efa6fe3f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PPPDOF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFiv8hl%2Bmy20gcMA7zam6Rd33m9Fe6HZ3nWZSe2edMs8AiB0XmRS4T5pftVC11bP8fQ5sw%2BihTK14AdH4EMOoqMNlyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMW8RDd1zyAnTaCJQFKtwD5zVeH3wa3J6%2BVuv%2FoSwgi%2F%2FlYWk6yAHd996nYJPgVxU61aGH%2BOgdUF5CgfvXWp%2FUXxszNmFElcdoWF9mfvVJ9NVgm%2F0OFKL2xd8Go4lLcY%2FmzKLSL%2F%2BihV8yuLM12EP4RCwAfo8eGRKcQzWkCLh6n9HWTDGKEZhOOZpYftirFvZwKwUbMIfNVU%2FLbfnLW%2FPKLvHFUTnLp9vJ%2F7UYt7FPcL%2BQe7utMnanIeYACNl8TZF%2FcZqGoUbRxN317Z7CSQEmSqNtKQADdYkDi3DpSPl%2F8VtSD61FRFSz%2FWWmToCcic3v9hnUQRRqdyLz6HAm7R2E22es4G7hpdoi%2BqPblX0g2HdyCVazijbnxGfsU2Q1w5TYIMPSIzD6uvrKldLsnOmnXjIoCH7GOyTfxm858xhBcqZIQr5SVXhf6kcbrhWstj5bHIHXS5pSKBfdI44FMDRXDwjPqgJ%2FoEt5vn7tmD7UoDyXp8AkTZ3HlkU8GYpk9G2Aq1OXw1duW8AUWdPpVqUGp7cQyAn9FNwqzvzXrBx23PU0hTYw7a9VtDwPmRhtDnKmt194BDsdA6SiWt0cQQK1Mgi7s3GsxkNHrrC4yTwS%2BwEYO6a1BJatOiP%2BxBn3EY9%2BwpI0FTOLpga3IT4wkfiAxQY6pgFJ7%2FEhupn7pNnMRglWQpw0LqEETAgVPV9ZK%2FRhsK02vyv26cH75DinZLx2V9YetGue14TjOV%2BgXRKdg%2Fd5Dlvl50TBmJe91%2BnNh1maztHlwCahPRzIhsknwlGQQNuiNEFdfz6KLH87lMPXbeGAHHYtdza%2BnTXBxyiC2OE7FdQdAZ0oTJbiKnvtbZZDTcPwE5i76fFmpbydHPTuNH0tBc3zPAOBxdsc&X-Amz-Signature=2820d26b1cb0dbdbb16412d907d8da763a3219975286d77cb82aa094b7030da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMYJLTW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEZTSfbvdg33Sm2qGjqiK85mX0HTwtYGeDxkWqdd8kOwAiApWCL41%2FZl%2BnqSs8x%2FVi%2BZ1p4hlIrVdGfmVarHyDBz2Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM1zRuL%2BoZ3vc2yplCKtwDj2St4E6ulSI9qg0Yzi3k4DOPASYryByIkFOCz9Pt7Brh7k6MEZuRe55loUQiWlFZpw9JgQqlUtyv0m%2FKT%2FMhL8fG%2FJNdpSFMe%2FDtt7z6Np398dfYROsP7hdg%2B%2FmZur5b7EUHiu0WzG0isOdKn2kco4c8Y%2BW%2BlnW5ew1Pnpq0w0D8kF238SKeR6sVSinq96%2BzR%2FJqk6RmC9%2BPyHC%2F9NmcMuKwSjpeiLaT9yb0%2B5Z1sXT%2BCC40Z2C97QLeutSQ%2FNku0vQ2zCNoQerjad1uougFAj6qVKo%2FzOuQdrCW24TD%2FVVCvqXdHr81Cgn%2BURm7gDQij5q5DOjVGK%2BIEN6gvrbYpgrpWzdxN7%2F7zSnHjCSFYaBsBZIDxP7DWLBlTsqqPEgaJvx2erXurgZDAyfpQ%2Bizm5PieShBzfWoMg3%2F2gJM%2FQOXgU4doMNR5xs4Bfl2sGl%2FzXtBvIQUCTqvEEILpRrwOQr4huCt6gSpYxYHu4UkNK8LimxwtbVAQNZN6MH4S65WVuqhzv0hhj5NlP0I9b6URjHs3%2FdCOoAFl7D0wPP%2F39kZ7DQVCMwlFvGC2A%2F%2Bvr2772Dq%2B8wZngZurrjho0sItwSnnbvbvFifUVItc9MgUAqPzkrvZtzqdmg8ElgwwveAxQY6pgEvhTsaSxlIpePAtok7TS%2Fah4jojseZ0iM0EQpAWYpmd%2BNDa769GZGcKj7lRMlMV7vHjJXorAXqGfQH067cC3sbzyqjGitTGzuR%2BumzxUWmFhgfkXUylMXRTWYHjsoHMSNUAhkjeWOIkidSB9onvJYPFORXdZ34IblTlTJU0xlV4OaMUWc%2BiT95oB1ccR7VuSDEYvS3wF7Qum2EfcittQXqWHj1GkNX&X-Amz-Signature=432305858579b71d52d8c413331e9b0ba5e5d5932a02a67069dceeeb50696c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOTEQJA5%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCdaLODCRoyMuO2RjeA8sgxFhCNdtZdNjLHYXvd2eSQ2QIhAK3gZH%2FNaxjCcvMLdz%2Bq3ZrDomw9n79Fxm%2FokEsFOofBKv8DCHEQABoMNjM3NDIzMTgzODA1IgwS8HkRai2nyucMiUgq3AM938ZVQEoFinwR17pov4hHe%2Fz%2B8DCrlRV9GR%2FLeLSrBj5OmW0pbf6TD9S%2F%2Be5qzMhlOv9Lo2%2F1vdTd1aku9zWAlx%2B%2BHAe%2Bg1x2Uto6KHggGV6aLGIb3z%2BK%2F96Hg6vS23%2BN5xMWeOMWYSLRa0vrOKBAe13AvaXj7W8Ysntqs9AvbnKBG2zbDfgwWKxnCPtbbCCDgc2pehAa0yOKDFsOkXzziN0FuPDAI7NN11iC7pUMyIeGIKZTnbrTC03B4TrgG5uJXwzPRBA4iscRKmZ3LGyut%2BeVVa9zKi0UZ5pheXMxvAGzz%2BciYw1CE8AXan88XwZOJltD38G8ShTmoTyiYB7sieqZxu8Og5zYWLNWVWsKd3e4FQMiCC%2BYDQGVrjfISPhYV2cVIPo3UpJa4BoxWPBQFROMtxRrMvrzABdacQsDx8QKgmr3BbhDBUWkY97Af%2BDYwRfnUGDfaa0YLL%2FcpNQG9U3mZfioVBKKlkhgnqJU9vQepoCTYrtHOmepiOYx%2BBo1x5%2B73PHHuqu6TNl3r4hpID3Hg5pmXY%2BuVF18T4MJlSEbtQuicne%2BI%2Frhyet5RRm6B0m3Sco%2FZc5atkECCLL%2B8BvMVXgf5ZhBntbkwPAwK203ACyxAzCx4hitsDDM94DFBjqkAe9Nd5lzh5mpBb5VDEQZVg9VHP57JfJacFonTbscCX6yU0TMvnv97fdfrZgPo1kTJHWdERXTzettoXb54SrMsIpWCEa248Mhl%2B9QPp9JzOqESZg5aYxnG3DvdUPt1VE4wIXiHo7xfAAdM0of6bqTuPa%2BQ7S3DiTbudCuk3bBCpIbCvtnSQhXZIVdlqudqr2l38thMqMWVHaU%2BD3PRRN4dlxSuAob&X-Amz-Signature=ed14cf9d6fae3b3e9a0b761a6868882e53c9ad25c123845f1e358458df608c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCGWUCP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD5nxRd7BoTWRmYY%2BQnG6%2BiW0klkS2LGxZ4i1YCSftgGgIgcE9b%2FLsqOAMa%2BPmb1uLzpklFsjqHso5CzMwyRx28h1Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIdZ0BoFAF2Gy9IXuircA0Jg%2BeTbsQZMZ9nHt4n%2Fcl53hHdfaBdCY996arwdH12iF5qXTsEAeFVOuNFOzwHCXpbNajCcDMpW1j53XBPdhKDBgcN7eiUJxYN7QN76IG009VhmDiV3qdOT6oNeHKsnGkxwKGRG1HG%2FLPbbCsZquO5QqHWoUeAOGhFn7XupsNAFkMcVKiHuuG%2B9cfsNzyZCOlxpPmVx1iqN%2BxcYiZn5sNzXwp81iOGl3RF5eu4t7QpSzY8HeZpq5oDkzpaq9vNakyH63XilmiyMrdds9J26E%2F8vQ40UQe1PVm38A0vzHFkAIzBaWZ1OEU310Yb9ldYOEmMUwuRZC6aLESPREKN5fExfQmdT38S3VK2W2Yqa3cfxCgrJclpmTkjwtaIxTwVJ88Xn%2FYWSUEWTWyLKfjvzfixr3vjythaHKeAfv8E4pSw8bRdi4wHtbdvRgLVD9ssz16X9KW5p8I1I54yKzZh4f1u06PVfr0%2BvJZXTaDg1N0IF6qEf01l54%2Fj%2FwRPa5njDzQ3SBi5PianvHt1dhwdo5zmGYtuUGi%2Bpiz2wkQEkF1Ti62keKsWpyhhBHkiQ7%2F8Z6LCruhbih132jmeXHfv1ynjMbjvL%2FYKXjuy0kcaNJ5HsEYmf3DYKf6P5aUuMMKL4gMUGOqUBaFc8fJvNvqwN28%2BCFV6hwcX5dYPaiA7vPI93J08Cv8etfT7bVF6uzdRt8Dj8aZtfzfGh20jaJ8Hp%2FSJTfqymjBN0a4mBUbuEPPw4iiRdRFn0Aniq6ZF6iMZQLAgAX5maCHdQMaboiJCzaPcrTIfhtFErrMU8jNfjpNSPw2WLoL5F2XP%2BV8Tkd7dnRbj0S5zKD%2Bs7nqhk3O5Y9fYS4akA5SiuEVoW&X-Amz-Signature=935d0ea0d0e29b90f6f77deba7fc2adccf8d62a95cb06d945f66161931e43cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLM2JMAE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFIVmI7OSc9Q%2FktjBKLQlIL%2FKYEo7ncbp5t6r5laCH7WAiBimG2VogMm4GwfuLl%2FA6Am%2FyDQ45WERQU6HlCKoLUANSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMya6jlICqBqz%2F%2FfBwKtwDtn2%2BmpszKUtS7K6rJXbYDXBxapoj%2Fk8SaXCc0epQs%2F0uMhvOFQG72xUVqa1YNbh5XsykqS7eKvMaXZa3H1CWFx6%2BeOtQ9Bim60%2BPDHaz%2BrNcjZuucyZawWqXKKSZ3IvHxHL6OdxN5DBcEJKTv4ydieOAc3Td8AcMSNLHJM519A9rGxQ97U%2BY7H33Z%2FaSXFQb6GgS6a0efojkwEaQftRQn1LbEwbH5nea2akF%2Bb7D%2FiIc%2Bcl9tzwuXopxd1hEISdVygyOdBMFG0DFypuXN3jssHm4QvB%2FFi%2FJ1H9Sa375NUuf7KWD4eyJrYw0WAd7MsSeDWkGlqJRg4KE9kmUkTXOSeZGso0CoyxXUbaNX3BXGwVN9Eo9OCEqv3d8klSPzxQ5eHK7OjWFLvRRpKC%2BtrxQChn0V3rCUgLY5a6so%2Bxz%2FyKgKZjWOtNA540Yw1TIDZa1nJe%2FKCDnJ0AxhHeSQJU8hJIT4X4Uo42AV1Go4iqvwE0sgrQd0T%2F9QQJPKvGn1G27muITNyWZFLNHdRppa4HgG7u4uXFzAuLXWm%2B6ezaoqQMfi%2BMaF5FTPrn1sTIUVmoA04yMgnQIfTXVMemTrmbXqaK3WDSzIRWUHxm%2FLzrY5%2BY0rsKY7XqBrsd9WBQw5%2FiAxQY6pgG8ulrjLOqWnTE8qTfOIvjsCRLn9FJ4%2BUcsdbNOX8aL9xKKfqB59S7WW2J%2BoTAlfAotT3d9pIhsLyp2Z7EngSfN8I8F05KutSKixKUYZA7EnMw0jG1KxIiOCqj1bWJ9I8ZmKtP6HmvgCjxYbyVh2NL9G3migIlW74yPpo9feC1wcBks6%2BtEIytOF4I%2FWCrduQYQU99czdlerRobgiWu%2Bgc1VCSmCXZW&X-Amz-Signature=8feb91a09c83b96bf9eb9819fd7e03a83311cbe114c5de7acd928a06dce02d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=d29eebb4c3e15c8bf8c08489a2ad6dc2a3c23a8b0f157bc00daed4d0269cf0bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623TIJI5R%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDLIhJc%2Bs2RtBddqogTAwDVHfGhwV1umyt5%2FSVSV8VxxAiEA%2BcPnroCLxZnGB6kMswHcoo%2FSBvlyESzRPKTj645tGWoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDI0Ey52dcaEh9IDZcCrcA6qFgV6ZNaxp5%2FS3vig3pa4kN%2F76NLcFhQgV96LipgIFnNET0ArTpdEQOTn%2BGAfJmwYYA4T54QL%2FjRSb1qUd8n80yOLkCfZh3NO108fXEa7xNmqkIUJ%2BZgs2mjp4zytyGvVNwqJqKVWy%2FwapkJrNHm3QZ5uWjQT%2Bjc44ujrVBhqiURWqHCnI02xx5SfXHNf6ZE0MSFylqgQMshkSJLMp6tTudX1p2BYwFQEZ4wPpBF8Si4woh8dI8l%2Fv8HPu8xo9EapTjVZ1Mp3FJ3PrC1cHcBz1Tp0CNoqKotaEGOMLkzNLXAtqg3ba9GaPms1rSz464FW8gJdK9sgscoF9CFTPOEn5AaOBKLQ9hewsb3HXg14YT%2Bm%2FTRR0DyThcPHqxhfZhjiR%2BM52ZXnFPeemAjsZpJJh8D%2F7aKK%2BvXtRFGzvbZxLNXSgdSZjedydOhslBfWQs8kCsWZveE29mY%2Fw8iNVTujr%2BaI61R1pz9405hkyTKY36wZ0iaT%2FaK%2Bfx2%2F4yd7QmOQBXAYU74rLCBMIem3zWviToqVWFr6KNXeMchqdsVHIcEWF3Lt9wkoHm24xLGCnPhGrq%2B7wgNowFBbuS2DDXeGaJsC1QHh9wNFgexrSswT4fNgRCAOo5IL%2BcfDnMP73gMUGOqUB5iI01%2BBXunhXaOZVfo1zx6OdnaqAJsMTY%2FEEuLE54vsy4GazQ9luEXHqDMutM%2Bfo8JhoDXvHJKXQPs6Ex6ANCVqw%2Fl36%2BZ%2Bxicf1QvkWnLfKrxvrnqNsFs1ER5tmziBbIxkLoKgRfiu5js125sZWPzYoDp5jjiya2XpiwIcjhUyFHILTPnB9LAC1Rr9Y5jV9OcZqE50XytGQf8uN3tm1ebWs1ed1&X-Amz-Signature=19ff9d7007f2eb4d46e2339e9ab49d63a858424d919889cdfe08c1e117d5329f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=a7e8ecca11204d51868bafa79144cfe5a8550dddd2b1dbdb2966b339c0ba46d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=dd9b6eff92e2673d3b7b590b700cdf1dd01c7a1d40c225b4968058a935a35385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=31c8044fa333e6c5557d217b8d848a98e56a02b3a7583251084115bd1b62d8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=e45da71054cbcea736d799226dbb172ed80ae11429b3a14a29b4a020bf225ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=082b36ca59ef92f494c2a00817c64d16724326e2f445bff7cff4d955ead37cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=252df586194a7f402a33ed1d1b2d1234c9b0751c7f2364291def403b3f30b334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=d01f67d9ed1d88162e8acbf066384c7d54baaf494f9638d6610fae6e736d2b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=458dc76e3db8f117188444746457f78ab23f719bddfaf74f7e2d360ce5c1bd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=f46d6ce492bd1c1c093262510d2379a529e656376bac97ec61f7b5044db48c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDCYFBKL%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIF4bKZ6%2F75zpXiFJrXpKK%2FbJ8pMeBwSyQkfwU%2B6Ly3CbAiA%2BGe%2F9x16TP3WnP5wxXQf9MDrDwxWFpMt0ddH5KV%2F76Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMw%2BDSOZIXD6BDWdfUKtwDSyKq14zXJqTkJWXDWjBrG9ywO035VEDqJ5HsMbnLhvHWPw06n%2FmiasTXA%2B5kUO10efDRAXEg3NViJRkO4ezVZwP9tv5SHwXQFPea5%2FxhBhthWgVwoNRwwzbJ2vihiqKDugGSp%2BMd5QLbaQzne6aBlQ%2FeHYBZVVHn4nRCLtVD2Astl92dAjYPhaDSyquWL34%2Blm2uezoySA0e0%2BaOt0%2Bj0d6rFoGZqzyI7a6AFgjp1hCGpmdY727%2FlqrVq1O9jCdiR5i0C2qsPHvyltqEjOzllx7L7h4ivdczLpReq29et8D9ABRzYiIz2rKuTvT7nSv%2FWu6t6wCb3I2Ie5bafQZyfZDp8j0Q9fzAgYU8trZOZlbacsoYe2y736HOh0Zwbc7zrmqKx0WuKSty583kKttf6PhGEIeEmHGvQFBU5snB3lxGd761DvSxhDeVD89RL5WXhyxrJU%2FseGVuSn%2B4WxB6mhK5xbNjhIiXR4l5nuK4TVSZeKzcsv7xBxO3BtrHLxnLfvgDsgTtlXGIi2hF%2Fj%2F%2F6vZLCYvG0CZk3128NmHlfyzPYSQM2YmsBH6bwt3ku5KO9uIGdJ8PNk5E75ZQcypXKRHIINX%2FPIva1%2F%2Bo%2B30GlXd95LI3k%2F5rrUfSv2Uw%2FveAxQY6pgHxhsGk6D9lCAtE03t4uXblG6QLVLABK5sN3Pnii6NhTEoZjN2WHOIVdfDh2vQiTWZq2GNKt53whkygJK%2FAj939cPwsSTvM2QamjSKPuZMZBX%2B8yo3WFqfJlAJZjzUY3RJYQQWIHbOromN0kpqaGyWe0eFGMl9QS9Qk7mH8FfiQEN1H0x6f%2FsTZIplEziF3izEQOhQ5ahhOJthm7u0SDJfcuVPKFrWt&X-Amz-Signature=3aa87aa08f9a5aa01d4918334805cd9fd0b186f02bdc4c04f2906850bb4e306b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
