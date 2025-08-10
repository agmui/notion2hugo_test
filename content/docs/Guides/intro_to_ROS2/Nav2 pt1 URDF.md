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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=c4c9731c7fdf88890b769771cfadf7269d88753b4dbc4d7ef4227b62e6a26122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=b8a173aa9d5d5f4cdc810803e436045e2f4165f26b4e5feb4a10f91bc6094adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=1ee54bf6648ae3d3e2e861a0b2fd72080ae728539d7d2a041b4ba9b3dbd7e166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=74ab729d6448b63a92b591796dc92b8aa6a3325053f9e8436bd5af1b7f1eaf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=eef3875cdc09869627e3d094b86a729da04b17f9e8c58b50ebab0be06fc1cfe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=b6ea962173d2d45a23775ce0be9af59c802c491e44e8a4655042b85f95e39ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=fd4104923bd4fbb5449621df61aee31517bac1fc388043adb10191c636478c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=2ee2140c7aab3e4ed0f571a56e9932998721bc53eb4b243386fe41877434ec2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=d3ea77f303558052414c1c8f7f5efc2ed21040c139fb0239e003e15f17d290d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=7a34b9f7a49afa7043e1acf38e2dc5f7a3170934700eb5782d13fa6b1f5a6c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHNDXDD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICIsBV4u7nvWr25maJcqP88WTgL1U83r0%2B3Ot1vkyiwkAiEAnQ%2BGKJ7UhxdsZ5FPbk5DgP3mTtVZsUDEp5r0wbS%2B33AqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOeJ9uzxpfhgqI9VircA1JHJXHvqm0BtYNkPRPVoXh71ynpd0eC%2FvHWbrXpLlpX3l2xSzPYZdxFK0Bmzb2Y90JqpC1bnyHTg090ZqDIMZvprDCxVHfIpC3Xt54aptch0%2F%2Btfi421K%2BDTdIF5Xb1WH5rEmPIzEP%2BsnpCXmy2tOdLrNnloMQY2ncu1ibciY%2Fm8pBB7a3RsTT6kNaKvOpu063DlhmqFxM8D9UMsm7nCzRU9XVhEjaIrMzmiHNQKdy49A0xoWKYw8y4NWObf7Pnoe3Vf%2B5ZL57v7T7UfL9JuHMzQ50aPYGY9Xp0F6JuD8uZITJJ3DmKLFDQ%2B2x6Fg3%2BZWfcPy893vjyoww2bA3wRvU1vMNrGI9kN9vmRUv4zunDHWwDiN55Usx%2FoqpuQujxR9X%2FFT4c7U3IbMatMOGN3lA%2BbaCULv2rw%2BHfL24vAWkS4r1Q9INT%2FSmy1sZLDtZPwpWtKw2T%2BsrsY2SXp0LbwhVor9WFaV6Ls3G1ZxWiwrFNcPWN2okfbIK1%2FPP%2F2q524P67vpyfCQMOI5qT9t%2BV0e5LRcEazpDYsA434P4Msw0j6zvbF3ca%2Ft%2BmU%2FArQmT59Rj%2BhjQsQnXobExdbBowp%2FGPJSGlJlsg0ueZorU%2FdT4dX6J%2B%2F8pDXjAn2RzOMKWY4sQGOqUB9lx4W22S6Eok7e0G2TBX1KFHWSyvqwEhYCZd32Y2yEnJ6oWlZf1MqYccyGox5c1DLeonBwNxAD7jQw6d%2B%2F8Bh0XqqyLzEulDRcAqO04Jrt3sSuN4jbPRJVnXIBcQ0ueaDlCW7eFmWJsp1K8HHb9RE8HECje6whj%2BoC2F5a4DrrW6pQNcX2%2BspQ%2B%2B0tUNjos0re%2FlvbFSfKe57PjJooqMgdT%2B0Wb6&X-Amz-Signature=b0fe6cc16d091a92d439d60bb740bcd28f590d139b3fa1e761f41b7399ea6735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AF5ZNV%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFmOj6iK0eoKJLIf8cXT84%2BrQSdJhVK9Mqw3udcsUG%2F2AiEA9inn7ynxPUaEX9ubBlKRYJzUtbJBKNE3br3tV2iBr6EqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKzBAc7FBpq1oC2biircA6X3gt3hhy1nZQ5hUGcigYnWLA9QvKGOygKpl8wE7JcFJTE5QUSVD0O8qWpTHOJ9Fg2OVPcXkIkuLkvokih%2BYCukXlarLqh9m7xM2QNcSmTH5oRBvRRAnq5Moc9GdFSmyNnF%2FenzmgjcTqM2Wy44iJXiWnJKWtPMI1MtS9wwEuNdhvngcWLtbvbtrchthY%2Bv3BWOOwccSj%2F7mjJC16NKMufzzAeCIOL4sUmSe2kCTqRVa2UcilmD%2BB8%2Bm1iPNjNOQ4wAY%2BJPmOm5hbWzEMMrcFMrKsgvV8N4mRXbUdmmjanwDCCJI7%2B3%2FFpykHpzA6zoUq0iEBVyXjX8Xc5GJPDwtKcttvOtfeLF1dp29SdRmhcSq4RjJ8%2Bl1TRiUeZ4meuCGlSM%2FmxCyMMyAZOjuooFEIaOyzir5tS28c0MggHk632UjGIluxvauHDi0zKX4cdGc9NTPGHGovsFUgVbqXagQpZpRg%2BH2WOEesaUrdmRWPKK2Dqmj305t53Gq2mLsj5AbmMDBvWBdR1pZEgE8zjTYWTvpw5saYjwyTqD9HuAMJaF9I9%2FKT4isfvXQAahu%2FJZnboWbLppAjmVxGg2YXtIoGoWl%2B0OrEBSeBT1B%2FlEl%2B0z8H86MABwJYGEjRlPMKWY4sQGOqUBuHB4Mriyp7s6bP4mIquMCcBRgCLyXSjcHRY2TmkOInwxgsFWsm278nuIuoJKtgrsC03uf%2B89VwxNxSpylMfEKxKHQa9MA43BE4cFTAVeVl829qaayMYx3KKDZIR007xAacoJF5%2BSid%2BnNDm0kSBbnJA5EdzmDOjc%2BwkdbL46LrmaVk8RSl3E8ungnIR9PLFi5Tu2EHkixVmCJmBDfkDP2akVoerY&X-Amz-Signature=bbfcfe8f856ec393a3b028aeb5bc712eaae7ed807dd570b117828b3d59aba7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCXUC2OJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqdzrWDufOJnAiWR0IFu2hi0HpVoBot4e0QmIOi4BdgAiEApZw4Amv%2Fi%2BzNE0Ct85MsRmPOeZPFpg%2BybUUMLoI9cz0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE1X6IZROGsQM6de0CrcA9s1MobvJWhDa%2BsIs0sYJhUdYRggE16PEusXmfnOdR%2FNoiWZIHcCeetnOf8D4relArCTLocvbdhM2X85OPGd226CkOEDoDwxg1JVMsCg85HXBP1nRWyfWVCkT9zL2d5QC7lhJMMNEZDxIV5joEDqxn8wjPkBRTMXVOXsZrVBNzau6lcHkuRlG549eJX2Uel1BITA1mb%2BtakHlNmiCuvZNkNXNn5rjJoyx9wO1ZZjSt%2FDzkjwEzMQ7jIZZqmOqvohB4uG3y94YuGpgKGLlip2c%2FLaZ%2Btpx2EB5yXZISAwsMxICTXjm4OJ9is88wCyZMDwL2TEgPZzaZ4u%2BJfmzuob%2Fj68D3c%2BQ9XvDPdMidUWCbc%2FHCyfHqLUD1A6DEV7CZJbxD7cX3YwACZQ7rEi%2FZqXnSS02EfbNGtR265WUz6v0VV2KKdvXzUkYxEfpH1J7vdv02CzubdRBewGFzzMzjTUHc2%2F4yv9vxaWg%2FNrxeUNTnLIFYZiMT6bBrhtaE5xWNuwmMQdj0FioaNVA2Hl69snDNn745mJYtYMhd2AVEaR1avliG8t%2F733ajvhFTwTl%2BLqv6oakK50kQtEalmiwFsFmg7IFFGFugQ99tgPg4pfz2CRrHh24OPHkRErYt73MI%2BY4sQGOqUBe62eXamXyVofw70FciOOnWuhzzW3rDbTbg79zq49JtHbDuWN8vJbps28zhPPBFJ2Hz1rLOUPfWW4xvk5FLetit5vqxF3ckOh7QB9%2FAgVJJA%2FhrmRHKtlG3GmpEfONfdIHtbdHX%2Blu8Lj5M9yxqgp09LLRUmRfPulelJW%2FCI1kXM2dXTMEtcFQIgjM94UeiVzTDJO6%2Fs6PZQz0pqW2KJfVXO%2BsNkA&X-Amz-Signature=19668987e90f758106e462a203ce4f51f5e15affe656331859abe7ec00890344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=40002cedf57385e3f6bdf27cfc7b9801a11788dd137299c016b28c6151aff4f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNHSCH3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2OvtkYW256CmDllukMI2vS%2B0gWM1j6B1DarFKaoEE%2FAiEAmt7bnsdn6g81duRbQQnvyZql%2B3zERlget3J3UGgT2fAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdWSPSQ8dnXXpVY0yrcA0Av%2F%2BvVsOA63zZRTUGIMIO4aSaf0cK7yVvqCx8ooKEZgULb0i8qCYZrYjbw0BRXrGcXNXXb4apfD8eux9s%2FCkneRbTGxdKaUuH2LSa%2BfRqoMf6p3jD2jD%2BW5z6yCjUpnV9uTfQU2YlK5mYpofFOpzX1RebMv3TUSPnUc25dBIuJNDYc1SIK3spR8Vj0inRSAVcjo6mZhKBPpua1LEzWj4PI5ydnfBy2YBjp7lSngBJG5LIoIbLs8F9zFj3zxWkb9h24ju3htVXAF%2BY0S7XjlUw67fW9jlyG9gSCnyUWhaspVVhDP%2BKlUxUfd89%2FZSLyA23UX7BvUkTkmwj8B3jFRok3fEod%2F6TIj5rsNZrgpHLrIAsdnhh09q%2BDfbzQqCepWx%2BIPUphY1ePZnYiSMHjQIwiW2%2BiXlf6xRY%2FT6%2By3tS4AuZRImGdsEw17drRRLBZTRa3%2Bo5IAZr7WqcRX1Kvj%2BdvFWqXs3%2B0SnhMmlWNnBYjER0v4Owl8Un8SIhMjbPWqCM7e67UbtZi16uegb9WnI3SF6y4VoETpcmTowbp4bPaQ%2FdZgOqi0t5twYAEJsFVbYkympeBR1WTIP7DiJr6SvTI%2FRw9MhlDwM%2Bop36l0pqu0z%2BBWn%2BtnQOlvSFtMOKY4sQGOqUBpt650EQHdhxJGkZVFtBEzbODVrDtLd162IYUTcIiMSo2P6%2BhrlT1cjzkDU9zIFCjXS6oL7OqNRCnmCHMh0XODqBNskZ%2BCTegxgNJnGsyuK5STsfyA9knY3RPB6GRz%2Fi6Ls3tzXi138sEA0y%2BdOK6ZWZM7IBYOi71yEzxYbRBNjAEnJVsmMB5yzN7M%2FwbDl%2BQ947ThaCwWlrhr0%2FIdL%2BEhVco17mn&X-Amz-Signature=f8788d3f6053a5dff0ae2041cb448f61a26a2251e04e40edb74bacca808f4dbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=e90e81e3fc095b2337cc467829f1f6d7e8e32b9c90218fe3c3244232932f231b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDZVOKWJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtSQOWnsSi8Nk6o4q%2BlLNIOTYnltNwrAr9goeVIzoaWAiAPgnX9VpsO5vN3efe1R5Obik%2F5mIkvF2dmzZqOjUNvJyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ndYFuS3pVtHQLGfKtwD%2Fvif646Sjdr1%2Bl7k27UDAmXmbyt%2B7PxzjqOjzdf6g%2FD90Xjqm%2FqqYerrGKRKLe6qJPJnLYEwMk9VSgYKDpT504yc4C1%2Bj8mL6KOJWAPjXMoEOmgEfGq3uVJeAbCD2D2vmbJndYP8kW7O4wr2Bg8Nde9EXIVBK5bA9%2BHJFgytYqzt4uUgHEtE6FUiJw0FGEbgmKG1EHgEox%2B8Luun%2F0UOvim1aGNjNBnuGQ9YW4M3IzmtpGk9EBPE8hFCIC1EfMOePtGltAd2D3XipCGYDJ69V5o76lu5xqqXidZW7mBScNRqwBDAv1Wf30wy3kDMDe5Q6WUzQOKwtQHA83Zp2ieNpDwaLPkSC6FesKcXcG89bdw4bOPZmyod%2BwASnU3lFp%2BKGF1v0%2FspHX%2F%2BdVYiiEev0KNwD00H8r5A%2B4BvPfFjqSIgHPxYWMgWwJK6XZkzs%2Ba4%2B7Q93nIzBELA%2Fww0bb8TAYLiN7St5SIQsPA6WitaTs5Ah8vW2CCTMW4Ew6fO%2FjwdGdPWiz%2BhQxoSFkXFxKoAqdOhs5mhUAKkHDBJvJWTo%2BDn7zAOvzQjIaNjQpHbUfy6OENkadh%2Bu2rlQR0h0elsq%2Fc0MdbNimK0kTjfbkG4iHuBYx7Fy%2FoYVeFo%2FdowppjixAY6pgGl0%2Ff%2B%2FeCHEeNVRQP2sXuTlvdZKNtL%2FTyswk8Wz0VsMDvqpRzUmS8FmtKyya8M05NovdmM9qlh7ScRyYLoEx0AInNRdC1nHUL715jsWioUlXcAstPcSBx1gEh4z6XOBfvDx94eghHfvZLzn49H4%2FLRAw6HOa7j29O6VBC%2BVigr7nOXrM0kXW5MsaxShDSKbbBBokqj03wPYrmfMGl9a6OYJyPGtbiv&X-Amz-Signature=2e635b59595f0d8c5b115801c4bf4ede37331aaf35bed50f59dc875e3c5e9779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=42fb0a46a03b52ebce158fd075bed623a0d80b1ece3aa6b11eca31d0b4c1f83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYGH3CW%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMsUINfrlAUAQlqxfl5SVkdSznxVv7Dm2R1Yy6cH3OHAIhAPOfbAQovcGvksOtQETtSqJHPzBf6z3%2FNaVUW0At2FevKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzv%2B5fqjc7IGcawW2Mq3AO8iRZmEdU8aFapsaEXXiSfqOWMruxMO9gcIwfSiCHpX7SgYinVEWwRUXznDbkxiq9CPf5prNl7B8frRHBMEdK1x85WNGYYtNSj%2BG%2FWF8m6%2F4f97XORa%2BVtL4aPLb%2FI2zeIWCQJ1ydGel4QGnH1YXP8tuWG583ognv3JQvkkXR9oy%2B14ZMu97wsDhGJp6nhXJm8ui0Lnip4qvzLD3DZDw0ODq9%2FoaEZ6a3GeJeye0pY4qtn5tWYKIT111p02gBA4OH5LT9ElBTzBSkTWiI1CMqvUBDhkCLVXfiU4fYRpewzMsoK0YEpNPp8dRpGwd0xhPInRot%2BmZSb0Vhf8o8Jen98%2Bbq4l7T6gdjcHUNmWIxd%2FCXYPoYpHW0%2Bvn%2BxIaFNiGPXjV47hCWSfMpVagGaXPd%2FFE%2FkzxO0WAEceMjpSSaMNOkrshRSRUpJ2O1fJpygemc3%2FmJGgtl%2BCgY08uCLHVBdcrYnS5NnIJL8YpylG1lK%2FUWtWdGwxYjfLsmmAnxfDKafjsmZFBACERRh6kRHCbl3CxneBI9zBtXFfnf2zXhGDzwuNgGWMLgS0xBO4VjadxE8SemLVFjlnUOHTZ9W86GFoNzY4B3kQ%2B6Q%2BEp3PC8gI8kzO4InwAcfG0kcjDDLmOLEBjqkAZdZI7OnKJHTSBtO%2BFXAsux8Py5lYujUYEcBtloPXl9Ggte7hnzY2TrVIsmu0whtTn9KB5XqqtqMjcY7B6OBxE29vvCNs7JDHXRjnyvMysj%2BberiQPngzFAd90KZ4mGhI9ArQE1KZUPmWKOzNWvJyAQ7%2FBt3wjAw9DUKGmq8EJwcWOnNziuY1qb8EamvLxu4PB%2B2jXCGajePwcOSoZoTPN1TrpTP&X-Amz-Signature=2ae04d1b22786626ef19e8dbd2d2057108612b8dcceeef604a0abc330f242cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=5b0e9e7bdf0bdf965d1418fc938d174124410579c658a14d082ac1bac84dd818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSBJDNJ7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6uEHAdg0fYtMSNCZwFN4mUo6KHwdGM6csLB0czSXLDAIgXssU6PoHMKqqFivCv7kdwn5RnYuX0RKyHGQtb8Ry7NIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbgrmH49C%2FQGivHsCrcA94BuRsBzlfuLsTmIgMYbxKapPlhMDvoG9m3Bue4cQp2AQz5q%2FjWz4V0INz3EphnBfaZWCUE4TkbpGN6QyZA3n28mrx%2FdxjcF%2FyBdaSIhoWdXQJVmeiEX5OCssyCvd253KFSi5Fom5wVT2pTqVc%2FRSIaKHfvWDNn7xo1lfk%2Fw2woP2H7wYhsnZ6isj8p1B6wBJOGz7rbPjcsBZi663rleuJ5vMTqAH2kmPUpjwGdrOf5fzk0Wm7BxE1Ttcg4Mu%2B7v0fNng9j0HJYxLtT0ki%2BcPQIUQaXygT78TaOe7bzqnaIzYTzScEhjM5AsBWec9%2FGj4zIujwfcqei3fcyD19ZDsiAoVktoqTCqLSIjiMKDyCLsczJTwJCSYzCe0UskMIjuNSprm%2BSQ3ln89HnCDo4Th6SgGYm3wxm7p%2FK7SX4%2BZ%2B64mKMX%2BF6MvnJ82oeQPDuLB6%2FgLfVXcfYNqwuVvO7QmDJctTKcQt8Ku%2FXGMPTEQL86WE%2F7iewA101M%2Flke6CQW9gDkXZfiU2kk6s96sF2SfCjqTnYuvqLq%2FgzlcuzTNysVZetbYPGVS4kS2WJKxaqAJvIAxbGXhoYKsdMnuM5JxyKGplLQDjF4mKH9sAZDoFXwdQnIhFNwF65ap56MLeY4sQGOqUBYmB3G3Y4CZ2RE2HGOXWAJGi3wdQlPkykkfa4lXvfFXonh5dZvs5pqsuk1oyESYW3vVXV2JnOMfxcyOZo2zQkiBIxOCj3ePo9bvGgNHP2KGccFEm7z8Eg8Qk8y%2BpoGmHUtTuThMd7%2BaGqrGiCt6e4X8P4hUCo92k66bFNJNVYGqsQD%2FiL7egji%2FY8m1eVkIe2mtped2TR%2BM9TTrKrafBiRU4XXiLf&X-Amz-Signature=4ae82b48f08951bc642f3d1b442f1780ffae8f16b6c1288d432e992a7b1b0f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXU4GFR4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNifFPLswfF8V%2FohvqCW%2B0gpwzToa7rv5g1U1EYsRMqAiEA6y0wZxvrCgi2RJs1hhxAXeYvgCeSxpDP0pQ6le2vdkUqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGm6W8AJbXUYShAp3ircA4co8qfEJll6q5DA8afReEY71MqjmpIgiAKpClTFnqF43E7823QNn9WkffJfVqmNCy3AggjNbmHlvZxmZM8vmJ0%2BI1WPqSR2rNmTjyxPLh3qiSuTqlIyOsqK0fNks4HG6gSpbrvpx7UscpyZUz2hpQBW9MgeWJJjN%2BqlmoGveoYk07FQsbwMywWSz8g6JJIOJFsPwvLIMTsqQhLWh1QHqCFYaLVjWnksY%2Fz0ubtaaVbs5sFRSwa6jI%2BL%2BDPZxKLDsdg0FNvTtvHcKRvJE%2B%2F7jJUbLnM1Hzvr6lMa0qSibaFGcdjmYyeLPygd64UGeeHhKoHu%2By%2ByL6aKtsd%2Bw%2FQGrw1mKgAGtV4NBZv2SofKaJGAZht%2Fc9QRHmwXPt53eiOz0TBwZh6yAAEsn7IVuPtGST4AsJY3ylSoQjTiGdUjzqSSteYOOcejfuOs7EwC4Bodmf5py3K5YWcGRbVtGxLMx%2FFPyi6Xg26mLf%2F9g%2FJfm9Ft45OpY0Pg4HDFjB9Vx3ZUYCQx3JrGZfsZWnwSljNEx80UPUrgSn4ajZ7sd3Ns%2FKl0ZS16yV57rgp%2F4vuKhnBfREY%2BJ6ySITZpERAwHKgxuctOgmBcIDkH0ZzJ4EkuxLGlCYVxFHmmHFoA%2F7%2B3MPCY4sQGOqUBJPOxy5UqZhz8T2mJkiOrR3oO5Z3uphFrxkCfj2b7JFm54wISVfhggeSMLNrnBnupTkomTq1V%2FUvMhxcIi5sgshV12nmkjOUGR5CmBe4NlkcEbmDVtTobBYWBroZLljy1u%2BF7rlXqD%2BvmWEpz%2BtTqNole2KACqLFtRmn4IzMwzH70MBR7OcGe23LyTS%2F9A%2BRDIFWUPatllnxUY%2B9LSnT20d2Z8Fua&X-Amz-Signature=bb3ca6e4cb8925d5d1c7f2e0ab39608a392dac709594a4b0e939ceb7590a500d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YW7ZIPX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRzL9eELFx0OViuKR%2F2mQ7wi2H%2B1Q2etK%2BPHSPPmNxkAiBeRYpIrIy8k3%2BUINRHz3qJ9tkBwVMgTSvgudB7MLpK%2BCqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX%2BloKZcy8Hbx%2Fn8UKtwDIsXJ8DK2%2FJ3noUdh724SkzaoSGY2W5hJH1LTBEAeZ%2FtOvIm0Op0nqfvds%2BQx9rMckt91v4%2Fp4TRUXObHxaQ%2FvKKWqKG7aT1gybsO1up3mwmiWssLtnI8rVZHCQToELW2ep4e6j1Dj%2FHsz5N%2Be7yDjAm0iv4NARbFo8U0H7esDsM6OW3GS9NBDEOa5JPLZs2%2FmmiS93rQb6MsP42JVUiNiGnTVbOI08uGXZ8tGyZhMVqguVTKnHDksNmclPKJimtKJfxkyAgyXsZm2srhH3A9a5fvzSmw9SO7BF1DGOUjPnq2t27uy6xy2dHd1IIIoprJ0xbWGPW8HnNA3Hll7g%2Fm7CELFAwGAdIYrp0rgHpgULnjVLwAba1IPAIEzqWoc63jwmvoY7%2BmEQ90S4WDguroenEUZAnT1asmFrbM3AdBOJxtUY%2BKPjT6quOrV9g5zwmz9PeDq5hn3lFaKgA4gUNeDEd6VILH6bL3o%2BpZXtYNY62BM04lXF8qJPCa0hwMqtllNi8mz%2BwGZmpR5qN4PEho0SOKTDxtfD%2BCdEYJwk%2BTf8QifX%2BNgFuJs3YZbPdxHi9c2TOvyC060Q2U2p5O%2Fp%2FU%2BjeHe99OL1wXqEW9xzefingK7Jvb%2BX7UDD1CFqww%2F5jixAY6pgFFDilssgRKN4wuNcZZD7uHFsJKfww6xB6nYaaDWML5AJ6WevnV7whudEHLP2SBiaeps26qxSLJQ3jcwuQlqEOQA1TUrZhW%2B6n0hyAj%2BqQhDxEpB3ONQfxS2v9RMzrX%2FykqOELMFJMRbv6iFFK%2BvLYcosVRVppo6Ra%2F171gNcALec08Gp67ZuC1A8rbboAfX7MY8I7nR87hA9yeWCGyfT5MuStOf1IM&X-Amz-Signature=c00202c9227c1a6e051e9c2d3f796076f234a0d3a36293cd2220b004135a1c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIDLD3OE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjQ8KRAINkLCjSs0hcnsdtcyKyt2xhlJyzB%2BSeOZUU%2BQIhAIk5B87M3pDpxXeus2NmtYRXlj0lZ89oqxafLhUWkpM8KogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlJ0WD0RjnnfZyHW4q3AOQr%2Fyb2sTHERxM1qc2hMOLhG%2Fi1CleGpDgzXpYksNvkmQe250yqOPkchkAo%2Fm4whU6eKDzpVqMn7%2BiXkACuynZCNfPcVeuVzn4qxVRd5vB9ErsOWO1jrfq3BKdOsW9YMiw6uPib9ov3Stu6drWSsVJEeFnC%2FEjup8w8%2F6QSFV8n8clu7bxhx34sPmD1HdXrzb838PYtaywtbOtWuvXj9tHk99UIa2lZ3VHH2M4OQwDiNGKfrlX%2BnCSbLoG14LoDciEMp2yW0WYFI1E%2FI3idyYNvpNodRrvtEokHyOiBHjr1ZLvkd0Fu%2FTdSpOMeWd2z7PhH44sIJF9bono2%2Fk6gngaOae6rgrLy85YAiaUDix2eXF5eI8yrEbz0mExp5b5S8wzRkyu%2BrDEPJXS7ldGcFsdKx3nwAZWavi2XAMU2KVOv6Ea%2Bplm57ILGBRjvCZHNqHzUdGeskKmppJYBLLBnNCzTLAi7uCGGvNg0NE%2F3ELZ5FM5mQKuL3V9yDvgk5h4Oi%2FgsOhmkb9FkPgfftdHgC5EPvEdKt3GpB%2BjZDWpv2pDb80vhxZiVIxJnhS1pfPEm%2Boj1%2BXDjy%2BxfruqhIqJ%2BUIt7DcYzcKvQXtYQqv9HfSDt6ookhEBYJ8%2B1ZPInTCSmOLEBjqkAY8z1fz%2BWEMIMzbezprc6rb6ScsJHX7J2glVnYNasm9pMJnTrmolckhl4%2F9SOgGNW6qvVpoC%2F3nSy74gws4Dl0xZbJ9pTlAWBX7Vgu10yWlseD%2BQ4mxNw%2BuhlZBCzmIweVa%2F70mrniSbGjuvfkh%2F4v9JhASWOy7RYfO%2FpXMiGGiBFFO5cS9VMzcTpsR3vxDu%2BD18q0ctsbrVrvtoWBcsvQ1EzbaP&X-Amz-Signature=ccc7641fd03d4fb1874afea5f3bd4c9d0802def5e8043990f760684b082a175b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCPWAEM%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGUB%2B8mOc4mSiaMqCm6awz3PkTLPA0%2BE81kZYZefk2BkAiEA8gp1ugggyFntTrSgu6kTrFzVrJJ4wTDdc1NH6lRxi4wqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyysgj%2F9r8y6ob5mircA6pek2WdeLv7ZmmiJbC94gYYpgwOOuRWURwcikLwRWW9bCaAWvA4AxY62A%2BWK4Iuy23Iq8SI4QDA1QBDDIlKucqoq9Gi0H3F00TkwMGf57wfTP%2FSr3%2BpW5x9%2FqzSTNE4YBOLHlcRI%2FZFitQWyy6XOSjex6AJkpGysFvO%2B%2Bs%2BVz3IdOpdPQmPnYZ%2Bc4hYOlYTAsUcwdd1xj3WeNrEHw5U1R%2BzFvE%2BRUD0iY4uBnr3nCC%2Bd%2Fz9SXKyueq%2BnsNTqPb0ZsdhZT%2BSS2SJg3XWLfyY2sJDYunfwbvtVoadjs9eHjI%2FJ2Q3JxCqzgbdGAiVB1Y%2F3Dz5BKwNT4Hk23rrTjYzCHBk4aiPv3hqRs4lP6t4dbFz6auxvnWrNjYjxOCMZ5xWMueWf6F7%2FHjomn3yEJTUALJu2RWbzlZcqpZG5IlouNrv%2BK2DDh%2FgF0g29%2Bpsoc878R7pWmbBP1RuhmLKt5W4fBIDKB7FcKt2WRr%2BbWFvKTduiq6uROSAKdCt5EI3W8QpMO2Etdn6WKIrIBlmdqarK%2BbjnKA3D6ipvALomjSV6Mmu4dWiHIqG0XzYTn%2BAk1j5Y8pc1bW954T6djM8lliKnopGZYiKHiJeHsPc3ab10gczJWR4u3TLQbyqd5KfMPWY4sQGOqUByAvglXtTkvWwBPUIjqV%2FQS%2BKeQxMwlxbnjAii1WGzdvabAJ%2FdQofoRAqx2Y6%2FHzS0X%2B43%2F0IGlboMtcMBuwFX2BBiNGmfV%2BxrMmp0V422vLsaFIzPJjrDDFsB4vdlT3hrF444wbztnn5acTHvBosX4VG7cojQzG9KtWHYu1%2BUiQH%2BEZA2hs3kkPBm%2Fzuyq1DdUVDoG7VwcqFVTbgpPfoy19QAq8G&X-Amz-Signature=ce8bc8ae988c2fbda7a7b7eca0eb04341df174e23c14581bd7901c5406483fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=bba583740a1ac5ed7dd42482b8326d7f451303b452bfc75157af791bafaac258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLN2S5NQ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFQ%2BBK49cR74d%2F0G0cmeo2575IPp6Ag3kRDLgfhwh%2BaCAiEAuybF4bkarRJc1D8kl2gvm3WchxDJPm8ivC78tox7oCkqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJTYHD6wOqf7dascOSrcAyA%2BB2hm2AKawcYGRHnuuknIvTrQvhRivaHBtBQZfnde2CDO5uqDCaqLawJTG1rMDERvEtDi8mArv0eGD3JLsogCM6oAwQJDpVTt9yO%2FuHRKfQyIwXUFNO20ytW93kOYCH6p%2FRy4kNacDDdxa0qDZyEaPMkS%2B41YzTrk7byI83A3pjEHZnCXALcpIU9ngvr5rplyPENA9IETiUHoLaUcCOfoYCNd66ec25i90EkPUhJ8hCZ6dD0QgCVhbQYMl2OkM7io42%2FnM8e0rcvc6VWRbFs9qdvow9%2B%2FX9YFGAKvjldUvQVGBVajJ9K76WWd0GFdr97IzeUKnp1TOzCoqnKNR1Kydd72lwvGoPs6E8aw9nv32fhLjcnpi7f35p10N%2FS%2BENqEoh%2BqtX0KIJe4bo0rwnHfEpSlQh3ro1BdXy0Emlt%2FilP6Hp0i7pZ9X4WsHiJZ2cP%2F2F9VB7kuqZZDcGGdqjuxiFrNUFg5lA89onYFiN30cF951KXaTgExJEV%2BqiSAi0KSdMOw10dD150Xt%2FAFmdNd%2Bk65upDs5m%2FvLRCQT%2BGAMvCQrBYQJtDdO76CsICxWRvbxUJIIYpcCm2lSssVYRW5v13UfBZlXAT2JPMW5axXh3O%2BW%2B1XMpDnmxSTMK6Y4sQGOqUBXE4%2ByoBr%2FMc%2FAn52Q4anF1mz8jENn2OEr8qs0ARXk%2BdN3aV2G90yDQhi0R%2BPPRNLfYjyeYSCpQxuMlDEqr85N3wcC2JvqiZa%2F5Sf81e5G0%2BJQ9e8cvfAofwVcaJLnQpRa4Oj4TZGlDPyLLESUw%2Fd391iZFgOirYAdf4ZDVJBjDuZ8duOhUUk7JorCd%2Fufs3tdEG%2BuiFGe7tEz3a27Ezshc8kMdy2&X-Amz-Signature=6440da1e4e999af442a2f20d915c9fd50016d21354dd22a06190d1a38ab4a6be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=ebc681ed36b3369482d46006ec8c133c1d7a4a6fe270f66df957e89fa2ccae2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=f54c3bd80b71b80c884b330d6593a24e661c24e486731f0f51001947ee878080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=4beac581c4c8104d69526c374dd7067b05fdbdd3dd6056c78cf647599fd37dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=29c49286b0fd3bb7521c157521ad65e4af24c97a13633a0a1087689aaad04052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=ff9aab4a1f7d1fd64a6fa8bd3c8ea7693b81eb2323f9d921f8964fa8ca5bb8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=9a0044400ade52ea620681342b0f61194b3288bf44e73cb1819cdb75daeb77c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=4beac581c4c8104d69526c374dd7067b05fdbdd3dd6056c78cf647599fd37dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=0fc8e892271dcab6ab3dd58aa7b8c5fdfb8cd9cb466e831094534ac7da2cf1e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=f11b1fd544417747b2fa85ca543d711316fd55a95c6b4f89c23b66f8696fa21a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7LOZONT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeM4f0fvVKkgbEDtncEi4sizfvzH0PG%2Bslo%2BiD6WasFAiEAgVRfs2XNX8JPmCwvMz2tJr2DozjO%2BXH%2F1AjqQyQR1hoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPz70AozPjNGJfzNyrcA3kezNehArU73BdJDm1C70d1cP%2BRkX49C54g9aRpPnvTN2UIqKyD%2Bv%2FgSTkmeUyjhDh9utFetFj7VGoy1QcFvO6ktXZAEMM5Hph368SpuhwT2qVxKBDUUU0zo10opsKSp%2BwbPRO3rxV58Zr%2B2iYGX459dnHWjQTr%2F3jSkUpzCuoOP35W7mtw8m7JnR%2F5v67Jly5HUkn4csiU1yTtgr40X4n2Y1XIjFQsxRXrheAUDYJBRf7q9rnpUzPE7%2BfvuwbW%2BwUtSuwx%2B0XyY1uxOvVri95JMrod8AWoobs3UpncPH20vRRnrdnrcqFxuC8N45WayqzZwK9u5YRKiXKTOP%2BEa5xIxLK7eqlyz7RaF70i15pyPauZihzZ8OfM7eJfa%2BHrSFWvCWVoK%2Fue598eoDiK0RFas7CycbI%2FFqoOJgi4k9%2F8fQVZ36PtUsL24g9Z21cSlaxzeul9Rm9xxhvK20OhEhcLLKaY%2F7pALV0SkbzKb43HCJrOGEzk29F%2F2cbIqLHGYKcDL2uV6zKQDxIfrXUkQQ5LasRawN5sItibeqPwzrhKYYfAKgmszO8gUUY3%2ByGAbq7mPTjOo%2FZCLy8lPuXvjMMnjMA6pRTNajdCnoSlJGtYAYZ64DcNRejMZeHFMOeY4sQGOqUBF622FD13jtBHRQHX95M%2FmjTUs9oOdtAataqa3cAcRAgzKb4AtA8e%2B9wt1EsQAl8th9nsRZuiQXckx0vR5f7sS9e%2FZnIO4ti0RX3InAXOO58d9uclYH5nu6B2JDs2u%2Fr9pDO6zp4ZHtDq8TXaf5c%2FIlbYqLCEW8aKsVh2wgsto3Uof%2FLkyIUQ1TTiJG9y5RDeFFRqelQEDnlFRfmVIy1vT9OWuYRG&X-Amz-Signature=50efcd8b2ab580fc32ec3d490ada89e8021af6140b0b24e2384e346589aed38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
