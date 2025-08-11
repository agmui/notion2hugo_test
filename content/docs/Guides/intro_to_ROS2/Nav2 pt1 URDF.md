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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=1ae44340379a479101b6e1d50375cf4dba5f2b6a7e9e4b03e3007c4b142514e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=6543eaffc653863c460c19ef818a673fdf3c5e7862a1008221c6555269ba082a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=cbfe7bfd7f00948b86608644c3e310869cfeec622457d8bead0e1c98f95b4c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=d1f2313e5b13e5f27816cbd0f401e5d3fd21d723f3501ccf3ecd846ece2bc996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=72ce90b493fc20a993cb3da3809645d28281bd180e186654c39266ce91e693df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=7589ee1e868eb0c5414116b01a3da540af8a8b7082911a065f0ecbbcbdcce28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=99f9baa9c0b0e6a3441d111d9079cd3677ec90c13a43a36a1960d5fbe7fc7b88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=114a85697a31b5f9032b750f8e8c7e59739aa3227cc2f07dd45e16b49cd4b1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=13b2c878b256e2a9294276db4574a8c86b253455b63efe7043bcbfd9a54cd569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=1e784f4d2a12963ebce73edbef3f7e83bc5f294bd64906cf19ccc75ba38d910f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSN25AOO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDp1IufHZTTe3adbLQJnBsZolpbw8bahFl2kVfc%2FK%2BiggIgKSq3Hti5NqQhc02YvIAEwVL3TMViDvXF0zfpg3UThc4qiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCgQhvz1KCSp7jfzhircA6JBrLRGg4M3njsL2lkbkwQ8lhyhEYt8U5uKDzx%2F6KjMOfS7pdex4Ws4fxYlOuTYhe1cz7QPoY9cNI7xI%2Bxm0IpqDyuYkH4KcWAaZXzRwL4OWGCYUOnclO6M5Q%2BmyX9kaJBtqRmxy7Pw2jeWVqsIalrcTcllWMyokhgaYtgwaX8QstnOb00dU6sHKgFrAELYSODd85SnThFV5FcvmTK8ZyB%2FgMCiPDB%2F9srIW3zkwePmY7xkkWRboIXCaZR%2BhxnlZT64PGfORaiqu%2BNhEi%2F6euO%2B1QUBEZePiw247wqqzQjThIRNfP%2F2lU5lkugwJwoC0WhVOhrsyYFIelZNBy8xlrnuzUMGiDDSwF2uTVgwda%2BNHoJnC%2B7wVw4Qeh5EQI6OhAPLmYOEp1EuQbW4HiwVyvfD3UVxyYUGToRvUfn2ud8ktJ5CtDIk01apC3zYjAuJPTRYN7c%2BHOGzvMvocrt0JAdcRrhzn4bZk77rQdYdFa7KX4C758d4hYlKFoMu3olzEqHAzpYpMUKt5pKpVT0trmUc9qLuhlfyk9o6rbVR9clBicN4oelsFwLIowHvVrpWBavdgBFmDLKaF7rpd4Zc9zjd%2BvD6BJ1coTODPmhX%2FrLUrjGmcLmd3f%2FxSleSMNb35cQGOqUBwbLvF65%2BHQmsxk5HxykXu7NfAOZr6NtpeiT6IlSXOnKT%2FYbpyZs%2FlzT%2FL88gIKUARDsM%2Bs1GPPRE2Rh%2F7NYj%2Fe%2F4lFwGtg3oeoiaxhv0TDw1gsIUkonIFjq4j45txUDB3yzOnqAgkvED9x6dFiwpon1WAYzVFKZ00gwPO9jplUFljODT7ClR2zBxhI45LCJYkeMgTQxI3k1tHohBVs1gQH0IAidW&X-Amz-Signature=d98f78e2782b31f2400b80405ef416abe55988ce27c117d508d134c94c3b0dfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N64GZVO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCruEEodiaZpTMSlIbIC8aQgAf3LE3aiVlXwKZdJd5SogIgV6Oc34j%2FwOp3P8GXkfOPW93mhdvALWBdPyCdKyX4wswqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj2lcPWDPi9IZFq%2ByrcAzP%2FAV6lcZBbfVPw3H12py6KeOjekR1HQDk8xURMQ18ghCRh2yAS94GFqvjpt8v6wMO49v%2Bi6AbYKKvPYmiTSJEnTeGfR%2BytKZ2nQZs0O2F6Mm09jGz9z3wsK831WiOOuBNlJxn2IvQTymZ7ItnlyE7naOOx7vCprjF9J14SGqFOkF0OjBpHWKoVxn28o29hQmQYeUvM33PA%2FrjxRGaZPoM64OsDZAFpZJZPcS%2F0NjNnBrRrb5X5lvJ8v6BtohZk4MYIhOlSlXQpPrB2Ibt7nvEg%2B56jCVvwna2FC1uZcHoTmRBstFhw4wnPLM9DNCM2yq45vqwiDPKsYdLu1Kqosd7G%2F3lNvTKhea3%2F33HZZO71ymp1aOcSyFa9pXdUF%2BQ1IozA5UnJRxp5%2FqHwulYOaOmN4w%2BLeB95i%2FqvdL6ltG%2Ba8XpkU8yt7bsK4vEjKbDggifwBwwaZG8EWvaj0XNqEaEgKjZwX0bkqdJy4qOpRmUMHCE9sxRtHBoxvuQWbzgiFVgF4ZztU1ze7RwnoqouOTmh77E4Kker8vka78yZgBqUqGBlNBEU7B2sLFpHAC2sDZ6u5opMl1ny8CyDgqA9fr42grkHFriBo7EHyPQgwA0rbCz7zxItEw9F%2B1HxMOb35cQGOqUBZWLqbhCmqWhXVSRncD5hIvAzhkwBc5US0Nb14FxfiCASADUm9AZgJ%2FPKpBOWgNP%2BNWEQw3h3IdHP9xZxcXLOuOeeHC%2BtYyBOYVT%2Bq2E4ZxZ%2BUQDCexKyVP9rJcl6ANM9A%2BxZGxvfd3FQqD9TmwRQQQ%2BLO%2FFycT0Ea6kyp1J6WTOeeKFWeoUKa5%2BjGqwdahir0DlzaCqtpvwSk%2BDTq6fcyIwp%2FdDD&X-Amz-Signature=4ee8a9424c64a4b7c94889e0649dcf314225158c9c062a221e06a02f77f43325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWN6NGY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6Ptess5mf95aM5Qed2sBCccdARfwZ2x2wHKAWWSWgwIgLYnr3KwqiSfnc2iOVEundEIKnOj2YIMK9CRGUmtJbzIqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FLI7I9jDbgx96sPSrcA3R11qDQf1dFuKmKtZx%2FNOsZz%2Beid9xSEjly1%2FpMtf8D9gisrhH5t2bjjmEDoIWq6XbozDesU3vTmdgGK8tm9rc2WumotMHE9VDxI%2Fq%2FqcWaaona9QTdmAuFBW%2Bifo4qObCpDpDXBRl%2BaY7PfQfljEppwbA9IPccTXQfyWbNKevrVB%2BK%2FIR822t75rExN3oC1z42jBxUuoFgz27jJ9EHEJOBe1JA53ohQs4NkN1dk3If4KYLF2FdXtAjiokk85%2F200o93X0BjHURLpLbNeXlP0yYFJXJbmiALUSlRVTAp6QvjTPe%2BELO8e999kaL5hXodEng3Erce3AyE7jEFGQ2ImgBs5WLixLk4MmPeHwOQGvZTD6gmSIPd6Q8T%2FlKu5f7WIOw5IWH4njiQWFVtPJUtncn4k4YhkWMWkKX2oqjlfyvfX27EmhcIT1%2BZncvE6QCwaDwlpmcAlMjAlyzrRJXaPik9bvPg%2BAJYcNy01%2FU%2Fpf29eafM%2BaIG1UB11MOzkKxkBgp3O0ttV0m%2FVMCUMDjAaReb4Tjez6r0WvV0LNNfgNcI6YnoKjL0uQIWnzFIw535LVohJOmBaqvcAPyGE3yB5EnjYVSGqxF3lyu4c0IGMuiBCLrj4ZHmVEBhNPHMNr35cQGOqUBI8xFWlAdnDw8LZFqyAc7pAESPmSMe42uc93wQU5%2Bs8PsSv22Gw2ZOX2pf4QnM%2FwI2ShETvDbh4sOHoKcV8GdootJNTvGoZjTcXZ8XJMGubOEDAO353%2FNPbGVREcuW7%2F7BZ6tgz%2BF7%2FCSetaeHx1qfkvbdnZiT10G8BkImfRoZOIHX%2Fk%2BvoWUc6I%2FqVh5W33%2FD9Kj9hORKZ0Wn0rMMKXS4R1%2B2xYi&X-Amz-Signature=ec3824a74c2653b2f1cd809ba52320d47fea5a2a973b0f04fd6963e7deb650c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=3a7f554b9ec21acc5dd1ee809d86a3adfd79c24549aec44f01e40b0b059df752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPBZDPJ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIdZWwqyc%2FzUNPzhNzb3CMFq5CaI5h70wH%2Fie%2Fqhy%2BQQIgKr3BeVeA5GZF2Habe8VfF%2BNVHcDQhHAl8HBI%2BLCG2YUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8f8INVU63GZinusircA16IFa7TAOcGpNdCwTRkhBKQnY63FkEY8DaCbiYcCn%2BybqsHURZ5OiZlLZx%2F27Bc5L5j%2BEceyxIszNWx0%2FcH6Di6YCPmQq9lCUbFmDyHU4ZXRouglk4mx1cUlDwyEdsrFe9ds2HzVlqEQudphCYKpDYmoD7MeCNDOKxgGYGFhdOGupSgiLge6TopK%2BWbAGfmRq1sDNoIKkZA2r3N2WwPKEYQ3FSi3k705N3tFvjhus8b4ynYlqSMS8W%2BaD16gvY4KTKvEOO0NExovIdgqNghTS3NhyxGj1NmslMdlau84mqm83wGZNkP6mXT3VqjNUhZupp9vgJDPmfL%2F0tsiOepYT4pVNYNpc1GtL1vaamh6lwsW5XbsxN2UAHL9KYFWrKxgJQNjpexyqVOD6zLneu9VR4YMogYZCEjS4RO%2BbZDt7knS9LwrOxqStdVzZIG7A06Sxbx4B%2FgKOfP1zC8JPcsEbPFh5pCfTJg4BMrF4D8uQd1%2BQjqN3n%2BkEkPMxXCmvjEAPKnRLUKJ8d6%2FRBroncdKZ4yAHDVEo32SqaobTOtRNPvxlhz612GnqVXtC0W2KjxbK283AKye5mB%2BFsRPqSBUjoJn0CKeh%2Bi8kW2y17acbP8xwFB75q2ilji%2BQuPMPH35cQGOqUBO38uZJyq3iq%2FhZgU5H7zMiVCEO3lu5nXh8LPBDMjDG%2BxHBrcoa6v856fWGpa5Spt30DstyRmR71Ps1kGkU8CDchTo79e%2FIVqmx1ng3MNazozYvJDzRKQEPIDNdrmhwFtr4qVS2X2BjnMnxxmRXH6XQT%2FpCDftwwpPbuC%2FxeV7JHpA2Uk9N2K%2FgpYOjbFrygk0Dse6VnFlUb68hTuMaXPpxlcKxQy&X-Amz-Signature=191ae86c1feb121d45742bfb9486122e825091630c8cf84d445be12a9d742322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=6fcf0d143c42cb8668e7061116a35a9cb4820062f1e5ce8671c8febeb074142a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYIYGUR%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIbn9TsedYyOexYvYkB6oAT97srSJFzcy3il5nPVFdqgIhANsOtxP15mM1Hjgd7PyJ%2B0oeMtaqCx7Y%2FZY%2BWE8Y3sTsKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfDdxfqqo9uMlg6LIq3AMoY%2FpDPtYdzxEaUI%2FmO1KnZ0ycEAeXg8fGRWgCaRvPs%2Bea%2BF4DvqFMm3v10CpLPGGyjiw%2FO%2BbBu6fEYU47tm2DIgNSY8MypqCsBwrJxsfq8oJ56smJ5633g7%2B76FtcJuxs4L0qsnsik2b4thS0vlnNR2M14SwHZ7EkMDaT1FThCRu2k0Pk3fo%2BafbJlXa8rRNqPaNnF4lWk61ReeVe8JRpXaiUA9%2Bzqbmz4MfzCQ9xonZJlv9xe5ELs%2FBnP%2B7ahLTAau%2FfCXh8OXS%2Fa%2FGWbiBbPZ6F%2BuDa9JWSPGyafulsSHAuKUBE5HWoten8QEWEli%2FXkC3GrKN4HIKVeK7pD0rk7p9t%2F8ledym%2F%2FZm6OqzwsbecfwyhLPLCZPJtFX7bWS6xE%2F70X0bGCMc90HSOZEwtOmCwh4Uw1VFU9E%2B34NtltJ%2Bag1vgI5HLQGEsEGq38%2FEZUU3Qfu9ug6wKo8pxxNHg%2BXkmhUnktE7K3NB38VrTmHFBXThyZnvPTu3Wz6DK5d5CN2yg3glmsaKzonBt4rLf6oFrNGDHYlp5cymjnKxNXZKqLS6R337cO%2FLarfZHagzVUaVFUpavkjIWq%2FhFMfKmZZ0FbYD8ma8rByE7MyXeJKQjtmV6BO2tgEzl0jDc9%2BXEBjqkAZAEg8m52GUXT4CY%2BiEs4y7Jr24uT07DgwXNXMlLrleisorWAkWGh%2FvIhZGxw9DitmeAUDxib5NrV%2BzW%2Fu7Fyjsj43tTmzghDqFJQdsgMKpvkHZ88ewkXS%2FRXLd7jTxEUivEMnWIQBAAdqd4dW8z8o3%2F5R01reuTPGLQrrp0Aq%2F9gsS27HGRAQ3WrXZqO6U0dOdCApw%2FoekBEAC8iCuxeOym7fCi&X-Amz-Signature=479351ae63edad45ce18e69bc8c3d4d33007fef7704d58807f907e9cfc91fd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=a954ec48baef924ee84fa2cf2b84e347b96725d123293fd85d345f2264566e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYBYRDDW%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpEYIv5pxdCM6lbiaxKJEWr3O8HRljskCLdqqaTDwkZwIgGdqdv77sJL96XcJmrj7NJL%2F2J0K4DFnygXQMayRk%2F%2BkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjCJcIkHFk55c8PBSrcAzGBZOvGkJPldahF5y1mTHjSXZzTegIV8iIxoqYaviZX1RsBaLDfrEjRr1Rn6aG2lwZ5%2Bn7DwQpAxWW7Kae1aAB%2BX7K0kq6DugqfjAoAZlsteX7dbS0c9Oc4rhV0Hi4bGmC86aJFCbIMYRbFhgq9KTiXALFx2pxy%2Bv6RuZb51DxpLM9QvwV3ckfUiecYzwmHj1%2BxaFo%2FbtcQKReegq%2FPqiG2xJxdzMMHMggW49aVgEWOZyLfSYzhIdiqUDV3Cx7iYHqA8sQlwkmwkPDIdVsz8yJ0KAl%2BMthRb3ITpsj0dgigddCFece6CeFScDZzlkrRKnpfzckK3hlA1vq6w6XQWbhkWpqouB9IFA9zrMd9jQXlGwZM3ndI1NwivEr77TksiOoCiK8L0d1gdZ1EXw1PnOjBIa6wVAYrz9IgZ0FzWngl0LxKXaaIRUtpqYgz2U%2FfhJ0JVo1ABJdGlT8EUGKgv1HK0KHXZH9U8MIPUbg2nOoU9SitO9iQdYtAiGxInvSVytZqjrS%2FK25%2BCHAcs1yG0WHZkdf0rpYPBoy5IvLW5t2%2BpZh8NRemOn0hYC41yCAe22H0czGbipL%2BUSUEpNe90ZrnQKshSwUly3lK5JZyHQ6ogqjotx2TY01fWM50MNj35cQGOqUByAgWysTW7lBoNwsDyuUZcvV9OKXvxIg5XSJ0qt76OrLNyBDlhlbUW03QCLWoxflzeRAMSpXAsJpmHVo35M09B2lmWEQjXMXF%2BrMnQUC2rwqcRu6myZJ9qolhgBtVL00xTNhrmE6yvHre8OOEzolWqkvLEmSXIwrYN6c5MOq8XA17IkzwfDCz0%2F6T0%2B7EnPoYcBe9zq21qJLu7r3sV%2BZN6JiDe26P&X-Amz-Signature=938e17636d85f2e6112028521ed5d47fb69030484ed69b0796cffbd1966a774c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=9f0fcf1b1b59a68473332763bdf3f96c33648691ec0c407e3d20420054e8fd73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VXTO7Q5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FE4n45A1Vi%2BUuEV91vixezenFVXf0zz80iIlx8CykZAIgOzPS0zwh7JS8mufDwDtX7%2BvkNAIoCvABvHydI%2FCSr9AqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH%2Bvi50Cixbln71KSrcAz9Co%2BIddi8X7dm3fED6q7Ory%2FSlc8ZHDaeyXUb14oTMgxUuOJsXtnYMZ05JYrWLWKrZUtWAn6TZ%2BaymZ4GuEmTMk%2Bh0f%2BCnNEXFgz%2FXKRlh8bH9K5oU64Ri3EKulmAPfaKMs4RUcdQft1uFWwhsAHICMVjiT0P0Q09jNKTqUI9OSpJD1JNMbinMLo4KlKmL7iMHYecQgo0wx3%2FnhpcR90kNAexCikUpWiIwF1gYBCvn1R0VWp3c22TR70Z4HRNfsLtnaJ2iWh4k2Yebitbi3ecaHTqRr%2FzbXOE64wx71mFh4iotQRY5%2F9YtEnzH7qQ6f3YHqtq8rn2NG03BwFIak2OIEwJs5bwqKd61oYQJI%2F7fWlxOqw3ptNC%2FR55K3L%2Fb0Q9a8wwc%2BOXsYoLAZIjcd9SEUzAYVZkDciG9U7BkHGb5Te05cxUZDPLLgUJ4Tt62voKRhKh6kQKNjNp4hr97MRAJl0X7AfCMZQpIiWa0%2F2okzdAPFUqJEfSZ%2FPAV7m5KMkKCJIsggS3lB0Pw1GclILxJhtwDDIAtLQbW2bazvc19apMUsFuOwhjP4w3ZMepT1JuSODEXNzsBvQUgSAc4v%2BZF9HVPoqCqZAx4IbPmrNolz0LFxcbW7HYZy8pnMP335cQGOqUBP%2BBo7JxQgkWEMrEkcRYlUJHJKOpd%2BAugPcy4RnF6lcJLjjOnrw6LhldlJl80o079OgJVWQwdf7Ff9rVJIJgPeyD3y%2FVD8isV%2BDwyITAF0mEo31iIkKCqlGQPVOx28vXncDE%2BdvCmUs%2F5sglP4HgEZts%2B8lblmb8Adzno1BN5zDG68IjQMcf2yabB9U9hs8YYN5pb%2FGOrUox%2BqVGeVHGclYyN%2BYVf&X-Amz-Signature=b24f3445a576ef2aff6b05af080e3289395e8e2098e6958e036919ebfbab4708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667755JXX3%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhx1r9vQ%2B8MTuc6Ku6wCl5oF%2F2a3gUynozoVP6RiuNuAIhALnh%2B2OboUiJn3C%2Fp2Z%2BipyUhSQW2McFkLuF4rdDTlCAKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSMxb4w7QtD7mikvgq3AOpgSCAGFhZ4YDjRet%2FL1LXjT0G9NgOU6hiAwJpWxYLRCZzeV901FQ2mvStKPwVTZMOOegb%2BhqvwaAIHSB4wUm1aHhb8sXTvDTzzL7fl5NLFuqtJDWQryYDXVet8QfhWeXCWvwzN1Jw9gXOhW0LP%2Ft%2B2ivtpQYI9IsYDxm%2FWeSAvmxpf%2BVJtSxlleSztHe33rYuRe48BV4OmSP0Hxo3FGTQ%2BefHDSE0GtDuJO8lFq3Wjujb5DTUk6%2Bfge8wg%2BFB%2FZqbjmdbvEP%2Fh0kP%2BtfuW9cFgKS3MQtels13fTVqDdtlHDj5nqsM0qEnDi0UXel4%2B9%2FO6NowFlIldz%2B%2FjFvW58RR5%2BiOAVRsVgKMUsb3fWXKMUTcakcj2roKObpd0ss66js0t3CNDRcKOkSI%2Fetx6FmL0DaHv%2FfTuCBrPu7pgoOdQ9eUsbO6ZcW%2F0PTF5FReJYl8eFORQjUiBA1GUq%2FEeyTCeOk4DdM2wbqSt1xRm%2FsF9Te7BAUFrb2Ow7cAe0hRV0rqpT4EuyNkkNGCqQIKG4MqlNE8h2HstoBmg7eEXtrHga9kHzfxcot13H3p89IDvFbOBS64XQY5NUh%2FsJ8pYcAvo6ODN30ujqki1TG0P5%2BAgud1CaM4snaDHJ0LnTCq9%2BXEBjqkAY8%2Fhtb0HmwazEimjoETv2WSZltdlRw2JDAnZCzwcahulW4776clmDqk97y4xx2MkcTcS98zr0I0V5zRnnMdEshgYj6lanBGs%2BR1UjLK9XwgonFtyGu%2BG7yc%2FYgfSNaVckLlGczK8Mitn7A6XehMtiI6WtFhbTEFiloOrMmwkw6ldeS13jyNPITeMLNdf7jGZ%2BIE%2Be6DnDfCSl64%2FwZQOj9rhQwl&X-Amz-Signature=c6942bc51cd768390f50bbf13e19b9b6af8487ef66907d496f6f48aabf7a2be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMEOTKAG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtNcHjo5v9PAcp%2Bp8ZTTGC%2FbfopY4lKx2FZvWDtC68DAIgPHmzSvbcATaPZVuV%2F4BWbmtyscGca%2FSEQEnYoARx0OgqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHlCJdcHa0a8PnacyrcA24OxH5QPIO6MufC1PzXAuQV2C7s%2F9q5CmM52kFBfLQelv6QQNMWNytM82EjSwn0Vsc2FGl6taSgZx3rTKl5EtDQY%2Bj52CaG%2B9p7v5Ib2iOZ51DXeamz4XQFONaSfwSwN8G0m0O0s0NUeP0TMZ0FmW0G1FIBLd8ZstFCzHwRmTuzwUkWyPIUCud6L1IQNuZ%2FRe%2FDwLD0OpJZZcwcmIWE4UQKsrxlQsgmEvqAUfZjKqb1v%2Fp2TBJZGEfj6Tspi9mKHp2dIfo8A4sgGJBt3KwmZhSWpoyDx03xxG8JL1hjzJWzeXiQnP6IpBawgaFLk3%2BYbnsf20cKC1LI2rpRthqIoaLUC1oBa1wy76hd8RcyvPBekoqUoJbM6j7Q%2B1D43oYYK5NlXgkzeu%2FxXy52ibsgOPcBJ2Lh%2BEbd5f%2FK1UGUYBIVqA0Anfj7TjIK7OxjWAK%2BoOWkg%2Bby3exj%2Fh05oiXE7VsMbyU1NSoEYVzAYgtmtyRh3vfj0bGBf%2F6lezpBjzj06XW7P%2BYwEiX1QBoraaz%2BSv9XoaBCuua77HZQZ04ufM0WlTSH8NFPmqIX8QZ31Fw3Fgvjf3N%2FKANvLacl%2BdxjCRM6kdss4fqMSaSKrVtoDOBYqJBwgw9f%2FUUtJ6HjMMb35cQGOqUBlRxRbRfWLmyS3F9bIAAavGvV1VxQYUBY4BrBz9%2BKKGDdvJ5pjiwRT5pQiKGFgdtgMgOLBfBrnMmlZ0CfDZRNUZXw%2FDCNYMG%2BpZt2QWC4u6Kbqwbj%2B6nyOO8XvXcBAtgV41gq7G1qzUwuH4oRcd1qXPompgvG2Q88hiSb5VsVPHmo4%2F3%2F5dSOVEFxwb7afQQKi1PwMVwqht6tBP%2FMfUxckMsENI9K&X-Amz-Signature=7a89cde7e737d320e1e14125a2ac378975635c021e22d5129d5e64393a82f1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633VJFZHO%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5QvgU4AFDY5oG29TfGqitwu3AuK2U8Y7R6qk6rtAMmwIhAPpdJkw%2Bs6Y6yu8jBZYgkrZmCI5DGwILb7mmSKx1T3diKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuVJfCyZvd5ZCnw8Iq3ANry1VjBygYC%2F6ku6MX1gbP%2FtSOQr3SfkVXG%2B3gA47wD6VFxPioJXZPSIztTj%2FoTUF8F0Ek3EAcPwMBWyzH4HUr3H%2BqNe2bGJr5otyKZWP8hY36RWvdMF7zLMXVu3gGjQlVhbrQT8CE9GFzkYK6eipB3Vam7svA0OFZzq6KUaFzbQYPlS%2B8yOYhc2M6JB3TJHOrJXSCcCcDx5zzsvFHNnY%2BCsSCEYy2wNYTnKnLwpHl521wXWBIR%2FuM6baxRZX%2FkAzFTOfzYmntDBfHjnQMY4CCOr0W7q27MJoR5pp5PA90KA1zwrfFp2dP%2Bk%2B3XWqSea8sGo0Kbek6tCoFHvE7%2FZdVAdIC%2BawE%2FeOXMlxMz1ehjvx%2FUDZJdRGER%2F3EpfaXdNLDBvpFTJcHsZcerU07ycI2EDKsVwIqPiZ99EExdqCIEXwfn0t3OUpD6U9ibh9ROl%2BBXfxDn0PtdDb44IESPylP01dF%2BJktptPDrBwh%2BUWFCVpPqOwXWwzNHKnviUhvejgIhiwf8njh8%2BwsWJmGRRtuxw%2BVSOZ5%2FEezB4Ir0J8UMC6vIJXyCXlTZAPL%2B78jqpTvOEkCTsqABT2GqJiVgfv2jd9p1UJPxUzSB2KpZU2Jv%2FQg14x%2B3NPJK%2FZP4DCP%2BOXEBjqkAdieS1lJD9f4UFnjj71UwfH2jxVBIWb8iKCKmTW1jkpcycdWOVRcsWV8jbH21XoiBsXwidnGURJ6I8%2FsyJ1cStoF29QlQGURk7IhcX0Mv9YYTgp1DJftoAeQ6srMlxg9hSCOUs1dWfFSvv0kaIzhfIQognE7T4y4TnvxpJoJktBlQ%2Fs9mmPNbR5VGX78ixJZQ5qfMx2HNOvhpxembEZ5MXsZ25tu&X-Amz-Signature=0371a8ebea4306eae9c31deb48423e3f2a6e66176ab6b50b6f94fe321d936886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7DROT3E%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoVIcPbh5%2Bbmiqfbvmk6JiI%2FwVgLjhj9QyRKzqprJbcQIgITFHX%2BAvhkcOa4GzlXw9Mei81j7KyfcOmHZJLpdBFeUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjuXV90fFlT0Ai2bCrcA%2F7FXh9oWQzW%2Bchpic68obsZ1rPzi2gS%2F4ljo0RWJanBz1Bqibd6d%2FVZJRHjUKjG%2FF1fqMv%2B4cWoFwtYlmunN9xobIlP1sEUEl3og43yNMBbMgQf1k40t2jkwsQTYDBTFDgzbf1ytDZVmdlW%2FmPfX3PLH%2B%2BBaAhxT6DlqLg52cyrML%2F%2BD%2FIE8Tkf5Z1nnt8%2Fh39cMdFyMoHin%2F3VxndeQwM8BLBSXPBMw2NXWLD%2BHG%2F%2BxzeIfdZztIHENaQAQcvY0aX1ZZOXMLd843JjMtjiuzLlEfv0DmkjbegcttVVcTM0nqKhNGw91tOFhiSGKxPWFFysd3DnEvonbAkvHZN76eX%2FD1Ld%2FlEYk%2FxhwFmm7ZtJvX2j7I6n9C%2FPpLNcBzOfo36QxXAHKzd8L%2FSW4RsEw%2BpTcepkk8bPi17Myr6X6PHrvyKgm43LN1I2Y3Bk0TsF1BcWtDNw7R5hCrTQCMMLNqKVtZsb0ViVOtSACzYn7XH9TeBWU0u8W03V0Ip6tOKogWjkLwVI4QsfjrJSrReYkNoJnCfxRzqq%2B6mgOl7ISDPaAo45roCNKIepOH8eA1WxxP%2B%2BJk5ZbqJwnZXBZnXJotZGIEVAcd2%2F1oIaMVowlrXfeySmCMAU3Mr9SDSIMI735cQGOqUB6rd8kK3Nr18exGCKPWfHhOlIUcok0ji6H64EUI%2F4qx0xaXZKCOak0379gKfV1mHxbhZ3rTvBwOC6k0CtqYHw3s99LfHPpuJH3wYNHubFTR4mv2Nhw%2Fme9XkHHmEslYoHszFXmif98bx%2F6CCF0aq6dPzySi7LGGUFvwg6%2FlFahasvtr%2F%2Bzcko6rY5H7CJjc1kDBPMmXOwMSoe2rlp3XDLA0LlRpHX&X-Amz-Signature=7c052656e4eed8760da4fad78c4b9320e9207b04a7a5d03f98feb3fb671cf419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=e6703ffbf715a5ba44c8a1b81b66f3c5692b08c1880cc5391c19c55660590077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVTKW4YQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgKhm%2B8dCFjPC%2FyYQXXEEfokQ5ryre092avF19rxwHoAiEA6lpxLPXK8D%2FdRpDxmkWzD4wrcwyEW0QhXzy3es22%2BJsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYvWe4i8gBc5F3eRSrcA9EOAKC4SCvryhU8lAJLqWtLRHt4K0sMSG0pM4YUDmeXy3N8Pc0GPcoofn4sEUknpb7BlEd%2BsRXJKYezxRTU61CrIRzY2vVM7cMDxJGtZsqeA%2BZM22tx3ESLkhYhCaNeeM9Xl9YasJ0G%2FCjRSWjbbA7C0J4PXexuYpsoziRbSBZ84I1WZsQrAAGeUn2Q7vdSSq13hTRZ0RVXAZLkebpf6BAPZybdvV8WoJCeZfg0H1AKGpz7JtYymPccgWoqNxh%2FVKYH3EY2qrGLX44%2FuMEHyw8AX4fzaKb%2F1PRk2qymAZzrOB2hGg%2FPuGF26FdxpZe6w6703xjHayEhC20XQMxHhyll9tohpPaqbspkIqbXZzjEVXrcFZ4vIvYtKW9NWWPUh6DN4GFiYgHVAxOtg%2FUJ9ICS735w6CZcHn9cnL7rrfeYAgXru%2B42bOAgQmhEHZS87vmLWKTr5GEOuQAWtIISQcZydadu1mFJ1AG0KAHfeUxd7JmCCCe%2B0OIaxdhymBDSlX5Jw4rS5oiw3H69WzIBs%2FIkoXhvgtwej2w8gN2HFvUVy%2FSsQzOBeQo7yIp28RDWZvH5rHscVq7jvxlGBN850RRLMyaq1iIt2cSKa%2FBRv9jhC8PFPo1F%2FDA8mGZGMPT35cQGOqUBjHEeADxXrkaAX74vH85Nw1zXqlpoq%2FddxZuuzt045iGMxG8foN7%2BtVkQoVMAgApVOoni2g%2FyN2nesT71n%2Bor9knxYKwPkVt8k2nImuEC%2F%2FNIbjtOIQWVo3ZLLycM3xpaTpOYphvMtxZaQSqRLV08JvMDaOIhViH7bgXGqZSgHKgJQVPXFJql4GhfGanW%2FIMqZ0OLBvXlVjofNXK7Ybk9oDc9I8H7&X-Amz-Signature=a5dafbea72658f16b4750197d674717ab38b2e485057c574770a61df9b50fd18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=cd7797481a14edae488bafb715ad979797c6e9092e88e6f9c556de90a21a4bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=46145b6fb43af62c19d4541df2f7426709b07cf8d7e4b6a3c9f7120ef6742d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=c2f5e918c951131686aac8d420cc67f35229fe3e134a923768d3a132008ec423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=972b34960ee10ebf823a7c75d0a2aa512d706108e3cb6b3f5a318106b69f3fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=bf424197594f38cab5b3b66198e5c517e20e0b670a896cec0a0944b5504ef057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=6314f8e9477dc5217ce491a5fcb4d86da5213d375a54386942628d0412215adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=c2f5e918c951131686aac8d420cc67f35229fe3e134a923768d3a132008ec423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=ba897859324acf535b96db97d0bb72fc27c7210312c01aba0c5b864b7b77ae28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=50bb80c46306afd7065c5bdad5a26ecefa1c75bd1f551e5ceab81a0eb42762e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JTN4H5B%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLxk1iL1lPuKAw25KCWksK96hRI9U31BEvDnEA4mw%2F7gIgT8CkIRiGU%2B%2FM5BVYdzJP5%2FBTcqCs17ZGFfiyPReX%2F8UqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaB8OLX%2B0fVrtECtSrcA7YFxoJCo9CqHusy4f6Zc7xgB83DshvLp2lWDKIeNUo2sq3n6snIOzE71lrgsbEuXqKt0ztAI1AlhwcEDmhXrFnrphO%2FlXVlH%2FQfQcanZ1JXJ8bB5W4fw13iBlqVL8BRsR%2FzGolpqXuSD5qPWrYqK%2FH%2BpbUuwhAYgunpzPE1HDzcaBXXcdLUAzMKB%2FSujuTYzougbvAwug2lSOLBd2KHB67ShrWnL6jVgWIQrnVJbsRWaIafoEdj3rz7w457gCv0JoKVnWLLdz23HV9yxhiIHbPihZwc14dd2OQlZUzsUbnbXTi8AJDZ4is0p10XJmj%2BA8IaZrP%2Fo%2FnTZftm5KKMEWVmdfbRizaRkfoonpjN%2F6A9i%2Fhcfv6Y6v%2BINQPHCvViwU%2F0WJvicF9W7Wju0u0Rdmmw33y5wtjNtHX3FjObYWvUIV8er3z8vdYbd%2FDSF2GYIz08hgKnMqbjL9HM1Ry%2FjHPqOEZjWp2AeS%2BPoItgPDgLC%2BDI9rZyNmgMIvdkm0gbXyxszCC1qRshEVnEqFtpkCoccRurCowpmuv1fM3iKolPvdUDy8lDWGDDN%2FFWpkQ63J6iO0wBLI7uJpuDiz9iEbd%2Bt0UZ4KvAo2Eirfcq37WuQPiVnY462glpd1pfMJv45cQGOqUB3D4FV1qcOhlg%2Bb6GTxnnPSlMM4UCpcdrN0wRldXDnhuuPHaiCVtQ4KSVAlaXnODrGks2vLW9WMDJjnEFd25mM0QwC%2FpJDJ8LitCfLYvCBDfUTYD%2FB8SExZfRxbJqBdbY6FLo9kaNaPm8MpNCUZiQrNwt%2BngzJb8SMw%2FInOMqd5H2Cvy3FOeloUuhKeesDI4V65mEeUs5RvKzMZBxUd4MFgTOxp0a&X-Amz-Signature=6e7e3f44cdf08b55d7fc34d0741f5f5deff11ad33bd037cc8deee25f6dd3a813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
