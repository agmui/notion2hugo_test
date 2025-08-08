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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=a2a342752940562ed4de347cc284027999b8bbbf5ed258a3b381a47ffd68fca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=7783979cdd133a95d05857b3fe7950b314ff2e95b33d525398b35a4b45e7a7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=cfe92e1c9bbb5b46c420ba4afa0227c637b96b0ae4dee6080b507d7737835ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=55ffc73b036c4b9e2008feff6b9c70c1a704f48aa0e570dd27a1535783fce043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=672c4fe870866dfce0ba0f8a29d60cecb17ab3f8f24b65417a3b5857e2e17f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=06f0c130d7658a1c84e8458e8754ba933c6103daf765f6c6ca4b3522a741d4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=7f99f7d0a139c45608a4e2ad53ae183d002a8c73b7050675f4e27e0a4adc0c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=3b720475c2869043fc3ee87da658fd27324dbc25364a5e08548e797b1d9fa38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=8a8824e954ac2082a784d780bad64e1a5311ff466be8660485ce8a9a61e16bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=0715705ad2c7f9ccce200f8e4070ade854cf9aea3f4c5398e94dc1f6d5551877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS5PDY5Q%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCZMVS%2B8yFmPgUPS9AQ3DiwrGJnc9IciiqiXDpZ3fSFRwIgRqP2xtQQh9EQD159opoEgcpQnrwYZwXwzT7zaGqmS64qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDK1JolPWttgBPf4KCrcAwGLGaEubh%2BLU9oDAVTx9FGMn1qzehItSyUfUUgBhnOHi%2B8ynTfWngbeDTj4CARPx92mHAFxXKFAi%2Bf01VLwGURblRQMVRJMYZL1uYoOiKdPZ%2FOp%2FdQEn5qCyRmOyTlUUVQgc6XRkWEaLkXC%2B%2BT4Mh1u99sIiCQkTkNjk1NF9KCXwX%2Bn9Rx1dhzrQniPQg7EOLx6ND4%2Fdxegf5HgsMu5mNkSXHpR2CQX0US4yKdD6oAN9sz7jPcDmgyRepva4dP0RX2d8tmTxPenbwvYMKouNo%2F5sgD3%2BjGGqExIUNhJuYotwwC5kfJ6Q131yixLtzX3sEqiGDcolIqgplEiiYZc7ML%2FgpYLGSEoAFxnqLVmlPml5DfepNMehPeXkMPtZ64WyrNH77PsjRWzv1L7fOL11y%2FdESSC1YvPpM8ZzQENdzNHlsr%2BXIcZHekOyVk31EDaqNIYppR4yEarOnWbAK%2FPBrqaeF4wVqekTo%2FthMi81JwShp1JtOkC%2BVeHBLyMNbqv2IzJxL%2FUTcq4LL01ckWlhRRrTAAOuoTtVDLdEvOYwOVgAmtFjXncY9pWeUIS6vYrNpTwRx6NM5C4%2FhGONvKdXBKn8pbMZ8tU2rddk62hN2ECFoaCD3iPsFfcRNBZMKHt1sQGOqUBAlAKvg26N6CMbDd5RZvX8JvbBwgmHcve6wIYpaZ7tOCvhCggO0OtnZIIVGo8H0Pz%2B9avZM6YNSPSTCtx0XuzPAkl2sRIRK5cKhJQjXcGkHASPWDIHJGBGZCnvLFxIskoUpVH1S%2BqAHXV4HFP1F%2BR6AY1ACjHStDHs0yUeTgWPMBipXAVlNIuPGDFly1iVClzp7pL5GMcmU2GBQeQ0Im%2FcawbGnqi&X-Amz-Signature=bb0fce4fd4b0cad6ef061cb0e57b52347dae5d1a27645344d32103ff164bdabd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOCDD4XV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICuNkPeJfAgjC3cQ1EjcFO6ulGIJINh8X4XlUPMH7q7kAiEA6J4aosng3T7z48kkv5qxots7FHUiuZvswZQapagx4ygqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeqw%2FY2KNnk9x5ZFyrcAz1relGA%2BnHCgA7%2FLDumOp6C6iNYlXYWOksI1RvtUoUm0%2BSOReZ9UF%2FARlGPmft3MvldJbzntMV3uzms62OgTH%2FCVbFhb1jzlCzxIgr8wWhL4RU7OQJCpRKCYzd6MB3HpdUXh8UiHpPStqOhGpGlNuaC7I9qj3eKlwG67szmR5ErS7BGhRRtJnyiN42NNvo6lixh0antdKpksL7APlMS7A9m4Np0AH2eoHkEjeMoNPyk%2BkeoTgBNH%2FFN5dPn33Im83PIxyhso1D10knTnwhEimAzBfU3jEaT%2B%2Bsr%2FFmwt5f0ugTigLl9qYtr37mZP5DWIiZC3km5ZRcKnLQThVH9nbjbDXSzq3tO85D7LyVuMZLenDw8yuZr%2FywfYOyfQv6sXOeuJFV74xOvYYUCbagx5Hjc4hZ%2FUFBjJJ5KcnlAYMsKm748gXhJywo1Q82E7x2dUyKdrQ8HbWC5SOsy%2FrlPURpn9pH%2BdfCSuiNs5hO9an48fa9sdOKn8g1Lh%2BafaV%2BZEaWyy6cPCpMM2cnWABHgNRrXE8xyKNaqpCD4h0%2BlQUoNcjVvvj3XDM5yxWfW5CThKRuNbiakkcFLRFLj%2BG%2FkVwEoLnrtYEOVZCiSDeKGGu%2BevS6k%2FQL2S%2F2y3F8RMP3s1sQGOqUBPk%2BReEgA8nPO4MMMTnG7rJNHnErk5RovX3SNmLEw5W5SqUs6oveoiaT1Q3lr3ryOJgfBKeomtYcqNg7Jfi%2Be%2FMdxE4oCVdb8UApLy3%2Bdu59Az%2F4%2BejJQFLuLDhgJ8Dn3OeS7UYZPLW%2BzSVvkFXlCZv442rgDq2nBe%2BV4V%2Fb6kmGgPT0tTJnga1lNiqgEkKZdjNo7JkDYl4X%2BiEij03ZxUAxM9Qqj&X-Amz-Signature=4d02d1cfbbf9ec8a581a65864b8887a470a33e3c56193a1b790086f73935724b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2GUUFJR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAH16nnDBErgC3%2F21hl8mMt7WpNtI5TFEhVclVvx8RjPAiAze%2Bj5lbgcElMyps5Xt%2BxWIOjTN%2BLzGTKlV6xhCITPAyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B9jh86kIMkTSvJ7UKtwDMwEELJazbCoNabfMpcUFbsah4aXV2AOpAQs87lNe6xZ5G2%2F1RPiZZcliA9n%2FKFA4c%2F4B%2BQQCzDruv3tBK035SJPAfWhkbUkPbmXGVNrw8sjmUagM9gvqkV6MOCFnhr%2BMA0%2FKzsIKpbmr9D%2B44F%2FcUsbP2bErZuw9wcSbNqlKYRQs8v9enAZX4RjMLBUj6e008KzhK%2FdOQxCv4FtwuQL60LubolnMfNQzjfBJ1c%2BAOqMBz7%2BPHM30Oo6as6HQci8cPHD1NN%2FDRSg0OH7JR%2B56hFL%2FPoRZWa1F153qsycYo4SSD53OaTn7NZ42AyHDXrBYnYteeGyj3SGKp9HPm0paq6%2BHYR2JuOJ022fHslTYbda9OVo935C8WZ79SliybBsTrqnEoeab0UEC2AQQXVieL1%2B%2BbVNu1VqiJwa2vsl%2FNhHnPoQSs6U%2B%2BLHc%2Bq%2B4H%2BawJvWgEsxhCBRlA4Qh3MTNrb29nzDBFagNiTeT4I4yXMUkc5vBmnoTKopLk1HMDO5m8aZNNcoL5utYrC5PrURtGCRP2N0kq4E4tYxQXg%2F%2BjC6h2KRimogDOUd5Bvpu6qj62l%2BVEI2s14VwVTySkiBz8RnWDu0A1hzGEKWledtqWFM6vKaQgH9VNX2VEeYwoO3WxAY6pgE1MeermO24qaeETWZmfKILw158AJHKuFRg5Gdyj4g49uFXxV4ss%2B9%2BUVFQ4cdjh0cMa3hRaA6VAfzEL7UL%2BjfDxftdy%2BC5aW5vQfaeJqD1p0oOJtiqdqZplwwUQBh7viJV5s6nY1%2BcsH4dBBDQ%2FjFyKr5yApvoorICS5RgWL9V4NcWcDc4s0CU%2BGxx%2BlOahYkG3H6Pa7nSFTF9DEJa8EdFa4YkjUPB&X-Amz-Signature=16681c577f0e0f0c1fcec13217ca741c5669e88f9aa4029b411f6761f51b0918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=8631bd178f1a1423aa38130d86f437e0138e5a2baa797a6a6c3e86018411c991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BUPHBD5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDatwJB77PKXjUiaM4GSDNs7AVzq2wH8IibRpPatuiEmgIgd%2BagezIh9KE3DEguRnvM8mBEuOwSomc61i0TH4%2FFhhcqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGSi3jAFzF2UuitboyrcA78ZbzbCL6ImLKMXxuEnKtHQTj5pYCQVyNf0SowFHPEOtKdnvFltmHyoM9azgOYWsqPehL6%2BZPjZqwtf%2B4txwjXea54vRZMp5j4sGNcGI8hIg27RbcJFMkWtcnuSTJ%2B0WzjFYk2by3aFxCpJDVCu3d8inkiF7JitKkeMZJAAib1CHKyOV1jMlENgt6%2FgyRpATJLnV%2BnfgYn3sK2sCjWDFZmGPumBUS2yNDPJwJlu1uMafZub8XBuJy5bbD3u6ItENpwMuERQQx4iefbMYObFzvLYg0kpqNitWJIulrOuaQsuzTt5qt6D8uWwzymsJ3K2cm3OHUh1qlwslsFJCouI1eTP3NcFMKNvu641HrsnyYaRcyPdrNqYhuxDMbEnHRtxubzvocnOCf6sQdd5kwsk3bIy8nJjJ54zuikNZV%2Be8lgB2kTDpWX4pDJPsV43zARyO58ZyaHRWtcyqwIuzpXrxmAmEvVzTNaHOJXePMF96i9quNOOTeegpGjOPKk3cX2QWd5J5x9aDeYJzEcjEqlPDSv7tsUMv0WSokMTRwyZIOinwAlqhfjpLWblbhTZo9eiytinsCtLpc8qU%2BBBI2I2vWfQ72hl5s%2F1BXts9zHyFv5E8Jt0rDakyvrm0mFMMMLt1sQGOqUBFND8QJV6iqPqFrgQ9Ip8u41TWEWp0NAOnFzprZEC2vGACf28uolgJkLIkwtzTIfcdp09H0d9xtoSIFHRefuI%2BxeSSD1EMboAU4ysygyjk2%2FCucyr2ZMOamIU0CrUxIo6c3CrNyt3aIPAsN%2FsT5O4AFUDdtbBIpIuHvpCXXf0gPws4EpfrbQELgPwtr0D%2FRtOwXNo5wq1MFocYkxixJyQQIYpobDN&X-Amz-Signature=1141272c8c6936016de4fb9403534f4c31a148dc110db89424fcf58ba64904ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=5eb5f9aa2a471825f320497f4a45868ac20a749768648ae0ff4c4eab59561898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RHBDDQ5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD2RIuMFtwINB2cpsL3iDoqRXA1A%2FUIzbOpmId8HBfmEgIhALcRqGo2nHt67OdZKp%2BsMbEtwXilX%2BB9RrIEMcM7maCwKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhzBHatr%2FvByCdXyMq3AOgF00pXEpOqfZa9xyKsqTEdZgrWT449LAA7c7vFedbZ5E5WZwpVbV7T%2FRqeS4y7CYJEMC%2B0OrIXnn72i5vndVvsdiFyviq2IyiAxiEYLz76%2BtmwqQn2YH3ok5yXEWKrNjYepSIC6zdejDqpVZ%2B21EIX5i3%2BDnqI3oAN%2B6iO9QulzpPUEZEo8X6Vk6yX5hiMVtZG1DNRUoBXzz%2FeqQJxNZA%2FoaL%2B120oQc8pxv0eTBgM0bYsCzGROyyhcwIHSy%2FtvgGNiQpLDz7ip%2BhxxLUygUHY8u6J6zmEv1JRASJ%2F6GiKd5X%2BXksLWV6UxdBI%2FKX601DKaDH8ro5W0emJOkvIH2qE9%2F5l70c%2BAXZSMf%2BrMyVrJkZ%2B96jVNky52CfbmUtz1u8sDUKKTELkjrFhUC5R7FqMJIuIfh5YLXNt5V3j1a9RzRXAM2lvYCIBUe90Kuf6YOvY59g986NiUl0Psv95hu00zUkW%2FvxYsWbTm3AwPKUDuF44RPCpxsfSKUmIgLlH2kHyoSlqhz2NQSNZKiVIClu3L5vZZghOhGH%2FgY8Im4vQ9pd8m57qM02xyl2Nf8fy%2BES9q594K6vYT4mFyYlmH0jlsavS0Pn3I8TtWVx7teAebup%2BSgiuNxxtwP%2FFTC57dbEBjqkAWDQhMv0nXp3bdCG9ZuKckevjPhrSoUFSxuB1lUGYzpux3QVuRab8j3GX26lRTbrCAoprJbgcb8vVV1UesYPl9HcdCJiz9ez2K2Lb5zum9gG63IqD9%2FW99cYdMRzBoWUsDTe2un92p1LmKbzcJMhz4m%2Fxh2T866Ldcn01IFwn0wXkOXG0nubArEs8x32Z7O7Kg%2BjY4cCNDWwe0o1ybPaC8k0WGVG&X-Amz-Signature=3791238f5b41334eb6f67a90dc7b233615ee82ab32972aabf3c8cf393a7cda35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=0af99d43263d7b2081646379e79e8e8539db0096151ac4e9ea1686f7b2fe30ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7HOUZ2C%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDjHI3RUuNLSVEvpby0q7462MO6HNCj9%2BUepF8MyqQcbQIgLd1OEZ4b0D76Uln4aQB7X3DStQlyU4yNTh0GRHlAOs4qiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDOebfK%2FWqhtl0RhKSrcA%2F0%2B%2F1igeIxUE7zKehtqlfLmX2nJlcFg3jT%2F51LP8YiCMvDCjNZPMRv74gJ2c9ikRfSyXFU3xjVm50oGvbY19temSUh9LczdLZgUP3immu3ZcQtU97DfpZ5nURolSBS%2FOZg4RwNBxBWKrNHeE%2BmDsWQ9RlLQ7579nm1xyPyTJFLtDdDfo5rBoiSIZ%2Fpwi85BHDXCGfX1eRJhS7Y2ikaX1q4JY09GMw7SBs%2FRKsfyoCVXk6U%2BO8ffLxEfpF41Jcr28my8ueiCmB3%2Bzx5dUtO%2BniEl6Jx%2FO3Tt29%2FoUEQe%2B67kaax%2Fip5hcdT1dY7zIrTNv4R0qL8mKnHNB%2BnvEsbn2D9R7zFRfwoh2QHboiwwFKpqcO0vx%2BV4CMJmT064%2Bcty6%2FaL6IVrIzrwfm7TNwj30GrIrW%2Bp75VSIgZywE61u1U2ZJkQuNUo0NMOZcM6i369OpB2dolUEBcPppN8Nxgago9mLSZIeA8EiXEH3rQuyc3oMwIc7u1%2F0HnFd4Q0EiP1khuEF6q9ebYW29VIZNoQvga2oPTdqK5ZDgYJ3aLSgXUEz2K004bIXL3h0NXMkJF7n6johyRHHZCwZSY%2Ffylvw%2F9BO4UbTLYWw4R%2BHMLICVvLtZB1HT7fINYqarDrMPbs1sQGOqUB%2BYIRoNMJwQ0e1%2Fhr0jQVv8OT2jm1GSGiPDv4vBQDzJ6lVbV5So1KZg9FmuCd1kokUHo57M4W2vvU943EcwJFYCtQu5aFH9hPR5WzK1L5UBFZ1h7ttielX9nSX3w9wtivPP8gnGbXOcB1IRcy2LIIkeTCaNf3%2B85wt8V9H7JnUtl6WXaEHT5UYIZIYj4c41j3gq8ksogJuUyNoudywTUqcH9tH0sU&X-Amz-Signature=95d4de2c297605a560dc17bbaa38e85b63e316242cdbfef195aa35d38e66eb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=7ef87215a61449efb3ab5600ecdf4440690e3ee779e6bafb5b60b6032c825be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UCX2LCM%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCt9DM5gEQI2jMegazjvOueJWH%2BoeFMjqMYnOlbs8OpkwIhAI1IXUnf%2BvajRxbDSOKgVagP4YWbw4Pt%2BcxOJrakqw1VKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFISzyG21n7T6gpvoq3APd8LYYBGoavYOtdBj5z6LsqrBdojzfzvceAWIwDBIl7viU%2FnwbSViuN4pULt6x%2FPqTckkGk8ejv1VtHYx6uSnkH7LNpjbKxWqZ%2BWaZNdIdUwhpbPWPv9lhUl0bTBxUc2cOK5zPyz04jqRkBPYVopyJHr7gEeUhADIufwEV8xdTxhbUgkKsd6bE24SgHqTTTK3WqY7eQ1Yol8ZHZuYlqLpZ%2BPXC6E8dYVRgY0nshLSNqSbk9vhMLrxJFRzYNZgR5r95caEBiWeHg5NCg3ADUC3kLiWfvfS9bDRm3ksQxSsEC1ZCJJzq6w%2BN55fULF%2FADG8vcQj4CgpqX2NqouXQrlKUuIkimsn5QYAmzYPQivFEo8o0ATs8sYBcnvICGRhokdAHB0qbYeXIr8szTJunTVWSnwC6HQlRA1NivtfIlN0QDB5T6PZM0xXMPTR9PwdcW6JZ4eX0MowLyqOlsJEVlj95YU3jGM9RtA1eCvgahxhF6Dgl7oi%2FffQ4GRre2NKhmRnuE9Zm32n36E7y%2BbKsRcRo1ecznhQEmbnGqZHNnZTuRUJB46iP%2Be4zRnkZ6fksSkAcqNRNwPkbKhofnDGJwQ%2Bz9hrKvbwmDpahhTH%2BmnhY4u2xySjCjxj2iBRdZzC07tbEBjqkAXu5T9fBPi9sa8z1uidSxKsrBmnb63B1i3dr%2F0h7w8P4VGXZdpI7YIncepjbbZDwUh7HFetl%2F79drKaa%2BGrZysR79OZkjidDoO7PjydDwJi679iMh2lfBUs4ZuL90AHlEHYl78eNNs5tZs%2F733jR3cFzYkWA1t9d0uCGDPX9X6r9CYHu9IYaZYYLtwQnxRSejATgZTqN%2BL2dGLv%2FF0wi%2BourWFNl&X-Amz-Signature=2d2a5f8e76b655a49fb7b65107e5760aaae71d0b90e26004b5bc143619c1cb9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOMB6J4%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCICeo7c%2BLhJxDwF9PdZhB%2Bw8GaAG1X5P3ZU7CI4WOJP%2FXAiBkYxRWYMZnoVMYGMNTMVPMlHWhAf4gnVDYSJbO4bOQMSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBZ3mFYTktpi8%2FjoGKtwDyQDjl7jSXzIgSwnPUOQHJM4XTFeIcZTsFsvcJe%2FA7RZqMmhXrh0UCm601ix19vSYXUYIDUV%2Bniwvt8aK8T%2FbnhnE25tAwCfdmwwYEKa525R8IcQq1SU5k%2BahWl3olRW1DcxzBdYKTRdrReK9qIdMm22ctdcAvl%2F%2BHnQTdrP2lDmnt7%2FI4mEkJD6hJhHZfbb%2BWxADo5hnmezbaU2vNg1pD314v4WY4WGoAJ4OFt4Xzf8zq3D1Z3MyKMgv45eLacoPVs0RZB35l%2Fwx6rXaOMmS4kK%2BZ%2Fn9QW1cEXWvwFfdBwAXp9mXm1I0Nk4QnSM5SrXiKqCg46P63mFECLpgF%2FTL2c%2FnpIy64c%2BCAoe%2FNWOh9zU%2F3SIoSB6vXYa6JjtDbs851FTiKha19zPtNfbcT1i0KVvLVCwSIr9Yp2HIYGFU3KnFcGmC3A5cJwX6W%2BSezuy%2BTb1QJ%2BohdIbEI9l0OYDC1d%2FGkVk1Z8bZAnP4nzyHAZ%2F5CdjLvDJkykiz60CGohJdT8JzSaLwQu%2FchaIvjMsYxq9hdEv6yyoW%2FdPIgXRldNelxSCiQP9YrIaPzqETBlHcmXSfsPRWCrvEdcYjNwhIgKo0FfvDeOcvgJryuV%2BElueHG%2FLTkDpQEBvmsAcwsuzWxAY6pgEaczPwDi3jNXHwol9t6u7doF2u5IB%2BNcwxoqhmrua4qnkYNGcrqo%2BQFArnBo8gehsVpte45JK16WjFxYwSZNFBHmkh4bsRH1UDWkQnad4vPyQBZGrlMBTKsK8zpH%2BSgdGCg%2FKxt2fGY6gIqhCi1BHlVXB7R%2F9n3ytNDMaN1mjSN1K7fI2B19vWGYlXamR0GdmFgh41ShzZ5AOQCyeieDf3F3hECiPE&X-Amz-Signature=9009c73d01c54e314d5ffaa3f50bf4a94ffed5052442ee15a62c5bb43e51f4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TT2JEPE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDyJ3DRjmQDk%2BfsLka5ep4JND43jenfZX1ePz%2FtkmBE%2BgIgLgE%2F5saV2Faq8BkwwlETTWA%2FfJW0x7y%2FZHQ8rMB6hNsqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTwxtslCn8ACrzKtircA9N0dZNqELdsoE%2Fmim2%2BINY7OuPt3zJCbC73BkAyosGNj2S1huJxqehimQb%2BLEACGu2Kvb4057i5TGygaskwhcVU3VdMKBFFxbchUN403xridNiKDEOHdrK4cVrpOO3Y14hET4EUzu25HOmd7vg%2FWOzWT9DuZANJfr2Fnt9GRK2xMyS4%2BUhT%2FoY1K0hQYo%2FcFHq77F7gQZrw%2F%2FpxcgT73t93rnS%2FQz63gsttirUf5BazQoULJLscEYve83%2BBfHtoWWlNAzY7oyjwwXesxLjs8ywXOw9Av7FbAQ1iD9K1Ng3a5ETf4LHBR85zMpHfDtjpR6QmCBgBTUDa4XnW0J2QE0kL7nbgahY3DDQGOPvfdgpslk4GCf0HuXgFchwrhijO%2F%2Fd37DzAAR4j96jH%2FeK733P%2FmCsgReHnqJc5wy%2FmeDzqykj7xvfDHd2E4AAuGCe4H5jpBAufcB%2BuYIMx1dh%2FC6K%2FWGoxJ6Pvn8tBb4PTn317uKDx70ym2ZJHAqxrwrQlTbD8LzR3tYvjHrI1DGsJtkltJu2MHsRuWoQm%2F%2BVwftmoVtSHcdwe5inZQnbB%2F0uYc6Lh1qBAORVg85oq3i%2B1v0a3qnTWih9oKWNuLvhsH7dlR0gr%2B%2BRXaCa00cAlMMns1sQGOqUBjQWK4wfyn8Q%2Fa%2BaPu0dGJduLPMZLelc6VC8QMYnix4YhV2EgmXCgyVbEu1BLc%2BdXu0J1Z1kCaoBp2mMdx2OPz94uf%2BWpnEeNATyEvvG6alvku86xZrTOX9crF0KkRyu6Ai3VuMvnWgHR%2FD9jfXS%2BFSqqnEstSJ1nqxBUj%2BHDXFuw91YguooWyREo6zj1caEUFXiekbjX5iAj7jObcI%2BGYnhuumGm&X-Amz-Signature=99be2c72c411fc71f5006feaa61c27afd49eb8e402d0db8421498a52e0480c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KTRW23V%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDrCrbiMGMdd0BKfE3ouP6BozxAlAHqd7BNaDQQRV5V9QIhAMkI8%2BPT9oY%2FM1thKKNp1zqPwugHD5XXC82uFCMC99E%2BKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdixdXa6FnhgfOTGUq3ANoH4u%2BIVvJhE182HjEWSdfTR%2FM%2BqAXPWJ4sOSyROETObLuvBmpkm5pJoGgLbkEFoL6PycMdl2VROgb9XIbRm2q6omwOeSXmX5Hfueqr3iPGlfCgUL1k3qaCZ1vTyW%2BVdeFefnTk8lcW3rAheraor2MKT5IqUJ3nCEvcxqSQphipoj%2BFygkLYymQ0HdQdzs6BkjlUqgrzkc8owGD6PGRoNZvZmiDBDRJvcctgY7ZJgMtyErE%2FHtnM4MwZcweMrTo%2FA6MPVob55YaIZXZ7gbvDjD8WSgi5B3wLsrJLzywYuWE7VWJHG1%2BNCAhSdDZBB%2FMeQqTlrv8cHpDMD5xHHE11qX5tRCuOxg1V7YBqL6BMxkfCo4v5h5NQXXRE%2BlXihrmR6y5%2FwmTQofkV%2B7vqgI%2BVs83hDPjYEUKHw2YvepRLGO7EZsBImogG8xctXlMwec8UH7V3Hiep%2FSrrak48P7CWQPqVF1ybuFZ1PAlZBLO2PCOOnIbu2Blt0jjQTTByS4p0wlQRkX6GZwt0r1UUSwOURjV0g9G77UVnmK0ijNcwbEEHs8kjsFPcpR4XC7LCe0zrlSLTPTXOK9c%2FuuL7NAprM27Fqg2YvDkafLRfy1AvVktCy85SgTJ%2BzFQ6ww4DDO7NbEBjqkAZ2BpPsRiSJIRWFL0Ljk5VsVqmc7caceetkJYlOmsFESZvP3wXf7xczIR%2B9RwqOFaFp7HQUiYy%2BqSupm6ecxUr%2FTswopsy78faYnhs%2Bff9plAjBdHVI70vDjzaEdLaVsz61uDrTvcJSKSJ623itezYAZX0Ch21yJEXC1adC9%2Fj5NRcrp2KxwyL3gBeAQWR%2BjPlTU6LVKHBi75JB4pniDx3DEi8wU&X-Amz-Signature=f875822453644f47f07b71dca724d2947bbba434952b8bc291c4569aa262d2c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKHJXFT3%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDHMNS51wIt5rf8w725Gqt7xGi6%2BnMVsNkjYEiwUC5s4QIgYtikFA1%2FP6aXYf6OxunA9G0NqsLK5Wnbrj2rThAAHHkqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBuz8yOwdLvl3y8yHircAyUsYx5Se2%2F2%2FfysrvrPhqTmBTU4CQwBm7339HXVQB9gWpXWv8MD7XoGmfeE3WctTUUwPX%2BfcQWjgxAk8EnG7ESkG%2FnETCoXiFt6GuVNma9yx4uHVP9K0UaFtrVjBldILDdx8HlIupqsyqFuMayRv8vnOk2pAMQP2oiW88mhUmppEyHEtuYzuIFy8u1NjmjJG%2BQoAd3E9n26nof%2Bf1oQCfWYe%2FwsDgqThwHt%2F9rz%2FQ%2F7%2FTYi1RU8FE8pDgKTMGRxz25GdnyFNCGmEFRI%2BobHZpRLlw01q74m6Fkwgue1Y2%2F%2B02lSVC0UIOJ3f6okFF1Yw5QeBOlO89CznKkoJm%2BGUQycIk5gAb6v6%2FXGXyNMA58XbHPIdJgWB3d5ennIGKtSjaEztiB1EnXJqRK3zfiwn8Ol%2B9RjvfQibTZAXfgD0HPpuvKbWbJBTanfI1kKvesPCzlO70XIxXKFStW23X43SE0Bn%2FckaUruHG8BKMHPJGdQB6HZ1XbOoN8Eie%2BrdAHr%2BzWHDOh0D9rVI2nnrRcGDU6MFaJwgkUnCdHwrzQrpxHelzKM647NKz6Q%2FO3MKXxOMEPsJg%2F9SZsPTYQ6ZDTZnIDF5sSWo%2FKDgbwiDMsyEMcdsNn52drrvNuJzcZ8MIHt1sQGOqUBVhQl2lzjothPL3U4Z47WVWhpWtIsivjJMLakauittc6Yx2gLQ9rhcPtjSoNMqqCrKY6IdkmVC5SdeOjE7TL4AhChtm8UY8nqLp01kCD4m9KAj6tTqZkW94WUv87xtp9ikegVKcgvxr8dFZvnHk4lamHFWX9WA6eSkMBXLze6PdTkD6a9nyf3E%2BlCdTBYDr9GiwGg1F2U45vUBEbcs%2Bj3aX44Vw7P&X-Amz-Signature=ac984affa07b242adca5757cd186dc9bea4e9aa60d6dd9b993dcc51287354b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=89874bbda4a965935217d548e9c43b43fda26c31bdfe3c27a21a0a256d4e7b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THL35LIO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDeL909SBT6LXhj7BAPE2hcQGvkBSCKFir%2FAohJ1BeyKwIgHC3%2FnQlNv391YeMulmWbeRp3Y%2B8OAjKGlV0Aokw5a1wqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPdRvUrgaPGqLvh1GyrcA%2FgQwXmOtyA2CqakSLOb1ujvFGFgoX5HD3PwSn4xiTdiDL14ki%2ByyWacEIwQ%2F6eRQqKF7a0Zj0mMLIjeJ93hOxSMZN4CBcrYTR7%2BQBj%2FtbpfMUt%2BXbRzVomZdVKI1%2BZekZR19kXrYKm5AOfJq%2BCS2fF2drRQ%2Fn3OPDtM%2B856NAIKAiwNTOmy%2BD7WAZ32PC1Qzl1IQadIfQ8VMC3a7WAJoIbvNJKFbfFJViK6FsoIUeVXXHBYSjExuy7tRLIOIGy1fmUOQ3LJl2peKt6qCPzGaJ1eDedrYb5e7qMA6OJJdO86Mo6eVqHpKVxbZpXY%2FMKScJ7S4W9tz6yTt1PviohVCeIfLYV%2FprHRUIRnV%2FV4l2ZtOnLOQKfjrdFoY49%2Fp9JE9SGvSxu6x9Bu%2F%2FB7sl%2FDXUOpJLXFiG23Bt769Gf5dJo%2FykMLBP6pmc6JZAwrUkvZ2dCa8IgM3L%2BJoUNhffN9U0E%2BxSy1sdQOSwLODhU5Vmgr5TZ4Kun3gZNpUfRsGfsDRDbDZcpmGVsV4KAXLw5sRDk2YiYtRY7Mw8g%2B0D01cF0H2QgEhuEK0Y7vz3EpM0mk2T3xMB5kDelt5Q6oL%2BH85v93%2BIcuKF65K4EktsGOKW%2BocPI7wshJtg2cm3SZMI3t1sQGOqUBrhXOYsYNnoUZY%2FwS0wpb2y0Da%2BHyX3nc52OJVIweqHwX3TzfTahaJ714gFNVnW5VS42r%2BA7akhbwUfvP8VrZedVxY7S5T1WnaaZ0LxQTGd2Pkpu%2F4uoMvL0jlTFyRqgICuFGIAZTZCCx6Q3dMYszTp9NpTXvIVdD3E1zM0obqN60W6T1ab%2FsLrHBlUU5WnqFxOV8ZktR9abh9a5%2FG6Xoar0OgI9u&X-Amz-Signature=3d51c4852c8d2047454cd7f81c0f3cb5df87668be594ea7fe53a1770265e2641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=f678ddd10b2641f560842f8973e40cc62a0755c2ceac7c96de2d4a9555b01199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=f75e584a09470d757bcbc28e010a15c2870a714bcc97821635402c4ccaf1fe5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=d2f64ccae9870aeb10bb169a703e9959220ec8e39dabcda7da8083f06847b364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=e5910bd5a18b0a37aa3be85cd52c5e9e8135252fe39f356b4e94b71e221d71fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=79d66d5d776ff390463b9db91bca89d66e07cdd41626ac5cab31d7ab1b9ca6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=4b97cc507b0933d694405c11d4210f8b28ece3a893566d73bab84db6c0e79450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=e0f77ff75550585bdb9f1c94c2a671ba06af359401f6ab64aaea153922111072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=c54acfd29e3755e91749bd9bf2878c51245edbefdcdb56f43bb1104d70e51fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=c3b57d300f954bc112252bc9317e4fc56a54f71b53db401b6492b805b9746f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS7QPFLC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEyMtEuVXihP1viLumz91EJSO1jz%2F4GOsMsBCyYWjpFHAiBKMe%2FY7gtUE7Jaey9xlDcXd3YagUtWzQP9EIKv0C02%2FSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdL2ZeY6OfjDCmyYPKtwDajGCG2tmkte%2FQoKedt75eyPc0DyNKGpFalF5m3XFH%2FzLyniMooSY2rQfxwDySr%2B%2FpXsBktAJP6Neaw1Obq3mOgb0PpOCsJgcIP%2BLOOyDyt7Ej6I0BMmQcmpHFA1YO9n4yf6gL%2B0LFLw31cJ2L%2Fcsk1Jbmy%2F062C91B%2BMB%2Fq9UerCsYAa%2Fge%2B8Re7KYl2pRQYly5gQy6JFoDxQxQvLtd%2BgUI25VDbS0WE5FM357B5agwzI1bWWXEbr8TJsxyKWVIP5oe5%2FQMYy8Ia3ipFRrEdQKQsYZHoIqf%2BWG4fs7v3yh6%2BwoqSfxeSkP7LW4kdC6eWfWbXibEkcYiAPNE3lA%2BFsdkdXN4PwEPuzi0621wcmucvw7fSvtT1CURruiP1Xo22UncTOyQUJqpEmjA%2FrUzF6WJjI1n3HfInuh96aXhOuGXqo6zGVKaTvValDH33N6EqmpT%2F0xLbSTKhCwFL9pE21mrDy4NThAMBYDlS92HHv5%2FbAqSavar7tfK7YtlF3B3g8GIi3YvoK05ziUEkfQrQoyh1ek4bTz3vYeiZIhwq7OPJDMfYWDl9XwNiWhAc%2FUum84wrj7Xe0yB2sD9hPg5i8unL3TfwUCa8300Of%2Bqgmukg72ZoFaOVXgmcTz8wp%2B3WxAY6pgFoquRJqcCCX7GfolSFYbVW8YpIgFBQJVOW%2FA6g6edZaC9VMpr38XHIQ52hnY7%2FZ4zIveZaeEJM3QB6UYgdcYRmSftzKbO4CIXhOpDagNG%2FRZSLWy5GavBHt1o%2F87sGx2y6lfW%2Btfh6MU5KNiUiQoFK%2BBwZZvFZlBsy%2BFlUIt3V7yiaZZwmkflc8nXe0sBUk5vcS3Tt7t6z9OiC1o1vvcOHsGAes0q1&X-Amz-Signature=8fc0e29fc35cccb91dbe372d05eab4daa5b0ab77b9ce5eb3926a85c9ef86e856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
