---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T01:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T01:34:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=779d70d15d2dc4ede705c972021e0a568257113dc3f2f3b62496e506bd2b10f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=8bd1ebfc9460ecca287b1375710a7f81242a5c6881d7028750c2e955377e50b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly highly HIGHLY recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=bd4fb88ff3ddcb887b3e410cedd74845fb9e905c86005eec9bd91a60e83c19cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are many reasons for this because

- keeps all your code in one place
- You don’t need a monitor, mouse, and keyboard to connect to your Raspberry Pi
- Your laptop is much much faster than your Raspberry Pi so debugging is faster
- Once you are done developing on your laptop all you have to do is copy all the files over to the Pi and Docker will automatically make it work

{{% /alert %}}

## creating workspace + package

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

If you are doing the Dev container setup put these at the bottom of your `Dockerfile`

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=1a36b13e15ef39a5e40f2a5c0413c297d2abeab6c13490a907438444e2aece1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=09c9776a9b8634d309aa78d63b4ba4afdf5f977bb7a726fba6b2d01a5302be5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=4917419f571bf58605a608b9616699f926a50be598cb68e7510865554f8d0a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=e84e15deb9c78ecefe7b2579f82a403bf6dce223d8bd5a7734ddee7aa448978f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

make a folder in `mbot_pkg` called description and a file called `mbot_description.urdf`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=0d7efef48c1fd35ec1bb4645047d20d0b626f968c08ff5932bc59a8d166e0d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=febbcfb418e4a1f1d5cfe09e9290ab141d3640a3e9175fe378a0a473a8dcd164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=d850276f0ff46dc3195dcaa454b4b058108c4490c445df18b757a7a348091f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=14e0feebce28484d41a6d48001a7aad7d653ab4998d857e960730dcb9163bb02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`joint`**_**`_`**_**`state_publisher_gui`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=7eec64fbd49b48d71a9037ded3ff2e0e1f1595afe26c20ee444628f6be015e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=1e6416c62e19c6317367253937c136b7f462ecab1056239988fe4ef7092539fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4GJ2IM6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDwycfGzQIr0pf%2F4A79tQAmxmoZjoRvP1%2FoKcfYcDhVJgIgBnm8JEpYteag4sxvqetJkYt9rQaeJau%2BTvlZgkHd7N0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOlg7R48CxVxaAz6kyrcA6g4OztCDI1KHshomD0c4TJEMrKKaep6LZJXIWSiM8tUvRrzsAMGr8xSvGXJlD4ysNEey42ch1rh%2BE3iPkg0xMZhDtyhciD4XZjAehsQlQeL1jTnGt9sRhalSkExSOzzHuipnRDRHgF%2FG5UwiKu741XZRY3FOfG5xk5II1L9AqEi1o3NB5pW%2BKn9ZV%2B3HGG5zKKZx8D%2BpTQ4u8lDk%2F4KDI926htYrJm6lpy8qIlSc%2Bzksst6mr%2FsOG2I1mi95%2B0ueM%2ByLvw6ZVpREPAhYipG%2Fn53FgI94Y0oTqb9DOmRbvxOHbdmLl0YqxQr6zaOAFMQaHG3UKE9e8rTDzE6Po9L0c3Od9eocMj05ZusmhOAqp52JvGtPV92AA5cFfO%2FbFOzn8ZPZi85s0otrCDu%2F9ZLDAuTgNC0EtBEXByynfAerJqnu%2FJZCgN2jb3Q0JWzLLhbTfKVV8eafi4dvJw5DBJ0T3nnjJ5NuHSVu2C4AtRtsiVTJRR7QzWom%2BHsyYR20Xspu2Mozq5JCbU8X7nTs9NApWXNZ8hJBlk58luqRmJFAw5FvIT09n7fgZQ5najyZuMvfpXxxGz0%2F7AzOBkL3zlaQ4rptixg7cca%2FbXQA2pC0PHmzkvW0kW6bu%2Bp15rfMJbrh8QGOqUBFaVuEyrx0%2Bfdvk12KU%2BbdMuzTuzQs0i1sTp73a76mAD49cfBILbFW0qT%2Ft8XgoKxPxd8A2ft4LhtzK0edI8d%2F8URZ5Bt%2Bn4ATASK5NZTAVGnNsj6Ttbrq8HNoy3iFjYQNPkQo5xEJ31F3BtYY3KcSJjK5KMJvG2gJ3Puz1%2BcpvtcNStMYov7yOOMDUbDx1NOGXD8gw6lr78uXsHfEmfQPZjpd%2BlT&X-Amz-Signature=7b00ccc4cad588bff3652b73c84349160772f76654bd61c105e1e93ee4944776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=3790ce9cb4011313c69a788b308750a2c8af868e7a5cb5e0f6b8532f63cb6633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=27b98a708baa4212b57cab849fbff21138d310e554f9002c2f849f7801f1b771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## launch file

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

