---
sys:
  pageId: "1d0da3bc-6297-809f-a046-e45c878d6c51"
  createdTime: "2025-04-09T14:22:00.000Z"
  lastEditedTime: "2025-07-30T07:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt1 URDF.md"
title: "Nav2 pt1 URDF"
date: "2025-07-30T07:10:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=0422d6732d653e0f4dfc563e56e9e506340b656857fc4ee061aff1978794af08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=c3e17de756daea8ad77ccae287b0269a71d432090f79b59ee3e94b6d134d23b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=fe53391a047f4bd2e9bdc2575a90277ac6b9b469440dba5c24adf7eb07d1ac0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=eaf844ba2d52b1f692e152d320c573b2fbefcf07a24dc18bbb4002fae67fa8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=8e8bc349d71feb031c6e8e95b170618b4b8dd45fae51c06d32fffec500aa8313&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=c6c65c5e14c5d2cb0a90ad6474b998a08cbdf603dd2262c610a9e603ecfdbd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=36761721c0e67b5767a34c9122d4059551e503dfea4cf5ede2bf893add959820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=b2c5d918f6642c479f711a957c73f14de9a5158f92c760862f7468faab4a57b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=d66489b879fbb4008812d54f9781cd1f6110ed32b2052197b425d3aac0abf2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=6779ec33b9fe55c6805d798159f80df9e6323f9587584fa8f0153c53e5a262ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO add rest of inerta (maybe build up the robot one by one? like visual first then collision then interta?)

Types of blocks in URDF:

- robot
- vars/Properties
- macros
- link:
	- visual
		- geometry
		- material
	- collision
		- origin
		- geometry
		- friction
	- inertial
- joint:
	- parent
	- child
	- origin

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
        <surface><friction><ode>
          <mu>1.0</mu>
          <mu2>1.0</mu2>
          <fdir1>1 0 0</fdir1>
        </ode></friction></surface>
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

# Nodes

Now that you have the `urdf` lets plug it in ROS

Here are some nodes to do so

{{% alert icon=”👾” context="success" %}}

### **New Node** **`robot_state_publisher`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=e3153dbb600e28c028362ffda816eea3d6263b49b6e6ce3990641bb2d00d2265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=81efc0918e69c43450e5b74d66330d1924e71d3491dd09cb2162f0e698899c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CHRAFLH%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM0USyZeu2PH3hIrHUir5v%2Br1wJGH%2BhvFjz7t5OJRPtQIgTvmg0ggV%2FsnuWuD8dLtoR1L4ybbgsP79htGBJrlG%2FHwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMy4pcuJr5ryMPu3ircA3b1eARz0T2KNish7Aj56iWzbd%2Bm65W%2FeWCBN4wO1JmXRrPxj3%2Fk5CYoiHByjnnOvV6MXMPSKFHuuiDP1xOi0eeUQJZnpA1PeNQFLkl2znjtbJBtCUb8efx21im18d3Y%2FC8opPv2YMjuSpfqKeK6yQqYRQz8wKhkZbTiaefFsBcF8jsVQQM1oeJyOnw1fP72mpbmlL3lGzaDfnFbiXekMF1puBqZUuGd1D4Q%2FhBPFMJDqJz9RDg2AxHV5Ojqc0aeP2y0io8MtRMtMsOzLBaXG6G2JmRewZMKeNPkNcP5RFbE481hTUt0%2FxCUrnDbhT9JsFJJ38W9dwCGjTCAVjHwBlLT6535Spiw4hSHNKj04XfR94eh5pHyr%2FFDFAgm59TXW76XkTViijCIAi0fDdXfARjSYPA7v4NTO5OlgTn15hBrsm2WNqtMr9WbKTZYEZq6XALHhYNd9%2BPVnZjU6XlnKZLKzBLbze83dHuiGYY2YJJ2kbIn9qde%2BHJMgujs2Rbx%2F4fH4Zso9w85Fw8PqSwT8l04PEPUvaj8PIULuY6N%2BrozWjRsC2NyyPoC5j4mZ%2Bc6I4Ope79Ihep9CrlZI8GQHrgcQLTuVCb8ptimOXmu1q5VS%2BBG7JilPJl2S1KbMNTBp8QGOqUB79sRkaCCmlhPUayOF21rcAtDR%2F7SWgSYc0ab2NGYubFgEn5gHYGO1UaADttNBZGmR%2BHjN2C5hPLEvW3NMR0NXah5uLYERIkiyAb%2B24OLPYxXYNd9SGVVSgHkzqpeySOh0I58Frj4gN1%2FTg%2Br3w%2FfOTYiiBBhMno%2B5qPZoYqcSXUsICOGA4ISNAckle1tHWYM%2Fo7WpJZGx3WN6g%2Feg714FgjrFjmG&X-Amz-Signature=d5e27d14ac67ff9e3cc661c22345561f42004c35449e465fa566854eb95fbe9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

