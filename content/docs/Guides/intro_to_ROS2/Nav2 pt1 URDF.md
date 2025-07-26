---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-24T23:33:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-24T23:33:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=31f3cdb9158ff2ec14406612295e9936996d1db49451a0e2f6d41ab0802a2773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=6cd7ef748ab59b75b2a221185ee30d655fcc62df01cf8b4980877c6c5af2c05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=7cce73138090547b84549a0f73bd02bb551db1202ca1aa5cc6a5aa731ffe7452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=e64d4c01f63b6d0e40793392e92c7b77ecaceb9a6b647145d5347bbc1ba72d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=d35b3e859b2508a08385b3b7ee9b20e176c4fbc96bca856504f53ec859f35fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=d459679da73b3526b07324dea5400309ea8e24a76e824a4b03907f5897d0deef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=57d2c06020aefd9e2fdf966ccbbe573ce9aad9cb8650329da2e64de713091d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=a00413714739ea520a3cb8da38a3bcc025b987c1c126fe6b531c5ee7eb21c169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=318a2f7d18e4dbe8ed6480ec92cf7d86a178148ba376f957d990f28094a14501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=b2f918b16f2899ad901ed467bf88e0b6d8b106f03c33b6d4c240aba28f15f37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

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
      
      <collision>
        <origin xyz="0 0 0" rpy="${pi/2} 0 0"/>
        <geometry>
          <cylinder radius="${wheel_radius}" length="${wheel_width}"/>
        </geometry>
      </collision>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=071006838a42741a5311ce4e9294dd7ea3b3a328ab0dbddc77f3eea4f7b3b2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=86cbfbd1340603ced4501c73a81db2238359ce03e46f8d3c65f3a08c8805f9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=6f93b293c08f540a4b7999ec106c6ea93267c1b8b6fe196f99f36ddc9c992520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN2RHOSC%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDoeDr1v95jcF%2BrQL5F0%2FRZ5rNbMTyDOuHUzrzKUoPhkAiEA%2BQEFcO%2BxD0eW3GtKyzp2mknyjLfT%2BehNUwhk7b01%2BZgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDDzxughgD1uGqHBb%2FircA%2BEOvPGgIynT8NxI8WEAvP88ukkwkEKWHM%2BHg9%2BNAbTZ%2FjDxXV7GJABOq2sS4Xzy5JP%2BClGJ16qV4BmFHRdLlyIdQhq4UYe3ASnbwJUQnxZVqFTq1%2FRzd7BcIjSRN79onU38tYryM9tMynsExk1kbF5rI8RDoZ5Je7ork3QlPWQENgKRiX6eYYi1%2FuLwf9ImV14%2BxEnn5CUND0bai8nXrt5iEffzhJYxES7XcoGydoDKN3VbNel2stujB02GLtlQsHdZc7%2B3trdcHXqqw%2B45tn%2FUMHF%2FIxcR0dGsPSd8JWG3j%2BioCz5iGh8yRp4j7hGQwdMqvJLDoJMfHNmrFYqKpDzPd4k8luQsbKHRXR920XeKAq0eHw2CXVYyAji2%2Fxpubo7ZMrmdi7nvPLgFUVXSqCI9sEQ%2Bac5zelM0LTto2HJq8VowtssRPyeJtm793LxX%2Boj%2FNdcL0dfLrgzu4zyVVy3z68P5RvRLX%2Fz6Qy%2BnVxoBeLsFv6fYif7Ny%2Bs7fywVuECDWRSFtL4avK%2BulTXDKCnXWlefRrzfNNs4psiDHnT2Cwp0EadmKGf0TUk7QnM2EJwEN9TpeqtvyswQEGlcNJQ9GrunRHJ3pey%2FKSRgAD87ddPsRjLKMUjgda0VMIvRj8QGOqUBRwjE042qIKpurWDqVcG9DTBRO5b5ZLvKjOj2NhXfNGaVg98xp%2BhkGkLmn5DjupSMH%2FiqdRILQY7v0Z2rVJoufS%2Bl1p1zzjHx%2B%2Fkj0mjkuO1LaQsk6Meg930CQj624%2FlRG7%2F55o4XOU74W9iFEIVCyqio7pwAwzxU9LsyWcik23OpMAAUlxaw%2BgJoUjPPh0IcL%2Fa3V5iElJiM1IYpJKxXjHeT52Ec&X-Amz-Signature=aece0622007d8d6e58ecd1353a2470863df8c665bc38f567b62bf352f2fcb618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=d1a54afd7162050de2d3ba25200e3ac5535480ed7ea3afa34878dcc998085b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=b54a928a962e841987adc0712fe39337a4bfe370e7eb8bb56d32df7ac35e2b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Launch file

