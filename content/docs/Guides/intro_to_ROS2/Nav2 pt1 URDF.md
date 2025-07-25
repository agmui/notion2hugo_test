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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=09de1ea4b10a4a6ec228b6455f541b55e6f13f064dd5b0349f1275b0aef63ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=7cd6a664a142c9310303e97469289e19e6e4dad3bb26f8a041064290d21b2a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=1206f3433e5dcf30a4d6c88d45842d36f16304002baeda17ee51925b537e9e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=3347f52376c005babb9b407856569d9e509c75a83571f1ead4428e562e5f26ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=cda4cd558985e8de96ff9bc219a799217446baea3135f853a39535d7dfcd5672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=bc606437c3adecc4fc48d9560830241fb51bff8acfe135a8b095f86a318602e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=6dff01eeda286306e3a7dbe14590002d7abd0a92c8d61821f13605d4f0b6424f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=d4c24d139422214a4ea605d50ff6c595eef444a567f6aee1d3ede696a19a0a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=5c9dc103483ed82c2f5dba09d72e8b654a81c9c1b2213eb24cafb796e9cd9440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF"

TODO: do scratch diagram of urdf with clicked drop downs

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=c89ccb309916a274a0e58f53936ccd9c586a3b0ba1803ff5edeca2778cdb6c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=08757d2100f21bdb37615fca694614596929a4cabbf34d7e2df5612e40e40a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=d5b8f1ae22e890af2831a9795d81b8b7d0bfc44a6ee213dbb3a560665095d745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=c48d521d20a8df44ab60f0fd4174ab450b3609a4d1e2cb4ad150dea24d850cab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGOPUPDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD3yIADW0KL8GIw%2BPEdKHx77P2rSJahTAI3f1fLRrtomQIhAKRBNcxNSNHmi%2FHSnesbD39Et18ZaaCgx8NUgDW1zvecKv8DCDkQABoMNjM3NDIzMTgzODA1IgzbEGNAixyv8%2BKSxygq3ANGh%2BLS%2FHn5Gd44Vbrxt%2B1y2KxKZjif4M4fz6aQhXOUrPQHBSBWosO2b7Ae%2BcdURNG4%2B4ZeXgcVnay7hphPD0E9WTaoFQWOaV95mtQC%2FcyK58lxsfeqymGLqCqeX%2Bat0w54obDjzmZAlXW9p4i402vBytQVjilJGKI70zTi62pgCSAZfGNktNZudwVE7PNKjzx7opTDQ4kz6qCOO33JDzNS4B%2BZEFikOshWqUsblftRdpwdNnGDsmi53Dcbzu0xhV29ucw9hNJ4qnvcKvJN7%2FEsJXyJkTfVw0yn9JJZkxL8TRiwUvqWCjj9DS1Noor6lEnSAdTpLnp3%2BPQLhSVgPQ3CJXlrYDbBR%2BqswA4CCNGHRMr2g9v4%2FT2SPITs8SJ5rjWUAAsdIK05yf4bOGl97Ere7j87TC0ZEKzL21nDnDLrsfFfJzSf57sW8I4vpQiyxneacysfP%2BvUVtz4JzB8yaZeg4bYtimwiPgEVNd92OhVk7hXGJdKRQpFcXtOp%2FA39W%2BsathWPiuTIh8WFfNdw7eoq6V8UTpXKE%2BFzs7HRWhjoqrBqmpo1or07nSIXIxpYAUDEimVC2Pg2MbyJfUhx2kz93n7OQhZYs6cLDfLjHOZ5VeFPQ%2FMLO9sE3J8YTDciYvEBjqkAW9d0bV4pGSOGk%2BZoKbgC1zHLInxmqnk6k360imMSSnKXQPy4cDQ4stfy9jAnX8vEkXfljlc%2BhhBsh55nU%2BUtbvGvlFd%2BdbImneU%2F7rQSp6qH2LwRuqSYIvNELqHJqmiJhI%2B2M0dO7w%2BDfaMug38wEXRwceaWI41cXEe8K1HHyGj0DCzaJ%2BvPmfoh2AuJ9izHMBw7xQveDeO%2FfAKvY4UL9MFoDKI&X-Amz-Signature=5ee809f40ec2fac0ad321c8eaabb7e157d92a5a520738122de4a9c383bf3e5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

