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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=2c48a37baf4d88f39e88e9b9070d42a6bd0fcf5e697a956cda4017b25060b9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=e81f7d6068c1c6bbd6a3c79a20ab4de4bc84fbac8c7ea1bf3646a3bcd05e097c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=263bb3c98eec84b9a243dea7510e2a3beeb77e6eceb165540cb1cc9ac623e8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=1984b4c06eb3737f256ceea78c9bd7e78310738eb4b8ad694c4af64da454b8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=b2815578c839fe7d0f76fecd7f60d55ed85091936abf9db45a6dca0e8e1bf32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=abd6216217ee2586a7f3ec95e9a4f461a4f9e171ab4424a5b0e27c5e97ae556b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=9aada52b70fce6c59259c09662f621af8c918309941508a2676b0df9ce51ecc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=d29b7fa580c3fe44e49eb9dabc153ebb177c5bcacc9247fb7daee1034372d852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=6a194acecd4d6599f71edd0eab9e829e30675ef0167f9be71ccf5e77215f1180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=c63f4dff0b0a6dba3f32b154db50eae884cecac1e58e133b210a72a5e706881f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRKORHL5%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDM%2Fdf2xHtx8a8ZYSdf76UW9KukU1VeiWACzd%2Bu5OeJGQIhAO%2FzaqIiWJsIc5KHp%2Bt2dOyi%2FPeqC4GSkwme9Hd%2FTW5qKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BCBV9ln2gybQ2knsq3AN%2BzFmnaD5vWd1HodpNVs92duDM9zyfSJAgv0IKGM4tB5R%2BH%2FCUwEvNXN7IABBNseada0HLOvpwaYNn1%2BOCrVC7v9H9wlmcwlo%2BUOreNPAZfr%2FXU0haQ94oyUozDeNUW2paFZhDnnMgXNewKUZN7XmlU0c2v3knE1jT9mqIP6SA2EUgbz7wEMTtFVW%2BDB9sm2WdeH0KGGvLV9eHJ9BIsOwhQ4%2BdvwFH%2BQoqKPOh%2BWuUXzCsmiiXaitMjTVXlyWXimWCm8d%2BKYa1rgMCTfZmouXMrYEedAeAIiEiSTEag53VrS3D8VJOYxADsRQVcg49w74sEpAQgaspYPpngk6vvzjogjz5YZnC9L%2F6Ud0H6gUEFMhuG30BEwwj0WmfjAQEzALELmV%2BBQ%2FAXVIhpcxnwgkiv5bc06A1AJpETjrr7W6XfXfPvH93zqGvT3O9FoQv5M%2B44B3vVSDrpHrDk5pHcPip2bZIez9dbibR2U58gt%2BytlooYnqCxnWN9t09%2F1JQtzgZQzEbKgG%2FlzMzkdbaUqctHqkqHQcJTP3NJZklR8Bhu0kmO4VWxYeO3V5VWtDGRcjx2SOpnRRA%2BwbSS0dTWoC3Sr7%2F7ty4VhraKF54ucuIqRXfILIWVOhFj7%2FMtzDE5pbHBjqkAZmb%2BEF%2FLK6uEKQPOX%2F8tGv9AwaqxN9tmDOAPHfsPFhJoDZdyBCEKb20BoxowY1da9qX7%2BbP0oo9MPERFQ86Q8WND2c95XehnpX1F40Ybzd0P%2B3nCU3jwFYAov0wxR34C6x%2BMvZ9pwMgNM5LY55b2%2BjS%2FZISnMTKJLjMt6%2BS8DmLaoyWX94dKEm%2BjoYkRZEqTARrChc7BkXjlHru6rQRzgiIWFHz&X-Amz-Signature=edc0ee7ac81f2dac3c9fc4c5a56b8aed4c43072693e79452a68aeb4b1b0b2fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645IH2BOW%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCz7HcNGIHIzRxmO5C%2FMe%2BbeDcUGXaBZvQypgmM%2BjyjpwIhANe84D%2BcPrncPkrOvHnuo60F4wsKibHLpVZ3JCPJG5z7KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwrrImJrig5j4rUmicq3AMfDwkrCvJ5CkTMsM6D9WuZckaqFy3xM8Fsjtw3t1fOt16tBteDPd16MFT7h62akXJmE%2FwD212XVidEGusreOoetA4obSc%2BKljT2z0EZTqIkWJeWZnezuaY9RyK1xBsPq60UjJOuD%2B4yTPoKCd9dB3xBFo3a32xt9gPiiQz1nR8cWsFcH5Uol%2BnxRTjBI8rjZyIXogUOiEth6ZLJTrgmzSR0DQAM%2BixXSdeV7EzSEpZLdKULosQVU3eh%2BRQzhpYUnLOdgcHWdJz7gxjE%2BXsfmkE124iVmFRZafXFFvz92Z8rw0CQ5zKeyUuoNuF7Sr1NE6nIZld1GrTbFMg9WE7SfmC1KiqP1156BN9SDrh%2F8SZJExLaGycss8bS2EZlu0EvS0kO5Mxc0PTL1yFtEaghqX6JZdQghiiJbmwHaC290F1NAag4fb0cI1UrwdhffemSLYcnYRikLFAWuAXWsqUUAKZzNl6Zpl6ld%2BKA8El98BaGAfa7PfgW7SgzNcUZA2Q5mx2yXhFcysAHnyoliaaSxLGKrq1v1P6alRyWxcftFmkMfIrleQJJQLtw04QbP1K74mPWabbhOnq6N42ULBP0BX5EFzTnCkBsPDf7Tdh7MRcaXggjub8hU%2BuzPgwQTDB5pbHBjqkATAwN6oPDmsOFGwqsMnvQq17fWWcV%2Fc0DuUoGADPU19UMfWYQVTwBYZMyESXx5f5fjVEM8G9mEdZmG7I7Pz5g3783200OVTwXce%2FMaPRsktybFGVJ%2B1jiaL2ce6yjMUFj%2Bq%2BDQeDG%2FK2eRl%2FjYTXn8yvX5PD70O7Ujgh9EAWBwuDB2mkhoLcecLHUm9KwRzc7wmUF%2F7FZ5eeUEMwR7%2F7YfQppnsG&X-Amz-Signature=a86ec4bc3ef574bfe14a37b42c3daab6263bc4aa1ecf59c533d1ec5f1d8dd5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQBSPFTE%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDCVd%2BLZqhKlXN0My07SMlupvT7tQjj0hT7FR9VIW4QyAiEArdeujqC5QEFVCVlIGpS%2FbTMDHXuGpAv9iEas1GgtnUgqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGBkOn7sAzcV6TEcAyrcA51wD1XmOzfYni8nNsYh4XJoMHM%2FLtR5zmRAcSQWWWBjKGiHroKGsMKta1nhp%2BVdR8WILzGTE4VlidIdUYI4MPmnJ5JN%2FdDjTN3U%2BB4VrPSWXIeBJ4REwGv3KeukH%2FGBtENzRXJQzAQmtJvg015zFNK5yU%2FtIFMePFAW%2BptyUk6sMeGnxj%2B27t6K%2FKkdRfT38LJ1qHq27XywpLSZQzLwuWzCoXxuC0cPk2hJcb8uvpzjbUBleVXZX8d1dYogbLC0Ou6ueOh6wZJ6A8cgGbp2y4XorOL7ZHUK5dr6%2Fit7BnX7bFDsEUNbcIiix3caJStSzqZauwYRUDrGafGV7gJVqZx8SsTie3BU8UeVyk51D0RLek1UHZFGat4eF%2F0z4%2B2XIEn0iUahWiBwy29cXZ8l1yyoDSOB8SIqH77rSTi%2ByTGGoL1gVI%2FT%2B7iStK9rhCkmJSroXehK9%2FfvzGt2dG2mEL36QZdxO46fM7mQuPVUB1459LitFEujykvWhchgh0fO8XUzzvkGGH5tnd0vBvectvRW27OK8kaooBnHN2rpc0xSKFxX6TR5Yz0SK95kYN3ky9%2BlJwLWc1EzThuCNCcWmeNm0fXA3gNBXVSypTajPbiD1PHiiYojcx9bgcBkMLbmlscGOqUBUiTFkKX4zbp%2BcIFLA1CQ941MiJ2tOzgPgHayzsHptHtcRFDLnCIFvZVwDDIHhE8g%2B0aYHT%2BE1JhYEvRrbf9BwaZDW%2BAZG2adImHQc3aTFqXcJox6gQ43ndEREajICBW%2BHIojacRDG%2FVGKgmZa7p8aAiE%2BTy34ORdMn2GzlkLnGtGzLIC2fgqZXWWxAqamJ4CYm3FWHp1S7MNemxYxqumgyZJZJ3B&X-Amz-Signature=3e33755c68defad86775dd239c2fed892af30c0da7def3c0da540a3203644db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=39195cf6eec23d3b1779d943dc24de731bf33d2fbd18ef2e284f492f1773937f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTDA2U4S%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDHul0YouD4XYXRm8YpiB%2FdeMmARrjflOn22x%2BIIfi%2BEQIhAMBg3P8vtqEtUwzPn7%2BK7AuPS4Wx3ovGngGsaxHVTFI5KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrPBldLD5uV84fHHsq3AOt3lyWidvp8E4SfS2F0GU9OULm4ILejgzm41voe6rqoG7TuOkOhdUv1D%2BH46kooOsEC0XfkU5xLtu4t44NAy9Uo8IuZnUSmSSEr%2FHxCUDTaHUaI7ZsL7kMVEOlQTpHq9sxJT9RYQ5nBMER04HSyCuE63UfujKqhknD%2F9JO5vYWsAFaN15uMs0ij1Ja2BuuMmB8kUaUDOEgQBeJIKX0H5YAYbHneN%2B8xsFu5W1ncuDhmHWMizpiugXVcmJElDodMk1mt12eQoaitnRI7W%2F5Mft35Y1OLl1JS0UCG1LanwMvQgLJtBmCB7EPz3t6fdhHzZQUTAbcYuE5ayBjhA1TayaXYEira71sEz3Aur4beqEI8noZm4D8tIlUT%2B4bXm%2BjWN32ySeM6oU2K%2FPcs4Sr%2FYaHrmcdkArjd45NpA%2FVuKsawcxTCcYPQr0C%2BkOghPCEHIvDQhb3ko4JteKA%2BM3OR7AXNiszgiG8AoIaTm9zrCeGR1ujrdgjy03qTHrjBjQtK%2FOLlCB02cnHH8Je6wjNVeNgFKRWpNLaZPWpPl0Z5oqVTIDlYPzW5%2BoPpM94DZk21LYKuD2reFIK%2BKL3Vw%2BuiKqnKPCobvqanW2tBa6AIyMmljwopJTaxVpfz3weLDC25pbHBjqkARPdV9Gta8oS0tRtSsWezp2SFRZQFW5ofULx9LyArJLNoavIl9U%2Fehl8KaaHLlHz1kLP596qT6bETENKb1a%2FwA%2BnBz4k3oRLsPR6AOaAD1W48P9yWFyA7s6leJbOyAeUknE7mQaZ3R7mKLn4JVVgMFqpZU%2FQhwFExwfYB343K823VQNbf1DaJjRJW8%2B6vmkcx7QoGRo1zA73e%2BChsQVPC0I%2FoFNE&X-Amz-Signature=ec75f256436229945676170c92d0a951451983b5c462cfc03e63b8388471cbd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=8804cf49e62d664362a618704c22bf24929138630adf7201cf97c9759fd00854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KMLJKMG%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCZFmp5JjWd3Ujapkb9osRV8zNysqwaSCBkBFxLcsRCnwIgWEdvtpz%2F568lhene8MPR7gPOmfdEF9C517mEmNLAB2AqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1UUnw3E%2BnNhQ6b%2BSrcA31tk4ZHYVrT%2FaXbF18L4mJcGBGi0sx2ARzIXWevIdYLkLP2u0Mdh9NPZLcUQCsdOKUEveIZFlxDLyAdZgCw%2BVwn99SNJTIDPBftIdeFn%2FkjV5xalWVIgycsuGUrX7nNww6wIJ0cZMkU9VA%2FBxu2LNGi34h66uD1pwbU19AlXWNt3W0fsmFNkgBs6KNQxUWqZsK%2BY5zuEoEfasNcqbhsa9nlaOQHriegJ7TDnAxIqjIYhPDZVtvodBi8dwtWeE6U%2FWu%2B5Dqh%2F6UlhiY9Gxj2afWzs96q%2FuWXF34sgqLFjylvcGJUr7shtZSz34ktfoul5RYSd9wdq7pg5VOTAfhNH6Uco8mCRquOLU%2F%2FLdVSBsrHso%2B%2Fm0MOjPS1idZV7%2FNxCXOcm0AXUil3MMkyqRBKO0rsbG2OjyDD30ejVjrLk%2FvGlbf6C70NOazy9tRaLjOdt%2FPmnvMlvMQLFCNOUzTsEGZsYr6F80ah0aaK5c0h28XmgdZd2nL5Eh%2B8NxQStf7qpOuyMx5hBSR%2B1abuZldeS6x8xxTECgjS8%2BvcbJyPDiaJe5yl714ohNQyP2fpfUOWDR1ghl1XVHV3Bc6wwIXyVtUvZ7cjLODBIrst4RftfR2uqBnPZbv0RW8sd8TpMMPnlscGOqUBqv3hfyK8dnY89oVqAg3uGhZVzKZQM07FMbsGzsj2zRphHjhnM1EmLPw8wBLOGrgeT8EO%2Fu4qtjjUp3Z0BLg6lb1w4SuFK%2Fl2a4po4Mlg32Sl05Yja1Y7rZRjKxaOa1MzKCupv%2B%2BlcWZlqAJ9cQp9QdqJTm3OtWjgXTqTIwdXpQxUqv8kT1K8OwY9Xcs9Zi18OoOawbAdNMHjYlE11vqHvoEFcgHj&X-Amz-Signature=1edc0715ecb1a3622802eb07160d314b589e06f8b3061c17fb4acee5fc5f6594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=ab49ef8b9f18db87764e86153c1853b143563a666222e398537491c42455ea51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3X3ZKU%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIH5fD%2BhCMpqvnpwvwwfI8umiD%2BaqwOAKaGaeAavCTLyQAiAL4TTyfRNGEBtnfC8w%2FdNhw3nkaOvTVIGyKYyzJ4cofCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4mN4OFe0XceIn%2FpKtwD7VzfoQq9ehOMk26Hr6W2Uc6VWWNHuEamfHuY2cLcfKHpsyz1tuTJ0KO7qc2W9DlDyeBFNm8%2FFEIf6k3hjx0N2Qo%2Bh5M7RyH0uw%2F%2BKKVrtOhH5d4grmGBnZjEg%2FrLejuXoRm9Kyk4OxGOIqttpMLpNTq%2B5C4jf5uCszW55OETiAd70S5365u5abJ6zp1X9baOCWu8lyUwcTu51OiH56ApHMndW0dcuE%2B25Y5C%2FFe3MxUDahIyQHskxSjGEMcbYJpnVdBwtWX441ZibnaoBkEEYDSUigbaXZWffiEJLdjjN8xbFLrAlgefpPpDymjG1KzTidOYMUmEgf%2FwFe8FHP7zDYT%2B04IXWDNz91rXPo9U9cR7NbL3Ezp8IaaK74e2M12YMY6n8HWjsmWE64wFBYOcYgYLZsiLYhTimFCJW%2FEXs7MXqbA%2BQweTcwwyaIaeqja7ILJ7uEjntJnKS6ilAEMueIUJj7Hh82jmzx368Guq7GZpaSQyLQV6uK%2BH5S10jF%2Fq20qiwY7Ht%2FhoQ0RghugVZQZo%2BxeQYAgL2UgfRJliIlSdva29W7sh4sjWzqrOpwZaHJxjfw4Le3bchT5K61wqHb5WYf%2BscQW0AzJxuWU4fhmvA5IaGvAUyax43cAw%2F%2BaWxwY6pgFrJnG%2FRHnT0Nntb7uqVOaCKyiwX%2F72tVxmxpEeI1Wrcsh%2BOikL3glt6KXJQXo0KMHGGl6wRKtWJhSgO5R2whXLmNvkJDxHk6iJSJOkNjffr82%2FaOB3VzOjjHyMA4f%2Fe1yVPOk2Y9FU32JvByftjf0gT7nI9z6BAFZpRd%2FU%2Fjb4pn76ec9e9Ea3b2gbBH4cbdLtET08H%2FCsnzEH%2BKsB%2BLZDIU9uJAnu&X-Amz-Signature=8a533dd968bb90addbbc24613b3573ab259dba4d92cc3aa3f78807c60fe9357b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=9a5119431d1e2181de9f63c40961d925a6a4a45374ae35f90a5b4caf9f48454a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJNVXGG4%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCs6lQO5snar8KBE9fXGuT%2BQCf2TGyifo2heW9nyfcj9AIhAOQX3ZaNqnoMaSWbqG3rM9KfM92EKRAtQ8oGyC15VAmsKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylYV1hbDFJhbKTiUMq3APej%2F%2FjUIqpmcDLKpZDMZ%2FL68IzDc6qy%2Bp%2BAXTmf2nhHkVGODX4%2BNakPmA71ysonvy1rnT5eAY%2BFGLlCi3ykM%2BCY532EKo2w0HAuOO5CrP%2F6VETtBqc0VuduGIT%2BrkSRpCk75vr2htIdtRqkeAFXr795BfG5g3ogZtq%2Bq4B89dcLrstaE6U%2BOsAwKv7orqgPV7sTd6KVmyPZaOav%2FTFrKtJ%2BtXUxr6YJYunwyunWlXw0dP2u3dCEu6TpUF4Mveqw36A4vwgVxV2xBtT5h57A3gi4JnoRUo6zBWPddSq32VJrpWGWsrficnzWv5AuR8CBimuOSPc8r1xnxGhhY93EiFqb1xBCFizhJMxSsid5m%2BPSz7zbBmixRBCH%2F4pwanSwKm19VGI2yz9ClJ6Z%2BHD9EP1XKiBJoPLHSETOhp5DhruMVVJlibmUks97sC%2Bj%2B9LbTSbbvflHMl7LZjIf3drBzPrd0ba5%2BQITJDi46dGb%2B%2F0ug51GSigukupcZZ5QL2bxPkVXR7FllC6mZ5kTb30shz%2BvHmOO4XhVCHAsQ4vWIHBFxY40Ebf8l%2FnjZ2r1Kg8ITBPrD6uH2hF3WtKP9OMy5CZz5OP0dzsfU2RG3aDD2WHD0rM4WUeKxF55VMKEzDN55bHBjqkAckauc2JyIio3m5YSg%2FkCc1fMR0xRDcoh5QHttKSOnRPdi5PLzhJ7PV6tUtKts3rNj9PU8qQGEwf3WMOf0KvxJdE8XHDhuQPgrWWmeXeIca20h4kUeUH16cKJTSKX6iTEu8JiycUMZKdJ761BytO26vLBu4RwPnUj0uQ1sKPsXNam%2FDVl5VPPU0DZ0ighbgXzkwcIkDPcFeJZmhwjAaJt%2FpfH5IA&X-Amz-Signature=0292948bad6d7cfd5ffe68cb2230211ee26e40e494f103fc1c49d9d97aed936c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=7a3f2e550d938ca7ab46e57ba7389872753e3bf35cab517d486a19ae89ce21ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466624BXCQT%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBi%2FtT3JAzvjTbmcOB2VvapAGU202osQZ82iOwPFnJJ3AiEA7vX%2BHFwBTV7lxn6%2BkgO9Xzd67jly%2FYzeIqPNuSBJeUEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4S9R900mNDYVKmCrcA3ojHG9jjF3Uy520SmrlBhtChiAjNFm0TGW5yYajP%2Ft07UhtiZDTOCtihq7sHMUz2Dp7M%2FJDFcY9oTZB6fYFjJUr8ydY5gbUJ7kHjAMDO3s2NFGYAxd%2BCG2IjrC4iywSZAMiDFgk7YXLQF01ZUtF7ziNa1HYERCnhQmzLzRYmyPeES75ZKiGNhlVTCVgPGTV9T3KvuV%2FS1%2BMN69NjfIyvCdAaidQMq%2F23k%2BzGvKPzdBZDzPqpWdPBJeBCh6tW26pgfhBtSIsqW%2F77GxGlOcoTMCU2MrTbjtg0qchmaUJcz7lsVS6Oxh5hDPVc9KLAyGEfDptLytE%2BelmCWqlHnZwZgZuN4AQ1ybCmG1C2mtBq6eSN1%2BH7MCBNP4fn0ske7t222UxXJea2WI8%2BWSSz8JqkgOZ3dT99ypL4Q9QtnXUbq4dOt5ukNjc5LZEGJxw4tpymjdq7ZehRw1n%2F5VJ3sPoSTzHlt5kiFrQLyDCsxeunBhLuwC4JmvX6KiCuS1eSTQucchp3owH%2Fs7Qo6Q6rHYla38m2qt3ek8GJtQI9UXYldZeJoPJiBU1rezrr2E6LsS5Rqenim8ODNkPsQSuGFKNBbTThfpC0mwxq0KOoqXnC4dtNAcWjtENVdl%2FxecbMLzmlscGOqUBNS9ORp9na7hKIjduUL%2BGgkisy3Ym53ZvL2c%2FLjF5fB9a7I%2BLd%2B6znOmTg%2Bt8bYMO3BYj7bBwoRtdDD7gTCZwcRuhkUWZO%2BfIIC6bdWnDVDRlmxHHEYtRK3pbH0otxDsFww2EWaOEO3jm1WCT2y4IMs80aOGllWcksbylp%2FuAO%2Fjzbrrh8SkzUzKZ8JdCGmG1Ldo6WV4MywcHqOVFT%2BJHE39KNhsD&X-Amz-Signature=313f97a5e229599e039cd35052270aba58812e8173c2556d8e9eaf193f2f823e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOCWZ6IO%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIHYZ9jNFwonJkYyWOhQbHN1sve2IzYsGb7tjjhW0dWGGAiBiaZCEngoO74KmK1iwoqWdn%2FOTPuLAOsYdxctJrTm%2B%2BiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSzBWkdnTGtvMaO%2BzKtwDhBAeZQKvejK%2FD1njh7Auu0u%2BFwJCwS%2FbL%2BXQHJgw76Bi8Y47G%2BabllAM%2F8pgnpRQMk%2BWYLnyrz9eutsLszr2PB16%2BdjzfnrF3lfkmfCBThS71fVhRhQzPiqdBOVbp5erR1OnEBoNPw%2BjnFolADX6OoJGPKIFoBZOMn4wchUIfjKNvFAsZjuwaTGY4MJpcPDr%2FuAOm1GX2L%2BS87wKgO9lSl1xfFx%2Bjxx7jgXgp1JGfNANBxHUVhWjGI8B63xgH6MxvS2mcjx7QSLyGAXHUJRmRSpZ9J1EDB%2BTh5dzcGCMAAwm9tTfnlszSWPDldWB1u1%2F9YeEkHz%2FCwUwJZMUBEnB4dSTyleLY3O9r52FEg26wB7AuqLJy%2BO1Pdu8kNy3oEJdYnI7etS4HrT06Kv913LiHLeibrEMy%2B140eqMxuH3gRP3E6FyY881ObUpUxfQWNH30oHeghUv%2FWxI6CcRxH6lnwfG2Y7j8mPd55kH8owOi1TOgh6qJV6Dj5%2FhyaGgN9YWB8zND6Hk7zbk14f4%2BvDIpulB0jc5laDpAXDPil6RleSoCL14voCXF2GHtNWgEAlbsm%2BYsntLkC3jjvR9nOqpak8QhspFM7W%2BVluqBBKH3nf5Mo2Rk1wccqZCyTYw%2F%2BaWxwY6pgEQW3sH1yJu8e%2BKALB7l3FOrLXreXXTotZplxn4DdLJc9oHh229hGjuxF2s206n89pSgJ%2FGNTF4CqWFk4as41uUl1KM3QPtj1JoVjG87VSku%2BybGxgWFiFw%2Bjfi%2FElaN3HTggUgqyuGiIDHqkHBwQYdE%2FYvx8oBgyRHzwpxz5bL4DuiJ4iYlr0P00SvQu5i7Ns0wlyAPGCGJLDjifmQ5LSq4YABDHvp&X-Amz-Signature=be226da3f3a80735932f9baa3e1ad6ffd5bbd4abf65d72b09b9757db117b08a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3AHB43K%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBHvokKV8wqOi38lSsQicg5IDESEe%2BY1eda3ydEbVzNnAiEAwKGJV96NwcFM2ZEhwIdUGIAI8zwlC64wjrCad8NbErkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETwBIK%2FA3Hm0HUQpSrcA1TUiQNgmob19uy21WB%2FdvgRtpK2WWzQjvu5u%2BQy7%2B4AeUMsuiC9z9XdON5se5VXdvWR8Ksj4tfqsqQ5IhJoyyV8LBukv2gkZlrIaEN0Ttj3kGVDYWS9ndIb%2Ffp4PaLRyTNOBY5AEePDVfF5mz0sPYFOiIiq1YIOAj90AWFTKAyzD43mgEVCxw76WDIGVNtk9iuV5SXSEI3g4UZDYS%2FM2O1R%2B7XSHrB%2BWa4nRK1ZfnOfeczMD6kLS2btTHnoJj4K18UeCLIPDAGRDnRA7I54l2444pU3GnQvjbZlFBxqnh%2BV4I4JjCdxyuxF2mrmHZGoOdBpvYF1TV9ZrMUndwTsNE72NeLKdq5Eno6zdobWTYbZjwA%2Fz2FL0WHDofBhIfGeN7L%2Bwvq%2F%2BUv1lLQvAnysdDhmNxjUjWR0bWyvAjLLS%2FVb9tyTRpwZPknScfbgw6fPWOkfU7tFFVKXINJKZSsCXfp5JjwQ8sWk%2BzEugeK0APTnljzHa5d0k9yGCDZO8udLxUAjXd3vbbAGFTyNyItG%2FZNDWdothki%2FTTuTnGJCCeXS7YsdPPEBiy5P6ZJNbzACHFJB1Gd4lEgTxNRIUVug8j2zI7LTtoUPFFE6hQaMm%2FdkGylpcTLLbcyn4RHlMLznlscGOqUBuxPyLMjneHGghw%2B%2Bjh0FCnthaFGmTM1I7nrL8k8HL4c9Lx2CyGfdBwy6TRwhuUGY%2BXvMSNsx4B%2Bu%2F0x%2BTU%2FAUwk49c3r1qim%2BbhQW3ehkKHs69ozNacCMA1yM2863o0spUrSldI7RwWfUfJsmGXwnBV5vUF%2FaDJLraRq2XTbr%2FdQzj%2FsbvbZthqiECT4N4bl21Hs6EcB%2BLYsxuVQmZBjOP2d6fFF&X-Amz-Signature=2dd6556941fe60eaf88d1a9b26696f5ba7bd31a1b7f10d774be10ab5da05bb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=9db4eaabe39ce8f70f48626f99579c2678d2936c739ad39262c777a155d2661f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D4DWWEL%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCsNIhm0dcZfZNWEO58Yk3unQfdD7%2B%2FyrljmRBFRvPyXgIhAPTz3GTW0PG0erKUkuvOqmYylzRbi0r8XXHyZ4afHx3FKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpgI5Wex8SFATAsikq3AOP%2FNsWeemwYfrjNsxtMsiwjKXyMago3MR00md%2Fjhn4O0aCN42w%2BgutgmTCiawc0fsC9MCZZW0OereE7d5A5UH%2BNahBC%2BgoQn1SkzZ2eZHSc8PY3Pz5jfX8%2FDWIv0AF4FOdXN%2Bl9E9wYmWQrXrgMDGpJh09brxBrDzMaDxAtFlJTi%2FsvsWD8nQwC5qgatLLhKTbJMIDzu8xQOCVKTN7KOrHzbDbklSZAhPNpTOXvrO%2BzTz5Oht5jtIE3Tzq6eydxHw6dClFuUQc7ccL7FfIZ5aSP7Mnqz5K3F7fPxNFZ5ytPHcOa4XpfIWWkhTI4Rv7ENhN%2B9r%2FqIJyFBMNkNDeprikq0NUxcoAov%2FBTKoIuFmH%2F8nd38dH9auSlAhjezbd1t6zQqo9rjD9RPAFO2qqJmKfh1MiCkmsm8%2FFMFE%2BNhveIFlTujT5baYalL84d2bCEuJyWatBe1UKed%2FmjV5vdI41hWd0l5EhVwrBIV7%2Bpv6hBObCQQaaoDeGXDTSb0r9GvY1J1AFvWO4DMnyIM1pEGskiU7%2BdA0n98qeuh%2BCMMpyShMsg6nk9J3NOiKvjKh%2FfWLZ1zsTpTZ5SVLJ9EUjvKUnugHUp2S9UpSA7htgoOeVrfk1OQt2baJ9YyHiszD75pbHBjqkAT5NA2RQNmrOTGB8eS%2FpssKVk8a2GznfKmjaWy5PF6zkZZiL0AVQ9rBGDkHSfn9YE4zrYZL7D%2BSlPtaSY0elupt%2BRO0JgFSMkR37ddqV7W6yY%2FVcyj081wmxhme%2FPje0povOzNBq2nIVTzzFODbMspknPLtzpyED9%2BtsnnIDUZ0hkM5nFY4XpHp16yjLMtdO4GBssd%2Fp%2BRxe%2F%2F2YBENxxmMEgETo&X-Amz-Signature=8552dc4b0808a8862c331e2066bfaff2049bdf839c2a0c8585f02b6f76e81760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=f7e042ca17a949c2c9051fed5827ebeca9dc7eaee86ba0f475fb3204bce7acc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=6b961825fc2bc1435379eef5ec3420007e4c4ebd790b2caabec16ac4a7c02fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=a6268eb537ea5f14b4b3263f5ae4de6a63e85eb6db4668b75e3b4aa05f152626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=e2c5d6e85e29f009b67e1c1c73c62c1e6658667d6c92760e2539b1b128cfd533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFHROG6%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQDxftrkyCpdZA8rE6svET%2FCP9jkRJYWxbQFBtfXzn7%2FSgIgeNoom%2FEvbxWegCIQ%2Fw6csE%2FW04Qo1CUzqGlWGDdq7vcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUhxyDPwrEQeWT5tSrcA1eqcMQivzx9LtN%2BRTo28FJhutL34GWIhx1G%2FpuFm8z%2F3%2FTtO0YWVuVo%2BBJ2WAPg3%2BzOmkSMHhDMlW74SyoGnllEeHdWpDQ4DL53UaSXkvPRk3YeNCHnh2wASGa%2FI9HsE44FZpOVmdVfy5R5aJu3zL5YRDac1X51OPAY4eLg1vdvCIzAzDbZENGgaZRiuP56NUSakwVzsIMPKhYthmRnX9Lw7FqQPr6Jlv%2BbKOXLdCkMFX6xusbJkQa6k3BVZQk26xmrFYk56V54XZ9UI%2B19UuFJblQQleFy%2FJ9i76F9vKSPu%2FkTsUMl0%2FM4U4IenNRPm1napllY3zDs0zc3o0TbumhLzV8DEUzsbHJwDbOHbyqSv%2BfTrmjP6FUr%2FZop7r7xJD0yoyLTeSGaZJSgkAHsJDpFNDB9H28xnE2ku9hH5v2Y0XAbX3Y45aWnpUROQe5MBCIwmwKLgVMvAB6TNq0KUj6beW7gpRXz5dqTmt7BCTUnqkPnNVjApn8wq3YgILMYI6P6A5gOu8mGPlt7J1gmm2asSOEZLll6wHmuefTTECMZsRtvTLq9BhfQzBBxY5bhvJumCUk%2BFuPsO8GyxTKm6AOQj8%2FxZdAc4ugUDpF0OW12s0lgw4CL6edn305OMLbmlscGOqUBoJi9jcDCZvSFXfS6A3DXI6XsxNhrvKVFpXPIB1Ac9dE5fIgwFONQob02upywotFE2HE%2BzP2v6bPS8%2Bx26rhOiukpJoI4gro%2FB44VoW5%2BBfpkaxVFnIFP9oju70fBoaTNuMh2uRZgBvpQ8dBhk5BkZBKPOWkXk1auzksEcKwy8TYNnRChEOV9CriSvrTdyUMndaqREa4Ym75go45%2Fjs3bI6txsnFA&X-Amz-Signature=72f27d5f158d9264ca7096ac70c4bb486f1e9133ab26f17c3f73b086c5b54671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=34184e6c142523eaf909ab45976bf7d4e32fe465af7f78b66bb9cbb6a8d68028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=26baab5f46dbe3f9d6b623a57c66e0f46df951a568b5cea94986d4e0beaa45cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=a6268eb537ea5f14b4b3263f5ae4de6a63e85eb6db4668b75e3b4aa05f152626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=ceffc921a7b784408066676ccb0f81dee2025830b631b9e778a6225b2dd30167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=52ad032fc877cb79a7b94537c062fa3f82010d377dea6b59b91b6a4c3f87e6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVJZW6SV%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQC1vjiWS%2BtxiH9Ck4BwokcPbB9gRVDI921e9KcgC7xjbQIhALmgqcUbHofIecuNKgr%2B7DAz%2FStfKcf4Grfi9Z%2BzPiGqKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6C3AhmkfNUy8GY5Yq3AN6FldNA%2B%2FjE8UJQ6x%2FhDWq0cyri0iN23atZMe8pJSTNiMrYRQPBgSG2I%2FNWCrk02ODdlkX5L514VsuTUfck%2BgSWGn1NcbmmZMJozVKj7RY9In62NBYh0AbGlGG3t569yBDE%2BVCIzLXoAbrkh595lk1TtqpElsrUMufUmIy3IuotoD4xwGM08gIVz550ima7730FS%2BjDdT2B%2BNBQ0%2B7D6bu4cXu2PuwiPGt2EJ%2BcNaTPRrUEd3%2F55GwPMrfyzFNqemGosR60pQLkeSuz7zGpuJ5LLawvvDJt%2Btx0mbwkVk4tFaRHzR6kxlfU%2BDRiVbzIpCmMHqmUrbU0WPIzDFCkK509%2BKRI5ib4QPMd9g3jN8zfgyCmQVENZhvMRpxbuRAqi3msE4skL6fCItHQYACe9YpDdc8QbKDQpOcGsA9wzuNX7jSonE8R2whKHr2NzfQlzqBJUS4tOq3I6hN%2FaVb2EJYgjLUu%2FoqnYROdBLpc1QAvE0dpSVVtdyNtK5UdXEA9%2Fen0LYY9CSkukg1%2FpQKiDBrniR5uHtTy0NhBSDAsPGJy0AZ9nkAGN9ufDVznmoWRlePbSR4kKsvHc3QR6p1t1ewDfR9H750c3pQ6cGCWKH%2FCiUrXBEu8piClxSQbjC65pbHBjqkAcQ%2BTMBV10XoIliLOD74%2BFvfWP4v6RQ1%2BRNy60Ib0FQ%2BSdPJSCWSx%2FPFxbsrkmxEmzNKJbGbzFFChrZL1zjjrJHJ0uRPobigxPG4ygHi8hGSNUO3hXAp%2B0rGZxN%2B6EoIyE5Hs6CwGfxROGPLuUCHP%2FPNHotJmPz369wE4q4%2BRhv8rBVL19DWBmtAk2RCjGdJ%2BLtN%2FgAhH7HINhmFBWXlmlkcdmIr&X-Amz-Signature=2a37dc56ea414d8568bd56713c3c473ade7bf33b37a578337124bad728b4f157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