## add new files to `setup.py` 

if we add new files types to the package we need to update the `setup.py` and rebuild

```python

from setuptools import find_packages, setup
import os
from glob import glob

files = []
for full_filepath in glob('**/*.*', recursive=True):
    filepath = os.path.split(full_filepath)
    if filepath[0] != '':
        result = (os.path.join('share', package_name, filepath[0]), [full_filepath])
        files.append(result)

package_name = 'mbot_pkg'

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

**run:**

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=a7660417e68295cff010c4072818e12af2bf25e39b3c6399007cb2f8175f9714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running

In a new terminal tab while `rviz` is still open run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=7f2df131bb4ecbd50f31c6ffd3d36b63f4d3b8edee75866e5ab98b9719160be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=13a502f9dca8b85da4d204eee804415dfca1db7af76121eb3bff58111b7ff8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANGBJGI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDki55PSFwB6m%2FvhSwtugwgSw4laHPOfC1Vzpi5h1CP2gIgD0jsRQKGypX1lq7kYuGMnq3B1AML0Vf15htxeWdcdbMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDN%2BNu0pChfM9IYFAOSrcAxcqvDlH2cxtj9q5QPr%2Bfs2E2youbITNoUWOBt5Kze3sBueG2m3j%2BonPGzKyXmCZu3ZXclIUA58wykxrFz1qVWSF2EvaJoHrDBfV%2BMCL0%2BJX0HZfSlpuytmNyDuCkRMkY6d2vDNJEj357%2Bpbilq2qHE2wb%2F26tFn6FrmfgPtuMGMUlWLadjiB2ZQviE38LB6R8cchgyQobKOYuCXoKPJS7FRi1lifaeAeSY8qEtUDbM9E1tZU7QCHlVWjBYkceBs3z1ET6GSe1cHwNhvvdZT3W%2FVxRzMEyuiqKQ%2Bcqj8v3TmaVG7LbnmWNcd%2Bhb0kYo0W4%2BUvhvQ5B2fH8kBRnAdvkZwqDtXio%2FkL5YaL58e1F%2BUj0w3jK%2FPbvmZ2GF6JfP3IiYZODsgI%2BB%2BPZPqOd0FV6AG%2BXAtMeSThbKKHa2b50asMuZ5eeeCSwW0LKAI2AzRkzQeJbcvKAmVoRHFTvPlCNoLWGiH6ipupYvCGDToClER3eCB0rPjsJtX1U%2F4pPigo%2BUOUX4Fn6KnRSSEU3eN1Yl8AVr2aP%2FEmdO3EO0HBihU1TPJ%2FnusLkekvLLSbGGYZ0gwYi72vRNbc%2B5XXLDFQ6TP0SMLcHhjCgCI9hw%2FmRy7zuvbIJAifwJLaEHqMIrrh8QGOqUB%2FlTppd4vKF6aN7oTKc2dPlVRlNs13WNzgX2ExxohpmBTL7PkurWC%2FYr41Z6SI%2F8vQG5dSVTx4x0mYVRECC7i6QmGgGP2ur1ldRmIQGf3mhZ%2FKad2SYreXY6KTciJena%2FPVGxyEyacrhZsbavOkcHfmJssevQGmZsQWR3L6lobKjRge9NNo4J9nbdTBfCNBES0ULWaT1i5xNr6OKHtE9TdiAQbWHP&X-Amz-Signature=73dedef99d64c6ad5d09332c36b638fa553e78d885d0abca8b1ef79305761ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
