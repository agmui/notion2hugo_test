---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=0d6ae779c6693957d66228ebc149c6bf35a479eafce45fb99fce2bf32c3399a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=b20b6956d280eff54b02afbd104305444f6efe3e5f2eba3d8b6f5ff7fa1dd136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=6415d6aa83a93a1f1225e27c5650405d8cbb3cd1c2c1150296044a7d74545e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=81ce091975d9f35f20047c8a535a21921b41059cb18083931b371a9dbcc69d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=002cdf11d455c1e9258e90db895e6135dc3d97227aa1d2b5d6c94dcbc1334c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=4d1d9098d4a47716ee090279cbe1e4737766ead6e91c04926cd788a26b7fbe93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=c1c2e3d71b03ae8f4ac1681f643f09c10785e915fdb8cd7a74d93ebb82347c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=c7765a65e8910bab7ff95017286a60c30e3849de897e10d41ccea7c57d932c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=148a9e9371bb0aedbf939e2d13f2d4d72bef3bbc3f1a6de3a690eb9cedc4cdb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=7ae0bd73fa573cf760e20c67b91971f9f4db3911c71cd0501d332508a13af08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=0944f0f6a41348430d239ee1201cc8e76fc86fc0b0696a7b3bae524a7f4a5f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=368c13739860eeb31bac5685c4ddb975dbce5a2acd03452ea9542bf77522e069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=13477956ba961ec2cb03035276f8d5993e8c511f703e20d42ceab324bc518ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASVZDIO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQDtT7QKw4k5x8BuH%2F%2FQPXd4qdM6GEaXphJQoc8IDnRVUAIgB%2BXwE2TALv1Hj3PTBuM8u2hr7zo6PjMOrBadlUqZ1gAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaCIsiBMr%2BfD08n5ircA9QqyStEnKhJys2AlDKxXHWRi9u4Zj%2FwI9wSaE1eCw5Pp%2FnacgyqAHCYkDDV95YM3K4u9EJMa4DD%2BUDk9Fk0OT1s4Mc%2BERNW4Ng5m1bFt0LjqrtRZt5J8K%2BuHtywFfUAYvBhNefOl0027f78cyxQtYItJKM8siwD2Aqo9tk16eznaCTallbCRghylP4sAI5Indkbsa3qsRdOS%2FWLzWPNa8uc0TaMDLlbt%2Fa2yscxZtYkiIEvzWh60YWpGnDt4aozcSVgCSM5hY8EQGVVYsQV2Y%2FlFI5UvHKxLhRiDf5TIfC1Sf%2FJDLFA5tHBcXsU1pW2b9tBSQvxRHBeBPzdQ9IXVwawa08RRa3%2FyKin5t8kU0%2F9cdHeP4m9fGDEgYjE%2B%2F5Gttr91nG8VmtRXsm5d%2FeVlk9bkuglj1dAzywe7KLlCuc4GOCIa64I8Rh0AI1JIXZmv%2Foomb5d1KxbkV7s5XX1ir%2BQej8nvUVF1oCtSJJ8crHWXImjIvDJcx7UNBa5TP4aQgy3MpknMv9V6cisCNB%2BcisnNDB1cWlz5dqPmilp42SPDUYXK0RnmqZCuhWxLZ7Bno5Qjy4r0uaNTseRuPx7P%2BLtyuDQxQZlVmaq7j2AM8yc%2Fzoye%2B79RekTv5bLMPX%2BlMQGOqUB1URZ2ik%2BedwOUfOUmIWN2LGZV7%2FuMCT38B%2FstKd69AKBn5FMou7govXLYAvqxsj3bH%2BL4kQsWO2TRRk6A7TEf%2FOEVEiujKix5PHLmQrpmQ9g0RlqleJaEAHkvcGF%2BwiPOUNcFd1b8j8HFd%2F%2BWcdEHyoE0fbU4FU6hkOfkqw9Ib1wwPHuM5zVn2FRrZn6l8%2FwYolbi0CQVY0XQ25fdYgoGPDP7MBa&X-Amz-Signature=f0d7a0db6edf3e11ea112512a6466704f6621a554898549361b91d1ee943b421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=47315a4b4b1744efe59e67a2c57fe184529fc56c478a5e8f64bf886d3a6088d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=6e4d246dd0fef303836ba6f6e2bbbf8178b32141cbf80a01adae8d6ac67def16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=cc1f16465cbe0f43455e66485d324d281cf619052ad7519324f59cee301808eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=357387d16ad46bc5c1f0030bb4794208ebbad5e14d509643fa954494b626ac74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=166a2df28d18f1c3507559b1ee7f2292681e04c28e69f696eea0ba4f510006fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6SGEU4S%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCeCIUDfrr8r9uY4Hk1UqFtLVMUm1aVPjhPSwZ7nSeg1QIhAIf3r7iOn9o7%2FKjdsiu%2BRjLUthuz1i%2Fvx8WQCq2UCD9GKv8DCGYQABoMNjM3NDIzMTgzODA1IgwbhkBNngbdGCnKUuMq3AMHB7EFEyNy%2FkrJCAOwQPsQCMThXKxa41pOvUAjk%2BdllJqwUuvpmOcMKwVIJ6B2QErlwC2v8Tr8zisaM9S39jAmZYlPRPPUOPmJZw1EL5FHUdJUHHtsQqIRyHLmjHZsNTsElh4RFLrBpPbI0JmEq0S3BPRs7y2CnPSkT2S%2BoS0Asp3T%2B71PLh2kHbsjBuvztpf6nNu2taCmcz8oGI4MR%2FHxLtQctRp59D6FrBG2n3E%2FOYk34X%2FfXpnqxAI5q2DAa2XSFkeVT7Lnot1PK0aov3DBIsEefRjLU9dxcW0vdf0NvkK3UHaSVeIaveZBhzg6GMRblgBTCqlVJIgjW27rzgGraLF5xMpbFZDoPBo7c7PUZ%2FpJ6uBx8PVZni5ktjg4w5oo90glTOsuE9FggZjSVIUUKdrDAqNtwr09o0gN0IZT8Jn9u3avjANeOXk%2BeCYjsPZQabBlrG9Yyu8PlrCuLlRhmZwq%2FZXdJTg%2F19jHc9X8HZhAtjQ6U8o%2FGhc66Zib5eNvndzD4UYSsgnlsdiJ4SzaewII0ZinYOpQnxmyR7ZVpR7DaX2m6AInZ1lnXVyb0Nq50vY9UkXS8xAkCSS1QE7egU1lWLVkRj9lD%2B0ZYl2L7s%2FSl%2FDbWTot7IBaszDi%2F5TEBjqkAa3ISkEiwiGnsJpiHPjtGRIBCKf7kpZ%2BskEAYu5zwe4cDDvOb8Ldhv0ja2Dyc2yENljElu2MckOyH1uQ3OXwbSx1WO0B7mDP8W1g3UPlJzdV0iUK9PUWyJs%2FUd53k63oqTESUqI9homXJD%2B2yGBuCUzjDROkNdXg2WJLJS6t5RpSpaNc0uQnRqrBOs5sMMXVF2UbYu%2BHo2MbExujQiClEUPdcU43&X-Amz-Signature=80f9e904bc334f170508deb5a7b75127cb85888554d0f0abf5ac61f6c091bb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
