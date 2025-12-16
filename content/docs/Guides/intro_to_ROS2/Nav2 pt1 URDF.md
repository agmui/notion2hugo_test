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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=330268ea6a9b05ad7e97eb5dad8ecfa34336744e5a1f3f821286f01ae612e66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=a80da4155ee9938f122c7966103532f738a362857e4484dbd2c54fec03b75a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=e49482eeafd3c6a7a4c8eaa066300f7eaa005b60eff5b5a587eab8eae82ba982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/07bdc0dc-45d6-4eef-a676-322fc8f65a8c/4cba8a44-80ad-41eb-b9e5-307790d0c0c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=99b5c6f8fda92479aaba8311697d1f87064d893ef8cb0582070ea2e3030bfa91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=30623204aed9b7e31ab6e7116014d47f373aed640ce3185a3051ed0dae30f919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=162740a73730e1ee9c71a683f2c1b64688c274dfcc686a8a3f8caf9f25d914a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=e2b5f69dc591ff788d3eaae56b7319447af1a7452898629e37b74ca317a45318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=a63f0e32c3463b3beb5b8fa2b9cf5716e5880ffd87de4ff690a2cd474658ebdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=650b1ba02041d8a8d6f47d3deab4ec8f243d823ad72dc61073c9ed05c06f146b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=0b595acc1238e8be20a4280f09ab4aa959598577be0389a5f1c35f888eccdac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJIOLXUT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6WI0FQqT%2BT9N1yaU6LQgM6abOKocQvz6pCZc8xWSglAIhAO8j%2Bl5E4m4qTohT1cS%2F%2BujwfrbXvQ%2Fq99BK9Vc9sOZVKv8DCFkQABoMNjM3NDIzMTgzODA1IgyHkUvjBUPQdYJ7JY4q3AOWhPfolU5OuleXGT48qh%2FAtolFhlCTLU5qTE2uN2IARY0aV8Ej%2FS7dkfg8Bwey11y%2BCpUk4Lalk3RneMA2uGUTlb6wwN4MNtzY4kBtTRVgwfAlDVBZqbeuhTyHe9DkA1zmUaB04QNtCvE%2Blmy9UUNcXzvgNHAdjw5Sa7E1%2FOKz6LyeFcabItAMVb9X1Yo9y2tGKSmbWXl09fSbk4sqxBPR53Z2ccn27bS%2BVMiX03huDBW2mppV1ntldsEO%2FUC9%2Bcgp3A7zsM%2FEzvZNVYMKJUN%2BSvClNCPfKZqk4LNfaqXRKPbaZUB%2BvLFxPFJbzR9GpNhWZmBiBMBB5pgqQJsDUXQrYXDkjJXNSo%2Bbs%2F8bkbUlKB2SpiJybW0IVntZaKOeAfeHpe8OPrD5FkJVhxWXUwAEfOO5RB%2FLL%2FQ5UHZZq6a5fDVH44eBKmxWc6bXqSEqO9U%2BQSwDwAIqLJqc3D0tpxIRKiE9yoI9bVX3Jt%2BKACY%2BwDdQ4tC1qHYIxmpPoKSl3%2BgEd%2BWeDpvhenfVZJl7%2BsljEShKq65ZPPRgwyktRwoQLgAjMmSKggJY2O3X%2FbUrKNUJzLs3D2et%2Bv3tzk%2F2kYFBH4DzBjREikPq4Xag06b3UMDcepYRrA5Q0gbmNDCNy4LKBjqkAa5Zzq5w7RJL1uqZQ%2BYszeEygofgct7iCzuzX5an1IqXxjsKWpwXXCpZ0dYufbjkK94rkBZy4hutaCjoZNwcq%2BPFXRGTRJfy%2BJYbjmjCnf2aXdBQhUJK9hjiA%2BaB%2Ffx8y0YsMlManyIyfqfHGJe%2FxHhmql91mhw0r7cYjE2ep%2B6NUredxVycVLF3%2FYDpxIOoYjhSabZmceAzVSJwK6iZ%2Bl9tI7vt&X-Amz-Signature=25a22cc32d7d3738e6ff8e90fadd6451ca0473a283a448ef522e0c4343df69fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH53BQ2N%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJDZDLOYPRlvEw%2BigaaGNnns8ewn8IQASk4aC56GKusAiEA%2B01MyPNLlQOVIcQTBNrICG1pBFGvMz0JKx8pVTn31H0q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFJthX2KSlsslYVdwyrcAxGOZmMpZOqClzR81u3aaSEAaFasc9m3xBsUQQaeWo%2BXiG%2FA5P%2FAyyd1kG58vsrPf5UcNynas5zIMxD6bY3RIhI25GOr%2FtVEANVxno2RBWCfCxYpBzowfPn8kukCpTm4%2BjxAJ7pKM1mNLc4NvP%2BbL4uXTjF%2Bf8%2FfQzSm15Csq7V9MQXxcAO1hFEETq1MVNSmHXozsGwfjdAtI2FS1QvgTuvgp5%2Fl5LIi68bh4TiHVHki3ltbm2IJ3L3XlJ2%2BH611WdgfKLb%2BgghL41y0g5mqLBYbg%2F1JI4gKW7coeW%2FaTholVa%2FiQq7%2F2t4uGCICPlGq9WpFveIOZV6KFMCYodLG0UWBLohCWpYq5wvHiqcWUh4WarQVC%2FC4x%2FRSb2A5ksk6f6nG8NS8fO%2BUBP2frbudqthsoiMPaArnQ01YtpLLA50g7%2BXVOCt0u8tvqSOPlj%2Bo50%2BG0WIgHw4QV%2BIgP5rn1Ckc3MVuoOwXodETTWvb8PW45sc6DtZ6I30sKHf3%2Bvb0D5H1KTApM2tTcjnnAylLtawq8uqX2i51NteoJ0SxcrDZJkCTxifbODFyrcWI8Queba0UFWiqwrEZZGJ%2FAfAOFOJBtcBgFvYohFHLgr5T%2BxWiGb%2B2SRh%2BkNWPwEZ1MJvLgsoGOqUBQuFXuiqQwo%2BK40QzAyKyh2N1O3LemO26%2B7ElCBVEv8NqRok%2F8C7IrsmDWTh4WPoZhw7x0WITC1ZDDHmoI3yyT7MYkZi%2FmsVreXNkOvRO3S2BD%2BxyA9KgZaHhMqazvvoHAf06Gi11ZHOHjydlBlRe7hbOsR0fVqpyay%2FEMBXG19kqi07mf0am%2FzdibNjCfXqnzRd8R7UKYRbwpopana%2FQ9FSnubTR&X-Amz-Signature=909382c28d815278494d079c227ae47c892cf719346e0054a02a8ca510fbaf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B54YQTT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApzMEKADyBT1%2FMdaE9PWm4WXIu08894k10wM2S8cKTXAiA6KAz6fKdCTobxp5PniRsAXkOAVtkE5pN%2FtWUQKeurayr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMF1KTFssQ9KNHixjTKtwD4QzVUJgFq0xhGaL0yDenzhURa07lYUCEk0GYbbqSLRawLpD5UytyccAPnaEmuRmDc6u7C6hgmW0lTZ7mLuDj3SVodvUHavBr3Y%2F%2BlDyRU7MLiSf7fTiWL%2FsfEC8W4y9FBmQq%2FUPmQeUsYUEtVAb6ZV9TYnDNLMolN3NceAP5EFeAiDBDebzPtC4gWMIF%2FBThpM4HXsqOPH4zQcMI2x1mutzywUXHFcc2J1FQCuSvLnra9aYOXEXtArt%2BngknxyNe5IEVMyPIhz4Zo%2BqUYVNZ%2B%2FruIQediuSUolMlVKcYbi1x%2FR2D6XyyBiJXjmyGYj5%2BafkzuaOgwIB7CH%2F6Y4HcpZXCWzVxeh822R6w2g3b8BuSyEQF%2FKWLogBsF1OtTDg7GCmHhnTcROCqd9WicY1gRohs8kk6q%2Fxs3TXkCwpddvNyWYqXIiviED01fhjumAJJQXZtCqQpXvz1o8rpvCt5UFrjnb8yfIFqiwk1eGtM%2BEASGSdrzs%2FdDh4%2BQifwtsHoFraPicyUatBl%2FxKtrAK593ze5Kx2kjwiz3Os2fpTrnWsVH%2BsEg%2BPDkqgvP7mg7W6zQXLE4Vq5h1b3wJw4wAfPQk8ZcTb0KmSI8SWtRdMnIUCIL8zEz4PC7jVhHUwisqCygY6pgEUbdbY%2FxG1hMJdWQUnUrH6DPrx4yCwpWrjle1lYJdeVPSGbBp7eJIDyd0IGccf2TAt6mLANkdVKgyUMbcpwwnUzsOjeZeEID5tCtyOyK8VuOtt5%2FoIAmaJ9fahq1KsQ56nDJTKHm3w4BdE8lRG%2FMVJ5nkQ7%2FpjwdYZuOmIbrgHox1o6rl9xriihKtW%2Folm1vgZwdbIptYfogm4CLlNgVRHczZ5ic2C&X-Amz-Signature=4c464ba32f2abd8ba651d807df80b96f16ad143fcc064f3ce555c5b650dbc06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=0784a911b24960876c6a290cc1c4d4ac3c91b573db11216d522f39b1e6008288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4SVON6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnN5kcE%2FRx7hCMqkl0QDDxEqW9DgzgBiPm6eKnuFcQIhAOj1Rynb%2BwNrGW%2FgvXb0o%2B2hZMWvHd1S3RIxNaxZnn4%2FKv8DCFkQABoMNjM3NDIzMTgzODA1IgylAb1np5N8VNuZDW8q3APB9uicpuRrN7oTMWkgYezZQpl7ke2flktRGhQHbYFHf41WHQDAzQag8kRNr0sNKHLmsE0Z3vRdcCJGvHB49M9q8lR%2BtO5rJWZFXg4u3r1O74%2ByW5akMZKH3dgDoDtAwXXSHqjAWLqR3QRFDnvmSXyAQORg0coNiA3dQQRMDZpAqIvXDm1tjGGxjSjw0x7xpqSFSMaUV2KaJeGzj78Vr9gpxl%2BcjQS6eG0k1SRi4onFxVVmyxxbDyddHK6gT%2FNnzyFU9yrIpE1VZiooiFL%2FntADkEi0jEHfxSV90Zb9p7cpcZ9PTpdYPQfgtaAhSTW44qGD2MNQlOMm8G1ZF92EY7gBSm5ndnWlnz4%2FT88XYi%2BHsdiJ%2BFHcnCGBWZv%2FdKdvpcilGK6JyLvknYE2GxQWi9upzpinYQEox1srqJi3OEn6KFE5bmvgluCVnB31fYqiLJbYExRizgno1zr3t9ZL6EL5vZ%2FY5iomHgLaAFxcIR%2BvBQjLq5V5BWX6FB3bHzy%2BAjfYtSQe1MhB8aWI5SO%2FanlXpW0nLKoJPKXfzgVpBk1idNTr46wNBawMoKZocqiCgqfX8YmVUwTC0fuyWKeMgtR04bWQnvZEw3MVWM9DrafmNZNqCnlBwol9xwXdajCCy4LKBjqkARiiuuwZ0ayJra0%2FB5vEJlqgtU55VoxofA9gINB3XD%2F4rtvGKl8hi06C0aAeHyV9UzGtHw1OSySliAQObIYE2BY347e%2BouFhtTwzbFzTZQZDXJdjB4Ajc9rkWpFDgISt2Y3U50OQk%2FzHi2iYfvXDihomtbr3bmWopGUCVYAILKMa9xsDx5R9O61jL6lHaFJiT65p2fzhEm7OXsNxkiM5ymkR9ujh&X-Amz-Signature=ed68d170d516ec0c2231ce803472edafa20b01db7504dfc2b430462594506084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=61b695af5b5cd4b651b4f439ce28d6220e7c1b827ec58234064dea49e1fafcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOZ52AK2%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6lahOfrwmEngSSdWywmav13emLz%2Bq6Rvg4EFo9KLmdAiEAs6KTyKMgKg3nCmM%2FLiCvMJ0wYzdKpJA1bw%2BvRCXz5gQq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDKdVOV%2FOP38mbCCwCircA6iMpMIKjWJadV4AvSzO9SW0L3Mo3ECC2oP1H3ctwlGaclyyzYrGFa%2FI482iKZuDhKzzf%2FQIOsIz4KpbyunE6hy6Ak0jmMWdw0vShRWymaRVpCMkQhf%2F0pkzSoIiPlb8gR9DwLfJtPbJF0tG5aWy1tIzLwVHefRareP2ndmNgiKHWhgw6G9ifmGzlgqmzb1WdsL%2FlGFBzbCEQPkwnBe6Ni3AlGwTvETU3sTywC8%2FPGVxhHa8LPtdOhdt47%2FEfuT%2BU86QFtBfCI5u0nh1U6%2FOlX%2B1kgTQgeE38icGabpLW3WZ8WbYf9%2FM%2BUJmxsY0FHiWzSwpmGgYKYNsfujdWr%2BM%2F28IhyW%2BOa4YFRxg99IyLwUqPfaJti5GOiKkxPlVTFgLDsa2%2Fq46dPk9LnVx7qW0G%2FAKpnftonKZMZnV9tZ2RSNq31ARhrhrMdpD7ZSrNRhBCaSdY8BZ%2F79jGjJX%2BWTz%2B8oWyH57cFzQQWx8f0KqztfW8WOIi8q2MXgfDV2KCGblKbNh1xJw1UN6nCm2%2BiX9%2FKsmM137fs8QRbsTU7WBB8%2B8TKeXr3%2BM0bOvCn0R2%2FnKNrY7xkYNJgTxVz0plqcsoNrVziV2sbdGmvuino9VdnLtlPuP2ONqiGOrMXWYMOfKgsoGOqUBnAIiUe7ABIwknLw8ioqJbnomgveboPRrsMdrUVPZcOGRJ7UNtQIThgJScpCxcn0gYqwxsZJqyM5XZBjBe0A0rq688GN4XTu3MmD3MIjEOR3%2Fnr4u5zDQav0wTSU%2Fe3YBfbhHQSWTTTWVjS6pxnK7QBDFsTTfSwvhx9jK6HLOy5rE1AAGHLG2FyygZm16MdaYVJsdp1C%2BjVbkIPfnYe7h6%2FW2jxOB&X-Amz-Signature=f0d772478175b07e5c42add73120451b2ce78e4f0ef6a9c737657cdb29c3dc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=0cfd0a32cbeb6d993c7363482fa4693b08fb5c4cb475b3b311c957fb233d0042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFL2I7EU%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDL0dlkULL8sR2648rts%2Fs8sLyazM1sE9T5SPK19d3hAIgOveZ0SLtaz4C4wAQPCd4PdLH%2BmKexegdX4OXOoF2y3gq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDBu6kdnIltKeqPRl5SrcAw%2BiJqSHCMYD7tIizDphN2CXR0ahYPgG2DvkDSzGblnfyHi17fYBrgQA9ahi%2BjYvDDtB5OeUBHQCaNs6oQ6%2BSs4VWEdKChMF5NTG0y6mNaQBmXC0Rj00XsuV%2F3rghH%2Fi7jQwylWSiyAAFLWVPdoEBBTprb%2FP54oIk9QopC%2BLVKgQ2K8fLmu63Zj%2BCL77m1SeGkfCRPYeMUXjEvlGCMbJ2ph1s9t%2BIgERpvssp3gnNbn5qHuPMS2OEoWqYb7r4i%2BcKK6NX0uNPRvwdF2mUwL2uKITVdedt%2FdJotVIA2VicPpexXD7g1KB%2F3O6ioJWQcGSedCe0W7rLQT3nta070M7z%2F4BCbGGnLYGnPOP1dGI2Kb%2FnJMBOsEYyDSy5npGcVyFfvehFlAd8FDqsHo%2FxOzApp5rYunQgwD53ePuHlrYd%2FQJrKvFZCfmHBcZ%2BDrcRBZzeLK7ZEZ6yK6OTis90f8oAyO925ZP33QDd5%2BOLYqPdzc2c8XGOW%2B6EjRem%2F212jxl8Y0hX3WsUl2lhoU%2Bee%2F6WMcMbQhYJMS6HXlv8Le8VaBzLuJZnXChLmPtGB9v32IHBxHFVZdDNkLPrgk4DCJwtVn27ACfd50XQwk00bCMna1P5Rv5wLaRY6%2BX3VdWMI3LgsoGOqUBZHxocLRdxmESNBtrEjAf55U6rqpbVqfTeFVb2XGyuIJxVoBTdvzTu%2BkeaNwlu2durvBZr0lNzK%2FPrUy8D95CyCj9uVA0H3ljtTFbdEuREyfap%2BJkaO7T1xQASbxCbdOj23hp6XkQM1E%2BkRaktZh37JfuRYDoqU6iCFEofo1BLQdIdQ6CTxDvwgSD9XiHwRZ1r2XQu248bxrbcEmt1pHfzzI%2FlA5t&X-Amz-Signature=a8e9b65fcc31cd13f9c31d041bf1cc4a72154b3f68616c34886d8105d5d9be76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=14b79859100906f5918f8aeb43f272f960c137141baf0916938f497e95b9dc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBKMBU7Y%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4YI8yz6%2Bw4RsckUjskQD2X82jLiROZyGVgvZ9YFScsAiEA5r3%2B80FSP06S25Z8MgvZI%2FiSIa2j2RSdK%2FP%2BRvSbr88q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDM1dsPATpNw09jPrpircAxxqipxWTQbxtPogb7YmlnC8NoW%2BwaL%2FH8MQ4Q44QuqqDdr0l%2Bgoc5CMph4LVkRcvUU8hFBNQmvIf%2FTJ9%2BK0rpGQ%2FpXqUn8vYiSgLfwCC9G9XieGYwt4G5IWctW4FRCWnTrgKPp7TTFc6dQtSnHekLfz2cVoP1a6Hda2zJRdBCWUvHtcOifwoQYE6vBJL3DrY9YnaTzVx0ghFQ%2FUq8mcP7eU8Fm6w7jCvYyuyy1CBCzu%2FiHuQpU0ij%2BH%2BfeRCqqJ9vEjJrrYPJFnJEKoKy859cw6LscYoQFAAdbfAVQMVP0a%2F6ReqDIz8AVBsB5DHvmgcEUNhV5XAFlO%2B7adsn7D9QTMOqw03tyf2aU9UZR0z8Wdolswo42R4KLcxMZkEttd2I6HAaL6XwOclirbOzLRnnrODMgQo35S0Dbh31RTCBEoxOF52vGNJb1w05rPbr62q9yILC9gm3YlJBz02DBN7vcPIt9ryqcvSVal1Zf5QiJxEHOYBK7kj43%2FxHTBOV8oXwSgFltf7ZHLQu3QrJiTKmokiJ0N9db2TBUmJNtoFqEtGmzQeKfv6ByDLEjVTVpp7bvIQZ2wcbDvrlOzqHlDswVT6JuZ4F%2B0A0ngItv0A5RydsQIvDfcxg%2Bcr8yNMP7KgsoGOqUBnDKk0Xni3MuCvh6ztdh9jJS8cPag7DyejnkzV9pinGRgaFKm1Ms%2BZb5nfkLw8Th14jQ5SKooVkfgSFqOgUMr4lQlEyWQcJEb2%2BvKI2k%2FUQ%2FQiUuvGsYs0g%2BSa13XQqH78gtBSQx7gIUJqNVV2G6AjHcnrqWzsbkMIw9hzjBm%2FPkCI1GZdX1Pz%2FRaK4atLskxEQNnWv2VgIU4tQ61r4VlnTjh%2BPMy&X-Amz-Signature=e37b796c050eabeab284232858cb7cb5b6e0da623806fe073d4a763c37ad7adf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=a81b74fd629eeb8a5583e87240ea149317fcc4de6d48a25a91de1adf33110ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3OUM4UT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSyENAei%2BzYULVeu7lhBZL0k4hixq8q2MU9IZpG74nKAiEA%2Bn%2FtpQX2NkzN0T7iFnCl0a%2Bc02vpMkCAsZ3CgHoOyX8q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDI6qv5N81tKNhxf1LSrcA%2BHHEIeK6MreeUcsUVMrbOvvHMekeu0RNvziB0h%2BZ2CGpQvSK9MhA7Qmz7vUk4bysWbsyTA1fe8DAgCjQGvO7YfPAuhrYE%2BN82hYdjoYazj5tDznBA2P87Dox%2Fqa0blGGvhmwKxXdUGAe0HeorMJf933CIczwsR%2B81a%2BPRjiwIP8urix5hwieO3W7npU5HhVr0cZ50uWVpQNFCQYsef%2BAe6JopujJGv21%2FFXSHKVSptO6YcMzvqi%2F2vFKJp5PBvn%2F0E9RZoulxpvqEIEnXzjeTHJjbscIYfGBWYMCFMnXkNlquw47VyCkTqcZ5CVduQ8gejk%2FoZtNmYjzUgWxUsTym9eMFDhobryE7eh1uTfu5hUSDsg4EXbDnqZdQufDCCytLrJCLhTYNvV9iR7gLVi3flTyZi7OhLymBeDMKPg%2B8IZ3MfMXbwWfo%2BCnQCYZrQR3qfuYNhtYvWmP%2FjygEH1kLOUNMVaRP0%2F63O8ZUHXdJB7fQ9BR8pNphgB0dMgMXcLeODdHhJ62PrfO%2BSNR6YmKMcP7kiuXN5QaZj7p7CJZQ5Gbe%2Fd0Y9%2B%2BP%2BXkTpMNNwT%2BlXxxvBFXDpFO7VNQ1gffrb4tkrbIcVDbncX4GcpWt6Th4ueBkjtKqzWgh5tMPLKgsoGOqUBrpgjTDUbTo62cro1Dyezi7ja0ete6oX3eueBjgzkjBLOvCSQRRJHq9xHaCRJPVsa4sq0MuHIcdvmYrvYSbLzGWLXQHIrSevVwye0SnnMquMkE29%2FTpERQ1DDdFOslni8B89wuSDhDwCVRPcO9FkX2fD3RjjGT4M7e12z8dnlYxt1C0WCbIwfIt28QCF89i49IZ5%2FbSvXQZFEzJP0P9o0oN4AFk1L&X-Amz-Signature=01adabb4a66cf6f29ba1a9c74191de9b570ad798c13c16f5e79cf3ae59fc2577&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HTGAYM6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmQs%2B27%2FYpBIG7uyCheabMTZFUW3R289Ub0BCqD0tvZAIhAIfXqGvDKTRVi0%2F81EmJWAjz1LAvsetmu7Yx%2BVV2dQ3cKv8DCFkQABoMNjM3NDIzMTgzODA1IgyBmaDQ9es2b%2BZt4Nsq3APry3WpHIzcv8Djep97Iiu%2B%2BtgHziWG4YPz5NovfDHWrmeQDs3lQjf5ooF88K24R7iLxiLJnbjroDPm%2BAbcbVTg%2F95kM38FLwBX6oYy%2BveqkAo%2FhiXXnHZEyz0gITVo0CdNTK2m1ji7MJiBYkdYrTY3uPdGVhGUQEZ05OT1we5lJDd5jHaNU46J4gFmAr8DgYHel6lOcbZSXjCq0XzvN%2FYa17jlhSwFF46hiHGdyWkTUrRACPn6%2F%2FyKuwZoNsHmdQDDHrHV6oFW0BRYPR1ks%2B4LHKG0gs6sqk%2FsQjpC44k1O3ZMniA9Fj6sLYHnSY8GHVP0Mv5yVaFwydakfoiZU8rzCIeI6kT4nyS3mcjDUZ05V8pzJRkH6ZQmQvz2vDbTRAc62ytpc%2FA5cgOgBIT68ZESGDxZfWnlt6CljoMHXuQm%2FZYPC6OyTz6qOaFC%2BdIz7DCe9%2F7qkOAcxXkDjSZWs9rSekcof6pUoPmJ6%2BTFMW1xMkHbek2MLY%2BgEBYGO6m4xlO%2B%2BPzsUyO0LGrnXO8%2BXCbCpYoo0mx9n9Lha%2FCvt%2FdWLI8Rnvu8bpUi%2Fsgw3wgnwwbjXzi%2FYfXzgPwPMiaqkCqBTsBZPd7vSsHDfSilCRFLJDZHRwQwidl2DNtw1TCKy4LKBjqkAcG1MkLYu8jbnDUCqc%2B%2F0d4PQsQfcl6GZuFcsFJjHx8Wkg4P2C1s7yiLVUYGP1JlJx3UKQ7OfcyC30M9lVAblOGjEiNTXQLLsOUgPFTf6e9Q33DV5rYkZ1lomJg2IWsE828BmqSqhRyS4J1RT0RP7i9DDt9TtLaW6jv1oEjhjHqQGhbC5We9FI1%2BaGaja2du0YJDzu83SdDwxQq%2FaaxdhoquF%2Fmo&X-Amz-Signature=6df2f340c24281b1ca2d65baf15bdb452112dfe694f2592c8b49555dfb9f9bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JK6DLZW%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM1jTcEbnrXiUcj27zbcCXd%2F08yCLYa%2FfopuzH%2FsfwfAIhAPHT2waF%2FtIMJAze7lUvXKyWw6Jxgx6vlPuvkOYowdQlKv8DCFkQABoMNjM3NDIzMTgzODA1IgzILDmad2r9tOEgRz4q3APrOlcB51YY2EnX7kWINoJkNks1APggmKl4KetMvEzaZqsupfjQmFJjUvILUUxCokF3RKbPY8Ibge%2Fz0r7ewsWYl9XN6pmJ%2Fcfe4Q7ThqzMvFDeV39853MG%2FL1bbmHwoCAVbi%2F0%2BjvX0Co2et64Chf2GhO6ztdKM144s9lX0wmsNNYmhBkzVg4zowUqQ2ki9rxg%2Bf4QYPcXICH9MbCyGwUCoykAolz%2FUPVS4WyOfrynqTldgBgNMF2xTD8n1jTEhXl%2Bjken%2F8JVjOIk57HGzy96RzSBuCjQbXCSNHSGpq5sbldqZmwkRNNuMzsWuXd09ClSjSpDuCTRwIjcQj91Gwor%2FSIX4CyYMq691xqrNR2XzDu0CwBmt9Yn%2FmM3UKHqHntUkf%2BgSX8V5dUpZILNJ30B01QLu4ggsAWruWhKWKfIIExktwIFIfh0VqlgyN1N7zrNYFnOnPLhPrkGDai2SSL8Q7byZfbKI7wMMS%2F4ZJSHqMe1%2BaJj4bm176CmdGinBfiavAjzq32aZgxxZOLkALjSxjE2pX3iuslv2ecOxghRFFdyGjF0Q6OyRRQkruN9LcP8TSGGgxTHTfLvV8u0SwAZ6vwEBvH3pJvN4yZ4819eKCDGOBaxjdw07dS1nDCay4LKBjqkAcqiAQ1jvQjzd1ZzRTMZeW5JfmvvvVOHUImymHkLexJU8Sq1dXaQESo9%2FCt7Yx2H2%2BZR%2FYlMbZx7%2BVnI2zsLLwl9ZEjdprmohX64b3TF8a7DyKJHFxn2zUj%2FNfMg21t0H4wHWsQt3ZmyDpEPg8W8DBAH3b74n8gqHmaAVNbdSaVpxrEB%2BiYycoNdgcBCqXVYn7U3U0k6U5RnjDCEfwBJHUuUvuFR&X-Amz-Signature=4a55cc8ef27831df3ee32638df7e08ffb4986cd6bf0a8af45744c3abddc9b962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=330ab13003e4c2e7e64b1c85c7287619d32c6560cf47d7e975c2661e4bdb7660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFY7JOT%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BaHTAF9%2FR9EBzsOtqLIei7DtKpiVMY%2BXFEqO4Ut%2Bi7gIgdtmITP2oy2MnZPHcm5dCfA4sYazepVX%2BOdb5a0JXiYAq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDNUrUDJ%2BawUB55UWGyrcAzGGrgdEedfsLqesx0%2FzGcDvNc01L9TL2XHoCgPyMwacnUNufxCKqKRUkMFBOdNt5DqYqZODUkSYdoEDGGcD4y65fCq2ZkPAYEOHyzHdCqZBGpDe8BSnxLyGQiiqmqzRbVPr%2BaBUNqiGZ2NahAkhouG4bS8KFmdMRAPJotRcRMrSaSrHAgrAKJ%2FC%2B0%2BHMlfcLo47y5FAfwUvePHGJmnxcrPvVSS9dWB2DR%2FYnD5dQIThYrOrGesoOT62QhIVF%2Ff9er5aeiyzUVOBlSPld0h8y9w%2BSj1ofcUpJRHbGWjNxC7pYghz8FKp6BbOtlvIQBRRgLuhzxxHCFYhTS4%2FWPK8l4LdbN5JQJ25YQXPbCu4PvAiwcjPHuJq71yo%2FRngQ7BNlZv1fIZrvaSY2DJlyZHM0azwS%2FoF2MFmFD53tsQCcyQBHDw5f2Xb9t%2B%2BK%2Bok%2Blyn30kyW9eWkjlCnxmsA4Zes8dkpMtbwBH7gM%2FFLBkQzmBz%2BbIqKmodAN%2BElF2btSoLNsn3XPVdcALc4S6bL3GjXhujJc5P8%2BZIc2v62qcfiNUQUppI9U8zIY6WBbP5Y%2FP3P37nx2cUah3jQG66Ll12TiEn8tv%2BYQyhgzCNu8sLdccJk0m%2Fj8pnQAJaqmXMMPnJgsoGOqUBhQsVTxBLtMubzDEyIpL8HLVt25r1xHBDROS3RlMBDXlvkAu9CLQlshf0ii9%2FEORakhkmUye6wwy%2B11hyZFXBoFEZNpaO5xVzeYaQIwG2d6r3%2FzkghD7pll1rkOjN5B3ZFs%2Bev3paiLZV%2FLlHyXqdA2l6T9%2B9JqNgGwv3vGS%2FYeOXmsQ%2Ba0vaQmxhTNHg7EE7U5T6Usby2vpqPd%2FxFiMGpqqBrMoZ&X-Amz-Signature=0bcca5aa7fa0ccb6fc7d2d9eaea0b8071d576851203e518f79f5530a78c102d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=f7e7c89bbf3005353c1e7ef361fcff22f0ed3786b0c2c4954e77abae9e05c7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=fb8b159b105d47d9e39f40ba4d042ee8b056baab683e9ce19e89998c2f76abd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell "1-1"
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=c8565b7d3eaa9a640e8d357f2acc8a94c3e5d692ac40e1051ddc30b333915754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=ca5fc4118ee2a60c02e2a7c601f890a2c02bb9088e68781d937c10cda688eb99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}No window appeared in Dev container?{{< /markdownify >}}</summary>
  
