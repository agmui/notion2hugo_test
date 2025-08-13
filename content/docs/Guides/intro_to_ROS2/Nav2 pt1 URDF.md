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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=c4048862ba9165a2f8051cf3ee7888ddc68d2b1b82eb58fb4eee2366d70b7073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=749d49dab342eed08f6c92aa6bb9e937c6a17d4e604b5b17a1124fb7c71c430e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=029f1dd516d1a3522e972395710f9226aaa44ba181214f8f50704ea0c21ad56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=23617474e416238ca61198c1740dcbab3beff584c6ce885d0253d630ab0ccc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=5f7c4127465b2a76929546a659de5ac832617c2b0072bc49b0e3d5e61505327c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=7ef9e72f84d2237c2468d6148a8fd8115e041f6e32566604870cbefe8c1a8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=dcf5066abacce61151297bf04a4a8d42ec889ca00830c7e1b8c2e58f0ef1043b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=3f773d68354e234715fbf29ecb466e7b09d85f20786914b43a6967629ae60466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=6311a8d3d5c7fc24bb5c1a843c88919a62c9260e09a1cfa987c093bd2a83eff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=308330019c8d38233b708a9d4f2da905a478488aa76e66363f953b45b12290e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7GLF4M5%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2v%2Fn7qZcVoOt6hX1Gck5FDru55Gf92ERwcVCz0ep2kAiEAq1XDtIjE9VIEUU8ACgOpeej7wtMpm%2BaDuBihm%2B%2B8KEcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDApr4eGgODZ2Y%2Bao4yrcA3%2BdsOn9FOjCMGqHtitqfONNQh%2B37A34rugHZzbUP57iRw95HbBFZGi0s5vImxOHqVPXzBVhsQbWE%2Firh%2Fiimf3z32ro7jWwS%2FwWkIEUnHCDdVZ4oUDBFAKMw0BSQVOMvCFVP1DggoyedSY90C53mY5qkEBvC3UiFYYNgdCMQCpka4TeGBbOlvnzfYJJuOVzHLMilwFHyVGSdPsJBuxnH0uWKF4kbC4FXN3oZia4zSrjYx3dKqYxauXZSu4Kk2%2BP0xWCWItVb%2FiRIf%2B7q21oxQbbXt0hw6s3Rs8czhnpAI1rD1IfwD7V05A9RvElBo1yneZiHww0y7U7EPlD8OpDP5bwNELvnnxx5QmNI9S%2B6QPaJkcA3VJbh42CFxajB2e2R9Ve%2BgjUMwZe0po97NSQp3ecEQwAoztjU526%2BCgQbPEbTzY30oYMaKPoyb5P3I3JD9a5iCQBaiZT2WhAHurgPPauhNjNdNKFO0W3OX8QaqM0MXEXxJPO%2F87mylpaEV2Tg9%2BPNdBF3lKefQQiTapg9P4EbO94DWgPtfcsgFH7Kdv2fPAg1Ae%2Bip6Oj3Q1WAlYZjK6rFlN%2BCoKB0ynAgZNozBSa2wlrexY050v2lNwvKY%2F5Ybm9vZXU9xKuMEzMNyP9MQGOqUBrfRoH%2Fzp8mTFe77kKDN%2FZFiZEWhQxuxGCa4Vzjt0zMR8iE4XdlbX3crpG5LlrkHWrsfZg7ggPi0WQWOv5BA%2BMyhEhjuKbOLoTISFqAWrxNV6OUe1gpPszwf4cyVcnZYRxi1HQzC6opVug6ja0ZyThr4dJ2%2FgI%2Be5Wp4oqZ%2BeQUO1%2BczN4becATsC604qNVeRMusAE6Zkgw9lNAKnVg8oQOS8Kg8i&X-Amz-Signature=95a09ba1476409e26046a5a6d1d91f0b0560af04ee220b4155c9a988dd597953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CFGKOQR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC90EfLGhLP%2BQA5sKg4dBt4aKt%2BF1uq02uXJBvJN9wOGwIgSEfaAvhol9Zfe9mYxafENS9expFOjSS9IEIjIjs7Xhoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDICtUmIFr4mijW3ElircA7azp8MgU3igbkxLq5v9pPXsItPAkmx1uufO%2BIfbeKazIYqP0fDgxk9kE1KA4wYcijTErxRSFs4E%2Blsp8K0FR7jOegyI0lPrZU9w8fEVW%2B%2FjPgAQt4ezZ%2B2Bc0ksj7wjEA%2FhYn43PUhENAOs3jR6xUfUObYU5nS%2Bnfizzx9RAyQNLlzK69m3vn0pRphW%2F3W%2FD4SMVdA6C54Svk4vPDUPDVKrDCOIX4NlcSxJakLKpsjVtQRNvJpQM4NIs7mwe523GMvV2A0Bh8Tyc2JsYvyl%2BZ0StSpgx9NX6f1bWaEDIj49tQizfzIiCNC7JRBrtazGI7wKxwPUlswNgt6BlAuyC5FKjJ8vROMsAwlu5pke1EbPtcazPHBiCdLt2e%2F46rld7GrkdHn2QlqN4gpnDIjuF1g3%2FZSTR1YJLlg3F5nCRUBd5Yx2yjDQeMFTlgSoHIvLt7RTPImn0Bx%2BBRoNwjXKM%2BPLJUu8bOS2%2Fr%2FJuZShptR2gHqPjwuxnczcHBtpKnBkg%2BMOSe4iogyMz4%2FcwwT5nyswr9cyVBzGpm4DScp09BM9LhYGt8ESyJ5WLmiwDV0UrnfG5soJoudqbCZ%2Bo9J7vPDOWjSda%2BR4drUoExDlERdZ7gfHIyHqjKk5e3QLMLOP9MQGOqUBwJgItcNYyfkloP6%2BWcyhXpiazz0B%2BOe7kRWVuwJ1e79RvvIxNPYz7YpbYK3iQwk1PbghhKv9gA1DM7%2BRYRlY4t8JHU8XyPGF3XRkOb2RgRE1sCR%2F%2Bvpqc6OVkA98Qx7awhUwAZ2puaBy3ymOfZZ0VhVllRSWHJl2bOmyOK9UwQCgalZ23lJCXQFNoFoyQXWuDB3%2BvqMxdUfaysCiH8sqQYoFEa6f&X-Amz-Signature=4553293ed6dc8c8d9b6fa1d6f03d9db2180c4c577cc87ade5c8cb6238af0ae1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CDHXUIS%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkSF%2BauFS4Oy5%2B5Oylv8Eu%2FoSXb32wC%2BdOft1VXwwnfAiEAgSGw2lpK6O47MH%2BGo8SKtAL%2BEgoOxnyQsT5ei53%2FZf0q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKtrkJgKqIpNN4emHSrcAynztBVZq37ctRd9V7qlLlFWuBF01KvuYu%2BFzbs5ClCMov4XP0cFEkP0%2FtKlNlfdQ6YTh78035dOMPuzNKNAzHjaemIe6wYhkKrK2ELOjfBp4RGhcoS7JkktGmj%2FQwyfuTupn4m6UZPSQxerWPZORUOcT2OVKZ1UZZMWmuFuRbDjBSEKBEv6um8I91gX5n3khm071Y1E1C8Sv5lX54Jnz7I%2Fui9xh0PTY5KmudJG6cs1TvsLZp%2BnSSeJvrorWskd5WpsR%2F3JPiv%2BbLm%2FBMpzYYOvVy9kHhOaEkzPOUjzDHwQWVMSXod%2BVZd5PAJJ1C9fDKzkllmUOk8hbPDU0nIBocYGjIa9rnRJVv9qs%2Fg%2FMoH7Au5dRRTBtXpC5HOTp6%2BWAlPwykHR2Vlzq1UYp2FY6GAK3XfKoMn96gYBXCDF4ht7WqGgEGMjP2dx6TtrCrU0JMLkAkW%2Bt5hQgGIM9%2BSdjWNCFSYGVDYzvC9FpE1lR%2Bum4LMAm2Apz%2BE2gB0x7T8VIYLOG8nIcDr5h5pqAD%2FefVIdsmCXwSwFTa5XGLi9yUTyvZpMLE5n792PQmTE0OL1AqJkN9PkVSAvIvA6wBamBwXGzmEbdIf9CS5ic5tamHPzje0pimF662ttIbiGMLyP9MQGOqUBjO%2BwxcUqB8SIEkS6CXIeWVuCtqrvX8tv37XXm9oLTVu09M1dzApZ7ssfbxy7gH438n6xWPCT1%2BXPPFyAHEzdo4zJeFNjomelGeYE8Qu6t4NmO%2BPrPK%2F6eRsGo5UcWLPBQhlfmcR9dWQaN31rjaodrpSpLPUnsAGjk8hUMdarPVr%2FBkPo92qqE8yMgswgj5pE5yD9NK3Nko%2BDg07q94XssusnHTs8&X-Amz-Signature=a4c233f7451d461675067da5a1ae0113bcf81dab6d361400cc7ecd76a67efa99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=7075d13c849e1438d2c5c61eedce6c28f304450a96e279c33f1e701709589e1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RURMB25Z%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGYFKBo%2BjIbMU5nRHP7qMqg6%2Fu%2FlFk3FR9UN2c43gjTgIhAK40A82Yr%2FXqZ3G0FBoqGNJVZ04dAPupTOC8yauS3pp1Kv8DCDcQABoMNjM3NDIzMTgzODA1IgwsMY4uZLAhKC%2Bifuoq3APsjkeoLW8Xv7SzUQtnLdGaSddSPX0K6JCURiBatBwLAmPs58furq%2FeBxA34SGMqM0bB%2F3%2FzNrjZrGOltk7%2FqWGCw4xNNaBKcrIzTMtNy8hBSazjZR71zZWrHUJ%2Fxo1Iabmwz%2BW%2B1SkpfaKAPaItaBa0Kzxqjk9mKKtgYaXFQKiuewnH1scLnL2BZ1NddPxa5IwW0%2FkWFzxUm3rVNtScG263BFgggBIPWpa%2Ft9aiRIL212oI4MM6N%2BorslO6s%2FE1nWpNHR31oDuLNKpa7krAS4hBy6lEcXOQ2NjJOmWWciY0nFyRQ4XMw4yJjjgmDcFTlIeTHXyaYrCHEEtXPJL4RTfsiEegyk4YkYnZ1CGFdn55xpMIRdLjY9oDI9xeNX7Z6HrGWA9ZBBk7CQDIATXgk7hpzXeGnZQQUy%2F5hO9cedSWvGMGra%2F%2Bngdqhj%2FdkFfDM6B1nvZRW%2BvI%2FHjN22%2FJiQaCK%2FJMsJgukMJ00yHsMId4OcQBQthOSxd6oDX3rN9eidXOERV8nu4v0KK%2FHYnke9JUJT%2FeUHxP8eaQMCdkh2j0wXZkCMtesjjuAD6mUqzgEBk7m0FKfu4I8L7dv%2BRMFQzEkseJYECNYEMgZr6GobDhIxBIMT3snoZOBgFjTDzj%2FTEBjqkAQH4mSejqPqywXQYv2MMt9X9UUIR53SaK5KPovSHffOQo0d8ekufLay7DU6Ha5scn9z8ikdvJ%2Fw0ZDPg4dIH7yMB2tDFQn3MWoyubjf%2BdHJIVnbaeEA01ZG7x7%2B0Vuc%2FBuf2FQF3FGiaiFs31OhPjeJscUwaGnZFxIrVkykmWCJfvAGBgJOLMUMJgWi1PA%2Fh%2FEZN94R0nWElTukLd7D1ACmQCW41&X-Amz-Signature=87d1672415fa4b23a163d1244b44dee3f648932169701a6568b6d94010fb598d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=23a1d06593219c5bb528b961a189ee9fdb434c6a840eab5f3eb7468d071b904b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ5WAU4G%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTq4rRTuFq08IhDEUgPpKds7B2LTI%2FIZItM4K7fSTV0AIhAIpUd1ajYh21t%2FJzFnOcjI4zHdf78AqSUuGsxlb3qQfWKv8DCDcQABoMNjM3NDIzMTgzODA1Igwee2%2FfNNIE30jTLCMq3AM%2Fc0LWsPShnUJQmzE4OtwNgUaq8QE2UBvo4quEspRKC4CtmkZkNpPf55MrPuvuc2q7%2BYJ55DUUWJtmJgPv5Kglbzx2yE0vs2Y5QKIQy1JI3eoeq%2Btgse3eAw3etOv4jqRYcF9OHI7tHufqEHaOP8aUnyp71kOPE2gZApD9hzDekR2xuY6TvHgOpocoj1Pcym1tjl9dEEmDujMW4Mj3KR2xfY4nbWAtvpwWr8rXt%2FSUS2Y1Mwlebl7S726dokelRhOtHdbRlAsfs%2FEUQGW0yRrnNhdV4EQpleRd5jiFW3A6J9CbAEYZhvG2es%2BctYy0QiUSseDEA8dj%2BadQGDw8xZw%2Ffm6gfm5pscrBFnM%2FJ4makqcJIdGGkgH3Nplgr6ztzM4wpvAEekpjHMmsGc2PTHH1VYbckeZB8mw8n06HvPJaGHMfV30i97f1KczjpY%2B2GZ%2FxIeoIPyYon1gRpfr49y3HC0cImSrbZL0yXJxVt6M4YsQIFR3%2BFxj70CC%2FVcEnUC7HDKTmbEYCVX0x5drpKiolUt5TOL2ywvqbuFYbkUZ5VRS0lK4BwJgHgTQ6oyqPcgj7dLALrJBRrDYg7PH8%2FdqtPRN5ZaEYdktPmMrvwrimuIV2cy9CoRd0jPAHhzC0j%2FTEBjqkAZ5%2BW8jMmkcNvF22RDj4oQqkr%2Fa%2FygODvSonxBLC9xhXR42dSXQi34sUrwp%2FW42mPRVowx%2FKcbgBdRIJ9sO6Fv1bQ0x3gKDP6NmJp3jy8767CjpGarxnlhZMuL1xT62CYIA%2BhoAHUs4Tn08y1LAdkIXvL0DnbfzQRyAbfQNih7NzaqZIe4iNGv80v92kTjUFGHWIH2bEFXcPSKT86LkhHBnEq9eh&X-Amz-Signature=78f76e9d0c62fd36e6e7910521a7bab3d1ffa87338b640795f7c184bf0bfcd7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=6ecebfaf4f1f557b08ecfbc3215d75b299b5ac6cda117868300e02fe070b6a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXPFWPC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGRpKpMLK2NSuEmhPCZmbUeyhOX7cd%2BfR%2BKscNEBOmtAiA8RESNCQ9Rdhoo8R1Gb%2BmlxsoYujEHjO3uXQ3S0pkp1Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMg2a%2BkNjnwmIYITZiKtwDFkKtKkpfEYthtXPVZsCeTn61hf3VUzEw1%2FQdjP3KicLTUPjmIO7fRWVzzsXPszQu%2FJj%2FpM76ZSfZysLrn86kI0ZnrMh%2FeplVwzuHYctkcIWaALMDm26nGYo%2F4eRw8QkFC2qPeq15QcpKplc3vuT2Yfh12R9eDDf71zpI3xTzljjB2bcNj%2BCDLRtCG%2BNR60PPwvNy6OPYAIlRuAO18dUnXDlP9LdiUa57tkhUn4XdFrgYOb4JZGodOXwGHdCdMi%2B6hXEgeNvH7ORWem7MaujgXPsKuiJlUVeGnSMTRdBhhsS5rkfzqe2Vj0DgTZirA%2F5g4cJ6ETiMQw8xMdZRcUYLh4V7Ji%2FoesbzQHQRsfIWb42soIrfO8iDxI0zUnCbbBNBfeDDK5aou8zLe9vbPABN9mVk%2FnSyozl0LiQO%2BdSWJ1sg2J38FCEVNT1eC0Fb1MxDjH%2F8mGe%2BQZ%2B4MX7gmQdIVAemkEIaIZaBbscf7CFZlNtuTVg0fkMzfc8VSkC8LsHeYlBTMsjuo%2BJmE6ziE9lYJRpHHYQxYevRCKEWF%2B7ahvfmXhjM8hTNimzQJhz8a2vbnKkcFtxP%2Bwa%2FhcGeoRA89lQd81GuKGIG4YxbNHgyh4BOVDvAM8PCUEMIcN0w%2Bo%2F0xAY6pgGZ3tpZ5js3RuVrrnM7Ham%2BhOIJJe3D52EROpJ65iBB%2BnINMMrGaaopuaoh9zOUBdkI5sS%2FYd7TkCRRqW7Kpq%2FebaNRJTuMWqhV4B9xbBdLjNasSg98KBT7sD9roAmU%2BgQqQqs5KB7EjFmlgqDYRpYAQ7gSiZDIprd1Eohfk0pViZtKLEcynmGWaVEGlJRLv7DlE50NPmthbgyRAaqHaDoJEHaIJ7M9&X-Amz-Signature=9e90a5033e65988cd3a94e17ea2db0535ec7504357ebe5fa0e816adba0044f99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=d26e1836149e40d8505841fc45a4158a919f000eea8f6933a782c175af52f855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYUGK6QR%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyySFRpFcCPzlIpJ6GI6Enx%2BSmIVJ3bT5TdkGHrizNKAiBDkzFWSNDtC3sp9en%2FEho10uLlzYenPql4%2FxmZMlUyqSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMxYqUKJM9Ry9cTdn6KtwD0mICIgSmQ6glsMnau29q1pn7sx3IGiIjDIVinsm0nN1nApHS7WNl6iHQy%2FViULc5JgM70bBk35ME13bVzzl8na1lQS6iO5VXTkc1mdZ7T0Oxw5VbxT8x7iOV%2FqzYn61AIEW89xPJV1k%2BRXqUx%2BiaRbI1%2FQMB%2FsjY6FfeL%2B4xpbUffdNSL9jJCqTe0Bt0pe8mZhraSVdy8vzJTzK8A7FSTnCQZY6QucSmFGRRa6EeM797MDXi5zbpicywxJmyGz3EnK001QUiG7ToVonxOCv%2F6JeZM2DWuSq%2BZWN3DY%2BxACp55wRJzR5gTK%2FCL0Rus4gX3rpxxW820%2FMZz%2FmXpbYy%2FOXpbfXt%2F5Qi06i8Zo9S%2BwwflEUT9dKq6oB4SnyBr6ovqphM2seNxTms65ox9v9b1T40e%2B0CWZWiAOdlLg1LkJ2FXIonKFJ5q3BxnLAX%2BzzyB1cY4b6%2BiaeBNmcOOhcZVpgmOlCq%2BI9ltT9Mxa3FOeYjf8wM2OFiU4HeKrVhC1%2BB6dBokATXJ5i%2BUPU7z6OlQet0gcWbgrv1u5bU0911b0UmEQAPRxTM1uY%2BJLGsU0IUnV8lRy94sUxDQw%2BAYdfWpq0OknMkqyIysXogWzDhzB0n2v9o8xZpRzDU8HMwho%2F0xAY6pgHuTFHXFZYgAKBl6XoWS3MPdMDfkYm6tZT%2Bqd6DUHfckjKkthvBRD7I3bofsaLgH0xvheh1Rj%2Bt%2FBkT8meCYfKdbtINy4IOOrMKryk%2Bsti6JoTX9eE1zwUxTj5qJbAYYoeJ3eSPjSShldWhhUbUaPDwU5L4jO8bw8aV%2BqJOhnnU0mg%2BEZC37k5Ur6f4tvjtx99NTlqzcU%2Fm76QEXa8nOpurDRTJYeKK&X-Amz-Signature=a5888251cdfa8cfcce404d989a7e0182d70f4d8d4042c847a80a9c00c7bcd547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G4MJO5E%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuee%2BSYtz69v2wciA4BczfpgOLN%2BJCNf4IF081tKsotQIhAIsoRYQa8Gyc09l2JCeh2KF6dp7S0ZV8EKVNT0qyDquIKv8DCDcQABoMNjM3NDIzMTgzODA1Igw9AmC9O20mtOv6w2cq3ANfzX2MwsNgG0DH6PIC5Vlp3HcAeULLRv2x3LL%2FSww82kb3q95HDkd%2F6siUDtiqZG4aNAKgfAQq3kcmw%2F0LHsXvq8CCCCdAH%2BbRPXcwrgWZsoFLXS%2F4jhpk1NjXEf2%2FYrVbdKO1UE7LW%2FWlA%2BgnYVyWPF4RS3HA7ivlbX5JkzK4ZkvlxNHtYEux6ONNwl1cycp0hVNYIXnvhvo7avV8DHG7TyDzihY11d3zxU0W0ZLY3PY9mVdW%2FHbRS9XONJuestXTdvf9bViBeLHYNO0XHmsU2RAuWmjUh1TBFDDAiSX2RgB2rbdrhMwjrNykq1UGaMz0aiLuTkF%2Bi%2BcOIRhIb8ttX%2BvHipnIegwzw5khPSpPod%2BYgGm7puv60JHZf5GMo6bPr7d%2FvnbN51Qwq6cYz2wxC4rkamm5cljervdQEqSr%2BHGpEV2vz5tOiHxOR1ABGpda7sV1j5I5GNHjr6Fuu%2FpGpKg6S63dNGneUo5BOcpWmgq17crHzKNGwmnKd%2BijAcVPrAWQkKUBvLfvokPh7wRcYluF%2B1TVaCIEpwpuiMHcNdBj5ZdDDB4D%2FGK1EmBaY9VM9fzHBJ%2F1fon0b4q4Lj2xv14j4PIJdC%2Bsro4ZhsECvxP08KIMNNVacemPhDC%2Fj%2FTEBjqkAXRUN%2BdNJ2cJMi1zUoGyRWj1ZOw2vJHMP2zWSlSx4DHmWBMZlxpvSvgggXk8ODuNI7YyGL2IduuFDLGA8Ub%2Fmltk0TVZDiO9uj8iyVJ9McbRMyqT0%2F55eCYGnWoHOjbi5gjyT0iiL7bDqHo1UZyLnGRAqHnAPbToICXgqpf7JiLZkDtO6TS7q5o0XLx7c1ndJd86dBk4DDGcMsADqxnyF6DpuZXS&X-Amz-Signature=091c7af6b32cdd02ef7345a3117bbb3fc52f39f485aed8f78cc3ffdcc01b8b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOMLDU7%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBFZg8PeprTQmwLjCGTor4zhaHEDrd3eLoVMa%2Bb7gEmZAiEAqIVufKmhfvTX1hzliOI12w%2F7JvdbONFVIcdpqRiYfwcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDE7ca5zUL7%2FPHDVFlyrcA3xeL2ZhsOs%2F3LuhPghcGBXhfzVvO%2BPyr1TRfXwB6f4NVsJKUmLKvZnzHAeOXBQZ1TzsGNOdr3%2BDMOT8PmKCqQbhQgqIgZzLRlaPabKKQaPyMCzLy1gUyQx%2BzSM4lzmewZ2vTgSKOzACP3cpeNgkx%2BME2XpJwToU0m0dF%2F9U%2FuJYOiDsrXPZh4R8BxEyLfoK2jeQCYxS0hMQeQmkp77aATLXZZZUnsrO26Mlvm5V84H0eOdW98XfJGNX6vtMcSa0cR%2B9YwOoPZLhJP0z39JK7x6VuXcOuNdGA7Q5Np13S09coMDz8KTBVpKSWCuiwaisQBn0m%2Frw2CP4Un%2FhI%2BDMSDAY9EtELUWBu95QDVVNuKxEqzymFJj%2BAOIcGveRAmp4zEIMTIAH9cBPezJZ4yy%2FHqTSZ%2BBJcmPedAS9Vu70tGRPCPAUNP1Ba%2B%2BhPuiXV5YZK2%2BBJkLLhxu4lQsV63MXWWCyI%2BhwSg5ikKpeNsWUnbSwdvAEGUndSTzLQz1Ja%2FGZsBWlEL4aO5dlKJEXyIBGrz1UlCL36Kuow8%2FosTw%2FETG9M9OE%2B2aFM4soEGhWfxdsov7oZtsrYjbnUPRwx%2BIrU9aFi4D%2BcHdU8xt2fv1Tjp%2B3TsYx93peW3eb6rMeMKyP9MQGOqUBvp5FZRjSbXws7Djf2xPEBtp7N9SE2QZJbtsZRC7%2FLoveZWtXG30B8aKDzM7cwW7pedS31EMoRQs2DdRwqGfT4KVbIBX86lqV66MGlsQrEgvoEnaHjnyFc3tAjt1WhR0SgSxOaiQbarPHH7jiirft37HIQOb%2B9jcdSxgVl1QwUXUR4Xc3D7hupPk%2F%2Bx6qoS5lLV%2FHjs%2FivFZIXS6%2FTW9X2AB1LqEv&X-Amz-Signature=b2bc2b15f5b2dd68681ad188ec77b58a512e5b25d14818b3c199c0f55a1e12a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQQ2TMYE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPE68vBzy90oXcqiVZdTDzp7rUWfuhuGqf9kUdqCXsVAiAFzlrcR3Yr1H02SZIZ6cvNgkyNrQXyG%2BPU8Ja46vW6rSr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMwdAi5x%2FPqRs1svqgKtwDw9NkUEwwdQ9IuNpGRSZy9kXzjrjgpLJcQwmmmh6yXPU2n0WatZ5G3r6ITQPWdvCt6baqdZPkGKJdp79ykZyday%2BA5dgolBgkj6A9yRRfGGRKYy2ZUhC3DttxpEmbAnkotWCNQIpJyIZvhMBy7bQRXi7RRrk0vXPr%2FKBFQHsyyNnq8LZ4P0vUQzEzDCqbj6Q211tjoU6UmQZez3n41sAmKOpJqYkNdG2T6GEybXIF0OVWJMD0SRFjDAy8XsZmq%2BiRHflB8kfKURQPkIVaxg0SL%2BCa90wg%2B5pPD4ke%2BTvjHPBU6ITcs7FxxVtPtnlO%2FkZV1gkRYn2A1tOaOZlucI84h69YNyc7WWdFbnAi1kbEDiCiqq6H4M4COal4zue9DvB2agatfnQaLs0i9Aa6PvI%2B4FKJFszyYHTgsMLYhLBptZAlORsefwPGSGYjbQcUOfp1nC6rNgm0ecGpE3qL31TrtKZudrQdBA%2FDeMHIjHtwy9QwlKhh3wYvGzW3Yy3HOk0WMs7KwIA8FQBRngvvIvDDK3W0yOakMPLYZOtqkfWxk9S4FnOPuyjO5La0fZbKBdyH7KuTkElCwGR9KYY3T1Zgh2SmUD1o3F8pziXecfN%2BDS2Jdocco1L427jb8dgwlJD0xAY6pgGhLlJ2rCsVGiY0G7LvKRvqXGDLM9tUtr1tdnqqZko9UsMjXVwuZPrNJZZ0xc1iYLXmGoSQ7mdWy77fUfmZg4aRVo79DXIU4hJB0Zl6d3836ZUJ51WUgaz0P%2FlrO4xlMTbqofillv8o4f7caq1tGKdV3vcUirOAwT0TTG6qfgmUviFNVMh8v%2BoSnNgUhx5NfNbkMNRksRq3uYBdjJ7e%2FWjJwLIOhFnC&X-Amz-Signature=e8c9e76fb423a4e602dd9a7b6ea3ad7625307d099f3fe09d6cacb2c4d260ffcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646J5W5DA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T221022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAlt%2BlOwcr%2F4NrzE8517pexWcaT%2BnGn61hAD9qgDAXw6AiArJtXM0LOG5UlB%2FvmGybE3ReqPDQYeiMMecOLgGe5irCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM8PNqnZaM2XY2E9KjKtwDIXApnTMBhCWkmaLuS1FkjYQ2wzvwSki5hLYvHCY%2BXOGDnWSVeOcr7p%2F8JZ%2Fs11kkYaJhmTSgOIC1CPkFfjR7DTJ4tjNrKIZccB7L27xld3nvOZ2MrWBSm3gU%2FogpfbkQLvjvplpWGa15%2BUyL944viT%2FJeqnGq0IY5DL8HyfK1wWKJFe6U%2BYnGgioWiEOPr3Olm55Fl%2FxuFWy43OMHrXGKeS9VHYg48tnzC9dBOdcVtn4g1d31mI9BpBBZhm%2BhMEy77eXZytBeYFIXHANShqlSfh2%2BmF5tCAFjQa8m%2F8tlLvce6XxsDnFxJr4cZqDpIukwrQqiR%2BcPnskDYpmC8e7JhNDTuTgvO07AeCXEyj%2B3YrOyTaSAaqmxU11MaBPPsFVMft46w8P61kkrAO38DyI5dOSu3W2aWpAG3aXoL9BkEHyc5ZsMHkp5ByLcl6fQb1U0WzXJlmrSuUh0e4Qr5LSV3X1%2FObqXEA2gcMHmO3PhElYOCQMvx9vCMnqfvllDbbNCz2sqdFxw54%2BYDFvJjkeMbBIlLSQLmz6l8WUPYzKZ%2BYVqzVylTFRUiJLSE%2F7u6%2FoHZ7FfE75JLh4QFeF91gUAFei4y6b0JBPgdwf%2Fmj3%2FV09m2Xvj%2FoQGInOiG0w9o%2F0xAY6pgGDxmrNAAscifvn9bRYFzC1nPwg9g5sbGhgefjl4NVrg2C%2BL7%2F54FQjNrOz6OE9xvMNzxEP51wxfw48hSbEdrZVx4zBfcHeazoM0bbDa5aS1JjDS2WsVEzdang6dFyiu8wrXcyxVkO2U3SOyxz41y2Ge2jVt3WwNVKj4QyjWm7UyWkAWPoQc06XcdAfmPSQ2ijvxinA6ilJkdUVh%2BCoegnzWbEn%2FLEe&X-Amz-Signature=e46ab6dc83c26f45beb8095dceab6ca988ddea5ecce3cf78ab66d3003da555e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=b95e5d1a7644d04b7324b69630914efeceabd6be2d15df84753fb7143234985d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVCRAPI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLZo3j2qsF8nEJEAAuqiDPRgHieBWZjwvgMwbiUssBlAiEAlnJ8ryMvAzzPsp1mL8Mw30xEbfNsL%2BsxHTaMMTClS%2FUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJhsYZ7iq%2F92F56PvSrcA%2B5L7th9YV7QJlZw2%2FGVNIkGAelYybpt5UM4lnkT%2F37AMQ%2F9iBejsuLBl2Im4FSP4WeCQp0CtAzgdmvfH4ugVZQf%2BzY%2B2L5eYjcLc2vCJk3tguGJ2r1FmpyAxOU%2B3dAYM84trjtBGL6uJCGKwnrWee3QXy2oVG833DBNQ7xxGR7cjC3zvD%2FYWZwVzQWS1O3DA4TvHqlIlYBWvND0RdgfJ30PLjI%2FCSRgMdRV4dUNvPOucZ2mB5mDbWxS6HnGYjnH58tIcACoGBK0tCYgMf0krjKpk7FXj%2BO2vY4L3YC%2FYTIZOqwDgqV2O%2FsKR93tL30LdFFUCcbdFA3E5X57eYrRO5eRQHU1tNi0C6PLWRaU202ifPgan5gU7j4hPTYiFq8RPC5TpcZNrauEp9F%2BWSqpaM6aEvm3L1r3iIHw5Kpd5wNEQglpB%2BcI8NcweAcz5WCFWxTZtPhWEtshTZ9zM1yPFwz%2Bz4uURbD%2Frh5Vax0LlQhCT27MZSP7nVVEhZhivy%2FzkT5YlceS9snXB%2F849VdtOSNe8PgyfgQlriOmlRQyxSvB8YMMS5F8pbeSHb2ju%2FsyQh1ZfKpkRq7ijXDyMe4Kp9Nmrlc2yEZPjJYLzsE%2BvGgHttVNmxfEV5lULbCVMP6P9MQGOqUBlPHSFG8nLuQpi1kAtkwX05Oc89sLHP4Mq5h6329hoiNldvSA8ypvPk5rt8BFydh8Ux5QiakSqLdP9KfWGvjD6ph%2BMWCRzcK9vCmduy3FpXnjgNET%2BP60yYd5pu9vRdB4vW1fJniMLH2Rj%2BSFiso5cd%2FSSOozSewAWuqWnlAk7ms02vZRyZwuaavzeUYeEcybnFRpsQ94xhAMqV4YNLX%2F%2BQJywZRL&X-Amz-Signature=e881e63cafbe02d8bf925cbae7201891539cb2e317827dc6d876789b0017a03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=4361fac51b2b34c6eb4f87f622d6b3b671f84af4692848b965acad6bac267828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=255b0d3054364062c633e6c3d9eb020efe036bfa7ea1f94afd47aef1de307c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=7ce0885617f24879aa4bfc1daafc6f0823cda51c12924aa7bdb15b3825d10a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=47bdaeb1971f37b4f92ca98e65cf4e3f193a42bb8cb81773ee5a2ab41c2423aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=95b2ddafa17787e7b824fe19a6a97baa47c74d80482ce49ad86ebd5e53fe6bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=2304f6641bf344acd240e2cbc2d674313d81ae88e672fd632b79540e7914efa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=7ce0885617f24879aa4bfc1daafc6f0823cda51c12924aa7bdb15b3825d10a46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=25dc0fdbb1b17dd80a0f9940c8ff9c8ad9d008d55205243380d5000e043fa2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=ce9bc89665049393ba392b1b981cf95dc95c8025ecc58a2eaaa4407dc639affc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5WDUWBN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBgza0or3eOnq7rCoVsRDx6cl7OX%2FyxZ6zJnMyaxq%2FOAiANB48KOJ7nm4flei6jy5VUQIv1zSbXOmJNzfWbGmHvTyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM%2Bs2zk5YUvLYSyrGXKtwDOx%2Fc9CrFlaHPgecknBRUfEg90lfMZMooYpHVfA8rbjCQlNiVwk392q2PM6%2BDru%2Fo4QlHsV6fd7xrodttOlM4tg%2Ft6Rb3kD8k11mBJwSBHa690svnws%2BdiOyZ%2B3Bw%2BjIo6o3jtd6e3tE9fQShTsZWXQvlUqGxRQktF%2FdG59lNUiM0LKxTgAe4b9j07NEZgMklu2Gs4Ihi3oNPTZLs8r75AMQ3A%2B0g5ZgRPZ%2FfIgTWihOznBFTwiaTmpSiEehKFCFK1Z%2FSdpcwx5LKCwR5CCKSh%2BCxgUwaeCqTR8r8Ko858H%2BLJ9%2F9Uy1yhIZKpmhSbBQ6RaYzyRrOrKXR%2BEZhQuiwfvgRPAS%2FR7GMapIrBzbWYyc4fYvZsZO93r84312gg7I20n79n9318D%2F6I1HS5ElScxionAat640%2BQdQshPKtq7v%2FeUK1pb%2B80zrMOJI%2BVz77ybNyj0cJQzZlEAc8nP%2B66zY7e3dfESYbNdj7vPQVoW92%2BFvN0EyVOAJA7ErXS6DAkQUxqOXcmA69dpNKFZY%2FswlGIDZjKjjDrFtaxgHO%2F%2FKj859ut7MwR3cEF97tN%2BgERBWR8uSyP0rkjnNdhciWPHeJnYaJ3xYKJiE3n5nWpXrk%2BFGfYNrHtO5kdhowyo%2F0xAY6pgEgdkW8%2FlHuIhNseduBHm78DuRXlm0uEbJj6sem6OP%2Bd0FNYIX8URNyPpKeQs6WDI%2FXjIP3%2Fm4xuUsk6suqenqUG1gsOTGUuTml0oSXc1wyRj21XGAKiDIQL1X5GlF9spMi5ux3jHzexYz64MJwMRjz28ZMeNkIvCg39lCRvWZHDqcUjCDJS09%2FmT6gOCkSEdno%2FCkkM4AG3nOOxgNGWzkaL2f5mbJ3&X-Amz-Signature=217c79fd72bcb34a45c2e97a0a578b461d20fca0d13b7c54ffa71dedd37d773a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
