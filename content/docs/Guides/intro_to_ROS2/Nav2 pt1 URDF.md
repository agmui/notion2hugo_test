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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=aa7cd7d60cecdc892b9ad2c9c367e72ef8139d30c714e971af43deb3c758d914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=c64caa96f282e9fed3f2fd6780a6e4a78e71ddae181bf58be5f29c6339fa681d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=f9f9aff071db779b13f1833e2d1f142f41d5b7c429cb2c68cee1f171caeed8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=33926ed8277c271586a56e8d68bb5d305747201f6e32bc8cf9662aeb46dc5e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=539d6755b2f610a78b1eaf07c0665687530961ec26a899e6605cd104d2857b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=1c432c3f922b4fbc7e97d0e78ddf6bd44f1c86180f1d2217911fd356a23e19de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=65381387c673af75574e9caac5f85517db941cbc1372d74385c3ffa93259593d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=44212e967b45c233f24ff49e1d1ff4457c40241ce11dda44b73606a2bee8ba96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=612fc903434b0728b833e2e0d4104205f77d536667166946a8f530cc458c5599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=bfd032b23a3207e1d7e6353e98040d574f10d2ceeda3d83a88c985e5ebbb70de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTITS7DA%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRUYDm5vdXTimjYkbjVrhF6Wa2TmtdEWgDBp2yX7VrAgIgcm49beZrz5gBvgH9EplR%2B7w0GPcUjIBGJMclEc22gDIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJV%2B7PwYlsMADO1%2FTircA3Iu9L4Jw%2FgFuqG%2F8J%2FjjyEYN8noyagdaaYXNMxGembHdEwoag1zfFTCCN1VZ4cF1g4WYBAXuIj6aI1lY%2F5X2w%2BySdezYQFZIxq7Vg9fytmhvBcd0lmVx5n%2BanCjvM6zqzO3h7Vb2hLFeDhcbpkhMrYk%2B8inhKEis1berFYLYgCyeUCY8jgbu966TjZYeX4UiGzG3EQn%2FnP9qEyUze0XoHQQhzWJOpIZd%2FCEze7lcvhVi2FDP1pfFHG3Yz3YTpMPYB10RP63yGIrwezP0gITjkntP2GSCF9csWDPY4U3V12NbjCQyJAn9RBn6DwOchbuGCk7XxuzBfo2cmrudoYzavrpLOeQVyfqWY4oElN7%2F9uxlM7AWGtuQ3U01p%2Fj4Bn21Vw9JVXrrB0xTJWjnuQGmqA4St99XsHb1RSCZLJ96o8ZmvEjZQs4w%2BQqmpbWgscfwk1QlUjVEl0uotp0cOTxS%2B4lP9PM5FH5SYolm5JsBRTsFUf7I%2B65AtwlZQfFwMvLhQBWsXju43Czcpenha7p%2FmZe9OIwn%2FPc3gHA6DUIy2Br5c5ayiz5o%2B9jb18%2BvBxaowXzYA%2Fhz1J5xneR8gFAOTtpSFKo9z6k06LzNu0gj3KZ9VChRyHTLr8A83%2F8MOLdqcgGOqUBosVVZdJJNe3o6dsBDip2hLH22nmohvojasitz0%2FrEp1PebsxzyPBHIC4U2unX7iY%2FOODh8iEevUITiiYVmVOD4sfkPt3%2BJud4LZSsqohYyycm%2BWWOYd%2Bxmm4ycziO7t8ep7nVGSpyjlOgBjMJtYRXbvsl9%2F8yPr4z9OMKc5rEwegcp8E4YOrk84b92aG0jK%2BYdwn1oAo6kmq84mD7uDn3Gmk7HbW&X-Amz-Signature=d892f3cb229246233586f440f12c83c204b15aa97d02b8a1e982b333eb44c4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVBXHTI%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX%2BaHEClPGpAWitm9QXSVOwE7nE6MHA2y6diX5e3HwPgIhAMfEguor%2FXWgIJ6UFJETBstaMdYfoVv8M9qaoLtzzyHmKv8DCH8QABoMNjM3NDIzMTgzODA1IgzowCrhJv7dgkDP7Qoq3APxI81imfu423VtIs2eRQj%2FNW%2FfjUEmWCYZrgrTkieQREJQRgFQrkMXDE3EjhgqWJkzMFbGgvlIzJPlcbdNuZ8OCsDjYo1bVZ60c%2F1nHuhWYo3fKup9sEO7SUx5gI%2Fs9TOVTxJ1xvE1kUfS23K6T1iEe0jNfk2bYb3jXLx7IpgPZgbVzDDU5UwPiXQhS33Teta32%2FZ%2Bx9e6%2BwYogyzOoTYfg4ah4MqKEG9Ypq30bMMxmx6J%2FWt%2BIRkHhVXwPypOgPghb9KzTY3JLGSZLuBZ5xDowGzom2uQTdf%2BKeXgnwxMchE6WgFi4l%2FcaWSsfJj9YpboQseoDBHoUwj%2FM1i2%2BN1Q2f5f372FRtcqY5Tj70Rcq95tQ%2FC95dIBwUuXmeEKZWpgCEO8XlRVzsjOVC3H3RqaFz65vAipucLF005q6B%2F3FkbXoGHeJFG3Fe%2BupDHOsKWOZoLD0R%2BNZo8qnQh5XseTUcnevwZHtYNWiHo5gC0%2BhHkesj17t7Qvy2WseeFrzGyAc7neN62LGgEb7B3VQGAhImu8x4KdR3oUZI7LDKj3n43%2BhJ5KDwQkvpf3aKcLtqQh7zIAY8E%2FRTooSclm79odRQe5q0iziA3d0vNnFMnzAZcCW49oz7yv5EbwSjDF3anIBjqkAS2TdN2P2TuuKf8oWJxKcZjp8YqpSqTcKBVcj1ydWeKF4dpSJCGglI9tC%2FnHXLDtQt9E5Wy3xWxhz2d%2BBk2HfiUk%2FEQEmShnBr7luW16uyst6z8qIbK9jqVExaLHmactsf%2BElYh%2FejxDzT8toXY3oT42jbNF%2Bda7w7ewY9UOMWCd%2FUHziws6hi%2BafmNTCbGkGlrz5bWQnoXG1ZCYEBfB%2BhJKpdFw&X-Amz-Signature=db6737f502774e88ba86bbf99b03b1ede065ae7559c7bea52db7d2b4ef5c0420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PHLOKTE%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC0SOWUw49%2FGnMn8xL0reFvNswTDamn%2BuY%2Bx5%2FrKXq%2BwIgSISc373bX%2BmszRdktG2WqP6%2FWRbbzLwmMLtGgC%2BQVNcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI%2BD6xOFBxGR4rFL2yrcA9Nfke2vudtTPbNk8e2o8W4OCUZIXLJh39TEgC%2Fio4BaFg3pwFxljsWbq1HOW%2FmrAPYAVepjTJrZ37PgVqKDq3s2EJ60ietydFqd6S%2FCW5TEoR2nBwQwcuXC6Y%2BBI6UvjWHE1M%2FrOZjEAQ3OpwUlwJPz9rpT%2BBsF7F4y%2FObcJr2yXHmNDcAp%2BQO3Xqs85noAyN5gqtv700O02XrT1ajopi3Z9ay7Mwti49p2xFmUqzaGT0jNZc7%2BSpyYzL1a2mIYg%2F4Yf97JUvJI4gSmQwr41%2Bn74e4tNcXKYEhkJRBhIwZfrRW3FeBsXIP9EdXePO8WG32IHK2XG6ASg90OlMNBsj%2FET0OZaTvDdPIjfs6mz3rgqdtfpvRUOfVG6msOkRos5jTBCQi4fdHpH9n1hz4qKhsIOlM4T%2FiNNCxKIA5rt3C4M13QgulZzvxFeUfqttguP7xf2uE6B09dPkkzBOllM8RjAtXQem4N4VI1e3tgMb1k4FyzJobebXWE7g%2Fl82Q8Foxpm%2BwKC7YLd9v1oLrKAiDW47RT6emC8Qcxg5o%2ByX5utZNe3C33ftMsI9Y5Gb3PVKrLB8eGV35f4Ve%2BPcbbDK0K7TORwD%2FBG8NCQ04S7310oPNJ%2BMwWDbAMU9DXMO3dqcgGOqUBOyayQZXBQ3EMb4snkJRi0jhU3VWxjVpzNDKC986WGMDGI3eRcPRT0sLb7fNGrL2W77v4IZmzq4e2zBB%2BMcCTjeE%2F%2FH46sKRoZEKxAol6qkrDSR7J1dN6d1HvrYZSG%2Bao9y%2B6KPzRwRGV2Jl5NPtC8xri0tpWxt69hslArpA9fUl62tCzhSkUIECN4B72c6H24UGUEpAbS9uTO9sUMTvwfK5%2FdiYK&X-Amz-Signature=5cacd42f85938339d11a1eaae055732ed3d8c0bc02fcf6311c55b5a46da133f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=f5868a44bb86b49c58280f718bdec4a231ac4f82ababde7e10fba1f418a1d8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQXDS66D%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0vRZSGP3rIO8qi4CagiFCOrgmAVSuNiWs50x78SWkgAIhAJbT5wgrYDM4ZRs4d%2BLaa2CbUp%2FZS7hG49d%2FYilCV4rhKv8DCH4QABoMNjM3NDIzMTgzODA1Igxmk4l2RORSIFpKJswq3AMqJJFAv0ycWmdwnMrRatr4fPvvZvHGCcGeY5aAJSQ4tXQe6IGCVbQ7dv59lwZfm8aYHRK9mEDiBaI%2FJ3XZjT8HWdYDKcdNcp%2BQlQrGz3bZK8gdXY9EeYr3Pzck8eogxrOCjt8HwfMRUbHzoKKg3kq9X7om9wrgAiWqrBr%2F7RfnhBo7MpOBTljyhgL9wm79MymEpgEI9n%2F79yt0pJBczwutklYSXi3BB2t59jqR%2B3jk9cekvwoMeCCCKtWh%2B2GXz3O4yC8PyETzHsRGl30HHljLfrUWlTiq1LVCNCpODgqKIrJ5bVbid5NMUNZ6UvzO6XZD0rgI2cbI%2FsSGO3QDfwA6QHkHENVPdDSlAr5lkFE9AQ%2BZ6Lo2f5WyqdTQrqaCOh8u7aiNsLc8%2BHgSHi6QHJh8Fw4Orp2boKYKtyo6wBu8vSJ4eB7Mg1lGZvZPR1fm16vYu08g%2Bvibs%2FEF39wdO7q8QO7lZl7hySEEvDCcCT12vzjr9BgMMYOaeL6ZcX4tirlYQUoj0LTGmaXaldxNB4XbLjpmyvxNyq84wfgKpCrag9BkVB%2FQl7MWd7AOJCYilCY%2BGg9Qby%2FV7h0Vafjd%2F9u8shX3JIydyEF3BTAtmTQUz%2B6cWqpncoG6XydiJTDg3anIBjqkAfK2l1CrsdejaaQF%2FER1j15NqrxTiVL98TEPoPZV8KdwLAJUbd5eNtAhrV3MZ9PM3KLc4ZW72Vd0wrBDMb9oyteY5C4iznhmCt18fR8sRqmqgQz7JjuwIDYp4EXHI1P3uNA4ftw%2BWfzzaf0FMo2Wb5%2FLgYaGulzfNfFTEwGumDk0IWAIlJsaqwA0EDJ3TXlCrlbunRozbq%2BEKw6SZ1UQvDK7BGDf&X-Amz-Signature=54ac1a03a0a849895de36d0863ddd1952e9616b261270db4da550ecf9447c12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=eef89afbfda95dd52cb586a0c9b4ee8a2205f0a1dc49a8df40f45debe5d5e7b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTHX52Y3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp6mRAr1%2FRQqHFzWsY9D4B%2BL7zXYQmPL%2BVVFY50Mn8xQIhAKdpd7V1yRNJyioRuayT49b0SgTlBGAs03BlMbuHpTvSKv8DCH8QABoMNjM3NDIzMTgzODA1IgwfhX69yaAehWtlwwYq3AOs6ZPL1OQJ6uBbJZy1vilhpP5w%2B9SJqVsCHhYDUh22rWUbxLNlZP2pkWG6%2FssdeW2UTxktoaySztUyTwOyBSvjbgQFd5kKiuS1Q21NdO3fr7gBg%2FwRhAEc9I3CVwWSHZig2jpZB%2FEppGEurYPm1YUjA8r67iG8tTnuWoZ3dNClNLxUxjL6GoOLyCNhMZ2aKpQB6ZR%2Fmy8oLBj1v%2BKbYxFk%2Fh1L5Dl8dvI0OYJEEB8ZqXeesSbx%2F3PidAJuvWPW1xIlmvfBjkkYyA%2B9pnT%2Buyrp70H%2FYsylLMUlt%2Bxm8UOAn5HXknTqsDyZl1%2BpqX4rJ761o1fIosdSuqu3z%2B0yKo91CIoe8E%2BtoCX6rg5kPrthtToDsdhNzgYyFUHvmjAYKHVmLCYaPVf0gd7a7LVW%2FIayakGTrcrTvNXqLk%2FNBBnJwvadxau465ORoLyMf2q8K74RSyRJ0iNJg%2BCMyyxv5ZP5TQxDm0x1Zi7rRRme5yn2W1gvek4S9m9WB4LocaBxpnZ55u1zcZOu%2FOBpvTPOG1OXuwVTtGHP7Q9QtBqsnXwFRzm8t%2FwHZ0bzKjY0N6Zv%2FAmxQebaxUz2MEXeLWhBeOErnTJcQf%2F5qHIDs50b9R%2FYAU3D04nFTp7Uy4s8UjDQ3anIBjqkARjhOK%2FIqVDvzTNaSKi0z3BmSr%2Fg%2F9viTyVvhlthGuzin%2FmR2PQVkZFUmEMfUfDbENpcfC43YDcRSEkSs%2BN1xiOtb0yw5bmghuRgCLUk2Axk7QETJE5crOGCQx8dgq0zuum4LUsIDHCPGE6Umb0rq4xX1Vo1fO5gpzlYzqhKYWoaVbKkX4qq9o3U3AF16lL3o5EdlQb8p1SjbKB5iic1VXGS7TQa&X-Amz-Signature=726857104fcccfb77604191f2598debe6ba2e1f025f7828d3036c808724d4a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=7181968dabb074bd698e6b0c8564a8ec25390aae76749c3c38a2cb89b51eec5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJQ3KU53%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW4XOJIbvT6YUv4OS4VLyj%2BSkHGGVI3op3ffKdN8jeKwIhALLddJdS%2BaDf3EuGhVM3jqKDaZtMlTY9BFQXFragJ5gAKv8DCH8QABoMNjM3NDIzMTgzODA1IgyLflNUwprG8bB0Z%2F0q3AMfPQG%2BrP42QhymrlgY%2F0XTYb51DoJ3e5JgiGmkMNVmLF6jhb4rWcZggOfB%2FFmF%2FdjcfnnQ8mx16enK9aXLLrT%2BBl2b8KZBcM6qEaXigp0C4ooBE6FnTdmk0TSypABGCTvB67Fr1Jp8OBQTch9mBhuNuIBeS81ks9ZXt4LgKZvQfq1xW38g1N%2FDRoN3tom4RWrxchPNyRLEAkXSt60hqirdqWEyqcA09djZ2JsNz2OhhVR90k%2Bs3%2Fnc1z4exKKPtBgaNCQSbh7mrVh2N35aZmJy7LNMe6IoPbuLxdfO9J4Vp0Dofa%2Bc3ZgB3Vlp1x3UtOWoRZ3uEVl1GhPPoRgOiUBIDhEEWLm9fBO6Bz8JEls%2BJ27r5Pps1l9zGc1Rg1lLg%2FcaqljllLaqAvLWTB%2FaTcJHsxfYbf%2FM8MmJlfr2GDMijR78VO3V7%2FEIAumbgKVU3gL6j5QbcKexyCSJAP4rDvKWjATChO6d7nlnZC9SyBqIEUXC5XBvXBSVCEPeZzKs5%2BoixsbZEyqA%2BV2e159J3J%2FEPwTP40%2FdtHMnGtOashclA90F3tmy4N0ATXCTvS1Jx6LUv5JI84lhU3hMk6mB5bxCzZLvlrJG9fYNXwxXK2ix4c%2B1Woj7qKqL8iXnEzDY3anIBjqkAbC4moPGuFPQaXo%2FpyWKmcvicUS9BESwUEsXfv%2F6tNsMD4FfMftsOpoNlHhA1O8V7WghZ9aKOBSBINVZRWa6%2BNz7SuIUzPz03xct9o8bKPtqVlM2YcPCgUykJ%2F6ehgBzRJBpb45Xm0xkorUP0eTu55PeYQ62PSSVm9WdXI8tpFbH%2BbSEXnh4T0jD5hwMqSSG5baHpuRDEyBHDIh1zB0uxASYpfzi&X-Amz-Signature=7b99460537d53c43fcadf807039304ff35f4a2b9f9822f1fd180d67f62b00153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=56083445f58ee9ab9032d4ada3b951ab1934094bc1cc586cad8a5f0fc3b5f835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RANHPQGD%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB76urG3uMdGQ0Mw6zmBynkiIMa1nHQLsA7XxyC2FXE7AiB2erxy7e7LhWas5eSumJpv3hLp1G0LCbGdjEAmfoqCNCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMlJAr%2FYuDNFLMELjkKtwDQrl5g5cYOndaHnGn6bgS8rVK3VHX6oVEbLT2%2Fv1SZI7oMLsWWMcKa4LsptDIa1Mz4niusqV6UvMgY7QsV3sWpkvP5GMzSavWNUyDjU9rdPz6JobiB5GTGStwyopK73cOxzF5o9%2FYJekc3yUGOJaGAM3iHGXXkvhsa%2BvoOlz1lJyXW0crqCrYmVnFuCzIVvy4%2Fql2gok00y3CuJobh9BhPDD0a8X6IX%2Bprp0JqrVRjMZMPmaHHdvUNwv25i777sBLMeO2Fa%2FCLPQ49irvwsWLv9Ps5WLFFGodnBVH0iD4uJ95rOSMNjaV600aCKvajh81ImMRV5B9JuNyDb5pwnzE1h3E2NbZO6LDyr%2BLxq1VGdHvdkfmHvhrvArEaKEX7bjt6nSLMh7VqMitkMl3krxBd2XgVx58LFiceO5tCIuGeb%2FWxXgw4YoX%2FwibIbYNxfpqYc1UY5tyke95Tc423CarPFYE44jzD6dQw7DXLxzcKqxroDn%2ByBy3l1gVbdQVT42thbzkLdJ2duQZr1Xz6E2yqBwLhxPw97X12KMHsW9NLBCCw0sohxlLENJo9%2FUye8%2B72cxUaE%2Bf3RIRVP%2BxdbrhARvveSETxCwdtJwW4SulW3JIOqWqGFzXmbf0e8YwhN2pyAY6pgH04HRlK%2BndHFpNxu0zkFlDxi4bvVgdT8mrQtmoFHVfIcP5OTCkhZfNXzrgz12pQpTpMIpmtvYO7YXrbrhn2%2FcSuuLt1iVABQP21jBjECrQB5qz9N7MF1Q0vmJksMEEV2oEuVIoxYLEEPjOLR0zLn%2B3dCy1bIx2N5rzG7Tb1yFcXMUFUVAayasW5Zu6eiu%2BP7NOLKS4U39CXBphtLcrf6ChKdI8Mvzz&X-Amz-Signature=c42d6897fd7924bdd2c25748ed3f9b03ed10bf88bc1ee0541971bea1d943e919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=f1772fb373f1914634291fcb1140488850633a858bc41083558448b4bec0116b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PS5SAOU%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8lIQthOKArXkEOIoEtLf3l4h15OzHagnnXFksuAf28AIhAJ6kUcfNAyx8iWp5XZYalGo2NvpoREyR1tUX3oENYEFZKv8DCH4QABoMNjM3NDIzMTgzODA1IgzERxTeB67Ecrvp94Uq3AMZDnZ2US0Ve1QILDE%2BAxEOLxdjZCrhFW4NBjQO75V%2BuSdOxVo3ovO3E7Q2JgUUX77nZO2gWzlWyqPr3Dlm7gpknTZliZG%2B1Qmq8Jad9RITL48z3nBvmyzaCTGavQACDYa2bYQJarPoZYhuNhvtY6SRPJb4PBHB%2BcRqDMiCIBgUEBUkjrUA1kyqqwuBZLb6Id43GSJ5beq9Ztbn2rbWW7zXqTB9hI9KRIx56XBibe4wLyAucEJFVo5A8IYmKxEVTP%2Bx%2F8c8d4DJ8nTbrBYEsV%2BSNlXvsavujbktqDEr7IW6aT3zLucjz7E5Z8WRuo2IO%2BHrpFhSSAOmixnFcRP4fr%2BHkTSrjSiHPcHbxyWz9RN8lJ0ucRhg2sbF%2FhgY7K2LyCtIKOR14CuD5ZAWqWMeGSR%2BdNuw%2FfSIfbl5uKM89cFLonPqysKGxcv%2FW%2BljJcpABfNL4iq3as%2F%2FWSNf2c%2B0xcf%2ByJp0Itx0vuxd3TwnWC6bGB5J3AvcaHGoV%2FNb%2BMJdxdEVQmXGQSU02qBCJH56%2F0%2BHr1VYwUhJejipv8a4okpEf8n5De83Dqf%2B5kOGCj9lwfpkIYYlJhv%2F8MiM%2B5bQTH6W9uTdsg31h7hriNJonNBmjTcnn63WS3XlLomndjCS3anIBjqkAeFtIgvNDUjfph5KZbBrzT3QpWwXlvpji%2BUnv43%2F2B%2FJnkEjuRGqKjpQ3kOoTUGLhh1nvippy6jKyZxNGJDb8r2qe%2FMK7DMJAoaW90YeW12KOrmAhgVgVEIhHf5SlJ7u%2Bor9hoyP2ZG1IivnfcSA7oYAqiMIAwn1smrmRrp2p8tjU1lUTi9IsrsRUGzROJyE4SnRm46MDYFi42kNUCotPZ95BSPC&X-Amz-Signature=60f6aa6d51d2fc6940d9483f54c97c34667773f3a21abdd8f241a91c3d26433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BY4TRF3%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcr3TAo%2B4mDyN1LSy36mqA3jlw472GIgzATITKK5hW6AIhAK8E1Zdzr0Kz6IhaGQUjflwQBAPI7ypVHUNp25JA5MgaKv8DCH4QABoMNjM3NDIzMTgzODA1IgzmgBxEU4HQXlOoz3Aq3AO%2B4WQ5u8KEhBY14iTrFScJc6DhUN71kEyw6gbqDaqJ03iG1AAArGFi2NqKxO9xGVI7rlYPMz%2BjSOxOcrxWPvoHZwRY0n0b5gj5YecQaCbf23xoehQyUzNViq%2BLlMvc6iwRIWqG6byfayz7Q%2BrS00tFOnlCSiiM%2FAAXlkmhwWEENw%2F1SL%2Fp9mDcq5J6DPtwthjEeZsPbLkDKr8QlKQQwPoaxrbzcfi%2FmI5xg4MH%2FZPHlfTsAO%2BkL2NQb9K%2F05KwfiYjAWHTRPlXNe8MrM2vjWlMIbRxTx5ZEnzfUa87Z5C4zvYfNvNNj2qvsnBlY1AaNI%2BEdgQlkILFMY6A4r0gqV0CWu26xUPhka3nFkLoi%2B36eX8Pj8qPl9RVu3IGd0Z9v2ZeW4TKdshMnhKyztbi2i9rXzDcflFKhiGYHGFLrQe5ropqkxYm5Tdnm%2BViepSQFzBnMmCVsIi8R%2BJ66UIbiZcAUmnYi61e9BITEZVzd0YEUCWlfsY62KK%2BXMlJIRa7xnpHrlAyq2tIgQdZ39dbWC3FuB00CfSP8DvOV0fLjLGQJIqvZwFxG8z2kbXlCaN54bd3v0quJJrLwvhCXbdkMbAjetQf3RTGZ9y42KuI4uPgzXidb8dwEyFAQaFCNjCC3anIBjqkAf6OaAworE7fSwH7S72Jy0A3yvtfWvxLhEaPvyvelQ%2FxnfhGB3yd8BB1BA3r2wMuavQjNeuxPkw28PEEZCCx3S6TzkB7YdlRhylZnIRTr0cbyp7wF5GNKoPheB%2FqhvdX9%2Fp9ZD5oBFiUftdxi%2F1H%2FCHrLZhTa4JtSmMgd1iWIbjI%2BCrbvP4TIQawJ9ky%2BKzoNP6cKtskkShWKnHTq%2FsELZu%2Bl8FP&X-Amz-Signature=68b4751b7d07b36c9c86ed87db4a91e3f5bec5b9407bf205431c6591f6ecd1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673YHSEIR%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoOw%2FRwjEcSJwSF3Vm7OIJfeSKDlv7xpAUVmKuMdHBtgIhALSd0eemoI1ZlPSTWX3KogXZP6gxNmaZXx%2B3S4uHbNZfKv8DCH4QABoMNjM3NDIzMTgzODA1IgxGbq8JGZPAZYZSQjIq3APgA2AZnFXOFvBoDwBI6yYEHAq7RKl7DBqep4xKjihcKv6et%2FpUqqkLhYsvnysgON1MCJq4j430M%2BdGXZKznozR2cPjQd6zf5D0pOhgMPf19%2BrBXMEBCxHGFUDPyK7Rc74F%2Fs0Q2oYkui89mAmKMTPwlDCKOph2KToUmZW7NxkvrXE7x%2FNxNoDXf0vZfylOJaUCLpM6xNPpXHgt5pp00nm%2BfJGRF%2F0PD%2BMr4doj8MvRcdXhuq5BMasCU%2B50juY0gmQvKp%2Bck1B4w9v8wA2gfsTM8twOTlKrDPBWg2SMMdhQ8raKwwNC2pNpxxcYkOSH64i9jmlgo5%2Fuiv%2Bxpp%2Bv4Mk18KHwax1B2YWgr083sg%2BaYzc%2FMUg9zINxIgU%2BjpSTXEe9Pf7YN9YH9qtdeNvCwXtsDbd9XGQNXPWh%2Bn0bJGeWdiOfDNmRVIAM2hGCyE%2FxEOhGSo8KfL%2BJmvkztts%2F3lD2sDhg%2BvDgc4%2F%2BPF22EDbtgxJooBln%2F4PsM1NEnxJyPQcccJxN2riJxuL2FhRoHuRmppK5j4Z9mT7tjQUxJrGOCXqHt2BfmEwA8wGaHTLaEbxsbEhduTZOlO9iX1VHiTupKfm7VnSFDplV6x6KHSfB9EFPXIwNUBgBBhoeOjDR3anIBjqkAR%2BWoexkPoFzshjjZggRg7CoeAN81B4SlA7uohVNQBIFKsqBPdphkY5DIV3N4JdUsaXVW0vIrITV5P4p1Beb57Bcu7UXOXZ2L3wIua05XBgcFBaP0TvxBNgU5VSnUHN9%2FEDOf8YMdSmeblxQC46R7GucxhFf0Cgd%2FZwStMRq6lI8ZGXcZ%2FVQwdw%2FCNZsbiypSMWB9sIKeF9caslmj98ty%2FN2tjzU&X-Amz-Signature=54b5628024e1ed5b07e224258670c471dae618b6fb127cd4e132c53b15ad65f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=d4f18dfa7ac68a9ebeb8fde0ce65ffded0a3ef1ad45d7afb6fb43d103ef86b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM4H6O4J%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnix7iCCYBNDGZ1DJGr%2BEzNkVIJJR2jHm8aCLsxTIqMgIgX64gpoFa7SFlX31arPDhhMIbr%2FWahkYEPCBhdhBJm%2F0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI9WXyFBHbUQ47VHwCrcA1SrqEx4zXSdEDoe05T9JsRVEe%2Fi%2FgFbgVtgZbLNqXbWStt513bzX60k0CD4kBmM9hLcEKKA9jUutQUtdG9OFQEhuaM9byYzx%2BrTbgOTMEFngmes9twPBh%2FNOt7FcPQCbtxkdk44kfnYx3jkxbB6a4jzYhSjhIgIJoLrb%2F%2Bi2PASIMslMZS2Djgu9gUs2dsLf5upUEmE5ARuoeXs4RJQ7wzxPajQ8OR9%2F4mlhPefvxJktMeraPDm1qOm4xFC%2B2tGswQ%2F%2FfS%2BgsrQUxgem7B%2BbS0mdEEZgY3C3%2FXNKbUCPebZXRwQMNIOSyeMV7BPa9P5s2AdqyXI%2FZNpsTr%2FzH7yJtzVi6L5aaICNYTD%2BDMZxPjHZ%2Fae%2FkQs2HfB%2F6ASmNML92odetJBJNx9CVBJJqUkSzUAaVTXIbh8rk%2BZbd%2BbgrbpBTkfttrHqz33JIp8ld%2B3eCtNqyi%2Fc3%2FaGSi%2FGTvuJTEOM0fITQUFxBNP1iBb5TgGIwcomGUzDzX1xb6OwWjDaEOHXZ%2FORjR0WN74PqxcNDgMCLTlQIGJUTjZwTfh5qQyubetLh2RoIvDUhJYb8df0HrIW0jm%2BzV1HgRZXmBYDrD8iRY3ZgRuRrQxW%2Bhz97JM0nQPTqbVIh6B%2B6poMKbdqcgGOqUB0DRsO4rqVaCzcnnzGsEzuEvfiyECOWX4ugBSxCPIjKHPK5I49l2DkI49587ZJ9hCWBvTaFYwXHzZ0xiE9RohMCTqEjdlbf0aShRrX%2FI8j2l7X5xtQV1S5pWTRTmXFIdZqj5eWRf11KJSD6ErVP%2F0oNSFkDehiPCtPtAeeP3hQ7oMDrC%2F2r2yofdGkjxyE40l%2FcpPBruUPoOR1ZBWjQ86tXwqma9U&X-Amz-Signature=fe877646426ee26d76055f7e5df5a6f808c3fde60920e223ff968119d3dce88e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=59889fb8c66e576119debfdc3aedd5a39211a5931c5944556f20af768c04fa0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=fcbec4a241cf0d12f72b7541e657c5e507c94ffd87819d556dd0b9196dd174fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=03a6ad8b452aa3aec5a212732888d8c60155e5cf995a765724d934c7a0223fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=db74615eb4b6fc9542a5893193866f55f49eaabfa4060830823c182eefa1b5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS7GFGKQ%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXRNP7qus%2FMZX6sLOiA3Zys5bnzyV%2BIxzruMJyEiMVCAIhAI4LbBhIB5TFl6SD9rJGfcvcbmFwIGcoNyf%2BMREC%2F3ssKv8DCH8QABoMNjM3NDIzMTgzODA1Igwk31Me5RNGCLn9Y7Uq3AMz1dCBsXyIe2BygMcxNSTROyWaJd4Pdd6cmmwQhLhvEaaGXuTMIBHJ5H0g4W7kcW%2FrYgeVzm0j7y3SH5t4o8HA%2FS3ueMpPrUcUEedPyHB25daxXS0PrVMeEjeZOCtEOUWRp6aJsVn5RfH99DOiZlrGgqG686PhtpdN%2BhbHdBYaNcf80H6dvGEgKkE5hxVnhA9bZVsbmmj%2FSbWTm5K2WKcLI4DhPzy8NuVFrdTees6h%2BPGmSquVKkxXsQHiUmkEoODYsnYMEOmxxeBR1giDlMfyhwWrvN17YveDhTUnyDbx5V39EqsIoHNJj2DsjhzXRt5TSbjWVj7usbIHjemGXLk57pqi18Yeqipz9BLiTxGXPfCXIAmX%2Bk5ZYIsmgDXyohqkuIutGQKzWWH6448hochNTspvZGTd4862RZZjhhcAhyxH9GidfDTh9G3GCFmnamzS4TWijxE2QfmOvFsvI5se65jvW3ruTisnjYf8cn74GeJkHzhxtJVn8tUNZw6n8TwqF0xdPWNOUTCN5fjmyHjQImH%2FutHOeAqyUSGY%2B1ic1fnh5ZLVRxxKKJfFpSWZ3x9KVMoqUuIu4WksV4XchJo9TSx4iwZLDfJqfNk0vwhNv%2BOwHrE4FqkeeCcUMDCw3anIBjqkAXx8Gv%2BHvWUMLkzZ3xy7ovrkpYIdeuFhfZ4xEI2haOM3E6i4oOuY0TqJVzs22Jrh%2BYJm89%2FJ9JY4QhByac12jjt39%2Fh9nj9jgT9iyvC3izZ9LfSAM18ofiKh0Hh4UgaDmMvvp0vthTmlgAxE57PICA6U1vqjU6BsfR7Wo%2B%2Fdw9Yh7Pkfcu21YYOzjX5%2FsknxBfl%2FaSMSTHjRxddrQc2D6Gzqafq%2B&X-Amz-Signature=b60bd1bba3ebdba82525f00b10da3efcef9102f567b33b4ba904599054261153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=406ec8b4780924062f65e6122be86fb51e1d9b63b8909b8d02300012157fac9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=4a73aa14e865823d7e3b378e8e18d01b30ac39bef3e1be4bbbaf1f948a4ce603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=03a6ad8b452aa3aec5a212732888d8c60155e5cf995a765724d934c7a0223fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=13cd3adb9699c4664e72485b963a86e70ff604f78a1e1588b319d76176cb6f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=358345ca3cffedc3230751148169d58d0b7d7919b54c011783f1d467ae796e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655NEB24W%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA1ISc9VSiuYbA3yJ28h%2F318Lgo3oZwCYHEvNb41klJ6AiB5RHs0IFuLG0zZuZPCMRppwkh7kf66bJQqSEiqKnrjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMwwn3nDfXg6DzgBFwKtwDLebmlQ3ILtL6BLWlyCj88gBcuGqniTk9jQSSAXPFfuCZrK2asj5cM1%2BCTYqtSjbwnCVNeDNxxoel%2B3fuZ40hnqfBvCuQdfJLZbetANTobMk8VyRi%2BLtKXjHqEui0zs%2F7Cnnx6Mlx33lhaqlXrbqnXUgaO14BDdRsjO8unNtAUSdnj40srsx64C5er1N8kepopRsBmp%2BGUGqkgLJTDfnWaTsjy%2B4313euWvb0AAel48VHc3TTu2GAWTU9%2F%2FImvrnSuUx6BlBuKO8kIV72FQj%2Ff9JxBSMelS72b1vzBr8X38S11Hjdy3kdUJ1ed4yjCySlsp7gDsT6tbEiLrp0TNeDJjIS1lHrDX8evAEpiaXMPT7lKsFkeaRGfsexhxhupViTluXerR1n0Rzc0C%2BLZVRAD12AE7tW4d5iU5d1%2B%2BnxgZJv5XmsD7N5xt1yfleubtq0SFZz2osEzAJjaBkB%2FIQUEGWmnL%2Ba6wBFtURjFTv8BY3y%2B53AnmbM14YjUNzAgw7doqf2hkwXWr%2FWbU9LFrCNY7KjPDTMEFyzcOTpQpD%2BvhIy49DvKHIPehgU%2F64OebEzVGZ8NhAOkpby6baicmgz8gSQZGGyHHRQIXg0dqzD96qnIrK2bTwHWoTkHwYwst2pyAY6pgEFo1gaj6H5Idg7uVZw0KwdPfBYfzZ7vsDogjLh82RQafJ9f43VMvgYUlD%2BTjYSXw6yLrWwrRWsdk7XPA2r7wXeZGvWYcS4AIgW8gOsdX8SbwGkvFdEtSMYnruMa3y5Tne1FKGuWJZ2GrP5kjXAVXoAxlO%2F3jh7TQKpmepNt9mbAYCzP3D8jDczFlw2HrKs3EYPRMXBjIoolHnSlLG34x2AX8%2FOhmAO&X-Amz-Signature=3a3c06208a0205f7f6fcc7337959c3b98b1957dc5c46cd7257f2a62015c04e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


