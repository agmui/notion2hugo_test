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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=0009984ea28dd76cb89904bac75ad53ad184646c76e5f4b577a8c2761b4f9d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=03788aa7a00be7f33e8c044bc05c47694a7169e41af61b3ebcf4e1e61162f836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=535d95e8575a6f61f173c6ad4d62d9b093e43a1cecce02e4c2337ba1b0941b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=edeef850fd22e9c99c053033ce77bc1696d9470e18e4d6206750ccea71ae22a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=b788ebac15ec783b09067e22c3751f1ad80f458d787cfabae2d5b8d122f9c264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=292a7efb2d6e105f4d0e916896c2e84f8540396bc4360bfe5c5644b3f281b1cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=2f8d77973baf78ee87767dba95cc6c670c8497464f1dca9f1171bc9fc7dac963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=39eb1631b5c9092670117c7618f4734ebd3950ca6611ff2ea03dc8ca9c3ded84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=4131dbdc92cf34d9e365edf1bca62214af0def61d32db85d702b3fe74d2f4383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=5383ef7d4da91fd2a84e5bb70af6cffb8933c89aedc7e8176fc3eeab54881e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOLUSLGY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIF%2B9jBcZCZrbdtruK5HAkpO9Q4hCaO0%2Bh2ex478bBjY%2FAiEA%2FQQTny9ALHRBmoOOvzGwcsXP2DLzMlIEDhR04JPbgPwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOh181e%2FJpZUf%2Fre8SrcA%2Bnjo0ChHzC1rUG5g67wYCVD3t8CXOy1HfbMMfRX%2BErskn%2B9zaQ6%2FqsquYmJuKfEWVD9koWhDJL%2BVM08bseorsZhxSjgD%2Bw8gQv80l7i3Dht%2BHBoaxdl2mnHQB%2Bn9WAqwSWBuiXj9tXS66%2Fw5YdnGTShTaFWubhKjSV9UzbGDCXDivSNfe9D2rbEfwOHsl8JtgksdJz%2FF%2BJmeZ6gxOH3Nzbs8U1Y4jdTpT%2BnWlTyLbxAkVDDYYPUPRzqtxMX%2Fy0VVGG5xW4QAlTF6J4uHYI%2FwoA9JNODljGRMHLh%2BTLJGqWntRt4O4kQMlx4ZJU7QMpKA6D9xqpljkz9rDE050KOO2s4Fvx0eMaoxfT0oq2cOYmy6uTyowCnvW9SmFsbosEBrwY%2F2qALI9TYorRGwmw%2F3JzyKCgqFvU4oVRLn2LYMxnjekBDCqOuTwzXkD9FNNU2wFwhe6UhNGS8QoGMKTWxBBOIwxMnV7Fmv%2F%2BFGWd9xBic5dmtMofbuQscLEWLuAIhfLLhUse8t%2F7yDUj7dPQXMsabkrPJpnWIKwx5VkOq%2B6SgYA2YKUtrRX2Rfj7z%2F8pg2xNoNT6VHBr7yafAUkGZsqHZhAT67F8Jrz72Loz3gf2gNzxuDUoCZRIV4qgTMMzMyMQGOqUB6GTdvCR%2FBonUBb5x3U6Ew0js%2BEToWltVAnQ613dOKRqr7pjivRBGn0q70xo3nE6YQ%2BLDPfqU7TFHBbDagmwzyXoTqaaKbHfJtLBiUAGtzuQ5S%2BRi5F5FS31y2V1fWSblpO5IBXtdgSkmmWd453PHv%2FoaJcQSEEe1ryeRGfuy%2Fl%2BQqJIGD4J%2Fuv5qPIPqwcRxh%2F6s6wnAdrp%2FnG%2F%2Fqn7%2FINv3CK1E&X-Amz-Signature=746b3f34e4ea2c5920d422f705c706bc1ef714c4fe1a996c00071fcbbba2290f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X66OTRQF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCa8WoBQIpQ8lwSPAnLA0hrqMPCTXrFFaAid8CR42Z6IAIgMyLWAAkVr3gtbmqEe4RlGVWh%2Bvpil%2F5PRZCIWQtCYd8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP3yTSusLtorgrveAyrcA5fa60y2U4%2F0LfmHSRAAld6FNoHEm4N43hh4%2Fay6FeBF0yfUyC%2FGdelWgq5QtA3Y2VWYJgNs2N6gC7AEAI9mySlQFf1xb5AdzbGhXoANGXE7ofawW%2BPwf%2FeyPkq8E8IdAtoBjqB9P%2BXnn37Oq4bQkrA0Ghp91ROF26X9jUWcxfHbdOqmXuT21t9ygaXCTO5gcvjND3Y3CvIUK4s%2BxwuioiHYXqxUB5YVuYqOUlcbb%2BOpUdS5wKDLd7k3U0pxw%2FhB4B8x8ZTI5iGWKpZomRr3HH8Ak4nxbBXjICA%2FoCmgO5ZEOi1Z7a5dJ9qBuJxCwNnozr%2BD58%2BVMXn%2BzROG9uY8XCeCi9usr82Aa2qFS%2F0XqnwsmJEBcWRMjLuEoiNqZI%2FeXg9zP9A7vuWY8fZ0KJU9fjowV4wR2BMcCVj%2BdxqR71%2FFVEMBoUh%2FNjzfMW9RuMgFzIwWIutnm6cITHqB966ZTHxiJa%2FXUy5egt1NtFruru8KFZlgXqmi15ig3KJrGnLzuY90sovtPW7f5xKfp183g6lleEismAiGfF%2F%2BYeN18aerRftxSGbara%2Bg8ls9Pa7LSzquTmA4KMDoJsAuoXhNtlqRm%2F9FpHKxOszXufniHhCWWTLcPQne2ngPAR%2FxMPLMyMQGOqUBZ7SB2EYogNOysgGK6bLegsIwEIwobPq%2FGFG5R0reAF1avXDFYXAVP7MCl5KWu1c23LAHremF%2BoDrvpAfFDsUQ0IyRnRJa2wWCSsela%2FSgdO6nWg5vHQdd5NXGE4y4eP7N%2BnNro%2FIhzDR5ccFzN2TRSvw8DHi6hd2CjFmGCvqgTtbOMQkln0Vptej5aqyHmbiy1c%2FL2l0wQR5YwJDIxlGEuDHT1Fx&X-Amz-Signature=708b7a20f6856e4ea6e0687caeb0ddd5fac2747562089817b14843beac700980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBCWE5O%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD0Enye7PEz6U2C7HINo3VqAec%2Bp8bnKa6jHdYpyWoQ3QIgcL1IicdaPlKOzqKrvD2832It5%2BpGGVwrqPlGa4xo4oEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BkcwQ5HK7WNX2swyrcA2ifP4pze%2FHdx0OHtFnQhC8wG0rEdeZH6kAEsWiFtk4IEoLF8U5D2T6R%2Fawbdw6tWoTo%2F7MVb0pf%2FS06vTcGzhPWsK4sQnrVlJOp%2BVti8rKtqP4I1B0srVJgw%2BT9zSHakcbaYxtlP46pb2LRJWPRdx4aFTlpr5E%2BaWHQd%2BuJUCe%2FYVKR%2BHMxnQ0oW2IDRopaUWqwbV8dzRxtrdudGJ0xBU5OOAXfIYInG7yGIk74%2F3TjpgA6zsrzKyS9qGzUomyM4UJjjCA4go0KmUs62APgDB7dKlHO8WQDfIQJMz67xdRe%2F0Y1iuvNJnmcRg%2FISBQeKWIIR3YMBJ9rmMFzq0j152wS1lt3NCnjzKbswNARfuirED0J5yV8xGAtinieanj5rnZfQA7hRDypeQ6bAtN8uUl2xMgN7cAhUTyKo3dAtHG5Pflf%2FXchPbj01Eq%2FLS7bUsB3gQQ6omOD%2BoQcYJpfuQGEeHq%2BnqHKisu50tk3kmumfrwSL%2BjcpQEBoq%2BugfQYeNwjC5v4ReK%2F9khnZdgjHN0KOtpyBdXlOPdAFKezhzIjFrAFoHFGJnV0kh0YsPfk2Pth%2Fb%2BA775fAO1lHWDx54HdS%2Bc%2FGrZRZF6EX%2BMcSfrN0mEwnHufqgOpDdQRMJnMyMQGOqUBCXQELSqKztVJrdF8HIYaYKh6tFAz2TjFxNVaE%2BdHr0J1eK4bOUefscGZbF7TNaqkLQfuTVDc4LAW4Om6LImcyNbVNsukwkijzkfAumimKy95rGRcVJF0Gnnq%2F7JikFWfaH%2FmxHH3FjzpoAnEWck%2BWe83CPZhvH12MppjDiDNOXP9CKHV7zDbY0tykt6RAmviY9yISsJEvoO7897QcDKxOxdHJ786&X-Amz-Signature=c1455c5aea6de27c3b0eb8b17be9170dda38ce85c53bd1fa83e6f1a09e597785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=8cd9fdb44fc73d6021a1a399d83a730746963cc7732fef6827518cbcc1996157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2FIJOC3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCID%2BEoL4XUVx4BuiaZp%2FStt8CgE2L39c34LVw7qGX9%2Bg6AiEAg%2BiKAJFpenkNa5%2BMRWyueuJdDkSLLD%2BL7JA2Z72wfLQq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPcGWJkynAr5OtP6%2FSrcA998GPhoP1PoopMRiSZX7mxMiZZNxenbWKIKyXI60pcvhnFBocWL%2FlaYi8FKBEFERK6aoCnkGHou8oUHDDVQR4Cr5yIubmy6TcWEPiGIu6chP8ykrnvPj4%2ByIdxGc%2FjsIV8b82JC%2B4ujMRsuweNMvHIX5f4yiHNgiHUgDriDHNnBFRzL8gKuusXs9klO0fucCQvQmqeQcJ63%2FQUoba7KLGYxZr082jnexUO6bX6sJqeIp3e4bDiO5HfJSKM4VPuUVCqo15Ee3Uaz8Buizirkkd5ANq5j%2FxPty9XQ6TaGFoeDWYhfxD2yg2j7x7MlDzvL7euMD4yQ5vjYoVxaePMoKGrA90SyMvUHrLSXKPZm9Sd1Fc5qhI0AGGl%2F%2FvhZfpr15pFvv5NXQGuxncv%2F9jITgpxTj62E98BnKznvPJrt%2FEjXHxWh%2Bsu568jqm4DMuKo41LhGvdgXOsRkAKwKWCgcLbvEI8zR5Z8o1qk873ddYoc8vnFSDcFOcUNcJelUE8izlEnCB4U4ytnnPACSp09VdkAHXV%2F%2B2qDFbFlfNiXduQbJDBtxr3cwr8cmWyi5dcjBDCwdJnG0kj6nrqLAZwmKnVFm6crBjjmtlk%2FdY6LIBj%2BKivNS1M0Rbsp3IkNaMKbNyMQGOqUB5QJd%2Bkui%2FOjq0vO7rh0oYt9YMJ1SOaE0u%2FlbVQx7iI85ED9Idwjvk3RXHz%2Fqwy%2Ft2esUpJrKkKMGtzwYiHAQ9AEdNmrtQSX1vskGVYKzyNi6KoS2aH2wXEFC9OEfcRpFnOxaMvIwCs5iNTeFhVLM5Zv%2FB7xAML%2FJnWgWSHdzUPL953Q3FHnLqcIHek1a5SSoWrtZI8wVqeKePLU06ucLBe0PNbXM&X-Amz-Signature=7a196c1c210c35355c86d04da5155d2ae1f70b08f1a590e1c2ca97ae72e453da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=f7fbb9632f9bb1cebd6f98113be6c1f561223040dd64453a9950ff00e2731825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB2HEFWZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCOfo1bjjguQqaA4qPIaiND6vqNesjZxBEKHgS5Zo2%2B7QIhAJwuiCCWu5AAYmIirN8m683c%2Bp9ZQSfCX3NYalYaWWtQKv8DCGEQABoMNjM3NDIzMTgzODA1IgykdR1jhugovq%2FsM6Yq3AOa0W9JmqlKxkEunF2YAlUKWjNX7ZmpX2oYhcCmkTcU9XTPU8KOZTQEh5nPIXr%2FUiFmsS03uxAx%2F4dW1v5ATP%2B0PluDj2O2E9m0nhr9%2FAgJ8RB5TrsSoL69sp1V9AUW1WDXgUuJUcqclw6ZKg0Kjk2ufkdz2ITaobdlHLfpLN3prtIBV20uhsMP0qzePsptJ%2BP%2BGpVjsHsFRuNKk7VR%2FB3Ani%2F0GX7I%2BXd%2BnTwgPsI2a6tUkBzoLt0oqkRpL4QWHBAgc%2FrbilHyFLapGRU8oSi4jtbk%2FVYf5AFtQPXysJG0ToSn%2Fm8tsUNldqaJoFxisAQiOJMhEFt3OnoxYCe6%2BcUBIncSDZdgpi9MHTM3oANwPQ1mhuFca8d%2Fo%2FXYUDmW7Q4Eo6TaMMDN6mWD8hy%2B%2BemTPNOBfSD4TQuewYwepsxoDnzyB6eIkpMVJ7eV1itAvdhb1gXFmtWEHKecVbdIe35QmShxY%2F%2FuDAOLG0M3Mefq6pfPGHIUVUyGBllN4ZLY98W2yg9Fzirj6LCkjOXsSQWU1wTfRSW4ukLhZiJ%2BsJ2%2FHuKwDAE3H8tIiL5QpJgIWH0zibg65jE9pDFZdaWdxmfcjK17rHrVuy3GyTyG1IeEEtcsfylk5HW72t%2B0ajDczMjEBjqkAZRL0bcreP5YtXJw0nK8L%2FCQ0glF4CIGUdhlYhz57%2Fa69NQSB5Fq1PlY3e4q%2FlfLWMnsZa7e5pVVFcatYzjQyA1dlFPDcFZJNzQK8PQck3qxqlsA9Dc8d8YjHNEljLS%2F4R7k6RVXOKQAsXc0UFJOucfAKmhv6PCfo0dnHUhoWEMSBXdud5ODawlUuAgaJOe1ti5CfCow%2Fq2fmT2AXQNKwkKEE0Xp&X-Amz-Signature=8690c3c5278370d8f2ff4c613f73f06f91f5cb156c67dc03c0729c803c6208ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=8b229ac93cedd179428260504691dde58ac69550c103f42f55cae01db2b771fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3NC3CB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCtoU8uZUHUP7AqmfLK3FTwX8FJyHu%2F%2FXKbp%2BU58EuV%2BAIhAL8p%2F9cZ1MWXQfO1ND1Ek6T1dja3FS6QR%2FFI52dFbO4pKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FPBC75WJZdB8znkq3ANjiveTog2hVeFrJJ0iOI2787gO1rMT%2FxAx15khXYEK9154eSgEUyD8Nxv7vjx%2Foexlc%2FCCGmooKrqJrKj7cW1TgYjCq5L6AreTmZIrmYPPZgFuleseI9MUl833Jtd6ntL35wY3uNkGHQmeiIjoLxUWTENaAeAokHHK%2FWx6qd8hpFf39La%2BNG3ZOh7b3nJx7sX1F3vuGA%2FM2stMKNxNqA8WYlNDMRV%2BB5li6de7o99lEnjD5Q0pfhHlAW6M9TEN%2BI0KWQ7bzYzTwWNzqesvImTmvpB6vP69v%2FBBP3Db%2FxOhhzeSiY%2F3UTOY8QF1F%2FrfunfSBXMUQt6c9CM5ZMeK3ForI4cZSaILcRwhuDPq4RIYUCCW8hLaw7JR2LOrqefwYYnk8hX%2BPKiTat%2B%2FZeOIPMCVobcQ8jaE9Fi9Qne5Fh4Sl%2FhU%2FfgckpyVAImJrNLwu4YFtOxNclriUFBK2vYbKtt%2FvDzokTO2Uj1PiUChO84SBBM23HC34r6QDcFAI39Dk9taahYFhdgN6canxIvmslKcnPA90%2FLcq%2FD%2BsCFG%2FNBxC8WKsayjRWxaBE62VCq2eSaWUsDLxAPsonvi0JWoBM67MPgJ9VluwRJI0qhtZBeUoCykQPbNu%2Bmj6Cv%2FYDDqzMjEBjqkARh65Q1NGW5W5kHQv47bGApzJUUovh8fZj6OBrxLdap4faRax6PCwhpWfHMPZXJOGUc6VGEP%2FxOu6u1piL2VxMmfqMiwZ40eziBlbk69SnaGjZTOrCb%2FF5MnY10XHpwHNExiEjeZw2A7eGR1wx6nkTwEd%2BZ4qkXg6goPO3nQKeAmI0dGBgVuxYZ3qyJXpo1qhSHSrjR2tIxJjogIP96vWSWTT8OD&X-Amz-Signature=ca1f746ef396c494f5bcbc0f50f87d034dfb34d92dfafaf3a7aa73215aaad7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=1b0adb294c8a277cdfef6fc35402a454d4972061998d897daba69e4540fb1999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSZN7A5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICpuJVZ8l7lbOM1SgeEEkW07GvurwPjzZQ5L4HIQBUlrAiEArC8aAWSvdCd9nSXvRZ6w7QqmGudnL7cbRN1q7zvWImMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP4V1OxgdvdyjfJ%2BlSrcA4mhsk8enKWpia%2BVIJAl9thZu6DVNtEk7EWsjee8C6scR221wmYMFa10%2BFiavJRcJPSzSpf%2BBlZuwVDGXjHusNdO%2F4fet%2FbmhjBXhl24uapddFbTsMeVUAmfUuaUE8M%2FGlGgkWyBZvHby%2FRbLVOP7RmlbI%2Bin1iohef9kTVkQl6T9Q%2FCFB0xTUAEdG8UOURcM9bTfCqxS9Ml0sPZySkViBqlhrU%2FPCFtzjDDWiLZM%2FHDEyFCi52TA77M%2FlvyWlz1OO47vqZoNV0cAaJhokjbAwTS1u6cZwnX2urQFWhKRXCbA6sSxGNkUxK9Yrd03hTuJAVUhbFGPCIyfncIXZHFObHh8HgAQswcPDhfWr4%2FGe5nGrRo5FIXeQeKevsAMUIg%2FGB6SntalhFY2RPmV9%2FQRSXUkcAcAr2WetwpQY8EK2hOJdFjBpjrCaIzEg%2B1HwTWQ2LCa9FyHMWGTJ1%2BpQRMIGqV7jDKORLK3j3a85Yrzp05mTVAsRENHQXwCLaqZr%2FjAWxkauHwH8T6AbtWu18HSpdYF6T5lhP5h7hAQde%2F%2Fgr4YmZnKDBy7yGeJVGOQXH6K2tZGs1udXKm49JoR3HX8QE8RusCQnUMvrQ%2FSw25l6rYkxmy1dvNRjtCYf8rMJ7MyMQGOqUB0XXMU5StyltTOueTYvcSQ%2FBANFj9RCMB9tHxNUABezsoXS3Yd8zZV%2FvsX1v%2FQHnoPzvKcP6jFJBYV0jcthX%2B9bcfq0Nul9TtUOBmmvkrBy5kuYBmtPAh26qmJqGpxQa56dJkVAVNKIjIV2jOgP5kWTo2EJTCbIS%2Bs7H3ZB4u3jAdvBp5P3sBJOLZdzwjkvkWRPncQifPnkdQrEI0u%2B5gWoc%2FhnGl&X-Amz-Signature=8740c18e958cff830337bbca8553c2f342f506195b1eb5072cfe06043a80fbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHXJJSGC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGH5WeIEiA4mNnvkvKX5LC2QWMYFSSG1D%2BTG3dpLtNKbAiBv4lMK6mRu%2BxaTNTZxvK66FCNm42b9FcqyWnvtVW0Rhyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMXM5PlpvVrVSkOl59KtwD4XdYcP3jNVXLhsH5toRz%2BF5D4qagXBdssxCnD2X0JaqYlSQSLRWjIDObGhuL1Gknxnt6KmcbSUQm7jiBYmr%2F6p7BXMan8vhS13s61gevCtq8DUGcTg9KzvYByR5EsbYDc1j6q9w7SG%2B7%2BFg2rvamJzOJ%2BkSx488c4gS2JS5LILvj5phDpaGM9NZegntaUVH7rbLC1Sobw%2BXtXpDvY4N95%2BIoh6tU4XwAYFowYNSpZIZUmBFMtduVPPFMR%2FHllNXHYk8AU7f8YHXcXsmeknUUYBJQYHWM4U4G%2F8KHLBjDAaf8UVvV1O16m0x9lEp2WC8CbFOgt1YrARMFt2BBBUALRoQ9Fn4yLV3Nvd9mmGfxpq1EuATM%2BSDgD2aXs7vj6Bz8yMJEivY%2B4vD6fAcoBN%2BwAZ0dA6u00zSPydDNgnPg52wKcY7zUxwysYLPj1czrv0BhsNfNYbamVu6MKdfnLCESM8ruU2PQT%2BFdU1jgR4m9iGc2M1DldSSU09OyUsLAhOv%2F5qHCVXjCzOWGAgoxoUAINl2qxhfEI3cw17UYURtiMz2LLwswKbWZ0fviuRER2Ez09iiBflYPRi7fNcPMqmCiWF%2BXnB%2BZ0wZVCSvEmZYT6rD%2BIOj7Hziu4Rj6nAwmc3IxAY6pgG9vN1qBI1eXsWrUVZzXF9G9nfuG8wT%2B3LehQwiXjoeOKIhI5E57dw5hjKRF8HjYvUMXQhCFG9itizC8eOh3uffwvqtil961Xt%2Bda0mbWlAJnB3YaiId1ljz2wXNP1ezQaDSnrMsUFH5U9OeMtyDlDNKRST1oCdZ6L0%2FRLmikJ7%2FHNG8uQIk5%2Byp%2BM2xc1d8U6pY8bu6F%2BCLqjTdXwf4hvNvwGhzLPN&X-Amz-Signature=e7e2792f56d953b3f6fa09eb540280278ae70b97e062d7c7419655a296aa2962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3NR3TQU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDdaYDxbqqvFIf%2FZJoy2xgPHOOXoBO5vy6Ft%2Bi5pDy2cwIgRLCQ1DnOSFPAneWysS8AKr1CBoiP1W74uPXuGjEuhbwq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDC1L%2FAi%2BwPiqQRqcJircA4TdTI8yK180K69HAtSnV4J8ND9JQeU9%2FuxPNfBGEAbQz%2BwWMKgdtF3peW4UBRVMcxat3NyBt5%2Bj5rLKNtKdwB0Wdz4SsAkVWALKXAzKRFVPM8W45IP5xThmXY%2BWduahBWpUgcPwQhlnSpVHsWZpSGfcu01yiKSESNZ3q%2FgcV0GjGy%2Bs3vyYAQh3pHc6%2FW%2FN4vKC8%2BdDca6y1kzTqkBaBC8mu6VIMnxA%2BzqCKk%2BND4jT%2FRYtSa%2BV6UDeQ8dZbgXX6qoKBeQJeRXCeNmowGY%2FXv6wFKUmoM%2B%2Ff2qfseiS%2Frv7Z6SK5zVtNliOFSs5dhxOAQ77zLhraFdTn3Qjok70h43FnLbu%2BzYVRcgp8mBHRe9s98Zl1l%2ByWp3XiXe%2FhiwIM%2FrKSO%2FJBOeS%2FAB4ndgVb8OBvQ3owUevcRCjI8iMjOaoipTW7FPRQ%2BHBlP9NnfcKxBE8j9nRAsk3OHYV6Npr9z1uVTx9DWJ2iQBR%2BILXiN%2BT39LFXFQ%2F%2B69idosm%2BSvR0UJ8jkWmkEwks2OoIV6CmIcAeIIZYurUK4ezfokZ3UYmYs6%2FlgQAtboxynkuzauWImIDux1DGRbZjylQOAU4UYdYtn1pQbjPDvxXP4GnChrbwbKo5FKafCaBCLyHML7MyMQGOqUBSauTJPmUv%2FDVIdgrCs3s1gjUtviQpwj2nKpvM8kV9Ude1DT5MgxRDZNZQ7VM9sn4ds3cxP2VxwfFGuSgUE1nfMhJasqIS9FhwpSwRzLtvy3%2BH35gw7l02sX4vjY3ZzbNdCvZ5knH8gNVkGcFeqfZOmKGcETSIOdM9T26Bd%2Fu9968Avx4YwKWUNCSz9U9%2FGMP34xpy2iOKuzQK88lgmXdCDS5e7Qr&X-Amz-Signature=d59b58e6fcaacd6349209a5e6eecb6b49d672a6aba9b0937852d75d63e54913d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDH4UYJ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGy%2FgkvAvQdapq3GOwMB9Bna1eTRiAOjKoqO6tlE5cMmAiEAwEKrNDJLYaGDwMfOdYAyZnszcJrUkv6KIVghWKB6vHsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDI29ridyRl%2FSzPxWvircA%2BqqAD00TXWhZqabpUbneom%2BTkKoWNv5qWPQDwQjSTaNSQcFNcKzHKVaW%2FPT1S0E%2BJbGIO8%2BO9r05212aQNwUrvpFibs3NFRZ44sv78%2Br0tZez32fl4zVs8cYIPNHT1V%2FKfNRTrp8lrMD6%2B41wHE7d1O26200f5ABTG4ewjwKUB6dKBKGlQ%2FpV6Jlh%2FbY6BVyuA73yjmSu8txP8wsRacdB%2FJesKgs7%2F%2BXSdIVYwBc4M538r8RoC%2FwQ1v85jTIJSAcsSbJAd%2BDJKtx2JDSqZBtlD5vWQlvwpjqj1QegpTFuuuv9QYh0hagMT9uXZEwHyBCbR7MC%2BolelBo5Xy3u9XiQT8QxRkAeQcsqR%2BWtjFxLMp9lxyjQZb6scP%2FnEWfe8dNiPFz5ySmLpHpTy4KXN5knUhkBqY8sL7D7HLxZV6XPVisSCKQOq7X%2BBAS%2B33fzC%2BuwVh0MsyKbWEfMhhCSxXXSUKK%2FCOySYttDPXGKc%2FIeK9y01qFIw2bYBKnitAl5uKrS8E3Ml%2BL3aQYktIUnElWtIWIgGtXI5UN%2Bt%2FTdnBmZAeK4lLeP%2B20Gj4pTO86pk6eioGQ3rqWAPHn%2FCNG04P4N6bhdMObPkdahFIuY0Lfc5%2FdgelM014oeqOhKaYMMnMyMQGOqUBhg94ofVpd3KNUZqQF3ka7BaF%2F5ayqSthBV2YxYLhiI2Rph6A2kiSU5obogwIMxTlPkiDTgofc7FZqsBKHTa41Pzw5ydC4LUmKGvOP%2FhHrRxj5VPNmGCVwBDF%2BmEFhXvNVIojAWCD%2BTXCBTTzFG4msPoKPJxyc9KmFVZDI6qclgqO%2FwyV5neruj%2BTbLkoCxuEt4CBmhUqIf0U1YV5cW1wDOptYhsk&X-Amz-Signature=1e025c96e0151336f090dd32f4deb8eed70864bcb7490cd7e45af9df437d5545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QUKIXM7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T171034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEa7Ncyq0dIk6d2eUjokpGwDxIuilFBPUjlPWW6SvRmaAiB7fCtNrE2u4xnOrdkMglGkS1nydz9Y2d%2B9ydCWBUJA%2FSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMkNRqGxEJlQONzFxaKtwD%2FM2Qz3vFyPnk3Lxukg9RXd47WAIE98f4c1kXrx3XBjIbXJTLqBGeifLozxpfxQVli4h1Q%2B42QYNzjO2S8VX%2BLuCexRxJPFDX6DxmwfTVdz6eIyAJCkDzswa0a2cKdk3LKx%2BehoXdrTu8EWIwIv6H%2BV6CXZZY5DQc%2FT818ZJMnGUUhTUrhNE6KAAU%2F4U24e6TEW29c2s5VHyuUofuq%2F1EyGQJZEviSIZmpQhWTNyPxMWgQCRDN8GUc7p8toiFBE%2FFqlQLCDiJ4o%2F%2FhsU6tDjsIH8TEeUxLBpLmnUL0WptUrd1SinAjNCAeRFOOkjInw7oiGNfyg6rz9jUjsHAIvo2tK3Q1XinMN5jFQBf7ko193yHaniJIjbtqHZc2Lhksibf8zsCshkMr%2BGD2LVR%2Fys4nhnKkeHfFragw9RKfxPlzOLRZ9SFCDyBU6jdC2b3NwD96i3%2B9NS8kQskJTaZsDeA4edf7Bx0pYzH4OKUnIflBLwjICTRfxX4dbZKr1o3Txiv4fiWqBYgLo0%2BuBTLOlqhYwseydu9jXOv6Ynk3oRZRmUI9bc0Z9rlNygM6fZbcXHEAZNigJ7iqPazn2Vtys6%2FIijSh82Jsms7cLIQO0JTq6ZnUuGkEqqFwFQZECcwx8zIxAY6pgHK4cncq8TIJUkM0F6P1BihsQUX95hrt5GTifnvC4Av5tVze10Tc7UheTsW2aNSwHV7VtpZw7QPCFQfRdSZLw6ec8Cwb3D1PRc0VOpBE7jR2CLNH3lWLnqGolbuQK4VjTWClLuUS0Fb3yZo7AxKnqo0lqR4Ab4TnPh8K5wFZTX8%2FBEVfFEGKivbG2EIqxNOPatLfUd6Zl7gF%2FOsz8RvTQeRgz%2FjjnCh&X-Amz-Signature=0a9b2d09b51ce08a00418a1e03e4643e7585935871dc98897ba678749165852c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=d16729ead623ce5b2d7e08912f56102064edd403c68e4f22060853626d5a5468&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDFRP7PD%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIBYXyc8p%2BCMHCStSicnDhj%2FHvdm2%2FMfy%2BD2WKKPJ0ZfgAiEAjYZCnfviBbOuT%2FlP95Er%2Ba4%2BPgOYZSR2VPHFcBCYYjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKJZWCBkkLOTVhfLFircA2gJZMVBL56efASWF1S9%2BCPUjbDs196p6LrWxQejhIBZFH38h7161ZXw7JHrscuJhG8nmHecmmWqUtLPd7AKoFU5DRA9t4dXJfgT199NTHZprPUsmH121Tg%2Bak4WZe91GRwbRYInhcmAs1LEqIVCbiwfkutAa6hUfSPiyZQf4bdPxTVYBot8NyxLagx7mwRQJFzPU%2Be5V4PLqlmkK491ddollm4lzq92fU%2BMtSRyvXI3XZXEAv4pZFzBK847Ggzu%2BXRxOZKzh6%2FiqMyUXSfJ0W%2FUQABpq8XH9BfkfcOF%2B1MRIKzG1k5Nv3flTv66Xf5wigrQm9BQer3CvP1cFdvEAgSbO8pCXp57mXAYc0DpBRVkvPlmMO3g4WJIcGUPS%2BA4tx7vn3VCwTWXHn2TlSbNEjTI9F4tcGsdbwTZZaztkOPhxgO513E%2FZzAqGdj3tjjMw4tmLwWeT4aZo1Sv62LfnhybmvoIHzoqOAl2fYai%2Fki0JR5%2BnPD%2BDHGAjmrY7WDRRPUyB1TWziUoDwRJpyG2BAMk7R9E7ea1U4kvSD8Q%2FaYX7RpylvbRX%2FQbWQTEEuyauptMuppTyeKg9Ezfb5qBLn%2BJGawxrxeQukr4eyXtM6qGuM8dKGLb5pmtgFtHMIjNyMQGOqUBFgDkfCYlxBWwxH0%2BU1u4lRfM7jNDrZS0cf1imnQ2vAr%2BOoglU9Y6m11M7%2FjmWHR7HhecKiuGAjIsj5ErGEWYjYSVvYYuLjeN%2B3LC97ktEdeVyl5XU7FWInCM%2BlJ2iqhCNHW4hTvueUPvMjfKvtdM9m5BWFyOVqgr4QKddNceWHSPupYo5W1hAMjfGEoT3PRspoYq4oIDhb8UW6uAOn1GqfAeGKRA&X-Amz-Signature=d95618382e6720e99e5f3841b200b1213e6883d4722fa7ef777ca06a7c3207a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=e4a63891799f7adb848258762f90e6653744ab9ff796c56eac790e7ebcba6e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=a86bab6411c40c79fc1fde195a7130a9acb566deec17b486a04d758aa2be6574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=d61e308fb5b458d5e25d4894e3d76b4cbd4f8a7d63c39f4c1d92339c8cb34f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=2f219587f0304a6477d07e8338dc7b6fb064c22ad81b5e322e61a095e442ddec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=2e548882daec7b29fb3a2ed2960fe3652c935b3973448827e560e913fb119a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=359e27c605c9543cc5ee86155e21a7df371b294d001ae88897ddc6f31f7f25b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=d61e308fb5b458d5e25d4894e3d76b4cbd4f8a7d63c39f4c1d92339c8cb34f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=055f1b1616d8ad032cfd8b36126d25beef4f2257bf41d099bce17641609289c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=3801075b8beb86f1ece6c5909c6ddf9e3845aae3b4669c0494e9a8b080ab4ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64B7NMB%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCDvPBL8EzbR5v1l1EEuZhbrae%2FoF6frnTjRyKNl5uEIAIhAK7vVcaPK55uCsvGKyZfFjwazFpMAqEKDTJkKzkj0sjfKv8DCGEQABoMNjM3NDIzMTgzODA1IgzIItj6UgzGQNaVJb8q3AMvDh0Q4CIdOx2w%2BExP%2FNfJkAfxfmjw7%2FMHw27Dgy%2FyUIirmQJ%2FV9s8RRhOD5D1BQoaK8xJPYh2AoUv68j%2B4UaM44KJyl%2BZFGBwOoiBy%2Fp33xYw7VTrr%2FFEZyz0%2BYtQGhwZB926l7HMmHMb6ZPlOgVxAHluPzcjJ4Zfs7rhSkViknSxjO49Pfp3x5xMniwu%2FSPLxjT1ALS7FsxyZi9DyZWnFVVJJUOgOAJCtZYARhxDK5TtXnkwZP9tkdxjvPyI2RlTc8u8VDaYO1cadzzwxV%2F9O%2BtpY0M6yAdNY76SQOuWrF5x7oOuRF7hpaTIRq5iMVWzvflzGyfYBYfzqcG1P4iBwz%2FivrquNPglTJE1aEJ9FiKh%2B3HwfRUfzQcH7hhfxDwftQ4bIPzjp0KzDS%2BxSe9VWvphrwPrGxXq3wyfuNIWQX5NoRujUPxHmGissRB2Hkjq3cTeWkyOtXLajufKO0RYtn7Kce0WZB484uUZUeMhUyc9mdXbuykdyZKZ298lmNkeZDhb332GoRU6dHLXbsVexN%2BA8bIO4Hs4OpizcM%2BMd1I17Ny1Fp529QLZzHbnBcnHVjF8Hw6mJSay7B7XaOAb%2B8%2BwkLAXTEl%2FSoaxMk3j9tWNS5T%2FKwL0edql1TCqzMjEBjqkAa9NNLC0wwjJuAgrHNwcBoJHkKMTkNCRwQsMVXOUojYg3iCoG%2FbC9pSmL6hlPNlXYi9ycZLgFAXYtA7OGIDoEGL5sbx17Dd5GhBSlX5h1g%2F7LnvFfw0fIkJDAXmOvfAamrZEykgrUDIw9VOnbgH2P3T7GfNbE1vJelWP9MCiZFCzsc2fGtBldMUTPNTiEbB8wHMWIzpj9jQLV7T4Hr2YstMteMD8&X-Amz-Signature=e9fa7740c1c975bbebe41ac909984d17b463356e9d067a5e82e78d8dfa2f518f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
