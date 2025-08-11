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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=4e6d5d6cecf343f9862885b777e1b50407f09a95713c6e5548c8901e103f195c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=ea5a955cb46d9f7a3ab4f9afe6fa527d88b456c92a959b9db2e17edef088751e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=12b1b30f98137ea7dbc363ae38b50e638bfa1923196d22b244c31237f585829e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=50467be877e0660e7b11dd4454f1904fdbaa6c0a402387229afed112ed2ac197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=6dfe452ed188837f6301ac26be014f81b5518b3397be922a51f56252bf8e8c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=9411f09b2aef7265ed7bed1e37146995d8cb12fa07af8d99077eee4a2fd94d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=9f6cf3f55078037b14940c44e9299f4e6c522a1e0c0cac4fd0ca084e28026e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=22bed81fe4c6641c7d3ed559f79916b5d3c9dc3ae962babebd33260dbb12362a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=b15a21d93842a013d39d681a67389ecd47a1a50d5bb0e8c3b7cc32e352996655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=b25eb5086f74bd78cdb1d23049013031ddad4880ca9efbf1087a4b0159e59c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TKQWS2Z%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKrJNj0izsi9wNIW8l8blEish%2BNlYvOY2eDMa8%2FQq6LAiBQ7dz%2BtiOhNbXPiCCQ4XqGYPHIcTn3R9mFlePRqpCq9yqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP%2F5aHaizCfOMWNWZKtwDrNJkQjPezIGcYDBKB3nKePkQTjXdxHofb6P1kglIP77WLkhP4aJJ0M6s1bcepozzV7ZSmjmXMzYxVXT%2FgVBVnbIyxJ%2Fczi%2B79AKgwXUCBCwF6a9xOXGMdjilppFrOzwJCvpDYMlw0nioU9vzgHZ3VmOhE75u3ciZo2wyvzE9mffxTmxne21N1qeIeEid1txV7ynmaTCqj1kx9Y7J0za1vouT%2Bd7B%2FgQKAQ3HuARg6qKGv2V5nqztlLK%2FKucqnoBoqRNHJblChHbXkQorDBEXTPIvE%2Bc1nLXgmH0n3e9Q4WUP4us6HuiaZJpq71sdgFSlwkNGON6sTgLks89643Hq0UzhorRMgyfnpYj%2BKQ2wWL7t5pArPZRYn8FfoWD70W6mP4F08oDzAurcEI9Wp%2F8XvH5JLEKZZWG8VryiNLoVitF693Tk0t0PhmE5l2s2gtNmcBzmNHCrMDDWDeQGmd5L2Fs%2BGtBbrgLLY6wwRbYOQ15PXx6oDZbMduXIn1nOn6ECykztmx4keUvozfT8mVcW4IK1vshtMw2sQTUtrmYPWZvM108uGdufAW4auWxPlj7fnn73zmZe%2BLxVPTEq2ggEQqn4d85K%2BV%2FVhV4Qu1mVknzTaynz%2FaG0ebnRZjgw2vjmxAY6pgFXRua1aEdRV5wlqs2zYg11PRLhWZxScPgLdjCJrjmfaH8IMZKyXMi99z5u%2FQpKsTdhZ3h0%2FTuSIelQeXdQdw2OzHhp2CrSXzjFLRvjfD4lr74zV4PJolQR9ELGcIJ4zZn2chSd6pBgQ4PEcsYb1%2BkfwzKp0bZr7aNv6MtbBUT6NQmlb3MK%2F3ud7jae22HdPGgTtLGmHNjTH%2F%2BS8Jdaw4p9rb1iocvp&X-Amz-Signature=94fcb688e0189db652baeeba31a212694a0fc8a01ea22cae4b18b55f4c31d2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6BPZIUU%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6avzj36COPv%2BhIkm7BWP%2BYqdCS7cJyZVwdC4M8LHlOgIgXCEdB25eRRjVI8s9WBsrmYJWoTqwmBWyKNKTXt%2B01zsqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk6uwG5lgl2eYkWlSrcA7%2FtXwZKOCDLs87uyS2q96uNooHIO%2FOlcfP91200jaHnyJs%2BARxvVt4R5fAOTSXJu%2BXB4X0MZC8zKamoHG%2BZdtsC5kdWE0nT01BxaU%2Fq7Z%2BIjf68yZnv68ONGUVNG7C4%2BvUcWNuOZKDvJTP2%2FuVvBNJT8o5Qsa8LyJsUu2Kobgv764KSzZFNQHYIo%2BHze07F0ShgbVlKlSwXBPs5sSF9nuQwO47P2yMzJLsMdFqmXWQ9IjaJuD4ab03HsZwFKQW%2Bdx4quZKu4sbkwIwagemwl3EXRYpuJrGLJWlWczNtI%2BUC5ufTkrQa9f41S09lxl8MgLdyQZ9rVu%2FYkCGmLYAtzsnwxrUUss1z58fqnPA2CzLa1ehIL09LyiXlGkEVOoQN6U%2FJgsODRlEjhU%2Br9uFykBsKekuzd1PCTpFN%2FnIm8a4M8UM4H%2FoMdRJfxvd4X9lxac6DOgMhyyDR4BxUHJYr1wqAzUEf%2FPFXDT6OM25QjkMZlPeFTUd7EjbGyeO2s091g4EXEYooM%2FBLS164HSMI3nAiGKx0uyoONTOzQDUynL7HJyjclf91luVqfu8bsUgMYMGYj7k8cYUsCk%2Bz90fA%2Fk4N5KF3F%2BzG2LpG2L5tFk8vg8m9Y8C57mkxHSCuMND45sQGOqUB1yTr%2Bzwd%2BPt9msssFJpZa2%2FknL5n7Qx%2B2GxC%2FUjsUfShuEcUZPrv1WV%2BB8B1r5SJCvkmqoWYeb6kYGWYb4YUaTVoFNYiFndU%2FuN7Jw4jBaiBmPmzB4G3ZsJ%2Bezs2nha5bL0N2slPpA0kEPOvawbIRJ1xKARg3nQjt8NGVROevxWm8uYr4i1cPzRmGfsFpTuMs5OjVy8LkBEdb7aGyiCkFa1RTmee&X-Amz-Signature=dbb8945c2373d5e714b9b8dfb4d13dc92ee64153ae36ab4d382c43444682a9e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FL46AOV%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGzCbESNvBlrADuJzuxTnb4%2Ft6kLO%2Bq1ktCb9v9f8JwAIgTB6oQToPsPhdwkwhRY1GmyCEWnRhbYY8Ro5xxxpAb%2FUqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxy92hTZFWSAauYtircAyeMMNJ7mc4NRp%2Bk%2BEVDgdIGgdumEC0PGPWsLK5AVDhHa6wO8baJN7S7XeB67lICqlbpSuCvmtz162jlmaBcMkCm%2B%2BmO3js9l41djgPA8CsTf61Bnx7lboszfbn7Yf7Les2uVFFBMA9FYzEow58LOHuYhGS2nhAulKwxXTkFGn8SG7sc%2BKPzD2PCEr2QJEutZuzlbGFUAqDwNQyJ1f4QmU2VFyyPm83EzrWk9o7soYrGb%2FW39Y5k%2FtVB9eiFTZPFDgokIYcCaS%2FP9G3ylP%2FFpPVfhDjZUXo4E34RSoth%2B6tORbzpyCkccPKQdBIwc2%2Bhh0DWGZeayv45ekKQjtqtCKVZAQzML0RjfyibWPGPOOhJ33Fe7g6WgHckO1xKgXxMN7htLhLtn8Tj2in8qWCBKMy2JJ8MmqlLCMHLUX1qd6udQhg%2Bt50uu5Wt5tVKRF6bqFOiqsu%2BcheUb6JrUNtHTPs6i0%2Fl%2BXJ3mTQmym65PCBjNo8gtbcZtMZe8qNzecOm8K5RUMHUb3clK2aanurF58FCX84u5Kw5Nwql6gMdTnlYyMXELwKyrNrXGGLlX96zhXF3Uh%2BwCZUXzoRKc9Ab8qt7nLmprKmCGhoLh9USsrJ7G%2FHJoWlGFnY7PPO6MOL45sQGOqUB9Dm0PsQGeqC%2FGv%2Fr9FTosfXkGguXNmh5bBnaLx6iCvJeI1xn7awnqmP90HtHKtqF582V0vwZhdd%2BNoyY0hW72kUdwQh0gLHZIffFijKbYhugDu2suM3JqH39DQKBTqgYnzbH5sHDh39FrLZKpi1LE8CurHMx4SbS%2Bg0xV0W1rDq4PniXYpjthFILMDiMIu%2B8KhxXyidmI4A1a60Js3fX%2Fp5Y%2B2cw&X-Amz-Signature=77a69f86433010dcce5a491ed98675d859696dab7466d6beae629d808578c61f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=5da719ac92c9b034401bd5064a16f30d8eb5b8550d57b16a2f52e59010b8d34a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A2QQOCC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1h6EYSM09lBVH%2FQGMldY3%2BmezHY9txvqMkp2RJNNlgQIhAJ2FQyy%2FOM%2FfUlnYjcHUx0I%2BPq8PumZfSDm9ICX%2FPn%2BaKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXkSWrNWYVyIlijn4q3AMFARkBcngMvzGx9uvgNkcM0AWlwAkFYb8BDqEpS%2F%2BZKbtClYI2jg29fazlbzSjkjpNMMaNpL%2FBr95UMKVpMtKcm3agATug%2FxmhI%2F7MAgE%2Bx4glNJ6fJOkSNXHBMpUVLamyKzRc3xQyX%2BZzqhaLQLteZzgZR8XNKp7GdSPsqfh8KiEPZX4MDP9WI4p%2FLwh51T0%2BUa4KLTuwepqGZbHf9FYBVQmP3s4T7SXAo28w%2FkE7X7DK%2FckA1RlCe0x23wx8ZrKAkbAT%2F8smZfWe2Hra8Bs7VlHVtcQM5b7Xa7pyFk5wN1Fb1pyGOpvGPDGxUB3wKTzw7RJiDwMCPzdxkjjvVc6kQixDnryJM1ARGKmw7IBkBlHqUNuU7BRGuBo3Hsr5ZVCkLQ8jWtsxMkyEOI3P1vU76c97j%2FcT%2Boi5xsz9UuRgTLHEdPqnCPdxingQLvQRWsbuVGXBMqkFGXSSUKMdGeqakvMot01JbeKgrr6CQGVGJ7CnmMeHrzomYE122A3ufGOALbSTg0E9hh6O67rPLD%2B5G113bFHIPeZACaWrLmtlFMpKW4BncLouKW4psv%2Bsx907%2FvTe%2B0TzZtuMnAkfZ0FlxrFOeJ75KC1WZ89sRe0jyflmMILWkF33L%2BG9MTD%2F%2BObEBjqkASdaYL59gnD5DphrSvMxpx21GtcazX6KRFPtUPhYukqXvEKwQQPAsADnCKky2go8uBMA9fstXRl8O4UAbwkLtyjd9Kt3nXwiFp1P7IgIf%2BcninLE9HoexFnjhUyFyyqdrqG%2BsTV0lVh0qq17GXwyGemUU88%2FQCt%2FLH5owcD8YjuOBOIaIQbm6Ftg8dUen3x1gH0nMP5TtW3FoocLe%2BG7T9xvEedO&X-Amz-Signature=ce8d72869e648b0dba0ced50f715f9f5c2b0ccf2ac7268908f72faa5203c1da5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=38fc162e935a0a74003b46af3201cba292a61e58ab91f4a41eccf8e4e55a9785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5HGOPC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJqfVRJ%2F6Qd2KlvUUmDzx2KOcuvtx8F3RGU1PBTgfYEAiAKB4lX404E94RawDRlWrhNPlWjBaLumB19u44rQftUlSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSI0KLXzW6zTDROKwKtwDorMBM0PkWp8y0Ue9oN3%2Fb0WJDWQyvwBjs1FfMalcpMltmPbOGt473HzjbAzRn6lppgx3HWjCpiJyCQ5u0dGPEqMKx3uY4aCNIScYaDHlB3LlllkgZw4N%2F0Uo2GmpP0hQxasHloaExEIr0jGXVbOyQruJK3tbCmIwcx19LT5WamMToMi8s28yFqBBNCrAOk3mnzkz4qkUqFdtqKqlaAmD7EkNzslbY1qBwWUoKj%2BA3XdtsDeGgI4uyx05BtQelZPSQnPG6zSDpZBA06tJK5fw7Guay4xj4mOozZ%2Br%2F3d%2Bt9EZ61R090paKvQ7wrjupDlJmu9mQ5gpqElyEFYfkgbDWD1rcXRTzU6McFGB0ZTy81qBqAVfJQktN8SfEiiOYMnNu6YQYOEo5P3vnHgj3rJUM%2BvRTlApwFLcy7BWWAHpb4QVr1sQTHG2U9ODjCuADALuzqnmxUfRXtWNQ%2BxuKvNAMV2CmN%2BNTku9nUCLtQiWKqrv8HdJjf41AgNmzeaahPhfQ4qh%2Bpi0%2BdNyC%2F9%2Fgcfw6OxgDXxMfpJybTDUcA5iOYxyj8u%2FePYmZrZa9dmGU9VlImHMzfBc8FZVBNJuw3VhpnswIFZXQWi12mWpFwmxDzW4ZauSKIgDoEMYnFow%2BvfmxAY6pgHaTLGF2i6X6iP0sk4WwbBtZK7IQocMYnn7%2FuKinJSylCcyFcLaa%2FXWryLytFEkdfcOwfoKB1%2BC3UqrWd8Kr8ebhrv4gSlMSJcDTJcZchtGKKRttts%2FHNmn9KZHr4IwKiR19HmjjLmyx6CyTHJbBwBkXrzvYH9n8GZMIWCuxkSaHBxyM4OR%2BN3LUZt7Taew92IscFVLmITfxjao61LFoeVm22VzgJwc&X-Amz-Signature=57cbf169d5ee750a52bf11df446cb6d97d039c5c1c354f0be46930065ed10549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=befccc3a9c5e7f3d46b127796e69caec65bdb5bb897047cc85684139510bb42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2X2TKQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGQaFNEjkDkV3u%2BZzSbPUkLkt0U5OWYKTseqBqlmRyHtAiEAsKRGO5FaDa%2FObgFh0yaTA%2F4CUmquAc3k984ndw9YHx8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnJW82le3mcQrFPQCrcAwvUJl2%2BZbr5bDiXgqOGTWX4RSIFtlJAb0G34K%2BRlNowgEn4h7YHNn47nsweGqKnJr4yHmlmLLx6r39jWjKtM8us%2FvZamrLzCyUtXbuQEAM0zqi5n3B7B%2F3aRfANU90JH4%2B79tNlMWD9O2vn3SqKGGIKuAWnsJd0WmzccZ6QETOnGwOKlnSDedxxc3M%2FZIC3ywj7dBXnDesIJZJulYosk3ZvTL9A8gTrjOkiXfJq0B8iHeBm3egapcgw9LTzIVWi45WG%2B5ETezF8JsNWmOEdNn8w3jn2zlltApi%2FK6d7Lw01MeU4%2BK%2Bu2MmFczNOYrLQs4dzKVPXalPSLABLC8fI9A3loMZix6fD2GMdjA8hB7C15RKx8svWJvHIPICMKHmyugyEt2XlzrDCd0Apxy3H%2BmoIuEzkcPvim1Op3kSE8%2FYRii%2BJX1gtBUoMuEQbtPGCfajLhGO3AGJamwDreD3f6iLRpXX1X6tbZ3HjRAK5CpVTFgdspqm1H4JohF%2BnuS7Nz2a9szy8jrtBkCh5qvm%2BdNCC4ZXq2aSTNouVZPjk%2BwEyJRNb9wlDYHK2nQSNtCykw7UKMPuqpBi7SAPrsIt%2BO9uO9EoOjeEkbPwnZUDsyry34UfRFXhvJWXjRfLeMP%2F45sQGOqUBV1wSJQ1POLUKvNxtBEquNYKaU%2FQGLcXquZcjkmxZAu%2FGSZuNOvgqw8nCLZ%2BDj8VZWglnohf8eJZT1IcgeCOLu6AEvSRagtgrWh6mkbsXwcVUPC8vXhoUdwjBVV65Ce2nBDcnMgG6%2Bk52oLJ6P40gNw5mG3jsOlOvA0t09ErMkvfFSeRtzbvgcLoO3VnA%2F1wm0ZnPoupQjvugYwrbu%2FR4bdQBqeQ7&X-Amz-Signature=9044b210411c621d467c28a4f0a8d5a9e3063564ea6995d34f861e7cc90ab4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=4ea7d1bdcd32d0955eb7959b20ae6c973614e3936f0dc46a4b698084b692e9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FK7J26A%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZSAaglBzfZImwn8SiE1ioyLG7gWZdm4%2BqFMMIRvQ%2BQQIgSBGgpxi1nNmAkgqaaXqeu48tQIKzlRU0GE4Eo%2FcY4W8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDRzcl9Hm00xE9q1MyrcA5yyOiFFKSpJ8uXyw%2FXXeHLKwoO%2F3oYCjig7yJU74YCfitKINZ8GfXgFyhg0j4uJnpxHN8KosTzvsrPwLe1w2MpFN5Q0xFz8ZbJVf8ZGqQf4p5DLo4rtd7uJpO5hEnlbAqIYnlwg%2BoeKsJkd9vJmit4sI7XmtgnAjw2Q%2Ff3LaepwGzzWMTvk3%2FtoSrH8SWGYBH1u2e4esF%2FvRg8QlzwBvtqBuwKpCfRFr4NSgDbH%2BKRkm9xL7qR1yzWvveYIbkUgfjyAnGTwvzw7fhvqQvZkP%2FG9PQq%2Ba7TLp56cXBBhEgj5DCmSr5z8n5lvl1YpTqGtLc%2By0V9r1ppK3UQWotqbA8X84vIHxQOhHLNxjewRslhzLcOzSz3m9EAfvE6xhxBxVXFWCDWpzIsYw%2FR4gASv%2BuJ5%2Fs99NQslPK6IDhDLlKORe79Vi5QCpd3XPyQX9ffVkbjefaUjzlPmvnd66PfpoBkcRwQTmdsx0%2FElch9OpSVbpxo6QCUVP1yjRe%2FIH5%2FDU8tm0G4rLCPRRMZxITBt6vg5v9%2FDkpDqljkDXh09vAziaCW3zk3TmiYoI3shknHGe1YxxnRZDNLH4HB7RAuH6mCxFvEQp2h8qKAQm3PUXGwhd1qlmLx5GgxQ1AvMMPf45sQGOqUBeZ0QCfndxU3sVyxEi9j5nqwnyO1XAURiWtXmIyyDGtprLdvuC%2Bddi%2BY8Yvl9NCM%2FD%2BkQLvnPMElQy%2BZc4Tt%2B%2BoIaoFSDF%2FaWbZpV%2FbwSKVnIFnlx%2FbdW6OU0sHIjm0bKt7vNRPTl3S5Irb6AUF2u0eM3XmG%2BPkhdTVO7uF%2BlQHjA8SlNxiLNnGRJj%2BO9fsvZwUje66cWfA2EA8i8Vfcgs4O4omuC&X-Amz-Signature=0b64f4a2f4866d92ff251fcf2694f5ef1c3bcc361acf014b93a9acad10b2b0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOPFBT5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIBghF9q%2FNNeLWkiaEzll%2FQp89YBruzCjJBZS9lD0rwR4Ah8ImbzhA%2BOjHiPSBI9NQG1lBENRDLFtOC3y9mG%2B7t%2BBKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4f3KPxtZnHLuNtFMq3ANlKn4wC7lKx%2FwXelVyRVfPWAlxWTaY0M9QPkhUyoK312LlRFB6wpl8mIlkeelukvEEWlx%2BUd59dkRDtTswwLXf68VrDQpCePnWSm%2FM2kAggyi3X20qLCQxgN3rY1wa2Dz7IyyQLmfTrW%2FCkiDTj3UxQ1%2BrS%2FoZyis7WdPJ5i%2BwzNwPw9BVw4mWhr9oIAMUFus1n2LVdYU3IgpMO2MouTtskUYiUpAnMRJ4UKxVa%2BKdnN30AnT7aEAWY1h5bJSnOaoIYL7ZuDINckezf61f8qycbZa9PhGmLjypg3las3VWkJrD1NJ3dT6kzHpVCZ0Vnv4DU1EbsQWwEABORqKaogVen4QurR6vheyezwPUB0or9CwbojZhELC1UX56u5KrlrEiYj4yoHb%2BVonDR65bkh%2BMFe3rNdkTQsg48gtNQuhwbxb1gtrZ1xEeyujOVFnG68DUnK2VW9W5N7GZ0r1Y5OfsC8g7UwqEqvdNCMdFKkH4V8u1lsMcqrOFfeONOsyIx%2B7xq7Zz%2F90NWx%2BJj%2BSkZj8i6P0bhl9hQDblP2c7bbhyB3liPKCFpUcWeYq33cdE4uNSqWi9iVH9eV%2BUzTBEKxugf1fWMOIzY6IbkWdJG1FETHvf9MnC%2FZsj2hsDOTDd9%2BbEBjqnAT8i5H9WwoF%2Brf7BNuFDwz33q7ZPXjY%2Bb3FHOL7X7Z75opxv7Saox8MW1oMGQANbbCnyQSmLsWrYu94ceb6jCnqJcm9Vgm%2BxDLNObSsapP3urlpec0QenLbhqbCvlJCt4EdYJ16fIVSVhUr3of87TM5MIAFnfrGJy3V0uNA%2BhHT8TDchZfMKMcydDw5J6gvpcKgl1pvhUqY2b5PO1bFFvMi1dQ6vAKeb&X-Amz-Signature=8e55fefdda1c20d2e5f5da2ddd12d75e14e447ec3a2978e06600d50541b0794f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP64VGA7%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXqhAibQgaTCS1rXrXcfp20Ef7uH0yI%2BvbwV%2Bd5Qc5AAiBwDy%2FAMcV3d1nxXdGqHFCOQzDHKvdfdewQoAWHsoMyOSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM98zlOeK1ulpiDHgaKtwDz3Ca6w6rJNqNmxGPa%2B%2F2xpTXSbQu8nbmyxl26UUlfzfyEBseMcoUzFSDSvzu51RMfcW5onE1pnPNz4hUJ%2FmAXFiZ28Oh7SwavRwxXCgrnxxgdP1s453DutsXfwS%2F%2FvJHno00WKyUHhiqYvM%2BMdvE%2BYsFcE2NRrBYMe%2Fl8hqf6opF90ukb11lHKXfhPbtxiy36h64ibIGFhfqqXxX0uwhWFAwf01E%2F5EBw8lu%2FxTruHGVcDJbOZYOwWbfj%2B%2FQUtX7XGr45XxNtp1AoHR5nyOcfLMGk3uq1yyAT%2FLKI0hG1VVA%2BKAH0%2BTfiUMVDMQMYA%2FnISeIV%2BwAqWP1lf9Ey3iB1Cdx9weF492sRTgyHnJpDQGOyW6dMyYif%2BAp%2BoawLbiLJPlYWnDq5NBlVaHAxzUmRYQ5%2FjO7cEJQbQR6gK9zqTP%2Byig0HqA7ruxEqYfT1MJDPHKQDhFw73AbWWGby1%2BBsDbJu1V0AchgY%2BoCvcsjhJsAk%2BLVQaBnJQ7HDPJq9X5YsDJsktPWHFXsJYuV%2BpNwCT0HABZ1zB3Sur87j4g0MwO10ANP1uA5AToT5PDCxLP6STQj0i6lw9iH0GFKoeYhiMjU0oLEhn2Ac3lndpMco3yenhlStOE6HW75eAUw%2BfjmxAY6pgGd6tqc5usMANxEhF5CAvR2aertoCiSn9iJtgKhSzsTENx28c8C85uReXG73sjxU94ag1ayLUBHs2k%2B78l8tPYgzUWxI%2BEA8%2FY8yXzPDWN5BKWMzab2Vfa37DE3DoU5O0roMbD0jz%2Fyxws4odXYyFcEr0yyHzuwCsGvqMo7Vti7tR3Sm%2BKkDpm7zbM4HuQ%2B7WVJG9W216AIcFHjX%2BO5J0WffxSVmPkU&X-Amz-Signature=a00b2707c24c8b344cc5f57640503a61f699882dde7ef06f632ab253e1aee444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z253EPLG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAR7qBkhVLoUVoeiLOHOhWExCSAG0IIXDBEsEywMgb2RAiEA9ktodpM%2BVhFyBinP1XXy7oa7CUAR3KC%2BOFlnxPUbcuoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIcB4kpxunmcIV%2BN2CrcA7P%2Bqcdo3w4TXDyBWDsuhRxGFB3NvapjEK%2BBB%2BMBqpNrJKcVLoJc2VwRHdu4HGzhpr8gE4GKQy45zRKkqSD3ctD3rsPCZP85SIciOCUY6qgBeeQlct9Nxgs784HetTZVUutoUvm6EPozfr9Y84SMfTSmBNdgjnp0WQT37Af94508kz5ogHkcdvrgXD4Ihv4Jd2ckUF49EbtU0XMP3P%2F0Ic96Q8tYGvVz4kIAkVc%2Brh4d%2F35E38tmVT%2BJh8MbDLkw1GneXk464kBg9%2Fw5VTX%2FdNN0lV%2BiNNLgWLKpwkaRg4yecuW1yn9UXejxXJOs4mSzzOc%2BCOTUwlHrYpf6sd68mnpP6pexpdNOjrxOBqTUuOCof08LDIecAoucI1ZFBltFRRZEdotUPvxc4btzuPW4vENOqIR76USEh0Zbk%2FZ7eKNQ%2FWpLqDS%2FDXm1MZ4nHTiS9g%2FmxWxCNTzRr8dQcFOp0%2FyrFgqFHpSpsj%2BdkK7F0iD8zWWoRr95Nwxleh7iz0OVAh9xEgp2rMO9YkJnJFEiYeVh%2BnfT%2BiCnkYT95GoGFYLC49LQ6w9Sg6iMlu0Tvj%2Fi3ksgRajQJFh5uOJFdmQtm66YXQ9wbF2vI%2FdU4UQVlpNwKPi8RZBWU9D0OZ5WMML45sQGOqUByIa7gdQ0GNTAc6TmA%2BWntyQopibzQALebAMeWg2dT1u%2BBou7XFY1Z%2BMihXL5WlxREbCERKHLf2CqPlmE5ngsqkDzIUShc5D%2FW9am0fz8ph1%2BvdroPOQVqq4C6kQj3jZeKnVsnxH66dU4KLOvedS8oEDAhikOeDWKUwj0sFj%2FtCEaU4HLnrcmuE88QIJbl26L08bwq5OhvdPRQT6iAOadhd744nZy&X-Amz-Signature=3121965e060c8da5b9c4d49ac8816cbbf50661931378f46867e772345da3ca36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNMMPEJC%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T111040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLqlJeK4XH7NNuX01D9GTiBpCuHqLwwruUrd8kZHDG5QIhALS%2FSl40w76Tmk5b4rrwsUUApG1mhluKGurFIeed%2FyGwKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytggFICBAhD%2FsWeLIq3ANNzTISeUK5UaS166O1uIaNXzhfxP88MnXJ2A8COxzc4cufYmgSBLwX9McFa8mxQw92nIK6K30Ndmd%2Fp5YkiVcnOlNzoR2wql30%2FiB6qef605x%2Fb03rSM9rLHDMrPXZJC5rD9trbKszDD5J2v2z2m8msefQySjsl89dvij6p%2FR3s%2BUvgpuMWO%2BTCO2%2FSVqD08r55%2BWvXd5miyNuOgGFM6JDCF0WXddR%2FsXCUSvmDfLu3%2FCOCRof25xEpsRWjZOtUON1sQZE4KiYNcNS3LbA3fffUcZHjjHS8yC2P43WYkeyaU2qvWWfzg90UCWBEl%2BEeD3Q%2B6OmlNi%2FAoYwrZq%2Fio17jeilg%2FvDOyHtGv6cp%2B%2BL%2FrM9DbGwOHtAJJ63iDpI2Vey0RAT1oUUd47dfUyrVNK7P9euJxisTkNMlXJwksayKIFar9EOQwtxjBVppyJtPULo9M6ARxGx4DkDNeej00GMR%2BARpwgEfgdh3xG%2FnTtTYi2O%2BP8UzS4pY35TtmadBZJEHX2BpZAPZAkaMOh8qc8mBSv28wuqZcODSPXYeTAQBlZOFRZfeYssv0%2FHUwPhYCwxBjiBb3B4yfyX1DOiet81phc6R9QYA97nf3gSyfvFK3X65I0j6mHQ6Zm%2B%2FjCD%2BebEBjqkASqh5QUdmmyUQuRc0oQnGMnJPbwZJLI%2B2Sg4RJ83HvYsix%2F5l%2B3Q4%2FTSGfD0K6W2TdLKjfR0VCe4D2a%2F9M2F8LUpeVs1XcDAgYAwerQvJ7Aoy1lJPx9ZM08t2ohgViUS4ytvF3W7WZyStE4Mn9Z3EzsgRLz%2BLIQQI8ZuS9L1whR%2BrnkNsojWiw1rrLrEzc%2B1PKo24MTdGE2Je%2F0Mcym3UfczQFmk&X-Amz-Signature=bbd28520b4abc0264a5906fc86cd13b09b76fa6c08c742d9fa171c4a38da3ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=6d06801c0d3c3478fdffd529464b9193129bece6cb6728f52284b06c18ad0567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRQ26VF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiHnd6e4Tr6OQaegzwO56ih39q9l9KZ4dVUHrdbiyPAiBgI59e%2FNzWGgtNa7FFTIM8tQwqLyGQxQfk34cBqbhSNSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIML2ltmVS6IdipTuLuKtwDjME%2B92OoiVGQIGm8nJqMZACm8SNR6Vz0KswK5f1qJeeC17ZnlVkz5Zrubt3tZKO7tgqe%2FWDhB8brGSR7jBgTyQ1HDNERy0xPnXPc2NOq447YCXwuzvBT2jeiyjSOnw%2F1PfqjiMzBlDqvjIhD8%2Fq8LdvRncw0X3QxFyyLUjBi90WUez56dgC18Vbhr07cEfgD8t76aNw1UehCAbOvVtTocisO9rZvd1%2BzRdS9QF%2BYW4Q2fe6dU1NMzFK3synIHF5hvGWYp1e%2BeRWLZAc8pdozVVceEZvh7hRJl4F0bKBluLaqAqA0Neojk4hWiNdrsAw%2FhB9PFuPCqcncyf%2Fkprut9H2f0%2BWFF9Yc6eECoUqjTIxyJ3%2FM6DwLkgf0PkCpqNibr7hMzIZsCOA%2BxhXObzqHibUbUlkuhKlNKR%2BqjluhVMrfvCUjVXLV59P%2Fynl5k2LXVFApnrYxHWM29Fo061wD0%2FopKTR0o98gVrP588hGRthUjklENaVQJ5SWt%2FddMjdJVQ0potJmq5UAdVLK63hefCZUXIUAQ4ylsLMdCpaXZDtXyj3CdR4u3pvVOM%2Bpr4rRNLNtebQ2ewV7dIcqmkcqt%2BcCqf01Xh0usLk76%2BsmcvYdKysxXr1tdbw7Ou8w3%2FjmxAY6pgHRT%2FdEbEyGFxLafYqCnqe0GH%2B4bX3NvAGdhwq4eeuC4sNbnFGlOAAPNEm1hCRnO2O71A46fT7%2FxMoO00xCDYgFlB8PK0vvFMMein01VowMojp1oEn%2BS4pgpmxE3QuejELFQnqTIKqmGXPRODMtXrL%2BkFVKLkxtH3mR%2BjFNF677HEFnCS5%2F7lwAUc8pN1SXKhSm82%2FYyDm5P91ItobaP%2B%2B4vUIECcru&X-Amz-Signature=592b677bfd6ff37b768827bfac50d4743c72045e38f7969ebdacfcb4395bd6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=4207c160a2750f4bc0423f45fd8b631d91309300b8da539f41c1aa4b47b8104d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=9bc68214e48fbee42966b7bf51f5fef2f38e313f485f8228a94e93607dde47e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=a2ba764062bf4881bcc0e76623aab336895714d603567853b273d54aded4f9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=d6d45f3dc271b3fc4070d3a9390bc3e451204170dce73c9682e141ec61e1c9ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=07f8f861837b69ceaf6a3080ac255d4638286058de4cecbff5a045205f66b74f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=50c51f352268e278ad72a6e46eb5ab6866c1bbb278daa593c41d1782e7234ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=a2ba764062bf4881bcc0e76623aab336895714d603567853b273d54aded4f9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=2b40da482400d1b4e46affd1e648d75519fbf038916c2732cf66df8319c4ba70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=e7e4d8daae16049463ed8ff2ad2e574bf6d6be2d18f5097117e035665c5b6423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TVMQHZ6%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyvKsolkdMJpncXSyVGw76d9%2FgRglG9oyl03PjpwFNIAiB807JVr8I2my78b%2BIu8N4l02At61AtaC2azcW1SRYQcCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nM3vtZHvZjXVv8PKtwDHh3rAnb1HH0gI9wWkI3tZ4BfSTJzHYQjuOn1OSpSvDytqyDLymiLIr31Z2%2Bgw5W9gfjWQHI%2Fzao5%2FOqMes0XjRdTVsqG%2Fy9iJP5qQMygZRVMIMXsEs%2BfxzNDI7Qu%2BZHY9Mkj3Ng%2FMmKbYook%2BfvKk5RoCgj9VgWF1MepFfFy70ZwhAzXlvRMkQVtrWcW19r2c23pZomxtjtahyOalpXCJz43zzWDkRmWMyGI6qV1HPorOYL%2BkSuYXjKWjHaNkkgPCRuSEOzj%2FdQbllq9PHhElLHFpSkn17B1aFstpcU26Ic%2BUsjmL4D11CEKmyz9x%2FPo47cdNNHVz9y0m4iGgzWGAi0jk1A4JbOy0KM7Drr4V2f923xVqVCQ688Jwk%2BLJQlR8BJpipYhuTwOWzoZvCnY1U93D%2FkDzRhjij1UJ1e6m6FEFfK1Z2z45UrYwIDWUFIQLOEPmGTznbnRm7%2FNcM3hCGzH4MS555lRV9qQS9FCNfZcF%2FMvoKylMyi%2FYScFGKZp4lf9WzON9M9NahyU1suncn02YE%2FRCsq76Zwt2DDY1iEyfKL41BlZZ3eAXnw3RQ6RL6Miak7qDjebtElti74rSGTx9R7tLz0xtgc%2B6PA6lApnf%2BajSpZlSaQLwhYwgfnmxAY6pgEijoxhsFKTsPAB4qs68Utw2BjEj8GcUTEEgjk9u9Sz0Rqhq%2BJKfhHCgQUzXraZmacOJuSpfvFe%2F6PkNFtHKAoTO05%2BPNbS9iNZX7q5M51JjnuCydSRu9QFo7dkaHFc32Oh70OriQmaL0UpOvvqZSEXnODlD8lwSv%2BDxjUMZ4Fc18JqPPXfrHSTpedcqwgVPC742JFNrFNvTlU2oiZG1A1FZgfCLNid&X-Amz-Signature=91f8c65a8b04555208ba4beb4b3130c594e9afe4e8a63e175507e6618ec7bed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
