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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=9ac6308511a1045014aca297f6be095dfd5356de0161ffa26097edef0d2c7c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=1e89ad88c3ba68f871f785e62a7ca4fee61ba8cba58d49149153b69174434edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=a9e3a4fd78071d04a44c3f213de808da94bfa3b2248c6ae9a991043394d712ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=844b1d4f4f7d889060b08ed65195667982ef58b309371202abc40ce3e4e47829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=b3292d4f7ab15e313c509bf06325401450116228092fe7d74e0b3ac2d50b377a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=d12f66a352952c9ef047a586aadf9b5cbe1331259d9755a629ae5eec4205c050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=6210eccf2ae1e7d40cb03134577462434d8133bfc7d3642ff46eee03a77aa1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=324cbe6b8f0169fdad7e1223c72f78ac0b18d01a494330adacfa632b2b78d190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=0a37b751106d908175a8af82e7da069e35fc7bf551ae07c940c35d5130f87e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=985d4b1e157ae60ef6bfcc8f937740c07684818e549edb3c66563c38e7ab5130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBOG5BF%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDn0BShSOmWbH0wJB5imVtklwqCivxFXctJ8XN60yOXhwIgFnNrmWDuP350J2BeLqNYqYD5VfIe%2F0i%2F%2BCfefK0jbHkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDOdqssUtahUARjnCkircA834MFpSDZpNZ%2BG4zNjUetb1wrdL9jWXklDIkblFSDh4qg3beD%2BYkQ5e9%2B6k7OeI8Pa5Sfl7gcOfwHaSil9wiMTmXUAF6ckJc3n7ubPiXCmempmHfTDDsyY29AoEYTAvfCcwidg%2BcNmENgs2%2F0BwgzuMpOcPh%2BK77GxeBD170oPsIGrgd4ALcXAydmQpBbyujDhtrVeGCfDQvzQkSRYb1kkaY3nfW4edlybfil55QoIBzzRKuNquH2B%2BLKTgxAP16ykRf1CSUSyDg5Xo0WownRdpQH6N1Ft%2BpmBzv%2F8CXwqLX7iTKHiwuZaeC0vKdH6ifw5Il5xk9YirsS9Fp5K3QsTXU4EUd463xD4soDqpC%2Fcwh40ALpbilyu5tQtIWKD1LlcOsMC%2F0Fg7J3tAnagYitgDxUAG5qFN0%2FYro5Ta0ko%2BgssLr%2FgTSqJagKa0QMDITeiolDJoAo6SA%2FcjKBkS1Ys7TTINfxzk8d99LLyGf%2FGlDiIF5ZyRXICyAQONh1%2BhL%2BjxwD6gfufqLG0sTBKg6yJEbe%2BaDgq739EiFzHY3sQC1FrWDvv90ST9kDvqXB5DgiLbtwYBWOicAYHeuGRu5TKLmLuebgeNBOW0LI%2BfJW2YW5lfpQ92RylFdS9uMJW7rM4GOqUBA31neawo3G5LkMh%2FvoE5wDTxSLsLrwUuriWZ0nlmH7qibdBBUi8jOwbM6YnRL3Z%2BUEtz4e3vQgBe%2FwDHHrwIrkq%2FC2%2BrQnPTFSI25CNHJYcxUIKgT7nK3Ix7wFtIj1XOsDl%2F9AapnifvarkB7up5s1PonYeBv1Cs%2Fq6gZsfsRflyDkC471BSbg9FvFthyZ7ANn2ZUZzh2jslbPZH4D7Z8cBaP7S9&X-Amz-Signature=bfe28884e78a89085ee25e0155388e0fbdfb6ce272286cbc86df7161b69577f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNMNXQW%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICOW4iDWqhFcjqJGMiqrZLGHIKugH0fJQ%2BV3WuUxlqrlAiEAqYzjw3QwP6%2Bm4TYkwfOqyJfqPAJgo%2Fwd7hUED0V7plwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDDtOyNA0oABCtKNK%2FCrcA1FPpG2KnWI7rOGcIsuZYflyP%2Fv87YIrppP%2BZ2TypKtEZKgDjNLjXmdjkMypPvZ1Oj1r9Pm4xsvAvHm%2BFOqDEsr6SSLtcH%2BwBQN0%2BFZSmxng9M6qLIYknMnEDtCbZoQbeMBXxNgAb%2BMQiXVRtd1tyOETlFFiNTFy6p3WpEoCdBX%2Bwh9qAVzIj4tFxCBWmz2cTf%2Bo%2FB54XfMyQwTJnQs170eXznHObasPp0xRSNLPBp6YjoXT9bc91ODoMXBBYbb%2BnezX7stmZ7YQgWbG1aA3HyRuQQRyLTyTuVvZOwoFI8XIA1iL2pv9STH0jlUbYDW1%2BQLSkIxt6By0Fv3g0nkO%2BTNmue604qy9nMsvl%2BnbMKyFQZVwi0WRQJRsailO5N1W8TPNMBkUo8RloaYxJJxK%2BjPOv9t9tawvkAj890bf3K%2FVhaXladwGBnayeh6zxg7xQIWA3z4e8ZM6OrNLRjIFTPrGdQH7s8Prvq4FnkepURogbwd6Vc%2BUk9wrclOZHpBs8fi9n%2FY2IMmEijeJ5bH4PPUh1SCbUIP0dlnQ3YwyOh1uORjdBDT3TJbZW3BQeulb32yvhNMaarR4yj%2Fc7IlvBA5qMvrQIazmwL72mrYpPZSGjfTbdJQBrE%2FA6zNiMIDIrM4GOqUBTPSIN7Uu3kNCm5gYdWnhwNTBKQN%2ByZCGTdYXBcfoQmWP%2FEgNpE0zIDWcPyxgLn51aPlCan%2BSH%2B4sxKd42G13o3UBOK8XheEAiWPWEIs77CqY1k0i0AoNPlybrNnjJ00PKruax8UdXWNpta5YmzJsRW7UXTXf8mXHRkLS9wb52uSTGytNlv0TgYtS%2B%2BizYv%2BYhc2%2FTgefNapkelLyqEG%2BnCeZ951u&X-Amz-Signature=35a92881863ca84da57b29d46331a84f7a767efbac9c1bbfc390e716247c9911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXHYAVQ7%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICttwZoxKcTERtPxtmyBemrFidviRT08r7zvxlj%2Bgdb%2BAiBTKUbyKHJaHvqA7aVQoR0iEVwx7cWf8GTKMOLWe566ISr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMEfdt1%2B%2FP8uL52lWgKtwD95tttaiM1Zqb1Gk4Uu5oNuQRmcygTNWa8bkYPX4C29Y%2FzB2qiW09U9rmN%2BhPmXvZetFrwksU0Oo50tBJx6YpeMhgxEAKTwcqfBwQKZbm4rwg0w4PqXy7LlsSWSmT6%2Bm2EmEIOhvR1kiYPq2ia8h0f%2BIZ4ZBmwo1f2asUd0M500pDHYnDfB6xjLJjWumPrlp9m5rh9RqhZ7c3v5Pc1x7nMbMLDHSXH8cLpymHPkWx3iI0zZ2PLKW2Ci%2FcR3z0TZgXtsM%2B7auPEqUXEoOYYZzUHTTTSCDMGYNoLdwOrfj53AE2MtlSgmYeeSkvzddNrHgi7gS8%2FF0hADxb4OwYQVsGlZwgGxKRNTY7wz3Lv2Xx4YA0l0a4A%2FWqTBd9%2B94hiI9hBAyg2baSjZuiEkYX9dgyh818q5RmJTZLLX0RdoxZuCzkbJRYrBglIaaYMTXRvRYPEUeVhuKbPFrlTxZJSrscj61aVJ5DXmLgnWQudz2eRkl6nKwDcNVScWWhIaubQN%2BphAFm8CELBMQj%2B%2BxlSUVZgP%2FvNizUIL1G%2BwFlURBcQqdwajnHVMiYZXlazfCRvsjHPyDanU4yUGhr3Eu%2BV%2FeG1EY18HPUq3Yo6WxgsLHmVeVufK0WiOvqwRs%2FG6ww2LqszgY6pgHl9F8EW1XvzPEp7vFSntVb3ux53ly0iwaZUqxVsNAo%2FpEq0iymv1nOIWkO4pmq9VZyG2MSitlY8a14icsHDKWjlfbhbS9vS0y2DCvluOULVmqX2z0VLMaCkfBfJuqvg%2BOZmhlhYeHk8sDXOmhbcClaN3yFJPurF33msL0R%2B9I%2Fe4fCwmF%2FX6EvG9m0flVdZbML4mW7oztj%2F8M6Bktsun9n8YEZUBe%2B&X-Amz-Signature=70df642d1522e0445bba4e030cc1bd76868633fcaf9908d6ab84f7b28dc82937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=2b19d857da5335ea02b2bb05a6f4caa0d79299d50399d958f1832e594d0d6e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQBS3KXF%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIGSQtLHSIN1ykrO32R%2FYZaiMOr%2ByVS8tCetoPyCdehnUAiAk5mzdaYt4Nwh%2BDJ5%2FpI4AqmsyvRpafJejDexdB9qppir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMoHvhpCAuO0OrhdUHKtwDUb4cw2RDxYrZSSLfZLUlEsbXyoE8iiO014gVoM29tHeYhkQrs%2BciMUoAa83xNFJO3kfeXRXgotWGJHY63bewUHml7IzamQSFSFesR7Av%2B%2B5FKaTtM6QmAZMbhbra8AmcuxJNYrBPmO3HLYRaxZg13awAyPxY1kA3tESyQd%2FU0VksGEtk%2B2Zr1L3uGcZWAuhdLgaMZvDw%2FeKtOEaoGQlGE%2BK23KeaMkS8Yx2rFdXacN%2F6sI2yMM4d%2FbUdesiK%2FfxOdUu%2FXEgn4bLeC5x%2BqQZoCooMV8l%2FdwlQqqmWrIpC3ti9YfvW34ITrRND0AabbF%2FO%2FwB%2BHO9PS8xIa8lxwd38FGKvL%2Bzk4%2Bik6OJODLblUVVYY%2FQcxcOXQo4oiL%2FjYc0k5UItKT9RBsfHyyQ58LoQ6ttFsZOiP%2BOddpzqSD5UOcwGbHBZ2zyxTPk12iAOatC0af8%2FBrmxj1HBfcC9hBWRSio2CYwR6Z3uWgj71uik%2BOmuYi47fFGyxZ7h3YxYyYZSjd29%2FNM%2BEHmYlW40zxQX8DJAzAOzHbn0Z5hXQhVCiySEHfTzJ5F3OoUNyTNgnkogNaaza8PoERUVuoEDD8VM8jEuBwTFwesz9EgDi4IymZejFqIlfcizdpjieXswjbqszgY6pgEHZkmVDARL1KZCSRR3Wuf5PoZCXvwsFt8ta%2F6ztuKj%2BD63AgxAW3wA8Ob7lJk7mjg9LU8O3E3j%2BhtnBMoinIZZEf1EUR6DVhIipLRy6X%2F5DqRCROVGgW2VtNnZvmF%2BxrNmL6nph6Q6JCXAFjEqJgjKboqFhqovWhdrq9qjp%2FmaLJfk1SJtamykEDaz1mJrR2vDrUSkIKJJW9JuI0LvNJAYrDJc%2BcMd&X-Amz-Signature=e7e49af2b26648b4994ed210a1d661205a2df9bf00f1445847a0347becec7012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=3411ec7e60c01a76ee85fb662f33b6675a4cd2ee1b54924ce79c5e21a31d4bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBS6XNS%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDCPoMwkTHceA9A2zGAV6Uzs2JDok7ukQFCjlkB1R7YVwIhAJoPSZ4vzUD%2Fjph4De2JDyeG66IYDhh4nlr7dtIAcAe2Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzVgHIKojVnw4Z5CMAq3AMc6bGb9cAG%2BRlnMIegnVxiVPzdhNIkIoTXx8WY4IhGVt4rW4FVIJDjOR1BWND1Zmx87BSMhzgn746JdzeAJEj3uy6ycfBEv%2BGiZt97Z6sF%2F9gvvk1x416uSqAGkeBbehx%2BUcdV01moSp6qlwX1b1790byLBagiPaWwGzTkq2uzLc5oPbMhtElRE9w0BEb6Ee1CY3eBw5AkTV4xP47QRQOor0RY7q5OurGMdQc8%2F0og%2BEGQONQfb8Lal6bhO%2BAKef48g5Z8cjEgCZ0AF9FNvy4sf891idKXeABVpierzHVmRFhwXSDV0v3%2BtPTy34s%2FboZvnkuwFm4jY656y8gIbm%2BYjAyAPE3PBne31bwH6AC7Nbjfgjb2jlEmyDp1skKrfbtPr84sL3jAIPk9wLc27JM5320o3eg1jsr27fD8oyZKTLZgrxQIUy6B0ecl8u5x3NSMo%2Ffs6sco6Eo32Q7tBPRmdViPa9xriQGjVoyHqvORIFabsGev%2BMiTVNSC3xJeARRfj6QPfc4HH%2FupBo7a%2B8QtibzWRIivy2oz0IDMQ4JaVB88ng7xwLwnFrCSpN4p0DRN%2BFvNn7izEprXzFjABjdpibvn3536jrlxXtEqhdewd8uEDpdSdjkYtoE%2FLDDHvKzOBjqkAZ7rhhx%2FPjbtxeOoCo7vYg9V2natEQ%2FXxjtaAt4zS7nE%2FscFDNHMVEq4mDR%2F6dMZIJfw7Oftwo%2BEZOCEAKv45QDK6dlnVWqUwTRhziXZhuFMl94hZy99QevDARNrFQMYDaSC7wvrzeiAYWnDhkHqDmyBmMeSdoz8mdpDYN%2Bl6syHUslINzEZNt9uPrg8KRLHfccqZL%2BkuL2FU960PKQtOFKGGDIo&X-Amz-Signature=b904ecb007475750aaa13e539c3bdaf39f561e069417e7537098cdd1d31452da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=206034f6bae10080578831ec2fb6683437317e1ace38e7556b2bb228d5ee55fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTUNTNTB%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFpYPmzn2JiyZ2U%2BboMb%2FObyGxs7jieiTRyhPJ0qPhAlAiEAmhYLu%2FPBKQ2Ip3lzXD6Kcd8Z3r44Pmr6WVrrUYNgdZwq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDE1sYs9jA07drJCs2CrcA%2BkoZ4fddQbOX5H%2Ffb%2BGXcvd9ZE1nfGlcE51GPFmlBJTAredNuk0mPsbxVO0TB7IZQ%2ByjAHkS389gCBHeg2u5LwRgHl9V0lOUmLpFkWKknyxo1GwbqVuzASxSwBbR%2F3%2BudnJ6s3qbX9ZZMp1Orv6AEGWUVmd3aSveHiSAtZAHJFRKZZ52qzK7eP0Q2FYT5IK5tF1752gAS3tsceFNRkWxotqPTtJEu662FaDb7DLF7b56hHaTzQIm9vIp5Rg97U5Ibqesdq6c2kyx55xOiHASoBusZPQSFH9yIz%2FM%2BsnJZMoqGuI%2FNXyLOxKTcoWV3wgd62jwRO7U7lmLqjsJzxTy2cBSMa6%2BVcJTe5f1sS0t2YxbuIOwKnUeeUhsPFHbPgN9%2FfhYOwbI3c9p1vEg6vPRKDLRw13ZlNKYsmXRUJI%2BVfPk4P3TvffoiREUOM3mcLhqdxGa2icx47t53Vvyw0P55%2F%2FBBxwu%2FqOwH%2F99ebp2xIgZLtCzg%2FmN1NyOl%2FaHDXiy6DtlF%2BVz7DRD7boI9yUVUBXdtuNQUVi8p%2FuNA0bU3kuUxNtSy4kpQ%2BimSFjoyCKlq5VY4pV4cMx2ClCCAC8%2Fo6aauShqO36hD9JBUJ6F%2BcW%2Fpu%2F9NA%2BDgyhkc4IMPm5rM4GOqUBYZlNqg%2FSriATjM7KLe1ndqhJwgO8OvJeX9BqQJ4bt4reglL2xTMEZLVOqFA5fTLv8OuWcOCL%2FPQ8NbH72Q2xHGxI968eZ54yfDJBZzW27VhnZ%2Bp1NWb9t%2BMdAp2uYEo3E4UUmQxHz7K4YZTpSbTBB7JAcGb9IV7l%2BLjl2LUp6R7pbInJSJpfEhM16PqFjZT5UDHPUTyGUuXkq%2F0W4s6LXdul6xZ2&X-Amz-Signature=923bb236dc307cadb28502daf003d8960aa299fd37fdbbb3549ca8fda18ddd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=1dc612701a288fb9b7e2051d6136fa9c84175e06f0f0252436b1e1d9112431d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTOU34X%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIG6JUWrV4%2FaugxvmOeucM%2BGkfkOwIANj72Z9m8nTUOXsAiEAs1i%2Bs7CCGtSYk6cjRx%2Fd9R2AWsEjBdUGrLQyN7UC3mQq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPVs0XzD%2B4J3hf%2FY3yrcA8Up4oMo%2BvSMgzWZseYY0LSWRRjW8olTKhxkTIgDHbqVfRU%2FGHHRScwAZayv0g0p471T0m%2Fe2AEVE2raf9yl9SiASSxkwfhNmH6ZzQZDp2%2BIu%2F1VyEUCXQ0YI45Uxod49ma0osl0kxrRB5cAjI%2BJL%2FR0qHfIIfj%2FQR4NOlygPk7RQt%2BfbT0JlvcPowzwsDMKTlJr9nmctuu6Ownqejuk0v4KlmfeRdbb3kVmN5geqAqve3WduenylS%2FP%2Fbajhzrigl%2Fjc%2FqoY7%2BZy5bKEoc1t3BmFVJjO5C%2FRuTGN3dgQaXxT4OawwTxcGrHdlM7exUVnUOU5y3%2BGJmXcyQYcpii9qiY8py5%2BfZg98YHQUuPR8zZ2u%2FonDOoFzZ70%2B9X2f56ijNfD6U9UICW07xhMeFBB2ory2n8%2BM8geSek6%2B5ivQdPNytdv1XklHG69oIU6D6vy7UzYU267PEeqbKPkb5hw925vKBA%2F7Gkwf7cSw73o%2F8mCR33kifNyNrPkYIwHEDd6I%2BZ9Ro6%2FlSqcH%2B%2FRF4RyVH2cQ6T0akuAH9uOpJ%2BsfVvVB9f0%2BLrIsZ8h70OZqP%2B6wB3amP0QJN%2FXmWhWa5p3ybYRhrbJHUiq%2B47V4g6l7o0XRMWEUbMEYXGCbu0MMq6rM4GOqUBKgj0XaSPgjpEJX2HFCAlFUGc%2BFsNACFem6jsxZDFKKLW5mx8IMuc8mPNLa%2FasAMkTDu3VDdCNc5CtTG69D1IrKg5huHXgSsmDrH9%2B4dmxgSIKHJFcaHhJzHfGLSQcx%2BlQnz3HCQ8EjDCuWzrnrOMd4Va7wfMphWERU4W7djbH4O0mZOafwAJqzsk20cbzvxmTgDTDl70GhDq0sp4xpCeM1%2Fpc4Cw&X-Amz-Signature=b149eebef8dd25b1501788173374675a0c7aeaf670ddf5136e0f10992ec6b001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=213a0f908fe7f38f77b0c5121176be8d646759204671dd4041267a9510feaa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWTG4O5Y%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCrgO7srz%2F%2BCXv45snrrSVk5uNZdk4PDc6XFZ4%2FIO9xGQIgCf%2FsPYskAwLJwI%2Fj64t2PmooQVbvRnO9DBmo%2FW290tIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDNW9JAGyv1gK%2FKtDcyrcAwIpsQKU8%2FRvkxT4f244u%2Fgyw1IePMa0zfmS0kJLQ1OSzhEJQWwfRt2MguzYBTSLflKtqkiO0Re3SGr9cAwVZ69eO%2FdFsGVnH%2FXmATCsvWgb6qOs1A14tLcTpkS6fB8eSZxv2qQRoWGopnpfGT3e9SzHdJ%2B2Ausov2PCj%2BsndefVX2IocddCUU2Cy0A8QOioCnMmyT%2B%2FY8uR9Wz2Z%2FkmZByerpczevQ2V3MHNCx3vd%2FzYGsC9Imf3%2Fnrj3XMXVSDG6%2FCWVumjahEUOz%2FO9TfHoBcjfSv6gguvMDcTH77dEGbAyLuBWcNTtujHpaN8hyYgHon0U3G0rmRzbARGIUU654jdhPhbQ3w4784381gMNrIXMzs4ifySiFkcv4O3Uo0vGZRr%2B71Huc1iAfY4GdZFhNCVJ25%2F%2BJyEXNusVG%2BO3KRn1rBgZYOeaM6xIeWF2KmM6os1OzOfhbxy%2F7WEsJhmLk7f%2BM2WtZ69qyVbhQwFy5ssoa4f8ZGcJk%2FmOw%2BfYWM9uSNNGA19dpipeuVzQWA13IJxBoQHHnWdKOHFprvf4gjoXN0OQsZ4CGkd4ldlMnAffgRnU9X2BsjnQsSCtYd1ogUyOaw%2F7bk6kvrvDBgDnhG07puVGrpyDsvd0Y%2FMN26rM4GOqUB1ktVVVvKjLAv3bcswTWXk4%2B50UDeomMdCK92gVpZdxIx6RAkEtwNtgo3Y4k8YoRKPadHO05CcqDY9%2BZdhTgGyt5cY%2BWP2DRyIJRtbTkDOlLZFb%2BRc9dvJEcH7ci%2Fxu744vD6F9FwwLHFqN2F2mg3sq6c9kzKDAGNm1jBA0Xh69Agl1V9Ep1VK0So22ZTQuP%2FxD33XDHwYTt9Ms10u4MDZi81cgM7&X-Amz-Signature=1f28a48a86f68b1fe58ed38c202bea8810ebc125f763b070aa9a0ae3068cae83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7QG6SV4%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDDznYdH%2F%2F3QBmsDUH9eWHlwleAQaSLLmo6BaWO8YyMlAiEAjXAMfSwP73k90EDO4EY0QRlNNymL9E1WynPeQUOWLUwq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDNPlE%2BwEzPNi8zSDbCrcA0ZOEDgV4WQ1mlv8ZZZ6m9IpTSV%2BkB16JfINVFP7Wm0Kb1yZ0y%2BkDz7%2BOU7RCLhJZR1HuCw0c84bbYLYwmJ368nX3SHTI1NNDhT9d6d0ZaGG9wgUm03EqYrg0DxnOaTlt4bOgj4CQAKEf%2BqVBFD9DzHr0wiKSYDm1fmx09KhGevEJqsU3UJwGrdEL4RbUhPmQZnzmyjeY4skCj4qovEJDWx765%2FhXdgvlif4BvuLQA88q%2FYsydkJYtJ38KlTJF8pachRD8Yza8K6qS9THrYD4J3YH%2B3zqneqrtdSHTTpRc0zzEIcZR9QwO6o%2FH%2FvElxdAd7gx8DLPHrdvNEG2yrVLKnWw5Pc8wupL82nJiFAtYzXEJKfZGBupp0n75cKvqMLd2S2rv2FBVUHN4%2BsZWh4y6XEqOdvtQ4k3w7pKHbYwDzPCQIlyngpXdFBBG5YEgzKsYd0XXlt5BFy8rFrIte5Sb%2BZH%2FqIs4JL5dNc6DqUCgGeAMnDSU7G8knfb4%2Fhd01rCJ7HHDL6Zkp5%2BPi4GYDf7%2FSzC34VYfbBvbaCtevCs4uUt76c3TGnfVN23TkNcoLbmOysG66TtmnJgFoIXm%2BAZWQWmIUZ2w2ZNHHtIqGkNl3XAD%2BuOfSnP2ROi9FYMOLVrM4GOqUBRu3mhD50P5Q0hh0%2Bc%2FSTzoCVNq5v5adeGybXwT06YoZyX1N%2FpJvg9gx8JGUCGQ5SEazGWz0RANiwjF%2FKtwXKucsL1Ragmy2dWyQ%2BVgxI4zToZvlvyY6%2FgscNGQjjlEEvsnGxx%2FyqwN5HnnM1Z46e1tZWRzK5aLyhWhRE6q%2BbLAKMRw%2B6pjNnGTLuXDrX%2F85%2FqbzaEyvPyN6Om9liZ2nKSKBldIm7&X-Amz-Signature=80d116994ac0ce9606134a265ada012adea62e8bd6098cc753e106898fa5460e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TAQLXAT%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDLp1iIOvunlLACQgdO6W1EKf8JuACo8fZiP%2Fvb0OJcVgIgHcytqe7nQTwUkGHk47FDgk8GIBM%2FVW91cbhL3SknoW0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDELDWf%2BWUCESuhsXXyrcAwS%2B7JtQDcAB%2FT0ChRezvX4vFeXd69BnU9rSocJNEiAgeJkHcu5RDDtaXFydTetpFR97Wgym9SjjvNPHyMzOZbCePy8lVNnggH1nm%2FtOAXow3xQbu1FUFrAIBteFVkTg9txg2iP9zvZQa9SnhBFeKT7O0c5BCPAJkbaNN9M3pI8aQeZ3CCeAQWri2284tiFJWxH4yjrPDVibP5od0XYeA62D9N833OZfOI0IAv903lLjCxN2lzYjpe4Sqyq8tgZ56C2VLMQjj%2FKl8hKfvYTU545O4GvtOiT5GLTyXr9jk1clorEoarvsUbU8djB%2F17g6quaWdd24Y2882Mt2WDb1frGGf2hr0yBlw%2B0%2F7e0kfLhsPFZmOq6cSwNhuaBekjqI2SCk1XqFsx6ENRmeUR9L4nd0QHxV%2BqiDaE1bkQbaJF%2BMR%2BfXb9KTX8KXLRcPD0kUqfIsvqT1jHIWZa1oEbtuRhgLTQQO67rcqD2a5DNU2lp%2FBFTtsyi2IgMzjGqTH0vQGebKwASfv36Fs4nWDpe4bYr%2BDdThQitzpQ1CWVMFSAzVru%2BCIGxJDv2ZukGLU%2BcZdibui7wmCHBIgnvE2%2F5R%2BIA3Pu8jppwqU6vc%2FoHAqr%2BU0a4wDTZVi4Vp9iqSMLO7rM4GOqUBWVHNFfmEmEQuIk6cbt7jFkDpzJoNJD3yBXhl5BW6fdNzWt2H92zTEbfBGjz8T99RpchCtdd9oGCVAHtODPP8%2B%2BcfOvFhIaUXv23AZwPViK2mNcJDXkvs67YJha9Os7O1ShUhMcx7aIJy5lVJmV%2BHHo0X96xcn4Qb9N9ah5m%2BOqqTwA2FIxkmXpf9mOp%2FaoHPghuPXFLfGJkV%2Bx3x13XpHb7JvtZX&X-Amz-Signature=2854fa1ed141bd98822c3e8b9662d798a4c0c93df3916a79072684845d04db45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=1c48ba3cdc7b44ba41d1b07463c48ed19817324f7fcc1e82faf3e1f9c1d729f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIKEDRL5%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQC466e68FPnv3hN%2F8mEc0asjqjxmoHDJK37hIn1ZdcBhgIgEdRRXLX1GAaPDXQqlYBcSUqw1CUGxSXmjlOwujWrvTAq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDA6mrKuAw8LV9Crx3ircA%2BuSQun2bu48%2FtlWgkGxDR9Kh1OmK1%2F28obAkvDp19Itjj0O7WAXvUvUBf2UtAv5c0KE0tTH4SulEk%2FWb8bE64FPj12F0N4nhOETd7lK7g7UMMHPVLV4FOXVkI85jG5pVEsoGRLx5F8%2FxbzCrl2QbeVWuFo1Jg0zqER%2FO5%2F%2FhU82ppSnL%2B1nXUYQGg1ob0L12GVbcQ1aE%2Fj1CChxPSA5EvdI6AnCehg63GZuDYAWuRoKrB1vPvBLKxKJ37oZVfydCi9V9a%2F2VzBnO8iiwPRGtjETZ8fhSLWCAL7tYWbSUiU5uQYgPyhCY0QnIrNECW8oOoUr4jXoD7FDfuYYpfY0yOzfKIFWpNd%2FUxJVMqpnV8Ujzmg8A7OXX8SsvhyQiYO3huvZtgLVOn8OFYAw9%2Fv5XF6poKkJ4%2FQRAN7rpEU9V5bFsSyn44lxwakp4bTFnzsRxDpbzxj2ll9E1ar2F%2F%2FdmoXu65FrVjPSOh6oXVgGzsMWiiL9s97k2f%2FLohJEENnRd5htaLlu89cHY4bJfVcVqk5CRgpRJGquRDkkZMFRw8ZVfywdHBH3PggDrf1L9CuA6LscRrHlUT1SgLobX2gXICcMFHlY9zUuSxotHx5nnwPdu7oZPB9UbHMNwEGFMILYrM4GOqUBQJOKAYdy1UQ%2FMX0l5YFW5aHbuFKCIqkp1wCcggPv3idfpf8r6f3IkGUN%2BOXU8a78gJ3TmD%2B4UpgcTIusJioeHy%2B4ndeyCK5V2E%2BXYaXVdQHLCY2KZiwJRJF64vkcf9QFPhU6BnLGgyKoDQxNcy5kdF48eUJyEgQ2%2FERF%2FaAoaknrjg6apxb7AguZSu7b2F87eCoWyZYtP6d1OpPEqI5C58DufYCt&X-Amz-Signature=94a9241f654889fdc79fa6eda268f8b4feac7ad8c2521fa316a5d6d610f1d29a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=f50f2a0086ab7fe8ad48afa15ab41c662b50222ddbeeb7c2dd50061d00433854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=19a32f9c33196e4e567ba4eaba1bebfa873a54de8da4bb36d6897e80dfa4b212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=68dc070e5080814b580532cd87bdfef591a8682c9eb387341b3fe75f63abd4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=f72bd0fd76707ddcb01861736ae4d4579b3766b33ea94e2f0a0212ed311594a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZLFZBAM%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICieERCEkxvmOa1f7VrLoETJtYKf%2FF5Mt0jgB5Rs8jWiAiEAjHCBjkasFs0MIkhdauz18jLM1ilkXKDiyD9ZSxVZArEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEWbW8MRkdt7wsDZsSrcA1PqLD8il2BXmeenvpwG5bYzsmngRCpc5f3e9vgb0%2BHKuZXkv7SNVYgXWM0ma8K48a1VlHaQCll5peIg67fFzMkswfxjL02IIFXTLFBirq%2FANISmYPOTmgdJe55qVMC8PL4%2BYEyA9N62BJspE9nd4bYVLSMDAcHqDuT64c6PQbNHcLudDbFtLxn%2BD84w6f%2BcDA9LoPuQMKbHATj%2BFduL5bZ4FE0w51AnOB7sweEalDnegZqplHuXYRDBkfCzRWpsdHeZXUAt1nQa9JURuUJnKIGfy0ilfLIoBRYa2eLgAeptT7xldeArHrvQ%2BDE1ScnKm7WzFhJn0K4moNEwFflwhPzSei57KUEEVX7mo4E6t8uJLRB0aMO7p7V9rNAUz%2B0%2BP6o2znYc3loxE7%2FcVkrhsjHavtmaNR2pCdm5LPEyDNmYrXIh7op19AzK%2Fv%2BFDc5kstVQKNRA64FMQO%2B%2BXqltqOhEhBhQYiXdSu543%2Bz7vgchxN4e0ZI1MJsq%2BF%2FOo7p95qwFWCfjYgfw6lpodavPyrwpPk9kLUJlifRFL3GkK%2F0aW6aU2lz4VHAW9stbscakjeF0dEdAHJO3%2BI%2F48xYv9h1XvzmlT4wc9%2Bmp0C0riAkVshfDuHbqmw6ip4%2FKMLO8rM4GOqUB2D9ceNs15ZRAe5%2BxU987PRqqH61i%2Bp%2FderupYW6BdcEd05bs6IHhb4DRsEifgNj22p2J9LPPa6x1totBiNlhH2S9OBF1yfaZA68gUvLKuuTl9X0l29j8iVnm%2BooN9X3KYL6pxf3zmlGj0oKRlqwRTKmaJXOzm8J%2BiNSB6Gg5gQrd3zlwIl6q%2Beiyrofla%2BC2HIQ%2BoKbTWJwqMblvqkmjdC5lrAC0&X-Amz-Signature=f85365034dd4c43d7c3c6483988d4b8621fd727f19a1074514c87574d05e4f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=215fd4c549a0a4cb700a8700697aa99d8b6911f81fdecba0278f6be5cf93f41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=18e902524cff74ca2c80bfce0d15a07cfa231e407e9d3c64eb63bccaf6e01345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=68dc070e5080814b580532cd87bdfef591a8682c9eb387341b3fe75f63abd4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=20a1dabfc2ef5b33394963979e6ca4bc44e8bf4d438420239079d412a7ca85cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=fd8665b0df1e3a649646caea9c5e98af42c3d880cc41ff985260f58e6bab7513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6LPMG5V%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCZTtN9KC8Qz4HowA1FOBJB7nD%2BXVl1d6XsHPNk6e4CFAIhAMiBhf7J63bmTXqXcrz%2FZzm3jq0FquuSy9lqO2yPTuVCKv8DCDIQABoMNjM3NDIzMTgzODA1IgzuP9rpQ1YPfgtDo0Mq3AOVSKWLdpaF8Z%2F%2B23e1hTued3lxHADEYSiA5Lt%2Fy6reJ3m6yZR%2BM9dcsz7vJMYuOHuAh9BpGdeQ1JDSk94OPB0rYxCg3FfHgsNzjiQvA7DWEL%2B7fqE92pttxhtXbuV4kPVAh6co3NT5DfoNqUGwinGcZeGascEe3O%2BWqCzAZUYDKrdjqDjPamCstrkC8gWdyRXMikVAKU%2BPdJpo1r771p%2FXyNNympyDdpROro6LbWRgUcuRxnm6SbvYqt%2BxhSNeFmEKqyiw%2BCBxoW2ixb%2F3r0mJL3%2FxRbVawalwyNOrdj2%2BuZBmd7srjx1lK94oZOMrr9xmHObxFM7zUWnwaLRZmX1uoFdclBeH%2BzocUbM%2Fnds8MNaclhRJgKwIrNxXFnQBdaxmBCUaYm%2FbuRZqirYcksOy%2B8%2BP%2FUSOcDfKYKfkQ5vPQPA85aS7DmFsj8vBqUfAmFQgKD9SYgwAC5feY7TQandreMYIi5ztkcZ1zo%2F6C4ZxwdmtM2P50Bbfhi4t0CUF990pd%2B9AlS8iuTTSMnku2VsWSLmExVn0o%2FKI1P0h3fncMRg139SdvjwMq7M0LcWoveB9bX7IuDGUCFjnTPdPDBJTsjgGGyyYE77f5TygdiILfuQshH79JXoEZ0sPrTC0uqzOBjqkAa%2BYmnrzoQiRy2Fj1IpSNDbZyi3XyjX6GHOR61L8xro8D8JoSlmjZMItQE2IqPLoDG2SxSoArBSJhAvg2iBgWHX4i9EcN2V82aDt%2Fxhz9N83vHjZkDE0isPLRkYehdANVhiqcaFb4uAz5LOJ6bEI5iqfkoD5n2Xh9smf5RYWBhV8fIatzjvafNHHu63GGdRowKxvWMaDwwa%2FuZ3ozDEKOqVl4Q%2FS&X-Amz-Signature=1d9ef253ef5196e5077eaf789a68085db9bc6cc40ec5ba8343385de1b4322945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