<details>
      <summary>What is in this launch file?</summary>
      TODO:
  </details>

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

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=c090edf5c3e7bd5162987982d9d42626d23e31dca9d0896cab6682b270fbb579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=7bae3acaab9d92d3f8b54a2f8ea2ee0636c7736c041774608083b9aea6eb79ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=dc0dec50d9ccbc36ef06d824e922f003c60b8ef6006f70ae5f1d8dbec992c8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GSJIN4V%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCrQA%2FMDiIc6HTgYkRpDBYNp7fJ6zkQ4pz%2BD84%2FozD5gQIgSOpP%2B6rNHOmevrZBOunE7LuR7Q6jl1l%2BogdGDdiQZN8q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKEWyP5kLW0RpAxxvircA8fxwaGHvLiZomvkimX%2FynuwhgxINu3%2Bn1AAqXNrNGwMfMkENUJPEFty31G7y9Ya9JnMUH6i5VrNAVekShI2JAImTIM726N0lwiwFoBXQuac%2FxPkexA8Sgxfic9ozXznk56pZmiqrR3RMDn6IXdnE3Bq9a4107qlxl%2FkrBSxnShZ%2BZUdWmnOtsZAkg8H8hHvV6SCZUDiY%2BSZ3o6vUcPrwLReEbfmdx%2BH2tJ53hmuUlOr07c%2FlItLFBLQyqHYX%2BqkBnGv6Or19o%2FTwhxNk2qVNX%2FOB%2F962pL9eZ9xWII66PitFt3wRB8r%2BLUzrqRQUfkUM4Gs8x9P%2B1AiKbGkO87%2BL7whWSH%2FeQIqvgCzWlfFCoIvqS8twZP8vufs3MnpJ%2FwgsFHjcfZUolt%2F7wqGjAKytVUnvThMf%2FBnwYRdJplwpdchUq3z1AvOIMd2kr%2F8d1HKVOMdsZf%2FWOocZlGBZI%2FGx8AwEW9GJL6vCT8l0n%2FSGs8RRfwFnxw7LIthUtRNaqEI9HKNmC0ur709l8t4sDsSV%2FTSzZmrOepjn46rKKiD2BvHPxInAGhjiskkTDq5yX52bCOT9f06XAFSRwZl%2FOakRDFFu6hqSMRAQdhTmm9JCkjXw3OZtvKpO8bVp%2FbSMIvbj8QGOqUBcxGRPTW%2FTK%2Ff5BC%2FNe23n%2FUvV3087EddDwba7qhRtTnWB3wg2E5oI%2Bp0SJNn0tK%2F7TflDg1HZyvgmm35MNB3B2VaZXTbp1SrXWYyot4j%2BMDfdnqihpPi86avIYbgMJJVUs9BEODVEe9qhJHWkzo7GflMmI5%2B1OkxNNljIMaVDfI0xZmmVMrJj0xtsTFcd6rPae33jM3BIZBR2NIMAUbDuSpmLP94&X-Amz-Signature=6553d434d9811b6f30cb1068bd9766d0bca68c44af9b6b4acf93c69bbad186d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