If you are running Dev container and no windows pop up

just rebuild the container:

to rebuild press `ctrl+shift+P` and type **rebuild**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c2be660-2618-4c38-9c26-53554f7a0b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ4SVON6%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUmnN5kcE%2FRx7hCMqkl0QDDxEqW9DgzgBiPm6eKnuFcQIhAOj1Rynb%2BwNrGW%2FgvXb0o%2B2hZMWvHd1S3RIxNaxZnn4%2FKv8DCFkQABoMNjM3NDIzMTgzODA1IgylAb1np5N8VNuZDW8q3APB9uicpuRrN7oTMWkgYezZQpl7ke2flktRGhQHbYFHf41WHQDAzQag8kRNr0sNKHLmsE0Z3vRdcCJGvHB49M9q8lR%2BtO5rJWZFXg4u3r1O74%2ByW5akMZKH3dgDoDtAwXXSHqjAWLqR3QRFDnvmSXyAQORg0coNiA3dQQRMDZpAqIvXDm1tjGGxjSjw0x7xpqSFSMaUV2KaJeGzj78Vr9gpxl%2BcjQS6eG0k1SRi4onFxVVmyxxbDyddHK6gT%2FNnzyFU9yrIpE1VZiooiFL%2FntADkEi0jEHfxSV90Zb9p7cpcZ9PTpdYPQfgtaAhSTW44qGD2MNQlOMm8G1ZF92EY7gBSm5ndnWlnz4%2FT88XYi%2BHsdiJ%2BFHcnCGBWZv%2FdKdvpcilGK6JyLvknYE2GxQWi9upzpinYQEox1srqJi3OEn6KFE5bmvgluCVnB31fYqiLJbYExRizgno1zr3t9ZL6EL5vZ%2FY5iomHgLaAFxcIR%2BvBQjLq5V5BWX6FB3bHzy%2BAjfYtSQe1MhB8aWI5SO%2FanlXpW0nLKoJPKXfzgVpBk1idNTr46wNBawMoKZocqiCgqfX8YmVUwTC0fuyWKeMgtR04bWQnvZEw3MVWM9DrafmNZNqCnlBwol9xwXdajCCy4LKBjqkARiiuuwZ0ayJra0%2FB5vEJlqgtU55VoxofA9gINB3XD%2F4rtvGKl8hi06C0aAeHyV9UzGtHw1OSySliAQObIYE2BY347e%2BouFhtTwzbFzTZQZDXJdjB4Ajc9rkWpFDgISt2Y3U50OQk%2FzHi2iYfvXDihomtbr3bmWopGUCVYAILKMa9xsDx5R9O61jL6lHaFJiT65p2fzhEm7OXsNxkiM5ymkR9ujh&X-Amz-Signature=40276d193781ac42fca06a4e0274fc2d29e62721e145130bd72cd0f487d8c58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=2a9780474fdd03e31ea92137f89acac46ea61a231103a83f99650031cefa03a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=010f8a3728d6ff980b99fb283aa9db7b8b66443c7bbd6203ee84d1badb9c33f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=c8565b7d3eaa9a640e8d357f2acc8a94c3e5d692ac40e1051ddc30b333915754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=4b84852f130f333f0d16f5e71e20a1e5ee1585747626050a5c3c7cae5348534f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=639ac7686b6fab6118e4a0b4eb5c3365a4ebd6a9530d037c490301f8801a15a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FCEXRGI%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeoQR%2BB7UgrUk2ceEeEQM5p5l4Ccqht4LIocxTWSuKQAIhAJlp9%2F%2B8a%2FDYFfzkH2qv88XxZO5a5sMP9VMg4ftwAR7aKv8DCFkQABoMNjM3NDIzMTgzODA1IgzD40Xxm7XvV4KyvYMq3APuAJ2ZqB4TjtEFx%2FujL5XfgrYe4A9nQplyxlI9%2F7ZWGy9sx5u0nEUCZqBJlOBGQ7fEdmwRGU7BASJVHvHr0ugzgj7iU3uTa%2B%2Fw63ZfFblEc74dkMz6Cc568sdYVb%2F%2ByUWoIcgja7DEAPApt%2BsXxmwNo06so5N3aaXtjeamCDKoHTiMMxUQOkprtTMQV%2FTBs3V6NyzJIqa7WhifhlUh8PbEkB1i2VqK44Pe55kNpO4qiJaAukMZo%2FS5l6NI3Bmqt%2Br3SGrOiP%2Fz2kn0dZ35Q%2BBqpxvyFK9WSL%2Fyed%2F8fr6x5gPQu1Tu2iEAOFpyq0BdN1LHuj47wj0JY8eeadch9ceGs1k5HMBouzQAMR9nZZ4ASe0jmO0ZqL4fUMgKTwnGTr5C5nSAkK9RdVhfh5A9C%2F5ktNzFdZfOoQilLZCjU9CgUFnIjw430YtyyFs2EwbRD5R7frSfWi7lSTrLgCmCd%2B%2Ftf9GoY%2Bxv6gAKEH%2F4m1EoBvc%2FDK2T4H8UDmHYPnqeoU1Br9ymJ%2FZ2yFkQnXSCXjo%2Bpr7qMYmeD%2F6wv%2Bo70Jy2Rj7a27LA%2F2RkIZG26e%2FCETz5afjU76hW7UsDVAUokmEcn67XVhES3DW55Wn0r%2BBntqslCLF0A%2FuxDaWPgTCkyoLKBjqkATx7koUmKxhhLRrN9XNJxTx5cLL9IDx%2FHPG%2Ffs74ee%2B5RlOspKr4Hlddqum4hGNDjv3Voca1fryHQUhjCN23WMSksPB349chtQfELmVT%2BALAz4nYw2ZRZjEc1alFm%2F8WzbcOmx%2B3Ei8HAwMeGt%2For1HJoadQK183B5qHveeSeRsiTrV%2FKoya0%2F2IG5lHUrl0306JMmaUtJqsz%2F0qKDQJzrHCcDwJ&X-Amz-Signature=1753ec91c29888bf7ce1cf8db0edaf1ada8c11c06babed70a3a1eb122964c257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
TODO:

</details>


