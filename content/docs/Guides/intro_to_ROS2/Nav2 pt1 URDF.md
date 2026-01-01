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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=7edb66dad219c12e7afd02d24955ec5318aff6c0ba9b7baa2826831212d2d9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=249fa71e003bc356174c6932d2b79c1c1cce2fa01baf11f057f5abc77c00e32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=72f699db6f6b92320129877a154122d97481624dc7c670200d322a522a292a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=9a94c115cef44dc0178d7024d32818888bd91415e919fcc2d03d966b3e5d1488&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=524e1d7d3537bb6158f1b8373757c29e7f5d823a512f172e726dc5d629a0e231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=211fc6a3fe7dcce9c1341d4f9916467a84c14c9c64f58b3e24bc435700294521&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=c70f7ea1a1ddbf5e090b7abbf90cc7e15972dd923eddc89d43976a2e7c161fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=abf5612244bb79a3918b3b03ec2bdb8be58dea8a016709c2c1bbfed409f0f5b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=05a49e7d1b83a1ca5a38a8091d0c0f1a8e11fe17da3d079f7f30b9385e0f41df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=b18148d9668bcff1aae9425e15e466da6c3ca01f2672ace1a39be58401ac7946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646T3YNHF%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIBXMQ0y9Ayt180P8pgqxZNdvUfVGSkZcNbpqhR54dPqWAiBnURhi4uj5nco1bIGZb%2FcfpW7vq4P612Ji%2BFGfBtcIJyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMg77M3%2FMjxxN8ocPxKtwDsqowmxz95kn3CU0MDMsfN%2FONYZH99J3DsdKN4TvE%2B6y24vKbta2xGiVxHhrJ1LzmnYJkrB%2FoUxkG7z2u6mMVStkB6h9rvfkRznItNPuazB%2FDGYYlzNmXS%2FL7ECqbRN%2BqC20vPIHp%2FmDSWZUu2K45sVecopbO%2BNUGY2BOtKntjUoGHkmBVrvK25WxRAcGBJDmiL1%2BCn%2BTmosKCSFi7Wgux4vd%2FJC%2B1Zyb6TvQxXMS4peJvdJqO7MHOkUIKoQO8XrLc8hBFB1tpdCXWc%2BYPyvBPbS5H7lYPQaiim9B%2FeFBlpxd0V0ZoGTItK861pvLhgun53TW%2FAHM1F3ajr7Sa0cmz%2Bt47HDSV1YXX9OBo7F%2Bz4DTa32dUMbtauBo9N6riSdpDyVqADzKtjzWtxu6sqhVpSZDy7i%2BPrixy77tzBCnvUKodb7xDx5P4T20g84OFs5p7dY8%2FpTbEgJWrBCMJZVd2pPocc5vPojQLipUBRqppGIY%2BdxgwZeNN2w21zry2Tgo%2FlYO6m5mKKCPkJDOwcjtfIUfg6P6ABV6YA%2F1TvTufrMHFbDcBi2lAFMs1oZEBxhqkxnsDXGaEv%2BISd%2BhyeBrA2rwfLtclHcaSzbZakVF8rL5o3n81JeKMNXlxPkw2JjXygY6pgGV8Sd4Rgk7yP8A0MkpxCU898o4iyBsImj7dJ0ySSe73%2FFOlCMKxN%2Bj5HMOxrIbKwWd8UYohabTNFcNX1RSfkAzqTyrUwk%2BRo%2FWi9vweJ%2BvB%2FiBVXDnzB6IwagSE6n6lVFDYLto5dhrTcVY9AhvgVLKaUNRmqOKsBFdMkRB%2BexHDESn7tkRmNC435Z0WJ5m7wjvKqTr2bi0c6K39SoBIsBbjsBmhP15&X-Amz-Signature=bfc2c0a78da002e95398f6d894aff0f68aad70d2e53f857af83bec22b0a7c120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY4TWNYM%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIFfhVSkig3AoGemfn50nHMOUF0tN47X%2Ff%2Bpdj%2BqUJNTkAiAJeeKMQMeT4bgkXR5SyhFPG6VAztbSXzTMmmW8vs1epiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB07YV%2FsPpkWyxarkKtwDVxeFgOW9Fhi3beBwfNFhGtCZ5KC83r6hmGzxOZPqlMGPGoAs4PHfzO9Vn%2BUhmEt5PGtkH05uADqmFB4tMqQLXYG0MUzDynefvKn7%2F9AEbc4SQpPcDlvi5Xh32UTd2Gl6pevd2%2FBvYfwboJ2TtcDTdnGN60hRLJH0Sg48EYROGirUCgcnMAq%2BZt9HJkK1dTr9uxMtuvaXgd991sWjRlpGgBsbMd6DHTjmBxa6Mz2jhg3cYZp5EiPuxTUsRAdcJSwCk7o9gyL6o8xtgegoHBtUiXa9dvX57H3Yfj4GiyTf2SJh8XRHLuj%2FceVD8%2FAngmHZZKTy8RAlQfUSsjTdarjzTQ78CPxKAbku0I3UWW0spTcXYqsVt3a%2Fo8%2FeeddooBbGG9HgHZ6nyzUyV%2By9gLzH5IpoK3k0Tm%2B%2FODLdjJO8t0pXTqfvPGnjfbU2ebCHXBqZrB0M5XmpERlYsSrCeMYtn8UPyh377BD%2Fx5rG8voCz1nE7tjlMMPuhGMoFCR9mg9SzRG6OXFRvfsNRf9G8o3Hw%2BegX5clBs2nIL%2F17rFlp11D%2FA8qPF52jfU%2FHu6zJ4Xo1mO76ILWCgaC59Agzs4A6BGHZmYt%2BMONIMIcQ4ANvYkjw9IwF0dyAcF0j5ww5pbXygY6pgGnI0TgZ2KA%2BOXwHW6J6w7qAH35B7zbQFscjTShjLm2QgmuS%2FQJikYZacMAFcwYFNEmphKGlRh9zCtqHXbv6C4jfhy42Eoubo27zJo0YZkwk8U7EUgkJwYhLSqrRlwVT7Qr90H95h39omeo6HebQyRhX4UNWhwaZjMbVgFOwMr48EygYzdRPz3h5SJo%2Bx8mq4Etwa5ifjUviPuR1laFezc6cw7lHq3W&X-Amz-Signature=4e2b43bf6d039b72553abd6cbed2e2547053980a2be5084fa421e1386b2401ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT3KF3I4%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIHssMuU934TsJt2lFtCSURC4eiBbjYo8htUpD5B21sUZAiEAiZ2cngj1ojqswlL1O3Rqln17s4DD%2BKFC%2F03NV1l2VlEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1iJ2o3IpcszfuQyCrcA%2FFesZoZKKnR7FTIS96jzR1R1%2F4nLpGlaUBN2m8drFF9ZWqZf2CI8dGDGNNIcKU7xMsjQ%2FMwf2qi3e7Wa2pUvvW%2BFAslv5zj3HPSd63fReNrJDGUV1givvFUWlJ7FoMaahhSdCChXJWfHB77uE3dgZ6E33dFQRGsMAJKCOj1ZHDV3hRrxm9UDq4I%2FvDYh9YC0LA%2Bs6llj4naUSXgY%2ByYPRlJbydXHb7owB9Zfdm4DfincWGMG2PfniihR3BclXihPUEx6fmzQr93Vu2KoATjYhXHv14bSll4DvMEeo9ryquk%2Ffph5iLQTvFccSUCLlgfNoEkzk%2FtwoQ3%2B%2B69gGamdeArO9jIwzxIPSRgbP%2BuwwisM3XJ%2Ba2oaaj90AEzuIrq5RSMpctM1AjStv4SQpWM6K66J4Gzfl4RexCciKGpAf08aGqVui410e4I35y6HhB76inu%2BTqW%2B%2Foq2R1yhmXINKMFwbHAHGQKTMdbtpxISsSkt00j48EC7HhLmv80MkhgntKJRHRMbFlGlZvn3onc2CGDBijDxnHA5qbZN%2Fktsq4PenU7TU0gFmjPuM%2BtU1wmoMSPbZHPmP%2Fe9UsKNyc5UtQ6LKcxSJomCpVE7sKSTvVlp5B%2Fw7yy9GZJY6YqMIef18oGOqUBgHNAVufxkZhHFCpRBekF7dpHjp6IroxzycI3q5zxsKKNxI1nizKajkgKSa%2BeyrZHv0jP63cRymU8l%2Bb%2FsC%2F%2F1C6O%2FNTD%2FF6JzhIl5uMmDVEzcq2wtYu%2FxEhMrcVuzMX17mthAMhNg0%2BQ36SUhAfdjBwY%2FGFDZjK6%2B%2B%2FOam1gYWJrIuz4KKdv3VN1U0aWN5t8VWYOpPIL49FT1voHvYTzr1NpdsXt&X-Amz-Signature=3203dff056402e2aa4f17cfb506211de8eee8cbf151cf6c0cc3c13969a51a9f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=0f66b103612395ec134a564349269348425421f50513060488c783c8b466ee32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6KBTRN6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIA%2BGUaUQpK29GEOvRFnxDa1RlsU7TnhMnGN9pOIdRetIAiAxtsifuoiOq%2BakbQlya3eQ9iVDQ%2Ff1ghd8w4Y73c%2BhfyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUkf0YtyGUPe1J8A4KtwDib9vHNJundJBm2nx7pr%2FGvR1dLiWuwvFQxONplHSHcjW04s9wFczGSnHizssew1qajX%2FkxEY7TiAVMoFn04fHexGwrpmO6eL8phtJWTNd80OOiibM3XacWK8zJEp9piZ1pROcwA%2Bry2HkP9oEYHJnUlYsQ6jT3KyxZfVSeMVRGvo8iCZZTMq5XPs3YJPDa0rrmzOKSrv3qqsHxaE8kzTMlONuegmYR81j7H17eQ%2B2o0eyUFPDyh0Jtz3Wn121qRgeAWVzlNb2qs%2FCHaEIZV%2FpResRwSye9VFA6vJ8EpLxcNqxznGDB%2FCqpmP5zxG56%2F%2FxW1e1OyFxtcDr7j8HPLsWneXfa3afz604aLuqV7FG9Ai32aExTGDPuoBHdgMdR9ZNEvbVjsCQt9ntgq4J4H7%2BZee7QAQeGzePjyVdyEsqH%2BbS1TOCCy6ZFzbVpQW4HEWThXZXnLHXRwokWNV%2BSs9AvfsltfWKCl1V4hWlKSlGSy9BbICnDdNpCe4UdCXrIOMhgn%2Fz4XvDJNyd3hnhb26wa%2BN9AepP4paHXFqi10pMrXK%2FssfqH8YFLAjR6b7utvxHdDxkiCk1ftaoy%2F4Q9uDIKC9wX6GFRtTYxTiYgY4W%2BU3V30vfiTBBYCRGjEwvJTXygY6pgGSCUYUfZ9cHbi6SmKD07DJuo0b0VuCQKxrBwaXhnnQMYBwe5%2FBAf0x82LICFtXLBg64knJLRMr7Tk1bH6scnrvju7%2F9BOPt2XeY7CEvt8nHbrVTngOcYbGMcgIQWGOjicyPUVUdukMm%2Fscu59RNU9ZD3rpkLS4dgLxaC8gxfRUBvYuqUV5c0sMyY%2BCp4o8OKutOIKbE8N9VMrsRO4Jitfun2Isdgwy&X-Amz-Signature=12f2e378b4d93157145ac85ae61728612bc60920b4d79e2bc2f7845f743e33de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=6a19baaf7ee47c870af4ad14a72a506235c8b2b705ade573a3da0daabe595d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEFGCORL%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQDz2UuBtf1rkU6zZS0wVeAOm3ttQlv%2Becf0Jzgiy7J7hAIhAMtIsYvg%2BvDjoGjqHWsxOxA4YlvCbU%2F9xf%2BY9O22aYJsKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjQdtfKLhRu97Atq8q3AM39sV5OM6RJTlE5NC13yOz%2BZsw73JvuSIuHkejpj311M70pJ01b7syqwg2yZQ2mOABFMOk6dUh1EuMEZ6Ab1qaowlaA6m%2F2xcSyTkfX4aqDAKWcMrVlyCcxnLtJ3KzgYK3Ik7P1%2BWwKfklDZRlyCm4Vs3aR9yJ%2Fs%2FjcyZjS0Ok%2F411SCIOlDZIosQKZ1iU25KWL3zd8E3WNnkstGTicd0GNuB9%2FeuT4Wb4YX4afL58LKDCa3GKsY0cKUCIGah%2FEkY2jBUvPDUJsD1ogtlMj3HCGEuDgN6I4HniTC6kgIfxfwHywe3w5PDhRI7r8BSzl3XiA3GH56PWMUhth0Seeg%2FRmyku3sgN%2BpEPqUyOY1oqAB9VbnhnIWSlX2f9JRujZkZQd0C2xxhAUORcaVqD9QTSe0zcbLU753qkREM5SP9Y3Wox4KAVWeAk3uw2okyK55wTosECJ8XPlxDKurGiCs%2FWJFcZnFZrlpMn4IBxrH3r9P8q8pL2EIUz8lMkXkbRhD9qfXI1aYRg1njG%2Be5SdCnBkXbnyLTFE0c5fC9VZfuC3n6Mqr3j4qNPfa8lXXN8w%2Fj0PJcxcDbyMqTct8QpjJJqz2YqmVM0vj3%2FyhTRpUWKvLnLcWM%2BmeAS5uExGDDImtfKBjqkAZVTcFGMf0RoUPiorbc%2BbiV6moJcgIN3sVIsqzj04ebD%2Ff2KPhCsPL82T%2BWXWVIFo6iGUJkyPHk4uZ%2BBl5x%2BPOrVghA%2B3QpAaZK%2BnZZOb7%2FjoSa53Uwl8XwTWRko3fMjrcd1kWWijtJjSNOkdfKZGRzXWMuX9UipZPH22OTEfcyjPpni4%2FB5JCSq3e0jR9fIPKd5QUzklLCHUVG94JH7sDjT7%2Fpt&X-Amz-Signature=d5eb572f5400baccfcdad326b4299065bdc6407fc3404a5686cadd9ab8d15e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=52a21e07dd3bbdec01ba03687a11e7cd3929dc168370e7052d6a0151523c7cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOD5ARW6%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIB3BLbKKFm2FA0IaE23mxMTOV6p8oOErfv%2BccEvuTCIIAiAlXebyMIka5c4eBa9Ecgj%2FLC23r6cYfEiai2SoZa3LCyqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMthUlseLtARdsB7o7KtwDTEmmkrvx9DvcvM%2BSV9ZvP20tzCK8oGmWLMYJEz%2BJJ4BFw9WhcHb7o4fxg59Vp%2FAiqN5lviOa5iOYGe4GJmK6NJnnwv7Pv4Enp16d2YR7fU%2F1kijlUoatRt4tJhAK7WuWVHoZt6nlR05oSxQjhdZLIi%2FqQDDW3DZbvs8jtlWehdVCgwbuxVIxOnpTh2f%2FORqZH5SyqHKUig6mCwR1yFkM3TTIc4m8BvHTMMDaviOD4RalceYddeGs%2Bb5%2B8e8UnrOZ2sH4tNJ3pzfv9ql%2BktEGFQn8Yzc7%2BpUluXgVJenE%2FF%2FYdb6qypsvCWOw80WTIfxAGrVw%2FD8z%2FMMODll5eDMuehWp9jxggRoq0Pkd4P9OmNb9rpb1jw2Dj6IVmgrxCaKkfbfsvBc9t8IIzeE1dcl%2FMvveh%2BjcRWt0donOfRwjq2j2nV%2BkgeKf3Bd1QGp87NsFK1X22vF3diUPXAvFGmVLYAXTz8IbafcZDyLNexAZP83AtsBVqSGvjn3iYsYw%2B7CfTtYJB4bG526j5zqbIAz8zpLm4yVf9aSwNn9DQTGMudHSFumT6PR59wQt9yj3ESUn%2B3bmw8FIZH8pAlpFD1eE7pinmxbRdzVVJ7JslXc6lpmFKvkYX4Lk7FYphxsw7ZrXygY6pgGdqF6Ul1XU95PGJ9fK4XKwqOJF%2Bz4PiC0i6%2FF4C7%2B7NobUzNJ2CDjrggZh73OJ7nKBytV6lstwB5fIdSA%2FFsA4rQKCyqRLaZmmHykEmSX1ZrIPNZYyE9sXNV9YaH4Vbo%2FqmxJu71JkWve6reuelI3vlLmVxGTrZdW5nIwIS4%2BpuIDRu32lZkuDeZynyl9JSNesUMlnRZeei2py1bwG7lYDw9xhGNot&X-Amz-Signature=37c6a4d330c7befff199feb212f5a404d5066b9900d16d4724b63ec29a16b501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=2d9cb9eba79227048bb0db0f01b13efab473b904924fdb0986e1addfad810571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4SKECR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIByb0UXHtrnm444W0F4EMC8vAF1bfpJa6zdon5ccfQGqAiEA%2BQH1DasXPGSSw2P8rQHYYElhsEGhodAODHvsCbRltYYqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgOB9WfT3oZ6w8UayrcA%2F%2BxL7pdBS8DYTRzSQQe14VZ%2FdZrx1mut0B5iuibkTgmPuVnGaWFXh3MEk%2BIk6CRDjp4hnT3Ftbn1F%2B%2BkGnsrnfIdh0Dj2BFPae%2FUovJ4GhEgOGaXBk1KMOSOO9rQXhhQk9mMcAbQNVYclojJo6rXHp3lB243NFM%2BZJQ5LByQJgWJYSZoAUSpFddGBkC1Zt4pBJXV%2FJqAnvHkLG%2FnbYmcyJ0r3swuEIyqkq%2FL3NtQlRohTgCJjJAt%2FCTzr2WG0KOtUCy%2BxTIkIi4hA53hlDocrf9U2VGGjYsvyf1GECp4mjVzlPK2dwKHqRiPqKrOCz%2F8x2G4UtbozW3mo9h6dMP%2Bcxf8x9s%2FF8kThxt3vYcrHLhAfEw9dgKcUBBCuAuI%2FuZHq8whMnTR5RKbLIBPx%2F7dvXXLEkrxdjH33h2WsXiN45BB5wAMSLPS73PHeOdKQYHI2s48nzPdNy%2Fz%2BVmu%2FxSLc6632BPI54Z7fVrCHyjXw99PN6E6I3%2BwAMaZVW0VZ3TIlY7oitMgnPIQaUcKdbWfM0mEjHnpvjhVCzsttER9EhJUILfekDSRB%2BLvwtKyFzHJv2QOSq3%2BQjouqraXaPjzjrnHyiipdCo%2Ft0mlFgLYg8%2F2wfwgMEDIheMO%2B51MMmi18oGOqUBalmqZNKDg636uCmrMU29iLMpnoBN3s2dKIC3RB0r1PKS48mvrecRuDWu5JeueXKPrISZMB3UHmwW1%2FH4K763fckpS3wKbiy1KrGe2XU7paqxZNAAu7xLj2l67EuSPUNDEGuMITUcTYYndcds3pOmS6Vx7QLr2Ik8EMtAQzAUm2xJRj07a6ftEEa59UO3pb1SkAZWXy4PA0ZrPE1gToHc2FkOCO0m&X-Amz-Signature=f912ffa5f8f892e7025dbf4316d9fda72c2f55313f4a2455b9a366c76bb156d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=a94ff6371f0333c2b6a601ddf59571b94559b555a64f61828f6bed657472413d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV4FTJA2%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIG2xjFJ%2FiuSssT4cHHCyVpJkmDjPT1mR6VFvYU26XwBVAiEAox7wWOhr08u0VsiE8o78ChGaBftFThYIbidQXLoXTloqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyCgIVHTmvsaR5vJyrcA%2B6x%2FsRpDqUl2LQsio90FY6dTrOBZWkInhXmEy0f5FKQ2Ndts1rCNqbWgrZT%2BLcUbAanu6L1hXyy4qdDf35jncs%2FjJ1Xq7v7El1uqt%2FtfJ5PQ13RV5xNKd7hsYkTvY2LDBIi%2BZ2iN%2BZEMjlaykBe2Hopgi6tsajFvszMXRGWoed8V%2BF4yWN3E5TSZBhiYQ%2B9ECQk0qUeDC1A7ywrUQ3Oiz7hhlJ1x5AKjsOEEr7gxkay7%2FA3Y3ThSkUSeqBN8KQEoh3lGrAIdgUEvNw70pYUgeTQkUpnP%2BwHKt4CKvZOB3atA0EKMXQ7ZkDQ60PUnOqZ0nJIc2muZYpVsQY0oQN%2BteCJ6YWUIa%2BpH1SNahYFWqDt58zd%2BrxO1GMh3YMjkujnayINmxgHJSaF6gflDMAd9j8aRDDFw05VX3JFE6hGTVNvmSf9Xs7pjDgONhJZFTAXDYe3xJf9Y%2FwP49iGBMMSH%2BfJsaTpa6K5HH%2FP8WtcK2S8BS0U4%2B5vV%2FZSHZm%2BNsH7Xm6sEIzXO8PqKCoxW3RPqgY3B3fZUSYp3v%2FVEKWr3%2F7jQ5RO2PXksDiREan2Q77WXxZlVn0H9umd9FwTEJeWRdeCQuqXF7SN3UKDvJRNkSyLujwqcuMZ0J156OXaMIae18oGOqUBemLtdUJTQl98yB5MnShTmnGyZbsoENuS6VH10EFmytLrksg%2BkJW5ryjH65Q8n8iCBkw2BNtRpmKGfJKHmyVXCgMKFBKn3r0zW8zjoQP%2F0U4WfAIV9K%2F93YsFNgF%2FV8gZtZTvBwYnJRaK%2FrkGcdvVkK7TGvMPsy4HDiWZV8986LMuqSbBP4tILok8bim4VujXWhUtvkbLOKsb%2BMeZwzgD9T8TTxpH&X-Amz-Signature=d848cc25b987c7773578441acd581f50bd000d411028e6bf9a8a6300bc5a2699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTU3GLO%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIF%2FiCzoEtSG47xRuQTBw0%2FzcdEQDqLq3ymF%2BtXTtNKkRAiEA6B%2FeS6rNtbJ5ea9PswtVM9uLsZDMLHm5saN358ZyfpwqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BeXqpO3G85h4JmMircAz%2FXUTfGzdUctmgDbSmF1ozrfv98aEx2JcF0%2Bn6QeoR29rahEGPJESAR7iea0RZHsGnWWOggrN8tsX4UIXoJxUdm3rfworNHjhnB1QSIxcO3GRM1iT988W8Elg8azeXIIGU9QgjIcc5pWqsyEGqacHPApLJNVC0fSlbAoIh1j4JmmVe3Et0oshYLGlszJ%2Bc%2BmIJoi%2BkmdK%2FNItPrnVPZ19MN8urZLZbxvVW0bkvtT01Fb26ZTZmKtEVyGG2PN%2B8U%2FWmsRVXAOYefbtEpIf3H78TBddNKPqur9kGaW4qe7D4etT%2ByOiL1jCWZ5Zm2Q0pVBnVR51Q%2FZQluiPyI0bssD2DwFM%2FmRZNM3XKkHiKvOVIiNYXig%2FRrF3R3A1GAXvSwaD6dnm%2FJRJrdMhb%2Ffia2QEf2T4bRqR84D3oSkAi%2FkXR1lNqAR%2BAKzaFAlI0z4oFQD6cl7X9H9Tw9PUoCk6XUzupeIkL5cOZlSHx2NMcTwHqoxdZ5SQW9uY5fA8woRbKlHh%2FiG960TeOgn9tmYmBUYpcb8vr3xpv6wRUV0MBU7jpfD9r5XKWZNeJjplB2kLGgjBhPObojBYcTPR7tQHQ9%2F9Z9kquYoPIfEtP48iTURaiaRv5A3jrzSl9cc2iEMNiY18oGOqUBvPnhgNFs9%2F4rRj7sucOMzqhzhLo9adMWVuvQ6pa8mPFayFwJUDIsFWeyQeUACbdcX3wPL6gvSScUPn%2FJcHgVTLzfarxwODN1AViXwsmS5VDnogKAS1vxTOk3u1RMOyYyrf9VOLut283EiYF%2BdZDm1NyTodSKThViToaLkoZfpkNz5ERpFTBLUHai7DD6I4ZS%2F0psHSUmtwz0cZDHahWPu%2F3i7YD0&X-Amz-Signature=cb76b46de95ebaad1bb329702ff02d873b446a37b6a98421b7062b5e45e43223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7O6G6J%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIAdKdjIyC7lXozpOmPTOSPkn8%2BfMZ6AkB4tJzht3iQY8AiEA9qLc2pmLFIYAZ5L5GoFpboyOh6eDPLWM5CLMtMfBabgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6vlz6YuS%2BXW7CvyCrcAwmNXKNP7RSEfmou024IkPOrCY7dPhJRBNpila%2BOtgp7%2FDVly5u0H%2FRoFPq2CRTTDBAI30%2FWlLpl37MVjICRzjZ7nNqqp9P0gtM%2FP8bRe4S3ZHIWou1AmCQ%2BrCDMZIezQm4dZzhWZbLpUDVAF%2FzkNA4pd2XMwLWI%2F8ME2CaxF0YF5yrbbaVbzIx5dC5R2Qti8aLBiyXP4hJztg2LPMiMhLi%2B%2B87ZmgyhZwL%2Bt74kXQoW9IXJr%2FzdBGJZDZyu%2BMjWUKms%2F66OMna9kO21G8aHcTk18mrQgc9YcjCJPkIRxubZIK8A4jlHmn3W8iQvJ8X0U93nFDN0wF9N15wadlNdM2eEOdNo40S1t8px0%2FTrEfzCCePmJYC5PWDdTaMBhoUDFFuqYkSy%2BjOTKou7BS9IYa5AQRfX5KgLOoFmW47UOLJ4zW0G9lkduNmL%2FRjpdY29Vi%2BNGuYWl483fdRGxBhiUggetIqp0ZDoBNQBi%2Bmj2pdjIjGGrxLMUCEgqNV6j7zoi8weDQ%2FPVbpPVlHeRswBgKP7mA5Ot4Tm1OhPS5EQ7ducN15vZ01RPtfYsgS7fYWQOzsomVKLol7aK1syBkjQnr%2BhH50Hv%2B%2BGA%2BOLC9CuuZebvPEiLXFmHZJfLa%2FRMKyb18oGOqUB2zKmFXV%2FYT3WzttAyfwT1L68cNl%2Boo2CT%2FIHjq3LlT%2BNCNieJE%2B6YC%2Fm6ubcGFp1Tv2Qu1k9OyLwf%2F5%2Bcsv8mshMn5ZM41TT%2FnzezP%2Bmv%2BbFv9v1QgDUJ%2FP0KXEh6RC4XUg338BNde5KvxvF62lCW9oPGtnbqX73CVLzmMYV5k7BQ%2BNz%2BkLqv1T4t3jVR9tQ1Bs9zkUOcAPdTIUKRZT0OuAtakZO&X-Amz-Signature=db69cf290b0864e7e936873251f6f72991807f4be96f18d2d12a93a0e14a26b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=e851a19b29e57d221c20e1652354bb148fe2a41513c7fa65de878ebf61bc9c80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NF4FPRR%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIFOSMK9GeOaxwFFf8LqQUfCrT1WChcpFp%2F2OdUaez3EkAiEAtf3r9mW%2BkC%2FZegIgKpTxdAJSnguadu5IS6srbnmqMpIqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRpvSm9zi2Ox2CH%2FircA%2BUOVRP8RO1dTqMI%2BZQ7pBS9qvMg1%2FRDOraMX%2BcIFavbPsTAx4%2FWdxiL3nZpgLFfEcowbBsMgqVfDWOb%2FzB%2BbFv7u%2BfIRJG66PmN2ejcZFHgwEIAf7FrgglzOjOperqXdVuXzLQR41S1%2Bn%2BG%2BQekfuc%2B5k7QVkngkildh1QTbs%2BqBs5uUh055CZk6Pu%2BGnWrWQ7VhqHxDl5g7pX688TnjhNTsiZxO8BkqRXvZrA9Yzi8AJ6LanTpuB6Qz8omCJk%2FhLBl2Gd6qT2ymn%2F879%2Fsg66lciXEjsuo88xSTpGXkH1SL61mwZb9PjjCCqahEd7058Kw%2BCstPZdHVWp%2F1O0SloBO0qhUw%2Bbd%2BDLGSh7oD%2FOz%2FC9glJTBoPjQq8bbq0j4c5sMG4mKDoCK%2BGLloSUTEY8pGOWGiswijiBp5zkQUPhVmxsCqbPYV9qS5tBJNoYU%2FN72GutJd3MuswJM4BDa0LGDsLCLyNePOw7lNfWYD46zeOkbHlbOU4VAemOOjsVQ2hGPGLx5P7tpaEoMZwNUfFcnlMv%2FQHGsj1P60we3fWYNeReHmEltlJN4B6kZKjG28uNmWp1W5l7vKypcWWz85wIHTlRl%2BOCZ0kz8S3AHG25ZN3GrocH7cqtcjgF5MIeS18oGOqUB5wfgCxL3wBxn4qll8IQWYUWV2YXDtnmM27aj7VymegK9wG1hQil4M02jsnC7jt9GhgzExvXoZ54SYTs%2BLBy4wizz6yv5%2Bfl%2FDqst0rFRc1aPyjWfwsCmYwWlXZfSHAY%2F1OzyJNZdgxP9cG9Sf1%2By86Usi%2BM2U5oAaIvEPFcOkw21tLyg%2FyJA4u6CLAFT2KGOLqgwbiAdLMhCun7P9DISh1I1tCqI&X-Amz-Signature=55cb6ede3b91ea29d5b9597383f0b1e81d013cc6051830c79a805f5b8edf025d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=67823b354adf292080b7d34c9746b668c793fd27dcea1a552139ce7d74d2241e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=7471a4d2d73d8179ef9f9ae17a1984abd4223ef4230ffa1e6c7842f2a4e63b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=9e7a3129162c46f5695242be999c2fefb5c58dcc6f981cb4cd047c0ff9ed75df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=6805a92655ac09375282b7b55726e1dd1c950d552793db19f2250ff7fe0cf11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQ3M5EU%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC9ncWP9i6ePL8Q4pJrsvSKSWDSE3BlftBM1z8DWkCh7AiEApMCea7A4Nlj%2FC53SiwqXbRwHYy%2FP%2BmmRt9GzAgXQxMUqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPcOnjxrLBP9G8xQjircA2ihbnM6rz94vdQ2hjO%2BU5%2FIymE4uRbMKhfnsmowfpFJRkdisv0mC0AJlKhBMJVrUaqWaq5BMaEz%2B6eBrV5ytEJe7XyRnqeb1UjV7fCQSs9vGbgmX0esduzw7hmu9fxcfjNDIY25Za1tpV25BusrmxohjUWJCnBKvO4TpJ9vo8UhQLqVBgHYtFogOXuYfxGtM6i8cZBCGzzOK0hF%2BVKTcwdPl96yrwB7MczWUpf5K5WwT9d0ah8IyHAAG7iCX7wkCTIQJ9JCOIIjMaobJZ0fHQWO5iV13I2L5K2pRdy%2F%2BnSlA6U7Hhnwl%2Bgk9%2FwzHxvfnf4jjWJ7es1Bq8SbxgDXs8PqBdu7WVI7y5OW68An76pTqst0TnJhzJGictjUPOf99YkNo4iohyeJttmceY%2B9y2vpti198TN0WHc4Ebp8NbSbEJOa0oyQVetN33KAGy%2B199QVed2t%2BVEDs0dMhFWRWe7JZvFf7P0s7WC7LOZ7DnNOcBsfr7c8JYBRaOyHORVN6MF08RE%2Fg6kQiITETKs6S2Ov3wxHylpe%2BTP%2FF24L9VMYtDXXUEQf%2BhZ%2B4NHUU81PP%2F%2F5n4RjwC4%2Bn82k6WvujLJauGT1qsthiimaLGwSkNIub8ahNdQ0M5nVh9JpMN6h18oGOqUB2ZHWhvBSGxOk4qkq7Vr%2B3gaXKx0W8ySV3BT3ojBnQjnOTDRQ4fmEdLMb2TeGoia13AByLy%2BV2rNCQO%2Foo4IHIii0nSPr2AH2KzoQoXA0Y%2FmtXnQLjnmqYVQ2jRoamnPLUJjtUgrdxB%2FKW8NQi8E%2BLPMSFdXZ5%2BNODCaDoZv9O5BrNZ3GBcVwfECLe9KHDafOKVYZqdsTLTjdxKPcaqPqcEARzv7n&X-Amz-Signature=c31955dd9524ade601f2a4a2175c32d5b8a21dd4366526f46a027f7add7707f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=29b68d8fb636738922b679bd76df4034870dff4682537f18bf966f5a22a315b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=5f717443f68bc9f575a77a08cd03719f5f8ce6efb9831fd1a6356194830b4231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=6dbf82ecf4e7a95198c61a433b07136d73aa0d9ba3ab9657e80e8ad03d76689d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=501b18f224ee74c29810eb1b4eb2f3a0dc83529804b9847cc7a1ca5bef6bb8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=efc3a0eaa7e60c9d729c4ee44c1c66c32ab46c71e7930510eb2aff3c1a646e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC5KN75P%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBjIxGkEmWMebXbbP%2F3ZfAJie9%2FH22zG4r6k5q%2BBugLyAiEA%2B1SiXOpj0kjeJgJSm30r2eT4EUqiQpSutbnps0dJrIcqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPH3KLiHgA3cVCqovCrcAz5ecy%2BpJIO92X%2FPDf9IMhIrMg5gkAr7xPmOzOYEpzNO8%2BQdNB5RihgXQcZzoNCbowhK9frPgrMXUOkw%2FRI3mKO363viOCn%2F9DUC2LIKnGHybphSqvFBnENrvewZM2uxsBGDQK09TxHTWc2AKzRUWM%2FKuhrNUJ830hnYvHWU1%2FsIz6N26IyCzQdzywI0gIanR%2FGvcurw0hBKP7F81aPErAb0XIMHSrD508gvq8WnjCvWMco1XPDCaTEU4vVLHlXifse%2BK6uQSAXMaTyNAVTbJtLVvvNRd3WfKnPi%2F2iLR72QpC1PREKFOMaCeDYwAF9wpTou5tfOai0Z56TjkVEIILuTDiZr5m64Lus%2BN%2FrMnpoh3ZyiXlzIqUNo4Ji1vDTL1eFUbECgy9WEY96IGSWmKCYEfgcWEzK1oSIZkSbJdabaa2kXfUy%2Fuq3SDMtPhxF9%2BaNBZ%2BKW3mepaaTJqE09n20Sdre6A2CjEtQXkFlF4Y%2BJfnBJYGvxCYgLDg7HuOpANQQkdmzFpioP8FGSe88FZNegoXlFtBHgMIVsp%2FsMD7ARcUQhuD5RkM2Zv%2BnVrO3LaPMx71BMSQK1P304zwMUxyPD3Sis6Ksq4TYSWcCKDUDcsY3TeWnsl%2B6bbryFMLia18oGOqUB2upQFOvoJGgao4Uk1tpmRAdTscFcbeXdmkehmyt9LFPsEyZilpdH%2FZlTITNbaH4hNkWF2MJhZAsBEt74O8u6khlGfeYaeVQPExfMvoX8otsOchiZ%2BBvg8MpKYdG8BBdwswZMdYR4KXyAOcs9hq3FX08TAtHBZMitm6aIXB24ZgRLy96laMq2SnmSOGxgTRF59BfrKHbNkWkeC462QQove5JuevrM&X-Amz-Signature=b9e25070162fc5db90f41c884a4658f892deefc417bcb4a3779fc2ed8f194a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


