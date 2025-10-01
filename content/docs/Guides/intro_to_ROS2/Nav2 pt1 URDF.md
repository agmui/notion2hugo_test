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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=59592dc70297143c2fa1c3f013852099f52e99ef5329853e1fcd5d7645c8b283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=688d274bf9100563b11381d90cbbf6bf1a1b89d439bcd3b976d6b204f5603b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=2df51ba335e460caa0871b877ab505e67859c8a13a6a6cbbeb019ff42fb8576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=3eecd65a8be377a7e83e4a4bd7bfdfd40faeb1fe03a867956a9081094cfb2496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=9035aa8478d7de11437e6150da914544e83250157c671cb735a89c5359d81ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=7af91ee146dc9db77acec71319084e91852734dc11b667d746981eb7ed2341e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=3a5c1b96426efbbdc5d2db3f151f96dc1414b76eb800e435b266c4f6517b77e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=ace5cfe3d0b346992b716ad8fce598ee6e43540d3144f1afae93cd684645e9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=f2e2c4c691060317dc3e37c907212173d8db031072549630b81d3068f44ed8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=39abec058ec1211449c956a106a9ba3513fe71a5c7e54edffaff01c9f22c33d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQX75TBW%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQChXnUNbk8Q95yn2LhJEb8ZtSqliJZfFHwX5kofGVAy0gIhAIXxYzlYp0HXDmV9g216LAZ3GAYJrYv8vqMgZcXE9uygKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzseutT0ebynTua3iIq3APemJEJ%2BaU9VpvAEH13DgcwWotFXwuCmqm4MUlaIpBbLDwVawASuf9Ieq4OvJp2VZhyzSsyrS4FlT%2FGnNERrX0a104AR%2BGdUwUhcqr9iRrq4FYw4jdXXSUdpmbMCPSr8Au3QG3BL7MOckkCHv5d%2FrWXDfO328PkDgDvGT5WoSSAnKYTz0YECuZlXCLNv5W1SJpOciY5td8CR8Kl6w49hBVX%2BPqEopulVzeDSHynPDRldm%2BQMAn6uN5LZtY2hFi9Rz8flki2P%2FDnFkxHDZTV%2F0jB0yWSH0SCgX3uINlexEdDqH6V0wIsnaSi51bQQW8tXLo4kqo3fcBFiXOGm%2BhvtQ7oCoG5Qmjn4JbJ94gI7AAKK1AbrJ%2FqsRQEWBP43z4%2FpUe9JIQOwjHoUGy84ZkN%2BzPks%2BtJVgTmsjz1SDqYcJZ%2FHiuXI1EnSu1f1%2FUb94FlJ0vAWxzX35EVBb5U8n0%2B8dp4od86sKnEaubDIoeuGNOhCiQSYbJ63k%2BSk0toaN%2B7Q1tux9hkNj%2FEKKEIWEi6FP1ltKajVjSVcrRspCGL0WgitbYL6oCGMAVoJdHFJLYBrrNcRgNvXnQMMib37J9Gic0eC9VewUQM1sYHQ2jEJiZMM%2FguMy716V84MAuyATDWiPLGBjqkAZKk07UfPUtWdIZ%2BpSWcWHlcxQ2faBu66y6mrzcgABnZjjL73RDN%2Brv6VUEzpBo3ku6PeFJ0Ynkk0oCo6JgojUIBZ1bsTNZzKyxgo%2BQcZu4sdtRwJbKQx4gbBC%2F1xBj%2FNt%2BAGkCq2RX%2B20GYdrVVv73EwoZNUlkTA9mecRP8CX%2Fenn7PWPDmX6tHdAmMuem%2F5RurUVIeLvOEO2XBgv84eqJ6DTSH&X-Amz-Signature=1f31b2b2a92039e737814dab4f23ba7b8bb18b41a8ecec37b31995b88db3d594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE6V6SU7%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEIfOW9XbcmCFmwq9ldvAk4wgCceSsORpxsqROQZjuJqAiEAuA%2BI%2BXmswU5Hkxcn9ybYOwGjwzxeZXb25%2BzeojER3fYqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGrO1MVpLamsXh3DircAzJzxGnTFvleFeHzapr4Q0mWZEHyEvDAB%2B6lvI27OgaQRVl7uL2pLt8%2FUVDo5KFHv8oaOhwZJWiz19dvaa1Aqw%2Bm%2Bc6s4LeCvTxockItzuExtpkbLA3tkhyJWQfjqwEQJgNAo%2BwqEAqbDm3%2FIvOXhE0QA%2BQ9NLSo22N%2BlIPCiUDoHuaU5MiK%2B95qQxcIDlHLe8qoUuL34jhxg8ZDnUejQpWf%2Fzz81F4S4egV%2FEzMxj2Kh5Ra8FLRLjUYYb2K8XuBwTKkYfnLuY9KlYZTP4sWk%2FWMLDyEQuUS9fHP5H4Jp63L8u9fO0pZctN1A%2BjGDzlM%2Fo2VSbQTigu67brU7BV7HjpQcu%2BOXj0DpXsjCU8NQMTFguD7A0PyszyE0WFI0lVL2cZHFad5Y9oEnIQmo45Eqsv6V8DHj1jMeW68VftIkEmYhNmRL3miS6YqVox37SQjVe0%2BFXziGXlgqIGnT6u5p7iCdqnsqCfxhBzucqMAOiUgdKh0iSS3dHI2ezwctEuc4QsOEnACMHvabFl%2FH%2BBelYS%2BCe65fo5lM1du3pZxawMYDWIlp5TU1Tqoe9DTnL59n5fF%2BAXiUUOsWLp1E%2FcpwfI0fQZMx7C5Z0hK%2FMnxQQumv2ZbLnc7r0U2OZItMNaI8sYGOqUBJ2wWDtQmZvf%2F3jSu0PQOPhAQmPm4x0Eo1cbfS73V2WEbVj%2BZLK9lryIrJLFWY1gGSsrP9mNCKot3NX%2FPQdOGPEVPoVoRXBHtZh972f49zBThnznGERIWRZw%2BjWOqsroxLcAcNA5BiQrneXD%2BSK9VgiDVPdyY9PEM19kdqtst7RT5jMt2qridXR6ulY2DsvhzDInFIuIcYJFElYCOcL%2FzZDgW4q1W&X-Amz-Signature=34409238c66a7e4fd56e4782629305f907baf7a35d0657cfcf0c326048821825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDCONN5J%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCID80nf4JI4nouoRKZ4GBajOuuURO3%2FOTPtwFxea%2BdigxAiEA5%2Fu4HrCQSR3Ch9x45GIs5CaQSPpLAvO0ReJSaRWbxdUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6bnBlyjDcaaAeTxCrcA3bqGN94vLtcL9shMSnM6NjN8EShXtyP%2BPURbBz1I%2F8lW8kbibyU7YnBY4FwAws6QL%2BpNPvPReuzOfqR%2FAIWRFfbuKwRXKAiLvJ11tdG0oljflh%2BLgKtHWRtd%2FRMscoGAy0hQ%2BtNzeeGU5x8uciONPW%2BTndfqLo7lqt%2BlNyGCA21JXTsspf7Of72HZ0Oa5p5k5JO6HG%2F%2BBJPmEFeM9sOcFWejOj%2BdEdqDhLe79Q0C1dNVU1xo%2FiOXVA5801TAzPY8LEGCKTkZmNxu2xC7V3P4dm1LU3JsKCqumxG7W8AybC%2BUb%2Bqnr%2BxWlTAjM8wY9AHj3OfEDm%2BoaK9J7HqgnqNah08d92KGm1ur8uxEBLZZExymh4UtSQqhLZSiAXCug9ddq4dJ%2Boxe3dbIvNFrkKYvbxSm%2BHNTDDodm0SwzWg%2BLdIqQXQfh%2BUajMFIOZjX2cSGC%2Bdt7xD4TiSh0brUkuw8plOWKFD1F%2BZ9uM%2B3GrmlGjOzEH96eXmL1Q%2Fo9ftSooEtMQEiCga5HVVsKd6I7R2AVUe1JPdyorQBhJCYYC6lmspITB1JVd19nLVto4rij7mVPSQRGKCUvIzto3sKDvsE%2Fh1nIZqqFTv6Gv4eAxAQXvoX0GjOmN1%2BKrmI67iMISG8sYGOqUBM72Csz8NtgtQxaRYkVdMoMHTOWipyC5qcQ0rxr0hGa7AXt%2Bk8imS7u%2FbFNJbTF4YYQUCj6oqrx0vR%2FgX1RpEsJB9cBbhavo%2B6XiNlHQ%2Fb1ma%2F2qPBOEeLutXRPlwyb1AaZHHIi45wBIqsft71yOohc5R%2BBK5oCJQCwUS8FiqmI3UjuaybbbTxyFDlPt3APe1RKH5l4aIahKiuVODVUT60N4xqw7b&X-Amz-Signature=790fe8c5037c6ff1b167e0e7b633f7f0af0684ae6608f58fc381ce628786e70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=11276875dba865033af0f226e07d0e8988df665df0e87cf44469d9f1b8458a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VSD7LY%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDBoLqadtru7IePPBWgeY5yd8IaJYQWUOpQhn8pHwmg6QIhAIO2E5W1KmF7qkchXjb2EmwywgjRXDq7mCERbSF2IE6xKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuoYHVliNvxFhFiekq3AMOxhv8sNGoBjMbr8sXSXeb%2BGjke7z1e5HqvXH8ZcNjaiWkYPQoSZhlTG%2BP4j9I7sLKDn%2Bpp3bhYxn0nNPlWlsHape%2Fzb3Uxj5HV8kILAWzHsdXXHAKfgzejcGJXY4L86Iyk72kjo9bWzz3mDQ58%2B%2Bg2zVSBxv4PxChguLFA8O0vjDlARde6t3y3PpD0ezhrO7PQ3KPNGL%2FxHLVLIa9aRmGudRKIcvztsfJ2oLvhJZ6L0ycr%2F7yJS49v%2FENDgO%2B2zmP%2ByKuHS8AuU%2FLaGksz%2B2x7kJZmKKM9iedHWLJ3rxzRtgUJPp4EYS6cROSe%2F0b7FpUFVlBOJXoBmA6DffR3h07q7jOVb7OAiT84XWI8ff99Hlk%2B0GWoBbufhHre%2Flqv8uEfeTd6Z%2FGFG8XhpqkRXjsfL0mr4CInPK0UQQlAlmCiheppIQqD5HgjyfO2s2g8RfS7OL4%2FAeGUA1iMKKRZmxAkAJmO0j31SdsNcIqA2oR82Vs46IUolauhMmbeEKzQuf2sMdCACgK3tN4ubqqmjvIWfBllFjveZKRlWzw5JYfdX8AO3CcFo0%2FRWnYuR8XcChEqaDrlaBM1iZHdY4Fu0Qt44t7RIP0lihP3W7zGpa1W%2FcWtpaZAKO6wonXPjD%2FhfLGBjqkAQM7m1ZB1Oblkz7EQzlMAHgYWW%2BTcOi4FVjYCvBEtEYNn5y3tuZN0EwHUddBInmEN1LspHhXN0OpNIkgC06tcu8Cz2ArMHNT83VG77uCtZwHN3fXFDhzUEX9qWn8TGYfBxEVdN%2FJ2R5ZTpglLW4C5d6I0cxBwjRn4ULy0HRD5P1uAB6e7M22kwn%2BlzdLA1ty6zkwQLncv8zheFawUzUr9GpA%2Bwpv&X-Amz-Signature=a575bdd6966796b8570c68591cb7a9ac4dfaf73c2ccab6b67f28db5590c198cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=a1b563f495b778a893b3c5e557ac8083c0896ff7fb090b84084cbf54ccd6da39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5XVLL5R%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIHOHz51Pty7jLLMlnFZtqrpG1f7ZIKD6bp8wllD2urMFAiBkzO8n%2F3ri7WCr575RkCvJ5KeqL0WQZccW86%2BNPisc2CqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIjnEg1asOZYnS5K7KtwD9viiWax1LfJNRUGFel8ZLlQupNucTrEFZFuQg6iBqq8OqmW8HzhuVnDMMI2tbBc6P3BbyvKDt4cy8viE0HjOhOdqSrT%2BE2jHNHabWTTDwCbBFhR0bkHkYbbIFMhWv23kgpqXsruPabTmYQHNPFKDF%2BRl3zIKjSRTA18jJutmT6NYbcb2Ycz11bnNbdODMq7Cr9JUsl69aNBJdakd%2BjD%2BjU9houcOWgboT2V5DFFZsaX9yB6ca5ICpFzXVdxujuQT7EChBlbrNYrXi3P0%2FphjYj4r9rhIJQ31TG9ytZUg%2B%2Bz%2FCHwva9A2YWNaGCH%2FrsKX417AQGu8W6K1A13JLfSYhp6Ow5bHHaoFmzS6FhRVmvxrEKnpkA5PspPwGRXR08FIdKk0TF2I1zVCyAiPy8UzVjBgSz3GLzjQ1NlCMNnB7Ki7oQI3LjMgTfVmLV%2FPkISsZyJzyFkzGOqxycC22aXQGdZye5nDTvExsgR%2BGlsUoJgxLM1Mhb224rdDRXAL782AtSFRjj5NQqe7Fyo2%2F7uVhPTNn49vKy3NmKQLtQai9Pr90MY9b28uSRr%2Fuc5YWShPV9t1ujbOfsecT0xDxKyy6X0xwnBc%2BErbJMfArnD2q3QC7XRhn1spwyGm1Row6YjyxgY6pgFYnIaHGP9LUwu8ntBhnYVhX7g6nfQRBrs6PDrqllPvnAIAfAB%2FnNxlRdyDslpGsTg8NGbEC9goJdy9FGg880N7dlYVkYn2rqCcLkaYz7e%2F7nRVwdQesW5NPLY%2BOn3SDUWpNfoyOczIkN%2BJMmJ2vsnEpH3eno8PuGsRkN1LgrlPb%2FB25C5aXvWyesEyIWUDQUiCuGMQ80L0rHom7j%2F%2By2sorFvI3nDp&X-Amz-Signature=b2cf36d680e9c86556165288baaaab5d8e3e55858db76f93976be29d1a47e5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=5d3c9ba7cdded7fe8156374462f4cee6e9a56a43c6975fd5d32393e4ee8f5a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HRSKFJ%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIAC2E4YVi%2BC9YdROOxLtFZVODA%2F4g%2FmgsTwIVkRmMOPjAiAiEGFDc1LSxKiI1JRk5%2F7uz7Dl9bItEQLXBjSdpC01%2FyqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZMnhvh9BYWAUvqAWKtwDrmj19C9SDa7evEEfxZVn8jwaWgGBmQY7v7TE1RQlArerAd11gIQa23coIeKugmXHNNhIc1ujfXsUwiL1bvW%2FRu%2B4As13ldtdBU2gLrAX6HfrxOxsVXr%2BTKPb8zBxLgwsUlqKtBRWNaSIdcErvjmsp%2ByedPk0PSIDMCud5zPgYX8bCOo%2Fgo6FNPmkaPUVHbNpwH3inaxqIgKB5bMPNP%2B1BUEsKhWkYLNL9Y1gSLE%2Fgii%2Fyjzyu6OS3BjP5Kud4nQBlf3x0hR2JIz%2B6LGnHcO5zzvstthmv0jWIJNlllZFiRqYeptMykAALnAE2YC09dRM%2FIn0ObgKBlXhifQ5PuYCSM5D%2Brd8UkZ9wb3cNZq4tVlX4vWg0J1dJbDgbC%2BOn7hGpn6GtTXPpHixlIsk97j7SM2zk%2BH5vps%2F0zottkgqZDIj6whg0n8ox%2FXCjbFqYTbMc%2FgjufvgA2FVsm82qeevOL2cTy%2FnKJu9J3%2FZfMHTC1D35%2FmyvxosC8%2FdJQgovKMugiHLvYnJ0WfPeCj1%2BveAHP2K3dXm9aDfEx8Urlv5iGzj3Yy8wj6xpJ3ArzvrsCic%2BlqKtcAIcHTRZAlMub1T8q1RM7epHdWWkrHJpJ3mJxZJBk12xdgojatZaw8w2IXyxgY6pgHRKZHAYCiSu1LA8K9oTqmeay9nd06VOpb4f4zVRBV76VNOpS2hHDwKLCvbnCT0l9JMusvGJAU8dC1TYCjzE4YS0FdOC63m2XbPgARYKYzcb0VKKqcCBrwYCDU1m22ju31mV6wO0JkV8PW1tQz40eSg09XhG5GO3G2Ttrjib%2FIPG1vor%2BNpkb1MPkG8CicYR%2BVi5Z7U7OK43hMNjWbq1wqeFyNAEjND&X-Amz-Signature=fadc1b33600a3a110fd1dbf3495b13ba3902e8447d5647180675bbffd1342e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=4ad010bbfbb5a0d94fa59f1e0456d17adaed81e63905243826abb3c36baaa360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFT4UYDM%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICPRoaaf2EshcqeFYgeGsC4kvhu8KQXOeNruuGu%2B%2FC37AiBuOK4fguQn16D8EPudilIK81gf71NyGjqJ5aiUJk%2BbeSqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxDtVJtESSCxPNWpDKtwD%2BzBtSjb7hdbzy4ZF5%2Bval9coKPlnNt94E6tjwdZlgu5kyJqg4ZXA%2BLomI4rLN%2F4dIa%2BfX2E3i1HI7tOs3a5pyTXQhiArOlHtxp7NcSq%2BKauuNMk0ObQsczlddX8e01ai9p8un2BrECkHgvft2mxLarve66xnmm9i20S4dma4FPlomzzth2Fo4nkAu6vbrNKFSEHQ8E1DeH7Qu8RtVrY%2FPGzX%2Fo0BDjU1wPn4Id%2B%2FkobRgvincloywva57H4c5NZTEzDsnBC3zrncSDF%2FrIvdXs5AKNwZtuSNX495wVeTJfe7ATSwI3pr9ml9DsCKuUyV%2FlJWiEj1M46p5dmIqJKNtTd8MZWPKC0SAh0kKLOaIwJd2YRwt0Tx%2FXCveIqnsVt4h0zXL4zXFs9BS3hq%2BfyfIwloYW2NCQnAVByEdvydWXUAL6GT5UMlFo7baJL1tdrNloKlxGqTa%2Bp6EbtIVn5Smiy9iZDFMzIxANzKWKyVC23FoRQo9bQ1zm7yQcK8LNlWP5e5PecHaHqoDGXjuBrfBrd3fNOEfM7GfpO47pWx454zkyfMKkMlCT3Vq0moa0WMEXqF8bc843NjtEd7A%2BLv5997UwznJwpM2h644JxVDi3vo%2BFHkse49OBNvP8wlInyxgY6pgGG2Qtn5ajZ9XDMCTHEkyqNPA5bO7xpCwAR6TafrJD7%2BBkbAgdR3CGAx0QurfpMhS9ft%2B4y7ZgUmeBrzRcuMZYcDd1MdCkfvXhqGJhQiaC90b9ZG8vNnPJ9JwI9IDlNOB3uQH64fXiVwtAD0RJV1bca%2Fkrvo7R4GOmWGPb%2FT89WTe1F%2BKjsTzBvQH2EEzJrQraoins%2FTn2yk3cZIs5Wqa68jnOl6xgA&X-Amz-Signature=31daf97c7487e07550e28a96952c5543fc103fd045ca1bc3edaaf49873123af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=53d4b9b898885615d7adcf96603061edd78452a5568887d4f78ade65b7f0ca24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPU4ZHV7%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICJsRrxIJjACknaQw98KIxDPcWBPAG%2BVCDssPM%2FtkIr9AiAuQKRDGiU8ouBvgKrPgkcxtspte6W%2FrsHUNC0sj2Rj5SqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuh2IaCwGW5%2Be%2BRfoKtwDUWjMEsQMsS6Crtuy7zTVo%2F4I2xCxeOSAswVj%2FGduu4yoxWLqAvIGsqZYBDr41z4igtnCfQBfINZIRZZTRE9yb%2B7PTdCHJSFYWDY5mp5qhl1bz4EHmfkEGo5PAM0innA1QZphsbMRMTo3y3zrd7wvQyySVw74BxZNHEh9OTQ0xNlcXzKvJXp7WP09%2Bfpmyhp1XukH4pK6f%2FtD0Fwps5206BS2TU%2BHclvDX5lU2E2ua682Glz1AiKD07V%2BKDCvYUgB9ahzPsqt0FcDLberq4sYGsmKCk4fZ0cb%2BSBdPr5kqjD02bje6bKgEpsABNUhVB0VaFBQ6IE8Wh4y5t1eyoX69vsqgRLlS8Z2E4rEeZzPLXVUKrcgWwJiK1NTULc1zGr3gOnLGBftFr4s17OrctX58CkcFRJcVxpIcs8IOvKxYy2%2Ffp7MedNc0Sxc102Gof3YnmdWZOuLDqc9Y36q22VuwxM4C7cVtV9SsWA90PdGrbr1031imzec4zbGptHl%2BY%2FDHvgYkPb9Eo385CGnqyK%2Bv6Evniq%2FC6odmHYuN6bgRHeOepZGXsaT7eRRwzyxEhDC%2F%2B3anFxSkZRLpLagZzI5rd6cnJOHFGdhNA2DI7AabytxRce2oblqZ3eTppwwjYfyxgY6pgEhm2xuOTW7Tegq14003K4tOOLwXMgFSmdcWW2OCHLSbmT55ko9vVcT%2BcXIgXbqbv5FeW2O9fheyRNwtgIYALFoLVzi%2B7xqz4Z38XXZzLoprkcFUivLklHq%2Bnc7wFPw9VY3%2FddCvQuZuS7tPrNOFzuV3dzky%2FpZsqLvdoy9HlL1DlNqtGgEPLdIZ6BGInrLbGHov3dblaUlMLrhjCUQ9FSUCfUONrVd&X-Amz-Signature=715864b57fada3f5d38564fabfc2dc4a93e54abf1f4ebbf2a5c6cf6d6a173c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFF6VK5X%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIH6gIGHDevB1WNeeNnXu%2F3MHdRCL1TXRHYa9X92nzLoOAiEAjtdSCBRLGou5a2S2tlxmPDVy4YuLCRwdE%2FpTTol9F7gqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtEBN57HCWxviLXKircA56qIsowvpR0XahDqq9RSkQcW4Yb8xDDcze%2Bu%2F10vpd35iri6WORGUx%2FWSzVIKWiKxjCr9xtYhko05k5esxnFA03d1cWIbAmjcZ9d07nwSCIpWa%2BpB%2BJ5ZTdg9k9dfc%2BSZ3P5KkhpaBjxUw7oP5DJgCO4uduuGmSV5x3Lp3gNpnXCCIlZ64vWbxV0etUaefKeNwNWyzva1JVp%2F9JYJ0r%2BoYLynXL2RHxclVU6PX3MsmNaD6lPA2LpT9y5V%2FJI44OSUK80faIiSf9046pYicxWSJLyEpYtl%2ByOQnDcEShkSQgUOz3PS9kgl5xCngoX1P1vxr55ok1A3uKP8ntfmxCTq4TJFopzrcXmVgq3B13uSsis%2BhL9ErFVGDbr0jJ2aAgNpOp04bUL5xh%2FjiklAqY1F9d5nqVjqsaj0PftWdnzgoU0LMz75fLKvBCVeBoN8gQ4RO%2FmHgFC%2B6GX1ShHkHT18ICB67QCSG08g5vc0W41%2FoKqr1LUkWznpIa0r0jVNwjy%2FYU7uRrFUKLfYc%2F7XXSnYxYy02AKTatfMdIwk%2Bn7%2BWWJ0Tam9%2BKhypRfmL0S8DkUVMKI9Hi6WYxVbwmRD1pfezlxel%2BBlOTsqqOqj6bfug1SK0Hfg8ukFIinO7rMOKI8sYGOqUBT%2FfGbQXIGpn59eBSuqem0i181nfpjA1dTQn8SwZgBGn%2B%2FkQtOhmduY4nuMrk1NdRKvlfkbi0sPxrQNKHvYj29IqVYXDT%2BlsTiv%2Bq00a73Odj85evfy%2FHzr1fQHrp6IPNLCRW5tJw0Ww%2FnVGmrQif59kSo%2FfKbBhHjY7DrFAYKbEOyHOnmdsak8U1uW1M%2FtMOavOBzmQ%2Fw9g2zdzFctXBre634WAX&X-Amz-Signature=4ece68a86e25dd5a53c70f3e7bec89dc33bbedf2785aa856da9d5cfdd169c779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634RFUQQC%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCCgAuAQXBeekPx8AjPi66MLNunLookHLrT2SamSFZ0ywIgYOqOJWqFP%2BdrDydYbHyjLoFbo5VmGkYhY31fei3DqKUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqATgvSKh9SZ96OoCrcA9sXmw%2BLMc83Btv4mjgp8UXVEmiQXDR4ePzOGmcvUShLdOiQiNpkA1%2F1xG6tJUUVJVO5n8kXFv%2BL1p9MDe6DQkofdHh5GRLQjPV9OwB1p2I%2BNzTHQjNM9LwMHesEikBGIHxdBd%2B7D0GE2EKXk8cHzYwd5tWaKSElh9QE8YQkMWFTmECgkFYSovjbQ%2FzCnUev5XIlNjjoJLY2kMv0eD7cMzo%2FGTFKSnB0fHI1j8veFeVmPx%2BFQCNXXafrX409mlLgWXezZcn9bZlof3%2FJybl4YKgexgIIVDpqVlBA%2B8IqFtKH49oaWXtE%2F3DrTehkY0ex2Uua98CEnzcRK5kDbZ%2BZwg52ZjysMoA0vEIkyHj2IhPHzjI0ob7CHxr98ABABUpEVA0i2FFWAAa5CP%2BXYZt4vtJlYem9SmLzleYceuw0ckgMAoTVK7B6ilCKuRfS1%2FQ3xE83eFVLGB6qNoEvxCxXrYqxDedgyO9SQa7ouKBllvIMWvalIGLbRlcvlmViyC1PMKpoRr42Dod2nctxXWkuZoFpfjr0JIVJ30i1w3qYG1TlSWtI0xFdCa3r1%2F0RyHAOKe6J0BVGwKCceR7rVPt5H%2F%2FMG8MDYhurU7UIayt88%2BJ6agGC5fuh4Ss2DRbYMKOJ8sYGOqUBxBRwiwV1R1WOBdy3%2FJbj8AB16Mkbf5FQjLIV7RSWKTo0mXlFq%2B%2F%2BF23vkMMK0xfwcswOn9bUJiZZvN%2FoD7kbL13vY2RnHLB9doKYqO8qTLqKs1YbQ7BI6ZDHVo%2FjscfKUogqJSxEavV7f9ZLEgwgGM8TKT7LCEn63oGVZqJa0g3muFMuJ3tKFyIBoChxRIlwfXFmybgRtAZqaGZGL4BHelSG%2Bi%2Fx&X-Amz-Signature=f8f15c82331c46da97426d48c549408498ee2afb082f747748b49c46a3962d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=cd73305932b9f9f004243664e07f41ba81dd94c786cd7b306887b1806f6804f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S6SUBUU%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDHbNK63IVCYEeOEgkE619PFPf%2BKaOwV7VLZBF66gK6UQIgNy30wxxXi6T7jFboFslWBIkMO7aDhllqBRPhsLu8X0YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBR6Td9pmlI6GLwDDircA415WR3HvAvJdEJOAYz0DQR2Bnuzb3MXzCKW4U1wy6%2BOLhMMlNwbc36vQnhHZeRyKnp4Iv3w6lfYWy5GJYxChgJv99LSnblQ18teAWR8Z2R%2FS6D0F1HLbx97UibqE1VtruRuenYHuc24vUye1xB2CloI2rGVu0CyH7wF7gaCwor50Sw4jOslFiic8fy07iKO9MhGhKvGhKtXcY%2FsNzvkNRVY0mRIHDe9Ukz58%2B60sSa9I6G6ldDxRBdJEZSUavxpqKluMLshrzSfwuA%2Beno8%2Fr3ZEb4Azt0GwG5f69PBUTUSXUkkelbLKjcGXKwsS2U6GyzAPxXJAG9Fa3a1j9yh7wNPRJ2m6CBCcTHkazOKxGa7HbsvStZ7k4ssA2DwHmJ4HTDeHAUnArbRdyFJFcdJ6dj%2BxW6%2BPv2gFnvPxbi%2FVKKz6spBM2hw3dD7QZlrWMy4lhAkVYbKn81IYoUfYeL0siZ5vnugHIa8URmTwMp9EJjlTVl2N4YkTTb7dS8rMbHqgvcjqURp03TP2zoDj4RjMXwPBM%2BvXEZ4lHNYLreO70KaMoSRU7p%2F8VeWCKQDTggguBc8FSg02pqEe5DVvcKBhGkCfZTTJ6f129DCwb9pF4j2pepi5XY2GHykEzRQMM6J8sYGOqUB3HrKZsEMvshNG7vfI5sI5H2dKQeVZoCpOksBqs1yugZVfeQWuHuxUWzPcgzZ6bizamiCdnH%2B1revkc%2BKj67kFfbJT3SWPLKuIYGkTSGSg3S7kwBdkheyy2BYHb3MVclAarhBKiUYZpWzj0FeH8SsMHKZb2rjr6b5PimFIBRjQdvb68uuQ0L2sthfpFyafXqFN%2B%2BlYgst3VqHK3QnuxLbLXDryutk&X-Amz-Signature=b457163b5c845c48f1f6a1c607837563fdb0f9ae5c4994fe50da3b9b97af377f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=039ea2b63d1ac6ddd33075dbb5a37f513e5b04f1be1dd11a3ac496c22f7503f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=2f3d5fe8a7af0787390c87385eb1a55aa857e9d78ef99d17a3e8aae3078434de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=0deeb6fba96b2e75ddd209bd7f9ecab0092a08efbca79457e473b0b5a357832f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=0dbcd60330c9a58bce781f4f3abaedbf5a57db96198b6cc9ef0218aba7f05bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBNGTIHJ%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICIpZlM%2FascmRueemg4xQt7BBFWVHQ99UBPbWpguzsp3AiAl%2FwBkS0%2BUZwpnV4fLWv%2BjVUcEe0RnGe1z28rxLj6bziqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8rJ0GHTk7Ob1V9s%2FKtwDGTstralnUidnz2g5s9A7e1e294ElJpRRW%2Bzm%2FW2GJttqQTfvUDo5vvA5ol7TAaAYBk6yXVEyJQmdcyez9swVzwcHoiRdqJuoDFWV9dODOw86x74EAH2SXjkL%2B9M7mkwlyhxyokQA%2BM%2FTLU3V6MAPFoMJig5a9v6Dhwnkhpz8%2F87qdA2j%2BavHiNkYTuZwdXjZCzkAxUY6QJ4T7MjvAcg7CdFDcGUWhDpKd%2FflByelLcLK80ZKGorfUV9wGXXuc7rID7NN6fWoWjvXt7vwBd2194SmhChWSKZK3z7i3YT%2FF6VBAOxhbX%2ByjBmLl1qQLHgVlT%2FCclCN8C6I5G6s5sUQ7p%2FSTG6BeHMpi4Q0iieRzjMK5zdDrQKA%2FlNoqj%2F9UTpV85qDbX%2FM44L63nulZNlgYAws01haSOJjhCFT9D%2Fnmy7EK%2BzjxKLp9fU%2BOYM1aH%2Be9Xlo36hV8nOSjpdH8bQJtGYWQ7weuQTKGhoVKfCtCOFoBxFMwKx38b7w2JsiIqUbE%2BjuphIFZO7I61dImmfmB%2F07AlhSxvw4EZ2P4Pu5cE3oxLse2RFN%2FytosDZSvqpYZ345%2FBuXuqwqZWWidWy3XqAtY66WF96O5Jr%2FSCd11t4iiF9ik6HB9oaiFHgw7YjyxgY6pgEewc0xJYjtXd0i%2FY0WlEh1%2B6HJbnWdX2FdJ3fruIhOfp0PZEKTK%2FQ9xY2giNxSGcR3iv7pN%2BLQ62jjNrHPzjqOffQjWS3LoviBtAExYycbWmPrr%2BAt%2FK9Yz11CHqt6QJAjgg9eZNa4aMMa%2FYTTuC%2Bp6oqyyKtBdrKJljXhFa38FP2rC%2BLSntW0ucKzddf%2BwKv7Z%2FpRYzeWim4gWCM2ztOTEv4FLyir&X-Amz-Signature=2c1ba03956f4ad835d7e2c4de4dd097a11ffb246773970f0d36c337aa22a3d8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=7525042a7753716be9bdb8f1f05e4e80b9068ee728a7b0a4a36df987cc9e1084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=fe26763eb619b216efe52d8451cb741702d27890284d4eff55bb6ba4a58bfd46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=30e3ab7f03bff91b75251a9907da0ec9eed2a80bc068cf7c95a26a435cf49867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=fa46d6bbd741ddc4b21ffbd1b2e728a3e4d06d72e0cee91d8c02d59f8e082cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=5af23c9c6ea755aae5536c4f944ac1bd4de53f8d70b0b807b02012469c42b7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K5LP4KK%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEhcFdbT4lDgIE19ae1HpfUVC5BbYGHTx1%2Bp5muZMfd%2BAiEAvcnh1%2ByhWvFfOvU4sHgQvEwp4G2UpzeePGyevEqW%2BBkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGlOvn32DQpJlHiGmCrcA2UMQF14qxCyybBYysQD3sWiKMmOq1Tk%2BM0JX5%2FVLsvtXG1ZQtkXIxk5CW1f4uG0GT6m3nHGbWpGIVpRQ%2FRh6Gw%2FSkAb6IW1wxGqYpsGspSIIYTja%2BbmvpGd%2FZUI51TSQOMNwViT1g6eJw7%2FFK%2Ff0WvhMApUZPv5yX%2F%2BZE9mrcJLtU3S8Nwp0XIbIaUuEYygjvIzGQoW31fNwmygTXaTN0S0fH0KFzvsploF0QeoBTpsI2FKngLjo7pJqlBehy%2BsJRPRqFyTs1TDxV9e%2BSyZgtB9nnIYx2Q3AovyLJyGTNX6M5BEb9FpqIwJRyiYVtjqrYOsHcMjPvvo2KRTvv6d9i%2BKt1o2022uq1GKaL2zGapg10kuh2w4JwStZVFG0YzYk1QOjrNzxl3rXY649tpbVB%2BImH5TLjRQPdZuBHco4xFyFG0tMCGWHnt6%2BUiO7X9kJpduS%2FpveuBYagLNfu15cPn94R2iajf0zvEqxGH21ciz2QGaU4FSb%2FtAp0LAzpASl9aVN194AV5L2jt5uQA2gT%2BPwCn6m5CqtuCRwsdq%2BjTDnoCmyMpJO5UV%2FTzGst10%2BeErbyU7LtqnnZFRrfpiFlBqd6MVKV6NH7iU%2BgqE5tjw7a8TIEub71STBSgXMLOJ8sYGOqUBV8%2FgMzQdvR1%2F51I7QK7OasNPiqrMyJX0NztGjJUp8c8Q6TIyQ9NAvcWxY8wmoqQ%2BlItgfAXRplcg%2B0aldn0Aym91wQEEix6n%2FhTF8%2BirYOVCNkFmFmIMbpjgous9%2BocoQD%2BnMgloMkDKTO2SS%2Btnf0%2Bzd%2BnhfXEJCwbtc4aUOOVGCSwBDki2%2B5w75vmktjaqnasWKKr2SIkTfQxgG7RLRWdqi2r9&X-Amz-Signature=43353b458b4be0b738a11c2eeacb4df660748b2f6dda41161d0fe54d022a5828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


