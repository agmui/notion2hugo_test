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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=6ee18b0e53fc859f4a26bcfa960b49587c405bcb37319704ee3e6dc8c1559253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=df2b648e1d6cd2dfc70118c25ca322417d8c723e240cdad035855330e248bbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=38a3077eaf6b21147403fd8a518f985332f3d8655e12faddca8339c285e19aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=d335184d0532030de262f14ffd6514c718c440f6174446d71a763db59ffb68af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=9f1549984fc692446caedf58c044d2164d0460f926babba7d7c4d85ff9a2ad90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=6af52b1e18ca138ff935d513a8609451bb27f91f8110435ec51c0228851cd89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=a64746fea7842cfe74cd1d0d99a2af262abe654431bcf04a4edbc8b3b8044619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=749bfbfa83f99756f559b0916eefdaf968479c70dd1d3d9613107e2a5192c80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=151f48bcc7caaa15850a88fe2556af16a48f16030c51bb3077acd0bc042a115f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=ba02646800d6f6cd8aca0bc4767ffea41f5a55d16a8363cee59fa758d8885fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXV2QFMA%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIdWtHPOIcvQkOI5K2DPx%2FM1zf%2BkSoK5Izw0jXlrVvwgIhAIIl44WOMMxrgi21ZLc%2F0SwEsIk7LFslrBG3K90zZUzSKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGTD9QgDfa3FSgFlwq3APmDQbn9CssM8R7aULa6EXajt5AaLNdHRh4qKZpYzfYvUZw2SyQ2ps6XhMBoYvfxr93MLxRNIzk1wVd9R1l3akWx1wBwdqKREhkoj8svSc3Onb641nK00yeSLIfnJ%2FIv6RV%2BwduUTJzHzFUxESzBBut7zKMibzBZ8DT4o5DKquiEpdGzvpLOkOXBpBH7xHxSE63OkmkscQ0lKOTHOg1D%2BIT7MQdSsDbk101LZ4yxX4bdABd5fUh0p2zVGKS81wnXC9bvdLvkxk%2FMG9sxaRRRsPQIyF0050S8jlV3gW40yj%2BrTijf%2FsJoamZEH%2F3TlIcvgRYhQpT1FPzHsWb54QVZlrt3U9YeM%2Ftt7eNgsvbVp2ZJf9qr1i6AQCDa5rFaSL%2FXwD9u0%2Bb5OCdR6J3phRcYo913IS%2B9OGfzAjjuZPy%2F4Ji3rf0k32YtlTcCJpA%2FJNTA9Uuekn8FYgARpxQRP4Kdz5UgKjhX64Nls5znrEHq8qVfRztkjIMyMmZ48OwfV1wxA%2Bp%2BUXZbox7fKkljrNSKQH7VWBiStsfCpxKsqig96YeNRx0cQwX2Nid4i3nhTFShs3%2BWVvTrgHSseqNay%2BV147H2PocSAcrzATi7%2FLs9d6dcmOicLdR8OCDn%2BusjzDGwt7EBjqkAc3DNOdtRkp5r%2BVovgYRB9DUdGW8n8jHnl3UxmAOKOrrcQqAY4bqjY5yOECi458CR9jaUYvcf6%2Bn2A6ND3r7cxeMDe3M%2FPRCxZAIn%2FzSTMLjyi%2BkFgIg2PLrvem8wA%2BBKecMjQntLlgjwPh39YQXZrPl2DCLn1Gwy3%2BahL9GNGtwJ6sSJwtCP76m1h9JKrLsXuYpSwXpPGnDWVDl0%2FtIguFXwgXL&X-Amz-Signature=f01f9dc94a1170659c73da78e47fd2afc1d37aa4b60fac003747fa38a0927a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652NAXCAI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALeZpoRNMlONmjChOCX50cFF6WAStyPJeB9Ptp5cBgxAiBeiAkSDYme%2B76I3Tk0C7e%2FYbdZYStABLYSOm2LujNfXyqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FpolQ01Kdras0XEFKtwDv3Ce16Yoa82G87gU3Bltmdo34yj0aFj7wLvkf3Y38wKwOsbW7%2BWaWLC8%2BK43fLNV1wCTzZpsQHVQEF90fT27W4bM9xBha1O3%2BzHbR6ZmPKdRlFP7wETpsno%2BFlfke95hl9dau%2BsIcUj0IEJp5WhHzYmLUUcvPyjgX2GRMM32%2FqjEPg56T2Ks5dHFjYD3JUs8PQCPqIlUq1w9qKdfO9pRXxm%2BaO3nLTsNpcdTqlQDbHdp8DhIx%2FcDZKqpdh8K4ZRALp7rH5Bn7Twa2PiSE3LIGOks39PT7LQtuCm4DDxjRkwCMU7hW2apC38ape5XlwD5R%2BOdsYgpJIAP8eerOYKLmM%2Fyw9cyt2u4aJJWZ3%2FI7eUcxo7ADqKsYdSZ0s%2BZIAUVc5blyXUnn%2FVLYBHQDJyPJajMBCHS68PKQwygjXJQxGV%2BhuU6boWgzTzkMM4myCQuF%2FZWE9%2FFv9LUrXOt3I57ze3Fn9eZkATYWnlOF1UdoZzG7Su%2FkX68mmTOp52Crejm%2FnonoO2u%2FhceW3YyrlE3Ix30TKSku5joBLBg%2Fi0msf%2FigJubgOSecRDcYJSFot8NhvvqQcv%2FCSRmV4QiE2Ktld4q0iiFiscPQbuvEHifyQVA7S1CHJDWlIoFvfkwk8PexAY6pgHYNEKWeyWo0w9nUGlLbs8CBY2EeSDTiMKmcxBXlXZ%2BPoCHuwxgigVnUoAJf2WkyHqapkx9yREmns5ShCCp0UV77BOxkfmDbWUif0Q%2FD76WaOjoJQA4XJjbgY5lnm76DxThSd1WVs%2FnCE8ViV0mgqmx%2FvompTcA0AIWGpKQXPIamjCQg7AlryCSJ3Am%2F86sDvGcdPjvqpXzHlJsjIKG%2FqhJKkYgkGOR&X-Amz-Signature=2c803a8ca9db2fe554366b8196085965fad42bc61aad717fc375d50153c95917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAFXA7NK%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCi1DYpx07PV8WbOWRZ1C8HjHO1QV%2Fe5%2FK47N9D24518QIgZPtudN%2FWiqJB6hsCqRb9KiaBDdOX%2F8gnBhmDX3wAnYwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIaMhKHJlSFbA%2BUzayrcA91P1MilgyA%2Bz8F4tacdlwSA95b2oJVfhiRMt%2B9r7osb2rUz0LKuH%2FFb%2BTaDPLzRhev4a%2FKo8osQNTHJ2jDV2mdIjtq0GH62JM29rgR48Dnfw8zNdvV6zO94ugY9JsAAdjWGyWrCtqU4%2B%2BoZK%2FuvkG4XwktzEvqZdIBoJzw3zKysKz3%2B10cUCU2eoA8WR%2B5%2B%2F4doMyFD5CAP8muhXZKKHR4NHV%2BE5XTkobCy0zBXslKxlbB%2FUX%2FOtJYwJgWA0Do5qkHuViFE2LG4fwOu9VjWgxIv94uJcBgNQBIF45icDye%2Bha0ai%2FQJJCSBUwdVwL8Pv9kca8sazjYGzB5Ya82Ht6sjZIDlFqnI0MhYhlhHgoxrw7rdrUhWM82gZHuPo09F%2FAxwjk2%2FX08TpXDevr030UkgijsUwu2s8ebamDoWnhLcggLveq1lPRcRa517f1hQM5%2FPg35bXee1U1knRr5qqQqXtshqM7xCgNofD64DSk4g0XBoUTJzoMqg54241TnyBWo6hzslpun%2FguVTWViyYq7%2FUhK%2FgDnIh7jip%2Bm4dP%2BRu%2FFYXJFtPaIPIpsihIHTubuME7MGGTbIshMxKydcMD6tQNy2NPWabgxuFPBVGmsBis9OQrADFsvDOH%2BlMIXD3sQGOqUBskPG0aQO2g%2Bqb2%2BVVOdRhHL1cu3kxMRCE864Ucd4vDYMrvYRK5kQ5Qyy3KadOP4oqFeDnfKsz4ZGZAo2zXlYPx5MFCzHKFUTJNG7%2BSchD%2FboM2hJAU74c4JbRcWtRuAnV0zBVznJUgSuFhCvNiWrOzBsce%2Ftkf6I%2BVtPgcvalyQLwSD5T6OTticHaAn7kpLQbxM3PncVVE6RT%2F%2BRQkz5lbaRIdf%2F&X-Amz-Signature=604a6a1541dc5411699931daa5349a5ecb03f59ef83dd09e845757bb103513ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=cdc5fcbbd92849ec8b8f98c1897298070b6f6adaa70de0d4b015406c6f1678c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574E7K64%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpnFT%2FB7FAMS8HEAPMe468JEesFlO4LRbA0UKn5Lc8BAiEAzX2gwjwAWL%2BXTrQktWTD0uZp%2F2%2F7qKChVuQ445VTR88qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxYQWY6FFmQwl1rUCrcA6iAlOdFV9dLIY0o84Km3bELxxgQLpZKsEOzHaojGkrbr4f61N0HA8L26VAAY5uTr8zaLgFz60q%2BaU2liV7Woq29aKEAAwmQJpsdgHHvm%2B30KFaefgOVkjxDSxfPbfQQu%2B31s1uR%2FBVZk7UeCErdfaTa9MFNaiUUsI2B2yiCHp%2FPgdhJBw9Xn2G4xbmxdVC0wxp35qfnvUzdwDhZg8piLrdx%2Bi5jfA7%2FEsMWCyjH3JoEnX3%2B%2BBt3Fp1DVaKMh6AV8BSInS4JHTqKJrKy2GdrasYt4t5lloLtYXH8vz3MlzejsYx8RNUNakjsVQWcsAfhIraAP1okHjFk8w7N7D%2FdoN%2FPf5FaAgPqE0p6rb%2FDHQ5F5Z94hxyfLjQ8vaIR3FnpigfUpzJaZyhh2mR0nOs4wB%2FayLCrL6EW7SH%2FjUQ1ByXD0Ia8J1jCepHsx4n7LNLCWu7JmZ5Z8VBundpnIikdXnlESx8yXXV8XgWGJgbsmyUZCDZvv5kIkdGo4UJjVj6K4BEO7R40sBX5LIR5eFW08ScpOsk9w%2FvbZT8yn6abA0%2FQcEMApalFX7QTEyjtG2jLTrQ9uLm75QfVdZ3lyuKn%2BjUIdw27RmIQSqz0h3EKaJiY6YFYlitqa2aPqLEgMLbC3sQGOqUBBIJq19uesxu%2BCJLiXD4H0PwEB9VyFz4Qo9PaPCng%2BjjbtGfi%2FUNSQcd8lSLI4F8QW8U3HBi0C9wePeTZEu1dHHfHn2F16aXsEmhIv0hfrvQ%2FlgqvQWcwKe8tunlszbweUx2cu819XIYOARO3VSvPu48BSCo5EWHypetTmgj67WXOA5D8ywuDfKQXFli%2BXDVBUC9G%2FlCukhvRzfP6XSTAwSdiE37X&X-Amz-Signature=e994e8a5cb8e4249c1867cf29ac50bd0e1d7d6f8071f20745f80fe4733e27b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=aa9d5a16b2cb4cdb09ab47e172ed3c64ca7d6d8990c333cf0fac3b5712b7df01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T46YGFK2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZSIFI%2F6lJ2opIQM5YpIuQvmx8GxFOZdrBAJymofUG8wIhANrGYMSuyXRsm958AHwkykOHOtsbgEfZndHp7nGs%2FF5pKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6S4f1sFKpOJbPw3Eq3AN2rUDHBndb4m5dy4lbEjlSZciZdAnkaA5d0lxNC5ukBr9PgY6ESABA7BI%2FR%2FFW9RNkkJMf8kDaJGEPYzco%2FP6VeXzY5RkD1IuWMG5k5kMabZEQ8v44IWaw9TZE76KVosFfAE%2BH3S59Bic6yT3sCVlWbrX3a3GqvxLcb86rPsdnIraiBqxKHZGg4eHLomCcJJqmXJAAUjwTpYPnWaJkM6vpFvoxIyw98VLQB6bhYRwaidLWBA9yQcKKmb3pyaL5LLlyCuiz5YSW9MBT8i87RP4vc3iKQcjIP8j%2BbZ39ZLP14yIaf3H2%2FOXwSSQMMjsAcwkCVhd2jUJ0BvTH5kc1Txu0drwCL3cQj5xjj9hkgYIg082puoccvefVMpFE20UOHivcyng0jf1ElGINLWasmy%2BCQfVSPLpvzeQXZ0xNpN7qrV9altP6AwL5ZUI1ByUBgjkuzO9heS6ASbU0osD0lyeUKDzQt6G8L7CZdpHsKH5%2F4K91uP6FCo0eTkhWL4UYhu%2BJjgeVR3G4sOK1i1xbTXRToUaA0fLtPlftckFIvtxS%2Bvxa7LMGjWlQ7FjANHX1lZbnjZwC6jpuCH6hIYTdbWYcAAiu%2BRhiZeq0myBBKm%2FOIisH1Is3tkzHP%2FSPwjCRw97EBjqkAeyZ4H6FsFJuRitmXt85zGI5kESJ7xPVgP2gaHBDrJaOFSM8D89y%2FiUZig7qzmFf%2B4mIT%2FVQobwYOGB2h%2FZu0hKBMYnnCA%2Frd8hudhJ5ueSCzy4ZtoB5sqRZ5lS4h%2BtrHwPLN9sw7AzoXpfDuhqd5lT0e9TlgeBplS3hlqGg7VA9RNvk3sVURVs%2FSzKgjcZdudGeub2oAsPGjnGnPaHhD3JK9c6I&X-Amz-Signature=ebd407071cc5fc11a12d5a0b604a37e6f8f8211a85b99066c53ee24c61ef9fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=9527e3ebc8b785b52e3dd863aec1784eb8fdc881466de66e577612b9f13725b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD53B4AL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDI0fE%2BcdxWI8oSxUrS2DAkwWvyvwiXfa6R8DaVZCfsxAiEA1ghOIUlwyhDHRVYNkFX1ptCR2dkvCstGctIbfzUpWj4qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5pFEIhcqV4XZXivircA2UqrBWwfuozdVm%2FKpqcl%2FxRUjeJzM%2BGkGmmVFHxHKsGUG9nNbdckXWT4CPU%2BTuSjdgSpBa0qA3dea4Dlk%2BzyjyXsMOvTURVnaEHMpAPapdUgWjWtlPLlJNHRMEiRQzf3%2BJN29bZ0LMwqm%2F07PpB%2BvQj6HWC%2FSaXE04pV%2B449SZ9vrABMjrQv5%2Fowz2oB%2Bui%2Fq55ErHhKs5ObOxakEIk3uEQ7yF16jaD1%2BqmebQ9gIZzxODmLvOcm7SB3RiLMruR7pWGqdR00GMSb0r0Uei2%2Fn%2FJ6qDPyttlmOnrxOAZRAG1L%2F4lIBK923bJBWnZi0YJbPg%2B4Q8Wwwnj61VJ2A6fvMNB3TPjGLf%2BLftHlKh89VzbQi7r0DfewECKfveD1UIMTn9jHMpxIo84rtdhW%2FPYpjIUvPpKPbZhy0Txk%2FHDUA%2Brk3mrk%2FHRRqy%2BJZ0XsyRigoMGcO16MVcNA4uFN1w9lEJSiCag0ntjbw4lJ8FqlF%2FTpNQWYlj%2F6UZse%2FX%2FlgwtMegC9pAmUab9Yokn5KnjR4Km7yi0rZil%2Fb9V6%2BCuGLoC9CA72JrKnhBZJg4o6Uy4Z%2FO%2BCtja9BP0kvQDOp4IsW7Wb77Sr9CrqCsyhAFth2ukH0VQkjJ%2BrOGCvhMGMLXC3sQGOqUBOHcn4BdWcD79I7OEWHqs%2Fa9ggVVZDEcj0Pcv8Gyrm4xplxGf6qHt1AI6qlYp3WzK0%2FYz%2BI9XpX9C3TKVmtznPeGHwVbomw5h%2F3DVe0hxslpfrE9Rrrq%2FRpiP1u5k%2BI2Naa%2B9YHSqBeMbQCEQRwqs9aGL%2BGaMItmIaXbY0XzXWaJoHRVLnaJqrBs0YubkpCNjHGcUP8lKeQ7C9VogRCJNu2igzjRi&X-Amz-Signature=52c26ea96314d8fcb14381e3eca0ef070e928265ad660c447e5f8d2119a812df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=2303f5f34f0ac8265c15f8a5b599b4880ffad08cbf930194ae88379de369a38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUHZR4O7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4jEOmOp2485wSKRzTOtEiotx65C%2FOyjm18D%2BFy4nLRQIhAMgKMloWWl1yV7hCn3D88b3uElek%2F4NLpINQbRwE7Gf3KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXRHEnTuVXJerAnwQq3ANlaq38%2BE0E%2BuBEO7kwRvaSnVEXemZW8%2Bwt3w376dWNilECpuPMCWZatheEq%2Fi77WhyuHPAGGdnsTq4f8FJcwfgEUF91HtW5Z4ABMWK3x8WJqseVbZvnshg0vuhjRVqVQSMiA1%2BUVBZlFAa8Sxooh6AlEI2W%2FHcbWZ%2F8fRAe6yJEUkAgM%2FhK%2B3uHgWo7%2F%2FIA8JYeKdWP8heK3Co0Z6cWMJTzCJV3QVbNJcgMjiqBi7YFqov%2F%2BF0wQ9zMH2p%2FWaq%2FWw23JycBbHBqsfj%2Fxzyh1BZhJ8LaZw2Z4vYo9z5NkvT1Uz4vrpufg3pYBBUr9rixuHFPo9pi7jhQbZjfCH8vgfhqvGDwPrFLwjpoF7XXRj1t5pVFogeZkB6Q81J%2FhPkUJtEV4XZMTiyMo49YRQAMyhJ4nNJNHVzAHN4unLLybjHta%2BytwvserO2O7Ot12uUHuM3QHjEKbwv74h9DFEcbm%2B1ud0GyPMZ8vv7j1dE7eMdwlSj4Q2eB5e1dUNyzf20V7DBpYbVl1nSxs8TFbxtPto3RByF7oMI1QYyPe3A0XJCaShpTU6Ea%2F8%2F2tVipkO6CRbLeOSMVnL4Wdp3dKmgu9%2F%2FOhSg%2BmZgV2DT3lCAYVuy4zu%2B7AUWqScDbtnkpzCVwt7EBjqkAXds8tSc4K5pHb8MDpESj5D%2F64iBUbSnvmUIboeHv1YD8HV%2Fdij1R4Z8rmNNW3Ls6daaWqtCAHS%2BoRJTOjQ3nadB8PYs8jCHnr7OU3qgw3sU1qbSZk8mFJcY362Uasvb3785e8ME4DeyfwHfI0QO1vjEh0vBN0UDwNCE4gtcQYB7QJ7vkGx4UEyU2YNkUze7J4b1c1wghwVzS5v9ZTErVHIKudzv&X-Amz-Signature=2dcb827e83c12c77b1e184e801ef8f12b6b2a840f881bccc3493b19e0e2e2d56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINLM2QI%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZHltr%2FK%2BlSXMOTlEHHutNX97NtXX6S78au3Ai0qwzxAiB0Ht36DByqdEinSJtBNXHhhgtrCf0SgFeJsdhIIxlD8CqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVgL670Qe5OyOC88XKtwDoTpIQpV5ofCWhVlwPpTJn8LXJHqSVycdWZH%2FFAIaPr13qS2m3si1iaIjnVv0EWkpGciPRU6sZ1UumjyKemQvQ%2FJcUWJqs3p87hccClpV7YKIz8%2BTkhckS6dXWJ8BUj%2BVmgcCLiV8fuxs5InKREtI%2BDGI27KGTyDoxiVqdU44dY6n2pa3Y5Cmhl6ziC5a%2BJAIFnwqVYXucTcvssLeDz2yxsHGus16iYV3mvWGe%2BWZFSm43usryOh1HHK2dsb8ZTlzdNQChnZ7nt26shrcWesCj8dQn5FR%2F6teyTt2ETHJoHef8g0LidfAiUq7RHUVGCan%2FqMZXTaVCpovBneKY7H4osYMNfhHV5hrWi238%2F3w2PTbE87juDWACqtKeRnTHfNiR0hUZiRxQmSzp0Cww%2Fs3FDF7U8HJgz7omApIULEGRfq6CsuR%2FsmkmsadJGhnnel%2FNzH9B8qcTnll78pFdaWgRITYnnRoAos2OEPGGOZVnf3AuB2sDFhNXrX8J3DjJ8taZqs3e%2F2hqDvof1crQJWtwmGsC2VparqCMzLuySiY%2B8uD7et0FrkL2dnG%2FtxHvBv8QjpNmRe2KoT%2BAwBqjzZ4jysXlQXom13xO3hgxFbSOMS0O0J6ilJJodCrY30wkcPexAY6pgFDBjaXHVj%2BeHhY%2BnYCrthBGGzO5aLq4GEqR%2FnKPmzFPVfh1v%2FAaOjJZmCOXdwvkmaW5lF7%2BVTqSq2i1dSNQv6WRjbshiN9k%2FmBRDQMiF%2BtaQhVmvq%2FXSEBMmSbs3aK3xBnzsYDGaSt21gp5sQPBux25etNko2Xs38%2BOlgIsHdsKqOKtKSXLnR%2BnIQyOnknZLnFu%2FPiYn1m61TUELeNeR88Ho%2FVeqPY&X-Amz-Signature=3fd9cd301bf6a9ab6b65b55df2459bd9121253ab0cba4470d4e0d17261c770a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMPT2HL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHMf8kw9QmqaDBlbNRId2sKf8iNHulqnmPBssE94%2BzpAiEA7pgVnMlN059YIZf7YRIT%2FxspHjAsFL%2FWTmGRunbN1NwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdjs2%2FGM2E9UQFBXCrcAzEIriOWFXda33Ei2PfpD1Re9iMdWneI4vA48slLn95wEHKjCZ93fsecyEtMzZVgDS0Td00CM8zHgWlb2b2bBwbpwLojPxIplPzm4c3pVLhzzlcEHVLpCYRHpYERH3hY26%2Bn2NE7aLtB1Re8oBIhIF38z4DBXm8CnCurMA6rvQp%2FudUCOcntXBuC02UJfZfPnIbglQWXZtvELiPH72%2FTG4O%2B7bNFHyRaNxJzIjkUC1XhHFlIMEFgL8lHf6%2FzoSFF5h0RxfcVW4RZe%2Fj9Q6ECCySyw48%2B7Hh%2FL2OJAc1%2BYgR%2FYZdyBZUBa3B5FZ%2Fhyui13cbRWCcmFWyDMUzaRjLXsxL8WdqAI9G2ZZ51UH%2FvNl4JqIwDoBR9a%2FwnC5gQeCRa2KrMVBY2OO724ddRV629ULaur%2BHRB1pOd17RzOZf0sCeAFdPQTBWy%2BUMHafhduRDcnAoygoGBZA9Kmafnb3hSs%2BTegbsIh4wUDm4sePZnDqIMExSYfJnpJgDsV4AlOcmEDwxIbw%2BZ%2BdQWlfxq4Q8V45QT6wUpn9PfrmmECUt0%2BMeeImAzTolOYkWdch9kMogkMjAnuHlGUwZwgI%2B49ylbSzQHSbcYUkclRN80fhDr2OTEVuVG3DgLB%2F%2Bup%2BpMJPD3sQGOqUBzgmkViaK7q8oFeDimf6QZjg2aw6N5x9MKDpbhCvO6QN9ITIZ29lgC1l2zrzhToqQxudy0ZaYx2%2Fi13HwXzpKfi7edPJ61k54JZMxuOWYRlvARLJYyDh%2BtvNnA%2BkfqfhqsK4OmstL%2F3Hwu4pFxQFDzD%2BYLMhazyhQlOfBXryVMxB9ibMI%2BMUvwHIXevZ5KNJJWBnV8p6UxuqI44dMvmWxGxORMd1R&X-Amz-Signature=380a48648431aa6b8a99990a4e69e3a95d15046f4cbd48f4e37aab5735c9abd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664J6L3EC%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE5M9hddi2m43BYf6XKZnUPN32o0eTt6pvWyLbMyl07AiB1HPlUWw7VdgnkDD21UXw3wpxKwblB7qVS6QgWnfzyIiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpyJHZR9nPoy2UdRKtwDJyFqPdVic6N%2FdozaIkhz0G3wUygL7Hk%2FoBGOTJfldhdHLc2II%2BeZIEwyXhCYjlMk2cJ2y4bOW%2Fw2UJ%2BcdxdtYFvC%2FqgCMyO2z4aUAYvM5k2PEz6P4YnsrtmBlAnqDZprhyCzULX4ERnfRPDn9RN3j5cWi7pglJ4gUocIOxiHwqWkkESidov5wcgk9WzX%2FN5r%2B02GPt6EV6VBJ3ceWDNwLKBfUG9yki2xPK0vkQvdIXIZVukj%2FrHCS%2FF1Udl6aKUPtUhNV%2FnsNVmP4JxF8e5YjO0UnEE%2B3Myk%2F95LFBEuBHOiuOdzFg8AlHacz8wW6tWdG4UNkGAcsb7WFJ83R36RrqJcW5XBUBRRH%2B%2FFeSZXObpwn850ZO0BjXuav%2Blt%2BACxlBk9P6wqqDX4P5SiESzofov6YTO%2B4%2FPQvU9183ebwCU3AYFym2xfyhtmlfOPbpkt6yNaYLtiWnLy4SI54h1rh5Mkf9caRUYpSOmCU7QThdH3ar72Dee%2FSXoj%2B7lb51mVH5B4obXyEu1%2Fc%2BhXO3SrVJTypDRsm42o5qpJy8IqGiqOokNJQeUSgx1hwhukg4ARRzptmbrjycKl%2FWURQEh%2Fxq5224C53qaHTLfR1aSuJ4v1RQuxT5dxNOmAiu8wncLexAY6pgHq%2FAuIDq0Fg4kIdZANI2jwbyIdzgLxCzMgj3ZdgJXyBtZ35q134ZZWLw7uWl3vX5F8z3oHdu5Dii0dkrTxWOBQ07XYijfl6oAX02UFW0I1pyRi%2BIOqLIiVeUIWfmshyEjSndAhxzlo449VYXpMvipe%2Fmi7nOaVpwnunU6M%2FM0kP99svOdOTeMCBlCSRIhcVlP9hIkx%2BkYnS3h7GhNuGrotEV5rojGj&X-Amz-Signature=c6efce1fcf5fb760d27a03ce0f92e403d45c82289fc1aeff053761dfecc085d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFHOBHSO%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T201038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKOFn9Tq0ldEoydLVLPazjOEff9zyFQpwGvRQ8yTpaiwIhAOD9hAgNQIybeIRvNAIJQLd5ljlMfWCzXiXtPWHTqcKBKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8PDvz6%2BcdyXlZiVYq3AP6sLxiD%2FSCz6v09S8Btv%2ByDCsF%2BT1eJNoefmO2I27mG7HQj%2B2PntL0tcsxZSze2z5e4wuo1r%2FUP8IN7AyKBUJzrx%2Bc9F6OumriYUDbD9GBtZGWoRY6KfQSOVJFEjXIOgxKn8OWLbwbwjhkkO%2FErb4Ef92gPJ3NmQbZLnRTqqIhNsDArdfR%2BIvI2PEy1G4r5qxZbh3Z6yXELN0Lvr1vRnf0LVH9vmTetE19%2BXcK6Qp944FxXvDeqm5bYCLbR3%2BhJzp3PQKpre3kVgEgdDFXvy%2Bbrb862r3aXSJnuB0Rdu1LzJIqAJ5dfrkZuLVTl6b82XRLT7jsQoX%2FEg5dFI8Qpw9PSfss1zFbqyE6g%2FvpllBS5qBx12jir3C8xmGa0zOmayPVJ7EsZicCy26N2ruHZsKbyXaaxKfTP2YY4Ol9UbFbaOLQBMxVLegoamfJ7bFOw8jyRa92XElytwVA1LUxk5%2F2s7TMJ4wP%2F%2BKwR8U6UNt%2B1wjynuG9adiMTRp8AHS16DS7s%2BtDbhldy%2BQ5UiXuFkgD1hhm9R%2Bqyk7mulr1OG4A52ScunZ%2F%2FoNbE2rctoSfCoXq48UBNmpnnHwXAxKfV%2BzFT5B40pMsO52bLOPDBz0UVl1TdRfDFss6HmcIrTDHwt7EBjqkAcDkdZWv0x8NFDXgbPAT5m1XIq%2FmbvdfLSb7xvHubAvfmK%2F0AwwX%2F0mnRWVzqknCnusvtIQdF0LCldZn7rJjV1mzn%2F%2FsqsWnR%2BLmJ6xvHcqovITTK95yT1RMadIqpKVLkBugYSSzAn36OKuHUYw6zUkXgs2tXvb4PsR3ZolgaR8gF%2BvkUTJHtPdGZyaYyDGlbSFrazE7dC40QSchaDwkY4UNcC4Z&X-Amz-Signature=5806e0444987c051ed0ef37a76963a11c557095b9dd09b2bb0aa619cae639813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=b7911b86c1797c3c7573ebda3519c8dd76e27a7554979eb2715aee0e3a00a5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUPN2AVL%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHMT0PaeiIM1gOChYtxBPi4HDJtlk4Tsigd4%2BuJc9Kl1AiEA7Bm%2FXcv1dHHYx%2B0t%2FQHqgDVTNtdAhyUM2LCwP0aDFmwqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOHX7Ui9Hb65mRcYCrcAwZnB0p9e0mSd9ZjH3evs3Qec3b94jwU83Bm5zXaFMjw0jxa9tuq6bLGX9p4S0RHc5yf6%2Fo0%2BtOwQnvAEvtjki0QWy7Kk3X7uCUSq0u3ZN1cEC7T2YC2aAgXL71F32feJsfpL1V4kswYoMtbxkqwpJ5%2BqnLzlcoAr1%2FEluFUsEIenRYNqU3Z1GYlgC8BXxAl1Jp6wd5lcl4kuYCvNtufUg6mwIe%2FpSwSDDVXKf9l6xxpTw%2FjhKptYOBrRlHEunWr0Nk1Phvk5rX816LX3foQFWQsjsreuKfGlrVx4RWCQgeO%2BcwvCFXglU2%2FHfyIwTRQpz7dpshug%2FfEkr%2FgKpKNOd8F%2B5AHij3FcHyfH3V1byVB3iIYhlDrX4%2FOL02jh1PSk6KAr7OcgfrVmNrcp99t0ksad6DxYp32JElmrXNHNBuusKokLt%2BDXfle4zCtw4EGFpcyBuNGfNY30Le0HcCQGS6U3br6vt%2FCa%2FAa6Wau90RHRptPtp9XPtu0o9m%2BGrqGEwNUCCV07BHmli67mXGKBb0JvwOYZVLWp53ycv9IUM1JbAvhrI6q2CRjOS%2BaYfAETM%2BWbOXFCT%2Ba1eqAVv9tTwcqj90fSvit9wd1pDYsCVPCBqPJtZowtabkU69QMLbC3sQGOqUBSIu0%2BA2spEUNzGCNq9dCcUkAIuM%2BE3%2BdXVVSnQzm%2FJVxSQwQdW4yZrZfQliXKEZvAYXIU%2BfxPh6T8AMKGACkGOzaLi0sAFaLw1bUdUNTyZVjIicuKVOJXlLtF7dihQnQHNpZwg8DVtbeApSmLx8h8LxY3687J7injiKxO4VnBMd6n%2BeNYvMGpe%2BZH9OEUM1MEF75wHGXbFIIaZ41IgYgx%2BSxmDvk&X-Amz-Signature=908e5dfb408b64dea3aff90886ed1cd1f1f62317902590dd5d585c70c14d2d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=1bfd34cd65081b4d4750f62aa3280e4baf931790c2be3289804e90ca9af91c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=2e28f910e7edcfcc661cd52ee04ee8741fdb55499fe8f2f236e3137af6dee999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=2f63bfd76431167489f509c6e1423bad24d2826d40969371152be1a229020f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=0824e6b53737244e9e9af54269830924af05d46f8082dcc2636e087c2c3f685c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=f33a00887f2751e52ea18a755edeaf007c40666546ddb60ec0aec6ca3fe52760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=5ef9b7b5bf04619c1020218a00159d440c2e6773ce569cb2c5f9ff4fd49b83c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=f3f917cdcff9430f4c91c49720471df668648d3ab1c571c6897d64682a09d968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=66121065aa27d9a978e56e5ae26451e04a82f442e92dc1571363d5c1a78df8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=47e1e795dce58ecbdb79fff3e295c8c1ea2482338b93af8ccf7f507d00779e8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626SBKXBP%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOSuNPpy2oC7l1v1fd8fNCuaF63lUt%2FBxgYrjEoJ9hRAIgY7LBW78fFuKhbKls6wSH7GSkle5LmyV2KtBsNmPGnZcqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIn6t2BFuPYXWF%2BwJyrcA4cFCRilnig6jIiNf4cK76dp72XCeuvC8FBRF%2BFMqxJh3lumh7zMku1jz0751k8YNVQtr300Zjowfp9%2Fa%2FBzepF2GB9QGPI2SlASi2%2BPCK2ZoRUjm5tdoBZGBIWxlsRx2jfOxFmQA7SHpBNKiOirpOzxU6i5yAPpCXzR1ff8ZYsRaUBaqOW%2F92EsOZYqCM%2FEkeM4HJ7eOIWVBwZH6rfrG28BgWKzTCUO1zw2aqXYbMoBE9YSKYw2lEkkUwOUUvxLKvRdLveIMb%2BvEPQE2IwSP3gF6NBtA%2Bj4sk0LggcKhFA19%2FhzHqg1SX2owtu%2BDEmtDxqH1ZY7Oa6%2BkMA8Ww0QS%2F43%2F1vVlcEt89ZPhvnKAi57nN9GNlAFWKynkRHV1NiG54Z4Ls48VEGAkfOVkwT9VNxVvXM7xLFRmjyNID29M2vBIPjH5SkP32L7z%2BxeaN84KYWCNtOKOnLsciB4pZzApQ2pSJHCCnlu%2B%2F%2BJVhHgcdNH01UIomQzVm%2BupZqUAmQPe77%2Bb6ihpJA9FET0DtBX%2BSjKrDQZsIJb9el0F2rbJiQDoAX5Er7NsjG%2BSdB%2FsEZqWHC65r0oeRHFdCi3chZpFKdLphCuQTCSgC1ZwGA3glIgP5fNIzE%2BdqZaZeM3MPjC3sQGOqUB7wXArs2VVJqrbpZPQqafsj%2FWKMNpRM2GHrp4hqyOmbUgNShknBx66tMRYvEuZXYg900YteMY1Mpbf%2BKGAVtHZcNYrV5Jy3ZlumMQYsi%2BT2oduNyX2U0TssvCg28WATp9JRG%2B5sOuz1%2Fp0E4U9FbR5vAGlLi5qRGphKRVtmn%2FImk5UuKRFccX%2Bgpe7THwE7my16GQoXgrvQ3U7CyHMF6lKkGazRtc&X-Amz-Signature=2e3c58fa83d074011661903914eeee5745c4098c3f21a72416bd4da7f440cde2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
