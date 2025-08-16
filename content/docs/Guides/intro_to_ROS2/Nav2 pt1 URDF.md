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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=f924a6f0fe1c3f2ccc96cf9d2a29557e938b5525df8184f07470afba797403d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=76893a7c57b98bc79f2183e666e1b2149c66c0484d44cc5c048d048df54aec26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=3aff2469c57b227a324f819c10878a2684148a22d0fb61776e28f5984da31ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=37a5045ead144db82d87e98190141c9d824d10e586a4f6baf1f0f7403024acf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=54f4d3eb46617ee8609c2010f1e436f9a08f3f6583b65115ef0046624166eb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=19adfe44db7930da712f963b74092ff6d72ee40c1d69bb82aeb6a826ad527c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=ac26b185a772b38d2fb8d4981a248468b213855f47bff922db9e0f4779bd8dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=519da871c10f81c3ed5a23c78eed335b00ef18ea1ed1852e0795e5196426db23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=ec29cdc0e669a175c84555ebb49361ac636eaca0967fe16cbaf55d19c15ca2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=54c2a236af85f2d189f58f0d8b0f70c1e5e935decba6818aa8401d9159394049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676E4UJ5P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD%2BRMivNYxntUViITlkkdtNya4%2B12lxw6sBdpKO0mrCDQIhAJdrifw9enT49zGVHBC3%2FMpjDi%2Bklx07a6KJl92YZNf0Kv8DCHEQABoMNjM3NDIzMTgzODA1Igwu99fFVINQl8Gg2zEq3AN%2FBqB%2BjEPC91NwqPX6AQMnm9Y3qWo5OM1vkJkn%2B%2BB%2FtLFDiOtSKEKBYg4bsMTrBdL7BdbNrrUQwZp02vsx6AgBzeR3K4QYiRKuKQmWwQKAemu6kDJiRaEZ%2FpHnAtuxlXV4lntH4TI95JdzZZfqsbbGgtFPeLSBLUvUAZO6FdnIW9dK1kj3sWxLP6pwy48lKxCBDLsbfsuWKPlOkP1w1%2BT6hxAFUsjvCtcJqX9BLErsFo4fVf9TaBP0IZXGxsUBIvdHamZ%2BoITxAbTduzc0Aq6At4YSsidS3WJ85sWIVMlBdvivoqPT6b%2B%2BC28trxnkB9kNlD11ljuwnhI4miQ2sjnQHA8PaCPnoZdqA7dFBWIvydZkryaq7T2HkvCsjnEUIZ%2B%2BxtJ0%2FoSNcRbVKtnVq2H5ZPDlpnJ26hcrLscK%2BwwcdIihvp%2F4mfKZeXCRZlU4zGx25Q5G6Dh0MX4DUcL7F%2B%2FlXZRdjfQk2cKw1KtAac6pZDffEd133x6Yu17cEL%2BuGOF2kf4e7HXCw1jgG4aqKGJZu5hQLT%2FU%2Bi0ODKZkfyuJfZWWrhmhnqGXDrMLg9PpPhKCx3prlEuku66oyWGYgzrxA2s7hzVo%2BBcHNLEU0DKWVJ2TVzMIWM%2BYsW15CDDg94DFBjqkARaJ5V52oe8GCVLTiZP9irnBeSg4kxInVNuoW3%2Fpu77EDgtKnan0gFFfIbb0OyhAV%2BVOtQ%2F2HOqF%2Fhwkj08ts00nBEE2xw%2Fhx6mM5%2BYB8KlQY1PfApRY6awecjXaROT%2Bsbxs8Oy6IgBAKGP83bLAU7q2hsFpQeQKpZG8jXGcuuBV4L%2FsjFiSxRV98Bfwa661jsL2kzQItxW%2BuvqOZOKjJ5yZiFSt&X-Amz-Signature=cfb1632c5d1af084b6b8d16e06d8200643ebd4e2a4f2fc9e42865654f1217cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOM7DFK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCZbXNfl6e9SCvnC7ssPB6L6ki3418WX901GRJvsLCf3AIhANudMHrZCfmkmcWQrM8zjnLYG1ygGUANPNu2XVKmtqsuKv8DCHEQABoMNjM3NDIzMTgzODA1Igwh%2F%2F7vKcBeSqrLlUMq3AP5wI82MrLolAfuqtrgL3JWfDV3S%2BKatK1JHp8hDhIpkwY%2BoGByywppWUBBzNfsf6v7PgFJZCdujMYvlxceJfHrhqPDDQ8wFGSt3A4qH9lagcPemlqVCoYFm8ye22DTQqy6mWmlyPncl7uM3bqrLOR3KjaAp9FHyDu0%2FPmxFMvzMHoKOuTiEsw8ZENGT48EuaD3ijIla1DZqwqSwJODvxNASXiAgYwBTBXk41y2toPiVEXkU8qkHYR1dvQnM%2BKaZqPRinMt8od%2BJ1m0ftZlFakTStEbVISMMGHy%2Bx0NYy%2Fy1VPfSHYVHT0K%2Blqpu2kQykZ6byayKgwGI0dmER6ibIF7XFWc3%2FyoIZNR3S%2BPHlWJn0U%2BdDN5NM%2F48PN3vf6CwggATJ6kxj81zckOF30dA0%2F19IQtbQSMvvg3dgHb5hgZbIZTz0lgXfeR7ti7xOlGuuYiOANTMAecT816pjmXyiqw8oOs7r8yh518i%2B0iNkmRKHFplIcJJSHMNCOqYHu5LHmCa3BwIc%2Bo8J%2FjVw%2BIPFEm1gRpKuufAa%2FscH%2BLP07idiPMetv11YXkYyQHHJdENLbl1d7vnp%2B6HRMyM3bP%2B7YK6haVWSFvkhL4kG37iKlnXqs71qSWXN0qX9JcQDC794DFBjqkAdXdC%2Bkfiltgxw%2BAsfLk6bUaUFOm3ZHDmvqDbbujV%2B9Z1dph5HQz56XGOeXnMeogNmCRZ2XPJGi0SQLlCdFwsua1r8GS8kqDhxYxuTcSOGSLZKuw%2B0WIRcZ34wz7gZvK01HVi8d0b6rj%2B1u3ql68OrjagG%2BhpE%2Fw54fkNjR8Gm2hkOF61F3DAxBFGjnc5p8b1CPZ4rpql%2BK4w5dkfENybKP3Lb5t&X-Amz-Signature=b449119455e734a98c1048e14ecc47d8b05eab5a13ce560e36525fbd55949378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSXWOTV%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEaeXvIkzpeCYUD0ECYJ28IAt29%2BZDl4q8Vnw4d%2BmuzwAiEAovkKNZraYt18168tS%2Fi44pZdhJKxe1nZ4%2B4qRj%2FBMeUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAiedqYR8HYkiaVhCCrcA1SEfZf4IciNnFrzbfYL3sv6rJTn5RjhkFLTX0M7zPQ8s2g3CeX6I6t13ES1jJZIP0FOcCFB%2BPUVlYTTkVmhQK7ruGQBO4mgnP6EI8Xu7LSM801%2FLtq2LpLJQg6Wwl7Sz3MsO7M4UCjWXGeehyba5sK3trMnDrcsI8yGSZaTnmI%2F%2BWl63UP0XQU1ShYsbissScXJ%2FTC%2BqKr98w%2BwJ%2F0w5Dfm%2BJ0ybe9YTCTfIharNqSScGIOFsTn9rZ2JtePAUyrOF8s9Bu93gIIfY7Z%2BEC5eTLuoI%2Ba%2BDTOJMyILOaOGd6mxgN1Q19EkaC8YRarLxbIznE9LP4CmsP%2FuQIdGe%2BGN5Kw9sYvO1ClB8f0cmDhxSw6Ou%2FdkEdSlNb0Llkrqpw4vlPjFm8f6o6SwHaMf1c7nXUkE4g1g2UMwQS1qYcwPrT1v6XADFjHbgtxUBm0c5UpQVrmNNpU23ivV7Zcqe17bg4It%2B23vIU6Qh6hybTv6lyjf%2FGIBu01bjY%2FAh%2BWnMDPkQPzBFjWmFOpLMIjR1Cif%2BvXv5dhtSEKnRaZ0n9F7jtisAbiRdK8NTWSEnCRgB5rfc2CF2qDfFPs9xdkzPotWdhkRlq1fmOR8ewBxE8E%2F4XC6t8Kdb0p2gJWuKvOMLz3gMUGOqUBGcjT2fJVChGCT%2FnIsDx2EaFQaNfeaurfvsWWgd9p6pE%2F8tsFtBl1M76rnYoZUml8mj5019jiJqrC13N%2BOqOp1iUVQC4eDZAytsnAfznCmUUKtxfLzPaWy8GfAV8lW8gERUhdC58cuHNw62HpyKShbQcryfoorUsTelKC227eipfaLTHggPduFg3dB7mffSwMIYa%2FMrO7RLu812fY6EaiheJfDc%2F8&X-Amz-Signature=e11d01e5dd096a01c949efb17c0259cd87ea073e8d85bba98c97ea1fd502e8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=e82d8871eaebaeef7240631f4222923bc1d3cf1d73ce9e5afeb8d83813ba32f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVCK3DMP%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIH%2BN4o8jrSVb709f0mZtomqyjcF3pYlvY%2Fapt7IOhC6TAiAKMMxau7hBtiTJIo29Bzk4IGvE9Zj%2FtNefQb3G%2F2uDcir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMxzQ%2BMCiFPHiDywazKtwDTiYkK2m2NJCk4WrQXzxss%2BMzz26depETYhJdrbXuA9d%2FlrIHJrQEdtbdXoVA57BapK22qS%2FXlAgtDtWihqUmJDv2Qd72Ec53Xy9J8jHZv4qEtTIKtk%2F%2FN10i5brKiAvsUHm7oBT0EXBfxyUObnToUop6aGwOgO%2FxwZQcDR01%2BTYYTpN8zZ6UGfuJw3kHJZFQVBe9f7AZJzJTBtkPQAkJUrpkYJ%2FEuFnw0qB%2BlOPDJIpQX6bbyvrJw2OSiQ0UPGLOjfoCzD1GBJnCiRwWu%2Bfvza8Zr94VT4OwsFCMWF0OFqsP4wpwJn3WOGJ7uV3uaCGWSCu7MogdGWudszsZvgl4EQm5eAdtq4%2F9rN2S84oAfYjkD8Y9%2BMtHNpEeCfo%2B5TF2B4ehExP%2F105aijKfnCdbQPG1IHcU0c1JzRJQ3ESI1KbAyUcyY0ZIuB%2BpFxu1cR64y%2Fgn0tM4TCEdy3m6exK9oJDTgqmgv%2F0oAdnUnf43GmoCIZ9%2BQYGFhdwlqERc%2BiHP7ICQ37X8RWcnMX8uO%2FirgYRte0f6Bic4zY4w%2FdcPbkFB5uuICqMRLfhlroA%2BahCdfH5fizarbPVlfsjBrxKtMf4kxIbecyqjHk5N3MbifCeeka0XZjR36b0R2u4wifiAxQY6pgHktvBeK4ShwpFxy79PVIyu9DJnfd1c26vm49WL3xoX9ES3EsuOsdSUmwH2ka8b5kOss82NhshCLhYPiNytdla2A3QFJypnyWa%2BZQvQwpn7jiPyN%2BvkoOlu9SZT6L%2FBiR%2Fg3O%2BhM%2FmvckSi67cJ%2BpmM0lz4ltO69Cmo9MOEC8KGkpEO4VmOzfzKSo4tTapT54piVHbJIFMR8pJp1chgcBJxfK%2Bzs0LQ&X-Amz-Signature=ecf48f1e917af8170a771d90c3d4c10c5fc853df0bb6993f358f7bd6a8f8583a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=f2117871750e1a13d514aeabb56369ea3e21139704bea7d990080402b3d4d80f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666MVWXFK%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCiP5HVvgpTOr%2BZfesV88L3nxOrekYCZpNlaYTG456tXwIgMs7SawHV%2F1CbNuwlZi%2BlNZp4sJp27CAZUEsrgMDapT8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNcrk%2F%2BWy8P2jP0ojCrcA9W7PbQtc%2BMhot8Z6DfucZHJVpmc0l2Zkg43BkATYbYw74HI2OpKHwDHPsFlQ7cdZ3ay%2B4xpgEQaSs%2BtNRVw2czbU7eBrtGTdKCtzo1M7iy%2BtIlTa0teMZAcHSPRUwPCbU9g0UXJMkDWQSt8VLulmzq0%2FUcg3hdZAg8jEKCVCZvf5jtgnZcKOq9kMVF4IjJKQADbqHqJIHkwxQb1e37sdOoD2nmKgxdKh1eAzMqHQdtrDj7NtPcE8tadRcDzuaNBFsaNTEbd%2BTCnJB%2Fi1d%2FTpORSx9EZPT2%2FUBp%2BsQBej%2FtaV5dL5NL%2B8YTCifAIZh8Nr62ekq72uE7TLDmOCxmZkYjLPntEhkDiUQ0A0Weo8ad9Pv8bS5IEKSX7IcD4TAHOkMZb9NjytuCkyBUj8OHnjMdRE8v%2Bv0uP5hBf8sBTsXLTRFSaLCn6hHjOo26N%2BSIBGQGIgEajfKbyX0ANZhQFRvV4tn0AXgi9CRrAWlT1elBJ%2BbpQkvLGC4usMjVOq6YKoduU8YPU3zzeUcmA416gsRKYR3wLSk3N2DR2k01kEiMQZ8sT9QpQWWtR6V9wYJbB0cwLjzzoBjE2wxalYIDslzpeMLenag85PalFz7XteBku99XH%2Ba%2FI%2BM6coc5PMOX3gMUGOqUB6BaIha0%2FTRWbyscymmhZgvhe7rqwPFqjCPcyV%2FtdUUlOGqAcMW2BNBS3%2FuCIRvHUFVa2xmmnDjK%2BTjRhEvxAhmld9oBmUUtIYxsYNEnvl1qxfmJFphsBfFjk74yt9HIywsc4z%2B%2FjC6V6ChXfyM0mhyDIFcUAIIt85C5G3HnOAN5tykPkv2TZxckCC6qPcTF3UHHT3AdXmIvozoZI%2F3MmBgs0%2FgH3&X-Amz-Signature=4e17c936f3ad66eaf3850aa16e2ecf6b7010593651c6274c9eb678b1e8fc1ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=10891be29d3b1def3cb1bfad1cc0843a3ea0ad78cf7cd2b82b22b7acd097b08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5XOQXF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCUyrKJfFYyukzXA1aw1xPX7QoKfwP9NheStLCL%2Fr29mAIgM%2Fdjlqb1H8Vko60EA%2FItOGBlFBZWuCDrppRbLkvALZgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNLvKekQdhLkoYIiqircA4JCSmTCKdgwQHxljF8i0AUDL2oPCkKO0Ip%2BUwmFsHMN%2FbLMZ%2Bpftf68tSBwrz5pDkACz4%2F7KIit30TTpnYQ1bZeK3mflv%2FWNw4GVh%2FOybBxJ7e%2BEwxuuemxqjiVCLhwjslX9w410wp7J0n2MuwO6XfA0xyYQe9FT7qJiDbvD9fpdTAon%2Be8eb1%2FMQ4YMpP7kFMxvoDEQh6xMx73ZoV5qqr0Xyroklc%2BJU%2FbIjicL6EhXK7KpP%2FoCwk8Fosoeenw60zLu052xRMe4On%2F4MyZiTIkQho3IRkC%2Ff4m%2FO2VFfzKlNDYs%2ByZoVXQlw0aOnECAYEQFwePAhr9sUUtPGTN3PHkLnFMTkHdkEwFFaMZhKrgcnWOCqjUNFWVgYtKMuPHa6QqUj1k1yF3hFbPvPLQ3uzSpYXtEl1BHh5MyTkKZMgrI8sRS%2FAUwgV6weMnKii3H3DR5LewT2bZc49LJZOTu0YviBykr2dWxU8VxyIbh2gATdryEvUrarRGRbSB0gFzc0Y%2Bp5ebbrrvCat%2Fb%2ByuqzDWnFJC31lszdmixx%2BZOGqCFQ0%2FCwknGzq71hpF3daPUaXU6SE8ocL3LObi9in6FfBwAwUEFgktRD0%2FDK5lvVL7zaoa5Bg12Una%2BFylMKP5gMUGOqUBEQLpM9M%2BH9BTLSoIXu31%2FLJb3uvLSyxEBXRXMzLpgD6EfowbbDfwABfmSfYaSeIhFoA4oFZukoKi9oFmoepITWLpVsud%2FRljKeVaSVXOQBB1ur%2FiuA8k6bRukYRyehyKsy15eOuWe5mC03gh3Mu%2BVRIogHyUWwHR%2BHQLRVq3eeQgj%2BVGvbfiacPNwZ%2BezmeiNaY2RxaQL1y4j1DVoWd5Y628axFC&X-Amz-Signature=75e71344fcc51480ce12fc16c35caa062dd8d6ce3deb19467e3704251fdc06ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=679904921076bfc98645cb2aeba722d38288164d98a0c07395bd556591d94def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USOVJJBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQC%2F4L6KjGkUDrzpdHTcYtA67%2FxlItiX3aDjRkpw0qgcJQIhAMxDzrH52tGPOJGB368qr6n7PlDE%2BbPDg2NeGBya6nyvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwATGpiVmGIJd1TI4Yq3AP6%2F2Kld0roGyOYCCXIaBf6pr5FmdSXFd0hlhx9D2eyq42c%2F8%2BBWm7PWVwb6VceoGXFKkce3NZQ5RDnxQ9U5yeoKl9it2Q%2BgUB5elAVB7sdrzKn1OMzE9RngyX4i2X29MkmBgbDxfla0EGrVK%2FgB%2BKTWOO9PdNXjGbA2gynW%2B2lqAuaaAe6JvMiHxK94AWDKd4iuCw0C1g8iBLZFM8PC%2FlfhISRyWvpxiaycOc8eTtqY76HcfLP8mpD1Lv1ZAnkjv8jWstOG203H3EB9Kq5XR%2BzyBHJ870HZtrH2Yc93x6i%2Fzd0OBPEWAXrm8cvMShRfImwkpCV4wY5TN7D4dfbYfU7UguJ4nf1jIydkQkjEdWS89Kl7EE6oNKs1TEVmFGPx%2BHmZGBUOi5WdD6Aur0X1dPtO2f2p92ZFp%2F1JQyTvPSaAzMMz4l%2Bb7XqMDqCneMcEa0IDRBxHgiAznYp7DO8zNz8DnIDSMbfRSzLv3SM5v2Kd7pdP2PzVIpqtwE1AbEfzjMWBglTIcW0G%2BmWarqdbPh4q6GbU%2FVdX5cJyVS4Su1JR2gqU92uxPpt1E2ZXMyLaNVqgBi3n4MZ%2FCtjmlndKn70A9TnfclP7N%2FpPfhI%2FuD%2BWoswG1PsoCtfcpM9rzCj%2BIDFBjqkAXbXocS4dEeiES40qicCzzPMTzhDTYC86SFGJ0eoPxHDGKuux9iZjaCp352mqOZWMiB787CROood2hwRlodbCTmXDcQ8zDCBt%2F4GEjUIFeocZcC8UWM6SqSg0GPIptX13rQitfWrMbRLC50aawi6Bg1PrVTXZnC%2FfCuUqYVR%2FIucIFGtcMTGirf8wwxeP9RL58Fu7mzuEbBt59hjSQAJmdjEHSJe&X-Amz-Signature=750aac2776c62ba3c62e10cffb9ef297b631163e0c30e6f77387e4a8e344b10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSALMVM%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIG3N85w2ZnZifEbKenu2pOpCHp%2BaplfQg14caTRbqgu9AiEA7M9miG2chmXYxrPnggW0LAtD0BUqWcc7GgoIFz4j5xgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDM8OkJ%2FFxTKe1iWteyrcA3w1TWnQmxA%2BgWkBqR5bKURqaUHhhN9DNQ65VEpVwG4vISpPJpVERDnun9rJNVZP6735tj2nDSkvq3F30vRKVSF8MCu8yr76ZySr5MtSD8qd8GY6ITQJN3sYRZ41fGaiTUVxdw8Z66huV5Sl1RaXzexnXVTsrwiRbqO3f4tvk2x3lJ3Lt3Q0q5VxVTS5m73Ss23Lq3hXwyqoXW3xwawnywpOB46CKYJNDoQTpCEfT5v8%2FVzZSUnWWI6mkB4mc2U3rvTOVBDJUMNpX4Rl6hfJPHMq6E2l%2BoAe9nsaTu6aGyHbF%2FHnDBnsngzuImfWsHM4tWh4jF62ATl%2BMCGDKnc%2Facq%2FYKCaNbh%2FFSXFJszkJmKw9uV1NCAThhLbFD%2F2mWQTBP2FaMQYGQC6EZh%2BweIrrCUBv80aAZcZ6RF1Xm9S%2BBn7UQBLRgQKHJX94dBe6e2nIqUfA9fLhYNZ6Gn1HNDJmitX53ukIzKW0kztbZ3OtLzFndqG7YrqajSqHJFdqBzvOoheVbVKMBUZIjpLY1sBUN9DQ6TKdZLhjM3%2F3Gq885iKBdEcn73U992HHzBxP0heG%2FnVvPaq7ugnk%2FH%2F%2B%2FVIwZk2j2ieB95Co2pD43qK4Gw3gXBzw7MCQwvR0Ly7MPT3gMUGOqUBKDMaA7kXOUiUOpRWt202auDNPWgUtOGqWdD2a2bRKna3cT5ky7egdlfEOnJL3DPVMIbSC3lLA4J0dCoT5dLf%2BY2GK465Uh%2FC%2BTqO4YMA7I2LzuhIPMNGoRuLuRr3HeYVaKcUhu6o%2B8FH31%2BaMxOUSZADdBXg4HEEjq9%2FaQP8yJMMKhM7qgb%2FQ%2FBFLKG3IS1BsPT3uyEo3MzZxBzTI2przXD4gcSc&X-Amz-Signature=41bb415714aa30a9bb8ecd1ffecee135a95f3a40ab5e45ecd1ae315e3e8af9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSWTHVJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEwF9aXyr7PEbWLKSLk9pjkTUDCgNKt0pMcnxpqch8DaAiBwxSa8seq0c3t4D1xfxJ1CrHj1dTMhVHft3lShIfPOzCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUMLxmdghYDwAGaLlKtwD3yopMUG7OShDX7bH3Y%2FlfmFlWBpCJBWXQUjEtlzqJjP2Aokh9HBq62BVDf6iPLuTSESz7mbQdyv41GBkaQejS57nkkaLbQv5k0Ap17xOwAA5en0VwivvTJ4jDntGZUIckGK7ULR%2BzTIOYZ8d%2BSaA2dzrJ6WSdR5MICe7bGfFbz7UzuTxOoJ0j3YN6z8Sb%2BeZH0EIS3MNgjzwzYyxjM%2F1qKknrFuYx3ufCY2dDjSyIWRx6xa%2BMSIOeCNUAGw7iuVaRGmAQwdhEqNz4qNitErtF207zlPyVcaQP6GyPkkJgaF%2BteCg2CWI44R1pWtdFoGCUtL8RF7KlbZL7gYu1H3UvlrWyIy61uBjH0Xd4XNt0%2FTu5rPbwuuYfMXPL3n01Zz8ZVMnkY24VS0Otoz58%2FEthi3laHXTxroCsyz%2FAkGoLUoRVBeoi3ajpyiDR0aLGF1WNESGOyqGG8ylAMfe6jR9fx%2BtpYQ68lgUz%2Bzx%2B6Bmq3%2Fj%2FMohXy8GqWAJCgO9CUCn%2Fp5yvj9qAdTwb%2B1tAOBc06xKC2afyUE7gDpLat8B514IoICC0Q2j7oMdskekbRhKgpuolS%2BJYGKEP2HDdwx5Uog0wFAf5nxZM2q6mKbWCH5g3IOitEka0Zff3pswt%2FeAxQY6pgFTGXkD1mPI6JCFkRynblJA9L0jadCs4HkIkiFj13LIi5OLvVEzSpuxNmZ%2Fe38rK0LWNBTpo3jpk7jQ7SyZnKyhJol0lGKqvfqfvKaZNzTVpYEGQ9RvaBeZ1qFCtEHctExr8YswT%2BwyVxYvEqECdO5J7i6WSs2qiXW125iUxxgrL0KD7fNdp4WlrMy0ZZUZ9Apc1noYzMeccDrizDuk5%2FV8yXT0%2FNgY&X-Amz-Signature=3d25301a70fa602effe1a1751e79939786b5442df290f454b3d8285b09777ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHVS72JB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQD8w1BBvvYZHfswIkKtmyMgUjIiIn0cJnGIURRPR%2BZpVgIhAMaBfLRzrN2Tq085WhZxh3zCzTV9r5fm5zgJY3vrqfGsKv8DCHEQABoMNjM3NDIzMTgzODA1IgxslLtahn%2B%2FMax8Evsq3AMjCNtDzMkslOLJpeS3jW%2Bb27VbLd7%2BY7GEtLNTyy66xM20uceTwd91m%2BLV3matgBZHOvnn6wnNa5lEk7ik8vHkfMK%2FCi4bu%2FvStNESYfMqsOxvnTnUZdz6UF0GkGhs6VXGKf4IH%2BIpzrVANCx%2FYzxOENh%2BIlGB94hh0n1iQ2LAM2b1akmBTByJ69axwBi97KWDnxa52jpgn%2FdpIUULCG8GaCsXd%2FIADaUWEIglN6Tfl3numc79khnjgTorp1bl85yE%2FHCDr89e5okKQL%2BtlSkxZgFtsOQZnQmRcomRZVukGQiamso2C4szaatZHe2Tl1gOSsNDTxlmHe%2Bsz62WPGPjR4alrGaZ%2BpzYRwC%2F3ZulevgInMUBm7xC7Mjed17A2ZIU4WhnZYNR4wSMKPd8h7A4OW%2BMFaQ88c3Stosz9Yac1Ai2ACrZOpXgYeveFRN5bxfRMYftP1UBf3Mn6DwqMTpJqqMeP950t9zs6%2BBcWgDROCMA011d2ylVCQ58gQhoOarSXlqfGZ1ntPyTg3RpcYpl6J4KLn5tMYyAgHjYNBzbRDlu1QhRY7RP1WFmt2N2EIub5n%2FSiZ87b24F%2FGUiVll03I%2BpPzVA94z8YpikDfFi1%2Bkg4KGwBymkGEA6oTC794DFBjqkAfIzRA6wbVdokAOYsTr9zomLYBZB3lMfYU0Sd4IcFjlbPVyhXSbAaHAHsCMgQIDl2ZWjX5IO0V1rd85T%2Bgauf8lk3reGLp7I2f3frWca7jBAyBp1UbukA6X8C0%2F0K3AONDTuScI0yPKfJWdKjHnmrYN8UTC3diPx48OWcx6Rg7tUz%2FxV%2F%2BQlLddfUeYqZDEGMFfybOSU413I5o5Hsq26rIL38xCk&X-Amz-Signature=b315d4dcaf07ec97874571ec4fb0f304bd8d13f247b46bc62fefeb7d1c8d1ea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWWSKJCR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCT5Cafio4zs0%2FUpkXyqROboMxEPO%2BARvJ5F8w4rXLNnQIhANX%2ByeAB%2BSRP4jVlnFMHr88f8KEgmLlVHhDThVofzHceKv8DCHEQABoMNjM3NDIzMTgzODA1Igwz3oymfU76WPDOnJIq3AOgvID93U9ZOZ8QEtw1IgzlAO5YngHjoLSymK9BJdquqI8dXOpPYZYMWrxGPtkYV7DGj6OjXIrLgFiwfGJPAa62v0AQSUjAe67ZDy3XvP8WkDnS4yakneqMGHlDS%2B%2BB4udBFLz6i30xPiTQExVD4fpXdpXnXvYUGAArfNpMq89CmCkxE%2FwxyX6CYl0DTyFmxZgh0wmgXsiJUNwpo1I4vDJdTUckKYqv64usCES8v%2FRtpH45ZmUejF%2FmnbrRPizjk8eHnkf2kDk42RcqJlnhTf9qrgPaaosnVm2qm38hzU3HS2HAYTtMo5II9gssuKldnLa4AptscHSQ%2BxtrGbvzsOxxwNiR6cMnoktnptOKFcjDE0bWIgCM9nThTFo%2FLs2C2ifkvavEkK7Qj7b%2F%2BQMWTdV%2FkBdpYN2xwZ6WRzqKF2nwh0zfAYTIuUqHVcRvC6CSIjQP7DPjHEKA7v1QzPjhM6sI8tyt06RuNDnn1W1EGysTy2pUWXpCWfz%2FiEkzHz8HWIyRRUnSC71t9Db5dgIqoiNy2QmPaSPKSPv%2Bn6Y2XygKN7cSonda3Ov41un713Zu9xGWcg0UwTKr2ox2BI85S%2B0XJztngLtLbryjGpFFt%2FEY1kirlp0UWpsnTETUVTC494DFBjqkAbI%2B%2Br502gD2JK8ShtkyeOpmCpcf6StNKqV%2Bx89yiysbtVdHrq8rH6WCzC%2Bp2ebYy%2BqOSvBFuakS5Hc5kpZzYh60%2FWp%2FaFdcp2AZRhpnudB3swQ%2BvQfu4exeWSlqWpRqetyzbnQvE5RqfMPhm%2Bjh8epmNfY%2FMUb3CQIbKSG3azEthyGRJQ2wsShFVxUkG12bxughxsHbnAO5gUgzk8weqianie2l&X-Amz-Signature=218c499215a703ae7ea7416ec5105a562e4ff1d8c90f7bdfc0a9ccf6a378cb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=0c53b9dc71444a1d97715fa536cbe295b469ed2df66175bd9da8840bf9c59292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAQBH4J%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDqiEIUAfNsftKD2UDZKoHPB0VdRJ5UgrEhUggoReos%2FAIgLm5B%2BqDAJiFdjS7iMUNyeO98jTFBrsMQCZout8%2FYjhwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBQfmxinrfM8ZK1LbyrcA4DY4D%2BibCRTcxyqq9lGlztvkovAx9hv%2BP%2FwHCvMsnFqttcwfc15jtpXt3XC27f8rklzZEn36GoK%2BPEG%2BYoQREU8biI4w2Xs%2BpMKQDvru3ymsaNfqO4S7OtrFgQ8FFZITkc1FXoxqhJbz3xQQWcnud5oF49uTsaryhrH49NkCSyDtJG70cA6sJfeF%2BLRce2pgus25EaAJ2XIAGuP50DbiArjxYQjrXCl5VOHafPqjFuLLCYduuZFP28Ljo3gB%2B29PZrTau6kTfkWMEroi70UaXL17puULyzvxZK3mnTI3hr8e2ejoDQYBcL5pht5I8D9dAT6jZB7%2Flspc%2FqjYFhR4jPAE%2Bwg%2BKeCXFJynNmvC6yu5PoaNUWHYvMxCzna%2FuOf%2FkOdNnyLnW5qXTm003yXitOhPEvk3l1bHF%2BqCuO3ScWEGfxEKTbP98SIb4Q1oRU%2B3VkPiV5e5sdghfPc8rE5xqsggBubavd8HNJAqpJ38niaLbpoplV1oamM3Rvsbr94C29aDF9DtlJ5hJJlcZ7DSU1oPNFUC5XX2IVnfK%2F8sz%2F%2FdQFSvATHtz27lvNTftJabuA68G1g0NMmI2aPrAKRe5RpQbvPnqph6OAKgYUzfvB3y8dq7%2B8v6UOHjPXMMP73gMUGOqUBzU5a4zOMVIxCSSjwY653lJitOZOrdtg%2BfWCYOcYx7ZkkdoC1XprmlQX9GBLXEt1RL3UG2q6qpR517%2BptFPInKBjZ0lJULFj0sj%2BgmnuXJ7mEwj5T1Bl%2BGYSFa%2BjIK03EWXAONTkvdC7l%2Fc7JEmXKIop9eWS7hhjO%2BOgFpyk52nZW0l7CvFDDPuR%2BPvTFqL08DsAHhHS15pe8Lc8lEt3SEGNRjkpR&X-Amz-Signature=2534c625e89243e71c22dfb5b2ac9b9dfcb772691d83b970b560dc9032160958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=3fd5aba503f67f99b9385519ea172215644bf7d834c26380b7b965f7f9a94d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=5dc22657958ab31669440672ad997b590cbe9291004be38b5b6b10610b3193d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=f060b8f324db574b1c32946733665a87bbc4963fe64bf786376755325af49355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=2c182ada08ea43cd9c04ff0aa8c2b88ed757bd19f570c33f80a782e18c563257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=f26fc59f16d62a86873508646624ae25314e93795ad552a42c07ec807840d619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=4ca85da89b3653b1c20238f6a88fa6bb15697770d886ac2274a50183caa9466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=f060b8f324db574b1c32946733665a87bbc4963fe64bf786376755325af49355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=0784436a72224ca24750aacffa336049f793cab0c9560b9eebd70151a791b6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=d688af4d7ff7ca6866cb6b9cdc559cf15cbc5691234d3c7992d49f9dcecf7551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTRILF4U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T100825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGzbQYPIkjSc5ua%2FYSWa%2BjCUwFgS8AXAIugJXgF3%2BiXNAiAfZsw8ybmmUQrMXcaM9m9ejsUyVOTpvOaHb39JIznsxCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM4%2F9BoDV5QXhMLBHuKtwDuJxoPEVWAGRxjd9rqAG%2FTCP6KusiQ77fNhim%2BHTD2ECvvwvmFMbWnSvxnARmG7W4MLDLmDp%2BksCA6mkXtPgw5pmvPsSZwN9D86SoXRhtj6MB9qOGp8RhUMxs8b1YHciPoLVaHXek4qmfSoH%2Bno%2FJ9iN5wuTFB6g8yZuJVA%2BQ%2BGJS2wCCZ5RcNUmf1nCsknx%2F%2B0DkqT3vKFZtAsYz%2F15A5PO2frntudzEEIuLadISnMmQlDwNkY08mEnrKBuJ2xEepp%2BHFm6vJ%2FCmT0H1eLm5U549ASH0WOkbSF8xL2m0xHvjLuFxEJN8IzV1BtKfdxJgEVa6Myf7fT91eAVst5oBNnnoYgxO6s3Y7c3s%2FUrLabzljJD14yPLl8Y9QRgQKYpKsecv3Y%2B9S6vuuDLVMbex3ELD%2BL0cMRnqvsmF%2BFqt0mhEdVYbH8Ec3ie7Zh2XTsArkE19DNUXsREa21WdPZjcoh%2BpeuqMmqu%2BXBeV%2Foho94hkLraJNoab2d2EhVLnrBn40gCsdj9frqPEy89f%2BbquxxzimD4C9DcnpVUcjNa4I84bB0nOxU24pHvh6zWA72OtYEbu%2F6tfEmpymvwhJCvHXThxXRMXBHmzERRzInV6AcqvGZ2%2FkVbbtl7tTIYw%2FveAxQY6pgHluUNJHM3EOxv3I1kOvRDNJ3nA83j9o%2BABhaBl3sZon%2FAukHJ0t7Yo3fnvvb3V43BGZLLeIMWtxOz1ow1ohW9Y911Z7dEXpYqwvIlqtqdjMQG7wQAaUrmhwpj88OrJbfhiA0M39Sv7qaVwENMH0pOx8ZPiru5tUhm36DhuVSK1oH4phJcQBS6186z5n7h0WgoNhUtT2mO%2BvwQAhkivbRgLCFoZD7EV&X-Amz-Signature=03a0a393d5d20db88484b1cdf337368511e1054dd0c9ffb73c1c5f80bf84e6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
