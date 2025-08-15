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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=4c1eb81f842cef04f93ff50efe7b1081f0a683f628266ee63d2524a1c1d0d636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=9085682607baaf7f3e5b59163bc61a910841dfbe9f33d55d45f27752c2876e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=578dbbb4708b751b4fb220eb7ebd5f76c002e596792b5122290ba1cef496bcc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=017a09304eb5eefdecf5fd4afcb1b7c85a42345d1c5e64a3deaf3376b2ca9697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=02af828aa45caffda444651b714d92e69148961cf794256cfa0f556ea6a8de5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=626b1b415d8478f45eb70f483911319689c4037f72dab474b6840206538edaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=91122bf1b91440dfd9701573a676c865b03b2fd378af06a26e5089a7a537e553&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=9f799f32ad88236062e840636ece696e59e36d900272e1aa06ebe7e34bc02a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=a4deff39ede47b1f4d7e85384c4fb384c366cdafb5760064bd9ae4bc5d5f9367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=1d0df8f865728ca208f2af5babf6c5290d6804a83cd34cd8472168a50c2812bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJUDGEN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAU2D4W5gYp3yUwWwbCGMEPqaQkh8AXc4uYUkiLyrSFvAiBkeKfVqmAJpy7NLzD40agRIb8ggdcNNfk20Ls90XJ5cSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMoI%2F27NfeyIvxVuaVKtwDToVbcLggdUVUcJf5ExIX7AqW7ldvX1%2FW0abVrkWtCuZ9vDK0Eg6O6t6OQ26A0T3NlNITjz55JzldbEcyJYXnKyWPbOVNsDCl9qYU5azGPxkfpEIvqrqtPP7WC0Qd3uy42Y%2Fi1lOSBG0iBpeERhQXTibKM4Zb8Xko%2BEgIJBnOS3XfTl%2FwPU6l5hBp7M0JiV2zwQ8TJyaM0W3ogjUju1%2FG%2BIv9vc5%2Bv7o3dihpz4ADIofVE4Ik%2F%2FnGh24JlQQnWd5bMdpD972tjfGKXCY3ojALRr7v61rKsmMu8nCH%2FIbzfwdN0enNZXAy7s2TZkfMRjlQ1sJFmuERa4frimsSK21shpDS6obYB94HI8FdmiKehRAaIYxPYQRDiTAaZ5cqNWuFMXEgyJtSlRz%2F3%2BCtY89rSfJ9hyFxDzjNHq8WeMVmJyUe6eirxd42v5hpyB%2BNnbA4dXUZG8BM48dowsG4UKx5JZ03TLCWQ2y1fAUG522H9g4tqka0XmPCAOAT7b0xjB0yY2HM2ODVS30TcE%2Fiv2iRvPHWV3fw1E9UwihdMGqckye%2B67Z9zq3iuK42xoUeVTqN2AeDQuJF%2FRRLiPTLc09BFXJtAiuXOGoSF69tBN6DQJrEW1b%2B9p47k7NLJoUw2qL6xAY6pgFmzYtt%2Batgeen7P9vfVyHAPNWJ8umpcG9HXlPAPC8xX%2BcAFmutfyfrIiwrTqmkHvHAuUv0bjON43YNzMG%2BNLE27B7Xoh%2FatbI4udOpiQghiiQO%2ByxdWRLvvliSn1rxvEUx1kakQAFDzNKUYvATnIckocs99JFYsLrutR11IP6n25ZmaSeQjrnZei4lPswgs3aK8dgGHNa7w0OgBikn3HXYc0ie9brT&X-Amz-Signature=59d21d2117349d7e5eb47919ce072279cfae36a6466440439db82f02cfc19cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBYKMYG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCmUbnO0xVH9FbVRqP3b4ruiqhwsKXqQQXSuJZTFTltcAIgYOlZCIbfL02vivyzwRL948td9VCPP4fbcwiQjGx%2FMxwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKcjRj8S9vWgez5TiSrcAzEad0nINc%2BdOLMTWoqYfYSfY4eiekyNgIcI5MG1J0F9r9eOvMrcKDjAxS6nk1evhEa33qf4m9%2FQoX9sEmtSPSK3uV3bftgQ5zbV2Gm0W8ZaohZsBinYzzT0w1W%2Bjh9DwBQ3wpJiv2m3Ov8wHYDWDh9Yp8wZabpFAULO73uMQWVEYQV%2BMWu%2FHbCEDVtwL0NOnyqo1Gz5qVwMAPrt6NpTzo1rHCn6ynEq3Gh0hAwPzLL9CBEa0JUj9SOyy5XEqVf0gU4RF4r2Ih0JX5lVPNBKL2QANM1RROPWehn42e7Qroj8wcewbWgRKW5BNx5V9dZwtkKH167VpDpJsAqa3coorJopqE7W5rupHTZrJnyNrucwEttmXMlgJe7BSE55G2Q308qGEn7rfgcOEqmkAG%2FLrp47gJLun7yPgN%2FNSY4zrp0tuzUZBfixH4VodQKJw2QvhIsi4LYb%2Bb6quFOguYiZhR%2BtrJHgbk%2FmCvbZi%2BSelGxRiXKx%2Bt5gYdGy5bUIfC9LlXP9RvHwxOuHHhkAeB9aeavr03qsxZU3m0dxR4PHjeoP8oKlvoFoq915nw9vQfool%2BxJHqaIeDrod8q3yg75pRk9tPk7vOb%2FLwyYtRThSOMOktK4CkjHSb3wPifAMPGj%2BsQGOqUB2yoAV9KvUzBqQXbb4jtk394%2FMP0Gn4TVDVq6N%2Fu2VqRAmEQI9DQXt9WMYQGZQdjBMBF%2FIRLdA356hxb6WNEx1LZG%2B1rfP2fi2UFfeI%2BrZKTD0Xz1AtOm9irohB6L1oQdMqgmfhgpcTggUtz1qYp1lgIrSEOayvTCJIkueyG5loZ3hpd7%2FjZ9cF44ti6p6A73mPBXYAYv7HNzUS%2BfEz43SY4Tlwb%2B&X-Amz-Signature=95c5a410957d94f3f95f3e026044e2eb24371c5ccd88f078612b717939340944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3Z5WOBK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDbLfwfWEAcMJxpw%2Fnyu%2FvfDRnjUwhSAUy2%2FKoCGjDx%2FgIhALyE%2FWvApXrCezBAYMq5rkkX7fUkpMsG0ZnDMeGq%2BWKPKv8DCFMQABoMNjM3NDIzMTgzODA1Igz62Q%2FNraFgTlJR7EIq3ANtQmBtaO7lANzScrHmmmPRuHrcsroCl%2BwETWFzYbH68rZChXiNOad1Su4AwrwnWjcvh13GsKXzSlrUD2B4viUACw%2FcHeQTabcA12%2FhqahcYB6HJx%2FmpeX3a9i0PFPvN1IqOqvL7shxFZC1odjsky%2FLl5IIb5zjOff2zLM1s0hBTTDDfl5mi%2F3uVXH1UwyGHuk5EMRQiDzVXnGtdCBukAWJcgbMvHgyIupbtXp3U%2F9luIcM%2BLD5RdLWAjE9Wd8%2BVK9QjECcwpR%2FqTP7CLo9tmSluwQdrkXaRt%2F23aR9JH7XOK7YXu21UbSrCYzLl9hORpzq%2B2J3XsVTOZKwfD0DTk%2BGZU%2BZWlwgJii05xwx%2F81ocvMULOZB4DzUsQq7cb4n%2F1ZuaXxMPkeBhV5TfJ1EYIlsHQzIVN4HVJRaatRjTgOMfKSMNvU7gmh%2FJ2gVUE8R1J5phephX7IL6otfsNtkfzrosSPGKT3%2Bf7fAB7D%2FafmMAZXDaZtpW3PBGW82ZarPmJgmYpHRAucqwM5XYsFATvR8i7JSo95ts5uJpCZt6hLIt5l5dmiNSIdFyPj%2FAieamOaA11p%2FBatrt%2Bvip7ONdZx51l%2FHmmn8GxvQvdYv3BoHflpM1lKznn82Einw1jCgo%2FrEBjqkAekROmAiyfIPZBqQR4O7i%2F1nylHfvWOd2DT%2BDeN4m095bIp11rDeEizCExDDmT%2FLl4Ly4rCPQSg3soCv2jWmpcpgAIEdmAOqOAvEXoR3IG0uUZCdRM%2BEF7hHegsYQngvQ9rjSaBuM%2FD093KjFJ1TKpgdUC%2Fy7pQvSGI2h%2BH0XUnYsbIcgyG1tq7RJYHzDCJV2SJHJpizAJN%2FGYcqfheBFOKFTlYX&X-Amz-Signature=470acb90054bb987ecb4b652364dad8f6c315dcd2cb9fae41bc8a96d34aeb487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=ef1b2249096a27e36302b10b0473f131e250f58a796b38e57251233a3cbf962e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4JUOI7L%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8sD7%2FZH6V2zwNw3kQ5F8LacWQfSX8jiylks2TPGayQgIhAJT7%2BeR5ScZuPL3d90S8ta7WnuXYpmYoFGjeNXAVP%2FwKKv8DCFMQABoMNjM3NDIzMTgzODA1IgxmkfOIW1JJ8c5KD9Uq3AMlRJ%2B4h7kN6hPox3wDrUgOhXlADde5ZkOrYP%2BEgDTO6h7BYQoAFLrvd2s9Hu9Di9XZsCtf4Aefmpqm4wXGl4m9e2R0V0V3IgxbeKhyYsW1i24B8jR9r%2B1Hg%2B45qlAFoPnqY%2Fq2sfamqkF%2B8DAM5jEfPWKbOUynK3ET9vAvYmwjtQ4KsRY%2Bc6xyzpTk2jodZ2BxLWXBuJercapgtO7PJsjUwPGUWcTeWbHAl4vVN0AtEHuPw1yiURi70REVPgJJiF20tpGchC0X3sdihIhaQJA5xgWt5DOwhN%2B7AQ7o7qVfq384WQEYggmnDvH5H9TJ463fP9l36DYgaB%2Flamfrvomp56RkMCnGlpZcNoKt%2FiOfrBEgNFySFBJrJUafY1oRC4uI%2FcUEBINKhh5Sv1oLlsJLvmo6F6QB80jCjwFeDGuioOfnS8KBNDAf8pABynY8akVysjR8xYRIe%2B6Zt%2BxEjQqas66GhjD0P8mCzC2e4Wa5UdC%2ByLb0cKArIrlhyFImTkDv4ue5bn1sDM%2BHehtRU1gm5rEwf%2B4PTlRRAcrK5YwxNHt8%2Bjk1ZJ%2BkhydKwHrumdVLGxnyz6oUd38SsDvfjxZT9DdmyUN3oXaFlul6bV7Asz80uQ%2FvXOUzAzAC%2FDCAo%2FrEBjqkAQTFLGjTtVaEz7o67UjychySZxhjw0vPOv5Vi2jIMI1CeyK4e05oLqf5YRasPX4I88hUG5UItLDfxnfudDEYrNDaoGCaguhXdHp%2B5ytmvkOUTJffhx5ryvltPquF%2FPmQI9auBgv8uSQHz2YvrqcFuIqyprYo2hO8D6R394pkMDDsGyFrM0BgamgLo%2BWR%2FO0rHBi%2BQVC4axm%2Fdr8czvGGBh2%2FEURp&X-Amz-Signature=5703be3281e65f6c68b6ca41c025513463e173d9b79b503b93fc5150b84a2abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=114a189380fece933a35ef5630746df3de9e3af23dba6f6bc2072125fe0fe326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEHQ2L2O%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDxwJGeQ5LeqVYfGKDCuoacWRdccM1PTwdrZfTaasKwuQIhAKQ95p0QDGb2MKB7a3OxrJGn5%2BdloiSkqL2YmP8gdJGmKv8DCFMQABoMNjM3NDIzMTgzODA1Igy8S4ryP5ac2qxIJH0q3AO3ccPFtX03TJJmVgWvq3Ooh3pVMt1Y%2Bbg42L5N4Y6F8H9C2Ydau1tzTMziucyA8GjLygUwG4dz%2BEt4rDDZm65rKD8%2BQCCpyaJmQDcziQsgSXln45RXT6xKYfn7b1KTfcScfh49ufvN5PTECe8Fj4EopC1pbOTCtZ0Ehbxg%2BWC2OKFxNCe7VYCs5J4%2FnVucY0DRH8QjyqEQ3OUUDFixnfWX%2FIk6cDMwSgkLnQAd35U6njfk71CEOW8%2BMbEIZZ97MiJpJZU4VeZtbx9irYvMot9QWJh%2B%2FDe8%2BuZseiCQ6ahpl81ww3QgKMdhmosJsPlmMgB6fZc256aH5x5UMynvjuWWIEAab4PvQVLH%2BsJ8XNGRgJqP8Rzmtd3BpHLnsJnOmtWwfSCm7Nhk%2BBY%2FAqHwfZNx%2B%2BDlxCuqLIytxbHUYwgyGzIwMiI96xV5p3xbWpwnw7ZUKrjlkwqxnFrSA1kF0fu3rwa7wIzfHEvbD%2F%2Fg%2BgvTuH7tBlyNguFmuQj41%2Flk%2F7Tm6V%2BSXmVWoN1iZe92nOnttbTD9J%2Fhn1HqsR%2B8wDKfDAcNjabF4K%2ForAuyCF8Hip%2BZQpVOoioYuxX9AtcR12sAUc0E67rBUscYtxs09xlmSAwzWRIGrVfGUzCJ5zDao%2FrEBjqkARw293eNX6q%2BGHXnLjrcA1YAjgg%2BcHb6B%2B2XSJ2%2BpHtNINfB6M6R%2BshgWdGCl%2BPqcbUqCZeGlMcd8yCBgx6VgYqlqNOxJtnHv8xqvyhZ3V%2BhJwPnwP7%2B%2BWUVEytFzkFP80FHeVk7SuNjkknuOlFdjwgRbtigpPtS1ImFGZSQrYmiyCS%2BO1%2BBMHUo2eQKXAExZZ%2FYzxXA2l2VebJxVixg9b%2BHpqHY&X-Amz-Signature=2a9dee0de59413e39f1238476547ebf7dc376731d2320c5dbd86dcafd6283d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=703a9f53c2dda49df50b77e61c7f18a48a9cf5b946eb1c050a9e02df7dc47487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MYBINM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCCGff9Tk0TqU4m5pvOUcMN2dAyk8Q27ylrQ7KtltnYzgIhALDBrQ5MXj9nA%2BT%2BrHXiSP5AefPt3sczD6959LcU17SNKv8DCFMQABoMNjM3NDIzMTgzODA1IgwXORJcTb6w857o6qwq3ANmZ%2FfhFH0nfGOIdeEWQCp15RDgdCmU4z4eWA8LGgms8WlYqBw7nSy4t9TO7SA4xdlSHJ34iZwxyijhNrMikPFyOO%2FOuPohceIswJ7D2kLNbiW6HJ8K16HGJvBYOSqqwr8hiutG64LiCCrTAZvE1Jcg%2FxAdvBqj9vhuhzwqvgHmeBGm4ZbJCSVjsYBdj9IDzzYGX35pAahX85CDvyEGIOhm%2F0NJ55c7r1nbYAl7Kb0yq1ni%2F2TV0D4Kp4fmfc1QHDzN%2Fn6zbMiitCcFkrke0vHY4WwIN%2FNrIChFGcJ%2BLEnhwqFapnlaMHTp7IwUAKy5KxaBPg7L9YfgdIeDVK6wK%2FeDjQ%2BRD375VO9iNUt3Ju%2BqKbnrumjxZ6S6we8qHCkiqdkrtGhAeeVREkWcUoGhJY5MWTU6n7EvehcSDGpXUwh%2Fj%2Bvc6AuiGy0EhKiTf%2FSBIGyAcJBwyTcb1a9xIv1FXhFZC7tBJkcuh5lRhfhnVXDsDUVn%2BUMdTj40eh%2FZLkqShuU3P6sNeqM10BibS37ZSy6VDs6GN3ELhEZRz5m8mHS97AMVg%2FJf5ydZwfRkdHyBQEysq7roTBgwmeV2%2FXX3b9fBmgp2iS1FWmDaUlqW56DIsmJ0mt2999w%2FXc4OczCfo%2FrEBjqkATzcLbRUGfnTJqF%2FfmwOiD4dJWrsw%2BvDHkkQTk2FexPTOrYzdwzkFeAajQw3gG7fhlddeBTyGaEOWoBf7OROLSsGx%2BnJYQSy%2B0NFciKnG4COnznXvgBikXvduTkBHJ2L6FAL7755WoOucwqvMpmaGfLTFpkx0FnxJAP5QiCfFOYi7cd5AJ4ZuICW0S2pscE5LozrardO9o9%2BcDdObl3FGVKfrfS0&X-Amz-Signature=5d67e8861d3f88b92e569dd53ece38109680977b14d5d7c390be94410c3a54b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=eea4b7837ad5fdf36d9ebe3b78e068079b99cf5e1331fd3942779e6555f0b526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQUBMZE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCTnnpqQPCnprizYejJgS9DWjDu8z5VP8vAxLaGF60%2BBQIgV98VGkIuuLL6Nu%2FyaSXkGIxL4OtSEFU%2FcGMPxp7pThUq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPMaKt70wjiOLYqRAircA5tpTMWO1xB7NqxsyvT0VU0JEKKDR5WazoEj7pfp7V0RnYkwrm4qu8pZfsY8UiBOt7htMk23x2%2BQtUZMO2xlhXEx33HSfQ9a8flemniBdmhjlKQBae%2F5lGXMSL6krt5bwfZa%2BMADyWDMk7qFV4R9eN6O6HAMs0xedv5YFCrK9LiCBH%2BCAC4WvJT%2BSBt1%2FtgMT%2Bbaf2kc1d5hALaRhyL%2B9NopcmjFU6yKm70iImqNtAexPuqo%2FfGqZ2GgDrG6GshirCS1D4kAut8dGozpNxGvxRPzkruE%2Frnitz5aqIi3ZcByiaqpPthTDgLKsWp18cgNsZ04OTX4gZsp351zCBeWsBi%2F%2B05NmzHQg5lhIWdW1vsJPrGkgfKBCuYEQ19qwiox3%2BA2vIOgAliQewIKPfV4N62OKcILjnrZF2B56yUZ2pWRTGoF81Z48IUUHf9h%2FjOFdQ2twJkL1IUz1IPK7H%2ByrKH1OBITQ4DMLEGhrI60ozcFpZ52va2Ra19QuQ%2BMD7XeTD6ghQ1tUQtvwV7CN%2FuNx0f6te%2Fw61Z0IdlcmPFgRK%2FnmhAmQ3nJtT%2FB7Y3Af%2FUFvNPM1A3C5S0Iw%2F0DCjoepA%2BqqDVide0pMy32NFG2OmYe6gwWitAgAlwbkl%2FfMO2i%2BsQGOqUB%2FrxMHh7qRVJf3pG6H9YGNm7RCOj1GsCNaOI09RhfW8%2FpZLo6UupB285Y%2BNZwzTIIZyT1TxIeTl05wvu%2BenvkEK9nZPds86VsTWGIAEtmCnndZOtj%2B1KbY%2BUxHf69qAmdhS%2FHcLh9bSakTxu3dzFHq5WGBbc768iYjFF6XKpSNYKMhCmwL1KnjJpHCyRHx3gnMgGj6wWWnPI1%2BEpEih%2Bhn1C%2BMxgU&X-Amz-Signature=b72a33ed278727f979f6fe8f622424240b156ca76457ec1d70c549cec54ffe4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXBM6JW%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIA2RtXgyrQ%2BAUGaGGgnz65nOjRYBy8rI0k4%2FzlhpJNBGAiEAyaMyy%2BCWAaKFIHfq5Ro9BvbEvDRVVV7o8q5aXngcVfQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMcslkEpjriZ31hnXSrcAy1HFKa3kK9Jm6HFJVymQtZ2VMGMo%2BVgFqODYf0uS%2BfpjP2Z%2FllTM%2BdGPcxMLPl85cGrhYTSlJSVgRtdt1wiPRB2Ah%2Bun7%2BHW2AIxWiuKJD%2FroYmEbj5p%2BHcx%2BV2C8noUpNZeT2ZgYFO02ktoQ3c29CbaTk3zTxKNjfrfSLKoxXjp57PkU6YBttXmE5Ll43Nz%2FwDOzS0oKjmBkBnAWl4gYcEf1dNpSCDcucYBKtOwRvKdrXCrn%2Fo8shEKCtYpvyRwrnVEiA14%2FtRj4HJLZTVBlF8uMGRklJhcPm3u%2BPPfwMOCYGRjnSlSlc3%2FWx2DzhbPEvEt7hBLCAA70xoTYGo5IIpkhNvaGAnNAiokHaWjjkJLamtwsLEorgGpAtYDbrvis3lyhyUYnZDXA2XlMxoLbKfxF82Fms6c95eGfLWRhWwWX7NvtivU9jbzbTQZMcL5PsGl7870%2B%2BSlhw9u%2BGUxn2jUlFRxPSMt9A7eUSMkuENrM0dm8prnWk7D%2FCwlOJf0XoaZ%2BihLrFNk8Kb5IHH7ks32puR08pBfRByzD%2FMcfOAqL1o4sAsm7F5Z9tvcj29Mb1Fs5dzUinlGqmK23cDhP9uFiRN6F3Vjymq%2FWvh7y0EQqdO0G7cGtdyAhgtMPaj%2BsQGOqUBwAeu6tatjrlbl9oQU0cKu73Jpy7AN%2FruPsoEAN%2FLbgPQujm5r449cCluUUxdQcwGx8UUxu1jGRxWDHh%2F%2BuQKlp9Dd7G0w5tp8TZ5tjAzZIOAeAeuI9WtZh2U08vyqkhnIEVUNR8RNAxB296Fsr%2BFSbGRyou2lZ8oakW3oJNtvcqUq53VScMmruNZMoHq14KX5vu6s99kVyykDB9LVhiU%2Bvw%2FPUbr&X-Amz-Signature=a5530c28766cf15563795625e494c4878104140393d968d8613288824f40e87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMG7OSVK%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDZpHykK6om%2F7UnKNFukH4I3nKyZys6Hxgd0Z9yOdxfwAIgI%2Bk6mv5pAyWy7CQrYZm7Pfv4JBmjUHISztXw6%2FmgVcMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDPIsiPqOTzLs2KpeDSrcA08N3sTq7MOh9PUUg2aOMH3zh1lmKKEOfFpuQdLgA54BzsoouVYMp725qLBG9R7Mq02WNERw%2F%2FUKRc9tEZLkPuDK6CDYVL2OhZMIuKYY4x9kHpqE1gs1MTfIXDOW2muDZwPXSCn%2FvoQpS2t68UeFqDD%2BPS%2FUPHh5oBsBQYXlVAg9Qqkd6hmwTsN5xnwRZOkyURwNSls9jAAxHjjMeWHFb%2F1870UKiY1Eh234TiCtrZvKOgW7WLpGkPD31AcTVu0Y3D%2FL%2FmzuH3ex4lD5WNnxRRON60s8lgmm2%2FaCehtsJMzvOsgEOS4tsCdX7%2FyzhckvMig5YkK4jknatZqTqa%2FGBVIArusTK%2F7khYOi1eD2cVsAKr3iattbVgFYcABoQtNM4laO6ZB8IFHU96hmknDFl2aEZjv4lhDa1%2F1wo71F4hDoiNYeG1dV6TBL64MdwrldkomWA0tpE0k6xiDt0W3j3AwYvaETITg%2FhqbGGpcFPNgj6TXqsZ1n9jEThk3Angu4OSNON3b%2B8HdDhkUQtTRiPtvcu0ggEbNUchaNtS3c7kZRtf4MZe8ARTmrSJOqzu2VjMwOYYhFp26rqeKa%2BqhBCc1rTctp8K%2FB9CevW3%2BdH1vqJ26bQtWXctFfSdUIMIOj%2BsQGOqUB%2Bp5iv5yHmsnL1uSTO1iPwJ8KCPfpTXqsFYy%2FTJcUxx%2BZ2nZXexcM%2FC76IJIbiSg%2FU89ws97Zlww8vAhqunVtyafQS0Ngf0sP5v9gLrQ%2B02D2kZZjONwGRP%2BDrGsgvqD4S080XRyX5NYb9bdPtSTBFLjobBKoYR06m8toCN2m4YnlrAFCPtxOK%2FeaVsbiUJwvSvlfMBHutgYEsWgI2G8QuUlk39Bk&X-Amz-Signature=3af7205e778f0b1966797aaba15b638f7c76d593e2376f02b64ac7c940ea48de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEDCFYZ2%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICqmUP%2FsVrjWVqjme2TmyYhmfliz8Z0e2MwyxJZBL8MYAiADM0bvqkcDgGFi9UW8BIFfXO2%2BfjVawBLudT1F7zzKKCr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIM8A0jdWCmeNnd%2B2PhKtwDUFhT710CTdZOx3LG13dVO5Sp9ipthrG6Abkm%2F5Vu2TfMB2uazqwyzWD8HBLSTzcF1QooZwf%2FyomI2YaDqAgGeZ5sWTDZLGYsblA6xhi0rPX%2BIaqq7jeZlDVS%2FGpECeUmsJrVawKdiv%2FXKaaXs0KF81d16CXax2Bc43pgP15ktb9gGYgw%2BsOLEPFt%2FpFqxOARSmWuERzk8xNYqM42%2Bd%2B3sRqTllubqrDbaI7avAJJBioOfcXzFDi%2FBS9dnYdzZ4vSCj9u6Om57gbuSMXsdMnisOxFcdTRBoxYmuykH1CEk1R%2F9Jjj5Q2t4alj%2BSBRdj5LK89xvmay8ay3QJbn5y%2FLPILn2hSSTjD%2Bi86JCd5TFnq40lIDjyi2lNnXH3XzSTrooVwWK6%2FBD%2B7cHGJja%2Bz7ZveThtSUQvZJ6Y6Y0%2BakQHN4cvNhke4gcrzFIoZNh58ztZX5GOqSi9aa6GD7Xp36xdm5n62ZVFLZm37B2qq81yB%2BtS%2BEx0qES6Y7FUXEGq5R9UIwOZnxA8qVz1ybQhFDrep4cHHK2f9Lo%2BkGNS6OVgfLmDmrUF3I%2FG48ex3n43ZSxboP7KGnxnY6fpH3U%2B4tH4zoswMGmKeyeRnVuEHyn1VYpsxX9SRV3ONB2jEwhKP6xAY6pgH1bHt%2FT3B8YkvqD92iy1%2BEVdLP9YYYo8pMh74DKzJCAfB1azKaQa2fpMkYDmZActKzGYnybWfVhredxlx9gmMa5Opif6ZMbuT1WExES2M8s4DSk%2FvpXBUlWxGIVt6QMFdQo2X582vcqIy3sq6KCFq3gavdxpMz%2FSJWB1lVoU2WWwAmokxEO1J%2BRfdHELJUHQM8EYVCevW8m7eJJru72fsIpQ9vN9AN&X-Amz-Signature=b9d94926526f3b590902a3a3dd836650cb9b00afd2dc53e27a7902df38760f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XQ7WWVN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIG2aBoZSYABBb0shwtpznmakfp%2Bq1SmWeBem7m3YcyvwAiEAvmbF1MKalc4OFDGAOqujCW89cwqw7hcJqE2py1ONuEwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL%2FbuH2agsPv1jGUNSrcAzqSIWAaodFInXWKIs4WeCDlZdPELT6FBHwTkAP2RMno55HitNBM4%2FteXalMyijBb3tAba21LyzR5hUVIzsnRCdXPsjjpKuUgryuvvX4ZR2GrWSvgrVA8OQxKTpCQaSvzyUkAcf0XDEOebHmLChSL7l23ElhloXVvh7AHD4ZMeC2QFBWzHqrGBa0QkSBLz6di7t4L2Lok3XtBzorTha%2B20Xle%2BQ0MQWVConnLieMYNrwYX2eG2RHdKNH4ZHgeojFYfoDuywgnsS6hE8fFq3F%2FX8FyoF6qac3EW%2B9EnUlOmh%2BqZL86x4HuHfhfnd%2FUiP66XTspR3631CDjLk%2BmA2YZj7grAnkNv0L1WnDqBV9ZgwsgG8irnSHTXrdyoFEqWTvm9jgCGAvob2C%2Bl7uMbWb%2B%2FFUmXMZTz7fYt9pid31rbVHEizfYMSw0oFc8r1Hwwxsb%2BfEj9bs8a5kecAZ0Qxk37HJBnli%2FVH0pqget8No2814sVB%2FYDjKkGp5LDeMdenLbXzpUbMYphSa4E78MxklFo477Bd4kOQI%2B%2FhI8t4YwKaY8%2B4KSzyg4Ph%2BeQd2RHP9AF0Ufgz5Y77vBAl0Oex9YZS%2FnlwOpH6hOAIpcKULtzlACEpkCHZGckhYS3BKMPGj%2BsQGOqUBW2f8DmOTVkjBOcSmPCXPyWabiTU1gmoo4%2FkoWc0u%2BEBT4YGfKVzWQNk4TctBPA7K%2B0e0BPCuGe%2FK4RyZ4AfjX%2FEWnX2a0iNyuufSJY0%2FooiwSU6XiFu0PQfZNtz9YEWzBWVPFwQdBX2uj0SXJWOHWiqXxIZW6gBT6AVfK9XRv8ECfCt0h1qrEE5yxqsDZxvNoOMipmOfA%2BHa%2FfXzBA5EFhL1jybW&X-Amz-Signature=9b23c6c1b1d62e46fdc85839596f5117e4c4ce4bd9ea95c042f2d3a57d38393e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=c2077e574f494b91a84b7997065272bcd9689bf52c323b3ec82648699d24afad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FRKNP7%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQCtP0WzDQPwbw2zd4tswADjsEdQg1Oc0FE6g%2FO9cJYtxQIhAKLmiDa%2FXc4gq0O40sX3jB8NPfAhUq1ChVz5cu7J99XqKv8DCFMQABoMNjM3NDIzMTgzODA1IgxFO3wLe3iWQ7UEEd4q3AP0Frh2rL2vi1SZWHTAzjb0kpQa9g4AVrzHzKqFHKmxpO4aQzpBj7DMhkFjp4m2Rsp%2Bd4YFAF73pDfW4WWGD4O3goX1Y223bvqJ8EwXgac89CnJXytexNVKwq3vf%2BiBFFJ%2Fsb7VlJ%2FPejkPKHjtU%2FCD3RauKc74LjTi3xJTeVB%2BNLoVyUBf3NO2M6QUCYajnuyUe7F91VnX%2BeR5Yztz%2BMWPsaCnCb0VV97sVVHi1vlV6z0G3S%2BEGhYIEttRjQHJDQQv7X257PpVmucfdVbrsXk1k31%2B1hV8oDocpQIzAnzByII0b5FBpAtIjDR5UsjBct%2F3wNqHm7MSehm2ld2VPEcpuIY4zyU%2BJoZQbo9%2F%2FB8ktRB5Fw1VtlckIDRpYiVs64pDN97vF6NtEAbZfEejryPAw4dL1WRl7M4oIYF5qa1xHtJu8p%2BTINxgusNRPdR4v5zQ1k6g7xlODWMBJaGUYoklo%2B9COq1I1tNl8lMnl5VaPROveCFi7sL%2F1q4FIepCWY0yROPMnunkhmKEwOpgVqVCU1tRfCPElUTB6%2FL1BOPuVt0MCqkDPidPkQwFc%2F02bjtPfXoCuKm087mGuO6yPjPduDnKJNIaILl1OYsdKECJp%2BhJZPAmcWu%2FtH5ltzCWo%2FrEBjqkAbu3nFqzNNaC3aKPeOp8LVXnn2MgL9UZmMEY0rp4aC%2Bk8pkKbXoz60WnIcxJdqD37oqFarFlXiMDyL161l2kwIeWkwednu21bSGhB4MplbGMkbg9nQKiouC1kZpgq5l9VmO7gLlJsiEFyLiCQe0jrVoAZNrbW%2Fl7Os2rQy19K4G6aF5RKxPKs936s5FWrRhhlv89YAP0cm%2F7Yq%2Fa4%2FBGJA8%2BDCM7&X-Amz-Signature=4c7c1566c245c1869b83e94124f3b7cdaba56f40448126e1ea740beaac6c9042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=77a478b495085ecf1d64d777b5ac93412060fbb71dd104217622eddd6f854f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=e9a1567aa619a4b9a671447e1eb4511583a3ce9d53e6b37ab19ae84a57b30902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=6b9233c03163f278c9b19abef6144e3fa112ccb313760a8c7a5ed505ed253565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=82a59796ebb13ae50000463672a2b47e8ebd35ad0277cc7b31b2003970bcef3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=8491f64c7a53650aaf217a55d2d579d309dc28443ed87992956930422f852403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=c36818e02bd510c889e4298125ea0a83dd7e89729cb01fae75246452714ce175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=6b9233c03163f278c9b19abef6144e3fa112ccb313760a8c7a5ed505ed253565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=b008108c9f8c3fddb66cc9d6f593990503c6b2f52c222baeedc8fcc047967fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=81d0156f9c48018065cc0246b23f5d8282a0eb04065d6897dfccbe5e909e190a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNGOFBN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDj2Et33Ke8rbcXq46ymoKJQ2iY0blCq9LM4siXDYrksAiEA4cO9Mpc6Hqald06wt051LhuTq6Hds3u1a8OWX%2FAX6nkq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIOp%2F0FiXzrR6dyauSrcAw%2BWIgbSaE8wkYR610ij4XI5c6gNcYXbVvEQ0rIEIz4TjtxtrMc5G%2Fjzu%2B5Lvq0oJ%2BJ8KBlIr7tfSqQvgM6SirT%2Fvznbqm%2BchNGYc7C%2FRbgbrYlVumrCBnr8qCUKimnY%2BuonGvtNAYr9ifnvKSGyG2VX7NkbDmtWNnZB8BFqBlrs3GLrZ8pyVobBVEZLU8Zy1N1Qky93n8BksPXMBiRoNdb1LQVFRx3YfADprppRuKLfofktMhM9ZPMgIsqqjb92JffJml8mmtIcDe2qg3dJyzYsGuSW0bB%2BOsvUOH79W1x9tHeVaaxbX6hV9R3N17y10Nm5B8tDtakJSUL9A6Ubr8MzJFxrtfCLMrzt3Sb11ErYpRlVxSppwFcT%2B1YfogBsgQCOVjeZ6OUrVsMo8fDWl97ObUr1r%2BNAclTCQaBV34O1Seqt8J3tmY8vJ817lcJkJdxVukKX5WBjgNSLhTpKt7pXur%2BuW9Ox55g3s0S65H7muyxQdoXD%2FPzaSP0NvHgmC78kTTZpMV6er0IwerT7akCRUxArzjx%2FMIFqZ%2FOvOoaSbRc3ZZgoMYbaungO8XNP3co4wZPMBxDrubmhD6eqXW%2FyLqg6SgS1%2Fwdm8Y1hMi1qdUDNvazz0HVbX1U5MISj%2BsQGOqUBaRToKLjzncThC%2F6UlvYMRY9kluPex3otDIN9%2FKPVmPQ37FKq5LfkQ53I7gytlDedAqwWREoemqHOEyQzMSs%2BPhfCiwRqgRTsfcB2hZ3rxGVQPI3OQ5bRA9qDsXAGHLAyE4I3CriHSX3cEJsCj%2FmUVKAxd%2BpM7X4ccqUu986bMERqNJF3yn5mxztKtw9jOveOB5nHRkKSB9c71cKyfvPTguUHtZGG&X-Amz-Signature=68ce4883b5458a35cc430203e3a89add04f1ec54a47eeb52ce580c02afecd1bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
