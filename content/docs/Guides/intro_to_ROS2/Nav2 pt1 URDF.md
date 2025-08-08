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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=1c8a2dc5894a1afd36ef24c8ddc705d37a2a772d8981818210f39db312063f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=f36838b2b65cac74d62998d7514b168276fc5c1e368a03fa1e1c0cfd339c4199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=317cbdd4e15d62b2ac037eeffa349978573de49babbc03cccda1d0d759f42757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=16c28c0a601aed044d6e1878c1e3d1071d7cd600bbd8ba3972947d6dcceec898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=5b02e874118dc7dac1e5e46509a2540a3f8f27d7859f7e787a8c0825a929c2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=bfb3d292fb99ab1276890631f01f90e66f3fc3b76c4536cb1314490b4425cb50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=35998669eec16275d2fc0342178cb27865ad31e3f58912e565f8d6db833e3ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=255a564bba09eb0e2331b4e42e8fff6bd2f0548517d750904eb307fa7c2a2699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=3f36d7bf1ca32a74a893277b7842b634a0ed94cf1fec0e9939bc6ff91caa0cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=ad13698b73f17b3d4145d815d50cf6e369747c2bc9b6a3af9991c3d6e04eedcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UETFL52%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDvb66AjzeRRF9Fn4VWEO1EeBNPR9LxP88PHTHdow5wFAIhAN9aTFeqhZhqn9yBTEp6stlfYTHqiGjJN94f4dhKW08rKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwGd5UPUpdSDtWUz9Eq3APHVvHMz2Dx2amM0e%2FkuMW7rdoihlvg2%2FX8dO%2F6pBt173t5tWJQZpjCidQA%2BZTgVarBl8OB5k97%2Fy%2FQeCt65BcVmBCFuhY6KeLbMi8ksrUeHUOktXqlmzOMegkhLPu3HYRsrTrlKesPy2QAogVXwb0rkSp%2FcJ1gdaKn8wEiAekSzbM%2FtIJA9%2BGMVCqZpt6VYVZNADqV9PT2evu%2F5nTboYsK3Fr1PQuG%2Buh%2BteNB%2F2r1EojSM%2BX2zPj4%2FIgHmk2adRJOPE9Yk20seip4Um6%2FMO5o%2B7VNURk0%2ByChQKUsXTvtrtwPB8ET25%2FytL%2FHa6I5FR3WnLLe1It2GycA21NsCGKvqYPauttYDT8zh%2FtjqL2DM9JXTWL8hzQ%2F2rtfKW4XQCFQkCT6mEh%2FSvpTGYkBQBySnZleLC5iuMFR4UNL1BDjOTdTvTH34sshqsWkz71D6VA3H8uRn4sJ%2FAyOHmlGFWRT6J8gF%2FJtS5sQqMW3iwqcJ9%2BltoM%2FLFQqHOWMqRhNliDJirVXCdd5hZhNoecRrvvCEkQXtzV4d6oZ%2Fc2LVGawiUOxBOHbD3rH2gV1n2bDKfqjlJ537s5pmtqrZGioaSBCAGinK3IAY%2FhU3GxhtUV%2BsKBB%2B9sHnyToDHWYsjCbp9jEBjqkAXznmN%2BR79RGP83Xsi08Xlww3juFeLldswyKYNEGm4TCDJZS3YR%2B0i2LDdmmk7nvyoI7LK0QDO4tlowh7UfWU46aD9IV%2BgF4Br5sxmqvHcRQZWx1GT4%2B9%2FgxjER9AoliLeVfD6h2C9ixA119GmCDZvBhJ%2F0PCO28WTzvPLmCpcLH19yEoQ5BPJQAXiBqjCRRos9EbhUmXZzUVE47rpFpKWV9Hlks&X-Amz-Signature=1a40ad77bd70e52c85370c78011425aa982585d4deb730dd053fba473002f829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLAR62BJ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHSPkriQ3K0EMmYCUiHfQk5VIHQC9nqAFQQNS5CnOLtQIgcW7udGRxIjwCbZeLZezxOcnq4eXS1JlTp10e16B4e%2FgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxwnnjV9PEwseaC8CrcA9vn5ez9nrxMI%2BEexGo2eQnhZ6Zek%2BWpX7rqkEb02vDS3V1d8VKhSHOpvz%2B8%2B%2F80BUDvxtyoWMJVh7AGF1lTUW9NJHRG3wkDhvx4%2FtklUc0yB6aJQRJAeTwGZUnJQwJf8cFRrhsAMGVEkeylt%2FrG6CfB8pc0dEFg5N8K5AR%2Bb%2FdcZaU0XIe%2BVi7ZXj3YmTS5cPmy7qvGaVWNFKRl9rNVvRmaQQ%2FX7bSYLaswVLsdcY6Z%2FtUl%2BJM295QXP8vfXbRX06C%2BeCDsPG5%2BksB75nexlE7DppAq%2F2RLB6cKg%2By05Jc14Fktmgd4pkwxezeqE0JHExbt4U5Axi9YLBVPoxcNRdRT3%2BjykDlRr6fdjUJluiv%2FIM4G%2FBopr7tgKxAW5LcIx5dKFGOav8lBISqtj6bpqPdIBV3Fg0XRiBFgF6bGfgQQRTN13SXsivFyQj0VOrjz%2BIWdj%2FWh4wVcJDbwmDLKUbmQ%2F99EEmGWddO6VMuKzExKwO5JMIcofOCbONqs3Ee7wwfCUH5OVat2tSI1aq3%2FsKCuNCrRxNAuMuy6p157ksqVCd%2FMjv6LildPsCiCIaILgby6eBvgs8Qp9118wz6JfanNHiLQV3gtR5o8FvvKRjW9U%2BIv09Hdw42HZVLdMLCn2MQGOqUBibiiXTk7OGSAao1sBh6f0gzB%2B2cHUFU8IFf3KfV2AoebN9ofNqz%2FQIaLOqPDnGP0ZtDHbE2svayYICDTaQyBNa9l8YVDZh1rvyXcdeakfYsDxYazmFUhG70rf0KebxC%2BsvGiBWwx3aQZoRZSfBdDxBcNGS75omV3Bas%2BuRzMa3Rvpl4%2BnN%2BpQSVcOLpqyLd0nPg%2BQfA4FaZoRRbuJZZsUDHzksaY&X-Amz-Signature=27f527bb6f5957e72cea584c97c88d910e296c6e825e2455a003e4de4969122f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHI3JHWO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDeH9ClFulMMVHxRJpTS3faPnkU45XZmm7YCvIeX22CCQIgEyAYfT0KEcKVl9wEI%2BkB6gwje3EeW4iL2jjzxEYnXfQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbdrxn%2BERde%2F41lUCrcA9cosGlGf2K4eWZQ5945%2FdeR5tVKRFiWA%2BbSZqyvdyd2KEu%2BUWv3PtNvJui5iyBXcSjSyhT%2BQkRNitLdcPEAs6qRo8o%2FXORQgjpjklRggoETeQjTqmunSEkCY%2BxrPZ8B50nliD0YHRWTaMPRmfM%2FgQj%2BG2YL%2B2ABfEkJ7KiEMwCpx6o%2BWsUrSiLz3WhX6RtT8MolpRlGfsXSeTs9cMv3dpsC9N2vnPy0XqfCuH4STyN2M2735SXItL1ZU8ijBb8jVLWbpeIL8Z0cf73hsTkeUv7lWdjRhdI%2F3JcLAGLelIq5ZWccd34WgcGDf08enrtNhY5qTYphuMun3%2BOrS6JfoDz7a77C1uiTCp9Ryy95VmlQ0U5PS%2FDfeaEOGmxnbY9bVJXtqwyuCKMZfR4MYaqybuS4fHceF0a7Jz1J%2FRuRwIlgaOnNHtPbhPaQccC%2FWJ6oZpbsSbcuWbGUBkNghrul9zmNxrAMXecl3LM6kstWax9l1cZPZdXzaf9ztjeHCzDyCsApK6cZFIOsZBil0YUvKZI%2BaehwiJoRWCG47mjR0TBu8igpMNXlx6dZtSnOwF9hDZl%2FrK4PZo%2BYufPHutbge95Tr9kZYyXv4NKHIbpcymyE%2BNDj6%2FQOA9WKyC8oMLin2MQGOqUBfn%2BgJHlDq3QXQa%2Bs%2BvfB0t0pMdWOh34eE1pxaV42BriI%2BDlIU3545J0JJs24nozOzEdrDeYbK16547jPlCEoLniumCnb3ny8%2BkwYjt3KThZeVhCzuhtsuOvVmz7LgPLBEODrvABrD2jkixV9Ftd5KHhIByIt3vRZp07LjzMBQ6XyyhEsdqhX%2BX8THQkRXaI87WlH%2BB05HgledaxhXKLseecmU8Ab&X-Amz-Signature=dcd7aeadd015f2f3bbac2a0f9271006909f403bc795b1ec701f9ecbebed9b034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=f47c222072f67fe3fbfdb74cad3024d8b2a061a87761b659259db9b5ce76638e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5FCOBG6%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGTtBUy4lrGqswEhXhU9W7Bjhxd%2FKeF18%2B4tmAxWcBVZAiEAvBQ0jY2SoVdtHxx%2F7jpL7ogupC5MAqQXiEXEzhbvx10qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBbfdEUVPAapKT9JDyrcA3%2BFJrt%2BlFC0oIaxdkW94zD2AuOlEAnfaBJmMT19sNxOqwgOfWAc%2BnP3Tgl1QJf5AsggBYeg6%2FAdyyDX0cSk7aPmxjuqrPMjPKdzuLWn8Zf8cUsfx3yta0POCIKmvyn%2FZ2qbElD5MBjpIPOeUGtKXCIZEDWqT39mgrkeN8bRlsu5vYkLymw%2BCt3HAYyuCjcpjuka9F%2B0PjB0hmcDVYoQIWXaqxIc5p9CwTi96Qeam0iUoAlFgM80b9sgNsAXDYOWW1rlYwcjOH1zV0OqDATsvoSsXfFibnFXpsf5lwJQjc66onx0YFwYcP4JKHFkuYm2G4PEvP6E0%2Bi23snfdmRc2N3tI7Ba%2B9PwIeCo2fdi7S1yVZF9c%2BSg%2BopCwxElWJY%2FnUue85bed5RVuhFZMGv76Yy8iTCyk5hbfMAv2o3wgyQGSZ8R7ifxM3toUMpGqW0J4Uw%2BH8sdFruqLw3Hdgy7rUECxcOwxD5szdKE%2FOzNrqeuWNgl3DBumf2yZtO6u7N2YZrN1r3bHinPrj6lRJVmBRPd%2FQyTmkA6hJTfPVXfeAjgC6zgCMG3KPASCPtq6%2BZ1CDibpu%2F9yGjeHLCvaOYh48drOYlEr%2FqRDR0VuBdlOZFVP%2FzvRmmk%2BFVpYHwZMOCn2MQGOqUBiQoNriAMuWixE%2B19QJ9%2BQnMWqgx%2Bv7JvH8o7SUNMafSZ%2BODPMznWHTQEC5T%2FtmREHOchghw%2BiGzreHLuRp8767BoKF6FbIYTxRphry3qTJEs0gMQGouS8HN%2BpjZUh11XZAo9pkHldWBOMQmTSP8Px2rJ6ZIE4xxVImECICqmNAGkq%2FIZreHuDGhIBsKkf57gWDJMoD5CLTr9xUHbxcC%2F0zrAcmn8&X-Amz-Signature=415159e3efcc0684e1ee3ecd44a9a3c39ce8e13f907fdbee997cd31e43c47ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=403f74c717eae6528a70a10a355b281d445bb4f80ee8c8f4ea29acdbadc8ba18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHI3JHWO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDeH9ClFulMMVHxRJpTS3faPnkU45XZmm7YCvIeX22CCQIgEyAYfT0KEcKVl9wEI%2BkB6gwje3EeW4iL2jjzxEYnXfQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbdrxn%2BERde%2F41lUCrcA9cosGlGf2K4eWZQ5945%2FdeR5tVKRFiWA%2BbSZqyvdyd2KEu%2BUWv3PtNvJui5iyBXcSjSyhT%2BQkRNitLdcPEAs6qRo8o%2FXORQgjpjklRggoETeQjTqmunSEkCY%2BxrPZ8B50nliD0YHRWTaMPRmfM%2FgQj%2BG2YL%2B2ABfEkJ7KiEMwCpx6o%2BWsUrSiLz3WhX6RtT8MolpRlGfsXSeTs9cMv3dpsC9N2vnPy0XqfCuH4STyN2M2735SXItL1ZU8ijBb8jVLWbpeIL8Z0cf73hsTkeUv7lWdjRhdI%2F3JcLAGLelIq5ZWccd34WgcGDf08enrtNhY5qTYphuMun3%2BOrS6JfoDz7a77C1uiTCp9Ryy95VmlQ0U5PS%2FDfeaEOGmxnbY9bVJXtqwyuCKMZfR4MYaqybuS4fHceF0a7Jz1J%2FRuRwIlgaOnNHtPbhPaQccC%2FWJ6oZpbsSbcuWbGUBkNghrul9zmNxrAMXecl3LM6kstWax9l1cZPZdXzaf9ztjeHCzDyCsApK6cZFIOsZBil0YUvKZI%2BaehwiJoRWCG47mjR0TBu8igpMNXlx6dZtSnOwF9hDZl%2FrK4PZo%2BYufPHutbge95Tr9kZYyXv4NKHIbpcymyE%2BNDj6%2FQOA9WKyC8oMLin2MQGOqUBfn%2BgJHlDq3QXQa%2Bs%2BvfB0t0pMdWOh34eE1pxaV42BriI%2BDlIU3545J0JJs24nozOzEdrDeYbK16547jPlCEoLniumCnb3ny8%2BkwYjt3KThZeVhCzuhtsuOvVmz7LgPLBEODrvABrD2jkixV9Ftd5KHhIByIt3vRZp07LjzMBQ6XyyhEsdqhX%2BX8THQkRXaI87WlH%2BB05HgledaxhXKLseecmU8Ab&X-Amz-Signature=b5d71db26bf4ef057b5b45c3185bf842785c1a89ecc236ce8f57d381b3f68f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=3a27bfdd14fa7ae9a7ce3e9b3ac81bd65d010f5247201eb3140eec9a49608955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NOHJ723%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDZcWXj0jS6krqf42BIdVuKt0Z0SKQIeHO1SkvFV9hyMwIhAOt6zGU%2F%2BPGcK5kpu168OFiLza6ad3q2ywvFMiLxbT0CKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFqmBRsCGLqzFoQkIq3AM0ajhZnu%2FdTzVkcW9zFuTUufABueQD2ajcL3rrQ568LBbCLrRmzTAIOOoELwfwJWpzRnxSJ1kA7840q5xr6BRLmj70t0AoGk7lwaCfX705%2Bmi%2BowLCoZpYB3g6%2BKe6xfysy9jG0GkqFYisZiaWlc0vn3eycJhkIUwttMiX%2BGion%2BnViCeAJdE3FfVMm0l%2ByFZwGXBL2TLXoEOu0bQaRSziZiUk2WN3%2BgKtzWtLbhhqGJwtKgmf6blEwskLFGY%2FRBCJW3ci3v7%2FVNREoTMjmbWVrhSVxS2jvQPv2TqeEWIwl4q5xlpzJR8cBjXRp187IaJdpOIcT0x7Mcos9Mu7XdoNWKjopnkr36g5jl5kJf%2F%2FI8FhansFnA9%2BKtHFeQ2f%2BeKVbI6kz8DcAwK45c5ghbnwEFecQRVlqpXf1qmU9xWO1xkiihzengmJzsKjdyCudTrZ4RDZU2lAnxooVMQmLfflNyu3r0mdremM3%2BOUyXjghRuUpsO66NvZWBMmyGwYr4y3%2BAQw6Zz2Qwii8he0XPrQJAXy5kh9znfG0mTcFTSP77gn7mxS80wf2GLlf%2BzZhAuGPqgqHXFb6S9%2BaUJqhunnwFnmaFwvzlba%2FztqPSkSf2Y0lwpwlCvBRSzg%2FTCAp9jEBjqkATDy9J8NzEB2MYg1iYuOpukJ10puYOylWK%2B3qzglorYYWCkVhJI42DqkLlzY1FyFsLytuSRMQmIkuSEA%2Fqz%2BVHV6fD8O%2B%2F%2BQoesKc3WMdw1Owi%2BNc6dxV3mpO1L%2B2LWo43WDZFbAMSLMRbda%2BugI%2FvRdTidYX60VDRuOACrHWj%2BIodeg1CLWUV5uDNtVOuEUeNwxul9UcWczUkc9tviiGNK7Jpu7&X-Amz-Signature=35f2297a0e0827f08a6c0906e965fad1d26ec1fc0dd112d6d21b4f678d78d1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=f38cc76cf2f6a6fd5c612b7022f40eeb3f56169d49103a3fc3c4b0571d314993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4NIJOQP%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC4%2BCbx3y0tadjXKXuKJGw0xSrW3nkVB6bjchfTHHx%2FRgIgIgLrqDVCuphS8YscN%2FerQ6bLX0rJL1u%2F9ZFKSz8d2n4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMNW%2BSVKVd5vNLoN%2FCrcA2i6aVWMKDS8v5lsv%2F97WCSCve%2FcPNyFI%2BaoEm7aPJusb6RT%2ByqFee%2BwK5%2Bk%2BI3M192Kbm6Uc8ii1dhtE%2BwCk2JCEGprJe0D9NPAbEPE2MMUqW5JFREfS%2FPkmE49oipj8VIFUloiH240uqoVhydWQXRMWUxSIRRkwe2uXktEZkqumhCrlGTRC9j8b18x1cC0JuWMamswKTeNxzQiyg5MKDEVQ7qM%2B5c5UGt%2FvWS%2B9eUidH9%2BL9jVXkiz1nXHs7qTR1MVXEL4%2BOVCr%2FWQBpsCMzp5mNZ1rb49l6IXTEdOCwcFmPcnTWoeEKTwTUfB5QmhWb1oiXcJIsXy2FILhhtxDcRTl%2B76NpKMmL1SoWafo9Lkle3F0GaWSCNucqtegZ9KAfJf79Z3sCPLWBaC0UnCwM82rhsAfXjZ2WoA668ODZBa1GFDNaJntAPDC7kydrKBtb2HsovB3ZuNCpDYO3ug6jcI08S8y5t4Ymv03tQeo%2F1YNGkd63M%2BdozWs65p%2BxNcoioPe%2BmTepRJB8OBM67JUxKr52prl3Ul3ClCZwV%2FukRL6%2Fgjm5N3EGO0uZDcS9AP9SbLxJy3efl0qa0b33Vh7AJy4yco2m7M5LXjWRgUrcVRcojeSVRa2rGQEnMnMOSm2MQGOqUB4IPN%2FahyVkwnQfHV0IU7%2BNRl4Y1ej%2F98N4ZpUi4tvEGpqymZjbg2S4oLiuJ%2Fh40cU%2FuNV%2BDzgfC3obW0Q%2B4zWA%2F4JqnmHXUqH1%2BOl48bLKz755KGG9QPvKjzmnkFsgzYjp6GkBoS%2Fg052pHJCqmSEy2ZllPLyPn0jae4Y6xj9k82pnXlLzFZH%2FNo8olhrW6ta%2BIQTluUb2wd%2BbgrjHdleEs5pklY&X-Amz-Signature=ca0d7bc67e41f8c970b1561470b9af3e08cf74247e4b8f51e3c92aa10e3992b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TP3IJXJ5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIES%2B26GzR2VSnoOJarpNUdyYiKnebiO4Urw7rSXx2oqdAiEA%2BoYyYkb88ZpLzDfFSJSSj0eC9w%2FLuERebbvW2ZIwz3gqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDa%2BfGNRVsmIr8ewXSrcA3F80fLD4BeB7cGLPhbHK6IJnTXX1SR4EsLAkrO8u%2Fbqg93i49IzORCndFdqqfIlQ8wK4B5HRP64RK6YMJSs6XfISSH9xt7C9I8m2qkF8OIJ97XKfG8kaZvIU2zSwbgJBBLIs1jjAlnHRkcHzHuvgbrk%2B85AKh2tuaH9KeDm3e3EakEqIHfxo%2FiuXBCfV3zH%2FrhkPCnvThPrJebOJLqiSU5CtgRCwocSvclzb9dFR9eDN8%2BOQ8lIEOhttAH6NGMtdja%2B780Kuuks0jmbBcFqPOfuhetmsBkIK46yArToMxOd%2Bi%2FgYzjK7X37FQKZmqsKJmg%2B5iINrK%2Fh1wSBc4Eb3VsRsh6f6FG4AolPrynkAL%2FAsm0wzGqpZM2PPpEkKsbxWizCrVTofJbkhvPM5EDHfcELJNexTbT6dFOTCN4OprUaLFfuRBanKw96CIkyy1jYsW4DtKk%2FJEzRmVc4IHjHLKU9dmUjrSy%2F%2BQRZWhK0GPrUjUQViXHDvZJpGInPTcJkbn1cFuqsGUhakin9yXoOD%2FKN2MsCXENQSsAXxpFOSB4QHNQVXW6BFECsSEhVx%2Bo5QH0%2Bzfu8kvASS%2BHneDtsGyfha2o0Sp14hE7Oa2EAjEA0oF3fVMoPyHT0cvHXMLqn2MQGOqUByBJxZlnkdHuIToX48lWis3ZRAGd0cV5VwguvWhtruJVnzAOwC4e7rrjLqJl3K6bZeQ5N966M47%2BAt26I%2B849cxiP49qa5BuMYplKJauwCpGptCmrMyTgTDuHz9M8zsb5B6pamsR0asZNsg1KMXuqteR1e2oylj7q2YvrtpLDD%2FKw6akNW0BVAfXbKpzNZj1maM%2B5joZ8bzST3S58GKEzqxPB25Cy&X-Amz-Signature=70a6404eddc66409fc16be07b76122a3b06707d73b4eb704eb135da34339f9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NBT2VPH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIE4mbNkxolsieGA9hM1clYZfuXS4C%2FM7Pz0Gy5n8463JAiEApgYfAmjnKpJY1NdG5JiUDlTbCx5yiXxto6Pl5pvrIRsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2nRIdyiVjHIycmxyrcAzxMizy%2FDmUzqN9MfNbCbEw6ojnHpXqoOCgCSRaK85RRf3KhmmZzGmjMv1Feb3CKiZlgogHc2j%2BXI9lUoOshHDcT%2Fx6fyH58JE%2BF0rzizGvQ7Lenj1MtYhN30sUj%2FzQZxAXvzW5cK0uXCnsiUQ2ZseZvEcS0Gk4a3RV8Fe%2B4PpgBaw%2BqmuGCFbDcJdly37k4pqjFucIsWp3MUfMlZQt3XsaYW6qERmSogBctvm14f8F1XSO6BwYV0fYHy3ilxeAUtZ1FtS4YbWBl3kWT3TC5AFopIJKpvO5EsmK7%2BZSVoqYCuBnRMXcQwcODPtKc28xB0wdD%2BB3FA63JnVWEIFbfOX8DvKOsSC0D4ZRC7Wa18DngPWCyG4Kt1u6%2FPAZmK6FNFhm2jV0v81keCECkq0bJm8VqF0Q6uf%2FSRQVTvdln1CqbSz2FEhDrsNNfOQFVG0Kqs3Q9KFAGeAUQMdsNV%2B%2Bq%2FDybkrShAe%2BFc39FxD3PODSf64eAgkMY2Bz1LBVJ8U7ItIXvXR4dpMhfEL%2BHI0KGo%2BipuuiqEalHSb80Q9l3zMXwxV035uTuu1GWTS1KVsnXyO6ZRrK4wfAn5FaGJDCLIJrXplUte80UOND9maAshxHsFyxUg6I05HXsYJzlMMGn2MQGOqUB%2Bubbo5Y0N74Hn3CqEHWWnDEfZ8eiBk1T2uHMWoQbe6Rzgaa16R9ZemFy1RENvtrxb%2Biv62JNiL3O5OXVHpYV7W7mpFFNu8a1eH3oZ15wYHxPkUWSuTe2eIZVaazv%2F10hrmanySWzT3tfMSzeQ%2BbWQekB8Ic3G9oEoLc3oZhFS0LayRRAZ00u7k5rBhAT7mCzl2JPfx8%2FWodZ61v6ohEJKzbUF09E&X-Amz-Signature=0e28bb81acb626e8d53fa115c9718f91c9112ce5a6b28f0c7afe271f3f83d6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEDYE6OX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEb8L6vFirNFsGFAiMCzV%2FN9RL6Fa9vDbuvKAmn09P%2BQAiEAo23lJZDBK8ZqUG0%2B4RhwBkuQplR0Nn%2FIHyQ0oUcHdvgqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOxlgRMY5pH3TnGAyrcA0UB0pELMJfQXNTsTWZTNLzlpPvjWmefAGVp%2BFBng2%2B%2FfVF2qg7i%2FpfLFt0gXtjWXFdmyfJz05oKdn3RQnO%2BXY3sbAcdgtZB98Nr7Pw80ugBiCdD3gtbXjzIVFXT2JatZfJhUrf4HddooY14lW%2F5d8RCknPVcp4wGfXgTyBOOG%2BCcJR87PFwGj%2FApPexQKmCVkx0xY4XOgdLN0ovZ1u9VCtuCIO9wHNgxp1ejqXEsz1i8w4HEenGV2T5ApoKVqV1FnTpxA7D7qlSSuVXkT1YfBcPU3RDa1UcfoDv0CrwoX%2FnpwNR711Krzl%2FRAllN8n1m2TIefeoMTe%2Ba%2B9k0OUXDcBcAoHB7snsSAkLJhkyWbRcuS6WDFpj3lwfs3eIjw%2BKGqGpWjnz5mzrh1nDnj2SiIojMay3smGE5tpUa%2Fdr7Iy9LaL5v1%2BOINw8dP%2BSmj8rXs%2FydJdNEq1UgswwE9TipT1iTLGm%2FN7%2FmoBkMRQVaw%2BFUjoaEAxNyyPWxcG10ELtaauHMuYjw81RStbtQBSmkhRIFDSamVTEk0euyn%2BX%2BOQS03qGLKazZTd%2FSOFpMO8tvdX9jjEbdkRZ1vPhY%2B9Mx%2BJFWLnW5qFADzQn%2BthCCPWO0pIanBwO96AOrrqNMNyn2MQGOqUB6POamA%2FDFlIO5rnMbYBxgATVK4ZOZ1j4IIdAJfiVWDbNngJIkwHYWYtdiH%2Bsd11f4r%2FXKglZQOAuipFa3exx29LS7fBzbIAL%2Fm9hr9jFAMDF7O8R2SsVMxWjdI6S6KH5L%2BjJx5vsSOagVug%2FmJDVbBt6YiHp7XXgDCK2ddD2gGUV4qJ7aXOfckolBVTgwKVdOZUOcPCcTBQbxs%2FnboSRU%2B7i0qN2&X-Amz-Signature=29c07c9d10ede6835c3aaf3c54af79a2049808fc9b5f7123fc78cb18a5e6d18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HWGC6ZS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIFZ%2BALGDBCBSbImhTFXMsoeEh5uFIFYyxsfnBzCBsdvRAiAe9uSlwDBD7zPpPACTSmj138MxdOzacxn52a22MRCALCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7aN3Ks0A7I9NA5CNKtwDjkZ5jrddY3USduQcms9FXDOI%2B3jOru5MBUQ5BuPsNeCNMhWLSX9UuXyNx6DzMMiuxZK%2BiM33fhi5z5kAr5W4rysCpSuSKRdX6lGTlKT%2BX8OjbK2nb0srpUgViXjiBLSlKBJbAafgsSLY45o5DEBCKLoeNXAdbF7adHzXNxsOHYnbUNp71OVbHPW4KbySVxc8TAm5koJSlGOBAaOdhvHwR%2B9Fxg70q0VVkOVZdqMiLleiwbKu%2F5KQ4QmyX9HThYPkfozDDYcROLlutXqrKl4VT%2B1uPdgUmfALjkFmuQCD52P8GDSYBuhjWgGiX8LrqbrziSaHZtu7fyFQCE4Q7AhaMkMBYQOtqx%2FCLTEFh1T1veIi72%2B62joPWk4057XKZPafvkx9fZ7tPsKe7CVolMNVKHyrx1BX6ZF4Aoc1LBoD0ukWuGXioQ1gpqDgqJdI3WqLYr77DfW3iUlNtsBQhKwQh3qr%2BvJAhwvtBnIV3KSd3w0U7mQRIfUMcy282kqzh1TFnGCnxo4nzF%2BX1KIaARw8D9wCYfhfAvid8P9i7PoEJkghONCEVZWdp2rMrU60cBkjPq%2FVzAqyMh6HdwuMMCpqTZvaQW5n%2BPPaxXVtGAjc5XQiy%2BTw5Ritj4oUk6Mw%2B6fYxAY6pgEZMTRqS3OcJbxkkHIAXSrEV65cSpw8v7BVGTi%2BM%2F8JMLsbwIwSd8VCG8mToptUbB7dxLE7FbhKHftoGUUhLzFy%2FEuXlPWuas76%2B2fAVJmht54C8Qtt5Jtpqsp4z7sYOEEYR0uMdy5Yj%2BsttdUmUbYhw8JdJOmvlfuHJwt49f2k5NItE69YNsDdF3T34lqVxnabz3PPppjlwpATyGnUlTJwwMzpEwTh&X-Amz-Signature=d18840d6cf037a953228e0e60a8b577bd6fda6fbbdd34a9c3b524f877ef64da6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=a0f7b31e09c1f1de70ebeb824b804ccf66743cb720c1ab71b9b60c6e599d2e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVHJVBHX%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIGlxxaLpHqi1xfWO82xPrK5r6pBq4RGwNZPe9K28YmePAiEA9IuWGNMi7ikAFl0Ocl7z6Ft9DsxoY6ZDwclPTEuiaosqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMu1wEhxF4gGjOkgRyrcA5cTJWhAY2OQ2ob2yvKqoG3Q0i5%2Bx2NtV35y6xC3LXJz3w56thJY783Rk9NG%2FhfXFpA8G35JlSBme12ixtENA3gl7bBkZScA%2FTJTJdB%2FmZP0mlHynqd3kHZH9z9qBM21pwFg66BuR6a8Rclm%2B8vEUvkUp3VTgHY1vgwOGxTyBXMB8mhGj84G8NsBu367m4PXJ6Nvprc4yUh%2FT69oJjMR7CiQO610dWVYN2%2FkfUIFy1h376p27dYI8bfbzZLMfmItlH2hX0QbHRxOqcMEGTs6S%2FVKpzkRBSSPlKEpUTixyRVl1%2B0j6knyKdof3SSOOU7SgKAMESXfZw%2BivhGNEbBcbnMXZss2smCLPlS3OSkwHyLK0VjgE8uxD2wuC30uw3ETltA1s3L2%2Bnzt3Wbx6UQhlH8%2F%2Bwdx5Y1w2Zd8hPZ9XvEzd5NkPY20o%2BhcZz5Gn3T9%2Bv73919XR3A85xbTg4w3%2BPG7kCWR8zIhdR38qTnhetLsReHJ6Fe3Gx%2Bu5uZld37epXuiMYK36z6Ddwz28lKutrGfwos2iUEMcUVbTSB4bCsstt0vnQqCwTE3jOVwPKs33J0sG2rOxUA4E%2FwjpP8zT2axP2ZCKMgLiM2eNbxFnR%2BtB3jeql28DRx2Mn9oMLin2MQGOqUB%2Ba7yGEyKyYL82%2FjbZXrlF438UCxp7zOSGQA7QMTc%2BawXi4kv7yEiKby5E7Z7HHZUDxL7AX7k0l6lH57h2IlZovDzF1EFZwUeEsj2iEJ854C98cMc3iBeYm7W53NWeOUgSyWjFnL0zhtuCwMvPefirufbh%2BqujZMgV2ZJhSHzw4lXI7UVzKU%2BkaGC11T1k5XLcBRBf14EUPsfaDZuR6YdY1j9yxwc&X-Amz-Signature=2978d33db9a73cab50793507b9133e9cbf83898bd445edd554d21a9e0f2fe3c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=ff87bedeb5ebc5dcffb6da4916eff76d6ee7f4ae9ddb2a927054a7d356f02fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=7b87833ff407a2fafd43d47d6c20ce2489b748379407f09aaa4e95c3a79d649b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=5fa2a01e2cfd18da7835b8498ad7492d20b8ad9d3f14fa0a498f75780b7ffc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=9d6914ac134a1b7364cfbc986815fb93edea93d864b20361838c92c5106c37fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=43c72eaf3f2f1ddca22e485c34cdcd901f13344044cc6a64a24f67c67da3c2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=515655da40bbab73d5a0356a9031b01993232214934616920ace64c7fceef4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=5fa2a01e2cfd18da7835b8498ad7492d20b8ad9d3f14fa0a498f75780b7ffc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=7a3fcbbf23bb1d6c74f767efbcc798e3e1dcba335959cdfba2f1f4e830c04d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=57bcb580e2aef6e58718e0a36aa565ee633ece8859007df5dd7e87889c750040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HNO23HO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T170818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCwIhuxVYnnvQpYuGmpLXu6NjCMP9v%2BGof%2Bs2t4hLuo%2BQIhAPMV8Fz7q7TCsZDrsQrC4PQg9%2BQQetER3bZdPpC7BehMKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyVcoNyfBeSHbBsJ0oq3APbpkDNuDulI%2Fsb5zJgwkFe5zDtB3MSqUqOwUY7XJHHlBH3HWsup98MK%2FTPEaUz9wXqORGUb6%2BPh%2FPxjp%2BK3jCpbMuy77DCZkmtSnofGIxyU9zgK8XrHwbphntHfhgQJDkdzNTxZRg1k79NKf2ZwEAdCgyGWR7b8%2FDuTD5ecdrYEKtZ40twjGbmj%2B%2BOBDWF%2BwRvo%2FCYvqUUhEyLoibjkAMx0GBartvnXoo8ih9RXWwmpSjYXiRfdbPhM6SB4673REstEu9pCWOUqyG8hgCpz8YiPeBcFMvulGhcAYbHunCyrKg9p7mPLnVJmYtgoumsxt6L71mKcRsvXubSO%2Bpu5JNksr3HOjaVU8soUoGoMXw%2FHKMN4GDy1nt%2FcCFKK6R2NjWes3pGlMo3md9NSToLFZvQXr2q5m5cNYm8agoInlwKPeVNR%2FDx2aDtS7NH5soEFYiXUz8cK42zde8%2BwIBgjYAljMToiYRpcMpBUlrUrKs6G%2FGHca16xorctooIWZkvvNwJiVNCSwKJ7ujQ%2FRByQcueAeRhWaHmapcLE1PF5Z9yjhCOyKjAHwxEGs4avUkXaG5EIbkZ0wTIfLlgvGgHbRTX2kOG9iGCiRvlg2uFp%2BvTvTc8B04DvLyM90%2BilDCOp9jEBjqkAYchE1TeQJFqEo9382YYZaqMIqhWz8ikT4XlnbhukOLmqV0lXBBGT9Nv90fIduyzZjv1baqXjQmapLwS%2F609JQx4y3mZpLbMzN4BVs%2BjDenvzCDOutuO8lvPKwnDnY1rxh8mdoExAY1CjNi2%2FD5CW8RhcOQ2CTlJZO3EU54WiS3kQkk4SNywquktwL%2Fc9cypu3XemBKkHtbLYT3p4mA76bw13aaN&X-Amz-Signature=dbe2993c066094d09531326e6d017bcf0fa49393f75f1f7c306595a4603856c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
