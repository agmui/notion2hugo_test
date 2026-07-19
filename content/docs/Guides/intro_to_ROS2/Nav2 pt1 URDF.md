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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=a1171d1fb0e741df065601e4eaf34eea317f670d26a60912a1d30ac4f7804ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=4cf846ca1ec250eb97f339119e6c1a14021debb9f6bd45befbe93b3b9f7e2039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=1783a40e00c739dc0ae9c4277524ec45697835d8d0c6b8b2ab22e401ad86ea14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=b4612ada01f5a51da73ab489ff8d7b7114aeaed4e9b1158724b846fcb106034f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=b246f233f93d847dd9a3e5392805db07714d63f1fcf7e9b5ccd6a484c667e5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=dd4caf5433b66833c19394e23b509446677d731f4464178a3f54362cd3335a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=86e6c9baf3e04ba0248f5b33accba869bc96fa0a39c2d87e72c833c6cb8d2411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=819ad68e0a7718fbf7cfddd3f7c64d8c750e24cc1183b50138c293171fc6301e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=98b3f970383e59002da25de5280dc8f432e3cb97bedec732fdbb79d5f110c46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=08829bd36ac8966af48b772b16d4813347435e59a417d093f6f61cc3a51c8ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUXUHSRQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSd3SbmiPp9zwowD4HSV6%2FgLqapSsoDZ5WBNFvyf6YrAiBxMTRnkTYnn3sGyvRxk8lJHcK9kq1AjT8uYzi%2FLabzECqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMptfrlXZcmrT9qDwxKtwD5ayrluyOmDRzXz6xKB0WkDtlU4K6Z7gKxTgmoA5Zt8H9tZ1dSylZMztpWMyYDnr2345Pge6kIiMoX6C2O%2BYDm10cvjcjeYJ1189ca511qzZavS4nqifDHatCol7Qt7kQ%2FOapEa3g%2FQvo%2FPA72H6NqcZc%2BlD34khu7Ka%2F%2BvdwQUNwq5MGvQgvJPC62aawGAWYHpsEVzx2KIBXW%2Bvsauco6Uqy9bjJ%2BNbdaZL%2BWEWPsotoGa8JmEvUCa41U1Xijddb%2FJRhQNFBeukYu%2BZGimfAjaqeASLLGTFUrFBr2wma%2FU5pvgPn6yHgK8LS3gcwRtQI3VsSQ0H2qAOvNEzf%2BnDfdY96m8xtvUyJyBqTZPcChIEqi3a4hJsSqtW6x39%2FQJ0M%2B6rDAmoxcKzc90NS5Tz0enDtcEUFmrqdyUztgK%2FrZLDnztN6Q4xGsYZYl7pbAZFLIRlJwLYitbAnaTinCODFj4jvuu5kCqyTrWEDl5HtoEWKcxYl9Uej%2B5evpUs7B6QfqGeAijtUy8QwJkh4EORkwjidNDxu6f4W2f1e%2BaQwfVk2BTO5q%2B4uGV23CC60rLpZhXluzWZnFL7BKpcYm3I5%2F4rApg1Odwb%2BEgvtUlPY9YISe2W0lnalqAhpRoUwk9fw0gY6pgHG0cWKsk7UWErDsWaUHUjMY2YY%2BAk9xGOvywBb8GKIpAzlLnsEWiguMKvXzNjyz%2Bx73RME0eSc4mzlpJyJKkrI%2F5lVI0G2sbRFrp4bGaeyxejl%2F4KXZcvruOYyAFi8IlEBKrJ%2FqRtwJiXdekIjwB%2FB9SisM1UxZ4bOLKHvi7fRxfXiwEJYzcl0ld3rdTo8DscpcoCQguNEHKOzLI6g9qX9b28jmSSq&X-Amz-Signature=b76f25367f06070a021b95174cafedd4e4213e7fa04ac47ecc23431560996fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJPMCXUM%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHR%2FvxuY%2BUmwGVE%2B45M8YgMZtcSAvm792UDjcpVLti0gIhAJj1TTRTzLcq4xNGAXrBhSGBTV2t%2F5hhabRSXo1A%2F%2B%2BYKogECIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUA36MoXjwp6%2FIzjQq3AOyOXnJOVY%2BBaWMX2PKD7%2BIpjbS%2F2%2BjPPS2JVpZWCX9fro%2FXWbgE3uOSnoXIHvP5DU6RAb8qe%2BaFhDreCSIH0XrXImVSUjnjBbIhGu94th7rNnPMvX0TocHy6%2Ft1SYhC7UitbI2yPXX7nymHRBlJE3sHe1EnB5vN6LiefqxHY1i0ZI%2F0Ej4Sp0S3loYFxyoHyr0%2BRDuGe6Vadhc6eptI6m2CDRukv4Amkmv1PIIqEs58Hq6k7zWGOtTlnHsKZZ1kyfRAmTcOe4BAB4CZRHL0UoCP6nOF3G5q1lCTC2vDd85Q9lzzpi4puW0sv%2FT1SFn1zy9HEfn4V6duNrWjX30XmrxD9wTkV8WgIchdj68Pp13O7yBB1%2FiqoBhxyowzPzPcUCHYK85T%2FyBG5TfFsXEdITceN0EuNu8dtrmGOfhqPizTutIacaVZV9oP0LIKh5fBBK2tH2dPSMMH297B6m8m408D6PwI6G92YBWBiy%2FhLrMIXmMBBsEJvtgccRN4qF45XC%2FmTFSsFWmUUyRHDAGrDxgKYV9VTMCrV3XLDqVtgXNUdVI1V0nMgGS4Tn6fWUVG5BqDpEJkObp1qduSLQWbNzaV30qLwMaNlLBh24kAkzgXHnVsOo5F9jIwCFqwTCI2PDSBjqkAauU2tQqfq0tYCfeTXH7QoFhovGr9U73NaGIQkfa%2FZSs7BNVBmsZMNb%2B%2BxRrdZXBsSIKgeqz47rFsyayzV2xyiK2WConeGHH4XcvGwQrFMXZb2Nd637T6EA4V%2FUge0vPQJTaygA4SNYVZaPG8hrXhvZ75fGHzL0uSjG0CuqpVHp0Gx8OqtBALtKRlRcSG0XPqzQcsV19nVYM056yG6IgoKVmnmgB&X-Amz-Signature=03bf9f3af3edb6f09f060c815cfbf88d1afd902968a77e55bfe601e407e98c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QEBNOZL%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0DiDQZlHAIDzN4rLdbbG37y%2Bg5o4KDfZN7MukSURP%2FAiEAhmvT7eUYdHzBBOF0pmRHRJvsyn%2BeKj%2B6BSO7VXWyTGcqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1SO%2BN4Sb%2FROfXitCrcA8LxhwhcSZLYflRM80vskEApZcnSSSs7kR9zpspkNnWrJSek4nRBAm76D6pGp0t%2BOeY2h9xYRIDFsB8fyxyZ0oAoPxjWoquhPzMbeKzq5Cy5q0%2BCUOs8K7IXW28lVObemgD0JJwQ8yrGi3Oma2kJ7LeMy8dsdU0nce1V7VGfwgA9HVRnabRy3126btBIehTTX7SVL6QTEdQN4lGcL34MNH52E2GsGk8DiE4Eh8Qvs7PCq721EnIv3owlKHijF0p3B9N6ttJqeNiBPgn%2FjdedBcohL%2FqtsQmsY6CgBFD%2FUmiUlXMGGqDeiQkU1HQqvFia2%2FUBqyd97mRcd17sW8f2a85RrM5p7fBVabeADyI5OXMJ5SA%2FC4lcXs%2FUu626qbFShP9m6dDESoXH9bv57rzWOOSC7S8rvw9Le43QuJ2iceWApXL%2Bkcm75V4kzpUlaCV7ajpsoV0T%2FUDZnyX%2BELtZrjMDhIwjd88BxBnwKXvTMC8cnk8PHcxKfWJSKRdgwJ%2FO4eEnzRknSe6F2j6GNRG0OMpqEVfhZCT63oBqlukPKR%2BCybJ6unMbVZuRgy1%2B%2FispyL8aWWWAnqsGZB8AyaQnRFC63ShcjF0CC90EofCZy9tnr4LMU0zsUKNnnN6DML7X8NIGOqUB9oTeGa4lxaxOt9XSAHIRaetGMQBondZW5qN0eKS7jPgKWYFrwviVlFpAYMgu3u7TwAJQ2etY4g1ZyWLnyBoSJeos%2FPrBIXaYLuRiTq6P22lZfzycyU0Zn9h57q0JUYt9vmps6HgTeuhKsZ0z1KxkHDw3HvCQPkJR9tff3alPwInlHL%2Fg0D0ihG9N1J5LB9dqPepAqt%2BhEd60bYF3jiDO%2BIlJju3%2B&X-Amz-Signature=322654ec0eb2a00bfe818ffeb3525d0aa08ffe53da45eaef84f7fcd2b0132d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=285258d195f92a176e85f83d01a84c1518c9e7c54f293c7a5e21d4cb92827604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U5L5HZA%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFsXph54ZoGzF0mTMG8B8z1liuKGDLWIZQNa0wZxP4EwIgaZvUOelCb%2B9rZVsake%2FonJ%2BB%2BYT%2FEYormkXQKPSjBk4qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNpVREZ%2BFflGpwa3JSrcA3fsRWB6JhCR%2B4kKV3%2FGkSnxx%2BNJUAJSLahHkC0FoXEVWXZwwW4hY0U1GPtslSK7k3SN0QpBQndOEvPf3LFBb%2BxcjPyWUcLQJpk8ER4jYBuuD6n6YIA%2FXoPl2lejAQVj2jzGgCkEJpofzVIVBFO5oQTzeDaGCoEA4GVyNHDCxCYHQfQdimVmO97APAFiZWHMCvoGIZ36elFj7ivzTVlaYaZN9TXgTbCzrbQQHC%2F7slgEhkJSUgYUf5ZeuSIIZ05vM10jUqyHhRKD0XTNQbAkHkKo3h%2BiWYOl5lyQlMg37rmZdDNO2C%2FNTPxvgaruiHoasGFgLlb%2FGhnGK03flQUzG1hmG8M2uu4Zhv9ySM%2BKDQcFaUj2cfH8Ip7xnbQMCrki0cyYXLQmXVCGTmG2rGBnkXJLhpfomL1m%2FlY35QCEGknSZEXtv11FWxDTcw0GUm3bbXZo7%2Fwm15Jf3kfA1wqec0pm%2FIDSsoUo%2FAXV62%2FVKaZ8GmQ7EAU3p0G7kI7yhTmoetek4R%2Blao%2FsbFkY%2Bwp5snRK1Bm2%2ByUZKjBiSCjRp6SggjfoaSzICYBK1HNYF23rmnYd5Ik%2FJ1a7n4iZXP7C2%2FTg2ZazRIVqQ4BoqDbtxI0dA1kHTGGJVO9sVl2ZMKzW8NIGOqUBYBtDF%2BxoYzJhnH9KNPmJqGrK4ue8HFmaDautUJiqw4oH2ii2%2BzArjmX3%2BJ7ko%2B58sS1uODfOVLdWd%2BhY3ShLi5e3Pb1I5baVd4DrCHYxUCIJQjA%2BugcfvOMhF%2FZZ9cd47fXKR%2BGStcLrhNd4PX4qlOZsYag6oykRmNMt9%2FhRk3suGWrqzO1aBRhlUyWNtc3FhOGoeBkj1MntIbB1kocta%2FqVC4sF&X-Amz-Signature=9c41f3d25fbbf2c1799279dc5c9a07e2e705986bb861dfd3e9730b871fe9a06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=ff28ba011b6942a5ba211d002c0221bb8f9bb790f06ce65d3bb41bb3dc6cb6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3P42HNN%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9JD6QxM7BW1Tg5KU98UVbcrVLVAbp1CUrQyaIMvLXoAiBAnpwwzYDa8jmaLE0Bc%2BQVLRoBwRAO524WVVQvTspgeyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1Kf7jzNihGIE7ccdKtwD0yGFbI12ZxXcY5eQNey2DO8HmK6o71FfKQkINSfIY1DCwngqg9bKeBn9U3OUCj9k6F33SI0F6F%2BJCgni0dd0%2B3dlZAd13TjwhugLlt19Ywsu9KhjwH4DUyVAirDYm58ohDgI%2FCFqt4S2o8KFMSh8ymvW9KaEh%2FgqzHlVeNs2G23vng61WwoLWn8zy9L2b7hzvSxr4jC2g8Zr0r%2BKNoa5oa9xtAOlz0Yny5OkdwF9mOm%2B2A%2B6JpvsANlmypx7hWQFMl2%2Fwft9D3yAbqN5nAmAOA9h%2BT9IF%2FnuguglBQePaFPOk05Q2eL5zPSqusKUMMs4uk12nYM%2FlwdyDoXwGcgCFmXvZihnLUj8aA9uIbJfJrmN5HBurjjXenzuGfpJhcEt6YdYJRfzL0yVENsXSpdEvzWCR%2Bf4cJ0ZBtVlCDlAmzKA4rxcAjJ3pK9VEf6diDjYGvFFRk3T%2BmXIm6yYRGW4flawc2xyydvkwL2PYTqbusnHq2o1St9wHnOudgIPAnIImAqFOe9j7JJaDqmD2oEhXpk7ml1wR4I3ctBv%2BqyxO3JpcqxJgMSBS68l%2BkYYR9rGhcqUwhI2xdCwQc1%2FYRG2M6dbHKgnDPZiELHgVr90SBFTUj%2BTxTfa2o14Hiow2tfw0gY6pgF1stALEJsiiFk%2BCPUNltfJSAxuQT30c9SfTZXmsL2EyVgmGDdnALEKAuwF0vyr%2FGqu93EIq1S8jbm%2FNzO9RtWZX%2BJdYd2nz70nX9XcHgER4plMCDg1ziw9OEEHdAAQigRjBjSuhiNHzd3bLIczHai6rnY8ul8emmKxYN3pVDmuTGZj7WYcy0%2BAOT%2F2P3mX2qYvcBDyDspy%2BmCxHeKP6QQuRaZ386LD&X-Amz-Signature=f93cf480e658161143d77701670cb97f608e40f572da7489645d2efe3d453917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=dbfd9c1045e24555f2492527071e7031d9eb82a645782e000b71b8f444f0376d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3W652GK%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBqEa4POR9GKWv8t7NZW%2FSOx0FHO7yrKsf5ImMTF0KUMAiEA4w1CFzFxYH5SVvQfQCcAvOj0QammWzTniMwWSlyobAMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWTHtr2ISnjcH1bTyrcAxd9E3OmXobinmnuufQXn4NhNxNY67tsso%2B1GTiNn0nfosc4nz2dggM2tzsBGGzqs%2BIsbV15QpjET8lA0%2BsVTJIVwAYFMT9znJqgN5P65jePWOw0tc8iB6SvM0zQoApP2OtexXM2EuUkfcZ4QCtrFauudE6rOBwRDbCLWgMKiS1XwvfCPUE9FKjGEjPkv%2FtpYKDBhFZfxRK0cDBxAPuwMIjlNsel6PSTvanrtcYEO%2BTQyH9jT83ERhvWPotuMIU6GokEOhbiwDGNxYvkCE7U2cPOcOaUvEgtr6TBvIbtf%2BPtqEBfiYBWimg2kz4Ew0sN1vok1oy%2B%2FxJshIm4qV79Bu5l5CDRpyOYdHmKvWpOAjELz2ObeY1sKhdcZe63qTsZXockhVZK49e7LQYjBtAUjKRD8lVEfGDWqf112ZkRFl1fr%2F85n2AL89eRao0bRytEZoCrXlordemD8pm5ibGh3f5D2NL8dUn7FEIBwE36Orn%2FKexibiUcl1203D271sxR%2FWHSPKrqdyuoeeRX5jH6laFY6UpLQLwF867SZVA6WJLJwnvJkabEpfOVXQA%2BVSl%2F1MTi%2Frdn0pKxNrUrwjb16g4hg04x2mGT%2BHL6LaAYRURdNXzIan8dk36xTxw6MMHW8NIGOqUBP8Q7f%2FLVsUY0KotzDvCNjRmDxRftprp0rdtz5dPAz%2BxdcMKm0wXCiBK%2Bbquxi5YhopXqVPGWYXce1uKZ1Lh%2FLPN6%2F0OxHqaGp7593QTvk%2FdElARE63qlFe94nOGzQrFimgNU1hormSii%2Bcc0MRvkjBbpS7uov%2BFi2P2K17dsHvNsHLKXZxNcsNWFqu4B0BppWTanaaqHoOArDfJnTG%2B6Rez%2B9T8j&X-Amz-Signature=3593378c9a5a32a260c0235091ba9baf058344d06673ac163f93013747340a40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=cf73348523333b0f4538fc3430c910ef458beb5f464298bd8073002e0813ff08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIA7MCHN%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwSZMTB5JGzT%2Bf1kg55LpAluOjBNhvo2bLRowuqVFcowIgGFJBKia0apo5oqY7DhMt0pTXwyahf6waaZgiZfYQtPQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP9o1PDIijL8YrItYyrcA12J0Pn7Q5bb89ZKGqn6H0GRl%2FEjSpGbohC5hTkVdj%2Bnle2285t033zwa%2Bj24F%2B1QPeNEbpuoOrjMfw4h%2B9iTRNM9CVgVvmB6yMfpss9sKL4MGd4SGgxWXuUETGfuNQQkY7EzeQfy4%2FAOOUDXECdk2IUfmPTaazWkl%2FT9t30WEU11lgwUZKmg%2FyRR80hPl8CaMqjn%2BPs%2FOqLcxyKpjNQ2257WkbUihN%2BT4aX5Noakg%2FwptP9L40ugvMrZqf2V6ghkq39%2FQlvJ6VRhmJ9G%2FxTR%2BBbcDU0aLeEiOdKDmYeALz2ywN1v1s6qzbQ1RSW3zNXTHyphrv8vHYttf9K098KGDlY4tZG7bUUAVV9wLaeykBRlCiWthVzuIhDWOtXB6L7uCEeWhKyw%2FhsJa111GRJ0YNpaJwsvXWDwAzfGKy8OWunTW1jAK5ll1DG%2F5DpXBPHmsmxB0KExPSD1bj7FjpENfAxO5N3QKyOuT%2FDFafwkuQ0TksdEy0fi6EnZJWturljuXau3KhRf6HM%2FTYWxeb%2FsStt%2F2AzkHlwh36Ts3gA9bH%2BTH3cbKtROilD5Dms6yHaDSZ1ka4l35%2FK1MzI6LA9YmZ8Newp5x956UI4%2BamOx2AopjTsijSMQGkH6MfEMKLZ8NIGOqUBuLBOTkbca6wHC5v5k80TMg8LFTQ5sOgNiOk9NDOhNroAGE4zFY8LFpPcMLVONEUMiJILcf1p7xHi2FBuB2iLWQkKxGZrP73hn39H%2BKBwfNf9P7ZMWYA%2B6nOgF%2F%2F6nuzDMtkZ%2FkBzwfFzW8N6tVYaPgPTsC7VD8zUawkTzZhp54cXe6L4nB%2BnOdcCLIVyRmRpDUO5XNJricTExnZS3%2BUZKpKuQdjl&X-Amz-Signature=fe289e63b6f72d83a19cf7bf44a24d824223fc4c5bb3dc46e4175484f95c1ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=b3278c3339058bb6211cab30f4123e409240d681f21475e7bbb900c47c0d8180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTB6CISP%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEz%2BCJQpTAOfbiRPwIIrvTd%2FMZzLK9R4bWye2mOng9wAiBtS66ADUWYcDeuHAbsImq88jkFJRYCFhcM67MXQSlL1iqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaghL8jNgOAUq6S82KtwDTUHCL4mzAv0yoySTFxdA00V7AGki679fa3VnjitkI5qWuexdwmH5pF6E8lUYzqPQxXYMxfVsdk%2B6M6tdebSBX%2FOvSkYJh6ZS0LuV%2Fqj4zpBGrG3kzQ%2B3o31JSgbIAnllHIRfJHWG%2FJmqRtHIaTYAJcPdhpd2Cj%2BnWS31Kce5I8AxkZEVt4ufg0x24TFItiUlUvlW5%2BYq9wyadgNgnsQjzO9oBMWfX%2Bxp8p%2Bm5zJHz68a0FM4aiuS8Zs6olSXRng8hilEOGZg8JVuSS%2FJ%2FccJxEyfdjoNr3oDr9d60u56rgDMSGdplhicnHE4c5HLkri6Uwp4wpu5Ly28v3x7cLQeq5h7MUProb%2Flkk7437%2FoPG6AWnS6JppkPr6WEfryXlR4Wo1BZBdXZrR6mbuncjDXdlmkPbl3Hk57%2BSxKTOmXKEyon%2FodxmCDFck%2BURacU8aJHHRyYX82xRGe8Ttfk1TF64pqls1viznFIZqg2chWYykh5qv6o2ACu%2FCUbKDyWXZ7bDgwBuPoRJyKnHZAEoau17umu6ItrxZ%2B%2BB6cjYpvbILra5A9rG1F9aLHZm0k7q2nKUGEHz%2BX%2BOn2tFGXhhrrCOd69Qi6x6RBP%2BYeraNoI0FmhGF%2BybSd7opP8Z8w2dfw0gY6pgG58%2BCkNqgZnyCAG1M7yRNqsZtRsknfxL2dKurmzbqtfigmrFdhatpus8SNXhL9LDU8%2FzYn%2FUTHK4Qkry%2BmsswneOg2eff7efwsl9iQY6VS1pNt1MlByVSWM5m8A2i%2Fwo8ONkYKp8wqzqxjKDeWyAMGPnz2ganmz7vtkNkDfhHSdmme7euZzvIPWD1F5B7RB6s%2Fx38ydkMnvtvW6GROFhvGP%2BeSFE1Z&X-Amz-Signature=f0eea9ffa37ad0388806d41e45042c7ac7e9d3657c69a466e1ebd1c8c80ca7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGEDQXF%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5Fhb7N%2FawYS9C%2FdYl%2BfOzo8FydXU9HcI1QZWOjsJhUgIgUSt1wXUYqc2c4eMp4wt%2ByyFidbSizFgef6qhZwUMK1AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNt9BVe5KSazUWJ6nCrcA%2BbX2EcrZthJu4zw8gV%2BflhZGhwGZ8cH7b%2BP%2FDpqTY9APcOY08RQn9qZDTqCHDa4hUf2420Mfzhj5lM%2FY8o1QfyQawdBATpDcY4sAxjqyvjWULACsxqI%2Fw1IKjXntMDwqZ7lJSgOlr1e%2FsXkyqj5TqCEX1xQVHEaMtpMMzVWVM1oMhfDhWqEcBWOhSghqqBnQXAR9KWazaWARlsRNX5ZRmdOMJTAhiaXviNyURAlyoYP66IYvOxjvCe5Xa82DnsDzft3%2BV9yY5Rj8dFJm2aG%2FfhuVaB81VByKJ5J7WMF2bvIG4WSH5GUqZU6nJRgy54idBrz1xmkpvvixpK51zDksxSe33uOQbdMwWEXbgwxQwLcqfZ16ZyBXqn0i2eiX44uyVB%2BRx%2F5aLYg0Khiizb5T8v%2FPxKJq32JSBKDyji9yzJ3wGMMuXJ%2F%2FMajm6W7vjJs0BX9wiBWhgbGC2Q%2Fy2%2FZ8OSmu8oaLLLVuRUWKB1ynb%2F96A5pp1Pdwzv5Ll3%2FFWyB8gGvcrzD86KcS6ZX9XmvMQBCHGX1DkRHd3xWPofIyeyINWUnHPx8wgoeLVEPDZhhPe%2BGQcYTjHIlmL6%2B0bEqFzKBmpVkLa2FEa00Z5vY%2BURZfi7t8XhJqwGjh3rpML3W8NIGOqUBw%2BRVQgaKCphoHEcPLKO87qeBznzegRv%2FNspm27YWWZd9RD32XG2HJzlgqEY6PbiFcM98%2Fk42Q9uLZAAWguKH2HARA7KDclMC2l%2BMmA2BxZYVgOaShp121%2BgWrd35BcFiTB17IN9nAFlnthPR7qF8zGNcGNhU5%2BQ9XpEfWDvG2vVlr%2F2UcF1JzvFxk0%2FqyeWQhFLxdBvbbn0Kuu6C1ZooQoPxE7Et&X-Amz-Signature=93b7958d7c934302129528d85f0b60f36a4f7c8063210c0642625ddc958a3d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPF44XD%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwoAOWt%2FpjB%2BvqIE%2B8aMOUCMwFIuvWAoX%2Fj%2FHBEx5eQAiBU54NJQCKDSDVEMtF6aqBix0eieft7T%2Buk4IogyKWR5iqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjYREr8cSTdc4Sn9nKtwDJwBL1P7ltHYpi%2Fxz17KFO%2BP4CNbj1GWylU3y7GL39pRrymlwyYRGUc8IVnuvwggCO8e28BMe%2Fh3%2BD2sXFyDKFoVOS8yL7pVqrWFp1Axk5twrQOHtPWD4H18tPD0UyDOtZpibNU%2Bc2X4aww5ybcG8n7hWyB72F6FXMmS7jXScVVFb381LQ73zWcQ%2Fy8gMFh143bmEqz7w%2F7Notm5dLC4LfDATXR28y8uMnrrvsmwNKjfsXz%2FRihHufiu21HUVGwlFyoxDO9CaHt07j%2FGCnabvYeiPZL8OY8oJUkop9o%2Fzjl9tEIZamjqTTh%2FZ7tqwYabSIaNSy9%2BrdIAYT%2FtkJ%2BV22UeDDEYUZ6BqLGDxgg8PhVpXz0yjKiCjSA2hOIdtyVuqWj6A%2F3LKdTGaxZuTezeJtX23P83ofYeLe1XxSaZ4rPd5Ja9ia234Mu%2BHAcUx2gZ4unPNTnlWtAeII7iVuEeg3IHTSzfZ%2B0oQjl4CVbVTLR57TWYNsVC9uLUSSsjr07yMTBn4FMv1kiBWHXVtbzq1vzFbgHk1xXob18nzKdcqCDTjVveSzrrYO0us%2B%2F7YxwUibNOJi8TC3ppEosV57GiBZccPweEZWHPWl5swOu0foIVLeVyFh26K0QihXVgw%2BtXw0gY6pgE2AEu%2FhkTmCAVvijMUxtV5VBRJUaF4gOrOiBAcB0mWVvqEEfbfo3c3eSnC3VQURC3qOJLT9%2BL%2B7nBH7ycZyNc4CSpImsXO03N0i50HBhyOWUnOnXsQWoUkVHnkCuZwwSjA8GC6rESOjyLEGadHnYb8B44apiopQjvgWLln%2BV%2F1B%2B1RJdY4nukOWz5BQy6RSEa5oc7GKTC2y5%2FkZKA3HiL1Z%2B2WFpLU&X-Amz-Signature=ec75ed438a14b04796312caff0e96b2f44a0991d6d64fe076f987cfacad587c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=b9b6c8ab759071b1ea304d43f83d97a6465ecdfac346c8e969a0800e0379cdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTV4U3TQ%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa7MZtS5uNOngolN1T5CvIj0aLEPOKTeEzrPtJMuyuAAiEAktb3xzJqPWVjnV00%2BPCx5pMpi8CJN5aMCrZUUmDMK0AqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTgk9bR88M4otXGLCrcA4oOXtYKURxwSyoerW4a%2B3NphryJXRgLt26GFyVtDkhJUsFzt2aMi2jZa6laa8DgrItCHsVjj25AwIk%2BQG662CdfIFENv%2ByQlfRqrMIbxTzWR083gEAAS3YuIRmNKGCu9hLGHO2jjhNonHtQEj5bpuRmqE5jrf%2BPD9OKa1mhvavHIrqvlAS6IK5yPXeJcKgPVA4457bfJCL9zCw9gJj4qKlma5LGthgSigSqBfeE8jHrN%2BIQeBQZFe4IQahuwnF7cHLPMVcvohmzZvxtBZTJyl0DnEEHPu6scQKKwBrZ8JBMBmYJt2a9CM6Drc07CDPlhWgSVwn2XVf6emQ8YyII82Q%2BShWI%2FM5scPpAFHlEW4M5trF9hIDSk5JXw8p3TnZyPWnn3OOTuHlkSmyYOH7oA4eSh32FoiBq2C%2BWa5w9N4w1RP8RXFm6Sx8sLB4JIfPg9YyYXHkelKJlMxt8Y3PSb41Q3mN2SqlmvVsszTRSBRs2%2B7DZsFYoJLL9RKdT9YzqeWzFL82fiitZYag1kd8bCYwah9PyzqO%2BZnT%2B8daTtAUFYHHmz71di4TmRE5%2FARiUt7PZw1RsKsmvxyOM2wCS1Cw%2FqGE6t%2BOCCht9qWuo%2FuxHjvm6w%2FRlCZ24pZstMIXW8NIGOqUBXk9tKHkfIeUdHmv%2BGMRMIyyv0EQcXXOGFVjtagdCHprSY1pN6BawMmzEr%2B6ZQPRO1c5lR%2BoQ%2FYdzwZsRznH%2FiLuWV4zI1PfyfakCziN6R6BHlPJ4GUBeoYu2qPcwqDBBPTcLWGuQjPJ5s%2BWUuhfSotttuKHl1Kaa1CbzvFTN9ZZMprNopMQlwbVDNaOiBFRAIJpgeiZxU%2FeqwhNdRIBMpIpP1O5Y&X-Amz-Signature=8b4a97ea26f59950469fe5e8adc9f6109b1460a449788a0a3e6881019fe32458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=e3f866cff7a1c60a0af180df551f5bc83b172d2222ee25575ff0943c2bf29ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=0bebb5a676c9b72a4e42b2448e615d88b398fa6af5f86bda527b5816b5a16974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=6f13a645a48eb6d596201f00844ce6b8785afd8f5a7ff6f87e1cd076102240bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=9028a16a895926cfdf3f20daf71b901b66622a2a1db3fecf5f209cdd94a4c4a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYPE7RSE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHeKInsgcRi9fcrJcNzzDLbR0INCGb9%2Fm%2ByiK7kWnMzkAiA%2BotK5DEvhMdqYplG8jWMH5LnCLXlP6fNLH%2B%2FNCnu7NyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGeIFrS2O1YInvQgCKtwD%2B7ZklOD97xmQB721m7TXqqZ0BT%2FR3ozK5hQ0I7T3h4G8F%2BpiG04wr%2Bovq5cLQCIA7G%2BDgx1fOcKY3WaiX4lnULAicoU6ui6dr4iaJt6iiNgmkO1ecJEEc3zWgTSiIikKRpM1n8ckRLh1b0hOJemh8H3DfSkhzZDkdqVKjTgFES%2B3jusBMfbVnDPivVXIRgUpwr%2BHQ7bBJ5Vkf45qJRsxYHkuipPw2oXD03X8pr%2F6TsxAbars012LnilYHNZ1fvUS88%2BBCTE2m6zVWGD9zJiv6n1BG999zEpw%2Byt4LSxOOSnDvXxF1poOWTC5H6Xygx40ogtaSNlxm6Gzb4CyzQ9hKx3EBFuGGUxLkFdAoCXGpa0XbknvueNF9ksuK9aD2djN8TreaavqEDqhoNF5q7LJihWNIZCCJ8TW5mxAjKA4OGLtGgD4dfWx3glVVmhx6vXOA1894sOPSVvVgvG3zgpzzYUey2S4nWqKJmNku6qSAAzJ37H1%2FBY%2ByU0DVK%2FiKYxbn8Z0vG43hmLjqfPrcjCbQA8D%2BdnBO8LuD%2Bi82%2FXCLepaQD9PVebQQ9o9Bh7XYUNtOBAH0FRoPVrMbcBpFdltt%2FX1GaJdEPet0h5DOaYIEq%2FsNCETs8wOwnRpTMown9nw0gY6pgFz%2FGpOrJxxHaYcvT9CvDefvDKPkgt3mvRllOq7aRKh8aV16bnPpUrIrzrP90styWWAzlUc0Cea7LYvVHqTaB9IYJv8QGgrTQixb%2By1%2FJ0gAx83zGy0sQ0GBnPLTf%2FOp%2BWzMc3tAIM5N3%2F507eFBK6uEtzd%2FrAOGH%2Fw06NQCUSrmINGly17sDJZ9XP7bBYAPcQdMyyTPtfzybztDpHGD1BB3H9MpXb4&X-Amz-Signature=b1efa1e9ad629dd5da7c344ba571a96ee4608009cdb4b4a7b947ce1a5b1e01da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=7e46893766675922e25ef49a47fc2c9fedf3c95777d1f7510ab850383d7f575f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=8e70155b480706f7b54534e71cbc6ee94c06d9144dbe4aee4ed6a7931de90797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=6f13a645a48eb6d596201f00844ce6b8785afd8f5a7ff6f87e1cd076102240bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=33bda6f15eab7af6c99f64870f4d26a9a29df2bd36c51aa624a947711d164b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=512c61bde054605189adde23545a1388e8eaa78287b8d67fcb6b5b086e020dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXQUNKIE%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOiMLUjIVecgD7GYrBF2YWfnjeKrG6PgFevuFKDMxyIAiAkFKA%2Fb8n3y0GO%2BeXqU2KYXsS13D7tjUVUJH3ZC5kERSqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLqCsXIHa%2BIuxOvzSKtwDdFS7r2k46vkdjrrdrHc7wHSUGUgpg89gtwGlcti7NvX%2BygSZtUFezPRPTW6O392P9vrr%2B7O7LbvukOfYUf0dD%2FddmQb33pCdb3hmq5BCMBzmoLqJ6qoRm7nLwNXnJgxen35ELCVHBqG5QnQnwtxsiWsGLHeXW%2FxIeAfVgntxwzxDm5AP7heSRmNgUe789ouUJjEL52y7cr3nJt93fCXh50n8UE3Fx7BqGCHkAMn3MTal9toy0BrAgOToBytJqOssHeLH9EhrnHvNx9cwkjRT0pJkKmlJp3IackrE4nwMmbf%2BDQXOIUMdiZv2H4U00vty0%2BoLLbbsFMt53LXR7Wh0Jdtm%2FGKQDAqTAXWIuhQMUVwtMWRZx8g32FTCw4fLDDS2136SSnFw8%2FuYDXk7O2E55EU5%2FjfjoSFJ%2B7s7cZPOb3p03zV3yHuu34K1G0HmZZvI2HjLbjBYx5KG4zjcKFb%2BRpdYIzLdXc3ngROL%2Fmz8hk8MFC1h9Nhfq7kt61cIYBUMGDUjEAfMCympv12Xs%2FAUYp%2F0Dg%2B2i9c19NgsbdvfOsD5Xk9WN5FqqkwIGwk82kmM1kk8apTzwYDT2jqADvP7imhB9SfmgFjdl1h5RZh%2FVU6fuOSeiqVTwn1QtIwwudbw0gY6pgE711S%2FaK6WxuwQJKOu%2BpjVrySCdSLQba8lHyuBz7dU6A22mUdMyCwb6dYDhGEWfVkKIRfTAU7d6kT5UvPU6Xt6F%2BL8FkLs6JI6BWA4uTm8F4oS8v0PylyDJLUjZY1phGDs2CVktdBmMe2wzU4v2FqomIZyxnhDb5XwQAF9Ne%2Bs1QMpPf9N6u%2FrqJCGm8Tf7BO4zSs3Y%2FXwyNKzXjiV7qDbdb0K%2BxBC&X-Amz-Signature=58bad1ceacdc46569eb467a38ea1a263085c7648438b521e0d9b627799425650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