In the launch file we are going to spawn 3 nodes:

- `robot_state_publisher`
- `joint_state_publisher_gui`
- `rviz`

## Download

TODO: explain rviz better (say how it is like ros2 echo but visual)

create `rviz` folder in `mbot_pkg` and download `config.rviz`:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=bc0677674afc1a2a629ab68e6353edfd3d900172552c0f6b6e1b0e031e4f5b2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=9a57efaa5f48cffbece69d366b7b3be1173532dccf0703180e3fede7adceaf9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=b23ef9bf8261cb5a395e2e2a516687e084beb5e7fd09b99dcd8b928e586c692d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=5d5efa314a568f389668e272f9fd61b68c7c9f96792b53cc647512071dc6aafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=47e1159f806327b2f63ab6aceeaae21187af5f527d08f62e7bdb71b441b3a8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# Adding collision TODO:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OM4J3FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4%2BwjiZPP8YYGy6C87PTRF%2BLJ2EmEydH1dr%2B5ViiB9wgIhAJEwdbWRpc7gtfv0lu3Xt9KZHibAHGiAHI%2B%2FRdV1EeOqKv8DCDkQABoMNjM3NDIzMTgzODA1IgyTq6XM6cEssFoWmcUq3ANt8e4WRT3cRzpcuOpLRA8lI7f4Amlx703804UhmTxB%2F2rCaFWpsKRTDRWYPd3G1y3%2FYSLO4Dwf12qSAp2TLal5T9T2oRz%2F85INhdGe8Hx%2FytKEJMaZ2hVtrAc3HJPHtPv9BVdeInRQLCRGipCTqjG7%2FSMJAjBg2XWjdGO3Q7BigpbiQYHgaQ7fia%2BcxVT6QpSzo%2BOYCsml2K7vntRBI2MitjL1jHGgjic%2BVBbLUKuTNkwyKRKIKXkFb4%2Fi9%2BJtB1zlU1j16YN92GMtVrrliyp25q%2FabTvTZoywHGla%2FBNxCQNCh5UckwiQdgDwKeaLLspCDztKsszydveAcQH3Dsf%2BoxVlQosvdK1OpuWSXIC9y09wnm4iL%2BoErXYp76zqqMoy5RpbVmatwlyKJhub0JipJMe%2BkZrxeZSChrtLA0MXkvBEeqtbjm2i5KYSnSolbIBpV0UdTOalDv5l5nlmVfbklMaAqdvA%2FoSpd6kxdieWovPVOizoNH2qdoa87NSsQRsfojYuQonh38vK%2FvA04mIvpkJIjAgQ8ZNGnZ2sOjlnqiEK6sTRekDB6uyNixl9jajpxA2H%2BZKad4%2FqZ3E0MpGDOx5Ui4hE1PAAoDGR1Vd8SaYn9J0o5%2FPJnjiWZTCKiovEBjqkAfbjwzJZTHyr38B%2BM1BM%2FWnaB2IQQ%2F203Kq34KpM4FaGL%2BpCHw1kLb2HuiKZlWJk%2FpSYdnFWQKIAgSenxYGBHvpyYeCmA%2F1ctGllgcb3vOia8zQg1HJmXZxDji4QZHmmDjsY%2FSIz1cnAJV7bv5Ski5nk6oOIG9ARDnO3d0V45%2FW9tgMkkKqGYjFhEkuQJjCpEjXZ%2Burknmngl7IRuSDUosrQOX50&X-Amz-Signature=e8cfdc3418a1eb64b7570b2355ba86c422ddbef862683793a5dacc54244be18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
