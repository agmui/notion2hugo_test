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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2e7971c2-f4fb-433d-9a25-bee0275b0c5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=f6ebe282cf00e71b85292b8bf1dbcc364b00b0dc69651ec9951187498eb38164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We will make both a **simulated** and **physical** robot

If you don’t have a physical differential drive robot you can build one following [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/mobile-robot/project-overview#the-project) build guide to make:

> Note: we wont use all the sensors in the this picture we mainly just need the Lidar and wheel encoders.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11af63c5-c62d-4468-bfa6-42d59960f4b2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=c6c02fa872083c3e685756437b7defd22b47d3f263bf5314704b8879f2312314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulated Robotics

# Setup

{{% alert context="info" %}}

I highly **highly** **HIGHLY** recommend first completing this guide on your laptop and just having a long cable connect to your robot’s sensors and motors

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c9eddf7e-4d61-47d2-857b-62259495d849/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=81bc0557c6c1b3f12e724ed8e7a9cf239efb51faa843d5ce17ae7ae33b76dc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0c7ed841-4c69-4b4f-b6c3-1baa0eba6ffd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=6b78065b2085a9ab3e1e0c291d05ccb33c9361741f29d90bef6c6f8699842759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

at the bottom of the `Dockerfile` file add this command with your path to the workspace

This makes it so you don’t have to source your environment every time

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/11b51c99-26e8-40bc-b7d6-efa178890486/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=8ec2b3079d57b8773f4a4397693463cf826e7eba4f9531ad23a31776c640b0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then rebuild the dev container by doing `ctrl` + `shift` + `p` type **rebuild** and select `Rebuild Container`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6370e386-8fdd-47b2-9f51-a9aa85fb1042/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=3deb9f7b07489a890736709a50a0e11349ff0aa3f030cf7d3d12bb2c82563430&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe56ccca-e206-4f2f-9de4-26d52b5a91bd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=38abf9113dc16afab7c0773fc694cf69c8f87cdf3c8b59250cade85166992ac1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/af21fac3-f0b0-461c-bc6e-0e6fca5ebfd9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=7de0d90995e71459239ff85ee310bcbb8bf0d5f05f72aecad414ae3f38c3e1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

install this plugin if it is not already installed

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/06135e4d-ec09-4e55-9e9d-151767f4c101/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=e8344f2522f647c9746e04452d825880391f512554b0f0a75120176e9ace00e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`Ctrl+Shift+P` and select "Preview URDF" 

A new window should pop up

Here is a preview of robot we are going to make

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d9477f9e-1699-4f89-a59c-339b2c6f927d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=db26deda3238b07da4fd7ead38abf52a57784df534eb920ff962a3a23aced5d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1dbfe061-cf69-4ac4-bd3e-b7eb4e16ad07/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFDS7O2E%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDDKUw%2BZ%2FbInqM5XqSAdTYkcTFVDnrxtVgBXhw%2Fp219ywIhAPoC%2FRDXMVp6snFlBrX9wMREb8D9K%2BD1xzhgBKLPoFmNKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4dVZAX4QgUZIkmggq3AMkBp7OcaYWkI6EQzpc7Q8Eaz9nGjNjl%2FnKv4j4%2BIdqimBtdtFL376Zezd0V%2FGAuS%2FM1QK6lf1fh3wmWmjE105cPQo9lq%2F7uHmK16GwaotJ24PcrcqayXoQSLywhP8R7m5Hj2FHzmjACCbAzMUMczemHF0p%2FKtFiWrIJhDLYPBJMbkeAeUopDdB3Y%2BcqTG8eWuHTu4BjBHcXSgruODUhZHsi%2FpGx4A7NEMzR9D%2BJHwqzvNxjDbpCRRzJR6EKIrJrDngJPwGwb9E3pI2GFUspsRR51vAe1NXkagBELEilYimcld9gmBxjTny14iXVLI6tleWTYkXSnepNwuz2vWRuRudDsISyLZcI4rFjWIVDBXD%2Bwf%2FkW4apVhmgJmtcukebm3%2B3SVxK88N3du9%2Fab7epQkB1wWX0HHUiXvQ9P32KJ2UkzBoj2kXPIkERbT5p%2BpshXJ5OQY%2FWuWVY4b72toXzU3mhxi9PBqyELKpQw2TIlAMQWZDvLTGdhNa2BljBfz9NG6sfFpnY395%2BhAM9PnGOpdBpgsSbv18XsA4NUsRE3e2Oxecod%2BxuVGMhyp2eBNhmRR%2FqDZ020mvgt4%2Fm1mSF1nOClttqfniQoBCBD6VZIIx87eQ515g7ufebO%2BhTDEiNLEBjqkAVejaaFI%2BSEa41a2iPM7ybr0lSENxJICYIsa64QcHecvV1SGCCgUFsUQtNuCbMi9W2vqu43nHssZDsvZFVQJLa9LfmntceEDnZzBZcazEPrf%2FR91rTvHRdFaCJpSJFIW%2BZrPYUV14i5ofUfnD6wEWhh0G6KBiG%2BbjWQrZbR33EO96a70CikhAadrIRKPuRyEVzkNQoBfSesk%2Benx79ZtJ2bxZXZP&X-Amz-Signature=4f1c243325108f99013fe3841b56c4edbb97f775d053ce9a51ea062e5e6b5eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6bf9269a-add4-45ed-ac4a-729a1fa98bbd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQYXF7CH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDBWeSG81CercH6Va90%2F%2FnOD6yOHM8ayUem%2FOLdlTnnsAiBTU20Ju%2BZJ683jEX%2BDhwPGsO%2Bz00a8pcfM3yK1CuE8FCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjo4PoGB5%2BF%2BZ8vJtKtwDOH4GPnrdlkOAk3Tr%2BDc0mBzw3gkhTFMxLVq14Q7gFTGeJFDMoI0pZAC7kJ1Rw6atTsjaaTdROboIe%2BTfVtTUKdxWjC%2FjZq82MvaMDe1MGORTW9a1cuuF4ZQ7h%2Fjk5gHeYrxB6PjaI4JbPA6pSZio7noI9NFa5%2B4rKWp%2FUoHFlL8jZPr6i7bd0vmhy8dZY5pcl7YM87b3LGBTPDQb39GhtGFn00Z5wS1JwLJKqBGOxj1nNSiAf02%2F4U3O8S%2Bmfk%2BLUuoIDcg7FInvw1iliEwixsHB7MqyZAvnHikR7ee%2BU5SfB1W3YYJnONtZ5LLpc2uLOn4W%2F4seNVAIDwkKnebSaZgRio%2BLQmcYBu0hUq0aRAsAMGYSdxRfB8qxqxTo07lz5eCwuRKomOzSNAWg4k7ZqMHcnuiO5%2FHqqNCku3RiUP%2BvOG0%2BKlTQbN2Zp29skXQXA6o%2BXtvZbNwRDpQTtkvVNFbJS5OW%2FiRAH2XOpbheeVycYDy7%2B0TsWk%2FGuLHv7gJ0l95wHYXNZ21%2BR6nxnMV2L2062u9eRzsRI9FQTGh5I5%2FqINIGKWdrM9A6XlBAbAZcbxjC7XAslhyf75iORnqMoje6px%2BkwDzQ0GcjMTf5B0jS8O3Ur7V0HtE3kZIwtYjSxAY6pgGc%2BfHDo9yJRM4EkwD8EvSyugqDkxPO6ciO9q%2B0UNZK89SGgfm2AYRFYTYE1mmMel3xBvRC0xT2yKK4hSaJTKFx2Tps7iJuOEy8oSPlV64rWvsXHBpY%2Bm8fx1YXCB9vmWiEb2nJfYTGfDZju5NAH0jvIQVzIxYAB8e0h%2By1ffoYqQgMvhaXS7g8on3YajSpSqamNVliXJkCC%2FbPeCZxcLE0mRZfLvgO&X-Amz-Signature=85ff2fabbfd29546dc8a7a3b386994f55761f277dc3ef2a2d8b2d1265b5b39e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/874f3efe-705e-43de-8833-53cd66d84f0b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCB6OKV%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFK3XKCkYgdzmCXcwBr%2F5KbJNYL%2FGlDGEahIc6nqJB5lAiEAl0TVQX6tDVqKJi8f2MKQqMTVQTyt5NocM3C6fLyxHZUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm9Oi6l%2FyOZNM9b%2BircAwDl1L9dBPAfm5FCY5Ks4oFmaOELtFTaQpzgDP8dP5l9wttjIpRmE27TpKxXgg0UgsqT%2FLlaMgTJaZD8IqdNF%2B%2B78te1hlsINWFq5%2BL9onG5%2B6U8dtq7Bek5XoAIp%2Be%2BskkVfHYF0Kfp48cE09a%2FQ0WZLZ4DTdHSju6dBPEtgSYRw0eKcU0oY1QWQpCamiSIQI9kG0Z9J6OnADEDJ6ZR%2FGnnjELSoYJzjyVYNhWPI%2F%2Fa6pihKprF%2BqKrtMgWRPADX3vF8rrX%2F%2B5%2Fxfffh2vvivmNrOOrsNsLZId5zDTMaoj4I4qrdd67xcSKAcltFlNvTcO%2BKUeqFTS1ebRu3BmmRvryDllOUEg7%2FbNbEFKc%2FRvg7fbMmLb88j3hcgIZHr1x04O8NrPRo5f8ckkjfPAeLzq0hqFWWciaHOLzhcS58MbCUNY%2FDqJ0bCQ9joeyJrxW9uKAv8cLpNJp56zO4toxReitJDRTPEwo%2FQuZ3EM11PKSVM3kl3EKxRSapRqLHorS9zLWnbhG9iPj1XQuMNCeTuOuybE%2BwHeCmZjRGjwpWL9bqMi40zufUbdWkXZG4T1GcpGgMRts2kyH0YAxeKnZ4lDIbQjZA8BJOD6mqU%2F7BzoTZ%2Fs1KsqOLYC9%2By2WMIOI0sQGOqUBr4B3GSmUgm1YvREj%2BFQqFpTcAAOKuR6zAakepHpbblh16GoqgNgzfU2f47QAq8GZgYAXMdlKOiN4ZjQJ9AgQ7XMqIcx3W6vlygv91Q2YkQfBtLIRBzAXcRiAeurPV7vgz9FM2kCkurngH7cRRCbs8VkOCQ6p56lq4Vl68XmR71lFdnmGlUiA1NOsvtypLxYMZ%2Fy9BmRjm5lGnuzflWXzWhhIYKUr&X-Amz-Signature=3a5cec4b54c79c12c470e72e3b59a750754c48b844cf29531499d928a8640fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/48a30ad7-4d21-4f3b-a5f6-793c6feefc6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=49e52a4c12287d9399aeab67950adcde876ac6c18aefd50bbd0cd57af45f2cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6569db84-0c8b-4ee5-ae26-6ef5eba0a59c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDLRXRHH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQDNHzSxYh%2BHV%2FTdtQXRnWEy79kFYZXbanfM7eOAUgq1JgIhAJKyOvzwx%2FhE0IRp%2FZUliPahKIXdB8SVPWFd%2Bsxu%2BTAgKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzO6CPIacvBb%2FJd9goq3APmzBx1faRCCiCroisZRCupFpPFFMSfaS1QNWC0HDXMyxCVI8FCMTbyZiBj2yGoQ%2Fxx7NuKnhQVTVVifepVKvpIerBnyhCZ8IGY6pGjBpmQj%2B3Yl0XKQ4rdENV5upgWuIGjXA78y6NAVwXn2EPA1XaEUEayp5Y3YAOhGte89ft33UjyAiZ4k12QLYQ8V%2FbgogkKl8B2Ha6PVEdaWzF%2FZ4JR%2FmQ6FUyy2XTuavXbwbxsFCHVmH6Cwu0VPKG%2F88Hulmv1PvuFs9AB6%2F6HE8nP3E6HbLZScvlekn8aW6u5wttoMKYKGAuKIK0yqKTRqP%2BtL4gra%2FDLxMail%2FSv5z5S80hUahwzd2Cb1YhTZgXg6J99m7rct7BVAC8kc8V%2FAKySb4dZiYcd%2BSl0IoJwlZ7NYf8sLF4ZiK%2BKUu8lzNkP6Lmie6BmdQ58JiPJ5OEno1M3kcL8L2F4xejxYS%2B4v3wuRUbUAuTwu20zKqrymxUJZYxkLhucknDQSZ2W7PGk13uBuhwI9EUyMIJsP3YehnZgsuOUYgH9TRDcV5t2XsMnZBU1KYdDAUUz0gAWnLBiF2aSRpMSzY9xFlCWirr95IaivQvzKbTgQPEDCkxihso1cwWL%2BiIBsda0vot2LmeHEDDYiNLEBjqkAaKqq6GwYp16zpikZZkv0%2FLi%2FWqsbN5DwNnbtGp0t2vlEM9xb%2Bp7rUOwoxFMostVdasLqqFpqwjH%2B2PKS93JiQSBpXtGkD7cUOZAWq07H3CDASHULiMHBx5Rad9zKnKNMcGKZ4%2FrLyvp2qbxb4uQogceWZIbUB1g%2BvYxgo8yo5CDyXrBBb%2F9ubYkNPo131OmtgIbcUeT4ggS%2FvICzhC11y62zGD4&X-Amz-Signature=7dcb20d674b2d17853c1ff2e460f4e63be1b2a329e8d3333a32267db3a5eb4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

> If you click on `Joint Axis` and `Link Axis` you can see the `base_link` and `base_joint`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1782f82a-256e-42b7-93f7-05c84535662d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=458e69df6314be3abd42af3c21e5954772bdf3193e1fb5ff64a9d8257e756f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/25c2d1a5-ad21-4326-86ea-eb2baebecf35/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6MXVWAI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIFXxeYCJZwDGBVPn3%2Bd%2B6xJARs5gZBDNb9S4UEw%2BnZyfAiBYH4YbCFfP0kADZJmuk7qt%2BsMs6XrqZ%2Fl0WazHnlircyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2g34R14BwZ8hn2vnKtwD6KwplvVKqO8fubo046LG%2B1E4YRPQsd%2FqL3fRI2%2B2z5q32YqMGwq07ncbHRzoet79L7tSPo5YTFV7TTF%2F3JJkNm1rFEhyxdMSigdrC1JgB2C4D8qu7qqRQnHBE4K%2Bxf99TOanCaoSHaLKzWYuUmbP6O29vn4Kl0ALvYnr46hArQVaif%2F6fjKCcfg7oHEKFnLcCFLSaNpTXc86xK6lFF6ySSu5yc0atpPSQpMrYbyRegZSOpB1hphV9S45KiuNpAY4Ec7gSU7njghr20mJ%2BGXK50rOzzvDD6iEBFwaHjUfrDjSHWLMvE9pna85ksoX3Jn7Q7UcX1wmg0SHyvZwgXQwGAhxZB%2Fr0ZcIVTZhj%2BvInYMMAkVCkcnXTnNuEknWlVE6ZaG%2BkDDV1XDuATBbsIC4mz3VSU%2FZIs%2FOpJEiDg2oULPRAb3vE689QIdLyNn76phAOFm1j2%2F4yJ9VqLOUvjzRP%2Bz9Tn9KYDjX%2BX%2Bo6Gry0il3ymWjcH42VAvmzRi8bmg7RZm%2BcnsGBbEg0j7V20duzrwljwX9iKrXozr2H4brW%2F4b1qbDPW7Fm5ZmYLXUsK%2BJ6R7GHoLW5r1CRDP5VMfnujv%2FH3US7xZtiT5qRspHxkC1BtE7oqK4xuY%2FEBEw1YfSxAY6pgFRNch9dTBZNsAghLs9NxwJWpePBfft%2Fu1eUNAu4Js5Kf60B54JsmWJm2ib%2FL39T%2BXdi4gAg8jFOVrv8bEykZccf0rYLXsnh1qcpKW6Iv8UBt%2Fx4drBRXpGzY0fsedQPtCr0WnOsswzNi0itJeaxecR6cLKD39qPuVgUrBFyTp4KRT3qHlHJSQVHfjLlbpY6GVSl05W5yvSERt6UrtGw15tStDmAn98&X-Amz-Signature=62bb16f9e4f1f322cbbb67dcc367de07cd0afbe7f620c4a0ce26d0dc26d32226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3066d41f-e7a6-4b34-88ee-f815cbd4cd02/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=7c8cd8c08452b4255f7324189b177efc66a8fe6103e0152cc0136312c1308a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/506cda82-0fa2-4ec5-b70b-5f17e14639a7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DK3WUFB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFCFBZgNSvq933fcPiX4USBBZgkCKt9HUWcKMoREEf4AIgKeW2sbH0sdzz7DAQZCPNpJOymq5hr3nErkdmLB5hOZoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNof6zbjzfsIol10hyrcAwTZquloKVULtfI%2Brrn8StvRRoTtrPFGN%2F%2Bv7KEAE3HEUywTaH6ZDgThnrWmg7bRnht0D62sA87yfFxBmsZKRuBeB9GL16Ya8bzBamE%2BhVtudE300IEX48bcFcBdIKluHWaJbfsCMLQB%2BnjVvgSO%2BMo9dVZi1SsSqDfZUxHlkGc%2Ft4SIS4VfDl3a83TbMOvxyGbzPbhhg4dsV591JNKi1NwRtNZUAVyIJi8Z72s4Mggvz3h7dQeYiVyrbIjIdjESC902fzAGsB0HhpravTxmw3nI1zZXWoZHKdnqLOEY0is5qkiF4XseOUv2CbBknW29ReyklpOzvgrB4IMAt5lDQER5pGPys7glj33ZSb4MPNAuIIE7jgZFndzP7nWDoiu4JzgaNFjmLu3m1SxNY6Xmd3%2BWQhHV4HVPn3ZewNK8ft8qwI7iK9J%2BzNuCi%2FsogeMvyZuF%2FnATUAksNHy8OsXV6%2Fb9r2cl4Hy9e%2BGVoMtb1DklWIeOaLHH7IdBQbvHf6tJZNMy2M2FUhXoD%2FboyKTfXyd7vQdxl3Zvw52Ty3SsGd0XtJ%2B2e3zXpxDHCLJ7AVvrMXpOjbmVkmIYx1WI%2FCmfNZ5gfh2aDVZ%2F0zR9xkHdZpNEQImIpO6477tBgMDwMNiI0sQGOqUBMcV1RhxKq6fLZnLdMBHhrqSRFFeJKxrJoc2LxXVwPfBULG5EZN4E4sNRVqwnwL0fTbO7Op7LC7k01FHYzg8QMiED9ZAJ5Kx%2FtL7K41FBMRJO54vbg1tMEOGLeuvesBH2ln%2B29Tx24l88RyWlZKs3A1ewK9ILmuJhy1V%2BfV4eYg7PVGK8Vmx8pg5qCQV4bOQrPnmA9VOr3JWRYePdDuL%2Fvg0shkkn&X-Amz-Signature=5e946f26b4f09adc850929a9d06857badce1802ceac14604166c6833db14cc29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ee1627c6-fb01-41ec-9a6c-4a623c797b7b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=648ae1201a0cb6a670c9a03f28aacf671ff0ffe8bcb424d7a999e792d6b02888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/40f639af-d781-4e1c-bc59-19d85913073c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2O43Z7I%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQChr3tr%2F%2BQn6vSszdAnM7MhDF0vFTWITgQyArh%2FozJcVQIhAJSabmlplOgmxQO1DYq6tSDEo27IRRUPFE5AcTVxcXnGKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYwQX7h3REIK6o1Wgq3AO%2Br%2Fx6zpwFZq0REt0tXjAqTV6N3vcZ68mB4kUwZmO53vPdoCEfnDnjq9gjqAPO4a29VYj4uCU%2FiF9yTG%2Fzn5VloAwymFEnKrf8FjkcNfyV4%2Fi8j6m0ZetFR5EsLWviJRqq%2B8A8lwOjFJaj6ZjpgXJUznqDJgTRK2y031TOKcJX8GN19sF%2BGnurGcA%2BpSDDH6wx4wKA3zt9qtOURAgqMzTO9kJzDPHbtr2mWOW7sj784QYpC0Cs09vYqig0z6ris8gJ5FjhfJcoLX%2FzoTk1D%2FMV1OK7v9nLJgMS2343q9PpKB%2BtJ2EUhCe9dTyKhMKGJqAdJSCmoahvem065P5ctlQROQ0u8sblIaHvNxsUGagPl%2FzS6uu03Ff7q1Zhvn8Hcu%2F6o95kuAM2G2uh54ybRzcSs1L72nUCU%2Bx%2BTGZlyjU20CXCow5i2SUtty3Vlc8AiLDnY3N6A%2FmUhXIwH6qC86AtMuRf45FpwQNurLvYWSLqaXCB%2B52XpNLKOxQd70lNDlrHqcURHpp3KePd8wsA9TNCkGy1Ib9KgcmAVT%2Br4zSruz%2BmcJ9jXPWybD9iyr7PxiMBVztgDC6t4DmMn%2Fa9XwL4DXJaYP5ed8u8NzBWjWM53nxEUXmykMZ60tmDUDDSiNLEBjqkAaTJ1Etk0tBaAIsCB65HLkiQwTkpfA7QJXe5WHFCbxxn7LgzAj0gQywyRnWnR7YtCxKrFduNWnTIdMlQtH1Pz9PcOf13yI8ugCTKkgqpzTC%2FcoU%2FMSgrJ%2F4PfwdNqZEXxN2PO3S1vpuR34HTQJZw8FmwAkhmabM9nszR2Mr6ZebN3yaJmjPdaPbOwMdgBLy%2BT1aVraR89ogu%2Fuil%2BuKMlhOIGao%2B&X-Amz-Signature=d5525ee9437b5ea8e3a220dff19fefe8064b81a1f0a6abce66b7d780f80d111e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0ae439cd-018c-4bab-8557-36cc1530a3fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AY7HZD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD5BQx%2Fb2S0fjSpkeS4S%2Ftq8MUQJMC%2BVGdcTZ8zMu3f6QIgAxFbMJ8dJQATaVQ9LkGf1wsJX55kCT9wwMLrcG6x%2FBAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIERMA6JbV9EN%2FEkvircA5C26V6bou%2BqApdW%2BBZu2wjJm9pBkvfi7ivm9OqDwHoWLmXB7JRM6T3ZMMPmjWE9kstJgGBRxOz03jaOxZyHu9ViEjASjkFlhyvObhU6tHfe2AJGd7eM3RHDOouSISfnplQ3qOeLtBOWKQBKn38TnvQAfsLyqgx4Sr3d0ghLn1IwEOaDjioast%2FkHLFwUKWb6g7alzPFaBxFVG1XfVvwB5TTzmCGNEf%2BEY%2FwtiGCjEUpoZnnHz5MaNrC%2FLYNXbnyuwTpYzQ%2BxsnuYlNA8LV9vTESGEoDq4EvDf4sn5lW8Fo1FgOdxIJLGLQd5QOWJVPeIbZpYU3njdojldLp9Jhy62U22xtXzbdSKz8hTz3Ep3POFbWv7Z%2B6obmyYOEAgyUGx5GIAlr8tR%2FTQS4dDf4As2f2aP8%2Bk0px6Q%2BiKJ84vwzdQ9biVI9rxHepMScU5tfFpi0BSKIrEahmzSwJIiF1EP%2BpHNTvEGvwWMcFY8vAu3ksTykg5%2B8iQpJDOYmz6vbBGxuYUW1o6x2l8HyvP2VKC4EPfPnWIFRD45IlrpEhMojuXReX3dsPvM9I1a32%2BFag7jIqwJzJdVd6tGwW3s3kxQujfTIBXAcNy9zjceLO5IxL4Hfeoz0gxVy1l3dZMPmH0sQGOqUBJtdujsRVfSWTQJf6S6KwoymMk1PPwpuTFZtuQaxhmMI4UqqNvnZBgRkt5F8Rs6fwxBGw8649sIXUeut8wE%2FfwTYelzUqvUdmCB%2BN7F%2BjY1wW76Q6JHYGKrxVYJQkeCTkuQRi8hqvDAzJ8pnf8r1omk%2FLs4ExGQPlpyk4MJ1pQFkzpP%2FRzIt0ljZgrAhn9BMpmLlO7FwQe7LF%2Bmen2odC7mBZBz2y&X-Amz-Signature=57024b936180599aa10058ad64a276cccf73544f40e786fc4c7f6cf9491b5cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4664231b-abbe-4822-8182-81b79df3219f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C3SJIDU%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIFroaov5uVRuIjpYupY0HVjfU2BWyqeMvpffoMTjfUW2AiEAlDg3STsNlqO7mqGoPkYUuGIc1OExt%2FqADK0avwBhvpgqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAjLOy7zwN9VLp4suSrcA00tCn3ZPcp8%2BcgEj8vltgnel3vRvB5DUSL4KdNo53TBMW2G8wkQDw1B0MfCupTLiKo4uV%2BSJeql4R3mzXYe0h7OcxSalds%2FMf13nmgOS11GCbqYOPg8rgQsNyR4AWTDmfS3rvYow58IBrB49Nr%2BB%2FsYn86nu00r%2FXQT4%2FJTSxPhRn7k3CVO2IHgqk%2B6ZEokUmnBf%2BjsGrEImS67N7adPwXOgIGV0Lhlf9bOdKSq69Mkl%2Fmo13B2zSevHdc2LgJEXOj1JjjsKu6xNJchEiBa%2BxusL22%2FwYdH8AuyAclhS0V7DhH6jbGYuLnCoXarSaUeaNhSQLmuzAuXkySePf1BFgTRkQM4KdzNDcN9jcSZrzN7K2PRPL0aew%2FZbjlj3bnfndaJLpwL1ZEilB2x5xqd9ZyJ164pCjlzdvgVFHazFeEOfluFBYILJyKKOM9Ou%2F%2BcmeqVSfz7GqcKFeZkcx9HR1k8YuD7ORDQiDmqwhZSRnUGMiu9YR8lGUDnW994A7in%2FSq6DjF3KaedYqvAovrLMKCLrOXqS66YC6HNSXC9ZB%2F1%2BwBnthi%2BUvqYoqtQd5iS07tttyEx4DG%2Fpd%2BrZrbemYOmqQ1I1ejHZaSOXv9rK2Tlem0NysjHB%2BckezM0MO6H0sQGOqUBhFSWU3QXzQ9wMXiX6pu27SvQSUMQi1VUVe9jAFTA%2FJcxXBnaavqNclWcMXmYiV65KFo%2BToVuBpOnpgPhRShCuo3Qsg%2BjXmfRaXIxMCimWP1MDGeGLB60lg5qz%2F6Frue1O4QlEkUDHEzGYTb%2BLPIthm1PjMApIl8VwsWGEc88imEvRjDEWlZ9LVLvCTXyLJwXBJnuE8Lw7gTS02Hxhc%2BZt9%2FYtHYI&X-Amz-Signature=1b852c574e9c63a527c55c0d18ea02598610eec6a90957e6bb7f269acf07cab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8a7ac595-78a3-44c6-8779-23e54de3ce28/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZEVHP4N%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIF7BWq140u3EfnYM30MVKBKGlyXoUXVkEat8lNtgz3R3AiEAj4KqnfoHWxuO%2FiKvRZma2ZXBm3RN%2BBIMB0BxirGy9wwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsj8vkfkBjm5ktgGSrcA%2BH%2FWVF5v8IPa6w8oprucchzFr2uSM7EK%2B%2FTqcXHOWCHD6iVSGB0b6bAmueWwRLVS5pDb7twwPi%2BP%2ByJ4Wg6NTDndO2aAu3jReiRgCjCLZlSoYsgv7%2B3BQGX4%2BO%2BY8S3OB42CrbNoj76zPfUeKUg%2FSeI3QilE080xGOvfvfqai481egbB2x8d0rkoAKDVnvhbmacDvTIjtMLuF6K89AgUJP49jEMmlnU3Xg0MaoXryeQCbnL230iSYGoCa7B7ol%2BTH8vHa3y33G1%2BhWKXTjEU4YzMAw4jbwNlq1jYsIfGbTZ8hwZPZKE37dcKE3Y9xukUS0wHgL7PEZTpXvtjgFfUc8B0lrpL5k8%2BIIYYrVZNRJcMb1c3dvZMdRI6WGKlewTMT%2BPeveJhjaYW1qCG3pOcFWugRQrIF2l41mqyVUDcmjXplnQQr4ZiEumoHnQvFOImQNJcKCyxJ2HepM1gGLCcuhZaEmxpPQXiLJyYH1A3fI3kUpy8IjEtfJK%2BGkjv%2BcqPwq5Kdc3bp3ozNiJLWvc%2BgzY8X786xnOl%2FcCseJyC0oBKK6ae%2BBbYEsasf6X89QLAD5ekNmRnzzctpxWkOCKh8t5j6q%2FwrHx9Jtr8tkJeFbIxWTZOqngxE2pI4epMP2H0sQGOqUBDtxKlGWXPICwpPCZp1O7wHqTp%2BvTuoomgs8JqlRofEc2%2FR0%2BybrNVI6eyidBJriFMpP3KDS2X0hsAg2RobS9%2BrXWeZDEfWXkFTuh0l%2FEqSqkfH0l8LYILsVFeowjMtnJXiXhtHTfy%2BUi6mCOb0j8MEVByuxfPPGIGXWJbsn7ZCIkEgyhsTcKJhwwtmRgxoTHT6zyzZxrz%2FHpPmUvrGzbAJVdvjAr&X-Amz-Signature=dd6f9115b75003b01cb90657e865ae0d91312f17753302420e88dee7c064b540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/db20fb0e-8d4b-44be-bef3-955e8e8b13fe/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKSGG72%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T111024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIA%2Fj8K1ch2%2FqAy9aoYonVqIclafrcDePAzdphKBbr6OBAiBuizheeU3EO%2BoqWvWt9j9u%2FMoV56EzvarFHlkVGqweFyqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FyXEwic3QF9xM4HsKtwDPP89BMq03Sqso1uocSpYJ6CZkvC8LKrUFUFiy9WZ5RUwYsr9aLBcNV4DepwTtAgvphOkptuIqI9NUhErtLiD4Psa473GYcSRw09VjoiWexh3noNHRTTg1uykL8tispwRv0o6E7whyx591YVzLUdOkYMO14EFEOa2ZPAEGv%2BNNkNa01KIRzJLOW0SEsDVBxoh4cqYDmARXU%2B2sRcwzuJf8Jed8r6TDf8EoJJ58h2LeqnOkJFxLzBXPjYdgKN4qXIXYPqz31ORjy3KF6dH2z3frfxLD0sMdOEnQo1Efyaq891pkerV7jTEORcmkmBGKKaO%2FSl5QbnZNZmjpSDkMHPHrCSGb1qnncfHcdUQpxznDG2E3Zh1j9fSIDQXJAryMB5Xv5Ca%2BaReEOdwIJT805ct9qNm2s34N1cH4UtBMjBeNBd79bub6gdI%2FjVRLqpcF4RlVz04znoXunptKcPIETReW2ChpDMQDtkO6pUMDi7mMswp9uTBNjm5nUax43%2FvaG972BPT22549pxsciOd1yZDL%2BBj8fGe6MdVXARlx9C2Zxp%2FRyIOJW%2FAqoctC9mH5EUWPIY6VgqfrG%2FKvr6gcZoOmldnNCDEX8QyLelu%2BYwXmhlWCxLC70ugIfSSD7Aw6YfSxAY6pgGQSD89y02vtBrNc9VVTBaA%2FZN%2BQJd2TgFSunfidqtYjEUT870lLvHkaRkN%2FwyF%2BirWXuUftJay%2FH9kO5rjEbnqnj7IyNwHRebOgQQPsTGjFSpqETU0udFWspWAU1Ycg0xNW2ba2LcJRGhRVSTD9EzHvJNa0IJE%2B9wnbCIWLAVvVyjlBsQDj5SHvIy3onDcIFnT5Ijt%2Bs0a%2FdWjuj06fSAcCBgsk522&X-Amz-Signature=61c220b42951ac9748ba0f3bce88fb2cc510e23b1822c892e948df74fdee4290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

We can check our work if you click the `Collision` and `Visuals` buttons:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8fe5c5a5-12fe-494e-a494-03d0e9dd6e03/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=df5d1d0e607e1625a09d4f8b7d0cf661ca170e95f7d31b9ed0b49607c283a08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/398bc017-8088-4a00-b16c-1ec1c3c8b4d7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NR66B26%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDFpHyEhfsXGQqwkP16rA6G%2B%2F%2BmbUxr%2Fcn8QpsCy4uyRAIgKnERX5tChmznUA6K%2BMLWrHghNfyd1wO1xw3jy1%2BS%2BiUqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF3KhXA%2B14Cmn2%2BqKircAzNd%2F1AV%2Fj5PYWkGdppZN4hDtnNGO2gUWcvOW8LI47xtFMTUOlXxU1sLiQRqYooYKpMZsbJ7roKN%2BaWq3Ii8eNtdgUT4paVZo2UJl1yOxUIipQQLllKNfzbkX2rBUDHvm6HPvL30j86np8yYlkkDYimnP7S0u1fxCKka0CJgsyJePpn8G%2FMbIbW2f6sRcVqho5a8aOIfUr9U8yXShOxvRjmgWrLRkb7W9aGZ42Nt0CbquF4CGdlKwFKlJQ%2BGX4vjYNukC2h2fwzbA3B%2FTEybNXvX1tLdVMj2cJ44r9Wh3EGZVeJXCPr6bT26MM7sOYrqeWDsMeFOEfw4%2FUkZ6mQ%2B2AdJILnneMYm5g5LlPMMTNZA9hvzPTKdLr6urZG5kq2fg2TyhRpNQ7obp%2Bymae0amObMnI9eRIaOlQX4fbzESnG9dCE1oEgQhXOLU52STpNCRfB0TypXGDPorplnFUq4wETNurkMWzS9yjCkqw2mtoRfF00vrfNwaTlOtdwp8mnjPRPBzEgxK4wOGvREMO%2FWIwEvxZV5TODSsVcxiH%2BJqiFHK1FkAcbBM1%2FGJwh437V30hpGS62%2BebsVTjzjFH8xEr5kpDVem2YbMqCjmc34uzoa%2FNavuhUzWZKBoKoDMJeI0sQGOqUB6SUoJn1tNNcSHaShorz%2BWWgTbe8LANTmY3QCMkTBi7UqeUGzi2%2FjTGEoyVzXngE%2F6k9zqVaDprQ%2BAzqsER1lX2vXVoxZ9nAX0ZG%2FOd11xc8htoxSdtE%2BQ1J5Hznbcijzmu%2FsW%2F%2BIHIQN%2BKhq3idYicF569TMeDHzZki%2FBFBDyYmDKeE24kqAP%2BdbGIbRTz35OPLgDW%2BGPVMXBoyAIXLmHVJsngN8&X-Amz-Signature=0f91a2aa6ac2ac0c6f6bc7f13f1f7e4709a811538cfd280f7fa5dadf66d4b9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/51afd2e8-837c-45ea-a5ae-bbc25d3e6df6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=36ca79c5f05d84ff61368387e13ea9ea77b2c644a8b7be9fc0d1c8282705fcc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dce8055d-c57d-4f80-8230-55f1560bd3fd/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=223329f4b89ba9166be5e293d1d7f375d8a8600f411c2e310b28b6cf4110d539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`robot_state_publisher` will publish the `urdf`. Any joints that are not static and need input will go into `joint_state_publisher_gui` and have a slider attached to it so we can debug it. Then it will be published back into `robot_state_publisher`. We can view what is happening with the `/tf` topic though `rviz`

Lets run these 2 nodes + rviz (to see our result) in 3 different terminals

```shell
ros2 run robot_state_publisher robot_state_publisher --ros-args -p robot_description:="$( xacro path/to/mbot_description.urdf )"
```

```shell
ros2 run joint_state_publisher_gui joint_state_publisher_gui
```

Download this config file and add it as argument for rviz2

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=dc3f684012e1a8faf174943c91603eb13c0413aa85f58d6fadcda0848cb9bbc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```shell
rviz2 -d ./config.rviz
```

This should be the result:

You can move the sliders to move the wheels

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ea3d6bc-2527-4f04-98e3-63681947cb6c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=be30c0647c88bc0eefe8a20786c6deaf2a875d067f7ea078abb44d3c61a7b54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>No window appeared in Dev container?</summary>
      If you are running Dev container and no windows pop up
  </details>

Now lets create this node diagram by writing a launch file

# Creating launch file

make a folder called `launch` and inside put `display.launch.py`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6b2caedf-12e2-4aae-a7fd-9e54542cbe66/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=a5f226eed7e1796518cab03dacfc3b4b6fd335c163bc5d816fb3b8728931f47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/18c989d7-0697-488f-9bd7-4258b4b17e80/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=21f18f04d55249f7ed9208e9b05e96286adbf299a32296193c5d3004e056540e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/67d75246-84c7-4599-b369-b719ad91dc47/config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=da2949e2dd950e9c6a77936bde900fd13aad916a19be2dbc454e55f683243a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=631a47916dbb2c8c64dc29d8aee0c33b53e2907aaaef0868437deb3d947d78a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

we can check which nodes are running with `rqt_graph`

In a new terminal tab, while `rviz` is still open, run `rqt_graph` 

```bash
rqt_graph
```

Make sure you select `Nodes/Topics (all)` in the drop down (you also may need to press the refresh button to the left)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fd89aa70-7c86-4776-8e5e-ad547d2cafe3/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=f3ae1bb85d415d5263932380131e361a4422d5e463ec90beaeb70e81c4ccd65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/97d5367a-1425-4bcf-825e-db8177485ea5/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624TUZOPH%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCEzIws6Iv%2FS2TKPLVY1leUnHSWLhIfvbOSBcRZ2iD1ggIgSANlaUmubG57xcjvJsbbWvPeh9N28U4RDKqx7YbIXQQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQo2mUGPprPfOO3HCrcA34R3yxkQHvzV3WYcKONUMR60xZVT8i640pKmjNDFnYh3oZaIRO7dMiD%2B0trKBJwCti%2Bl4nzltHsPUdThQup7mhySCGBO2vHuQlti9WpSnr5rRAPK9x%2Bjx5CU1aQg%2FMYDaj8cOmD0K1Y20dPOa7%2FwTR6w3gfVTiSXjYqu%2FND6IpYWu0VmbwXoX%2BgEBTn4YDsLBdJMu4cqirufDlmLP0LqgVqGRvX%2Fd4DJ2Gs3VLCKesy3CWUIyqc%2FgelzqR5H76x5a4MBFR%2FOwXQu%2BmtD1Tp5%2BcRAsbHyO97QYuaditVMzDyHk%2FBrdVlJ83FhuFppBcLmAQ8xAt%2F3C7FpyjKN5wtx%2FicqU8B3d%2B7Ow2imR1o7%2BwoLtgyeg62zTLu29SsD%2F3k12G2Vm80RQo%2Fdv9Z%2Bm%2FSQB2EImZlvuqA6m16WWrKhaG26j6RwsjvUaqIBuUO3IiiwLdoajQ9TMJqFGnsDYrcRc6AALZtNmpNfFzUYUPTmsGTVj7h7OaNoIy%2BZ7%2BUSXGpFoTRg31zkIrRl%2FNAqgF91omgIg7po8gWACu1Ma4ooC1X%2FGeym9HFIifIMEIQ3Vp%2B7LAfOfNnWzOKReZ4Nh%2FGWU5lfAKt8bVsPnF1%2B%2BCZWbWYO%2Bh%2F9mWI8ddrwL0bMNeH0sQGOqUBhoYLHiUTJ91maPfhc2tsxU%2FMWMjhWchGx0oHZwWeZs0g05kyBRLhgJp1qrV0Y3NqB1mkS4RSa8qnsewlYNevH0SDCA5FFpYUXIFosZ2uN5bF6wQrl8jAfQUUy%2F6Jg17SDIQKPYQsf7lgeLVWC%2FLbnO0uVefAMKIURYfPOJJvASUh%2FDLerbvUSteukjrNzWH1a92Pq6mGf3Ov2%2BKnK3PgbVao2Q00&X-Amz-Signature=0f8af7b52387bcd202a9e099ae9c06377c9dcef248275dbf8af80fff6ed897df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

 we will see it is matching our **Node diagram** from above

# TODO: also add checkin points with file system idk

<details>
      <summary>Final code</summary>
      TODO:
  </details>
