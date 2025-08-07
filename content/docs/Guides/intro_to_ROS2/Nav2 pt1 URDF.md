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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=d018acc67e2c66bcc65cda7e09cc3bdd51efbfbb8e3617c72f6a45b1ac055238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=beb40ec6431e35d43b3c5571a0cdbde091d5e4a90ac742a81633823bab51f514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=d76d44f1ad2f9e21fe0ef6a1cca6efe6bd93ff50d5022cdd1b38d51285fc81b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=adcdab8d2cf0879982ecf3a2c25b73bc74705f7de2d500163b95e6b80be24f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=f4128bff6be8b5edca4536a7161d479e594d68c4de15071602b0122fa448fc3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=027e4c7bfa6d88210ab5ba3c3e6f399776be5b14c799545078f1ec149bdd160e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=6de1e7fd55a9e01bf7411518d54f5f656ccddacf6330c8e7167c2a080e48e87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=321dd351f32bc273d934f188be523b715c9c561d892eab5bdd6d288d27d1c2e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=0084c1558787643d1ca269eb24c3836a852a27d565ad4f490e7c1604698dc847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=22efd7202ca3a518426a207ff4d50e6adefa153ae769548096e3b12ab7026571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SYL2QV2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCICBQ%2BDfS5xQbi6MKVCWY%2BXgkFxJ0zrSVfLEcoSnf7Pg5AiEAwnXet8oThWinYmM3EiZoP0zpfNSar5ylLMAoWnsSE9UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUFxaHDVtCvXyIEiyrcAylY7UcivUdfxE8s64VGP%2BDAbqXCxjAehKmdt9ZSorJNTwAmae3b347pliuMmye2hrlpCepN40csff0VGP%2FLNppQwj4cCPZ%2BjhdJW5UMthnPA9%2FCzcFMR574hGo5CDIKbftRw3UQBR6RZOVylkVlDUVCUy0sOiE0zGyVZg0VbtlDOY8QdthL5zCNcaH7W6Fz2g4z0%2F3SAcM61XqITsqLHoGGr%2BNhNbdLmm8VynEAouP5EBCyW%2F5uhGOlojSOhnlEijHk0TlsFi88Y%2Fqs0fJdURYC%2BSJ6ynNKpCuqKz%2FLonkYCHP24zOjpfqgtouneuTgIVGKWw9n%2BguQHZAS34Jurly0tL5nfqu9gkKgJ%2BjTd1ZUbhBnXAmvDoU8xja9UQfv5uyyv3coFK%2Fj2y0KaBurUfMduSXLcfwn8siiGx05T6Ogn7NTxwdJiNv2p7%2FwvIAYre2CkbD9r9gb6IXMe%2Fi089kcy%2BP9yDafMxglPxWS4i%2FnyajEXSluj8Ap5nzlS3USoJtQTGOVNNxst5Bmr%2FBMF8JOayrK1VqZZByu7M3%2FK8E4Xgvx5ZRUHXaWf1dIkc6Ef6fcEcXaCNEXhrYDIV6pHLZjc%2Frb9QpMt9rIrKmN7RbVC0kQLOnGMawD%2BrCJMNjk0cQGOqUBnSzJUi3Qq7onIMGSc8mWCt%2FY%2FBc6WidGIVzoFyn2sUFA0DLZ9xINY8rbsKDJXE9ElatPQNv4eXyX6KgxrSljN1Sj1iZ%2BXVASM5gApnekPVtWVHGZNt04CQfVfyxU%2FQ%2B01oEvgnsP%2F4SKa5pp9mfA%2FoqxCwhRwB5vdbSQXcudB7JlNkP9jm1nxT1UtouRX331aa0B8JrhAECsQRLXzm2H4q%2BF0UyI&X-Amz-Signature=a089c18cd11cbf180865f5f2d9f170453c578b3fda02b3c6154f20e291004d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLCRJVN2%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC74bEh%2FKQlHCged2ZiTw0%2FdEuJaV21aGZqMYu8dy9GYAiEA29OYseJ%2Boa08ZJlMLgTQ01rg%2FUaWwp3UVji6Gf6gndAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFzEddyQnTu3WpevSrcA46Jh8t2aPoUrL6PhpNI%2BHX500kmhTPd34jxGR%2BYjpAGwlqgf8pgqhESyF7JW5nklXPYiWorur2pYn2M725s1ptK17mA%2FUxXCUihJwwFigssVCiwXg5sU9QKUlgAOyUuXoj5vSANeHk3FKZ3%2BEn1EEIR3HhMjW52%2FKu3wkiRgc5HYfyoRy054MzpyBaOSl7UBZ21FM7gaiAMP7bAYBayG%2Fv9ZZO08mWtWqPttk%2BUTsDywX2sqMVXu7tdffC5zytpwOu%2FnVZQa1A62wLMrPkEe4CcyQ3CtVGV9udgBdqf11tpYkhjhZSAkCKuac8cjNqFyIz64MAQGOIf7Jh66QA6zOYaHe8OLkHnHVa11D4jtL82MEbaYTlXk4uutRvlcoRgFKrS%2FDi%2F%2BLdujHKVN3lZksgB19KgURztFNaMt0yMpIZHp79k%2FX8vveYT6GLTvVj4HFlKoUoPCVwzWviyNYc%2F%2FCRBeq0ppYKQb9Wmk7JwiOuiysoq8xE2vTPMitx96wUZQ%2Br5ZxErEiqzrbf%2F0cvBbMfyrxUuQvV%2FpZonNbw%2BKbUspx9sjr%2BQIf0N0Rj3eIuZDcvQBf2qkptG0xiaC42NYCOpDvKa3JJ6GGMmDo31a9fJI%2FWpEn5tjsE3NRVuMJLk0cQGOqUBrhpZFV4UbdK%2Fm5XwubMP5bCDeyKlr3rVvi5kMA6HfC51p%2BqRUYuZWtbZg71X%2FWuUEv%2BfyHhhE9%2FMTCRV6YgVw%2F6m3m3wpQO4r9zRTyNr7E%2FJQN%2FimbVHFWzNJ960W67cNn%2FkkLSM5jtLsUm5Q8BP7yAVda7tWcWueq0rrKu9J1InRJeq0LBEc8BLsnbvreTY1FR5Gc%2FlXWkZOe%2B8zEzCUnEgNwF2&X-Amz-Signature=e5b6a9fc72103aab5fbdf679c341e72cdcaa3e822b3f22e33bf832a84476bba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIUEZRV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQC%2B8HWVdeg29CFVpbbOge5yiV4gRlhzq0eFyIrsksd39gIgKhuC7I%2Fnz5i1FR3HVHAeu6ju0mvrfTabQpkzwiImvpEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRnGxcNSYTHNBESrircA3W6GDp8YdwSX7N0l2qKUNAsjqTpFlPftODeGbR34TVXRoe4bf0ld0MQUpFaNPDz6WKxmRnQqYBcGrTdtluDXCGBaqwKhN%2BOJzFgu02FrAG7SE11iyWz2AoUgFtL9ZDjX3YJNscpUWGe6Zsgxnc2ajGizxlQyFcoFBnIqLqPgUMugpO74bhjxvCn7DyB3A%2BpYQ8P4G5p0XVYqOFh9t3uGg7n0y751leWyEuxWgNd2%2BMIz5aa67%2F083Cjy1yJdIqLehX2PoYbXpvwJDGIsSpMsoGfskw30UvSOEgW%2Bw1m7p%2FhE8DgJiE73sPx9R2a9Klka1taOXM61lrpkE4YdzuyJJ16I6GEZ%2FZz5gjic%2F8Ap1Adw31vBj2XDqM4CvXSWs7YHh%2Fl29s1CNGVZBLzTX%2Fam2PlgG5bijOI0DUZ3jcOJs3nENvoNDnchY%2BIbLYLsca3ozfgbMeFG%2F2M%2F7irQU6fcDSGueY%2FSXNBss1Zqz8wjo8s9ElEzDW%2BoDavsTnaoqIO2BQS1PFm5q5LK92ltIEP8K2s6JdNV3KvH417QGVCnbxp4IIAhXTIEypItXi6LnvpyC0vKQjtYrbaoMY7aK20MauBPjZ0vVpmYHhkjtkuHx6AN2A2P2PS34QYXRQBMMvk0cQGOqUB6H9veS4%2B%2Bm2XgJaflvDdmAJVw36K0C7QPoGpGJ57V8%2B3Ji1rhu8n8SYdhz0h%2Ffh0tLO93V7Z%2F7C4F57tdLXuh2QCvGUFrsw9W6PW%2BYNF9PjcBl5bq0bTeweI%2B%2BHwg2rH8Dy%2BPviLqGnAWwbX%2BTsZj5Wt5VmKHdHBVePN9FCSe%2FHNstu1UrJJSImUqT5Yf7OWYwuW9T1gM1qHYamr15XfuCOPhUSJ&X-Amz-Signature=4d8fcb883407f8cc40d438fb6ff895dc8241ae9e8c738ec91d2506dfe4103ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=a7ee05979f608845dbeb5c4441ab60143e724f5f5928ee2bd19810941d8b8d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRXLL7OB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIB7YgDSTfMWodN0kQ7VnJVCajLdEqjKpndmAcMeuNhKyAiBcOOvknaaOG4mZ2vbAOpf880A4nGbQK11ID78QgR7PZCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaigfmdFOLHTqOxA2KtwDIohIXEgJReioBP%2BNxOzzWi42bECr8VYNEhdt2fZBW%2F7bEeZn%2FW2LMtT5hmLNhBUZSnQ2e1QRwNrFPAOPKiSN2YBOktkGFtPFjnIYqkrtztGS0nQZmiCX2mrWUTgBTySDo6u9C7GUA3EngYB5I7z3T1Rb%2BCoHOIAwx0GX3WGEVvSLkPAoEvbj6RXCaG5qE1ueU6E%2FWg7jTbLUp7oh%2FA%2FX8pY9FnEvkLqRPgPR2J8NCNhILmnHQnujaVGS8Llm7EWqWf5GhMVeSg%2BeJlPjAJn1%2Bpu2hVyUoEd1ZbSclof%2FX8Myy9bYMVLoYNHLI0GNCTH8VhsRPyPspz%2B9SkS9Ax6bfxdC104SiknHy3VLLFvxRz3QbXDHdFP2XOH7eOhdYg%2FLd1PphZIAAageSEuNRZTAXP1BssqNL5iQpaj1wEYj7A4Et1psbCcKLdcuFla%2FrEFm%2B%2Fbh5ejULJadavlYq5ai%2BhbVgWb%2BTROnxV8JK8XJk%2FFzvo3oXjNehxstKrOIr775%2FwGFfkOrF9NEp%2FRXXPoLOQElijUa0e3mLcZDk%2FE2PsudzsJhvqO7wVaYsyUn9102EBn%2FFzZMkgtO1PikRQSeOklMRyIEyOAI6%2FFsWqMyyJ%2BD856yBYcDigaA3gQwsuTRxAY6pgEBtMTSsNLAtlAf%2B44sgV4Bam7VJuvfr2mPR7mX%2B1CLljQzAlMSlBC7Cq3ckMyxOd3Y%2F9wrNOpbzdiE%2BQByBoxI1Lkq8a90xWRXOebGr6lq4Ulw%2FPwVjReQz8IttWTNV3oUoOuRIxEoJ2r%2BOwusjULqQD5oYsrJB474iDaYyPC48e7mVvXxAFLJNmBttw573nJ7sDg%2F57VNRByHAbJzvd%2BZgcdhYR1I&X-Amz-Signature=1762fce929144d6f24f4051f0e59eee33046ff2fca951861a07c72082798dff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=32209496e246295b399c3f3c0d70465cfcc893783f64933bbc224a0e6466171c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK52L7FV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFs3SU0vBUzdMcpNCFOxOW3IXSYm2Z2vxWOtOvvDPD0EAiEAmILwhdK%2Fn6M7hoXGXFXv4WlGVT75237fxkpaafCKPHUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPL1MWJgcg1lOAd%2BCrcAzkfHWKMWfhvtcGPza4uFRDywnUbJQ5Dn3u5g%2F0jmffiMHNxS3rN260oXOAQ2jLAmWVDLpEacakvEPbyXhXcP3hVPId9d4VdB9k6ervkMVBporqdzKq%2Fwd6t4F5ytK1vyhrVzCL9SgxIdqj2et8IGjkuCXkmdiGBerxiUiFnhUuzekELNk5g9TJVgxT%2BPT2KFWmYnWKmX8XoVbZHuLLnSBdfZv8KqbKxyKFtn9a2ogBWArHQzY0HjJZSzQ3HBMIIf%2F%2BuUfNjTWNerdxGtHnTmJ4w%2Fj59pAoCvPkoJ5VC4%2BVBPErTJveuf3jCATc2wDAomlDMTc1Uhp8p6o3fxV2C5uTcpLHbjIL3OM1DSz%2FG5wo4haP1gyrzGhpNpk7uLJ%2BLPiFEr48keZxovi53KqFPMSTkG9o3izo8JosTXboqqk%2Bao4sPIXra1zbaQHk0nUChtEuxjr%2BhliJ1LwjVyGFv6V2QTyhCoVpq3XUurVG5rEeeyGZ%2F5Vhh7%2BteAZXplrH5TGyfgprQZVlqDpDfvbaj7VsSFrEmmTZpb8EQDmHXp%2F4T9g8PNJHbnCpAtrEpZ8cu65e1KRa90W1Hb7KFfh1iAdYNYOnP55aTSqVrTXn18KFPvG4PvNyVx35e3YulMNLj0cQGOqUBHGbXnGRHDfyupjfE%2B6vMx7AdFLckYa%2BZf461dEwfGt41Ypr3UN3XCJg21AopddrPvzzwygBqzBEWeOXB9NyTShVklPjr9g%2BT%2Bgv34liMBV%2FqwUWnZlD0A5qlX9gPl1RqgabHxxClBbTULBUSMrESC%2BKaZWn0FxBS0yd3xsaeqwV8qBc5oJm2ktsd2lTymm31aickonIZkDS3DFiHGnjYJ4bv%2BumK&X-Amz-Signature=128204bda737aea0ad8800f9daa63783bfef1277f8b80835547a4303b711a83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=a0d68bda2007236cecd92b1ca87f27c967d215f2d4f31535d5abe9ba139b5833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2TC5QBY%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCID0XlPQzihwT26SmnAvBELzo9TGLvfnV7aqMfAC2he0OAiBRg0Q6%2BF4TV3SuU6jns4qJn7keVIhhzDEke4wstEtJ%2BiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM60%2FjN3VPPOeFlsYBKtwDU0nsTiBqvanbhhMRLMe%2FxdsywgVRp1BLTd1Z0on6SHmuRHFcFH%2FnE1ae9YNoSsoIblGi0b3HyM1BV13VJP9l8z7PiYECyW%2B%2BOxkxcHPX%2BAEu19LOwTfVqr%2FnaB7qEev2cFwFc32DmJt%2Blhr4XlrVWjX%2FbbtmfPH5x4HMRgHPoKf77e%2Fg%2By%2BSiTjgkIuiLcwBMnCfWevxQhhmsm5c1YIi08%2FwfV1%2FK4fYF3Qt1DdBSTcN4LVHphkq%2FIqCXRTHbBTyiCS496s5dpna186I3xPQLShhT0Tes9KlAYtaW5Qe5W%2BiHiHyKPFsQk06z0pAC0xwBBwrk%2Bwjaxwr4gV%2FZfiOkl4VCINa5kQIetWS9BzBtWMuNHcov6Udtl4PWbru0p6%2BR8D8P5V52lQS%2BV6D0SF%2FDGG0P%2FD%2Faxk%2F%2BtkBjZCmINt7%2FipFffIKVIZhIkjECcO%2FJbLHfQSpBAaQkXj7KjmRfe4MDwTYSqyiSCM2ttJhxuJjOaShFcYZeNOGEEJFcGjyz9mY5WubTbW1rmXrAK448XPQLYPFsn9RlxZ%2FNfgYjo2OOlyUI8v9IFPjXmMbF3psJ7ZOXhtGAdV%2FVkRvB99CsHMrxZdvOp2Tc3wz4PXNqrEKbNJacTWv6RZymucw%2BOPRxAY6pgHNCRUsX1uYOgZtbJxfKzdpqcvBD6X70mljGUWRNu7f20c0WsPBR%2BPGPY2ppZf3QnQOcEYqcABCesZ5OyzKk2IMpV6BtxoKJqs9RoeyVuR3Mr1nzeW%2B9Wipe6TQmK%2FKsLVyIThMERWAIVTA2JecdFfPA2FnKCBFeDrD2kz5I1xzcGBYNU8WdvI%2FzYGolwBh7SJaJ4wM%2F2RRbuG6DP4mBBnnQdiaxvBE&X-Amz-Signature=d080e3016df8a76d5c5df280e8df5023f4519ca971aae9f12e4d389bbcf70074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=e70585ff7fd6cf27444830ba7c42799110c5410ba9f74d0c308da69bab0fc3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GT5GMZ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCNqIk%2BSrdPaToDgyqNKiHqZQ%2FL6FsrAacFfcNo0K12ZQIgDPo%2Fs5X1eKA8ljMNsJYBBHzDP2ETpUGNxKNekvMz39cqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIi7AC%2BuuEbzh19ryrcA%2FY5GT8IYTEsycbkZiZ8ZhCKpo0TO68cUntNv3UEZgS972sHdwWZ6xApOZcur9qiVP8n4PN8AlLqh4IPZFUQPPc7jiNfUu%2BPhPqCfHhJAoIomdECTylOTMfnD%2FpFnuvbn40onHc8duywZYaQe%2Fj0vng37v7IMnLaDHgBuDO6z0k3Lg0w5E8D0haoyDAiEwtSQ2woUJRFP2UGP35kkaYoAubSqhFElCr%2Fygk3KFoCEXuyJldrYJW39Jb2D90bDe7mo0RhNaIVl4sqvKyOH008kPcvzfjxc5kYrWU3LfDm4IBdiKIW1uIFSJJ%2FqDQ4sq114y2k6ecnHHeTJ8M9EGLNaPE%2FQGeg1g23pLK2ApBMcxv4sV7D%2BQfp7yHuAqM6FT8B4uGbaWhGSdSPAda3S7nEJqSDE%2F6KKh6bVfQb3vOnuhC3QvlbdJ2PUPIzp3f9D612T4Eqn9dlCMeTMuhEITMZRhpuo4J%2B%2FrPqdRxEx41Jvv%2BtHHTu3Xv6m4TxTwixmmTV90K8dx6JrDHBg508cp1FOmd1iDjfjGkWbb8KZpi7fQxtAO5REDqfq3TaGJcmo3K7sJt2nKTJ7h3IwSsR%2FhUB1tkLnr6Mxa0MASO%2BiQePigoY%2FnmCXIvtDMLTegkWMLTk0cQGOqUBCtjlTU1HMeEoc3JggCNrSZ053g4pNSWcxiEJXViCEK5Vl4dfL%2FrkMUd8oV%2B5ndWfR9wWV9KPo7gnk5l0Daok6nbQC7ZUVthGUksQqQ2CIuYI8i3DiYFQiQQ7as%2FoHUsCaLX1bajaJZ04NjANBAnLJ1GI5oJrE6rYdVd7uELNPrpu4ygb1ZtKA4h54tUjeZbHCHgFAQKcjP3SfF4idnnbyv8oddek&X-Amz-Signature=6331f015b8b4ff00e4068c264aaba4b592e38a195784cabb344bc7b679a83643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJVQL2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBSdzcxFsv9jfxc7Z1retrOXp4e999YFw1RNvV9TogZEAiBvSee63uyZWT1l8MdZpAuAWDNg0TFvl5v9OJhlQ4xFEiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH9HCcCq90tbEBp5KKtwDHpxsVUoXgVmf4tbJ%2B314T8vibQAwMPPOYRxFxHu6KCgi3uYPngOVypwk2aCACAwa2jGPpqpVc5g3O1840Lqe1iqGFhazubj0%2BNAP99MndT0iqYfj7w5AvPl7iSbrT29Zov0Mj9uw8EKbYJ7GU9jK4w2gZjO8U7byWByqhUkO0PUV7M2MAlVksjiizUAXpYI2K%2BkVdhL4cJs10C5VvwteRSnGFBTwe0BrtCT7IuArp2YPNhlHSCXCm2U4cmmGlADDGpx4044Xt20iDFJ1IFuoLOER45MAkPVMoDtqUgg75n8mqxQ1m3Al5UT7bkrK1n6nIrTp4k74z%2BhItaHuJL3KHfdXoPRL5cu3bCUGyurGXHLNTtK1WkDRTgbVSILUauB6FsTI7NS9ZuzP%2BAJwRbFkJzc%2BYlGeDwUfBTPBQBcFUjFWSMHRxQNDzGrr6hQumyQizRVEjTuQvqmACoOSX9vrL6Nsd3CcdjldnfhLFLzcO2K4w8zLimXVnsPyEPCIeZIF6vxVzLHrig8GEj7hJnYdLZCos9RH1%2FNV5lf7oi8AfAHK4pRVfEmj%2BaYXIMngBzFxOnjeBWaNITSXsuvOqowY4YvAZn%2FPOhIF8UVSBrhCGEEGreF0MtcQCbMBiU0wtePRxAY6pgFwCUnQaDsUTfPTCt2G6Ge9nqBYr%2BV0txCS1opi%2BdYqEwMj7fOY%2BvyPNAoCQ30TVTEBvr6tjJ0U7Q1F2DcgBtv7JZboKWp4YB5JVKElTCC4MQCqQxEsC1DEko4OA3QmQgd6HISKTNh77iFFY0P3sKyuQ2FK6SpmSj5qC%2B4x0V1WG6q9lWZtpAexWkyqjy1Ay0Z0HVNpARqRZlpkKuIncz4ZCIQhgZVw&X-Amz-Signature=ba2ab13eb63990cb105f250b0a9cfc1aad4c304d424f1be1e1625402b1449f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYIKMVAK%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD27xcJIo4tcD85qXTgYA5A%2BCISQ6kxk1k1rC6DtZS8bgIhAL3pXz3IqBQVIOyl3sdRYDqMGx%2FcAr8%2BvwqDYFtB8wejKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx88CQVS9Jv2Anm3SIq3AOm78wEBbTNVJ8jT%2BnsmN7B8BJosvpA6XO%2BisjBshdSfejO3oDqK%2BVZ8zhZhXYzk5ilzOgn6Ef6vV68I4UCmxGRU1yD82zIpLfIoXKcH9NUnaVgo%2BpNJJTXNLa1tHitveMNGoPCrDos0brJmNo%2F2yRAb5GJ2Um03w2bn%2BK5mBzx0SYFeAqIlc%2Bk6FegDI2d5A%2FnZlIJkCiSynFztLJOXIU%2BaDNtG%2FfoXeF8F%2B2yXRHaY7BjbmaaeP45tzykvGACQlNbo1%2FVl9oX74JxvT5KVfCq2JX1Bq0qA8NgoIVwFpPOl0srrovTA3cl42IPONnmQjeExp%2BWAmQmkRLdsButEY4U4kOTz%2BBGCsbsbX5lT%2BqF0yuS4EXGFNwJty19Z5Iy4UqpzoGD6yBJofuSAlfZfEsmNX8LKzJAra3HkBKps6T%2FexEm2DPB0qTv6FmWRJ%2BF7FPSRB8h04Kmfl7F0XXts7%2F8P4edPAr%2BmeruCxJrZ4K6dp8%2FrJTuzpQ0RcbL42bsNOklGewu6z0Xw4yQ6opAX%2BT%2BOjGuBC3v2knZtKWTG51KkG3QYRHGO8TxOB3yxnNxQtqXYlL3AOh8ZAnIpHxOqXv3R2sTx2TIoc5rOrLd7ep1ke5ZKxOVEFPYdvKh9DDv49HEBjqkATW0u64vytMsE43J%2BmJMq65s4Swi3mnqgvj6%2Bbm9dK3NILdvuU61MmjM1ciR9qcxhilIfN8VUtCSjx9cwcJm6x6ZNbtW5ewRT0m0svpSWj3sJ2gQwz%2F%2FfF9Zh6C5CN%2Fj82EmAMt9I0yUSUOJaNFtWw%2Bx9Yuif2rdrNDbvkimyUQui6sVWEHkGPKLda%2FBhUgXkOuxNxxtrJZeNKUR8CZ7PL5l8mL4&X-Amz-Signature=c49bfa6845029431502de09031b539c5f91b068dfac37b13f7836c0c7aa43be5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHKO6FJ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQD48m721lA1HbzhcG6kZG3an%2BmaSXXqaDOkD53WP1dA1AIhAIkZ%2B30GnWVLdT43lq4TbU5Wd8GWr1CntxNQZJiN4%2F8wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZxPrPR5xwq9ejgu4q3AP7w7VEUPZx%2BC3HhCqtyLrWTF0B%2FSDccETEI%2BDQa7JTX8b0jQkXTgQ%2B1isDZLClHi5CydnrvDle4bjlVd5gfeQGE%2Fnzwjjvg%2FP3VS3KY%2BKanMFaUOk8ZroDZrsuOvmH5v2oYme%2FhK0zvDIwsYsHzo33wnWKGzbWYUI98WXt6Mhi%2BPLtmfLp12J395Q4gIwTb90imOKnpRb9Vwjiktwrz25Vnh1PlH8mSTF%2Fp0UFNp47E3nXx626w0UeBejHcPc%2FZt3A4BgOk01oT6lnSn5LX%2BAbyeEc%2FNl3mbqpNw0OwjcfCdIE9Ji2fjMAytJQFqe8TmMWjKiFxzvyrGP5%2FqkRMra0O9MJEOuCf0bXX2lL7FNzLap3ffsVHWsb2MNb%2FVY92s6r4KpV6D0mYI%2F9ofdo1%2FW0Gkjf9zS%2FNqGrCpRNriPIUsDprcI3xsFmEoW1Yr9lhwObWjc4VKrVCwZcaUedtXULM5ACPIwquc1jDFpI7yXzhjmKccR3ugqu7DTNP5JUKm%2BymvuOEx74PqZNmHxxYUUB%2FBuwmctjA0yH5mqHO0d0AKng744uEtCfkoyxbYQelLIQDPbWDue0EOCfxuwu%2BSk3PrkW19HJNi9usaaKVra7MQfCYUtyq%2BUZHsnWDzDT49HEBjqkAb0lBNEtrQgdlbT1pGKhHTuNu%2Bzbg0cxS64zKXHmGnxD4y2ZJUbMgjbsBijVC1mYLTgXRLncvyCqrtvf14m5dRcmzZeVDa1UUNGj%2FxiPVtICepicdMjSGplwY6fls766RvIYu%2FpbJsNJjSUWEsm%2Fg9AgtX75MUeVo16lz4%2BoHz2ceHjdBmg6lUlGJR2owz%2FBQ1RPoPmtl51kP%2FM1ztGzJUhPw0%2B1&X-Amz-Signature=f858dba3cfcea64633e22932b1a56bd1222f40123610260f326b58e6c1a4657e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626M4SARM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDqBb8%2FjabwK40dpjxKkj9Y2XnVJzY%2Bx1ZVhW5Z0VjSuQIgUwMCKTHVbmpw%2FNnsFUaW4622HIs4mm4B2pXXH%2BjrrP4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZvF80fNIKzv37wgCrcA8k38IZzs57ugT4N21H21t7SNh1YrDw9yTfmyVxfx59nE2HjG4xqOTt3G%2Bye1Ji8X%2FJ9AD1pElWNlyjDbV9igQb8LVKZac93kOw%2FIrsZLnE2twmb%2FFfc7CDufON0Iop80iI0bp%2FP3W1osQq5le%2Fdz96vYoSK9jj4DCHkWf%2Fc4vJAP9exaWXdKL922dw3fyLcO%2FZiV0BGAB7tEATOwQxSuyGGUW2NACB3Me3C158jd9qpvnntXLIhhsFApndIIGXcdFJAqastE8kUpVeuG2tZjcgZ6URCxWaRsfH%2B2sE%2BULZDJKXgdimEGgLuirDO3taWvY%2F5c5zBvhvlB7%2FXuTVYmvi7VuBd%2FSEjw%2BNiBk6sZziKv2XpJZB%2BKtyW7tvWVTfeNsXfTvoSwVs8shfcWA2EVbRqIXUNrraq7o%2B1EmoOKSwNWrnHDpH257brnkN9KKU1gBh4WyRsqeRVFF%2BZ%2Fy%2FkKy55hhhiNP7oAtMAYDWpFDB1EiGYzwE3Uiwtrt%2B25C8vl%2F2Pyw7rdItiqD7aM6TLjhiQtpj%2BDBwxg%2Bqty5AOTvvNydlC0b4DAfII7FbdLUJrLHu94QMt8aQ%2BBmIqjcAb5PGASp222nocbxtOONcdQDPQjm%2F4tEjNS3tE567kMPfj0cQGOqUBgOyP76li9RqdA%2F6pqL%2BFtr8uQYZFuf%2BG4rzo4bmmIee5g68ohlKGA7gpnETu%2FQFjtzzNpdPnhbhW7nmln7vYo8EPVOue2ZO%2BtHZ%2FSAqCjlwtVvlSy9t0Iadzxmwk%2FAF3ttVuczlgckBgtpZey8gzaNYM9hh1Rhyy9%2Bykkb614bH2TYVeTlwQOB8AecIWg%2FwjnE0atSfCwxnuKlwF4H8S1W7KGTFO&X-Amz-Signature=1cd660357e6a9b78af690658bee19102a9c55d755c298431186214d7e78ccf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=dd781d57196b290dce75bf8cd82de5664c5ef72699a8cc7e6f085e1c33374ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HZ3U27I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFowRciC5sGFi9PTel2aMaaPT5%2FYdRitSwPUz7IsMtCdAiEApYZPxf3B79pq40JfixFQppY9DXj2GJGdMDKyRIBkDlcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLkcwm%2FkD2bWF3UhayrcAzhXBu2ekDgW3LaqR3UlrOEg02w3ZXpej8wlPw%2FCmVKY7Y9owiwxhK4PzcKvgIWPhqVpxEr0kQQUmchv77IUK8oxSacLQUXmSaiLOL%2Bwde8T5exEH67Xt6GtoziM0BtnM55djN%2F17p4CxPu41qsYLhoo1UsAyygfuLHZSqv%2Blzf7mTLmAu76nDjqhPVGfwnbsH15ny31BwjBjBl0ic%2BQR1QdqEMCl04NwP5uhRqPEX8xaiF6FAhohDZ9jqXWaJVkt9iaLtplMywcXUlkolR9mvNfL2L79nP6xUjM2swMU%2BKGzwAsjVUMUIz6Ns5p68bs%2FV%2FuTdbBHZdTPegOnOnEdWKRvr7VvwGhhMEXmYGq%2FCNHxnUkt2vcXLdpmOH34FVUw6wr207BxQU9EG%2FHoDpWQymQjGIkYALQGZmpSLrAAAjIksr7pxodmyJcFmmzU4d3xzjWf%2FoefcBMkW%2F68QzPLooCplHCKzNbV2QPOoJUxacR9%2F%2F43jQsrtlxyIvkyw2BEq2vcGa6vFJyEe06t0%2FDXrjOeyawS8888HIN75kojjRpHzczef%2Frbfjd%2BAI9wHNepoHjSMieUp48LNT9391AAsHVxkw1xsfrVTHgw%2FVMMMWYWw9qJCI1kUzWARGZMMfj0cQGOqUBpG6iZWCktLItDAasZjkuW%2F2P8NyHLGoXjVi8xFiGMa%2F%2FhQVsc6nUxUAxlukiJeCBmVUbFNV0bhUINeeS5pptn1S24wf4fuuefvYuCoYJJx3KnAmAvWtzLwok7GC1dRFbbLPf93IDB0nRYk%2FE8yWVgFWR7i07gLASVcY6Is5RMLTJzrn8q97102O9S0ZS3zWPX3P1cNVkdiozPkGE5S0iV69mpEpz&X-Amz-Signature=00dfd3ded0ad39b791526f229ecd5cae54ce02c19f1da6c0206a2e414500ef31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=d3e9be76c875ab61a4b575a91530b34f753eaf50c8aed39a167a07aa3ff95165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=743757e0e52d6d14c9ced5027c9c04b46955ecafc417b69faf5f6f7f667b8e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=558dd3e767cdaa2333ea1027f76a052c11daeca7f10204e990bff16e3ef68c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=c2cd8ee33445d66416c86bff28e014e23d5f355f5efe8d0ada97598b095577df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=8a9d03ea1ea114ce85bf5bd38f97a50861592ece8f5a1d59b634c5f40946501f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=4aa092d0430e75851ffd84787eb502274b09e9c1c141da19e08f3555e24d8171&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=558dd3e767cdaa2333ea1027f76a052c11daeca7f10204e990bff16e3ef68c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=88bddc276a06ce3301c9a0e129ba52f0b21db111cb7e7dcdaa8c450707b2260f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=16e69e660365a669db224797bc3e10aebcedffdac7a51e4e9ee89f84b5cb15d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKJW6LW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIFLX8XjHzE38iubczoVfga16NHVKC1blSk316KGBfia7AiEAnUAFATRxKE64cgjGN8hqguxbOKo6y9lo06TOl6%2BcnCIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6xuWgv4Z5JKYSztCrcA54ix8Co7NOZy4gGbL7s0jOB8cOqgUaBBeiJdiUxoZjdMgQ%2F0W7%2FnknKV4o52cqpmgH53XvYII5nZ%2BB4MB7tgO%2Bx29o7D%2BtKxhwvMicL3l235fmpPUHDEWF%2FltttJga7HDCM%2BnynQzJzn9o0LXRZKQml3hGqIzkvLn8%2BylDQ3Ov4AJrgPGpGWSxCJC6MXV1EipCl7ezGar8YkIny4enyK7kVLTMg1IKkkR5K8Tz1hlPj77dvawHK3Or1nC4nG%2ByjwSokw%2BRcXSbrSEVeed01M2TDK6srNSecLSThQ0Zs1Czl11pwkBscZD1x9jP3FxlJEFaTFMK38ZaoXhVsZ%2BS18C%2Fwg4d5UKPoR5mydkNrqALBatWYFt%2B9Cnn2h%2F278AEfeCd4xz7Gjv5Mj4HC2z7GBq%2BCG7hjqW7bLZ1PJEQcUUEFPRQ1oXB6FKnEv5%2FvZS5V510LJ5RnaMBaU6rhKAsqS0OH6RoEq72lKInCycZge5yTbzwHirTQxzfjd5EQIZ9PKL1Y0wj7mEFxzUFneqHTXI5ZY%2FxobpDKume0LPUSoP5szPGXPZvtmr6KOnByez4tKQTroN6ApCv7TF4JQgsXGR109E6i57q0lB61KgebBE9e2%2B2Nrb9d6uUs9xaLMIHk0cQGOqUBThE%2BYX4xnjNbWykkfLIsl7uOnwdcYT5I1F0L1vqBSWvaZeSL3fDNdgJL7fqqyS7A%2BC%2FHfmWg6uW6SrsCBltHyXNAeNaSz2l11l1PkCqX7lTDad5RKN%2BN0r%2B7HKMWPCV%2FOHSo%2FA%2BSflfZBT4SAB%2FrLG27oEj2x5fcdR0vARQdldMMDc2ja2a6vpL%2F%2FUVCTeZ8w2d9iDozhwJZCrb1y2OsdIHb4GX4&X-Amz-Signature=5dbae3857097bf0feb788dc173c0db6e54848592340a90fa6b2e1a7e9c94ad88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