TODO: first manually run the nodes by them self

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=f53d560d61e40a1e02add9cbf2ea7ca187617b29e774563c78ac48e0eef721b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=82976d1a05c4d677f22ee51aa6962a76f20db0a95edadcad28874a9a6b8a82c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=9d3a614851ebb575e7e4fc6296808ded7052f38a5c0495894cec29233c4e136e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=74716da6ec0d480638d850bddf8afbf479a4b4cd39d5006f7bf340c6cebb168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=a0d7d6d69d2934e30d953d37e2328a2e68c98b11cea6ee06a48105d1ea064108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=21a96abb7b25ed458830d894f2288f671adb91c217eb06d77dbc6550e4dbc05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJR5364%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1DZKET3clo3gaaqUjZfsyhNSWJPHWjIvdy2Cz2Ro7VAIhAPH1TBH5UGNidqZdLOtOoBoABECDgwHZIwqkMpM3yC2eKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmHf7wZy%2BUJJxpAoq3AMhfQYQOjISTkqjAdpf29TDukQg4GtJLpsTMoRDst3Qm2Tv%2BG4eNT1ea9FieP2WnUX50C9yQo2SchQgtLM6jAHgthza%2BdiGk48bPYyfmDyz45Uw%2BJWcmbZ%2B3P3gcvf2IFjpNq0fMH1djS%2BanX8rhnpWUWw7TCTIGq26YWbWB6ikHjyQbalDwwRMFAihMr%2Ffy%2FQuKKtqNmhfqEmi3vf1HWoQCFDX4L%2BoB55w3w2fs7sbjMJwWx2RptKuwpFBbB2GeDHzp9XdRsrfG9r%2F3Rzd03rNRkspTWhpbxWXVBLzOBZeZa0PaVQ%2B%2BnB1hYE%2Fq8Bb%2FrQcFdl4o3xiw4dSumHJ6SPSSY3PBJFBTM4NoZQlzG%2BfPLpy2PikOehUsPR7mVzqcyuPPJ7rvk6NoB4qfkatnVjDUbY3LDnVT87jy4%2FfXLnH15j9%2BiiwRaDWmivv0M6%2Fvn9tqBPQ1D9LC7D51etq2zHgLMQGrzA94%2BGdUVIwtHQXfvYWxidXASWDBNaIPK%2FKBgtF10RXuKvuuw6GR95eVqQYh0llySUbkdpkVfLHF96anjXhVK6GocVOcHprhvGDTPq2tKoeNgfaXa1I%2BIuToRNHD8ki1ZbapYM2TRjGBkHqIEQZ7E7kplH%2BZWJCTTDGwKfEBjqkAdkjd5u8uVdruojbnrdlxVOZwidgPopwbx1oF%2F6WAJilQa6XKyI%2BQDqQPV533fjxBa4V5ayhhzs7WuzVxUHdeZAfrRBK8aj%2Bveu4bNqwEJzv52Q6jCPHD4GIHoLrxERMG5VogVLMK8Acrf9GMrkJnOkJoGLGq%2BVnux3ZBmCFHyGT2K%2Ftjv5RotnZ1SwUC%2BLW6RSQHH1sQDedzJgtwwmFDh%2F1ILKQ&X-Amz-Signature=2f3df43a6d984d8f5857a4b21a36596a345bb2e187a2108d79a57704d73eb0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
