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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=be1991832375ccac7d39a4b8f519d7d7f2fabaa71af26825c7a9b4a51a37855e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=d27d15bdf135d039c9647e6afd23e7a832fe800d55a56e1568c709797d8adf4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=6bfd96d445f544cbfd225ba2afe46b6241d994400934f8696bc2c32f5b0b2bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=7fc5ca46b4d16441f4d71c5f94ffb107719571c04e5138156a605670e9c4c0f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=1832214afd9896de482b955d4e5d764eb6700bc313c5ef0fc45d1847b62cf36e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=e2b4e8aea78ce40ed160b63bf0b6588473fb89b2e6170bf18343d92db499c97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=a2d84f77225be7274d596f79fb3a7afb1c51136647b66bb39c455a9d0f52955b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=528fae6413c39a399739511d16578a9f8528b1fc1a66c2ee08fee535ed0d4dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=c1d675b93c6be6f739d05039a929fd2ab783cd9a58ee6dec428c3600014b256d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=014705d3bd0b4fdcf12dbc15c712b8ee0b16e1f7ee3b556a1d78dbabe7a855d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=46c98517f8d7dceeabe9761748caeabbdd43aa2869d9ce7b1d705a8bd236fd87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=cd763aa1fa46c8fbb3f08a5b24a9a65204d44fa86eade5414448d3a4fd855a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=209d60e5c0c6754fb6e6c86321002066a6b743cec6853910525b23b46b98d688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUK5ZJHJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIDbWJum%2FrZuEyzhtCguwjUApASrHzbIgQOcvxWvI%2BRsBAiBE6oyMxO9VcWl6H8Sli162DoXpote0zWs7osg1lWNmISr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM2f79Br6YBW8uja%2BqKtwDETV%2BctUsNoNaYUwXV%2FYp5DzL4jfFDLS6HnymcDGJLZC0t8CfhclMocVtylKU6xHHUFwjLvWWy0NpfBdlqOHdKFHQkafl2U6OalN53t01u4Y%2BHQB%2BgDYgZJBIQ4NuBQx4zf%2B%2BHNeRjYOgl5nzEMOdILJfQEaX1KT%2BN7N5nQwCcsEdjNjg%2FJR0bubA%2FB%2B4k49BSbbS398sj6xgw6NBvXwy1miCk%2FI9bXnk495LBcCNzpG2PV45RuemQjJJFxX%2FpSTSYkdAKGK1%2B%2B%2BVo5aMjfJE1GSMwoRUf4wGeumVV10J3eXtxf2n0CWGQ8a1Kq21i9fY6NzAxs2jvE4HRxDKMFeacbOC%2BUg2nkjZFXldysFgn6pxVdwa7RF%2Fyu%2FULgGJh5YYqUDCfwdqZdQmCFSylrVhoRs2qOiIK9LAH1qdsgMEgH2NNeNi0gXmH0D%2FvVM0NtoqU2Qh7d2m9iRC5GQilByfUNrLg287cDYrm7Kxhhi79hiWqls3dvV0UlOD7KFrr0UXEeLiG48MBU9Ea%2BKYC%2FnWtMyJoxpYfC6l%2FAArX6CtUrWeSiMCIntxSs6weX8ZG6haIAc4pwtLqqmi%2FPhulaBa45U4MXZAZtXTyNgtQ025FML%2BrRR7ykdGFIcn24cw06uSxAY6pgG1pHcIYA%2BdhAfwJnHNkYBOwn4ndreIn8xvObCnTGP7%2F540lGSyeXvUEIqs%2BNrDo7KvP13E2nOyaSIQ0Hh4kLTTNbshVFssR0rNDa%2FgF4lQUJjvom3RUmeiLga8CjkPOs7NZdWH6yHqv1C9V30yJHhkQnOvgWu%2BIaIR4fJf2uirI4GUTLOwypHcC5c9bsrwPyqR7uxIGUXFY8HuDohEGH%2FkSCGNVH9Q&X-Amz-Signature=38dc8584259a83475984a71bd23f9e37ec7b21fdc73395a3afb747d4e6b0ac2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=2fbb43b0c0f5fe51fc4a9d3ee735dac01f170e9516b0f41786f026be2a3ab71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=98a0c3f18c1da8ec35e39aabe1135317aed52c968283c3eb1d2b9e90d136bc96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=1363ef01a27101b8a8856f32cf1b28c2d6fb1e6026f6744eb2f85869ae7b5a6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=7970b9da2ed4216ac0e3ca0f0b639f6cddfc101c3aab62ee99ec2a7c03c13060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=72eb7e4bda4b381d4d74c50041d94c99a47acfef6746d611d69ae0fc2845d3e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652A3EBV6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCObqYdwIQ8N2mdJJw%2B1zZqrrS9glmCTmzPB1PfbsQSLgIhALlUvItXQSPg4c2wl512ExcVJq1Kz%2FNSWxGzd3xelPoSKv8DCFoQABoMNjM3NDIzMTgzODA1IgzmhtFhwIyzTHKPAJkq3AMNL%2BQKCaIx1Qac%2Fb6kloPZhnUkXJ5zVZ9NICf5nhtY6CyViHvGnFDz1wGoFooqnhuNBh0VRwEnZ04pYaW94pOLIGT7DUMt4vSSLAJOY5EE9%2FH2wrYVwJlgS06i0c0wWm%2FCRW2dCIG2EbijcKrgM0uQmSktTder%2B48qWFU6U1O0i7Bwss71HeAAjrG61c14ozmQXOQe16J9nsP9Z0WAObhguPvqE48nX4YtdLLJjkvL1qjhiDl2riwseUKHdPQIn4sWcuZawx4IAdSOYF4bfKVbrHdR8XgtwFOjp0HKusDLPLnbbW42%2FWtReZL675YJ%2BhALUxgPakKvGXD4DPb%2FPoT4TEcSJJpoBs1h%2BvRyXe5dHgfA6zAuoXvsfm8BJrn9CmUZwXDXxHj3l6sHsJ2DtncpYYWvt6u6Mm8ZEbqUku2ANUDPmjVdA%2BPXP2IOyY8%2BgYPQAIwhNNtr%2BMyBrukyLasB8iaF8tYgjTNFh7G0SxGPjbJPNGSUIZHzjMZujSaVxFbVuXuSoHTjil82C50DgzPRuOOO7X45R8V0nIuUrBlDwr4SmoZAQtrRLv56umqgY9M5Xk1XZ%2BZ84wRJqD0anruzqrglI8tSJ1bn17sTiAZHrAyWTKyQsgHfIr0YazD8q5LEBjqkAYS13f1iohEfdLIhPDlqWlMQ%2FuOm%2BbPHp6lmh5EdJThHgQLF7Xczn2dhublcVkA9zGHJmSl7xtI2mGhDvU4sd1HQUhe%2BFAq0h9o0GiGy99jRzqyDSXy7J75tJMd6XuWd8ZDQwjX89NM00XX8dfU7k9No5B6LrO%2BYCAgJpYT30IxGxdkgiKDlCZu1NBVqqychIZ%2FYb8H%2FN9QMkoP7XjLdLpeayRys&X-Amz-Signature=ecb86fd108f4dda16f1afb7cc4a05b36448a2b48c6b9449910e5cde768484a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
