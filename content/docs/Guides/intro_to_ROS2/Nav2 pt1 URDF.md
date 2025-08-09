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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=e6a8ef41da2bca960c0a4a6b7c84e6e1d9cfcd8c56b699fbb98ee2a348fe82d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=bf435d752e9e8c9224ecaa1b74205846d9b81273899986fdb08315ddde26d43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=7be28d35186c77a7cdf6f4b4b0a213b6104a5972437856666f967ed1709508cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=27ad23607a6fcb23dbf976e8792ae94895d8215e8c2491b24f3f370ced036d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=c84c407219c1c292f0f848533599bdbe46be591442da1715517b86c4b5158390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=c13c0ad5ad124733ab6458c3aebcf8080af786e37dadf92404dd259e1dcdb760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=09f55301613ec208e6d29022862f08d15f1fef946ed5d4c1ae8a7d340bf6bfbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=5a7f240745125067ebefa073ae3ec941de1bf2cd026a889bc630afd08081c396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=031fca720285e2ea28b50f1999a4e8bb4a5cb6de577ccc7605e20b2338907163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=16ff15bf470c0de8543db628e4077903b84b323899ba0f7889e08342e9771619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KCUOPJX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDJxMWYP9hjxhfsoR1GUweAqOzfVIVvjIYz0arbX42PNwIgdh%2Br6GWPgLMFWiCfbJbPNOcEsItcG%2BVzreDrSZmjCgAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmAoiDO0%2BmHKi%2BZTCrcA2t4xw4K92Yn1rjF5AwIqXbTgPQhE95H%2B8a1G2b7MT2qTl7UNXJkw57Q%2FF0pDG9scDbcf4nEp0F3ohbODza2P8q3uspd%2BPr%2F%2BO32zSp%2BrNz8UI7bqSJw4PV%2FnJG5Dl%2BmQWhv%2FKzTqfS9Rx6Uxhckf9ofpEltrmDIOMHbyCA1oPG0hzXvitmSFwRIkOh8Sjm0xhLPajQE040A3Gx5zLgOpQXy7urcXeOno8nQRO0Gx3iQwZWfdnLB6wddUpgdq%2FkzdHHgPfQ4FiCiDUzvmoddWI6YOOrVz%2B%2FBxnSl7gA1AbbSTKN4ynrXMOXFCcComwADcBSoz2xrzLuiJ9zlxvTMq8cNjiNsegJlCEvpqFLp4YNSLRHwlNNXqpBIqgwmfGPTWsdy6YiJzqWQdX4vW0%2BQPN8ZTO%2FAPUBcCtdccsGZw332B1n3QyuFSXm7oGKdbfF7w%2F6u6qz8%2BxH9KowPG%2Bsx2cOp2mtLQULFFAfqxZdWF9y0z%2FcsVCUVYjqBJFQJ4rXKdCiC%2F0nMTjZXO1cx6DmpivFIo945J3gCB6DsDKp6iHcRnsOnAhc0pg1%2FQUDmVyiSdN5VRph6Mh%2BXpenUJLicM%2FpebDdW4Gs59phWCevvyIZqsWD0xpehnJY4uKiXMJmg28QGOqUB86l2KxAAM8M0idGhHv5BIZA5Um3i9SXLJpwuHxdg2MYTl4x4qPkee0g9GsNwDWLWcrGOQJ5GTxN3Jyqml12q2JecXFjOsLRjjk9wMW6EvreQpiRDysxnvnxDLeG43TaEkQljunNekPzN3IZZd71LYNUu7LkkrQXRzir0%2F1CwQ72ZRQEK3cKIZEzxEB1ZTBCtO5sIKj7LL2ZgqXDoW7nuRwO%2B6dmf&X-Amz-Signature=7311ab358bb6e2d797d445e854c6cd78bbf08612532cf621586459d801431d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLUUHU4Q%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIGiaNCI77GpBrSihnaoMpdEB2Delz9FBcwekUAjTQp4pAiEA%2FuzWu%2F02VqayNHCM3uaPH61cei9DIFgXXLvzcSkcn1EqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHsluI2cME3Hw1xPSrcA9CDhX4O%2BJjSk2inL%2BLfpuVOBiM91K6l5HZeHZzY%2FakpvH5P5foToke4UuzXXj1TveAC14MDNQAWSTvhX2T4b%2FLExgjTPBl55FG83AuA7OrdRmpC3sEQony8bzZmxibUSv7V7Om027tYC49CRzytecz32rQWN0up%2F3SVXHQZe38VDrN41moEYZI5g489y02o3nL2WADBwfEgdQrJu8M%2Bb8xsgOKciLjVnN3nEkHil1TAV6PEVzez0zQ0fGkMg4PL%2B0SNVwYuqy7733sYdNEAxqy1NyjQQ5ptDImYTRXGstUB7tKmnSsESTMplY8Fgxjheruj9T6znJskbxrj6GZQ%2FJHxMDepLWSwe5JlksS4NhgZ8D95s%2F0TToJvArLyssd%2FgyT4PZ3gjsyVv802HMhai9xAsBlePLZjJjKvpkrI7hiwnw4MSATjXDanSM2Ye5KbsDCV18%2FQb0%2F%2BWqmx%2FfvoG7mXrSVOxK%2BPlHbZpa85OhRKlpFLxIsbQuAERq5tZ9rr0KmvSkjBXxLAUnR0qL9aZJjjewAeQQPkMDtUd50uZdNMDia8vrTld5Gbqzm2UpYI%2FQZaABGD8ikhSg8mb1l09Gs845U4t9CZ94XCM6s8ZhWFZqn%2FRY2hQJuFse1jMP2f28QGOqUBS6pN2bIm7ccOAgC9T5iTismfIrsq21tHrKZ%2Bz1EA%2Fo%2FpyOfffjwwc4jvm%2F6lp536Aei5ggXHuhQuwJe4CafvUvkdu0%2B1qgafK6L0g3jThDzIOCGUAPQoq3LsM%2F5U1zTJk8vvpTdU04kvMHJm4tb0eWQeE0cLAwWcxAI1j6BIQv%2FnOPdCDxbzGjwLNlpY3ak0dMDjk96%2BeDRxJOBeYvkUvSNq531A&X-Amz-Signature=ee847850c1c24d466bc3ea71d58147aa242eac4132587bca752422a2dc5af894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R55CBDLT%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCsx8EPoF6A5WOfTkRw%2F9rpt%2BowniPDAk28m0yP88chrAIhANFORahfThejgOOqRPVA80MMKBYEkYCP%2FNk%2B6hE0ei%2BlKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBvFczYhd5UtLYu28q3APXgjqNQmWtD4cWbTn9o%2FFHI6zo3RDr%2BvyCJyNWnFNBjp86sD7io7Xwc5Ri0hjlpGhodujC%2FYX1YebhoNqiKQEhfeBPGbDeHGYlMeYMO0rd%2Fqz68AwPeEmXlyd9VyZyxZ72%2FF1n9csb2j2%2BR0DmClckNoNSkEOIuLS%2FYda9BLYChdZTZKPBuxflC%2FDnIvPcyOClkwVFCi1bPchWtTCWinaFq3%2BkpCkgwRm%2F0GuRSEdCtWQpfeTQ7ylwxSRbnLDfTmFKGqWj8vF7KJ6%2FvRXFj4JTlN%2FM8VsGK4Hp91g6S3zAznXTQ6%2F480yuAGAHundxtXaDQwLZzwKUXeELzu2bUxhMYIWo7ce25uRlNIzCE%2Bk5fgA%2BHp0cHgmGDkhqNqnE0SeXwuVQKVRjx9N%2B61BGw%2BhGrTYtQunNCbYh2%2FoB8zPmXi9Ea2%2FBtxRtciIRGbdT%2FF%2Bn%2BNMHh8ogsPWhz%2BZx82tfw7Ht4rpv%2FtbudGtWk%2BpQuS3m3MOw8GaNJT2pxVh0fIH%2Ftpoq0NOzpbJEj2JmGQJxtG6SSvxo84j%2Br9dOelggkkCAyhtstHcyDOzty78vIguGSAdR9FKy5fEjzBO3JJL4b7WCRAJRffR4h0MrYDvPsA%2BrIGVDjAeMRVsmwjC1oNvEBjqkARQuBh6mCUTulo2lwywKMx3Sr2eo444v%2B5i%2FFK487HGdEbT1978HQZh%2FFeOG64oQ4aIV2AaFpdQyRIL7AYFiWwDHkFtLldncDrmt%2BVluxG3I7lbCtuBCTq9TOGLLFclsCCk%2FoHM5JkR1EuGWdaHsj1Wa8T8glSQpr%2F%2F7o8sgx9NlYa%2FdewVc9QEZ7HJCFOa84Kewx8kfPyXzRTAzgzx9QGj8PYZT&X-Amz-Signature=f8b359e6d6afb9196f9d30efaf061ae8e2f6466a95183a6d4fc53c9bdfe8e863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=900a19d56eb7c3e8d1158c42f7475ff84060040e275818175a99caa66c6d33fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WPQSG3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIFFdI5%2BDOs3dAn6HPa5t29woGbUP%2F93Y3x1%2FNJJOHFoQAiEAqvzzurh3ojjXMYWL4gPgHhplsQTniA60u8TqD5OxTm4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVA2XYyxlnom2q50yrcA3sVjbbe3s1BZZmx3%2B5sbLTn948seBeilxD7K0FuCq4HRgAykSwka9pGpTd4uFN%2FpptB6Y2cOe%2B3yh8rFbGC42UjE0xPiyCZEJP7YRu5Cvyk8Lz%2FfmlyYyc3sE2cETpnj0tZsdhki4oTGykZkFpk%2FxEI75OJAIGlm3mpEgkMtAMZ9DrXBZJe6Nc5We%2BHuPZpKJYxlImiaJhoNRAJ%2BIRtO%2B7JKo52ou0nxAcK4eXL3L4OjCPx5RhIDcOtKOJT%2FJ7lGVbOgY4qDWdKktbvbalF5yGKkrQk3z7jHW%2BEkx8SOVsn0s31Z%2FYVWxouIOBprDBzhsNE4mR7txOY4iPcVg7%2FuSa01hKlFCfF91eztC%2B1FeuM6i%2FAiECW%2FKx6ArHc%2F8DJ1FbYKeMLQvbLJlceiYFfV7RDeJolK614gh2QE3k49sVK%2BEEc8jls41QykiSgIaqRYRKnTROziXu9T7xNJcG621JqtONXsfYlx3QNA0UMh%2FJ377sFkwwME%2BpTS5NRw2iO6cMJx6GzUVqaDM%2BelOJ81ca%2FaxARRhfvJtlpySmYu9hV4O9fcKA%2BmMnU7B3Ye3cLptXr4ZgnTdzW86PKPXE8bOb8zqh8uzg%2BUeKxDRCKR%2BObevRrr%2BqHc1IXnVr0MMig28QGOqUB17QHgE6jbsGQecb4rhjM69xa7HxlHEvRhsfvANxP%2B1FkQ7m2c4ZjURSGuejx7KD4ue2ogdInw5nybrqf93BMlrIFRlD%2FrhcibmUSi6N5ghBm2wyOgrFChtG6g%2BcnlnOH06n3nG1DgcrmoI1SQnoV3UIc5m6xbjjKbsblpc7dZuTuZuZXrXlor8Eogoly%2FZRFCf4LISUO1AbN1bzsjQFnQZ%2BO%2BUqi&X-Amz-Signature=4b4bf8a5d11b010706a582ba9fc8f8a4a7283befd4c1219f5061d13263b5ff68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=f954220fc7fc4e22479fe5269170da9f065af103f436b85484a47975ca628c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCWLIGY%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDFKjcsg20yNBULn4kJPLIUqxNA8vZ5747R5%2BngnAHtYQIhAJsHnbkfgEIqwAycFvarA9k0NFaJnie8ubL8It3Pe8s5KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwY4q2vUuS9XPi4sDYq3AMq0Lylfxe0zwVeVxGhNN%2FL7iAEr916c7FCZbi59Sj9phzkdRqL2Bwn6Nz0pZJ6F%2Fdohb%2BSDgKgxxtGNwEOWsROo4UvmDpzs7OuNyJLSWIo1Wd4yaEEB0fGb1r64zCxuZWuE%2Fy4v3Dq2%2FB5vnEEjmx%2FBxvjOmQFqI7m321Mt05Qj7qzX148PPqDMf8iqLXEnihF5kP1ay4CvCV%2BfqIRiG2nJWX%2Bh0UROarYANZ7c2viVHA4oU63yUG3NgAz0PnEAIqNE3eBGgxDlj0%2Bvt3ajBOIV8w0renkVy%2FMAXoK%2FJ2d8n%2BaByCo3emddgKmo4QE2ULeXiS%2BwzT73V5d6sXsOJ0q2Lm0W4zYfO2NQ2JDB5yy2hdvtifqCN27ghLhvYTi1hSFXw3LhRRU%2BwEJHXoao5Z9xZEXevz%2BFsB07LGgKdMAb1yG0WgzZl8usvBTtWOvCHvpV7sSM4inGTCVezHBRczUfLeqUxzAXFKuidoNvyza3P%2BbzJiALdUr8DlDfl7uxxHkxMirPf7TiGg%2BGZ3fKteTHF2ZcRVYGIaiq3V1vAkBUpxVaw2%2FYOo4LoNE9q4ii4AX46qHLWn5YGUXMyCWKRRXR7rh1R7D5b4Zf15Qm3ef8D2sjwOLmZguggKw3DDHoNvEBjqkAf70DmmzFPwwUBVa7sLFVq0twcLofkbbJmER0ME4KgNDq5gqYqPB6utayrFFlDwNp67et88kEesQSkgUl8VElPasJsL5ISgsJeGrVogFsE0AT0sFswHhQubhpybsei1KLWoWF4kLyFXp2RxJiFjMQ43WtoBp6XJBbH5r%2B1CCVU17XhxF76U8dkQ90ZEujzhqpC0P6w%2FOtYuhwiOC%2BWBB9MwWgbLE&X-Amz-Signature=c0126569213cf829269addeef9c75025ac3134bc5026e9bae4df1d5ad5a9b6ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=3ec75490c5bf3d04f1a710c14ebe0e1d2918c6deddb94eaf617a3e781e44a255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JJGLB6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCwlvnNpzUXU2AFK8BUuCJPLM9ERZqNFYMji1ors2kfZAIhANHscWW5OAG2mKNpfIEc3rpTxNVpm%2BIrXqMV4KjUyF3EKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNfyvLJUcq1Cx8YAwq3AMDknTov6IKGgEX60L0jBWTN5GxgVzUf40pNhRDxnbMXStwL7SOiWeYlTShcTZO%2Fd%2FWb6PR3uNJKs05ZGvNt6Ui6G11k%2BZj9l4o4ED1JzLoX0VFH9zbwmUxT3FEGous%2ForO%2Fh4Za8IVgNOOado01T%2BvbbQQADZ4nDBsZm%2FwDOQMgjYHtxKr40ugpmzw9MiYjq0YaWv0jhQESHqpGOMffj8xJlJd6rEhJZpfKUd6N%2BfpWpvtSIaLxe5wjqzBgRxYKMNDzinGyhoLoiZxVlYPd51r79K1FNB4MiWk1R1HzqnKx1Bbb8glq6Rp%2F5APBeOd4RgShLpDP3ermD1K78nzKpURXYPIzDxj8SBOZvRqDX2JLBoEfYl4VYQ0xjZsOB7m1DnH8FoVpp%2B0Ey2nZOdondreejiy1H9g49YkW4ggDmlS84MZ6zO9RVVrM3OpzBJI9pqRLbKycUdypdJefh01%2Bm8d%2B3%2FLWAY%2FVKv3GVWJyBCsMleTuGZupWoHk4%2Ba2BWGRkUt0ILk6xOfGC35aFbF13r43XJE8tBTZ1DyJzHF4mnn0s3Ljs1Fujl7DwA0i5WWTIqo1RMfcNNl%2FuR3TIbChGWkKzi0Cy0zNVqbuj3NiQSwL5igjE0kkKHg8ho8VjCLodvEBjqkATsYWdaeJ%2BOQ%2FodskGqBTAG6ozI%2F%2FVxNzP1JlLd9nGCJ6182i9Y4EVdGk8RK8izT1ODKDLD1LlVoZxAdOS19HhdViSCQZCOLleWk%2BrQoqxZ%2Bk%2F2KlQjEfKKt6xjHyYsM61hKLtX871B8QMbtyutBAqOJdWKfXxPlc23rhMbd0cM6AhZy3WKwjozS94p59ASMsiq%2Bz5K80QqoNPO1RdzUya0PYdKp&X-Amz-Signature=ec96f168ba8bb5c3049882fbc85808db29bd7155817d474a67fedf4acf7f732d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=76d42118c6db35285e52829366a3580edbadc3cef0c501a721ed5af40a05bbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FPLK6U6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQD6zqU8s18kTLUwqG64s%2FpfSN%2F3LM2Y98imhMYrz1XehwIhAI%2BLj2IneoZ0szNMJs09G%2Fka1ac0qY8QytSy58UUlwveKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYWxw%2F7kbRnRjBdHQq3AOIu1rRqS4zIr%2BMSXe3Pi3w%2FHPHYQ198hnnOsKEJ%2FHoVbAJCrwC4noSdY4cbE8xbA26KbE2vrsWMD8enOWgf9FMSVAOJc98sA6uq3mSciWzAG9OvSpgsd4SBhtcdbtGkkPBW8d5irFeTvK%2BUKmg%2FR%2B4n2Boi8djqkIKxA%2BwbpTJCwT7CVD1gREViuZBZj09pssMrWevxDy1MlIJX7Ok4lHkkDUJ%2BRA5ssvGS9DTbJm5Owbsck36eh29fVPyQiVPp1FIycgtSQ94fFiEN%2BfvDalSGC3uwhJrEOI8DkGn442bYsaCVrKFikPuXkKt%2Bv31znhiFgE8GANAubwiEkYqgLe6kO%2BMUQI4bBgLS5Xxj737cLOk2ObC7UoePusuZ9h0YYCfkJi%2FR5qV3lm7vcHKDIMDl7u1%2BNV8z7dA3I9JWVoVY3EE7xt%2Fccz9W4x3N2W0K2dz3TWRs27QzemO4bPJ3L%2FqP0Rr11kCFqlFGfsOGt2keD9MrQe46aJ%2BSeAPBT6ic1z5Gwa3BLfQ7y1gUY5tjRTHIkkfCjrssSmL4EM8THKYvE8NwSJEGl8wBXzl1K2YkQGzHwGAOwV61zstVne7d5OmSCMADSsW8rqT8FP%2BXcEUOjGn0eFN5KFlLwp%2ByzCWoNvEBjqkAZn%2BOKHwYvQgLsI68mRsRNVA9W5wVPhzksMufnvHx%2FW7z%2FNuj%2FwdWvu3qgpJVD3xH3WrBPlDAr4qCObEfG96WJzTVT0gV3bmeFTCY8YkgiuhsCbE5aNmOlcWDQTS5ASalhj8vY0oxxp%2BQz0NFh6f%2BDQfJBUm9A1iyIcK6MhYEuAVbo1AHJC11okS5L62gCYJto%2F0iw1TTagKw4YTbHYWFGnobhmC&X-Amz-Signature=5d0105099aa78353c1ec0323fc886a30ffedae70bad33cc31278d21599c7514c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKMFY2D6%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCkQlBkmHe%2BBrHXAYAYrpfDE12Opn042SG7oObu9cqx8gIgORhmTz6E2yrAB0u1IER5xCuLdWSuL8xk%2FNutu0IScPwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBihxf4eWgmGgtDVWircA%2Buui0NOlylct7SCxyu5FOkCRTvh%2FZGE484cflNTCSL9%2F4YjF7vCQQtCypuMQJFZXqAMIaOjsxsNua9uwnvTLwOtPCKhlaVUhxU%2Be2u0elXb%2F5IKmETj%2FeacczU%2F%2BOXp561dz1GiqW%2FJYUKmFy%2BFAxDCKkEsIkBV0tGHrztSHvrx9TjuIaPWYTt5ssT0rMDeMICSNhy96LXS9SLLEvmQWUt9g5%2BhwsRlvDw0Rj%2FgNPwZnmXzN%2B78RDdl2jKT1JrltUgEkZGxbjG2eX%2BrwOWkv4zOcHVZaJZh4%2F9ldZ0%2FhfqNyKlf1lRZJKJt2vzJvp2%2Fu0HzGF6RbPl9HdNj9JuDwBbva3eCfYCHq7OFQABoXCTA4E%2FoOuXFYCzw0MVObUDvnk0dppfbCe0VkPddMb3b%2FbvtJtwFmse%2FcIheu6FPIIbK98eEuLLkdE5A11%2BqexltP61MRegZu2Ctc%2FrvlCnufdsnTdYJxAIKhzaFlATOzKrXy0Kk2GDHF716DhoXpZjrg2LNkjjCzp4TKlYYRFzeulDQqiuVCcpyTM3gtPs%2BJw3Sw%2F%2FPEOFVELx4gzRPTz2RAnn8Cd0YyoEp0IanBEW7Ph2xuHLrp35qcXKjuxS41rD6KlMw0vOAo4iV9Ap2MPyf28QGOqUBnmwdzyahx%2BYyyquj05C%2FXA099Cy9UGR4TpOlafpW9dZ0QNpkSFAV0iahZQ4sz4yXq2%2FjIPbL8FldhPdAAmoFP%2B5rZrwPRmFnQ5HnqyGRkOgqvfAffboNfGsQ2AX9H9Mxa7w2icLuqTWVu7AxiZbS7Lk3aB6MzVff9%2BMbcm7OxumfNW4UTSlGbMJfHVa3xwDyHsewGPOde0JWb8psRp7OCU%2FKDFfj&X-Amz-Signature=a133fbc0006092093a96854957323ba70028561d9c3e78990a9ebd70d7db4ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6VIJZVV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIB69EHEdLrnfFZGATYWM5rWW1S0X%2FZguot7sKmC6GdaPAiBEYH62%2BXI%2FcjAE5Ij1hJF%2BC9UujNrAWrGFJEdVT%2FHoayqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFTc2UsThDRC20NlHKtwDBZmjEmKX2eI7jviM2OAhNFbSPQC6hFJBRVxfLItra3F4q5uXltC9CK2cNcREt2FMWATJm8GbelUfKpTyyxflzmWUfCxQ2BOxLwdk0aJReOg2yCla%2FoonWe3tFnnEGVRw8RMUm8hx1wAR9wCi9VY4xxjOgLIG7%2F3SdV6Ps76d0Mm1zLrAwhQ6g9KG2TbZUJc0vGe9nr4%2F5ZEM8S7fFb3fOQDd9VCqIhH9KUvEsb4HDXNlN9HGdlU8iCkivt959j15IulVrsgmH3v6S7Y%2BCW9yVGiE%2F3Af7zM60ohNQQ9EBbaCCWHMPkFhFeRDsnmRZkDpJJNH%2Bzgj5WmW4Ef9orU7cSDfpJ53BaA%2BR7xxmmibfmHZhaB2Gt83a45wR8VCk4J%2FzY1R5teTxeFS1vZnZny7E97FKBHVxBttXoR%2BweID3VggkfRO88utwNO1ZoxqX7DaZrc6v2dmvjIbQH%2BT0mlc3R2jW0IxTvfdTaJ%2FlAgC5PKXxo3q3dI01EK5bmpL8ahVTaeYiKSsrtXX3XxPGp0Hu75fMOwNK6VOF%2BZ6%2FB5zb1EmLw1ENXpxsB79iMPpfoSQCIBUrIYGHMlus3Uir6YOD0IoaS77j9IeT1DpFRbUqN6w2u1%2BU5tXl7QY8mQwsKDbxAY6pgHwpZ2JQUaW3NnlnFijFPBo27Xdc9LoRxYzKIv8dnJWPO14eBux0pL9SaB%2FwKKFJVA6rCYFXSHtlTXmoAXb68cgZrnrkvhHltVBw72yfSmqGoT%2FrPTx6MyuECv0ZCeSjR%2Fe5G9uz7r%2FWdfmk0JLmXFq5Sl2ZTFBXTAh63IRIjV5wq0vKuDHWOwx8y%2BaRaKOLwy23fiyNOU395H9N7yFg66KG4Q8iN0N&X-Amz-Signature=904f5b0d0a598ad7e0574b86589cace6d74d4ec85bdd728356ef13c5be4557a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQWAG42%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCQuTz9zHdpEXxkWVPGv5dw0MZvwiBwd1bTZF8U%2BjOk2AIgP32qW0m3%2FAPmws4JmZBy0AkJhenm9Wx45XA5KTGK9UcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnN%2BswdePd0dbqt1yrcA54UIabQDc%2FKnTNt7tL5pXXxg1OmaKXHYHTA8QB%2BrhCxUxWQaGEUV4N3kbAuI1tWjV5ZkSd2ATtXvuYYleiKB%2BgY8RKmKPsfIifFK1GQJK3dyBqWEDXSKrpVvC5g%2FwBFoigJn89Vl7SSybFRIw2AOu8z3DolDafdqpPuLEFPHZqU2HrxqQ6dSJRul%2BA9vp3KIvdee6NOzn90Yj%2FxTJ3i3M%2Fpb5Pgl3ndduGbL9lw8vQ9CVAyUhBalT9pB605PGJP1iYmZ19EZgQY%2Boetro4TT7oWWcD91Se9XypsyYKLYNKjPrBS4WlyxrIUgIkJbhJaL3ez%2FUOAyLqHx5lwEgBamwCAP3bqs8Idrg9GE%2B07L6k5mHUYjXgzPYsW6gbYP%2BlBEEf74sgx0O0fhDI0j2YUOLgKlhb2IgWbO7NLKen18Zq%2BHCN0z4207eE3kOFDJoEU1Ghr6zmXWDABHpgzL4qTCpTenQ4td82%2FNQ2OOMyv91I9PYvuHTpZn1RyiFex5glcCLaDgtI%2BDH%2BqxT1Wu%2F60Nv5vEw6%2BdihilUmviwVt%2BEYrJeGYP4j6yL9YpYsNiZsMsk%2B2MQ5XKVSSGaVBTeaRqqvisfVHXu5abeQl4%2FWX9VjOk8XoPOB7lrcQ2D%2FKMOef28QGOqUByD74gO5PfQH%2Fy9N3CN1HmZ3AeNyGi9ZUZ0e%2BQRHoe8EzDelTZfh750rdbokkUlc%2FaQTqz6brEpKPcR1y6oRhDl2LTdSva34r9N%2FbMwWUNo4hlwWIaVCJSCGsQPU1oHFZCWETojWwpJ%2BWjz0XSLp0xTBBeYp3U853nT7SdujcwqohrTvMnSO%2BvtwLnVJ2oeiyP6RRbcnsh%2BnuR%2FdPDmaIk%2BeyxIrs&X-Amz-Signature=7f66b3a6f7edcf72ca0e3567848299511bce4e7f11f03e935b3c998b4522e30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VUEOKMV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEtXa3r%2Fmrrj5K3Zhhh8SfqzwNi%2FiQNNb%2BKVroE1QfAvAiEA1A6Hic8J4yocZWlFDAz0oevMefoKSho7qev3tdEcGn4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKt0JwUtOfxEw1x3SrcA8Ifqr%2FQgJ46XTZCsge3SkqPIaOCWotjwQMcZGq8AJxAsDcWwjKo3OvPtRWZ2otdd9zQpRKKC8bsjJhdTcIvbz1Q6JeEcjRATsOMeJ1gHJXNxW8QReh62gVUvgM2LhsC9UMpanvWssXvYnziWBmJbeM3qMxM34iGlL4fk5wu5nxp5XDi6NIMOPRvsgmqrr0ISNGgrX6nX2szAJlWTQqLE%2FZyGp%2F1fzZJZN7df%2BAWbUzSjmhR8WydcyO2G2JXPN1eBoKWOO8vz%2F1nuQoE3tZmeZ2Jka8XEVoPWjC2l9DZIPvBYhn7CPhM%2BLOBgd3k7GTYf%2BduAQBfKszfaAhl8zAPtxZEJ8kTizCqhB9t43gK5WVVI6LzmZLJJVjVHl3gjHIn%2BSjXLFaMna0jBIcEUGDhkzGFTRIL4Hu3YsrYsV%2Bf4kBP6jfaG%2BMtFOSSJPvkn2yB2LCrpc2N5EvqoVUyGRtsCOczxIsqOIyVQ4ZwuRclEkoDkCgeBDNOfL96Ora0UNp961r7zmvkPlr0%2BuGzm1Yt%2F2i%2B19cHsYzB1wAxWMBy1FYh9V%2Bb4xYnjsneaO8I2EhsyO62gGTYz0ceOXcjqOHUxrxJC7u6pyQbBgSeKkqXH%2BIxxJ3rHbaq%2B9SH8uCDMJKg28QGOqUB99diMTuDKOFlF%2FO15S0%2F4%2FHPcKztsa1YFcJZO1vCbVnTrgK9q0eYZ1qkTNPyXVZofycKeh%2FZBmDZIIxU%2B6PrrUYhp749vUWbI16JR6Hz11%2BO0Ftab1jK7dhnhM5utzvuJvOYjPaL2wnBEvsJ28sjDYGQDvZPQEdTcuQjPgO7uZ8xWtwuKHp2avXAKoSsNHNqxT46qjH2tM49ZoKITroYMU3lY5S%2B&X-Amz-Signature=f70b6a00243f4e3f936f70845e7447a14c866327b87756bc3bb7fa6521ea33f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=8c8c58f7a856f00308cb9233fe8c0ba27587f0846c4391eb7034be0a558df43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VBIAW53%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQD71T7nQ8ZqKs1kOBUoqx1TPO0nAIEWAeDRX0VEa%2BjytAIgQtDlYF%2F2OO7Od4LqOzrsc4C8BDWaN2bdrGQA1tCRzggqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDWlsucKiuVWd5COPCrcA1GMQT286AEet32mWE4QrMMEfmHD8axzmnuMeKGPfQj3KiavOZ%2BZ3G%2BEmDzYEiu02PO3YjIsyjVtGqQb9s75AXEwkdmumyrLY8PR7ryOouTX9mrQH16WwKSfXE6lwS051z1qgrMw75LcfxEFvZR4KPeTiYBLhfF6y7Ktjjrlrm%2By%2FordyDzX8OadhDT7cYiUC4efzu7s1rfNBHlMU5BRhwnAUcoruvCcBlzbYdbovtTOky9QP%2BrOhlNA3R7Tmw2tdX1ga3S%2F5E7eXwcGo7dladogmKmoGpbyBG1nvUdNpJgmCG1qqdEbMcdIixu4GC60fTYzZT8c2FBGD37O2ov6fWJGyfE%2F7IUN9iDXtxl6%2Bm8%2B6FKW1%2Bsq8Xtq1MSSN%2BmQ%2FF4YUh%2FK7hi6ic4Ac8G8HBjjtKAZIe9vbQxMg%2BjChR7cUbdWjXGecyYLkdFhGrlWTKxcrTeC7LDPSuY%2Fh85XqQAJpjHxN6ECnWy%2Fh6SeGCE%2BwFaPLLBjNZmtJioyFgndjCe8Vveepy45Det8ePI0XboSqlgEJIEsei06LbgSmenX1%2FjdSRl4b49QXaVNRfdQFjqrywZkx5vHM2gaTxNqEdmBt05it405UQeczVmdqfEm9q1ZnHkMMii0UEqlMJyg28QGOqUBVRNvxemGkr%2BIcEoLdet%2BefoUvbL6lWSQ9awOfgpTBzD3FSVVug%2BVW51ceV%2Bff9e4ON%2B8spVF0zKWLW6ZUpRSwBYb9VonSPb3FeTdDFbbt41k0ZS4QYEcLtd6k%2Fv2%2FH6MQiDIhQuMduvw215JsyMjUIAWNiAB2vq3paaOWWumSf5ALMrC7dzzmNgqAaFBCoPU7of%2FhVIqm7RhX%2BAYZF4HVuDMndtF&X-Amz-Signature=6ba23a0d5c9b7d706744537ffef8e41ced92c1bfa6c65d6c6c76eb8cbfd8e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=8fd41e148cc6015b918f4bab6d5ebd9d6a48c03bdaf3dbcbab96a67afd6fa147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=85e7c2c0ca40c5e9f32669debfe19e9e75371dccbe7b7c45114097fb1328380a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=758de008fb5656f87d7232adc691f99505843548ba9b90bcb100a2abeefee6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=5a3daa0c0dec18ca6d518f60c1d6ac070d7527f9d8188f80e9653fd4e131d448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=06f9a5a4360a8b93a39c6cd2c9614401acdd1bb5472320f8376d8fbf47a42128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=1aa5a7e1aeefaf8804d5f5a3c05a33a664208f3e68faaa338f39dfab573b137f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=758de008fb5656f87d7232adc691f99505843548ba9b90bcb100a2abeefee6a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=fb826295067984ad74f0a6b01466b8cbe83c57d4d72106e420f58ce2c25c3597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=5d6abfb9b38ee4c77f360de40c201cc677dba08d70478e12d2f7b89afcdb6018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WELZUM3R%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCm9HqRibEeLHYlOZkfPejaqxHU2hMFG1WElWrctiEP0QIgExQk%2F36qqZ%2B2sSTQtPdcwk3hITMYeFCbpG6a6JJ4BsYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKszu43PQpbaREFZircA9eKfNYQHNed6IGUaM6%2FwR%2BpwsulGgpPQSXmsIDhJ%2F%2F5djpIYgIqLsfs4vL7jHHrecs0xyUZX3zcr0%2B%2BfQ4Js%2FKlbC6Uuv5EV0tsh5AcVCvhoXJW4OaffXP1eIb08fyndd7Tqbza6q%2BKv6tcE9GhkqoaFHYHAp8UOQAP%2FF6SqoGFZycNj7%2FFFUvduRn%2BW7HyaSm8YtvrsBbGi9zfmO7fqlW%2Bem6Xh5r6alCCLjU9VyjePC%2B7TiDD%2FkJU1V2Jf24SAiDhExvsNUtyuoxvcl4s9pEPgkFpXGFHv6VXcVhf%2F%2FZUGXIjSiofilRn4pPkbBrsRDeD3MNfRXhL4aYWNSwZCkgrNeFLRx0SS9Tsie5YgLRiZafZ9n8l%2BlzQyVZhYimoRt3X4LoIU1zMzfL4xWhsg%2F1yXC8TZaugZogGRuzcLdChmgW4PG06MNo5xi4panbnYNmTKAfXrK%2FsET4Xjhv3HSjc%2B0t8GcItifYX4NxrFCDj5PnPNM8OcrocWwfqgcZn4Pr%2FRjSdBLcpfy8laV5ZIGZCLaZalFw7d068h30SCQb60cxVialze81cIM3bv5dNMbO1xM7bq44WiQh453i4xLCgsr8rhJYcGj7hNXuCmqwYVAip0%2BgDCXbpu7NsMIig28QGOqUBwTAKrrEVi7uSSTFXbJrayCSl8uQR%2Ft4hok%2FKAYhPb6C18aoQWF%2BjCJ2725dtArdWL75qwdBW1eSb5kMZXrxsQhLKYFIbr26v5RQwyU0QnL09faxsOUizzwTJ4MUADvat84UgxW9EDQM8eJqlaBq6JktIvNf2ooQd%2BcBaURG3LKCMWT1kBWl58GFJMVoUiYKKLBsoJTK5kLokz6BAPCEOt8YU6yng&X-Amz-Signature=83ad152a65d6d3e9673c5bca3076b861ce293c9eec896b428f9d45328987fd9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
