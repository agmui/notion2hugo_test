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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=363c69390c8f03bb2b51331ac76503384741762103d3a09beba561479b2aae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=ffd288a557ab1bc43805ccc8fc10969e5eadb650eef324061930515dedbc6ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=657f27629b317dd4080e8f75bd12cdfe383ef2692c486fa75c5ae33063f7d9f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=7e1397b652670b1c2298693ad27594f7d94013af5d3efcdaee0da8c151c67db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=5b817abba02e77f68afd95ea782c562b28f270cdf2d3a191b975eb87e9dd55e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=11795592901a31b7f183d30ff0ed340430dc4aa6966f00df6abad75c30515ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=62ac326a9c0c8b267c0e9232aa29a2c86ec7676f539ee98709ebfcfb5e10e22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=f65600bc20fcb2277407e4f2906b1481f7ebffbc2dee155f2e854d1999c2b24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=33265955dfce80525eadbafc1ea0dc249780a666eebd830556541090c4476f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=c2b104be2e2f0e119115d66b65bd78cd922184cbf768b7889749e75bab7ed998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USC7OJSJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQUPsxTYuGEpAyolYXGjOtPRMxcRvYf4BQlY4ENkGosAiB8e%2FkzrU9aFIJtxa3v71qfRZMD8boRUob4nPd%2Fc0QsICqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCp8ZOS66VkALJrWyKtwD3CpsJamfkV6mqGkVzgEz8%2FRjAeAmGpLDA4oMx8sUgVu9wVRDUOn3bNgFsDJcSS7iUkEEyldFNvrW55Qp%2B1W9IuqZdhxgfQ7ckcVHuYElPqJbtrB4%2BV5dstqqHJAvznCEmioZM4lBy%2B0AfdCbVz5aYj3vEhvzVdojKl90G7OCvz%2BWfa7tq2rO22v7MHG8CUeGVhgcip6imXdeio1Eg7wJmTMu1uKRSegfuGEzrv0ynE%2BakJcWItTK%2BylZakRJLp%2F5DLsfiob6uaf6J5hAeyzIr0i6En01xLEjjevPkosv6ELQjBASKBs7zn2wCZVgn2u0DXmY1to2mZ2CMXu20vXyqyAJazRycLFnp%2Be3dclA7v0E2S9mEaLzztfkzvGKwNad3ZGUrDUI8WwTbRh4m%2FxtrWkpLA1tFEnnvOKzp3ewEmORMzSaeridNNkpyXuHJDhkNKADOOIsHebxogPfL5EH8nvkfBpHRe13JNw8QfdpCAAcAuta6QNW0CT58t2gQGeQRiPRElRddEV3VAC3alKyQTyaV1sLkc4HS3xhUsrGHI9IZU7JpcB48%2FnUg8zsPzEfEOwsdyn8H4ZHr%2ByRS7vDKNWr7Ey1E%2Bp%2FDhN0Xagk9bvQns05TbvuQkpsYzUwvPCvyAY6pgEbWSIi7gm9HD9oKOXW6h0ksI%2FI51YzVHJAeIy5AhSKFMNvAY5xa20T4s4fp10WLsdAeDZmjsWShkKqiZgVRqt6P20mxoP4U7FSWnOPUK2iQZlkPaWvsDl0EBnkMdwJ%2B7pmJJHDU12aKL0vTZSWkLHB%2BqHfvaLjJPv27N3PCavLQZjiqu94OOYVm%2FZ6g7ukRn051UqVTvLm6Haj0vsW5CJqCQ3WAv1f&X-Amz-Signature=941fd74835de79ecdb1c9cd18a9da3a697ba9e877493b3ef5c1199dfd2051637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VGKEIMK%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8mc7XKBWA5wfczPOG3rYIn4fIsdjdtydVrlFe4x27%2FAIhAP93sPIjsZuRFN2QLlFygupDOXvS%2BJO%2FEN0zYtjp90HIKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOqUcEBjFUUvbzlw4q3AP9ca25AnfeS%2FObk1rt6tq8olRArdDWld54U%2B0GaLNFXUKjvXE9o9T0smtPxQQYtZB%2BmV5AO5PqzYIVkuQQg7YkCciS1t9QGZSa6EvMc%2BNiAP1RZstwvoOn81Otjf81SW0KZMtJ98BQb8rY8RfmP5NUNZ5KHuX6%2Fn%2BDfJZVBHPIl0aIw3D8NqmN9ruEVKV7vjS1nx%2BPB1Lx%2BUR82FHfOHS8wyfl%2FZM7oUjvCOccXHjEofRP1PLDo9LdLxgGchSgqXlLkZKvCI1DvM4MyIePjfFrM0Qng8DMqAcX773F6ctD6F4O2AKzP%2FbXkNDsqA%2FuQKFuZX4giLBXddgpQWkacBJ378eRQyDU9Aya%2Fr5TYcbcpTjmrfOI0OT880nH3k38kcGNRAYd23QzHzWqPeqoUZOMaeH%2BC6fYr0FKfjkxBbkjNAHxUtj5c9X422MG3fDcAnkL6gCB1NZnZ5%2BSqHbcNGnvmQVvM5d%2FZmcfAcv6xJaCucwi3eIKddTJ8Q6fdk3KTPwcCEG4whcKrz%2FQrOVdV9h7BEIBoHNo4Emv3yCsgCe2zwgKfakRAC7hwqO6HWW%2FU9wTuwAvGMb1zBKMF7Uo%2FZNRmEOeNhuVg%2FuRM%2BpQj8yxtj0npsQ2vx79HWTTdjD%2F8a%2FIBjqkARRVxG9PnS7kcTkMiYwmTYs5%2BBxXg6FU3G%2BtK%2FtJyhWeRajXInyPZfqGdhpDrZNgOWHNpV4LW4rqL6MM9p%2BBoKeqrvMgO3cKHPU0aUY1L13vJyJRbbXtbSM3s9tKmwRj7bD95MnUCvQDxhKaG%2BT%2F%2FK0K%2FKOgCQ14INsWO%2Fs0n1n7uJ%2FQOtwe2%2B8FwKW8V2twigh8cVc2B8BMXLlcSkg6%2Fuq0hJV0&X-Amz-Signature=e2be8ff5536e1b56f1639a2f16c44206cbc6ee05c7bb1eb8227eaa21509a9900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XSZAQRW%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHyYrcTZUh63z69gIumLqJ1HUXd%2Bazj4tpFQy3tz9DIwIhAO%2Fr%2FFjCTr7d4Is5xfJbLA1cpaJZI79sPK%2F%2Byl%2BFECIYKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxDidpD1FcpgX9sKgEq3AMUdd8XD4mVxXzgA2j2cg2LqY3KN%2BI6zjm1U3fJPSTC%2FIthXuRZgzy9Iyy1xu6ey98fXxlBPICRPqnFzpWmJ4VNDPzo8oEcSiMqNJYHG29OgKC%2BkvUviWsokys7znUcCehBhY3AvmY%2F5vcfKDS0QMIRpG9MDGqzo9Y3OzqRzx7aLlwPS9ssRSCJrqVj208JuKqxgc%2FeknK%2B%2Bi34dN3xTxrEJQdcatq7r2BoymsxISp2shWm4f%2FhWAOpTyNC3Kiyds9Nn%2FdedOtsKp8s%2BGsZNntkNphYHrrI9UQBF4F2deku%2FRDoD%2Fe5dhb8xAfQeYA2FGruIb5c8GOg0P6rz5eMIeV5lyo7MevnEE4FjCBGDNPiVaE7bwEzhr7G8ca%2FcGvMDQRNlX7POxt6cSvNxXb%2FvxhokEVUke5BroBV7BuQhnQrdKara25Yic%2B2eTQ4qlIvmdCRdh0MQECSnkdifOxAZQyNYMp00Omf%2FrLvWS5T45j7W%2B2dd76aPZeN1nJUzoxx78Bfemnjf1dCRQOD%2FDPuVZUVHDCj6JHI0L9DUyH7AL4FSSZ1ILym%2Btg32TIAZez01xyLv1knaCO7hTi%2F4HEZisvJm43grlVGiyt800h9RTXMvsNwpt3kS9bBwteBkDDP8K%2FIBjqkAcbIFjpmPN2zMfwjvLDXDYiouKQRHU1v%2FO%2FruleiwpHUeIHBRA8AjqcOS2GfULosNV3yeDwAj2Puz%2BdPCKOeUDCoA%2BhoHB3M7M7Wj%2BdLV0CQOV2Z3%2BwAYCydxOT6zyeml96capaSiCg%2FaFzTUXyhrh0JZL%2Bf0Hh8tNARYpPQqOskTfFyKjOsvt544Tw1tSN3Ug1n122goRiIGWlCotaWOPNcDFwf&X-Amz-Signature=6b709a331ce3c8a2f097bf634dbf3243c8cc734c46e16aab1e1d7d82bcea9682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=5b5f6e9d861c5e277b323057a1efed4442e17e48ad501ce697ee0197b3e0b430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O3M5NOH%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCInIEKmX7iF1jD84JHT5veG4HN8gz2PIWtjm%2F9SdmeHwIgas51A3IQgv4ceTEI4teyGPfnRKh0l9eVh00QDLjsCpcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEK4msQnzDIytvBy3yrcA0A5AKDr8DBZ0pd1wf%2BHpGYLxrK6S4uX%2B0PZJCBB9wpJsKovrDcywcsz4SBFcrfItrwhxcp6FsRQZQA68dixkCRQy4AxTxU%2FGfNZEe3spBVwwQ03i6vthRErgyrmmeDc4HqJJIlDlHxJx9yA2%2F61ZOdQL9Xg2%2B86v%2Fm0JHsC9%2BOIu6pCDzVItpX7MyKCfpw2WddxInk4RMc33YKJ%2FTIQifvUqSE4XJVNQVtFdysjh1uIoGnBbJ6WB%2BDB0VE7JfN%2FTNw%2BF7LFNWw8j6%2BLkgR21kdWpBWtnpxOf9mZ34HQ4t%2Fy4Pjr%2BH2hio%2FdUdWA0yaoU4SjIzSIo1gExfkcNB%2FacyUM1ScLmkRY0Iyk4LSt1yWcOqdUao6DKtSt2xEBnGNlm9cKYnnk%2FFNlPNpCBmXx9HHSZPzw%2BwTRqkqt03EMw7RMAlkUyP3oiOqc0KdHcWk3LX8IqYlJKzIPuJeIommqbQhew9TtwSRE85xk7mfk2qfdLny52A95BEEYU9VmfU%2FdeOty8N1s0V2LkeQnTW81AUtDfV%2Fyg08wHMwWwxMw%2BgV8bHRh6Aj5kVf%2FhH5M5BTziyg1cf5kPS6uhETDlrP8Q85ZRhXcZkOUYX4HqYOq640VJu%2Fw%2FXdRZBJ3fH4%2BMILyr8gGOqUBFnVUH%2BuqUgHiK6qc4dQsANXiYAiU%2BmxHOoxkgnHnUVP0Qr8jcopkvwK64uNLjEgKwBI1kDeTZ6yPuU2fhS847Wd%2FyDf3IL8tQCZNqZge4dWKjsbRWCF02OXWNS6p6jyokPgvBLpkDIOeiH1RqUm%2FA2DzLDT3ZiraUZ8NL3Y7w5s7Xuq8qdzcRnNym69JBfsI06G9tWxuLbbfTBgjX5FaXyYaUCIy&X-Amz-Signature=128aa042b8d1c37386446271e8aae74c9ec767d512e88ebd7236a8827c0c237c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=7c91c4f90cb7cc2a174065c7c38608ae115e55bf339fda26fb6469ca30d5d98b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IP4YF23%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Zwh6ZK12OjtL%2BsTqggPZRR4uy5BMASsPkdTzXHG0ggIgQDDQydXmHcIyubmmZCXzS1xm%2BSR3y5r339eteArb7k8qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDYBlIvrI4guTXtBASrcA8SC%2F1EU7zCO1nWO72XIzoNDM23K5KMZGrXgnD3Gnaru%2BOd%2FnM4%2BN9cKQb37xPqdlvsTPfiTdghUxTmoICiETV6Qj8g6lPHOAaFsix6kq3vm8SZT%2Fbt3f4Oo7VQTCvdw8F03%2B%2Bk7DzK8SFpNPSUDAfpdUcKMaO0oSDEkFFxYMWym%2FG4KqUaoWr6QteLQASmjKZ5fPltRXmKt%2F%2Fric9CJqLOYMBWQ8i9IxL79k8Oe0j%2FGzDe7SZwKlOYGXXtchvrkE%2F6tScuD144OWRZZ7Bp%2Bc2paccwDR7%2F38yKyg8elegvAduAoNs%2FY3FdKkj2ISEjjnV9t%2Fh9wWQQJdRZi6miqneFofeIaaZGPysjVs6Ca57NMHAV6t75omdMurfXCkWMlHJEX6ez6Zbz2zVnzzLgnlYGqKDLxMpVq668gmp%2BqT69iW%2FSe%2BJ6NVt7evPfSidMwA11u0kmQdkSyIkjTXH8LvyxE2%2Bf5XqGiXqspEtwcCMlTx8m7yux%2BAUcCz8hh1C%2FmFjyM9wzKoK4%2B7ycboLscSUWmPT%2FyhY1%2BKNkR3UCs%2F1rKKno1riwVAXuTWwDti82lrZae2816HOXdjRcZzbOgI57w4m2m5%2B6ySFh%2FN5SLUYiTnT%2FkFB%2BPgi1C37lJMNDxr8gGOqUBQspF8NwPg%2Bh%2Bv6uXsLUM35M1%2FlrzYfyu4Dc15KL79xPcCt39t1H%2BAyDehPfnRCI1shV%2B3i3NS%2BiRqiFgMnkaVWyB1H0J2MXSY%2BiDb0lVbteAHJPpE4e%2FVj2YFeZI83syhZUtUHlf8py%2Fux6c4Z3XCA%2BI92D4UsmfB8vicf3OkE5tpK7JI8AucYSUTWCj3GOz8SLMXebRXtK9UGhjdo0LyZYOI6jj&X-Amz-Signature=547ff23968c0d2b420f061f497c3a6bed6342eda2089833e79769ad8e8405229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=c4191ffc3e2c700b6ed4ce50327777141a4ba169534c3e87ee3b458ef0755a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3XZI2NY%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNSC6p4PWDVTpBsKB%2BdlklP%2BeAyop5%2FWvvCgz%2BnOpCrAiEA0DwVBG5F7Ai6irkiAjwdyV7asQCZdaARytFLUgcedY4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNXgWNmppfwQ2Eyw3SrcA24tTJNvV7tBkypGxdpbGdXzLvG1y2LeEik75b0r2lmOTRdpIxZh2JLSSxCTfRdmagXgaMWq0Lrd2uBVvqOhkopW2ddjnBV35%2BOqP8n%2FPlChwVw%2B1Jd7zOAFGL0qPnpG8MpszkjkZvsnM2Ghm08T4rvqng83j19nXd%2FOfYTmFguZEMqoVaSnOPg2p8PO231ApV1C%2BaJjH%2B9iGl7T01VqcAx0HoDJEd40vuvwATXz2dLRtftW8mLVFRz%2FsgLTug8Ro5olL5PMEnP2KzYsnRPvW6AxT58EpRVIXlarAuMA0liGJ81eXx3gDXyX6M39iaUsKW7X5xIGuO%2Bq6F2wko2GyxnPbgpKAuLZ4TEUNwNFm52sSclGGdppfoVddsjgVdRDvmOmuQmYHl1r06OilWUcT7Q%2BQCo4HHimP4bPwglBVY98n7nmOIxu6qPlSR5I1mYL4YQWtSB4oT2pVHRSKtTabFO0noYInDag6ZUfgKNBRNLogUPSKjAE%2FAvMny%2FV%2BCzEaaTNDTd%2BwDwDN4ZvLLKuLpqDzoN69IsKr1jJHdph1Z4kSVc7R8D2eF%2FQpIiZFzEVFJBIdkoraVD3qy1WYiCUXx7CrpfoV9B2vctZdtQEwLqG3qhIf%2FK02KfgEE8GMJHyr8gGOqUBzbzTObfWZ%2BcIUeOPs4sscYXq0x8IMnWLrg77aYAyPHSYf05EdBUSrSYLafyBApg9L31T6WIEgGYhqssSL5gTa2Ke7pbhCpmhYlz0kOkwTHqxsrPKuW28HjpgBhxvhmISJBe1k%2BZ26hj1PTwccIH58BEnyStNqhP2hLOnOz69SrhNXM9sLj25ZY%2BzltgLN39VF5jqeblD4oNSPV%2FWT6MbpxwrgP65&X-Amz-Signature=1333c597a276bd83f2515421eea5bfa7e437d549f176ea79b3d0a389de43e797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=23ed447e3e7451feaa02dc67c535f7a4ff741878b8bcb72b0eaf0eeecb541fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOTP5QM%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAH39ThWk5tmwDyCVyfHIslIyJWjJAx8vpCiwmShOFluAiEA85mWTiCeqtIkC2Zi7us0A8acw90FSeyBgibhjOz5W68qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDcsQnmhIA%2FfFTYJ5ircA7X51NlB%2FUNZzVPxibABDyaHQ5Bw4C6e3vVZfH33E5W53xHgurn8K0WHw5tOJmWBsPPvsSUaaMPNQ%2BRiyOFt4xSVG3N8QoIO2Vlo7hPEhEZUXyfu%2B%2FhvqmHS%2BYv28NkMgLn9SGM%2BBYarhK1CXtHZmbAGke68tCXWzRQX9VZytuO%2Bzs2iydLwqd%2F9etSO8yP8kXulyCPPb5BsLgWmrCdwZ5JOrGH2crWksXotTNth%2FNd2gvVH9fcakP%2F0dkKRILYJn9pq%2BP7O1cTgBZlhQaS4wLzriEyRUBITz6jIbtIKo%2BaZ8BP4goaIkn0jqGUxTAdqfhCUIfvdL%2FoSxSI1x4xr%2B3rHTn2tu6hpjMz%2B4eWC2F6dPz0B3N%2B7iGJNiqPOH8Z9%2Fw9HjQZkFv%2B3e0KHUztSkNkMUfqHsC9BDqFjkqk7YhiAqY9QEqDQt3cKEPLfhck2x3116ugyoxAdMMnEhil8E%2F36iapHvwQTO4UAhsuRGCfBne6j2gD0o%2FCm32jnb1IPCPDoGsHt3mKjpuM%2BQAj60bFgPvxEB5nQtZ%2FBx31o6cwIo6g5qd2XJ1tEG9oaU5sxYq0z%2Bo3yU0MbcZDknXBE1oPT4Hy8g3jJrJGoXe460RvNsFKS18Y%2Bqfv5eVFaMMPwr8gGOqUBO%2BnU30Xs%2B9Ajrc%2B0IQX03i1KqiFibuJ%2BhmQj2qN8U8IOCj3kCg9ALiR1Qv98RWZHBP2Yr84FNPUGdVbavu%2Ffmni3x5cylYEJ2OEARsA938S7KvS2hlN0sKG54ZamN5hjBfsVYGrMn%2BJU9lgw%2BaQWNKKBuXPOpx3jeLYw6%2FJq3Ixa1YN%2FPDiGFY3PHkJHbOtR08Do72Clv1RoGqwMbo9B0z7TTdZh&X-Amz-Signature=88425e4b0515f26672b9dd6bab9dc68c0d493151d3f3e50cc652b83870d8c4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=0366ee1b4eb548200224fa9dcc6186cc148f8bc7b7852994d53c45c1cbb9ad17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7NKH3Z%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICT%2FmRp5uWGaIqdtw6H80MVGb3jTwJaLRQzZEoyKWB8TAiBvzmMw25bifzo2oWkySpmLHsjPIyngNdEOf01mh06jUyqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDMbOsaLUAX8agpF9KtwD2IosQ2jGugdT1xMOLC9MtA1pVS0v%2BhVwm6lMYHoKLw3l8jRV9jSDsR%2BXashhOuYEBfDP5Cas25DfbSmkNIvxkFWq3cXQ0Ki7s7%2FFwvTJjR0q1P%2FQXTIvrgV7EhElwcNHlhY8wfxQ9azbaitaAhcC5lmcarrRJqnmn2LX%2FDXM1Fg4K93eLG0gyQvf%2B%2BRFIDFAt6NmPu8tJqi1P2kkN5%2BrIy8RwtBQI4qo92zXjHYHuvov0YcML%2FfUp9FX8EgLXa7l8%2F%2FIs1wtEub%2FVsnhh7pXvdyqG5w%2FJdsUnBBbaWbBfnJD6Sxp87iRBa3ckmcN%2BswczZVo%2BHkO1%2FIjZF5gV9x9pGfp4EhrdCbuXNVl4gafTK2AB%2B%2FO%2BVRONySYquaX8fI4K4TdtpS2KBjY5O4Psnt4CGDGKvwIbkuBfCocCjKztW%2FjcAD7T9FxDvinsPCDfBHwMMPCWK3Ud6K2ay%2BOmWLG98Ovo0KPJ7FS17rvvDzZvynRzHoa58SfO0u%2FiXsu%2BIl0U%2BcXKZcn4cyxz2FfG3Zm7k571wlwC2lOj1RtMvIYOcjhPiRavwoVFPPx1LkD%2FoQT4%2FXYmEOUD0LIjGn82r9UhDlY52uNqcp2P6dWWreV7UXWcc%2BqhQlMhlZwc6owkPKvyAY6pgGEHZ9qt1Ve5PE21ycxt3k3%2FKVOPv7dxenXdSN6WBVL32OoWu49MMW%2Bls0i4ea7R%2BgqgUftvMhGb5Z%2FxNgLekOOSTlbcfzhA1wKpMph0onshzIKI1CVBuG5kYMRzbaVKHBMArUMWn7gyoIkvsvExVRPOucFejzGvEsQPmD95ufT1YbDlMvaY8JMlh6FDhi73cQPLHa7H3x4V63uhFc3%2FwV%2B18NfrbkD&X-Amz-Signature=69d739923b6e128fb2e54deadda19451042b7fbae5243a1345ed8ebc7e0f7860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJXMMAJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH1Y04OlIgsM54aKIELPAnKBspcbsX6jiXiqj%2B%2BfK0s8CIQCbaymCqwB6dwn227JYYwli61wzWfJPfXpjEgVCIl3qpCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKFf6BFWy7pX8ajJeKtwD4aadDQw8X4rFSQrmgbjlQ2KaY3S7GoMT5He71quiZifGcIHF7MyVEutP%2FYa7wO39dF4pJLiXmgShEWRWayyCu1crb5DdSQCngRmL6EAZ%2F2LcJQtkCXg%2B4GDpOCnJ3gxVwfIjKKPbltrH6YthCvAUzmGN%2Bsdl8Y0tDZ9akloaAYo%2BCsTSwq6ZuV7rTwVvyoiR5987eXLuzQkC5qqFaPemP31KUCgbeks15qIUxerC6Stse5zStpiN5aZNQY%2BnL%2B6sE%2BEMB8muSmhvVlgQYVCwKjC8AGErPSLnIZisqDcMPjXb2qI22rNVkDJapu%2BfKXe5LrYffWxRNJEDze1PL6rzMmGrFLyQFVgAv24%2F%2FqnTDHxmy8luqlzmuKPAfifh%2FrZfI9dsSG%2BA7arLSYjpXWrQm2sOR5B9x9%2BE5v0kHxScbDQsWWoLmawy%2FqV3eZ6%2Fi3zpDzJsUocrDoM4L34c5AAdDGBZpG4GTb9FN9jFCM%2F0hBtT1V5X8lGsoco6AlJsKJKbRKzmdeDdjzhR74MYmV%2FNfYb7N6WFhs%2B85t1ObATqc13t1snMOFrcy5c1uqUUSKRKjod2mkDVa3hDM5suFAXRpV8DzBrca7Q9RRuKHYlxnZkx%2FvOSUQzS3HaHeUkwtPKvyAY6pgFS2DToK9B7sJ8WZF5mcEOtrkTOGoknYJgynwglq9kL%2FYIRCIOPT4FL3UC4Xk9dmzMYW8Akuefo5a%2FFNSTFuDNZrj%2Fq4ML7LfYS5y66daOQKRSDJucKmHXyrMwkpXlGhSDMdyPEDsuB%2BBPI%2BPLEORqBHFrzOSC9d9w755tXTDES6WiFsT2JB6P%2B1yCjyVtCkXY%2BUJGBTBYydzPtlLoQydCHF3PzxHkf&X-Amz-Signature=ccab08988fca9d666b103e328e1326c3de59556efebb8d3eb3b0eafebe548898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NXGX2XC%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWz0wJDrrrv5hU0iY6WeJehbtOGGdtU2oFBvyWFY0xEwIhANAKEzgziKqOhLWeUb6NPi6PTpPDx1PpaEq0LoXC7vj%2FKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwL78MPcuF4ap3%2FKgq3APddoJi1Ps3VzSa8DrnX%2BFfoJTiJAGUxqZceqxIFFUqpi8%2FT12G8qaC1riv76Y%2FmzjD5dr7tahd2xZaVKrQ0jqSZKV4e4U4HsjMmRhNmJij873jR1e%2BLNaJv%2BYfW1ziXVWZWJD0xZHLjgfqM99NhrLkW6WNvKn4KgnqXhjRuAA2gOARq7eSsGPX1bduW%2BqiPhou6CkUYnAhGdLOXRPG4pDD1U8YVtnvzSdgPSbnA3wk%2Fn%2BVzd6YDq2M6aJI2tMBHjDV5nkgnN%2BrBewlRXVw43N6pNofvn%2BqRHy84h00SKHiOmNxyjCKdpuolIfV3H9Gj4lnpTItXEEyrY9rbK%2FytifjbkLviSuP6ZjJSyw%2BHA8drnQddpd5pN5ouAHFI4%2Bvj6vpFrgWiCHBd4ykxMlXK%2FP%2BCNDn7irx5ej%2BlFxAbhNxZCVz%2Fw%2Bmq4G0CVkMpd6wnJhC8wKz3RbC3Qp%2BOzjRMW20Tx7Y4B589vKf08uJlEeJ%2FTfz1RTb71%2BGl%2BkFKA1XJ37MQZgTT%2F4b2e8yV4lI3Fw5msFInlBBPBFKJBOKYTPtf8n9lFFBE7KiP2GBrY%2BTTDDOQyRg8BYxUd0m1e%2FCsoFiD8rDtTTkFMLfhV2XRcgEHmnee1AXPqXOXq9RUDDD8K%2FIBjqkAexZt04gAwMTfHtTvI8ap7AgOo5FNwPpbGJYtoKD8u8CoO%2F6hmEq7F23uN2uDsT6tla3SzKvh8Q9uHGNJdqbtBPuUh%2B2A4V5su%2FR0cPFwnudtd1IF3yzL16V%2BFlTcxw31y3di7M3TtC5bqPzeLl2OGiy2Vn7aKDu%2F33XMzwCfP4jdFZCtUbyvIPEwhenZq0w3SIQfgznpkcMvLS5jY4hDW06GlCU&X-Amz-Signature=2985f9f3f6f0867533a768f6ae9b668a8383d34cae3719f25085b4c26d60a46e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=36f994b16ee11722edb86b219f9758ea653755f29521dcbda9d8b18ede967d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NFPGI3C%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWd7V6BxcXocJKB%2FQ1skJya7EeMkC63LqVcMnLMqvNXwIhAJP4Yhgd8Brq22TNVlBt5qtrFtWythvsaS5SDCTG56u7KogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FuVXYOAfvApi2V80q3AMB3aIrvsZLoVf2Liq%2Fg%2FtJ%2BO2KPiNoYS8wCvfKcF5RcSkvxzaZ5IZgY%2F9ZNd7vd%2Fx7rmvT4T6VQPcNmDoaWJxaWdkMNHx4krwu0uy1chDWwl9ql4RxhCfB%2BdYkdaeme6xKWlsr5eE9ANtjbNyFvDdV5FdAtOucwMeT7dQQirFvj%2Bp5cOeIcqqEVXbFy%2FOoX9lwqJOQyP49sLGzCBRTnhebNGWBp0ZO%2B90ZeXcTuG0Hv1gxpeNnz1nU4ymMzpfazkM3r4nbSTx67OQYqeditEMQP%2BDm%2FAFHIiHRcJwf5V12imguEZqWndrjkNuI4ab7gdVmeQTFUSKKB5dD6sd2uUAJ%2BaZLSoA1Lj6NmUyaJLwSTk9XSoQmkTYV7GLz%2B66%2BpZP7JGCsY9YqT19CQIJhi6bzlkHjxDcB06ilNFtY5ruGbo5BURPmwmIM1ZTnp7NzCHkoE1BZb3yjpex3QH5c6dCFnraKkD9ikwYAgW%2FfKkrQkYYyZq6LhyO71H66d8BOi7x0Jnq%2FiAwYziOS%2BDyBnzCjKuJVdBDFi5CqhPTx2H8ReWh5%2F5Kd7WjMmUQodq219OQm7ftOZ8THX8AQ25ESCVDyp9giYNogrVOJbyMdU%2BgJ5FRVXyd7R%2FmFu3sAlTDd8a%2FIBjqkAUC9DFIzB04dxpdoj9Z8veKmShdgFK5v0wp3aSQSkcQcCA1JschpmoB8Z7SVvCf55MEN7MWo%2B8MrpIYhE8wKJTvc5sDxuLYwqyicyaZoHGXAVfNMeMWyMD%2F2fzgHCjg3w4t%2F%2FiBdUED%2F4mnnMi%2FYC6liXWDHP7MzOa9O5CgpmzgF%2B%2FYJudHyzZbi3ZjA3QGZfPl80cANay0kE5FxhEfXHePJ2fjR&X-Amz-Signature=51950455fd86e4b7a9e176ac9111b1451a95fde5fbcfab6b6a16b025b0fadeef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=b6661f84f933dae3e1f70fecc1fe406493e0ac90c57ca4b491bb6048d3e23956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=8387331953c6f33941b55d84e8b6de3522184fcdf5cc1ff9ea6612ca310cc12f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=ae9e54ccfbbb890b0390ad97f65a35ec096d20f9979228f44806f7a309229314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=d5646794553d6058f9939586174b6bc1e203e87f173a9d42a3a01e7cffc8ed35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGLKCBAR%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRTneTirugRsg2t4d9FjAXM3GywKuXFEtl6Y5yO16LrgIhALS8W9n%2BdJXVPvFM2tgc%2F93VdWunG%2BVdPx30kWQ31%2BSlKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfeLq9NUtlEj9Xtewq3AOqt%2FucSW4tGcl%2FU4JwPAEYF7yxDZB7dG4Wvt0dGbgZOt6ck%2BnlcYdMaZMmcO%2FWBjvh45rCI5RIqQGIDtXWsqQxFskqsi0HdOoducC6LjkBmO4PLYTOu1Ygb37n8%2BhI0S%2FuVC4NYAio%2BsM1IyoGV9hhxhzSCW0L7TpyEEPAMte4j%2BCqicyZwGGDGqjyVa14fOImimEoHajaMtrwlEczlLj1qzK2cuaWeOmH2qcD4my191EF6a32RCVuxTBdrF9T9Y%2FKGzSFcyHruWXdsAaiDiQO6VDNbM1mvPqwmSusQVWhOD1x8HtNOaAO%2B94JQ69hPX8cxEuaXgqIqPe4ljY9SFhFdZ3%2B1xjVBF0hkDKo40Dp1W6TocpKKyGu6iGe9dUIwcNZMqq1RtYjKk2VGkIw2kIaArB2ut9VFH2i6uLynD5zoIwyvXqf%2FNdpKTcH7lmuUC1BcB%2F300VNcg%2Bdgn57JNwoJFATQad%2FJEGqa%2BDu%2BzAyXEeW4OBU0Cyk6qNP%2Fy%2FM%2F77vDepfmayBIhhGVJTC381t%2BaRuEzBqM%2BAgGxqqPQRE7kgPkw9Lw9Pg8dQNTa3AINLS829hyjMNS2CBQkU0O%2BVVv0BFnXKKxjSQn%2BvxXk%2FnyYJJ%2FOo1N1tT8AXKiDDO8K%2FIBjqkAY3lpYca3NspT1B09IapuHMRS%2FtjS6gZI7Em%2BLLbHOmXC4ElfT5WIlgWy57upvoUyrHd8GpirAchMaBf7FxvbUZVcuP6LZy83D1ITjsHBDGghKf7emzOPBYXdYYks6bQ0dn%2Bce8ayMM3JXuSTzz20bB6r9XirLHfMMuXKqPS806VgBg585EcBbrjKC%2BQTIGhE9YP1eIYB%2FNndQWDKCMSSTwVJe6b&X-Amz-Signature=3e5552a27aeb33bc2a1debb8a03a15e7a4637288590d0da9c33cddc5b2952516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=311eebb4ef89a9740137e35a2bd6fc7174129c3f8c5a8127dab2c134cc65b7c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=d4f9dfc68bd09e8a65c48259f0e0d29ba99c0fb4396ea56a0190a301bcf4d55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=ae9e54ccfbbb890b0390ad97f65a35ec096d20f9979228f44806f7a309229314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=822a24b0f3cd994b0cb0b8eaa9609b546c03c7098f75cfd06ce4e9f1e8a28784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=d3ad734c9f8f0c667e1ddf5b9faf6336c47945cf616b62ffba781010c0a85fc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIJXQSJJ%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu3siLuigZ%2F2unUL8FbTWaU9VExvhTan%2F9vnTIdEYqAIhALvqsQ0sCQF436PV%2Fo9Hfpxs8qLN3hmGQAXSsteAiM1xKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwu9cTZ7EuY8%2BSGDB4q3AMRGgUv7r5wV8pUIHVb5NQipNMuS2%2BKT7J433TvHxNyCpjbvpM%2BHae0o8VzAe1k7mS90Xkgg3XABy9%2Fx1jARfAjjquJGfQK8rHtdPOlthtIZ4S5O6cmjszvCGjlUKqjDXmSwvZ2mHS5c4GjEY3PK%2FyjXalNcJpiGVqnmuNwFjEWlvmoVMzMCp%2FY3qQZ17cQf8dQFe5jRREVhpPpYy6anrCMMwzouS2suAhLdC%2F1YbjfdYQ7f9%2BMfTosL2dlrLK4fq2UFgafqMEdFe%2Bsrb8IERSW%2FsK73Py%2FEHwsx1qemIrCg7mKZj6aFwFFakDcTaq9yrqzzs6oD46%2FnRQL1TgmevjrpLm3prctVITE5kAi7tiVEYk%2BoJdYOljSdLYVbyn7h1q%2Bo25PHXW74HVsr7J6R3Fma%2BP%2BlYecna5%2FhK6MAoJyJfQZr6udFvat%2B7Ge6PRCzL5VvCOTT5seEO7DUynQJ76UzVpqsD7KF6zjH0UolkhpXp6o%2FE7BSv4ypDwc6nlykPTa6alfe6YH6Z2VXFMG8WTAr%2Fao%2F60U45h1FbsrEym3SqcjuB45WaCa%2BxkQWapyk5I%2BtyH3CaNSvvqrmaOi9XmmJBtXhYknpzXuU%2BV1nc7i%2FfzdeNwYIIc%2BH27x8TCw8q%2FIBjqkAf377efJyNBQ1GNy6iL8W%2BvXoHQxaCO8dQX%2F%2Bo0BgfTu5cdFEE%2FPNLVhIISeUJzzSJjXNaUuNTFzbeMIaxe3hXrp1GwvTEB3fpmekGZ5mTqM5e%2FEkJS2ZTU45%2BWxfi7aCPHdNhwgyFTVqPN7YS2eUzwtCyV05NN49ktmvOrI93FwsSqFyE%2FGKZRl%2BYx0oPsrrbtX1WmgZ0DNWJwq0WlX43uyCsPB&X-Amz-Signature=f8accf0c8caa62dd23bded497fbfb878b7467fa3768995af55e7c09c20da9080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


