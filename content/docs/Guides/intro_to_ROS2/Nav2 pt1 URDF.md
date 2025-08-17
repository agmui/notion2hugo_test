---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-08-16T17:51:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-08-16T17:51:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=9c1f4db4028527f1071bdcac1a4fb39386c3d0bb93594c6917a2ac3894470536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=399c71b8c8e7ef23c5f3c6d5408a4a893dfec1deeebcb5c971eb5583c586cbdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=f12b3962a2ea3b9742bee3c41d4f1e62790b007bb6c7e8350425b0af6407d9be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=8d44eb53a67ca58518a4056e2717f2788607f8fcda2cd6c98eead375ec191510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=dcc49950e297aaf3e51f7accd5fc931b4292c42e436b0dc06f88256fcec5994c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=a6880ee5fbfa5d7f2a57f146275e85db4afe05be4d134666d95764e32cf66f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=3f20592e775d6008e2c9e78a33fc8b8330779014e5c41e5558d5a2e3955d2f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=a6581839404266d90687e566ed0b50fe16ce0fd91866afe53ec4210fb03c7ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=1d9d3a9ff60011d1d94f75c8803385ab4cb54c7f0159f9b73578a7b8260f5a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=a72e66b0bcadceb1cbe6648a1514dbb85c88230f1329a0b00ea60f2c41efebd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ6N7V7%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICaR05y2xjW7uS51bleHcnEbj4GukjHRLD5Da4bPMMrmAiEAhDXNKqGMYUM96IU0T9nm3zAJJ8TKh%2FFqjXVUrNecRMcqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuN6S7y2ZFVr65hoCrcA75SJWLczU%2BmjIcfb6XMV1ErZ5G5de7g%2BOctGNOLSccX5Py2LINfSAO3FRndNNROa2oiq62vMNW6MZ5gh1iJ4wGDy45ZJ8ld6Z0%2Fnt%2FNX6jmKItq7uTdLnANXGgQiqWhpo8fid3COD4adkXi8xLZdSKTVvk2JEr7D0Xkh5TOpPZTrhOKvsdONgDRMyezAJ7qCg8KZFQVBEdoDipd9IB%2FnCWfCbnbZrnXD8C3xfOOI%2Fu1jz%2F44bzdowp1B9GDEf9wY%2F3ZluY3T%2BTRub8uzcaZwsNvgwlb6%2FqtS6PPtlloH8GrsbxxqcY%2BCn6etDvs1PBjS%2BX%2BiUCk2JDe5n2H1LWvGtMCuIGBirN0t6N6Zr5rS3KiqTlkaypvfzEHe2I5JEa6xfE%2FUmdJ75Pors80IKmM3f79ib6aQzibTAy0HohrbvrnA8X0qBTint9FldwiLTXwUq5E%2F3kT0ICz%2FwpPVovCz1%2FXGtkpEc94rYDK27UN0ocnsxktwU7yf5kow7753KhnjiRrpUwIP6LApsbY4ubSPUYgelBBIS5ciHTGzn8u8qtems3NfjNAT3u77FLD2vruCL0rjPHhuCiGz0Eo9yw3Di5PqlzFrjgA6BtQQ8MWl4Yu6I%2BdmdZm1CGhrj1xMJjNhMUGOqUBZNI1exOb0zy2Qpq3u6kHnGApgLXJEELytvYKxjyYAA2zSrip%2B1lvDiFffytOOMcP%2Bcly7JuRdnnYNKVqUJBc5DxIUweDqdFIUMDRLAazS5IQkXjh1aAfZlDAxHbOJsIit%2FMPyX3W81rcJDTDZ3UpgkxZU8P0MLie34aavcq2nmxvVx4UgNO5DjFHui7UW5JxOazsl8r3HpK7IwKPaMe6Ac5%2FEx7p&X-Amz-Signature=c30b70de8de95152960ee504898031cdca72db542257d8797ed6222b24724cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZLMI645%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCVeHTN3MRsH4A5DH7wmh6WVthFiwrUVPLKKueVinNL4AIgXEVg1NM1tg6H03ucvnklJk1xk77WEl3Y4ff7lum9fX4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsGvq0ZKuCkG3sVdyrcA2fB6yYmsGvlVEmcWyLQ4sdxoOv6MRBBbNAfRV68C1rz4tKuT3fJnU8kMZM5zERZJqYHWPKvA7AXVWNoQTrgjLj%2FDKSS4c8dB2RV7nanD4%2FwmhQiRf3h%2B5wupznjzGE3vod6pbDJ%2BWc0Y6UbTz2r6OHZB5BYbpmEBPygSjQx9qGXuvUMICfet2bNX5h%2BCIPL7PW8kV6%2F8ntlNhrqzlreqJy4w75kwQ0kHVzNg0%2Bp0vvttRk5F%2FubkFAY2udhOFd4wHhD4lQIILUz85HtRBmxGrjHwNlfg9vTDD%2BRc0Xw0zOn%2BmIpN%2F3m7q%2FNOg4PJ02PlwZA3H5CSmsD7N24IqSwfWFDQD3WsPEH1vt7tFF6I%2FZBdTrUlOUiGKncql3pUjiGWO3D0uoPtv3AZnX5%2FOzJVzV%2F2nGGcCThJVbQOylJ7%2FvBeXHJHM83frQ9m4UPxbipg4ZrkVfKBOjzZ9cNEvfC0JmS%2FnhLnK64gIrOL9vqHtX2uAteMAWxc3xIaFBtwPiQY6hWK%2BVQ%2Fy%2BcVuGblUPkYFkPNgFk4JGSvvId%2F6gWbuhPuj7Dsn%2BbkGGQdfzT25IEVfQWdGibn%2BN8K1Vld2%2FPt3gXLzkV6%2FNUbwVfGCqhUszlrkwCeXWg7wdw0DBdMO%2FNhMUGOqUBKRGclmuGoVdXeGaCxVwJ3zyNbFSMPnPXIavF4tCleuqHJA5fcE0HXC6cfgG4cJS4g%2FY%2Fz5URWwYo9HnQJhYjUC7zy1jZbeV25dOV2NQUMwQ3wx5GLEdPCqG0j%2BLHXD9JOY6sylHJu7qtKSEJpuoAv7GiGU%2B21iFwkjuQucUSM7Tiv08tvnk6H7Jpfb5nrynIWvnPQ4bOOIhKEfasnADS6MJycMef&X-Amz-Signature=de6baa0f585a49583b7f34ed4e46ac6c5c00ddf9e305b88444967250195a0ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GIYBDCF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCN99L1v6dGA6qa5huLgfkl8Ubom%2BwEtQHX08fk5R9%2FTAIgcOosArKSLGvAAUugGGvVZExk2CYmW2QIPgT38Y9docUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtqkFi5%2Fd6YNpzBlircAxwdyVWL21n7z2CUtkRe2zqTRoFJ%2FsLg7b7O%2Bx9Pa1C4Ich6C%2F58%2B%2BSPjxDvSHMpMD8bdt%2BNFQzL5KI%2BTTHfn05ZaDfGX2NcqHIF9awAP8%2FHb91JO1YFwECgbFnvtcSBUS0kTQxtplmGPi6I9%2FLaiM8nY03d9MMbK5BiQD4ZWtZbHxEH9snGYmv6CtOk5HPtHjsfWINJnnLzIv9YZ9wL3F2piI9ysvc%2FqZ%2FzO8%2BvQVF3qkEUTOSI1yaUCYTYPyMIdtZXykNwA67cUMX%2FwsxMCqJ6vZcSiFpjM2W%2B9QgDZRkCegQyGkWyfieP26wRSnPHlc90isaIXULf9VRyE%2BfZcixzpDBpC32SW%2F4oiGt2wkDfIsF1IFJ05JB8q%2BQZkOYlNrNLmmmW8A%2F7rYUYzfX1V9GINjy%2FT9fJoeA8UJSHhvjTNfT1ifAXXhFwqGTH%2Bocc%2BgGbGLmSbz%2BqW4tMHTC5j5K6xw%2BWaOm0IzPty07zeNmFJLQmrQdi%2BKz2H6wX0ZgFiNzFfu4%2BA%2B5XT9iGJWmBbWB3Z51uWk68z1kwi5MzLZfwR24PoNUDjhztcPcWRZT6t9m%2Bk9i5mxFcngyv9halwXmn2%2Fd50wgN9ShGWZLXENAJvnnZt4CJpkWX3xEpMJDNhMUGOqUBwcuZkLT%2F5b02bW5AyDKfM9PJI6Gn6UaVBmJlU3Zab3706cuU5ybVVvovy5tDRU9tU%2BX9e0uExfs14josHtH%2BdJkyaqHdosFCseU%2FzbLOkUeGTMb%2BQB0VD%2FLraVTvALB15SlIVno%2BHpOMVNUnz2oQ4XkG4GHs5FZ3hh%2F3Xh3i69SvwGlNGr9ipY4ztwPxGQMc41nO5iwJ65BTmWtzfFrOKGBH2Sfa&X-Amz-Signature=367f2e75a09674a78f4f2b5bfeadb9854531c0adfd26425f86cbc08196257122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=050adc1d538ba222c511b37c06fb7500eff2152aa51c125a62f85a0833990771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MGCNFDI%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQCqgNE8VeZdW2nr7nocFI2JMTRnMqwc1281796GVIYtuQIgKPUCezkTwB5xzDDcWANrFTq639dZQ0wd8J4QiTVutc4qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB53LuapfYF2gG6shCrcA%2BwDCJ8Dgrm8R0yqoyYrqsLnfvko4i9GlYVZZE3uOCO1f9dE6k1DgP5QbBrYpwl7zFEBVTxwFG3gBYVVMOGWIsQbFLyUMzQvkR%2BnWw7lj939otcyzCJNm7fWuDjr3yfrDwhOx%2Fvn%2BrrSESeXHkUavE9uyYFSu7GkqFHdWfU0PPr%2BolsmiUIrrlVPdXFBAG4AJ%2BHJpk%2Bbpk80w4RiI82OJhMM3B5C7JQRyCexHmB%2F3Wjyp76DMzXLvyhnwMjpyf4gkqwy4jw9%2BghUFQZpwQFAmwZo48s8%2Fla3RZ6kdyUgdE71HoKeDq%2BLv6yOWkFWTxEEKLjq1MtSjDWKXELByDnuChkgO89I2vK%2BxiTQL%2BYDx%2FDTV4%2FRpZRH8UUlJqcWdMiP07kjRrX82fkt1hvwDspIO15sQNiVD3wzW07%2BXUawZxnOquvBhFdQAIGmBMTv4%2Fhe9TwCIDn%2BdDRABwBLusEiU2ibOILyf%2Fx38v0epMXb%2BV%2Fwj3%2FQDgbwrb06NpWAm4bThYsKByKzT%2FoN6iJkwmSw8%2FlWESpsPg3EHM22wEWuPH8bNwGZX%2BWt2eioYdu86FzzZf0iFClkrPCp9GkdrAQOs2YssLtHfbOt7OoIBZZwIJWbn2x6bVFZR9253sazMODNhMUGOqUBdNvuHJtiQNjTZJ0QDcvITdM12pw1OmfHW2sxcpoiPMyBGxl%2B%2FrzAqrPe94xTqd65APutjeGBtf8vYU37JNKLo4QWPI5XN7wjqq56LnL2virz5v48e7Pume5zNi2pUbGhYlIPFOqVu8a%2Fp6Np%2FTd5OT5eo392%2ByhmmQoC3Fy02vcle7IE6xdU5lNIQAzzoliBxj0AXRZORXopGQlTDEm5vMdtcmKg&X-Amz-Signature=957640761f9e32359361a9b8ce18d08d5d31f75d6507bccca83460b2765b61ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=c0a4b68d806a50894be6537b333cb4f0d3b479364c29ec315286df91a42437ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLX2QPR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC3hefE9WNTo5rxdIwaMeqckJjBlGsuRZKI9%2FCyqVeHMgIgFGaWL1XTabrIl1dNDUDqmT4oT2dr0goV8mF%2FiLrccqgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmdsJIgVAoPcDEmvSrcAwIovBHLIcwcqreSeUA3xF51IhLWKUhRmtZXA1lmksiCRM%2FjceMqHD0AXCE6cAz3APPK47XsgKBiAjBZJYdbhNYrioZJc7qRYA%2BBf9c8IlmuAR0TPz5vpyS4%2F9PL7DnD0cPO5cwMNj80%2FA38JjWMEx6EVyIn3%2BEVE6PPZKZyT0XspkENKquJuMlLJHrvzoBQi%2BmbJZ4yXrYLJk3UjPiiQrNqEUThNsT1FyKa9N5doQpJ1%2BvqhQ6vcuqchGEXN2T7b4SnE6uyc5U5chlnRoqirKsyxIBkPTrEOQToFY5%2BEl%2BUqZG8AtLA0CCaNyvDssOuyKqKesVzHh%2Bhezc74yUor0Q94ZJm1EaOs0NH3Ijryo5u%2Bt3ot%2BdcV012ETYw%2BrmS0mGuwi1%2BvgVf4eweUb9BV6DlnJn6emF41Y1goDQ86elQ4QtVXntoMwQgXwlTpqHpYBYtX%2BiYxkPkf%2Bj0KCiQy4ORYapxSbMVuJQ42M%2FwjMzbmyGYy20rvSx5G3CtGGrlcLo5HDqALwQo37CUA%2F4gGam%2BCDpniJM9SAmonKCLfCTuFfmaiGsYVu9J%2Bii3oMWpEKZlfCpT922wdBOGQAq5lt6hqPLB6bvbnEneQG2Ru%2FWGUJS5jtEe%2BJcX8i%2BVMIXkhMUGOqUB7ZecgxTsOjRRRGfgVvqhhM3SCkDykttsEGLgFLxw%2BPzU80ARtwjdjY6BBvM009QHynEzk3liVlyo4hVr8yOtFbn2DXRJUCXO1rVI5AL33AWXHIktoOwlUluep0gcV8GC2eOCZsjXrMpiNSiWAW8AODpM0umy4KhFOzKQyJpdNmABYpebLDwO4GrPt9HX9z2mo2noK2hI8Rrf1nt1nxqGVdYBEJtH&X-Amz-Signature=65d4b31a03095625dcfdf0d952a4163dab0ce70cecd4a0b752aeccd662b59b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=8938b13e9f2ef54bfe154c0ebc57fefeb9bb20133f30183c7d9bf8d7d960cb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVZFQEFA%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJFMEMCICowDnaGm%2F6JILnWq9m%2BPTrMivbk7oAj0auNDriQQZPcAh9YoeQj7BMa9ApPRrN9hWrvLzANc1yCJbZivJqSU%2FijKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWw3lQsPFLAkhQGz4q3AM1eW4wCA%2FowRGD3IRjY5NIwJrKoc0gihmLjtwKx8TauHs8yzv%2BZXoa%2BeembDEqvXlvfDt1o66P9JcANhWlnv%2BbWsi8NxtldAfRankB2k0sJsLnlSqd5qMMGeV5KT08i4dLRlvXbLSWH%2BaBOMaPWXYhuZjEC8Faj3eNwSKj%2BwwMaggUFijQNOJT52hw1xU92X0m6Qz7%2FhsDUnm%2FjZV0TCfWEINWHF5BoAWP%2F97%2B18OXEPGgEnJJGgOyNxrilLIC5JfcXuctv0PGXQOl48znODql9I0QIN1zSNGfdlGxdYKg5V9C4%2F6jPVRs9tjQHC65CLDmv6%2FtWTd1jE9CCRQQI6zZTRme%2FXDEz6hcDZsplhZ1GvOGKCJntGpFONtq8Ih7KanLARdmDJNP6JgMjtUWWHWJmPgfMRC5KWtuFizu2%2BRg9j5oAVUzcmbhkmA3pxC7JHal5u6PZxmnnHaMVQCnJiYqmuMv2mbwUDhte4EWxLBwZ5gHXaxQ0j0gco8JvphT9EN%2Bw74f1HXVpaCtgDhO6Xlk3%2B1HSF64beO2yP8iC6aItN%2FqNUDOyXwEb9eczxd62hVwKSuDdBeiS7jni3OfHRiQJDTg1trynGQl8xAp7EwuJd9yiZvH78pg6JMgtjCvzYTFBjqnAcJuOmcOp6xrhw5RjYaLFKnm917matdVQuTwfHF4K8%2FRBcuZSk6RczEhT5kkkorMYZKf1cSpnJP16b6wds9AyxdHJb%2FgoUCMTC0pQdwXz%2B616d2Bq1rlC8m8MVEWsOTlhvTsxzXTzTYxbhME5DklVwKCKa%2B4OCLqgWqhsTr8SwsZBNGcG922UCdzz9JgfsuZ4ecnfZeYc8HViXOHq265hCkSMsJ0NiVM&X-Amz-Signature=46f906cedc0c3c306d444a1ef6b4170f2c69b1144499d3eeb77727891504424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=4ba5d4866b105036e279acd5e692cd02fd7a79603116895e673f52e246492ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBXRZJB5%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHW%2F2brofhI8zxK1Qp5lwphlFJOkXwZg%2F9Yq56e%2FBZYAAiBcfn%2FtxNrjjoARpmGSA0hLJ0AUqhMXIrAhQa9VhG3JPCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvSeC8%2Bvfy%2FKbJDwbKtwDVGfl7WMnG0oaRZsISSHcimDHgZX4svglHiZPiG5iI%2BpfF%2Bv1grhQ2qE6%2BqsjuhQfqds9mhG2OO0%2BeG8DmPc4W%2F6BLSDSjfSMPFUYxfhHWbc6rWuROWmOImNiP091c3c3Haeavs8O2MSSn5QQm7Chb%2BI6UntKlr6w8tmCzoncTW9Cf9kw4PQFS%2FW871743MGB6ZsTHxP6%2BCNKdu8o7cTdw37YxazDcAnKPpnDqq%2BPl0Qryxn1caDkpmb07Grnfxq6%2B3PeoiJyv0usnYJvo%2B3FJ9M70IV1inghG%2BV7g%2BFWIicDhcvyRH7oLX6Knf%2B9CNmYI3Mlk58qsfDuxN3T67qUzHjwMrww%2FWZ6qNOBEZQ7QmU1yZXAXg%2B11Ks0kgQLQI5QQlR7voB%2Fvh%2FMaiPqmJjb6f3wZVzTsw9GTkFJm0ung%2F8WhJa4jhYwHQOI56WgZNLt7HGX549%2Be3ERHR8Vt1QPxvocXYJUDD9zBMmq8im%2B%2Fqijys%2Fx5TKpp38WkBSO%2B%2BiPxonraXMp6mTphnGNb4eD3rB49sK3fbugHf6uO0qJ6h%2F%2BfWjWO8f7CofYX8a8ejcatzf0UIsp5otZK0jmpEmutc1KHdH3RWv7IAtj93NhGs2eH1MkflYCWU5D5NIwy82ExQY6pgFmKnHVK3AF%2BuNC3Nsc29nEr5dZuIBo8DTAZFe1FqUrNUGqItIEngBayV32EVbBzWcJEIiBMjNkwBmh72c3hBzzezTjfBpNJhNxrGDmxk31Xz2wJeAy7EBVKECdDgaFFeTzhN%2BdxZA81R7moXoKe82q0yC8HWDcPVe4OrBXMliqiYwVMZ1dhCFYG3w7FjYaQMb98wvt1UibsqdtbZgiTGuJ%2BgC9M%2BIO&X-Amz-Signature=dc0a2dc0049d30a3e3aeec00cb794fddc20b14a2b062a0ef058824b75ff22d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=7afe82cbacac8ef626262392ece656c285492b2eab8e61d339c56c4561f6de29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EMXS3KM%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBOdEYfrDWuRWA8SSFdbIq71%2FXYEmdQ6ZEiwPtWNKlvYAiA50DjjJCBEMDIGHDkJe%2BL7S03BkPpbTcEpv%2BGW2%2B5zHCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5%2B%2BvlAHk3w74cgQFKtwDaN4z%2B1z5QLwEyZ0kQRGjauyj2NbQDGey8GVvsyKy2dYE%2FEjGrP6Xc%2Fo7TFwhG73cb6GceReS83GDStSq51AdXDZ2NOEpaad3ZqC6Z%2FAFs3GdKAn8poc4ilxPchWq4QTp4UzK%2BZpZ84KbzO6WG0%2BxJjKrH43sK2O3q9m60wYgm79WkqmslKj7C5x0d4v%2FkNwguBnOulOYclew1u8y5IeD8kBCAi8YW19iAAW0vgds14kt%2FEZOp1nQ7eWv%2F2ZW%2BKpROr3GDIivaj8fr77dCG2iBuDf355XYsqWqL%2FFSfL5lP2wEPLnau%2BVZQSK%2FimPpRETX6XokJV05uYgIhzgifKcOJkIJHOGzCBZqImDuH5H89lzIBhHhlUmgAg6sxkPY7ElzolnK3pn9Olj6kgJmxmiYFHikrb0kYdAsCoAUyaiALBZwoy4OHtlEyWAy2XYd9tFf%2B7j%2B9bqqpihavkK30u96IT%2BLdoMpRHrwiEgQnPFPaanMyTp95Njsn15BH%2FPPqPcHKuTsF0ftq2%2Fc5sXD%2BM9rMfzaauy2LLNEBBnLeHLCNsx1B2W9Y0LnXFgSOQ%2FyjwzS1gO85u1gBSDhlFSjapY1fKAbRXv5INQTFJrydF8uvBTme7YE0%2FD1hOTBxgw8M2ExQY6pgFiLhRtJp8of3h4Z50oPTgDCfrjYZ5%2F8KU0je33h1hwZBg4LUWUmGXOn9xZo51lIBALU7bPdrP%2BwQp7HPpSuC496qv3Q7DXeNPzumQLHh1PD69cy4B2bRG%2BVpyMvxH%2F3CvH1QSOJvn5ZOdGZ1HWICbaCv5cmkGA9D%2BtH0d4FFUxAMdUh5R6aTSv1tHkrImMdkn1lPXG45Aj2ijx0UHyYNgJg9yjetK0&X-Amz-Signature=4eeb40c66cfda7c30d452e61f71329c2d03519090a181b40d95cb2ddb4c39673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD7S2L2L%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDUQXf1guAphoOm2ezEx14r1%2F1GLpnb%2FITyfNeiJvwlFwIgcGdwFPilghx2Y0jLd1d0G5uB1BHGBoR9qieMsRXRh%2FEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Bk1anTnYbaaM%2Fw9CrcAxksn49uld5bvK5kfz6tWUXbdad%2BqZ98l7sBqBU0zyZ5IaMU5fDMx3MfvCzzfcDfA3SAQRu7tI3fCCEwL%2F6bxd7MNv5azftsZgLbB97oOleIJVMlDo1b%2FewagliOIW%2BfPeIBXSNFmlw9AeX0qKCLc%2Bjs7Vup0QQE00OQ2oH1oI7Y%2BjzusVCuyC8FedK2mPfqsNL4Cu69YqjFb%2FkSzLx7IxL%2F%2FA0Szn4UL8TVbvpWqr6BXUSQLv9Umf6leMcGagLVuXrOYcnSZZ0jy0zctLwCQaVl2PkIyUo4CxP2sOBtaVf80V5qXm1%2FPfSlde2EHqO4sPc3CyRLaj3wvNmvEcicDFEDMgDax7L3JFtQ4vzx4tJ7uq%2BiSfU1vBPRSbETk4ZG%2BgvcCBFi4Yb3EVRKw56NiQPnHpcI2dhTKlvCkC1hc1jh6iLrYoWQSIYffo3uoAntokNz3zlDRR2Gn0mZHmdcZmkIrYmsVL70Q0JhH%2BVm2DadwGD5eH3PrhmD%2BSaTlZhhPGhMo3mBTyrfUMEfdDE6pcqS2L%2BcMD4Cej%2BzWXD%2BLaBlQ8PslQEZMqg3S6w3dPSs2rsjByHH5jrZ8TfnGjf928FoszHJSVzBLpSoaHWmVR35ex4AP116Tbh9Kw8TMLDNhMUGOqUBHCHU%2FR32o5Jt%2BTx%2Bc%2FLrbMTp%2BrfjLorUZP%2BMtfTvQN0QVfxzRZ9EyhHsPVXXlM0l%2FYwWhUrS5ZpDJgJFMoaqzJL8yxJMaN4iMFT6bfAt4yXwP%2FCfMOjBbsvKfTcnGAZvN%2FcH4usoxX4ESmm4UVrNGWQS%2BmXxZ7LsocP6rsCONvwD77aJRgqAySz3XhB0wSyTo0M8%2BmpomgzZNc5mftYgG24XgxcY&X-Amz-Signature=27b14456d9c9759fca8989fe56289736e525fda06859bf8229af0826145866f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5XV6E2F%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCgNDYBD6KxDhejrNRbbUyxIdtcUTAPumEdt0pQsET3UAIhAPaeL0%2FPLNT7EWM6Yw%2F9xAivxTqOwpY3hWT4G2d6v1jUKogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKHW%2Fc5ZaZ17qwOc0q3AMfdqOLpcI%2BW5YMLRNRMCdXT%2BvuRGulVZita1Rr1rqRQ%2BWswC0Vwp7CVISXOHxMfsSKz2upfs%2BgK0BkuXmsHoMPKlUvCisppDrbZ%2BvMoFemhywYBBQeKr5lGSBrnelIviIn5YT77rVRYyOAeqjBkKg59Eu3FWtwLYsv19FecDn74KO8jeDbwjfx4E7zeM1BFpd2KRyQ%2FPZQ%2BhGgA64OvKHRmi8WGPp49qVc6AJ3EZxchPVatnazD50d%2FVn67h4Vqu15W45N07bYOjzFRWdKX3Cu29YjkulXzWj6dUt%2BKxXr5YV7OOuR8EIUgO2mKKqKJLa4QeiwY%2F0MCz0FRsgqbzMgc1gAoBqQQYr0W7dhHPQ8D90BBqZMRYCULWuN3vjRHZrGX6vXjEwBR1GY%2B02LJdcCXe9EJ5Abe2dZFJ3V5kWzYno%2FHikhDRuKbh7aQ5%2FTy9Kzgh7qZcqFB9T4WhxHx%2BZfQmyMxErxMyeyE%2BTJdwTTTWaNJAxKvtXcHYiRg8b7AvS3uuJgIBp0C5yHAN6FNASrzRUkux92RKHNfOgxTHDiVzn6tHCeO2eu3lq1kKXHt1%2BsK%2Be31BZ5ZVVWo%2F%2Fz2l05ASeHOHUkrUEMDAuoRYvgDwB%2BPVJv5bn1igxcrTC8zoTFBjqkAaZDzVU%2BBR2ISrE76QyLiTwTsm5zPHZnNRziqmiZUXZBzLzyLw09D2ESGrySCnifCCZ0Q5C2suC3sODLDi8xb6bM1boWZWMyaeC1kZrYiptikV8IfKTeaAZy8d4gIKVR7iKD2FWg2QbgsxJXAHKUEPKfPXI8pyLxjEn4PW6vNj5Z6PR9XMjE8DL8QfLHqd6SykWUae9YrSM5Tvxy%2BjyGFEFZI8kZ&X-Amz-Signature=18413602036b81b182da7b01b432b6a829bd9854165ea36983345a53bfe859f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=e1ed736e7e241dafa7effac3f0c3ac3a13705f64a8927b0703875a4df7e78f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTYJBKF%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCICNxaQPfSoimdVBMxXzHuEiZ4N%2FjFoN5ELd25VWeaWZ0AiEAyVv0%2F%2BSViTW%2FhAXVVjX05k6%2FMuKNDHPyOuAztEDXFzoqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEIRTsy1DlJ4T%2FA99ircA0UvQQ67Wed7s2RF%2FMEUmETsMLpZpz4JPWCt7iGLz3jH4L0HNYdVre0Cf%2BFpyeY8Te6tQQ%2Fbehf7Tc5zEoPe2z3n6O7%2FJNNxKSCWgsBw1G2CeDQV6SSzwt47x7cEMu4DGeR6BFJ3xYBpG6%2BsO2k3z6QPProSevoYV%2B4frvgiwVSPzlALFGDtCz14ph7%2F7oB7JHXZRoe3znXf7kOOJoG1BzS5hPouF70sPQga4Fbrj2774wEkpsIrVxkSdvf0DwIiNdeQnwbCe5fbDz2IECBmO8ZtpRmbltrtQCGYGQmSOuH2f5%2Faj3aiHfQQxQx0PmkvyFgWwMBe5QiGo8EcNpgNXxdxBpVGKeE287QLHJ%2BkeYZ7vNmAOcEE25x%2BirLYPIzKaAp%2B8lWxoZosMvM8jd2A0vC%2FLjOvFWHhwh1Rz2u95yVcT90is4pwD7Nt3f7%2FkZj5yqyuHt%2FYesy2VBzwBAolOX6f53fyry%2FZSr%2F8n3ILmnWEOhng%2BmjHP7hE352gqw6zdrhodKa%2F7fRUyGsqtDc9cuLN7zh0%2Fsgu89%2FkiN6khGH9xSe1t9t90%2BqXlRymJK6%2FTsox54FIFU0%2BCYwxyEKoEK77FCC00r85u1dd9%2FuQvwFD9iUFdp999Lyfs%2FYvMJDOhMUGOqUB4GtcGP6j%2BnQFmzPfOowxt2yqJ9FJc%2B%2FepkplmUjGF%2Byxl09kImjif5XZ78w03i%2BwyKMoc%2BI54dp0x0ppAjBnKVu7AqrpXd7XDMpZMnTF9EkOO1utLjLxQ9qSPKg5pXT1ire2scXmLLdny1MOfn7ztBgEmSqTu%2BoV7nb3qj2RZn1GgKEjZcvY2zh7aQaveXgEcuRMO5zHSZmmzcfocfCCW0Lft5P%2B&X-Amz-Signature=358a3241eac15f24e27f7e2c0b28024d80323a9bae5d524b35a973af06e28613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=0ed9a53fbc795c4986438b3f4d6feb675c7d20540a149aa62750a4c781deca70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=3f000a125a4dc567c9a773b91de43a03bb364587deba42c60812866d83675e27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=3d8a7db9927dc459b5998dd354cf8d307fa96f8a1f841035a6793511b1eeaac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=0cfcd4d744d904f848846471ff48108af20e65bc691356860ba9d5eac76d76e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGJBH6P%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBfhRTpuPvMHoOqr24yZFaXD1YzjCiJ7Fr60oRIkzCZ5AiBd8hj0g74o%2BApWIpO2Rfc8G8Tob3ZIt%2Bp20UDv6KVJaSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDQ4lTrNYaQmMT9j4KtwDrClQUcWenv53VS0FZCvEfj2229AL2NHy%2Blo7T6utG4TEjYldy8L3ceaAOSgWJkJAj3dv1VJK331n9EmzFFyFCF%2B5IvnMJY59zGmOdhPASVVZeUzy8xvwRdTqH%2FtPtm86OeuBx6ThKM4ybCjkOVCTHrBq0IoUszg2jIYcKECWG0jRxV6j2KIWGflwPAQYjQtjTYP0tt7iYctOOeMk8AnSZsJNIh0edBPZ8EIY4ry0dNmYTM9wwKgzvrC8ZQGHG64h4QRpUlyZHJdqckfW9GBuB7r%2BDFhUoM422zZaCaZvi5wqjjm88u09iHT%2B96XCU6E%2FRmHt91QOj8BA4IqwSjT9NsMkYDQG%2FjxATUjNC7D1qmqNFL%2B25zkMP38biBJKSQYyzzKTC%2BlzeQIVRfeGXunMZsuuajO1vqXMYLQ5mwXoLEQdv94Gi0V5Zm%2Fto5X1Wk66k5%2BBGx%2FVna%2BNmu4gkOpqqdfzBufPHaGcn%2FKnG%2F%2BltWkBp%2Bv2S2SkpPsnp%2FXDj5MQEKajjMF1ebUoVT0xAK7XT8CjdvhwUIlR288OVr9eQTLWcoLvG871ct0o0w94k%2B8Dz4H5TV0cKj96qpKGZ56VZ5WJ82xL1lawokjxBNdmT0sUS%2FGgha%2BkSWJvI0kwg82ExQY6pgEXWGFp0VxbjTDIEUT8Gc5VRbE2JtOhO0cr0S1%2BswtOIsebW8T%2BlBS6zSIQ%2B%2F9I%2F9BYWYMEsHoS2uhz1AgFjspLCKPIapWSEFmFNfYtSCLGSRe0G71HLiN%2FnMi5ipHxQOuxGgxTx97ieLd9PYbKeAPfmlqg8Ns4jKLMyxpELKLDf17YtoFE6dzf9wlbAg3kTohZK73LHZt9kshznLSU2D54Urzt4%2Fqt&X-Amz-Signature=4daaf69c44cb7d9e1d4da8337c199bea5173a67f2b0008af13b71010c958cdb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=e455efb58656353704310e5b23103c456d771e5fb68f351130d35f545a1b74bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=c04a32133ebacf62b51fea64a742f0f47c6d02494a64afd18b94aac82882de3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=bebd5777a7a70633360c1a5c860fe70f916be50bae212c66524bdcf2d9737034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=4f2a91daab2e5cb3e9844143e1ea410757a44365e2618ca03dcccb6046dd4652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=e9638d0d847596cda658b8f836ff4b171ff30217ebd8ef7bca745f27dece3186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIDSPWAT%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDrnWE2QAo9fmYgsRXBtSiC%2BclmCMDeteCg3TxEC2o2mgIgKZSBXnYjYhZc1ny%2BdzmrEpfT3l0RbZ0wC6wD2q3TKzsqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHBJXd58CSwhWZitIyrcAydD4G%2F%2BIllWEyLwQwage%2FlGo%2F6CDvJE7rCQgeG%2BbeldHxZY04B2ZkLV1%2Fus6YcPMtwPSpg%2FWmjGN3dnTm8Ig6oGrQcbcn5mraFdSFjTOoxkvsKhvitjD6yit5ZnrDGok2YQiaRBGYlJxtBc%2FF2UkQ%2B6JrgVCIgYJepfw34w93V8OXK0zINhk%2FqTU1oYqdr%2FqpJul8DP55UEI8d77FYODnCtUtjtj6oxHsO6QWoL%2FsQmrWawsbTJPqsWmosQv64PpnbGjCNP%2Bzh%2FxSMWIK69PEV9XWf6yZWE28UIRITaR6l9dOJp4ua70pcovD6hfzxupQ0D5IpNwd0ue4VykjDK9YAC7TVHXL27mPAObFZEzbv9IaugzIGUnUAsNLfPATKvh89eLLavfTu6s7W7d6jIYWp6C%2FNm6kIKdIX%2F5qzZH1NujdkkbuWOe7tK%2BZisZ0oIN0VVye54IvpklhUluIUon%2BorXv05QNSSaE43jAvrGzzuTmeZDpNk%2BTCwn7rWnrZVGZIwcedtu03c9B%2B29wk3DSeakAyFbWmyOYUCvNOn4jC%2BVdKohioDHj%2FAgj2Ng26J0uXlRvN0VP%2F3mzZEV4V2rc2rP8EIdmxnIYUxhl%2BleR3PgtLQht98EEjz9EhOMMvNhMUGOqUBDkPaKPk3OCE6UK0yXbVlr%2BneJTRrdkyDvunA9jWM3ufGYIlW0knV7KukP3wfkcXuaDZ%2BsKzSyXvCqFQQRNh173W5EprUS9EpO2AvHjiTEIgmMJfCPhIDhnA7JWxKxFIKJgux0bWUoxDhVZEISUeirPLL5yaApQmmKc8yUWPKBEdXPK93BaRaC7TMcHNXGiP1%2FBLiRhroe5QbW9NfC1uWU%2BBqIRRv&X-Amz-Signature=1af30ef61897e7a0552f0d361b005cbf3acf632800ca6b9f5dd1fded15df87eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


