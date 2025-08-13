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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=79a7a35dd3c4beaf3704f9339a3682069bf4d4049f0d6eda4e630a2b35c2efa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=4f2df92b3c4b27ceea2d77ee4913f2b7cf9351e1348811f6404fb89e9bafd7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=eb35422dd93e88f1b30286eb71d110ff320ddb749e22d239bf7fd830c9441eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=5dc310fd236fc70389948c9ff2495099d2a13241b63c65407c9541815ed3df02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=88ddf839fa12f3dda40bce927cc64797be4c1a27e5733644c4351a44f541022a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=7dbce9b377c9ada4fabfc6ea77c0a1d5e531a21d0419982e56d5f4429cd8c261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=38b61bdeeca62482027b9e7ecbccf3e62d2d4a46987717e93130303c79aa2450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=c485e04ae3fe7e4077a5a4993f026e3beb972d32e81780e4393209fd6601838d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=b1a1531d0271f5686400ca48694ad69feecfee7f47b22019da7db9f5a3b3b2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=15ec62d05a3fd6b70952d7e841fab22d478fef560dde72765dbdfe2280b9c5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZKMAPCD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHn9c1dgPgUbk%2B%2FiXu7O3BmuOkPGykiIwGlbSvR4JS1QIgJC6dTuvgv7ucriTOfWnMRi41makddIlCJzGOBy1v%2B24q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOJhxYcfDq5y86qbrSrcA6uiHOP56kVxiOuh6fhlkXyKz%2FPzWNprW5PTKQENK%2FZPZ22Zgn0Tp6R5kj4zDUHgkAubnjIva3eU7eSgzlRPW37RpAJ3luBDQVflFrMPpZdV9MymRRWsmSxKccp99TTjoF0AV62MIPhOX12sk98zsEUCtDzQWmh9cJnz%2Ft%2FaIlX96z7WnQBb0pY1NivQ9W%2BYEuBumYP0YRhPe7Sy4NtzGlJCtyIq%2BMMxY%2BRCpJD1SSNntAIGxQt9V0Z3FcOooDwMYqmDMl7y%2FvzHH1ZD%2F8m%2Ft5UKH3FfqTwMfBPMtI7jKtqR7k%2BcihUASUO4mwGzbj3bNUq2KkhFv4%2Bhm82WA3fZZWVO6EVO6bRnshSlMLYowwUI%2FjMTXJ5T3YANPQzt5Oo8FlrXlaqBOaR0c8zaHkwEtE0Dln%2B4x4LeaQx%2BtlIr%2BholTbBWGVpj0qHk1N1w61IdUoeK0jhneN6gZI19F%2BCswSrmOOQ1jQgjbiYzAXlqAuS6DC5NtlisDmAhaIaebqt6gSJv4yXUZrWfT4Mx0OUM9hiWZOc8U1O3C3NFCOQpp4Qop6hSvNIZUdDvOjBb06LVN6%2FqQwSaJ2jLj8SVzSe3r8tDRevS2SefXoNFpSauqCSqpJ%2BHkpcPTdOSslr4MJ6e8cQGOqUBF%2F8BGz6%2Bjkyynjt3wyKr91LP6z1yRLzWORnhlvfB3REoOWIHahCFatxdutWDXydeN%2FegtiY9m30%2F5lUyBVSc4aFRxXDBDYSVElB096nLj8%2FJIfVN7iBan1BJTxrFPcNLJNZdSV%2BlXu7ho%2F7fcpOODHbkJ%2BrxZVfQNlhLM1oLjjA4S9TdedjrltnuWqRZiErCoMaesfqQRHocu0KwFa1AqveYq186&X-Amz-Signature=3eee63c24f86d3e29392a720cd859e1f3d64e4039d7dd5decc13aea46ed9510e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466534WO3I6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByRvJKreLUyHJhGJQAt3tvna1Clmngy8r9xZLD6EpJwAiBbSUqJmCvZ3kSJGi%2FoodcySzBtW2Kdh2OJM0%2FcqRvQSyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMInuhY9rEuD83Uqb4KtwDBbSSC1F8ANobFVYv5mx%2BUNk8XI6x09ToQO%2F7OC01ENckkQUwXoFPbWcgj3Z8esJ9B1LCgBPWEZxCRogPgLcalkJCGBsm9Sg4LhMwXQxuxTjv7FjOtIMbjwPpzTeKPp%2By7GDLp8SEicxNoGbzF3LTNJpTIZ9MSZrh8SQ4aaPEO37pZiK35oplyULhgapcN75wDuTBR53UX8eT4VCgMXST6Qs3ewQmfw5%2FQIHJU%2BT%2BgnKvaFHtv5ymLxzN%2BOrY1973roh01LBgXikXIEyLKlfNFRrMmzA1jq5M%2BGfPsZ2vzafV5HwxvBCsAGmzQiUpR6KBstlwccru3TU5BUxfXxvpuEx0zxgh8D1vcZxrVMN5cHglYkGpZYs6Wk6qR8ngSUQgV%2FoxfZ%2FSer5DpkKfpZO9%2FVDH3od0X0uZ3S4r7QjZHMU%2FPfXkM%2FVOCrZHuxFsBteYG19xejZUuroho%2BmdHor0zOSCmPMYjAafgrtfd%2FfWJ9iQUap0rbx6xN6KYcGS62i6F%2FAKjIKWYr0TnFzgeK%2Bau312RYfoEj5EWyzhllps60yIJu37fafBAMa12%2Bk2xbjYXngSyBHiS42oJQGkZHzqp0txDIz8h6BEEt33SrKrXzW7rqnYuuFyZDKfmHYw4p7xxAY6pgEPsuGeZLdNhpTjHtQPrGjqv1F5eI6hCxCx9nSZHAr4slIKJ1hDbur7a9YJ5TED2DEiKS%2BUEPlpXYWUgX0GIHN3huyd2G2sZwYYb8lJkaP8RuD8HTacRZYc15pyaiKTc1qcnTPkSoQYXkePs0VI6vNLuNOtmB40itYEptoq9RrjPx8BSV1xPaQx6L60ZdJ%2BsBsasdP09Ip2jyzqTQt4nqiM6MofuZPo&X-Amz-Signature=49d2fb7af558405c28896fff29b79720f5e9bb9a19c699950d8d2fbf6016dc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JV6FOJA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGzzHl%2BXtLz7gkxiTXSMf1VzzXS1zRhXTFbognCoQWNAiEAze4x3gCtkK7uHXIpN4ccC2n1Gshk8XKRl4aSxUnEK3Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDLJ3s1eaMCEvj%2FTqWCrcA6E7DJEJWR5%2BzkIXSNCfQm3qM6KFJCuzzX5uvVx7%2F%2BAQkvay8i1biHnwBQjMiFqMoa9oX87pbASxLagmkpoaZbtZQ6wXWaBki%2Fz6wuGh0KbpDisJf7fTEg3MqR94t0HGbbTG1O%2FzjYhZuhSffBTyx%2FaQWQYF5Nq0pRAsY1X%2BDkPeRiY0aRMRtNEL2CTMN%2F9yoED8Fz%2F%2FjTHLjM1k%2B0i8Jfyf3l2L43AzDVkK4BA7PuFkRf2Qzjrv4Umr9EXo4875C3SBgwIEVgiozVP8AECIpwmeUsCHn3hAw%2FG66moqPsWqdvNDfxr3H9zlpBIJKBDCitNAP3YjJ3l9ZCVsaOPiBNiwX6Us6KtIn7NVh9BRuZz4SWvoWG2MyM4GEzMEyJfOZ1rA1ii6drUoplzQUhFKomjOTBrsaD4mgkq1vjrbViluigYDwW2vknnZCrDXjJODDxw8ETx4kaikaw9fQzWPlvH3BIRZnL4tu10r4QzpyYPxLJqmv1I764BMOcoJ6TDmdoz4RhGzskBNycOJxtZ7Uub5jdI2Kh2nsbUpDyxKudTFH%2FNtzANvmDwVB6%2B51TESW2%2Bo0BU%2BZVsjO9A4LvVm7AgY05mc8WcamQqMYuqLOlCOOPpJuw9t%2FAWR6P3sMKWe8cQGOqUBANDlYPIC9xfqFCJ2I9mvE0nQqU04WD%2BQgjogQkFn9RLkW1rxYKiFeE1caw0win2sXS9xP3h8VRUiPnHi0BmtUFxYPzkPEgJYy6UCI1uC5DF8RmE4clge%2F1Ul8w%2B6vcm5l0Y0HsZ3ddC76WBec8iDtZFKkTE4Ge7UvBLFeUuwbRzXxWIOvE%2BGOyLsfXDFYfewp0bJS3qNzUeReSg3ptWx5YpEUfr6&X-Amz-Signature=94071e9a4a9d718bf0d99c4bd9f9a0bfae0f169ee87516961d2ca796176472e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=04f3219dbffd3b69ba337b243d8a617195f88651159bda3276705eaa7a116ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOBERVRJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDq7ZFg%2FRcN7VMDQvPoH5FELEox6ZwTZRL3h5xP6UikwIgEJctmQr%2BLuSdsvs5jHUE2VBZyW83XY0PYbS%2FXg%2BjEiMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDJ0St9pygmacOKB06yrcA8IDmvTcSQNmIbc1YOSzHS9MSn5iuyIgrX2lZpwjKetFR987FBJavXu4Y%2FQ9O2Dk49fREIxOuEUFhqRhyofhB2tczEW19gJVGUI23z03B%2FzubW1IAVDWIXrWk6SJjZU0I3XYtlRHdYPmIlWVnh74%2FZMG6RXqPPveiV6xjQNtq9J2LpxkCs%2FbPM22jWbBqEtXzNBZFS0zGe4Is9STBOH7Erf%2FocBvxb7Gfr1moHquxHfF5Mv7oZSMfctdDTZzli%2F44HSC7fow5jDOcAt4SVtMSb7F89sGx1W2%2FayDdBxisp5Ma6N79zXDf6qG7AW8tHUizihA%2BxXS0SipYkzJvZP7Y0DM7%2FAT%2FHwb0MDjdjuz96OqVLRwJG7KPuDPKfYU%2BNTKsO2YcCeW%2B4VgFEldJUyGZdBrRGC9rBQgIq%2Fhgz4WbVr4%2FZqB8%2B%2BhcwdpflVeydsrI%2FcV6EHCw2Qtef3dAQZTTKyUh8jy58Ngs30tkcK2bIpocQVpM0kK%2BZ1OEu433XKZ1qB6%2B81CNYuTTBfqVOnmkE0vHC7HAhqnY0cJzdL5ywhoblL8Ak4ahO5BiJ7c5jpUPehLYQHR2pLYXxdKX3z8MGqlZWaUub9p4VZZpku0m3%2F3a0MZt5rwrPpSh2WJMKGe8cQGOqUBngRVJCET%2FYl1ALBTsLu9uiXcgAYSsWBNZOSOjnJpvp4x0EKR6zkLsnTfMhR7dARLHkwk7PQ2%2FiygosS0ga%2B5%2BvFQzgcd6x3nppvaWAgZVcOaD827tq34g58kEwT4pa77w4YBba6hIQH2Ai2IcWLKaM8dZ%2Be94Nr6oDEZs3CyL0vysxOb6JXpYTdgdNCO7%2BzBp1H3WD5%2BRTwupeLjPZTikLAJOb5i&X-Amz-Signature=72a728f45781a03fa7c9ef99dc488059a9a56f89b6233a4a5086472e313d1958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=1d3b15af7171865954640e133a79d0b03724f318a948db370a861e99b21bb4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V5Z6L2Q%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmGJ9o%2BHsTyT%2Fv%2BmPlO2PIazHeMlBXMylWG4sZ9a82bAiAG8eZdmoqJle%2FqRJjAleWFtDpfd0MxkEGbiC0kZmD%2BHyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMY22VT4XymbzWgktpKtwDb2wB5GA23%2Bf60o2sxUV5ACiMgoCSMy%2FFH4%2B4XJwWZsFC8tVz0CLEp5DjUX%2FigdaLFXsei4anJtiF17pp5C6ecCG7jXZmm5Y%2B7lBefZV2OKfwpI6ciwr4YatEmFjm6JW7XkUd5rTQcGQark7%2BSrgFqzRi6ikDo3Mv6dLfjE1%2BX%2B28WeI3Ak9s39%2F%2FP8XPMVD15RcR9RMv9QW1R84yJ0SEjHK8Lu%2FVs1%2BE01%2FMY8VPTMXNSHEDDlI23TcxbUiNmUF7lnNH6%2FkXzfAXwhpVrt63ZKzNUI7amT%2FduyRaRok%2BAmgrNuotPLvbyaxlEQtMOKPc71W%2FJbTDzcjCxuii4C4r7nb%2Fd3P9E6Xs%2FGQRtn6h3Di7K681Vs7%2FH1kWS0wq%2FR%2B0nlwHk6NhN7%2FQITC8dNvXJI%2BvIf%2FxY%2FWh0N1tkdB6kt1C30iQ1ObXYy%2BPk1%2BvKEiiQEjJ6GmPkirRr6Z2YTpizjrPbQnHz6JQOBcijdJTOtIUi2ocoYPv2%2B2CVm%2F%2Fa9tHEtIqjRP2mLbeAyofYAlDHHp%2Fg%2FKCmosxof0InZltOScvGAAdQqKq8iMT9ctmNr7lwshbsmArLTIM9bZE14EUQikG5X7TdJH0bPiQIiGdlveNyOkaSXFmxu9d%2Fu4wvJ7xxAY6pgGHZaeJuIFk18thJJxGfNDkPms%2BmDz6Nwe%2F8kyD9pXIN4SAT9qoPoWeVrj%2FBk%2Ba3P%2FnIYGhlrLfhAmQ8jGGaoW9lUfWfkHtTU%2BLTqBD1vczc0ORMJioGlxEyYN7yJjkrkkbSmlVi2zQmjz26djb%2FpOLjI9pyL12BPE0UguDsIrA2zYwc06MSdYWNyl5hQTGQZjgpVs%2BULH3DeGTDofHJ9okBUS08S41&X-Amz-Signature=e4794c4d6087f8a1e5c202da7c2ad20d2fc0944f4d011c62ff9cb7ebb1cbb458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=f7361d770141ecddbffbae906e9a849d70d0083d91aff7364798e8747492b052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMNQEUHA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq1BEcprE91GH2JBQndKE9uHj4UZDCfS%2B%2BrTRL%2FG6wvgIhAKlUgElqd%2FzwiEttxNQrJf0Uui%2BZvhFEvnDBFL0YZRHxKv8DCCoQABoMNjM3NDIzMTgzODA1IgxuYnaxSYiSaDMHZv8q3APsOny%2BBGh0tj1t3EoSWy1r3a3syQ5x7%2FPKfHIrDAMQyhxguhQdoMu6EfeN0ScwwhsPbl5L967wu3ESTxjxX5jOslUgqNEl0oNpHhzZ6cfXKezJ0vn%2FqWgNcb5ca%2B7dRuVEWoAy09vuerjbDuDAU58f5cywELOUtHfO0kVp4y9gf0l8a2KLDdG4XwxQV5NLhj8e8NlkoDi5GYO2f%2FHVpzPru1ud7de4dhMJny4eLtLVOAsAEBT%2BKTa4F1O84zPRuhcfcLR%2BwmkgEgai93xvwUchdnYYHbMYAivdlWkJaoUlfZvEXOastsX4xZnT1XFVm0bXmq2ktPqJhCq%2FLubObrfYw0g6Kve5gyQ8euqLFTO3e7KJApFLPOZR2rzyKKUhkvtrw7TgwU4MkWae%2BrEBA1jfURc1Lk%2Fu1%2FO0WEepFpme3D4bAkJlnfp%2BXeLViXdlXKu1g%2F3p7Q51Tk%2Fg0ENgt7sc7fiEKCvQfZrBs9WGtgWNdavIKU%2BPecAOzWudL3zdoVS1zuRY%2FexIcOKCF%2FCvzzxHAja4Ymqd6VHtKNnpEySF0LI3hvYTy71iHw4iDXNA%2BHh%2Ffqjr0DHsKQOtWMsaSLL19y%2FrEX7HsFVEIUSy8DeWTBEYUOnyIQt4%2BB1jPjDQnvHEBjqkAakMRDEU9Ytf%2BhN7gB1p%2BgQUDStNyC6wbW3MQ5OzTfAW58QSHMQdmMjqqaFBB2vaUv9LxvHNDJghI70KARmEuhzH1v%2FaWeElZTZDusxHix93HNuWxlCjmBAh3QSl2GwR9HRzX2%2B7Ux0W2dcvqe2ftxo%2FuV%2FGnqCRD21wgtYJC6uGzyfQ2i%2FnCE6OwR%2FVJBl2dFZG1JdyWxJkLVn8N6RbzD9baXzo&X-Amz-Signature=b155f74f05406ba1c5ccbce76827d0982136a9ad445f81b52ba9c24a138f73d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=11c72d9d454a419d3f80ea7bcb8cd99aaf939dd4c682933b9de66cc3ee307b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z2RZHB4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwSDpnvggpWILiXciKUO7U9O6L%2FXwp5liyrYFlWH15VAIhANr6HvpdlXnBkPl1h5kgkSpKRYMXmQHjjKtMyk1XlLzLKv8DCCoQABoMNjM3NDIzMTgzODA1Igyge64LDu00K0qhKdkq3AMihlW8NHo0ddiTkqacpnkIywJb7DjcxnqhfbeEYyXc3tpqQo%2FeVBmQcKZYC4SDH6UEKjWvViXZrAmPnYwHvvOkqSm847hRhF%2FX9ca1tlpYfwMvbxNVOthzZ3nx6ijLECDTVNAE5TY0Ov4TD1KNzbrzOAoZN7H%2FrSTUIoiAF9fOG4ZjtN%2FdFz4o8ZwLZVsUOPgsLauubJkO1sTq7lE1JTeuTer9aX36v6%2FyS2z3%2Bs4B9s9gqktch%2BUuMKeU0RCu6G%2BNyoKLiSeGM8QQ9et1BVvXzpdDU2EPZfgtP4CqOz50Nii09U5MTXExWeGFsv%2B3ylHmIsYGDUdC%2BV75ED%2BYFCTg43z1buZlRQ2iho%2F4h72a8%2Fyo41bPp%2BBargj2XUIJZZnPRHGVxTeINN2XYR4AR4iPa2%2FIQnPvAR4JW40UGrRPJK26j5gwH6eqQWlOb63b5pt3tvNcn6UqQTCHYn30cJNtvq1anDj3ucppb9Dqlec8ZXg2Ut%2B%2FHk%2FzrfppG%2FGzG3R21wntkdDwcnGAGN2Q3VWTV3KrA4phRZpIauiUZcJ6ReGTU%2FbzAL99yiA%2Ffa%2Fp41yIR9Y6NoPkKStWp2XBVvbe9ccQB3Fw2rB2zzyIJFDqzAECd6u4zqD40wY6xTCon%2FHEBjqkAQpynmaKFWHutvBTNBED072RmDH8RVetrRVrY0pBGk5TwtDC7P4VcD%2FSxdeFZZGIqgu5yp6Q7%2B%2FcTeHs%2FikAHwjPsNL3I2PI8UpKc3pj6BcjWsZr8g%2B9sGPfE6LvXE2AIjUOMwIjPs8J2k8XDY2GjPYOKEjq%2FUW3PQbZCuMilAa75lQaDQZu5t1J%2B5%2BRUyKbu8FiwTyt0WmTp1DMPlvhCIXW0Eqt&X-Amz-Signature=80bd0e21ac97ebfb6fdbb5a5b501fd51621fd7edb009b82e343a35786231d783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DGN4ABA%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhCv5zG3I072aWq1CbB72SVIfT9a2O1RkqV3BRRV%2BqyAiEA%2Fzf6PXTRgdQUwJ6wUvXCuXCFm7czXHqYcB6mU%2FEetq8q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAmfPlVX90BQh2Yc9SrcA7oKOAn%2F3JIAItryEe9ZKfcg3DJHA7p6JZdy3KruSTlMgY5qgopXcUvQ%2F%2FVhyQcgERstyO8nRdn2421kSP21nZQ3PrKwUqvDPlX87Cj6EtlvZThmGgeAG0X24iyMAwynwH26Bj30trGsSoB2shug1Us0q8lMg4Yea9PdWVu0CQB3oRSBCLNMIrXpBkFZqn5g3s%2Bvm8CxVdUOgsjSAhu%2FA%2BE0ynJUuVfRk04Y%2BdDW3K1uAbBoFHDjIS9p8g6eF1Oh%2Bjl0WkOhs7s6qqkFeRR%2B1GOtS1cIt8Wtoz1X%2BYKAKIEddX92ni9DgYDIh7Lv%2BJ3foMyRaVH1e4jWsRCt6CNKyGot1ATJ6iNxhOlu38EGDQqEEKNkNLbJBowdm6crYqem3uV0XyBGEDntF1xjNIRidcOIQBB3A4b24m9o0S8Cdf1o44LwfDukLrioacnOpaUMxZ3uR9Kmz%2FAY72jdEPyMXPhhkeVro5Q%2F4mVokjiAWIfetUyPFf0zMezgTZjNgrTA0IHnJSpxWc50IHEHbYmy2Bhp0JzyjUpG3zhJ0ZCTssKRxi1vXoDAb5zHcZt8GFpG%2BDt5PZVk1YJ%2FMAf9WgDoQISsFGqkado%2BrN5XUqkqarmUSca40C4scADpYzxMMK6e8cQGOqUBp7sl307AakJxJbU7k8skvS1%2Bzju3OWjNbanloeRNIvmCpvSu51P%2BiK02j%2FnSD7NirAAzoSI5%2ByhcWYhJhWTMvFttgnonYrE013OE99p342aSsGZTq06ZYuiTNl2wd93qPocCFBg%2B4U2Tms6Qk4GhUPG5HLatw0B96T24R1jeonfCZ%2F1rcpMcIOwhLHqPAsIlvy1VGfcv7u9mWkhRH427svVFi4UF&X-Amz-Signature=713a1137129a4840fe50a1e6f941be6ba19fe955bc5264a10a0038ea7b7b4204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645O35BEF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwCzXHRutqneLG3XBoFapSMiYzCymvlBEO4OO7o9092AiEA%2FOq7F5BRDQEPsCa5EVJhlTtBlD2DxwTUolSkui6pJDsq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDA8QL09Zj49cw63aGircA3WFn7fPJCDtS7quni5DYjj9rdBaOn8UPqmHKpi6hWb%2BAsRPY8Ov2urRyFArQRC%2Fh1dXYh7%2FMA%2B%2BAyU5w1w3IMcOs0y2%2FL7g0r%2Fx1%2B3A5cNcNAAEBojDawdzQ9suYF1939An2mDb0vsBVveMezoLrQpfZBJ2ymT5NifLP9JT4EGKoY2Zj2uDRjqlqR%2Fc9NGsR6xB88P798dw9pIL0W%2B8h578NmuIFSMGa%2FUYX27YxIpdJjuUFVGwpWiD48p%2FlSj3Smr4ZMUwcz8QNmJZ0Oh9EpqxZXXKQv4XYR1afhvYQO0R%2FVPT5VuqeLupx3HT6x6RLGEHa4nsiS46%2BZvgzDTHxU%2BudZcmeq5QfNT14FrKR9%2FPrkIqcejTyOfJM647hpt6DgIn5VVSubZwuYeCZFT5bhHPiwfpOtWdAzt%2FSxJIwOkvq5EIEMNbTCDFk7PePVJh7KYbCK4sGAt8KmkQKfBEPv1osnk0sy2sJU4owAsVSy%2FID92Pl6P%2BL8JSumOJUYy8gOpdTRTXtbqJZ2p7dXYTRUXYyuw9fGbTyNWlPQnm0CB20Hb1uDa1Va24ZVL7ew%2FqIfVs%2FmpxYKlW3%2B73NEuBmH9mePiB9QFqDnAIWyxblJrM%2Fd7J3UsqMVvHjpn0MPae8cQGOqUBD0WVVCOYr60W7R6sZ76qKlcYvbqcciQCqIVoftzygsBQYe2LDZFmfGytvYGeb6zAw7zfjw3ogYkeyv9gd1w2GaVdQEDYvW%2FUSFt3%2BkaksUaTnA5%2FLuMN4PCcsXgqOywvFN9ximNUo3DaCV7B4lZCfynWrGnhYXHQE8K2iDSxZMcJeqTwSggrSKGGJfJeFK9ytTRmsGz1mdj5yeCmeP0bWnxXUyrb&X-Amz-Signature=d25130fb717017aef60b6ca14425fcfd5185c77c71b39371d21fa9b1d5b8ba13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFE66FKV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkck4NyaG7dDKgz3JHePgFoTnirVdK%2BgH5Rl2XmCwEbAiAFFYZfO0oIJJGplVxCbMUleJndjIofHlsEZjICZ0yfGSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWroFd3rN3jUSMQz1KtwDB2KCKVijGxWGcn4ZbOdGIGVBagfLo51BBY0OtlQBLjAFuBABKV8KghuDirBc7xnNKD9%2FW7Vi9BZC5IQpmBbitXxO%2FmQLEePbrgSnPlCVcficU5Q2h1j6dFazu00lrAbAh4AMaC%2BUpCtadA5zkP8wd02da1qMoJYimiT2mRuke4RgHZO%2BEscPv8jhkAkxjpcCNp3iE0uX%2F%2FYr%2BSGeq0MBlBp0acdf501TGZwMSNxcBGsER9gJ9yNbtZLM%2FemokxXDaWt256bOQXSRw4uYwi%2FYlzsOBN5sYW6P2L%2Baj9Ypd3k5uvuD5%2FxClr9FYQdGfHZWAq0aDCF7yLeMkTq9BuBXYgAG6XFhorjEXzJjEwLNCWklevAQ9TOrV7z51UHdtDG82QUHJd8WYBgiCogoAIu4pQjG1dhJ0zJGbShGq9Rm%2FWfPCC3CWLYDVHKs%2BraR3BnX4cK3uQC5i6i1BwHrE3e%2B%2BRp4cs8bndJ20bKN1YHZ8x428ZCh%2FYPEZ1SshUgbDVq8sAmap56a0WP4yXeOku87q9yq4dR4t9XIj%2FA8V6Chccu9c%2B251nR55NIJQgDucHpXjN6DOF9w51B%2FzgT9EYpfKDEzLFcu7WY1xst5y%2BEuM2v9U5luoxXM78ZfhA0wkJ7xxAY6pgHBYu2WEFSWzw1mwj8r%2FWQECsQvP08iaBirnyGPobcB68cQAtgH0vJO3GBBHhdSIdgaOfegu4VN2AOy46%2FNRtri8xVTeDdhdEr7%2B84Ovjni7xNUO4puEjKrv9OrGPq9a3HKMH7%2FwdIDd68rX2wWyYb4hAlnQidL4xaAlxTRwFFmuRTGsKPwBmclP4Y3RXkPBmIGXdfpI0d4c1kAX9VC3a2%2FskDHzBhw&X-Amz-Signature=4acc124949da53ad813dcf4af9980eb6eb78afeec42f9e6688590f3da730e3b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634FRSRSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLnJyz25mHcYuhOKIOC3hKZUSuOgnc8Xay4X8XLu6R3gIhAK%2FJGZ26ZoPrRgbG%2FKTNkxmh2KjEQEmN19XcJV0f6fGXKv8DCCoQABoMNjM3NDIzMTgzODA1IgwT1FVh7VyENKldrikq3AOPk7U2hwMwtjFqLjXT1wH%2Bvi%2BwVTVkOtzbQCyT5Ny81tWjp8AnzixTQemRdYw8T8FPCXdCUrvPqGUWGy%2BzkgsCsAKeRDs81nfAPo3RUWZlu2GiocZCrrrSHrK%2FByGxfpIoDShauW0BVNec4vbCxWYQZPpKVWq8GLS%2B078bHY5tvIGOstVzIJfe6tV43jIChjrndDvdG5DMChVw3Qfp2eljRrJJjeyiWH9v6GMOyNX9LuopDklNV3vIOo4Yg1TCXqAbajkvk1Oqkg7FCxBs5cTMWuVv7a%2BQkjmWuwJrfUmfwwkpf7xGSGZT5fXzurKbK1mhCVWFGJ4xK9R9AwEtOxLlyW2iw0omS9HnFRa4HOU0qBeN5oTnzOV0GLWKHtyOlFxTNLNMFcFw3%2FkZth0hs3Dl5DuYU%2F%2BVRffL0snTmUXIv6Fmn%2B9Amj%2BOhr35PkgGKpEDbedzg8bt%2FqcWKwS0ve%2Fy2%2FpEUNunmQo8M0wFGX7XYu3DTzjsFW%2BvGAXS4kVZJ8CWYqeJVLWOuBHnuVyKFt1zQfabURHUojb6n%2FieoJvAVqjiM7z0cNvV7ABAbLoPUOmSA5F%2BUfMEt9Cew271L9gPbctHLLoXUbW40f7CF1Z91j9VkewzLnMQOetI9DCwnvHEBjqkAVNV9Gxqk5Hav5AFnn1icckGa9f2z%2Bjt6LL%2FD7qTxuzfdkuYCHd8dywYw1%2FefEmOuCrVeQ9KsswTjurT61d2HNMK1KNu8hHcONNQk3Y%2BneOVUp1G2%2B%2Bs1GL%2BS7D2wTrX1WTajNsl8VwpYhzBpkR7YI4NbgWRHdc3%2B857l9eh3XlhwvAYWwEzoltVgEG9AvAivSLjvlBVxYdtYInBBFqegfGzl921&X-Amz-Signature=73bd69d032bc078a47ee1bc7fab76bf868c09a6d24f05e1e3d0e42846e5be526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=2f665a77782c43aa00600952b2ae15bf9e29145d990b5fa5053f079d61b49a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCNLOIC%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmFh0%2BcmqqQMzZ%2FxYq7EpXi6QDdI6JjBgQiZkDl6V0kgIgQTNgsCpF%2F8gOcjWbrNVHgNWna0HDxuHLQV9ybQN28Zwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDE3bRk%2F7GYDn0NG8JyrcA0rgbqZeCxWvRCbStfm62sKo2mI0XIZo%2FUQLIzuVX701jsVHMbuO9p2ezd0f4XPQcUzT7i2%2BcJ8bDtgiMqyJLnUvmzqsqCgTomTPMQlHDUA7xcunB6XL5vLkLdsfROYkgJTl0S67E4xk6u%2Fdz8CNquA792S0XjbXlD3M7C%2FujeIxOhZ60nganIWqWaYAuntVikbUXz6wu%2BDSgbKdPnjuGjKWRtOBue7yZ0Ui%2BqtEn4bbZhDgZUlhkQjnRBiRtti8pkqlg%2Be4BKDl8OUUgMaywnjZqjLKIOdVAzXhrc1F0HFkwljazaEuMExqsp3O8W2WxNOkcyc5%2B%2FkHGr%2FCTXn4mcy0dlXcQXRTTaRDO7l26wnjmVwaYyFlP9nnZ8X%2BFkfiY%2F249NLWgAV0F6tX7mXyTIbDGJW0Hx4%2FKxgbLRd8K35p8uBSkYAXewzcE%2B%2FgTSk8jCzDP5N2i11Da1TybQCkeX99OdcYXPxDPZTQ2PzGyjgx79ZLroSoFz%2BsbdSZXD2LLic9g38NUa6GPNdfPUWWwgHBX8DGCH5NizBeq03cw%2FyQEe%2Bpgs2WbP9lRthcmtzLDQ1jFjXou%2BQFc1wDKLfxjC8mPZNxcOpTnykNYhyvQMhipMUztSyBse4Kh%2FznMJGf8cQGOqUBPZtwo2w4%2FKb8%2Be6lHge0WJp0MzZTtMlSGxmlm3lhvFW5230cx7QOdm8ER3w0eERvyc4i0l7IU1EbW81i91izveA2wWGzFdQ9Yg856IwMbJzEqd1BiTiM26Cbnk7hB1H4XmN%2Fl79Ujo3M1tl%2Flh%2B7sDZUq0HYctInoLxS1bMrNa%2B8CxSwWzPJQETKNjA%2BQ1iybVzGy4senIiMhNmqcqUi4OJE2Cg2&X-Amz-Signature=36667ed81b32c847dbe253f0cb9f101791c2508d54286f4ac24a9d2bb212e2b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=1600a8cdebca938c1314c216756b993dab1432c693fa8a5e7aa4e22c2f5fa5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=60096edb60e8c71a74976b7a52bfeb19f6f2bc25424920c8ac6f9e7861c25bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=a230197cc05695c0d38ef889fa8d1ae727586af50fee6611c6905437880c5d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=c8b08770318b7d0901a41f74dd505a879a35ab1547786e23b34aa352b3a0aaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=908afdbdf22f325e4aee673beba0290aaacd0756d0d77cd125dfc3eb314cb569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=7fbfa5e3c6c9c643d9d34a3bdefe0e3a65d15a515470685e513e632594ff4e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=a230197cc05695c0d38ef889fa8d1ae727586af50fee6611c6905437880c5d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=be62977b46d0aefeb72ac43119f811960f7ab8483a24a1bc69561cc6e7de3187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=fe50d89d77d1b2fff0d5322d9d55d5c4525791da09e68d9be739b970334bfbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOQ5XJCI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2Fjl2N9Ndv3PI2JImtOAW2IVX20Dt2i6rStShr3f6LpAiAUowDuiHPtcRwJ%2FenZ9xYXG16LH14uKMC2G6mDp6nV9Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMTcBVFe83QL9RbxlfKtwDtomY5yoJWitJ7n37WIsPG4AHJVsTPcGa5E8%2FOu6x0N4hcFKMc4DNX2hiN2TlHM8D8F7Rrn4rE7rDD2dvkkOktNPMAQqNSIuklQQ50ilOQRGYq6ZOwX9HoGhtp0DcCfyhszjnqwKkEHev79%2B7tGbYvR%2FijHvrItacmL58tjKORWSBiy8VJnMWs%2FuvXZAbPv3%2Fwzy68nUck5gXiWvewdghQ%2BKUMUEF5l9XikUfW5KcDDHoDbl%2Bpm8NtReZzS%2FGFgs3GsxkEmbxEKqCrT5KyY0TCyYgi3gxHocPavTDINTGhfMneuzgjC6HmYTNOXZg8Xs8w%2FRkyguNRFcwmYzZ9ahAnGJAK0esuHn24RX2Cz89wcAVAEcTHhv1NBPUk5Nx%2F12KTmGIQVIa3QwGQgRWtXjcFDvWrvjJvqUHhpNnUobgX6ZMJh24%2Bd4IfbWyu3kHyjd49UjkcJFnSB4aL9cC5ohnI2WzZz3ceBzqKoU1gC2Gwf4jAo6bR6fcc9TW8Y96kUPi3A5Xw%2FmpWiM9CBCl4wps%2BrEqc8INvqo6fO2ZkcMMcbM%2B9MBaTcAXFvPvF4N04f7wHovEzBelPPKmnsCE26jyUSGKPlRkKJHP1YxKxUS7fWqwEW0%2Ftb3LdOfU4DQwnZ%2FxxAY6pgFEfE3kDLF%2FYLccwBnnP7Tnd2Rejl8cjEQX0eYWgXXbQ9b7XjQPkmmE79rx5dvRhAbdoUkzs7MbBqSa2nGyEjAfEAbYkuTef0%2FQXpBBDFBf9IHCQNrNTbp8eUCS%2FyiklcmMbkH%2FL0InwtfdfcgOkesaUz%2FHIvlM0jvg9BqHGvECrqPGbXZFKkKZY9vHvhwssBQ9yH0uauRmCfMta%2FqvqUW03kFxvEfC&X-Amz-Signature=23cc7e3b2e9c889b5ca924097daff1a651a265956960b6605f12389d49e1886d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
