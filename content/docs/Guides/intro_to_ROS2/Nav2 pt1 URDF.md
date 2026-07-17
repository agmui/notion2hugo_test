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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=915ac98d45b691f5807f96be90df0b3646dd0a81d365aeec6a28c0eeea1da7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=96d3f1a41a76e38fd88f46c37a8793cd2209b2b0bf53b18e6bf3c47bfafb9f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=504192a2f22a68d5637f0a7dd62344ef32a2a21e6d9ee943806ee9b17cfa4c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=53571ec7c08e7ec162bf5c2daebc38bc0b8a98f323079a2089061b6be6b01d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=8ee7c6c7e004fc79f7aa8d22803d3ecd98097533b49d0783a7239a0baca84500&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=76803a677a69f2822c36af87d72cbe1575102e2e1d35ae3bd0237ddd74d58dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=10f7cf5aade0730c3a90b40173e7a6eb3719f35f3c0232f80b61635cabc5712d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=d91ac26ebd8cc09ccbf2b3baa99f326c7a4d53f7285882bcfd53a0068518463f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=e61044d7633e59c22a44b40914568ed57c0afae8a3897f41e541f423645c5ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=9ae156e86b74abb90805ae76a4d54601e8bdd7e03c5d15b21dfa2870aa6c9645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65RUQQV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDELXOWq%2FiiO2Y0b9tYemQ5ZWuqenIotnlS%2B%2BQ%2FeJO6ywIgeoksfLN9B%2BzOAq2PJzXafABAH1L1YEoZoPs7gizjOdsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDP%2Fwj32pGAYtX5lMQircA5NAYrgGUppL4caQeXcsii4vKAO7wBhFRdAVUzuVMM3p1HHMTiovQGn6JU%2F381GxpQQlDYiVmnT9fjwiZFXOUqEawHqH3BCxssJSufct3U2IiVmmk2gSA%2B195HaUSB3B2aqeB2qo9%2FnIHjo5tJQH28LaFuwMe%2F0YsnD7VaeFOYpfblCOY5CIvPpxdbSD%2FI0fZ%2FPyhOng87gTzKnW%2BgQLtuJW2vDAJ8JHrPSJfYZq5ENIoPNsVhPjMbrXyey9eTb0oZ4YxPzBsd0JFEgD4%2BJteOKBSKPXRh9qK%2F90By7MPg8qPF8Fke9lUPG0o%2F21fnxexPfDXqgerJw9T4ZP3JFYhKftugNas7Oh38O8a5hCRZ01cbwcmz1ag2VmTVLxKY%2FdpGlLLYn2H2F1Mh9jPv%2FfIGF5OntAxcTn1ADMZ7Sm1XUjASkEvxolvAgJ7b03CEo4ZpYx8puDgJsy8AWCSktgqyXonL4FDzu1jesSyWW72A2i1g%2Bs7izr4yHV7q6Ct6VguCecqXbHzh0k2cliPGxFrWXkSlWnHzb0esLSHjgwe8cFXD0lsknlyj5uhEqbZ7BGGaXK48gJWJQQvYGfyfq7L4Xg1LXsrZXVcFCPDSZeBBEntIPDmr0QKL2iSYn8MOCo5tIGOqUBVOVbB3YpCK9mUcu%2F3FGt%2BoiOSxHs0z1RtE24BFdFMKuUbJBqdRMAhpW6FOsY2j586WLbIiSpq8HnZucCjFLK6I0mkuJyXCWP58ZDjBTS2kDRsy24UgXV36yDCecGRzzUzZ8DCpCGD2wUnmfYmCtjV8%2B4eHLqnIWaKS3TNszN8Xuu%2BWf6LQ522r4x7uTdM%2F7JQcRYY0BWtfdIecaUF4yVSHM8Kcxx&X-Amz-Signature=284cd838a4f183514e0030eb8fd509da9ed71349bc556c00333be2518a0b234f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZIKH6Q%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJcHDqLU%2BPJzwqZt5iODOCVqFIK5dNZCSIyzeSODNbPgIhALc8zXbau14FN%2FwF5Mxu%2BnYxGjFfYnVdlLEhecOjs85GKv8DCFQQABoMNjM3NDIzMTgzODA1IgwsMdKMtHAfPidaLd0q3AM0Lt%2FKpADpHUdvaHdJrNs2p9kNtvdD1IjJ7Bf0%2FoHzG8GlJpCI%2Frj6zo1F3N%2FTwm%2FP3uqgttP1onCACS4CFtrJ6Ze4gvg5UnwnphldRhDsk9qzBPDwzR8q%2FNXrNIhKGb9qivAybR8%2BKBuw5NrkowkRFs4wTyH%2FkU6BQJZ5mlJNGNRQqaAiTlMGBSBQNA12VK5%2F7f8DP%2B%2F5EC1%2Fj27xWJZMAgdvgm2qE%2BRKpiykmE%2B6N%2BDyHuE6qlMqEs38KaQ3dU5xc%2FcK0Iy67R3yL58xbAj8T%2BRH7Zjlzy%2B3VdxlGCjun4MC2sYGlSyduXvpMi9TlXbBPAWi4wsrOVMmzH9YB8hGXg96orsd2jbquV1tDQ1ENkbZv3jS0WqrTIfP5YZflHP9IwwxDPT5Pu4PG0V7qCc05MmbglDbxA5onkpvzuByUcEuS7hR%2FuXxdPgRA8%2FI%2BbexDCvyg0wR7RohGdPb5i1i0N6lJfZT53MqAxovRvCY%2F8IyyUoHRgEO2Fv0r96wllts%2B5TSw60k6CvktbhKNZyPkKWWetEqisUMZlcDyGpJKEHnmlB6hb4x43YXHBReA72dyQ4JM0SV0CZ7IGK%2FjopNHxF%2BhM7YZrC70IWO2eTT%2FqFtt921bH5%2B0bkZsjCSpubSBjqkAbVat6j7Tgi1OnNaLG77%2BWjRMCzKdcZgwSPvSClPdKc%2B8m%2F0fsRQMXuSZGEPGM4tXITTZcqJ5kNTASF75qt2Rfjaq5KZALacctke8Vlqa2fwjY8mFhBD4H8qw%2FxCy%2FkuSHb%2BOWfTQR3Ji9gZcLQ3VE8e1Vxj1m9am39mwe36X4qW31H%2Foy5BYNXLwsvcMxDqD5fDWyCgpdf%2FDe7x8BSHrshOoEmE&X-Amz-Signature=4b4ec3d7c45866a9ac099037791c100b1a6f1a797fec33021dcd2690b17e2f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMNE733G%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGmX3eUDS8ojCQe%2BR4D75iA13LGJritrNQdGIIcUImuwIhAMrTJiMxRS1U%2BsjHlQVbuM5IAPkVVvmcGo7VZWlwx6yFKv8DCFQQABoMNjM3NDIzMTgzODA1IgxAoUBa%2FxewMUOEJYEq3ANGrjbbOmySKkIYlFOvFNJ%2BUl1iyANtBLJC2%2FoCZbbxzBQPrySec%2BC%2BVaCPn5snXRNkSHBmUpe0PnGCEM%2FKbVZp4Ioo66Ub%2Blo3c%2BMv3ipsmkxNkYkpCqAxmHsLTjkQ1VppflYTHtwVi20loSK5oTYNybNqkAFERVD%2FPFaAEtHo5Sb%2Fgqj97YRw0FR9EygwIHtXSFALBDifDChg9O%2Br8FShDWbzwwn%2BRm5tVqYVwr32MCaonzOEz7Ih2KfCz0QPSNGSRwz0IVhX2CGpxh6CRtZ0mte%2BA2psG%2BP%2FS%2BbFS9g9VEyv%2B871OmBv6zX%2F6oXcOxg4bV66288LRkLrgGB%2Bu99BVjk7VvjUXI4xrGs99qHI4Ltf%2FcbB1bF%2FHZdH4ALuCET6aO458UDfzWfI1453mBgu%2F3%2B6zx3HGTTOiNWpffp%2BA%2BK9CcVhdjen8mQksiDIT4D5nsq%2FLGSSNxoMZP8R1z5Hr7xreaNbq1KVPJhuvAO71QCZqbwdcwTopJxpQHlbu5RJ2AXPug%2Bi5vSLIa5Kr6Kk2nlfVtfzqJRQdSxt%2FgbIOEi7Hr11n9bL8wv2pG11Ah%2BsU9uwdLanDnt5UTeumEN3UsH79zYybr44a%2BK3aLylUasKZ4W4%2FHIHeCPf4DDspebSBjqkAUuwnzGOCaaYhtcLJPTCKbWB8VzlyWI8By7IYPKE0Ah9L9%2Fo5yNXIIN5IsYM%2BulqG1UAzK3Xm7s6H3MhxQd7BZ5R1WrwP3E6fJYU%2FStO7jTa1ztuum3nblV2dyA%2Fft6NCBU9jG6IOOccfvtrQrllOivlu7Mx06NUdOayVSA97m64lhPuqTfXjz2bs%2F7OjMp%2F619cHcX%2FkXux9ozACyaYZUm%2BIN4q&X-Amz-Signature=8e338765bf268d30c2f6e9fcd6b0cedb4ac4685f54a43cf901c8e7c0e1d25fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=8ea9a63d8e925e4c1813fb549d0eaf358fc84ae158cc02b1f6270c022bc80816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMM4HLCV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1StuGJhYpGTosixj7rrdVyFFE%2B5dBUqigyir9ANRwJAIgOmwvIYeC6RHp%2F2zRJwdRTBGrMYd6mlK1qybIKaIhe1Iq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDGe4cdjOyuZ5PVIUiSrcA1NfmDdhqBTFN7qkQdJKucsU5uGp5eZU4Pfd9p4AmGHaWSfrfzKHiG40UGfTS7XisA3yKyEG8nZ7ZVrMk3lmQS%2FA9qBV1Lo0cZW7Mc41aDtD2cfAI31bGwOaHMglM8MJ484FWfaRhgyZbg19XjOo1SWfvm5OR8hb%2FQ4SHfRVmnksVQGxSR%2FMmKO%2F8ZaiZblMMQQkuioCdCKw%2BHw9Q3Z0%2FgYOkkkhsVDc0xcmfYxXaoGIrRTW8C0lKF5NdE5x67PSwgSHcdL7rY4LespdMfiZPqIg4WSxx%2BnERlwxPw2P%2F19Lmeyq2IenENxzm3xWmU8fXG%2BIFBnWju9P5g2DEMQAoPMbr7YV66GLh32iDGSUEfaJ6Mk%2FHHj2luJKTofhs2brcJg7szcApxVOdNjgkyCaQPF0MjYrHhBPMxGF14jOpiU8%2Fh5f2cb4cz%2FGLGQxCc1f5UoZtW9FSnE3G7rx7L%2BcGGx0bU3ji36%2F4hW%2B6XL1lwdlbbUZEbLekE36WX%2Bro83MeDLIdLXGwYsHEuQKjFCDOCaqFH%2FCV6FNbtKt%2BxXymseHu7qBqbe%2BoN2iYE1BKhrp8ze5HBo0JXC81gUGi%2BoON2CRy1%2FpdSPbAQcILs32YJQzD3lYpCPfDIbXe09BMMPz5dIGOqUBaAo72ByIjLwfOvxcmdav%2FY3vDhXkRNKsowfq17bKhKz9vWjCWm3e7oyamto3%2FSqNo%2FVvvRo5iMgK6%2FN72zXD40e5FrC0mAIWpsQvuMB0hz4C%2FwxIQYw5U6XXOua331krfb6ee0wQCuGfv4EoHpI96QBq5QSHA3%2BtoP7uUlN8wPGsfHelYPW0wm55vFMCH%2F%2Bsdjx3fvo4wyNmYFJUiftSaBUoCjv%2F&X-Amz-Signature=2f2adfc1e28db2e3036486596434012e8e912d7fd1ee55afedd00d1e4e192955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=4254cdb6efb717c5515526859e6961b517cf3f96ff24754c910c4075302b1922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCHIVINE%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDosz7KYdqc%2FlncLm3gxNz87YZHGufimn0cNTgnNLH1QgIgVL3j4jDiw0M8FZekgZbTc%2F%2F54jro1kXv4azmNRa%2FXQYq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMxNIw86rrT3wzguHSrcA2QJAGKKD%2FkzVHMYeaM8tMqWbU6SXic4G1pVjKreBeKEl0wzrM8efiCEmRue0cORyjedQOpk7k11crKssFpesk77cAK4e%2BHLc5a%2FjbzYniH8CL6mXLcQ4YgZJEYL2PBlSXzXlS2rtGvE59w7krscTgYNHdhYCbEGG7k30XCY2HEnhVUnkgMqGFsf6P5F5LLZBk89zhJIvvJNFKCCy4Vs6IecQnsVPaCIuPce%2FONPXl6ldvq9%2BBds%2FvTQjz7LL5TC6m7u4lTgH9%2FcZZM6XkDfqsLWRWWjSbPhgA%2F6ZNSQ2RjcTTbIBxAliGtC9XXcU3%2FUpJAWnzZeCAzwHbIbrFyGdENbJYOshI0GUoxk1y7Ef56enBkhjPsnytvkUnJ2t85ZL9hLMVC4k787KGAjFiqb%2FE%2FGcSzjYRLkEW9MYDr%2FF0qgB1d8SLIFIUU8rSxYR2uGbbqfFGjNSUP%2BX1ENN3RJrp9DtnwtlkHhOqdUqKItNbp%2FOHe%2BvBU49%2B%2F7kJhT2hyEc%2Fi5UBN5%2F89%2FQKJx7kupdbcC1QTKhb7Rhl7jDbd8xUIYWuXI05pKO2BGYbUOH7bk1Ktu4yh25B%2FlvftG3gLLoIfLcGrXcq53hfrrzvJmln28DGkktyLbSWZfU4dGMLum5tIGOqUBlJgM%2B8pMqc235xcF911WvKIrNf0xNwBUUyKvi%2BYIVWz2qgL88xqHPaQ041T9oqTNMLU1bj%2BAFTfV%2FguaJb%2Flx%2B0ZWp%2BPvx6Kjs47tGU8zB9ti2G3bND26NBOvBwciLgzCRqLeewueWY0MWGARGoE6JOr4NqsSZKqKfemJ6ofdGLELkKTpVHTsbccMMvAMju7lgjafrr8jma60XJ%2BibxpBsPgAj6a&X-Amz-Signature=de4f97d6cda79377ace36ec45e16a883e4604e06ca94691ce4ea382379d181f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=45ca1224aea6b24cf171b22438b497e3fd39a4e324045d8d827d3cb5deaa4194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CNARAUU%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FhMWCbdfC6ZVkEg8l%2B%2FvLwakM3OWzgJV3O0glDDwGXAiEA0Y2hsUxTxSjz1kJzZ7ZdZ1tgRxjW7N1Owo%2BWef7x%2BhIq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3hjHK1dZV97flTZircAwFlR7oNSE57mqWmFMrop1zcr%2FgK8DFafA1Xihtn%2FSdEk5U%2FAIDqQIxkhQmsuxgcaTkpHkIlmyz5BHZx%2Fnm%2Bdp7oK6NY3ofG8VsMLo%2FDW5%2FIG4exRSmWKgZaAW0J0reT9PSLcNjgHrpMYWZpt28eelaIte9BPT2PEBvOwHXd08lEMYTTRWMT5QaKydlc%2BQHz0e6Jhe%2B6nrxKEVlYRwHveYK7JykxiGcjA2m0mbCk8dZF8Jg%2BnGTOXhQA%2FapWUKLKGAyU2g32UBCMFjBpgN2tgARZ7v0x5uG4u%2FbHq9dqccjjBII555ReQ%2FCbSvLe8wkW%2Bh%2FZ4LBQmXWP4VDCgEAKZQVUvO40es7FgMpWhMmbC8cmhlcs2HFuX3ZEj5evHylhBnbV%2FoN2dGWvqaOkwyXBlFRbxSLF4EmeosZHMpegpjyVuKtRyPEQMn01iesAV8ONZPyabe9lXP85kTAG4Q%2FmL3KgYfKreLhC%2FWHvmN7yFHbbGWZdpzSN5zzSIG6%2BoDaWoT1bwo8yGJH9DzN4ZEHegO6PPmqFd2EB9b7z6rQO8SX9MawuWh44z1Hgh%2FOW37TOxoY1B7bWxsMYOMdXYlt5I3F7orzyWY60AtQSnFTgU%2BChNcSPP9gza3qBOxhaMNul5tIGOqUBOzUjIBGpsuZHyMGGHK%2Fph%2BBx4ARgDhlLTaRMlmMRY4WyXOQwjzXp0wIkXmXEVbDQldmoVX4SX2g0%2FdcctFTnil%2B6rH%2FNEo5PGgBbNYwEatQlxNslb%2Bnx%2FtuDIDPWfrF1Uod7hnDDKiZiF8Xkf60WXgeZOz%2FqMDZ3Pio1HzYCx8lJfFiF%2FDCyjdC%2FpGBG7%2Fqqv4fCZlhDgpGTuUpQ4itc%2FY8%2FHXg1&X-Amz-Signature=8ab2b31f4a9df52284f709217d393c74187145e8364e91704018d7f2dc5a29a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=ff7fb935201f736323962c8d885a38f9e6416692bb225457424c2e7110dfb8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4VCWCFF%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPPajmYgBA2YB5xhvz2Si6%2FhbVKBGtaaPefKdci04u1QIhAPp%2BN6krJpTIDOw9r9xdXE4QIGqh%2BLiWZnXyEES9WP%2BuKv8DCFQQABoMNjM3NDIzMTgzODA1IgxcZTWGoziZEJB2HfAq3APhjk6U%2FGCj%2B7nXJo2FmVnJPKlNkzotvGuvpnq%2FvHlbGH4guu%2F42Day7kSA%2Fo4uRBPqYN69sTPcNYqdgJ%2FyvvQhLS%2BhafG7zunQYL8d%2FBpKfHuGQ%2BkBHyg5znj9XztzbqHMtcaEDLdSqxpgwE2oc0mzHY1uwvKbvr62xX2igYw9yLTj1A%2BLCWyyJQRFVpsfOscegHgHVjwkf4ruump9dDYf9dvB%2FZrndmr590hV4gpaT9%2FcgAg4FxktsEJSkwoMwaCYAXKSDXatuqGebnyeIO0Hmy6eLn1mrOe53v29PyefWkPYD3TR6VyCEQOVuJVml3JuhI2L2xI9MDGVEeRkPMkN7m%2BWu%2BRvcqlfkC1Nf1N30dkEns%2F6Zwl2PM8HFTbvSJqaN3agB%2FYqle7XtebJgFj%2Fc5FW0dcF%2BBAjJ9fvRAv5eE2cCxe3ng6G%2BbDE7b5jKYegaqD761jCpMemyyq61JNcl1IG7I7xXVCJgn4olGwqYlTaCmaDqNgd%2FKXF9geLnZv1K9GdvGDFqHoso0LhU54onEJ6C4GRejwPd%2FccBCwBy%2Fhum41YtceI2y3kBto%2FBIKKyT0y7y78GQPMZZs6O3IDSwHE2WTBS5sEc%2B%2FxSzPRuXFb4EuZ8x8cfWNbnjD0pubSBjqkAQQjkQYY6JDoeDAZ7Sk%2BYMCtD1kyWwoF07VKj99W749TC9H0jq%2FfP3ZOrvr2uNUKvM1v2my1VfUrPvoHXjQQglXnd0HmMr5Nn7cVhV8%2FEUz2xxqW0gmvhlgvvrmu1Z5erA3UJRqfOy8t6JyyJKbINxdsYCJy1zeiRGJQ04J1l6GoUTVkYQB8TqRzyFotJlK0grv%2FNNlPu8vqGu9lavHyXMpNLQef&X-Amz-Signature=f15598fd8ff29b0ece3467fd4be6318291f93976a3e539de48e228c4a1a7b92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=45a76a313cef34a23b008ab9a23f53e4dac033a5ad0162700093000e98d689df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3YQ5KHV%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhx5olkoM94l8mWXAnIFmzQ8syGMJLOn7oEaCJlTgW2wIhANqEFPKpxb1v%2Byds8o2w4gMJvJd3s%2Fz8iLCfPDMJ6GXcKv8DCFQQABoMNjM3NDIzMTgzODA1Igw5XBytePDgMaxf1Soq3AP6zZqh7MHQOHDwMvDPDqZh74y1mGQ2S0yFem07UkoL9ZD48LcVw64f6Cyjb78f73X%2BHWAVNQZ1eFNJQ5vJ8SxF1%2FmTNvHe2v5wN1MHnohuBzY0sP85hWcy8pTNcMLN7%2FXyG5Z7BFoIyZzWiHweYkEn3KPg2N7aR1yHMm0qJirFkEMPseCrelfDOUkwgNvwVjqsYgTfdZq5IRz1bxZV9TDY0CPqfCLDYwXt6zU99AXYECYIIU7w6RhA5WewgS9QZ1QCBJd7n8Vo7MIAdo5yreMnEONPI8uaK1grwRy0624%2BkQ8NXntDGmxBJyGl780fzk9KDgKv9nw%2BmxFWznnIZaQxnwKg8wfFPTRHwTVsqbABpiCSUJ%2FBE3Ldx2EsXunZShneaRnJlNsgrR1lxkB6LFOeTh%2B%2F76enc1jx85vfxa8iQwQhn1d94sXRNmVvF4q4gQ%2F1YJSuChIxOKiHjoEie6UJp9Sy94Hdd31jMV2oH%2FQJYvJQRSX1v4WLS%2BdxLJN7mDARRILVovnhCAzewOz5jX8Qk1EeiWtOKZszVoRedhnOr2%2BWcBwsYm53WeIceazQifJ9kySMPoogYAC0y62Y52LWKROGJ7MhPG3mXB2ib8SDdvVXK7ANYpRMWBPyBTCbpubSBjqkAVi1pBP5ly5Z2a%2FLeqfoRx982a07w9NBBh1s162GIZaInc2yJ%2BM7fNSkbzxt51GqJHMzukz7FFTmj3bbzrmhQojDfdOSVO47bcPq2Zbcs5V%2B7xu5eziaDDJw9%2B8vWjGMXxvl77fNlY8yrtlxQSn8WETLGuprL7JVAb0C6thYX8Len%2Fl1GnKxFvGp9Ee4EHg%2B%2FYMpZ%2FvuzF0goEkUOhuBCpawL%2FFc&X-Amz-Signature=ff7cbb82fc8c684e59f4335cbd18b0a97b7d48a44bbcde2dd4ba6bdf3a9b103e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGLTQHYX%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQRXUkQS68H0RMZryOKl37bs9zPtSUwW1Rh5HQ6PuRYAiEA0GR9Tc13z%2FMxiMyW0nkT0SgXbLVaJdfvWezAxlqauV0q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDENEYHsW1MdWp5%2F1DyrcA6eJzffCkpV2Rw2c1517kWh4PhowG0vK8mRQJX9u086qil4r8gzmlr3%2BX%2F5kOD1UIWISPa5nHI6qDpaK79WJB%2BTSSx%2BhekaOJRGaXWtaK%2F1EgX1zK5UmOFcjO34G6qdY8AEvT4A7US71ncxb5l83WlbhrVDQmnub3Ulpq0ZemUEdUV3T2Y338lhhL%2BFF98rmMAfavEcFK2D2mJQ%2FGiQdkdgLo8pXI1EHPcXGkUQRVlYN7KASSmCgejPEoCq60G3LIuh%2Ftgg1RAJ15kQ2qqXFtDOeRjskXW%2F%2BpvXIURrt7j4XNJaAKTFuU1TDSzYh%2BH5cPCr7nQbPgcjj9nqUmS6bU7Jj5Mwsgltnlp%2BjI19smYJIwJ6CAvJMrmXDiovJQFN9GOrx%2FD6qxgKI7Hi6VpSwaV3Zgc3jyObLwZJkheacnUPluuqhGASQyqSxUzZs6YH39blVUpkyqPCFqukK6VelazgOOHnPva28xq3rNe8pp5VkcrZ%2Fd2TxOpaIPyKWEYxsR5QOhf0jxQX1vRQGM5xdMRntH6bcUzbLB3NTjF0MNTkl8H0t6JKYnAbswuHpLJQsEfky8f4CO1sqJs0s0OR6I5NjTRUy6vjNRT0Zttb4X7XVEmPDEyLMy7o6bqp5MJOp5tIGOqUBjhgeEcSDHFSw83ZYHT3cDxdRrk5t1kI1lLcB%2FGGSTjD5btQ0YRNtHY1Pav5uYqyCk6h7NiYtc4aSe3vZo4oZMWeYrOjoZaBS2ClYQ1NE7Lq4iQTVpACx3EDIwnvI84713YRsiUrtde7BlT4fNHf5TZ7BxD8UfYx0vS4cWIBZktDiA3HVYuEURPlM8ytScKdN1An5bvAo5m%2FEhU2FdcVgFWQABRGW&X-Amz-Signature=e38b4c37c7ac73a6e3e90fad01db5e54de8386e9c6a8cca891a86c421d5ae9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULBQBTWQ%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTYDW8gK2mJzgVYPcbvXU8QW97I3lp4iCPkT4U8wmh1wIhALf4TTwp3KgvIz54uBXtl2xdASf1YuAwdED6e3FM6PTtKv8DCFQQABoMNjM3NDIzMTgzODA1Igy32RD3D3owPmlgq80q3ANek%2B%2F0jyVXa7NmHOWS%2FAlpFxClYS2xR4noPucaMSBB2xXgIcuS1cy2xzVgEiGrX5RJF5%2F8aAkLycO%2BB37pDQGmpdarX6I68shNhJ1nyKv9Ti8Q9n%2BoC3hocbIYEh11%2FYtkRPzqdwplzJokgwMie%2FB69B1M31gKaiPH8CvpmtLyuAHVFLwm%2F5zxVdGrBJLLpPjRNjBZnBqIfqRVyuzxHAuTs4IapQtx%2B1e9CfYyiJQMbWWzGrb6LUaZVW0g1p%2BKLac6ZQDp9u11cR1sXRsExan5Kb8kZmc%2Fmgy%2BpxmIChgfw0OeoJa%2Fre1I42OmoTvKSzP%2Fy9N7%2FF3QVw%2BNgucD5RS3NzFcdVIe%2B%2Bgs0BOBlYPcmyFfVUphKTnfRrpYcqwucPrR2HdYiQrjhUBeK238MqO3I4oyOAfwP2cF0dTKPGxRHeZvsW0CQYrp3FeD%2BNLnVrvFif5ap%2FJdZeDHTwsVy3LuZDbMJp5gr3Dj8PGdlcjT2LvxpmvJKqDngUTfX0n3Jtdm0OWU4kKciVHgMmoLLOmKo6KaJ7lW6l7ReCUjQyKQTm2OL%2Fu14iWSGws1Js6IH2ViL2zzsrJBFPZiksHSgJKQJi5L%2FHjraLW5lKlvJDtjM1%2FaMWjewpwGSaqw4DCCp%2BbSBjqkAcmNvOI4ziURKye3KD64V9ih2tB51xDmAfHIT2cBltcfM1owXzThcX3zgCFTa0tNTm5tsJ5EqZgDLh%2BcyD4qLaTdCOdK0P%2F1diVtIcXRHCU8SYNn0okFzAyuV6SHo0BI7U8aR9ZX2jqf3livOhSgnBjSS7HgySr3eqkLddSk20n8A2wE6GUYJAF3F6jV%2FQd386UNR7aCukihmpm9287J1X9xGDHx&X-Amz-Signature=d43adb4fa5ccfe0942b9a9304e2c94c04db0bbc1b224025ed10ac75b97551ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=b2c39469ed2255f050e8a08352dd34561059657f2ab9827d8ec675281727b502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAP25V5Z%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzg2Ik5n7fHJVgw7AtM1FgMNFqDrwKnsgzSyKminbAwAiBq2Cd2lwklKZOUUqJj%2FdmKGLWeWGEfHOYL6LsPdl3y4Sr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMQlh3UYFBQg3OvnhHKtwD%2BMdnMCWV27oYkoSvk0K%2BA1nn%2BK7hAwBP22AnT%2FAdZ8CsvV%2BDqVWsANc2j6Vaz4Ip17erFiMdPHcECG7BI7J%2Bd%2BnU2fe1FnjrQBezKZVdATZHnaWpG8KLWxNDJoZPc55JVwu6bGbr9CoiLnmjfhmx%2F6gnIkQrnPm6XpGg82%2Bs%2Bwc%2FuYeYoOcSearufmD7szsVGEG5EDuLMW1uTz0%2FWy5LSpdbzMVQFktWwh0gcQRbtL%2F2HP6ihs0FmqUUcEOybTyfbYVX9mT8SjlVXYYyVPeCTKD6Wsn%2BbvbRFy0vuxtkE0nZtQFVtMohAFV7IGyQaFc%2B8wve0Qfv50fnYVcuqd5sxqsqBXOdEaJ3uYK3Pp6Lr8rdmIkiEd%2Fh7jDEzUD6AsV8WciMTUd5kJ2YmsK8Llg%2BIckih2bXLs0na11KkI1JRNErPjwkq340UmcpOZwfC5wrjgh2f%2BQhfEryoZV6HwIwevppHX0Y%2BiX%2FYOl30CsPN5a8pnTheb16Fc0k3dBgDp74kJD04rXK4NlXNx3VdmBlw9GNFifH9knmenTjN6TC9uJNXaK2N%2B90Xz03mR2h0fSiiNIJ3EcPR6nuK9VXCbfpdL%2FwQuk4jY8FOt55Ui%2B%2BBGfiWf4dtf7STOorQkIw8anm0gY6pgGb4i4p7OYGfvbSWZKgI2izuYBOQYI2ssdAKhQfJTLeXz7vqypTUrnv6cObvs0t8l%2BsT0HHrrXYK8SBoTJgCEzSnjheOoiVlfgSqxeMpfrTXW6UdG%2Fwu3MlQzAnxafV5SnfrX95EaKoEh2EIPP%2FDBKGQOHwMw57oEKuwK%2BsQ7Yzgh6Y0lffxI60YnwiPiGw7cdXO1q9jp29ht4DMebAgRY%2FnfQpI%2Faq&X-Amz-Signature=2da21f33ecdf17b9d7df7a2e2884cd6a3d9e6ff49fa735b1b9d71129647920b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=36f99069e87526e82a1e523223c8b3e84176a131a02deb82ae33ef7e99454315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=8cc03f7e5dd80a0316fb35843aa13f1cbf7259df6b27a31b14a96ea87d93dc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=8a134c70bcc840fa377df6a7e035e294f91e40a641c06dea4c0ba834811309cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=2c5aef439679bc660477fab350d096a9e8684c4bb836b265990dd59b1e9186a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFF3CUDC%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHDmtV3o55TJp04gih%2B42snK1055vqqRH5YOhmtGSTAyAiEA6yvuWDAiQRiRkGIZuvmYLOGfKYU2DHdjTLOavNQVw%2Fgq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKejgoTeBWZ6SvPzDSrcA5wJoWGUmTI59kqPLBfUKgxYJPC2FEawP%2Ff%2B95QYnXRpDkmqs%2FcwBI33Gbo%2FLl%2BEykk0CuH7PvCQPnke1TY8L6bpG2FCHYiFX%2FYkqDgj4dam%2Bd5exMQb0L0ieJB9aUORhb9A6v0Ebh%2FZ1%2FYhWP5NDzVPdzHt3aVf1u8BjSMs%2BL4zUMbe5n76D2LzMqLm3gONqirsRp5d6gSv55BNoq78uxoWgDDSWXnanCcgPHynCaWbX5snD5eZuIqCdBKYMlFsgHbLP%2FCoQodidH1RfYiXxCUi82jCJ9dat6iFT5GT4KUE%2BMRbP92z%2FMZ%2FNnaQsmkGgJ45UR369xO83vmw5hovRsPy0Aqf6NnMhpIY2IBGm2afLxDVsgTuhOSnDLCAJrheVU15kDoxOvqudyYn3rzCbZf9vUo5rppssUxlv67rvXZ%2F11uXjAQwB%2BLNSGsJPVaLlzqhu9leUEe%2FQml1YYgnWcXTk%2B%2BTVV6vhDPyZ1FMwG7Z%2BgTdIE7JI1EIqyxsLCrT71tFwljzucQBfdwNIfizuHopbrcp31Jp50PENqoUjV%2BmEr5zCf20t7j%2BhXidWs6G9UKWuIvsT9s3Rfg7eIrDbca2zqSYzDkjYztzNQVscpIB64F1KbxrWcICZLueMJum5tIGOqUBD3ry1rcCZzM6aZ71%2Fb7PbWDdvdxYGPAQVxH%2B1zeR1MwInxo47XYKNtR1gQO7JGfjcWVomEmTdA1hCrwTYE%2FvoEMPkzTtIgGjPCQtJlJPGV0jqp2BINVxrl%2Bg%2FBH6KIdUJqsIrSgK7JPrVZWYV9aIoSS5CMqlITFj0GFIJIVpDW3qBPj%2Flf65wEQhOEmcVeTu%2Bf%2B7evavtgcmsMFqs2jD1a0R7aB7&X-Amz-Signature=7fd44f09a37d7fbb0eb04252ac4372cda7ba5641e25af1beaeeadf31519793c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=9b395b65616c935f64d95ecaab7439f69765f47dd1ecfd52fbcd3f433cb048eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=adf5f2d593a96700b2f209252d6ac524c8e517cb89509ea0ef3f0025bd755306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=9af590f167f730ac21e764480815c6c5e41415fe6a5db6d40d4a56d6d711787b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=21c7a6d7257c67ec1b5360191b12506529637fc6c8a5e4d192782b166c79ea13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=5f9f71e05109dcf82a9de31a1ee93607b94cc3f4d0c0e63b68adea1f2acb711b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667D25LNFM%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxBem9aKB%2F9xLXzeXE90C7HcEyUY3nxhMgl8Df8NJXhAiB4CxNk8dgF5sjzgvoN9bXBecWv1F3wKNEnmbEJdNBtoCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM7CN%2F08JawwVt8I3IKtwDMJdAfd7KKpyDbNj1c36Kqj73camHVG4ejcMYtOCevvCau44P6ElfXiOBhtruVRCLgqfWT%2BVvPgt9PRIsewQtYGFbDK25Z9R1gUc7jbW%2FFmHksHktlqIxfQIPjsAyFopVhc4CUHP5HolfkzDlSovgs4%2B5SHFDYdPV9bBxkC3fzeNOXCh60dVTC3ckVgkh%2FmQIb5yVDU%2F%2FQjdp9i8EahUjORxJCCLUcsKMd8k8V%2Fo8Md6LrS%2BsBEaxX%2BoNIJtgfYtU4VLm%2FMdGSLF%2BpLsE1cb2XpZsQWzJDdvc35sSFbqam8j0ev1WBwCvItAMpIEri510kWfJhgNkYsAiK6E6%2B2m9hntTDl5Iy4tZ%2Bq%2FMDHtLbcl7%2F0evEuiiBC8%2Bl072vydOQTaJibhyyC3RaEk0I1erYVwnCQo7StR7AHDH%2BXnaeOXRIf0Um0SSLRXXo%2F4RvWx8gnPoL0OCRo%2BkPYh5iFjmdIG6LOUAHdkmGeH71DI5s%2FoXijYDcu6n%2BJk%2Fhp%2FctCTtEqqD0DCB22SwtLfZcahK8M278TmTvaJ3nZcEotQrzHkUVrdmfJNg%2FIbDYSu35A9J%2BVL%2FVWn2hEpK0NcB2juVgmbnG%2ByELafBSojMUbqeIAqAzWkF7blu7%2F6GKCYwpPHl0gY6pgEf%2B0%2FnGD%2F4LAeAR6iIYvCsGmeRD5I4hSPLLGhl1awUZTnHrWQrKiREh21HjetQFyYgHjGt%2FYd3ePpxD6Ln%2F55vVSdWhBpPIQs2e9y1idOl%2FY5gfAIx9jLddyAAyMJZNpqAIk0cO9DX%2BVTS8YFYORNB7EmIWsCzFZYp%2BH%2FlLq3v4GgOTS3F8KWrOJ70IHUSNPaChNYntVgft37%2FPufzqXyqp2sTXwc9&X-Amz-Signature=a69f4cce88e53a5b418508ea2ac1415b5d678184ab92e54093ce3503a6c0dcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


