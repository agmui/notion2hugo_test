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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=da19a89e4dec4b07110aece9b6d1882acfd1fc92ba32d8b29eda01fdf6df4fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=446da4f3a1946722f31425db755267477866ca2bfddad214e1e5f4ae6db6ad64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=27372133a2f09193a8a902affc8a54c1582bcab6fa7815a7de0c2b62c4167e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=4ad3fcab0645cfba9e4416e561937f26618d0956a4e053437056b5c302585fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=087995d087b8fcd092ec0841f7b366ebcbd4827b0fb443776909647c4e2d21aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=3b9ac8a17d9fff1009a1b561ac4ac08b8884b23dfb1299a51d1a478e70826df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=a97c193b01efa075a0472e686f10331f991b1cbaf18fbd4399ec8a2ba9f07bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=22c91bb355b2d54284356745abd22b2595436e1e3e94eac05c9f0ea3268d08a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=5726620665c7c5e153f64595232dc696ae5c12e974f502f2a727b52061bd9a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=1def5afc595a7b986c9db26f65f7d6de78d03bc9e8c3512d9746e2d7b3e3cf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCOU5ZR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHX2JFOFmQeafyoKpr4ZQWQiDyjexMIEooSCnKJXl7g0AiEA0TJFjTN5p1JjArhYFzD%2Bjokxp6h9QFwynPbkJ47K5U0q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDC42ocJwOuZxzA2mUyrcAytyc7w466lUOeDMFW0twqrnviNQ4wQyHjYfQaR%2BTlBDMkrRYHvnEtL1wpIedeLIMw746WZJA6xF7gVAXlEQ4%2FkLM1dReqSPBQQOaqem631I18DKZWL9DjNnK5HM1NhEu06q5yIMzmZpxGoc%2FYifVhneSsa0oi46g6jZws3KzT2ruymHv6vUkrDYsgJbzG6OgI9PIfsVyW20EHx3Lvg6KPSZ0wwDKVCtRfkNkS23N%2B3YJxNXgNj7lbfgUYUca0%2BoaoBKQH4cBwh2CtUdAJYoZOZcXdcpFCw2ZpXMagJGBPohwot49cTYMFzopbggJcbWQCaR5GrD3r8VTvN5Ve5F7RqkLJOTXH5024KrSAkxmBagkipMlM5pk%2BDiFTv8eRlxa%2FeazhLIUMCgfE2volj56Oc2xv09%2BgY5EFYo6u4TUNZQAXLJJo4ed4aSVsSxz13F0G5PiTJF54WPRoN4f%2FrihxT2lXxalnshMAtAhLKZcYDjWK9vpf38s9rTtyT%2BFp5M3dehlijmkWuakQHhxfRQ44aZ8jAJup98p%2FajZqcSc63FW3Dl5LkW6ZLI%2BnkpZB20%2BQCX7FVfHzzoJQt7URmA6z6MOAb6Pq6uM%2BiC5cKBT2ziTJJdS0%2FhP6Bqc58CMOmsx8QGOqUBZy2a73%2FR6fzhecG%2FzheuCMBxT1xZJ3iuJmYvB5Gudmh%2BtMbmXgfgBjQxRk2hZQYiRRI%2B5vyRK%2Bb0kpahs5l0f12Fbo1CXMRMfjE2fe%2B2ISan6ccbC8J%2FEynzeM8j1%2B%2FDG6eoXDdPn2MbTt4stS2sQh1AKEwtFLroRIu2%2BXb3FgA30Sf3Y%2FGnhOrx3Grwddbagq%2Fdve8TL33LWvOC1HEayjjzur%2By&X-Amz-Signature=19e15362d5a1b56c76117e76728b31c9fb97946abcf67a1d9a811859ba7685a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGVVK4N%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQD2EkON4P2DJknCFglvHsKZc%2FrD8esZKXGQV2vLvaSsRAIgPEs16lvaPK7COLdrXCM5Gtq2%2Bxpz99dOgtvCZmy%2Bw08q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIoyOk91uoaULGFCYCrcA4UUJPxpJRqBTBGWATy36%2Fd0y4EKYCcadgqyMHZqnhtYp0%2FIgau8bE9wEBadJduuRvlPkr5J8SlrGosiPYTYa%2F6%2BX8K5nb6vo1oJjyHtj%2BRonWsDK7mceTwaZZBE%2B65ZwbVS1OuPETjQQne2WWiJT%2Bcmr9A%2B6cnzLGSCY0Iw%2FH6ySuhNE8kOWGlXpKR%2BvzdAJZOpQkBW10qnAdw551GLZJFDMEQTeKwhvBOystVPB9bRo3JTuzBTx6zwL6C5cy6AZM0%2FhYTmUVIgbqeHMvVOqzJq77aRwrfQ7Sg0g9vWIvfEWJ1wIpI3aHBPhSYgA9bzfC%2FErgDGfaxHGSIaOJliYp1WMzsarFzROXNjlaD2flFMVFdvM3IWYKmXtVzuhWcV3rVg4PyrPH5DGB74BzuQEw9Qs7EqJ9ppRVrraBJpQzdvJF7tUYzUJSSnscSRbhJyPN5w57zNzD9v1qnmd0q45JXl5HlW8c%2FtyzzWgb2KQP531aQLIA4C9OnN1BbFyza4DCvshHjmO%2BIpmB0d2gVFikI4ljQj8BhX%2FXOk3aK3psyNItcyyj6R1D%2F0ut0B3QUf6YGUIgVsjNZKPY2im%2BBKNkUImEYtcxGAUDHWX0DYzP3ZpN0zC2LXkLIVQTbGMIatx8QGOqUBEuvDSKen%2BEktVS8iLZfkpLoax%2FE53vive6UgUj%2BHdFykM%2B%2BqgqMVuxyot%2FaPdsgHg6EA0DGmPrfSaYsjn78oTIoQqwU8hgG4TlgahmxILccuY3McoakS6NnbQDKYV5%2FBZgPm3u6LREk4wNJoyRmcoQwcgVoEbRcgorLNfV1PQBJFlLgO53LNeu%2FQe3Hy%2BJiRXyFZVy9mIS%2BVAlImqDjg9DweaKJz&X-Amz-Signature=fc7354a9c0b3a50f092b975055689d8b5354ca47286251b313a1ed54c403e827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2S4TPD7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDsPi043lGr0%2FLgWmiGtSMjnxTPGWhe6YI0et1xYqDanQIhAJgoKt7S5PuYO2EYiPTDwFRJkWlBui1O%2BxoQIbYPuVE5Kv8DCFsQABoMNjM3NDIzMTgzODA1IgxzqEBkIlBwN7oJoYMq3AM1PB%2BF8Xj%2B5GDBzdrftRnQK9bJ3vPJ05NWrDLcPIUoX9eeYaOwdjHAbd8au3d%2B6Ja6oyw0M7rpPlkyF0yAL%2FL%2BG7UvcV2HWMAZPRc99zhcsTSWL9GVIMsLmBBSBUe7efhpro0wmqVWnF1I4EyB0ep80uWtaCOFVQ%2BhpLzT5twUOMNYoEp1cN5hWuERInxdsvzEWsVS8vM8dHGRNuJV03dExp6PKKAre9x2KDwyfVC15UAuGIjGGYdGecm%2BuHHBxLgZFJ0H7z6fZVS5ihIeCowBCKD5zXujvjSB%2BT90Xu57gw%2FSYckWzLUJtRGcHM9ImyYxRN6Eufj8m7yoj6OdH%2BvFVBa7gKLAPZnL0bItTIphPjHw92krw%2FaiEAMhtyebj4lxHSnO05MsZ5uuIDuSoI%2FaOvBSfOW5Ss%2FKwxHmtuSeaIVrerYVIzNFeX%2BgcEG%2FTaq2TncFcbYVHfyNMjjylQOQjOsx2Lje6jdsD2O9O8UbwaNXYwV3fflkdcI%2FV1nHLssu4e0g4f4%2FwfRE7JJBkP7pYBe6LzgZlzUbgB1okQjJpWrJRZ3w7umIBP%2Bn7qgBcfiXc0YV5KnACAnMB4B28qNi47fNRJ22tvs5K43%2FTUPlvNwYh%2BMGe2TQaHv6cjDwrMfEBjqkAfyfTfzUcl%2FfAQPR7XibMvYRi8ymJZDC685qGkDn6%2BHxtqDGVfoksYLEkVygWoQc%2FuHC5gEWZYzlEE3rjKVWLWZ07niJSet2MqkdSU%2Bp7CNb1pQVfknfEMwcf1VMNvEILHhUPeD%2FYL%2B9znd0pB4XCTZqIjQTciRrn6t5li22%2F9bGuwdyD9zR4rO5MILwLN8m0tS4glZ8dWmN7rpbWw7%2BjIbW0XYl&X-Amz-Signature=f098f4cf94bdd19836156c8891ae99eff7857d8141c291ac810a90e6cca439c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=38ec7ebc85ff97d250cc2dc27e89c463070d5543468c18c9d29d390e03c0d439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=d9d6cbd8762ef121b01d9bce75f8267b0c0de3875bd512a9cffc7c22abedd0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=f38650cdee91133842570408479d24b01e1fb5581aa437296bab35c39c4cb3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVKUX3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDeNHIu73yYzPpWiL9swfzGf1EMdLZBu5HKNdgdOxIl3AIgFJt%2BLqQdmQn1ro%2B%2B11YEFrNTtAxybP9KDAbV300jsUgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDEzUR09Ed%2BLpyhF0TyrcAysq%2BhaaxOQx4yFD%2FKkMCWqfDOpozfXGny8lmstad5mlHpvLqOaxaypFCYhK2IlvYNKSqpjFO8ni9voE%2B22Kuo24g8IoWHFMKuZJupgnaS%2BHwnOHzeP3OBvDxb1ySVFW8bZd4BUou3OWOqo%2FqX0d6CfeTvAizoJray4VydmedYFfOrwqZ1dZLDJFru2R83NF5YBWs2rpRG1fyT%2Fzdq5PQxzBxNnWrUnCesakJVgFtKC05IzHkw7ay%2FMFtnmpqF83bq%2FcxEJZ%2Bx4fJzf37wMf1bGuCDPGdQaRuQWwXfUkae4PipH07R0froh%2BviDNU8nme4qjcLROjbRaod60xRnlG%2BViSk5mNxkpuEs%2FdDdrXU4LVOYkHYaio2HL1mEQzwXsCbqpUSuxclU1vgHIvjJjoQQiZtkt55RIxFpNZg45VuBUstNvfEnRT6z%2BN9HxciKC48TpQeokBGiQACuPGUSnb2MX7KwAYUrFV2e%2B0IEfA%2BT%2BWJ0JA3xssnjTucSRu9H0Fm0Ca4MzgLH2kNKw4p%2FwG3OV7unWLcNAMdXWtOiAz9JpK0Z5rpS02Fj7TL7P%2FvVeRXEBB0RswMPn7HRLU5mtIRpU7CzsBdGQmDtwL%2FEj%2FBfoIoRGgBnB%2Fd%2BmCU78MOitx8QGOqUB3U4IVsVKaWGkUf28wA%2BMFKnZ145JHRfbdvNXT9T2M3lOGrkuDSTy9GoYcYtGMczCCy9Nb4JbRQHeMULDd%2BJsQVPAXOSxw928H9cq89noua2V8JD2AWPmeScu0p6S8zG2Y1cBKYHrgVQeZI4aB3%2B%2F75BM7%2FN4o1qwJIN4tyuXBCTwEs2Cgdzkk8SvrLPWeVz8W8MkIjKLkMMmsGVHvo%2F6e8sJohLU&X-Amz-Signature=54d7959a258216173f893c07c20de0897f2470e1026b64523ab5deece2920ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=8d221d9b938a09270dd7a48cd85d2306d80f8ef51f1aff989d6767efa4647d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MUNTO3T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHtYxvQt9L06Wy0uUFYNOPcl6K2p410ef1PeWK%2BBwuhUAiBfjEBaGy6hTXqtXuDuvXN%2Byra9iVqieC8Uxrf21%2FyDAir%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMPDq4bxN4kWwzegKAKtwD7nDyii%2FbEaJBRHb966tnRCJdhvkRDCBSOX9UbtzvnhellhcShN1%2FxClolAnuBH21MyCBPLrDCh7XZ9mAvXnSYR4ZXV1vywqx6HDFiJ2JNG5%2FgCM7stL%2B%2FeZYKGp4aLqFOzF3sgFolCLDjuyiARE2AQShxPdpITuAbXVoTda7bQA6P5dYu5Zohh%2Firap29eQ2H8R5csd3Fw5L6RImvXK5ks5kxgHU%2Fm8oqgA11m1sagOcHLrTq6W0%2B6XvvyCsVBB%2BNJI18rSMNtjXLjHvrT0ScKmMPMZYyPq%2FDze4oYA1tPJ8S72KFAmM%2F4w%2BDu%2FatOeJ4bIdi8sTN8PxT1Xukn2DtttNDkS4rqSCYHfSgyLi2Vg4%2B2i%2B4mhzei9sJszlDDVSfIYEU1mrDmCJ1RVDMPg%2BqxP0o94vmHo9q8NnGsEWK5GEXhvjq7%2BATHMtPBZJVfSEFoRbrLeodPZl%2BMiK4XbMHnwjdCAAe0s6Ds88WJUw11y54I9%2BzZ3%2BDQDEFu%2BcA2%2F%2B33YzoimSkSSABUwFblY4XBNUysNGt8oQxR3EnadlJD3ZSwPmcdzSheUzfR%2B23Zxn7uN%2Fr1UCmr%2FL6GArL%2B0UPwJlbJhV7p%2FA%2Fvdh%2BE6w6VHwj20HsHBy8L%2Bxi9cw66zHxAY6pgGdR7dZYQknwXybcI27%2Bx1PWepJKizmPy4FW8Zyq95hiX6PJtowZW%2BDPs7eYsJd6bs2y5ybOziGHcTqo4lsJfkGl28F7qdkFXhOzqox46wDjtNbmh1Bj%2FzRy9d%2F688DpFfsNVAN416%2Fs9oDJaG8EiFqvaWEZx7BrCSpct0geqyRCREdhMNos0wEDT0qmGNkEFv0HsWQ5vkCzWA%2BMGABQLMXNFmH15fz&X-Amz-Signature=2aa9ae7ecb71dd614fd93749a397f342323046e312456519130ba41878730fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=b9fc1ca8a32cbc0cafbf49954828d43523f140631d0de9104c058ab2ff2bfea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WIJXECK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHVALaBPO5hPA4TS38ZHSPdU6roG079iFfOq6ZxczrLsAiEA5L6j8hQVl7PiKWaLkshyxcZDeei08uwQ38UMF6Nu4IYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKpKhCqCo51YA5MQwSrcAwoMn2nZNlTNzMOgykusCrOUehPWtLMsJJ3L7oAGv7oYKJBnIxYaKb8MyqRP7H2Y3Lk2WJnVxfrv%2FUp93noKQaLFrHOG9JFB0GpuzH6duHMyGUgxx9%2FALjHVjbjamQ78JfLKJbk%2FRRj7mnbl799XGdfTd%2FSrvAEyBTwDeX1035evtAy4eSUEwBYcz6nLVdvCfMdrTHrNdfh4jXbNeo3duluauX8dVm1u9QklS8gZInSE7I5YuAYnZ1mwcXhmZ19y1OlSEiEefnE27GnvZ56TKTk6tSbQL7GUeaU7znSWw%2B3izE9BtDQik20%2FVe%2BSQdAmZZ0uawFeOyAPTrIKjFD7Tegw45Zn4AERjwr%2F8JKI4nv1i3b0pwILiJIsSvDVTwjqNlDmk5K7YFeBt1TQ9vks8GgTvfqfch0Er5UejO9Qj3PmvP308OZCO3%2FQat0INMYKMVT%2Fu6htZg6YchHtUfA%2BvZBx92NiQcVP257NHSBrTeXrTUUcoeXyQcU6WLyMqf1BUONJzYv6j5PHvIkSqM560X%2FkTZhrA5xxhZXWaNlrhJ%2FK5H7T%2BOb0OTmaj%2BUHjTQ1KTppemKxcl%2F6dMCAYKbDPjUAACabHAPZJS%2F3fLa3fEB0Ja1S2sE0oPX6BZW8MPWsx8QGOqUBkjsPnnmFh%2BdrPGgGt9abtiDAJ5e3duBCc5I4z%2FUr0nnkNX4TwY5E8m9ylWNjXNMV04xILgFmekVF8d5e5gpPhn%2B3FY2x7R8juWiXYNoqbIG1bg%2FQwyjMlbsUH5UM9lzKdffXdbsNuajeR%2FUJa6UtTwRvSMw2A4QwvBZ820ekaZYkxXo6Se9S%2Fvf5AgXZb42lwmgDXYbh0Zt0i7IjH%2FqCPJnDcARK&X-Amz-Signature=b125c9a12c17784704581376643ce0db764b902bc6d9da855aaf43df416e6c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R34OK4RW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIG6NuNquHpIZVVJ45An77blowU1BVMNMsm7FB8Oo8SHxAiEAyBkylC3kvLIO1v%2Bxq8VWeQmEm5HxZziaopfvUvdcwmAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIk1%2By446FXSgd17ESrcA%2FmheK2P123jcqqUPcbJSKs0ssjCCfWbH26Ab7Z%2B0Byd7RTPnG1wA4XRw%2B1clji5uwZYO7NFX8pjjuDeahC3AMJwS10mhD2HgWoAqU3NVbcEGurIYBDSjARkhXgl9uk9%2FB7sY3WOv0OMI2zEHmP5La1MeAIIQhQBtLWFScOmRE0qacxWq2NVHsR5wldYA9Ewp3MlGx62j7%2Fy9rNiXq1DYQA07XhBUaN2NhYSNx9kNjmliR1VQ14ncbM81eAJ6rCV8vSLXktelEz4OAFDgCybghXSMsHaPpPo7DmBqsZLN39nOvJI8bvG4LCQpxEQv%2FbsrHTG2gFBvWaE%2F6NBqya%2B87CuRLSrdw98%2FQCxQ6WxIrmN0LesXNaKe2nJoMjW5IeUvKLn4SGeAsJUWdXH6RFNI6wM6zdkUn3%2BbBJargCf9Ioo%2BxZ7p2ubkv6AxWskFk%2Bo8V%2BFRuXdBhEORxKYK2q63LB8cMJ17OroGQemgFxkFkYOlSsA32cjwDLEwNY1a204DwMWpoH%2FPe8TPT5DGqHgaPMQWDvQmvH8g66UtAjRW9725Lm%2B0RHFbin25K1EZpj4%2FF2Bi5LdcQ9yHe4pOzjuH5wPRDeUUz648Sq2JBDVkkxgYrLjDf3ztdnxIpgQMOitx8QGOqUBpKScp6gNUNiaBOKql62lcQaAwzsrcHSTKJ7Wj8iPhm4wl%2BicJwKXj9walIcY2qFR1wZfzSNdV0sqBCyKudnJ2%2BoonHuYLq3Q59dJYhRTPQ9QPMMg6en9il7a5ZKAYfkhJizyxZmjhMaPKp%2F6ZBbEhCiDFV%2FJVpEkSxRJshJHrcT1HFfN%2BnfJHaHvizsgXhQlq56CuJtpD%2FmVdwdYdxH5qwK35%2BEy&X-Amz-Signature=e3773ed494831266ea3c87f4a0be7f3d39d076deaf63546316ed231d2c33f1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UAJF6YO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIBm6mnvBTu51DE0wrAqk%2FoGno29N7m2%2BG4E3r9TNlD4pAiAdXfWICNnjTcn4eBI1ePxEQ0eJcrNBbzZxfPvBOpr7%2BCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMjNOuZ0redCh8xWGFKtwDTi1JtHXYhA2Aomy7LHFbtQ45z0tbF1SvLnxJe9vousfl7xW%2BGACSmeAqWzGiI%2Fm9%2B99LG%2FuZrg%2FBxhV73juA5VPHbdepEEKM2H8dw9qGkrZI%2BMFueBkNtYmjFVjkjPsTS4iNFzIxpsXyomtEj20edRqzAyYrTX6BbW%2F2BsvHIlkxJypgUlO34lsfKAiWjDLkSNaV1JrP%2B7DxV4S%2BLAm5Z50ZaOaBQ%2F373ZyJO6540f49GEFN7xOP950J88vmG%2BBNeCzkb%2FCZEROqXFWLNtlHTZPdtgtzgsI1Y8RLgdApKTqgNBnNqIEMWoxOLDhKyeh1U12sFnS5mVAJ385y8tq%2Ft044tKlqz7mbnKvKpLFKgKE%2BzjbWY9JsPVtGkzxSHSUmnzTczIxWeI06b7K57IFMrOd%2FExBLd%2FnYCuErRh9QnUo4vkoDSoFsyUyXvwk7QD442KcaW6%2B7yHLpj8Ig6YGYeDOTdQGePBUp3yMk7Quc8f4yFKtXtlaZVTJh7M0dMjRibEAXwa7m17tej1n%2BnGysgky%2BxRzLVq7P9rIzpG121BC4vbiqMwsj%2F5noTCgKr4DLkANNxt3LdnPP4yubG%2Fib3s2mIicP2DwHCnauR51H7OF%2BNlsCjELVT7yxKgEwx63HxAY6pgGJHlkVKZBRwnecrXAZXS1Q2ejFdBRaEQblgEralnmyxF7hrZEQl%2BFtncnJ5OgOfbvLu3nMZUXKs9yffIQ37PoaUCsGvANIzi6vvKJ13Vp4qua0Y5ltp9icq74BM59MrEDeKSCuQV1VMEpVSk54NmO6%2FiQ7vcZvLy4FvvC7zSVa3vKUjmLrqEEsbrVBJQtmP3jNsv96Wv7AiQNvfC99gYp2ix1Yoqsl&X-Amz-Signature=8864798ea8dccd9d47e711f2728ea59f151bff6b48f944a7fab481a2efeb6563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7V44VI%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIBBWZBooUqPrGxqya%2FTMc%2FKiwvNEpBxExsV6xJf2WuC2AiEAxXhhcOASX604MxOI1p%2FIfj6UtFYCwuZ6s1QS8TBU3%2Bwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLLD2TRY0M%2B7TvdIxSrcA7fJkaqZgnlnqzdK2pfR02uhR11jsbnaxUe6etvpX5V7Hl5bPIghELcDpU%2FSqkFcr0ELDi4w5B8m7sRxgFFBGA%2B7ESCrFkern%2FUcfmPnDFnVutXLJ%2FOhiIdNnUja%2FUcnoMekTmnkNUpVI8zlsQzTzuRdhX9UhlqA9OIsHUkAX9JxZgv1a3BqUmxtdz1cDqsU%2B6Cz4%2FZ7PlJT40fMoZ8uc2BCMBWrLRf18N7TWvgi0GmfGBl4Ctvy6e8MqVNav02DuwdTihY2R5d3HNqcB70E44M4mmq6Csb6nYiO7mdpPBl7cSMtuCmeWHvewNb33%2Bj6sc%2BUmCX1mBu%2BlL%2FyWNaJq%2BOghmnBrKPmZr8PnOhhLYm2EqDfx1MAUhua1o2BFNMiwnGXyVz6I6fx%2BNAfB3hG9uuT9kfRKcXwMf4xiLbRl5qEoHOkhMPOXuNcFFay6FS9IA6QvfbGfYzJou0gZFuiyryPBDtgW24ZIDGGTxPoX0clsReMYlPy%2FFoObAjLjRKF5RwDEl%2FBPWZfmlnQztizLvBTB%2BXlkJHV3qzR7nxOeYCEvlX6ska5R%2BQwzsHbParvqhBn3Gzgz8xMDZfAIJY9BJh7nT6V%2FdUVDB19KngiKlnY1ICcCJvZ%2FMnHV6zJMLisx8QGOqUBLegMtnQW45A5P%2FZw%2FIlmb9OXvOBNoM5DudSM2kkRTw5Rp8CbnwiLp3QO30OOqbMZHANIFM6pwHeLfiZ67EI4R2HwypY7oeEItB76FVtn4NvekBbjFOZTPjThh4AsoR3dd5E0W2hCJpVQurD45kVZTr2dBvqYIhUBnBY6z2u2JiaD4rkQAg0JZEBnRZEVShJ3hti3ywf07%2BDEseL66HDVNR6dGGds&X-Amz-Signature=61676e9ebf5f6914b7c07dda61d0caf4cb5780a41cc4be4def2cc4d7dcab3bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO7GZ4U%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDi827DNChzvW48vzM6kI3zjtSxLVuCCfY1%2Fu%2Bb4MWv5gIhAIzaaAgQfYWgnyPexj9blyKx11Va6Z%2Fw75KIBpkC1qIFKv8DCFsQABoMNjM3NDIzMTgzODA1Igxaht3kG9Qwb3SKzcEq3APfHDnWP3qS5isqHyUC8X8kKl%2BWgteBeIQuhqtrp3ITxKJ4aiXjfvwDU0GFL8bMv%2BcYDxI96uT0e%2B9nLGY3Z98GbFWETw%2BHqN3hrP3DFC4otTZQ6GGE47MX%2BlewJ1pRHfbkB6u0Ybrx2qSwJkIwnAWfXvOYtyvcx6UpqiaVqUHg%2BOfMQTbwbJUVrxdNilZfs973IFqnsOKJa2UvqizumwgHdwPAjLa0mTXf0dMlspJgpvyntf6fcDDbslQH51coFuQJQpaHf4SPb81rlwSpD1%2F0Rlkm%2FgkxAs%2FyGm1atH61JBxyqRU71ZTkBRxxPiNos20DrTZzDfL3dgITNRSHwiV74ZkcDOHdvEWRNsZOpznHztyXjTiYEDlUym56fftMPBTFfw%2FU7ouuMtA%2FQNN%2BvzcgtYx5KsgopQ9sSpQPQcx4zyWX4XDVb7jvs13Bp1omQb%2BwNXA0aNeMZdNXFl5nyzI6ghLHJB7zJ1aDtk01ZajCRUenGk%2Bp1vLo2J2qXJ0ICWMUNnhSyd%2BbF31F5OGbi0OB2LrJxF6XWS%2B4I30guWDWD8i0s0RfQ0Ox4Swj%2BYmR6%2Fwc%2FgXh%2BhLFzpKnikYh03wM1U0%2B%2FQlC6j7kEWg86EDwnyNQDYNtqhUbFRJfKDC5rMfEBjqkAS7hsOKl0b40cCxp%2FIt5KvsbhIE2GRRBpUV8S40MbBgVAbh%2Blr3%2BW3FHxPz2h1Xv%2B%2BkoxVLv4R6TkLy10WW65bXK7lB2z2yZZHxV2Mtdw19K4XKiTAwFOZkHaJKokGceW00jEEa7tmAPBkJhUa8bFHtomQwt%2FGL6aR9coqhL2qYoEn0HfNVj1TdrHAMkHgjouydDHnXXWSWNPaR%2B0B0vVsZW4Ws%2F&X-Amz-Signature=8ce5e5971f752bf23f3367a40aa18aa6adc4d47031d315c3331c78257eb0718b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=2ab7d465fcf70d0826aab8b307571cdf029b347c5ac7100b0406bd42cc28c7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHQ43BTK%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQC19Yg20GGQ0GCGnb%2BOYDPge6hwK%2F1R6cbF9G4RvMKTUgIge04OoiZ0XGlXz3M2R%2Bpmkqs5YyWV2wJQyJZkPxV0mGYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOoOctESpSCIEq1gLircA%2FcGGNbbZVy1ElPypoBI5tWOz6qm093JbW2E8mrYOqK5STsXvkXwzaQQaiL9mgEaUXj8TfUDizB7TNKALbveQD3C%2BqMB7zJ%2FStk4yfmnidS4JMmki7h5aDAXsgMQpa7rcPDiMysh0hoKvR1rN%2FSoyRzyjWdxpVcV2NEnbcfZ7jSbqQjPWrzyr2%2BFQ9FtrTMFguhP6iq4Ge%2B1cXYjw2YNaG92%2FyrLAZA7ZltnM4wIkFNYKVII1hjdbr0iHiMetwWN8BH4jIyebS5YBJVP59AelJi7AW9vbVARoGUVrgBCYza97HTJKGQrtXlviZPqpnftAhxf2cQ%2FWVRefuVGNpZKzInDq2HfD5AmSWikeZ2O%2FFE1UcgWpqUnUtO7YE%2BvQAkXIl1XwPMSVtpZ80PRba%2BwIIOXFkmesnni9NTUHQ7I8tHwZSL8joXsfpTZAd44KFG%2FLYn%2BkVnVr2S2Px2Uq5hrr5OeBltHMj5KT5FBYr2puShFoHrap%2B7TA8jPHRGmhQRTvjicfDxQV71LzWl5zvphgPYVsqb%2FEK7Fn7WtKP9%2B5dD0%2B0RAWVL%2B1SlLRhnhRUKuuoSwofpV0FxdXZ6Vm9AXkb%2FZv%2FiXX4%2B2vn62LpSIdeXmWO9PzgnTR6SVom62MLOsx8QGOqUB%2FfAvdU48HPSmsXb0BpFZrdVWvW1CvwG7125PkP0BCM8iTxTWlrGPn6yG2vZABiv8pMA63eX7CKSZYVpJ8VaZlBlc0XAuzUPCV9nYnn3LZMKJkBEclZ3mkaff%2B7Px6e2Gpu%2BbG15VTeVnw4MVF6VW%2BmLFk3NsUGAGMHXBgsQ4dQxjjww3UhGJk%2F6daKmHfEtZTAeER6ZIZB5rvnrYrW2p0jVfQH4A&X-Amz-Signature=21986dfda8d26860afe4584d1439cc51425615ade824864d83c7a8c95791f5b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=24cf4302e38073828570da6c50c0c980e2b90ab341577ce4922c1cff1d857615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=4d6c5ff4920ca7339a3e8fb86f0bedc3efb2e9f6fe1c060b41a7b7a727043e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=13b8e22f6ad8d764bf9cc70305ee56503d80d38b56261280ad05171d13ee3db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=9f8c4beb916500c0407b887c449b0bf57fe122d016f40c5b4ae63c21607e6157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=3400d21d76f2c258b1431de3b8d6a936028aceedd51822ce21e8e07e6fd7ae98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=207291789470c2420856743b45a98b734a08591f36fae6d7ad8d1072c72af02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=13b8e22f6ad8d764bf9cc70305ee56503d80d38b56261280ad05171d13ee3db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=295a2423e3611feb1b78e5dfedae28dcd4767c5fab976dae5a0bb049b47c766e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=38e27b0d7cb44c3a1cb62fd2d43c90afa8b54a79098623b74b0d4b5d97f9c4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKDXOR7H%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIF5BnrJnYmjYchQb8fpPmpG9fyRAo2YGxOVTqSmdL7puAiEAm9jueW53rKkHJDIuQFvT7KxiH%2BJ1YKENeq9GZNpdUoQq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDNEkpZdRX88HiXbYgircA4%2ByCPNXHUZqVVwEfciPCAU85ATw%2Br%2FJq5ec%2Fq2QB7D13j%2BmdUJiMna0SReTOXDxfCYLP3PHd0QnOaoZMSbAjIi8raIzltQVAO25pQ%2BKzPxnv25JZHeL5xMFp1H6yA6UIEqrvPYm9c8nH9wXiOr%2BWyJteSAWGw%2B53AYDR39IeMTpVpfdUGXnyieotDDjNNsAWbgl4Jf5OVg69BSgiLcFdIY7zDYC5%2FhLBMCP7RUxWcxs2aErIg72Y7ccYlRw4p7VNMay%2BSDpL8zNgYpw31ucTjtD8%2FzUnncB5w%2FisSe2ZoTLVvv4QDda10qJe65Zsjlnv5dBpAi2C0iE7xJ48ivaKflfbAnZds2lemfKXcA3AAOY56lx3Kyk3S5%2B9OQ5vxUc094PzLmQy30pl0%2Fk26TQ8j4v6bLXNGdoiyfZvuY9Cj4k1FYzdCL61br7yPzs1oTp09iWyzjnDQelP39dGNCbQf3R49L8wal2lwM%2BxbmE56SZd1z9tNt2MK%2FhhdjjPZKjT%2FUZKQGZ04MaqWwR0E3mSI%2BXRMOT%2FZa4LXGetJS50VKgnX8LSOcBZnryJXS5M50w7en3rDP0bIR4sz1wx0ScyhmI8wVSAXQVjZbYtXHPvYnsUHfXTSkofEsZ5tMAMN2sx8QGOqUB5f7mJl%2B4pvNYSA8uxP9HQEs3P58AB6LEsi2tEvVbhGVg90oqXEHLx3%2BquBWnWixE%2Bmv5xWM6n0YzVD4LTH8paT5XN6K7e8iHLa1rlyEs9l0Xr3xW3EejRtXfZ%2BkzEgNS07nRh0YlKkLUM1E9lONcJdGtDxQJ33pCf71JlaP1%2BB2QIKVZObQ2IHn9c3Q99vU0fa8By7DBgy9FB2H6J2jOtbv5PQiE&X-Amz-Signature=8086de8039b99d00e65949ea30caa582032234dacce8110f424b69a70aef22c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
